
# Solutions: Reports That Can Be Traced

These solutions reconstruct the fixture and calculations independently of the chapter. `R15-HELPDESK-v1` is original literal synthetic data created by Math Atlas, version 1. One row is one service request; `case_id` is the unique key, `channel` records a non-randomized route, `wait_minutes` is time to first response in minutes, `NA` is the missing code, and `eligible` excludes a known equipment-test record. There are 12 source rows, two eligible missing waits, one ineligible row, and nine included complete eligible rows.

```r
raw_csv <- c(
  "case_id,channel,wait_minutes,eligible",
  "h01,desk,9,TRUE",
  "h02,desk,7,TRUE",
  "h03,desk,NA,TRUE",
  "h04,desk,8,TRUE",
  "h05,desk,6,TRUE",
  "h06,desk,5,TRUE",
  "h07,chat,4,TRUE",
  "h08,chat,6,TRUE",
  "h09,chat,3,TRUE",
  "h10,chat,5,TRUE",
  "h11,chat,NA,TRUE",
  "h12,chat,4,FALSE"
)

raw_path <- tempfile(pattern = "r15-solutions-raw-", fileext = ".csv", tmpdir = getwd())
writeLines(raw_csv, raw_path)
stopifnot(file.exists(raw_path))
stopifnot(dirname(normalizePath(raw_path, mustWork = TRUE)) ==
            normalizePath(getwd(), mustWork = TRUE))

requests <- utils::read.csv(raw_path, na.strings = "NA", stringsAsFactors = FALSE)
raw_snapshot <- requests
include <- requests$eligible & !is.na(requests$wait_minutes)
analysis_rows <- requests[include, , drop = FALSE]
overall_n <- nrow(analysis_rows)
overall_mean <- mean(analysis_rows$wait_minutes)

channels <- c("desk", "chat")
group_n <- integer(length(channels))
group_mean <- numeric(length(channels))
for (j in seq_along(channels)) {
  in_group <- analysis_rows$channel == channels[j]
  group_n[j] <- sum(in_group)
  group_mean[j] <- mean(analysis_rows$wait_minutes[in_group])
}
descriptive_difference <- group_mean[channels == "desk"] -
  group_mean[channels == "chat"]
exclusion_rows <- requests[!include, , drop = FALSE]

stopifnot(identical(dim(requests), c(12L, 4L)))
stopifnot(!anyDuplicated(requests$case_id))
stopifnot(overall_n == 9L)
stopifnot(abs(overall_mean - 53 / 9) <= 1e-10 + 1e-8 * abs(53 / 9))
stopifnot(identical(group_n, c(5L, 4L)))
stopifnot(all(abs(group_mean - c(7, 4.5)) <=
              1e-10 + 1e-8 * abs(c(7, 4.5))))
stopifnot(abs(descriptive_difference - 2.5) <= 1e-10 + 1e-8 * abs(2.5))
```

## R-15-E01

For claim (a), the result object is `overall_mean`. Its source is the nine rows satisfying `eligible & !is.na(wait_minutes)`: `h01`, `h02`, `h04`–`h10`, excluding `h03`, `h11`, and `h12`. Its limit is that it estimates only the mean recorded wait among complete eligible rows. It does not reveal the mean wait of the two eligible rows whose waits are missing.

For claim (b), the result object is `descriptive_difference`, constructed from `group_mean`. The desk calculation uses five included rows and the chat calculation uses four. Its central limit is the observational channel mechanism: channel was not randomly assigned, so 2.50 minutes is a recorded-group difference, not the effect of forcing requests into a channel.

For claim (c), the object is `exclusion_rows`, interpreted together with the inclusion rule. `h03` and `h11` are eligible and have missing waits; `h12` is excluded for known ineligibility. The limit is that identifying two missing values does not reveal their values or prove they are harmless.

A page number says where words appear. The ledger says which computation and rows support them, which is what a future analyst needs after a source or result changes.

## R-15-E02

Subsetting creates `derived_rows`; it does not assign into any column of `requests`. The snapshot and assertions expose accidental mutation and reconcile all 12 rows.

```r
derived_rows <- requests[requests$eligible & !is.na(requests$wait_minutes), , drop = FALSE]
excluded_ids <- requests$case_id[!(requests$eligible & !is.na(requests$wait_minutes))]

stopifnot(identical(requests, raw_snapshot))
stopifnot(nrow(requests) == 12L)
stopifnot(nrow(derived_rows) == 9L)
stopifnot(identical(excluded_ids, c("h03", "h11", "h12")))
stopifnot(nrow(derived_rows) + length(excluded_ids) == nrow(requests))
```

Replacing missing waits with zero would claim that “unrecorded” means “no wait,” a measurement statement absent from the schema. It would also destroy the distinction between source values and an analyst's assumption. If a sensitivity analysis tries zero as one scenario, it should create a new derived object, label the assumption, and retain the raw `NA` values.

