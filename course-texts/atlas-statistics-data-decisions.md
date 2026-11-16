
# Statistics I: data and inference

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](#/courses/atlas-statistics-data-decisions) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This compact standard course develops the full arc of an introductory statistics analysis: formulate a question, understand how data arose, summarize variation, model sampling, estimate an effect, test a claim, and communicate limits. It assumes algebra, percentages, and elementary probability. Calculus is not required; formulas are motivated by the claims they support. The 1,440-minute metadata is a provisional 24-hour planning allocation for the selected reading, work, and full R capstone below; it is suggested, actual effort is unknown, and unfamiliar R or project revision may require more time.

The recurring case is a community garden testing whether a new watering schedule changes tomato yield. Each plot produces kilograms per week. The estimand—the quantity we want—is the difference in mean weekly yield the schedules would produce for comparable plots under the study conditions.

## Entry diagnostic and selected course route

Answer before beginning:

1. In the values \(2,4,9\), find the mean and median.
2. A school samples only students leaving the library. Name one population this
   sample does not represent well.
3. A coin is tossed 100 times. Is the number of heads a parameter, a statistic,
   or a random variable before the tosses?
4. Two measurements come from every person. Are the resulting rows independent?
5. Does \(p=0.20\) mean there is a 20% probability that the null hypothesis is
   true?

**Answers and placement.** The mean is \(5\), the median is \(4\); the library
sample need not represent all students; before observation the head count is a
random variable and afterward its realized value is a statistic; repeated
measurements share a person and are dependent; and a frequentist p-value is not
a posterior probability. If Questions 1–2 are difficult, spend extra time in
Modules 1–2. If Questions 3–5 are difficult, work through the simulation in
Modules 3–5 slowly before using an inference formula.

| Stage | Work | Evidence to retain |
| --- | --- | --- |
| 1 | Modules 1–2 and [questions, rows, and estimands](../books/statistics-with-r/question-row-estimand.md) | data dictionary, unit-of-analysis note, and hand summaries |
| 2 | Modules 3–4 and [sampling variation](../books/statistics-with-r/sampling-variation.md) | repeated-sample sketch, estimate, standard error, and interval interpretation |
| 3 | Module 5 and [randomization tests](../books/statistics-with-r/randomization-tests.md) | null mechanism, statistic, exact or simulated reference table |
| 4 | Modules 6–7 and [model diagnostics](../books/statistics-with-r/diagnostics-selection.md) | residual audit, design limits, and multiplicity plan |
| 5 | Module 8 and [R-16-P01, the full required capstone](../books/statistics-with-r/capstone.md) | a rerunnable portfolio, diagnostics, claim ledger and bounded conclusion |

Pause after Stages 2 and 4 for a closed-notes explanation. If you cannot explain
what is repeated in the uncertainty calculation, return to the preceding stage.

## Module 1 — Data have a history

A **case** is one observational unit. A **variable** records an attribute of each case. Variables may be categorical, quantitative, or time-to-event; identifiers are labels, not numerical measurements. Before analysis, make a data dictionary with meaning, unit, allowable values, missing-value codes, and collection method.

Suppose 20 plots were randomly assigned, 10 per schedule. The first question is not “Which test should I run?” but “Was assignment followed, were outcomes measured similarly, and which plots are missing?” Random assignment supports a causal contrast for the assigned schedules. Random sampling from a wider population would be a separate requirement for broad generalization.

**Common error.** Treating rows as independent when several tomatoes come from the same plot creates a false sample size. The experimental unit is the plot if treatment was assigned by plot. Either aggregate to plot-level yield or model the within-plot clustering.

## Module 2 — Describe distributions and relationships

For quantitative data, report sample size, center, spread, shape, and unusual observations. The sample mean is

$x̄=(1/n) \sum x_i$,

and the sample variance is

$s^{2}=(1/(n-1)) \sum (x_i-x̄)^{2}$.

Why $n-1$? The deviations sum to zero, so after the mean is estimated only $n-1$ can vary freely. For $n\ge2$ independent observations with a common mean $\mu$ and common finite variance $\sigma ^{2}$, this divisor makes the sample-variance estimator unbiased for $\sigma ^{2}$.

The common mean matters. For independent random observations $X_i$ with means $\mu_i$ and common finite variance $\sigma ^{2}$, let $S^{2}$ be the random-observation version of the formula above and put $\bar\mu=(1/n)\sum_i\mu_i$. Then

$E[S^{2}]=\sigma ^{2}+\frac{\sum_i(\mu_i-\bar\mu)^{2}}{n-1}$.

To derive this, use $\sum_i(X_i-\bar X)^{2}=\sum_iX_i^{2}-n\bar X^{2}$ and independence to obtain $\operatorname{Var}(\bar X)=\sigma ^{2}/n$. Taking expectations leaves $(n-1)\sigma ^{2}+\sum_i(\mu_i-\bar\mu)^{2}$ in the numerator.

**Answered counterexample.** Let $X_1\in\{-1,1\}$ and $X_2\in\{9,11\}$ be independent, each taking its two values with probability $1/2$. Both variances are 1, but the means are 0 and 10. In the equally likely pair order $(-1,9),(-1,11),(1,9),(1,11)$, the values of $S^{2}=(X_1-X_2)^{2}/2$ are $50,72,32,50$. Hence $E[S^{2}]=51$, not 1. The extra 50 is exactly the between-mean term $(25+25)/(2-1)$.

For two quantitative variables, a scatterplot or paired table can show direction, form, strength, and unusual points. Correlation standardizes covariance but does not encode causation and may miss nonlinear dependence.

**Worked summary.** New-schedule yields are $8, 9, 10, 10, 11$; standard-schedule yields are $6, 7, 8, 9, 10$. The means are 9.6 and 8.0 kg, giving an observed difference of 1.6 kg. For the new group, squared deviations total 5.2, so $s^{2}=5.2/(5-1)=1.3$ kg². For the standard group, they total 10, so $s^{2}=10/(5-1)=2.5$ kg². A table is a complete nonvisual alternative to side-by-side dot plots:

```text
schedule   n   mean kg   SD kg   minimum   maximum
new        5     9.6      1.14       8        11
standard   5     8.0      1.58       6        10
```

This calculation illustrates why intermediate totals matter: copying the first group’s variance into the second row would look plausible, but the displayed sums expose the mistake.

## Module 3 — Sampling distributions

A **statistic** is a function of observed data. Under a probability model or randomization scheme, it has a **sampling distribution**: the distribution of values it would take over repeated samples or assignments. The **standard error** is the standard deviation of that sampling distribution.

For independent samples with means $x̄_1,x̄_0$, sizes $n_1,n_0$, and sample standard deviations $s_1,s_0$, an estimated standard error for the difference is

$SE = \sqrt{s_1^{2}/n_1 + s_0^{2}/n_0}$.

Using the five-plot example gives $\sqrt{1.3/5+2.5/5}=\sqrt{.76}\approx .872$ kg. A rough two-standard-error interval is $1.6 \pm 1.744$, or about $[-0.14,3.34]$ kg. For such small samples, a Welch t interval uses a t critical value and appropriate degrees of freedom, making the interval wider. The rough calculation exposes the mechanism but is not a substitute for the small-sample procedure.

A confidence interval is produced by a method that, under its assumptions, covers the fixed target at a stated long-run rate. It does not say there is a 95% probability that this already-computed frequentist interval contains the fixed parameter.

## Module 4 — Estimation before testing

An **estimator** is a rule; an **estimate** is its value for one dataset. Useful properties include bias, variance, mean squared error, consistency, and robustness. A narrow interval centered on a biased estimand is not trustworthy.

Always report an effect in subject-matter units. “An estimated 1.6 kg increase per plot-week” is more interpretable than “statistically significant.” Compare the estimate with a smallest practically meaningful difference chosen before seeing results.

**Boundary case.** Doubling measurements within each plot without adding plots improves measurement precision but does not double the number of independent treatment assignments. Precision is governed by the design’s independent units.

## Module 5 — Hypothesis tests as calibrated procedures

A null hypothesis specifies a model or constraint, such as no average treatment effect. Choose a test statistic that would tend to be more extreme under scientifically relevant departures. The **p-value** is the probability, calculated under the null model, of a statistic at least as incompatible with the null as the observed value.

It is not the probability that the null is true, not the probability results occurred “by chance,” and not an effect size. A small p-value can accompany a negligible effect in a huge sample; a large p-value can reflect weak information rather than equivalence.

For the garden, a permutation test can use the random assignment itself:

1. compute the observed mean difference;
2. repeatedly reassign the ten recorded yields among groups of five in all possible or many random ways;
3. recompute the difference;
4. count assignments at least as extreme as observed.

This tests the sharp null that assignment changes no plot’s outcome, under correct randomization and no interference. It does not require normal outcomes, but it still requires the design assumptions.

## Module 6 — Regression and diagnostics

The linear model $Y_i=\beta _0+\beta _1X_i+\varepsilon _i$ separates a systematic conditional mean from residual variation. Least squares chooses coefficients minimizing $\sum e_i^{2}$. With one predictor,

$\hat\beta_1 = \frac{\sum_i (x_i-\bar x)(y_i-\bar y)}{\sum_i (x_i-\bar x)^{2}}$.

The slope estimates a change in conditional mean per unit of $X$ under the model. Causal interpretation needs more: randomized treatment or an identification argument controlling the right confounders without controlling consequences of treatment.

Inspect residuals against fitted values, predictors, time, and grouping variables. Look for nonlinearity, changing spread, dependence, and influential cases. A normal quantile plot concerns residual distribution, not whether raw $Y$ values look normal. When errors are heteroskedastic, robust standard errors can improve variance estimation but do not repair a wrong mean function or confounding.

## Module 7 — Study design and multiplicity

Random sampling addresses representation. Random assignment addresses causal balance. Blinding limits measurement or behavioral differences. Blocking groups similar units before randomization to reduce noise. Replication estimates variation at the assignment-unit level.

If twenty outcomes are tested at a 5% threshold under true nulls, false positives are no longer surprising. Pre-specify primary outcomes, distinguish confirmatory from exploratory analysis, and use an appropriate familywise-error or false-discovery procedure when the scientific question requires it. Do not quietly report only the favorable subgroup.

## Module 8 — A reproducible statistical report

A defensible report contains:

1. question, population, estimand, and decision context;
2. collection and assignment mechanism;
3. exclusions and missingness, decided transparently;
4. numerical summaries plus labelled plots or equivalent tables;
5. model and assumptions;
6. estimate, interval, and practical scale;
7. sensitivity and diagnostics;
8. conclusions that do not outrun design;
9. data and code provenance where sharing is ethical.

## Practice with worked answers

### 1. Interpret an interval

A 95% confidence interval for a mean difference is $[0.4,2.8]$ hours. Which is correct: “95% of individuals benefit by 0.4–2.8 hours,” or “this procedure targets a population mean difference and, under its assumptions, has 95% long-run coverage”?

**Answer.** The second. The interval does not describe individual treatment effects, and coverage belongs to the procedure over repeated studies. It also depends on sampling/design and model assumptions.

### 2. Find the unit

Six classrooms are assigned to two teaching methods, then 180 students are tested. What is the treatment-assignment unit?

**Answer.** The classroom. Student outcomes within a classroom are clustered. An analysis treating 180 students as independently randomized will usually overstate precision; use classroom-level analysis or a model that respects six clusters, while acknowledging that six is a small number of independent assignments.

### 3. Testing versus evidence of sameness

A test gives $p=0.42$. May we conclude the treatments are equivalent?

**Answer.** No. Failure to reject a point null is not evidence that effects lie inside a practically acceptable band. Design an equivalence or noninferiority analysis with a pre-specified margin and sufficient precision.

### 4. Capstone

Design an analysis for comparing two transit routes’ delays. Name the population, unit, sampling strategy, primary estimand, source of dependence, and one sensitivity check. This short design outline is optional transfer practice; the full required synthesis is R-16-P01, assigned below.

**Worked outline.** Define the target as weekday scheduled trips over a stated season; sample trips across times and days rather than only convenient stops; use trip as the unit; estimate a difference in median delay or probability of exceeding ten minutes; account for repeated days, shared weather, and route pairing; report missing tracking data; and repeat the analysis by weather stratum or after changing the extreme-delay threshold. A causal claim about route policy would require an intervention or stronger identification design.

### Feedback map

- Wrong center or spread: reconstruct the arithmetic from deviations and keep
  physical units attached.
- Too-small standard error: count independent sampling or assignment units,
  then identify clustering or pairing.
- “Accept the null”: replace it with an interval and compare that interval with
  a prespecified practically meaningful range.
- Causal language from observational data: name the intervention, common
  causes, and identification assumption, or narrow the claim.
- A polished plot with no data history: return to Module 1 and write the
  collection mechanism before interpreting the pattern.

## Continuation and honest gaps

Go backward to descriptive statistics or probability models if sampling distributions remain mysterious. Go sideways to the simulation and resampling course to compute randomization tests. Continue to likelihood and estimation, hypothesis testing, generalized linear models, nonparametric and robust methods, experimental design, missing data, Bayesian inference, causal inference, time series, multivariate analysis, survival analysis, or spatial statistics. This one course cannot cover survey weights, hierarchical dependence, measurement error, sequential testing, or domain-specific ethics in adequate depth; each needs its own treatment.

## Required source work, capstone, and feedback

The selected course assigns the four linked R chapters and all eight questions in each chapter, followed by the existing full project R-16-P01. The chapters explain the base-R operations they use; a separate R course is not an entry requirement. Retain your first answers, compare with the complete chapter solutions, and revise the assumptions and reasoning as well as any arithmetic.

| Required reading | Assigned questions | Complete feedback |
|---|---|---|
| [From a question to a row](../books/statistics-with-r/question-row-estimand.md) | R-01-E01–R-01-E08 | [Eight explained answers](../books/statistics-with-r/solutions-question-row-estimand.md) |
| [Sampling variation](../books/statistics-with-r/sampling-variation.md) | R-08-E01–R-08-E08 | [Eight explained answers](../books/statistics-with-r/solutions-sampling-variation.md) |
| [Randomization tests](../books/statistics-with-r/randomization-tests.md) | R-09-E01–R-09-E08 | [Eight explained answers](../books/statistics-with-r/solutions-randomization-tests.md) |
| [Diagnostics and selection](../books/statistics-with-r/diagnostics-selection.md) | R-14-E01–R-14-E08 | [Eight explained answers](../books/statistics-with-r/solutions-diagnostics-selection.md) |

### Full required synthesis: R-16-P01

After the 32 assigned chapter questions, open [R-16-P01: a claim you can defend](../books/statistics-with-r/capstone.md). Use its original literal synthetic fixture R16-SERVICE-V1, or a different original literal synthetic fixture with an equally complete data contract. Submit the full ten-part portfolio: original data and provenance, question and estimand, reconciled row/exclusion ledger, fresh-session base-R code with numerical assertions and an adverse input, summaries with a plot and equivalent table/prose, justified uncertainty or a reasoned refusal, at least two targeted diagnostics, a claim ledger, a bounded conclusion and follow-up design, and an observed broken alternative with its repair. The short transit outline above does not replace this work.

Attempt the portfolio before opening the [complete reference investigation and scoring guide](../books/statistics-with-r/solutions-capstone.md). That reference contains the literal fixture, validation and analysis code, independent uncertainty check, diagnostic and missingness calculations, broken-join repair, execution record, bounded conclusion, and a scored rubric. The chapter's R-16-E01–R-16-E08 are optional targeted repairs when the project exposes a gap.

Use the existing 30-point rubric: 5 for question/design/estimand, 5 for provenance and selection/missingness, 6 for computation and reproducibility, 6 for justified uncertainty and diagnostics, 4 for accessible communication, and 4 for limitations and follow-up. Its stated pass standard is 22 points with at least 3 in each of design, computation, and uncertainty; fabricated provenance or an unsupported causal claim prevents a pass. In self-study these are public revision criteria, not automatically awarded marks or certified mastery. A defensible refusal of inference can earn full credit; agreement with the reference's numerical conclusion is not required.

Keep a revision note linking each material change to the relevant worked answer or rubric criterion. Separate an incorrect computation, an unjustified uncertainty model, and a conclusion that exceeds its design: each needs its own repair. Retain the final rerunnable portfolio and the earlier version so that the revision is inspectable. The provisional 24-hour allocation has not been tested with learners, and project work or repairs may exceed it.
