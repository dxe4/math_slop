"""Chapter 28: filtering, static annealed SMC, particle Gibbs audits, and PMMH.

Run: python examples/ch28.py
Standard library only. The binary filter integrates out ancestor identities:
resample-then-propagate is one Bernoulli draw per child. This gives the same
state-cloud/likelihood law as multinomial bootstrap filtering, but no paths.
The separate neutral-resampling fixture below explicitly records ancestry.
"""

from fractions import Fraction
from itertools import product
from math import comb, exp, log, log1p, sqrt
from random import Random
from statistics import mean, stdev, variance
from time import perf_counter


Transition = tuple[tuple[float, float], tuple[float, float]]


def emission(state: int, observation: int) -> float:
    return 0.8 if state == observation else 0.2


def transition(theta: float) -> Transition:
    return ((theta, 1.0 - theta), (1.0 - theta, theta))


def forward(observations: tuple[int, ...], matrix: Transition) -> tuple[float, float]:
    """Return log evidence and final filtering probability of state one."""
    p_one = 0.5
    log_z = 0.0
    for t, observation in enumerate(observations):
        if t:
            p_one = (1.0 - p_one) * matrix[0][1] + p_one * matrix[1][1]
        zero = (1.0 - p_one) * emission(0, observation)
        one = p_one * emission(1, observation)
        normalizer = zero + one
        log_z += log(normalizer)
        p_one = one / normalizer
    return log_z, p_one


def particle_loglik(
    observations: tuple[int, ...], matrix: Transition, particles: int, rng: Random
) -> float:
    """Bootstrap-filter log likelihood estimate with collapsed parent draws."""
    if particles < 1:
        raise ValueError("particles must be positive")
    p_one = 0.5
    log_z = 0.0
    for t, observation in enumerate(observations):
        if t:
            p_one = (1.0 - p_one) * matrix[0][1] + p_one * matrix[1][1]
        ones = sum(rng.random() < p_one for _ in range(particles))
        w_one = ones * emission(1, observation)
        w_zero = (particles - ones) * emission(0, observation)
        total = w_zero + w_one
        log_z += log(total / particles)
        p_one = w_one / total
    return log_z


def annealed_smc(
    particles: int, rng: Random, schedule: tuple[float, ...] = (0.0, 0.5, 1.0),
) -> tuple[float, float]:
    """Static uniform binary prior, likelihood (1/16, 9/16), lazy flip MH.

    Return evidence estimate and final empirical state-one probability.
    Every stage weights the OLD population, then resamples and mutates.
    """
    if particles < 1:
        raise ValueError("particles must be positive")
    if (len(schedule) < 2 or schedule[0] != 0.0 or schedule[-1] != 1.0
            or any(not a < b for a, b in zip(schedule, schedule[1:]))):
        raise ValueError("schedule must increase strictly from zero to one")
    states = [int(rng.random() < 0.5) for _ in range(particles)]
    log_likelihood = (log(1.0 / 16.0), log(9.0 / 16.0))
    log_z = 0.0
    for previous, beta in zip(schedule, schedule[1:]):
        log_weights = [(beta - previous) * log_likelihood[x] for x in states]
        largest = max(log_weights)
        weights = [exp(value - largest) for value in log_weights]
        log_z += largest + log(sum(weights) / particles)
        states = rng.choices(states, weights=weights, k=particles)
        for i, state in enumerate(states):
            if rng.random() < 0.5:
                log_ratio = beta * (log_likelihood[1 - state] - log_likelihood[state])
                if log(1.0 - rng.random()) < log_ratio:
                    states[i] = 1 - state
    return exp(log_z), sum(states) / particles


def binomial_mass(count: int, particles: int, probability: Fraction) -> Fraction:
    return (comb(particles, count) * probability**count
            * (1 - probability)**(particles - count))


