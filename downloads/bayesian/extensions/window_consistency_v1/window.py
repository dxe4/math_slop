"""Exact reporting-window calculations for three different Gamma-Poisson laws.

A draws one Gamma(shape=alpha, rate=beta) RATE shared by all intervals.
B draws independent Gamma(alpha, beta) RATES for scientifically fixed rows.
C draws independent Gamma(alpha * duration, beta) INTEGRATED INTENSITIES.
The C intensity already incorporates duration; do not multiply it by duration
again. C is a Gamma-subordinated counting process and allows batch jumps.
In C, alpha is a shape-growth rate per chosen exposure unit; in A and B it
is the shape of a rate distribution. The fixtures fix one day as that unit.

All arithmetic returned by this module is rational. Numeric unconditional
negative-binomial PMFs require integer shape: p**r is not generally rational
for noninteger r. ``nb_pmf_term`` retains that factor symbolically instead.
Conditional allocations remain rational for arbitrary positive rational
shapes and durations because the common power factors cancel.

The finite calculator bounds below limit computation, not the probability
models. No simulation, quadrature, third-party package, or floating point is
used. The command-line JSON is also the bounded offline explorer's source.
"""
from __future__ import annotations

import argparse
from collections.abc import Iterator, Sequence
from dataclasses import dataclass
from fractions import Fraction
import json
from math import comb, factorial
import re

Rational = Fraction | int | str
MAX_COUNT = 80
MAX_WINDOWS = 32
MAX_ALLOCATIONS = 200_000
REFINEMENT_NS = (1, 2, 4, 8, 16)
MODEL_LABELS = {
    "A": "A — one shared Gamma rate",
    "B": "B — independent Gamma rates per fixed row",
    "C": "C — independent Gamma-process intensity increments",
}


def rational(value: Rational) -> Fraction:
    """Parse exact input, deliberately refusing floats and booleans."""
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


def _positive(value: Rational, name: str) -> Fraction:
    result = rational(value)
    if result <= 0:
        raise ValueError(f"{name} must be positive.")
    return result


def _model(model: str) -> str:
    if not isinstance(model, str):
        raise TypeError("Model must be 'A', 'B', or 'C'.")
    if model not in MODEL_LABELS:
        raise ValueError("Model must be 'A', 'B', or 'C'.")
    return model


def _parameters(alpha: Rational, beta: Rational,
                durations: Sequence[Rational]) -> tuple[Fraction, Fraction, tuple[Fraction, ...]]:
    a, b = _positive(alpha, "Gamma shape alpha"), _positive(beta, "Gamma rate beta")
    if not isinstance(durations, Sequence) or isinstance(durations, (str, bytes)):
        raise TypeError("Durations must be a sequence of positive exact rationals.")
    if not 1 <= len(durations) <= MAX_WINDOWS:
        raise ValueError(f"Use between 1 and {MAX_WINDOWS} windows.")
    return a, b, tuple(_positive(t, "Window duration") for t in durations)


def rising(shape: Rational, k: int) -> Fraction:
    """The exact rising factorial (shape)_k, including (shape)_0 = 1."""
    shape = _positive(shape, "Shape")
    k = _integer(k, "Count", 0, MAX_COUNT)
    result = Fraction(1)
    for j in range(k):
        result *= shape + j
    return result


@dataclass(frozen=True)
class NBPMFTerm:
    """Exact coefficient * base**exponent, retaining a possibly irrational power."""

    coefficient: Fraction
    base: Fraction
    exponent: Fraction

    def as_fraction(self) -> Fraction:
        """Return a rational only when its value follows from integer powers.

        Some special rational bases and noninteger exponents simplify too;
        this deliberately small calculator does not claim to recognize them.
        """
        if not self.coefficient or self.base == 1:
            return self.coefficient
        if self.exponent.denominator != 1:
            raise ValueError("Noninteger NB shape retains an exact symbolic p**shape factor.")
        return self.coefficient * self.base ** self.exponent.numerator


def nb_pmf_term(shape: Rational, p: Rational, k: int) -> NBPMFTerm:
    """NB(r,p) PMF: (r)_k/k! * (1-p)**k * p**r.

    NB counts failures before r successes, with 0 < p <= 1. Positive rational
    r is allowed symbolically. p=1 represents the point mass at zero.
    """
    shape, p = _positive(shape, "NB shape"), rational(p)
    k = _integer(k, "Count", 0, MAX_COUNT)
    if not 0 < p <= 1:
        raise ValueError("NB success probability p must lie in (0, 1].")
    return NBPMFTerm(rising(shape, k) / factorial(k) * (1 - p) ** k, p, shape)


def nb_pmf(shape: Rational, p: Rational, k: int) -> Fraction:
    """Exact numeric NB PMF; noninteger shapes generally require symbolic powers."""
    return nb_pmf_term(shape, p, k).as_fraction()


