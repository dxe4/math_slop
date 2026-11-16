
# Diagnostics, Multiplicity, and the Analyses We Chose

A fitted line can look convincing until one row is inspected. A comparison can look decisive until we learn that it was the smallest of twenty comparisons. These are different problems, but they share a lesson: the path to a reported result is part of the evidence.

A diagnostic asks how the observed data relate to a fitted procedure. It may reveal curvature, changing spread, a recording error, or a row with unusual influence. It cannot prove that errors are independent or normal, that missing values are harmless, or that a convenient row should be deleted. Multiplicity asks what happens when several claims can trigger a false rejection. Analysis selection asks a harder question: were the claims, subgroups, variables, or methods chosen after their outcomes were visible?

This chapter develops a modest but dependable workflow. Inspect the data and fitted residuals; investigate unusual rows at their source; preserve every planned sensitivity analysis; and define a family of tests before interpreting its members. We prove one simultaneous error guarantee from first principles. We also show exactly why that guarantee does not rescue a family invented after inspecting results.

## The interfaces we need

A **least-squares line** chooses an intercept and slope to minimize the sum of squared residuals. For row $i$, the **residual** is $e_i=y_i-\hat y_i$, the observed outcome minus its fitted value. Conventional exact linear-model intervals require stronger conditions than the least-squares calculation: fixed predictor values and independent normal errors with mean zero and one common positive variance. Residual plots can expose conflict with those conditions, but agreement with a pattern we hoped to see is not a proof of them.

A p-value is calibrated under a specified null hypothesis and repetition mechanism. If, whenever its null is true, $\Pr(P\le u)\le u$ for every $0\le u\le1$, call $P$ a **valid marginal p-value**. “Marginal” means the calibration concerns that one test. It says neither that the null is probably true nor that a collection of tests can all be read at the same unadjusted threshold.

Earlier chapters distinguish random assignment from random sampling and define type I error as rejecting a true null. Those mechanisms still matter here. A correction to p-values cannot create random sampling, random assignment, causal identification, or a plausible model.

**Definition R-DEF-diagnostic (diagnostic).** A diagnostic is an observed-data summary or display used to find discrepancies between data and a proposed analysis, or to measure how particular rows affect that analysis. It is evidence for investigation and sensitivity analysis, not a test that proves the model assumptions.

## A declared synthetic service fixture

Our original fixture represents fourteen service-queue records, one row per ticket. `ticket_id` is the unique key. `queue` is A or B. `load_calls` is a count of active calls when the ticket arrived. `wait_min` is waiting time in minutes. The missing code is R's `NA`; only ticket q14 has a missing waiting time. Ticket q07's recorded value is 31 minutes and its source status says that its unit needs checking. It is not preclassified as wrong.

The literal fixture was created for Math Atlas, version 1. It is synthetic and contains no real customer records. Its fourteen invented rows cannot establish an operational effect. There are no exclusions in the source fixture.

In R, `data.frame` binds equal-length vectors into named columns. `sprintf` pads the ticket numbers with zeroes, `rep` repeats a pattern, and `stopifnot` stops if a validation condition is false. `anyDuplicated` returns zero when a vector has no repeated value. `is.na` identifies the declared missing code.

```r
# Original literal synthetic fixture: Math Atlas, version 1.
service <- data.frame(
  ticket_id = sprintf("q%02d", 1:14),
  queue = rep(c("A", "B"), each = 7L),
  load_calls = rep(1:7, 2L),
  wait_min = c(8, 10, 11, 13, 15, 16, 31, 10, 12, 13, 15, 17, 19, NA),
  duration_status = c(rep("verified_min", 6L), "needs_source_check",
                      rep("verified_min", 7L)),
  stringsAsFactors = FALSE
)

stopifnot(nrow(service) == 14L)
stopifnot(identical(service$ticket_id, sprintf("q%02d", 1:14)))
stopifnot(anyDuplicated(service$ticket_id) == 0L)
stopifnot(identical(sort(unique(service$queue)), c("A", "B")))
stopifnot(all(service$load_calls == rep(1:7, 2L)))
stopifnot(identical(which(is.na(service$wait_min)), 14L))
stopifnot(service$duration_status[7L] == "needs_source_check")
```

## Worked example 1: a diagnostic is a question, not a delete button

We first fit `wait_min ~ load_calls` to rows with recorded waiting times. The formula asks R for an intercept and one slope. `complete.cases` returns `TRUE` for rows without missing values in the selected column. `lm` fits the least-squares line; `coef`, `fitted`, and `residuals` extract coefficients, fitted values, and residuals.

Two further summaries describe a row's position in this particular fit. **Leverage** is large when a predictor value has an unusual position relative to the other predictors. **Cook's distance** combines residual size and leverage to measure how much a fitted coefficient vector is affected by deleting a row. Neither quantity announces that the row is erroneous. Both depend on the model and the other rows.

`hatvalues` and `cooks.distance` compute those quantities. `rstandard` divides each residual by an estimated residual scale adjusted for leverage. The following table is also the numerical alternative to the plots below.

