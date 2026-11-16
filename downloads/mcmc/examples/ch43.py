"""Chapter 43: censoring, bounded augmentation, and epidemic path accounting.

Synthetic observations only. No external packages or data are required.
"""

from fractions import Fraction
import math
import random
import statistics


TIMES = (1.0, 2.0, 3.0, 4.0, 5.0)
EVENTS = (1, 0, 1, 0, 1)
PRIOR_SHAPE = 2.0
PRIOR_RATE = 1.0
SEED = 20260926


def log_target(z: float, shape: float, rate: float) -> float:
    """Log posterior density with respect to dz, including the Jacobian."""
    try:
        hazard = math.exp(z)
    except OverflowError:
        # An extreme positive log-rate has negligible target mass.
        return -math.inf
    return shape * z - rate * hazard


def sample_chain(seed: int, shape: float, rate: float, scale: float = 0.65,
                 warmup: int = 3000, draws: int = 15000) -> tuple[list[float], float]:
    rng = random.Random(seed)
    z = math.log(shape / rate)
    current = log_target(z, shape, rate)
    retained = []
    accepted = 0
    for iteration in range(warmup + draws):
        proposal = z + rng.gauss(0.0, scale)
        candidate = log_target(proposal, shape, rate)
        if math.log1p(-rng.random()) < candidate - current:
            z, current = proposal, candidate
            if iteration >= warmup:
                accepted += 1
        if iteration >= warmup:
            retained.append(math.exp(z))
    return retained, accepted / draws


def batch_mcse(values: list[float], batches: int = 30) -> float:
    """Elementary nonoverlapping batch-means MCSE, conditional on adequate mixing."""
    width = len(values) // batches
    means = [statistics.fmean(values[j * width:(j + 1) * width])
             for j in range(batches)]
    return statistics.stdev(means) / math.sqrt(batches)


def interval_time(lam: float, left: float, right: float, u: float) -> float:
    """Inverse CDF of Exp(lam) conditional on left < T <= right."""
    if not (math.isfinite(lam) and lam > 0 and
            0 <= left < right < math.inf and 0 <= u < 1):
        raise ValueError("Require positive rate, finite ordered bounds, and 0 <= u < 1")
    interval_mass = -math.expm1(-lam * (right - left))
    return left - math.log1p(-u * interval_mass) / lam


def interval_gibbs(seed: int, shape: float, rate: float,
                   left: float = 2.0, right: float = 4.0,
                   warmup: int = 2000, draws: int = 18000) -> list[float]:
    """Add one interval record to the existing Gamma(shape, rate) target."""
    rng = random.Random(seed)
    lam = shape / rate
    retained = []
    for iteration in range(warmup + draws):
        latent = interval_time(lam, left, right, rng.random())
        # random.gammavariate takes a scale, the reciprocal of our rate.
        lam = rng.gammavariate(shape + 1, 1 / (rate + latent))
        if iteration >= warmup:
            retained.append(lam)
    return retained


def interval_reference(shape: float, rate: float, left: float,
                       right: float, prediction_time: float) -> tuple[float, float]:
    """Analytic mean and predictive survival after one interval observation."""
    c = rate + left
    width = right - left
    log_ratio = math.log1p(width / c)
    normalizer = -math.expm1(-shape * log_ratio)
    mean = shape / c * (-math.expm1(-(shape + 1) * log_ratio)) / normalizer
    shifted = c + prediction_time
    survival = ((c / shifted) ** shape
                * -math.expm1(-shape * math.log1p(width / shifted)) / normalizer)
    return mean, survival


def sir_path(events: list[tuple[float, str]], horizon: float,
             population: int = 4) -> tuple[float, float, float]:
    """Aggregate path exposures A, B and product of parameter-free event factors.

    One initial infective, all remaining people susceptible; no tied events.
    Invalid paths raise ValueError (an MH implementation would reject them).
    """
    if population < 1 or not math.isfinite(horizon) or horizon < 0:
        raise ValueError("Require a positive population and finite nonnegative horizon")
    susceptible, infective = population - 1, 1
    previous = a = b = 0.0
    factor = 1.0
    for time, kind in events:
        if not previous < time <= horizon:
            raise ValueError("Events must be strictly ordered within the horizon")
        dt = time - previous
        a += susceptible * infective / population * dt
        b += infective * dt
        if infective == 0:
            raise ValueError("No event can follow extinction")
        if kind == "infection" and susceptible > 0:
            factor *= susceptible * infective / population
            susceptible -= 1
            infective += 1
        elif kind == "recovery":
            factor *= infective
            infective -= 1
        else:
            raise ValueError("Unknown event or infection with no susceptible person")
        previous = time
    a += susceptible * infective / population * (horizon - previous)
    b += infective * (horizon - previous)
    return a, b, factor


