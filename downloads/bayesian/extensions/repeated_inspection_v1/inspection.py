"""Exact calibration and classification from repeated binary inspections.

For each independent item D~Bernoulli(pi). Conditional on its fixed D, repeated
inspection results are independent with stable positive probabilities s if D=1
and f if D=0. The orientation f<s fixes the class labels. Pair/triple laws are
ordered pattern probabilities, without binomial coefficients. Across items the
latent states are independent conditional on a chosen calibration model.

Two repeated inspections do not identify pi,s,f. The displayed continuous
same-pair family has exactly the same entire ordered pair law. An exact third
POPULATION moment can identify the oriented two-point model under these
assumptions. One observed triple, or finite empirical proportions, is not an
exact population law and does not by itself identify calibration.

Only standard-library Fraction arithmetic is used. Irrational inverse roots
remain exact symbolic square-root expressions. Calculator limits are 64 repeats
for one event, 12 repeats for enumerating every pattern, at most 20 point models,
and 1000 independent items for a count dataset. These are computation limits,
not statistical restrictions. Priors on point models must be proper exact PMFs.
"""
from __future__ import annotations

import argparse
from collections.abc import Mapping
from dataclasses import dataclass
from fractions import Fraction
import itertools
import json
from math import factorial, isqrt
import re

Rational = Fraction | int | str
MAX_REPEATS = 64
MAX_ENUM_REPEATS = 12
MAX_ITEMS = 1000
MAX_MODELS = 20
EVENTS = ("++", "+-", "--", "+++", "+-+")


def rational(value: Rational) -> Fraction:
    """Parse exact input; floats and booleans are never silently accepted."""
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


@dataclass(frozen=True)
class Model:
    """Strict two-class model: 0<pi<1 and 0<=f<s<=1."""

    pi: Fraction
    s: Fraction
    f: Fraction

    def __post_init__(self) -> None:
        pi, s, f = rational(self.pi), rational(self.s), rational(self.f)
        if not 0 < pi < 1:
            raise ValueError("Prevalence pi must lie strictly between zero and one.")
        if not 0 <= f < s <= 1:
            raise ValueError("Require 0 <= false-positive f < sensitivity s <= 1.")
        object.__setattr__(self, "pi", pi)
        object.__setattr__(self, "s", s)
        object.__setattr__(self, "f", f)


def _model(value: Model) -> Model:
    if not isinstance(value, Model):
        raise TypeError("Calibration must be a Model instance.")
    return value


def _event(event: str) -> str:
    if not isinstance(event, str):
        raise TypeError("An ordered inspection event must be a '+'/'-' string.")
    if len(event) > MAX_REPEATS or any(symbol not in "+-" for symbol in event):
        raise ValueError(f"Use a '+'/'-' string with at most {MAX_REPEATS} inspections.")
    return event


def _class_event_probability(positive_probability: Fraction, event: str) -> Fraction:
    positives = event.count("+")
    return positive_probability ** positives * (1 - positive_probability) ** (len(event) - positives)


def event_probability(model: Model, event: str) -> Fraction:
    """Probability of one ORDERED pattern on one item; no binomial factor."""
    model, event = _model(model), _event(event)
    return (model.pi * _class_event_probability(model.s, event)
            + (1 - model.pi) * _class_event_probability(model.f, event))


def defect_given(model: Model, event: str) -> Fraction:
    """Pr(D=1 | the same item's ordered event), undefined if that event has P=0."""
    model, event = _model(model), _event(event)
    evidence = event_probability(model, event)
    if not evidence:
        raise ValueError("Conditional defect probability is undefined: this event has probability zero.")
    return model.pi * _class_event_probability(model.s, event) / evidence


def law(model: Model, repeats: int = 2) -> dict[str, Fraction]:
    """Enumerate every ordered binary pattern, including the empty k=0 event."""
    model = _model(model)
    repeats = _integer(repeats, "Enumerated repeat count", 0, MAX_ENUM_REPEATS)
    return {"".join(pattern): event_probability(model, "".join(pattern))
            for pattern in itertools.product("+-", repeat=repeats)}


def moments(model: Model) -> dict[str, Fraction]:
    """Moments of the latent per-item positive propensity Theta in {f,s}."""
    model = _model(model)
    q = model.pi * model.s + (1 - model.pi) * model.f
    m2 = model.pi * model.s ** 2 + (1 - model.pi) * model.f ** 2
    m3 = model.pi * model.s ** 3 + (1 - model.pi) * model.f ** 3
    return {"q": q, "m2": m2, "m3": m3, "v": m2 - q ** 2}


