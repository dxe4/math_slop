
# Solutions: Lines for Description and Prediction

These solutions distinguish algebraic properties of a fitted line from model-based probability claims. Every numerical answer retains its measurement units and evidence boundary.

This document has independent copies of the chapter's original synthetic fixtures, so its canonical R blocks run in order in a fresh session. `R13-calibration-v1` has one calibration run per row, a unique `run_id`, a dimensionless programmed setting, and a reading in volts. `R13-study-sensitivity-v1` has one hypothetical learner per row, a unique `learner_id`, self-reported study hours, and assessment points. `R13-three-point-practice-v1` has one abstract pair per row, a unique `pair_id`, a dimensionless predictor, and a response in points. All are original Math Atlas version 1 fixtures with no missing values, missing codes, or exclusions; none is scientific evidence.

```r
# Independent literal fixtures for this solutions document.
calibration <- data.frame(
  run_id = c("cal-01", "cal-02", "cal-03", "cal-04"),
  setting_step = c(0, 1, 2, 3),
  reading_volts = c(1, 2, 2, 4),
  stringsAsFactors = FALSE
)
study <- data.frame(
  learner_id = sprintf("learner-%02d", 1:6),
  study_hours = c(0, 1, 2, 3, 4, 10),
  assessment_points = c(50, 52, 53, 55, 56, 48),
  stringsAsFactors = FALSE
)
high_scenario_points <- c(50, 52, 53, 55, 56, 68)
exercise_three <- data.frame(
  pair_id = c("pair-01", "pair-02", "pair-03"),
  predictor_units = c(1, 2, 4),
  response_points = c(2, 3, 7),
  stringsAsFactors = FALSE
)
det_tol <- function(expected) 1e-10 + 1e-8 * abs(expected)

stopifnot(identical(dim(calibration), c(4L, 3L)))
stopifnot(identical(dim(study), c(6L, 3L)))
stopifnot(identical(dim(exercise_three), c(3L, 3L)))
stopifnot(!anyNA(calibration), !anyNA(study), !anyNA(exercise_three))
stopifnot(!anyDuplicated(calibration$run_id))
stopifnot(!anyDuplicated(study$learner_id))
stopifnot(!anyDuplicated(exercise_three$pair_id))
```

## R-13-I01

The question is a controlled sensitivity question: holding all six predictor values and the first five responses fixed, what happens to the fitted descriptive line when the sixth response changes from 48 to 68 points?

For \(x=(0,1,2,3,4,10)\), \(\bar x=10/3\) and

\[
S_{xx}=\sum_i(x_i-\bar x)^2=\frac{190}{3}.
\]

The leverage of the sixth row is

\[
h_6=\frac16+\frac{(10-10/3)^2}{190/3}
=\frac{33}{38}\approx0.8684.
\]

This value uses only the predictor. It is unchanged when the sixth response moves.

The two fitted lines are

\[
\widehat{\text{score}}=53.368-0.311\,\text{hours}
\]

and

\[
\widehat{\text{score}}=49.684+1.795\,\text{hours}.
\]

Thus moving one response by 20 points changes the slope by about \(2.105\) points per hour and reverses its sign. The reference analysis follows.

```r
study_fit_low <- lm(
  assessment_points ~ study_hours,
  data = study,
  na.action = na.fail
)
study_high <- study
study_high$assessment_points <- high_scenario_points
study_fit_high <- lm(
  assessment_points ~ study_hours,
  data = study_high,
  na.action = na.fail
)

study_x_bar <- mean(study$study_hours)
study_s_xx <- sum((study$study_hours - study_x_bar)^2)
study_leverage <- 1 / nrow(study) +
  (study$study_hours - study_x_bar)^2 / study_s_xx
investigation_table <- data.frame(
  learner_id = study$learner_id,
  study_hours = study$study_hours,
  leverage = study_leverage,
  residual_if_48 = as.numeric(residuals(study_fit_low)),
  residual_if_68 = as.numeric(residuals(study_fit_high)),
  stringsAsFactors = FALSE
)

stopifnot(abs(study_x_bar - 10 / 3) <= det_tol(10 / 3))
stopifnot(abs(study_s_xx - 190 / 3) <= det_tol(190 / 3))
stopifnot(abs(coef(study_fit_low)[["study_hours"]] -
  (-0.310526315789474)) <= det_tol(-0.310526315789474))
stopifnot(abs(coef(study_fit_high)[["study_hours"]] -
  1.79473684210526) <= det_tol(1.79473684210526))
stopifnot(abs(study_leverage[6L] - 33 / 38) <= det_tol(33 / 38))
stopifnot(abs(sum(study_leverage) - 2) <= det_tol(2))
investigation_table
```

