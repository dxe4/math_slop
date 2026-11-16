
# Functional Delta Method and Bootstrap Boundaries

This chapter develops the functional delta method for smooth statistical functionals and examines when the bootstrap provides valid approximations. The influence function, introduced in *Robust Functionals*, reappears as the key object in the linear approximation.

## The functional delta method

Many estimators are functionals of the empirical distribution: $\hat{\theta}_{n}=T(\mathbb{P}_{n})$ where $\mathbb{P}_{n}=n^{-1}\sum_{i}\delta_{X_{i}}$. An asymptotically linear representation has the form

$$\sqrt{n}[T(\mathbb{P}_{n})-T(P)]=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}\operatorname{IF}(X_{i};T,P)+o_{p}(1).$$

### Theorem 13.1 — Functional delta method

Let $X_1,\ldots,X_n$ be iid from $P$. Work in a separable Banach-space realisation, with measurable random elements, in which the empirical process $\mathbb G_n=\sqrt n(\mathbb P_n-P)$ converges weakly to a tight mean-zero Gaussian element $\mathbb G$ taking values in a tangent subspace $\mathbb D_0$, with the empirical directions admitted by the tangential limit. Assume $T$ is Hadamard differentiable at $P$ tangentially to $\mathbb D_0$, with continuous linear derivative $T'_P$. For the scalar case, suppose the derivative on these directions has the representation

$$T'_P(\Delta)=\int\operatorname{IF}(x;T,P)\,d\Delta(x),\qquad
\mathbb E_P[\operatorname{IF}(X;T,P)]=0,$$

and $\mathbb E_P[\operatorname{IF}(X;T,P)^2]<\infty$. Then

$$\sqrt{n}[T(\mathbb{P}_{n})-T(P)]\to_{d}\mathcal{N}(0,\sigma^{2}_{IF}),$$

where $\sigma^{2}_{IF}=\int\operatorname{IF}(x)^{2}\,dP(x)$.

**Proof.** The separable-space argument below applies Hadamard differentiation to a Skorokhod coupling of the convergent empirical directions, giving the limit $T'_P(\mathbb G)$. The displayed derivative representation identifies $T'_P(\mathbb G_n)$ with the centred influence average. Its ordinary scalar central limit theorem has variance $\sigma^2_{IF}$, so continuity identifies the same variance for the image Gaussian limit. This proves the result. The weak empirical-process limit is an assumed input, not a consequence of the derivative. ∎

This representation explains the sandwich variance, the infinitesimal jackknife, and the ordinary nonparametric bootstrap for smooth functionals.

## Examples of influence functions

### Sample mean

For $T(P)=\int x\,dP(x)$, the influence function is $\operatorname{IF}(x)=x-\mu$. In a topology controlling the first moment, its continuous derivative gives the ordinary mean CLT. For unbounded support, the unweighted CDF supremum norm alone does not control means; a direct finite-variance CLT can remain valid without that particular functional-space argument.

### Quantiles

For the $p$th quantile $q_{p}$ with $F(q_{p})=p$, assume $F$ has a positive continuous density $f(q_{p})$ at $q_{p}$. Then

$$\operatorname{IF}(x)=\frac{p-\mathbf{1}_{\{x\le q_{p}\}}}{f(q_{p})}.$$

The asymptotic variance is $p(1-p)/f(q_{p})^{2}$. If the density vanishes at $q_{p}$, the rate and limit distribution change.

### Sample maximum

The support-endpoint functional in the ordinary empirical-CDF topology of the uniform example below is not covered by this regular linear Hadamard theorem. Other finite-dimensional maximum maps can have different differentiability properties. Its limit depends on tail behaviour, and the ordinary bootstrap maximum cannot exceed the observed maximum. The bootstrap fails here without special modifications (e.g., extreme-value bootstrap or $m$-out-of-$n$ bootstrap).

## Bootstrap validity

Bootstrap validity is a theorem about the conditional distribution of a resampled statistic. It is *not* guaranteed by running many replicates.

### The nonparametric bootstrap

Draw $X_{1}^{*},\dots,X_{n}^{*}$ iid from $\mathbb{P}_{n}$. Compute $T_{n}^{*}=T(\mathbb{P}_{n}^{*})$. In addition to iid data and the Hadamard derivative conditions in Theorem 13.1, assume the conditional bootstrap empirical process converges in probability in the same norm and tangent space, the derivative applies to those bootstrap directions, and the scalar limiting distribution has a continuous CDF. Then

