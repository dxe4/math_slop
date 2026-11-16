"""Static HMC on a two-dimensional Gaussian; Python 3 standard library only.

Run: python examples/ch20.py
The fixed seed makes this a reproducible teaching example, not a convergence test.
"""

import math
import random
import statistics
from fractions import Fraction


VARIANCES = (1.0, 0.01)


def potential(q: tuple[float, ...] | list[float]) -> float:
    return 0.5 * sum(x * x / v for x, v in zip(q, VARIANCES))


def gradient(q: tuple[float, ...] | list[float]) -> tuple[float, ...]:
    return tuple(x / v for x, v in zip(q, VARIANCES))


def kinetic(p: tuple[float, ...] | list[float], mass: tuple[float, ...]) -> float:
    return 0.5 * sum(x * x / m for x, m in zip(p, mass))


def hmc_step(
    q: tuple[float, ...], mass: tuple[float, ...], step_size: float,
    steps: int, rng: random.Random,
) -> tuple[tuple[float, ...], bool, bool]:
    """One full-refresh HMC transition; uses steps + 1 gradients."""
    if len(q) != len(VARIANCES) or len(mass) != len(VARIANCES):
        raise ValueError("position and diagonal mass must have two entries")
    if any(not math.isfinite(m) or m <= 0.0 for m in mass):
        raise ValueError("mass entries must be finite and positive")
    if not math.isfinite(step_size) or step_size <= 0.0:
        raise ValueError("step size must be finite and positive")
    if type(steps) is not int or steps < 1:
        raise ValueError("steps must be a positive integer")
    if any(not math.isfinite(x) for x in q) or not math.isfinite(potential(q)):
        raise ValueError("initial position must have finite coordinates and energy")
    p0 = tuple(rng.gauss(0.0, math.sqrt(m)) for m in mass)
    current_h = potential(q) + kinetic(p0, mass)
    if not math.isfinite(current_h):
        raise ValueError("initial joint energy must be finite")
    position = list(q)
    momentum = list(p0)
    grad = gradient(position)
    try:
        for _ in range(steps):
            momentum = [p - 0.5 * step_size * g for p, g in zip(momentum, grad)]
            position = [x + step_size * p / m for x, p, m in zip(position, momentum, mass)]
            grad = gradient(position)
            momentum = [p - 0.5 * step_size * g for p, g in zip(momentum, grad)]
        # Reversal completes the deterministic involution; K is even in p.
        momentum = [-p for p in momentum]
        proposed_h = potential(position) + kinetic(momentum, mass)
    except OverflowError:
        return q, False, True
    if not math.isfinite(proposed_h):
        return q, False, True
    uniform = rng.random()
    accepted = uniform == 0.0 or math.log(uniform) < min(0.0, current_h - proposed_h)
    return (tuple(position) if accepted else q), accepted, False


def run_setting(
    label: str, mass: tuple[float, ...], step_size: float,
    steps: int, total_gradients: int, seed: int,
) -> None:
    if type(total_gradients) is not int or total_gradients <= 0:
        raise ValueError("gradient budget must be a positive integer")
    if total_gradients % (4 * (steps + 1)) != 0:
        raise ValueError("gradient budget must divide evenly among four chains")
    iterations = total_gradients // (4 * (steps + 1))
    warmup = iterations // 10
    moments = [0.0, 0.0]
    squared_jumps = [0.0, 0.0]
    accepted = nonfinite = retained = 0
    batch_means: list[list[float]] = [[], []]
    batch_count = 20
    if iterations - warmup < batch_count or (iterations - warmup) % batch_count:
        raise ValueError("retained iterations must divide into 20 equal batches")
    batch_size = (iterations - warmup) // batch_count
    for chain in range(4):
        rng = random.Random(seed + chain)
        q = (0.0, 0.0)
        batch_sums = [0.0, 0.0]
        for i in range(iterations):
            previous = q
            q, yes, bad = hmc_step(q, mass, step_size, steps, rng)
            accepted += yes
            nonfinite += bad
            if i >= warmup:
                retained += 1
                for j in range(2):
                    moments[j] += q[j] ** 2
                    squared_jumps[j] += (q[j] - previous[j]) ** 2 / VARIANCES[j]
                batch_sums[0] += q[0]
                batch_sums[1] += q[0] ** 2
                if (i - warmup + 1) % batch_size == 0:
                    for j in range(2):
                        batch_means[j].append(batch_sums[j] / batch_size)
                    batch_sums = [0.0, 0.0]
    transitions = 4 * iterations
    print(f"{label}: mass={mass}, epsilon={step_size}, L={steps}, "
          f"transitions={transitions}, gradients={total_gradients}")
    print(f"  acceptance={accepted / transitions:.4f}; nonfinite={nonfinite}")
    print("  E[q_j^2] estimates=(%.4f, %.5f); exact=(1, 0.01)" %
          tuple(x / retained for x in moments))
    print("  mean squared standardized jump=(%.3f, %.3f)" %
          tuple(x / retained for x in squared_jumps))
    mcse = tuple(math.sqrt(statistics.variance(b) / len(b)) for b in batch_means)
    print("  batch MCSE for E[q1], E[q1^2]=(%.5f, %.5f)" % mcse)
    print("  gradients * MCSE^2=(%.2f, %.2f); %d batches of %d" %
          (total_gradients * mcse[0] ** 2, total_gradients * mcse[1] ** 2,
           len(batch_means[0]), batch_size))


