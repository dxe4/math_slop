# Instructor and facilitator guide

This guide supports the selected twelve-week core and the full twenty-four-week extended route in the [syllabus](./course-syllabus.md). The second edition is expanded teaching material; estimated timing and learning effectiveness still need a pilot with your learners. Review the mathematics, examples, accessibility needs, and institutional assessment requirements before formal delivery.

## Facilitation pattern

Assign the chapter and a five-minute prediction prompt before class. A suggested 90-minute meeting uses 10 minutes for retrieval, 20 for a worked derivation, 20 for a pair investigation, 20 for a lab critique, and 20 for explanation and feedback. Schedule an additional 60–90-minute lab if the group is new to Python. Avoid turning every meeting into a walkthrough of code already supplied.

Ask learners to state what random quantity a plot represents. Ask which assumptions make its calculation valid. Ask what result would make them revise their model. Require a written explanation of a code change before running it; this makes debugging a form of reasoning instead of random modification.

## Weekly teaching notes

| Week | Opening activity | Likely misconception | Evidence of understanding |
|---|---|---|---|
| 0 | Predict variation across 100-trial batches | Density equals probability | Learner distinguishes height, area and mass |
| 1 | Draw 10,000 hypothetical items in an alarm table | Sensitivity equals posterior | Correct base-rate-weighted denominator |
| 2 | Compare two priors before revealing 14/20 | A parameter interval predicts individual outcomes | Learner names both distributions and their support |
| 3 | Vote on action before and after changing costs | 95% is a universal decision threshold | A loss table explains the changed action |
| 4 | Compare centres with equal counts and unequal exposure | Rate and scale are interchangeable | Correct parameter units and transformed predictions |
| 5 | Compare tiny and large Metropolis proposals | More acceptance always means better sampling | ESS/MCSE and traces support the comparison |
| 6 | Sort diagnostic cards into computation and model fit | R-hat proves truth | A plan addresses both geometry and prediction |
| 7 | Draw a mean interval and an individual interval | A tight line predicts precise visits | Learner adds residual noise to each posterior draw |
| 8 | Double odds from two baseline risks | Odds ratio equals relative risk or risk difference | Correct inverse-link calculations |
| 9 | Rank centres before showing group sizes | Shrinkage is arbitrary censorship of extremes | Learner explains weights and exchangeability |
| 10 | Compare a better LOO score with a failed PPC | Best of two means adequate | Separate relative and absolute critique |
| 11 | Contrast SBC with real-data predictions | Calibration establishes the real-world model | Learner names the data source of each check |
| 12 | Raise rollout cost without refitting | Action is a property of posterior alone | Correct utility and population sensitivity |

## Concrete discussion prompts

Weeks 1–3: “Which denominator would change if we inspected only suspicious items?” “Can two analysts agree on every probability and disagree on the action?” “What assumption lets yesterday's posterior become today's prior?”

Weeks 4–6: “What would stay invariant if exposure units changed?” “Which quantity's ESS do we need?” “What is the smallest simulated model that could reproduce this divergence?”

Weeks 7–9: “What is the population behind this average slope?” “How would you predict for a centre without observations?” “Which centres should not share the same population distribution?”

Weeks 10–12: “What observation is actually being left out?” “Could the model be calibrated on simulated data and wrong for our dataset?” “Which assumption is most capable of reversing this decision?”

## Project reference order

Use **attempt → save plan → consult reference → revise** for the capstone and all case routes. Collect the target, assumptions, priors and evaluation plan before learners open supplied code, executed notebooks or worked reports. Record assistance and assess the revised explanation against the unchanged rubric. L04’s unknown-scale/transform investigations and L08’s fitted count extensions are extended tasks; running a notebook that contains them does not silently add them to selected-core submissions.

## Marking and feedback

