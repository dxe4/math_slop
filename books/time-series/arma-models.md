
# ARMA Models

A stationary covariance sequence describes dependence but does not say how new observations are produced. Autoregressive and moving-average models provide compact recursive constructions. They distinguish dependence carried by past values from dependence carried by past shocks. We fix a single sign convention, derive the simplest covariance functions directly, and state precisely when an infinite representation is legitimate. The result is a small model vocabulary to be estimated and forecast in later chapters.

Preparation is [stationarity and autocovariance](stationarity-autocovariance.md) and [conditional expectation](../probability-models-proofs/conditional-expectation-and-projection.md). We use innovations epsilon_t with mean zero, common variance sigma²>0, and zero cross-covariance across distinct times. When a calculation needs conditional independence, we strengthen this to independent innovations and say so. Center a process by Y_t=X_t-mu. Our convention is **plus** signs on moving-average shocks: an MA(1) is Y_t=epsilon_t+theta epsilon_{t-1}. Software packages can use other signs; a reported parameter has no meaning without its convention.

## Recursive definitions and lag operators

**Definition 3.1 (ARMA(p,q)).** A centred ARMA(p,q) relation is Y_t=phi_1Y_{t-1}+...+phi_pY_{t-p}+epsilon_t+theta_1epsilon_{t-1}+...+theta_qepsilon_{t-q}. With the lag operator B satisfying B Y_t=Y_{t-1}, write phi(B)Y_t=theta(B)epsilon_t, where phi(z)=1-phi_1z-...-phi_pz^p and theta(z)=1+theta_1z+...+theta_qz^q. An algebraic relation alone does not choose a stationary solution; root conditions and the information set determine the useful interpretation.

The lag operator is a bookkeeping device for sequences, not a random variable that can be divided by an arbitrary polynomial. Formally writing Y=theta(B)epsilon/phi(B) is justified as a causal infinite series when the inverse coefficients are absolutely summable. For finite data, initial values and likelihood conventions matter. An AR model propagates its own past values; an MA model has only finitely many direct shocks but can have an infinite inverse in terms of past observations. The orders p and q count different structures and are not interchangeable just because fitted autocorrelations look similar over a short window.

**Definition 3.2 (Causal AR(1)).** For |phi|<1, the stationary causal AR(1) solution of Y_t=phi Y_{t-1}+epsilon_t is Y_t=sum_{j=0}^infinity phi^j epsilon_{t-j}, with convergence in mean square when the innovations have finite variance. Causal means Y_t is generated from present and past innovations, not future ones.

**Theorem 3.3 (AR(1) covariance).** Under Definition 3.2, gamma(0)=sigma²/(1-phi²) and gamma(h)=gamma(0)phi^|h| for every integer h.

*Proof.* Finite partial sums converge in mean square because the variance of the remaining tail is sigma² sum_{j>N}phi^{2j}, which tends to zero for |phi|<1. Centering follows from the zero innovation means. Independence or zero cross-covariance makes the variance of the infinite sum sigma² sum_{j≥0}phi^{2j}=sigma²/(1-phi²). For h≥0, compare Y_t and Y_{t-h}: matching innovation indices have coefficients phi^{j+h} and phi^j, so their covariance is sigma² phi^h sum_{j≥0}phi^{2j}=gamma(0)phi^h. Symmetry handles negative h. ∎

**Worked example 3.4 (Persistent and alternating AR behaviour).** Take phi=1/2 and sigma²=3. Then gamma(0)=3/(1-1/4)=4, gamma(1)=2, gamma(2)=1, and rho(h)=2^{-|h|}. If phi=-1/2 with the same innovation variance, gamma(0) stays four but rho(1)=-1/2 and rho(2)=1/4. The sign changes alternating correlations without changing marginal variance. A line that repeatedly zigzags may be compatible with negative phi, yet a plot alone cannot identify the parameter: seasonal means or measurement artifacts can also produce alternation.

The boundary |phi|=1 is not a small perturbation of this stationary formula. At phi=1, repeated recursion gives Y_t=Y_0+sum_{j=1}^t epsilon_j, whose variance grows with t under independent finite-variance innovations. At phi=-1, alternating accumulation likewise prevents the causal finite-variance stationary series defined above. For |phi|>1, a stationary solution can be constructed with future shocks under suitable two-sided indexing, but it is noncausal and unsuitable for prediction from a past-only innovation filtration. The familiar AR root rule refers to the intended causal stationary solution: the zeros of phi(z) must lie outside the unit circle.

## Moving averages and finite covariance range