```r
observed_service <- service[complete.cases(service["wait_min"]), ]
service_fit <- lm(wait_min ~ load_calls, data = observed_service)

diagnostic_table <- data.frame(
  ticket_id = observed_service$ticket_id,
  fitted_min = fitted(service_fit),
  residual_min = residuals(service_fit),
  standardized_residual = rstandard(service_fit),
  leverage = hatvalues(service_fit),
  cooks_distance = cooks.distance(service_fit),
  stringsAsFactors = FALSE
)

coef_expected <- c(5.10465116279070, 2.52325581395349)
coef_tol <- 1e-10 + 1e-8 * abs(coef_expected)
stopifnot(nrow(observed_service) == 13L)
stopifnot(all(abs(unname(coef(service_fit)) - coef_expected) <= coef_tol))
stopifnot(abs(sum(diagnostic_table$residual_min)) <= 1e-10)
stopifnot(diagnostic_table$ticket_id[which.max(diagnostic_table$cooks_distance)] == "q07")
stopifnot(abs(max(diagnostic_table$cooks_distance) - 2.0627079664) <= 1e-8)

diagnostic_table_display <- data.frame(
  ticket_id = diagnostic_table$ticket_id,
  round(diagnostic_table[, -1L], 3),
  stringsAsFactors = FALSE
)
diagnostic_table_display
```

| Ticket | Fitted (min) | Residual (min) | Standardized residual | Leverage | Cook's distance |
|---|---:|---:|---:|---:|---:|
| q01 | 7.628 | 0.372 | 0.134 | 0.243 | 0.003 |
| q02 | 10.151 | -0.151 | -0.051 | 0.145 | 0.000 |
| q03 | 12.674 | -1.674 | -0.549 | 0.090 | 0.015 |
| q04 | 15.198 | -2.198 | -0.717 | 0.078 | 0.022 |
| q05 | 17.721 | -2.721 | -0.903 | 0.110 | 0.050 |
| q06 | 20.244 | -4.244 | -1.471 | 0.184 | 0.245 |
| q07 | 22.767 | 8.233 | 3.085 | 0.302 | 2.063 |
| q08 | 7.628 | 2.372 | 0.853 | 0.243 | 0.117 |
| q09 | 10.151 | 1.849 | 0.626 | 0.145 | 0.033 |
| q10 | 12.674 | 0.326 | 0.107 | 0.090 | 0.001 |
| q11 | 15.198 | -0.198 | -0.064 | 0.078 | 0.000 |
| q12 | 17.721 | -0.721 | -0.239 | 0.110 | 0.004 |
| q13 | 20.244 | -1.244 | -0.431 | 0.184 | 0.021 |

The fitted slope is about 2.523 minutes per additional active call. Ticket q07 has the largest standardized residual and Cook's distance. The residual-versus-fitted display shows q07 above the line and several preceding A-queue records below it; Cook's-distance stems isolate q07 as the most influential row. That is a useful prompt to inspect its timestamp calculation, unit metadata, and source record.

The plots do not tell us whether 31 is correct. They also cannot establish independent errors, a linear conditional mean, constant variance, normality, or causal effects of load. With only thirteen observed outcomes, apparent visual regularity would be weak evidence even for a descriptive pattern.

`plot` draws points, and `abline` adds a reference line. The point shape `pch = 1` is an open circle; `type = "h"` draws stems. Line type 2 is dashed, so the references remain distinguishable without color. To make the graphics lifecycle reproducible, the block opens a named PDF inside the fresh run's temporary working directory, draws both panels, closes the device, verifies the artifact and restored null device, and then removes the temporary PDF.

```r
diagnostic_plot_file <- file.path(getwd(), "r14-diagnostic-plots.pdf")
device_before_plot <- dev.cur()
stopifnot(identical(unname(device_before_plot), 1L))
stopifnot(!file.exists(diagnostic_plot_file))

pdf(diagnostic_plot_file, width = 10, height = 5, onefile = TRUE)
opened_plot_device <- dev.cur()
stopifnot(unname(opened_plot_device) > unname(device_before_plot))
old_par <- par(mfrow = c(1L, 2L))
plot(
  diagnostic_table$fitted_min,
  diagnostic_table$residual_min,
  pch = 1,
  xlab = "Fitted waiting time (minutes)",
  ylab = "Residual (minutes)",
  main = "Residuals versus fitted"
)
abline(h = 0, lty = 2)
plot(
  seq_len(nrow(diagnostic_table)),
  diagnostic_table$cooks_distance,
  type = "h",
  lwd = 2,
  xlab = "Observed-row order",
  ylab = "Cook's distance",
  main = "Influence by row"
)
points(seq_len(nrow(diagnostic_table)), diagnostic_table$cooks_distance, pch = 19)
axis(1L, at = c(1L, 7L, 13L), labels = c("q01", "q07", "q13"))
par(old_par)
closed_to_device <- dev.off()

stopifnot(identical(unname(closed_to_device), unname(device_before_plot)))
stopifnot(identical(unname(dev.cur()), 1L))
stopifnot(file.exists(diagnostic_plot_file))
stopifnot(is.finite(file.info(diagnostic_plot_file)$size))
stopifnot(file.info(diagnostic_plot_file)$size > 0)
unlink(diagnostic_plot_file)
stopifnot(!file.exists(diagnostic_plot_file))
```

An unusual row deserves two separate questions. First, **is the record wrong?** That requires evidence outside the fitted residual: a source log, instrument range, unit definition, or correction trail. If a unit error is verified, correct it transparently and retain the old value in an audit record. Second, **is the conclusion dependent on the row?** That calls for a labeled sensitivity analysis. A large change is uncertainty about robustness, not evidence that deletion is correct.

## Several chances to make one false claim

**Definition R-DEF-multiplicity (multiplicity).** Multiplicity is the presence of several analysis opportunities whose results may contribute to what is claimed or reported. Opportunities include multiple outcomes, subgroups, variables, methods, stopping times, or transformations.

**Definition R-DEF-familywise-error (familywise error rate).** For a specified family of hypotheses, the familywise error rate, abbreviated FWER, is the probability of at least one rejection among the true null hypotheses under the stated repetition mechanism.