Use the [syllabus](./course-syllabus.md) weights, [exercise solutions](./course-solutions.md), [midcourse key](./course-assessment.md), and [capstone rubric](./course-capstone.md). For each weekly ten-mark submission, allocate three conceptual, three calculation, and four applied/lab marks. A correct result without assumptions or interpretation should lose relevant explanation marks. Give partial credit for a valid method with an arithmetic error; do not reward reproducible nonsense merely because the script runs.

Feedback should identify the misconception and a specific correction. Instead of “wrong interval,” write “this interval describes the mean parameter; simulate one new outcome for each draw to answer the customer's question.” Ask for a short corrected explanation rather than a complete resubmission when the problem is local. For a serious target or leakage error, require a revised analysis.

Use the browser's quizzes as ungraded retrieval practice. The completion button is a personal study aid; do not use it as proof that a student understands the material. In a classroom, choose when to release solutions and disclose the policy clearly.

## Remediation and extension

If conditional probability is weak, return to frequency tables before introducing density notation. If programming blocks progress, pair learners for array-shape inspection and provide the executed notebooks as a reference. If calculus is weak, approximate an integral with grid-cell areas, then show the analytic result. If learners know optimisation but not Bayesian inference, ask them to compare a point estimate with a decision using posterior tails.

For advanced learners, derive the normal regression posterior, implement exact leave-one-out before PSIS, compare centred/non-centred hierarchies, or simulate an additional-trial information-value calculation. Do not give extra credit only for adding complexity; require an explanation of what the extension answers.

## Replacing synthetic data with real observations

Keep the learning objective and reconsider the entire observation model. Establish provenance, permission, column definitions, measurement units, inclusion criteria, missingness, group identifiers, and timing. Define the target population and a realistic decision before fitting. Preserve an evaluation split matched to that target. Avoid sensitive personal records in student repositories; aggregated or openly licensed data often suffice.

Expect extra teaching time: real data introduce unknown mechanisms that the synthetic generator makes explicit. Do not treat failure to recover a clean effect as failure of the project. A careful account of identification limits can be the strongest result.

## Reproducibility and accessibility

Demonstrate a fresh-kernel run at the start and before the project deadline. Source scripts are authoritative; `scripts/build_notebooks.py` regenerates notebooks. Execute notebooks in the locked Python environment and inspect diagnostic outputs. The build requires Node for offline mathematical rendering, but reading the prebuilt site requires only a browser.

Provide text descriptions of visual activities, allow written alternatives to spoken discussion, and avoid assessing colour discrimination. Tables and SVG figures support zoom and print. Test the site with learners' assistive technologies; automated semantic checks do not establish universal accessibility.

## Pilot and maintenance plan

After the first cohort, collect anonymous reports of time spent and the points at which learners became stuck. Compare readiness results with later misconceptions. Review whether the 6–8-hour estimate is reasonable, whether capstone marks distinguish reasoning quality, and whether examples transfer beyond the synthetic case. Revise based on that evidence; do not claim an improvement from satisfaction scores alone.

For an erratum, record the file, equation or exercise, expected result, and minimal reproducer. Update the source, regenerate derived artefacts, run the affected checks, and describe any changed interpretation. When upgrading PyMC or ArviZ, re-execute all labs and notebooks and recheck diagnostics; a dependency update is not just a text edit.

## Second-edition assessment alignment

The original route retains 39 chapter exercises, four midcourse questions and one capstone with their stable IDs. The [supplemental question bank](./exercises-questions.md) adds exactly four optional problems per core lesson, with objective tags, difficulty and task type. The [instructor bank](./exercises-solutions.md) supplies worked answers and observable criteria; `exercises/catalogue.json` maintains two progressive hints per item and exact source-block references. The catalogue is answer-bearing, as are solution banks, this guide, the mixed midcourse document and numerical verification reports. Ordinary learner retrieval and answer-free exports must use the question bank and safe metadata only.

