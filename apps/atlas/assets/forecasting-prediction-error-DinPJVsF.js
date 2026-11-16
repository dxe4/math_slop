var e=`---
parent_id: book-time-series
chapter_id: forecasting-prediction-error
title: Forecasting and Prediction Error
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Forecasting and Prediction Error

Forecasting is a decision made with an information set. A point prediction, an uncertainty interval and an evaluation score answer different questions. We derive model-based predictions from conditional expectation or linear projection, calculate how uncertainty grows with the horizon, and compare them with time-respecting baselines. The source-owned numerical examples are exact calculations under stated models. None is evidence that a fitted model predicts a real series well; that requires observations held out after a declared forecast origin.

Read [ARMA Models](arma-models.md), [Yule–Walker estimation](estimation-yule-walker.md), and [conditional expectation as projection](../probability-models-proofs/conditional-expectation-and-projection.md). Let F_n denote information available after observing time n. A forecast at horizon h≥1 targets X_{n+h}. In a causal model with independent innovations, F_n may include the history of the process and any recovered innovations through n; future innovations are independent of it. With only uncorrelated innovations, formulas below can still define best linear predictions, but conditional means require stronger assumptions.

## Point forecasts and loss

**Theorem 5.1 (Conditional mean under squared loss).** For square-integrable Y and information F, the F-measurable variable minimizing E[(Y-a)²] over square-integrable F-measurable a is E[Y|F], uniquely up to almost-sure equality.

*Proof.* Write Y-a=(Y-E[Y|F])+(E[Y|F]-a). Expand the square and take expectation. The cross term is zero because E[Y-E[Y|F]|F]=0 and the second factor is F-measurable. The remaining risk is E[(Y-E[Y|F])²]+E[(E[Y|F]-a)²], minimized exactly when the second term vanishes. ∎

If the evaluation loss is absolute error, a conditional median is optimal rather than necessarily the conditional mean. Under an asymmetric cost, the appropriate conditional quantile changes again. A forecasting method should therefore name its target and loss. An ordinary point forecast cannot communicate how much uncertainty remains, and a narrow interval is not automatically useful if it misses frequently. Reports that optimise one score while advertising another target need an additional argument.

**Definition 5.2 (Forecast error).** The h-step error made at origin n is e_{n+h|n}=X_{n+h}-hat X_{n+h|n}. Its mean squared prediction error is E[e_{n+h|n}²] under the declared model and information set. Conditional error variance may depend on F_n; the simple AR examples below have constant conditional variance. A realized error after the target is observed is one draw, not the expected error variance.

## AR(1) prediction and horizon uncertainty

**Theorem 5.3 (AR(1) forecast).** Suppose X_t-mu=phi(X_{t-1}-mu)+epsilon_t, |phi|<1, and future innovations are independent of F_n, mean zero and variance sigma². Then E[X_{n+h}|F_n]=mu+phi^h(X_n-mu), and its conditional mean squared error is sigma² sum_{j=0}^{h-1}phi^{2j}=sigma²(1-phi^{2h})/(1-phi²).

*Proof.* Iterate the recursion h times. The result is X_{n+h}-mu=phi^h(X_n-mu)+sum_{j=0}^{h-1}phi^j epsilon_{n+h-j}. Every innovation in the sum is future relative to F_n, so its conditional mean is zero. Independence makes the cross terms in the squared error vanish and each innovation variance sigma², giving the finite geometric sum. The denominator is nonzero because |phi|<1. ∎

**Worked example 5.4 (Two forecast horizons).** Take mu=10, phi=1/2, sigma²=3, and last observation X_n=14. The one-step forecast is 10+(1/2)4=12; the two-step forecast is 10+(1/4)4=11. Their error variances are 3 and 3(1+1/4)=15/4. As h grows, the point forecast returns to 10 while the error variance approaches 3/(1-1/4)=4, the stationary marginal variance. The prediction interval therefore widens from a known current state toward the unconditional spread. This is a model calculation, not an empirical confidence statement about an estimated mu or phi.

The theorem treats parameters as known. With estimated parameters, a forecast distribution also reflects estimation uncertainty, which can matter in a short series or near phi=1. Plugging estimates into the known-parameter variance and calling the result an exact interval ignores that source of uncertainty. In many applications the larger problem is model misspecification or regime change, which cannot be repaired merely by a more precise parameter standard error.

## Moving-average forecasts and recovered shocks

For invertible MA(1), X_t=mu+epsilon_t+theta epsilon_{t-1}. If F_n contains the recovered epsilon_n, then the one-step conditional mean is mu+theta epsilon_n. At horizons h≥2, both shocks in X_{n+h} are future and the conditional mean is mu. The one-step error variance is sigma², while horizons at least two have variance sigma²(1+theta²). These expressions need independent future innovations for conditional claims; uncorrelatedness alone gives the corresponding linear projection statements.

**Worked example 5.5 (One shock, then none).** Let mu=5, theta=1/2, sigma²=4, and recovered epsilon_n=2. The next forecast is 5+(1/2)2=6, with model error variance four. The two-step forecast is five, with variance 4(1+1/4)=5. The shock at n does not contribute directly at h=2 because an MA(1) has one lag of memory. If theta were noninvertible, the observed past would not necessarily reveal epsilon_n through a stable causal inverse; simply pretending that the shock is observed would overstate the available information.

For a general causal linear process X_t=mu+sum_{j≥0}psi_j epsilon_{t-j}, the h-step forecast given past innovations retains terms whose shock time is at most n. Its error contains the h future shocks with weights psi_0,...,psi_{h-1}, giving variance sigma² sum_{j=0}^{h-1}psi_j² under orthogonal equal-variance shocks. This formula makes the AR and MA examples special cases. It also shows that forecast uncertainty is a property of the impulse weights, not simply the current sample standard deviation multiplied by the horizon.

## Prediction intervals and assumptions

If the AR(1) innovations are independent Gaussian and parameters are known, the forecast error in Theorem 5.3 is conditionally Gaussian. A nominal 95-percent interval is point forecast plus or minus z_{0.975} times the conditional standard deviation, with z_{0.975} about 1.96. The coverage claim follows from the Gaussian model. For non-Gaussian innovations, mean and variance alone do not justify those normal quantiles. One may instead use a justified error distribution, a distribution-free bound that may be wide, or an empirical calibration method with its own exchangeability or dependence conditions.

A one-step interval and an h-step interval for the same endpoint are not interchangeable when their origins differ. If a method is updated after every new observation, its reported uncertainty should be calculated from that updated information set. Joint uncertainty for a whole future path is also different from separate marginal intervals at each horizon: covering each future point with 95-percent marginal probability does not give 95-percent simultaneous path coverage. State which claim is intended.

**Proposition 5.6 (Baseline forecasts).** A naive forecast uses the last observed value X_n at every horizon. A seasonal naive forecast with known period m uses X_{n+h-m} when that index is observed, extending the last complete seasonal cycle as needed. Neither formula is universally optimal, but each is an explicit information-respecting comparison for appropriate patterns.

*Proof of availability.* At origin n, X_n is observed. For horizons h with 1≤h≤m, n+h-m≤n, so the seasonal value is also observed. For later horizons, repeat the corresponding value from the last observed complete cycle using a modulo-m index. The formulas therefore use no future target. Their predictive adequacy is an empirical question. ∎

## Joint path errors and observed bias

For an AR(1), the first two forecast errors made at the same origin are e_{n+1|n}=epsilon_{n+1} and e_{n+2|n}=phi epsilon_{n+1}+epsilon_{n+2}. Their covariance is phi sigma² under independent future innovations. Thus the horizon errors are generally correlated even though the innovations are independent. A simulation of complete future paths must reuse the first shock in both horizons; drawing each marginal forecast independently would erase this covariance. If phi is negative, adjacent forecast errors can be negatively correlated while their individual variances remain positive. The joint distribution matters when the task is to forecast a cumulative total, a maximum or the chance of crossing a threshold at any time, because those are functions of the entire path.

There is also a distinction between forecast bias under a model and bias observed in a small evaluation. Conditional-mean forecast errors have conditional mean zero under the correctly specified model and information set. A finite collection of realized errors need not average to zero. Conversely, a near-zero average signed error can hide large positive and negative misses. Report both the signed average and a scale-sensitive score when diagnosing a method; do not infer unbiasedness from one convenient cancellation.

## Time-respecting evaluation

Choose origins n_1<n_2<... with enough initial history. At each origin, fit or update the method using only data through that origin, forecast a declared horizon h, and compare with the later observed target. MAE is the mean absolute error across evaluated origin-target pairs; RMSE is the square root of their mean squared error. RMSE gives extra weight to large errors. An evaluation should state whether overlapping targets or horizons are used, whether model selection was repeated at each origin, and whether unavailable early forecasts were omitted rather than replaced with zeros.

**Worked example 5.7 (Two honest one-step scores).** Suppose an invented sequence is 4,5,4,6,5. Evaluate naive one-step forecasts from origins three and four only. At origin three the forecast for time four is 4 and the realized value is 6, giving error 2. At origin four the forecast for time five is 6 and the realized value is 5, giving error -1. MAE is (2+1)/2=3/2, while RMSE is sqrt((4+1)/2)=sqrt(5/2). The signs matter for bias, but absolute and squared scores discard them differently. Choosing those origins after seeing which scores looked best would itself be selection and should be disclosed.

For a seasonal series, compare a model to seasonal naive as well as naive. A sophisticated model that fails to beat a direct repetition of last year's same quarter has not demonstrated its claimed seasonal advantage on the evaluation window. A single holdout block may be too small for a stable comparison, but using many rolling origins with heavily overlapping outcomes also does not create independent evidence. The report should show the origins and sample size rather than presenting only a score to several decimal places.

## Inert base-R recipe

The code reproduces the exact AR(1) formulas and the invented naive evaluation. It uses only base R and no external data or random draws. It is a source listing, not executed output.

\`\`\`r
mu <- 10; phi <- 0.5; innovation_variance <- 3; last_value <- 14
h <- 1:4
forecast <- mu + phi^h * (last_value - mu)
error_variance <- innovation_variance * (1 - phi^(2*h)) / (1 - phi^2)
data.frame(horizon = h, forecast, error_variance)

observed <- c(4, 5, 4, 6, 5)
origin <- c(3L, 4L)
naive_error <- observed[origin + 1L] - observed[origin]
mae <- mean(abs(naive_error))
rmse <- sqrt(mean(naive_error^2))
data.frame(mae, rmse)
\`\`\`

The code presumes the model parameters in its first block. It does not estimate them, and the invented second block is unrelated to the AR model. Keeping these blocks separate prevents a reader from mistaking a hand-chosen parameter demonstration for a fitted forecast evaluation.

## Exercises

### Exercise 5.1 {#forecasting-prediction-error-ex-squared-loss}

Why is E[Y|F] optimal under squared loss among F-measurable predictors?
<details><summary>Hint 1</summary>Subtract and add E[Y|F] inside Y-a.</details>
<details><summary>Hint 2</summary>The cross term vanishes by conditional-mean orthogonality.</details>
<details><summary>Solution</summary>The risk equals E[(Y-E[Y|F])²]+E[(E[Y|F]-a)²]. The first term is fixed by Y and F; the second is nonnegative and vanishes exactly when a=E[Y|F] almost surely.</details>

### Exercise 5.2 {#forecasting-prediction-error-ex-ar-one}

For mu=8, phi=1/2 and X_n=12, compute the AR(1) one- and two-step point forecasts.
<details><summary>Hint 1</summary>The last deviation from the mean is four.</details>
<details><summary>Hint 2</summary>Multiply it by phi and phi squared.</details>
<details><summary>Solution</summary>The forecasts are 8+(1/2)4=10 and 8+(1/4)4=9. They return toward the stationary mean as the known state influence decays.</details>

### Exercise 5.3 {#forecasting-prediction-error-ex-ar-variance}

With phi=1/2 and innovation variance four, find the two-step AR(1) error variance.
<details><summary>Hint 1</summary>The error contains epsilon_{n+2}+phi epsilon_{n+1}.</details>
<details><summary>Hint 2</summary>Add independent variances, not standard deviations.</details>
<details><summary>Solution</summary>The variance is 4(1+1/4)=5. Adding the two standard deviations would be wrong because independent innovations have zero cross-covariance.</details>

### Exercise 5.4 {#forecasting-prediction-error-ex-horizon-limit}

What does the AR(1) forecast-error variance approach as h grows when |phi|<1?
<details><summary>Hint 1</summary>Use the finite geometric sum in Theorem 5.3.</details>
<details><summary>Hint 2</summary>phi^{2h} tends to zero.</details>
<details><summary>Solution</summary>It tends to sigma²/(1-phi²), the stationary marginal variance. At distant horizons the current observation contributes little information about the future under this model.</details>

### Exercise 5.5 {#forecasting-prediction-error-ex-ma-one}

For invertible MA(1) with mu=3, theta=-1/2 and recovered epsilon_n=2, find the next two point forecasts.
<details><summary>Hint 1</summary>Only the one-step target contains the known epsilon_n.</details>
<details><summary>Hint 2</summary>Apply the plus-sign MA convention.</details>
<details><summary>Solution</summary>The one-step forecast is 3+(-1/2)2=2. At horizon two both shocks are future, so the forecast is the mean 3.</details>

### Exercise 5.6 {#forecasting-prediction-error-ex-ma-variance}

For MA(1) theta=1/2 and sigma²=4, compare one- and two-step forecast-error variances.
<details><summary>Hint 1</summary>At one step only the new shock remains unpredictable.</details>
<details><summary>Hint 2</summary>At two steps both terms of X_{n+2} are future shocks.</details>
<details><summary>Solution</summary>The one-step error variance is 4. The two-step error variance is 4(1+1/4)=5. The second horizon loses information about the current shock but adds another unknown shock term.</details>

### Exercise 5.7 {#forecasting-prediction-error-ex-interval}

What additional assumption licenses a normal-quantile interval using only the AR(1) variance formula?
<details><summary>Hint 1</summary>A variance does not determine a distribution.</details>
<details><summary>Hint 2</summary>Ask for the joint law of the future innovations.</details>
<details><summary>Solution</summary>Independent Gaussian innovations, with the model parameters treated as known, make the finite linear forecast error conditionally Gaussian. Then its variance and normal quantile determine the stated interval. Without that law or a justified approximation, the normal coverage claim does not follow.</details>

### Exercise 5.8 {#forecasting-prediction-error-ex-scores}

For realized errors 2 and -1, calculate MAE and RMSE.
<details><summary>Hint 1</summary>Take absolute values for the first score.</details>
<details><summary>Hint 2</summary>Square before averaging for the second score.</details>
<details><summary>Solution</summary>MAE=(2+1)/2=3/2. RMSE=sqrt((4+1)/2)=sqrt(5/2). The negative sign affects neither score, though it matters for mean signed error.</details>

### Exercise 5.9 {#forecasting-prediction-error-ex-seasonal-naive}

At quarterly origin n=12, what seasonal-naive values forecast horizons one through four?
<details><summary>Hint 1</summary>The seasonal period is four observations.</details>
<details><summary>Hint 2</summary>Use indices n+h-4.</details>
<details><summary>Solution</summary>The forecasts use observed X_9,X_10,X_11,X_12 for horizons one through four respectively. No value after origin twelve enters the forecast.</details>

### Exercise 5.10 {#forecasting-prediction-error-ex-leakage}

Why is fitting a seasonal factor with all twelve observations invalid when evaluating forecasts issued at time eight for targets nine through twelve?
<details><summary>Hint 1</summary>List the observations available at the forecast origin.</details>
<details><summary>Hint 2</summary>Ask whether the estimated factor used any target values.</details>
<details><summary>Solution</summary>At time eight only observations one through eight are available. A factor fitted using all twelve has incorporated targets nine through twelve, so the apparent forecast uses future outcomes. Refit the factor using the first eight only for an honest origin-eight comparison.</details>

## Sources

Original Euler proofs, forecasts, invented observations and exercises under CC BY-SA 4.0. Forecasting loss and time-ordered evaluation terminology is informed by Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition, and the linear-process formulas by Brockwell and Davis, *Time Series: Theory and Methods*. No external dataset or executed R output is claimed.

## Summary

The conditional mean minimizes squared prediction risk, while the information set determines what can be forecast. AR and MA models yield exact horizon-dependent error variances under stated innovation assumptions. Normal prediction intervals need a distributional law; fitting uncertainty and regime changes add further limits. Rolling-origin comparisons against naive and seasonal-naive baselines give an honest empirical question. The next chapter handles differencing, seasonal ARIMA structure and model selection.
`;export{e as default};