| Learner | Hours | Leverage | Residual if score 48 | Residual if score 68 |
|---|---:|---:|---:|---:|
| learner-01 | 0 | 0.342 | −3.368 | 0.316 |
| learner-02 | 1 | 0.253 | −1.058 | 0.521 |
| learner-03 | 2 | 0.195 | 0.253 | −0.274 |
| learner-04 | 3 | 0.168 | 2.563 | −0.068 |
| learner-05 | 4 | 0.174 | 3.874 | −0.863 |
| learner-06 | 10 | 0.868 | −2.263 | 0.368 |

The exact computed first five leverage values, rather than the rounded table values, sum with \(h_6\) to 2. In the low scenario, learner-05 has the largest residual magnitude even though learner-06 has the largest leverage. This is a useful separation: leverage describes predictor position; a residual describes vertical discrepancy from a particular fitted line. Neither establishes transcription error.

A complete bounded response is:

> In this six-row synthetic observational table, the fitted score-on-hours slope is \(-0.311\) points per hour when the 10-hour score is 48 and \(1.795\) points per hour when it is 68, holding all other values fixed. The 10-hour predictor has leverage \(0.868\), so the slope is highly sensitive to that row's response. This calculation gives no basis for deleting the row and no causal interpretation of self-selected study time. Provenance and measurement conditions would have to determine whether either response is credible.

Against the 12-point rubric, this earns 2 for a precise held-fixed question, 3 for correct coefficients and leverage with units, 2 for the numerical table and its prose reading, 2 for separating sensitivity from deletion, 2 for the observational and synthetic-data boundaries, and 1 for executable validation: 12/12. The required noncausal and no-automatic-deletion conditions are both met.

## R-13-E01

The means are

\[
\bar x=\frac{1+2+4}{3}=\frac73,\qquad
\bar y=\frac{2+3+7}{3}=4.
\]

Using centered values,

\[
\begin{aligned}
S_{xx}
&=\left(-\frac43\right)^2+
  \left(-\frac13\right)^2+
  \left(\frac53\right)^2
=\frac{14}{3},\\
S_{xy}
&=\left(-\frac43\right)(-2)+
  \left(-\frac13\right)(-1)+
  \left(\frac53\right)(3)
=8.
\end{aligned}
\]

Therefore

\[
b_1=\frac{8}{14/3}=\frac{12}{7},
\qquad
b_0=4-\frac{12}{7}\frac73=0.
\]

The fitted values are \((12/7,24/7,48/7)\). Observed minus fitted gives residuals \((2/7,-3/7,1/7)\). The third fitted value falls below 7 by \(1/7\), so its observed-minus-fitted residual is positive.

```r
exercise_x <- exercise_three$predictor_units
exercise_y <- exercise_three$response_points
exercise_x_bar <- mean(exercise_x)
exercise_y_bar <- mean(exercise_y)
exercise_s_xx <- sum((exercise_x - exercise_x_bar)^2)
exercise_s_xy <- sum(
  (exercise_x - exercise_x_bar) * (exercise_y - exercise_y_bar)
)
exercise_slope <- exercise_s_xy / exercise_s_xx
exercise_intercept <- exercise_y_bar - exercise_slope * exercise_x_bar
exercise_fitted <- exercise_intercept + exercise_slope * exercise_x
exercise_residual <- exercise_y - exercise_fitted
exercise_fit <- lm(exercise_y ~ exercise_x)

stopifnot(abs(exercise_x_bar - 7 / 3) <= det_tol(7 / 3))
stopifnot(abs(exercise_y_bar - 4) <= det_tol(4))
stopifnot(abs(exercise_s_xx - 14 / 3) <= det_tol(14 / 3))
stopifnot(abs(exercise_s_xy - 8) <= det_tol(8))
stopifnot(abs(exercise_slope - 12 / 7) <= det_tol(12 / 7))
stopifnot(abs(exercise_intercept) <= det_tol(0))
stopifnot(all(abs(exercise_fitted - c(12 / 7, 24 / 7, 48 / 7)) <=
  det_tol(c(12 / 7, 24 / 7, 48 / 7))))
stopifnot(all(abs(exercise_residual - c(2 / 7, -3 / 7, 1 / 7)) <=
  det_tol(c(2 / 7, -3 / 7, 1 / 7))))
stopifnot(all(abs(unname(coef(exercise_fit)) - c(0, 12 / 7)) <=
  det_tol(c(0, 12 / 7))))
```

