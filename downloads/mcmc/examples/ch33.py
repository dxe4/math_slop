"""Gaussian zig-zag by inversion and thinning; python examples/ch33.py.

Both clocks simulate the same process without a numerical time step.
Floating-point arithmetic still approximates clocks and path integrals.
Event averages deliberately target a different distribution from time averages.
"""
from dataclasses import dataclass
import math
import random
import statistics


@dataclass(frozen=True)
class Segment:
    start: float
    position: float
    velocity: int
    duration: float


def event_time(position: float, velocity: int, exponential: float) -> float:
    """Invert the integrated hazard [velocity * position + t]_+."""
    if not math.isfinite(position) or velocity not in (-1, 1):
        raise ValueError("position must be finite and velocity must be -1 or 1")
    if not math.isfinite(exponential) or exponential <= 0.0:
        raise ValueError("exponential threshold must be finite and positive")
    a = velocity * position
    root_exponential = math.sqrt(2.0) * math.sqrt(exponential)
    if a >= 0.0:
        # Neither a*a nor 2*exponential nor root+a needs to be representable.
        root = math.hypot(a, root_exponential)
        waiting = exponential / (0.5 * root + 0.5 * a)
    else:
        waiting = -a + root_exponential
    if not math.isfinite(waiting) or waiting <= 0.0:
        raise ArithmeticError("event time is not representable at this precision")
    return waiting


def integrals(x: float, v: int, duration: float) -> tuple[float, float]:
    """Exact polynomial integrals, written without cancelling signed terms."""
    midpoint = x + v * duration / 2.0
    first = duration * midpoint
    second = duration * (midpoint * midpoint + (v * duration)**2 / 12.0)
    return first, second


def positive_exponential(rng: random.Random) -> float:
    # random() is in [0, 1); exclude its possible zero for forward progress.
    for _ in range(100):
        value = -math.log1p(-rng.random())
        if value > 0.0:
            return value
    raise RuntimeError("random generator repeatedly returned zero")


def simulate(horizon: float, seed: int) -> tuple[list[Segment], list[float]]:
    if not math.isfinite(horizon) or horizon <= 0.0:
        raise ValueError("horizon must be finite and positive")
    rng = random.Random(seed)
    x, v, time = 0.0, 1, 0.0
    segments: list[Segment] = []
    events: list[float] = []
    for _ in range(1_000_000):
        exponential = positive_exponential(rng)
        waiting = event_time(x, v, exponential)
        remaining = horizon - time
        duration = min(waiting, remaining)
        if time + duration <= time:
            raise ArithmeticError("clock cannot advance at this precision")
        segments.append(Segment(time, x, v, duration))
        x += v * duration
        if waiting >= remaining:
            return segments, events  # Include the last, truncated segment.
        time += duration
        events.append(x)
        v = -v
    raise RuntimeError("defensive event cap reached")


def simulate_thinned(horizon: float, seed: int, interval: float = 1.0
                     ) -> tuple[list[Segment], list[float], int, int]:
    """Gaussian zig-zag with a proved bound valid until each interval expiry.

    Return segments, accepted event positions, candidate count, and bound count.
    A rejection or expiry still records and advances a full flight segment.
    """
    if not math.isfinite(horizon) or horizon <= 0.0:
        raise ValueError("horizon must be finite and positive")
    if not math.isfinite(interval) or interval <= 0.0:
        raise ValueError("interval must be finite and positive")
    rng = random.Random(seed)
    x, v, time = 0.0, 1, 0.0
    segments: list[Segment] = []
    events: list[float] = []
    candidates = 0
    for bounds in range(1, 1_000_001):
        remaining = horizon - time
        expiry = min(interval, remaining)
        a = v * x
        # [a+s]_+ is nondecreasing on every straight Gaussian flight.
        bound = max(0.0, a + expiry)
        waiting = positive_exponential(rng) / bound if bound > 0.0 else math.inf
        duration = min(waiting, expiry)
        if time + duration <= time:
            raise ArithmeticError("clock cannot advance at this precision")
        segments.append(Segment(time, x, v, duration))
        x += v * duration
        if duration >= remaining:
            return segments, events, candidates, bounds
        time += duration
        if waiting < expiry:
            candidates += 1
            # Compute from the same flight expression used to prove the bound.
            true_rate = max(0.0, a + duration)
            if true_rate > bound:
                raise ArithmeticError("Gaussian rate exceeded its interval bound")
            if rng.random() < true_rate / bound:
                events.append(x)
                v = -v
    raise RuntimeError("defensive thinning step cap reached")


