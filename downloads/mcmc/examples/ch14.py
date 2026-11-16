"""Chapter 14: rank/folded R-hat, missed modes, and precision references.

Standard library only. These are teaching diagnostics, not a replacement for
production diagnostics software. No ESS estimator is implemented here.
"""
from itertools import accumulate
from fractions import Fraction
from math import ceil, comb, exp, gamma, isfinite, log, pi, sqrt
from random import Random
from statistics import NormalDist, mean, median, stdev, variance

Chains = list[list[float]]


def _median_power(power: int) -> int:
    if isinstance(power, bool) or not isinstance(power, int) or power not in (1, 2, 4):
        raise ValueError("the exact reference supports integer powers 1, 2, and 4")
    return power


def _median_draws(draws: int) -> int:
    if (isinstance(draws, bool) or not isinstance(draws, int)
            or not 1 <= draws <= 1001 or draws % 2 != 1):
        raise ValueError("the bounded exact reference requires positive odd iid draws <= 1001")
    return draws


def _median_point(value: Fraction, name: str = "point") -> Fraction:
    if isinstance(value, bool) or not isinstance(value, (int, Fraction)):
        raise ValueError(f"{name} must be an exact integer or Fraction")
    return Fraction(value)


def flat_target_cdf(point: Fraction, power: int) -> Fraction:
    """Exact F_k on [-1,1], extended by 0/1; supported k are 1,2,4."""
    power, point = _median_power(power), _median_point(point)
    if point <= -1:
        return Fraction(0)
    if point >= 1:
        return Fraction(1)
    sign = int(point > 0) - int(point < 0)
    return (1 + sign * abs(point)**power) / 2


def nonregular_median_cdf(point: Fraction, draws: int, power: int) -> Fraction:
    """Exact middle-order-statistic CDF for iid draws, never an ESS substitution.

    Bounded oracle: positive odd draws<=1001, power in {1,2,4}, rational point.
    The derivation counts observations at or below the point in a Binomial tail.
    """
    draws, power = _median_draws(draws), _median_power(power)
    probability = flat_target_cdf(point, power)
    middle = (draws + 1) // 2
    if probability in (0, 1):
        return probability
    return sum((comb(draws, count) * probability**count * (1 - probability)**(draws - count)
                for count in range(middle, draws + 1)), Fraction(0))


