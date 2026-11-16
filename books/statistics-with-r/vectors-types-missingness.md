
# When a Vector Lies: Types, Categories, Dates, and Missing Values

A column can look perfectly ordinary and still encode the wrong observations. The entries `"10"`, `"20"`, and `"10"` might be numbers trapped as text. A category called “advanced” might be placed before “beginner” by an accidental alphabetical rule. A missing result might vanish from an average without anyone noticing that the target changed. R will often carry out a calculation in all three situations. That makes understanding the object at least as important as knowing the command.

This chapter asks one question throughout: **when does an R vector preserve the meaning of the observations it stores?** We will connect the answer to imported ideas already established. `R-DEF-unit` names the entity or event represented by an observation; `R-DEF-variable` names a characteristic defined for every unit; `R-DEF-estimand` is the precise target quantity; `R-DEF-statistic` is a function of observed data; and `R-DEF-mechanism` describes how observations came to be recorded or missing. Under the imported `R-DEF-script`, a script makes these decisions inspectable. An `R-DEF-error` says that computation cannot continue as requested, but the absence of an error does not certify that the request was sensible. The imported `R-DEF-help` directs us to R's installed documentation when syntax is unfamiliar.

## The fixture ledger

Every dataset in this chapter is synthetic and was created for instruction. Its literal values are its canonical source; none describes real people or events.

| Fixture ID | Version and creator | One row represents | Variables and units | Rows | Missing code and exclusions |
| --- | --- | --- | --- | ---: | --- |
| `FX-R03-A` | version 1, Math Atlas | one declared response attempt | `row_id` (identifier), `points` (score points) | 4 | R `NA`; no row excluded |
| `FX-R03-B` | version 1, Math Atlas | one workshop checkpoint | `stage` (ordered category), `date` (Gregorian calendar date) | 3 | none; no row excluded |
| `FX-R03-C` | version 1, Math Atlas | one timed practice attempt | `unit_id` (identifier), `full_minutes` (minutes) | 6 | deliberately imposed R `NA` in investigation variants; no unit removed from the target |
| `FX-R03-D` | version 1, Math Atlas | one submitted task | `group` (A or B), `score` (points) | 8 | R `NA`; no row excluded from the audit |

The short vectors in Exercises 1, 3, 5, 6, and 7 are original exercise fixtures `FX-R03-E01`, `FX-R03-E03`, `FX-R03-E05`, `FX-R03-E06`, and `FX-R03-E07`, all version 1, Math Atlas. Their rows are the displayed entries, their meanings and units are stated in the exercises, `NA` is the only missing code, and no exclusions are authorized unless an exercise explicitly asks for an observed-value calculation. Synthetic data can reveal computational logic; it cannot support a claim about a real population.

## One vector, one atomic type

**Definition R-DEF-vector (vector).** An **atomic vector** in R is an ordered sequence of zero or more values stored under one atomic type. Its length is the number of positions. In this chapter, “vector” means an atomic vector unless stated otherwise.

The combine function `c()` creates a vector. The assignment arrow `<-` gives an object a name. `length()` reports the number of positions, and `typeof()` reports the underlying storage type. The suffix `L` asks R to make a whole number an integer; an ordinary value such as `2` has type `double`, R's usual type for numeric data.

The code uses `stopifnot()` as a self-check: if every condition inside is `TRUE`, execution continues; otherwise R stops with an error. Later, `identical(a, b)` checks that two objects have exactly the same contents and type. These checks turn a prediction into an executable claim.

```r
whole_counts <- c(2L, 5L, 8L)
measured_lengths <- c(2, 5.5, 8)
labels <- c("low", "middle", "high")
flags <- c(TRUE, FALSE, TRUE)

stopifnot(typeof(whole_counts) == "integer")
stopifnot(typeof(measured_lengths) == "double")
stopifnot(typeof(labels) == "character")
stopifnot(typeof(flags) == "logical")
stopifnot(length(measured_lengths) == 3L)
```

**Definition R-DEF-type (type).** A vector's **type** specifies how its values are represented and which primitive operations R can apply. The types most useful here are logical (`TRUE` or `FALSE`), integer, double, and character (text). “Numeric” is a broader everyday description: both integer and double vectors store numbers, although their exact R types differ.

A vector has one atomic type, not one type per position. When `c()` receives compatible atomic values of different types, R chooses a common type. That choice is called **coercion**.

