
# Chaos, Ergodicity, and the Logic of Long-Time Evidence

**Before reading.** Read [Numerical Experiments in Dynamics](../books/dynamical-systems-first-course/numerical-experiments.md), [Outer Measure and Measurability](../books/measure-and-integration/outer-measure-and-measurability.md) and [Specifying a Process](../books/stochastic-processes-paths/specifying-a-process.md). These are preparation for the ideas used below.

A tangled orbit, positive finite-time exponent, stable histogram, or decaying sample correlation can each be valuable evidence. None is interchangeable with an ergodic theorem. Long-time dynamics uses several languages—topological, differentiable, measure-theoretic, symbolic, and computational—and a statement becomes meaningful only after its space, map or flow, measure, and quantifiers are named.

This deep dive assumes basic measure theory and dynamical systems. It supplies exact examples and theorem boundaries rather than a full graduate proof text.

## 1. The dynamical object

A discrete system is a measurable map

$$
T:X\to X
$$

and an orbit is x, Tx, T squared x, and so on. A continuous system is a family Phi_t satisfying

$$
\Phi_0=\operatorname{id},\qquad \Phi_{t+s}=\Phi_t\circ\Phi_s.
$$

An ODE produces such a flow only where existence and uniqueness give one global continuation. Blow-up, state boundaries, or nonuniqueness can prevent a global flow.

Questions differ:

- topological: are orbits dense, periodic points abundant, or nearby open sets eventually connected?
- differentiable: how do tangent vectors grow?
- measure-theoretic: which distributions are invariant, ergodic, or mixing?
- statistical: what limits and uncertainty govern observables?
- computational: which finite outputs remain credible under discretization and roundoff?

A result in one column may imply another under hypotheses, but the columns are not definitions of one phenomenon.

## 2. Invariance before ergodicity

A probability measure mu is invariant for T when

$$
\mu(T^{-1}A)=\mu(A)
$$

for every measurable A. Equivalently,

$$
\int \varphi\circ T\,d\mu=\int\varphi\,d\mu
$$

for every bounded measurable phi, or an adequate determining class.

An invariant set A satisfies T inverse A=A up to a null set. The system (T,mu) is **ergodic** when every invariant set has measure zero or one.

Ergodicity is relative. The same map can be ergodic under one invariant measure and nonergodic under another. Every fixed point carries an invariant point mass, which is trivially ergodic. That fact does not describe a nearby physical ensemble.

For a dissipative attractor, ambient volume is usually not invariant. A relevant invariant measure may be singular and supported on the attractor. Showing that time averages from a positive-volume set of starts converge to it defines a physical or SRB-type relevance in common settings, but existence and uniqueness are deep theorems, not automatic properties of a plotted attractor.

## 3. Ergodic decomposition

Nonergodicity often means the invariant measure is a mixture of ergodic components. An ergodic decomposition theorem, under standard Borel hypotheses, represents an invariant probability as an integral of ergodic invariant probabilities.

Time averages can then depend on the component containing the start. A simulation launched in one component cannot reveal mixture weights of another initial ensemble without sampling that ensemble.

Circular rotation of an entire disk gives an elementary picture. Radius is invariant. Uniform area decomposes across invariant circles. Along radius R, the time average of x squared is R squared/2. Under disk area, the space average is 1/4 for the unit disk. A single circle generally reports neither the disk average nor other circles.

## 4. Birkhoff’s pointwise theorem

Let T preserve probability mu and let phi be integrable. Then

$$
A_N\varphi(x)=\frac1N\sum_{k=0}^{N-1}\varphi(T^k x)
$$

converges for mu-almost every x to an invariant integrable function. If T is ergodic, the limit equals

$$
\int\varphi\,d\mu
$$

almost everywhere.

The proof uses maximal inequalities and conditional expectation or related machinery. Its conclusion has precise absences:

- no universal rate;
- no guarantee for exceptional starts;
- no uniform convergence over all observables;
- no independence of samples;
- no assertion that an empirical measure from a finite run is close;
- no identification of which invariant measure models an experiment.

For nonergodic mu, the limit is a conditional expectation onto the invariant sigma-algebra. That formulation explains component-dependent averages.

## 5. Mean ergodic theorem

For a measure-preserving T, the Koopman operator U phi=phi after T is an isometry on L2. Von Neumann’s mean ergodic theorem says the averages

$$
\frac1N\sum_{k=0}^{N-1}U^k\varphi
$$

converge in L2 to the orthogonal projection onto invariant functions.

This is norm convergence, not pointwise convergence. Under ergodicity the invariant L2 functions are constants, so the projection is the mean. Birkhoff and von Neumann answer related questions through different modes of convergence.

## 6. Mixing hierarchy

Strong mixing means

$$
\mu(A\cap T^{-n}B)\longrightarrow\mu(A)\mu(B)
$$

for all measurable A,B. Weak mixing can be formulated through Cesàro decay of squared correlations or absence of nonconstant Koopman eigenfunctions. Standard implications are

