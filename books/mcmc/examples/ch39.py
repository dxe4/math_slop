"""Scalar Kalman filtering and independent FFBS draws at fixed parameters.

Run with ``python examples/ch39.py``. Only the Python standard library is used.
"""

import math
import random


def filter_series(y, phi, q, r, m0, c0):
    """Return predicted and filtered moments for x_0,...,x_T.

    y contains y_1,...,y_T, with None for ignorable missing readings.
    The x_0 prior is independent of q and r; missing times remain in the path.
    """
    if q <= 0 or r <= 0 or c0 <= 0:
        raise ValueError("q, r, and c0 must be positive")
    a, predicted_var = [m0], [c0]
    m, filtered_var = [m0], [c0]
    log_likelihood = 0.0
    for observation in y:
        next_a = phi * m[-1]
        next_r = phi * phi * filtered_var[-1] + q
        a.append(next_a)
        predicted_var.append(next_r)
        if observation is None:
            m.append(next_a)
            filtered_var.append(next_r)
            continue
        s = next_r + r
        innovation = observation - next_a
        gain = next_r / s
        m.append(next_a + gain * innovation)
        # Scalar form of the Joseph update; nonnegative in exact arithmetic.
        filtered_var.append((1.0 - gain) ** 2 * next_r + gain * gain * r)
        log_likelihood -= 0.5 * (math.log(2.0 * math.pi * s) + innovation ** 2 / s)
    return a, predicted_var, m, filtered_var, log_likelihood


def ffbs(a, predicted_var, m, filtered_var, phi, q, rng):
    """One joint smoothing draw, including x_0, using the filter's phi and q."""
    t_max = len(m) - 1
    x = [0.0] * (t_max + 1)
    x[t_max] = rng.gauss(m[t_max], math.sqrt(filtered_var[t_max]))
    for t in range(t_max - 1, -1, -1):
        j = filtered_var[t] * phi / predicted_var[t + 1]
        mean = m[t] + j * (x[t + 1] - a[t + 1])
        # C - C**2 * phi**2 / R = C * q / R: avoid cancellation for small q.
        variance = filtered_var[t] * (q / predicted_var[t + 1])
        if not math.isfinite(variance) or variance <= 0:
            raise ArithmeticError("backward variance is not finite and positive")
        x[t] = rng.gauss(mean, math.sqrt(variance))
    return x


def empirical_moments(values):
    mean = sum(values) / len(values)
    variance = sum((value - mean) ** 2 for value in values) / len(values)
    return mean, variance