def _pair_moments(q: Rational, m2: Rational) -> tuple[Fraction, Fraction, Fraction]:
    q, m2 = rational(q), rational(m2)
    if not 0 < q < 1:
        raise ValueError("The positive marginal q must lie strictly between zero and one.")
    v = m2 - q ** 2
    if not 0 < v <= q * (1 - q):
        raise ValueError("Require 0 < v=m2-q**2 <= q*(1-q). v=0 is outside the strict two-class model; it needs an enlarged closure.")
    return q, m2, v


def third_moment_bounds(q: Rational, m2: Rational) -> dict[str, Fraction]:
    """Sharp feasible m3 interval for a two-point propensity in [0,1]."""
    q, m2, v = _pair_moments(q, m2)
    return {"q": q, "m2": m2, "v": v, "lower": m2 ** 2 / q,
            "upper": m2 - (q - m2) ** 2 / (1 - q)}


def pair_family_model(s: Rational) -> Model:
    """The full closed-endpoint rational family sharing A and B's pair law."""
    s = rational(s)
    if not Fraction(17, 30) <= s <= 1:
        raise ValueError("This same-pair family requires sensitivity s in [17/30,1].")
    q, v = Fraction(6, 25), Fraction(49, 625)
    f = q - v / (s - q)
    return Model((q - f) / (s - f), s, f)


def _rational_square_root(value: Fraction) -> Fraction | None:
    numerator, denominator = isqrt(value.numerator), isqrt(value.denominator)
    return Fraction(numerator, denominator) if numerator ** 2 == value.numerator and denominator ** 2 == value.denominator else None


def triple_inverse(q: Rational, m2: Rational, m3: Rational) -> dict[str, object]:
    """Invert exact POPULATION moments, retaining genuinely irrational roots.

    The oriented roots f<s solve x**2-a*x+b=0. Compatible rational moments
    need not have rational roots. pi remains rational in the symmetric case
    a=2q even when f and s are irrational. A finite observed triple is not a
    supplied exact population moment and does not invoke this identification.
    """
    q, m2, v = _pair_moments(q, m2)
    m3 = rational(m3)
    bounds = third_moment_bounds(q, m2)
    a = (m3 - q * m2) / v
    b = a * q - m2
    discriminant = a ** 2 - 4 * b
    root = _rational_square_root(discriminant)
    f, s = ((a - root) / 2, (a + root) / 2) if root is not None else (None, None)
    pi = (q - f) / (s - f) if root is not None else Fraction(1, 2) if a == 2 * q else None
    compatible = bounds["lower"] <= m3 <= bounds["upper"]
    pi_coefficient = (2 * q - a) / 2
    return {"q": q, "m2": m2, "m3": m3, "v": v, "a": a, "b": b,
            "discriminant": discriminant, "lower": bounds["lower"], "upper": bounds["upper"],
            "compatible": compatible, "lower_gap": max(Fraction(0), bounds["lower"] - m3),
            "upper_gap": max(Fraction(0), m3 - bounds["upper"]),
            "f": f, "s": s, "pi": pi, "rational_roots": root is not None,
            "f_expression": str(f) if f is not None else f"({a} - sqrt({discriminant}))/2",
            "s_expression": str(s) if s is not None else f"({a} + sqrt({discriminant}))/2",
            "pi_expression": str(pi) if pi is not None else f"1/2 + ({pi_coefficient})/sqrt({discriminant})",
            "parameters": {"pi": pi, "s": s, "f": f} if compatible and root is not None else None,
            "orientation": "f is the smaller root, s the larger root; pi is the weight on s. The strict f<s assumption fixes class labels.",
            "population_moments_required": True}


def triple_law_from_moments(q: Rational, m2: Rational, m3: Rational) -> dict[str, Fraction]:
    """Exchangeable triple pattern values; callers must check their nonnegativity.

    Nonnegative values summing to one can still be incompatible with a
    conditional-iid mixture. triple_inverse separately checks that restriction.
    """
    q, m2, m3 = rational(q), rational(m2), rational(m3)
    by_positives = (1 - 3 * q + 3 * m2 - m3, q - 2 * m2 + m3, m2 - m3, m3)
    return {"".join(pattern): by_positives[pattern.count("+")]
            for pattern in itertools.product("+-", repeat=3)}