$$
\text{strong mixing}\implies\text{weak mixing}\implies\text{ergodicity}.
$$

Converses fail.

Mixing yields asymptotic decorrelation for fixed square-integrable observables, but a central limit theorem still needs additional structure. Long-range dependence can defeat ordinary root-N uncertainty.

“The autocorrelation looks near zero after lag 20” is an empirical statement about selected observables and a finite run. It does not establish mixing for all measurable sets.

## 7. Irrational rotation: ergodic, not mixing

Let T_theta(x)=x+theta modulo 1 on the circle with uniform measure. If theta is irrational, the system is ergodic.

One proof uses Fourier coefficients. If f after T=f, then for coefficient f_hat(k),

$$
\widehat f(k)=e^{2\pi i k\theta}\widehat f(k).
$$

For nonzero integer k, irrationality makes the multiplier different from one, so every nonconstant Fourier coefficient vanishes. Hence invariant L2 functions are constant.

The system is not mixing. For f(x)=exp(2 pi i x),

$$
f\circ T^n=e^{2\pi i n\theta}f.
$$

Its correlation with f retains magnitude one rather than decaying. This example is a permanent guard against treating ergodic and mixing as synonyms.

The rotation is also uniquely ergodic: uniform measure is its only invariant probability. For continuous f, time averages converge uniformly in the starting point. Unique ergodicity is a topological-measure statement stronger in one direction and different from mixing.

## 8. Bernoulli shift: a mixing model


**Worked example.**
Let X be two-sided binary sequences with product fair-coin measure, and let T shift the sequence left. Cylinder sets depending on disjoint coordinate blocks are independent. For cylinders A and B, sufficiently large shifts separate their coordinate blocks, giving exact factorization. Approximation extends mixing to the generated sigma-algebra.

This deterministic map on sequence space is measure-theoretically a model of independent observations under the product measure. A deterministic system being measure-isomorphic to a Bernoulli shift is an exceptionally strong chaotic property, not implied by a positive exponent alone.

## 9. Recurrence

Poincaré recurrence: if T preserves a finite measure and A is measurable, almost every point in A returns to A infinitely often.

A proof valid without invertibility uses inverse images. Let \(B=A\cap\bigcap_{n\ge1}T^{-n}(X\setminus A)\), the measurable set of points in \(A\) that never return. If \(i<j\) and \(x\in T^{-i}B\cap T^{-j}B\), then \(T^i x\in B\) returns to \(A\) at time \(j-i\), a contradiction. Thus the measurable sets \(T^{-n}B\), \(n\ge0\), are pairwise disjoint and each has measure \(\mu(B)\); finiteness forces \(\mu(B)=0\). Every point of \(A\) with only finitely many future returns has a last visit to \(A\), so it belongs to \(\bigcup_{n\ge0}T^{-n}B\), a null set. This proves infinitely many returns almost everywhere.

Recurrence does not supply:

- exact periodicity;
- recurrence of every point;
- a small return time;
- mixing or ergodicity;
- convergence toward the starting state.

Kac’s lemma relates mean return time to reciprocal set measure under an ergodic probability setup with precise conditioning. Rare sets have long mean returns. A finite simulation missing a rare recurrence is not contrary evidence.

## 10. Lyapunov exponents and Oseledets

For a differentiable map, derivatives multiply along an orbit:

$$
D(T^n)(x)=DT(T^{n-1}x)\cdots DT(x).
$$

Oseledets’ multiplicative ergodic theorem, under an invariant measure and logarithmic integrability conditions, gives Lyapunov exponents and invariant splittings for almost every x. Ergodicity makes the exponent values almost surely constant, though directions can vary.

A positive largest exponent means infinitesimal perturbations expand exponentially in some direction on average. It does not alone imply:

- the orbit lies on a compact attractor;
- topological transitivity;
- positive exponent for a positive-volume set;
- a unique physical measure;
- structural robustness;
- numerical shadowing of the intended initial condition.

In a flow, one exponent is ordinarily zero along the flow direction away from equilibria. Time rescaling changes exponent magnitudes. Coordinates with bounded smooth changes preserve signs and values asymptotically, but singular transformations can alter them.

## 11. Entropy

Metric entropy quantifies average information production relative to an invariant measure. It is defined through finite measurable partitions and a supremum. Topological entropy counts orbit complexity without choosing a measure.

The variational principle links them under compact continuous hypotheses:

$$
h_{\mathrm{top}}(T)=\sup_{\mu\ \text{invariant probability}}h_\mu(T).
$$

Pesin-type formulas relate metric entropy to positive Lyapunov exponents under smoothness and absolute-continuity hypotheses. Quoting “entropy equals sum of positive exponents” without those hypotheses is unsafe.

Positive entropy implies strong orbit complexity, but zero entropy does not mean trivial dynamics. Irrational rotations have zero entropy yet dense orbits.

## 12. Topological chaos packages

Devaney chaos on a metric space typically combines transitivity, dense periodic points, and sensitivity, with redundancies under some hypotheses. Li–Yorke chaos uses an uncountable scrambled set. A Smale horseshoe supplies symbolic dynamics and infinitely many periodic orbits.

