# 11. Slice and auxiliary-variable methods

**Learning goals.** By the end of this chapter you should be able to derive a slice sampler from an augmented density; implement scalar stepping out and shrinkage with its randomization intact; explain why an update that preserves a conditional distribution need not draw from it independently; and recognize when a Gaussian reference distribution permits elliptical slice sampling.

**Prerequisites.** We use conditioning and Gaussian vectors from [Chapter 02](02-probability.md), unnormalized proper targets from [Chapter 03](03-bayesian-targets.md), log arithmetic from [Chapter 04](04-numerics.md), invariance from [Chapters 07–08](08-convergence.md), and Gibbs augmentation from [Chapter 10](10-gibbs.md).

## 11.1 A height turns density into a set

Suppose we can evaluate a nonnegative function $g(x)$, but sampling from its normalized density directly is awkward. At a current point $x$, draw a height uniformly between zero and $g(x)$. The horizontal slice at that height is the set of points whose density exceeds it. Moving within that set requires only a comparison with $g$, not the normalizing constant. This is the geometric idea behind slice sampling. Neal's original treatment develops both scalar and multivariate forms, and is the source for the stepping-out construction used below. [Neal (2003)](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

The [under-curve figure](figures/11.svg) shows the ideal construction for $g(x)=e^{-x^2/2}$ at height $u=0.4$: the horizontal slice is $(-\sqrt{-2\log0.4},\sqrt{-2\log0.4})$. The picture can be deceptive if read as an independent-sampling recipe. Drawing a fresh height is easy, but drawing uniformly over the *entire* horizontal slice may be hard. An implementable update can instead preserve that uniform conditional law while remaining local and correlated. Each outer iteration then defines a Markov transition. Invariance is an exact mathematical property of that transition under its assumptions; a chain started at an arbitrary point still has finite-run error, and its modes may be explored slowly.

For a positive $g$, no rejection envelope is needed. Unlike ordinary rejection sampling, a point rejected during slice shrinkage is internal work within the same transition, and the bracket changes afterward. It is not a repeated independent attempt from a fixed proposal distribution.

## 11.2 The augmented density

Assume $g$ is measurable on a real state space, $g\geq0$, and

$$
0<Z=\int g(x)\,dx<\infty.
$$

Define a joint density with respect to $dx\,du$ by

$$
\widetilde\pi(x,u)=\frac{1}{Z}\mathbf 1\{0<u<g(x)\}.
$$

Its normalization follows by integrating over the region under $g$. Integrating out the height gives $\int_0^{g(x)}du/Z=g(x)/Z$, the target density. Conditional on $x$ with $g(x)>0$, $u\mid x$ is uniform on $(0,g(x))$. Conditional on $u$, $x$ is uniform, with respect to the original reference measure, on

$$
S_u=\{x:g(x)>u\},\qquad
\widetilde\pi(x\mid u)=\frac{\mathbf1\{x\in S_u\}}{|S_u|}.
$$

For $u$ drawn from the joint law, $|S_u|$ is finite and positive almost surely; indeed the integral of $|S_u|$ over $u$ is $Z$. At exceptional heights the conditional can be defined arbitrarily. The word *uniform* here refers to Lebesgue measure in the chosen coordinate. If $x=e^z$, a uniform distribution in $x$ is not uniform in $z$; the Jacobian matters.

This is a Gibbs construction with a useful substitution. First refresh $u$ exactly from $u\mid x$. Then apply any kernel $K_u$ that leaves the uniform law on $S_u$ invariant. The full transition preserves $\widetilde\pi$: the height refresh preserves the joint law, and, conditional on every relevant $u$, $K_u$ preserves its conditional law. Marginalizing $u$ leaves $g/Z$ invariant. A fresh independent uniform draw over $S_u$ is one possible $K_u$, but not the only one. This is the same conditional-invariance principle behind the updates in [Chapter 10](10-gibbs.md).

## 11.3 Ideal slices and disconnected slices

For $g(x)=e^{-x^2/2}$, the set $S_u$ is one interval. For a two-hump density, a low horizontal cut can produce two separated intervals. An ideal uniform draw over their union selects components in proportion to their lengths. A local bracket procedure may never include the other component. Repeatedly drawing new heights does not by itself guarantee mode switching; the horizontal kernel must make the crossing possible.

