
# Capstone: From Raw Source to a Bounded Conclusion

A polished analysis can fail before its first calculation. The rows may omit the people named in the question. A join may duplicate records. An interval may describe variation under a model that the collection process does not support. A smooth fitted line may be reported as the effect of an action that nobody assigned. Reproducible code makes these failures reproducible; it does not make them valid.

This capstone asks you to defend an entire chain:

> **raw source → schema → question and estimand → design → description → uncertainty → diagnostics → bounded conclusion**

The chain is not a ritual. Each link answers a different challenge. A schema protects the meaning of a row. A design account connects visible rows to a target. Descriptive summaries reveal what was observed. An uncertainty method states what repeated mechanism or model creates variation. Diagnostics probe specific weaknesses. The conclusion inherits every condition that survived the audit.

Earlier chapters supplied the pieces. A *unit* is the entity or event observed; an *estimand* is the precisely declared target quantity; and a *mechanism* records selection, assignment, measurement, and loss. A *schema* states column meanings, types, units, allowed values, keys, and missing codes. A standard error is the spread of a statistic under a specified repeated mechanism, while Monte Carlo error is numerical noise from a finite simulation. A diagnostic checks a stated vulnerability. A claim ledger connects claims to evidence and conditions. We will restate every interface needed here so that this chapter can be read and run on its own.

## What a conclusion is allowed to inherit

**Definition R-DEF-bounded-conclusion (bounded conclusion).** A **bounded conclusion** states the target, observed result, uncertainty interpretation, and practical meaning together with the design, selection, missingness, model, and computational conditions needed to support them. It names unresolved conditions and does not extend beyond them.

A boundary is part of the result. “The recorded groups differed” and “changing the workflow caused a difference” are different claims. “This interval has 95% confidence” is incomplete unless the procedure and repeated mechanism are named. “The script ran” supports a computational claim, not a sampling or causal claim.

**Claim R-CLAIM-capstone (inheritance of conditions; argued here).** Conclusions inherit every design, selection, missingness, method, and computational condition in the claim ledger. A complete ledger exposes uncertainty; it does not remove it.

To see why, suppose a conclusion depends on a mean computed after complete-case exclusion. Its numerical value inherits the exclusion rule. If the mean is used in a Welch interval, the interval also inherits the independence and process-model conditions used to justify that approximation. If the groups came from different calendar periods, a causal reading additionally needs an identification argument that calendar time did not provide. Passing a code assertion checks none of those scientific conditions. Every downstream claim therefore has at least the conditions of its upstream evidence.

This is a logical argument, not a promise that a ledger makes an analysis correct. A ledger can faithfully record a weak design. Its value is that a reader can see where to disagree and where a follow-up study must improve.

## A dossier has three kinds of checks

Keep three questions separate.

1. **Did the computation process the declared records correctly?** Keys, types, missing values, row counts, formulas, and fresh-session execution belong here.
2. **Would the uncertainty procedure behave as claimed under its stated mechanism?** The answer depends on sampling or assignment, independence, distributional shape, and the approximation being used.
3. **Does the mechanism connect the numerical target to the substantive claim?** Random assignment, representative sampling, measurement validity, and the absence of important selection effects live here.

One check cannot substitute for another. A hand calculation can catch a coding mistake but cannot create random assignment. A residual plot can expose a model pattern but cannot prove that selection was harmless. A confidence interval can quantify sampling variation under a model while leaving measurement bias untouched.

## R-16-I01

### Guided investigation: morning waits after a workflow change

### Worked example 1: a complete waiting-time investigation

#### Question

A fictional clinic recorded morning walk-in waiting times before and after a workflow redesign. The descriptive question is:

> Among the complete eligible records in this synthetic extract, how did mean recorded waiting time differ between the redesign and baseline groups?

The inferential question is narrower than a claim about all patients:

> If each period's complete waiting times can be treated as independent draws from a stable period-specific process with finite variance, and the small-sample Welch reference approximation is adequate, what does a Welch interval say about the difference in those two process means?

The estimand is

\[
\Delta=\mu_{\text{redesign}}-\mu_{\text{baseline}},
\]

measured in minutes. Negative values favor shorter waits in the redesign period. This is a comparison of period-specific process means. It is not automatically the causal effect of the redesign because workflow and calendar period coincide.

#### Prediction and analysis controls

