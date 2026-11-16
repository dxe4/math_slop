"""Chapter 47: small, reproducible sampler comparison (standard library only).

Run: python examples/ch47.py
Optional longer run: python examples/ch47.py --research
The direct Gaussian generator has information unavailable to density-only kernels.
"""

from __future__ import annotations

import argparse
import math
import platform
import random
import statistics
import time
from dataclasses import dataclass


RHO = 0.99
A = 6.0
OCCUPANCY_TOLERANCE = 0.1


@dataclass
class Result:
    mean: float
    second: float
    occupancy: float
    acceptance: float
    crossings: int
    evaluations: int
    normal_draws: int
    seconds: float


def gaussian_logp(x: float, y: float) -> float:
    return -(x * x - 2 * RHO * x * y + y * y) / (2 * (1 - RHO * RHO))


def mixture_logp(x: float) -> float:
    left = -0.5 * (x + A) ** 2
    right = -0.5 * (x - A) ** 2
    top = max(left, right)
    return top + math.log(math.exp(left - top) + math.exp(right - top))


def log_uniform(rng: random.Random) -> float:
    """Keep a possible zero PRNG output from causing log(0)."""
    u = rng.random()
    return math.log(u) if u else -math.inf


def wilson_interval(failures: int, runs: int) -> tuple[float, float]:
    """Approximate 95% score interval for iid complete-run failure indicators."""
    if runs < 1 or not 0 <= failures <= runs:
        raise ValueError("require runs > 0 and 0 <= failures <= runs")
    z = statistics.NormalDist().inv_cdf(0.975)
    p = failures / runs
    denominator = 1 + z * z / runs
    center = (p + z * z / (2 * runs)) / denominator
    radius = z * math.sqrt(p * (1 - p) / runs + z * z / (4 * runs**2)) / denominator
    return max(0.0, center - radius), min(1.0, center + radius)


def rmse_interval(errors: list[float], seed: int) -> tuple[float, float]:
    """Whole-run percentile bootstrap; 2,000 resamples, linear quantiles."""
    if len(errors) < 2 or not all(math.isfinite(x) for x in errors):
        raise ValueError("require at least two finite complete-run errors")
    rng = random.Random(seed)
    squares = [x * x for x in errors]
    estimates = sorted(math.sqrt(sum(rng.choices(squares, k=len(squares))) / len(squares))
                       for _ in range(2000))
    bounds = statistics.quantiles(estimates, n=40, method="inclusive")
    return bounds[0], bounds[-1]


def stationary_gibbs_mean_variance(n: int, rho: float = RHO) -> float:
    """Exact finite-window variance, assuming a stationary Gibbs chain."""
    if n < 1 or not abs(rho) < 1:
        raise ValueError("require n >= 1 and abs(rho) < 1")
    return (n + 2 * math.fsum((n - k) * rho ** (2 * k) for k in range(1, n))) / n**2


def gaussian_run(kind: str, seed: int, n: int, warmup: int) -> Result:
    t0 = time.perf_counter()
    rng = random.Random(seed)
    x = y = 0.0
    evaluations = draws = accepted = 0
    sx = sx2 = 0.0
    scale = 0.12 if kind == "rwm_small" else 1.2
    if kind.startswith("rwm"):
        logp = gaussian_logp(x, y)
        evaluations += 1
    for i in range(warmup + n):
        if kind == "direct":
            x = rng.gauss(0, 1)
            z = rng.gauss(0, 1)
            y = RHO * x + math.sqrt(1 - RHO * RHO) * z
            draws += 2
        elif kind == "gibbs":
            x = rng.gauss(RHO * y, math.sqrt(1 - RHO * RHO))
            y = rng.gauss(RHO * x, math.sqrt(1 - RHO * RHO))
            draws += 2
        else:
            xp = x + scale * rng.gauss(0, 1)
            yp = y + scale * rng.gauss(0, 1)
            draws += 2
            proposed = gaussian_logp(xp, yp)
            evaluations += 1
            if log_uniform(rng) < min(0.0, proposed - logp):
                x, y, logp = xp, yp, proposed
                if i >= warmup:
                    accepted += 1
        if i >= warmup:
            sx += x
            sx2 += x * x
    elapsed = time.perf_counter() - t0
    return Result(sx / n, sx2 / n, math.nan, accepted / n if kind.startswith("rwm") else math.nan,
                  0, evaluations, draws, elapsed)


def mixture_run(scale: float, start: float, seed: int, n: int, warmup: int) -> Result:
    t0 = time.perf_counter()
    rng = random.Random(seed)
    x = start
    logp = mixture_logp(x)
    evaluations = 1
    accepted = crossings = positive = 0
    sx = sx2 = 0.0
    for i in range(warmup + n):
        proposal = x + scale * rng.gauss(0, 1)
        proposed = mixture_logp(proposal)
        evaluations += 1
        if log_uniform(rng) < min(0.0, proposed - logp):
            previous_positive = x > 0
            x, logp = proposal, proposed
            if i >= warmup:
                accepted += 1
                crossings += previous_positive != (x > 0)
        if i >= warmup:
            sx += x
            sx2 += x * x
            positive += x > 0
    elapsed = time.perf_counter() - t0
    return Result(sx / n, sx2 / n, positive / n, accepted / n, crossings,
                  evaluations, warmup + n, elapsed)


