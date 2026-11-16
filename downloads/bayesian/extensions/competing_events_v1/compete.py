"""Bayesian first-exit probabilities for a three-state engineering model.

The system starts working and has two absorbing first-exit causes. Conditional
on constant cause-specific hazards lambda1 and lambda2, survival is
exp[-t(lambda1+lambda2)] and the cause-j incidence is the integral of survival
times lambda_j. These are transition intensities; the model does not require
identifiable, independent latent failure times for the two causes.

Independent Gamma(shape, RATE) priors update from observed first exits and
independent administrative right censoring. Exposure stops at the first exit
or censoring time. Actual cause incidence uses BOTH hazards. A cause-only net
risk describes a different hypothetical target.

Integer Gamma shapes make predictive survival rational. Incidences at rational
times and rates are exact rational-plus-log expressions, integrated by rational
partial fractions. Decimal output uses adaptive guard precision; binary floats,
quadrature, and simulation do not enter the scientific calculation. Common-rate
Gamma--Beta factorization is used only when the two Gamma rates are equal.

Calculator limits (not model restrictions): shapes 1..32, at most 128 records,
rates 1/1000..10000, exposure/horizon 0..1000, parameter denominators <= 10**6.
Time is measured in the same fixed unit as inverse hazard (weeks in the lesson).
"""
from __future__ import annotations

import argparse
from collections.abc import Sequence
from dataclasses import dataclass
from decimal import Decimal, localcontext
from fractions import Fraction
import json
from math import comb
import re

Rational = Fraction | int | str
MAX_SHAPE = 32
MAX_RECORDS = 128
MAX_TIME = Fraction(1000)
MAX_DENOMINATOR = 1_000_000


def rational(value: Rational) -> Fraction:
    """Read exact input while refusing floats, booleans, and oversized strings."""
    if isinstance(value, bool) or not isinstance(value, (Fraction, int, str)):
        raise TypeError("Use an integer, Fraction, or decimal/fraction string.")
    if isinstance(value, str) and len(value) > 256:
        raise ValueError("Exact-input strings must have at most 256 characters.")
    if isinstance(value, str):
        exponent = re.search(r"[eE]([+-]?\d(?:_?\d)*)\s*$", value)
        if exponent and abs(int(exponent.group(1).replace("_", ""))) > 1000:
            raise ValueError("Decimal-string exponents must lie in [-1000, 1000].")
    result = Fraction(value)
    if max(result.numerator.bit_length(), result.denominator.bit_length()) > 8192:
        raise ValueError("Exact inputs must use at most 8192 bits per integer.")
    return result


def _integer(value: int, name: str, lower: int, upper: int) -> int:
    if isinstance(value, bool) or not isinstance(value, int):
        raise TypeError(f"{name} must be an integer.")
    if not lower <= value <= upper:
        raise ValueError(f"{name} must lie in [{lower}, {upper}].")
    return value


def _parameter(value: Rational, name: str) -> Fraction:
    result = rational(value)
    if result.denominator > MAX_DENOMINATOR:
        raise ValueError(f"{name} denominator must be at most {MAX_DENOMINATOR}.")
    return result


def _time(value: Rational, name: str = "Horizon") -> Fraction:
    result = _parameter(value, name)
    if not 0 <= result <= MAX_TIME:
        raise ValueError(f"{name} must lie in [0, {MAX_TIME}].")
    return result


def _decimal_fraction(value: Fraction) -> Decimal:
    return Decimal(value.numerator) / Decimal(value.denominator)


@dataclass(frozen=True)
class Gamma:
    """A proper integer-shape Gamma law, using RATE rather than scale."""

    shape: int
    rate: Fraction

    def __post_init__(self) -> None:
        _integer(self.shape, "Gamma shape", 1, MAX_SHAPE)
        rate = _parameter(self.rate, "Gamma rate")
        if not Fraction(1, 1000) <= rate <= 10000:
            raise ValueError("Gamma rate must lie in [1/1000, 10000].")
        object.__setattr__(self, "rate", rate)

    @property
    def mean(self) -> Fraction:
        return Fraction(self.shape) / self.rate


