var e=`---
parent_id: book-time-series
chapter_id: stationarity-autocovariance
title: Stationarity and Autocovariance
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Stationarity and Autocovariance

Temporal dependence is a statement about a collection of random variables, not a visual impression of a plotted line. We now put a process X_t on a probability space, define which features remain unchanged under time shifts, and derive the covariance constraints that any proposed stationary model must satisfy. The chapter separates population covariance from its finite-sample estimate. It also explains why correlated observations carry less information about a mean than independent observations with the same marginal variance.

Preparation is [joint laws and dependence](../probability-models-proofs/joint-laws-conditioning-and-dependence.md) and the [time-index conventions](series-trend-seasonality.md). Time t ranges over all integers for population stationarity; a dataset usually reveals only t=1,...,n. We use E for expectation, Var for variance, and Cov for covariance. Finite second moments are stated whenever covariance appears. A lag h is an integer number of observation intervals, not an elapsed calendar duration unless spacing is regular.

## Two meanings of stationarity

**Definition 2.1 (Strict stationarity).** A process is strictly stationary if, for every k, every indices t_1,...,t_k and every integer shift h, the vectors (X_{t_1},...,X_{t_k}) and (X_{t_1+h},...,X_{t_k+h}) have the same joint law. This definition concerns all finite-dimensional distributions, including tails and nonlinear dependence.

**Definition 2.2 (Weak stationarity).** A process with finite second moments is weakly stationary when E[X_t]=mu for all t and Cov(X_t,X_{t+h}) depends on h but not t. Write gamma(h)=Cov(X_t,X_{t+h}) and rho(h)=gamma(h)/gamma(0) when gamma(0)>0. The function gamma is the autocovariance function, and rho the autocorrelation function. If gamma(0)=0, every X_t equals mu almost surely, but the ratio rho is undefined rather than zero by convention.

Strict stationarity with finite second moments implies weak stationarity: equality of one- and two-dimensional laws gives constant means, variances and lagged products. The converse fails in general because two processes can have the same means and covariances but different changing higher moments. For a Gaussian process, finite-dimensional means and covariance matrices determine the joint laws, so weak stationarity does imply strict stationarity. That conclusion uses genuine joint Gaussianity, not merely that each X_t has a marginal normal distribution.

**Worked example 2.3 (A changing shape hidden by moments).** Let Z_t be independent across t. At even times set Z_t to -1 or 1 with equal probability. At odd times set Z_t to 0 with probability three quarters and to -2 or 2 with probability one eighth each. Both distributions have mean zero and variance one. Independence makes Cov(Z_t,Z_s)=0 for distinct times, so gamma(0)=1 and gamma(h)=0 otherwise: the process is weakly stationary. It is not strictly stationary, because P(Z_t=0) alternates between zero and three quarters. A flat autocorrelation plot cannot reveal that alternating one-dimensional law.

The example is intentionally simple enough to verify without an asymptotic theorem. It also shows why a model should say what feature matters to the question: linear least-squares prediction may rely mostly on second moments, while a tail-risk calculation needs more of the distribution. If moments do not exist, weak stationarity is not even defined, though strict stationarity still can be. For example, a sequence of independent identically distributed variables with a heavy-tailed law lacking finite variance is strictly stationary but has no finite autocovariance function.

## Symmetry and positive semidefiniteness

**Proposition 2.4 (Covariance symmetry).** A weakly stationary real-valued process satisfies gamma(-h)=gamma(h) and |gamma(h)|≤gamma(0) for every h.

*Proof.* Covariance is symmetric, so Cov(X_t,X_{t+h})=Cov(X_{t+h},X_t)=gamma(-h). Cauchy–Schwarz gives |Cov(X_t,X_{t+h})|≤sqrt(Var(X_t)Var(X_{t+h}))=gamma(0). If the variance is zero, both sides are zero. ∎

**Theorem 2.5 (Toeplitz covariance).** For any indices t_1,...,t_k, the matrix with entry gamma(t_i-t_j) is positive semidefinite. In particular, for consecutive times its diagonals are constant, forming a Toeplitz covariance matrix.

*Proof.* For any real coefficients a_1,...,a_k, the quadratic form of this matrix is the variance of the sum of a_i(X_{t_i}-mu). Variance is nonnegative. The entry depends only on the difference of indices by weak stationarity; for consecutive indices, equal offsets from the main diagonal therefore have equal entries. ∎

Symmetry and the bound in Proposition 2.4 are necessary but not sufficient for an arbitrary proposed list to be an autocovariance sequence. Every finite Toeplitz matrix must also be positive semidefinite. For instance, setting gamma(0)=1, gamma(1)=0.9 and gamma(2)=-0.9 violates the three-time quadratic constraint even though each individual lag magnitude is at most one. The spectral chapter will express the same requirement through a nonnegative frequency measure under suitable conditions.

**Worked example 2.6 (A three-point covariance check).** Consider a proposed gamma with gamma(0)=1, gamma(1)=0.9 and gamma(2)=-0.9. The three-time matrix has rows (1,0.9,-0.9), (0.9,1,0.9), (-0.9,0.9,1). Choose coefficients (1,-1,1). The quadratic form is 3 plus twice the three cross terms: 2(-0.9-0.9-0.9), giving -2.4. A variance cannot be negative, so no weakly stationary process has exactly this covariance sequence. Checking only pairwise correlations would have missed the contradiction.

## White noise and dependence created by differences

**Definition 2.7 (Weak white noise).** A weak white-noise process epsilon_t has mean zero, common finite variance sigma²>0 and zero covariance at every nonzero lag. Independent identically distributed mean-zero errors with finite variance are white noise, but uncorrelatedness alone does not imply independence. We will state independence or Gaussianity separately when a later result needs it.

**Worked example 2.8 (Differencing independent noise).** Let epsilon_t be independent, mean zero, variance sigma², and define Y_t=epsilon_t-epsilon_{t-1}. Its mean is zero and variance 2sigma². At lag one, expand Cov(Y_t,Y_{t-1}): the only shared random term is epsilon_{t-1}, with coefficients -1 and +1, so gamma_Y(1)=-sigma². At all |h|>1 the two differences use disjoint independent errors, giving covariance zero. Thus rho_Y(1)=-1/2. Differencing a series that was already white noise creates negative short-lag correlation; more differencing is not automatically more stationarity.

The calculation uses independence for the disjoint-error argument; weak white noise with merely zero pairwise covariance would suffice for these second-moment formulas, but not for assertions of independence among the Y_t. The same expansion works for X_t=mu+epsilon_t because a constant cancels under differencing. If X_t instead has a deterministic linear trend, the difference retains a constant mean equal to its slope, as the previous chapter proved.

## Estimating lag dependence

For observed x_1,...,x_n, a common sample autocovariance convention is c_n(h)=n^{-1} sum_{t=h+1}^n (x_t-xbar)(x_{t-h}-xbar) for nonnegative h<n, with c_n(-h)=c_n(h). The denominator n is deliberately held fixed across lags. Another convention divides by n-h. They have different finite-sample behaviour; neither is the population gamma(h). Define the sample autocorrelation as r_n(h)=c_n(h)/c_n(0) when c_n(0)>0.

Using the sample mean makes c_n(h) biased in many finite samples. Dividing by n-h does not universally remove that bias and can produce an estimated covariance sequence whose finite Toeplitz matrices are not positive semidefinite. The fixed-n form has a useful quadratic structure when extended with zeros outside the observed range. Conversely it weighs high lags by few observed pairs; an apparently large high-lag correlation may be unstable. A plot should show the number of pairs and the convention, especially near the maximum lag.

**Proposition 2.9 (Variance of a sample mean).** For n consecutive observations of a weakly stationary process, Var(n^{-1}sum_{t=1}^n X_t)=n^{-2}[n gamma(0)+2sum_{h=1}^{n-1}(n-h)gamma(h)].

*Proof.* Expand the variance of the sum as the double sum of Cov(X_t,X_s). There are n diagonal terms, each gamma(0). For each positive lag h, there are n-h ordered pairs in each direction, and symmetry makes each covariance gamma(h). Divide the resulting variance by n². ∎

Positive short-range covariance inflates the variance compared with gamma(0)/n for independent observations; negative covariance can reduce it. The formula does not guarantee that the bracketed sum is positive term by term, but positive semidefiniteness ensures the whole variance is nonnegative. Replacing n by a guessed “effective sample size” can be a convenient shorthand, yet the explicit lag sum is the actual second-moment statement for the finite sample.

**Worked example 2.10 (Four observations with geometric covariance).** Suppose gamma(h)=v(1/2)^|h| for v>0. The four-point mean has variance one sixteenth times four diagonal contributions v, plus twice three lag-one contributions v/2, twice two lag-two contributions v/4, and twice one lag-three contribution v/8. The bracket is 4v+3v+v+v/4=33v/4, so the mean variance is 33v/64. Independent observations with the same marginal variance would give v/4=16v/64. Thus the positive dependence more than doubles this variance for this short sample. The calculation uses a valid covariance function: it is the normalised AR(1) covariance later derived in Chapter 3. It is not obtained by treating an empirical r_n(h) as exact population information.

There is a limiting version when the absolute autocovariance sum is finite. Divide the variance formula by 1/n and write n Var(Xbar_n)=gamma(0)+2sum_{h=1}^{n-1}(1-h/n)gamma(h). For each fixed h the weight tends to one. Absolute summability lets the weighted finite sums converge to gamma(0)+2sum_{h≥1}gamma(h), called the long-run variance. This limit is nonnegative because every finite n Var(Xbar_n) is nonnegative. The argument does not cover long-memory processes whose autocovariance sum diverges; their sample means can have a different rate. We will revisit that boundary in Chapter 11. Nor does the limit by itself give a normal approximation: a central limit theorem needs extra dependence conditions.

For the geometric covariance just used, the infinite lag sum is v times sum of (1/2)^h, equal to v. The long-run variance is therefore 3v. At large n the mean variance behaves like 3v/n, three times the independent benchmark v/n, provided the AR(1) model and its usual regularity assumptions hold. The four-point exact value is smaller than that limiting approximation, which is unsurprising: replacing finite weights 1-h/n by one overstates the contribution of positive lags in a short series. This contrast is a practical reason to keep the finite formula visible.

## Source-owned R recipe and interpretation

The following values are an invented eight-position example. The listing uses base R only and computes the fixed-n autocovariance directly, so its denominator is visible. It is inert teaching code; no output is claimed from this authoring session.

\`\`\`r
x <- c(2, 3, 2, 5, 4, 5, 4, 7)
n <- length(x)
z <- x - mean(x)
lag_cov <- function(h) {
  stopifnot(length(h) == 1L, h >= 0L, h < n)
  sum(z[(h + 1L):n] * z[1L:(n - h)]) / n
}
sample_covariance <- vapply(0:3, lag_cov, numeric(1))
sample_correlation <- sample_covariance / sample_covariance[1]
data.frame(lag = 0:3, covariance = sample_covariance,
           correlation = sample_correlation)
\`\`\`

The arithmetic is reproducible, but the vector is not a random sample from a declared population. Its empirical correlations therefore do not validate a stochastic model. For actual time-stamped measurements, one would first account for trend, seasonality, missing observations and the forecast question. Statistical uncertainty for r_n(h) requires additional assumptions about the generating process; the familiar rough independent-noise band is not a universal confidence interval for a fitted or nonstationary series.

## Exercises

### Exercise 2.1 {#stationarity-autocovariance-ex-strict}

State why strict stationarity with finite second moments implies weak stationarity.
<details><summary>Hint 1</summary>Use one-time laws for means and variances.</details>
<details><summary>Hint 2</summary>Use two-time laws shifted together for lagged products.</details>
<details><summary>Solution</summary>Shift invariance of each one-time law gives common finite mean and variance. Shift invariance of each pair law gives E[X_t X_{t+h}] independent of t. Subtracting the common mean squared yields gamma(h), so the covariance depends only on h.</details>

### Exercise 2.2 {#stationarity-autocovariance-ex-changing-shape}

Verify the variance of the odd-time distribution in Worked example 2.3.
<details><summary>Hint 1</summary>The values -2 and 2 each have probability one eighth.</details>
<details><summary>Hint 2</summary>The mean is zero, so variance equals the second moment.</details>
<details><summary>Solution</summary>The second moment is 4(1/8)+0(3/4)+4(1/8)=1. Its mean is -2/8+2/8=0, so its variance is one, matching the even-time distribution despite their different shapes.</details>

### Exercise 2.3 {#stationarity-autocovariance-ex-symmetry}

Prove gamma(-h)=gamma(h) for a real weakly stationary process.
<details><summary>Hint 1</summary>Swap arguments of covariance.</details>
<details><summary>Hint 2</summary>Relabel time t+h as the new origin.</details>
<details><summary>Solution</summary>gamma(h)=Cov(X_t,X_{t+h})=Cov(X_{t+h},X_t). With origin t+h, the last expression is gamma(-h), so the covariance function is even.</details>

### Exercise 2.4 {#stationarity-autocovariance-ex-bound}

Why must every population autocorrelation have magnitude at most one?
<details><summary>Hint 1</summary>Apply Cauchy–Schwarz to X_t and X_{t+h} after centering.</details>
<details><summary>Hint 2</summary>Both variances equal gamma(0).</details>
<details><summary>Solution</summary>Cauchy–Schwarz gives |gamma(h)|≤sqrt(gamma(0)gamma(0))=gamma(0). If gamma(0)>0, division gives |rho(h)|≤1. If gamma(0)=0, rho is undefined rather than a bounded number.</details>

### Exercise 2.5 {#stationarity-autocovariance-ex-toeplitz}

Write the covariance matrix of (X_1,X_2,X_3) in terms of gamma(0), gamma(1), gamma(2).
<details><summary>Hint 1</summary>The diagonal has equal variances.</details>
<details><summary>Hint 2</summary>Use symmetry for the upper and lower diagonals.</details>
<details><summary>Solution</summary>The rows are (gamma(0),gamma(1),gamma(2)), (gamma(1),gamma(0),gamma(1)), and (gamma(2),gamma(1),gamma(0)). Equal-offset diagonals agree, and the matrix must be positive semidefinite because it is a covariance matrix.</details>

### Exercise 2.6 {#stationarity-autocovariance-ex-impossible}

Use coefficients (1,-1,1) to reject gamma(0)=1, gamma(1)=0.9, gamma(2)=-0.9.
<details><summary>Hint 1</summary>Start with three diagonal contributions of one.</details>
<details><summary>Hint 2</summary>The three off-diagonal pair products are each -0.9.</details>
<details><summary>Solution</summary>The quadratic form is 3+2(-0.9-0.9-0.9)=-2.4. It would be a variance of X_1-X_2+X_3, which cannot be negative. Thus the proposed sequence is not a valid autocovariance function.</details>

### Exercise 2.7 {#stationarity-autocovariance-ex-differenced-noise}

For Y_t=epsilon_t-epsilon_{t-1} with independent variance sigma² errors, compute its lag-one autocorrelation.
<details><summary>Hint 1</summary>Only epsilon_{t-1} occurs in both Y_t and Y_{t-1}.</details>
<details><summary>Hint 2</summary>Compute gamma_Y(0) and gamma_Y(1) separately.</details>
<details><summary>Solution</summary>Var(Y_t)=sigma²+sigma²=2sigma². The shared error has coefficients -1 and +1, so gamma_Y(1)=-sigma². Dividing gives rho_Y(1)=-1/2.</details>

### Exercise 2.8 {#stationarity-autocovariance-ex-mean-variance}

For three observations with gamma(0)=v, gamma(1)=a, gamma(2)=b, find the variance of their mean.
<details><summary>Hint 1</summary>Count three diagonal, four lag-one and two lag-two ordered pairs.</details>
<details><summary>Hint 2</summary>Divide the variance of the sum by nine.</details>
<details><summary>Solution</summary>The variance of the sum is 3v+4a+2b. Therefore the sample-mean variance is (3v+4a+2b)/9, provided the supplied covariances form a valid positive-semidefinite matrix.</details>

### Exercise 2.9 {#stationarity-autocovariance-ex-denominator}

How many pairs enter c_n(h) at lag h, and what denominator does this chapter use?
<details><summary>Hint 1</summary>The summation index begins at h+1 and ends at n.</details>
<details><summary>Hint 2</summary>Distinguish the pair count from the divisor in the definition.</details>
<details><summary>Solution</summary>There are n-h observed pairs. The displayed estimator divides their centred product sum by n, not by n-h. This convention should be stated when comparing empirical autocovariances from different software or reports.</details>

### Exercise 2.10 {#stationarity-autocovariance-ex-gaussian}

Why does weak stationarity imply strict stationarity for a jointly Gaussian process but not for Worked example 2.3?
<details><summary>Hint 1</summary>Ask what determines a finite-dimensional Gaussian law.</details>
<details><summary>Hint 2</summary>Compare the alternating probability of zero in the example.</details>
<details><summary>Solution</summary>A jointly Gaussian vector is determined by its mean vector and covariance matrix; weak stationarity makes those invariant under common shifts. The example has equal means and covariances but alternating one-time distributions, so its finite-dimensional laws change and it is not jointly stationary.</details>

## Sources

Original Euler exposition, invented examples and exercises under CC BY-SA 4.0. Terminology and the covariance route follow the standard treatment in Brockwell and Davis, *Time Series: Theory and Methods*, second edition, and the exploratory sequence in Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition. No external dataset or protected passage is copied.

## Summary

Strict stationarity fixes every finite-dimensional law; weak stationarity fixes the mean and lagged second moments. Any proposed autocovariance sequence must yield positive-semidefinite Toeplitz matrices. A sample autocorrelation is a finite estimate with a declared denominator, not the population parameter. Dependence changes the variance of a sample mean and will govern ARMA fitting, forecasting and uncertainty in the next chapters.
`;export{e as default};