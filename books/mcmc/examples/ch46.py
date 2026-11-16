"""Chapter 46: Gaussian-kernel ABC, summary checks, and exact model-choice loss.

Standard library only. Run with ``python examples/ch46.py``.
"""

import math
import random
from collections.abc import Callable, Iterator
from fractions import Fraction


SEED = 46027
OBSERVED_MEAN = 1.2
N = 25
PRIOR_VARIANCE = 4.0


def _count(value: int, name: str, minimum: int = 0) -> int:
    if isinstance(value, bool) or not isinstance(value, int) or value < minimum:
        raise ValueError(f"{name} must be an integer at least {minimum}")
    return value


def _count_data(data: tuple[int, ...]) -> tuple[int, ...]:
    if not isinstance(data, (tuple, list)) or not data:
        raise ValueError("data must be a nonempty ordered sequence of nonnegative counts")
    return tuple(_count(value, "observation") for value in data)


def ordered_compositions(size: int, total: int) -> tuple[tuple[int, ...], ...]:
    """Small exact oracle: all ordered nonnegative vectors of fixed size and sum.

    Limit enumeration to size<=6,total<=20 (at most 53,130 vectors). Analytic
    evidence formulas below are separate and do not require this enumeration.
    """
    size, total = _count(size, "size", 1), _count(total, "total")
    if size > 6 or total > 20:
        raise ValueError("the bounded composition oracle requires size<=6 and total<=20")

    def generate(remaining_size: int, remaining_total: int) -> Iterator[tuple[int, ...]]:
        if remaining_size == 1:
            yield (remaining_total,)
        else:
            for first in range(remaining_total + 1):
                for rest in generate(remaining_size - 1, remaining_total - first):
                    yield (first,) + rest

    return tuple(generate(size, total))


def count_model_evidences(data: tuple[int, ...]) -> tuple[Fraction, Fraction]:
    """Ordered-data masses under Poisson/Exp(rate1), Geom0/Uniform(0,1).

    Priors are proper; size is fixed and known. Geom0 has mass p*(1-p)**y on
    nonnegative integers. These are probability masses, not densities in y.
    """
    data = _count_data(data)
    size, total = len(data), sum(data)
    factorial_product = math.prod(math.factorial(value) for value in data)
    poisson = Fraction(math.factorial(total), (size + 1)**(total + 1) * factorial_product)
    geometric = Fraction(math.factorial(size) * math.factorial(total),
                         math.factorial(size + total + 1))
    return poisson, geometric


def sum_model_evidences(size: int, total: int) -> tuple[Fraction, Fraction]:
    """Prior-predictive masses of the sum; include all ordered allocations."""
    size, total = _count(size, "size", 1), _count(total, "total")
    return (Fraction(size**total, (size + 1)**(total + 1)),
            Fraction(size, (size + total) * (size + total + 1)))


def poisson_model_probability(
    evidences: tuple[Fraction, Fraction], prior_poisson: Fraction = Fraction(1, 2),
) -> Fraction:
    """Posterior model probability from positive masses and explicit model prior."""
    if len(evidences) != 2:
        raise ValueError("supply the Poisson and geometric evidences")
    values = (*evidences, prior_poisson)
    if any(isinstance(value, bool) or not isinstance(value, (int, Fraction)) for value in values):
        raise ValueError("evidences and model prior must be exact integers or Fractions")
    poisson, geometric = (Fraction(value) for value in evidences)
    prior_poisson = Fraction(prior_poisson)
    if poisson <= 0 or geometric <= 0 or not 0 <= prior_poisson <= 1:
        raise ValueError("evidences must be positive and model prior must lie in [0,1]")
    return prior_poisson * poisson / (prior_poisson * poisson + (1 - prior_poisson) * geometric)


def factorial_summary(data: tuple[int, ...]) -> tuple[int, int]:
    """Jointly sufficient (sum, product of factorials) for this specified model pair."""
    data = _count_data(data)
    return sum(data), math.prod(math.factorial(value) for value in data)


