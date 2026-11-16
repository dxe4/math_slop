
# Series, Trend and Seasonality

A row of measurements becomes a time series when its order matters. Rearranging observations leaves an ordinary sample mean unchanged but destroys runs, lags, periodic patterns and forecast origins. We begin with a finite, wholly illustrative quarterly series, distinguish a systematic mean from a stochastic remainder, and calculate trend and seasonal summaries before fitting a probability model. By the end, a reader should be able to say what was measured, when it was available, which pattern is descriptive, and which assumption would be needed to extend that pattern into a forecast.

Preparation is [Regression: least squares](../regression-and-generalised-linear-models/linear-model-least-squares.md) and [Probability: covariance](../probability-models-proofs/covariance-regression-and-inequalities.md). We use a discrete index t=1,...,n and call the spacing one quarter when observations are quarterly. An observed value is x_t, a random variable before observation is X_t, and a forecast made at origin n for time n+h may use information through n only. All numeric data in this chapter were invented for Euler under CC BY-SA 4.0. They are not records of an external population.

## Index, units and the question being asked

**Definition 1.1 (Regular series).** A regularly spaced series has observations at successive positions of a declared interval, such as one day or one quarter. Its frequency m is the number of positions in a named cycle; quarterly data have m=4 when the yearly cycle is the one under study. Frequency here means observations per cycle. Later, spectral frequency will mean cycles per time step. Keeping those meanings separate prevents a factor-of-four error.

The pair (t,x_t) is incomplete without units, interval and observation convention. A flow measured during a quarter differs from a stock recorded at quarter end. Calendar gaps do not become zeros merely because a plotting function wants a complete grid. Repeated or irregular timestamps require a decision about aggregation before a lag has a consistent interpretation. A time plot should show the index and the original measurement unit, including any missing positions. Its shape can suggest a model but cannot establish stationarity, a causal mechanism or a future recurrence on its own.

For a concrete teaching series, take three years of quarterly values. In year one the four observations are 12,18,14,20; in year two they are 14,20,16,22; in year three they are 16,22,18,24. These are arbitrary unitless counts chosen to make calculations transparent. Their regular structure is deliberate: each year increases by two, while the within-year deviations repeat. That makes them useful for checking a decomposition and poor evidence for how real noisy data behave. Every later claim of uncertainty will require an explicit stochastic model, not this deterministic table.

## Additive components and identifiability

**Definition 1.2 (Additive decomposition).** Write X_t=m_t+s_t+R_t, where m_t is a slowly changing mean or trend, s_t is a periodic component with period m, and R_t is the remainder. For a seasonal pattern indexed by j=1,...,m, impose sum_j s_j=0. Without that constraint, adding a constant to every s_j and subtracting it from m_t gives the same X_t, so the components are not identified.

The word trend sometimes means a deterministic function of time, sometimes a slowly varying random process. Those are distinct models. Here m_t is a deterministic summary; no assertion about independence or distribution of R_t follows from the algebraic decomposition. A decomposition can always be forced on a finite table, but it earns predictive meaning only if the components continue sufficiently stably beyond the observed window. A structural break, changing calendar, or changing measurement rule can defeat that extrapolation.

**Worked example 1.3 (Quarterly additive pattern).** The three annual means are 16,18,20. Taking them as the year-level trends, subtract the appropriate annual mean from each quarter. Every year gives the seasonal deviations (-4,2,-2,4), whose sum is zero. For year three quarter two, 20+2=22; for quarter four, 20+4=24. The residual is zero because the data were constructed that way. A naive fourth-year extension of the same pattern gives trend 22 and proposed values 18,24,20,26. These are extrapolations under the explicit continuation assumption, not estimates with a known prediction error. If year four changes regime, the calculation has no protection against that change.

The annual mean alone cannot tell whether the increase happened gradually within a year or jumped between years. A linear time trend could be fit to the twelve positions, but then its slope and seasonal effects would need to be estimated jointly. The simple annual means are a transparent descriptive device for this constructed example, not an assertion that year boundaries are the mechanism. In a real series one would compare the residual pattern after fitting, inspect missingness, and report forecast evaluation on observations withheld in time order.

## Multiplicative seasonality and transformations

