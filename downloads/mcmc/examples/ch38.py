"""Chapter 38: a collapsed Gaussian-mixture Gibbs sampler with an exact check.

Run: python examples/ch38.py
Only the Python standard library is required.
"""

import itertools
import math
import random


DATA = (-2.4, -1.5, -1.1, 1.0, 1.7, 2.2)
ALPHA = (1.0, 1.0)
PRIOR_MEAN = 0.0
PRIOR_VAR = 4.0
OBS_VAR = 1.0
SEED = 38001


def normal_pdf(x, mean, variance):
    return math.exp(-0.5 * (x - mean) ** 2 / variance) / math.sqrt(
        2.0 * math.pi * variance
    )


def posterior_mean_parameters(values):
    precision = 1.0 / PRIOR_VAR + len(values) / OBS_VAR
    variance = 1.0 / precision
    mean = variance * (PRIOR_MEAN / PRIOR_VAR + sum(values) / OBS_VAR)
    return mean, variance


def summaries(allocation, alpha=ALPHA):
    """Rao-Blackwellized predictive density and a label-invariant pair event."""
    n = len(allocation)
    predictive_at_zero = 0.0
    mixture_mean = 0.0
    for k in range(2):
        values = [DATA[i] for i in range(n) if allocation[i] == k]
        mean, variance = posterior_mean_parameters(values)
        expected_weight = (alpha[k] + len(values)) / (sum(alpha) + n)
        predictive_at_zero += expected_weight * normal_pdf(
            0.0, mean, OBS_VAR + variance
        )
        mixture_mean += expected_weight * mean
    return (predictive_at_zero, mixture_mean, float(allocation[0] == allocation[1]))


def collapsed_sweep(allocation, rng, alpha=ALPHA):
    """Remove i before computing either candidate's collapsed probability."""
    for i, value in enumerate(DATA):
        log_scores = []
        for k in range(2):
            others = [
                DATA[j]
                for j in range(len(DATA))
                if j != i and allocation[j] == k
            ]
            mean, variance = posterior_mean_parameters(others)
            predictive_variance = OBS_VAR + variance
            log_scores.append(
                math.log(alpha[k] + len(others))
                - 0.5 * math.log(2.0 * math.pi * predictive_variance)
                - 0.5 * (value - mean) ** 2 / predictive_variance
            )
        shift = max(log_scores)
        weights = [math.exp(score - shift) for score in log_scores]
        allocation[i] = 0 if rng.random() < weights[0] / sum(weights) else 1


def log_integrated_probability(allocation, alpha=ALPHA):
    """Log p(z,y), with weights and component means integrated out."""
    n = len(DATA)
    total = math.lgamma(sum(alpha)) - math.lgamma(sum(alpha) + n)
    for k in range(2):
        values = [DATA[i] for i in range(n) if allocation[i] == k]
        count = len(values)
        mean, variance = posterior_mean_parameters(values)
        total += math.lgamma(alpha[k] + count) - math.lgamma(alpha[k])
        total += -0.5 * count * math.log(2.0 * math.pi * OBS_VAR)
        total += 0.5 * math.log(variance / PRIOR_VAR)
        total += -0.5 * (
            sum(value * value for value in values) / OBS_VAR
            + PRIOR_MEAN * PRIOR_MEAN / PRIOR_VAR
            - mean * mean / variance
        )
    return total


def exact_distribution(alpha=ALPHA):
    states = list(itertools.product(range(2), repeat=len(DATA)))
    log_weights = [log_integrated_probability(state, alpha) for state in states]
    shift = max(log_weights)
    weights = [math.exp(value - shift) for value in log_weights]
    denominator = sum(weights)
    return [(state, weight / denominator) for state, weight in zip(states, weights)]


def exact_summaries(alpha=ALPHA):
    distribution = exact_distribution(alpha)
    return tuple(
        sum(probability * summaries(state, alpha)[j] for state, probability in distribution)
        for j in range(3)
    )


def occupancy_sensitivity():
    """Compare occupied groups under three weight priors, with fixed K=2."""
    rows = []
    for a in (0.05, 1.0, 10.0):
        alpha = (a, a)
        # Pr(all n labels agree) = 2 E[w_1**n] for n >= 1.
        prior_one = 2.0 * math.prod(
            (a + j) / (2.0 * a + j) for j in range(len(DATA))
        )
        posterior_one = sum(
            probability for state, probability in exact_distribution(alpha)
            if len(set(state)) == 1
        )
        rows.append((a, prior_one, posterior_one, exact_summaries(alpha)[0]))
    return rows