def joint_summary_evidences(data: tuple[int, ...]) -> tuple[Fraction, Fraction, int]:
    """Enumerate the exact T fiber, summing ordered masses under each model.

    This bounded oracle preserves full model odds because every point in the
    fiber has the same likelihood within each model. It is not a general ABC
    summary-completion procedure, and it does not introduce a finite tolerance.
    """
    data = _count_data(data)
    summary = factorial_summary(data)
    fiber = tuple(candidate for candidate in ordered_compositions(len(data), summary[0])
                  if factorial_summary(candidate) == summary)
    masses = [count_model_evidences(candidate) for candidate in fiber]
    return (sum((mass[0] for mass in masses), Fraction(0)),
            sum((mass[1] for mass in masses), Fraction(0)), len(fiber))


def count_parameter_posteriors(size: int, total: int) -> dict[str, int]:
    """Parameters of conditional Gamma/Beta laws, identical for full data and S.

    Gamma uses shape and RATE. Correct conditional parameter laws do not imply
    that conditioning on S preserves posterior probabilities of the model tag.
    """
    size, total = _count(size, "size", 1), _count(total, "total")
    return {"poisson_shape": total + 1, "poisson_rate": size + 1,
            "geometric_alpha": size + 1, "geometric_beta": total + 1}


def check_abc_model_choice() -> None:
    """Exact summary model-choice benchmark; existing Gaussian experiments stay separate."""
    print("Count model choice: proper Poisson/Exp(rate1) and Geom0/Uniform priors")
    for data, prior in (((0, 4), Fraction(1, 2)), ((2, 2), Fraction(1, 2)),
                        ((0, 1, 3), Fraction(1, 3))):
        full = count_model_evidences(data)
        summary = sum_model_evidences(len(data), sum(data))
        repaired_p, repaired_g, multiplicity = joint_summary_evidences(data)
        repaired = repaired_p, repaired_g
        compositions = ordered_compositions(len(data), sum(data))
        assert sum((count_model_evidences(y)[0] for y in compositions), Fraction(0)) == summary[0]
        assert sum((count_model_evidences(y)[1] for y in compositions), Fraction(0)) == summary[1]
        assert repaired[0] / repaired[1] == full[0] / full[1]
        assert poisson_model_probability(repaired, prior) == poisson_model_probability(full, prior)
        print(f"  y={data}; prior P(M_P)={prior}; ordered masses P={full[0]}, G={full[1]}")
        print(f"    full BF(P/G)={full[0]/full[1]}; posterior P={poisson_model_probability(full, prior)}")
        print(f"    sum-only BF(P/G)={summary[0]/summary[1]}; "
              f"posterior P={poisson_model_probability(summary, prior)}")
        print(f"    repaired T={factorial_summary(data)}: fiber={multiplicity} ordered vectors; "
              f"BF(P/G)={repaired[0]/repaired[1]}; posterior P={poisson_model_probability(repaired, prior)}")
    print("  Gamma(shape=s+1,rate=n+1) and Beta(n+1,s+1) parameter posteriors agree within models.")
    print("  Exact matching of S is already discrete conditioning; shrinking tolerance cannot restore allocation.")


def reference(epsilon: float) -> tuple[float, float]:
    observation_variance = 1.0 / N + epsilon * epsilon
    variance = 1.0 / (1.0 / PRIOR_VARIANCE + 1.0 / observation_variance)
    mean = variance * OBSERVED_MEAN / observation_variance
    return mean, variance


