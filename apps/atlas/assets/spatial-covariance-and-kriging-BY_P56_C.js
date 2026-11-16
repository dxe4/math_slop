var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: spatial-covariance-and-kriging
title: "Spatial Covariance and Kriging"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Spatial Covariance and Kriging

This chapter develops spatial prediction through covariance models and best linear unbiased prediction. The theory connects to the dependent central limits of time series but with geometric structure in two or three dimensions.

## Valid covariance functions

A real function $C(s,t)$ is a *valid covariance function* if it is symmetric, $C(s,t)=C(t,s)$, and for every finite set of sites $s_{1},\\dots,s_{n}\\in\\mathbb{R}^{d}$ and coefficients $a_{1},\\dots,a_{n}$,

$$\\sum_{i=1}^{n}\\sum_{j=1}^{n}a_{i}a_{j}C(s_{i},s_{j})\\ge 0.$$

This is *positive semidefiniteness*. It is necessary and sufficient for a centred Gaussian field with these finite-dimensional covariances; sufficiency uses the consistent Gaussian family and the probability extension theorem, imported here.

### Stationarity and isotropy

- **Second-order stationarity:** $C(s,t)=C_{0}(t-s)$ for a function $C_{0}$ of the lag vector.
- **Isotropy:** $C_{0}(h)$ depends only on $\\|h\\|$, the Euclidean distance.

Common isotropic models include:

- **Exponential:** $C(h)=\\sigma^{2}\\exp(-\\|h\\|/\\rho)$
- **Mat\\'{e}rn:** $C(h)=\\sigma^{2}\\frac{2^{1-\\nu}}{\\Gamma(\\nu)}(\\frac{\\|h\\|}{\\rho})^{\\nu}K_{\\nu}(\\frac{\\|h\\|}{\\rho})$
- **Spherical, in dimensions one through three:** $C(h)=\\sigma^{2}(1-\\frac{3\\|h\\|}{2\\rho}+\\frac{\\|h\\|^{3}}{2\\rho^{3}})\\mathbf{1}_{\\{\\|h\\|\\le\\rho\\}}$

The Mat\\'{e}rn parameters require $\\rho>0$, $\\nu>0$ and $\\sigma^2\\ge0$, with the value at zero defined by continuity. The spherical formula is not a valid isotropic covariance in every spatial dimension; its dimension restriction is part of the model.

## Best linear unbiased prediction

For a zero-mean Gaussian random field $Z(s)$ with known covariance, observed at sites $s_{1},\\dots,s_{n}$, assume the covariance matrix $K$ is positive definite (hence invertible). The best linear predictor of $Z(s_{0})$ is

$$\\hat{Z}(s_{0})=k_{0}^{T}K^{-1}Z,$$

where $K_{ij}=C(s_{i},s_{j})$ and $(k_{0})_{i}=C(s_{i},s_{0})$.

### Theorem 10.1 — Kriging variance

The prediction error variance is

$$\\sigma^{2}_{k}(s_{0})=C(s_{0},s_{0})-k_{0}^{T}K^{-1}k_{0}.$$

**Proof.** Consider any linear predictor $a^{T}Z$. Its mean squared error is

$$\\mathbb{E}[(Z(s_{0})-a^{T}Z)^{2}]=C(s_{0},s_{0})-2a^{T}k_{0}+a^{T}Ka.$$

Differentiating with respect to $a$ gives $-2k_{0}+2Ka=0$, so $a=K^{-1}k_{0}$. Substituting back gives the result. Positive definiteness of $K$ ensures the minimizer is unique. ∎

### Ordinary and universal kriging

- **Simple kriging:** Known mean, as above.
- **Ordinary kriging:** Unknown constant mean, with constraint $\\sum_{i}a_{i}=1$.
- **Universal kriging:** Unknown mean of form $\\sum_{j}\\beta_{j}f_{j}(s)$, with constraints that the predictor is unbiased for all $\\beta$.

Ordinary kriging adds a Lagrange multiplier to enforce the constraint. Its kriging variance is at least the simple-kriging variance because it optimizes over a restricted class of weights. Equality is possible when the simple-kriging weights already sum to one—for example, at an exactly observed, error-free site.

