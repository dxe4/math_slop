
# Solutions: Functions, Iteration, and Assertions

These solutions are independently executable. They repeat every required fixture and helper rather than depending on objects created in the chapter. The code checks numerical claims; the prose explains why each contract and interpretation is bounded.

```r
summarize_minutes <- function(x, missing = c("error", "remove")) {
  missing <- match.arg(missing)
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x))) {
    stop("x must be an ordinary numeric vector of minutes", call. = FALSE)
  }
  if (any(is.nan(x)) || any(is.infinite(x))) {
    stop("x must contain only finite values or NA", call. = FALSE)
  }
  if (any(x < 0, na.rm = TRUE)) {
    stop("waiting times must be nonnegative", call. = FALSE)
  }
  n_total <- length(x)
  n_missing <- sum(is.na(x))
  if (missing == "error" && n_missing > 0L) {
    stop("x contains missing waiting times", call. = FALSE)
  }
  used <- if (missing == "remove") x[!is.na(x)] else x
  n_used <- length(used)
  if (n_used == 0L) {
    return(list(
      n_total = n_total, n_used = 0L, n_missing = n_missing,
      mean_minutes = NA_real_, sd_minutes = NA_real_,
      unit = "minutes", missing_policy = missing
    ))
  }
  return(list(
    n_total = n_total, n_used = n_used, n_missing = n_missing,
    mean_minutes = mean(used),
    sd_minutes = if (n_used >= 2L) sd(used) else NA_real_,
    unit = "minutes", missing_policy = missing
  ))
}

weighted_mean_minutes <- function(x, weights) {
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x)) ||
      !is.numeric(weights) || is.object(weights) || !is.null(dim(weights))) {
    stop("x and weights must be ordinary numeric vectors", call. = FALSE)
  }
  if (length(x) == 0L) {
    stop("x and weights must be nonempty", call. = FALSE)
  }
  if (length(x) != length(weights)) {
    stop("x and weights must have equal lengths", call. = FALSE)
  }
  if (any(!is.finite(x)) || any(!is.finite(weights))) {
    stop("x and weights must be finite with no missing values", call. = FALSE)
  }
  if (any(x < 0)) {
    stop("waiting times must be nonnegative", call. = FALSE)
  }
  if (any(weights < 0)) {
    stop("weights must be nonnegative with a positive sum", call. = FALSE)
  }
  weight_scale <- max(weights)
  if (weight_scale <= 0) {
    stop("weights must be nonnegative with a positive sum", call. = FALSE)
  }
  # Zero-weight observations contribute nothing and must not set the value scale.
  positive <- weights > 0
  x <- x[positive]
  weights <- weights[positive]
  scaled_weights <- weights / weight_scale
  normalized_weights <- scaled_weights / sum(scaled_weights)
  value_scale <- max(abs(x))
  result <- if (value_scale == 0) {
    0
  } else {
    value_scale * sum((x / value_scale) * normalized_weights)
  }
  if (!is.finite(result)) {
    stop("weighted mean is outside the supported numeric range", call. = FALSE)
  }
  return(result)
}

# A zero-weight extreme value must not erase a positive-weight tiny value.
stopifnot(weighted_mean_minutes(c(1e308, 1e-308), c(0, 1)) == 1e-308)

# Smoke checks for the independently defined helpers.
helper_check <- summarize_minutes(c(8, 10, 12, 14, 16), missing = "error")
stopifnot(abs(helper_check$mean_minutes - 12) <= 1e-10 + 1e-8 * abs(12))
stopifnot(abs(helper_check$sd_minutes - sqrt(10)) <=
            1e-10 + 1e-8 * abs(sqrt(10)))

helper_matrix_error <- tryCatch(
  summarize_minutes(matrix(c(8, 10, 12, 14), nrow = 2), missing = "error"),
  error = function(e) conditionMessage(e)
)
helper_weight_array_error <- tryCatch(
  weighted_mean_minutes(c(1, 2, 3, 4), array(rep(1, 4), dim = c(2, 2))),
  error = function(e) conditionMessage(e)
)
helper_weight_matrix_x_error <- tryCatch(
  weighted_mean_minutes(matrix(c(1, 2, 3, 4), nrow = 2), rep(1, 4)),
  error = function(e) conditionMessage(e)
)
helper_extreme_weight_mean <- weighted_mean_minutes(
  c(1, 1), c(1e308, 1e308)
)
helper_extreme_weight_contrast <- weighted_mean_minutes(
  c(1, 2), c(1e308, 1e308)
)
stopifnot(identical(helper_matrix_error,
                    "x must be an ordinary numeric vector of minutes"))
stopifnot(identical(helper_weight_array_error,
                    "x and weights must be ordinary numeric vectors"))
stopifnot(identical(helper_weight_matrix_x_error,
                    "x and weights must be ordinary numeric vectors"))
stopifnot(is.finite(helper_extreme_weight_mean), helper_extreme_weight_mean == 1)
stopifnot(abs(helper_extreme_weight_contrast - 1.5) <=
            1e-10 + 1e-8 * abs(1.5))
```

