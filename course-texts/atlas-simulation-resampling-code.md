
# Statistical Computing by Simulation and Resampling

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-simulation-resampling-code) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Simulation turns a probability model into inspectable behavior. Resampling turns a sampling or assignment mechanism into an approximate reference distribution. Neither replaces proof or design: code answers the mathematical question encoded in its generator, not necessarily the question we intended.

This programming-oriented course uses dependency-free JavaScript-like code so every algorithm is visible. It assumes elementary probability, arrays, loops, and functions. Translate it to any language while preserving the invariants and tests.

## Entry diagnostic and nine-hour course route

Before coding, answer these:

1. What values can \(\lfloor 4U\rfloor\) take when \(0\le U<1\)?
2. If a Bernoulli variable has success probability \(p\), what are its mean and
   variance?
3. Why does setting a seed support reproducibility without making a generator
   statistically suitable?
4. In a cluster-randomized study, what object must be shuffled?
5. If Monte Carlo error should be halved, by what factor should independent
   repeat count increase?

**Answers and repair.** The values are \(0,1,2,3\); the mean is \(p\) and the
variance \(p(1-p)\); a seed repeats the same deterministic stream but says
nothing about its quality; shuffle cluster assignments under the original
design; and multiply repeats by four. Repair Questions 1–2 with elementary
probability, Question 3 with Module 1, Question 4 with Modules 5–6, and Question
5 with Modules 3 and 7.

| Hours | Work | Required artifact |
| --- | --- | --- |
| 1–2 | Modules 1–2 and [functions, iteration, and assertions](../books/statistics-with-r/functions-iteration-assertions.md) | seeded generator tests and a Bernoulli frequency table |
| 3–4 | Module 3 and [sampling variation](../books/statistics-with-r/sampling-variation.md) | estimate, MCSE, and a four-times-larger run |
| 5–6 | Modules 4 and 6 plus [bootstrap intervals](../books/statistics-with-r/bootstrap-intervals.md) | resampling-unit declaration and a bootstrap failure case |
| 7–8 | Modules 5 and 7 plus [randomization tests](../books/statistics-with-r/randomization-tests.md) | exact small-case enumeration beside the simulation |
| 9 | Module 8 and capstone | falsification study with seed, assumptions, code tests, and claim boundary |

Do not count a run as evidence until an exact case or invariant can catch at
least one plausible implementation error.

## Module 1 — A reproducible random stream

`Math.random()` is convenient but does not expose a seed portably. For learning, use a tiny linear congruential generator:

```js
function makeRng(seed) {
  let state = seed >>> 0;
  return function uniform() {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}
```

The state is a 32-bit unsigned integer. Each call applies a deterministic recurrence and maps the state into $[0,1)$. The invariant is $0\le state<2^32$; equal seeds produce equal streams. This generator is for reproducible education, not cryptography or high-stakes scientific production. Its lattice structure and period limit can distort demanding simulations.

Test the implementation before using it:

```js
const a = makeRng(7);
const b = makeRng(7);
for (let i = 0; i < 100; i += 1) {
  if (a() !== b()) throw new Error("seed reproducibility failed");
}
```

Also check every draw lies in $[0,1)$, save the seed in results, and use independent named streams only with a justified splitting method.

## Module 2 — Simulating a model

A Bernoulli draw with success probability $p$ is:

```js
function bernoulli(p, rng) {
  if (!(p >= 0 && p <= 1)) throw new RangeError("p must be in [0,1]");
  return rng() < p ? 1 : 0;
}
```

Why this works: for a uniform $U$ on $[0,1)$, the event $U<p$ occupies an interval of length $p$, so it has probability $p$.

**Experiment.** Simulate $n=100$ flips, record the mean, and repeat 2,000 times. With seed $20260830$, the generator above produces this numeric alternative to a histogram:

```text
sample-mean interval   repeat count   repeat fraction
[0.30,0.40)                  40              .0200
[0.40,0.50)                 921              .4605
[0.50,0.60)                 982              .4910
[0.60,0.70)                  57              .0285
outside these intervals       0              .0000
```

For $p=.5$, the theoretical standard deviation of the sample mean is $\sqrt{.25/100}=.05$. Compare it with the standard deviation across repeats. Agreement within Monte Carlo error is a test of one property, not proof that all code is correct.

## Module 3 — Monte Carlo estimates need uncertainty

