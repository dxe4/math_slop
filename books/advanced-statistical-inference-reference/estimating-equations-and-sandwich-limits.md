
# Estimating Equations and Sandwich Limits

This chapter develops the large-sample theory of estimators defined as solutions to estimating equations. The sandwich variance formula provides robust standard errors when the working model is misspecified but the estimating equation remains unbiased. The theory applies to maximum likelihood, quasi-likelihood, generalized method of moments, and many semiparametric estimators.

## M-estimators and estimating equations

Let $Z_{1},\dots,Z_{n}$ be iid random vectors with distribution $P$. An *M-estimator* $\hat{\theta}_{n}$ solves

$$\Psi_{n}(\theta)=\frac{1}{n}\sum_{i=1}^{n}\psi(Z_{i},\theta)=0,$$

where $\psi$ is a known function taking values in $\mathbb{R}^{p}$ and $\theta\in\Theta\subseteq\mathbb{R}^{p}$. We assume $\theta_{0}$ is the unique solution to the population equation $\mathbb{E}[\psi(Z,\theta)]=0$.

The score equation of maximum likelihood is the canonical example: if $Z_{i}$ has density $f(z;\theta)$, then $\psi(z,\theta)=\partial\log f(z;\theta)/\partial\theta$. But the framework is broader. Least squares, robust regression, and generalized method of moments all fit this form.

## Theorem 3.1 — Asymptotic normality of regular M-estimators

Assume:

1. **Consistency:** $\hat{\theta}_{n}\to_{p}\theta_{0}$ and $\theta_{0}$ lies in the interior of $\Theta$.
2. **Differentiability:** $\psi(z,\theta)$ is continuously differentiable in $\theta$ in a neighborhood of $\theta_{0}$, with derivative $\dot{\psi}(z,\theta)=\partial\psi(z,\theta)/\partial\theta^{T}$.
3. **Dominated derivative:** There exists an integrable function $h(z)$ such that $\|\dot{\psi}(z,\theta)\|\le h(z)$ for all $\theta$ in the neighborhood.
4. **Nonsingular expected derivative:** $A=\mathbb{E}[\dot{\psi}(Z,\theta_{0})]$ exists and is nonsingular.
5. **Finite variance of score:** $B=\operatorname{Var}[\psi(Z,\theta_{0})]$ is finite and positive definite.
6. **Local domain and measurability:** a closed ball about the target lies inside the parameter space, and the continuous derivative and its local suprema are measurable. The dominated-derivative hypothesis then supplies the shrinking-neighbourhood control proved below; convergence to a constant derivative over a fixed nonshrinking ball is not required.

Then

$$\sqrt{n}(\hat{\theta}_{n}-\theta_{0})\to_{d}\mathcal{N}(0,A^{-1}BA^{-T}).$$

**Proof.** Integrate the derivative along the line segment from the target to the consistent root:
$$
0=\Psi_n(\theta_0)+\overline A_n(\widehat\theta-\theta_0),\qquad
\overline A_n=\int_0^1P_n\dot\psi(Z,\theta_0+t(\widehat\theta-\theta_0))\,dt.
$$
The local-envelope argument below proves $\overline A_n\to_p A$. Nonsingularity makes its inverse well-defined with probability tending to one and convergent to $A^{-1}$. Multiply the identity by square root of sample size. The iid vector central limit theorem applies to the centred score at the target, with covariance $B$; Slutsky gives the stated sandwich limit. ∎

The matrix $A^{-1}BA^{-T}$ is the *sandwich* variance. Under correct model specification with a likelihood score, the information equality $B=-A$ holds under regularity conditions, and the sandwich reduces to $-A^{-1}=I(\theta_{0})^{-1}$, the inverse Fisher information.

## The sandwich under misspecification

Suppose we fit a working model with score $\psi(z,\theta)$, but the true data-generating distribution is not in the model. If a consistent root targets the true-distribution population equation and the stated differentiability, moment and nonsingularity hypotheses hold, the sandwich limit remains valid at that root. Defining a root does not by itself prove consistency of whichever numerical solution was selected. This is the *robustness* property: the sandwich protects against variance misspecification when the mean estimating equation is unbiased.

