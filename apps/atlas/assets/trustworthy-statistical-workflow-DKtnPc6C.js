var e=`---
id: recipe-trustworthy-statistical-workflow
title: "A Trustworthy Statistical Workflow: From Question to Stress Test"
license: CC BY-SA 4.0
---

# A Trustworthy Statistical Workflow: From Question to Stress Test

**Before reading.** Read [From a Question to a Row](/resources/library:book-statistics-with-r:question-row-estimand/), [Sample Spaces and Events](/resources/library:book-introduction-to-probability:sample-spaces-events/).

This recipe is for a real analysis in which a decision may outlive the spreadsheet. It does not choose a test from a menu. It creates an auditable chain from question and design through estimation, diagnostics, sensitivity, and communication.

Use it after elementary statistics and probability. Stop when the data cannot identify the requested quantity; a sophisticated model is not a substitute for missing design information.

## Step 0 — Name the decision and harm

Write one sentence each for:

- the decision or scientific question;
- who may benefit or be harmed;
- the cost of false positives, false negatives, delay, and abstention;
- the time and population to which the result should apply.

“Find interesting correlations” is exploratory, not a decision claim. That can be legitimate, but label it and reserve independent evidence for confirmation.

## Step 1 — Define the estimand before the estimator

An **estimand** is the target quantity, such as “the difference in 30-day recovery probability if eligible patients were assigned treatment A rather than B under current practice.” Name:

1. population;
2. treatment or exposure versions;
3. outcome and measurement time;
4. comparison or summary;
5. handling of intercurrent events such as switching treatment;
6. units.

Only then choose an estimator. A mean among observed completers does not estimate a population mean when completion depends on outcome. A regression coefficient is not self-interpreting; it depends on variables, scale, adjustment set, and model.

**Stop condition.** If stakeholders disagree about the estimand, do not proceed to model selection. Resolve or present distinct estimands.

## Step 2 — Draw the data-generating map

Document how cases entered the dataset, how variables were measured, and which processes caused missing or duplicated records. For an experiment, record randomization unit, allocation rule, blocking, blinding, adherence, and interference. For a sample, record frame, inclusion probabilities, nonresponse, and weights. For observational data, sketch plausible common causes of exposure and outcome before adjusting.

A plain-text diagram is accessible and often sufficient:

\`\`\`text
baseline severity ──> treatment choice ──> outcome
        │                    ▲                 ▲
        └────────────────────┴─────────────────┘
clinic ───────────> measurement schedule ─────┘
\`\`\`

The arrows assert causal possibilities, not measured correlations. The map warns that adjusting only for variables convenient in the file may leave confounding, while adjusting for a treatment consequence can introduce bias.

## Step 3 — Audit the table, blind to the desired answer

Create a machine-checkable data dictionary. Verify:

- one row per intended unit or an explicit repeated-measure key;
- unique identifiers where uniqueness is expected;
- ranges, units, category levels, and date ordering;
- duplicated, impossible, or structurally missing values;
- group counts and outcome availability;
- transformations and joins, including unmatched rows.

Never turn missingness into zero unless zero is its recorded meaning. Preserve raw data, record every transformation, and make exclusions reproducible. If possible, audit labels and missingness before examining the primary group difference to limit motivated cleaning.

## Step 4 — Describe before fitting

Report counts, center, spread, distribution shape, and missingness by relevant design group. Use labelled plots plus equivalent numerical tables. For the primary outcome:

\`\`\`text
group   assigned   outcome observed   median   IQR   mean   SD
A          120            111             —      —      —    —
B          118             96             —      —      —    —
\`\`\`

The unequal observation rates may matter more than a normality test. Investigate collection mechanisms without deleting inconvenient observations. Distinguish data error, legitimate extreme, and a different population.

## Step 5 — Specify the model as assumptions

Write a generative statement. For a linear model, say not just $Y=X\\beta +\\varepsilon$, but which conditional mean is linear, which observations are independent, how variance behaves, how selection occurred, and which functional form or interactions are allowed.

Match likelihood to measurement. Counts may be overdispersed relative to Poisson; proportions require denominators; positive skewed times may not fit additive Gaussian noise; survival times may be censored. Clustered assignment requires cluster-aware inference.

Pre-specify the primary model and a small set of justified alternatives. If models are chosen after seeing which gives a desired answer, ordinary intervals ignore selection.

## Step 6 — Handle missing data as a model problem

Classify why values may be missing, not merely how many. **Missing completely at random** is strong: missingness is unrelated to observed and unobserved data. **Missing at random** allows dependence on observed variables. Likelihood or multiple-imputation methods then require a correctly specified observed-data or imputation model and the relevant ignorability and parameter-distinctness conditions; the label alone is not enough. **Missing not at random** depends on unobserved values even after conditioning and generally requires sensitivity assumptions.

Complete-case analysis can change both target population and association structure. Single mean imputation understates uncertainty and distorts relationships. Multiple imputation should include variables predicting missingness and outcomes, respect data types and bounds, and propagate between-imputation uncertainty.

**Required sensitivity.** Specify at least one plausible departure from the main missingness assumption—such as outcomes among missing cases being shifted by a range—and show how the conclusion changes.

## Step 7 — Estimate effects with uncertainty

Report the point estimate, an interval matched to its interpretation, and a practical reference scale. Keep scientific and Monte Carlo or numerical uncertainty distinct. For a risk difference:

\`\`\`text
estimated difference: 3.2 percentage points
95% interval:         -0.8 to 7.1 points
meaningful threshold:  5.0 points, pre-specified
\`\`\`

This says the data remain compatible with modest harm through worthwhile benefit under the model. It does not prove no effect because zero is inside, nor worthwhile effect because the estimate is positive.

For Bayesian analysis, report prior, likelihood, posterior interval, prior sensitivity, computation diagnostics, and posterior predictive checks. For frequentist analysis, state the repeated-sampling or randomization basis and any small-sample approximation.

## Step 8 — Test only a declared claim

If a hypothesis test informs a decision, specify null, alternative, statistic, rejection or reporting rule, and multiplicity family before seeing results. Report effect and interval alongside p-value. A p-value is a tail probability under a null model, not the probability the null is true.

If the goal is practical equivalence, use an equivalence design and pre-specified margin. Failure to reject a point null is not equivalence. If many outcomes, subgroups, or time points were explored, show the full search and use appropriate familywise-error or false-discovery control rather than presenting the smallest p-value alone.

## Step 9 — Diagnose the failure modes your model can reveal

Check residuals against fitted values, time, location, group, and important predictors. Check leverage, influential cases, nonlinearity, variance structure, dependence, separation, censoring, calibration, and out-of-sample prediction as applicable. Provide a numeric alternative to every diagnostic plot: bin summaries, residual quantiles, autocorrelations, influence values, and counts beyond thresholds.

Diagnostics cannot detect unmeasured confounding from observed residuals alone. A model may fit the observed distribution while the sampling or causal claim is wrong.

## Step 10 — Stress-test the conclusion

Change one defensible choice at a time:

- inclusion criteria and outcome definitions;
- functional forms and interaction terms;
- robust or nonparametric estimator;
- dependence and variance assumptions;
- missing-data shift parameters;
- influential observations, with reasons and both results;
- priors or regularization strengths;
- plausible unmeasured-confounding strength;
- temporal or geographic validation set.

Build a multiverse table:

\`\`\`text
analysis                estimate   interval       decision changes?
primary                    3.2     [-0.8, 7.1]           —
robust outcome model       3.0     [-1.1, 7.0]           no
missing outcomes +5 risk   0.7     [-3.5, 4.9]          yes
\`\`\`

If the decision changes under plausible assumptions, “sensitive” is a result, not an embarrassment.

## Step 11 — Write a claim ladder

Separate:

1. **observed:** what the collected records contain;
2. **model-conditional:** what follows if likelihood and dependence assumptions hold;
3. **population:** what follows if sampling and transport assumptions hold;
4. **causal:** what follows if assignment or identification assumptions hold;
5. **decision:** what follows after values and losses are added.

Use the weakest verb that remains true. “Associated with” is not “caused.” “Compatible with” is often better than “proves.” Include limitations next to the conclusion, not buried later.

## Worked miniature case

### Worked example: a recorded rate change without an identified cause

A company compares defect rates before and after training: 20/400 before and 12/500 after, rates 5.0% and 2.4%, an observed decrease of 2.6 percentage points. Tempting conclusion: training cut defects by 52%.

The audit finds that inspection changed from weekly samples before to automated screening after; product mix also changed. Thus period is perfectly tied to training, measurement, and mix. The data describe a lower recorded rate after the change but do not identify the training effect. A regression adjustment cannot separate factors with no overlap. The correct next step is a concurrent randomized or staggered design with consistent measurement, or an explicitly limited descriptive report.

## Exercises with hints and complete solutions

### Exercise 1: Missing outcome
<a id="trustworthy-statistical-workflow-ex-1"></a>

Outcome observation is 98% in control and 70% in treatment because treatment side effects caused withdrawal. Is complete-case comparison automatically valid?

<details><summary>Hint 1</summary>

Ask why outcomes went missing in the two groups.

</details>
<details><summary>Hint 2</summary>

A comparison among observed survivors can target a selected population.

</details>
<details><summary>Solution</summary>

No. Missingness is related to treatment and plausibly outcome. Complete cases may estimate a selected survivor contrast. Define the estimand, recover outcomes where ethical, model missingness using relevant predictors, and perform a missing-not-at-random sensitivity analysis.

</details>

### Exercise 2: Twenty subgroups
<a id="trustworthy-statistical-workflow-ex-2"></a>

One of twenty unplanned subgroup tests gives $p=.03$. What must be reported?

<details><summary>Hint 1</summary>

The reported probability came from a larger search.

</details>
<details><summary>Hint 2</summary>

Show how many comparisons were tried and which were selected for reporting.

</details>
<details><summary>Solution</summary>

The full search, dependence among tests, exploratory status, effect and interval, and any multiplicity adjustment. Independent confirmation is more persuasive than treating \`.03\` as pre-specified evidence.

</details>

### Exercise 3: Cluster assignment
<a id="trustworthy-statistical-workflow-ex-3"></a>

Ten hospitals, not patients, are randomized. Which sample size controls treatment information?

<details><summary>Hint 1</summary>

Identify the actual random assignment units.

</details>
<details><summary>Hint 2</summary>

Many correlated records inside a hospital do not create new independent treatment assignments.

</details>
<details><summary>Solution</summary>

Primarily the ten independent assignment units, with precision also influenced by hospital sizes and intracluster correlation. Treating thousands of patient rows as independently randomized produces unjustified precision.

</details>

## Deliverables and stop conditions

Ship a question/estimand document, design map, data dictionary, immutable input fingerprint, reproducible analysis, assumptions table, diagnostic and sensitivity tables, claim ladder, and plain-language summary. Stop and escalate rather than publish a causal or population claim when there is no overlap, unknown assignment, unresolved leakage, severe informative missingness without sensitivity bounds, or computation that fails diagnostics.

Continue to experimental design, survey sampling, missing data, causal inference, robust statistics, resampling, hierarchical models, and domain ethics. This recipe is an audit skeleton; each method and application deserves a full course, examples from its field, and independent review.
`;export{e as default};