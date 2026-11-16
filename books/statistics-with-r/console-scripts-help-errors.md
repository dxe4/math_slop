
# R at the Console, in Scripts, and When Things Go Wrong {#section-1-r-at-the-console-in-scripts-and-when-things-go-wrong}

You type a calculation into R, see the answer you expected, and close the program. The next day a classmate asks, “How did you get that?” If the only record is your memory—or a long console history mixed with experiments—you do not yet have a rerunnable analysis.

This chapter turns a calculation into an inspectable sequence. We will use the console for short questions, write scripts for work worth keeping, consult R's own help, and treat errors as evidence about where execution stopped. The goal is modest but foundational: another reader should be able to begin with a fresh R session, run the saved commands in order, and obtain the checked result.

The statistical ideas from Chapter 1 still govern the work. A **unit** is the entity or event observed; a **variable** records a characteristic of each unit; an **estimand** is the precisely defined target; a **statistic** is a rule applied to observed data; and a **mechanism** describes how those data came to exist. R can compute a statistic. It cannot infer the unit, target, or mechanism from bare numbers. We must record those in words.

<a id="section-7-the-console-is-a-conversation"></a>
## The console is a conversation {#section-9-the-console-is-a-conversation}

When R is waiting at an interactive console, it normally displays `>`. You enter an **expression**—an instruction that R can evaluate—and R evaluates it immediately. Arithmetic is the smallest example: entering `2 + 3` produces `5`. You type the expression, not the prompt symbol.

Parentheses control grouping just as they do in algebra. Thus `(15 + 30 + 45 + 90) / 4` adds first and divides second. R also provides named operations called functions. A **function call** writes the function's name followed by inputs inside parentheses. `mean(c(15, 30, 45, 90))` calls `mean()` on values combined by `c()`.

Console work is useful for asking one small question, checking the spelling of a name, or reading help. It is fragile as the sole record of an analysis. The console remembers objects created earlier in the current session, and a history may contain false starts that were never part of the final calculation.

<a id="section-15-worked-example-1-minutes-then-hours"></a>
## Worked example 1: minutes, then hours {#section-17-worked-example-1-minutes-then-hours}

**Example 2.1 (Worked calculation).**

Our first fixture is original synthetic data created for this chapter by Math Atlas, version 1. Its stable ID is `R-02-F01`. One row represents one declared practice session. `session_id` is the row key and `minutes` is elapsed completion time in minutes. There are four rows, no missing codes or values, and no exclusions. The literal source below is the fixture's canonical provenance. Because the values are invented, they demonstrate computation and no real-world claim.

| Session ID | Completion time (minutes) |
| --- | ---: |
| s01 | 15 |
| s02 | 30 |
| s03 | 45 |
| s04 | 90 |

The hand calculation is

\[
\frac{15+30+45+90}{4}=\frac{180}{4}=45\text{ minutes}.
\]

Here is the same calculation in R. The operator `<-` assigns the value on its right to the name on its left. The function `c()` combines the four values into one ordered collection. A line beginning with `#` is a comment for readers; R does not evaluate the words after `#` on that line. The function `length()` counts entries, `sum()` adds them, and `mean()` calculates their arithmetic mean. `anyDuplicated()` reports the position of the first repeated key, or the whole number `0L` when it finds none. Finally, `stopifnot()` stays quiet when every supplied check is true and stops with an error otherwise.

```r
# Fixture R-02-F01: one row per synthetic practice session.
session_id <- c("s01", "s02", "s03", "s04")
minutes <- c(15, 30, 45, 90)

mean_minutes <- mean(minutes)

stopifnot(length(session_id) == 4L)
stopifnot(anyDuplicated(session_id) == 0L)
stopifnot(length(minutes) == 4L)
stopifnot(sum(minutes) == 180)
stopifnot(abs(mean_minutes - 45) <= 1e-10 + 1e-8 * abs(45))
```

Read the central line from the inside out: find the mean of the object named `minutes`, then assign the result to `mean_minutes`. The `L` in `4L` marks a whole-number value, while `abs()` measures the absolute size of a difference. The final check allows a tiny tolerance because many decimal calculations cannot be stored exactly on a computer. For these integer inputs, the answer is exactly 45 in ordinary arithmetic.

