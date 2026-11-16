
# Uncertainty, Evidence, and Conditional Claims

## Dependencies and purpose

This chapter assumes elementary probability and statistics. It separates aleatory variability, epistemic uncertainty, scenario uncertainty, and model discrepancy, then connects each to an appropriate mathematical report.

## An uncertainty taxonomy

Let observations satisfy

$y_i=h(x_i,θ)+ε_i$,

while the state evolves as

$x_{t+1}=F(x_t,a_t,θ,w_t)+δ_t$.

Here $ε$ is measurement error, $w$ is modeled process variability, parameter $θ$ is incompletely known, and $δ$ is discrepancy between the state equation and reality. The symbols do not make these components identifiable. Without replicate measurements, calibration data, interventions, or structural restrictions, several components can mimic one another.

Scenario uncertainty concerns futures not assigned credible probabilities: a regulation change, a new pathogen variant, a bridge closure. Value uncertainty concerns how objectives trade outcomes. A probability distribution over sensor noise cannot absorb either one honestly.

## Conditional probability statements

A 95% interval can mean several things:

- a frequentist confidence procedure covers the fixed parameter in 95% of repeated datasets under the model;
- a Bayesian credible set has posterior probability 0.95 under a prior and likelihood;
- a predictive interval assigns probability 0.95 to a future observation under a conditional predictive law;
- a scenario band contains selected outputs but has no frequency interpretation.

State which one is used. A confidence interval is not automatically a probability statement about a realized fixed parameter. A Bayesian interval is not assumption-free. A prediction interval includes outcome variability as well as parameter uncertainty.

### Worked propagation

Let travel time be $T=D/V$, with fixed distance $D=100\,\mathrm{km}$ and uncertain speed $V$. If $V$ has mean near $50\,\mathrm{km/h}$ and standard deviation $5$, a first-order delta-method approximation uses derivative $-D/V²=-0.04\,\mathrm{h/(km/h)}$ at 50, giving time standard deviation about $0.2\,\mathrm{h}$. Because reciprocal transformation is nonlinear and speed must be positive, direct quantile transformation or simulation is preferable when variability is large.

## Dependence and aggregation

**Proposition 4.1 (sum variance).** For square-integrable random variables $X,Y$,

$\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y)$.

Adding standard deviations in quadrature assumes zero covariance. Common weather, demand surges, or shared equipment can create positive tail dependence. Estimated covariance is itself uncertain and can shift.

Worst-case bounds need a declared uncertainty set. If only means and variances are known, distribution-free inequalities such as Chebyshev are valid but often loose. A Gaussian tail calculation is sharper only if the Gaussian model is credible for the target, especially in tails.

## Calibration, sharpness, and decision value

For repeated probabilistic forecasts, calibration asks whether events assigned probability near $p$ occur about fraction $p$ in the relevant conditioning groups. Sharpness rewards concentrated forecasts, but only subject to calibration. Proper scoring rules such as log score or Brier score encourage honest probabilities under their assumptions.

A forecast can be calibrated and still useless if it never varies. A more accurate forecast can fail to improve decisions if the action threshold is far away. Evaluate the decision rule and costs, not probability estimates alone.

## Distribution shift

Training law $P$ and deployment law $Q$ may differ in covariates, outcomes conditional on covariates, selection, or action feedback. Importance weighting under covariate shift assumes $P(Y|X)=Q(Y|X)$ and overlap where $Q_X$ has support. If target cases occur where training probability is zero, weights cannot invent outcomes.

Stress tests should distinguish measured historical variation from constructed scenarios. Robustness over $Q$ in a mathematical set means only that set was checked. An unconstrained future admits no informative uniform guarantee.

## Model discrepancy

Suppose measurements are highly precise but a heat-transfer model omits radiation. Repeated readings shrink measurement error while leaving systematic residual structure. Fitting an extra parameter may absorb discrepancy and produce a confident but nonportable value. Diagnose residuals against time, scale, group, and operating regime; compare alternate mechanisms; validate externally when possible.

## Aleatory and epistemic are roles, not substances

**Aleatory** uncertainty is represented as variability within a model; **epistemic** uncertainty represents incomplete knowledge about quantities or model structure. The distinction depends on information and resolution. Molecular motion can be unresolved noise in a fluid model and a deterministic state in a molecular simulation. A service rate can be treated as fixed during one shift and as varying across staff or days.