## R-07-E01

A suitable contract is:

- `x` is an ordinary numeric vector of waiting times in minutes with no dimension attribute. A matrix or array is rejected rather than flattened. Nonmissing values must be finite and nonnegative.
- `missing` selects `"error"` or `"remove"`; `match.arg()` also accepts an unambiguous partial label such as `"rem"`. The first policy rejects any `NA`; the second counts and excludes them. Write the full labels in analysis calls.
- The returned named list contains `n_total`, `n_used`, `n_missing`, `minimum_minutes`, `maximum_minutes`, `unit`, and `missing_policy`.
- If no values remain, both endpoints are `NA_real_`, because zero is a possible wait and must not be used as a code for “no observed value.” For one value, the minimum and maximum are both that value.

The contract should reject a date even if it is stored numerically, because the variable is elapsed minutes. It should also reject `Inf`, `-Inf`, and `NaN` rather than letting them become endpoints.

Passing these checks would not show that the used visits represent visits at other dates or offices. It would not even show that the original clock readings were accurate. The checks establish only facts encoded about the supplied vector and returned result.

One implementation is:

```r
range_minutes <- function(x, missing = c("error", "remove")) {
  missing <- match.arg(missing)
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x))) {
    stop("x must be an ordinary numeric vector of minutes", call. = FALSE)
  }
  if (any(is.nan(x)) || any(is.infinite(x)) || any(x < 0, na.rm = TRUE)) {
    stop("nonmissing waits must be finite and nonnegative", call. = FALSE)
  }
  n_total <- length(x)
  n_missing <- sum(is.na(x))
  if (missing == "error" && n_missing > 0L) {
    stop("x contains missing waiting times", call. = FALSE)
  }
  used <- if (missing == "remove") x[!is.na(x)] else x
  if (length(used) == 0L) {
    endpoints <- c(NA_real_, NA_real_)
  } else {
    endpoints <- range(used)
  }
  return(list(
    n_total = n_total, n_used = length(used), n_missing = n_missing,
    minimum_minutes = endpoints[1], maximum_minutes = endpoints[2],
    unit = "minutes", missing_policy = missing
  ))
}

range_check <- range_minutes(c(4, NA_real_, 10), missing = "remove")
stopifnot(range_check$n_total == 3L, range_check$n_used == 2L)
stopifnot(range_check$n_missing == 1L)
stopifnot(range_check$minimum_minutes == 4)
stopifnot(range_check$maximum_minutes == 10)

range_matrix_error <- tryCatch(
  range_minutes(matrix(c(4, 7, 10, 13), nrow = 2), missing = "error"),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(range_matrix_error,
                    "x must be an ordinary numeric vector of minutes"))
```

## R-07-E02

The vector has total \(4+7+10=21\) minutes and count 3, so its mean is \(21/3=7\) minutes. Validation comes first so character numerals are not accepted as measurements merely because they could be converted.

```r
mean_minutes <- function(x) {
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x)) ||
      length(x) == 0L ||
      any(!is.finite(x))) {
    stop("x must be a nonempty ordinary finite numeric vector", call. = FALSE)
  }
  return(mean(x))
}

exercise_mean <- mean_minutes(c(4, 7, 10))
stopifnot(abs(exercise_mean - 7) <= 1e-10 + 1e-8 * abs(7))

character_error <- tryCatch(
  mean_minutes(c("4", "7", "10")),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(
  character_error,
  "x must be a nonempty ordinary finite numeric vector"
))

mean_array_error <- tryCatch(
  mean_minutes(array(c(4, 7, 10, 13), dim = c(2, 2))),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(
  mean_array_error,
  "x must be a nonempty ordinary finite numeric vector"
))
```

## R-07-E03

I return `NA_real_` for both empty and singleton inputs. For no values there is no observed spread to summarize. For one value, the sample-SD formula has denominator \(n-1=0\), so it is undefined. Returning zero for a singleton would confuse “the only observed value differs from itself by zero” with an estimable sample standard deviation.

