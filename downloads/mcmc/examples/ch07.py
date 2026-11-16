"""Chapter 07: exact finite-chain calculations beside seeded trajectories.

Run with ``python examples/ch07.py``. No third-party packages are needed.
"""

import math
import random


def advance(distribution, transition):
    """Multiply a row probability vector by a row-stochastic matrix."""
    return [
        sum(distribution[i] * transition[i][j] for i in range(len(transition)))
        for j in range(len(transition))
    ]


def total_variation(left, right):
    return sum(abs(a - b) for a, b in zip(left, right)) / 2


def trajectory(transition, start, steps, seed):
    """Count states X_0,...,X_(steps-1); use exactly steps-1 updates."""
    rng = random.Random(seed)
    state = start
    counts = [0] * len(transition)
    for step in range(steps):
        counts[state] += 1
        if step == steps - 1:
            break
        u = rng.random()
        cumulative = 0.0
        for next_state, probability in enumerate(transition[state]):
            cumulative += probability
            if u < cumulative:
                state = next_state
                break
        else:  # Only a last-bit floating-point rounding guard.
            state = len(transition) - 1
    return [count / steps for count in counts]


def audit(name, transition, stationary):
    row_sums = [sum(row) for row in transition]
    residual = max(abs(a - b) for a, b in zip(advance(stationary, transition), stationary))
    assert all(all(p >= 0 for p in row) for row in transition)
    assert all(abs(s - 1) < 1e-14 for s in row_sums)
    assert residual < 1e-14
    print(f"{name}: row sums {row_sums}; invariance residual {residual:.3g}")


def worst_case_distances(transition, stationary, horizon):
    """Compute TV from every start using matrix powers, including time zero."""
    size = len(transition)
    rows = [[float(i == j) for j in range(size)] for i in range(size)]
    distances = []
    for step in range(horizon + 1):
        distances.append(max(total_variation(row, stationary) for row in rows))
        if step < horizon:
            rows = [advance(row, transition) for row in rows]
    return distances


def check_spectral_bound(transition, stationary, rho, horizon):
    """Compare exact matrix evolution with a supplied, analytically known rho."""
    distances = worst_case_distances(transition, stationary, horizon)
    prefactor = math.sqrt(1 / min(stationary) - 1) / 2
    bounds = [min(1.0, prefactor * rho ** t) for t in range(horizon + 1)]
    assert all(distance <= bound + 1e-14 for distance, bound in zip(distances, bounds))
    return distances, bounds


def main():
    two_state = [[0.9, 0.1], [0.2, 0.8]]
    two_stationary = [2 / 3, 1 / 3]
    path = [[0.5, 0.5, 0.0], [0.25, 0.5, 0.25], [0.0, 0.5, 0.5]]
    path_stationary = [0.25, 0.5, 0.25]
    audit("Two-state", two_state, two_stationary)
    audit("Lazy path", path, path_stationary)

    tolerance = 0.01
    t = 0
    while 2 * (0.7 ** t) / 3 > tolerance:
        t += 1
    print(f"Two-state worst-case TV <= {tolerance} first at t={t}; "
          f"distance={2 * (0.7 ** t) / 3:.8f}")
    assert t == 12
    exact, _ = check_spectral_bound(two_state, two_stationary, 0.7, 20)
    assert next(t for t, distance in enumerate(exact) if distance <= tolerance) == 12
    assert max(abs(distance - 2 * 0.7 ** t / 3)
               for t, distance in enumerate(exact)) < 1e-14
    from_one = [0.0, 1.0]
    for lag in range(21):
        covariance = two_stationary[1] * from_one[1] - two_stationary[1] ** 2
        assert abs(covariance - (2 / 9) * 0.7 ** lag) < 1e-14
        from_one = advance(from_one, two_state)

    distribution = [1.0, 0.0, 0.0]
    for step in range(6):
        if step in (0, 1, 2, 5):
            print(f"Lazy path t={step}: {distribution}; "
                  f"TV={total_variation(distribution, path_stationary):.6f}")
        distribution = advance(distribution, path)

    exact, bounds = check_spectral_bound(path, path_stationary, 0.5, 20)
    assert exact[0] == 0.75
    assert all(abs(distance - 2 ** (-t - 1)) < 1e-14
               for t, distance in enumerate(exact) if t >= 1)
    exact_time = next(t for t, distance in enumerate(exact) if distance <= tolerance)
    bound_time = next(t for t, bound in enumerate(bounds) if bound <= tolerance)
    assert (exact_time, bound_time) == (6, 7)
    print(f"Lazy path: exact mixing time={exact_time}; spectral guarantee={bound_time}; "
          f"bound at t=6: {bounds[6]:.8f}; bound at t=7: {bounds[7]:.8f}")

    for epsilon, expected_time in ((0.1, 18), (0.01, 194)):
        transition = [[1 - epsilon, epsilon], [epsilon, 1 - epsilon]]
        distances = worst_case_distances(transition, [0.5, 0.5], expected_time)
        computed_time = next(t for t, distance in enumerate(distances) if distance <= tolerance)
        assert computed_time == expected_time
        assert all(abs(distance - 0.5 * (1 - 2 * epsilon) ** t) < 1e-14
                   for t, distance in enumerate(distances))
        print(f"Symmetric switching epsilon={epsilon}: mixing time={computed_time}")

    steps = 50_000
    for name, transition, stationary, seed in (
        ("Two-state", two_state, two_stationary, 20260701),
        ("Lazy path", path, path_stationary, 20260702),
    ):
        observed = trajectory(transition, start=0, steps=steps, seed=seed)
        print(f"{name}: seed={seed}, n={steps}, occupancy={observed}, "
              f"stationary={stationary}")
    print("Occupancy agreement is illustrative; it is not a convergence test.")


if __name__ == "__main__":
    main()
