
# Projects, Paths, Imports, and Validation

A CSV file can open without being the table you intended to analyze. An identifier such as `0003` can become the number 3. A date can remain an ambiguous character string. A missing-value code can be treated as an ordinary category. Two rows can carry the same supposed identifier. None of these problems requires R to report an error.

That is why importing data is not one command. It is a short argument:

> **locate the source → record its provenance → declare its schema → import → validate → derive → make a claim**

The order matters. If we calculate first and inspect later, a plausible result can make a malformed table harder to notice. This chapter develops that workflow with a small literal CSV source, so every reader can rerun it without downloading a file. The same discipline scales to larger investigations.

We use a few earlier R ideas here. A script is a saved sequence of instructions, evaluated in order. An error stops the current calculation and reports a condition to diagnose; `help(read.csv)` or `?read.csv` opens R's documentation for an operation. A vector holds values of one underlying type, such as character or numeric. R uses `NA` for a missing value, and `is.na()` tests for it. A value of class `Date` represents a calendar date rather than arbitrary text. We will keep categorical columns as character vectors in this chapter, so no factor conversion is needed.

## A project gives paths a shared starting point

A file path tells software where an object is stored. An **absolute path** begins from a filesystem root. A **relative path** begins from the R process's current working directory, returned by `getwd()`. If the working directory is the project root, a path such as `data/raw/sessions.csv` has the same project meaning on different computers even though their absolute paths differ.

In a script, construct paths from components with `file.path()`. For example, `file.path("data", "raw", "sessions.csv")` inserts the platform's path separator. Before reading a file, `file.exists(path)` can check that the path identifies an existing filesystem entry. This check answers “is something there?” It does not establish that the object is the right version or has the right contents.

A reproducible project therefore needs a declared launch point. In this book, a project script is run with the project root as its working directory. A script that depends on a private absolute path such as one person's Downloads folder has not stated a path another reader can use. When a file is supplied by somebody else, preserve the received raw source and create corrected or analyzed tables as new objects rather than overwriting it.

## The source needs an identity

**Definition R-DEF-provenance (provenance).** The **provenance** of a data source is the recorded account of where it came from and how it reached its present form. At minimum, it identifies the source or creator, a version or retrieval occasion, the original representation, and any transformations or exclusions already applied.

Provenance is a chain of custody, not a certificate of truth. “Received from the clinic coordinator on 3 September” would help distinguish versions, but it would not prove that every recorded duration is accurate. Conversely, measurements could be accurate while their undocumented origin makes the analysis difficult to audit.

Our source is deliberately small and fully visible:

```text
session_id,session_date,minutes,room,completed
0001,2026-09-01,12.5,A,yes
0002,2026-09-01,NA,A,no
0003,2026-09-02,9.0,B,yes
0004,2026-09-02,15.5,B,yes
```

Its provenance record is: original synthetic fixture created for Math Atlas; version 1; literal UTF-8-compatible ASCII CSV text shown above; CC BY-SA 4.0; no prior transformations or exclusions. One row represents one scheduled mathematics-clinic session on its stated date. The row unit is a session, not a learner or a room. The literal source is the canonical raw record for this example.

The columns have these declared meanings:

| Column | Intended representation | Meaning and unit | Missing-value policy |
|---|---|---|---|
| `session_id` | character | unique session key; leading zeros are meaningful | not allowed |
| `session_date` | raw character; `Date` only after validation | calendar day in exact `YYYY-MM-DD` form | not allowed |
| `minutes` | raw character; numeric only after validation | completion duration in minutes, from 0 through 180 | literal `NA` means not recorded; allowed only when `completed` is `no` |
| `room` | character | room category `A` or `B` | not allowed |
| `completed` | character | category `yes` or `no` | not allowed |

The literal text `NA` is the only declared missing code. A blank field, `NaN`, `-99`, or `unknown` has not been authorized as an alternative code. A nonmissing duration token uses digits, optionally followed by a decimal point and one or more digits. This deliberately narrow grammar accepts `9`, `9.0`, and `12.5`; another source could declare a different grammar.

## Schema and keys turn intent into checks

**Definition R-DEF-schema (data schema).** A **data schema** is a testable contract for a table: its column names and order, row unit, representations or types, units, allowed and missing values, ranges, row-count expectations when known, and relationships that records must satisfy.

