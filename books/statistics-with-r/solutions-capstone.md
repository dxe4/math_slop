
# Solutions: From Raw Source to a Bounded Conclusion

These solutions defend the reasoning as well as the calculations. Several answers are possible when their targets and conditions differ; the reference answers show one coherent path. This document contains its own literal fixture and runs independently in a fresh base-R process.

[Return to the capstone chapter](capstone.md) after checking a solution or project score.

The original synthetic fixture has local ID `R16-SERVICE-V1`, creator Math Atlas, version 1. One row is one completed morning walk-in appointment at the fictional North clinic on its stated service day. Waiting time is arrival-to-first-clinician time in minutes. `appointment_id` is the unique key, and `MISSING` is the only raw missing-outcome code. The numbers concern no real people or clinic.

```r
# Original literal synthetic fixture R16-SERVICE-V1, version 1.
raw_service_text <- paste(c(
  "appointment_id,service_day,site,workflow,wait_minutes,visit_type,record_status",
  "a001,2026-02-03,North,baseline,38,walk_in,observed",
  "a002,2026-02-03,North,baseline,25,walk_in,observed",
  "a003,2026-02-04,North,baseline,42,walk_in,observed",
  "a004,2026-02-04,North,baseline,31,walk_in,observed",
  "a005,2026-02-05,North,baseline,29,walk_in,observed",
  "a006,2026-02-05,North,baseline,35,walk_in,observed",
  "a007,2026-02-06,North,baseline,47,walk_in,observed",
  "a008,2026-02-06,North,baseline,22,walk_in,observed",
  "a009,2026-02-07,North,baseline,33,walk_in,observed",
  "a010,2026-02-07,North,baseline,27,walk_in,observed",
  "a011,2026-02-08,North,baseline,40,walk_in,observed",
  "a012,2026-02-08,North,baseline,MISSING,walk_in,timer_fault",
  "a013,2026-03-03,North,redesign,32,walk_in,observed",
  "a014,2026-03-03,North,redesign,24,walk_in,observed",
  "a015,2026-03-04,North,redesign,28,walk_in,observed",
  "a016,2026-03-04,North,redesign,20,walk_in,observed",
  "a017,2026-03-05,North,redesign,35,walk_in,observed",
  "a018,2026-03-05,North,redesign,26,walk_in,observed",
  "a019,2026-03-06,North,redesign,31,walk_in,observed",
  "a020,2026-03-06,North,redesign,23,walk_in,observed",
  "a021,2026-03-07,North,redesign,29,walk_in,observed",
  "a022,2026-03-07,North,redesign,37,walk_in,observed",
  "a023,2026-03-08,North,redesign,21,walk_in,observed",
  "a024,2026-03-08,North,redesign,27,walk_in,observed"
), collapse = "\n")

service <- read.csv(
  text = raw_service_text,
  na.strings = "MISSING",
  stringsAsFactors = FALSE,
  check.names = FALSE
)

validate_service <- function(d) {
  expected_names <- c(
    "appointment_id", "service_day", "site", "workflow",
    "wait_minutes", "visit_type", "record_status"
  )
  character_names <- c(
    "appointment_id", "service_day", "site", "workflow",
    "visit_type", "record_status"
  )
  expected_ids <- sprintf("a%03d", seq_len(24L))
  if (!identical(names(d), expected_names)) stop("schema names or order changed")
  if (!identical(nrow(d), 24L)) stop("expected exactly 24 raw rows")
  if (!all(vapply(d[character_names], is.character, logical(1L)))) {
    stop("declared text columns must be character")
  }
  if (!is.numeric(d$wait_minutes)) stop("wait_minutes must be numeric")
  if (anyDuplicated(d$appointment_id) != 0L) stop("appointment_id is not unique")
  if (!setequal(d$appointment_id, expected_ids)) stop("appointment_id set changed")
  iso_shape <- grepl("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", d$service_day)
  parsed_day <- as.Date(d$service_day, format = "%Y-%m-%d")
  iso_round_trip <- !is.na(parsed_day) &
    format(parsed_day, "%Y-%m-%d") == d$service_day
  if (!all(iso_shape & iso_round_trip)) {
    stop("service_day is not valid ISO YYYY-MM-DD")
  }
  if (!all(d$site == "North")) stop("unexpected site")
  if (!all(d$visit_type == "walk_in")) stop("unexpected visit type")
  if (!all(d$workflow %in% c("baseline", "redesign"))) stop("invalid workflow")
  service_month <- format(parsed_day, "%Y-%m")
  expected_workflow <- ifelse(
    service_month == "2026-02",
    "baseline",
    ifelse(service_month == "2026-03", "redesign", NA_character_)
  )
  if (anyNA(expected_workflow) || !identical(d$workflow, expected_workflow)) {
    stop("workflow does not match declared calendar period")
  }
  if (!all(d$record_status %in% c("observed", "timer_fault"))) {
    stop("invalid record status")
  }
  numeric_ok <- is.na(d$wait_minutes) |
    (is.finite(d$wait_minutes) & d$wait_minutes >= 0)
  if (!all(numeric_ok)) stop("wait_minutes must be nonnegative, finite, or missing")
  missing_ok <- is.na(d$wait_minutes) == (d$record_status == "timer_fault")
  if (!all(missing_ok)) stop("missing outcome and record_status disagree")
  invisible(TRUE)
}

stopifnot(validate_service(service))
stopifnot(identical(nrow(service), 24L))
stopifnot(identical(sum(is.na(service$wait_minutes)), 1L))

capture_validation_error <- function(d) {
  tryCatch(
    {
      validate_service(d)
      NA_character_
    },
    error = function(e) conditionMessage(e)
  )
}

bad_text_type <- service
bad_text_type$site <- factor(bad_text_type$site)
bad_id <- service
bad_id$appointment_id[bad_id$appointment_id == "a024"] <- "a999"
bad_day <- service
bad_day$service_day[1L] <- "not-an-ISO-date"
bad_period <- service
bad_period$workflow[1L] <- "redesign"

stopifnot(identical(
  capture_validation_error(bad_text_type),
  "declared text columns must be character"
))
stopifnot(identical(
  capture_validation_error(bad_id),
  "appointment_id set changed"
))
stopifnot(identical(
  capture_validation_error(bad_day),
  "service_day is not valid ISO YYYY-MM-DD"
))
stopifnot(identical(
  capture_validation_error(bad_period),
  "workflow does not match declared calendar period"
))
```

