"""Probability for simulation: Gaussian conditioning and radial mass.

Run with: python examples/ch02.py
Uses only the Python standard library and a fixed random seed.
"""

from __future__ import annotations

import math
import random
from collections.abc import Callable


SEED = 20260926
GAUSSIAN_DRAWS = 50_000
RADIAL_DRAWS = 3_000
DIMENSIONS = (2, 20, 100, 1000)
SHELL_EPSILON = 0.2


def mean_and_sample_variance(values: list[float]) -> tuple[float, float]:
    """Return mean and sample variance of a nonempty list with length > 1."""
    n = len(values)
    mean = sum(values) / n
    variance = sum((x - mean) ** 2 for x in values) / (n - 1)
    return mean, variance


def sample_covariance(xs: list[float], ys: list[float]) -> float:
    """Return sample covariance for paired observations."""
    mean_x = sum(xs) / len(xs)
    mean_y = sum(ys) / len(ys)
    return sum((x - mean_x) * (y - mean_y) for x, y in zip(xs, ys)) / (
        len(xs) - 1
    )


def gaussian_check(rng: random.Random) -> None:
    """Generate N((1,-1), [[4,3],[3,9]]) without selecting a thin bin."""
    x1s: list[float] = []
    x2s: list[float] = []
    residuals: list[float] = []

    for _ in range(GAUSSIAN_DRAWS):
        z1 = rng.gauss(0.0, 1.0)
        z2 = rng.gauss(0.0, 1.0)
        x1 = 1.0 + 2.0 * z1
        x2 = -1.0 + 1.5 * z1 + math.sqrt(6.75) * z2
        residual = x1 - 1.0 - (x2 + 1.0) / 3.0
        x1s.append(x1)
        x2s.append(x2)
        residuals.append(residual)

    x1_mean, x1_variance = mean_and_sample_variance(x1s)
    x2_mean, x2_variance = mean_and_sample_variance(x2s)
    residual_mean, residual_variance = mean_and_sample_variance(residuals)
    covariance = sample_covariance(x1s, x2s)
    residual_covariance = sample_covariance(residuals, x2s)

    print(f"Seed: {SEED}; Gaussian draws: {GAUSSIAN_DRAWS:,}")
    print("Gaussian target: means (1, -1), variances (4, 9), covariance 3")
    print(
        f"  empirical: means ({x1_mean:.3f}, {x2_mean:.3f}), "
        f"variances ({x1_variance:.3f}, {x2_variance:.3f}), "
        f"covariance {covariance:.3f}"
    )
    print(
        "Conditional residual target: mean 0, variance 3, "
        "covariance with X2 equal to 0"
    )
    print(
        f"  empirical: mean {residual_mean:.3f}, "
        f"variance {residual_variance:.3f}, "
        f"covariance with X2 {residual_covariance:.3f}"
    )
    print("At X2 = 2, analytic X1 conditional mean = 2 and variance = 3.")


def radial_check(rng: random.Random) -> None:
    """Compare squared-radius moments and shell frequencies with theory."""
    print(f"\nStandard normal squared radii: {RADIAL_DRAWS:,} draws per dimension")
    print(
        "   d    mean(R²)  target     var(R²)  target   "
        "outside |R²/d - 1| >= 0.2   Chebyshev bound"
    )

    for d in DIMENSIONS:
        radii_squared = [
            sum(rng.gauss(0.0, 1.0) ** 2 for _ in range(d))
            for _ in range(RADIAL_DRAWS)
        ]
        mean, variance = mean_and_sample_variance(radii_squared)
        outside_count = sum(
            abs(r_squared / d - 1.0) >= SHELL_EPSILON
            for r_squared in radii_squared
        )
        outside = outside_count / RADIAL_DRAWS
        bound = min(1.0, 2.0 / (d * SHELL_EPSILON**2))
        print(
            f"{d:4d} {mean:11.2f} {d:7d} "
            f"{variance:11.2f} {2 * d:7d} "
            f"{outside:26.6f} {bound:17.3f}"
        )
        if outside_count == 0:
            print("     No outside draws observed; this does not imply zero probability.")


def simpson_integral(
    function: Callable[[float], float], lower: float, upper: float, panels: int
) -> float:
    """Composite Simpson quadrature, used for deterministic cross-checks."""
    if panels <= 0 or panels % 2:
        raise ValueError("panels must be a positive even integer")
    step = (upper - lower) / panels
    interior = math.fsum(
        (4 if i % 2 else 2) * function(lower + i * step)
        for i in range(1, panels)
    )
    return step * (function(lower) + interior + function(upper)) / 3


def probability_checks() -> None:
    """Check Jacobians and the difference between mass and expectation."""
    event_probability = -math.expm1(-2.0)
    in_x = simpson_integral(lambda x: 2 * math.exp(-2 * x), 0, 1, 4000)
    in_log_x = simpson_integral(
        lambda u: 2 * math.exp(u - 2 * math.exp(u)), -30, 0, 4000
    )
    # Probability below exp(-30) is less than 2 exp(-30); finite quadrature
    # error remains separate from that analytic omitted-tail bound.
    assert abs(in_x - event_probability) < 1e-10
    assert abs(in_log_x - event_probability) < 1e-10
    print("\nExponential event P(X <= 1) = P(log(X) <= 0):")
    print(f"  analytic {event_probability:.9f}; quadratures {in_x:.9f}, {in_log_x:.9f}")

    def phi(x: float) -> float:
        return math.exp(-x * x / 2) / math.sqrt(2 * math.pi)

    mass = math.erf(3 / math.sqrt(2))
    fraction = 0.5 - 0.5 * math.erfc(6 / math.sqrt(2))
    full = math.exp(4.5)
    retained = full * fraction
    numeric = simpson_integral(lambda x: math.exp(3 * x) * phi(x), -3, 3, 4000)
    squared_retained = mass - 6 * phi(3)
    squared_numeric = simpson_integral(lambda x: x * x * phi(x), -3, 3, 4000)
    assert abs(numeric - retained) < 1e-9
    assert abs(squared_numeric - squared_retained) < 1e-10
    print(f"Gaussian region |X| <= 3: probability {mass:.9f}")
    print(f"  E[exp(3X)] = {full:.7f}; retained fraction {fraction:.9f}")
    print(
        f"  zero outside: {retained:.7f}; quadrature: {numeric:.7f}; "
        f"conditional average: {retained / mass:.7f}"
    )
    print(
        f"  E[X²] = 1; zero outside: {squared_retained:.9f}; "
        f"conditional average: {squared_retained / mass:.9f}"
    )


def main() -> None:
    rng = random.Random(SEED)
    gaussian_check(rng)
    radial_check(rng)
    probability_checks()


if __name__ == "__main__":
    main()
