"""A finite, constrained MCMC example for Chapter 29 (standard library only)."""

from fractions import Fraction
from itertools import combinations, permutations, product
from math import isclose
from random import Random


COEFFICIENTS = (1, 2, 3, 4)  # exp(a_i), avoiding unnecessary floating point work
STATES = tuple(combinations(range(4), 2))
WEIGHTS = {state: COEFFICIENTS[state[0]] * COEFFICIENTS[state[1]] for state in STATES}
Z = sum(WEIGHTS.values())
LAZINESS = 0.5


def neighbors(state):
    """All exchanges of one occupied and one unoccupied position."""
    occupied = set(state)
    return tuple(
        tuple(sorted((occupied - {i}) | {j}))
        for i in state
        for j in range(4)
        if j not in occupied
    )


def transition_matrix():
    """Exact one-step transition probabilities, including rejection and laziness."""
    matrix = {x: {y: 0.0 for y in STATES} for x in STATES}
    for x in STATES:
        matrix[x][x] += LAZINESS
        for y in neighbors(x):
            matrix[x][y] += (1 - LAZINESS) / 4 * min(1.0, WEIGHTS[y] / WEIGHTS[x])
        matrix[x][x] = 1.0 - sum(p for y, p in matrix[x].items() if y != x)
    return matrix


def simulate(rng, steps=200_000, burn=2_000):
    state = STATES[0]
    count_fourth = 0
    accepted = 0
    for t in range(steps + burn):
        if rng.random() >= LAZINESS:
            candidate = rng.choice(neighbors(state))
            if rng.random() < min(1.0, WEIGHTS[candidate] / WEIGHTS[state]):
                state = candidate
                if t >= burn:
                    accepted += 1
        if t >= burn:
            count_fourth += 3 in state
    return count_fourth / steps, accepted / steps


def component_count(matrix: dict) -> int:
    """Count components of the symmetric positive-transition support used here."""
    unseen = set(matrix)
    count = 0
    while unseen:
        count += 1
        frontier = [unseen.pop()]
        while frontier:
            x = frontier.pop()
            reached = {y for y in unseen if matrix[x][y] > 0}
            unseen.difference_update(reached)
            frontier.extend(reached)
    return count


def check_rational_kernel(matrix: dict, weights: dict) -> None:
    """Exact arithmetic checks; connectivity is deliberately checked separately."""
    total = sum(weights.values())
    pi = {x: Fraction(w, total) for x, w in weights.items()}
    for x in matrix:
        assert all(value >= 0 for value in matrix[x].values())
        assert sum(matrix[x].values()) == 1
        assert sum(pi[y] * matrix[y][x] for y in matrix) == pi[x]
        for y in matrix:
            assert pi[x] * matrix[x][y] == pi[y] * matrix[y][x]


def constrained_assignments() -> None:
    """Derangements of three objects: transpositions fail, rotations connect."""
    states = tuple(s for s in permutations(range(3))
                   if all(s[i] != i for i in range(3)))
    x, y = (1, 2, 0), (2, 0, 1)
    assert states == (x, y)
    weights = {s: 3 if s[1] == 0 else 1 for s in states}
    matrices = {}
    for name in ("transposition", "rotation"):
        matrix = {s: {t: Fraction(0) for t in states} for s in states}
        for s in states:
            if name == "transposition":
                candidates = []
                for i, j in combinations(range(3), 2):
                    candidate = list(s)
                    candidate[i], candidate[j] = candidate[j], candidate[i]
                    candidates.append(tuple(candidate))
            else:
                candidates = [s[1:] + s[:1], s[-1:] + s[:-1]]
            matrix[s][s] = Fraction(1, 2)
            proposal_mass = Fraction(1, 2 * len(candidates))
            for candidate in candidates:
                if candidate not in weights:
                    matrix[s][s] += proposal_mass
                    continue
                acceptance = min(Fraction(1), Fraction(weights[candidate], weights[s]))
                matrix[s][candidate] += proposal_mass * acceptance
                matrix[s][s] += proposal_mass * (1 - acceptance)
        check_rational_kernel(matrix, weights)
        matrices[name] = matrix
    assert component_count(matrices["transposition"]) == 2
    p = matrices["rotation"]
    assert component_count(p) == 1
    assert p[x] == {x: Fraction(3, 4), y: Fraction(1, 4)}
    assert p[y] == {x: Fraction(1, 12), y: Fraction(11, 12)}
    print("forbidden assignments: transposition components=2, rotation components=1")
    print("rotation P=[[3/4, 1/4], [1/12, 11/12]], pi=[1/4, 3/4] (rational checks)")


