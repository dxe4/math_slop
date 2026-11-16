var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: metropolis-hastings-kernel
title: "Metropolis–Hastings from an Invariant Kernel"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Metropolis–Hastings from an Invariant Kernel

The Metropolis–Hastings algorithm is the foundational Markov chain Monte Carlo method. It requires only that the unnormalized target density can be evaluated pointwise. This chapter derives the algorithm from the principle of detailed balance, explains why the normalizing constant cancels, and works through a complete implementation on a toy model.

## The Metropolis–Hastings update

Suppose the current state is $\\theta$. The algorithm proposes a new state $\\theta' \\sim q(\\theta' \\mid \\theta)$ and accepts it with probability

$$a(\\theta, \\theta') = \\min\\left\\{1, \\; \\frac{\\pi(\\theta') \\, q(\\theta \\mid \\theta')}{\\pi(\\theta) \\, q(\\theta' \\mid \\theta)}\\right\\}.$$

If the proposal is rejected, the chain remains at $\\theta$. The normalizing constant of $\\pi$ cancels in the ratio, so only the unnormalized target is needed. For a symmetric random-walk proposal where $q(\\theta' \\mid \\theta) = q(\\theta \\mid \\theta')$, the $q$ terms cancel too, leaving

$$a(\\theta, \\theta') = \\min\\left\\{1, \\; \\frac{\\pi(\\theta')}{\\pi(\\theta)}\\right\\}.$$

This simplicity is the algorithm's strength. It can be applied to any target density, no matter how complex, provided the target can be evaluated up to a constant.

## Detailed balance and invariance

The Metropolis–Hastings kernel leaves $\\pi$ invariant because accepted moves satisfy detailed balance. For distinct states $\\theta \\neq \\theta'$, the probability flow from $\\theta$ to $\\theta'$ is

$$\\pi(\\theta) \\, q(\\theta' \\mid \\theta) \\, a(\\theta, \\theta').$$

By definition of $a$, this equals

$$\\min\\{\\pi(\\theta) \\, q(\\theta' \\mid \\theta), \\; \\pi(\\theta') \\, q(\\theta \\mid \\theta')\\},$$

which is symmetric in $\\theta$ and $\\theta'$. Therefore the flow from $\\theta$ to $\\theta'$ equals the flow from $\\theta'$ to $\\theta$, establishing detailed balance. Since detailed balance implies invariance, $\\pi$ is a stationary distribution of the chain.

Invariance alone does not guarantee convergence from an arbitrary initial state. Suitable irreducibility and positive Harris recurrence conditions, plus integrability of the estimand, support ergodic convergence. Aperiodicity is additionally relevant for convergence of the marginal distributions (not merely Cesàro averages). These conditions are not guaranteed by code that runs.

## Random-walk Metropolis on logit scale

Consider sampling from $\\operatorname{Beta}(9, 18)$ using random-walk Metropolis. We parameterize $p \\in (0,1)$ via $\\theta = \\operatorname{logit}(p) = \\log(p/(1-p))$ and use a normal random-walk proposal on $\\theta$:

$$\\theta' \\mid \\theta \\sim \\mathcal{N}(\\theta, \\sigma_{\\mathrm{prop}}^{2}).$$

Because the proposal is symmetric, the acceptance probability is

$$a(\\theta, \\theta') = \\min\\left\\{1, \\; \\frac{\\pi_{\\theta}(\\theta')}{\\pi_{\\theta}(\\theta)}\\right\\},$$

where $\\pi_{\\theta}$ is the target density with respect to $d\\theta$. Since $p = \\operatorname{logit}^{-1}(\\theta)$, the Jacobian is $\\lvert dp/d\\theta \\rvert = p(1-p)$, and

$$\\log \\pi_{\\theta}(\\theta) = (a-1)\\log p + (b-1)\\log(1-p) + \\log p + \\log(1-p) + \\text{const}.$$

Use $\\sigma_{\\mathrm{prop}}=0.8$ as a reproducible benchmark only after declaring
the random-number generator and seed, initialization, warmup, retained draws,
and MCSE estimator. Compare the estimated mean with the exact value $9/27=1/3$
in MCSE units over several independent runs. A fixed iteration count cannot
guarantee a particular realized MCSE-unit discrepancy.

## Tuning and diagnostics

A proposal scale that is tiny accepts often but explores slowly; one that is huge rejects often. For random-walk Metropolis in low dimensions, an acceptance rate near $0.44$ for a single parameter or near $0.23$ for many parameters is often efficient under ideal conditions. These are heuristics, not optima: a chain with perfect acceptance rate can still fail to explore if it is trapped in one mode.

Multiple chains from dispersed initial values are essential. If all chains agree on a narrow region while a dispersed initialization is excluded, the sampler may have missed part of the posterior. Acceptance rate alone is never proof of convergence.


## Proposal design in multiple dimensions

In $d$ dimensions, a random-walk proposal $\\theta' \\sim \\mathcal{N}(\\theta, \\Sigma)$ requires choosing a covariance matrix $\\Sigma$. A common choice is $\\Sigma = \\sigma^{2} I_{d}$, but this is inefficient when the posterior has strong correlations or unequal scales. A better choice is $\\Sigma \\approx c \\, \\operatorname{Cov}(\\theta \\mid y)$ for some scaling constant $c$.

When the posterior covariance is unknown, adaptive MCMC updates $\\Sigma$ during the run using the empirical covariance of the chain so far. One standard sufficient theorem requires diminishing adaptation of transition kernels together with containment; shrinking proposal updates alone is insufficient. In practice, adaptive samplers often use a fixed adaptation schedule during warmup and freeze the proposal thereafter.

## A two-dimensional example

Consider sampling from a bivariate normal with correlation $\\rho = 0.9$:

$$\\pi(\\theta) \\propto \\exp\\left(-\\frac{1}{2(1-\\rho^{2})}\\left(\\theta_{1}^{2} - 2\\rho\\theta_{1}\\theta_{2} + \\theta_{2}^{2}\\right)\\right).$$

An isotropic proposal with $\\Sigma=I_2$ does not follow the target's narrow, correlated direction: it wastes moves across the ridge while moving inefficiently along it. A proposal covariance proportional to the target covariance aligns the proposal with that geometry and can improve effective sample size. Acceptance rates are not determined by correlation alone; they also depend on overall scale, dimension, initialization, and the run used to estimate them. They should therefore be reported from a reproducible experiment rather than attached to these two covariance shapes as universal constants.

## Independence samplers

