# Rows, rules, and joins

A table can run without an error and still answer the wrong question. Suppose an analyst reports a mean waiting time from a table called `visits`. Before trusting the number, we need to know which visits survived the filters, what each row represents, whether minutes were converted correctly, and whether a join copied any observations. Those are statistical questions expressed through data operations.

This chapter develops a habit that will serve throughout the book: accompany every transformed table with invariants. An invariant is a fact that should remain true, such as “each visit ID occurs once,” or a deliberately recorded change, such as “two ineligible visits were excluded.” We will select columns, filter rows, create variables, summarize groups, and join tables using base R. Each operation will be tied to a declared target.

## Before changing a table

Earlier chapters introduced vectors and their types, missing values, factors, dates, schemas, provenance, keys, empirical distributions, quantiles, sample variance, and standard deviation. Here we need three of those ideas explicitly.

A **schema** states what the columns mean and which types, units, ranges, and missing values are allowed. A **key** is one or more columns whose values uniquely identify rows in the table where uniqueness is claimed. **Missingness** is the fact that an intended value is unavailable; `NA` records that state in R. Removing an `NA` changes the observed denominator and does not show that the retained rows represent the original target.

The order of work matters:

1. State the unit represented by a row and the target collection of units.
2. State the schema, key, unit, missingness, and exclusion rules.
3. Validate the source against those statements.
4. Transform the data.
5. Check which invariants were preserved and record every intended change.

Validation detects the errors named in the checks. It cannot establish that every recorded value is true.

## Worked example 1: six retained visits

**Example 6.1 (Worked calculation).**

Our first fixture is the original literal synthetic dataset `MA-R06-WAIT-v1`, created for Math Atlas. It has eight rows, one per service visit. `visit_id` is the unique key; `site_code` is a categorical site label; `eligible` states whether the visit belongs to the predeclared service target; and `wait_min` is waiting time in minutes. `NA_real_` is the allowed missing code for an unrecorded numeric waiting time. There are no other missing codes. No row represents a real person or institution, so numerical patterns are illustrations rather than empirical evidence.

In R, `data.frame()` combines equal-length vectors as columns; `stringsAsFactors = FALSE` keeps supplied text columns as character vectors. The notation `name = value` names each column, `c()` combines values into a vector, and the suffix `L` marks whole numbers as integers. The `$` operator extracts a named column. `nrow()` and `ncol()` report table dimensions, while `names()` reports column names. Functions beginning with `is.`, such as `is.numeric()`, test a stated property. `is.na()` marks each missing entry, `anyNA()` detects any missing value, and `is.finite()` rejects missing or infinite numeric values. `anyDuplicated()` returns zero when it finds no duplicate, and `identical()` requires exact agreement of values and types. The operator `%in%` checks membership, `!` reverses logical values, and `all()` requires every element of a logical vector to be true. `stopifnot()` checks every condition supplied to it and stops on a false condition. We use these operations only after declaring what the checks mean: exactly eight rows and four columns, the expected column names, character IDs and site codes, logical eligibility values, numeric waiting times, a complete and unique key, allowed site codes, and only one missing outcome.

```r
visits <- data.frame(
  visit_id = c("w01", "w02", "w03", "w04", "w05", "w06", "w07", "w08"),
  site_code = c("A", "A", "B", "B", "B", "C", "C", "C"),
  eligible = c(TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE),
  wait_min = c(12, 18, 20, 40, NA_real_, 24, 30, 36),
  stringsAsFactors = FALSE
)

stopifnot(nrow(visits) == 8L, ncol(visits) == 4L)
stopifnot(identical(names(visits),
                    c("visit_id", "site_code", "eligible", "wait_min")))
stopifnot(is.character(visits$visit_id), is.character(visits$site_code))
stopifnot(is.logical(visits$eligible), is.numeric(visits$wait_min))
stopifnot(!anyNA(visits$visit_id), anyDuplicated(visits$visit_id) == 0L)
stopifnot(!anyNA(visits$site_code), !anyNA(visits$eligible))
stopifnot(all(visits$site_code %in% c("A", "B", "C")))
stopifnot(sum(is.na(visits$wait_min)) == 1L)
stopifnot(all(is.finite(visits$wait_min[!is.na(visits$wait_min)])))
stopifnot(all(visits$wait_min[!is.na(visits$wait_min)] >= 0))
```

The membership result from `%in%` always contains `TRUE` or `FALSE`, never `NA`. That property helps when validating finite lists of allowed codes.

**Definition R-DEF-selection (selection).** A selection rule chooses rows or variables from a source table. Its statistical meaning consists of the rule, when and why it was chosen, the IDs retained and excluded, and the population or finite collection to which the resulting summary refers.

“Select” is often used specifically for columns and “filter” for rows. Both are selections under this definition. Selecting a useful set of columns is not harmless if it drops the key or the variable that explains eligibility. Filtering is not merely housekeeping: it defines the rows contributing to a result.

For this example, the target is eligible visits with an observed waiting time. That is a complete-case description for the outcome within the eligible visits, not a description of all eligible visits. The logical operator `&` means elementwise “and.” A data frame uses `table[row_index, column_index, drop = FALSE]`: the expression before the comma chooses rows, the expression after it chooses columns, and `drop = FALSE` keeps the result as a data frame. Before using this extraction, we declare that the key, group, and outcome columns must survive.

