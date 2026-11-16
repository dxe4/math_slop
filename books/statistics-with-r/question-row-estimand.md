
# From a Question to a Row

Imagine that a tutor tries a new practice sheet and records how many minutes each learner takes to finish it. The arithmetic seems to be the easy part: put the times into R and ask for an average. But an average of *what*? Does a row describe a learner, an attempt, or a learner on a particular day? Are the recorded learners everyone we care about, or a sample from a larger group? Did they choose the new sheet, or was it assigned? What happened to a learner whose time never reached the file?

Those questions decide what the calculation means. Software can add the visible numbers perfectly while answering the wrong scientific question.

This chapter develops a five-part path:

> **question → unit and row → estimand → mechanism → statistic**

The path starts with what we want to learn, identifies what each observation represents, states the target as a precise quantity, records how the data came to exist, and only then computes. Along the way, we will learn enough R to store a small set of numbers, count and add them, and calculate their mean. You need only arithmetic and the idea that a table has rows and columns.

## Questions need nouns, verbs, and scope

“What is the average time?” is not yet a statistical question. It omits the people or events being averaged, the measurement procedure, and the range of circumstances. A usable version might be:

> Among the eight declared practice sessions `u01` through `u08`, what was the mean recorded completion time, in minutes, for this sheet?

This question is deliberately modest. It names a finite group of eight sessions, a recorded variable, a unit of measurement, and a summary. It asks what happened in those sessions. It does not yet ask whether the sheet would speed up future learners or whether it is better than another sheet.

A different question creates a different target:

> For all learners who could attend this tutoring program next term, what would the mean completion time be if they used this sheet?

Now the eight observed sessions are only evidence about a larger, partly unobserved population. The word “would” also asks about circumstances that may not have occurred. The same eight numbers can appear in both investigations, but they do different inferential work. Good statistics begins by refusing to let the calculation choose the question after the fact.

## What does one row represent?

**Definition R-DEF-unit (unit).** A **unit** is the entity or event about which one observation is made, at the declared time or occasion. The unit must be described precisely enough that we can decide whether two records concern the same unit.

A row is a storage convention. In the simplest table, one row represents one observed unit at the declared occasion. The row is not itself a person, plant, school, or transaction; it is a record about one. If a learner completes the sheet twice, the table may have two rows. Those rows might represent two *attempts*, while the learner remains one person.

This distinction matters because “number of rows” and “number of independent units” need not agree. Ten measurements on one thermometer are ten readings, but they are not ten independently selected thermometers. Repeated measurements can be useful: they can show change, reduce some kinds of measurement noise, or reveal within-unit variation. They do not, by duplication alone, create new independent units.

**Definition R-DEF-variable (variable).** A **variable** is a characteristic recorded or defined for each unit, with a stated meaning and set of possible values.

In our example, `unit_id` is an identifier and `minutes` is a quantitative variable. A later table might also contain `sheet_type`, a categorical variable whose values are `standard` and `new`. The variable name is not a complete definition. “Time” could mean time until first answer, active working time, wall-clock time including breaks, or a rounded self-report. Each produces different data.

Before accepting a table, finish this sentence:

> One row represents one ______ at ______; `minutes` records ______ in minutes, measured by ______.

If the blanks cannot be filled, the table is not ready for interpretation.

## Worked investigation 1: eight complete sessions

**Example 1.1 (Worked calculation).**

We will use a synthetic fixture: numbers invented for learning and checking code. There are eight units, no missing values, and completion time is measured in minutes.

| Unit ID | Completion time (minutes) |
| --- | ---: |
| u01 | 2 |
| u02 | 4 |
| u03 | 5 |
| u04 | 7 |
| u05 | 8 |
| u06 | 9 |
| u07 | 11 |
| u08 | 14 |

We can verify the calculation by hand. The total is

\[
2+4+5+7+8+9+11+14=60\text{ minutes}.
\]

There are eight times, so their arithmetic mean is

