"""Bounded, seeded CFTP demonstrations; standard library only.

The ideal uncapped construction is exact under the chapter's assumptions.
A capped failure aborts the experiment: completed subsets are not reported
as target draws after a failure. Floating-point and PRNG qualifications apply.
"""

from collections import Counter, defaultdict
from collections.abc import Callable, Hashable
from fractions import Fraction
from itertools import product
from math import exp
from random import Random
from sys import exit
from typing import TypeVar

State = TypeVar("State", bound=Hashable)
MapInput = TypeVar("MapInput")


class HorizonExceeded(RuntimeError):
    """Coalescence was not certified within the demonstration's cap."""


def cftp(
    rng: Random,
    draw_input: Callable[[Random], MapInput],
    update: Callable[[State, MapInput], State],
    bottom: State,
    top: State,
    max_horizon: int = 4096,
) -> tuple[State, int, int]:
    """Return (state, horizon, work), testing powers of two up to the cap.

    Preconditions: bottom/top enclose every state, update preserves that order,
    and draw_input supplies independent inputs with the intended map law.
    """
    if max_horizon < 1:
        raise ValueError("max_horizon must be positive")
    maps: dict[int, MapInput] = {}
    horizon = 1
    work = 0
    while horizon <= max_horizon:
        for time in range(-horizon, 0):
            if time not in maps:
                maps[time] = draw_input(rng)
        lower, upper = bottom, top
        for time in range(-horizon, 0):
            lower = update(lower, maps[time])
            upper = update(upper, maps[time])
            work += 2
        if lower == upper:
            return lower, horizon, work
        horizon *= 2
    raise HorizonExceeded(
        f"no certificate at tested horizons through {horizon // 2} "
        f"(cap {max_horizon})"
    )


def reset_input(rng: Random) -> int:
    return rng.randrange(2)


def reset_update(state: int, drift: int) -> int:
    return min(state + 1, 2) if drift else 0


def spin_input(rng: Random) -> tuple[int, float]:
    return rng.randrange(2), rng.random()


def spin_update(
    state: tuple[int, int], map_input: tuple[int, float]
) -> tuple[int, int]:
    site, uniform = map_input
    threshold = 1.0 / (1.0 + exp(-0.8 * state[1 - site]))
    result = list(state)
    result[site] = 1 if uniform < threshold else -1
    return result[0], result[1]


