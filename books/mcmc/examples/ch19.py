"""Seeded ULA, MALA, and exact diffusion comparison for a normal target.

Run from the repository root with: python examples/ch19.py
The empirical moments are finite-run summaries, not convergence diagnostics.
"""

import math
import random
from dataclasses import dataclass


@dataclass(frozen=True)
class Summary:
    mean: float
    second_moment: float
    variance: float
    accepted_fraction: float | None
    numerical_rejections: int


def log_target(x: float) -> float:
    """Unnormalized log density of N(0, 1)."""
    return -0.5 * x * x


def grad_log_target(x: float) -> float:
    return -x


def log_proposal(to_x: float, from_x: float, from_grad: float, h: float) -> float:
    """Log N(from_x + h*from_grad, 2*h), up to a common constant."""
    residual = to_x - (from_x + h * from_grad)
    return -(residual * residual) / (4.0 * h)


def summarize(samples: list[float], accepted: int | None, failures: int) -> Summary:
    n = len(samples)
    mean = math.fsum(samples) / n
    second = math.fsum(x * x for x in samples) / n
    return Summary(mean, second, second - mean * mean,
                   None if accepted is None else accepted / n, failures)


def run_ula(h: float, draws: int, warmup: int, seed: int) -> Summary:
    if not (0.0 < h < 2.0) or draws <= 0 or warmup < 0:
        raise ValueError("For this target use 0 < h < 2, draws > 0, warmup >= 0")
    rng = random.Random(seed)
    x = 0.0
    samples: list[float] = []
    noise_sd = math.sqrt(2.0 * h)
    for step in range(warmup + draws):
        x = x + h * grad_log_target(x) + noise_sd * rng.gauss(0.0, 1.0)
        if not math.isfinite(x):
            raise ArithmeticError(f"ULA state became nonfinite at step {step}")
        if step >= warmup:
            samples.append(x)
    return summarize(samples, None, 0)


def run_mala(h: float, draws: int, warmup: int, seed: int) -> Summary:
    if not (h > 0.0 and math.isfinite(h)) or draws <= 0 or warmup < 0:
        raise ValueError("Use finite h > 0, draws > 0, warmup >= 0")
    rng = random.Random(seed)
    x = 0.0
    log_x = log_target(x)
    grad_x = grad_log_target(x)
    noise_sd = math.sqrt(2.0 * h)
    accepted = 0
    failures = 0
    samples: list[float] = []
    for step in range(warmup + draws):
        y = x + h * grad_x + noise_sd * rng.gauss(0.0, 1.0)
        log_y = log_target(y)
        grad_y = grad_log_target(y)
        if not all(map(math.isfinite, (y, log_y, grad_y))):
            failures += 1
        else:
            log_r = (log_y - log_x
                     + log_proposal(x, y, grad_y, h)
                     - log_proposal(y, x, grad_x, h))
            if not math.isfinite(log_r):
                failures += 1
            elif math.log1p(-rng.random()) < min(0.0, log_r) or log_r >= 0.0:
                x, log_x, grad_x = y, log_y, grad_y
                if step >= warmup:
                    accepted += 1
        if step >= warmup:
            samples.append(x)
    return summarize(samples, accepted, failures)


def run_exact_gaussian(h: float, draws: int, warmup: int, seed: int) -> Summary:
    """Exact diffusion transition for N(0,1); states remain correlated."""
    if not (h > 0.0 and math.isfinite(h)) or draws <= 0 or warmup < 0:
        raise ValueError("Use finite h > 0, draws > 0, warmup >= 0")
    rng = random.Random(seed)
    coefficient = math.exp(-h)
    # expm1 avoids subtracting two almost equal numbers at small h.
    noise_sd = math.sqrt(-math.expm1(-2.0 * h))
    x = 0.0
    samples: list[float] = []
    for step in range(warmup + draws):
        x = coefficient * x + noise_sd * rng.gauss(0.0, 1.0)
        if step >= warmup:
            samples.append(x)
    return summarize(samples, None, 0)


