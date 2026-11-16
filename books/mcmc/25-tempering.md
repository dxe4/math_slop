# 25. Multimodality and tempering

**Learning goals.** By the end of this chapter, you should be able to identify an estimand harmed by missed modes, choose a proper temperature path, derive and implement a parallel-tempering swap, use energy fluctuations to assess a temperature ladder, interpret temperature-travel diagnostics, distinguish simulated tempering from cooling, and derive thermodynamic integration. Prerequisites are densities and conditioning ([Chapter 02](02-probability.md)), stable log calculations ([Chapter 04](04-numerics.md)), invariance and Metropolis–Hastings ([Chapters 07–09](09-metropolis-hastings.md)), kernel composition ([Chapter 12](12-kernel-design.md)), and Monte Carlo error and warmup ([Chapters 13–15](15-adaptation.md)).

## 1. The quantity that a stuck chain gets wrong

Consider an equally weighted mixture of two narrow normal distributions centered at $-6$ and $6$. A random-walk chain started near $6$ may describe the right peak beautifully: its trace moves, its within-peak autocorrelation falls, and its local acceptance is healthy. Yet an estimate of $P(X>0)$ would be nearly one instead of one half. An estimate of $E[X]$ would be near six instead of zero. Local movement and the probability assigned to a basin are separate computational tasks.

The difficulty is a *bottleneck*: paths proposed by a local kernel between the peaks pass through states with low target density. A small proposal rarely reaches the other peak; a huge proposal generally lands in a low-density place. The height of a density peak alone does not determine its probability mass; width matters too. Consequently, seeing both modes does not establish their relative weights. Conversely, multimodality need not damage every question. If $h(x)$ has nearly the same conditional expectation in each basin, an inaccurate basin weight may barely affect $E[h(X)]$. For a label-switched mixture, predictions invariant to relabeling can be stable even when component labels do not mix; [Chapter 38](38-mixtures.md) returns to that symmetry. State the estimand before declaring a trace satisfactory.

Tempering creates a family of distributions in which a barrier can be easier to cross, then uses transitions that preserve a larger joint distribution to carry that movement back to the original target. It can fail if the hot distribution is still trapped, if adjacent temperatures have little overlap, or if the family never reaches an important region. None of the diagnostics below proves that all modes have been found.

## 2. Build a proper path, not just a flatter formula

Write the desired density as $\pi_1(x)=q_1(x)/Z_1$, relative to a fixed measure $\mu$. The *inverse temperature* $\beta$ runs from zero (hot) to one (cold). One common construction raises the entire density kernel to a power: $q_\beta(x)=q_1(x)^\beta$. This is useful only where $Z_\beta=\int q_\beta\,d\mu$ is finite and positive. If $q_1$ is a Cauchy kernel on $\mathbb R$, its tails are proportional to $|x|^{-2}$, so $q_1^\beta$ is integrable only for $\beta>1/2$. At $\beta=0$, the expression is constant on an infinite-volume space, not a uniform probability distribution. A cold proper target does not make every hotter power proper.