\[
\frac{60}{8}=7.5\text{ minutes}.
\]

Now write the same investigation in R. The function `c()` combines values into a vector, an ordered collection. The assignment operator `<-` gives that vector a name. A line beginning with `#` is a comment for a human reader; R does not calculate it.

```r
# Synthetic completion-time fixture: one row per declared practice session.
unit_id <- c("u01", "u02", "u03", "u04", "u05", "u06", "u07", "u08")
minutes <- c(2, 4, 5, 7, 8, 9, 11, 14)

# Check the table shape and the two hand calculations.
number_of_units <- length(minutes)
total_minutes <- sum(minutes)
mean_minutes <- mean(minutes)

stopifnot(length(unit_id) == number_of_units)
stopifnot(number_of_units == 8L)
stopifnot(total_minutes == 60)
stopifnot(abs(mean_minutes - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
```

Read the function calls aloud. `length(minutes)` asks how many values are in the vector. `sum(minutes)` adds them. `mean(minutes)` computes their arithmetic mean. Parentheses mark the input to each function. Running a script means saving these commands in a plain text file and asking R to execute them in order. A later line can use an object created by an earlier line, which is why a complete script records both the data and the calculation.

The assertions made by `stopifnot()` are quiet when all checks are true and stop the script if any check is false. They are part of our audit trail. A reader need not trust a pasted answer: the literal values and the conditions they must satisfy appear together.

The values can also be displayed as a plot. The horizontal axis below is the declared unit order, not elapsed time. The vertical segments show completion time, and the dashed horizontal line marks 7.5 minutes.

```r
unit_order <- seq_along(minutes)
plot(
  unit_order,
  minutes,
  type = "h",
  lwd = 3,
  xlab = "Unit in declared order (u01 to u08)",
  ylab = "Completion time (minutes)",
  xaxt = "n"
)
axis(1, at = unit_order, labels = unit_id)
points(unit_order, minutes, pch = 16)
abline(h = mean_minutes, lty = 2)
```

**Prose alternative to the plot.** In declared order, times rise from 2 minutes for `u01` to 14 minutes for `u08`; no adjacent values are equal. Four times lie below the 7.5-minute mean and four lie above it. The lowest and highest times are 5.5 and 6.5 minutes from the mean, respectively. The table gives every exact value; the plot makes relative position easier to see.

The plot and table describe this fixture. Because the numbers were invented, neither can establish a real fact about tutoring, learners, or the sheet. Synthetic data can test a calculation and teach an interpretation. It cannot supply empirical evidence for a scientific effect.

## The target and the calculation have different jobs

**Definition R-DEF-estimand (estimand).** An **estimand** is the precisely defined numerical quantity an investigation aims to learn. Its definition specifies the units or population, the variable, the summary, and relevant conditions or time.

For the finite population consisting of exactly `u01` through `u08`, let the completion times be \(y_1,\ldots,y_8\). The population mean estimand is

\[
\mu=\frac{1}{8}\sum_{i=1}^{8}y_i.
\]

Once that finite population and its eight values are fixed, \(\mu\) is fixed. It does not become random merely because we do not yet know it. In the complete synthetic fixture, \(\mu=7.5\) minutes.

**Definition R-DEF-statistic (statistic).** A **statistic** is a numerical quantity computed from the observed data according to a stated rule.

For \(n\) observed times \(x_1,\ldots,x_n\), the sample mean statistic is

\[
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i.
\]

In a complete census of our eight-unit population, \(\bar{x}=\mu=7.5\) minutes numerically. The concepts still differ. The estimand is defined by the question; the statistic is produced by the observed rows. If the eight sessions were sampled from two hundred eligible sessions, \(\bar{x}=7.5\) would be a statistic used to estimate the two-hundred-session mean \(\mu\), whose value need not be 7.5.

The distinction prevents a common circular argument: “Our target was the average of whatever happened to be in the file.” That target can always be computed, but it may be scientifically uninteresting. Declare the population first; then audit whether the rows connect to it.

