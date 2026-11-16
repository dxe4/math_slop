"""Exact checks for two predeclared blocks of two Bernoulli observations.

One common p is shared by all four observations and by all four outcomes in
each replicate. The fitting prior is always Beta(1, 1). A fixed truth reference
only weights possible observed datasets; it never changes a fitted posterior
or a posterior-predictive tail. This is a finite teaching calculator, not an
arbitrary model or sample-size engine. No sampling or external packages occur.
"""
from __future__ import annotations

import argparse
from fractions import Fraction
import json
from math import comb, factorial

COUNT_PAIRS = tuple((a, b) for a in range(3) for b in range(3))
TRUTH_REFERENCES = (Fraction(1, 4), Fraction(1, 2), Fraction(3, 4))
THRESHOLD = Fraction(1, 10)

_SEMANTICS = {
    "model": "Two predeclared blocks of two; conditionally iid Bernoulli(p), one shared p; fitting prior Beta(1,1).",
    "truth_reference": "Weights possible observed datasets only. Changing truth never changes the fitted posterior or its replicate tails.",
    "ordinary_reference": "Four new trials share one p drawn from the fitted posterior.",
    "conditional_reference": "Uniform labeled arrangements with replicate total fixed to the observed total.",
    "threshold": "The 1/10 threshold illustrates a repeated-sampling property, not an automatic decision recommendation.",
    "randomization": "Optional strict-tail plus independent Uniform(0,1) times tie mass; U is resampled in the repeated experiment.",
}


def _count(value: int, name: str) -> int:
    if type(value) is not int:
        raise TypeError(f"{name} must be an integer count; booleans are not counts")
    if value not in (0, 1, 2):
        raise ValueError(f"{name} must be 0, 1 or 2 for the fixed two-trial block")
    return value


def _total(value: int) -> int:
    if type(value) is not int:
        raise TypeError("The total must be an integer; booleans are not counts")
    if not 0 <= value <= 4:
        raise ValueError("The total must be between 0 and 4")
    return value


def _truth(value: Fraction | str) -> Fraction:
    if isinstance(value, Fraction):
        result = value
    elif type(value) is str and value in ("1/4", "1/2", "3/4"):
        result = Fraction(value)
    else:
        raise TypeError("Use a Fraction or one of the exact truth labels 1/4, 1/2, 3/4; floats and booleans fail")
    if result not in TRUTH_REFERENCES:
        raise ValueError("The fixed truth references are exactly 1/4, 1/2 and 3/4")
    return result


def _beta(alpha: int, beta: int) -> Fraction:
    """Integer Beta integral; only bounded internal shapes reach this helper."""
    return Fraction(factorial(alpha - 1) * factorial(beta - 1), factorial(alpha + beta - 1))


def posterior_shapes(a: int, b: int) -> tuple[int, int]:
    """Beta(1+A+B, 5-A-B) shapes for the fixed proper fitting prior."""
    total = _count(a, "A") + _count(b, "B")
    return 1 + total, 5 - total


def predictive_joint(a: int, b: int) -> dict[tuple[int, int], Fraction]:
    """All nine joint replicate count masses, integrating one shared p.

    Conditional independence before integration does not imply marginal
    independence between replicate blocks.
    """
    alpha, beta = posterior_shapes(a, b)
    normalizer = _beta(alpha, beta)
    return {(x, z): comb(2, x) * comb(2, z) * _beta(alpha + x + z, beta + 4 - x - z) / normalizer
            for x, z in COUNT_PAIRS}


def conditional_joint(total: int) -> dict[tuple[int, int], Fraction]:
    """Replicate count masses given Srep=S, independent of p and the prior."""
    total = _total(total)
    return {(x, z): Fraction(comb(2, x) * comb(2, z), comb(4, total))
            for x, z in COUNT_PAIRS if x + z == total}


def _parts(joint: dict[tuple[int, int], Fraction], observed_t: int) -> dict[str, Fraction]:
    strict = sum((mass for (x, z), mass in joint.items() if abs(x - z) > observed_t), Fraction())
    tie = sum((mass for (x, z), mass in joint.items() if abs(x - z) == observed_t), Fraction())
    return {"strict": strict, "tie": tie, "weak": strict + tie}


def _rows(joint: dict[tuple[int, int], Fraction]) -> list[dict[str, int | Fraction]]:
    return [{"A_rep": x, "B_rep": z, "T_rep": abs(x - z), "probability": mass}
            for (x, z), mass in sorted(joint.items())]


def source_case(a: int, b: int) -> dict[str, object]:
    """Fit one observed count pair and report both declared reference tails.

    There is deliberately no truth-reference argument. The discrepancy is
    fixed as T=|A-B| before observing the data. All probabilities are Fraction.
    """
    shapes = posterior_shapes(a, b)
    observed = {"A": a, "B": b, "S": a + b, "T": abs(a - b)}
    ordinary = predictive_joint(a, b)
    conditional = conditional_joint(a + b)
    return {"observed": observed, "posterior_shapes": shapes,
            "posterior_predictive": {**_parts(ordinary, observed["T"]), "joint": _rows(ordinary)},
            "conditional": {**_parts(conditional, observed["T"]), "joint": _rows(conditional)}}