To estimate $\pi$, sample uniform points in the square $[-1,1]^{2}$ and count those inside the unit circle. If $I_s$ is the inside indicator, then $E[I_s]=\pi /4$, so $\hat\pi=4\bar I$.

```js
function estimatePi(draws, rng) {
  if (!Number.isInteger(draws) || draws <= 0) throw new RangeError("positive draws");
  let inside = 0;
  for (let i = 0; i < draws; i += 1) {
    const x = 2 * rng() - 1;
    const y = 2 * rng() - 1;
    if (x * x + y * y <= 1) inside += 1;
  }
  const q = inside / draws;
  const estimate = 4 * q;
  const mcse = 4 * Math.sqrt(q * (1 - q) / draws);
  return { estimate, mcse, inside, draws };
}
```

The reported `mcse` is an estimated Monte Carlo standard error under independent generator draws. Quadrupling draws roughly halves it. Numerical simulation here converges slowly compared with deterministic algorithms for π; the point is probabilistic integration.

Distinguish Monte Carlo error from sampling uncertainty in original data. Running more simulations reduces computational error but cannot create more participants or repair sample bias.

## Module 4 — Sampling with replacement

The nonparametric bootstrap treats the empirical distribution—which puts mass $1/n$ on each observed value—as a stand-in for the population. A bootstrap resample draws $n$ observed values independently with replacement.

```js
function resample(values, rng) {
  if (values.length === 0) throw new RangeError("nonempty sample required");
  const out = new Array(values.length);
  for (let i = 0; i < out.length; i += 1) {
    out[i] = values[Math.floor(rng() * values.length)];
  }
  return out;
}

function mean(values) {
  return values.reduce((sum, x) => sum + x, 0) / values.length;
}
```

Given data $2,3,4,9$, one possible bootstrap sample is $3,3,9,2$, with mean $4.25$; another is $4,4,4,4$, with mean 4. Repeat $B$ times and use the standard deviation of bootstrap statistics to estimate standard error.

The simple percentile interval takes empirical $\alpha /2$ and $1-\alpha /2$ quantiles of the bootstrap estimates. It can work for smooth statistics in regular settings but can miscover for small samples, boundaries, heavy tails, strong bias, or nonsmooth estimators. Clustered, time-series, stratified, or survey data require a bootstrap respecting their dependence and design; resampling individual rows is usually wrong.

## Module 5 — Fisher–Yates shuffling and randomization tests

A randomization test mimics the treatment assignment under a sharp null. To shuffle without bias:

```js
function shuffled(values, rng) {
  const out = [...values];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
```

At step $i$, each of the $i+1$ remaining positions is equally likely to be selected. By induction, every permutation has probability $1/n!$. Sorting by random keys does not generally provide a uniform shuffle and can introduce ties and implementation-dependent bias.

For a two-group mean difference:

```js
function differenceInMeans(values, groupSize) {
  return mean(values.slice(0, groupSize)) - mean(values.slice(groupSize));
}

function permutationPValue(values, groupSize, repeats, rng) {
  const observed = Math.abs(differenceInMeans(values, groupSize));
  let extreme = 0;
  for (let b = 0; b < repeats; b += 1) {
    const testStatistic = Math.abs(differenceInMeans(shuffled(values, rng), groupSize));
    if (testStatistic >= observed) extreme += 1;
  }
  return (extreme + 1) / (repeats + 1);
}
```

The add-one correction includes the observed arrangement conceptually and prevents a reported zero from finite random permutations. For a randomized experiment, the labels must be permuted according to the actual assignment scheme: preserve block sizes, pairs, or cluster assignments. A permutation distribution created by freely exchanging nonexchangeable observational labels has no valid design interpretation.

## Module 6 — Resampling confidence versus randomization evidence

Bootstrap and permutation answer different repeated-world questions:

- bootstrap: how would the statistic vary if sampling from an empirical approximation to a population were repeated?
- randomization: how would the statistic vary if treatment assignments were repeated under a null while outcomes were held fixed?

They can use similar loops but are not interchangeable. Always write the resampling unit and the mechanism being imitated.

**Worked exact test.** Outcomes are $1,2,7,8$; the first two received A and the last two B. The observed A-minus-B mean difference is $1.5-7.5=-6$. There are $C(4,2)=6$ equally sized assignments. Absolute differences are 6 for grouping $\{1,2\}|\{7,8\}$, 1 for $\{1,7\}|\{2,8\}$, 0 for $\{1,8\}|\{2,7\}$, and the same values for complementary labelings. Two of six assignments have absolute difference 6, so the exact two-sided randomization p-value is $2/6=1/3$. The effect looks large, but four units offer coarse evidence.