def batch_second_moments(segments: list[Segment], horizon: float,
                         batches: int = 20) -> list[float]:
    """Split every intersected segment at equal physical-time boundaries."""
    if not math.isfinite(horizon) or horizon <= 0.0:
        raise ValueError("horizon must be finite and positive")
    if not isinstance(batches, int) or isinstance(batches, bool) or batches <= 0:
        raise ValueError("batches must be a positive integer")
    width = horizon / batches
    totals = [0.0] * batches
    for segment in segments:
        end = segment.start + segment.duration
        first_batch = min(int(segment.start / width), batches - 1)
        last_batch = min(int(end / width), batches - 1)
        for batch in range(first_batch, last_batch + 1):
            left = max(segment.start, batch * width)
            right = min(end, (batch + 1) * width)
            if right > left:
                x_left = segment.position + segment.velocity * (left - segment.start)
                totals[batch] += integrals(x_left, segment.velocity, right - left)[1]
    return [total / width for total in totals]


def check_calculations() -> None:
    """Deterministic checks of hazards, integrals, and the worked BPS bounce."""
    for a in (-3.0, -0.1, 0.0, 1.0, 20.0):
        for threshold in (0.01, 1.0, 2.0):
            waiting = event_time(a, 1, threshold)
            if a >= 0.0:
                hazard = a * waiting + waiting * waiting / 2.0
            else:
                hazard = max(0.0, a + waiting)**2 / 2.0
            assert math.isclose(hazard, threshold, rel_tol=1e-12, abs_tol=1e-14)
    assert math.isclose(event_time(1e200, 1, 1.0), 1e-200, rel_tol=1e-14)
    assert math.isfinite(event_time(0.0, 1, 1e308))
    # A flight from -2 to +2 integrates x to zero and x^2 to 16/3.
    first, second = integrals(-2.0, 1, 4.0)
    assert first == 0.0
    assert math.isclose(second, 16.0 / 3.0)

    velocity = (1.0 / math.sqrt(2.0),) * 2
    waiting = event_time(velocity[0], 1, 1.0)
    position = (1.0 + waiting * velocity[0], waiting * velocity[1])
    dot = sum(x * v for x, v in zip(position, velocity))
    squared_norm = sum(x*x for x in position)
    reflected = tuple(v - 2.0 * dot * x / squared_norm
                      for x, v in zip(position, velocity))
    assert math.isclose(sum(v*v for v in reflected), 1.0, rel_tol=1e-14)
    assert math.isclose(sum(x*v for x, v in zip(position, reflected)), -dot)
    before = position[0] * velocity[1] - position[1] * velocity[0]
    after = position[0] * reflected[1] - position[1] * reflected[0]
    assert math.isclose(before, after, rel_tol=1e-14)
    print(f"BPS event x={position}; reflected v={reflected}")
    print(f"No-refresh forbidden disk target mass: {1.0 - math.exp(-0.5):.8f}")
    print("Deterministic clock, integral, and reflection checks passed.")


def main() -> None:
    check_calculations()
    print("Target time moments: E[X]=0, E[X^2]=1; event E[X^2]=2")
    print("T       seed  events  time mean  time X^2  event X^2  batch SE(X^2)")
    for horizon in (2_000.0, 20_000.0):
        for seed in (3301, 3302, 3303):
            segments, events = simulate(horizon, seed)
            values = [integrals(s.position, s.velocity, s.duration) for s in segments]
            mean = math.fsum(value[0] for value in values) / horizon
            second = math.fsum(value[1] for value in values) / horizon
            batches = batch_second_moments(segments, horizon)
            batch_se = statistics.stdev(batches) / math.sqrt(len(batches))
            print(f"{horizon:7.0f} {seed:5d} {len(events):7d} {mean:10.5f} "
                  f"{second:9.5f} {statistics.mean(x*x for x in events):10.5f} "
                  f"{batch_se:14.5f}")
    print("Batch SE is an illustrative large-batch approximation, not a convergence test.")
    print("\nThinning at T=20,000; target event rate=1/sqrt(2*pi)=0.39894")
    print("interval  events  candidates  bounds  time X^2  events/T")
    for interval in (0.5, 1.0, 2.0):
        horizon = 20_000.0
        segments, events, candidates, bounds = simulate_thinned(
            horizon, 3310, interval)
        second = math.fsum(integrals(s.position, s.velocity, s.duration)[1]
                           for s in segments) / horizon
        total_duration = math.fsum(s.duration for s in segments)
        assert math.isclose(total_duration, horizon, rel_tol=1e-11)
        batches = batch_second_moments(segments, horizon)
        assert math.isclose(statistics.mean(batches), second, rel_tol=1e-10)
        assert candidates >= len(events)
        print(f"{interval:8.1f} {len(events):7d} {candidates:11d} {bounds:7d} "
              f"{second:9.5f} {len(events)/horizon:9.5f}")
    print("Interval length changes thinning work, not the ideal process law.")


if __name__ == "__main__":
    main()
