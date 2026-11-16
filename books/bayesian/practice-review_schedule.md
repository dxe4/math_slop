# Retrieval practice after instruction

Use each card only after its prerequisites. Close the notes, answer its **three questions**, then explain your reasoning aloud or in writing. Check the labelled self-study reference only after the attempt; log whether you needed it. Work a fresh diagnostic retest after a consequential error. These are original practice questions, outside the production scorebook, and do not automatically establish mastery.

Revisit at **1, 3 and 6 weeks after first instruction**, not three arbitrary calendar weeks for everyone. The first-use weeks below refer to the unchanged 12-week core; on a slower route schedule relative to actual instruction. The intervals are a proposed pilot schedule, not a proven optimum. Record late and missed revisits as such. For a week-12 card, the final revisit falls after the selected-core pilot's week-16 measurement; do not move that measurement or count an unobserved revisit as completed.

| Card | First use after instruction | Prerequisites | Revisit offsets |
|---|---|---|---|
| retrieval.01 | week 1 | L00, L01 | +1, +3, +6 weeks |
| retrieval.02 | week 3 | L02, L03 | +1, +3, +6 weeks |
| retrieval.03 | week 4 | L04 | +1, +3, +6 weeks |
| retrieval.04 | week 6 | L05, L06 | +1, +3, +6 weeks |
| retrieval.05 | week 10 | L09, L10 | +1, +3, +6 weeks |
| retrieval.06 | week 12 | L11, L12 | +1, +3, +6 weeks |

Allow about 12 minutes per card attempt, plus remediation when needed. Record the date, card, three answers, first consequential error, explanation consulted, assistance and fresh-check result in a personal study note. Keep measurement forms separate: no pilot form-specific feedback until delayed measurement closes. Ordinary practice on these different examples continues.

## Retrieval 01

1. A positive sensor signal occurs in 9 faulty and 21 sound items. State the reference population and compute fault given a signal. What extra count would you need for signal given fault?
2. Someone forwards the same sensor report twice. What dependence assumption would be needed to multiply two likelihood ratios, and why is it doubtful here?
3. Explain how a different fault prevalence can change fault given a signal even with unchanged conditional signal probabilities.

<!-- tutor-reference:start -->
### Check 01

Self-study reference: (1) 9/30=.3 among signalled items; need total faulty items, including those not signalled. (2) Conditional independence given fault status is needed; duplicate transmission is one observation. (3) Bayes' denominator weights the two conditional signal rates by the new population proportions. Repair conditioning with [Diagnostic 01](./practice-diagnostic.md#diagnostic-01) and population transfer with [Diagnostic 02](./practice-diagnostic.md#diagnostic-02).
<!-- tutor-reference:end -->

## Retrieval 02

1. A shared unknown pass probability has posterior Beta(2,3). Construct a simulation for the number passing in the next five checks without naming a predictive distribution.
2. Why does replacing that probability with its posterior mean lose some predictive variation? Identify the missing source of variance.
3. In a fictional inspection decision, one action costs 6 units now and avoids a 20-unit loss if any check fails. Write the expected-loss comparison; do not choose solely because failure is more likely than success.

<!-- tutor-reference:start -->
### Check 02