```r
safe_sd <- function(x) {
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x)) ||
      any(!is.finite(x))) {
    stop("x must be an ordinary finite numeric vector", call. = FALSE)
  }
  if (length(x) < 2L) {
    return(NA_real_)
  }
  return(sd(x))
}

stopifnot(is.na(safe_sd(numeric(0))))
stopifnot(is.na(safe_sd(5)))
stopifnot(abs(safe_sd(c(2, 4, 6)) - 2) <= 1e-10 + 1e-8 * abs(2))

sd_matrix_error <- tryCatch(
  safe_sd(matrix(c(2, 4, 6, 8), nrow = 2)),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(sd_matrix_error,
                    "x must be an ordinary finite numeric vector"))
```

For `c(2, 4, 6)`, the mean is 4 and the squared deviations sum to \(4+0+4=8\). Division by \(3-1\) gives variance 4 and SD 2, supplying the independent check.

## R-07-E04

The output is allocated to have exactly the input length. `seq_along(x)` produces no indices for an empty input, so the body is skipped and the preallocated `numeric(0)` is returned.

```r
square_loop <- function(x) {
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x)) ||
      any(!is.finite(x))) {
    stop("x must be an ordinary finite numeric vector", call. = FALSE)
  }
  out <- numeric(length(x))
  for (i in seq_along(x)) {
    out[i] <- x[i]^2
  }
  return(out)
}

empty_squares <- square_loop(numeric(0))
three_squares <- square_loop(c(2, 3, 5))
stopifnot(identical(empty_squares, numeric(0)))
stopifnot(identical(three_squares, c(4, 9, 25)))

square_array_error <- tryCatch(
  square_loop(array(c(2, 3, 5, 7), dim = c(2, 2))),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(square_array_error,
                    "x must be an ordinary finite numeric vector"))
```

`1:length(x)` violates the contract at length zero because `1:0` is the two-element vector `c(1, 0)`. The problem is the index construction, not the loop itself.

## R-07-E05

After step \(i\), the invariant is `out[i] == sum(x[seq_len(i)])`: the current output equals the sum of the first \(i\) inputs. A running total initialized to zero lets the same update handle the first and later steps.

```r
x_cumulative <- c(3, 5, 8, 12)
loop_cumulative <- numeric(length(x_cumulative))
running_total <- 0
for (i in seq_along(x_cumulative)) {
  running_total <- running_total + x_cumulative[i]
  loop_cumulative[i] <- running_total
  stopifnot(loop_cumulative[i] == sum(x_cumulative[seq_len(i)]))
}

reference_cumulative <- cumsum(x_cumulative)
stopifnot(identical(loop_cumulative, c(3, 8, 16, 28)))
stopifnot(identical(loop_cumulative, reference_cumulative))
```

The reference uses a separately implemented base-R operation. Agreement is stronger evidence than comparing the loop with a second copy of the same loop, although both could still agree on a misunderstood target.

## R-07-E06

For the finite vector \(x_1,\ldots,x_n\) and constant \(a\),

\[
\overline{x+a}=\frac{1}{n}\sum_{i=1}^n(x_i+a)=\bar{x}+a.
\]

Each centered value is unchanged because \((x_i+a)-(\bar{x}+a)=x_i-\bar{x}\). Therefore the centered-square sum and sample SD are unchanged when \(n\ge2\). The test below assumes an ordinary finite numeric vector, one finite numeric constant, and a defined sample SD.

```r
x_transform <- c(2, 5, 9, 12)
a_transform <- 7
shifted <- x_transform + a_transform

mean_expected <- mean(x_transform) + a_transform
stopifnot(abs(mean(shifted) - mean_expected) <=
            1e-10 + 1e-8 * abs(mean_expected))
stopifnot(abs(sd(shifted) - sd(x_transform)) <=
            1e-10 + 1e-8 * abs(sd(x_transform)))
```

The displayed algebra proves the property under its assumptions. The one successful fixture checks that this execution is consistent with the property; by itself, a finite example would not prove a statement about every permissible vector.

## R-07-E07

The function rejects the mismatched lengths before multiplication, so R never gets a chance to recycle the weights.

```r
exercise_length_error <- tryCatch(
  weighted_mean_minutes(c(5, 10, 15), c(1, 2)),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(
  exercise_length_error,
  "x and weights must have equal lengths"
))

exercise_finite_error <- tryCatch(
  weighted_mean_minutes(c(5, NA_real_, 15), c(1, 2, 1)),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(
  exercise_finite_error,
  "x and weights must be finite with no missing values"
))
```