**Claim R-CLAIM-vector-coercion (atomic coercion).** If atomic inputs to `c()` have different types, base R coerces them to a common type capable of representing the inputs. In the cases used here, logical values can become numbers and numbers can become character strings. **Status:** R 4.6.0 language behavior, verified against the installed `c` help and *An Introduction to R*, §2.6. **Boundary:** classes and lists have additional behavior not developed here.

```r
logical_and_integer <- c(TRUE, 2L)
integer_and_double <- c(2L, 5.5)
number_and_text <- c(10, "missing")

stopifnot(typeof(logical_and_integer) == "integer")
stopifnot(identical(logical_and_integer, c(1L, 2L)))
stopifnot(typeof(integer_and_double) == "double")
stopifnot(typeof(number_and_text) == "character")
stopifnot(identical(number_and_text, c("10", "missing")))
```

None of these conversions produces a warning. That silence is useful when the conversion is intended and dangerous when it is accidental. Before calculating, ask whether the resulting type matches the variable: arithmetic needs numerical measurements; labels generally need character data or a factor.

## Vectorized operations and the recycling trap

Arithmetic and comparisons usually operate position by position. If `score <- c(10, 20, 30, 40)`, then `score + 1` adds one to each position. A length-one value is an intentional, readable use of R's **recycling rule**: R repeats the shorter operand to match the longer one.

Longer short vectors are harder to see. Here two adjustments are repeated across four scores:

```r
score <- c(10, 20, 30, 40)
recycled_result <- score + c(1, 2)
stopifnot(identical(recycled_result, c(11, 22, 31, 42)))
```

R produces no warning because length 4 is an exact multiple of length 2. Yet perhaps the analyst meant four distinct adjustments and accidentally supplied only two.

**Claim R-CLAIM-recycling-boundary (recycling is not alignment).** Base R repeats a shorter operand during vectorized arithmetic and logical indexing. When the longer length is an exact multiple of the shorter length, this can occur without a warning. **Status:** R 4.6.0 language behavior, verified against the installed `Arithmetic` and `Extract` help and *An Introduction to R*, §§2.2 and 5.4.1. **Boundary:** recycling follows position, not unit identifiers; it cannot verify that observations correspond.

Our policy is strict: length one may represent one declared common constant; otherwise, vectors intended to align row by row must have equal lengths before the operation.

```r
score <- c(10, 20, 30, 40)
adjustment <- c(1, 2, 1, 2)
stopifnot(length(score) == length(adjustment))
adjusted_score <- score + adjustment
stopifnot(identical(adjusted_score, c(11, 22, 31, 42)))
```

This check catches an incomplete adjustment vector. It does not prove that the first adjustment belongs to the first score; keys and row validation will make that alignment question explicit in the next chapter.

## Selecting positions with logical vectors

A comparison such as `score >= 25` returns a logical vector with one result per score. Placing that vector inside square brackets selects positions where the result is `TRUE`. Before using a row-level logical index, check that its length equals the data vector's length; otherwise, indexing can recycle too.

```r
score <- c(10, 20, 30, 40)
keep <- score >= 25
stopifnot(identical(keep, c(FALSE, FALSE, TRUE, TRUE)))
stopifnot(length(keep) == length(score))
selected_score <- score[keep]
stopifnot(identical(selected_score, c(30, 40)))
```

The square brackets do not alter `score`; they return a selected vector. Position indexing such as `score[c(1L, 4L)]` is also possible, but a meaningful logical condition often documents the selection rule better than unexplained position numbers.

## Missing is a state, not a number

**Definition R-DEF-missingness (missingness).** **Missingness** means that the value of a defined variable for a declared unit is not observed in the available data. `NA` records that state in R. It is not zero, an empty string, or proof that the variable itself does not exist.

The reason a value is missing is part of the data-producing mechanism. A sensor may fail, a participant may skip a question, or a rule may make a measurement unavailable. Those reasons can carry information about the unseen value. Syntax alone cannot decide whether observed values represent the target units.

`is.na(x)` returns one logical flag per position. `!` means logical “not,” so `!is.na(x)` marks observed positions. In a logical context, `sum()` counts `TRUE` as 1 and `FALSE` as 0. `mean()` returns `NA` by default if a numeric vector contains `NA`; writing `na.rm = TRUE` explicitly asks it to remove missing positions before calculation.

## Worked example 1: four rows stay four rows

**Example 3.1 (Worked calculation).**