## How did these rows come to exist?

**Definition R-DEF-mechanism (mechanism).** A **mechanism** is the process that generated the observed data, including how units entered the data, how conditions were assigned or chosen, how variables were measured, and how records became missing or excluded.

Different parts of a mechanism support different conclusions:

- A **sampling mechanism** describes how observed units were selected from a target population. It matters when extending a sample description to unobserved units.
- An **assignment mechanism** describes how units came to receive conditions such as a new or standard sheet. It matters when interpreting a difference between conditions.
- A **measurement mechanism** describes how values were recorded, rounded, censored, or lost. It matters even in a complete census.

These mechanisms are facts about design and data production, not features that R can infer from a vector. Two files can contain identical numbers and still warrant different conclusions.

Suppose learners chose which sheet to use. Comparing mean times for the two observed groups is an **observational comparison**. Learners who choose the new sheet might differ in experience, confidence, available time, or other causes of completion speed. The difference of means describes the recorded groups, but the choice mechanism does not by itself show that changing sheets caused the difference.

Now suppose the same eligible learners were assigned to sheets by a documented random procedure before working. Random assignment breaks a systematic link between learners' prior characteristics and their assigned sheet in a probabilistic sense. Under the declared design and additional conditions—such as recording outcomes as specified and keeping one learner's assignment from changing another learner's outcome—it can support a causal comparison for the assigned units. Random assignment does not automatically make the learners representative of every future learner, and it does not repair missing outcomes.

“Random” must therefore name an actual operation. A casual phrase such as “the groups looked random” is not an assignment mechanism.

## Worked investigation 2: the row that vanished

**Example 1.2 (Worked calculation).**

Return to the complete synthetic population of eight sessions, whose mean is 7.5 minutes. Imagine that `u08` never appears in the analysis file. The visible file has seven rows and no `NA` marker because the whole row is absent.

```r
# Simulate a wholly absent row by retaining every ID except u08.
row_kept <- unit_id != "u08"
observed_id <- unit_id[row_kept]
observed_minutes <- minutes[row_kept]

observed_n <- length(observed_minutes)
observed_total <- sum(observed_minutes)
observed_mean <- mean(observed_minutes)

stopifnot(observed_n == 7L)
stopifnot(observed_total == 46)
stopifnot(abs(observed_mean - 46 / 7) <= 1e-10 + 1e-8 * abs(46 / 7))
```

The seven-row statistic is \(46/7\), approximately 6.571 minutes. There are two possible target statements, and they must not be blended:

1. If the target remains the mean for all eight declared sessions, it remains 7.5 minutes in this synthetic complete fixture. The seven-row mean is an incomplete-data statistic. In a real investigation, using it for the eight-unit target would require a defensible account of why the missing value can be ignored or adjusted for.
2. If the target is redefined as the mean for the seven sessions present in the file, the estimand is \(46/7\) minutes and is fully observed. But the population has changed. The analysis no longer answers the original eight-session question.

Exclusion is therefore part of the estimand and mechanism, not mere housekeeping. Here the excluded time is the largest value, so silent removal lowers the mean by \(7.5-46/7=13/14\), about 0.929 minute. We know that only because this fixture was constructed with the complete values. In real data, a wholly absent row does not reveal what its value would have been.

Sometimes a row remains present but its measurement is explicitly missing. R represents a missing numeric value as `NA_real_`. The default `mean()` then returns `NA`; removing missing values requires an explicit `na.rm = TRUE`. That calculation still does not justify the exclusion.

```r
minutes_with_na <- c(2, 4, 5, 7, 8, 9, 11, NA_real_)
mean_without_policy <- mean(minutes_with_na)
complete_case_mean <- mean(minutes_with_na, na.rm = TRUE)

stopifnot(is.na(mean_without_policy))
stopifnot(abs(complete_case_mean - 46 / 7) <= 1e-10 + 1e-8 * abs(46 / 7))
```