However, the sandwich does *not* repair a wrong mean model. If the equation is not centred at the intended scientific parameter, the estimator need not estimate that parameter. It may instead target a well-defined projection or pseudo-true root, whose interpretation must be declared. A variance adjustment cannot change the target.

## Clustered observations

When observations are grouped into $J$ independent clusters with $n_{j}$ observations in cluster $j$, the estimating equation becomes

$$\Psi_{n}(\theta)=\frac{1}{n}\sum_{j=1}^{J}\sum_{i=1}^{n_{j}}\psi(Z_{ij},\theta)=0.$$

The cluster sums $S_{j}(\theta)=\sum_{i}\psi(Z_{ij},\theta)$ are independent. In the standard many-cluster framework, cluster sizes are bounded or sufficiently controlled and no cluster dominates; then the central limit theorem is indexed by the number of clusters $J$. This is not a universal assertion that every clustered estimator has a $J^{-1/2}$ rate. If within-cluster observations add independent information while cluster sizes grow, an $n^{-1/2}$ rate can remain available; strong within-cluster dependence or dominant growing clusters requires a separate triangular-array analysis. The cluster-robust sandwich is

$$\widehat{\operatorname{Var}}(\hat{\theta})=\Bigl(\sum_{j}\sum_{i}\dot{\psi}_{ij}\Bigr)^{-1}\Bigl(\sum_{j}S_{j}(\hat{\theta})S_{j}(\hat{\theta})^{T}\Bigr)\Bigl(\sum_{j}\sum_{i}\dot{\psi}_{ij}^{T}\Bigr)^{-1}.$$

Few or highly unequal clusters can give poor calibration, and the sign or size of finite-sample bias is not universal. Bias adjustments and cluster resampling require their own design and asymptotic justification; naming one does not supply an exact correction.

## Worked example: linear regression with heteroskedasticity

Consider the linear model $Y_{i}=\beta_{0}+\beta_{1}X_{i}+\varepsilon_{i}$ with $\mathbb{E}[\varepsilon_{i}\mid X_{i}]=0$ but $\operatorname{Var}(\varepsilon_{i}\mid X_{i})=\sigma^{2}(X_{i})$, an unknown function. The OLS estimator solves $\psi(Z_{i},\beta)=X_{i}(Y_{i}-X_{i}^{T}\beta)$, where $X_{i}=(1,X_{i})^{T}$.

**Step 1: Compute $A$.**

$$A=\mathbb{E}[\dot{\psi}(Z,\beta)]=-\mathbb{E}[X_{i}X_{i}^{T}]=-\begin{pmatrix}1&\mu_{X}\\\mu_{X}&\mathbb{E}[X^{2}]\end{pmatrix}.$$

**Step 2: Compute $B$.**

$$B=\operatorname{Var}[\psi(Z,\beta_{0})]=\mathbb{E}[\varepsilon^{2}XX^{T}]=\mathbb{E}[\sigma^{2}(X)XX^{T}].$$

Under homoskedasticity, $\sigma^{2}(X)=\sigma^{2}$ and $B=\sigma^{2}\mathbb{E}[XX^{T}]=-\sigma^{2}A$, giving the usual OLS variance. Under heteroskedasticity, $B\neq -\sigma^{2}A$, and the sandwich is required.

**Step 3: Numerical illustration.** Suppose $X_{i}\sim\text{Uniform}(0,1)$ and $\sigma^{2}(X)=X^{2}$. Then

$$\mathbb{E}[XX^{T}]=\begin{pmatrix}1&1/2\\1/2&1/3\end{pmatrix},\qquad B=\mathbb{E}[X^{2}XX^{T}]=\begin{pmatrix}1/3&1/4\\1/4&1/5\end{pmatrix}.$$

The sandwich variance for $n$ observations is $n^{-1}A^{-1}BA^{-T}$. Put $A=-M$, where $M=\mathbb{E}[XX^{T}]$. Then $A^{-1}=-M^{-1}$ and the two minus signs cancel, so the sandwich is

