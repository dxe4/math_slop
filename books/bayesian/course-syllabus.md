# Course syllabus

**Bayesian Inference: From Evidence to Decisions** is the primary Bayesian text at L2–L3. The twelve-week core below is the **short route**: 6–8 hours each week, 72–96 hours plus preparation. The twenty-four-week extended route allows 8–10 hours each week, 192–240 hours. These are study estimates; unfamiliar programming, slow model compilation and substantial project revisions may require more time.

The complete course contains thirteen core chapters, four mathematical appendices, sixteen advanced readings, three cases and thirty-two labs. Start with the preparation below, then choose the short route or the extended route. Advanced readings state their extra mathematical dependencies and can be selected by topic.

## What you will be able to do

By the end, you should be able to define an inferential or decision target, express a generative model, justify a prior through its predictions, calculate simple posteriors analytically, approximate more complex posteriors, investigate computational failures, criticise model predictions, compare models for an appropriate held-out target, and communicate a decision with its assumptions and limitations.

| Outcome | Demonstration | Where assessed |
|---|---|---|
| Distinguish prior, likelihood, posterior, prediction | Update tables and verbal interpretations | Weeks 1–3; midcourse Q1–2 |
| Derive and check exact inference | Beta, gamma and normal posteriors | Weeks 2 and 4; numerical labs |
| Quantify computational error | MCSE, ESS and independent analytic targets | Weeks 5–6; midcourse Q3–4 |
| Specify regression and group structure | Gaussian, logistic and hierarchical models | Weeks 7–9 |
| Criticise and validate predictions | Targeted discrepancies and holdout design | Weeks 10–11; capstone |
| Connect uncertainty with an action | Expected loss, utility and sensitivity | Weeks 3 and 12; capstone |

## Preparation and tools

You need elementary algebra, basic probability, and enough Python to use arrays and functions. [Chapter 0](./00_preparation.md) provides a diagnostic and remediation. Integrals are explained as continuous weighted sums; optional matrix formulas add depth without being required for every lab. The course uses Python 3.12 and a locked NumPy/SciPy/PyMC/ArviZ environment. Follow the installation instructions before starting.

