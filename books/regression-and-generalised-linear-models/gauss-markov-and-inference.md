
# Gauss–Markov and Inference

Preparation is [projection geometry](geometry-of-projection.md), Gaussian-vector independence and chi-square laws from the probability book, and confidence/test inversion from Principles. Assume a full-rank design with positive residual degrees of freedom whenever unknown scale is estimated.

An estimator can be unbiased without having an exact normal reference distribution, and a covariance comparison can hold without making the estimator best among every conceivable procedure. This chapter states those conclusions at their proper levels. We first use only conditional means and spherical covariance, then add Gaussian errors for exact t and F inference.

Throughout, $X$ is fixed of full column rank $p<n$, and $Y=X\beta+\varepsilon$. The spherical model has $E\varepsilon=0$ and $\operatorname{Cov}(\varepsilon)=\sigma^2I$ with $\sigma^2>0$. The normal model additionally assumes $\varepsilon\sim N(0,\sigma^2I)$. If the design is random, every finite-sample assertion below is conditional on its realised value and the same conditional error hypotheses.
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

**Theorem 3.1 (Gauss–Markov).** Under the fixed-design linear model with $Cov(\varepsilon |X)=\sigma ^2I$, ordinary least squares has smallest covariance among linear unbiased estimators: if $CY$ is unbiased for $\beta $, then

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


## 17. Why the Gaussian geometry produces t and F laws

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

The four-row design of [The Linear Model and Least Squares](linear-model-least-squares.md), with $t=(-1,0,0,1)^{\mathsf T}$, $y=(0,1,3,4)^{\mathsf T}$, $\hat\beta=(2,2)^{\mathsf T}$, $RSS=2$ and slope test $F=8$, also permits a complete two-restriction calculation. Test $\beta _0=\beta _1=0$, so $R=I_2$, $r=0$, and $q=2$. The restriction quadratic is $\hat \beta ^{\mathsf T}X^{\mathsf T}X\hat \beta =4(2^2)+2(2^2)=24$. Consequently $F=(24/2)/1=12$, compared with $F_{2,2}$ under this joint null.

The all-zero restricted fitted vector has residual sum of squares $\sum_i y_i^2=26$. Subtracting the full-model value two gives the same numerator sum of squares twenty-four. The single-slope test and the joint test answer different hypotheses; their F values eight and twelve need not have a simple ordering by evidential strength because the reference distributions differ.

Inverting the joint F test gives an ellipsoidal confidence region:
\[
(\hat \beta -b)^{\mathsf T}X^{\mathsf T}X(\hat \beta -b)
\le q\,s^2 F_{q,n-p,1-\alpha }
\]
when all $q=p$ coefficients are jointly constrained by $b$. Its coverage is $1-\alpha $ under the stated model. Separate marginal t intervals instead form a rectangle and do not generally give the same simultaneous coverage. The geometric distinction is a probability statement about a joint event, not a matter of plotting style.

A general $R$ describes only the chosen $q$ restrictions. Directions in coefficient space not changed by $R$ are irrelevant to that numerator, although they still belong to the full model and consume fitted degrees of freedom. This is why testing a subgroup of coefficients uses the full-model residual scale rather than pretending the nuisance coefficients were known beforehand.


## Exact inference and its interpretation

For a nonzero estimable contrast $a^\mathsf T\beta$, the confidence interval
$$
a^\mathsf T\hat\beta\ \pm\
t_{n-p,1-\alpha/2}\,s\sqrt{a^\mathsf T(X^\mathsf TX)^{-1}a}
$$
has exact conditional coverage $1-\alpha$ under the Gaussian model. The probability describes repeated response vectors at that fixed design. It is not a posterior probability about the fixed coefficient after an interval is observed.

