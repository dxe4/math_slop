
# ARIMA and Model Selection

An ARMA model describes a series whose mean and covariance do not change with time. Many observed series have persistent level changes or repeated seasonal means. ARIMA modelling first transforms a series by differencing and then places an ARMA relation on the transformed values. That simple sentence hides several choices: which difference, whether a drift remains, how to compare models fitted to the same data, and how to diagnose residual dependence. We derive the algebra of differencing and specify an honest selection workflow without treating one automated score as proof of a data-generating law.

Preparation is [trend and seasonality](series-trend-seasonality.md), [ARMA models](arma-models.md), and [forecast error](forecasting-prediction-error.md). We use B X_t=X_{t-1} and the plus-sign MA convention from Chapter 3. The letter d counts ordinary differences, D seasonal differences, and m observations per seasonal cycle. A “unit root” is a root of the AR polynomial on the unit circle; statistical evidence about one is not the same as visually noticing a trend.

## Differencing as an operator

**Definition 6.1 (ARIMA(p,d,q)).** Let W_t=(1-B)^d X_t. If W_t, after any declared mean or drift treatment, follows a causal stationary ARMA(p,q) relation, call X_t an ARIMA(p,d,q) model under that specification. The difference operator is applied d times: for d=1, W_t=X_t-X_{t-1}; for d=2, W_t=X_t-2X_{t-1}+X_{t-2}. Initial levels are needed to reconstruct X from W.

**Proposition 6.2 (Differenced random walk).** If X_t=X_{t-1}+c+epsilon_t for t≥1 with fixed initial X_0 and mean-zero finite-variance uncorrelated innovations, then Delta X_t=c+epsilon_t. If innovations are weak white noise, the differences are weakly stationary, while Var(X_t)=t sigma² when X_0 is fixed and the innovations are uncorrelated.

*Proof.* Subtract X_{t-1} from the recursion to obtain c+epsilon_t. Its constant mean, constant variance and zero nonzero-lag covariance follow from weak white noise. Iterating levels gives X_t=X_0+ct+sum_{j=1}^t epsilon_j; the sum variance is t sigma² by zero cross-covariances. Thus the level variance depends on t. ∎

**Worked example 6.3 (A drift is not a level mean).** Take X_0=10, c=2 and invented shocks (1,-1,0,2). The resulting levels are 13,14,16,20, because increments are 3,1,2,4. Differencing the observed levels together with the known X_0 recovers those increments; subtracting c recovers the shocks. A forecast from X_4=20 under zero-mean future shocks has E[X_5]=22 and E[X_6]=24, with forecast-error variances sigma² and 2sigma² if future shocks are independent with variance sigma². The drift is a mean increment, not a constant long-run mean of the level: a random walk with nonzero drift has no stationary level distribution under this construction.

Differencing is not free. If X_t=mu+epsilon_t with independent innovations, its first difference is epsilon_t-epsilon_{t-1}, an MA(1) with theta=-1 and lag-one correlation -1/2. Thus differencing an already stationary white-noise series creates an MA unit-root boundary and unnecessary negative dependence. Repeated differences can further amplify high-frequency noise and make forecasts unstable. A changing deterministic mean, a random walk and a single structural break can look similar in a short plot; they have different consequences for long-horizon uncertainty and should not be conflated by a mechanical differencing rule.

## Seasonal differences and overlapping factors

**Definition 6.4 (Seasonal ARIMA).** A seasonal model with period m uses W_t=(1-B)^d(1-B^m)^D X_t and fits a stationary ARMA relation to W_t with ordinary and seasonal lag polynomials. The period m is declared from sampling and a plausible recurring cycle; it is not discovered merely because one sample autocorrelation happens to peak at m.

**Proposition 6.5 (One ordinary and one seasonal difference).** Applying (1-B)(1-B^m) to X_t gives X_t-X_{t-1}-X_{t-m}+X_{t-m-1} whenever all four observations exist.

*Proof.* Multiply the two polynomials: (1-B)(1-B^m)=1-B-B^m+B^{m+1}. Applying each lag term to X_t gives the stated four-value contrast. The operators commute because both are polynomials in B. ∎