Write conditioning information when it matters: $P(Y|θ,M,I)$, where $θ$ is parameter, $M$ model structure, and $I$ available information. A posterior distribution conditions on a prior and likelihood. A stress scenario may be a decision convention rather than a repeated-sampling probability.

### Uncertainty ledger

For each unknown, record:

| Quantity | Source | Representation | Dependence | Learnable from | Not included |
| --- | --- | --- | --- | --- | --- |
| sensor error | calibration and resolution | conditional law or bound | correlated drift | calibration replicates | model discrepancy |
| arrivals | process variation | point process | hour and day | timestamped records | policy feedback |
| parameter | finite data | interval, posterior, or profile | cross-parameter | observation likelihood | structural alternatives |
| road failure | scenario | named states or set | correlated with weather | engineering evidence | events outside set |
| objective weight | stakeholder value | range or alternatives | joint deliberation | decision process | moral legitimacy |

The last column prevents one interval from pretending to cover every uncertainty source.

## Conditional expectation and variance decomposition

For square-integrable $Y$ and information $X$,

$E[Y]=E[E[Y|X]]$,

$\operatorname{Var}(Y)=E[\operatorname{Var}(Y|X)]+\operatorname{Var}(E[Y|X])$.

To prove the second identity, write

$Y-E[Y]=(Y-E[Y|X])+(E[Y|X]-E[Y])$.

After squaring, the cross term has expectation zero because the first factor has conditional mean zero given $X$, while the second is a function of $X$. This is a probabilistic decomposition, not a causal one.

### Worked demand mixture

Suppose demand is conditionally Poisson with mean 10 on ordinary days and 30 on event days; event probability is 0.1. Then

$E[D]=0.9(10)+0.1(30)=12$.

Conditional Poisson variance equals conditional mean, so the average within-day-type variance is 12. Variance of conditional means is

$0.9(10-12)²+0.1(30-12)²=36$.

Total variance is 48. A single Poisson law of mean 12 imposes variance 12 and misses heterogeneity. The calculation does not prove the two-type model; it exposes the consequence of one declared source.

For a future outcome with uncertain parameters, predictive variance similarly contains outcome variability conditional on parameters and variability of the conditional mean across parameters. Plug-in prediction at $\hat{θ}$ drops the latter. Both terms can still omit discrepancy.

## Interval derivations and meanings

If $Y_1,…,Y_n$ are iid normal with known standard deviation $σ$,

\[Z=(\bar{Y}-μ)/(σ/\sqrt{n})\]

is standard normal. Therefore procedure

\[\bar{Y} ± 1.96σ/\sqrt{n}\]

covers fixed $μ$ in 95% of repeated samples. After data are observed, endpoints are fixed; the 95% statement describes the procedure under the model.

For an independent future observation,

$Y_{\mathrm{new}}-\bar{Y} \sim \operatorname{Normal}(0,σ²(1+1/n))$.

Its predictive interval is wider because it includes new-outcome variability as well as uncertainty in the mean. Unknown $σ$, dependence, selection, small-sample nonnormality, and model choice change these derivations.

### Delta method with covariance

If estimator $\hat{θ}$ has approximate covariance $Σ_θ$, then for scalar $g$,

$\operatorname{Var}(g(\hat{θ}))≈∇g(θ)^{\mathsf T}Σ_θ∇g(θ)$.

Off-diagonal terms matter. Compensating fitted parameters can have negative covariance and yield a stable in-range prediction despite wide marginal intervals. Shared positive error can amplify an aggregate. The approximation is local and inherits the estimator's probability model.

Propagate uncertainty to loss differences and action thresholds, not only an intermediate prediction. A modest interval can cross a nearly tied decision boundary.

## Dependence, tails, and partial information

Two backup links can each fail with probability 0.1. Under independence, both fail with probability 0.01. With one power supply, simultaneous-failure probability can approach 0.1. Marginals do not determine joint reliability.

If only nonnegative loss mean is known, Markov's inequality gives

$P(L≥a)≤E[L]/a$.

If variance is known, Chebyshev gives

$P(|X-E[X]|≥kσ)≤1/k²$.

These protect against every law with the stated moments and can be loose. A Gaussian calculation is sharper because it adds shape assumptions. Which is useful depends on evidence and decision, not on calling one “conservative.”

