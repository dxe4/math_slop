
# Multivariate Series and Cointegration

Several series observed together can carry information that none contains alone. A cross-covariance records the direction and lag of dependence between components; a vector autoregression lets past values of several components predict a future vector. Nonstationary levels create a different question: can a particular linear combination stay stationary even while each component wanders? Cointegration answers that question under explicit integration assumptions. This chapter proves finite vector covariance and VAR identities, constructs a transparent common-trend example, and treats general cointegration inference as a separate imported subject.

Read [stationarity](stationarity-autocovariance.md), [ARMA models](arma-models.md), and [regression projection](../regression-and-generalised-linear-models/geometry-of-projection.md). A vector X_t has d components in a fixed order and a mean vector mu. Vectors are columns. The matrix Gamma(h)=E[(X_{t+h}-mu)(X_t-mu)^T] has row index for the future-side component and column index for the origin-side component. Reversing that convention transposes lag signs, so we keep it explicit. All components have finite second moments when covariance is used.

## Vector covariance and lag direction

**Definition 10.1 (Weak vector stationarity).** A vector process X_t is weakly stationary if E[X_t]=mu is constant and Gamma(h)=Cov(X_{t+h},X_t) depends only on h. The matrix Gamma(0) is symmetric positive semidefinite. For h≠0, Gamma(h) need not be symmetric: dependence from component one today to component two tomorrow can differ from the reverse direction.

**Proposition 10.2 (Lag transpose).** Every weakly stationary vector process satisfies Gamma(-h)=Gamma(h)^T. For any finite vector coefficients at selected times, the resulting block covariance matrix is positive semidefinite.

*Proof.* Cov(X_{t-h},X_t)=Cov(X_t,X_{t-h})^T by the covariance transpose identity. Shifting the origin gives the displayed relation. A block quadratic form is the variance of a real linear combination of all selected component values, hence is nonnegative. ∎

A large sample cross-correlation at one lag does not establish a directional causal mechanism. It may reflect a common driver, common seasonality, measurement delay, or selection of the most impressive lag after inspection. Even in a well-specified vector autoregression, a coefficient on another series describes conditional linear prediction given the included past, not an intervention effect. The mathematical benefit is more modest and precise: additional past components can reduce a mean-square forecast error if they supply information beyond the target's own past.

The cross-lag construction in Worked example 10.3 makes that predictive benefit exact. Because Y_{t+1}=epsilon_t+eta_{t+1} and X_t=epsilon_t, the conditional mean of Y_{t+1} given X_t under the independent-noise model is X_t, with error eta_{t+1} of variance one. Without X_t, and using only past Y values, the next Y has mean zero and variance two: Y_t uses epsilon_{t-1} and eta_t, independent of the two shocks in Y_{t+1}. Thus adding X_t halves the one-step mean-square prediction error from two to one in this constructed population model. The improvement is a prediction statement derived from the specified shocks; it still does not say that intervening on X_t would alter Y_{t+1}.

For real aligned observations, a one-step cross-predictor should be estimated on an earlier window and compared with a univariate baseline on later origins. Selecting whichever lag has the largest sample cross-correlation and evaluating it on those same observations would reuse the target information. Also, if X_t is measured or published after Y_{t+1} must be forecast, the algebraic predictor is unavailable in the actual information set. The timestamp and release schedule therefore matter as much as the covariance formula.

**Worked example 10.3 (Asymmetric cross-lag).** Let epsilon_t and eta_t be independent mean-zero variance-one white-noise sequences. Set X_t=epsilon_t and Y_t=epsilon_{t-1}+eta_t. Both component means are zero, Var(X_t)=1 and Var(Y_t)=2. Gamma(1) with component order (X,Y) has entry (row Y, column X) equal to Cov(Y_{t+1},X_t)=Cov(epsilon_t+eta_{t+1},epsilon_t)=1. Its (row X, column Y) entry is Cov(epsilon_{t+1},epsilon_{t-1}+eta_t)=0. The lag-one cross-covariance matrix is asymmetric, while Gamma(-1) is its transpose. This construction creates directional predictability by definition, without claiming that a real measured X would causally produce Y.

## A stable vector autoregression

