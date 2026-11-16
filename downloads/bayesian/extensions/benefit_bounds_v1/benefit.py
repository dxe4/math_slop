"""Exact binary potential-outcome bounds and a deliberately unlearned coupling.

Y(0), Y(1) are binary. Assignment is independent of both potential outcomes;
the observed outcome is Y(A). The coupling coordinate u controls association
between the two *unobserved together* potential outcomes, not randomization.
The binomial likelihood and conjugate update additionally model units as
independent, identically distributed draws from this potential-outcome law.

Only the standard library is required. Integer Beta shapes make every reported
integral rational. Expectations of sharp endpoints are NOT credible intervals.
"""
from __future__ import annotations

import argparse
from collections.abc import Sequence
from dataclasses import dataclass
from fractions import Fraction
import json
from math import comb, factorial
import re

Rational = Fraction | int | str
MAX_BETA_TOTAL = 80
MAX_ARM_N = 2000
MAX_STRATA = 100


def rational(value: Rational) -> Fraction:
    """Parse an exact rational; floats and bools are never silently accepted."""
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


def probability(value: Rational) -> Fraction:
    result = rational(value)
    if not 0 <= result <= 1:
        raise ValueError("Probabilities must lie in [0, 1].")
    return result


def _integer(value: int, name: str, lower: int, upper: int) -> int:
    if isinstance(value, bool) or not isinstance(value, int):
        raise TypeError(f"{name} must be an integer.")
    if not lower <= value <= upper:
        raise ValueError(f"{name} must lie in [{lower}, {upper}].")
    return value


def _counts(successes: int, n: int) -> tuple[int, int]:
    """Zero observations are allowed; positive n is not assumed implicitly."""
    n = _integer(n, "Arm sample size", 0, MAX_ARM_N)
    return _integer(successes, "Success count", 0, n), n


def sharp_benefit_bounds(p0: Rational, p1: Rational) -> tuple[Fraction, Fraction]:
    """Sharp bounds on Pr(Y(0)=0, Y(1)=1), given both marginal risks."""
    p0, p1 = probability(p0), probability(p1)
    return max(Fraction(0), p1 - p0), min(p1, 1 - p0)


def coupling(p0: Rational, p1: Rational, u: Rational) -> dict[str, object]:
    """Return cells ordered by (Y(0),Y(1)) and individual-effect summaries.

    u=0 attains the upper benefit bound; u=1 attains the lower bound.
    If the interval degenerates, every u describes the same joint law.
    """
    p0, p1, u = probability(p0), probability(p1), probability(u)
    q_lower, q_upper = max(Fraction(0), p0 + p1 - 1), min(p0, p1)
    q11 = q_lower + u * (q_upper - q_lower)
    cells = {"00": 1 - p0 - p1 + q11, "01": p1 - q11,
             "10": p0 - q11, "11": q11}
    ate = p1 - p0
    lower, upper = sharp_benefit_bounds(p0, p1)
    return {"p0": p0, "p1": p1, "u": u, "cells": cells,
            "ate": ate, "benefit": cells["01"], "harm": cells["10"],
            "difference_variance": cells["01"] + cells["10"] - ate ** 2,
            "q11_lower": q_lower, "q11_upper": q_upper,
            "benefit_lower": lower, "benefit_upper": upper}


def observed_joint(p0: Rational, p1: Rational,
                   assignment: Rational = "1/2") -> dict[str, Fraction]:
    """Pr(A=a,Y=y), keys 'ay'; random assignment Pr(A=1)=assignment.

    This distribution has no u argument because the coupling cancels when
    the missing potential outcome is summed out. Assignment 0 or 1 is valid
    algebraically, although it does not identify both marginal risks.
    """
    p0, p1, pi = probability(p0), probability(p1), probability(assignment)
    return {"00": (1 - pi) * (1 - p0), "01": (1 - pi) * p0,
            "10": pi * (1 - p1), "11": pi * p1}


