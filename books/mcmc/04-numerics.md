# 04. Randomness and numerical computation

An apparently harmless computation can fail before any Markov chain is built. Multiply a thousand probabilities near $0.1$ in ordinary floating point and the result becomes zero, although the mathematical product is positive. Start two simulation jobs from copied generator states and they may return identical draws, although the report calls them independent replications. This chapter develops two foundations for reliable simulation: how computers supply random-looking numbers, and how to preserve the quantities those numbers are used to compute.

**Learning goals.** By the end, you should be able to construct a sampling argument from ideal uniforms, implement inverse and rejection sampling, give each logical simulation its own generator state, compute and normalize tiny weights in log space, and state what a seeded numerical experiment does and does not reproduce. Prerequisites are CDFs and densities from [Chapter 02](02-probability.md), unnormalized targets from [Chapter 03](03-bayesian-targets.md), and the error-budget viewpoint from [Chapter 01](01-probability-computation.md).

## 4.1 The ideal draw and the machine draw

Probability proofs usually begin with $U_1,U_2,\ldots$ independent and uniform on the *continuum* $[0,1]$. A computer instead has a finite internal state $s$. A pseudorandom number generator (PRNG) can be pictured as

$$
s_{k+1}=T(s_k),\qquad u_k=G(s_{k+1}).
$$

Once its initial state is fixed, every later output is deterministic. Since the state space is finite, its path eventually repeats. A long period postpones that repetition, but it alone does not establish that short blocks of outputs resemble independent uniforms in the ways a particular algorithm needs. Nor does determinism mean that ordinary Monte Carlo methods are automatically invalid: the ideal iid model is the mathematical argument, while a well-designed generator is a practical approximation to its input assumptions. For empirical claims we must identify the generator and test the computation of interest, rather than treating a seed as a proof of independence.