def _observation_weights(truth: Fraction | None) -> dict[tuple[int, int], Fraction]:
    if truth is None:
        # Integrate p^(A+B)(1-p)^(4-A-B) under the uniform fitting prior.
        return {(a, b): comb(2, a) * comb(2, b) * _beta(a + b + 1, 5 - a - b)
                for a, b in COUNT_PAIRS}
    return {(a, b): comb(2, a) * comb(2, b) * truth ** (a + b) * (1 - truth) ** (4 - a - b)
            for a, b in COUNT_PAIRS}


def _tail_law(weights: dict[tuple[int, int], Fraction], *, conditional: bool = False) -> dict[Fraction, Fraction]:
    law: dict[Fraction, Fraction] = {}
    for (a, b), weight in weights.items():
        joint = conditional_joint(a + b) if conditional else predictive_joint(a, b)
        tail = _parts(joint, abs(a - b))["weak"]
        law[tail] = law.get(tail, Fraction()) + weight
    return dict(sorted(law.items()))


def fixed_tail_law(truth: Fraction | str) -> dict[Fraction, Fraction]:
    """Refit for every dataset, then push its fixed-p mass through its tail."""
    return _tail_law(_observation_weights(_truth(truth)))


def prior_tail_law() -> dict[Fraction, Fraction]:
    """Fitted-tail law under p~Beta(1,1), then four observations given p."""
    return _tail_law(_observation_weights(None))


def _randomized_rejection(parts: dict[str, Fraction]) -> Fraction:
    """Conditional U-probability that strict+U*tie is at most 1/10."""
    if parts["tie"] <= 0:
        raise RuntimeError("An attainable observed statistic must have positive reference tie mass")
    return max(Fraction(), min(Fraction(1), (THRESHOLD - parts["strict"]) / parts["tie"]))


def _law_rows(law: dict[Fraction, Fraction]) -> list[dict[str, Fraction]]:
    return [{"tail": tail, "probability": mass} for tail, mass in law.items()]


def _calibration(weights: dict[tuple[int, int], Fraction]) -> dict[str, object]:
    ordinary_law = _tail_law(weights)
    conditional_law = _tail_law(weights, conditional=True)
    randomized = Fraction()
    conditional_randomized = Fraction()
    for (a, b), weight in weights.items():
        randomized += weight * _randomized_rejection(_parts(predictive_joint(a, b), abs(a - b)))
        conditional_randomized += weight * _randomized_rejection(_parts(conditional_joint(a + b), abs(a - b)))
    return {"threshold": THRESHOLD, "tail_law": _law_rows(ordinary_law),
            "weak_rejection_probability": sum((mass for tail, mass in ordinary_law.items() if tail <= THRESHOLD), Fraction()),
            "randomized_rejection_probability": randomized,
            "conditional_tail_law": _law_rows(conditional_law),
            "conditional_weak_rejection_probability": sum((mass for tail, mass in conditional_law.items() if tail <= THRESHOLD), Fraction()),
            "conditional_randomized_rejection_probability": conditional_randomized}


def calibration_summary(truth: Fraction | str) -> dict[str, object]:
    """Exact 1/10 rejection masses under one of the three fixed-p ensembles."""
    truth = _truth(truth)
    return {"truth": truth, **_calibration(_observation_weights(truth))}


def prior_calibration_summary() -> dict[str, object]:
    """Fixed comparison under the joint uniform-prior-and-data ensemble."""
    return {"ensemble": "p~Beta(1,1), then four iid Bernoulli(p) observations",
            **_calibration(_observation_weights(None))}


def explorer_payload() -> dict[str, object]:
    """Exactly nine count pairs by three fixed truth references.

    Fits and replicate tails are shared fields per observed count pair.
    Only null-law/calibration rows appear under truth_refs. The unequal-block
    transfer exercise is outside this calculator and its payload.
    """
    cases = {}
    for a, b in COUNT_PAIRS:
        cases[f"{a},{b}"] = {**source_case(a, b),
                              "truth_refs": {str(truth): calibration_summary(truth) for truth in TRUTH_REFERENCES}}
    return {"semantics": dict(_SEMANTICS), "truth_references": [str(truth) for truth in TRUTH_REFERENCES],
            "cases": cases}


def json_ready(value: object) -> object:
    """Convert exact results to JSON-compatible objects; rational strings stay exact."""
    if isinstance(value, Fraction):
        return str(value)
    if isinstance(value, dict):
        return {str(key): json_ready(item) for key, item in value.items()}
    if isinstance(value, (tuple, list)):
        return [json_ready(item) for item in value]
    if value is None or type(value) in (str, int, bool):
        return value
    raise TypeError(f"Cannot serialize {type(value).__name__} as an exact calculator result")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--a", type=int, choices=range(3), default=2)
    parser.add_argument("--b", type=int, choices=range(3), default=0)
    parser.add_argument("--truth", choices=[str(value) for value in TRUTH_REFERENCES], default="1/2")
    parser.add_argument("--payload", action="store_true", help="Emit all nine count pairs by three fixed truth references")
    args = parser.parse_args(argv)
    if args.payload:
        report = explorer_payload()
    else:
        report = {"source_case": source_case(args.a, args.b), "truth_reference": calibration_summary(args.truth),
                  "semantics": dict(_SEMANTICS)}
    print(json.dumps(json_ready(report), indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