def check_reset_laws(limit: int, p: Fraction) -> None:
    """Enumerate small histories to check the joint output/runtime law exactly."""
    if not 1 <= limit <= 8 or not 0 < p < 1:
        raise ValueError("use 1 <= limit <= 8 and 0 < p < 1")
    q = 1 - p
    largest_horizon = 1 << (limit - 1).bit_length()
    # The sampler reveals time -1, then -2, then -4,-3, and so on.
    reveal_order = [-1]
    horizon = 2
    while horizon <= largest_horizon:
        reveal_order.extend(range(-horizon, -(horizon // 2)))
        horizon *= 2
    joint: dict[tuple[int, int], Fraction] = defaultdict(Fraction)
    horizon_mass: dict[int, Fraction] = defaultdict(Fraction)
    total_work = Fraction(0)
    rng = Random(32003)

    def update(state: int, drift: int) -> int:
        return min(state + 1, limit) if drift else 0

    for history in product((0, 1), repeat=largest_horizon):
        probability = p ** history.count(0) * q ** history.count(1)
        # Independently compose every initial state over chronological suffixes.
        for t_star in range(1, limit + 1):
            images = set(range(limit + 1))
            for drift in history[-t_star:]:
                images = {update(state, drift) for state in images}
            if len(images) == 1:
                break
        assert len(images) == 1
        endpoint = next(iter(images))
        inputs = iter(history[largest_horizon + time] for time in reveal_order)
        state, horizon, work = cftp(
            rng, lambda _: next(inputs), update, 0, limit, largest_horizon
        )
        assert state == endpoint
        assert horizon == 1 << (t_star - 1).bit_length()
        assert work == 4 * horizon - 2
        joint[(endpoint, t_star)] += probability
        horizon_mass[horizon] += probability
        total_work += probability * work

    expected_joint = {
        (z, min(z + 1, limit)): p * q**z for z in range(limit)
    }
    expected_joint[(limit, limit)] = q**limit
    assert dict(joint) == expected_joint
    expected_t = sum(t * mass for (_, t), mass in joint.items())
    assert expected_t == (1 - q**limit) / p

    def tail(t: int) -> Fraction:
        return q**t if t < limit else Fraction(0)

    assert horizon_mass[1] == 1 - tail(1)
    horizon = 2
    while horizon <= largest_horizon:
        assert horizon_mass[horizon] == tail(horizon // 2) - tail(horizon)
        horizon *= 2
    print(f"Exact history check: L={limit}, p={p}; "
          f"E[T_star]={expected_t}, E[work]={total_work}")
    print("  horizon probabilities: " + ", ".join(
        f"{h}: {horizon_mass[h]}" for h in sorted(horizon_mass)
    ))
    if limit > 2:
        cap = 2
        complete = sum(mass for (_, t), mass in joint.items() if t <= cap)
        target = {z: p * q**z for z in range(limit)}
        target[limit] = q**limit
        retained = {
            z: sum(mass for (state, t), mass in joint.items()
                   if state == z and t <= cap) / complete
            for z in range(limit + 1)
        }
        assert complete == 1 - q**cap
        distance = sum(abs(retained[z] - target[z]) for z in target) / 2
        assert distance == q**cap
        print(f"  cap={cap}: completion={complete}, "
              f"conditional TV distance={distance}")


def experiment(
    name: str,
    seed: int,
    draw_input: Callable[[Random], MapInput],
    update: Callable[[State, MapInput], State],
    bottom: State,
    top: State,
    target: dict[State, float],
    n: int = 20000,
) -> bool:
    if n < 1:
        raise ValueError("n must be positive")
    rng = Random(seed)
    counts: Counter[State] = Counter()
    total_work = 0
    largest_horizon = 0
    try:
        for _ in range(n):
            state, horizon, work = cftp(rng, draw_input, update, bottom, top)
            counts[state] += 1
            total_work += work
            largest_horizon = max(largest_horizon, horizon)
    except HorizonExceeded as error:
        print(f"{name}: completed={sum(counts.values())}, cap_failures=1")
        print(f"Aborted: {error}; no frequency summary of censored results.")
        return False
    print(f"{name}: completed={n}, cap_failures=0")
    for state, probability in target.items():
        print(f"  {str(state):>9}: target={probability:.6f}, "
              f"observed={counts[state] / n:.6f}")
    print(f"  mean map evaluations={total_work / n:.3f}; "
          f"maximum horizon={largest_horizon}")
    if name == "two spins":
        aligned = (counts[(-1, -1)] + counts[(1, 1)]) / n
        print(f"  observed alignment probability={aligned:.6f}")
    return True


def main() -> int:
    print("Capped numerical demonstration of ideal CFTP; fixed PRNG seeds.")
    check_reset_laws(2, Fraction(1, 2))
    check_reset_laws(5, Fraction(1, 4))
    reset_ok = experiment(
        "reset and drift", 32001, reset_input, reset_update, 0, 2,
        {0: 0.5, 1: 0.25, 2: 0.25},
    )
    if not reset_ok:
        return 1
    normalizer = 2 * exp(0.4) + 2 * exp(-0.4)
    spin_target = {
        (a, b): exp(0.4 * a * b) / normalizer
        for a in (-1, 1) for b in (-1, 1)
    }
    spin_ok = experiment(
        "two spins", 32002, spin_input, spin_update,
        (-1, -1), (1, 1), spin_target,
    )
    return 0 if spin_ok else 1


if __name__ == "__main__":
    exit(main())
