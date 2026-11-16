"""Chapter 24: fixed inverse problem, increasing spectral resolution.

Run with Python's standard library. Batch MCSEs are teaching estimates,
not convergence certificates. Every chain starts from an exact posterior
sample here so the comparison isolates stationary sampling efficiency.
The final experiment uses exact scalar Gaussian marginals to illustrate
multilevel coupling; it is not a coupled MCMC or PDE cost benchmark.
"""

from fractions import Fraction
import math
import random
import statistics
import time


def batch_mcse(values: list[float], batch_size: int = 500) -> float:
    """Estimate mean MCSE from nonoverlapping batches."""
    batches = len(values) // batch_size
    if batches < 2:
        raise ValueError("At least two complete batches are required")
    means = [statistics.fmean(values[k * batch_size:(k + 1) * batch_size])
             for k in range(batches)]
    return math.sqrt(statistics.variance(means) / batches)


def run_chain(d: int, method: str, seed: int,
              draws: int = 30000) -> dict[str, float]:
    """Compare pCN and a prior-preconditioned random walk in z coordinates."""
    if d < 2 or draws < 1000 or method not in {"pcn", "rw"}:
        raise ValueError("Use d >= 2, draws >= 1000, and method pcn or rw")
    rng = random.Random(seed)
    a = [1.0 / (j * j) for j in range(1, d + 1)]
    s_d = sum(weight * weight for weight in a)
    denominator = 0.25 + s_d
    # Conditional simulation: z* = z + Cov(z,Y)/Var(Y) * (1 - Y).
    z = [rng.gauss(0.0, 1.0) for _ in a]
    synthetic_y = sum(x * weight for x, weight in zip(z, a)) + rng.gauss(0.0, 0.5)
    z = [x + weight * (1.0 - synthetic_y) / denominator
         for x, weight in zip(z, a)]

    def potential(state: list[float]) -> float:
        return 2.0 * (1.0 - sum(x * weight for x, weight in zip(state, a))) ** 2

    phi = potential(z)
    norm_sq = sum(x * x for x in z)
    beta, rho = 0.6, 0.8
    step = 2.0 / math.sqrt(d)
    first, measurement = [], []
    accepted = 0
    start = time.perf_counter()
    for _ in range(draws):
        noise = [rng.gauss(0.0, 1.0) for _ in a]
        if method == "pcn":
            proposal = [rho * x + beta * e for x, e in zip(z, noise)]
        else:
            proposal = [x + step * e for x, e in zip(z, noise)]
        new_phi = potential(proposal)
        new_norm_sq = sum(x * x for x in proposal)
        log_ratio = phi - new_phi
        if method == "rw":
            log_ratio += 0.5 * (norm_sq - new_norm_sq)
        if math.log(1.0 - rng.random()) < min(0.0, log_ratio) or log_ratio >= 0.0:
            z, phi, norm_sq = proposal, new_phi, new_norm_sq
            accepted += 1
        # Rejections repeat the current state and remain in both averages.
        first.append(z[0])
        measurement.append(sum(x * weight for x, weight in zip(z, a)))
    elapsed = time.perf_counter() - start
    return {"mean": statistics.fmean(first), "mcse": batch_mcse(first),
            "exact": 1.0 / denominator, "variance": statistics.pvariance(first),
            "exact_variance": 1.0 - 1.0 / denominator,
            "g_mean": statistics.fmean(measurement), "g_mcse": batch_mcse(measurement),
            "g_exact": s_d / denominator, "acceptance": accepted / draws,
            "seconds": elapsed}


def gaussian_moments(d: int) -> tuple[float, float]:
    """First-coordinate posterior mean and variance in the smooth model."""
    if d < 1:
        raise ValueError("The truncation dimension must be positive")
    denominator = 0.25 + math.fsum(j ** -4 for j in range(1, d + 1))
    mean = 1.0 / denominator
    return mean, 1.0 - mean


def multilevel_demo() -> None:
    """Check posterior correction marginals using common normal draws."""
    levels, counts = (4, 16, 64), (20000, 2000, 1000)
    moments = [gaussian_moments(d) for d in levels]
    estimate, exact_variance, exact_telescope = 0.0, 0.0, 0.0
    print("\nMultilevel oracle: direct scalar draws, independent correction streams")
    print("level       draws    mean       exact      samplevar   exactvar    independentvar")
    for level, ((fine_mean, fine_var), count) in enumerate(zip(moments, counts)):
        rng = random.Random(240401 + level)
        if level == 0:
            coarse_mean, coarse_sd = 0.0, 0.0
            label = f"base {levels[level]}"
            independent_variance = fine_var
        else:
            coarse_mean, coarse_var = moments[level - 1]
            coarse_sd = math.sqrt(coarse_var)
            label = f"{levels[level - 1]} -> {levels[level]}"
            independent_variance = fine_var + coarse_var
        fine_sd = math.sqrt(fine_var)
        corrections = []
        for _ in range(count):
            normal = rng.gauss(0.0, 1.0)
            fine = fine_mean + fine_sd * normal
            coarse = coarse_mean + coarse_sd * normal
            corrections.append(fine - coarse)
        expected_mean = fine_mean - coarse_mean
        correction_variance = (fine_sd - coarse_sd) ** 2
        sample_mean = statistics.fmean(corrections)
        estimate += sample_mean
        exact_telescope += expected_mean
        exact_variance += correction_variance / count
        print(f"{label:>9} {count:7d} {sample_mean: .7f} {expected_mean: .7f} "
              f"{statistics.variance(corrections):.5e} "
              f"{correction_variance:.5e} {independent_variance:.5e}")
    assert math.isclose(exact_telescope, moments[-1][0], abs_tol=1e-14)
    continuum = 1.0 / (0.25 + math.pi ** 4 / 90.0)
    bias = moments[-1][0] - continuum
    print(f"Telescoping estimate={estimate:.7f}, exact fine mean={moments[-1][0]:.7f}")
    print(f"Exact SE={math.sqrt(exact_variance):.7f}, continuum bias={bias:.3e}, "
          f"exact continuum RMSE={math.sqrt(exact_variance + bias * bias):.7f}")
    print("Coupling reduces correction variance; these scalar draws do not measure PDE costs.")