Tail dependence can change while ordinary correlation looks modest. Report joint stress scenarios and tail severity when extremes matter. Covariance is a second-moment summary, not a complete dependence model.

## Scenarios, distributions, and ambiguity sets

A scenario table need not have probabilities. It can deliberately include ordinary conditions, correlated surge and closure, and sensor loss. Report each outcome without invented likelihood.

If probabilities $p_s$ are defensible, expected loss is $Σp_sL(a,s)$. A robust rule may minimize $\max_{s∈S}L(a,s)$. Distributionally robust analysis optimizes across a set of laws. Each moves uncertainty into a different object: probabilities, scenario set, or ambiguity set.

### Worked disagreement

| Action | ordinary | surge | closure |
| --- | ---: | ---: | ---: |
| A | 2 | 8 | 20 |
| B | 4 | 6 | 12 |
| C | 7 | 7 | 8 |

Worst-case losses are 20, 12, and 8, so C is minimax. Under probabilities $(0.9,0.09,0.01)$, expected losses are 2.72, 4.26, and 7.01, so A minimizes expectation. The calculations are both correct and answer different conditional questions. Evidence must defend the scenario set or probabilities.

## Proper scores and conditional calibration

For binary $Y$ and forecast $p$, Brier loss is $(p-Y)²$. If $q=P(Y=1|I)$, conditional expected loss is

$q(p-1)²+(1-q)p²=(p-q)²+q(1-q)$.

It is uniquely minimized at $p=q$; the score is proper. This mathematical fact does not make empirical estimates calibrated.

Overall calibration can hide subgroup failure. A forecast with 10% events overall may face 5% at one site and 30% at another. Inspect calibration by relevant time, group, and forecast level with sampling uncertainty. A finite reliability diagram is evidence, not proof of the true conditional law.

Forecast improvement matters to a decision only near regions where actions differ. A sharper forecast far from all decision thresholds can have negligible operational value.

## Importance weighting and its boundary

Under covariate shift, assume $P(Y|X)=Q(Y|X)$ and target covariate law is absolutely continuous with respect to training law. For loss $l$,

$E_Q[l]=E_P[(q_X(X)/p_X(X))l]$.

The density identity follows by substituting joint laws and canceling the shared conditional. If $p_X=0$ where $q_X>0$, no weight exists: target outcomes are unsupported. Very large weights create high variance.

Changed conditional outcomes, label definitions, policy feedback, or sensor revisions violate covariate shift. Computing weights successfully does not test the assumption.

## Calibration-discrepancy confounding

Suppose

$y(x)=θx+δ(x)+ε$.

If discrepancy $δ(x)=cx$, observations identify only $θ+c$. Smaller measurement noise cannot separate physical slope from discrepancy slope. Omitting discrepancy assigns all slope to $θ$; a flexible discrepancy prior allocates it partly by prior scale. Different experiments or mechanistic restrictions are needed for physical interpretation.

Variation among several models is not automatically total uncertainty. Models can share data, code, assumptions, and omitted mechanisms. Agreement among dependent models may reveal only shared structure. Document which differences the ensemble spans and which it cannot.

## Evidence ladder and stopping rule

Place every uncertainty claim on an evidence ladder:

1. probability normalization and mathematical consistency;
2. mechanism or sampling-design justification;
3. parameter calibration on designated data;
4. residual and simulation checks;
5. frozen held-out calibration in deployment-shaped data;
6. external time, site, or regime validation;
7. monitored deployment with predefined fallback.

Not every low-consequence use requires the top rung. High-consequence use needs stronger independent evidence and governance beyond this mathematics. At every rung state what would stop or narrow the claim.

## Information has value only through an available decision

Suppose there are finitely many actions, their losses are integrable, and an observation is obtained before an action is selected. Without the observation, the smallest expected loss is the minimum over actions of their unconditional expectations. With it, the smallest expected loss is the expectation of the minimum conditional expected loss. The latter cannot be larger: for any fixed action, the conditional minimum is at most that action's conditional expected loss; take expectations and then minimise over the fixed action. This proves nonnegative value of free information under the assumed model.

The conclusion does not say that every accurate sensor is worth buying. Subtract its cost, include any delay or changed action set, and account for whether its likelihood is understood. If every possible observation leaves the same action optimal, information has zero decision value even when it greatly narrows a parameter interval.

