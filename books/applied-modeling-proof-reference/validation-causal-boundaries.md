
# Validation, Discrepancy, and Causal Boundaries

## Dependencies and purpose

This chapter assumes probability, regression concepts, and the model-chain language of Chapter 1. It distinguishes verification, calibration, predictive validation, and causal identification.

## Four questions that should not share one verb

1. **Code verification:** did the implementation solve the specified equations?
2. **Solution verification:** how much numerical error remains in this run?
3. **Calibration:** which parameter values make selected outputs agree with selected data?
4. **Validation:** does the calibrated model predict or support decisions adequately for a stated use?

A model can be implemented perfectly and represent the world poorly. It can fit calibration data exactly and fail out of sample. The labels preserve where evidence enters.

## Verification tools

Use exact small cases, invariants, dimensional checks, manufactured solutions, alternate implementations, and refinement studies. If a numerical method claims order $p$, errors on grids $h,h/2,h/4$ should approach ratio $2^p$ only in the asymptotic regime and when reference error is smaller.

A conservation residual is more informative than visual smoothness. For a flow network, verify capacity and node balance exactly. For an ODE, compare integrated source-minus-sink with state change. For a portfolio engine, recompute mean and covariance quadratic form independently.

## Predictive validation design

Freeze the complete procedure before final testing: preprocessing, feature selection, parameter tuning, stopping rules, and uncertainty calculation. Choose a split matching use—future time, new site, new individual, or new operating regime. Repeated tuning on a test set makes it validation data.

Aggregate error can conceal structure. Plot or tabulate residuals against time, predicted magnitude, group, and controls. Check calibration of uncertainty statements. Report sampling uncertainty and dependence; clustered observations are not independent replicas.

## Model discrepancy

Write observation as

$y=h(x,θ)+δ(x)+ε$.

Without restrictions, discrepancy $δ$ and parameter $θ$ can trade off, undermining physical interpretation. Flexible discrepancy may improve prediction while making parameters less identifiable. Omitting discrepancy can yield overconfident biased parameters. Use external measurements, multiple experiments, mechanistic constraints, and sensitivity analysis; do not claim a universally identifiable decomposition.

## Causal estimands

For binary action $A$, let potential outcomes be $Y(1),Y(0)$. Average causal effect is $E[Y(1)-Y(0)]$ for a named population and horizon. Only one potential outcome is observed per unit. Identification needs a design or assumptions.

Under conditional exchangeability $(Y(1),Y(0)) ⟂ A \mid X$, positivity $0<P(A=1\mid X)<1$, and consistency, the g-formula identifies

$E_X[E(Y|A=1,X)-E(Y|A=0,X)]$.

These assumptions are not proved by fitting. Unmeasured confounding violates exchangeability; missing action levels violate positivity; ill-defined versions of treatment violate consistency.

## Interference and strategic response

In epidemics, traffic, markets, and networks, one unit's action affects another's outcome. Simple no-interference potential outcomes are inadequate. Define cluster, exposure mapping, network intervention, or equilibrium response. A policy may change the data-generating process on which its prediction model was trained.

### Worked staffing association

Busy days receive more staff and still have longer waits. Regressing waits on staff alone can suggest a harmful association because anticipated demand affects both. A queue model can derive conditional wait under a specified arrival rate; a causal effect of staffing needs assignment variation or adjustment that accounts for demand and policy. If adding staff changes arrivals, service mix, or routing, even the queue mechanism must be updated.

## Validation domains

Define an applicability domain by ranges of dimensionless groups, populations, sensor versions, controls, and regimes. Extrapolation distance in raw units can be misleading; a dimensionless parameter may cross a bifurcation while raw inputs change modestly.

Predefine a fallback when monitoring detects shift: abstain, revert to a safe baseline, request review, or gather more data. Monitoring without an action threshold is observation, not governance.

## A predictive claim has a unit of evaluation

