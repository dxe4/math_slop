# Probability, statistics, and data science

**Audience.** Programmers, analysts, scientists, and mathematically curious learners who want principled data reasoning from first summaries through advanced models.

**Goal.** Move from honest description and study design through probability, frequentist and Bayesian inference, structured data, computation, and responsible learning.

**Estimated time.** About 720 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Data and design

**Milestone.** Define a population and estimand, audit a sampling mechanism, and produce an accessible distribution summary.

- **Descriptive statistics** — Describe distributions and relationships with transparent counts, centers, spreads, shapes, units, and resistant summaries.
  - [Statistics Before Formulas: Variation, Comparison, and Honest Questions](../statistics-first-encounter.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
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
- **Exploratory data analysis** — Use summaries, visualizations, transformations, and skeptical questions to discover data structure and flaws.
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)

## Stage 2: Randomness

**Milestone.** Specify a probability model and justify its independence and asymptotic assumptions.

- **Probability by counting** — Model equally likely finite outcomes using systematic counting and combinatorial structure.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Probability You Can Touch: Coins, Bags, and New Information](../probability-you-can-touch.md)
  - [Foundations Workshop: Eight Problems, Hints, and Fully Explained Answers](../../problems/atlas/foundations-workshop/index.md)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Mathematical Recreations: Play, Proof, and Construction](#/books/mathematical-recreations-reader)
  - [Checkpoints for Uncertainty, Design and Prediction](../recipe-model-audit-foundations-checkpoints.md)
  - [Build a First Model: Units, Balance and Uncertainty](#/courses/atlas-applied-modeling-entry)
- **Conditional probability** — Update probabilities after information, distinguish independence, and apply Bayes' rule.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Core Solved Exercise Bank](../../problems/atlas/proof-foundations/index.md)
  - [Probability You Can Touch: Coins, Bags, and New Information](../probability-you-can-touch.md)
  - [Bayesian Inference from Scratch: Learning by Reweighting Possibilities](../bayes-from-scratch.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
  - [A ciphertext and a posterior](../../apps/atlas/index.html#/labs?lab=visual-lab-perfect-secrecy)
  - [Cryptography](#/books/cryptography)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Random variables** — Map random outcomes to numerical quantities and study their cumulative and mass behavior.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
- **Probability distributions** — Use discrete and continuous distribution families to encode different random mechanisms.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [From Counting to Temperature: Entropy and the Partition Function](../entropy-partition-function.md)
  - [Measure and Lebesgue Integration: Size, Exceptions, and Safe Limits — Overview](#/courses/atlas-measure-lebesgue-integration)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
- **Expectation and variance** — Summarize center, spread, covariance, and long-run average using linear operators.
  - [Introduction to probability](#/courses/atlas-probability-models)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Probability limit theorems** — Explain stabilization of averages and emergence of Gaussian behavior through weak and strong laws and central limit theorems.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs)
  - [Introduction to Probability](#/books/introduction-to-probability)

## Stage 3: Estimation and testing

**Milestone.** Derive an estimator, calibrate uncertainty by theory or design, and distinguish effect size from testing evidence.

- **Likelihood and estimation** — Compare parameter values through likelihood and study estimators using bias, variance, risk, information, and identifiability.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
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
- **Hypothesis testing** — Design calibrated tests, interpret error rates and power, and distinguish tail probabilities from probabilities of hypotheses.
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Resampling methods** — Approximate sampling or assignment distributions with bootstrap, permutation, cross-validation, and design-respecting resamples.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Research Frontiers: A Two-Paper Seminar and Reproduction Project](#/courses/atlas-research-frontiers-advanced)
- **Experimental design** — Use randomization, blocking, factorial structure, blinding, replication, and power analysis to learn causal contrasts efficiently.
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Exact Randomization: All Six Assignments](../../apps/atlas/index.html#/labs?lab=visual-lab-exact-randomization)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Survey sampling** — Estimate finite-population quantities using inclusion probabilities, stratification, clusters, weights, and nonresponse adjustments.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)
  - [A Robust, Nonparametric Analysis Workflow](../recipe-robust-nonparametric-workflow.md)

## Stage 4: Regression and imperfect data

**Milestone.** Fit and criticize a conditional model under misspecification, influential data, and a declared missingness sensitivity.

- **Regression** — Model conditional relationships, estimate effects, inspect residuals, and manage bias-variance tradeoffs.
  - [Fit and Audit a Mathematical Model](../recipe-model-fit-audit.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [Fit and Audit an Exponential Model](../recipe-exponential-model-audit.md)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Numerical Cards for a Model Audit](../recipe-model-audit-numerical-cards.md)
  - [Grouped Prediction: New Devices and Known Devices](../recipe-model-audit-foundations-tasks.md)
  - [A Separate-Regime Model Check and Repair Guide](../recipe-model-audit-foundations-frozen-test.md)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Generalized linear models** — Relate conditional means to predictors for binary, count, and other exponential-family outcomes through link functions and likelihood.
  - [Advanced Statistics Before the Machinery](../advanced-statistics-first-encounter.md)
  - [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/courses/atlas-advanced-statistics-design-dependence)
  - [Advanced Statistical Inference: Designs, Likelihoods, and Dependence](#/books/advanced-statistical-inference-reference)
  - [Links, Hazards, and Event Data](../glm-survival-event-data.md)
  - [Regression and Generalised Linear Models](#/books/regression-and-generalised-linear-models)
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
- **Missing-data inference** — Reason about incomplete observations using missingness mechanisms, weighting, likelihood, multiple imputation, and sensitivity analysis.
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)

## Stage 5: Bayesian and simulation computation

**Milestone.** Build a generative model, validate computation against a benchmark, and report predictive and prior-sensitivity checks.

- **Bayesian inference** — Combine prior models and likelihoods into posterior distributions and predictive decisions.
  - [Regularize and Audit an Inverse Problem](../recipe-regularized-inverse-problems.md)
  - [Bayesian Inference from Scratch: Learning by Reweighting Possibilities](../bayes-from-scratch.md)
  - [Bayesian Modelling and Criticism](#/books/computational-bayesian-modeling)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [From a Bayesian model to a prediction](../bayesian-models-prediction-criticism.md)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
- **Monte Carlo methods** — Approximate expectations and probabilities by random simulation while quantifying computational error, dependence, and variance reduction.
  - [Bayesian Modelling and Criticism](#/books/computational-bayesian-modeling)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
- **Stochastic processes** — Specify random evolution indexed by time or space through finite-dimensional laws, dependence structure, and path properties.
  - [Random Walks from Coins: Simulation, Spread, and First Passage](../random-walks-from-coins.md)
  - [Chance Before Formulas: A First Map of Randomness](../chance-before-formulas.md)
  - [Probability with proofs](#/courses/atlas-probability-processes-standard)
  - [Stochastic Processes: States, Arrivals, Paths, and Fair Games](#/books/stochastic-processes-paths)
  - [Model and Audit a Random Process](../recipe-random-process-modeling-simulation.md)
  - [Program Random Processes: Seeds, Chains, Arrivals, and Couplings](#/courses/atlas-program-random-processes)
  - [Markov Mixing & Coupling Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-markov-coupling)
  - [Time Series](#/books/time-series)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
- **Bayesian computation** — Approximate complex posterior distributions with Markov chain Monte Carlo, sequential, and variational methods plus convergence diagnostics.
  - [Bayesian Modelling and Criticism](#/books/computational-bayesian-modeling)
- **Hierarchical and multilevel models** — Model variation across related units through shared population distributions, partial pooling, latent effects, and structured dependence.
  - [Bayesian Modelling and Criticism](#/books/computational-bayesian-modeling)
  - [From a Bayesian model to a prediction](../bayesian-models-prediction-criticism.md)

## Stage 6: Structured observations

**Milestone.** Respect at least one non-independent data structure and state exactly what the design identifies.

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
- **Probabilistic graphical models** — Represent conditional independence and structured distributions with directed or undirected graphs.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Probabilistic Graphical Models](#/books/probabilistic-graphical-models)
- **Causal inference** — Formalize interventions, confounding, counterfactuals, identification, and experimental or observational evidence.
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)

## Stage 7: Generalizing responsibly

**Milestone.** Evaluate generalization with an uncontaminated validation design and a model card.

- **Statistical learning** — Analyze prediction, empirical risk, model selection, regularization, kernels, and generalization.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)
- **Optimization for learning** — Train models using stochastic gradients, momentum, regularization, constraints, and modern first-order methods.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)
- **Learning theory** — Prove when learning generalizes using capacity, concentration, online regret, and computational constraints.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)

## Capstone

Answer a consequential public-data question with a reproducible design audit, frequentist or Bayesian analysis, computation checks, accessible evidence tables, sensitivity analysis, and claim ladder.