Fixture `FX-R03-A` has four declared attempts and a points value missing for row `r02`.

| Row ID | Points | Missing? | Included in complete-value mean? |
| --- | ---: | --- | --- |
| r01 | 2 | no | yes |
| r02 | `NA` | yes | no |
| r03 | 8 | no | yes |
| r04 | 10 | no | yes |

```r
# FX-R03-A: points are score points for four declared response attempts.
row_id <- c("r01", "r02", "r03", "r04")
x <- c(2, NA, 8, 10)

missing_flag <- is.na(x)
observed_flag <- !missing_flag
declared_rows <- length(x)
complete_count <- sum(observed_flag)
default_mean <- mean(x)
complete_mean <- mean(x, na.rm = TRUE)

stopifnot(length(row_id) == 4L)
stopifnot(identical(missing_flag, c(FALSE, TRUE, FALSE, FALSE)))
stopifnot(declared_rows == 4L)
stopifnot(complete_count == 3L)
stopifnot(sum(!is.na(x)) == 3L)
stopifnot(is.na(default_mean))
stopifnot(abs(complete_mean - 20 / 3) <= 1e-10 + 1e-8 * abs(20 / 3))
```

The complete-value mean is

\[
\frac{2+8+10}{3}=\frac{20}{3}\approx 6.667\text{ points}.
\]

The assertion uses `abs()`, the absolute-value function, to allow the small rounding tolerance required for non-integer numerical comparisons.

That calculation uses three observed values. The original data still concern four rows; the missing row belongs in the audit even though its score cannot enter the numerator.

**Claim R-CLAIM-missing-target (`na.rm` does not repair selection).** For a numeric vector with observed-position set \(O\), if \(|O|\geq 1\), `mean(x, na.rm = TRUE)` computes \(\sum_{i\in O}x_i/|O|\). It changes the calculation from all declared positions to the observed positions. It does not establish that those positions represent a larger target or reveal the missing values. **Status:** the computational identity is proved by the displayed numerator and denominator; the representativeness boundary follows from counterexamples in the guided investigation. **Hypotheses:** one or more values are observed, those entries are valid numerical values for their declared units, and `NA` is the only missing encoding.

If every position is missing, then \(|O|=0\). The proposed quotient has zero denominator and does not define a mathematical mean. R returns `NaN`, a special numeric result meaning “not a number,” for `mean(x, na.rm = TRUE)` in this case. The analysis must stop rather than report `NaN` as an observed-value mean. `NA_real_` below is an explicitly numeric missing value.

Comparing missing values requires care. `NA == NA`, `NA > 5`, and `NA != 0` all return `NA`: the truth of each comparison is unknown. Use `is.na()` to ask whether a position is missing. `all(flags)` is `TRUE` only when every entry in the logical vector `flags` is `TRUE`.

```r
one_observed <- c(NA_real_, 6)
partly_missing <- c(2, NA_real_, 8, 10)
all_missing <- c(NA_real_, NA_real_)

stopifnot(sum(!is.na(one_observed)) == 1L)
stopifnot(sum(!is.na(partly_missing)) == 3L)
stopifnot(sum(!is.na(all_missing)) == 0L)
stopifnot(mean(one_observed, na.rm = TRUE) == 6)
stopifnot(abs(mean(partly_missing, na.rm = TRUE) - 20 / 3) <=
          1e-10 + 1e-8 * abs(20 / 3))
stopifnot(is.nan(mean(all_missing, na.rm = TRUE)))

comparison_demo <- c(NA == NA, NA > 5, NA != 0)
stopifnot(all(is.na(comparison_demo)))
stopifnot(identical(is.na(c(4, NA)), c(FALSE, TRUE)))
```

This matters during selection. With `x[x > 5]`, the unknown comparison produces an `NA` in the result. If the policy is “keep observed values greater than 5,” state both conditions with `&`, the element-by-element logical “and.”

```r
x <- c(2, NA, 8, 10)
unsafe_keep <- x > 5
safe_keep <- !is.na(x) & x > 5

stopifnot(identical(unsafe_keep, c(FALSE, NA, TRUE, TRUE)))
stopifnot(identical(safe_keep, c(FALSE, FALSE, TRUE, TRUE)))
stopifnot(identical(x[safe_keep], c(8, 10)))
```

## Categories need labels, and sometimes order