## Variograms

The *variogram* is $\\gamma(s,t)=\\frac{1}{2}\\operatorname{Var}[Z(s)-Z(t)]$. For stationary processes, $\\gamma(h)=C(0)-C(h)$. Variograms must be *conditionally negative definite*:

$$\\sum_{i}\\sum_{j}a_{i}a_{j}\\gamma(s_{i},s_{j})\\le 0\\quad\\text{for all }a\\text{ with }\\sum_{i}a_{i}=0.$$

Empirical variogram bins are dependent noisy summaries, not independent observations. Fitting by least squares ignores this dependence. Prefer likelihood, restricted likelihood, or principled minimum contrast with diagnostics.

## Worked example: simple kriging

A zero-mean field has $C(h)=4\\exp(-|h|/2)$. Observations at $s_{1}=0$ and $s_{2}=3$ have values $Z_{1}=1$ and $Z_{2}=-0.5$. Predict at $s_{0}=1$.

**Step 1: Covariance matrix.**

$$K=\\begin{pmatrix}C(0)&C(3)\\\\C(3)&C(0)\\end{pmatrix}=\\begin{pmatrix}4&4e^{-1.5}\\\\4e^{-1.5}&4\\end{pmatrix}\\approx\\begin{pmatrix}4&0.893\\\\0.893&4\\end{pmatrix}.$$

**Step 2: Cross-covariance.**

$$k_{0}=\\begin{pmatrix}C(1)\\\\C(2)\\end{pmatrix}=\\begin{pmatrix}4e^{-0.5}\\\\4e^{-1}\\end{pmatrix}\\approx\\begin{pmatrix}2.426\\\\1.471\\end{pmatrix}.$$

**Step 3: Weights.**

$$K^{-1}=\\frac{1}{16-0.893^{2}}\\begin{pmatrix}4&-0.893\\\\-0.893&4\\end{pmatrix}\\approx\\frac{1}{15.20}\\begin{pmatrix}4&-0.893\\\\-0.893&4\\end{pmatrix}.$$

$$a=K^{-1}k_{0}\\approx\\frac{1}{15.20}\\begin{pmatrix}4\\cdot 2.426-0.893\\cdot 1.471\\\\-0.893\\cdot 2.426+4\\cdot 1.471\\end{pmatrix}\\approx\\frac{1}{15.20}\\begin{pmatrix}8.39\\\\3.72\\end{pmatrix}\\approx\\begin{pmatrix}0.552\\\\0.245\\end{pmatrix}.$$

**Step 4: Prediction and variance.**

$$\\hat{Z}(1)=0.552\\cdot 1+0.245\\cdot(-0.5)\\approx 0.552-0.122=0.430.$$

$$\\sigma^{2}_{k}=4-(2.426\\cdot 0.552+1.471\\cdot 0.245)\\approx 4-(1.339+0.360)=4-1.699=2.301.$$

## Common errors and misconceptions

- **Using empirical variogram least squares without accounting for dependence.** The variogram bins are correlated, and weighted least squares with the wrong weights gives biased standard errors.

- **Assuming estimated covariance is known.** Plug-in kriging variance can understate predictive uncertainty because it treats covariance parameters as fixed, but there is no general variance ordering. For fixed data $y$ and a specified posterior over covariance parameters $\\theta$, with finite predictive second moment, $\\operatorname{Var}(Z_*\\mid y)=\\mathbb{E}_\\theta[\\operatorname{Var}(Z_*\\mid\\theta,y)\\mid y]+\\operatorname{Var}_\\theta(\\mathbb{E}[Z_*\\mid\\theta,y]\\mid y)$. A plug-in conditional variance evaluates the conditional variance at one parameter value instead of averaging it and omits the conditional-mean variation; either variance can be larger. Bayesian kriging integrates the predictive laws under its specified model, while adjusted plug-in methods need a justified approximation.