**Worked example: a binary precaution.** An adverse event has probability one fifth. Acting costs three whether or not the event occurs; not acting costs ten if it occurs and zero otherwise. Without information, expected loss two makes inaction preferable. Perfect knowledge allows action only when the event will occur, reducing expected loss to three fifths. The gross information value is seven fifths. A sensor costing more than that cannot be justified by this particular loss model even if perfect. A different valuation of the adverse event changes the calculation, so the threshold is conditional on both probabilities and costs.

## Several intervals need a joint interpretation

Ten separately constructed intervals with nominal coverage 95 percent do not automatically form a joint 95 percent statement. The event that all intervals cover is the complement of the union of their failures. The union bound gives joint coverage at least one minus the sum of the individual failure probabilities, without requiring independence. To guarantee at least 95 percent joint coverage for ten targets by this simple route, construct each interval with failure probability at most one half percent.

This guarantee can be conservative, but it exposes the logical difference between marginal and simultaneous claims. Selecting only the narrowest interval or the most striking result after viewing all outcomes introduces another selection issue. The intended family of statements and the selection rule should be part of the uncertainty report. A collection of individually correct probability statements does not justify every narrative assembled from them afterward.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="uncertainty-evidence-claims-ex-1"></a>

Classify uncertainty in a queue's arrival variability, an estimated rate, an unmodeled lunch surge, and a possible building closure.

<details>
<summary>Hint 1</summary>

Ask whether the uncertainty concerns events, fitted values, omitted mechanisms or the scenario set.

</details>
<details>
<summary>Hint 2</summary>

One numerical range can represent several different kinds of evidence.

</details>
<details>
<summary>Full solution</summary>

Process variability, parameter uncertainty, model discrepancy/nonstationarity, and scenario uncertainty respectively.

</details>

### Exercise 2
<a id="uncertainty-evidence-claims-ex-2"></a>

Two demands each have variance 9 and covariance 6. Find variance of total demand and diagnose the independence answer.

<details>
<summary>Hint 1</summary>

Expand the variance of a sum including the covariance term.

</details>
<details>
<summary>Hint 2</summary>

Independence would remove a term that the question explicitly supplies.

</details>
<details>
<summary>Full solution</summary>

$9+9+2×6=30$; assuming independence would give 18 and understate shared movement.

</details>

### Exercise 3
<a id="uncertainty-evidence-claims-ex-3"></a>

Explain why a robust plan over demand interval $[80,120]$ says nothing about demand 150.

<details>
<summary>Hint 1</summary>

Read the quantifier in a robust guarantee.

</details>
<details>
<summary>Hint 2</summary>

The declared uncertainty set determines which demand values the bound covers.

</details>
<details>
<summary>Full solution</summary>

Robustness is quantified over a declared set. The proof's universal quantifier stops at 120; it cannot be extended by rhetoric.

</details>

### Exercise 4
<a id="uncertainty-evidence-claims-ex-4"></a>

Derive the law of total variance and explain why it is not a causal decomposition.

<details>
<summary>Hint 1</summary>

Write Y minus its unconditional mean as two centered terms.

</details>
<details>
<summary>Hint 2</summary>

Conditioning makes their cross term vanish, without assigning either term a causal role.

</details>
<details>
<summary>Full solution</summary>

Expand the centered sum. The residual $Y-E[Y|X]$ has conditional mean zero, so its cross term with the $X$-measurable conditional mean vanishes. The identity describes variance under a joint law, not effects of changing $X$.

</details>

### Exercise 5
<a id="uncertainty-evidence-claims-ex-5"></a>

Explain why a future-observation interval is wider than a mean confidence interval in the known-normal model.

<details>
<summary>Hint 1</summary>

A new observation has noise in addition to uncertainty in the fitted mean.

</details>
<details>
<summary>Hint 2</summary>

Write both variances with the same sample size and known observation variance.

</details>
<details>
<summary>Full solution</summary>

Mean uncertainty contributes $σ²/n$; a new observation adds its own $σ²$, so difference variance is $σ²(1+1/n)$, larger than $σ²/n$.

</details>

### Exercise 6
<a id="uncertainty-evidence-claims-ex-6"></a>

Two component demands each have variance 4. Find total variance when covariance is 0, 3, and -2.

<details>
<summary>Hint 1</summary>

Use the same sum-variance identity for all three covariance values.