**Definition 7.1 (target risk).** Fix the fitted prediction rule $f$, the loss function $\ell$, and a probability law $P$ for a future observational unit $(X,Y)$. Its target risk is $R_P(f)=E_P[\ell(f(X),Y)]$ when this expectation exists. The symbol $P$ includes the population, time horizon and measurement process. A row in a spreadsheet need not be an independent observational unit. Ten readings from each of twenty machines give two hundred rows but only twenty independently sampled machines under a machine-level sampling design.

If the intended use is predicting a new machine, validation should hold out machines. If it is predicting a future reading from a known machine, a temporal split can answer the more relevant question. Neither split is intrinsically superior: they estimate different risks. Preprocessing learned from all rows can leak held-out information even when the response column is hidden. Treat imputation, normalisation, feature selection, early stopping and threshold choice as parts of the fitted procedure.

**Proposition 7.2 (finite held-out mean).** Suppose the rule $f$ is fixed independently of held-out observations $Z_1,\ldots,Z_n$, which are independent with common law $P$. If their losses have finite variance $\sigma^2$, the mean loss $\widehat R=n^{-1}\sum_i\ell(f(X_i),Y_i)$ has expectation $R_P(f)$ and variance $\sigma^2/n$.

*Proof.* Condition first on the fixed rule. Linearity of expectation gives the mean claim. Independence makes the cross-covariances vanish, so the variance of the sum is $n\sigma^2$, and division by $n^2$ gives the result. If the rule itself is random but independent of the held-out data, this reasoning holds conditional on the rule. Unconditional variance can also contain variability due to fitting. $\square$

Selecting the rule with the smallest held-out mean destroys the premise that the selected rule was fixed independently of those losses. The proposition then applies separately to each prespecified rule, but does not make the selected minimum an unbiased estimate of its future risk. This is the reason for reserving an untouched final evaluation, rather than a ritual about names of data partitions.

**Worked example (the optimistic minimum).** Suppose two rules have identical true risk $r$, and their reported held-out errors are $r+E_1$ and $r+E_2$, with mean-zero integrable errors. The selected reported error is
$$
r+\min(E_1,E_2)=r+\frac{E_1+E_2-|E_1-E_2|}{2}.
$$
Its expectation is $r-E|E_1-E_2|/2$, below $r$ unless the two errors agree almost surely. A larger evaluation sample reduces sampling variation but does not turn repeated adaptive selection into independent confirmation. The example isolates selection optimism without requiring a particular distribution for the errors.

## Verification can bound only part of a discrepancy

**Worked example (three errors in a cooling prediction).** A model predicts $T(t)=20+60e^{-0.1t}$ at time $t=10$, while a numerical method returns an approximation $\widehat T$. Suppose a proved discretisation and rounding estimate gives $|\widehat T-T(10)|\le0.02$ degrees and the sensor's recorded value is $y=43.0$ with a stated measurement bound of $0.1$ degrees. The mathematical prediction is approximately $42.073$, so the observed discrepancy is about $0.927$ degrees. Numerical error alone cannot explain it. Even after allowing the sensor bound and numerical bound, at least about $0.807$ degrees remains between the computed prediction and a compatible measured temperature.

This does not identify the cause. The ambient temperature may vary, the sensor may measure a different physical quantity, the cooling coefficient may be miscalibrated, or the sensor bound may be wrong. An error ledger separates these alternatives. Re-running the same solver with a smaller step can tighten its $0.02$ bound, but cannot by itself choose among the physical explanations.

More generally, if an exact mathematical prediction $m$ is approximated by $\widehat m$ with $|m-\widehat m|\le\varepsilon_{num}$ and the latent measured quantity $z$ obeys $|z-y|\le\varepsilon_{obs}$, the triangle inequality gives
$$
|m-z|\ge\max\{0,|\widehat m-y|-\varepsilon_{num}-\varepsilon_{obs}\}.
$$
The bound states incompatibility under declared deterministic error limits. Confidence intervals are probabilistic statements and need a corresponding joint coverage argument before being used as deterministic limits.

