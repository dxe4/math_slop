"""Chapter 44: paired decisions, Gaussian rare events, and fixed-level subsets.

Teaching experiment only. With these fixed levels and valid conditional MH
kernels, the subset normalizing-constant estimate is unbiased in expectation.
Replication SD measures variability, not correctness of the model or kernel.
"""
from __future__ import annotations

import math
import random
import statistics
from fractions import Fraction
from itertools import product

SEED = 440044
N_IS = 10_000
N_CRUDE = 200_000
SUBSET_N = 2_000
SUBSET_REPS = 16
SUBSET_STEPS = 8
LEVELS = (1.28155, 2.32635, 3.09023, 3.71902, 4.26489, 5.0)


def mean_mcse(values: list[float]) -> tuple[float, float]:
    return statistics.fmean(values), statistics.stdev(values) / math.sqrt(len(values))


def normal_tail(t: float) -> float:
    return 0.5 * math.erfc(t / math.sqrt(2.0))


def decision_demo(rng: random.Random) -> None:
    # Posterior Beta(2, 998), sampled independently by Python's gamma routine.
    differences = []
    for _ in range(10_000):
        a = rng.gammavariate(2.0, 1.0)
        b = rng.gammavariate(998.0, 1.0)
        theta = a / (a + b)
        differences.append(150.0 - 100_000.0 * theta)
    estimate, mcse = mean_mcse(differences)
    theory_sd = 100_000.0 * math.sqrt(2 * 998 / (1000**2 * 1001))
    print(f"Decision, reinforce minus do nothing: exact -50.00 cost units")
    print(f"  iid estimate {estimate:.2f}, iid MCSE {mcse:.2f}; exact iid SD {theory_sd:.2f}")


def selection_demo() -> None:
    """Exactly enumerate the chapter's numerical error model; no CLT needed."""
    risks = (100.0, 110.0)
    errors = (-20.0, 20.0)
    reported, selected_risks, validated = [], [], []
    for error_a, error_b in product(errors, repeat=2):
        estimates = (risks[0] + error_a, risks[1] + error_b)
        selected = min(range(2), key=estimates.__getitem__)
        reported.append(estimates[selected])
        selected_risks.append(risks[selected])
        # Independent validation error is averaged for each frozen selection.
        validated.extend(risks[selected] + error for error in errors)
    report_mean = statistics.fmean(reported)
    true_mean = statistics.fmean(selected_risks)
    validation_mean = statistics.fmean(validated)
    assert (report_mean, true_mean, validation_mean) == (92.5, 102.5, 102.5)
    shared_reports = []
    for error in errors:
        estimates = [risk + error for risk in risks]
        selected = min(range(2), key=estimates.__getitem__)
        assert selected == 0
        shared_reports.append(estimates[selected])
    assert statistics.fmean(shared_reports) == 100.0
    print("Selection, exact enumeration of independent +/-20 errors:")
    print(f"  reported {report_mean:.1f}, true selected risk {true_mean:.1f}, "
          f"independent validation {validation_mean:.1f}")
    print(f"  optimism {true_mean - report_mean:.1f}; expected regret "
          f"{true_mean - min(risks):.1f}; shared-error regret 0.0")


def analytic_checks() -> None:
    """Check elementary benchmarks used in the worked examples/exercises."""
    mean_theta = 2 / 1000
    variance_theta = 2 * 998 / (1000**2 * 1001)
    assert 150 - 100_000 * mean_theta == -50
    # Perfect and ineffective reinforcement are the limiting cases of Ex. 1.
    assert (1 - 0) * 100_000 * mean_theta == 200
    assert (1 - 1) * 100_000 * mean_theta == 0
    alpha, n = 0.05, 100_000
    zero_upper = -math.expm1(math.log(alpha) / n)
    assert math.isclose(n * math.log1p(-zero_upper), math.log(alpha))
    for levels in ((1., 2., 3., 4., 5.), LEVELS):
        previous, factors = 1.0, []
        for threshold in levels:
            current = normal_tail(threshold)
            factors.append(current / previous)
            previous = current
        assert math.isclose(math.prod(factors), normal_tail(5.0), rel_tol=1e-14)
    batch_mean, batch_mcse = mean_mcse([-7.0, -5.0, -9.0, -3.0])
    assert batch_mean == -6 and math.isclose(batch_mcse, math.sqrt(5 / 3))
    print(f"Checks: zero-failure 95% bound {zero_upper:.9g}; "
          f"paired batch MCSE {batch_mcse:.6f}; threshold products match tail")
    print(f"  conditional loss iid MCSE {100_000 * math.sqrt(variance_theta/n):.4f} "
          f"versus predictive-indicator {100_000 * math.sqrt(mean_theta*(1-mean_theta)/n):.4f} "
          f"at N={n}")