**Definition R-DEF-factor (factor).** A **factor** is R's representation of a categorical variable: a vector of integer codes paired with a declared set of character labels called levels. An ordered factor additionally declares a ranking of those levels.

The factor constructor is `factor()`. Its first argument supplies observed labels. The `levels` argument declares allowed labels and their order. `levels()` retrieves that declaration; `as.character()` retrieves the visible label for each observation. `is.factor()` and `is.ordered()` return one `TRUE` or `FALSE` answer about the object's class.

For nominal categories such as blood group or route name, a ranking may be meaningless. For stages such as beginner, intermediate, advanced, order can be meaningful even though the distances between stages are not measured numerical distances.

```r
stage_text <- c("beginner", "advanced", "intermediate")
stage_unordered <- factor(
  stage_text,
  levels = c("beginner", "intermediate", "advanced")
)
stage_ordered <- factor(
  stage_text,
  levels = c("beginner", "intermediate", "advanced"),
  ordered = TRUE
)

stopifnot(is.factor(stage_unordered))
stopifnot(!is.ordered(stage_unordered))
stopifnot(is.ordered(stage_ordered))
stopifnot(identical(levels(stage_ordered),
                    c("beginner", "intermediate", "advanced")))
stopifnot(identical(as.character(stage_ordered), stage_text))
stopifnot(identical(stage_ordered[1] < stage_ordered[2], TRUE))
```

The last comparison is licensed by the declared order: beginner precedes advanced. It does not say advanced is “three times” beginner. For the unordered factor, only equality and inequality comparisons have categorical meaning; ordering it alphabetically would invent a scientific relation.

## Adverse case: factor codes masquerading as measurements

**Example 3.3 (Worked calculation).**

Here is one of R's most dangerous plausible-looking results:

`as.numeric()` requests a numeric representation of an object. For a factor it returns the internal codes, regardless of whether the printed labels happen to look like numbers.

```r
numeric_labels <- factor(c("10", "20", "10"))
wrong_values <- as.numeric(numeric_labels)

stopifnot(identical(wrong_values, c(1, 2, 1)))
stopifnot(!identical(wrong_values, c(10, 20, 10)))
```

The result `1, 2, 1` contains the factor's internal level codes. It does not recover measurements 10, 20, and 10.

**Claim R-CLAIM-factor-codes (factor codes are not measurements).** Applying `as.numeric()` to a factor returns its integer level codes. Those codes locate labels in the level table; they are not numerical measurements represented by the labels. **Status:** R 4.6.0 behavior, verified against the installed `factor` help; the adverse case executes above. **Hypotheses:** the object has class `factor`. **Boundary:** a separately declared numerical mapping can assign scientifically meaningful numbers to labels.

A named lookup vector makes that mapping visible. The text on the left is the category label; the number on the right is the intended value. Indexing by `as.character(numeric_labels)` selects by label. `unname()` removes the lookup names from the returned vector, and `anyNA()` reports whether any element is missing.

```r
numeric_labels <- factor(c("10", "20", "10"))
label_to_value <- c("10" = 10, "20" = 20)
recovered_values <- unname(label_to_value[as.character(numeric_labels)])

stopifnot(!anyNA(recovered_values))
stopifnot(identical(recovered_values, c(10, 20, 10)))
```

This procedure is safe only if every factor label has exactly one declared mapping. A missing result here would reveal an unmapped label rather than being silently accepted.

## Dates preserve calendar arithmetic

**Definition R-DEF-date (date).** An R object of class `Date` represents a Gregorian calendar date as a count of days relative to an origin. Its printed ISO form `YYYY-MM-DD` displays year, month, and day. A date is a calendar position, not a duration.

`as.Date()` converts valid date text. Supplying ISO text avoids ambiguity between month-day and day-month conventions. Subtracting two dates produces a `difftime` duration with a unit; for two `Date` values, R reports days. `diff()` subtracts each date from the next. `inherits(x, "Date")` checks the class, and `attr(x, "units")` retrieves the unit attribute. We inspect that attribute before `as.numeric(..., units = "days")` converts a duration to an ordinary number.

## Worked example 2: stages and elapsed days

**Example 3.2 (Worked calculation).**

Fixture `FX-R03-B` records three checkpoints. Stage labels have a declared order, while the dates determine actual elapsed time.

| Checkpoint | Stage | ISO date | Days since previous checkpoint |
| ---: | --- | --- | ---: |
| 1 | beginner | 2026-07-01 | — |
| 2 | intermediate | 2026-07-10 | 9 |
| 3 | advanced | 2026-07-24 | 14 |