**Definition R-DEF-key (key).** A **key** is a named column or combination of columns whose values must identify each row uniquely within the declared table. A valid key is present for every row and contains no duplicate value or duplicate combination.

Here `session_id` is the key. The four expected values are text labels `0001` through `0004`; they are not measurements. Arithmetic on them would have no statistical meaning. Declaring the column as character at import time preserves the leading zeros.

A schema must reflect the actual question. If one session could legitimately have several task rows, `session_id` alone would cease to be a row key; perhaps the pair (`session_id`, `task_id`) would become the key. Declaring a key is therefore also a claim about what one row represents.

**Claim R-CLAIM-schema (scope of schema validation; proved here by logic).** Type, range, uniqueness, missingness, and row-count checks detect violations of the rules those checks specify. Passing them does not establish the truth of every recorded measurement or the adequacy of rules that were never specified.

The first sentence follows directly: each check rejects a table when its tested condition is false. For the boundary, imagine that `0001` was truly completed in 21.5 minutes but was typed as 12.5. The value 12.5 is numeric, lies in the allowed range, and violates no key or missingness rule. This table can pass every stated check while containing a measurement error. Validation makes an import answerable to a contract; it cannot compare the data with unobserved reality.

## Worked example 1: import, parse, then validate

**Example 4.1 (Worked calculation).**

We place the CSV in a character object named `raw_csv`. `paste(..., sep = "\n")` joins its arguments with newline separators so each record occupies one line. `read.csv(text = raw_csv, ...)` reads from that literal text through a text connection. This is useful for a teaching fixture and for a minimal reproducible example; ordinary project data would usually be read from a relative file path.

The argument `colClasses = "character"` preserves every incoming field as a character token. `na.strings = NULL` prevents `read.csv()` from converting any declared string to an R missing value during this raw import, and `strip.white = FALSE` avoids trimming unquoted character fields first. These choices let us distinguish literal `NA` from a blank, `NaN`, or a token padded with spaces before conversion. `check.names = FALSE` prevents automatic repair of headings, so an unexpected heading remains visible to our exact-name check. `row.names = NULL` requests automatic row numbering rather than treating any field as row names.

For dates we require two checks. A regular expression first requires exactly four digits, a hyphen, two digits, a hyphen, and two digits. We then call `as.Date(..., format = "%Y-%m-%d")`, where `%Y`, `%m`, and `%d` denote year, month, and day, and require that formatting the parsed value returns the exact original token. Parse success alone is weaker: R may accept omitted leading zeros or ignore trailing characters, while a syntactically shaped date can still name an impossible calendar day.

The checks below stay explicit and sequential. Later we will learn to package repeated steps into a reusable function. `stopifnot()` raises an error if any supplied requirement is not true. `anyNA(x)` asks whether an object contains a missing value, while `duplicated(x)` marks occurrences of values already seen. For logical vectors, `!` negates each condition, `&` means elementwise “and,” and `|` means elementwise “or.” The expression `x %in% choices` checks each value of `x` against the allowed choices.