The code answers “what happens when we omit recorded missing values?” The scientific audit asks “why was this value missing, and which population does the resulting number describe?” These are separate questions.

## Repeats: more rows, same underlying units

**Example 1.3 (Worked calculation).**

For a complete synthetic example, five learners have week-two minus week-one changes of $-2,1,-1,0,-3$ minutes. There are ten attempt rows but five paired changes. Their total change is minus five minutes and their learner-level mean change is minus one minute. Negative means a shorter time in the second week under this declared sign convention. The calculation describes these five learners; the pairs do not constitute ten independent learners.

Suppose five learners each complete two versions of a task. If a row represents a learner-attempt, the table has ten rows. If the research question concerns learners, however, there are five learner units with repeated observations. Treating the ten rows as ten independently selected learners invents independence that the design did not create.

Three honest analyses might answer different questions:

- Describe all ten attempts, explicitly treating an attempt as the unit of description.
- Reduce each learner's two attempts to a learner-level summary, such as that learner's mean change, and analyze five learner summaries.
- Preserve each learner's pair and calculate a learner-level difference when that quantity matches the question; Chapter 12 returns to paired differences.

None is universally correct. The question chooses the unit, and the design determines dependence. Merely calling each row a “sample” conceals both decisions.

This also explains why `length(minutes)` deserves interpretation. It reports the number of vector entries. In our first fixture, that equals eight observed units because the data contract says one row per declared session and no repetitions. In a repeated-measures file, `length()` still counts entries; it cannot count independent units without information about which rows share an underlying unit.

## A claim should reveal its boundary

A bounded conclusion names the target, statistic, mechanism, and limit in ordinary prose. For the first investigation, a complete conclusion is:

> For the eight declared synthetic practice sessions `u01`–`u08`, the mean recorded completion time was 7.5 minutes (60 minutes across eight sessions). This is a descriptive result for an invented complete fixture; it supplies no evidence about real learners and no causal comparison between sheets.

Notice what the sentence does not need: inflated language, a claim that the result is “significant,” or a promise that the same mean holds elsewhere. Precision comes from matching the words to the design.

For an observational sheet comparison, an honest conclusion might say that the recorded new-sheet group had a lower mean than the recorded standard-sheet group, while noting that self-selection leaves alternative explanations. For a randomized comparison, the assignment mechanism can strengthen a causal interpretation for the assigned units, but the conclusion must still state missingness, adherence, interference, and population limits that matter. A calculation cannot carry more authority than the mechanism that produced its rows.

## Recap and analysis ledger

Before calculating, write a five-line ledger:

| Ledger item | Question to answer |
| --- | --- |
| Question | What exactly do we want to learn, for whom, when, and under what conditions? |
| Unit and row | What entity or event is one unit, and what does one row represent? |
| Estimand | What precise numerical target answers the question? |
| Mechanism | How were units selected, conditions assigned or chosen, values measured, and rows lost? |
| Statistic | What rule will turn the observed rows into a number? |

You can now create a numeric vector with `c()`, assign it with `<-`, and use `length()`, `sum()`, and `mean()` while checking the result. More importantly, you can say why that result answers one question and may fail to answer another.

The next chapter uses this ledger while teaching how to work at the R console, run scripts, ask for help, and interpret errors. Chapter 3 develops vectors and types. Later chapters introduce table operations; whenever a table is transformed, the declared meaning of a row must be preserved. Still later inference chapters will ask how statistics vary under sampling or assignment mechanisms. That reasoning is trustworthy only when the unit, estimand, and mechanism have already been made explicit.

## Exercises

## Setup for the worked exercise solutions

The solutions repeat their companion's fixture and helper definitions so the code below uses explicit inputs with the stated units and missingness policy.

<details>
<summary>Solution setup</summary>

```r
# Independent synthetic fixture for this solutions document.
unit_id <- c("u01", "u02", "u03", "u04", "u05", "u06", "u07", "u08")
minutes <- c(2, 4, 5, 7, 8, 9, 11, 14)

stopifnot(length(unit_id) == 8L)
stopifnot(length(minutes) == 8L)
stopifnot(sum(minutes) == 60)
stopifnot(abs(mean(minutes) - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
```