Self-study reference: (1) draw one p per replicate, then five outcomes conditional on that p and sum, or draw their conditional count. (2) Total variance includes Var(E[K|p]); independent outcomes at fixed E[p] omit shared covariance. (3) Choose prevention when 20 P(any failure | data)>6 under the stipulated complete prevention and no other effects; explicitly state those utility assumptions. See [Diagnostic 06](./practice-diagnostic.md#diagnostic-06) and [inference to a decision](./03_prediction.md#from-inference-to-a-decision).
<!-- tutor-reference:end -->

## Retrieval 03

1. A rate is 0.2 events/hour. Change both rate and exposure units to minutes for a three-hour observation and show the invariant expected count.
2. Why is an interval for a population mean typically narrower than one for a new individual observation under the same model?
3. A continuous density has height 5 per metre across an interval of width 0.04 metres. Find its probability over that interval and identify the density's units.

<!-- tutor-reference:start -->
### Check 03

Self-study reference: (1) rate=1/300 events/minute, exposure=180 minutes, product=.6 events. (2) New observations add outcome variation as well as mean uncertainty; compare like credibility levels under the declared model. (3) Area=.2 and units cancel. See [Diagnostic 04](./practice-diagnostic.md#diagnostic-04), [mean versus reading](./04_continuous.md#an-interval-for-a-mean-is-not-an-interval-for-a-reading) and [Diagnostic 03](./practice-diagnostic.md#diagnostic-03).
<!-- tutor-reference:end -->

## Retrieval 04

1. Your posterior SD stays near 4 as effective sample size rises from 400 to 1600. Is this evidence of a failed simulation? Estimate both mean MCSEs.
2. A report offers R-hat=1.00 as its only reason to trust a rare-event probability. Name two different checks still required and what each addresses.
3. A predictive array is `(chain, draw, patient)`. Describe the reductions for expected total events across patients, preserving axes until diagnostics are complete.

<!-- tutor-reference:start -->
### Check 04

Self-study reference: (1) MCSE falls from .2 to .1; target SD need not shrink. (2) Estimand-specific numerical precision/exploration and a relevant predictive discrepancy address different uncertainties; also inspect divergences, chain behaviour and tail information. (3) Sum over patients within each draw; diagnose chain/draw summaries; average totals for the expectation. Use [Diagnostics 07–08](./practice-diagnostic.md#diagnostic-07) and [Diagnostic 11](./practice-diagnostic.md#diagnostic-11).
<!-- tutor-reference:end -->

## Retrieval 05

1. You have 5,000 visits from three clinics. Which kind of uncertainty is primarily informed by the three, and which by the visits?
2. Construct predictions for two patients at one new clinic. Which latent quantity must they share? Contrast an existing clinic with data.
3. Without being told a model name, design validation for new clinics and a discrepancy that could reveal systematic clinic misfit. State what must remain inside each training split.

<!-- tutor-reference:start -->
### Check 05

Self-study reference: (1) Between-clinic variation has only three independent group units under the exchangeability assumptions; visits refine within-clinic summaries. (2) Both patients share one new clinic effect per hyperparameter draw; an existing clinic uses its conditional posterior effect. (3) Hold out clinics, fit transforms and choices on training clinics, and examine a target-relevant discrepancy such as clinic mean or tail frequency. Exchangeability needs substantive justification. See [Diagnostic 12](./practice-diagnostic.md#diagnostic-12) and [new-group prediction](./09_hierarchical.md#existing-and-new-groups-need-different-predictions).
<!-- tutor-reference:end -->

## Retrieval 06

1. A proposed rollout probably helps, but its expected benefit is 12 units and its cost is 15. Under linear net benefit, which action is supported and what population must be stated?
2. Missing outcomes may be more common after poor service. What sensitivity analysis would reveal a dependence on the unobserved outcomes rather than disguise it as identified evidence?
3. Write two sentences for a stakeholder separating a model-based recommendation, uncertainty about realised outcomes and one assumption whose failure could change the action.

<!-- tutor-reference:start -->
### Check 06

Self-study reference: (1) Do not roll out under those stipulated alternatives and utilities: expected net benefit is −3. State the decision population and horizon. (2) Specify interpretable alternative assumptions about missing outcomes and propagate them through predictions and actions; observed data alone may not choose between them. (3) A defensible statement makes the action conditional on the utility and observation assumptions, with realised risk separately described. See [observation assumptions](./11_robustness.md#describe-how-a-value-becomes-observable) and [communication](./12_decisions.md#communicate-and-reproduce-the-decision).
<!-- tutor-reference:end -->

After any repair, answer a fresh question with different conditions, explain the target and mark the attempt as independent or assisted. Remembering this reference's words is not evidence of transfer.