## R-15-E03

The numeric value remains $53/9 = 5.888...$. `sprintf()` creates presentation text rounded to two decimal places.

```r
mean_sentence <- sprintf(
  "Mean recorded wait was %.2f minutes across %d included requests.",
  overall_mean,
  overall_n
)

stopifnot(identical(mean_sentence,
                    "Mean recorded wait was 5.89 minutes across 9 included requests."))
stopifnot(abs(overall_mean - 53 / 9) <= 1e-10 + 1e-8 * abs(53 / 9))
stopifnot(!identical(overall_mean, 5.89))
```

The stored number and displayed string have different jobs. `overall_mean` is used for later calculation. The string communicates a sensible precision, a unit, and a denominator. Treating 5.89 as the exact mean would erase the recurring decimal and could accumulate rounding error in later calculations.

## R-15-E04

| Recorded service channel | Included n | Mean wait (minutes) |
| --- | ---: | ---: |
| Desk | 5 | 7.00 |
| Chat | 4 | 4.50 |

The horizontal positions identify the two recorded channels; the vertical quantity is mean wait among included requests, in minutes. The desk height is 7.00 minutes for five requests and the chat height is 4.50 minutes for four requests, so desk is 2.50 minutes higher in this fixture.

This table and prose give every plotted value and denominator. They cannot show a causal channel effect because requests were not randomly assigned, and they do not recover the two missing eligible waits.

The following assertion checks that these written values match calculations rather than measurements read from a graphic.

```r
numeric_alternative <- data.frame(
  channel = c("desk", "chat"),
  included_n = c(5L, 4L),
  mean_wait_minutes = c(7, 4.5),
  stringsAsFactors = FALSE
)
stopifnot(identical(numeric_alternative$included_n, group_n))
stopifnot(identical(numeric_alternative$mean_wait_minutes, group_mean))
```

## R-15-E05

The path is requested inside `getwd()`, which is the temporary working directory during the canonical fresh-session run. We write exactly two lines, verify existence and directory, read the text back, and assert the current denominator appears.

```r
exercise_report <- tempfile(tmpdir = getwd(), fileext = ".md")
exercise_lines <- c(
  "# Result",
  sprintf("Mean wait: %.2f minutes; included n=%d.", overall_mean, overall_n)
)

stopifnot(!file.exists(exercise_report))
writeLines(exercise_lines, exercise_report)
stopifnot(file.exists(exercise_report))
stopifnot(dirname(normalizePath(exercise_report, mustWork = TRUE)) ==
            normalizePath(getwd(), mustWork = TRUE))

exercise_text <- readLines(exercise_report, warn = TRUE)
stopifnot(length(exercise_text) == 2L)
stopifnot(grepl("included n=9", exercise_text[2], fixed = TRUE))

exercise_report_sha256 <- unname(tools::sha256sum(exercise_report))
stopifnot(nchar(exercise_report_sha256) == 64L)
```

The checksum summarizes the exact generated bytes. A matching checksum supports identity; it does not prove the denominator was scientifically appropriate. That requires the declared target and exclusion policy.

## R-15-E06

This analysis is deterministic: it reads literal values and calls no random-number function. Recording an invented seed would suggest control that was never used. The RNG kind is still useful environment context because a later revision might add simulation.

```r
session_record <- c(
  r_version = R.version.string,
  platform = R.version$platform,
  locale = Sys.getlocale(),
  timezone = Sys.timezone(),
  blas = unname(extSoftVersion()["BLAS"]),
  rng_kind = paste(RNGkind(), collapse = "/"),
  seed = "not applicable; no random-number function is called"
)

stopifnot(identical(names(session_record),
                    c("r_version", "platform", "locale", "timezone", "blas",
                      "rng_kind", "seed")))
stopifnot(length(session_record["r_version"]) == 1L,
          !is.na(session_record["r_version"]),
          nzchar(session_record["r_version"]),
          identical(unname(session_record["r_version"]), R.version.string))
stopifnot(identical(unname(session_record["seed"]),
                    "not applicable; no random-number function is called"))
```

If a later report adds simulation, each stochastic block must begin by setting the specified RNG kinds and its assigned seed before drawing any value. It must record both, state the probability mechanism and number of repetitions, and report Monte Carlo error for simulation estimates. A seed permits repetition of a pseudorandom stream; it does not make a simulation assumption correct.

## R-15-E07

The function rejects vector inputs because `identical()` on two vectors could answer a different question than auditing one sentence. It returns one logical value for one stated sentence and one computed sentence.

