"""Exact, bounded case/control examples for a mathematical sampling lesson.

X and Y are binary labels.  This module makes no medical or causal claim.
The known-source selection illustration and the fixed-quota posterior are
separate experiments.  No random numbers or external packages are used.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from decimal import Decimal, localcontext
from fractions import Fraction
from math import comb, factorial
import json
import re

CELL_ORDER = ("x0_y1", "x0_y0", "x1_y1", "x1_y0")
SOURCE_COUNTS = (6, 54, 15, 45)
RATIOS = (1, 3, 9)
COUNTS = {"main": (21, 15, 11, 5), "changed-counts": (6, 4, 4, 1)}


def exact(value: int | Fraction | str) -> Fraction:
    """Accept bounded exact values; floats, booleans and decimal strings fail."""
    if type(value) is int or isinstance(value, Fraction):
        result = Fraction(value)
    elif type(value) is str and len(value) <= 80 and re.fullmatch(r"[+-]?\d+(?:/[1-9]\d*)?", value):
        result = Fraction(value)
    else:
        raise TypeError("Use an integer, Fraction, or rational string; floats and booleans are not accepted")
    if max(abs(result.numerator).bit_length(), result.denominator.bit_length()) > 128:
        raise ValueError("Exact inputs are limited to 128-bit numerators and denominators")
    return result


def probability(value: int | Fraction | str) -> Fraction:
    result = exact(value)
    if not 0 <= result <= 1:
        raise ValueError("A probability must be between zero and one")
    return result


@dataclass(frozen=True)
class Beta:
    """Small positive integer/half-integer shapes used by the named examples."""

    alpha: Fraction
    beta: Fraction

    def __post_init__(self) -> None:
        for name in ("alpha", "beta"):
            value = exact(getattr(self, name))
            if not 0 < value <= 64 or value.denominator not in (1, 2):
                raise ValueError("Beta shapes must be positive integers or half-integers at most 64")
            object.__setattr__(self, name, value)

    @property
    def mean(self) -> Fraction:
        return self.alpha / (self.alpha + self.beta)

    @property
    def odds_mean(self) -> Fraction:
        if self.beta <= 1:
            raise ValueError("The odds mean is not finite when beta is at most one")
        return self.alpha / (self.beta - 1)

    @property
    def inverse_odds_mean(self) -> Fraction:
        if self.alpha <= 1:
            raise ValueError("The inverse-odds mean is not finite when alpha is at most one")
        return self.beta / (self.alpha - 1)

    def parameters(self) -> dict[str, Fraction]:
        return {"alpha": self.alpha, "beta": self.beta}

    def label(self) -> str:
        return f"Beta({self.alpha}, {self.beta})"


def integer_beta_integral(alpha: int, beta: int) -> Fraction:
    if type(alpha) is not int or type(beta) is not int:
        raise TypeError("Integer Beta integral shapes must be integers")
    if not 1 <= alpha <= 256 or not 1 <= beta <= 256 or alpha + beta > 256:
        raise ValueError("Integer Beta integral shapes exceed the bounded computation")
    return Fraction(factorial(alpha - 1) * factorial(beta - 1), factorial(alpha + beta - 1))


def probability_a_gt_b(a: Beta, b: Beta) -> Fraction:
    """Exact P(a>b), hence P(OR>1), for bounded independent integer Betas.

    Integrate the Bernstein-form survival polynomial of a against b's
    density.  Arbitrary OR thresholds are intentionally not an API: their
    exact tails need logarithms even for independent uniform Betas.
    """
    if not isinstance(a, Beta) or not isinstance(b, Beta):
        raise TypeError("Expected two independent Beta parameter records")
    shapes = (a.alpha, a.beta, b.alpha, b.beta)
    if any(value.denominator != 1 for value in shapes):
        raise ValueError("The exact finite tail calculation requires integer shapes")
    alpha, beta, gamma, delta = (int(value) for value in shapes)
    n = alpha + beta - 1
    normalizer = integer_beta_integral(gamma, delta)
    return sum((comb(n, j) * integer_beta_integral(gamma + j, delta + n - j) / normalizer
                for j in range(alpha)), Fraction())


def _named_counts(case: str) -> tuple[int, int, int, int]:
    if type(case) is not str or case not in COUNTS:
        raise ValueError("Choose the fixed main or changed-counts example")
    return COUNTS[case]


def quota_likelihood(a: int | Fraction | str, b: int | Fraction | str, case: str = "main") -> Fraction:
    """Probability of the two unordered exposure counts, conditional on quotas.

    There is no prevalence argument: the case/control totals were fixed by
    design, so their ratio contributes no prevalence likelihood.
    """
    a, b = probability(a), probability(b)
    cases, exposed_cases, controls, exposed_controls = _named_counts(case)
    return (comb(cases, exposed_cases) * a ** exposed_cases * (1 - a) ** (cases - exposed_cases)
            * comb(controls, exposed_controls) * b ** exposed_controls * (1 - b) ** (controls - exposed_controls))


def posterior_summary(case: str = "main", *, unfiltered_y: bool = False) -> dict:
    """Independent uniform exposure priors; independent prevalence Beta(2,2).

    The optional update is exactly ten new, unfiltered Y-only observations,
    six of them positive.  It leaves both exposure posteriors unchanged.
    """
    if type(unfiltered_y) is not bool:
        raise TypeError("unfiltered_y must be a boolean selecting the one named additional experiment")
    cases, exposed_cases, controls, exposed_controls = _named_counts(case)
    a = Beta(exposed_cases + 1, cases - exposed_cases + 1)
    b = Beta(exposed_controls + 1, controls - exposed_controls + 1)
    prior_pi, posterior_pi = Beta(2, 2), Beta(8, 6) if unfiltered_y else Beta(2, 2)
    plugin = (a.mean / (1 - a.mean)) / (b.mean / (1 - b.mean))
    return {"case": case,
            "counts": {"cases": cases, "exposed_cases": exposed_cases,
                       "controls": controls, "exposed_controls": exposed_controls},
            "posterior_a": a.parameters(), "posterior_b": b.parameters(),
            "prevalence_prior": prior_pi.parameters(), "prevalence_posterior": posterior_pi.parameters(),
            "prevalence_updated": unfiltered_y,
            "additional_unfiltered_y": {"records": 10, "positive": 6} if unfiltered_y else None,
            "posterior_independence": "a, b and pi remain independent under the stated product prior and observation mechanism",
            "mean_odds_ratio": a.odds_mean * b.inverse_odds_mean,
            "plugin_odds_ratio": plugin,
            "prob_odds_ratio_above_one": probability_a_gt_b(a, b),
            "quota_count_evidence": Fraction(1, (cases + 1) * (controls + 1))}


def odds_ratio_from_cells(cells: dict) -> Fraction:
    if type(cells) is not dict or set(cells) != set(CELL_ORDER):
        raise ValueError("Use exactly the four named X/Y cells")
    values = {name: exact(cells[name]) for name in CELL_ORDER}
    if any(value <= 0 for value in values.values()):
        raise ValueError("All four cells must be positive for the finite odds ratio")
    return values["x1_y1"] * values["x0_y0"] / (values["x1_y0"] * values["x0_y1"])


def selection_summary(ratio: int) -> dict:
    """Known-source illustration: accept Y=1 at one, Y=0 at 1/ratio.

    This reweighted known population is not a posterior estimate of the
    unknown source population in the separate fixed-quota experiment.
    """
    if type(ratio) is not int:
        raise TypeError("The inclusion ratio must be an integer")
    if ratio not in RATIOS:
        raise ValueError("The known-source presets are exactly 1, 3 and 9")
    source = {name: Fraction(count, 120) for name, count in zip(CELL_ORDER, SOURCE_COUNTS)}
    accepted = {name: value * (1 if name.endswith("y1") else Fraction(1, ratio)) for name, value in source.items()}
    selection_probability = sum(accepted.values(), Fraction())
    selected = {name: value / selection_probability for name, value in accepted.items()}
    source_risks, selected_risks = {}, {}
    for x in ("x0", "x1"):
        source_risks[x] = source[x + "_y1"] / (source[x + "_y1"] + source[x + "_y0"])
        selected_risks[x] = selected[x + "_y1"] / (selected[x + "_y1"] + selected[x + "_y0"])
    return {"ratio": ratio, "source_cells": source, "selected_cells": selected,
            "case_inclusion": Fraction(1), "control_inclusion": Fraction(1, ratio),
            "selection_probability": selection_probability,
            "source_risks": source_risks, "selected_risks": selected_risks,
            "source_odds_ratio": odds_ratio_from_cells(source), "selected_odds_ratio": odds_ratio_from_cells(selected),
            "case_exposure": selected["x1_y1"] / (selected["x0_y1"] + selected["x1_y1"]),
            "control_exposure": selected["x1_y0"] / (selected["x0_y0"] + selected["x1_y0"]),
            "source_prevalence": source["x0_y1"] + source["x1_y1"],
            "selected_prevalence": selected["x0_y1"] + selected["x1_y1"]}


def gamma_coupling(g11: int | Fraction | str, g01: int | Fraction | str,
                   g10: int | Fraction | str, g00: int | Fraction | str) -> dict:
    """A deterministic identity for four positive Gamma coordinates.

    For the main OR law the independent same-rate Gamma shapes are 16,7,6,7.
    The prospective-coordinate Betas are 16,6 and 7,7.  Equality of this OR
    draw by draw proves equality of its whole distribution.  Those coordinates
    are not source-risk posteriors: normalized Gammas impose pi~Beta(23,13),
    whereas the fixed-quota model retains its independent prevalence prior.
    """
    x, y, z, w = (exact(value) for value in (g11, g01, g10, g00))
    if min(x, y, z, w) <= 0:
        raise ValueError("Gamma coordinates must all be positive")
    a, b = x / (x + y), z / (z + w)
    q1, q0 = x / (x + z), y / (y + w)
    return {"retrospective_a": a, "retrospective_b": b,
            "prospective_q1": q1, "prospective_q0": q0,
            "retrospective_odds_ratio": a * (1 - b) / ((1 - a) * b),
            "prospective_odds_ratio": q1 * (1 - q0) / ((1 - q1) * q0),
            "cross_product": x * w / (y * z),
            "normalized_gamma_prevalence": (x + y) / (x + y + z + w)}


def half_prior_reference() -> dict:
    """Half-priors are different from the main priors, not intrinsically wrong.

    Prospective Beta(1/2,1/2) priors give the same OR law as retrospective
    half-priors from the compatible Dirichlet-half construction.  Their law
    differs from the main uniform/Dirichlet-one law.
    """
    q1, q0 = Beta(Fraction(31, 2), Fraction(11, 2)), Beta(Fraction(13, 2), Fraction(13, 2))
    a, b = Beta(Fraction(31, 2), Fraction(13, 2)), Beta(Fraction(11, 2), Fraction(13, 2))
    return {"prospective_q1": q1.parameters(), "prospective_q0": q0.parameters(),
            "compatible_retrospective_a": a.parameters(), "compatible_retrospective_b": b.parameters(),
            "prospective_mean_odds_ratio": q1.odds_mean * q0.inverse_odds_mean,
            "compatible_retrospective_mean_odds_ratio": a.odds_mean * b.inverse_odds_mean,
            "scope": "Compare like priors: the half-prior law matches its compatible half-prior analysis, not the main uniform-prior law."}


def selected_control_exposure(b: int | Fraction | str) -> Fraction:
    b = probability(b)
    return 3 * b / (1 + 2 * b)


def advanced_selector_likelihood(a: int | Fraction | str, b: int | Fraction | str) -> Fraction:
    """Ordered cases X1 then X0; first accepted control X1, hidden rejections.

    Each independent control proposal gets a uniform ticket in {1,...,9}; an
    exposed proposal accepts tickets 1 through 3 and an unexposed one only
    ticket 1. Acceptance is (1+2b)/9, so hiding rejections gives 3b/(1+2b).
    A three-ticket design with exposed proposals accepting every ticket has
    the same accepted-type law, but a different waiting-time distribution.
    This is a separate changed experiment under fresh independent uniforms.
    """
    a = probability(a)
    return a * (1 - a) * selected_control_exposure(b)


def advanced_selector_reference() -> dict:
    """Exact symbolic logarithmic references plus explicitly approximate aids."""
    with localcontext() as context:
        context.prec = 80
        log3 = Decimal(3).ln()
        denominator = Decimal(2) - log3
        return {"posterior_a": "Beta(2, 2)", "posterior_b_is_beta": False,
                "normalizer_b_exact": "(3/4)*(2-ln(3))", "normalizer_total_exact": "(1/8)*(2-ln(3))",
                "mean_b_exact": "ln(3)/(2*(2-ln(3)))",
                "mean_odds_ratio_exact": "2*(3*ln(3)-2)/(2-ln(3))",
                "prob_odds_ratio_above_one_exact": "1/(3*(2-ln(3)))",
                "normalizer_b_decimal": Decimal(3) / 4 * denominator,
                "normalizer_total_decimal": denominator / 8,
                "mean_b_decimal": log3 / (2 * denominator),
                "mean_odds_ratio_decimal": 2 * (3 * log3 - 2) / denominator,
                "prob_odds_ratio_above_one_decimal": 1 / (3 * denominator),
                "scope": "Fresh uniform a,b priors and the ordered hidden-rejection protocol; no part of the browser explorer."}


def explorer_payload() -> dict:
    """Only R=1,3,9 known-source presets; the fixed-quota inference is static."""
    cases = {}
    for ratio in RATIOS:
        summary = selection_summary(ratio)
        cases[str(ratio)] = {
            "ratio": ratio,
            "description": f"Known source: Y=1 inclusion is 1 and Y=0 inclusion is 1/{ratio}; this is separate from the fixed 21/11 quota posterior.",
            "source_risk_x0": summary["source_risks"]["x0"], "source_risk_x1": summary["source_risks"]["x1"],
            "selected_risk_x0": summary["selected_risks"]["x0"], "selected_risk_x1": summary["selected_risks"]["x1"],
            "source_odds_ratio": summary["source_odds_ratio"], "selected_odds_ratio": summary["selected_odds_ratio"],
            "source_prevalence": summary["source_prevalence"], "selected_prevalence": summary["selected_prevalence"],
            "selection_rows": [{"x": str(x), "source_risk": summary["source_risks"][f"x{x}"],
                                "selected_risk": summary["selected_risks"][f"x{x}"],
                                "selected_odds": summary["selected_risks"][f"x{x}"] / (1 - summary["selected_risks"][f"x{x}"])}
                               for x in (0, 1)]}
    posterior = posterior_summary()
    return {"cases": cases, "inference": {"posterior_a": "Beta(16, 7)", "posterior_b": "Beta(6, 7)",
            "posterior_pi": "Beta(2, 2)", "mean_odds_ratio": posterior["mean_odds_ratio"],
            "plugin_odds_ratio": posterior["plugin_odds_ratio"],
            "prob_odds_ratio_above_one": posterior["prob_odds_ratio_above_one"]}}


def jsonable(value):
    if isinstance(value, (Fraction, Decimal)):
        return str(value)
    if isinstance(value, dict):
        return {key: jsonable(item) for key, item in value.items()}
    if isinstance(value, (list, tuple)):
        return [jsonable(item) for item in value]
    return value


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--case", choices=("main", "source-presets", "changed-counts", "prevalence-update", "half-prior", "advanced-selector"), default="main")
    selected = parser.parse_args().case
    if selected == "source-presets":
        report = {str(ratio): selection_summary(ratio) for ratio in RATIOS}
    elif selected == "half-prior":
        report = half_prior_reference()
    elif selected == "advanced-selector":
        report = advanced_selector_reference()
    else:
        report = posterior_summary("changed-counts" if selected in ("changed-counts", "prevalence-update") else "main",
                                   unfiltered_y=selected == "prevalence-update")
    print(json.dumps(jsonable(report), indent=2, allow_nan=False))


if __name__ == "__main__":
    main()