def _neutral_inputs(
    particles: int, rounds: int, refresh: Fraction, probability: Fraction,
    initial_count: int | None,
) -> None:
    """Validate the exact reference's inputs without silently rounding floats."""
    if isinstance(particles, bool) or not isinstance(particles, int) or particles < 1:
        raise ValueError("particles must be a positive integer")
    if isinstance(rounds, bool) or not isinstance(rounds, int) or rounds < 0:
        raise ValueError("rounds must be a nonnegative integer")
    for name, value in (("refresh", refresh), ("probability", probability)):
        if isinstance(value, bool) or not isinstance(value, (int, Fraction)):
            raise ValueError(f"{name} must be an exact integer or Fraction in [0,1]")
        if not 0 <= value <= 1:
            raise ValueError(f"{name} must be in [0,1]")
    if initial_count is not None and (
        isinstance(initial_count, bool) or not isinstance(initial_count, int)
        or not 0 <= initial_count <= particles
    ):
        raise ValueError("initial_count must be an integer from zero to particles")


def neutral_count_law(
    particles: int, rounds: int, refresh: Fraction = Fraction(0),
    probability: Fraction = Fraction(1, 2), initial_count: int | None = None,
) -> tuple[Fraction, ...]:
    """Exact law of K_g after g completed resampling-then-refresh rounds.

    Generation zero has M iid Bernoulli(probability) states, unless conditioning
    on initial_count. Every child samples a uniform parent, then independently
    refreshes to Bernoulli(probability) with probability refresh. Thus the
    transition from count k is Binomial(M, (1-refresh)*k/M + refresh*probability).
    Constant potentials make evidence exactly one and weight ESS exactly M.

    This finite oracle costs O(rounds * particles**2) rational operations; use
    small populations for full laws and neutral_moments for larger comparisons.
    """
    _neutral_inputs(particles, rounds, refresh, probability, initial_count)
    refresh, probability = Fraction(refresh), Fraction(probability)
    law = (tuple(binomial_mass(k, particles, probability)
                 for k in range(particles + 1)) if initial_count is None
           else tuple(Fraction(k == initial_count) for k in range(particles + 1)))
    transition = tuple(
        tuple(binomial_mass(j, particles,
                            (1 - refresh) * Fraction(k, particles) + refresh * probability)
              for j in range(particles + 1))
        for k in range(particles + 1)
    )
    for _ in range(rounds):
        law = tuple(sum((law[k] * transition[k][j] for k in range(particles + 1)),
                        Fraction(0)) for j in range(particles + 1))
    return law


def neutral_moments(
    particles: int, rounds: int, refresh: Fraction = Fraction(0),
    probability: Fraction = Fraction(1, 2), initial_count: int | None = None,
) -> tuple[Fraction, Fraction]:
    """Exact (mean, variance) of Q_g, conditional or over iid initial clouds.

    These are reference moments over repeated particle systems, not an error
    estimate inferred from one genealogy. The target of refresh is probability.
    """
    _neutral_inputs(particles, rounds, refresh, probability, initial_count)
    refresh, probability = Fraction(refresh), Fraction(probability)
    mu = probability if initial_count is None else Fraction(initial_count, particles)
    var = probability * (1 - probability) / particles if initial_count is None else Fraction(0)
    contraction = (1 - refresh)**2 * Fraction(particles - 1, particles)
    for _ in range(rounds):
        mu = (1 - refresh) * mu + refresh * probability
        var = mu * (1 - mu) / particles + contraction * var
    return mu, var


# A generation contains states, initial-root labels, immediate parent slots,
# and refresh flags. Initial parent slots are -1; roots are zero-based labels.
NeutralGeneration = tuple[tuple[int, ...], tuple[int, ...], tuple[int, ...], tuple[bool, ...]]


