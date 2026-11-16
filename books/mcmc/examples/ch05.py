"""Independent Monte Carlo and importance sampling examples for Chapter 05.

Run with: python examples/ch05.py
"""

import math
import random
import statistics


def normal_tail(x: float) -> float:
    return 0.5 * math.erfc(x / math.sqrt(2.0))


def exp_integral(n: int, seed: int) -> tuple[float, float]:
    rng = random.Random(seed)
    values = [math.exp(rng.random()) for _ in range(n)]
    estimate = statistics.fmean(values)
    mcse = statistics.stdev(values) / math.sqrt(n)
    return estimate, mcse


def normal_tail_experiment(n: int, seed: int, shift: float) -> tuple[float, float, int]:
    rng = random.Random(seed)
    contributions = []
    event_count = 0
    for _ in range(n):
        x = rng.gauss(shift, 1.0)
        if x > 4.0:
            event_count += 1
            contributions.append(math.exp(-shift * x + shift * shift / 2.0))
        else:
            contributions.append(0.0)
    return (
        statistics.fmean(contributions),
        statistics.stdev(contributions) / math.sqrt(n),
        event_count,
    )


def two_state_ratio(k: int, n: int, epsilon: float) -> float:
    """Self-normalized mean for k ones among n proposal draws."""
    return k * (1.0 - epsilon) / (
        k * (1.0 - epsilon) + (n - k) * epsilon
    )


def two_state_exact(n: int, epsilon: float) -> tuple[float, float, float]:
    """Enumerate the finite binomial experiment; intended for small n."""
    if not isinstance(n, int) or not 1 <= n <= 200:
        raise ValueError("The enumeration needs an integer n from 1 to 200.")
    if not 0.0 < epsilon < 1.0:
        raise ValueError("epsilon must lie strictly between zero and one.")
    probabilities = [
        math.comb(n, k) * epsilon**k * (1.0 - epsilon) ** (n - k)
        for k in range(n + 1)
    ]
    estimates = [two_state_ratio(k, n, epsilon) for k in range(n + 1)]
    mean = math.fsum(p * value for p, value in zip(probabilities, estimates))
    variance = math.fsum(
        p * (value - mean) ** 2 for p, value in zip(probabilities, estimates)
    )
    # Independent identities check the enumeration's probability law and weights.
    assert math.isclose(math.fsum(probabilities), 1.0, abs_tol=1e-12)
    ordinary_mean = math.fsum(
        p * k / (2.0 * n * epsilon) for k, p in enumerate(probabilities)
    )
    assert math.isclose(ordinary_mean, 0.5, abs_tol=1e-12)
    return mean, variance, probabilities[0]


def main() -> None:
    exact_integral = math.expm1(1.0)
    sigma2 = math.expm1(2.0) / 2.0 - exact_integral**2
    print("Integral of exp(x) on [0, 1]")
    print("N       estimate     MCSE(est)  theoretical MCSE  observed error")
    for n in (100, 1000, 10000):
        estimate, mcse = exp_integral(n, 20260926 + n)
        print(
            f"{n:<7d} {estimate:10.6f}   {mcse:9.6f}"
            f"       {math.sqrt(sigma2/n):9.6f}     {estimate-exact_integral:+.6f}"
        )
    print(f"exact: {exact_integral:.9f}")

    p = normal_tail(4.0)
    n = 10000
    direct, direct_mcse, direct_hits = normal_tail_experiment(n, 20260927, 0.0)
    tilted, tilted_mcse, tilted_hits = normal_tail_experiment(n, 20260928, 4.0)
    tilted_m2 = math.exp(16.0) * normal_tail(8.0)
    print("\nP(Z > 4), Z standard normal")
    print(f"exact: {p:.9g}; expected direct hits: {n*p:.4f}")
    print(f"probability of zero direct hits: {(1-p)**n:.4f}")
    print(f"direct:  estimate={direct:.9g}, MCSE={direct_mcse:.9g}, hits={direct_hits}")
    print(f"tilted:  estimate={tilted:.9g}, MCSE={tilted_mcse:.9g}, hits={tilted_hits}")
    print(f"theoretical variance ratio, direct/tilted: {p*(1-p)/(tilted_m2-p*p):.1f}")

    n, epsilon = 100, 0.001
    ratio_mean, ratio_variance, no_ones = two_state_exact(n, epsilon)
    asymptotic_variance = 1.0 / (16.0 * epsilon * (1.0 - epsilon))
    print("\nTwo-state importance sampling: target mean 0.5")
    print(f"N={n}, q(1)={epsilon}; probability of no ones: {no_ones:.9f}")
    print("On no ones: self-normalized estimate=0, plug-in MCSE=0, weight ESS=100")
    print(f"exact finite-N ratio mean: {ratio_mean:.9f}")
    print(f"exact finite-N ratio variance: {ratio_variance:.9f}")
    print(f"asymptotic variance / N: {asymptotic_variance / n:.9f}")
    budget = math.ceil(math.log(0.05) / math.log1p(-epsilon))
    assert (1.0 - epsilon) ** budget <= 0.05
    assert (1.0 - epsilon) ** (budget - 1) > 0.05
    print(f"95% chance of at least one one: N={budget}")
    print(f"ratio if exactly one is seen at that budget: {two_state_ratio(1, budget, epsilon):.9f}")
    print(f"zero successes in 1000, 95% upper bound: {-math.expm1(math.log(0.05)/1000):.9f}")


if __name__ == "__main__":
    main()
