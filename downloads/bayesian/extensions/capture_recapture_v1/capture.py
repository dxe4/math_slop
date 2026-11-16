"""Exact finite-population two-list capture and an independent uniform audit.

There is one fixed, closed population of N existing members. The first sample
marks m distinct members and releases them. A second sample contains n distinct
members; their arbitrary matching labels reveal overlap r. Labels do not encode
N. There are no arrivals, departures, label errors, or lost marks in this model.

Uniform second sampling means EVERY n-subset is equally likely, a stronger
assumption than equal marginal inclusion probabilities. The alternative Fisher
law weights a whole n-subset S by odds**overlap(S); it is not sequential weighted
sampling. The lesson's known odds=2 sampler proposes a uniform n-subset, accepts
with probability 2**(r-n), otherwise discards it and redraws the ENTIRE subset.
Every retry samples the same fixed population; N is never redrawn per attempt.
Only the accepted batch is recorded; rejected sets and attempt counts are
unrecorded. Its accepted-subset normalizer depends on N and belongs in inference.

A third, separate audit is a uniform fixed-size subset, conditionally independent
of the earlier samples given N and the observed past. K counts previously unseen
EXISTING members outside the observed union; it does not count new arrivals.

All probabilities, moments, finite-prior updates, and predictive mixtures use
Fraction arithmetic. Calculator bounds (not model restrictions) are N<=60,
odds in [1/1000,1000] with denominator<=10**6, and finite proper exact priors.
Changing the upper support of a uniform prior changes the scientific prior;
it is not an accuracy setting for an otherwise fixed posterior.
"""
from __future__ import annotations

import argparse
from collections.abc import Mapping
from fractions import Fraction
import json
from math import comb
import re

Rational = Fraction | int | str
MAX_POPULATION = 60
MAX_PRIOR_SUPPORT = MAX_POPULATION + 1


def rational(value: Rational) -> Fraction:
    """Parse exact values while refusing floats, booleans, and oversized input."""
    if isinstance(value, bool) or not isinstance(value, (Fraction, int, str)):
        raise TypeError("Use an integer, Fraction, or decimal/fraction string.")
    if isinstance(value, str) and len(value) > 256:
        raise ValueError("Exact-input strings must have at most 256 characters.")
    if isinstance(value, str):
        exponent = re.search(r"[eE]([+-]?\d(?:_?\d)*)\s*$", value)
        if exponent and abs(int(exponent.group(1).replace("_", ""))) > 1000:
            raise ValueError("Decimal-string exponents must lie in [-1000, 1000].")
    result = Fraction(value)
    if max(result.numerator.bit_length(), result.denominator.bit_length()) > 4096:
        raise ValueError("Exact inputs must use at most 4096 bits per integer.")
    return result


def _integer(value: int, name: str, lower: int, upper: int) -> int:
    if isinstance(value, bool) or not isinstance(value, int):
        raise TypeError(f"{name} must be an integer.")
    if not lower <= value <= upper:
        raise ValueError(f"{name} must lie in [{lower}, {upper}].")
    return value


def _sizes(N: int, m: int, n: int) -> tuple[int, int, int]:
    N = _integer(N, "Population size N", 0, MAX_POPULATION)
    return N, _integer(m, "Marked count m", 0, N), _integer(n, "Sample size n", 0, N)


def _odds(value: Rational) -> Fraction:
    result = rational(value)
    if not Fraction(1, 1000) <= result <= 1000 or result.denominator > 1_000_000:
        raise ValueError("Fisher odds must lie in [1/1000,1000], with denominator<=1000000.")
    return result


def _choose(N: int, k: int) -> int:
    return comb(N, k) if 0 <= k <= N else 0


def hypergeometric_pmf(N: int, m: int, n: int, r: int) -> Fraction:
    """Uniform n-subset overlap with a fixed m-member marked set."""
    N, m, n = _sizes(N, m, n)
    r = _integer(r, "Overlap r", 0, MAX_POPULATION)
    return Fraction(_choose(m, r) * _choose(N - m, n - r), comb(N, n))


def hypergeometric_distribution(N: int, m: int, n: int) -> tuple[Fraction, ...]:
    """Return all probabilities for r=0..n, including impossible zero cells."""
    N, m, n = _sizes(N, m, n)
    return tuple(hypergeometric_pmf(N, m, n, r) for r in range(n + 1))


def hypergeometric_moments(N: int, m: int, n: int) -> tuple[Fraction, Fraction]:
    N, m, n = _sizes(N, m, n)
    if not N:
        return Fraction(0), Fraction(0)
    mean = Fraction(n * m, N)
    variance = (n * Fraction(m, N) * (1 - Fraction(m, N)) * Fraction(N - n, N - 1)
                if N > 1 else Fraction(0))
    return mean, variance