$$\sup_{t}|\mathbb{P}(\sqrt{n}(T_{n}^{*}-T_{n})\le t\mid\mathbb{P}_{n})-\mathbb{P}(\sqrt{n}(T_{n}-T(P))\le t)|\to_{p}0.$$

### When the bootstrap fails

The bootstrap can fail when:

1. **The statistic is not regular at the target law:** The uniform endpoint example, some change-point estimators and threshold-selection maps can violate the stated derivative conditions. Specialised bootstrap procedures need their own theorem.
2. **Needed tail conditions fail:** Some infinite-variance mean problems lack the usual normal and bootstrap limits. Heavy-tail terminology alone is not a failure theorem when the required moments and convergence assumptions hold.
3. **The parameter is on a boundary:** Variance components at zero, mixture models with unknown number of components.
4. **Dependence is ignored:** Resampling individual observations when the data are clustered or time-dependent.

### Dependent bootstrap

For an iid-cluster experiment with an increasing number of suitably controlled clusters, cluster resampling can preserve the independent sampling unit. Time and spatial block schemes need their own block-growth, domain and dependence assumptions. Preserving local structure is a design principle, not by itself a consistency proof.

## Worked example: bootstrap confidence interval for the median

For $n=25$ iid observations from a distribution with median $m$ and density $f(m)=0.5$ at the median, the asymptotic variance of the sample median is $1/[4nf(m)^{2}]=1/25=0.04$.

The nonparametric bootstrap proceeds as follows:

1. Draw $B=1000$ bootstrap samples of size $n=25$ from the empirical distribution.
2. Compute the sample median $\hat{m}^{*(b)}$ for each bootstrap sample.
3. The bootstrap variance estimate is the sample variance of $\{\hat{m}^{*(b)}\}$.
4. A $95\%$ percentile bootstrap interval is $[\hat{m}^{*(0.025)},\hat{m}^{*(0.975)}]$.

For the median itself, the bootstrap is consistent under the positive,
continuous-density condition stated above. Both the finite-variance sample mean
and such a regular sample median converge at the root-$n$ rate. Their limiting
variances differ, and the median becomes nonregular when the density at the
target quantile vanishes or is not well behaved.

## Common errors and misconceptions

- **Assuming the bootstrap always works.** The bootstrap is a theorem, not a panacea. Check smoothness, tail behaviour, and dependence structure before applying it.

- **Using too few bootstrap replicates.** If the bootstrap distribution has positive density $f_*(q_p)$ at its $p$th quantile, the Monte Carlo standard error of the empirical bootstrap quantile is approximately $\sqrt{p(1-p)/B}/f_*(q_p)$. Tail quantiles or low density can therefore require many replicates; the needed $B$ should follow a reported Monte Carlo error target.

- **Ignoring dependence.** Resampling individual observations from dependent data gives invalid standard errors. The block size or cluster structure must match the data.

- **Freezing the model in bootstrap inference.** If model selection is part of the data analysis, the bootstrap must repeat selection in each resample. A confidence interval conditional on a frozen selected model answers a narrower question.

## The differentiability definition is sequential and tangential

Let the target map be defined on a subset of a Banach space. Hadamard differentiability at a fixed element, tangentially to a linear subspace, means the following: for every scalar sequence tending to zero and every admitted direction sequence converging in norm to a direction in that subspace, the map increment divided by the scalar converges to a continuous linear derivative of that limiting direction.

The direction sequence need not stay exactly in the tangent subspace, but its perturbed base points must lie in the map’s domain. That detail matters for distribution functions, whose monotonicity and total mass constrain which perturbations are legal.

Fréchet differentiability is stronger: its remainder divided by perturbation norm tends to zero uniformly over all sufficiently small perturbations. In that case the delta proof is immediate. A tight scaled estimator error multiplies a remainder factor tending to zero, so the scaled map remainder vanishes.

Hadamard differentiability requires uniformity along convergent direction sequences rather than all bounded directions. Tight weak limits make that weaker condition sufficient in the theorem’s stated measurable separable setting.

## A complete proof in the separable-space experiment

Let the scaled estimator directions converge weakly to the declared tight limit. The Skorokhod representation theorem for separable complete metric spaces supplies copies with the same individual laws that converge almost surely in norm.

