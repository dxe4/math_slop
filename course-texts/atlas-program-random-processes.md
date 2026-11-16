
# Program Random Processes: Seeds, Chains, Arrivals, and Couplings

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-program-random-processes) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This dependency-free JavaScript course turns probability definitions into inspectable algorithms. The goal is not to imitate randomness decoratively. Each program exposes its representation, invariant, complexity, benchmark, and uncertainty. The code uses a small seeded generator for reproducible education; it is not suitable for cryptography or scientific production without a generator-quality review.

## Entry diagnostic and programming route

Before Section 1:

1. Explain what a function argument permits that a hard-coded global value
   does not.
2. Compute one step of the row distribution $(1,0)$ under
   $\begin{pmatrix}0.7&0.3\\0.2&0.8\end{pmatrix}$.
3. State the expected count in a rate-$4$ process over $2.5$ time units.
4. Distinguish a reproducible pseudorandom stream from independent physical
   observations.

The answers are dependency injection and controlled replacement; $(0.7,0.3)$;
10; and equal seeds reproduce an algorithmic stream while neither
independence nor a physical sampling model follows from reproducibility.

| Stage | Sections | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Random interfaces | 1–2 | [Specifying a process](../books/stochastic-processes-paths/specifying-a-process.md) | Generator contract and categorical boundary tests |
| 2. Chains and coupling | 3–4 | [Finite Markov chains](../books/stochastic-processes-paths/finite-markov-chains.md) and [coupling](../books/stochastic-processes-paths/coupling-and-convergence.md) | Exact law beside seeded paths and a coupling inequality |
| 3. Arrivals and estimation | 5–6 | [Poisson processes](../books/stochastic-processes-paths/poisson-processes.md) and [Monte Carlo](../books/probability-models-proofs/monte-carlo-and-randomized-estimation.md) | Two arrival simulators and an error statement |
| 4. Verification and communication | 7–8, exercises, capstone | Revisit the process chapter matching the capstone | Property tests, accessible table, and claim ledger |

## 1. A uniform stream is an interface

Most simulation begins with numbers intended to resemble independent uniforms on $[0,1)$. Inject that source so deterministic tests can control it.

```js
function seededRandom(seed) {
  let state = (Math.trunc(seed) >>> 0) || 0x9e3779b9;
  return function random() {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
}

function assertProbability(p, name = "probability") {
  if (!Number.isFinite(p) || p < 0 || p > 1) {
    throw new RangeError(`${name} must be in [0,1]`);
  }
}
```

The generator has constant-time updates and constant memory. Equal seeds reproduce equal streams. That is a testing contract, not evidence of independence or unpredictability.

## 2. Bernoulli and categorical draws

A Bernoulli draw returns one when $U<p$. A categorical draw uses cumulative mass.

```js
function bernoulli(p, random) {
  assertProbability(p, "p");
  return random() < p ? 1 : 0;
}

function categorical(weights, random) {
  if (!Array.isArray(weights) || weights.length === 0) {
    throw new RangeError("weights must be a nonempty array");
  }
  if (weights.some((w) => !Number.isFinite(w) || w < 0)) {
    throw new RangeError("weights must be finite and nonnegative");
  }
  const total = weights.reduce((sum, w) => sum + w, 0);
  if (!(total > 0)) throw new RangeError("some weight must be positive");
  const target = random() * total;
  let cumulative = 0;
  for (let i = 0; i < weights.length; i += 1) {
    cumulative += weights[i];
    if (target < cumulative) return i;
  }
  return weights.length - 1; // protects against final rounding only
}
```

With $k$ categories the scan costs $O(k)$ time and $O(1)$ extra space. Repeated draws from a large fixed law can use binary search on cached cumulative mass or an alias table, but additional complexity deserves tests.

## 3. Simulate and exactly evolve a Markov chain

Represent a finite transition matrix by rows. Validate it before sampling.

