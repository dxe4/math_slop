
# Solutions: When a Vector Lies

These solutions make each type, denominator, unit, and missing-value policy explicit. A numerical result is only part of an answer: the reasoning must say which positions entered the calculation and what the result can describe.

This document runs independently in a fresh R process. Its fixtures are literal copies of the chapter's original synthetic data. `FX-R03-A` has four response-attempt rows with points `2, NA, 8, 10`; `FX-R03-B` has three workshop-checkpoint rows with ordered stages and ISO dates; `FX-R03-C` has six practice-attempt rows with complete times `4, 5, 6, 7, 8, 18` minutes; and `FX-R03-D` has eight submitted-task rows with group and score. Each is version 1, created by Math Atlas. R `NA` is the only missing code, no target row is excluded, and the values are instructional rather than scientific evidence. Exercise fixtures `FX-R03-E01`, `FX-R03-E03`, `FX-R03-E05`, `FX-R03-E06`, and `FX-R03-E07` have the meanings, units, rows, and missingness stated in their solutions below and the same version, creator, and provenance.

```r
# Independent fixture initialization for the solutions document.
fx_a_row_id <- c("r01", "r02", "r03", "r04")
fx_a_points <- c(2, NA, 8, 10)

fx_b_stage <- c("beginner", "intermediate", "advanced")
fx_b_date_text <- c("2026-07-01", "2026-07-10", "2026-07-24")

fx_c_unit_id <- c("p01", "p02", "p03", "p04", "p05", "p06")
fx_c_full_minutes <- c(4, 5, 6, 7, 8, 18)

fx_d_group <- c("A", "A", "A", "A", "B", "B", "B", "B")
fx_d_score <- c(4, NA, 6, 7, 10, 11, NA, NA)

stopifnot(length(fx_a_row_id) == 4L, length(fx_a_points) == 4L)
stopifnot(length(fx_b_stage) == 3L, length(fx_b_date_text) == 3L)
stopifnot(length(fx_c_unit_id) == 6L, length(fx_c_full_minutes) == 6L)
stopifnot(length(fx_d_group) == 8L, length(fx_d_score) == 8L)
```

## R-03-I01

### Reference response: one missing value, three conclusions

The target is the finite mean completion time for the same six declared attempts. The complete fixture has total time

\[
4+5+6+7+8+18=48\text{ minutes},
\]

so its mean is \(48/6=8\) minutes. I predict that hiding 4 will raise the observed mean, hiding 18 will lower it, and hiding 7 will have a smaller effect because 7 is close to the full mean.

The controlled mechanisms each replace exactly one known value with `NA`. The target units, full values, number missing, missing code, and complete-value calculation remain fixed. Only the missing position changes.

```r
# FX-R03-C reference analysis: one missing position in each case.
full_mean <- mean(fx_c_full_minutes)

low_missing <- fx_c_full_minutes
low_missing[1] <- NA
middle_missing <- fx_c_full_minutes
middle_missing[4] <- NA
high_missing <- fx_c_full_minutes
high_missing[6] <- NA

observed_count <- c(
  low = sum(!is.na(low_missing)),
  middle = sum(!is.na(middle_missing)),
  high = sum(!is.na(high_missing))
)
observed_mean <- c(
  low = mean(low_missing, na.rm = TRUE),
  middle = mean(middle_missing, na.rm = TRUE),
  high = mean(high_missing, na.rm = TRUE)
)
error_minutes <- observed_mean - full_mean

stopifnot(abs(full_mean - 8) <= 1e-10 + 1e-8 * abs(8))
stopifnot(identical(observed_count, c(low = 5L, middle = 5L, high = 5L)))
stopifnot(all(abs(observed_mean - c(low = 8.8, middle = 8.2, high = 6)) <=
              1e-10 + 1e-8 * abs(c(low = 8.8, middle = 8.2, high = 6))))
stopifnot(all(abs(error_minutes - c(low = 0.8, middle = 0.2, high = -2)) <=
              1e-10 + 1e-8 * abs(c(low = 0.8, middle = 0.2, high = -2))))
```

| Missing known value (minutes) | Observed count | Observed mean (minutes) | Observed mean minus full mean (minutes) |
| ---: | ---: | ---: | ---: |
| 4 | 5 | 8.8 | 0.8 |
| 7 | 5 | 8.2 | 0.2 |
| 18 | 5 | 6.0 | -2.0 |