def abc_chain(
    epsilon: float, seed: int, steps: int = 180_000,
    burn: int = 30_000, proposal_sd: float = 0.38,
) -> tuple[float, float, float, int]:
    """Retain (theta, simulated mean) on every rejection."""
    if not math.isfinite(epsilon) or epsilon <= 0:
        raise ValueError("The chain needs a finite, positive kernel bandwidth.")
    if not math.isfinite(proposal_sd) or proposal_sd <= 0:
        raise ValueError("The proposal standard deviation must be finite and positive.")
    if not 0 <= burn < steps:
        raise ValueError("Require 0 <= burn < steps.")
    rng = random.Random(seed)
    theta = rng.gauss(0.0, math.sqrt(PRIOR_VARIANCE))
    simulated_mean = rng.gauss(theta, 1.0 / math.sqrt(N))
    current_log_kernel = -0.5 * ((simulated_mean - OBSERVED_MEAN) / epsilon) ** 2
    count = 0
    sum_theta = 0.0
    sum_theta_squared = 0.0
    accepted = 0
    simulator_calls = 1

    for iteration in range(steps):
        proposed_theta = rng.gauss(theta, proposal_sd)
        proposed_mean = rng.gauss(proposed_theta, 1.0 / math.sqrt(N))
        simulator_calls += 1
        proposed_log_kernel = -0.5 * ((proposed_mean - OBSERVED_MEAN) / epsilon) ** 2
        log_ratio = (
            -0.5 * (proposed_theta * proposed_theta - theta * theta) / PRIOR_VARIANCE
            + proposed_log_kernel - current_log_kernel
        )
        uniform = rng.random()
        if uniform == 0.0 or math.log(uniform) < min(0.0, log_ratio):
            theta = proposed_theta
            simulated_mean = proposed_mean
            current_log_kernel = proposed_log_kernel
            accepted += 1
        if iteration >= burn:
            count += 1
            sum_theta += theta
            sum_theta_squared += theta * theta

    mean = sum_theta / count
    variance = sum_theta_squared / count - mean * mean
    return mean, variance, accepted / steps, simulator_calls


def variance_skewness(n: int, replicates: int, seed: int) -> float:
    """Simulate unbiased sample variances and return empirical skewness."""
    rng = random.Random(seed)
    variances = []
    for _ in range(replicates):
        sample = [rng.gauss(0.0, 1.0) for _ in range(n)]
        mean = sum(sample) / n
        variances.append(sum((x - mean) ** 2 for x in sample) / (n - 1))
    center = sum(variances) / replicates
    m2 = sum((v - center) ** 2 for v in variances) / replicates
    m3 = sum((v - center) ** 3 for v in variances) / replicates
    return m3 / m2 ** 1.5


def normal_density(x: float, mean: float, variance: float) -> float:
    return math.exp(-0.5 * (x - mean) ** 2 / variance) / math.sqrt(
        2.0 * math.pi * variance
    )


def integrate(
    function: Callable[[float], float], left: float, right: float, panels: int = 4000,
) -> float:
    """Composite Simpson quadrature for the smooth benchmark integrands."""
    if panels <= 0 or panels % 2:
        raise ValueError("Simpson quadrature needs a positive even panel count.")
    width = (right - left) / panels
    odd = math.fsum(function(left + i * width) for i in range(1, panels, 2))
    even = math.fsum(function(left + i * width) for i in range(2, panels, 2))
    return width * (function(left) + function(right) + 4 * odd + 2 * even) / 3