The word *family* cannot be supplied by software. It comes from the scientific decision: which tests could support the joint claim? A study with four predeclared primary outcomes may have a family of four. Four separate unrelated studies need not form one family merely because their results appear on one screen. Conversely, calling twenty inspected subgroups “exploratory” only after one is significant does not erase the selection.

## The Bonferroni guarantee

**Theorem R-THM-bonferroni (Bonferroni control; proved here).** Fix a family of $m\ge1$ hypotheses and a threshold $0\le\alpha\le1$ before observing their results. Suppose every true null has a valid marginal p-value. Reject hypothesis $j$ when $P_j\le\alpha/m$. Then the FWER is at most $\alpha$. No independence assumption is required.

**Proof.** Let $I_0$ be the indices of the true null hypotheses, and let $A_j=\{P_j\le\alpha/m\}$ be the event that true null $j$ is rejected. A familywise error occurs on the union $\bigcup_{j\in I_0}A_j$. For any events, the union bound says

$$
\Pr\left(\bigcup_{j\in I_0}A_j\right)
\le \sum_{j\in I_0}\Pr(A_j).
$$

Validity of each true-null p-value gives $\Pr(A_j)\le\alpha/m$. Therefore

$$
\mathrm{FWER}
\le |I_0|\frac{\alpha}{m}
\le m\frac{\alpha}{m}
=\alpha.
$$

The union bound makes no claim about dependence, so correlated p-values do not invalidate this argument. The cost is that the bound may be conservative: overlapping rejection events are counted more than once. $\square$

The theorem assumes the family and rule are fixed, and it assumes valid marginal p-values under the mechanisms that generated them. It does not validate those p-values. It also does not say that the probability any rejected null is true is at most $\alpha$.

## Worked example 2: manual and R Bonferroni adjustments

Suppose four predeclared outcomes produce p-values $0.01,0.03,0.20,0.80$. At $\alpha=0.05$, the Bonferroni threshold is $0.05/4=0.0125$. Equivalently at this level, multiply every p-value by four and cap the result at 1.

More generally, for every $0\le\alpha<1$,

$$
p\le\alpha/m
\quad\Longleftrightarrow\quad
\min(1,mp)\le\alpha.
$$

Because the right side is below 1, its cap cannot be active: it is equivalent to $mp\le\alpha$, and division by positive $m$ gives the raw rule. If $mp\le1$, the uncapped value $mp$ is the smallest threshold in $[0,1]$ at which the raw Bonferroni rule rejects. If $mp>1$, no threshold in $[0,1]$ makes $p\le\alpha/m$ true. The reported adjusted value 1 then records saturation of the cap and no rejection at any level below 1; it is not an attainable smallest raw threshold. At the endpoint $\alpha=1$, comparing the capped value with 1 would reject, so it is not equivalent to the theorem's raw rule when $mp>1$. In every case, an adjusted p-value is not the posterior probability that its null is true.

In R, `pmin(1, x)` compares each member of `x` with 1. `p.adjust` applies a named adjustment; its `"bonferroni"` method multiplies by the family size and caps at 1. The logical vector `adjusted <= alpha` records rejections.

```r
p_values <- c(speed = 0.01, accuracy = 0.03, comfort = 0.20, cost = 0.80)
alpha <- 0.05
family_size <- length(p_values)

manual_adjusted <- pmin(1, family_size * p_values)
r_adjusted <- p.adjust(p_values, method = "bonferroni")
rejected <- r_adjusted <= alpha

expected_adjusted <- c(speed = 0.04, accuracy = 0.12, comfort = 0.80, cost = 1.00)
adjust_tol <- 1e-10 + 1e-8 * abs(expected_adjusted)
stopifnot(all(abs(manual_adjusted - expected_adjusted) <= adjust_tol))
stopifnot(all(abs(r_adjusted - manual_adjusted) <= adjust_tol))
stopifnot(identical(rejected, c(speed = TRUE, accuracy = FALSE,
                               comfort = FALSE, cost = FALSE)))
stopifnot(sum(rejected) == 1L)

# Check the raw/capped equivalence at several levels strictly below 1.
levels_below_one <- c(0, 0.05, 0.80, 0.99)
raw_rule <- outer(p_values, levels_below_one,
                  function(p, level) p <= level / family_size)
capped_rule <- outer(r_adjusted, levels_below_one,
                     function(adjusted, level) adjusted <= level)
stopifnot(identical(raw_rule, capped_rule))

# Values on both sides of 1/m exercise the saturation boundary.
uncapped <- family_size * p_values <= 1
saturated <- family_size * p_values > 1
stopifnot(any(uncapped), any(saturated))
stopifnot(all(r_adjusted[uncapped] == family_size * p_values[uncapped]))
stopifnot(all(r_adjusted[saturated] == 1))
stopifnot(!any(p_values[saturated] <= 1 / family_size))
stopifnot(all(r_adjusted[saturated] <= 1))

bonferroni_table <- data.frame(
  outcome = names(p_values),
  raw_p = unname(p_values),
  adjusted_p = unname(r_adjusted),
  reject_at_0.05 = unname(rejected),
  stringsAsFactors = FALSE
)
bonferroni_table
```

| Outcome | Raw p | Bonferroni-adjusted p | Reject at 0.05? |
|---|---:|---:|:---:|
| speed | 0.01 | 0.04 | yes |
| accuracy | 0.03 | 0.12 | no |
| comfort | 0.20 | 0.80 | no |
| cost | 0.80 | 1.00 | no |

Exactly the first hypothesis is rejected. This calculation is reproducible, but its scientific interpretation still inherits the design and model behind each raw p-value.

## Why selecting the winner changes calibration

