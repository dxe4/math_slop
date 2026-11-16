# Advanced statistics for structured data

**Audience.** Analysts, scientists, and mathematically mature learners moving beyond iid complete Gaussian rows into designed, dependent, censored, multivariate, and spatial data.

**Goal.** Select and audit estimators whose weights, links, risk sets, covariance, smoothing, and validation match the mechanism that produced the data.

**Estimated time.** About 520 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Structures before machinery

**Milestone.** Define a population, frame, unit, estimand, selection mechanism, and strongest licensed claim before choosing an estimator.

- **Sampling and study design** — Connect target populations to observed units through sampling frames, assignment mechanisms, measurement plans, and bias audits.
  - [Statistics Before Formulas: Variation, Comparison, and Honest Questions](../statistics-first-encounter.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Survey sampling** — Estimate finite-population quantities using inclusion probabilities, stratification, clusters, weights, and nonresponse adjustments.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
- **Statistical inference** — Estimate parameters, quantify uncertainty, test hypotheses, and distinguish procedures from conclusions.
  - [Audit a Compartmental Epidemic Model](../recipe-epidemic-model-audit.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Exact Randomization: All Six Assignments](../../apps/atlas/index.html#/labs?lab=visual-lab-exact-randomization)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Regression and Generalised Linear Models](#/books/regression-and-generalised-linear-models)
  - [Checkpoints for Uncertainty, Design and Prediction](../recipe-model-audit-foundations-checkpoints.md)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
  - [Research Frontiers: A Two-Paper Seminar and Reproduction Project](#/courses/atlas-research-frontiers-advanced)

## Stage 2: Non-Gaussian responses and event histories

**Milestone.** Fit and criticize a binary, count, or event-time model while distinguishing odds, rates, hazards, risks, censoring, and causal scope.

- **Likelihood and estimation** — Compare parameter values through likelihood and study estimators using bias, variance, risk, information, and identifiability.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
- **Generalized linear models** — Relate conditional means to predictors for binary, count, and other exponential-family outcomes through link functions and likelihood.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Regression and Generalised Linear Models](#/books/regression-and-generalised-linear-models)
- **Survival and event-history analysis** — Model event times with censoring, hazards, survival functions, competing risks, and time-dependent information.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Kaplan–Meier Risk-Set Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier)

## Stage 3: Flexible and resistant inference

**Milestone.** Run a dependence-respecting rank, smoothing, or contamination analysis with tuning and multiplicity sensitivity visible.

- **Nonparametric statistics** — Estimate distributions and relationships with ranks, kernels, splines, and flexible procedures under weaker parametric assumptions.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
  - [Kaplan–Meier Risk-Set Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier)
- **Robust statistics** — Design estimators and diagnostics that degrade gracefully under outliers, contamination, heavy tails, and modest misspecification.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
- **Resampling methods** — Approximate sampling or assignment distributions with bootstrap, permutation, cross-validation, and design-respecting resamples.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Research Frontiers: A Two-Paper Seminar and Reproduction Project](#/courses/atlas-research-frontiers-advanced)

## Stage 4: Dependence geometry

**Milestone.** Model joint, temporal, or spatial covariance and validate across the variables, horizons, or distances required at deployment.

- **Multivariate statistics** — Study jointly varying measurements through covariance geometry, dimension reduction, discrimination, and multivariate uncertainty.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [Canonical correlation](../multivariate-statistics-canonical-correlation.md)
  - [High-dimensional covariance and shrinkage](../multivariate-statistics-high-dimensional-covariance-shrinkage.md)
  - [Hotelling's T-squared](../multivariate-statistics-hotellings-t-squared.md)
  - [Linear discriminant analysis](../multivariate-statistics-linear-discriminant-analysis.md)
  - [Mahalanobis distance](../multivariate-statistics-mahalanobis-distance.md)
  - [Mean vectors and covariance](../multivariate-statistics-mean-vectors-covariance.md)
  - [The multivariate normal](../multivariate-statistics-multivariate-normal.md)
  - [Principal components via the spectral theorem](../multivariate-statistics-principal-components.md)
  - [Multivariate regression and MANOVA](../multivariate-statistics-regression-manova.md)
  - [The Wishart distribution](../multivariate-statistics-wishart-distribution.md)
- **Time series analysis** — Analyze ordered observations using dependence, trends, seasonality, state-space models, spectra, forecasts, and backtesting.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
  - [Time Series](#/books/time-series)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
- **Spatial statistics** — Model location-indexed dependence, point patterns, areal data, geostatistical fields, and uncertainty in spatial prediction.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)

## Stage 5: Integrated uncertainty audit

**Milestone.** Defend the repeated experiment, asymptotic information unit, selection corrections, and claim ladder for one structured-data analysis.

- **Survey sampling** — Estimate finite-population quantities using inclusion probabilities, stratification, clusters, weights, and nonresponse adjustments.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
- **Generalized linear models** — Relate conditional means to predictors for binary, count, and other exponential-family outcomes through link functions and likelihood.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Regression and Generalised Linear Models](#/books/regression-and-generalised-linear-models)
- **Time series analysis** — Analyze ordered observations using dependence, trends, seasonality, state-space models, spectra, forecasts, and backtesting.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
  - [Time Series](#/books/time-series)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
- **Multivariate statistics** — Study jointly varying measurements through covariance geometry, dimension reduction, discrimination, and multivariate uncertainty.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [Canonical correlation](../multivariate-statistics-canonical-correlation.md)
  - [High-dimensional covariance and shrinkage](../multivariate-statistics-high-dimensional-covariance-shrinkage.md)
  - [Hotelling's T-squared](../multivariate-statistics-hotellings-t-squared.md)
  - [Linear discriminant analysis](../multivariate-statistics-linear-discriminant-analysis.md)
  - [Mahalanobis distance](../multivariate-statistics-mahalanobis-distance.md)
  - [Mean vectors and covariance](../multivariate-statistics-mean-vectors-covariance.md)
  - [The multivariate normal](../multivariate-statistics-multivariate-normal.md)
  - [Principal components via the spectral theorem](../multivariate-statistics-principal-components.md)
  - [Multivariate regression and MANOVA](../multivariate-statistics-regression-manova.md)
  - [The Wishart distribution](../multivariate-statistics-wishart-distribution.md)
- **Nonparametric statistics** — Estimate distributions and relationships with ranks, kernels, splines, and flexible procedures under weaker parametric assumptions.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)
  - [Kaplan–Meier Risk-Set Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier)
- **Survival and event-history analysis** — Model event times with censoring, hazards, survival functions, competing risks, and time-dependent information.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Kaplan–Meier Risk-Set Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier)
- **Spatial statistics** — Model location-indexed dependence, point patterns, areal data, geostatistical fields, and uncertainty in spatial prediction.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Dependence Across Variables, Time, and Space](../dependence-time-space-multivariate.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)

## Capstone

Deliver an accessible, reproducible structured-data study with design and censoring diagrams, a primary estimating equation or likelihood, exact benchmark calculations, dependence-preserving validation, robust sensitivity, multiplicity accounting, numerical fallback tables, and a claim that stops at the design boundary.
