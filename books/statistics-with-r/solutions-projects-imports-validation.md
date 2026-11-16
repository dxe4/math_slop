
# Solutions: Projects, Paths, Imports, and Validation

These solutions answer the ten exercises from [the chapter](projects-imports-validation.md). They repeat all needed fixtures, so this document executes independently in a fresh R process.

## R-04-E01

One defensible schema is the following. One row represents one arrival by one library user at a service desk, on the recorded calendar date. `visit_id` is a required character key and must be unique. `visit_date` arrives as character in the unmodified CSV; it must have exact `YYYY-MM-DD` shape, parse with `%Y-%m-%d`, and format back to the identical token before conversion to class `Date`. `wait_minutes` also arrives as character. A nonmissing token uses digits with an optional decimal fraction, and only after that lexical check is it converted to numeric minutes in the range 0 through 180. The literal text `NA` is its only missing code. `service` is required character data with allowed categories `checkout`, `return`, and `research`.

This is only one possible contract; a real source owner would need to confirm its rules. In particular, the row unit must say whether a person who arrives twice creates two visits. A wait recorded as 14 minutes when the actual wait was 41 minutes could pass all these checks: 14 is numeric and in range. Schema validation cannot observe the true wait independently.

## R-04-E02

Without a declared class, type conversion can turn `007` and `010` into integers 7 and 10, losing the displayed width. We first preserve both columns as raw character tokens, validate them, and convert only the copied `books` column:

```r
member_csv <- paste("member_id,books", "007,2", "010,5", sep = "\n")
members_imported <- read.csv(
  text = member_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
members_imported_snapshot <- members_imported

stopifnot(identical(names(members_imported), c("member_id", "books")))
stopifnot(identical(members_imported$member_id, c("007", "010")))
stopifnot(all(grepl("^[0-9]+$", members_imported$books)))

members_validated <- members_imported
members_validated$books <- as.integer(members_validated$books)
stopifnot(identical(members_imported, members_imported_snapshot))
stopifnot(identical(members_validated$member_id, c("007", "010")))
stopifnot(identical(members_validated$books, c(2L, 5L)))
```

The identifier's digits label members; they do not measure an amount. Preserving the text is therefore part of correctness, not cosmetic formatting.

## R-04-E03

The string `03/04/2026` can mean 4 March or 3 April depending on convention. We choose month/day/year, state it, and use `%m/%d/%Y`:

```r
date_text <- c("03/04/2026", "04/03/2026")
visit_date <- as.Date(date_text, format = "%m/%d/%Y")
formatted_dates <- format(visit_date, "%Y-%m-%d")

stopifnot(inherits(visit_date, "Date"))
stopifnot(identical(formatted_dates, c("2026-03-04", "2026-04-03")))
```

Under the opposite day/month/year contract, the results would be 3 April and 4 March. The code is correct only relative to the stated source convention; `as.Date()` cannot discover the source author's intention.

For a source that declares exact `YYYY-MM-DD`, parsing is only one test. We also require the raw token's exact lexical shape and require the parsed date to format back to precisely that token:

```r
schema_date_csv <- paste(
  "visit_date",
  "2026-09-01",
  "2026-9-1",
  "2026-09-01junk",
  "2026-02-30",
  sep = "\n"
)
schema_date_imported <- read.csv(
  text = schema_date_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
schema_date_tokens <- schema_date_imported$visit_date
schema_parsed_dates <- as.Date(schema_date_tokens, format = "%Y-%m-%d")
schema_date_has_exact_shape <- grepl(
  "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
  schema_date_tokens
)
schema_date_roundtrips <- !is.na(schema_parsed_dates) &
  format(schema_parsed_dates, "%Y-%m-%d") == schema_date_tokens
schema_date_is_valid <- schema_date_has_exact_shape & schema_date_roundtrips

stopifnot(nrow(schema_date_imported) == 4L)
stopifnot(identical(schema_date_tokens, c(
  "2026-09-01", "2026-9-1", "2026-09-01junk", "2026-02-30"
)))
stopifnot(identical(schema_date_has_exact_shape, c(TRUE, FALSE, FALSE, TRUE)))
stopifnot(identical(schema_date_roundtrips, c(TRUE, FALSE, FALSE, FALSE)))
stopifnot(identical(schema_date_is_valid, c(TRUE, FALSE, FALSE, FALSE)))
```

The short and trailing-junk tokens happen to parse in this R environment, which is why parse success alone is insufficient. The impossible 30 February has the right shape but fails the calendar roundtrip.

## R-04-E04

Position 4 is missing. Forward `duplicated()` marks position 3 because it is the later occurrence of `v02`. To find every member of a duplicate pair, combine the forward flag with `duplicated(..., fromLast = TRUE)`, which checks in the reverse direction; that marks positions 2 and 3.