```r
# Original literal synthetic fixture, Math Atlas, version 1.
# One row is one scheduled clinic session; duration is in minutes.
# session_id is the key; "NA" is the only declared missing code.
raw_csv <- paste(
  "session_id,session_date,minutes,room,completed",
  "0001,2026-09-01,12.5,A,yes",
  "0002,2026-09-01,NA,A,no",
  "0003,2026-09-02,9.0,B,yes",
  "0004,2026-09-02,15.5,B,yes",
  sep = "\n"
)

sessions_imported <- read.csv(
  text = raw_csv,
  colClasses = "character",
  na.strings = NULL,
  strip.white = FALSE,
  check.names = FALSE,
  row.names = NULL
)
sessions_imported_snapshot <- sessions_imported

expected_names <- c("session_id", "session_date", "minutes", "room", "completed")
date_has_exact_shape <- grepl("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", sessions_imported$session_date)
parsed_session_date <- as.Date(sessions_imported$session_date, format = "%Y-%m-%d")
date_roundtrips <- !is.na(parsed_session_date) &
  format(parsed_session_date, "%Y-%m-%d") == sessions_imported$session_date
minutes_is_declared_missing <- sessions_imported$minutes == "NA"
minutes_is_decimal <- grepl("^[0-9]+(\\.[0-9]+)?$", sessions_imported$minutes)
minutes_token_is_valid <- minutes_is_declared_missing | minutes_is_decimal

stopifnot(identical(names(sessions_imported), expected_names))
stopifnot(nrow(sessions_imported) == 4L)
stopifnot(is.character(sessions_imported$session_id))
stopifnot(is.character(sessions_imported$session_date))
stopifnot(is.character(sessions_imported$minutes))
stopifnot(is.character(sessions_imported$room))
stopifnot(is.character(sessions_imported$completed))
stopifnot(identical(sessions_imported$session_id, c("0001", "0002", "0003", "0004")))
stopifnot(all(nzchar(sessions_imported$session_id)))
stopifnot(all(sessions_imported$session_id != "NA"), !any(duplicated(sessions_imported$session_id)))
stopifnot(all(date_has_exact_shape), all(date_roundtrips))
stopifnot(all(minutes_token_is_valid), sum(minutes_is_declared_missing) == 1L)
stopifnot(all(sessions_imported$room %in% c("A", "B")))
stopifnot(all(sessions_imported$completed %in% c("yes", "no")))
stopifnot(!any(sessions_imported$completed == "yes" & minutes_is_declared_missing))

# Copy the validated tokens, then convert only the derived object.
sessions_validated <- sessions_imported
minutes_for_conversion <- sessions_validated$minutes
minutes_for_conversion[minutes_for_conversion == "NA"] <- NA_character_
sessions_validated$minutes <- as.numeric(minutes_for_conversion)
sessions_validated$session_date <- parsed_session_date

stopifnot(identical(sessions_imported, sessions_imported_snapshot))
stopifnot(inherits(sessions_validated$session_date, "Date"), !anyNA(sessions_validated$session_date))
stopifnot(is.numeric(sessions_validated$minutes))
stopifnot(!any(!is.na(sessions_validated$minutes) &
  (sessions_validated$minutes < 0 | sessions_validated$minutes > 180)))
stopifnot(sum(is.na(sessions_validated$minutes)) == 1L)
```

Only after validation should we make a descriptive calculation. Three completed sessions have recorded durations: 12.5, 9.0, and 15.5 minutes. Their sum is 37 minutes, so their mean is \(37/3\), approximately 12.333 minutes. This is a description of recorded durations for completed sessions in an invented table. It is not a claim about all clinic sessions, and it says nothing about why session `0002` was incomplete.

```r
completed_rows <- sessions_validated$completed == "yes"
completed_minutes <- sessions_validated$minutes[completed_rows]
mean_completed_minutes <- mean(completed_minutes)

stopifnot(identical(sessions_imported, sessions_imported_snapshot))
stopifnot(length(completed_minutes) == 3L)
stopifnot(abs(sum(completed_minutes) - 37) <= 1e-10 + 1e-8 * abs(37))
stopifnot(abs(mean_completed_minutes - 37 / 3) <= 1e-10 + 1e-8 * abs(37 / 3))
```

Notice the order: the calculation uses `sessions_validated`, whose raw tokens and converted values have already been checked. The subset condition is explicit, and the denominator is checked as three. A bare `mean(sessions_validated$minutes, na.rm = TRUE)` happens to give the same number here, but it hides why the missing row was excluded and what completed population the result describes.

## Worked example 2: a useful temporary roundtrip

**Example 4.2 (Worked calculation).**

Writing and reading a temporary file tests an interface that literal text alone does not: path construction, file creation, CSV serialization, and re-import under the same schema. It does not prove that arbitrary spreadsheet software will preserve the file.

The path below is relative to the fresh temporary working directory used for this document. `dir.create()` creates its parent directory, and `file.path()` joins path components. The scalar operator `||` means “or”; here it accepts either a newly created directory or one that already exists. `write.csv(..., row.names = FALSE, na = "NA")` omits R's internal row names and uses the declared missing code. Omitting `row.names = FALSE` would add a field that is not part of our schema.

`write.csv()` converts a `Date` column to its character representation. On re-import, we therefore read that field as character and parse it again. We normalize automatic row names on both data frames before using `identical()` to compare every column value, name, type, and class. Row names are storage metadata here; `session_id`, not a row name, is the declared key.

