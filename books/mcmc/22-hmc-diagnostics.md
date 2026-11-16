# 22. HMC diagnostics and difficult geometry

**Learning goals.** By the end of this chapter you should be able to connect a warning to the part of Hamiltonian Monte Carlo (HMC) that produced it; derive a leapfrog stability condition; calculate and interpret an empirical energy diagnostic; recognize a funnel in centered and noncentered coordinates; and compare proposed repairs using an inferential quantity that matters. The prerequisites are Hamiltonian dynamics and Metropolis correction from [Chapter 20](20-hmc.md), dynamic trajectories from [Chapter 21](21-nuts.md), Monte Carlo error from [Chapter 13](13-mc-error.md), and multichain diagnostics from [Chapter 14](14-diagnostics.md).

Suppose two fits report the same posterior mean for a scale parameter. One has no recorded numerical warnings; the other has transitions marked divergent near small scales. Agreement of the two means does not settle whether either fit estimates $P(\text{scale}<0.1)$ well. The warning is evidence about the computation, and the tail probability is the quantity we need to investigate. This chapter follows that investigation from numerical trajectories through geometry to a defensible report.

## 22.1 What each diagnostic observes

An HMC iteration has several layers. It draws a momentum, numerically integrates Hamilton's equations, possibly rejects the proposal, and records a state. Dynamic HMC also constructs and stops a trajectory. After many iterations we estimate expectations from dependent draws. A diagnostic sees one layer, or compares the output of several layers; none directly observes the unknown estimation error.

| Recorded quantity | Immediate question | Useful follow-up | What it cannot establish alone |
| --- | --- | --- | --- |
| Trajectory energy error and divergence flag | Did numerical integration resolve the visited geometry? | Locate flagged transitions; inspect gradients and scales | The magnitude of bias in a chosen estimand |
| Acceptance statistic | How accurately were the evaluated trajectories integrated? | Compare with energy errors and movement | That all regions were visited, or that this is the fraction of dynamic-HMC draws that moved |
| Total energy across iterations | Does momentum refresh move through the observed energy range? | Plot energy by chain; calculate E-BFMI | That an unvisited energy region does not exist |
| Tree depth or gradient count | How much work did a trajectory require? | Compare ESS and MCSE per unit work | A failure of target invariance |
| Rank plots, $\widehat R$, ESS, MCSE | Do chains agree and is the reported precision useful? | Check each estimand, especially tails | Proof of convergence |