def _compositions(total: int, parts: int) -> Iterator[tuple[int, ...]]:
    if parts == 1:
        yield (total,)
    else:
        for first in range(total + 1):
            for rest in _compositions(total - first, parts - 1):
                yield (first,) + rest


def conditional_allocation(model: str, alpha: Rational, beta: Rational,
                           durations: Sequence[Rational], total: int
                           ) -> dict[tuple[int, ...], Fraction]:
    """Pr(window counts | their sum=total), exact for rational shapes.

    A is multinomial with probabilities t_i / sum(t_i). C is Dirichlet-
    multinomial with shapes alpha*t_i. B is Dirichlet-multinomial only for
    equal durations; its general allocation needs normalized unequal-p NB
    weights. The p_i**alpha factors cancel even when alpha is noninteger.
    """
    model = _model(model)
    a, b, ts = _parameters(alpha, beta, durations)
    total = _integer(total, "Conditioned total", 0, MAX_COUNT)
    if comb(total + len(ts) - 1, len(ts) - 1) > MAX_ALLOCATIONS:
        raise ValueError(f"Conditional enumeration allows at most {MAX_ALLOCATIONS} allocations.")
    weights: dict[tuple[int, ...], Fraction] = {}
    horizon = sum(ts, Fraction(0))
    for counts in _compositions(total, len(ts)):
        weight = Fraction(1)
        for t, k in zip(ts, counts):
            if model == "A":
                weight *= (t / horizon) ** k / factorial(k)
            elif model == "B":
                weight *= rising(a, k) * (t / (b + t)) ** k / factorial(k)
            else:
                weight *= rising(a * t, k) / factorial(k)
        weights[counts] = weight
    normalizer = sum(weights.values(), Fraction(0))
    return {counts: weight / normalizer for counts, weight in weights.items()}


def conditional_first_pmf(model: str, alpha: Rational, beta: Rational,
                          durations: Sequence[Rational], total: int) -> tuple[Fraction, ...]:
    """Marginalize an exact finite allocation law to its first window."""
    allocations = conditional_allocation(model, alpha, beta, durations, total)
    pmf = [Fraction(0)] * (total + 1)
    for counts, probability in allocations.items():
        pmf[counts[0]] += probability
    return tuple(pmf)


def moments(model: str, alpha: Rational, beta: Rational,
            durations: Sequence[Rational]) -> dict[str, object]:
    """Marginal and total first two moments, with the FULL covariance matrix."""
    model = _model(model)
    a, b, ts = _parameters(alpha, beta, durations)
    means = tuple(a * t / b for t in ts)
    variances = tuple(mean + a * (t if model == "C" else t * t) / b ** 2
                      for t, mean in zip(ts, means))
    covariance = tuple(tuple(variances[i] if i == j else
                             a * ti * tj / b ** 2 if model == "A" else Fraction(0)
                             for j, tj in enumerate(ts)) for i, ti in enumerate(ts))
    return {"marginal_means": means, "marginal_variances": variances,
            "covariance_matrix": covariance,
            "total_mean": sum(means, Fraction(0)),
            "total_variance": sum((sum(row, Fraction(0)) for row in covariance), Fraction(0))}


def total_pmf(model: str, alpha: Rational, beta: Rational,
              durations: Sequence[Rational], k: int) -> Fraction:
    """Exact probability that the window sum is k.

    A and C use their merged NB law. B convolves the independently reset
    rows, including unequal p values; no negative-binomial closure is assumed.
    Noninteger shapes that retain irrational powers raise ValueError.
    """
    model = _model(model)
    a, b, ts = _parameters(alpha, beta, durations)
    k = _integer(k, "Count", 0, MAX_COUNT)
    if model == "A":
        return nb_pmf(a, b / (b + sum(ts, Fraction(0))), k)
    if model == "C":
        return nb_pmf(a * sum(ts, Fraction(0)), b / (b + 1), k)
    coefficients = [Fraction(1)] + [Fraction(0)] * k
    for t in ts:
        row = tuple(nb_pmf(a, b / (b + t), j) for j in range(k + 1))
        coefficients = [sum((coefficients[j] * row[n - j] for j in range(n + 1)), Fraction(0))
                        for n in range(k + 1)]
    return coefficients[k]


def after_first_zero(model: str, alpha: Rational, beta: Rational,
                     durations: Sequence[Rational]) -> dict[str, Fraction]:
    """Predict the SECOND row after observing zero in the first of two rows.

    A updates the shared rate. B and C retain the second row's prior law,
    because their disjoint rows are independent. Numeric p0 requires an
    integer predictive NB shape, as documented by nb_pmf.
    """
    model = _model(model)
    a, b, ts = _parameters(alpha, beta, durations)
    if len(ts) != 2:
        raise ValueError("The after-zero comparison requires exactly two windows.")
    t1, t2 = ts
    if model == "A":
        return {"mean": a * t2 / (b + t1),
                "p0": nb_pmf(a, (b + t1) / (b + t1 + t2), 0)}
    if model == "B":
        return {"mean": a * t2 / b, "p0": nb_pmf(a, b / (b + t2), 0)}
    return {"mean": a * t2 / b, "p0": nb_pmf(a * t2, b / (b + 1), 0)}