- **Confusing interpolation with extrapolation.** With known mean and a covariance whose cross-covariances vanish at large separation, simple kriging reverts to that mean and its conditional variance approaches the marginal variance. A nondecaying covariance component, an unknown trend or a different target changes this conclusion.

- **Choosing covariance models by visual fit.** The empirical variogram is noisy. Likelihood comparisons require a declared mean/covariance family, and prediction assessment must respect spatial dependence and the intended prediction distance.

## Covariance constructions with explicit dimension scope

A kernel can be plausible as a decreasing curve and still fail the finite-matrix condition. Here are constructive proofs that establish validity without checking a few selected point configurations. For positive t, the Gaussian kernel has the expansion

$$e^{-t\\|s-r\\|^2}
=e^{-t\\|s\\|^2}e^{-t\\|r\\|^2}
\\sum_{k=0}^{\\infty}\\frac{(2t)^k}{k!}(s^\\top r)^k.$$

Each inner-product power is the Gram kernel of the kth tensor power of its input vector, hence positive semidefinite. Multiplying both sides of a Gram matrix by the same positive diagonal matrix preserves this property. Partial sums therefore give nonnegative quadratic forms and their pointwise limit does too. This proves validity in every finite dimension.

To obtain the exponential kernel, use the positive mixture

$$e^{-a\\sqrt r}=\\frac{a}{2\\sqrt\\pi}
\\int_0^\\infty t^{-3/2}e^{-a^2/(4t)}e^{-tr}\\,dt,\\qquad a>0,\\ r\\ge0.$$

For completeness, substitute t equal to a squared divided by four u squared. The remaining integral is twice the Gaussian half-line integral of the exponential of minus u squared minus b squared over u squared, divided by the square root of pi, with b equal to a times square root of r divided by two. Call the unnormalized integral F of b. Differentiation for positive b and substitution v equal to b over u show that its derivative is minus twice itself. Dominated convergence gives its value at zero as square root of pi divided by two. Solving this scalar differential equation proves the identity, including the zero endpoint by continuity. Set r equal to squared distance and integrate the nonnegative Gaussian quadratic forms to establish the exponential covariance in arbitrary dimension.

The spherical model has a different construction. In three dimensions, take the inner product of indicator functions of equal balls translated to the two sites. The resulting kernel is the overlap volume, which is positive semidefinite because every quadratic form is the integral of a square. Balls of radius R separated by distance h at most twice R intersect in two spherical caps of height R minus h divided by two. The cap volume, obtained by integrating circular cross-sections, is pi times height squared times R minus one third of the height. Dividing twice this volume by the ball volume gives precisely the spherical covariance formula with range twice R. Restriction to a line or plane preserves positive semidefiniteness. This proves dimensions one, two and three and does not assert higher-dimensional validity.

## Universal kriging as a constrained projection

Let the observed mean be F beta, where the columns of F are known trend functions evaluated at the sites and beta is unknown. At the prediction site let the trend vector be f zero. Assume the observation covariance K is positive definite and F has full column rank. A linear predictor with weights a is unbiased for every beta exactly when F transpose a equals f zero. Write the unrestricted simple-kriging weights as a zero equal to inverse K times k. Completing the square in its prediction MSE gives the simple variance plus the K-norm squared of a minus a zero.

Put H equal to F transpose inverse K F; it is positive definite because F has full rank. The unique minimizing constrained weights and their error variance are

$$a=K^{-1}k+K^{-1}FH^{-1}(f_0-F^\\top K^{-1}k),$$
$$V_{\\rm universal}=C_{00}-k^\\top K^{-1}k+
(f_0-F^\\top K^{-1}k)^\\top H^{-1}(f_0-F^\\top K^{-1}k).$$

To verify optimality without trusting a multiplier sign convention, call the displayed correction d. It satisfies the missing constraint. Every other feasible correction is d plus a vector h with F transpose h zero. The K-inner product of d and h is zero because K d lies in the column space of F. Their squared norms therefore add, so the displayed correction uniquely minimizes MSE. This proof needs second moments and known covariance, but no Gaussian distribution.

