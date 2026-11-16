"""Seeded teaching experiments for Chapter 25: parallel tempering and TI.

Only Python's standard library is used. The diagnostic counts are observations
from finite runs, not convergence certificates.
"""

import math
import random


S = 0.25
BETAS = (0.10, 0.18, 0.32, 0.55, 1.0)


def energy(x):
    return (x * x - 1.0) ** 2 / (2.0 * S * S)


def log_uniform(rng: random.Random) -> float:
    """Allow the zero endpoint of Random.random without log(0)."""
    u = rng.random()
    return math.log(u) if u > 0.0 else -math.inf


def run_rw(seed, warmup=2_000, kept=12_000):
    rng = random.Random(seed)
    x, e = 1.0, energy(1.0)
    evaluations = 1
    signs = []
    for t in range(warmup + kept):
        proposal = x + rng.gauss(0.0, 0.35)
        ep = energy(proposal)
        evaluations += 1
        if log_uniform(rng) < e - ep:
            x, e = proposal, ep
        if t >= warmup:
            signs.append(x > 0.0)
    return (sum(signs) / kept,
            sum(a != b for a, b in zip(signs, signs[1:])), evaluations)


def run_pt(seed, all_positive=False, warmup=2_000, kept=12_000):
    rng = random.Random(seed)
    k = len(BETAS)
    xs = [1.0] * k if all_positive else [-1.0, 1.0, -1.0, 1.0, 1.0]
    es = [energy(x) for x in xs]
    identities = list(range(k))
    evaluations = k
    attempts = [0] * (k - 1)
    accepted = [0] * (k - 1)
    signs = []
    # A particle completes a hot -> cold -> hot journey in stages 0, 1, 2.
    stages = [0] * k
    round_trips = 0
    for t in range(warmup + kept):
        for i, beta in enumerate(BETAS):
            scale = min(1.25, 0.35 / math.sqrt(beta))
            proposal = xs[i] + rng.gauss(0.0, scale)
            ep = energy(proposal)
            evaluations += 1
            if log_uniform(rng) < beta * (es[i] - ep):
                xs[i], es[i] = proposal, ep

        # Fixed, alternating disjoint pairs. Each phase preserves the product law.
        for i in range(t % 2, k - 1, 2):
            j = i + 1
            attempts[i] += 1
            log_ratio = (BETAS[i] - BETAS[j]) * (es[i] - es[j])
            if log_uniform(rng) < log_ratio:
                xs[i], xs[j] = xs[j], xs[i]
                es[i], es[j] = es[j], es[i]
                identities[i], identities[j] = identities[j], identities[i]
                accepted[i] += 1

        if t >= warmup:
            signs.append(xs[-1] > 0.0)
            hot_id, cold_id = identities[0], identities[-1]
            if stages[hot_id] == 0:
                stages[hot_id] = 1
            if stages[cold_id] == 1:
                stages[cold_id] = 2
            if stages[hot_id] == 2:
                round_trips += 1
                stages[hot_id] = 1

    return (sum(signs) / kept,
            sum(a != b for a, b in zip(signs, signs[1:])),
            tuple(a / n for a, n in zip(accepted, attempts)),
            round_trips, evaluations)


def expected_log_likelihood(beta):
    return -0.5 * math.log(2.0 * math.pi) - 0.5 * (
        1.0 / (1.0 + beta) + 4.0 / (1.0 + beta) ** 2)


def trapezoid(n):
    h = 1.0 / n
    return h * (0.5 * expected_log_likelihood(0.0)
                + sum(expected_log_likelihood(i * h) for i in range(1, n))
                + 0.5 * expected_log_likelihood(1.0))


def gaussian_kl(beta_a: float, beta_b: float, dimension: int) -> float:
    """Exact directed KL for N(0, I/beta_a) versus N(0, I/beta_b)."""
    gap = beta_b / beta_a - 1.0
    return 0.5 * dimension * (gap - math.log1p(gap))


def equilibrium_swap_mean(beta_a: float, beta_b: float, dimension: int,
                          rng: random.Random, draws: int = 20_000) -> float:
    """IID equilibrium energy pairs isolate overlap, not MCMC convergence."""
    total = 0.0
    for _ in range(draws):
        # V = ||X||^2/2 has Gamma(shape=d/2, scale=1/beta) law.
        energy_a = rng.gammavariate(dimension / 2.0, 1.0 / beta_a)
        energy_b = rng.gammavariate(dimension / 2.0, 1.0 / beta_b)
        log_ratio = (beta_a - beta_b) * (energy_a - energy_b)
        total += math.exp(min(0.0, log_ratio))
    return total / draws


def show_gaussian_ladders() -> None:
    rng = random.Random(2504)
    ladders = {
        "linear": tuple(0.1 + 0.9 * i / 4 for i in range(5)),
        "geometric": tuple(0.1 * 10 ** (i / 4) for i in range(5)),
    }
    for name, ladder in ladders.items():
        pairs = tuple(zip(ladder, ladder[1:]))
        divergences = tuple(round(gaussian_kl(a, b, 4), 3) for a, b in pairs)
        swaps = tuple(round(equilibrium_swap_mean(a, b, 4, rng), 3)
                      for a, b in pairs)
        print(f"Gaussian d=4 {name}: adjacent exact KL={divergences}, "
              f"IID mean swap estimates={swaps}")


def main():
    rw = run_rw(2501)
    pt = run_pt(2502)
    pt_positive = run_pt(2503, all_positive=True)
    print(f"RW cold: P(x>0)={rw[0]:.3f}, sign changes={rw[1]}, "
          f"energy evaluations={rw[2]}")
    for name, result in (("PT mixed start", pt), ("PT positive start", pt_positive)):
        print(f"{name}: P(x>0)={result[0]:.3f}, sign changes={result[1]}, "
              f"swap rates={tuple(round(r, 3) for r in result[2])}, "
              f"hot-cold-hot trips={result[3]}, energy evaluations={result[4]}")
    exact = -0.5 * math.log(4.0 * math.pi) - 1.0
    print(f"Gaussian log evidence: exact={exact:.6f}, "
          f"trapezoid 4={trapezoid(4):.6f}, "
          f"trapezoid 32={trapezoid(32):.6f}")
    show_gaussian_ladders()


if __name__ == "__main__":
    main()
