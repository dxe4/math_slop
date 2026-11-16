"""Chapter 04: reproducible sampling and stable arithmetic (standard library)."""

import math
import platform
import random


def beta21_inverse(rng: random.Random) -> float:
    """One Beta(2, 1) draw by the inverse CDF."""
    return math.sqrt(rng.random())


def beta21_rejection(
    rng: random.Random, max_proposals: int = 1_000_000
) -> tuple[float, int]:
    """Return (draw, proposals); raise if the safety bound is exhausted."""
    for proposals in range(1, max_proposals + 1):
        x = rng.random()
        if rng.random() < x:
            return x, proposals
    raise RuntimeError("proposal limit reached; no valid draw returned")


def logsumexp(values: list[float]) -> float:
    """Log of a sum of exponentials for finite or -inf inputs."""
    if not values or any(math.isnan(x) or x == math.inf for x in values):
        raise ValueError("expected a nonempty sequence without NaN or +inf")
    m = max(values)
    if m == -math.inf:
        return -math.inf
    return m + math.log(math.fsum(math.exp(x - m) for x in values))


def normalized_log_weights(values: list[float]) -> list[float]:
    """Normalize shifted weights without subtracting a rounded large log sum."""
    total = logsumexp(values)
    if total == -math.inf:
        raise ValueError("all weights have zero mass")
    maximum = max(values)
    shifted = [math.exp(x - maximum) for x in values]
    shifted_total = math.fsum(shifted)
    return [weight / shifted_total for weight in shifted]


def main() -> None:
    n = 20_000
    inverse_rng = random.Random(401)
    rejection_rng = random.Random(402)
    inverse_mean = math.fsum(beta21_inverse(inverse_rng) for _ in range(n)) / n
    draws = [beta21_rejection(rejection_rng) for _ in range(n)]
    rejection_mean = math.fsum(x for x, _ in draws) / n
    proposals = sum(k for _, k in draws)
    print(f"Python: {platform.python_version()}; seed IDs: 401, 402; n: {n}")
    print(f"Beta(2,1) inverse mean: {inverse_mean:.6f}")
    print(f"Beta(2,1) rejection mean: {rejection_mean:.6f}")
    print(f"Rejection acceptance fraction: {n / proposals:.6f}")
    print("Theory: mean = 0.666667; acceptance = 0.500000")

    log_weights = [-1000.0, -1001.0, -1002.0]
    print("Normalized log weights:",
          ", ".join(f"{p:.6f}" for p in normalized_log_weights(log_weights)))
    large_offset = normalized_log_weights([1e16, 1e16])
    assert large_offset == [0.5, 0.5]
    print("Equal weights at log offset 1e16:", large_offset)
    u = 1e-16
    print(f"Exponential quantile direct: {-math.log(1 - u) / 2:.17g}")
    print(f"Exponential quantile log1p: {-math.log1p(-u) / 2:.17g}")
    # random.Random.random() uses the 53-bit grid, including zero but excluding one.
    largest_u = 1.0 - 2.0**-53
    assert math.nextafter(1.0, 0.0) == largest_u
    largest_exponential = -math.log1p(-largest_u) / 2.0
    ideal_tail = math.exp(-2.0 * largest_exponential)
    assert math.isclose(ideal_tail, 2.0**-53, rel_tol=1e-14)
    print(f"Largest grid inverse Exp(rate=2) draw: {largest_exponential:.6f}")
    print(f"Ideal mass beyond that draw: {ideal_tail:.17g}")

    replay_rng = random.Random(403)
    saved = replay_rng.getstate()
    first = [replay_rng.random() for _ in range(3)]
    replay_rng.setstate(saved)
    second = [replay_rng.random() for _ in range(3)]
    assert first == second
    print("Generator-state replay matched:", first == second)


if __name__ == "__main__":
    main()
