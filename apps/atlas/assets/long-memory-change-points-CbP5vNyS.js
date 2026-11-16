var e=`---
parent_id: book-time-series
chapter_id: long-memory-change-points
title: Long Memory and Change Points
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Long Memory and Change Points

A series can remain weakly stationary while its correlations decay too slowly for the usual short-memory approximation to the mean variance. A different series may look persistently correlated because its mean changed once. These mechanisms demand different forecasts and uncertainty calculations. We derive the sample-mean rate under a stated power-law covariance assumption, prove a finite least-squares change-point identity, and explain why visual persistence alone cannot choose between long memory, a unit root and a structural break.

Read [stationarity and autocovariance](stationarity-autocovariance.md), [spectral analysis](spectral-analysis-periodogram.md), and [ARIMA model selection](arima-model-selection.md). Time is a regular integer index, and all covariance arguments use finite second moments. The long-memory asymptotic below is a conditional mathematical result: it assumes a particular positive covariance tail. It does not prove that any observed series has that tail, nor does it prove a central limit theorem. Change-point calculations use source-owned finite teaching values, not external observations.

## Short and long covariance memory

**Definition 11.1 (Absolute short memory).** A weakly stationary process has absolutely summable covariance when sum over all integer h of |gamma(h)|<infinity. This condition is sufficient for the long-run variance gamma(0)+2sum_{h≥1}gamma(h) to be finite. It is stronger than some other possible notions of short memory and does not by itself guarantee every inferential theorem one might want.

For a sample mean of n consecutive values, Chapter 2 proved Var(Xbar_n)=n^{-2}[n gamma(0)+2sum_{h=1}^{n-1}(n-h)gamma(h)]. If the covariance sum is absolutely finite, n Var(Xbar_n) tends to the long-run variance by dominated convergence on the lag sum. Thus the familiar variance order 1/n can survive dependence, with a different constant. If positive covariances decay too slowly to sum, this argument fails, and the mean can concentrate more slowly than n^{-1/2} in standard-deviation units.

**Definition 11.2 (Power-law long memory).** For this chapter, a weakly stationary process has positive power-law covariance tail with parameter d in (0,1/2) if gamma(h) is asymptotic to c h^{2d-1} as h→infinity for c>0. Because 2d-1 lies between -1 and zero, the positive tail is not summable. This is a model property, not a conclusion from a finite log-log plot.

**Theorem 11.3 (Mean-variance rate under the tail assumption).** Under Definition 11.2 and bounded finite gamma(0), Var(Xbar_n) is asymptotic to c/[d(2d+1)] times n^{2d-1}.

*Proof.* The diagonal contribution gamma(0)/n is of smaller order than n^{2d-1} because d>0. For the off-diagonal part, replace gamma(h) by c h^{2d-1} at large h; finitely many small h contribute only order 1/n. The weighted sum has the Riemann-sum asymptotic sum_{h=1}^{n-1}(n-h)h^{2d-1} asymptotic to n^{2d+1} integral_0^1(1-u)u^{2d-1}du. The integral equals 1/[(2d)(2d+1)]. Multiplying by 2c/n² gives c/[d(2d+1)] n^{2d-1}. The assumed asymptotic and positive regularly varying tail justify replacing the large-h terms uniformly away from the origin; a small initial interval contributes a negligible fraction by the same power bound. ∎

**Worked example 11.4 (A slower mean).** Set d=1/4 and c=1 in the theorem's hypothetical covariance tail. Then the variance rate is [1/((1/4)(3/2))] n^{-1/2}=8/3 n^{-1/2}. Its standard deviation is of order n^{-1/4}, slower than the independent-data n^{-1/2} standard-deviation rate. Doubling n reduces the asymptotic variance by a factor 2^{-1/2}, not by one half. These rates are conditional on the covariance-tail assumption; four or forty observed values cannot verify the asymptotic law exactly.

The spectral counterpart of the stated long-memory family has power accumulating near zero frequency. For a common fractional-integration model, f(lambda) behaves like a positive constant times |lambda|^{-2d} near zero. Because d<1/2, this singularity remains integrable and can coexist with finite marginal variance. We cite this as a standard fractional-process result, not derive the full spectral representation or existence theorem here. A high low-frequency periodogram ordinate alone cannot distinguish this stationary singularity from a deterministic trend or a one-time level shift.

## A one-time change in mean

**Definition 11.5 (Single mean change).** For a finite sequence x_1,...,x_n, a candidate split k with 1≤k<n assigns mean a to positions 1,...,k and mean b to k+1,...,n. The least-squares estimates for a and b at fixed k are the corresponding segment means. A stochastic change-point model adds noise assumptions and treats the true split, if any, as an unknown parameter; the finite arithmetic itself needs none.

**Theorem 11.6 (Split improvement).** Let SSE_0=sum_t(x_t-xbar)² and SSE_k be the within-segment squared-error sum using segment means at split k. Then SSE_0-SSE_k=[k(n-k)/n](xbar_left-xbar_right)².

*Proof.* Expand each observation around its own segment mean and the global mean. Within each segment the deviations from its segment mean sum to zero, so the cross term vanishes. Thus SSE_0=SSE_k+k(xbar_left-xbar)²+(n-k)(xbar_right-xbar)². Since xbar=[k xbar_left+(n-k)xbar_right]/n, the two between-segment terms simplify to k(n-k)(xbar_left-xbar_right)²/n. ∎

**Worked example 11.7 (An exact eight-point split).** Take invented values (0,0,0,0,2,2,2,2). The global mean is one and SSE_0=8. At k=4, the segment means are zero and two, so SSE_4=0. The theorem gives improvement [4·4/8](0-2)²=2·4=8. The centred cumulative sum C_k=sum_{t=1}^k(x_t-xbar) reaches C_4=-4. This is exact evidence that a two-mean description fits these constructed values better than one constant mean. It is not a p-value: a significance claim would need a noise model and account for searching over candidate k.

The connection to cumulative sums is useful. C_k=k(xbar_left-xbar), which also equals k(n-k)(xbar_left-xbar_right)/n. Squaring and rearranging gives SSE_0-SSE_k=n C_k²/[k(n-k)]. A large centred cumulative deviation flags a candidate split, but its null scale depends on dependence and variance. Strongly positively correlated stationary noise can produce long runs and large C_k even without a true mean change. Treating such observations as independent when setting a threshold would overstate evidence.

**Proposition 11.10 (Fixed-position cumulative-sum variance).** If X_1,...,X_n are independent with a common mean and variance sigma², and C_k=sum_{t=1}^k(X_t-Xbar_n), then Var(C_k)=sigma² k(1-k/n) for a prespecified k.

*Proof.* Write C_k=(1-k/n)sum_{t=1}^k(X_t-mu)-(k/n)sum_{t=k+1}^n(X_t-mu). The two sums are independent, with variances k sigma² and (n-k)sigma². The resulting variance is sigma²[k(1-k/n)²+(n-k)(k/n)²]=sigma² k(1-k/n). The calculation assumes independence and fixes k before seeing the data. ∎

**Worked example 11.11 (A fixed split has its own scale).** With n=8, k=4 and unit independent-noise variance, the proposition gives Var(C_4)=4(1-4/8)=2, so the standard deviation is sqrt(2). The constructed step vector has C_4=-4, whose absolute value is 2sqrt(2) times that standard deviation. This is an exact ratio under the hypothetical independent-noise null scale, not a p-value for the constructed data. The example's values were authored as a step, and k=4 was selected because it is the visible midpoint. A scan over all k or correlated noise changes the reference distribution even if each fixed-k variance is calculated correctly.

For a weakly stationary dependent null, the same expansion of C_k gives a double sum of lag covariances rather than sigma² times independent counts. Positive autocovariance often increases the scale of sustained cumulative deviations. Estimating that scale from a short series with a possible break is difficult because the suspected break itself distorts covariance estimates. This is one reason to combine subject-matter dates, alternative stationary models and sensitivity analyses rather than relying on a single automatic threshold.

**Worked example 11.8 (Trend versus split).** Compare invented levels (0,1,2,3,4,5,6,7) with the step vector above. The first rises gradually every time; the second stays flat within each half and jumps once. Both have a low first-half average and a high second-half average, so a split statistic can be large for both. A linear-trend model can fit the first exactly but leaves a structured residual for the step; a fixed split fits the second exactly but cannot reproduce each increment of the linear sequence. A plot, residuals and a time-respecting forecast comparison help separate these finite descriptions, while a stochastic mechanism still requires assumptions.

## Search, dependence and forecast interpretation

At a prespecified k, the split-improvement identity is straightforward. If k is chosen by maximizing improvement over all n-1 possible splits, the chosen statistic has been selected for extremeness. Its null distribution is not the same as a fixed-k comparison. Adding multiple series, transformation choices or several candidate variance changes creates further selection. A valid inferential procedure must account for the actual search and noise dependence; we import general change-point limit theory rather than inventing a reference law from the eight-point example.

A stationary long-memory model with positive covariance tail predicts persistent dependence around a constant mean, whereas a level-shift model predicts a changed mean after a particular time. A unit-root model predicts accumulated future innovation variance that grows with horizon. These can mimic one another over a short window, but their long-horizon forecasts and uncertainty differ. Evidence about mechanism may come from external intervention dates, repeated independent series, stable measurement rules or much longer histories. A single lag plot or a single fitted coefficient near one is insufficient to establish which mechanism applies.

**Proposition 11.9 (Future variance after a known mean shift).** Suppose observations after a known break are mu_2+epsilon_t with independent mean-zero variance sigma² errors. Conditional on known mu_2 and the break, the variance of a future observation is sigma² regardless of forecast horizon. In a random walk with the same one-step innovation variance, the h-step level forecast-error variance is h sigma².

*Proof.* In the post-break constant-mean model, the future forecast error is only its new epsilon, whose variance is sigma². In the random walk, the h-step error sums h future independent innovations, so its variance is h sigma². Parameter-estimation and break-date uncertainty are excluded by the explicit known-parameter hypothesis. ∎

The contrast is mathematically clean but does not mean a real post-break mean stays fixed forever. If another change may occur, a richer model is needed. Nor does it make the random walk universally conservative: a model can have even larger long-horizon uncertainty. State the scenario and information set, and avoid extrapolating a finite regime with unwarranted certainty.

## Inert base-R split calculation

This listing computes every fixed split improvement for the invented step vector and reports its centred cumulative sums. It uses only base R and no random data. The displayed proof supplies the mathematical result; no code execution is claimed in authoring.

\`\`\`r
x <- c(0, 0, 0, 0, 2, 2, 2, 2)
n <- length(x)
global_mean <- mean(x)
baseline_sse <- sum((x - global_mean)^2)
candidate <- 1:(n - 1L)
improvement <- vapply(candidate, function(k) {
  left <- x[1:k]
  right <- x[(k + 1L):n]
  baseline_sse - sum((left - mean(left))^2) -
    sum((right - mean(right))^2)
}, numeric(1))
data.frame(split = candidate, improvement,
           cumulative_centered = cumsum(x - global_mean)[candidate])
\`\`\`

For real data, this scan is part of a selection procedure. Running it on a training window and then judging a forecast on later values is different from selecting a break after inspecting the entire timeline. The latter includes future targets in the model choice and cannot serve as an honest earlier-origin forecast evaluation.

## Exercises

### Exercise 11.1 {#long-memory-change-points-ex-short}

State what absolute covariance summability implies about the leading order of sample-mean variance.
<details><summary>Hint 1</summary>Use the finite variance formula from Chapter 2.</details>
<details><summary>Hint 2</summary>Multiply by n and let the lag weights tend to one.</details>
<details><summary>Solution</summary>Under absolute summability, n Var(Xbar_n) tends to gamma(0)+2sum_{h≥1}gamma(h), a finite nonnegative long-run variance. Thus Var(Xbar_n) has order at most 1/n when that limit is finite, with the exact leading constant if it is positive.</details>

### Exercise 11.2 {#long-memory-change-points-ex-tail}

Why is h^{2d-1} nonsummable for 0<d<1/2?
<details><summary>Hint 1</summary>Its exponent lies between -1 and zero.</details>
<details><summary>Hint 2</summary>Compare with the integral of x^{2d-1} over large x.</details>
<details><summary>Solution</summary>The integral from one to N is (N^{2d}-1)/(2d), which grows without bound because d>0. The positive series with comparable terms also diverges.</details>

### Exercise 11.3 {#long-memory-change-points-ex-rate}

For d=1/4, what is the asymptotic power of n in Var(Xbar_n) under Theorem 11.3?
<details><summary>Hint 1</summary>Substitute d into 2d-1.</details>
<details><summary>Hint 2</summary>Then take a square root for the standard-deviation rate.</details>
<details><summary>Solution</summary>The variance power is n^{-1/2}; the standard deviation has order n^{-1/4}. This is slower concentration than the independent finite-variance n^{-1/2} standard-deviation rate.</details>

### Exercise 11.4 {#long-memory-change-points-ex-integral}

Evaluate integral_0^1(1-u)u^{2d-1}du for d>0.
<details><summary>Hint 1</summary>Split into integrals of u^{2d-1} and u^{2d}.</details>
<details><summary>Hint 2</summary>Subtract 1/(2d+1) from 1/(2d).</details>
<details><summary>Solution</summary>The value is 1/(2d)-1/(2d+1)=1/[(2d)(2d+1)]. Multiplying by the variance formula's factor two produces c/[d(2d+1)].</details>

### Exercise 11.5 {#long-memory-change-points-ex-split}

For (0,0,0,0,2,2,2,2), compute the global and two segment means at k=4.
<details><summary>Hint 1</summary>There are four values of each kind.</details>
<details><summary>Hint 2</summary>Average each half separately.</details>
<details><summary>Solution</summary>The global mean is one, the left mean is zero and the right mean is two. Each within-segment squared error is zero for this exact step vector.</details>

### Exercise 11.6 {#long-memory-change-points-ex-improvement}

Use Theorem 11.6 to find the split improvement at k=4 for that vector.
<details><summary>Hint 1</summary>The factor k(n-k)/n equals two.</details>
<details><summary>Hint 2</summary>The squared mean difference equals four.</details>
<details><summary>Solution</summary>The improvement is 2·4=8. The one-mean SSE is eight and the two-mean SSE at this split is zero, so the identity is exact.</details>

### Exercise 11.7 {#long-memory-change-points-ex-cusum}

Compute centred cumulative sum C_4 for the step vector.
<details><summary>Hint 1</summary>Subtract the global mean one from each of the first four zeros.</details>
<details><summary>Hint 2</summary>Add four copies of -1.</details>
<details><summary>Solution</summary>C_4=-4. Its magnitude marks the candidate break, but a significance threshold would require a declared null model and account for searching over split positions.</details>

### Exercise 11.8 {#long-memory-change-points-ex-search}

Why does choosing the split with largest improvement change the reference law compared with testing a prespecified split?
<details><summary>Hint 1</summary>The chosen statistic is a maximum over candidates.</details>
<details><summary>Hint 2</summary>A maximum is selected to be large even under no change.</details>
<details><summary>Solution</summary>Searching all n-1 splits selects the most favorable random fluctuation under a no-change model. A fixed-split null distribution does not account for that maximization and can overstate significance. The reference calculation must include the search and dependence assumptions.</details>

### Exercise 11.9 {#long-memory-change-points-ex-forecast-variance}

Compare h-step level forecast-error variances for a known post-break constant mean and an independent-shock random walk, both with shock variance two.
<details><summary>Hint 1</summary>The first has only one future noise term at the target.</details>
<details><summary>Hint 2</summary>The random walk accumulates h future increments.</details>
<details><summary>Solution</summary>The known post-break mean model has variance two at every horizon. The random walk has variance 2h. This contrast excludes uncertainty about the mean and break date by assumption.</details>

### Exercise 11.10 {#long-memory-change-points-ex-spectral}

Why can a low-frequency periodogram peak alone not distinguish long memory from a one-time level shift?
<details><summary>Hint 1</summary>Both mechanisms create slow variation over the observed window.</details>
<details><summary>Hint 2</summary>One is stationary covariance behaviour, the other a changing mean.</details>
<details><summary>Solution</summary>A long-memory stationary process can concentrate spectral power near zero, while a level shift puts a large low-frequency component into a finite transform through nonstationary mean change. The same visual peak can arise from different mechanisms, so additional model and change diagnostics are required.</details>

## Sources

Original Euler finite split proof, covariance-tail deduction, invented vectors and exercises under CC BY-SA 4.0. Fractional-process spectral behavior and broad change-point inferential theory are named imports from standard time-series literature; the covariance and model-selection route is benchmarked against Brockwell and Davis, *Time Series: Theory and Methods*, and Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*. No external dataset or executed R result is claimed.

## Summary

Absolute covariance summability supports the usual 1/n mean-variance order; a positive power-law tail can slow it to n^{2d-1}. A mean change is a separate mechanism with an exact finite split-improvement identity. Searching for a break changes inference, and dependence can mimic one. Forecasts from long memory, a fixed new mean and a random walk carry different horizon uncertainty. The final chapter uses complete source-owned cases to connect these distinctions without claiming empirical evidence from invented data.
`;export{e as default};