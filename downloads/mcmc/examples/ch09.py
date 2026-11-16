"""Chapter 09: a finite MH kernel and a lognormal random walk.

Run with `python examples/ch09.py`. Uses only the standard library.
"""

import math
import random


def finite_kernel():
    pi = (1 / 2, 1 / 3, 1 / 6)
    q = ((0, 3 / 4, 1 / 4), (1 / 2, 0, 1 / 2), (1 / 4, 3 / 4, 0))
    p = [[0.0] * 3 for _ in range(3)]
    for x in range(3):
        for y in range(3):
            if x != y and q[x][y] > 0:
                ratio = pi[y] * q[y][x] / (pi[x] * q[x][y])
                p[x][y] = q[x][y] * min(1.0, ratio)
        p[x][x] = 1.0 - sum(p[x])
    return pi, p


def gamma_log_target(x):
    if math.isnan(x):
        raise ValueError("NaN state or proposal")
    if x <= 0 or math.isinf(x):
        return -math.inf
    return 2.0 * math.log(x) - 2.0 * x


def gamma_mh(seed=91, steps=30_000, warmup=3_000, sigma=0.8, *, omit_hastings=False):
    """Return retained states and proposal acceptance fraction.

    The proposal is y = x exp(sigma Z). Its Hastings log correction is
    log(y/x). Every iteration, including a rejection, is recorded.
    omit_hastings=True deliberately demonstrates the WRONG Gamma(2, 2)
    invariant target; it is not another valid sampler for Gamma(3, 2).
    """
    if type(steps) is not int or type(warmup) is not int:
        raise ValueError("steps and warmup must be integers")
    if not 0 <= warmup < steps or not math.isfinite(sigma) or sigma <= 0:
        raise ValueError("Require 0 <= warmup < steps and finite sigma > 0")
    rng = random.Random(seed)
    x = 1.0
    log_x = gamma_log_target(x)
    if not math.isfinite(log_x):
        raise ValueError("Initial state must have finite log target")
    retained = []
    accepted = 0
    for iteration in range(steps):
        # A huge normal draw can overflow exp; such a proposal is outside
        # representable arithmetic and is rejected as a zero-target move.
        log_y = math.log(x) + sigma * rng.gauss(0.0, 1.0)
        try:
            y = math.exp(log_y)
        except OverflowError:
            y = math.inf
        if y > 0 and math.isfinite(y):
            log_target_y = gamma_log_target(y)
            correction = 0.0 if omit_hastings else log_y - math.log(x)
            delta = log_target_y - log_x + correction
            if math.isnan(delta):
                raise ValueError("NaN in Metropolis-Hastings log ratio")
            if math.log(1.0 - rng.random()) <= min(0.0, delta):
                x, log_x = y, log_target_y
                accepted += 1
        if iteration >= warmup:
            retained.append(x)
    return retained, accepted / steps


def verify_calculations():
    """Check algebraic identities independently of empirical moments."""
    pi, p = finite_kernel()
    expected = ((7 / 12, 1 / 3, 1 / 12), (1 / 2, 1 / 8, 3 / 8), (1 / 4, 3 / 4, 0))
    for x in range(3):
        assert math.isclose(sum(p[x]), 1.0)
        for y in range(3):
            assert math.isclose(p[x][y], expected[x][y], abs_tol=1e-15)
            assert math.isclose(pi[x] * p[x][y], pi[y] * p[y][x], abs_tol=1e-15)
    escape = [1 - p[x][x] for x in range(3)]
    jump_mass = [pi[x] * escape[x] for x in range(3)]
    jump_pi = [mass / sum(jump_mass) for mass in jump_mass]
    reconstructed = (jump_pi[0] / escape[0]) / sum(jump_pi[x] / escape[x] for x in range(3))
    assert math.isclose(reconstructed, pi[0])
    wrong_p = ((5 / 12, 1 / 2, 1 / 12), (1 / 2, 1 / 4, 1 / 4), (1 / 4, 3 / 4, 0))
    for y, expected_mass in enumerate((5 / 12, 11 / 24, 1 / 8)):
        assert math.isclose(sum(pi[x] * wrong_p[x][y] for x in range(3)), expected_mass)

    # Independent density evaluation verifies both the Jacobian correction
    # and the invariant density pi(x)/x of the deliberately broken version.
    def log_q(y, x):
        return -math.log(y * 0.8 * math.sqrt(2 * math.pi)) - (math.log(y / x) / 0.8) ** 2 / 2

    for x, y in ((1.0, 2.0), (0.2, 3.0), (4.0, 0.7)):
        target_difference = gamma_log_target(y) - gamma_log_target(x)
        correction = log_q(x, y) - log_q(y, x)
        assert math.isclose(correction, math.log(y / x), abs_tol=1e-12)
        assert math.isclose(target_difference + correction, 3 * math.log(y / x) - 2 * (y - x))
        wrong_forward = gamma_log_target(x) - math.log(x) + log_q(y, x) + min(0, target_difference)
        wrong_reverse = gamma_log_target(y) - math.log(y) + log_q(x, y) + min(0, -target_difference)
        assert math.isclose(wrong_forward, wrong_reverse, abs_tol=1e-12)
    assert math.log(1.0 - 0.0) <= min(0.0, 3 * math.log(2) - 2)
    assert gamma_log_target(math.inf) == -math.inf


def main():
    verify_calculations()
    pi, p = finite_kernel()
    stationary = [sum(pi[x] * p[x][y] for x in range(3)) for y in range(3)]
    escape = [1.0 - p[x][x] for x in range(3)]
    normalizer = sum(pi[x] * escape[x] for x in range(3))
    jump_pi = [pi[x] * escape[x] / normalizer for x in range(3)]
    print("Finite MH transition rows:")
    for row in p:
        print(" ", tuple(round(value, 6) for value in row))
    print("pi P:", tuple(round(value, 6) for value in stationary))
    print("jump-chain stationary law:", tuple(round(value, 6) for value in jump_pi))
    print("expected complete holding lengths:", tuple(round(1 / a, 6) for a in escape))

    samples, acceptance = gamma_mh()
    mean = sum(samples) / len(samples)
    second = sum(x * x for x in samples) / len(samples)
    print(f"Gamma MH: {len(samples)} retained states, acceptance={acceptance:.3f}")
    print(f"mean={mean:.3f} (target 1.5), variance={second - mean * mean:.3f} (target 0.75)")
    wrong_samples, wrong_acceptance = gamma_mh(omit_hastings=True)
    wrong_mean = sum(wrong_samples) / len(wrong_samples)
    wrong_variance = sum((x - wrong_mean) ** 2 for x in wrong_samples) / len(wrong_samples)
    print(f"Deliberately missing Hastings factor: acceptance={wrong_acceptance:.3f}")
    print(f"mean={wrong_mean:.3f}, variance={wrong_variance:.3f}; wrong invariant targets 1.0, 0.5")


if __name__ == "__main__":
    main()
