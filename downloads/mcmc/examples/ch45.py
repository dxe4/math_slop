"""Chapter 45: symmetry, exact exchange, and finite-inner-chain bias.

The model is deliberately enumerable. Auxiliary draws are exact Bernoulli
draws, while the grid integral is only a numerical reference calculation.
"""

import math
import random


def two_spin_configuration(theta, rng):
    """Draw both spins exactly from exp(theta*z1*z2)/Z(theta)."""
    # P(z1*z2=1)=1/(1+exp(-2*theta)); this branch is stable on [-2, 2].
    p_aligned = 1.0 / (1.0 + math.exp(-2.0 * theta))
    statistic = 1 if rng.random() < p_aligned else -1
    first_spin = 1 if rng.random() < 0.5 else -1
    return first_spin, statistic * first_spin


def exchange_chain(seed=4501, iterations=140_000, burn=20_000, width=0.7):
    """Uniform-prior, symmetric-proposal exchange chain for s(y)=1."""
    rng = random.Random(seed)
    theta = 0.0
    kept = []
    accepted = 0
    for step in range(iterations):
        proposed = theta + rng.uniform(-width, width)
        if -2.0 <= proposed <= 2.0:
            z1, z2 = two_spin_configuration(proposed, rng)
            z_stat = z1 * z2
            log_ratio = (proposed - theta) * (1 - z_stat)
            if rng.random() < math.exp(min(0.0, log_ratio)):
                theta = proposed
                accepted += 1
        # Out-of-support proposals are ordinary rejections, preserving symmetry.
        if step >= burn:
            kept.append(theta)
    return kept, accepted / iterations


def grid_moments(n=20_000):
    """Midpoint-rule reference; Z(theta)=4 cosh(theta)."""
    weights = []
    points = []
    for k in range(n):
        theta = -2.0 + (k + 0.5) * 4.0 / n
        points.append(theta)
        weights.append(math.exp(theta) / (4.0 * math.cosh(theta)))
    total = sum(weights)
    return (sum(x * w for x, w in zip(points, weights)) / total,
            sum(x * x * w for x, w in zip(points, weights)) / total)


def batch_mcse(values, batch_size=1_000):
    """Batch-means teaching estimate of MCSE, assuming large enough batches."""
    batches = [sum(values[k:k + batch_size]) / batch_size
               for k in range(0, len(values), batch_size)
               if len(values[k:k + batch_size]) == batch_size]
    center = sum(batches) / len(batches)
    variance = sum((v - center) ** 2 for v in batches) / (len(batches) - 1)
    return math.sqrt(variance / len(batches)), len(batches)


SPINS = ((1, 1), (1, -1), (-1, 1), (-1, -1))


def configuration_probabilities(theta: float) -> list[float]:
    """Enumerate the normalized four-state two-spin model."""
    weights = [math.exp(theta * z1 * z2) for z1, z2 in SPINS]
    total = sum(weights)
    return [weight / total for weight in weights]


def inner_distribution(theta: float, steps: int) -> list[float]:
    """Propagate delta_(1,1) through the explicit lazy refresh matrix."""
    if not isinstance(steps, int) or steps < 0:
        raise ValueError("steps must be a nonnegative integer")
    model = configuration_probabilities(theta)
    kernel = [[0.5 * (i == j) + 0.5 * model[j] for j in range(4)]
              for i in range(4)]
    law = [1.0, 0.0, 0.0, 0.0]
    for _ in range(steps):
        law = [sum(law[i] * kernel[i][j] for i in range(4))
               for j in range(4)]
    return law


def average_acceptance(theta: float, proposed: float,
                       auxiliary_law: list[float]) -> float:
    """Uniform prior and symmetric proposal; observed statistic is +1."""
    return sum(prob * min(1.0, math.exp((proposed - theta) * (1 - z1*z2)))
               for prob, (z1, z2) in zip(auxiliary_law, SPINS))


def finite_inner_bias() -> None:
    """Exact matrix calculations, not a simulation or an estimated MCSE."""
    likelihoods = [configuration_probabilities(theta)[0] for theta in (0, 1)]
    target = likelihoods[1] / sum(likelihoods)
    print(f"Discrete-prior exact posterior P(theta=1|y)={target:.6f}")
    for steps in (0, 1, 2, 5, 10):
        up = 0.5 * average_acceptance(0, 1, inner_distribution(1, steps))
        down = 0.5 * average_acceptance(1, 0, inner_distribution(0, steps))
        stationary = up / (up + down)
        closed_form = 1 / (2 - (1 - 2**(-steps)) * (1 - math.exp(-2)) / 2)
        assert abs(stationary - closed_form) < 1e-14
        assert abs((1 - stationary) * up - stationary * down) < 1e-14
        print(f"  inner k={steps:2}: stationary P(theta=1)={stationary:.6f}; "
              f"target bias={stationary - target:+.6f}")
    up = average_acceptance(0, 1, configuration_probabilities(1))
    down = average_acceptance(1, 0, configuration_probabilities(0))
    assert abs(up / (up + down) - target) < 1e-14
    law = inner_distribution(1, 1)
    short_score = 1 - sum(prob*z1*z2 for prob, (z1, z2) in zip(law, SPINS))
    exact_score = 1 - math.tanh(1)
    assert abs(short_score - exact_score / 2) < 1e-14
    print(f"One-step negative-phase expected score={short_score:.6f}; "
          f"likelihood score={exact_score:.6f}")


def exchange_balance_error() -> float:
    """Check all augmented flows for an asymmetric four-value proposal."""
    parameters = (-1.0, 0.0, 0.5, 1.5)
    # Independence proposal q(j|i)=q[j]; all directions have positive support.
    proposal = (0.1, 0.2, 0.3, 0.4)
    models = [configuration_probabilities(theta) for theta in parameters]
    weights = [model[0] for model in models]  # Uniform parameter prior.
    posterior = [weight / sum(weights) for weight in weights]
    error = 0.0
    for i, theta in enumerate(parameters):
        for j, proposed in enumerate(parameters):
            for k, (z1, z2) in enumerate(SPINS):
                forward = posterior[i] * proposal[j] * models[j][k]
                backward = posterior[j] * proposal[i] * models[i][k]
                ratio = (math.exp((proposed - theta) * (1 - z1*z2))
                         * proposal[i] / proposal[j])
                error = max(error, abs(forward * min(1, ratio)
                                       - backward * min(1, 1 / ratio)))
    return error


def main():
    f1 = math.tanh(2.0 * 0.5)
    f2 = (-1.0) * math.tanh((-2.0) * 0.5)
    print(f"BNN symmetry: f_(1,2)(0.5)={f1:.6f}; "
          f"f_(-1,-2)(0.5)={f2:.6f}; f_average_weights(0.5)=0")
    exact_mean, exact_second = grid_moments()
    samples, acceptance = exchange_chain()
    mean = sum(samples) / len(samples)
    second = sum(x*x for x in samples) / len(samples)
    mcse, batches = batch_mcse(samples)
    print(f"Two-spin grid posterior: mean={exact_mean:.5f}, E[theta^2]={exact_second:.5f}")
    print(f"Exchange chain: mean={mean:.5f}, E[theta^2]={second:.5f}, "
          f"acceptance={acceptance:.3f}")
    print(f"Teaching batch MCSE for mean={mcse:.5f} ({batches} batches); "
          "does not assess mode coverage or burn-in")
    balance_error = exchange_balance_error()
    assert balance_error < 1e-14
    print(f"Asymmetric-proposal augmented balance maximum error={balance_error:.2e}")
    finite_inner_bias()


if __name__ == "__main__":
    main()
