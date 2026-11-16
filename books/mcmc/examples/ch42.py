"""Chapter 42: exact decay inference and numerical-forward-model bias.

Run with ``python examples/ch42.py``. Uses only the standard library.
"""

import math
import random


def conjugate_benchmark() -> tuple[float, float, float, float]:
    # beta=(a,k), log(y_i)=a-k*t_i+noise, prior N(0,100 I).
    times = (0.0, 1.0, 2.0)
    log_y = (0.0, -0.5, -1.0)
    tau2 = 0.01
    p00 = 0.01 + len(times) / tau2
    p01 = -sum(times) / tau2
    p11 = 0.01 + sum(t * t for t in times) / tau2
    det = p00 * p11 - p01 * p01
    v00, v01, v11 = p11 / det, -p01 / det, p00 / det
    b0 = sum(log_y) / tau2
    b1 = -sum(t * value for t, value in zip(times, log_y)) / tau2
    mean_a = v00 * b0 + v01 * b1
    mean_k = v01 * b0 + v11 * b1
    return mean_a, mean_k, math.sqrt(v11), v01


def forward(k: float, steps: int | None) -> float:
    if steps is None:
        return math.exp(-k)
    h = 1.0 / steps
    factor = 1.0 - h * k
    if factor <= 0.0:
        return float("nan")
    return math.exp(steps * math.log1p(-h * k))


def log_target(k: float, steps: int | None) -> float:
    if not 0.0 < k < 2.0:
        return float("-inf")
    predicted = forward(k, steps)
    if not math.isfinite(predicted):
        return float("-inf")
    y = math.exp(-1.0)
    sigma = 0.02
    return -0.5 * ((y - predicted) / sigma) ** 2 - 0.5 * ((k - 1.0) / 0.5) ** 2


def quadrature_mean(steps: int | None) -> float:
    # Deterministic midpoint quadrature is a separate target reference.
    n = 8000
    width = 2.0 / n
    values = [(i + 0.5) * width for i in range(n)]
    logs = [log_target(k, steps) for k in values]
    top = max(logs)
    weights = [math.exp(value - top) for value in logs]
    return sum(k * w for k, w in zip(values, weights)) / sum(weights)


def mh_mean(steps: int | None, seed: int) -> tuple[float, float, float]:
    rng = random.Random(seed)
    k = 1.0
    lp = log_target(k, steps)
    draws = []
    accepted = 0
    warmup = 2000
    kept = 20000
    for iteration in range(warmup + kept):
        proposal = k + rng.gauss(0.0, 0.045)
        lp_proposal = log_target(proposal, steps)
        if math.log(rng.random()) < lp_proposal - lp:
            k, lp = proposal, lp_proposal
            if iteration >= warmup:
                accepted += 1
        if iteration >= warmup:
            draws.append(k)
    mean = sum(draws) / kept
    # A rough batch-means MCSE, with 40 nonoverlapping batches.
    batch_size = kept // 40
    batches = [sum(draws[i : i + batch_size]) / batch_size for i in range(0, kept, batch_size)]
    batch_mean = sum(batches) / len(batches)
    batch_variance = sum((b - batch_mean) ** 2 for b in batches) / (len(batches) - 1)
    mcse = math.sqrt(batch_variance / len(batches))
    return mean, mcse, accepted / kept


def normalized_weights(values: list[float], steps: int | None) -> list[float]:
    logs = [log_target(k, steps) for k in values]
    top = max(logs)
    weights = [math.exp(value - top) for value in logs]
    total = math.fsum(weights)
    return [w / total for w in weights]


def solver_budget(steps: int) -> tuple[float, float, float]:
    """Analytic bounds on forward error, potential error, and posterior TV."""
    if steps <= 2:
        raise ValueError("The uniform error bound needs more than two Euler steps.")
    error_bound = 2.0 * math.exp(-2.0) / (steps - 2)
    q = error_bound / 0.02
    residual_bound = (1.0 - math.exp(-1.0)) / 0.02
    b = residual_bound * q + 0.5 * q * q
    # Avoid overflow when the trivial TV bound of one already applies.
    tv_bound = 1.0 if b >= 0.5 * math.log(3.0) else 0.5 * math.expm1(2.0 * b)
    return error_bound, b, tv_bound


