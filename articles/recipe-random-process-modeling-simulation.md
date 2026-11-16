
# Model and Audit a Random Process

**Before reading.** Read [Specifying a Process](#/books/stochastic-processes-paths/specifying-a-process), [Expectation and Variance](#/books/introduction-to-probability/expectation-variance).

Use this recipe when a system changes unpredictably through time: calls enter a queue, a component fails and is repaired, an organism changes location, a particle diffuses, or a user moves among application states. The output is not merely a simulation. It is a checkable chain from question to mechanism, exact benchmark, numerical experiment, and limited real-world claim.

## Step 1 — Name the target before the process

Write the quantity you need with units and time horizon. Examples:

- probability a queue exceeds 20 jobs during an eight-hour shift;
- expected time until a device first fails, in hours;
- distribution of location after 50 movement decisions;
- long-run fraction of requests handled by each server.

“Simulate the system” is not a target. Different targets require different stored state, stopping rules, and precision.

## Step 2 — Choose state and clock

The state should contain enough information to specify future evolution under the intended model. A queue state might need the number waiting and whether a server is busy; if service durations depend on age, elapsed service time may also be necessary.

Choose discrete event number, fixed time steps, or continuous time. A daily transition matrix cannot resolve within-day overload. Conversely, millisecond steps can waste computation when only event times matter.

Audit the Markov claim. If transition probabilities depend on an omitted history variable, the visible state is not Markov. Enlarge the state or use a non-Markov model rather than asserting memorylessness by convenience.

## Step 3 — State transition and arrival mechanisms

Write conditional laws, not only distribution names. For a finite chain,

$P_ij=P(X_{t+1}=j | X_t=i)$.

Check each row is nonnegative and sums to one. For a Poisson arrival model, state the rate $\lambda$ with units and the assumptions of stationary independent increments. Its interarrival times are exponential with mean $1/\lambda$ in matching units.

Do not choose Poisson solely because the data are counts. Bursts, daily cycles, inhibition, or capacity feedback violate its constant-rate independent-increment mechanism. A nonhomogeneous, renewal, self-exciting, or state-dependent model may be more honest.

## Step 4 — Identify independence and coupling

List which random draws are independent and why. Separate:

- independence in the mathematical model;
- independence of pseudo-random streams in the program;
- independence or dependence in observations used to estimate parameters.

A coupling intentionally makes simulated paths dependent while preserving their individual laws. This can reduce variance or prove convergence. Verify both marginals before interpreting the joint construction.

## Step 5 — Derive one exact benchmark

Every simulation needs a case whose answer is known independently.

For a two-state chain with $\alpha =P(0\to 1)$ and $\beta =P(1\to 0)$, the exact probability $q_t=P(X_t=1)$ obeys

$q_{t+1}=\alpha +(1-\alpha -\beta )q_t$.

If $\alpha +\beta >0$, the stationary value is $\pi _1=\alpha /(\alpha +\beta )$, and

$q_t-\pi _1=(1-\alpha -\beta )^t(q_0-\pi _1)$.

Use this to test both transition sampling and distribution summaries. Other benchmarks include Poisson mean equals variance, fair-walk endpoint parity, gambler’s-ruin probabilities, and probability mass summing to one.

## Step 6 — Design deterministic reproducibility

Inject a pseudo-random generator rather than hiding it inside every function. Record:

- algorithm or runtime generator;
- integer seed;
- mapping from uniforms to modeled draws;
- whether parallel workers receive separate streams;
- how invalid parameters are rejected.

The same seed should produce the same teaching run within the declared implementation. A simple generator used for demonstration is not cryptographically secure. Reproducibility does not imply statistical quality.

## Step 7 — Separate within-path and between-run uncertainty

Values along one path are usually dependent. Treating its 10,000 time points as 10,000 independent replications understates uncertainty.

For an event indicator across $R$ independent simulated paths, the estimated probability has standard error

$\sqrt(p_hat(1-p_hat)/R)$

as a plug-in approximation, with worst-case scale $1/(2\sqrt(R))$. For steady-state averages from correlated chains, use burn-in reasoning, autocorrelation diagnostics, effective sample size, regeneration, or independent runs. None is repaired by printing more digits.

## Step 8 — Validate at boundaries

Test regimes where behavior changes qualitatively:

- zero transition rate: absorbing or disconnected state;
- probability one: deterministic or periodic motion;
- equal rates: symmetry;
- tiny rate: long waiting and possible horizon censoring;
- empty/full capacity;
- zero requested steps;
- invalid negative rate, NaN, or row sum.

For a two-state chain with $\alpha =\beta =1$, $(1/2,1/2)$ is stationary but point-mass starts alternate forever. A validator that checks only for a stationary vector misses nonconvergence.

## Step 9 — Compare simulation, calculation, and data

Create a table with three columns:

| Layer | Example statement | Status |
| --- | --- | --- |
| theorem | $TV_t=\lvert 1-\alpha -\beta \rvert^t$ between extreme starts | exact inside the two-state model |
| computation | 9,873 of 10,000 paths coupled by time 20 | seeded finite experiment with Monte Carlo error |
| empirical claim | users change state with constant probabilities | assumption to test against observations |

Disagreement with a theorem benchmark signals code or arithmetic error. Agreement does not validate the real-world mechanism; many wrong models reproduce one mean.

## Step 10 — Run sensitivity and communicate limits

Vary every estimated or chosen parameter over plausible ranges. Change the state resolution, clock, dependence mechanism, and stopping horizon where defensible. Report which conclusions persist.

Include a nonvisual result table for every path plot, explain colors with labels or line styles, make controls keyboard operable, and respect reduced-motion settings. A screenshot without values is not reproducible evidence.

## Worked case: service availability

### Worked example: stationary probability and a finite-horizon event

Model a server as Up ($0$) or Down ($1$) each hour. Let $\alpha =0.02$ be failure probability from Up and $\beta =0.30$ be repair probability from Down.

The stationary down fraction is

$\pi _1=0.02/(0.02+0.30)=0.0625$.

The second eigenvalue is $1-0.32=0.68$, so differences between initial-state laws contract by factor $0.68$ per hour. From an initially Up server, after $t$ hours

$q_t=0.0625(1-0.68^t)$.

This benchmark can test a simulator. But the model assumes hourly transitions, geometric durations, constant rates, and no maintenance schedule or common-cause outage. Calling $6.25\%$ “the server’s true downtime” would exceed the model.

Suppose 10,000 independent 24-hour paths estimate probability of at least one failure. Report the seed, event definition, estimate, and binomial Monte Carlo standard error. Then compare with the exact complement calculation under the hourly model: starting Up, avoiding failure for all 24 transitions has probability $(1-0.02)^24$, so the target is $1-0.98^24\approx 0.384$. Repair probability does not affect whether the first failure occurred, a useful program check.

## Exercises with hints and complete solutions

### Exercise 1: Units


A rate is 6 arrivals per hour. What exponential mean should code using minutes use?

<details><summary>Hint 1</summary>

Convert the arrival rate to arrivals per minute.

</details>
<details><summary>Hint 2</summary>

An exponential waiting time's mean is the reciprocal of its rate.

</details>
<details><summary>Solution</summary>

$60/6=10$ minutes. Passing rate 6 directly to a minutes-based exponential sampler creates a factor-60 error.

</details>

### Exercise 2: One long path


Why are 1,000 consecutive states of a sticky chain not 1,000 independent observations?

<details><summary>Hint 1</summary>

Look at how long the chain typically stays in one state.

</details>
<details><summary>Hint 2</summary>

Sample count alone does not remove temporal dependence.

</details>
<details><summary>Solution</summary>

Each state influences the next; long runs create positive autocorrelation. Uncertainty must account for dependence or use independent paths.

</details>

### Exercise 3: Coupling audit


What two facts must be checked before a coupled simulation bounds total variation?

<details><summary>Hint 1</summary>

A joint construction must still simulate both intended chains.

</details>
<details><summary>Hint 2</summary>

Check what the construction does after its first meeting time.

</details>
<details><summary>Solution</summary>

Each coordinate must have the intended marginal transition law, and after meeting the construction used for the bound must keep the coordinates together.

</details>

### Exercise 4: Boundary test


For $\alpha =\beta =0$, what should a simulator do?

<details><summary>Hint 1</summary>

Each cross-state transition has probability zero.

</details>
<details><summary>Hint 2</summary>

The initial state can therefore never change.

</details>
<details><summary>Solution</summary>

Remain forever at its initial state. There is no unique stationary distribution; every mixture of the two point masses is stationary.

</details>

### Exercise 5: Claim ladder


A Poisson simulator matches mean count 10. Has it validated independent increments?

<details><summary>Hint 1</summary>

Distinct processes can share a mean.

</details>
<details><summary>Hint 2</summary>

Independent increments describe joint laws, not one average.

</details>
<details><summary>Solution</summary>

No. Matching one moment does not test increment independence, stationarity, or the count distribution. Those require separate diagnostics and domain evidence.

</details>

## Deliverable checklist

Ship the state and clock, transition laws with units, target, exact benchmark, seeded implementation, boundary/property tests, Monte Carlo error, sensitivity analysis, accessible numerical alternative, and a claim ladder. Continue to the programming course for inspectable implementations or the live Markov lab for exact-versus-sampled coupling.

