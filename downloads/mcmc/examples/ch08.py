"""Chapter 08: analytic convergence calculations and a seeded moment check."""

from fractions import Fraction
from math import exp, fsum, isclose, log, pi, sqrt
from random import Random


def regeneration_example() -> None:
    """One-step splitting, with exact matrix checks and labeled complete tours."""
    transition = (
        (Fraction(9, 10), Fraction(1, 10)),
        (Fraction(3, 10), Fraction(7, 10)),
    )
    stationary = (Fraction(3, 4), Fraction(1, 4))
    refresh = Fraction(1, 5)
    nu = (Fraction(1, 2), Fraction(1, 2))
    residual = ((Fraction(1), Fraction(0)), (Fraction(1, 4), Fraction(3, 4)))
    for state in range(2):
        assert sum(transition[state]) == sum(residual[state]) == 1
        for destination in range(2):
            assert transition[state][destination] == (
                refresh * nu[destination]
                + (1 - refresh) * residual[state][destination]
            )
        assert sum(stationary[i] * transition[i][state] for i in range(2)) == (
            stationary[state]
        )

    # Solve the residual-tour reward recursion g = f + (1-epsilon) Rg.
    expected_reward_from_zero = Fraction(0)
    expected_reward_from_one = 1 / (1 - (1 - refresh) * residual[1][1])
    expected_reward = (
        nu[0] * expected_reward_from_zero + nu[1] * expected_reward_from_one
    )
    expected_length = 1 / refresh
    assert expected_reward == Fraction(5, 4)
    assert expected_reward / expected_length == stationary[1]
    wrong_limit = 0.5 * log(2)
    summed_tour_means = fsum(
        0.5 * (0.8**length - 0.6**length) / length
        for length in range(1, 301)
    )
    assert isclose(summed_tour_means, wrong_limit, abs_tol=1e-14)

    rng = Random(809)
    transitions = 200_000
    x = 0
    started = False
    length = reward = 0
    complete_tours: list[tuple[int, int]] = []
    refresh_count = same_state_refreshes = 0
    for _ in range(transitions):
        if started:
            # Count the current state; the next refresh state starts a new tour.
            length += 1
            reward += x
        if rng.random() < float(refresh):
            if started:
                complete_tours.append((length, reward))
            previous = x
            x = int(rng.random() < float(nu[1]))
            refresh_count += 1
            same_state_refreshes += int(previous == x)
            started = True
            length = reward = 0
        elif x == 1:
            x = int(rng.random() < float(residual[1][1]))

    # Discard the initial segment and the unfinished final tour.
    assert complete_tours
    assert len(complete_tours) == refresh_count - 1
    total_length = sum(length for length, _ in complete_tours)
    total_reward = sum(reward for _, reward in complete_tours)
    equal_tour_average = fsum(
        reward / length for length, reward in complete_tours
    ) / len(complete_tours)
    print("Regeneration: exact split P=(1/5) nu + (4/5) R verified")
    print(f"E[length]={expected_length}, E[reward]={expected_reward}; ratio=1/4")
    print(f"Completed tours: {len(complete_tours)}; observations: {total_length}")
    print(f"Mean length: {total_length / len(complete_tours):.5f} (target 5)")
    print(f"Reward/length ratio: {total_reward / total_length:.5f} (target 0.25)")
    print(
        f"Equal tour average: {equal_tour_average:.5f} "
        f"(wrong limit {wrong_limit:.5f})"
    )
    print(f"Labeled refreshes with no visible change: {same_state_refreshes}")
    print("Seeded tour summaries illustrate asymptotic limits, not finite-run guarantees.")


def main() -> None:
    a = 0.8
    sigma = sqrt(1 - a * a)
    radius = sqrt(3)
    width = 0.3
    drift_factor = (1 + a * a) / 2
    allowance = 3 * (1 - a * a) / 2
    density_floor = exp(-(width + abs(a) * radius) ** 2 / (2 * sigma**2))
    density_floor /= sqrt(2 * pi) * sigma
    epsilon = 2 * width * density_floor
    print(f"Gaussian AR(1): a={a}, sigma={sigma:.6f}")
    print(f"Drift: lambda={drift_factor:.6f}, b={allowance:.6f}")
    print(f"Local minorization: epsilon={epsilon:.8f}; C=[-sqrt(3),sqrt(3)]")

    rng = Random(808)
    x = 12.0
    retained = 100_000
    burn_in = 1_000
    total = 0.0
    squares = 0.0
    for step in range(burn_in + retained):
        x = a * x + sigma * rng.gauss(0.0, 1.0)
        if step >= burn_in:
            total += x
            squares += x * x
    print(f"Seeded average: X={total / retained:.5f} (target 0)")
    print(f"Seeded average: X^2={squares / retained:.5f} (target 1)")
    print("Moment agreement is an illustration, not a convergence proof.")

    initial = 2
    print("Escape chain from x=2: exact TV distances")
    for steps in (1, 10, 100, 1000):
        product = Fraction(1)
        for state in range(initial, initial + steps):
            product *= Fraction(state * state - 1, state * state)
        closed_form = Fraction(
            (initial - 1) * (initial + steps),
            initial * (initial + steps - 1),
        )
        assert product == closed_form
        print(f"n={steps:4d}: {product} = {float(product):.8f}")
    print("Limiting TV distance: 1/2; this chain is not Harris recurrent.")
    regeneration_example()


if __name__ == "__main__":
    main()
