"""Chapter 31: binary unbiased estimates and Gaussian proposal coupling.

Run from the repository root with: python examples/ch31.py
A safety-cap failure aborts the experiment; no partial results are reported.
"""

from collections.abc import Callable
from fractions import Fraction
from math import exp, isfinite, log1p, pi, sqrt
from random import Random
from statistics import NormalDist, fmean, variance


def _fraction(value: Fraction | int, name: str) -> Fraction:
    if isinstance(value, bool) or not isinstance(value, (int, Fraction)):
        raise ValueError(f"{name} must be an exact integer or Fraction")
    return Fraction(value)


def independent_variance_pair(
    first: tuple[Fraction, Fraction], second: tuple[Fraction, Fraction],
) -> Fraction:
    """Combine two independent completed (A,B) outputs as (B+B')/2 - A*A'.

    The caller must establish completion, independence, EA=pi(h), EB=pi(h^2),
    and the required moments. Within either output pair, dependence is allowed.
    A pure arithmetic function cannot verify those distributional hypotheses.
    """
    if len(first) != 2 or len(second) != 2:
        raise ValueError("each completed output must contain exactly A and B")
    a, b = (_fraction(value, name) for value, name in zip(first, ("A", "B")))
    ap, bp = (_fraction(value, name) for value, name in zip(second, ("A_prime", "B_prime")))
    return (b + bp) / 2 - a * ap


def disjoint_variance_pairs(
    completed: tuple[tuple[Fraction, Fraction], ...],
) -> tuple[Fraction, ...]:
    """Pair a prespecified even count of completed independent outputs once each.

    At least two outputs produce one pair; across-pair sample MCSE requires at
    least two pairs. This function neither drops nor truncates any supplied job.
    """
    if len(completed) < 2 or len(completed) % 2:
        raise ValueError("supply a positive even number of completed outputs")
    return tuple(independent_variance_pair(completed[i], completed[i + 1])
                 for i in range(0, len(completed), 2))


def independent_variance_reference(
    mean_a: Fraction, mean_b: Fraction, second_a: Fraction,
    second_b: Fraction, cross_ab: Fraction,
) -> dict[str, Fraction]:
    """Exact W moments from valid within-copy first, second, and cross moments.

    Input meanings are EA, EB, EA^2, EB^2, E[AB]. The target interpretation
    additionally requires unbiased A and B for pi(h) and pi(h^2). No fourth
    moment of A occurs. Existence and integrability of B remain separate duties.
    """
    mean_a, mean_b, second_a, second_b, cross_ab = (
        _fraction(value, name) for value, name in (
            (mean_a, "mean_a"), (mean_b, "mean_b"), (second_a, "second_a"),
            (second_b, "second_b"), (cross_ab, "cross_ab")))
    var_a = second_a - mean_a**2
    var_b = second_b - mean_b**2
    covariance = cross_ab - mean_a * mean_b
    target_variance = mean_b - mean_a**2
    if (var_a < 0 or var_b < 0 or covariance**2 > var_a * var_b
            or target_variance < 0):
        raise ValueError("moments must have valid variances, covariance, and target second moment")
    pair_second = (second_b + mean_b**2) / 2 - 2 * mean_a * cross_ab + second_a**2
    pair_variance = pair_second - target_variance**2
    variance_identity = (var_b - 4 * mean_a * covariance + 4 * mean_a**2 * var_a) / 2 + var_a**2
    return {
        "target_variance": target_variance,
        "correction_variance": var_a,
        "same_copy_mean": mean_b - second_a,
        "pair_mean": target_variance,
        "pair_second": pair_second,
        "pair_variance": pair_variance,
        "variance_identity": variance_identity,
        "second_moment_bound": 2 * second_b + 2 * second_a**2,
    }


def _binary_probabilities(a: Fraction, b: Fraction) -> tuple[Fraction, Fraction]:
    a, b = _fraction(a, "a"), _fraction(b, "b")
    if a < 0 or b < 0 or not 0 < a + b <= 1:
        raise ValueError("require nonnegative a,b with 0<a+b<=1 for the ordered binary coupling")
    return a, b


def binary_correction_mass(count: int, a: Fraction, b: Fraction) -> Fraction:
    """Exact raw H_0 law from a zero start and the ordered common-uniform coupling.

    H=0 with probability 1-a; otherwise H is Geometric(a+b) on positive integers.
    The restriction a+b<=1 is essential for this particular ordered construction.
    """
    a, b = _binary_probabilities(a, b)
    if isinstance(count, bool) or not isinstance(count, int) or count < 0:
        raise ValueError("count must be a nonnegative integer")
    return 1 - a if count == 0 else a * (a + b) * (1 - a - b)**(count - 1)


