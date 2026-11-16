"""Exact size-informed sampling from four fixed groups.

One population hypothesis is chosen once and persists through all proposals
and the future target draw. A group has size 1 or m, with member outcome risk
1/4 or 3/4 respectively. These are predictive risks, not realized fractions of
events in the finite groups. A future uniform-group draw followed by a uniform
member draw is different from a uniform draw among all population members.

Proposals choose groups uniformly WITH replacement and an independent uniform
ticket in 1..m. Small groups accept ticket 1; large groups accept every ticket.
An accepted type with unrecorded failures and a complete recorded rejection
trace have different likelihoods. Only accepted L/S enters the UI payload.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from fractions import Fraction
import json
import re

Rational = Fraction | int | str
GROUP_COUNT = 4
SMALL_SIZE = 1
SMALL_RISK = Fraction(1, 4)
LARGE_RISK = Fraction(3, 4)
MAX_TRACE_LENGTH = 8


def rational(value: Rational) -> Fraction:
    """Parse exact inputs, rejecting floats/bools and excessive arithmetic."""
    if isinstance(value, bool) or not isinstance(value, (Fraction, int, str)):
        raise TypeError("Use an integer, Fraction, or decimal/fraction string.")
    if isinstance(value, str):
        if len(value) > 256:
            raise ValueError("Exact-input strings must have at most 256 characters.")
        exponent = re.search(r"[eE]([+-]?\d(?:_?\d)*)\s*$", value)
        if exponent and abs(int(exponent.group(1).replace("_", ""))) > 1000:
            raise ValueError("Decimal-string exponents must lie in [-1000, 1000].")
    result = Fraction(value)
    if max(result.numerator.bit_length(), result.denominator.bit_length()) > 4096:
        raise ValueError("Exact inputs must use at most 4096 bits per integer.")
    return result


@dataclass(frozen=True)
class Population:
    """Four fixed groups: 4*r large and 4*(1-r) small; large size is 2 or 3."""

    r: Rational
    large_size: int = 3

    def __post_init__(self) -> None:
        r = rational(self.r)
        if not 0 <= r <= 1 or (GROUP_COUNT * r).denominator != 1:
            raise ValueError("r must be 0, 1/4, 1/2, 3/4, or 1 for four actual groups.")
        if isinstance(self.large_size, bool) or not isinstance(self.large_size, int):
            raise TypeError("Large-group size must be an integer.")
        if self.large_size not in (2, 3):
            raise ValueError("This bounded calculator supports large-group sizes 2 and 3.")
        object.__setattr__(self, "r", r)

    @property
    def large_groups(self) -> int:
        return int(GROUP_COUNT * self.r)

    @property
    def small_groups(self) -> int:
        return GROUP_COUNT - self.large_groups


def _population(population: Population) -> Population:
    if not isinstance(population, Population):
        raise TypeError("Use a Population instance.")
    return population


def _symbol(value: str, allowed: tuple[str, ...], name: str) -> str:
    if not isinstance(value, str):
        raise TypeError(f"{name} must be a string.")
    if value not in allowed:
        raise ValueError(f"{name} must be one of {', '.join(allowed)}.")
    return value


def attempt_probability(population: Population, outcome: str) -> Fraction:
    """One proposal's unconditional probability: R rejection, L/S acceptance."""
    population = _population(population)
    outcome = _symbol(outcome, ("R", "L", "S"), "Attempt outcome")
    small_accept = (1 - population.r) / population.large_size
    if outcome == "L":
        return population.r
    if outcome == "S":
        return small_accept
    return (1 - population.r) - small_accept


def accepted_type_probability(population: Population, observed: str) -> Fraction:
    """First accepted type when the number of preceding failures is unrecorded.

    Conditional on each fixed hypothesis, sum over all possible failures:
    P(accepted type) = P(one-attempt accepted type) / P(one-attempt acceptance).
    Every declared population has strictly positive acceptance probability.
    """
    population = _population(population)
    observed = _symbol(observed, ("L", "S"), "Accepted type")
    acceptance = attempt_probability(population, "L") + attempt_probability(population, "S")
    return attempt_probability(population, observed) / acceptance


def recorded_trace_probability(population: Population, trace: str) -> Fraction:
    """Complete R...R(L or S) history through the FIRST acceptance.

    The same population hypothesis governs each independent proposal. The
    terminal factor is its one-attempt acceptance probability, not the
    normalized accepted-type probability used when failures were unrecorded.
    """
    population = _population(population)
    if not isinstance(trace, str):
        raise TypeError("A recorded trace must be a string.")
    if not 1 <= len(trace) <= MAX_TRACE_LENGTH or trace[-1] not in ("L", "S") or any(c != "R" for c in trace[:-1]):
        raise ValueError(f"Use at most {MAX_TRACE_LENGTH} attempts: zero or more R, then the first L or S.")
    return attempt_probability(population, "R") ** (len(trace) - 1) * attempt_probability(population, trace[-1])