**Definition 3.5 (MA(1)).** An MA(1) process is Y_t=epsilon_t+theta epsilon_{t-1}. It is weakly stationary for every finite theta when the innovations are weak white noise. It is invertible in the usual causal past-shock sense when |theta|<1: epsilon_t=sum_{j=0}^infinity(-theta)^jY_{t-j} in mean square under suitable assumptions.

**Theorem 3.6 (MA(1) covariance).** The MA(1) autocovariance is gamma(0)=sigma²(1+theta²), gamma(1)=gamma(-1)=sigma² theta, and gamma(h)=0 for |h|>1.

*Proof.* Expand the product of the two-term sums defining Y_t and Y_{t-h}. At h=0 the two innovation squares contribute sigma² and theta²sigma². At h=1 the only shared innovation is epsilon_{t-1}, whose coefficients are theta in Y_t and one in Y_{t-1}, giving theta sigma². At larger lags no innovation index is shared, so zero cross-covariance makes the result zero. Symmetry covers negative lags. ∎

**Worked example 3.7 (The same covariance from reciprocal parameters).** With theta=2 and sigma²=1, MA(1) has gamma(0)=5 and gamma(1)=2. With theta'=1/2 and innovation variance sigma'²=4, the same formulas give gamma'(0)=4(1+1/4)=5 and gamma'(1)=4(1/2)=2. Every other lag covariance is zero in both models. Second moments alone therefore cannot distinguish these two descriptions. The invertibility convention selects theta'=1/2 as the representation with shocks recoverable from a stable infinite filter of past observations. That is an identification choice, not a claim that the noninvertible algebraic construction fails to exist.

For an invertible MA(1), the inverse filter follows from the geometric series 1/(1+theta B)=sum_{j≥0}(-theta B)^j. If |theta|≥1, its coefficients do not decay absolutely and the causal past-only inverse is not stable. Invertibility is separate from stationarity: every finite MA(1) is stationary under weak-white-noise assumptions, while its inverse may fail. For higher q, the analogous condition places zeros of theta(z) outside the unit circle. A common factor of phi and theta may cancel, so an ARMA order also needs a minimal or coprime representation for unique interpretation.

## Combining propagation and shocks

**Proposition 3.8 (Causal ARMA(1,1) weights).** For |phi|<1, the relation Y_t=phi Y_{t-1}+epsilon_t+theta epsilon_{t-1} has causal coefficients psi_0=1 and psi_j=(phi+theta)phi^{j-1} for j≥1, so Y_t=sum_{j≥0}psi_j epsilon_{t-j} in mean square.

*Proof.* Repeatedly substitute the recursion or multiply the formal series (1+theta B)sum_{j≥0}(phi B)^j. The coefficient at lag zero is one. At lag j≥1 it is phi^j+theta phi^{j-1}=(phi+theta)phi^{j-1}. Their squares have finite sum because |phi|<1, justifying mean-square convergence against finite-variance uncorrelated innovations. Substitution back into the recursion verifies the relation. ∎

**Worked example 3.9 (Cancellation versus persistence).** Let phi=1/2 and theta=-1/2. Then psi_j=0 for all j≥1, so Y_t=epsilon_t despite the displayed ARMA(1,1) relation. The factors 1-(1/2)B and 1-(1/2)B cancel. Fitting this as a two-parameter model gives no distinct dynamic structure and illustrates why coprime polynomials matter. If theta=1/2 instead, the first three psi weights are 1,1,1/2; a shock of size two contributes 2 now, 2 at the next time and 1 one step later. The two parameter choices have the same AR coefficient but very different propagation.

For general causal ARMA models, a psi-weight representation gives covariance gamma(h)=sigma² sum_{j≥0}psi_j psi_{j+|h|}, provided the sums converge. This follows by matching equal innovation indices, as in the AR(1) proof. It is useful for checking numerical covariance calculations without assuming that a visually decaying ACF proves a specific order. A finite sample contains noisy estimates of many lags, and neighboring candidate models can approximate one another closely.

## Partial autocorrelation and model identification

The partial autocorrelation at lag h is the coefficient of Y_{t-h} in the best linear least-squares prediction of Y_t from Y_{t-1},...,Y_{t-h}, assuming a nonsingular covariance matrix. It measures a new linear contribution after intervening lags are included. For a causal AR(p), the population partial autocorrelations vanish beyond p under the usual positive-definiteness conditions; for an MA(q), the population autocovariances vanish beyond q. These cutoff statements are population properties. In observed data, estimates wobble around zero and do not reveal an exact cutoff, especially when n is small or parameters are near a boundary.