For jointly Gaussian observations and target with known mean, the simple predictor is also the full conditional mean: its residual has zero covariance with every observation, hence is independent of their vector, and is centred Gaussian. Its conditional variance is the simple kriging variance. Without Gaussianity, zero covariance proves only linear optimality. The conditional mean can be nonlinear and the conditional variance can depend on the observed values. Universal kriging with unknown deterministic beta is a best linear unbiased predictor, not automatically a Bayesian conditional mean; the uncertainty interpretation requires that distinction.

### Worked example: the cost of an unknown constant mean

With one observation having variance four and cross-covariance three with a target of variance four, simple kriging uses weight three quarters and has error variance seven quarters. Ordinary kriging must use weight one, because that is the only scalar weight unbiased for every constant mean. Its error variance is four plus four minus six, equal to two. The constraint adds one quarter. It would be incorrect to attach the simple variance to the ordinary prediction: the point prediction and its uncertainty come from the same constrained optimisation problem.

## Degenerate covariances and measurement targets

Positive semidefinite need not mean invertible. Suppose the joint observation-target covariance is positive semidefinite and v is in the null space of K. The quadratic form with observation coefficient t v and target coefficient minus one is nonnegative for every real t. Its linear term forces v transpose k to be zero. Thus k belongs to the range of K. The Moore–Penrose inverse yields a solution a equal to K dagger k and MSE equal to target variance minus k transpose K dagger k. All solutions differ by a null-space vector. Their predictions agree almost surely for centred observations, since the variance of the extra linear combination is zero. This is the precise compatibility argument; simply replacing every failed inverse by a pseudoinverse without checking the joint model is not justified.

Add independent measurement errors with known positive variance tau squared to observations of a latent field. The observation covariance becomes K plus tau squared I, which is strictly positive definite even if K is singular. For prediction of the latent value, the cross-covariance remains k and the target variance remains the latent variance. For prediction of a future independently noisy measurement, add tau squared to the target variance too. Using the same label for these two prediction targets hides a real, irreducible difference.

### Worked example: replicated noisy readings of one latent value

Let a latent value have mean zero and variance v, and observe two independent-error readings with error variance t, where both v and t are positive. Their covariance matrix has diagonal v plus t and off-diagonal v; the target cross-covariance vector has both entries v. Symmetry gives each simple weight v divided by twice v plus t. The latent prediction is that common weight times the sum of the readings, with error variance v t divided by twice v plus t. A future noisy reading has error variance larger by t. As measurement noise tends to zero, the two observation coordinates become duplicates, but the latent predictor remains well-defined in the limit. At exactly zero noise, the singular compatibility argument supplies the same result.

## Variogram geometry and what dense observations cannot identify

For any zero-sum coefficient vector, the quadratic form in a stationary variogram is minus the covariance quadratic form: the constant variance term cancels. It is therefore nonpositive. Conversely, pairwise nonnegative variogram values alone are insufficient. For example, a zero-diagonal three-site proposed variogram with entries one, one and nine violates conditional negative definiteness using coefficients minus two, one and one: the quadratic form is positive. A visually increasing distance curve cannot replace this matrix condition. Constructing a general intrinsic field from an abstract conditionally negative definite kernel uses an additional representation theorem, which is not proved here.

Dense observations in one bounded region can reveal a realized shared component without producing independent replicates of that component. An exact example is a field constant over all space, with random value U normal with unknown variance. Every error-free observation, however many or however dense, equals U. For two distinct positive variances, the two one-observation normal laws have total variation distance strictly below one because their everywhere-positive densities overlap. If estimates were consistent for both variances as the number of duplicated sites increased, thresholding between the two parameter values would yield tests with both errors tending to zero. That contradicts the positive minimum sum of testing errors, equal to one minus this fixed total variation distance. The variance is identifiable from its distribution but not consistently estimable from duplicated observations of one realization. This explicit example establishes the distinction without importing a model-specific microergodicity theorem for another covariance family.

## Practice exercises

<a id="spatial-covariance-and-kriging-legacy-10-1"></a>