**Definition 10.4 (VAR(1)).** A centred vector process Y_t=X_t-mu obeys Y_t=A Y_{t-1}+epsilon_t, where A is a d-by-d coefficient matrix and epsilon_t is vector white noise with covariance Sigma, orthogonal to the past. If every eigenvalue of A has modulus less than one, a causal stationary solution is Y_t=sum_{j≥0}A^j epsilon_{t-j} under standard finite second-moment conditions.

**Theorem 10.5 (VAR covariance equations).** For this causal stable solution, Gamma(0)=A Gamma(0) A^T+Sigma, and Gamma(h)=A^h Gamma(0) for every h≥0.

*Proof.* Separate Y_t=A Y_{t-1}+epsilon_t. Orthogonality of epsilon_t to the past removes cross terms in Var(Y_t), yielding Gamma(0)=A Gamma(0) A^T+Sigma by stationarity. For h≥1, write Y_{t+h}=A Y_{t+h-1}+epsilon_{t+h}. Its future innovation is orthogonal to Y_t, so Gamma(h)=A Gamma(h-1); induction gives A^h Gamma(0). The stable matrix powers and finite innovation covariance justify the causal series and its covariance sums. ∎

For nonnormal matrices, simply observing that each diagonal coefficient is small is not a general stability check. The condition concerns eigenvalues of the full A, and transient amplification can occur even when all eigenvalues are within the unit circle. The matrix equation for Gamma(0) is a discrete Lyapunov equation. If Sigma is positive semidefinite and A is stable, its solution is the convergent sum over j≥0 of A^j Sigma (A^T)^j, showing positive semidefiniteness directly. A nonsingular Sigma and suitable controllability give positive definiteness, but singular noise may leave deterministic directions.

**Worked example 10.6 (Two uncoupled AR components).** Take A diagonal with entries 1/2 and -1/2, and Sigma diagonal with entries three and three. Each component has stationary variance 3/(1-1/4)=4, so Gamma(0)=diag(4,4). Then Gamma(1)=A Gamma(0)=diag(2,-2) and Gamma(2)=diag(1,1). The first component is positively persistent and the second alternates, although both have the same marginal variance. All cross-component covariances vanish in this uncoupled example. A nonzero off-diagonal A or Sigma would change that conclusion, even if the two marginal variances stayed similar.

## Integrated levels and stationary combinations

**Definition 10.7 (Integration and cointegration).** A scalar series is integrated of order one, I(1), in the model sense used here if its first difference is stationary while its level has no finite-variance weakly stationary representation of the intended type. A vector of I(1) components is cointegrated if a nonzero vector b makes b^T X_t stationary. The vector b is a cointegrating vector and is defined only up to nonzero scale; its normalisation must be stated before interpreting a coefficient.

This definition is not satisfied merely because two sample curves move together. Their levels may share a deterministic trend, a seasonal cycle, or a common reporting artifact. The I(1) assumption is substantive and can be difficult to distinguish from a persistent stationary process or a structural break in finite data. A regression of one unrelated random-walk level on another can appear impressive because both wander slowly; ordinary stationary-regression reference distributions do not then apply. We do not give a p-value for cointegration from an invented six-point path.

**Theorem 10.8 (A common stochastic trend).** Let S_t=S_{t-1}+u_t with fixed S_0 and independent mean-zero innovations of positive finite variance. Let a_t and b_t be jointly stationary finite-variance processes independent of S, and define X_t=S_t+a_t and Y_t=2S_t+b_t. Then Y_t-2X_t=b_t-2a_t is stationary. Each level contains the nonstationary common random-walk component under the stated independence and finite-variance assumptions.

*Proof.* Subtract twice X_t from Y_t; the S_t terms cancel exactly. A fixed linear combination of jointly stationary a_t,b_t is stationary because its finite-dimensional laws inherit common-shift invariance; if only weak joint stationarity is given, the same argument establishes weak stationarity of the combination. For the levels, Var(S_t)=t Var(u_1). Independence from the stationary noises gives Var(X_t)=t Var(u_1)+Var(a_t), which changes without bound. Likewise Var(Y_t)=4t Var(u_1)+Var(b_t). Thus neither level is weakly stationary, while their stated combination is. ∎

**Worked example 10.9 (A finite path and its spread).** Take an invented common path S=(0,1,3,2), stationary-noise illustration a=(1,0,-1,0) and b=(0,1,0,-1). The resulting finite observed vectors are X=(1,1,2,2) and Y=(0,3,6,3). Their spread Y-2X=(-2,1,2,-1), equal position by position to b-2a. These four numbers demonstrate cancellation but cannot establish that the finite a and b lists are realizations of stationary processes. The theorem supplies the stochastic assumptions separately. A different normalisation, such as (1,-1/2) acting on (X,Y), expresses the same stationary direction up to scale.