These executable adverse cases verify that the reusable validator rejects a noncharacter text field, an out-of-contract key, a malformed date, and a workflow label inconsistent with its calendar period.

## R-16-E01

The finite descriptive question is: “Among the 23 complete waiting-time records in `R16-SERVICE-V1`, what is the redesign mean minus the baseline mean?” One unit is one completed morning walk-in appointment. The estimand is the difference between the two arithmetic means of the complete records, with negative values meaning shorter redesign waits. No probability model is needed to describe those records, but the claim must remain confined to them and disclose the missing baseline record.

The process question is: “If complete appointments in each period behave as independent draws from stable period-specific processes, what is the difference \(\Delta=\mu_R-\mu_B\) between process mean waits?” The source was upstream-selected to one site, visit type, and morning window; the exact upstream exclusion counts are unknown. Workflow was determined by calendar period, not randomly assigned. A Welch interval can be used conditionally if within-period draws are independent with finite variance and its small-sample approximation is adequate. It cannot identify a causal redesign effect because any other calendar change can explain the contrast.

The finite answer needs correct measurement and complete disclosure. The process answer additionally needs the independent stable-process model. Neither supports all-clinic generalization without a sampling or transport argument.

## R-16-E02

The sequence 24, then 23, can conceal offsetting errors. A duplicate join might add one row while an accidental filter removes one different row. Row count alone also cannot show whether a key was substituted or whether `timer_fault` agrees with the missing outcome.