def observed_likelihood(p0: Rational, p1: Rational,
                        control_successes: int, control_n: int,
                        treated_successes: int, treated_n: int, *,
                        include_binomial: bool = True) -> Fraction:
    """Arm-count likelihood, CONDITIONAL on the two arm sample sizes.

    With include_binomial=False this is the probability of a particular
    ordered pair of arm outcome sequences instead. Neither depends on u.
    Units are i.i.d. from the joint potential-outcome law, and assignment
    is independent of those draws. Randomization alone does not imply the
    product-binomial sampling model for a fixed finite population.
    At p=0 or 1, Python's exact 0**0=1 correctly handles zero counts.
    """
    p0, p1 = probability(p0), probability(p1)
    s0, n0 = _counts(control_successes, control_n)
    s1, n1 = _counts(treated_successes, treated_n)
    if not isinstance(include_binomial, bool):
        raise TypeError("include_binomial must be a bool.")
    value = p0 ** s0 * (1 - p0) ** (n0 - s0)
    value *= p1 ** s1 * (1 - p1) ** (n1 - s1)
    return value * comb(n0, s0) * comb(n1, s1) if include_binomial else value


@dataclass(frozen=True)
class Beta:
    """A proper Beta distribution with positive integer shapes, a+b<=80.

    The explicit bound limits the exact polynomial calculation; it is a
    calculator limit, not a statistical restriction on Beta distributions.
    """

    a: int
    b: int

    def __post_init__(self) -> None:
        _integer(self.a, "Beta a", 1, MAX_BETA_TOTAL - 1)
        _integer(self.b, "Beta b", 1, MAX_BETA_TOTAL - 1)
        if self.a + self.b > MAX_BETA_TOTAL:
            raise ValueError(f"Exact Beta calculations require a+b <= {MAX_BETA_TOTAL}.")

    @property
    def mean(self) -> Fraction:
        return Fraction(self.a, self.a + self.b)


def _beta(value: Beta, name: str) -> Beta:
    if not isinstance(value, Beta):
        raise TypeError(f"{name} must be a Beta instance.")
    return value


def update_beta(prior: Beta, successes: int, n: int) -> Beta:
    """Conjugate update for a binomial arm, including the n=0 prior case."""
    prior = _beta(prior, "prior")
    successes, n = _counts(successes, n)
    return Beta(prior.a + successes, prior.b + n - successes)


def beta_minimum_mean(x: Beta, y: Beta) -> Fraction:
    """E[min(X,Y)] for INDEPENDENT integer-shape Beta variables.

    For n=a+b-1, SF_Beta(a,b)(t) = sum_{j=0}^{a-1}
    C(n,j)t^j(1-t)^(n-j). Multiply the two survival polynomials and
    integrate each positive term using B(j+k+1, nx+ny-j-k+1).
    No quadrature, simulation, or floating point enters this result.
    """
    x, y = _beta(x, "x"), _beta(y, "y")
    nx, ny = x.a + x.b - 1, y.a + y.b - 1
    degree = nx + ny
    denominator = factorial(degree + 1)
    total = Fraction(0)
    for j in range(x.a):
        for k in range(y.a):
            power = j + k
            numerator = comb(nx, j) * comb(ny, k)
            numerator *= factorial(power) * factorial(degree - power)
            total += Fraction(numerator, denominator)
    return total


def posterior_summary(control: Beta = Beta(3, 5),
                      treated: Beta = Beta(5, 3),
                      coupling_prior: Beta = Beta(1, 1)) -> dict[str, object]:
    """Exact posterior means under independent marginal and u priors.

    control/treated are the arm *posterior* Beta distributions. The u prior
    is independent of the marginals and has the same conditional Beta law
    for every (p0,p1). The arm-wise observed likelihood then leaves its
    entire distribution unchanged, not merely its mean. Other joint priors
    can induce a posterior change in u through the marginal risks.

    mean_lower_endpoint and mean_upper_endpoint average identified-region
    endpoints over uncertain marginals. They are NOT posterior quantiles
    and do NOT form a credible interval for benefit.
    """
    control = _beta(control, "control")
    treated = _beta(treated, "treated")
    coupling_prior = _beta(coupling_prior, "coupling_prior")
    lower = treated.mean - beta_minimum_mean(control, treated)
    upper = beta_minimum_mean(treated, Beta(control.b, control.a))
    mean_benefit = (1 - coupling_prior.mean) * upper + coupling_prior.mean * lower
    ate = treated.mean - control.mean
    return {"control_beta": (control.a, control.b),
            "treated_beta": (treated.a, treated.b),
            "coupling_prior_beta": (coupling_prior.a, coupling_prior.b),
            "coupling_posterior_beta": (coupling_prior.a, coupling_prior.b),
            "coupling_posterior_equals_prior": True,
            "mean_p0": control.mean, "mean_p1": treated.mean,
            "mean_ate": ate, "mean_lower_endpoint": lower,
            "mean_upper_endpoint": upper, "mean_u": coupling_prior.mean,
            "mean_benefit": mean_benefit, "mean_harm": mean_benefit - ate,
            "endpoint_summary_is_credible_interval": False}


