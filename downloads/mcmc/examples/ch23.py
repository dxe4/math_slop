"""Geometry audits and geodesic HMC on S^2 with an area density.

Standard library only. The implicit iterations below are a diagnostic
counterexample, not an RMHMC sampler. The sphere sampler targets
exp(kappa*x[2]) per unit area and needs no nonlinear constraint solver.
"""

import math
import random
import statistics


def dot(a, b):
    return sum(ai * bi for ai, bi in zip(a, b))


def kick(x, v, time, kappa):
    return tuple(
        vi + time * kappa * ((1.0 if i == 2 else 0.0) - x[2] * xi)
        for i, (xi, vi) in enumerate(zip(x, v))
    )


def geodesic(x, v, time):
    speed = math.sqrt(dot(v, v))
    if speed == 0.0:
        return x, v
    cosine = math.cos(speed * time)
    sine = math.sin(speed * time)
    return (
        tuple(xi * cosine + vi * sine / speed for xi, vi in zip(x, v)),
        tuple(-speed * xi * sine + vi * cosine for xi, vi in zip(x, v)),
    )


def trajectory(x, v, step_size, steps, kappa):
    max_norm_error = 0.0
    max_tangent_error = 0.0
    for _ in range(steps):
        v = kick(x, v, step_size / 2.0, kappa)
        x, v = geodesic(x, v, step_size)
        v = kick(x, v, step_size / 2.0, kappa)
        max_norm_error = max(max_norm_error, abs(dot(x, x) - 1.0))
        max_tangent_error = max(max_tangent_error, abs(dot(x, v)))
    return x, v, max_norm_error, max_tangent_error


def energy(x, v, kappa):
    return -kappa * x[2] + dot(v, v) / 2.0


def _scalar_energy(x: float, p: float) -> float:
    g = 1.0 + x * x
    return (x * x + math.log(g) + p * p / g) / 2.0


def _scalar_hx(x: float, p: float) -> float:
    g = 1.0 + x * x
    return x + x / g - x * p * p / (g * g)


def _scalar_hp(x: float, p: float) -> float:
    return p / (1.0 + x * x)


def _truncated_step(
    x: float, p: float, h: float, iterations: int
) -> tuple[float, float]:
    """Use fixed iteration counts to expose loss of exact map properties."""
    half_p = p
    for _ in range(iterations):
        half_p = p - h * _scalar_hx(x, half_p) / 2.0
    next_x = x
    for _ in range(iterations):
        next_x = x + h * (_scalar_hp(x, half_p) + _scalar_hp(next_x, half_p)) / 2.0
    return next_x, half_p - h * _scalar_hx(next_x, half_p) / 2.0


def audit_implicit_step() -> None:
    """Compare reversals and a numerical Jacobian; check a missing-root case."""
    difference_step = 1e-5
    for x, p in ((1.0, 2.0), (-0.5, 1.7), (0.0, -0.3)):
        numerical_hx = (
            _scalar_energy(x + difference_step, p)
            - _scalar_energy(x - difference_step, p)
        ) / (2.0 * difference_step)
        numerical_hp = (
            _scalar_energy(x, p + difference_step)
            - _scalar_energy(x, p - difference_step)
        ) / (2.0 * difference_step)
        assert abs(numerical_hx - _scalar_hx(x, p)) < 1e-8
        assert abs(numerical_hp - _scalar_hp(x, p)) < 1e-8
    h = 0.2
    discriminant = 1.0 - h * (11.0 - 3.0 * h / 4.0) / 2.0
    assert discriminant < 0.0
    print(f"implicit momentum at x=1, p=11, h=0.2: discriminant {discriminant:.6f}")
    for iterations in (1, 4, 12):
        x1, p1 = _truncated_step(1.0, 2.0, h, iterations)
        back_x, back_p = _truncated_step(x1, -p1, h, iterations)
        residual = max(abs(back_x - 1.0), abs(back_p + 2.0))
        # Central finite differences diagnose local volume change, not prove it.
        x_plus = _truncated_step(1.0 + difference_step, 2.0, h, iterations)
        x_minus = _truncated_step(1.0 - difference_step, 2.0, h, iterations)
        p_plus = _truncated_step(1.0, 2.0 + difference_step, h, iterations)
        p_minus = _truncated_step(1.0, 2.0 - difference_step, h, iterations)
        dx = [(a - b) / (2.0 * difference_step) for a, b in zip(x_plus, x_minus)]
        dp = [(a - b) / (2.0 * difference_step) for a, b in zip(p_plus, p_minus)]
        determinant = dx[0] * dp[1] - dp[0] * dx[1]
        print(f"implicit updates {iterations:2d}: reverse {residual:.3e}; "
              f"finite-difference det {determinant:.9f}")
        if iterations == 1:
            assert residual > 0.03
            assert abs(determinant - 1.0) > 0.04
        elif iterations == 12:
            assert residual < 1e-11
            # Check the final kick using the independently derived
            # near-identity quadratic root for the half momentum.
            d = 1.0 - h * (2.0 - 3.0 * h / 4.0) / 2.0
            exact_half = 2.0 * (2.0 - 3.0 * h / 4.0) / (1.0 + math.sqrt(d))
            assert abs(p1 - (exact_half - h * _scalar_hx(x1, exact_half) / 2.0)) < 1e-11
    print("These truncated maps are diagnostic examples, not corrected MCMC kernels.")