**Exercise 10.1.** Show that the exponential covariance $C(h)=\\sigma^{2}\\exp(-\\|h\\|/\\rho)$ is positive semidefinite in $\\mathbb{R}^{d}$ for any $d$.

<details><summary>Hint 1</summary>

A positive mixture of valid covariance kernels is valid.

</details>

<details><summary>Hint 2</summary>

Use the displayed Gaussian scale mixture and prove its weights are nonnegative.

</details>

<details><summary>Full solution</summary>

The Gaussian scale-mixture identity proved below represents the exponential as a positive mixture of Gaussian covariances in every finite dimension. Each Gaussian kernel is positive semidefinite by its feature expansion. Integrating their finite nonnegative quadratic forms against a positive mixing measure preserves nonnegativity. Scaling by a nonnegative variance preserves it as well. ∎

</details>

<a id="spatial-covariance-and-kriging-legacy-10-2"></a>

**Exercise 10.2.** For a single observation at $s_{1}$ with $C(0)=4$ and $C(s_{1},s_{0})=3$, find the simple kriging predictor and its variance.

<details><summary>Hint 1</summary>

Minimize a scalar quadratic in the prediction weight.

</details>

<details><summary>Hint 2</summary>

The weight is cross-covariance divided by observation variance.

</details>

<details><summary>Full solution</summary>

$K=[4]$, $k_{0}=[3]$. The weight is $a=3/4$. The predictor is $\\hat{Z}(s_{0})=0.75Z(s_{1})$. The variance is $4-3^{2}/4=4-2.25=1.75$. This assumes the covariance is known and ignores measurement error. ∎

</details>

<a id="spatial-covariance-and-kriging-legacy-10-3"></a>

**Exercise 10.3.** Explain why ordinary kriging has prediction variance at least as large as simple kriging for the same covariance model, and state when equality can occur.

<details><summary>Hint 1</summary>

Compare the two feasible sets.

</details>

<details><summary>Hint 2</summary>

Strictness depends on whether the unrestricted optimizer satisfies the constraint.

</details>

<details><summary>Full solution</summary>

The constraint $\\sum a_i=1$ restricts the class of linear predictors, so its minimum MSE cannot be smaller than the unrestricted simple-kriging minimum. It is strictly larger only when the simple-kriging optimizer violates the constraint. If the simple weights already sum to one, the same optimizer is feasible for both problems and the variances are equal. ∎

</details>

<a id="spatial-covariance-and-kriging-ex-4"></a>

**Exercise 4.** Derive the universal-kriging variance penalty and show it is nonnegative.

<details><summary>Hint 1</summary>

Complete the MSE square around the simple weights.

</details>

<details><summary>Hint 2</summary>

Use the K-orthogonality of feasible residual directions.

</details>

<details><summary>Full solution</summary>

The constrained correction is $d=K^{-1}FH^{-1}(f_0-F^\\top K^{-1}k)$. Its K-norm squared is exactly the displayed quadratic penalty because $F^\\top K^{-1}F=H$. H is positive definite, so the penalty is nonnegative and is zero precisely when the simple weights already meet all trend constraints.

</details>

<a id="spatial-covariance-and-kriging-ex-5"></a>

**Exercise 5.** For a singular observation covariance, prove that a valid joint covariance forces k into its range.

<details><summary>Hint 1</summary>

Test a null-space direction in the joint quadratic form.

</details>

<details><summary>Hint 2</summary>

A nonzero linear term cannot stay nonnegative for every real scale.

</details>

<details><summary>Full solution</summary>

For $Kv=0$, use the coefficient vector $(tv,-1)$. The quadratic form is $C_{00}-2t v^\\top k$, so $v^\\top k=0$. Thus k is orthogonal to the null space and belongs to the range of the symmetric matrix K. A generalized inverse then solves the normal equations; arbitrary incompatible cross-covariances cannot arise from a valid joint model.

</details>

<a id="spatial-covariance-and-kriging-ex-6"></a>

**Exercise 6.** For two noisy readings in the worked example, find the prediction variance of their average relative to the optimal predictor.

<details><summary>Hint 1</summary>