</details>

### R-01-E01 — Units and variables

**Exercise 1.1**

A campus study has one row for each of 12 libraries on 1 October. Its columns are library ID, number of seats, closing time, and whether food is permitted. Identify the unit, the declared occasion, one quantitative variable, and one categorical variable. Explain why a student visiting three libraries is not a unit in this table.

<details>
<summary>Hint 1</summary>

**Hint.** Complete “one row represents one ___ at ___,” then classify variables by the kind of values they can take.

</details>
<details>
<summary>Hint 2</summary>

Classify the recorded columns, then explain why student visits do not redefine the library-level key.

</details>
<details>
<summary>Solution</summary>

The unit is one library, observed on the declared occasion of 1 October. Thus the row contract is: “one row represents one library on 1 October.” The number of seats is a quantitative variable because it is a numerical count on which arithmetic comparisons have meaning. Whether food is permitted is a categorical variable, with categories such as yes and no. Closing time is also recorded, but classifying it well would require its representation and intended use: a clock time is not simply a duration.

A student who visits three libraries is not a unit in this table because rows are indexed by libraries, not visits or students. The student's activity could be relevant to another table whose unit is a student-visit, but it does not create three new library units here. This is why the unit comes from the row contract rather than from every noun mentioned in the study.

</details>

### R-01-E02 — Mean by hand

**Exercise 1.2**

For the eight completion times \(2,4,5,7,8,9,11,14\) minutes, calculate the total, count, and mean without R. Show an arithmetic check that would catch accidentally omitting 14.

<details>
<summary>Hint 1</summary>

**Hint.** Pair values from the two ends before dividing by the number of values.

</details>
<details>
<summary>Hint 2</summary>

Check both count and total: omitting the largest value changes both before division.

</details>
<details>
<summary>Solution</summary>

Pairing the smallest and largest values makes an efficient check:

\[
(2+14)+(4+11)+(5+9)+(7+8)=16+15+14+15=60.
\]

There are eight values, so

\[
\bar{x}=\frac{60}{8}=7.5\text{ minutes}.
\]

If 14 had been omitted, the total would be 46 and the count would be 7. Both would disagree with the expected total of 60 and count of 8. Checking the count as well as the sum is useful: a plausible-looking mean can hide an omitted value.

</details>

### R-01-E03 — Translate the audit to R

**Exercise 1.3**

Write R code that stores the eight times in an object called `minutes`, then computes `length(minutes)`, `sum(minutes)`, and `mean(minutes)`. Add assertions for the expected count, total, and mean, and add a comment that states the unit of measurement.

<details>
<summary>Hint 1</summary>

**Hint.** Use `c()` to combine values and `<-` to name both the vector and calculated results.

</details>
<details>
<summary>Hint 2</summary>

Put the literal inputs before their calculations and use the declared tolerance for the noninteger mean.

</details>
<details>
<summary>Solution</summary>

The vector is constructed with `c()` and named with `<-`. We name the three results so the assertions check exactly what the calculation produced.

```r
# Completion time is measured in minutes for one declared session per value.
minutes <- c(2, 4, 5, 7, 8, 9, 11, 14)

number_of_units <- length(minutes)
total_minutes <- sum(minutes)
mean_minutes <- mean(minutes)

stopifnot(number_of_units == 8L)
stopifnot(total_minutes == 60)
stopifnot(abs(mean_minutes - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
```

`length(minutes)` returns 8 because the vector has eight entries. `sum(minutes)` returns 60 because it adds those entries. `mean(minutes)` divides that total by the count and returns 7.5. The code is auditable because it contains the data, the calculation, the expected values, and the measurement unit.

</details>

### R-01-E04 — Change measurement units

**Exercise 1.4**

Convert every completion time from minutes to seconds by multiplying the R vector by 60. Predict, then verify, the new total and mean. Explain why changing units does not change the number of observed units.

