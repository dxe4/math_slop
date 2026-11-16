"""Chapter 12: stationary variance, cuts, exact spectra, and scaling.

Standard library only. Repetition variance is a simulation estimate, not a proof.
"""

from itertools import combinations
from math import erfc, exp, isclose, pi, sqrt
from random import Random
from statistics import variance


def finite_variance_factor(a: float, n: int) -> float:
    """Exact n * Var(mean) for f in {-1, 1}, with a stationary start."""
    eigenvalue = 1.0 - 2.0 * a
    return 1.0 + 2.0 * sum(
        (1.0 - lag / n) * eigenvalue**lag for lag in range(1, n)
    )


def repeated_means(a: float, n: int, repetitions: int, seed: int) -> list[float]:
    means = []
    seed_stream = Random(seed)
    for _ in range(repetitions):
        rng = Random(seed_stream.getrandbits(64))
        value = 1 if rng.random() < 0.5 else -1
        total = 0
        for _ in range(n):
            total += value
            if rng.random() < a:
                value = -value
        means.append(total / n)
    return means


def four_state_matrix(epsilon: float, eta: float = 0.0) -> list[list[float]]:
    """Lazy, symmetric transition matrix for the chapter's parameter range."""
    if not 0.0 < epsilon <= 0.1 or not 0.0 <= eta <= 0.1:
        raise ValueError("Require 0 < epsilon <= 0.1 and 0 <= eta <= 0.1")
    matrix = [[0.0] * 4 for _ in range(4)]
    for left, right, weight in [(0, 1, 0.4), (1, 2, epsilon),
                                (2, 3, 0.4), (0, 3, eta)]:
        matrix[left][right] = matrix[right][left] = weight
    for state in range(4):
        matrix[state][state] = 1.0 - sum(matrix[state])
    return matrix


def cut_ratios(epsilon: float, eta: float = 0.0) -> list[tuple[tuple[int, ...], float]]:
    """All cuts with mass <= 1/2 for the uniform four-state example."""
    matrix = four_state_matrix(epsilon, eta)
    ratios = []
    for size in (1, 2):
        for cut in combinations(range(4), size):
            flow = sum(matrix[x][y] / 4.0 for x in cut
                       for y in range(4) if y not in cut)
            ratios.append((tuple(x + 1 for x in cut), flow / (size / 4.0)))
    return ratios


def matvec(matrix: list[list[float]], vector: list[float]) -> list[float]:
    return [sum(a * b for a, b in zip(row, vector)) for row in matrix]


def bottleneck_calculations(epsilon: float, eta: float) -> tuple[float, float]:
    """Check the analytic spectrum and Poisson solution in the full matrix."""
    matrix = four_state_matrix(epsilon, eta)
    w = 0.4
    root = sqrt(w * w + (epsilon - eta)**2)
    rates = [w + epsilon + eta - root, w + epsilon + eta + root]
    eigenpairs = [(0.0, [1.0] * 4), (2 * w, [1.0, -1.0, -1.0, 1.0])]
    for rate in rates:
        u, v = w, w + 2 * eta - rate
        eigenpairs.append((rate, [u, v, -v, -u]))
    for rate, vector in eigenpairs:
        result = matvec(matrix, vector)
        assert all(isclose(actual, (1 - rate) * value, abs_tol=1e-13)
                   for actual, value in zip(result, vector))

    determinant = 2 * w * (epsilon + eta) + 4 * epsilon * eta
    u = (2 * w + 2 * epsilon) / determinant
    v = (2 * w + 2 * eta) / determinant
    solution = [u, v, -v, -u]
    observable = [1.0, 1.0, -1.0, -1.0]
    propagated = matvec(matrix, solution)
    assert all(isclose(g - pg, f, abs_tol=1e-12)
               for g, pg, f in zip(solution, propagated, observable))
    exact_variance = u + v - 1

    # Independently sum stationary covariances via the unreduced matrix.
    # These fixed checks use epsilon=0.01; 10,000 terms leave negligible tail.
    covariance_sum = 1.0
    propagated = observable[:]
    for _ in range(10000):
        propagated = matvec(matrix, propagated)
        covariance_sum += 2 * sum(f * pf for f, pf in
                                  zip(observable, propagated)) / 4
    gap = rates[0]
    tail_bound = 2 * (1 - gap)**10001 / gap
    assert tail_bound < 1e-10
    assert isclose(covariance_sum, exact_variance, rel_tol=1e-11)
    return gap, exact_variance


def optimal_gaussian_scale() -> tuple[float, float]:
    """Bisect h'(ell)/ell = 4 Phi(-ell/2) - ell phi(ell/2)."""
    left, right = 0.1, 5.0
    for _ in range(60):
        scale = (left + right) / 2
        derivative = (2 * erfc(scale / (2 * sqrt(2)))
                      - scale * exp(-scale**2 / 8) / sqrt(2 * pi))
        if derivative > 0:
            left = scale
        else:
            right = scale
    scale = (left + right) / 2
    return scale, erfc(scale / (2 * sqrt(2)))


def main() -> None:
    n, repetitions = 2000, 800
    print(f"Stationary starts; {repetitions} repetitions of {n} observations")
    print("a     asymptotic   exact finite n   empirical n*Var(mean)")
    for index, a in enumerate((0.2, 0.5, 0.8)):
        empirical = n * variance(repeated_means(a, n, repetitions, 1200 + index))
        print(f"{a:.1f}   {(1-a)/a:10.4f}   {finite_variance_factor(a, n):14.4f}"
              f"   {empirical:21.4f}")
    for eta in (0.0, 0.09):
        ratios = cut_ratios(0.01, eta)
        cut, conductance = min(ratios, key=lambda item: item[1])
        print(f"epsilon=0.01, eta={eta:.2f}: conductance={conductance:.5f},"
              f" minimizing cut={cut}")
        print(f"  gap bounds: [{conductance**2/2:.6f}, {2*conductance:.6f}]")
        gap, asymptotic_variance = bottleneck_calculations(0.01, eta)
        assert conductance**2 / 2 <= gap <= 2 * conductance
        print(f"  exact gap={gap:.9f}; pair-membership variance="
              f"{asymptotic_variance:.6f}; unchanged-observable variance=1.5")
    scale, acceptance = optimal_gaussian_scale()
    print(f"Gaussian limiting optimum: scale={scale:.10f}, "
          f"acceptance={acceptance:.10f}")
    print("Full-matrix eigenvector, Poisson, and covariance checks passed.")


if __name__ == "__main__":
    main()
