# 18. Software engineering for samplers

An MCMC algorithm can be mathematically valid and still produce a wrong answer when translated into software. A stale density cache, an omitted Jacobian, a checkpoint that saves the position but not the random generator, or an output writer that discards rejections can each alter what a user sees. These failures often leave smooth looking trace plots. Engineering a sampler means making its mathematical obligations and its computational state visible enough to test.

**Learning goals.** After this chapter, you should be able to specify a transition's inputs and outputs; test a small kernel against an exact invariant distribution; build a reproducible continuation checkpoint; distinguish an invariant kernel from useful exploration; and compare implementations using accuracy and computational cost for a stated estimand.

**Prerequisites.** We use [random streams and floating-point computation](04-numerics.md), [finite-chain invariance](07-finite-chains.md), [Metropolis–Hastings](09-metropolis-hastings.md), [Monte Carlo standard errors](13-mc-error.md), [convergence diagnostics](14-diagnostics.md), [warmup and adaptation](15-adaptation.md), and [workflow calibration](17-workflow.md). The chapter's Python example uses only the standard library.

## 18.1 The transition is the unit of reasoning

Imagine that a sampler stores both a position $x$ and its cached value $\ell_x=\log\tilde\pi(x)$. At one step it accepts a proposal $y$, updates $x$ to $y$, but forgets to replace $\ell_x$ with $\ell_y$. The next acceptance decision compares $\ell_z$ with a density value belonging to a different position. No amount of plotting can make that transition the intended Metropolis–Hastings (MH) kernel. The pair $(x,\ell_x)$ must be treated as one computational state with the invariant $\ell_x=\log\tilde\pi(x)$.

A useful conceptual interface is

```text
step(state, rng, config) -> (new_state, info)
```

