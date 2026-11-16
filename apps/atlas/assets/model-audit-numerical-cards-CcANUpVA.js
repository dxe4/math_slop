var e=`---
id: recipe-model-audit-numerical-cards
title: "Numerical Cards for a Model Audit"
license: CC BY-SA 4.0
---

# Numerical Cards for a Model Audit

Use these three supplied cooling cards after the [general model-audit recipe](model-fit-audit.md). References to Steps 1–12 mean that recipe. Keep the MF-CARD task identities, original-temperature loss, known or fitted ambient, inclusive sensor bounds and exact keys together. The calculations describe authored examples; they supply no empirical external validation.

## Supplied numerical model cards

This bounded selection supplies the numerical card missing from the general procedure. It uses the existing exact synthetic data, calculations and complete keys in [Cooling-model validation](#/item/book-applied-modeling-proof-reference?chapter=cooling-model-validation). No new measurements, trial or model validation have been performed. The task identities **MF-CARD-P001**, **MF-CARD-P002** and **MF-CARD-R001** distinguish the primary, changed and later-return reports; they do not replace AM-CV-1/2/R.

Required preparation is signed quantities, units, fractions, linear equations, powers and logarithms; use [Algebra and Functions](#/item/course-algebra-functions-standard) if needed. Read this recipe's Inputs/Output and Steps 1–10 and 12 as an audit checklist; Step 11's genuinely external validation remains an explicitly missing extension. The selected source work is AM-CV-1 from “An algebra first attempt” through “Algebra self-review”, AM-CV-2 items 1–2 with the corresponding algebra solution, and AM-CV-R through its two fitted predictions/residuals. **Do not assign the Euler, logarithm-bracket, differential-equation or numerical-integration parts** without their separate calculus preparation.

The authored study allowance is **210 minutes**, including relevant reading:
90 for a primary attempt and comparison, 60 for a changed card, 30 at a later
sitting for the return, and 30 to revise the cards. This is not a measured study
time. It includes the selected checklist reading; the earlier 75-minute general
recipe allowance is not added again. Preparation repair, breaks and the elapsed
gap before returning are extra. All cards and source keys are public: keep a
first draft and label any help or prior answer exposure, without claiming an
unseen assessment.


### Foundations release — units, estimates, graphs, then model cards

For this selected foundations lane, complete the existing preparation in the following order before the three cards. The questions and their complete worked solutions stay in their original chapters. Label a first response with its chapter and exercise number, compare that exercise's adjacent **Solution**, then retain the correction and the reason for it.

| Order and native source | Assigned existing work | What to justify before continuing |
| --- | --- | --- |
| 1. [Formulas from Science](#/item/book-algebra-from-stories?chapter=formulas-from-science) | **Exercises 3, 4 and 6**, with each exercise's adjacent **Solution** | Preserve temperature units, distinguish the total-solution mass denominator from a volume concentration, and state why the formula's divisor is nonzero. |
| 2. [Checking and Estimation](#/item/book-algebra-from-stories?chapter=checking-and-estimation) | **Exercises 1, 3 and 5**, with each exercise's adjacent **Solution** | Give an order-of-magnitude estimate, reject a contextually impossible width, and check a proposed answer in the original equation. |
| 3. [Graphing Stories](#/item/book-algebra-from-stories?chapter=graphing-stories) | **Exercises 1, 3 and 5**, with each exercise's adjacent **Solution** | Test all listed point intervals before calling a graph linear, state an input domain and units, and distinguish a quadratic trajectory from a constant-rate model. |
| 4. The supplied model cards below | **MF-CARD-P001 → MF-CARD-P002 → MF-CARD-R001**, using their own primary, changed and return keys | Carry the units, input domain, fitting records, frozen test rule and bounded conclusion into the complete card; the changed and return data define their own protocols. |

A correct final number alone does not release a missing unit, denominator, domain or argument. Use the corresponding chapter's explanation and worked solution to repair that first missing step. These are descriptive self-review decisions, not a readiness score or an externally marked pass.

The nine questions develop the units, checking and representation preparation for this lane. The cards also use the powers, logarithms and elementary algebra stated above; repair those in the linked Algebra and Functions source when needed. The algebra-only AM-CV selections already named above supply the fitting derivations and graph specification. Keep the Euler, differential-equation and numerical-integration continuation separate until its calculus preparation is available.

For MF-CARD-P001, compare with **Complete primary model card** after retaining the first card. For MF-CARD-P002, rebuild the card before its **Changed card task and complete key** comparison; its unknown ambient and inclusive sensor bound replace the primary assumptions. At a later sitting, reconstruct MF-CARD-R001 before its **Return key**, recording actual prior exposure and help. Finish with **Card rubric, repairs and stopping point** and preserve the first and revised files. This does not make any public key or test record unseen.

Time for these nine preparation tasks and any prerequisite repair is additional to the existing **210-minute card allowance**; no separate measured or calibrated preparation estimate is supplied. The general recipe's broader stochastic, causal, multiple-group and external-validation work remains outside this finite synthetic lane.


### Primary card task


#### Exercise 1 {#MF-CARD-P001}

**MF-CARD-P001.** Complete AM-CV-1's algebra assignment before its worked comparison. Write a card using the ten fields in Step 12, distinguishing exact training records from the test record, and deterministic least squares from a probability model. Include a constant training-mean baseline and the last-training-value baseline as well as the fitted line and exponential. Give exact calibration loss and test residuals where applicable. Use the supplied table and reference graph; do not manufacture a collection process, confidence interval or external test. Compare the following complete card only after retaining your attempt.

<details><summary>Hint 1</summary>

Keep the declared training/test split.

</details>
<details><summary>Hint 2</summary>

Compare original-temperature residuals and baselines.

</details>
<details><summary>Solution</summary>

##### Worked example: a complete model card

### Complete primary model card

| Field | Completed card |
| --- | --- |
| Question and intended use | For this authored trajectory, freeze predictions at 30 minutes from the records at 0, 10 and 20 minutes. Compare the declared families by original-temperature calibration loss and signed test residual; this is a finite teaching comparison, not a deployment decision or a forecast for real drinks. |
| Data source, exclusions and bias | AM-CV-1 supplies exact synthetic values $80,50,35$ degrees Celsius at $0,10,20$ minutes, and test value $55/2$ at 30 minutes. Ambient $A=20$ is stipulated exact. There are no missing records. The construction deliberately favors an exponential; no sampled population or sensor resolution is claimed. |
| Dictionary and collection diagram | $t$: elapsed minutes, input; $T$: degrees Celsius, response; $A$: stipulated ambient in degrees Celsius; $T-A$: positive temperature excess. The procedure is “declare families and split → fit only the first three records → freeze predictions → compare the fourth”. This is a procedural diagram in words, not an inferred causal graph. |
| Equations and units | $L(t)=155/2-(9/4)t$, $E(t)=20+60(1/2)^{t/10}$. The intercept, ambient and amplitude have temperature units; line slope has temperature/minute units; $q=1/2$ and $t/10$ are dimensionless when 10 denotes 10 minutes. The comparison domain is $0\\le t\\le30$. |
| Assumptions | Constant ambient, exact calibration times/temperatures, positive excess, the stated two families and original-temperature squared loss. No Gaussian errors, independence, random sampling or causal intervention is assumed. A squared-loss calculation can be deterministic. |
| Fitting and baselines | The source proves both global minimizers using all three records: line calibration SSE $75/2$ in squared degrees, exponential SSE 0. Both have two fitted parameters. The training-mean baseline is 55, with calibration SSE 1050; the last-value baseline is 35 for the future test, not a refit using it. |
| Validation and residual diagnostics | Freeze before checking $55/2$. With residual $T-\\widehat T$, the line's calibration residuals are $5/2,-5,5/2$; the exponential's are all zero. Line test prediction 10 gives residual $35/2$; exponential prediction $55/2$ gives 0. Mean-baseline test residual is $-55/2$; last-value residual is $-15/2$. The source reference graph/table expose the residual pattern without relying on color. |
| Uncertainty and sensitivity | No observational uncertainty law or confidence level is given. Exact arithmetic removes rounding uncertainty in these listed values, not uncertainty about a real mechanism. If ambient were unknown, the known-ambient parameter argument would no longer apply; the changed task below tests that different protocol. Joining only two records changes the requested three-record fitting criterion. |
| Failure regimes | The line reaches ambient at $230/9$ minutes and predicts below it thereafter, contradicting the declared positive-excess cooling regime. The exponential remains above ambient at every finite nonnegative time; real ambient drift, sensor lag or nonuniform temperature could still invalidate it. |
| Permissible conclusion and prohibited interpretations | The exponential is the less misleading of these two fitted families for these synthetic records and the stipulated regime. Zero held-out residual is constructed finite consistency. It proves neither external validity, uncertainty coverage, causation nor safe extrapolation; opening this card supplies no independent achievement evidence. |

The constant-baseline loss is $(80-55)^2+(50-55)^2+(35-55)^2=1050$. The two fitted families and their residual proofs remain in “Worked algebra comparison”; this card assembles their audit rather than replacing that derivation.

</details>

### Changed card task and complete key


#### Exercise 2 {#MF-CARD-P002}

**MF-CARD-P002.** Use AM-CV-2 items 1–2: exact calibration temperatures $70,50,38$ at $0,5,10$ minutes; **unknown** ambient; test sensor reading $309/10$ at 15 minutes with inclusive absolute error bound $1/10$. Fit both families before inspecting the test reading. Rebuild all card fields. Explain which parameters two records fail to identify, and distinguish a compatibility interval from a confidence interval. Retain your attempt before this key.

<details><summary>Hint 1</summary>

Fit the ambient from calibration only.

</details>
<details><summary>Hint 2</summary>

Keep the sensor bound inclusive.

</details>
<details><summary>Solution</summary>

| Field | Complete changed card |
| --- | --- |
| Target, data and dictionary | Predict at 15 minutes in this second authored trajectory, not the original drink. Calibration times and temperatures are stipulated exact; the only declared measurement error is the test sensor's inclusive $1/10$-degree bound. Units and roles match the primary dictionary, but $A$ is now fitted rather than known. No missingness or sampled population is supplied. |
| Families, assumptions and fitting | Use $A+Bq^{t/5}$, with $B>0,0<q<1$, and a line, minimizing original-temperature calibration SSE. The source difference calculation gives $q=3/5,A=20,B=50$; zero loss is globally minimal. The least-squares line is $206/3-(16/5)t$, with residuals $4/3,-8/3,4/3$ and SSE $32/3$. This time the exponential fits three parameters and the line two. |
| Baselines and procedural split | Mean calibration value is $158/3$; last value is 38. The mean calibration SSE is $1568/3$. Freeze every rule using only the three calibration records, then inspect the fourth; do not use the sensor bound to refit. |
| Test and diagnostics | Exponential prediction $154/5$ gives residual $1/10$; line prediction $62/3$ gives $307/30$. Mean-baseline residual is $-653/30$; last-value residual is $-71/10$. The line's alternating calibration-residual pattern remains visible even though its two residual orthogonality sums vanish. Exact fit by the more flexible family does not by itself justify that flexibility elsewhere. |
| Uncertainty and decision | The stipulated true test value lies in $[154/5,31]$. The exponential prediction is exactly the lower endpoint, so it is compatible with the **inclusive** sensor bound; the line and both baselines are not. This is deterministic compatibility conditional on the bound and exact calibration, with no sampling confidence or probability attached. |
| Identifiability sensitivity | With only 70 and 50, every $A<50$ gives $B=70-A$ and $q=(50-A)/(70-A)\\in(0,1)$. Thus two readings do not determine three parameters. The third exact reading gives the displayed unique parameters within this positive cooling branch. Constant differences, zero denominators or a ratio outside $(0,1)$ would require another analysis. |
| Limits and permissible conclusion | These authored records favor the fitted exponential under this specific protocol. Unknown ambient changes the parameter problem, not the meaning of external validation. No causal mechanism, real generalization, noise distribution or interval coverage has been established. The source's Euler item 3 is an optional numerical continuation after calculus, not part of this card. |

The full AM-CV-2 algebra solution supplies the fitting proof and parameter comparison; use it to repair a wrong ratio or line. The mean's SSE follows from residuals $52/3,-8/3,-44/3$. The sensor interval is obtained from the reading plus/minus its bound; it is not an uncertainty interval for fitted parameters.

</details>

### Later-return card and full key


#### Exercise 3 {#MF-CARD-R001}

**MF-CARD-R001.** At another sitting, close earlier cards and use the **algebra portion** of AM-CV-R: known ambient 5; exact calibration $65,45,95/3$ at $0,4,8$ minutes; test reading $114/5$ at 12 minutes with inclusive error bound $1/10$. Reconstruct the two fits, a calibration/test residual table, a baseline, the units and a bounded conclusion. Stop before its Euler instruction. Label prior exposure and help honestly.

<details><summary>Hint 1</summary>

Restore the known ambient value.

</details>
<details><summary>Hint 2</summary>

Compare the exact prediction with sensor endpoints.

</details>
<details><summary>Solution</summary>

**Return key.** The known ambient restores a two-parameter exponential:
$$
E(t)=5+60(2/3)^{t/4},\\qquad L(t)=575/9-(25/6)t.
$$
The exponential has zero calibration loss. The line's calibration residuals $10/9,-20/9,10/9$ have SSE $200/27$. Predictions at 12 minutes are $205/9$ and $125/9$, giving test residuals $1/45$ and $401/45$. The training-mean baseline is $425/9$, with test residual $-1099/45$; the last-value baseline $95/3$ gives $-133/15$.

The true test value is stipulated to lie in $[227/10,229/10]$. The exponential prediction belongs to it since $|1/45|<1/10$; the line and baselines do not. State the minutes/temperature units and the positive-excess domain before comparing. This is another synthetic compatibility check, not external validation or a fresh unseen result. Faster numerical integration would not alter these exact algebraic fits or repair a false mechanism.

</details>

### Card rubric, repairs and stopping point

| Evidence to identify in your own report | Repair route |
| --- | --- |
| All dictionary fields, units and known versus fitted ambient are explicit | Return to the exact source record table; never reuse the original ambient assumption silently |
| Training/test split, loss and parameter count are fixed before comparison | Reconstruct the source's original-scale fitting argument; exclude the fourth record from estimation |
| Exact signed residuals and meaningful baselines are present | Use observed minus predicted temperature; do not compare log residuals with temperature residuals |
| A table and graph respect the input domain and distinguish test marks | Use the primary source's graph specification; for changed data label the new times and fitted formulas |
| Sensor bounds, parameter identifiability and model-form limits stay distinct | Use inclusive interval membership and the changed two-record family; do not invent confidence levels |
| Every strong conclusion has supporting finite evidence and an explicit limit | State synthetic construction, absent external validation and prohibited causal/extrapolation claims |
| Primary, changed and return arguments survive beside revisions | Record which input, condition or calculation changed and what help was used; this is descriptive self-review |

These cards complete one selected numerical audit with primary, changed and later-return work. The general recipe's real-data collection, stochastic uncertainty, multiple groups, causal questions and genuinely external validation remain additional work requiring their actual prerequisites and evidence. No participant, tutor, assessor or supervision arrangement is implied.

`;export{e as default};