"""Seeded teaching examples for Chapter 11. Run with python examples/ch11.py."""

import math
import random


def checked(value):
    """Allow -inf for outside support, but reject broken log densities."""
    if math.isnan(value) or value == math.inf:
        raise ValueError("log density returned NaN or +inf")
    return value


def log_slice_threshold(log_value, rng):
    """Fail if floating-point arithmetic cannot represent a lower log height."""
    threshold = log_value - rng.expovariate(1.0)
    if not math.isfinite(threshold) or threshold >= log_value:
        raise ArithmeticError("slice height lost precision; rescale the log target")
    return threshold


def scalar_slice(x, log_g, width, max_intervals, rng, guard=10000):
    """Neal's finite-budget stepping-out and shrinkage, one scalar update."""
    if not math.isfinite(width) or width <= 0 or max_intervals < 1:
        raise ValueError("width must be finite and positive and max_intervals >= 1")
    log_x = checked(log_g(x))
    if log_x == -math.inf:
        raise ValueError("initial state must have positive density")
    threshold = log_slice_threshold(log_x, rng)
    evaluations = 1  # Include the current-state log_g call above.

    def evaluate(point):
        nonlocal evaluations
        evaluations += 1
        return checked(log_g(point))

    left = x - width * rng.random()
    right = left + width
    if not left < right or not math.isfinite(right - left):
        raise ArithmeticError("initial slice bracket lost precision; rescale the state")
    left_budget = rng.randrange(max_intervals)
    right_budget = max_intervals - 1 - left_budget
    while left_budget > 0 and evaluate(left) > threshold:
        expanded = left - width
        if not expanded < left or not math.isfinite(right - expanded):
            raise ArithmeticError("left slice expansion lost precision")
        left = expanded
        left_budget -= 1
    while right_budget > 0 and evaluate(right) > threshold:
        expanded = right + width
        if not expanded > right or not math.isfinite(expanded - left):
            raise ArithmeticError("right slice expansion lost precision")
        right = expanded
        right_budget -= 1

    for _ in range(guard):
        candidate = rng.uniform(left, right)
        if evaluate(candidate) > threshold:
            return candidate, evaluations
        if candidate < x:
            left = candidate
        elif candidate > x:
            right = candidate
        else:
            raise ArithmeticError("shrinkage stalled at current state")
    raise ArithmeticError("scalar slice shrinkage exceeded guard")


def elliptical_slice(x, log_likelihood, rng, guard=10000):
    """One 2D elliptical slice update for covariance [[1,.8],[.8,1]]."""
    old_ll = checked(log_likelihood(x))
    if old_ll == -math.inf:
        raise ValueError("initial state must have positive likelihood")
    z1, z2 = rng.gauss(0, 1), rng.gauss(0, 1)
    nu = (z1, 0.8 * z1 + 0.6 * z2)
    threshold = log_slice_threshold(old_ll, rng)
    angle = rng.random() * 2 * math.pi
    lower, upper = angle - 2 * math.pi, angle
    for evaluations in range(1, guard + 1):
        candidate = (
            x[0] * math.cos(angle) + nu[0] * math.sin(angle),
            x[1] * math.cos(angle) + nu[1] * math.sin(angle),
        )
        if checked(log_likelihood(candidate)) > threshold:
            return candidate, evaluations + 1  # Include the current-state call.
        if angle < 0:
            lower = angle
        else:
            upper = angle
        angle = rng.uniform(lower, upper)
    raise ArithmeticError("elliptical slice shrinkage exceeded guard")


def exponential_dependence_demo():
    """Exact conditional draws can still make a correlated outer chain."""
    rng = random.Random(1117)
    n = 40000
    x = rng.expovariate(2.0)  # Exact stationary start for this known target.
    values = []
    for _ in range(n):
        x = rng.random() * (x + rng.expovariate(1.0) / 2.0)
        values.append(x)
    mean = sum(values) / n
    variance = sum((x - mean) ** 2 for x in values) / n
    correlations = []
    for lag in (1, 2, 3):
        covariance = sum((a - mean) * (b - mean)
                         for a, b in zip(values, values[lag:])) / (n - lag)
        correlations.append(covariance / variance)
    # Exact finite-n variance: Var(X)=1/4, Corr(X_0,X_k)=2**(-k).
    factor = 3.0 - 4.0 * (1.0 - 2.0 ** (-n)) / n
    print("Ideal Exp(2) slice: mean %.4f (exact .5), variance %.4f (exact .25)"
          % (mean, variance))
    print("  ACF lags 1,2,3: %s (exact .5, .25, .125); exact stationary mean SE %.5f"
          % (", ".join("%.4f" % rho for rho in correlations),
             math.sqrt(factor / (4.0 * n))))


def main():
    rng = random.Random(1103)
    n, warmup = 12000, 2000
    x, scalar_sum, scalar_sq, scalar_cost = 1.0, 0.0, 0.0, 0
    for i in range(n + warmup):
        x, cost = scalar_slice(x, lambda t: -0.5 * t * t, 1.0, 12, rng)
        if i >= warmup:
            scalar_sum += x
            scalar_sq += x * x
            scalar_cost += cost
    print("Scalar N(0,1) slice: mean %.4f (exact 0), E[x^2] %.4f (exact 1), evaluations/update %.2f"
          % (scalar_sum / n, scalar_sq / n, scalar_cost / n))

    def log_likelihood(point):
        return -0.5 * (1.0 - point[0] - point[1]) ** 2 / 0.25

    state = (0.0, 0.0)
    sum0 = sum1 = sum00 = sum01 = cost_sum = 0.0
    for i in range(n + warmup):
        state, cost = elliptical_slice(state, log_likelihood, rng)
        if i >= warmup:
            sum0 += state[0]
            sum1 += state[1]
            sum00 += state[0] ** 2
            sum01 += state[0] * state[1]
            cost_sum += cost
    mean0, mean1 = sum0 / n, sum1 / n
    exact_mean = 1.8 / 3.85
    exact_var = 1 - 3.24 / 3.85
    exact_cov = 0.8 - 3.24 / 3.85
    print("Elliptical slice: means (%.4f, %.4f) (exact %.4f each)" %
          (mean0, mean1, exact_mean))
    print("  Var[x0] %.4f (exact %.4f), Cov[x0,x1] %.4f (exact %.4f), evaluations/update %.2f" %
          (sum00 / n - mean0 ** 2, exact_var,
           sum01 / n - mean0 * mean1, exact_cov, cost_sum / n))
    exponential_dependence_demo()


if __name__ == "__main__":
    main()