Here is a finite analogy. Let the conditional slice contain four points with uniform law. A transition that moves clockwise around the four points preserves uniformity, yet the next point is completely determined by the current one. Drawing one of the four points uniformly is also invariant, but independent. These kernels have the same conditional invariant distribution and different dependence. Scalar shrinkage resembles the first fact: its output lies on the slice and has a correct invariant law, but generally is not an independent uniform draw from the whole slice.

Disconnected components also expose an irreducibility issue. If a fixed bracket width and finite expansion limit cannot span a gap, a chain can remain in one component indefinitely. Even when occasional bridging is possible, visits may be rare. Neal's paper discusses this limitation of stepping out explicitly; correctness of a stationary distribution is distinct from convergence to it from each start. [Neal (2003)](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

## 11.4 Randomized stepping out

Choose a width $w>0$ and a positive integer $m$ limiting the bracket to at most $mw$. Given the old state $x_0$ and sampled height $u$, draw $V\sim U(0,1)$ and initialize

$$
L=x_0-wV,\qquad R=L+w.
$$

Draw $J$ uniformly from $\{0,\ldots,m-1\}$ and set $K=m-1-J$. While $J>0$ and $L\in S_u$, replace $L$ by $L-w$ and decrement $J$. Do the analogous expansion of $R$ while $K>0$ and $R\in S_u$. An endpoint can remain inside the slice when its budget is exhausted; that is allowed. The random position and random split of expansion capacity are part of the algorithm, not incidental implementation choices. They let reverse transitions reproduce the same final bracket with matching probability. Taking a fixed number of left steps and then a fixed number of right steps is not the cited finite-budget construction. [Neal (2003), Figures 1 and 3](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

The width $w$ influences cost and reach, not the intended invariant density. A tiny $w$ requires more endpoint tests to find a useful bracket and, with finite $m$, may confine moves. A very large $w$ generates many rejected proposals during shrinkage. There is no universal best width. When this scalar update is used within a multivariate sampler, $g$ is the one-coordinate conditional target with the other coordinates held fixed; successive coordinate kernels can then be composed as in [Chapter 12](12-kernel-design.md).

## 11.5 Shrinkage and the reverse path

Given $(L,R)$, draw a candidate uniformly from the current interval. Accept it if $g(x')>u$. Otherwise, if $x'<x_0$ set $L=x'$; if $x'>x_0$ set $R=x'$. Draw again. Keep the *original* $x_0$ as the dividing point throughout; do not replace it with the last proposal. Each rejection removes a portion of the bracket while retaining $x_0$. Rejected candidates are not chain states. With a positive-width slice around $x_0$, continued shrinkage reaches an acceptable point with probability one in exact arithmetic. An implementation should nevertheless guard against floating-point stalls and report failure.

Why does the adaptive bracket not spoil invariance? A correctness proof pairs every forward history from $x_0$ to $x_1$ with a reverse history from $x_1$ to $x_0$. The initial interval is translated by whole widths and its fractional offset remapped so that it has the same alignment; the left/right budget split is adjusted to yield the same expanded interval. The two histories use the same rejected candidates in the same order. Because the original and final states remain in every shrinking bracket, each rejection removes the same side in either history. Thus the corresponding proposal-interval lengths, and their uniform proposal densities, match. The joint under-curve density is constant, so paired path probabilities agree. This is a sketch: the complete argument handles the mappings of the random offsets and budgets precisely. [Neal (2003), Section 4.3](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

The stepping-out procedure is specific. Neal also studies interval *doubling*, which needs an additional acceptability test for candidate states; merely substituting doubling for stepping out in the above pseudocode is invalid. The acceptance of a candidate inside $S_u$ is valid here because the bracket was constructed by the randomized stepping-out method. [Neal (2003), Figures 4–6](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

```text
scalar_slice(x0, log_g, width w, maximum intervals m):
    threshold = log_g(x0) - Exponential(1)
    L = x0 - w * Uniform(0, 1); R = L + w
    J = UniformInteger(0, m-1); K = m-1-J
    while J > 0 and log_g(L) > threshold: L -= w; J -= 1
    while K > 0 and log_g(R) > threshold: R += w; K -= 1
    repeat:
        x = Uniform(L, R)
        if log_g(x) > threshold: return x
        if x < x0: L = x
        else: R = x
```

The `else` case presumes a continuously drawn proposal different from $x_0$; robust numerical code handles equality explicitly. This algorithm specifies one *outer* transition. Its loop iterations are evaluations and proposals within that transition, not additional retained samples.

## 11.6 Worked example: one normal slice

Take $g(x)=e^{-x^2/2}$ and $x_0=1$. Its log density there is $-1/2$. Suppose the exponential draw is $E=0.5$. The log height is $\ell_u=\log g(1)-E=-1$, so acceptance means $-x^2/2>-1$, or $x\in(-\sqrt2,\sqrt2)$.

With $w=1$ and offset $V=0.25$, the initial bracket is $(0.75,1.75)$. Suppose $m=8$ and $J=3$, leaving $K=4$. Since $0.75$ lies inside the slice, expanding left yields $L=-0.25$; another left step yields $L=-1.25$, also inside; a third yields $L=-2.25$, outside. The right endpoint $1.75$ is already outside, so no right expansion is made. The final bracket is $(-2.25,1.75)$.

Now suppose the first shrinkage proposal is $-1.8$. Its log density is $-1.62<-1$, so it is rejected and the left endpoint becomes $-1.8$. A subsequent proposal $0.4$ has log density $-0.08>-1$ and is accepted. These chosen numbers illustrate possible random draws. Here the final bracket contains the entire connected slice, so the shrinkage output actually is uniform on $(-\sqrt2,\sqrt2)$ conditional on this height and bracket. Every rejected point lies outside that interval, so shrinkage never removes any part of the slice. At each attempt, conditioning a uniform bracket proposal on landing in the slice gives its uniform law. Exact slice endpoints need not be known. This special conclusion fails for brackets covering only part of a slice, or when rejecting a point in a gap removes another component. The general algorithm therefore promises conditional invariance, not an independent draw from the full slice. [Neal (2003), Section 4.4](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

For a concrete reverse history, return from $x_1=0.4$ to $x_0=1$ at the same height. Use offset $V_1=0.65$ and budgets $J_1=2$, $K_1=5$. The initial bracket is $(-0.25,0.75)$; two left expansions and one right expansion recover $(-2.25,1.75)$. Rejecting the same $-1.8$ shrinks the same side, after which $1$ is acceptable. The offset map is $V_1=\operatorname{frac}(V_0+(x_1-x_0)/w)$; the left budget changes by the integer shift of the initial bracket. This example makes the matching construction visible without replacing the general proof. [Neal (2003), Section 4.3](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf)

### 11.6.1 Exact horizontal draws still form a Markov chain

The ideal two-conditional construction is already a Gibbs chain; making its horizontal draw exact does not remove dependence through the freshly sampled height. [Neal (2003), Section 3](https://people.stat.sc.edu/hansont/stat740/Neal2003.pdf) We can calculate that dependence completely for an exponential target, extending Exercise 2.

Let $g(x)=e^{-2x}\mathbf1\{x>0\}$, whose normalized target is $\operatorname{Exp}(2)$. Given $X_t=x$, independent $E_t\sim\operatorname{Exp}(1)$ and $V_t\sim U(0,1)$ give

$$
\log u_t=-2x-E_t,\qquad
S_{u_t}=(0,x+E_t/2),\qquad
X_{t+1}=V_t(X_t+E_t/2).
$$

The last draw is independent of the old state *conditional on the height*. Marginally, its interval length remembers the old state. In particular,

$$
\mathbb E[X_{t+1}\mid X_t=x]=x/2+1/4,
\qquad
\mathbb E[X_{t+1}-1/2\mid X_t]=\tfrac12(X_t-1/2).
$$

Iterating conditional expectation shows that, from a deterministic start $x$, $\mathbb E[X_t]=1/2+2^{-t}(x-1/2)$. This describes the mean's transient bias, not convergence of the full law. For the following variance calculation assume instead that $X_0\sim\operatorname{Exp}(2)$, so the chain is stationary. Then $\operatorname{Var}(X_t)=1/4$ and

$$
\operatorname{Cov}(X_t,X_{t+k})=\tfrac14\,2^{-k},
\qquad \operatorname{Corr}(X_t,X_{t+k})=2^{-k}.
$$

Summing all pairs of covariances gives an exact finite-sample result for $n$ consecutive stationary draws:

$$
\operatorname{Var}(\overline X_n)
=\frac{1}{4n}\left[1+2\sum_{k=1}^{n-1}(1-k/n)2^{-k}\right]
=\frac{1}{4n}\left[3-\frac4n(1-2^{-n})\right].
$$

For large $n$ this approaches $3/(4n)$, three times the variance of the average of $n$ independent target draws. Thus even perfect horizontal draws retain a calculable dependence cost. This formula concerns the observable $X$ and this stationary chain; it is not an error estimate for arbitrary slice samplers. [Chapter 13](13-mc-error.md) develops the general covariance-sum framework.

The executable example starts this known target in stationarity and prints the empirical mean, variance and first three correlations beside $1/2$, $1/4$ and $(1/2,1/4,1/8)$. Its reported mean standard error comes from the exact formula above, not an independence assumption. Direct exponential simulation would be simpler for this particular target; the point of the example is to expose the dependence introduced by augmentation.

## 11.7 Log arithmetic and boundaries

Computing the raw height $g(x_0)U$ can underflow. For $U\sim U(0,1)$, let $E=-\log U\sim\operatorname{Exp}(1)$ and compare candidates using

$$
\ell_u=\log g(x_0)-E,\qquad \log g(x')>\ell_u.
$$

Only relative log densities are needed. Return $-\infty$ for a point outside support, and start from a state with finite log density. A `NaN` or positive infinity from a log-density function usually signals a numerical or model error and should raise an exception; it should not be treated as ordinary outside support. For bounded support, an endpoint outside it naturally fails the slice test. Clipping a proposal onto a boundary changes the transition, and can put positive mass at a point where the target has none.

Coordinates must match the target density. If $x>0$ and $z=\log x$, then $dx/dz=e^z$, and the density in $z$ is proportional to $g(e^z)e^z$. Thus $\log g_z(z)=\log g(e^z)+z$ up to a constant. The extra term is not an optional numerical correction; omitting it defines a different target. The issue returns in [Chapter 16](16-geometry.md).

The executable [Chapter 11 example](examples/ch11.py) uses a bounded expansion budget and a defensive shrinkage iteration limit. Hitting that limit raises an error instead of silently returning the old point or an arbitrary proposal. The limit is a computational fault detector, not a new acceptance rule. The code also rejects a bracket whose endpoints collapse at machine precision, an expansion that cannot move its endpoint, and a log height whose subtraction rounds back to the current log density. Log arithmetic avoids density underflow, but cannot represent arbitrarily small differences relative to huge coordinates or log-density offsets. Rescaling coordinates or removing a large additive log-density constant can resolve those failures. The demonstration is seeded and uses only the Python standard library.

<div class="mcmc-lab" data-lab="slice"></div>

In the scalar slice lab, vary the width while holding the sample count and seed fixed. Compare the trace, histogram, and reported log-density evaluations per update. Predict how narrow widths increase expansion work and wide widths increase shrinkage work; the lab reports their combined cost, without displaying individual brackets or rejected proposals. Its fixed $N(0,1)$ target has bounded interval slices, so it expands until both endpoints are outside, with no finite expansion budget. The executable example above instead uses the randomized finite budget. The lab illustrates scalar transitions; it does not implement the elliptical update below or certify convergence from a short visual run.

## 11.8 Factorizing with more auxiliary variables

The single height is one augmentation, not the only one. Suppose a target can be written $\pi(x)\propto r(x)\prod_{j=1}^q L_j(x)$, with nonnegative measurable factors and finite nonzero integral. Introduce heights $u_j$ and consider

$$
\widetilde\pi(x,u_1,\ldots,u_q)\propto
r(x)\prod_{j=1}^q\mathbf1\{0<u_j<L_j(x)\}.
$$

Integration over all heights restores $r(x)\prod_jL_j(x)$. Given $x$, each $u_j$ is uniform on $(0,L_j(x))$ and the heights are conditionally independent. Given the heights, $x$ follows the reference density $r(x)$ restricted to the intersection $\bigcap_j\{x:L_j(x)>u_j\}$. If $r$ is constant on its support this is a uniform restricted draw; otherwise it is not. Such auxiliary-variable constructions are useful when the restrictions give simpler conditionals than the unfactored target. Damien, Wakefield, and Walker develop this idea for nonconjugate Bayesian models. [Damien, Wakefield and Walker (1999)](https://users.wpi.edu/~balnan/Damien-etal-JRSSB.pdf)

More heights do not automatically improve mixing. The intersection may be narrow, and a simple conditional kernel may then move little. Conversely, a factorization can expose simple, sometimes independent, substeps. The choice is an algorithm-design decision assessed by computational work and dependence of the estimands. Specialized bonds in cluster algorithms are developed later in [Chapter 29](29-discrete.md) and [Chapter 41](41-physics.md), rather than inferred from this generic formula.

## 11.9 Elliptical slices for a Gaussian reference

Suppose the target is proper and has density proportional to $N(x;\mu,\Sigma)L(x)$, where $\Sigma$ is fixed positive definite and $L\geq0$ can be evaluated up to a multiplicative constant. Draw $\nu\sim N(0,\Sigma)$, independently of the centered current state $f=x-\mu$, and trace the ellipse

$$
x(\theta)=\mu+f\cos\theta+\nu\sin\theta.
$$

Start with $0<L(x_0)<\infty$. Continuity of $L$ at $x_0$, together with positivity there, is a sufficient condition for a nonzero acceptable angular neighborhood around zero and almost-sure termination in exact arithmetic. Mere measurability does not guarantee termination from every exceptional starting point.

Write $\varphi_\Sigma$ for the centered Gaussian reference density. The rotation $f'=f\cos\theta+\nu\sin\theta$, $\nu'=\nu\cos\theta-f\sin\theta$ has unit Jacobian and preserves the density product $\varphi_\Sigma(f)\varphi_\Sigma(\nu)$. This is an identity for every pair $(f,\nu)$; the current $f$ generally follows the posterior, which includes $L(\mu+f)$, rather than the Gaussian reference. Introducing a height gives augmented density proportional to $\varphi_\Sigma(f)\varphi_\Sigma(\nu)\mathbf1\{0<u<L(\mu+f)\}$. Rotation handles the Gaussian factors, while matching angular histories handles the likelihood restriction. The slice threshold therefore uses $\log L(x)$ *alone*. [Murray, Adams and MacKay (2010)](https://proceedings.mlr.press/v9/murray10a/murray10a.pdf)

Draw $\ell_u=\log L(x_0)-E$. Choose $\theta\sim U(0,2\pi)$ and set $[\theta_{\min},\theta_{\max}]=[\theta-2\pi,\theta]$. Evaluate $x(\theta)$; if its log likelihood exceeds $\ell_u$, accept. Otherwise shrink the angular bracket toward zero: if $\theta<0$, set $\theta_{\min}=\theta$; otherwise set $\theta_{\max}=\theta$. Resample $\theta$ uniformly from the new bracket until accepted. Zero always corresponds to the old state and is retained. The *random* placement of the full-angle bracket is required for the reverse-history argument. A deterministic initial bracket $[-\pi,\pi]$ is specifically ruled out by the original paper. [Murray, Adams and MacKay (2010), Figure 2 and Section 2.4](https://proceedings.mlr.press/v9/murray10a/murray10a.pdf)

An elliptical transition needs a Gaussian draw and likelihood evaluations, but no gradient and no conventional step-size tuning. It can be useful for a latent Gaussian block, such as values of a Gaussian process. It still depends on the chosen block, parameterization, and strength of the likelihood. If $\mu$ or $\Sigma$ depends on unknown hyperparameters, those hyperparameters need their own valid update; freezing them to convenient values changes the target. The connection to Gaussian reference measures is developed in [Chapter 24](24-function-space.md) and the application to spatial latent models in [Chapter 40](40-spatial.md).

## 11.10 Worked example: a two-dimensional inverse problem

Let $x\sim N(0,\Sigma)$ with $\Sigma=\begin{pmatrix}1&0.8\\0.8&1\end{pmatrix}$. Observe $y=a^Tx+\epsilon=1$ with $a=(1,1)^T$ and $\epsilon\sim N(0,0.25)$ independent. The likelihood is $L(x)\propto\exp\{-(1-a^Tx)^2/(2\cdot0.25)\}$. We can evaluate it without a posterior normalizing constant, and generate the auxiliary vector using two independent standard normals: $\nu=(z_1,0.8z_1+0.6z_2)$.

For a reference answer, complete the Gaussian square or condition the joint Gaussian vector $(x,y)$. Since $\Sigma a=(1.8,1.8)^T$ and $0.25+a^T\Sigma a=3.85$, the posterior mean and covariance are

$$
m=\frac{\Sigma a}{3.85}=(0.46753,0.46753)^T,
\qquad C=\Sigma-\frac{\Sigma aa^T\Sigma}{3.85}.
$$

Thus $C_{11}=C_{22}=1-3.24/3.85\approx0.15844$ and $C_{12}=0.8-3.24/3.85\approx-0.04156$. Posterior *negative* correlation is reasonable: when one component increases, the other can decrease while preserving their sum near one. The example script prints empirical means, variance, covariance, and likelihood evaluations per transition so that a seeded run can be compared with these analytic quantities. Agreement at the precision of one run is a useful implementation check, not a proof of invariance, convergence, or a trustworthy Monte Carlo standard error.

## 11.11 What correctness buys, and method choice

The constructions above target exact mathematical invariant distributions when their stated assumptions and randomizations hold. Invariance alone does not give a rate of approach from an initial point. A finite average also has dependent Monte Carlo error, discussed in [Chapter 13](13-mc-error.md), while [Chapter 14](14-diagnostics.md) treats evidence about exploration. Passing diagnostics cannot prove convergence. Floating-point errors, a `NaN` log density, or a silently modified bracket are separate implementation concerns. Finally, a sampler can faithfully explore an ill-specified posterior; modeling assumptions remain to be checked in the wider workflow.

Evaluate methods by cost per useful estimate, not merely by acceptance at the outer iteration. Scalar slice generally returns an acceptable point, but may require several density evaluations and still move poorly between modes. Elliptical slice also returns an acceptable point while drawing a new Gaussian vector and trying several likelihood evaluations. With a cheap exact full conditional, direct Gibbs is often simplest. If gradients and a useful differentiable geometry are available, later gradient methods may traverse a large correlated block more efficiently. These are comparisons to test on the particular estimands, not universal rankings.

| Method | Needed structure | Tuning or variable work | Main limitation to check |
|---|---|---|---|
| Exact Gibbs draw | Samplable full conditional | Draw cost varies by model | Strong dependence across blocks |
| Scalar slice | Scalar log conditional | Width and variable evaluations | Local reach, disconnected slices |
| Elliptical slice | Gaussian reference draw and likelihood | Variable likelihood evaluations | Blocking and likelihood geometry |
| Gradient methods | Differentiable log target | Integrator and geometry choices | Gradients, numerical integration |

Research has established geometric convergence for specified classes of elliptical-slice targets under additional hypotheses; this is not a dimension-free guarantee for every latent Gaussian model. [Natarovskii, Rudolf and Sprungk (2021)](https://arxiv.org/abs/2105.03308) The most reliable practical question is whether the chain explores the features that determine the estimand at an affordable cost, while preserving the distinction between implementation checks, theoretical assumptions, and finite-run uncertainty.

## Exercises

<div class="exercise" id="mcmc-11-slice-ex-1">

**1. Marginal and conditional laws.** Starting from $\widetilde\pi(x,u)=Z^{-1}\mathbf1\{0<u<g(x)\}$, derive both the marginal law of $x$ and the law of $x$ given a height $u$.

<details>
<summary>Solution</summary>

Integration over $u$ gives $\pi(x)=g(x)/Z$. Integrating instead over $x$ at fixed $u$ gives the height marginal $|S_u|/Z$. Division therefore gives $\widetilde\pi(x\mid u)=\mathbf1\{x\in S_u\}/|S_u|$ whenever $0<|S_u|<\infty$.

</details>

</div>

<div class="exercise" id="mcmc-11-slice-ex-2">

**2. A slice you can draw exactly.** Let $g(x)=e^{-2x}\mathbf1\{x>0\}$. Find $S_u$ for $0<u<1$, then give an exact independent draw from $x\mid u$.

<details>
<summary>Solution</summary>

$e^{-2x}>u$ means $x<-\log u/2$, so $S_u=(0,-\log u/2)$. If $V\sim U(0,1)$, set $x'=V(-\log u/2)$. This is an exact conditional draw without a bracket search. A local shrinkage transition generally guarantees only invariance; the connected, fully covered case in Section 11.6 is an exception.

</details>

</div>

<div class="exercise" id="mcmc-11-slice-ex-3">

**3. Continue a shrinkage trace.** In Example 11.6, after rejecting $-1.8$, suppose the next proposal is $1.6$ and the next is $-1.2$. State the bracket after each proposal and decide whether the transition has ended.

<details>
<summary>Solution</summary>

$\log g(1.6)=-1.28<-1$, so reject it and set the right endpoint to $1.6$, giving $(-1.8,1.6)$. Next $\log g(-1.2)=-0.72>-1$, so accept $-1.2$. The interval is not shrunk after acceptance. Both sides were classified relative to the fixed original $x_0=1$, not the last rejected point.

</details>

</div>

<div class="exercise" id="mcmc-11-slice-ex-4">

**4. A transformed Gamma target.** A positive variable has unnormalized density $g(x)=x^{a-1}e^{-bx}$ for $a,b>0$. Derive the log target for $z=\log x$. What distribution would omitting the Jacobian target in $x$?

<details>
<summary>Solution</summary>

Because $x=e^z$ and $dx/dz=e^z$, $g_z(z)\propto e^{(a-1)z-be^z}e^z=e^{az-be^z}$. Its log target is $az-be^z$ plus a constant. Omitting $+z$ gives $(a-1)z-be^z$, which transforms back to an $x$ density proportional to $x^{a-2}e^{-bx}$: Gamma shape $a-1$ if $a>1$, and improper at zero when $a\leq1$.

</details>

</div>

<div class="exercise" id="mcmc-11-slice-ex-5">

**5. Gaussian rotation.** If $f$ and $\nu$ are independent centered Gaussian vectors with covariance $\Sigma$, compute the covariance of $f\cos\theta+\nu\sin\theta$ for a fixed $\theta$. Why does this calculation alone not prove the elliptical algorithm correct?

<details>
<summary>Solution</summary>

Independence makes cross-covariances zero, so the covariance is $\Sigma\cos^2\theta+\Sigma\sin^2\theta=\Sigma$. Gaussianity then identifies the rotated marginal as $N(0,\Sigma)$. The algorithm chooses its angle using a likelihood threshold and a state-dependent shrinkage history. Its proof also needs paired forward and reverse angular histories; fixed-angle covariance cannot establish that selection rule's invariance.

</details>

</div>

<div class="exercise" id="mcmc-11-slice-ex-6">

**6. Compare useful work.** On the target of Example 11.10, propose a reproducible experiment comparing coordinate-wise scalar slice updates with a two-dimensional elliptical update. What should be held comparable, and what would count as evidence rather than proof?

<details>
<summary>Solution</summary>

Use several independent seeds and dispersed starts; report the same estimands, such as each coordinate mean and their sum, against the analytic mean and covariance. Record log-density or likelihood evaluations and elapsed time, and compare Monte Carlo uncertainty or autocorrelation per unit cost after inspecting traces. Sweep scalar widths rather than picking one favorable value. Coordinate-wise scalar updates require conditionals that include both prior and likelihood, whereas elliptical slice thresholds only the likelihood. Agreement with analytic moments and between chains is evidence of a working implementation and exploration over the tested run lengths, not a convergence proof or a universal winner.

</details>

</div>

## Key takeaways

- A height variable converts an unnormalized density into a uniform region under its graph; the target is the horizontal marginal.
- An invariant horizontal transition is sufficient. It need not produce an independent uniform draw over the full slice.
- Random bracket placement, the randomized finite stepping-out budget, and shrinkage around the original state are correctness-critical.
- Elliptical slice uses a Gaussian reference rotation and a likelihood-only threshold; its full-angle bracket must be randomly oriented.
- Exact invariance, convergence from a start, finite-run error, floating-point behavior, and model validity are separate questions.