The average is unbiased for a fixed latent value but the known-mean random target permits shrinkage.

</details>

<details><summary>Hint 2</summary>

Its error is just the mean of the two errors.

</details>

<details><summary>Full solution</summary>

The simple average has MSE t divided by two. The optimal known-mean predictor has MSE $vt/(2v+t)$, which is smaller for positive v and t. The average uses weights one half; the optimal weights are $v/(2v+t)$. If the common mean were unknown and arbitrary, the unbiasedness constraint would require the average, showing that a different mean assumption changes the optimality class.

</details>

<a id="spatial-covariance-and-kriging-ex-7"></a>

**Exercise 7.** Prove the variogram sign condition directly from a field with constant mean.

<details><summary>Hint 1</summary>

Expand squared differences.

</details>

<details><summary>Hint 2</summary>

The zero-sum constraint removes the marginal second-moment terms.

</details>

<details><summary>Full solution</summary>

For zero-sum a, $\\sum_{ij}a_ia_j\\frac12E[(Z_i-Z_j)^2]=-E[(\\sum_i a_iZ_i)^2]\\le0$. A common mean ensures the weighted sum is centred, but the identity itself already cancels the mean contribution. Nonnegative individual variogram values do not imply this collective inequality.

</details>

<a id="spatial-covariance-and-kriging-ex-8"></a>

**Exercise 8.** Can an independent nugget repair any invalid covariance function on arbitrarily large finite sets?

<details><summary>Hint 1</summary>

A finite matrix can sometimes be shifted, but a kernel claim concerns all sets.

</details>

<details><summary>Hint 2</summary>

Replicate a negative quadratic configuration with distinct labels sharing each latent site.

</details>

<details><summary>Full solution</summary>

No universal repair follows. Take an invalid finite base matrix with a negative quadratic form and make many replicated latent-site observations with independent nugget errors. Put equal divided coefficients on each replicate. The latent quadratic form remains the same negative number while the nugget contribution tends to zero with replication. Eventually the joint matrix is indefinite. A nugget validly repairs singularity of an already positive-semidefinite latent kernel; it does not certify an invalid one.

</details>

<a id="spatial-covariance-and-kriging-ex-9"></a>

**Exercise 9.** Explain why the constant-field variance example does not prove nonidentifiability of its variance parameter.

<details><summary>Hint 1</summary>

Different variances give different one-point distributions.

</details>

<details><summary>Hint 2</summary>

Consistency needs growing information, not just distinct laws.

</details>

<details><summary>Full solution</summary>

Two positive variances define distinct normal distributions, so the parameter is identifiable at the model level. But all added observations are exact duplicates of the same normal draw. Their likelihood ratio and testing information never improve. This prevents consistent discrimination of the two variances as the site count grows, without claiming that the two probability laws are identical.

</details>

<a id="spatial-covariance-and-kriging-ex-10"></a>

**Exercise 10.** For a known-mean jointly Gaussian model, derive a fixed-parameter prediction interval and state the limitation of plugging in fitted covariance parameters.

<details><summary>Hint 1</summary>

The orthogonal residual is independent of observations.

</details>

<details><summary>Hint 2</summary>

Use its normal law with the computed conditional variance.

</details>

<details><summary>Full solution</summary>

The conditional distribution is normal with simple-kriging mean and variance $C_{00}-k^\\top K^{-1}k$. For positive variance its mean plus or minus the normal quantile times its standard deviation gives exact conditional coverage under those fixed known parameters. Estimating the covariance changes the procedure and generally removes this exact argument. Integrating a specified parameter posterior or proving an adjusted frequentist approximation requires additional analysis; the fixed-parameter formula alone supplies neither.

</details>

## Forward and backward connections

This chapter applied dependent-process theory to spatial data, complementing the time-series treatment in *Dependent Central Limits*. In *Multiplicity and Post-Selection Scope*, we examine how spatial prediction fits into broader questions of multiple comparisons and model selection. In *Model Checking and the Double Use of Data*, we discuss how to validate spatial models using held-out data rather than training-data variograms.
`;export{e as default};