def _gamma(value: Gamma) -> Gamma:
    if not isinstance(value, Gamma):
        raise TypeError("Each hazard law must be a Gamma instance.")
    return value


@dataclass(frozen=True)
class ExactLog:
    """Exact rational + sum(coefficient * ln(argument)), with positive arguments.

    Arguments below one are inverted and their coefficient negated. Equal
    arguments combine. Opposite coefficients on two logs combine through
    ln(x)-ln(y)=ln(x/y), which exposes the lesson's ln(25/24) expression.
    """

    rational: Fraction = Fraction(0)
    logs: tuple[tuple[Fraction, Fraction], ...] = ()

    def __post_init__(self) -> None:
        constant = rational(self.rational)
        combined: dict[Fraction, Fraction] = {}
        for coefficient, argument in self.logs:
            coefficient, argument = rational(coefficient), rational(argument)
            if argument <= 0:
                raise ValueError("Logarithm arguments must be positive.")
            if argument < 1:
                coefficient, argument = -coefficient, 1 / argument
            if coefficient and argument != 1:
                combined[argument] = combined.get(argument, Fraction(0)) + coefficient
        terms = sorted((c, a) for a, c in combined.items() if c)
        if len(terms) == 2 and terms[0][0] == -terms[1][0]:
            (coefficient, first), (_, second) = terms
            argument = first / second
            if argument < 1:
                coefficient, argument = -coefficient, 1 / argument
            terms = [(coefficient, argument)] if argument != 1 else []
        object.__setattr__(self, "rational", constant)
        object.__setattr__(self, "logs", tuple(sorted(terms, key=lambda term: term[1])))

    def __add__(self, other: ExactLog | Rational) -> ExactLog:
        other = other if isinstance(other, ExactLog) else ExactLog(rational(other))
        return ExactLog(self.rational + other.rational, self.logs + other.logs)

    def __radd__(self, other: Rational) -> ExactLog:
        return self + other

    def __neg__(self) -> ExactLog:
        return ExactLog(-self.rational, tuple((-c, a) for c, a in self.logs))

    def __sub__(self, other: ExactLog | Rational) -> ExactLog:
        return self + -(other if isinstance(other, ExactLog) else ExactLog(rational(other)))

    def __rsub__(self, other: Rational) -> ExactLog:
        return -self + other

    def __mul__(self, other: Rational) -> ExactLog:
        multiplier = rational(other)
        return ExactLog(self.rational * multiplier, tuple((c * multiplier, a) for c, a in self.logs))

    def __rmul__(self, other: Rational) -> ExactLog:
        return self * other

    def decimal(self, precision: int = 40) -> Decimal:
        """Evaluate with enough guard digits for large cancelling coefficients.

        A coefficient-magnitude bound supplies initial guard precision. The
        rounded answer must then agree at two successive working precisions;
        otherwise precision grows again, up to four comparisons. Failure is
        explicit rather than returning a silently unstable probability.
        """
        precision = _integer(precision, "Decimal precision", 10, 120)
        coefficients = (self.rational,) + tuple(c for c, _ in self.logs)
        magnitude = max((len(str(abs(c.numerator))) - len(str(c.denominator)) + 2
                         for c in coefficients if c), default=0)
        working = precision + max(0, magnitude) + 30

        def evaluate(digits: int) -> Decimal:
            with localcontext() as context:
                context.prec = digits
                result = _decimal_fraction(self.rational)
                for coefficient, argument in self.logs:
                    result += _decimal_fraction(coefficient) * _decimal_fraction(argument).ln()
            with localcontext() as context:
                context.prec = precision
                return +result

        previous = evaluate(working)
        for _ in range(4):
            working += 30
            current = evaluate(working)
            if previous == current:
                return current
            previous = current
        raise ArithmeticError("Exact-log decimal evaluation did not stabilize at guarded precision.")

    def expression(self) -> str:
        pieces = []
        for coefficient, argument in self.logs:
            sign = "-" if coefficient < 0 else "+"
            magnitude = abs(coefficient)
            factor = "" if magnitude == 1 else f"{magnitude} "
            pieces.append((sign, f"{factor}ln({argument})"))
        if self.rational or not pieces:
            pieces.append(("-" if self.rational < 0 else "+", str(abs(self.rational))))
        first_sign, first_text = pieces[0]
        return ("-" if first_sign == "-" else "") + first_text + "".join(
            f" {sign} {value}" for sign, value in pieces[1:])


