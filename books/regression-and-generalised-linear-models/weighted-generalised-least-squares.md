
# Weighted and Generalised Least Squares

Preparation is [Gauss–Markov inference](gauss-markov-and-inference.md), positive-definite matrices and [projection geometry](geometry-of-projection.md). Covariance shape is known in the exact theorems; feasible estimation is explicitly separated.

Ordinary least squares uses Euclidean distance and gives every observation the same error-variance role. If observations have different precisions or known correlations, a covariance-weighted geometry is more appropriate under that model. This chapter derives the estimator, its optimality and exact normal-theory inference, while separating known covariance shape from a shape estimated using the same responses.

## A declared covariance model

Suppose $Y=X\beta+\varepsilon$, with fixed full-rank $X$, $E\varepsilon=0$ and $\operatorname{Cov}(\varepsilon)=\sigma^2V$, where $V$ is known symmetric positive definite and $\sigma^2>0$. Positive definiteness makes its inverse a valid inner-product matrix:
$$
\langle u,v\rangle_{V^{-1}}=u^\mathsf TV^{-1}v.
$$
The scale and shape must be identified by a convention. Multiplying $V$ by a constant and dividing the scale by the same constant leaves the covariance unchanged.

Generalised least squares minimises $(y-Xb)^\mathsf TV^{-1}(y-Xb)$. It gives less weight to high-variance directions and accounts for correlation as well as individual variances.