For AR(1), the lag-two partial autocorrelation is zero. Indeed, the recursion Y_t=phi Y_{t-1}+epsilon_t has an innovation uncorrelated with the past; once Y_{t-1} is in the linear predictor, Y_{t-2} adds no linear prediction. This is a projection argument, not an assertion that every AR(1) observation is conditionally independent of remote history without an independence assumption on innovations. The next chapter uses the same projection structure to derive Yule–Walker estimation.

## Means, innovations and observational equivalence

For a noncentered AR(1), writing X_t=c+phi X_{t-1}+epsilon_t gives stationary mean mu=c/(1-phi) when |phi|<1 and the innovation mean is zero. The intercept c and process mean mu are therefore different unless phi=0. If a fitted routine reports an intercept, one must check which parameterization it uses before comparing that number with the sample mean. Centering the process at mu gives the recursion used in the proofs above. When phi is close to one, a small change in c can produce a much larger change in the implied mean; this sensitivity is part of the model's interpretation, not a software defect.

Second-order equivalence also has a distributional boundary. The reciprocal MA(1) examples share every autocovariance. If their innovations are Gaussian, they share every finite-dimensional distribution of the observable process because the processes are jointly Gaussian with equal means and covariances. If their innovation distributions differ, equality of covariance need not imply equality of observable higher moments or tails. Fitting by covariance or Gaussian quasi-likelihood deliberately targets second-order structure and cannot certify the innovation law. This matters when an application asks for extreme-event probabilities rather than a linear mean forecast.

Finally, a model relation is a hypothesis about the observation mechanism. One can always write a finite recursion with chosen residuals, but those residuals may still show predictable lag structure or changing variance. The substantive check is whether a single parameter set and the declared innovation assumptions plausibly account for the time-ordered observations. Later diagnostics and forecasting comparisons address that question; the algebraic identity by itself does not.

## An inert base-R recursion

This listing applies an ARMA(1,1) recursion to fixed, invented shock values. It avoids random-number generation so every input and initial condition is visible. It demonstrates a filter, not a simulated sample from a named distribution, and it was not executed during authoring.

```r
shock <- c(1, 0, -1, 2, 0, 1, -2, 0)
phi <- 0.5
theta <- 0.25
centered <- numeric(length(shock))
previous_y <- 0
previous_e <- 0
for (t in seq_along(shock)) {
  centered[t] <- phi * previous_y + shock[t] + theta * previous_e
  previous_y <- centered[t]
  previous_e <- shock[t]
}
data.frame(time = seq_along(shock), shock, centered)
```

The zero pre-sample values are a finite-recursion initialization. They do not make the eight outputs a draw from the two-sided stationary distribution; a truly stationary construction has an infinite past. A fit to real data must address that distinction through conditional or exact likelihood, an initial-state distribution, or a defensible approximation.

## Exercises

### Exercise 3.1 {#arma-models-ex-polynomial}

Write the lag polynomials for Y_t=0.4Y_{t-1}+epsilon_t-0.3epsilon_{t-1} under this chapter's sign convention.
<details><summary>Hint 1</summary>Move the lagged Y term to the left.</details>
<details><summary>Hint 2</summary>Keep the shock coefficient with its displayed minus sign in theta(B).</details>
<details><summary>Solution</summary>The relation is (1-0.4B)Y_t=(1-0.3B)epsilon_t. Thus phi(z)=1-0.4z and theta(z)=1-0.3z. The MA parameter in the plus-sign convention is -0.3.</details>

### Exercise 3.2 {#arma-models-ex-ar-variance}

For an AR(1) with phi=3/5 and innovation variance 16, compute stationary variance.
<details><summary>Hint 1</summary>Check |phi|<1.</details>
<details><summary>Hint 2</summary>Use sigma²/(1-phi²).</details>
<details><summary>Solution</summary>The causal stationary condition holds. The variance is 16/(1-9/25)=16/(16/25)=25. A recursion with an arbitrary fixed initial value does not yet have this variance at its first step.</details>

### Exercise 3.3 {#arma-models-ex-ar-lag}

With phi=-1/2 and stationary variance four, find gamma(1) and gamma(2).
<details><summary>Hint 1</summary>Multiply gamma(0) by successive powers of phi.</details>
<details><summary>Hint 2</summary>Odd and even powers have different signs.</details>
<details><summary>Solution</summary>gamma(1)=4(-1/2)=-2, while gamma(2)=4(1/4)=1. The signs alternate although the absolute correlations decay geometrically.</details>

### Exercise 3.4 {#arma-models-ex-ma-covariance}

