"""Stationary AR(1) output analysis; run with Python's standard library."""

import math
import random
import statistics
from collections.abc import Sequence
from fractions import Fraction


def ar1(phi: float, n: int, rng: random.Random) -> list[float]:
    """Generate n stationary standard-normal states with AR coefficient phi."""
    if not -1 < phi < 1 or n < 1:
        raise ValueError("Require abs(phi) < 1 and n >= 1")
    x = rng.gauss(0.0, 1.0)
    innovation_sd = math.sqrt(1.0 - phi * phi)
    values = []
    for _ in range(n):
        values.append(x)
        x = phi * x + innovation_sd * rng.gauss(0.0, 1.0)
    return values


def batch_means(
    values: Sequence[float], batch_size: int
) -> tuple[int, float, float, float]:
    """Return retained n, retained mean, long-run variance, and its MCSE."""
    if batch_size < 1:
        raise ValueError("Batch size must be positive")
    batches = len(values) // batch_size
    if batches < 2:
        raise ValueError("Need at least two complete batches")
    retained = batches * batch_size
    means = [
        statistics.fmean(values[start:start + batch_size])
        for start in range(0, retained, batch_size)
    ]
    estimate = statistics.fmean(means)
    long_run_variance = batch_size * statistics.variance(means)
    return retained, estimate, long_run_variance, math.sqrt(long_run_variance / retained)


def exact_mean_sd(phi: float, n: int) -> float:
    """Exact finite-n stationary standard deviation, not the CLT approximation."""
    covariance_sum = math.fsum((1 - k / n) * phi ** k for k in range(1, n))
    return math.sqrt((1 + 2 * covariance_sum) / n)


def vector_moments(
    rows: Sequence[Sequence[float]],
) -> tuple[list[float], list[list[float]]]:
    """Ordinary sample mean and covariance, preserving cross-covariances."""
    if len(rows) < 2 or not rows[0]:
        raise ValueError("Need at least two nonempty vectors")
    dimension = len(rows[0])
    if any(len(row) != dimension for row in rows):
        raise ValueError("All vectors must have the same dimension")
    center = [statistics.fmean(row[i] for row in rows) for i in range(dimension)]
    covariance = [
        [
            math.fsum((row[i] - center[i]) * (row[j] - center[j]) for row in rows)
            / (len(rows) - 1)
            for j in range(dimension)
        ]
        for i in range(dimension)
    ]
    return center, covariance


def vector_batch_means(
    rows: Sequence[Sequence[float]], batch_size: int
) -> tuple[int, list[float], list[list[float]]]:
    """Return complete-batch N, its vector mean, and long-run covariance."""
    if batch_size < 1 or len(rows) // batch_size < 2:
        raise ValueError("Need a positive batch size and two complete batches")
    retained = (len(rows) // batch_size) * batch_size
    if not rows[0] or any(len(row) != len(rows[0]) for row in rows[:retained]):
        raise ValueError("Retained vectors must have the same positive dimension")
    dimension = len(rows[0])
    means = [
        [
            statistics.fmean(row[i] for row in rows[start:start + batch_size])
            for i in range(dimension)
        ]
        for start in range(0, retained, batch_size)
    ]
    center, covariance = vector_moments(means)
    return retained, center, [[batch_size * entry for entry in row] for row in covariance]


def determinant2(matrix: Sequence[Sequence[float]]) -> float:
    """Determinant for the two-dimensional teaching example."""
    if len(matrix) != 2 or any(len(row) != 2 for row in matrix):
        raise ValueError("Expected a 2 by 2 matrix")
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]


def multivariate_ess2(
    retained: int,
    marginal: Sequence[Sequence[float]],
    long_run: Sequence[Sequence[float]],
) -> float:
    """Two-dimensional determinant ESS; singular covariance is not precision."""
    for matrix in (marginal, long_run):
        if (determinant2(matrix) <= 0 or matrix[0][0] <= 0
                or not math.isclose(matrix[0][1], matrix[1][0])):
            raise ValueError("ESS requires symmetric positive definite covariances")
    return retained * math.sqrt(determinant2(marginal) / determinant2(long_run))


