"""Chapter 37: a small, seeded multilevel-logistic teaching example.

Run with ``python examples/ch37.py``. No third-party packages are needed.
The coordinate random-walk Metropolis sampler is illustrative, not production NUTS.
"""

import math
import random
import statistics


SEED = 37037
GROUPS = 4
TARGET_COUNTS = ((1800, 1100), (900, 1200), (1300, 800), (700, 1500))
# Each row is a district; entries are low-risk and high-risk target counts.
TRUE_ALPHA, TRUE_BETA, TRUE_GAMMA = -1.4, 0.9, 0.55
TRUE_U = (-0.65, -0.15, 0.25, 0.6)
STEP = (0.12, 0.12, 0.10, 0.13, 0.14, 0.14, 0.14, 0.14)
WARMUP, RETAIN, CHAINS = 2500, 5000, 4
PREDICT_EVERY = 10  # Bound replication cost; retain every draw for inference.
PRIOR_DRAWS = 1000


def softplus(x):
    return max(x, 0.0) + math.log1p(math.exp(-abs(x)))


def logistic(x):
    if x >= 0:
        z = math.exp(-x)
        return 1.0 / (1.0 + z)
    z = math.exp(x)
    return z / (1.0 + z)


def make_data():
    rng = random.Random(SEED)
    cells = []
    for g in range(GROUPS):
        for x in (0, 1):
            for a in (0, 1):
                # Unequal recruitment and offer rates create a nonrepresentative sample.
                n = 32 + 13 * g + 15 * x + (18 if a == x else 0)
                p = logistic(TRUE_ALPHA + TRUE_U[g] + TRUE_BETA * x + TRUE_GAMMA * a)
                y = sum(rng.random() < p for _ in range(n))
                cells.append((g, x, a, n, y))
    return cells


def log_target(v, cells, tau_scale=1.0):
    """Density in alpha, beta, gamma, r=log(tau), and standard-normal z."""
    alpha, beta, gamma, r = v[:4]
    tau = math.exp(r)
    u = [tau * z for z in v[4:]]
    # N(0, 2^2), N(0, 1.5^2), N(0, 1.5^2), HalfNormal(tau_scale), N(0,1)^G.
    # The +r is the Jacobian for tau=exp(r); there is no -G*r term here.
    out = -0.5 * ((alpha / 2) ** 2 + (beta / 1.5) ** 2
                  + (gamma / 1.5) ** 2 + (tau / tau_scale) ** 2
                  + sum(z * z for z in v[4:])) + r
    for g, x, a, n, y in cells:
        eta = alpha + u[g] + beta * x + gamma * a
        out += y * eta - n * softplus(eta)
    return out


def functionals(v):
    alpha, beta, gamma, r = v[:4]
    tau = math.exp(r)
    total = sum(sum(row) for row in TARGET_COUNTS)
    untreated = treated = 0.0
    for g, row in enumerate(TARGET_COUNTS):
        for x, count in enumerate(row):
            eta = alpha + tau * v[4 + g] + beta * x
            weight = count / total
            untreated += weight * logistic(eta)
            treated += weight * logistic(eta + gamma)
    return untreated, treated, treated - untreated, tau


def run_chain(cells, seed, start, tau_scale=1.0):
    rng = random.Random(seed)
    v = list(start)
    logp = log_target(v, cells, tau_scale)
    accepted = [0] * len(v)
    draws = []
    predictive_states = []
    for sweep in range(WARMUP + RETAIN):
        for j, scale in enumerate(STEP):
            candidate = v.copy()
            candidate[j] += rng.gauss(0, scale)
            new_logp = log_target(candidate, cells, tau_scale)
            uniform = rng.random()
            if uniform == 0.0 or math.log(uniform) < new_logp - logp:
                v, logp = candidate, new_logp
                if sweep >= WARMUP:
                    accepted[j] += 1
        if sweep >= WARMUP:
            draws.append(functionals(v))
            if (sweep - WARMUP) % PREDICT_EVERY == 0:
                predictive_states.append(tuple(v))
    return draws, [count / RETAIN for count in accepted], predictive_states


def percentile(values, q):
    ordered = sorted(values)
    pos = q * (len(ordered) - 1)
    lower = int(pos)
    upper = min(lower + 1, len(ordered) - 1)
    return ordered[lower] + (pos - lower) * (ordered[upper] - ordered[lower])


def batch_mcse(chains, column, batch_size=250):
    """Approximate MCSE from nonoverlapping batches of retained draws."""
    variances = []
    for chain in chains:
        values = [draw[column] for draw in chain]
        if len(values) % batch_size or len(values) < 2 * batch_size:
            raise ValueError("Use at least two complete equal-sized batches per chain")
        batches = [statistics.mean(values[i:i + batch_size])
                   for i in range(0, len(values), batch_size)]
        variances.append(statistics.variance(batches) / len(batches))
    # Equal retained lengths; independent chains, with dependence within each chain.
    return math.sqrt(sum(variances)) / len(chains)