For $q$ independent restrictions $C\beta=d$, the corresponding F test compares the restricted and unrestricted residual sums of squares. Its numerator measures $q$ additional fitted directions, and its denominator estimates scale using $n-p$ residual directions. The restrictions and model must be specified independently of selecting a favourable outcome from many alternatives. A data-chosen model changes the relevant repeated-sampling event.

An exact pivot under the model is not exact for every real experiment. Dependent errors, unequal variances, misspecified means and informative missingness can invalidate the reference distribution. A large sample does not retroactively make a finite-sample Gaussian statement true; an asymptotic replacement needs its own assumptions.

## Prediction has an additional random component

At a new fixed design row $x_*^\mathsf T$, the estimated conditional mean is $x_*^\mathsf T\hat\beta$. Its variance is $\sigma^2x_*^\mathsf T(X^\mathsf TX)^{-1}x_*$. For a new independent response from the same normal-error mechanism, its error also includes a fresh variance $\sigma^2$. The exact prediction interval therefore replaces the leverage factor $h_*$ by $1+h_*$.

The extra one is not a conservative adjustment selected by taste. It represents the model's new individual error. If the future error is correlated with the observed errors, that derivation changes; if the mean structure changes outside the observed domain, neither interval has its stated scientific interpretation there.

## The scope of optimality

Gauss–Markov compares linear unbiased estimators under spherical covariance. It does not compare biased shrinkage rules, nonlinear procedures or different loss functions. A lower covariance matrix within the named class is not a universal ranking of analyses. Similarly, exact normal-theory inference assumes the complete error distribution, whereas the coefficient mean and covariance derivations require only moments.

This distinction helps diagnose a model criticism. Unequal variances do not destroy the algebraic least-squares fit, but they change its covariance and exact pivot. A nonlinear conditional mean can change the parameter being estimated. Dependence can change both variance and the effective information. State which claim fails before replacing a procedure.

## Worked example 3.1: an intercept-only exact pivot

For independent $N(\mu,\sigma^2)$ observations with $n=6$, the design has one column of ones. Least squares gives $\bar Y$ and $s^2=\sum(Y_i-\bar Y)^2/5$. The standardised mean $(\bar Y-\mu)/(s/\sqrt6)$ has t distribution with five degrees of freedom. The denominator is independent of the numerator because the mean direction and its orthogonal residual space are Gaussian-independent. Using six residual degrees would ignore the estimated intercept.

## Worked example 3.2: two slopes tested together

Suppose a full design has five columns and twenty rows, while the restricted design has three columns. Under the joint null and normal model, $(\mathrm{RSS}_0-\mathrm{RSS}_1)/(2\sigma^2)$ is chi-square with two degrees of freedom, independent of $\mathrm{RSS}_1/\sigma^2$, chi-square with fifteen. Their scaled ratio is $F_{2,15}$. A negative reduction would contradict nesting or indicate that different rows were used, rather than produce a legitimate negative F statistic.

## Worked example 3.3: mean versus new response

At a fixed prediction row let $h_*=1/4$ and observed residual scale be $s=2$. The estimated mean's standard error is $2\sqrt{1/4}=1$, while a new response's predictive standard error is $2\sqrt{5/4}=\sqrt5$. Both use the same t critical value under the same normal model, but the predictive interval is wider because it includes a new individual's error. Increasing the sample may reduce $h_*$ without eliminating that fresh error.

## Conditional and unconditional pivotal distributions

A random design does not automatically invalidate the exact Gaussian t argument. Suppose the design has full column rank almost surely and, conditional on that design, the error vector has the stated centred Gaussian spherical law. For a fixed estimable contrast, the usual studentised statistic then has the same t distribution conditional on every admissible design realisation.

Averaging that conditional probability over the design gives the same unconditional distribution. The argument uses a genuinely common conditional pivot; it does not require replacing the random matrix by its mean. A common error scale that depends on the design can still cancel under the same conditional Gaussian model.