def stratified_bounds(p0s: Sequence[Rational], p1s: Sequence[Rational],
                      weights: Sequence[Rational]) -> dict[str, object]:
    """Compare sharp benefit bounds with and without measured strata.

    The weights are population stratum probabilities, shared across both
    interventions. Within-stratum couplings are otherwise unrestricted.
    """
    if not all(isinstance(xs, Sequence) and not isinstance(xs, (str, bytes))
               for xs in (p0s, p1s, weights)):
        raise TypeError("Stratum inputs must be sequences of exact probabilities.")
    if not 1 <= len(weights) <= MAX_STRATA or len(p0s) != len(weights) or len(p1s) != len(weights):
        raise ValueError(f"Use equally sized sequences with 1..{MAX_STRATA} strata.")
    ws = tuple(probability(w) for w in weights)
    if sum(ws, Fraction(0)) != 1:
        raise ValueError("Stratum weights must sum exactly to one.")
    p0 = tuple(probability(p) for p in p0s)
    p1 = tuple(probability(p) for p in p1s)
    bounds = tuple(sharp_benefit_bounds(a, b) for a, b in zip(p0, p1))
    pooled_p0 = sum((w * p for w, p in zip(ws, p0)), Fraction(0))
    pooled_p1 = sum((w * p for w, p in zip(ws, p1)), Fraction(0))
    return {"weights": ws, "p0_by_stratum": p0, "p1_by_stratum": p1,
            "bounds_by_stratum": bounds, "pooled_p0": pooled_p0,
            "pooled_p1": pooled_p1, "ate": pooled_p1 - pooled_p0,
            "pooled_bounds": sharp_benefit_bounds(pooled_p0, pooled_p1),
            "conditional_bounds": tuple(sum((w * bound[i] for w, bound in zip(ws, bounds)), Fraction(0))
                                        for i in (0, 1))}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--p0", default="2/5")
    parser.add_argument("--p1", default="3/5")
    parser.add_argument("--u", default="1/2")
    parser.add_argument("--assignment", default="1/2")
    parser.add_argument("--control-successes", type=int, default=2)
    parser.add_argument("--control-n", type=int, default=6)
    parser.add_argument("--treated-successes", type=int, default=4)
    parser.add_argument("--treated-n", type=int, default=6)
    parser.add_argument("--control-prior-a", type=int, default=1)
    parser.add_argument("--control-prior-b", type=int, default=1)
    parser.add_argument("--treated-prior-a", type=int, default=1)
    parser.add_argument("--treated-prior-b", type=int, default=1)
    parser.add_argument("--coupling-a", type=int, default=1)
    parser.add_argument("--coupling-b", type=int, default=1)
    parser.add_argument("--json", action="store_true", help="Print the complete exact report as JSON.")
    args = parser.parse_args()
    try:
        control = update_beta(Beta(args.control_prior_a, args.control_prior_b),
                              args.control_successes, args.control_n)
        treated = update_beta(Beta(args.treated_prior_a, args.treated_prior_b),
                              args.treated_successes, args.treated_n)
        u_prior = Beta(args.coupling_a, args.coupling_b)
        report = {"selected_coupling": coupling(args.p0, args.p1, args.u),
                  "endpoint_couplings": [coupling(args.p0, args.p1, u) for u in (0, 1)],
                  "observed_joint_A_Y": observed_joint(args.p0, args.p1, args.assignment),
                  "arm_count_likelihood": observed_likelihood(
                      args.p0, args.p1, args.control_successes, args.control_n,
                      args.treated_successes, args.treated_n),
                  "finite_data_posterior": posterior_summary(control, treated, u_prior),
                  "strata_example": stratified_bounds(("1/10", "9/10"), ("2/5", "3/5"), ("1/2", "1/2"))}
    except (TypeError, ValueError, ZeroDivisionError) as error:
        parser.error(str(error))
    if args.json:
        print(json.dumps(report, default=str, indent=2))
    else:
        print("Exact binary potential-outcome calculation")
        for name, section in report.items():
            print(f"{name}: {json.dumps(section, default=str, sort_keys=True)}")
        print("Endpoint means are not a credible interval. The u posterior equals its prior only under the stated independent prior.")


if __name__ == "__main__":
    main()
