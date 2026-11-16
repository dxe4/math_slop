var e=`---
parent_id: book-statistics-with-r
chapter_id: functions-iteration-assertions
title: "Functions, Iteration, and Assertions"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Functions, Iteration, and Assertions

A careful analysis can still become unreliable when it must be repeated. Perhaps you calculated a mean correctly for the North office, copied the code for the Central office, and forgot to change one name. Perhaps one file used \`NA\` for a missing wait while another used a blank field. Perhaps R quietly repeated two weights across four observations. The arithmetic is no longer the hard part. The hard part is making the repeated rule visible and refusing inputs for which that rule has no agreed meaning.

This chapter turns an analysis into a small, inspectable machine. We will specify what goes in, what comes out, and what must be true in between. Then we will apply the same machine to several groups. The goal is not clever code. It is an analysis whose assumptions fail loudly enough to be repaired.

Earlier chapters introduced vectors, types, missingness, schemas, keys, sample standard deviation, group summaries, and selection. Here we restate the interfaces we need. A numeric vector holds measurements of one declared variable. A schema says what each field means and permits. A key identifies the analysis unit. R's \`sd()\` computes the sample standard deviation with denominator \\(n-1\\), so it is undefined for fewer than two used observations. Missing values never choose their own scientific interpretation; the analyst must state a policy.

## A repeated calculation needs a contract

**Example 7.1 (Worked calculation).**

**Definition R-DEF-function (function).** A **function** is an R object that accepts named inputs, evaluates a body of expressions in a local evaluation environment, and returns a value. A **function contract** is our written specification of permitted inputs, rejected inputs, missing-value behavior, and the structure and meaning of the returned value.

R creates a function with \`function(arguments) { body }\`. Names listed in the parentheses are **arguments**. Braces group the body. When execution reaches \`return(value)\`, that value is returned immediately. If no \`return()\` is called, R returns the last evaluated expression. We will use explicit \`return()\` at important branches so that empty-input behavior is easy to see.

Our first contract is for \`summarize_minutes(x, missing)\`. It says:

- \`x\` must be an ordinary numeric vector of waiting times in minutes with no dimension attribute; matrices, arrays, factors, dates, lists, and character vectors are rejected rather than silently flattened or converted.
- Values other than missing values must be finite and nonnegative. Thus \`Inf\`, \`-Inf\`, \`NaN\`, and negative times are rejected.
- \`missing\` is either \`"error"\` or \`"remove"\`. Under \`"error"\`, any \`NA\` stops the calculation. Under \`"remove"\`, missing values are counted and omitted from the numerical summaries.
- The result is a named list containing total count, used count, missing count, mean, sample SD, unit, and policy. A list is a container whose components may have different types and lengths. \`list(name = value, ...)\` creates one, and \`$name\` retrieves a named component.
- If no observations remain, the count fields are returned and both numerical summaries are \`NA_real_\`. If exactly one remains, its mean is returned and its sample SD is \`NA_real_\` because the \\(n-1\\) denominator would be zero.

That contract settles decisions that \`mean()\` and \`sd()\` cannot settle for us.

Read a function call as a small agreement. In \`summarize_minutes(wait_minutes, missing = "error")\`, the first supplied value is matched to \`x\`, and the named second value is matched to \`missing\`. Naming policy arguments is useful because \`summarize_minutes(wait_minutes, "error")\` runs but hides what \`"error"\` controls. If \`missing\` is omitted, its default expression supplies the candidate policies and \`match.arg()\` chooses the first, \`"error"\`. A default is part of the contract, not merely typing convenience. A safe default should avoid silently discarding information.

Validation order also matters. We check type before comparing values with zero, because a comparison on an unintended type can itself fail obscurely. We check nonfinite values before calculating summaries. We then apply the missingness policy, and only after that do we inspect the used count. Each error therefore identifies the earliest broken premise. This order does not make every possible error message unique, but it gives a reader a predictable route from input to output.

\`\`\`r
# Deterministic synthetic fixture MA-R07-F01, version 1.
# Creator: Math Atlas. One value is one observed wait in minutes.
# Row count: 5; missing code: NA; no exclusions in the complete example.
# Original literal data; no external or network dependency.
wait_minutes <- c(8, 10, 12, 14, 16)

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

  result <- list(
    n_total = n_total,
    n_used = n_used,
    n_missing = n_missing,
    mean_minutes = mean(used),
    sd_minutes = if (n_used >= 2L) sd(used) else NA_real_,
    unit = "minutes",
    missing_policy = missing
  )
  return(result)
}

complete_summary <- summarize_minutes(wait_minutes, missing = "error")
stopifnot(complete_summary$n_total == 5L)
stopifnot(complete_summary$n_used == 5L)
stopifnot(complete_summary$n_missing == 0L)
stopifnot(abs(complete_summary$mean_minutes - 12) <= 1e-10 + 1e-8 * abs(12))
stopifnot(abs(complete_summary$sd_minutes - sqrt(10)) <=
            1e-10 + 1e-8 * abs(sqrt(10)))
stopifnot(identical(complete_summary$unit, "minutes"))
\`\`\`

The mean can be checked by hand: \\((8+10+12+14+16)/5=12\\) minutes. The squared deviations from 12 are \\(16,4,0,4,16\\), whose sum is 40. The sample variance is \\(40/(5-1)=10\\) square minutes, so the sample SD is \\(\\sqrt{10}\\approx3.162\\) minutes. The code assertion compares \`sd()\` with that independently derived value.

\`match.arg()\` accepts exactly one of the listed policy labels, including an unambiguous partial label; in analysis code, writing the full label at each call is clearer. \`is.object(x)\` excludes classed numeric objects such as dates that may store numbers internally but do not represent minutes. The two checks for \`NaN\` and infinite values are separate from \`NA\` because only \`NA\` receives a missingness policy here.

## Empty inputs are data states, not arithmetic answers

An empty vector can arise because a group has no rows or because every outcome was missing and the policy removed them. Reporting its mean as zero would invent a measurement. Reporting only \`NA\` would hide whether the group was absent or fully missing. The metadata preserves the distinction.

\`\`\`r
empty_summary <- summarize_minutes(numeric(0), missing = "remove")
all_missing_summary <- summarize_minutes(c(NA_real_, NA_real_), missing = "remove")
singleton_summary <- summarize_minutes(9, missing = "error")

stopifnot(empty_summary$n_total == 0L, empty_summary$n_used == 0L)
stopifnot(empty_summary$n_missing == 0L)
stopifnot(is.na(empty_summary$mean_minutes), is.na(empty_summary$sd_minutes))
stopifnot(all_missing_summary$n_total == 2L)
stopifnot(all_missing_summary$n_missing == 2L, all_missing_summary$n_used == 0L)
stopifnot(is.na(all_missing_summary$mean_minutes))
stopifnot(singleton_summary$n_used == 1L)
stopifnot(singleton_summary$mean_minutes == 9)
stopifnot(is.na(singleton_summary$sd_minutes))
\`\`\`

This is a stopping point for interpretation. An empty result may be computationally valid under the contract while being useless for the intended report. The caller must decide whether to display “no observed waits,” revise a filter, or investigate missingness. A function can preserve evidence of the state; it cannot decide whether that state answers the research question.

## Assertions turn assumptions into executable checks

**Definition R-DEF-assertion (assertion).** An **assertion** is an executable statement that a specified condition must be true at a particular point in an analysis. If the condition is false, missing, or otherwise invalid, execution stops rather than continuing with an unverified premise.

\`stopifnot(condition)\` is convenient for short internal invariants, such as a hand-computed mean. If all conditions are true, it returns invisibly and the script continues. If one fails, it raises an error. For a reader-facing input problem, \`if (...) stop("message")\` lets us state what was wrong. Errors are not proof that the program is bad; a timely, specific error is often the promised output for an invalid input.

To test an intended failure without aborting this executable chapter, we catch only the error class with \`tryCatch(..., error = function(e) conditionMessage(e))\`. Unexpected warnings are not caught and therefore still fail the chapter runner.

\`\`\`r
bad_type_message <- tryCatch(
  summarize_minutes(c("8", "10"), missing = "error"),
  error = function(e) conditionMessage(e)
)
matrix_type_message <- tryCatch(
  summarize_minutes(matrix(c(8, 10, 12, 14), nrow = 2), missing = "error"),
  error = function(e) conditionMessage(e)
)
missing_message <- tryCatch(
  summarize_minutes(c(8, NA_real_), missing = "error"),
  error = function(e) conditionMessage(e)
)

stopifnot(identical(bad_type_message,
                    "x must be an ordinary numeric vector of minutes"))
stopifnot(identical(matrix_type_message,
                    "x must be an ordinary numeric vector of minutes"))
stopifnot(identical(missing_message, "x contains missing waiting times"))
\`\`\`

**Claim R-CLAIM-function-contract (function contracts make checks inspectable).** **Status: justified here. Hypotheses:** the written contract states the accepted inputs and missingness policy; the implementation validates those inputs before calculation; the returned value records the analysis counts, unit, and policy; and the assertions actually execute on the declared fixtures. Under those conditions, explicit input validation and returned metadata make repeated calculations inspectable: a reader can see which inputs were accepted, which missingness rule operated, and how many observations contributed. Passing assertions establishes only the stated invariants under the tested inputs. It does not establish that the measurements are accurate, that excluded units resemble retained units, that the function was called on the intended table, or that a descriptive difference generalizes beyond the declared rows.

The justification is visible in the information flow. Validation blocks inputs outside the contract; the returned list records the counts, unit, and policy; assertions compare selected outputs with declared expectations. None of those operations observes an unrecorded person or verifies a data-collection mechanism. Computational checks and scientific validity therefore support different parts of an investigation.

### Tests should cover boundaries and meaning

One successful “usual” example is a weak test. It could miss exactly the cases that motivated the contract. A compact test set should cross the important boundaries:

| Case | Expected behavior | Reason it belongs |
| --- | --- | --- |
| Five complete waits | Return checked count, mean, and SD | Verifies the ordinary calculation against hand work |
| Empty numeric vector | Return zero used and \`NA\` summaries | Prevents an invented zero mean |
| One wait | Return its mean and \`NA\` sample SD | Exercises the \\(n-1\\) boundary |
| All values missing under \`"remove"\` | Preserve total and missing counts | Distinguishes absence from observed zero |
| Missing value under \`"error"\` | Stop with the promised message | Verifies that removal is not silent |
| Character numerals | Stop before conversion | Protects the declared type and schema |
| Numeric matrix or array | Stop before flattening | Protects the promised one-dimensional input shape |
| Negative or infinite time | Stop before summarizing | Protects the measurement domain |

Tests also need **oracles**, meaning independently justified expected results. Repeating \`mean(wait_minutes)\` on both sides of an equality only checks that one call agrees with itself. The hand total and centered-square calculation for our first fixture supply better oracles. Exact counts and names can use exact equality; floating-point calculations use the book tolerance \\(10^{-10}+10^{-8}|e|\\), where \\(e\\) is the expected value.

Assertions placed inside a loop can express an **invariant**, a condition intended to be true after every repetition. For a running total, the invariant after step \\(i\\) is that the stored result equals the sum of inputs 1 through \\(i\\). Checking only the final total might miss a wrong intermediate result that happens to cancel later. An invariant makes the intended state at each step reviewable.

## Scope: where a function looks for names

The arguments and names created inside a function are local to that call. R uses **lexical scoping**: if the body refers to a name that is neither an argument nor locally created, R searches the environment in which the function was defined and then its enclosing environments. This makes compact functions possible, but it can also create a hidden dependency on a global object.

Prefer an argument when a quantity changes the meaning of the result. In the next function, \`limit_minutes\` belongs in the contract rather than in a global variable. Modifying the local name \`x\` does not modify the caller's vector.

\`\`\`r
count_over_limit <- function(x, limit_minutes) {
  if (!is.numeric(x) || is.object(x) || !is.null(dim(x)) ||
      any(!is.finite(x))) {
    stop("x must be an ordinary finite numeric vector", call. = FALSE)
  }
  if (!is.numeric(limit_minutes) || is.object(limit_minutes) ||
      !is.null(dim(limit_minutes)) || length(limit_minutes) != 1L ||
      !is.finite(limit_minutes)) {
    stop("limit_minutes must be one finite number", call. = FALSE)
  }
  x <- x[x > limit_minutes]
  return(length(x))
}

original_waits <- c(7, 11, 15)
over_ten <- count_over_limit(original_waits, limit_minutes = 10)
stopifnot(over_ten == 2L)
stopifnot(identical(original_waits, c(7, 11, 15)))

count_matrix_message <- tryCatch(
  count_over_limit(matrix(c(7, 11, 15, 19), nrow = 2), limit_minutes = 10),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(count_matrix_message,
                    "x must be an ordinary finite numeric vector"))

limit_matrix_message <- tryCatch(
  count_over_limit(c(7, 11, 15), limit_minutes = matrix(10, nrow = 1)),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(limit_matrix_message,
                    "limit_minutes must be one finite number"))
\`\`\`

A global threshold might happen to exist when a function is developed interactively and disappear in a fresh session. Making it an argument exposes the dependency and lets a caller see that changing the threshold changes the question.

## Iteration repeats a rule over declared elements

**Definition R-DEF-iteration (iteration).** **Iteration** is the controlled repetition of one operation over the elements or indices of a declared collection, with a specified output shape and behavior when the collection has length zero.

The key phrases are “declared collection” and “specified output.” A loop is not merely repeated typing. It says which elements will be visited, in what order, and where each result will go.

### Worked example: the same summary for every office

**Example 7.2 (Worked calculation).**

Consider nine complete, synthetic service visits. One row represents one visit. \`office\` names the service office, and \`minutes\` records nonnegative waiting time from scheduled arrival to being called.

| Visit | Office | Wait (minutes) |
| --- | --- | ---: |
| v01 | North | 8 |
| v02 | North | 11 |
| v03 | North | 14 |
| v04 | Central | 10 |
| v05 | Central | 12 |
| v06 | Central | 17 |
| v07 | South | 6 |
| v08 | South | 9 |
| v09 | South | 12 |

\`split(minutes, office)\` returns a named list, one numeric vector for each observed office label. \`vector("list", length(groups))\` allocates the output list. \`seq_along(groups)\` produces the valid indices of \`groups\`: \`1, 2, ..., length(groups)\`. If the list is empty it returns \`integer(0)\`, so the \`for\` body runs zero times. By contrast, \`1:length(groups)\` becomes \`c(1, 0)\` when the length is zero and can cause invalid indexing.

\`\`\`r
# Deterministic synthetic fixture MA-R07-F02, version 1.
# Creator: Math Atlas. One row is one service visit.
# Units: minutes; key: visit_id; row count: 9; missing codes: none;
# exclusions: none. Literal source is this block.
visit_id <- sprintf("v%02d", 1:9)
office <- c(rep("North", 3), rep("Central", 3), rep("South", 3))
minutes <- c(8, 11, 14, 10, 12, 17, 6, 9, 12)

stopifnot(length(visit_id) == 9L)
stopifnot(!anyDuplicated(visit_id))
stopifnot(length(office) == length(minutes))

groups <- split(minutes, office)
loop_summaries <- vector("list", length(groups))
names(loop_summaries) <- names(groups)
for (i in seq_along(groups)) {
  loop_summaries[[i]] <- summarize_minutes(groups[[i]], missing = "error")
}

loop_means <- vapply(
  X = loop_summaries,
  FUN = function(z) z$mean_minutes,
  FUN.VALUE = numeric(1)
)
reference_means <- c(Central = 13, North = 11, South = 9)

stopifnot(identical(names(loop_means), names(reference_means)))
stopifnot(all(abs(loop_means - reference_means) <=
              1e-10 + 1e-8 * abs(reference_means)))
stopifnot(length(seq_along(list())) == 0L)
\`\`\`

The hand checks are Central \\((10+12+17)/3=13\\), North \\((8+11+14)/3=11\\), and South \\((6+9+12)/3=9\\) minutes. The loop calls the already tested function rather than reproducing its formula. \`[[i]]\` extracts one list element. Single brackets select a sublist, which would be the wrong input shape here.

The final call uses an apply-family function. \`vapply(X, FUN, FUN.VALUE)\` applies \`FUN\` to every element of \`X\` and requires each result to match the declared template. \`numeric(1)\` means “one numeric value per group.” That output check is why \`vapply()\` is preferable here to automatic simplification whose shape could change unexpectedly.

There are several legitimate ways to express repetition. Direct vector operations are clearest for elementwise arithmetic such as \`minutes + 5\`. A \`for\` loop is often clearest when later steps depend on earlier state or when we want to assert an invariant after every step. \`lapply()\` guarantees a list result of the same length as its input, while \`vapply()\` is useful when every call must return the same declared shape and type. These are choices about readable contracts, not a ladder from “slow beginner code” to “advanced code.” For small teaching fixtures, correctness and visible structure matter more than microscopic timing differences.

Output allocation makes a loop's shape explicit before any calculation. Growing an object inside the loop can work, but it makes the final shape depend on which branches happened to run. In the office example, \`vector("list", length(groups))\` states one result per group. The assignment \`names(loop_summaries) <- names(groups)\` carries the group identity forward, so a later reordering cannot silently detach values from labels.

Neither a loop nor \`vapply()\` changes the statistical unit. We still have nine visit-level observations arranged into three descriptive groups. Three office means are not nine new observations, and no probability mechanism has been supplied for inference beyond these rows.

## Adverse case: silence is not agreement

**Example 7.3 (Worked calculation).**

Base R vector arithmetic may recycle a shorter vector. If four waits are multiplied by two weights, the two weights repeat exactly and R gives no warning because the longer length is a multiple of the shorter one. That behavior is mathematically defined, but it is dangerous when the intended contract requires one weight per visit.

The repaired helper also requires \`dim(x)\` and \`dim(weights)\` to be \`NULL\`. A numeric matrix has a length and can be flattened by arithmetic, but accepting it would contradict a contract for two aligned one-dimensional vectors.

As with \`summarize_minutes()\`, the observations are waiting times: \`x\` must contain finite, nonnegative minutes. The aligned weights must be finite and nonnegative, with at least one positive weight; this helper rejects missing values in either vector.

\`\`\`r
unsafe_waits <- c(5, 10, 15, 20)
unsafe_weights <- c(1, 2)
silently_recycled <- unsafe_waits * unsafe_weights
stopifnot(identical(silently_recycled, c(5, 20, 15, 40)))

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

stopifnot(weighted_mean_minutes(c(1e308, 1e-308), c(0, 1)) == 1e-308)

length_error <- tryCatch(
  weighted_mean_minutes(unsafe_waits, unsafe_weights),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(length_error, "x and weights must have equal lengths"))

matrix_x_error <- tryCatch(
  weighted_mean_minutes(matrix(c(5, 10, 15, 20), nrow = 2), c(1, 2, 1, 2)),
  error = function(e) conditionMessage(e)
)
array_weights_error <- tryCatch(
  weighted_mean_minutes(c(5, 10, 15, 20), array(c(1, 2, 1, 2), dim = c(2, 2))),
  error = function(e) conditionMessage(e)
)
stopifnot(identical(matrix_x_error,
                    "x and weights must be ordinary numeric vectors"))
stopifnot(identical(array_weights_error,
                    "x and weights must be ordinary numeric vectors"))

safe_weighted_mean <- weighted_mean_minutes(
  unsafe_waits,
  weights = c(1, 2, 1, 2)
)
stopifnot(abs(safe_weighted_mean - 80 / 6) <= 1e-10 + 1e-8 * abs(80 / 6))

extreme_weight_mean <- weighted_mean_minutes(
  c(1, 1),
  weights = c(1e308, 1e308)
)
extreme_weight_contrast <- weighted_mean_minutes(
  c(1, 2),
  weights = c(1e308, 1e308)
)
stopifnot(is.finite(extreme_weight_mean), extreme_weight_mean == 1)
stopifnot(is.finite(extreme_weight_contrast))
stopifnot(abs(extreme_weight_contrast - 1.5) <=
            1e-10 + 1e-8 * abs(1.5))
\`\`\`

After validating all inputs, the calculation discards zero-weight entries before choosing the value scale: \`x = c(1e308, 1e-308)\` with \`weights = c(0, 1)\` must return \`1e-308\`, not zero. The stable calculation first divides weights by their largest value and then makes them sum to one. It separately scales the observed values before multiplication. These steps leave the mathematical weighted mean unchanged while avoiding overflow from adding two finite weights such as \`1e308 + 1e308\`. The final finite-result check rejects nonfinite output; finite output can still suffer floating-point rounding, cancellation, or underflow, so this is not a guarantee of relative accuracy for every finite input.

Missingness creates a similar boundary. Writing \`mean(x, na.rm = TRUE)\` everywhere can make a result appear complete while silently changing its analysis set. Our summary returns \`n_total\`, \`n_used\`, and \`n_missing\`, so removal is visible. That still does not justify complete-case selection. If long waits are more likely to be unrecorded, the observed-row mean can understate the mean for all declared visits. Conversely, replacing a missing wait with zero asserts that the visit had no wait; it is a measurement claim, not a neutral coding repair.

## A small preview: combinations are columns

Later work will sometimes enumerate combinations. \`combn(x, m)\` returns a matrix whose columns are the subsets of size \`m\`. In \`apply(matrix, MARGIN, FUN)\`, \`MARGIN = 2\` means apply \`FUN\` to each column; \`MARGIN = 1\` means each row. Here we only verify indexing, without attaching probabilities or making an inferential claim.

\`\`\`r
pair_matrix <- combn(c("A", "B", "C"), m = 2)
pair_labels <- apply(pair_matrix, MARGIN = 2, FUN = paste, collapse = "-")
stopifnot(identical(dim(pair_matrix), c(2L, 3L)))
stopifnot(identical(pair_labels, c("A-B", "A-C", "B-C")))
\`\`\`

## R-07-P01

Repair and describe a municipal waiting-time table. The data are entirely synthetic and are evidence about no actual municipality.

**Fixture MA-R07-P01, version 1.** Creator: Math Atlas; original literal CSV below. One intended unit is one scheduled service visit. \`event_id\` is the proposed key. \`service_date\` is an ISO calendar date. \`office\` is one of \`North\`, \`Central\`, and \`South\`. \`scheduled_minute\` and \`called_minute\` are integer minutes after midnight in the range 0 through 1439. Waiting time is \`called_minute - scheduled_minute\`, in minutes. A blank \`called_minute\` is the only missing code. The raw file has 10 records before repair.

\`\`\`text
event_id,service_date,office,scheduled_minute,called_minute
w01,2026-04-06,North,480,492
w02,2026-04-06,North,510,518
w03,2026-04-06,North,540,551
w04,2026-04-06,Central,480,494
w05,2026-04-06,Central,510,523
w05,2026-04-06,Central,510,523
w06,2026-04-06,Central,540,
w07,2026-04-06,South,480,489
w08,2026-04-06,South,510,522
w09,2026-04-06,South,540,550
\`\`\`

Your submission must include the literal raw text, the schema and analysis unit, an exclusion ledger, a tested function that reruns from raw text, group summaries, and an accessible display. Detect both the duplicate key and missing outcome before calculating. State whether the duplicate rows agree in every field, choose and defend a policy, and compare your answer with at least one alternative policy. If an alternative deliberately retains duplicate records, label it as a raw-row diagnostic and state that it is not a valid distinct-visit analysis. Hand-check at least one office mean. Test an adverse input such as a conflicting duplicate or an invalid clock minute. Give a bounded descriptive conclusion about the retained synthetic visits. Do not use a confidence interval, hypothesis test, or claim about unobserved visits; probability and sampling variation begin in the next chapter.

The complete reference analysis and 20-point rubric are in [the solutions for project R-07-P01](#/item/book-statistics-with-r?section=back:solutions-functions-iteration-assertions).

## Exercises

Each exercise asks you to make a decision as well as write or inspect code. Full solutions are available in [the chapter solutions](#/item/book-statistics-with-r?section=back:solutions-functions-iteration-assertions).

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

\`\`\`r
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
\`\`\`

</details>

## R-07-E01

**Exercise 7.1**

Write an input/output contract for a function \`range_minutes(x, missing)\` that returns the minimum and maximum recorded waiting times. Specify permitted types, finite values, missingness, empty input, units, and returned metadata. Explain one claim that passing its checks would *not* justify.

<details>
<summary>Hint 1</summary>

**Hint.** Use the \`summarize_minutes()\` contract as a checklist, but decide what a range of zero used observations should mean.

</details>
<details>
<summary>Hint 2</summary>

An empty observed set needs an explicit unavailable result or error, together with a zero-used count.

</details>
<details>
<summary>Solution</summary>

A suitable contract is:

- \`x\` is an ordinary numeric vector of waiting times in minutes with no dimension attribute. A matrix or array is rejected rather than flattened. Nonmissing values must be finite and nonnegative.
- \`missing\` selects \`"error"\` or \`"remove"\`; \`match.arg()\` also accepts an unambiguous partial label such as \`"rem"\`. The first policy rejects any \`NA\`; the second counts and excludes them. Write the full labels in analysis calls.
- The returned named list contains \`n_total\`, \`n_used\`, \`n_missing\`, \`minimum_minutes\`, \`maximum_minutes\`, \`unit\`, and \`missing_policy\`.
- If no values remain, both endpoints are \`NA_real_\`, because zero is a possible wait and must not be used as a code for “no observed value.” For one value, the minimum and maximum are both that value.

The contract should reject a date even if it is stored numerically, because the variable is elapsed minutes. It should also reject \`Inf\`, \`-Inf\`, and \`NaN\` rather than letting them become endpoints.

Passing these checks would not show that the used visits represent visits at other dates or offices. It would not even show that the original clock readings were accurate. The checks establish only facts encoded about the supplied vector and returned result.

One implementation is:

\`\`\`r
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
\`\`\`

</details>

## R-07-E02

**Exercise 7.2**

Write \`mean_minutes(x)\` for a nonempty, ordinary finite numeric vector with no missing values. Return one number and produce a specific error for character input. Verify \`c(4, 7, 10)\` by hand and with an assertion.

<details>
<summary>Hint 1</summary>

**Hint.** Validate before calling \`mean()\`. The hand total is 21.

</details>
<details>
<summary>Hint 2</summary>

Reject nonnumeric or nonfinite input before taking a mean and retain its minutes interpretation.

</details>
<details>
<summary>Solution</summary>

The vector has total \\(4+7+10=21\\) minutes and count 3, so its mean is \\(21/3=7\\) minutes. Validation comes first so character numerals are not accepted as measurements merely because they could be converted.

\`\`\`r
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
\`\`\`

</details>

## R-07-E03

**Exercise 7.3**

Design \`safe_sd(x)\` for empty, singleton, and longer ordinary numeric vectors. Choose explicit outputs for the first two cases, remembering the \\(n-1\\) denominator of sample SD. Test all three branches and defend your singleton choice.

<details>
<summary>Hint 1</summary>

**Hint.** \`numeric(0)\` has length zero. For a singleton, distinguish “no spread observed between values” from “sample SD formula is defined.”

</details>
<details>
<summary>Hint 2</summary>

A singleton has no defined sample-SD denominator; distinguish this from observing one number.

</details>
<details>
<summary>Solution</summary>

I return \`NA_real_\` for both empty and singleton inputs. For no values there is no observed spread to summarize. For one value, the sample-SD formula has denominator \\(n-1=0\\), so it is undefined. Returning zero for a singleton would confuse “the only observed value differs from itself by zero” with an estimable sample standard deviation.

\`\`\`r
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
\`\`\`

For \`c(2, 4, 6)\`, the mean is 4 and the squared deviations sum to \\(4+0+4=8\\). Division by \\(3-1\\) gives variance 4 and SD 2, supplying the independent check.

</details>

## R-07-E04

**Exercise 7.4**

Write a loop that squares every element of \`numeric(0)\` and of \`c(2, 3, 5)\`. It must return a numeric vector of the same length in both cases. Explain why \`seq_along()\` meets the contract and \`1:length(x)\` does not.

<details>
<summary>Hint 1</summary>

**Hint.** Allocate \`numeric(length(x))\` before the loop.

</details>
<details>
<summary>Hint 2</summary>

seq_along supplies no indices for empty input, whereas the colon expression creates an unintended sequence.

</details>
<details>
<summary>Solution</summary>

The output is allocated to have exactly the input length. \`seq_along(x)\` produces no indices for an empty input, so the body is skipped and the preallocated \`numeric(0)\` is returned.

\`\`\`r
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
\`\`\`

\`1:length(x)\` violates the contract at length zero because \`1:0\` is the two-element vector \`c(1, 0)\`. The problem is the index construction, not the loop itself.

</details>

## R-07-E05

**Exercise 7.5**

For \`x <- c(3, 5, 8, 12)\`, compute cumulative totals with a loop. Compare the result with the independently implemented base-R \`cumsum(x)\`, and assert exact agreement. State the invariant that should hold after loop step \\(i\\).

<details>
<summary>Hint 1</summary>

**Hint.** At step \\(i\\), the new entry equals the previous total plus \`x[i]\`; treat the first step explicitly or begin from a running total of zero.

</details>
<details>
<summary>Hint 2</summary>

After step i, the stored total should equal the sum of the input prefix through i.

</details>
<details>
<summary>Solution</summary>

After step \\(i\\), the invariant is \`out[i] == sum(x[seq_len(i)])\`: the current output equals the sum of the first \\(i\\) inputs. A running total initialized to zero lets the same update handle the first and later steps.

\`\`\`r
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
\`\`\`

The reference uses a separately implemented base-R operation. Agreement is stronger evidence than comparing the loop with a second copy of the same loop, although both could still agree on a misunderstood target.

</details>

## R-07-E06

**Exercise 7.6**

Test the transformation property that adding a constant \\(a\\) to every value adds \\(a\\) to the mean but leaves sample SD unchanged. Use \`x <- c(2, 5, 9, 12)\` and \`a <- 7\`. State the assumptions needed for this test and explain why one successful fixture is evidence about the implementation rather than a proof for all vectors.

<details>
<summary>Hint 1</summary>

**Hint.** Compare \`mean(x + a)\` with \`mean(x) + a\`, and compare the two calls to \`sd()\` within the chapter tolerance.

</details>
<details>
<summary>Hint 2</summary>

Use centring algebra to justify the general property separately from one fixture's code agreement.

</details>
<details>
<summary>Solution</summary>

For the finite vector \\(x_1,\\ldots,x_n\\) and constant \\(a\\),

\\[
\\overline{x+a}=\\frac{1}{n}\\sum_{i=1}^n(x_i+a)=\\bar{x}+a.
\\]

Each centered value is unchanged because \\((x_i+a)-(\\bar{x}+a)=x_i-\\bar{x}\\). Therefore the centered-square sum and sample SD are unchanged when \\(n\\ge2\\). The test below assumes an ordinary finite numeric vector, one finite numeric constant, and a defined sample SD.

\`\`\`r
x_transform <- c(2, 5, 9, 12)
a_transform <- 7
shifted <- x_transform + a_transform

mean_expected <- mean(x_transform) + a_transform
stopifnot(abs(mean(shifted) - mean_expected) <=
            1e-10 + 1e-8 * abs(mean_expected))
stopifnot(abs(sd(shifted) - sd(x_transform)) <=
            1e-10 + 1e-8 * abs(sd(x_transform)))
\`\`\`

The displayed algebra proves the property under its assumptions. The one successful fixture checks that this execution is consistent with the property; by itself, a finite example would not prove a statement about every permissible vector.

</details>

## R-07-E07

**Exercise 7.7**

Call \`weighted_mean_minutes(c(5, 10, 15), c(1, 2))\`, catch the intended error, and assert its exact message. Then identify one different invalid input that is rejected at another boundary.

<details>
<summary>Hint 1</summary>

**Hint.** Use \`tryCatch(..., error = function(e) conditionMessage(e))\`; do not catch warnings.

</details>
<details>
<summary>Hint 2</summary>

The two vector lengths differ; do not let recycling select an unstated pairing.

</details>
<details>
<summary>Solution</summary>

The function rejects the mismatched lengths before multiplication, so R never gets a chance to recycle the weights.

\`\`\`r
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
\`\`\`

The second call reaches a different boundary: lengths agree, but an outcome is missing. This weighted function has no missingness-removal policy, so rejecting that call is more honest than silently selecting two rows.

</details>

## R-07-E08

**Exercise 7.8**

Audit this broken analysis:

\`\`\`text
group = c("A", "A", "B", "B")
minutes = c("8", "NA", "10", "14")
weights = c(1, 2)
\`\`\`

It converts \`minutes\` to numbers, computes \`mean(minutes, na.rm = TRUE)\`, and multiplies by \`weights\` without a length check. Repair the schema, missingness ledger, length contract, and group summaries. Your conclusion must identify the analysis set and must not generalize beyond the four synthetic rows.

<details>
<summary>Hint 1</summary>

**Hint.** The string \`"NA"\` is a declared missing code, not an observed number. Decide whether the two weights were intended per row or per group before calculating.

</details>
<details>
<summary>Hint 2</summary>

Retain raw tokens and decide whether weights belong to rows or groups before combining them.

</details>
<details>
<summary>Solution</summary>

The raw \`minutes\` field is character data with the declared missing code \`"NA"\`. I parse only the nonmissing strings, avoiding an implicit conversion warning. The two weights cannot be one-per-row because there are four rows. I interpret them as explicitly named group-level reporting weights, \`A = 1\` and \`B = 2\`; they must not be recycled across visits. No weighted visit-level mean is requested, so I do not invent one.

\`\`\`r
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
\`\`\`

The missingness ledger is: four total visit rows, one missing outcome in group A, three used outcomes, and no row removed for any other reason. Group A's observed-row mean is 8 minutes from one of its two rows; its sample SD is undefined. Group B's observed-row mean is \\((10+14)/2=12\\) minutes and its sample SD is \\(\\sqrt{8}\\approx2.828\\) minutes.

A bounded conclusion is: “Among the three synthetic visits with recorded outcomes, the observed mean was 8 minutes for A (1 of 2 visit outcomes recorded) and 12 minutes for B (2 of 2 recorded). The missing A outcome prevents this comparison from describing all four declared visits without an additional assumption.” The weights are metadata at group level under the chosen interpretation. If they were intended per visit, the correct repair would be to obtain four aligned weights rather than guess or recycle.

</details>


## R-07-E09

**Exercise 7.9**

A weighted-mean function receives complete waiting times \`c(5, 10, 15)\` minutes with weights \`c(0, 0, 0)\`. Lengths match and all weights are nonnegative. Identify the missing contract condition, explain the denominator and state a defensible failure behavior. These are original synthetic version-1 teaching values.

<details>
<summary>Hint 1</summary>

Nonnegative individual weights do not ensure positive total weight.

</details>
<details>
<summary>Hint 2</summary>

All-zero weights leave no represented weighted analysis population.

</details>
<details>
<summary>Solution</summary>

Require sum(weights)>0 in addition to matching lengths, finite numeric inputs and nonnegative weights. Here numerator and denominator are both zero, so the weighted mean is undefined rather than zero minutes. A specific error such as 'total weight must be positive' is defensible. Replacing the weights by equal weights would silently change the analysis requested. The times remain valid recorded values, but these supplied weights define no nonempty weighted target. Stop before division and identify the failed condition.

</details>

## R-07-E10

**Exercise 7.10**

Three complete synthetic groups have waiting vectors A=c(2,4), B=c(5,7,9) and C=numeric(0), all in minutes. Design a grouped summary loop returning declared count, observed count and mean for every group. Give the outputs and an invariant; explain how to retain C without inventing observations.

<details>
<summary>Hint 1</summary>

Predefine one summary row per declared group, including the empty group.

</details>
<details>
<summary>Hint 2</summary>

Counts can be zero, while an observed mean requires a positive denominator.

</details>
<details>
<summary>Solution</summary>

A has declared and observed counts two and mean three minutes. B has counts three and mean seven. C has both counts zero and an unavailable mean, explicitly NA rather than zero. After each step, the invariant is that the processed group's row contains that group's own count and summary, with earlier rows unchanged. seq_along over the declared group list visits C's metadata without creating a measurement. This original version-1 example has no missing recorded values: a declared empty group is different from a nonempty group whose outcomes are unknown.

</details>

## What this chapter makes possible

A function gathers a rule in one place. Iteration applies that rule to a declared collection. Assertions stop when a stated invariant fails. Together they make a descriptive workflow easier to rerun and inspect. They do not make missing outcomes harmless, turn duplicated rows into independent units, or create a sampling mechanism.

The next chapter introduces probability and sampling variation. The boundary matters: everything in this chapter can establish exact statements about declared synthetic rows and tested code paths. Claims about what would happen under repeated sampling require an explicit random mechanism that we have not yet defined.

## Source and provenance note

R language claims were freshly checked against the installed R 4.6.0 help topics \`function\`, \`Control\`, \`seq\`, \`lapply\`, \`apply\`, \`match.arg\`, \`stop\`, \`stopifnot\`, \`sd\`, \`read.table\`, and \`duplicated\`, and against the installed *R Language Definition*, on Linux. This is an exact-source API check for that runtime, not cross-platform testing. All prose, exercises, code, and fixtures in this chapter are original Math Atlas material released under CC BY-SA 4.0; no third-party data or exercises were adapted.

## Summary

A reusable function has an explicit input/output contract and a deliberate response to empty, missing or invalid input. Iteration should preserve invariants over declared groups; assertions make failures visible. Matching lengths, positive total weights and finite values are substantive conditions. Successful code paths describe an implementation, while the statistical target and selection mechanism require their own explanation.
`;export{e as default};