```js
function validateTransition(matrix, tolerance = 1e-12) {
  if (!Number.isFinite(tolerance) || tolerance < 0) throw new RangeError("bad tolerance");
  if (!Array.isArray(matrix) || matrix.length === 0) throw new RangeError("empty matrix");
  const n = matrix.length;
  for (const row of matrix) {
    if (!Array.isArray(row) || row.length !== n) throw new RangeError("matrix must be square");
    if (row.some((p) => !Number.isFinite(p) || p < 0)) throw new RangeError("invalid entry");
    const sum = row.reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 1) > tolerance) throw new RangeError("row must sum to one");
  }
}

function simulateChain(matrix, start, steps, random) {
  validateTransition(matrix);
  if (!Number.isInteger(start) || start < 0 || start >= matrix.length) throw new RangeError("bad start");
  if (!Number.isInteger(steps) || steps < 0) throw new RangeError("bad steps");
  const path = [start];
  let state = start;
  for (let t = 0; t < steps; t += 1) {
    state = categorical(matrix[state], random);
    path.push(state);
  }
  return path;
}

function stepDistribution(distribution, matrix, tolerance = 1e-12) {
  validateTransition(matrix);
  if (!Array.isArray(distribution) || distribution.length !== matrix.length) {
    throw new RangeError("distribution dimension mismatch");
  }
  if (distribution.some((p) => !Number.isFinite(p) || p < 0)) {
    throw new RangeError("distribution entries must be finite and nonnegative");
  }
  const mass = distribution.reduce((sum, p) => sum + p, 0);
  if (Math.abs(mass - 1) > tolerance) throw new RangeError("distribution must sum to one");
  const next = Array(matrix.length).fill(0);
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) next[j] += distribution[i] * matrix[i][j];
  }
  return next;
}
```

One sampled path costs $O(Tk)$ with the linear categorical scan and stores $O(T)$ states. Exact dense distribution evolution costs $O(Tk^{2})$. They answer different questions: a path is one realization; the vector is the exact law under floating-point arithmetic.

For the two-state matrix $\begin{pmatrix}1-\alpha & \alpha \\ \beta & 1-\beta \end{pmatrix}$, compare numerical vector evolution with the closed recurrence $q_{t+1}=\alpha +(1-\alpha -\beta )q_t$. Test $\alpha =\beta =0$, $\alpha =\beta =1$, and $\alpha =\beta =1/2$.

## 4. Maximal coupling of binary transitions

To couple Bernoulli probabilities $p,q$, allocate shared probability first:

```js
function maximalBernoulli(p, q, random) {
  assertProbability(p, "p");
  assertProbability(q, "q");
  const u = random();
  const bothOne = Math.min(p, q);
  const bothZero = Math.min(1 - p, 1 - q);
  if (u < bothOne) return [1, 1];
  if (u < bothOne + bothZero) return [0, 0];
  return p > q ? [1, 0] : [0, 1];
}
```

The first marginal is one on mass $\min(p,q)+\max(p-q,0)=p$; similarly the second has probability $q$. Mismatch mass is $|p-q|$, the total-variation distance between Bernoulli laws. If the current states agree, use identical transition probabilities, and the copies remain together.

A single early meeting does not prove fast mixing. The coupling inequality uses the probability of failing to meet across the coupling construction, not the meeting time of one lucky path. The live Markov lab displays both one seeded pair and the exact total-variation curve.

## 5. Simulate Poisson arrivals two ways

Exponential interarrivals use inverse transform. If $U$ is uniform on $(0,1)$, then

$W=-\log(U)/\lambda$

has survival probability $P(W>t)=e^{-\lambda t}$.

```js
function poissonArrivals(rate, horizon, random) {
  if (!(rate > 0) || !Number.isFinite(rate)) throw new RangeError("positive finite rate required");
  if (!(horizon >= 0) || !Number.isFinite(horizon)) throw new RangeError("finite nonnegative horizon required");
  const arrivals = [];
  let time = 0;
  while (true) {
    const draw = random();
    if (!Number.isFinite(draw) || draw < 0 || draw >= 1) throw new RangeError("random source must return values in [0,1)");
    const u = Math.max(draw, Number.MIN_VALUE);
    time += -Math.log(u) / rate;
    if (time > horizon) break;
    arrivals.push(time);
  }
  return arrivals;
}
```

Expected runtime is $O(\lambda T+1)$ because the expected count is $\lambda T$. An alternative first samples $N~Poisson(\lambda T)$, then sorts $N$ independent uniforms on $[0,T]$; this costs $O(N \log N)$ but uses the conditional-uniform arrival theorem. Agreement between algorithms is a strong cross-check only if they do not share the same defect.

At high rates, event-by-event simulation may be inefficient. At rate zero, the mathematically correct path has no arrivals; the teaching function above rejects it deliberately, so a wrapper should handle zero explicitly if the model permits it.

## 6. Monte Carlo estimates need error bars

```js
function estimateEvent(trials, experiment) {
  if (!Number.isInteger(trials) || trials <= 0) throw new RangeError("positive trials required");
  let successes = 0;
  for (let i = 0; i < trials; i += 1) successes += experiment() ? 1 : 0;
  const estimate = successes / trials;
  const standardError = Math.sqrt(estimate * (1 - estimate) / trials);
  return { estimate, standardError, trials };
}
```

The plug-in standard error can equal zero after all successes or failures even when uncertainty is not truly zero. For rare events or small samples, use an interval method with better boundary behavior and consider importance sampling. Always state whether trials are independent; overlapping windows from one path are not automatically so.

