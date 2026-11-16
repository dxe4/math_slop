var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: learning-contracts-baselines
title: "Learning Contracts, Losses, and Baselines"
level: undergraduate
estimated_minutes: 115
license: CC BY-SA 4.0
---

# Learning Contracts, Losses, and Baselines

## Purpose and prerequisites

This chapter assumes arithmetic, functions, averages, and comfort reading a table. It introduces the mathematical object that later chapters differentiate and optimize. By the end, you should be able to specify a prediction task, derive a constant baseline, distinguish training from evaluation, and state exactly what a finite experiment does not prove.

A learning algorithm does not receive “the world.” It receives a representation of recorded cases and a numerical criterion. Before arrays or gradients, write a **learning contract**:

$C=(U,T,X,Y,A,\\ell ,P,\\Pi ,E)$.

Here:

- $U$ is the observational unit, such as a visit, device, person, or account;
- $T$ is the prediction time and horizon;
- $X$ is the information genuinely available at prediction time;
- $Y$ is the target, including how and when it is measured;
- $A$ is the set of allowed predictions or actions;
- $\\ell :A\\times Y\\to \\mathbb{R}$ is the loss assigned to an action and outcome;
- $P$ is a population or data-generating scope;
- $\\Pi$ is the protocol for fitting and selecting a rule;
- $E$ is the evaluation design and claim boundary.

The tuple is a specification, not a claim that $P$ is known. It prevents an optimizer from silently choosing the scientific question. If the prediction horizon changes from one hour to one year, or the observational unit changes from a transaction to a customer, the task changes even if the same table columns remain.

## Rules, losses, and risks

A prediction rule is a function $f\\colon X\\to A$. For a recorded case $(x_{i},y_{i})$, its loss is $\\ell (f(x_{i}),y_{i})$. The empirical risk on an index set $S$ is

$\\widehat{R}_{S}(f)=(1/\\lvert S\\rvert)\\sum_{i\\in S} \\ell (f(x_{i}),y_{i})$.

If a probability law for a future case $(X,Y)$ is part of the model, population risk is

$R_{P}(f)=\\mathbb{E}_{P}[\\ell (f(X),Y)]$.

The hat and subscript matter. $\\widehat{R}_{\\mathrm{train}}$, $\\widehat{R}_{validation}$, and $\\widehat{R}_{\\mathrm{test}}$ are different finite averages. $R_{P}$ is an expectation under a named distribution. Minimizing one does not make the others equal.

Loss translates error into value. Squared loss $(a-y)^{2}$ emphasizes large residuals. Absolute loss $\\lvert a-y\\rvert$ grows linearly. Misclassification loss $1[a\\ne y]$ treats all wrong labels alike. Cross-entropy evaluates probability assignments. These are not interchangeable cosmetic choices; they encode different actions and penalties.

### Worked derivation: the best constant under squared loss

Given training targets $y_{1},\\ldots ,y_{n}$, consider constant predictions $f_{c}(x)=c$. Their mean squared loss is

$Q(c)=(1/n)\\sum_{i}(c-y_{i})^{2}$.

Expand around the sample mean $\\overline{y}=(1/n)\\sum_{i} y_{i}$:

$c-y_{i}=(c-\\overline{y})+(\\overline{y}-y_{i})$.

Therefore

$\\sum_{i}(c-y_{i})^{2} = n(c-\\overline{y})^{2} + 2(c-\\overline{y})\\sum_{i}(\\overline{y}-y_{i}) + \\sum_{i}(\\overline{y}-y_{i})^{2}$.

The middle sum is zero, so

$Q(c)=(c-\\overline{y})^{2} + (1/n)\\sum_{i}(y_{i}-\\overline{y})^{2}$.

The second term does not depend on $c$; the unique minimizer is $c=\\overline{y}$. This completion-of-squares proof does not require calculus. It also shows how much worse any other constant is: exactly $(c-\\overline{y})^{2}$ in training MSE.

For targets $2,4,9$, the best constant is $5$. Its squared residuals are $9,1,16$, so MSE is $\\frac{26}{3}$. Predicting $6$ raises MSE by $(6-5)^{2}=1$, giving $\\frac{29}{3}$.

Under absolute loss, any sample median minimizes the sum of absolute deviations. Under zero-one loss for labels, a most frequent label is a constant minimizer. A baseline must match the declared loss.

## Why a baseline is part of the model

A flexible model can achieve a small loss while adding no useful information. Compare it with at least one rule available under the same information and evaluation protocol:

- training-target mean or median fitted using training data only;
- last observed value for an ordered process, when available at prediction time;
- a simple linear or seasonal rule;
- an operational incumbent, when its information and costs are documented.

If preprocessing is fitted on all rows but the model is fitted only on training rows, the baseline comparison is contaminated. Every learned quantity—including means, scales, imputations, vocabularies, feature selection, thresholds, and early-stopping time—belongs inside the fitting protocol.