## R-13-E02

The ordinary residual sum is

\[
\frac27-\frac37+\frac17=0.
\]

The predictor-weighted residual sum is

\[
1\left(\frac27\right)
+2\left(-\frac37\right)
+4\left(\frac17\right)
=\frac{2-6+4}{7}=0.
\]

The first identity says the fitted line with an intercept balances signed vertical residuals. It does not say every residual is zero: all three here are nonzero, and their squared sum is \(2/7\). Neither identity invokes a random error distribution, so neither supplies evidence of normality.

```r
exercise_residual_sum <- sum(exercise_residual)
exercise_weighted_residual_sum <- sum(exercise_x * exercise_residual)
exercise_sse <- sum(exercise_residual^2)

stopifnot(abs(exercise_residual_sum) <= det_tol(0))
stopifnot(abs(exercise_weighted_residual_sum) <= det_tol(0))
stopifnot(abs(exercise_sse - 2 / 7) <= det_tol(2 / 7))
stopifnot(all(abs(exercise_residual) > det_tol(0)))
c(
  residual_sum = exercise_residual_sum,
  x_weighted_residual_sum = exercise_weighted_residual_sum,
  residual_sum_of_squares = exercise_sse
)
```

## R-13-E03

The slope \(-0.08\) has units hours per degree Celsius. Within the observed 15–35 °C range, a one-degree higher operating temperature is associated with a fitted battery duration lower by 0.08 hour, or 4.8 minutes. This is a comparison of fitted values, not automatically a causal temperature effect.

The intercept 12.4 hours is the line's fitted duration at 0 °C. It is algebraically needed to locate the line, but 0 °C lies outside the observed range. Treating 12.4 hours as an evidence-supported mean duration at 0 °C would extrapolate the linear pattern by at least 15 degrees. Data near 0 °C or a scientifically justified process model would be needed for that use.

The slope interpretation over 15–35 °C is directly connected to observed predictor support. Even there, its inferential or causal meaning depends on how temperatures and batteries were selected or assigned.

## R-13-E04

- **(a) Least-squares algebra.** With an intercept and \(S_{xx}>0\), the fitted residuals sum to zero. No probability model is required.
- **(b) Exact-inference assumption.** The claim conditions on fixed predictor values. Fixed here is a feature of the repeated mechanism, not an algebraic necessity for computing a line.
- **(c) Exact-inference assumptions.** Independence, normality, zero means, common positive variance, \(n>2\), and \(S_{xx}>0\) are the stated conditions for the finite-sample conventional \(t\) intervals.
- **(d) Neither.** Causality needs an assignment design or another identification argument. Least-squares optimization and the normal error model do not create one.
- **(e) Least-squares algebra.** Minimizing squared vertical residuals is the defining criterion.
- **(f) Neither.** A plot can reveal incompatibility or raise concerns. Absence of a visible pattern cannot prove the assumptions, especially with few points.

It is tempting to put (a) and (e) under “model assumptions” because software reports them inside a fitted model object. They are instead mathematical consequences of how the coefficients were chosen.

## R-13-E05

The fitted residuals are \((0.1,0.2,-0.7,0.4)\) volts, so

\[
SSE=0.01+0.04+0.49+0.16=0.70\text{ V}^2.
\]

There are \(n-2=2\) residual degrees of freedom:

\[
s^2=0.70/2=0.35\text{ V}^2.
\]

At \(x_*=1.5=\bar x\), \(h_*=1/4\), the point prediction is 2.25 V, and \(t_{0.975,2}\approx4.3027\). The mean-response half-width is
\(4.3027\sqrt{0.35(0.25)}\approx1.2727\) V. The new-reading half-width is
\(4.3027\sqrt{0.35(1.25)}\approx2.8459\) V.