def binary_variance_reference(a: Fraction, b: Fraction) -> dict[str, Fraction]:
    """Exact binary target/correction/pair moments, with B=A because h^2=h."""
    a, b = _binary_probabilities(a, b)
    meeting = a + b
    mu = a / meeting
    second = a * (2 - meeting) / meeting**2
    result = independent_variance_reference(mu, mu, second, second, second)
    result.update({"mean": mu, "second": second, "clipped_pair_mean": (1 - a) * mu})
    return result


def transition(state: int, uniform: float) -> int:
    """P(0, 1)=0.2 and P(1, 1)=0.7."""
    return int(uniform < 0.2 + 0.5 * state)


def replicate(rng: Random, k: int, m: int, cap: int = 10000) -> tuple[float, float, int, int]:
    """Return H_{k:m}, its uncorrected average, tau, and transition work.

    Work counts one marginal transition as one unit, and a coupled pair as two.
    Once meeting occurs, only X needs further simulation through m.
    """
    if not 0 <= k <= m:
        raise ValueError("Require 0 <= k <= m")
    if cap < max(1, m):
        raise ValueError("Safety cap must cover the requested averaging interval")
    xs = [0, transition(0, rng.random())]
    y = 0  # At loop index t, y is Y_{t-1}.
    t = 1
    work = 1
    correction = 0.0
    width = m - k + 1
    while xs[t] != y:
        if t > k:
            correction += min(1.0, (t - k) / width) * (xs[t] - y)
        if t >= cap:
            raise RuntimeError("Meeting cap reached; the entire experiment is aborted")
        uniform = rng.random()
        xs.append(transition(xs[t], uniform))
        y = transition(y, uniform)
        t += 1
        work += 2
    tau = t
    while len(xs) <= m:
        xs.append(transition(xs[-1], rng.random()))
        work += 1
    ordinary = fmean(xs[k : m + 1])
    return ordinary + correction, ordinary, tau, work


def reflection_coupling(
    rng: Random, x: float, y: float, scale: float = 1.0
) -> tuple[float, float]:
    """Maximally couple N(x, scale**2) and N(y, scale**2).

    On a failed meeting attempt, reflect the first normal innovation.
    A shared proposal is assigned directly, so equality is intentional.
    """
    if not all(isfinite(value) for value in (x, y, scale)) or scale <= 0:
        raise ValueError("Require finite means and a positive finite scale")
    innovation = rng.gauss(0.0, 1.0)
    first = x + scale * innovation
    if x == y:
        return first, first
    displacement = (x - y) / scale
    log_ratio = -displacement * (innovation + displacement / 2.0)
    if log1p(-rng.random()) <= min(0.0, log_ratio):
        return first, first
    return first, y - scale * innovation


def normal_density(value: float, center: float = 0.0) -> float:
    return exp(-0.5 * (value - center) ** 2) / sqrt(2.0 * pi)


def acceptance(current: float, proposal: float) -> float:
    """Acceptance probability for unit-scale random-walk MH targeting N(0,1)."""
    return exp(min(0.0, 0.5 * (current * current - proposal * proposal)))


def integrate(function: Callable[[float], float], panels: int = 24000) -> float:
    """Simpson quadrature on [-12,12], used only as a numerical reference."""
    if panels <= 0 or panels % 2:
        raise ValueError("Require a positive even panel count")
    step = 24.0 / panels
    total = function(-12.0) + function(12.0)
    total += sum(
        (4 if index % 2 else 2) * function(-12.0 + index * step)
        for index in range(1, panels)
    )
    return step * total / 3.0


def gaussian_report(repetitions: int) -> list[str]:
    """Audit one coupled transition from (2,1); this is not an unbiased run."""
    rng = Random(31800)
    first_proposals, second_proposals = [], []
    first_states, second_states = [], []
    proposal_meetings = state_meetings = 0
    for _ in range(repetitions):
        first, second = reflection_coupling(rng, 2.0, 1.0)
        uniform = rng.random()  # Fresh, shared MH acceptance uniform.
        next_first = first if uniform < acceptance(2.0, first) else 2.0
        next_second = second if uniform < acceptance(1.0, second) else 1.0
        first_proposals.append(first)
        second_proposals.append(second)
        first_states.append(next_first)
        second_states.append(next_second)
        proposal_meetings += first == second
        state_meetings += next_first == next_second
    overlap = 2.0 * NormalDist().cdf(-0.5)
    state_reference = integrate(
        lambda z: min(normal_density(z, 2.0), normal_density(z, 1.0))
        * min(acceptance(2.0, z), acceptance(1.0, z))
    )
    report = [f"\nGaussian one-step audit from (2,1): {repetitions} pairs"]
    for center, proposals, states in [
        (2.0, first_proposals, first_states),
        (1.0, second_proposals, second_states),
    ]:
        state_mean = center + integrate(
            lambda z: (z - center) * normal_density(z, center) * acceptance(center, z)
        )
        report.append(
            f"  N({center:g},1) proposal mean = {fmean(proposals):.6f}, "
            f"variance = {variance(proposals):.6f}"
        )
        report.append(
            f"  MH next-state mean = {fmean(states):.6f}, "
            f"quadrature reference = {state_mean:.6f}"
        )
    for label, observed, reference in [
        ("proposal agreement", proposal_meetings / repetitions, overlap),
        ("MH state agreement", state_meetings / repetitions, state_reference),
    ]:
        standard_error = sqrt(observed * (1.0 - observed) / repetitions)
        report.append(
            f"  {label} = {observed:.6f}, MCSE = {standard_error:.6f}, "
            f"reference = {reference:.6f}"
        )
    return report