To convert each time from minutes to hours, divide by 60. R applies that division to every entry in `minutes`. Inside the first check below, `all()` returns `TRUE` only when every entrywise comparison is true. The mean is therefore 0.75 hour:

\[
\frac{45\text{ minutes}}{60\text{ minutes per hour}}=0.75\text{ hour}.
\]

```r
hours <- minutes / 60
mean_hours <- mean(hours)

stopifnot(all(abs(hours - c(0.25, 0.5, 0.75, 1.5)) <= 1e-10))
stopifnot(abs(mean_hours - 0.75) <= 1e-10 + 1e-8 * abs(0.75))
```

The unit belongs in the object name or an adjacent comment and in the prose conclusion. `mean_minutes <- 45` and `mean_hours <- 0.75` describe the same duration in different units. Reporting “the mean is 0.75” without the word *hour* is incomplete.

Assignment is different from a comparison. `mean_minutes <- 45` stores a value. `mean_minutes == 45` asks whether two values are equal and returns either `TRUE` or `FALSE`. A single `=` can assign in some R contexts and names function arguments such as `trim = 0`; using `<-` for ordinary assignment makes the roles easier to see. For approximate decimal calculations, use a tolerance check like the one above instead of assuming exact machine equality.

<a id="section-70-a-script-is-the-analysis-you-choose-to-keep"></a>
## A script is the analysis you choose to keep {#section-72-a-script-is-the-analysis-you-choose-to-keep}

**Definition R-DEF-script (script).** An R **script** is a plain-text, ordered record of R expressions and comments intended to be saved and executed again. A self-contained script defines its required data or reads them from a declared source, creates required objects before using them, and records checks and interpretation needed for its purpose.

Order matters because assignment changes the current computational state. If line 2 asks for `mean(minutes)`, line 1 must already have defined `minutes`. R's `source()` documentation states that parsed expressions from a file are evaluated sequentially. A script with valid grammar can therefore run its early lines and then stop at a later error. By contrast, a syntax error—an expression R cannot parse, such as an unmatched parenthesis—can prevent a sourced file from beginning execution at all.

Saving commands also changes how output should be handled. At the interactive console, a bare expression is usually printed automatically. When a file is run with `source()`, results are not automatically printed by default. Use `print()` when seeing a value is part of the script's purpose; use an assignment when a later calculation needs the value; use `stopifnot()` when a condition must hold.

The function `data.frame()` below makes a rectangular table from named columns of equal length. The dollar operator in `summary_table$quantity` selects a named column; square brackets then select a position within that column. `print()` explicitly displays the finished table.

```r
summary_table <- data.frame(
  quantity = c("number of sessions", "mean minutes", "mean hours"),
  value = c(length(minutes), mean_minutes, mean_hours)
)
print(summary_table)

stopifnot(identical(summary_table$quantity[1], "number of sessions"))
stopifnot(abs(summary_table$value[2] - 45) <= 1e-10 + 1e-8 * abs(45))
stopifnot(abs(summary_table$value[3] - 0.75) <= 1e-10 + 1e-8 * abs(0.75))
```

These commands display three results while the assertions check the displayed numbers. Later chapters develop tables in depth; for now, the important distinction is between calculating, storing, printing, and checking.

Comments should explain decisions that code alone cannot reveal: the unit, measurement unit, provenance, missing-value policy, or reason for a conversion. A comment such as `# calculate the mean` merely repeats `mean(minutes)`. A useful comment says `# Convert recorded minutes to hours; 60 minutes = 1 hour.`

<a id="section-96-help-is-part-of-the-language"></a>
## Help is part of the language {#section-98-help-is-part-of-the-language}

You do not need to memorize every function. You do need a disciplined way to ask what a function expects and returns.

**Definition R-DEF-help (help entry).** An R **help entry** is the installed reference page for a documented topic. It normally gives the topic's usage, arguments, details, returned value, references, related topics, and examples. It describes software behavior; it does not decide whether the operation answers your statistical question.

At an interactive console, `?mean` is shorthand for requesting help on `mean`; `help("mean")` makes the request explicit. If a name could occur in several packages, the `package` argument narrows the request. This chapter uses only R's base distribution.

```r
mean_help <- help("mean", package = "base")
stopifnot(length(mean_help) == 1L)
```