```r
roundtrip_directory <- "temporary-roundtrip"
created <- dir.create(roundtrip_directory, showWarnings = FALSE)
stopifnot(created || dir.exists(roundtrip_directory))

roundtrip_path <- file.path(roundtrip_directory, "clinic-sessions-v1.csv")
write.csv(sessions_validated, file = roundtrip_path, row.names = FALSE, na = "NA")
stopifnot(file.exists(roundtrip_path))

roundtrip_imported <- read.csv(
  file = roundtrip_path,
  colClasses = "character",
  na.strings = NULL,
  strip.white = FALSE,
  check.names = FALSE,
  row.names = NULL
)
roundtrip_imported_snapshot <- roundtrip_imported
roundtrip_date <- as.Date(roundtrip_imported$session_date, format = "%Y-%m-%d")
roundtrip_date_ok <- grepl("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", roundtrip_imported$session_date) &
  !is.na(roundtrip_date) &
  format(roundtrip_date, "%Y-%m-%d") == roundtrip_imported$session_date
roundtrip_missing <- roundtrip_imported$minutes == "NA"
roundtrip_decimal <- grepl("^[0-9]+(\\.[0-9]+)?$", roundtrip_imported$minutes)

stopifnot(identical(names(roundtrip_imported), expected_names))
stopifnot(nrow(roundtrip_imported) == 4L)
stopifnot(all(roundtrip_date_ok), all(roundtrip_missing | roundtrip_decimal))
stopifnot(!any(duplicated(roundtrip_imported$session_id)))

roundtrip_validated <- roundtrip_imported
roundtrip_minutes <- roundtrip_validated$minutes
roundtrip_minutes[roundtrip_minutes == "NA"] <- NA_character_
roundtrip_validated$minutes <- as.numeric(roundtrip_minutes)
roundtrip_validated$session_date <- roundtrip_date
stopifnot(identical(roundtrip_imported, roundtrip_imported_snapshot))

roundtrip_validated_normalized <- roundtrip_validated
sessions_validated_normalized <- sessions_validated
row.names(roundtrip_validated_normalized) <- NULL
row.names(sessions_validated_normalized) <- NULL
stopifnot(identical(
  roundtrip_validated_normalized,
  sessions_validated_normalized
))
stopifnot(identical(roundtrip_validated$session_id, c("0001", "0002", "0003", "0004")))
```

This roundtrip is useful because it catches a common export mistake immediately: writing internal row names as an extra first column. It also confirms that the missing duration, date class, leading-zero identifiers, and exact values survive the declared export/import procedure in this R environment.

## Adverse case: successful parsing can still be failure

**Example 4.3 (Worked calculation).**

Suppose a second copy repeats `0003` in its final row. CSV syntax allows that: the parser has no way to know that `session_id` was meant to be unique. Import succeeds, but the key check stops the table before analysis.

Now suppose the first duration is written as `"12,5"`, using a comma decimal inside quotes. The comma remains part of one raw character field because it is quoted, but the token fails our declared decimal grammar. Again, the CSV syntax is readable while the table violates its schema. A semicolon-separated, comma-decimal source would need a different declared import convention, such as the defaults of `read.csv2`; silently mixing conventions is not a repair.

The code below constructs Boolean failure flags directly from raw character tokens. It covers the two original adverse cases and the reviewer boundary cases: only literal `NA` is accepted as missing; blank and `NaN` are rejected; only an exact, valid `YYYY-MM-DD` token is accepted. `stopifnot()` confirms every documented branch without deliberately halting the document.

