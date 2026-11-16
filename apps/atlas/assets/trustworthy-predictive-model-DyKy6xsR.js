var e=`---
id: recipe-trustworthy-predictive-model
title: "Recipe: Build and Audit a Trustworthy Predictive Model"
license: CC BY-SA 4.0
---

# Recipe: Build and Audit a Trustworthy Predictive Model

**Before reading.** Read [From a Question to a Row](/resources/library:book-statistics-with-r:question-row-estimand/), [Sample Spaces and Events](/resources/library:book-introduction-to-probability:sample-spaces-events/).

A predictive model is a whole measurement-and-decision pipeline, not a fitted formula. A sophisticated learner trained on leaked, mismatched, or ambiguously defined data can fail more confidently than a simple baseline. This recipe builds an auditable supervised-learning experiment from a table of observations and keeps four claims separate:

- **descriptive:** what was present in the recorded sample;
- **computational:** what a particular program returned;
- **predictive:** how a frozen procedure performed on specified held-out observations;
- **causal:** what would happen under an intervention.

The first three can support one another under careful design. None automatically establishes the fourth.

## Ingredients

You need a population and use case, an observational unit, a target available at a declared prediction horizon, candidate features available before that horizon, a loss tied to the use case, and a splitting rule that imitates deployment. Keep a data dictionary and a short decision log. Record units, missing-value codes, collection times, inclusion rules, and transformations.

This workflow assumes rows are exchangeable enough for the chosen split, or that a time/group split explicitly represents the dependence. If repeated measurements of one person, machine, school, or location occur, a row-wise random split usually exaggerates independence.

## Step 1: write the prediction contract

Before looking at performance, complete this sentence:

> Using information available at **time A** for **unit U**, predict **target Y at time B**, for decisions made under **environment E**, scored by **loss L**.

Specify exclusions and costs. False negatives and false positives may have unequal consequences. A mean squared error is appropriate when squared numerical deviations represent the intended penalty; accuracy is not a universal objective, particularly with class imbalance.

### Worked contract

“Using sensor readings available by 08:00 for each independently serviced pump, predict its next-24-hour energy use under the current operating regime, scored by mean absolute error.” This contract exposes problems: pumps may share a site, maintenance changes the regime, and a feature computed at midnight tomorrow is unavailable at 08:00.

## Step 2: draw a provenance and leakage map

For every column, ask when and how it was produced. Mark arrows from the target or future events into candidate features. Common leakage routes include:

- a billing total completed after the prediction horizon;
- preprocessing fitted to the full dataset before splitting;
- duplicate or near-duplicate units on both sides of a split;
- target encodings computed using held-out labels;
- choosing features after repeatedly checking test performance;
- a timestamp or record identifier that encodes collection policy.

Leakage is not limited to literally copying $Y$. It is any information the deployment procedure would not possess at prediction time. Remove or redesign suspect features before model comparison.

## Step 3: split by the unit of generalization

Reserve training, validation, and test roles. Training data estimate model parameters. Validation data select transformations, hyperparameters, thresholds, and sometimes model families. The test set is used only after those choices are frozen.

The split must match the claim:

- Random row split: plausible for approximately independent, identically distributed units.
- Group split: keep all observations from a person, device, class, or site together.
- Forward time split: train on the past and evaluate on a later period.
- Spatial split: withhold locations when generalizing to new regions.

Cross-validation can reuse the training portion efficiently, but folds must preserve the same grouping or temporal logic. Tuning on cross-validation estimates and then reporting the best fold average as if it were an untouched test result mixes selection and evaluation.

## Step 4: explore without letting the test set become a teacher

On the training portion, inspect ranges, units, missingness, duplicates, target balance, pair plots or grouped summaries, and implausible values. State whether missingness could depend on unobserved outcomes. Plotting all test targets while deciding transformations leaks evaluation information into design.

Scale matters. If Euclidean distance combines temperature in degrees with income in thousands, the larger numerical scale can dominate. Fit centering and scale constants on training data, then apply those constants unchanged to validation and test data. For a feature $j$,

$z_ij=(x_ij-mean_train,j)/sd_train,j$.

If $sd_train,j=0$, the feature is constant in training; do not divide by zero. Remove it or apply an explicitly documented convention.

## Step 5: establish a baseline and metric

For squared error, the constant minimizing training loss is the training mean. For absolute error, a training median is a minimizer. Classification baselines can include the majority class and a prevalence probability. A candidate model has not earned complexity unless it improves the relevant held-out metric and passes diagnostics.

Report the metric in original units when possible. Include uncertainty or variation across valid resamples, groups, or time periods. A point estimate from one fixed test set is not a distribution-free guarantee of future performance.

## Step 6: package preprocessing with fitting

Every data-dependent transformation belongs inside the training operation:

\`\`\`text
fit_pipeline(train, configuration):
    imputer  = fit_imputer(train.features)
    X1       = imputer.transform(train.features)
    scaler   = fit_scaler(X1)
    X2       = scaler.transform(X1)
    model    = fit_model(X2, train.target, configuration)
    return frozen(imputer, scaler, model)
\`\`\`

Validation observations call only \`transform\` and \`predict\`. Feature selection, principal components, learned embeddings, vocabulary construction, and target encoding follow the same rule. “Unsupervised” preprocessing can still leak distribution information.

## Step 7: compare a small, declared candidate set

Write the candidate grid before inspecting validation results. For example, compare a constant baseline, linear regression, ridge regression at specified $\\lambda$ values, and an RBF kernel model at specified $(\\lambda ,h)$ pairs. For ridge with an unpenalized intercept,

$\\min_{\\beta _0,\\beta } \\sum _{i\\in train}(y_i-\\beta _0-x_i^T\\beta )^2 + \\lambda \\lVert \\beta \\rVert_2^2$.

Regularization changes the estimator, not only the optimizer. Larger $\\lambda$ usually reduces coefficient sensitivity while adding bias. It does not guarantee lower test error, fairness, calibration, or causal validity.

If many configurations are searched, the best validation score is itself selected for favorable noise. Nested cross-validation or a final untouched test set helps quantify the whole selection procedure. Do not optimize thousands of configurations and describe the winner as if it had been chosen in advance.

## Step 8: diagnose computation separately

Check convergence flags, residual patterns, coefficient scales, conditioning, and finite outputs. Duplicate columns make unregularized least squares non-identifiable even when predictions on the observed span are possible. Ridge with $\\lambda >0$ regularizes penalized directions, but an unpenalized intercept and degenerate design still deserve an explicit rank check.

For kernel ridge, solve

$(K+\\lambda I)\\alpha =y$, with $K_ij=k(x_i,x_j)$.

Repeated inputs can make $K$ singular at $\\lambda =0$; positive $\\lambda$ makes $K+\\lambda I$ positive definite when $K$ is positive semidefinite. Use a stable factorization rather than an explicit matrix inverse in production code. A Gaussian-process computation may add numerical jitter to a covariance matrix, but jitter is a computational device and should be distinguished from an observation-noise model.

## Step 9: freeze, test once, and report the estimand

After choosing the full pipeline, refit according to the declared protocol, freeze it, and evaluate on test data. Report sample counts, split logic, baseline, metric, uncertainty method, missing predictions, and every post hoc choice. Keep training, validation, and test results labeled.

Test error estimates performance for a population resembling the test-generating process. It is not automatically a guarantee under deployment shift. Compare feature ranges, missingness, outcome prevalence when eventually observed, and performance over time or declared subgroups. Small subgroup samples imply wide uncertainty; suppressing that uncertainty makes a table look more decisive than it is.

## Step 10: stress the model and document limits

Run checks tied to plausible failures:

- perturb measurement precision or missingness;
- evaluate by time, site, or relevant group with uncertainty;
- compare calibration as well as ranking for probabilistic predictions;
- inspect residuals versus fitted values and important covariates;
- test extreme but valid feature combinations;
- rerun with alternative defensible splits and metrics;
- monitor covariate and performance drift after deployment.

A model card should name the contract, data provenance, training period, exclusions, metrics, uncertainty, subgroup analyses, known failure modes, ethical or safety constraints, version hashes, and an owner for monitoring. Reproducibility means another investigator can reconstruct the pipeline and understand its choices, not merely rerun a binary.

## A miniature audit

### Worked example: the baseline must not learn the validation label

Suppose training outcomes are $[2,4,6]$ and a validation outcome is $[20]$. The training-mean baseline predicts $4$, with training MSE

$[(2-4)^2+(4-4)^2+(6-4)^2]/3=8/3$.

Its validation squared error is $(20-4)^2=256$. Replacing the prediction by the full-data mean $8$ would reduce validation error to $144$, but that calculation used the validation label. It is leakage, not a better honest baseline.

Now suppose a feature is $[0,1,2]$ in training and $100$ in validation. Training centering gives mean $1$; the transformed validation value is extremely large. Recomputing the mean on all four rows would hide part of the shift. The extreme value is information about deployment mismatch, not permission to refit evaluation preprocessing.

## Common failure diagnoses

- **Great validation, poor test:** selection overfit, split mismatch, or ordinary sampling variation.
- **Both unrealistically excellent:** search for leakage, duplicates, or a target proxy.
- **Training failure at $\\lambda =0$:** rank deficiency or duplicate kernel centers; inspect the design and regularize when substantively justified.
- **Aggregate success, subgroup failure:** report both and examine sampling, measurement, and objective mismatch.
- **Stable prediction, unstable coefficient:** collinearity can preserve predictions while destroying parameter interpretation.
- **Predictive association presented as intervention:** a causal design and assumptions are missing.

## Exercises with hints and complete solutions

### Exercise 1: Grouping
<a id="trustworthy-predictive-model-ex-1"></a>

Five measurements from each patient are randomly scattered across train and test. What claim is supported?

<details><summary>Hint 1</summary>

Separate a new measurement from a wholly new patient.

</details>
<details><summary>Hint 2</summary>

The split must keep every record of a patient together for the new-patient claim.

</details>
<details><summary>Solution</summary>

At best, performance on new measurements from partially observed patients. It does not honestly estimate performance for entirely new patients. Split by patient for that claim.

</details>

### Exercise 2: Selecting $\\lambda$
<a id="trustworthy-predictive-model-ex-2"></a>

Can the test set choose between $\\lambda =0.1$ and $\\lambda =1$ if the reported number is also called test performance?

<details><summary>Hint 1</summary>

Choosing between penalties is part of fitting the whole pipeline.

</details>
<details><summary>Hint 2</summary>

A set used for that choice is no longer an untouched final evaluation.

</details>
<details><summary>Solution</summary>

No. Once used for selection, it plays a validation role. Use a further untouched set or a nested procedure for final evaluation.

</details>

### Exercise 3: Mean squared error and objective
<a id="trustworthy-predictive-model-ex-3"></a>

For residuals $[1,-2]$, what are RSS and MSE? If a ridge penalty equals $3$, what is the training objective $RSS+penalty$?

<details><summary>Hint 1</summary>

First square and sum the residuals.

</details>
<details><summary>Hint 2</summary>

Divide by the number of observations only for MSE; add the penalty only for the penalized objective.

</details>
<details><summary>Solution</summary>

RSS is $1^2+(-2)^2=5$; MSE is $5/2=2.5$; the penalized objective is $8$. These quantities should not share one unlabeled display.

</details>

### Exercise 4: Causal scope
<a id="trustworthy-predictive-model-ex-4"></a>

A model predicts hospitalization from medication records. Does assigning the medication with the lowest predicted risk improve outcomes?

<details><summary>Hint 1</summary>

Recorded prescriptions are associated with prior patient state and decisions.

</details>
<details><summary>Hint 2</summary>

A predictive comparison does not identify the result of assigning a treatment.

</details>
<details><summary>Solution</summary>

Not from prediction alone. Prescription reflects clinical state and prior decisions; confounding, treatment effects, and policy feedback require a causal and decision-theoretic analysis.

</details>

### Exercise 5: A fixed test split
<a id="trustworthy-predictive-model-ex-5"></a>

A kernel model beats a polynomial model by $0.02$ MSE on eight test points. What can be concluded?

<details><summary>Hint 1</summary>

State the finite observed comparison before a population claim.

</details>
<details><summary>Hint 2</summary>

Eight test points do not by themselves settle variability or transport to other settings.

</details>
<details><summary>Solution</summary>

The computed difference describes those points under that frozen split. Without uncertainty, repeated valid splits, or a larger sampling argument, it does not establish a general superiority claim.

</details>

## Continue the workflow

The [Regularization & Kernel Learning Observatory](#/item/visual-lab-regularization-kernel-learning) makes Steps 5–8 inspectable on deterministic data. [Mathematics for Machine Learning](#/item/course-mathematics-for-machine-learning) supplies the linear algebra, calculus, probability, and optimization behind the recipe. For proof-level limits, continue to [Statistical Learning: Risk, Capacity, and Generalization](#/item/book-statistical-learning-generalization). For sequential actions rather than one-step prediction, use [Decisions over Time](#/item/deep-dive-mdp-reinforcement-learning) and re-audit coverage, feedback, and safety.
`;export{e as default};