The expanded material is not an extra compulsory workload inside the original 6–8 hours per week. For the selected foundation route, choose a supplemental problem to remediate a particular gap or replace comparable ungraded practice. For the extended route, distribute derivations and computational/design tasks across the [twenty-four-week schedule](./course-syllabus.md#twenty-four-week-extended-route), preserving time for feedback and revision. Difficulty is an author judgement; timing and thresholds need a learner pilot. Do not count optional practice as missing required evidence in the original tutor route.

In this table, `extra.c.1–4` means the four distinct IDs `extra.c.1`, `extra.c.2`, `extra.c.3`, `extra.c.4`. Existing O1–O3 meanings remain intact; O4/O5 append the contracted depth objectives. Supplemental rows target both new objectives in every core lesson.

| Lesson / original IDs | Added IDs and objective alignment | Evidence to look for | Remediation and transfer check |
|---|---|---|---|
| L00 / 0.1–0.3 | [extra.0.1](./exercises-questions.md#extra.0.1), [extra.0.2](./exercises-questions.md#extra.0.2), [extra.0.3](./exercises-questions.md#extra.0.3), [extra.0.4](./exercises-questions.md#extra.0.4); L00.O4–O5, plus O1–O3 | Conditional denominators, variance components, batch axes and simulation error | Rebuild a two-way table and label each array axis; [probability appendix](./appendix-01_probability.md) and [numerics appendix](./appendix-04_numerics.md); then explain a new seed without changing the estimand |
| L01 / 1.1–1.3 | [extra.1.1](./exercises-questions.md#extra.1.1), [extra.1.2](./exercises-questions.md#extra.1.2), [extra.1.3](./exercises-questions.md#extra.1.3), [extra.1.4](./exercises-questions.md#extra.1.4); L01.O4–O5, plus O1–O3 | Odds with support conditions, sequential factors and population transfer | Return to a joint table in [chapter 1](./01_bayes.md); have the learner distinguish a second sensor from a duplicated report before calculating |
| L02 / 2.1–2.3 | [extra.2.1](./exercises-questions.md#extra.2.1), [extra.2.2](./exercises-questions.md#extra.2.2), [extra.2.3](./exercises-questions.md#extra.2.3), [extra.2.4](./exercises-questions.md#extra.2.4); L02.O4–O5, plus O1–O3 | Normalisation/moments, transformed intervals, unequal-cell quadrature, proper-prior sensitivity | Work the beta integral in [calculus](./appendix-02_calculus.md), then compare grid mean and tail separately; a good mean alone is insufficient |
| L03 / 3.1–3.3 | [extra.3.1](./exercises-questions.md#extra.3.1), [extra.3.2](./exercises-questions.md#extra.3.2), [extra.3.3](./exercises-questions.md#extra.3.3), [extra.3.4](./exercises-questions.md#extra.3.4); L03.O4–O5, plus O1–O3 | Shared-parameter covariance, predictive variance, observable elicitation and action averages | Draw a batch generative diagram from [chapter 3](./03_prediction.md); contrast one parameter per batch with one per trial, then change a cost without refitting |
| L04 / 4.1–4.3 | [extra.4.1](./exercises-questions.md#extra.4.1), [extra.4.2](./exercises-questions.md#extra.4.2), [extra.4.3](./exercises-questions.md#extra.4.3), [extra.4.4](./exercises-questions.md#extra.4.4); L04.O4–O5, plus O1–O3 | Exposure units, transformations, integrated scale and posterior propriety | Redo the same event prediction in two time units; [calculus appendix](./appendix-02_calculus.md); compare independent prior-times-likelihood quadrature with square completion |
| L05 / 5.1–5.3 | [extra.5.1](./exercises-questions.md#extra.5.1), [extra.5.2](./exercises-questions.md#extra.5.2), [extra.5.3](./exercises-questions.md#extra.5.3), [extra.5.4](./exercises-questions.md#extra.5.4); L05.O4–O5, plus O1–O3 | Estimand-specific MCSE, importance support and retained rejected states | Hand-enumerate a two-state transition in [chapter 5](./05_monte_carlo.md), then compare full/jump samples; do not remediate with acceptance-rate targets alone |
| L06 / 6.1–6.3 | [extra.6.1](./exercises-questions.md#extra.6.1), [extra.6.2](./exercises-questions.md#extra.6.2), [extra.6.3](./exercises-questions.md#extra.6.3), [extra.6.4](./exercises-questions.md#extra.6.4); L06.O4–O5, plus O1–O3 | Leapfrog updates, Jacobians and a fit's own exact-reference/predictive evidence | Trace one half/full/half update; use [numerics](./appendix-04_numerics.md); distinguish a bad target from bad exploration before proposing a refit |
| L07 / 7.1–7.3 | [extra.7.1](./exercises-questions.md#extra.7.1), [extra.7.2](./exercises-questions.md#extra.7.2), [extra.7.3](./exercises-questions.md#extra.7.3), [extra.7.4](./exercises-questions.md#extra.7.4); L07.O4–O5, plus O1–O3 | Joint covariance, mean/outcome predictions, transformed priors and extrapolation | Work a 2×2 covariance quadratic in [linear algebra](./appendix-03_linear_algebra.md); check draw-wise prediction invariance after scaling |
| L08 / 8.1–8.3 | [extra.8.1](./exercises-questions.md#extra.8.1), [extra.8.2](./exercises-questions.md#extra.8.2), [extra.8.3](./exercises-questions.md#extra.8.3), [extra.8.4](./exercises-questions.md#extra.8.4); L08.O4–O5, plus O1–O3 | Probability-scale standardisation, exposure, separation and identification | Evaluate an inverse link at two baselines in [chapter 8](./08_glm.md); specify an intervention and assignment story before causal language |
| L09 / 9.1–9.3 | [extra.9.1](./exercises-questions.md#extra.9.1), [extra.9.2](./exercises-questions.md#extra.9.2), [extra.9.3](./exercises-questions.md#extra.9.3), [extra.9.4](./exercises-questions.md#extra.9.4); L09.O4–O5, plus O1–O3 | Shrinkage variance, shared new-group effects, hyperprior sensitivity and coordinates | Label population/group/individual axes in [chapter 9](./09_hierarchical.md); compare same- and different-group covariance rather than just marginal intervals |
| L10 / 10.1–10.3 | [extra.10.1](./exercises-questions.md#extra.10.1), [extra.10.2](./exercises-questions.md#extra.10.2), [extra.10.3](./exercises-questions.md#extra.10.3), [extra.10.4](./exercises-questions.md#extra.10.4); L10.O4–O5, plus O1–O3 | Exact held-out mass, unstable weights, deployment split and paired uncertainty | Refit each small-data holdout in [chapter 10](./10_model_checking.md), then draw the boundary around information available at deployment |
| L11 / 11.1–11.3 | [extra.11.1](./exercises-questions.md#extra.11.1), [extra.11.2](./exercises-questions.md#extra.11.2), [extra.11.3](./exercises-questions.md#extra.11.3), [extra.11.4](./exercises-questions.md#extra.11.4); L11.O4–O5, plus O1–O3 | Score/scale distinction, selection denominators, unidentified missing outcomes and SBC limits | Compare recording protocols in [chapter 11](./11_robustness.md); vary an unlearned sensitivity parameter before interpreting its posterior |
| L12 / 12.1–12.3 | [extra.12.1](./exercises-questions.md#extra.12.1), [extra.12.2](./exercises-questions.md#extra.12.2), [extra.12.3](./exercises-questions.md#extra.12.3), [extra.12.4](./exercises-questions.md#extra.12.4); L12.O4–O5, plus O1–O3 | Target weighting, enumeration of information value, realised versus expected value, concise decisions | Rebuild the action table in [chapter 12](./12_decisions.md); label posterior and predictive quantities and write a fresh audience-facing memo |
| L06 milestone / mid.Q1–mid.Q4 | Original IDs unchanged; see [midcourse alignment](./course-assessment.md) | Written reasoning without programming; conditioning, prediction, MCSE and diagnosis | Rework the missed operation, then use the matched optional transfer question; do not substitute reading completion for evidence |
| L12 milestone / capstone | Original ID unchanged; L12.O1–O5 plus modelling/checking prerequisites | Whole analysis for the stated future population, utility, diagnostics, validation and reproducibility | Revise target/leakage failures first; use the [capstone rubric](./course-capstone.md) and distinguish conditional expected incremental value from realised consequences |

## Applying the richer marking guidance

Keep the formal 40% weekly, 20% midcourse and 40% capstone scheme. The original chapter keys now attach marking criteria within their single numbered paragraphs. Allocate the week's existing 3/3/4 marks to evidence in those criteria, rather than giving one mark per new sentence. Supplemental problems use the instructor bank's independent 0–3 formative scale. An optional derivation should not silently become a new passing requirement or replace a recorded attempt under another ID.

For mathematical work, separate model assumptions, derivation, evaluated calculation and interpretation. Give method credit when a learner makes one local arithmetic error and carries it consistently, while still judging the final interpretation. Equivalent parametrisations deserve full credit when translated correctly; a shape-rate/scale error changes the model and needs explicit repair. Accept quadrature or simulation when the problem permits it, with independent references and an error budget; a printed answer without supporting logic is not a derivation.

For coding work, require the actual code, intended array meanings, an independently justified target and evidence from the submitted run. The numeric bank distinguishes deterministic tolerances from probabilistic Monte Carlo screens. If a screen fails, ask the learner to diagnose discretisation, mixing, support or assumptions; do not encourage changing seeds or loosening tolerances until a desired result appears. Credit a documented failure and appropriate next step under the diagnosis criteria, while withholding successful-execution credit. Original 5.3 needs a full-versus-jump numerical demonstration; original 6.3 needs a changed-prior fit with its own MCSE and interval. The reference evidence in `artifacts/core_assessments_checks.json` is separate from the unchanged saved Lab 5/6 outputs.

For communication and design, there is often more than one defensible answer. Require a clear target population, units, assumptions, checkable calculations where given, uncertainty attached to the correct quantity and an action conditional on values. Accept an alternative proposal if its assumptions make it coherent and the learner states what evidence would distinguish it. Do not demand the reference wording. Do not award unsupported causal claims, data leakage or invented diagnostic outputs as stylistic alternatives.

Release hint 1 to redirect attention; hint 2 gives the next mathematical or computational structure. Invite a fresh attempt before revealing the worked answer, and record assistance honestly. A correct solution after feedback is evidence of repair, not an independent first attempt. A tutor's recorded judgement remains fallible feedback; resolve contested criteria through the learner's actual reasoning and instructor review, not by treating generated scores as ground truth.

## Advanced and case facilitation

The historical second-edition guide described a variant of `adv.model_evidence.1` that integrates the evidence for two specified Normal-prior models, retaining normalising constants and reporting prior model odds and posterior weights. The current [exercise](./exercises-questions.md#adv.model_evidence.1) instead compares a point null with a Normal-prior alternative. Treat these as distinct model comparisons; the historical description does not specify the two priors and should not be used to infer numerical answers for that variant.

Do not append all advanced work to the original weekly assessment. Keep the core grade weights and original IDs. For extended delivery, announce any separate project/bridge credit before teaching; the tutor treats all 49 advanced questions as optional. Use the two case weeks for an attempted analysis followed by revision against the reference report. Do not release case notebooks as a supposedly unanswered starter: they execute the reference analysis.

| Unit / bank IDs | Objective evidence and feedback | Prerequisite repair |
|---|---|---|
| A01 / [adv.approximation.1](./exercises-questions.md#adv.approximation.1), [adv.approximation.2](./exercises-questions.md#adv.approximation.2), [adv.approximation.3](./exercises-questions.md#adv.approximation.3) | A01.O1–O3: derive local/variational approximations; compare covariance and tails; diagnose family and optimisation error | L05/06/07; calculus Hessians and matrix covariance |
| A02 / [adv.model_evidence.1](./exercises-questions.md#adv.model_evidence.1), [adv.model_evidence.2](./exercises-questions.md#adv.model_evidence.2), [adv.model_evidence.3](./exercises-questions.md#adv.model_evidence.3) | A02.O1–O3: retain normalising constants; compute model weights; distinguish evidence, LOO and stacking | L04/10/12; integration and log-sum-exp |
| A03 / [adv.observation_process.1](./exercises-questions.md#adv.observation_process.1), [adv.observation_process.2](./exercises-questions.md#adv.observation_process.2), [adv.observation_process.3](./exercises-questions.md#adv.observation_process.3) | A03.O1–O3: integrate measurement error; propagate uncertainty; expose unlearned selection assumptions | L04/08/11; conditional distributions and likelihood support |
| A04 / [adv.causal.1](./exercises-questions.md#adv.causal.1), [adv.causal.2](./exercises-questions.md#adv.causal.2), [adv.causal.3](./exercises-questions.md#adv.causal.3) | A04.O1–O3: define intervention; justify adjustment; diagnose overlap or identification failure | L08/10/12; target weighting and causal graphs |
| A05 / [adv.time_series.1](./exercises-questions.md#adv.time_series.1), [adv.time_series.2](./exercises-questions.md#adv.time_series.2), [adv.time_series.3](./exercises-questions.md#adv.time_series.3) | A05.O1–O3: derive dependent moments; integrate trajectory uncertainty; prevent temporal leakage | L04/07/10; covariance and recursive simulation |
| A06 / [adv.gaussian_processes.1](./exercises-questions.md#adv.gaussian_processes.1), [adv.gaussian_processes.2](./exercises-questions.md#adv.gaussian_processes.2), [adv.gaussian_processes.3](./exercises-questions.md#adv.gaussian_processes.3) | A06.O1–O3: condition a joint Gaussian; solve stably; critique kernel/extrapolation | L07/10; linear algebra and numerical conditioning |
| C01 / uncounted project | [Penguin brief](./case-01_penguins.md), [worked report](./case-01_penguins_solution.md): provenance, eligibility, held-out year, model checks, sensitivity and restricted population claims | L07/10/11, A01/03; distinguish fixed noise assumptions from fitted uncertainty |
| C02 / uncounted project | [Sensor brief](./case-02_sensor_forecasting.md), [worked report](./case-02_sensor_forecasting_solution.md): chronology, initial-state likelihood, forecast horizons, rolling versus final validation and sensitivity | L04/10, A03/05; distinguish state/parameter/observation uncertainty |

Each advanced item has two protected hints and a worked 0–3 rubric in the maintained bank. Ask for an initial attempt, give one hint, then request a transfer explanation. Assess whether the assumptions support the conclusion even when code executes. Cases should be evaluated against their stated targets, checks, sensitivity and communication requirements; do not count them as new canonical assessment IDs or assume that a single seeded result validates a method.


## Expansion continuation facilitation

Keep the original 12/24-week schedules, IDs, grade weights and learner-state schema. The optional continuation takes 24–36 content hours plus 10–17 fully additive practice hours, or 34–53 planning hours after prerequisites. Count a substituted independent case once and budget missing prerequisite bridges separately. No workload, spacing or transfer-effectiveness claim has been validated with learners.

| Unit | Prerequisites and teaching focus | Optional evidence |
|---|---|---|
| A07 | L01/02/03/05; quantity, population, horizon, provenance and conflicting probability judgments | adv.prior_workflow.1–4; distinguish optimizer success from prior adequacy |
| A08 | L02/03/04 and APP01; joint simplex uncertainty, aggregation and types of zero | adv.categorical_conjugacy.1–3; distinguish predictive overdispersion from observed physical heterogeneity |
| A09 | L04/06/07/09 and APP03/04; covariance, shared new-group effects and equivalent coordinates | adv.multivariate_hierarchy.1–3; retain failed attempts and a diagnosis/intervention/reevaluation ledger |
| C03 | A09, L10/11, A03/05; learned stationary daily state, missing days, outcome-blind split and frozen comparison | C03.T1/T2/T3 are local teaching labels only; attempt the public starter before the protected report |

Use prerequisite-appropriate [diagnostic repairs](./practice-diagnostic.md), [retrieval cards](./practice-review_schedule.md) and [analysis stages](./practice-analysis_progression.md). Do not automatically award mastery for practice or reference reading. Record assistance and require a fresh explanation after feedback. Advanced worked examples and assessment givens are distinct. The four-member learner ZIP excludes keys; the separate instructor corpus and complete book contain answers and hints.

SC01 is a mandatory review topic: finite Monte Carlo concentration averages do not establish finite mixture moments. C03 inverts the averaged CDF for genuine predictive medians and equal-tailed intervals, uses the physical-density Jacobian, and reports empirical median MAE/RMSE in µg/m³ and marginal log density in nats at numerical µg/m³ units. No unqualified Bayes-optimality claim is warranted. The prediction/scoring amendment preceded final outcome access. Do not tune models or reporting using exposed final scores and then claim unseen validation. Material residual misfit, state/seasonal confounding and ten-site correlation uncertainty must remain visible.

The local evaluation materials supply four protocols, synthetic instruments and an offline harness for planning observations. Private forms, keys, participant records and a rater service are not supplied. A study of the selected core would not by itself establish performance on A07–A09/C03; keep those case outcomes and their target restrictions separate.


## Teaching the seven-module menu

Use the [further advanced menu](./course-syllabus.md#further-advanced-menu-seven-bounded-modules) after its actual prerequisites. Its 40–54 hours include reading, lab and questions; do not add the same project hours twice or silently expand the twelve-week core. A10–A12 need 17–23 planning hours; A13–A16 need 23–31. For example, replace a planned 6–8-hour optional GP investigation with A13's 6–8 hours, recording that displacement while retaining original required work. These timings are unpiloted.

Each new lesson has three optional items and two staged hints per item. The [companion question bank](./exercises-continuation_questions.md) is public; the [worked bank](./exercises-continuation_solutions.md) supplies item-specific four-mark rubrics (reasoning two, check/interpretation one, limitation one). Those four marks are local feedback criteria. The tutor's existing 0–3 formative score remains unchanged; instructors must explain any mapping rather than silently interpreting four as a valid tool score. Neither scale changes the 40/20/40 course grades or the 44 required attempts.

| Lesson | Require in the learner's explanation | Consequential criticism |
|---|---|---|
| A10 | Identified logits, ordered thresholds and response-scale contrasts | Category order alone cannot justify shared cumulative slopes |
| A11 | Frozen policy, distinct priors and independent path enumeration | A Bayesian success threshold need not control repeated-sampling error |
| A12 | Event-density versus survival factors and time units | Censored observations are not events; assess the censoring assumption |
| A13 | Mixture quantiles and one shared hyperparameter draw per curve | Integrated intervals need not be wider everywhere |
| A14 | Out-of-fold weight training before any outer outcome use | Report the actual loss to the quadratic model; weights are not truth probabilities |
| A15 | Optimizer traces, gradient checks and independent quadrature | Small gradients do not remove variational tail error; R-hat is not its certificate |
| A16 | Basis, proper nullspace priors and training-only centering | Additivity excludes interactions and the demonstrated predictor rejects extrapolation |

Before showing code, ask for a prediction under changed givens. Lab sources and executed notebooks are worked references and include calculations. A fresh explanation after feedback tests transfer; viewing a plot does not establish mastery. Default learner retrieval and the four-member upload ZIP include all seven lessons and prompts but exclude keys, staged hints and reference assets. The worked references do not establish learner transfer or tutor effectiveness; assess a fresh explanation under the stated task conditions.
