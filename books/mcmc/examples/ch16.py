"""Chapter 16: matched-density checks and a geometric sampling illustration.

Run with ``python examples/ch16.py``. Uses only the standard library.
The lag-one correlations printed below are teaching summaries, not ESS.
"""

import math
import random


SEED = 20260926
LOG_2PI = math.log(2.0 * math.pi)
RHO = 0.99
L22 = math.sqrt(1.0 - RHO * RHO)


def normal_x_from_z(z):
    return z[0], RHO * z[0] + L22 * z[1]


def normal_z_from_x(x):
    return x[0], (x[1] - RHO * x[0]) / L22


def log_normal_z(z):
    return -LOG_2PI - 0.5 * sum(value * value for value in z)


def log_normal_x(x):
    # Direct covariance formula, independent of the triangular-solve code.
    determinant = 1.0 - RHO * RHO
    quadratic = (x[0] ** 2 - 2.0 * RHO * x[0] * x[1] + x[1] ** 2)
    return -LOG_2PI - 0.5 * math.log(determinant) - 0.5 * quadratic / determinant


def log_normal_1d(value: float, mean: float, variance: float) -> float:
    return -0.5 * (LOG_2PI + math.log(variance)
                   + (value - mean) ** 2 / variance)


def check_partial_noncentering() -> None:
    """Check the normalized prior-times-likelihood factorization, not mixing."""
    errors = []
    for tau in (0.2, 1.0, 3.0):
        for s in (0.1, 1.0, 4.0):
            total_variance = s * s + tau * tau
            weight = s * s / total_variance
            variance = s * s * tau * tau / total_variance
            mixed_curvature = weight / (s * s) - (1.0 - weight) / (tau * tau)
            assert abs(mixed_curvature) < 1e-12
            for mu in (-1.2, 0.3, 2.0):
                for eta in (-0.7, 0.4):
                    y = 2.0
                    theta = eta + weight * mu
                    centered = (log_normal_1d(theta, mu, tau * tau)
                                + log_normal_1d(y, theta, s * s))
                    # y|mu,tau is N(mu,s^2+tau^2); eta|mu,tau,y
                    # has a mean and variance that do not depend on mu.
                    factored = (log_normal_1d(y, mu, total_variance)
                                + log_normal_1d(eta, (1.0 - weight) * y, variance))
                    errors.append(abs(centered - factored))
    assert max(errors) < 1e-10
    print(f"Partial location noncentering: {len(errors)} density checks; "
          f"max error={max(errors):.2e}")
    for s in (4.0, 1.0, 0.1):
        weight = s * s / (1.0 + s * s)
        print(f"  tau=1, y=2, s={s}: w={weight:.6f}, "
              f"E[eta|tau,y]={2.0 / (1.0 + s * s):.6f}, "
              f"Var(eta|tau,y)={weight:.6f}")


def log_funnel_centered(v, xs):
    d = len(xs)
    log_v = -0.5 * LOG_2PI - math.log(3.0) - v * v / 18.0
    return (log_v - 0.5 * d * LOG_2PI - 0.5 * d * v
            - 0.5 * math.exp(-v) * sum(x * x for x in xs))


def log_funnel_noncentered(v, zs):
    d = len(zs)
    log_v = -0.5 * LOG_2PI - math.log(3.0) - v * v / 18.0
    return log_v - 0.5 * d * LOG_2PI - 0.5 * sum(z * z for z in zs)


def lag_one(values):
    center = sum(values) / len(values)
    variance_sum = sum((v - center) ** 2 for v in values)
    covariance_sum = sum((a - center) * (b - center)
                         for a, b in zip(values[:-1], values[1:]))
    return covariance_sum / variance_sum


