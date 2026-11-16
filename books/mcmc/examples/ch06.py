"""Chapter 06: variance reduction for E[exp(U)], U uniform on (0, 1).

The integral methods use N evaluations of exp per independent run, including
pilot evaluations. A separate stationary-chain example checks why marginal
variance is insufficient. Repetition is a teaching check, not a production audit.
"""

import math
import random
import statistics


SEED = 20260926
N = 1200                 # even, and divisible by STRATA
STRATA = 12
REPETITIONS = 500
TRUTH = math.e - 1.0
VAR_F = (math.e**2 - 1.0) / 2.0 - TRUTH**2
COV_F_U = (3.0 - math.e) / 2.0
BETA = 12.0 * COV_F_U
GAMMA = math.e - TRUTH**2
PILOT_SIZE = 60
RHO = 0.9


def sample_variance(values: list[float]) -> float:
    return statistics.variance(values)


def one_run(rng: random.Random) -> tuple[tuple[float, float], ...]:
    plain_values = [math.exp(rng.random()) for _ in range(N)]
    plain = statistics.mean(plain_values)
    plain_se = math.sqrt(sample_variance(plain_values) / N)

    # Pair averages, rather than the 2m dependent function values, are iid.
    pairs = []
    for _ in range(N // 2):
        u = rng.random()
        pairs.append((math.exp(u) + math.exp(1.0 - u)) / 2.0)
    antithetic = statistics.mean(pairs)
    antithetic_se = math.sqrt(sample_variance(pairs) / len(pairs))

    # BETA is analytic and fixed, so no same-run coefficient fitting is hidden.
    controlled = []
    for _ in range(N):
        u = rng.random()
        controlled.append(math.exp(u) - BETA * (u - 0.5))
    control = statistics.mean(controlled)
    control_se = math.sqrt(sample_variance(controlled) / N)

    per_stratum = N // STRATA
    stratum_means = []
    stratum_variances = []
    for h in range(STRATA):
        values = [math.exp((h + rng.random()) / STRATA)
                  for _ in range(per_stratum)]
        stratum_means.append(statistics.mean(values))
        stratum_variances.append(sample_variance(values))
    stratified = statistics.mean(stratum_means)
    stratified_se = math.sqrt(
        sum(v / per_stratum for v in stratum_variances) / STRATA**2
    )
    return ((plain, plain_se), (antithetic, antithetic_se),
            (control, control_se), (stratified, stratified_se))


def exact_stratified_variance() -> float:
    total = 0.0
    for h in range(STRATA):
        a, b = h / STRATA, (h + 1) / STRATA
        mean = STRATA * (math.exp(b) - math.exp(a))
        second = STRATA * (math.exp(2 * b) - math.exp(2 * a)) / 2.0
        total += second - mean**2
    return total / (N * STRATA)


def pilot_run(rng: random.Random) -> tuple[float, float, float, float]:
    """Return mean, training variance, production variance, conditional mean variance."""
    controls = [rng.random() for _ in range(PILOT_SIZE)]
    responses = [math.exp(u) for u in controls]
    mean_u, mean_h = statistics.mean(controls), statistics.mean(responses)
    denominator = sum((u - mean_u)**2 for u in controls)
    beta = (sum((u - mean_u) * (h - mean_h)
                for u, h in zip(controls, responses)) / denominator
            if denominator > 0.0 else 0.0)
    # A predetermined bound guarantees finite coefficient moments.
    beta = max(-10.0, min(10.0, beta))
    training = [h - beta * (u - 0.5) for u, h in zip(controls, responses)]
    production = []
    for _ in range(N - PILOT_SIZE):
        u = rng.random()
        production.append(math.exp(u) - beta * (u - 0.5))
    exact_conditional = (VAR_F - 2 * beta * COV_F_U + beta**2 / 12)
    return (statistics.mean(production), sample_variance(training),
            sample_variance(production), exact_conditional / len(production))


def chain_variance(beta: float, n: int) -> float:
    """Exact stationary finite-n variance using the lag-covariance formula."""
    tau_n = 1 + 2 * sum((1 - lag / n) * RHO**lag for lag in range(1, n))
    return ((1 - beta)**2 + beta**2 * tau_n) / n


def check_chain_matrix() -> None:
    """Independently recover finite-run variance from the four-state kernel."""
    states = [(a, b) for a in (-1, 1) for b in (-1, 1)]
    transition = [[0.5 * ((1 + RHO) / 2 if b == next_b else (1 - RHO) / 2)
                   for _, next_b in states] for _, b in states]
    assert all(math.isclose(sum(row), 1.0) for row in transition)
    assert all(math.isclose(sum(row[j] for row in transition) / 4, 0.25)
               for j in range(4))
    for beta in (0.0, 0.5, 0.05):
        values = [a - beta * (a + b) for a, b in states]
        propagated = values[:]
        variance_sum = sum(v * v for v in values) / 4
        for lag in range(1, N):
            propagated = [sum(p * v for p, v in zip(row, propagated))
                          for row in transition]
            covariance = sum(v * w for v, w in zip(values, propagated)) / 4
            variance_sum += 2 * (1 - lag / N) * covariance
        assert math.isclose(variance_sum / N, chain_variance(beta, N),
                            rel_tol=1e-12, abs_tol=1e-14)


def chain_comparison() -> None:
    check_chain_matrix()
    rng = random.Random(SEED + 2)
    betas = (0.0, 0.5, 0.05)
    estimates = [[] for _ in betas]
    for _ in range(REPETITIONS):
        # Stationary initialization: B is a fair sign, independent of all A's.
        b = 1 if rng.random() < 0.5 else -1
        total_a = total_b = 0
        for _ in range(N):
            a = 1 if rng.random() < 0.5 else -1
            total_a += a
            total_b += b
            if rng.random() < (1 - RHO) / 2:
                b = -b
        for beta, runs in zip(betas, estimates):
            runs.append(((1 - beta) * total_a - beta * total_b) / N)
    print("\nStationary four-state chain; target 0; same trajectory for each beta")
    print("beta  marginal var  long-run var  exact mean var  replicated mean var")
    for beta, runs in zip(betas, estimates):
        marginal = (1 - beta)**2 + beta**2
        long_run = (1 - beta)**2 + beta**2 * (1 + RHO) / (1 - RHO)
        print(f"{beta:.2f}  {marginal:.6f}      {long_run:.6f}      "
              f"{chain_variance(beta, N):.8g}   {sample_variance(runs):.8g}")


def main() -> None:
    rng = random.Random(SEED)
    results = [one_run(rng) for _ in range(REPETITIONS)]
    theoretical = (VAR_F / N,
                   (VAR_F + GAMMA) / N,
                   (VAR_F - 12.0 * COV_F_U**2) / N,
                   exact_stratified_variance())
    print(f"target = {TRUTH:.9f}; {N} exp evaluations per run; "
          f"{REPETITIONS} independent runs; seed = {SEED}")
    print("method       mean error   run variance  exact variance  "
          "first-run SE  evaluations")
    for j, name in enumerate(("plain", "antithetic", "control", "stratified")):
        estimates = [run[j][0] for run in results]
        first_se = results[0][j][1]
        print(f"{name:12} {statistics.mean(estimates) - TRUTH:+.6f}  "
              f"{sample_variance(estimates):.8g}  {theoretical[j]:.8g}  "
              f"{first_se:.6f}  {N}")

    pilot_rng = random.Random(SEED + 1)
    pilots = [pilot_run(pilot_rng) for _ in range(REPETITIONS)]
    print(f"\nIndependent pilot: {PILOT_SIZE} training + "
          f"{N - PILOT_SIZE} production = {N} exp evaluations")
    print(f"mean error = {statistics.mean(r[0] for r in pilots) - TRUTH:+.6f}; "
          f"run variance = {sample_variance([r[0] for r in pilots]):.8g}")
    print(f"average conditional mean variance = "
          f"{statistics.mean(r[3] for r in pilots):.8g}")
    print(f"average training residual variance = "
          f"{statistics.mean(r[1] for r in pilots):.8g}; "
          f"production residual variance = {statistics.mean(r[2] for r in pilots):.8g}")
    chain_comparison()


if __name__ == "__main__":
    main()