The following checks protect three distinct invariants. The dictionary check prevents one-to-many matching; set equality preserves every appointment key; and the final equality requires missing outcome and status to agree row by row.

```r
dictionary <- data.frame(
  workflow = c("baseline", "redesign"),
  display_label = c("Before", "After"),
  stringsAsFactors = FALSE
)
stopifnot(anyDuplicated(dictionary$workflow) == 0L)

joined <- merge(service, dictionary, by = "workflow", all.x = TRUE, sort = FALSE)
stopifnot(setequal(joined$appointment_id, service$appointment_id))
stopifnot(identical(length(joined$appointment_id), length(service$appointment_id)))
stopifnot(all(
  is.na(service$wait_minutes) == (service$record_status == "timer_fault")
))
```

The length assertion matters in addition to `setequal()`: sets discard duplicate multiplicity, so a duplicated appointment could otherwise go unnoticed.

## R-16-E03

A compact table should report complete group size, mean, median, sample SD, minimum, and maximum. The mean answers the chosen estimand, while median, SD, and range expose skew, spread, and overlap that two means hide. A side-by-side dot or boxplot is suitable if the axis says “Waiting time (minutes),” individual values remain visible, and shape or position carries the distinction without relying on color.

```r
complete <- service[!is.na(service$wait_minutes), ]
wait_by_workflow <- split(complete$wait_minutes, complete$workflow)
summary_one <- function(x) {
  c(n = length(x), mean = mean(x), median = median(x),
    sd = sd(x), min = min(x), max = max(x))
}
summary_table <- t(vapply(wait_by_workflow, summary_one, numeric(6L)))
expected_summary <- rbind(
  baseline = c(11, 369 / 11, 33, 7.69887831263277, 22, 47),
  redesign = c(12, 333 / 12, 27.5, 5.34492112366327, 20, 37)
)
colnames(expected_summary) <- c("n", "mean", "median", "sd", "min", "max")
stopifnot(all(abs(summary_table - expected_summary) <=
  1e-10 + 1e-8 * abs(expected_summary)))
summary_table
```

An adequate prose alternative is: “The 11 complete baseline waits range from 22 to 47 minutes, with mean 33.55 and median 33.00. The 12 redesign waits range from 20 to 37 minutes, with mean 27.75 and median 27.50. The ranges overlap from 22 through 37 minutes; baseline values have the larger SD, 7.70 versus 5.34 minutes.” This preserves center, spread, range, overlap, group size, and units.

## R-16-E04

No. The original interval treats 23 appointment rows as independent process draws. If the lunch closure links the two waits within each day, that repeated-mechanism interpretation is unsupported; there may be only 12 day-period clusters, and calendar period still coincides with workflow.

One defensible immediate response is descriptive abstention: report the 23 recorded waits, complete-case means, the missingness sensitivity, and day labels, but withdraw the appointment-level Welch interval. A second analysis could reduce each service day to a prespecified day-level mean, then compare day summaries while openly acknowledging the tiny number of days and the before/after confounding. That analysis changes the unit and estimand, so it must be labeled rather than slipped in as a repair.

A stronger future study would randomize or stagger workflow rollout across many comparable days or sites, record every eligible appointment, and analyze at the assignment unit. Blocking by day or site could preserve relevant pairing. The data should also record the lunch closure so the dependence is designed into the analysis.

## R-16-E05

The statement merges three different uncertainties. Variation across bootstrap resamples approximates sampling variation for a chosen statistic under an empirical-resampling model. Finite \(B\) adds Monte Carlo error to numerical features estimated from those resamples. Missingness bias is a systematic discrepancy caused by an unobserved-data mechanism; ordinary complete-case resampling does not quantify it because every resample omits the same unavailable outcome.

With \(\widehat q=96/400=0.24\), the plug-in Monte Carlo standard error for an estimated proportion based on 400 independent indicators is

\[
\sqrt{\widehat q(1-\widehat q)/400}
=\sqrt{0.24(0.76)/400}
\approx 0.02135.
\]