For MA(1) theta=-1/2 and sigma²=4, calculate gamma(0), gamma(1), and rho(1).
<details><summary>Hint 1</summary>Use 1+theta² for the variance multiplier.</details>
<details><summary>Hint 2</summary>Divide theta sigma² by that variance.</details>
<details><summary>Solution</summary>gamma(0)=4(1+1/4)=5, gamma(1)=4(-1/2)=-2, and rho(1)=-2/5. All lag covariances beyond one are zero.</details>

### Exercise 3.5 {#arma-models-ex-invertibility}

Why is MA(1) theta=2 stationary but noninvertible in the causal past-shock sense?
<details><summary>Hint 1</summary>The process itself uses only two finite shock terms.</details>
<details><summary>Hint 2</summary>Inspect coefficients (-theta)^j of the inverse filter.</details>
<details><summary>Solution</summary>A finite sum of white-noise terms has time-invariant mean and covariance for any finite theta. Recovering epsilon_t from past Y would use coefficients (-2)^j, which grow instead of summing stably, so the usual causal inverse does not exist.</details>

### Exercise 3.6 {#arma-models-ex-reciprocal}

Show that (theta,sigma²)=(2,1) and (1/2,4) yield the same MA(1) autocovariances.
<details><summary>Hint 1</summary>Evaluate sigma²(1+theta²) for each pair.</details>
<details><summary>Hint 2</summary>Evaluate sigma²theta and note all higher lags vanish.</details>
<details><summary>Solution</summary>Both pairs give gamma(0)=5 and gamma(1)=2, with gamma(h)=0 for |h|>1. The second representation has |theta|<1 and is the invertible one under the stated convention.</details>

### Exercise 3.7 {#arma-models-ex-weights}

For ARMA(1,1) phi=1/4 and theta=1/2, find psi_0 through psi_3.
<details><summary>Hint 1</summary>psi_0=1 and psi_j=(phi+theta)phi^{j-1} for j≥1.</details>
<details><summary>Hint 2</summary>phi+theta=3/4.</details>
<details><summary>Solution</summary>The weights are psi_0=1, psi_1=3/4, psi_2=3/16, and psi_3=3/64. Each positive-lag weight is one quarter of its predecessor.</details>

### Exercise 3.8 {#arma-models-ex-cancellation}

What process results when theta=-phi in a causal ARMA(1,1) with |phi|<1?
<details><summary>Hint 1</summary>Compare phi(B) and theta(B).</details>
<details><summary>Hint 2</summary>Use the psi-weight formula for positive lags.</details>
<details><summary>Solution</summary>Both polynomials equal 1-phi B and cancel in the causal representation. Equivalently psi_j=(phi+theta)phi^{j-1}=0 for j≥1. Thus Y_t=epsilon_t; the displayed orders are nonminimal.</details>

### Exercise 3.9 {#arma-models-ex-unit-root}

For Y_t=Y_{t-1}+epsilon_t with independent variance sigma² errors and fixed Y_0, find Var(Y_t).
<details><summary>Hint 1</summary>Iterate the recursion to time zero.</details>
<details><summary>Hint 2</summary>Add variances of t independent shocks.</details>
<details><summary>Solution</summary>Y_t=Y_0+sum_{j=1}^t epsilon_j. With fixed Y_0, Var(Y_t)=t sigma², which depends on t, so this solution is not weakly stationary.</details>

### Exercise 3.10 {#arma-models-ex-partial}

Why does adding Y_{t-2} not improve the population best linear predictor of a causal AR(1) after Y_{t-1} is included?
<details><summary>Hint 1</summary>Write Y_t=phi Y_{t-1}+epsilon_t.</details>
<details><summary>Hint 2</summary>The innovation is orthogonal to the past linear span.</details>
<details><summary>Solution</summary>The projection phi Y_{t-1} already leaves residual epsilon_t, which is uncorrelated with Y_{t-1}, Y_{t-2}, and earlier values in the causal innovation representation. An additional coefficient on Y_{t-2} cannot lower mean-square error, so the lag-two partial autocorrelation is zero.</details>

## Sources

Original Euler proofs, invented shock lists and exercises under CC BY-SA 4.0. Standard model terminology follows Brockwell and Davis, *Time Series: Theory and Methods*, second edition, with forecast-oriented motivation from Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition. No externally sourced dataset is used.

## Summary

Our plus-sign MA convention makes the AR and MA polynomials explicit. Causal AR stationarity and MA invertibility are separate root conditions. AR(1) has geometric covariance; MA(1) has covariance only through lag one; ARMA weights combine both mechanisms. A finite sample may not identify an order by a visual cutoff. The next chapter turns these population equations into estimation rules and checks their limits.