The installed `mean` page has sections labeled **Usage**, **Arguments**, **Value**, and **Examples**. Its usage includes `mean(x, ...)`; the default method also has `trim` and `na.rm` arguments. The argument `x` is the object whose mean is requested. `trim = 0` is the ordinary arithmetic mean; positive trimming changes the statistic. `na.rm = FALSE` means missing values are not silently removed. Neither option should be changed merely to make an inconvenient result disappear.

Read help in three passes:

1. Find the usage line and match each argument in your call to its documented role.
2. Read the argument and value sections. Check required input kind, missing-value behavior, units, and the meaning of the return value.
3. Run the smallest relevant example with your own tiny, hand-checkable values. Then return to the statistical question: a documented computation can still target the wrong units or population.

Help search is useful when you know an idea but not a function name. At the console, `help.search("arithmetic mean")` searches installed help metadata. The shortcut `??"arithmetic mean"` requests the same kind of search. Search results are leads; open the relevant help entry before relying on an argument or returned value.

<a id="section-119-errors-mark-a-boundary-not-a-verdict"></a>
## Errors mark a boundary, not a verdict {#section-121-errors-mark-a-boundary-not-a-verdict}

**Definition R-DEF-error (error).** An R **error** is a signaled condition that prevents the current expression from completing normally. Its message reports what R detected, usually near the failure. It does not necessarily identify the earlier human decision that caused the problem.

That distinction changes debugging. If R says `object 'minuets' not found`, the immediate failure is lookup of the misspelled name. The underlying cause may be a typo, a missing assignment, execution in the wrong order, or reliance on an object from an earlier session. Read the message literally before inventing a more complicated theory.

A reliable repair loop is:

1. Identify the first failing expression, not every line below it.
2. Read the complete condition message and name the operation that failed.
3. Inspect the inputs used by that expression and compare their names to earlier assignments.
4. Consult the function's help for its arguments and returned value.
5. Make one justified repair, restart R, and run the whole script from the beginning.
6. Check the result against a hand calculation or another stated invariant.

Restarting matters. It tests whether the file contains its own prerequisites rather than borrowing them from your console.

<a id="section-136-worked-example-2-two-different-failures"></a>
## Worked example 2: two different failures {#section-138-worked-example-2-two-different-failures}

**Example 2.2 (Worked calculation).**

Fixture `R-02-F02` is another original synthetic teaching fixture created by Math Atlas, version 1. One row is one practice session; `session_id_text` is the key and `minutes_text` records elapsed minutes *as character text*. It has four rows, no missing values or codes, and no exclusions. The values were deliberately stored with quotation marks so that we can diagnose representation separately from spelling. `is.character()` returns `TRUE` when its input has this character representation.

```r
# Fixture R-02-F02: the measurements arrived as character text.
session_id_text <- c("s01", "s02", "s03", "s04")
minutes_text <- c("15", "30", "45", "90")
stopifnot(length(session_id_text) == 4L)
stopifnot(anyDuplicated(session_id_text) == 0L)
stopifnot(length(minutes_text) == 4L)
stopifnot(is.character(minutes_text))
```

Suppose the next expression uses `minuets`, with the middle letters reversed. The object does not exist. A normal script should stop. For this teaching example only, `tryCatch()` evaluates precisely that expected failing expression with a named error handler. The small handler `function(e) e` accepts the error condition as `e` and returns it for inspection. `inherits(object, "error")` asks whether the returned object belongs to the error family. `conditionMessage()` retrieves its message, and `grepl(..., fixed = TRUE)` checks whether literal text occurs in that message. The handler is local to the expression inside `tryCatch()`; it does not disable errors elsewhere.

```r
undefined_object_error <- tryCatch(
  mean(minuets),
  error = function(e) e
)

stopifnot(inherits(undefined_object_error, "error"))
stopifnot(grepl("minuets", conditionMessage(undefined_object_error), fixed = TRUE))
stopifnot(grepl("not found", conditionMessage(undefined_object_error), fixed = TRUE))
```

We validate both the error class and distinctive message text. If the expression unexpectedly succeeded, these checks would fail. If an unrelated later expression failed, nothing here would catch it.

Correcting the spelling reveals a separate problem. The documented default method for `mean()` expects numeric, complex, or logical input; the quoted measurements are character input. On this installed R version, calling `mean(minutes_text)` signals a warning and would return a missing result. The named warning handler below returns that warning as `w` for the same narrow inspection.

