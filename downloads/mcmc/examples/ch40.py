"""Chapter 40: Gaussian, elliptical slice, precision, and constrained-field checks.

Only the Python standard library is used. Run with ``python examples/ch40.py``.
The ESS example conditions on a fixed covariance; it does not infer GP parameters.
"""

import math
import random
from fractions import Fraction


RNG = random.Random(4026)
N_DIRECT = 20_000
N_ESS = 12_000
BURN = 2_000


def _correlation(rho: float) -> float:
    if (isinstance(rho, bool) or not isinstance(rho, (int, float, Fraction))
            or not -1 < rho < 1):
        raise ValueError("rho must be finite and strictly between -1 and 1")
    converted = float(rho)
    if not math.isfinite(converted) or not -1 < converted < 1:
        raise ValueError("rho must remain finite and strictly interior after float conversion")
    return converted


def correlated_prediction_pair(rho: float, z1: float, z2: float) -> tuple[float, float]:
    """Map independent standard-normal innovations to the stipulated prediction law.

    rho changes the joint law at two fixed sites; it is not an MCMC tuning knob.
    The caller supplies independent normal innovations to obtain a Gaussian draw.
    """
    rho = _correlation(rho)
    if any(isinstance(z, bool) or not isinstance(z, (int, float, Fraction))
           or not math.isfinite(z) for z in (z1, z2)):
        raise ValueError("normal innovations must be finite real numbers")
    return float(z1), rho * z1 + math.sqrt((1 - rho) * (1 + rho)) * z2


def both_exceedance_probability(rho: float) -> float:
    """Analytic P(F1>0,F2>0) for centered unit marginals and fixed threshold zero."""
    rho = _correlation(rho)
    return 0.25 + math.asin(rho) / (2 * math.pi)


def exceedance_count_probabilities(rho: float) -> tuple[float, float, float]:
    """P(C=0),P(C=1),P(C=2); symmetry is specific to the stipulated law."""
    q = both_exceedance_probability(rho)
    return q, 1 - 2 * q, q


def spatial_exceedance_reference(rho: float) -> dict[str, tuple[float, float]]:
    """Analytic (mean, per-draw variance) for each event/count function.

    Both and any have complementary population probabilities HERE because the
    marginal probabilities sum to one. Their per-draw indicators are not complements.
    """
    q = both_exceedance_probability(rho)
    return {"site_1": (0.5, 0.25), "site_2": (0.5, 0.25), "count": (1.0, 2 * q),
            "both": (q, q * (1 - q)), "any": (1 - q, q * (1 - q))}


def spatial_exceedance_functions(pair: tuple[float, float]) -> dict[str, int]:
    """Evaluate separate functions on ONE preserved joint draw at threshold zero."""
    if len(pair) != 2 or any(isinstance(x, bool) or not isinstance(x, (int, float, Fraction))
                             or not math.isfinite(x) for x in pair):
        raise ValueError("a joint draw must contain two finite real site predictions")
    first, second = (int(value > 0) for value in pair)
    return {"site_1": first, "site_2": second, "count": first + second,
            "both": first * second, "any": max(first, second)}


def iid_exceedance_summary(values: tuple[int, ...]) -> tuple[Fraction, Fraction]:
    """Exact (sample mean, estimated variance of that mean) for an integer function.

    Call separately for each function across iid joint draws. Square root the
    second output for its sample MCSE. This arithmetic cannot establish iidness.
    """
    if len(values) < 2 or any(isinstance(value, bool) or not isinstance(value, int) for value in values):
        raise ValueError("at least two integer-valued iid function outputs are required")
    size = len(values)
    average = Fraction(sum(values), size)
    variance_of_mean = sum(((value - average)**2 for value in values), Fraction(0)) / (size * (size - 1))
    return average, variance_of_mean


def spatial_exceedance_report(draws: int = 20_000, seed: int = 40101) -> None:
    """Separate local RNG streams; no effect on earlier GP, ESS, or GMRF examples."""
    if isinstance(draws, bool) or not isinstance(draws, int) or draws < 2:
        raise ValueError("draws must be an integer at least two")
    if isinstance(seed, bool) or not isinstance(seed, int):
        raise ValueError("seed must be an integer")
    print("Two fixed prediction sites, threshold zero: stipulated conditional Gaussian laws")
    for index, rho in enumerate((0.0, 0.5, -0.5)):
        rng = random.Random(seed + index)
        reference = spatial_exceedance_reference(rho)
        columns = {name: [] for name in reference}
        for _ in range(draws):
            pair = correlated_prediction_pair(rho, rng.gauss(0, 1), rng.gauss(0, 1))
            functions = spatial_exceedance_functions(pair)
            for name, value in functions.items():
                columns[name].append(value)
        print(f"  rho={rho:+.1f}; {draws} independent JOINT pairs; count law={exceedance_count_probabilities(rho)}")
        for name, values in columns.items():
            estimate, estimated_variance = iid_exceedance_summary(values)
            target, variance = reference[name]
            print(f"    {name}: mean={float(estimate):.6f}, target={target:.6f}; "
                  f"own iid MCSE={math.sqrt(estimated_variance):.6f}, "
                  f"theoretical SE={math.sqrt(variance / draws):.6f}")
    print("  Per draw any+both=count, not one; independently drawing marginals would change the joint law.")


