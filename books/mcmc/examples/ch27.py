"""Chapter 27: likelihood retention, exact balance, and averaging versus cost.

Standard-library teaching experiment; run with python examples/ch27.py.
"""

import math
import random
import statistics
from fractions import Fraction


def estimate(state: int, rng: random.Random, inner: int = 1) -> float:
    if state == 0:
        return 1.0
    high = sum(rng.random() >= 0.5 for _ in range(inner))
    return 0.5 + 3 * high / inner


def run(
    retain: bool, seed: int, draws: int = 200_000, inner: int = 1
) -> dict[str, float]:
    if inner < 1 or not isinstance(inner, int):
        raise ValueError("inner must be a positive integer")
    if draws < 2_000 or draws % 1_000:
        raise ValueError("draws must be a multiple of 1000 and at least 2000")
    rng = random.Random(seed)
    state = 0
    current = 1.0
    burn = 2_000
    batch_size = 1_000
    batches: list[float] = []
    batch_total = 0
    b_total = 0
    high_b = 0
    relative_b_total = 0.0
    transitions = 0
    for step in range(burn + draws):
        if not retain:
            current = estimate(state, rng, inner)
        proposal = 1 - state
        proposed = estimate(proposal, rng, inner)
        accepted = rng.random() < min(1.0, proposed / current)
        if accepted:
            state, current = proposal, proposed
        if step >= burn:
            transitions += int(accepted)
            b_total += state
            high_b += int(state == 1 and current == 3.5)
            relative_b_total += current / 2 if state == 1 else 0
            batch_total += state
            if (step - burn + 1) % batch_size == 0:
                batches.append(batch_total / batch_size)
                batch_total = 0
    return {
        "occupancy": b_total / draws,
        "mcse": statistics.stdev(batches) / math.sqrt(len(batches)),
        "transitions": transitions,
        "high_fraction": high_b / b_total if b_total else math.nan,
        "relative_b_mean": relative_b_total / b_total if b_total else math.nan,
    }


def finite_model(
    inner: int, surrogate_ratio: Fraction | None = None
) -> tuple[list[Fraction], list[list[Fraction]], list[Fraction]]:
    """Enumerate A and B_0,...,B_N; an optional surrogate adds two gates."""
    f = Fraction
    generator = [f(math.comb(inner, k), 2**inner) for k in range(inner + 1)]
    estimates = [f(1, 2) + f(3 * k, inner) for k in range(inner + 1)]
    stationary = [f(1, 3)] + [m * ell / 3 for m, ell in zip(generator, estimates)]
    size = inner + 2
    transition = [[f(0) for _ in range(size)] for _ in range(size)]
    for k, (m, ell) in enumerate(zip(generator, estimates), start=1):
        if surrogate_ratio is None:
            forward, reverse = min(f(1), ell), min(f(1), 1 / ell)
        else:
            forward = min(f(1), surrogate_ratio) * min(f(1), ell / surrogate_ratio)
            reverse = min(f(1), 1 / surrogate_ratio) * min(f(1), surrogate_ratio / ell)
        transition[0][k] = m * forward
        transition[k][0] = reverse
        transition[k][k] = 1 - reverse
    transition[0][0] = 1 - sum(transition[0])
    return stationary, transition, estimates


def check_balance(stationary: list[Fraction], transition: list[list[Fraction]]) -> None:
    """Exact finite-state probability and reversibility checks."""
    assert sum(stationary) == 1
    for i, row in enumerate(transition):
        assert sum(row) == 1 and all(p >= 0 for p in row)
        for j, p in enumerate(row):
            assert stationary[i] * p == stationary[j] * transition[j][i]