If the design or contrast is chosen using the responses, the required conditional error law need not survive that selection. Conditioning on the chosen model is not the same experiment as conditioning on an externally supplied design. Thus the conditional proof identifies exactly which randomness is harmless and which can change the reference law.

## A simultaneous ellipse differs from separate intervals

For a two-dimensional estimable coefficient under a Gaussian linear model, the exact joint confidence region is an ellipse defined by the appropriate two-restriction F pivot. Each individual coordinate interval obtained from a t pivot has its stated marginal coverage, but the intersection of two such intervals generally does not have that same joint coverage. A union bound only guarantees at least one minus the sum of their two failure probabilities.

The ellipse has another interpretation. By the weighted Cauchy–Schwarz inequality, every contrast displacement within it is bounded by the square root of the ellipse threshold times that contrast's estimated standard deviation. Hence the single region supplies simultaneous bounds for all linear contrasts of the two coordinates. Separate t intervals supply no such all-direction statement. These conclusions require the same fixed design, Gaussian errors and positive residual degrees of freedom as the exact pivot theorem. They concern uncertainty about coefficients, not an interval for a future noisy response.

## Exercises

### Exercise 3.1
<a id="gauss-markov-and-inference-ex-1"></a>

Prove that any linear unbiased estimator C Y must satisfy C X=I.

<details>
<summary>Hint 1</summary>

Its mean must equal beta for every beta.

</details>
<details>
<summary>Hint 2</summary>

A matrix acting as identity on every vector is the identity.

</details>
<details>
<summary>Solution</summary>

Under the model $E(CY)=CX\beta$. Requiring equality to $\beta$ for every possible coefficient vector forces $CX=I$. This condition is the starting point of the Gauss–Markov comparison; unbiasedness at a single selected coefficient value would be a weaker and inadequate assumption.

</details>

### Exercise 3.2
<a id="gauss-markov-and-inference-ex-2"></a>

Explain why the Gauss–Markov covariance difference is positive semidefinite.

<details>
<summary>Hint 1</summary>

Write C=C_0+D with D X=0.

</details>
<details>
<summary>Hint 2</summary>

The cross terms vanish.

</details>
<details>
<summary>Solution</summary>

The covariance difference is $\sigma^2DD^\mathsf T$. For any contrast $a$, its quadratic form is $\sigma^2\|D^\mathsf Ta\|^2\ge0$. Thus every contrast variance is at least the least-squares variance. The statement compares the named class of linear unbiased estimators, not all risk criteria.

</details>

### Exercise 3.3
<a id="gauss-markov-and-inference-ex-3"></a>

With n=18 and p=4 find residual degrees of freedom and the unbiased scale denominator.

<details>
<summary>Hint 1</summary>

The residual projector has complementary rank.

</details>
<details>
<summary>Hint 2</summary>

Its trace equals n-p.

</details>
<details>
<summary>Solution</summary>

The residual rank is fourteen, so $s^2=\mathrm{RSS}/14$. Under spherical covariance, expected RSS is $\sigma^2\operatorname{tr}(I-H)=14\sigma^2$. Gaussian errors additionally make RSS divided by the true variance chi-square with fourteen degrees.

</details>

### Exercise 3.4
<a id="gauss-markov-and-inference-ex-4"></a>

Why are fitted coefficients and residuals independent under normal errors?

<details>
<summary>Hint 1</summary>

They are jointly Gaussian linear transformations.

</details>
<details>
<summary>Hint 2</summary>

Compute their cross-covariance.

</details>
<details>
<summary>Solution</summary>

The coefficient error is $A\varepsilon$ with $A=(X^\mathsf TX)^{-1}X^\mathsf T$, while the residual is $M\varepsilon$. Their covariance is $\sigma^2AM=0$. Joint Gaussianity makes these zero cross-covariances sufficient for independence. Without joint normality, zero covariance alone would not establish it.

</details>

### Exercise 3.5
<a id="gauss-markov-and-inference-ex-5"></a>

What reference law applies to a single predeclared zero-contrast test?