```r
# FX-R03-B: one row per synthetic workshop checkpoint.
stage <- factor(
  c("beginner", "intermediate", "advanced"),
  levels = c("beginner", "intermediate", "advanced"),
  ordered = TRUE
)
checkpoint_date <- as.Date(c("2026-07-01", "2026-07-10", "2026-07-24"))

first_gap <- checkpoint_date[2] - checkpoint_date[1]
all_gaps <- diff(checkpoint_date)

stopifnot(inherits(checkpoint_date, "Date"))
stopifnot(is.ordered(stage))
stopifnot(identical(as.character(stage),
                    c("beginner", "intermediate", "advanced")))
stopifnot(as.character(attr(first_gap, "units")) == "days")
stopifnot(as.numeric(first_gap, units = "days") == 9)
stopifnot(identical(as.numeric(all_gaps, units = "days"), c(9, 14)))
```

The ordered labels say checkpoint 1's stage precedes checkpoint 2's stage. The dates, not the factor codes, say that 9 days elapsed. Category order and elapsed time answer different questions.

## R-03-I01

### Guided investigation: one missing value, three conclusions

**Question.** How much can an observed-value mean change when the number of missing values stays fixed but a different value is missing?

Fixture `FX-R03-C` has six known synthetic completion times: 4, 5, 6, 7, 8, and 18 minutes. The estimand for this controlled investigation is the finite six-unit mean. We will compare three observation mechanisms: the 4-minute value is missing, the 7-minute value is missing, or the 18-minute value is missing.

**Prediction.** If a low value is missing, the observed mean should exceed the full mean. If the high value is missing, it should fall below the full mean. Missing a middle value should have a smaller effect.

**Controls.** Keep the same six target units, one missing position, the missing code `NA`, and the same complete-value calculation. Vary only which value is hidden. Because this is a teaching construction, the full values are known and can serve as an oracle.

We create each incomplete vector directly. A square-bracket selection on the left of `<-`, as in `low_missing[1] <- NA`, replaces the chosen position. A name such as `low_missing` records the mechanism under comparison instead of hiding it inside a more advanced operation. Inside `c()`, forms such as `low =` attach readable case names to the results.

```r
# FX-R03-C: completion time in minutes for six declared attempts.
unit_id_i01 <- c("p01", "p02", "p03", "p04", "p05", "p06")
full_minutes <- c(4, 5, 6, 7, 8, 18)
full_mean <- mean(full_minutes)

low_missing <- full_minutes
low_missing[1] <- NA
middle_missing <- full_minutes
middle_missing[4] <- NA
high_missing <- full_minutes
high_missing[6] <- NA

observed_means <- c(
  low = mean(low_missing, na.rm = TRUE),
  middle = mean(middle_missing, na.rm = TRUE),
  high = mean(high_missing, na.rm = TRUE)
)
observed_counts <- c(
  low = sum(!is.na(low_missing)),
  middle = sum(!is.na(middle_missing)),
  high = sum(!is.na(high_missing))
)
mean_errors <- observed_means - full_mean

stopifnot(length(unit_id_i01) == 6L)
stopifnot(abs(full_mean - 8) <= 1e-10 + 1e-8 * abs(8))
stopifnot(identical(observed_counts, c(low = 5L, middle = 5L, high = 5L)))
stopifnot(all(abs(observed_means - c(low = 8.8, middle = 8.2, high = 6)) <=
              1e-10 + 1e-8 * abs(c(low = 8.8, middle = 8.2, high = 6))))
stopifnot(all(abs(mean_errors - c(low = 0.8, middle = 0.2, high = -2)) <=
              1e-10 + 1e-8 * abs(c(low = 0.8, middle = 0.2, high = -2))))
```

| Missing known value (minutes) | Observed count | Observed mean (minutes) | Observed mean minus full mean (minutes) |
| ---: | ---: | ---: | ---: |
| 4 | 5 | 8.8 | 0.8 |
| 7 | 5 | 8.2 | 0.2 |
| 18 | 5 | 6.0 | -2.0 |

**Interpretation.** Every observed-value mean uses five entries, so the denominator alone cannot explain the differences. The identity of the missing unit matters. The 18-minute value has the most influence here, and hiding it lowers the mean by 2 minutes. This finite example proves that equal missing-value counts do not imply equal distortion.