```r
keep_row <- visits$eligible & !is.na(visits$wait_min)
keep_columns <- c("visit_id", "site_code", "wait_min")
retained <- visits[keep_row, keep_columns, drop = FALSE]

exclusion_ledger <- data.frame(
  visit_id = c("w04", "w05"),
  reason = c("outside predeclared eligibility rule",
             "eligible but waiting time unrecorded"),
  stringsAsFactors = FALSE
)

stopifnot(identical(retained$visit_id,
                    c("w01", "w02", "w03", "w06", "w07", "w08")))
stopifnot(identical(exclusion_ledger$visit_id,
                    visits$visit_id[!keep_row]))
stopifnot(nrow(retained) + nrow(exclusion_ledger) == nrow(visits))
stopifnot(anyDuplicated(retained$visit_id) == 0L)
stopifnot(!anyNA(retained$wait_min))
```

The retained IDs are `w01`, `w02`, `w03`, `w06`, `w07`, and `w08`. The ledger distinguishes an eligibility exclusion from a missing outcome. That distinction matters: `w04` was outside the target by design, while `w05` remains an eligible visit about which this complete-case mean has no information.

### A missing comparison is not a rejection

The direct comparison `visits$wait_min < 25` returns `NA` at `w05`, because R cannot determine whether an unavailable time is below 25. If that logical vector is used directly as a row index, R includes a row of missing values at the undecidable position. That behavior is useful because it does not quietly turn “unknown” into “false,” but it is usually not the intended analysis table.

A complete-case threshold rule should state both parts: the outcome must be observed, and the observed value must satisfy the threshold. The left side of `&` below is `FALSE` for the missing row, so the completed rule contains only `TRUE` and `FALSE`. Before extracting rows, we validate that fact with `anyNA()`.

```r
threshold_unknown <- visits$wait_min < 25
safe_threshold <- !is.na(visits$wait_min) & visits$wait_min < 25

stopifnot(is.na(threshold_unknown[5]))
stopifnot(!anyNA(safe_threshold))
stopifnot(identical(visits$visit_id[safe_threshold],
                    c("w01", "w02", "w03", "w06")))
```

This threshold would still be an outcome-dependent selection. It describes recorded waits below 25 minutes; it must not be relabeled as the mean of all waits. Making the R filter well-defined solves a computational ambiguity, not the statistical target problem.

Creating or replacing a column is often called *mutating* a table. Assignment through `$`, as in `retained$wait_seconds <- ...`, creates a named column. Multiplication of a numeric vector by one number is elementwise, so multiplying minutes by 60 gives seconds. The row count, order, and key should be unchanged, while the unit and numeric scale deliberately change.

```r
ids_before_mutation <- retained$visit_id
retained$wait_seconds <- retained$wait_min * 60

stopifnot(identical(retained$visit_id, ids_before_mutation))
stopifnot(nrow(retained) == 6L)
stopifnot(identical(retained$wait_seconds,
                    c(720, 1080, 1200, 1440, 1800, 2160)))
stopifnot(all(retained$wait_seconds / 60 == retained$wait_min))
```

There are still six visit rows. The mean is \(140/6=23.333\ldots\) minutes, or 1,400 seconds. Conversion has changed the numerical unit but not the visits being averaged.

## From rows to groups

**Definition R-DEF-group-summary (group summary).** A group summary maps the rows in each declared group to one or more values and carries enough metadata—at least the group label, contributing row count, variable unit, and missingness policy—to interpret those values.

`table(x, useNA = "ifany")` counts occurrences of each value in `x` and shows an `NA` category if one occurs. `tapply(X, INDEX, FUN)` splits the values `X` by `INDEX` and applies the named summary operation `FUN` to each nonempty group. Here the filtering step already established that no outcome is missing, so `mean` and `sum` use the same six rows. `as.integer()` and `as.numeric()` convert the table-like results to ordinary integer and numeric vectors, and `names()` obtains the group labels.

```r
group_counts <- table(retained$site_code, useNA = "ifany")
group_means <- tapply(retained$wait_min, retained$site_code, mean)
group_sums <- tapply(retained$wait_min, retained$site_code, sum)

group_summary <- data.frame(
  site_code = names(group_counts),
  n_complete = as.integer(group_counts),
  mean_wait_min = as.numeric(group_means),
  stringsAsFactors = FALSE
)

stopifnot(identical(group_summary$site_code, c("A", "B", "C")))
stopifnot(identical(group_summary$n_complete, c(2L, 1L, 3L)))
stopifnot(all(group_summary$mean_wait_min == c(15, 20, 30)))
stopifnot(all(as.numeric(group_sums) == c(30, 20, 90)))
stopifnot(sum(group_summary$n_complete) == nrow(retained))
```

The exact reporting table is:

| Site | Complete eligible visits | Mean wait (minutes) |
|---|---:|---:|
| A | 2 | 15 |
| B | 1 | 20 |
| C | 3 | 30 |

Site C's mean does not count equally with site B's mean when the target is a visit-level mean: C contributes three visits and B contributes one.

**Claim R-CLAIM-weighted-mean (proved here).** Suppose \(n\) observed values are partitioned into nonoverlapping groups \(G_1,\ldots,G_K\), every row belongs to exactly one group, \(n_k=|G_k|>0\), and every group and the overall calculation use the same missingness policy. If \(\bar{x}_k\) is the mean in group \(k\), then

\[
\bar{x}=\frac{1}{n}\sum_{k=1}^{K} n_k\bar{x}_k.
\]