def neutral_resampling_trace(
    particles: int, rounds: int, rng: Random, refresh: Fraction = Fraction(0),
    probability: Fraction = Fraction(1, 2),
) -> tuple[NeutralGeneration, ...]:
    """Draw one actual genealogy, keeping historical root labels after refresh.

    Generation zero is iid; each later generation first chooses M independent
    uniform parent slots, then applies independent refresh decisions and draws.
    A refreshed value is new, but its stored historical parent is unchanged.
    Separate derived streams keep the same initial cloud and actual ancestry
    when comparing refresh settings with the same supplied seed.
    """
    _neutral_inputs(particles, rounds, refresh, probability, None)
    refresh, probability = float(refresh), float(probability)
    initial_rng, parent_rng, refresh_rng, value_rng = (
        Random(rng.getrandbits(64)) for _ in range(4))
    states = tuple(int(initial_rng.random() < probability) for _ in range(particles))
    roots = tuple(range(particles))
    trace = [(states, roots, (-1,) * particles, (False,) * particles)]
    for _ in range(rounds):
        parents = tuple(parent_rng.randrange(particles) for _ in range(particles))
        refreshed = tuple(refresh_rng.random() < refresh for _ in range(particles))
        new_values = tuple(int(value_rng.random() < probability) for _ in range(particles))
        states = tuple(new if fresh else states[parent]
                       for parent, fresh, new in zip(parents, refreshed, new_values))
        roots = tuple(roots[parent] for parent in parents)
        trace.append((states, roots, parents, refreshed))
    return tuple(trace)


def neutral_resampling_example() -> None:
    """Contrast evidence, weight ESS, actual roots, and exact estimator variance."""
    print("Neutral resampling: generation zero is iid; g counts completed copying rounds.")
    for refresh in (Fraction(0), Fraction(1, 10), Fraction(1, 2), Fraction(1)):
        mu, var = neutral_moments(100, 99, refresh)
        print(f"  M=100, g=99, refresh={refresh}: E[Q_g]={mu}; "
              f"exact SD={sqrt(var):.6f}; evidence=1; weight ESS=100")
    for refresh in (Fraction(0), Fraction(1)):
        trace = neutral_resampling_trace(20, 30, Random(2814), refresh)
        states, roots, _, _ = trace[-1]
        _, unconditional_var = neutral_moments(20, 30, refresh)
        conditional_mu, conditional_var = neutral_moments(
            20, 30, refresh, initial_count=sum(trace[0][0]))
        print(f"  One M=20,g=30 trace, refresh={refresh}: Q_g={sum(states)/20:.3f}; "
              f"actual surviving initial roots={len(set(roots))}; "
              f"weight ESS=20; unconditional variance={float(unconditional_var):.6f}; "
              f"given this initial cloud mean={float(conditional_mu):.6f}, "
              f"variance={float(conditional_var):.6f}")
    law = neutral_count_law(4, 3, Fraction(1, 10), initial_count=1)
    mu = sum((Fraction(k, 4) * mass for k, mass in enumerate(law)), Fraction(0))
    var = sum(((Fraction(k, 4) - mu)**2 * mass for k, mass in enumerate(law)), Fraction(0))
    assert sum(law) == 1
    assert (mu, var) == neutral_moments(4, 3, Fraction(1, 10), initial_count=1)
    print("  Exact count-law check: M=4,g=3,refresh=1/10,initial count=1 agrees with moments.")
    print("  Refresh regenerates current outcomes; copied root labels do not recover lost paths.")


def binomial_pmmh_fixture(
    particles: int, positive_only: bool = False,
) -> tuple[tuple[tuple[int, int], ...], tuple[tuple[Fraction, ...], ...], tuple[Fraction, ...]]:
    """Exact two-parameter PMMH matrix with Binomial likelihood estimates.

    The prior and independent parameter proposal are uniform on {0,1}, with
    likelihoods 1/4 and 3/4. Every current estimate is positive and is retained
    on rejection. positive_only conditions EACH proposed estimator on K>0;
    this deliberate mistake changes the target. Initialization alone does not.
    """
    if (isinstance(particles, bool) or not isinstance(particles, int)
            or not 1 <= particles <= 32):
        raise ValueError("Require an integer particle count from 1 to 32 for this exact audit")
    if not isinstance(positive_only, bool):
        raise ValueError("positive_only must be a Boolean")
    likelihoods = (Fraction(1, 4), Fraction(3, 4))
    generator = [[binomial_mass(k, particles, p) for k in range(particles + 1)]
                 for p in likelihoods]
    if positive_only:
        for row in generator:
            survival = 1 - row[0]
            row[0] = Fraction(0)
            for k in range(1, particles + 1):
                row[k] /= survival
    states = tuple((theta, k) for theta in (0, 1) for k in range(1, particles + 1))
    index = {state: i for i, state in enumerate(states)}
    weights = [Fraction(k, 2 * particles) * generator[theta][k] for theta, k in states]
    total = sum(weights, Fraction(0))
    target = tuple(weight / total for weight in weights)
    matrix = [[Fraction(0) for _ in states] for _ in states]
    for i, (_, current_count) in enumerate(states):
        for theta in (0, 1):
            for proposed_count in range(particles + 1):
                proposal = generator[theta][proposed_count] / 2
                acceptance = min(Fraction(1), Fraction(proposed_count, current_count))
                if proposed_count:
                    matrix[i][index[(theta, proposed_count)]] += proposal * acceptance
                matrix[i][i] += proposal * (1 - acceptance)
    return states, tuple(tuple(row) for row in matrix), target