The second call reaches a different boundary: lengths agree, but an outcome is missing. This weighted function has no missingness-removal policy, so rejecting that call is more honest than silently selecting two rows.

## R-07-E08

The raw `minutes` field is character data with the declared missing code `"NA"`. I parse only the nonmissing strings, avoiding an implicit conversion warning. The two weights cannot be one-per-row because there are four rows. I interpret them as explicitly named group-level reporting weights, `A = 1` and `B = 2`; they must not be recycled across visits. No weighted visit-level mean is requested, so I do not invent one.

```r
# Synthetic exercise fixture MA-R07-E08, version 1.
# Creator: Math Atlas. One row is one recorded visit.
broken_group <- c("A", "A", "B", "B")
broken_minutes_text <- c("8", "NA", "10", "14")
group_reporting_weight <- c(A = 1, B = 2)

is_missing_text <- broken_minutes_text == "NA"
repaired_minutes <- rep(NA_real_, length(broken_minutes_text))
repaired_minutes[!is_missing_text] <- as.numeric(
  broken_minutes_text[!is_missing_text]
)

stopifnot(length(broken_group) == length(repaired_minutes))
stopifnot(identical(names(group_reporting_weight), sort(unique(broken_group))))
stopifnot(sum(is.na(repaired_minutes)) == 1L)

exercise_groups <- split(repaired_minutes, broken_group)
exercise_summaries <- lapply(
  exercise_groups,
  FUN = summarize_minutes,
  missing = "remove"
)
exercise_means <- vapply(
  exercise_summaries,
  FUN = function(z) z$mean_minutes,
  FUN.VALUE = numeric(1)
)
exercise_used <- vapply(
  exercise_summaries,
  FUN = function(z) z$n_used,
  FUN.VALUE = integer(1)
)

stopifnot(identical(exercise_means, c(A = 8, B = 12)))
stopifnot(identical(exercise_used, c(A = 1L, B = 2L)))
```

The missingness ledger is: four total visit rows, one missing outcome in group A, three used outcomes, and no row removed for any other reason. Group A's observed-row mean is 8 minutes from one of its two rows; its sample SD is undefined. Group B's observed-row mean is \((10+14)/2=12\) minutes and its sample SD is \(\sqrt{8}\approx2.828\) minutes.

A bounded conclusion is: “Among the three synthetic visits with recorded outcomes, the observed mean was 8 minutes for A (1 of 2 visit outcomes recorded) and 12 minutes for B (2 of 2 recorded). The missing A outcome prevents this comparison from describing all four declared visits without an additional assumption.” The weights are metadata at group level under the chosen interpretation. If they were intended per visit, the correct repair would be to obtain four aligned weights rather than guess or recycle.


## R-07-E09

Require sum(weights)>0 in addition to matching lengths, finite numeric inputs and nonnegative weights. Here numerator and denominator are both zero, so the weighted mean is undefined rather than zero minutes. A specific error such as 'total weight must be positive' is defensible. Replacing the weights by equal weights would silently change the analysis requested. The times remain valid recorded values, but these supplied weights define no nonempty weighted target. Stop before division and identify the failed condition.

## R-07-E10

A has declared and observed counts two and mean three minutes. B has counts three and mean seven. C has both counts zero and an unavailable mean, explicitly NA rather than zero. After each step, the invariant is that the processed group's row contains that group's own count and summary, with earlier rows unchanged. seq_along over the declared group list visits C's metadata without creating a measurement. This original version-1 example has no missing recorded values: a declared empty group is different from a nonempty group whose outcomes are unknown.

## R-07-P01

### Reference analysis: municipal waiting-time table

**Question and target.** For the scheduled synthetic visits in the supplied table, what are the mean and sample SD of recorded waiting time within each office after a declared repair? One analysis unit is one scheduled service visit, keyed by `event_id`. Waiting time is called minute minus scheduled minute, measured in minutes. This is a finite descriptive target for retained records, not an estimate for other days or residents.

**Fixture MA-R07-P01, version 1.** Creator: Math Atlas. The original literal CSV has 10 raw rows. Blank `called_minute` is the sole missing code. No external source is used.

