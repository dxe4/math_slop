"""Chapter 10: Gibbs schedules, collapse order, and augmentation checks.

Uses only the Python standard library. Run: python examples/ch10.py
"""

import math
import random
from fractions import Fraction
from itertools import product


SEED = 20260926
BURN = 2_000
KEPT = 40_000


def mean(values: list[float]) -> float:
    return sum(values) / len(values)


def covariance(xs: list[float], ys: list[float]) -> float:
    xbar, ybar = mean(xs), mean(ys)
    return sum((x - xbar) * (y - ybar) for x, y in zip(xs, ys)) / len(xs)


def lag_one(xs: list[float]) -> float:
    return covariance(xs[:-1], xs[1:]) / covariance(xs, xs)


def gaussian_gibbs(
    rng: random.Random, rho: float, stale: bool = False
) -> tuple[list[float], list[float]]:
    if not -1.0 < rho < 1.0:
        raise ValueError("The Gaussian target requires -1 < rho < 1.")
    x = y = 0.0
    sd = math.sqrt(1.0 - rho * rho)
    out_x, out_y = [], []
    for t in range(BURN + KEPT):
        old_x, old_y = x, y
        x = rho * old_y + sd * rng.gauss(0.0, 1.0)
        y = rho * (old_x if stale else x) + sd * rng.gauss(0.0, 1.0)
        if t >= BURN:
            out_x.append(x)
            out_y.append(y)
    return out_x, out_y


def gaussian_collapse(
    rng: random.Random, rho: float, correct_order: bool
) -> tuple[list[float], list[float]]:
    """Store both coordinates to expose the incorrect order's joint law."""
    if not -1.0 < rho < 1.0:
        raise ValueError("The Gaussian target requires -1 < rho < 1.")
    y = 0.0
    sd = math.sqrt(1.0 - rho * rho)
    out_x, out_y = [], []
    for t in range(BURN + KEPT):
        if correct_order:
            y = rng.gauss(0.0, 1.0)
            x = rng.gauss(rho * y, sd)
        else:
            x = rng.gauss(rho * y, sd)
            y = rng.gauss(0.0, 1.0)
        if t >= BURN:
            out_x.append(x)
            out_y.append(y)
    return out_x, out_y


def missing_data_gibbs(rng: random.Random) -> list[float]:
    mu = z = 0.0
    out_mu = []
    for t in range(BURN + KEPT):
        z = rng.gauss(mu, 1.0)
        mu = rng.gauss((2.0 + z) / 4.0, 0.5)
        if t >= BURN:
            out_mu.append(mu)
    return out_mu


def exact_augmentation_checks() -> None:
    """Verify Exercise 7 from its joint table, without Monte Carlo tolerance."""
    joint = [[Fraction(2, 5), Fraction(1, 10)],
             [Fraction(1, 5), Fraction(3, 10)]]
    theta_mass = [sum(row) for row in joint]
    z_mass = [sum(joint[t][z] for t in range(2)) for z in range(2)]
    transition = [
        [sum(joint[t][z] / theta_mass[t] * joint[u][z] / z_mass[z]
             for z in range(2)) for u in range(2)]
        for t in range(2)
    ]
    for t in range(2):
        assert sum(transition[t]) == 1
        for u in range(2):
            assert theta_mass[t] * transition[t][u] == (
                theta_mass[u] * transition[u][t])
        assert sum(theta_mass[u] * transition[u][t] for u in range(2)) == (
            theta_mass[t])
    expected_mean = theta_mass[1]
    lag_cov = theta_mass[1] * transition[1][1] - expected_mean**2
    conditional_variance = sum(
        z_mass[z] * (joint[1][z] / z_mass[z] - expected_mean)**2
        for z in range(2)
    )
    assert transition == [[Fraction(7, 12), Fraction(5, 12)],
                          [Fraction(5, 12), Fraction(7, 12)]]
    assert lag_cov == conditional_variance == Fraction(1, 24)
    print("Exact binary augmentation: P=[[7/12, 5/12], [5/12, 7/12]]; "
          "balance and covariance identity verified; lag-1=1/6")

    # Exercise 5: several proper priors and counts, including no missing data.
    for q in (Fraction(1, 4), Fraction(1), Fraction(4)):
        for n in (0, 2, 10):
            for m in (0, 1, 3, 30):
                precision = q + n + m
                a = m / precision
                innovation_variance = m / precision**2 + 1 / precision
                assert innovation_variance / (1 - a*a) == 1 / (q + n)
                assert (1 + a) / (1 - a) == 1 + 2*m / (q + n)
    print("Exact missing-data checks: 36 cases; for q+n=3 and m=0,1,3,30, "
          "IACT=1, 5/3, 3, 21")


