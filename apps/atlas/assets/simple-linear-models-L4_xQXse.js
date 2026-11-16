var e=`---
parent_id: book-statistics-with-r
chapter_id: simple-linear-models
title: "Lines for Description and Prediction"
level: undergraduate
estimated_minutes: 105
license: CC BY-SA 4.0
---

# Lines for Description and Prediction

A line is a compact answer to a particular question: how does the typical value of one quantitative variable change as another quantitative variable changes? It can summarize a pattern already seen, estimate a conditional mean under a probability model, or predict a new observation. Those jobs look similar on a graph, but they do not have the same target or require the same evidence.

Suppose four calibration settings are \\(x=(0,1,2,3)\\) scale units and the corresponding readings are \\(y=(1,2,2,4)\\) volts. A line can describe the four points without treating them as random. If the settings are fixed and readings arise from a stable measurement process, a stronger model can support uncertainty statements about mean readings and future readings. If \\(x\\) instead records a choice people made, the fitted slope is still an association; it does not reveal what an intervention on \\(x\\) would cause.

This chapter keeps those layers separate. First comes an algebraic fact about a finite table. Probability enters only after the descriptive calculation is complete. The four-row calibration table is a hand example; the main data investigation later in the chapter uses the licensed 344-row Palmer penguin source with an explicit 342-pair inclusion rule.

## The fixture and its target

The hand-calculation fixture, \`R13-calibration-v1\`, is original synthetic data created by Math Atlas. Version 1 has four rows. One row is one instrument setting on one declared calibration run. \`setting_step\` is a dimensionless programmed setting, \`reading_volts\` is a voltage reading, and \`run_id\` is the unique key. No value is missing, no missing code is allowed, and no row is excluded. The literal values below are the canonical source; they illustrate reasoning and are not evidence about a real instrument.

Before fitting, choose the descriptive target: among these four recorded pairs, find the straight line whose vertical discrepancies have the smallest sum of squares. This target says nothing yet about unobserved runs.

\`\`\`r
# Original literal synthetic fixture R13-calibration-v1.
calibration <- data.frame(
  run_id = c("cal-01", "cal-02", "cal-03", "cal-04"),
  setting_step = c(0, 1, 2, 3),
  reading_volts = c(1, 2, 2, 4),
  stringsAsFactors = FALSE
)

stopifnot(identical(dim(calibration), c(4L, 3L)))
stopifnot(!anyNA(calibration))
stopifnot(!anyDuplicated(calibration$run_id))
stopifnot(identical(calibration$setting_step, c(0, 1, 2, 3)))
stopifnot(identical(calibration$reading_volts, c(1, 2, 2, 4)))
\`\`\`

## What least squares minimizes

For observed pairs \\((x_i,y_i)\\), a proposed line has intercept \\(a\\), slope \\(b\\), and fitted value \\(a+bx_i\\) at row \\(i\\).

**Definition R-DEF-least-squares (ordinary least-squares line).** An ordinary least-squares line is a pair \\((b_0,b_1)\\) minimizing

\\[
Q(a,b)=\\sum_{i=1}^{n}\\{y_i-(a+bx_i)\\}^2
\\]

over all real \\(a\\) and \\(b\\). The fitted value at \\(x_i\\) is
\\(\\hat y_i=b_0+b_1x_i\\). “Ordinary” here means every row receives weight one.

Squaring prevents positive and negative discrepancies from cancelling and penalizes a discrepancy more heavily as its magnitude grows. It is a chosen loss function, not a law of nature. Absolute-error fitting and other criteria answer different optimization questions.

**Definition R-DEF-residual (residual).** For row \\(i\\), the residual is observed response minus fitted response,

\\[
e_i=y_i-\\hat y_i=y_i-(b_0+b_1x_i).
\\]

A residual has the response's units. It is observed after fitting. The model error \\(\\varepsilon_i\\), introduced later, is random before data are observed; these two ideas must not be silently exchanged.

Write

\\[
\\bar x=\\frac1n\\sum_i x_i,\\qquad
\\bar y=\\frac1n\\sum_i y_i,
\\]

and define the centered sums

\\[
S_{xx}=\\sum_i(x_i-\\bar x)^2,\\quad
S_{xy}=\\sum_i(x_i-\\bar x)(y_i-\\bar y),\\quad
S_{yy}=\\sum_i(y_i-\\bar y)^2.
\\]

\\(S_{xx}>0\\) exactly when the observed predictor values are not all equal.

**Theorem R-THM-ls-line (unique least-squares line). Status: proved here.** For finite real data with \\(n\\ge2\\) and \\(S_{xx}>0\\), the unique ordinary least-squares coefficients are

\\[
b_1=\\frac{S_{xy}}{S_{xx}},
\\qquad
b_0=\\bar y-b_1\\bar x.
\\]

Their residuals satisfy

\\[
\\sum_i e_i=0
\\qquad\\text{and}\\qquad
\\sum_i x_i e_i=0.
\\]

**Proof.** Hold a proposed slope \\(b\\) fixed and put \\(z_i=y_i-bx_i\\). Completing the square around \\(\\bar z=\\bar y-b\\bar x\\) gives

\\[
\\sum_i(z_i-a)^2
=\\sum_i(z_i-\\bar z)^2+n(a-\\bar z)^2.
\\]

The first term does not involve \\(a\\), and the second is nonnegative with equality only at \\(a=\\bar z\\). Thus the unique best intercept for slope \\(b\\) is \\(a=\\bar y-b\\bar x\\).

Substitute that intercept. The residual becomes
\\((y_i-\\bar y)-b(x_i-\\bar x)\\), so

\\[
\\begin{aligned}
Q(\\bar y-b\\bar x,b)
&=S_{yy}-2bS_{xy}+b^2S_{xx}\\\\
&=S_{yy}-\\frac{S_{xy}^2}{S_{xx}}
  +S_{xx}\\left(b-\\frac{S_{xy}}{S_{xx}}\\right)^2.
\\end{aligned}
\\]

The first two terms do not depend on \\(b\\). Because \\(S_{xx}>0\\), the final term is nonnegative and vanishes at exactly
\\(b=S_{xy}/S_{xx}\\). This proves the coefficient formulas and uniqueness without calculus.

For the fitted coefficients,

\\[
\\sum_i e_i
=\\sum_i(y_i-\\bar y)-b_1\\sum_i(x_i-\\bar x)=0.
\\]

Also,

\\[
\\sum_i(x_i-\\bar x)e_i
=S_{xy}-b_1S_{xx}=0.
\\]

Finally,
\\(\\sum_i x_ie_i=\\sum_i(x_i-\\bar x)e_i+\\bar x\\sum_i e_i=0\\).
Both residual identities follow. ∎

These identities are consequences of fitting an intercept and slope by ordinary least squares to the same rows. They do not test linearity, normality, independence, constant variance, or causality.

## Worked example 1: four points by hand and in R

For the calibration fixture,

\\[
\\bar x=1.5,\\qquad \\bar y=2.25.
\\]

The centered predictor values are \\((-1.5,-0.5,0.5,1.5)\\), so
\\(S_{xx}=2.25+0.25+0.25+2.25=5\\). Multiplying the centered \\(x\\) and \\(y\\) values gives \\(S_{xy}=4.5\\). Therefore

\\[
b_1=4.5/5=0.9\\text{ volts per setting step}
\\]

and

\\[
b_0=2.25-0.9(1.5)=0.9\\text{ volts}.
\\]

The fitted readings are \\((0.9,1.8,2.7,3.6)\\) volts and the residuals are \\((0.1,0.2,-0.7,0.4)\\) volts. Their sum is zero, as is their predictor-weighted sum:

\\[
0(0.1)+1(0.2)+2(-0.7)+3(0.4)=0.
\\]

In R, \`lm(response ~ predictor, data = table)\` fits a linear model. The tilde in \`reading_volts ~ setting_step\` separates response from predictor, and R includes an intercept unless asked otherwise. \`na.action = na.fail\` makes any unexpected missing value an error rather than silently changing the rows. \`coef()\`, \`fitted()\`, and \`residuals()\` extract coefficients, fitted values, and observed-minus-fitted residuals.

\`\`\`r
x <- calibration$setting_step
y <- calibration$reading_volts
x_bar <- mean(x)
y_bar <- mean(y)
s_xx <- sum((x - x_bar)^2)
s_xy <- sum((x - x_bar) * (y - y_bar))

manual_coef <- c(
  "(Intercept)" = y_bar - (s_xy / s_xx) * x_bar,
  "setting_step" = s_xy / s_xx
)
calibration_fit <- lm(
  reading_volts ~ setting_step,
  data = calibration,
  na.action = na.fail
)
model_coef <- coef(calibration_fit)
model_fitted <- fitted(calibration_fit)
model_residual <- residuals(calibration_fit)
det_tol <- function(expected) 1e-10 + 1e-8 * abs(expected)

stopifnot(abs(x_bar - 1.5) <= det_tol(1.5))
stopifnot(abs(y_bar - 2.25) <= det_tol(2.25))
stopifnot(abs(s_xx - 5) <= det_tol(5))
stopifnot(abs(s_xy - 4.5) <= det_tol(4.5))
stopifnot(all(abs(manual_coef - c(0.9, 0.9)) <= det_tol(c(0.9, 0.9))))
stopifnot(all(abs(model_coef - manual_coef) <= det_tol(manual_coef)))
stopifnot(all(abs(model_fitted - c(0.9, 1.8, 2.7, 3.6)) <=
  det_tol(c(0.9, 1.8, 2.7, 3.6))))
stopifnot(all(abs(model_residual - c(0.1, 0.2, -0.7, 0.4)) <=
  det_tol(c(0.1, 0.2, -0.7, 0.4))))
stopifnot(abs(sum(model_residual)) <= det_tol(0))
stopifnot(abs(sum(x * model_residual)) <= det_tol(0))

data.frame(
  run_id = calibration$run_id,
  setting_step = x,
  observed_volts = y,
  fitted_volts = as.numeric(model_fitted),
  residual_volts = as.numeric(model_residual),
  stringsAsFactors = FALSE
)
\`\`\`

| Run | Setting step | Observed (V) | Fitted (V) | Residual (V) |
|---|---:|---:|---:|---:|
| cal-01 | 0 | 1.0 | 0.9 | 0.1 |
| cal-02 | 1 | 2.0 | 1.8 | 0.2 |
| cal-03 | 2 | 2.0 | 2.7 | −0.7 |
| cal-04 | 3 | 4.0 | 3.6 | 0.4 |

The slope describes a \\(0.9\\)-volt increase in fitted reading per one-step increase in setting within this table. The intercept is the fitted reading at setting zero, which is observed here. An intercept at a physically impossible or far-unobserved zero can be algebraically necessary yet scientifically uninteresting.

## A fitted line is not yet a probability model

The preceding theorem would remain true if the four points were the entire finite population, were chosen by convenience, or were written by an author. To attach standard errors and repeated-use coverage to the line, we must say what could vary.

**Definition R-DEF-conditional-mean-model (simple normal fixed-design linear model).** At predictor values \\(x_1,\\ldots,x_n\\) treated as fixed, suppose

\\[
Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i,
\\qquad i=1,\\ldots,n,
\\]

where the errors are independent, each has a normal distribution with mean zero, and each has the same positive variance \\(\\sigma^2\\). In particular,

\\[
\\operatorname E(Y_i\\mid x_i)=\\beta_0+\\beta_1x_i.
\\]

Here \\(\\beta_0,\\beta_1,\\sigma^2\\) are process parameters, the uppercase \\(Y_i\\) are random responses, and the design values \\(x_i\\) are treated as fixed. “Fixed” does not mean evenly spaced or experimentally assigned. It means the exact conventional probability calculation conditions on these predictor values.

The assumptions do separate work:

- zero conditional error mean makes the line the conditional-mean function;
- independence determines how information combines across observations;
- common variance says the vertical error spread is \\(\\sigma\\) at every design value;
- normality supplies the exact finite-sample \\(t\\) distributions used below;
- \\(\\sigma^2>0\\) rules out a noiseless process; and
- \\(S_{xx}>0\\) makes the slope identifiable from the design.

Similar-looking data do not establish these assumptions. A residual plot or subject-matter argument may expose a problem, but no finite diagnostic can prove that future errors are independent normal draws with a constant variance.

**Claim R-CLAIM-linear-inference (exact conventional intervals). Status: imported result.** Under the complete fixed-design model just stated, with \\(S_{xx}>0\\) and \\(n>2\\), the usual \\(t_{n-2}\\) intervals for a coefficient and the conditional mean at a fixed \\(x_*\\) have exact model-based coverage. The corresponding interval for one new response at \\(x_*\\) also has exact model-based coverage when that response obeys the same normal conditional-mean and positive common-variance model and its error is independent of the fitting errors. The residual variance estimator is

\\[
s^2=\\frac{\\sum_i e_i^2}{n-2}.
\\]

For an observed dataset, conventional estimated-standard-error calculations also need \\(s^2>0\\); if all residuals vanish, displayed zero-width intervals do not provide a useful uncertainty assessment. The normal fixed-design result is imported rather than “proved” from a picture. Its derivation relies on the joint normal distribution of linear combinations of the errors and the independence of the fitted component from the residual sum of squares.

Without normal errors, least squares still minimizes the same deterministic criterion. Under other conditions it may have approximate or robust large-sample analyses, but those are different claims and are outside this exact result.

## Two targets at the same predictor value

Let \\(x_*\\) be a fixed predictor value and define

\\[
h_*=\\frac1n+\\frac{(x_*-\\bar x)^2}{S_{xx}}.
\\]

The point prediction is

\\[
\\hat y_*=b_0+b_1x_*.
\\]

**Definition R-DEF-prediction (model-based point prediction).** Under a declared fitted model, a point prediction for a response at specified predictor values is the fitted response obtained by substituting those values into the fitted equation. It becomes a prediction for a future observation only when the future observation is linked to the fitted data by an explicit process assumption.

The same number \\(\\hat y_*\\) estimates two different targets:

1. The conditional mean \\(m(x_*)=\\beta_0+\\beta_1x_*\\). Its estimated standard error is \\(s\\sqrt{h_*}\\), producing
   \\[
   \\hat y_*\\pm t_{1-\\alpha/2,n-2}s\\sqrt{h_*}.
   \\]
2. One new observation \\(Y_{\\mathrm{new}}=\\beta_0+\\beta_1x_*+\\varepsilon_{\\mathrm{new}}\\). Its prediction standard error is \\(s\\sqrt{1+h_*}\\), producing
   \\[
   \\hat y_*\\pm t_{1-\\alpha/2,n-2}s\\sqrt{1+h_*}.
   \\]

The added 1 represents the new observation's own error variance. At the same level and \\(x_*\\), the prediction interval is strictly wider whenever \\(s>0\\) and \\(0<\\alpha<1\\), because \\(1+h_*>h_*\\). This comparison assumes the same model and positive estimated residual variance. A prediction interval is for one new observation, not for every future observation and not for a fixed proportion of a population.

## Worked example 2: mean response or new reading?

At \\(x_*=1.5\\), the fixture's center,

\\[
\\hat y_*=0.9+0.9(1.5)=2.25\\text{ volts}.
\\]

The residual sum of squares is \\(0.70\\) square volts, so
\\(s^2=0.70/(4-2)=0.35\\) square volts and \\(s\\approx0.5916\\) volts. Here \\(h_*=1/4\\). At 95% confidence, \\(t_{0.975,2}\\approx4.3027\\). Thus the conditional-mean interval is approximately

\\[
2.25\\pm4.3027(0.5916)\\sqrt{0.25}
=[0.9773,3.5227]\\text{ volts},
\\]

whereas the interval for one new reading is approximately

\\[
2.25\\pm4.3027(0.5916)\\sqrt{1.25}
=[-0.5959,5.0959]\\text{ volts}.
\\]

The lower prediction limit is physically awkward for a device that cannot produce negative voltage. That is useful model criticism, not permission to clip the interval silently. Four observations leave two residual degrees of freedom, so the \\(t\\) multiplier is large.

In \`predict()\`, \`newdata\` must be a data frame whose predictor name matches the fitted formula. \`interval = "confidence"\` requests an interval for the fitted mean; \`interval = "prediction"\` requests an interval for a single future observation under the default same-error-variance assumption. \`level = 0.95\` sets the nominal level.

\`\`\`r
new_center <- data.frame(setting_step = 1.5)
manual_center_prediction <- unname(
  manual_coef["(Intercept)"] +
    manual_coef["setting_step"] * new_center$setting_step
)
plain_center_prediction <- as.numeric(
  predict(calibration_fit, newdata = new_center)
)
mean_interval <- predict(
  calibration_fit,
  newdata = new_center,
  interval = "confidence",
  level = 0.95
)
observation_interval <- predict(
  calibration_fit,
  newdata = new_center,
  interval = "prediction",
  level = 0.95
)

residual_s2 <- sum(model_residual^2) / calibration_fit$df.residual
h_center <- 1 / nrow(calibration) +
  (new_center$setting_step - x_bar)^2 / s_xx
t_critical <- qt(0.975, df = calibration_fit$df.residual)
manual_mean_half_width <- t_critical * sqrt(residual_s2 * h_center)
manual_observation_half_width <- t_critical * sqrt(
  residual_s2 * (1 + h_center)
)
mean_width <- mean_interval[1L, "upr"] - mean_interval[1L, "lwr"]
observation_width <-
  observation_interval[1L, "upr"] - observation_interval[1L, "lwr"]

stopifnot(abs(manual_center_prediction - 2.25) <= det_tol(2.25))
stopifnot(abs(plain_center_prediction - manual_center_prediction) <=
  det_tol(manual_center_prediction))
stopifnot(abs(residual_s2 - 0.35) <= det_tol(0.35))
stopifnot(abs(h_center - 0.25) <= det_tol(0.25))
stopifnot(abs(mean_interval[1L, "fit"] - manual_center_prediction) <=
  det_tol(manual_center_prediction))
stopifnot(abs(mean_interval[1L, "lwr"] - 0.977258158591541) <=
  det_tol(0.977258158591541))
stopifnot(abs(mean_interval[1L, "upr"] - 3.52274184140846) <=
  det_tol(3.52274184140846))
stopifnot(abs(observation_interval[1L, "lwr"] - (-0.59593727519757)) <=
  det_tol(-0.59593727519757))
stopifnot(abs(observation_interval[1L, "upr"] - 5.09593727519757) <=
  det_tol(5.09593727519757))
stopifnot(abs(manual_mean_half_width -
  (mean_interval[1L, "upr"] - mean_interval[1L, "fit"])) <=
  det_tol(manual_mean_half_width))
stopifnot(abs(manual_observation_half_width -
  (observation_interval[1L, "upr"] - observation_interval[1L, "fit"])) <=
  det_tol(manual_observation_half_width))
stopifnot(observation_width > mean_width)

rbind(
  conditional_mean = mean_interval[1L, ],
  one_new_observation = observation_interval[1L, ]
)
\`\`\`

These are exact-coverage procedures only under the complete normal fixed-design model. Their numerical endpoints are outputs for a synthetic fixture, not scientific findings.

## Why distance from the data matters

\\(h_*\\) is smallest at \\(\\bar x\\) and grows with the squared distance from \\(\\bar x\\). At setting 6, the line predicts \\(0.9+0.9(6)=6.3\\) volts, but 6 lies outside the observed range \\([0,3]\\). R can evaluate the formula there; successful arithmetic does not show that the conditional mean stays linear beyond the data.

\`\`\`r
prediction_locations <- data.frame(setting_step = c(1.5, 6))
location_mean_intervals <- predict(
  calibration_fit,
  newdata = prediction_locations,
  interval = "confidence",
  level = 0.95
)
location_prediction_intervals <- predict(
  calibration_fit,
  newdata = prediction_locations,
  interval = "prediction",
  level = 0.95
)
location_table <- data.frame(
  setting_step = prediction_locations$setting_step,
  region = c("inside observed range", "outside observed range"),
  point_volts = location_prediction_intervals[, "fit"],
  mean_lower_volts = location_mean_intervals[, "lwr"],
  mean_upper_volts = location_mean_intervals[, "upr"],
  prediction_lower_volts = location_prediction_intervals[, "lwr"],
  prediction_upper_volts = location_prediction_intervals[, "upr"],
  stringsAsFactors = FALSE
)

stopifnot(abs(location_table$point_volts[1L] - 2.25) <= det_tol(2.25))
stopifnot(abs(location_table$point_volts[2L] - 6.3) <= det_tol(6.3))
expected_location_intervals <- rbind(
  c(2.25, 0.977258158591541, 3.52274184140846,
    -0.59593727519757, 5.09593727519757),
  c(6.3, 1.02157268954143, 11.5784273104586,
    0.439856482023496, 12.1601435179765)
)
actual_location_intervals <- as.matrix(
  location_table[, c(
    "point_volts",
    "mean_lower_volts",
    "mean_upper_volts",
    "prediction_lower_volts",
    "prediction_upper_volts"
  )]
)
stopifnot(all(abs(actual_location_intervals - expected_location_intervals) <=
  det_tol(expected_location_intervals)))
stopifnot(
  (location_table$mean_upper_volts[2L] - location_table$mean_lower_volts[2L]) >
    (location_table$mean_upper_volts[1L] - location_table$mean_lower_volts[1L])
)
location_table
\`\`\`

| Setting | Region | Point (V) | Mean-response 95% interval (V) | New-reading 95% interval (V) |
|---:|---|---:|---:|---:|
| 1.5 | Inside \\([0,3]\\) | 2.250 | [0.977, 3.523] | [−0.596, 5.096] |
| 6.0 | Outside \\([0,3]\\) | 6.300 | [1.022, 11.578] | [0.440, 12.160] |

The wider interval at 6 reflects coefficient uncertainty under a line assumed valid there. It does not account for the possibility that the process bends, saturates, or changes regime outside \\([0,3]\\). Unsupported extrapolation is a model-scope problem that the formula cannot price.

## Adverse case: when a slope changes its story

An observational predictor contrast is not automatically causal. If learners who choose more study time also differ in prior preparation, schedule flexibility, or motivation, \\(\\beta_1\\) describes a conditional association under the fitted model. It is not the effect of assigning one more hour. A causal claim needs a design or identification argument that controls the relevant alternative explanations and defines the intervention.

Least squares is also sensitive to observations with unusual predictor values. For a line with an intercept, the quantity

\\[
h_i=\\frac1n+\\frac{(x_i-\\bar x)^2}{S_{xx}}
\\]

measures how far row \\(i\\)'s predictor is from the predictor center on the fitted-line scale. A large \\(h_i\\) means the row has unusual capacity to affect the line's fitted value. It does not prove the row is erroneous or authorize deletion.

## R-13-I01

### Guided investigation: move one distant response

The fixture \`R13-study-sensitivity-v1\` is original synthetic Math Atlas data, version 1. A row is one learner in a hypothetical voluntary study program. \`learner_id\` is unique, \`study_hours\` is self-reported hours in the prior week, and \`assessment_points\` is a score on a 100-point assessment. There are six rows, no missing values or missing codes, and no exclusions. The data are observational and synthetic.

**Question.** How does moving only the response at the most distant predictor value change the fitted descriptive slope? What does that sensitivity permit us to conclude?

**Prediction.** The learner at 10 hours has a much more distant predictor than learners at 0–4 hours. Holding the first five rows fixed and changing only that learner's score should move the slope substantially.

**Controls.** Keep all predictor values and the first five response values fixed. Compare two explicitly labeled scenarios for the sixth response, 48 and 68 points. This is a sensitivity calculation, not two samples from a probability mechanism.

The function below validates lengths, finiteness, absence of missing values, and positive \\(S_{xx}\\). \`vapply()\` applies the same function to each named scenario and requires one numeric result from each call. The leverage values depend only on \\(x\\), so they are the same in both scenarios.

\`\`\`r
# Original literal synthetic fixture R13-study-sensitivity-v1.
study <- data.frame(
  learner_id = sprintf("learner-%02d", 1:6),
  study_hours = c(0, 1, 2, 3, 4, 10),
  assessment_points = c(50, 52, 53, 55, 56, 48),
  stringsAsFactors = FALSE
)
high_scenario_points <- c(50, 52, 53, 55, 56, 68)

fit_slope <- function(predictor, response) {
  if (!is.numeric(predictor) || !is.numeric(response)) {
    stop("predictor and response must be numeric")
  }
  if (length(predictor) != length(response) || length(predictor) < 2L) {
    stop("predictor and response must have one common length of at least two")
  }
  if (anyNA(predictor) || anyNA(response) ||
      !all(is.finite(predictor)) || !all(is.finite(response))) {
    stop("predictor and response must be finite and nonmissing")
  }
  centered_predictor <- predictor - mean(predictor)
  local_s_xx <- sum(centered_predictor^2)
  if (local_s_xx <= 0) {
    stop("a slope requires at least two distinct predictor values")
  }
  sum(centered_predictor * (response - mean(response))) / local_s_xx
}

scenario_responses <- list(
  distant_score_48 = study$assessment_points,
  distant_score_68 = high_scenario_points
)
scenario_slopes <- vapply(
  scenario_responses,
  function(response) fit_slope(study$study_hours, response),
  numeric(1)
)
scenario_intercepts <- vapply(
  scenario_responses,
  function(response) mean(response) -
    fit_slope(study$study_hours, response) * mean(study$study_hours),
  numeric(1)
)
study_x_bar <- mean(study$study_hours)
study_s_xx <- sum((study$study_hours - study_x_bar)^2)
study_leverage <- 1 / nrow(study) +
  (study$study_hours - study_x_bar)^2 / study_s_xx
sensitivity_table <- data.frame(
  scenario = names(scenario_slopes),
  distant_score_points = c(48, 68),
  intercept_points = as.numeric(scenario_intercepts),
  slope_points_per_hour = as.numeric(scenario_slopes),
  stringsAsFactors = FALSE
)

stopifnot(identical(dim(study), c(6L, 3L)))
stopifnot(!anyNA(study), !anyDuplicated(study$learner_id))
stopifnot(abs(scenario_slopes[1L] - (-0.310526315789474)) <=
  det_tol(-0.310526315789474))
stopifnot(abs(scenario_slopes[2L] - 1.79473684210526) <=
  det_tol(1.79473684210526))
stopifnot(abs(study_leverage[6L] - 0.868421052631579) <=
  det_tol(0.868421052631579))
stopifnot(abs(sum(study_leverage) - 2) <= det_tol(2))
sensitivity_table
\`\`\`

| Scenario | Score at 10 hours | Intercept (points) | Slope (points/hour) |
|---|---:|---:|---:|
| distant_score_48 | 48 | 53.368 | −0.311 |
| distant_score_68 | 68 | 49.684 | 1.795 |

Here is a plot of the same data and lines. Circles with a solid line show the 48-point scenario; triangles with a dashed line show the 68-point scenario. The table is the numerical alternative. In prose, the first five points rise gradually from 50 to 56 over 0–4 hours. At 10 hours, changing one response from 48 to 68 reverses the fitted slope from slightly negative to clearly positive.

\`tempfile()\` chooses an unused temporary name inside the current working directory, and \`basename()\` retains only its relative filename. \`pdf()\` opens a named PDF graphics device; \`dev.off()\` closes it and returns control to the device that was active before the plot. The checks below confirm that the closed artifact exists, has positive size, remained inside the isolated working directory, and left the prior device active. \`unlink()\` then removes the temporary artifact.

\`\`\`r
plot_file <- basename(tempfile(
  pattern = "r13-i01-",
  tmpdir = getwd(),
  fileext = ".pdf"
))
device_before_plot <- grDevices::dev.cur()
stopifnot(!file.exists(plot_file))
grDevices::pdf(plot_file, width = 7, height = 5)
plot(
  study$study_hours,
  study$assessment_points,
  pch = 1,
  xlab = "Self-reported study time (hours)",
  ylab = "Assessment score (points)",
  xlim = c(0, 10),
  ylim = c(45, 70)
)
points(study$study_hours, high_scenario_points, pch = 2)
abline(
  a = scenario_intercepts["distant_score_48"],
  b = scenario_slopes["distant_score_48"],
  lty = 1
)
abline(
  a = scenario_intercepts["distant_score_68"],
  b = scenario_slopes["distant_score_68"],
  lty = 2
)
legend(
  "topleft",
  legend = c("10-hour score 48", "10-hour score 68"),
  pch = c(1, 2),
  lty = c(1, 2),
  bty = "n"
)
device_after_close <- grDevices::dev.off()
plot_info <- file.info(plot_file)
stopifnot(file.exists(plot_file))
stopifnot(is.finite(plot_info$size), plot_info$size > 0)
stopifnot(identical(
  as.integer(grDevices::dev.cur()),
  as.integer(device_before_plot)
))
stopifnot(identical(
  as.integer(device_after_close),
  as.integer(device_before_plot)
))
stopifnot(identical(
  dirname(normalizePath(plot_file, mustWork = TRUE)),
  normalizePath(getwd(), mustWork = TRUE)
))
unlink(plot_file)
stopifnot(!file.exists(plot_file))
\`\`\`

**Interpretation.** The sixth row has leverage about \\(0.868\\). Summing the leverage formula over all six rows gives \\(6(1/6)+S_{xx}/S_{xx}=2\\). Moving only its response by 20 points changes the slope by about \\(2.105\\) points per hour. This demonstrates sensitivity of this fitted summary.

**Failure and boundary.** The calculation does not establish that either scenario is more credible, that the sixth row is wrong, that deleting it is justified, or that study causes score changes. Investigate provenance, measurement conditions, and the data-generating design. Report fits under defensible alternatives when uncertainty remains. Automated deletion based on an inconvenient slope would make the analysis outcome-dependent.

**Reference response.** A defensible report says: “In this six-row synthetic observational table, the fitted score-on-hours slope is \\(-0.311\\) points per hour when the 10-hour score is 48 and \\(1.795\\) points per hour when it is 68, while all other values are held fixed. The 10-hour predictor has leverage \\(0.868\\), so the descriptive slope is highly sensitive to that row's response. Neither line estimates the causal effect of assigning study time, and no row should be removed without a reason grounded in provenance or design.”

Score the investigation out of 12: question and held-fixed comparison (2); correct coefficients and leverage with units (3); numeric table plus accessible plot reading (2); separation of sensitivity from deletion (2); noncausal and synthetic-data boundaries (2); rerunnable validation (1). A response needs at least 8 points and must state both the noncausal boundary and why leverage alone does not authorize deletion.

## When no slope exists

If every \\(x_i\\) equals the same constant, then \\(S_{xx}=0\\). The intercept-slope representation is not identifiable: infinitely many pairs \\((a,b)\\) produce the same fitted value at that one observed predictor setting. The sample mean of \\(y\\) is the unique best fitted value at that setting, but the data cannot determine a slope.

The validation function catches this adverse input. \`tryCatch()\` evaluates an expression and, when an error occurs, passes the error object to the named handler. \`conditionMessage()\` extracts its readable message. Catching the expected error lets the source continue while checking exactly why it failed.

\`\`\`r
constant_x_message <- tryCatch(
  fit_slope(c(2, 2, 2, 2), c(1, 2, 2, 4)),
  error = function(error_condition) conditionMessage(error_condition)
)
stopifnot(identical(
  constant_x_message,
  "a slope requires at least two distinct predictor values"
))
constant_x_message
\`\`\`

Adding more outcomes at the same predictor setting can describe vertical variation there. It cannot reveal how the response changes with \\(x\\).

## A model report that stays within its evidence

A useful linear-model report names five layers:

1. **Rows and provenance:** what one row represents, measurement units, keys, missingness, exclusions, and whether the fixture is real or synthetic.
2. **Descriptive fit:** coefficient estimates with units, observed predictor range, residual scale, and any visible sensitivity.
3. **Probability mechanism:** fixed or random predictors, independence unit, conditional-mean shape, error distribution, and variance condition.
4. **Target and uncertainty:** coefficient, conditional mean, or one future observation; method, level, and exact or approximate status.
5. **Boundary:** interpolation or extrapolation, population scope, and association or causal effect.

For the calibration fixture, a bounded model-based statement is:

> The fitted line for the four synthetic calibration pairs is \\(0.9+0.9x\\) volts over observed settings 0–3. Under a fixed-design model with independent normal mean-zero errors and a common positive variance, the predicted conditional mean at setting 1.5 is 2.25 V with a 95% \\(t_2\\) interval from 0.977 to 3.523 V; the corresponding interval for one independent new reading is wider, from −0.596 to 5.096 V. The assumptions are not established by four synthetic points, and predictions beyond settings 0–3 require an unsupported extension of the linear-mean model.

Nothing in that paragraph turns a predictor contrast into an intervention effect.

## Exercises

The numerical prompts below are original Math Atlas/original synthetic material. The three-pair fixture in R-13-E01 and R-13-E02 has stable ID \`R13-three-point-practice-v1\`, version 1: one row is one abstract pair, \`pair_id\` is unique, the predictor is in dimensionless units, the response is in points, and there are three complete rows with no missing codes or exclusions. The battery and laboratory summaries in R-13-E03 and R-13-E08 are deliberately supplied summaries rather than raw-row fixtures; their underlying keys, missingness, and collection provenance are unavailable, so a solution must not invent them.

## Worked example 3: the main real-data penguin investigation

The small calibration table makes the least-squares proof inspectable by hand. The main data investigation now uses 344 recorded penguins rather than treating four synthetic pairs as a realistic evidence base. The [frozen penguin CSV](/data/statistics-with-r/penguins.csv) comes from Horst, Hill and Gorman's [Palmer penguin data](https://allisonhorst.github.io/palmerpenguins/), released under CC0. Scientific measurements were collected by Kristen Gorman and Palmer Station LTER. Our copy retains the eight source columns and their missing-value code <code>NA</code>. One source row is one recorded penguin; a source-order index introduced here is an analysis locator, not an original scientific identifier.

The response is body mass in grams and the predictor is flipper length in millimetres. Species, island, bill dimensions, sex and year are also recorded, but they are not predictors of this simple line. The descriptive estimand is the least-squares mass-on-flipper line among the recorded pairs with both measurements available. A claim about conditional means or future penguins needs additional assumptions linking comparable observations to this table. Species and sex can be associated with both mass and morphology, so a pooled slope is not a within-species causal effect.

Download the frozen file into a local <code>data</code> directory beside the chapter, or use this repository's book directory. The following locator also accepts the repository root as the working directory. It reads local files only. <code>complete.cases</code> builds a row mask for the two named measurement columns; it does not discard a penguin merely because a different column is missing.

\`\`\`r
r13_data_file <- function(filename) {
  candidates <- c(
    file.path("data", filename),
    file.path("modules", "atlas", "content", "books",
              "statistics-with-r", "data", filename)
  )
  available <- candidates[file.exists(candidates)]
  if (length(available) == 0L) {
    stop("Place the frozen CSV in data/ and run from the book directory or repository root.")
  }
  available[[1L]]
}
penguins_r13 <- read.csv(
  r13_data_file("penguins.csv"), na.strings = "NA",
  stringsAsFactors = FALSE
)
expected_names_r13 <- c(
  "species", "island", "bill_length_mm", "bill_depth_mm",
  "flipper_length_mm", "body_mass_g", "sex", "year"
)
stopifnot(identical(names(penguins_r13), expected_names_r13))
stopifnot(nrow(penguins_r13) == 344L)
penguins_r13$source_row <- seq_len(nrow(penguins_r13))
keep_r13 <- complete.cases(
  penguins_r13[c("flipper_length_mm", "body_mass_g")]
)
penguin_pairs <- penguins_r13[keep_r13, , drop = FALSE]
excluded_penguins <- penguins_r13[!keep_r13, , drop = FALSE]
stopifnot(nrow(penguin_pairs) == 342L)
stopifnot(nrow(excluded_penguins) == 2L)
stopifnot(all(is.finite(penguin_pairs$flipper_length_mm)))
stopifnot(all(is.finite(penguin_pairs$body_mass_g)))
print(excluded_penguins[c("source_row", "flipper_length_mm", "body_mass_g")])
\`\`\`

The exclusion table stays with the result. It identifies two source records without treating their unavailable measurements as zero. Complete-case selection defines the observed-pair calculation; a small number of exclusions does not prove that missingness is unrelated to mass. Deleting all rows with any missing column would answer another question and unnecessarily discard observations for this two-variable analysis.

Fit the declared line and reproduce its coefficients from centered sums. This is a genuine algebraic check of the calculation and does not use normality or random sampling. The table printed below is the numerical result record: it includes the source and analysis counts, coefficient units, predictor range and residual scale.

\`\`\`r
penguin_line <- lm(
  body_mass_g ~ flipper_length_mm,
  data = penguin_pairs, na.action = na.fail
)
x_penguin <- penguin_pairs$flipper_length_mm
y_penguin <- penguin_pairs$body_mass_g
sxx_penguin <- sum((x_penguin - mean(x_penguin))^2)
sxy_penguin <- sum((x_penguin - mean(x_penguin)) *
                    (y_penguin - mean(y_penguin)))
manual_slope_penguin <- sxy_penguin / sxx_penguin
manual_intercept_penguin <- mean(y_penguin) -
  manual_slope_penguin * mean(x_penguin)
r13_close <- function(a, b) {
  all(abs(a - b) <= 1e-10 + 1e-8 * abs(b))
}
stopifnot(sxx_penguin > 0)
stopifnot(r13_close(unname(coef(penguin_line)),
                    c(manual_intercept_penguin, manual_slope_penguin)))
penguin_result <- data.frame(
  quantity = c("source rows", "analysis pairs", "intercept",
               "slope", "minimum flipper", "maximum flipper",
               "residual standard deviation"),
  value = c(nrow(penguins_r13), nrow(penguin_pairs),
            coef(penguin_line)[1], coef(penguin_line)[2],
            min(x_penguin), max(x_penguin),
            summary(penguin_line)$sigma),
  unit = c("penguins", "penguins", "grams", "grams per millimetre",
           "millimetres", "millimetres", "grams")
)
print(penguin_result, row.names = FALSE)
\`\`\`

The slope is the change in fitted pooled mass for a one-millimetre increase in flipper length. The intercept refers to a zero-millimetre flipper, outside the measured domain, and is an algebraic coordinate rather than a plausible penguin mass. Neither coefficient says what would happen if an intervention lengthened a flipper.

For a hand check with actual observations, take source rows one, two and three: flippers $(181,186,195)$ millimetres and masses $(3750,3800,3250)$ grams. Their means are $562/3$ millimetres and $3600$ grams. The centered sums are $S_{xx}=302/3$ square millimetres and $S_{xy}=-3900$ gram-millimetres, so that selected three-row slope is $-5850/151$ grams per millimetre. This deliberately limited subset is not the full-data analysis. It demonstrates why selecting a few convenient rows can change a descriptive pattern and why the declared inclusion rule must accompany the fitted line.

Predictions also need a target. At 190, 200 and 210 millimetres, compute the fitted mean and, separately, a conditional-mean interval and a new-observation interval. These intervals use the chapter's independent normal, mean-zero, common-positive-variance error model conditional on the predictor design. They are model-based calculations for illustration, not a declaration that collected wild-penguin observations satisfy that model. In particular, a mixture of species can produce systematic residual structure.

\`\`\`r
prediction_rows_r13 <- data.frame(flipper_length_mm = c(190, 200, 210))
mean_intervals_r13 <- predict(
  penguin_line, newdata = prediction_rows_r13,
  interval = "confidence", level = 0.95
)
new_intervals_r13 <- predict(
  penguin_line, newdata = prediction_rows_r13,
  interval = "prediction", level = 0.95
)
prediction_table_r13 <- data.frame(
  flipper_length_mm = prediction_rows_r13$flipper_length_mm,
  fitted_mass_g = mean_intervals_r13[, "fit"],
  mean_lower_g = mean_intervals_r13[, "lwr"],
  mean_upper_g = mean_intervals_r13[, "upr"],
  new_lower_g = new_intervals_r13[, "lwr"],
  new_upper_g = new_intervals_r13[, "upr"]
)
stopifnot(all(new_intervals_r13[, "upr"] - new_intervals_r13[, "lwr"] >=
              mean_intervals_r13[, "upr"] - mean_intervals_r13[, "lwr"]))
print(prediction_table_r13, row.names = FALSE)
penguin_pairs$residual_g <- residuals(penguin_line)
print(aggregate(residual_g ~ species, data = penguin_pairs, FUN = mean))
\`\`\`

Each row of the prediction table supplies the numbers needed to read an interval display without relying on a picture: predictor in millimetres, central fitted mass in grams, and two distinct sets of bounds. The new-observation interval includes future individual variation and is wider. Species-specific mean residuals ask whether the pooled line systematically overpredicts or underpredicts a subgroup; a residual table cannot establish independence or normality.

The next chapter adds multiple predictors using the same source, with an explicitly declared common complete-case set. That extension can separate conditional associations from pooled associations. It does not turn an observational predictor into a randomized intervention, nor make omitted-variable problems vanish merely because the formula is longer. The four-row calibration proof and its original exercises remain useful hand calculations, while this larger licensed source carries the main empirical investigation.

<details>
<summary>Solution setup for the original exercises</summary>

These solutions distinguish algebraic properties of a fitted line from model-based probability claims. Every numerical answer retains its measurement units and evidence boundary.

This document has independent copies of the chapter's original synthetic fixtures, so its canonical R blocks run in order in a fresh session. \`R13-calibration-v1\` has one calibration run per row, a unique \`run_id\`, a dimensionless programmed setting, and a reading in volts. \`R13-study-sensitivity-v1\` has one hypothetical learner per row, a unique \`learner_id\`, self-reported study hours, and assessment points. \`R13-three-point-practice-v1\` has one abstract pair per row, a unique \`pair_id\`, a dimensionless predictor, and a response in points. All are original Math Atlas version 1 fixtures with no missing values, missing codes, or exclusions; none is scientific evidence.

\`\`\`r
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
\`\`\`

## R-13-I01

The question is a controlled sensitivity question: holding all six predictor values and the first five responses fixed, what happens to the fitted descriptive line when the sixth response changes from 48 to 68 points?

For \\(x=(0,1,2,3,4,10)\\), \\(\\bar x=10/3\\) and

\\[
S_{xx}=\\sum_i(x_i-\\bar x)^2=\\frac{190}{3}.
\\]

The leverage of the sixth row is

\\[
h_6=\\frac16+\\frac{(10-10/3)^2}{190/3}
=\\frac{33}{38}\\approx0.8684.
\\]

This value uses only the predictor. It is unchanged when the sixth response moves.

The two fitted lines are

\\[
\\widehat{\\text{score}}=53.368-0.311\\,\\text{hours}
\\]

and

\\[
\\widehat{\\text{score}}=49.684+1.795\\,\\text{hours}.
\\]

Thus moving one response by 20 points changes the slope by about \\(2.105\\) points per hour and reverses its sign. The reference analysis follows.

\`\`\`r
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
\`\`\`

| Learner | Hours | Leverage | Residual if score 48 | Residual if score 68 |
|---|---:|---:|---:|---:|
| learner-01 | 0 | 0.342 | −3.368 | 0.316 |
| learner-02 | 1 | 0.253 | −1.058 | 0.521 |
| learner-03 | 2 | 0.195 | 0.253 | −0.274 |
| learner-04 | 3 | 0.168 | 2.563 | −0.068 |
| learner-05 | 4 | 0.174 | 3.874 | −0.863 |
| learner-06 | 10 | 0.868 | −2.263 | 0.368 |

The exact computed first five leverage values, rather than the rounded table values, sum with \\(h_6\\) to 2. In the low scenario, learner-05 has the largest residual magnitude even though learner-06 has the largest leverage. This is a useful separation: leverage describes predictor position; a residual describes vertical discrepancy from a particular fitted line. Neither establishes transcription error.

A complete bounded response is:

> In this six-row synthetic observational table, the fitted score-on-hours slope is \\(-0.311\\) points per hour when the 10-hour score is 48 and \\(1.795\\) points per hour when it is 68, holding all other values fixed. The 10-hour predictor has leverage \\(0.868\\), so the slope is highly sensitive to that row's response. This calculation gives no basis for deleting the row and no causal interpretation of self-selected study time. Provenance and measurement conditions would have to determine whether either response is credible.

Against the 12-point rubric, this earns 2 for a precise held-fixed question, 3 for correct coefficients and leverage with units, 2 for the numerical table and its prose reading, 2 for separating sensitivity from deletion, 2 for the observational and synthetic-data boundaries, and 1 for executable validation: 12/12. The required noncausal and no-automatic-deletion conditions are both met.

</details>

## R-13-E01

**Exercise 13.1**

For \`R13-three-point-practice-v1\`, \\(x=(1,2,4)\\) and \\(y=(2,3,7)\\). Calculate \\(\\bar x,\\bar y,S_{xx},S_{xy}\\), then derive \\(b_1\\) and \\(b_0\\). Compute all fitted values and residuals. Do not use \`lm()\` until after the hand calculation.

<details>
<summary>Hint 1</summary>

Keep thirds as fractions: \\(\\bar x=7/3\\) and \\(\\bar y=4\\).

</details>

<details>
<summary>Hint 2</summary>

Use $S_{xx}=14/3$, $S_{xy}=8$ and retain the fractions until the coefficients are formed.

</details>

<details>
<summary>Solution</summary>

The means are

\\[
\\bar x=\\frac{1+2+4}{3}=\\frac73,\\qquad
\\bar y=\\frac{2+3+7}{3}=4.
\\]

Using centered values,

\\[
\\begin{aligned}
S_{xx}
&=\\left(-\\frac43\\right)^2+
  \\left(-\\frac13\\right)^2+
  \\left(\\frac53\\right)^2
=\\frac{14}{3},\\\\
S_{xy}
&=\\left(-\\frac43\\right)(-2)+
  \\left(-\\frac13\\right)(-1)+
  \\left(\\frac53\\right)(3)
=8.
\\end{aligned}
\\]

Therefore

\\[
b_1=\\frac{8}{14/3}=\\frac{12}{7},
\\qquad
b_0=4-\\frac{12}{7}\\frac73=0.
\\]

The fitted values are \\((12/7,24/7,48/7)\\). Observed minus fitted gives residuals \\((2/7,-3/7,1/7)\\). The third fitted value falls below 7 by \\(1/7\\), so its observed-minus-fitted residual is positive.

\`\`\`r
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
\`\`\`

</details>


## R-13-E02

**Exercise 13.2**

Using the data in R-13-E01, verify both residual identities by hand and in R. Explain why a zero residual sum would not by itself show that the line fits every point or that the errors are normally distributed.

<details>
<summary>Hint 1</summary>

The residuals are \\(2/7,-3/7,1/7\\); compute their ordinary and \\(x\\)-weighted sums.

</details>

<details>
<summary>Hint 2</summary>

Compute $2/7-3/7+1/7$ and $1(2/7)+2(-3/7)+4(1/7)$; these equalities concern optimization, not a normal model.

</details>

<details>
<summary>Solution</summary>

The ordinary residual sum is

\\[
\\frac27-\\frac37+\\frac17=0.
\\]

The predictor-weighted residual sum is

\\[
1\\left(\\frac27\\right)
+2\\left(-\\frac37\\right)
+4\\left(\\frac17\\right)
=\\frac{2-6+4}{7}=0.
\\]

The first identity says the fitted line with an intercept balances signed vertical residuals. It does not say every residual is zero: all three here are nonzero, and their squared sum is \\(2/7\\). Neither identity invokes a random error distribution, so neither supplies evidence of normality.

\`\`\`r
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
\`\`\`

</details>


## R-13-E03

**Exercise 13.3**

A fitted line for battery duration \\(y\\), measured in hours, against operating temperature \\(x\\), measured in degrees Celsius, is \\(\\hat y=12.4-0.08x\\). Interpret the slope and intercept with units. The observed temperatures were 15–35 °C. Which interpretation is directly supported, and what is questionable?

<details>
<summary>Hint 1</summary>

A zero-degree intercept is outside the observed predictor range.

</details>

<details>
<summary>Hint 2</summary>

A one-degree increase changes the fitted duration by minus $0.08$ hours within the observed range; zero degrees is an extrapolated intercept.

</details>

<details>
<summary>Solution</summary>

The slope \\(-0.08\\) has units hours per degree Celsius. Within the observed 15–35 °C range, a one-degree higher operating temperature is associated with a fitted battery duration lower by 0.08 hour, or 4.8 minutes. This is a comparison of fitted values, not automatically a causal temperature effect.

The intercept 12.4 hours is the line's fitted duration at 0 °C. It is algebraically needed to locate the line, but 0 °C lies outside the observed range. Treating 12.4 hours as an evidence-supported mean duration at 0 °C would extrapolate the linear pattern by at least 15 degrees. Data near 0 °C or a scientifically justified process model would be needed for that use.

The slope interpretation over 15–35 °C is directly connected to observed predictor support. Even there, its inferential or causal meaning depends on how temperatures and batteries were selected or assigned.

</details>


## R-13-E04

**Exercise 13.4**

Classify each statement as guaranteed by least-squares algebra, required by the exact normal fixed-design inference claim, or neither: (a) residuals sum to zero; (b) predictor values are fixed; (c) errors are independent normal variables with mean zero and common positive variance; (d) the predictor causes the response; (e) the fitted slope minimizes squared vertical residuals; (f) a residual plot with no obvious pattern proves the assumptions.

<details>
<summary>Hint 1</summary>

Ask whether the statement concerns the observed optimization or a repeated probability mechanism.

</details>

<details>
<summary>Hint 2</summary>

Residual identities and minimization are algebraic; fixed design and independent common-variance normal errors are model assumptions, while causality and a proof from a plot are neither.

</details>

<details>
<summary>Solution</summary>

- **(a) Least-squares algebra.** With an intercept and \\(S_{xx}>0\\), the fitted residuals sum to zero. No probability model is required.
- **(b) Exact-inference assumption.** The claim conditions on fixed predictor values. Fixed here is a feature of the repeated mechanism, not an algebraic necessity for computing a line.
- **(c) Exact-inference assumptions.** Independence, normality, zero means, common positive variance, \\(n>2\\), and \\(S_{xx}>0\\) are the stated conditions for the finite-sample conventional \\(t\\) intervals.
- **(d) Neither.** Causality needs an assignment design or another identification argument. Least-squares optimization and the normal error model do not create one.
- **(e) Least-squares algebra.** Minimizing squared vertical residuals is the defining criterion.
- **(f) Neither.** A plot can reveal incompatibility or raise concerns. Absence of a visible pattern cannot prove the assumptions, especially with few points.

It is tempting to put (a) and (e) under “model assumptions” because software reports them inside a fitted model object. They are instead mathematical consequences of how the coefficients were chosen.

</details>


## R-13-E05

**Exercise 13.5**

For \`R13-calibration-v1\` at setting 1.5, derive \\(s^2\\), \\(h_*\\), the 95% conditional-mean interval, and the 95% interval for one new reading. Explain the extra 1 in the latter standard error and verify both intervals with \`predict()\`.

<details>
<summary>Hint 1</summary>

Use \\(SSE=0.70\\), \\(n-2=2\\), and \`qt(0.975, df = 2)\`.

</details>

<details>
<summary>Hint 2</summary>

The centered target has $h_*=1/4$ and $s^2=0.35$; compare $s\\sqrt{h_*}$ with $s\\sqrt{1+h_*}$.

</details>

<details>
<summary>Solution</summary>

The fitted residuals are \\((0.1,0.2,-0.7,0.4)\\) volts, so

\\[
SSE=0.01+0.04+0.49+0.16=0.70\\text{ V}^2.
\\]

There are \\(n-2=2\\) residual degrees of freedom:

\\[
s^2=0.70/2=0.35\\text{ V}^2.
\\]

At \\(x_*=1.5=\\bar x\\), \\(h_*=1/4\\), the point prediction is 2.25 V, and \\(t_{0.975,2}\\approx4.3027\\). The mean-response half-width is
\\(4.3027\\sqrt{0.35(0.25)}\\approx1.2727\\) V. The new-reading half-width is
\\(4.3027\\sqrt{0.35(1.25)}\\approx2.8459\\) V.

Thus the intervals are approximately \\([0.9773,3.5227]\\) V and
\\([-0.5959,5.0959]\\) V. The extra 1 supplies the variance of one new independent error. The mean target has parameter-estimation uncertainty but no new individual error.

\`\`\`r
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
\`\`\`

Exact model-based coverage requires fixed design values, independent normal mean-zero errors with common positive variance, \\(S_{xx}>0\\), and \\(n>2\\); the future-error interval additionally requires the new error to be independent with the same variance. The synthetic endpoints alone cannot establish those conditions.

</details>


## R-13-E06

**Exercise 13.6**

For the guided investigation's six predictor values, calculate every \\(h_i\\). Fit the 48-point and 68-point endpoint scenarios, inspect their residuals, and identify which row has the largest leverage. Explain why large leverage, a large residual, and a data error are different claims.

<details>
<summary>Hint 1</summary>

Leverage uses only \\(x\\); residuals also use \\(y\\) and the fitted line.

</details>

<details>
<summary>Hint 2</summary>

The endpoint leverage is $33/38$ in both response scenarios; changing its response alters influence and residuals, not its leverage.

</details>

<details>
<summary>Solution</summary>

The leverage vector is approximately

\\[
(0.3421,0.2526,0.1947,0.1684,0.1737,0.8684).
\\]

The largest value belongs to learner-06 at 10 hours. It is distant from the predictor mean, so changing its response can strongly change the slope.

In the 48-point scenario, the residuals are approximately
\\((-3.368,-1.058,0.253,2.563,3.874,-2.263)\\) points. In the 68-point scenario, they are approximately
\\((0.316,0.521,-0.274,-0.068,-0.863,0.368)\\) points. The row with the highest leverage is not the row with the largest residual in the 48-point scenario.

\`\`\`r
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
\`\`\`

The executed solution derives the values from the literal predictors and also checks their displayed decimal targets and structural invariants.

Large leverage is a geometric fact about \\(x\\). A large residual is a discrepancy relative to one fit. A data error is a provenance claim requiring evidence about measurement, entry, or identity. Conflating them can turn a useful sensitivity warning into unjustified deletion.

</details>


## R-13-E07

**Exercise 13.7**

Two analysts propose predictions. Analyst A fits a line where every observed \\(x\\) equals 2 and predicts at \\(x=3\\). Analyst B fits an observational score-on-study-hours line over 0–4 hours and describes its slope as “the causal effect of assigning one more hour,” then predicts at 20 hours. Diagnose three distinct problems and state what additional evidence or data would address each.

<details>
<summary>Hint 1</summary>

Look separately for identifiability, extrapolation, and causal identification.

</details>

<details>
<summary>Hint 2</summary>

Constant predictors destroy slope identifiability; twenty hours extrapolates beyond the data; assigning extra study time is a causal question.

</details>

<details>
<summary>Solution</summary>

Analyst A has an **identifiability problem**. Constant observed \\(x=2\\) gives \\(S_{xx}=0\\), so the data cannot separate an intercept from a slope. Infinitely many lines pass through the fitted mean at \\(x=2\\) and give different values at \\(x=3\\). Observations at two or more distinct predictor values are required to identify a slope.

Analyst B has two further problems. Calling an observational slope a causal effect is a **causal-identification problem**: prior preparation, motivation, available time, and other variables may affect both self-selected hours and scores. A credible randomized assignment of a well-defined study-time intervention, or a justified identification strategy with measured confounders and explicit assumptions, would be needed.

Predicting at 20 hours from data spanning 0–4 hours is an **extrapolation problem**. Even a well-estimated association over 0–4 hours need not remain linear at 20. Data covering the intended range and a scientific reason for the functional form would address this. Wider conventional intervals do not automatically account for a wrong shape beyond the data.

\`\`\`r
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
\`\`\`

</details>


## R-13-E08

**Exercise 13.8**

Using the following synthetic output, write a bounded report: observed \\(x\\) range 10–20 minutes, fitted equation \\(\\hat y=5.2+0.30x\\) points, \\(s=1.1\\) points, and at \\(x_*=15\\) a 95% conditional-mean interval [9.1, 10.3] points and a 95% new-observation interval [7.4, 12.0] points. The rows are independently run laboratory trials under a fixed-design normal common-variance model, but the diagnostic evidence is limited. Include target, units, interval distinction, assumptions, and one limit. Do not invent causality or data provenance.

<details>
<summary>Hint 1</summary>

The point prediction is \\(5.2+0.30(15)=9.7\\) points.

</details>

<details>
<summary>Hint 2</summary>

The wider interval concerns a new individual outcome, while the narrower interval concerns its conditional mean under the stated normal model.

</details>

<details>
<summary>Solution</summary>

A bounded report is:

> Across the stated independently run synthetic laboratory trials, the fitted response increases by 0.30 point per additional minute within the observed 10–20 minute predictor range; the fitted intercept is 5.2 points at zero minutes, outside that range, so it has no direct support from these data. At 15 minutes, the point estimate for the conditional mean response is \\(5.2+0.30(15)=9.7\\) points. Under the fixed-design model with independent normal mean-zero errors and a common positive variance, the 95% interval for that conditional mean is [9.1, 10.3] points. The 95% interval for one independent new response at 15 minutes is [7.4, 12.0] points because it also includes the new trial's individual error. The residual scale estimate is 1.1 points. Limited diagnostic evidence cannot prove the model assumptions, and this report neither establishes causality nor supports extrapolation outside 10–20 minutes. No claim about data provenance is possible from the supplied output.

This report names the row mechanism supplied by the exercise without inventing how the fixture was collected. It distinguishes the conditional mean from an individual response, gives units, states the assumptions behind exact coverage, and limits interpretation. Saying “95% of responses lie between 7.4 and 12.0” would be wrong: the prediction interval is a repeated-use procedure for one new response, not a tolerance interval for a fixed percentage of all responses.

Return to [Lines for Description and Prediction](#/item/book-statistics-with-r?chapter=simple-linear-models) and use the matching exercise IDs to compare reasoning, not just final numbers.

</details>


Complete, reasoned solutions are in [Solutions: Lines for Description and Prediction](#/item/book-statistics-with-r?section=back:solutions-simple-linear-models). Use the exercise IDs R-13-E01 through R-13-E08 when checking your work.

## Recap

Least squares first answers an algebraic question. When \\(S_{xx}>0\\), completing squares gives \\(b_1=S_{xy}/S_{xx}\\) and \\(b_0=\\bar y-b_1\\bar x\\); the fitted residuals sum to zero and have zero \\(x\\)-weighted sum. None of this requires probability.

Exact conventional \\(t\\) intervals require the stated fixed-design model: independent normal mean-zero errors with a common positive variance, as well as \\(n>2\\) and \\(S_{xx}>0\\). The conditional-mean interval and new-observation prediction interval share a center, but the latter includes new individual error and is wider when the fitted residual variance is positive. Extrapolation, leverage sensitivity, and causal interpretation remain scientific design questions, even when R returns a number.

## R-13-E09

**Exercise 13.9**

In the main penguin investigation, compare the source-row count with the complete-case row count for flipper length and body mass. Explain why an unchanged source file and an explicit exclusion table are necessary even if only a few rows are omitted.

<details>
<summary>Hint 1</summary>

Use the specific two-variable complete-case mask rather than deleting missing values in every column.

</details>

<details>
<summary>Hint 2</summary>

The descriptive target after filtering is the retained measured pairs; an omitted mass or length is not a zero measurement.

</details>

<details>
<summary>Solution</summary>

The source contains 344 rows and the two-variable analysis retains 342 measured pairs. The two incomplete measurement rows remain in the unchanged source and appear in the exclusion table. Removing rows with missing sex would exclude additional penguins even though sex is not used in this simple line. A small exclusion count does not prove selection is ignorable: the descriptive line concerns retained measurements, and a broader process claim needs a defensible selection/model argument.

</details>

## R-13-E10

**Exercise 13.10**

A fitted body-mass line is $\\hat y=b_0+b_1x$, with mass in grams and flipper length in millimetres. Write the coefficients after using $z=x-200$ and mass in kilograms. State which predictions change physically.

<details>
<summary>Hint 1</summary>

Substitute $x=z+200$ into the original fitted equation.

</details>

<details>
<summary>Hint 2</summary>

Converting grams to kilograms divides the entire response equation by one thousand.

</details>

<details>
<summary>Solution</summary>

In the centered predictor, the gram-scale equation is $\\hat y=(b_0+200b_1)+b_1z$. On the kilogram scale it is $\\hat y_{\\rm kg}=(b_0+200b_1)/1000+(b_1/1000)z$. The intercept now describes the fitted mass at 200 millimetres, and the slope is kilograms per millimetre. The same physical predictions and residual pattern are represented in different coordinates; centering and unit conversion do not supply new evidence or cure a misspecified linear model.

</details>

## Sources and rights

- R Core Team, [\`lm\`: Fitting Linear Models](https://stat.ethz.ch/R-manual/R-release/library/stats/html/lm.html), base-distribution R 4.6.0 documentation. Consulted in the installed R help for formula syntax, the implicit intercept, least-squares fitting, accessors, residual definition, and rank-deficient fits; online release page accessed 2026-09-06.
- R Core Team, [\`predict.lm\`: Predict Method for Linear Model Fits](https://stat.ethz.ch/R-manual/R-release/library/stats/html/predict.lm.html), base-distribution R 4.6.0 documentation. Consulted in the installed R help for \`newdata\`, confidence and prediction intervals, output columns, future-observation scope, and default prediction variance; online release page accessed 2026-09-06.
- R Core Team, [*An Introduction to R*, §11.2 “Linear models”](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Linear-models). Consulted in the installed R 4.6.0 manual for model formulas and fitted-model operations.
- NIST/SEMATECH, [“Linear Least Squares Regression”](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm), [“Estimating the Average Response”](https://www.itl.nist.gov/div898/handbook/pmd/section5/pmd511.htm), and [“Predicting a Single Response”](https://www.itl.nist.gov/div898/handbook/pmd/section5/pmd512.htm), *e-Handbook of Statistical Methods*. Consulted for least-squares scope, residual scale, sensitivity and extrapolation boundaries, \\(t\\)-interval structure, and the extra independent-error component for a single future response.

The derivation, fixture values, prose, investigation, and exercises are original Math Atlas material. The main penguin investigation uses the credited CC0 source; its original rows remain distinct from the synthetic hand fixtures. No third-party exercise is adapted. This chapter is licensed CC BY-SA 4.0 as declared in the front matter. Earlier source notes recorded synthetic-fixture execution with R 4.6.0 on Linux. That historical note does not cover the revised penguin investigation, which has not been executed in this implementation; no cross-platform verification or human review is claimed.

## Summary

Least-squares coefficients and residual identities are algebraic properties of a declared table. The main penguin investigation retains source rows and an explicit complete-case rule, while the small calibration example makes the proof inspectable by hand. Normal-model intervals require additional assumptions; conditional means, new observations, pooled associations and intervention effects remain different targets.
`;export{e as default};