```r
municipal_raw_csv <- paste(
  "event_id,service_date,office,scheduled_minute,called_minute",
  "w01,2026-04-06,North,480,492",
  "w02,2026-04-06,North,510,518",
  "w03,2026-04-06,North,540,551",
  "w04,2026-04-06,Central,480,494",
  "w05,2026-04-06,Central,510,523",
  "w05,2026-04-06,Central,510,523",
  "w06,2026-04-06,Central,540,",
  "w07,2026-04-06,South,480,489",
  "w08,2026-04-06,South,510,522",
  "w09,2026-04-06,South,540,550",
  sep = "\n"
)

repair_waiting_table <- function(
    raw_csv,
    duplicate_policy = c("error", "keep_first", "keep_all"),
    missing_policy = c("error", "exclude_outcome")) {
  duplicate_policy <- match.arg(duplicate_policy)
  missing_policy <- match.arg(missing_policy)
  if (!is.character(raw_csv) || length(raw_csv) != 1L || is.na(raw_csv)) {
    stop("raw_csv must be one nonmissing character string", call. = FALSE)
  }

  dat <- read.csv(
    text = raw_csv,
    colClasses = "character",
    na.strings = character(0),
    strip.white = TRUE,
    check.names = FALSE
  )
  expected_names <- c(
    "event_id", "service_date", "office",
    "scheduled_minute", "called_minute"
  )
  if (!identical(names(dat), expected_names)) {
    stop("CSV columns do not match the declared schema", call. = FALSE)
  }
  if (nrow(dat) == 0L) {
    stop("CSV must contain at least one data row", call. = FALSE)
  }
  if (any(is.na(dat$event_id)) || any(dat$event_id == "")) {
    stop("event_id must be present on every row", call. = FALSE)
  }
  if (any(!dat$office %in% c("North", "Central", "South"))) {
    stop("office contains a value outside the schema", call. = FALSE)
  }

  parsed_date <- tryCatch(
    as.Date(dat$service_date, format = "%Y-%m-%d"),
    error = function(e) stop("service_date is not a valid ISO date", call. = FALSE)
  )
  if (any(is.na(parsed_date)) ||
      any(format(parsed_date, "%Y-%m-%d") != dat$service_date)) {
    stop("service_date is not a valid ISO date", call. = FALSE)
  }

  called_blank <- is.na(dat$called_minute) | dat$called_minute == ""
  scheduled_ok <- !is.na(dat$scheduled_minute) &
    grepl("^[0-9]+$", dat$scheduled_minute)
  called_ok <- called_blank |
    (!is.na(dat$called_minute) & grepl("^[0-9]+$", dat$called_minute))
  if (!all(scheduled_ok) || !all(called_ok)) {
    stop("clock minutes must be blank or whole-number text as declared", call. = FALSE)
  }

  # Parse and bound nonblank tokens before integer conversion. A huge digit
  # string is invalid clock text, never a missing outcome.
  scheduled <- as.numeric(dat$scheduled_minute)
  called <- rep(NA_real_, nrow(dat))
  called[!called_blank] <- as.numeric(dat$called_minute[!called_blank])
  if (any(!is.finite(scheduled) | scheduled < 0 | scheduled > 1439) ||
      any(!is.finite(called[!called_blank]) |
          called[!called_blank] < 0 | called[!called_blank] > 1439)) {
    stop("clock minutes must lie from 0 through 1439", call. = FALSE)
  }
  scheduled <- as.integer(scheduled)
  called <- as.integer(called)
  if (any(called < scheduled, na.rm = TRUE)) {
    stop("called_minute cannot precede scheduled_minute", call. = FALSE)
  }

  duplicate_rows <- duplicated(dat$event_id) |
    duplicated(dat$event_id, fromLast = TRUE)
  duplicate_ids <- unique(dat$event_id[duplicate_rows])
  if (length(duplicate_ids) > 0L) {
    for (id in duplicate_ids) {
      same_id <- dat[dat$event_id == id, , drop = FALSE]
      if (nrow(unique(same_id)) != 1L) {
        stop("a duplicated key has conflicting fields", call. = FALSE)
      }
    }
  }
  duplicate_excess <- sum(duplicated(dat$event_id))
  if (duplicate_policy == "error" && duplicate_excess > 0L) {
    stop("event_id is duplicated", call. = FALSE)
  }
  if (duplicate_policy == "keep_first") {
    keep <- !duplicated(dat$event_id)
    dat <- dat[keep, , drop = FALSE]
    parsed_date <- parsed_date[keep]
    scheduled <- scheduled[keep]
    called <- called[keep]
  }

  dat$service_date <- parsed_date
  dat$scheduled_minute <- scheduled
  dat$called_minute <- called
  dat$wait_minutes <- dat$called_minute - dat$scheduled_minute

  missing_outcomes <- sum(is.na(dat$wait_minutes))
  unique_missing_visits <- length(unique(
    dat$event_id[is.na(dat$wait_minutes)]
  ))
  if (missing_policy == "error" && missing_outcomes > 0L) {
    stop("called_minute is missing", call. = FALSE)
  }
  analysis <- dat[!is.na(dat$wait_minutes), , drop = FALSE]
  if (nrow(analysis) == 0L) {
    stop("no recorded outcomes remain for analysis", call. = FALSE)
  }
  distinct_visit_valid <- anyDuplicated(analysis$event_id) == 0L
  summary_role <- if (distinct_visit_valid) {
    "validated distinct-visit analysis"
  } else {
    "duplicate-retention diagnostic only"
  }
  analysis_unit <- if (distinct_visit_valid) {
    "one scheduled service visit; wait in minutes"
  } else {
    "one retained raw CSV row; duplicate keys may represent the same scheduled visit"
  }

  office_names <- sort(unique(analysis$office))
  group_rows <- vector("list", length(office_names))
  for (i in seq_along(office_names)) {
    office_i <- office_names[i]
    x_i <- analysis$wait_minutes[analysis$office == office_i]
    group_rows[[i]] <- data.frame(
      office = office_i,
      n_recorded = length(x_i),
      mean_minutes = mean(x_i),
      sd_minutes = if (length(x_i) >= 2L) sd(x_i) else NA_real_,
      stringsAsFactors = FALSE
    )
  }
  group_summary <- do.call(rbind, group_rows)
  rownames(group_summary) <- NULL

  ledger <- data.frame(
    stage = c(
      "raw records", "exact duplicate records removed",
      "retained rows with missing outcome",
      if (distinct_visit_valid) "analyzed visits" else "diagnostic outcome rows"
    ),
    count = c(
      nrow(read.csv(text = raw_csv, colClasses = "character",
                    na.strings = character(0), check.names = FALSE)),
      if (duplicate_policy == "keep_first") duplicate_excess else 0L,
      missing_outcomes,
      nrow(analysis)
    ),
    rule = c(
      "literal rows before validation",
      duplicate_policy,
      missing_policy,
      if (distinct_visit_valid) {
        "one row per retained key with a recorded outcome"
      } else {
        "duplicate keys retained; not one row per distinct visit"
      }
    ),
    stringsAsFactors = FALSE
  )

  return(list(
    cleaned = dat,
    analysis = analysis,
    group_summary = group_summary,
    exclusion_ledger = ledger,
    duplicate_ids = duplicate_ids,
    duplicate_policy = duplicate_policy,
    missing_policy = missing_policy,
    missing_outcome_rows = missing_outcomes,
    unique_missing_visits = unique_missing_visits,
    distinct_visit_valid = distinct_visit_valid,
    summary_role = summary_role,
    unit = analysis_unit
  ))
}

reference <- repair_waiting_table(
  municipal_raw_csv,
  duplicate_policy = "keep_first",
  missing_policy = "exclude_outcome"
)

stopifnot(identical(reference$duplicate_ids, "w05"))
stopifnot(nrow(reference$cleaned) == 9L)
stopifnot(nrow(reference$analysis) == 8L)
stopifnot(sum(is.na(reference$cleaned$wait_minutes)) == 1L)
stopifnot(identical(reference$exclusion_ledger$count, c(10L, 1L, 1L, 8L)))
stopifnot(identical(reference$exclusion_ledger$stage[3],
                    "retained rows with missing outcome"))
stopifnot(reference$missing_outcome_rows == 1L)
stopifnot(reference$unique_missing_visits == 1L)
stopifnot(isTRUE(reference$distinct_visit_valid))
stopifnot(identical(reference$summary_role,
                    "validated distinct-visit analysis"))
stopifnot(identical(reference$unit,
                    "one scheduled service visit; wait in minutes"))

expected_group_mean <- c(Central = 13.5, North = 31 / 3, South = 31 / 3)
expected_group_sd <- c(Central = sqrt(1 / 2), North = sqrt(13 / 3),
                       South = sqrt(7 / 3))
observed_group_mean <- setNames(
  reference$group_summary$mean_minutes,
  reference$group_summary$office
)
observed_group_sd <- setNames(
  reference$group_summary$sd_minutes,
  reference$group_summary$office
)
stopifnot(all(abs(observed_group_mean - expected_group_mean) <=
              1e-10 + 1e-8 * abs(expected_group_mean)))
stopifnot(all(abs(observed_group_sd - expected_group_sd) <=
              1e-10 + 1e-8 * abs(expected_group_sd)))
stopifnot(identical(reference$group_summary$n_recorded, c(2L, 3L, 3L)))
stopifnot(abs(mean(reference$analysis$wait_minutes) - 89 / 8) <=
            1e-10 + 1e-8 * abs(89 / 8))
```