def path_and_cluster_checks() -> None:
    """Audit the chapter's path correction and two-spin augmentation exactly."""
    states = (0, 1, 2)
    weights = (1, 4, 1)
    # sqrt(w[y]/w[x]) on this particular path is exactly 2 or 1/2.
    roots = (1, 2, 1)
    adjacent = ((1,), (0, 2), (1,))
    normalizers = {
        x: sum(Fraction(roots[y], roots[x]) for y in adjacent[x]) for x in states
    }
    q = {x: {y: Fraction(0) for y in states} for x in states}
    p = {x: {y: Fraction(0) for y in states} for x in states}
    for x in states:
        for y in adjacent[x]:
            q[x][y] = Fraction(roots[y], roots[x]) / normalizers[x]
            p[x][y] = q[x][y] * min(Fraction(1), normalizers[x] / normalizers[y])
        p[x][x] = 1 - sum(p[x].values())
    check_rational_kernel(p, dict(enumerate(weights)))
    check_rational_kernel(q, {x: weights[x] * normalizers[x] for x in states})
    assert p[1] == {0: Fraction(1, 4), 1: Fraction(1, 2), 2: Fraction(1, 4)}
    assert sum(Fraction(weights[x], 6) * q[x][1] for x in states) == Fraction(1, 3)

    # K=log(2) gives exp(-2K)=1/4, hence bond-opening probability 3/4.
    spins = tuple(product((-1, 1), repeat=2))
    spin_weights = {s: 4 if s[0] == s[1] else 1 for s in spins}
    cluster = {s: {t: Fraction(0) for t in spins} for s in spins}
    for s in spins:
        open_probability = Fraction(3, 4) if s[0] == s[1] else Fraction(0)
        for t in spins:
            # Closed bond: two independent signs. Open bond: one shared sign.
            cluster[s][t] = (1 - open_probability) / 4
            if t[0] == t[1]:
                cluster[s][t] += open_probability / 2
    check_rational_kernel(cluster, spin_weights)
    assert component_count(cluster) == 1
    print("locally balanced path and two-spin cluster: rational balance/stationarity checks passed")


def main():
    p = transition_matrix()
    pi = {x: WEIGHTS[x] / Z for x in STATES}
    row_error = max(abs(sum(p[x].values()) - 1) for x in STATES)
    balance_error = max(
        abs(pi[x] * p[x][y] - pi[y] * p[y][x])
        for x in STATES for y in STATES
    )
    stationary_error = max(
        abs(sum(pi[x] * p[x][y] for x in STATES) - pi[y]) for y in STATES
    )
    assert all(p[x][y] >= 0 for x in STATES for y in STATES)
    assert isclose(row_error, 0, abs_tol=1e-12)
    assert isclose(balance_error, 0, abs_tol=1e-12)
    assert isclose(stationary_error, 0, abs_tol=1e-12)
    assert component_count(p) == 1
    estimate, acceptance = simulate(Random(29))
    truth = sum(pi[x] for x in STATES if 3 in x)
    print(f"states={len(STATES)}, normalizer={Z}")
    print(f"max row error={row_error:.2g}, balance error={balance_error:.2g}, invariant error={stationary_error:.2g}")
    print(f"P(bit 4 included): exact={truth:.6f}, chain={estimate:.6f}")
    print(f"accepted exchanges per iteration={acceptance:.3f}")
    constrained_assignments()
    path_and_cluster_checks()


if __name__ == "__main__":
    main()
