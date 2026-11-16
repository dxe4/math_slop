"""Chapter 36: frozen banana-flow independence proposals (standard library only)."""

import math
import random


B = 0.8
N = 20_000
BURN = 3_000


def draw(rng: random.Random, coefficient: float) -> tuple[float, float]:
    z1 = rng.gauss(0.0, 1.0)
    z2 = rng.gauss(0.0, 1.0)
    return (z1, z2 + coefficient * (z1 * z1 - 1.0))


def log_density(x: tuple[float, float], coefficient: float) -> float:
    x1, x2 = x
    z2 = x2 - coefficient * (x1 * x1 - 1.0)
    # The map has unit Jacobian; the normalizing constant cancels in MH.
    return -0.5 * (x1 * x1 + z2 * z2)


def run(rng: random.Random, coefficient: float) -> tuple[float, float, float, float]:
    # Start away from the exact target, then discard a fixed illustrative warmup.
    x = (0.0, 0.0)
    log_target_x = log_density(x, B)
    log_proposal_x = log_density(x, coefficient)
    retained = []
    accepted = 0
    for iteration in range(N):
        y = draw(rng, coefficient)
        log_target_y = log_density(y, B)
        log_proposal_y = log_density(y, coefficient)
        log_ratio = (
            log_target_y + log_proposal_x
            - log_target_x - log_proposal_y
        )
        uniform = rng.random()
        # random() includes zero; its log threshold is then negative infinity.
        log_uniform = math.log(uniform) if uniform > 0.0 else -math.inf
        if log_uniform < min(0.0, log_ratio):
            x = y
            log_target_x = log_target_y
            log_proposal_x = log_proposal_y
            accepted += 1
        if iteration >= BURN:
            retained.append(x)
    n = len(retained)
    mean_x2 = sum(x2 for _, x2 in retained) / n
    variance_x2 = sum((x2 - mean_x2) ** 2 for _, x2 in retained) / n
    mean_x1_squared = sum(x1 * x1 for x1, _ in retained) / n
    return accepted / N, mean_x2, variance_x2, mean_x1_squared


def check_tail_examples() -> None:
    """Reproduce exact density-ratio and defensive-bound calculations."""
    for coefficient in (0.0, 0.4, 0.79, 0.8):
        ridge = (4.0, B * (4.0**2 - 1.0))
        log_weight = log_density(ridge, B) - log_density(ridge, coefficient)
        expected = 0.5 * (B - coefficient)**2 * (4.0**2 - 1.0)**2
        assert math.isclose(log_weight, expected, rel_tol=1e-12, abs_tol=1e-12)
        print(
            f"c={coefficient:.2f}  KL both ways={(B - coefficient)**2:.6f}  "
            f"ridge log weight (x1=4)={log_weight:.6f}"
        )
    stay_bound = math.exp(1000 * math.log1p(-math.exp(-18.0)))
    print(f"Tail start: no-departure probability over 1000 >= {stay_bound:.8f}")

    # Normal target / standard Cauchy fallback has its maxima at x = +/-1.
    domination = math.sqrt(2.0 * math.pi / math.e)
    delta = 0.1
    minorization = delta / domination
    tv_bound = math.exp(100 * math.log1p(-minorization))
    print(
        f"Gaussian/Cauchy: C={domination:.8f}, "
        f"M bound={1 / minorization:.8f}, TV bound at 100={tv_bound:.8f}"
    )
    # Spot checks supplement the chapter's global derivative argument.
    for x in (-8.0, -2.0, -1.0, 0.0, 0.5, 1.0, 2.0, 8.0):
        target = math.exp(-0.5 * x*x) / math.sqrt(2 * math.pi)
        narrow = 2 * math.exp(-2 * x*x) / math.sqrt(2 * math.pi)
        fallback = 1 / (math.pi * (1 + x*x))
        mixture = (1 - delta) * narrow + delta * fallback
        assert target / fallback <= domination * (1 + 1e-14)
        assert target / mixture <= 1 / minorization


def main() -> None:
    print("Target: E[x2]=0, Var(x2)=2.28, E[x1^2]=1")
    print("Raw q_c variance of x2 = 1 + 2 c^2")
    for i, coefficient in enumerate((0.0, 0.4, 0.8)):
        rng = random.Random(3600 + i)
        rate, mean, variance, square = run(rng, coefficient)
        print(
            f"c={coefficient:.1f}  raw Var={1 + 2 * coefficient**2:.3f}  "
            f"MH accept={rate:.3f}  mean x2={mean:+.3f}  "
            f"Var x2={variance:.3f}  mean x1^2={square:.3f}"
        )
    check_tail_examples()


if __name__ == "__main__":
    main()