<details>
<summary>Hint 1</summary>

Standardise its normal numerator.

</details>
<details>
<summary>Hint 2</summary>

Use the independent residual scale.

</details>
<details>
<summary>Solution</summary>

The ratio is t with $n-p$ degrees of freedom under the normal model. Squaring it gives an F variable with one and $n-p$ degrees of freedom. Both laws depend on the contrast being estimable and nonzero in the fitted parameter space.

</details>

### Exercise 3.6
<a id="gauss-markov-and-inference-ex-6"></a>

Can one use the exact F formula to compare two unrelated designs of the same rank?

<details>
<summary>Hint 1</summary>

The difference of their projectors need not be a projector.

</details>
<details>
<summary>Hint 2</summary>

Nestedness supplied the nonnegative chi-square numerator.

</details>
<details>
<summary>Solution</summary>

Not in general. For unrelated subspaces the residual-sum difference may be negative and need not be a scaled chi-square independent of the full residual. The standard exact F argument requires nested model spaces or equivalent linear restrictions within a full model.

</details>

### Exercise 3.7
<a id="gauss-markov-and-inference-ex-7"></a>

For an intercept-only normal model derive the new-response prediction standard error.

<details>
<summary>Hint 1</summary>

Its mean estimate has variance sigma squared over n.

</details>
<details>
<summary>Hint 2</summary>

Add an independent future observation's variance.

</details>
<details>
<summary>Solution</summary>

The variance of $Y_*-\bar Y$ is $\sigma^2(1+1/n)$. Replacing scale by the independent residual estimate gives predictive standard error $s\sqrt{1+1/n}$ and a t pivot with $n-1$ degrees of freedom. The confidence interval for the mean instead uses $s/\sqrt n$.

</details>

### Exercise 3.8
<a id="gauss-markov-and-inference-ex-8"></a>

Does spherical covariance alone establish the t distribution?

<details>
<summary>Hint 1</summary>

It fixes second moments, not the complete law.

</details>
<details>
<summary>Hint 2</summary>

The normal numerator and chi-square denominator need Gaussian geometry.

</details>
<details>
<summary>Solution</summary>

No. The estimator remains unbiased with the stated covariance, and the residual scale remains unbiased under the correct mean. Exact t inference additionally needs the Gaussian projection distributions and independence. An approximate large-sample procedure would be a separate theorem with its own assumptions.

</details>

### Exercise 3.9
<a id="gauss-markov-and-inference-ex-9"></a>

Why does selecting the largest t statistic change its null law?

<details>
<summary>Hint 1</summary>

The selected event includes all comparisons made.

</details>
<details>
<summary>Hint 2</summary>

A fixed contrast and a random choice of contrast are different procedures.

</details>
<details>
<summary>Solution</summary>

Each predeclared statistic can have the usual t marginal law, but their maximum is a different random variable. Reporting its unadjusted marginal tail ignores selection and generally understates the chance of a false discovery. The full selection rule belongs in the reference procedure.

</details>

### Exercise 3.10
<a id="gauss-markov-and-inference-ex-10"></a>

What happens to residual-scale estimation when p=n and the design is invertible?

<details>
<summary>Hint 1</summary>

The fitted space is all observation space.

</details>
<details>
<summary>Hint 2</summary>

There are no residual directions.

</details>
<details>
<summary>Solution</summary>

The fit interpolates every response, leaving RSS zero and residual degrees zero. Dividing by $n-p$ is undefined. The data provide no independent residual scale estimate under this saturated design. Exact known-variance contrasts remain another question, but the usual unknown-scale t and F construction is unavailable.

</details>

## Summary

Spherical moments establish least-squares means, covariances and Gauss–Markov optimality within its stated class. Gaussian orthogonal projections supply exact scale, t and F laws. Prediction adds new-response variation. Model choice, design changes and selection must remain part of the claimed inferential procedure.
