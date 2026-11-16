# 19. Langevin methods

## Learning goals and prerequisites

This chapter turns a gradient into a sampling proposal. You will derive a diffusion that preserves a chosen smooth density, see exactly how an Euler step changes a Gaussian target, and add the asymmetric Metropolis correction that defines MALA. You will also use a constant preconditioner, interpret a high-dimensional tuning result, and recognize cases where a locally informed step is still a poor move.

You need Gaussian covariance from [Chapter 02](02-probability.md), log probabilities from [Chapter 04](04-numerics.md), invariance and convergence from [Chapter 08](08-convergence.md), and asymmetric Metropolis–Hastings from [Chapter 09](09-metropolis-hastings.md). [Chapters 13–15](13-mc-error.md) develop Monte Carlo error, diagnostics, and adaptation; [Chapter 16](16-geometry.md) develops changes of coordinates. Brownian motion is introduced here only through its Gaussian increments. No stochastic calculus is presumed.

## 1. A gradient can aim a proposal

Let $\pi$ be a positive, differentiable density on $\mathbb R^d$. We may know it only up to a constant: $\pi(x)\propto\exp[-U(x)]$, where $U$ is called a *potential*. Adding a constant to $U$ changes neither the density after normalization nor its gradient. The vector $-\nabla U(x)=\nabla\log\pi(x)$ points locally toward increasing density. A random-walk proposal ignores it; a Langevin proposal adds a displacement along it to Gaussian noise.

Why keep the noise? Following the gradient alone is optimization: near a mode, the state settles there. Sampling must also represent the width and shape of the distribution. In many dimensions, the high-density point may be unlike a typical draw in radius, as [Chapter 02](02-probability.md) explained. The relative sizes of drift and noise therefore determine which distribution a long-running process preserves. “Add noise to gradient descent” is not a sampling theorem.

A gradient also has a cost. For a model with many data points, one full gradient may cost as much as several density evaluations. A chain that moves farther per transition can lose in useful estimates per second. We will keep *statistical behavior* and *work per transition* separate.

## 2. The continuous diffusion and its stationary density

Choose the following convention for overdamped Langevin motion:

$$
dX_t=-\nabla U(X_t)\,dt+\sqrt{2}\,dW_t.
$$

For a short interval of length $h$, the Brownian increment $W_{t+h}-W_t$ is a zero-mean Gaussian vector with covariance $hI$. Thus the Brownian noise contribution has covariance $2hI$. The full increment also includes an integrated, state-dependent drift; it is generally neither Gaussian nor of covariance $2hI$ at a finite $h$. Freezing that drift gives the Gaussian Euler approximation in Section 3. Other texts use drift $\frac12\nabla\log\pi$ and unit Brownian noise; a rescaling of time relates that convention to ours. Mixing formulas from the two conventions produces factor-of-two errors.

There is a compact way to check the intended stationary law. For a twice differentiable test function $f$ with compact support, the diffusion generator is

$$
Lf(x)=-\nabla U(x)\cdot\nabla f(x)+\Delta f(x).
$$

Because $\nabla\pi=-\pi\nabla U$, integration by parts gives

$$
\int Lf(x)\pi(x)\,dx
=\int\bigl[-\pi\nabla U\cdot\nabla f+\pi\Delta f\bigr]dx
=\int\nabla\!\cdot(\pi\nabla f)\,dx=0.
$$

Compact support removes the boundary term in this calculation. The identity expresses infinitesimal stationarity; to conclude that a diffusion with invariant law $\pi$ exists, one also needs a well-defined, nonexplosive process and an appropriate generator domain. A convenient sufficient working setting is a globally Lipschitz $\nabla U$, with $U$ strongly convex outside a bounded region and $\exp(-U)$ integrable. The stationary calculation itself does not establish convergence from every starting point. [Roberts and Tweedie](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsTweedieBernoulli1996.pdf) study the diffusion and its discrete approximations separately, a distinction that will matter below.

The same integration by parts also checks *reversibility*, a stronger property than stationarity. For smooth compactly supported $f,g$,