def cell_probabilities(v, cells):
    alpha, beta, gamma, r = v[:4]
    tau = math.exp(r)
    return [logistic(alpha + tau * v[4 + g] + beta * x + gamma * a)
            for g, x, a, _, _ in cells]


def replicate(cells, probabilities, rng):
    """Exact binomial simulation by Bernoulli sums for these small cell sizes."""
    return [sum(rng.random() < p for _ in range(cell[3]))
            for cell, p in zip(cells, probabilities)]


def district_totals(cells, counts):
    totals = [0] * GROUPS
    for cell, count in zip(cells, counts):
        totals[cell[0]] += count
    return totals


def prior_predictive(cells, tau_scale, seed):
    rng = random.Random(seed)
    baseline_ranges, replicated_ranges, extreme = [], [], []
    district_n = district_totals(cells, [cell[3] for cell in cells])
    for _ in range(PRIOR_DRAWS):
        tau = abs(rng.gauss(0, tau_scale))
        while tau == 0.0:
            tau = abs(rng.gauss(0, tau_scale))
        v = [rng.gauss(0, 2), rng.gauss(0, 1.5), rng.gauss(0, 1.5),
             math.log(tau)] + [rng.gauss(0, 1) for _ in range(GROUPS)]
        probabilities = cell_probabilities(v, cells)
        baseline = [logistic(v[0] + tau * z) for z in v[4:]]
        baseline_ranges.append(max(baseline) - min(baseline))
        totals = district_totals(cells, replicate(cells, probabilities, rng))
        rates = [y / n for y, n in zip(totals, district_n)]
        replicated_ranges.append(max(rates) - min(rates))
        extreme.append(min(probabilities) < .01 or max(probabilities) > .99)
    print(f"prior HalfNormal({tau_scale:g}): baseline district probability range "
          f"median={statistics.median(baseline_ranges):.3f}, "
          f"90% interval=({percentile(baseline_ranges, .05):.3f}, "
          f"{percentile(baseline_ranges, .95):.3f}); "
          f"replicated district rate range median={statistics.median(replicated_ranges):.3f}; "
          f"Pr(any cell p<.01 or p>.99)~={statistics.mean(extreme):.3f}")


def discrepancies(cells, counts, probabilities):
    residuals = [(y - cell[3] * p) / math.sqrt(cell[3] * p * (1 - p))
                 for cell, y, p in zip(cells, counts, probabilities)]
    return sum(z * z for z in residuals), max(map(abs, residuals))


def posterior_predictive(cells, state_chains, seed):
    """Replicate the observed cells in observed districts, conditional on their u."""
    observed = [cell[4] for cell in cells]
    cell_replicates, group_replicates = [], []
    indicator_chains, observed_stats, replicated_stats = [], [], []
    for k, states in enumerate(state_chains):
        rng = random.Random(seed + k)
        indicators = []
        for v in states:
            probabilities = cell_probabilities(v, cells)
            counts = replicate(cells, probabilities, rng)
            obs = discrepancies(cells, observed, probabilities)
            rep = discrepancies(cells, counts, probabilities)
            indicators.append(tuple(b >= a for a, b in zip(obs, rep)))
            observed_stats.append(obs)
            replicated_stats.append(rep)
            cell_replicates.append(counts)
            group_replicates.append(district_totals(cells, counts))
        indicator_chains.append(indicators)
    print(f"posterior predictive: {len(cell_replicates)} replications; "
          "every tenth retained state, not independent posterior draws")
    for j, cell in enumerate(cells):
        values = [rep[j] for rep in cell_replicates]
        print(f"  cell g={cell[0]+1}, x={cell[1]}, a={cell[2]}: y/n={cell[4]}/{cell[3]}, "
              f"replicated 90% count interval=({percentile(values, .05):.0f}, "
              f"{percentile(values, .95):.0f})")
    for g, observed_total in enumerate(district_totals(cells, observed)):
        values = [rep[g] for rep in group_replicates]
        print(f"  district {g+1}: observed total={observed_total}, "
              f"replicated 90% total interval=({percentile(values, .05):.0f}, "
              f"{percentile(values, .95):.0f})")
    for j, label in enumerate(("Pearson cell discrepancy", "max absolute cell residual")):
        indicators = [draw[j] for chain in indicator_chains for draw in chain]
        print(f"  {label}: mean observed={statistics.mean(d[j] for d in observed_stats):.2f}, "
              f"mean replicated={statistics.mean(d[j] for d in replicated_stats):.2f}, "
              f"Pr(Drep>=Dobs|y)~={statistics.mean(indicators):.3f}, "
              f"approx MCSE={batch_mcse(indicator_chains, j, 50):.3f}")