```r
duplicate_csv <- sub(
  "0004,2026-09-02,15.5,B,yes",
  "0003,2026-09-02,15.5,B,yes",
  raw_csv,
  fixed = TRUE
)
duplicate_imported <- read.csv(
  text = duplicate_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
duplicate_detected <- any(duplicated(duplicate_imported$session_id))
stopifnot(duplicate_detected)

comma_decimal_csv <- sub("12.5", '"12,5"', raw_csv, fixed = TRUE)
comma_decimal_imported <- read.csv(
  text = comma_decimal_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
comma_decimal_detected <- !grepl("^[0-9]+(\\.[0-9]+)?$", comma_decimal_imported$minutes[1])

missing_token_csv <- paste(
  "case_id,minutes",
  "allowed,NA",
  "blank,",
  "nan,NaN",
  sep = "\n"
)
missing_token_imported <- read.csv(
  text = missing_token_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
raw_missing_tokens <- missing_token_imported$minutes
missing_token_allowed <- raw_missing_tokens == "NA"

date_token_csv <- paste(
  "session_date",
  "2026-09-01",
  "2026-9-1",
  "2026-09-01junk",
  "2026-02-30",
  sep = "\n"
)
date_token_imported <- read.csv(
  text = date_token_csv,
  colClasses = "character",
  na.strings = NULL,
  check.names = FALSE,
  row.names = NULL
)
raw_date_tokens <- date_token_imported$session_date
adverse_parsed_dates <- as.Date(raw_date_tokens, format = "%Y-%m-%d")
date_token_allowed <- grepl("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", raw_date_tokens) &
  !is.na(adverse_parsed_dates) &
  format(adverse_parsed_dates, "%Y-%m-%d") == raw_date_tokens

stopifnot(nrow(comma_decimal_imported) == 4L)
stopifnot(is.character(comma_decimal_imported$minutes))
stopifnot(comma_decimal_detected)
stopifnot(nrow(missing_token_imported) == 3L)
stopifnot(identical(raw_missing_tokens, c("NA", "", "NaN")))
stopifnot(identical(missing_token_allowed, c(TRUE, FALSE, FALSE)))
stopifnot(nrow(date_token_imported) == 4L)
stopifnot(identical(date_token_allowed, c(TRUE, FALSE, FALSE, FALSE)))
```

This is the boundary in R-CLAIM-schema made concrete. The checks detect the duplicated key and the invalid duration token because both rules were declared. They would not detect a plausible but mistyped value such as 12.5 in place of 21.5.

## Raw data, derived data, and exclusions have different roles

Treat `sessions_imported` as immutable evidence of the character tokens that were imported. The code verifies that it still equals `sessions_imported_snapshot` after parsing. `sessions_validated` is the separate derived object with `Date` and numeric columns. A later analysis table may select rows from that validated object, but its construction should be visible. For example, the completed-session summary uses the declared `completed == "yes"` condition. An exclusion ledger should then record that one row, key `0002`, was excluded from the completed-duration summary because `completed` is `no` and its duration is missing.

The ledger does not erase the row. It links a raw key to a stated rule and a consequence:

| Raw key | Rule applied | Consequence |
|---|---|---|
| `0002` | completed duration required for this summary | excluded from the three-session completed-duration mean; retained in raw table |

This separation matters when policies change. If a later question concerns the proportion completed, `0002` is essential rather than unusable. Overwriting the raw table would make that change of question harder to audit.

Validation and exclusion also answer different questions. Validation asks whether the raw table satisfies its declared representation and structural rules. Exclusion decides which validated rows contribute to a particular analysis. A missing duration can be valid according to the schema yet absent from a mean requiring observed duration. That absence must remain part of the claim's boundary.

## A compact import audit

Before reporting a result from a table, be able to answer these questions:

1. What path or literal source was read, and relative to which working directory?
2. What is the source's provenance and version?
3. What does one row represent?
4. Which columns form the key, and were missing or duplicated keys rejected?
5. What types, units, categories, ranges, and missing codes were declared?
6. Were dates and other structured values parsed explicitly?
7. Did row counts and cross-column rules pass before calculation?
8. Which new table was derived, and which raw keys were excluded under what rule?
9. Does the final claim name its subset and stop at what provenance and validation can support?

A green validation result is valuable evidence about a table's agreement with its schema. It is not evidence that the schema was wise, that measurements were honest, or that the observed sessions represent a wider population. Those questions require knowledge of the data-generating mechanism and the intended estimand.

## Exercises

The [solutions companion](solutions-projects-imports-validation.md) contains complete explanations. Attempt each exercise before reading it.

## R-04-E01

**Exercise 4.1**

State a raw schema for a CSV whose rows are library visits. Its columns are `visit_id`, `visit_date`, `wait_minutes`, and `service`. Specify the row unit, key, representation of every column, units, allowed values or ranges, and missing codes. Explain one plausible measurement error that could pass your schema.

<details>
<summary>Hint 1</summary>

**Hint.** Separate what a field looks like from what it means, and remember that validation cannot compare a recorded plausible value with an unobserved true value.

</details>
<details>
<summary>Hint 2</summary>

A plausible transcription error can satisfy every type and range rule without equalling the true measurement.

</details>
<details>
<summary>Solution</summary>