**Pre-output prediction.** Before inspecting any waiting-time output, predict a negative redesign-minus-baseline contrast because the redesign was intended to shorten waits. This is a planning expectation, not evidence: no magnitude or significance result is predicted, and a positive, near-zero, or uncertain result must be retained if that is what the declared analysis produces.

**Analysis controls.** Before inspecting group means, freeze these controls:

- one appointment is the analysis unit and `appointment_id` must be unique;
- `wait_minutes` is elapsed arrival-to-first-clinician time in minutes;
- the primary statistic is redesign mean minus baseline mean among complete outcomes;
- the interval is a two-sided 95% Welch interval, used as an approximation under independent, stable, finite-variance process draws and only when the small-sample Welch reference approximation is adequate;
- the missing baseline outcome is not silently imputed; values from 15 through 60 minutes form a declared sensitivity range;
- a difference of 5 minutes in either direction is the practical threshold chosen for this teaching investigation;
- no p-value threshold chooses the prose, and no causal effect will be claimed.

These decisions are controls because they restrict opportunities to choose a favorable analysis after seeing output. They do not prove the assumptions.

#### Raw source and provenance

The source below is an original literal synthetic fixture, local ID `R16-SERVICE-V1`, created by Math Atlas, version 1. One row represents one completed morning walk-in appointment at the fictional North clinic on the stated service day. `MISSING` is the only missing outcome code. The fixture contains no real people and provides no empirical evidence about clinics.

| Field | Type and allowed values | Meaning |
|---|---|---|
| `appointment_id` | character; exact key set `a001`–`a024` | appointment key |
| `service_day` | character; valid ISO date text `YYYY-MM-DD` | fictional date of service |
| `site` | text; `North` | selected fictional site |
| `workflow` | character; `baseline` in February 2026, `redesign` in March 2026 | period label, not randomized assignment |
| `wait_minutes` | nonnegative number or `MISSING` | arrival-to-first-clinician time, minutes |
| `visit_type` | text; `walk_in` | upstream-selected appointment type |
| `record_status` | `observed`, `timer_fault` | measurement status |

The base-R function `read.csv()` parses comma-separated text into a data frame. Its `text` argument means the source is the literal string rather than an external file. `na.strings` declares the missing code. `stringsAsFactors = FALSE` keeps text columns as character vectors. The function `paste(..., collapse = "\n")` joins the literal lines with newline characters.

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
```

#### Schema and row reconciliation

A validation function packages checks so that the same contract can be applied again. `stop()` deliberately rejects a bad input with an error. `%in%` asks whether each value belongs to an allowed set. `anyDuplicated()` returns zero when a vector contains no duplicate and a positive position otherwise. `vapply(..., is.character, logical(1L))` verifies every declared text column's type. `as.Date()` parses the day, and formatting the parsed result back to `YYYY-MM-DD` rejects loose or impossible date strings. `is.finite()` rejects infinite numeric outcomes while `is.na()` permits the declared missing record.

```r
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
stopifnot(identical(sum(!is.na(service$wait_minutes)), 23L))
stopifnot(identical(as.integer(table(service$workflow)), c(12L, 12L)))

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

The row ledger is therefore 24 raw rows, 0 invalid keys, 1 explicitly missing outcome, and 23 complete outcomes. The 12 baseline and 12 redesign rows reconcile to the raw total. The executed adverse cases establish that the validator rejects a noncharacter declared text field, an out-of-contract `a999` key, a malformed day, and a February record mislabeled as redesign. A separate selection ledger remains unresolved: the source description says an upstream process selected North-site morning walk-ins, but it does not report how many booked visits, afternoon visits, no-shows, other sites, or eligible days were excluded. The code cannot reconstruct those unseen counts. Generalization to all clinic visits must stop there.

#### Description and numerical plot alternative

Square brackets select rows or columns. `split(x, g)` separates `x` by group `g`. `vapply()` applies the same summary function to every group and checks that each result has the declared numeric shape. R's `sd()` computes sample standard deviation with denominator (n-1); this describes spread among complete records and is not a standard error.