Here `state` contains everything the *next transition* needs, `rng` supplies the random stream, and `config` identifies a fixed target and algorithm settings. `info` describes what happened, such as whether a proposal was accepted, its log acceptance ratio, and counts of costly evaluations. The caller, or driver, owns the number of iterations, warmup/sampling phase, recording, and checkpoints. It should record the returned position after **every** transition, including rejection. This interface is an engineering choice that helps expose obligations; a valid Markov kernel need not use this particular programming style. BlackJAX's documented kernel architecture is a larger example of explicit state and separate transition information, using a functional random key rather than Python's mutable generator. [BlackJAX design principles](https://blackjax-devs.github.io/blackjax/developer/design_principles.html)

The *mathematical state* may differ from the visible parameter vector. An auxiliary-variable method can require momentum, a retained likelihood estimator, or other variables to make its transition Markov. Adaptation adds running statistics during warmup. A checkpoint must preserve the actual continuation state even if output files show only parameters. The pseudo-marginal example in [Chapter 27](27-pseudo-marginal.md) makes this especially important: retaining the estimated likelihood on rejection is part of the algorithm, not a cache optimization.

## 18.2 Contracts for the target and proposal

Before implementing acceptance, write a contract for the target callback. What measure is its density relative to? Are coordinates constrained or unconstrained? What are their dimensions and numerical types? Does it return an unnormalized log density, and under which model and data version? Which values signal an impossible point? Returning $-\infty$ outside support is natural; returning `NaN` for a numerical error must trigger a reported failure, because treating it as an ordinary rejection silently changes the computation. Our small example requires an initial point with finite log density. Production code also needs a deliberate policy for overflow, invalid gradients, and recoverable target errors.

For proposal density $q(y\mid x)$, the MH acceptance probability is

$$
\alpha(x,y)=\min\left\{1,\frac{\tilde\pi(y)q(x\mid y)}{\tilde\pi(x)q(y\mid x)}\right\}.
$$

Assume both proposal directions and target densities in this ratio are defined for the proposed pair. Numerically compare a uniform draw through

$$
\log\alpha(x,y)=\min\{0,\ell_y-\ell_x+\log q(x\mid y)-\log q(y\mid x)\}.
$$

For a symmetric random walk, the proposal terms cancel; they do **not** cancel merely because both directions use the same family of distributions. For example, a state-dependent scale normally gives different forward and reverse densities. On rejection, return the entire old state, including its cache. On acceptance, return the proposed state with its proposed cache. A cached value is valid only for the same target, data, coordinate transformation, and settings that produced it. If a target evaluation itself is random, ordinary MH with a freshly redrawn noisy log density is generally not justified; [Chapter 27](27-pseudo-marginal.md) constructs the required extended target under specific conditions.

For deterministic target evaluations, one target call per proposal is possible because the current value is cached. That efficiency has a testing cost: assert cache consistency in tests and validate it at checkpoint restoration. For transformations, test the Jacobian contribution and the map's domain as in [Chapter 16](16-geometry.md). A log density can be internally consistent yet represent the wrong posterior because the model or reference measure was wrong.

## 18.3 Test obligations before asking statistical questions

Tests are most informative when they name a failure they could detect. Begin with target values you can calculate by hand, including support boundaries and transformed coordinates. Then prescribe proposal and uniform values so a single step has a known acceptance outcome. Check both branches and assert the state/cache pair after each. Check asymmetric proposal ratios on a tiny problem where forward and reverse probabilities differ. Deliberately remove the reverse proposal term or overwrite the cache in a temporary mutation: the corresponding test should fail. These checks are deterministic and point to a line of logic.

Where a gradient enters a later kernel, compare its directional derivative $v^\mathsf{T}\nabla\ell(x)$ with a centered difference $[\ell(x+hv)-\ell(x-hv)]/(2h)$ at interior points. Vary $h$ within a sensible range: too large has truncation error, too small magnifies floating-point cancellation. Such a check can catch sign errors, missing likelihood terms, and transformation mistakes, though it cannot prove a gradient correct everywhere. The HMC state in [Chapter 20](20-hmc.md) also caches gradient-related information.

Keep deterministic and statistical tests separate. A test that estimates a mean from 10,000 correlated draws may sometimes fail because of legitimate Monte Carlo variation, and may pass despite a rare but serious bug. It is useful as an additional experiment after local obligations are checked. Statistical acceptance thresholds should be selected before seeing the run, account for uncertainty and multiple comparisons, and never be rescued by retrying until a pass appears.

### Equivalent targets as a test oracle

Sometimes the expected trajectory is hard to calculate, but a relationship between two trajectories is exact. This is a *metamorphic test*: alter the inputs in a way that requires a known change, or no change, in the output. For a fixed symmetric random-walk proposal, replacing the unnormalized log density by $\ell_c(x)=\ell(x)+c$ must preserve every log acceptance ratio because $(\ell(y)+c)-(\ell(x)+c)=\ell(y)-\ell(x)$. The same proposal and uniform draws should therefore give identical acceptance decisions and positions. This follows directly from the MH rule; it tests an implementation obligation, not convergence. Grosse and Duvenaud advocate modular, local checks of MCMC code, and research on scientific-software testing describes metamorphic relations when a direct output oracle is unavailable. [Hastings, 1970](https://doi.org/10.1093/biomet/57.1.97), [Grosse and Duvenaud, *Testing MCMC code*](https://arxiv.org/abs/1412.5218), [*Exploratory Metamorphic Testing for Scientific Software*](https://pmc.ncbi.nlm.nih.gov/articles/PMC7252536/)

A second relation also checks coordinates. Let $z=x+b$ and $\ell_{b,c}(z)=\ell(z-b)+c$. A Gaussian random walk with the same increments from $z_0=x_0+b$ should return $z_t=x_t+b$ at every step, with matching acceptance flags and log ratios; translation has unit Jacobian. For example, at $x=1/2$, the standard-normal target has $\ell(1/2)=-1/8$. With increment $1/4$, the proposal is $3/4$ and $\log\alpha=-9/32+1/8=-5/32$; a prescribed uniform $0.9>e^{-5/32}$ rejects. Under $b=2,c=7$, the points become $5/2$ and $11/4$, their log densities become $7-1/8$ and $7-9/32$, and the same rejection must return $5/2$ with its original cache. An increment $-1/2$ instead proposes zero and must be accepted in both coordinates. The executable oracle in [examples/ch18.py](examples/ch18.py) checks both branches with prescribed draws. Binary-exact test coordinates avoid mistaking floating-point roundoff for a kernel defect. For general coordinates, compare transformed values within a stated numerical tolerance. These relations can detect some cache, normalization, and coordinate mistakes; they cannot validate the target model or catch every shared bug.

## 18.4 Worked example: a three-state invariance oracle

Take states $0,1,2$ with target probability vector $\pi=(1/2,1/3,1/6)$. From each state propose either *other* state with probability $1/2$. Because $q(j\mid i)=q(i\mid j)=1/2$, acceptance from $i$ to $j$ is $\min(1,\pi_j/\pi_i)$. For example, $P_{01}=(1/2)(2/3)=1/3$ and $P_{02}=(1/2)(1/3)=1/6$. A rejection is a self transition, so $P_{00}=1-1/3-1/6=1/2$. Applying the same rule to the other rows gives

$$
P=\begin{pmatrix}
1/2&1/3&1/6\\
1/2&1/4&1/4\\
1/2&1/2&0
\end{pmatrix}.
$$

All entries are nonnegative and every row sums to one. Multiplication verifies invariance directly:

$$
\pi P=\left(\tfrac14+\tfrac16+\tfrac1{12},\;
\tfrac16+\tfrac1{12}+\tfrac1{12},\;
\tfrac1{12}+\tfrac1{12}\right)
=\left(\tfrac12,\tfrac13,\tfrac16\right)=\pi.
$$

This check is a powerful implementation oracle. Enumerate the probabilities produced by a finite-state implementation and compare each row and the residual $\max_j|\sum_i\pi_iP_{ij}-\pi_j|$ with an explicit arithmetic tolerance. Detailed balance, $\pi_iP_{ij}=\pi_jP_{ji}$, is another valid check for this MH kernel. It is **sufficient** for invariance, not necessary for every sampler: a valid nonreversible chain need not pass a pairwise balance test.

Now suppose the output writer stores a state only when a proposal is accepted. The escape probabilities are $a=(1/2,3/4,1)$. The accepted-move or *jump* chain has stationary masses proportional to $\pi_i a_i=(1/4,1/4,1/6)$, hence

$$
\pi^{\mathrm{jump}}=(3/8,3/8,1/4).
$$

The recorded histogram would overrepresent state 2: it is easy to leave, but every visit appears once while long holding times elsewhere disappear. Keeping each repeated state restores the original time average. Alternatively, a jump-chain analysis must weight each visited state by its holding time; merely calling accepted moves "samples" is wrong. The finite oracle in [examples/ch18.py](examples/ch18.py) computes $P$ and checks its invariant residual.

Invariance alone is a limited contract. The identity matrix $I$ satisfies $\pi I=\pi$ for every distribution $\pi$, while a chain started at state 0 never visits another state. A finite irreducible, aperiodic chain has the stronger convergence behavior described in [Chapter 7](07-finite-chains.md); a small numerical residual for a represented matrix does not establish that behavior, nor does it prove a continuous-state implementation correct.

## 18.5 From a local oracle to end-to-end validation

For a continuous target with an independent exact generator, draw many independent $X\sim\pi$, apply *one* implemented transition to each, and compare selected features of the outputs with those of the inputs or with known values. This tests a stationarity implication without relying on a long chain's mixing. It still has finite power: matching a mean and variance cannot certify a distribution, and many simultaneous comparisons increase false alarms. The identity kernel passes this experiment perfectly. One-step checks therefore belong beside exploration checks, not in their place.

End-to-end tests ask a different question. A conjugate Bayesian model can give posterior means, variances, and predictive quantities from independent algebra. Simulate a dataset, construct the model target, transform its parameters, initialize, run multiple chains, and compare estimands with a Monte Carlo uncertainty that respects serial correlation. An error here may come from the likelihood, data handling, transformation, or transition. An independent reference implementation reduces the chance that the test and sampler share the same bug. [Chapter 17](17-workflow.md) develops simulation-based calibration (SBC) across datasets; the original SBC paper motivates this wider algorithm validation strategy. [Talts et al., 2018](https://arxiv.org/abs/1804.06788)

For exact posterior draws, the rank of a simulated generating parameter among posterior draws has an exchangeability argument. Strongly correlated MCMC output does not automatically meet that argument as an iid reference sample; rank patterns then need careful interpretation. Likewise, a plausible trace, an acceptable diagnostic, or a close known-answer estimate is evidence about the run, not proof of convergence from arbitrary starts. Keep the target's modeling assumptions separate from kernel correctness. An exact sampler for an ill-chosen model faithfully answers the wrong scientific question.

## 18.6 Random streams are experimental inputs

A seed is an identifier for a stream initialization, not a complete description of every random choice made during a run. Python's `random.Random` permits a dedicated generator instance, and `getstate`/`setstate` capture and restore its full internal state. Our example gives one generator to the chain. If a progress display or diagnostic callback draws from that same object, later proposals change. Give simulation, chains, calibration replicates, and visualization distinct streams. [Python `random` documentation](https://docs.python.org/3/library/random.html)

In parallel work, assign streams to *logical* chain and replicate IDs, independent of which worker gets scheduled first. A construction such as NumPy's `SeedSequence` spawning can organize this hierarchy; it is a probabilistic stream-separation method, not a mathematical guarantee that every imaginable pair of streams is disjoint. Save the stream's construction, IDs, and library version for reproduction. Avoid the claim that distinct hand-picked integer seeds establish independence. [NumPy parallel random generation](https://numpy.org/doc/stable/reference/random/parallel.html)

Exact bitwise repetition has a narrower scope than scientific reproducibility. Different software releases, PRNG implementations, hardware, floating-point reductions, or parallel execution order can alter a trajectory. The Stan reproducibility notes explicitly discuss the need to control the computational environment. For scientific reports, retain enough metadata to repeat the analysis and assess numerical differences, even when bitwise equality across machines is unavailable. [Stan reproducibility notes](https://mc-stan.org/docs/reference-manual/reproducibility.html)

## 18.7 Worked example: checkpointing a normal-target chain

For $\pi(x)\propto\exp(-x^2/2)$, propose $Y=X+\varepsilon$ with $\varepsilon\sim N(0,s^2)$ and fixed $s=1.4$. Symmetry gives $\log r=-(Y^2-X^2)/2$. The example starts at $x=0$ with a dedicated generator seeded by 1818. It runs 600 transitions, saves a checkpoint, restores it, and runs 400 more. A separate uninterrupted run executes 1,000 transitions from the same initial state and generator seed. Equality compares **all** recorded positions, including repeated ones after rejection, not just the final estimate.

The checkpoint stores the position, cached log density, full generator state, target identifier, proposal scale, completed iteration number, and sampling phase. It is written to a temporary file in the same directory and replaced only after writing and flushing the complete record. Restoration checks target and scale compatibility and recomputes the cached log density. The demonstration uses a trusted local JSON checkpoint for the fixed normal target; its injectable target callback is used only by the separate deterministic oracle, not by checkpoint restoration. An application receiving untrusted files would need schema bounds and stricter validation. The code saves at a completed transition boundary so there is no ambiguity about whether step 600's random values were consumed. Run it with `python examples/ch18.py`.

Why does exact continuation work? Treat the computational state $C_t$ as the position, cache, and generator state together. With the same transition code and numerical environment, $C_{t+1}=F(C_t)$ is deterministic. The saved $C_{600}$ equals the uninterrupted run's $C_{600}$, so induction gives equal later states. A negative control restores the saved position but reseeds a fresh generator. Its next random proposal differs, and its tail does not equal the uninterrupted tail. This does not mean the fresh-stream chain is invalid: it means it is a new stochastic continuation, not the same trajectory. An uninterrupted 1,000-step run makes 1,001 target evaluations: one for initialization and one for each proposal, regardless of acceptance. Restoring a checkpoint adds one evaluation to validate its cache; the printed transition count excludes that validation call.

An adaptive warmup checkpoint needs more: running means/covariances, scale adaptation statistics, warmup schedule, and any other state that determines the next kernel. A production checkpoint should also identify model/data versions, variable transformations, numeric and software environment, and output position. Output durability is separate: a valid sampler checkpoint does not guarantee that a trace file and checkpoint agree after a crash. Coordinate them through iteration IDs, atomic commits, or a documented recovery rule. [Chapter 15](15-adaptation.md) explains why warmup settings should be frozen before ordinary post-warmup inference.

## 18.8 Record a trace that can be interpreted later

A useful record is indexed by chain, iteration, and variable. Mark warmup separately from retained sampling, and preserve rejected-state repeats. Alongside positions, retain enough transition information to explain failures: acceptance flags, log density, target or gradient evaluation counts, numerical error codes, and adaptation settings when relevant. Store a schema version and the model, data, configuration, and environment identifiers needed to interpret it. emcee's documented storage backends illustrate the distinction between keeping a chain and retrieving its last sampler state for continuation. [emcee backend documentation](https://emcee.readthedocs.io/en/stable/user/backends/)

Thinning can reduce storage or plotting cost, but it does not repair poor exploration or create independent draws. If storage is limited, online means and variances can summarize *predeclared* estimands, with suitable autocorrelation-aware uncertainty machinery. They cannot reconstruct a trace for a newly chosen tail event or diagnose an unrecorded mode visit. When using ensembles, retain walker and iteration labels; flattening walkers into a single long array does not turn interacting walkers into independent chains. Output design is part of the inferential design because omitted information cannot be checked after the run.

## 18.9 Benchmark useful precision per cost

Speed measured as transitions per second is not the objective. For an estimand $f$, suppose the stationary chain has finite positive marginal variance $\gamma_f(0)$, summable autocovariances, and an applicable Markov-chain central limit theorem. Then the asymptotic variance and approximate Monte Carlo standard error are

$$
\sigma_f^2=\gamma_f(0)+2\sum_{k=1}^{\infty}\gamma_f(k),\qquad
\operatorname{MCSE}(\bar f_N)\approx\sqrt{\frac{\sigma_f^2}{N}},\qquad
\operatorname{ESS}_f=\frac{N\gamma_f(0)}{\sigma_f^2}.
$$

The ESS quotient assumes $\sigma_f^2>0$; zero asymptotic variance is a degenerate case requiring separate treatment. ESS is specific to $f$ and depends on a credible estimate of serial covariance; it may exceed $N$ for negatively correlated output. [Chapter 13](13-mc-error.md) gives estimation methods and their limits. A benchmark could report $\operatorname{ESS}_f/T$, where $T$ is elapsed time with a stated definition. In an illustrative accounting table, A yields estimated ESS 400 in 2 seconds, or 200 ESS/second; B yields 900 in 6 seconds, or 150 ESS/second. Those invented values show the arithmetic, not an empirical ranking. B might still have lower error for another estimand, while both estimates might be unreliable if a mode was missed.

Compare on the same target, parameterization, estimands, initial-state policy, and adaptation budget. State whether compilation, warmup, data loading, and diagnostics are included in time. Record hardware, software versions, and density/gradient evaluations as well as wall time. Use independent replicates and uncertainty across them. Where exact answers exist, report bias and mean squared error; include failures and noncompletion. For approximate algorithms, a high ESS can coexist with discretization or modeling bias, so ESS alone cannot rank total accuracy. Acceptance rate is useful for diagnosing a particular proposal, but a rate near one can reflect tiny steps and poor exploration. [Chapter 47](47-benchmark-lab.md) expands this into comparative experiments.

## 18.10 Choosing tools and releasing evidence

Mature implementations offer different working styles. Stan provides a probabilistic modeling language and integrated inference workflow; BlackJAX exposes composable numerical kernels and explicit transition state; emcee supplies ensemble sampling and storage backends. Match a tool to target structure, differentiation needs, scale, and the evidence you need to inspect. Library choice does not validate a model, guarantee effective exploration, or relieve a user from checking outputs. The linked BlackJAX design page describes its current main-line architecture, so treat it as a design example rather than a promise about every released version. [Stan reference manual](https://mc-stan.org/docs/reference-manual/reproducibility.html), [BlackJAX design principles](https://blackjax-devs.github.io/blackjax/developer/design_principles.html), [emcee backends](https://emcee.readthedocs.io/en/stable/user/backends/)

Before sharing a sampler, give another reader a reviewable package: a written target/proposal contract; deterministic tests of acceptance, rejection, support, cache, and transformations; a finite or known-answer oracle where possible; failure injection for nonfinite evaluations; exact same-environment restart equivalence; a trace schema and environment record; and a benchmark with stated estimands, costs, uncertainty, and failures. Passing these checks builds evidence for a particular implementation and experiment. It does not replace mathematical reasoning about the kernel or scientific criticism of the model.

### Interactive lab: proposal scale and retained states

In the Metropolis lab, change the proposal scale and watch accepted moves and repeated states. Compare a small scale with a larger one: what changes in acceptance and in the distance travelled over a fixed number of transitions? Explain why neither acceptance rate nor apparent speed alone ranks the precision of an estimate. The lab illustrates one-dimensional proposal behavior; it does not implement checkpoints or a production ESS calculation. Use the executable example above to inspect restart equality.

<div class="mcmc-lab" data-lab="metropolis"></div>

## Exercises

<div class="exercise" id="mcmc-18-sampler-engineering-ex-1">

**1. Enumerate an oracle.** For the three-state target and proposal in Section 18.4, calculate each off-diagonal transition probability, fill the diagonal, and verify detailed balance for states 0 and 2.

<details>
<summary>Solution</summary>

For $i\ne j$, $P_{ij}=\frac12\min(1,\pi_j/\pi_i)$. Thus the off-diagonal pairs are $(P_{01},P_{10})=(1/3,1/2)$, $(P_{02},P_{20})=(1/6,1/2)$, and $(P_{12},P_{21})=(1/4,1/2)$. Row completion gives diagonal $(1/2,1/4,0)$. For states 0 and 2, $\pi_0P_{02}=(1/2)(1/6)=1/12=(1/6)(1/2)=\pi_2P_{20}$.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-2">

**2. Delete the rejections.** Derive the accepted-move stationary distribution and explain which state is most overrepresented relative to its target mass.

<details>
<summary>Solution</summary>

The exit probabilities are $(1-P_{00},1-P_{11},1-P_{22})=(1/2,3/4,1)$. Multiply by $\pi$ to get $(1/4,1/4,1/6)$ and normalize their sum $2/3$. The jump distribution is $(3/8,3/8,1/4)$. State 2 rises from target mass $1/6$ to $1/4$ because its holding time is shortest.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-3">

**3. A misleading invariance test.** Construct a kernel that passes $\pi P=\pi$ for every $\pi$ but cannot explore a state space with at least two states. Which extra property fails?

<details>
<summary>Solution</summary>

Take $P=I$. Matrix multiplication gives $\pi I=\pi$ for any $\pi$. Every trajectory remains at its initial state, so the chain is reducible and cannot converge to a nondegenerate target from an arbitrary single-state start.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-4">

**4. Interrupt warmup.** List what must be saved to resume an adaptive random-walk MH warmup exactly, and state a test for the checkpoint.

<details>
<summary>Solution</summary>

Save position and cached density, full generator state, iteration and warmup phase, target/data/configuration identifiers, and all adaptation state: running mean, covariance and count, scale update variables, and schedule position. In the same software and numerical environment, run from a seed uninterrupted and compare every transition with a run interrupted and restored at a completed transition. A final-state comparison alone is weaker than sequence equality.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-5">

**5. A suspiciously efficient sampler.** Implementation A has estimated ESS 1,000 for a coordinate under a fixed budget, but none of its chains visits a known second mode. Implementation B has estimated ESS 400 and crosses modes. What evidence should decide the comparison?

<details>
<summary>Solution</summary>

The coordinate ESS for A estimates local serial dependence in the visited region and may be unreliable for the full target. Compare mode-sensitive indicators and other relevant estimands, runs from dispersed starts, independent replicates, known-answer bias where available, MCSE, failure rates, and cost under the same budget. Do not choose A solely from its larger coordinate ESS; first establish that both runs are exploring the intended distribution.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-6">

**6. A flaky statistical check.** A correctly calibrated test rejects its null at nominal level 5% in about one of twenty independent runs. How should a sampler test suite handle this fact?

<details>
<summary>Solution</summary>

An occasional rejection is expected even when the implementation is correct. Put deterministic acceptance, cache, and finite-oracle checks in the routine suite. For a statistical validation study, predeclare the statistic and threshold, retain the seed and result, account for multiple tests, and assess repeated independent runs. Retrying until one result passes conceals evidence rather than calibrating a test.

</details>

</div>

<div class="exercise" id="mcmc-18-sampler-engineering-ex-7">

**7. Change coordinates, keep the decision.** A symmetric random-walk MH step for $\ell(x)=-x^2/2$ starts at $x=1/2$, proposes an increment $1/4$, and uses uniform $u=0.9$. Define $z=x+2$ and $\ell_z(z)=-(z-2)^2/2+7$. Calculate both log acceptance ratios and returned positions. What does disagreement between the two implementations establish?

<details>
<summary>Solution</summary>

The original proposal is $y=3/4$ and $\log\alpha=\min(0,-9/32+1/8)=-5/32$. Since $0.9>e^{-5/32}\approx0.855$, it rejects and returns $x=1/2$. The translated start and proposal are $z=5/2$ and $z'=11/4$; adding 7 to both log densities cancels, so its log ratio is also $-5/32$ and it returns $z=5/2$. Disagreement under identical prescribed random inputs violates this necessary relationship and identifies an implementation or test-harness defect. Agreement alone does not prove the sampler correct.

</details>

</div>

## Key takeaways

The transition contract includes more than a parameter vector: cached values, auxiliary variables, random-generator state, and phase can determine the next step. Test local algebra, state updates, and equivalent-target relationships deterministically, then use invariance and known-answer experiments for broader evidence. Preserve rejected states, checkpoint full continuation state, and compare samplers by accuracy for stated estimands at stated cost. Each result has a scope: invariant kernels, finite-run uncertainty, approximation error, and model assumptions remain distinct questions.