```r
character_mean_warning <- tryCatch(
  mean(minutes_text),
  warning = function(w) w
)

stopifnot(inherits(character_mean_warning, "warning"))
stopifnot(grepl(
  "argument is not numeric or logical",
  conditionMessage(character_mean_warning),
  fixed = TRUE
))
```

The justified repair is to convert the text deliberately with `as.numeric()`, then check that conversion before calculating. `is.finite()` checks each converted value for an ordinary finite number, and the already introduced `all()` requires every such check to pass. This is safe for these four literal strings because each is an ordinary numeral and we know there are no missing codes. A real import could contain blanks, units such as `"30 min"`, or codes such as `"unknown"`; those require a declared cleaning policy rather than blind conversion.

```r
minutes_repaired <- as.numeric(minutes_text)
stopifnot(all(is.finite(minutes_repaired)))
stopifnot(all(minutes_repaired == c(15, 30, 45, 90)))

repaired_mean <- mean(minutes_repaired)
stopifnot(abs(repaired_mean - 45) <= 1e-10 + 1e-8 * abs(45))
```

The final answer matches the hand calculation, but the two failures were not interchangeable. The first was a name lookup error. The second was an unsuitable input representation reported as a warning. Changing both at once without reading either message could produce 45, yet teach nothing about why the original script failed.

<a id="section-196-adverse-case-the-invisible-workspace-dependency"></a>
## Adverse case: the invisible workspace dependency {#section-198-adverse-case-the-invisible-workspace-dependency}

**Example 2.3 (Worked calculation).**

Consider a fragment containing only `mean(minutes)`. It can succeed in a console where `minutes` was defined yesterday and fail for a classmate in a clean session. The fragment has no record of the data, units, row meaning, or missingness. Its apparent success is evidence about the current workspace, not evidence that the analysis is complete.

The following code demonstrates the danger without loading or writing an actual saved workspace. First, `minutes` exists from the earlier example and the fragment succeeds. Then `rm(minutes)` removes that object, modeling a clean session, and the identical fragment fails. The expected error is caught and checked; afterward we restore the declared fixture so later code remains explicit.

```r
result_with_hidden_state <- mean(minutes)
stopifnot(abs(result_with_hidden_state - 45) <= 1e-10 + 1e-8 * abs(45))

rm(minutes)
clean_session_error <- tryCatch(
  mean(minutes),
  error = function(e) e
)
stopifnot(inherits(clean_session_error, "error"))
stopifnot(grepl("minutes", conditionMessage(clean_session_error), fixed = TRUE))
stopifnot(grepl("not found", conditionMessage(clean_session_error), fixed = TRUE))

# Restore R-02-F01 explicitly rather than depending on saved state.
minutes <- c(15, 30, 45, 90)
stopifnot(abs(mean(minutes) - 45) <= 1e-10 + 1e-8 * abs(45))
```

An `.RData` file can save objects from a workspace, and some interfaces can offer to restore it at startup. That feature may be convenient for exploration, but it can hide the assignments a script needs. A reproducibility test should start a fresh session without restored objects and run the script in documented order.

**Claim R-CLAIM-script-state (explicit state and order).** For a deterministic calculation with fixed literal inputs and a specified R environment, rerunning requires every needed definition and the execution order to be explicit; a console history alone is not an analysis specification. **Status: demonstrated here by counterexample.** The fragment `mean(minutes)` has the same text in both runs above, but its outcome changes when the prior workspace changes. Adding the explicit assignment before the calculation removes that particular dependency. This claim does not say that a rerunnable calculation is statistically valid: a script can faithfully repeat the wrong target, a biased mechanism, or a mistaken unit.

<a id="section-226-a-reader-ready-script"></a>
## A reader-ready script {#section-228-a-reader-ready-script}

Before handing off a calculation, ask whether a new reader can locate each of these parts:

- a prose question and the estimand or descriptive target;
- the unit, row meaning, variables, and measurement units;
- literal data or a declared input source, with missingness and exclusions;
- assignments before uses, in one intended order;
- named intermediate results that reveal the calculation;
- checks against hand arithmetic or stated invariants;
- an interpretation bounded by the data mechanism;
- enough environment information to avoid claiming cross-platform evidence you do not have.

This is still a small form of reproducibility. It shows that the recorded computation can be repeated from the recorded inputs in the tested environment. It does not independently recreate the measurements, prove that values are true, or justify generalization. Those questions return throughout the book.