To prove the identity, substitute \(\bar{x}_k=(1/n_k)\sum_{i\in G_k}x_i\). Then \(n_k\bar{x}_k=\sum_{i\in G_k}x_i\). Because the groups form a partition, adding those group sums counts every retained value exactly once. Dividing by \(n=\sum_k n_k\) gives the overall mean.

This is an algebraic identity about a fixed set of rows, not an inferential theorem. It can fail as an audit if the group calculations use different missingness rules, if a row belongs to several groups, or if some retained rows have no group. The unweighted mean of group means answers a different question: it gives each group equal weight.

There are three denominators worth keeping separate in the waiting example. Seven visits meet the eligibility rule, six of those have recorded waits, and eight visits occur in the source. The group counts sum to six because their summaries use the complete eligible rows. If one site used `na.rm = TRUE` while another reported `NA`, the displayed group means would no longer form a common partition summary. If missing site labels were silently omitted by `table()`, its counts could also sum to fewer than six. Explicit `useNA = "ifany"` and a count-sum assertion make that discrepancy visible.

```r
raw_mean_min <- mean(retained$wait_min)
weighted_mean_min <- sum(group_summary$n_complete *
                         group_summary$mean_wait_min) /
                     sum(group_summary$n_complete)
equal_group_mean_min <- mean(group_summary$mean_wait_min)

stopifnot(abs(raw_mean_min - 140 / 6) <=
            1e-10 + 1e-8 * abs(140 / 6))
stopifnot(abs(weighted_mean_min - raw_mean_min) <=
            1e-10 + 1e-8 * abs(raw_mean_min))
stopifnot(abs(equal_group_mean_min - 65 / 3) <=
            1e-10 + 1e-8 * abs(65 / 3))
stopifnot(abs(equal_group_mean_min - raw_mean_min) > 1)
```

The visit-weighted mean is \(23.333\ldots\) minutes. The equal-group mean is \(21.667\ldots\) minutes. Neither formula is intrinsically wrong; they correspond to different weighting questions. The row-level target determines which is relevant.

## Worked example 2: a validated lookup join

**Example 6.2 (Worked calculation).**

Information often arrives in separate tables. The original literal synthetic fixture `MA-R06-JOIN-v1`, created for Math Atlas, contains six observation rows and a three-row site lookup. One observation is one service encounter, keyed by `obs_id`; `wait_min` is minutes. The lookup has one row per site and maps `site_code` to `region` and planned staff count. Missing values are forbidden in both join columns. The provenance is the literal code below, version 1; the values describe no real organization. `is.finite()` returns true for ordinary finite numeric values and false for missing values or infinities. We use it to enforce the declared outcome range before the join.

**Definition R-DEF-join-key (join key).** A join key is the column or ordered set of columns used to decide which rows from two tables match. Its uniqueness must be stated separately for each table. Those two uniqueness statements determine the intended join cardinality: one-to-one, many-to-one, one-to-many, or many-to-many.

Here `site_code` repeats in the observation table because several encounters can occur at one site. It must be unique in the lookup, so the intended relationship is many observations to one lookup row. Every observation key must be matched. These are validation conditions to check before joining.

```r
observations <- data.frame(
  obs_id = c("o01", "o02", "o03", "o04", "o05", "o06"),
  site_code = c("A", "A", "B", "B", "C", "C"),
  wait_min = c(8, 12, 40, 50, 18, 22),
  stringsAsFactors = FALSE
)

site_lookup <- data.frame(
  site_code = c("A", "B", "C"),
  region = c("North", "Central", "South"),
  planned_staff = c(3L, 5L, 4L),
  stringsAsFactors = FALSE
)

stopifnot(nrow(observations) == 6L, nrow(site_lookup) == 3L)
stopifnot(!anyNA(observations$obs_id),
          anyDuplicated(observations$obs_id) == 0L)
stopifnot(!anyNA(observations$site_code),
          !anyNA(site_lookup$site_code))
stopifnot(anyDuplicated(site_lookup$site_code) == 0L)
stopifnot(all(observations$site_code %in% site_lookup$site_code))
stopifnot(all(is.finite(observations$wait_min)),
          all(observations$wait_min >= 0))
```

`match(x, table)` returns the position of the first matching value from `table` for each value of `x`, or `NA` when there is no match. Because we have already proved uniqueness and completeness for the lookup key, each position identifies exactly one lookup row. Indexing the lookup columns by those positions and assigning them to a copy of `observations` produces a validated left join. Unlike relying on an unspecified post-merge order, this construction intentionally retains the observation order. `sort()` arranges each ID vector in ascending order, so exact comparison of the sorted vectors checks the ID multiset independently of order.

```r
lookup_row <- match(observations$site_code, site_lookup$site_code)
stopifnot(!anyNA(lookup_row))

joined <- observations
joined$region <- site_lookup$region[lookup_row]
joined$planned_staff <- site_lookup$planned_staff[lookup_row]

stopifnot(nrow(joined) == nrow(observations))
stopifnot(identical(joined$obs_id, observations$obs_id))
stopifnot(identical(sort(joined$obs_id), sort(observations$obs_id)))
stopifnot(anyDuplicated(joined$obs_id) == 0L)
stopifnot(identical(joined$region,
                    c("North", "North", "Central", "Central", "South", "South")))
stopifnot(identical(joined$planned_staff, c(3L, 3L, 5L, 5L, 4L, 4L)))
```

The join preserves six rows and the complete ID multiset. That is what a many-to-one enrichment should do. It adds attributes to each encounter; it does not create new encounters.

