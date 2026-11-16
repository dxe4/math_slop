# Capstone · Should the service adopt design B?

Your task is to produce a reproducible Bayesian analysis and a decision memo for a fictional onboarding service. Use [experiment.csv](../../downloads/bayesian/data/experiment.csv) and its [data dictionary](../../downloads/bayesian/data/README.md). The data are synthetic, with randomised A/B assignments within eight centres. Do not use the generator's hidden parameters as evidence in your fit. You may inspect them after completing the analysis as an additional recovery check.

## Decision and estimand

The next 10,000 visits will be equally distributed across the **eight existing centres**. An additional completion is worth 5 utility units. Adopting B costs 1,000 utility units; keeping A has zero incremental utility. Assume these values are fixed for the primary analysis, then vary the rollout cost.

Estimate $\Delta=\frac18\sum_j(\theta_{jB}-\theta_{jA})$ and the posterior distribution of **conditional expected incremental value** $V(\theta)=50000\Delta-1000$. This is the expected value of future outcomes conditional on the completion probabilities; its posterior uncertainty is not the predictive distribution of realised rollout consequences. State the assumptions required to transfer training completion probabilities to future visits. This target is an absolute probability difference, not an odds ratio. Clearly separate inference, prediction, and the choice of action.

## Data contract

Each row is a centre-arm cell. `trials` and `successes` are training data. `holdout_trials` and `holdout_successes` describe an independently generated validation batch. Every success count must lie between zero and its trial count; every centre has both arms. Centre sizes differ, but the decision uses equal-centre weights.

Before revealing holdout outcomes, write your modelling and checking plan. For convenience both sets are in one local file; enforce the separation in your code. You may read the column names and planned holdout sizes when designing the analysis. Do not use holdout success counts to choose priors, tune models, or select the primary report. If you change the analysis after viewing them, disclose the change.

## Required work

1. Define the observation unit, population, estimand, actions, utility and assignment assumptions. Validate data ranges and counts.
2. Fit a transparent baseline: pooled beta-binomial arm rates. Explain what pooling assumes and what population contrast its estimate represents.
3. Fit a model that represents centre differences: independent centre-arm beta models or a justified hierarchical binomial/logistic model. Explain the pooling tradeoff and predict for the stated existing-centre target.
4. Specify proper priors and simulate observable implications before using outcomes. Use at least three defensible prior settings in the sensitivity analysis. Do not select a prior by the desired decision.
5. Verify computation. For conjugate models, compare Monte Carlo summaries with analytic moments and record numerical error. For MCMC, report chains, draws, R-hat, bulk/tail ESS, relevant MCSE, divergences and relevant geometry diagnostics.
6. Perform at least one targeted posterior predictive check and explain its limitations. Compare the primary model with the pooled baseline. Report held-out predictive scores or intervals only after freezing the analysis.
7. Calculate posterior improvement, 90% interval, probability of positive improvement, probability of positive conditional expected incremental value, its posterior expectation, expected opportunity losses, and EVPI under the stated risk-neutral utility. Explain why EVPI is not the value of a particular trial or perfect foreknowledge of random future outcomes. A realised-outcome extension must specify future arm allocation, shared centre effects and any dependence before simulating counts; it is not required for the primary expected-value action.
8. Change prior assumptions, population weights, and rollout cost. Identify which changes would reverse the action and which merely alter its strength.
9. Write a decision memo and provide all code, software versions, seeds, data provenance, and generated results needed to reproduce it.

## Deliverables and milestones

In week 7, submit a 300-word question and data plan. In week 9, submit the model equations, priors, and prior predictions. In week 10, submit the first fit and critique. In week 11, exchange a draft for review, including a reproducibility check. In week 12, submit a 1,500–2,500-word report, a maximum 250-word decision memo, and an executable notebook or script with no hidden manual steps.

Suggested report order: decision and target; data and assumptions; models and priors; computation; predictions and validation; decision and sensitivity; limitations; reproducibility. Figures must have captions, labelled axes, and units. Report useful precision rather than every available decimal.

## Rubric, 100 marks

| Criterion | Marks | Full-credit evidence |
|---|---:|---|
| Question, target and data | 15 | Correct equal-centre estimand, data validation, stated future population and assignment assumptions |
| Models and priors | 20 | Two clear model specifications, proper priors, observable prior implications, justified pooling choice |
| Computational reliability | 15 | Independent analytic checks or appropriate sampler diagnostics, numerical error tied to the estimand |
| Criticism and validation | 20 | Targeted posterior checks, appropriate holdout use, comparison with limitations |
| Decision and sensitivity | 20 | Correct utilities and expected-value versus realised-outcome distinction, uncertainty propagation, opportunity loss/EVPI, meaningful scenario changes |
| Communication and reproducibility | 10 | Clear memo, honest limitations, runnable code, seeds and environment |

Partial credit: a correct computation with an unexplained modelling choice earns at most half the marks for that criterion. A credible diagnosis of a failed model can earn high criticism marks if supported by evidence. A report using the wrong target or leaked validation outcomes must be revised before course completion; a high overall numerical score does not override those flaws.

## Extensions after the required work

Fit a hierarchical logistic model with centre intercepts and treatment effects. Investigate an unseen-centre target using group holdouts. Put a distribution on the value per completion. Estimate sample-information value for a fixed proposed additional sample. These are optional extensions, not prerequisites for a complete primary analysis.

The [reference solution](./course-capstone_solution.md) and Lab 12 are available after your attempt. The reference chooses a simple exact model so every decision quantity is easy to audit.