def random_walk_gaussian(rng, transformed, step, warmup=3000, kept=20000):
    state = (0.0, 0.0)
    log_target = log_normal_z if transformed else log_normal_x
    log_at_state = log_target(state)
    accepted = 0
    values = []
    for iteration in range(warmup + kept):
        proposal = (state[0] + rng.gauss(0, step),
                    state[1] + rng.gauss(0, step))
        proposal_log = log_target(proposal)
        uniform = rng.random()
        if uniform == 0.0 or math.log(uniform) < proposal_log - log_at_state:
            state, log_at_state = proposal, proposal_log
            if iteration >= warmup:
                accepted += 1
        if iteration >= warmup:
            x = normal_x_from_z(state) if transformed else state
            values.append(x[0] + x[1])
    return accepted / kept, sum(values) / kept, lag_one(values)


def main():
    z = (1.0, -1.0)
    x = normal_x_from_z(z)
    normal_errors = []
    for point in ((1.0, -1.0), (0.0, 0.0), (-2.0, 0.5), (0.2, 3.0)):
        mapped = normal_x_from_z(point)
        recovered = normal_z_from_x(mapped)
        assert max(abs(a - b) for a, b in zip(point, recovered)) < 1e-12
        normal_errors.append(abs(log_normal_z(point)
                                 - (log_normal_x(mapped) + math.log(L22))))
    normal_error = max(normal_errors)
    assert normal_error < 1e-12

    funnel_errors = []
    for v, zs in [(-6.0, (0.2, -1.1, 0.7)),
                  (0.0, (1.0, 0.0, -0.5)),
                  (6.0, (-0.3, 0.8, 1.4))]:
        xs = tuple(math.exp(v / 2.0) * zi for zi in zs)
        corrected = log_funnel_centered(v, xs) + len(zs) * v / 2.0
        funnel_errors.append(abs(log_funnel_noncentered(v, zs) - corrected))
    assert max(funnel_errors) < 1e-12
    print(f"Matched-density checks: Gaussian error={normal_error:.2e}, "
          f"funnel max error={max(funnel_errors):.2e}")
    print(f"Gaussian point: z={z}, x=({x[0]:.6f}, {x[1]:.6f}), "
          f"squared Mahalanobis distance={sum(zi * zi for zi in z):.1f}")
    check_partial_noncentering()

    rng = random.Random(SEED)
    n = 20000
    vs = [rng.gauss(0.0, 3.0) for _ in range(n)]
    zs = [rng.gauss(0.0, 1.0) for _ in range(n)]
    xs = [math.exp(v / 2.0) * z for v, z in zip(vs, zs)]
    # This identity holds for each draw, not just in expectation.
    assert max(abs(x / math.exp(v / 2.0) - z)
               for v, x, z in zip(vs, xs, zs)) < 1e-12
    inside = sum(abs(x) < math.exp(v / 2.0) for v, x in zip(vs, xs)) / n
    print(f"Direct funnel draws: mean(v)={sum(vs)/n:.3f}, "
          f"mean(z^2)={sum(z*z for z in zs)/n:.3f}, "
          f"P(|x|<exp(v/2)) estimate={inside:.3f} "
          f"(normal reference={math.erf(1/math.sqrt(2)):.3f})")
    print(f"Conditional SD(x|v=-6)={math.exp(-3):.4f}, "
          f"SD(x|v=6)={math.exp(3):.2f}; "
          f"ratio={math.exp(6):.1f}")

    for transformed, step, label, seed_offset in [
            (False, 0.22, "original isotropic", 1),
            (True, 1.4, "whitened isotropic", 2)]:
        rate, estimate, lag1 = random_walk_gaussian(
            random.Random(SEED + seed_offset), transformed, step)
        print(f"Gaussian RWM ({label}, step={step}): acceptance={rate:.3f}, "
              f"mean(x1+x2)={estimate:.3f}, lag-1 correlation={lag1:.3f}")
    print("Both Gaussian chains target E[x1+x2]=0; lag-1 is not a full diagnostic.")


if __name__ == "__main__":
    main()