### Cardinality predicts the output unit

Cardinality is a property of the actual join columns, not of a table in the abstract. A person table might be unique by `person_id` but repeat by `postcode`; joining it by postcode does not inherit the uniqueness of person ID.

| Left join-key pattern | Right join-key pattern | Relationship | Consequence for a matching key |
|---|---|---|---|
| unique | unique | one-to-one | at most one output row per row on either side |
| repeated | unique | many-to-one | each left row receives at most one right match |
| unique | repeated | one-to-many | a left row can expand into several output rows |
| repeated | repeated | many-to-many | every matching pair is produced |

“Many-to-one” does not guarantee that every left row has a match. Completeness is a separate check. A left join can preserve an unmatched observation and fill its added attributes with `NA`; an inner join would omit it. Either policy can be deliberate, but it changes what downstream code sees and therefore belongs in the analysis specification.

Missing join keys also need an explicit policy. Base R's `match()` regards `NA` as matching `NA`, and `merge()` follows that matching behavior unless told that `NA` is incomparable for a one-column join. Our fixture forbids missing site codes, which avoids interpreting two unknown sites as the same site. When missing keys are scientifically possible, assign a documented unmatched policy instead of accepting the software default by accident.

A join may use several columns. For example, if site descriptions change by calendar year, the defensible join key might be (`site_code`, `year`) on both tables. Each component then needs a compatible type and meaning, and the combined rows—not necessarily either column alone—must satisfy the stated uniqueness. Adding a needed key component repairs ambiguity; concatenating fields into a string without separators can create new collisions and is not a substitute for validating the component columns.

## Adverse case: duplicated keys create observations

**Example 6.3 (Worked calculation).**

Now suppose the lookup accidentally contains two rows for site B. Perhaps one describes a scheduled service model and another a walk-in model, but neither includes a date or service-mode column that would distinguish which applies to an encounter. The lookup's `site_code` is no longer a key.

`try(expression, silent = TRUE)` evaluates an operation while containing an expected error; on error it returns an object whose class includes `"try-error"`. `inherits(x, "try-error")` checks for that class. `duplicated()` marks each occurrence that repeats a value already seen. We use these operations only to verify the deliberate adverse case. In an actual analysis, the error should stop the pipeline and prompt a source repair.

```r
broken_lookup <- data.frame(
  site_code = c("A", "B", "B", "C"),
  service_model = c("appointments", "appointments", "walk-in", "appointments"),
  stringsAsFactors = FALSE
)

invalid_key_check <- try(
  stopifnot(anyDuplicated(broken_lookup$site_code) == 0L),
  silent = TRUE
)

stopifnot(inherits(invalid_key_check, "try-error"))
stopifnot(identical(broken_lookup$site_code[duplicated(broken_lookup$site_code)],
                    "B"))
```

The audit identifies B as the duplicate. This is rejection before analysis, not an attempt to guess which B row is correct.

For diagnosis only, we now deliberately perform the invalid join. `merge(x, y, by, all.x = TRUE, sort = FALSE)` matches rows using the named `by` column and retains all rows from `x`. When multiple rows match on both sides, it produces every matching pair. The observation table has two B rows and the lookup has two B rows, so the B portion becomes \(2\times2=4\) rows. That is a many-to-many expansion.

```r
expanded <- merge(
  observations,
  broken_lookup,
  by = "site_code",
  all.x = TRUE,
  sort = FALSE
)

raw_mean <- mean(observations$wait_min)
expanded_mean <- mean(expanded$wait_min)
expanded_id_counts <- table(expanded$obs_id)

stopifnot(nrow(expanded) == 8L)
stopifnot(all(expanded_id_counts[c("o01", "o02", "o05", "o06")] == 1L))
stopifnot(all(expanded_id_counts[c("o03", "o04")] == 2L))
stopifnot(raw_mean == 25)
stopifnot(expanded_mean == 30)
```

The original encounter mean is 25 minutes. After expansion it is 30 minutes, because the 40- and 50-minute B encounters each appear twice. The code `mean(data$wait_min)` could remain textually unchanged if `data` were replaced by the expanded table, while the analysis unit silently changed from encounter to encounter–lookup pairing. The join therefore changed the scientific question and implicitly reweighted site B.

Deleting one of the B lookup rows merely to restore six rows would invent a rule. Defensible repairs depend on provenance: correct a genuine duplicate, add the missing date or service-mode component to both join keys, or refrain from joining when the intended match cannot be identified. A post-join `unique()` is also unsafe: the paired rows differ in `service_model`, and even exact duplicates can signal a source problem that should be audited rather than erased.

## A join audit you can reuse

Before a join, write down:

- the row unit and key of each table;
- the exact join columns and whether missing keys are allowed;
- the expected cardinality on each side;
- the unmatched-key policy;
- the expected output row count and preserved ID multiset.

After a join, verify those expectations. A row-count check alone is insufficient: one row might be dropped while another is duplicated. Comparing the IDs and their counts exposes that cancellation. If a lookup key is unique, validate uniqueness before using `match()`, because `match()` returns only the first matching position and would otherwise conceal later duplicates.

Also check units and meanings of added columns. Two tables can both contain a column called `capacity` while one records people and the other records rooms. Matching keys cannot repair an incompatible variable definition. When both inputs contain a non-key column with the same name, `merge()` normally adds suffixes; that mechanical rename is a prompt to resolve the semantic conflict, not evidence that the columns are commensurable.