def target_variance_report(pairs: int = 25000) -> list[str]:
    """Buffer a prespecified number of disjoint pairs; a cap failure propagates.

    Existing replicate() supplies the original raw binary correction. Its h and
    h^2 functions coincide on {0,1}, hence each completed output has B=A=H_0.
    """
    if isinstance(pairs, bool) or not isinstance(pairs, int) or pairs < 2:
        raise ValueError("at least two prespecified pairs are required for sample MCSE")
    rng = Random(31910)
    completed = []
    for _ in range(2 * pairs):
        raw = replicate(rng, 0, 0)[0]
        if not raw.is_integer():
            raise ArithmeticError("raw binary correction unexpectedly ceased to be integer-valued")
        value = Fraction(int(raw))
        completed.append((value, value))
    estimates = disjoint_variance_pairs(completed)
    reference = binary_variance_reference(Fraction(1, 5), Fraction(3, 10))
    changed = binary_variance_reference(Fraction(1, 10), Fraction(3, 10))
    assert reference["target_variance"] == Fraction(6, 25)
    assert reference["pair_variance"] == Fraction(689, 625)
    assert changed["pair_second"] == Fraction(33, 32)
    assert changed["pair_variance"] == Fraction(255, 256)
    return [
        f"\nTarget variance: {2 * pairs} complete independent raw corrections, {pairs} disjoint pairs",
        f"  target variance={reference['target_variance']}; correction variance={reference['correction_variance']}; "
        f"pair-output variance={reference['pair_variance']}",
        f"  pair mean={fmean(estimates):.6f}; across-pair iid MCSE={sqrt(variance(estimates) / pairs):.6f}; "
        f"negative pair fraction={sum(value < 0 for value in estimates) / pairs:.6f}",
        f"  same-copy H-H^2 mean={fmean(a - a*a for a, _ in completed):.6f}; "
        f"exact wrong mean={reference['same_copy_mean']}",
        f"  clipped pair mean={fmean(max(Fraction(0), value) for value in estimates):.6f}; "
        f"exact clipped mean={reference['clipped_pair_mean']} (biased)",
        f"  Changed chain a=1/10,b=3/10: target variance={changed['target_variance']}; "
        f"correction variance={changed['correction_variance']}; pair second moment={changed['pair_second']}; "
        f"pair variance={changed['pair_variance']}",
        "  B=H because h^2=h, not because the target-second-moment estimator is H^2.",
        "  Pair counts are fixed before simulation; all corrections finish before any summaries print.",
    ]


def main() -> None:
    repetitions = 50000
    # Buffer all summaries so a cap failure cannot leave a partial experiment report.
    report = [
        "Binary target: pi(1) = 0.4; exact E[tau] = 1.4",
        "Raw H_0: exact second moment = 1.2; exact variance = 1.04",
        f"Complete independent replicates per setting: {repetitions}",
    ]
    for k, m in [(0, 0), (0, 4), (2, 12)]:
        rng = Random(31000 + 100 * k + m)
        results = [replicate(rng, k, m) for _ in range(repetitions)]
        estimates, ordinary, meetings, work = zip(*results)
        sample_variance = variance(estimates)
        mcse = sqrt(sample_variance / repetitions)
        expected_ordinary = fmean(0.4 * (1.0 - 0.5**t) for t in range(k, m + 1))
        report.extend([
            f"\nk={k}, m={m}",
            f"  corrected mean = {fmean(estimates):.6f}, iid MCSE = {mcse:.6f}",
            f"  uncorrected mean = {fmean(ordinary):.6f}, exact = {expected_ordinary:.6f}",
            f"  mean tau = {fmean(meetings):.6f}, maximum tau = {max(meetings)}",
            f"  variance = {sample_variance:.6f}, second moment = {fmean(x*x for x in estimates):.6f}",
            f"  mean marginal transition work = {fmean(work):.6f}",
            f"  variance times mean work = {sample_variance * fmean(work):.6f}",
        ])
    report.extend(gaussian_report(repetitions))
    report.extend(target_variance_report())
    print("\n".join(report))


if __name__ == "__main__":
    main()
