var e=`---
parent_id: book-statistics-with-r
matter_id: solutions-console-scripts-help-errors
title: "Solutions: R at the Console, in Scripts, and When Things Go Wrong"
level: undergraduate
license: CC BY-SA 4.0
---

# Solutions: R at the Console, in Scripts, and When Things Go Wrong {#section-1-solutions-r-at-the-console-in-scripts-and-when-things-g}

These solutions run independently of the chapter in a fresh R session. Every literal dataset is an original synthetic teaching fixture created by Math Atlas, version 1. Each solution declares its row meaning, units, row count, missingness, and exclusions. The fixtures support computation practice only; they are not observations about real people or systems.

<a id="section-3-r-02-e01"></a>
## R-02-E01 {#section-5-r-02-e01}

After \`x <- c(6, 10, 14)\`, adding 2 gives 8, 12, and 16, while dividing by 2 gives 3, 5, and 7. Those operations act on each entry and therefore return three values. The mean is

\\[
\\frac{6+10+14}{3}=10,
\\]

so \`mean(x)\` returns one value. \`length(x)\` is 3, so its comparison with \`3L\` returns the single logical value \`TRUE\`.

\`\`\`r
x <- c(6, 10, 14)
stopifnot(all(x + 2 == c(8, 12, 16)))
stopifnot(all(x / 2 == c(3, 5, 7)))
stopifnot(abs(mean(x) - 10) <= 1e-10 + 1e-8 * abs(10))
stopifnot(length(x) == 3L)
\`\`\`

The comparison is a check; it does not rename or modify \`x\`.

<a id="section-23-r-02-e02"></a>
## R-02-E02 {#section-25-r-02-e02}

\`target <- 12\` assigns the value 12 to the name \`target\`. After that assignment, \`target == 12\` asks whether the stored value equals 12 and returns \`TRUE\`; \`target == 10\` returns \`FALSE\`.

\`\`\`r
target <- 12
stopifnot(target == 12)
stopifnot(identical(target == 10, FALSE))
\`\`\`

If \`<-\` replaced \`==\` in a supposed check, R would store the new value instead of asking a question. For example, \`target <- 10\` would change \`target\` to 10 and would provide no logical test of the old value. This is dangerous because later expressions would use the changed state.

<a id="section-35-r-02-e03"></a>
## R-02-E03 {#section-37-r-02-e03}

Fixture \`R-02-X03\` has four rows, one per synthetic bus trip, keyed \`b01\` through \`b04\`. \`trip_minutes\` records duration in minutes; there are no missing values, missing codes, or exclusions. The total is 120 minutes, so the mean is $120/4=30$ minutes.

\`\`\`r
# R-02-X03, canonical literal source.
trip_id <- c("b01", "b02", "b03", "b04")
trip_minutes <- c(24, 31, 29, 36)
trip_count <- length(trip_minutes)
trip_total <- sum(trip_minutes)
trip_mean <- mean(trip_minutes)

stopifnot(length(trip_id) == trip_count)
stopifnot(anyDuplicated(trip_id) == 0L)
stopifnot(trip_count == 4L)
stopifnot(trip_total == 120)
stopifnot(abs(trip_mean - 30) <= 1e-10 + 1e-8 * abs(30))
\`\`\`

A bounded conclusion is: “Across the four declared synthetic bus trips, the mean recorded trip time was 30 minutes (120 minutes over four trips). These invented complete values demonstrate a calculation and do not estimate travel time for any real route or future trip.” The second sentence is necessary because the fixture has no sampling mechanism connecting it to a real target population.

<a id="section-56-r-02-e04"></a>
## R-02-E04 {#section-58-r-02-e04}

In the installed \`sum\` help, \`...\` denotes the numeric, complex, or logical objects whose entries are to be added. The argument \`na.rm\` controls whether missing values are removed before summing. Its default is \`FALSE\`, so missing input normally propagates to a missing result. After missing values are removed, an input containing no remaining values has sum zero; zero is the additive identity.

\`\`\`r
sum_help <- help("sum", package = "base")
stopifnot(length(sum_help) == 1L)
stopifnot(sum(numeric(0)) == 0)
stopifnot(sum(c(NA_real_), na.rm = TRUE) == 0)
stopifnot(is.na(sum(c(NA_real_), na.rm = FALSE)))
\`\`\`

These are software semantics. Setting \`na.rm = TRUE\` does not show that the missing units resemble the observed units or that the reduced data answer the original estimand. That judgment requires information about the data mechanism.

The two zero results also need different readings. \`sum(numeric(0))\` adds an explicitly empty input. \`sum(c(NA_real_), na.rm = TRUE)\` starts with one recorded missing entry and discards it under the requested software rule. Equal numerical outputs do not make their data histories equal, which is why a script must record the missingness policy alongside the command.

<a id="section-72-r-02-e05"></a>
## R-02-E05 {#section-74-r-02-e05}

Fixture \`R-02-X05\` has three rows, one per synthetic quiz attempt, keyed \`q01\` through \`q03\`. \`scores\` records points, with no missing values, missing codes, or exclusions. The immediate problem is name lookup: \`scores\` was defined, but \`score\` was not. The handler surrounds only the expected failing expression. We then verify the condition before running the repair outside the handler.

\`\`\`r
attempt_id <- c("q01", "q02", "q03")
scores <- c(7, 9, 11)
stopifnot(length(attempt_id) == length(scores))
stopifnot(anyDuplicated(attempt_id) == 0L)

score_error <- tryCatch(
  mean(score),
  error = function(e) e
)
stopifnot(inherits(score_error, "error"))
stopifnot(grepl("score", conditionMessage(score_error), fixed = TRUE))
stopifnot(grepl("not found", conditionMessage(score_error), fixed = TRUE))

score_mean <- mean(scores)
stopifnot(abs(score_mean - 9) <= 1e-10 + 1e-8 * abs(9))
\`\`\`

The hand check is $(7+9+11)/3=27/3=9$. Catching all code for the rest of the script would be a poor repair: it could conceal a different failure instead of proving that this expected one occurred.

Correcting \`score\` to \`scores\` is justified because the intended assignment is visible immediately above and the three values match the exercise statement. In a longer analysis, a similarly named object might represent a different variable. The error message establishes that lookup failed; it does not authorize choosing whichever existing name looks closest.

<a id="section-98-r-02-e06"></a>
## R-02-E06 {#section-100-r-02-e06}

The fragment depends on state created elsewhere. It does not state the literal input, row meaning, unit, or missingness and so cannot be rerun from a clean session. A complete version is below.

Fixture \`R-02-X06\` has three rows, one per synthetic request, keyed \`r01\` through \`r03\`. \`wait_seconds\` is waiting duration in seconds. It has no missing values, missing codes, or exclusions.

\`\`\`r
# R-02-X06, canonical literal source.
request_id <- c("r01", "r02", "r03")
wait_seconds <- c(20, 40, 60)
wait_mean_seconds <- mean(wait_seconds)

stopifnot(length(request_id) == length(wait_seconds))
stopifnot(anyDuplicated(request_id) == 0L)
stopifnot(length(wait_seconds) == 3L)
stopifnot(sum(wait_seconds) == 120)
stopifnot(abs(wait_mean_seconds - 40) <= 1e-10 + 1e-8 * abs(40))
\`\`\`

The mean is 40 seconds for these three declared requests. A saved workspace might make the original fragment run, but it would leave the input and its meaning outside the script.

This repair makes the same-input calculation rerunnable. It still does not explain how real requests would have been selected, whether waiting time was measured accurately, or what population should receive the conclusion. Explicit computational state makes this calculation reproducible, while the statistical mechanism remains a separate requirement.

<a id="section-121-r-02-e07"></a>
## R-02-E07 {#section-123-r-02-e07}

Fixture \`R-02-X07\` has three rows, one per synthetic walk, keyed \`w01\` through \`w03\`. \`metres\` records distance in metres. It has no missing values, missing codes, or exclusions. Dividing every value by 1000 yields 0.5, 0.75, and 1.25 kilometres. The mean distance is

\\[
\\frac{500+750+1250}{3}=\\frac{2500}{3}\\text{ metres}
\\]

or $2.5/3$ kilometres, approximately 833.333 metres or 0.833333 kilometre.

\`\`\`r
# R-02-X07, canonical literal source.
walk_id <- c("w01", "w02", "w03")
metres <- c(500, 750, 1250)
kilometres <- metres / 1000
mean_metres <- mean(metres)
mean_kilometres <- mean(kilometres)

stopifnot(length(walk_id) == length(metres))
stopifnot(anyDuplicated(walk_id) == 0L)
stopifnot(all(abs(kilometres - c(0.5, 0.75, 1.25)) <= 1e-10))
stopifnot(abs(mean_metres - 2500 / 3) <= 1e-10 + 1e-8 * abs(2500 / 3))
stopifnot(abs(mean_kilometres - mean_metres / 1000) <=
            1e-10 + 1e-8 * abs(mean_metres / 1000))
\`\`\`

Writing the units prevents an apparent contradiction between 833.333 and 0.833333: they express the same distance on different scales.

<a id="section-149-r-02-e08"></a>
## R-02-E08 {#section-151-r-02-e08}

Agreement supports two limited conclusions. First, both runs evaluated the recorded expressions to the same displayed result for these literal inputs. Second, the script has at least passed this particular same-input rerun check in the two environments used.

It does not establish at least these three stronger claims:

1. It does not show that the measurements are accurate or that the rows represent the intended units; both students could repeat the same bad inputs.
2. It does not show that sampling, assignment, or missingness supports a claim about a wider population or a causal effect; computation cannot reconstruct an undocumented mechanism.
3. It does not show that the script works on every R version, operating system, locale, or hardware configuration. Evidence from two runs is evidence only for the environments actually tested.

Nor does obtaining 45 determine whether the unit is minutes, seconds, or something else. The common result is meaningful only alongside the fixture declaration and statistical target; the exercise does not specify which four values or statistic were used.

\`\`\`r
# One demonstration fixture consistent with the agreement, not identified by it.
session_id <- c("s01", "s02", "s03", "s04")
minutes <- c(15, 30, 45, 90)
agreed_result <- mean(minutes)

stopifnot(length(session_id) == 4L)
stopifnot(anyDuplicated(session_id) == 0L)
stopifnot(length(minutes) == 4L)
stopifnot(abs(agreed_result - 45) <= 1e-10 + 1e-8 * abs(45))
\`\`\`

The strongest warranted statement is therefore narrow: “For the same four literal inputs, the same complete script returned 45 minutes in each tested run.” The demonstration above shows one compatible mean calculation; four values all equal to 45 would give the same mean. Agreement alone identifies neither the inputs nor the statistic, and does not validate the measurements or design.

[Return to the chapter and exercises R-02-E01–R-02-E08.](#/item/book-statistics-with-r?chapter=console-scripts-help-errors)

The solutions, explanations, and synthetic fixtures are original to Math Atlas and licensed CC BY-SA 4.0. No human review is claimed for this author submission.

<a id="section-179-r-02-e09"></a>
## R-02-E09 {#section-181-r-02-e09}

The final stored value is four, the first vector's mean. Reassigning x does not establish a live spreadsheet dependency. Recalculate after assigning the new input:

\`\`\`r
x <- c(10, 20, 30)
mean_x <- mean(x)
stopifnot(length(x) == 3L)
stopifnot(abs(mean_x - 20) <= 1e-10 + 1e-8 * 20)
\`\`\`

The corrected mean is twenty declared units. The script needs both the input and its calculation in the intended order; a plausible saved number does not establish which current input it describes.

<a id="section-192-r-02-e10"></a>
## R-02-E10 {#section-194-r-02-e10}

The default sum is missing. Removing the unknown gives ten points from two observations:

\`\`\`r
x <- c(3, NA_real_, 7)
observed_count <- sum(!is.na(x))
observed_total <- sum(x, na.rm = TRUE)
stopifnot(is.na(sum(x)))
stopifnot(observed_count == 2L, observed_total == 10)
\`\`\`

All three declared rows still exist. The command totals the recorded scores; it neither shows that the unknown score is zero nor identifies the full three-score total.

`;export{e as default};