<details>
<summary>Hint 1</summary>

**Hint.** Multiplication by 60 applies to every entry of a numeric vector; `length()` counts entries rather than their scale.

</details>
<details>
<summary>Hint 2</summary>

The same eight session identifiers remain present after every measurement is multiplied by sixty.

</details>
<details>
<summary>Solution</summary>

One minute is 60 seconds, so every value is multiplied by 60. Scaling all eight values by 60 also scales their sum and mean by 60. We therefore predict a total of \(60\times60=3600\) seconds and a mean of \(7.5\times60=450\) seconds.

```r
seconds <- minutes * 60

number_of_units_seconds <- length(seconds)
total_seconds <- sum(seconds)
mean_seconds <- mean(seconds)

stopifnot(number_of_units_seconds == 8L)
stopifnot(total_seconds == 3600)
stopifnot(abs(mean_seconds - 450) <= 1e-10 + 1e-8 * abs(450))
stopifnot(all(seconds == c(120, 240, 300, 420, 480, 540, 660, 840)))
```

The number of observed units remains eight because unit conversion changes each measurement's scale, not the number of entries or the row definition. The numerical values of the total and mean change, so every reported number must carry its unit.

</details>

### R-01-E05 — Statistic or estimand?

**Exercise 1.5**

Eight sessions are selected from a declared population of 200 eligible sessions. Their sample mean is 7.5 minutes. State (a) a finite-population mean estimand for the 200 sessions, (b) the statistic calculated from the sample, and (c) one reason the two quantities need not have the same numerical value.

<details>
<summary>Hint 1</summary>

**Hint.** Define the target using all 200 values, whether observed or not; define the statistic using only the eight observed values.

</details>
<details>
<summary>Hint 2</summary>

The unobserved population values still belong to the estimand even though only eight values enter the statistic.

</details>
<details>
<summary>Solution</summary>

Let \(y_i\) be the completion time for eligible session \(i\), for \(i=1,\ldots,200\). A finite-population mean estimand is

\[
\mu_{200}=\frac{1}{200}\sum_{i=1}^{200}y_i.
\]

This defines the target even though most of its component values are unobserved. If the eight sampled values are \(x_1,\ldots,x_8\), the observed sample mean statistic is

\[
\bar{x}_8=\frac{1}{8}\sum_{j=1}^{8}x_j=7.5\text{ minutes}.
\]

The quantities need not be numerically equal because the eight sampled sessions can have a different average from the full group of 200. Under a known probability-sampling mechanism, the sample mean may have useful repeated-sampling properties as an estimator of the population mean; that does not turn the observed value 7.5 into the unknown population value. If selection favored unusually quick or slow sessions, even the mechanism connecting the statistic to the estimand would be doubtful.

</details>

### R-01-E06 — Diagnose repeated observations

**Exercise 1.6**

Five learners each complete a task twice, one week apart, producing ten rows. A report says, “Our sample contains ten independent learners.” Diagnose the error. Give one defensible unit for a question about learner-level change and state a corresponding variable.

<details>
<summary>Hint 1</summary>

**Hint.** Count distinct learners separately from learner-attempt rows, then express change as a within-learner quantity.

</details>
<details>
<summary>Hint 2</summary>

Give one week-two minus week-one difference per learner and state its sign convention.

</details>
<details>
<summary>Solution</summary>

The report confuses rows with learners. There are ten learner-attempt rows but only five distinct learners. The two observations from one learner share the learner's background, skills, and other features, so the design did not create ten independently selected learners.

For a question about learner-level change, define the unit as one learner followed across the two declared weeks. A corresponding variable is

\[
d_i=(\text{week-2 time for learner }i)-(\text{week-1 time for learner }i).
\]

There are five values \(d_1,\ldots,d_5\), one per learner. Their mean would describe mean within-learner change for these five learners. A negative value means faster completion in week 2 under this sign convention. This solution does not discard the repeated observations; it uses the pairing to construct the variable that answers the learner-level change question.