$$
\int gLf\,\pi\,dx=-\int\nabla g\cdot\nabla f\,\pi\,dx
=\int fLg\,\pi\,dx.
$$

This symmetry of the generator gives the reversible diffusion under the usual well-posedness and domain conditions above. It should not be transferred automatically to a numerical discretization: that discretization is a different kernel.

## 3. Euler steps produce ULA

Freeze the drift at the beginning of a short interval and draw its Gaussian increment. Euler discretization yields the *unadjusted Langevin algorithm* (ULA):

$$
X_{k+1}=X_k-h\nabla U(X_k)+\sqrt{2h}\,Z_k,
\qquad Z_k\overset{\mathrm{iid}}\sim N(0,I),\quad h>0.
$$

The mean of a proposed step is $m_h(x)=x-h\nabla U(x)$; its covariance is $2hI$. The step $h$ is a time increment, while its random standard deviation per coordinate is $\sqrt{2h}$. Do not substitute one for the other when tuning.

This is an approximation to paths of the diffusion over finite intervals. A fixed Euler step generally does **not** preserve $\pi$. If it has a stationary distribution, call that distribution $\pi_h$; it is usually different from $\pi$. A finite average can then have three conceptually different errors: effects of its initial state, a persistent discrepancy between $\mathbb E_{\pi_h}f$ and $\mathbb E_\pi f$, and random variation of the empirical average around the ULA expectation. One cannot add these as unlabelled numbers because a bias, standard deviation, and distributional distance have different meanings. Reducing the persistent discrepancy calls for a smaller $h$ or an exact-invariant correction. Discarding a longer warmup does not do it.