Thus the intervals are approximately \([0.9773,3.5227]\) V and
\([-0.5959,5.0959]\) V. The extra 1 supplies the variance of one new independent error. The mean target has parameter-estimation uncertainty but no new individual error.

```r
calibration_fit <- lm(
  reading_volts ~ setting_step,
  data = calibration,
  na.action = na.fail
)
calibration_residual <- residuals(calibration_fit)
calibration_s2 <- sum(calibration_residual^2) /
  calibration_fit$df.residual
center_data <- data.frame(setting_step = 1.5)
center_mean_interval <- predict(
  calibration_fit,
  newdata = center_data,
  interval = "confidence",
  level = 0.95
)
center_prediction_interval <- predict(
  calibration_fit,
  newdata = center_data,
  interval = "prediction",
  level = 0.95
)
center_h <- 1 / nrow(calibration)
center_t <- qt(0.975, df = calibration_fit$df.residual)
manual_mean <- c(
  fit = 2.25,
  lwr = 2.25 - center_t * sqrt(calibration_s2 * center_h),
  upr = 2.25 + center_t * sqrt(calibration_s2 * center_h)
)
manual_prediction <- c(
  fit = 2.25,
  lwr = 2.25 - center_t * sqrt(calibration_s2 * (1 + center_h)),
  upr = 2.25 + center_t * sqrt(calibration_s2 * (1 + center_h))
)

stopifnot(abs(calibration_s2 - 0.35) <= det_tol(0.35))
stopifnot(all(abs(center_mean_interval[1L, ] - manual_mean) <=
  det_tol(manual_mean)))
stopifnot(all(abs(center_prediction_interval[1L, ] - manual_prediction) <=
  det_tol(manual_prediction)))
stopifnot(
  diff(center_prediction_interval[1L, c("lwr", "upr")]) >
    diff(center_mean_interval[1L, c("lwr", "upr")])
)
rbind(
  conditional_mean = center_mean_interval[1L, ],
  one_new_observation = center_prediction_interval[1L, ]
)
```

Exact model-based coverage requires fixed design values, independent normal mean-zero errors with common positive variance, \(S_{xx}>0\), and \(n>2\); the future-error interval additionally requires the new error to be independent with the same variance. The synthetic endpoints alone cannot establish those conditions.

## R-13-E06

The leverage vector is approximately

\[
(0.3421,0.2526,0.1947,0.1684,0.1737,0.8684).
\]

The largest value belongs to learner-06 at 10 hours. It is distant from the predictor mean, so changing its response can strongly change the slope.

In the 48-point scenario, the residuals are approximately
\((-3.368,-1.058,0.253,2.563,3.874,-2.263)\) points. In the 68-point scenario, they are approximately
\((0.316,0.521,-0.274,-0.068,-0.863,0.368)\) points. The row with the highest leverage is not the row with the largest residual in the 48-point scenario.

```r
expected_leverage <- c(
  0.342105263157895,
  0.252631578947368,
  0.194736842105263,
  0.168421052631579,
  0.173684210526316,
  0.868421052631579
)
stopifnot(all(abs(study_leverage - expected_leverage) <=
  det_tol(expected_leverage)))
stopifnot(which.max(study_leverage) == 6L)
stopifnot(all(study_leverage >= 0, study_leverage <= 1))
stopifnot(abs(sum(study_leverage) - 2) <= det_tol(2))
stopifnot(which.max(abs(residuals(study_fit_low))) == 5L)
stopifnot(which.max(abs(residuals(study_fit_high))) == 5L)
```

The executed solution derives the values from the literal predictors and also checks their displayed decimal targets and structural invariants.

Large leverage is a geometric fact about \(x\). A large residual is a discrepancy relative to one fit. A data error is a provenance claim requiring evidence about measurement, entry, or identity. Conflating them can turn a useful sensitivity warning into unjustified deletion.

## R-13-E07

Analyst A has an **identifiability problem**. Constant observed \(x=2\) gives \(S_{xx}=0\), so the data cannot separate an intercept from a slope. Infinitely many lines pass through the fitted mean at \(x=2\) and give different values at \(x=3\). Observations at two or more distinct predictor values are required to identify a slope.

