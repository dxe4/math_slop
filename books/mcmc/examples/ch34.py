"""Chapter 34: SGLD bias, Firefly augmentation, and kernel perturbation.

Uses only the standard library. The first experiment injects an explicit
score-error model; the second really samples a minibatch from a tiny data set.
These are teaching calculations, not evidence of a speedup.
"""

import math
import random
from fractions import Fraction
from itertools import product


ExactLaw = tuple[Fraction, ...]
ExactKernel = tuple[ExactLaw, ...]


def _rational(value: Fraction | int, name: str) -> Fraction:
    if isinstance(value, bool) or not isinstance(value, (int, Fraction)):
        raise ValueError(f"{name} must be an exact integer or Fraction")
    return Fraction(value)


def _law(values: ExactLaw, size: int | None = None) -> ExactLaw:
    if not isinstance(values, (tuple, list)) or not values:
        raise ValueError("a probability law must be a nonempty sequence")
    if size is not None and len(values) != size:
        raise ValueError("law and kernel dimensions must match")
    result = tuple(_rational(value, "probability") for value in values)
    if any(value < 0 for value in result) or sum(result) != 1:
        raise ValueError("a probability law must be nonnegative and sum exactly to one")
    return result


def _kernel(rows: ExactKernel) -> ExactKernel:
    if not isinstance(rows, (tuple, list)) or not rows:
        raise ValueError("a stochastic kernel must be a nonempty square matrix")
    return tuple(_law(row, len(rows)) for row in rows)


def _steps(steps: int) -> None:
    if isinstance(steps, bool) or not isinstance(steps, int) or steps < 0:
        raise ValueError("steps must be a nonnegative integer")


def _tv(left: ExactLaw, right: ExactLaw) -> Fraction:
    return sum((abs(a - b) for a, b in zip(left, right)), Fraction(0)) / 2


def _advance(law: ExactLaw, kernel: ExactKernel) -> ExactLaw:
    return tuple(sum((mass * kernel[i][j] for i, mass in enumerate(law)), Fraction(0))
                 for j in range(len(kernel)))


def total_variation(left: ExactLaw, right: ExactLaw) -> Fraction:
    """Half-L1 distance between exact probability laws on the same finite set."""
    left = _law(left)
    return _tv(left, _law(right, len(left)))


def transition_law(kernel: ExactKernel, initial: ExactLaw, steps: int) -> ExactLaw:
    """Exact law after steps transitions; zero steps returns the initial law."""
    kernel = _kernel(kernel)
    law = _law(initial, len(kernel))
    _steps(steps)
    for _ in range(steps):
        law = _advance(law, kernel)
    return law


def row_tv_error(exact: ExactKernel, approximate: ExactKernel) -> Fraction:
    """Maximum transition-row TV error, rather than a score-error surrogate."""
    exact, approximate = _kernel(exact), _kernel(approximate)
    if len(exact) != len(approximate):
        raise ValueError("both kernels must use the same finite state space")
    return max(_tv(left, right) for left, right in zip(exact, approximate))


def dobrushin_coefficient(kernel: ExactKernel) -> Fraction:
    """Maximum pairwise row TV; this is not a general spectral gap."""
    kernel = _kernel(kernel)
    return max(_tv(left, right) for left in kernel for right in kernel)


def finite_error_bound(
    exact: ExactKernel, approximate: ExactKernel, steps: int,
    initial_distance: Fraction = Fraction(0),
) -> Fraction:
    """Iterate e_next <= row_error + rho*e, then cap the valid TV bound at one.

    Common initial laws have initial_distance=0. This finite-time recurrence
    remains valid when rho=1, although there is then no stationary denominator.
    It makes no claim that either chain has reached its stationary law.
    """
    _steps(steps)
    bound = _rational(initial_distance, "initial_distance")
    if not 0 <= bound <= 1:
        raise ValueError("initial_distance must lie in [0,1]")
    epsilon = row_tv_error(exact, approximate)
    rho = dobrushin_coefficient(exact)
    for _ in range(steps):
        bound = epsilon + rho * bound
    return min(Fraction(1), bound)


