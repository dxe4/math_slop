"""Reproducible calculations for Chapter 22; standard library only.

This is a diagnostic illustration, not a NUTS implementation. In particular,
it does not assign divergence flags or estimate MCMC convergence.
"""

import math
import random


def leapfrog(q: float, p: float, epsilon: float, sigma: float) -> tuple[float, float]:
    """One unit-mass leapfrog step for U(q) = q*q/(2*sigma*sigma)."""
    p -= 0.5 * epsilon * q / (sigma * sigma)
    q += epsilon * p
    p -= 0.5 * epsilon * q / (sigma * sigma)
    return q, p


def energy(q: float, p: float, sigma: float) -> float:
    return 0.5 * (q / sigma) ** 2 + 0.5 * p * p


def empirical_bfmi(energies: list[float]) -> float:
    """Mean squared successive difference / population-form sample variance."""
    if len(energies) < 2:
        return math.nan
    mean = sum(energies) / len(energies)
    variance = sum((e - mean) ** 2 for e in energies) / len(energies)
    if variance == 0:
        return math.nan
    increments = sum((b - a) ** 2 for a, b in zip(energies, energies[1:]))
    return (increments / (len(energies) - 1)) / variance


def oscillator_demo() -> None:
    sigma = 0.1
    print("Oscillator: sigma=0.1, initial (q,p)=(0.1,0)")
    for epsilon in (0.1, 0.25):
        q, p = 0.1, 0.0
        print(f"  epsilon={epsilon:.2f}, trace={2-(epsilon/sigma)**2:.2f}")
        print(f"    step 0: q={q: .6f}, p={p: .6f}, H={energy(q,p,sigma):.6f}")
        for step in range(1, 4):
            q, p = leapfrog(q, p, epsilon, sigma)
            print(f"    step {step}: q={q: .6f}, p={p: .6f}, H={energy(q,p,sigma):.6f}")


def reference_demo() -> None:
    rng = random.Random(2026)
    count = 20_000
    # Independent canonical Gaussian states; these are not HMC iterations.
    energies = [0.5 * (rng.gauss(0, 1) ** 2 + rng.gauss(0, 1) ** 2)
                for _ in range(count)]
    print(f"IID Gaussian-state energy BFMI, n={count}: {empirical_bfmi(energies):.3f}")
    print(f"Four alternating energies BFMI: {empirical_bfmi([1, 2, 1, 2]):.1f}")

    # Exact independent draws from the prior-only funnel, d=3.
    tail = 0
    standardized_square_sum = 0.0
    for _ in range(count):
        v = rng.gauss(0, 3)
        z = [rng.gauss(0, 1) for _ in range(3)]
        x = [math.exp(v / 2) * zi for zi in z]
        if v < -3:
            tail += 1
        standardized_square_sum += sum(xi * xi / math.exp(v) for xi in x)
    exact = 0.5 * math.erfc(1 / math.sqrt(2))
    print(f"Funnel P(v < -3), exact: {exact:.6f}; IID estimate: {tail/count:.6f}")
    print(f"Funnel mean x_i^2 / exp(v), IID estimate: {standardized_square_sum/(3*count):.3f}")


def exact_flow_demo() -> None:
    """Contrast energy diagnostics for exact quarter and full oscillator turns.

    Record H just after refreshing momentum, before exact flow. Each experiment
    starts from the target. Integer quarter-turn maps avoid trigonometric
    roundoff turning the full-turn identity into unintended position drift.
    """
    count = 20_000
    print("Exact standard-normal HMC; stationary initial q, no integration error")
    for label, quarter_turn in (("pi/2", True), ("2*pi", False)):
        rng = random.Random(22026)
        q = rng.gauss(0, 1)
        initial_q = q
        energies = []
        positions = []
        for _ in range(count):
            p = rng.gauss(0, 1)
            initial_energy = energy(q, p, 1.0)
            energies.append(initial_energy)
            # Exact flow: quarter turn (q,p)->(p,-q); full turn is identity.
            q, p = (p, -q) if quarter_turn else (q, p)
            assert math.isclose(energy(q, p, 1.0), initial_energy)
            positions.append(q)
        mean_q = sum(positions) / count
        variance_q = sum((q - mean_q) ** 2 for q in positions) / count
        mean_energy = sum(energies) / count
        variance_energy = sum((e - mean_energy) ** 2 for e in energies) / count
        print(f"  time={label}, initial q={initial_q:.6f}, "
              f"E-BFMI={empirical_bfmi(energies):.3f}, "
              f"Var(E)={variance_energy:.3f}, Var(q)={variance_q:.3f}")
        if not quarter_turn:
            assert all(q == initial_q for q in positions)


if __name__ == "__main__":
    oscillator_demo()
    reference_demo()
    exact_flow_demo()