</details>
<details>
<summary>Hint 2</summary>

Negative covariance can reduce aggregate uncertainty without changing either marginal variance.

</details>
<details>
<summary>Full solution</summary>

$\operatorname{Var}(X+Y)=4+4+2\operatorname{Cov}$, giving 8, 14, and 4 respectively.

</details>

### Exercise 7
<a id="uncertainty-evidence-claims-ex-7"></a>

Verify the worst-case and expected-loss choices in the three-action table.

<details>
<summary>Hint 1</summary>

Compute one maximum loss and one probability-weighted loss per action.

</details>
<details>
<summary>Hint 2</summary>

Check that the weights and scenarios are the ones declared in the table.

</details>
<details>
<summary>Full solution</summary>

Row maxima are 20, 12, 8, so C is minimax. Weighted row sums are 2.72, 4.26, and $0.9(7)+0.09(7)+0.01(8)=7.01$, so A minimizes expected loss under those probabilities.

</details>

### Exercise 8
<a id="uncertainty-evidence-claims-ex-8"></a>

State the assumptions for covariate-shift importance weighting and construct an overlap failure.

<details>
<summary>Hint 1</summary>

Express the target expectation as an integral under the source law.

</details>
<details>
<summary>Hint 2</summary>

The density ratio is undefined where the target has mass and the source has none.

</details>
<details>
<summary>Full solution</summary>

Require shared $P(Y|X)=Q(Y|X)$ and target support contained in training support. If a target site has covariate combinations absent in training, $p_X=0$ and the ratio cannot identify its risk.

</details>

### Exercise 9
<a id="uncertainty-evidence-claims-ex-9"></a>

A 90% interval covers 90 of 100 sequential outcomes. Give four reasons this count does not establish conditional calibration.

<details>
<summary>Hint 1</summary>

An overall coverage count averages across times and subgroups.

</details>
<details>
<summary>Hint 2</summary>

Dependence, selection, changing width and systematic conditional failures can be hidden by that average.

</details>
<details>
<summary>Full solution</summary>

Outcomes may be dependent; coverage may fail by group or forecast level; the interval may have been tuned on these cases; and 100 outcomes have sampling uncertainty. Severity and decision relevance are also untested.

</details>

### Exercise 10
<a id="uncertainty-evidence-claims-ex-10"></a>

Prove conditional Brier risk is minimized at the conditional event probability.

<details>
<summary>Hint 1</summary>

Condition on X and expand the squared error as a quadratic in the proposed probability.

</details>
<details>
<summary>Hint 2</summary>

Complete the square around the true conditional event probability.

</details>
<details>
<summary>Full solution</summary>

Expanding gives $(p-q)²+q(1-q)$, whose only $p$-dependent term is nonnegative and uniquely zero at $p=q$.

</details>

### Exercise 11
<a id="uncertainty-evidence-claims-ex-11"></a>

A posterior is narrow under a strong prior while the likelihood profile is flat. What claim is licensed?

<details>
<summary>Hint 1</summary>

Separate posterior concentration from information in the likelihood.

</details>
<details>
<summary>Hint 2</summary>

The prior can choose one member of a data-equivalent family.

</details>
<details>
<summary>Full solution</summary>

Report posterior concentration conditional on the prior, the flat likelihood direction, and prior sensitivity. Do not say the data measured that parameter precisely.

</details>

### Exercise 12
<a id="uncertainty-evidence-claims-ex-12"></a>

Explain why model-ensemble agreement can coexist with shared bias.

<details>
<summary>Hint 1</summary>

Ask whether ensemble members share observations and modeling assumptions.

</details>
<details>
<summary>Hint 2</summary>

Agreement has limited diagnostic value when a common omitted mechanism affects every member.

</details>
<details>
<summary>Full solution</summary>

Models can share the same omitted feedback, biased data, or observation map. Their errors are dependent, so agreement spans only their chosen differences and can miss common discrepancy.

</details>

## Project checkpoint

Extend the Chapter 1 contract with an uncertainty ledger. For every unknown, record its unit, source, dependence assumptions, representation, and whether the action is stable across its plausible range.

## Summary

Random variability, fitted-parameter uncertainty, discrepancy and scenario uncertainty require different claims. Dependence and overlap are mathematical assumptions that must remain visible. Sensitivity next asks which perturbations matter for the chosen output or decision.
