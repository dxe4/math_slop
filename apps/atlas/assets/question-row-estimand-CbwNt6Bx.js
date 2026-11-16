var e=`---
parent_id: book-statistics-with-r
matter_id: question-row-estimand-solutions
title: "Solutions: From a Question to a Row"
license: CC BY-SA 4.0
---

# Solutions: From a Question to a Row

These solutions answer every core exercise from the chapter. They make the target and mechanism explicit because a numerical answer alone cannot repair an ambiguous statistical question.

The executable solutions use their own copy of the original synthetic fixture. This companion can therefore run in a fresh R process without relying on the chapter.

\`\`\`r
# Independent synthetic fixture for this solutions document.
unit_id <- c("u01", "u02", "u03", "u04", "u05", "u06", "u07", "u08")
minutes <- c(2, 4, 5, 7, 8, 9, 11, 14)

stopifnot(length(unit_id) == 8L)
stopifnot(length(minutes) == 8L)
stopifnot(sum(minutes) == 60)
stopifnot(abs(mean(minutes) - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
\`\`\`

## R-01-E01

The unit is one library, observed on the declared occasion of 1 October. Thus the row contract is: “one row represents one library on 1 October.” The number of seats is a quantitative variable because it is a numerical count on which arithmetic comparisons have meaning. Whether food is permitted is a categorical variable, with categories such as yes and no. Closing time is also recorded, but classifying it well would require its representation and intended use: a clock time is not simply a duration.

A student who visits three libraries is not a unit in this table because rows are indexed by libraries, not visits or students. The student's activity could be relevant to another table whose unit is a student-visit, but it does not create three new library units here. This is why the unit comes from the row contract rather than from every noun mentioned in the study.

## R-01-E02

Pairing the smallest and largest values makes an efficient check:

\\[
(2+14)+(4+11)+(5+9)+(7+8)=16+15+14+15=60.
\\]

There are eight values, so

\\[
\\bar{x}=\\frac{60}{8}=7.5\\text{ minutes}.
\\]

If 14 had been omitted, the total would be 46 and the count would be 7. Both would disagree with the expected total of 60 and count of 8. Checking the count as well as the sum is useful: a plausible-looking mean can hide an omitted value.

## R-01-E03

The vector is constructed with \`c()\` and named with \`<-\`. We name the three results so the assertions check exactly what the calculation produced.

\`\`\`r
# Completion time is measured in minutes for one declared session per value.
minutes <- c(2, 4, 5, 7, 8, 9, 11, 14)

number_of_units <- length(minutes)
total_minutes <- sum(minutes)
mean_minutes <- mean(minutes)

stopifnot(number_of_units == 8L)
stopifnot(total_minutes == 60)
stopifnot(abs(mean_minutes - 7.5) <= 1e-10 + 1e-8 * abs(7.5))
\`\`\`

\`length(minutes)\` returns 8 because the vector has eight entries. \`sum(minutes)\` returns 60 because it adds those entries. \`mean(minutes)\` divides that total by the count and returns 7.5. The code is auditable because it contains the data, the calculation, the expected values, and the measurement unit.

## R-01-E04

One minute is 60 seconds, so every value is multiplied by 60. Scaling all eight values by 60 also scales their sum and mean by 60. We therefore predict a total of \\(60\\times60=3600\\) seconds and a mean of \\(7.5\\times60=450\\) seconds.

\`\`\`r
seconds <- minutes * 60

number_of_units_seconds <- length(seconds)
total_seconds <- sum(seconds)
mean_seconds <- mean(seconds)

stopifnot(number_of_units_seconds == 8L)
stopifnot(total_seconds == 3600)
stopifnot(abs(mean_seconds - 450) <= 1e-10 + 1e-8 * abs(450))
stopifnot(all(seconds == c(120, 240, 300, 420, 480, 540, 660, 840)))
\`\`\`

The number of observed units remains eight because unit conversion changes each measurement's scale, not the number of entries or the row definition. The numerical values of the total and mean change, so every reported number must carry its unit.

## R-01-E05

Let \\(y_i\\) be the completion time for eligible session \\(i\\), for \\(i=1,\\ldots,200\\). A finite-population mean estimand is

\\[
\\mu_{200}=\\frac{1}{200}\\sum_{i=1}^{200}y_i.
\\]

This defines the target even though most of its component values are unobserved. If the eight sampled values are \\(x_1,\\ldots,x_8\\), the observed sample mean statistic is

\\[
\\bar{x}_8=\\frac{1}{8}\\sum_{j=1}^{8}x_j=7.5\\text{ minutes}.
\\]

The quantities need not be numerically equal because the eight sampled sessions can have a different average from the full group of 200. Under a known probability-sampling mechanism, the sample mean may have useful repeated-sampling properties as an estimator of the population mean; that does not turn the observed value 7.5 into the unknown population value. If selection favored unusually quick or slow sessions, even the mechanism connecting the statistic to the estimand would be doubtful.

## R-01-E06

The report confuses rows with learners. There are ten learner-attempt rows but only five distinct learners. The two observations from one learner share the learner's background, skills, and other features, so the design did not create ten independently selected learners.

For a question about learner-level change, define the unit as one learner followed across the two declared weeks. A corresponding variable is

\\[
d_i=(\\text{week-2 time for learner }i)-(\\text{week-1 time for learner }i).
\\]

There are five values \\(d_1,\\ldots,d_5\\), one per learner. Their mean would describe mean within-learner change for these five learners. A negative value means faster completion in week 2 under this sign convention. This solution does not discard the repeated observations; it uses the pairing to construct the variable that answers the learner-level change question.

Calling an attempt the unit could also be defensible for a purely attempt-level descriptive question. It would not justify relabeling ten attempts as ten independent learners.

## R-01-E07

Removing \`u08\`, whose known synthetic time is 14 minutes, leaves a total of \\(60-14=46\\) minutes over seven rows. The observed-row statistic is therefore

\\[
\\bar{x}_{\\mathrm{observed}}=\\frac{46}{7}\\approx6.571\\text{ minutes}.
\\]

The declared eight-unit target is still 7.5 minutes. The amount by which the seven-row statistic is lower is

\\[
7.5-\\frac{46}{7}=\\frac{15}{2}-\\frac{46}{7}
=\\frac{105-92}{14}=\\frac{13}{14}\\approx0.929\\text{ minute}.
\\]

The following code verifies both results without assuming state from the chapter:

\`\`\`r
row_kept <- unit_id != "u08"
observed_minutes <- minutes[row_kept]

seven_row_mean <- mean(observed_minutes)
target_mean <- mean(minutes)
mean_gap <- target_mean - seven_row_mean

stopifnot(length(observed_minutes) == 7L)
stopifnot(sum(observed_minutes) == 46)
stopifnot(abs(seven_row_mean - 46 / 7) <= 1e-10 + 1e-8 * abs(46 / 7))
stopifnot(abs(mean_gap - 13 / 14) <= 1e-10 + 1e-8 * abs(13 / 14))
\`\`\`

An exclusion audit should answer at least these three questions:

1. **What rule excluded the row, and was that rule declared before seeing outcomes?** A rule chosen after inspecting values can select a favorable result.
2. **Why is the row absent, and could that reason be related to its unobserved value?** For example, very long completion times might be more likely to exceed a recording window.
3. **Does the estimand still concern all eight declared units, or has the population been explicitly changed to the seven observed units?** Quietly changing the denominator also changes the question.

In this synthetic fixture we can calculate the missing unit's effect because the complete data were given first. A real absent row usually hides its outcome, so this exact correction would not be available.

## R-01-E08

With learners choosing their own sheet, a bounded conclusion is:

> Among the participating learners as recorded, the new-sheet group had a mean completion time of 6.8 minutes and the standard-sheet group had a mean of 8.1 minutes, a descriptive difference of 1.3 minutes. Because learners chose their sheet, self-selection and other pre-existing group differences could explain some or all of the association; this comparison alone does not establish that the new sheet caused faster completion.

The arithmetic is \\(8.1-6.8=1.3\\) minutes, with the new-sheet mean lower under the chosen direction of subtraction. “Association” matches the observational mechanism. The conclusion neither erases the observed difference nor grants it a causal interpretation.

With documented random assignment among the participating learners, a bounded conclusion is:

> Among the participating learners, the group randomly assigned the new sheet had a mean completion time 1.3 minutes lower than the group assigned the standard sheet. Under the stated random assignment and assuming the specified outcomes were recorded without assignment-related loss and one learner's assignment did not affect another's completion time, the comparison supports a causal interpretation for these assigned learners. It does not by itself show the same effect for learners outside this participating group.

Random assignment addresses systematic pre-assignment differences in the two assigned groups through the design. The extra conditions remain visible because assignment cannot prevent measurement error, outcome loss, non-adherence, or interference. Neither conclusion treats the synthetic pair of group means as evidence about a real population; the exercise concerns how the mechanism changes the wording warranted by a hypothetical study.


## R-01-E09

The attempt total is 110 minutes across six records, giving $110/6=55/3$ minutes, approximately 18.33. Learner A averages five and B twenty five, so the mean of learner means is fifteen minutes. The first target describes an equally weighted attempt among these six; the second describes an equally weighted learner among these two, followed by that learner's recorded mean. Different attempt counts create different weights. Neither calculation identifies a population effect: these are invented complete records with no wider sampling mechanism.

## R-01-E10

For missing time $x$ with $0\\le x\\le20$, the target is $(22+x)/4$, so it ranges from 5.5 to 10.5 minutes. The three observed values average $22/3$, approximately 7.33 minutes. That computable statistic does not identify the four-session target. Dropping the unknown changes the denominator; replacing it by zero selects the lower endpoint without evidence. The range uses only the supplied bound and retains all four declared sessions.

## Sources and authorship

The R syntax in these solutions was checked against R Core Team, *An Introduction to R*, version 4.6.0 (2026-04-24), §§2.1–2.2, and the R 4.6.0 base-package help pages for \`mean\`, \`length\`, and \`sum\`; it was executed with R 4.6.0. The prose and exercise solutions are original to Math Atlas.

This solutions companion is licensed CC BY-SA 4.0. No human review is claimed in this draft.
`;export{e as default};