The installed primary documentation consulted for this chapter was R 4.6.0's help for `mean`, `help`, `source`, and `tryCatch`, together with *An Introduction to R*. The help-reading method above is itself rerunnable: open the installed topic, identify usage and arguments, then test a hand-checkable case.

<a id="section-243-practice"></a>
## Practice {#section-245-practice}

All exercise data below are original synthetic mini-fixtures created by Math Atlas, version 1. Each states its row meaning and units; unless an exercise says otherwise, there are no missing values, missing codes, or exclusions.

<a id="section-247-r-02-e01"></a>
## R-02-E01 {#section-249-r-02-e01}

**Exercise 2.1**

Without running R, predict the value of each expression after `x <- c(6, 10, 14)`: `x + 2`, `x / 2`, `mean(x)`, and `length(x) == 3L`. Then run them and explain which operations return several values and which return one.

<details>
<summary>Hint 1</summary>

**Hint.** Apply addition and division to each entry separately. For the mean, add first and divide by the count.

</details>
<details>
<summary>Hint 2</summary>

Count the entries returned by a vector operation separately from a single-number summary.

</details>
<details>
<summary>Solution</summary>

After `x <- c(6, 10, 14)`, adding 2 gives 8, 12, and 16, while dividing by 2 gives 3, 5, and 7. Those operations act on each entry and therefore return three values. The mean is

\[
\frac{6+10+14}{3}=10,
\]

so `mean(x)` returns one value. `length(x)` is 3, so its comparison with `3L` returns the single logical value `TRUE`.

```r
x <- c(6, 10, 14)
stopifnot(all(x + 2 == c(8, 12, 16)))
stopifnot(all(x / 2 == c(3, 5, 7)))
stopifnot(abs(mean(x) - 10) <= 1e-10 + 1e-8 * abs(10))
stopifnot(length(x) == 3L)
```

The comparison is a check; it does not rename or modify `x`.

</details>

<a id="section-288-r-02-e02"></a>
## R-02-E02 {#section-290-r-02-e02}

**Exercise 2.2**

Explain the different jobs of `<-` and `==` in `target <- 12` and `target == 12`. Predict the result of `target == 10`. Why would replacing `==` with `<-` in a check change the program's state?

<details>
<summary>Hint 1</summary>

**Hint.** One operator stores a right-hand value under a name; the other asks a yes-or-no question.

</details>
<details>
<summary>Hint 2</summary>

Assignment changes the stored value; comparison returns a logical result without changing that value.

</details>
<details>
<summary>Solution</summary>

`target <- 12` assigns the value 12 to the name `target`. After that assignment, `target == 12` asks whether the stored value equals 12 and returns `TRUE`; `target == 10` returns `FALSE`.

```r
target <- 12
stopifnot(target == 12)
stopifnot(identical(target == 10, FALSE))
```

If `<-` replaced `==` in a supposed check, R would store the new value instead of asking a question. For example, `target <- 10` would change `target` to 10 and would provide no logical test of the old value. This is dangerous because later expressions would use the changed state.

</details>

<a id="section-321-r-02-e03"></a>
## R-02-E03 {#section-323-r-02-e03}

**Exercise 2.3**

Write a self-contained script for fixture `R-02-X03`: one row is one synthetic bus trip, keyed `b01` through `b04`; trip times are 24, 31, 29, and 36 minutes; there are no missing values or exclusions. Define the keys and measurements, check key uniqueness, calculate the count and mean, check both against hand arithmetic, and create a two-sentence bounded conclusion.

<details>
<summary>Hint 1</summary>

**Hint.** The total is 120 minutes. Include the literal values before every object that uses them.

</details>
<details>
<summary>Hint 2</summary>

Validate the four keys and compare the calculated count and mean with the hand values.

</details>
<details>
<summary>Solution</summary>

Fixture `R-02-X03` has four rows, one per synthetic bus trip, keyed `b01` through `b04`. `trip_minutes` records duration in minutes; there are no missing values, missing codes, or exclusions. The total is 120 minutes, so the mean is $120/4=30$ minutes.

```r
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
```

A bounded conclusion is: “Across the four declared synthetic bus trips, the mean recorded trip time was 30 minutes (120 minutes over four trips). These invented complete values demonstrate a calculation and do not estimate travel time for any real route or future trip.” The second sentence is necessary because the fixture has no sampling mechanism connecting it to a real target population.

