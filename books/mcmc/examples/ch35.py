"""Chapter 35: seeded, bounded demonstrations of distributed combination.

The seeded demonstrations are direct draws from known laws, not a distributed
MCMC implementation. The final exact reference uses artificial unit-clock
costs for a finite chain; it does not measure hardware or use another RNG.
"""

from collections.abc import Sequence
from dataclasses import dataclass
from fractions import Fraction
import math
import random
import statistics


N = 20_000
MAX_CLOCK_HOLD = 16
MAX_CLOCK_TICKS = 256


@dataclass(frozen=True)
class ComputationClock:
    """An invariant phase reference, not a finite-deadline sampling guarantee."""

    phases: tuple[tuple[int, ...], ...]
    kernel: tuple[tuple[Fraction, ...], ...]
    stationary: tuple[Fraction, ...]
    embedded: tuple[Fraction, Fraction]
    mean_holds: tuple[Fraction, Fraction]
    mean_hold: Fraction
    reported: tuple[Fraction, Fraction]
    pending: tuple[Fraction, Fraction] | None = None


def _exact_vector(values: Sequence, name: str) -> tuple[Fraction, ...]:
    if not isinstance(values, Sequence) or any(
        isinstance(value, bool) or not isinstance(value, (int, Fraction))
        for value in values
    ):
        raise ValueError(f"{name} must contain exact integers or Fractions")
    return tuple(Fraction(value) for value in values)


def _clock_inputs(transition: Sequence, costs: Sequence):
    """Keep this teaching reference to two irreducible states and small costs."""
    if not isinstance(transition, Sequence) or len(transition) != 2:
        raise ValueError("transition must have exactly two rows")
    rows = tuple(_exact_vector(row, "transition row") for row in transition)
    if any(len(row) != 2 or min(row) < 0 or sum(row) != 1 for row in rows):
        raise ValueError("transition must be a two-state stochastic matrix")
    a, b = rows[0][1], rows[1][0]
    if a <= 0 or b <= 0:
        raise ValueError("both off-diagonal probabilities must be positive")
    if not isinstance(costs, Sequence) or len(costs) != 2 or any(
        type(cost) is not int or not 1 <= cost <= MAX_CLOCK_HOLD
        for cost in costs
    ):
        raise ValueError(f"use two integer costs between 1 and {MAX_CLOCK_HOLD}")
    return rows, tuple(costs), (b / (a + b), a / (a + b))


def _clock_projection(phases, probabilities, coordinate=0):
    return tuple(
        sum((mass for phase, mass in zip(phases, probabilities)
             if phase[coordinate] == value), Fraction(0))
        for value in (0, 1)
    )


def old_state_clock(transition: Sequence, holds: Sequence) -> ComputationClock:
    """Hold old x for holds[x] ticks, then install y drawn from P[x].

    Phase (x, r) reports x with r ticks of this job remaining. At r=1,
    the next tick completes the job and starts y with its full hold.
    The returned phase law is invariant; arbitrary integer holds can still
    make the phase chain periodic, so invariance alone is not convergence.
    """
    rows, holds, pi = _clock_inputs(transition, holds)
    phases = tuple((x, r) for x in (0, 1) for r in range(1, holds[x] + 1))
    indices = {phase: i for i, phase in enumerate(phases)}
    kernel = [[Fraction(0) for _ in phases] for _ in phases]
    for i, (x, r) in enumerate(phases):
        if r > 1:
            kernel[i][indices[(x, r - 1)]] = Fraction(1)
        else:
            for y in (0, 1):
                kernel[i][indices[(y, holds[y])]] = rows[x][y]
    means = tuple(Fraction(hold) for hold in holds)
    mean_hold = sum(pi[x] * means[x] for x in (0, 1))
    stationary = tuple(pi[x] / mean_hold for x, _ in phases)
    return ComputationClock(
        phases, tuple(tuple(row) for row in kernel), stationary, pi, means,
        mean_hold, _clock_projection(phases, stationary),
    )


def next_state_clock(transition: Sequence, costs: Sequence) -> ComputationClock:
    """Queue y from P[x], compute for costs[y] ticks, and keep reporting old x.

    Phase (x, y, r) includes the queued next *chain state*, not an unaccepted
    MH proposal. At r=1 the next tick installs y before starting its next job.
    Only positive-probability edges are included; there are at most 64 phases.
    """
    rows, costs, pi = _clock_inputs(transition, costs)
    phases = tuple(
        (x, y, r) for x in (0, 1) for y in (0, 1) if rows[x][y] > 0
        for r in range(1, costs[y] + 1)
    )
    indices = {phase: i for i, phase in enumerate(phases)}
    kernel = [[Fraction(0) for _ in phases] for _ in phases]
    for i, (x, y, r) in enumerate(phases):
        if r > 1:
            kernel[i][indices[(x, y, r - 1)]] = Fraction(1)
        else:
            for z in (0, 1):
                if rows[y][z] > 0:
                    kernel[i][indices[(y, z, costs[z])]] = rows[y][z]
    means = tuple(sum(rows[x][y] * costs[y] for y in (0, 1)) for x in (0, 1))
    mean_hold = sum(pi[x] * means[x] for x in (0, 1))
    stationary = tuple(pi[x] * rows[x][y] / mean_hold for x, y, _ in phases)
    return ComputationClock(
        phases, tuple(tuple(row) for row in kernel), stationary, pi, means,
        mean_hold, _clock_projection(phases, stationary),
        _clock_projection(phases, stationary, 1),
    )