**Definition R-DEF-analysis-selection (analysis selection).** Analysis selection occurs when observed outcomes or outcome-derived results influence which hypothesis, subgroup, variable, transformation, method, model, or stopping time is presented as the analysis of interest.

**Claim R-CLAIM-selection (ordinary advertised inference after selection; counterexample proved here).** Ordinary intervals and tests need not retain their advertised coverage or type I error after outcome-driven analysis selection. Reporting the final analysis alone does not restore those properties.

Here is a counterexample. Under four true nulls, suppose $P_1,\ldots,P_4$ are independent and each is uniform on $[0,1]$, so each is a valid p-value. Select $P_{\mathrm{min}}=\min(P_1,\ldots,P_4)$ and advertise it as though it had been the only test. Then

$$
\Pr(P_{\mathrm{min}}\le\alpha)
=1-\Pr(P_1>\alpha,\ldots,P_4>\alpha)
=1-(1-\alpha)^4.
$$

At $\alpha=0.05$, this is $1-0.95^4=0.18549375$, not 0.05. Every individual p-value was valid. Selection changed the reported statistic's distribution. Independence is used only to calculate this counterexample exactly; Bonferroni control itself did not need independence.

The same logic covers outcome-driven subgroup searches and “try methods until one works.” Choosing an interval because it excludes zero also makes its individual 95% label an incomplete description of the selection process. Valid post-selection inference is a specialist problem and requires a procedure designed for the selection rule. This chapter supplies no general post-selection guarantee.

## Missingness and influence as planned sensitivities

**Definition R-DEF-missingness-sensitivity (missingness sensitivity analysis).** A missingness sensitivity analysis repeats a fixed analysis under explicitly stated alternative values or mechanisms for missing outcomes, reports every planned scenario, and compares conclusions. It reveals dependence on assumptions; it does not identify which unobserved value or mechanism is true.

Before calculating, we declare four scenarios for the service fixture:

1. Use the thirteen recorded outcomes, with no row deletion.
2. Exclude q07 only as a hypothetical representation of a future source audit that verifies it is unusable; this is not our preferred dataset now.
3. Fill q14 with a predeclared low value of 9 minutes.
4. Fill q14 with a predeclared high value of 25 minutes.

The low and high values are invented sensitivity endpoints, not estimates of q14. Every scenario keeps the same two summaries: queue A mean minus queue B mean, and the slope in `wait_min ~ load_calls`. We also display the Welch test p-value to show how an ordinary inferential output moves. Chapter 12 explains that Welch's test is approximate and needs independent-group sampling conditions. No such sampling mechanism was declared for these synthetic operational rows, so the p-values below are method outputs, not confirmatory evidence.

The function below makes each scenario. `tapply` computes a mean within each queue. `t.test` uses Welch's unequal-variance method by default. `lapply` runs the function for every planned scenario; `do.call(rbind, ...)` stacks the four returned rows. Each model is visibly refitted with the unchanged formula. Counts must satisfy input = analyzed + unresolved missing + excluded.

```r
scenario_names <- c("recorded", "q07_excluded_if_verified",
                    "q14_low_9", "q14_high_25")

analyze_scenario <- function(scenario) {
  z <- service
  unresolved_missing <- 0L
  excluded <- 0L
  filled <- 0L

  if (scenario == "recorded") {
    unresolved_missing <- sum(is.na(z$wait_min))
    z <- z[!is.na(z$wait_min), ]
  } else if (scenario == "q07_excluded_if_verified") {
    unresolved_missing <- sum(is.na(z$wait_min))
    excluded <- 1L
    z <- z[!is.na(z$wait_min) & z$ticket_id != "q07", ]
  } else if (scenario == "q14_low_9") {
    z$wait_min[z$ticket_id == "q14"] <- 9
    filled <- 1L
  } else if (scenario == "q14_high_25") {
    z$wait_min[z$ticket_id == "q14"] <- 25
    filled <- 1L
  } else {
    stop("Unknown sensitivity scenario")
  }

  stopifnot(nrow(z) + unresolved_missing + excluded == nrow(service))
  stopifnot(!anyNA(z$wait_min))
  queue_means <- tapply(z$wait_min, z$queue, mean)
  fixed_formula_fit <- lm(wait_min ~ load_calls, data = z)
  welch <- t.test(wait_min ~ queue, data = z)

  data.frame(
    scenario = scenario,
    n_input = nrow(service),
    n_A = sum(z$queue == "A"),
    n_B = sum(z$queue == "B"),
    unresolved_missing = unresolved_missing,
    excluded = excluded,
    scenario_filled = filled,
    mean_A_minus_B_min = unname(queue_means["A"] - queue_means["B"]),
    slope_min_per_call = unname(coef(fixed_formula_fit)["load_calls"]),
    welch_p_output = welch$p.value,
    model_refit = TRUE,
    formula_used = "wait_min ~ load_calls",
    stringsAsFactors = FALSE
  )
}

sensitivity_rows <- do.call(rbind, lapply(scenario_names, analyze_scenario))
row.names(sensitivity_rows) <- NULL

expected_differences <- c(0.523809523809524, -2.166666666666667,
                          1.285714285714286, -1.000000000000000)
expected_slopes <- c(2.52325581395349, 1.7, 1.78571428571429,
                     2.64285714285714)
expected_p <- c(0.8735678, 0.2677482, 0.6978137, 0.7784445)
stopifnot(identical(sensitivity_rows$scenario, scenario_names))
stopifnot(nrow(sensitivity_rows) == length(scenario_names))
stopifnot(all(sensitivity_rows$n_input ==
              sensitivity_rows$n_A + sensitivity_rows$n_B +
              sensitivity_rows$unresolved_missing + sensitivity_rows$excluded))
stopifnot(all(sensitivity_rows$model_refit))
stopifnot(all(sensitivity_rows$formula_used == "wait_min ~ load_calls"))
stopifnot(all(abs(sensitivity_rows$mean_A_minus_B_min - expected_differences) <=
              1e-10 + 1e-8 * abs(expected_differences)))
stopifnot(all(abs(sensitivity_rows$slope_min_per_call - expected_slopes) <=
              1e-10 + 1e-8 * abs(expected_slopes)))
stopifnot(all(abs(sensitivity_rows$welch_p_output - expected_p) <=
              1e-7 + 1e-6 * abs(expected_p)))

sensitivity_rows[, c("scenario", "n_A", "n_B", "unresolved_missing",
                     "excluded", "scenario_filled", "mean_A_minus_B_min",
                     "slope_min_per_call", "welch_p_output")]
```