def check_worked_calculations() -> None:
    """Deterministic arithmetic and projection checks, independent of a seed."""
    batches = [0.8, 1.0, 1.2, 0.9, 1.1, 1.0]
    values = [value for value in batches for _ in range(10)] + [999.0]
    retained, mean, long_run, mcse = batch_means(values, 10)
    assert retained == 60
    assert math.isclose(mean, 1.0)
    assert math.isclose(long_run, 0.2)
    assert math.isclose(mcse, math.sqrt(0.2 / 60))
    assert math.isclose(batch_means([2 * x for x in values], 10)[3], 2 * mcse)

    rows = [(x, x * x) for x in values]
    vector_n, center, covariance = vector_batch_means(rows, 10)
    projection = [2 * x - 3 * y for x, y in rows]
    scalar_n, scalar_mean, scalar_variance, _ = batch_means(projection, 10)
    assert vector_n == scalar_n == 60
    assert math.isclose(scalar_mean, 2 * center[0] - 3 * center[1])
    expected = 4 * covariance[0][0] - 12 * covariance[0][1] + 9 * covariance[1][1]
    assert math.isclose(scalar_variance, expected, rel_tol=1e-12)

    _, marginal = vector_moments(rows[:vector_n])
    # An invertible change of units and coordinates must preserve mESS.
    transformed = [(2 * x + y + 4, 3 * y - 2) for x, y in rows]
    _, _, transformed_long_run = vector_batch_means(transformed, 10)
    _, transformed_marginal = vector_moments(transformed[:vector_n])
    assert math.isclose(
        multivariate_ess2(vector_n, marginal, covariance),
        multivariate_ess2(vector_n, transformed_marginal, transformed_long_run),
        rel_tol=1e-11,
    )
    identity = [[1.0, 0.0], [0.0, 1.0]]
    known = [[29 / 3, 28 / 3], [28 / 3, 29 / 3]]
    assert math.isclose(determinant2(known), 19 / 3)
    assert math.isclose(multivariate_ess2(19000, identity, known), 19000 * math.sqrt(3 / 19))
    # A rank-one estimate must be rejected, not called infinite ESS.
    try:
        multivariate_ess2(60, identity, [[1.0, 1.0], [1.0, 1.0]])
    except ValueError:
        pass
    else:
        raise AssertionError("Singular covariance was accepted")
    print("Deterministic batch, projection, affine-invariance, and rank checks passed.")


def bivariate_example() -> None:
    """Independent AR modes, rotated into coordinates with correlated mean errors."""
    n, batch_size = 19000, 500
    u = ar1(0.9, n, random.Random(131001))
    v = ar1(-0.5, n, random.Random(131002))
    rows = [((x + y) / math.sqrt(2), (x - y) / math.sqrt(2)) for x, y in zip(u, v)]
    retained, mean, long_run = vector_batch_means(rows, batch_size)
    _, marginal = vector_moments(rows[:retained])
    estimated_ess = multivariate_ess2(retained, marginal, long_run)
    analytic_ess = retained * math.sqrt(3 / 19)
    print(f"\nRotated bivariate AR example: N={retained}, b={batch_size}, mean={mean}")
    print("BM long-run covariance (analytic diagonal 29/3, off-diagonal 28/3):")
    for row in long_run:
        print("  " + " ".join(f"{entry:10.5f}" for entry in row))
    print(f"Estimated mESS={estimated_ess:.1f}; analytic asymptotic mESS={analytic_ess:.1f}")
    print(f"Analytic coordinate ESS={3 * retained / 29:.1f}; "
          f"slow-direction ESS={retained / 19:.1f}; fast-direction ESS={3 * retained:.1f}")
    q = -2 * math.log(0.05)  # Exact 95% chi-square quantile for TWO dimensions.
    axes = (math.sqrt(q * 19 / retained), math.sqrt(q / (3 * retained)))
    print(f"95% long-run ellipse semiaxes: {axes[0]:.5f}, {axes[1]:.5f}")
    print(f"Relative-volume tolerance 0.05: planning mESS >= {math.pi * q / 0.05 ** 2:.1f}")
    print("This is a fixed-run calculation, not an implemented sequential stopping rule.")