The prediction is confirmed for this fixture. Removing the 4-minute value leaves \(44/5=8.8\) minutes. Removing 7 leaves \(41/5=8.2\). Removing 18 leaves \(30/5=6\). The denominator is five every time, but the errors have different magnitudes and directions. Therefore the proportion missing does not determine how the observed mean differs from the full mean.

This conclusion has a deliberate boundary. We can measure the errors only because the synthetic exercise first supplies all six values. In an actual incomplete dataset, the hidden values and full mean would generally be unknown. The observed vector cannot establish whether missing values tend to be high, low, or similar to observed values. It can support an audit of missing counts and documented reasons; stronger recovery requires assumptions and methods beyond this chapter.

Under the 10-point guide, this response earns 2 for naming the six-attempt mean and minutes, 2 for varying only the missing position, 2 for the verified table, 2 for comparing both direction and magnitude, and 2 for refusing to claim that unseen real values are recoverable. Reproducible code alone would not earn the interpretation points.

## R-03-E01

The common type in (a) is integer. Logical values can be represented as integers, with `TRUE` becoming 1 and `FALSE` becoming 0, so the result is `c(1L, 0L, 3L)`. In (b), the common type is double because 3.5 cannot be represented as a whole-number integer. In (c), the common type is character, so both entries become text.

```r
# FX-R03-E01: three small vectors used only to inspect coercion.
answer_a <- c(TRUE, FALSE, 3L)
answer_b <- c(2L, 3.5)
answer_c <- c(2, "3")

stopifnot(typeof(answer_a) == "integer")
stopifnot(identical(answer_a, c(1L, 0L, 3L)))
stopifnot(typeof(answer_b) == "double")
stopifnot(identical(answer_b, c(2, 3.5)))
stopifnot(typeof(answer_c) == "character")
stopifnot(identical(answer_c, c("2", "3")))
```

The third result poses the greatest immediate risk for intended measurements. It prints plausible digits, but arithmetic such as `mean(answer_c)` is not defined for a character vector. More subtly, a later conversion might accept some labels and turn others into missing values. The correct repair begins by finding why text entered the measurement vector, rather than coercing it blindly.

## R-03-E02

The policy contains two conditions: a selected value must be observed and must be at least 8 points. `&` applies both conditions position by position.

```r
x <- fx_a_points
observed_at_least_8 <- !is.na(x) & x >= 8
stopifnot(length(observed_at_least_8) == length(x))
selected <- x[observed_at_least_8]

stopifnot(identical(observed_at_least_8,
                    c(FALSE, FALSE, TRUE, TRUE)))
stopifnot(identical(selected, c(8, 10)))
```

The comparison `x >= 8` alone returns `c(FALSE, NA, TRUE, TRUE)`. The second result is unknown because the score itself is unknown. Indexing with that vector would retain an `NA` placeholder. Adding `!is.na(x)` makes the requested policy explicit and makes the second flag `FALSE`.

## R-03-E03

`z == NA` returns three missing logical values, including at the first position. The question “is an unknown value equal to this value?” has an unknown answer. `z == 0` returns `NA, TRUE, FALSE`: the first comparison is still unknown, the second succeeds, and the third fails. Only `is.na(z)` asks the intended question directly.

```r
# FX-R03-E03: values are abstract numbers; NA is the sole missing code.
z <- c(NA, 0, 5)
comparison_to_na <- z == NA
comparison_to_zero <- z == 0
missing_positions <- is.na(z)

stopifnot(all(is.na(comparison_to_na)))
stopifnot(identical(comparison_to_zero, c(NA, TRUE, FALSE)))
stopifnot(identical(missing_positions, c(TRUE, FALSE, FALSE)))
```

Treating `NA == NA` as `TRUE` would incorrectly claim knowledge of an unknown value. Treating it as `FALSE` would incorrectly claim inequality. R preserves the uncertainty with `NA`.

## R-03-E04

The observed scores total \(6+8+9+7=30\) points across four complete submissions, so the complete-value mean is \(30/4=7.5\) points.