An additive seasonal component has a fixed difference in original units. If a quarter is about twenty units above the trend at every level, additive modelling may be reasonable. A multiplicative component writes a positive series as X_t=m_t c_t e_t with seasonal factors c_j whose geometric mean is one. The seasonal effect is then a ratio: a quarter may be consistently ten percent higher. Logs turn positive multiplicative components into additive ones: log X_t=log m_t+log c_t+log e_t. This is an algebraic transformation, not a proof that log errors are Gaussian or homoscedastic.

**Proposition 1.4 (Ratio contrast).** If X_t=m_t c_j with m_t>0, the ratio X_t/m_t equals c_j regardless of the trend level. If X_t=m_t+s_j instead, the difference X_t-m_t equals s_j regardless of trend level.

*Proof.* Divide the first identity by positive m_t and subtract m_t in the second identity. The operations are reversible under the stated positivity condition. Neither identity remains informative if m_t is guessed with systematic bias, so the proposition describes the model rather than validating its fitted components. ∎

**Worked example 1.5 (Ratios versus differences).** Suppose a teaching series has two annual baselines, 100 and 200, and its first-quarter values are 110 and 220. The differences are 10 and 20, so one fixed additive seasonal effect cannot explain both exactly. The ratios are 1.1 and 1.1, consistent with a ten-percent factor. Their logs differ from the log baselines by log(1.1) in both years. If a third baseline were zero, the ratio and log calculation would be undefined; a transformation designed for positive values cannot be applied by silently replacing zero with a convenient number. One should instead change the model or explain a justified offset.

The log scale changes interpretation of forecasts. Exponentiating a forecast of a conditional log mean usually does not give the conditional mean on the original scale, because averaging and exponentiation do not commute. Under a Gaussian log error with variance v, the mean correction is exp(v/2) times the exponentiated log mean; without that distributional assumption no universal correction exists. If the target is a median or a geometric mean, the uncorrected exponentiation may have a different legitimate interpretation. A report should name the target rather than merely “back-transforming.”

## Moving averages, edge effects and leakage

**Definition 1.6 (Trailing moving average).** For a complete regular series and a positive integer k, the trailing k-point mean at t is M_t=(x_t+x_{t-1}+...+x_{t-k+1})/k for t at least k. It uses no observation after t and is therefore available at time t. A centred moving average uses observations on both sides of its label and is a descriptive smoother, not an online forecast feature at that label.

**Worked example 1.7 (Four-quarter trailing mean).** For the first year, the trailing four-quarter mean at t=4 is (12+18+14+20)/4=16. At t=5, the window is 18,14,20,14, so M_5=66/4=16.5. The first three positions have no four-point trailing mean unless an edge rule is supplied. If the plotted value at t=4 were instead computed from positions 3 through 6, it would contain two observations unavailable at t=4. That may be appropriate for a historical trend display but would leak future information into an evaluation pretending to forecast from t=4.

For an even-length centred smoother, there is no single middle observation. One convention averages adjacent four-point means to align their centre at an integer index. It may reduce seasonal oscillation, but it loses observations near both ends and cannot be used at the current endpoint without future values. A different boundary rule such as padding changes the estimator. Report the window and edge treatment alongside a smoothed curve; otherwise a plotted “trend” is not reproducible.

**Proposition 1.8 (One-step difference of a linear trend).** If m_t=a+bt, its first difference m_t-m_{t-1} equals b for every t with both terms defined. If s_t repeats with period m, the seasonal difference s_t-s_{t-m} equals zero.

*Proof.* Subtract a+b(t-1) from a+bt to obtain b. Periodicity gives s_t=s_{t-m}, so their difference is zero. For X_t=m_t+s_t+R_t, differencing also transforms the remainder, whose covariance need not retain its earlier form. ∎

These identities motivate differencing in the ARIMA chapter. They do not say that every trended series becomes stationary after one difference. A nonlinear deterministic trend may leave a changing mean, a change point may create a pulse, and seasonal differencing can introduce additional dependence. The choice of order should be supported by the target model and out-of-sample behaviour, not by repeatedly differencing until a plot seems flat.

## A source-owned R recipe

The following base-R listing contains every observation it uses. It is a readable recipe, not a claim that code was run during this authoring pass. `cycle` uses the declared quarterly frequency; `tapply` computes year means without importing a dataset. A reader can alter the values and inspect how the seasonal deviations cease to be exact.