def main():
    # An exact, hand-checkable two-observation case.
    a, p, m, c, _ = filter_series([1.0, 0.0], 1.0, 1.0, 1.0, 0.0, 1.0)
    assert math.isclose(m[1], 2.0 / 3.0)
    assert math.isclose(c[1], 2.0 / 3.0)
    assert math.isclose(m[2], 1.0 / 4.0)
    assert math.isclose(c[2], 5.0 / 8.0)
    j1 = c[1] / p[2]
    assert math.isclose(c[1] - j1 * j1 * p[2], 2.0 / 5.0)

    check_rng = random.Random(3902)
    check_paths = [ffbs(a, p, m, c, 1.0, 1.0, check_rng) for _ in range(12000)]
    first_mean, first_var = empirical_moments([path[1] for path in check_paths])
    second_mean, _ = empirical_moments([path[2] for path in check_paths])
    covariance = sum(
        (path[1] - first_mean) * (path[2] - second_mean)
        for path in check_paths
    ) / len(check_paths)
    assert abs(first_mean - 0.5) < 0.03
    assert abs(first_var - 0.5) < 0.03
    assert abs(covariance - 0.25) < 0.03

    rng = random.Random(3917)
    t_max, phi, q, r = 40, 0.88, 0.25, 0.64
    x = rng.gauss(0.0, 1.0)
    observations = []
    for _ in range(t_max):
        x = phi * x + rng.gauss(0.0, math.sqrt(q))
        observations.append(x + rng.gauss(0.0, math.sqrt(r)))

    a, p, m, c, log_lik = filter_series(observations, phi, q, r, 0.0, 1.0)
    draws = [ffbs(a, p, m, c, phi, q, rng) for _ in range(12000)]
    terminal_mean, terminal_var = empirical_moments([path[-1] for path in draws])
    forecast_mean = phi * m[-1]
    forecast_var = phi * phi * c[-1] + q + r
    assert abs(terminal_mean - m[-1]) < 5 * math.sqrt(c[-1] / len(draws))
    assert abs(terminal_var - c[-1]) < 5 * c[-1] * math.sqrt(2 / len(draws))

    print(f"T={t_max}; fixed-parameter log likelihood={log_lik:.3f}")
    print(f"x_T filter: mean={m[-1]:.3f}, variance={c[-1]:.3f}")
    print(f"x_T FFBS:   mean={terminal_mean:.3f}, variance={terminal_var:.3f}")
    print(f"y_(T+1) forecast: mean={forecast_mean:.3f}, variance={forecast_var:.3f}")
    print(f"Two-report smoother: mean={first_mean:.3f}, variance={first_var:.3f}, cross-covariance={covariance:.3f}")
    print("Two-observation arithmetic: passed")

    # A missing reading consumes a transition, but adds no likelihood factor.
    a, p, m, c, log_lik = filter_series([1.0, None, 0.0], 1., 1., 1., 0., 1.)
    assert math.isclose(m[2], 2 / 3)
    assert math.isclose(c[2], 5 / 3)
    assert math.isclose(m[3], 2 / 11)
    assert math.isclose(c[3], 8 / 11)
    # Independent batch calculation: Cov(y_1,y_3)=[[3,2],[2,5]], determinant 11.
    batch_log_lik = -math.log(2 * math.pi) - 0.5 * math.log(11) - 5 / 22
    assert math.isclose(log_lik, batch_log_lik)
    gap_rng = random.Random(3903)
    gap_paths = [ffbs(a, p, m, c, 1., 1., gap_rng) for _ in range(12000)]
    gap_mean, gap_var = empirical_moments([path[2] for path in gap_paths])
    # Cov(x_2,[y_1,y_3])=[2,3] gives mean 4/11, variance 10/11.
    assert abs(gap_mean - 4 / 11) < 5 * math.sqrt((10 / 11) / len(gap_paths))
    assert abs(gap_var - 10 / 11) < 5 * (10 / 11) * math.sqrt(2 / len(gap_paths))
    assert math.isclose(c[3] + 2, 30 / 11)
    print(f"Missing y_2: smoother mean={gap_mean:.3f} (4/11), "
          f"variance={gap_var:.3f} (10/11); observed log likelihood={log_lik:.6f}")

    # With no observations, all transitions remain and the likelihood is one.
    _, _, prior_m, prior_c, no_data_log_lik = filter_series(
        [None, None], 1., 1., 1., 0., 1.)
    assert prior_m == [0., 0., 0.] and prior_c == [1., 2., 3.]
    assert no_data_log_lik == 0.

    # Small process noise exposes the cancellation in the old subtraction.
    tiny_q = 1e-18
    a, p, m, c, _ = filter_series([None], 1., tiny_q, 1., 0., 1.)
    tiny_rng = random.Random(3904)
    tiny_paths = [ffbs(a, p, m, c, 1., tiny_q, tiny_rng) for _ in range(12000)]
    _, scaled_increment_var = empirical_moments(
        [(path[1] - path[0]) / math.sqrt(tiny_q) for path in tiny_paths])
    assert abs(scaled_increment_var - 1.) < 0.05
    print(f"Small-q increment variance / q={scaled_increment_var:.3f} (target 1)")

    # An illustrative two-component posterior predictive mixture, not a fitted chain.
    # Components (phi, x_T, q, r) have equal posterior weight.
    components = [(0.5, -2., 0.25, 0.75), (0.25, 4., 0.25, 0.75)]
    means = [phi * state for phi, state, _, _ in components]
    mixture_mean, between_variance = empirical_moments(means)
    within_variance = sum(q + r for _, _, q, r in components) / len(components)
    assert mixture_mean == 0. and within_variance + between_variance == 2.
    plugin_mean = (sum(row[0] for row in components) / 2
                   * sum(row[1] for row in components) / 2)
    assert plugin_mean == 3 / 8
    print("Forecast mixture: mean=0, variance=2; plug-in mean=3/8, variance=1")


if __name__ == "__main__":
    main()
