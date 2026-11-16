"""Chapter 26: analytic evidence, bridge sampling, stepping stones, and AIS.

Run with ``python examples/ch26.py``. This is a small, seeded teaching
experiment with exact samplers for its two conjugate benchmark targets.
The AIS experiment uses invariant Gaussian transitions without equilibrating
each intermediate marginal distribution.
"""

import math
import random
import statistics


SEED = 260926
GAUSSIAN_REPLICATES = 10
GAUSSIAN_DRAWS = 2_000
BERNOULLI_REPLICATES = 8
STONES = 16
STONE_DRAWS = 1_500
TI_GRID = 32
TI_DRAWS = 1_500
AIS_PATHS = 8_000
AIS_STEPS = 16


def logsumexp(values):
    values = list(values)
    maximum = max(values)
    return maximum + math.log(sum(math.exp(x - maximum) for x in values))


def logmeanexp(values):
    values = list(values)
    return logsumexp(values) - math.log(len(values))


def logaddexp(a, b):
    maximum = max(a, b)
    return maximum + math.log(math.exp(a - maximum) + math.exp(b - maximum))


def gaussian_log_likelihood(theta):
    # One observation y=0 with unit observation variance.
    return -0.5 * (math.log(2.0 * math.pi) + theta * theta)


def bridge_log_evidence(rng, n=GAUSSIAN_DRAWS, tau=2.0, n_post=None):
    """Bridge prior draws against exact posterior draws with their sample fractions."""
    if n_post is None:
        n_post = n
    posterior_sd = math.sqrt(tau * tau / (1.0 + tau * tau))
    prior_logs = [gaussian_log_likelihood(rng.gauss(0.0, tau)) for _ in range(n)]
    post_logs = [gaussian_log_likelihood(rng.gauss(0.0, posterior_sd)) for _ in range(n_post)]
    log_s0 = math.log(n / (n + n_post))
    log_s1 = math.log(n_post / (n + n_post))
    log_r = logmeanexp(prior_logs)  # Positive initial evidence guess.
    for _ in range(100):
        prior_terms = [
            x - logaddexp(log_s1 + x, log_s0 + log_r) for x in prior_logs
        ]
        post_terms = [
            -logaddexp(log_s1 + x, log_s0 + log_r) for x in post_logs
        ]
        next_log_r = logmeanexp(prior_terms) - logmeanexp(post_terms)
        if abs(next_log_r - log_r) < 1e-12:
            return next_log_r
        log_r = next_log_r
    raise RuntimeError("bridge fixed point did not converge")


def harmonic_log_evidence(rng, n=GAUSSIAN_DRAWS, tau=2.0):
    """Ordinary harmonic mean; deliberately demonstrates unstable tails."""
    posterior_sd = math.sqrt(tau * tau / (1.0 + tau * tau))
    return -logmeanexp(
        -gaussian_log_likelihood(rng.gauss(0.0, posterior_sd))
        for _ in range(n)
    )


def log_beta(a, b):
    return math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)


def exact_log_z(beta):
    return log_beta(1.0 + 8.0 * beta, 1.0 + 2.0 * beta)


def bernoulli_log_likelihood(theta):
    return 8.0 * math.log(theta) + 2.0 * math.log1p(-theta)


def beta_draw(rng, beta):
    theta = rng.betavariate(1.0 + 8.0 * beta, 1.0 + 2.0 * beta)
    # The PRNG is discrete; guard the vanishingly rare rounded endpoint.
    return min(max(theta, math.nextafter(0.0, 1.0)), math.nextafter(1.0, 0.0))


def stepping_stone_log_evidence(rng, stones=STONES, n=STONE_DRAWS):
    total = 0.0
    for k in range(1, stones + 1):
        beta_left = (k - 1) / stones
        delta = 1.0 / stones
        total += logmeanexp(
            delta * bernoulli_log_likelihood(beta_draw(rng, beta_left))
            for _ in range(n)
        )
    return total


def ti_trapezoid_log_evidence(rng, grid=TI_GRID, n=TI_DRAWS):
    means = []
    for k in range(grid + 1):
        beta = k / grid
        means.append(
            statistics.fmean(
                bernoulli_log_likelihood(beta_draw(rng, beta))
                for _ in range(n)
            )
        )
    return sum((means[k] + means[k + 1]) / (2 * grid) for k in range(grid))


def gaussian_ti_grid(grid: int, tau: float = 2.0) -> float:
    """Trapezoid using analytic path expectations: only quadrature error."""
    means = [
        -0.5 * (math.log(2.0 * math.pi) + 1.0 / (tau**-2 + k / grid))
        for k in range(grid + 1)
    ]
    return math.fsum((means[k] + means[k + 1]) / (2 * grid) for k in range(grid))