The model also shows why cointegration can matter for forecasting: the spread is not allowed to drift indefinitely in the stated stationary construction, while the shared level can. An error-correction equation makes such return-to-spread behaviour explicit. But the mere existence of a stationary spread does not specify which component adjusts after a deviation or at what rate. That adjustment must be modelled and estimated; it cannot be read from the algebraic cancellation alone.

**Proposition 10.10 (No stationary nontrivial combination of independent walks).** If X_t and Y_t are independent random walks from fixed initial values with independent increment variances v_X>0 and v_Y>0, then aX_t+bY_t has variance t(a²v_X+b²v_Y). It is weakly stationary only when a=b=0.

*Proof.* Independence removes the cross covariance of the two cumulative sums. Each walk variance grows linearly with t, so the stated combination variance follows. For a nonzero pair (a,b), the coefficient of t is strictly positive, contradicting constant variance. ∎

This counterexample emphasizes that differencing each component to stationarity is not enough for cointegration. The components need a shared stochastic trend that a particular combination cancels. General rank tests and asymptotic distributions for estimated cointegrating vectors are deep results depending on innovation, deterministic-term and lag assumptions; they are imported from the econometric time-series literature rather than proved by the finite path above.

## A source-owned R recipe

The listing performs the finite common-trend arithmetic without external data or packages. It is an inert source example. Its numeric lists are invented; they carry no empirical license or stationarity claim beyond the book's CC BY-SA 4.0 attribution.

```r
common <- c(0, 1, 3, 2)
a <- c(1, 0, -1, 0)
b <- c(0, 1, 0, -1)
x <- common + a
y <- 2 * common + b
spread <- y - 2 * x
data.frame(time = seq_along(x), common, x, y, spread,
           noise_spread = b - 2 * a)
```

For observed multivariate data, align timestamps and units before forming a vector. A cross-covariance at lag one is meaningless if one column is measured at day end and another at day start without a stated alignment. Missing observations require a joint treatment; independently dropping rows from each series can change which dates a lagged pair represents. A model's forecast evaluation must use contemporaneously available information, not values released later under a misleading timestamp.

## Exercises

### Exercise 10.1 {#multivariate-series-cointegration-ex-transpose}

Why must Gamma(-h)=Gamma(h)^T for a weak vector-stationary process?
<details><summary>Hint 1</summary>Swap the two vector arguments of covariance.</details>
<details><summary>Hint 2</summary>Use the common time shift to relabel the origin.</details>
<details><summary>Solution</summary>Cov(X_t,X_{t+h})=Cov(X_{t+h},X_t)^T. The left side is Gamma(-h) after taking t+h as origin, and the right side is Gamma(h)^T. Thus the matrices are lag-transposes, not individually symmetric at nonzero lag.</details>

### Exercise 10.2 {#multivariate-series-cointegration-ex-crosslag}

In Worked example 10.3, compute Cov(Y_{t+1},X_t).
<details><summary>Hint 1</summary>Substitute Y_{t+1}=epsilon_t+eta_{t+1}.</details>
<details><summary>Hint 2</summary>Use independence of eta and epsilon.</details>
<details><summary>Solution</summary>Cov(epsilon_t+eta_{t+1},epsilon_t)=Var(epsilon_t)+0=1. The reverse ordered lag-one covariance is zero in this construction.</details>

### Exercise 10.3 {#multivariate-series-cointegration-ex-var}

For a stable VAR(1) with A=0.5 I and Sigma=3 I in two dimensions, find Gamma(0).
<details><summary>Hint 1</summary>Each component solves the scalar AR(1) variance equation.</details>
<details><summary>Hint 2</summary>Solve v=0.25v+3.</details>
<details><summary>Solution</summary>v=4, so Gamma(0)=4I. The independent equal-noise components have zero cross covariance under this diagonal construction.</details>

### Exercise 10.4 {#multivariate-series-cointegration-ex-lag}

For the diagonal A in Worked example 10.6, compute Gamma(1).
<details><summary>Hint 1</summary>Use Gamma(1)=A Gamma(0).</details>
<details><summary>Hint 2</summary>Multiply diag(1/2,-1/2) by diag(4,4).</details>
<details><summary>Solution</summary>Gamma(1)=diag(2,-2). The second component has negative lag-one covariance despite its positive marginal variance four.</details>