On each path where those copies converge, the deterministic Hadamard definition applies with the inverse scaling rate as its scalar sequence. The difference quotient therefore converges to the derivative evaluated at that path’s limiting direction.

The resulting map variables have the same laws as the original scaled statistic, so almost-sure convergence on the representation space proves weak convergence of the original statistics. Continuity and linearity of the derivative identify its Gaussian image when the direction limit is Gaussian.

Skorokhod representation is the named general probability input in this proof. It is not being applied to an unspecified nonseparable supremum space. Empirical processes formulated with outer probability require the corresponding extended continuous-mapping theorem and measurability framework instead.

For a continuous CDF on a compact interval, one can make a concrete separable illustration by linearly interpolating the empirical CDF between ordered observations and its endpoint values. The interpolant differs uniformly from the empirical step CDF by at most reciprocal sample size and is a random continuous function.

The usual continuous-CDF empirical-bridge theorem gives its square-root-scaled limit in the separable space of continuous functions. That bridge theorem is imported as the process input. Differentiability of a target still must be checked separately before applying the present argument.

## Deriving the inverse-CDF derivative

Let a continuous CDF have a unique target quantile, equal the target probability there, and have positive continuous density locally. Perturb it by a small scalar times directions converging uniformly to a continuous limiting function, retaining valid continuous CDFs.

Uniform convergence and strict local increase first make the perturbed quantile converge to the original one. Positivity of the local derivative bounds its displacement by a constant times the perturbation size.

At the perturbed quantile, subtract the original CDF equation. The resulting identity is the original CDF increment plus the scalar times the perturbed direction evaluated at the perturbed quantile, equal to zero.

Divide by the scalar. Local differentiability handles the first term, while uniform direction convergence and continuity handle its value at the moving quantile. The derivative is therefore minus the direction value at the quantile divided by its density.

The raw empirical quantile’s equivalent normal limit was proved directly by binomial inversion in the preceding chapter. This functional calculation explains its influence expression and clarifies exactly why a vanishing density makes the ordinary derivative unusable.

## Why a smooth bootstrap delta step works

Assume the bootstrap scaled error about the original estimate has the same conditional weak limit in probability as the original scaled error. For a Fréchet-smooth map, expand both the bootstrap estimate and the original estimate about the fixed true element.

Subtract the two linear expansions. Their leading difference is the derivative applied to the bootstrap scaled error, and both remainders vanish because the original and bootstrap directions are tight at the declared scale.

A remainder vanishing in their joint probability also vanishes in conditional bootstrap probability, in probability: its conditional exceedance probability has expectation equal to the joint exceedance probability, and Markov gives the claim.

Thus conditional weak convergence transfers through the continuous linear derivative. A Hadamard version uses the corresponding tangential delta argument under the admitted bootstrap-direction assumptions already stated.

If the scalar limit is continuous, weak convergence of distribution functions becomes uniform convergence, supporting limiting quantile calibration. Quantiles at flat or discontinuous limiting levels need more care; the continuity qualification cannot be discarded.

## Worked example: an exact mean bootstrap can fail after an absolute value

Suppose Gaussian data have mean zero and known variance one. The sample mean multiplied by square root of sample size is exactly standard normal. A parametric bootstrap mean equals the observed mean plus an independent standard normal divided by square root of sample size.

For the smooth mean, its centred bootstrap error has the correct distribution exactly. Now apply absolute value at the zero target. The true scaled estimator is nonnegative with the folded-normal law.

The centred bootstrap difference is absolute value of the observed scaled mean plus a new standard normal, minus absolute value of the observed scaled mean. Conditional on a positive observed scaled mean bounded away from zero, that difference has a nonvanishing probability of being negative.

Its conditional law therefore cannot converge to the nonnegative true law. The failure is not an inaccurate bootstrap for the mean; it is the nonlinear directional derivative of absolute value at zero. Ordinary linear Hadamard differentiation is absent there.

## Worked example: the endpoint atom gives a quantitative contradiction

For a uniform endpoint, the true scaled gap has a continuous exponential limit. The bootstrap gap has a zero atom whenever the largest observed value is selected at least once, with conditional probability tending to one minus the reciprocal exponential base.

For any fixed small positive threshold, the bootstrap probability below it is at least that limiting atom. The true exponential probability below that threshold can be made much smaller by choosing the threshold small.