@dataclass(frozen=True)
class Posterior:
    hazard1: Gamma
    hazard2: Gamma
    exposure: Fraction
    events: tuple[int, int]
    records: int


def posterior_update(prior1: Gamma, prior2: Gamma, times: Sequence[Rational],
                     statuses: Sequence[int]) -> Posterior:
    """Conjugate update for units' conditionally independent observed FIRST exits.

    Status 1 or 2 denotes an observed cause; 0 is independent administrative
    censoring. L is proportional to lambda1**d1 * lambda2**d2 *
    exp[-exposure*(lambda1+lambda2)]. Censoring-distribution factors are
    omitted only under the stated independent/noninformative censoring model.
    Units are independent conditional on the shared constant hazard parameters.
    """
    prior1, prior2 = _gamma(prior1), _gamma(prior2)
    if not all(isinstance(items, Sequence) and not isinstance(items, (str, bytes))
               for items in (times, statuses)):
        raise TypeError("Times and statuses must be equally sized sequences.")
    if len(times) != len(statuses) or not 0 <= len(times) <= MAX_RECORDS:
        raise ValueError(f"Use equally sized sequences of at most {MAX_RECORDS} records.")
    ts = tuple(_time(t, "Observed time") for t in times)
    causes = tuple(_integer(s, "Status", 0, 2) for s in statuses)
    exposure = sum(ts, Fraction(0))
    if exposure > MAX_TIME:
        raise ValueError(f"Total exposure must be at most {MAX_TIME}.")
    events = (causes.count(1), causes.count(2))
    return Posterior(Gamma(prior1.shape + events[0], prior1.rate + exposure),
                     Gamma(prior2.shape + events[1], prior2.rate + exposure),
                     exposure, events, len(ts))


def survival(hazard1: Gamma, hazard2: Gamma, horizon: Rational) -> Fraction:
    """Posterior predictive Pr(still working at horizon)."""
    h1, h2, t = _gamma(hazard1), _gamma(hazard2), _time(horizon)
    return (h1.rate / (h1.rate + t)) ** h1.shape * (h2.rate / (h2.rate + t)) ** h2.shape


def net_risk(hazard: Gamma, horizon: Rational) -> Fraction:
    """Cause-only net risk under hypothetical removal of the other hazard.

    Interpreting removal causally additionally requires the retained cause
    hazard to stay unchanged. This is not observed cumulative incidence.
    """
    hazard, t = _gamma(hazard), _time(horizon)
    return 1 - (hazard.rate / (hazard.rate + t)) ** hazard.shape


def incidence_integrand(hazard1: Gamma, hazard2: Gamma, time: Rational,
                        cause: int = 1) -> Fraction:
    """Exact posterior E[lambda_cause exp(-time*(lambda1+lambda2))]."""
    h1, h2, t = _gamma(hazard1), _gamma(hazard2), _time(time)
    cause = _integer(cause, "Cause", 1, 2)
    target = h1 if cause == 1 else h2
    return Fraction(target.shape) / (target.rate + t) * survival(h1, h2, t)


