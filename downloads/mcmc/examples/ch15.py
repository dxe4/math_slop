"""Finite warmup, frozen production, and an exact adaptation counterexample.

Run with Python 3.10+; only the standard library is required.
Batch MCSEs below are teaching estimates, not convergence certificates.
"""

from dataclasses import dataclass, field
import math
import random
import statistics


Point = tuple[float, float]
Shape = tuple[float, float, float]  # entries (00, 01, 11)
WARMUP = 5_000
PRODUCTION = 25_000
SEEDS = (151, 152, 153, 154)
RHO = 0.95


@dataclass
class Moments:
    n: int = 0
    mean: list[float] = field(default_factory=lambda: [0.0, 0.0])
    sums: list[float] = field(default_factory=lambda: [0.0, 0.0, 0.0])

    def add(self, x: Point) -> None:
        self.n += 1
        d0, d1 = x[0] - self.mean[0], x[1] - self.mean[1]
        self.mean[0] += d0 / self.n
        self.mean[1] += d1 / self.n
        self.sums[0] += d0 * (x[0] - self.mean[0])
        self.sums[1] += d0 * (x[1] - self.mean[1])
        self.sums[2] += d1 * (x[1] - self.mean[1])

    def covariance(self) -> Shape:
        if self.n < 2:
            raise ValueError("Covariance requires at least two states")
        a, b, c = self.sums
        return a / (self.n - 1), b / (self.n - 1), c / (self.n - 1)


def cholesky(shape: Shape) -> Shape:
    a, b, c = shape
    l00 = math.sqrt(a)
    l10 = b / l00
    return l00, l10, math.sqrt(c - l10 * l10)


def log_density(x: Point) -> float:
    return -(x[0] ** 2 - 2 * RHO * x[0] * x[1] + x[1] ** 2) / (
        2 * (1 - RHO**2)
    )


def batch_mcse(values: list[float], size: int = 125) -> float:
    """Nonoverlapping batch means using every observation in complete batches."""
    if size < 1 or len(values) < 2 * size or len(values) % size:
        raise ValueError("Require at least two complete batches and no remainder")
    count = len(values) // size
    means = [statistics.fmean(values[j * size : (j + 1) * size]) for j in range(count)]
    return math.sqrt(statistics.variance(means) / count)


def refresh_statistics(probabilities: list[float]) -> tuple[float, float]:
    """Return TV at X_N from zero, and Var(mean(X_0,...,X_{N-1})) from pi.

    Deterministic refresh probabilities define P_k=(1-a_k)I+a_k*Pi.
    The two statistics deliberately use different initial distributions.
    cross_cov sums Cov(X_j, X_i) over i<j under the stationary marginals.
    """
    if not probabilities or any(not 0 < a <= 1 for a in probabilities):
        raise ValueError("Require a nonempty sequence of probabilities in (0, 1]")
    tv = 0.5
    cross_cov = 0.0
    variance_sum = 0.0
    for probability in probabilities:
        variance_sum += 0.25 + 2 * cross_cov
        tv *= 1 - probability
        cross_cov = (1 - probability) * (0.25 + cross_cov)
    return tv, variance_sum / len(probabilities) ** 2


@dataclass
class Result:
    warmup: list[Point]
    production: list[Point]
    scale: float
    shape: Shape
    acceptance: float