| Scenario | n A | n B | Unresolved missing | Excluded | Filled in scenario | Mean A − B (min) | Slope (min/call) | Welch p output |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| recorded | 7 | 6 | 1 | 0 | 0 | 0.524 | 2.523 | 0.874 |
| q07 excluded if verified | 6 | 6 | 1 | 1 | 0 | -2.167 | 1.700 | 0.268 |
| q14 = 9 | 7 | 7 | 0 | 0 | 1 | 1.286 | 1.786 | 0.698 |
| q14 = 25 | 7 | 7 | 0 | 0 | 1 | -1.000 | 2.643 | 0.778 |

The sign of the queue difference changes across planned scenarios, and the slope ranges from 1.7 to about 2.643 minutes per call. This warns that the descriptive results depend on q07's status and q14's missing value. It does not show which row treatment is correct. None of the four p-values supports a population claim because the required sampling mechanism was never supplied. Choosing the scenario with the smallest p-value, 0.268 here, would still be outcome-driven selection even though it does not cross 0.05.

## The adverse workflow: erase the path and keep the winner

Suppose an analyst fits the recorded data, notices q07, deletes it without checking the source, searches several subgroups, and reports only the most favorable result. The final p-value cannot encode the deleted row, the abandoned analyses, or the stopping rule. A Bonferroni calculation applied only to the final visible test uses the wrong family. A clean script that reproduces that final fit faithfully reproduces the hidden selection.

A defensible analysis-history ledger records, in order, the question, data version, target, method or formula, subgroup, missing-value rule, diagnostic prompt, decision, and whether outcomes were visible at the decision. Corrections backed by source evidence belong in the ledger too. The point is not to forbid learning from data. It is to prevent exploratory learning from being advertised with confirmatory error guarantees it no longer has.

## What successful validation does and does not justify

The code above establishes narrow computational facts in fresh R execution: fourteen keys are unique; q14 is the sole missing outcome; q07 has the largest Cook's distance in the declared complete-case fit; manual and R Bonferroni values agree; exactly one of the four fixed tests is rejected; every planned sensitivity row is present; counts reconcile; and the same formula is refitted in all scenarios.

Those assertions do not prove model assumptions, data accuracy, representative sampling, causal effects, harmless missingness, scientific importance, or valid inference after selection. Bonferroni controls familywise error only for the fixed family of valid marginal p-values covered by its theorem. The sensitivity table exposes dependence on stated alternatives but gives no causal or post-selection guarantee.

## Core exercises

## Worked example 3: a valid family bound can be conservative

Suppose ten fixed tests have valid null p-values and the familywise target is $0.05$. Bonferroni uses threshold $0.005$ for each test. If exactly four nulls are true, the probability of any false rejection is at most $4(0.005)=0.02$. False nulls can be rejected without contributing to the event called a false rejection. The rule does not require knowing which four are true: the larger bound $10(0.005)=0.05$ applies uniformly over possible truth configurations.

For contrast, imagine all ten null p-values are independent uniform variables and the analyst uses $0.05$ for each. The probability of at least one rejection is $1-(1-0.05)^{10}=1-0.95^{10}$, approximately $0.4013$. Independence is used in that exact product calculation. It is not used in the Bonferroni proof, which remains valid for arbitrary dependence given marginal validity.

A correction may be conservative when the tests share almost the same information. That observation does not justify ignoring the family after the smallest p-value has been seen. Choose a justified simultaneous procedure or report the exploratory history. The family of events and the procedure used to control it must be specified before the bound can be interpreted.

<details>
<summary>Solution setup for the original exercises</summary>

These solutions are independently executable. The literal fixtures below are original synthetic Math Atlas data, version 1. Waiting times are minutes, load is active-call count, ticket IDs are unique keys, `NA` is the sole missing code, q14 alone is missing, and no source row is silently excluded.

```r
service <- data.frame(
  ticket_id = sprintf("q%02d", 1:14),
  queue = rep(c("A", "B"), each = 7L),
  load_calls = rep(1:7, 2L),
  wait_min = c(8, 10, 11, 13, 15, 16, 31, 10, 12, 13, 15, 17, 19, NA),
  duration_status = c(rep("verified_min", 6L), "needs_source_check",
                      rep("verified_min", 7L)),
  stringsAsFactors = FALSE
)
stopifnot(nrow(service) == 14L)
stopifnot(anyDuplicated(service$ticket_id) == 0L)
stopifnot(identical(which(is.na(service$wait_min)), 14L))
```

</details>

## R-14-E01

**Exercise 17.1**

**Read residual diagnostics cautiously.** A fitted line has three notable rows: r1 has residual 0.2 and Cook's distance 0.01; r2 has residual -1.1 and Cook's distance 0.08; r3 has residual 5.4 and Cook's distance 1.30. State two conclusions the table supports, two assumptions it cannot prove, and a defensible next action for r3.