```r
visit_id <- c("v01", "v02", "v02", NA_character_)
missing_positions <- which(is.na(visit_id))
forward_duplicate_positions <- which(duplicated(visit_id))
all_duplicate_pair_positions <- which(
  duplicated(visit_id) | duplicated(visit_id, fromLast = TRUE)
)

stopifnot(identical(missing_positions, 4L))
stopifnot(identical(forward_duplicate_positions, 3L))
stopifnot(identical(all_duplicate_pair_positions, c(2L, 3L)))

key_has_missing <- anyNA(visit_id)
key_has_duplicate <- any(duplicated(visit_id))
key_is_valid <- !key_has_missing && !key_has_duplicate

stopifnot(key_has_missing)
stopifnot(key_has_duplicate)
stopifnot(!key_is_valid)
```

There are four vector entries, but only two distinct observed labels plus a repeated label and an unknown label. Row count checks table size; a complete unique-key check supports the claim that those rows represent four separately identified visits. Duplicate detection provides no evidence that position 2 is authoritative or that position 3 should be deleted. The source owner must resolve whether one, both, or neither record should be retained.

## R-04-E05

Raw-token validation comes first. Of literal `NA`, a blank, and `NaN`, only literal `NA` is the declared missing code. The first numeric grammar accepts digits with an optional decimal fraction and rejects all three missing candidates as numerals. For the separate range fixture, we allow an optional leading minus at the representation stage so that `-1` is numeric syntax and the range check can reject it for the intended reason. After the valid missing token is mapped to R's `NA`, positions 2 and 3 violate the range: -1 is below 0 and 240 exceeds 180. Position 4 is missing but permitted by this particular range rule.

```r
missing_candidate_csv <- paste(
  "case_id,wait_minutes",
  "allowed,NA",
  "blank,",
  "nan,NaN",
  sep = "\n"
)
missing_candidate_imported <- read.csv(
  text = missing_candidate_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
raw_missing_candidates <- missing_candidate_imported$wait_minutes
declared_missing_token <- raw_missing_candidates == "NA"
numeric_token <- grepl("^[0-9]+(\\.[0-9]+)?$", raw_missing_candidates)

stopifnot(nrow(missing_candidate_imported) == 3L)
stopifnot(identical(raw_missing_candidates, c("NA", "", "NaN")))
stopifnot(identical(declared_missing_token, c(TRUE, FALSE, FALSE)))
stopifnot(identical(numeric_token, c(FALSE, FALSE, FALSE)))

raw_wait_minutes <- c("8", "-1", "240", "NA")
wait_is_missing_token <- raw_wait_minutes == "NA"
wait_is_signed_numeric_token <- grepl("^-?[0-9]+(\\.[0-9]+)?$", raw_wait_minutes)
stopifnot(all(wait_is_missing_token | wait_is_signed_numeric_token))

wait_minutes_for_conversion <- raw_wait_minutes
wait_minutes_for_conversion[wait_minutes_for_conversion == "NA"] <- NA_character_
wait_minutes <- as.numeric(wait_minutes_for_conversion)
out_of_range <- !is.na(wait_minutes) & (wait_minutes < 0 | wait_minutes > 180)
bad_positions <- which(out_of_range)

stopifnot(identical(wait_minutes, c(8, -1, 240, NA_real_)))
stopifnot(identical(bad_positions, c(2L, 3L)))
stopifnot(sum(is.na(wait_minutes)) == 1L)
```

Replacing `NA` with zero would assert that the unrecorded wait was exactly zero minutes. That changes an unknown value into an observed boundary value and could lower a mean. A later analysis must state how missing values are handled; the range validator should not invent measurements.

## R-04-E06

This fixture is original synthetic data created for Math Atlas, version 1. One row is one keyed reading occasion; `value` is measured in arbitrary declared units, and `NA` is its only missing code.

```r
local({
  roundtrip_original <- data.frame(
    key = c("005", "006"),
    date = as.Date(c("2026-10-01", "2026-10-02"), format = "%Y-%m-%d"),
    value = c(3.5, NA_real_),
    stringsAsFactors = FALSE
  )

  solution_directory <- tempfile("solution-roundtrip-", tmpdir = ".")
  made_directory <- dir.create(solution_directory, showWarnings = FALSE)
  stopifnot(made_directory)
  on.exit(unlink(solution_directory, recursive = TRUE), add = TRUE)
  solution_path <- file.path(solution_directory, "readings.csv")

  write.csv(roundtrip_original, solution_path, row.names = FALSE, na = "NA")
  stopifnot(file.exists(solution_path))

  roundtrip_imported <- read.csv(
    solution_path,
    colClasses = "character",
    na.strings = NULL,
    check.names = FALSE,
    row.names = NULL
  )
  roundtrip_imported_snapshot <- roundtrip_imported
  roundtrip_date <- as.Date(roundtrip_imported$date, format = "%Y-%m-%d")
  roundtrip_date_valid <- grepl("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", roundtrip_imported$date) &
    !is.na(roundtrip_date) & format(roundtrip_date, "%Y-%m-%d") == roundtrip_imported$date
  roundtrip_missing <- roundtrip_imported$value == "NA"
  roundtrip_numeric <- grepl("^[0-9]+(\\.[0-9]+)?$", roundtrip_imported$value)

  stopifnot(identical(names(roundtrip_imported), c("key", "date", "value")))
  stopifnot(nrow(roundtrip_imported) == 2L)
  stopifnot(!any(duplicated(roundtrip_imported$key)))
  stopifnot(identical(roundtrip_imported$key, c("005", "006")))
  stopifnot(all(roundtrip_date_valid), all(roundtrip_missing | roundtrip_numeric))

  roundtrip_validated <- roundtrip_imported
  roundtrip_value <- roundtrip_validated$value
  roundtrip_value[roundtrip_value == "NA"] <- NA_character_
  roundtrip_validated$value <- as.numeric(roundtrip_value)
  roundtrip_validated$date <- roundtrip_date
  stopifnot(identical(roundtrip_imported, roundtrip_imported_snapshot))

  roundtrip_copy_normalized <- roundtrip_validated
  roundtrip_original_normalized <- roundtrip_original
  row.names(roundtrip_copy_normalized) <- NULL
  row.names(roundtrip_original_normalized) <- NULL
  stopifnot(identical(roundtrip_copy_normalized, roundtrip_original_normalized))
})
```