def check_summary_loss() -> None:
    """Verify the folded-summary mixture independently from its likelihood."""
    mean, variance = reference(0.0)
    observation_variance = 1.0 / N

    def unnormalized(theta: float) -> float:
        folded_likelihood = normal_density(OBSERVED_MEAN, theta, observation_variance)
        folded_likelihood += normal_density(-OBSERVED_MEAN, theta, observation_variance)
        return normal_density(theta, 0.0, PRIOR_VARIANCE) * folded_likelihood

    # These limits are over 24 component standard deviations beyond either mode.
    normalizer = integrate(unnormalized, -6.0, 6.0)
    analytic_normalizer = 2 * normal_density(
        OBSERVED_MEAN, 0.0, PRIOR_VARIANCE + observation_variance
    )
    numerical_mean = integrate(lambda x: x * unnormalized(x), -6.0, 6.0) / normalizer
    numerical_second = integrate(lambda x: x * x * unnormalized(x), -6.0, 6.0) / normalizer
    positive_probability = integrate(unnormalized, 0.0, 6.0) / normalizer
    assert math.isclose(normalizer, analytic_normalizer, rel_tol=1e-10)
    assert abs(numerical_mean) < 1e-10
    assert math.isclose(numerical_second, mean * mean + variance, rel_tol=1e-10)
    assert math.isclose(positive_probability, 0.5, abs_tol=1e-10)
    print(
        f"Absolute-mean posterior: mean={numerical_mean:.6f}, "
        f"variance={numerical_second:.6f}, P(theta>0)={positive_probability:.6f}"
    )
    full_positive = 0.5 * math.erfc(-mean / math.sqrt(2 * variance))
    print(f"Full-data P(theta>0)={full_positive:.12f}")

    def cdf(x: float) -> float:
        return 0.5 * math.erfc(-x / math.sqrt(2))

    # Direct small-ball probabilities, divided by their length, approach f_A.
    theta = 1.0
    sd = math.sqrt(observation_variance)
    density = normal_density(OBSERVED_MEAN, theta, observation_variance)
    density += normal_density(-OBSERVED_MEAN, theta, observation_variance)
    errors = []
    for epsilon in (0.1, 0.01, 0.001):
        lower, upper = OBSERVED_MEAN - epsilon, OBSERVED_MEAN + epsilon
        probability = cdf((upper - theta) / sd) - cdf((lower - theta) / sd)
        probability += cdf((-lower - theta) / sd) - cdf((-upper - theta) / sd)
        error = abs(probability / (2 * epsilon) - density)
        errors.append(error)
        print(f"Folded small-ball epsilon={epsilon:.3f}: density error={error:.3g}")
    assert errors[2] < errors[1] < errors[0]


def check_plugin_bias() -> None:
    """Integrate over the random fitted mean, keeping the variance known."""
    replicates = 4
    summary_variance = 1.0 / N
    fitted_mean_variance = summary_variance / replicates
    theta = 1.0
    sd = math.sqrt(fitted_mean_variance)
    expectation = integrate(
        lambda fitted: normal_density(OBSERVED_MEAN, fitted, summary_variance)
        * normal_density(fitted, theta, fitted_mean_variance),
        theta - 12 * sd, theta + 12 * sd,
    )
    broadened_variance = summary_variance + fitted_mean_variance
    reference_density = normal_density(OBSERVED_MEAN, theta, broadened_variance)
    assert math.isclose(expectation, reference_density, rel_tol=1e-10)
    posterior_variance = 1 / (1 / PRIOR_VARIANCE + 1 / broadened_variance)
    posterior_mean = posterior_variance * OBSERVED_MEAN / broadened_variance
    print(
        f"Known-variance plug-in m={replicates}: mean={posterior_mean:.6f}, "
        f"variance={posterior_variance:.6f}, convolution error={abs(expectation-reference_density):.3g}"
    )


def main() -> None:
    exact_mean, exact_variance = reference(0.0)
    print(f"Full-data/mean posterior: mean={exact_mean:.6f}, variance={exact_variance:.6f}")
    print("epsilon  target_mean  chain_mean  target_var  chain_var  acceptance  simulator_calls")
    for i, epsilon in enumerate((0.10, 0.20, 0.50)):
        target_mean, target_variance = reference(epsilon)
        mean, variance, acceptance, calls = abc_chain(epsilon, SEED + i)
        print(
            f"{epsilon:7.2f}  {target_mean:11.6f}  {mean:10.6f}  "
            f"{target_variance:10.6f}  {variance:9.6f}  {acceptance:10.3f}  {calls:15d}"
        )
    print("Variance-summary skewness (simulation, theory):")
    for n in (5, 100):
        empirical = variance_skewness(n, 12_000, SEED + n)
        theory = math.sqrt(8.0 / (n - 1))
        print(f"n={n:3d}: {empirical:.3f}, {theory:.3f}")
    check_summary_loss()
    check_plugin_bias()
    check_abc_model_choice()


if __name__ == "__main__":
    main()