def _point_prior(prior: Mapping[str, Rational], models: Mapping[str, Model]) -> dict[str, Fraction]:
    if not isinstance(prior, Mapping) or not isinstance(models, Mapping):
        raise TypeError("Point-model prior and model collection must be mappings.")
    if not 1 <= len(models) <= MAX_MODELS or set(prior) != set(models):
        raise ValueError(f"Use matching nonempty prior/model keys, at most {MAX_MODELS} models.")
    for name, model in models.items():
        if not isinstance(name, str) or not 1 <= len(name) <= 40:
            raise ValueError("Model names must be strings with 1..40 characters.")
        _model(model)
    probabilities = {name: rational(weight) for name, weight in prior.items()}
    if any(not 0 <= p <= 1 for p in probabilities.values()) or sum(probabilities.values(), Fraction(0)) != 1:
        raise ValueError("Declared point-model prior probabilities must be nonnegative and sum exactly to one.")
    return probabilities


def update_models(prior: Mapping[str, Rational], models: Mapping[str, Model], event: str) -> dict[str, object]:
    """Update proper point-model weights BEFORE averaging same-item classification.

    Supply the full same-item event relative to the declared calibration prior.
    Extending '+-' with '+' uses the full '+-+' likelihood, not the marginal
    likelihood of '+' on a fresh item applied after a same-item pair update.
    """
    prior, event = _point_prior(prior, models), _event(event)
    likelihoods = {name: event_probability(model, event) for name, model in models.items()}
    evidence = sum((prior[name] * likelihoods[name] for name in models), Fraction(0))
    if not evidence:
        raise ValueError("Model-averaged conditional probability is undefined: the event has zero prior predictive probability.")
    weights = {name: prior[name] * likelihoods[name] / evidence for name in models}
    classifications = {name: defect_given(model, event) if likelihoods[name] else None for name, model in models.items()}
    average = sum((prior[name] * model.pi * _class_event_probability(model.s, event)
                   for name, model in models.items()), Fraction(0)) / evidence
    return {"event": event, "weights_before": prior, "weights_after": weights,
            "event_likelihoods": likelihoods, "event_evidence": evidence,
            "classification_by_model": classifications,
            "classification_status_by_model": {name: "defined" if likelihoods[name] else "undefined" for name in models},
            "model_average_defect": average}


def _dataset(counts: Mapping[str, int]) -> dict[str, int]:
    if not isinstance(counts, Mapping):
        raise TypeError("Dataset must map ordered '+'/'-' patterns to item counts.")
    validated = {_event(event): _integer(count, "Item count", 0, MAX_ITEMS) for event, count in counts.items()}
    if sum(validated.values()) > MAX_ITEMS:
        raise ValueError(f"Dataset has more than {MAX_ITEMS} independent items.")
    return validated


def dataset_likelihood(model: Model, counts: Mapping[str, int], *, include_multinomial: bool = False) -> Fraction:
    """Likelihood for independent items, each with its own within-item pattern.

    Default omits the count-aggregation coefficient, corresponding to any one
    fixed assignment of those patterns to labeled independent items. A requested
    multinomial coefficient requires a common repeat count across categories.
    """
    model, counts = _model(model), _dataset(counts)
    if not isinstance(include_multinomial, bool):
        raise TypeError("include_multinomial must be a bool.")
    if include_multinomial and len({len(event) for event, count in counts.items() if count}) > 1:
        raise ValueError("One multinomial coefficient requires the same repeat count on every item.")
    likelihood = Fraction(1)
    for event, count in counts.items():
        likelihood *= event_probability(model, event) ** count
    if include_multinomial:
        coefficient = factorial(sum(counts.values()))
        for count in counts.values():
            coefficient //= factorial(count)
        likelihood *= coefficient
    return likelihood


def update_dataset(prior: Mapping[str, Rational], models: Mapping[str, Model], counts: Mapping[str, int]) -> dict[str, object]:
    """Update model calibration from independent-item data, without classifying a new item."""
    prior = _point_prior(prior, models)
    counts = _dataset(counts)
    likelihoods = {name: dataset_likelihood(model, counts) for name, model in models.items()}
    evidence = sum((prior[name] * likelihoods[name] for name in models), Fraction(0))
    if not evidence:
        raise ValueError("Dataset has zero prior predictive probability.")
    return {"counts": counts, "items": sum(counts.values()), "weights_before": prior,
            "model_likelihoods": likelihoods, "evidence": evidence,
            "weights_after": {name: prior[name] * likelihoods[name] / evidence for name in models}}