def mean(xs):
    return sum(xs) / len(xs)


def covariance(xs, ys):
    mx, my = mean(xs), mean(ys)
    return sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / len(xs)


def normal_prior():
    """A draw from N(0, [[1, .5], [.5, 1]]) via a lower factor."""
    z0, z1 = RNG.gauss(0, 1), RNG.gauss(0, 1)
    return (z0, 0.5 * z0 + math.sqrt(0.75) * z1)


def log_sigmoid(x):
    return -math.log1p(math.exp(-x)) if x >= 0 else x - math.log1p(math.exp(x))


def log_likelihood(f):
    # Independent Bernoulli-logit outcomes y=(1,0).
    return log_sigmoid(f[0]) + log_sigmoid(-f[1])


def elliptical_slice(current):
    """One exact-invariant ESS update for the chosen finite latent-field target."""
    nu = normal_prior()
    threshold = log_likelihood(current) + math.log1p(-RNG.random())
    angle = RNG.uniform(0.0, 2.0 * math.pi)
    lower, upper = angle - 2.0 * math.pi, angle
    for proposals in range(1, 1001):
        candidate = tuple(
            f * math.cos(angle) + v * math.sin(angle)
            for f, v in zip(current, nu)
        )
        if log_likelihood(candidate) > threshold:
            return candidate, proposals
        if angle < 0:
            lower = angle
        else:
            upper = angle
        angle = RNG.uniform(lower, upper)
    raise RuntimeError("ESS bracket did not find a point in 1000 proposals")


def batch_mcse(values, batch_size=250):
    """Approximate mean MCSE from nonoverlapping batches; not a mixing proof."""
    batches = [mean(values[i:i + batch_size])
               for i in range(0, len(values) - batch_size + 1, batch_size)]
    center = mean(batches)
    return math.sqrt(sum((x - center) ** 2 for x in batches)
                     / (len(batches) * (len(batches) - 1)))


def bernoulli_quadrature(cells):
    """Midpoint integration on [-8,8]^2, with finite-domain and grid error."""
    width = 16.0 / cells
    points = [-8.0 + (i + 0.5) * width for i in range(cells)]
    mass = first = 0.0
    for x in points:
        for y in points:
            # K inverse = [[1,-.5],[-.5,1]]/.75; constants cancel.
            weight = math.exp(-(x*x - x*y + y*y) / 1.5
                              + log_likelihood((x, y)))
            mass += weight
            first += x * weight
    return first / mass


