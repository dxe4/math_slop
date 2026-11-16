"""Chapter 17: exact SBC, posterior predictive replication, and sensitivity.

All posterior draws here are independent analytic draws, not MCMC output.
Run with ``python examples/ch17.py``; no third-party packages are needed.
"""

import math
import random
from decimal import Decimal, localcontext
from statistics import mean, stdev


def normal_posterior(y, prior_variance=1.0):
    """N(0, prior_variance) prior, iid N(theta, 1) observations."""
    precision = 1.0 / prior_variance + len(y)
    variance = 1.0 / precision
    mean = variance * sum(y)
    return mean, variance


def normal_log_likelihood(y, theta):
    # Constants cancel in the comparisons used below.
    return -0.5 * sum((value - theta) ** 2 for value in y)


def rank_of_truth(truth, draws):
    return sum(value < truth for value in draws)


def binned_ranks(ranks, draw_count, bins=10):
    assert (draw_count + 1) % bins == 0
    width = (draw_count + 1) // bins
    counts = [0] * bins
    for rank in ranks:
        counts[rank // width] += 1
    return counts


def normal_sbc(experiments=1000, draws_per_fit=99):
    parameters = random.Random(1701)
    observations = random.Random(1703)
    fitter = random.Random(1702)
    ranks = {"correct": [], "too_narrow": [], "prior_only": [],
             "prior_only_log_likelihood": []}
    for _ in range(experiments):
        truth = parameters.gauss(0.0, 1.0)
        data = [observations.gauss(truth, 1.0) for _ in range(4)]
        mean, variance = normal_posterior(data)
        exact = [fitter.gauss(mean, math.sqrt(variance))
                 for _ in range(draws_per_fit)]
        narrow = [fitter.gauss(mean, math.sqrt(variance / 4.0))
                  for _ in range(draws_per_fit)]
        prior = [fitter.gauss(0.0, 1.0) for _ in range(draws_per_fit)]
        ranks["correct"].append(rank_of_truth(truth, exact))
        ranks["too_narrow"].append(rank_of_truth(truth, narrow))
        ranks["prior_only"].append(rank_of_truth(truth, prior))
        ranks["prior_only_log_likelihood"].append(rank_of_truth(
            normal_log_likelihood(data, truth),
            [normal_log_likelihood(data, value) for value in prior]))
    print(f"Normal SBC: B={experiments}, L={draws_per_fit}; "
          f"expected {experiments / 10:g} per bin")
    for name, values in ranks.items():
        print(f"  {name:26s} {binned_ranks(values, draws_per_fit)}")


def poisson_small(rng, rate):
    """Knuth's Poisson generator, suitable for these small rates only."""
    if not math.isfinite(rate) or rate < 0:
        raise ValueError("Poisson rate must be finite and nonnegative")
    if rate == 0:
        return 0
    cutoff = math.exp(-rate)
    if cutoff == 0:
        raise ValueError("rate is too large for this teaching Poisson generator")
    product = 1.0
    count = 0
    while True:
        product *= rng.random()
        if product <= cutoff:
            return count
        count += 1


def exact_zero_tail() -> float:
    """P(at least 5 zeros among 10 replicas), mixing over Gamma(52, 11)."""
    # Alternating binomial sums can lose digits; this small exact-formula
    # calculation uses 50-digit arithmetic before returning a float.
    with localcontext() as context:
        context.prec = 50
        probability = Decimal(0)
        for k in range(5, 11):
            terms = [Decimal((-1) ** j * math.comb(10 - k, j))
                     * (Decimal(11) / Decimal(11 + k + j)) ** 52
                     for j in range(11 - k)]
            probability += math.comb(10, k) * sum(terms, Decimal(0))
    return float(probability)


def local_sensitivity() -> None:
    """Estimate the score covariance; compare two independent exact checks."""
    data = [0.0, 0.5, 1.0, 1.5]
    posterior_mean, posterior_variance = normal_posterior(data)
    exact = posterior_mean * posterior_variance  # tau squared = 1
    step = 1e-5
    plus = normal_posterior(data, math.exp(step))[0]
    minus = normal_posterior(data, math.exp(-step))[0]
    finite_difference = (plus - minus) / (2 * step)
    if not math.isclose(finite_difference, exact, abs_tol=1e-10):
        raise ArithmeticError("Normal sensitivity derivative disagrees")

    rng = random.Random(1709)
    batches, batch_size = 100, 1000
    covariances = []
    for _ in range(batches):
        values = [rng.gauss(posterior_mean, math.sqrt(posterior_variance))
                  for _ in range(batch_size)]
        scores = [(value * value - 1.0) / 2.0 for value in values]
        avg_value, avg_score = mean(values), mean(scores)
        covariances.append(math.fsum(
            (value - avg_value) * (score - avg_score)
            for value, score in zip(values, scores)) / (batch_size - 1))
    # These batches are independent; the same iid formula does not apply
    # automatically to arbitrary MCMC blocks.
    mcse = stdev(covariances) / math.sqrt(batches)
    print("\nLocal sensitivity to eta = log(prior variance)")
    print(f"  exact derivative = {exact:.6f}; "
          f"centered finite difference = {finite_difference:.6f}")
    print(f"  score covariance = {mean(covariances):.6f}; "
          f"approximate MCSE = {mcse:.6f} ({batches} independent batches)")
    for eta in (0.1, math.log(4.0)):
        actual = normal_posterior(data, math.exp(eta))[0]
        linear = posterior_mean + exact * eta
        print(f"  eta change {eta:.6f}: exact mean {actual:.6f}, "
              f"local approximation {linear:.6f}")
    centered_data = [-1.5, -0.5, 0.5, 1.5]
    plus_mean, plus_var = normal_posterior(centered_data, math.exp(step))
    minus_mean, minus_var = normal_posterior(centered_data, math.exp(-step))
    variance_derivative = (plus_var - minus_var) / (2 * step)
    if plus_mean != 0.0 or minus_mean != 0.0 or not math.isclose(
            variance_derivative, 0.04, abs_tol=1e-10):
        raise ArithmeticError("Centered normal sensitivity disagrees")
    print(f"  zero-data-mean case: mean derivative 0, "
          f"variance derivative {variance_derivative:.6f}")


def count_replication(replicates=10000):
    data = [0] * 5 + [10] * 5
    shape = 2 + sum(data)
    rate = 1 + len(data)
    rng = random.Random(1717)
    zeros = []
    variances = []
    for _ in range(replicates):
        # Python's gammavariate uses shape and SCALE, which is 1/rate.
        lam = rng.gammavariate(shape, 1.0 / rate)
        replicated = [poisson_small(rng, lam) for _ in data]
        zeros.append(sum(value == 0 for value in replicated))
        avg = sum(replicated) / len(replicated)
        variances.append(sum((value - avg) ** 2 for value in replicated)
                         / (len(replicated) - 1))
    observed_variance = 250.0 / 9.0
    print("\nPoisson–Gamma count example")
    print(f"  posterior mean lambda = {shape / rate:.6f}")
    print(f"  exact expected zero fraction = {(rate / (rate + 1)) ** shape:.6f}")
    probability = exact_zero_tail()
    print(f"  exact P(zeros >= 5) = {probability:.9g}; "
          f"P(no exceedances in {replicates} replicas) = "
          f"{math.exp(replicates * math.log1p(-probability)):.6f}")
    print(f"  observed zeros = 5/10; replicated zeros >= 5: "
          f"{sum(value >= 5 for value in zeros)}/{replicates}")
    print(f"  observed sample variance = {observed_variance:.3f}; "
          f"replicated variance >= observed: "
          f"{sum(value >= observed_variance for value in variances)}/{replicates}")


if __name__ == "__main__":
    normal_sbc()
    count_replication()
    local_sensitivity()