Nonasymptotic ULA bounds quantify this tradeoff under conditions such as globally Lipschitz gradients and strong convexity; [Durmus and Moulines](https://arxiv.org/abs/1605.01559) are one route into that theory. The next example needs no general bound: its error is exactly calculable.

## 4. Worked example: a normal target exposes Euler bias

Take $\pi=N(0,\sigma^2)$, so $U(x)=x^2/(2\sigma^2)$ up to a constant and $\nabla U(x)=x/\sigma^2$. ULA becomes an autoregression,

$$
X_{k+1}=aX_k+\sqrt{2h}\,Z_k,
\qquad a=1-\frac{h}{\sigma^2}.
$$

Repeated substitution gives $X_k=a^kX_0+\sqrt{2h}\sum_{j=0}^{k-1}a^jZ_{k-1-j}$. Thus the effect of a fixed starting value disappears when $|a|<1$, or $0<h<2\sigma^2$. In that interval the stationary variance $v_h$ solves $v_h=a^2v_h+2h$, hence

$$
v_h=\frac{2h}{1-(1-h/\sigma^2)^2}
=\frac{\sigma^2}{1-h/(2\sigma^2)}.
$$

The desired variance is $\sigma^2$. Every positive stable $h$ inflates it. With $\sigma=1$ and $h=0.5$, ULA has variance $4/3$, a 33% error in a basic posterior summary. With $h=1$, $a=0$: successive states are independent $N(0,2)$ draws after one update. A trace and an autocorrelation diagnostic can look excellent while the variance is twice its target. At $h=2$, $a=-1$ is the **unstable boundary**; the accumulated noise variance grows with the number of steps. These values rely on the $\sqrt{2h}$ convention above.

Smaller $h$ brings $v_h$ toward $\sigma^2$ but also brings $a$ toward one. For this stationary autoregression, the lag-$\ell$ correlation is $a^\ell$, so smaller steps give more correlated consecutive states. This is the basic ULA tradeoff: a fine discretization can reduce systematic error while spending more transitions to explore the same distance. The example also shows why a sampler test should compare known moments, not merely whether a chain “moves.”

We can make the finite-run distinction equally explicit. Starting at the fixed value $X_0=x_0$, the mean after $k$ steps is $a^kx_0$ and the variance is $2h(1-a^{2k})/(1-a^2)$. These approach $0$ and $v_h$ in the stable interval. More warmup reduces the $a^kx_0$ term, but the limiting variance remains $v_h$, not $\sigma^2$. If we average $N$ stationary states to estimate the mean, their dependence also changes the estimator's variance: it is $v_hN^{-2}[N+2\sum_{\ell=1}^{N-1}(N-\ell)a^\ell]$. When $0<a<1$ and $N$ is large, the bracket is approximately $N(1+a)/(1-a)$. The same $h$ therefore affects both the stationary target error and the precision of a finite average. These are different calculations, even for this simple Gaussian.

### An exact Gaussian reference at the same elapsed time

For this linear drift we can solve the diffusion itself. Its conditional mean $m(t)$ satisfies $m'(t)=-m(t)/\sigma^2$; its conditional variance $v(t)$ satisfies $v'(t)=-2v(t)/\sigma^2+2$, with $m(0)=x$ and $v(0)=0$. The linear equation has Gaussian solutions, giving the exact transition

$$
X_{t+h}=bX_t+\sigma\sqrt{1-b^2}\,Z,
\qquad b=e^{-h/\sigma^2},\quad Z\sim N(0,1),
$$

with fresh independent $Z$ at each update. Check its invariant variance directly: $b^2\sigma^2+\sigma^2(1-b^2)=\sigma^2$. The stationary joint law of successive states is a centered bivariate Gaussian with equal marginal variances and covariance $b\sigma^2$; exchanging the states leaves that law unchanged, verifying detailed balance. This *Ornstein–Uhlenbeck transition* therefore preserves the target for every $h>0$, without an accept/reject step. From a fixed start it still has an initialization transient and, at finite $h$, correlated draws.

Euler replaces $b$ by its first-order approximation $1-h/\sigma^2$ and the exact innovation variance by $2h$. At $\sigma=1,h=0.5$, the exact coefficients are $b\approx0.60653$ and innovation variance $1-e^{-1}\approx0.63212$; Euler uses $0.5$ and $1$. Their invariant variances are consequently $1$ and $4/3$. This calculation supplies a reference for debugging the diffusion/discretization distinction studied by [Roberts and Tweedie, Sections 1.2–1.4](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsTweedieBernoulli1996.pdf). Solving nonlinear Langevin dynamics exactly is generally unavailable; the Gaussian transition is a special reference, not a replacement formula for arbitrary targets.

### Initialization can conceal bias in a second moment

The finite-time formulas above give

$$
\mathbb E[X_k^2]-\sigma^2
=(v_h-\sigma^2)+a^{2k}(x_0^2-v_h).
$$

The first term persists; the second vanishes. They can have opposite signs. For $x_0=0,\sigma=1,h=0.5$, the first ULA state has second moment exactly $1$, the second has $1.25$, and the limit is $4/3$. An early match with a target moment can therefore deteriorate as initialization effects disappear. General ULA analyses likewise separate initialization from discretization error; see [Durmus and Moulines, Section 2, Theorem 5 and Corollary 7](https://arxiv.org/html/1605.01559).

We can also calculate the error of a stationary second-moment estimate $S_N=N^{-1}\sum_{k=1}^N X_k^2$. This calculation assumes $X_0\sim N(0,v_h)$; it is not a formula for a chain still warming up. Joint Gaussian moments give $\operatorname{Cov}(X_0^2,X_\ell^2)=2v_h^2a^{2\ell}$, so

$$
\mathbb E[(S_N-\sigma^2)^2]
=(v_h-\sigma^2)^2+
\frac{2v_h^2}{N^2}\left[N+2\sum_{\ell=1}^{N-1}(N-\ell)a^{2\ell}\right].
$$

Here both summands have the same units: squared bias plus variance. The executable prints their square roots separately as bias magnitude and Monte Carlo standard error. Even when $a<0$ makes consecutive states anticorrelated, the squared states have nonnegative correlations $a^{2\ell}$. Efficient estimation of the mean therefore does not imply efficient estimation of the second moment. At $h=1,\sigma=1$, the exact mean squared error is $1+8/N$: independence reduces sampling variation but cannot remove the bias floor.

## 5. MALA uses both proposal directions

The same Gaussian step can be used as a Metropolis–Hastings proposal. Its density is

$$
q_h(y\mid x)=(4\pi h)^{-d/2}
\exp\left[-\frac{\|y-x+h\nabla U(x)\|^2}{4h}\right].
$$

This proposal is asymmetric: the mean from $x$ is $x-h\nabla U(x)$, while the mean from $y$ is $y-h\nabla U(y)$. Evaluating the target density ratio alone would omit that asymmetry. The Metropolis-adjusted Langevin algorithm (MALA) uses

$$
\log r(x,y)=-U(y)+U(x)
-\frac{\|x-y+h\nabla U(y)\|^2}{4h}
+\frac{\|y-x+h\nabla U(x)\|^2}{4h},
\qquad \alpha(x,y)=\min\{1,e^{\log r(x,y)}\}.
$$

Numerically, accept if $\log V<\min(0,\log r)$ for $V\sim\mathrm{Uniform}(0,1)$; otherwise retain $x$. The retained state is part of the transition kernel, not a discarded iteration. In pseudocode:

```text
at current x, cache U(x) and grad U(x)
draw z ~ N(0,I); set y = x - h grad U(x) + sqrt(2h) z
evaluate U(y) and grad U(y)
form log r using the forward and reverse Gaussian densities
if log uniform < min(0, log r): cache y and its evaluations
otherwise: keep x and its cached evaluations
```

Why does this repair the invariant law? For distinct points $x,y$, the accepted probability flux is

$$
\pi(x)q_h(y\mid x)\alpha(x,y)
=\min\{\pi(x)q_h(y\mid x),\pi(y)q_h(x\mid y)\},
$$

which is symmetric in $x,y$. The probability of rejection supplies a self-loop at $x$, so the complete kernel satisfies detailed balance and preserves $\pi$. This is the [Metropolis–Hastings construction](09-metropolis-hastings.md) applied to a gradient proposal. It requires correct evaluation of the density that actually generated proposals and ordinary support conditions. It does not promise independent draws, fast travel between modes, or removal of error from a finite run.

For the Gaussian target, the ULA restriction $h<2\sigma^2$ is a stability condition for the unadjusted recursion. MALA's exact-arithmetic invariance argument remains valid at every finite $h>0$: its Gaussian forward and reverse densities are positive. This does not give a useful convergence rate for large steps.

### The normal proposal ratio, calculated

For the scalar normal target of Section 4, write $s=\sigma^2$. Then $m(x)=(1-h/s)x$. The forward and reverse residuals are $y-(1-h/s)x$ and $x-(1-h/s)y$. Their squared difference simplifies to

$$
[y-(1-h/s)x]^2-[x-(1-h/s)y]^2
=\left(1-(1-h/s)^2\right)(y^2-x^2).
$$

Combining this with $-U(y)+U(x)=(x^2-y^2)/(2s)$ leaves

$$
\log r(x,y)=\frac{h(x^2-y^2)}{4s^2}
=\frac{h(x^2-y^2)}{4\sigma^4}.
$$

At $\sigma=1$, $h=0.5$, $x=0$, and a proposed $y=1$, the acceptance is $\exp(-0.125)\approx0.8825$. If $y=0$ it is one. These values provide small hand checks for an implementation, although the second candidate occurs with probability zero under a continuous proposal. The proposal at $x=0$ is $N(0,1)$ in this case; an accepted state need not be a fresh $N(0,1)$ draw because rejection and the state-dependent reverse proposal together define the kernel.

## 6. Implementation and gradient checks

The executable [example](examples/ch19.py) seeds Python's standard-library generator and prints means, second moments, variances, acceptance, and the exact ULA stationary variance for a scalar normal target. It also runs the exact Gaussian diffusion transition, checks the proposal-ratio algebra and scalar gradient numerically, and reports the stationary second-moment error decomposition. It treats the target through two functions: a log density and its gradient. In a model with an unknown normalizer, the log density can omit the constant. Cache both functions at the current state and replace the cached values only after acceptance. This avoids an unnecessary gradient evaluation at each rejected state.

Before trusting a complicated analytic or automatic gradient, compare each component to central differences at several representative interior points:

$$
\partial_i\log\pi(x)\approx
\frac{\log\pi(x+\varepsilon e_i)-\log\pi(x-\varepsilon e_i)}{2\varepsilon}.
$$

Trying several $\varepsilon$ values matters: a very large one has truncation error; a very small one loses precision through subtraction. The check is a debugging aid, not a proof for every state. It also fails at a nonsmooth point or across a support boundary. MALA's target density and proposal density should be evaluated in log form to avoid underflow; undefined or nonfinite proposed evaluations should be counted and investigated rather than silently replaced with plausible values.

There is a useful subtlety. If the implemented “gradient” is a deterministic, finite vector field $b(x)$ different from $\nabla\log\pi(x)$, the proposal $N(x+hb(x),2hI)$ can **still** be corrected by MH if its actual forward and reverse densities are used. It may be inefficient and is no longer the intended Langevin discretization. In contrast, generating with noise $\sqrt h Z$ while evaluating $q$ as if the covariance were $2hI$ uses the wrong proposal density and breaks the detailed-balance calculation. A bug in the gradient and a bug in accounting for the generated kernel are different failures.

## 7. Constant preconditioning and a second worked example

A spherical noise cloud can be badly matched to an elongated target. Let $M$ be a **fixed**, symmetric positive-definite matrix and choose $C$ with $CC^{\mathsf T}=M$. A preconditioned step is

$$
Y=x-hM\nabla U(x)+\sqrt{2h}\,CZ,
\qquad Z\sim N(0,I).
$$

Its covariance is $2hM$. For MALA, replace the Euclidean norm in the log proposal by $\|v\|_{M^{-1}}^2=v^{\mathsf T}M^{-1}v$. The common log determinant cancels between forward and reverse densities **because $M$ is the same matrix at both endpoints**. If a matrix varies with position, the forward and reverse covariance determinants and other geometric terms change; [Chapter 23](23-riemannian.md) treats that setting. A learned constant $M$ should be frozen after warmup unless one establishes the conditions for ongoing adaptation from [Chapter 15](15-adaptation.md).

Here $M$ multiplies the drift and determines proposal covariance. In [Chapter 20](20-hmc.md), $M$ instead denotes momentum covariance: the corresponding HMC mass is the inverse of this Langevin preconditioner. Identify the role of a matrix before transferring a tuning choice between the two algorithms.

Consider the two-dimensional target $N(0,\Sigma)$ with $\Sigma=\operatorname{diag}(1,100)$. Its potential is $U(x)=(x_1^2+x_2^2/100)/2$. With $M=I$ and $h=0.5$, the deterministic factors in a ULA proposal are $0.5$ in the narrow first direction and $0.995$ in the broad second direction. The first direction limits a common step size, while the second retains almost all of its previous value each iteration. With $M=\Sigma$, both factors are $0.5$: since $M\nabla U(x)=x$, the drift matches the two widths.

This result is a change-of-coordinates calculation. Write $x=Az$ with $AA^{\mathsf T}=\Sigma$. In $z$ coordinates the target is $N(0,I)$; mapping the ordinary Langevin proposal back to $x$ gives $M=AA^{\mathsf T}=\Sigma$. Its ULA stationary covariance, however, is $\Sigma/(1-h/2)$, not $\Sigma$. At $h=0.5$ it is $(4/3)\Sigma$. Preconditioning improves the balance of movement across directions; it does not remove Euler bias. Preconditioned MALA applies the corresponding proposal ratio and preserves the target covariance as an invariant property, subject still to finite-run error.

The same calculation suggests how to select a fixed $M$ when $\Sigma$ is unknown: use a well-conditioned approximation to posterior covariance obtained during a separate warmup or from a local curvature calculation. A covariance estimate from an early chain may be unreliable if that chain has explored only one region. A local Hessian can be misleading if curvature changes greatly across the target. In either case, regularize the matrix so its eigenvalues stay positive and numerically usable, then freeze it for the sampling run. Exact invariance of the frozen MALA kernel holds for any such positive-definite choice; a poor choice hurts movement rather than changing the intended stationary law.

Try the geometry lab below: vary the scale of $v$ and observe how a change of coordinates changes the shape of the independent-draw cloud. Before opening the Python example, predict which axis constrains a single unpreconditioned step for the Gaussian above. The lab demonstrates reparameterization of a funnel using independent draws; it does **not** run ULA or MALA or report their efficiency.

<div class="mcmc-lab" data-lab="geometry"></div>

## 8. Scaling is a conditional guide, not a target acceptance law

In a specific high-dimensional limit, [Roberts and Rosenthal](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsRosenthalJRSSB1998.pdf) obtained an approximately $0.574$ acceptance rate that maximizes the limiting diffusion speed of MALA. Their formal setting uses stationary starts and product targets with identically distributed smooth coordinates and regularity assumptions on derivatives and moments. Within our convention, the Gaussian proposal **variance** $2h$ scales as $d^{-1/3}$; consequently $h$ scales as $d^{-1/3}$ and its noise standard deviation scales as $d^{-1/6}$. Confusing the last two gives a very different tuning rule.

The result concerns coordinate movement in an asymptotic family measured per iteration. It is not a universal optimum for a finite, correlated, multimodal, or constrained posterior. A gradient may cost $O(d)$ or much more; the relevant practical target is precision for a named estimand per unit of computation. Record acceptance as one diagnostic, then compare autocorrelation or MCSE for that estimand at a fixed evaluation or time budget. Very low acceptance often signals an overambitious step, but a superficially attractive acceptance rate cannot certify that the chain reached all relevant regions. Stationary-start scaling statements also do not solve initialization.

## 9. Where local drift can mislead

Strong curvature variation makes one global $h$ awkward. For $U(x)=x^4/4$, an Euler drift sends $x$ to $x-hx^3$. If $|x|$ is large enough that $hx^2>2$, this deterministic part even crosses to the opposite side with greater magnitude. Repeated unadjusted steps can have unstable excursions although the continuous drift points inward. MALA may reject such proposals, preserving the target formally, but the state can then stick for many iterations. [Roberts and Tweedie](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsTweedieBernoulli1996.pdf) analyze convergence differences between continuous Langevin motion and its discrete counterparts. Tamed drift methods address some superlinear cases with their own assumptions; [Brosse and colleagues](https://arxiv.org/abs/1710.05559) provide an advanced reading entry point.

Other limits are geometric rather than numerical. A heavy-tailed target can have weak gradient information far out. Separated modes can have a low-probability barrier that a local gradient does not indicate how to cross. A hard constraint may make the Gaussian proposal leave the support frequently. Transforming to unconstrained coordinates can help, but the transformed log density requires a Jacobian, as in [Chapter 16](16-geometry.md). None of these problems is ruled out by detailed balance. Invariance describes a distribution that remains fixed *if the chain has it*; useful convergence and a credible finite computation require further evidence.

## 10. A reproducible comparison and the bridge to HMC

Run `python examples/ch19.py` from the repository root. Its scalar example uses a known target so the correct mean, second moment, and variance are all available. The script compares $h=0.25$, $0.5$, and $1$, keeping the number of iterations and seed policy fixed. Compare ULA's empirical second moment with $1/(1-h/2)$, then compare MALA's with the target value $1$. For MALA also note acceptance and repeated states. The exact Gaussian reference should approach variance $1$ at all three steps. The printed second-moment MCSE for ULA is a theoretical stationary quantity, not an estimated MCSE for MALA or a certificate that warmup suffices. Numerical rejection counts include warmup. The program's finite output should fluctuate; agreement within a few displayed digits is not a correctness proof.

For a more serious comparison, include random-walk MH and repeated independent runs at the same wall-clock or log-density/gradient evaluation budget. Report target mean and second-moment errors, acceptance where applicable, evaluations, and an estimand-specific MCSE from [Chapter 13](13-mc-error.md). A within-chain diagnostic from [Chapter 14](14-diagnostics.md) can flag problems but cannot reveal a well-mixed chain targeting $\pi_h$ instead of $\pi$. ULA trades bias against transition cost; MALA trades rejected proposals against exact invariance. Neither wins every problem.

Keep the estimand fixed across methods. A chain can estimate $\mathbb E[X]$ well while estimating $\mathbb E[X^2]$ poorly, especially if it rarely visits the tails. Counting an accepted proposal as a sample but omitting rejected states changes the empirical distribution to a *jump chain* and requires different weighting; retain one state per iteration in an ordinary MALA average. For a fixed run, compare traces and moment errors across overdispersed starts before interpreting a single MCSE. Reproducible seeds make a debugging run repeatable, but varying the seed across replicates is necessary to see finite-run variability.

Langevin steps refresh the random direction at each local proposal. [Hamiltonian Monte Carlo in Chapter 20](20-hmc.md) introduces momentum that persists across a trajectory, allowing a sequence of gradient-guided moves before one accept/reject decision. The correctness argument changes accordingly; MALA's one-step Gaussian ratio cannot simply be reused for a long numerical trajectory.

## Exercises

<div class="exercise" id="mcmc-19-langevin-ex-1">

### 1. The complete scalar stability calculation

For $N(0,\sigma^2)$, derive ULA's stability interval and stationary variance. What happens at $h=2\sigma^2$? Why is a formally negative value from the variance formula outside the interval meaningless?

<details>
<summary>Solution</summary>

Writing $a=1-h/\sigma^2$ gives $X_{k+1}=aX_k+\sqrt{2h}Z_k$. A stationary finite variance needs $|a|<1$, equivalent to $0<h<2\sigma^2$. Then $v=a^2v+2h$ gives $v=\sigma^2/[1-h/(2\sigma^2)]$. At the upper boundary $a=-1$, so each new independent noise term adds $2h$ to the variance; it grows linearly. Beyond the boundary the recursion expands. Solving an algebraic fixed-point equation there yields a negative number because no nonnegative stationary variance satisfies the stochastic recursion.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-2">

### 2. Check the reverse Gaussian

For the same target, expand the two Gaussian proposal residuals and derive $\log r(x,y)$. Evaluate acceptance at $\sigma=1$, $h=0.5$, $x=0$, $y=1$.

<details>
<summary>Solution</summary>

Let $a=1-h/\sigma^2$. Forward and reverse squared residuals are $(y-ax)^2$ and $(x-ay)^2$. Their difference is $(1-a^2)(y^2-x^2)$. Substitution in $\log\pi(y)-\log\pi(x)+\log q(x\mid y)-\log q(y\mid x)$ gives $h(x^2-y^2)/(4\sigma^4)$. The specified move has $\log r=-1/8$ and acceptance $e^{-1/8}\approx0.8825$.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-3">

### 3. Why a fixed matrix cancels

Let $M$ be fixed and positive definite. Write the forward proposal density for preconditioned MALA and prove that its MH kernel preserves $\pi$.

<details>
<summary>Solution</summary>

With $m(x)=x-hM\nabla U(x)$, the density is $q(y\mid x)=(4\pi h)^{-d/2}|M|^{-1/2}\exp[-(y-m(x))^{\mathsf T}M^{-1}(y-m(x))/(4h)]$. The determinant is identical in $q(x\mid y)$, so it cancels in their ratio. With $\alpha(x,y)=\min\{1,\pi(y)q(x\mid y)/[\pi(x)q(y\mid x)]\}$, accepted flux equals $\min\{\pi(x)q(y\mid x),\pi(y)q(x\mid y)\}$ in either direction. Adding rejection mass on the diagonal gives detailed balance and hence invariance. The proof alone gives no convergence rate.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-4">

### 4. Diagnose a noise-convention bug

A program simulates $Y=x-h\nabla U(x)+\sqrt h Z$ but evaluates the proposal ratio using covariance $2hI$. Does its MH calculation establish invariance? Give a repair.

<details>
<summary>Solution</summary>

No. The generated proposal has covariance $hI$ while the density used in the ratio describes a different kernel. Restore noise $\sqrt{2h}Z$ if the intended drift is $-h\nabla U$. Alternatively, use the actual $N(x-h\nabla U(x),hI)$ density in both directions; this defines a valid MH proposal even though it no longer matches the Euler step of the stated diffusion.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-5">

### 5. Design a fixed-budget experiment

You have enough gradient evaluations for three step sizes and several replicate runs. Specify outcomes that separate ULA bias from finite-run variation and let you compare MALA fairly.

<details>
<summary>Solution</summary>

Use a target with known $\mathbb E X$ and $\mathbb E X^2$, run several independent seeds from specified starts, and record both moment estimates, their across-run spread, acceptance for MALA, retained-state fraction, gradients, and time. Give each method the same total gradient budget, counting proposed gradients even when rejected. Compare ULA estimates to the analytic $\pi_h$ moments as well as target moments. As runs grow, stationary ULA estimates concentrate around the biased $\pi_h$ value; under suitable ergodicity, MALA estimates concentrate around the target value. Multiple starts and finite-run uncertainty still matter.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-6">

### 6. Critique an acceptance slogan

A colleague says, “MALA accepted 57.4% of moves, so its sampling is optimal.” Name at least four assumptions or measurements missing from that claim.

<details>
<summary>Solution</summary>

The $0.574$ value arises for a stationary-start, smooth iid-product, high-dimensional scaling limit and a particular diffusion-speed criterion. A finite correlated or multimodal target need not follow it. The colleague has not named an estimand or measured its MCSE, accounted for gradient cost, checked exploration from overdispersed starts, or established that the target and proposal densities were implemented correctly. Acceptance alone supplies none of those facts.

</details>

</div>

<div class="exercise" id="mcmc-19-langevin-ex-7">

### 7. An apparently perfect first step

Start standard-normal ULA at zero with $h=0.5$. Derive its first two second moments. If instead it starts in its own stationary law, derive $\operatorname{Cov}(X_0^2,X_\ell^2)$ from $X_\ell=a^\ell X_0+\eta$, where $\eta$ is independent of $X_0$ with variance $v_h(1-a^{2\ell})$.

<details>
<summary>Solution</summary>

The second moment recursion is $s_{k+1}=s_k/4+1$, so $s_1=1$ and $s_2=5/4$, approaching $4/3$. For the stationary calculation, expand the square and use $\mathbb E[X_0^4]=3v_h^2$. Independence and zero means give $\mathbb E[X_0^2X_\ell^2]=3a^{2\ell}v_h^2+v_h^2(1-a^{2\ell})=v_h^2(1+2a^{2\ell})$. Subtracting $\mathbb E[X_0^2]\mathbb E[X_\ell^2]=v_h^2$ gives $2v_h^2a^{2\ell}$. Summing these covariances over the $N^2$ pairs yields the variance in Section 4; the persistent bias must still be added in squared form to obtain mean squared error.

</details>

</div>

## Key takeaways and sources

ULA is an Euler approximation with a generally biased fixed-step invariant law; the Gaussian example makes that bias exact and visible. MALA uses the **actual forward and reverse proposal densities** to preserve the requested target through MH, while retaining finite-run and mixing error. A fixed positive-definite preconditioner balances directions but does not by itself remove discretization bias. Tune for a named estimate and a real computation budget, not for an acceptance slogan.

Primary sources for the distinctions and advanced results are [Roberts and Tweedie (1996)](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsTweedieBernoulli1996.pdf) on Langevin diffusion and discrete convergence; [Roberts and Rosenthal (1998)](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/Langevin/RobertsRosenthalJRSSB1998.pdf) on restricted high-dimensional MALA scaling; [Durmus and Moulines](https://arxiv.org/abs/1605.01559) on ULA error bounds; and [Brosse, Durmus, Moulines, and Sabanis](https://arxiv.org/abs/1710.05559) on tamed ULA for superlinear drift.