```r
quarterly <- ts(c(12,18,14,20, 14,20,16,22, 16,22,18,24),
                start = c(1,1), frequency = 4)
year <- rep(1:3, each = 4)
annual_mean <- tapply(as.numeric(quarterly), year, mean)
seasonal_deviation <- as.numeric(quarterly) - rep(annual_mean, each = 4)
four_quarter_trailing <- stats::filter(quarterly, rep(1/4,4), sides = 1)
data.frame(year, quarter = as.integer(cycle(quarterly)),
           value = as.numeric(quarterly), seasonal_deviation,
           trailing = as.numeric(four_quarter_trailing))
```

The `filter` call is explicitly one-sided. Its early undefined positions are expected, not missing measurements. The constructed table has no stochastic sampling design; a p-value or confidence interval from a regression fitted to it would summarize an invented noise model. The exercise here is to understand the transformations, not to dress deterministic arithmetic as empirical evidence.

## A forecast origin is part of the model

To compare forecasting methods, reserve later observations as targets and fit each candidate using only earlier observations. With twelve quarters, for example, one could fit through quarter eight and ask for predictions of quarters nine through twelve. If a method is re-estimated after each newly observed quarter, state that rolling-origin rule explicitly; it is a different experiment from fixing the model at quarter eight. Seasonal estimates computed from all twelve values must not be fed into an earlier-origin forecast comparison. The leakage can be subtle: a seasonal index may look like harmless preprocessing, yet it already contains the outcome quarters the evaluation claims were withheld.

One short series cannot establish reliable performance across structural changes. For the constructed data, a rule that adds two to the value from four quarters earlier predicts the held-out year perfectly. That is a property of how the numbers were created. A genuine application should compare the rule with simpler baselines, report the target and error unit, and ask whether the mechanism supporting repetition is plausible. A perfect backtest on one artificial cycle is a calculation, not evidence of a general law.

## Exercises

### Exercise 1.1 {#series-trend-seasonality-ex-frequency}

What does frequency 4 mean for a quarterly series, and how does it differ from spectral frequency one quarter-cycle per observation?
<details><summary>Hint 1</summary>Count observations in one year.</details>
<details><summary>Hint 2</summary>A seasonal yearly cycle takes four time steps, so its cycles-per-step frequency is the reciprocal.</details>
<details><summary>Solution</summary>Frequency 4 in the time-series constructor means four observations per yearly cycle. One yearly oscillation occupies four quarterly steps, so its spectral frequency is 1/4 cycle per step. The two numbers have reciprocal units and should not be interchanged.</details>

### Exercise 1.2 {#series-trend-seasonality-ex-year-means}

Compute the annual means of the twelve source-owned quarterly values.
<details><summary>Hint 1</summary>Group positions 1–4, 5–8 and 9–12.</details>
<details><summary>Hint 2</summary>Divide each four-value sum by four.</details>
<details><summary>Solution</summary>The sums are 64,72 and 80. Dividing by four gives annual means 16,18 and 20. Their equal increments of two are a feature of the constructed table.</details>

### Exercise 1.3 {#series-trend-seasonality-ex-seasonal-zero}

Find the year-one seasonal deviations from its annual mean and check the identifying constraint.
<details><summary>Hint 1</summary>Subtract 16 from each of 12,18,14,20.</details>
<details><summary>Hint 2</summary>Add the resulting four deviations.</details>
<details><summary>Solution</summary>The deviations are -4,2,-2,4. Their sum is zero, so this four-quarter pattern satisfies the zero-sum normalisation of Definition 1.2.</details>

### Exercise 1.4 {#series-trend-seasonality-ex-nonidentification}

Explain why an additive decomposition without a zero-sum condition is nonunique.
<details><summary>Hint 1</summary>Start from X_t=m_t+s_t+R_t.</details>
<details><summary>Hint 2</summary>Move one constant c from trend into every seasonal term.</details>
<details><summary>Solution</summary>For any c, set m'_t=m_t-c and s'_t=s_t+c. Then m'_t+s'_t+R_t=m_t+s_t+R_t for every t. Thus the observations cannot distinguish the two decompositions; the zero-sum condition fixes this constant shift.</details>