It measures finite-simulation noise conditional on the observed analysis setup. It is not the bootstrap standard error of the mean difference.

```r
B <- 400L
exceedances <- 96L
q_hat <- exceedances / B
mc_se <- sqrt(q_hat * (1 - q_hat) / B)
stopifnot(abs(q_hat - 0.24) <= 1e-10 + 1e-8 * abs(0.24))
stopifnot(abs(mc_se - 0.0213541565040626) <=
  1e-10 + 1e-8 * abs(0.0213541565040626))
c(estimated_proportion = q_hat, estimated_monte_carlo_se = mc_se)
```

At an endpoint estimate of 0 or 1 this plug-in expression becomes zero, even though finite simulation resolution remains. That degeneracy should be reported rather than interpreted as exact computation.

## R-16-E06

`timer_fault` establishes the source's recorded operational explanation and agrees with the `NA`. It does not prove that failure was independent of waiting time. A long wait might drain a timer battery, prompt staff to reset equipment, or make the fault more likely to be noticed. Those stories are hypothetical, but they show why a label is not a randomization result.

Under assumed missing values 15, 30, 45, and 60 minutes, the redesign-minus-baseline differences are \(-4.25,-5.50,-6.75,-8.00\) minutes. The claim “the reduction exceeded 5 minutes” is false in the 15-minute scenario and true in the other three as a descriptive magnitude. It is therefore not stable across the declared scenarios. Even stability would not create a causal interpretation.

```r
baseline_wait <- wait_by_workflow$baseline
redesign_wait <- wait_by_workflow$redesign
missing_scenarios <- c(15, 30, 45, 60)
sensitivity_difference <- vapply(
  missing_scenarios,
  function(z) mean(redesign_wait) - mean(c(baseline_wait, z)),
  numeric(1L)
)
stopifnot(all(abs(sensitivity_difference - c(-4.25, -5.5, -6.75, -8)) <=
  1e-10 + 1e-8 * abs(c(-4.25, -5.5, -6.75, -8))))
sensitivity_difference
```

## R-16-E07

A minimum rerunnable dossier contains the literal raw input and provenance statement; schema, units, key, row meaning, allowed missing codes, and selection ledger; the question, estimand, sign convention, and analysis plan; base-R code in execution order; software and session information; assertions for keys, counts, formulas, and displayed values; the numerical result table; and a conclusion tied to design and model conditions. Another reader also needs the expected intentional failure and its message so it is not confused with an unexpected error.

The prose alternative must preserve at least the baseline group's greater spread and upper range, and the substantial overlap between group ranges. It should also give group sizes and units. Saying only “redesign was lower” loses the visual evidence about within-group variation.

## R-16-E08

“Reproducible” says another compatible R session can repeat the calculation; it does not show the source represents all patients. “Proves” exceeds an approximate model-based interval. “Saves” is causal language, but workflow was confounded with calendar period. “5.8 minutes” is the complete-case point estimate, not a constant individual effect. “Clinic patients” extends beyond selected North-site morning walk-ins.

A bounded rewrite is:

> Among 23 complete records from 24 selected synthetic North-site morning walk-in appointments, the redesign-period mean was 5.80 minutes lower than the baseline-period mean. Under an independent stable finite-variance process model and only if the small-sample Welch reference approximation is adequate, the approximate 95% Welch interval for the two period means was −11.66 to 0.07 minutes. Missing-outcome scenarios changed the descriptive difference from −4.25 to −8.00 minutes. Because workflow coincided with calendar period, upstream exclusions are unknown, and neither the process conditions nor approximation quality are established by the file, this result is neither a causal estimate nor evidence for all clinic patients.

A stronger study could recruit a declared frame of eligible appointments across several sites and dates, randomly assign comparable sites or days to rollout order, preserve the assignment unit in analysis, log every eligibility decision, and use redundant automated timestamps. That design would support a causal comparison under its assignment assumptions and give a clearer path to population generalization through its declared sampling frame.

## R-16-P01

### Complete reference investigation