def audit_circle_conditioning() -> None:
    """Compare coarea angular quadrature with independently summed series."""
    i0 = term0 = 1.0
    i1 = term1 = 0.5
    for k in range(1, 30):
        term0 *= 0.25 / (k * k)
        term1 *= 0.25 / (k * (k + 1))
        i0 += term0
        i1 += term1
    # Integrating exp(-cos(theta)) gives 2*pi*I0(1); its cos moment is -I1/I0.
    series_normalizer = 2.0 * math.pi * i0
    series_mean = -i1 / i0
    for points in (256, 512):
        cosines = [math.cos(2.0 * math.pi * (i + 0.5) / points) for i in range(points)]
        weights = [math.exp(-c) for c in cosines]
        total = math.fsum(weights)
        normalizer = 2.0 * math.pi * total / points
        mean = math.fsum(c * w for c, w in zip(cosines, weights)) / total
        surface_weights = [w * (2.0 * math.exp(c)) for c, w in zip(cosines, weights)]
        surface_mean = math.fsum(c * w for c, w in zip(cosines, surface_weights)) / math.fsum(surface_weights)
        assert abs(normalizer - series_normalizer) < 1e-12
        assert abs(mean - series_mean) < 1e-12
        assert abs(surface_mean) < 1e-14
    print(f"circle coarea: Z={normalizer:.6f}; mean x_1={mean:.6f}; "
          f"area-reweighted mean={surface_mean:.3e}")


def audit_geodesic_and_reflection() -> None:
    """Check exact-flow identities, the worked step, and nonidentity mass."""
    x, v = (1.0, 0.0, 0.0), (0.0, 1.0, 0.0)
    for duration in (-0.7, 0.0, 2.0):
        gx, gv = geodesic(x, v, duration)
        assert abs(dot(gx, gx) - 1.0) < 1e-14
        assert abs(dot(gx, gv)) < 1e-14
        assert abs(dot(gv, gv) - dot(v, v)) < 1e-14
    assert geodesic(x, (0.0, 0.0, 0.0), 0.7) == (x, (0.0, 0.0, 0.0))
    kicked_v = kick(x, v, 0.1, 2.0)
    gx, gv = geodesic(x, kicked_v, 0.2)
    expected = (0.979272006752998, 0.19861621474485253, 0.039723242948970505)
    assert max(abs(a - b) for a, b in zip(gx, expected)) < 1e-14
    final_v = kick(gx, gv, 0.1, 2.0)
    print(f"sphere worked step: x={tuple(round(a, 6) for a in gx)}; "
          f"energy error={energy(gx, final_v, 2.0) - energy(x, v, 2.0):.6f}")
    # M=diag(2,1), p=(3,-1), n=(1,1): reflection is its own inverse.
    p, normal, inverse_mass = (3.0, -1.0), (1.0, 1.0), (0.5, 1.0)
    a = sum(n * m * pi for n, m, pi in zip(normal, inverse_mass, p))
    b = sum(n * m * n for n, m in zip(normal, inverse_mass))
    reflected = tuple(pi - 2.0 * n * a / b for pi, n in zip(p, normal))
    reflected_a = sum(n * m * pi for n, m, pi in zip(normal, inverse_mass, reflected))
    old_k = sum(m * pi * pi for m, pi in zip(inverse_mass, p)) / 2.0
    new_k = sum(m * pi * pi for m, pi in zip(inverse_mass, reflected)) / 2.0
    assert abs(reflected_a + a) < 1e-14
    assert abs(new_k - old_k) < 1e-14
    print("deterministic scalar-gradient, sphere, and nonidentity-mass reflection checks passed")


def main():
    audit_implicit_step()
    audit_circle_conditioning()
    audit_geodesic_and_reflection()
    rng = random.Random(23023)
    kappa = 2.0
    step_size = 0.18
    warmup = 1000
    retained = 12000
    x = (1.0, 0.0, 0.0)
    values = []
    accepted = 0
    norm_error = tangent_error = reverse_error = 0.0
    for iteration in range(warmup + retained):
        noise = tuple(rng.gauss(0.0, 1.0) for _ in range(3))
        normal_component = dot(x, noise)
        v = tuple(ni - normal_component * xi for ni, xi in zip(noise, x))
        steps = rng.choice((4, 6, 8))
        proposal, final_v, ne, te = trajectory(x, v, step_size, steps, kappa)
        norm_error = max(norm_error, ne)
        tangent_error = max(tangent_error, te)
        if iteration < 100:
            back_x, back_v, _, _ = trajectory(
                proposal, tuple(-vi for vi in final_v), step_size, steps, kappa
            )
            reverse_error = max(
                reverse_error,
                max(abs(a - b) for a, b in zip(back_x, x)),
                max(abs(a + b) for a, b in zip(back_v, v)),
            )
        # Flipping final_v gives the involutive proposal. Energy is even in v,
        # and momentum is discarded after this step, so its sign is immaterial.
        log_ratio = energy(x, v, kappa) - energy(proposal, final_v, kappa)
        did_accept = math.log(1.0 - rng.random()) < min(0.0, log_ratio) or log_ratio >= 0.0
        if did_accept:
            x = proposal
        if iteration >= warmup:
            accepted += int(did_accept)
            values.append(x[2])
    batch_size = 100
    batch_means = [
        statistics.fmean(values[i:i + batch_size])
        for i in range(0, retained, batch_size)
    ]
    mcse = statistics.stdev(batch_means) / math.sqrt(len(batch_means))
    exact = 1.0 / math.tanh(kappa) - 1.0 / kappa
    print(f"mean x_3: {statistics.fmean(values):.6f}; analytic: {exact:.6f}")
    print(f"batch-means MCSE (rough): {mcse:.6f}")
    print(f"acceptance: {accepted / retained:.4f}")
    print(f"max |x.x - 1|: {norm_error:.3e}")
    print(f"max |x.v|: {tangent_error:.3e}")
    print(f"max reverse residual (first 100): {reverse_error:.3e}")
    print("Finite-run illustration; residual checks do not prove convergence.")


if __name__ == "__main__":
    main()