def exact_averaging(inner: int) -> tuple[Fraction, Fraction]:
    """Check the Poisson equation, then return asymptotic variance and tilt."""
    f = Fraction
    stationary, transition, estimates = finite_model(inner)
    check_balance(stationary, transition)
    assert sum(stationary[1:]) == f(2, 3)
    centered = [f(-2, 3)] + [f(1, 3)] * (inner + 1)
    poisson = [f(0)] + [1 / (3 * transition[k][0]) for k in range(1, inner + 2)]
    for i, row in enumerate(transition):
        assert poisson[i] - sum(p * h for p, h in zip(row, poisson)) == centered[i]
    variance = sum(p * g * g for p, g in zip(stationary, centered))
    asymptotic = 2 * sum(
        p * g * h for p, g, h in zip(stationary, centered, poisson)
    ) - variance
    direct = f(2, 27) * sum(
        f(math.comb(inner, k), 2**inner) * ell * max(1, ell)
        for k, ell in enumerate(estimates)
    ) - f(2, 9)
    assert asymptotic == direct
    tilted_mean = sum(p * ell / 2 for p, ell in zip(stationary[1:], estimates)) / f(2, 3)
    assert tilted_mean == 1 + f(9, 16 * inner)
    # The two-stage rule must preserve the same extended target even though
    # the auxiliary draw can be postponed until the first gate passes.
    delayed_pi, delayed, _ = finite_model(inner, f(10))
    assert delayed_pi == stationary
    check_balance(delayed_pi, delayed)
    assert all(
        delayed[i][j] <= transition[i][j]
        for i in range(len(stationary))
        for j in range(len(stationary))
        if i != j
    )
    return asymptotic, tilted_mean


def exact_checks() -> None:
    f = Fraction
    for estimates, truth in (((f(1, 2), f(7, 2)), f(7, 13)), ((f(1), f(3)), f(3, 5))):
        forward = sum(min(f(1), ell) for ell in estimates) / 2
        reverse = sum(min(f(1), 1 / ell) for ell in estimates) / 2
        assert forward / (forward + reverse) == truth
    assert min(1, f(10)) * min(1, f(4, 10)) == f(2, 5)
    assert min(1, f(1, 10)) * min(1, f(10, 4)) == f(1, 10)
    print("Exact averaging table: lower cost * asymptotic variance is better")
    print(" N    V_N        tilted E[W|B]   cost=1+N/3    cost=10+N/3")
    for inner in (1, 2, 4, 8, 16):
        asymptotic, tilted = exact_averaging(inner)
        cost_one = (1 + f(inner, 3)) * asymptotic
        cost_ten = (10 + f(inner, 3)) * asymptotic
        print(
            f"{inner:2d}  {float(asymptotic):.6f}     {float(tilted):.6f}"
            f"       {float(cost_one):.6f}        {float(cost_ten):.6f}"
        )
    print("Exact balance, delayed-acceptance, Poisson, and refreshed-law checks passed.")


def main() -> None:
    exact_checks()
    print("Analytic posterior P(B) = 2/3 =", 2 / 3)
    print("Refreshed algorithm stationary P(B) = 7/13 =", 7 / 13)
    for retain, seed in ((True, 2701), (False, 2702)):
        result = run(retain, seed)
        label = "retained" if retain else "refreshed"
        print(
            f"{label:9s}: P(B)={result['occupancy']:.6f}, "
            f"batch MCSE={result['mcse']:.6f}, "
            f"transitions={int(result['transitions'])}"
        )
        if retain:
            print(
                "           high estimate conditional on B: "
                f"{result['high_fraction']:.6f}; analytic 7/8={7 / 8:.6f}"
            )
            print(
                f"           mean relative estimate at B: {result['relative_b_mean']:.6f}; "
                f"analytic 25/16={25 / 16:.6f}"
            )
    averaged = run(True, 2704, inner=4)
    print(
        f"N=4 retained: P(B)={averaged['occupancy']:.6f}, "
        f"batch MCSE={averaged['mcse']:.6f}; analytic P(B)={2 / 3:.6f}"
    )
    print(
        f"           mean relative estimate at B: {averaged['relative_b_mean']:.6f}; "
        f"analytic 1+9/64={1 + 9 / 64:.6f}"
    )
    print("Finite simulation agreement is a check, not a convergence proof.")


if __name__ == "__main__":
    main()
