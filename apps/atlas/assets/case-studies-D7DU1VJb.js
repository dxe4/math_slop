var e=`---
parent_id: book-time-series
chapter_id: case-studies
title: Case Studies
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Case Studies

A complete time-series argument starts before a model name. It states the measurement interval, which values were available at each decision, the target and loss, the assumptions connecting a finite pattern to a probability process, and the comparison that could reveal failure. This chapter develops three source-owned teaching cases: a quarterly seasonal forecast, a recursive AR prediction, and a common-trend spread. Their numbers are deliberately simple enough for exact hand checks. They are synthetic examples under CC BY-SA 4.0, not observations from an external dataset or evidence that any forecasting method succeeds in a real application.

Preparation spans [trend and seasonality](series-trend-seasonality.md), [forecasting](forecasting-prediction-error.md), [ARIMA selection](arima-model-selection.md), [state-space filtering](state-space-kalman-filter.md), and [multivariate series](multivariate-series-cointegration.md). The cases use a declared origin and no data after it in a forecast rule. R listings at the end are self-contained base-R recipes; their outputs were not executed or asserted during this source-authoring pass.

## A case-study ledger

For each series, first write the observation contract: variable, unit, interval, timestamp convention, missingness and revisions. Next name the target: one-step mean, multi-step level, interval coverage, or another quantity. Then choose a training window and holdout origins before fitting or tuning. State any deterministic preprocessing—centering, log transform, seasonal adjustment or differencing—and whether it was learned within each training window. Only then choose candidate stochastic models and baselines. Finally report exact calculation or held-out scores, residual limitations and the alternative mechanisms still plausible.

**Definition 12.1 (Origin-safe rule).** A forecasting rule at origin n is origin-safe if every input used to produce its forecast is measurable from information available through n under the declared release calendar. An observed value stamped time n but released after the forecast deadline is not in that information set. A retrospective smoother using target-period observations is also not origin-safe for an earlier forecast.

This definition is about information, not software syntax. A script can index only rows numbered at most n yet still leak information through coefficients estimated on the full series or a transformation trained on later outcomes. Conversely a model can use a later calendar timestamp if its value was genuinely known in advance, such as a planned holiday; the release contract explains why. Evaluating an origin-safe rule requires reconstructing the information available at each origin, not merely splitting a table by row number.

## Case one: a constructed quarterly pattern

Use the twelve quarterly values from Chapter 1: year one 12,18,14,20; year two 14,20,16,22; year three 16,22,18,24. Let the forecast origin be the end of year two, n=8. The target is each of the next four quarterly levels, scored by mean absolute error across those four targets. The period-four seasonal-naive baseline repeats year-two values: 14,20,16,22. A trend-plus-seasonal rule uses only years one and two: their means are 16 and 18, so the annual mean rises by two; their within-year deviations are both (-4,2,-2,4). Extending one more year gives mean 20 and forecast (16,22,18,24).

**Worked example 12.2 (An origin-eight comparison).** Compare those forecasts with the invented year-three target (16,22,18,24). Seasonal naive misses each by two, so its four absolute errors are (2,2,2,2), MAE=2 and RMSE=2. The trend-plus-seasonal rule matches all four, so its observed holdout MAE and RMSE are zero. Both rules used only the first eight observations to set their predictions. The zero score is guaranteed by how the synthetic table was made; it is not evidence that a real seasonal process will extend the same trend. A fourth year with a level shift would reverse the apparent advantage.

The comparison isolates one useful question: does a two-year trend estimate add value over repeating last year's seasons? With only two training cycles, that slope is fragile. There is no defensible sampling standard error from the deterministic table alone. A real application would check whether the observation definition changed, whether the seasonal cycle is stable, and whether the forecast horizon matches the decision. It would also compare more than one origin if sufficient history exists, refitting every transformation and coefficient at each origin.

**Proposition 12.3 (No leakage in the two rules).** At origin eight, both the seasonal-naive and trend-plus-seasonal forecasts above are functions only of observations one through eight.

*Proof.* Seasonal naive copies positions five through eight. The trend-plus-seasonal rule computes means and within-year deviations from positions one through four and five through eight, then adds their estimated two-unit mean increment. No value in positions nine through twelve enters either rule's calculation. ∎

That proposition verifies availability, not predictive quality. A method can be origin-safe and still inaccurate. It also does not make the choice between methods origin-safe if the analyst picked the winner after seeing year three. To report a prospective procedure, the selection rule itself must be fixed at origin eight or evaluated on later untouched observations.

## Case two: an AR recursion with visible shocks

Take a centred AR(1) recursion x_t=(1/2)x_{t-1}+epsilon_t with x_0=0 and invented shock values (2,0,-1,0,1,-1/2). The resulting path is x_1=2, x_2=1, x_3=-1/2, x_4=-1/4, x_5=7/8, x_6=-1/16. These values are deterministic arithmetic for teaching. They are not a stationary sample: the initial state is fixed at zero, the shocks were chosen by the author, and no innovation distribution was sampled. We may nevertheless inspect the recursion and its forecast formula under a hypothetical causal AR model.

**Worked example 12.4 (A one-step origin-four error).** At origin four, the observed x_4 is -1/4. With known phi=1/2 and hypothetical zero-mean future innovation, the AR one-step point forecast is -1/8. The constructed x_5 is 7/8, so realized error target minus forecast is 1, equal to the chosen epsilon_5. A naive forecast would repeat -1/4 and err by 9/8. The AR forecast has smaller absolute error for this single target, but one comparison cannot estimate expected risk or validate the model. At origin five, the AR forecast for x_6 is 7/16; the realized -1/16 differs by -1/2, again the chosen next shock.

If independent future innovations have variance sigma², the theoretical one-step AR forecast error variance is sigma² and the two-step variance is sigma²(1+1/4). The constructed six shocks do not supply sigma² as a known population parameter. Calculating their empirical variance and inserting it into an interval would be a fitted-model step with uncertainty and strong small-sample limitations. In particular, the path began at a fixed nonstationary initialization; the stationary AR marginal variance formula sigma²/(1-1/4) does not describe the variance of x_0.

**Proposition 12.5 (Two-step error decomposition).** For a causal AR(1) with known phi and independent mean-zero future innovations, the two-step forecast error at origin n is phi epsilon_{n+1}+epsilon_{n+2}.

*Proof.* Iterate X_{n+2}-mu=phi²(X_n-mu)+phi epsilon_{n+1}+epsilon_{n+2}. The conditional-mean forecast at origin n retains the first term and drops the two future mean-zero shocks. Subtracting it from the target gives the displayed error. Independence makes its variance sigma²(1+phi²) for equal-variance shocks. ∎

The same case illustrates model diagnostics without claiming a test result. A fitted AR residual sequence should be inspected in time order for remaining mean pattern and changing spread. The chosen shocks include an initial large value and later smaller values, but six deliberately selected numbers cannot establish volatility clustering or non-Gaussianity. A diagnostic plot would be a question generator, not proof. The model's conditional mean and forecast variance remain separate targets.

## Case three: a shared trend and stationary spread

Use the finite vector arithmetic from Chapter 10. Let a common path be S=(0,1,3,2), and illustrative component disturbances a=(1,0,-1,0), b=(0,1,0,-1). Define X=S+a=(1,1,2,2) and Y=2S+b=(0,3,6,3). The proposed spread is Y-2X=(-2,1,2,-1). Every value of S cancels algebraically. Under the **separate population model** in Theorem 10.8, a and b would be jointly stationary and independent of a random-walk S, making the spread stationary while levels wander.

**Worked example 12.6 (A finite spread audit).** At time three, X_3=2 and Y_3=6, so Y_3-2X_3=2. The disturbance calculation gives b_3-2a_3=0-2(-1)=2. At time four, X_4=2 and Y_4=3, so the spread is -1, also b_4-2a_4=-1-0. These checks verify the constructed relation at two positions; the same algebra verifies all four. They do not estimate a cointegrating coefficient: the factor two was built into the synthetic definition. A real estimated coefficient and stationarity claim require a longer stochastic analysis with appropriate nonstationary reference theory.

Suppose an analyst regressed the invented Y levels on X and observed a visually close fit. That would not be a legitimate cointegration test. The four-level path was constructed with a common factor; its residual pattern is also hand-selected. Even for real data, a shared deterministic trend or coincident measurement changes can mimic a common stochastic trend. The inferential question is whether component levels satisfy an I(1) model and whether a particular combination has stable distributional behaviour under that model. Chapter 10 proves the illustrative construction and names general rank inference as an import.

**Proposition 12.7 (Normalization does not change the stationary direction).** If Z_t=Y_t-2X_t is stationary under a model, then X_t-Y_t/2 is stationary and equals -Z_t/2.

*Proof.* Rearranging gives X_t-Y_t/2=-(Y_t-2X_t)/2. A fixed nonzero scalar multiple of a stationary process is stationary because its finite-dimensional distributions, or its weak moments when using weak stationarity, transform consistently at every time shift. ∎

This case also has a forecasting boundary. Knowing a spread is stationary does not specify how each component responds to a spread deviation. An error-correction model needs coefficients describing that adjustment and stochastic errors; otherwise the algebra cannot produce a unique pair of future level forecasts. It may still inform a diagnostic: if a proposed pair model generates a spread that drifts without bound, it conflicts with the stated cointegration assumption.

## A common reporting standard

For all three cases, keep an evidence table in prose: the source of each number, the observation interval and origin, the mathematical identity proved, the stochastic assumptions added, and the empirical claim that remains unestablished. The quarterly case proves a finite forecast-score comparison. The AR case proves a recursion and error decomposition. The spread case proves a cancellation and a conditional population theorem. None proves real-world reliability. A good report can make that distinction clearly without weakening the mathematics.

If a real dataset is introduced later, record its publisher, stable source, license, acquisition date, revisions, units and missingness convention before copying values into a chapter. A public web page is not itself proof of an open data license. This book deliberately uses source-owned illustrative numbers so the rights and provenance of every printed table are unambiguous. External datasets may be used in a later independently reviewed edition after their rights and observation process are checked.

## Inert base-R case calculations

The listing includes all three invented vectors and computes their exact finite contrasts. It uses base R only and no external data. It is a complete copyable recipe but was not executed during authoring.

\`\`\`r
quarterly <- c(12,18,14,20,14,20,16,22,16,22,18,24)
training <- quarterly[1:8]
target <- quarterly[9:12]
seasonal_naive <- training[5:8]
year_mean <- c(mean(training[1:4]), mean(training[5:8]))
season <- training[5:8] - year_mean[2]
trend_season <- year_mean[2] + diff(year_mean) + season
seasonal_mae <- mean(abs(target - seasonal_naive))
trend_mae <- mean(abs(target - trend_season))

shock <- c(2,0,-1,0,1,-0.5)
ar_path <- numeric(length(shock))
previous <- 0
for (t in seq_along(shock)) {
  ar_path[t] <- 0.5 * previous + shock[t]
  previous <- ar_path[t]
}

common <- c(0,1,3,2); a <- c(1,0,-1,0); b <- c(0,1,0,-1)
x <- common + a; y <- 2 * common + b
list(seasonal_mae = seasonal_mae, trend_mae = trend_mae,
     ar_path = ar_path, spread = y - 2*x)
\`\`\`

The listing evaluates already chosen rules; it does not fit a stochastic variance, estimate a cointegration rank or run a prediction-interval calibration. Those omissions are honest boundaries of the synthetic cases, not missing numerical outputs.

## Exercises

### Exercise 12.1 {#case-studies-ex-origin}

At origin eight of the quarterly case, which observations may a forecast for positions nine through twelve use?
<details><summary>Hint 1</summary>The origin is the last observed position.</details>
<details><summary>Hint 2</summary>Do not include any target-period value in fitting or transformation.</details>
<details><summary>Solution</summary>Only values one through eight and genuinely preknown covariates may enter. Values nine through twelve are future targets, so a seasonal index or slope estimated from them would leak outcome information.</details>

### Exercise 12.2 {#case-studies-ex-seasonal-naive}

Give the four seasonal-naive forecasts at origin eight for the constructed quarterly series.
<details><summary>Hint 1</summary>Repeat the four observed quarters of year two.</details>
<details><summary>Hint 2</summary>Read positions five through eight.</details>
<details><summary>Solution</summary>The forecasts are (14,20,16,22). The actual invented third-year values are (16,22,18,24), so every seasonal-naive error is two.</details>

### Exercise 12.3 {#case-studies-ex-trend-season}

Compute the trend-plus-seasonal forecast for year three using only the first two annual means and deviations.
<details><summary>Hint 1</summary>The means are 16 and 18, an increment of two.</details>
<details><summary>Hint 2</summary>Add deviations (-4,2,-2,4) to proposed mean 20.</details>
<details><summary>Solution</summary>The proposed third-year mean is 20. Adding seasonal deviations gives (16,22,18,24). Its zero score on the constructed target reflects how the data were authored, not a real-world guarantee.</details>

### Exercise 12.4 {#case-studies-ex-mae}

Calculate seasonal-naive MAE and trend-plus-seasonal MAE on the four held-out invented quarters.
<details><summary>Hint 1</summary>Seasonal-naive errors are all two.</details>
<details><summary>Hint 2</summary>The trend-plus-seasonal errors are all zero.</details>
<details><summary>Solution</summary>MAE is (2+2+2+2)/4=2 for seasonal naive and zero for trend plus seasonality. The comparison is exact for the synthetic holdout only.</details>

### Exercise 12.5 {#case-studies-ex-ar-recursion}

With x_0=0, phi=1/2 and shocks (2,0,-1), find x_1,x_2,x_3.
<details><summary>Hint 1</summary>Apply x_t=(1/2)x_{t-1}+epsilon_t sequentially.</details>
<details><summary>Hint 2</summary>Carry each new value into the next step.</details>
<details><summary>Solution</summary>x_1=2, x_2=(1/2)2+0=1, and x_3=(1/2)1-1=-1/2. The fixed initial value does not make the path stationary.</details>

### Exercise 12.6 {#case-studies-ex-ar-error}

At origin four with x_4=-1/4 and next target x_5=7/8, compute the known-phi AR forecast and realized error.
<details><summary>Hint 1</summary>Forecast by multiplying x_4 by one half.</details>
<details><summary>Hint 2</summary>Subtract forecast from target.</details>
<details><summary>Solution</summary>The forecast is -1/8. The error is 7/8-(-1/8)=1, exactly the chosen fifth shock. One realized error does not estimate expected forecast loss.</details>

### Exercise 12.7 {#case-studies-ex-two-step}

Write the two-step AR(1) forecast error in terms of future shocks and phi.
<details><summary>Hint 1</summary>Iterate the recursion twice.</details>
<details><summary>Hint 2</summary>Remove the known phi² current-state term.</details>
<details><summary>Solution</summary>The error is phi epsilon_{n+1}+epsilon_{n+2}. With independent equal-variance shocks, its variance is sigma²(phi²+1).</details>

### Exercise 12.8 {#case-studies-ex-spread}

For the case-three values X_3=2, Y_3=6, a_3=-1 and b_3=0, verify the spread in two ways.
<details><summary>Hint 1</summary>Compute Y_3-2X_3.</details>
<details><summary>Hint 2</summary>Compute b_3-2a_3.</details>
<details><summary>Solution</summary>The observed combination is 6-2(2)=2. The disturbance combination is 0-2(-1)=2. Both agree because the common S_3 cancels algebraically.</details>

### Exercise 12.9 {#case-studies-ex-cointegration-limits}

Why do four exact spread values fail to establish cointegration as a statistical claim?
<details><summary>Hint 1</summary>Cointegration assumes I(1) component processes and a stationary combination.</details>
<details><summary>Hint 2</summary>A finite constructed path does not reveal a population law.</details>
<details><summary>Solution</summary>The four values verify an authored algebraic relation, but they cannot establish that either level is I(1) or that the spread has a time-invariant distribution. Those are process-level assumptions requiring a stochastic model and appropriate inference from real observations.</details>

### Exercise 12.10 {#case-studies-ex-rule-selection}

Why is selecting the trend rule after seeing the perfect year-three score not an origin-eight forecasting procedure?
<details><summary>Hint 1</summary>Separate issuing forecasts from choosing which rule to report.</details>
<details><summary>Hint 2</summary>The selection used target values nine through twelve.</details>
<details><summary>Solution</summary>Although each candidate forecast used only the first eight values, choosing the winner after observing year three uses future outcomes in the overall procedure. A prospective rule must fix selection at origin eight or assess it on later untouched targets.</details>

## Sources

All case values, calculations, prose and exercises are original Euler material under CC BY-SA 4.0. The analysis ledger follows the forecast-origin and model-checking themes of Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition, and Brockwell and Davis, *Time Series: Theory and Methods*, second edition. No external dataset, R execution, fitted estimate or independent review is claimed.

## Summary

The quarterly case demonstrates an exact origin-safe holdout calculation, the AR case an innovation-driven prediction error, and the multivariate case algebraic cancellation of a common trend under a separate population theorem. Their synthetic success is mathematical illustration, not empirical validation. A complete real analysis would add measurement provenance, licensed data, declared forecast origins, model diagnostics, uncertainty assumptions and independently assessed conclusions.
`;export{e as default};