def cholesky(matrix):
    """Lower Cholesky for the small SPD teaching matrices, using dense lists."""
    n = len(matrix)
    lower = [[0.0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1):
            value = matrix[i][j] - sum(lower[i][k] * lower[j][k]
                                      for k in range(j))
            lower[i][j] = math.sqrt(value) if i == j else value / lower[j][j]
    return lower


def triangular_solve(lower, rhs, transpose=False):
    n = len(rhs)
    result = [0.0] * n
    indices = range(n - 1, -1, -1) if transpose else range(n)
    for i in indices:
        correction = (sum(lower[j][i] * result[j] for j in range(i + 1, n))
                      if transpose else
                      sum(lower[i][j] * result[j] for j in range(i)))
        result[i] = (rhs[i] - correction) / lower[i][i]
    return result


def precision_example():
    rng = random.Random(407)
    precision = [[6., -1., 0.], [-1., 7., -1.], [0., -1., 6.]]
    target_cov = [[v / 240. for v in row]
                  for row in [[41, 6, 1], [6, 36, 6], [1, 6, 41]]]
    lower = cholesky(precision)
    location = triangular_solve(
        lower, triangular_solve(lower, [4., 0., -4.]), transpose=True)
    # Deterministic checks expose matrix-order and factor-transpose mistakes.
    for i in range(3):
        assert math.isclose(location[i], [2/3, 0., -2/3][i], abs_tol=1e-14)
        for j in range(3):
            assert math.isclose(sum(precision[i][k] * target_cov[k][j]
                                    for k in range(3)), float(i == j), abs_tol=1e-14)
            assert math.isclose(sum(lower[i][k] * lower[j][k] for k in range(3)),
                                precision[i][j], abs_tol=1e-14)
    # Covariance of the linear noise map is checked without simulation error.
    columns = [triangular_solve(lower, [float(i == j) for i in range(3)], True)
               for j in range(3)]
    for i in range(3):
        for j in range(3):
            assert math.isclose(sum(col[i] * col[j] for col in columns),
                                target_cov[i][j], abs_tol=1e-14)
    draws = []
    for _ in range(N_DIRECT):
        noise = triangular_solve(lower, [rng.gauss(0, 1) for _ in range(3)], True)
        draws.append([m + d for m, d in zip(location, noise)])
    averages = [mean(draw) for draw in draws]
    print("Three-node Gaussian posterior via precision solves, 20,000 independent draws")
    print("  means =", tuple(round(mean([d[j] for d in draws]), 4) for j in range(3)))
    print("  var(spatial average) = %.5f; exact = %.5f" %
          (covariance(averages, averages), 1/15))
    print("  ignoring cross-node covariance gives %.5f" % (59/1080))


def constrained_example():
    rng = random.Random(408)
    basis = [(1/math.sqrt(2), 0., -1/math.sqrt(2)),
             (1/math.sqrt(6), -2/math.sqrt(6), 1/math.sqrt(6))]
    laplacian = [[1, -1, 0], [-1, 2, -1], [0, -1, 1]]
    for j, vector in enumerate(basis):
        for i in range(3):
            assert math.isclose(sum(laplacian[i][k] * vector[k] for k in range(3)),
                                [1, 3][j] * vector[i], abs_tol=1e-14)
    energies, levels = [], []
    for _ in range(N_DIRECT):
        u1, u2 = rng.gauss(0, 1), rng.gauss(0, 1/math.sqrt(3))
        field = [u1 * b1 + u2 * b2 for b1, b2 in zip(*basis)]
        energies.append((field[0]-field[1])**2 + (field[1]-field[2])**2)
        levels.append(abs(sum(field)))
    # Coordinate-map area Jacobian sqrt(det([[2,1],[1,2]])) = sqrt(3).
    # Coordinate precision [[2,1],[1,5]] has determinant 9.
    assert math.isclose(math.sqrt(3) * math.sqrt(3), math.sqrt(2*5 - 1))
    print("Constrained three-node intrinsic field, tau=1")
    print("  maximum absolute sum = %.2g; mean energy = %.4f (exact 2)" %
          (max(levels), mean(energies)))
    print("  surface normalizer = sqrt(3)/(2*pi); free-coordinate normalizer = 3/(2*pi)")
    fixed_field = [1, -1, 0]
    energy = sum(fixed_field[i] * laplacian[i][j] * fixed_field[j]
                 for i in range(3) for j in range(3))
    shape, rate = 2 + len(basis)/2, 1 + energy/2
    assert (shape, rate) == (3, 3.5)
    print("  exercise 7: tau conditional shape=%.1f, rate=%.1f, mean=%.6f" %
          (shape, rate, shape/rate))


def main():
    # Posterior for K=[[1,.5],[.5,1]], noise variance .25, y=(1,-1).
    # In the normalized +/- eigenbasis, the posterior variances are 3/14, 1/6.
    xs, ys = [], []
    for _ in range(N_DIRECT):
        plus = RNG.gauss(0.0, math.sqrt(3.0 / 14.0))
        minus = RNG.gauss(2.0 * math.sqrt(2.0) / 3.0, math.sqrt(1.0 / 6.0))
        xs.append((plus + minus) / math.sqrt(2.0))
        ys.append((plus - minus) / math.sqrt(2.0))
    print("Gaussian conditional, 20,000 independent draws")
    print("  mean = (%.4f, %.4f); exact = (0.6667, -0.6667)" % (mean(xs), mean(ys)))
    print("  var(f1) = %.4f; exact = %.4f" % (covariance(xs, xs), 4.0 / 21.0))
    print("  cov(f1,f2) = %.4f; exact = %.4f" % (covariance(xs, ys), 1.0 / 42.0))

    state = (0.0, 0.0)
    kept0, kept1 = [], []
    proposal_count = 0
    for i in range(N_ESS):
        state, proposals = elliptical_slice(state)
        proposal_count += proposals
        if i >= BURN:
            kept0.append(state[0])
            kept1.append(state[1])
    print("Bernoulli-logit field, fixed K, 12,000 ESS updates (2,000 discarded)")
    print("  posterior means = (%.4f, %.4f)" % (mean(kept0), mean(kept1)))
    print("  mean likelihood proposals/update = %.3f" % (proposal_count / N_ESS))
    print("  retained states = %d; these are correlated MCMC draws" % len(kept0))
    print("  approximate mean MCSEs (40 batches of 250) = (%.5f, %.5f)" %
          (batch_mcse(kept0), batch_mcse(kept1)))
    for cells in (120, 240):
        reference = bernoulli_quadrature(cells)
        print("  quadrature %dx%d on [-8,8]^2: means = (%.8f, %.8f)" %
              (cells, cells, reference, -reference))
    precision_example()
    constrained_example()
    spatial_exceedance_report()


if __name__ == "__main__":
    main()