## Why adjustment identifies an effect only under hypotheses

**Theorem 7.3 (finite-covariate adjustment formula).** Let $X$ take finitely many values in a target population. Suppose potential outcomes $Y(0),Y(1)$ are integrable, observed outcomes obey consistency $Y=Y(A)$, and for every stratum with $P(X=x)>0$ both actions have positive probability. If $Y(a)$ is conditionally independent of $A$ given $X$ for each action $a$, then
$$
E[Y(1)-Y(0)]=\sum_x P(X=x)\{E[Y\mid A=1,X=x]-E[Y\mid A=0,X=x]\}.
$$
*Proof.* By total expectation, $E[Y(a)]=\sum_xP(X=x)E[Y(a)\mid X=x]$. Conditional independence lets us add the condition $A=a$ without changing each conditional mean. Positivity ensures this conditional mean is defined on every target stratum. Consistency then identifies it with $E[Y\mid A=a,X=x]$. Subtract the expressions for the two actions. $\square$

The proof explains exactly where each assumption enters. An accurate regression does not establish the conditional independence step. A missing action in one target stratum prevents the corresponding substitution. Interference can make $Y(a)$ inadequate because the outcome depends on other units' actions as well.

**Worked example (a staffing reversal).** There are equally many quiet and busy days. On quiet days, mean wait is 2 minutes without extra staff and 1 minute with them. On busy days the corresponding means are 10 and 8 minutes. Suppose extra staff are assigned on 10% of quiet days and 90% of busy days. The observed staffed mean is $0.1(1)+0.9(8)=7.3$ minutes, while the unstaffed mean is $0.9(2)+0.1(10)=2.8$ minutes. The crude association is therefore $+4.5$ minutes.

If assignment is conditionally exchangeable given day type and the other hypotheses hold, the target-population effect is instead $[ (1-2)+(8-10)]/2=-1.5$ minutes. The reversal is explained by different demand mixtures. If managers also use an unrecorded severity forecast, conditioning on the recorded day type alone may not satisfy exchangeability. The adjusted arithmetic remains correct for the written means while the causal interpretation needs the additional assumption.

## An applicability statement is part of the answer

A useful conclusion names its population, input range, operating regime, measurement version, loss and horizon. For example: “The procedure's mean absolute prediction error on held-out machines of the recorded type was 1.2 units over the next operating hour.” That statement does not establish an intervention effect, a new-machine-type guarantee or an error bound for every individual machine.

An applicability domain should use mathematically relevant coordinates. Reynolds number can separate flow regimes even when raw speed changes modestly; utilisation near one can make waiting times highly sensitive even when arrival rates change only slightly. Define which diagnostic would trigger a new fit, a revised model or abstention. A fallback rule is itself a decision model and must reflect the intended use.


## Model selection can consume the supposed holdout

A held-out dataset is useful because it has not influenced the choices being evaluated. If a modeller repeatedly compares alternatives on that same dataset and keeps the best, its outcomes now influence the selected model. Calling the final score a fresh evaluation does not undo that dependence. The problem can occur through informal choices of variables, stopping rules, transformations, or which subgroup results to display, even when the fitting algorithm never reads the holdout directly.

One remedy is to distinguish data used for fitting, data used for choosing among candidates, and data reserved for evaluating the completed procedure. With limited data, a nested resampling design can estimate the performance of a selection procedure, but its splitting unit must still match the deployment question. Records from the same person, site, or time episode may share information. Randomly separating their rows does not make those rows independent new environments.

**Worked application: future demand.** Suppose a forecasting model is intended for next month's arrivals. A random split across individual timestamps lets later observations inform seasonal features used to predict earlier ones, and may place near-duplicate episodes on both sides. A chronological evaluation instead fits using the information available before each prediction date. If the intended claim concerns a new facility, separate whole facilities as well. These designs answer different questions; a strong within-facility score cannot be relabelled as evidence for transfer to a new facility.

