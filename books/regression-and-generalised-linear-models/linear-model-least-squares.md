
# The Linear Model and Least Squares

## Level and prerequisites

This is the opening L3 regression chapter. It brings together the existing Principles linear-model development as a first complete reference calculation, then the following chapters separate its geometry, inference and model extensions in greater depth. Preparation is [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](#/books/lucent-linear-algebra). The L3 core uses finite-dimensional linear algebra, conditional moments and the proved Gaussian projection results linked below. The scoped sandwich-consistency argument names stronger moment and design limits locally. General high-dimensional, dependent-error and post-selection regression theory are optional advanced needs, not consequences of the finite projection identities.


Linear regression is simultaneously a geometric projection, a conditional-mean model, an estimating procedure, and—under extra design assumptions—a possible route to causal contrasts. These meanings share algebra but not interpretation. A coefficient can be computed whenever a least-squares problem is defined; unbiasedness, standard errors, prediction, and causal claims each require additional hypotheses.

This chapter derives ordinary least squares, proves its conditional mean and covariance, proves the Gauss–Markov comparison, develops exact normal-theory t and F procedures, and then treats leverage, heteroskedastic sandwich uncertainty, prediction, misspecification, and omitted-variable bias. The design matrix is part of the experiment, not decorative input.

## 1. The fixed-design linear model

Let $Y\in \mathbb R^n$ be a response vector and $X\in R^{n×p}$ a known design matrix with full column rank $p\le n$. The classical model is

$Y=X\beta +\varepsilon $,

with

$E[\varepsilon |X]=0$, $Cov(\varepsilon |X)=\sigma ^2I_n$.

The vector $\beta \in \mathbb R^p$ indexes the conditional mean. Columns of $X$ can encode an intercept, quantitative covariates, group indicators, interactions, or chosen basis functions. Full rank means no column is an exact linear combination of the others; it is an identification condition for the coefficient parameterisation.

Treating $X$ as fixed can mean it was controlled by design or that inference is conditional on its realised value. With random covariates, a conditional model can still be used, but generalisation to a new covariate population needs a law for that population.

## 2. Least squares is an orthogonal projection

Ordinary least squares minimises

$Q(b)=\lVert Y-Xb\rVert^2$.

Differentiation gives the normal equations

$X^{\mathsf T} X b=X^{\mathsf T} Y$.

Full column rank makes $X^TX$ positive definite, so the unique solution is

$\hat{\beta}=(X^TX)^{-1}X^TY$.

The fitted vector and residual are

$\hat Y=HY$, $e=(I-H)Y$,

where

$H=X(X^TX)^{-1}X^{\mathsf T}$.

The matrix $H$ is symmetric and idempotent, hence the orthogonal projector onto the column space of $X$. The normal equations say $X^Te=0$: residuals are orthogonal to every fitted design direction.

If $X$ is rank-deficient, fitted values can remain uniquely projected while coefficients are nonunique. A pseudoinverse or constraint selects one coefficient vector; that selection is not identification supplied by the data.

## 3. Conditional unbiasedness and covariance

Substitute the model:

$\hat{\beta}=\beta +(X^TX)^{-1}X^{\mathsf T}\varepsilon $.

Therefore

\[E[\hat{\beta}|X]=\beta \]

and

$Cov(\hat{\beta}|X)=\sigma ^2(X^TX)^{-1}$.

These are finite-sample statements. They require a correct linear conditional mean for unbiasedness and spherical covariance for the displayed variance. Normal errors are not needed for either derivation.

For a contrast $a^{\mathsf T}\beta $, the estimator $a^{\mathsf T}\hat{\beta}$ has conditional variance

$\sigma ^2a^{\mathsf T}(X^TX)^{-1}a$.

Poorly separated design directions make $(X^TX)^{-1}$ large. Collecting more nearly duplicate covariate patterns may add little information about a contrast even when $n$ is large.

## 4. Gauss–Markov is an optimality theorem with a narrow class

**Theorem 1.1 (Gauss–Markov).** Under the fixed-design linear model with $Cov(\varepsilon |X)=\sigma ^2I$, ordinary least squares has smallest covariance among linear unbiased estimators: if $CY$ is unbiased for $\beta $, then

\[Cov(CY|X)-Cov(\hat{\beta}|X)\]

is positive semidefinite.

**Proof.** Unbiasedness for every $\beta $ requires $CX=I_p$. Let

\[C_0=(X^TX)^{-1}X^{\mathsf T}\]

and write $C=C_0+D$. Then $DX=0$. Under spherical covariance,

$Cov(CY|X)=\sigma ^2(C_0+D)(C_0+D)^{\mathsf T}$.

The cross term vanishes because

$C_0D^{\mathsf T}=(X^TX)^{-1}X^TD^{\mathsf T}=(X^TX)^{-1}(DX)^{\mathsf T}=0$.

Thus

$Cov(CY|X)=\sigma ^2C_0C_0^{\mathsf T}+\sigma ^2DD^{\mathsf T}$,

and $DD^{\mathsf T}$ is positive semidefinite. ∎

“Best linear unbiased” does not mean minimum risk among all estimators, robustness to outliers, correct specification, or numerical superiority of normal equations. Shrinkage can lower mean-squared error, and QR or SVD is usually preferable for computation.

## 5. Residual variation estimates error scale

Because $(I-H)X\beta =0$,

$e=(I-H)\varepsilon $.

The residual sum of squares is $RSS=e^Te$. Under spherical errors,

$E[RSS|X]=\sigma ^2 \operatorname{Tr}(I-H)=\sigma ^2(n-p)$.

Here $H$ has rank and trace $p$. Therefore

\[s^2=RSS/(n-p)\]

is conditionally unbiased for $\sigma ^2$ when $n>p$.

Dividing by $n$ instead estimates average squared fitted residual but is biased downward for $\sigma ^2$ under this model. Degrees of freedom record the $p$ fitted directions removed from residual variation.

## 6. Normal errors give exact t inference

Now additionally assume $n>p$, $\sigma >0$, and $\varepsilon |X\sim Normal_n(0,\sigma ^2I)$. Orthogonal Gaussian projections are independent, so $\hat{\beta}$ is independent of $e$, and

$RSS/\sigma ^2\sim \chi ^2_{n-p}$.

For a nonzero contrast vector $a\in \mathbb R^p$, consider $a^{\mathsf T}\beta $:

$T=[a^{\mathsf T}\hat{\beta}-a^{\mathsf T}\beta ]/[s\sqrt{a^{\mathsf T}(X^TX)^{-1}a}]\sim t_{n-p}$.

For $0<\alpha <1$, an exact $1-\alpha $ confidence interval is

$a^{\mathsf T}\hat{\beta}±t_{n-p,1-\alpha /2}s\sqrt{a^{\mathsf T}(X^TX)^{-1}a}$.

The t distribution is exact conditional on $X$ under normal spherical errors. Without normality, a similar statistic can be asymptotically normal under leverage and moment conditions; it is not automatically exact.

## 7. Several restrictions lead to an F statistic

Let the null be $R\beta=r$, where $R$ has $1\le q\le p$ linearly independent rows. Under normal spherical errors,

\[
F=\frac{(R\hat\beta-r)^{\mathsf T}
  [R(X^{\mathsf T}X)^{-1}R^{\mathsf T}]^{-1}
  (R\hat\beta-r)/q}{s^2}.
\]

has an $F_{q,n-p}$ distribution under the null.

For $q=1$, $F=T^2$. Joint testing is not equivalent to rejecting whenever any separate t statistic crosses an unadjusted threshold; the latter changes familywise error.

A nested-model form compares residual sums of squares from restricted and full models. It is the same quadratic geometry when both models and covariance assumptions are correct.

## 8. Leverage controls fitted-value sensitivity

The diagonal $h_ii$ of $H$ is the leverage of row $x_i^{\mathsf T}$. Since $H$ is a projector,

$0\le h_ii\le 1$, $Σ_i h_ii=p$.

Under spherical errors,

$Var(e_i|X)=\sigma ^2(1-h_ii)$.

High-leverage cases have smaller raw residual variance because the fit can move toward them. A small residual therefore does not prove low influence. Case influence combines leverage, residual magnitude, and the estimand being reported.

Studentised residuals scale by an estimate of $\sigma \sqrt{1-h_ii}$. Case-deletion diagnostics can show how coefficients change, but a deletion must be scientifically justified: removing a valid rare design point changes the supported covariate region.

## 9. Heteroskedasticity changes covariance, not the coefficient formula

Suppose $E[\varepsilon |X]=0$ but

$Cov(\varepsilon |X)=Ω$,

not necessarily $\sigma ^2I$. OLS remains conditionally unbiased, but

$Cov(\hat{\beta}|X)=(X^TX)^{-1}X^{\mathsf T}ΩX(X^TX)^{-1}$.

The homoskedastic formula is then wrong. A basic heteroskedasticity-consistent plug-in replaces $Ω$ by $\operatorname{diag}(e_i^2)$, producing a sandwich estimator. Variants correct leverage and small-sample bias.

This changes uncertainty, not the point estimate. If the conditional mean is nonlinear or important covariates are omitted, zero-mean errors can fail and a sandwich covariance does not remove coefficient bias.

## 10. Prediction and mean response have different uncertainty

At covariate vector $x_0$, the fitted conditional mean is $x_0^{\mathsf T}\hat{\beta}$, with variance

$\sigma ^2x_0^{\mathsf T}(X^TX)^{-1}x_0$.

For a new response

$Y_0=x_0^{\mathsf T}\beta +\varepsilon _0$,

independent new noise adds $\sigma ^2$, so prediction-error variance is

$\sigma ^2[1+x_0^{\mathsf T}(X^TX)^{-1}x_0]$.

Prediction intervals are wider than confidence intervals for the mean response. Both formulas assume $x_0$ lies in a scientifically relevant region. Algebra can extrapolate far beyond the observed design, but uncertainty from an assumed linear mean does not measure uncertainty that the linear relation itself fails there.

## 11. Under misspecification, least squares targets a projection

For a random pair $(X,Y)$ with $X\in \mathbb R^p$, $E[\lVert X\rVert^2]<\infty$, and $E[Y^2]<\infty$, the population least-squares coefficient solves

$\beta *=argmin_b E[(Y-X^Tb)^2]$.

If $E[XX^{\mathsf T}]$ is nonsingular,

$\beta *=[E(XX^{\mathsf T})]^{-1}E[XY]$.

This is the best linear prediction coefficient on the declared covariate distribution. It need not equal a structural, causal, or derivative parameter. Changing the covariate population can change $\beta *$ even if the conditional response mechanism is unchanged.

The empirical normal equations are estimating equations for this projection. Under iid sampling and regularity, sandwich asymptotics apply with score $X(Y-X^{\mathsf T}\beta *)$.

## 12. Omitted-variable bias is a projection identity

Suppose the true fixed-design relation with centred columns is

$Y=\beta _1x+γz+\varepsilon $, $E[\varepsilon |x,z]=0$,

but regress $Y$ only on $x$. The expected simple-regression slope is

$\beta _1+γ(x^Tz)/(x^Tx)$.

Bias requires both an omitted effect $γ\ne 0$ and design association $x^Tz\ne 0$. Adding every available variable is not a universal remedy: conditioning on consequences of treatment, colliders, noisy proxies, or adaptively selected variables can create other biases or change the estimand.

Regression adjustment becomes causal only with an identification argument from randomisation or sufficiently credible conditional exchangeability, positivity, consistency, and measurement assumptions.

## 13. Regression audit

Record:

1. response, design rows, units, and sampling or assignment protocol;
2. coefficient or prediction estimand and target covariate population;
3. rank, conditioning, leverage, and extrapolation region;
4. conditional-mean and covariance assumptions;
5. exact-normal or asymptotic calibration;
6. residual and case-influence diagnostics;
7. heteroskedasticity, dependence, clustering, and selection handling;
8. causal assumptions kept separate from regression algebra.

## 14. Exercises with complete solutions

### 1. Normal equations

**Exercise 14.1**

Differentiate $\lVert Y-Xb\rVert^2$ to obtain the normal equations.

<details>
<summary>Hint 1</summary>

Expand the squared norm as a quadratic in the coefficients.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the linear and quadratic terms, using symmetry of $X^{\mathsf T}X$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expanding gives $Y^TY-2b^TX^TY+b^TX^TXb$. The gradient is $-2X^TY+2X^TXb$; setting it to zero gives $X^TXb=X^TY$.

</details>

### 2. Residual orthogonality

**Exercise 14.2**

Show the OLS residual is orthogonal to every column of $X$.

<details>
<summary>Hint 1</summary>

Write the residual as $Y-X\hat\beta$.

</details>

<details>
<summary>Hint 2</summary>

The normal equations set its inner product with every design column to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The normal equations imply $X^{\mathsf T}(Y-X\hat{\beta})=0$, so every column's inner product with $e$ is zero.

</details>

### 3. Projector symmetry

**Exercise 14.3**

Prove $H^{\mathsf T}=H$.

<details>
<summary>Hint 1</summary>

Transpose the factors in reverse order.

</details>

<details>
<summary>Hint 2</summary>

The Gram matrix and its inverse are symmetric under the full-rank hypothesis.

</details>

<details>
<summary>Solution</summary>

**Solution.** $X^TX$ and its inverse are symmetric, so

$H^{\mathsf T}=[X(X^TX)^{-1}X^{\mathsf T}]^{\mathsf T}=X(X^TX)^{-1}X^{\mathsf T}=H$.

</details>

### 4. Projector idempotence

**Exercise 14.4**

Prove $H^2=H$.

<details>
<summary>Hint 1</summary>

Multiply the two projector formulas.

</details>

<details>
<summary>Hint 2</summary>

The middle product $X^{\mathsf T}X$ cancels its adjacent inverse.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiply and cancel:

$H^2=X(X^TX)^{-1}X^TX(X^TX)^{-1}X^{\mathsf T}=H$.

</details>

### 5. Conditional unbiasedness

**Exercise 14.5**

Derive $E[\hat{\beta}|X]=\beta $.

<details>
<summary>Hint 1</summary>

Substitute the model equation into the coefficient formula.

</details>

<details>
<summary>Hint 2</summary>

Conditional mean-zero errors make the additive error term vanish in conditional expectation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute $Y=X\beta +\varepsilon $ to get $\hat{\beta}=\beta +(X^TX)^{-1}X^{\mathsf T}\varepsilon $. Conditional error mean zero removes the second term.

</details>

### 6. Contrast variance

**Exercise 14.6**

If $Cov(\hat{\beta}|X)=\sigma ^2V$, find $Var(a^{\mathsf T}\hat{\beta}|X)$.

<details>
<summary>Hint 1</summary>

A contrast is a linear map of the coefficient vector.

</details>

<details>
<summary>Hint 2</summary>

Apply covariance propagation with row vector $a^{\mathsf T}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Linear covariance propagation gives $\sigma ^2a^TVa$.

</details>

### 7. Gauss–Markov cross term

**Exercise 14.7**

Why is $C_0D^{\mathsf T}=0$ in the theorem proof?

<details>
<summary>Hint 1</summary>

Use the unbiasedness restriction on the competing linear estimator.

</details>

<details>
<summary>Hint 2</summary>

The decomposition has $DX=0$, hence $X^{\mathsf T}D^{\mathsf T}=0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $DX=0$, so $X^TD^{\mathsf T}=(DX)^{\mathsf T}=0$; left multiplication by $(X^TX)^{-1}$ preserves zero.

</details>

### 8. Scope of Gauss–Markov

**Exercise 14.8**

Does the theorem compare OLS with biased shrinkage estimators?

<details>
<summary>Hint 1</summary>

Name the theorem's comparison class.

</details>

<details>
<summary>Hint 2</summary>

It concerns linear estimators unbiased for every coefficient value, excluding biased shrinkage.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Its comparison class is linear estimators unbiased for every $\beta $. A biased or nonlinear estimator lies outside that class.

</details>

### 9. Residual degrees of freedom

**Exercise 14.9**

With $n=30$ and $p=4$, what denominator makes $s^2$ unbiased under the model?

<details>
<summary>Hint 1</summary>

Subtract the full design rank, including the intercept, from $n$.

</details>

<details>
<summary>Hint 2</summary>

Here the residual subspace has dimension $30-4$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $n-p=26$, so $s^2=RSS/26$.

</details>

### 10. One contrast interval

**Exercise 14.10**

If $a^{\mathsf T}\hat{\beta}=2$, $s\sqrt{a^{\mathsf T}(X^TX)^{-1}a}=0.5$, and the t cutoff is $2.1$, find the interval.

<details>
<summary>Hint 1</summary>

Multiply the supplied estimated standard error by the t cutoff.

</details>

<details>
<summary>Hint 2</summary>

Subtract and add the resulting margin to the contrast estimate two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Half-width is $2.1(0.5)=1.05$; the interval is $[0.95,3.05]$.

</details>

### 11. One restriction

**Exercise 14.11**

Why does the one-restriction F statistic equal the squared t statistic?

<details>
<summary>Hint 1</summary>

Write both statistics for the same single contrast and null value.

</details>

<details>
<summary>Hint 2</summary>

The F statistic divides its squared deviation by the same estimated variance as the squared t statistic.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both use the squared contrast deviation divided by its estimated variance. With $q=1$, the F numerator is exactly the squared standardised contrast, hence $F=T^2$.

</details>

### 12. Sum of leverages

**Exercise 14.12**

Prove $Σ_i h_ii=p$.

<details>
<summary>Hint 1</summary>

The diagonal sum is the trace of the hat matrix.

</details>

<details>
<summary>Hint 2</summary>

A symmetric idempotent projector has eigenvalues zero or one, with $p$ ones.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum is $\operatorname{Tr}(H)$. An idempotent projector's trace equals its rank, and $\operatorname{rank}(H)=\operatorname{rank}(X)=p$.

</details>

### 13. Residual variance

**Exercise 14.13**

Derive $Var(e_i|X)=\sigma ^2(1-h_ii)$.

<details>
<summary>Hint 1</summary>

Propagate the spherical error covariance through $I-H$.

</details>

<details>
<summary>Hint 2</summary>

Symmetry and idempotence reduce the covariance to $\sigma^2(I-H)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $Cov(e|X)=\sigma ^2(I-H)(I-H)^{\mathsf T}=\sigma ^2(I-H)$ by symmetry and idempotence. Its $i$th diagonal is $\sigma ^2(1-h_ii)$.

</details>

### 14. Heteroskedastic covariance

**Exercise 14.14**

If $Cov(\varepsilon |X)=Ω$, derive the OLS covariance.

<details>
<summary>Hint 1</summary>

Express the coefficient error as a fixed linear transformation of the errors.

</details>

<details>
<summary>Hint 2</summary>

Use that transformation on both sides of $\Omega$.

</details>

<details>
<summary>Solution</summary>

**Solution.** From $\hat{\beta}-\beta =(X^TX)^{-1}X^{\mathsf T}\varepsilon $, multiply covariance on both sides to get $(X^TX)^{-1}X^{\mathsf T}ΩX(X^TX)^{-1}$.

</details>

### 15. Sandwich limitation

**Exercise 14.15**

Can a heteroskedasticity-consistent covariance correct an omitted nonlinear mean term?

<details>
<summary>Hint 1</summary>

A covariance estimate changes an uncertainty calculation, not the fitted mean function.

</details>

<details>
<summary>Hint 2</summary>

Misspecification of the conditional mean or causal target remains after sandwich adjustment.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It estimates variability around the OLS projection. It does not change the coefficient or restore a false conditional-mean equation.

</details>

### 16. Mean versus new response

**Exercise 14.16**

What additional variance appears for prediction of a new homoskedastic response?

<details>
<summary>Hint 1</summary>

A new independent response has an additional random error.

</details>

<details>
<summary>Hint 2</summary>

Its variance adds $\sigma^2$ to the uncertainty in the estimated mean response.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independent new noise contributes $\sigma ^2$, changing factor $x_0^{\mathsf T}(X^TX)^{-1}x_0$ to $1+x_0^{\mathsf T}(X^TX)^{-1}x_0$.

</details>

### 17. Population projection

**Exercise 14.17**

Differentiate $E[(Y-X^Tb)^2]$ and solve for $\beta *$.

<details>
<summary>Hint 1</summary>

Expand the finite population-risk quadratic under the stated moment assumptions.

</details>

<details>
<summary>Hint 2</summary>

Its derivative gives the normal equations with expectations; positive-definite second moments ensure a unique minimum.

</details>

<details>
<summary>Solution</summary>

**Solution.** The gradient is $-2E[XY]+2E[XX^{\mathsf T}]b$. Setting it to zero and inverting $E[XX^{\mathsf T}]$ gives the stated formula.

</details>

### 18. Omitted-variable conditions

**Exercise 14.18**

When does the displayed omitted-variable bias vanish?

<details>
<summary>Hint 1</summary>

Inspect the product of omitted effect and projection coefficient.

</details>

<details>
<summary>Hint 2</summary>

Either zero omitted contribution or orthogonality of the omitted covariate removes that term.

</details>

<details>
<summary>Solution</summary>

**Solution.** It vanishes if $γ=0$, so the omitted variable has no conditional effect, or if $x^Tz=0$, so it is orthogonal to the included design direction.

</details>

### 19. Rank deficiency

**Exercise 14.19**

Can unique fitted values coexist with nonunique coefficients?

<details>
<summary>Hint 1</summary>

Separate the fitted column-space projection from its coordinates.

</details>

<details>
<summary>Hint 2</summary>

Dependent design columns can represent the same unique fitted vector with different coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. Orthogonal projection onto the column space is unique, but dependent columns allow multiple coefficient vectors mapping to the same fitted vector.

</details>

### 20. Regression is not causation

**Exercise 14.20**

Why does a nonzero adjusted coefficient not by itself identify a causal effect?

<details>
<summary>Hint 1</summary>

A fitted conditional association is not an assignment mechanism.

</details>

<details>
<summary>Hint 2</summary>

Name an identification/design condition addressing confounding, selection and the target intervention.

</details>

<details>
<summary>Solution</summary>

**Solution.** Association can remain because of confounding, selection, measurement error, conditioning choices, or model misspecification. A causal claim needs a design or explicit identification assumptions beyond the regression calculation.

</details>


## 15. Summary and forward route

Least squares projects responses onto a declared design space. Under a correct linear conditional mean it is unbiased; spherical covariance gives the classical variance and Gauss–Markov comparison; normality adds exact t and F laws. Leverage, heteroskedasticity, misspecification, target-population change, and omitted variables delimit those conclusions. The next chapter develops projection geometry; the linked Principles design chapter replaces modelled assignment and sampling with known randomization and inclusion designs where possible.


## Worked example 1.1: one small design connects the whole calculation

### Worked example 1: fit and analyse the four-row design

A complete example is more revealing than separate formulas for a coefficient, a standard error, and a test. Consider four fixed covariate values $t=(-1,0,0,1)^{\mathsf T}$ and responses $y=(0,1,3,4)^{\mathsf T}$. Include an intercept, so row $i$ of the design is $x_i^{\mathsf T}=(1,t_i)$ and the coefficient vector is $(\beta _0,\beta _1)^{\mathsf T}$. The repeated covariate value zero represents two separate observations, not a copied outcome.

The columns are orthogonal: $\sum_i t_i=0$, while $\sum_i t_i^2=2$. Consequently $X^{\mathsf T}X=\operatorname{diag}(4,2)$ and $X^{\mathsf T}y=(8,4)^{\mathsf T}$. The estimated intercept is two and the estimated slope is two. The fitted vector is $(0,2,2,4)^{\mathsf T}$; the residual is $(0,-1,1,0)^{\mathsf T}$. Its sum and its inner product with $t$ are both zero, verifying the normal equations directly.

Here $n=4$, $p=2$, $RSS=2$, and $s^2=RSS/(n-p)=1$. Under the stated normal spherical model, the estimated covariance matrix of the coefficients is $\operatorname{diag}(1/4,1/2)$. The slope standard error is $1/\sqrt2$. To test $\beta _1=0$, the observed statistic is $T=2\sqrt2$, compared with the $t_2$ distribution. The exact confidence interval for the slope is $2±t_{2,1-\alpha /2}/\sqrt2$, for a declared $0<\alpha <1$.

This expression is a complete interval without replacing its quantile by an unverified numerical approximation. It also records that only two residual degrees of freedom estimate the noise scale. Four rows do not justify substituting a standard normal cutoff simply because the coefficient estimate is easy to calculate.

The intercept-only restricted model fits the mean two to every response. Its residual sum of squares is $4+1+1+4=10$. Adding the slope reduces that sum by eight. The nested-model statistic is therefore $F=[(10-2)/1]/[2/2]=8=T^2$. This equality follows from the single restriction and the same estimated scale, not from coincidentally matching two numerical outputs.

At a new covariate value zero, use $x_0=(1,0)^{\mathsf T}$. The fitted mean is two and $v_0=x_0^{\mathsf T}(X^{\mathsf T}X)^{-1}x_0=1/4$. Its estimated standard error is $1/2$. Predicting an independent new response instead gives estimated error standard deviation $\sqrt{1+v_0}=\sqrt5/2$. The extra term belongs to the new observation's noise; it is not an arbitrary widening convention.

The leverages are $h_{ii}=1/4+t_i^2/2$, namely $(3/4,1/4,1/4,3/4)$. The endpoint responses fit exactly in this particular record, although their leverages are the largest. Under the model their residual variances are $\sigma ^2(1/4,3/4,3/4,1/4)$. Thus the zero endpoint residuals do not establish that those observations were unimportant in determining the slope.

Every inferential statement in this example is conditional on the fixed design and the normal spherical model. The algebraic coefficient and residual calculations remain valid for these numbers without that model. Their sampling distributions, interval coverage, and prediction guarantee require it. This separation permits useful diagnostics without confusing a computable quantity with a calibrated uncertainty statement.

## Worked example 1.2: Gaussian geometry produces t and F laws

The independence invoked in Section 6 can be made visible by choosing coordinates. Because $X$ has rank $p$, extend an orthonormal basis of its column space to an orthonormal basis of $\mathbb{R}^n$. Let $Q_1$ contain the first $p$ basis vectors and $Q_2$ the other $n-p$. Then $H=Q_1Q_1^{\mathsf T}$ and $I-H=Q_2Q_2^{\mathsf T}$.

Under $\varepsilon \sim Normal_n(0,\sigma ^2I)$ with $\sigma >0$, the coordinates $Q_1^{\mathsf T}\varepsilon /\sigma $ and $Q_2^{\mathsf T}\varepsilon /\sigma $ form one vector of independent standard normals. Orthogonality makes their covariance block diagonal; joint Gaussianity turns that zero covariance into independence. Zero covariance alone would not establish independence for arbitrary error laws.

The coefficient error is a linear function of the first block, while $RSS/\sigma ^2=\|Q_2^{\mathsf T}\varepsilon /\sigma \|^2$ is the sum of squares of the second block. Hence the latter is chi-square with $n-p$ degrees of freedom and is independent of the coefficient estimate. For a nonzero contrast vector $a$, positive definiteness of $(X^{\mathsf T}X)^{-1}$ gives $a^{\mathsf T}(X^{\mathsf T}X)^{-1}a>0$.

Normalize the contrast error by its true standard deviation to obtain a standard normal $Z$. Normalize $RSS$ by its true scale to obtain an independent $W\sim \chi ^2_{n-p}$. Their ratio $Z/\sqrt{W/(n-p)}$ has, by definition, the $t_{n-p}$ law. This derivation explains all three essential requirements: a nonzero contrast, a positive scale, and positive residual degrees of freedom.

When $n=p$, the fitted space is all of $\mathbb{R}^n$ and every residual is zero. The design can identify the coefficient vector, yet it leaves no residual information for estimating $\sigma ^2$. When $a=0$, the proposed standardized contrast is $0/0$, not a t variable. A deterministic zero contrast can be reported directly without inventing a pivot.

For multiple restrictions, require $1\le q\le p$ and full row rank of $R$. The restriction covariance $V_R=R(X^{\mathsf T}X)^{-1}R^{\mathsf T}$ is positive definite. Under the null, whiten $R\hat \beta -r$ by $\sigma ^{-1}V_R^{-1/2}$. The result has $q$ independent standard normal coordinates, so its squared length is $\chi ^2_q$, independently of the residual sum of squares. Dividing the two independent chi-squares by their degrees of freedom gives the F law.

The restricted residual difference has the same meaning geometrically. The restrictions define a nonempty affine subspace of coefficient space; choose one point satisfying them and translate to a linear subspace. Its fitted space has dimension $p-q$ within the full fitted space. The extra fitted directions form a $q$-dimensional orthogonal complement. Under the null, their squared Gaussian coordinates give $(RSS_R-RSS_F)/\sigma ^2\sim \chi ^2_q$.

These directions are also orthogonal to the $n-p$ full-model residual directions. Thus the numerator and denominator in $[(RSS_R-RSS_F)/q]/[RSS_F/(n-p)]$ are independent under the normal spherical null. This supplies the nested-model formula, including why the restriction count appears in the numerator and the full model's residual degrees of freedom remain in the denominator.

A mean-response interval and a new-response interval can be derived from the same coordinates. For a fixed nonzero $x_0$, the fitted mean error is normal with variance $\sigma ^2v_0$ and independent of $s^2$. For an independent new normal error, $Y_0-x_0^{\mathsf T}\hat \beta $ is normal with variance $\sigma ^2(1+v_0)$ and remains independent of $s^2$. Studentizing yields the respective exact t pivots. Shared new-observation errors or an estimated, outcome-selected $x_0$ require another argument.


### Joint restrictions are geometric regions, not separate cutoffs

The small example also permits a complete two-restriction calculation. Test $\beta _0=\beta _1=0$, so $R=I_2$, $r=0$, and $q=2$. The restriction quadratic is $\hat \beta ^{\mathsf T}X^{\mathsf T}X\hat \beta =4(2^2)+2(2^2)=24$. Consequently $F=(24/2)/1=12$, compared with $F_{2,2}$ under this joint null.

The all-zero restricted fitted vector has residual sum of squares $\sum_i y_i^2=26$. Subtracting the full-model value two gives the same numerator sum of squares twenty-four. The single-slope test and the joint test answer different hypotheses; their F values eight and twelve need not have a simple ordering by evidential strength because the reference distributions differ.

Inverting the joint F test gives an ellipsoidal confidence region:
\[
(\hat \beta -b)^{\mathsf T}X^{\mathsf T}X(\hat \beta -b)
\le q\,s^2 F_{q,n-p,1-\alpha }
\]
when all $q=p$ coefficients are jointly constrained by $b$. Its coverage is $1-\alpha $ under the stated model. Separate marginal t intervals instead form a rectangle and do not generally give the same simultaneous coverage. The geometric distinction is a probability statement about a joint event, not a matter of plotting style.

A general $R$ describes only the chosen $q$ restrictions. Directions in coefficient space not changed by $R$ are irrelevant to that numerator, although they still belong to the full model and consume fitted degrees of freedom. This is why testing a subgroup of coefficients uses the full-model residual scale rather than pretending the nuisance coefficients were known beforehand.

## 18. Leverage and a scoped sandwich consistency argument

A sandwich formula is a covariance calculation, not a universal certificate of inference. With independent errors and variances $\sigma _i^2$, the true covariance contains the meat matrix $\sum_i x_ix_i^{\mathsf T}\sigma _i^2$. Replacing each unknown variance by its observed squared residual produces HC0. The replacement is generally not unbiased at finite sample size.

Even under spherical errors, $E(e_i^2\mid X)=\sigma ^2(1-h_{ii})$, so the expected HC0 meat is $\sum_i x_ix_i^{\mathsf T}\sigma ^2(1-h_{ii})$. The factor lost at a high-leverage row can be substantial. Dividing by $1-h_{ii}$ motivates a leverage correction under that model, but it is undefined at leverage one and does not supply an exact t law.

Here is a deliberately bounded sufficient setting for consistency of the fixed-design covariance replacement. Keep $p$ fixed as $n$ grows, bound every row norm by one constant $K$, and require $A_n=X^{\mathsf T}X/n$ to converge to a positive-definite matrix $A$. Let errors be independent, mean zero, with uniformly bounded fourth moments. Assume $B_n=n^{-1}\sum_i x_ix_i^{\mathsf T}\sigma _i^2$ converges to a finite matrix $B$.

These assumptions are stronger than necessary, but their role is transparent. First, the covariance formula shows $\hat \beta -\beta =O_p(n^{-1/2})$. Next, each entry of $n^{-1}\sum_i x_ix_i^{\mathsf T}(\varepsilon _i^2-\sigma _i^2)$ has variance of order at most $1/n$, because the errors are independent and the fourth moments and row norms are bounded. Chebyshev's inequality makes that oracle-meat error tend to zero in probability.

Now let $\delta =\hat \beta -\beta $, so $e_i=\varepsilon _i-x_i^{\mathsf T}\delta $. The difference between residual squares and error squares is $-2\varepsilon _ix_i^{\mathsf T}\delta +(x_i^{\mathsf T}\delta )^2$. After multiplying by bounded design entries and averaging, its absolute size is bounded by a constant times $\|\delta \|\,n^{-1}\sum_i|\varepsilon _i|+\|\delta \|^2$. The average absolute error is $O_p(1)$ by the uniform moment bound, so this difference also tends to zero.

It follows that the normalised HC0 meat converges to $B$, and $n\widehat{\operatorname{Cov}}_{\!HC0}(\hat \beta )$ converges to $A^{-1}BA^{-1}$. This is a consistency result for covariance estimation in the stated sequence. Normal quantile calibration additionally needs a nondegenerate limiting contrast and a suitable central limit theorem; covariance consistency alone does not prove it.

The bounded-row and positive-information assumptions also force maximum leverage to vanish: $h_{ii}=x_i^{\mathsf T}A_n^{-1}x_i/n\le K^2\|A_n^{-1}\|/n$. This explains why increasing dimension, a few growing design rows, or nearly singular design directions can defeat the simple argument. The assumptions describe information spread across rows rather than merely a large row count.

If errors within a school or time block are dependent, the oracle meat must include the corresponding cross-covariances. A diagonal squared-residual replacement omits them. Cluster covariance methods or time-dependence methods need enough independent or weakly dependent repetition units and their own limit assumptions. Repeating a cluster's rows cannot manufacture independent errors.


### Deriving case-deletion sensitivity

Leverage also has an exact algebraic connection to deleting a row. Put $A=X^{\mathsf T}X$ and let $x_i$ denote the row as a column. Removing row $i$ changes the normal-equation matrix to $A-x_ix_i^{\mathsf T}$. If $h_{ii}=x_i^{\mathsf T}A^{-1}x_i<1$, the reduced design retains full column rank.

To see that last claim, suppose a vector $v$ lies in the reduced design's null space. Then $(A-x_ix_i^{\mathsf T})v=0$, so $v=A^{-1}x_i c$ with $c=x_i^{\mathsf T}v$. Taking its inner product with $x_i$ gives $c=h_{ii}c$. Since $h_{ii}<1$, $c=0$ and $v=0$. Thus the reduced matrix is invertible.

Let $\hat \beta _{-i}$ be the coefficient fitted without the row and $d=\hat \beta _{-i}-\hat \beta $. Subtracting the two normal equations gives
\[
(A-x_ix_i^{\mathsf T})d=-x_i e_i.
\]
But $(A-x_ix_i^{\mathsf T})A^{-1}x_i=(1-h_{ii})x_i$, so uniqueness yields
\[
\hat \beta _{-i}-\hat \beta =-\frac{A^{-1}x_i e_i}{1-h_{ii}}.
\]

For a particular contrast $a^{\mathsf T}\beta $, the deletion change is $-a^{\mathsf T}A^{-1}x_i e_i/(1-h_{ii})$. Leverage and residual size both matter, and the contrast direction matters too. A case can influence an intercept differently from a slope. At leverage one, deleting the row destroys a fitted direction and this formula cannot divide by the vanished denominator.

The prediction error at the deleted covariate is $y_i-x_i^{\mathsf T}\hat \beta _{-i}=e_i/(1-h_{ii})$. This is the leave-one-out residual identity. It does not say the deleted observation became an independent new sample, nor that its distribution equals the original in-sample residual law.

In the small example, deleting either endpoint leaves coefficients unchanged because its observed residual is zero and its leverage is below one. Deleting the second row raises the intercept by $1/3$, while deleting the third lowers it by $1/3$; their covariate is zero, so the slope stays two. These are exact changes for this one record. They do not imply endpoint errors could never perturb the fitted slope in another record.

Diagnostics can therefore explain sensitivity without licensing selective deletion. Choosing which row to remove because its outcome looks inconvenient conditions the retained data on a response-dependent event. Reusing an ordinary t interval as though that retained design had been fixed independently of the outcomes does not automatically retain its original coverage. A scientifically justified exclusion and a predeclared sensitivity analysis should record the altered target population and procedure.

## 19. Population projection, identification, and extrapolation

### Worked example 2: change the projection population

The second-moment correction in Section 11 makes its minimization problem a finite quadratic. Write $A=E(XX^{\mathsf T})$ and $c=E(XY)$ for a random covariate vector, now distinguished from the earlier fixed design matrix by context. Cauchy–Schwarz makes every entry of $c$ finite when $E\|X\|^2$ and $E(Y^2)$ are finite.

Expanding the criterion gives $E(Y^2)-2b^{\mathsf T}c+b^{\mathsf T}Ab$. If $A$ is nonsingular, it is positive definite because $v^{\mathsf T}Av=E[(v^{\mathsf T}X)^2]\ge 0$. Completing the square around $\beta ^*=A^{-1}c$ yields
\[
E[(Y-X^{\mathsf T}b)^2]
=E[(Y-X^{\mathsf T}\beta ^*)^2]+(b-\beta ^*)^{\mathsf T}A(b-\beta ^*).
\]
This proves existence and uniqueness without interchanging an unjustified derivative and an infinite expectation.

The normal equation says the projection residual is orthogonal to the included covariates in expectation. It does not say its conditional mean given those covariates is zero. The two conditions coincide under a correct linear conditional mean, but the projection equation can hold for a nonlinear response mechanism.

For example, fit a line through the origin to $Y=X^2$ when scalar $X$ is one or two. With equal probabilities, the projection coefficient is $(1+8)/(1+4)=9/5$. If the probability of one increases to $3/4$, the coefficient becomes $(3+8)/(3+4)=11/7$. The conditional mechanism $Y=X^2$ did not change. The covariate distribution changed the best approximation being requested.

Design singularity has a different meaning. If $v^{\mathsf T}X=0$ almost surely for a nonzero $v$, adding any multiple of $v$ to a coefficient vector gives the same predictor almost surely. The fitted random variable may be unique while its coordinates are not. A numerical constraint chooses coordinates; it does not add missing identifying variation.

Extrapolation asks for still more. In the small design, the observed covariates are between minus one and one. At covariate value ten, the linear mean calculation uses $v_0=1/4+100/2=201/4$, reflecting substantial coefficient uncertainty. Even that large variance is conditional on the linear relation continuing to ten. It does not quantify uncertainty over possible curved mechanisms that fit the observed range equally well.

Finally, omitted-variable bias is an expectation statement conditional on a declared design or a population projection. Centering, an intercept convention, and a nonzero included column matter to its algebra. Choosing controls after observing outcomes changes the procedure, while controlling a post-treatment variable can change the causal target. A regression coefficient becomes causal only after an identification argument connects it to an intervention contrast. Good matrix conditioning and small residuals do not supply that argument.


### Changing units changes coordinates, not information

An invertible recoding of the design provides another check on interpretation. Let $M$ be an invertible $p$-by-$p$ matrix and set $\widetilde X=XM$. The same fitted means have coordinates $\widetilde \beta =M^{-1}\beta $, and direct substitution in the OLS formula gives $\widehat{\widetilde \beta }=M^{-1}\hat \beta $. The fitted-space projector is unchanged.

A scientific contrast must be recoded with the coefficients. If its old expression is $a^{\mathsf T}\beta $, its new expression is $a^{\mathsf T}M\widetilde \beta $. Covariance transforms by $M^{-1}\operatorname{Cov}(\hat \beta )M^{-\mathsf T}$. Consequently the contrast estimate, its variance, and its correctly transformed test statistic are unchanged. Reporting a different coefficient without transforming the question compares different quantities.

In the small design, replace the slope covariate $t$ by $2t$. The slope estimate becomes one rather than two, and its standard error becomes $1/(2\sqrt2)$ rather than $1/\sqrt2$. The zero-slope t statistic stays $2\sqrt2$. The smaller printed standard error reflects changed units, not a more informative experiment.

Centering and scaling can improve numerical conditioning and make coefficients easier to discuss, but cannot repair an absent design direction. An invertible coordinate change preserves rank. Dropping a column or adding a constraint changes the model or comparison space instead, and needs a different interpretation.

## 20. Optional practice extensions

These questions supplement the original twenty exercises.

### SI-17-E21. A misleading finite HC0 estimate

**Exercise 14.21**

For the four-row design in Worked example 1.1, calculate the HC0 covariance matrix using its residuals and design. Explain why the resulting slope entry does not prove that the slope has zero sampling uncertainty under the normal spherical model.


<details>
<summary>Hint 1</summary>

In the four-row calculation, only the zero-covariate rows have nonzero residuals.

</details>

<details>
<summary>Hint 2</summary>

Their meat contribution is diagonal $(2,0)$; sandwich it with diagonal $(1/4,1/2)$.

</details>



### SI-17-E22. Change the projection population

**Exercise 14.22**

Fit a line through the origin to $Y=X^2$ when scalar $X$ takes values one and three. Compute the population projection coefficient first with equal probabilities and then with probability $3/4$ on one. State the moment and identification conditions and explain what changed.


<details>
<summary>Hint 1</summary>

For a through-origin line use $E(XY)/E(X^2)$.

</details>

<details>
<summary>Hint 2</summary>

Here $Y=X^2$, so compare $E(X^3)/E(X^2)$ under the two declared covariate laws.

</details>



## 21. Solutions to the optional practice extensions

<details>
<summary>Solution</summary>

### SI-17-E21. A misleading finite HC0 estimate — solution

Only the two zero-covariate rows have nonzero squared residuals, both equal to one. Their meat contribution is therefore $\operatorname{diag}(2,0)$. Multiplication on both sides by $(X^{\mathsf T}X)^{-1}=\operatorname{diag}(1/4,1/2)$ gives HC0 covariance $\operatorname{diag}(1/8,0)$. The true slope variance under the stated model is $\sigma ^2/2>0$. HC0 is a random plug-in estimator and is not an exact finite-sample variance identity. Here the slope-informing endpoint rows happen to have zero residuals. The large-sample conditions in Section 18 do not justify treating this four-row estimate as proof of perfect precision.

</details>
<details>
<summary>Solution</summary>

### SI-17-E22. Change the projection population — solution

With equal probabilities, $E(XY)/E(X^2)=E(X^3)/E(X^2)=(1+27)/(1+9)=14/5$. With probability $3/4$ on one, the ratio is $(3+27)/(3+9)=5/2$. All required moments are finite because the support is finite, and $E(X^2)>0$ identifies the single coefficient. The response mechanism is unchanged, but the declared covariate distribution changes the loss-weighted approximation. Neither coefficient is a universal derivative of the nonlinear function.

</details>
## 22. Elaboration of the original population-projection solution

### Original Exercise 17: finite quadratic and unique minimizer

The differentiation in the original key applies under the finite-second-moment and nonsingular-moment assumptions now explicitly stated in Section 11. Under those assumptions the criterion is the finite quadratic expanded in Section 19. Its gradient is the one printed in the original key, and positive definiteness gives a unique global minimum rather than merely a stationary point. Without the moment assumptions, the written expectation can be infinite and that differentiation need not define a minimization argument.

## 23. Source and proof boundary for the regression extensions

The finite calculations, orthogonal Gaussian-coordinate derivations, bounded-design covariance-consistency argument, and population quadratic expansion are proved here. They use the book's probability, Gaussian projection, and convergence conventions. The covariance argument is a scoped sufficient case rather than a statement that every sandwich estimator works with arbitrary dependence, leverage, or growing dimension. All numerical values in the small design are exact arithmetic, not a reported software run. These extensions supply no empirical learning calibration or human qualification.

## Worked example 1.3: unique fitted values without unique coefficients

Take two observations with predictor value one in both rows and responses one and three. A model with intercept $a$ and slope $b$ predicts the same value $c=a+b$ at both rows. Its residual sum of squares is
$(1-c)^2+(3-c)^2=2+2(c-2)^2.$
Thus the fitted vector is uniquely $(2,2)$ and the minimum sum of squares is two. Both $(a,b)=(2,0)$ and $(0,2)$ attain it, as does every pair with $a+b=2$. The design has two identical columns and is rank deficient.

For a proposed new predictor value two, those two coefficient pairs predict two and four respectively. The original rows cannot distinguish them. The fitted values on the observed column space are identifiable even though that extrapolated prediction is not. A software choice of one representative coefficient vector does not add the missing information. To identify a slope, collect variation in the predictor or impose a scientifically justified restriction, and make that restriction part of the model rather than silently interpreting an arbitrary numerical solution.


## Sources

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](references-and-notation.md) records the primary source map. The source connections preserve the original mathematical results and their hypotheses.

## Summary

Least squares is a projection under explicit rank and moment conditions. Gauss–Markov compares only linear unbiased procedures; exact t and F inference additionally uses Gaussian common-variance errors. Heteroskedastic covariance, leverage, population projection and causal identification are different issues. State whether the goal is a conditional mean, a new response, a working-model projection or an intervention before interpreting a coefficient.

The main route continues to [Geometry of Projection](geometry-of-projection.md). The [Principles design chapter](../principles-statistical-inference/randomized-experiments-and-causal-contrasts.md) provides the separate randomisation and causal continuation.