def gaussian_ais(
    rng: random.Random,
    paths: int = AIS_PATHS,
    steps: int = AIS_STEPS,
    rho: float = 0.9,
    tau: float = 2.0,
) -> tuple[float, float, float, float]:
    """Return log mean weight, raw-scale SE, terminal second moment and its truth."""
    if paths < 2 or steps < 1 or not 0 <= rho <= 1 or tau <= 0:
        raise ValueError("require paths >= 2, steps >= 1, 0 <= rho <= 1, tau > 0")
    noise_sds = [
        math.sqrt((1.0 - rho * rho) / (tau**-2 + k / steps))
        for k in range(1, steps + 1)
    ]
    endpoint_variance = tau * tau
    for noise_sd in noise_sds:
        endpoint_variance = rho * rho * endpoint_variance + noise_sd * noise_sd
    log_weights, endpoint_squares = [], []
    for _ in range(paths):
        theta = rng.gauss(0.0, tau)
        initial_theta = theta
        log_weight = 0.0
        for noise_sd in noise_sds:
            # Weight the current state BEFORE the new-temperature transition.
            log_weight += gaussian_log_likelihood(theta) / steps
            theta = rho * theta + noise_sd * rng.gauss(0.0, 1.0)
        if rho == 1.0:
            assert math.isclose(log_weight, gaussian_log_likelihood(initial_theta), abs_tol=1e-12)
        log_weights.append(log_weight)
        endpoint_squares.append(theta * theta)
    weights = [math.exp(value) for value in log_weights]
    # L <= 1/sqrt(2*pi), so these teaching weights are bounded and have finite variance.
    return (
        logmeanexp(log_weights),
        statistics.stdev(weights) / math.sqrt(paths),
        statistics.fmean(endpoint_squares),
        endpoint_variance,
    )


def summarize(label, values):
    print(
        f"{label:28s} mean={statistics.fmean(values): .6f} "
        f"run SD={statistics.stdev(values):.6f} "
        f"range=[{min(values):.6f}, {max(values):.6f}]"
    )


def main():
    rng = random.Random(SEED)
    gaussian_exact = -0.5 * math.log(2.0 * math.pi * 5.0)
    print(f"Gaussian exact log Z       {gaussian_exact:.6f}")
    bridge = [bridge_log_evidence(rng) for _ in range(GAUSSIAN_REPLICATES)]
    harmonic = [harmonic_log_evidence(rng) for _ in range(GAUSSIAN_REPLICATES)]
    summarize("Bridge log Z", bridge)
    summarize("Harmonic-mean log Z", harmonic)
    print("Harmonic-mean replicate SD is descriptive; reciprocal-likelihood weight variance is infinite.")

    bernoulli_exact = -math.log(495.0)
    exact_telescope = sum(
        exact_log_z(k / STONES) - exact_log_z((k - 1) / STONES)
        for k in range(1, STONES + 1)
    )
    assert math.isclose(exact_telescope, bernoulli_exact, abs_tol=1e-12)
    print(f"\nBernoulli exact log Z      {bernoulli_exact:.6f}")
    print(f"Exact stone telescoping    {exact_telescope:.6f}")
    estimates = [
        stepping_stone_log_evidence(rng) for _ in range(BERNOULLI_REPLICATES)
    ]
    summarize("Sampled stones log Z", estimates)
    print(f"TI trapezoid log Z         {ti_trapezoid_log_evidence(rng):.6f}")
    print("Bridge, stones and sampled TI use exact conjugate draws; agreement is only a benchmark check.")

    print("\nGaussian TI with analytic means (isolated quadrature error):")
    errors = []
    for grid in (4, 16, 64):
        estimate = gaussian_ti_grid(grid)
        errors.append(abs(estimate - gaussian_exact))
        print(f"  grid={grid:2d} log Z={estimate:.6f} error={estimate-gaussian_exact:+.6f}")
    assert errors[2] < errors[1] < errors[0]

    unequal = bridge_log_evidence(random.Random(SEED + 1), n=1_000, n_post=3_000)
    print(f"Unequal bridge 1000/3000    {unequal:.6f}")
    print("\nGaussian AIS: evidence uses weights; terminal states are not unweighted posterior draws.")
    for rho in (0.9, 1.0):
        log_estimate, se, empirical_v, exact_v = gaussian_ais(random.Random(SEED + 2), rho=rho)
        print(f"  rho={rho}: Z={math.exp(log_estimate):.6f}, raw SE={se:.6f}, log Z={log_estimate:.6f}")
        print(f"    terminal E[X²]: empirical={empirical_v:.4f}, recursion={exact_v:.4f}, posterior=0.8000")
    print("Raw-scale AIS estimates are unbiased under the stated assumptions; their logarithms are not.")

    # Indicator likelihood: all positive-temperature log-likelihood means are zero.
    prior_mass = 0.25
    corrected_ti = math.log(prior_mass) + 0.0
    assert math.isclose(corrected_ti, -math.log(4.0), abs_tol=1e-12)
    print(f"Support-loss example: naive TI=0, corrected log Z={corrected_ti:.6f}")


if __name__ == "__main__":
    main()