The resulting applicability statement should identify the prediction time, available inputs, population, and selection procedure. It should also record how many times the evaluation results influenced revisions. This is a description of the evidence used for a model claim, rather than a requirement to distrust every iterative modeling process. Iteration is productive when its effect on the final claim is made explicit.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="validation-causal-boundaries-ex-1"></a>

A PDE code matches one experimental curve after parameter fitting. Sort what is and is not verified or validated.

<details>
<summary>Hint 1</summary>

Distinguish matching fitted data from solving the written equations.

</details>
<details>
<summary>Hint 2</summary>

Independent physical observations and numerical error estimates answer separate questions.

</details>
<details>
<summary>Full solution</summary>

The match is calibration evidence. Code verification needs known identities or exact cases, numerical solution error needs a justified bound or refinement argument, and predictive validation needs unused observations representative of the intended use. None of these alone establishes that the mechanism is uniquely true.

</details>

### Exercise 2
<a id="validation-causal-boundaries-ex-2"></a>

Why can random row splitting fail for repeated patient measurements?

<details>
<summary>Hint 1</summary>

Identify the observational unit relevant to deployment.

</details>
<details>
<summary>Hint 2</summary>

Measurements from a single person can share latent information across both partitions.

</details>
<details>
<summary>Full solution</summary>

A new-patient task requires holding out patients: otherwise training can learn person-specific information that also appears in held-out rows. A within-patient future task instead needs a temporal design. The split must estimate the declared target risk; row count alone does not establish the number of independent units.

</details>

### Exercise 3
<a id="validation-causal-boundaries-ex-3"></a>

Give a positivity failure in a policy dataset.

<details>
<summary>Hint 1</summary>

Look for a target subgroup with only one observed action.

</details>
<details>
<summary>Hint 2</summary>

The missing conditional mean cannot be recovered by averaging the other action.

</details>
<details>
<summary>Full solution</summary>

If treatment is never given in a high-risk subgroup that has positive target-population mass, its treated conditional outcome is unobserved. Adjustment cannot identify that subgroup effect from the written data without further extrapolation or structural assumptions. Fitting a smooth regression across the gap does not establish the missing overlap.

</details>

### Exercise 4
<a id="validation-causal-boundaries-ex-4"></a>

Two fixed rules have unbiased risk estimates with errors E1 and E2. Show why the smaller estimate can be optimistic.

<details>
<summary>Hint 1</summary>

Express the minimum using a sum and an absolute difference.

</details>
<details>
<summary>Hint 2</summary>

Take expectations only after that identity.

</details>
<details>
<summary>Full solution</summary>

The identity is min(E1,E2)=(E1+E2-|E1-E2|)/2. Mean-zero errors imply expected minimum equal to minus half the expected absolute difference. Thus selecting the smallest reported error introduces downward bias unless the estimates agree almost surely. This calculation requires integrability but not independence between the two errors.

</details>

### Exercise 5
<a id="validation-causal-boundaries-ex-5"></a>

Independent held-out losses have variance 9. What is the standard deviation of their mean for n=100, and what changes if all losses are identical copies of one random variable?

<details>
<summary>Hint 1</summary>

Compute the variance of the sum including its covariances.

</details>
<details>
<summary>Hint 2</summary>

Perfect dependence leaves all one hundred copies carrying the same random fluctuation.

</details>
<details>
<summary>Full solution</summary>

Under independence the variance is 9/100 and the standard deviation is 0.3. With identical copies, the sample mean equals that single random variable, so its variance stays 9 and standard deviation stays 3. The nominal sample size does not determine uncertainty without a dependence model.

</details>

### Exercise 6
<a id="validation-causal-boundaries-ex-6"></a>

A discrepancy is 0.8 units, numerical error is bounded by 0.05 and measurement error by 0.1. Give a deterministic lower bound on model-data incompatibility.

<details>
<summary>Hint 1</summary>

