
# A Separate-Regime Model Check and Repair Guide

This reading completes the [grouped-prediction tasks](recipe-model-audit-foundations-tasks.md) with a separate authored regime. The prediction rule is held fixed before the extra responses are considered. Its arithmetic is exact, but no new data were collected from devices or people. A large discrepancy therefore illustrates a failure regime inside the supplied example; it does not estimate how frequently that regime occurs in a population.

Keep the [cooling cards](recipe-model-audit-numerical-cards.md), [uncertainty checkpoints](recipe-model-audit-foundations-checkpoints.md) and [general audit procedure](recipe-model-fit-audit.md) available when assembling the comparison. Their different targets, units and probability assumptions must remain visible. The repair guide points back to the particular argument a consequential error invalidates. Revising an answer after seeing a key is useful study, but it does not create another independent observation, an unseen assessment or a new confidence guarantee.

### A frozen test in a separate synthetic regime

#### Worked example: retain the original fallback prediction

Complete this Step 11 comparison after freezing the primary procedures. Two additional authored devices E/F are reserved from fitting and selection: E has readings 15,17 and F has 19,21. They are a separate **synthetic stress cohort**, not measurements collected externally. Predict with the unchanged fallback 4; do not use these responses to choose or refit a model, preprocessing or threshold.

| Device | First response | Second response | Frozen prediction | First residual | Second residual | Group RSS | Group MSE |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E | 15 | 17 | 4 | 11 | 13 | 290 | 145 |
| F | 19 | 21 | 4 | 15 | 17 | 514 | 257 |

**Full key.** Both primary procedures use fallback 4. Residual squares sum to $121+169+225+289=804$, giving MSE $804/4=201$ square response units. Each device's error exceeds the corresponding primary test-device errors; the direction of underprediction persists. This is a supplied failure-regime calculation. If these values influenced a choice, label them development data rather than untouched testing. A later real external validation would need independently collected data, a stated intended population/regime, collection/measurement provenance, a frozen procedure, metrics and uncertainty with its actual dependence assumptions. No such validation, monitoring deployment or causal intervention has occurred here.

### Cumulative repair and stopping point

Assemble the existing three algebra cards, statistical answers/interval derivation, P/Q audit cards, three grouped-prediction cards and separate-regime comparison as one portfolio. At another sitting reconstruct R001 and reattempt R-09-E05/E06, R-11-E01/E06 and Q's six-row table without copying a key; declare prior exposure and help. Compare the public models, retain corrections and explain which input, target, assumption or inequality changed.

| Consequential error | Specific repair before continuing |
| --- | --- |
| A correct number with the wrong denominator, domain or unit | Revisit the nine foundations questions and the original MF-CARD algebra key; retain temperature versus squared-temperature units |
| Rows called independent units, or SD used as a mean SE | R01's repeated/vanished-row ledger; R-08-E04/E05 and the iid-mean theorem, with its actual hypotheses |
| Class assignment called a prediction split, or a student-weighted contrast given a class-statistic p-value | R-09-E06, Quantity P/Q's actual full tables and the two separate estimands; reconstruct the design before recounting |
| Wrong ties, sharp/average null or causal meaning | R-09-E03/E05/E08; preserve the inclusive predeclared tail and withdraw conclusions unsupported by assignment |
| Confidence, prediction, sensor compatibility and sensitivity treated as the same interval | R-11-E01/E02/E06/E08, the independent-new-session proof, MF-CARD-P002 and the attainable R001 endpoints |
| Lower training error used to claim new-device improvement | Recompute P001's identical test predictions and both 41 MSEs, then retain the 17/65 group table |
| Changed MSE 4 presented as a new-device estimate | Restore P002's known-device occasion/horizon contract; explain why its target and test rows differ from P001 |
| Missing D2 dropped, zero-filled or replaced by a remembered 13 | Keep its ID and original four-row roster; separate 83/3 from M(d), with endpoints 33/51 and the bound assumption |
| Synthetic stress results called empirical external validation | Keep the frozen 4, 804/201 arithmetic and absent collection/sampling evidence; specify the actual future validation design instead |

The original **210-minute** model-card allowance and its relevant reading remain provenance for MF-CARD-P001/P002/R001 alone. **The added joined selection and full selected study workload are unknown.** No new combined time, calibrated credit, measured workload or retention effect is inferred. Prior study may be reused once; prerequisite repair, breaks and elapsed intervals remain additional.

Keep dated, separately named first, comparison and revised text files with exact source/task labels, help/answer exposure and reasons for changes; retain any data/hand tables and interval proof. Use the worksheet portfolio guide. The shared reading note is one mutable string, not an immutable multi-task portfolio; these native assignments do not become new shared writing tasks. Existing registered writing keeps its own limits and exports. Shared notebook backup does not automatically include learner-owned files, native reader stores or Practice/tutor records: export each relevant store through its existing controls and check recovery separately. Dates and help records are declarations, not a verified delay or proof of independent work.

Stop after completing every selected question, full key comparison, all ten fields for each assigned card, changed and later reconstruction, and recorded repair. The Quantity mathematical rubric, its numerical protocol rubric and any full Methods weighted rubric remain distinct; no self-review profile is a grade or a validated scale. This route supplies conditional mathematical/design/prediction teaching, not a conducted study, observed learner success, whole statistics/education programme, publication qualification or mastery.

## Exercises with hints and complete solutions

### Exercise 1 {#model-audit-foundations-frozen-test-ex-1}

Reconstruct the separate cohort's total squared error for fixed prediction 4,
and explain why its MSE is not an empirical external-risk estimate.

<details><summary>Hint 1</summary>

Subtract 4 from each of the four supplied responses.

</details>
<details><summary>Hint 2</summary>

Divide the squared-residual sum by four, keeping the synthetic provenance.

</details>
<details><summary>Solution</summary>

Residuals are $11,13,15,17$. Their squared sum is
$121+169+225+289=804$, so MSE is 201 square response units. Those exact
values describe the authored cohort. No population sampling or external
measurement mechanism was supplied, so they do not estimate an identified
real-world risk. Reusing the values to tune the prediction would also change
their role from held-fixed comparison to development data.

</details>

### Exercise 2 {#model-audit-foundations-frozen-test-ex-2}

In the missing-reading task, why does replacing the unreported value by the
remembered primary value 13 fail to solve the return question?

<details><summary>Hint 1</summary>

A public earlier key is not a new measurement.

</details>
<details><summary>Hint 2</summary>

Keep the unknown value d and the stipulated range in the full four-row loss.

</details>
<details><summary>Solution</summary>

The return supplies only $11\le d\le15$. Its four-row MSE is
$[83+(d-4)^2]/4$, ranging from 33 to 51. Substitution $d=13$ gives 41
but selects an unsupported point in that interval. The remembered value is
not observed in this return. The attainable sensitivity range, with its
assumption stated, is the justified answer.

</details>