There are further layers. A generator emits a finite set of floating-point values, not every real number in $[0,1]$; a numerical transformation of those values can add rounding or approximation; the resulting finite sample varies with the generator state. These are distinct from a modeling error such as using the wrong likelihood. The distinction matters later: a Markov kernel may preserve its target under exact arithmetic, while a finite-precision implementation may alter a decision. Conversely, a visible difference between two seeded runs is not by itself evidence of bias. [Devroye's treatment of nonuniform random variates](https://luc.devroye.org/rnbookindex.html) provides the classical inversion and rejection context used below.

## 4.2 Explicit generator state

Python's standard-library `random.Random(seed)` gives us a local generator object. Its `random()` method returns a float in $[0,1)$; zero is possible and one is excluded. `getstate()` and `setstate()` capture and restore its current position. These are concrete API properties, rather than properties of all PRNGs. The module's generator is intended for simulation, not security-sensitive tokens; use a cryptographic source for the latter. [Python's `random` documentation](https://docs.python.org/3/library/random.html) specifies these behaviors.

Pass a generator to a sampling function:

```python
import math

def exponential(rate, rng):
    if not math.isfinite(rate) or rate <= 0:
        raise ValueError("rate must be positive and finite")
    return -math.log1p(-rng.random()) / rate
```

The call consumes exactly one uniform from the supplied object. If this function instead reset a global seed every time it was called, every call would reproduce the same first value. A seed describes a starting point, not a complete history. Once other functions have consumed an unknown number of draws, that seed alone cannot resume the run at the correct place. Save the generator state with the model parameters and the step count for a checkpoint; a new run from the original seed is a replay only if the same calls occur in the same order.

This is one reason an explicit `rng` argument is useful even in short scripts. It tells a reader which operation consumes randomness, permits a small experiment to be replayed, and prevents unrelated sampling code from silently advancing a shared global stream. It does **not** make two generators statistically independent merely because their seed integers differ.

## 4.3 Streams for repeated experiments

Suppose two chains or two iid replication jobs each need a stream. If both receive copies of the same state, their next outputs are identical. If both compute the same statistic from those outputs, their reported estimates are identical too. Averaging the estimates has not doubled the information. This can happen when a process is forked after a generator has been created and the child processes inherit its state.

Assign generator streams to stable logical job IDs. An experiment can be described as a tree: experiment seed $\rightarrow$ chain 0, chain 1, and so on. A job's identity should be determined before scheduling, because parallel completion order can change from run to run. For a dependency-free demonstration we use separate, recorded `Random` seeds. That is convenient for replay, but the mere inequality of seeds is not a theorem about independence. For larger parallel work, NumPy's `SeedSequence.spawn` is a documented mechanism for deriving child streams from a parent; its purpose is strong practical separation, not literal stochastic independence of deterministic sequences. See the [NumPy parallel RNG guide](https://numpy.org/doc/stable/reference/random/parallel.html). [Chapter 18](18-sampler-engineering.md) returns to stream and checkpoint design, and [Chapter 35](35-parallel.md) to scheduling and hardware effects.

The sample code in `examples/ch04.py` deliberately uses seeds 401 and 402 for two *different methods*. Its comparison checks that both methods produce plausible estimates. It is not a paired experiment or a statistical test that those two PRNG streams are independent. If you need an uncertainty statement for a comparison, specify the replication design and analyze its variability as in [Chapter 05](05-monte-carlo.md).

## 4.4 Inverse transforms, including atoms

Let $F$ be a proper right-continuous CDF with limits zero at $-\infty$ and one at $+\infty$. Its generalized inverse is

$$
F^{-1}(u)=\inf\{x:F(x)\geq u\},\qquad 0<u<1.
$$

If $U\sim\operatorname{Uniform}(0,1)$ in the ideal model and $X=F^{-1}(U)$, then for any real $x$,

$$
\Pr(X\leq x)=\Pr(U\leq F(x))=F(x).
$$

The event equivalence follows from monotonicity and right continuity: the first point where the CDF reaches $U$ is at or before $x$ exactly when the CDF at $x$ has reached $U$. Thus $X$ has CDF $F$. There is no need for $F$ to be differentiable or one-to-one. If $F$ jumps by $p$ at a value $x_0$, an interval of uniforms of length $p$ maps to $x_0$; that is the atom of probability $p$. Endpoints of those intervals have probability zero under the ideal uniform, though a finite generator can land on an endpoint, so code needs a consistent convention.

For an exponential distribution of rate $\lambda>0$, $F(x)=1-e^{-\lambda x}$ for $x\geq0$. Solving $u=F(x)$ gives

$$
F^{-1}(u)=-\frac{\log(1-u)}{\lambda}.
$$

For a three-category distribution with probabilities $(0.2,0.5,0.3)$, the generalized inverse maps $0<u\leq0.2$ to category 1, $0.2<u\leq0.7$ to category 2, and $0.7<u<1$ to category 3. Code using a half-open interval may choose `<` at the cut points instead; the ideal distribution is unchanged because individual cut points have zero probability. Real code should document its choice, particularly for a generator that can emit zero.

Many useful CDFs have no closed-form inverse. A numerical root finder can approximate the quantile, but its tolerance, tail behavior, and stopping rules then become part of the simulated distribution. Calling such a numerical inversion “exact” would hide a new source of error. The [chapter illustration](figures/04.svg) plots the quantile function for rate $\lambda=1$: uniform values on the horizontal axis map to exponential draws on the vertical axis. The curve stretches sharply near $u=1$, showing how uniforms reach the tail.

## 4.5 Useful transformations and endpoint care

The exponential formula deserves an implementation detail. For small positive $u$, evaluating `1-u` first can round away part or all of $u$. `math.log1p(z)` computes $\log(1+z)$ accurately for $z$ near zero, so use `-math.log1p(-u)/rate`. It also behaves properly at $u=0$: the result is zero. Our half-open generator excludes $u=1$, so this formula does not encounter $\log 0$ through an ordinary `random()` call. By contrast, an algorithm that evaluates $\log U$ must explicitly handle the possible zero; simply adding an arbitrary epsilon changes the distribution. One option is to redraw zero, with that endpoint policy documented.

Mixtures combine a discrete inverse transform with a conditional draw. For weights $w_j\geq0$ summing to one, first choose component $J$ by cumulative intervals of lengths $w_j$, then draw $X$ from component distribution $F_J$. By conditioning,

$$
\Pr(X\in A)=\sum_j \Pr(J=j)\Pr(X\in A\mid J=j)
=\sum_jw_jP_j(A),
$$

where $P_j(A)$ is the probability of $A$ under component $j$. The first draw chooses a model component, and the second supplies a value under it. This simple construction anticipates the latent allocations in [Chapter 38](38-mixtures.md). An optional Gaussian primitive can similarly be built from uniforms using a validated transformation, but the transformed sample still inherits the endpoint and finite-precision behavior of its inputs. One should test numerical edge cases instead of assuming that an algebraically correct transform is automatically robust.

### What a finite uniform grid does to an inverse tail

The difference between an ideal uniform and a machine uniform can be quantified here. Python's default `Random.random()` returns multiples of $2^{-53}$, from $0$ through $1-2^{-53}$, according to the [Python `random` documentation](https://docs.python.org/3/library/random.html). For the inverse exponential transform at rate $\lambda$, its largest possible returned value is therefore

$$
x_{\max}=-\frac{\log(1-(1-2^{-53}))}{\lambda}
=\frac{53\log 2}{\lambda}.
$$

At rate $2$, this is about $18.3684$. An ideal exponential draw exceeds that value with probability $e^{-2x_{\max}}=2^{-53}\approx1.11\times10^{-16}$; this particular finite-grid inverse implementation cannot produce such a draw. It also maps the grid point $U=0$ to exactly zero, an event with zero probability under the ideal continuous exponential. These differences are usually negligible for an ordinary short run, but they matter when reasoning about extreme tails or claiming exact continuous sampling. The bound belongs to this generator and transform, not to every exponential sampling method. The executable computes the endpoint and its ideal tail probability without waiting for an exceptionally rare random event.

## 4.6 Rejection sampling and its proof

Inverse CDFs are not always convenient. Suppose $q$ is a normalized proposal density and $\tilde\pi$ is a nonnegative, integrable target function with $0<Z=\int\tilde\pi(x)\,dx<\infty$. Assume a **known finite** $C$ satisfies $\tilde\pi(x)\leq Cq(x)$ almost everywhere, including target support up to null sets. Draw $X\sim q$ and an independent $V\sim\operatorname{Uniform}(0,1)$; accept $X$ if

$$
V<\frac{\tilde\pi(X)}{Cq(X)}.
$$

The ratio need only be evaluated where $q(X)>0$, which happens almost surely under $q$. For a measurable set $A$, independence gives the probability that one proposal is both in $A$ and accepted:

$$
\Pr(X\in A,\text{ accept})
=\int_A q(x)\frac{\tilde\pi(x)}{Cq(x)}\,dx
=\frac1C\int_A\tilde\pi(x)\,dx.
$$

Taking $A$ as the whole space gives $p_{\rm acc}=Z/C$. Dividing the displayed mass by $Z/C$ shows the accepted draw has density $\pi=\tilde\pi/Z$. Independent attempts yield a geometric proposal count with mean $1/p_{\rm acc}=C/Z$. This proof also shows why a missing region of target support or an envelope that falls below the target invalidates the algorithm. Checking a dense grid can find a violation, but cannot certify the inequality between grid points.

Rejection here discards unsuccessful proposals and tries afresh. Later, [Metropolis–Hastings in Chapter 09](09-metropolis-hastings.md) retains the old *state* after a rejection; the two operations have different sample paths and proofs. A safety limit on proposals is appropriate in code, but exhausting that limit is an error to report, not a license to output the last rejected value.

## 4.7 Worked example: two routes to a Beta(2,1) draw

Take $\pi(x)=2x$ for $0\leq x\leq1$, zero elsewhere. It integrates to one, and its CDF is $F(x)=x^2$ inside the interval. Inversion therefore returns $X=\sqrt U$. For a hand trace, $U=0.09$ produces $X=0.3$; $U=0.64$ produces $X=0.8$. The mean follows directly:

$$
E[X]=\int_0^1 x(2x)\,dx=\frac23.
$$

Alternatively, propose $X\sim q=\operatorname{Uniform}(0,1)$. Since $2x\leq2q(x)$, take $C=2$ and accept when $V<x$. Three illustrative pairs $(X,V)$ are $(0.20,0.60)$, $(0.80,0.30)$, and $(0.45,0.70)$. The first is rejected, the second accepted, and the third rejected; the first accepted output in that sequence is $0.80$. These values are chosen for explanation, not generated by the executable. Here $Z=1$, so an attempt succeeds with probability $1/2$ and the mean work is two proposals per accepted draw. The accepted density is $2x$, the same target as inversion.

Geometrically, draw $(X,2V)$ uniformly in the rectangle $[0,1]\times[0,2]$ and accept points below the target line $2X$. Its triangular area is one half of the rectangle, and large $x$ values are accepted more often. An empirical mean near $2/3$ and an acceptance fraction near $1/2$ are useful local checks, but neither establishes that every detail of the implementation is correct. A bad sampler can match one moment by accident. The bounded executable prints both estimates from 20,000 draws and raises if an unusually long rejection loop reaches its safety cap.

## 4.8 Products, ratios, and log decisions

Likelihoods often contain products of positive factors $L(\theta)=\prod_{i=1}^n\ell_i(\theta)$. Their logarithms turn the product into a sum:

$$
\log L(\theta)=\sum_{i=1}^n\log\ell_i(\theta).
$$

For positive finite values, a ratio is a difference, $\log(a/b)=\log a-\log b$. This avoids evaluating tiny products before comparison. A factor that is mathematically zero has log value $-\infty$ and should be treated as zero probability. `NaN` is different: it says an operation failed or an invalid value entered the calculation. Silently interpreting `NaN` as rejection hides a defect. Values of $+\infty$ also need an explicit mathematical interpretation or an error, since expressions such as $\infty-\infty$ are undefined.

Suppose a valid acceptance probability has log value $a\leq0$. Instead of forming $e^a$, compare $\log U<a$ with $U\sim\operatorname{Uniform}(0,1)$. In finite code, first reject when $a=-\infty$, since that represents zero acceptance probability. For finite $a\leq0$, accept if `U == 0`; otherwise compare `log(U) < a`. This is the documented convention corresponding to the strict test $U<e^a$ on the generator's finite grid. Reject invalid log probabilities such as `NaN`, $+\infty$, or positive $a$ with a visible error; the endpoint policy cannot repair them. [Chapter 09](09-metropolis-hastings.md) uses log ratios for a Markov transition, and [Chapter 20](20-hmc.md) uses analogous comparisons after a numerical trajectory.

Log arithmetic is a representation strategy, not a universal cure. Subtracting two enormous nearby computed log densities can still lose precision; the logs themselves may already have been rounded or evaluated from unstable ingredients. Reformulating the model calculation, using `log1p` or `expm1` locally, or increasing precision may be necessary. The mathematical target, the arithmetic representation of it, and finite-run sampling error must be kept separate.

## 4.9 Worked example: a likelihood that disappears

Consider three unnormalized log weights $a=(-1000,-1001,-1002)$. Direct binary64 exponentials of all three are zero, so dividing each by their sum asks for $0/0$. Yet the mathematical normalized probabilities are well defined. Let $m=\max_i a_i=-1000$. Then

$$
L=\log\sum_i e^{a_i}
=m+\log\sum_i e^{a_i-m}
=-1000+\log(1+e^{-1}+e^{-2}).
$$

The shifted sum is about $1.5032147$, so $L\approx-999.5923940$. Exponentiating $a_i-L$ gives approximately $(0.665241,0.244728,0.090031)$. The common factor $e^{-1000}$ cancels mathematically; shifting makes that cancellation occur before underflow. For normalized probabilities, the executable divides the shifted weights directly: $w_i=e^{a_i-m}/\sum_j e^{a_j-m}$. This avoids forming and then subtracting the large common offset. For example, if both log weights equal $10^{16}$, adding $\log2$ to that offset rounds back to $10^{16}$ in binary64, so computing $e^{a_i-L}$ returns $(1,1)$ instead of $(1/2,1/2)$. Direct normalization of $(1,1)$ preserves the correct probabilities for these stored inputs. It cannot recover distinctions already lost while storing the inputs, and sufficiently small relative weights can still underflow. This log-sum-exp identity and its numerical limits are discussed by [Higham](https://nhigham.com/2021/01/05/what-is-the-log-sum-exp-function/).

The identity applies to a nonempty finite list of real values or $-\infty$ with at least one finite element; $+\infty$ requires separate treatment and is rejected by our implementation. If all $a_i=-\infty$, every unnormalized weight is zero: the log sum is $-\infty$, but **normalized probabilities do not exist**. A function should report that case rather than silently return a uniform distribution. Reject `NaN` input as invalid, since a maximum or sum involving it can otherwise quietly produce misleading output. A stable softplus, useful for logistic likelihoods, is

$$
\log(1+e^t)=\max(t,0)+\log1p(e^{-|t|}).
$$

This avoids overflow for large positive $t$. `expm1(t)` similarly evaluates $e^t-1$ accurately near zero. Both functions address specific cancellation patterns; they are not blanket guarantees of accuracy in every downstream calculation.

For a second numerical comparison, set $u=10^{-16}$ and $\lambda=2$. The exact-scale quantile $-\log(1-u)/2$ is about $5\times10^{-17}$. On common binary64 Python builds, direct `1-u` rounds to the nearest representable value and yields roughly $5.551115123125783\times10^{-17}$, whereas `-log1p(-u)/2` yields about $5.0\times10^{-17}$. The discrepancy is substantial relative to this tiny quantile even though both numbers look close to zero on a broad plot.

## 4.10 Floating point changes paths

Finite precision creates several different hazards. A decimal input may not have an exact binary representation. A large intermediate can overflow to infinity; a tiny positive intermediate can underflow to zero. Subtracting nearly equal rounded values can cancel useful digits. Even addition is not associative in finite arithmetic: in ordinary binary64, `(1e16 + -1e16) + 1` gives `1`, while `1e16 + (-1e16 + 1)` gives `0`, because the inner `-1e16 + 1` rounds back to `-1e16`. This is a three-number calculation with the same mathematical sum in either order. [Goldberg's floating-point article](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) develops the underlying representation and rounding concepts.

If a different summation order changes a computed log acceptance ratio just across a threshold, it changes that decision. A changed decision alters the next state of a Markov chain and potentially all later states. This prevents an unconditional promise of *bitwise* replay across hardware, software versions, and parallel reduction orders. It does not imply that the final statistical conclusion must change materially; that is a separate empirical question. Exact-invariant mathematical algorithms still need numerical scrutiny, while deliberate discretization approximations have an additional, conceptually separate bias. [NumPy's compatibility policy](https://numpy.org/doc/stable/reference/random/compatibility.html) illustrates why generator and environment details belong in reproducibility claims.

Record the generator type, seed or saved state, Python and library versions, model and parameter values, sample count, and call order. For parallel work record the mapping from logical job IDs to streams. A same-path replay asks whether the exact draw and arithmetic sequence can be reproduced in a specified environment; a scientific replication asks whether a conclusion survives reasonable changes of streams and implementation. These are related but different checks.

## 4.11 Run and inspect the experiment

Run `python examples/ch04.py` from the book root. The script seeds two explicit generators, produces 20,000 Beta$(2,1)$ values by each method, prints both means and the rejection acceptance fraction, normalizes the log weights above, evaluates both exponential quantile formulas, computes the finite-grid exponential ceiling, and restores a saved generator state to verify a three-draw replay. The script uses only the standard library and has a hard proposal cap. On Python 3.14.5, the recorded run printed inverse and rejection means `0.668025` and `0.664369`, with acceptance fraction `0.498703`; the theoretical values are $2/3$ and $1/2$. The displayed log weights were `0.665241, 0.244728, 0.090031`, the rate-two ceiling was `18.368400`, and state replay matched. Other interpreter environments can change the last digits or streams, which is why the script prints its Python version.

The `monte-carlo` lab provides another view of seeded simulation. Repeat a run, then change the sample size and watch the estimate vary. A fixed seed makes a specified sequence reproducible; a larger sample count consumes more of that sequence and can change the estimate. This lab illustrates variability and replay. It does not implement this chapter's rejection sampler or expose floating-point modes; use the executable for those details.

<div class="mcmc-lab" data-lab="monte-carlo"></div>

A short audit asks different questions at different levels. Algebra can verify the envelope $2x\leq2$ globally and the acceptance probability $1/2$. A saved-state replay can verify local generator continuation. The log-weight routine can check that its probabilities sum to one within arithmetic tolerance, while refusing all-zero mass and `NaN`. Sample moments and plots can catch gross bugs but cannot prove exact distributional correctness or PRNG quality. [Chapter 05](05-monte-carlo.md) develops uncertainty calculations for iid Monte Carlo averages; later MCMC chapters add dependence and convergence questions.

## Exercises

<div class="exercise" id="mcmc-04-numerics-ex-1">

### 1. A step CDF

Construct a sampler for categories A, B, C with probabilities $(0.2,0.5,0.3)$ from a single $U\in[0,1)$. State what your code does at $U=0.2$ and $U=0.7$.

<details>
<summary>Solution</summary>

Return A if $U<0.2$, B if $0.2\leq U<0.7$, and C otherwise. Thus $0.2$ maps to B and $0.7$ to C. The ideal uniform assigns probability zero to either exact boundary, but the finite implementation still needs this explicit rule. The interval lengths give the requested probabilities.

</details>

</div>

<div class="exercise" id="mcmc-04-numerics-ex-2">

### 2. A looser rejection envelope

For the Beta$(2,1)$ target and uniform proposal, replace $C=2$ by $C=3$. Find the accepted density, acceptance probability, and expected number of proposals.

<details>
<summary>Solution</summary>

The test becomes $V<2X/3$. Its joint accepted density per attempt is $(2x/3)$ on $[0,1]$, so the success probability is $\int_0^1 2x/3\,dx=1/3$. Dividing by $1/3$ returns the target density $2x$. The geometric mean proposal count is $3$.

</details>

</div>

<div class="exercise" id="mcmc-04-numerics-ex-3">

### 3. An invalid envelope

Someone uses $C=1$ for that target and caps the proposed acceptance probability at one. What density do accepted values have?

<details>
<summary>Solution</summary>

The actual acceptance function is $\min(1,2x)$. Its integral is $\int_0^{1/2}2x\,dx+\int_{1/2}^1 1\,dx=1/4+1/2=3/4$. Conditional on acceptance, the density is $(4/3)\min(1,2x)$, which is flat above $1/2$ rather than increasing as $2x$. Capping a violated ratio changes the target.

</details>

</div>

<div class="exercise" id="mcmc-04-numerics-ex-4">

### 4. Shifted log weights

Add the same finite constant $c$ to $(-1000,-1001,-1002)$. Prove that normalized weights do not change mathematically. Does this prove every finite-precision calculation is identical?

<details>
<summary>Solution</summary>

Writing $L=\log\sum_i e^{a_i}$, the shifted log sum is $L+c$, hence $(a_i+c)-(L+c)=a_i-L$. Exponentiation yields identical mathematical probabilities. With an extremely large $c$, however, rounding may make distinct stored $a_i+c$ values equal, so a finite-precision calculation need not preserve the differences.

</details>

</div>

<div class="exercise" id="mcmc-04-numerics-ex-5">

### 5. Copied streams

Two jobs each draw $n$ values from generators with identical state, then calculate their sample means. What is their average, and why is it wrong to call the jobs two independent replications?

<details>
<summary>Solution</summary>

The sequences and means are identical, say both $M$. Their average is $(M+M)/2=M$. No new random variation was observed, so treating the pair as independent would understate the variability of a replication average. Distinct seeds are useful for replayable separation but, by themselves, are not a mathematical independence proof.

</details>

</div>

<div class="exercise" id="mcmc-04-numerics-ex-6">

### 6. Audit three edge cases

For a tiny positive $\epsilon$, compare `log(1+epsilon)` with `log1p(epsilon)`. Then define the correct behavior when log-sum-exp receives only $-\infty$, and when it receives `NaN`.

<details>
<summary>Solution</summary>

The addition `1+epsilon` may round to one, making `log(1+epsilon)` zero even while $\log(1+\epsilon)>0$; `log1p(epsilon)` is designed to retain accuracy near zero. All $-\infty$ entries mean total unnormalized mass zero, so log-sum-exp is $-\infty$ and normalized weights are undefined. `NaN` should raise a visible error. Neither case warrants a fallback uniform distribution.

</details>

</div>

## Key takeaways

- Sampling proofs use ideal uniforms; PRNG state, finite outputs, and transformations are implementation choices to audit. A finite inverse-transform grid can omit an extreme tail.
- Inversion handles jumps as well as smooth CDFs. Rejection sampling is exact in its ideal model only when a valid global envelope covers target support.
- Log products, shifted log sums, `log1p`, and explicit edge-case handling prevent specific numerical failures; they do not erase modeling or finite-run error.
- A seed supports replay under a specified call sequence and environment. Independent scientific replications require a deliberate stream design and an uncertainty analysis.