### Worked timeline audit

Suppose each row is a hospital visit. The goal is to predict readmission within 30 days at discharge. Age, diagnoses recorded before discharge, and discharge disposition may be admissible. A billing code finalized two weeks later is not available at the prediction time even if it is stored in the same database. Including it creates temporal leakage.

Now suppose one person can have several visits. A random row split can put one person's history in training and another visit in testing. Whether this is leakage depends on the deployment unit and intended use, but it creates dependence and can make the test easier than prediction for unseen people. The contract must state whether deployment predicts new visits for known people or entirely new people, then split at the corresponding unit.

## Training, validation, and test roles

The training set determines fitted parameters. The validation set informs choices such as architecture, penalty, step size, or stopping epoch. The test set is reserved for a final evaluation after those choices are frozen.

This separation is about information flow, not file names. Looking at test results, changing a hyperparameter, and rerunning makes the test part of selection. Repeated adaptive inspection can overfit a test set even when no gradient passes through it.

A robust pipeline can be expressed as state transitions:

\`\`\`text
declare contract and split unit
freeze train / validation / test identities
fit preprocessing on train
for each declared candidate:
    fit parameters on transformed train
    evaluate candidate on transformed validation
select by the declared validation rule
refit only if the protocol said so in advance
evaluate once on transformed test
report baseline, uncertainty, subgroups, and scope
\`\`\`

The word “once” is an ideal discipline, not magic. If the test result changes the system, create a genuinely new evaluation phase or disclose that the previous test became development data.

## Units, scales, and representations

Feature values have meanings and units before they become array entries. Adding metres to seconds has no physical interpretation. Multiplying a feature by 1,000 changes gradient coordinates even when it represents the same quantity in metres instead of kilometres.

Standardization often uses

$z_{j}=(x_{j}-m_{j})/s_{j}$,

where $m_{j}$ and $s_{j}>0$ are fitted from training values. Store the inverse map $x_{j}=m_{j}+s_{j}z_{j}$. A standardized coefficient lives in standardized coordinates; translating it back requires the scale. If $s_{j}=0$, the feature is constant on training data and division is invalid. The pipeline needs a typed policy: remove it, keep a documented zero column, or revise the representation.

Categorical encodings also carry contracts. An integer code \`red=1, blue=2, green=3\` introduces an artificial order if treated numerically. One-hot encoding avoids that order but must define unknown categories and fit its vocabulary without test inspection.

## From finite evidence to a claim ladder

After an experiment, separate four statements:

1. **Computation:** this code returned these parameters and finite losses under the recorded seed and arithmetic.
2. **Finite empirical result:** this frozen rule had this loss on these named rows.
3. **Population inference:** under a sampling or shift model, the result supports a statement about a defined population, with uncertainty.
4. **Decision or causal value:** using the rule changes outcomes or utility under an intervention and decision process.

Each step needs additional assumptions. A low training objective does not establish generalization. A held-out association does not identify an intervention effect. A well-calibrated probability does not choose an action without costs and constraints.

### A counterexample to “more accurate means more useful”

Suppose 98 of 100 cases have label 0. The constant classifier $0$ has 98% accuracy. A second classifier that detects both positive cases and makes four false positives has 96% accuracy. Which is more useful depends on false-negative and false-positive costs, prevalence at deployment, and the action. Accuracy alone cannot decide.

## A minimal audit record

For every experiment, record:

- task version, unit, prediction time, horizon, and target definition;
- row identifiers or hashes for each split and the reason for grouping;
- feature availability times, units, missingness, and encoding rules;
- baseline and loss, including aggregation and weights;
- every train-fitted transformation;
- candidate and selection protocol;
- random seeds, software arithmetic, stopping rule, and failures;
- final finite results with denominators;
- distribution-shift, subgroup, causal, and decision nonclaims.

This record is not bureaucratic decoration. It defines the mathematical object whose gradient later chapters compute.

## Exercises

1. A system predicts delivery time at order placement. A feature records the actual loading-bay departure time. Is it admissible? State the temporal reason.
2. Prove directly that the mean minimizes squared error by differentiating $Q(c)$.
3. Find all absolute-loss constant minimizers for targets $1,3,7,10$.
4. A binary training set has 18 zeros and 7 ones. Find a constant classifier minimizing zero-one loss and its empirical risk.
5. Training targets have mean 12. A constant predictor 15 has MSE 34. What is the MSE of the mean predictor?
6. A preprocessing scale is fitted using train and test rows, but model weights use train rows only. Explain the information path and give the repair.
7. A test set is evaluated twenty times while choosing a learning rate. Which role is it actually playing, and what should happen next?
8. Feature $x$ is measured in kilometres and a model is $f(x)=wx+b$. Rewrite the same prediction using metres $x'=1000x$. Relate the new coefficient $w'$ to $w$.
9. Construct a three-row example where accuracy prefers one classifier but a loss charging 10 for a false negative and 1 for a false positive prefers another.
10. Write a learning contract for predicting whether a library loan will be returned within 21 days. Name at least one plausible leakage feature and one claim the finite test cannot establish.
11. A binary sample contains 30 positives and 70 negatives. Find the constant probability minimizing empirical log loss and compute its log loss without rounding. Why is the majority-class hard prediction an unsuitable log-loss baseline?
12. Prove the squared-loss decomposition $n^{-1}\\sum_{i}(y_{i}-c)^{2}=n^{-1}\\sum_{i}(y_{i}-\\overline{y})^{2}+(c-\\overline{y})^{2}$ without differentiation.
13. Three hospital visits from one patient are randomly split across training and test rows. Give a concrete information path that can make the test optimistic even when the patient identifier is removed, and state the repair.
14. A feature is available at prediction time but is changed by the action chosen from the prediction. Distinguish availability from causal suitability and state what the ordinary predictive test can establish.

## Full solutions

1. It is unavailable at order placement because it occurs later. Using it lets future information enter the feature map. It could be a target-related outcome in another task, but it is leakage for this prediction time.
2. $Q'(c)=(2/n)\\sum_{i}(c-y_{i})=2(c-\\overline{y})$, so the only stationary point is $c=\\overline{y}$. Since $Q''(c)=2>0$, it is the unique global minimizer. The proof assumes ordinary real-valued squared loss and at least one observation.
3. For an even sample, every point between the two middle order statistics minimizes total absolute deviation. The middle values are 3 and 7, so every $c\\in [3,7]$ is a minimizer.
4. Predict 0. It makes 7 errors among 25 rows, so empirical zero-one risk is $\\frac{7}{25}=0.28$. Predicting 1 makes 18 errors.
5. From the decomposition, $MSE(15)=MSE(12)+(15-12)^{2}$. Hence the mean predictor has MSE $34-9=25$.
6. Test values influence the fitted center or scale, which changes every transformed training value and therefore the learned rule. Fit the transformation on training rows only, store it, and apply the frozen map to validation and test rows. If the procedure is being redesigned after seeing results, obtain a new final evaluation set or disclose the adaptive use.
7. It is a validation or development set because its results affect selection. Freeze the chosen procedure and evaluate on untouched data drawn for the intended scope. The twenty inspected results may still be reported as development evidence, not as a single untouched test.
8. Since $x=x'/1000$, $wx+b=(w/1000)x'+b$. Thus $w'=w/1000$. The represented function is unchanged while the numerical coefficient and its gradient coordinate change.
9. Let true labels be $(1,0,0)$. Classifier A predicts $(0,0,0)$, with accuracy $\\frac{2}{3}$ and one false negative costing 10. Classifier B predicts $(1,1,1)$, with accuracy $\\frac{1}{3}$ and two false positives costing 2. Accuracy prefers A; the declared asymmetric loss prefers B.
10. One contract could use a loan as the unit, checkout time as prediction time, information from the item, borrower history available then, and a binary target measured 21 days later. The action might be a reminder policy and the loss must price the two error types. A later renewal or return timestamp is leakage. A held-out association cannot by itself prove that sending reminders causes more timely returns, nor that performance transfers to another library or future policy regime.
11. If the constant probability is $p$, empirical log loss is $-[30 \\log p+70 \\log\\left(1-p\\right)]/100$. Its derivative vanishes at $p=\\frac{30}{100}=0.3$, and convexity makes this the minimizer. The loss is $-[0.3 \\log\\left(0.3\\right)+0.7 \\log\\left(0.7\\right)]$. A hard prediction of zero assigns probability zero to every positive, producing infinite log loss rather than a useful finite baseline.
12. Write $y_{i}-c=(y_{i}-\\overline{y})+(\\overline{y}-c)$, square, and average. The cross term is $2(\\overline{y}-c)n^{-1}\\sum_{i}(y_{i}-\\overline{y})=0$. What remains is the variance around the mean plus $(\\overline{y}-c)^{2}$, proving both the identity and the minimizing property.
13. Other visits can encode the same person's stable physiology, treatment pattern, or site-specific measurements, so the trained rule can recognize a near-duplicate profile in test without an explicit ID. Assign all visits from one patient to a single split, fitting preprocessing inside the training groups, and evaluate on held-out patients if that is the intended unit of generalization.
14. Availability asks only whether the value exists before the decision. Causal suitability asks whether using it supports the effect or policy question after the action changes downstream variables and possibly future inputs. An ordinary frozen predictive test can estimate association-based prediction performance under its sampled policy regime; it cannot identify the effect of intervening with the model-driven action without a causal design and assumptions.

## Project checkpoint and forward link

Take one public or synthetic table and write a one-page contract plus an executable split ledger. Derive the matching constant baseline and identify every fitted transformation. The next chapter turns the frozen representation into arrays and linear maps; it does not reopen the task definition silently.
`;export{e as default};