### Exercise 1.5 {#series-trend-seasonality-ex-multiplicative}

Baselines 50 and 100 have same-season observations 55 and 110. Compare additive differences with multiplicative ratios.
<details><summary>Hint 1</summary>Subtract each baseline from its observation.</details>
<details><summary>Hint 2</summary>Divide each positive observation by its baseline.</details>
<details><summary>Solution</summary>The differences are 5 and 10, so a fixed additive effect does not match both. The ratios are both 1.1, so a ten-percent multiplicative seasonal factor matches exactly. This comparison alone does not establish a stochastic error law.</details>

### Exercise 1.6 {#series-trend-seasonality-ex-trailing}

Calculate the trailing four-quarter mean at position five of the constructed series.
<details><summary>Hint 1</summary>The window ends at position five and begins at position two.</details>
<details><summary>Hint 2</summary>Use 18,14,20,14.</details>
<details><summary>Solution</summary>The sum is 66 and the trailing mean is 66/4=16.5. Position one is outside the window; position six is not yet available at this origin.</details>

### Exercise 1.7 {#series-trend-seasonality-ex-leakage}

Why cannot a smoother at forecast origin five use observations six and seven to predict six honestly?
<details><summary>Hint 1</summary>State what information is available at origin five.</details>
<details><summary>Hint 2</summary>Check whether the smoother already contains its target or a later value.</details>
<details><summary>Solution</summary>A forecast made after observing position five can use positions through five only. A smoother containing six or seven uses future information, including the target six. Its apparent forecast accuracy would be contaminated by leakage rather than a genuine prediction.</details>

### Exercise 1.8 {#series-trend-seasonality-ex-difference}

For m_t=7+3t, compute m_t-m_{t-1} and explain what a period-four difference does to a repeating seasonal s_t.
<details><summary>Hint 1</summary>Subtract 7+3(t-1) from 7+3t.</details>
<details><summary>Hint 2</summary>Use s_t=s_{t-4}.</details>
<details><summary>Solution</summary>The first difference is 3 at every defined position. The period-four difference s_t-s_{t-4} is zero by repetition. Neither statement shows that a transformed random remainder is independent or stationary.</details>

### Exercise 1.9 {#series-trend-seasonality-ex-log-target}

Under log X distributed normally with mean a and variance v, why is exp(a) not the conditional mean of X when v>0?
<details><summary>Hint 1</summary>Recall the exponential moment of a normal variable.</details>
<details><summary>Hint 2</summary>Compare exp(a+v/2) with exp(a).</details>
<details><summary>Solution</summary>The lognormal moment gives E[X]=exp(a+v/2). For v>0 this exceeds exp(a), which is the median on the original scale. Exponentiating a fitted log mean without a target statement therefore changes the quantity being forecast.</details>

### Exercise 1.10 {#series-trend-seasonality-ex-gap}

A monthly record omits one month. Why is inserting zero before calculating a lag-one change generally unjustified?
<details><summary>Hint 1</summary>Distinguish no observation from an observed zero.</details>
<details><summary>Hint 2</summary>Consider what pairs a lag-one change should compare.</details>
<details><summary>Solution</summary>A missing month has an unknown value, whereas zero asserts a measured value of zero. Inserting zero creates two artificial changes adjacent to the gap and biases any lag summary. One must preserve the gap, use a justified missing-data model, or define an aggregation that does not invent the measurement.</details>

## Sources

Original Euler teaching text, invented quarterly values and exercises under CC BY-SA 4.0. The route is informed by Brockwell and Davis, *Time Series: Theory and Methods*, and Hyndman and Athanasopoulos, *Forecasting: Principles and Practice*, third edition (OTexts, 2021); no external dataset or book passage is reproduced. The latter authors' official online edition is https://otexts.com/fpp3/.

## Summary

Time indexing determines what a lag and a forecast origin mean. A zero-sum seasonal constraint identifies an additive decomposition, ratios describe multiplicative effects, and a trailing smoother has a different information set from a centred one. Differencing removes an exactly linear trend or exactly repeating seasonal component algebraically, but a probability model is still needed for uncertainty. The next chapter supplies stationary covariance and lag structure for that model.