def conditional_ratio_long_run(
    beta: Fraction, zeta: Fraction,
) -> tuple[tuple[tuple[Fraction, Fraction], tuple[Fraction, Fraction]], Fraction]:
    """Exact long-run covariance of (B*Z, B), and ratio CLT variance.

    B and Z are independent stationary symmetric binary chains with respective
    lag-one correlations beta and zeta. This is not a finite-N ratio variance.
    """
    if not -1 < beta < 1 or not -1 < zeta < 1:
        raise ValueError("Require both correlations strictly between -1 and 1")
    beta, zeta = Fraction(beta), Fraction(zeta)

    def factor(value: Fraction) -> Fraction:
        return (1 + value) / (1 - value)

    b, z, bz = factor(beta), factor(zeta), factor(beta * zeta)
    covariance = (((b + z + bz) / 16, b / 8), (b / 8, b / 4))
    return covariance, (z + bz) / 4


def eligibility_count_law(n: int, beta: Fraction) -> tuple[Fraction, ...]:
    """Exact law of M=sum(B_0,...,B_(n-1)) from stationary B_0.

    Propagate count and last state; no Monte Carlo or normal approximation.
    Quadratic work is suitable for the small budgets used in this lesson.
    """
    if isinstance(n, bool) or not isinstance(n, int) or not 1 <= n <= 1000:
        raise ValueError("Require an integer observation count from 1 to 1000")
    if not -1 < beta < 1:
        raise ValueError("Require correlation strictly between -1 and 1")
    beta = Fraction(beta)
    stay, flip = (1 + beta) / 2, (1 - beta) / 2
    counts = {(0, 0): Fraction(1, 2), (1, 1): Fraction(1, 2)}
    for _ in range(1, n):
        following: dict[tuple[int, int], Fraction] = {}
        for (count, state), mass in counts.items():
            for next_state, probability in ((state, stay), (1 - state, flip)):
                key = (count + next_state, next_state)
                following[key] = following.get(key, Fraction(0)) + mass * probability
        counts = following
    law = [Fraction(0) for _ in range(n + 1)]
    for (count, _), mass in counts.items():
        law[count] += mass
    return tuple(law)


def conditional_ratio_batch_means(
    states: Sequence[tuple[int, int]], batch_size: int,
) -> tuple[int, float, float]:
    """Estimate the ratio and MCSE from vector batches on the original clock.

    The same complete batches determine the ratio, its gradient, and covariance.
    Undefined denominators raise ValueError, rather than report zero probability.
    """
    if any(b not in (0, 1) or z not in (0, 1) for b, z in states):
        raise ValueError("Require binary (eligibility, outcome) pairs")
    retained, center, covariance = vector_batch_means(
        [(b * z, b) for b, z in states], batch_size,
    )
    if center[1] == 0:
        raise ValueError("No eligible observation in the retained sequence")
    ratio = center[0] / center[1]
    gradient = (1 / center[1], -ratio / center[1])
    long_run = math.fsum(
        gradient[i] * covariance[i][j] * gradient[j]
        for i in range(2) for j in range(2)
    )
    # A projection of a covariance is nonnegative; roundoff can leave a tiny
    # negative value when both series are exactly proportional in this record.
    if long_run < -1e-12 * max(1, *(abs(x) for row in covariance for x in row)):
        raise ArithmeticError("Negative projected variance")
    return retained, ratio, math.sqrt(max(0, long_run) / retained)