Selection needs an analogous ledger. Record the original target, rule, timing, retained IDs, excluded IDs with reasons, and missingness policy. A statement such as “among the six eligible visits with recorded waits” keeps the denominator visible. A statement such as “the average wait was 23.3 minutes” hides both the missing eligible visit and the ineligible exclusion.

## What these operations can and cannot establish

Selection, transformation, grouping, and joins are deterministic operations on recorded tables. When their inputs and rules are fixed, their output can be reproduced exactly. That does not show that the measurements are correct, the missing visit resembles the observed visits, or the encounters represent a larger population.

The safe chain is concrete:

- selection preserves required identifiers and records every lost row;
- unit transformation preserves rows and states the new unit;
- group summaries retain counts and one common missingness policy;
- visit-level means weight group means by contributing visit counts;
- enrichment joins validate cardinality, unmatched keys, output count, and ID multiplicities.

Chapter 7 will package such sequences into functions with explicit input and output contracts. Later chapters will use the selection ledger when assessing multiplicity and missingness sensitivity. Those later tools cannot reconstruct IDs or target changes that were discarded here.

## Exercises

## R-06-E01

**Exercise 6.1**

A table `calls` has columns `call_id`, `office`, `duration_min`, and `agent_note`. The analysis needs office-specific mean duration, and notes contain no analytic variable. Give a base-R column selection that retains what is necessary, and explain why selecting only `office` and `duration_min` weakens the audit even though the mean can still be computed.

<details>
<summary>Hint 1</summary>

**Hint.** Name the row key before naming the columns.

</details>
<details>
<summary>Hint 2</summary>

Retain call_id with office and duration so every derived value remains traceable.

</details>
<details>
<summary>Solution</summary>

The row unit is one call and `call_id` is its key. Office and duration are needed for the requested summary. The smallest audit-ready selection therefore retains `call_id`, `office`, and `duration_min`; `agent_note` may be omitted because it has no role in the stated analysis.

Before selection, the code checks the declared key and allowed nonnegative minute values. It then selects the three named columns and checks that the ID vector is exactly preserved.

```r
calls <- data.frame(
  call_id = c("c01", "c02", "c03", "c04"),
  office = c("North", "North", "South", "South"),
  duration_min = c(6, 10, 12, 8),
  agent_note = c("resolved", "transfer", "resolved", "follow-up"),
  stringsAsFactors = FALSE
)

stopifnot(!anyNA(calls$call_id), anyDuplicated(calls$call_id) == 0L)
stopifnot(all(is.finite(calls$duration_min)), all(calls$duration_min >= 0))

analysis_calls <- calls[, c("call_id", "office", "duration_min"),
                        drop = FALSE]

stopifnot(identical(analysis_calls$call_id, calls$call_id))
stopifnot(identical(names(analysis_calls),
                    c("call_id", "office", "duration_min")))
```

With only `office` and `duration_min`, R can calculate means, but a reviewer cannot tie a suspicious row back to its source record or compare retained and excluded ID sets. The numerical operation would survive while the audit trail would not.

</details>

## R-06-E02

**Exercise 6.2**

A modified waiting fixture has IDs `w01` through `w08`, eligibility values `TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE`, and waiting times `12, 18, 20, 10, NA, 24, 30, 36` minutes. An analyst filters it only to `wait_min < 25` and reports the result as “the mean wait for eligible visits.” Identify two separate changes to the target and write an accurate description of the resulting rows. Treat the missing comparison as neither true nor false for filtering purposes.

<details>
<summary>Hint 1</summary>

**Hint.** Check eligibility and ask whether the filter depends on the outcome being summarized.

</details>
<details>
<summary>Hint 2</summary>

The outcome filter may retain an ineligible short visit and exclude eligible long visits.

</details>
<details>
<summary>Solution</summary>

The rule `wait_min < 25` makes two target changes. First, it does not include the eligibility condition, so it can retain an ineligible visit if its wait is below 25. Second, it selects using the outcome itself, changing a mean-wait question into a description restricted to waits below 25 minutes. A missing comparison produces `NA`; safe row filtering must make the desired `FALSE` explicit with `!is.na(wait_min)`.

The literal fixture below contains one ineligible short wait and one eligible missing wait. Before filtering, it checks the unique key and exact missing count. The output checks show that the naive filter includes `w04`, the ineligible row.

```r
visits <- data.frame(
  visit_id = c("w01", "w02", "w03", "w04", "w05", "w06", "w07", "w08"),
  eligible = c(TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE),
  wait_min = c(12, 18, 20, 10, NA_real_, 24, 30, 36),
  stringsAsFactors = FALSE
)

stopifnot(anyDuplicated(visits$visit_id) == 0L)
stopifnot(sum(is.na(visits$wait_min)) == 1L)

short_recorded <- !is.na(visits$wait_min) & visits$wait_min < 25
filtered <- visits[short_recorded, , drop = FALSE]

stopifnot(identical(filtered$visit_id, c("w01", "w02", "w03", "w04", "w06")))
stopifnot(any(!filtered$eligible))
```

An accurate description is: “the mean among recorded visits with waits below 25 minutes, regardless of eligibility.” If the analyst intended eligible visits, the rule should also include `eligible`, but the result would still describe only recorded eligible waits below 25 minutes. It cannot be labeled the mean for all eligible visits.

</details>

## R-06-E03

**Exercise 6.3**