The `local()` frame owns a newly created, unique relative directory; `on.exit()` removes that directory on success or error. Failed directory creation stops before cleanup is registered, so a pre-existing path is never claimed. The explicit `row.names = FALSE` keeps internal row numbering out of the CSV schema. `roundtrip_imported` preserves the file's raw character tokens. Only after its date and value tokens pass their exact contracts do we copy it to `roundtrip_validated` and convert the copied columns. The identity assertion proves that parsing left the imported object unchanged.

## R-04-E07

We keep a copy to prove the raw object remains unchanged. The logical vector `use_for_duration` states the selection rule. The ledger uses the raw key and records both reason and consequence.

```r
# Original literal synthetic fixture, Math Atlas, version 1.
# One row is one session; durations are minutes; NA means not recorded.
visits_raw <- data.frame(
  key = c("a", "b", "c"),
  duration_minutes = c(5, NA_real_, 11),
  completed = c("yes", "no", "yes"),
  stringsAsFactors = FALSE
)
visits_raw_before <- visits_raw

use_for_duration <- visits_raw$completed == "yes" & !is.na(visits_raw$duration_minutes)
completed_visits <- visits_raw[use_for_duration, , drop = FALSE]
exclusion_ledger <- data.frame(
  key = visits_raw$key[!use_for_duration],
  rule = "completed session with recorded duration required",
  consequence = "excluded from completed-duration mean; retained in raw table",
  stringsAsFactors = FALSE
)
completed_mean <- mean(completed_visits$duration_minutes)

stopifnot(identical(visits_raw, visits_raw_before))
stopifnot(identical(completed_visits$key, c("a", "c")))
stopifnot(identical(exclusion_ledger$key, "b"))
stopifnot(abs(completed_mean - 8) <= 1e-10 + 1e-8 * abs(8))
```

A bounded report is: “For the two completed sessions with recorded durations in this three-row synthetic table, the mean duration was 8 minutes; session `b` was retained in the raw table but excluded from this mean because it was marked incomplete and its duration was missing.” This sentence identifies the subset and does not generalize beyond the invented rows.

## R-04-E08

Analyst A has useful provenance evidence. The creator and retrieval date distinguish the source and occasion, while a checksum can later detect whether its exact bytes changed. A has not checked whether the table represents one record per declared key, so duplicated or missing keys could remain.

Analyst B knows that this copy agrees with the named structural rules: its names, types, ranges, row count, and unique-key condition passed. B cannot establish which source or version those bytes represent, whether they were transformed before receipt, or who supplied them.

Combining the records would establish both a source history and agreement with the declared schema. It would still not prove measurement truth. A plausible transcription error may satisfy every range and type rule, and provenance reports where a value came from rather than independently remeasuring it. The strongest warranted statement is specific: this identified file passed these named checks.


## R-04-E09

Ninety is numeric and falls within the allowed range, so the checks pass. If independent device documentation confirms seconds, its intended duration is $90/60=1.5$ minutes. Retain the raw token, identify the device and protocol, document the erroneous field label, and place the justified conversion in a derived field. A guess about units does not authorise overwriting the raw measurement. Source provenance and agreement with a schema answer different questions.

## R-04-E10

Patient ID alone is not unique for these four records. The pair (patient_id, occasion) identifies the four stated observations uniquely. This supports one record per declared pair, not four independent patients, accurate measurement or a treatment effect. If a pair repeated, source information would be needed to decide whether it represented duplicate storage or two separately intended measurements. The decision should follow the unit definition rather than an automatic instruction to retain the first row.

## Sources and authorship

The R syntax and semantics in these solutions were checked against the installed R Core Team R 4.6.0 help pages for `read.table`/`read.csv`, `write.table`/`write.csv`, `as.Date`, `duplicated`, `anyNA`, `file.path`, and `identical`; all lowercase R blocks were executed with R 4.6.0. The prose, fixtures, and solutions are original to Math Atlas.

This solutions companion is licensed CC BY-SA 4.0. No human review is claimed in this draft.