This reference dossier uses the literal fixture at the top of this file. It is one defensible answer. Choosing a different target or refusing the Welch interval can also earn full credit when the reasoning is complete.

#### Schema, design, and claim target

The seven-field schema is:

| Field | Contract |
|---|---|
| `appointment_id` | character; exact unique key set `a001`–`a024` |
| `service_day` | character; valid ISO-format fictional date text |
| `site` | `North`; upstream-selected site |
| `workflow` | character; `baseline` in February 2026 and `redesign` in March 2026 |
| `wait_minutes` | nonnegative finite minutes or raw `MISSING` |
| `visit_type` | `walk_in`; upstream-selected type |
| `record_status` | `observed` exactly when wait is present, otherwise `timer_fault` |

The analysis unit is one appointment. The descriptive estimand is the redesign-minus-baseline mean among complete source records. The conditional process estimand is \(\Delta=\mu_R-\mu_B\) for independent draws from two stable period-specific complete-outcome processes. Negative values mean shorter redesign waits. Five minutes is the prespecified practical magnitude.

The design is observational before/after comparison. No appointment, day, or site was randomly assigned to workflow. The source says that an upstream process selected one site, morning hours, completed walk-ins, and named days. Counts of excluded other sites, booked visits, afternoons, no-shows, and unrecorded eligible days are unavailable. Thus the dossier supports a selected-file description and a conditional period-process calculation, but not causal identification or all-patient generalization.

#### Validation, description, and independent uncertainty check

The next block recreates every report number. A hand check supplies the group sums 369 and 333 minutes. The Welch formula then independently checks `t.test()`.

```r
complete <- service[!is.na(service$wait_minutes), ]
baseline_wait <- complete$wait_minutes[complete$workflow == "baseline"]
redesign_wait <- complete$wait_minutes[complete$workflow == "redesign"]

stopifnot(identical(length(baseline_wait), 11L))
stopifnot(identical(length(redesign_wait), 12L))
stopifnot(abs(sum(baseline_wait) - 369) <= 1e-10 + 1e-8 * 369)
stopifnot(abs(sum(redesign_wait) - 333) <= 1e-10 + 1e-8 * 333)

estimate <- mean(redesign_wait) - mean(baseline_wait)
welch_se <- sqrt(
  var(redesign_wait) / length(redesign_wait) +
    var(baseline_wait) / length(baseline_wait)
)
welch_df <- welch_se^4 / (
  (var(redesign_wait) / length(redesign_wait))^2 /
    (length(redesign_wait) - 1) +
  (var(baseline_wait) / length(baseline_wait))^2 /
    (length(baseline_wait) - 1)
)
manual_interval <- estimate + c(-1, 1) * qt(0.975, welch_df) * welch_se
welch_fit <- t.test(
  redesign_wait,
  baseline_wait,
  alternative = "two.sided",
  conf.level = 0.95,
  var.equal = FALSE
)

stopifnot(abs(estimate + 5.79545454545455) <=
  1e-10 + 1e-8 * abs(5.79545454545455))
stopifnot(all(abs(unname(welch_fit$conf.int) - manual_interval) <=
  1e-10 + 1e-8 * abs(manual_interval)))
stopifnot(all(abs(manual_interval - c(-11.6595877, 0.0686786)) <=
  1e-7 + 1e-7 * abs(manual_interval)))
```

The numeric plot alternative is the following complete summary. It is asserted from the raw rows rather than manually transcribed.