```r
# Five registered submissions; score is measured in points.
registered_score <- c(6, 8, NA, 9, 7)
observed_count <- sum(!is.na(registered_score))
observed_total <- sum(registered_score, na.rm = TRUE)
observed_mean <- mean(registered_score, na.rm = TRUE)

one_observed_score <- c(NA_real_, 6)
all_missing_score <- c(NA_real_, NA_real_)

stopifnot(length(registered_score) == 5L)
stopifnot(observed_count == 4L)
stopifnot(observed_total == 30)
stopifnot(abs(observed_mean - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
stopifnot(sum(!is.na(one_observed_score)) == 1L)
stopifnot(mean(one_observed_score, na.rm = TRUE) == 6)
stopifnot(sum(!is.na(registered_score)) == 4L)
stopifnot(abs(mean(registered_score, na.rm = TRUE) - 7.5) <=
          1e-10 + 1e-8 * abs(7.5))
stopifnot(sum(!is.na(all_missing_score)) == 0L)
stopifnot(is.nan(mean(all_missing_score, na.rm = TRUE)))
```

The statistic describes the four observed submissions. The declared estimand concerns all five and would be \((30+m)/5\), where \(m\) is the missing score. For example, if \(m=0\), the five-submission mean is 6; if \(m=10\), it is 8. Both complete datasets produce the same recorded vector. Thus `na.rm = TRUE` performs arithmetic on observed values but does not identify the full mean. An assumption connecting the missing submission to the observed ones would be additional information, not an option supplied to `mean()`.

The executable boundary also shows why the complete-value calculation requires at least one observed value. With one observed score, the observed-value mean is that score, 6. The exercise vector is partly missing and has mean 7.5 over four observed scores. With no observed scores, the mathematical expression would divide zero by zero; it is undefined, and R returns `NaN`. An analyst should stop at that boundary rather than present `NaN` as a numerical summary.

## R-03-E05

The factor levels are `"5"` and `"10"`. Their internal codes are 1 and 2, so `as.numeric()` produces `1, 2, 1`. The named mapping states that label `"5"` means 5 milligrams and label `"10"` means 10 milligrams.

```r
# FX-R03-E05: each entry is a declared dose label in milligrams.
dose_label <- factor(c("5", "10", "5"), levels = c("5", "10"))
wrong_dose <- as.numeric(dose_label)
dose_map_mg <- c("5" = 5, "10" = 10)
dose_mg <- unname(dose_map_mg[as.character(dose_label)])

stopifnot(identical(wrong_dose, c(1, 2, 1)))
stopifnot(!anyNA(dose_mg))
stopifnot(identical(dose_mg, c(5, 10, 5)))
```

The `anyNA()` check matters because an undeclared label would yield `NA` when used as a lookup name. The map makes the conversion reviewable and keeps the measurement unit visible.

## R-03-E06

Size has a defensible order; color does not. The observed order of entries does not establish either factor's level order, so we state the levels explicitly.

```r
# FX-R03-E06: shirt size is ordinal; color is nominal.
size <- factor(
  c("medium", "small", "large"),
  levels = c("small", "medium", "large"),
  ordered = TRUE
)
color <- factor(
  c("red", "green", "blue"),
  levels = c("red", "green", "blue")
)

stopifnot(is.ordered(size))
stopifnot(!is.ordered(color))
stopifnot(identical(size[2] < size[1], TRUE))
stopifnot(identical(as.character(color), c("red", "green", "blue")))
```

`size[2] < size[1]` is meaningful because small precedes medium in the declared order. A `<` comparison between red and green is not scientifically meaningful, so we do not ask R to perform it. Even for size, the ranks supply no arithmetic distance: the gap from small to medium need not equal a gap from medium to large, and factor codes must not be averaged as measurements.

## R-03-E07

The three ISO strings convert to calendar dates. The first gap crosses from February into March; calendar arithmetic handles the boundary and returns 3 days. The second gap is 8 days.

```r
# FX-R03-E07: three Gregorian calendar dates; no time of day is intended.
date_text <- c("2026-02-27", "2026-03-02", "2026-03-10")
dates <- as.Date(date_text)
gaps <- diff(dates)

stopifnot(inherits(dates, "Date"))
stopifnot(as.character(attr(gaps, "units")) == "days")
gap_days <- as.numeric(gaps, units = "days")
stopifnot(identical(gap_days, c(3, 8)))
```

