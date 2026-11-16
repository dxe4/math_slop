"""Exact targets, observation thresholds, and prediction for Chapter 03.

Uses only the Python standard library. The random experiment is illustrative;
the exact beta-binomial calculation is the reference result.
"""

from math import comb, exp, expm1, factorial, fsum, isclose, lgamma
from random import Random


def log_beta(a: float, b: float) -> float:
    return lgamma(a) + lgamma(b) - lgamma(a + b)


def beta_binomial_mass(k: int, m: int, a: float, b: float) -> float:
    return comb(m, k) * exp(log_beta(a + k, b + m - k) - log_beta(a, b))


def moments(values: list[int]) -> tuple[float, float]:
    mean = sum(values) / len(values)
    variance = sum((value - mean) ** 2 for value in values) / len(values)
    return mean, variance


def check_recording_threshold() -> None:
    """Check the two gamma targets and the fixed-cohort censored target."""
    # Composite Simpson integration on [0, 20], with an even panel count.
    # For these rates the omitted gamma-tail integrals are below 1e-47.
    panels, upper = 4000, 20.0
    step = upper / panels
    points = [i * step for i in range(panels + 1)]
    weights = [1 if i in (0, panels) else 4 if i % 2 else 2
               for i in range(panels + 1)]

    for label, rate, censored in (
        ("Truncation accounted for", 7, False),
        ("Truncation incorrectly ignored", 13, False),
        ("Fixed cohort with two censored durations", 13, True),
    ):
        kernel = [x**4 * exp(-rate * x)
                  * ((-expm1(-2 * x))**2 if censored else 1.0)
                  for x in points]
        integrals = [step / 3 * fsum(w * x**power * q
                                    for w, x, q in zip(weights, points, kernel))
                     for power in (0, 1)]
        # Expand (1-exp(-2*x))**2 and integrate its three terms.
        # The alternating expression is used only for this benign fixed case.
        coefficients = (1, -2, 1) if censored else (1,)
        exact = [factorial(4 + power) * fsum(
            coefficient / (rate + 2 * j)**(5 + power)
            for j, coefficient in enumerate(coefficients))
                 for power in (0, 1)]
        for numeric, analytic in zip(integrals, exact):
            assert isclose(numeric, analytic, rel_tol=2e-8, abs_tol=0.0)
        mean = exact[1] / exact[0]
        assert isclose(integrals[1] / integrals[0], mean, rel_tol=2e-8)
        print(f"{label}: posterior mean rate={mean:.6f}; quadrature checked")


def main() -> None:
    successes, trials = 7, 10
    prior_a, prior_b = 2, 2
    a, b = prior_a + successes, prior_b + trials - successes
    future_trials = 5
    masses = [beta_binomial_mass(k, future_trials, a, b) for k in range(future_trials + 1)]
    assert isclose(sum(masses), 1.0, rel_tol=0.0, abs_tol=1e-12)

    exact_mean = future_trials * a / (a + b)
    exact_variance = future_trials * a * b * (a + b + future_trials) / (
        (a + b) ** 2 * (a + b + 1)
    )
    mass_mean = sum(k * mass for k, mass in enumerate(masses))
    mass_variance = sum((k - mass_mean) ** 2 * mass for k, mass in enumerate(masses))
    assert isclose(mass_mean, exact_mean, abs_tol=1e-12)
    assert isclose(mass_variance, exact_variance, abs_tol=1e-12)

    # The two-intercept example: Var(alpha) = (Var(u) + Var(v)) / 4;
    # Cov(alpha, beta) = (Var(u) - Var(v)) / 4.
    variance_u, variance_v = 2 / 9, 2.0
    variance_alpha = (variance_u + variance_v) / 4
    covariance_alpha_beta = (variance_u - variance_v) / 4
    assert isclose(variance_alpha, 5 / 9, abs_tol=1e-12)
    assert isclose(covariance_alpha_beta, -4 / 9, abs_tol=1e-12)

    rng = Random(20260926)
    replicates = 30_000
    predictions = []
    for _ in range(replicates):
        p = rng.betavariate(a, b)
        predictions.append(sum(rng.random() < p for _ in range(future_trials)))
    simulated_mean, simulated_variance = moments(predictions)

    print(f"Posterior p | data: Beta({a}, {b})")
    print("Predictive P(K=k), k=0,...,5:", " ".join(f"{mass:.4f}" for mass in masses))
    print(f"Predictive exact mean={exact_mean:.4f}, variance={exact_variance:.4f}")
    print(f"Illustrative seeded simulation ({replicates} batches): ")
    print(f"  mean={simulated_mean:.4f}, variance={simulated_variance:.4f}")
    print(f"Gaussian ridge check: Var(alpha)={variance_alpha:.4f}, Cov(alpha,beta)={covariance_alpha_beta:.4f}")
    check_recording_threshold()


if __name__ == "__main__":
    main()