```r
reference_summary <- rbind(
  baseline = c(
    n = length(baseline_wait), mean = mean(baseline_wait),
    median = median(baseline_wait), sd = sd(baseline_wait),
    min = min(baseline_wait), max = max(baseline_wait)
  ),
  redesign = c(
    n = length(redesign_wait), mean = mean(redesign_wait),
    median = median(redesign_wait), sd = sd(redesign_wait),
    min = min(redesign_wait), max = max(redesign_wait)
  )
)
stopifnot(identical(as.integer(reference_summary[, "n"]), c(11L, 12L)))
stopifnot(all(abs(reference_summary - expected_summary) <=
  1e-10 + 1e-8 * abs(expected_summary)))
reference_summary

plot_path <- basename(tempfile(
  pattern = "r16-p01-",
  tmpdir = getwd(),
  fileext = ".pdf"
))
device_before_plot <- grDevices::dev.cur()
grDevices::pdf(plot_path, width = 7, height = 5)
boxplot(
  list(baseline = baseline_wait, redesign = redesign_wait),
  ylab = "Waiting time (minutes)",
  xlab = "Workflow period",
  col = c("grey85", "white"),
  border = "black"
)
stripchart(
  list(baseline = baseline_wait, redesign = redesign_wait),
  vertical = TRUE,
  method = "stack",
  pch = c(1, 16),
  add = TRUE
)
device_after_close <- grDevices::dev.off()
plot_info <- file.info(plot_path)
stopifnot(file.exists(plot_path))
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
  dirname(normalizePath(plot_path, mustWork = TRUE)),
  normalizePath(getwd(), mustWork = TRUE)
))
```

**Prose alternative.** Baseline has 11 complete waits, mean 33.55, median 33.00, SD 7.70, and range 22–47 minutes. Redesign has 12, mean 27.75, median 27.50, SD 5.34, and range 20–37. The ranges overlap over 22–37 minutes; the baseline upper endpoint is 10 minutes higher.

Welch was selected because the target is a two-group mean difference and equal variances were not assumed. Its interval is only conditionally justified: the source does not demonstrate independent stable finite-variance draws, the small groups do not establish that the Welch reference approximation is adequate, and workflow is confounded with time. The calculation is useful as an explicit process-model sensitivity, not as a design-based causal result.

#### Diagnostics and missingness sensitivity

The leave-one-out range checks whether one complete record determines the point estimate. The missing-value scenarios probe the practical claim. Neither test establishes the iid model.

```r
leave_one_out <- c(
  sapply(seq_along(baseline_wait), function(i) {
    mean(redesign_wait) - mean(baseline_wait[-i])
  }),
  sapply(seq_along(redesign_wait), function(i) {
    mean(redesign_wait[-i]) - mean(baseline_wait)
  })
)
stopifnot(all(abs(range(leave_one_out) - c(-6.95, -4.45)) <=
  1e-10 + 1e-8 * abs(c(-6.95, -4.45))))

missing_scenarios <- c(15, 30, 45, 60)
scenario_estimates <- vapply(
  missing_scenarios,
  function(z) mean(redesign_wait) - mean(c(baseline_wait, z)),
  numeric(1L)
)
stopifnot(all(abs(scenario_estimates - c(-4.25, -5.5, -6.75, -8)) <=
  1e-10 + 1e-8 * abs(c(-4.25, -5.5, -6.75, -8))))
data.frame(
  assumed_missing_baseline_minutes = missing_scenarios,
  redesign_minus_baseline_minutes = scenario_estimates
)
```

The estimate remains negative under every single-record deletion but crosses the 5-minute practical threshold across missing-value scenarios. The project therefore reports magnitude uncertainty rather than announcing that the threshold was met.

#### Deliberately broken alternative and repair

The broken dictionary has a duplicate `redesign` key. An unrestricted merge expands 24 raw rows to 36. The safe join catches that condition before matching and then verifies that a valid dictionary preserves row count and appointment order.