</details>

<a id="section-363-r-02-e04"></a>
## R-02-E04 {#section-365-r-02-e04}

**Exercise 2.4**

Open the installed help for `sum`. From **Usage**, **Arguments**, and **Value**, answer: What is the role of `...`? What does `na.rm` control? What special value does `sum()` return when all supplied inputs have length zero? Verify the last answer in R, and explain why documentation cannot decide whether removing missing values is scientifically defensible.

<details>
<summary>Hint 1</summary>

**Hint.** Search the help page for “zero length” and distinguish software behavior from a missingness policy.

</details>
<details>
<summary>Hint 2</summary>

An empty sum is zero even when emptiness resulted from removing unknown values; the data histories differ.

</details>
<details>
<summary>Solution</summary>

In the installed `sum` help, `...` denotes the numeric, complex, or logical objects whose entries are to be added. The argument `na.rm` controls whether missing values are removed before summing. Its default is `FALSE`, so missing input normally propagates to a missing result. After missing values are removed, an input containing no remaining values has sum zero; zero is the additive identity.

```r
sum_help <- help("sum", package = "base")
stopifnot(length(sum_help) == 1L)
stopifnot(sum(numeric(0)) == 0)
stopifnot(sum(c(NA_real_), na.rm = TRUE) == 0)
stopifnot(is.na(sum(c(NA_real_), na.rm = FALSE)))
```

These are software semantics. Setting `na.rm = TRUE` does not show that the missing units resemble the observed units or that the reduced data answer the original estimand. That judgment requires information about the data mechanism.

The two zero results also need different readings. `sum(numeric(0))` adds an explicitly empty input. `sum(c(NA_real_), na.rm = TRUE)` starts with one recorded missing entry and discards it under the requested software rule. Equal numerical outputs do not make their data histories equal, which is why a script must record the missingness policy alongside the command.

</details>

<a id="section-400-r-02-e05"></a>
## R-02-E05 {#section-402-r-02-e05}

**Exercise 2.5**

Fixture `R-02-X05` has one row per synthetic quiz attempt, keyed `q01` through `q03`; the scores are 7, 9, and 11 points, with no missing values or exclusions. The intended measurement object is `scores <- c(7, 9, 11)`, but a later expression is `mean(score)`. State the immediate cause of failure, show how to catch only that expression's error for inspection, and check that its message contains `score` and `not found`. Then repair the name and verify the mean by hand.

<details>
<summary>Hint 1</summary>

**Hint.** Wrap only `mean(score)` in `tryCatch(..., error = function(e) e)`; leave the repaired calculation outside the handler.

</details>
<details>
<summary>Hint 2</summary>

Check the expected singular-name error, then run the repaired plural-name calculation outside the handler.

</details>
<details>
<summary>Solution</summary>

Fixture `R-02-X05` has three rows, one per synthetic quiz attempt, keyed `q01` through `q03`. `scores` records points, with no missing values, missing codes, or exclusions. The immediate problem is name lookup: `scores` was defined, but `score` was not. The handler surrounds only the expected failing expression. We then verify the condition before running the repair outside the handler.

```r
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
```

The hand check is $(7+9+11)/3=27/3=9$. Catching all code for the rest of the script would be a poor repair: it could conceal a different failure instead of proving that this expected one occurred.

Correcting `score` to `scores` is justified because the intended assignment is visible immediately above and the three values match the exercise statement. In a longer analysis, a similarly named object might represent a different variable. The error message establishes that lookup failed; it does not authorize choosing whichever existing name looks closest.

</details>

<a id="section-447-r-02-e06"></a>
## R-02-E06 {#section-449-r-02-e06}

**Exercise 2.6**

A fragment says only `mean(wait_seconds)`. It succeeds for its author because the console already contains `wait_seconds <- c(20, 40, 60)`. Explain why the fragment is incomplete, then rewrite it so a fresh session defines the fixture, its seconds unit, row meaning (one row per synthetic request), keys `r01` through `r03`, missingness, and expected mean.

<details>
<summary>Hint 1</summary>

**Hint.** The repair begins before `mean()`. A saved result is not a substitute for the assignment that creates its input.

</details>
<details>
<summary>Hint 2</summary>

Define the request keys, times and seconds unit before computing so console history supplies nothing.

