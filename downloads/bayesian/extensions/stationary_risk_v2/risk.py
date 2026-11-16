"""Exact two-state calculations; observations are X_0,...,X_(N-1).

Standard library only. Fractions are the scientific results; decimal displays
are labels, never inputs to a second numerical algorithm.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from fractions import Fraction
import json

Rational = Fraction | int | str


def rational(value: Rational) -> Fraction:
    """Accept exact inputs, including decimal strings; reject floats and bools."""
    if isinstance(value, bool) or not isinstance(value, (Fraction, int, str)):
        raise TypeError("Use an integer, Fraction, or decimal/fraction string.")
    return Fraction(value)


def probability(value: Rational) -> Fraction:
    result = rational(value)
    if not 0 <= result <= 1:
        raise ValueError("Probabilities must lie in [0, 1].")
    return result


def sample_size(n: int) -> int:
    if isinstance(n, bool) or not isinstance(n, int) or n < 1:
        raise ValueError("The number of observations must be a positive integer.")
    return n


def nonnegative_cost(value: Rational) -> Fraction:
    result = rational(value)
    if result < 0:
        raise ValueError("Protection cost must be nonnegative.")
    return result


@dataclass(frozen=True)
class Chain:
    """Transition probabilities 0→1=a, 1→0=b; require a+b>0."""

    a: Rational
    b: Rational

    def __post_init__(self) -> None:
        a, b = probability(self.a), probability(self.b)
        if a + b == 0:
            raise ValueError("a=b=0 has no unique stationary law; specify another chain.")
        object.__setattr__(self, "a", a)
        object.__setattr__(self, "b", b)

    @property
    def p(self) -> Fraction:
        return self.a / (self.a + self.b)

    @property
    def rho(self) -> Fraction:
        return 1 - self.a - self.b

    @property
    def transition(self) -> tuple[tuple[Fraction, Fraction], ...]:
        return ((1 - self.a, self.a), (self.b, 1 - self.b))

    def marginal(self, t: int, q: Rational) -> Fraction:
        if isinstance(t, bool) or not isinstance(t, int) or t < 0:
            raise ValueError("Time must be a nonnegative integer.")
        return self.p + (probability(q) - self.p) * self.rho ** t

    def mean_bias(self, n: int, q: Rational) -> Fraction:
        """Expected mean minus p; not a realized error."""
        sample_size(n)
        return (probability(q) - self.p) * (1 - self.rho ** n) / (n * (1 - self.rho))

    def mean(self, n: int, q: Rational | None = None) -> Fraction:
        sample_size(n)
        return self.p + self.mean_bias(n, self.p if q is None else q)

    def stationary_variance(self, n: int) -> Fraction:
        """Exact finite-n variance under stationary start, even when rho=-1."""
        sample_size(n)
        bracket = n + 2 * sum((n - k) * self.rho ** k for k in range(1, n))
        return self.p * (1 - self.p) * bracket / n ** 2

    def asymptotic_variance(self) -> Fraction:
        """Limit of n Var_stationary(mean), only for |rho|<1 here."""
        if abs(self.rho) >= 1:
            raise ValueError("The infinite autocorrelation sum requires |rho|<1.")
        return self.p * (1 - self.p) * (1 + self.rho) / (1 - self.rho)

    def count_distribution(self, n: int, q: Rational | None = None) -> tuple[Fraction, ...]:
        """Exact Pr(sum X_t=k), using a count-and-last-state recursion.

        O(n²) rational operations, O(n) live cells. This is a repeated-run
        distribution under specified model and start, not a posterior for p.
        """
        sample_size(n)
        initial = self.p if q is None else probability(q)
        zero = [Fraction(1) - initial, Fraction(0)]
        one = [Fraction(0), initial]
        for length in range(1, n):
            next_zero = [Fraction(0)] * (length + 2)
            next_one = [Fraction(0)] * (length + 2)
            for k in range(length + 1):
                next_zero[k] = zero[k] * (1 - self.a) + one[k] * self.b
                next_one[k + 1] = zero[k] * self.a + one[k] * (1 - self.b)
            zero, one = next_zero, next_one
        return tuple(z + o for z, o in zip(zero, one))


def stationary_actions(chain: Chain, cost: Rational = "3/10") -> tuple[str, ...]:
    cost = nonnegative_cost(cost)
    if chain.p < cost:
        return ("unprotected",)
    if chain.p > cost:
        return ("protect",)
    return ("unprotected", "protect")


def decision_report(chain: Chain, n: int, cost: Rational = "3/10",
                    q: Rational | None = None) -> dict[str, Fraction | tuple[str, ...]]:
    """Protect iff observed mean > cost; ties choose unprotected.

    Selected-action risk is evaluated on a fresh independent stationary case,
    not the conditional loss at the chain's next, correlated state.
    """
    sample_size(n)
    cost = nonnegative_cost(cost)
    counts = chain.count_distribution(n, q)
    protect = sum((weight for k, weight in enumerate(counts) if Fraction(k, n) > cost), Fraction(0))
    tie = sum((weight for k, weight in enumerate(counts) if Fraction(k, n) == cost), Fraction(0))
    wrong = protect if chain.p < cost else 1 - protect if chain.p > cost else Fraction(0)
    selected_risk = chain.p + (cost - chain.p) * protect
    return {
        "optimal_actions": stationary_actions(chain, cost),
        "unprotected_risk": chain.p, "protect_risk": cost,
        "action_gap": abs(cost - chain.p),
        "protect_probability": protect, "tie_probability": tie,
        "wrong_action_probability": wrong,
        "expected_selected_stationary_risk": selected_risk,
        "expected_regret": selected_risk - min(cost, chain.p),
    }


def case_report(chain: Chain, n: int, cost: Rational, q: Rational | None) -> dict:
    initial = chain.p if q is None else probability(q)
    result = {
        "a": chain.a, "b": chain.b, "n": n, "initial_p1": initial,
        "stationary_p1": chain.p, "rho": chain.rho,
        "stationary_variance": chain.stationary_variance(n),
        "actual_start_mean": chain.mean(n, initial),
        "actual_start_bias": chain.mean_bias(n, initial),
        "decision": decision_report(chain, n, cost, initial),
    }
    if abs(chain.rho) < 1:
        result["asymptotic_variance"] = chain.asymptotic_variance()
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--a", default="1/20")
    parser.add_argument("--b", default="3/20")
    parser.add_argument("--n", type=int, default=4)
    parser.add_argument("--cost", default="3/10")
    parser.add_argument("--initial", help="Pr(X_0=1); default is stationary")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    try:
        result = case_report(Chain(args.a, args.b), args.n, args.cost, args.initial)
    except (TypeError, ValueError, ZeroDivisionError) as error:
        parser.error(str(error))
    if args.json:
        print(json.dumps(result, default=str, indent=2))
    else:
        for key, value in result.items():
            if isinstance(value, dict):
                for name, item in value.items():
                    print(f"{name}: {item}")
            else:
                print(f"{key}: {value}")
        if result["initial_p1"] != result["stationary_p1"]:
            print("stationary_variance is a stationary benchmark, not this start's variance.")


if __name__ == "__main__":
    main()