The duplicate policy keeps the first of two field-for-field identical `w05` records and logs one removal. This is defensible because the declared key permits only one record per visit and the repeated record contains no competing information. A conflicting duplicate would be an unresolved data problem, so the function refuses it even under `"keep_first"`. The missing-outcome policy retains `w06` in the cleaned table and excludes it only from summaries requiring waiting time. The ledger therefore preserves its existence.

The accessible result table is:

| Office | Recorded visits used | Mean wait (minutes) | Sample SD (minutes) |
| --- | ---: | ---: | ---: |
| Central | 2 | 13.500 | 0.707 |
| North | 3 | 10.333 | 2.082 |
| South | 3 | 10.333 | 1.528 |

For a hand check, Central contributes waits \(494-480=14\) and \(523-510=13\) minutes, so its mean is \((14+13)/2=13.5\) minutes. North and South each total 31 minutes over three visits, although their SDs differ because the individual waits are arranged differently. Across all eight recorded, unique visits, the mean is \(89/8=11.125\) minutes.

**Alternative policies.** Keeping both exact `w05` rows treats one visit twice. It changes Central's raw-row diagnostic mean from 13.5 to \(40/3\approx13.333\) minutes and the raw-row overall mean from 11.125 to \(102/9\approx11.333\) minutes. The small numerical change does not make the policy acceptable: it violates the one-visit analysis unit. The returned metadata therefore labels this branch `"duplicate-retention diagnostic only"`, defines its row as one retained raw CSV record, and marks `distinct_visit_valid` false. Treating the blank called time as a zero-minute wait would change the estimand by inventing an outcome and would reduce the unique-row overall mean to \(89/9\approx9.889\) minutes. Excluding all of Central would avoid the missing cell but discard two observed waits and answer a different office-coverage question. The reference policy makes the least alteration justified by the literal record while exposing both losses.