## Module 7 — Monte Carlo p-value precision

If the true tail probability is $p$ and $B$ independent permutations are
drawn, the extreme-count proportion has standard deviation approximately
$\sqrt{p(1-p)/B}$. With $p\approx .05$ and $B=999$, that is about `.0069`;
the second decimal is noisy. Report repeat count, seed, estimate, and Monte
Carlo interval or standard error.

Adaptive stopping based on whether the estimate crosses `.05` can invalidate naive calibration. Pre-specify repeats or use a valid sequential Monte Carlo testing rule.

## Module 8 — Simulation as a falsification tool

Simulation can test a conjectured procedure under controlled worlds:

1. choose parameter and data generator;
2. generate a dataset;
3. apply the complete estimator or interval procedure;
4. record bias, squared error, coverage, or false-rejection indicator;
5. repeat and attach Monte Carlo error;
6. vary skewness, dependence, missingness, and contamination.

To test 95% interval coverage, the repeat indicator is 1 when the generated interval covers the known generating parameter. If 930 of 1,000 cover, estimated coverage is .93 with Monte Carlo standard error $\sqrt{.93\times .07/1000}\approx .0081$. This suggests undercoverage relative to .95, but more repeats help distinguish algorithm behavior from computational noise.

Simulation does not prove coverage for all distributions. It finds counterexamples, measures selected scenarios, and checks derivations.

## Exercises with worked answers

### 1. Find the resampling unit

Twenty schools are randomized, with 30 students measured per school. Should a randomization test shuffle 600 student labels?

**Answer.** No. Assignment occurred at the school level, so shuffle the 20 school labels according to the original allocation, retaining student outcomes within schools. Student-level shuffling invents 600 independent assignments and overstates information.

### 2. Bootstrap boundary

A sample of ten devices contains no failures. What goes wrong when bootstrapping the failure proportion?

**Answer.** Every empirical resample also contains no failures, producing zero bootstrap variance. The sample does not establish a zero population failure probability; the empirical distribution has no representation of unseen rare outcomes. Use a binomial model or exact bound suited to the design and report the limitation.

### 3. Monte Carlo budget

How many independent repeats roughly reduce MCSE from `.01` to `.0025`?

**Answer.** Error scales as $1/\sqrt{B}$. Reducing by a factor of 4 requires increasing repeats by $4^{2}=16$.

### 4. Write a property test

State two properties of `shuffled` that examples should test.

**Answer.** Every output must contain exactly the input multiset, and the input array must remain unchanged. Statistical tests over many seeds can also check that each element appears in each position at roughly equal frequency, with tolerance based on binomial variation.

### 5. Capstone

Implement a bootstrap interval and randomization test for one real or synthetic comparison. Include seed, assumptions, accessible frequency tables, computational uncertainty, a clustered-data counterexample, and a scenario where the method fails.

**Solution standard.** A complete project explains the repeated-world mechanism, validates code on an exactly enumerable small case, distinguishes data uncertainty from MC error, and avoids interpreting a randomization p-value as a posterior probability or a bootstrap interval as proof of causal identification.

### Feedback map

- Nonreproducible output: record the generator, seed, version, and complete call
  order; a seed alone cannot reproduce an altered program.
- Impossible values or changed input arrays: repair validation and mutation
  contracts before judging statistical behavior.
- Disagreement with an exact enumeration: inspect shuffling, endpoint
  conventions, group sizes, and the tail comparison.
- A stable estimate with no MCSE: rerun at four times the budget and report the
  observed error reduction.
- A bootstrap or permutation result with row-level resampling of dependent
  data: return to the design and resample the actual independent unit.

## Continuation and limitations

Proceed to Monte Carlo methods, resampling theory, hypothesis testing, experimental design, time-series block bootstrap, survey replicate weights, and Bayesian computation. Advanced work should add importance sampling, variance reduction, MCMC, sequential Monte Carlo, parametric bootstrap, bootstrap-t and bias correction, empirical-process guarantees, and parallel random-stream design. Use mature scientific random generators and numerical libraries in production only after they satisfy the project’s dependency policy and validation requirements; the small code here exists so the mathematics stays visible.