$$A^{-1}BA^{-T}=M^{-1}BM^{-1}.$$

Now $M=\begin{pmatrix}1&1/2\\1/2&1/3\end{pmatrix}$, $\det(M)=1/3-1/4=1/12$, so

$$M^{-1}=12\begin{pmatrix}1/3&-1/2\\-1/2&1\end{pmatrix}=\begin{pmatrix}4&-6\\-6&12\end{pmatrix}.$$

Then $M^{-1}B=\begin{pmatrix}4&-6\\-6&12\end{pmatrix}\begin{pmatrix}1/3&1/4\\1/4&1/5\end{pmatrix}=\begin{pmatrix}4/3-3/2&1-6/5\\-2+3&-3/2+12/5\end{pmatrix}=\begin{pmatrix}-1/6&-1/5\\1&9/10\end{pmatrix}$.

And $(M^{-1}B)M^{-1}=\begin{pmatrix}-1/6&-1/5\\1&9/10\end{pmatrix}\begin{pmatrix}4&-6\\-6&12\end{pmatrix}=\begin{pmatrix}-2/3+6/5&1-12/5\\4-27/5&-6+54/5\end{pmatrix}=\begin{pmatrix}8/15&-7/5\\-7/5&24/5\end{pmatrix}$.

The $(2,2)$ entry is $24/5=4.8$. Under homoskedasticity with $\sigma^{2}=\mathbb{E}[X^{2}]=1/3$, the OLS variance would be $\sigma^{2}(M^{-1})_{22}=(1/3)\cdot 12=4$. The heteroskedasticity inflates the variance of $\hat{\beta}_{1}$ by $20\%$.

## Common errors and misconceptions

- **Assuming information equality holds automatically.** The equality $B=-A$ requires correct model specification and regularity conditions that permit differentiation under the integral. With misspecification, boundary parameters, or discrete parameters, it fails.

- **Using the sandwich with too few clusters.** There is no universal cluster-count threshold. In the bounded-cluster many-cluster experiment, the limit requires increasing independent clusters, while other size/dependence regimes need separate normalisation.

- **Confusing robust variance with robust estimation.** The sandwich gives a valid standard error for a potentially inefficient estimator. It does not make the estimator itself robust to outliers or leverage points.

- **Ignoring that the sandwich is asymptotic.** In small samples, sandwich standard errors can be more variable than model-based ones. Bias corrections and alternative formulations (HC1, HC2, HC3) exist for a reason.

## Why the integrated derivative really converges

Fix a small deterministic radius and define the local derivative oscillation as the supremum of the derivative difference from its value at the target inside that ball. Continuity makes this oscillation tend to zero for almost every observation as the radius decreases.

The integrable derivative envelope bounds it by twice an integrable function. Dominated convergence therefore makes its expectation tend to zero. This is a local statement, not uniform convergence of the derivative to one constant throughout a fixed ball where its population value may genuinely vary.

On the event that the estimator lies inside that ball, the integrated empirical derivative differs from the target empirical derivative by at most the empirical average of the oscillation. Markov bounds the probability that this average exceeds a tolerance by its expectation divided by that tolerance.

First choose the radius small enough to make that expectation small. Consistency makes leaving the ball unlikely, and the ordinary law of large numbers makes the empirical derivative at the target converge to its expectation. Combining these three facts proves convergence of the integrated derivative to $A$.

This supplies the local step used in the theorem rather than invoking a multivariate single-intermediate-point formula that need not exist. The fundamental theorem of calculus along a segment works for the whole vector equation.

## A sandwich estimate needs its own moment control

For the derivative estimate, the same local-oscillation proof applies at the fitted root. For score covariance, add a square-integrable derivative envelope near the target, together with the already stated finite target-score second moment.

The fitted score differs pointwise from the target score by at most envelope times coefficient error. Squaring and averaging makes its empirical squared difference vanish, because the average squared envelope converges and consistency makes coefficient error vanish.

