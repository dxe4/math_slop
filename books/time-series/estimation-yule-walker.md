
# Estimation and the Yule-Walker Equations

An AR equation can be read as a prediction equation: past centred values explain a current centred value, and the innovation is orthogonal to that past. Taking covariances turns this statement into linear equations for the AR coefficients. Those Yule–Walker equations are useful both as a population identity and as a finite-sample estimator. We prove the equations, solve small examples, and separate parameter calculation from claims about sampling accuracy. The distinction is essential because estimating an order, a mean and covariances from the same short series creates uncertainty that a clean algebraic solution cannot show.

Read [ARMA Models](arma-models.md) and [Regression: geometry of projection](../regression-and-generalised-linear-models/geometry-of-projection.md). The process is weakly stationary, real-valued and has finite second moments. Its centred form is Y_t=X_t-mu. For an AR(p), assume epsilon_t is uncorrelated with Y_{t-1},Y_{t-2},... and has variance sigma². This orthogonality follows from a causal white-noise representation under the usual assumptions; it should not be inferred from the word “residual” alone.

## Orthogonality yields linear equations

**Theorem 4.1 (Yule–Walker equations).** If Y_t=sum_{j=1}^p phi_jY_{t-j}+epsilon_t and the innovation is orthogonal to every past Y, then for k≥1, gamma(k)=sum_{j=1}^p phi_j gamma(k-j). At k=0, gamma(0)=sum_{j=1}^p phi_j gamma(j)+sigma².

*Proof.* Multiply the recursion by Y_{t-k} and take expectation. All variables are centred. For k≥1, the innovation term has zero covariance with Y_{t-k}; the jth lagged term gives Cov(Y_{t-j},Y_{t-k})=gamma(k-j), using symmetry if the difference is negative. At k=0, multiply by Y_t. The right-side lag terms give phi_j gamma(j); the innovation term has E[epsilon_t Y_t]=E[epsilon_t(sum phi_jY_{t-j}+epsilon_t)]=sigma² by orthogonality to the past. This yields the variance equation. ∎

For k=1,...,p, put gamma_vec=(gamma(1),...,gamma(p)) and Gamma_p with (i,j) entry gamma(i-j). The equations become Gamma_p phi=gamma_vec. Gamma_p is a covariance matrix and hence positive semidefinite. If it is positive definite, the solution phi=Gamma_p^{-1}gamma_vec is unique. If it is singular, a unique coefficient vector need not exist; blindly calling a numerical inverse is not a mathematical solution. The innovation variance then follows as gamma(0)-sum_j phi_j gamma(j), which must be nonnegative in a valid model.

**Worked example 4.2 (AR(1) from population moments).** Suppose a stationary process has gamma(0)=9 and gamma(1)=6 and we propose a causal AR(1). The lag-one equation gives phi=6/9=2/3. The variance equation gives sigma²=9-(2/3)6=5. Check the model's implied lag-two covariance: gamma(2)=phi gamma(1)=4. If an independently specified population gamma(2) were not four, these moments could not all come from this AR(1) model. The calculation identifies a candidate parameter under the model assumption; it does not infer causality or stationarity merely from two numbers.

**Worked example 4.3 (A two-lag system).** Let gamma(0)=5, gamma(1)=2, gamma(2)=1. For p=2, the equations are 5phi_1+2phi_2=2 and 2phi_1+5phi_2=1. The determinant is 25-4=21>0. Solving gives phi_1=(10-2)/21=8/21 and phi_2=(5-4)/21=1/21. The innovation variance computed from the variance equation is 5-(8/21)2-(1/21)1=5-17/21=88/21. Its positivity is necessary, though not sufficient alone, for the proposed infinite AR process to be causal. One must also inspect the roots of 1-(8/21)z-(1/21)z² for the causal stability condition.

The matrix method is not a special trick for p=2. It is the normal-equation method for the best linear prediction of Y_t from p past values. The coefficient vector minimizes E[(Y_t-a_1Y_{t-1}-...-a_pY_{t-p})²]. Differentiating the quadratic in a or using projection orthogonality gives Gamma_p a=gamma_vec. If Gamma_p is positive definite, the quadratic is strictly convex and has the unique minimizer above. For a true causal AR(p), the innovation is already orthogonal to the full past, so this finite projection recovers its coefficients.

**Proposition 4.4 (Nonnegative prediction error).** Under a positive-definite Gamma_p, the minimum one-step linear prediction error variance is gamma(0)-gamma_vec transposed Gamma_p^{-1} gamma_vec, and is nonnegative.