No previous Bayesian course is required. If programming is new, first complete an introductory Python course: the preparation lesson is a bridge, not a replacement for learning to program. For probability preparation, read [Introduction to Probability](#/books/introduction-to-probability); readers ready for proofs can instead use [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs). [Statistics with R](#/books/statistics-with-r) supplies the introductory statistical concepts; its R syntax is optional because this course uses Python.

## Twelve-week core route

This is the short route through the primary Bayesian text. The preparation chapter can be completed before the twelve teaching weeks.

| Week | Read | Lab | Submit |
|---|---|---|---|
| 0, optional | [Preparation](./00_preparation.md) | 00: simulation | Readiness answers |
| 1 | [Bayesian updating](./01_bayes.md) | 01: finite hypotheses | Update table and evidence assumptions |
| 2 | [Beta-binomial inference](./02_beta_binomial.md) | 02: grid and exact answer | Derivation and interval interpretation |
| 3 | [Prediction and decisions](./03_prediction.md) | 03: predictive simulation | Prior comparison and loss table |
| 4 | [Continuous models](./04_continuous.md) | 04: rates and means | Units and conjugate derivations |
| 5 | [Monte Carlo](./05_monte_carlo.md) | 05: Metropolis | Proposal-scale investigation |
| 6 | [HMC and diagnostics](./06_hmc.md) | 06: NUTS and exact reference | Diagnostic memo; midcourse assessment |
| 7 | [Regression](./07_regression.md) | 07: waiting times | Predictive intervals; capstone proposal |
| 8 | [Generalised linear models](./08_glm.md) | 08: completion | Response-scale interpretation |
| 9 | [Hierarchical models](./09_hierarchical.md) | 09: partial pooling | Existing/new-group predictions; project model |
| 10 | [Model checking](./10_model_checking.md) | 10: PPC and LOO | Validation design; project critique |
| 11 | [Robustness and calibration](./11_robustness.md) | 11: sensitivity and SBC | Sensitivity table; project draft |
| 12 | [Decisions](./12_decisions.md) | 12: capstone analysis | Reproducible report and decision memo |

For the capstone and case projects use **attempt → save plan → consult reference → revise**. Save the target, information available, proposed model, priors and evaluation split before opening worked code, executed notebooks or reports. In week 12, this project order takes precedence over the routine lab-first sequence.

Each week: predict an answer before reading; read the selected sections below actively; run the lab unchanged once; modify it to investigate its prompt; answer the three numbered exercises; compare with [worked solutions](./course-solutions.md); write one sentence about what changed in your understanding. Keep a log of modelling choices and corrections.

## Select core reading deliberately

Read each chapter’s opening, assumptions, lab, summary/retrieval prompts and original three exercises. The following selection identifies the main worked path and what may wait. Other sections remain available for clarification; do not skip a prerequisite needed to explain an assessed answer. Aim for about 2 hours active reading, 2 hours lab, 1–2 hours exercises and 1–2 hours retrieval/project work. In weeks 6 and 12, reserve additional assessment time or spread submission over a revision week.

| Week | Essential worked path | Defer to extended study |
|---|---|---|
| 0 | Conditioning, mixture moments, density versus mass, simulation arrays and readiness | Formal appendix derivations after the diagnostic identifies a gap |
| 1 | Factory alarm; three machine states; joint-probability derivation; odds; dependence and population transfer | Observation-protocol comparisons after the basic update is secure |
| 2 | Sampling assumptions; beta density and service posterior; summaries; sequential updating; grid masses | Boundary/skewness example and transformed credible sets |
| 3 | Predictive integral and beta-binomial; both layers of variation; prior prediction; expected loss and reserve crew | Detailed variance proof and several-batch forecasting |
| 4 | Gamma-Poisson derivation and exposure example; instrument measurements; precision and predictive intervals | Unknown-scale derivation, unequal precision and Jacobians; marked extended paragraphs |
| 5 | Two uncertainties; MCSE effort example; Markov chains; residence times; dependence; proposal-scale failure | Importance-sampling derivation and weighted-draw example |
| 6 | Energy/leapfrog mechanism; warmup; generative model; diagnostics; exact-reference comparison and debugging | Hand integration arithmetic, transformed-density derivation and funnel geometry |
| 7 | Generative regression; prior units; joint draws; predictive targets; residual failure and domain | Analytic matrix posterior and correlated-coefficient worked calculation |
| 8 | Generative likelihood; prior predictions; odds and probability differences; separation; exposure; causal limits | Algebraic separation analysis and richer count-mixture derivations |
| 9 | Hierarchy; prior predictions; shrinkage example; exchangeability; reparameterisation; existing/new groups | Unknown-hyperparameter variance derivation and detailed identifiability analysis |
| 10 | Four checks; discrepancy example; predictive target; exact LOO example; paired uncertainty; deployment splits | Importance-ratio derivation and predictive averaging |
| 11 | Influence; Student-t example; observation process and selection example; SBC and its limits | Detailed score derivation and rank-variance calculation |
| 12 | Capstone action; expected versus realised value; population/utility sensitivity; information-value example; reproducibility | General EVSI computation and expanded opportunity-loss derivation |

The [52 supplemental questions](./exercises-questions.md) (`[extra.0.1](./exercises-questions.md#extra.0.1)`–`[extra.12.4](./exercises-questions.md#extra.12.4)`, four per lesson) are optional on this route. Choose one when a mistake reveals a gap; do not add all four to an already full week. Original exercises remain `0.1`–`12.3`, followed by `mid.Q1`–`mid.Q4` and `capstone`. Browser progress still tracks the original thirteen units; optional practice does not block the tutor’s core route.

## Twenty-four-week extended route {#twenty-four-week-extended-route}

This route includes all expanded core sections, all 70 added questions, the six bridges and both cases. Mathematical appendices are usable teaching texts, but one week cannot teach calculus and linear algebra from scratch. If their worked examples are unfamiliar, add preparation weeks before proceeding. Revisit them at the point of use.

| Week(s) | Reading and prerequisites | Computation and submitted evidence |
|---|---|---|
| 1 | [Preparation](./00_preparation.md), [probability](./appendix-01_probability.md), first [numerical examples](./appendix-04_numerics.md) | Lab 00; 0.1–0.3 and [extra.0.1](./exercises-questions.md#extra.0.1), [extra.0.2](./exercises-questions.md#extra.0.2), [extra.0.3](./exercises-questions.md#extra.0.3), [extra.0.4](./exercises-questions.md#extra.0.4); readiness corrections |
| 2 | [Calculus](./appendix-02_calculus.md), [linear algebra](./appendix-03_linear_algebra.md), finish numerics | Work the appendix examples; explain units, shapes and error; appendices add no counted assessments |
| 3–14 | Full chapters 1–12, one per week, following the core table | Labs 01–12; three original plus four supplemental questions each; midcourse in week 8, capstone in week 14 |
| 15 | [A01: approximation](./adv-01_approximation.md); L05/06/07, calculus and linear algebra | Lab 13; [adv.approximation.1](./exercises-questions.md#adv.approximation.1), [adv.approximation.2](./exercises-questions.md#adv.approximation.2), [adv.approximation.3](./exercises-questions.md#adv.approximation.3); compare posterior features, not just optimisation |
| 16 | [A02: evidence and averaging](./adv-02_model_evidence.md); L04/10/12, integration | Lab 14; [adv.model_evidence.1](./exercises-questions.md#adv.model_evidence.1), [adv.model_evidence.2](./exercises-questions.md#adv.model_evidence.2), [adv.model_evidence.3](./exercises-questions.md#adv.model_evidence.3); prior-width sensitivity |
| 17 | [A03: observation process](./adv-03_observation_process.md); L04/08/11, conditioning/integration | Lab 15; [adv.observation_process.1](./exercises-questions.md#adv.observation_process.1), [adv.observation_process.2](./exercises-questions.md#adv.observation_process.2), [adv.observation_process.3](./exercises-questions.md#adv.observation_process.3); separate identified and sensitivity quantities |
| 18 | [A04: causal identification](./adv-04_causal.md); L08/10/12, conditioning | Lab 16; [adv.causal.1](./exercises-questions.md#adv.causal.1), [adv.causal.2](./exercises-questions.md#adv.causal.2), [adv.causal.3](./exercises-questions.md#adv.causal.3); state the estimand and identification assumptions |
| 19 | [A05: dependent data](./adv-05_time_series.md); L04/07/10, covariance | Lab 17; [adv.time_series.1](./exercises-questions.md#adv.time_series.1), [adv.time_series.2](./exercises-questions.md#adv.time_series.2), [adv.time_series.3](./exercises-questions.md#adv.time_series.3); chronological forecasts and validation |
| 20 | [A06: Gaussian processes](./adv-06_gaussian_processes.md); L07/10, matrix conditioning/numerics | Lab 18; [adv.gaussian_processes.1](./exercises-questions.md#adv.gaussian_processes.1), [adv.gaussian_processes.2](./exercises-questions.md#adv.gaussian_processes.2), [adv.gaussian_processes.3](./exercises-questions.md#adv.gaussian_processes.3); latent versus noisy predictions |
| 21–22 | [C01: penguin mass](./case-01_penguins.md); L07/10/11 and A01/03 | Establish provenance, split and priors first; attempt analysis before lab 19/reference report; finish criticism, sensitivity and memo |
| 23–24 | [C02: sensor forecasts](./case-02_sensor_forecasting.md); L04/10 and A03/05 | Freeze the forecast target and temporal split; attempt before lab 20/reference report; finish sensitivity, report and cross-topic revision |

For full core weeks allow about 3 hours reading, 2 computation, 2–3 questions and 1–2 revision/project. Advanced coding problems or case revisions can exceed that allocation. Split an overloaded week rather than omitting checks. Recalling an earlier result before opening notes and explaining a new example after feedback are more useful progress measures than pages completed.

The [question bank](./exercises-questions.md) labels objectives, difficulty and task type. Its [worked bank](./exercises-solutions.md) and the case reports contain answers. The three cases, including optional continuation C03, are extended projects and add no items to the foundation’s 124-item assessment count. Case code and executed notebooks are worked references too. The full self-study website includes answers; only the designated learner upload bundle is answer-free.

## Assessment and feedback

Weekly submissions from weeks 1–12 contribute **40%**, equally weighted. Each has ten marks: three for conceptual explanation, three for derivation/calculation, and four for the computational or applied exercise plus lab interpretation. Weeks 0 and browser quizzes are ungraded. The [midcourse assessment](./course-assessment.md) contributes **20%**, and the [capstone](./course-capstone.md) contributes **40%**.

Suggested completion standard: at least 60% overall, at least 50% on both midcourse and capstone, and no unresolved critical capstone flaw (wrong target, data leakage presented as valid evaluation, or unsupported computation). These are course-design criteria, not university credit or accreditation. In self-study, use the rubrics to identify revisions; completion ticks in the browser do not certify mastery.

You may collaborate on interpretation and compare approaches. Write your own final explanation and disclose material assistance, including generated code. You remain responsible for checking assumptions, calculations, citations, and outputs. A correctly explained failed model can earn substantial credit; a polished chart with unsupported claims cannot.

Solutions are available because feedback is part of learning. Attempt the work first and use the solutions to correct your reasoning. In a graded class, an instructor can delay solution distribution without changing the public self-study edition.

## Routes and accessibility

The selected core route follows all twelve weeks; the full route follows the twenty-four-week schedule above. A mathematically confident reader may test out of preparation and complete weeks 1–4 faster while retaining their exercises. A theory-focused reader should derive each posterior before running code. A practice-focused reader should still complete exact calculations; they are the checks on later automation.

Lessons are available as Markdown and static HTML with print styling. Charts have surrounding explanations and machine-readable numerical results. Interactive controls have text labels and numeric output; the lesson text does not depend on interaction. Progress is stored only in your browser and is optional. The core site reads offline; software installation and external readings require network access. No accounts are needed for included material.

## Scope boundaries

The advanced chapters are scoped bridges with worked experiments, not exhaustive graduate treatments. They introduce approximation, evidence, observation mechanisms, causal identification, dependent data and Gaussian processes. They do not provide measure-theoretic probability, general asymptotic theory or a complete causal-inference curriculum. Appendix familiarity does not replace practice in mathematics or programming.

The [reference and continuation map](./course-reference.md) connects each topic to local readings and further study. The penguin case uses genuine public CC0 data with documented provenance; the service and sensor datasets are synthetic. Use the stated data licences, model assumptions and task-specific preparation when choosing a route.


## Optional continuation after prerequisites

This expansion leaves both original route tables and their required assessments unchanged. All ten new advanced questions are optional; C03 and practice are not scorebook items. The estimates below include each reading, lab and its new questions. They are planning allowances, not measured learner timings.

| Unit | Actual prerequisites | Content planning hours |
|---|---|---:|
| [A07: prior workflow](./adv-07_prior_workflow.md) | L01/02/03/05 | 4–6 |
| [A08: categorical conjugacy](./adv-08_categorical_conjugacy.md) | L02/03/04 and APP01 | 4–6 |
| [A09: multivariate hierarchy and computational repair](./adv-09_multivariate_hierarchy.md) | L04/06/07/09 and APP03/04 | 8–12 |
| [C03: omitted-site air quality](./case-03_air_quality.md) | A09, L10/11, A03/05 | 8–12, including 2–3 temporal-instruction hours |

Content totals 24–36 hours. The [diagnostic](./practice-diagnostic.md), [six retrieval cards](./practice-review_schedule.md) and [guided/scaffolded/independent analyses](./practice-analysis_progression.md) add 10–17 hours if all are additive: total 34–53 hours. A tentative six further weeks at about 6–9 hours/week is only a planning option after these prerequisites. Budget unfamiliar prerequisite bridges separately. If C03 replaces the independent instructional stage, count its case hours once; name the displaced activity and subtract it when estimating a personal route. The proposed 1/3/6-week card spacing is unvalidated.

A09 deliberately retains unsuccessful centered fits and the measured repair effort. Its notebook replays authenticated fit evidence; changing a bound input requires a separate expensive recording. Start C03 from its [answer-free worksheet](./case-03_air_quality_starter.md). Reference notebooks contain answers. C03 reports historical conditional predictions using observed weather and concurrent other-site outcomes, not forecasting, exposure or causal effects. Its four-model comparison retains substantial residual misfit, and operational adequacy is unestablished. The SC01 correction uses mixture medians, equal-tailed intervals and marginal log densities; empirical MAE/RMSE evaluate that median without claiming a finite-risk optimum. Final outcomes are now exposed, so new score-informed choices require fresh outer validation.

Evaluation protocols specify future human peer/accessibility review, a selected-core pilot and live tutor trials. No such study has been performed. Their public specifications and offline software tests are not learning, accessibility or tutor-quality results.

## Further advanced menu: seven bounded modules {#further-advanced-menu-seven-bounded-modules}

These additions are a flexible menu after the listed prerequisites, not extra required weeks inside either original route. All seven readings and worked labs are available; candidate review is pending. The 21 new questions are optional; they do not change the original assessment weights or 44 required attempts. A full additive pass is an estimated **40–54 hours**, excluding prerequisite repair, spread over a personally paced six-to-nine-week continuation. These are editorial estimates awaiting pilots.

| Module | Actual prerequisites | Planning hours including lab and questions |
|---|---|---:|
| [A10: nominal/ordinal regression](./adv-10_outcome_regression.md) | L06, L08, L10, A08 | 6–8 |
| [A11: study design and stopping](./adv-11_study_design.md) | L02, L03, L05, L12 | 5–7 |
| [A12: censored survival](./adv-12_survival.md) | L04, L08, L10, A03; integration | 6–8 |
| [A13: integrated GP hyperparameters](./adv-13_gp_hyperparameters.md) | A06, L05, Appendices 3–4 | 6–8 |
| [A14: predictive combinations](./adv-14_predictive_combination.md) | L07, L10, A02; L04 unknown-scale bridge | 5–7 |
| [A15: optimized variational inference](./adv-15_variational_fit.md) | A01, L04–L05, L07, Appendices 2–4 | 6–8 |
| [A16: splines and additive regression](./adv-16_splines.md) | L07, L10, Appendices 3–4; A06 helpful | 6–8 |

A10–A12 form a breadth menu of 17–23 hours; A13–A16 form a computational/nonlinear menu of 23–31 hours. A11 can follow core decisions directly. A13 follows A06 and A15 follows A01; numbering does not require every earlier advanced chapter. If A13 replaces a personally planned 6–8-hour optional GP investigation, remove those hours before adding A13's 6–8 hours. That substitution does not remove any original required exercise. Count an independent analysis once if it also serves as a continuation project; name the displaced activity in your plan.

For every project: **attempt → save plan → consult reference → revise**. A saved plan identifies the target, observation units, assumptions and information allowed in evaluation. Complete-book solutions, supplied lab code and executed notebooks are worked references. Distinguish an independent attempt from a revision helped by those references.


## Advanced readings by mathematical purpose

The A01–A16 identities stay fixed when a reading is selected from a different part. Read prerequisites before changing the order; topic grouping does not replace those dependencies.

### Approximation and evidence

- [A01: approximation](./adv-01_approximation.md) compares local, simulation and variational approximations.
- [A02: model evidence](./adv-02_model_evidence.md) integrates a likelihood against a specified prior.
- [A07: prior workflow](./adv-07_prior_workflow.md) uses predictive implications to choose and examine priors.
- [A14: predictive combination](./adv-14_predictive_combination.md) distinguishes predicting well from assigning model probabilities.
- [A15: optimised variational inference](./adv-15_variational_fit.md) fits an approximation and examines the uncertainty it can omit.

### Models for data

- [A03: observation process](./adv-03_observation_process.md) specifies how a latent quantity becomes a record.
- [A05: dependent data](./adv-05_time_series.md) respects chronological information.
- [A06: Gaussian processes](./adv-06_gaussian_processes.md) conditions finite Gaussian laws.
- [A08: categorical conjugacy](./adv-08_categorical_conjugacy.md) updates multivariate category probabilities.
- [A09: multivariate hierarchies](./adv-09_multivariate_hierarchy.md) separates within-group covariance and population variation.
- [A10: outcome regression](./adv-10_outcome_regression.md) matches likelihoods to data support and exposure.
- [A12: survival](./adv-12_survival.md) treats event times and censoring information separately.
- [A13: Gaussian-process hyperparameters](./adv-13_gp_hyperparameters.md) integrates uncertainty over covariance choices.
- [A16: splines](./adv-16_splines.md) builds flexible regression through a declared function basis.

### Causal and design

- [A04: causal identification](./adv-04_causal.md) states which intervention target the observation law identifies.
- [A11: study design](./adv-11_study_design.md) evaluates the information and decisions expected from a proposed study.

## Continue after the core

For a deeper treatment of simulation error and Markov algorithms, continue to [Monte Carlo and Markov Chain Computation](#/books/mcmc/01-probability-computation), starting with its shortest route if the immediate goal is posterior computation. For likelihood, risk, confidence procedures and the frequentist properties of Bayesian decisions, read [Principles of Statistical Inference](#/books/principles-statistical-inference). The advanced readings above can accompany either continuation when their stated prerequisites are met.