<details>
<summary>Hint 1</summary>

Separate “unusual relative to this fit” from “incorrect record.”

</details>

<details>
<summary>Hint 2</summary>

The third row deserves source checking and a retained sensitivity analysis; a large Cook's distance alone does not prove corruption.

</details>

<details>
<summary>Solution</summary>

The table supports saying that r3 has the largest displayed residual and the largest displayed Cook's distance. It also supports calling r3 influential relative to this fitted line and these rows. It does not establish that r3 was recorded incorrectly, and it cannot prove independent errors, a linear conditional mean, constant error variance, or normal errors.

A defensible next action is to inspect r3's source record, units, timestamps, and collection process. Then retain the original analysis and add a labeled sensitivity fit without r3 if dependence on the row matters. Deleting r3 merely because its Cook's distance is 1.30 reverses the evidential order: the model would be used to erase data that disagree with it.

</details>


## R-14-E02

**Exercise 17.2**

**Derive a union-bound guarantee.** Six hypotheses form a fixed family. Each true null has a valid marginal p-value. Prove that rejecting at $0.06/6$ gives FWER at most 0.06, including the case where only four nulls are true. Identify whether independence appears in your proof.

<details>
<summary>Hint 1</summary>

Form one rejection event for each true null and bound their union.

</details>

<details>
<summary>Hint 2</summary>

If only four nulls are true, the union bound is at most $4(0.06/6)=0.04$, which is still below $0.06$.

</details>

<details>
<summary>Solution</summary>

Let $I_0$ index the true nulls. For each $j\in I_0$, define $A_j=\{P_j\le0.01\}$ because $0.06/6=0.01$. Validity gives $\Pr(A_j)\le0.01$. The union bound yields

$$
\Pr\left(\bigcup_{j\in I_0}A_j\right)
\le\sum_{j\in I_0}\Pr(A_j)
\le |I_0|(0.01).
$$

If all six nulls are true, this is at most $6(0.01)=0.06$. If only four are true, it is at most $4(0.01)=0.04$, which is still no greater than 0.06. Independence never appears: the union bound holds for arbitrarily dependent events. The fixed family and valid marginal p-values are the conditions doing the work.

</details>


## R-14-E03

**Exercise 17.3**

**Calculate a multiplicity correction.** For the fixed family $p=(0.004,0.018,0.051,0.40,0.90)$, calculate Bonferroni-adjusted p-values and rejections at $\alpha=0.05$ by hand. Verify them with `p.adjust`.

<details>
<summary>Hint 1</summary>

Multiply by five, cap at 1, then compare adjusted values with 0.05.

</details>

<details>
<summary>Hint 2</summary>

The adjusted vector is $(0.020,0.090,0.255,1,1)$, so identify which entries are at most $0.05$.

</details>

<details>
<summary>Solution</summary>

Multiplying by five gives $(0.020,0.090,0.255,2.000,4.500)$. Capping at 1 gives

$$
(0.020,0.090,0.255,1.000,1.000).
$$

Only the first adjusted p-value is at most 0.05, so only the first hypothesis is rejected. A common error is to leave 2 and 4.5 as adjusted p-values even though p-values live in $[0,1]$.

For any level $\alpha<1$, $p\le\alpha/5$ exactly when $\min(1,5p)\le\alpha$. For the first three p-values, $5p\le1$, so the adjusted value $5p$ is an attainable smallest threshold for the raw rule. For 0.40 and 0.90, however, $5p>1$: even $\alpha=1$ cannot satisfy the raw inequalities $p\le\alpha/5$. Their adjusted values of 1 record the cap and no rejection below 1; 1 is not an attainable smallest raw threshold for those tests.

```r
exercise_p <- c(0.004, 0.018, 0.051, 0.40, 0.90)
exercise_adjusted <- p.adjust(exercise_p, method = "bonferroni")
manual_adjusted <- pmin(1, 5 * exercise_p)
expected_adjusted <- c(0.020, 0.090, 0.255, 1.000, 1.000)
tol <- 1e-10 + 1e-8 * abs(expected_adjusted)

stopifnot(all(abs(exercise_adjusted - manual_adjusted) <= tol))
stopifnot(all(abs(exercise_adjusted - expected_adjusted) <= tol))
stopifnot(identical(exercise_adjusted <= 0.05,
                    c(TRUE, FALSE, FALSE, FALSE, FALSE)))

levels_below_one <- c(0, 0.05, 0.50, 0.999)
raw_rule <- outer(exercise_p, levels_below_one,
                  function(p, level) p <= level / 5)
capped_rule <- outer(exercise_adjusted, levels_below_one,
                     function(adjusted, level) adjusted <= level)
stopifnot(identical(raw_rule, capped_rule))
saturated <- 5 * exercise_p > 1
stopifnot(identical(saturated, c(FALSE, FALSE, FALSE, TRUE, TRUE)))
stopifnot(all(exercise_adjusted[saturated] == 1))
stopifnot(!any(exercise_p[saturated] <= 1 / 5))
exercise_adjusted
```

</details>


## R-14-E04

**Exercise 17.4**

**Identify the predeclared family.** A protocol names three primary outcomes. After viewing them, the analyst inspects two age subgroups for the outcome with the smallest p-value. Which tests belong to the original confirmatory family? How should the subgroup results be described, and why can they not simply be added after the fact to claim the original guarantee?

<details>
<summary>Hint 1</summary>

Distinguish a family fixed by the protocol from analyses selected using outcomes.

</details>

<details>
<summary>Hint 2</summary>

Only the three planned primary outcomes have the original confirmatory status; outcome-selected subgroup tests need a separate guarantee or exploratory labeling.

</details>

