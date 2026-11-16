
# Solutions: Rows, rules, and joins

These solutions are independently runnable. Every fixture is repeated literally here; no object from the chapter is required. All fixtures are original synthetic data created for Math Atlas, version 1. They describe no real people or organizations. Missing numeric outcomes use `NA_real_`; other missing codes are forbidden unless a solution says otherwise.

In the code, `data.frame()` builds a table from equal-length columns, `stringsAsFactors = FALSE` keeps supplied text as character data, `x[row, column, drop = FALSE]` selects rows and columns while retaining table structure, and `$` extracts or creates a named column. `nrow()` counts rows and `names()` returns column names. `is.na()` marks missing entries, `anyNA()` detects any missing value, `anyDuplicated()` returns zero for no duplicate and otherwise the first duplicate position, and `is.finite()` rejects missing or infinite numeric values. `identical()` requires exact agreement, `all()` requires every logical entry to be true, and `sort()` supplies a common order for ID comparison. `table()` counts groups; `tapply()` applies a named summary separately by group; `as.integer()` and `as.numeric()` convert their special results to ordinary vectors. `%in%` tests membership, `!` reverses a logical result, `&` requires both elementwise conditions, `match()` returns matching positions, and `duplicated()` marks repeated occurrences. `stopifnot()` stops if a stated check is false. We declare what each validation is meant to establish before applying it.

## R-06-E01

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

## R-06-E02

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

## R-06-E03

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

## R-06-E04

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

## R-06-E05

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

## R-06-E06

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

## R-06-E07

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

## R-06-E08

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


## R-06-E09

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

## R-06-E10

The original mean is $(2+4+12)/3=6$ minutes. Joined rows contain 2,4,12,12 and average $30/4=7.5$. The final visit now has weight one half instead of one third. A repeated stored value is not necessarily a second visit, so this joined-row statistic does not describe an equally weighted visit from the original three. Resolve the join cardinality against source keys and document the repair before recalculating. A subsequent uncertainty method cannot automatically restore the intended unit weights.

## Sources and authorship

The base-R semantics in these solutions were checked against R Core Team's installed R 4.6.0 documentation: *An Introduction to R*, sections 2.7 and 6.3; *The R Language Definition*, sections 2.3.2 and 3.4; and the help pages for data-frame extraction, `table`, `tapply`, `match`, `duplicated`, and `stopifnot`. The mathematical identity is derived directly in R-06-E05.

This CC BY-SA 4.0 solutions companion, including all fixtures and exercises, is original to Math Atlas. No human review is claimed.