def conditional_probability_example() -> None:
    """Contrast exact asymptotic cancellation with finite random denominators."""
    print("\nConditional probability P(Z=1 | B=1)=1/2; observations X_0,...,X_(N-1).")
    for beta, zeta in ((Fraction(49, 50), Fraction(0)),
                       (Fraction(0), Fraction(9, 10))):
        covariance, variance = conditional_ratio_long_run(beta, zeta)
        diagonal_only = 4 * covariance[0][0] + covariance[1][1]
        print(f"  beta={float(beta):.2f}, zeta={float(zeta):.2f}: "
              f"ratio CLT variance={float(variance):.6f}; "
              f"discarding covariance={float(diagonal_only):.6f}")
    n, beta = 100, Fraction(49, 50)
    law = eligibility_count_law(n, beta)
    defined = 1 - law[0]
    conditional_variance = sum((mass / (4 * m) for m, mass in enumerate(law)
                                if m), Fraction(0)) / defined
    print(f"  beta=.98, zeta=0, N={n}: undefined probability={float(law[0]):.6f}; "
          f"exact variance conditional on M>0={float(conditional_variance):.6f}; "
          f"CLT planning approximation={0.5 / n:.6f}")
    print("  Undefined runs are not assigned an estimate or silently discarded in a report.")
    rng = random.Random(131003)
    n, beta, zeta = 30_000, 0.0, 0.9
    b, z = rng.randrange(2), rng.randrange(2)
    states = []
    for _ in range(n):
        states.append((b, z))
        if rng.random() < (1 - beta) / 2:
            b = 1 - b
        if rng.random() < (1 - zeta) / 2:
            z = 1 - z
    for size in (100, 500, 1000):
        retained, ratio, mcse = conditional_ratio_batch_means(states, size)
        print(f"  Seed 131003, b={size}: N={retained}; ratio={ratio:.6f}; "
              f"BM MCSE={mcse:.6f}; asymptotic reference={math.sqrt(5 / retained):.6f}")
    print("  The exact 1/2 benchmark is a code check, not a general ratio-coverage guarantee.")


def main() -> None:
    check_worked_calculations()
    n = 19000
    rng = random.Random(130913)
    print("Stationary Gaussian AR(1): analytic and batch means MCSE")
    print("phi    h    b      N       mean     BM_MCSE  analytic_MCSE  BM_ESS")
    for phi in (0.9, -0.5):
        values = ar1(phi, n, rng)
        for label, observations, marginal_variance, correlation in (
            ("x", values, 1.0, phi),
            ("x^2", [x * x for x in values], 2.0, phi * phi),
        ):
            tau = (1 + correlation) / (1 - correlation)
            for b in (50, math.isqrt(n), 500):
                retained, estimate, variance, mcse = batch_means(observations, b)
                analytic = math.sqrt(marginal_variance * tau / retained)
                sample_variance = statistics.variance(observations[:retained])
                ess = retained * sample_variance / variance if variance > 0 else math.nan
                print(f"{phi:4.1f} {label:>4} {b:4d} {retained:6d} {estimate:10.5f} "
                      f"{mcse:10.5f} {analytic:14.5f} {ess:8.0f}")

    print("\nIndependent simulated runs: empirical SD versus claimed MCSE")
    repetitions, run_length, batch_size = 120, 10000, 100
    for phi in (0.9, -0.5):
        estimates, reported = [], []
        for _ in range(repetitions):
            sample = ar1(phi, run_length, rng)
            _, estimate, _, mcse = batch_means(sample, batch_size)
            estimates.append(estimate)
            reported.append(mcse)
        print(f"phi={phi:4.1f}: empirical SD={statistics.stdev(estimates):.5f}, "
              f"exact SD={exact_mean_sd(phi, run_length):.5f}, "
              f"average BM MCSE={statistics.fmean(reported):.5f}")
    print(f"Replications={repetitions}; rough relative uncertainty of empirical SD "
          f"is {1 / math.sqrt(2 * (repetitions - 1)):.1%}.")
    bivariate_example()
    conditional_probability_example()


if __name__ == "__main__":
    main()
