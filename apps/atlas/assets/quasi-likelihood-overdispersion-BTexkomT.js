var e=`---
parent_id: book-regression-and-generalised-linear-models
chapter_id: quasi-likelihood-overdispersion
title: "Quasi-likelihood and Overdispersion"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Quasi-likelihood and Overdispersion

Preparation is [Poisson models](poisson-count-models.md), conditional variance, matrix differentiation and the asymptotic-normality and delta-method chapter in Principles. General estimating-equation limits are stated with explicit assumptions rather than assumed from a fitted root.

A full likelihood specifies probabilities for every possible response. Sometimes the mean structure is credible while the distributional details are less secure. Quasi-likelihood instead starts from a mean-variance relation and builds an estimating equation. It can support a useful coefficient target and uncertainty argument without pretending to provide a probability mass function.

## Mean and variance assumptions

Let responses be independent with $EY_i=\\mu_i(\\beta)$ and $\\operatorname{Var}(Y_i)=\\phi V(\\mu_i)$, where $V$ is positive on the mean domain and $\\phi>0$. Write $D_i=\\partial\\mu_i/\\partial\\beta$ as a column vector. The quasi-score is
$$
U(\\beta)=\\sum_iD_i\\frac{Y_i-\\mu_i}{\\phi V(\\mu_i)}.
$$
Its expectation is zero at the true coefficient whenever the mean is correct and the stated moments exist. This unbiased-score property does not require a complete density.

A common multiplicative dispersion $\\phi$ cancels from the equation $U(\\beta)=0$, so changing that common scale alone does not change its coefficient root. It changes the covariance and other uncertainty calculations. A mean-dependent or observation-dependent variance change can instead change the relative weights and the root.

## An integrated quasi-likelihood

For a scalar mean define
$$
Q(\\mu;y)=\\int_y^\\mu\\frac{y-t}{V(t)}\\,dt.
$$
Its derivative is $(y-\\mu)/V(\\mu)$. Applying the chain rule to a regression mean recovers the quasi-score up to its common dispersion. The lower limit supplies only a convention for an additive constant; it does not turn $Q$ into a normalised density in $y$.

With $V(\\mu)=\\mu$, integration gives $y\\log\\mu-\\mu$ plus a constant in $y$, matching the Poisson log-likelihood's coefficient-dependent part. With $V(\\mu)=\\mu(1-\\mu)$ for means in $(0,1)$, the integral gives the Bernoulli coefficient-dependent expression. With constant variance function it is negative squared error up to scale.

These correspondences do not identify the full data law. Many distributions share a mean-variance relation. A quasi-likelihood difference therefore does not automatically inherit an ordinary likelihood-ratio reference or a marginal probability interpretation.

## The bread and the meat

Differentiating the quasi-score has terms from the derivative of $D_i/V(\\mu_i)$ multiplied by $Y_i-\\mu_i$, whose expectations vanish under the correct mean. Thus the expected negative derivative is
$$
A_n=\\sum_i\\frac{D_iD_i^\\mathsf T}{\\phi V(\\mu_i)}.
$$
Under the stated independent variance model the score covariance is the same matrix. If that variance relation is wrong while means remain correct, its actual covariance is instead
$$
B_n=\\sum_i\\frac{D_iD_i^\\mathsf T\\operatorname{Var}(Y_i)}
{\\phi^2V(\\mu_i)^2}.
$$
This distinguishes a working sensitivity matrix from an actual fluctuation matrix. Estimated covariance has sandwich form $A_n^{-1}B_nA_n^{-\\mathsf T}$ in an appropriate regular large-sample setting.

The name “sandwich” supplies no theorem. Consistency of its ingredients and a valid central limit theorem are additional obligations. It cannot repair an incorrect mean, nonidentification or response-dependent selection simply by replacing a standard-error column.

## A precise asymptotic transfer statement

**Theorem 12.1.** Suppose a sequence of quasi-score roots $\\hat\\beta_n$ is consistent for $\\beta_0$. Assume the score is differentiable along their connecting segments, and its average integrated Jacobian converges in probability to a nonsingular matrix $-A$. Suppose also $n^{-1/2}U_n(\\beta_0)$ converges in distribution to $N(0,B)$. Then
$$
\\sqrt n(\\hat\\beta_n-\\beta_0)\\ \\Rightarrow\\
N(0,A^{-1}BA^{-\\mathsf T}).
$$

**Proof.** The fundamental theorem of calculus for a differentiable vector map gives
$$
0=U_n(\\beta_0)+
\\left[\\int_0^1DU_n(\\beta_0+t(\\hat\\beta_n-\\beta_0))\\,dt\\right]
(\\hat\\beta_n-\\beta_0).
$$
Divide its matrix term by $n$ and rearrange. Its inverse converges in probability to $-A^{-1}$. Multiplying by the score limit and applying Slutsky yields the stated normal covariance. ∎

This is a transfer theorem with explicit assumptions. It does not prove consistency from the mere existence of a root. For independent triangular arrays, a Lindeberg condition and covariance convergence can establish the score CLT; uniform derivative control and design identification establish the other steps in specific models. Sparse data, separation, heavy tails or an increasing coefficient dimension may violate them.

## Pearson dispersion and what it estimates

A conventional Pearson estimate is
$$
\\hat\\phi=\\frac1{n-p}\\sum_i
\\frac{(Y_i-\\hat\\mu_i)^2}{V(\\hat\\mu_i)}.
$$
It resembles residual scale estimation. Its exact unbiasedness is special to certain linear models; generally it is an asymptotic or approximate estimate under the declared mean-variance structure. The fitted means and residual degrees affect its expectation.

A large Pearson value can reflect genuine overdispersion, mean misspecification, dependence, outliers or incorrect exposure. It does not by itself distinguish those mechanisms. Multiplying Poisson variance by a fitted factor can improve a working uncertainty description without explaining why the extra variation arose.

For Bernoulli data with a single binary response per independent observation, a fixed mean already fixes the marginal variance $\\mu(1-\\mu)$. An additional marginal dispersion parameter cannot freely alter that variance while retaining the same Bernoulli law. Extra-binomial variation is meaningful for grouped trials, dependence or heterogeneity under another sampling model.

## Quasi-Poisson and negative-binomial weighting

With a log mean and working variance $\\phi\\mu$, the quasi-score is proportional to $X^\\mathsf T(Y-\\mu)$, so its coefficient root matches the Poisson score for the same design. Its covariance is scaled differently under the working model.

A negative-binomial variance $\\mu+\\kappa\\mu^2$ yields weights depending differently on the mean. High-mean observations receive less relative precision than in quasi-Poisson. Even with the same log link, the coefficient estimates need not agree because the score weighting is no longer a common scalar multiple.

The full negative-binomial likelihood also provides probabilities, while a quasi approach with that variance function provides estimating equations. These are related mathematical structures, not identical inferential licences.

## Clusters and independent units

If observations arrive in independent clusters, the natural score contribution is the sum over each cluster. Its covariance includes within-cluster cross terms. A cluster-robust meat uses outer products of cluster score sums, not merely row-wise residual squares.

Large-sample justification then generally requires the number of independent clusters to increase, along with control of cluster sizes, leverage and moments. Many rows from a handful of clusters do not automatically provide that asymptotic regime. Small-cluster corrections and randomisation-based methods need their own argument.

Working independence can still estimate a correct marginal-mean target under suitable conditions, while its naive independent-row covariance is wrong. Conversely a beautifully estimated covariance does not rescue a mean that conditions on the wrong variables or a missingness mechanism that changes the target.

## Reporting quasi inference

State the mean, link, working variance, observational unit, dispersion convention and score root. Name whether a full distribution is asserted or only moments. For predictions, distinguish mean uncertainty from a complete predictive distribution: moments alone do not determine tail probabilities or exact quantiles.

Model-comparison criteria built from quasi-likelihood need conventions and separate asymptotic justification. Ordinary likelihood ratios, AIC values or Bayes factors cannot be obtained by treating an arbitrary integrated score as a normalised sampling density. If a decision depends on a tail probability, specify enough of the law or an explicit bound to support that target.

## A scalar sandwich can be derived exactly

Consider independent responses with one common mean $\\beta$ and variances $v_i$, not necessarily equal. A constant working variance gives estimating equation $\\sum_i(Y_i-\\beta)=0$, whose root is the ordinary sample mean. Its exact variance is $\\sum_iv_i/n^2$, even though the working model might have assigned a common scale.

Here the score derivative magnitude is $A_n=n$ and its variance is $B_n=\\sum_iv_i$, so $A_n^{-1}B_nA_n^{-1}$ reproduces the exact variance. The sandwich is therefore an algebraic covariance identity for this linear estimator before any normal approximation is invoked.

Estimating $B_n$ from the same sample introduces another question. A residual-square plug-in must consistently estimate the average variance under the stated sequence. A valid central limit law additionally needs large individual contributions not to dominate. A sequence with one observation carrying most of the total variance can violate a Lindeberg condition even when every finite variance exists.

**Worked example: one increasingly noisy observation.** Suppose $n-1$ variances are one but the final variance is $n^3$. The sample-mean variance is $\\{n-1+n^3\\}/n^2$, of order $n$, so the estimator does not concentrate at the common mean. Writing down a finite sandwich matrix for each $n$ has not established consistency or the usual square-root-$n$ normal limit. The design of an asymptotic sequence matters.

## A mean root and its covariance target

For a misspecified mean family, a quasi-score may have a population root $\\beta_*$ defined by an averaged estimating equation. Under suitable identification and regularity it can estimate that root. But the root depends on the chosen working weights and covariate distribution. It is not automatically the coefficient of the true conditional mean, which may not belong to the family.

This resembles population linear projection in the opening chapter. There, orthogonality identified the best linear approximation; it did not prove a linear conditional mean. Here zero expected score identifies an estimating-equation target. A robust covariance can describe its sampling uncertainty while leaving the scientific interpretation of the target unresolved.

Changing weights can change that root under misspecification. Thus “same mean formula” does not guarantee the same population estimand across different quasi variance functions. Under a correctly specified mean all unbiased scores target the same coefficient; outside that case, the weighting choice can become substantive.

## Prediction under partial distributional information

Knowing a mean and variance allows some rigorous statements without a complete predictive law. For example, conditional Chebyshev gives
$$
P(|Y_*-\\mu_*|\\ge a\\mid X_*)\\le
\\frac{\\operatorname{Var}(Y_*\\mid X_*)}{a^2}
$$
when the conditional variance is finite and $a>0$. This can be a conservative model-based bound. It is not an exact predictive interval with a specified tail shape.

Estimation uncertainty in $\\mu_*$ and its variance must still be included if those quantities are fitted rather than known. A plug-in moment bound is not automatically a finite-sample coverage theorem for an estimated interval. One must separate the probability statement under known model quantities from the uncertainty of learning them.

For a decision especially sensitive to rare large counts, two models sharing first and second moments can recommend different actions because their tails differ. The appropriate response is to state the partial-information limit, examine additional distributional assumptions or use a decision criterion designed for that uncertainty. Quasi-likelihood should not be asked to provide probabilities it never specified.

## Worked example 12.1: one coefficient root, different uncertainty

Take a fixed log-mean design with working Poisson variance $\\mu$ and quasi-Poisson variance $4\\mu$. Their coefficient score equations differ only by a factor one-quarter, so their roots coincide. Under the correct quasi-Poisson variance, model-based covariance is four times the Poisson covariance and standard errors are twice as large. The agreement of coefficients did not imply agreement of evidence.

## Worked example 12.2: different relative weights

For means one and ten, quasi-Poisson with a common scale weights log-mean information proportionally to one and ten. With negative-binomial variance $\\mu+\\mu^2$, corresponding mean-sensitivity weights are $\\mu/(1+\\mu)$, namely one-half and ten-elevenths. Their ratio is much less extreme. The weighting change can alter regression coefficients, not just a common standard-error multiplier.

## Worked example 12.3: a group sum keeps covariance

Two observations in one cluster have score contributions with equal variance one and covariance one-half. Their summed score has variance $1+1+2(1/2)=3$, while an independent-row meat would count only two. Repeating many independent clusters can support a cluster-level CLT. Treating the two dependent rows as separate independent units would omit a full third of this cluster score variance.

## A common dispersion scale changes precision before changing the root

When a quasi-score contains one common positive dispersion factor multiplying every observation’s variance, that factor appears as a common reciprocal multiplier of the whole estimating equation. Holding the mean-variance shape fixed, changing the common scale therefore leaves its roots unchanged.

The estimated covariance does change, because it measures variation around that same root under a different dispersion assumption. Estimating a scale from Pearson residuals is consequently a precision step in this formulation, rather than a new coefficient fit. Estimated observation-specific variance shapes are different: they alter relative weighting and can move the root.

A quasi-score alone is also not a full likelihood for the observations. Ordinary likelihood-ratio reference distributions and ordinary likelihood-based information criteria cannot be manufactured by renaming the quasi-objective. Any quasi-information criterion must state its own definition and justification, including the role of estimated dispersion and tuning choices.

## Matching two moments does not determine a tail

A quasi-likelihood specifies mean and variance behaviour, not a complete conditional distribution. This limitation can be demonstrated without fitting a model. One centred distribution assigns equal probability to minus one and plus one. Another assigns probability one eighth to each of minus two and plus two, and the remaining three quarters to zero. Both have mean zero and variance one. Nevertheless the probability of absolute value exceeding three halves is zero for the first law and one quarter for the second.

Consequently a valid mean-and-variance specification alone cannot supply a unique prediction tail probability. Moment inequalities can bound tails, and an asymptotic normal theorem can justify a particular estimator approximation under additional assumptions, but neither turns the response law into a normal distribution. This distinction explains why a sandwich covariance for fitted parameters is not itself a full predictive distribution for a new outcome. Additional distributional assumptions should be stated when such prediction is requested.

## Exercises

### Exercise 12.1
<a id="quasi-likelihood-overdispersion-ex-1"></a>

Show the quasi-score has expectation zero under the correct mean.

<details>
<summary>Hint 1</summary>

The design derivative is fixed at the parameter.

</details>
<details>
<summary>Hint 2</summary>

The residual has mean zero.

</details>
<details>
<summary>Solution</summary>

Each contribution is a deterministic vector weight times $Y_i-\\mu_i$. Its expectation is zero when $EY_i=\\mu_i$, and summing preserves zero. This does not prove the estimating root is consistent or identify a complete distribution.

</details>

### Exercise 12.2
<a id="quasi-likelihood-overdispersion-ex-2"></a>

Why does a common dispersion cancel from coefficient estimation?

<details>
<summary>Hint 1</summary>

It multiplies every score contribution equally.

</details>
<details>
<summary>Hint 2</summary>

Roots are unchanged by a nonzero scalar factor.

</details>
<details>
<summary>Solution</summary>

The equation is $(1/\\phi)$ times a score not involving that common scale, so its zero set is the same for positive $\\phi$. A different variance function or observation-specific scale changes relative weights and need not preserve the root.

</details>

### Exercise 12.3
<a id="quasi-likelihood-overdispersion-ex-3"></a>

Integrate the quasi-likelihood for V(mu)=mu.

<details>
<summary>Hint 1</summary>

Integrate y/t minus one.

</details>
<details>
<summary>Hint 2</summary>

Terms depending only on y are constants for fitting.

</details>
<details>
<summary>Solution</summary>

The result is $y\\log\\mu-\\mu$ plus a function of $y$. It matches the Poisson coefficient-dependent log likelihood, but the quasi derivation alone has not supplied the factorial normalisation or asserted Poisson probabilities for every count.

</details>

### Exercise 12.4
<a id="quasi-likelihood-overdispersion-ex-4"></a>

Derive the expected negative score derivative.

<details>
<summary>Hint 1</summary>

Separate residual-multiplied derivative terms.

</details>
<details>
<summary>Hint 2</summary>

Their expectation vanishes under the mean model.

</details>
<details>
<summary>Solution</summary>

Differentiating gives a term $-D_iD_i^\\mathsf T/\\{\\phi V(\\mu_i)\\}$ and terms proportional to the residual. Their expected sum is therefore $-A_n$. This uses differentiability and existence of the required moments, not a full likelihood identity.

</details>

### Exercise 12.5
<a id="quasi-likelihood-overdispersion-ex-5"></a>

What additional ingredients does the asymptotic transfer theorem assume?

<details>
<summary>Hint 1</summary>

A root alone is not enough.

</details>
<details>
<summary>Hint 2</summary>

List consistency, derivative control and the score CLT.

</details>
<details>
<summary>Solution</summary>

It assumes a consistent root, a nonsingular limiting average integrated Jacobian, and a central limit law for the normalised score. The proof transfers those facts to the coefficient limit. Establishing them for a particular design and response sequence is a separate mathematical task.

</details>

### Exercise 12.6
<a id="quasi-likelihood-overdispersion-ex-6"></a>

Can a robust covariance repair the wrong conditional mean?

<details>
<summary>Hint 1</summary>

The score may then have nonzero expectation at the proposed target.

</details>
<details>
<summary>Hint 2</summary>

Variance and target are different.

</details>
<details>
<summary>Solution</summary>

No. A sandwich can estimate fluctuations around an appropriate estimating-equation target under regularity, but it does not make that target equal an incorrectly specified scientific coefficient. Mean specification and identification must be justified before interpreting its covariance.

</details>

### Exercise 12.7
<a id="quasi-likelihood-overdispersion-ex-7"></a>

Why is free Bernoulli overdispersion problematic for one independent binary response?

<details>
<summary>Hint 1</summary>

Its second moment equals its mean.

</details>
<details>
<summary>Hint 2</summary>

The variance is already determined by the success probability.

</details>
<details>
<summary>Solution</summary>

For a zero-one variable, $EY^2=EY=\\mu$, so its variance is exactly $\\mu(1-\\mu)$. An arbitrary extra multiplier cannot describe another Bernoulli marginal at that same mean. Grouping, dependence or a different observation law must explain additional variability.

</details>

### Exercise 12.8
<a id="quasi-likelihood-overdispersion-ex-8"></a>

Compute the score-sum variance for three unit-variance contributions with every pair covariance one-quarter.

<details>
<summary>Hint 1</summary>

Include all pair cross terms.

</details>
<details>
<summary>Hint 2</summary>

There are three unordered pairs.

</details>
<details>
<summary>Solution</summary>

The variance is $3+2\\cdot3(1/4)=9/2$. Ignoring dependence would report three. This illustrates why a cluster meat uses the whole cluster score rather than a sum of separate squared row scores.

</details>

### Exercise 12.9
<a id="quasi-likelihood-overdispersion-ex-9"></a>

Does a fitted Pearson factor identify the cause of extra variation?

<details>
<summary>Hint 1</summary>

Several mechanisms affect residual squares.

</details>
<details>
<summary>Hint 2</summary>

A diagnostic summary does not select one causal explanation.

</details>
<details>
<summary>Solution</summary>

No. Misspecified means, correlation, heterogeneous intensity, outliers and incorrect exposure can all increase the statistic. Investigate the relevant mechanism and compare predictions. A variance multiplier is a working description, not evidence for a particular latent process.

</details>

### Exercise 12.10
<a id="quasi-likelihood-overdispersion-ex-10"></a>

Why do quasi moments not determine a predictive tail probability?

<details>
<summary>Hint 1</summary>

Different laws can share their first two moments.

</details>
<details>
<summary>Hint 2</summary>

A tail is a distributional functional.

</details>
<details>
<summary>Solution</summary>

Many response distributions have the same mean and variance but different tail masses. A quasi model alone therefore cannot supply an exact predictive quantile or event probability. One must add a full law, a justified approximation or a moment inequality appropriate to the requested target.

</details>

## Summary

Quasi-likelihood builds an unbiased estimating equation from mean and variance assumptions without supplying a full sampling law. Bread and meat coincide only under the working variance model. Asymptotic inference needs consistency, derivative control and a score CLT. Dispersion, clustering, prediction and model comparison retain separate assumptions.
`;export{e as default};