Analyst B has two further problems. Calling an observational slope a causal effect is a **causal-identification problem**: prior preparation, motivation, available time, and other variables may affect both self-selected hours and scores. A credible randomized assignment of a well-defined study-time intervention, or a justified identification strategy with measured confounders and explicit assumptions, would be needed.

Predicting at 20 hours from data spanning 0–4 hours is an **extrapolation problem**. Even a well-estimated association over 0–4 hours need not remain linear at 20. Data covering the intended range and a scientific reason for the functional form would address this. Wider conventional intervals do not automatically account for a wrong shape beyond the data.

```r
checked_slope <- function(predictor, response) {
  if (length(predictor) != length(response) || length(predictor) < 2L ||
      anyNA(predictor) || anyNA(response) ||
      !all(is.finite(predictor)) || !all(is.finite(response))) {
    stop("predictor and response must be equal-length finite complete vectors")
  }
  local_s_xx <- sum((predictor - mean(predictor))^2)
  if (local_s_xx <= 0) {
    stop("a slope requires at least two distinct predictor values")
  }
  sum(
    (predictor - mean(predictor)) * (response - mean(response))
  ) / local_s_xx
}

constant_x_message <- tryCatch(
  checked_slope(c(2, 2, 2, 2), c(1, 2, 2, 4)),
  error = function(error_condition) conditionMessage(error_condition)
)
stopifnot(identical(
  constant_x_message,
  "a slope requires at least two distinct predictor values"
))
constant_x_message
```

## R-13-E08

A bounded report is:

> Across the stated independently run synthetic laboratory trials, the fitted response increases by 0.30 point per additional minute within the observed 10–20 minute predictor range; the fitted intercept is 5.2 points at zero minutes, outside that range, so it has no direct support from these data. At 15 minutes, the point estimate for the conditional mean response is \(5.2+0.30(15)=9.7\) points. Under the fixed-design model with independent normal mean-zero errors and a common positive variance, the 95% interval for that conditional mean is [9.1, 10.3] points. The 95% interval for one independent new response at 15 minutes is [7.4, 12.0] points because it also includes the new trial's individual error. The residual scale estimate is 1.1 points. Limited diagnostic evidence cannot prove the model assumptions, and this report neither establishes causality nor supports extrapolation outside 10–20 minutes. No claim about data provenance is possible from the supplied output.

This report names the row mechanism supplied by the exercise without inventing how the fixture was collected. It distinguishes the conditional mean from an individual response, gives units, states the assumptions behind exact coverage, and limits interpretation. Saying “95% of responses lie between 7.4 and 12.0” would be wrong: the prediction interval is a repeated-use procedure for one new response, not a tolerance interval for a fixed percentage of all responses.

Return to [Lines for Description and Prediction](simple-linear-models.md) and use the matching exercise IDs to compare reasoning, not just final numbers.

## R-13-E09

The source contains 344 rows and the two-variable analysis retains 342 measured pairs. The two incomplete measurement rows remain in the unchanged source and appear in the exclusion table. Removing rows with missing sex would exclude additional penguins even though sex is not used in this simple line. A small exclusion count does not prove selection is ignorable: the descriptive line concerns retained measurements, and a broader process claim needs a defensible selection/model argument.

## R-13-E10

In the centered predictor, the gram-scale equation is $\hat y=(b_0+200b_1)+b_1z$. On the kilogram scale it is $\hat y_{\rm kg}=(b_0+200b_1)/1000+(b_1/1000)z$. The intercept now describes the fitted mass at 200 millimetres, and the slope is kilograms per millimetre. The same physical predictions and residual pattern are represented in different coordinates; centering and unit conversion do not supply new evidence or cure a misspecified linear model.

## Sources and authorship

The R syntax and semantics in these solutions were checked against the installed R 4.6.0 help pages for `lm`, `residuals`, and `predict.lm`, and against R Core Team, *An Introduction to R*, §11.2. The exact normal fixed-design interval claim is used only under the assumptions stated in the chapter; no diagnostic is treated as a proof of those assumptions.

The solution prose, fixtures, calculations, and reference investigation are original Math Atlas material under CC BY-SA 4.0. No human review or cross-platform execution is claimed in this draft.
