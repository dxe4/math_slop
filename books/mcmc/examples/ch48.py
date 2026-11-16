"""Small, reproducible capstone checks; standard library only.

The chains are teaching examples. Batch-means MCSEs are approximate and do not
include warmup bias or establish that a chain visited every important region.
"""

import itertools
import math
import random
import statistics


def softplus(x):
    return max(x, 0.0) + math.log1p(math.exp(-abs(x)))


def theta_from_logit(z):
    if z >= 0:
        return 1.0 / (1.0 + math.exp(-z))
    ez = math.exp(z)
    return ez / (1.0 + ez)


def log_target(z, missing_jacobian=False):
    # Beta(16, 8) density in theta; add the theta(1-theta) Jacobian in z.
    a, b = (15, 7) if missing_jacobian else (16, 8)
    return -a * softplus(-z) - b * softplus(z)


def mh_beta(seed, iterations=30000, warmup=5000, step=1.5,
            missing_jacobian=False):
    rng = random.Random(seed)
    z = 0.0
    logp = log_target(z, missing_jacobian)
    values = []
    accepted = 0
    for i in range(iterations + warmup):
        proposal = z + rng.gauss(0.0, step)
        proposed_logp = log_target(proposal, missing_jacobian)
        if math.log1p(-rng.random()) < min(0.0, proposed_logp - logp):
            z, logp = proposal, proposed_logp
            if i >= warmup:
                accepted += 1
        if i >= warmup:
            values.append(float(theta_from_logit(z) > 0.5))
    return values, accepted / iterations


def batch_mcse(chains, batches_per_chain=30):
    # Approximate long-run uncertainty from adjacent, nonoverlapping batches.
    # Adjacent batch means need not be independent at this finite batch size.
    batch_means = []
    for values in chains:
        width = len(values) // batches_per_chain
        for j in range(batches_per_chain):
            block = values[j * width:(j + 1) * width]
            batch_means.append(statistics.mean(block))
    return statistics.stdev(batch_means) / math.sqrt(len(batch_means))


def beta_tail(a: int, b: int) -> float:
    """Exact integer-sum identity at one half, rounded to a Python float."""
    return sum(math.comb(a + b - 1, j) for j in range(a)) / 2**(a + b - 1)


def probability_envelope(estimate: float, mc_half_width: float,
                         bias_bound: float) -> tuple[float, float]:
    """Combine an externally justified MC half-width and absolute bias bound.

    This arithmetic cannot certify either input or replace a missing bound.
    """
    if not 0 <= estimate <= 1:
        raise ValueError("The estimated probability must lie in [0, 1].")
    if not all(math.isfinite(x) and x >= 0
               for x in (mc_half_width, bias_bound)):
        raise ValueError("Error allowances must be finite and nonnegative.")
    radius = mc_half_width + bias_bound
    return max(0.0, estimate - radius), min(1.0, estimate + radius)


def decision_budget(estimate: float, mcse: float) -> None:
    print("Decision audit at threshold 0.95 (fixed-run normal approximation)")
    for bound in (0.0, 0.001, 0.003):
        lower, upper = probability_envelope(estimate, 1.96 * mcse, bound)
        status = "above" if lower > 0.95 else "below" if upper <= 0.95 else "unresolved"
        label = "actual beta target" if bound == 0 else "hypothetical solver bound"
        print(f"  B={bound:.3f} ({label}): [{lower:.6f}, {upper:.6f}] {status}")
    tails = [beta_tail(14 + prior, 6 + prior) for prior in (1, 2, 4)]
    print("  exact prior sensitivity, Beta(c,c), c=1,2,4: "
          + ", ".join(f"{p:.6f}" for p in tails))
    print(f"  model range [{min(tails):.6f}, {max(tails):.6f}] straddles 0.95")