Cauchy–Schwarz then controls the difference between fitted-score and target-score outer-product averages. The latter converges to $B$ by the law of large numbers. Subtracting the empirical fitted-score mean outer product gives the same limit.

Continuous inversion of a nonsingular derivative matrix therefore proves consistency of the estimated sandwich. For a fixed contrast with positive limiting variance, the central limit theorem and Slutsky justify studentisation.

The extra squared-envelope requirement is sufficient rather than necessary. It has been stated separately because the first-order root limit only used an integrable derivative envelope; consistency of a product moment needs additional control.

## Approximate roots and numerical tolerances

Suppose the estimator leaves an empirical score residual rather than solving the equation exactly. The integrated derivative identity now includes that residual on its right side.

If square root of sample size times the residual tends to zero in probability, it contributes a negligible term to the same first-order expansion. A fixed absolute score tolerance does not automatically meet that condition as sample size grows.

Conversely, a small score residual alone does not ensure proximity to the intended root. The derivative can be nearly singular or several roots can exist. Consistency or a local identification argument is still required before converting residual size into coefficient error.

The distinction is useful for numerical reporting: a deterministic stopping criterion can be connected to inferential error through local curvature, but cannot replace a target-identification argument.

## A complete bounded-cluster experiment

Treat each independent cluster as one iid observation containing its size and within-cluster records. Suppose sizes are uniformly bounded, cluster score totals have finite covariance, and the consistent cluster-root derivative obeys the theorem’s envelope and nonsingularity conditions.

Apply the theorem to averages over clusters. The resulting covariance is the cluster derivative inverse times the covariance of cluster score totals times the transposed inverse, divided by the number of clusters. Rewriting it in unnormalised sums gives the cluster sandwich displayed earlier.

Within-cluster independence is unnecessary in that experiment; all its dependence is retained inside the score total. Independence and increasing count concern whole clusters.

If sizes grow, the bounded-cluster proof no longer applies automatically. A triangular-array theorem must track cluster variance growth and a no-dominant-cluster condition. More rows can represent more independent information or merely repeated copies of the same cluster signal, depending on the actual model.

## Worked example: a regular but inefficient cubic equation

For Gaussian observations with mean $\mu$ and positive variance $\sigma^2$, solve the average cubed residual equation. Its population equation is a mean-shift cubic plus three times mean shift times variance, so its unique zero is $\mu$.

The sample equation is continuous and decreasing, with opposite signs at sufficiently distant parameter values. Except for degenerate identical observations it has one root. For each fixed positive tolerance, the law of large numbers gives opposite signs at $\mu$ minus and plus that tolerance, proving root consistency by monotonicity.

The expected derivative is minus three times variance, while score variance is the Gaussian sixth central moment, fifteen times variance cubed. The sandwich variance coefficient is therefore five-thirds times the original variance.

The empirical mean has variance coefficient exactly the original variance. Both estimate the same target and have regular normal limits, but choosing an unbiased estimating equation did not guarantee efficiency.

## Worked example: copies inside a cluster

Suppose every cluster contains ten identical copies of one centred random value, and independent clusters supply independent values of variance one. The overall row mean equals the mean of the cluster values.

Its variance is the reciprocal of the cluster count. Treating all rows as independent would divide by ten times that count and understate variance by a factor of ten. Adding more identical copies within each fixed cluster does not add information about the population mean.

This exact calculation locates the sampling unit. A correction factor based only on a customary minimum cluster count would not express the actual dependence structure.

## Practice exercises

### Exercise 3.1
<a id="estimating-equations-and-sandwich-limits-legacy-3-1"></a>

For Poisson regression with log link, $\psi_{i}(\beta)=X_{i}(Y_{i}-e^{X_{i}^{T}\beta})$. Show that under correct specification, $B=-A$.

<details><summary>Hint 1</summary>

Condition on the design covariate.

</details>
<details><summary>Hint 2</summary>

Use equality of conditional Poisson mean and variance.

</details>
<details><summary>Solution</summary>