```r
bad_dictionary <- data.frame(
  workflow = c("baseline", "redesign", "redesign"),
  display_label = c("Before", "After", "New process"),
  stringsAsFactors = FALSE
)
broken_join <- merge(service, bad_dictionary, by = "workflow", all.x = TRUE)
stopifnot(identical(nrow(broken_join), 36L))

safe_join <- function(d, dictionary) {
  if (anyDuplicated(dictionary$workflow) != 0L) {
    stop("workflow dictionary key is not unique")
  }
  joined <- merge(d, dictionary, by = "workflow", all.x = TRUE, sort = FALSE)
  if (nrow(joined) != nrow(d)) stop("join changed the row count")
  if (anyNA(joined$display_label)) stop("join left unmatched workflow values")
  joined <- joined[match(d$appointment_id, joined$appointment_id), ]
  if (!identical(joined$appointment_id, d$appointment_id)) {
    stop("join did not preserve appointment order")
  }
  joined
}

expected_error <- tryCatch(
  {
    safe_join(service, bad_dictionary)
    NA_character_
  },
  error = function(e) conditionMessage(e)
)
stopifnot(identical(expected_error, "workflow dictionary key is not unique"))

valid_dictionary <- data.frame(
  workflow = c("baseline", "redesign"),
  display_label = c("Before", "After"),
  stringsAsFactors = FALSE
)
repaired <- safe_join(service, valid_dictionary)
stopifnot(identical(nrow(repaired), 24L))
stopifnot(identical(repaired$appointment_id, service$appointment_id))
```

The broken and repaired analyses need separate ledgers. The invalid join has 36 rows: 12 baseline matches and two matches for each of 12 redesign rows. Its one missing baseline wait occurs once, so `mean(broken_join$wait_minutes, na.rm = TRUE)` uses 35 observed joined rows and double-weights every observed redesign wait. The 24→23 ledger belongs to the original source after the duplicate-key join is rejected: 24 appointment rows, one missing outcome, and 23 complete outcomes. The repair reports that original ledger, gives missingness scenarios, and withdraws “saved” as unsupported causal language. Regression is omitted because no available predictor separates redesign from period; fitting it would change presentation, not identification.

#### Claim ledger

| Claim | Evidence | Conditions and status |
|---|---|---|
| Literal input parses to 24 unique records | schema function and exact assertions | computationally verified for this source |
| There are 23 complete outcomes | one explicit `timer_fault`; row ledger | descriptive fact about fixture |
| Complete redesign mean is 5.80 minutes lower | sums 333 and 369; asserted formula | descriptive fact about complete records |
| Welch interval is −11.66 to 0.07 minutes | `t.test` plus independent formula | approximate, conditional on independent stable process draws and adequate reference approximation |
| The reduction exceeds 5 minutes | missing scenarios range from −4.25 to −8.00 | unstable; claim withheld |
| Redesign caused shorter waits | no randomized or otherwise identifying design | unsupported; withdrawn |
| Result applies to all clinic patients | upstream selection counts and frame unavailable | unsupported; withdrawn |
| Another compatible R session can reproduce calculations | literal input, ordered base-R code, assertions, execution record | computational reproducibility only |

This ledger implements R-CLAIM-capstone: the process interval inherits the working iid conditions; the practical statement inherits the missingness scenarios; causal and population claims fail for lack of design evidence. The ledger reveals those limits without resolving them.

#### Execution record

The following record is generated by the running session rather than invented. It records the fixture identity, reconciliation, platform description, locale, linked numerical libraries when R reports them, and current RNG configuration. No stochastic computation is used in this dossier.

```r
execution_record <- list(
  fixture_id = "R16-SERVICE-V1",
  raw_rows = nrow(service),
  complete_rows = sum(!is.na(service$wait_minutes)),
  r_version = R.version.string,
  platform = R.version$platform,
  locale = Sys.getlocale(),
  external_software = extSoftVersion(),
  rng_kind = RNGkind(),
  stochastic_blocks = 0L,
  validation_passed = validate_service(service)
)
stopifnot(identical(execution_record$raw_rows, 24L))
stopifnot(identical(execution_record$complete_rows, 23L))
stopifnot(identical(execution_record$stochastic_blocks, 0L))
execution_record
sessionInfo()
```

#### Bounded conclusion and follow-up

The reference conclusion is:

> Of 24 original synthetic North-clinic morning walk-in records, 23 had observed waits. Complete redesign records averaged 27.75 minutes and complete baseline records 33.55 minutes, a difference of −5.80 minutes. Under an independent stable finite-variance process model and only if the small-sample Welch reference approximation is adequate, an approximate 95% Welch interval for the period-process mean difference was −11.66 to 0.07 minutes. Leave-one-out estimates ranged from −6.95 to −4.45 minutes; missing-baseline scenarios from 15 to 60 minutes changed the descriptive contrast from −4.25 to −8.00 minutes. These results do not identify a causal redesign effect or generalize to all clinic patients because workflow coincides with time, upstream selection counts are unavailable, one outcome is missing, and neither the process conditions nor approximation quality are established by the file.

The follow-up is a staggered randomized rollout across many days or sites, with a declared eligible-appointment frame, assignment recorded at the day or site level, redundant automatic timing, reasons for every exclusion, and analysis at the assignment unit. Sampling across relevant sites and hours would make the intended population link explicit. The study protocol should freeze the 5-minute practical threshold and primary contrast before outcomes are inspected.

#### Scored 30-point rubric

This reference earns **30/30**. The score reflects the argument and evidence, not whether an interval excludes zero.

- **Question, design, and estimand: 5/5.** The unit, two targets, sign convention, practical threshold, observational before/after design, and absence of random assignment are explicit. The process target is separated from the finite-file target.
- **Provenance and missingness/selection ledger: 5/5.** The complete original literal source, creator, version, row meaning, schema, units, exact key set, valid-date contract, workflow-period relation, and missing code are supplied. Counts reconcile 24 raw to 23 complete, unavailable upstream exclusion counts are named rather than guessed, and four targeted malformed fixtures are rejected.
- **Computational correctness and fresh-session reproducibility: 6/6.** The source is self-contained base R; declared character types, exact keys, dates, workflow periods, counts, group sums, displayed estimates, and interval are asserted. The Welch calculation has an independent formula check. The duplicate-key failure is observed narrowly and the repaired join preserves count, IDs, and order. The plot uses a named temporary artifact, closes its device within the block, and asserts artifact and device state. The execution record comes from the running session.
- **Justified uncertainty and diagnostics: 6/6.** Welch is tied to independent stable finite-variance process draws and an adequate small-sample reference approximation, that complete condition is carried into the bounded conclusion, and the interval remains labeled approximate. Equal variance is not assumed. Leave-one-out and missingness checks target different vulnerabilities, and their limits are explained. Causal inference is refused because the design cannot support it.
- **Accessible communication: 4/4.** Units and signs accompany results. A numeric table and detailed prose alternative preserve the plot's centers, spread, range, overlap, and group sizes. The conclusion uses ordinary language and distinguishes descriptive, model-based, causal, and generalization claims.
- **Limitations and follow-up design: 4/4.** The report identifies period confounding, upstream selection, one missing outcome, unverified process independence, and small-sample approximation. The proposed randomized staggered rollout, declared frame, redundant measurement, assignment-unit analysis, and frozen practical threshold address those weaknesses directly.

The total exceeds the 22-point pass mark and each gated category—design, computation, and uncertainty—exceeds 3 points. There is no fabricated provenance or unsupported causal claim. A submission with a different conclusion should be scored by the same evidence standard rather than by agreement with this numerical result.

The solutions, reference investigation, code, rubric, and fixture are original Math Atlas material under CC BY-SA 4.0.
## R-16-E09

For example, use the credited CC0 penguin source, one recorded penguin per source row, the explicit complete-case mask for the chosen response/predictors, mass in grams and measured morphology/species predictors. Record the selected source version, exclusions and the target of predicting mass for comparable penguins in the supported predictor range. A large retained table does not randomize the predictors or sample every penguin population. Causal and broader-population claims require additional identification and sampling assumptions.

## R-16-E10

The evaluation labels influenced the rule, so its displayed accuracy is selected development performance rather than an independent assessment of the frozen procedure. Keep the full search history and all observations, use training/development data for fitting and threshold choice, then evaluate once on a genuinely held-out sample following the declared mechanism. If no untouched data remain, report this limitation and collect a new evaluation sample or use a carefully designed nested validation scheme. Rearranging the same labels after selection does not erase the leakage.