def positive_retry_example() -> None:
    """Check altered targets exactly, separately from the positive-emission HMM."""
    print("Positive-only proposal retries: exact Bernoulli observation fixture")
    print("  Prior(theta=1)=1/2; likelihoods=(1/4,3/4); true posterior(theta=1)=3/4.")
    for particles, wrong_mass in ((1, Fraction(1, 2)),
                                  (2, Fraction(7, 12)), (4, Fraction(35, 52))):
        answers = []
        for positive_only in (False, True):
            states, matrix, target = binomial_pmmh_fixture(particles, positive_only)
            for i, row in enumerate(matrix):
                assert sum(row) == 1
                for j in range(len(states)):
                    assert target[i] * row[j] == target[j] * matrix[j][i]
            answers.append(sum((mass for (theta, _), mass in zip(states, target)
                                if theta == 1), Fraction(0)))
        assert answers == [Fraction(3, 4), wrong_mass]
        zero_probabilities = tuple((1 - p)**particles
                                   for p in (Fraction(1, 4), Fraction(3, 4)))
        print(f"  M={particles}: ordinary target={answers[0]}; retry target={answers[1]}; "
              f"zero-estimate probabilities={zero_probabilities}")
    print("  At every finite M, E[log(Zhat)]=-infinity because P(Zhat=0)>0.")
    print("  Raw estimates remain bounded and unbiased. Positive-only reporting changes their mean.")
    print("  Repeating only initialization until positive does not change later proposal laws.")


def exact_population_checks() -> tuple[Fraction, Fraction, Fraction]:
    """Enumerate count transitions for M=4 using rational arithmetic.

    Check both E[Zhat] and the stronger unnormalized identity for static SMC.
    Also expose the bias of the normalized bootstrap filter estimate.
    """
    particles = 4
    evidence = normalized_one = Fraction(0)
    for first in range(particles + 1):
        initial_mass = binomial_mass(first, particles, Fraction(1, 2))
        first_sum = Fraction(particles + 3 * first, 5)
        first_increment = first_sum / particles
        filtered_one = Fraction(4 * first, 5) / first_sum
        predicted_one = (1 - filtered_one) / 10 + filtered_one * Fraction(4, 5)
        for second in range(particles + 1):
            mass = initial_mass * binomial_mass(second, particles, predicted_one)
            second_sum = Fraction(4 * particles - 3 * second, 5)
            evidence += mass * first_increment * second_sum / particles
            normalized_one += mass * Fraction(second, 5) / second_sum
    assert evidence == Fraction(101, 500)

    # ordinary_mass tracks P(count); tilted_mass tracks E[Zhat * 1_count].
    ordinary_mass = [binomial_mass(n, particles, Fraction(1, 2))
                     for n in range(particles + 1)]
    tilted_mass = ordinary_mass.copy()
    for target_odds in (3, 9):
        next_mass = [Fraction(0) for _ in ordinary_mass]
        next_tilted = [Fraction(0) for _ in ordinary_mass]
        for count in range(particles + 1):
            increment = Fraction(particles + 2 * count, 4 * particles)
            parent_one = Fraction(3 * count, particles + 2 * count)
            child_one = ((1 - parent_one) / 2
                         + parent_one * (1 - Fraction(1, 2 * target_odds)))
            for next_count in range(particles + 1):
                probability = binomial_mass(next_count, particles, child_one)
                next_mass[next_count] += ordinary_mass[count] * probability
                next_tilted[next_count] += tilted_mass[count] * increment * probability
        ordinary_mass, tilted_mass = next_mass, next_tilted
    static_evidence = sum(tilted_mass, Fraction(0))
    unnormalized_one = sum((mass * Fraction(n, particles)
                           for n, mass in enumerate(tilted_mass)), Fraction(0))
    assert sum(ordinary_mass) == 1
    assert static_evidence == Fraction(5, 16)
    assert unnormalized_one == Fraction(9, 32)
    wrong_no_resampling = sum(
        binomial_mass(n, particles, Fraction(1, 2))
        * Fraction(particles + 2 * n, 4 * particles)**2
        for n in range(particles + 1)
    )
    assert wrong_no_resampling == Fraction(17, 64)
    return evidence, normalized_one, static_evidence