def stationary_error_bound(
    exact: ExactKernel, approximate: ExactKernel,
    target: ExactLaw, invariant: ExactLaw,
) -> Fraction:
    """Bound stationary TV only after verifying both invariant-law hypotheses.

    Require target*exact=target, invariant*approximate=invariant, and rho<1
    for the EXACT kernel. Approximate-kernel uniqueness or convergence is not
    assumed: every supplied invariant probability law satisfies the bound.
    """
    exact, approximate = _kernel(exact), _kernel(approximate)
    epsilon = row_tv_error(exact, approximate)
    target, invariant = _law(target, len(exact)), _law(invariant, len(exact))
    if _advance(target, exact) != target:
        raise ValueError("target is not invariant for the exact kernel")
    if _advance(invariant, approximate) != invariant:
        raise ValueError("invariant law is not invariant for the approximate kernel")
    rho = dobrushin_coefficient(exact)
    if rho == 1:
        raise ValueError("stationary bound requires exact-kernel Dobrushin coefficient < 1")
    return min(Fraction(1), epsilon / (1 - rho))


def two_state_stationary(kernel: ExactKernel) -> ExactLaw:
    """Unique two-state stationary law when off-diagonal probabilities sum > 0.

    This algebra alone does not assert convergence; the deterministic flip
    kernel is a periodic example with a unique stationary law.
    """
    kernel = _kernel(kernel)
    if len(kernel) != 2:
        raise ValueError("this stationary formula requires exactly two states")
    a, b = kernel[0][1], kernel[1][0]
    if a + b == 0:
        raise ValueError("the identity kernel has no unique stationary probability law")
    return b / (a + b), a / (a + b)


def shifted_two_state(
    a: Fraction, b: Fraction, shift: Fraction,
) -> tuple[ExactKernel, ExactKernel]:
    """Shift both rows toward state one without hiding stochastic constraints.

    Require 0<=a,b<=1 and 0<=shift<=min(b,1-a). The constructor allows boundary
    cases; claims of irreducibility, contraction, and invariance are separate.
    """
    a, b, shift = (_rational(value, name)
                   for value, name in ((a, "a"), (b, "b"), (shift, "shift")))
    if not 0 <= a <= 1 or not 0 <= b <= 1 or not 0 <= shift <= min(b, 1 - a):
        raise ValueError("require 0<=a,b<=1 and 0<=shift<=min(b,1-a)")
    exact = _kernel(((1 - a, a), (b, 1 - b)))
    approximate = _kernel(((1 - a - shift, a + shift), (b - shift, 1 - b + shift)))
    return exact, approximate


def kernel_perturbation_example() -> None:
    """A sharp error budget, independently of the Gaussian and Firefly examples."""
    print("Example D: exact transition perturbation; TV is half the L1 distance")
    exact, approximate = shifted_two_state(Fraction(1, 1000), Fraction(1, 1000),
                                           Fraction(9, 10000))
    target, invariant = two_state_stationary(exact), two_state_stationary(approximate)
    epsilon = row_tv_error(exact, approximate)
    rho = dobrushin_coefficient(exact)
    stationary_bound = stationary_error_bound(exact, approximate, target, invariant)
    bias = total_variation(target, invariant)
    assert bias == stationary_bound == Fraction(9, 20)
    print(f"  row-TV error={epsilon}; Dobrushin coefficient P={rho}, "
          f"Q={dobrushin_coefficient(approximate)}")
    print(f"  stationary mass at one P={target[1]}, Q={invariant[1]}; "
          f"stationary TV={bias}; bound={stationary_bound}")
    initial = (Fraction(1, 2), Fraction(1, 2))
    for steps in (0, 1, 1000):
        p_law = transition_law(exact, initial, steps)
        q_law = transition_law(approximate, initial, steps)
        distance = total_variation(p_law, q_law)
        bound = finite_error_bound(exact, approximate, steps)
        assert distance == bound
        print(f"  n={steps}: P(state 1)={float(p_law[1]):.6f}; "
              f"Q(state 1)={float(q_law[1]):.6f}; "
              f"same-start TV={float(distance):.6f}; bound={float(bound):.6f}")
    exact, approximate = shifted_two_state(Fraction(1, 50), Fraction(3, 50),
                                           Fraction(1, 200))
    target, invariant = two_state_stationary(exact), two_state_stationary(approximate)
    budget = Fraction(1, 100) * (1 - dobrushin_coefficient(exact))
    assert target[1] == Fraction(1, 4) and invariant[1] == Fraction(5, 16)
    assert stationary_error_bound(exact, approximate, target, invariant) == Fraction(1, 16)
    assert budget == Fraction(1, 1250)
    print(f"  Changed target: stationary mass P={target[1]}, Q={invariant[1]}; "
          f"TV={total_variation(target, invariant)}; tolerance=1/100 needs shift<={budget}")
    print("  This fixture does not convert a minibatch score error into a uniform row-TV bound.")