```r
keep_all <- repair_waiting_table(
  municipal_raw_csv,
  duplicate_policy = "keep_all",
  missing_policy = "exclude_outcome"
)
keep_all_central <- keep_all$group_summary$mean_minutes[
  keep_all$group_summary$office == "Central"
]
stopifnot(abs(keep_all_central - 40 / 3) <=
            1e-10 + 1e-8 * abs(40 / 3))
stopifnot(abs(mean(keep_all$analysis$wait_minutes) - 102 / 9) <=
            1e-10 + 1e-8 * abs(102 / 9))
stopifnot(!keep_all$distinct_visit_valid)
stopifnot(anyDuplicated(keep_all$analysis$event_id) > 0L)
stopifnot(identical(keep_all$summary_role,
                    "duplicate-retention diagnostic only"))
stopifnot(identical(
  keep_all$unit,
  "one retained raw CSV row; duplicate keys may represent the same scheduled visit"
))
stopifnot(identical(
  keep_all$exclusion_ledger$stage[4],
  "diagnostic outcome rows"
))
stopifnot(identical(
  keep_all$exclusion_ledger$rule[4],
  "duplicate keys retained; not one row per distinct visit"
))
stopifnot(identical(keep_all$exclusion_ledger$stage[3],
                    "retained rows with missing outcome"))
stopifnot(keep_all$missing_outcome_rows == 1L)
stopifnot(keep_all$unique_missing_visits == 1L)

duplicate_missing_raw_csv <- paste(
  municipal_raw_csv,
  "w06,2026-04-06,Central,540,",
  sep = "\n"
)
duplicate_missing_keep_first <- repair_waiting_table(
  duplicate_missing_raw_csv,
  duplicate_policy = "keep_first",
  missing_policy = "exclude_outcome"
)
duplicate_missing_keep_all <- repair_waiting_table(
  duplicate_missing_raw_csv,
  duplicate_policy = "keep_all",
  missing_policy = "exclude_outcome"
)

stopifnot(identical(
  duplicate_missing_keep_first$exclusion_ledger$count,
  c(11L, 2L, 1L, 8L)
))
stopifnot(duplicate_missing_keep_first$missing_outcome_rows == 1L)
stopifnot(duplicate_missing_keep_first$unique_missing_visits == 1L)
stopifnot(duplicate_missing_keep_first$distinct_visit_valid)
stopifnot(sum(duplicate_missing_keep_first$exclusion_ledger$count[2:4]) ==
            duplicate_missing_keep_first$exclusion_ledger$count[1])

stopifnot(identical(
  duplicate_missing_keep_all$exclusion_ledger$count,
  c(11L, 0L, 2L, 9L)
))
stopifnot(duplicate_missing_keep_all$missing_outcome_rows == 2L)
stopifnot(duplicate_missing_keep_all$unique_missing_visits == 1L)
stopifnot(!duplicate_missing_keep_all$distinct_visit_valid)
stopifnot(sum(duplicate_missing_keep_all$exclusion_ledger$count[2:4]) ==
            duplicate_missing_keep_all$exclusion_ledger$count[1])
stopifnot(identical(
  duplicate_missing_keep_all$exclusion_ledger$stage[3],
  "retained rows with missing outcome"
))

zero_imputation_mean <- mean(c(reference$analysis$wait_minutes, 0))
stopifnot(abs(zero_imputation_mean - 89 / 9) <=
            1e-10 + 1e-8 * abs(89 / 9))
```