def exact_particle_gibbs_check(ancestor_sampling: bool) -> Fraction:
    """Enumerate every M=2, T=2 conditional-filter transition.

    The four retained paths form a small Markov chain. Check row sums and
    smoothing invariance exactly, including the PGAS ancestor modification.
    """
    paths = list(product((0, 1), repeat=2))
    matrix = ((Fraction(9, 10), Fraction(1, 10)),
              (Fraction(1, 5), Fraction(4, 5)))

    def likelihood(state: int, observation: int) -> Fraction:
        return Fraction(4 if state == observation else 1, 5)

    masses = [Fraction(1, 2) * likelihood(a, 1) * matrix[a][b] * likelihood(b, 0)
              for a, b in paths]
    posterior = [mass / sum(masses) for mass in masses]
    kernel = []
    for reference in paths:
        row = [Fraction(0) for _ in paths]
        for free_initial in (0, 1):
            initial = (free_initial, reference[0])
            initial_weights = [likelihood(state, 1) for state in initial]
            normalized = [weight / sum(initial_weights) for weight in initial_weights]
            if ancestor_sampling:
                connection = [normalized[i] * matrix[initial[i]][reference[1]]
                              for i in (0, 1)]
                retained_parent = [weight / sum(connection) for weight in connection]
            else:
                retained_parent = [Fraction(0), Fraction(1)]
            for parent, free_next, retained in product((0, 1), repeat=3):
                probability = (Fraction(1, 2) * normalized[parent]
                               * matrix[initial[parent]][free_next]
                               * retained_parent[retained])
                next_paths = ((initial[parent], free_next),
                              (initial[retained], reference[1]))
                terminal = [likelihood(path[1], 0) for path in next_paths]
                for label in (0, 1):
                    row[paths.index(next_paths[label])] += (
                        probability * terminal[label] / sum(terminal)
                    )
        assert sum(row) == 1
        kernel.append(row)
    residual = max(abs(sum(posterior[i] * kernel[i][j] for i in range(4))
                       - posterior[j]) for j in range(4))
    assert residual == 0
    return residual


def logistic(z: float) -> float:
    if z >= 0.0:
        return 1.0 / (1.0 + exp(-z))
    e = exp(z)
    return e / (1.0 + e)


def log_prior_in_logit(z: float) -> float:
    """Beta(2,2) prior times logit Jacobian, omitting log(6)."""
    log_theta = -log1p(exp(-z)) if z >= 0.0 else z - log1p(exp(z))
    log_complement = -z - log1p(exp(-z)) if z >= 0.0 else -log1p(exp(z))
    return 2.0 * (log_theta + log_complement)


def simulate(length: int, theta: float, rng: Random) -> tuple[int, ...]:
    state = int(rng.random() < 0.5)
    observations = []
    for t in range(length):
        if t and rng.random() > theta:
            state = 1 - state
        observations.append(state if rng.random() < 0.8 else 1 - state)
    return tuple(observations)


def quadrature(observations: tuple[int, ...], cells: int) -> float:
    """Midpoint quadrature for the posterior mean in theta coordinates."""
    denominator = numerator = 0.0
    for i in range(cells):
        theta = (i + 0.5) / cells
        log_z, _ = forward(observations, transition(theta))
        weight = theta * (1.0 - theta) * exp(log_z)
        denominator += weight
        numerator += theta * weight
    return numerator / denominator