Under the Poisson model, $\mathbb{E}[Y_{i}\mid X_{i}]=\operatorname{Var}(Y_{i}\mid X_{i})=\mu_{i}=e^{X_{i}^{T}\beta}$. The derivative is $\dot{\psi}_{i}=-\mu_{i}X_{i}X_{i}^{T}$, so $A=-\mathbb{E}[\mu XX^{T}]$. The variance is

$$B=\operatorname{Var}[\psi]=\mathbb{E}[\operatorname{Var}(Y\mid X)XX^{T}]=\mathbb{E}[\mu XX^{T}]$$

since $\mathbb{E}[Y-\mu\mid X]=0$. Thus $B=-A$. ∎

</details>

### Exercise 3.2
<a id="estimating-equations-and-sandwich-limits-legacy-3-2"></a>

In the linear regression example with $\sigma^{2}(X)=X^{2}$ and $X\sim\text{Uniform}(0,1)$, verify by exact matrix multiplication or numerical arithmetic that the sandwich $(2,2)$ entry equals $4.8/n$.

<details><summary>Hint 1</summary>

The two expectation matrices are displayed in the worked calculation.

</details>
<details><summary>Hint 2</summary>

Multiply their exact rational entries before substituting the chosen sample size.

</details>
<details><summary>Solution</summary>

The displayed matrices give $M^{-1}BM^{-1}=\begin{pmatrix}8/15&-7/5\\-7/5&24/5\end{pmatrix}$. Thus the slope variance is $24/(5n)=4.8/n$, and at $n=10000$ it is $0.00048$. An optional numerical investigation, not executed here, is the following simulation design: With $n=10000$, generate $X_{i}\sim\text{Uniform}(0,1)$, $\varepsilon_{i}\sim\mathcal{N}(0,X_{i}^{2})$, $Y_{i}=1+2X_{i}+\varepsilon_{i}$. Fit OLS and compute the Huber-White sandwich. The empirical variance of $\hat{\beta}_{1}$ across many replications should approximate $4.8/10000=0.00048$. The standard error from the sandwich should match. ∎

</details>

### Exercise 3.3
<a id="estimating-equations-and-sandwich-limits-legacy-3-3"></a>

State conditions under which cluster-robust asymptotics are indexed by $J$, and explain why the conclusion need not hold when cluster sizes grow.

<details><summary>Hint 1</summary>

Regard cluster totals as the independent summands.

</details>
<details><summary>Hint 2</summary>

Specify the variance scale and exclude a dominant cluster in a growing-size regime.

</details>
<details><summary>Solution</summary>

Write the score as a sum of independent cluster totals $S_j$. If cluster sizes are uniformly bounded, or more generally if normalised cluster variances stabilize and a no-dominant-cluster Lindeberg condition holds, a triangular-array CLT applies to the sum over $J$ clusters; inference must therefore track $J$ and few-cluster corrections. Cluster labels alone do not force a $J^{-1/2}$ rate. If cluster sizes grow and observations within each cluster are independent, information can grow like $n=\sum_jn_j$; under strong within-cluster dependence it may grow much more slowly. The dependence and cluster-size asymptotic regime must be stated. ∎

</details>


## Further exercises on regularity and cluster limits

### Exercise 3.4
<a id="estimating-equations-and-sandwich-limits-ex-4"></a>

Why is an integrated derivative preferable to one common intermediate point for a vector equation?

<details><summary>Hint 1</summary>

Apply the fundamental theorem along the segment.

</details>
<details><summary>Hint 2</summary>

Different components need not share a mean-value point.

</details>
<details><summary>Solution</summary>

The segment integral is an exact matrix identity for the full vector function. A scalar mean-value theorem can provide different intermediate points for different components, and need not supply one common matrix evaluation. The integral avoids that invalid simplification.

</details>

### Exercise 3.5
<a id="estimating-equations-and-sandwich-limits-ex-5"></a>

Explain the local-envelope proof’s order of choices.

<details><summary>Hint 1</summary>

Choose the deterministic radius first.

</details>
<details><summary>Hint 2</summary>