For recorded waits of 2.5, 4, and 7 minutes, create seconds and verify algebraically and in R that the mean in seconds is 60 times the mean in minutes. State which properties of the rows should remain invariant.

<details>
<summary>Hint 1</summary>

**Hint.** Multiplication acts on each vector element.

</details>
<details>
<summary>Hint 2</summary>

Keep identifiers, ordering, eligibility and missingness unchanged while changing only measurement units.

</details>
<details>
<summary>Solution</summary>

If \(x_i\) is a wait in minutes, the corresponding number of seconds is \(z_i=60x_i\). For three observations,

\[
\bar z=\frac{1}{3}\sum_{i=1}^3 60x_i
=60\left(\frac{1}{3}\sum_{i=1}^3x_i\right)=60\bar x.
\]

The code creates the seconds column by elementwise multiplication. It checks the exact converted values, the inverse conversion, row count, and preserved IDs before comparing means.

```r
waits <- data.frame(
  visit_id = c("t01", "t02", "t03"),
  wait_min = c(2.5, 4, 7),
  stringsAsFactors = FALSE
)

stopifnot(anyDuplicated(waits$visit_id) == 0L)
stopifnot(all(is.finite(waits$wait_min)), all(waits$wait_min >= 0))

ids_before <- waits$visit_id
waits$wait_seconds <- 60 * waits$wait_min

stopifnot(identical(waits$wait_seconds, c(150, 240, 420)))
stopifnot(all(waits$wait_seconds / 60 == waits$wait_min))
stopifnot(identical(waits$visit_id, ids_before), nrow(waits) == 3L)
stopifnot(abs(mean(waits$wait_seconds) - 60 * mean(waits$wait_min)) <=
            1e-10 + 1e-8 * abs(60 * mean(waits$wait_min)))
```

The mean is 4.5 minutes and 270 seconds. The row count, row order, IDs, and missingness pattern should be invariant. The values and unit deliberately change.

</details>

## R-06-E04

**Exercise 6.4**

Using site labels `A, A, B, B, B` and complete waiting times `10, 14, 9, 12, 21` minutes, calculate each group count and mean with `table()` and `tapply()`. Present a group summary that states the outcome unit and missingness policy.

<details>
<summary>Hint 1</summary>

**Hint.** Counts are 2 and 3; check that they add to five.

</details>
<details>
<summary>Hint 2</summary>

The two group totals are twenty four and forty two; divide each by its own row count.

</details>
<details>
<summary>Solution</summary>

The policy is to use all five rows because every outcome and group label is observed. `table(x, useNA = "ifany")` counts group labels and would display a missing-label category if present. `tapply(X, INDEX, FUN)` applies `FUN` separately within each group. Before summarizing, the code checks five finite nonnegative waits and no missing group.

```r
grouped_waits <- data.frame(
  visit_id = c("g01", "g02", "g03", "g04", "g05"),
  site = c("A", "A", "B", "B", "B"),
  wait_min = c(10, 14, 9, 12, 21),
  stringsAsFactors = FALSE
)

stopifnot(anyDuplicated(grouped_waits$visit_id) == 0L)
stopifnot(!anyNA(grouped_waits$site), !anyNA(grouped_waits$wait_min))
stopifnot(all(is.finite(grouped_waits$wait_min)),
          all(grouped_waits$wait_min >= 0))

counts <- table(grouped_waits$site, useNA = "ifany")
means <- tapply(grouped_waits$wait_min, grouped_waits$site, mean)
summary_table <- data.frame(
  site = names(counts),
  n_complete = as.integer(counts),
  mean_wait_min = as.numeric(means),
  stringsAsFactors = FALSE
)

stopifnot(identical(summary_table$site, c("A", "B")))
stopifnot(identical(summary_table$n_complete, c(2L, 3L)))
stopifnot(all(summary_table$mean_wait_min == c(12, 14)))
stopifnot(sum(summary_table$n_complete) == 5L)
```

Site A's mean is 12 minutes and site B's is 14 minutes. The report must also show counts 2 and 3 because the two means represent unequal numbers of visits. Its missingness statement is “all five outcomes and all five site labels observed; no rows removed.”

</details>

## R-06-E05

**Exercise 6.5**

For the groups in R-06-E04, recover the overall mean from the group counts and means. Then compute the equal-group mean and explain why it differs. Show the weighted-mean identity from sums rather than citing it.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply each group mean by the number of contributing rows.

</details>
<details>
<summary>Hint 2</summary>

The overall numerator is the sum of group totals, whereas equal-group weighting changes each group's influence.

</details>
<details>
<summary>Solution</summary>

Site A contributes \(10+14=24=2(12)\) minutes. Site B contributes \(9+12+21=42=3(14)\) minutes. Thus the overall mean is

\[
\frac{24+42}{2+3}
=\frac{2(12)+3(14)}{5}=13.2\text{ minutes}.
\]

The equal-group mean is \((12+14)/2=13\) minutes. It is smaller because it gives the lower-mean two-visit group the same weight as the higher-mean three-visit group.

The code independently recomputes counts, group sums, and means, then checks both weighting formulas.