def main() -> None:
    exact_augmentation_checks()
    rho = 0.95
    x, y = gaussian_gibbs(random.Random(SEED), rho)
    sx, sy = gaussian_gibbs(random.Random(SEED + 1), rho, stale=True)
    mu = missing_data_gibbs(random.Random(SEED + 2))
    direct_rng = random.Random(SEED + 3)
    direct = [direct_rng.gauss(2.0 / 3.0, math.sqrt(1.0 / 3.0))
              for _ in range(KEPT)]
    print(f"Sequential normal: mean X={mean(x):.3f}, mean Y={mean(y):.3f}, "
          f"Var Y={covariance(y, y):.3f}, Cov(X,Y)={covariance(x, y):.3f}, "
          f"lag-1 Y={lag_one(y):.3f}")
    print(f"Normal targets: means=0, variances=1, Cov(X,Y)={rho:.3f}, "
          f"lag-1 Y={rho*rho:.3f}")
    print(f"Stale simultaneous update: Cov(X,Y)={covariance(sx, sy):.3f} "
          "(incorrect joint target)")
    for correct_order, seed in ((False, SEED + 4), (True, SEED + 5)):
        cx, cy = gaussian_collapse(random.Random(seed), rho, correct_order)
        label = "Repaired" if correct_order else "Incorrect"
        print(f"{label} collapse order: Var X={covariance(cx, cx):.3f}, "
              f"Var Y={covariance(cy, cy):.3f}, "
              f"Cov(X,Y)={covariance(cx, cy):.3f}; "
              f"schedule's stationary covariance={rho if correct_order else 0:.3f}")
    print(f"Augmented missing-data mu: mean={mean(mu):.3f}, "
          f"variance={covariance(mu, mu):.3f}, lag-1={lag_one(mu):.3f}")
    print(f"Direct observed-data mu: mean={mean(direct):.3f}, "
          f"variance={covariance(direct, direct):.3f}; "
          "targets: mean=0.667, variance=0.333, augmented lag-1=0.250")


def partial_collapse_reference(alpha: Fraction) -> dict:
    """Compose the two eight-state sweeps from exact target conditionals.

    This finite reference covers only the worked alpha=1/2 and changed
    alpha=1/3 targets. It uses no random draws. The all-alpha and all-time
    results in Section 10.7.1 are proved there, not certified by these cases.
    """
    if not isinstance(alpha, Fraction) or alpha not in (
            Fraction(1, 2), Fraction(1, 3)):
        raise ValueError("Use an exact Fraction alpha=1/2 or alpha=1/3.")
    states = tuple(product((0, 1), repeat=3))

    def bit_mass(bit, probability):
        return probability if bit else 1 - probability

    target = {
        s: bit_mass(s[0], alpha) * bit_mass(s[2], Fraction(1, 3))
        * bit_mass(s[0] ^ s[1] ^ s[2], Fraction(1, 4))
        for s in states
    }

    def conditional(index, current, given):
        masses = [
            sum(mass for s, mass in target.items()
                if s[index] == bit
                and all(s[j] == current[j] for j in given))
            for bit in (0, 1)
        ]
        return tuple(mass / sum(masses) for mass in masses)

    def compose(order):
        transition = {}
        for old in states:
            distribution = {old: Fraction(1)}
            for index, given in order:
                updated_distribution = {}
                for current, mass in distribution.items():
                    for bit, probability in enumerate(
                            conditional(index, current, given)):
                        new = list(current)
                        new[index] = bit
                        new = tuple(new)
                        updated_distribution[new] = (
                            updated_distribution.get(new, Fraction(0))
                            + mass * probability
                        )
                distribution = updated_distribution
            transition[old] = distribution
        return transition

    good = compose(((0, (2,)), (1, (0, 2)), (2, (0, 1))))
    bad = compose(((1, (0, 2)), (0, (2,)), (2, (0, 1))))
    y_probability = sum(mass * s[1] for s, mass in target.items())
    # The proposed stationary factorization must still pass a whole-kernel
    # check. Its marginals alone would not establish stationarity.
    bad_stationary = {
        s: bit_mass(s[0], alpha) * bit_mass(s[1], y_probability)
        * conditional(2, s, (0, 1))[s[2]]
        for s in states
    }
    return {"alpha": alpha, "states": states, "target": target,
            "good": good, "bad": bad, "bad_stationary": bad_stationary}


def report_partial_collapse() -> None:
    """Report only the worked case; changed-task answers are not printed."""
    reference = partial_collapse_reference(Fraction(1, 2))
    states, target = reference["states"], reference["target"]
    good, bad = reference["good"], reference["bad"]
    stationary = reference["bad_stationary"]

    def push(law, transition):
        return {new: sum(law[old] * transition[old][new] for old in states)
                for new in states}

    if (sum(target.values()) != 1
            or any(mass <= 0 for mass in target.values())
            or any(sum(row.values()) != 1 or min(row.values()) <= 0
                   for transition in (good, bad) for row in transition.values())
            or push(target, good) != target
            or push(stationary, bad) != stationary
            or push(target, bad) == target):
        raise ArithmeticError("Exact whole-kernel propagation check failed.")
    target_z = sum(mass * s[2] for s, mass in target.items())
    bad_z = {sum(mass * new[2] for new, mass in row.items())
             for row in bad.values()}
    if bad_z != {Fraction(13, 35)}:
        raise ArithmeticError("Bad-sweep Z probability is not constant.")
    probability = bad_z.pop()
    distance = sum(abs(stationary[s] - target[s]) for s in states) / 2
    rows = [[sum(good[(0, 0, z)][new] for new in states if new[2] == bit)
             for bit in (0, 1)] for z in (0, 1)]
    print(f"Exact partial-collapse propagation (alpha=1/2): target P(Z=1)="
          f"{target_z}; bad complete-sweep P(Z=1)={probability} for every old state")
    print(f"Bad stationary target TV={distance}; bias in P(Z=1)="
          f"{probability - target_z}; scalar iid proof is in Section 10.7.1")
    formatted = "[" + ", ".join(
        "[" + ", ".join(map(str, row)) + "]" for row in rows) + "]"
    print(f"Repaired Z kernel={formatted}; full eight-state invariance and "
          "bad stationary law checked exactly; no additional sampler is run")


if __name__ == "__main__":
    main()
    report_partial_collapse()