Calling an attempt the unit could also be defensible for a purely attempt-level descriptive question. It would not justify relabeling ten attempts as ten independent learners.

</details>

### R-01-E07 — Audit an exclusion

**Exercise 1.7**

The target was declared as the mean completion time of `u01`–`u08`, but the `u08` row is absent from the analysis file. Using the known synthetic fixture, calculate the seven-row statistic and its difference from the eight-unit target. Then list three questions that an exclusion audit should answer before interpreting a real incomplete file.

<details>
<summary>Hint 1</summary>

**Hint.** The retained values total 46. Ask about the exclusion rule, the reason the row is absent, and whether the target population changed.

</details>
<details>
<summary>Hint 2</summary>

Find the seven-row mean first, then distinguish changing the analysis set from changing the declared target.

</details>
<details>
<summary>Solution</summary>

Removing `u08`, whose known synthetic time is 14 minutes, leaves a total of \(60-14=46\) minutes over seven rows. The observed-row statistic is therefore

\[
\bar{x}_{\mathrm{observed}}=\frac{46}{7}\approx6.571\text{ minutes}.
\]

The declared eight-unit target is still 7.5 minutes. The amount by which the seven-row statistic is lower is

\[
7.5-\frac{46}{7}=\frac{15}{2}-\frac{46}{7}
=\frac{105-92}{14}=\frac{13}{14}\approx0.929\text{ minute}.
\]

The following code verifies both results without assuming state from the chapter:

```r
row_kept <- unit_id != "u08"
observed_minutes <- minutes[row_kept]

seven_row_mean <- mean(observed_minutes)
target_mean <- mean(minutes)
mean_gap <- target_mean - seven_row_mean

stopifnot(length(observed_minutes) == 7L)
stopifnot(sum(observed_minutes) == 46)
stopifnot(abs(seven_row_mean - 46 / 7) <= 1e-10 + 1e-8 * abs(46 / 7))
stopifnot(abs(mean_gap - 13 / 14) <= 1e-10 + 1e-8 * abs(13 / 14))
```

An exclusion audit should answer at least these three questions:

1. **What rule excluded the row, and was that rule declared before seeing outcomes?** A rule chosen after inspecting values can select a favorable result.
2. **Why is the row absent, and could that reason be related to its unobserved value?** For example, very long completion times might be more likely to exceed a recording window.
3. **Does the estimand still concern all eight declared units, or has the population been explicitly changed to the seven observed units?** Quietly changing the denominator also changes the question.

In this synthetic fixture we can calculate the missing unit's effect because the complete data were given first. A real absent row usually hides its outcome, so this exact correction would not be available.

</details>

### R-01-E08 — Write bounded conclusions

**Exercise 1.8**

The recorded mean for a new-sheet group is 6.8 minutes and for a standard-sheet group is 8.1 minutes. Write two short conclusions: one if learners chose their sheet, and one if the sheet was randomly assigned among the participating learners. In each, state what the difference of 1.3 minutes does and does not establish. Do not claim evidence about people outside the participating group.

<details>
<summary>Hint 1</summary>

**Hint.** For choice, describe an association and name self-selection. For random assignment, tie the causal interpretation to the assignment mechanism and the participating units, while retaining measurement and missingness conditions.

</details>
<details>
<summary>Hint 2</summary>

Random assignment supports a statement about participating units; broader generalisation needs an additional sampling argument.

</details>
<details>
<summary>Solution</summary>

With learners choosing their own sheet, a bounded conclusion is:

> Among the participating learners as recorded, the new-sheet group had a mean completion time of 6.8 minutes and the standard-sheet group had a mean of 8.1 minutes, a descriptive difference of 1.3 minutes. Because learners chose their sheet, self-selection and other pre-existing group differences could explain some or all of the association; this comparison alone does not establish that the new sheet caused faster completion.