Then use consistency and the sample-size limit.

</details>
<details><summary>Solution</summary>

Make expected local oscillation small by dominated convergence at a sufficiently small fixed radius. Markov controls its empirical average; consistency controls leaving the ball; the target derivative law of large numbers controls the remaining term. Taking these in that order proves local convergence.

</details>

### Exercise 3.6
<a id="estimating-equations-and-sandwich-limits-ex-6"></a>

Why can a well-defined pseudo-true root still be scientifically different from the intended parameter?

<details><summary>Hint 1</summary>

A score equation defines its own functional.

</details>
<details><summary>Hint 2</summary>

Variance estimation does not change that functional.

</details>
<details><summary>Solution</summary>

Under misspecification, the score can be centred at a projection or other pseudo-true value. The sandwich can correctly describe variation around it while the named scientific parameter differs. A target or identification argument, not a variance correction, is required.

</details>

### Exercise 3.7
<a id="estimating-equations-and-sandwich-limits-ex-7"></a>

What additional condition was used to estimate score covariance?

<details><summary>Hint 1</summary>

Outer products require second-moment continuity.

</details>
<details><summary>Hint 2</summary>

The proof bounded fitted-score squared differences.

</details>
<details><summary>Solution</summary>

A square-integrable derivative envelope, together with finite target-score second moment and consistency, made the empirical squared fitted-score difference vanish. The first-order root theorem used only an integrable derivative envelope, so this extra requirement must be stated.

</details>

### Exercise 3.8
<a id="estimating-equations-and-sandwich-limits-ex-8"></a>

When does an approximate score root retain the same first-order limit?

<details><summary>Hint 1</summary>

Track the residual in the exact segment identity.

</details>
<details><summary>Hint 2</summary>

It must vanish on the central-limit score scale.

</details>
<details><summary>Solution</summary>

If its empirical score residual is $o_p(n^{-1/2})$, multiplication by the convergent inverse derivative gives a negligible root-$n$ contribution. A fixed tolerance is not automatically small enough, and consistency is still needed to select the intended local root.

</details>

### Exercise 3.9
<a id="estimating-equations-and-sandwich-limits-ex-9"></a>

Compute the cubic equation’s asymptotic variance coefficient.

<details><summary>Hint 1</summary>

Use derivative minus three variance.

</details>
<details><summary>Hint 2</summary>

Use Gaussian sixth moment fifteen variance cubed.

</details>
<details><summary>Solution</summary>

The sandwich is $15\sigma^6/(9\sigma^4)=5\sigma^2/3$. It is larger than the empirical mean’s $\sigma^2$, demonstrating that regular unbiased estimating equations can have different efficiencies.

</details>

### Exercise 3.10
<a id="estimating-equations-and-sandwich-limits-ex-10"></a>

Why do ten identical rows per cluster not multiply information by ten?

<details><summary>Hint 1</summary>

Their average equals the underlying cluster value.

</details>
<details><summary>Hint 2</summary>

Only cluster values are independent.

</details>
<details><summary>Solution</summary>

The full row mean is exactly the mean of independent cluster values and has variance $1/J$ in the example. A variance $1/(10J)$ treats dependent copies as independent observations and is therefore wrong. The sampling law, not the displayed row count, sets information.

</details>

## Forward and backward connections

This chapter generalized the weighted estimation ideas from *Ratio and Calibration Estimators* into a unified large-sample framework. The sandwich formula derived here underlies the variance calculations in *Generalized Linear Likelihood*, where Fisher scoring provides a computationally convenient way to solve the estimating equations. In *Robust Functionals*, we examine what happens when the estimating equation itself is chosen for resistance to outliers rather than for statistical efficiency.

## Summary

A consistent regular score root has a Gaussian limit through an exact segment derivative and a local envelope argument. Sandwich estimation needs its own moment control; approximate roots need a vanishing score residual on the inference scale. Misspecification changes targets, and cluster inference must follow independent cluster totals with the declared size regime. The next likelihood chapter applies these distinctions to exponential-family fitting.
