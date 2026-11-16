"""Finite Bayesian experiment design, with exact probabilities and losses.

Run this file directly; only the Python standard library is needed.
The model has a fixed finite state, one observation, and an action after observing.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from fractions import Fraction
import json
from math import fsum, log2
from typing import Iterable

Rational = Fraction | int | str
Vector = tuple[Fraction, ...]


def rational(value: Rational) -> Fraction:
    """Keep decimal strings exact; reject binary floats and booleans explicitly."""
    if isinstance(value, bool) or not isinstance(value, (Fraction, int, str)):
        raise TypeError("Use an integer, Fraction, or decimal/fraction string, not a float.")
    return Fraction(value)


def distribution(values: Iterable[Rational], name: str = "distribution") -> Vector:
    result = tuple(rational(value) for value in values)
    if not result or any(value < 0 for value in result) or sum(result) != 1:
        raise ValueError(f"{name} must be nonempty, nonnegative, and sum exactly to one.")
    return result


def log_probability(value: Fraction) -> float:
    # Avoid first converting very small exact probabilities to a zero float.
    return log2(value.numerator) - log2(value.denominator)


def entropy(probabilities: Iterable[Rational]) -> float:
    """Shannon entropy in bits, using 0 log 0 = 0."""
    p = distribution(probabilities)
    return -fsum(float(value) * log_probability(value) for value in p if value)


@dataclass(frozen=True)
class Experiment:
    """Rows are states; columns are mutually exclusive, exhaustive outcomes."""

    name: str
    outcomes: tuple[str, ...]
    likelihood: tuple[Vector, ...]
    cost: Fraction = Fraction(0)

    def __post_init__(self) -> None:
        outcomes = tuple(self.outcomes)
        if not self.name or not outcomes or any(not label for label in outcomes):
            raise ValueError("Experiment and outcome names must be nonempty.")
        if len(set(outcomes)) != len(outcomes):
            raise ValueError("Outcome names must be unique.")
        rows = tuple(distribution(row, "each likelihood row") for row in self.likelihood)
        if not rows or any(len(row) != len(outcomes) for row in rows):
            raise ValueError("Every state needs one probability for each outcome.")
        cost = rational(self.cost)
        if cost < 0:
            raise ValueError("Experiment cost must be nonnegative.")
        object.__setattr__(self, "outcomes", outcomes)
        object.__setattr__(self, "likelihood", rows)
        object.__setattr__(self, "cost", cost)


def binary_experiment(name: str, positive: Iterable[Rational], cost: Rational = 0) -> Experiment:
    rows = tuple((rational(p), 1 - rational(p)) for p in positive)
    return Experiment(name, ("+", "-"), rows, rational(cost))


def independent_pair(first: Experiment, second: Experiment) -> Experiment:
    """Combine observations ONLY under conditional independence given the state.

    This is a modelling assumption, not an automatic property of repeated assays.
    Outcome indices make labels unambiguous even when inputs contain separators.
    """
    if len(first.likelihood) != len(second.likelihood):
        raise ValueError("Both experiments must use the same state order and count.")
    outcomes = tuple(f"({i},{j})" for i in range(len(first.outcomes))
                     for j in range(len(second.outcomes)))
    rows = tuple(tuple(a * b for a in row_a for b in row_b)
                 for row_a, row_b in zip(first.likelihood, second.likelihood))
    return Experiment(f"{first.name} then {second.name}", outcomes, rows, first.cost + second.cost)


def loss_matrix(losses: Iterable[Iterable[Rational]], states: int) -> tuple[Vector, ...]:
    rows = tuple(tuple(rational(value) for value in row) for row in losses)
    if not rows or any(len(row) != states for row in rows):
        raise ValueError("Each action needs one loss for every state.")
    return rows


def best_action(probabilities: Vector, losses: tuple[Vector, ...]) -> tuple[Fraction, tuple[int, ...]]:
    risks = tuple(sum(p * loss for p, loss in zip(probabilities, row)) for row in losses)
    minimum = min(risks)
    return minimum, tuple(i for i, risk in enumerate(risks) if risk == minimum)


@dataclass(frozen=True)
class Branch:
    outcome: str
    probability: Fraction
    posterior: Vector | None
    risk: Fraction | None
    actions: tuple[int, ...]


@dataclass(frozen=True)
class Evaluation:
    branches: tuple[Branch, ...]
    prior_entropy_bits: float
    expected_entropy_bits: float
    information_bits: float
    prior_risk: Fraction
    prior_actions: tuple[int, ...]
    expected_risk: Fraction
    value: Fraction
    net_value: Fraction


def evaluate(prior: Iterable[Rational], experiment: Experiment,
             losses: Iterable[Iterable[Rational]]) -> Evaluation:
    """Enumerate the prior predictive branches before any observation is known.

    Impossible outcomes remain visible with posterior/risk None. All optimal
    actions are returned for ties; no arbitrary tie is presented as unique.
    Probabilities and losses are exact; only entropies use floating point.
    """
    prior = distribution(prior, "prior")
    if len(prior) != len(experiment.likelihood):
        raise ValueError("Prior and likelihood must have the same state count.")
    losses = loss_matrix(losses, len(prior))
    prior_risk, prior_actions = best_action(prior, losses)
    branches = []
    information_terms = []
    entropy_terms = []
    expected_risk = Fraction(0)
    for column, outcome in enumerate(experiment.outcomes):
        joint = tuple(p * row[column] for p, row in zip(prior, experiment.likelihood))
        predictive = sum(joint)
        if not predictive:
            branches.append(Branch(outcome, predictive, None, None, ()))
            continue
        posterior = tuple(weight / predictive for weight in joint)
        risk, actions = best_action(posterior, losses)
        branches.append(Branch(outcome, predictive, posterior, risk, actions))
        expected_risk += predictive * risk
        entropy_terms.append(float(predictive) * entropy(posterior))
        # E_y KL(p(state|y) || p(state)); zero joint cells contribute zero.
        information_terms.extend(float(weight) * (log_probability(post) - log_probability(p))
                                 for weight, post, p in zip(joint, posterior, prior) if weight)
    value = prior_risk - expected_risk
    return Evaluation(tuple(branches), entropy(prior), fsum(entropy_terms),
                      fsum(information_terms), prior_risk, prior_actions,
                      expected_risk, value, value - experiment.cost)


STATES = ("ready", "worn", "jammed")
ACTIONS = ("run", "service")
LOSSES = ((0, 0, 20), (3, 3, 3))
WEAR = binary_experiment("Wear assay", ("1/10", "9/10", "11/30"), "1/4")
JAM = binary_experiment("Jam probe", ("1/10", "1/10", "9/10"), "1/4")


def demo(jam_prior: Rational = "1/10") -> dict:
    jam_prior = rational(jam_prior)
    if not 0 <= jam_prior <= 1:
        raise ValueError("Jam prior must lie between zero and one.")
    prior = (2 * (1 - jam_prior) / 3, (1 - jam_prior) / 3, jam_prior)
    result = {"states": STATES, "prior": [str(p) for p in prior],
              "actions": ACTIONS, "losses": LOSSES, "experiments": []}
    for experiment in (WEAR, JAM):
        evaluation = evaluate(prior, experiment, LOSSES)
        branches = []
        for branch in evaluation.branches:
            branches.append({"outcome": branch.outcome, "probability": str(branch.probability),
                             "posterior": None if branch.posterior is None else
                             [str(p) for p in branch.posterior],
                             "risk": None if branch.risk is None else str(branch.risk),
                             "actions": [ACTIONS[i] for i in branch.actions]})
        result["experiments"].append({"name": experiment.name, "cost": str(experiment.cost),
            "information_bits": evaluation.information_bits,
            "expected_entropy_bits": evaluation.expected_entropy_bits,
            "prior_entropy_bits": evaluation.prior_entropy_bits,
            "prior_risk": str(evaluation.prior_risk),
            "expected_risk": str(evaluation.expected_risk), "value": str(evaluation.value),
            "net_value": str(evaluation.net_value), "branches": branches})
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--jam-prior", default="1/10", help="exact fraction or decimal, default 1/10")
    parser.add_argument("--json", action="store_true", help="show exact fractions and all branches")
    args = parser.parse_args()
    try:
        result = demo(args.jam_prior)
    except (TypeError, ValueError, ZeroDivisionError) as error:
        parser.error(str(error))
    if args.json:
        print(json.dumps(result, indent=2))
        return
    print("State order:", ", ".join(STATES))
    print("Prior:", ", ".join(result["prior"]))
    print("Losses: run=(0,0,20), service=(3,3,3). Experiment costs=1/4.")
    print("Information is in bits; risk and value are in loss units.")
    for item in result["experiments"]:
        print(f"\n{item['name']}: information={item['information_bits']:.6f} bits")
        print(f"  Expected risk={item['expected_risk']}; value={item['value']}; net value={item['net_value']}")
        for branch in item["branches"]:
            print(f"  {branch['outcome']}: P={branch['probability']}, posterior={branch['posterior']}, "
                  f"optimal actions={branch['actions']}")
    print("\nCompare each net value with zero: acting now remains available.")


if __name__ == "__main__":
    main()