def partial_fraction_terms(first_power: int, second_power: int,
                           first_rate: Rational, second_rate: Rational
                           ) -> tuple[tuple[Fraction, int, Fraction], ...]:
    """Partial fractions for 1/[(u+b1)**m (u+b2)**n], b1 != b2.

    Returns (coefficient, inverse power, rate). Coefficients come from the
    finite Taylor series at each pole, not numerical linear algebra.
    """
    m = _integer(first_power, "First pole power", 1, MAX_SHAPE + 1)
    n = _integer(second_power, "Second pole power", 1, MAX_SHAPE + 1)
    b1, b2 = _parameter(first_rate, "First rate"), _parameter(second_rate, "Second rate")
    if b1 <= 0 or b2 <= 0 or b1 == b2:
        raise ValueError("Partial fractions require distinct positive rates.")
    delta = b2 - b1
    terms = []
    for power in range(1, m + 1):
        j = m - power
        coefficient = Fraction((-1) ** j * comb(n + j - 1, j)) / delta ** (n + j)
        terms.append((coefficient, power, b1))
    for power in range(1, n + 1):
        j = n - power
        coefficient = Fraction((-1) ** j * comb(m + j - 1, j)) / (-delta) ** (m + j)
        terms.append((coefficient, power, b2))
    return tuple(terms)


def cause_incidence(hazard1: Gamma, hazard2: Gamma, horizon: Rational,
                    cause: int = 1) -> ExactLog:
    """Integrate one cause's CIF directly, including unequal posterior rates."""
    h1, h2, t = _gamma(hazard1), _gamma(hazard2), _time(horizon)
    cause = _integer(cause, "Cause", 1, 2)
    if not t:
        return ExactLog()
    if cause == 2:
        h1, h2 = h2, h1
    if h1.rate == h2.rate:
        return ExactLog(Fraction(h1.shape, h1.shape + h2.shape) * (1 - survival(h1, h2, t)))
    normalizer = h1.shape * h1.rate ** h1.shape * h2.rate ** h2.shape
    constant = Fraction(0)
    logs = []
    for coefficient, power, rate in partial_fraction_terms(h1.shape + 1, h2.shape, h1.rate, h2.rate):
        coefficient *= normalizer
        if power == 1:
            logs.append((coefficient, (rate + t) / rate))
        else:
            constant += coefficient * ((rate + t) ** (1 - power) - rate ** (1 - power)) / (1 - power)
    return ExactLog(constant, tuple(logs))


def predictive(hazard1: Gamma, hazard2: Gamma, horizon: Rational) -> dict[str, object]:
    """Predict first-exit states; compute F2 by the exact conservation identity."""
    h1, h2, t = _gamma(hazard1), _gamma(hazard2), _time(horizon)
    still_working = survival(h1, h2, t)
    cause1 = cause_incidence(h1, h2, t)
    cause2 = 1 - still_working - cause1
    return {"survival": ExactLog(still_working), "cause1": cause1, "cause2": cause2,
            "netrisk": ExactLog(net_risk(h1, t)),
            "probability_sum": ExactLog(still_working) + cause1 + cause2,
            "horizon": t, "shapes": (h1.shape, h2.shape), "rates": (h1.rate, h2.rate),
            "posterior_mean_hazards": (h1.mean, h2.mean),
            "common_rate_factorization": h1.rate == h2.rate}


def after_survival(hazard1: Gamma, hazard2: Gamma, elapsed: Rational,
                   further_horizon: Rational) -> dict[str, object]:
    """Forecast a surviving unit after selecting on its observed survival.

    A survivor's two Gamma rates gain elapsed exposure and its shapes do not
    change. This equals CIF differences / survival at elapsed time; averaging
    the original parameter-conditional forecasts would miss this selection.
    """
    h1, h2, elapsed = _gamma(hazard1), _gamma(hazard2), _time(elapsed, "Elapsed time")
    further = _time(further_horizon, "Further horizon")
    return predictive(Gamma(h1.shape, h1.rate + elapsed), Gamma(h2.shape, h2.rate + elapsed), further)


def fixed_hazard_prediction(hazard1: Rational, hazard2: Rational,
                             horizon: Rational, precision: int = 40) -> dict[str, Decimal]:
    """Constant known hazards, evaluated with Decimal exponentials."""
    h1, h2, t = _parameter(hazard1, "Cause-1 hazard"), _parameter(hazard2, "Cause-2 hazard"), _time(horizon)
    if h1 < 0 or h2 < 0:
        raise ValueError("Known cause hazards must be nonnegative.")
    precision = _integer(precision, "Decimal precision", 10, 120)
    with localcontext() as context:
        context.prec = precision + 20
        total = h1 + h2
        s = (-_decimal_fraction(total * t)).exp()
        f1 = _decimal_fraction(h1 / total) * (1 - s) if total else Decimal(0)
        f2 = _decimal_fraction(h2 / total) * (1 - s) if total else Decimal(0)
        net = 1 - (-_decimal_fraction(h1 * t)).exp()
        context.prec = precision
        return {"survival": +s, "cause1": +f1, "cause2": +f2, "netrisk": +net}