## 7. Property tests, not only snapshot tests

Run this dependency-free audit after placing the snippets in one script:

```js
function check(condition, message) {
  if (!condition) throw new Error(message);
}

const r1 = seededRandom(42);
const r2 = seededRandom(42);
check(Array.from({ length: 8 }, r1).join() === Array.from({ length: 8 }, r2).join(), "seed repeat");

const absorbing = [[1, 0], [0, 1]];
check(simulateChain(absorbing, 0, 20, seededRandom(1)).every((x) => x === 0), "absorption");

const alternating = [[0, 1], [1, 0]];
check(simulateChain(alternating, 0, 4, seededRandom(1)).join() === "0,1,0,1,0", "period two");

const mixed = stepDistribution([1, 0], [[0.5, 0.5], [0.5, 0.5]]);
check(Math.abs(mixed[0] - 0.5) < 1e-12 && Math.abs(mixed[1] - 0.5) < 1e-12, "one-step law");

let invalidDistributionRejected = false;
try { stepDistribution([0.8, 0.8], [[0.5, 0.5], [0.5, 0.5]]); }
catch (error) { invalidDistributionRejected = error instanceof RangeError; }
check(invalidDistributionRejected, "invalid distribution rejected");

const coupled = maximalBernoulli(0.8, 0.3, () => 0.95);
check(coupled[0] === 1 && coupled[1] === 0, "residual coupling mass");

const arrivals = poissonArrivals(2, 10, seededRandom(7));
check(arrivals.every((x, i) => x > 0 && x <= 10 && (i === 0 || x > arrivals[i - 1])), "arrival order");
```

Statistical tests of empirical means complement these deterministic invariants but should use tolerances justified by sampling variation, not thresholds tuned until one seed passes.

## 8. Build an accessible visual companion

A useful process visualization should expose the exact and sampled layers simultaneously:

- paths use labels or line patterns as well as color;
- a numerical table lists time, exact law, and sample state;
- the seed is editable;
- keyboard actions step, rewind, run, and reset;
- reduced-motion users retain manual stepping;
- the time control announces its current value;
- boundary presets include absorbing, periodic, and slow-mixing cases.

The Atlas Markov Mixing & Coupling Observatory follows this contract. Use it to form a conjecture, then derive the recurrence. The chart is not the proof.

## Exercises with worked answers

### 1. Generator injection

Why is a `random` parameter better than calling `Math.random()` deep inside every function?

**Answer.** It enables deterministic branch tests, reproducible runs, and generator replacement. It does not by itself make draws statistically independent.

### 2. Complexity

What is the cost of exactly evolving a dense $k$-state law for $T$ steps?

**Answer.** Each vector-matrix multiplication costs $Θ(k^{2})$, so total time is $Θ(Tk^{2})$ and distribution storage is $Θ(k)$ if earlier rows are discarded.

### 3. Periodicity bug

A program reports convergence from state 0 for $\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$. Name a decisive test.

**Answer.** Assert the exact path alternates and exact distributions remain point masses with total-variation distance one. A time average approaching one half is not ordinary distribution convergence.

### 4. Arrival units

If $rate=5$ means events per second and horizon is supplied in minutes, what must change?

**Answer.** Convert one unit: either rate becomes 300 per minute or horizon becomes seconds. Mixing units silently changes the expected count by factor 60.

### 5. Simulation versus proof

Ten seeds show coupling by time 12. What may be concluded?

**Answer.** Only that those ten seeded runs met by 12. A probability bound requires a justified distribution over runs or an exact argument such as spectral contraction or a coupling-tail calculation.

### 6. Boundary standard error

Why can the plug-in Bernoulli standard error be zero after ten simulated
failures without proving that the event probability is zero?

**Answer.** The estimate is zero, so substituting it into
$\sqrt{\widehat p(1-\widehat p)/n}$ gives zero. The formula has used the same
small sample to estimate an unknown variance and degenerates at the boundary.
An interval designed for binomial boundaries or a justified prior analysis
retains uncertainty.

### Feedback map

If Exercises 1 or 3 fail, test deterministic boundary processes before
sampling. If Exercise 2 fails, count the matrix operations by loop nesting. If
Exercise 4 fails, normalize rate and horizon units before calling the
simulator. If Exercises 5–6 fail, separate an empirical estimate, its sampling
error, and a theorem about the target process.

## Capstone

Implement a three-state reliability or movement chain. Validate rows, compute exact laws, simulate seeded paths, construct a coupling, estimate one event with Monte Carlo error, and include absorbing and periodic countermodels. Deliver a text table equivalent to every plot and label each conclusion theorem, floating-point calculation, simulation evidence, or empirical assumption.