def check_integrated_probability():
    """Independent covariance calculation for every allocation and prior choice.

    Each group's marginal covariance is OBS_VAR I + PRIOR_VAR 11^T.
    The determinant lemma and rank-one inverse give the density below,
    without using the posterior-mean completing-square calculation.
    """
    largest_error = 0.0
    for a in (0.05, 1.0, 10.0):
        alpha = (a, a)
        for state in itertools.product(range(2), repeat=len(DATA)):
            counts = [state.count(k) for k in range(2)]
            # Sequential Polya-urn product for the allocation prior.
            remaining = [0, 0]
            log_prior = 0.0
            for i, label in enumerate(state):
                log_prior += math.log((a + remaining[label]) / (2.0 * a + i))
                remaining[label] += 1
            independent = log_prior
            for k, count in enumerate(counts):
                centered = [DATA[i] - PRIOR_MEAN for i in range(len(DATA))
                            if state[i] == k]
                log_determinant = count * math.log(OBS_VAR) + math.log1p(
                    count * PRIOR_VAR / OBS_VAR
                )
                quadratic = sum(x*x for x in centered) / OBS_VAR
                quadratic -= PRIOR_VAR * sum(centered)**2 / (
                    OBS_VAR * (OBS_VAR + count * PRIOR_VAR)
                )
                independent -= 0.5 * (
                    count * math.log(2.0 * math.pi) + log_determinant + quadratic
                )
            largest_error = max(
                largest_error, abs(independent - log_integrated_probability(state, alpha))
            )
    assert largest_error < 1e-11, largest_error
    return largest_error


def sampled_summaries():
    """Equal-length chains, with MCSE from batches that stay within a chain.

    Batch means are an asymptotic teaching estimate, not a convergence test.
    """
    chain_means = []
    chain_variances = []
    batch_size = 200
    starts = ([0, 0, 0, 1, 1, 1], [0]*6, [1]*6, [0, 1, 0, 1, 0, 1])
    for chain, start in enumerate(starts):
        rng = random.Random(SEED + chain)
        allocation = list(start)
        draws = []
        for sweep in range(12000):
            collapsed_sweep(allocation, rng)
            if sweep >= 2000:
                draws.append(summaries(allocation))
        averages = tuple(sum(row[j] for row in draws) / len(draws) for j in range(3))
        batches = [tuple(sum(row[j] for row in draws[i:i+batch_size]) / batch_size
                         for j in range(3))
                   for i in range(0, len(draws), batch_size)]
        variances = tuple(
            sum((batch[j] - averages[j])**2 for batch in batches)
            / (len(batches) * (len(batches) - 1)) for j in range(3)
        )
        chain_means.append(averages)
        chain_variances.append(variances)
    estimates = tuple(sum(row[j] for row in chain_means) / len(starts) for j in range(3))
    errors = tuple(math.sqrt(sum(row[j] for row in chain_variances)) / len(starts)
                   for j in range(3))
    return estimates, errors


def main():
    names = ("predictive density at 0", "mixture mean", "Pr(z1=z2)")
    exact = exact_summaries()
    sampled, errors = sampled_summaries()
    print(f"Known variance mixture, n={len(DATA)}, K=2, seed={SEED}")
    print("Exact enumeration integrates all 2^6 allocations.")
    print(f"Independent covariance-form log-joint check: {check_integrated_probability():.2e}")
    for name, truth, estimate, error in zip(names, exact, sampled, errors):
        print(f"{name:25s} exact={truth:.5f}  Gibbs={estimate:.5f}  batch MCSE≈{error:.5f}")
    print("Weight-prior sensitivity: K stays fixed at 2; T counts occupied groups")
    for a, prior_one, posterior_one, predictive in occupancy_sensitivity():
        print(f"a={a:5.2f}: Pr(T=1) prior={prior_one:.5f} "
              f"posterior={posterior_one:.5f}; predictive(0)={predictive:.5f}")
    posterior_var = 4.0 / 13.0
    posterior_mean = 24.0 / 13.0
    completed_mean = (6.0 + 2.0 * posterior_mean) / 5.0
    print("Missing-normal benchmark: mu | observed ~ N(24/13, 4/13)")
    print(
        f"E[mu|observed]={posterior_mean:.5f}, "
        f"Var(missing_j|observed)={1.0 + posterior_var:.5f}, "
        f"Cov(missing_1,missing_2|observed)={posterior_var:.5f}"
    )
    for delta in (-1.0, 0.0, 1.0):
        print(f"stipulated delta={delta:+.0f}: E[completed mean]={completed_mean + 2*delta/5:.5f}")


if __name__ == "__main__":
    main()