One defensible schema is the following. One row represents one arrival by one library user at a service desk, on the recorded calendar date. `visit_id` is a required character key and must be unique. `visit_date` arrives as character in the unmodified CSV; it must have exact `YYYY-MM-DD` shape, parse with `%Y-%m-%d`, and format back to the identical token before conversion to class `Date`. `wait_minutes` also arrives as character. A nonmissing token uses digits with an optional decimal fraction, and only after that lexical check is it converted to numeric minutes in the range 0 through 180. The literal text `NA` is its only missing code. `service` is required character data with allowed categories `checkout`, `return`, and `research`.

This is only one possible contract; a real source owner would need to confirm its rules. In particular, the row unit must say whether a person who arrives twice creates two visits. A wait recorded as 14 minutes when the actual wait was 41 minutes could pass all these checks: 14 is numeric and in range. Schema validation cannot observe the true wait independently.

</details>

## R-04-E02

**Exercise 4.2**

The literal source `member_id,books\n007,2\n010,5` is imported without `colClasses`. Predict what can happen to `member_id`, then write base-R code that preserves both identifiers exactly as character strings and asserts the result.

<details>
<summary>Hint 1</summary>

**Hint.** Identifiers are labels even when every character is a digit.

</details>
<details>
<summary>Hint 2</summary>

Preserve identifiers as character before automatic conversion can discard their leading zeroes.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E03

**Exercise 4.3**

A source contains `visit_date` values `03/04/2026` and `04/03/2026`. Explain why “looks like a date” is not a schema. Choose one interpretation, parse both values explicitly with `as.Date()`, and assert the resulting ISO-formatted dates. Then write exact-shape and parse-roundtrip checks for a `YYYY-MM-DD` schema, showing that `2026-09-01` passes while `2026-9-1`, `2026-09-01junk`, and `2026-02-30` fail.

<details>
<summary>Hint 1</summary>

**Hint.** For month/day/year, inspect the `%m`, `%d`, and `%Y` conversion specifications. For the exact schema, require both lexical shape and equality after parsing and formatting.

</details>
<details>
<summary>Hint 2</summary>

Require exact lexical shape, successful parsing and equality after formatting back to the source token.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E04

**Exercise 4.4**

Starting from keys `c("v01", "v02", "v02", NA)`, report the missing position, the later occurrence marked by forward `duplicated()`, and every position belonging to a duplicate pair. Write a validation fragment that rejects both missing and duplicated keys. Explain why the detector cannot decide which duplicate record, if either, should be retained.

<details>
<summary>Hint 1</summary>

**Hint.** Use `anyNA()` for missingness. Combine forward and reverse `duplicated()` flags to mark every member of a duplicate pair.

</details>
<details>
<summary>Hint 2</summary>

A forward duplicate flag marks the later record; the forward-or-reverse flag marks both repeated-key positions.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E05

**Exercise 4.5**

A raw duration field uses literal `NA` as its sole missing code. Show that raw tokens `c("NA", "", "NaN")` accept only the first value before conversion. Then, for converted durations `c(8, -1, 240, NA)`, identify the offending range positions and write a check that ignores `NA` only for the range comparison. Explain why replacing `NA` by zero would change meaning.

<details>
<summary>Hint 1</summary>

**Hint.** Check literal character tokens before coercion. After conversion, combine `!is.na(x)` with the out-of-range condition.

</details>
<details>
<summary>Hint 2</summary>

Validate missing tokens separately from numeral syntax and keep an unknown measurement distinct from observed zero.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E06

**Exercise 4.6**

Create a two-row data frame with character keys `c("005", "006")`, dates `2026-10-01` and `2026-10-02`, and numeric values `3.5` and `NA`. Write it to a temporary relative CSV path without row names, read it back with declared column classes, parse the dates explicitly, normalize automatic row names, and assert identical values.

<details>
<summary>Hint 1</summary>

**Hint.** `write.csv(..., row.names = FALSE, na = "NA")` and a second `as.Date()` call are both needed for this contract.

</details>
<details>
<summary>Hint 2</summary>

Keep keys as text and compare normalized row names after explicit reconstruction of the date column.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E07

**Exercise 4.7**

The raw table has keys `a`, `b`, `c`, durations 5, `NA`, 11 minutes, and completion values `yes`, `no`, `yes`. Construct a completed-session analysis table without modifying the raw object. Produce an exclusion ledger for omitted keys, calculate the completed-session mean, and write a bounded sentence describing it.

<details>
<summary>Hint 1</summary>

**Hint.** Keep the selection condition in a named logical vector and compare the raw object with an untouched copy.