```r
site <- c("A", "A", "B", "B", "B")
wait_min <- c(10, 14, 9, 12, 21)

stopifnot(!anyNA(site), !anyNA(wait_min), length(site) == length(wait_min))

counts_e05 <- table(site)
sums_e05 <- tapply(wait_min, site, sum)
means_e05 <- tapply(wait_min, site, mean)
weighted_e05 <- sum(as.integer(counts_e05) * as.numeric(means_e05)) /
                sum(counts_e05)
equal_group_e05 <- mean(as.numeric(means_e05))

stopifnot(all(as.numeric(sums_e05) == c(24, 42)))
stopifnot(abs(weighted_e05 - mean(wait_min)) <=
            1e-10 + 1e-8 * abs(mean(wait_min)))
stopifnot(abs(weighted_e05 - 13.2) <= 1e-10 + 1e-8 * abs(13.2))
stopifnot(equal_group_e05 == 13)
```

The 0.2-minute difference comes only from weighting. The derivation works because the groups partition the same complete cases; with different missingness policies or overlapping groups, this audit identity would not apply.

</details>

## R-06-E06

**Exercise 6.6**

An encounter table has IDs `e1, e2, e3, e4` and site codes `X, X, Y, Z`. A lookup has site codes `X, Y, Z` exactly once. Classify the cardinality, list the pre-join checks, and use `match()` to add regions `East, West, North` while proving that the encounter rows and order were preserved.

<details>
<summary>Hint 1</summary>

**Hint.** Uniqueness is required in the lookup, not in the encounter's site column.

</details>
<details>
<summary>Hint 2</summary>

Validate unique lookup keys and complete matches, then compare encounter IDs and their order.

</details>
<details>
<summary>Solution</summary>

The relationship is many encounters to one lookup row: X repeats among encounters, while every lookup site is unique. Required checks are a unique complete encounter key, a complete lookup key, uniqueness of the lookup site code, no missing join keys, and no unmatched encounter site. After joining, verify the same row count, ID order, ID multiset, and ID uniqueness.

`match(x, table)` returns the first position of each `x` value in `table`. That behavior is safe here only after lookup uniqueness has been checked.

```r
encounters <- data.frame(
  encounter_id = c("e1", "e2", "e3", "e4"),
  site_code = c("X", "X", "Y", "Z"),
  stringsAsFactors = FALSE
)
regions <- data.frame(
  site_code = c("X", "Y", "Z"),
  region = c("East", "West", "North"),
  stringsAsFactors = FALSE
)

stopifnot(!anyNA(encounters$encounter_id),
          anyDuplicated(encounters$encounter_id) == 0L)
stopifnot(!anyNA(encounters$site_code), !anyNA(regions$site_code))
stopifnot(anyDuplicated(regions$site_code) == 0L)
stopifnot(all(encounters$site_code %in% regions$site_code))

region_row <- match(encounters$site_code, regions$site_code)
joined_e06 <- encounters
joined_e06$region <- regions$region[region_row]

stopifnot(!anyNA(region_row))
stopifnot(nrow(joined_e06) == nrow(encounters))
stopifnot(identical(joined_e06$encounter_id, encounters$encounter_id))
stopifnot(identical(sort(joined_e06$encounter_id),
                    sort(encounters$encounter_id)))
stopifnot(anyDuplicated(joined_e06$encounter_id) == 0L)
stopifnot(identical(joined_e06$region,
                    c("East", "East", "West", "North")))
```

All four encounter rows remain, in their original order. X repeating on the encounter side is expected and does not violate the encounter key, which is `encounter_id`.

</details>

## R-06-E07

**Exercise 6.7**

A lookup key is `X, Y, Y`, while encounter keys are `X, Z`. Detect both the duplicated lookup key and the unmatched encounter key in base R. Explain why neither “take the first match” nor “drop unmatched rows” is an acceptable silent policy.

<details>
<summary>Hint 1</summary>

**Hint.** Use `duplicated()` for one audit and `%in%` for the other.

</details>
<details>
<summary>Hint 2</summary>

A repeated lookup key creates ambiguous mapping; an unmatched encounter has no supplied region.

</details>
<details>
<summary>Solution</summary>

`duplicated(x)` marks occurrences already seen. Negating membership, `!x %in% table`, identifies values in `x` with no match in `table`. Both operators produce logical vectors, so indexing returns the problematic values. The checks below assert the exact audit results.

```r
lookup_key <- c("X", "Y", "Y")
encounter_key <- c("X", "Z")

duplicate_lookup_keys <- lookup_key[duplicated(lookup_key)]
unmatched_encounter_keys <- encounter_key[!(encounter_key %in% lookup_key)]

stopifnot(identical(duplicate_lookup_keys, "Y"))
stopifnot(identical(unmatched_encounter_keys, "Z"))
stopifnot(anyDuplicated(lookup_key) == 3L)
```

Taking the first Y match hides an unresolved ambiguity and makes output depend on lookup row order. Dropping Z changes the encounter target and denominator. A defensible workflow stops, investigates the source, repairs the join key if possible, and reruns the checks. If unmatched encounters are intentionally allowed, the report must declare a left-join missing-attribute policy and preserve Z rather than silently discard it.

</details>

## R-06-E08

**Exercise 6.8**

A report says, “The average resolution time was 18 minutes for all eight cases.” The source began with eight case IDs. One ineligible case was removed, one eligible case had `NA` resolution time, and a broken many-to-many join then duplicated two retained case rows. Repair the conclusion as far as the information permits and specify the validation work required before any numerical mean can be reported.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the intended target, the complete-case limitation, and the invalid join.

</details>
<details>
<summary>Hint 2</summary>

The mean is unsupported until the joined records and eligible observed analysis set are reconciled.

</details>
<details>
<summary>Solution</summary>