Subtracting printed day numbers by hand would fail at the month boundary: \(2-27\) is not an elapsed time. Converting to `Date` tells R to apply calendar representation, while checking the `difftime` unit prevents an unlabeled number from entering the report.

## R-03-E08

Each group has four declared rows. Group A has three observed scores and one missing score, for missing proportion \(1/4=0.25\). Its observed total is 17 and observed mean is \(17/3\approx5.667\) points. Group B has two observed scores and two missing scores, for missing proportion \(2/4=0.50\). Its observed mean is \((10+11)/2=10.5\) points.

```r
# FX-R03-D: one row per submitted task; score is measured in points.
group_a_rows <- fx_d_group == "A"
group_b_rows <- fx_d_group == "B"
group_a_observed <- group_a_rows & !is.na(fx_d_score)
group_b_observed <- group_b_rows & !is.na(fx_d_score)

a_declared <- sum(group_a_rows)
a_observed <- sum(group_a_observed)
b_declared <- sum(group_b_rows)
b_observed <- sum(group_b_observed)

audit_a <- c(
  declared_rows = a_declared,
  observed_scores = a_observed,
  missing_proportion = (a_declared - a_observed) / a_declared,
  observed_mean_points = mean(fx_d_score[group_a_observed])
)
audit_b <- c(
  declared_rows = b_declared,
  observed_scores = b_observed,
  missing_proportion = (b_declared - b_observed) / b_declared,
  observed_mean_points = mean(fx_d_score[group_b_observed])
)

stopifnot(all(abs(audit_a - c(4, 3, 0.25, 17 / 3)) <=
              1e-10 + 1e-8 * abs(c(4, 3, 0.25, 17 / 3))))
stopifnot(all(abs(audit_b - c(4, 2, 0.5, 10.5)) <=
              1e-10 + 1e-8 * abs(c(4, 2, 0.5, 10.5))))
```

| Group | Declared rows | Observed scores | Missing proportion | Observed mean (points) |
| --- | ---: | ---: | ---: | ---: |
| A | 4 | 3 | 0.25 | 5.667 |
| B | 4 | 2 | 0.50 | 10.5 |

A bounded conclusion is: “Among recorded scores, group B's mean was 10.5 points and group A's was about 5.667 points. Missingness was greater in B, 50% versus 25%, so this observed-score difference does not establish the direction or size of the difference between the two full four-row means.”

To see why, denote A's missing score by \(a\) and B's two missing scores by \(b_1,b_2\). The full means are \((17+a)/4\) and \((21+b_1+b_2)/4\). Their comparison depends on unseen values. A useful follow-up question is: “Were tasks more likely to lack a recorded score after a difficult attempt, and did that recording process differ by group?” That question concerns the missingness mechanism rather than merely rerunning `mean(..., na.rm = TRUE)`.


## R-03-E09

The observed count is zero. Removal leaves numeric(0), whose sum is zero by R's convention. Both temperatures remain unknown, so that zero is not a measured temperature. The report should state that two readings were expected, neither was recorded, and no observed-value mean is available. Reporting zero degrees would invent observations. A summary function should distinguish this empty analysis set from a nonempty set whose recorded values happen to sum to zero.

## R-03-E10

The counts are two low, zero middle, one high and one missing. Middle is a known allowed label without an observed instance; the missing entry is an observation with unknown label. For example:

```r
level_data <- factor(c("low", "high", NA, "low"),
                     levels = c("low", "middle", "high"), ordered = TRUE)
level_counts <- table(level_data, useNA = "always")
stopifnot(identical(as.integer(level_counts), c(2L, 0L, 1L, 1L)))
```

The missing count reconciles the four rows. Declared ordering supplies rank without numerical distance.

## Sources and authorship

R behavior in these solutions was checked against R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24), §§2.2, 2.5–2.7, 4, and 5.4.1, and the installed R 4.6.0 base help pages for `c`, `Comparison`, `Extract`, `NA`, `factor`, `Date`, `Ops.Date`, and `mean`. All prose, code, fixtures, and solutions are original Math Atlas material under CC BY-SA 4.0. No human review is claimed in this draft.

Return to [Chapter 3](vectors-types-missingness.md).
