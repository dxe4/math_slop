# Diagnostic practice: choose the next useful repair

These twelve short probes support learning; they are not new assessments, admission tests or mastery rules. Use only clusters whose prerequisites you have studied (or can demonstrate from prior experience). Before preparation, use the five unscored readiness prompts in [Preparation](./00_preparation.md#stable-computation-and-a-readiness-check); later probes are not a baseline measure of whole-course knowledge. An unfamiliar topic is a reason to defer, not a failed learner.

Try one probe with its repair covered. Write your reasoning, units and confidence. If you are stuck, follow **error → existing explanation → worked operation → fresh retest**. An instructor or tutor should describe the observed reasoning, identify the first consequential error, help repair it and then ask the fresh check. Record help honestly; a correct answer after seeing a repair is assisted practice. Revisit a fresh problem before claiming independence.

The answered repair blocks are public self-study references, visibly labelled below. They are excluded from ordinary tutor retrieval and the learner upload by the existing `tutor-reference` boundaries. Ask explicitly to consult a repair after attempting its probe. These boundaries control tutoring, not secrecy: no production assessment keys or unreleased transfer forms appear here. Fresh retest prompts remain available without the answers. The scheduling sidecar is `evaluation/practice_map.json`; no scores or learner-state fields are added.

To see a practice repair, open its labelled reference in this source or the self-study site/PDF when published. The existing tutor solution API has no diagnostic or retrieval-card IDs; a tutor should direct you to the reference and record assistance, not invent a solution call or treat a viewed repair as independent work.

## Conditioning and reference populations

Prerequisites: L00 for the table operation; L01 for transfer of evidence. Allow 6–10 minutes per probe including a repair.

### Diagnostic 01 {#diagnostic-01}

In an original fictional inspection table, 12 damaged parcels trigger an alert and 8 do not; 18 intact parcels trigger an alert and 162 do not. Among alerted parcels, what fraction are damaged? A colleague divides 12 by 20. State what that calculation answers.

<!-- tutor-reference:start -->
#### Repair 01

Self-study answer. **Error:** conditioning on damage instead of the alert. **Explanation:** [a joint table and two conditionals](./appendix-01_probability.md#worked-example-a-joint-table-and-two-conditionals). **Worked operation:** restrict to the alert column first: 12/(12+18)=0.4. The colleague computed P(alert | damage)=12/20=0.6. Same numerator, different reference population.
<!-- tutor-reference:end -->

**Fresh retest:** a different inspection has 6 alerted damaged parcels, 4 nonalerted damaged parcels and 24 alerted intact parcels. Find damage given alert and explain why the nonalerted count is absent from its denominator.

### Diagnostic 02 {#diagnostic-02}

Two sites share P(alert | fault)=0.8 and P(alert | no fault)=0.1. Fault prevalence is 0.05 at site East and 0.25 at site West. Can P(fault | alert) be transported unchanged? Explain before calculating.

<!-- tutor-reference:start -->
#### Repair 02

Self-study answer. **Error:** transporting a posterior when the reference population changes. **Explanation:** [population transfer](./01_bayes.md#population-transfer-and-assumptions-hidden-by-notation). **Worked operation:** East has alert mass .8×.05+.1×.95=.135 and posterior .04/.135=8/27; West has posterior .20/(.20+.075)=8/11. Conditional alert rates alone do not fix a posterior.
<!-- tutor-reference:end -->

**Fresh retest:** compute fault given alert at a third site with prevalence 0.10. Name one assumption you would investigate before reusing either conditional alert rate.

## Density, probability and units

Prerequisites: L00 and the probability bridge for Diagnostic 03; L04 for Diagnostic 04.

### Diagnostic 03 {#diagnostic-03}

A continuous waiting time is uniform between 0 and 0.25 hours. Its density is 4 per hour. Is that invalid because four exceeds one? Give the probability of a wait shorter than 0.10 hours and distinguish a point from an interval.

<!-- tutor-reference:start -->
#### Repair 03

Self-study answer. **Error:** interpreting density height as probability mass. **Explanation:** [mass, density and normalisation](./appendix-01_probability.md#mass-density-support-and-normalisation). **Worked operation:** integrate over width: 4 per hour × .10 hours=.4. Total area is 4×.25=1; any single exact waiting time has probability zero in this continuous model.
<!-- tutor-reference:end -->

**Fresh retest:** under the same model, find P(0.15 < wait < 0.20 hours). Explain how your calculation has no units even though the density does.

### Diagnostic 04 {#diagnostic-04}

An incident rate is Gamma(shape 3, **rate** 2 hours), so its mean is 1.5 incidents/hour. You express incidents per minute. What happens to the random rate and to the Gamma rate parameter? A proposed conversion divides both by 60.

<!-- tutor-reference:start -->
#### Repair 04

Self-study answer. **Error:** transforming the rate variable and its inverse-scale parameter in the same direction. **Explanation:** [hours, minutes, rate and scale](./04_continuous.md#hours-minutes-rate-and-scale). **Worked operation:** lambda_min=lambda_hour/60, hence the Gamma rate is 120 minutes, shape remains 3 and mean is .025 incidents/minute. Exposure times rate is invariant: 2 hours ×1.5 equals 120 minutes ×.025.
<!-- tutor-reference:end -->

**Fresh retest:** convert Gamma(shape 4, rate 3 hours) to incidents/minute, then find the expected count during 30 minutes. State the shape/rate convention.

## Expectation, variance and shared uncertainty

Prerequisites: L00 and APP01 for Diagnostic 05; L03 for Diagnostic 06.

### Diagnostic 05

Two equally likely machine regimes have conditional means 2 and 8 units and conditional variance 1 unit squared each. A learner reports overall mean 5 and variance 1. Which missing component matters?

<!-- tutor-reference:start -->
#### Repair 05

Self-study answer. **Error:** retaining only within-regime variance. **Explanation:** [total expectation and total variance](./appendix-01_probability.md#deriving-total-expectation-and-total-variance). **Worked operation:** E(Y)=5; E Var(Y|regime)=1; Var E(Y|regime)=((2−5)^2+(8−5)^2)/2=9; total variance=10.
<!-- tutor-reference:end -->

**Fresh retest:** two equally likely regimes have means 1 and 5 and conditional variances 4 each. Find the marginal mean and variance; label both sources of variation.

### Diagnostic 06 {#diagnostic-06}

One shared unknown success probability has posterior Beta(3,2). You predict a pair of deliveries. Compare drawing one probability for the pair with drawing a fresh independent probability for each delivery. Which preserves the stated model?

<!-- tutor-reference:start -->
#### Repair 06

Self-study answer. **Error:** deleting shared uncertainty by redrawing within the pair. **Explanation:** [conditional and marginal independence](./03_prediction.md#conditional-independence-does-not-imply-marginal-independence). **Worked operation:** for one shared p, P(both succeed)=E(p²)=3×4/(5×6)=.4; independent redrawing gives E(p)²=.36. Their difference .04 is Var(p) and the covariance of the outcomes.
<!-- tutor-reference:end -->

**Fresh retest:** repeat for a shared Beta(2,2) probability and explain why matching each delivery's marginal success probability does not validate the joint prediction.

## Array axes and numerical error

Prerequisites: L00 and APP04 for Diagnostic 07; L05 for Diagnostic 08.

### Diagnostic 07 {#diagnostic-07}

A predictive array has shape `(4, 500, 6)`: chains, draws and six future deliveries. State the shape after summing over deliveries and the operation that estimates the mean batch count. Why is summing all axes wrong?

<!-- tutor-reference:start -->
#### Repair 07

Self-study answer. **Error:** mixing replicate and event axes. **Explanation:** [random streams and array axes](./appendix-04_numerics.md#random-streams-and-array-axes-carry-assumptions). **Worked operation:** `counts = y.sum(axis=2)` has shape `(4,500)`; `counts.mean()` estimates the expected count per six-delivery batch. An all-axis sum grows with the arbitrary number of simulation draws. Keep the chain axis for diagnostics before pooling summaries.
<!-- tutor-reference:end -->

**Fresh retest:** a `(3,800,10)` array contains delays for ten visits in each predictive replicate. Produce the shape and operation for the average delay per ten-visit group, retaining chain and draw axes.

### Diagnostic 08

An estimand has posterior standard deviation 6 minutes and effective sample size 900. Approximate its mean's Monte Carlo standard error. Would quadrupling effective sample size make the posterior standard deviation three minutes?

<!-- tutor-reference:start -->
#### Repair 08

Self-study answer. **Error:** confusing computational precision with uncertainty about the quantity. **Explanation:** [two uncertainties with different remedies](./05_monte_carlo.md#two-uncertainties-with-different-remedies). **Worked operation:** MCSE ≈6/sqrt(900)=.2 minutes under an appropriate effective-sample-size approximation. At ESS 3600 the MCSE is .1; the target posterior SD remains 6. Use estimand-specific ESS and diagnostics, not raw draw count.
<!-- tutor-reference:end -->

**Fresh retest:** posterior SD is 2 and ESS 400. What is the approximate MCSE, and what ESS would halve it? Give one reason this calculation alone cannot certify a sampler.

## Prior, likelihood and prediction

Prerequisites: L02 for Diagnostic 09; L03 for Diagnostic 10.

### Diagnostic 09

A fictional label scanner has prior Beta(4,3). Independent exchangeable checks give 7 successes and 2 failures. A learner proposes Beta(13,12) because nine checks were observed. Identify the likelihood powers before updating.

<!-- tutor-reference:start -->
#### Repair 09

Self-study answer. **Error:** adding trials to both shapes. **Explanation:** [specify the sampling assumptions](./02_beta_binomial.md#specify-the-sampling-assumptions). **Worked operation:** likelihood proportional to p^7(1−p)^2 multiplies prior p^3(1−p)^2, giving p^10(1−p)^4 and Beta(11,5). The trial count is not two new exponents.
<!-- tutor-reference:end -->

**Fresh retest:** start afresh with Beta(2,5) and observe 3 successes in 6 checks. Write both likelihood powers and both posterior shapes.

### Diagnostic 10

Before seeing new outcomes, you simulate p from a stated prior and then a count of on-time parcels conditional on p. After seeing observations, you repeat with the posterior. Name each prediction and describe one question the first can expose that posterior fitting might conceal.

<!-- tutor-reference:start -->
#### Repair 10

Self-study answer. **Error:** treating a parameter draw as an observed count or labelling every simulation posterior predictive. **Explanation:** [prior prediction](./03_prediction.md#prior-prediction-makes-assumptions-observable). **Worked operation:** sample p then K|p; use the prior for prior prediction and p|data for posterior prediction. Implausible prior mass on all parcels failing can expose an unsuitable prior/population assumption before data dominate it.
<!-- tutor-reference:end -->

**Fresh retest:** an analyst draws only p from its posterior and calls its 90% interval the prediction interval for the next 20-parcel count. Identify the missing operation and the incompatible units.

## Computation versus adequacy

Prerequisites: L06 for Diagnostic 11; L09 and L10 for Diagnostic 12. Defer these at baseline unless prior learning supports them.

### Diagnostic 11 {#diagnostic-11}

All reported R-hat values are 1.00 and estimand MCSE is small, but simulated groups rarely contain an extreme delay as large as the observed one. Can the model be declared adequate? Separate what each observation supports.

<!-- tutor-reference:start -->
#### Repair 11

Self-study answer. **Error:** promoting numerical diagnostics to a model-fit certificate. **Explanation:** [agreement, efficiency and precision](./06_hmc.md#read-agreement-efficiency-and-precision-separately). **Worked operation:** retain the numerical evidence, then compare a targeted maximum-delay discrepancy on observed and replicated groups. Investigate tail, grouping and observation assumptions. Passing diagnostics neither establishes adequacy nor proves exploration of every mode.
<!-- tutor-reference:end -->

**Fresh retest:** a sampler reports divergences while its predictive histogram looks plausible. What evidence must be repaired or qualified before trusting its tail probability?

### Diagnostic 12 {#diagnostic-12}

You promise performance at an unseen depot. A random row split leaves visits from every depot in both training and test sets. A narrow uncertainty interval is offered as proof that this validates the promise. Identify the target mismatch and propose a validation unit.

<!-- tutor-reference:start -->
#### Repair 12

Self-study answer. **Error:** evaluating future records from known groups while claiming unseen-group performance. **Explanation:** [match holdouts to deployment](./10_model_checking.md#match-holdouts-to-deployment). **Worked operation:** hold out whole depots; train transformations and model choices using training depots only; predict new effects instead of conditioning on the held-out depot's outcomes. Report group count and uncertainty.
<!-- tutor-reference:end -->

**Fresh retest:** the target changes to next month's visits at a known depot with observed history. What chronological split is suitable, and why is this no longer an unseen-depot test?