def scale_gibbs_moments(shape: int | Fraction, scale: int | Fraction,
                       modes: int) -> dict[str, Fraction]:
    """Exact stationary theta moments for the complete-refresh Gibbs benchmark.

    IG(shape, scale) has density proportional to theta**(-shape-1)
    exp(-scale/theta). The modes are unobserved Gaussian auxiliaries.
    This bounded teaching reference accepts exact int/Fraction parameters:
    2 < shape <= 32, 0 < scale <= 32, denominators <= 64, modes 0..256.
    Its formulas are not formulas for a pCN field substep.
    """
    for value in (shape, scale):
        if isinstance(value, bool) or not isinstance(value, (int, Fraction)):
            raise ValueError("Shape and scale must be exact integers or Fractions")
    shape, scale = Fraction(shape), Fraction(scale)
    if not (2 < shape <= 32 and 0 < scale <= 32):
        raise ValueError("Use 2 < shape <= 32 and 0 < scale <= 32")
    if max(shape.denominator, scale.denominator) > 64:
        raise ValueError("Shape and scale denominators must be at most 64")
    if isinstance(modes, bool) or not isinstance(modes, int) or not 0 <= modes <= 256:
        raise ValueError("Use an integer mode count from 0 to 256")
    mean = scale / (shape - 1)
    variance = scale ** 2 / ((shape - 1) ** 2 * (shape - 2))
    denominator = modes + 2 * shape - 2
    rho = Fraction(modes) / denominator
    tau = (1 + rho) / (1 - rho)
    return {"mean": mean, "variance": variance,
            "intercept": 2 * scale / denominator, "rho": rho, "tau": tau,
            "long_run_variance": variance * tau}


def scale_gibbs_window_variance(shape: int | Fraction, scale: int | Fraction,
                               modes: int, draws: int) -> Fraction:
    """Variance of the mean of 1..256 consecutive stationary scale draws."""
    if isinstance(draws, bool) or not isinstance(draws, int) or not 1 <= draws <= 256:
        raise ValueError("Use an integer draw count from 1 to 256")
    moments = scale_gibbs_moments(shape, scale, modes)
    covariance_sum = Fraction(draws)
    power = moments["rho"]
    for lag in range(1, draws):
        covariance_sum += 2 * (draws - lag) * power
        power *= moments["rho"]
    return moments["variance"] * covariance_sum / draws ** 2


def scale_mixing_example() -> None:
    """Print an exact prior-only table without sampling or changed-task answers."""
    print("\nExact scale hierarchy: IG(3,2), no observations, complete Gibbs sweeps")
    print(" modes   mean   variance      rho   tau   long-run N*Var(mean)")
    for modes in (4, 16, 64):
        moments = scale_gibbs_moments(3, 2, modes)
        print(f"{modes:6d}   {str(moments['mean']):>4}   "
              f"{str(moments['variance']):>8}   {str(moments['rho']):>6}   "
              f"{str(moments['tau']):>3}   {moments['long_run_variance']}")
    print("Noncentered iid refresh: the same IG(3,2) law, rho=0 and tau=1.")
    print("These are exact stationary moment references; no scale sampler was run.")


def main() -> None:
    continuum = 1.0 / (0.25 + math.pi ** 4 / 90.0)
    print(f"Continuum E[u1|y] = {continuum:.9f}")
    print("30,000 proposals per row; exact posterior initialization; batch size 500")
    print(" d method accept  mean(u1)   MCSE     exact     bias(d)  var(u1) exactvar seconds")
    for d in (4, 16, 64):
        for k, method in enumerate(("pcn", "rw")):
            result = run_chain(d, method, 24000 + 10 * d + k)
            print(f"{d:2d} {method:>6} {result['acceptance']:.3f}   "
                  f"{result['mean']:.5f}  {result['mcse']:.5f}  "
                  f"{result['exact']:.5f}  {result['exact'] - continuum:.2e}  "
                  f"{result['variance']:.5f} {result['exact_variance']:.5f} "
                  f"{result['seconds']:.2f}")
            print(f"   G(u): mean={result['g_mean']:.5f}, "
                  f"MCSE={result['g_mcse']:.5f}, exact={result['g_exact']:.5f}")
    print("MCSE reliability requires batches longer than relevant correlations.")
    print("Runtime varies by machine; fixed likelihood budgets are not fixed costs.")
    multilevel_demo()


if __name__ == "__main__":
    main()
    scale_mixing_example()