def stationary_second_moment_error(h: float, draws: int) -> tuple[float, float]:
    """Return squared bias and variance of a stationary ULA average of X^2."""
    if not 0.0 < h < 2.0 or draws <= 0:
        raise ValueError("Use 0 < h < 2 and draws > 0")
    variance = 1.0 / (1.0 - h / 2.0)
    squared_correlation = (1.0 - h) ** 2
    pair_sum = math.fsum((draws - lag) * squared_correlation ** lag
                        for lag in range(1, draws))
    estimator_variance = 2.0 * variance ** 2 * (draws + 2.0 * pair_sum) / draws ** 2
    return (variance - 1.0) ** 2, estimator_variance


def check_calculations() -> None:
    """Deterministic identities supplement, rather than certify, simulation."""
    for h in (0.01, 0.25, 0.5, 1.0, 1.5, 2.5):
        for x, y in ((0.0, 1.0), (-2.0, 0.3), (1.5, -0.7)):
            log_ratio = (log_target(y) - log_target(x)
                         + log_proposal(x, y, grad_log_target(y), h)
                         - log_proposal(y, x, grad_log_target(x), h))
            expected = h * (x * x - y * y) / 4.0
            assert math.isclose(log_ratio, expected, abs_tol=1e-12)
        b = math.exp(-h)
        assert math.isclose(b * b - math.expm1(-2.0 * h), 1.0)
    for x in (-2.0, 0.0, 0.3, 1.5):
        for epsilon in (1e-3, 1e-5, 1e-7):
            difference = (log_target(x + epsilon) - log_target(x - epsilon)) / (2 * epsilon)
            assert math.isclose(difference, grad_log_target(x), abs_tol=1e-8)
    bias2, variance = stationary_second_moment_error(1.0, 100)
    assert bias2 == 1.0 and variance == 0.08
    # Recursion and closed form agree from a fixed, nonstationary start.
    for h in (0.25, 0.5, 1.5):
        a = 1.0 - h
        mean, variance = 3.0, 0.0
        for k in range(1, 11):
            mean, variance = a * mean, a * a * variance + 2 * h
            closed_second = 1 / (1 - h / 2) + a ** (2 * k) * (9 - 1 / (1 - h / 2))
            assert math.isclose(mean * mean + variance, closed_second)


def main() -> None:
    check_calculations()
    print("Deterministic proposal, gradient, transient, and exact-diffusion checks passed")
    draws = 60_000
    warmup = 5_000
    print("Target N(0,1): mean=0, second moment=1, variance=1")
    print(f"Each method: {draws} retained transitions after {warmup} warmup transitions")
    for h in (0.25, 0.5, 1.0):
        ula = run_ula(h, draws, warmup, seed=1900 + round(100 * h))
        mala = run_mala(h, draws, warmup, seed=2900 + round(100 * h))
        exact = run_exact_gaussian(h, draws, warmup, seed=3900 + round(100 * h))
        ula_variance = 1.0 / (1.0 - h / 2.0)
        print(f"\nh={h:g}; exact stationary ULA variance={ula_variance:.4f}")
        print(f" ULA:  mean={ula.mean:+.4f} E[x^2]={ula.second_moment:.4f} "
              f"variance={ula.variance:.4f}")
        print(f" MALA: mean={mala.mean:+.4f} E[x^2]={mala.second_moment:.4f} "
              f"variance={mala.variance:.4f} acceptance={mala.accepted_fraction:.3f} "
              f"numerical_rejections={mala.numerical_rejections}")
        print(f" Exact Gaussian: mean={exact.mean:+.4f} E[x^2]={exact.second_moment:.4f} "
              f"variance={exact.variance:.4f}")
        bias2, estimator_variance = stationary_second_moment_error(h, draws)
        print(f" ULA E[x^2] stationary theory: bias={math.sqrt(bias2):.4f} "
              f"MCSE={math.sqrt(estimator_variance):.4f} "
              f"RMSE={math.sqrt(bias2 + estimator_variance):.4f}")
    print("\nFrom x0=0 at h=0.5: ULA E[x1^2]=1, E[x2^2]=1.25, limit=4/3")
    print("Stationary theory assumes initialization in the ULA invariant law.")


if __name__ == "__main__":
    main()