Thus there is a fixed threshold where the conditional bootstrap CDF error stays bounded away from zero. The persistent atom is an actual inconsistency proof, not merely a visual observation that bootstrap maxima cannot exceed the sample maximum.

Changing the resample size or using an extreme-value model can alter the procedure. Each remedy needs its own normalisation and tail assumptions rather than a claim that more replicates remove the atom.

## Practice exercises

### Exercise 13.1
<a id="functional-delta-method-and-bootstrap-boundaries-legacy-13-1"></a>

Derive the influence function for the variance functional $T(P)=\operatorname{Var}_{P}(X)$.

<details><summary>Hint 1</summary>

Write variance as second moment minus squared first moment.

</details>
<details><summary>Hint 2</summary>

Differentiate both parts along a point-mass contamination.

</details>
<details><summary>Solution</summary>

Write $T(P)=\int x^{2}\,dP(x)-[\int x\,dP(x)]^{2}$. The influence function is

$$\operatorname{IF}(x)=(x^{2}-\mathbb{E}[X^{2}])-2\mu(x-\mu)=(x-\mu)^{2}-\sigma^{2}.$$

This is bounded for bounded $x$ but unbounded for distributions with unbounded support. ∎

</details>

### Exercise 13.2
<a id="functional-delta-method-and-bootstrap-boundaries-legacy-13-2"></a>

Let $s^2=(n-1)^{-1}\sum_i(X_i-\bar X)^2$ be the usual unbiased sample variance. Show that the conditional bootstrap variance of the sample mean is $(n-1)s^2/n^2$.

<details><summary>Hint 1</summary>

A single bootstrap draw has variance under the empirical distribution.

</details>
<details><summary>Hint 2</summary>

Average independent draws and keep the empirical versus unbiased variance denominators distinct.

</details>
<details><summary>Solution</summary>

A bootstrap draw has empirical-distribution variance $n^{-1}\sum_i(X_i-\bar X)^2=(n-1)s^2/n$. Conditional independence of the $n$ bootstrap draws therefore gives

$$\operatorname{Var}^*(\bar X^*)=\frac1n\operatorname{Var}^*(X_1^*)=\frac{n-1}{n^2}s^2.$$

It differs from $s^2/n$ by the finite-sample factor $(n-1)/n$ and is asymptotically equivalent. ∎

</details>

### Exercise 13.3
<a id="functional-delta-method-and-bootstrap-boundaries-legacy-13-3"></a>

Explain why the bootstrap fails for the sample maximum from a uniform distribution on $[0,\theta]$.

<details><summary>Hint 1</summary>

The bootstrap can reuse the observed maximum.

</details>
<details><summary>Hint 2</summary>

Calculate the probability that it is selected at least once.

</details>
<details><summary>Solution</summary>

The sample maximum $X_{(n)}$ has exact distribution with support $[0,\theta]$ and $\mathbb{P}(X_{(n)}=\theta)=0$. The bootstrap maximum $X_{(n)}^{*}$ is drawn from $\mathbb{P}_{n}$, which puts mass $1/n$ at each observed point. It always satisfies $X_{(n)}^{*}\le X_{(n)}$. Moreover,

$$\mathbb{P}^{*}(X_{(n)}^{*}=X_{(n)})=1-(1-1/n)^{n}\longrightarrow1-e^{-1},$$

because equality occurs exactly when the observed maximum is selected at least
once. This persistent atom at zero in the conditional law of
$n(X_{(n)}-X_{(n)}^{*})$ cannot approximate the continuous limiting law of
$n(\theta-X_{(n)})$. ∎

</details>


## Further exercises on functional and bootstrap limits

### Exercise 8.4
<a id="functional-delta-method-and-bootstrap-boundaries-ex-4"></a>

Why does a mean need a moment-controlling topology for a functional argument?

<details><summary>Hint 1</summary>

Small CDF sup distance can move a tiny mass far into a tail.

</details>
<details><summary>Hint 2</summary>

Mean weights that distance by outcome magnitude.

</details>
<details><summary>Solution</summary>

Move probability tending to zero to a location growing faster than its reciprocal. The CDF change tends uniformly to zero while the mean change need not vanish. Thus an unweighted CDF norm does not make the unbounded mean functional continuous. A direct mean CLT uses its own moment assumptions.

</details>

### Exercise 8.5
<a id="functional-delta-method-and-bootstrap-boundaries-ex-5"></a>