def refinement_rows(model: str, alpha: Rational = 2,
                    beta: Rational = "1/2") -> tuple[dict[str, object], ...]:
    """Compare recipes on n equal cells within the same one-day horizon.

    For B, changing n redraws independent rates on NEW scientific cells.
    Refining reports inside a fixed B cell must instead retain that cell's
    one rate; reporting boundaries alone never authorize a scientific reset.
    """
    model = _model(model)
    rows = []
    for n in REFINEMENT_NS:
        ts = (Fraction(1, n),) * n
        summary = moments(model, alpha, beta, ts)
        rows.append({"n": n, "total_mean": summary["total_mean"],
                     "total_variance": summary["total_variance"],
                     "total_p0": total_pmf(model, alpha, beta, ts, 0)})
    return tuple(rows)


SCENARIOS = {
    "main": {"label": "Half-day split", "alpha": Fraction(2), "beta": Fraction(1, 2),
             "durations": (Fraction(1, 2), Fraction(1, 2)), "conditioned_total": 4},
    "changed": {"label": "Unequal-third split", "alpha": Fraction(3), "beta": Fraction(1),
                "durations": (Fraction(1, 3), Fraction(2, 3)), "conditioned_total": 3},
}


def scenario_payload(name: str = "main", model: str = "A", max_count: int = 12) -> dict[str, object]:
    """One of the six predeclared explorer cases; the tail is shown explicitly."""
    if not isinstance(name, str):
        raise TypeError("Scenario must be 'main' or 'changed'.")
    if name not in SCENARIOS:
        raise ValueError("Scenario must be 'main' or 'changed'.")
    model = _model(model)
    max_count = _integer(max_count, "Displayed maximum count", 0, MAX_COUNT)
    scenario = SCENARIOS[name]
    a, b, ts = scenario["alpha"], scenario["beta"], scenario["durations"]
    total = scenario["conditioned_total"]
    summary = moments(model, a, b, ts)
    daily_pmf = tuple(total_pmf(model, a, b, ts, k) for k in range(max_count + 1))
    allocation = conditional_first_pmf(model, a, b, ts, total)
    return {"key": f"{name}-{model}", "scenario": name,
            "scenario_label": scenario["label"], "model": model, "model_label": MODEL_LABELS[model],
            "alpha": a, "beta": b, "durations": ts, "conditioned_total": total,
            **summary, "covariance": summary["covariance_matrix"][0][1],
            "total_p0": daily_pmf[0], "total_pmf": daily_pmf,
            "total_pmf_max_count": max_count, "total_pmf_tail": 1 - sum(daily_pmf, Fraction(0)),
            "conditional_first_count_pmf": allocation,
            "all_in_either_window_given_total": allocation[0] + allocation[-1],
            "after_first_zero": after_first_zero(model, a, b, ts),
            "refinement_rows": refinement_rows(model, a, b)}


def explorer_payload() -> dict[str, object]:
    """The complete bounded UI dataset, with no JavaScript-side model fitting."""
    return {"default_case": "main-A", "models": MODEL_LABELS,
            "scenarios": {name: scenario["label"] for name, scenario in SCENARIOS.items()},
            "cases": {f"{name}-{model}": scenario_payload(name, model)
                      for name in SCENARIOS for model in MODEL_LABELS},
            "refinement_ns": REFINEMENT_NS, "count_display_max": 12,
            "scope": "Exact rational probabilities for six fixed cases; general noninteger-shape NB powers remain symbolic."}


def json_payload(value: object | None = None) -> str:
    """Serialize exact fractions as reduced strings, retaining integer metadata."""
    return json.dumps(explorer_payload() if value is None else value, default=str, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--scenario", choices=SCENARIOS, default="main")
    parser.add_argument("--model", choices=MODEL_LABELS, default="A")
    parser.add_argument("--max-count", type=int, default=12)
    parser.add_argument("--all", action="store_true", help="Include all six bounded explorer cases.")
    parser.add_argument("--json", action="store_true", help="Print exact fractions in machine-readable JSON.")
    args = parser.parse_args()
    try:
        report = explorer_payload() if args.all else scenario_payload(args.scenario, args.model, args.max_count)
    except (TypeError, ValueError, ZeroDivisionError) as error:
        parser.error(str(error))
    if not args.json:
        print("Exact reporting-window comparison; Gamma uses shape and rate.")
        print("B is a valid fixed-row model; C permits batch jumps.")
    print(json_payload(report))


if __name__ == "__main__":
    main()