*Proof.* Expand the error variance as gamma(0)-2a transposed gamma_vec+a transposed Gamma_p a. At the normal-equation solution a=Gamma_p^{-1}gamma_vec, substitution leaves the displayed expression. It is a variance, so it cannot be negative. For a valid AR(p) it equals sigma². ∎

## From population equations to estimates

Given x_1,...,x_n, estimate the mean by xbar and the lag covariance by c_n(h)=n^{-1}sum_{t=h+1}^n(x_t-xbar)(x_{t-h}-xbar). Insert c_n into the Toeplitz system to obtain the Yule–Walker estimate. For AR(1), the formula is simply phihat=c_n(1)/c_n(0), provided c_n(0)>0. The estimated innovation variance is c_n(0)(1-phihat²) in this one-lag calculation. These are finite-sample functions of the data; they are not exact population equalities.

**Worked example 4.5 (A five-point empirical calculation).** Take the invented series (2,3,4,3,2). Its mean is 14/5=2.8 and centred values are (-0.8,0.2,1.2,0.2,-0.8). The squared deviations sum to 2.8, so c_5(0)=2.8/5=0.56. Adjacent cross-products are -0.16,0.24,0.24,-0.16, summing to 0.16; hence c_5(1)=0.032. The AR(1) Yule–Walker estimate is 0.032/0.56=2/35, about 0.0571. A reader might see a rise then fall in the plotted five points, but the lag-one estimate under this denominator is near zero because the positive and negative adjacent products nearly cancel. This tiny sample cannot support a precise population parameter claim.

The fixed-n covariance convention is not incidental. Replacing its lag-one denominator by n-1 changes the ratio while leaving the variance denominator n, and some finite-sample constraints can fail. In particular, the fixed-n c_n sequence has a nonnegative-definite Toeplitz extension: if centred observations are set to zero outside 1,...,n, then for any finite filter coefficients, the sum of squared filtered values expands into a nonnegative quadratic form in the c_n lags. This does not guarantee a nonsingular Gamma_p; constant data or too few independent directions can make the system singular.

**Proposition 4.6 (AR(1) sample bound).** For the fixed-n sample autocovariance and nonconstant data, |c_n(1)|≤c_n(0), so |phihat|≤1.

*Proof.* Write z_t=x_t-xbar, extending by zero outside the observed range. The numerator sum_{t=2}^n z_t z_{t-1} is an inner product of two shifted finite sequences. Cauchy–Schwarz bounds its magnitude by the product of their Euclidean norms, each no greater than the norm of the full z sequence. Dividing by n gives |c_n(1)|≤n^{-1}sum z_t²=c_n(0). The ratio exists when the sample is nonconstant. ∎

The equality case at ±1 is unusual and does not by itself establish a stable causal fitted model. More generally, a computed Yule–Walker coefficient vector is an estimate under an AR(p) approximation. A model check asks whether its implied covariance, residual pattern and forecast behaviour are adequate. Raising p can improve in-sample fit while worsening prediction by estimating unnecessary parameters. The choice of p should use a declared comparison method and a time-respecting evaluation.

## Conditional least squares and likelihood

An alternative fits x_t-mu against p past centred observations by least squares over t=p+1,...,n. It minimizes a conditional residual sum and depends on how mu and initial observations are treated. Yule–Walker uses sample covariance equations instead, so the two estimates need not match in a finite sample. Under suitable stationary regularity conditions both may target the same population AR coefficients, but their small-sample biases and uncertainty differ. Neither method makes residuals independent by definition.

If innovations are Gaussian and an initial-state distribution is specified, a Gaussian likelihood can be written for the observations. A conditional likelihood instead treats initial values as given or handles them approximately. The difference matters for short samples and near-unit-root parameters. Under non-Gaussian innovations, Gaussian likelihood can still be used as a criterion for second-moment fitting, but exact distributional confidence claims then require separate justification. We do not prove general likelihood asymptotics here; they need mixing, root and identifiability assumptions beyond the linear equations.

## A finite comparison of two estimators

The five-point example makes the distinction between Yule–Walker and conditional least squares exact. Keep the estimated mean 2.8 fixed and regress the four centred responses z_2,...,z_5 on z_1,...,z_4 without an additional intercept. The numerator is the same adjacent product sum 0.16. The regressor squared sum, however, excludes the final centred value: 0.64+0.04+1.44+0.04=2.16. The conditional least-squares slope is therefore 0.16/2.16=2/27, approximately 0.0741, while Yule–Walker gave 2/35, approximately 0.0571. Both use the same invented observations, the same centred values, and a one-lag model. Their difference comes from the different denominator and the conditional treatment of the first observation.