def sample(mode: str, seed: int) -> Result:
    if mode not in ("fixed", "scale", "covariance"):
        raise ValueError("Unknown adaptation mode")
    rng = random.Random(seed)
    x = (0.0, 0.0)
    logp = log_density(x)
    log_scale = 0.0
    shape = (1.0, 0.0, 1.0)
    factor = cholesky(shape)
    moments = Moments()
    warmup: list[Point] = []
    production: list[Point] = []
    accepted_production = 0
    for i in range(WARMUP + PRODUCTION):
        scale = math.exp(log_scale)
        z0, z1 = rng.gauss(0, 1), rng.gauss(0, 1)
        l00, l10, l11 = factor
        y = (x[0] + scale * l00 * z0, x[1] + scale * (l10 * z0 + l11 * z1))
        log_y = log_density(y)
        alpha = math.exp(min(0.0, log_y - logp))
        accepted = rng.random() < alpha
        if accepted:
            x, logp = y, log_y
        if i < WARMUP:
            warmup.append(x)  # Rejected iterations retain the current position.
            if mode != "fixed":
                gain = 0.8 / (i + 10) ** 0.6
                log_scale += gain * (int(accepted) - 0.3)
                log_scale = min(math.log(20), max(math.log(0.02), log_scale))
            if mode == "covariance" and 500 <= i < 4_000:
                moments.add(x)
                if moments.n >= 200 and (i + 1) % 50 == 0:
                    a, b, c = moments.covariance()
                    shape = (a + 0.01, b, c + 0.01)
                    factor = cholesky(shape)
        else:
            production.append(x)
            accepted_production += int(accepted)
    return Result(warmup, production, math.exp(log_scale), shape,
                  accepted_production / PRODUCTION)


def main() -> None:
    rng = random.Random(15)
    x = 0
    ones = 0
    for _ in range(20_000):
        switch = 0.9 if x == 0 else 0.1
        if rng.random() < switch:
            x = 1 - x
        ones += x
    print(f"State-selected kernels: fraction ones={ones / 20_000:.4f}; exact=0.9")
    n = 1_000
    print(f"Scheduled refresh: TV at n={n}: {(n + 2) / (4 * (n + 1)):.6f}; limit=0.25")
    print("Refresh audit: TV uses X_0=0; mean variance uses X_0~pi and states X_0,...,X_(N-1).")
    for count in (100, 1_000, 10_000):
        schedules = {
            "quadratic": [1 / (k + 2) ** 2 for k in range(count)],
            "harmonic": [1 / (k + 2) for k in range(count)],
            "floor 0.05": [max(0.05, 1 / (k + 2)) for k in range(count)],
        }
        for name, probabilities in schedules.items():
            tv, mean_variance = refresh_statistics(probabilities)
            if name == "quadratic":
                assert math.isclose(tv, (count + 2) / (4 * (count + 1)))
            elif name == "harmonic":
                assert math.isclose(tv, 1 / (2 * (count + 1)))
                assert math.isclose(mean_variance, (count + 1) / (8 * count))
            else:
                assert mean_variance <= (2 - 0.05) / (4 * 0.05 * count)
            print(f"  {name:10s} N={count:5d}: TV={tv:.7g}; "
                  f"variance of mean={mean_variance:.7f}")
    print(f"Each run: warmup={WARMUP}, production={PRODUCTION}; seeds={SEEDS}")
    print("MCSE uses 200 batches of 125 draws; ESS/1000 uses known target variance and total proposals.")
    for mode in ("fixed", "scale", "covariance"):
        squared_errors = [[], []]
        for seed in SEEDS:
            result = sample(mode, seed)
            plus = [a + b for a, b in result.production]
            minus = [a - b for a, b in result.production]
            print(f"{mode:10s} seed={seed} s={result.scale:.3f} "
                  f"shape={tuple(round(v, 3) for v in result.shape)} "
                  f"accept={result.acceptance:.3f} "
                  f"mean=({statistics.fmean(x[0] for x in result.production):+.3f},"
                  f"{statistics.fmean(x[1] for x in result.production):+.3f})")
            for j, (name, values, variance) in enumerate((("plus", plus, 3.9), ("minus", minus, 0.1))):
                estimate = statistics.fmean(values)
                mcse = batch_mcse(values)
                efficiency = 1000 * variance / (mcse**2 * (WARMUP + PRODUCTION))
                squared_errors[j].append(estimate**2)
                print(f"  {name}: mean={estimate:+.4f}, batch MCSE={mcse:.4f}, "
                      f"estimated ESS/1000 total proposals={efficiency:.1f}")
        print("  Four-run RMSE (plus, minus):", tuple(
            round(math.sqrt(statistics.fmean(errors)), 4) for errors in squared_errors
        ))


if __name__ == "__main__":
    main()