def nonregular_median_variance(draws: int, power: int) -> Fraction:
    """Exact Beta-ratio variance via a rational product; iid odd-N contract above."""
    draws, power = _median_draws(draws), _median_power(power)
    result = Fraction(1)
    for index in range((draws + 1) // 2):
        numerator = power * (2 * index + 1)
        result *= Fraction(numerator, numerator + 2)
    return result


def nonregular_median_coverage(radius: Fraction, draws: int, power: int) -> Fraction:
    """Exact P(|M|<=radius); continuity makes subtraction of the endpoint CDFs valid."""
    radius = _median_point(radius, "radius")
    if radius < 0:
        raise ValueError("radius must be nonnegative")
    return nonregular_median_cdf(radius, draws, power) - nonregular_median_cdf(-radius, draws, power)


def nonregular_variance_constant(power: int) -> float:
    """C_k in Var(M)~C_k*N^(-1/k), obtained from the exact Gamma ratio."""
    power = _median_power(power)
    return 2**(1 / power) * gamma(0.5 + 1 / power) / sqrt(pi)


def nonregular_half_sd_multiplier(power: int) -> int:
    """Asymptotic iid budget multiplier, not an exact finite-N guarantee."""
    return 2**(2 * _median_power(power))


def report_nonregular_median() -> None:
    """Deterministic comparisons; no new simulation and no random stream consumption."""
    print("Nonregular median: actual iid odd N, supported powers k=1,2,4; no ESS substitution")
    for power in (1, 2, 4):
        print(f"k={power}: variance constant C_k={nonregular_variance_constant(power):.6f}; "
              f"asymptotic half-SD draw multiplier={nonregular_half_sd_multiplier(power)}")
        for draws in (3, 15, 255):
            exact_variance = nonregular_median_variance(draws, power)
            print(f"  N={draws}: exact median variance={float(exact_variance):.6f}, "
                  f"median SD={sqrt(exact_variance):.6f}; "
                  f"fixed-zero CDF SD={1 / (2 * sqrt(draws)):.6f}")
        print(f"  N=3: exact variance={nonregular_median_variance(3, power)}; "
              f"P(|M|<=1/2)={nonregular_median_coverage(Fraction(1, 2), 3, power)}")
    print("  Median rates follow local CDF flatness; variance budgets use the exact Beta/Gamma expression.")


def split_chains(chains: Chains) -> Chains:
    """Equal halves; omit the middle draw when the original length is odd."""
    if len(chains) < 2 or len(chains[0]) < 4:
        raise ValueError("Need at least two chains with at least four draws")
    length = len(chains[0])
    if any(len(chain) != length for chain in chains):
        raise ValueError("Chains must have equal lengths")
    if any(not isfinite(x) for chain in chains for x in chain):
        raise ValueError("Draws must be finite")
    half = length // 2
    return [part for chain in chains for part in (chain[:half], chain[-half:])]


def basic_rhat(chains: Chains) -> float:
    """Already split chains; conservatively undefined if any is constant.

    The per-chain constant rule is a teaching policy; current posterior
    development code checks globally constant input instead.
    """
    n = len(chains[0])
    variances = [variance(chain) for chain in chains]
    if any(value == 0 for value in variances):
        return float("nan")
    within = mean(variances)
    between = n * variance([mean(chain) for chain in chains])
    return sqrt(((n - 1) * within / n + between / n) / within)


def rank_normalize(chains: Chains) -> Chains:
    """Pooled average ranks followed by symmetric Blom normal scores."""
    flat = [x for chain in chains for x in chain]
    order = sorted(range(len(flat)), key=flat.__getitem__)
    ranks = [0.0] * len(flat)
    first = 0
    while first < len(order):
        stop = first + 1
        while stop < len(order) and flat[order[stop]] == flat[order[first]]:
            stop += 1
        average_rank = (first + 1 + stop) / 2
        for index in order[first:stop]:
            ranks[index] = average_rank
        first = stop
    normal = NormalDist()
    scores = [normal.inv_cdf((rank - 0.375) / (len(flat) + 0.25))
              for rank in ranks]
    n = len(chains[0])
    return [scores[start:start + n] for start in range(0, len(scores), n)]


def modern_rhat(chains: Chains) -> tuple[float, float, float]:
    """Location, folded, maximum. Fold before splitting, as in posterior."""
    split = split_chains(chains)
    center = median([x for chain in chains for x in chain])
    folded = [[abs(x - center) for x in chain] for chain in chains]
    location = basic_rhat(rank_normalize(split))
    scale = basic_rhat(rank_normalize(split_chains(folded)))
    reported = max(location, scale) if isfinite(location) and isfinite(scale) else float("nan")
    return location, scale, reported


def mixture_log_density(x: float) -> float:
    """Unnormalized log density of equal N(-6,1), N(6,1) mixture."""
    a, b = -0.5 * (x + 6) ** 2, -0.5 * (x - 6) ** 2
    high = max(a, b)
    return high + log(exp(a - high) + exp(b - high))


def metropolis(start: float, seed: int, draws: int = 2000) -> tuple[list[float], int]:
    rng = Random(seed)
    x = start
    output: list[float] = []
    crossings = 0
    for step in range(draws + 500):
        proposal = x + rng.gauss(0, 1)
        delta = mixture_log_density(proposal) - mixture_log_density(x)
        if delta >= 0 or rng.random() < exp(delta):
            if step >= 500 and (proposal > 0) != (x > 0):
                crossings += 1
            x = proposal
        if step >= 500:
            output.append(x)
    return output, crossings


def report(label: str, chains: Chains) -> None:
    location, folded, maximum = modern_rhat(chains)
    pooled = [x for chain in chains for x in chain]
    print(f"{label}: location={location:.4f}, folded={folded:.4f}, "
          f"max={maximum:.4f}, mean={mean(pooled):.4f}")


def report_normal_quantile_budget() -> None:
    """Analytic asymptotic planning, using stipulated indicator ESS values."""
    normal = NormalDist()
    indicator_ess, tolerance = 10_000, 0.01
    print("Normal quantile budget: stipulated indicator ESS=10000, target MCSE=0.01")
    for probability in (0.5, 0.95, 0.99):
        quantile = normal.inv_cdf(probability)
        density = normal.pdf(quantile)
        variance_factor = probability * (1 - probability) / density ** 2
        mcse = sqrt(variance_factor / indicator_ess)
        required_ess = ceil(variance_factor / tolerance ** 2)
        print(f"p={probability:.2f}: q={quantile:.4f}, density={density:.5f}, "
              f"MCSE={mcse:.5f}, required indicator ESS={required_ess}")


def report_rank_bin_reference() -> None:
    """Exact hypergeometric reference for iid draws, not an MCMC rank test."""
    group_count, group_length, bin_count = 4, 1000, 10
    total = group_count * group_length
    bin_size = total // bin_count
    denominator = comb(total, group_length)
    # All possible counts here are 0,...,bin_size. Python integer arithmetic
    # keeps the combinatorial factors exact before conversion to probabilities.
    probabilities = [
        comb(bin_size, count) * comb(total - bin_size, group_length - count)
        / denominator
        for count in range(bin_size + 1)
    ]
    cdf = list(accumulate(probabilities))
    lower = next(count for count, mass in enumerate(cdf) if mass >= 0.025)
    upper = next(count for count, mass in enumerate(cdf) if mass >= 0.975)
    coverage = sum(probabilities[lower:upper + 1])
    probability = bin_size / total
    count_sd = sqrt(group_length * probability * (1 - probability)
                    * (total - group_length) / (total - 1))
    print(f"Iid rank-bin reference: mean={group_length * probability:.1f}, "
          f"sd={count_sd:.4f}, pointwise interval=[{lower}, {upper}], "
          f"coverage={coverage:.5f}")


def main() -> None:
    hand = [[0., 1., 2., 3.], [4., 5., 6., 7.]]
    print(f"Hand example basic R-hat: {basic_rhat(hand):.6f}")
    print("Tied scores:", [round(x, 4) for x in rank_normalize([[1., 1., 3., 5.]])[0]])
    normal_chains: Chains = []
    trapped: Chains = []
    for chain_id in range(4):
        rng = Random(1400 + chain_id)
        normal_chains.append([rng.gauss(0, 0.15 if chain_id == 0 else 1)
                              for _ in range(2000)])
        rng = Random(2400 + chain_id)
        trapped.append([rng.gauss(-6, 1) for _ in range(2000)])
    report("Scale mismatch", normal_chains)
    report("Independent negative-component surrogate", trapped)
    pooled = [x for chain in trapped for x in chain]
    print(f"Surrogate iid MCSE={stdev(pooled) / sqrt(len(pooled)):.4f}; "
          f"error relative to mixture mean={mean(pooled):.4f}")
    results = [metropolis(start, 3400 + j)
               for j, start in enumerate([-6., -6., 6., 6.])]
    mh = [chain for chain, _ in results]
    report("Local MH with dispersed starts", mh)
    print("Retained mode crossings:", sum(count for _, count in results))
    print("Positive fractions by chain:", [mean(x > 0 for x in c) for c in mh])
    print("Mixture references: mean=0, P(X>0)=0.5")
    report_normal_quantile_budget()
    report_rank_bin_reference()
    report_nonregular_median()


if __name__ == "__main__":
    main()