The arithmetic is \(8.1-6.8=1.3\) minutes, with the new-sheet mean lower under the chosen direction of subtraction. “Association” matches the observational mechanism. The conclusion neither erases the observed difference nor grants it a causal interpretation.

With documented random assignment among the participating learners, a bounded conclusion is:

> Among the participating learners, the group randomly assigned the new sheet had a mean completion time 1.3 minutes lower than the group assigned the standard sheet. Under the stated random assignment and assuming the specified outcomes were recorded without assignment-related loss and one learner's assignment did not affect another's completion time, the comparison supports a causal interpretation for these assigned learners. It does not by itself show the same effect for learners outside this participating group.

Random assignment addresses systematic pre-assignment differences in the two assigned groups through the design. The extra conditions remain visible because assignment cannot prevent measurement error, outcome loss, non-adherence, or interference. Neither conclusion treats the synthetic pair of group means as evidence about a real population; the exercise concerns how the mechanism changes the wording warranted by a hypothetical study.

</details>


## R-01-E09

**Exercise 1.9**

An original synthetic version-1 fixture records six complete attempts in minutes. Learner A has times 4 and 6; learner B has times 10, 20, 30 and 40. There are no missing values or exclusions. Calculate the attempt mean and the mean of the two learner-specific means. State a target appropriate to each.

<details>
<summary>Hint 1</summary>

Find each learner's own mean before choosing how learners should be weighted.

</details>
<details>
<summary>Hint 2</summary>

Attempt weighting gives learner B four sixths of the weight; learner weighting gives each learner one half.

</details>
<details>
<summary>Solution</summary>

The attempt total is 110 minutes across six records, giving $110/6=55/3$ minutes, approximately 18.33. Learner A averages five and B twenty five, so the mean of learner means is fifteen minutes. The first target describes an equally weighted attempt among these six; the second describes an equally weighted learner among these two, followed by that learner's recorded mean. Different attempt counts create different weights. Neither calculation identifies a population effect: these are invented complete records with no wider sampling mechanism.

</details>

## R-01-E10

**Exercise 1.10**

Four declared synthetic sessions have completion times 4, 8, 10 and one unrecorded value, in minutes. The sole missing code is NA. Every true time lies between zero and twenty minutes. Find the possible range of the four-session mean and compare it with the observed-value mean, keeping the original target.

<details>
<summary>Hint 1</summary>

Represent the missing time by a variable, not by a presumed zero.

</details>
<details>
<summary>Hint 2</summary>

The full total is twenty two plus the unknown value, and its denominator remains four.

</details>
<details>
<summary>Solution</summary>

For missing time $x$ with $0\le x\le20$, the target is $(22+x)/4$, so it ranges from 5.5 to 10.5 minutes. The three observed values average $22/3$, approximately 7.33 minutes. That computable statistic does not identify the four-session target. Dropping the unknown changes the denominator; replacing it by zero selects the lower endpoint without evidence. The range uses only the supplied bound and retains all four declared sessions.

</details>

## Sources and authorship

The R language claims and syntax in this chapter were checked against R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24), especially §1.10 “Executing commands from or diverting output to a file,” §2.1 “Vectors and assignment,” §2.2 “Vector arithmetic,” and §2.5 “Missing values”; R Core Team, *The R Language Definition*, version 4.6.0, §3.1.3 “Function calls”; and the R 4.6.0 base-package help pages for `mean`, `length`, and `sum`, including the `na.rm` argument. The executable examples were checked with R 4.6.0. These are software-semantics sources; the exposition, synthetic fixture, investigations, and exercises are original to Math Atlas.

This chapter is licensed CC BY-SA 4.0. No human statistical, pedagogical, or computational review is claimed in this draft.

## Summary

A statistical calculation needs a declared unit, population, estimand and data-producing mechanism. A row count is a storage fact, while independence is a design or model property. Complete-fixture means, missing-row means and equally weighted learner summaries can answer different questions. Preserve units and exclusions, and let the mechanism determine how far the conclusion can reach.