### Exercise 10.5 {#multivariate-series-cointegration-ex-lyapunov}

Explain why the stable VAR covariance sum over j≥0 of A^j Sigma(A^T)^j is positive semidefinite.
<details><summary>Hint 1</summary>Apply a test vector c to one summand.</details>
<details><summary>Hint 2</summary>Rewrite as a quadratic form in Sigma.</details>
<details><summary>Solution</summary>For any c, c^T A^j Sigma(A^T)^j c=((A^T)^j c)^T Sigma((A^T)^j c)≥0 because Sigma is positive semidefinite. Each partial sum is positive semidefinite, and its convergent limit remains so.</details>

### Exercise 10.6 {#multivariate-series-cointegration-ex-spread}

For X_t=S_t+a_t and Y_t=2S_t+b_t, find a stationary linear combination under the theorem's assumptions.
<details><summary>Hint 1</summary>Choose coefficients that cancel S_t.</details>
<details><summary>Hint 2</summary>Subtract twice X_t from Y_t.</details>
<details><summary>Solution</summary>Y_t-2X_t=b_t-2a_t. Since a_t and b_t are jointly stationary, their fixed linear combination is stationary. The common random-walk trend cancels exactly.</details>

### Exercise 10.7 {#multivariate-series-cointegration-ex-normalization}

Why do vectors (-2,1) and (1,-1/2) define the same cointegrating direction for component order (X,Y)?
<details><summary>Hint 1</summary>Multiply one vector by a nonzero scalar.</details>
<details><summary>Hint 2</summary>Compare their resulting linear combinations.</details>
<details><summary>Solution</summary>(1,-1/2)=(-1/2)(-2,1). Its spread X-Y/2 is -1/2 times Y-2X. Multiplying a stationary series by a nonzero constant preserves stationarity, so the directions differ only in normalisation.</details>

### Exercise 10.8 {#multivariate-series-cointegration-ex-independent}

Why are independent positive-variance random walks not cointegrated by any nonzero pair of coefficients?
<details><summary>Hint 1</summary>Compute the variance of aX_t+bY_t.</details>
<details><summary>Hint 2</summary>Independence removes the cross term.</details>
<details><summary>Solution</summary>The variance is t(a²v_X+b²v_Y). If (a,b) is nonzero and both increment variances are positive, the coefficient of t is positive, so variance grows with time and the combination is not weakly stationary.</details>

### Exercise 10.9 {#multivariate-series-cointegration-ex-finite}

Compute the four spread values for the finite path in Worked example 10.9.
<details><summary>Hint 1</summary>Use Y=(0,3,6,3) and X=(1,1,2,2).</details>
<details><summary>Hint 2</summary>Subtract twice each X entry from the corresponding Y entry.</details>
<details><summary>Solution</summary>Y-2X=(-2,1,2,-1), matching b-2a entry by entry. The finite equality illustrates algebraic cancellation but does not test process stationarity.</details>

### Exercise 10.10 {#multivariate-series-cointegration-ex-causality}

Does a nonzero lagged cross-covariance prove that intervening on one series changes the other? Explain using the chapter's model language.
<details><summary>Hint 1</summary>Cross-covariance is an observational second-moment property.</details>
<details><summary>Hint 2</summary>Consider a shared driver or measurement delay.</details>
<details><summary>Solution</summary>No. Lagged cross-covariance can arise from a common cause, aligned seasonality or a reporting delay without an intervention effect. A vector model can describe conditional prediction, while causal claims require an intervention design or additional structural assumptions.</details>

## Sources

Original Euler vector covariance proofs, invented paths and exercises under CC BY-SA 4.0. The multivariate time-series and state-space route is benchmarked against Brockwell and Davis, *Time Series: Theory and Methods*, second edition. General cointegration rank inference is identified as an import; no external dataset or executed numerical estimate is claimed.

## Summary

Vector stationarity gives lag-transposed cross-covariances and positive-semidefinite block covariance. A stable VAR(1) satisfies a matrix Lyapunov equation and propagates lag covariance by powers of A. Cointegration requires a stationary combination of genuinely integrated components; shared trends can cancel, while independent random walks cannot. The next chapter investigates slower covariance decay and changes in the process regime.