**Worked example 6.6 (A seasonal contrast).** For quarterly m=4, suppose the invented sequence starts 12,18,14,20,14,20,16,22. The seasonal difference at time five is X_5-X_1=14-12=2. At time six it is X_6-X_2=20-18=2. Applying an ordinary difference to the seasonal differences gives zero at time six: (X_6-X_2)-(X_5-X_1)=2-2=0. The result matches the constructed pattern of a two-unit year-over-year increase. It does not show that a real seasonal series needs both d=1 and D=1; in this example the seasonal difference alone is constant, and the extra ordinary difference removes that constant.

Seasonal differencing removes an exactly repeated deterministic seasonal component because s_t-s_{t-m}=0. It also transforms the noise and can introduce correlations at lag m. Seasonal and ordinary differences share a factor when m>1: 1-B^m=(1-B)(1+B+...+B^{m-1}). Using both may impose two ordinary unit-root factors. That may be warranted for some processes, but it should not happen silently. A forecast reconstructed from differences also needs the last observed levels in the correct seasonal positions.

## Identification and residual checks

A practical route begins with a time plot, missingness and unit checks. Next ask whether a deterministic transformation or difference is warranted, then fit a small set of stationary candidate error models. Use an autocorrelation plot and partial autocorrelation as clues, not exact order certificates. Check estimated roots against causal and invertible conditions; a fit near a boundary calls for particular caution. Compare models on the same transformed target and estimation convention. Finally inspect residuals for remaining lag dependence, changing variance and exceptional observations, and compare forecasts at origins that respect time order.

Residuals are not the unobserved true innovations merely because a routine names them so. They depend on fitted coefficients and initialization. The sample autocorrelation of fitted residuals has a different uncertainty distribution from that of independent observed noise because parameters were estimated. A portmanteau statistic such as Ljung–Box combines several residual autocorrelations, but its reference law depends on chosen lags, effective parameter count and model assumptions. We use it as a diagnostic with those qualifications, not as a certificate that the whole model is true.

**Definition 6.7 (Information criterion).** For a fitted model with maximized log likelihood ell and k counted free parameters, AIC=-2ell+2k. A common small-sample correction is AICc=AIC+2k(k+1)/(n-k-1), defined when n>k+1 under the relevant likelihood convention. These are relative fit-complexity scores; a smaller score among comparable candidates is preferred by the criterion. They do not test a model against all alternatives or state the future forecast loss directly.

**Worked example 6.8 (AICc reverses a short-sample ranking).** With n=20, candidate A has ell=-25 and k=2, so AIC=50+4=54 and AICc=54+12/17, about 54.706. Candidate B has ell=-22 and k=5, so AIC=44+10=54, tied on AIC, while AICc=54+60/14, about 58.286. The correction prefers A among these two comparable likelihood fits. If the candidates were fitted to different response transformations or different observations, these numbers would not by themselves be comparable. The example is arithmetic with invented likelihood values, not the output of a fit.

AICc has derivations for particular likelihood settings; its displayed formula is a common correction, not a universal finite-sample risk identity for every ARIMA implementation. An automated search over many orders further makes the selected score optimistically biased as an estimate of held-out performance. Time-respecting forecast evaluation supplies a complementary question: whether the selected model actually predicts better than simple baselines on later observations.

## A level shift can imitate a unit root

Consider a deterministic sequence with mean zero through time ten and mean five from time eleven onward, with independent mean-zero noise of fixed variance added at every time. Before and after the change, deviations about the local mean are white noise. A whole-series plot may show a persistent high level after time eleven, and a first difference produces one large pulse near the transition. Treating that pulse as evidence of a random walk would be a modelling error: the level shift is a single event, while a random walk accumulates a new shock at every time. Their future level uncertainties differ sharply. If the post-change mean remains five, the best simple long-run forecast under this construction stays near five with bounded noise variance; a random-walk forecast carries uncertainty growing with horizon.

This thought experiment does not license detecting a break by choosing the time that makes the fitted residuals look smallest and then reporting an ordinary fixed-time significance test. Searching over break locations changes the reference distribution. If an intervention time is known from external records, include its indicator explicitly and state that provenance. If it is unknown, use a change-point method with its own multiplicity and dependence assumptions. Chapter 11 develops finite contrast calculations and carefully bounds what they establish.

## Forecasting after differencing

An ARIMA model forecasts transformed values W_t, but the user usually wants levels X_t. For one ordinary difference, future levels are reconstructed by adding predicted increments to the last observed level. If the next two predicted increments are a and b, then the first level prediction is X_n+a and the second is X_n+a+b. The two level errors accumulate future increment errors, so their variance is not generally the same as the variance of one predicted increment. In the random-walk case with independent variance sigma² shocks, the h-step level error is a sum of h future shocks and has variance h sigma², matching Proposition 6.2.

