var e=`---
parent_id: book-statistics-with-r
chapter_id: reports-and-provenance
title: "Reports That Can Be Traced"
level: undergraduate
estimated_minutes: 115
license: CC BY-SA 4.0
---

# Reports That Can Be Traced

An analysis can be correct in an R session and still fail its reader. A number may have been copied into prose before the data changed. A figure may hide the values needed by someone who cannot see it. A table may omit three records without saying why. A script may run from an analyst's saved workspace but fail in a clean session. These are reporting failures, and each one weakens the connection between evidence and claim.

A defensible report makes that connection inspectable:

> **source → validated rows → derived result → displayed table or figure → bounded claim**

This chapter turns an R script into a small plain Markdown report. Markdown is ordinary text with lightweight marks such as \`#\` for a heading and \`|\` for table columns. No report framework is required. The point is not decorative automation. It is to calculate a result once, insert that result into every display that uses it, and leave enough provenance for another reader to trace the claim.

## Earlier ideas become reporting obligations

Several definitions from earlier chapters now serve as report checks. A **schema** (R-DEF-schema) states the columns, types, units, allowed values, missing codes, and row meaning. **Provenance** (R-DEF-provenance) records where data came from and what happened to them. A **key** (R-DEF-key) identifies a row uniquely under the declared row meaning. A report should name all three.

A **function** (R-DEF-function) gives a calculation a reusable input-output rule. An **assertion** (R-DEF-assertion) stops computation when a required condition is false. **Iteration** (R-DEF-iteration) repeats an operation over declared inputs. These programming ideas matter because a report should rerun the same checked calculation for every intended group rather than invite manual copying.

Inferential terms also belong in the report when they are used. A **confidence procedure** (R-DEF-confidence-procedure) is a rule for constructing an interval; its **coverage** (R-DEF-coverage) is a repeated-mechanism probability, not a property proved by one interval. **Type I error** (R-DEF-type-one-error) and **power** (R-DEF-power) are likewise repeated-mechanism properties. **Practical importance** (R-DEF-practical-importance) requires a subject-matter threshold or consequence, not merely a small p-value.

Finally, a **diagnostic** (R-DEF-diagnostic) checks a specified feature or possible failure; it cannot certify every assumption. **Multiplicity** (R-DEF-multiplicity) means that several opportunities to make a claim belong to one analysis family, whose **familywise error** (R-DEF-familywise-error) is the chance of at least one false rejection. **Analysis selection** (R-DEF-analysis-selection) occurs when observed results influence which method, subgroup, or outcome is reported. A **missingness sensitivity analysis** (R-DEF-missingness-sensitivity) asks how conclusions change under explicit alternatives for unseen values. A final report must preserve these conditions and choices instead of showing only the favorable endpoint.

## Three links in a reproducibility record

**Definition R-DEF-computational-reproducibility (computational reproducibility).** A result is computationally reproducible under a declared input, code, software environment, and execution order when rerunning that computation reproduces the result within a stated comparison rule.

For exact text or row identities, the comparison rule can be equality. For floating-point calculations, a report should state a tolerance or compare the formatted value actually displayed. Reproducibility is conditional: change the data, code, R version, locale, or random-number state and the result may change legitimately.

**Definition R-DEF-claim-ledger (claim ledger).** A claim ledger is a table that gives each substantive report claim a stable ID and maps it to its computed result, source rows, exclusions, assumptions, and limits.

The ledger need not include every grammatical sentence. It should include claims a reader might quote or act on: estimates, comparisons, uncertainty statements, diagnostic judgments, and conclusions about a population or intervention.

**Definition R-DEF-report-provenance (report provenance).** Report provenance is the record connecting a rendered report to the literal source data, transformations, calculation code, software and random-number environment, and generated artifacts used to produce it.

A useful provenance record contains identities as well as descriptions. A checksum summarizes the bytes of a file. If a rerun gives a different checksum, the bytes differ. Matching checksums provide strong evidence that the same bytes were used, subject to the checksum method's limitations. They do not show that measurements are accurate, that rows represent the target population, or that a statistical model is appropriate. A checksum is evidence about file identity, not truth.

## Worked example 1: one calculation, several displays

We will build a report from \`R15-HELPDESK-v1\`, an original literal synthetic fixture created by Math Atlas. One row represents one service request recorded during the declared demonstration period. The key is \`case_id\`. \`channel\` is either \`desk\` or \`chat\`; it records the request route and was not randomly assigned. \`wait_minutes\` is elapsed time from logged arrival to first response, in minutes. The explicit missing code is \`NA\`. \`eligible\` says whether the row is a real demonstration request rather than a known equipment-test record.

The fixture has 12 rows. Two eligible requests have missing wait time, and one row is an ineligible test request. The analysis target is the mean recorded wait among eligible rows with observed wait time. That complete-case target has a denominator of nine. It is narrower than the mean for all eligible requests, because the two missing waits are excluded.

The following block stores the raw fixture as literal CSV text, writes it only to a new temporary name inside the current working directory, and reads it back. \`tempfile()\` creates an unused path name; here \`tmpdir = getwd()\` keeps every artifact inside the runner's temporary working directory. \`writeLines()\` writes a character vector as text lines. \`read.csv()\` reads the table and interprets the literal string \`NA\` as missing. \`file.exists()\` checks that a path is visible to this R process. \`normalizePath()\` converts an existing path to a canonical platform form, which lets us compare the artifact's directory with the working directory without assuming a path separator.

The final lines apply validation tools introduced earlier: \`dim()\` returns row and column counts; \`anyDuplicated()\` locates the first duplicate, returning zero when there is none; \`setequal()\` compares two sets without depending on order; and \`is.finite()\` rejects infinities as well as missing numeric values. These checks enforce the declared schema. They do not verify whether a wait was measured truthfully.

\`\`\`r
# R15-HELPDESK-v1: original literal synthetic data, Math Atlas.
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

raw_path <- tempfile(pattern = "r15-raw-", fileext = ".csv", tmpdir = getwd())
stopifnot(!file.exists(raw_path))
writeLines(raw_csv, raw_path)
stopifnot(file.exists(raw_path))
stopifnot(dirname(normalizePath(raw_path, mustWork = TRUE)) ==
            normalizePath(getwd(), mustWork = TRUE))

requests <- utils::read.csv(
  raw_path,
  na.strings = "NA",
  stringsAsFactors = FALSE
)
raw_snapshot <- requests

stopifnot(identical(dim(requests), c(12L, 4L)))
stopifnot(!anyDuplicated(requests$case_id))
stopifnot(setequal(unique(requests$channel), c("desk", "chat")))
stopifnot(is.numeric(requests$wait_minutes))
stopifnot(all(is.na(requests$wait_minutes) |
              (is.finite(requests$wait_minutes) & requests$wait_minutes >= 0)))
stopifnot(sum(is.na(requests$wait_minutes)) == 2L)
stopifnot(sum(!requests$eligible) == 1L)
\`\`\`

The directory assertion is platform-aware, but this chapter was actually executed on Linux and makes no claim that the code was run on another platform.

Now derive the included rows without changing \`requests\`. The logical operator \`&\` means “and.” A \`for\` loop visits each position produced by \`seq_along(channels)\`. We allocate the numeric result vectors first, then fill each position. \`data.frame()\` binds equal-length columns into a table. \`ifelse(test, yes, no)\` creates one reason per excluded row according to a logical test. This makes the intended two-group iteration explicit and avoids relying on group order chosen elsewhere.

\`\`\`r
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

plot_table <- data.frame(
  channel = channels,
  included_n = group_n,
  mean_wait_minutes = group_mean,
  stringsAsFactors = FALSE
)

exclusion_rows <- requests[!include, c("case_id", "channel", "wait_minutes", "eligible")]
exclusion_rows$reason <- ifelse(
  !exclusion_rows$eligible,
  "known ineligible equipment-test record",
  "eligible row with missing wait"
)

stopifnot(overall_n == 9L)
stopifnot(abs(overall_mean - 53 / 9) <= 1e-10 + 1e-8 * abs(53 / 9))
stopifnot(identical(group_n, c(5L, 4L)))
stopifnot(all(abs(group_mean - c(7, 4.5)) <=
              1e-10 + 1e-8 * abs(c(7, 4.5))))
stopifnot(identical(exclusion_rows$case_id, c("h03", "h11", "h12")))
stopifnot(identical(requests, raw_snapshot))
\`\`\`

The exact overall mean is $53/9 = 5.888...$ minutes. For display we will use 5.89 minutes, but the underlying calculation remains unrounded. The desk mean is 7.00 minutes across five included requests; the chat mean is 4.50 minutes across four. Their observed descriptive difference, desk minus chat, is 2.50 minutes. Because channel was not randomly assigned, that difference is not a causal effect.

We next build a claim ledger and a small report. \`sprintf()\` places formatted values into \`%\` fields: \`%.2f\` requests two digits after the decimal point, while \`%d\` requests an integer. Formatting changes displayed text, not the stored numeric result. \`paste()\` joins character values; \`collapse = "\\n"\` places a line break between them.

For the graphic, \`pdf()\` opens a PDF device, \`barplot()\` draws bars whose heights we supply, \`text()\` adds the numeric labels, and \`dev.off()\` closes the device. The stable relative name \`r15-group-means.pdf\` makes the report's bytes reproducible across isolated fresh runs; an assertion stops rather than overwriting a file of that name. Names such as \`grDevices::pdf\` say explicitly which base-distribution namespace supplies a function. \`sessionInfo()\` is captured by the fresh-session runner; inside the small report we record selected environment fields directly. \`extSoftVersion()\` reports linked software, from which we retain the BLAS linear-algebra library even though this analysis does not depend on a delicate matrix calculation. \`tools::sha256sum()\` computes the SHA-256 checksums after both files exist. The \`tools\` package has base priority in R 4.6.0 and is installed with R, so this does not add a third-party dependency.

\`\`\`r
descriptive_difference <- group_mean[channels == "desk"] -
  group_mean[channels == "chat"]

claim_ledger <- data.frame(
  claim_id = c("R15-C01", "R15-C02", "R15-C03"),
  result_object = c("overall_mean", "descriptive_difference", "exclusion_rows"),
  source_rows = c("h01-h12; 9 included", "h01-h12; grouped 5 and 4", "h03,h11,h12"),
  exclusions = c(
    "h03,h11 missing wait; h12 ineligible",
    "h03,h11 missing wait; h12 ineligible",
    "none from exclusion audit"
  ),
  assumptions_and_limits = c(
    "complete observed eligible rows only",
    "observational channel comparison; no causal effect",
    "missing waits remain unknown"
  ),
  stringsAsFactors = FALSE
)

stopifnot(!anyDuplicated(claim_ledger$claim_id))
stopifnot(abs(descriptive_difference - 2.5) <=
            1e-10 + 1e-8 * abs(2.5))

plot_path <- "r15-group-means.pdf"
stopifnot(!file.exists(plot_path))
grDevices::pdf(plot_path, width = 7, height = 4)
bar_positions <- graphics::barplot(
  height = plot_table$mean_wait_minutes,
  names.arg = plot_table$channel,
  col = c("grey35", "white"),
  density = c(NA, 18),
  angle = 45,
  ylim = c(0, 8),
  xlab = "Recorded service channel",
  ylab = "Mean wait among included requests (minutes)"
)
graphics::text(
  x = bar_positions,
  y = plot_table$mean_wait_minutes,
  labels = sprintf("%.2f", plot_table$mean_wait_minutes),
  pos = 3
)
stopifnot(grDevices::dev.off() == 1L)
stopifnot(file.exists(plot_path))
stopifnot(dirname(normalizePath(plot_path, mustWork = TRUE)) ==
            normalizePath(getwd(), mustWork = TRUE))

# The plotted heights come from the same derived table used below.
recorded_plot_values <- plot_table$mean_wait_minutes
stopifnot(identical(recorded_plot_values, group_mean))

session_record <- c(
  r_version = R.version.string,
  platform = R.version$platform,
  locale = Sys.getlocale(),
  timezone = Sys.timezone(),
  blas = unname(extSoftVersion()["BLAS"]),
  rng_kind = paste(RNGkind(), collapse = "/"),
  seed = "not applicable; no random-number function is called"
)

result_lines <- c(
  "| Channel | Included n | Mean wait (minutes) |",
  "| --- | ---: | ---: |",
  sprintf("| %s | %d | %.2f |",
          plot_table$channel,
          plot_table$included_n,
          plot_table$mean_wait_minutes)
)

report_lines <- c(
  "# Synthetic help-desk wait report",
  "",
  "## Question and provenance",
  "",
  "Target: mean recorded wait among eligible requests with observed wait time.",
  "Fixture: R15-HELPDESK-v1, original literal synthetic data, Math Atlas.",
  sprintf("Source rows: %d. Analysis denominator: %d included of %d source rows.",
          nrow(requests), overall_n, nrow(requests)),
  "Missing code: NA. Exclusions: h03 and h11 missing wait; h12 equipment-test row.",
  "",
  "## Results",
  "",
  result_lines,
  "",
  sprintf("Mean wait was %.2f minutes across %d included requests.",
          overall_mean, overall_n),
  sprintf("The observed desk-minus-chat difference was %.2f minutes.",
          descriptive_difference),
  "This is a descriptive observational comparison, not a causal effect.",
  "",
  "## Numeric alternative to the plot",
  "",
  "The table above gives every plotted height and denominator. The desk bar is 7.00 minutes (n=5); the chat bar is 4.50 minutes (n=4), so the desk bar is 2.50 minutes higher.",
  "",
  "## Claim ledger",
  "",
  "| Claim ID | Result object | Source rows | Exclusions | Assumptions and limits |",
  "| --- | --- | --- | --- | --- |",
  sprintf("| %s | %s | %s | %s | %s |",
          claim_ledger$claim_id,
          claim_ledger$result_object,
          claim_ledger$source_rows,
          claim_ledger$exclusions,
          claim_ledger$assumptions_and_limits),
  "",
  "## Execution environment",
  "",
  sprintf("- %s: %s", names(session_record), session_record),
  "",
  sprintf("Plot artifact in this temporary run: \`%s\`.", basename(plot_path))
)

report_path <- tempfile(pattern = "r15-report-", fileext = ".md", tmpdir = getwd())
stopifnot(!file.exists(report_path))
writeLines(report_lines, report_path)
stopifnot(file.exists(report_path))
stopifnot(dirname(normalizePath(report_path, mustWork = TRUE)) ==
            normalizePath(getwd(), mustWork = TRUE))

rendered_text <- paste(readLines(report_path, warn = TRUE), collapse = "\\n")
stopifnot(grepl("Mean wait was 5.89 minutes across 9 included requests.",
                rendered_text, fixed = TRUE))
stopifnot(grepl("Analysis denominator: 9 included of 12 source rows.",
                rendered_text, fixed = TRUE))
stopifnot(grepl("desk bar is 7.00 minutes (n=5)", rendered_text, fixed = TRUE))
stopifnot(grepl("chat bar is 4.50 minutes (n=4)", rendered_text, fixed = TRUE))
stopifnot(grepl("Plot artifact in this temporary run: \`r15-group-means.pdf\`.",
                rendered_text, fixed = TRUE))
stopifnot(identical(requests, raw_snapshot))

raw_sha256 <- unname(tools::sha256sum(raw_path))
report_sha256 <- unname(tools::sha256sum(report_path))
stopifnot(nchar(raw_sha256) == 64L, nchar(report_sha256) == 64L)

cat(sprintf("Computed report: n=%d, mean=%.6f, difference=%.2f\\n",
            overall_n, overall_mean, descriptive_difference))
cat(sprintf("Raw SHA-256: %s\\nReport SHA-256: %s\\n",
            raw_sha256, report_sha256))
\`\`\`

The PDF plot distinguishes the two bars by fill pattern as well as shade. Its axes name the channel and the measured unit. The generated Markdown also contains the exact numeric table and a prose comparison, so the values and relationship do not depend on seeing the plot. The report and PDF exist only in the fresh runner's temporary working directory; this authoring run does not copy generated artifacts into the repository.

The fixture checksum identifies the bytes written from \`raw_csv\`. The report checksum identifies the exact generated Markdown bytes. A reader who obtains a different report checksum knows some byte differs, but the checksum cannot explain whether the difference is a harmless timestamp, a corrected calculation, or a damaging edit. Interpretation still requires the ledger and source.

## Worked example 2: catch a stale sentence

Suppose an earlier draft said, “Mean wait was 6.50 minutes across 10 included requests.” That sentence can survive a data correction because it is only text. We compare it with text generated from the current objects.

\`\`\`r
stale_sentence <- "Mean wait was 6.50 minutes across 10 included requests."
current_sentence <- sprintf(
  "Mean wait was %.2f minutes across %d included requests.",
  overall_mean,
  overall_n
)

audit_claim_text <- function(stated_text, computed_text) {
  if (length(stated_text) != 1L || length(computed_text) != 1L) {
    stop("audit_claim_text requires one stated and one computed string")
  }
  identical(stated_text, computed_text)
}

stopifnot(!audit_claim_text(stale_sentence, current_sentence))
stopifnot(audit_claim_text(current_sentence, current_sentence))
stopifnot(identical(current_sentence,
                    "Mean wait was 5.89 minutes across 9 included requests."))
\`\`\`

The function catches this particular mismatch because we declared an exact expected sentence. It cannot recognize every misleading paraphrase. “Waiting was dramatically improved” might contain no number to compare and would require a human to ask: improved relative to what, under which mechanism, and by how much?

The claim ledger makes that audit feasible. \`R15-C01\` points to \`overall_mean\`, the nine included rows, and the complete-case target. \`R15-C02\` points to the grouped calculation and records that channel was observational. \`R15-C03\` points to the exclusion table and says that the missing waits remain unknown. Environment details record R, platform, locale, time zone, BLAS, RNG kind, and the absence of a seed because no random-number function was called. If a future report adds simulation, each stochastic block must declare \`RNGkind("Mersenne-Twister", "Inversion", "Rejection")\`, set and record its assigned seed, and describe the probability mechanism.

## The adverse case: a perfectly repeated wrong answer

**Claim R-CLAIM-reproducibility (rerun, replication, and validity).** Assume a declared computation is rerun with the same input bytes, code, software environment, and relevant random-number state. Reproducing its output is computational reproducibility. An independent replication instead obtains new observations under a stated scientific mechanism and analyzes them. Neither computational reproducibility nor independent replication alone certifies measurement quality, design validity, model assumptions, or a causal interpretation. **Status:** the non-implication from reproducibility to validity is proved here by counterexample.

Consider a script that discards every included wait above six minutes and then reports the remaining mean as the mean for all eligible complete requests. The rule is deterministic and will rerun exactly.

\`\`\`r
biased_rows <- analysis_rows[analysis_rows$wait_minutes <= 6, , drop = FALSE]
biased_mean <- mean(biased_rows$wait_minutes)

stopifnot(nrow(biased_rows) == 6L)
stopifnot(abs(biased_mean - 29 / 6) <= 1e-10 + 1e-8 * abs(29 / 6))
stopifnot(biased_mean < overall_mean)
\`\`\`

The rerun produces $29/6 = 4.833...$ minutes every time under the same inputs. It is nevertheless wrong for the declared nine-row complete-case target because the exclusion uses the outcome and silently removes three long waits. This single counterexample disproves the proposition that “if a result reruns, it must be valid.”

The same boundary applies to causal prose. The 2.50-minute channel difference reruns, but requests were not randomly assigned to channels. Exact repetition of the arithmetic cannot turn that observational contrast into the effect of forcing a request from chat to desk. A reproducible report exposes such limits; it does not erase them.

Independent replication is different work. A second demonstration could collect new requests under the same declared eligibility, logging, and channel mechanism. Agreement would be evidence about stability under that mechanism. It would still not repair a biased measurement rule or create random assignment. Disagreement could reflect sampling variation, a changed mechanism, or a computational difference; the provenance records help distinguish these possibilities.

## A practical report checklist

Before sharing a statistical report, ask:

1. Does the question name the target units, variable, summary, and conditions?
2. Are the fixture or data source, creator, version, schema, key, units, missing codes, and row count declared?
3. Does an exclusion ledger reconcile source rows with the analysis denominator?
4. Does every quoted number come from a named result object rather than duplicated hand typing?
5. Does each plot have a numeric table and prose alternative with the same values and units?
6. Does the claim ledger map important statements to calculations, rows, assumptions, and limits?
7. Are R version, platform, locale, time zone, BLAS, packages, and any RNG kind and seed recorded?
8. Does a fresh-session rerun begin from literal inputs and stop on failed assertions?
9. Are checksum claims limited to byte identity rather than truth or validity?
10. Does the conclusion stop where sampling, assignment, measurement, missingness, and model conditions stop?

Tools such as Quarto, knitr, and environment managers can automate larger publishing systems. They are deferred in this first edition. The workflow here does not require them, and this chapter does not teach commands for frameworks that readers may not have installed. Plain Markdown, a complete R script, literal inputs, and a fresh-session receipt are enough to practice the essential reasoning.

## Exercises

## Worked example 3: an open dataset still needs a source ledger

The new regression examples use the frozen file <code>data/penguins.csv</code>. Its 344 rows come from the Palmer penguin data released by their named scientific collectors and package authors, with the source's CC0 declaration. Our local header describes species, island, bill dimensions and flipper length in millimetres, body mass in grams, sex, and year. Reading the file is a computational step; identifying one row as one recorded penguin and preserving the missing-value codes are statistical steps.

For a mass-on-flipper line, the inclusion mask uses only the two required measurement columns. It leaves 342 pairs. A report should therefore state both denominators: 344 source records and 342 pairs entering this calculation. It should keep a table of excluded source-row positions and avoid treating a missing mass as zero. Another model that includes sex can have a different complete-case count, so comparing its fit with the simple line requires either a common row set or an explicit explanation of the changed data.

A provenance row records the original source link, creators, license, frozen filename, retrieval date, unchanged observations, missing codes and the derived inclusion rule. Adding an analysis ID based on source order does not establish a scientific identifier supplied by the collector. A rerun can verify those mappings and numbers; it cannot verify that the recorded penguins are a probability sample of every penguin population. Transparent provenance improves inspectability while leaving that sampling boundary visible.

<details>
<summary>Solution setup for the original exercises</summary>

These solutions reconstruct the fixture and calculations independently of the chapter. \`R15-HELPDESK-v1\` is original literal synthetic data created by Math Atlas, version 1. One row is one service request; \`case_id\` is the unique key, \`channel\` records a non-randomized route, \`wait_minutes\` is time to first response in minutes, \`NA\` is the missing code, and \`eligible\` excludes a known equipment-test record. There are 12 source rows, two eligible missing waits, one ineligible row, and nine included complete eligible rows.

\`\`\`r
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
\`\`\`

</details>

## R-15-E01

**Exercise 18.1**

Map claims to calculations. A report states: (a) “The complete-case mean was 5.89 minutes,” (b) “Desk exceeded chat by 2.50 minutes,” and (c) “Two eligible waits were missing.” For each, name the result object, source rows, and one necessary limit. Explain why a page number alone is a weaker source than this mapping.

<details>
<summary>Hint 1</summary>

Use \`overall_mean\`, \`descriptive_difference\`, and \`exclusion_rows\`; then ask which rows each object includes.

</details>

<details>
<summary>Hint 2</summary>

Name both the computational object and its included or excluded ID set; a page locator does not specify the calculation's denominator.

</details>

<details>
<summary>Solution</summary>

For claim (a), the result object is \`overall_mean\`. Its source is the nine rows satisfying \`eligible & !is.na(wait_minutes)\`: \`h01\`, \`h02\`, \`h04\`–\`h10\`, excluding \`h03\`, \`h11\`, and \`h12\`. Its limit is that it estimates only the mean recorded wait among complete eligible rows. It does not reveal the mean wait of the two eligible rows whose waits are missing.

For claim (b), the result object is \`descriptive_difference\`, constructed from \`group_mean\`. The desk calculation uses five included rows and the chat calculation uses four. Its central limit is the observational channel mechanism: channel was not randomly assigned, so 2.50 minutes is a recorded-group difference, not the effect of forcing requests into a channel.

For claim (c), the object is \`exclusion_rows\`, interpreted together with the inclusion rule. \`h03\` and \`h11\` are eligible and have missing waits; \`h12\` is excluded for known ineligibility. The limit is that identifying two missing values does not reveal their values or prove they are harmless.

A page number says where words appear. The ledger says which computation and rows support them, which is what a future analyst needs after a source or result changes.

</details>


## R-15-E02

**Exercise 18.2**

Retain raw and derived provenance. Starting from the literal fixture, create an included-row table without changing \`requests\`. Give assertions for raw identity, the source row count, included row count, and excluded IDs. Explain why overwriting missing values with zero would damage provenance.

<details>
<summary>Hint 1</summary>

Save a snapshot before subsetting and compare it with \`identical()\` afterward.

</details>

<details>
<summary>Hint 2</summary>

Preserve the original object, derive a new subset, and check both key sets and counts; a missing time is not a zero time.

</details>

<details>
<summary>Solution</summary>

Subsetting creates \`derived_rows\`; it does not assign into any column of \`requests\`. The snapshot and assertions expose accidental mutation and reconcile all 12 rows.

\`\`\`r
derived_rows <- requests[requests$eligible & !is.na(requests$wait_minutes), , drop = FALSE]
excluded_ids <- requests$case_id[!(requests$eligible & !is.na(requests$wait_minutes))]

stopifnot(identical(requests, raw_snapshot))
stopifnot(nrow(requests) == 12L)
stopifnot(nrow(derived_rows) == 9L)
stopifnot(identical(excluded_ids, c("h03", "h11", "h12")))
stopifnot(nrow(derived_rows) + length(excluded_ids) == nrow(requests))
\`\`\`

Replacing missing waits with zero would claim that “unrecorded” means “no wait,” a measurement statement absent from the schema. It would also destroy the distinction between source values and an analyst's assumption. If a sensitivity analysis tries zero as one scenario, it should create a new derived object, label the assumption, and retain the raw \`NA\` values.

</details>


## R-15-E03

**Exercise 18.3**

Format units and precision honestly. Produce a sentence reporting the overall mean to two decimal places with its unit and denominator. Also retain the unrounded numeric value and show why testing the rounded text as though it were exact would be mistaken.

<details>
<summary>Hint 1</summary>

\`sprintf("%.2f", x)\` returns text; it does not replace the numeric object \`x\`.

</details>

<details>
<summary>Hint 2</summary>

Use the full-precision mean for computation and a formatted copy for text; the displayed two decimals introduce rounding.

</details>

<details>
<summary>Solution</summary>

The numeric value remains $53/9 = 5.888...$. \`sprintf()\` creates presentation text rounded to two decimal places.

\`\`\`r
mean_sentence <- sprintf(
  "Mean recorded wait was %.2f minutes across %d included requests.",
  overall_mean,
  overall_n
)

stopifnot(identical(mean_sentence,
                    "Mean recorded wait was 5.89 minutes across 9 included requests."))
stopifnot(abs(overall_mean - 53 / 9) <= 1e-10 + 1e-8 * abs(53 / 9))
stopifnot(!identical(overall_mean, 5.89))
\`\`\`

The stored number and displayed string have different jobs. \`overall_mean\` is used for later calculation. The string communicates a sensible precision, a unit, and a denominator. Treating 5.89 as the exact mean would erase the recurring decimal and could accumulate rounding error in later calculations.

</details>


## R-15-E04

**Exercise 18.4**

Supply a numeric plot alternative. Write a Markdown table and two-sentence prose alternative for the desk and chat mean-wait plot. Include both group denominators, the axis meaning, and the 2.50-minute difference. State what the display cannot establish.

<details>
<summary>Hint 1</summary>

Every plotted height already appears in \`plot_table\`; use that object rather than reading heights from the picture.

</details>

<details>
<summary>Hint 2</summary>

Include five desk and four chat complete requests, means seven and $4.5$ minutes, and the observational-design limit.

</details>

<details>
<summary>Solution</summary>

| Recorded service channel | Included n | Mean wait (minutes) |
| --- | ---: | ---: |
| Desk | 5 | 7.00 |
| Chat | 4 | 4.50 |

The horizontal positions identify the two recorded channels; the vertical quantity is mean wait among included requests, in minutes. The desk height is 7.00 minutes for five requests and the chat height is 4.50 minutes for four requests, so desk is 2.50 minutes higher in this fixture.

This table and prose give every plotted value and denominator. They cannot show a causal channel effect because requests were not randomly assigned, and they do not recover the two missing eligible waits.

The following assertion checks that these written values match calculations rather than measurements read from a graphic.

\`\`\`r
numeric_alternative <- data.frame(
  channel = c("desk", "chat"),
  included_n = c(5L, 4L),
  mean_wait_minutes = c(7, 4.5),
  stringsAsFactors = FALSE
)
stopifnot(identical(numeric_alternative$included_n, group_n))
stopifnot(identical(numeric_alternative$mean_wait_minutes, group_mean))
\`\`\`

</details>


## R-15-E05

**Exercise 18.5**

Generate a temporary Markdown artifact. Use \`tempfile(tmpdir = getwd(), fileext = ".md")\`, \`writeLines()\`, and \`readLines()\` to create and verify a two-line result report. Assert that it exists in the current working directory and contains the current denominator. Do not use an absolute or repository path.

<details>
<summary>Hint 1</summary>

Compare canonical directory names with \`normalizePath()\` after the file exists.

</details>

<details>
<summary>Hint 2</summary>

Create only a temporary relative output, compare its parent directory with the current working directory, and verify its computed denominator.

</details>

<details>
<summary>Solution</summary>

The path is requested inside \`getwd()\`, which is the temporary working directory during the canonical fresh-session run. We write exactly two lines, verify existence and directory, read the text back, and assert the current denominator appears.

\`\`\`r
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
\`\`\`

The checksum summarizes the exact generated bytes. A matching checksum supports identity; it does not prove the denominator was scientifically appropriate. That requires the declared target and exclusion policy.

</details>


## R-15-E06

**Exercise 18.6**

Record session and RNG information. Construct a named character vector that records R version, platform, locale, time zone, BLAS, RNG kind, and seed status for this deterministic analysis. Explain what must change if a later version adds a simulation.

<details>
<summary>Hint 1</summary>

No random-number function is called here, so the honest seed entry is “not applicable,” not an invented integer.

</details>

<details>
<summary>Hint 2</summary>

Record actual environment values; if simulation is added, record RNG kind and the actual seed policy instead of inventing one now.

</details>

<details>
<summary>Solution</summary>

This analysis is deterministic: it reads literal values and calls no random-number function. Recording an invented seed would suggest control that was never used. The RNG kind is still useful environment context because a later revision might add simulation.

\`\`\`r
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
\`\`\`

If a later report adds simulation, each stochastic block must begin by setting the specified RNG kinds and its assigned seed before drawing any value. It must record both, state the probability mechanism and number of repetitions, and report Monte Carlo error for simulation estimates. A seed permits repetition of a pseudorandom stream; it does not make a simulation assumption correct.

</details>


## R-15-E07

**Exercise 18.7**

Detect stale text. Write a function that compares one stated result sentence with the sentence generated from the current mean and denominator. Show that the stale 6.50-minute, 10-request sentence fails and the current sentence passes. State one misleading claim this exact-string check would miss.

<details>
<summary>Hint 1</summary>

Validate that each input has length one, then use \`identical()\`.

</details>

<details>
<summary>Hint 2</summary>

A string check can catch stale numbers while missing an unsupported causal interpretation embedded elsewhere.

</details>

<details>
<summary>Solution</summary>

The function rejects vector inputs because \`identical()\` on two vectors could answer a different question than auditing one sentence. It returns one logical value for one stated sentence and one computed sentence.

\`\`\`r
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
\`\`\`

The exact-string audit would miss “Waiting improved dramatically.” That sentence has no computed value to compare and leaves the baseline, practical threshold, and causal mechanism unstated. A human claim audit is still required.

</details>


## R-15-E08

**Exercise 18.8**

Distinguish rerun from replication. Explain, using the outcome-dependent exclusion adverse case, why a reproducible 4.83-minute result is invalid for the nine-row target. Then describe what an independent replication would require and why neither a rerun nor replication alone licenses a causal channel claim.

<details>
<summary>Hint 1</summary>

Separate three questions: Did the same computation recur? Did new data follow the declared mechanism? Does that mechanism support the interpretation?

</details>

<details>
<summary>Hint 2</summary>

Removing large waits because they are large changes the declared nine-row target; repeating that selection faithfully does not validate it.

</details>

<details>
<summary>Solution</summary>

The outcome-dependent rule keeps only complete eligible waits at most six minutes. It retains values $6,5,4,6,3,5$, so its mean is $29/6 = 4.833...$ minutes.

\`\`\`r
biased_rows <- analysis_rows[analysis_rows$wait_minutes <= 6, , drop = FALSE]
biased_mean <- mean(biased_rows$wait_minutes)

stopifnot(nrow(biased_rows) == 6L)
stopifnot(sum(biased_rows$wait_minutes) == 29)
stopifnot(abs(biased_mean - 29 / 6) <= 1e-10 + 1e-8 * abs(29 / 6))
stopifnot(biased_mean < overall_mean)
stopifnot(identical(requests, raw_snapshot))
\`\`\`

The computation is reproducible because the same rows and rule give the same answer. It is invalid for the declared nine-row target because three waits were selected out precisely for being long. Renaming the six-row mean as a nine-row mean changes the target without disclosure.

An independent replication would obtain new requests under a declared eligibility, channel, and logging mechanism, then apply a prespecified analysis to those new observations. It would be more than rerunning the old bytes. Agreement might support stability under that mechanism; disagreement would invite an audit of sampling variation and changed conditions.

Neither operation licenses a causal claim about channel. The original and replicated channel groups may differ for reasons connected with how requests reached desk or chat. A causal conclusion would require a design and assumptions that connect the comparison to an intervention, such as a documented assignment mechanism plus appropriate measurement and interference conditions. File identity and repeated results do not create that design.

Return to [Reports That Can Be Traced](#/item/book-statistics-with-r?chapter=reports-and-provenance) and identify each exercise by its stable R-15-E## label.

</details>


Complete solutions are available at [Solutions: Reports That Can Be Traced](#/item/book-statistics-with-r?section=back:solutions-reports-and-provenance). Identify an exercise by its stable R-15-E## label.

## R-15-E09

**Exercise 18.9**

The report now includes a CC0 penguin dataset and a CC BY 4.0 UCI dataset. Specify a provenance row for each and explain why adding CSV column headings does not make the observations original to the report author.

<details>
<summary>Hint 1</summary>

Keep source identity and license separate from your transformations.

</details>

<details>
<summary>Hint 2</summary>

Record creator/repository, source URL or DOI, selected version, units, local filename, license and exact changes.

</details>

<details>
<summary>Solution</summary>

Two concrete provenance rows can use the frozen sources already identified in this book:

| Frozen file and selected source | Creators and license | Records, schema and transformations |
| --- | --- | --- |
| \`data/penguins.csv\`; [selected Palmer penguin CSV](https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv) | Horst, Hill and Gorman; measurements collected by Kristen Gorman and Palmer Station LTER; CC0 | 344 records; eight source columns and \`NA\` retained; bill/flipper dimensions in mm, body mass in g, sex, species, island and year; line endings normalized, observations unchanged |
| \`data/banknote-authentication.csv\`; Lohweg, Volker (2012), Banknote Authentication, UCI; DOI 10.24432/C55P57; [selected source text](https://archive.ics.uci.edu/ml/machine-learning-databases/00267/data_banknote_authentication.txt) | Volker Lohweg; CC BY 4.0 | 1372 records; image-derived variance, skewness, curtosis and entropy features and binary class; no physical measurement units asserted here; headings added and blank lines removed, observations and row order unchanged |

These rows select the book's frozen local copies rather than promising that a live source will remain unchanged. For both rows, the [frozen-data source ledger](#/item/book-statistics-with-r?section=back:references) records retrieval on 2026-11-14. This reports the ledger’s historical acquisition date; this review has not independently verified that acquisition. For the penguin mass-on-flipper analysis, the inclusion rule retains the 342 rows with both required measurements; this derived exclusion is separate from preserving all 344 source rows.

Credit and license remain attached to the observations. Original explanatory prose and analysis code are distinct contributions; a new header changes representation rather than authorship of the measured data.

</details>

## R-15-E10

**Exercise 18.10**

A data refresh changes the number of complete eligible records, but the regenerated graph still uses a cached table from the previous run. Describe two checks that detect the mismatch and one important claim they still cannot validate.

<details>
<summary>Hint 1</summary>

Reconcile counts and identifiers between the current analysis object and the plotted table.

</details>

<details>
<summary>Hint 2</summary>

Recompute plotted summaries from the same current object and compare values with a declared numerical tolerance.

</details>

<details>
<summary>Solution</summary>

One check reconciles current included key sets and group counts with those represented in the display. Another recomputes each plotted mean or interval from the current analysis table and compares it with the display's numerical alternative. These catch stale denominators and summaries even when the image looks plausible. They do not validate random sampling, independence, a causal interpretation or the truth of a model; those require design and subject-matter evidence.

</details>

## Sources and authorship

R input/output and environment claims were checked against the installed R 4.6.0 help pages for \`writeLines\`, \`readLines\`, \`files\`, \`normalizePath\`, \`sprintf\`, \`sessionInfo\`, \`extSoftVersion\`, and \`Random\`, and against R Core Team, *R Data Import/Export*, version 4.6.0, §7.1, and *An Introduction to R*, version 4.6.0, §14.1. SHA-256 behavior was checked against the installed R 4.6.0 \`tools::sha256sum\` help page. The documented return values and platform qualifications are the basis for the file and session assertions above. Execution on Linux is recorded by the chapter receipt; no Windows or macOS execution is claimed.

The exposition, code, exercises, and \`R15-HELPDESK-v1\` fixture are original to Math Atlas and were produced by Math Atlas. They are licensed CC BY-SA 4.0. The fixture is synthetic and supplies no empirical evidence about real help desks. No human review is claimed in this draft.

## Summary

Trace each numerical claim to source rows, a declared inclusion rule and a computed object. Generate text and numerical plot alternatives from the same current results, retain raw provenance and actual environment information, and distinguish a reproducible calculation from an independent replication. Open-data licensing and code reproducibility do not establish a sampling or causal claim.
`;export{e as default};