<details>
<summary>Solution</summary>

The three primary-outcome tests are the original confirmatory family because the protocol fixed them before their outcomes were viewed. The two subgroup tests were selected after the outcome with the smallest p-value was known. They should be reported as exploratory, together with the path that selected the outcome and subgroups.

Adding the subgroup tests to a recalculated family of five does not retroactively make the data-dependent rule predeclared. That five-member list omits the selection step: the analyst could have inspected subgroups for whichever primary outcome looked best. A new independent study with prespecified subgroup claims, or a method designed for the full selection rule, is needed for an ordinary confirmatory guarantee.

</details>


## R-14-E05

**Exercise 17.5**

**Expose selected-subgroup bias.** Under eight true subgroup nulls, assume the eight p-values are independent Uniform(0,1). The analyst reports only the smallest with its ordinary 0.05 label. Calculate the actual probability that the reported p-value is at most 0.05. Compare it with the Bonferroni threshold.

<details>
<summary>Hint 1</summary>

It is easier to calculate the probability that all eight p-values exceed 0.05.

</details>

<details>
<summary>Hint 2</summary>

The ordinary selected error is $1-0.95^8$; the Bonferroni cutoff is $0.05/8$ for the fixed eight-test family.

</details>

<details>
<summary>Solution</summary>

For independent Uniform(0,1) p-values, the probability that one p-value exceeds 0.05 is 0.95. Independence makes the probability all eight exceed 0.05 equal to $0.95^8$. Therefore

$$
\Pr(\min_j P_j\le0.05)=1-0.95^8\approx0.33658.
$$

So the outcome-selected report crosses 0.05 about 33.7% of the time under this all-null mechanism. Bonferroni would compare each of the eight fixed tests with $0.05/8=0.00625$. The exact 33.7% calculation uses independence; the Bonferroni union-bound guarantee does not.

```r
selected_error <- 1 - (1 - 0.05)^8
bonferroni_cutoff <- 0.05 / 8
stopifnot(abs(selected_error - 0.3365795687109378) <= 1e-12)
stopifnot(abs(bonferroni_cutoff - 0.00625) <= 1e-12)
c(selected_error = selected_error, bonferroni_cutoff = bonferroni_cutoff)
```

</details>


## R-14-E06

**Exercise 17.6**

**Compare missingness scenarios.** In the service fixture, queue A's seven recorded waits sum to 104 minutes. Queue B's six recorded waits sum to 86 minutes and q14 is missing. Compute A minus B mean under q14 = 9 and q14 = 25. What does the sign change establish, and what does it leave unknown?

<details>
<summary>Hint 1</summary>

Each filled scenario gives queue B seven values; do not drop q14 from the denominator after filling it.

</details>

<details>
<summary>Hint 2</summary>

Compare $104/7-(86+9)/7$ with $104/7-(86+25)/7$, retaining the same denominator in both filled scenarios.

</details>

<details>
<summary>Solution</summary>

Queue A's mean is $104/7\approx14.857$ minutes. If q14 is 9, queue B's mean is $(86+9)/7=95/7\approx13.571$, so A minus B is $9/7\approx1.286$ minutes. If q14 is 25, B's mean is $(86+25)/7=111/7\approx15.857$, so A minus B is $-1$ minute.

The sign change establishes that the descriptive queue comparison is sensitive to the stipulated missing value. It does not establish that q14 is 9 or 25, supply a missingness mechanism, identify a population mean difference, or support a causal effect.

```r
mean_A <- 104 / 7
diff_low <- mean_A - (86 + 9) / 7
diff_high <- mean_A - (86 + 25) / 7
stopifnot(abs(diff_low - 9 / 7) <= 1e-12)
stopifnot(abs(diff_high - (-1)) <= 1e-12)
c(q14_low_A_minus_B = diff_low, q14_high_A_minus_B = diff_high)
```

</details>


## R-14-E07

**Exercise 17.7**

**Distinguish sensitivity from confirmation.** The recorded-data slope is 2.523 minutes per call; omitting q07 gives 1.700. Explain what this comparison says if q07's source is still unresolved. Then explain how the report should change if a source audit verifies that q07 used the wrong unit and supplies the correct value.

<details>
<summary>Hint 1</summary>

A result's dependence on a row and evidence that the row is wrong are separate questions.

</details>

<details>
<summary>Hint 2</summary>

Until the source resolves q07, report sensitivity rather than prefer the favorable slope; verified corrections require an explicit correction record.

</details>

<details>
<summary>Solution</summary>

While q07's source is unresolved, the two slopes show that the fitted association depends materially on that row: the estimate changes by about $2.523-1.700=0.823$ minutes per call. The omission is a sensitivity scenario, not a corrected analysis. Both fits and q07's unresolved status should remain visible.

If an audit verifies a unit error and supplies the correct value, create a new data version containing that correction, record the old value, new value, evidence, and time of correction, then refit the predeclared formula. Report the corrected fit as the primary data-quality repair and keep the earlier fits in the history. Verification of a unit correction improves data accuracy; it still does not create random sampling, causal identification, or prove linear-model assumptions.

```r
slope_recorded <- 2.52325581395349
slope_omitting_q07 <- 1.7
slope_change <- slope_recorded - slope_omitting_q07
stopifnot(abs(slope_change - 0.82325581395349) <= 1e-12)
slope_change
```

</details>


## R-14-E08

**Exercise 17.8**

**Write an analysis-history ledger.** An analyst predeclares a queue comparison, sees p = 0.11, then tries a log outcome, an under-30 subgroup, and deletion of the longest wait; only the deletion gives p = 0.03. Draft four ledger rows with order, analysis, outcome visibility, decision, and reporting status. Write a two-sentence bounded conclusion.