Apply the reverse triangle inequality.

</details>
<details>
<summary>Hint 2</summary>

Allow both error bounds in the direction that reduces the discrepancy.

</details>
<details>
<summary>Full solution</summary>

The exact prediction and latent observed quantity must differ by at least max(0,0.8-0.05-0.1)=0.65 units. This conclusion is conditional on both error limits being valid simultaneously. It identifies a residual incompatibility, without attributing that incompatibility uniquely to a parameter, mechanism or measurement failure.

</details>

### Exercise 7
<a id="validation-causal-boundaries-ex-7"></a>

In the staffing example compute the causal effect if the target population is 80% quiet days, assuming adjustment is justified.

<details>
<summary>Hint 1</summary>

Use the within-stratum contrasts, not the observed staffed mixture.

</details>
<details>
<summary>Hint 2</summary>

Reweight the quiet and busy contrasts to the new target population.

</details>
<details>
<summary>Full solution</summary>

The quiet-day contrast is 1-2=-1 minute and the busy-day contrast is 8-10=-2 minutes. The target effect is 0.8(-1)+0.2(-2)=-1.2 minutes. This differs from the equally weighted effect because the estimand names a different population. Conditional exchangeability, consistency and target-stratum positivity remain necessary.

</details>

### Exercise 8
<a id="validation-causal-boundaries-ex-8"></a>

What fails in the adjustment proof if a staff manager uses an unrecorded severity forecast affecting waiting times?

<details>
<summary>Hint 1</summary>

Locate the step that changes a potential-outcome mean by adding the action condition.

</details>
<details>
<summary>Hint 2</summary>

Recorded day type need not block the manager information shared by action and outcome.

</details>
<details>
<summary>Full solution</summary>

The conditional exchangeability step can fail: E[Y(a)|X] need not equal E[Y(a)|A=a,X]. Accurate estimation of the observed conditional mean does not repair this missing equality. Recording the relevant forecast, using a suitable assignment design, or defending a different identifying strategy would be needed for a causal claim.

</details>

### Exercise 9
<a id="validation-causal-boundaries-ex-9"></a>

A model is evaluated only on one sensor version. Explain the claim needed before using it with a new sensor.

<details>
<summary>Hint 1</summary>

The measurement map is part of the target distribution.

</details>
<details>
<summary>Hint 2</summary>

An unchanged physical mechanism does not imply unchanged recorded inputs.

</details>
<details>
<summary>Full solution</summary>

The new sensor requires evidence about calibration, resolution, missingness and how its outputs enter the fitted procedure. A transfer claim must state which conditional relationship is preserved or be evaluated on representative new-sensor data. The previous held-out result remains evidence only for its declared measurement regime.

</details>

### Exercise 10
<a id="validation-causal-boundaries-ex-10"></a>

A conservation residual is zero but predictive error is large. Is this a contradiction?

<details>
<summary>Hint 1</summary>

Ask which mathematical object each diagnostic examines.

</details>
<details>
<summary>Hint 2</summary>

A conserved but misspecified model can be solved accurately.

</details>
<details>
<summary>Full solution</summary>

There is no contradiction. Zero residual can establish a balance in the implemented finite model, subject to arithmetic and reconstruction assumptions. Predictive error compares that model with a measured system under a target use. Omitted forcing, wrong parameters, a different observation map or distribution shift can produce poor predictions despite exact conservation.

</details>

## Chapter project

Write a matrix of intended claims, data, losses, numerical error allowances and fallback decisions. Each claim should name the population and horizon. For a proposed intervention, write an identifying equation and mark the exact assumption that licenses each equality. Preserve evidence that does not fit the model as well as evidence that does.

## Summary

Calibration chooses model parameters; numerical verification concerns the written equations; validation evaluates a stated use; causal identification connects an intervention estimand to observable information. None can substitute for the others. Optimisation next uses this claim discipline to distinguish a feasible decision and a bound from the adequacy of the decision model.