def run_ar1(step, lam, score_variance, seed, iterations=100_000, burn=5_000):
    """Empirical E[X^2] for the scalar additive score-noise example."""
    rng = random.Random(seed)
    x = 0.0
    total = 0.0
    count = 0
    for k in range(iterations):
        score_error = rng.gauss(0.0, score_variance**0.5)
        x += 0.5 * step * (-lam * x + score_error)
        x += step**0.5 * rng.gauss(0.0, 1.0)
        if k >= burn:
            total += x * x
            count += 1
    return total / count


def ar1_variance(step, lam, score_variance):
    return (1.0 + step * score_variance / 4.0) / (
        lam * (1.0 - step * lam / 4.0)
    )


def run_normal_data(step=0.002, batch_size=10, iterations=100_000, burn=5_000):
    """Actual with-replacement minibatches and an exact anchor control variate."""
    data = [-0.7] * 50 + [1.3] * 50  # mean .3, population variance 1
    n = len(data)
    rng = random.Random(3402)
    x_sg = x_cv = 0.0
    sum_sg = sum_cv = sumsq_sg = sumsq_cv = 0.0
    count = 0
    for k in range(iterations):
        # Prior score -x appears exactly once. Each likelihood score is y-x.
        batch_sum = sum(data[rng.randrange(n)] for _ in range(batch_size))
        estimated_score = -x_sg + (n / batch_size) * (
            batch_sum - batch_size * x_sg
        )
        x_sg += 0.5 * step * estimated_score + step**0.5 * rng.gauss(0, 1)

        # At anchor 0, sum_i g_i(0)=30. The residual g_i(x)-g_i(0)=-x
        # is independent of i, so any sampled batch gives the full score.
        cv_score = -x_cv + 30.0 - n * x_cv
        x_cv += 0.5 * step * cv_score + step**0.5 * rng.gauss(0, 1)
        if k >= burn:
            count += 1
            sum_sg += x_sg
            sum_cv += x_cv
            sumsq_sg += x_sg * x_sg
            sumsq_cv += x_cv * x_cv
    mean_sg, mean_cv = sum_sg / count, sum_cv / count
    return mean_sg, sumsq_sg / count - mean_sg**2, mean_cv, sumsq_cv / count - mean_cv**2


def verify_firefly() -> tuple[float, float, float]:
    """Enumerate a tiny joint target and integrate the Gaussian bright count."""
    tiny_data = (-0.7, 0.3, 1.3)
    maximum_error = 0.0
    for theta in (-1.0, 0.0, 0.3, 1.0, 2.0):
        likelihoods = [math.exp(-0.5 * (y - theta)**2) for y in tiny_data]
        # Constants independent of theta cancel in this pointwise identity.
        bounds = [value * math.exp(-(theta - 0.3)**2) for value in likelihoods]
        joint_sum = math.fsum(
            math.prod(lik - bound if bit else bound
                      for bit, lik, bound in zip(bits, likelihoods, bounds))
            for bits in product((0, 1), repeat=len(tiny_data))
        )
        expected = math.prod(likelihoods)
        maximum_error = max(maximum_error, abs(joint_sum / expected - 1.0))
    assert maximum_error < 1e-12

    # Independent numerical check: integrate over a standard normal coordinate.
    intervals = 4000
    width = 20.0 / intervals
    values = []
    for k in range(intervals + 1):
        z = -10.0 + k * width
        density = math.exp(-z*z / 2) / math.sqrt(2 * math.pi)
        bright = -100 * math.expm1(-z*z / 101)
        weight = 1 if k in (0, intervals) else (4 if k % 2 else 2)
        values.append(weight * density * bright)
    integrated = width * math.fsum(values) / 3
    theory = 100 * (1 - math.sqrt(101 / 103))
    assert abs(integrated - theory) < 1e-10
    return maximum_error, integrated, theory