**Failure and boundary.** Real investigations seldom reveal the missing values, so we usually cannot compute the full mean or its error. Observed data alone also do not tell us which missingness mechanism generated them: many unseen values are compatible with the same recorded vector. The correct response is to document the target, missingness counts and reasons, compare groups where relevant, and limit conclusions. Specialist methods for missing data require additional assumptions and belong beyond this chapter.

Your investigation report should contain the question, prediction, controlled comparison, code or hand calculation, the four-column table, interpretation, and boundary. A 10-point guide awards 2 points for the target and units, 2 for explicit missingness mechanisms, 2 for correct calculations, 2 for comparing direction and size rather than counts alone, and 2 for a conclusion that does not claim the hidden values are recoverable. A report that silently changes the six-unit target cannot earn the target or conclusion points. A complete reference response appears with the solutions.

## A working audit before calculation

Before treating a vector as data, ask:

1. What unit does each position represent, and are aligned vectors the same length?
2. Does `typeof()` or `class()` match the variable's meaning?
3. Did coercion turn measurements into text or logical flags into numbers?
4. Is a short vector being recycled, and if so is it a declared scalar constant?
5. Which positions are `NA`, why are they missing, and what denominator does the statistic use?
6. Are categorical labels nominal or ordered, and were levels declared deliberately?
7. Are apparent numbers factor codes, labels, measurements, dates, or durations?

This audit does not replace statistical judgment. It makes the assumptions visible enough to challenge.

## Exercises

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

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

</details>

## R-03-E01

**Exercise 3.1**

Predict the result and `typeof()` for each expression without running it: (a) `c(TRUE, FALSE, 3L)`, (b) `c(2L, 3.5)`, and (c) `c(2, "3")`. Then run the expressions and explain which result poses the greatest risk if the vector is meant to contain measurements.

<details>
<summary>Hint 1</summary>

**Hint.** Find a single type that can represent every input in each call; remember that a character vector prints numerical-looking text without making it numeric.

</details>
<details>
<summary>Hint 2</summary>

Logical values can become integers and integers doubles; any character input makes an atomic vector character.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E02

**Exercise 3.2**

Using `x <- c(2, NA, 8, 10)`, construct a logical vector that selects observed values at least 8 points. Check the index length, return the selected values, and explain why `x >= 8` alone is not the complete policy.

<details>
<summary>Hint 1</summary>

**Hint.** Combine `!is.na(x)` with the comparison using `&`.

</details>
<details>
<summary>Hint 2</summary>

The missing comparison remains unknown until an explicit observed-value mask excludes it.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E03

**Exercise 3.3**

For `z <- c(NA, 0, 5)`, predict `z == NA`, `z == 0`, and `is.na(z)`. Which expression correctly identifies the missing position, and why does equality fail?

<details>
<summary>Hint 1</summary>

**Hint.** A comparison involving an unknown value has an unknown truth value.

</details>
<details>
<summary>Hint 2</summary>

Equality with an unknown value has unknown truth; the dedicated missingness predicate answers a different question.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E04

**Exercise 3.4**

A study defines its target as the mean score for five registered submissions. The recorded vector is `c(6, 8, NA, 9, 7)`. Calculate the complete-value mean and state its denominator. Then explain why `na.rm = TRUE` does not by itself estimate the declared five-submission mean without an additional assumption about the missing score.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the statistic you can compute from the estimand that still includes the unobserved submission.

</details>
<details>
<summary>Hint 2</summary>

The four observed values total thirty, while the fifth unknown value still belongs to the declared target.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E05

**Exercise 3.5**

The factor `dose_label <- factor(c("5", "10", "5"), levels = c("5", "10"))` records dose labels in milligrams. Show what `as.numeric(dose_label)` returns, then recover `c(5, 10, 5)` with an explicit named mapping. Add a check that no label was left unmapped.

<details>
<summary>Hint 1</summary>

**Hint.** Index `c("5" = 5, "10" = 10)` with `as.character(dose_label)`.

</details>
<details>
<summary>Hint 2</summary>

Factor integer codes are level positions; the named mapping must cover every observed dose label.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E06

**Exercise 3.6**

The labels `small`, `medium`, and `large` describe shirt sizes, while `red`, `green`, and `blue` describe colors. Construct a deliberately ordered size factor and an unordered color factor. State which `<` comparison is meaningful and why declaring order still does not give a numerical distance between sizes.