</details>
<details>
<summary>Hint 2</summary>

Keep the raw object unchanged and record each omitted key and its selection reason.

</details>
<details>
<summary>Solution</summary>

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

</details>

## R-04-E08

**Exercise 4.8**

Two analysts receive the same validated file. Analyst A records its creator, retrieval date, and checksum but never checks the key. Analyst B checks names, types, ranges, row count, and key uniqueness but cannot identify where the file came from. Diagnose what each analyst knows and does not know. Explain why combining provenance and schema validation still would not prove that every measurement is correct.

<details>
<summary>Hint 1</summary>

**Hint.** Provenance concerns source history; validation concerns agreement with declared rules.

</details>
<details>
<summary>Hint 2</summary>

A checksum checks byte identity while a unique key checks a structural rule; neither remeasures the values.

</details>
<details>
<summary>Solution</summary>

Analyst A has useful provenance evidence. The creator and retrieval date distinguish the source and occasion, while a checksum can later detect whether its exact bytes changed. A has not checked whether the table represents one record per declared key, so duplicated or missing keys could remain.

Analyst B knows that this copy agrees with the named structural rules: its names, types, ranges, row count, and unique-key condition passed. B cannot establish which source or version those bytes represent, whether they were transformed before receipt, or who supplied them.

Combining the records would establish both a source history and agreement with the declared schema. It would still not prove measurement truth. A plausible transcription error may satisfy every range and type rule, and provenance reports where a value came from rather than independently remeasuring it. The strongest warranted statement is specific: this identified file passed these named checks.

</details>


## R-04-E09

**Exercise 4.9**

A schema expects wait_minutes between zero and 180. A device exports the numeric value 90 in seconds while labeling the field wait_minutes. Explain why type and range checks can pass, calculate the intended minutes value, and state what source information would justify a repair.

<details>
<summary>Hint 1</summary>

A plausible numerical range cannot determine the measurement unit.

</details>
<details>
<summary>Hint 2</summary>

Confirm the device's measurement convention before converting anything.

</details>
<details>
<summary>Solution</summary>

Ninety is numeric and falls within the allowed range, so the checks pass. If independent device documentation confirms seconds, its intended duration is $90/60=1.5$ minutes. Retain the raw token, identify the device and protocol, document the erroneous field label, and place the justified conversion in a derived field. A guess about units does not authorise overwriting the raw measurement. Source provenance and agreement with a schema answer different questions.

</details>

## R-04-E10

**Exercise 4.10**

A synthetic table records patient_id values p01, p01, p02, p02 and occasions before, after, before, after, with complete outcomes. Is patient_id a row key? Propose a composite key and explain what uniqueness would and would not establish.

<details>
<summary>Hint 1</summary>

One row records a patient at one occasion.

</details>
<details>
<summary>Hint 2</summary>

A repeated patient label across occasions is expected, but a repeated patient-occasion pair needs investigation.

</details>
<details>
<summary>Solution</summary>

Patient ID alone is not unique for these four records. The pair (patient_id, occasion) identifies the four stated observations uniquely. This supports one record per declared pair, not four independent patients, accurate measurement or a treatment effect. If a pair repeated, source information would be needed to decide whether it represented duplicate storage or two separately intended measurements. The decision should follow the unit definition rather than an automatic instruction to retain the first row.

</details>

## Sources and authorship

The R semantics in this chapter were checked against the installed R Core Team documentation for R 4.6.0: the `utils::read.table` help page, including `read.csv`, `text`, `colClasses`, `na.strings`, `check.names`, and `row.names`; the `utils::write.table` help page, including `write.csv`, date conversion, and `row.names = FALSE`; and the base-package help pages for `file.path`, `as.Date`, `duplicated`, `anyNA`, logical operators, matching with `%in%`, `stopifnot`, and `identical`. The executable examples were run with R 4.6.0. These are software-semantics sources; the schema reasoning, synthetic fixture, examples, adverse case, and exercises are original to Math Atlas.

This chapter is licensed CC BY-SA 4.0. No human review is claimed in this draft.

## Summary

An import is a translation from identified source bytes into a declared schema. Keys, literal missing tokens, date roundtrips, units and range checks make that translation inspectable. Preserve the raw table and derive analysis subsets with an exclusion ledger. Provenance and validation support specific claims about a file, while plausible transcription errors can still pass structural checks.