```r
complete <- service[!is.na(service$wait_minutes), ]
wait_by_workflow <- split(complete$wait_minutes, complete$workflow)

summary_one <- function(x) {
  c(
    n = length(x),
    mean = mean(x),
    median = median(x),
    sd = sd(x),
    min = min(x),
    max = max(x)
  )
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

| Workflow | Complete (n) | Mean (min) | Median (min) | SD (min) | Min–max (min) |
|---|---:|---:|---:|---:|---:|
| baseline | 11 | 33.55 | 33.00 | 7.70 | 22–47 |
| redesign | 12 | 27.75 | 27.50 | 5.34 | 20–37 |

Both the mean and median are lower in the redesign records. The observed complete-case mean difference is $27.75-33.545\ldots=-5.795\ldots$ minutes. The baseline group is more spread out and contains the overall maximum of 47 minutes.

The next block draws side-by-side boxplots. The y-axis is waiting time in minutes; line type and point shape distinguish groups in addition to position. The table above is the exact numerical alternative. `stripchart()` adds every observed value with a small deterministic horizontal separation; no random-number generator is used.

```r
plot_path <- basename(tempfile(
  pattern = "r16-i01-",
  tmpdir = getwd(),
  fileext = ".pdf"
))
device_before_plot <- grDevices::dev.cur()
grDevices::pdf(plot_path, width = 7, height = 5)
boxplot(
  wait_by_workflow,
  ylab = "Waiting time (minutes)",
  xlab = "Workflow period",
  col = c("grey85", "white"),
  border = c("black", "black")
)
stripchart(
  wait_by_workflow,
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

**Prose alternative to the plot.** The 11 baseline values range from 22 to 47 minutes and center near 33 minutes. The 12 redesign values range from 20 to 37 minutes and center near 28 minutes. The ranges overlap from 22 through 37 minutes. Neither group has an isolated value separated from all the others, though the baseline upper tail extends 10 minutes beyond the redesign maximum.

#### A justified, conditional uncertainty calculation

Welch's two-sample procedure does not require equal sample variances. For independent groups with sample variances \(s_R^2,s_B^2\) and sizes \(n_R,n_B\), its estimated standard error for \(\bar{x}_R-\bar{x}_B\) is

\[
\widehat{SE}=\sqrt{\frac{s_R^2}{n_R}+\frac{s_B^2}{n_B}}.
\]

It uses a calculated degrees-of-freedom approximation and a \(t\) critical value. Under independent normal observations within each group, the usual Welch reference remains approximate because the unequal-variance degrees of freedom are approximated. With nonnormal observations it additionally relies on an adequate sampling-distribution approximation. Here the small sample cannot establish shape, independence, or approximation quality, so the interval is a conditional model-based analysis, not a design guarantee.

`t.test(x, y, var.equal = FALSE)` implements the Welch comparison. The order of inputs fixes the sign. We independently reproduce its standard error, degrees of freedom, and interval rather than trusting one function call.

```r
redesign_wait <- wait_by_workflow$redesign
baseline_wait <- wait_by_workflow$baseline
welch_fit <- t.test(
  redesign_wait,
  baseline_wait,
  alternative = "two.sided",
  conf.level = 0.95,
  var.equal = FALSE
)

estimated_difference <- mean(redesign_wait) - mean(baseline_wait)
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
welch_critical <- qt(0.975, df = welch_df)
manual_interval <- estimated_difference + c(-1, 1) * welch_critical * welch_se

stopifnot(abs(estimated_difference + 5.79545454545455) <=
  1e-10 + 1e-8 * abs(5.79545454545455))
stopifnot(abs(welch_se - 2.78731260719854) <=
  1e-10 + 1e-8 * abs(2.78731260719854))
stopifnot(abs(welch_df - 17.6552694215612) <=
  1e-10 + 1e-8 * abs(17.6552694215612))
stopifnot(all(abs(unname(welch_fit$conf.int) - manual_interval) <=
  1e-10 + 1e-8 * abs(manual_interval)))
stopifnot(all(abs(manual_interval - c(-11.6595877, 0.0686786)) <=
  1e-7 + 1e-7 * abs(manual_interval)))
stopifnot(abs(unname(welch_fit$p.value) - 0.0524588285940184) <=
  1e-10 + 1e-8 * abs(0.0524588285940184))
c(
  difference_minutes = estimated_difference,
  estimated_standard_error = welch_se,
  degrees_of_freedom = welch_df,
  interval_low = manual_interval[1L],
  interval_high = manual_interval[2L]
)
```

Conditional on independent stable finite-variance draws and an adequate small-sample Welch reference approximation, the estimated process-mean difference is about \(-5.80\) minutes, with an approximate 95% Welch interval from \(-11.66\) to \(0.07\) minutes. The interval includes zero and also includes reductions larger than the 5-minute practical threshold. It therefore does not sort the plausible model-based values into one simple practical verdict. A p-value, approximately 0.052 here, would encode the same reference calculation against a zero null but would not resolve selection, causality, or practical importance. We do not use a threshold to replace the interval.

#### Diagnostics and sensitivity

A useful diagnostic targets a particular failure. Two checks matter here.

First, one observation should not determine the direction or magnitude. A leave-one-out diagnostic removes each complete value in turn and recomputes the group contrast. `seq_along(x)` generates valid positions for `x`; `sapply()` repeats the calculation over those positions.

```r
leave_baseline_out <- sapply(seq_along(baseline_wait), function(i) {
  mean(redesign_wait) - mean(baseline_wait[-i])
})
leave_redesign_out <- sapply(seq_along(redesign_wait), function(i) {
  mean(redesign_wait[-i]) - mean(baseline_wait)
})
leave_one_out <- c(leave_baseline_out, leave_redesign_out)
loo_range <- range(leave_one_out)

stopifnot(all(is.finite(leave_one_out)))
stopifnot(all(abs(loo_range - c(-6.95, -4.45)) <=
  1e-10 + 1e-8 * abs(c(-6.95, -4.45))))
loo_range
```

Every leave-one-out estimate remains negative, ranging from $-6.95$ to $-4.45$ minutes. This checks single-record sensitivity of the point estimate; it does not validate independence or causal identification.

Second, the missing baseline wait could shift the target. Because the timer did not record it, the data do not identify its value. The declared sensitivity range substitutes 15, 30, 45, and 60 minutes, recomputing the 12-versus-12 descriptive difference. This is not probabilistic imputation: each row is a scenario.

```r
missing_scenarios <- c(15, 30, 45, 60)
sensitivity_difference <- vapply(
  missing_scenarios,
  function(missing_wait) {
    mean(redesign_wait) - mean(c(baseline_wait, missing_wait))
  },
  numeric(1L)
)
sensitivity_table <- data.frame(
  assumed_missing_baseline_minutes = missing_scenarios,
  redesign_minus_baseline_minutes = sensitivity_difference
)

stopifnot(all(abs(sensitivity_difference - c(-4.25, -5.5, -6.75, -8)) <=
  1e-10 + 1e-8 * abs(c(-4.25, -5.5, -6.75, -8))))
sensitivity_table
```

| Assumed missing baseline wait (min) | Redesign minus baseline mean (min) |
|---:|---:|
| 15 | −4.25 |
| 30 | −5.50 |
| 45 | −6.75 |
| 60 | −8.00 |

The scenario range crosses the prespecified 5-minute practical threshold. The direction stays negative within this chosen range, but a range chosen by an analyst is not evidence that values outside it are impossible. A follow-up system should preserve the timer log or obtain a second measurement so the boundary is based on operations rather than convenience.

#### Interpretation, failure, and reference response

A defensible response is:

> In the original synthetic North-clinic extract, 23 of 24 morning walk-in appointments had recorded waits. The complete redesign records averaged 27.75 minutes and the complete baseline records averaged 33.55 minutes, a redesign-minus-baseline difference of −5.80 minutes. Under an independent, stable, finite-variance process model and only if the small-sample Welch reference approximation is adequate, an approximate 95% Welch interval for the two period means was −11.66 to 0.07 minutes. Leave-one-out estimates ranged from −6.95 to −4.45 minutes. Assigning the missing baseline record values from 15 to 60 minutes moved the descriptive difference from −4.25 to −8.00 minutes, crossing the prespecified 5-minute practical threshold. Because period and workflow coincide, the source is upstream-selected, one outcome is missing, and neither the iid process conditions nor approximation quality are established by the file, this analysis does not identify a causal workflow effect or support generalization to all clinic visits. A randomized or staggered rollout with a complete eligibility log, reliable timing, and repeated days would address those limits.

Abstention is sometimes the most informative conclusion. Here we can describe the file and show a conditional interval. We abstain from a causal estimate and from a broad population claim. That is a successful analysis because it locates exactly what a better study must supply.

## Worked audit: the report that gained twelve appointments

### Worked example 2: diagnose and repair a duplicated-key join

Suppose an analyst joins a workflow dictionary before summarizing. The dictionary accidentally contains two `redesign` rows. Base R's `merge()` matches every compatible pair, so each redesign record appears twice. The resulting table has 36 rows: 12 baseline plus 24 redesign matches. A polished report could hide this if it checks neither key uniqueness nor row counts.

The deliberately broken alternative below is executed so its failure is measured. The repair function rejects the duplicated dictionary key with a narrow, expected error. `tryCatch()` captures only that error so the document can verify its message. The valid dictionary then produces exactly one match per source row.

```r
bad_dictionary <- data.frame(
  workflow = c("baseline", "redesign", "redesign"),
  display_label = c("Before", "After", "New process"),
  stringsAsFactors = FALSE
)
broken_join <- merge(
  service,
  bad_dictionary,
  by = "workflow",
  all.x = TRUE,
  sort = FALSE
)
stopifnot(identical(nrow(broken_join), 36L))

join_workflow_labels <- function(d, dictionary) {
  if (anyDuplicated(dictionary$workflow) != 0L) {
    stop("workflow dictionary key is not unique")
  }
  joined <- merge(d, dictionary, by = "workflow", all.x = TRUE, sort = FALSE)
  if (nrow(joined) != nrow(d)) stop("join changed the row count")
  if (anyNA(joined$display_label)) stop("join left unmatched workflow values")
  joined[match(d$appointment_id, joined$appointment_id), ]
}

captured_join_error <- tryCatch(
  {
    join_workflow_labels(service, bad_dictionary)
    NA_character_
  },
  error = function(e) conditionMessage(e)
)
stopifnot(identical(
  captured_join_error,
  "workflow dictionary key is not unique"
))

valid_dictionary <- data.frame(
  workflow = c("baseline", "redesign"),
  display_label = c("Before", "After"),
  stringsAsFactors = FALSE
)
repaired_join <- join_workflow_labels(service, valid_dictionary)
stopifnot(identical(nrow(repaired_join), 24L))
stopifnot(identical(repaired_join$appointment_id, service$appointment_id))
```

The broken join and the original source have different ledgers. In `broken_join`, the 12 baseline rows match once and the 12 redesign rows match twice, giving 36 joined rows. The one missing wait is in baseline and appears once, so `mean(broken_join$wait_minutes, na.rm = TRUE)` silently uses 35 observed joined rows, not 23. Those 35 values are invalid for the intended comparison because every observed redesign wait is counted twice. Only after rejecting the duplicated join and returning to one row per appointment does the original-source ledger apply: 24 source rows, 1 missing wait, and 23 complete outcomes. The broken report also called its rows “all appointments” and described the period difference as “minutes saved by the redesign.” Three repairs are required:

- report 23 complete outcomes from 24 raw records and show the missingness sensitivity;
- restrict the descriptive claim to the source's selected morning walk-in records;
- replace causal “saved” language with a period comparison, or withdraw the causal claim until a design supports it.

Adding a regression of wait on workflow would not repair any of these defects. With workflow identical to calendar period, the coefficient would still mix redesign with every period difference. A more elaborate calculation cannot manufacture the missing comparison.

## R-16-P01

### Full project: a claim you can defend

Produce an independently rerunnable dossier using `R16-SERVICE-V1` or a different original literal synthetic fixture with an equally complete data contract. A different target is welcome when it is defensible; there is no required significance result, and a well-supported refusal to perform inference can earn full credit.

Submit all of the following:

1. the original raw literal data, local ID, version, creator statement, schema, units, key, allowed missing codes, and row meaning;
2. a question, analysis unit, design and selection account, estimand with sign convention, and practical threshold if one matters;
3. a row/exclusion ledger that reconciles every visible record and names upstream counts that cannot be reconstructed;
4. validation and analysis code that runs in a fresh base-R session, including assertions for displayed numbers and one adverse input;
5. appropriate descriptive summaries plus a plot, its exact numerical table, and a prose alternative;
6. a justified uncertainty method, or a precise refusal that identifies the missing design/model condition and reports what can still be described;
7. diagnostics aimed at at least two plausible weaknesses, including missingness or selection when present;
8. a claim ledger separating computational, descriptive, process-inferential, causal, and generalization claims;
9. a bounded conclusion and a follow-up design that would strengthen its weakest important claim; and
10. a deliberately broken alternative, its observed failure, and a repair that prevents recurrence.

The 30-point rubric awards 5 points for question/design/estimand, 5 for provenance and the missingness/selection ledger, 6 for computational correctness and fresh-session reproducibility, 6 for justified uncertainty and diagnostics, 4 for accessible communication, and 4 for limitations and follow-up design. Passing is 22 points, with at least 3 points in design, computation, and uncertainty. Fabricated provenance or an unsupported causal claim prevents a pass. Reproducibility alone does not imply validity.

The [project reference analysis and scoring guide](solutions-capstone.md) provides one defensible submission, not the only acceptable answer.

## Exercises

## Worked example 3: a classification threshold changes the question

Suppose a held-out evaluation set contains ten recorded class-one specimens and ten recorded class-zero specimens. At a predeclared threshold, a fixed classifier labels eight of the class-one specimens positive and also labels three of the class-zero specimens positive. The confusion table therefore has true positives eight, false negatives two, false positives three and true negatives seven. Accuracy is $(8+7)/20=0.75$, sensitivity is $8/10=0.8$, and specificity is $7/10=0.7$. These are different summaries with explicitly different denominators.

Changing the threshold can improve one error while worsening another. If the threshold is selected after inspecting these twenty labels, the resulting table is part of development, not an untouched evaluation of a frozen rule. Retain all thresholds considered, record the intended error costs and choose the operating rule using development data. A separate evaluation set can then describe the chosen rule's errors under its own collection mechanism.

Even with an untouched set, these finite descriptive fractions do not establish deployment probabilities without a model connecting future specimens to the evaluation records. They also do not identify the costs of each error. A complete report distinguishes the probability model, estimated predictions, threshold choice, confusion counts, evaluation design and intended decision, rather than calling one accuracy number a proof that the system is safe to use in every setting.

<details>
<summary>Solution setup for the original exercises</summary>

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

</details>

## R-16-E01

**Exercise 19.1**

### Formulate a target and mechanism

For `R16-SERVICE-V1`, rewrite “Did the redesign work?” as (a) a finite descriptive question and (b) a process-mean question. State the unit, estimand, sign, selection mechanism, assignment mechanism, and one condition needed for each conclusion.

<details>
<summary>Hint 1</summary>

Separate the 23 complete records from hypothetical future draws, and remember that calendar period determined workflow.

</details>

<details>
<summary>Hint 2</summary>

The finite descriptive estimand concerns recorded eligible complete appointments, whereas a future-process mean needs a sampling model; calendar period was not randomized.

</details>

<details>
<summary>Solution</summary>

The finite descriptive question is: “Among the 23 complete waiting-time records in `R16-SERVICE-V1`, what is the redesign mean minus the baseline mean?” One unit is one completed morning walk-in appointment. The estimand is the difference between the two arithmetic means of the complete records, with negative values meaning shorter redesign waits. No probability model is needed to describe those records, but the claim must remain confined to them and disclose the missing baseline record.

The process question is: “If complete appointments in each period behave as independent draws from stable period-specific processes, what is the difference \(\Delta=\mu_R-\mu_B\) between process mean waits?” The source was upstream-selected to one site, visit type, and morning window; the exact upstream exclusion counts are unknown. Workflow was determined by calendar period, not randomly assigned. A Welch interval can be used conditionally if within-period draws are independent with finite variance and its small-sample approximation is adequate. It cannot identify a causal redesign effect because any other calendar change can explain the contrast.

The finite answer needs correct measurement and complete disclosure. The process answer additionally needs the independent stable-process model. Neither supports all-clinic generalization without a sampling or transport argument.

</details>


## R-16-E02

**Exercise 19.2**

### Validate a transformation history

An analyst says, “I imported 24 rows, joined labels, removed missing values, and analyzed 23.” Explain why those counts do not prove the transformation is correct. Write three assertions that would catch a duplicated join key, a lost appointment, and disagreement between missing outcome and status.

<details>
<summary>Hint 1</summary>

Preserve a key set as well as a row count; two errors can cancel in a count.

</details>

<details>
<summary>Hint 2</summary>

Check uniqueness of the join key, equality of source and derived key sets, and the logical relation between missing waits and status.

</details>

<details>
<summary>Solution</summary>

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

</details>


## R-16-E03

**Exercise 19.3**

### Choose summaries and displays

Choose a compact table and accessible plot for the waiting-time comparison. Explain why means alone are inadequate and write a prose alternative that uses exact values from the fixture.

<details>
<summary>Hint 1</summary>

Include group size, center, spread, and range; overlap is easier to assess from more than one summary.

</details>

<details>
<summary>Hint 2</summary>

Retain separate group denominators, medians or quartiles, spread and range; the plot's overlap must be described numerically.

</details>

<details>
<summary>Solution</summary>

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

</details>


## R-16-E04

**Exercise 19.4**

### Justify uncertainty or refuse it

Suppose the service manager reveals that a lunch closure separated the first and second appointment on every day, making waits within each day related. Can the 23-row Welch interval retain its stated independent-draw interpretation? Give two defensible next analyses or study changes, and say what may still be reported immediately.

<details>
<summary>Hint 1</summary>

The number of rows is not the number of independent day-level replicates.

</details>

<details>
<summary>Hint 2</summary>

Within-day dependence breaks the iid-row premise; report description now and consider day-level analysis or a design with independent replicated days.

</details>

<details>
<summary>Solution</summary>

No. The original interval treats 23 appointment rows as independent process draws. If the lunch closure links the two waits within each day, that repeated-mechanism interpretation is unsupported; there may be only 12 day-period clusters, and calendar period still coincides with workflow.

One defensible immediate response is descriptive abstention: report the 23 recorded waits, complete-case means, the missingness sensitivity, and day labels, but withdraw the appointment-level Welch interval. A second analysis could reduce each service day to a prespecified day-level mean, then compare day summaries while openly acknowledging the tiny number of days and the before/after confounding. That analysis changes the unit and estimand, so it must be labeled rather than slipped in as a repair.

A stronger future study would randomize or stagger workflow rollout across many comparable days or sites, record every eligible appointment, and analyze at the assignment unit. Blocking by day or site could preserve relevant pairing. The data should also record the lunch closure so the dependence is designed into the analysis.

</details>


## R-16-E05

**Exercise 19.5**

### Separate sampling and computational error

A colleague bootstraps the 23 complete rows (B=400) times and says, “The bootstrap standard error includes Monte Carlo error, sampling error, and missingness bias.” Diagnose the statement. If 96 of 400 bootstrap statistics exceed a threshold, calculate the plug-in Monte Carlo standard error of that estimated exceedance proportion.

<details>
<summary>Hint 1</summary>

The bootstrap distribution targets sampling variation under a resampling approximation; finite $B$ adds numerical variation. Neither automatically measures bias from an unobserved value.

</details>

<details>
<summary>Hint 2</summary>

The indicator proportion is $96/400=0.24$, whose estimated Monte Carlo standard error is $\sqrt{0.24(0.76)/400}$.

</details>

<details>
<summary>Solution</summary>

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

</details>


## R-16-E06

**Exercise 19.6**

### Evaluate selection and missingness

The missing baseline wait is claimed to be “missing completely at random because the status says timer fault.” Explain what the status establishes and what it does not. Use the four sensitivity scenarios to decide whether the claim “the reduction exceeded 5 minutes” is stable.

<details>
<summary>Hint 1</summary>

A cause label can support an operational story without proving independence from waiting time.

</details>

<details>
<summary>Hint 2</summary>

A recorded timer-fault label describes a reason, but does not prove its probability was independent of the unobserved wait.

</details>

<details>
<summary>Solution</summary>

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

</details>


## R-16-E07

**Exercise 19.7**

### Make the report rerunnable and accessible

List the minimum contents needed for another reader to rerun and audit the reference analysis without external files. Then identify two facts conveyed visually by the boxplot that its prose alternative must preserve.

<details>
<summary>Hint 1</summary>

Include literal input, software assumptions, code order, checks, numeric output, and interpretation.

</details>

<details>
<summary>Hint 2</summary>

Include the literal source, schema, exclusions, full code order, environment, numeric plot alternative and bounded interpretation.

</details>

<details>
<summary>Solution</summary>

A minimum rerunnable dossier contains the literal raw input and provenance statement; schema, units, key, row meaning, allowed missing codes, and selection ledger; the question, estimand, sign convention, and analysis plan; base-R code in execution order; software and session information; assertions for keys, counts, formulas, and displayed values; the numerical result table; and a conclusion tied to design and model conditions. Another reader also needs the expected intentional failure and its message so it is not confused with an unexpected error.

The prose alternative must preserve at least the baseline group's greater spread and upper range, and the substantial overlap between group ranges. It should also give group sizes and units. Saying only “redesign was lower” loses the visual evidence about within-group variation.

</details>


## R-16-E08

**Exercise 19.8**

### Defend a bounded conclusion and next study

Critique this sentence: “The reproducible model proves the redesign saves 5.8 minutes for clinic patients.” Rewrite it as a bounded conclusion, then propose a study that better supports a causal and broader-population claim.

<details>
<summary>Hint 1</summary>

Audit “reproducible,” “proves,” “saves,” and “clinic patients” separately.

</details>

<details>
<summary>Hint 2</summary>

The observed difference is associated with calendar workflow periods among recorded rows; a randomized rollout and representative sampling would address different missing design links.

</details>

<details>
<summary>Solution</summary>

“Reproducible” says another compatible R session can repeat the calculation; it does not show the source represents all patients. “Proves” exceeds an approximate model-based interval. “Saves” is causal language, but workflow was confounded with calendar period. “5.8 minutes” is the complete-case point estimate, not a constant individual effect. “Clinic patients” extends beyond selected North-site morning walk-ins.

A bounded rewrite is:

> Among 23 complete records from 24 selected synthetic North-site morning walk-in appointments, the redesign-period mean was 5.80 minutes lower than the baseline-period mean. Under an independent stable finite-variance process model and only if the small-sample Welch reference approximation is adequate, the approximate 95% Welch interval for the two period means was −11.66 to 0.07 minutes. Missing-outcome scenarios changed the descriptive difference from −4.25 to −8.00 minutes. Because workflow coincided with calendar period, upstream exclusions are unknown, and neither the process conditions nor approximation quality are established by the file, this result is neither a causal estimate nor evidence for all clinic patients.

A stronger study could recruit a declared frame of eligible appointments across several sites and dates, randomly assign comparable sites or days to rollout order, preserve the assignment unit in analysis, log every eligibility decision, and use redundant automated timestamps. That design would support a causal comparison under its assignment assumptions and give a clearer path to population generalization through its declared sampling frame.

</details>


Complete explanations appear in the [solutions for R-16-E01 through R-16-E08](solutions-capstone.md).

The chapter, code, exercises, and fixture are original Math Atlas material under CC BY-SA 4.0.
## R-16-E09

**Exercise 19.9**

Extend the capstone's evidence ledger to a real-data regression from the new chapters. Name the source/license, analysis unit, missingness policy, response/predictors and prediction target. Explain why retaining 300 rows does not itself justify a causal or nationally representative conclusion.

<details>
<summary>Hint 1</summary>

The row count describes the fitted table, while the collection design determines how it connects to a target population.

</details>

<details>
<summary>Hint 2</summary>

Separate reproducible prediction for comparable observations from an intervention effect or a probability sample of a wider population.

</details>

<details>
<summary>Solution</summary>

For example, use the credited CC0 penguin source, one recorded penguin per source row, the explicit complete-case mask for the chosen response/predictors, mass in grams and measured morphology/species predictors. Record the selected source version, exclusions and the target of predicting mass for comparable penguins in the supported predictor range. A large retained table does not randomize the predictors or sample every penguin population. Causal and broader-population claims require additional identification and sampling assumptions.

</details>

## R-16-E10

**Exercise 19.10**

An analyst chooses a logistic classification threshold using the final evaluation labels, then reports that same table's accuracy as an independent assessment. Diagnose the leakage and propose a repair that preserves all records.

<details>
<summary>Hint 1</summary>

Threshold choice is part of model selection, even when coefficients were fitted elsewhere.

</details>

<details>
<summary>Hint 2</summary>

Reserve evaluation data before fitting or threshold choice, or report the reused table honestly as development evidence.

</details>

<details>
<summary>Solution</summary>

The evaluation labels influenced the rule, so its displayed accuracy is selected development performance rather than an independent assessment of the frozen procedure. Keep the full search history and all observations, use training/development data for fitting and threshold choice, then evaluate once on a genuinely held-out sample following the declared mechanism. If no untouched data remain, report this limitation and collect a new evaluation sample or use a carefully designed nested validation scheme. Rearranging the same labels after selection does not erase the leakage.

</details>


## Summary

A defensible investigation connects its question, units, target, mechanism, source, calculation and uncertainty to a bounded conclusion. Keep row selection and missingness visible, distinguish statistical from Monte Carlo error, and freeze prediction choices before independent evaluation. A polished rerunnable report cannot supply design assumptions absent from the evidence.
