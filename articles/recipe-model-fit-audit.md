
# Recipe: Fit and Audit a Mathematical Model

**Before reading.** Read [Functions, Domains, and Graphs](#/books/algebra-and-functions/functions-domain-graphs).

Use this procedure when observations must inform a quantitative relationship. The output is not just fitted parameters: it is an auditable argument about what the model can and cannot support.

## Inputs

- a concrete question or decision;
- observations with provenance and units;
- a candidate mechanism or function family;
- an explicit loss or probability model;
- a validation plan.

## Output

A model card containing assumptions, equations, parameter estimates, diagnostics, uncertainty, sensitivity, validation results, and failure regimes.

## Step 1 — Freeze the question

Write one sentence with:

- the target quantity;
- population or system;
- time and spatial horizon;
- intended use;
- acceptable error or decision threshold.

“Understand sales” is too vague. “Predict next week’s item-level demand within a useful interval for warehouse staffing” can be audited.

Do not let the question drift after seeing which result looks strongest.

## Step 2 — Build a data dictionary

For every variable record:

| Field | What to record |
|---|---|
| Meaning | Operational definition, not just label |
| Unit | Including scale and transformations |
| Collection | Sensor, survey, administrative process |
| Resolution | Time/space granularity and rounding |
| Missingness | Why values may be absent |
| Role | Outcome, input, grouping, or identifier |

Plot the collection process as a causal or procedural diagram. Data can be precise measurements of the wrong population.

## Step 3 — Establish baselines

Before a sophisticated model, calculate:

- constant or historical-average prediction;
- most recent value;
- simple linear or seasonal baseline;
- an oracle-free error metric on held-out data.

A complex model that barely beats a simple baseline may add cost without useful information.

## Step 4 — State a generative story

Explain how inputs could produce the outcome. Then encode that story.

For a straight-line observation model:

$y_i = \beta _{0} + \beta _{1}x_i + \varepsilon _i$.

Questions hidden inside this short equation include:

- Is the mean relation plausibly linear across this range?
- Are errors centered near zero at each x?
- Does error spread stay constant?
- Are observations independent after conditioning on x?
- Is x measured accurately?
- Is the sample selection ignorable?

List assumptions before fitting, categorized as structural, measurement, sampling, and computational.

## Step 5 — Check dimensions and limits

Verify every additive term has matching units. If $y$ is meters and $x$ seconds, $\beta _{1}$ has meters/second.

Test limiting cases:

- What happens when an input is zero?
- What happens at very large values?
- Can predictions violate physical bounds?
- Does a conserved quantity remain conserved?
- Does the model reduce to a known simpler case?

A negative predicted population or probability above one is often a model-family warning, not a rounding issue.

## Step 6 — Choose the fitting criterion

Least squares minimizes

$\sum (y_i-f(x_i;\theta ))^{2}$.

It matches Gaussian equal-variance errors and emphasizes large residuals. Absolute error is more robust to outliers but estimates a different conditional target. A likelihood should correspond to the stated observation mechanism.

Regularization adds a preference, such as small or sparse parameters. Report it as an assumption, not a neutral numerical convenience.

## Step 7 — Separate training from evaluation

Design the split to imitate deployment:

- future prediction: split by time, never randomly across future and past;
- grouped subjects: keep one subject entirely in one split;
- spatial generalization: hold out regions;
- repeated model selection: reserve a final untouched test set.

Any preprocessing learned from data—normalization, imputation, feature selection—must be fit using training data only.

## Step 8 — Inspect residuals

For residual $r_i=y_i-ŷ_i$, inspect:

- residual versus fitted value: nonlinearity or changing variance;
- residual versus each input: missing structure;
- residual versus time or location: dependence or drift;
- distribution and extreme points: heavy tails or data errors;
- autocorrelation: temporal memory;
- subgroup summaries: uneven performance.

A patterned residual is information the model failed to explain. Narrower confidence intervals do not fix it.

## Step 9 — Quantify uncertainty at the right layer

Distinguish:

- measurement uncertainty;
- parameter uncertainty;
- process randomness;
- model-form uncertainty;
- distribution shift;
- numerical error.

A standard error under one model generally covers only part of this list. Use intervals whose interpretation matches the question: confidence intervals for parameters, prediction intervals for new outcomes, credible intervals under a Bayesian model, and sensitivity ranges for assumptions.

## Step 10 — Stress-test assumptions

Create a table:

| Change | Why plausible | Effect on conclusion |
|---|---|---|
| Remove influential points | potential errors or rare regime | report |
| Change functional form | structural uncertainty | report |
| Vary regularization | tuning uncertainty | report |
| Shift key inputs | deployment drift | report |
| Use alternate missing-data rule | missingness uncertainty | report |

Focus on whether the decision changes, not merely whether the third decimal moves.

## Step 11 — Validate externally

Compare with data or regimes not used for construction. Calibration asks whether predicted probabilities match observed frequencies. Discrimination asks whether cases are ranked. Accuracy averages may hide systematic subgroup failure.

If external validation fails, diagnose the data-generating difference before refitting blindly.

## Step 12 — Write the model card

Include:

1. question and intended use;
2. data source, exclusions, and known biases;
3. equations and units;
4. assumptions;
5. fitting method and baseline;
6. validation design and metrics;
7. residual diagnostics;
8. uncertainty and sensitivity;
9. known failure regimes;
10. prohibited interpretations;

## Mini worked example: cooling drink

### Worked example: a logarithmic cooling transformation

Newton’s cooling model says

$T(t)=T_{\mathrm{env}}+(T_{0}-T_{\mathrm{env}})e^{-kt}$.

Suppose room temperature $T_{\mathrm{env}}$ is measured separately. Transform positive differences:

$\log(T(t)-T_{\mathrm{env}})=\log(T_{0}-T_{\mathrm{env}})-kt$.

A straight-line fit estimates $k$, but the transformation changes the error model: equal temperature errors are not equal log-difference errors, especially near room temperature. A better direct nonlinear fit may match measurement physics.

Audit questions:

- Did room temperature remain constant?
- Was the thermometer itself lagged?
- Does evaporation add another mechanism?
- Are late measurements dominated by sensor resolution?
- Does fitted $k$ predict a second cooling run?

The exponential curve is the start of the analysis, not the conclusion.

## Transfer practice: compare two cooling claims

### Exercise 1
<a id="model-fit-audit-ex-1"></a>

The variable-environment calculation uses first-year calculus and the
integrating-factor method. The general reporting comparison can be completed
before deriving that formula; use [Calculus](#/books/calculus) for
the derivative and integral preparation.

Suppose a second drink is recorded at the same times, but the room temperature
drifts upward during the experiment. Draft two analyses:

1. fit the constant-environment exponential model anyway;
2. introduce a measured time-varying environment into the differential
   equation.

For each analysis, state the target, units, fitted quantities, residual plot,
held-out check, and strongest permissible conclusion. Predict one residual
pattern that would count against the constant-environment model. Then name a
measurement that could distinguish thermometer lag from genuine
environmental drift.

The exercise is complete only when the comparison keeps model error,
measurement error, and parameter uncertainty separate. “The second curve fits
better” is insufficient: specify the scoring rule, the evaluation observations
that were not used for fitting, and whether the extra flexibility was chosen
before those observations were inspected.

<details><summary>Hint 1</summary>

Keep the target and scoring scale identical while changing the environment assumption.

</details>
<details><summary>Hint 2</summary>

A measured environment function can enter the differential equation as a
known input rather than as an extra free parameter for every observation.

</details>
<details><summary>Solution</summary>

For analysis 1, fit $T(t)=A+(T_0-A)e^{-kt}$ using an explicitly fixed
ambient $A$, and report residuals in temperature units. For analysis 2 use
$T'=-k(T-A(t))$, with independently measured $A(t)$. At fixed $k$ its
solution is $T(t)=e^{-kt}T_0+k\int_0^t e^{-k(t-s)}A(s)\,ds$.
Both analyses can predict later temperatures after fitting only early records;
compare original-temperature squared loss on the same later records.
An upward environmental drift can leave late observed temperatures above a
constant-environment prediction. That pattern alone does not identify drift,
because sensor lag can also produce structured residuals. Independently record
ambient temperature over time and characterize thermometer response to a
controlled temperature change. Separate those measurement observations from
the fitted $k$ and from uncertainty about the cooling mechanism. Without such
data, the strongest conclusion may be that the two explanations remain unresolved.

</details>

### Exercise 2
<a id="model-fit-audit-ex-2"></a>

In an exact cooling example, ambient temperature is 20, initial temperature
80, and temperature after ten minutes is 50. Find the positive exponential
decay rate and its prediction after thirty minutes. State the claim's scope.

<details><summary>Hint 1</summary>

Subtract the ambient before taking a ratio.

</details>
<details><summary>Hint 2</summary>

The excess temperature halves over each ten-minute interval in this model.

</details>
<details><summary>Solution</summary>

The excesses are 60 and 30, so $e^{-10k}=1/2$ and
$k=\log2/10$ per minute. At thirty minutes the predicted excess is
$60(1/2)^3=7.5$, giving temperature 27.5. This follows from the specified
constant-ambient exponential family and exact calibration values. Two fitted
records alone do not establish that a real drink follows the mechanism or
that the thirty-minute prediction will match an independent measurement.

</details>

## Stop conditions

Do not issue a strong conclusion when:

- the target is undefined or changed after analysis;
- leakage contaminates validation;
- key parameters are not identifiable;
- residual structure contradicts the error model;
- conclusions reverse under plausible assumptions;
- deployment lies outside validated ranges;
- uncertainty relevant to the decision was not quantified.

The honest output can be “the available observations do not distinguish these explanations.” That is a useful mathematical result.


## Continue the model-audit sequence

The original supplied tasks and full keys now form four separate readings:

1. [Numerical cooling cards](recipe-model-audit-numerical-cards.md): MF-CARD-P001,
   MF-CARD-P002 and MF-CARD-R001, with their exact fits and sensor bounds.
2. [Uncertainty and design checkpoints](recipe-model-audit-foundations-checkpoints.md):
   the R-08/R-09/R-11, Methods and P/Q comparisons, including the full
   mean-versus-new-observation derivation.
3. [Grouped prediction tasks](recipe-model-audit-foundations-tasks.md):
   FND-GROUP-P001/P002/R001, their complete ten-field cards and missing-row bounds.
4. [Separate-regime check and repairs](recipe-model-audit-foundations-frozen-test.md):
   the unchanged fallback prediction, extra device responses and cumulative repair guide.

Each reading keeps its original task labels, assumptions, data and worked
answers. The general procedure remains at this original address. Study notes
attached here still concern this resource; following a continuation does not
move them or turn one task into another.