For a seasonal difference with period four, reconstruct the next four quarters from the corresponding observed quarters of the last year, then add predicted seasonal changes. Using only X_n as a common base for all four would ignore which seasonal position each target occupies. If ordinary and seasonal differences are both present, reverse the operators in a consistent order and keep all required initial values. The algebra of the difference polynomials commutes, but a finite forecast implementation still needs a boundary convention. A reproducible report should state the transformation, the initial level vector, and whether its interval reflects estimation uncertainty as well as future innovation uncertainty.

## Choosing among close candidates

Suppose two ARIMA candidates have comparable likelihoods and one additional parameter lowers AIC by only a fraction of a unit. This is weak relative evidence in the criterion's own scale, not proof that the larger order generated the observations. The candidates may produce nearly identical one-step forecasts yet different long-horizon intervals. Compare the forecasts at the horizons that matter for the application. Check whether an estimated root lies near the unit circle, because near-boundary coefficients can make long-horizon behaviour sensitive to small estimation changes. Check residual autocorrelation at a declared finite lag range and residual variance patterns; a low AIC does not ensure constant innovation variance.

Model selection is part of the fitting procedure. If candidate orders, transformations and seasonal periods were chosen using the entire observed series, then evaluating the final chosen model on an earlier slice of that same series is retrospective description, not a clean holdout. A rolling-origin evaluation must repeat the selection step using only each origin's past, or else set aside later data before any selection. This is often more work than a single automatic fit, but it answers the actual prediction question without target leakage.

## A self-contained R recipe

The listing constructs the eight invented quarterly values, shows both differences, and computes the invented AIC table. It uses base R only and has no external package or dataset. The outputs are not claimed to have been executed in this authoring session.

```r
x <- ts(c(12,18,14,20,14,20,16,22), frequency = 4)
ordinary <- diff(x, differences = 1)
seasonal <- diff(x, lag = 4, differences = 1)
both <- diff(seasonal, differences = 1)
candidate <- data.frame(name = c('A','B'), loglik = c(-25,-22), k = c(2,5))
n <- 20
candidate$aic <- -2 * candidate$loglik + 2 * candidate$k
candidate$aicc <- candidate$aic +
  2 * candidate$k * (candidate$k + 1) / (n - candidate$k - 1)
list(ordinary = ordinary, seasonal = seasonal, both = both,
     criteria = candidate)
```

For actual fitting, R's `stats::arima` documents its order, seasonal order, mean, transformation and likelihood settings. A fresh-session analysis must state those choices, keep missing-data handling explicit, and set an origin before computing forecast errors. This chapter leaves such a fit to a real, licensed dataset with a declared measurement process; it does not invent empirical success from the teaching vector.

## Exercises

### Exercise 6.1 {#arima-model-selection-ex-second-difference}

Expand (1-B)²X_t in observed values.
<details><summary>Hint 1</summary>Square 1-B as a polynomial.</details>
<details><summary>Hint 2</summary>Apply B and B² to X_t.</details>
<details><summary>Solution</summary>(1-B)²=1-2B+B², so the second difference is X_t-2X_{t-1}+X_{t-2}, defined only when all three values exist.</details>

### Exercise 6.2 {#arima-model-selection-ex-random-walk}

For X_t=X_{t-1}+epsilon_t with fixed X_0 and variance sigma² independent shocks, find Var(X_t).
<details><summary>Hint 1</summary>Iterate the recursion into a sum of t shocks.</details>
<details><summary>Hint 2</summary>Independent variances add.</details>
<details><summary>Solution</summary>X_t=X_0+sum_{j=1}^t epsilon_j. The fixed initial value has zero variance, and the t independent equal-variance shocks contribute t sigma². The level is not weakly stationary.</details>

### Exercise 6.3 {#arima-model-selection-ex-drift}

For random-walk drift c=2 and current value 20, give one- and two-step conditional means under zero-mean independent future shocks.
<details><summary>Hint 1</summary>Each future increment has conditional mean c.</details>
<details><summary>Hint 2</summary>Add the drift once per horizon step.</details>
<details><summary>Solution</summary>The conditional means are 20+2=22 and 20+2(2)=24. There is no stationary level mean toward which these forecasts revert.</details>