def fisher_distribution(N: int, m: int, n: int, odds: Rational = 2) -> tuple[Fraction, ...]:
    """Fisher noncentral hypergeometric law, weighting WHOLE subsets by odds**r."""
    N, m, n = _sizes(N, m, n)
    odds = _odds(odds)
    weights = tuple(_choose(m, r) * _choose(N - m, n - r) * odds ** r for r in range(n + 1))
    normalizer = sum(weights, Fraction(0))
    return tuple(weight / normalizer for weight in weights)


def fisher_pmf(N: int, m: int, n: int, r: int, odds: Rational = 2) -> Fraction:
    N, m, n = _sizes(N, m, n)
    r = _integer(r, "Overlap r", 0, MAX_POPULATION)
    odds = _odds(odds)
    return fisher_distribution(N, m, n, odds)[r] if r <= n else Fraction(0)


def acceptance_probability(r: int, n: int, odds: Rational = 2) -> Fraction:
    """Accept a uniform proposed WHOLE subset, then redraw all on rejection.

    odds=2 gives 2**(r-n). Rejected proposals and attempt counts are not part
    of the recorded observation model used by posterior().
    """
    n = _integer(n, "Sample size n", 0, MAX_POPULATION)
    r = _integer(r, "Overlap r", 0, n)
    odds = _odds(odds)
    return odds ** r / max(Fraction(1), odds) ** n


def sequential_weighted_distribution(N: int, m: int, n: int,
                                     odds: Rational = 2) -> tuple[Fraction, ...]:
    """A DIFFERENT protocol: weighted draws without replacement, one at a time.

    Marked members have draw weight odds and unmarked members weight one.
    This is included only to distinguish the sequential Wallenius mechanism
    from the Fisher whole-subset law used in the alternative lesson case.
    """
    N, m, n = _sizes(N, m, n)
    odds = _odds(odds)
    states = {0: Fraction(1)}
    for draws in range(n):
        updated: dict[int, Fraction] = {}
        for marked_drawn, probability in states.items():
            marked_weight = odds * (m - marked_drawn)
            unmarked_weight = Fraction(N - m - (draws - marked_drawn))
            total_weight = marked_weight + unmarked_weight
            if marked_weight:
                updated[marked_drawn + 1] = updated.get(marked_drawn + 1, Fraction(0)) + probability * marked_weight / total_weight
            if unmarked_weight:
                updated[marked_drawn] = updated.get(marked_drawn, Fraction(0)) + probability * unmarked_weight / total_weight
        states = updated
    return tuple(states.get(r, Fraction(0)) for r in range(n + 1))


def uniform_prior(lower: int = 5, upper: int = 8) -> dict[int, Fraction]:
    lower = _integer(lower, "Lower prior population", 0, MAX_POPULATION)
    upper = _integer(upper, "Upper prior population", lower, MAX_POPULATION)
    return {N: Fraction(1, upper - lower + 1) for N in range(lower, upper + 1)}


def validate_prior(prior: Mapping[int, Rational]) -> dict[int, Fraction]:
    """Require a finite proper PMF summing EXACTLY to one; discard zero cells."""
    if not isinstance(prior, Mapping):
        raise TypeError("Prior must map integer population sizes to exact probabilities.")
    if not 1 <= len(prior) <= MAX_PRIOR_SUPPORT:
        raise ValueError(f"Prior needs 1..{MAX_PRIOR_SUPPORT} entries.")
    result = {}
    for N, probability in prior.items():
        N = _integer(N, "Prior population N", 0, MAX_POPULATION)
        probability = rational(probability)
        if not 0 <= probability <= 1:
            raise ValueError("Prior probabilities must lie in [0,1].")
        if probability:
            result[N] = probability
    if sum(result.values(), Fraction(0)) != 1:
        raise ValueError("Prior probabilities must sum exactly to one.")
    return dict(sorted(result.items()))


SAMPLING_NOTES = {
    "uniform": "Every second-sample n-subset is equally likely; the first marked set is fixed and conditioned on.",
    "fisher": "Known whole-subset Fisher weighting: propose a uniform n-subset, accept with odds**r/max(1,odds)**n, otherwise redraw all; only the accepted batch is recorded. Rejected subsets and attempt counts are unrecorded. This is not sequential weighted sampling.",
}