For a Bayesian target $q_1(\theta)=p(\theta)L(\theta)$, *likelihood tempering* instead takes $q_\beta(\theta)=p(\theta)L(\theta)^\beta$. A proper prior supplies $\pi_0=p$, provided the intervening normalizers are finite. Heating leaves prior support intact: if $p(\theta)=0$, no temperature opens that region. The two constructions generally have different intermediate distributions and therefore different swap behavior. [Bouchard-Côté's parallel-tempering notes](https://www.stat.ubc.ca/~bouchard/courses/stat520-sp2020-21/T18-pt.html) present this prior-to-posterior route.

A more general reference path is

$$
q_\beta(x)=q_0(x)^{1-\beta}q_1(x)^\beta,
\qquad \pi_\beta(x)=q_\beta(x)/Z_\beta.
$$

Here $q_0$ should describe a distribution that we can explore, $q_0$ and $q_1$ use the same dominating measure, and $0<Z_\beta<\infty$ for every chosen $\beta$. For the simple geometric path, compatible positive support is helpful: a point where $q_0=0$ remains unavailable at every $\beta<1$. If the endpoints have different support, define zero powers and endpoint densities carefully and verify that the proposed path actually connects the regions needed for inference. A mathematically valid path can still be a poor computational path because its intermediate mass concentrates in a different place.

## 3. A product target creates the exchange move

Choose $0\leq\beta_0<\cdots<\beta_K=1$, with every chosen $\pi_{\beta_k}$ proper. Place a state $x_k$ in each *temperature slot* and target the product

$$
\Pi(x_0,\ldots,x_K)=\prod_{k=0}^K\pi_{\beta_k}(x_k).
$$

The cold slot $K$ has marginal $\pi_1$. A local transition at slot $k$ that preserves $\pi_{\beta_k}$ preserves $\Pi$ when the other slots are held fixed. It can be a random-walk MH step, a suitable Gibbs step, or another invariant kernel. In parallel tempering, the slots can be updated on different processors, but simultaneous hardware is not part of the probability argument. The interacting-chain construction is associated with [Geyer's 1991 work](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/TemperAnneal/Geyer.1991.pdf); the product-target derivation also appears in [Bouchard-Côté's notes](https://www.stat.ubc.ca/~bouchard/courses/stat520-sp2020-21/T18-pt.html).

Now propose exchanging $x_i$ and $x_j$, leaving every other slot fixed. If this pair is selected independently of its values and the exchange is its own reverse, its proposal is symmetric. The unchanged product factors cancel, giving

$$
R_{ij}=\frac{q_{\beta_i}(x_j)q_{\beta_j}(x_i)}
{q_{\beta_i}(x_i)q_{\beta_j}(x_j)},
\qquad \alpha_{ij}=\min(1,R_{ij}).
$$

All $Z_{\beta}$ factors cancel: each temperature appears once before and once after the swap. This identity is exactly the Metropolis rule on the *joint* state, not an approximation based on the cold marginal. For likelihood tempering it reduces to

$$
\log R_{ij}=(\beta_i-\beta_j)
\{\log L(x_j)-\log L(x_i)\}.
$$

For an energy family $q_\beta(x)=q_0(x)e^{-\beta V(x)}$, it becomes $(\beta_i-\beta_j)\{V(x_i)-V(x_j)\}$. The algebra requires the same reference factor $q_0$ in every slot. For another path, use the cross-evaluation formula rather than substituting an energy difference.

## 4. Worked example: a double well and a checked swap

Let $V(x)=(x^2-1)^2/(2s^2)$ with $s=0.25$, and let $q_\beta(x)=e^{-\beta V(x)}$ for *positive* $\beta$. Its quartic tails make every positive-temperature member proper, although $\beta=0$ is improper on $\mathbb R$. The two wells at $x=\pm1$ have energy zero. The midpoint $x=0$ has energy $1/(2s^2)=8$. A cold local proposal through the midpoint is heavily penalized, while at $\beta=0.25$ the same energy difference is only two log units.

Check the swap sign before writing code. Put a cold state at $x_i=1$, so $\beta_i=1$ and $V(x_i)=0$, and a hot state at $x_j=0$, so $\beta_j=0.25$ and $V(x_j)=8$. Then

$$
\log R_{ij}=(1-0.25)(0-8)=-6,
\qquad\alpha_{ij}=e^{-6}\approx0.002479.
$$

Moving the high-energy midpoint into the cold slot is rightly unlikely. Reverse the positions: the log ratio is $+6$, so the acceptance is one. This two-state arithmetic is a useful implementation check: the forward and reverse ratios are reciprocal. Acceptance probabilities need not be reciprocal; if the ratio is near one, both directions can have high acceptance.

The seeded [companion program](examples/ch25.py) uses five positive inverse temperatures, one local random-walk proposal per slot, and alternating disjoint adjacent swaps. In its recorded 12,000 sweeps after 2,000 warmup sweeps, the single cold random walk happened to report $P(X>0)=0.500$ after just **two** sign changes. That near-perfect number is accidental: only a few long basin visits supplied it. The mixed-start tempered run reported $0.510$, 2,379 cold sign changes, and adjacent acceptance rates about $0.79$–$0.86$; an all-positive initialization reported $0.500$ and 2,406 sign changes. The random walk used 14,001 energy evaluations; each tempered run used 70,005. These are reproducible observations for these seeds, not a claim that tempering always wins per unit computation. They also show why a single close estimate can mislead. Both chains leave finite-run error, and the exact $1/2$ benchmark follows from the even target, not from their diagnostics.

## 5. A sweep, a proof obligation, and a cost ledger

One convenient teaching sweep is:

```text
for each temperature slot k:
    apply one kernel invariant for pi_beta[k]
for each disjoint adjacent pair in this sweep's even or odd phase:
    compute the joint-target log swap ratio
    exchange states and cached state information on acceptance
record the cold-slot state after the whole sweep
```

The pair schedule can alternate $(0,1),(2,3),\ldots$ with $(1,2),(3,4),\ldots$. Each elementary swap satisfies detailed balance for $\Pi$, and each phase consists of disjoint such swaps. Thus each phase and their composition preserve $\Pi$. The full alternating procedure need not be reversible even though its component swaps are. If the schedule is deterministic, the slot vector alone may have a periodically changing kernel; adjoining the phase to the state or looking at complete two-phase cycles makes the Markov description precise. Record cold states at the same point in each cycle when invoking a homogeneous-chain limit theorem. Invariance establishes the right distribution *if the ensemble is at stationarity*; it does not by itself establish irreducibility, Harris recurrence, a useful convergence rate, or accurate short-run averages. Those questions need the assumptions and tools of [Chapter 08](08-convergence.md).

Cache quantities that belong to a *state* and exchange them with that state. For an energy path, swap both $x$ and $V(x)$. For a general path, evaluate the two cross-temperature terms as needed. Use $\log U<\min(0,\log R)$ with $U\sim\operatorname{Uniform}(0,1)$, retaining both states after rejection. If pair selection depends on current states, the reverse and forward selection probabilities may differ and belong in the MH ratio. Label a physical particle as it passes through slots, but take posterior output from the cold *slot*, regardless of which particle currently occupies it. The cold-slot sequence by itself need not be Markov, since its next state can depend on the other slots.

The example counts one energy evaluation per local proposal and one per initial state; swaps reuse cached energies. Reported swap rates include warmup and retained sweeps, whereas basin fractions, sign changes, and round trips use retained sweeps only. In a general model, cross-evaluations may be expensive, and parallel hardware changes wall time without changing total work. Compare methods using the cost of all replicas, warmup, and any tuning, as in [Chapter 18](18-sampler-engineering.md). Counting only cold samples gives a misleading advantage to a large ladder.

## 6. Design the ladder for movement, then diagnose movement

Neighbors must overlap enough that exchanges are possible, yet the hottest distribution must explore the regions whose relative cold mass matters. Raising the hottest temperature can improve movement across a barrier but make adjacent distributions less alike; adding slots repairs overlap at computational cost. Linear spacing in $\beta$ and geometric spacing over a strictly positive range are starting designs, not optimality laws. A geometric ladder cannot include $\beta=0$. A bottleneck can sit in the middle, especially when a path changes from one dominant region to another over a narrow temperature range. Tuning during warmup followed by a fixed production ladder is a straightforward way to retain a well-defined production kernel; [Chapter 15](15-adaptation.md) explains why ongoing adaptation requires its own conditions.

### 6.1 Measure how fast the path changes

For the energy path $q_\beta=q_0e^{-\beta V}$, let $A(\beta)=\log Z_\beta$. On an interval with common support, assume differentiation under the integral is valid twice, the energy second moment is finite, and $A''$ is continuous. Differentiating gives $A'=-E_\beta[V]$ and

$$
A''(\beta)=\operatorname{Var}_\beta(V).
$$

This variance measures how sensitive the distribution is to a temperature change. To see why, define $D_{\mathrm{KL}}(p\Vert q)=E_p[\log(p/q)]$. For a small positive gap $\delta$, cancellation of the common reference factor gives the exact identity

$$
D_{\mathrm{KL}}(\pi_\beta\Vert\pi_{\beta+\delta})
=\delta E_\beta[V]+A(\beta+\delta)-A(\beta)
=\frac{\delta^2}{2}\operatorname{Var}_\beta(V)+o(\delta^2).
$$

Thus an equal step in $\beta$ can be a small change in one part of the path and a large change elsewhere. The score $\partial_\beta\log\pi_\beta=-(V-E_\beta V)$ has squared expectation $\operatorname{Var}_\beta(V)$, the Fisher information for this one-parameter family. Its integrated square root defines the *thermodynamic length* along the path,

$$
\ell(a,b)=\int_a^b\sqrt{\operatorname{Var}_\beta(V)}\,d\beta.
$$

[Crooks, equations 4–7](https://arxiv.org/pdf/0706.0559), develops this connection between fluctuations, Fisher information, and thermodynamic length. An overlap-based starting rule is to place more slots where energy fluctuates more, approximately equalizing $\Delta\beta\sqrt{\operatorname{Var}_\beta(V)}$. For likelihood tempering, use $V=-\log L$. Estimate the variance during warmup, compare independent ensembles, and freeze the resulting ladder. A run trapped in one basin can underestimate the variance needed for this design.

### 6.2 Worked ladder: when geometric spacing has a reason

Consider $q_\beta(x)=\exp(-\beta\|x\|^2/2)$ on $\mathbb R^d$, with $\beta>0$. Here $X\sim N(0,\beta^{-1}I_d)$ and $V=\|X\|^2/2$. Independent standard-normal squares have variance two, so

$$
E_\beta[V]=\frac{d}{2\beta},\qquad
\operatorname{Var}_\beta(V)=\frac{d}{2\beta^2},\qquad
\ell(a,b)=\sqrt{d/2}\log(b/a).
$$

Equal length intervals therefore have equal ratios $\beta_{k+1}/\beta_k$: a geometric ladder. With $d=4$ and five slots from $0.1$ to $1$, compare the following *exact* directed KL divergences. The formula is $D_{\mathrm{KL}}(\pi_a\Vert\pi_b)=\tfrac d2[b/a-1-\log(b/a)]$.

| Ladder | Inverse temperatures | Adjacent KL divergences, hot to cold |
| --- | --- | --- |
| Linear | $0.100,0.325,0.550,0.775,1.000$ | $2.143,0.332,0.132,0.071$ |
| Geometric | $0.100,0.178,0.316,0.562,1.000$ | $0.405,0.405,0.405,0.405$ |

The calculations use unrounded temperatures. The geometric ladder distributes this measure of separation evenly; the linear ladder spends three gaps on relatively similar cold distributions and leaves a large hot gap. Holding each length increment fixed as $d$ grows requires the number of gaps over this fixed temperature range to grow proportionally to $\sqrt d$. This conclusion concerns this Gaussian family and the overlap criterion, not the total work required by a general sampler. The companion program prints both the exact divergences and seeded estimates of mean swap acceptance using independent equilibrium Gaussian energies, isolating overlap from slow local exploration.

KL divergence is not a swap acceptance probability, and equal thermodynamic lengths do not guarantee optimal cold estimates. Swap rejection also depends on the distribution of energy differences. [Syed et al., Sections 4–5](https://arxiv.org/html/1905.02939v4), develop a more direct communication criterion and an approximately equal-rejection ladder under their analysis assumptions. Neither criterion repairs a hot kernel that cannot change basin.

### 6.3 Check where information actually travels

Record more than exchange acceptance. Plot a *particle identity's* slot index over time and count completed hot-to-cold-to-hot journeys; plot the cold-slot value, basin indicator, and quantities of scientific interest; compare independently initialized ensembles. A particle can make many journeys while local kernels keep it in one basin. In that case the temperature index mixes but the missing basin remains missing. Conversely, one chosen sign indicator can conceal another slow direction. An ensemble's auxiliary replicas are interacting parts of one augmented chain, not independent cold chains. Between-run comparisons need separate full ensembles with separately initialized states and random streams. Estimand-specific Monte Carlo standard errors are meaningful only under the conditions behind their estimators and after considering possible nonexploration; [Chapters 13–14](14-diagnostics.md) develop these limits. No universal swap rate or round-trip count certifies success.

Even/odd communication also has an interesting research connection. [Syed, Bouchard-Côté, Deligiannidis, and Doucet](https://arxiv.org/html/1905.02939v4) analyze nonreversible temperature-index movement and give performance results under assumptions including stationarity, independence of successive energies after local exploration, and their stated cost model. Independence here is a simplifying idealization, not a property established for our one-step random walks. Faster travel in temperature labels is valuable evidence about communication, but it does not imply universal improvement in cold estimand error per unit work. One must still measure the latter on the actual target.

Try the interactive two-replica lab. Increase the **hot-replica temperature** and compare exchange acceptance, cold sign changes, and cold fraction above zero. The displayed symmetric mixture is fixed; this control does not change its barrier height. Watch whether a visually active cold trace actually spends time in both modes. The lab illustrates finite-run behavior, not a full ladder, simulated tempering, or a convergence test.

<div class="mcmc-lab" data-lab="tempering"></div>

## 7. Simulated tempering uses a random temperature label

Instead of a state at every temperature, simulated tempering carries one $x$ and a label $k$. Give the pair an expanded target

$$
\rho(x,k)=\frac{e^{a_k}q_{\beta_k}(x)}
{\sum_{j=0}^K e^{a_j}Z_{\beta_j}}.
$$

At a fixed $k$, update $x$ with a kernel invariant for $\pi_{\beta_k}$. If a proposal changes the label from $i$ to $j$ while leaving $x$ fixed, with probability $r(j\mid i)$, the MH ratio is

$$
R_{i\to j}(x)=
e^{a_j-a_i}\frac{q_{\beta_j}(x)}{q_{\beta_i}(x)}
\frac{r(i\mid j)}{r(j\mid i)}.
$$

The proposal correction matters at boundaries. For labels $0,1,2$, a rule that chooses uniformly among *available* neighbors has $r(1\mid0)=1$ but $r(0\mid1)=1/2$, contributing a factor $1/2$ to the move $0\to1$. A rule that proposes left or right with probability $1/2$ and treats an out-of-range suggestion as a self-loop has different, symmetric off-diagonal probabilities. Specify the rule before simplifying the ratio.

The label marginal satisfies $P(k)\propto e^{a_k}Z_{\beta_k}$. Equal occupancy would require $a_k=-\log Z_{\beta_k}+c$, which is awkward because the normalizers are usually unknown. Fixed imperfect weights change label occupancy but not the stationary conditional law $\mathcal L(X\mid k=K)=\pi_1$. They can, however, cause so few cold visits that estimation is inefficient. A practical teaching procedure is to estimate weights during warmup and freeze them before collecting output; endlessly changing weights defines an adaptive process needing separate justification. [Marinari and Parisi's original simulated-tempering paper](https://arxiv.org/pdf/hep-lat/9205018) develops the expanded-temperature idea. Parallel and simulated tempering share a path, but their augmented targets and costs differ.

For cold expectations, record at a fixed point after every full state-and-label sweep and use

$$
\widehat E[h]=
\frac{\sum_{t=1}^n \mathbf 1\{k_t=K\}h(x_t)}
{\sum_{t=1}^n \mathbf 1\{k_t=K\}}.
$$

Keep repeated states and every consecutive cold-label observation. Recording only successful arrivals into the cold label can favor states with easier temperature transitions and need not have the cold conditional law. Under an ergodic theorem for the augmented chain, an integrable $h$, and positive stationary cold occupancy, the displayed ratio converges to the cold expectation. It is undefined if no cold visits occur, and it is not generally unbiased at finite run length.

## 8. Cooling, weighted paths, and equilibrium sampling

*Annealing* often means a one-way cooling schedule aimed at optimization: start hot and progressively concentrate around low-energy states. Parallel and simulated tempering instead revisit temperatures and define a stationary augmented target. Finishing a finite cooling schedule at $\beta=1$ does not make its endpoint an exact independent posterior draw. How close it is depends on transitions and schedule length, and an optimizer can intentionally target a different, more concentrated limit.

Annealed importance sampling (AIS) also follows a temperature path, but accounts for the path with weights. In a standard construction, begin with an exact draw from a normalized reference distribution, multiply incremental ratios of successive unnormalized densities at the appropriate states, and apply invariant transitions at intermediate targets. With compatible supports and exact arithmetic, the resulting *weighted* endpoints estimate target expectations through importance sampling; the average unnormalized weights estimates a normalizer ratio without bias under the standard AIS construction. This is not a set of unweighted exact target draws, and taking a logarithm of an unbiased normalizer estimate does not give an unbiased log normalizer. The indexing of weights and transitions is part of the correctness argument, so an implementation should be checked against [Neal's AIS paper](https://glizen.com/radfordneal/ais-pub.abstract.html), not improvised from the cooling analogy. [Chapter 28](28-particle-mcmc.md) develops related weighted-population methods.

## 9. Worked example: thermodynamic integration checks the path

The same path can estimate a normalizing-constant ratio. Suppose $q_\beta(x)$ is positive on a common support and differentiable in $\beta$, $0<Z_\beta<\infty$, and differentiation may be exchanged with integration—for example, around each temperature a neighborhood-wise bound on $|\partial_\beta q_\beta(x)|$ by one function integrable over the entire state space with respect to $\mu$ suffices. Then

$$
\frac{d}{d\beta}\log Z_\beta
=\frac{1}{Z_\beta}\int \partial_\beta q_\beta(x)\,d\mu(x)
=E_{\pi_\beta}[\partial_\beta\log q_\beta(X)].
$$

Assume also that $\log Z_\beta$ is absolutely continuous on $[0,1]$, so the fundamental theorem of calculus gives $\log Z_1-\log Z_0=\int_0^1E_{\pi_\beta}[\partial_\beta\log q_\beta(X)]\,d\beta$. A continuous derivative on the closed interval is one sufficient condition. For a normalized prior $p(\theta)$ and likelihood path $q_\beta=pL^\beta$, this becomes

$$
\log p(y)=\int_0^1 E_{\pi_\beta}[\log L(\theta)]\,d\beta.
$$

This identity is often called thermodynamic integration or path sampling; [Gelman and Meng](https://sites.stat.columbia.edu/gelman/research/published/path2.pdf) develop the broader normalizing-constant method. Likelihood constants that cancel in posterior MH ratios **do matter** here: removing a factor from $L$ shifts $\log p(y)$.

For a calculation we can check without simulation, take $\theta\sim N(0,1)$ and $y\mid\theta\sim N(\theta,1)$ with observed $y=2$. Completing the square in $p(\theta)L(\theta)^\beta$ gives

$$
\theta\mid y,\beta\sim N\!\left(\frac{2\beta}{1+\beta},\frac{1}{1+\beta}\right).
$$

Because $\log L(\theta)=-\tfrac12\log(2\pi)-\tfrac12(2-\theta)^2$, its expectation is

$$
g(\beta)=-\frac12\log(2\pi)-\frac12\left[
\frac{1}{1+\beta}+\frac{4}{(1+\beta)^2}\right].
$$

Integrating the two rational terms gives $\int_0^1(1+\beta)^{-1}d\beta=\log2$ and $\int_0^1 4(1+\beta)^{-2}d\beta=2$. Thus $\int_0^1g(\beta)d\beta=-\frac12\log(4\pi)-1\approx-2.265512$. Independently, the prior predictive law is $y\sim N(0,2)$, whose log density at two is the same value. The companion program's deterministic trapezoid approximations are $-2.285438$ with four panels and $-2.265827$ with 32. Their difference from the exact answer is *quadrature bias*, even though $g$ is known exactly. With simulated $g(\beta)$, Monte Carlo variance and possible finite-chain bias add to that error; a proper prior and valid identity do not remove them. [Chapter 26](26-normalizers.md) compares evidence methods and their sensitivity.

## 10. Decide what the run has earned

Start with the target's measure and support, a mode-sensitive scientific functional, and an argument that the temperature path is proper. Check local invariance and swap arithmetic separately. During warmup, tune local proposal scales and the ladder for actual hot exploration and adjacent overlap; then fix the settings for production in this basic algorithm. Run several independent ensembles from dispersed starts, and inspect both particle journeys and cold estimates. Account for every replica's work. If cold basin weights disagree across ensembles, or a path has little overlap, spend effort on the bottleneck rather than polishing within-mode summaries.

Simple heating can disappoint. A broad low peak may carry more probability than a narrow high peak; changing temperature can reverse which region dominates, creating an *entropy barrier* along the path. A prior can forbid passage, and a high-dimensional path can undergo a sharp redistribution of mass resembling a phase transition. Geometry changes and global proposals may be better complements than more temperatures; [Chapter 16](16-geometry.md) develops reparameterization, while [Chapter 41](41-physics.md) examines physical phase transitions. Tempering supplies an exact invariant augmented construction under its stated conditions. It does not certify that a finite run has discovered every scientifically important region.

**Key takeaways.** Temperatures are auxiliary distributions; use only the cold slot for ordinary target averages. Correct swap ratios follow from the product target and cancel temperature normalizers. Proper paths, overlapping neighbors, hot exploration, and estimand-specific checks are distinct requirements. Simulated tempering needs label weights; cooling and AIS answer different computational questions. Thermodynamic integration uses the same path but introduces numerical-integration and evidence-specific error.

## Exercises

<div class="exercise" id="mcmc-25-tempering-ex-1">

### 1. Derive detailed balance for one exchange

For a fixed pair $(i,j)$ chosen independently of the states, derive the exchange probability from $\Pi$ and show detailed balance between a joint state $z$ and its exchanged state $z'$. Why do the normalizers cancel?

<details>
<summary>Solution</summary>

All unchanged factors in $\Pi(z')/\Pi(z)$ cancel. In the remaining two factors, each $q_{\beta}$ is divided by its own $Z_\beta$ before and after exchange, so those cancel too. Set $R=\Pi(z')/\Pi(z)$ and $\alpha(z,z')=\min(1,R)$. Then $\Pi(z)\alpha(z,z')=\min\{\Pi(z),\Pi(z')\}=\Pi(z')\alpha(z',z)$, since the reverse ratio is $1/R$. Symmetric pair selection supplies equal proposal probabilities in both directions.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-2">

### 2. When is a powered Cauchy target proper?

Let $q(x)=(1+x^2)^{-1}$ on $\mathbb R$. For which $\beta>0$ is $q(x)^\beta$ integrable? What happens at the boundary value?

<details>
<summary>Solution</summary>

On any bounded interval the power is finite and integrable. For large $|x|$, it is asymptotic to $|x|^{-2\beta}$. The tail integral is finite exactly when $2\beta>1$, hence $\beta>1/2$. At $\beta=1/2$ it behaves like $1/|x|$ and diverges logarithmically.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-3">

### 3. Correct an endpoint label proposal

In simulated tempering with labels $0,1,2$, propose uniformly among available adjacent labels. Write the MH ratio for $0\to1$ at fixed $x$.

<details>
<summary>Solution</summary>

Here $r(1\mid0)=1$ and $r(0\mid1)=1/2$. Therefore $R_{0\to1}(x)=\frac12e^{a_1-a_0}q_{\beta_1}(x)/q_{\beta_0}(x)$. The factor $1/2$ is a proposal correction, separate from both the tempering weights and the density ratio.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-4">

### 4. Round trips without new information

Construct a tempering run with frequent accepted exchanges and particle round trips but no improvement in a basin-probability estimate. Identify the missing property.

<details>
<summary>Solution</summary>

Partition the state space into left and right basins. Let every local kernel, including the hot one, preserve its current basin, and initialize every slot in the right basin. Exchanges carry these right-basin states among temperature slots and can generate many index round trips. No state ever enters the left basin, so the cold estimate of right-basin probability remains one. The augmented chain lacks a route between these basin classes: it is not irreducible over the intended target support.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-5">

### 5. Check a thermodynamic integral two ways

For the Gaussian example in Section 9, integrate $g(\beta)$ and independently evaluate the prior predictive density at $y=2$.

<details>
<summary>Solution</summary>

The integral is $-\frac12\log(2\pi)-\frac12(\log2+2)=-\frac12\log(4\pi)-1$. Since the independent prior and observation errors each have variance one, $Y\sim N(0,2)$; its log density at two is $-\frac12\log(2\pi\cdot2)-2^2/(2\cdot2)$, the same expression.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-6">

### 6. Compare samplers at equal work

Design a comparison between a $K$-slot tempering scheme and a single cold random walk for estimating a basin probability. Specify cost, repetitions, and reported outcomes.

<details>
<summary>Solution</summary>

Choose a shared budget in full-target or energy evaluations, including every replica, swap cross-evaluation where needed, and warmup and tuning. Predefine the basin event and run multiple independent ensembles and random walks from dispersed initial conditions, using independent random streams. Report estimates, an appropriate Monte Carlo error assessment where its assumptions are credible, observed basin transitions, and the fraction of repetitions that miss a known or independently established basin. Wall time can be reported separately with hardware stated. Equal cold iteration counts would not be an equal-cost comparison.

</details>

</div>

<div class="exercise" id="mcmc-25-tempering-ex-7">

### 7. Predict the number of temperature gaps

For the Gaussian path in Section 6.2, hold the endpoints and the thermodynamic length per gap fixed. How does the required number of gaps change when dimension rises from $d=4$ to $d=100$? Does this establish an optimal number of replicas for an arbitrary target?

<details>
<summary>Solution</summary>

The total length is $\sqrt{d/2}\log(b/a)$, so it grows by $\sqrt{100/4}=5$. Maintaining the same length per gap takes five times as many gaps: four gaps become twenty, or twenty-one slots. This preserves a geometric overlap criterion for the Gaussian family. It does not account for local mixing, hardware, total work, or a multimodal path's changing geometry, and therefore is not a universal replica-count rule.

</details>

</div>

## References

- [Geyer (1991), *Markov Chain Monte Carlo Maximum Likelihood*](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/TemperAnneal/Geyer.1991.pdf).
- [Marinari and Parisi (1992), *Simulated Tempering: A New Monte Carlo Scheme*](https://arxiv.org/pdf/hep-lat/9205018).
- [Bouchard-Côté, parallel-tempering lecture notes](https://www.stat.ubc.ca/~bouchard/courses/stat520-sp2020-21/T18-pt.html).
- [Syed et al., *Non-Reversible Parallel Tempering*](https://arxiv.org/html/1905.02939v4).
- [Neal, *Annealed Importance Sampling*](https://glizen.com/radfordneal/ais-pub.abstract.html).
- [Gelman and Meng, *Simulating Normalizing Constants*](https://sites.stat.columbia.edu/gelman/research/published/path2.pdf).
- [Crooks, *Measuring thermodynamic length*](https://arxiv.org/pdf/0706.0559).