```r
audit_claim_text <- function(stated_text, computed_text) {
  if (length(stated_text) != 1L || length(computed_text) != 1L) {
    stop("audit_claim_text requires one stated and one computed string")
  }
  identical(stated_text, computed_text)
}

stale_sentence <- "Mean wait was 6.50 minutes across 10 included requests."
current_sentence <- sprintf(
  "Mean wait was %.2f minutes across %d included requests.",
  overall_mean,
  overall_n
)

stopifnot(!audit_claim_text(stale_sentence, current_sentence))
stopifnot(audit_claim_text(current_sentence, current_sentence))
```

The exact-string audit would miss “Waiting improved dramatically.” That sentence has no computed value to compare and leaves the baseline, practical threshold, and causal mechanism unstated. A human claim audit is still required.

## R-15-E08

The outcome-dependent rule keeps only complete eligible waits at most six minutes. It retains values $6,5,4,6,3,5$, so its mean is $29/6 = 4.833...$ minutes.

```r
biased_rows <- analysis_rows[analysis_rows$wait_minutes <= 6, , drop = FALSE]
biased_mean <- mean(biased_rows$wait_minutes)

stopifnot(nrow(biased_rows) == 6L)
stopifnot(sum(biased_rows$wait_minutes) == 29)
stopifnot(abs(biased_mean - 29 / 6) <= 1e-10 + 1e-8 * abs(29 / 6))
stopifnot(biased_mean < overall_mean)
stopifnot(identical(requests, raw_snapshot))
```

The computation is reproducible because the same rows and rule give the same answer. It is invalid for the declared nine-row target because three waits were selected out precisely for being long. Renaming the six-row mean as a nine-row mean changes the target without disclosure.

An independent replication would obtain new requests under a declared eligibility, channel, and logging mechanism, then apply a prespecified analysis to those new observations. It would be more than rerunning the old bytes. Agreement might support stability under that mechanism; disagreement would invite an audit of sampling variation and changed conditions.

Neither operation licenses a causal claim about channel. The original and replicated channel groups may differ for reasons connected with how requests reached desk or chat. A causal conclusion would require a design and assumptions that connect the comparison to an intervention, such as a documented assignment mechanism plus appropriate measurement and interference conditions. File identity and repeated results do not create that design.

Return to [Reports That Can Be Traced](reports-and-provenance.md) and identify each exercise by its stable R-15-E## label.

## R-15-E09

Two concrete provenance rows can use the frozen sources already identified in this book:

| Frozen file and selected source | Creators and license | Records, schema and transformations |
| --- | --- | --- |
| `data/penguins.csv`; [selected Palmer penguin CSV](https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv) | Horst, Hill and Gorman; measurements collected by Kristen Gorman and Palmer Station LTER; CC0 | 344 records; eight source columns and `NA` retained; bill/flipper dimensions in mm, body mass in g, sex, species, island and year; line endings normalized, observations unchanged |
| `data/banknote-authentication.csv`; Lohweg, Volker (2012), Banknote Authentication, UCI; DOI 10.24432/C55P57; [selected source text](https://archive.ics.uci.edu/ml/machine-learning-databases/00267/data_banknote_authentication.txt) | Volker Lohweg; CC BY 4.0 | 1372 records; image-derived variance, skewness, curtosis and entropy features and binary class; no physical measurement units asserted here; headings added and blank lines removed, observations and row order unchanged |

These rows select the book's frozen local copies rather than promising that a live source will remain unchanged. For both rows, the [frozen-data source ledger](references.md) records retrieval on 2026-11-14. This reports the ledger’s historical acquisition date; this review has not independently verified that acquisition. For the penguin mass-on-flipper analysis, the inclusion rule retains the 342 rows with both required measurements; this derived exclusion is separate from preserving all 344 source rows.

Credit and license remain attached to the observations. Original explanatory prose and analysis code are distinct contributions; a new header changes representation rather than authorship of the measured data.

## R-15-E10

One check reconciles current included key sets and group counts with those represented in the display. Another recomputes each plotted mean or interval from the current analysis table and compares it with the display's numerical alternative. These catch stale denominators and summaries even when the image looks plausible. They do not validate random sampling, independence, a causal interpretation or the truth of a model; those require design and subject-matter evidence.

## Sources and authorship

The R file, formatting, checksum, session, and RNG semantics used here were checked against the installed R 4.6.0 help pages for `writeLines`, `readLines`, `files`, `normalizePath`, `sprintf`, `sessionInfo`, `extSoftVersion`, `Random`, and `tools::sha256sum`, plus R Core Team, *R Data Import/Export*, version 4.6.0, §7.1, and *An Introduction to R*, version 4.6.0, §14.1. The solutions were executed on Linux; no other platform execution is claimed.

The solutions and fixture are original to Math Atlas, produced by Math Atlas, and licensed CC BY-SA 4.0. The data are synthetic and support no real help-desk conclusion. No human review is claimed in this draft.