<details>
<summary>Hint 1</summary>

**Hint.** Supply `levels` in scientific order and use `ordered = TRUE` only for size.

</details>
<details>
<summary>Hint 2</summary>

Ordering establishes rank without assigning numerical distances between sizes.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E07

**Exercise 3.7**

Convert the ISO strings `2026-02-27`, `2026-03-02`, and `2026-03-10` to `Date` values. Calculate consecutive elapsed times in days, including the month boundary. Verify the units before converting the differences to numbers.

<details>
<summary>Hint 1</summary>

**Hint.** Use `as.Date()`, then `diff()`; inspect `attr(gaps, "units")`.

</details>
<details>
<summary>Hint 2</summary>

Subtract the calendar dates, check the days unit, and only then drop the difference object's class.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-03-E08

**Exercise 3.8**

Fixture `FX-R03-D` has groups `c("A","A","A","A","B","B","B","B")` and scores `c(4, NA, 6, 7, 10, 11, NA, NA)` points. For each group, report declared rows, observed scores, missing proportion, and complete-value mean. Does the difference between observed means establish a difference between the two groups' full four-row means? Give a bounded conclusion and one useful follow-up question about the missingness mechanism.

<details>
<summary>Hint 1</summary>

**Hint.** Build a group mask, then combine it with `!is.na(score)`. Audit denominators before comparing means.

</details>
<details>
<summary>Hint 2</summary>

Report each group's missing fraction and observed denominator before comparing the incomplete means.

</details>
<details>
<summary>Solution</summary>

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

</details>

Complete solutions and the guided investigation reference response are available at [Solutions for Chapter 3](solutions-vectors-types-missingness.md).


## R-03-E09

**Exercise 3.9**

An original version-1 synthetic table has two declared temperature readings, both NA, in degrees Celsius. Predict the observed count and explain why `sum(x, na.rm = TRUE)` can be zero without any observed zero temperature. What should a report say before presenting a mean?

<details>
<summary>Hint 1</summary>

After removing the missing entries, the observed vector is empty.

</details>
<details>
<summary>Hint 2</summary>

An empty sum has an additive identity, but an observed mean has no positive denominator here.

</details>
<details>
<summary>Solution</summary>

The observed count is zero. Removal leaves numeric(0), whose sum is zero by R's convention. Both temperatures remain unknown, so that zero is not a measured temperature. The report should state that two readings were expected, neither was recorded, and no observed-value mean is available. Reporting zero degrees would invent observations. A summary function should distinguish this empty analysis set from a nonempty set whose recorded values happen to sum to zero.

</details>

## R-03-E10

**Exercise 3.10**

Four synthetic category rows have labels `c("low", "high", NA, "low")`. Their allowed ordered levels are low, middle and high. Give all three category counts and the missing count. Distinguish the unused middle level from the unknown category of the missing row.

<details>
<summary>Hint 1</summary>

A known admissible category can have zero recorded instances.

</details>
<details>
<summary>Hint 2</summary>

The missing row cannot be assigned to any category without added information.

</details>
<details>
<summary>Solution</summary>

The counts are two low, zero middle, one high and one missing. Middle is a known allowed label without an observed instance; the missing entry is an observation with unknown label. For example:

```r
level_data <- factor(c("low", "high", NA, "low"),
                     levels = c("low", "middle", "high"), ordered = TRUE)
level_counts <- table(level_data, useNA = "always")
stopifnot(identical(as.integer(level_counts), c(2L, 0L, 1L, 1L)))
```

The missing count reconciles the four rows. Declared ordering supplies rank without numerical distance.

</details>

## Sources and authorship

R behavior in this chapter was checked against R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24), §§2.2, 2.5–2.7, 4, and 5.4.1, and the installed R 4.6.0 base help pages for `c`, `Comparison`, `Extract`, `NA`, `factor`, `Date`, `Ops.Date`, and `mean`. These sources establish software semantics, not representativeness of observed units. The statistical boundaries are demonstrated by the finite counterexamples in the chapter.

All prose, code, fixtures, the investigation, and exercises are original Math Atlas material under CC BY-SA 4.0. No human review is claimed in this draft.

## Summary

Representation matters before arithmetic begins. Atomic types, factor levels, dates and logical indices determine which operations describe the intended variable. Missing values remain unknown measurements, while an unused category or empty group is a different data state. Report the observed denominator alongside any summary and retain the declared target when outcomes are absent.