If one instead estimates the intercept jointly with the slope on the four response-regressor pairs, the result changes again because the response and regressor sample means are not both 2.8 after dropping an endpoint. There is no contradiction: the objective function and nuisance-parameter convention have changed. For long stationary ergodic series under suitable moment and stability conditions, such endpoint effects may diminish, but that conclusion requires an asymptotic argument. Five constructed points cannot demonstrate it. A coefficient report should state the estimating equation, the mean treatment, the time range used and any numerical constraints imposed on roots.

The innovation variance estimate also depends on the fitting convention. Plugging the Yule–Walker coefficient into c_5(0)-phi_hat c_5(1) is a covariance-equation estimate; averaging four conditional squared residuals uses another divisor and a different initial-value treatment. Neither is an exact unbiased estimate in all stationary AR models. This distinction becomes especially visible when the sample is short enough that one or two omitted initial terms form a substantial fraction of the data.

At lag h, only n-h adjacent pairs at that separation are observed. A high-order AR fit may therefore use empirical covariances based on very few pairs even though its Toeplitz system has p rows. Positive definiteness of the population matrix does not guarantee a well-conditioned estimated matrix. If two fitted lag columns nearly repeat one another, small covariance perturbations can cause large coefficient changes. That is the time-series version of collinearity in regression. Reduce the order, gather more data, or report the instability; do not present many digits from a numerically fragile inversion as precise scientific information.

## Reproducible base-R calculation

This listing contains the five invented observations and computes the chapter's fixed-n covariance convention directly. It is a self-contained teaching recipe; no execution or fitted output is claimed in this source-authoring pass.

```r
x <- c(2, 3, 4, 3, 2)
z <- x - mean(x)
n <- length(z)
c0 <- sum(z * z) / n
c1 <- sum(z[2:n] * z[1:(n-1)]) / n
phi_hat <- c1 / c0
sigma2_hat <- c0 - phi_hat * c1
data.frame(c0, c1, phi_hat, sigma2_hat)
```

For a higher order, build a Toeplitz matrix from c_n(0),...,c_n(p-1) and solve against c_n(1),...,c_n(p), but first inspect whether the matrix is singular or numerically ill-conditioned. A routine returning a vector is not evidence that its assumptions hold. Report the lag convention and the fitted mean treatment alongside coefficients, especially when comparing with software defaults.

## Exercises

### Exercise 4.1 {#estimation-yule-walker-ex-lag-one}

Derive the lag-one Yule–Walker equation for AR(1).
<details><summary>Hint 1</summary>Multiply Y_t=phi Y_{t-1}+epsilon_t by Y_{t-1}.</details>
<details><summary>Hint 2</summary>Use innovation orthogonality to Y_{t-1}.</details>
<details><summary>Solution</summary>Taking expectations gives E[Y_tY_{t-1}]=phi E[Y_{t-1}²]+E[epsilon_tY_{t-1}]. The last term is zero, so gamma(1)=phi gamma(0), yielding phi=gamma(1)/gamma(0) when gamma(0)>0.</details>

### Exercise 4.2 {#estimation-yule-walker-ex-variance}

For AR(1) gamma(0)=10 and gamma(1)=5, find phi and innovation variance.
<details><summary>Hint 1</summary>First divide lag-one by lag-zero covariance.</details>
<details><summary>Hint 2</summary>Use sigma²=gamma(0)-phi gamma(1).</details>
<details><summary>Solution</summary>phi=5/10=1/2. Then sigma²=10-(1/2)5=15/2. The implied causal root condition holds because |phi|<1.</details>

### Exercise 4.3 {#estimation-yule-walker-ex-ar-two}

Write the Yule–Walker matrix for an AR(2) with gamma(0)=4, gamma(1)=1, gamma(2)=0.
<details><summary>Hint 1</summary>The first row uses lag zero and lag one.</details>
<details><summary>Hint 2</summary>The right-hand vector uses lags one and two.</details>
<details><summary>Solution</summary>The system is [[4,1],[1,4]] times (phi_1,phi_2) transposed equals (1,0) transposed. Its determinant is fifteen, so the coefficient solution is unique.</details>

### Exercise 4.4 {#estimation-yule-walker-ex-ar-two-solve}