An independence sampler uses a proposal $q(\\theta')$ that does not depend on the current state. The acceptance probability is

$$a(\\theta, \\theta') = \\min\\left\\{1, \\; \\frac{\\pi(\\theta') \\, q(\\theta)}{\\pi(\\theta) \\, q(\\theta')}\\right\\}.$$

If $q$ is close to $\\pi$, the independence sampler can achieve high acceptance and low autocorrelation. However, if $q$ has lighter tails than $\\pi$, the chain can get stuck in regions where $q$ underestimates $\\pi$. The independence sampler is useful when a cheap approximation to the posterior is available.


## Metropolis-within-Gibbs

When some conditional distributions are available in closed form and others are not, a hybrid approach samples the tractable conditionals exactly (Gibbs steps) and the intractable conditionals using Metropolis-Hastings. This Metropolis-within-Gibbs algorithm is valid because each component update leaves the target invariant.

**Example.** In the standard latent-utility probit regression, \\(z=X\\beta+\\epsilon\\) with \\(\\epsilon\\sim\\mathcal N(0,I)\\) and \\(\\beta\\sim\\mathcal N(m_0,V_0)\\), each latent utility has a normal full conditional truncated according to its observed binary outcome. Conditional on \\(z\\), completing the square gives

\\(\\beta\\mid z\\sim\\mathcal N\\!\\left(V(V_0^{-1}m_0+X^{\\mathsf T}z),V\\right),\\qquad V=(V_0^{-1}+X^{\\mathsf T}X)^{-1}.\\)

This is therefore an all-Gibbs example, not a reason to insert a Metropolis step. Metropolis-within-Gibbs is needed instead when a block's actual conditional is nonstandard, such as a regression block given a prior that breaks this Gaussian conjugacy; that block can be updated by a Metropolis kernel targeting its conditional while tractable blocks retain Gibbs updates.

The key requirement is that each block update leaves the conditional distribution invariant. With all other blocks held fixed, its acceptance ratio can be computed from the full conditional or equivalently from the joint density, since the conditional normalizing constant cancels.

## Reversible jump MCMC

Reversible jump MCMC extends Metropolis-Hastings to models of varying dimension. When proposing a move between models with different numbers of parameters, the proposal includes a dimension-matching transformation. The acceptance probability includes the Jacobian of this transformation.

Reversible jump is useful for Bayesian model selection, variable selection, and mixture models with unknown numbers of components. However, designing efficient trans-dimensional proposals is difficult, and spike-and-slab priors or Dirichlet-process mixtures do not by themselves specify continuous relaxations or sampling algorithms.


## Simulated annealing

Simulated annealing is a Metropolis-Hastings variant for optimization rather than sampling. The target distribution is $\\pi_{T}(\\theta) \\propto \\pi(\\theta)^{1/T}$, where $T$ is a temperature parameter. Under additional propriety and concentration conditions, small $T$ concentrates equilibrium mass near global maximizers; this is not a finite-run guarantee. A cooling schedule can aid exploration, but its optimization performance depends on the landscape, transition kernels and cooling rate.

Simulated annealing is useful for finding posterior modes in multimodal distributions. However, it does not produce samples from the posterior; its changing-temperature output is not a fixed-target posterior sample. For full Bayesian inference, tempering methods that sample at multiple temperatures are preferred.

## Parallel chains and communication

Running multiple chains in parallel is essential for diagnostics and can improve exploration. Chains can communicate by periodically exchanging states (parallel tempering) or by sharing proposal information (adaptive MCMC with multiple chains).

The key challenge in parallel MCMC is ensuring that the joint chain remains ergodic. Exchange operations must preserve the joint target, and adaptation requires an applicable theorem, such as diminishing kernel adaptation together with containment. When implemented correctly, parallel chains provide both faster exploration and more reliable diagnostics.


## Adaptive MCMC

Adaptive MCMC adjusts the proposal distribution during the run based on the chain's history. The most common adaptation updates the proposal covariance to match the empirical covariance of the chain:

$$\\Sigma_{n+1} = \\frac{1}{n} \\sum_{s=1}^{n} \\theta^{(s)} \\theta^{(s)\\top} - \\bar{\\theta}_{n} \\bar{\\theta}_{n}^{\\top} + \\epsilon I,$$

where $\\epsilon I$ ensures positive definiteness. One standard sufficient theorem combines diminishing transition-kernel changes in total variation with containment of convergence times; shrinking parameter increments alone do not establish these conditions.

In practice, adaptation is often performed during a fixed warmup period and then frozen. This gives a finite history-dependent prefix followed by a fixed kernel; asymptotic validity still requires the realized fixed kernel to satisfy the relevant convergence assumptions.

## Geometric ergodicity

A Markov chain is geometrically ergodic if it converges to the stationary distribution at a geometric rate:

$$\\lVert P^{n}(\\theta, \\cdot) - \\pi \\rVert_{\\mathrm{TV}} \\leq C(\\theta) \\rho^{n}$$

for some $\\rho<1$ and function $C(\\theta)$. Geometric ergodicity controls convergence, but by itself does not give a CLT for every square-integrable estimand on a general nonreversible chain. A standard safe sufficient condition for the sample mean of $h$ is geometric ergodicity together with $E_\\pi|h|^{2+\\delta}<\\infty$ for some $\\delta>0$; alternative theorems require their own hypotheses, such as reversibility.

Conditions for geometric ergodicity depend jointly on the target's tails and geometry and on the precise transition kernel; they must be taken from a theorem matching that setup. A fixed random-walk proposal scale and an HMC step size strongly affect efficiency and numerical stability, but “neither too small nor too large” is not a general geometric-ergodicity criterion. Likewise, no single potential-growth phrase is sufficient for all HMC implementations and integration schemes.


## Proposal tuning in practice

Tuning the proposal distribution is more art than science. A practical approach:

1. Start with a small proposal scale (e.g., $0.1$ times the prior standard deviation).
2. Run a short pilot chain ($1{,}000$ iterations).
3. Adjust the scale to achieve acceptance rate $0.2$-$0.5$.
4. Run a longer chain and check $\\hat{R}$ and ESS.
5. If ESS is low, try a different proposal shape (e.g., correlated normal instead of diagonal).

For multimodal targets, a mixture proposal that combines local random-walk steps with occasional long-range jumps can improve exploration. The long-range jumps help the chain escape local modes, while the local steps ensure efficient sampling within modes.

## Example: bimodal target

Consider the bimodal target $\\pi(\\theta) \\propto \\exp(-(\\theta^{2}-1)^{2}/2)$, which has modes at $\\theta = \\pm 1$ but only a shallow central valley: its density at zero is $e^{-1/2}\\approx0.607$ times its modal density. This example therefore does not by itself predict long trapping. Compare a proposal with SD $0.5$ against a mixture using SD $0.5$ with probability $0.9$ and SD $5.0$ with probability $0.1$ under a declared seed, warmup, retained length, and start. The mixture may change ESS even when sign-switch counts are similar; stronger separation is needed to demonstrate a clear mode-switching advantage.

The large-jump component proposes both useful mode-crossing moves and distant low-density moves. Its acceptance rate depends on the target and proposal scale, so it must be measured for the declared experiment rather than assumed to be approximately $0.01$. Evaluate the mixture using mode-switching frequency and effective sample size as well as component-wise and overall acceptance rates.

## Common errors

- **Omitting the Jacobian under reparameterization.** Sampling on the logit scale requires the target density with respect to $d\\theta$. Forgetting the Jacobian $p(1-p)$ produces a biased chain.
- **Dropping rejected states from the stored chain.** The chain must include repeated states. Dropping rejections changes the transition record and generally biases the empirical distribution.
- **Using a single chain.** One chain can miss multimodality and cannot compare sensitivity across different starts. Always run at least four chains from dispersed starts.
- **Trusting acceptance rate as a convergence diagnostic.** A well-tuned proposal can still fail to explore a multimodal posterior.

## Practice exercises

### Exercise 1

Show that if $q(\\theta' \\mid \\theta)$ is a random-walk proposal with
$q(\\theta' \\mid \\theta)=g(\\theta'-\\theta)$ for a density $g$ symmetric about
zero, then $q(\\theta' \\mid \\theta)=q(\\theta \\mid \\theta')$. Give a
random-walk increment density for which the equality fails.

**Solution.** $q(\\theta\\mid\\theta')=g(\\theta-\\theta')
=g(-(\\theta'-\\theta))$. Symmetry gives $g(-z)=g(z)$, hence the desired
equality. Without symmetry, random-walk form alone is insufficient. For
example, if $g(z)=e^{-z}\\mathbf 1_{\\{z\\ge0\\}}$, proposals only move upward;
then $q(\\theta'\\mid\\theta)>0$ for $\\theta'>\\theta$ while
$q(\\theta\\mid\\theta')=0$.

### Exercise 2

Implement random-walk Metropolis for $\\operatorname{Beta}(3, 7)$ on the raw $p$ scale using a truncated normal proposal on $[0,1]$. Derive the required proposal correction. Then compare it with a logit-scale random walk using declared proposal scales, starts, warmup, retained draws, and a common efficiency estimand per target-density evaluation.

**Solution.** A truncated normal proposal on $[0,1]$ is not symmetric in the required sense: its state-dependent normalizing constant makes $q(p'\\mid p)\\ne q(p\\mid p')$, so the Metropolis ratio must include $q(p\\mid p')/q(p'\\mid p)$. The logit proposal instead requires the transformed target, including its Jacobian. Neither parameterization is universally more efficient: acceptance, ESS, and cost depend on the two proposal scales and the estimand. Report the declared comparison rather than inferring an efficiency ordering from boundary asymmetry alone.

### Exercise 3

A chain has acceptance rate $0.05$ but $\\hat{R}$ near $1.00$ across four chains. Should the output be trusted?

**Solution.** No. The low acceptance rate suggests the proposal scale is too large, causing the chain to remain at the same state for long periods. If all chains start near the same mode, they can agree (low $\\hat{R}$) while failing to explore the full posterior. Increase the number of iterations, reduce the proposal scale, and inspect trace plots for stuck periods before trusting the output.

## Looking backward and forward

This chapter derived the Metropolis–Hastings algorithm and demonstrated its implementation on a conjugate benchmark. The next chapter, *Gradient-Based Sampling*, replaces the random-walk proposal with Hamiltonian dynamics that use gradient information to make directed, long-range moves through the posterior.
## A kernel includes staying where it is

Start with a probability density $\\pi(x)=f(x)/Z$ relative to a specified measure, where $f\\ge0$ and $0<Z=\\int f<\\infty$. The reference measure is part of the model: a density in a probability coordinate is different from a density in its logit. Suppose proposals have density $q(y\\mid x)$ in that same state space. A practical algorithm must be able to draw the proposal and evaluate the forward and reverse quantities needed by its ratio. Evaluating an unnormalized target alone does not create those operations.

For $f(x)>0$ and $q(y\\mid x)>0$, set
\\[
\\alpha(x,y)=\\min\\{1,f(y)q(x\\mid y)/(f(x)q(y\\mid x))\\}.
\\]
The full transition kernel is
\\[
P(x,A)=\\int_A q(y\\mid x)\\alpha(x,y)\\,dy+r(x)\\mathbf1_A(x),
\\quad
r(x)=1-\\int q(y\\mid x)\\alpha(x,y)\\,dy.
\\]
The second term is a point mass, even when the target has a continuous density. It is not a small implementation detail: without it the proposed expression need not have total mass one. Since $0\\le\\alpha\\le1$, $r(x)$ lies in $[0,1]$ and $P(x,\\cdot)$ is a probability measure.

The accepted flow is symmetric because
\\[
\\pi(x)q(y\\mid x)\\alpha(x,y)
=Z^{-1}\\min\\{f(x)q(y\\mid x),f(y)q(x\\mid y)\\}.
\\]
The rejection flow is supported on the diagonal $(x,x)$ and is symmetric there automatically. Thus the entire measure $\\pi(dx)P(x,dy)$ is symmetric, including its singular part. Integrating it over $x$ and restricting $y$ to $A$ gives $\\int\\pi(dx)P(x,A)=\\pi(A)$, since the reversed kernel integrates to one. This proves invariance for measurable sets, rather than merely checking an off-diagonal formula.

The same proof works for discrete proposals with sums. Mixtures of discrete and continuous moves require their appropriate proposal measures or an augmented move label, not a ratio of incompatible densities. A deterministic proposal in a later chapter needs a reversible transformation construction; pretending it has an ordinary everywhere-positive Lebesgue density would be incorrect.

If a chain is already distributed as $\\pi$, one update remains distributed as $\\pi$. That statement says nothing about how quickly a badly initialized run approaches $\\pi$, or whether a proposal can connect its support. Invariance, convergence, and numerical accuracy of a particular average are three separate obligations.

## Zeros, support and log acceptance

Initialize in a state with finite positive target density for this density-ratio construction. A proposal outside the target support has $f(y)=0$ and is rejected, leaving another copy of $x$ in the record. If the reverse proposal has zero density while the forward one is positive, the move must also be rejected. An upward-only exponential increment illustrates the latter case: almost every proposed upward move has no reverse, so its acceptance is zero. Having proposals that move somewhere does not imply that the corrected chain moves.

A ratio with both numerator and denominator zero is not a numerical instruction to divide zero by zero. Forward-null events can be assigned an arbitrary acceptance value without changing the transition measure. A current state outside target support needs a separately specified initialization or extension rule; it is excluded in the implementations below. These conventions keep exceptional events distinct from ordinary underflow.

Compute an acceptance threshold as a log difference:
\\[
\\ell=f_{\\log}(y)-f_{\\log}(x)+q_{\\log}(x\\mid y)-q_{\\log}(y\\mid x).
\\]
Accept if $\\log u<\\min(0,\\ell)$ for an independent uniform $u\\in(0,1)$. An implementation using a generator that can return exactly zero may use $\\log(1-u)$ with $u\\in[0,1)$ instead, or explicitly handle the zero endpoint. Exponentiating a huge positive ratio is unnecessary. A nonfinite quantity caused by a genuine invalid domain should not silently become an accepted move.

There are different reasons for a zero acceptance probability: a true support violation, a reverse-proposal obstruction, or numerical failure evaluating a positive density. Logging the reason helps separate a model boundary from an arithmetic bug. Replacing a zero density by a small positive constant changes the target unless that modification is explicitly part of the statistical model.

For the proper Beta target below, the support is the open interval $(0,1)$. Endpoints have probability zero under the continuous distribution; they still require safe code because logarithms are evaluated at finite machine values. The raw Gaussian companion sends out-of-support proposals directly to rejection. It never silently redraws them until they are admissible. Redrawing would create a different proposal with a state-dependent normalizing constant.

## Rejection records and the chain observed only at jumps

Suppose the probability of leaving state $x$ is $a(x)=1-r(x)$. Watching only accepted moves gives a different process. In a setting where accepted moves change state almost surely, its jump kernel is $J(x,dy)=q(y\\mid x)\\alpha(x,y)\\,dy/a(x)$ when $a(x)>0$. Its invariant density, when normalizable, is proportional to $\\pi(x)a(x)$: multiplying by $J$ recovers the symmetric accepted flow. States that are hard to leave appear less often in the jump sequence than in the time-indexed chain.

A two-state example makes the effect exact. Let the target masses on $A,B$ be $3/4,1/4$ and always propose the other state. The acceptance probabilities are $1/3$ from $A$ to $B$ and one in the reverse direction. The transition matrix has rows $(2/3,1/3)$ and $(1,0)$, whose stationary masses are indeed $(3/4,1/4)$. Accepted moves alternate $A,B,A,B$, with limiting frequencies one half each. Dropping rejections therefore turns a correct chain into an incorrect empirical distribution.

### A three-state asymmetric ledger

A proposal correction and a rejection atom can both be checked by hand. Take states $A,B,C$, target masses $\\pi=(1/2,1/3,1/6)$, and proposal rows
\\[
Q=\\begin{pmatrix}0&3/4&1/4\\\\1/2&0&1/2\\\\1/3&2/3&0\\end{pmatrix}.
\\]
Rows label current states; columns label proposals. Every strict move has a positive reverse, but the proposal is not symmetric. The complete move ledger is:

| Move | Target ratio | Reverse/forward proposal ratio | Product ratio | Acceptance | Transition probability |
|---|---:|---:|---:|---:|---:|
| $A\\to B$ | $2/3$ | $2/3$ | $4/9$ | $4/9$ | $1/3$ |
| $A\\to C$ | $1/3$ | $4/3$ | $4/9$ | $4/9$ | $1/9$ |
| $B\\to A$ | $3/2$ | $3/2$ | $9/4$ | $1$ | $1/2$ |
| $B\\to C$ | $1/2$ | $4/3$ | $2/3$ | $2/3$ | $1/3$ |
| $C\\to A$ | $3$ | $3/4$ | $9/4$ | $1$ | $1/3$ |
| $C\\to B$ | $2$ | $3/4$ | $3/2$ | $1$ | $2/3$ |

Subtracting accepted row mass from one gives rejection atoms $5/9,1/6,0$, so
\\[
P=\\begin{pmatrix}5/9&1/3&1/9\\\\1/2&1/6&1/3\\\\1/3&2/3&0\\end{pmatrix}.
\\]
Off-diagonal balanced flows are $1/6$ between $A,B$, $1/18$ between $A,C$, and $1/9$ between $B,C$. Direct multiplication also checks every stationary column:
\\[
(\\pi P)_A=5/18+1/6+1/18=1/2,
\\quad
(\\pi P)_B=1/6+1/18+1/9=1/3,
\\]
\\[
(\\pi P)_C=1/18+1/9=1/6.
\\]
Each row sums to one; the missing diagonal of $Q$ does not justify deleting the diagonal of $P$.

If one incorrectly uses only the target ratio, the resulting kernel is
\\[
\\widetilde P=\\begin{pmatrix}5/12&1/2&1/12\\\\1/2&1/4&1/4\\\\1/3&2/3&0\\end{pmatrix},
\\qquad
\\pi\\widetilde P=(31/72,4/9,1/8)\\ne\\pi.
\\]
For example its $A\\to B$ stationary flow is $1/4$, while the reverse is $1/6$. The failure is caused by the omitted proposal ratio, not a lack of simulated iterations.

The correct accepted-move probabilities are $a=(4/9,5/6,1)$. Multiplying by $\\pi$ gives $(2/9,5/18,1/6)$, with total $2/3$. The accepted-only invariant masses are therefore $(1/3,5/12,1/4)$. Its jump transition rows are $(0,3/4,1/4)$, $(3/5,0,2/5)$ and $(1/3,2/3,0)$; multiplying the stated jump masses by these rows verifies them independently.

For an exposure interpretation, over $72$ attempted updates in stationarity the expected current-state counts are $(36,24,12)$ and expected accepted departures are $(16,20,12)$. These are expectations, not a fabricated finite-run table. Normalizing the departure counts gives the jump masses, while retaining all $72$ time positions gives the target masses in expectation. Expected total residence per jump visit is $1/a=(9/4,6/5,1)$. The hard-to-leave state $A$ is exactly the state underrepresented by an accepted-only record.

Repeated states are genuine retained draws, not duplicated evidence to delete. Their dependence increases simulation error; a suitable variance estimate must reflect it. A thinning rule based on a fixed time interval can preserve the stationary marginal, but it wastes available observations and cannot repair lack of exploration. Thinning only at acceptances is state dependent and has the different invariant law just derived.

A recorded acceptance rate also needs a denominator. Count every attempted transition, including raw support rejections, not only proposals whose density was finite. For a mixture proposal, retain component-specific attempts and acceptances as well as totals. A large acceptance rate from many tiny moves can coexist with a very small effective sample size for the mean, a tail indicator, or a mode label.

This distinction connects a kernel proof with a data-handling rule. An implementation can calculate the right ratio and still return the wrong empirical measure if it records only successes. Correctness includes what is retained, which index labels time, and how the estimand is calculated from that record.

## Coordinate changes preserve measures rather than density values

Let $x=T(z)$ be a differentiable bijection with a differentiable inverse and nonzero Jacobian on the relevant supports. Change of variables gives
\\[
\\pi_z(z)=\\pi_x(T(z))|\\det DT(z)|.
\\]
The extra determinant is not an optional prior or a tuning device. It is the factor that makes integrals of the same event equal in the two coordinates. A uniform density in one coordinate generally is not uniform after transformation.

For $p=\\operatorname{logit}^{-1}(z)$, $dp/dz=p(1-p)$. A Beta$(a,b)$ density in $p$ therefore becomes proportional to $p^a(1-p)^b$ in $z$. Its log density is $a\\log p+b\\log(1-p)$ up to a constant. Compute the two logs as $-\\log(1+e^{-z})$ and $-\\log(1+e^z)$ using a stable log-add-exp operation; direct exponentiation can overflow for an extreme proposal.

One can reach the same acceptance ratio entirely in the raw coordinate. A symmetric Gaussian increment in $z$ induces
\\[
q_p(p'\\mid p)=\\frac{\\phi_s(\\operatorname{logit}p'-\\operatorname{logit}p)}
 {p'(1-p')}.
\\]
Consequently the reverse/forward ratio is $p'(1-p')/[p(1-p)]$. Combining this with the raw target gives exactly the transformed-target ratio with a symmetric proposal. Use one representation consistently. Adding the transformed-target Jacobian and this induced-proposal correction together would count the same change of measure twice.

For Beta$(3,7)$, forgetting the logit Jacobian gives the logit density proportional to $p^2(1-p)^6$. Transforming its measure back to $p$ divides by $p(1-p)$, producing Beta$(2,6)$, with mean $1/4$ rather than $3/10$. This is a precise wrong-target prediction, stronger than saying the chain “might be biased.” A well-mixed implementation of the wrong density can pass many generic chain diagnostics.

More generally, transformed sampling must report estimands back in their intended coordinates. The mean of $z$ is not the logit of the mean of $p$. If the scientific question concerns $p$, calculate $p=T(z)$ for every retained state and summarize those values. Coordinate efficiency comparisons should use this same function of the state, not unrelated marginal variances.

## A truncated proposal has its own normalizer

Let $s>0$ and draw a Gaussian with center $p$ and standard deviation $s$, conditioned to lie in $(0,1)$. Its proposal density is
\\[
q(p'\\mid p)=\\frac{\\phi((p'-p)/s)}
 {sZ(p)}\\mathbf1_{(0,1)}(p'),
\\quad
Z(p)=\\Phi((1-p)/s)-\\Phi(-p/s).
\\]
The numerator is symmetric in $p,p'$, but $Z(p)$ is not constant. The Metropolis correction is
\\[
\\frac{q(p\\mid p')}{q(p'\\mid p)}=\\frac{Z(p)}{Z(p')}.
\\]
Near a boundary more of the unconditioned Gaussian lies outside the interval, so conditioning changes how much proposal density is assigned to the remaining region.

For fixed $s$, $Z$ is positive and continuous on $[0,1]$. With the chosen $s=0.18$, its calculation involves ordinary, well-separated normal CDF values. An inverse-CDF draw uses $v=\\Phi(-p/s)+uZ(p)$ followed by $p'=p+s\\Phi^{-1}(v)$. This is a bounded number of operations per attempt; it avoids an unbounded rejection-sampling loop. Finite-precision endpoint accidents are rejected and recorded, rather than clipped into the support.

If this normalizer ratio is omitted, detailed balance instead holds for a density proportional to $\\pi(p)Z(p)$. Indeed multiplication of that density by $q(p'\\mid p)$ cancels $Z(p)$, and the naive target-only acceptance then makes the remaining flow symmetric. The wrong law is neither the desired Beta law nor its reciprocal tilt. Numerical quadrature of the tilted density can supply an independent failure reference.

Contrast this with proposing an unconditioned Gaussian and rejecting an out-of-support result. There the density on the real proposal space remains symmetric, so no $Z$ ratio is required. The rejected probability mass is handled by the staying atom, not redistributed over valid proposals. Both constructions can be correct, but they define different kernels and may have different efficiencies.

The raw task therefore involves two separate normalizers: the target constant cancels from a Metropolis ratio, whereas the proposal's state-dependent normalizer generally does not. Declaring that “normalizing constants cancel” without specifying which constant and which variables are held fixed is a common source of a wrong algorithm.

## An independence kernel with a provable bound

An independence proposal has density $q(y)$, so its ratio is expressed through the importance weight $w(y)=\\pi(y)/q(y)$ as $\\min\\{1,w(y)/w(x)\\}$. It must assign positive probability wherever the target requires it. A proposal with missing support cannot be repaired by tuning an acceptance threshold.

If $w(x)\\le C<\\infty$ throughout the support, then
\\[
q(y)\\alpha(x,y)=\\min\\{q(y),\\pi(y)/w(x)\\}\\ge\\pi(y)/C.
\\]
Thus $P(x,A)\\ge\\pi(A)/C$. This is a genuine uniform minorization, much stronger than an attractive acceptance trace. Write $P=C^{-1}\\Pi+(1-C^{-1})R$, where $\\Pi(x,A)=\\pi(A)$ and $R$ is another invariant Markov kernel. At each step this decomposition allows a target refresh with probability $1/C$. Coupling two copies at their first shared refresh bounds their total-variation distance after $n$ steps by $(1-1/C)^n$. In particular the same bound applies against stationarity.

For Beta$(3,7)$ with an independent uniform proposal, $q=1$ on $(0,1)$ and $\\pi(p)=252p^2(1-p)^6$. Differentiating its log on the interior gives $2/p-6/(1-p)=0$, so the maximum is at $p=1/4$. Hence one may take $C=252(1/4)^2(3/4)^6$. The endpoints contribute zero and do not increase this maximum. This supplies a concrete correct sampler and a rigorous, although conservative, convergence comparison.

The condition is sufficient, not necessary. If an independence proposal has lighter tails than the target, $w$ may be unbounded and the displayed bound fails; the chain can spend a long time at a state with a huge weight. Lack of this particular bound does not by itself prove nonergodicity. A separate theorem would be needed.

There is also a useful design lesson: a proposal can be close to the target in its center but inadequate in its tails. Fitting a Gaussian approximation by local curvature does not establish bounded weights for a heavy-tailed target. Efficiency and theoretical safeguards need the whole support, not just the region explored by a preliminary run.

## Block updates and composition

Split a state into $(x,z)$ and keep $z$ fixed while updating $x$. The conditional target is $\\pi(x\\mid z)=\\pi(x,z)/m(z)$ wherever the marginal $m(z)$ is finite and positive. Its normalizing factor cancels in the ratio between two values of $x$. Therefore the Metropolis ratio can be evaluated from either the full conditional or the joint density with the other block held fixed. One must not accidentally change $z$ in just one of those evaluations.

To prove a block kernel invariant for the joint law, integrate first with respect to its conditional distribution: $\\int\\pi(dx\\mid z)K_z(x,A_z)=\\pi(A_z\\mid z)$. Then integrate against the marginal of $z$. This establishes joint invariance for all measurable sets. It also handles an exact Gibbs draw, which simply replaces $x$ by an independent draw from its conditional.

For a bivariate standard Gaussian with correlation $\\rho=0.9$, $x\\mid z$ is Normal$(\\rho z,1-\\rho^2)$. One can update this conditional exactly, or propose $x'=x+s\\xi$ and accept with its conditional-density ratio. The latter is usually wasteful here because the exact conditional is available, but it makes the invariance argument transparent. In a nonconjugate regression block, the same construction is genuinely useful.

Composing two invariant kernels remains invariant: $\\pi K_1K_2=(\\pi K_1)K_2=\\pi$. The composition need not be reversible; reversing its order generally gives a different operator. A fixed-probability random scan is an invariant mixture, and a mixture of reversible kernels is reversible when the weights are constant. State-dependent scan probabilities require another argument and can break invariance if chosen carelessly.

Blockwise correctness does not imply joint exploration. If each kernel preserves a hidden partition and no composition crosses it, the chain remains reducible. Nor does it imply that blocking is efficient: highly dependent coordinates can move slowly one at a time. A comparison should name the complete sweep, the target evaluations per block, and the estimand, so that an inexpensive single-coordinate update is not misleadingly compared with an entire multivariate transition.

## Adaptation is a change to the stochastic process

For a fixed tuning parameter $\\gamma$, suppose $P_\\gamma$ leaves $\\pi$ invariant. Choosing $\\gamma$ from the history makes the next transition history dependent. The elementary identity $\\pi P_\\gamma=\\pi$ for each fixed $\\gamma$ cannot simply be conditioned on the current state and averaged, because the distribution of $\\gamma$ and the state can be dependent. This is the mathematical reason adaptation requires more than a family of correct ratios.

One standard sufficient theorem uses diminishing adaptation together with containment. Diminishing adaptation means
\\[
D_n=\\sup_x\\|P_{\\Gamma_{n+1}}(x,\\cdot)-P_{\\Gamma_n}(x,\\cdot)\\|_{\\rm TV}\\longrightarrow0
\\]
in probability. Containment means that, for each $\\varepsilon>0$, the convergence times
\\[
M_\\varepsilon(X_n,\\Gamma_n)
=\\inf\\{m:\\|P_{\\Gamma_n}^m(X_n,\\cdot)-\\pi\\|_{\\rm TV}\\le\\varepsilon\\}
\\]
are bounded in probability. The individual kernels must satisfy the ergodicity assumptions of the theorem. Under these hypotheses the adaptive marginal approaches $\\pi$; suitable additional hypotheses support corresponding averaging results. Small parameter increments do not automatically bound the supremum of kernel differences or prevent the chain from visiting increasingly poorly mixing kernels.

A concrete finite-adaptation template is to update a log proposal scale during the first $1000$ transitions by
\\[
\\log s_{n+1}=\\operatorname{clip}_{[\\log0.01,\\log2]}
\\{\\log s_n+(n+10)^{-0.6}(A_n-0.44)\\},
\\]
where $A_n$ is the acceptance indicator. Freeze the resulting scale afterwards. This is a fully declared schedule, not a claim that its finite warmup reached stationarity. Conditional on the warmup history, subsequent transitions use a fixed kernel. Asymptotic claims still require that kernel to be ergodic for its realized scale and starting state; finite initialization error remains possible.

This schedule is a teaching template rather than a supplied adaptive implementation. The matched comparison below deliberately uses fixed scales, so its efficiency data are not confounded by different adaptation rules. If an adaptive comparison is undertaken, retain its entire tuning path, its clipping bounds and the exact freeze time, and account for warmup work separately. Continuing adaptation in retained draws requires an actual applicable theorem, not a verbal promise that adaptation “gets smaller.”

## Tempering requires proper intermediate targets

For inverse temperatures $\\beta_i>0$, define $\\pi_i(x)\\propto f(x)^{\\beta_i}$ only when each normalizing integral is finite and nonzero. On an unbounded space, flattening a proper density can make it improper. A Cauchy density has tail of order $|x|^{-2}$; its power $\\beta$ is integrable only when $2\\beta>1$. Thus a ladder reaching temperature $T=1/\\beta\\ge2$ is invalid for that target, despite the original Cauchy law being proper.

A concrete proper template uses $f(x)=\\{\\phi(x-4)+\\phi(x+4)\\}/2$ and the ladder $\\beta=(1,1/2,1/4)$. All three powers are integrable because of their Gaussian tails. Use symmetric local Gaussian increments with standard deviations $(1,\\sqrt2,2)$ and their respective powered-target ratios. After one local move at each temperature, attempt a swap of coordinates zero and one on odd sweeps and one and two on even sweeps.

The joint target is the product $\\prod_i\\pi_i(x_i)$. A swap of coordinates $i,j$ is an involution with unit Jacobian, and its ratio is
\\[
\\exp\\{(\\beta_i-\\beta_j)(\\log f(x_j)-\\log f(x_i))\\}.
\\]
The unknown normalizing constants cancel because one value remains assigned to each temperature. Each local move and each swap preserves the product target; their fixed schedule therefore preserves it too. This proves invariance, not that the specified ladder crosses the modes frequently.

For inference about the original posterior, use the cold coordinate $\\beta=1$. Pooling all temperature streams without a justified reweighting scheme changes the law being estimated. Swapping labels and swapping states are equivalent only if the recorded correspondence between state and temperature is kept exact.

This template provides a target, proposals and schedule for the earlier tempering discussion. It is not a reported run, and no observed mode-switching advantage is attached to it. Comparisons must include target evaluations at every temperature, swap acceptance, round trips and cold-chain estimand error. A high swap rate between nearly identical temperatures can coexist with poor global exploration; a hotter chain that is itself poorly sampled cannot serve as a reliable transport mechanism.

## Reversible jump with an explicit dimension match

A trans-dimensional target lives on a disjoint union of parameter spaces, each with its own dimension and reference measure. Let its model probabilities be $w_k$ and within-model densities $f_k(x_k)$. A move from $k$ to $l$ selects an auxiliary variable $u$ with known density, then applies a one-to-one differentiable map $(x_k,u)\\mapsto(x_l,u')$ whose input and output dimensions agree. The acceptance ratio includes target masses, forward/reverse move probabilities, auxiliary densities and the absolute Jacobian of this map. A missing factor changes model frequencies, even if each within-model sampler is correct.

An exact toy template has models zero and one, each with prior probability one half and no observations. Model zero contains $x\\sim N(0,1)$; model one contains independent $x,y\\sim N(0,1)$. With probability one half attempt a dimension switch, and otherwise perform a symmetric unit-scale within-model random-walk Metropolis update. A birth draws $u\\sim N(0,1)$ and maps $(x,u)$ to $(x,y=u)$. The reverse death removes $y$; the birth has an empty reverse auxiliary input, and its inverse maps $(x,y)$ back to $(x,u=y)$. The matching map has Jacobian one.

The ratio for a birth is
\\[
\\frac{(1/2)\\phi(x)\\phi(u)(1/2)}
 {(1/2)\\phi(x)(1/2)\\phi(u)}=1.
\\]
The reverse ratio is also one. These switch moves therefore accept always, while the within-model moves use their ordinary Gaussian-target ratios. The self-transition possibilities in the mixture avoid relying on a periodically alternating model index. The example checks dimension and probability factors without conflating the method with an unknown normalizing-constant calculation.

This is a prior-only model-space illustration, not evidence for choosing a scientific model. With observations, replace $w_k f_k$ by the complete likelihood-times-prior model target and specify every model prior and auxiliary proposal anew. A spike-and-slab prior or a Dirichlet-process mixture defines a statistical object; neither phrase specifies a reversible-jump map or supplies a continuous relaxation automatically.

The source duty is a mathematical construction template: its exact target, schedule, dimension match and balance proof are supplied, but no public reversible-jump execution is claimed. A more elaborate split/merge map needs an actual invertibility and Jacobian check, not a claim that dimension matching by itself proves reversibility.

## Annealing and equilibrium concentration are different claims

Optimization can use a family $\\pi_T(x)\\propto\\exp\\{-E(x)/T\\}$ with $T>0$, provided it is proper. On a finite state space it always is. Let $S=\\{-2,-1,0,1,2\\}$ and $E(x)=(x^2-1)^2$. The minimum is zero at $-1,1$, the energy at zero is one, and the other two states have energy nine. The exact total mass outside the minimizers is
\\[
\\frac{e^{-1/T}+2e^{-9/T}}{2+e^{-1/T}+2e^{-9/T}},
\\]
which tends to zero as $T\\downarrow0$. This is a direct equilibrium calculation, with no simulation.

For a Markov template, propose each available neighboring state with probability one quarter and use the remaining probability for staying put. This proposal is symmetric on every edge and irreducible on the finite graph. At fixed $T$, ordinary Metropolis acceptance with $\\exp\\{-[E(y)-E(x)]/T\\}$ has the stated invariant law and a self-loop. An illustrative finite schedule is $100$ updates at $T=1$, then $100$ at $1/2$, then $100$ at $1/4$.

The changing-temperature process is not stationary at any one of those laws. Equilibrium concentration does not prove that this finite schedule reaches a minimizer with a specified probability. General cooling theorems require hypotheses on the state graph, energy barriers and schedule. No such asymptotic theorem is invoked to certify the finite template above. Report its best visited state as an optimization candidate and retain the distinction from posterior sampling.

On a continuous unbounded space, even existence and concentration of the family need additional conditions. A proper density need not attain a global maximum, and a flat or singular mode can change the limiting behavior. Raising an unnormalized target to a power is meaningful only with the reference measure and normalizability specified. These requirements also apply to simulated tempering and parallel tempering; their inference goals differ, but neither can normalize an infinite integral by notation.

## Comparing kernels for the same scientific question

The relevant efficiency depends on the function being averaged. A kernel can estimate the posterior mean well while visiting a rare tail event too infrequently. For a stationary chain and estimand $h$, a central-limit variance involves the complete autocovariance sum, not just acceptance or a lag-one correlation. Estimation of that sum requires a suitable mixing/CLT setting and a finite-data method; no chain statistic supplies a universal guarantee.

Nonoverlapping batch means offer a transparent comparison. Split $n=ab$ retained draws into $a$ consecutive batches of length $b$. For their means $\\bar h_j$, estimate the MCSE of the overall mean as $\\operatorname{sd}(\\bar h_j)/\\sqrt a$. The method needs enough long batches to capture dependence. Reporting several batch sizes reveals sensitivity, but agreement among three choices is not a proof that every slow timescale has been captured.

An effective sample size associated with this estimate is the marginal sample variance divided by squared MCSE. It is estimand specific and can exceed $n$ for genuinely negative dependence; mechanically capping it at $n$ hides that interpretation. A constant trace gives a degenerate estimate and must be flagged, not assigned infinite information. For a quantile, estimate uncertainty through the indicator $\\mathbf1_{\\{p\\le q\\}}$ and divide its mean MCSE by the target density at the reference quantile when that density is positive and the quantile-CLT assumptions hold.

A cost unit must also be stated. The comparison below counts one attempted proposal target evaluation per transition, including raw support violations and repeated states. It reports warmup and retained work separately, and counts proposal CDF/inverse-CDF calls. ESS per target evaluation is a reproducible arithmetic comparison, not equal wall-clock cost: a support check may be far cheaper than a transformed density, and truncated proposals add special-function work. No observed speed ordering is supplied before the programs run.

These choices connect mathematical invariance to practical accuracy. First specify the measure and kernel, then verify its stationary target, then compare the same estimands under declared costs and initialization. Only after these steps do finite diagnostics become interpretable evidence about the approximation that the application actually needs.

## Mixture proposals and their move labels

Suppose a proposal is a fixed mixture $q(y\\mid x)=\\sum_k w_kq_k(y\\mid x)$ with positive constant weights summing to one. There are two valid algorithms that should not be confused. One evaluates the full mixture density in the Metropolis ratio. The other first chooses a component label $k$ with probability $w_k$ and applies that component's own Metropolis kernel. The second is a mixture of invariant kernels, so it is invariant; it need not have the same acceptance rule or transition law as the first.

For two symmetric random-walk components, both constructions reduce to a target-only ratio, because both the full mixture and the selected component are symmetric. This explains why a local/large-jump mixture is easy to use in the earlier bimodal example. With nonsymmetric components, cancellation in one implementation cannot be assumed in the other. Record whether the ratio used the marginalized proposal or the selected move label.

If component weights depend on the current state, the simple invariant-mixture proof fails. An augmented move-label construction can include the forward selection probability $w_k(x)$ and the appropriate reverse label probability $w_{k'}(y)$ in its ratio. The label-reversal map and proposal densities must be specified. Choosing long jumps more often in one region than another without that correction can alter the target.

The same issue appears in model moves, block scans and communication between chains. A state-dependent decision is part of the proposal mechanism, even when it is described as a convenient scheduling heuristic. Deterministic compositions of individually invariant updates are valid, whereas a state-dependent choice among them needs an additional argument.

For reporting efficiency, component counts should include rejected attempts. A large-jump component may be accepted rarely but supply important transitions between regions; conversely it may consume substantial work on distant proposals. A pooled acceptance rate hides these differences. Compare estimands and movement conditional on the declared component, and include all component costs in the overall comparison.

## Invariance and long-run averaging have distinct hypotheses

Detailed balance is sufficient for invariance, not necessary. A deterministic cyclic shift on three equally weighted states preserves the uniform law but is not reversible. Starting from one state, its marginal never converges to uniform because it is periodic, while its time averages of every function converge to the uniform average. This finite example explains why marginal convergence and Cesàro or ergodic averages are different claims.

On a general state space, positive Harris recurrence provides an appropriate framework for an almost-sure law of large numbers for integrable functions, with the theorem's initial-state scope stated. Aperiodicity is used for the usual marginal convergence result. Merely writing an invariant density or observing that a transition has positive acceptance does not verify these hypotheses. A proposal confined to one half of a disconnected support may leave a density invariant on each half and still fail to represent the intended mixture from one start.

A central limit theorem is stronger than a law of large numbers. If it holds for $h$, the asymptotic variance is
\\[
\\sigma_h^2=\\operatorname{Var}_\\pi(h(X_0))
 +2\\sum_{k\\ge1}\\operatorname{Cov}_\\pi(h(X_0),h(X_k)),
\\]
under hypotheses justifying the expression and convergence. Correlations can cancel or reinforce one another. Geometric ergodicity with a $2+\\delta$ moment is one standard safe sufficient route in general settings; another theorem may use reversibility and different moment assumptions.

These results are imported at their stated scope, not inferred from one trace. They explain why a numerical MCSE can be a useful approximation without being a certificate: its estimator presupposes a setting in which a stable long-run variance is meaningful. A run can be too short to reveal a slowly visited region, even when a valid asymptotic theorem exists.

Starting at the exact posterior would remove initialization bias but not serial dependence. Conversely, many apparently independent proposals do not remove a model or Jacobian error. A complete analysis keeps target correctness, asymptotic conditions and finite simulation uncertainty visible together.

## An integrable estimand can have infinite variance

The sampler's target does not determine one universal error rate for every function. For Beta$(3,7)$, near zero the density is proportional to $p^2$. Thus
\\[
E[p^{-k}]<\\infty\\quad\\hbox{exactly when }k<3,
\\]
because the relevant integral behaves like $\\int_0^\\varepsilon p^{2-k}dp$. The other endpoint causes no difficulty for this power.

For $h(p)=1/p$, the beta-integral ratios give $E[h]=9/2$ and $E[h^2]=36$, hence variance $63/4$. A suitable Markov-chain CLT still needs dependence assumptions, but the marginal second moment is finite. For $g(p)=1/p^2$, the mean remains finite and equals $36$, while $E[g^2]=E[p^{-4}]$ is infinite. Even iid posterior draws then do not satisfy the ordinary finite-variance Gaussian sample-mean CLT.

The beta ratios can be checked directly from $B(a,b)=\\int_0^1p^{a-1}(1-p)^{b-1}dp$: $E[p^{-k}]=B(3-k,7)/B(3,7)$ when $k<3$. At or beyond the boundary the integral diverges, so extending a factorial formula outside its integrability range would invent a finite answer.

A finite program can always produce a sample variance unless its arithmetic fails. That number does not establish existence of the population variance. A rare very small $p$ may dominate the transformed average long after a benign-looking early run. Robust plots, tail analysis and mathematical moment checks complement diagnostics of dependence.

The matched benchmark intentionally compares bounded $p$ and bounded quantile indicators, avoiding this particular moment obstacle. This is a choice of validation unit, not a claim that the sampler accurately estimates every reciprocal moment or every scientific loss that might later be imposed. When an application changes its estimand, revisit both moment existence and the chain's relevant dependence.

## Solutions: original MH implementation reference

### Original MH Exercise 2 — implementation and comparison

COMM06-CASE-01-MH-MATCHED supplies the original Exercise 2 implementation and explicit proposal correction. Its target is Beta$(3,7)$, distinct from the earlier Beta$(9,18)$ case. There are no observations: it can be represented by a proper Beta$(3,7)$ prior and likelihood one. Its normalized density is $252p^2(1-p)^6$, mean $3/10$ and variance $21/1100$.

The CDF is $84p^3-378p^4+756p^5-840p^6+540p^7-189p^8+28p^9$. The program evaluates its equivalent nonnegative binomial-tail polynomial at exact rational arguments. Sixty bisections produce certified rational brackets of width $2^{-60}$ for probabilities $1/40,1/2,39/40$. The reported floating midpoint references are approximations to those brackets.

The raw truncated-normal implementation uses SD $0.18$, inverse-CDF proposals and $\\log Z(p)-\\log Z(p')$. The logit kernel uses SD $0.8$ and target $3\\log p+7\\log(1-p)$. A third correct companion uses an untruncated raw Gaussian with SD $0.18$ and retains every support rejection. It supplements the required truncated kernel.

All use starts $(0.01,0.25,0.75,0.99)$, $5000$ warmup and $60000$ retained transitions, without adaptation. The common efficiency estimand is $p$, using batch means of lengths $150,300,600$, with $300$ selected for the five-MCSE mean criterion. Quantile indicators support a quantile-MCSE approximation, and the declared finite quantile-error criterion is $0.02$. No threshold guarantees a realized pass.

The seed base is $20260906$ with offsets $100+10k+j$, for profile index $k$ in the printed order and chain index $j=0,\\ldots,3$. Each creates Generator(PCG64) independently. Every attempted transition uses one proposal target evaluation, including support rejections; the current target is cached. All and retained work are separated, with requested normal/uniform variates and normal CDF/inverse-CDF calls counted. Equal target-evaluation counts are not equal wall-clock costs.

Two failure profiles are intentional. Omitting the logit Jacobian targets Beta$(2,6)$ with mean $1/4$. Omitting the truncated-proposal correction targets density proportional to the desired density times $Z(p)$; its mean is independently computed by quadrature, with error estimates reported. The reference distinguishes agreement with each wrong invariant law from error against the intended target.

The listing is unexecuted by the authors. No acceptance, ESS, speed ordering or realized tolerance pass is asserted. A complete reproduction records the actual output against the frozen whole source, fence/body, complete passports, versions and settings. Finite agreement cannot establish general convergence or certify another model.

For CBM-CLAIM-024 at content/books/computational-bayesian-modeling/metropolis-hastings-kernel.md:77, the independence/block/RJ/annealing/adaptive/tempering workflows have template_scope disposition: their targets, proposal laws, schedules and proofs or theorem hypotheses are supplied above, but no executions are claimed. The matched implementation completes the separate original Exercise 2 source reference.

## References: kernel and adaptation boundaries

The kernel, Jacobian, minorization, block, tempering and toy dimension-match proofs are supplied locally. The diminishing-adaptation plus containment theorem is imported from Roberts and Rosenthal, [Coupling and Ergodicity of Adaptive MCMC](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/AdaptiveMC/RobRosCouplingErgod2007.pdf), Theorem 13. Its kernel-TV and convergence-time conditions are stated above. The Harris-ergodic geometric-plus-$2+\\delta$-moment CLT is a separate import from Galin Jones, [On the Markov Chain Central Limit Theorem](https://arxiv.org/pdf/math/0409112), Corollary 2(1); no finite diagnostic establishes its assumptions.

## Solutions: matched Beta reference program

The pinned listing reads no input and emits one compact sorted-key JSON document. It performs no file, network, process or installation I/O. It remains unexecuted by the authors.

\`\`\`python
import json
import math
import platform
from fractions import Fraction
import numpy as np
import scipy
from scipy.special import expit, ndtr, ndtri
from scipy.integrate import quad

DEPS = {"python":"3.14.7","numpy":"2.5.2","scipy":"1.18.1"}
BASE, WARMUP, KEEP = 20260906, 5000, 60000
STARTS = (0.01,0.25,0.75,0.99)
RAW_SD, LOGIT_SD = 0.18, 0.8
PROFILES = ("raw_truncated","logit","raw_full",
            "logit_no_jacobian","truncated_no_correction")

def need(ok, message):
    if not ok:
        raise RuntimeError(message)

def exact_cdf(p):
    return sum(Fraction(math.comb(9,j))*p**j*(1-p)**(9-j) for j in range(3,10))

def quantile_bracket(probability):
    lo, hi = Fraction(0), Fraction(1)
    for _ in range(60):
        mid = (lo+hi)/2
        if exact_cdf(mid) < probability:
            lo = mid
        else:
            hi = mid
    need(exact_cdf(lo) <= probability <= exact_cdf(hi), "CDF bracket")
    return lo, hi

def normalizer(p):
    return float(ndtr((1-p)/RAW_SD)-ndtr(-p/RAW_SD))

def batch_mcse(draws, size):
    need(len(draws)%size == 0, "batch remainder")
    batches = draws.reshape((-1,size)).mean(axis=1)
    return float(batches.std(ddof=1)/math.sqrt(len(batches)))

def chain(profile, start, seed, refs, wrong_mean):
    rng = np.random.Generator(np.random.PCG64(seed))
    logit = profile.startswith("logit")
    state = math.log(start/(1-start)) if logit else start
    counters = dict(target_evaluations=0,normal_variates=0,
                    uniform_variates=0,normal_cdf_calls=0,normal_ppf_calls=0)
    def target(x):
        counters["target_evaluations"] += 1
        if logit:
            a,b = (2,6) if profile=="logit_no_jacobian" else (3,7)
            return float(-a*np.logaddexp(0.0,-x)-b*np.logaddexp(0.0,x))
        if not 0.0 < x < 1.0:
            return -math.inf
        return 2*math.log(x)+6*math.log1p(-x)
    current = target(state)
    draws = np.empty(KEEP)
    accepted = support_rejects = ret_accepted = ret_support = 0
    before_retained = None
    for t in range(WARMUP+KEEP):
        if t == WARMUP:
            before_retained = counters.copy()
        correction = 0.0
        if profile in ("raw_truncated","truncated_no_correction"):
            low = float(ndtr(-state/RAW_SD))
            high = float(ndtr((1-state)/RAW_SD))
            counters["normal_cdf_calls"] += 2
            counters["uniform_variates"] += 1
            v = low+float(rng.random())*(high-low)
            proposal = state+RAW_SD*float(ndtri(v))
            counters["normal_ppf_calls"] += 1
            if 0.0 < proposal < 1.0:
                counters["normal_cdf_calls"] += 2
                new_z = normalizer(proposal)
                if profile=="raw_truncated":
                    correction = math.log(high-low)-math.log(new_z)
        else:
            counters["normal_variates"] += 1
            proposal = state+(LOGIT_SD if logit else RAW_SD)*float(rng.normal())
        proposed = target(proposal)
        outside = not math.isfinite(proposed)
        counters["uniform_variates"] += 1
        log_u = math.log1p(-float(rng.random()))
        log_ratio = proposed-current+correction
        take = not outside and (log_ratio >= 0.0 or log_u < log_ratio)
        if take:
            state,current = proposal,proposed
        accepted += int(take)
        support_rejects += int(outside)
        if t >= WARMUP:
            draws[t-WARMUP] = float(expit(state)) if logit else state
            ret_accepted += int(take)
            ret_support += int(outside)
    retained_cost = {k:counters[k]-before_retained[k] for k in counters}
    need(retained_cost["target_evaluations"]==KEEP,"target cost")
    mean,variance = float(draws.mean()),float(draws.var(ddof=1))
    mcse = {str(b):batch_mcse(draws,b) for b in (150,300,600)}
    se = mcse["300"]
    ess = variance/(se*se) if se>0 else None
    invariant_mean = 0.25 if profile=="logit_no_jacobian" else (
        wrong_mean if profile=="truncated_no_correction" else 0.3)
    quantiles = np.quantile(draws,(0.025,0.5,0.975),method="linear").tolist()
    primary = profile in ("raw_truncated","logit","raw_full")
    qmcse = ([batch_mcse((draws<=q).astype(float),300)/(252*q*q*(1-q)**6)
              for q in refs] if primary else None)
    error = max(abs(a-b) for a,b in zip(quantiles,refs))
    return {"profile":profile,"start":start,"seed":seed,
            "warmup":WARMUP,"retained":KEEP,"mean":mean,"variance":variance,
            "mean_mcse_by_batch_size":mcse,"mean_ess_batch300":ess,
            "mean_ess_per_retained_target_evaluation":ess/KEEP if ess is not None else None,
            "invariant_mean_reference":invariant_mean,
            "invariant_mean_within_5_mcse":abs(mean-invariant_mean)<5*se if se>0 else False,
            "intended_mean_error":mean-0.3,
            "intended_mean_mcse_units":(mean-0.3)/se if se>0 else None,
            "quantiles":quantiles,"quantile_mcse_indicator_batch300":qmcse,
            "max_quantile_abs_error_vs_intended":error,
            "primary_quantile_criterion":error<0.02 if primary else None,
            "quantile_mcse_scope":"intended-target quantile MCSE only for primary profiles; "
                                  "not applicable to deliberately wrong invariant laws",
            "acceptance_retained":ret_accepted/KEEP,
            "acceptance_all":accepted/(WARMUP+KEEP),
            "support_rejections_retained":ret_support,
            "support_rejections_all":support_rejects,
            "cost_all":counters,"cost_retained":retained_cost,
            "first_eight":draws[:8].tolist(),"last_eight":draws[-8:].tolist()}

def run_case():
    actual = {"python":platform.python_version(),
              "numpy":np.__version__,"scipy":scipy.__version__}
    need(platform.python_implementation()=="CPython" and actual==DEPS,"dependency versions")
    probs = (Fraction(1,40),Fraction(1,2),Fraction(39,40))
    brackets = [quantile_bracket(p) for p in probs]
    refs = [float((lo+hi)/2) for lo,hi in brackets]
    need(exact_cdf(Fraction(0))==0 and exact_cdf(Fraction(1))==1,"CDF endpoints")
    norm,e0 = quad(lambda p:252*p*p*(1-p)**6*normalizer(p),0,1,
                   epsabs=1e-12,epsrel=1e-12)
    first,e1 = quad(lambda p:252*p**3*(1-p)**6*normalizer(p),0,1,
                    epsabs=1e-12,epsrel=1e-12)
    wrong_mean = first/norm
    runs = [chain(profile,start,BASE+100+10*k+j,refs,wrong_mean)
            for k,profile in enumerate(PROFILES) for j,start in enumerate(STARTS)]
    return {"schema_version":"1.0.0","case_id":"COMM06-CASE-01-MH-MATCHED",
            "program_id":"COMM06-PROGRAM-01-MH-MATCHED","dependencies":actual,
            "settings":{"base_seed":BASE,"rng":"NumPy Generator(PCG64)",
                        "warmup":WARMUP,"retained":KEEP,"starts":list(STARTS),
                        "raw_sd":RAW_SD,"logit_sd":LOGIT_SD,
                        "profiles":list(PROFILES),
                        "seed_rule":"base+100+10*profile_index+chain_index",
                        "batch_sizes":[150,300,600]},
            "references":{"mean":0.3,"variance":21/1100,"quantile_midpoints":refs,
                "quantile_brackets":[{"lo":str(lo),"hi":str(hi),"width":str(hi-lo),
                                     "probability":str(p)}
                                    for (lo,hi),p in zip(brackets,probs)],
                "missing_jacobian_mean":0.25,
                "missing_proposal_correction_mean":wrong_mean,
                "tilted_normalizer":norm,"quadrature_absolute_error_estimates":[e0,e1]},
            "runs":runs,
            "limits":"All rejected states retained. Target-evaluation counts are not "
                     "elapsed-time equality. Finite MCSE/quantile criteria are scoped "
                     "diagnostics. Failure profiles intentionally target different laws."}

if __name__=="__main__":
    print(json.dumps(run_case(),ensure_ascii=False,sort_keys=True,
                     separators=(",",":"),allow_nan=False))
\`\`\`
`;export{e as default};