State the admitted-direction qualification in Hadamard differentiability.

<details><summary>Hint 1</summary>

The limiting direction lies in the tangent space.

</details>
<details><summary>Hint 2</summary>

Every perturbed base point must remain in the map’s domain.

</details>
<details><summary>Solution</summary>

The definition tests convergent directions whose scaled perturbations are valid inputs, even if the approximating directions do not exactly belong to the tangent subspace. For CDFs, domain validity preserves monotonicity and mass; arbitrary linear perturbations need not do so.

</details>

### Exercise 8.6
<a id="functional-delta-method-and-bootstrap-boundaries-ex-6"></a>

Where is separability used in the given proof?

<details><summary>Hint 1</summary>

It permits the stated Skorokhod representation.

</details>
<details><summary>Hint 2</summary>

Pathwise norm convergence then invokes deterministic differentiation.

</details>
<details><summary>Solution</summary>

The proof couples weakly convergent random elements on a separable complete metric space into almost-sure norm convergence. That representation cannot simply be claimed for every nonseparable empirical-process space; an appropriate extended mapping theorem is needed there.

</details>

### Exercise 8.7
<a id="functional-delta-method-and-bootstrap-boundaries-ex-7"></a>

Derive the quantile derivative sign.

<details><summary>Hint 1</summary>

An upward CDF perturbation reaches a fixed probability earlier.

</details>
<details><summary>Hint 2</summary>

Use the local inverse equation.

</details>
<details><summary>Solution</summary>

The perturbed equation gives $f(q)(q_t-q)+t h(q)+o(t)=0$, so the derivative is $-h(q)/f(q)$. Positive density is needed both for the inverse displacement bound and division.

</details>

### Exercise 8.8
<a id="functional-delta-method-and-bootstrap-boundaries-ex-8"></a>

Why is the absolute-value bootstrap counterexample decisive?

<details><summary>Hint 1</summary>

The true scaled law is supported on nonnegative values.

</details>
<details><summary>Hint 2</summary>

The centred conditional bootstrap has negative mass.

</details>
<details><summary>Solution</summary>

With positive probability the observed scaled mean is bounded away from zero. Conditional bootstrap perturbations then move it toward zero with nonvanishing probability, producing a negative centred absolute-value difference. Such mass cannot converge to the folded-normal target’s zero negative mass.

</details>

### Exercise 8.9
<a id="functional-delta-method-and-bootstrap-boundaries-ex-9"></a>

Does increasing bootstrap replicate count repair a wrong conditional limiting law?

<details><summary>Hint 1</summary>

Replicates approximate the chosen resampling law.

</details>
<details><summary>Hint 2</summary>

They do not change that law.

</details>
<details><summary>Solution</summary>

More replicates reduce Monte Carlo error in representing the bootstrap distribution. They leave its endpoint atom or nonsmooth-centred distortion intact. Statistical bootstrap consistency and Monte Carlo approximation are separate limits.

</details>

### Exercise 8.10
<a id="functional-delta-method-and-bootstrap-boundaries-ex-10"></a>

Why must a block bootstrap theorem state a block-growth regime?

<details><summary>Hint 1</summary>

Blocks must retain dependence but provide enough effective resampled information.

</details>
<details><summary>Hint 2</summary>

Fixed or excessively long blocks can miss one of those goals.

</details>
<details><summary>Solution</summary>

The resampling distribution depends on how block length grows relative to sample size and on the underlying dependence. Preserving a few adjacent observations does not itself prove a correct long-run limit, while too few effective blocks can prevent concentration. A matching theorem must specify those rates.

</details>

## Forward and backward connections

This chapter unified the asymptotic theory of smooth functionals, connecting the influence function from *Robust Functionals* to the bootstrap and sandwich variance from *Estimating Equations and Sandwich Limits*. In *Missingness and Weighting as Identification*, we apply these tools to estimators that combine outcome regression with inverse probability weighting, where the functional delta method justifies the asymptotic distribution of doubly robust estimators.

## Summary

A functional limit needs both a process convergence theorem and a derivative in its actual topology. The separable-space delta proof and inverse-CDF calculation make those inputs explicit. Bootstrap convergence transfers through a continuous linear derivative under its own conditional assumptions, while absolute-value and endpoint examples prove concrete failures. Replication count controls Monte Carlo error, not validity of the resampling model.