<details>
<summary>Hint 1</summary>

A complete ledger retains unsuccessful as well as favorable analyses and does not describe 0.03 as a predeclared confirmatory result.

</details>

<details>
<summary>Hint 2</summary>

Keep the unsuccessful p=0.11 analysis and all three subsequent choices; a favorable final test is not the sole analysis that occurred.

</details>

<details>
<summary>Solution</summary>

One adequate ledger is:

| Order | Analysis | Were outcomes visible? | Decision | Reporting status |
|---:|---|:---:|---|---|
| 1 | Predeclared queue comparison on recorded scale | no | retain as primary | report estimate, p = 0.11, and assumptions |
| 2 | Log-transformed outcome | yes | exploratory | report result, not only if favorable |
| 3 | Under-30 subgroup | yes | exploratory subgroup search | report selection path and subgroup result |
| 4 | Delete longest wait | yes | reject as primary without source evidence | report p = 0.03 as sensitivity output |

A bounded conclusion is: “The predeclared comparison did not produce strong evidence against its null under the stated method ($p=0.11$). A deletion chosen after viewing outcomes produced $p=0.03$, but that selected sensitivity result lacks the advertised ordinary 0.05 type I error guarantee and does not justify deleting the row.”

The tempting conclusion “after removing an outlier, queues differ significantly” conceals both the outcome-driven deletion and the absence of source evidence that the row is wrong. Reproducibly obtaining 0.03 would verify the arithmetic only.

```r
analysis_ledger <- data.frame(
  order = 1:4,
  analysis = c("predeclared recorded scale", "log outcome",
               "under-30 subgroup", "delete longest wait"),
  outcome_visible = c(FALSE, TRUE, TRUE, TRUE),
  status = c("primary", "exploratory", "exploratory", "sensitivity"),
  reported = rep(TRUE, 4L),
  stringsAsFactors = FALSE
)
stopifnot(identical(analysis_ledger$order, 1:4))
stopifnot(nrow(analysis_ledger) == 4L)
stopifnot(all(analysis_ledger$reported))
stopifnot(identical(analysis_ledger$status,
                    c("primary", "exploratory", "exploratory", "sensitivity")))
analysis_ledger
```

Return to [the chapter discussion surrounding Exercises R-14-E01–R-14-E10](diagnostics-selection.md).

The solution text, computations, and fixtures are original Math Atlas material and are licensed CC BY-SA 4.0.

</details>


Complete solutions appear in [the solutions section for Exercises R-14-E01–R-14-E10](solutions-diagnostics-selection.md).

## R-14-E09

**Exercise 17.9**

A fixed family contains twenty tests, seven of whose null hypotheses are true. Each true null has a valid p-value. Bound the probability of at least one false rejection when every test uses threshold $0.05/20$.

<details>
<summary>Hint 1</summary>

Only rejections of true nulls count as false rejections.

</details>

<details>
<summary>Hint 2</summary>

Sum seven bounds of $0.05/20$; no independence assumption is needed.

</details>

<details>
<summary>Solution</summary>

For each of the seven true nulls, validity bounds rejection probability by $0.05/20=0.0025$. The union bound gives at most $7(0.0025)=0.0175$, which is below the familywise target $0.05$. The twenty-test rule works without knowing which seven are true; using that unknown truth to redefine the testing family after seeing data would be a different procedure.

</details>

## R-14-E10

**Exercise 17.10**

Contrast two exclusions: a unit check planned before outcomes removes records coded in seconds from a minutes-only analysis; a later rule deletes the observations whose removal yields the smallest p-value. What records and claims should accompany each?

<details>
<summary>Hint 1</summary>

A reproducible deletion rule and a valid confirmatory procedure are different properties.

</details>

<details>
<summary>Hint 2</summary>

Ask whether the rule was fixed independently of the outcome-based result and whether the target changed.

</details>

<details>
<summary>Solution</summary>

The planned unit check needs a source-linked exclusion or conversion ledger, retained raw values, a justified target and a report of the rule. It can be defensible when it implements the declared schema, but it still does not prove the sampling model. The p-value-minimizing exclusion is outcome-driven selection and must be recorded with all attempted analyses; its ordinary final p-value lacks the original fixed-analysis calibration. Source-verified corrections can be reported transparently, while exploratory sensitivity cannot be relabeled as an independent confirmation.

</details>

## References and rights

The `p.adjust`, `lm`, `plot.lm`, `hatvalues`, and `cooks.distance` semantics were checked against the installed R 4.6.0 help pages from the R `stats` package. The corresponding official R Core release pages document [p-value adjustment](https://stat.ethz.ch/R-manual/R-release/library/stats/html/p.adjust.html), [linear-model fitting](https://stat.ethz.ch/R-manual/R-release/library/stats/html/lm.html), and [linear-model diagnostic plots](https://stat.ethz.ch/R-manual/R-release/library/stats/html/plot.lm.html). The online pages were accessed 2026-09-06; the bibliography records the original consultation; this edition links to official help without redistributing its text. The Bonferroni result is supported by the complete union-bound proof in this chapter; the selection claim is supported by the displayed counterexample.

The fixture, exposition, proof, examples, and exercises are original Math Atlas material. They do not adapt a third-party dataset or exercise. Text and code are licensed CC BY-SA 4.0 as declared in the front matter.

## Summary

Diagnostics identify questions for source checking and sensitivity analysis rather than automatic deletion. Bonferroni controls a fixed family using valid marginal p-values without an independence requirement. Preserve the entire analysis history when outcomes guided subgroups, transformations, exclusions or model choices; a selected final result does not inherit the original fixed-analysis calibration.