def run_firefly(iterations: int = 80_000, burn: int = 5_000) -> tuple[float, ...]:
    """Gaussian simplification of Gibbs brightness updates plus conditional MH.

    The explicit binary state is retained, even when theta is rejected.
    Sufficient statistics eliminate data reads here; this is not a speed test.
    """
    if not 0 <= burn < iterations:
        raise ValueError("Require 0 <= burn < iterations")
    rng = random.Random(3409)
    n, refreshes = 100, 10
    posterior_mean = 30 / 101
    theta = posterior_mean
    bright: set[int] = set()
    total = total_square = total_bright = 0.0
    accepted = 0

    def log_joint(value: float, active: int) -> float:
        square = (value - posterior_mean)**2
        log_density = -(101 / 2 + n) * square
        if active:
            if square == 0:
                return -math.inf
            # log(exp(square)-1), stable for both tiny and large squares.
            log_density += active * (square + math.log(-math.expm1(-square)))
        return log_density

    for k in range(iterations):
        probability = -math.expm1(-(theta - posterior_mean)**2)
        for _ in range(refreshes):
            index = rng.randrange(n)
            if rng.random() < probability:
                bright.add(index)
            else:
                bright.discard(index)
        proposed = theta + 0.15 * rng.gauss(0, 1)
        log_ratio = log_joint(proposed, len(bright)) - log_joint(theta, len(bright))
        if math.log1p(-rng.random()) < log_ratio:
            theta = proposed
            accepted += 1
        if k >= burn:
            total += theta
            total_square += theta * theta
            total_bright += len(bright)
    count = iterations - burn
    mean = total / count
    return mean, total_square / count - mean**2, total_bright / count, accepted / iterations


def main():
    print("Example A: Gaussian target variance = 1; explicit score noise variance = 4")
    for step in (0.2, 0.1):
        theory = ar1_variance(step, 1.0, 4.0)
        observed = run_ar1(step, 1.0, 4.0, seed=3400 + round(100 * step))
        print(f"  h={step:.3f}: theory E[X^2]={theory:.5f}; empirical={observed:.5f}")

    n, batch_size, step = 100, 10, 0.002
    lam = n + 1
    v = n * n / batch_size
    truth = 1 / lam
    sg_var = ar1_variance(step, lam, v)
    cv_var = ar1_variance(step, lam, 0)
    results = run_normal_data(step, batch_size)
    print("Example B: normal data, posterior mean=30/101, variance=1/101")
    print(f"  target variance={truth:.6f}; SGLD theory={sg_var:.6f}; CV theory={cv_var:.6f}")
    print(
        "  empirical SGLD mean/variance="
        f"{results[0]:.6f}/{results[1]:.6f}; "
        f"CV mean/variance={results[2]:.6f}/{results[3]:.6f}"
    )
    print(
        "  gradient data accesses: plain minibatch="
        f"{batch_size * 100_000:,}; "
        "anchor preprocessing=100; this special normal CV needs no residual reads"
    )
    error, integrated, theory = verify_firefly()
    ff_mean, ff_variance, ff_bright, acceptance = run_firefly()
    print("Example C: exact Firefly joint target, Gaussian sufficient-statistic simplification")
    print(f"  marginal enumeration relative error={error:.2g}")
    print(f"  expected bright count: integral={integrated:.6f}; theory={theory:.6f}")
    print(
        f"  empirical mean={ff_mean:.6f}; variance={ff_variance:.6f}; "
        f"bright count={ff_bright:.6f}; acceptance={acceptance:.3f}"
    )
    print("  target mean=30/101; variance=1/101; frozen-all-dark variance=1/301")
    print("  800,000 selected-coordinate brightness refreshes; no speedup claim")
    kernel_perturbation_example()


if __name__ == "__main__":
    main()
