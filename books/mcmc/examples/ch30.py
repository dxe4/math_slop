"""Seeded reversible-jump examples with analytic model-mass checks.

Run: python examples/ch30.py
Standard library only. Batch-means errors are teaching estimates.
"""
import math
import random
import statistics


def log_normal(x, mean=0.0, variance=1.0):
    return -0.5 * (math.log(2.0 * math.pi * variance) + (x - mean) ** 2 / variance)


def indicator_summary(values, batch_size=500):
    if batch_size < 1 or len(values) < 2 * batch_size:
        raise ValueError("MCSE needs at least two nonempty batches")
    if len(values) % batch_size:
        raise ValueError("Use complete batches so occupancy and MCSE summarize the same draws")
    batches = len(values) // batch_size
    means = [statistics.fmean(values[i * batch_size:(i + 1) * batch_size])
             for i in range(batches)]
    return statistics.fmean(values), math.sqrt(statistics.variance(means) / batches)


def accepted(rng, log_ratio):
    return math.log(1.0 - rng.random()) < min(0.0, log_ratio)


def spike_log_target(model, theta):
    if model == 0:
        return math.log(0.5) + log_normal(2.0)
    return math.log(0.5) + log_normal(theta, variance=4.0) + log_normal(2.0, theta)


def spike_birth_ratio(theta, proposal_mean, proposal_variance):
    # Equal jump-selection probabilities cancel; identity birth map has J = 1.
    return (spike_log_target(1, theta) - spike_log_target(0, None)
            - log_normal(theta, proposal_mean, proposal_variance))


def spike_run(proposal_mean, proposal_variance, seed, draws=100_000, warmup=2_000):
    rng = random.Random(seed)
    model, theta = 0, None
    values = []
    attempts = switches = 0
    for iteration in range(warmup + draws):
        # 0.1 identity; 0.4 conditional refresh; 0.5 jump, in either model.
        move = rng.random()
        if 0.1 <= move < 0.5 and model == 1:
            theta = rng.gauss(1.6, math.sqrt(0.8))
        elif move >= 0.5:
            proposal = rng.gauss(proposal_mean, math.sqrt(proposal_variance)) if model == 0 else theta
            forward = spike_birth_ratio(proposal, proposal_mean, proposal_variance)
            log_ratio = forward if model == 0 else -forward
            did_switch = accepted(rng, log_ratio)
            if did_switch:
                model = 1 - model
                theta = proposal if model else None
            if iteration >= warmup:
                attempts += 1
                switches += int(did_switch)
        if iteration >= warmup:
            values.append(model)
    return (*indicator_summary(values), attempts, switches)


def split(x, u):
    return x + u, x - u


def merge(a, b):
    return (a + b) / 2.0, (a - b) / 2.0


def gaussian_hmc_involution(q: float, p: float) -> tuple[float, float]:
    """One leapfrog step at epsilon = 1/2 for H=(q*q+p*p)/2, then flip."""
    p -= 0.25 * q
    q += 0.5 * p
    p -= 0.25 * q
    return q, -p


def spike_indicator_reference(draws: int = 100_000) -> tuple[float, float, float]:
    """Exact stationary occupancy, lag-one correlation, and mean's SD."""
    if draws < 1:
        raise ValueError("draws must be positive")
    bf = math.exp(-0.5 * math.log(5.0) + 1.6)
    probability = bf / (1.0 + bf)
    eigenvalue = 1.0 - 0.5 - 0.5 / bf
    # Sum_{h=1}^{n-1} (n-h)*lambda**h, evaluated as geometric sums.
    weighted_sum = (draws * eigenvalue / (1.0 - eigenvalue)
                    - eigenvalue * (1.0 - eigenvalue**draws) / (1.0 - eigenvalue)**2)
    variance = probability * (1.0 - probability) / draws * (1.0 + 2.0 * weighted_sum / draws)
    return probability, eigenvalue, math.sqrt(variance)


def split_log_ratio(x, u, jacobian=True):
    a, b = split(x, u)
    return (math.log(0.6) + log_normal(a) + log_normal(b)
            - math.log(0.4) - log_normal(x) - log_normal(u)
            + (math.log(2.0) if jacobian else 0.0))


def split_run(seed, jacobian=True, draws=100_000, warmup=2_000):
    rng = random.Random(seed)
    model, coordinates = 1, (0.0,)
    indicators = []
    switches = 0
    for iteration in range(warmup + draws):
        move = rng.random()
        if 0.1 <= move < 0.5:
            coordinates = tuple(rng.gauss(0.0, 1.0) for _ in range(model))
        elif move >= 0.5:
            if model == 1:
                x, u = coordinates[0], rng.gauss(0.0, 1.0)
                candidate = split(x, u)
                log_ratio = split_log_ratio(x, u, jacobian)
            else:
                x, u = merge(*coordinates)
                candidate = (x,)
                log_ratio = -split_log_ratio(x, u, jacobian)
            if accepted(rng, log_ratio):
                model, coordinates = 3 - model, candidate
                if iteration >= warmup:
                    switches += 1
        if iteration >= warmup:
            indicators.append(int(model == 2))
    return (*indicator_summary(indicators), switches)