def exact_record(value: ExactLog | Rational) -> dict[str, object]:
    value = value if isinstance(value, ExactLog) else ExactLog(rational(value))
    decimal = value.decimal(40)
    with localcontext() as context:
        context.prec = 60
        decimal8 = format(decimal.quantize(Decimal("0.00000001")), "f")
    return {"expression": value.expression(), "decimal": str(decimal), "decimal8": decimal8,
            "rational": str(value.rational),
            "logs": [{"coefficient": str(c), "argument": str(a)} for c, a in value.logs]}


TIMES = (1, 2, 1, 2)
STATUSES = (1, 2, 0, 2)
SCENARIOS = {
    "main": {"label": "Equal posterior Gamma rates", "prior1": Gamma(1, 2), "prior2": Gamma(1, 2)},
    "changed": {"label": "Changed cause-2 prior rate", "prior1": Gamma(1, 2), "prior2": Gamma(1, 4)},
}
HORIZONS = (1, 2, 4)


def scenario_payload(name: str = "main", horizon: int = 2) -> dict[str, object]:
    if not isinstance(name, str):
        raise TypeError("Scenario must be 'main' or 'changed'.")
    if name not in SCENARIOS:
        raise ValueError("Scenario must be 'main' or 'changed'.")
    horizon = _integer(horizon, "Explorer horizon", 1, 4)
    if horizon not in HORIZONS:
        raise ValueError("Explorer horizon must be 1, 2, or 4.")
    scenario = SCENARIOS[name]
    posterior = posterior_update(scenario["prior1"], scenario["prior2"], TIMES, STATUSES)
    report = predictive(posterior.hazard1, posterior.hazard2, horizon)
    return {"key": f"{name}-t{horizon}", "scenario": name, "scenario_label": scenario["label"],
            **{key: exact_record(value) if isinstance(value, ExactLog) else value for key, value in report.items()},
            "exposure": posterior.exposure, "events": posterior.events,
            "prior_shapes": (scenario["prior1"].shape, scenario["prior2"].shape),
            "prior_rates": (scenario["prior1"].rate, scenario["prior2"].rate)}


def explorer_payload() -> dict[str, object]:
    return {"default_case": "main-t2", "horizons": HORIZONS,
            "scenarios": {name: value["label"] for name, value in SCENARIOS.items()},
            "cases": {f"{name}-t{t}": scenario_payload(name, t) for name in SCENARIOS for t in HORIZONS},
            "data": {"times": TIMES, "statuses": STATUSES, "exposure": Fraction(6), "events": (1, 2)},
            "scope": "Constant hazards with independent Gamma priors; units conditionally independent given hazards; independent administrative censoring; absorbing first exits; fixed week unit."}


def json_payload(value: object | None = None) -> str:
    return json.dumps(explorer_payload() if value is None else value, default=str, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--scenario", choices=SCENARIOS, default="main")
    parser.add_argument("--horizon", choices=HORIZONS, type=int, default=2)
    parser.add_argument("--all", action="store_true", help="Print all six bounded explorer cases.")
    parser.add_argument("--json", action="store_true", help="Print machine-readable exact expressions and guarded decimals.")
    args = parser.parse_args()
    try:
        report = explorer_payload() if args.all else scenario_payload(args.scenario, args.horizon)
    except (TypeError, ValueError, ZeroDivisionError, ArithmeticError) as error:
        parser.error(str(error))
    if not args.json:
        print("First-exit prediction; Gamma parameters are shape and rate.")
        print("Actual cause incidence includes both cause hazards; net risk is a different target.")
    print(json_payload(report))


if __name__ == "__main__":
    main()