### Exercise 6.4 {#arima-model-selection-ex-seasonal}

Compute the period-four difference at time six for the sequence in Worked example 6.6.
<details><summary>Hint 1</summary>Compare time six with time two.</details>
<details><summary>Hint 2</summary>Subtract 18 from 20.</details>
<details><summary>Solution</summary>The seasonal difference is X_6-X_2=20-18=2. It compares the same quarter across consecutive years in this constructed quarterly series.</details>

### Exercise 6.5 {#arima-model-selection-ex-double}

Expand (1-B)(1-B^4)X_6 and evaluate it for the first six values of the constructed quarterly series.
<details><summary>Hint 1</summary>The terms are X_6-X_5-X_2+X_1.</details>
<details><summary>Hint 2</summary>Use 20,14,18,12 in that order.</details>
<details><summary>Solution</summary>The contrast is 20-14-18+12=0. Equivalently, consecutive seasonal differences are both two, and their ordinary difference is zero.</details>

### Exercise 6.6 {#arima-model-selection-ex-overdifference}

What MA(1) relation results from differencing independent white noise X_t=epsilon_t?
<details><summary>Hint 1</summary>Write X_t-X_{t-1} explicitly.</details>
<details><summary>Hint 2</summary>Compare with Y_t=epsilon_t+theta epsilon_{t-1}.</details>
<details><summary>Solution</summary>The difference is epsilon_t-epsilon_{t-1}, so theta=-1 in our MA sign convention. Its lag-one autocorrelation is -1/2 and the MA factor lies on the invertibility boundary, showing why unnecessary differencing is harmful.</details>

### Exercise 6.7 {#arima-model-selection-ex-factor}

Factor the period-four seasonal difference 1-B^4 to show it already contains an ordinary difference.
<details><summary>Hint 1</summary>Use the finite geometric-sum identity.</details>
<details><summary>Hint 2</summary>Multiply 1-B by 1+B+B²+B³.</details>
<details><summary>Solution</summary>1-B^4=(1-B)(1+B+B²+B³). Thus applying both an ordinary and a seasonal difference includes (1-B) twice, a choice requiring model justification.</details>

### Exercise 6.8 {#arima-model-selection-ex-aic}

Compute AIC for ell=-25 and k=2.
<details><summary>Hint 1</summary>Use -2ell+2k.</details>
<details><summary>Hint 2</summary>The fit term is 50 and the penalty is four.</details>
<details><summary>Solution</summary>AIC=-2(-25)+2(2)=50+4=54. It is a relative score and does not state an absolute probability that the model is correct.</details>

### Exercise 6.9 {#arima-model-selection-ex-aicc}

With n=20, k=5 and AIC=54, compute the displayed AICc correction.
<details><summary>Hint 1</summary>The denominator is n-k-1=14.</details>
<details><summary>Hint 2</summary>The numerator is 2k(k+1)=60.</details>
<details><summary>Solution</summary>AICc=54+60/14=54+30/7, about 58.286. The formula is defined here because 20>5+1.</details>

### Exercise 6.10 {#arima-model-selection-ex-comparability}

Why can two AIC values be misleading when one model was fitted to levels and another to logged values with differently handled likelihood constants?
<details><summary>Hint 1</summary>Ask whether the likelihoods describe the same observed response measure.</details>
<details><summary>Hint 2</summary>A transformation changes densities by a Jacobian factor.</details>
<details><summary>Solution</summary>AIC compares maximized log likelihoods on a common data and density scale with compatible conventions. Logging changes the response density and introduces a Jacobian term; dropping or inconsistently including it changes the numerical score. Direct comparison without a common likelihood basis can rank bookkeeping choices rather than models.</details>

## Sources

Original Euler proofs, invented quarterly values, likelihood arithmetic and exercises under CC BY-SA 4.0. ARIMA notation and forecasting workflow are informed by Brockwell and Davis, *Time Series: Theory and Methods*, second edition, and Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition. No external data or fitted result is reproduced.

## Summary

ARIMA applies an ARMA model to a declared difference, while initial levels remain necessary to reconstruct forecasts. Ordinary and seasonal differencing can remove exact deterministic patterns but can also create dependence and over-difference a stable series. Information criteria compare candidate likelihood fits under common conventions; residual checks and time-ordered forecasts address different questions. The next chapter views the same dependence through frequency and periodograms.