def posterior(prior: Mapping[int, Rational], m: int = 3, n: int = 3, r: int = 1,
               sampler: str = "uniform", odds: Rational = 2,
               audit_n: int = 3) -> dict[str, object]:
    """Finite unknown-N posterior and full third-audit unseen-count prediction.

    Condition on the first fixed-size marked sample; it contributes no extra
    count likelihood for N here. For each possible N the second sample has its
    specified normalized law. Audit sampling is separately uniform, regardless
    of the second-sample protocol, and conditionally independent given N/past.
    """
    prior = validate_prior(prior)
    m = _integer(m, "Marked count m", 0, MAX_POPULATION)
    n = _integer(n, "Second sample size n", 0, MAX_POPULATION)
    r = _integer(r, "Observed overlap r", 0, min(m, n))
    audit_n = _integer(audit_n, "Uniform audit size", 0, MAX_POPULATION)
    if not isinstance(sampler, str):
        raise TypeError("Sampler must be 'uniform' or 'fisher'.")
    if sampler not in SAMPLING_NOTES:
        raise ValueError("Sampler must be 'uniform' or 'fisher'.")
    odds = _odds(odds)
    if min(prior) < max(m, n, audit_n):
        raise ValueError("Every possible N must allow the fixed marked, second, and audit sample sizes.")
    likelihoods = {N: hypergeometric_pmf(N, m, n, r) if sampler == "uniform" else fisher_pmf(N, m, n, r, odds)
                   for N in prior}
    evidence = sum((prior[N] * likelihoods[N] for N in prior), Fraction(0))
    if not evidence:
        raise ValueError("The observed overlap has zero probability under the prior and sampler.")
    probabilities = {N: prior[N] * likelihoods[N] / evidence for N in prior}
    observed_union = m + n - r
    mean_N = sum((N * probability for N, probability in probabilities.items()), Fraction(0))
    variance_N = sum(((N - mean_N) ** 2 * probability for N, probability in probabilities.items()), Fraction(0))
    audit = [Fraction(0)] * (audit_n + 1)
    for N, probability in probabilities.items():
        if not probability:
            continue
        for k in range(audit_n + 1):
            audit[k] += probability * hypergeometric_pmf(N, N - observed_union, audit_n, k)
    return {"posterior_rows": [{"N": N, "prior": prior[N], "likelihood": likelihoods[N], "posterior": probabilities[N]} for N in prior],
            "mean_N": mean_N, "variance_N": variance_N, "observed_union": observed_union,
            "mean_unseen": mean_N - observed_union,
            "P_N_over8": sum((p for N, p in probabilities.items() if N > 8), Fraction(0)),
            "P_N_at_least7": sum((p for N, p in probabilities.items() if N >= 7), Fraction(0)),
            "evidence": evidence, "audit_pmf": tuple(audit), "audit_any_unseen": 1 - audit[0],
            "audit_mean_unseen": sum((k * probability for k, probability in enumerate(audit)), Fraction(0)),
            "parameters": {"m": m, "n": n, "r": r, "audit_n": audit_n,
                           "sampler": sampler, "odds": odds if sampler == "fisher" else Fraction(1)},
            "sampling_note": SAMPLING_NOTES[sampler],
            "audit_note": "Separate uniform audit of existing members; K is outside the already observed union. No new arrivals."}


def scenario_payload(r: int = 1, sampler: str = "uniform", cap: int = 8) -> dict[str, object]:
    r = _integer(r, "Explorer overlap", 1, 2)
    cap = _integer(cap, "Explorer prior upper support", 8, 12)
    if cap not in (8, 12):
        raise ValueError("Explorer prior upper support must be 8 or 12.")
    report = posterior(uniform_prior(5, cap), r=r, sampler=sampler)
    return {"key": f"r{r}-{sampler}-cap{cap}", **report,
            "r": r, "sampler": sampler, "prior_lower": 5, "prior_cap": cap,
            "prior_note": f"Proper discrete uniform prior on N=5..{cap}; its upper support is a scientific assumption."}


def explorer_payload() -> dict[str, object]:
    return {"default_case": "r1-uniform-cap8",
            "cases": {f"r{r}-{sampler}-cap{cap}": scenario_payload(r, sampler, cap)
                      for r in (1, 2) for sampler in ("uniform", "fisher") for cap in (8, 12)},
            "overlaps": (1, 2), "samplers": ("uniform", "fisher"), "prior_caps": (8, 12),
            "fixed": {"m": 3, "n": 3, "audit_n": 3, "fisher_odds": Fraction(2)},
            "scope": "Closed fixed population, distinct members and reliable matching labels; specified normalized subset protocols; finite proper prior; separate uniform audit; no arrivals."}


def json_payload(value: object | None = None) -> str:
    return json.dumps(explorer_payload() if value is None else value, default=str, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--r", choices=(1, 2), type=int, default=1)
    parser.add_argument("--sampler", choices=SAMPLING_NOTES, default="uniform")
    parser.add_argument("--cap", choices=(8, 12), type=int, default=8)
    parser.add_argument("--all", action="store_true", help="Print all eight fixed explorer cases.")
    parser.add_argument("--json", action="store_true", help="Print exact probabilities as machine-readable fractions.")
    args = parser.parse_args()
    try:
        report = explorer_payload() if args.all else scenario_payload(args.r, args.sampler, args.cap)
    except (TypeError, ValueError, ZeroDivisionError) as error:
        parser.error(str(error))
    if not args.json:
        print("Closed-population capture: exact finite-prior posterior and separate uniform audit.")
        print("Fisher weights whole accepted subsets; prior support changes the prior.")
    print(json_payload(report))


if __name__ == "__main__":
    main()
