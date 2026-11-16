var e=`---
id: recipe-model-audit-foundations-tasks
title: "Grouped Prediction: New Devices and Known Devices"
license: CC BY-SA 4.0
---

# Grouped Prediction: New Devices and Known Devices

Use the [general recipe's ten fields](model-fit-audit.md) for each of these three grouped-prediction tasks. [Uncertainty and design checkpoints](model-audit-foundations-checkpoints.md) explain the separate R11 probability model; it is not a distribution for these authored device values. Preserve the FND-GROUP identities and the distinction between an unseen device and a later reading of a known device.

### FND-GROUP-P001 — Prediction for new devices


#### Exercise 1 {#FND-GROUP-P001}

One row is one reading of a named device at occasion 1 or 2; occasion 1 precedes 2. Response units are generic $u$, which may be signed. These are exact **authored synthetic values**, not instrument measurements or a random sample. No missing code, exclusion, probability law or causal intervention is supplied. The frozen use is predicting readings of entirely new devices, scored by original-response squared loss.

| Device | Occasion | Response u | Primary role | Changed role |
| --- | --- | --- | --- | --- |
| A | 1 | 1 | train | train |
| A | 2 | 3 | train | test |
| B | 1 | 5 | train | train |
| B | 2 | 7 | train | test |
| C | 1 | 7 | test | train |
| C | 2 | 9 | test | test |
| D | 1 | 11 | test | train |
| D | 2 | 13 | test | test |

**Submission.** Use all A/B readings for training and all C/D readings for testing; freeze that group split. Fit this declared lookup rule: predict the training mean for a device seen in training, and the grand training mean for a device with no training reading. The comparator always predicts the grand training mean. There is no fitted preprocessing or candidate selection. Derive the fitted means, prove why a training mean minimizes constant squared loss, and tabulate both methods' training/test residuals, RSS, MSE and errors by test device. Define residual $r=y-\\widehat y$; $RSS=\\sum r^2$, $MSE=RSS/n$. Complete all ten Step 12 fields before comparing the following public key.

<details><summary>Hint 1</summary>

Keep whole devices in their assigned split.

</details>
<details><summary>Hint 2</summary>

Unseen devices use the grand training mean.

</details>
<details><summary>Solution</summary>

##### Worked example: a complete model card

**Primary key and all ten fields.** For any $n>0$ training responses,
$$
\\sum_i(y_i-c)^2=\\sum_i(y_i-\\bar y)^2+n(c-\\bar y)^2,
$$
because the centered responses sum to zero. Thus the unique minimizing constant is $\\bar y$. Apply the same identity inside each observed device. Training values $1,3,5,7$ give grand mean 4 and device means 2 and 6. Lookup training residuals are $(-1,1,-1,1)$; the constant baseline's are $(-3,-1,1,3)$.

| Method | Training RSS | Training MSE | Test RSS | Test MSE |
| --- | --- | --- | --- | --- |
| Lookup | 4 | 1 | 164 | 41 |
| Constant baseline | 20 | 5 | 164 | 41 |

Both methods predict 4 for each unseen test device:

| Device | Frozen prediction | First residual | Second residual | Group RSS | Group MSE |
| --- | --- | --- | --- | --- | --- |
| C | 4 | 3 | 5 | 34 | 17 |
| D | 4 | 7 | 9 | 130 | 65 |

| Step 12 field | Complete primary card |
| --- | --- |
| 1. Question and intended use | Predict the two supplied readings of entirely unseen devices C/D from A/B training, in this declared regime; report finite squared error |
| 2. Data source, exclusions and biases | Eight authored readings, four device IDs, two ordered occasions; all are present. The values favor a visible between-device shift; no real collection, sampling or representativeness is claimed |
| 3. Equations and units | Seen-device mean with fallback grand mean 4; constant baseline 4. Responses/predictions/residuals have units u; RSS and MSE have units u² |
| 4. Assumptions | The use is new devices, so all readings of a device stay in one split. The two procedures and loss are fixed; no iid, normal-error, measurement-uncertainty or causal law has been supplied |
| 5. Fitting and baseline | Square completion proves the fitted grand and device means. Lookup reduces training MSE from 5 to 1, but both methods have test MSE 41 |
| 6. Validation design and metrics | Four A/B training rows, four C/D test rows, no validation tuning or refit. Test RSS 164; device MSEs 17 and 65. Lower training loss supplies no held-out improvement |
| 7. Residual diagnostics | All four test residuals are positive: 3,5,7,9. Retain the numeric table and describe increasing underprediction across these test devices; a pooled mean hides the larger D error |
| 8. Uncertainty and sensitivity | These are exact finite arithmetic results. No calibrated confidence/prediction interval or future-risk guarantee follows. The separate R11 comparison supplies a probability law; the return audits missingness |
| 9. Failure regimes | New groups fall back to a constant; different group composition, later shifts or dependence can defeat a deployment claim. Repeated training readings do not create additional independent devices |
| 10. Prohibited interpretations | No general superiority, real-device forecast guarantee, causal effect, empirical external validity or mastery follows from this fixed synthetic split |

The required text/numeric alternative to a residual plot is the two-device table: C's residuals are 3 and 5, D's are 7 and 9, all above zero. A drawn graph may display that same information; it supplies no extra observations.

</details>

### FND-GROUP-P002 — Changed use: later readings of known devices


#### Exercise 2 {#FND-GROUP-P002}

**Submission.** Keep the same eight-row fixture, but change the intended use to predicting occasion 2 for devices whose occasion-1 reading is already available. Train on occasion 1 for **all four** devices and test on occasion 2. Use the same frozen lookup/fallback procedure and constant comparator. Rebuild all ten fields, residuals and metrics. Explain why this split can answer the changed use, and why its error cannot be presented as new-device performance or as general superiority over P001.

<details><summary>Hint 1</summary>

Use only each device's first occasion.

</details>
<details><summary>Hint 2</summary>

The target is now known-device prediction.

</details>
<details><summary>Solution</summary>

**Changed key.** Training values $1,5,7,11$ have grand mean 6. Each device has one training reading, so its fitted lookup value equals that reading. This uses no occasion-2 response. Baseline training residuals are $(-5,-1,1,5)$.

| Method | Training RSS | Training MSE | Test RSS | Test MSE |
| --- | --- | --- | --- | --- |
| Lookup | 0 | 0 | 16 | 4 |
| Constant baseline | 52 | 13 | 68 | 17 |

| Device | Lookup prediction | Test response | Lookup residual | Baseline residual |
| --- | --- | --- | --- | --- |
| A | 1 | 3 | 2 | -3 |
| B | 5 | 7 | 2 | 1 |
| C | 7 | 9 | 2 | 3 |
| D | 11 | 13 | 2 | 7 |

| Step 12 field | Complete changed card |
| --- | --- |
| 1. Question and intended use | Predict each known device's occasion-2 reading using only its already available occasion-1 record |
| 2. Data source, exclusions and biases | The same authored eight rows, no exclusions or missing values; the changed roles in the fixture are a new declared protocol, not extra primary training data |
| 3. Equations and units | Lookup predicts 1,5,7,11 for A/B/C/D; the constant predicts 6. Residuals use y minus prediction in u; squared metrics use u² |
| 4. Assumptions | Occasion 1 precedes the prediction horizon and its device ID is available. Earlier records from these known devices are permitted information; no stochastic independence or causal assignment is inferred |
| 5. Fitting and baseline | Fit only the four first readings: lookup training RSS/MSE 0/0, constant RSS/MSE 52/13. The same square-completion identity justifies the means |
| 6. Validation design and metrics | Four training first occasions and four test second occasions; no outcome-driven choice or refit. Lookup test RSS/MSE 16/4, baseline 68/17 |
| 7. Residual diagnostics | Every lookup test residual is 2. Baseline residuals are -3,1,3,7. State the systematic remaining offset rather than describing zero training error as a perfect predictive model |
| 8. Uncertainty and sensitivity | The fixed known-device test shows a finite improvement over this constant baseline. It supplies no population-risk interval; a different device/time process needs its own warrant |
| 9. Failure regimes | A new device lacks the stored reading; a future occasion or regime may have a different offset. Sharing first and second occasions across splits is appropriate only for this known-device use |
| 10. Prohibited interpretations | MSE 4 and P001's 41 have different targets and test rows: their comparison does not establish general superiority. The changed result is not an estimate for entirely new devices or a causal effect |

</details>

### FND-GROUP-R001 — Later reconstruction with an unreported reading


#### Exercise 3 {#FND-GROUP-R001}

At another sitting close the preceding keys and rebuild the **primary** new-device split and fitted means. The retained C/D test roster still has four rows, but D's occasion-2 response is unreported. C1=7, C2=9 and D1=11 remain. For sensitivity only, stipulate that the missing value $d$ lies in $[11,15]$. Retain the missing row rather than changing the target. Submit all ten fields, the observed-subset metric, the planned four-row metric as a function of $d$, its attainable bounds, and the strongest justified conclusion. Record any previously opened answer; this is public reconstruction, not a fresh assessment or a verified delay.

<details><summary>Hint 1</summary>

Keep the original four-row target.

</details>
<details><summary>Hint 2</summary>

Bound its error as a function of d.

</details>
<details><summary>Solution</summary>

**Return key.** The training records are unchanged, so grand mean 4, device means 2/6 and all primary predictions remain fixed. The three observed test residuals are $3,5,7$, giving RSS 83 and observed-subset MSE $83/3$. That is a different three-row descriptive question. The planned complete test error is
$$
M(d)=\\frac{83+(d-4)^2}{4}.
$$
For $11\\le d\\le15$, $d-4$ runs from 7 to 11, so squaring preserves order. Both extrema are attainable:

| Missing value d | Missing residual | Planned test RSS | Planned test MSE |
| --- | --- | --- | --- |
| 11 | 7 | 132 | 33 |
| 15 | 11 | 204 | 51 |

Thus $M(d)\\in[33,51]$ square response units. An assumed value 13 would reproduce primary MSE 41, but it is not observed in this return. Neither zero imputation nor dropping D2 reconstructs the missing value. These are deterministic sensitivity bounds under a supplied constraint, not confidence intervals or probabilities for $d$.

| Step 12 field | Complete return card |
| --- | --- |
| 1. Question and intended use | Retain P001's four-row new-device test target despite one missing outcome |
| 2. Data source, exclusions and biases | A/B training remains complete; C1/C2/D1 observed, D2 explicitly unreported. Keep its device/occasion identity and missingness record; do not silently create a three-row target |
| 3. Equations and units | Frozen prediction 4 for unseen C/D; observed RSS 83; full M(d)=[83+(d-4)²]/4. Residuals are u, metrics and bounds u² |
| 4. Assumptions | Only the authored sensitivity constraint d in [11,15] is added. No distribution, ignorability, automatic-zero rule or probability for the missing value is assumed |
| 5. Fitting and baseline | Training fit and constant baseline are unchanged; no test outcome, missing or observed, refits either method |
| 6. Validation design and metrics | Original four-row test roster retained. Observed-subset MSE 83/3 is labelled separately; planned full MSE is bounded by 33 and 51, not identified as one number |
| 7. Residual diagnostics | Preserve observed residuals 3,5,7 and missing residual d-4 in [7,11]; record which row is absent before comparing pooled errors |
| 8. Uncertainty and sensitivity | Both endpoints are attainable; report the dependence on the stipulated bound. This is not repeated-sampling coverage or an interval for a parameter mean |
| 9. Failure regimes | The range changes if the bound is wrong; the observed-only metric can hide missing-outcome selection. A later seen key cannot supply an observed response |
| 10. Prohibited interpretations | No inferred missing value, causal effect, sampling confidence, complete-test point claim, new-device population guarantee or unseen-work evidence |

</details>

`;export{e as default};