**Theorem 8.1 (GLS).** The unique estimate and its covariance are
$$
\hat\beta_G=(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TV^{-1}Y,
\qquad
\operatorname{Cov}(\hat\beta_G)=\sigma^2(X^\mathsf TV^{-1}X)^{-1}.
$$

**Proof.** Write $A=X^\mathsf TV^{-1}X$. For nonzero $h$, $Xh\ne0$ and $h^\mathsf TAh=(Xh)^\mathsf TV^{-1}(Xh)>0$, so $A$ is invertible. The proposed estimate solves the weighted normal equations $X^\mathsf TV^{-1}(y-X\hat\beta_G)=0$. Expanding the weighted squared norm around it leaves the nonnegative term $h^\mathsf TAh$, proving the unique minimum. Substituting the mean model gives unbiasedness, and linear covariance gives $\sigma^2A^{-1}$. ∎

## Whitening explains the geometry

Factor $V=LL^\mathsf T$ with nonsingular $L$, and transform $Y^*=L^{-1}Y$, $X^*=L^{-1}X$. The transformed errors have covariance $\sigma^2I$. Ordinary least squares in those coordinates is exactly GLS in the original coordinates.

This proof does not require normality. If errors are Gaussian, whitening also gives independent normal coordinates; without that distributional assumption it guarantees uncorrelated coordinates, not independence.

The original-coordinate fitted matrix is
$$
H_V=X(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TV^{-1}.
$$
It is idempotent but generally not symmetric in ordinary Euclidean coordinates. Instead it is self-adjoint for the weighted inner product: $H_V^\mathsf TV^{-1}=V^{-1}H_V$. The residual is weighted-orthogonal to the design, rather than necessarily Euclidean-orthogonal.

The fitted vector remains invariant under invertible coefficient recoding. Changing the covariance shape, however, changes the observation-space metric and can change fitted values even with the same column space.

## Generalised Gauss–Markov

Let $C_0=A^{-1}X^\mathsf TV^{-1}$ be the GLS coefficient matrix. Any linear unbiased estimator has form $C_0Y+DY$ with $DX=0$. Its covariance contains cross term $C_0VD^\mathsf T=A^{-1}X^\mathsf TD^\mathsf T=0$. Thus
$$
\operatorname{Cov}((C_0+D)Y)-\operatorname{Cov}(C_0Y)
=\sigma^2DVD^\mathsf T,
$$
which is positive semidefinite. GLS is therefore best linear unbiased under the stated covariance. If the supplied $V$ is wrong, that comparison no longer follows.

This is not an instruction to invent weights from a convenient visual pattern. The covariance model should reflect measurement precision, a sampling or repeated-measure mechanism, or an explicitly estimated structure. A covariance model inferred from the response has a different uncertainty calculation.

## Weighted least squares as diagonal GLS

If errors are uncorrelated with variances $\sigma^2v_i$, take $V=\operatorname{diag}(v_i)$ and precision weights $w_i=1/v_i$. The objective is $\sum_iw_i(y_i-x_i^\mathsf Tb)^2$. Whitening multiplies each row and response by $\sqrt{w_i}$.

For an intercept-only model, the estimate is $\sum_iw_iy_i/\sum_iw_i$ and its variance is $\sigma^2/\sum_iw_i$. A very imprecise observation contributes little to the mean. But incorrect weights can sacrifice efficiency and, if weights depend on the response in an uncontrolled way, can alter bias as well.

Precision weights are not automatically frequency weights. Frequency weights can represent several underlying observations with the same recorded values, which changes the interpretation of sample size and residual degrees. Analytic precision weights represent a covariance assumption for the existing rows. The same numerical column of weights cannot be interpreted both ways without stating the data-generating unit.

## Exact inference after whitening

Under Gaussian errors and $n>p$, the weighted residual sum divided by $\sigma^2$ is chi-square with $n-p$ degrees, independent of GLS coefficients. This follows from orthogonal projection in whitened coordinates. Hence
$$
s_G^2=\frac{(Y-X\hat\beta_G)^\mathsf TV^{-1}(Y-X\hat\beta_G)}{n-p}
$$
is unbiased, and replacing $\sigma$ by $s_G$ in a standardised contrast gives the exact t pivot. Nested weighted fits likewise give the exact F construction when they use the same known $V$.

If each model is allowed to choose a different response-estimated covariance, their objective differences are not simply orthogonal projections under one fixed metric. The previous chi-square subtraction proof no longer applies without additional likelihood or asymptotic arguments.

## Equicorrelation and repeated observations

For $m$ measurements with marginal variance $\tau^2$ and pairwise correlation $\rho$, covariance shape is $(1-\rho)I+\rho\mathbf1\mathbf1^\mathsf T$. Its eigenvalues are $1-\rho$ on contrasts and $1+(m-1)\rho$ on the constant direction. It is positive definite precisely for $-1/(m-1)<\rho<1$ when $m>1$.

The average has variance
$$
\tau^2\left\{\frac{1-\rho}{m}+\rho\right\}.
$$
For positive correlation, increasing the number of measurements within the same unit does not reduce the shared component $\rho\tau^2$. Recruiting independent units can add information that repeated readings of one unit do not.

An “effective sample size” obtained by equating this variance with $\tau^2/m_{\rm eff}$ is $m/[1+(m-1)\rho]$. It is tied to this mean and covariance structure, not a universal replacement sample count for all contrasts and tests.

## Serial correlation and feasible GLS

For a stationary Gaussian AR(1) error sequence with marginal variance $\tau^2$ and correlation parameter $|\rho|<1$, transform its first error by division by $\tau$, and later errors by $(\varepsilon_t-\rho\varepsilon_{t-1})/\{\tau\sqrt{1-\rho^2}\}$. The resulting variables are independent standard normals. Apply the same linear transformation to response and design to obtain a GLS calculation.

The special treatment of the first observation expresses stationarity of its initial distribution. Dropping or transforming it as if it had an observed predecessor changes the model. Unknown $\rho$ is often estimated and plugged in, yielding feasible GLS. Its coefficient distribution is generally not the exact fixed-$V$ normal calculation because the estimated transformation is random.

Consistency and asymptotic normality of feasible GLS need assumptions about the covariance estimator, design and dependence. A well-conditioned computed matrix is not evidence that those assumptions hold. Compare sensitivity to plausible covariance shapes and retain the observational unit when assessing uncertainty.

## Predicting a correlated future response

For a future error correlated with the observed errors, best linear prediction includes that correlation. If $\operatorname{Cov}(\varepsilon,\varepsilon_*)=\sigma^2c$, the residual correction is $c^\mathsf TV^{-1}(Y-X\beta)$ when the mean parameter is known. With joint Gaussian errors it is the conditional mean correction. Unknown coefficients add estimation uncertainty and alter the complete prediction variance.

Thus the independent-new-error formula from ordinary regression is a special case with $c=0$. A repeated measurement on the same unit and a response from a new independent unit have different prediction targets even if their fixed-effect row is identical.

## Known covariance does not mean known mean

Whitening changes the response space but preserves the distinction between a model and its fitted approximation. If the true mean $m$ is outside the column space of $X$, GLS minimises weighted distance from $m$ in expectation, rather than estimating a coefficient that makes the conditional mean exactly linear. Its population target under the fixed design is
$$
\beta_*=(X^\mathsf TV^{-1}X)^{-1}X^\mathsf TV^{-1}m.
$$
The residual mean is $m-X\beta_*$ and is weighted-orthogonal to $X$. Correct covariance therefore does not make a wrong mean correct. A covariance-sensitive scientific coefficient must state whether it is intended as a structural mean parameter or as this working approximation.

Changing the working metric can change that approximation target. Under a correct linear mean, any fixed positive-definite weighting still gives an unbiased coefficient estimate, although GLS with the true covariance is efficient in its class. Under a misspecified mean, different weights can target different projections. An observed coefficient change after reweighting can therefore reflect both efficiency and a changed approximation.

## A diagonal weighting comparison

Take three fixed means at predictor settings $0,1,2$, with true values $(0,0,4)$. An intercept-and-slope model cannot represent all three exactly. Under equal weights, the best line has slope two and intercept minus two-thirds. If the central observation receives a very large precision weight, the fitted line is forced close to zero at setting one. Its limiting intercept and slope are minus two and two, because minimising the two endpoint discrepancies subject to that central condition gives fitted endpoints minus two and two.

The example's slope happens to agree while its intercept changes. Other settings can change both coefficients. The substantive point is that these lines approximate a curved mean under different observation-space priorities; neither is made the true conditional mean by a positive-definite covariance matrix.

## Predictive covariance from joint blocks

For a known mean parameter, write the joint error covariance as
$$
\sigma^2\begin{pmatrix}V&c\\c^\mathsf T&v_*\end{pmatrix}.
$$
The best linear predictor of the future error is $c^\mathsf TV^{-1}\varepsilon$. Its error variance is $\sigma^2(v_*-c^\mathsf TV^{-1}c)$. This follows by subtracting the proposed predictor and expanding covariance, or by the same orthogonality argument used for best linear prediction. Positive semidefiniteness of the joint covariance guarantees that this Schur-complement variance is nonnegative.

Under joint normality the best linear predictor is the full conditional mean, with that conditional variance. Without normality it remains a linear-optimal statement and does not determine an exact predictive distribution. Unknown fixed effects and unknown covariance components add uncertainty beyond this known-mean block calculation.

**Worked example: one correlated future reading.** Let an observed error and future error both have variance one and correlation one-half. Given the observed error and a known mean, the Gaussian conditional correction is half the observed error, and future conditional variance is $1-1/4=3/4$. Treating the future reading as independent would omit the correction and use variance one. The difference is justified by the shared covariance, not by whether the two readings have similar predictor values.

## How weights should enter a report

Record the covariance shape and its units, whether it was known from calibration or estimated, and the meaning of each observational row. If weights are inverse reported variances, explain whether those reported variances themselves are uncertain. If a correlation parameter is estimated, distinguish the plug-in fit from an exact known-parameter calculation.

Numerical positive definiteness is a necessary condition for the inverse metric used here. It does not establish that the chosen covariance describes the physical or sampling dependence. Sensitivity to plausible alternatives is often more informative than presenting one highly precise inverse matrix without its source.


## Multiplying all precision weights by one constant

If every precision weight is multiplied by the same positive constant, the weighted least-squares coefficient root is unchanged: both sides of its normal equation are multiplied by that constant. The residual weighted sum and its numerical scale estimate change, while the correctly combined coefficient covariance remains invariant when the scale convention is transformed consistently.

This is why a report must distinguish relative precision from an absolute covariance in physical units. Arbitrary normalisation of weights can be harmless for fitting coefficients but confusing for a displayed residual scale. Treating normalised relative weights as known absolute inverse variances would attach an unsupported amount of information to the same observations.

A meaningful covariance statement records which scale is estimated and which parts are externally known. The algebraic invariance of a coefficient estimate does not make every accompanying uncertainty convention invariant automatically.

## Worked example 8.1: two different measurement precisions

Two independent observations estimate one common mean with variances one and four. Precision weights are one and one-quarter, giving estimate $(y_1+y_2/4)/(5/4)=(4y_1+y_2)/5$ and variance $4/5$. The ordinary average has variance $5/4$. The gain follows from the correct known relative variances; assigning weights in the opposite order would not preserve that conclusion.

## Worked example 8.2: correlation limits repeated-reading precision

With ten measurements, marginal variance one and correlation one-half, the mean variance is $(1/2)/10+1/2=0.55$. Treating them as independent would report variance $0.1$. The mean-specific effective count is $10/(1+9/2)=20/11$, much smaller than ten. The shared component dominates despite the large number of rows.

## Worked example 8.3: an unequal-covariance comparison

Suppose two nested mean models use one fixed known covariance shape. Whitening gives nested Euclidean spaces, so their residual reduction can support the exact F law under normality. If the smaller fit assumes independent errors while the larger fit estimates an AR(1) correlation, the two objectives live in different random metrics. Their numerical difference is not the same projector difference, and the simple F reference is unjustified.

## Multiplying every weight by one constant

Multiplying a positive-definite weight matrix by the same positive scalar does not change the GLS coefficient estimate: the scalar cancels between the inverse normal matrix and the weighted score. It also leaves all fitted values and residuals unchanged.

Uncertainty formulas must respect the same convention. If covariance is represented as an unknown scale times the inverse weight matrix, multiplying weights by a constant requires multiplying that scale by the same constant to describe the same physical covariance. A weighted residual estimate of the scale changes accordingly, and its product with the inverse weighted normal matrix stays invariant.

This explains why two software outputs can use differently normalised weights yet agree on estimates and valid standard errors. Rescaling coefficients’ precision without rescaling the accompanying variance convention, however, changes the assumed model rather than merely its notation.

## Exercises

### Exercise 8.1
<a id="weighted-generalised-least-squares-ex-1"></a>

Derive the weighted intercept estimate.

<details>
<summary>Hint 1</summary>

Use the single weighted normal equation.

</details>
<details>
<summary>Hint 2</summary>

Its denominator is the sum of precision weights.

</details>
<details>
<summary>Solution</summary>

Differentiating or expanding the weighted objective gives $\sum_iw_i(y_i-b)=0$. Hence $\hat b=\sum_iw_iy_i/\sum_iw_i$. With independent variances $\sigma^2/w_i$, its variance is $\sigma^2/\sum_iw_i$, by direct covariance of the weighted sum.

</details>

### Exercise 8.2
<a id="weighted-generalised-least-squares-ex-2"></a>

Why is the GLS normal matrix positive definite?

<details>
<summary>Hint 1</summary>

Apply the covariance metric to Xv.

</details>
<details>
<summary>Hint 2</summary>

Full rank excludes a zero image.

</details>
<details>
<summary>Solution</summary>

For nonzero $v$, $Xv$ is nonzero. Since $V^{-1}$ is positive definite, $(Xv)^\mathsf TV^{-1}(Xv)>0$. This is the quadratic form of $X^\mathsf TV^{-1}X$, proving invertibility and uniqueness of the weighted coefficient fit.

</details>

### Exercise 8.3
<a id="weighted-generalised-least-squares-ex-3"></a>

Does whitening always give independent errors?

<details>
<summary>Hint 1</summary>

Covariance and full distribution differ.

</details>
<details>
<summary>Hint 2</summary>

Zero covariance implies independence for Gaussian vectors.

</details>
<details>
<summary>Solution</summary>

Whitening gives spherical covariance. Independent coordinates follow under a joint Gaussian law, but not from second moments alone. Moment-based GLS and its Gauss–Markov comparison therefore need less than the exact Gaussian t and F constructions.

</details>

### Exercise 8.4
<a id="weighted-generalised-least-squares-ex-4"></a>

Show the GLS fitted matrix is idempotent.

<details>
<summary>Hint 1</summary>

Multiply its two middle design factors.

</details>
<details>
<summary>Hint 2</summary>

The normal matrix cancels its inverse.

</details>
<details>
<summary>Solution</summary>

Writing $A=X^\mathsf TV^{-1}X$, the product is $XA^{-1}AA^{-1}X^\mathsf TV^{-1}=H_V$. It need not equal its ordinary transpose; weighted self-adjointness replaces Euclidean symmetry.

</details>

### Exercise 8.5
<a id="weighted-generalised-least-squares-ex-5"></a>

Prove the GLS covariance improvement over another linear unbiased estimator.

<details>
<summary>Hint 1</summary>

Subtract the GLS coefficient matrix.

</details>
<details>
<summary>Hint 2</summary>

The cross terms vanish because D X=0.

</details>
<details>
<summary>Solution</summary>

The difference matrix $D$ satisfies $DX=0$. Covariance expansion leaves $\sigma^2DVD^\mathsf T$ because $C_0VD^\mathsf T=A^{-1}(DX)^\mathsf T=0$. Its contrast quadratic forms are nonnegative, proving the stated class comparison.

</details>

### Exercise 8.6
<a id="weighted-generalised-least-squares-ex-6"></a>

For four equicorrelated measurements find the allowed correlation range.

<details>
<summary>Hint 1</summary>

Use the two covariance eigenvalues.

</details>
<details>
<summary>Hint 2</summary>

Both must be strictly positive.

</details>
<details>
<summary>Solution</summary>

The contrast eigenvalue is $1-\rho$ and the mean-direction eigenvalue is $1+3\rho$. Positive definiteness therefore requires $-1/3<\rho<1$. At an endpoint the covariance is singular and the inverse-metric GLS theorem does not apply unchanged.

</details>

### Exercise 8.7
<a id="weighted-generalised-least-squares-ex-7"></a>

Why does positive shared correlation prevent unlimited precision from within-unit replication?

<details>
<summary>Hint 1</summary>

Compute the variance of the average.

</details>
<details>
<summary>Hint 2</summary>

A constant term remains as m grows.

</details>
<details>
<summary>Solution</summary>

The mean variance tends to $\rho\tau^2$ as $m$ increases when $\rho>0$. Independent measurement noise averages down, but the common component does not. Adding independent units can reduce a different component of uncertainty, so row count alone is an inadequate information summary.

</details>

### Exercise 8.8
<a id="weighted-generalised-least-squares-ex-8"></a>

What residual degrees apply to known-shape Gaussian GLS?

<details>
<summary>Hint 1</summary>

Use the whitened full-rank design.

</details>
<details>
<summary>Hint 2</summary>

Its rank is unchanged by an invertible transform.

</details>
<details>
<summary>Solution</summary>

The residual dimension is $n-p$. Whitening preserves design rank, and its residual projector gives a chi-square with that rank under the normal model. A covariance shape estimated from the same responses is not covered by this exact fixed-transform proof.

</details>

### Exercise 8.9
<a id="weighted-generalised-least-squares-ex-9"></a>

Why must the first AR(1) observation be treated separately?

<details>
<summary>Hint 1</summary>

It has the stationary marginal law.

</details>
<details>
<summary>Hint 2</summary>

There is no observed previous innovation equation.

</details>
<details>
<summary>Solution</summary>

The stationary first error has variance $\tau^2$, while subsequent innovations have variance $\tau^2(1-\rho^2)$. Applying the later differencing rule without an observed predecessor either discards or invents initial information. The initial distribution is part of the likelihood and whitening transformation.

</details>

### Exercise 8.10
<a id="weighted-generalised-least-squares-ex-10"></a>

Contrast prediction for a new unit with prediction for another reading on an existing unit.

<details>
<summary>Hint 1</summary>

Future errors may correlate with existing ones.

</details>
<details>
<summary>Hint 2</summary>

The vector c records that covariance.

</details>
<details>
<summary>Solution</summary>

For a new independent unit, $c=0$ and no residual correlation correction enters. A further reading on an existing unit can have $c\ne0$, so observed residuals inform its conditional prediction. Equal fixed-effect rows do not make these predictive distributions identical.

</details>

## Summary

GLS fits in a declared covariance metric and inherits moment optimality and exact Gaussian inference after whitening. Precision and frequency weights have different meanings. Correlation limits repeated-reading information, and response-estimated covariance needs additional theory. Prediction must retain future-error correlation and its observational target.