def fit(cells, tau_scale, seed_offset):
    chains, rates, state_chains = [], [], []
    for k in range(CHAINS):
        start = (-1.1 + 0.15 * k, 0.5, 0.3, -0.4, 0.0, 0.0, 0.0, 0.0)
        draws, accepted, states = run_chain(cells, SEED + seed_offset + k, start, tau_scale)
        chains.append(draws)
        rates.append(accepted)
        state_chains.append(states)
    print(f"fit HalfNormal({tau_scale:g}); {CHAINS} chains, {WARMUP} warmup + {RETAIN} retained each")
    print("coordinate acceptance rates, min/max across chains: "
          f"{min(map(min, rates)):.2f}/{max(map(max, rates)):.2f}")
    print("per-chain tau means: " + ", ".join(
        f"{statistics.mean(d[3] for d in chain):.3f}" for chain in chains))
    return chains, state_chains


def check_reference_calculations(cells):
    """Deterministic target/functional checks, independent of MCMC convergence."""
    for tau_scale in (1.0, .5):
        for r in (-5.0, -1.0, 1.0):
            v = [-.7, .8, .4, r, -.8, .2, .5, 1.1]
            alpha, beta, gamma = v[:3]
            tau = math.exp(r)
            u = [tau * z for z in v[4:]]
            centered = (-.5 * ((alpha / 2) ** 2 + (beta / 1.5) ** 2
                              + (gamma / 1.5) ** 2 + (tau / tau_scale) ** 2)
                        - GROUPS * r - sum(b * b for b in u) / (2 * tau * tau))
            for g, x, a, n, y in cells:
                eta = alpha + u[g] + beta * x + gamma * a
                centered += y * eta - n * math.log1p(math.exp(eta))
            # Full triangular map (z,r) -> (u,tau) has determinant tau^(G+1).
            assert math.isclose(centered + (GROUPS + 1) * r,
                                log_target(v, cells, tau_scale), abs_tol=1e-10)
    assert math.isclose(2 / (1 + 4), .4)
    assert math.isclose(2 / (1 + .25), 1.6)
    assert math.isclose(.6 * .2 + .4 * .8, .44)
    untreated = .75 * logistic(-2) + .25 * logistic(0)
    treated = .75 * logistic(-1) + .25 * logistic(1)
    assert math.isclose(treated - untreated, .1700685191684094, abs_tol=1e-12)
    assert percentile([1, 2, 3], 0) == 1 and percentile([1, 2, 3], 1) == 3
    print("deterministic centered/noncentered target and worked-arithmetic checks passed")


def main():
    cells = make_data()
    check_reference_calculations(cells)
    print(f"seed={SEED}; sample n={sum(c[3] for c in cells)}; target size="
          f"{sum(map(sum, TARGET_COUNTS))}")
    for j, scale in enumerate((1.0, .5, 3.0)):
        prior_predictive(cells, scale, SEED + 1000 + j)
    chains, state_chains = fit(cells, 1.0, 100)
    pooled = [draw for chain in chains for draw in chain]
    for label, j in (("all withheld", 0), ("all offered", 1),
                     ("population risk difference", 2), ("district SD tau", 3)):
        values = [draw[j] for draw in pooled]
        print(f"{label}: mean={statistics.mean(values):.3f}, "
              f"95% interval=({percentile(values, .025):.3f}, "
              f"{percentile(values, .975):.3f}), "
              f"approx mean MCSE={batch_mcse(chains, j):.4f}")
    print("Pr(risk difference > 0) ~= "
          f"{statistics.mean(draw[2] > 0 for draw in pooled):.3f}")
    print("A sampled probability of 1 does not establish a zero posterior tail probability.")
    posterior_predictive(cells, state_chains, SEED + 2000)
    alternative, _ = fit(cells, .5, 300)
    alternative_pooled = [draw for chain in alternative for draw in chain]
    for label, j in (("risk difference", 2), ("tau", 3)):
        values = [draw[j] for draw in alternative_pooled]
        print(f"sensitivity HalfNormal(.5), {label}: mean={statistics.mean(values):.3f}, "
              f"95% interval=({percentile(values, .025):.3f}, {percentile(values, .975):.3f}), "
              f"approx mean MCSE={batch_mcse(alternative, j):.4f}")
    shift = statistics.mean(d[2] for d in alternative_pooled) - statistics.mean(d[2] for d in pooled)
    shift_mcse = math.hypot(batch_mcse(chains, 2), batch_mcse(alternative, 2))
    print(f"alternative minus baseline risk-difference mean={shift:.4f}; "
          f"approx MCSE of shift={shift_mcse:.4f} (independent fits)")
    print("Synthetic demonstration only: causal reading requires identification assumptions.")


if __name__ == "__main__":
    main()