def population_targets(population: Population) -> dict[str, Fraction]:
    """Expected risks of future draws, not realized finite-population fractions."""
    population = _population(population)
    r, m = population.r, population.large_size
    mean_size = (1 - r) * SMALL_SIZE + r * m
    group_risk = (1 - r) * SMALL_RISK + r * LARGE_RISK
    mean_total_risk = (1 - r) * SMALL_SIZE * SMALL_RISK + r * m * LARGE_RISK
    member_risk = mean_total_risk / mean_size
    covariance = mean_total_risk - mean_size * group_risk
    return {"group_risk": group_risk, "member_risk": member_risk,
            "mean_size": mean_size, "mean_total_risk": mean_total_risk,
            "member_large_probability": m * r / mean_size,
            "size_risk_covariance": covariance, "member_minus_group": member_risk - group_risk}


def posterior_report(observation: str, *, protocol: str = "accepted", large_size: int = 3) -> dict[str, object]:
    """Fixed prior 1/2 on each of r=1/4,3/4, with one persistent population.

    group_risk averages uniform-group-then-uniform-member risks. member_risk
    averages each population's all-members risk AFTER its within-population
    normalization. ratio_risk instead divides posterior expected total risk
    per group by posterior expected group size; it is a comparison functional,
    not the future all-members risk under this persistent-hypothesis model.
    """
    protocol = _symbol(protocol, ("accepted", "trace"), "Observation protocol")
    populations = (Population("1/4", large_size), Population("3/4", large_size))
    likelihood_function = accepted_type_probability if protocol == "accepted" else recorded_trace_probability
    likelihoods = tuple(likelihood_function(population, observation) for population in populations)
    prior = Fraction(1, 2)
    evidence = sum((prior * value for value in likelihoods), Fraction(0))
    weights = tuple(prior * value / evidence for value in likelihoods)
    targets = tuple(population_targets(population) for population in populations)
    group_risk = sum((weight * target["group_risk"] for weight, target in zip(weights, targets)), Fraction(0))
    member_risk = sum((weight * target["member_risk"] for weight, target in zip(weights, targets)), Fraction(0))
    expected_size = sum((weight * target["mean_size"] for weight, target in zip(weights, targets)), Fraction(0))
    expected_total_risk = sum((weight * target["mean_total_risk"] for weight, target in zip(weights, targets)), Fraction(0))
    if protocol == "accepted":
        kind = "large" if observation == "L" else "small"
        description = f"The first accepted group is {kind}; the number of preceding rejected proposals was not recorded."
    else:
        kind = "large" if observation[-1] == "L" else "small"
        description = f"Recorded attempt history {observation}: {len(observation) - 1} rejected proposals, then the first accepted {kind} group."
    return {"description": description, "evidence": evidence,
            "posterior_mean_r": sum((weight * population.r for weight, population in zip(weights, populations)), Fraction(0)),
            "posterior_rows": [{"r": population.r, "prior": prior, "likelihood": likelihood, "posterior": weight}
                               for population, likelihood, weight in zip(populations, likelihoods, weights)],
            "group_risk": group_risk, "member_risk": member_risk,
            "ratio_risk": expected_total_risk / expected_size, "risk_gap": member_risk - group_risk}


def explorer_payload() -> dict[str, object]:
    """Only original sizes 1/3 and accepted L/S; no recorded-trace UI case."""
    return {"parameters": {"small_size": SMALL_SIZE, "large_size": 3,
                            "small_risk": SMALL_RISK, "large_risk": LARGE_RISK},
            "default_case": "L", "cases": {case: posterior_report(case) for case in ("L", "S")}}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--case", choices=("L", "S", "RRL", "RS-size2"), default="L",
                        help="L/S: unrecorded failures, size 3. RRL: complete trace, size 3. RS-size2: complete RS trace, size 2.")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    if args.case == "RS-size2":
        report = posterior_report("RS", protocol="trace", large_size=2)
    else:
        report = posterior_report(args.case, protocol="trace" if args.case == "RRL" else "accepted")
    if args.json:
        print(json.dumps(report, default=str, indent=2))
    else:
        for name, value in report.items():
            print(f"{name}: {json.dumps(value, default=str)}")


if __name__ == "__main__":
    main()
