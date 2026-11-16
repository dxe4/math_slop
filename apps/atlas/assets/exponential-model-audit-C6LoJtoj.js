var e=`---
id: recipe-exponential-model-audit
title: "Fit and Audit an Exponential Model"
license: CC BY-SA 4.0
---

# Fit and Audit an Exponential Model

**Before reading.** Read [Functions, Domains, and Graphs](/resources/library:book-algebra-and-functions:functions-domain-graphs/).

Use this recipe when a quantity may change by roughly the same **factor** over equal time steps. It produces a fitted exponential, but more importantly it tests whether multiplicative change is credible and where the model should stop being trusted.

## 1. Decide whether the mechanism is additive or multiplicative

A linear model

$L(t)=\\alpha +\\beta t$

adds the same amount $\\beta \\Delta t$ over every interval of length $\\Delta t$. An exponential model

$E(t)=A\\cdot bᵗ$

multiplies by the same factor $b^\\Delta t$. For continuous-rate notation,

$E(t)=A\\cdot e^{rt}$,

where $b=eʳ$ for one time unit.

With observations 100, 120, 144 at equally spaced times, differences are 20 then 24, but ratios are both 1.2. An exponential is structurally plausible. With 100, 120, 140, differences are constant and ratios decline, making a linear rule more plausible.

Real data will not be exact. Compare patterns in differences, ratios, and residuals rather than declaring a mechanism from two points.

## 2. State variables, units, domain, and sign

Before fitting, write:

- $t$: time since a named origin, in a stated unit;
- $y(t)$: measured quantity and unit;
- intended domain, such as $0\\le t\\le 12 months$;
- why values should be positive if logarithms will be used;
- whether a background level or capacity makes unbounded growth implausible.

The basic exponential $A e^{rt}$ is positive when $A>0$. Zero or negative observations cannot be logged. They might be data errors, net quantities that legitimately cross zero, or evidence that a shifted/different model is needed. Do not silently delete them.

## 3. Fit exactly from two positive points

Suppose $y(t_{0})=y_{0}>0$ and $y(t_{1})=y_{1}>0$, with $t_{1}\\ne t_{0}$. For

$y(t)=A e^{rt}$,

divide the two equations:

$y_{1}/y_{0}=e^[r(t_{1}-t_{0})]$.

Therefore

$r=\\ln(y_{1}/y_{0})/(t_{1}-t_{0})$

and

$A=y_{0}e^{-rt_{0}}$.

Equivalently, the anchored form avoids solving separately for $A$:

$y(t)=y_{0} \\exp(r(t-t_{0}))$.

### Worked example

A culture measures 80 units at hour 2 and 200 units at hour 7. Then

$r=\\ln(200/80)/5=\\ln(2.5)/5\\approx 0.18326 per hour$.

At hour 10 the model predicts

$80 exp[0.18326(10-2)]\\approx 346.6 units$.

The rate has units “per hour.” The exponent $r(t-t_{0})$ is unitless, as it must be.

Two points determine the two parameters exactly, so zero residual at those points is not evidence of predictive quality. A third point is the first opportunity to test the shape.

## 4. Fit several points in log space

For positive observations $(t_{i},y_{i})$, take logs:

$z_{i}=\\ln y_{i}=\\ln A+r t_{i}$.

Fit the straight line $z=\\alpha +rt$ by least squares, then set $A=eᵅ$. With

$mean_t=(1/n)\\sum t_{i}$ and $mean_z=(1/n)\\sum z_{i}$,

the slope is

$r = \\sum (t_{i}-mean_t)(z_{i}-mean_z) / \\sum (t_{i}-mean_t)^{2}$,

provided not all times are equal. The intercept is $\\alpha =mean_z-r mean_t$.

This minimizes squared **log residuals**, not squared errors in the original units. It treats relative errors more symmetrically: predicting 50 instead of 100 and 200 instead of 100 have log errors of equal magnitude and opposite sign. If measurement error is additive with constant spread in original units, nonlinear least squares on the original scale may be more appropriate.

## 5. Dependency-free reference implementation

\`\`\`js
function fitLogLinearExponential(points) {
  if (!Array.isArray(points) || points.length < 2) {
    throw new Error("Need at least two observations.");
  }

  const clean = points.map(({ t, y }, index) => {
    if (!Number.isFinite(t) || !Number.isFinite(y) || y <= 0) {
      throw new Error(\`Observation \${index} needs finite t and positive finite y.\`);
    }
    return { t, z: Math.log(y) };
  });

  const n = clean.length;
  const meanT = clean.reduce((sum, p) => sum + p.t, 0) / n;
  const meanZ = clean.reduce((sum, p) => sum + p.z, 0) / n;

  let covariance = 0;
  let timeSpread = 0;
  for (const point of clean) {
    const dt = point.t - meanT;
    covariance += dt * (point.z - meanZ);
    timeSpread += dt * dt;
  }
  if (timeSpread === 0) throw new Error("Observation times must not all be equal.");

  const rate = covariance / timeSpread;
  const logInitial = meanZ - rate * meanT;

  return {
    rate,
    logInitial,
    predictLog(t) {
      if (!Number.isFinite(t)) throw new Error("Prediction time must be finite.");
      return logInitial + rate * t;
    },
    predict(t) {
      const logValue = this.predictLog(t);
      if (logValue > Math.log(Number.MAX_VALUE)) return Infinity;
      return Math.exp(logValue);
    },
  };
}
\`\`\`

### Correctness invariant

After the loop has processed any first $j$ observations, \`covariance\` equals the sum of $dt\\cdot (z-meanZ)$ for exactly those $j$, and \`timeSpread\` equals their sum of $dt^{2}$. When all points are processed, the returned quotient is the least-squares slope obtained by differentiating the sum of squared log residuals and setting its derivative to zero.

The validation prevents $\\ln(0)$, $\\ln(negative)$, nonfinite propagation, and division by zero when all times match. Returning \`Infinity\` on representational overflow is deliberate; \`predictLog\` remains usable for comparisons even when the original-scale number cannot fit in JavaScript’s floating-point range.

For $n$ observations, fitting takes time proportional to $n$. It creates one cleaned array of length $n$; a two-pass streaming variant could use constant auxiliary storage. Predictions take constant time.

## 6. Convert rate into interpretable time

When $r>0$, doubling time $D$ solves $e^{rD}=2$, so

$D=\\ln 2/r$.

When $r<0$, half-life $H$ solves $e^{rH}=1/2$, so

$H=\\ln(1/2)/r=-\\ln 2/r$, which is positive.

If $r=0$, the model is constant: doubling time and half-life are not finite. Never divide by a rate before checking this boundary.

For the culture rate $r\\approx 0.18326 per hour$, doubling time is $\\ln 2/r\\approx 3.782 hours$.

## 7. Audit residuals on two scales

For each observation, calculate:

- original residual $e_{i}=y_{i}-ŷ_{i}$;
- ratio $y_{i}/ŷ_{i}$ when prediction is positive;
- log residual $\\ln y_{i}-\\ln ŷ_{i}$.

A sequence of positive residuals followed by negative residuals suggests curvature the exponential missed, perhaps saturation. Residual magnitude increasing with the fitted level may support relative-error modelling, though it does not prove it. One extreme time point can strongly influence a slope; refit without it as a sensitivity check and report both results.

Compare against a linear baseline on the actual decision metric. If forecasts are judged in original units, report original-scale error for both models even if the exponential was fit in log space.

## 8. Common model failures

### Unbounded extrapolation

Positive exponential growth eventually exceeds any fixed capacity. Population, adoption, and epidemic processes often slow through resource limits or susceptible depletion. A short early interval may look exponential while long-run behavior is logistic or otherwise constrained.

### Changing rate

A single $r$ assumes a stable multiplicative mechanism. Policy changes, treatment, seasonal conditions, or instrument recalibration can create different regimes. Plot log observations against time: systematic bends or segmented slopes challenge constant rate.

### A hidden background

Data of form $B+A e^{rt}$ do not become linear after simply logging $y$ because $\\ln(B+A e^{rt})$ does not split across addition. Guessing a background and subtracting it changes the inferred rate; treat $B$ as a parameter requiring evidence.

### Rounding and zeros

A recorded zero may mean “below detection,” not true mathematical zero. Replacing it by an arbitrary tiny positive number can dominate a log fit. Document censoring and use an appropriate measurement model rather than an invisible patch.

### Percent language

Growing by 20% then falling by 20% does not return to the start: multipliers $1.2\\times 0.8=0.96$. Percentage changes combine multiplicatively.

## 9. Audit checklist

1. Plot values versus time and log-values versus time.
2. Compare differences and ratios at equal time gaps.
3. State units, time origin, domain, and positivity assumptions.
4. Fit the model, preserving full precision internally.
5. Report $A$, $r$, and doubling time or half-life when defined.
6. Show predictions and residuals in original and log scales.
7. Compare a linear baseline.
8. Test sensitivity to one point or one plausible time window.
9. Identify a mechanism that could break constant-rate behavior.
10. Restrict conclusions to the supported interval.

## Exercises with hints and complete solutions

### Exercise 1
<a id="exponential-model-audit-ex-1"></a>

A quantity is 50 at day 0 and 90 at day 6. Find exact $r$ and predict day 9.

<details><summary>Hint 1</summary>

Use the ratio of the two positive observations.

</details>
<details><summary>Hint 2</summary>

Take its logarithm and divide by elapsed time; retain the exact expression for prediction.

</details>
<details><summary>Solution</summary>

$r=\\ln(90/50)/6=\\ln(1.8)/6$. Prediction is $50 exp[9ln(1.8)/6]=50(1.8)^{3/2}\\approx 120.75$.

</details>

### Exercise 2
<a id="exponential-model-audit-ex-2"></a>

A medicine follows $M(t)=120e^{-0.18t}$ mg. Find its half-life and amount at $t=5$ hours.

<details><summary>Hint 1</summary>

Set the exponential multiplier equal to one half.

</details>
<details><summary>Hint 2</summary>

The exponent is dimensionless; express the resulting time in hours.

</details>
<details><summary>Solution</summary>

$H=\\ln 2/0.18\\approx 3.85$ hours. $M(5)=120e^{-0.9}\\approx 48.79$ mg.

</details>

### Exercise 3
<a id="exponential-model-audit-ex-3"></a>

Decide which exact pattern is linear or exponential: A: 3,8,13,18; B: 3,6,12,24.

<details><summary>Hint 1</summary>

Compare successive differences and successive ratios separately.

</details>
<details><summary>Hint 2</summary>

One constant difference indicates an arithmetic progression; one positive constant ratio indicates a geometric progression.

</details>
<details><summary>Solution</summary>

A is linear with common difference 5. B is exponential with common ratio 2.

</details>

### Exercise 4
<a id="exponential-model-audit-ex-4"></a>

Explain why log-linear fitting rejects the observation $(4,0)$.

<details><summary>Hint 1</summary>

Inspect the domain of the real logarithm.

</details>
<details><summary>Hint 2</summary>

A zero observation may signal censoring or failure of the chosen positive model.

</details>
<details><summary>Solution</summary>

The real logarithm of zero is undefined. More importantly, a positive basic exponential cannot produce zero; the observation needs investigation or a different measurement/model structure.

</details>

### Exercise 5
<a id="exponential-model-audit-ex-5"></a>

Observed values are 100, 125, 150 at equal times. Compare differences and ratios; which simple structure is exact?

<details><summary>Hint 1</summary>

Compute both increments before fitting.

</details>
<details><summary>Hint 2</summary>

An exponential needs the same multiplier at every equal time gap.

</details>
<details><summary>Solution</summary>

Differences are 25 and 25, exactly linear. Ratios 1.25 and 1.2 are not constant.

</details>

### Exercise 6
<a id="exponential-model-audit-ex-6"></a>

A fitted rate is zero. What are the model, doubling time, and half-life?

<details><summary>Hint 1</summary>

Substitute a zero rate in the original model.

</details>
<details><summary>Hint 2</summary>

Do not divide by that rate in the time formulas.

</details>
<details><summary>Solution</summary>

$E(t)=A$ is constant. Neither doubling nor halving occurs in finite time, so those times are undefined/infinite rather than $ln2/0$ calculations.

</details>

### Exercise 7
<a id="exponential-model-audit-ex-7"></a>

Show that shifting every time by a constant changes $A$ but not $r$.

<details><summary>Hint 1</summary>

Write the old time in terms of the shifted time.

</details>
<details><summary>Hint 2</summary>

Separate the constant factor from the exponential depending on the new time.

</details>
<details><summary>Solution</summary>

Let new time $u=t-c$. Then $Ae^{rt}=Ae^[r(u+c)]=(Ae^{rc})e^{ru}$. The intercept factor changes to $Ae^{rc}$ while the coefficient of time remains $r$.

</details>

### Exercise 8
<a id="exponential-model-audit-ex-8"></a>

Give one dataset on which a two-point exponential fits perfectly yet fails at the middle point.

<details><summary>Hint 1</summary>

Choose endpoints that determine a simple exponential.

</details>
<details><summary>Hint 2</summary>

Then choose a middle observation different from its forced prediction.

</details>
<details><summary>Solution</summary>

Times 0,1,2 with values 1,100,4. Endpoints determine $y=2ᵗ$, which predicts 2 at the middle, not 100. Exact endpoint fit says nothing about the intervening mechanism.

</details>

## Report template

End your analysis with: “Over [time interval], the fitted model is [formula with units]. It represents a constant multiplicative rate of [rate], corresponding to [doubling/half-life]. Its [original/log] residuals show [pattern]. Compared with the linear baseline, [specific metric]. Extrapolation beyond [boundary] is vulnerable to [mechanism].” This wording keeps calculation, evidence, and limitation in one auditable claim.
`;export{e as default};