No numerical mean is presently defensible. The analyzed table has eight rows but only six distinct eligible cases with recorded outcomes: one original case was outside the eligibility target, one eligible outcome was missing, and two retained case rows were copied by an invalid many-to-many join. Its eight rows therefore cannot represent all eight original cases. Even a displayed arithmetic mean would weight those duplicated cases twice.

A bounded conclusion before repairing the join is:

> The source contained eight cases. The intended descriptive target excluded one ineligible case, and one eligible case had an unrecorded resolution time. A duplicated join key then copied two retained cases, so the joined table does not have one row per case. No case-level mean is reported until the join is repaired and the retained ID set is revalidated.

The required work is to verify the original eight-ID key; preserve separate reasons for the ineligible and missing-outcome rows; identify the intended complete-case target; check join-key completeness and uniqueness on each side; resolve the many-to-many ambiguity from provenance rather than arbitrary row deletion; and prove after joining that retained row count, ID multiset, and ID multiplicities equal their pre-join values. Then the report can say “among the eligible cases with recorded resolution times” and give a checked mean in minutes. It still cannot claim the missing eligible case had the observed mean.

The small code fragment below illustrates the decisive post-join audit. It declares the expected retained IDs and a deliberately broken output ID vector, then verifies that duplicated IDs and multiset inequality are detected. `sort()` puts values in a common order for multiset comparison; `identical()` requires exact agreement.

```r
expected_retained_ids <- c("k01", "k02", "k03", "k04", "k05", "k06")
broken_join_ids <- c("k01", "k02", "k03", "k03", "k04", "k05", "k05", "k06")

duplicate_output_ids <- broken_join_ids[duplicated(broken_join_ids)]
same_id_multiset <- identical(sort(broken_join_ids),
                              sort(expected_retained_ids))

stopifnot(identical(duplicate_output_ids, c("k03", "k05")))
stopifnot(!same_id_multiset)
stopifnot(length(broken_join_ids) == 8L,
          length(expected_retained_ids) == 6L)
```

The tempting defense “the output still has eight rows” confuses a familiar count with the intended units. Row count cannot substitute for identity.

Return to [the chapter](transformations-and-joins.md) to review the selection and join audit in context.

</details>

Complete worked solutions appear in [the solutions companion](solutions-transformations-and-joins.md). Each solution is labeled with the matching exercise ID.


## R-06-E09

**Exercise 6.9**

An encounter table has row keys a, b, c and site codes Z, X, Y. A lookup lists X, Y, Z with regions East, West, North. An analyst attaches the region vector by current row order. Diagnose the mismatches and give the correctly matched regions without changing encounter order. These are complete original version-1 synthetic records.

<details>
<summary>Hint 1</summary>

Lookup order is not encounter order.

</details>
<details>
<summary>Hint 2</summary>

Match each encounter site to its lookup key before extracting the corresponding region.

</details>
<details>
<summary>Solution</summary>

Attaching the region vector directly yields East, West, North, mismatching every encounter. The correct order for sites Z, X, Y is North, East, West:

```r
encounter_id <- c("a", "b", "c")
encounter_site <- c("Z", "X", "Y")
lookup_site <- c("X", "Y", "Z")
lookup_region <- c("East", "West", "North")
stopifnot(anyDuplicated(lookup_site) == 0L)
match_index <- match(encounter_site, lookup_site)
stopifnot(!anyNA(match_index))
matched_region <- lookup_region[match_index]
stopifnot(identical(matched_region, c("North", "East", "West")))
stopifnot(identical(encounter_id, c("a", "b", "c")))
```

The keys and encounter order remain fixed. Alignment is established through a declared key, rather than by coincidentally sorted rows.

</details>

## R-06-E10

**Exercise 6.10**

Three complete original synthetic visit records contain 2, 4 and 12 minutes, with one record per visit. A broken join duplicates only the twelve-minute visit. Find both means and explain how the joined result changes weighting without creating a newly measured outcome.

<details>
<summary>Hint 1</summary>

Write the joined response vector explicitly.

</details>
<details>
<summary>Hint 2</summary>

The duplicated visit is counted twice in both the numerator and denominator.

</details>
<details>
<summary>Solution</summary>

The original mean is $(2+4+12)/3=6$ minutes. Joined rows contain 2,4,12,12 and average $30/4=7.5$. The final visit now has weight one half instead of one third. A repeated stored value is not necessarily a second visit, so this joined-row statistic does not describe an equally weighted visit from the original three. Resolve the join cardinality against source keys and document the repair before recalculating. A subsequent uncertainty method cannot automatically restore the intended unit weights.

</details>

## Sources and authorship

The R operations were checked against the installed R 4.6.0 primary documentation: R Core Team, *An Introduction to R*, sections 2.7 and 6.3; *The R Language Definition*, sections 2.3.2 and 3.4; and the R 4.6.0 help pages for data-frame extraction, `table`, `tapply`, `match`, `merge`, `duplicated`, and `try`. These sources establish software semantics, not the validity of an analysis target. The weighted-mean claim is proved directly above.

The prose, code, exercises, and literal synthetic fixtures are original to Math Atlas and licensed CC BY-SA 4.0. No human review or evidence about a real population is claimed.

## Summary

Filtering, unit changes, aggregation and joins should preserve the declared meaning of a row. Keep keys, state eligibility and missingness rules, and validate lookup cardinality before calculating. A duplicated record silently changes weights, while an outcome-selected subset changes the analysis target. Reconcile the transformed rows with their source before interpreting any group summary.