def check_calculations() -> None:
    """Independent calculus and exact-rational oscillator checks."""
    largest_error = 0.0
    for q in ((0.3, -0.07), (-1.2, 0.4), (2.0, -0.2)):
        for h in (1e-4, 1e-5, 1e-6):
            for j, expected in enumerate(gradient(q)):
                plus, minus = list(q), list(q)
                plus[j] += h
                minus[j] -= h
                numerical = (potential(plus) - potential(minus)) / (2 * h)
                largest_error = max(largest_error, abs(numerical - expected))
                assert math.isclose(numerical, expected, rel_tol=1e-8, abs_tol=1e-8)

    def oscillator(q: Fraction, p: Fraction, eps: Fraction) -> tuple[Fraction, Fraction]:
        half = p - eps * q / 2
        new_q = q + eps * half
        return new_q, half - eps * new_q / 2

    for start, expected_energy in (
        ((Fraction(1), Fraction(0)), Fraction(1009, 2048)),
        ((Fraction(0), Fraction(1)), Fraction(65, 128)),
    ):
        q, p = oscillator(*start, Fraction(1, 2))
        assert (q * q + p * p) / 2 == expected_energy
        returned_q, returned_p = oscillator(q, -p, Fraction(1, 2))
        assert (returned_q, -returned_p) == start
    # Columns of A^3 and A^6, independently accumulated in exact arithmetic.
    for start in ((Fraction(1), Fraction(0)), (Fraction(0), Fraction(1))):
        q, p = start
        for step in range(6):
            q, p = oscillator(q, p, Fraction(1))
            if step == 2:
                assert (q, p) == tuple(-x for x in start)
        assert (q, p) == start
    print(f"Gradient checks: max absolute error={largest_error:.2e}; "
          "rational energies, reversal, A^3=-I and A^6=I passed")


def exact_duration_demo() -> None:
    """Exact oscillator flow: fresh iid duration and momentum every iteration."""
    print("Exact-flow duration experiment: 20000 transitions from q=2; all accepted")
    for label in ("half/full periods", "uniform full period", "quarter period"):
        rng = random.Random(202620)
        q = 2.0
        positions = []
        for _ in range(20_000):
            if label == "half/full periods":
                # Exact trig values avoid accumulated roundoff at multiples of pi.
                cosine, sine = rng.choice(((-1.0, 0.0), (1.0, 0.0)))
            elif label == "uniform full period":
                duration = rng.uniform(0.0, 2 * math.pi)
                cosine, sine = math.cos(duration), math.sin(duration)
            else:
                cosine, sine = 0.0, 1.0
            q = cosine * q + sine * rng.gauss(0.0, 1.0)
            positions.append(q)
        print(f"  {label}: mean={statistics.mean(positions):.4f}; "
              f"second moment={statistics.mean(x*x for x in positions):.4f}")
    # Exact theory for stationary chains; no finite IACT for q^2 in the first case.
    print("  uniform duration: IACT(q)=1, IACT(q^2)=3; "
          "quarter period: IACT(q)=IACT(q^2)=1")


if __name__ == "__main__":
    check_calculations()
    budget = 96_000
    run_setting("Identity mass", (1.0, 1.0), 0.1, 14, budget, 202620)
    run_setting("Matched mass", (1.0, 100.0), 0.5, 3, budget, 202620)
    exact_duration_demo()