def subset_enumeration_check() -> None:
    """Verify fixed-level weighting/resampling, including extinction, exactly.

    Two particles target f=(1/2, 1/4, 1/4) on {0, 1, 2}; F1={1, 2},
    F2={2}. The identity mutation kernel is invariant but cannot improve mixing.
    """
    masses = (Fraction(1, 2), Fraction(1, 4), Fraction(1, 4))
    expectation = Fraction(0)
    survival_probability = Fraction(0)
    for population in product(range(3), repeat=2):
        probability = math.prod(masses[x] for x in population)
        survivors = [x for x in population if x > 0]
        if not survivors:
            continue  # extinct runs contribute zero, with their probability retained
        survival_probability += probability
        for descendants in product(survivors, repeat=2):
            estimate = Fraction(len(survivors), 2) * Fraction(descendants.count(2), 2)
            expectation += probability * estimate / len(survivors)**2
    conditional_mean = expectation / survival_probability
    assert expectation == Fraction(1, 4)
    assert conditional_mean == Fraction(1, 3)
    print(f"Finite subset enumeration: mean {expectation}; "
          f"discarding extinct runs gives {conditional_mean}")


def importance_demo(rng: random.Random, mu: float, n: int = N_IS) -> None:
    values = []
    failures = 0
    for _ in range(n):
        x = rng.gauss(mu, 1.0)
        if x > 5.0:
            failures += 1
            values.append(math.exp(-mu * x + 0.5 * mu * mu))
        else:
            values.append(0.0)
    estimate, mcse = mean_mcse(values)
    print(f"IS mu={mu:g}: {failures}/{n} proposal failures, p={estimate:.4e}, "
          f"iid MCSE={mcse:.2e}, relative MCSE={mcse / estimate:.1%}" if estimate else
          f"IS mu={mu:g}: zero weighted failures")


def subset_once(rng: random.Random) -> tuple[float, int, list[float]]:
    # Fixed levels. The first population has the nominal N(0,1) law.
    population = [rng.gauss(0.0, 1.0) for _ in range(SUBSET_N)]
    evaluations = SUBSET_N
    product = 1.0
    factors = []
    for level_index, threshold in enumerate(LEVELS):
        survivors = [x for x in population if x > threshold]
        factor = len(survivors) / SUBSET_N
        factors.append(factor)
        product *= factor
        if level_index == len(LEVELS) - 1 or not survivors:
            break
        # Survivor resampling creates descendants with shared ancestry. Each
        # random-walk MH step targets N(0,1) conditional on X > threshold.
        next_population = []
        for _ in range(SUBSET_N):
            x = rng.choice(survivors)
            for _ in range(SUBSET_STEPS):
                proposed = x + rng.gauss(0.0, 1.0)
                evaluations += 1  # one response / boundary evaluation
                if proposed > threshold and rng.random() < math.exp(min(0.0, -0.5 * (proposed**2 - x**2))):
                    x = proposed
            next_population.append(x)
        population = next_population
    return product, evaluations, factors


def subset_demo(rng: random.Random) -> None:
    estimates = []
    costs = []
    first_factors = None
    for _ in range(SUBSET_REPS):
        estimate, cost, factors = subset_once(random.Random(rng.getrandbits(64)))
        estimates.append(estimate)
        costs.append(cost)
        if first_factors is None:
            first_factors = factors
    average, replication_mcse = mean_mcse(estimates)
    print(f"Fixed-level subset: mean p={average:.4e}, replication MCSE={replication_mcse:.2e}")
    print(f"  {SUBSET_REPS} independent runs; {min(costs)}--{max(costs)} response evaluations/run; "
          f"first-run conditional factors={[round(x, 4) for x in first_factors]}")
    print("  Replication MCSE describes run-to-run spread; it does not check model error.")


def main() -> None:
    rng = random.Random(SEED)
    decision_demo(rng)
    truth = normal_tail(5.0)
    second_moment = math.exp(25.0) * normal_tail(10.0)
    variance = second_moment - truth * truth
    print(f"Gaussian P(X>5) = {truth:.9e}")
    print(f"  mu=5 IS exact per-draw variance={variance:.3e}; "
          f"N=10000 relative MCSE={math.sqrt(variance/N_IS)/truth:.2%}")
    crude_failures = sum(rng.gauss(0.0, 1.0) > 5.0 for _ in range(N_CRUDE))
    print(f"Crude MC: {crude_failures}/{N_CRUDE} failures; zero is inconclusive")
    importance_demo(rng, 5.0)
    importance_demo(rng, 9.0)
    variance_9 = math.exp(81.0) * normal_tail(14.0) - truth * truth
    print(f"  mu=9 exact relative MCSE at N=10000={math.sqrt(variance_9/N_IS)/truth:.1%}")
    subset_demo(rng)
    selection_demo()
    analytic_checks()
    subset_enumeration_check()


if __name__ == "__main__":
    main()