A = Model(Fraction(1, 5), Fraction(4, 5), Fraction(1, 10))
B = Model(Fraction(9, 25), Fraction(46, 75), Fraction(3, 100))
POINT_MODELS = {"A": A, "B": B}
POINT_PRIOR = {"A": Fraction(1, 2), "B": Fraction(1, 2)}
FAMILY_MODELS = {"s-min": pair_family_model(Fraction(17, 30)), "A": A, "B": B,
                 "s3-4": pair_family_model(Fraction(3, 4)), "s-max": pair_family_model(1)}
FAMILY_LABELS = {"s-min": "Minimum sensitivity: s=17/30, f=0", "A": "Calibration A",
                 "B": "Calibration B", "s3-4": "Interior calibration: s=3/4",
                 "s-max": "Maximum sensitivity: s=1"}


def family_payload(name: str = "A") -> dict[str, object]:
    if not isinstance(name, str) or name not in FAMILY_MODELS:
        raise ValueError("Choose family model s-min, A, B, s3-4, or s-max.")
    model = FAMILY_MODELS[name]
    probabilities = {event: event_probability(model, event) for event in EVENTS}
    return {"key": name, "label": FAMILY_LABELS[name], "parameters": {"pi": model.pi, "s": model.s, "f": model.f},
            "pair_law": law(model, 2), "triple_law": law(model, 3), **moments(model),
            "classification_by_event": {event: defect_given(model, event) if probabilities[event] else None for event in EVENTS},
            "classification_status_by_event": {event: "defined" if probabilities[event] else "undefined" for event in EVENTS}}


def explorer_payload() -> dict[str, object]:
    pair_data = update_dataset(POINT_PRIOR, POINT_MODELS, {"++": 17, "+-": 13, "-+": 13, "--": 82})
    pair_data.update({"finite_sample": True, "same_pair_law_for_A_and_B": law(A) == law(B),
                      "same_likelihood_for_every_pair_dataset": law(A) == law(B)})
    invalid = triple_inverse(Fraction(6, 25), Fraction(17, 125), Fraction(3, 40))
    invalid_law = triple_law_from_moments(Fraction(6, 25), Fraction(17, 125), Fraction(3, 40))
    counts = {event: int(probability * 1000) for event, probability in invalid_law.items()}
    invalid.update({"triple_law": invalid_law, "valid_exchangeable_triple_law": all(p >= 0 for p in invalid_law.values()) and sum(invalid_law.values()) == 1,
                    "illustrative_finite_counts": counts,
                    "finite_counts_positive_likelihood": {name: dataset_likelihood(model, counts) > 0 for name, model in POINT_MODELS.items()},
                    "finite_counts_are_exact_population_moments": False})
    bounds = third_moment_bounds(Fraction(6, 25), Fraction(17, 125))
    bounds.update({"prevalence_lower": Fraction(49, 410), "prevalence_upper": Fraction(36, 85),
                   "discordant_defect_lower": Fraction(0), "discordant_defect_upper": Fraction(1),
                   "s_lower": Fraction(17, 30), "s_upper": Fraction(1)})
    return {"default_model": "A", "default_event": "+-", "events": EVENTS,
            "family_models": {name: family_payload(name) for name in FAMILY_MODELS},
            "point_model_updates": {event: update_models(POINT_PRIOR, POINT_MODELS, event) for event in EVENTS},
            "pair_dataset": pair_data, "moment_bounds": bounds, "invalid_triple": invalid,
            "irrational_inverse": triple_inverse(Fraction(1, 2), Fraction(1, 3), Fraction(1, 4)),
            "closure_note": "v=0 is outside the strict model. In an enlarged closure, constant propensity can arise from f=s or a zero-weight class; unused calibration is not identified.",
            "scope": "Independent items, stable conditionally independent repeats given one fixed latent state per item, f<s orientation, declared proper point prior. Exact population laws and finite observations are different inputs."}


def json_payload(value: object | None = None) -> str:
    return json.dumps(explorer_payload() if value is None else value, default=str, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--family", choices=FAMILY_MODELS, default="A")
    parser.add_argument("--event", choices=EVENTS, default="+-")
    parser.add_argument("--all", action="store_true", help="Print the five bounded family models and all fixtures.")
    parser.add_argument("--json", action="store_true", help="Print exact fractions and symbolic inverse roots as JSON.")
    args = parser.parse_args()
    report = explorer_payload() if args.all else {"family_model": family_payload(args.family),
             "selected_event": args.event, "point_model_update": update_models(POINT_PRIOR, POINT_MODELS, args.event)}
    if not args.json:
        print("Repeated inspection: exact ordered-pattern laws and latent classification.")
        print("One observed triple does not supply an exact population moment.")
    print(json_payload(report))


if __name__ == "__main__":
    main()