</details>
<details>
<summary>Solution</summary>

The fragment depends on state created elsewhere. It does not state the literal input, row meaning, unit, or missingness and so cannot be rerun from a clean session. A complete version is below.

Fixture `R-02-X06` has three rows, one per synthetic request, keyed `r01` through `r03`. `wait_seconds` is waiting duration in seconds. It has no missing values, missing codes, or exclusions.

```r
# R-02-X06, canonical literal source.
request_id <- c("r01", "r02", "r03")
wait_seconds <- c(20, 40, 60)
wait_mean_seconds <- mean(wait_seconds)

stopifnot(length(request_id) == length(wait_seconds))
stopifnot(anyDuplicated(request_id) == 0L)
stopifnot(length(wait_seconds) == 3L)
stopifnot(sum(wait_seconds) == 120)
stopifnot(abs(wait_mean_seconds - 40) <= 1e-10 + 1e-8 * abs(40))
```

The mean is 40 seconds for these three declared requests. A saved workspace might make the original fragment run, but it would leave the input and its meaning outside the script.

This repair makes the same-input calculation rerunnable. It still does not explain how real requests would have been selected, whether waiting time was measured accurately, or what population should receive the conclusion. Explicit computational state makes this calculation reproducible, while the statistical mechanism remains a separate requirement.

</details>

<a id="section-491-r-02-e07"></a>
## R-02-E07 {#section-493-r-02-e07}

**Exercise 2.7**

Fixture `R-02-X07` records one distance per synthetic walk, keyed `w01` through `w03`: 500, 750, and 1250 metres, with no missing values or exclusions. Convert metres to kilometres, calculate the mean in both units, and use an assertion to show that the two means obey the conversion. Write both answers with units.

<details>
<summary>Hint 1</summary>

**Hint.** One kilometre is 1000 metres. Compare `mean(kilometres)` with `mean(metres) / 1000` using a small tolerance.

</details>
<details>
<summary>Hint 2</summary>

Convert all inputs by the same factor, then compare the corresponding means within tolerance.

</details>
<details>
<summary>Solution</summary>

Fixture `R-02-X07` has three rows, one per synthetic walk, keyed `w01` through `w03`. `metres` records distance in metres. It has no missing values, missing codes, or exclusions. Dividing every value by 1000 yields 0.5, 0.75, and 1.25 kilometres. The mean distance is

\[
\frac{500+750+1250}{3}=\frac{2500}{3}\text{ metres}
\]

or $2.5/3$ kilometres, approximately 833.333 metres or 0.833333 kilometre.

```r
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
```

Writing the units prevents an apparent contradiction between 833.333 and 0.833333: they express the same distance on different scales.

</details>

<a id="section-540-r-02-e08"></a>
## R-02-E08 {#section-542-r-02-e08}

**Exercise 2.8**

Two students run the same complete script on the same four literal values and both obtain 45 minutes. List two conclusions this agreement supports and three conclusions it does not support. Include at least one limitation about data production and one about computing environments.

<details>
<summary>Hint 1</summary>

**Hint.** Separate repeating a computation from validating measurements, sampling or assignment, and from testing on every operating system or R version.

</details>
<details>
<summary>Hint 2</summary>

Same-input agreement cannot establish measurement accuracy, a population sampling mechanism or unexamined platform behavior.

</details>
<details>
<summary>Solution</summary>

Agreement supports two limited conclusions. First, both runs evaluated the recorded expressions to the same displayed result for these literal inputs. Second, the script has at least passed this particular same-input rerun check in the two environments used.

It does not establish at least these three stronger claims:

1. It does not show that the measurements are accurate or that the rows represent the intended units; both students could repeat the same bad inputs.
2. It does not show that sampling, assignment, or missingness supports a claim about a wider population or a causal effect; computation cannot reconstruct an undocumented mechanism.
3. It does not show that the script works on every R version, operating system, locale, or hardware configuration. Evidence from two runs is evidence only for the environments actually tested.

Nor does obtaining 45 determine whether the unit is minutes, seconds, or something else. The common result is meaningful only alongside the fixture declaration and statistical target; the exercise does not specify which four values or statistic were used.