def censoring_equivalence_reference(rate: int, steps: int = 1) -> dict[str, Fraction]:
    """Exact tails at t=steps*log(2) for the stipulated censoring family.

    This finite Fraction reference supports integer rates 1, 3, 4 and steps
    0..16. Rate 2 is a valid model, whose logarithmic tail is derived in prose.
    *_joint_tail fields include the label probability. The residual field
    instead conditions on an already censored (Y=y, delta=0) record.
    """
    if isinstance(rate, bool) or not isinstance(rate, int) or rate not in (1, 3, 4):
        raise ValueError("This exact reference supports integer rates 1, 3, 4; "
                         "rate 2 is a valid model with a logarithmic tail")
    if isinstance(steps, bool) or not isinstance(steps, int) or not 0 <= steps <= 16:
        raise ValueError("Use an integer dyadic-time index from 0 to 16")
    q = Fraction(1, 2 ** steps)
    branch = q ** 2 / 2
    # X=exp(-Y) has density 2x. The D=0 branch factor cancels its factor 2.
    # Integrate x**(1-rate) from q to 1 without using the marginal closed form.
    power = 2 - rate
    integral = (1 - q ** power) / power
    extra = q ** rate * integral
    return {"recorded_event_joint_tail": branch,
            "recorded_censor_joint_tail": branch,
            "recorded_survival": 2 * branch,
            "latent_event_joint_tail": branch,
            "latent_censor_joint_tail": branch + extra,
            "latent_survival": 2 * branch + extra,
            "censored_residual_survival": q ** rate}


def observational_equivalence_example() -> None:
    """Append only the main r=1 versus r=3 exact comparison, without sampling."""
    print("\nExact observational equivalence: only (Y,delta) recorded")
    print("rate r   Pr(Y>log(2))   Pr(T>log(2))")
    for rate in (1, 3):
        reference = censoring_equivalence_reference(rate)
        print(f"{rate:6d}   {str(reference['recorded_survival']):>12}   "
              f"{str(reference['latent_survival']):>12}")
    print("Recorded laws agree; latent lifetime laws differ. This comparison uses exact branch integrals; no additional sampler is run.")


def main() -> None:
    events = sum(EVENTS)
    exposure = sum(TIMES)
    shape = PRIOR_SHAPE + events
    rate = PRIOR_RATE + exposure
    draws, acceptance = sample_chain(SEED, shape, rate)
    survival = [math.exp(-2.0 * lam) for lam in draws]
    exact_rate = shape / rate
    exact_survival = (rate / (rate + 2.0)) ** shape
    wrong_rate = shape / (PRIOR_RATE + sum(t for t, d in zip(TIMES, EVENTS) if d))

    print(f"events={events}, total observed exposure={exposure:.1f}")
    print(f"posterior Gamma(shape={shape:.0f}, rate={rate:.0f})")
    print(f"acceptance after warmup={acceptance:.3f}")
    print(f"mean hazard: MH {statistics.fmean(draws):.4f} "
          f"(batch MCSE {batch_mcse(draws):.4f}); exact {exact_rate:.4f}")
    print(f"Pr(T>2 | data): MH {statistics.fmean(survival):.4f} "
          f"(batch MCSE {batch_mcse(survival):.4f}); exact {exact_survival:.4f}")
    print(f"incorrect mean hazard if censored records are dropped: {wrong_rate:.4f}")

    augmented = interval_gibbs(SEED + 1, shape, rate)
    augmented_survival = [math.exp(-2 * lam) for lam in augmented]
    exact_mean, exact_prediction = interval_reference(shape, rate, 2.0, 4.0, 2.0)
    print("add a sixth device with event in (2,4]:")
    print(f"  mean hazard: Gibbs {statistics.fmean(augmented):.4f} "
          f"(batch MCSE {batch_mcse(augmented):.4f}); exact {exact_mean:.4f}")
    print(f"  Pr(T>2 | data): Gibbs {statistics.fmean(augmented_survival):.4f} "
          f"(batch MCSE {batch_mcse(augmented_survival):.4f}); exact {exact_prediction:.4f}")

    # Inverse-CDF checks include a nearly uniform conditional density.
    for lam in (1e-12, 0.3, 100.0):
        for u in (0.001, 0.5, 0.999):
            time = interval_time(lam, 2.0, 4.0, u)
            recovered = -math.expm1(-lam * (time - 2)) / -math.expm1(-2 * lam)
            assert 2.0 <= time <= 4.0
            assert math.isclose(recovered, u, abs_tol=1e-12)
    path = [(1., "infection"), (2., "recovery"), (3., "infection"),
            (4., "recovery"), (5., "recovery")]
    shifted = path[:2] + [(3.5, "infection")] + path[3:]
    assert sir_path(path, 5.) == (3., 7., 1.5)
    assert sir_path(shifted, 5.) == (3., 6.5, 1.5)
    assert sir_path(path[:1], 2.) == (1.75, 3., 0.75)  # Terminal waiting time.
    try:
        sir_path([(1., "recovery"), (2., "infection")], 3.)
    except ValueError:
        pass
    else:
        raise AssertionError("An infection after extinction must be impossible")
    print("SIR path checks: original (A,B,factor)=(3,7,1.5); shifted=(3,6.5,1.5)")
    print("inverse-CDF, terminal exposure, and impossible-path checks passed")


if __name__ == "__main__":
    main()
    observational_equivalence_example()