Solve the AR(2) system of Exercise 4.3.
<details><summary>Hint 1</summary>The second equation gives phi_1=-4phi_2.</details>
<details><summary>Hint 2</summary>Substitute into the first equation.</details>
<details><summary>Solution</summary>From phi_1+4phi_2=0, substitute phi_1=-4phi_2 into 4phi_1+phi_2=1. Then -15phi_2=1, so phi_2=-1/15 and phi_1=4/15.</details>

### Exercise 4.5 {#estimation-yule-walker-ex-error-variance}

Using Exercise 4.4, compute the innovation variance implied by the displayed moments.
<details><summary>Hint 1</summary>Use gamma(0)-phi_1gamma(1)-phi_2gamma(2).</details>
<details><summary>Hint 2</summary>Here gamma(2)=0.</details>
<details><summary>Solution</summary>The value is 4-(4/15)1-(-1/15)0=56/15, which is positive. Positivity checks the projection-error calculation but does not alone prove a causal root condition.</details>

### Exercise 4.6 {#estimation-yule-walker-ex-sample-mean}

Find the sample mean and c_5(0) for (2,3,4,3,2).
<details><summary>Hint 1</summary>The sum of observations is fourteen.</details>
<details><summary>Hint 2</summary>Square deviations from 2.8 and divide their sum by five.</details>
<details><summary>Solution</summary>The mean is 14/5=2.8. Deviations are (-0.8,0.2,1.2,0.2,-0.8); their squares sum to 2.8, giving c_5(0)=0.56.</details>

### Exercise 4.7 {#estimation-yule-walker-ex-sample-lag}

Compute c_5(1) for the same data using the chapter's fixed-n denominator.
<details><summary>Hint 1</summary>Multiply adjacent centred values.</details>
<details><summary>Hint 2</summary>The four products sum to 0.16; divide by five.</details>
<details><summary>Solution</summary>The adjacent products are -0.16,0.24,0.24,-0.16. Their sum is 0.16, so c_5(1)=0.032. The AR(1) Yule–Walker estimate is c_5(1)/c_5(0)=2/35.</details>

### Exercise 4.8 {#estimation-yule-walker-ex-singular}

Why is a constant observed series unsuitable for the AR(1) Yule–Walker ratio?
<details><summary>Hint 1</summary>Center the observations at their sample mean.</details>
<details><summary>Hint 2</summary>Check c_n(0), the ratio denominator.</details>
<details><summary>Solution</summary>Every centred observation is zero, so c_n(0)=0 and c_n(1)=0. The ratio is 0/0 and undefined. Returning zero as a parameter would conceal the absence of sample variation.</details>

### Exercise 4.9 {#estimation-yule-walker-ex-projection}

Show why the Yule–Walker solution minimizes a quadratic one-step prediction error when Gamma_p is positive definite.
<details><summary>Hint 1</summary>Expand E[(Y_t-a^T past)²].</details>
<details><summary>Hint 2</summary>Set its gradient -2gamma_vec+2Gamma_p a to zero.</details>
<details><summary>Solution</summary>The objective is gamma(0)-2a^Tgamma_vec+a^TGamma_p a. Its stationary point solves Gamma_p a=gamma_vec. Positive definiteness makes the quadratic strictly convex, so that point is the unique global minimizer.</details>

### Exercise 4.10 {#estimation-yule-walker-ex-methods}

Why may conditional least squares and Yule–Walker give different coefficients on the same short series?
<details><summary>Hint 1</summary>Compare which observations and denominators each criterion uses.</details>
<details><summary>Hint 2</summary>Check how the mean and initial p values enter.</details>
<details><summary>Solution</summary>Conditional least squares minimizes residual squares only from t=p+1 onward, conditional on initial values and a mean convention. Yule–Walker inserts whole-series sample covariance estimates into population projection equations. These finite-sample objectives differ, so their coefficient estimates need not agree even when they target the same population model under suitable asymptotics.</details>

## Sources

Original Euler derivations, invented five-point example and exercises under CC BY-SA 4.0. Standard AR estimation terminology follows Brockwell and Davis, *Time Series: Theory and Methods*, second edition. No numerical output from R or external dataset is asserted.

## Summary

Innovation orthogonality yields the Yule–Walker normal equations and a nonnegative projection-error variance. Replacing population covariances by fixed-n sample covariances produces an estimator whose existence and interpretation depend on variation and matrix rank. The equations do not settle model order, sampling uncertainty or adequacy. Forecasting next uses the same orthogonality to compute best linear predictions and their error variances.
