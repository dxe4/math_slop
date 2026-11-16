"""Chapter 41: Ising ring, heat bath, and histogram reweighting.

Run with ``python examples/ch41.py``. All energies use J=1 and h=0.
The numerical agreement is a small-system control, not a mixing guarantee.
"""

from itertools import product
from math import exp, isclose, sqrt
from random import Random


N_SITES = 4
BETA = 0.5
SEED = 4101


def energy(spins):
    """Each of the four undirected ring bonds is counted once."""
    return -sum(spins[i] * spins[(i + 1) % N_SITES] for i in range(N_SITES))


def observables(spins):
    magnetization = sum(spins)
    return energy(spins), magnetization * magnetization, abs(magnetization)


def exact_moments(beta):
    weighted = [0.0, 0.0, 0.0]
    partition = 0.0
    degeneracies = {}
    for spins in product((-1, 1), repeat=N_SITES):
        values = observables(spins)
        e = values[0]
        degeneracies[e] = degeneracies.get(e, 0) + 1
        weight = exp(-beta * e)
        partition += weight
        for j, value in enumerate(values):
            weighted[j] += weight * value
    return partition, tuple(value / partition for value in weighted), degeneracies


def heat_bath_step(spins, beta, rng):
    site = rng.randrange(N_SITES)
    left = spins[(site - 1) % N_SITES]
    right = spins[(site + 1) % N_SITES]
    local_field = left + right
    # At this beta and degree, the direct logistic evaluation is safe.
    probability_plus = 1.0 / (1.0 + exp(-2.0 * beta * local_field))
    spins[site] = 1 if rng.random() < probability_plus else -1


def check_energy_increments():
    for state in product((-1, 1), repeat=N_SITES):
        for site in range(N_SITES):
            spins = list(state)
            predicted = 2 * spins[site] * (
                spins[(site - 1) % N_SITES]
                + spins[(site + 1) % N_SITES]
            )
            before = energy(spins)
            spins[site] *= -1
            assert energy(spins) - before == predicted


def sample_observations(beta, seed, burn_sweeps=2_000, kept_sweeps=80_000):
    rng = Random(seed)
    spins = [1] * N_SITES
    retained = []
    for sweep in range(burn_sweeps + kept_sweeps):
        for _ in range(N_SITES):
            heat_bath_step(spins, beta, rng)
        if sweep >= burn_sweeps:
            retained.append(observables(spins))
    return retained


def sample_moments(beta, seed, burn_sweeps=2_000, kept_sweeps=80_000):
    values = sample_observations(beta, seed, burn_sweeps, kept_sweeps)
    return tuple(sum(row[j] for row in values) / len(values) for j in range(3))


def reweighted_energy(
    energies: list[int], source_beta: float, target_beta: float, block_size: int
) -> tuple[float, float, float]:
    """Return energy, block jackknife SE, and weight concentration count.

    Blocks must be long compared with dependence. The last value ignores
    autocorrelation and unseen states; it is NOT a Markov-chain ESS.
    """
    if block_size <= 0 or len(energies) % block_size or len(energies) < 2 * block_size:
        raise ValueError("Use at least two complete, nonempty equal-length blocks.")
    log_weights = [-(target_beta - source_beta) * e for e in energies]
    shift = max(log_weights)
    weights = [exp(value - shift) for value in log_weights]
    denominator = sum(weights)
    numerator = sum(w * e for w, e in zip(weights, energies))
    estimate = numerator / denominator
    deleted = []
    for start in range(0, len(energies), block_size):
        stop = start + block_size
        block_w = sum(weights[start:stop])
        block_we = sum(w * e for w, e in zip(weights[start:stop], energies[start:stop]))
        remaining = denominator - block_w
        if remaining <= 0:
            raise ValueError("Weights collapse into one block; reduce the temperature shift.")
        deleted.append((numerator - block_we) / remaining)
    count = len(deleted)
    center = sum(deleted) / count
    se = sqrt((count - 1) / count * sum((value - center) ** 2 for value in deleted))
    weight_count = denominator**2 / sum(w * w for w in weights)
    return estimate, se, weight_count


def check_reweighting_identity() -> None:
    """Check the population identity independently against exact enumeration."""
    rows = [observables(s) for s in product((-1, 1), repeat=N_SITES)]
    source_z = exact_moments(BETA)[0]
    for target_beta in (0.0, 0.25, 0.6, 1.0):
        weighted = [exp(-BETA * row[0]) / source_z
                    * exp(-(target_beta - BETA) * row[0]) for row in rows]
        moments = tuple(sum(w * row[j] for w, row in zip(weighted, rows))
                        / sum(weighted) for j in range(3))
        assert all(isclose(a, b, abs_tol=1e-12)
                   for a, b in zip(moments, exact_moments(target_beta)[1]))
    # Deliberately censored data, not output from the heat-bath experiment.
    bad, se, weight_count = reweighted_energy([-4] * 100, BETA, 0.0, 10)
    assert bad == -4 and se == 0 and weight_count == 100
    assert exact_moments(0.0)[1][0] == 0


if __name__ == "__main__":
    check_energy_increments()
    check_reweighting_identity()
    partition, exact, degeneracies = exact_moments(BETA)
    retained = sample_observations(BETA, SEED)
    sampled = tuple(sum(row[j] for row in retained) / len(retained) for j in range(3))
    print(f"four-spin ring: beta J={BETA}, seed={SEED}")
    print(f"energy degeneracies: {dict(sorted(degeneracies.items()))}")
    print(f"partition function: {partition:.6f}")
    for name, truth, estimate in zip(("E", "M^2", "|M|"), exact, sampled):
        print(f"{name:>3}: exact={truth: .6f}, heat-bath={estimate: .6f}")
    print("All 64 local energy-increment checks passed.")
    energies = [row[0] for row in retained]
    print("Reweighted energy; SE is a block jackknife estimate, not a convergence test:")
    for target_beta in (0.25, 0.6, 1.0):
        estimate, se, count = reweighted_energy(energies, BETA, target_beta, 1_000)
        print(f"beta={target_beta:.2f}: exact={exact_moments(target_beta)[1][0]: .6f}, "
              f"estimate={estimate: .6f}, SE={se:.6f}, weight count={count:.1f}/80000")
    print("SE sensitivity at beta=0.6, block sizes 500 and 1000:",
          [round(reweighted_energy(energies, BETA, 0.6, size)[1], 6)
           for size in (500, 1_000)])
    print("Exact reweighting identity checks passed at four target temperatures.")
    print("Censored ground-state data at target beta=0: estimate=-4, exact=0, "
          "jackknife SE=0, weight count=100/100 (deliberately misleading).")