def summarize(label: str, runs: list[Result], truth_mean: float, truth_second: float,
              occupancy_truth: float | None = None) -> str:
    rmse_mean = math.sqrt(statistics.mean((r.mean - truth_mean) ** 2 for r in runs))
    rmse_second = math.sqrt(statistics.mean((r.second - truth_second) ** 2 for r in runs))
    occ = "-" if occupancy_truth is None else f"{math.sqrt(statistics.mean((r.occupancy - occupancy_truth) ** 2 for r in runs)):.3f}"
    acc = "-" if math.isnan(runs[0].acceptance) else f"{statistics.mean(r.acceptance for r in runs):.3f}"
    cross = "-" if occupancy_truth is None else str(sum(r.crossings == 0 for r in runs))
    return (f"{label:18s} {rmse_mean:8.3f} {rmse_second:8.3f} {occ:>8s} "
            f"{acc:>7s} {cross:>6s} {runs[0].evaluations:8d} "
            f"{runs[0].normal_draws:8d} {statistics.median(r.seconds for r in runs):9.4f}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--research", action="store_true", help="larger fixed repetition and step counts")
    args = parser.parse_args()
    print(f"Python {platform.python_version()}; {platform.system()} {platform.machine()}")
    repetitions, n, warmup = (40, 20000, 2000) if args.research else (16, 4000, 500)
    print(f"seed_base=470000 repetitions={repetitions} retained={n} warmup={warmup}")
    print("RMSE across complete runs; calls and normal draws per run; median seconds per run")
    print("Gaussian rho=0.99; truths E[X]=0, E[X^2]=1")
    print("method             RMSE mean RMSE x² RMSE occ  accept  zero-x    calls  normals median s")
    for j, kind in enumerate(("direct", "gibbs", "rwm_small", "rwm_large")):
        runs = [gaussian_run(kind, 470000 + 10000 * j + r, n, warmup)
                for r in range(repetitions)]
        print(summarize(kind, runs, 0, 1))
        low, high = rmse_interval([r.mean for r in runs], 670000 + j)
        print(f"  Mean RMSE: approximate 95% whole-run bootstrap [{low:.3f}, {high:.3f}]")
    print("Mixture a=6; truths E[X]=0, E[X^2]=37, P(X>0)=0.5")
    print("method             RMSE mean RMSE x² RMSE occ  accept  zero-x    calls  normals median s")
    for j, (label, scale, dispersed) in enumerate((
        ("local_left", 1.5, False), ("local_dispersed", 1.5, True),
        ("wide_left", 8.0, False), ("wide_dispersed", 8.0, True),
    )):
        runs = [mixture_run(scale, A if dispersed and r % 2 else -A,
                            570000 + 10000 * j + r, n, warmup)
                for r in range(repetitions)]
        print(summarize(label, runs, 0, 37, 0.5))
        low, high = rmse_interval([r.occupancy - 0.5 for r in runs], 680000 + j)
        print(f"  Occupancy RMSE: approximate 95% whole-run bootstrap [{low:.3f}, {high:.3f}]")
        for event, failures in (
            ("no sign change", sum(r.crossings == 0 for r in runs)),
            (f"occupancy error > {OCCUPANCY_TOLERANCE}",
             sum(abs(r.occupancy - 0.5) > OCCUPANCY_TOLERANCE for r in runs)),
        ):
            low, high = wilson_interval(failures, repetitions)
            print(f"  {event}: {failures}/{repetitions}; 95% Wilson [{low:.3f}, {high:.3f}]")
    tau = (1 + RHO * RHO) / (1 - RHO * RHO)
    print(f"Stationary Gibbs IACT for X at sweep endpoints={tau:.3f}; asymptotic ESS at N={n}: {n/tau:.1f}")
    variance = stationary_gibbs_mean_variance(n)
    print(f"Stationary finite-window Gibbs RMSE={math.sqrt(variance):.6f}; mean ESS={1/variance:.3f}")
    # Independent double-covariance calculation checks the lag-sum implementation.
    covariance_sum = math.fsum(RHO ** (2 * abs(i-j)) for i in range(7) for j in range(7)) / 49
    assert math.isclose(stationary_gibbs_mean_variance(7), covariance_sum)
    assert math.isclose(stationary_gibbs_mean_variance(7, 0.0), 1/7)
    assert wilson_interval(0, 16)[1] > 0.19
    assert wilson_interval(16, 16)[0] < 0.81
    upper = -math.expm1(math.log(0.05) / 16)
    required = math.floor(math.log(0.05) / math.log(0.95)) + 1
    print(f"Zero failures in 16 runs: exact one-sided 95% upper bound={upper:.6f}; "
          f"failure-free runs for upper bound < 0.05: {required}")


if __name__ == "__main__":
    main()