def audit():
    for x, u in [(1.0, 0.5), (-2.0, 3.0), (0.0, -0.1)]:
        a, b = split(x, u)
        recovered = merge(a, b)
        assert all(math.isclose(v, w, abs_tol=1e-12) for v, w in zip((x, u), recovered))
        forward = split_log_ratio(x, u)
        reverse = (math.log(0.4) + log_normal(x) + log_normal(u)
                   - math.log(0.6) - log_normal(a) - log_normal(b) - math.log(2.0))
        assert math.isclose(forward + reverse, 0.0, abs_tol=1e-12)
        assert math.isclose(forward, math.log(3.0) - 0.5 * (x*x + u*u), abs_tol=1e-12)
        # Equal accepted flows, including the change from reverse to forward volume.
        log_forward_flow = math.log(0.4) + log_normal(x) + log_normal(u)
        log_reverse_flow = math.log(0.6) + log_normal(a) + log_normal(b) + math.log(2.0)
        assert math.isclose(log_forward_flow + min(0.0, forward),
                            log_reverse_flow + min(0.0, reverse), abs_tol=1e-12)
    log_bayes_factor = -0.5 * math.log(5.0) + 1.6
    for theta in [-3.0, 0.0, 1.6, 5.0]:
        assert math.isclose(spike_birth_ratio(theta, 1.6, 0.8), log_bayes_factor, abs_tol=1e-12)
    # These maps are linear, so basis images give their full Jacobian matrices.
    for transform, expected_determinant in [(split, -2.0), (merge, -0.5),
                                           (gaussian_hmc_involution, -1.0)]:
        column1 = transform(1.0, 0.0)
        column2 = transform(0.0, 1.0)
        determinant = column1[0] * column2[1] - column1[1] * column2[0]
        assert math.isclose(determinant, expected_determinant, abs_tol=1e-12)
    for initial in [(1.0, 0.5), (-2.0, 3.0), (0.0, -0.1)]:
        destination = gaussian_hmc_involution(*initial)
        recovered = gaussian_hmc_involution(*destination)
        assert all(math.isclose(v, w, abs_tol=1e-12) for v, w in zip(initial, recovered))
    q, p = gaussian_hmc_involution(1.0, 0.5)
    assert (q, p) == (9.0 / 8.0, 1.0 / 32.0)
    delta_energy = 0.5 * (q*q + p*p - 1.0 - 0.5**2)
    assert math.isclose(delta_energy, 17.0 / 2048.0, abs_tol=1e-12)
    probability, eigenvalue, exact_sd = spike_indicator_reference(draws=37)
    bf = math.exp(log_bayes_factor)
    assert math.isclose((1.0 - probability) * 0.5, probability * 0.5 / bf)
    direct_variance = probability * (1.0 - probability) / 37 * (
        1.0 + 2.0 * sum((1.0 - lag / 37) * eigenvalue**lag for lag in range(1, 37)))
    assert math.isclose(exact_sd**2, direct_variance, rel_tol=1e-12)
    print("Involutions, determinants, paired flows, proposal ratios, and indicator variance: passed")


def main():
    audit()
    bf = math.exp(-0.5 * math.log(5.0) + 1.6)
    print(f"Spike/slab exact P(M1|y) = {bf / (1.0 + bf):.6f}")
    _, eigenvalue, exact_sd = spike_indicator_reference()
    print(f"  posterior proposal stationary reference: lag-one correlation={eigenvalue:.6f}, "
          f"SD of 100,000-draw mean={exact_sd:.8f}")
    print(f"HMC involution worked acceptance = {math.exp(-17.0 / 2048.0):.7f}")
    for name, mean, variance in [("posterior", 1.6, 0.8), ("diffuse", 0.0, 25.0)]:
        estimate, mcse, attempts, switches = spike_run(mean, variance, 3030)
        print(f"  {name:9s}: occupancy={estimate:.6f}, batch MCSE={mcse:.6f}, "
              f"switches={switches}/{attempts} jump attempts")
    for include_jacobian in [True, False]:
        estimate, mcse, switches = split_run(3031, include_jacobian)
        expected = 0.6 if include_jacobian else 0.6 / (0.8 + 0.6)
        print(f"Split J={'2' if include_jacobian else 'omitted (deliberate error)'}: "
              f"occupancy={estimate:.6f}, expected={expected:.6f}, "
              f"batch MCSE={mcse:.6f}, switches={switches}")


if __name__ == "__main__":
    main()