def compare_posteriors(steps: int, points: int) -> tuple[float, float]:
    """Numerical TV and mean shift; midpoint quadrature is not certification."""
    values = [(i + 0.5) * 2.0 / points for i in range(points)]
    exact = normalized_weights(values, None)
    approximate = normalized_weights(values, steps)
    tv = 0.5 * math.fsum(abs(a - b) for a, b in zip(exact, approximate))
    shift = math.fsum(k * (a - b) for k, a, b in zip(values, approximate, exact))
    error_bound, b, tv_bound = solver_budget(steps)
    for k in values:
        forward_error = forward(k, steps) - forward(k, None)
        residual = math.exp(-1.0) - forward(k, None)
        potential_difference = (-(residual * forward_error) + 0.5 * forward_error**2) / 0.02**2
        # Independent computation from the two likelihoods; the prior cancels.
        direct_difference = log_target(k, None) - log_target(k, steps)
        assert math.isclose(potential_difference, direct_difference, abs_tol=1e-11)
        assert abs(forward_error) <= error_bound + 1e-14
        assert abs(potential_difference) <= b + 1e-11
    assert tv <= tv_bound
    assert abs(shift) <= 2.0 * tv_bound
    return tv, shift


def numerical_checks() -> None:
    # Recheck conjugacy by the posterior normal equations, not rounded outputs.
    a, k, _, _ = conjugate_benchmark()
    assert abs(300.01 * a - 300.0 * k + 150.0) < 1e-10
    assert abs(-300.0 * a + 500.01 * k - 250.0) < 1e-10
    # At nonzero residual, the observed Hessian differs from Gauss--Newton.
    rate = 0.8
    epsilon = 1e-4
    negative_log_likelihood = lambda x: 0.5 * ((math.exp(-1.0) - math.exp(-x)) / 0.02)**2
    observed_hessian = (negative_log_likelihood(rate + epsilon)
                        - 2.0 * negative_log_likelihood(rate)
                        + negative_log_likelihood(rate - epsilon)) / epsilon**2
    g = math.exp(-rate)
    analytic_hessian = (g*g - (math.exp(-1.0) - g)*g) / 0.02**2
    assert math.isclose(observed_hessian, analytic_hessian, rel_tol=1e-6)
    derivative = (forward(rate + epsilon, None) - forward(rate - epsilon, None)) / (2.0 * epsilon)
    assert math.isclose(derivative, -g, rel_tol=1e-8)
    print("Uniform Euler budget on the full prior support 0<k<2:")
    print("  steps       b bound       TV bound      quadrature TV     mean shift")
    for steps in (1024, 8192, 65536):
        _, b, tv_bound = solver_budget(steps)
        tv, shift = compare_posteriors(steps, 8000)
        fine_tv, fine_shift = compare_posteriors(steps, 16000)
        assert abs(tv - fine_tv) < 1e-8
        assert abs(shift - fine_shift) < 1e-10
        print(f"  {steps:5d}     {b:10.6f}     {tv_bound:10.6f}     {fine_tv:12.8f}   {fine_shift:12.8f}")
    m, residual_bound, desired_b = 100, 10.0, 0.01
    d = 2.0 * desired_b / (math.sqrt(m) * (math.sqrt(residual_bound**2 + 2.0 * desired_b) + residual_bound))
    assert math.isclose(residual_bound * math.sqrt(m) * d + 0.5 * m * d*d, desired_b)
    print(f"100 observations, R=10, b=0.01: per-observation error/noise <= {d:.8f}")
    print("Analytic identity, Hessian, sensitivity, and quadrature refinement checks passed.")


def main() -> None:
    a, k, sd_k, cov_ak = conjugate_benchmark()
    print("Conjugate log-observation benchmark (unconstrained k):")
    print(f"  E[a]={a:.6f}, E[k]={k:.6f}, SD[k]={sd_k:.6f}, Cov[a,k]={cov_ak:.6f}")
    print("One concentration observation at t=1, y=exp(-1), sigma=0.02:")
    print("  solver    pseudo-fit    quadrature E[k]    MH E[k]      batch MCSE   accept")
    for index, steps in enumerate((2, 4, 8, 16, 32, None)):
        label = "exact" if steps is None else f"Euler/{steps}"
        pseudo_fit = 1.0 if steps is None else steps * (1.0 - math.exp(-1.0 / steps))
        reference = quadrature_mean(steps)
        mean, mcse, acceptance = mh_mean(steps, seed=4200 + index)
        print(f"  {label:8s}  {pseudo_fit:10.6f}    {reference:14.6f}   {mean:10.6f}    {mcse:10.6f}   {acceptance:.3f}")
    coarse = forward(1.0, 2)
    print(f"At k=1, Euler/2 predicts {coarse:.6f}; exact predicts {math.exp(-1):.6f}.")
    numerical_checks()


if __name__ == "__main__":
    main()