Retain chain identity, warmup boundaries, step size, metric, energy, depth, acceptance statistics, and flags. Compute summaries on post-warmup draws, per chain where appropriate. A pooled warning count can hide one failing chain; a pooled mean can hide the same problem. [Stan's diagnostic guide](https://mc-stan.org/learn-stan/diagnostics-warnings.html) explains its warning categories and recommends inspecting the affected computation instead of treating every warning as an interchangeable pass/fail result.

For fixed-length endpoint HMC, an observed acceptance fraction counts accepted proposals. In dynamic HMC, a reported acceptance statistic can instead average hypothetical Metropolis probabilities across trajectory states. It need not count changes in the final retained state; [Chapter 21](21-nuts.md) explains this distinction.

There are four distinct kinds of concern. An incorrectly evaluated density changes the computed target. A valid Metropolis-corrected kernel may preserve the intended target mathematically yet explore it so slowly that a finite run is badly biased. Numerical failures can prevent even the assumptions behind that kernel from holding in a particular implementation. Finally, a perfectly sampled posterior can answer the wrong scientific question because of the model. Keep these concerns separate as you read a dashboard. An incorrect gradient always warrants investigation, but need not change the invariant target: fixed-length leapfrog using a deterministic position-only force still consists of reversible, volume-preserving shears, and an acceptance test using the correct Hamiltonian can correct that proposal. This argument depends on those hypotheses and does not automatically justify a dynamic stopping or selection rule built from incorrect gradients.

## 22.2 Energy error within one trajectory

For a constant, positive-definite mass matrix $M$, let

$$
H(q,p)=U(q)+\tfrac12p^{\mathsf T}M^{-1}p,
\qquad p\sim N(0,M), \qquad U(q)=-\log\pi(q)+C.
$$

Exact Hamiltonian flow conserves $H$. Leapfrog approximates the flow, producing $(q',p')$ with trajectory error $\delta H=H(q',p')-H(q,p)$. Under the usual reversible, volume-preserving proposal construction, including the momentum reversal needed for reversibility, the Metropolis acceptance probability is $\min\{1,\exp(-\delta H)\}$. This correction makes a correctly implemented fixed-length HMC kernel invariant for its target despite finite leapfrog step size. It does not guarantee useful movement in finite time. [Chapter 20](20-hmc.md) derives the construction; [Stan's reference manual](https://mc-stan.org/docs/reference-manual/mcmc.html) describes its implementation-specific trajectory diagnostics.

A *divergence* is a software flag for a trajectory whose energy error exceeds an implementation's criterion, or whose computation otherwise fails numerically. Check the sampler's exact convention. Rejection is different: a finite, ordinary positive $\delta H$ can simply yield a rejected proposal. A divergent transition can still end at an accepted state under some implementations. A large residual in the statistical model is different again. There is no universal energy-error cutoff that makes a trajectory scientifically safe.

If an integrator repeatedly enters a region where curvature changes faster than its steps resolve, its proposed path may behave nothing like the exact path. The Metropolis step can reject the bad proposal, preserving formal invariance under its hypotheses, while the chain rarely crosses the region. The resulting finite-run average can be seriously wrong. If gradients, energies, or floating-point operations become nonfinite, even that formal argument must be checked against what the actual program does. This is why deleting flagged transitions after sampling is not a repair: it conditions the output on a failure indicator and conceals where the algorithm struggled.

## 22.3 Leapfrog stability as a small calculation

Consider the exactly quadratic potential $U(q)=q^2/(2\sigma^2)$ with unit mass. One leapfrog step of length $\epsilon$ first changes momentum by half a step, then position by a full step, then momentum by another half step. Written as a matrix,

$$
\begin{pmatrix}q'\\p'\end{pmatrix}
=
\begin{pmatrix}
1-\epsilon^2/(2\sigma^2) & \epsilon\\
-\epsilon/\sigma^2+\epsilon^3/(4\sigma^4) & 1-\epsilon^2/(2\sigma^2)
\end{pmatrix}
\begin{pmatrix}q\\p\end{pmatrix}.
$$

Its determinant is one and its trace is $2-\epsilon^2/\sigma^2$. For $0<\epsilon/\sigma<2$, the eigenvalues are complex conjugates on the unit circle: repeated steps remain bounded for this quadratic system. For $\epsilon/\sigma>2$, a real eigenvalue has magnitude greater than one and a component grows geometrically. At $\epsilon/\sigma=2$ the double eigenvalue is $-1$, but the matrix is generally not diagonalizable; repeated steps can grow linearly. The endpoint is not a safe tuning target.

For a local positive-definite Hessian $G(q)=\nabla^2U(q)$, the analogous oscillator frequencies are square roots of the eigenvalues of $M^{-1/2}G(q)M^{-1/2}$. A constant metric can equalize fixed quadratic directions. If those eigenvalues vary dramatically with $q$, one global step size must resolve the fastest visited direction, even where other directions would permit longer steps. This is a *local* stability heuristic for a nonlinear target, not a theorem based on one Hessian evaluation. Geometry and reparameterization were introduced in [Chapter 16](16-geometry.md).

### Worked example A: a stable and an unstable oscillator

Set $\sigma=0.1$ and start at $(q,p)=(0.1,0)$, so $H=0.5$. With $\epsilon=0.1$, the trace is $1$; the first three states have energies $0.406250$, $0.406250$, and $0.500000$. Leapfrog energy oscillates: it need not equal the starting energy at every step, but the orbit is bounded. With $\epsilon=0.25$, the trace is $-4.25$ and the eigenvalues are $-0.25$ and $-4$. The first three energies are $3.246582$, $50.110138$, and $800.109423$. An HMC Metropolis correction would almost always reject a proposal ending at the latter energy, since $\exp[-(800.109423-0.5)]$ is tiny. This calculation is deterministic; it does not claim a production sampler would issue a divergence flag at any particular step.

The runnable [chapter example](examples/ch22.py) reproduces these values. Tiny $\epsilon$ can avoid this instability yet require many steps for a substantial displacement. Thus high acceptance by itself does not imply efficient exploration.

## 22.4 Locate the geometry behind a flag

Plot the coordinates associated with flagged transitions alongside ordinary transitions. The coordinate may be a start state, an end state, or another recorded location depending on the software; it is not necessarily the exact point inside the trajectory where error grew. A pair plot can expose a narrow neck; a hierarchical scale against its latent effects often makes that neck clearer. A transformed-coordinate plot may reveal that an apparently irregular cloud is a simple Gaussian after removing scale dependence.

A cluster of flags near a small scale suggests that the conditional latent directions have become stiff. That is a lead, not a proof. Flags can also follow a discontinuous or unstable log density, an incorrect gradient, a boundary transformation, or strong fixed correlation. Check a small instance of the target, finite-difference gradients at representative points, and stable likelihood arithmetic as in [Chapter 18](18-sampler-engineering.md). A plot with no visible cluster does not clear the run: the chosen projection can hide the geometry, and a chain that never enters the dangerous region cannot show flags there.

To make the investigation falsifiable, write a prediction before changing the model: “If small scales cause the error, flagged states should concentrate at smaller scales and decreasing the step size should reduce their frequency, possibly at higher cost.” Then compare independent runs. Merely colouring points gives a picture; the controlled change tests the mechanism.

## 22.5 Energy exploration and E-BFMI

The trajectory error $\delta H$ above compares two ends of a *single* numerical path. The recorded total energy $E_n$ instead belongs to iteration $n$, commonly after a fresh momentum draw. It includes potential and kinetic energy. Inspect an energy trace for each post-warmup chain and the distribution of its consecutive differences. A narrow spread of changes relative to the marginal spread suggests slow travel between energy levels. [Betancourt's energy-diagnostic study](https://arxiv.org/html/1604.00695) motivates this comparison.

Here we use the explicit empirical convention

$$
\widehat{\mathrm{E\text{-}BFMI}}
=\frac{\displaystyle\frac{1}{N-1}\sum_{n=1}^{N-1}(E_{n+1}-E_n)^2}
{\displaystyle\frac{1}{N}\sum_{n=1}^{N}(E_n-\bar E)^2}.
$$

Calculate it separately for each chain, without mixing warmup and sampling or joining the end of one chain to the start of another. With fewer than two recorded energies, or if the denominator is zero, report it as undefined. If a package instead uses a ratio of the two *unnormalized* sums, its value differs from this one by the factor $(N-1)/N$; check the package convention before comparing finite-sample values. The nominal 0.3 warning level used by Stan is a practical heuristic, not a theorem or a probability cutoff. [Stan's diagnostic guide](https://mc-stan.org/learn-stan/diagnostics-warnings.html) describes that threshold and its interpretation.

At stationarity, assuming $0<\operatorname{Var}(E_n)<\infty$, expansion of a square gives

$$
\frac{\mathbb E[(E_{n+1}-E_n)^2]}{\operatorname{Var}(E_n)}
=2\{1-\rho_E(1)\},
$$

where $\rho_E(1)$ is lag-one energy correlation. The ratio measures relative movement of energy, not the fraction of independent draws or the probability of a good transition. It can exceed one: for energies $1,2,1,2$, the denominator is $0.25$, every squared increment is $1$, and this empirical E-BFMI is $4$. Under independent stationary energies with finite variance, the population ratio is $2$, and the seeded independent-Gaussian calculation in the example file gives about $2.020$. The latter is a reference calculation, not an HMC diagnostic run.

There is also a population normalization distinction. The conditional-variance fraction $B=\mathbb E[\operatorname{Var}(E\mid q)]/\operatorname{Var}(E)$ lies between zero and one by the law of total variance. Two independent momentum draws at the same position give energies $E,E'$ with $\mathbb E[(E'-E)^2\mid q]=2\operatorname{Var}(E\mid q)$. For stationary, exactly energy-preserving Hamiltonian transitions with full independent momentum refreshment, the squared-increment ratio therefore corresponds to $2B$. This explains why the practical energy-difference statistic should not be read as a fraction bounded by one. Numerical trajectories and software recording conventions need their own audit; the empirical convention above is the one used for this chapter's calculations.

Low E-BFMI can motivate examination of momentum refreshment, thick tails, scaling, and poor exploration, but does not identify a unique cause or prove a particular tail estimate is wrong. A chain stuck in one energy range may even have a deceptively ordinary within-range ratio. Compare chains and the underlying energy plots, not just one scalar.

### 22.5.1 An exact energy reference and a failure it misses

A Gaussian supplies a useful reference for the *whole energy distribution*. For a standard normal target in $D$ dimensions and identity mass, take the additive constant in the potential to be zero. At stationarity, $q,p$ are independent standard normal vectors, so

$$
U=\tfrac12\|q\|^2,\qquad K=\tfrac12\|p\|^2,\qquad
E=U+K\sim\operatorname{Gamma}(D,\text{rate }1).
$$

The sum contains $2D$ independent squared standard normals divided by two. Thus $\mathbb E[E]=D$ and $\operatorname{Var}(E)=D$, while $\operatorname{Var}(K)=D/2$. For large $D$, relevant energies have width of order $\sqrt D$ around $D$; energy near zero is not representative just because the joint density is maximized there. This connects the typical-set distinction of [Chapter 2](02-probability.md) to an HMC diagnostic. The Gaussian energy law and comparison with momentum-induced energy changes appear in [Betancourt's diagnostic study, Sections 3.2–4.1](https://arxiv.org/html/1604.00695).

The conditional-variance fraction above is therefore $B=1/2$. Under stationary exact flow and complete momentum refresh, the population squared-increment ratio is $2B=1$. This differs from the independent *joint-state* reference ratio $2$: an HMC transition refreshes momentum but conserves energy during its deterministic flow, so consecutive recorded energies need not be independent even when the recorded positions are.

We can check both the reference and its limitation without an integrator. In one dimension the exact standard-normal flow for duration $\tau$ is

$$
q'=q\cos\tau+p\sin\tau,\qquad
p'=p\cos\tau-q\sin\tau.
$$

At each iteration, draw a fresh $p_n\sim N(0,1)$ and record $E_n=(q_n^2+p_n^2)/2$ **before** that flow. At $\tau=\pi/2$, $q_{n+1}=p_n$, so the positions after each transition are independent standard normals. Nevertheless consecutive energies share $p_n^2/2$: their covariance is $1/2$, their variance is $1$, and their lag-one correlation is $1/2$. The energy ratio is consequently $1$, despite perfectly independent position draws.

At $\tau=2\pi$, the exact flow returns to the same position. Every proposal has zero energy error and acceptance probability one, yet $q_n=q_0$ forever. Within this chain the only changing energy is $p_n^2/2$, so the empirical energy variance tends to $1/2$ and the mean squared increment tends to $1$. The empirical E-BFMI therefore tends to $2$, an apparently untroubling value. It certifies neither position movement nor correct estimation of $E[q^2]=1$.

There is no contradiction with the stationary population formula. If $q_0\sim N(0,1)$, this identity position kernel preserves the target and its ensemble energy variance remains $1$. But it is not ergodic: one trajectory never samples the variation in $q_0^2/2$ across independent initializations. Stationarity alone does not make its empirical variance converge to that ensemble variance. The failure is visible immediately in the position trace.

The added exact-flow experiment in [the executable example](examples/ch22.py) uses 20,000 transitions from a seeded stationary initial position:

| Exact duration | Empirical E-BFMI | Within-chain energy variance | Within-chain position variance |
| --- | ---: | ---: | ---: |
| $\pi/2$ | 0.993 | 1.000 | 0.996 |
| $2\pi$ | 1.982 | 0.496 | 0.000 |

These are actual computed results for ideal fixed-duration HMC, with exact quarter-turn and identity updates. They are not NUTS runs. Their purpose is to give the energy diagnostic a calibration case and a concrete blind spot. [Chapter 21](21-nuts.md) addresses trajectory duration; here the lesson is to examine position estimands and chain agreement alongside energy movement.

## 22.6 Tree depth measures work

Dynamic HMC builds candidate paths by binary doubling. Reaching one more permitted depth can roughly double the number of leapfrog steps and gradient evaluations, although the exact count and stopping rule depend on the implementation. A maximum depth prevents a trajectory from growing without limit. Repeated cap hits may mean the algorithm wanted to travel farther, or that it spent excessive work in poorly scaled coordinates. A correctly implemented cap is primarily an efficiency concern; by itself it does not imply the target is no longer invariant. [Stan's reference manual](https://mc-stan.org/docs/reference-manual/mcmc.html) specifies its tree construction and cap, while its [diagnostic guide](https://mc-stan.org/learn-stan/diagnostics-warnings.html) distinguishes depth warnings from divergences.

Look at depth together with step size, gradient evaluations, ESS per second, and the MCSE of a decision estimand. Reducing $\epsilon$ to resolve a narrow region may require roughly proportionally more steps to cover the same physical integration time. Increasing the depth cap can allow those steps but can also multiply cost without improving the quantity you need. Do not add an arbitrary early-stop test to a hand-written HMC trajectory and assume invariance survives: dynamic stopping and state selection need the detailed-balance construction of [Chapter 21](21-nuts.md).

## 22.7 A funnel that can be checked exactly

Consider the prior-only hierarchy

$$
v\sim N(0,9),\qquad x_i\mid v\sim N(0,e^v),\quad i=1,\ldots,d.
$$

Here $e^v$ is a **variance**, so the conditional standard deviation is $e^{v/2}$. Multiplying normal densities gives, up to an additive constant,

$$
U(v,x)=\frac{v^2}{18}+\frac{d v}{2}
+\frac{e^{-v}}{2}\sum_{i=1}^{d}x_i^2.
$$

Consequently $\partial U/\partial x_i=e^{-v}x_i$ and $\partial U/\partial v=v/9+d/2-e^{-v}\sum_i x_i^2/2$. Holding $v$ fixed, the curvature in each $x_i$ direction is $e^{-v}$. At $v=-6,0,6$, the conditional standard deviations are approximately $0.0498,1,20.09$. The corresponding *conditional* unit-mass oscillator bounds $\epsilon<2e^{v/2}$ are approximately $0.0996,2,40.17$. Actual HMC also moves $v$, and the full Hessian couples the coordinates; these bounds explain the scale conflict rather than certify a step size for the complete system.

Now set $x_i=e^{v/2}z_i$. The Jacobian matrix is block triangular with diagonal entries $1,e^{v/2},\ldots,e^{v/2}$, so its determinant is $e^{dv/2}$. The transformed density multiplies the old density by that Jacobian. Its log cancels the $dv/2$ term in the potential:

$$
U_{\mathrm{noncentered}}(v,z)
=\frac{v^2}{18}+\frac12\sum_i z_i^2+C.
$$

Thus $v\sim N(0,9)$ and $z_i\sim N(0,1)$ are independent under this *prior-only* target. This gives an exact benchmark and explains why a constant metric works well in the new coordinates. It does not say noncentering is always best once data enter: a strong likelihood for $x$ can make the centered coordinates more efficient. The [Stan user's guide](https://mc-stan.org/docs/stan-users-guide/efficiency-tuning.html) discusses this dependence on information strength.

### Worked example B: investigate the narrow neck

Suppose the reported quantity is $P(v<-3)$. Because $v/3$ is standard normal, its exact value is $\Phi(-1)=0.158655\ldots$. Generate $v=3a$ with $a\sim N(0,1)$, independently generate each $z_i\sim N(0,1)$, and reconstruct $x_i=e^{v/2}z_i$. The seeded 20,000-draw reference in [the executable example](examples/ch22.py) estimates the probability as $0.158950$. Its independent binomial standard error is $\sqrt{p(1-p)/20{,}000}=0.002583\ldots$ using the exact $p=\Phi(-1)$, so the small difference from the reference is ordinary sampling variation. It is independent sampling from this simple prior, not evidence that centered HMC succeeds.

For a centered HMC fit, plot $v$ against a representative $x_i$, mark transitions according to the sampler's flag convention, and inspect the $v<-3$ indicator in each chain. A chain may estimate $E[v]$ near zero while barely visiting the narrow negative-$v$ region; the tail indicator reveals the miss. Compare a noncentered fit using the *same original-coordinate estimand*, reconstructed from $(v,z)$, with independent initializations and a recorded work budget. Do not discard flagged draws or report only well-behaved chains. In a data-rich hierarchy, repeat the comparison rather than presuming the prior-only result carries over.

## 22.8 Choose a change that tests the cause

| Evidence or hypothesis | Controlled change | Interpretation limit |
| --- | --- | --- |
| Density, gradient, or transform may be wrong | Verify formulas on a small target; compare automatic and finite-difference gradients; stabilize log arithmetic | A numerical fix may change the computed target toward the intended one |
| Fixed scale imbalance or correlation | Standardize variables; allow adequate warmup for a diagonal or dense metric | A constant metric cannot generally flatten position-dependent curvature |
| Error concentrated where scale varies with position | Try a justified centered/noncentered transformation; compare original estimands | The better parameterization depends on the data |
| Large trajectory errors at current resolution | Reduce step size and record extra gradient cost | Fewer flags alone do not prove complete exploration |
| Repeated depth caps | Inspect trajectory cost and MCSE; test a cap change only with a reason | More depth cannot cure all stiffness or energy problems |
| Weak identification or very heavy scientifically implausible tails | Re-examine likelihood and prior with subject-matter knowledge | Changing a prior changes the statistical model |
| Separated modes | Use dedicated mode-exploration methods such as [Chapter 25](25-tempering.md) | Local HMC trajectories may miss modes without warnings |

Scaling, a valid one-to-one transformation with its Jacobian, and metric adaptation aim to compute the *same* posterior more effectively. Changing a prior or likelihood changes the posterior itself and requires scientific justification. More iterations reduce Monte Carlo error only when the run actually explores the relevant regions. A dense constant metric may help a correlated Gaussian but cannot remove every neck in a funnel. Position-dependent metrics in [Chapter 23](23-riemannian.md) address a different geometric option at additional computational cost.

## 22.9 Compare interventions against an estimand

A useful comparison specifies its target before seeing the runs. For the funnel, record the mean of $v$ and $P(v<-3)$; the exact answers are $0$ and $0.158655\ldots$. In a real analysis choose quantities tied to a decision, including a tail or contrast if it matters. Preserve independent chain starts and compare the same original-coordinate quantities after a transformation. Where possible, compare under a fixed gradient-evaluation or wall-clock budget as well as a fixed iteration count. The latter can hide a doubling of work per draw.

For each run record post-warmup divergence counts by chain, E-BFMI by chain, depth-cap frequency, gradient evaluations or time, $\widehat R$, relevant ESS, and MCSE. Include visual checks of the coordinates and energy traces. The rank-based summaries and MCSE from [Chapters 13–14](13-mc-error.md) answer different questions from energy error. If an estimand's MCSE is larger than the accuracy needed for the decision, a tidy $\widehat R$ does not make it precise. If exploration is doubtful, even a small estimated MCSE can be unreliable because its calculation uses the visited portion of the target.

A concise report might say: “Four independent chains, each with 1,000 warmup and 2,000 retained iterations; two chains had divergences concentrated at small $v$; the estimated $P(v<-3)$ varied from 0.07 to 0.16 by chain; E-BFMI and depth were inspected per chain; a noncentered rerun under the same gradient budget had no recorded divergences and estimates close to the exact prior benchmark; remaining uncertainty concerns model adequacy.” Those numbers are a *report template*, not measurements from the chapter's example program. Replace them with actual output, report any changes to priors or likelihood separately, and do not claim that a warning-free rerun proves correctness.

## 22.10 What a clean dashboard still misses

Diagnostics test visible consequences of particular failure mechanisms. An unvisited separated mode can leave no divergence and can make all initialized chains agree on the wrong mode. A missing funnel neck can produce deceptively benign energy statistics if the chains never reach it. Posterior predictive checks and simulation-based calibration from [Chapter 17](17-workflow.md) probe different parts of the workflow, including the model and the implementation. No finite list of checks proves that a finite sample represents its target.

For a difficult fit, finish by naming the most plausible remaining failure and an experiment that could reveal it: more dispersed initializations, a simulated-data recovery test, a reparameterization, or a specialized mode search. This makes the diagnostic conclusion a testable judgment rather than a green-light ritual. Betancourt's [conceptual HMC treatment](https://arxiv.org/html/1701.02434v2) develops the relation among geometry, momentum refresh, and trajectory exploration that underlies this practice.

## Interactive lab

The lab runs fixed-length HMC on a two-dimensional Gaussian, with ten leapfrog steps per proposal. Change the **step size** and switch between the identity and displayed diagonal mass matrices. Observe acceptance, movement, and the sample plot as the scales become easier or harder to resolve; repeat with a different seed. The target covariance is $\operatorname{diag}(1,0.04)$: its narrow standard deviation is $0.2$, so identity-mass leapfrog needs $\epsilon<0.4$ for quadratic stability. Choosing $M=\operatorname{diag}(1,25)$ equalizes both frequencies at one. Inspect the displayed maximum absolute proposal energy error as well as acceptance. The lab is a controlled oscillator experiment. It does not implement NUTS, tree depth, production divergence flags, or E-BFMI, so use the calculations above for those diagnostics.

<div class="mcmc-lab" data-lab="hmc"></div>

## Exercises

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-1">

1. **Stability calculation.** Compose the three shear matrices for half momentum, full position, half momentum updates for $U(q)=q^2/(2\sigma^2)$. Derive the trace, determinant, and stable open interval. What happens at the upper endpoint?

<details>
<summary>Solution</summary>

The matrices are $P=\begin{pmatrix}1&0\\-\epsilon/(2\sigma^2)&1\end{pmatrix}$ and $Q=\begin{pmatrix}1&\epsilon\\0&1\end{pmatrix}$, so one step is $PQP$. Multiplication gives the matrix in Section 22.3. Each shear has determinant one; the trace is $2-\epsilon^2/\sigma^2$. Its characteristic polynomial is $\lambda^2-(2-\epsilon^2/\sigma^2)\lambda+1$. Eigenvalues are a bounded conjugate pair when $-2<2-\epsilon^2/\sigma^2<2$, equivalently $0<\epsilon/\sigma<2$. At $\epsilon/\sigma=2$, the repeated eigenvalue is $-1$ and a nonzero off-diagonal term gives a Jordan block, so generic iterates grow linearly.

</details>

</div>

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-2">

2. **An energy ratio above one.** For recorded energies $(1,2,1,2)$, calculate the convention in Section 22.5. Is the answer an invalid probability?

<details>
<summary>Solution</summary>

The mean is $1.5$, the denominator is $(4\cdot0.25)/4=0.25$, and the three squared increments all equal one. The numerator is $3/3=1$, giving E-BFMI $4$. It is a ratio of variability measures, not a probability. Strong alternation can make consecutive changes much larger than marginal variance.

</details>

</div>

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-3">

3. **Differentiate the funnel.** Derive both components of $\nabla U(v,x)$ and the conditional $x$ curvature. Which term changes sign when differentiating $e^{-v}$?

<details>
<summary>Solution</summary>

For each $i$, $\partial U/\partial x_i=e^{-v}x_i$. Also $\partial U/\partial v=v/9+d/2-(e^{-v}/2)\sum_i x_i^2$, since the derivative of $e^{-v}$ is $-e^{-v}$. Holding $v$ fixed, $\partial^2U/\partial x_i\partial x_j=e^{-v}$ for $i=j$ and zero otherwise. Thus the conditional $x$ Hessian is $e^{-v}I_d$.

</details>

</div>

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-4">

4. **Track the Jacobian.** Transform $x_i=e^{v/2}z_i$ and show why the prior-only transformed target is independent Gaussian. Would the same conclusion follow automatically after observing data $y\mid x$?

<details>
<summary>Solution</summary>

The map $(v,z)\mapsto(v,x)$ is block triangular, and its determinant is $e^{dv/2}$. The transformed density has an extra log factor $dv/2$, canceling the negative log density's $dv/2$ term. Substituting $x_i^2e^{-v}=z_i^2$ leaves $v^2/18+\sum_i z_i^2/2+C$. With data, $-\log p(y\mid e^{v/2}z)$ remains and usually couples $v$ and $z$; the independent-Gaussian result is specific to the prior-only example.

</details>

</div>

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-5">

5. **A costly clean fit.** A run has no divergences, frequent depth caps, acceptable $\widehat R$, and MCSE for a decision contrast twice the tolerated error. Design a fair next comparison.

<details>
<summary>Solution</summary>

Keep the contrast and its original-coordinate definition fixed. Inspect scaling, step size, metric, and per-chain traces. Compare a justified parameterization or metric change with a depth-cap change under matched gradient or time budgets, using independent initializations. Record cap frequency, ESS per cost, and contrast MCSE. If the current run truly explores the target, longer sampling may reduce MCSE; acceptable $\widehat R$ alone does not meet the decision's precision requirement.

</details>

</div>

<div class="exercise" id="mcmc-22-hmc-diagnostics-ex-6">

6. **Selecting away a warning.** A colleague removes all divergent transitions and recomputes the posterior interval, obtaining better diagnostics. Explain the error and a repair strategy.

<details>
<summary>Solution</summary>

Removing iterations conditional on a divergence flag selects states according to an algorithmic event, changes the empirical distribution, and hides evidence of difficult geometry. Keep every retained state and its flag. Plot the associated coordinates, check target and gradient calculations, and test a geometry-matched change such as scaling, noncentering, or a smaller step size. Rerun independent chains and compare the same estimands, work, and diagnostics. Report unresolved warnings rather than silently filtering them.

</details>

</div>

## Key takeaways

- Divergence, energy movement, trajectory cost, and between-chain agreement probe different mechanisms.
- Leapfrog stiffness follows from local curvature; a constant metric cannot generally resolve a position-dependent funnel.
- E-BFMI compares squared energy changes with marginal energy variance. It is convention-dependent in finite samples and is not a probability.
- Evaluate remedies on original-coordinate estimands and computational cost. Warning-free output supports a judgment, never a proof of convergence.

## References

- [Stan Development Team, *How to Diagnose and Resolve Convergence Problems*](https://mc-stan.org/learn-stan/diagnostics-warnings.html).
- [Stan Development Team, *MCMC Sampling*, Reference Manual](https://mc-stan.org/docs/reference-manual/mcmc.html).
- [Stan Development Team, *Efficiency Tuning*, User's Guide](https://mc-stan.org/docs/stan-users-guide/efficiency-tuning.html).
- [Michael Betancourt, *A Conceptual Introduction to Hamiltonian Monte Carlo*](https://arxiv.org/html/1701.02434v2).
- [Michael Betancourt, *Diagnosing Suboptimal Cotangent Disintegrations in Hamiltonian Monte Carlo*](https://arxiv.org/html/1604.00695).