def batch_mcse(samples: list[float], batch_size: int = 200) -> float:
    batches = [mean(samples[i:i + batch_size])
               for i in range(0, len(samples) - batch_size + 1, batch_size)]
    if len(batches) < 2:
        raise ValueError("at least two complete batches are required")
    return sqrt(variance(batches) / len(batches))


def pmmh(
    observations: tuple[int, ...], particles: int, seed: int,
    iterations: int = 12000, burn: int = 2000,
) -> tuple[list[float], float, int]:
    if not 0 <= burn < iterations:
        raise ValueError("burn must lie between zero and iterations - 1")
    rng = Random(seed)
    z = 0.0
    log_z = particle_loglik(observations, transition(logistic(z)), particles, rng)
    target = log_z + log_prior_in_logit(z)
    samples = []
    accepted = longest = run = 0
    for iteration in range(iterations):
        candidate = z + rng.gauss(0.0, 0.9)
        proposed_log_z = particle_loglik(
            observations, transition(logistic(candidate)), particles, rng
        )
        proposed_target = proposed_log_z + log_prior_in_logit(candidate)
        if log(1.0 - rng.random()) < proposed_target - target:
            z, log_z, target = candidate, proposed_log_z, proposed_target
            accepted += 1
            run = 0
        else:
            # Crucial: retain target and its original likelihood estimate.
            run += 1
            longest = max(longest, run)
        if iteration >= burn:
            samples.append(logistic(z))
    return samples, accepted / iterations, longest


def main() -> None:
    neutral_resampling_example()
    positive_retry_example()
    evidence, biased_filter, static_evidence = exact_population_checks()
    print(f"Exact count enumeration: E[PF Zhat]={evidence}, "
          f"E[normalized state-one estimate]={float(biased_filter):.6f}")
    for ancestor_sampling in (False, True):
        residual = exact_particle_gibbs_check(ancestor_sampling)
        name = "PGAS" if ancestor_sampling else "PG"
        print(f"Exact {name} transition audit (M=2,T=2): invariance residual={residual}")
    static_rng = Random(2810)
    static_estimates = [annealed_smc(4, static_rng)[0] for _ in range(10000)]
    print(f"Static annealed SMC exact E[Zhat]={static_evidence}; "
          f"10000-run mean={mean(static_estimates):.6f} "
          f"(iid SE {stdev(static_estimates) / sqrt(len(static_estimates)):.6f})")
    matrix = ((0.9, 0.1), (0.2, 0.8))
    observations = (1, 0)
    log_z, p_one = forward(observations, matrix)
    assert abs(exp(log_z) - 0.202) < 1e-12
    assert abs(p_one - 0.132 / 0.404) < 1e-12
    rng = Random(2801)
    estimates = [exp(particle_loglik(observations, matrix, 4, rng))
                 for _ in range(20000)]
    print(f"Two-observation exact evidence: {exp(log_z):.6f}")
    print(f"Mean of 20000 four-particle estimates: {mean(estimates):.6f} "
          f"(iid SE {stdev(estimates) / sqrt(len(estimates)):.6f})")
    data = simulate(18, 0.85, Random(2802))
    reference = quadrature(data, 10000)
    coarse = quadrature(data, 5000)
    print("Parameter experiment observations:", "".join(map(str, data)))
    print(f"Quadrature posterior mean: {reference:.6f} "
          f"(grid refinement difference {abs(reference - coarse):.2g})")
    for particles in (8, 64):
        noise_rng = Random(2900 + particles)
        log_estimates = [particle_loglik(data, transition(reference), particles, noise_rng)
                         for _ in range(1000)]
        start = perf_counter()
        samples, acceptance, longest = pmmh(data, particles, 2803 + particles)
        elapsed = perf_counter() - start
        mcse = batch_mcse(samples)
        print(f"M={particles:2d}: mean={mean(samples):.6f}, batch MCSE={mcse:.6f}, "
              f"accept={acceptance:.3f}, longest rejection run={longest}, "
              f"loglik SD={stdev(log_estimates):.3f}, "
              f"particle steps={(12000 + 1) * particles * len(data)}, "
              f"seconds={elapsed:.2f}")
    print("Batch MCSE is an illustrative estimate, not a convergence certificate.")


if __name__ == "__main__":
    main()