These are related but none is the universal definition. A paper or computation should state which package it uses.

For interval maps, positive topological entropy, horseshoes for an iterate, and period structures have strong connections. In higher dimensions the implications are subtler.

## 13. Logistic-map audit

For

$$
T_r(x)=rx(1-x)
$$

on [0,1] with 0<=r<=4, fixed points solve x=T_r(x): zero and 1-1/r when r>1. Derivatives determine local stability away from magnitude one.

At r=4, the map has an explicit invariant density

$$
\rho(x)=\frac{1}{\pi\sqrt{x(1-x)}}
$$

and is related to angle doubling through a trigonometric change of variables. Under the corresponding invariant measure, strong ergodic and mixing claims can be proved.

For other parameters, stable cycles and periodic windows occur. “The logistic map is chaotic” without r and invariant set is incomplete.

Finite precision maps the interval to finitely many machine states, so every stored orbit eventually becomes periodic. Discarding the transient and plotting a histogram can approximate an invariant density, but validation should vary precision, initial state, binning, and iterate count and compare exact moments where available.

## 14. From deterministic dynamics to statistical error

Suppose an ergodic average estimates mu(phi). Consistency comes from Birkhoff. A standard error needs more.

Under suitable mixing and moment conditions, a central limit theorem may give

$$
\sqrt N\bigl(A_N\varphi-\mu(\varphi)\bigr)\xrightarrow{\mathrm d}\mathcal N(0,\sigma^2),
$$

where

$$
\sigma^2=\gamma(0)+2\sum_{k=1}^\infty\gamma(k).
$$

The iid variance gamma(0) is wrong when correlations remain. The series may diverge under long memory, and sigma can be zero for a coboundary even when observations vary.

Block methods, spectral-density estimates, regenerative methods, or rigorous transfer-operator bounds need assumptions. Multiple initial conditions do not create independent replicates if all share a long common transient or deterministic parameter error.

## 15. Numerical evidence ladder

Label conclusions:

1. **Orbit observation:** this computation produced these values.
2. **Refined orbit evidence:** method, step, precision, and implementation checks agree over this horizon.
3. **Structural numerical evidence:** invariants, residuals, symbolic coding, interval bounds, or validated numerics support a property.
4. **Theorem application:** verified hypotheses imply the property for a defined system.
5. **Model claim:** the system and invariant measure represent the target phenomenon under stated evidence.

Do not climb from 1 to 4 by running longer.

For long-time averages, record the observable, candidate invariant measure, transient rule, running average, block variation, multiple invariant components, discretization refinement, precision, and theorem status.

## Practice with worked solutions

### 1. Ergodic mixture

<a id="deep-dive-chaos-ergodicity-long-time-ex-1"></a>

**Exercise 1.**

Let T be identity on two points with measure one half on each. Is it ergodic?


<details>
<summary>Hint 1</summary>

Under the identity map, every subset maps to itself.
</details>
<details>
<summary>Hint 2</summary>

A singleton has measure one half here; compare that with the zero-or-one requirement for ergodicity.
</details>
<details>
<summary>Solution</summary>

No. Each singleton is invariant and has measure one half. Time averages equal the observable at the starting point, while the space average is the mean of both values.

</details>

### 2. Mixing implication

<a id="deep-dive-chaos-ergodicity-long-time-ex-2"></a>

**Exercise 2.**

Prove mixing implies ergodicity.


<details>
<summary>Hint 1</summary>

Start with a set A that is invariant up to null sets.
</details>
<details>
<summary>Hint 2</summary>

For every iterate, its intersection with its inverse image has measure mu(A); mixing makes the limit mu(A) squared.
</details>
<details>
<summary>Solution</summary>

If A is invariant modulo null sets, then mu(A intersect T inverse n A)=mu(A) for every n. Mixing makes the limit mu(A) squared. Thus mu(A)=mu(A) squared, so mu(A) is zero or one.

</details>

### 3. Rotation correlation

Why does irrational circle rotation fail mixing even though every orbit is dense?

**Solution.** For Fourier observable f(x)=exp(2 pi i x), composition by the nth rotation multiplies f by a unit complex phase. Correlation magnitude with f remains one and does not approach the product of means, which is zero. Dense orbit geometry does not force correlation decay.

### 4. A finite exponent

A computed exponent is positive for 10,000 steps. State the strongest immediate conclusion.

**Solution.** Under the declared algorithm, precision, initial state, and transient rule, the finite-time tangent-growth average is positive. A convergence and refinement audit may support a positive asymptotic exponent, but ergodicity, mixing, an attractor, and a physical invariant measure need separate evidence or theorems.

### 5. Recurrence boundary

Why does x'=-x on the real line not force typical nonzero states to return?

**Solution.** Lebesgue measure is not preserved by the contracting flow, and there is no finite invariant probability describing all nonzero states. Poincaré recurrence’s finite measure-preserving hypothesis fails.