def clock_distribution(
    reference: ComputationClock, initial: Sequence, ticks: int,
) -> tuple[Fraction, ...]:
    """Propagate an exact phase law through 0..256 completed unit-clock ticks."""
    if not isinstance(reference, ComputationClock):
        raise ValueError("reference must be a ComputationClock")
    if type(ticks) is not int or not 0 <= ticks <= MAX_CLOCK_TICKS:
        raise ValueError(f"ticks must be an integer between 0 and {MAX_CLOCK_TICKS}")
    law = _exact_vector(initial, "initial phase law")
    if len(law) != len(reference.phases) or min(law) < 0 or sum(law) != 1:
        raise ValueError("initial phase law must be a probability vector on the phases")
    for _ in range(ticks):
        law = tuple(
            sum((law[i] * reference.kernel[i][j] for i in range(len(law))), Fraction(0))
            for j in range(len(law))
        )
    return law


def computation_clock_example():
    """Print only the worked old-state example, leaving the changed task open."""
    transition = ((Fraction(4, 5), Fraction(1, 5)),
                  (Fraction(1, 5), Fraction(4, 5)))
    reference = old_state_clock(transition, (1, 3))
    initial = tuple(
        reference.embedded[x] if r == (1, 3)[x] else Fraction(0)
        for x, r in reference.phases
    )
    at_one = clock_distribution(reference, initial, 1)
    fresh_one = _clock_projection(reference.phases, at_one)[1]
    print("Unit computation clock: old state stays displayed until completion")
    print(f"  completion-index P(1)={reference.embedded[1]}; "
          f"stationary clock P(1)={reference.reported[1]}")
    print(f"  phases={reference.phases}; invariant phase masses={reference.stationary}")
    print(f"  mean hold={reference.mean_hold}; "
          f"fresh job-boundary start X0~pi gives P(display at tick 1 = 1)={fresh_one}")


def report(name, values, mean, variance, tail=None):
    print(f"{name}: analytic mean={mean:.4f}, empirical={statistics.mean(values):.4f}; "
          f"analytic variance={variance:.4f}, empirical={statistics.pvariance(values):.4f}")
    if tail is not None:
        print(f"  P(X>1): analytic={tail:.4f}, empirical={sum(x > 1 for x in values) / len(values):.4f}")


def gaussian_example():
    # Distinct, recorded teaching streams attached to shard IDs, not worker IDs.
    rng1, rng2 = random.Random(35_001), random.Random(35_002)
    x1 = [rng1.gauss(1.0, 2.0) for _ in range(N)]
    x2 = [rng2.gauss(3.0, 1.0) for _ in range(N)]
    consensus = [0.2 * a + 0.8 * b for a, b in zip(x1, x2)]
    average = [(a + b) / 2 for a, b in zip(x1, x2)]
    print("Two Gaussian shard distributions: N(1, 4) and N(3, 1)")
    report("Precision consensus", consensus, 2.6, 0.8)
    report("Arithmetic average", average, 2.0, 1.25)


def exponential_example():
    rng1, rng2 = random.Random(35_003), random.Random(35_004)
    # Each shard density is Exp(1); its normalized product is Exp(2).
    x1 = [rng1.expovariate(1.0) for _ in range(N)]
    x2 = [rng2.expovariate(1.0) for _ in range(N)]
    average = [(a + b) / 2 for a, b in zip(x1, x2)]
    print("Two Exp(1) shard distributions")
    # The target is analytic; the sample below represents the proposed consensus.
    print(f"Product target: analytic mean=0.5000, variance=0.2500, P(X>1)={math.exp(-2):.4f}")
    report("Equal-weight consensus", average, 1.0, 0.5, 3 * math.exp(-2))


def stale_gibbs_example():
    rho = 0.8
    rng_x, rng_y = random.Random(35_006), random.Random(35_007)
    # Start exactly at the intended bivariate normal target.
    old_x = [rng_x.gauss(0, 1) for _ in range(N)]
    old_y = [rho * x + math.sqrt(1 - rho * rho) * rng_y.gauss(0, 1)
             for x in old_x]
    next_x = [rho * y + math.sqrt(1 - rho * rho) * rng_x.gauss(0, 1)
              for y in old_y]
    next_y = [rho * x + math.sqrt(1 - rho * rho) * rng_y.gauss(0, 1)
              for x in old_x]
    covariance = statistics.mean(a * b for a, b in zip(next_x, next_y)) \
        - statistics.mean(next_x) * statistics.mean(next_y)
    print(f"Stale parallel Gibbs at rho={rho}: target covariance={rho:.3f}, "
          f"one-step analytic={rho ** 3:.3f}, empirical={covariance:.3f}")


def first_completion_example():
    # Direct Bernoulli draws, with deterministic value-dependent task durations.
    # Four logical streams are fixed before each batch; no timing or MCMC is used.
    streams = [random.Random(35_010 + worker) for worker in range(4)]
    first_total = 0
    full_total = 0
    for _ in range(N):
        batch = [int(stream.random() < 0.5) for stream in streams]
        # A zero finishes after one time unit; a one after two.
        first_total += int(all(batch))
        full_total += sum(batch)
    print(f"Four workers, value-dependent completion: "
          f"first-result analytic P(1)={1 / 16:.4f}, empirical={first_total / N:.4f}; "
          f"full-batch analytic mean={0.5:.4f}, empirical={full_total / (4 * N):.4f}")


if __name__ == "__main__":
    gaussian_example()
    exponential_example()
    stale_gibbs_example()
    first_completion_example()
    computation_clock_example()