```r
# One demonstration fixture consistent with the agreement, not identified by it.
session_id <- c("s01", "s02", "s03", "s04")
minutes <- c(15, 30, 45, 90)
agreed_result <- mean(minutes)

stopifnot(length(session_id) == 4L)
stopifnot(anyDuplicated(session_id) == 0L)
stopifnot(length(minutes) == 4L)
stopifnot(abs(agreed_result - 45) <= 1e-10 + 1e-8 * abs(45))
```

The strongest warranted statement is therefore narrow: “For the same four literal inputs, the same complete script returned 45 minutes in each tested run.” The demonstration above shows one compatible mean calculation; four values all equal to 45 would give the same mean. Agreement alone identifies neither the inputs nor the statistic, and does not validate the measurements or design.

[Return to the chapter and exercises R-02-E01–R-02-E08.](console-scripts-help-errors.md)

The solutions, explanations, and synthetic fixtures are original to Math Atlas and licensed CC BY-SA 4.0. No human review is claimed for this author submission.

</details>

[Open the solutions for exercises R-02-E01–R-02-E08.](solutions-console-scripts-help-errors.md)


<a id="section-594-r-02-e09"></a>
## R-02-E09 {#section-596-r-02-e09}

**Exercise 2.9**

Predict the final result in `x <- c(2, 4, 6); mean_x <- mean(x); x <- c(10, 20, 30); mean_x`. Explain why changing x does not update mean_x automatically, then write the corrected calculation for the second vector. The two vectors are original version-1 synthetic three-reading fixtures in arbitrary declared units with no missingness.

<details>
<summary>Hint 1</summary>

An assignment stores the result calculated at that moment.

</details>
<details>
<summary>Hint 2</summary>

The final expression retrieves the stored summary instead of calling mean again.

</details>
<details>
<summary>Solution</summary>

The final stored value is four, the first vector's mean. Reassigning x does not establish a live spreadsheet dependency. Recalculate after assigning the new input:

```r
x <- c(10, 20, 30)
mean_x <- mean(x)
stopifnot(length(x) == 3L)
stopifnot(abs(mean_x - 20) <= 1e-10 + 1e-8 * 20)
```

The corrected mean is twenty declared units. The script needs both the input and its calculation in the intended order; a plausible saved number does not establish which current input it describes.

</details>

<a id="section-628-r-02-e10"></a>
## R-02-E10 {#section-630-r-02-e10}

**Exercise 2.10**

For the original synthetic version-1 three-reading fixture `c(3, NA, 7)` points, predict `sum(x)` and `sum(x, na.rm = TRUE)` after assigning x. Report the observed count too, and explain why the second sum is not a total of three known scores.

<details>
<summary>Hint 1</summary>

The default missingness behavior differs from the named removal argument.

</details>
<details>
<summary>Hint 2</summary>

There are two observed values and one unknown row, not three observed scores.

</details>
<details>
<summary>Solution</summary>

The default sum is missing. Removing the unknown gives ten points from two observations:

```r
x <- c(3, NA_real_, 7)
observed_count <- sum(!is.na(x))
observed_total <- sum(x, na.rm = TRUE)
stopifnot(is.na(sum(x)))
stopifnot(observed_count == 2L, observed_total == 10)
```

All three declared rows still exist. The command totals the recorded scores; it neither shows that the unknown score is zero nor identifies the full three-score total.

</details>

<a id="section-663-sources-and-authorship"></a>
## Sources and authorship {#section-665-sources-and-authorship}

Software-semantics claims were checked against the locally installed R Core Team documentation for R 4.6.0 (2026-04-24): *An Introduction to R*, especially §1.7 on help and §1.10 on executing commands from a file; *The R Language Definition*, especially §3.1.3 on function calls; and the base-distribution help entries for mean, help, source, tryCatch, and sum. Those primary documents establish the documented behavior of R operations. They do not establish the statistical suitability of an operation for a particular target or mechanism.

The exposition, examples, fixtures, and exercises are original to Math Atlas under CC BY-SA 4.0. No third-party dataset or exercise was adapted, and no human statistical, pedagogical, computational, or accessibility review is claimed for this author draft.

<a id="section-669-summary"></a>
## Summary {#section-671-summary}

R evaluates explicit expressions using the objects currently defined. A saved script should create its own inputs, name calculated summaries, and handle expected errors narrowly. Installed help explains command behavior; it cannot select a scientific missingness policy or a statistical target. Same-input rerunning supports a computational claim whose environment and scope should remain visible.
