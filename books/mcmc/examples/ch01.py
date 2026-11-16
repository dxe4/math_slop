"""Seeded, bounded illustrations for Chapter 01: Why MCMC."""

from __future__ import annotations

import argparse
import math
import random


def iid_three_state(rng: random.Random, count: int) -> float:
    total = 0
    for _ in range(count):
        u = rng.random()
        total += 0 if u < 1 / 6 else 1 if u < 2 / 3 else 2
    return total / count


def two_state_chain(
    rng: random.Random, count: int, initial: int = 0, epsilon: float = 1.0
) -> float:
    state = initial
    total = 0
    for _ in range(count):
        # Record X_t after a transition; staying put is still an observation.
        probability_one = 0.1 * epsilon if state == 0 else 1 - 0.2 * epsilon
        state = int(rng.random() < probability_one)
        total += state
    return total / count


def mean_from_zero(count: int, epsilon: float) -> float:
    """Exact expectation for the retained X_1,...,X_count, up to rounding."""
    persistence = 1 - 0.3 * epsilon
    return 1 / 3 - persistence * (1 - persistence**count) / (
        3 * count * (1 - persistence)
    )


def stationary_mean_variance(count: int, epsilon: float) -> float:
    """Finite-count covariance sum; assumes stationary initialization."""
    persistence = 1 - 0.3 * epsilon
    covariance_sum = math.fsum(
        (1 - lag / count) * persistence**lag for lag in range(1, count)
    )
    return (2 / (9 * count)) * (1 + 2 * covariance_sum)


def compare_movement(seed: int) -> None:
    """Reproduce Section 7.1's fixed budget and Exercise 7's threshold."""
    count = 1000
    print(f"Movement comparison at fixed N={count}:")
    for epsilon in (1.0, 0.01):
        persistence = 1 - 0.3 * epsilon
        all_zero = (1 - 0.1 * epsilon) ** count
        stationary_mcse = math.sqrt(stationary_mean_variance(count, epsilon))
        multiplier = (1 + persistence) / (1 - persistence)
        # Reusing the seed makes this a controlled illustration; the two
        # simulated runs are not independent replicates.
        estimate = two_state_chain(random.Random(seed), count, epsilon=epsilon)
        print(
            f"  epsilon={epsilon:g}: E[average | X_0=0]={mean_from_zero(count, epsilon):.6f}, "
            f"P(all zero | X_0=0)={all_zero:.6g}, observed average={estimate:.6f}"
        )
        print(
            f"    stationary finite-N theoretical MCSE={stationary_mcse:.6f}; "
            f"limiting variance multiplier={multiplier:.6f}"
        )
    threshold = math.ceil(math.log(0.05) / math.log1p(-0.001))
    print(f"For epsilon=0.01, smallest N with P(all zero | X_0=0)<=0.05: {threshold}")
    print("Stationary MCSEs above do not apply to the simulated starts at zero.")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=20260926)
    parser.add_argument("--draws", type=int, default=3600)
    args = parser.parse_args()
    if not 1 <= args.draws <= 1_000_000:
        parser.error("--draws must be between 1 and 1,000,000")

    rng_iid = random.Random(args.seed)
    rng_chain = random.Random(args.seed + 1)
    print(f"seed={args.seed}, draws={args.draws}")
    print("three-state exact probabilities: 1/6, 1/2, 1/3")
    print(f"three-state exact E[X]: {7 / 6:.6f}")
    print(f"three-state iid estimated E[X]: {iid_three_state(rng_iid, args.draws):.6f}")
    print(f"three-state iid theoretical MCSE: {math.sqrt(17 / (36 * args.draws)):.6f}")
    print(f"two-state exact stationary E[X]: {1 / 3:.6f}")
    print(f"two-state chain average from X_0=0: {two_state_chain(rng_chain, args.draws):.6f}")
    print("Chain average includes its initial transient; no empirical MCSE is inferred.")
    compare_movement(args.seed + 2)


if __name__ == "__main__":
    main()