The duplicated-missing fixture makes the two denominators visible. Under `"keep_all"`, two retained raw rows have missing outcomes but both carry key `w06`, so they represent one unique missing visit; the ledger counts rows and says so. Under `"keep_first"`, two excess duplicate rows are removed (`w05` and the second `w06`), leaving one missing-outcome row for one unique missing visit. In both branches, duplicate removals plus missing-outcome rows plus analyzed outcome rows equal the 11 raw rows.

**Adverse input test.** The following literal edit makes the second `w05` record disagree on `called_minute`. The function stops instead of selecting one version by row order.

```r
conflicting_raw_csv <- sub(
  "w05,2026-04-06,Central,510,523\nw06",
  "w05,2026-04-06,Central,510,524\nw06",
  municipal_raw_csv,
  fixed = TRUE
)
conflict_message <- tryCatch(
  repair_waiting_table(
    conflicting_raw_csv,
    duplicate_policy = "keep_first",
    missing_policy = "exclude_outcome"
  ),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(conflict_message,
                    "a duplicated key has conflicting fields"))
```

**Bounded report.** After removing one exact duplicate key record and excluding one unique visit with an unrecorded called time from outcome summaries, eight unique synthetic visits remained. Their office means ranged from 10.333 minutes at North and South to 13.5 minutes at Central. Central had only two recorded outcomes, and its third unique visit was missing its outcome. These numbers describe the repaired fixture under the stated policy. They do not establish municipal service performance, a difference for future visits, or a cause of office differences.

### Rubric for R-07-P01 (20 points)

| Criterion | Points | Full-credit evidence in the reference analysis |
| --- | ---: | --- |
| Target and units | 4 | Names one scheduled visit as the unit, `event_id` as key, waiting time in minutes, and a finite descriptive target; avoids inference. |
| Schema, key, and missingness checks | 5 | Validates exact fields, dates, office labels, integer clock bounds, chronology, duplicate agreement, and missing outcome; records exclusions. |
| Correct transformations and hand checks | 5 | Computes called minus scheduled minute, produces correct office summaries, checks Central by hand, and asserts group and overall means. |
| Rerunnable function and adverse-input handling | 3 | Starts from literal raw CSV, exposes both policies, runs in a fresh session, and rejects a conflicting duplicate with a tested message. |
| Clear table and conclusion | 3 | Gives an accessible table with counts and units, compares alternatives, states the analysis set, and bounds the conclusion. |

The reference analysis earns 20/20: 4 for its declared visit-level target and units; 5 for its schema, key, time, and missingness validation; 5 for checked transformations and hand calculations; 3 for the raw-to-result function and conflicting-duplicate test; and 3 for its table and bounded report. A learner solution passes at 14 points or more only if it also has no concealed exclusion and does not use a duplicated record as though it were a second visit. A wrong analysis unit or hidden exclusion fails regardless of the arithmetic total.

## Source and provenance note

R API semantics used here were freshly checked against installed R 4.6.0 help on Linux. Successful execution establishes the recorded code paths and assertions only; it is not mathematical, scientific, or cross-platform certification. All prose, code, fixtures, exercise solutions, and the project reference analysis are original Math Atlas material released under CC BY-SA 4.0.