def beta_project():
    exact_tail = beta_tail(16, 8)
    rng = random.Random(4801)
    iid = [float(rng.betavariate(16, 8) > 0.5) for _ in range(100000)]
    iid_mean = statistics.mean(iid)
    iid_se = math.sqrt(iid_mean * (1 - iid_mean) / len(iid))
    chains_and_rates = [mh_beta(4810 + k) for k in range(4)]
    chains = [c for c, _ in chains_and_rates]
    pooled = [value for chain in chains for value in chain]
    wrong_chains = [mh_beta(4890 + k, missing_jacobian=True)[0]
                    for k in range(4)]
    wrong_exact = beta_tail(15, 7)
    print("Beta-binomial decision: Pr(theta > 0.5 | y)")
    print(f"  exact Beta(16,8):              {exact_tail:.6f}")
    print(f"  iid beta reference:            {iid_mean:.6f}  iid SE ~ {iid_se:.6f}")
    print(f"  four logit MH chains:          {statistics.mean(pooled):.6f}  "
          f"batch MCSE ~ {batch_mcse(chains):.6f}")
    print(f"  mean post-warmup acceptance:   "
          f"{statistics.mean(rate for _, rate in chains_and_rates):.3f}")
    print(f"  WRONG missing-Jacobian chain:  "
          f"{statistics.mean(x for c in wrong_chains for x in c):.6f}")
    print(f"  exact WRONG Beta(15,7) tail:   {wrong_exact:.6f}")
    decision_budget(statistics.mean(pooled), batch_mcse(chains))


def spin_statistics(spins):
    score = sum(spins[i] * spins[(i + 1) % 4] for i in range(4))
    magnetization = sum(spins)
    return score, magnetization


def enumerate_ising(beta):
    states = [spin_statistics(s) for s in itertools.product((-1, 1), repeat=4)]
    weights = [math.exp(beta * score) for score, _ in states]
    z = sum(weights)
    return (z,
            sum(w * score for w, (score, _) in zip(weights, states)) / z,
            sum(w * abs(m) for w, (_, m) in zip(weights, states)) / z,
            sum(w * m for w, (_, m) in zip(weights, states)) / z)


def ising_chain(beta, seed, iterations=120000, warmup=5000):
    rng = random.Random(seed)
    spins = [1, 1, 1, 1]
    stats = []
    accepted = 0
    for t in range(iterations + warmup):
        i = rng.randrange(4)  # random-scan single-spin proposal
        old_score, _ = spin_statistics(spins)
        spins[i] *= -1
        new_score, new_m = spin_statistics(spins)
        if math.log1p(-rng.random()) < min(0.0, beta * (new_score - old_score)):
            if t >= warmup:
                accepted += 1
        else:
            spins[i] *= -1
            new_score, new_m = spin_statistics(spins)
        if t >= warmup:
            stats.append((new_score, abs(new_m), new_m))
    return tuple(statistics.mean(row[j] for row in stats) for j in range(3)), accepted / iterations


def ising_project():
    print("Four-spin periodic Ising ring (one random-site proposal per step)")
    for beta in (0.0, 0.5):
        z, exact_s, exact_abs_m, exact_m = enumerate_ising(beta)
        runs = [ising_chain(beta, 4850 + k) for k in range(4)]
        avg = tuple(statistics.mean(result[j] for result, _ in runs) for j in range(3))
        acceptance = statistics.mean(rate for _, rate in runs)
        print(f"  beta={beta:.1f}, Z={z:.6f}, acceptance={acceptance:.3f}")
        print(f"    exact <S>, <|M|>, <M>: {exact_s:.5f}, {exact_abs_m:.5f}, {exact_m:.5f}")
        print(f"    chain <S>, <|M|>, <M>: {avg[0]:.5f}, {avg[1]:.5f}, {avg[2]:.5f}")
        print(f"    exact mean energy <-S>: {-exact_s:.5f}")


if __name__ == "__main__":
    beta_project()
    ising_project()
