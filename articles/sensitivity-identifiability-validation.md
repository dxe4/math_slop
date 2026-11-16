
# Can the Model Be Trusted? Sensitivity, Identifiability, and Validation

**Before reading.** Read [Differentiation in Euclidean Space](../books/proof-safe-real-analysis/differentiation-in-r-n.md), [Linear Systems and the Matrix Exponential](../books/ode-first-course/linear-systems-matrix-exponential.md) and [Statistical Experiments and Observation Laws](../books/principles-statistical-inference/statistical-experiments-and-observation-laws.md). These are preparation for the ideas used below.

A fitted curve can look convincing while its parameters are unknowable, its predictions are fragile, or its policy interpretation is unsupported. Three questions separate these failures:

1. **Sensitivity:** how does an output or decision respond when inputs change?
2. **Identifiability:** could the available observations distinguish the unknowns, even with perfect computation?
3. **Validation:** does independent evidence support the model for a stated use?

This deep dive assumes multivariable calculus, linear algebra, and basic statistics. It applies across inverse problems, biological models, operations, networks, finance, and signals.

## 1. Begin with the use, not the parameter

Write the model as

$$state x --observation H-\to data y --estimation E-\to \widehat{\theta} --prediction P-\to \widehat{z} --decision D-\to a$$

A parameter can be poorly identified while the in-range prediction is stable. Conversely, parameters can be measured precisely while extrapolated decisions are fragile. The target is therefore not “estimate everything.” It is “determine what the intended claim requires.”

For each output, name units, population, horizon, information time, and decision threshold. For each parameter, say whether it is a physical constant, effective summary, nuisance quantity, or control.

## 2. Local sensitivity and units

For differentiable output $z=f(\theta)$, the Jacobian

$$S_{ij}=\partial f_{i}/\partial\theta_{j}$$

approximates change:

$$\Delta z\approx S\Delta\theta$$

Absolute sensitivities carry units. A derivative of 10 metres per second is not directly comparable with 0.2 metres per kelvin. When inputs and outputs are nonzero, elasticity

$$E_{ij}=(\theta_{j}/f_{i})\partial f_{i}/\partial\theta_{j}$$

compares fractional changes.

### Worked queue sensitivity

**Worked example.**

For ideal M/M/1 system time

$W(\lambda,\mu)=1/(\mu-\lambda)$, $0\le \lambda<\mu$,

derivatives are

$$\partial W/\partial\lambda=1/(\mu-\lambda)^{2}$$

$$\partial W/\partial\mu=-1/(\mu-\lambda)^{2}$$

At $\lambda=8/hour$, $\mu=10/hour$, $W=0.5 hour$ and derivative magnitude is $0.25 hour^{2}$. Raising arrival rate by $0.1/hour$ changes modeled wait by about $0.025 hour=1.5 minutes$. At $\lambda=9.5$, $\mu=10$, derivative magnitude is 4 hour²; the same perturbation changes wait about 24 minutes locally. Sensitivity diverges at the stability boundary.

The derivative does not quantify rate uncertainty; it maps a supplied perturbation. It also inherits Poisson, exponential, independence, one-server, and steady-state assumptions.

## 3. Global sensitivity and interactions

Local derivatives can miss thresholds and nonmonotonicity. A one-at-a-time sweep can miss interactions: if $f(\theta_{1},\theta_{2})=\theta_{1}\theta_{2}$, changing either around zero appears unimportant while changing both matters.

Global strategies include:

- a factorial or space-filling grid over declared ranges;
- profiles that refit nuisance parameters;
- variance decomposition under a declared input distribution;
- worst-case analysis over a declared set;
- decision-switch maps showing where the selected action changes.

Each answers a different question. Variance-based importance depends on input probabilities and dependence. Worst-case importance depends on set geometry. A ranking without ranges and distribution is not portable.

## 4. Conditioning versus algorithmic stability

A mathematical problem is ill-conditioned when small input changes can create large exact-output changes. An algorithm is unstable when it adds unnecessary sensitivity.

For invertible $Ax=b$ and an approximate vector $\widehat{x}$, condition number $\kappa(A)=\lVert A\rVert\lVert A^{-1}\rVert$ bounds relative error under standard qualifications. Define the exact residual $r=b-A\widehat{x}$. Then the exact signed error is the expression below. A computed residual $\widetilde r=r+\eta$ has additional arithmetic error $\eta$: the exact error is $-A^{-1}(\widetilde r-\eta)$, with norm at most $\lVert A^{-1}\rVert(\lVert\widetilde r\rVert+\lVert\eta\rVert)$. A bound on $\eta$ is separate evidence; a small computed residual alone does not supply it.

$$\widehat{x}-x=-A^{-1}r$$

When $\lVert A^{-1}\rVert$ is large, small residual does not certify small forward error.

### Nearly repeated equations

Solve

$$x+y=2$$

$$x+1.001y=2.001$$

The solution is $(1,1)$. Change the second right side to $2.002$; the solution becomes $(0,2)$. The data changed by 0.001 but parameters changed by order one. Both equations mostly observe the sum; their difference weakly observes $y$.

Nondimensionalize before reporting conditioning. Rescaling a variable changes matrix entries and raw condition numbers. A backward-stable solver cannot manufacture information absent from a nearly singular problem.

## 5. Structural identifiability

Let ideal observation map be $h:\Theta\to Y$. Global identifiability means

$$h(\theta)=h(\theta') \Rightarrow \theta=\theta'$$

Local identifiability requires the implication only nearby. It depends on experiment design: observation times, inputs, sensors, and initial states.

### Sum example

If $h(a,b)=a+b$, observation 12 is compatible with every $(a,12-a)$. Repeating the same sum with less noise narrows uncertainty perpendicular to this line but cannot determine a point along it. Adding penalty $a^{2}+b^{2}$ selects $(6,6)$, yet that equality comes from the penalty, not the data.

### Jacobian condition

If $h:R^{p}\to R^{m}$ is continuously differentiable and $Dh(\theta_{0})$ has full column rank, a nonsingular $p$-output submap exists, and the inverse function theorem gives local identification. Rank deficiency reveals a first-order unobservable direction.

This is sufficient, not always necessary: $h(\theta)=\theta^{3}$ is injective even though derivative at zero vanishes. Local rank also does not ensure global uniqueness; $(\cos\theta,\sin\theta)$ repeats.

## 6. Practical identifiability

Even structurally unique parameters can be weakly determined by finite noisy data. For $y(t)=Ae^{-kt}$, observations over a tiny time window make changes in $A$ and $k$ compensate. Longer times may help distinguish decay but can fall below detection limits.

Useful diagnostics include:

- likelihood or loss profiles with nuisance parameters refitted;
- singular values of sensitivity/observation matrices;
- bootstrap or posterior shapes, not only symmetric standard errors;
- pairwise parameter contours;
- predictions along an equally fitting parameter set;
- alternate observation and discrepancy models.

A narrow optimizer Hessian interval can be misleading at boundaries, in multimodal problems, under weak identification, or after model selection.

## 7. Regularization does not create data

For inverse problem $y=Ax+\varepsilon$, Tikhonov estimate solves

$$\min_{x} \lVert Ax-y\rVert^{2}+\alpha\lVert Lx\rVert^{2}$$

If $\alpha>0$ and $\ker A\cap \ker L=\{0\}$, the objective is strictly convex and has a unique minimizer. This uniqueness comes from data plus penalty. When $A$ has a null space, the data still do not distinguish null-space components.

Different $L$ express different preferences: identity favors small norm, finite differences favor smoothness, and structural operators favor specific mechanisms. Compare forward residual, penalty, resolution, and results across plausible $\alpha$ and $L$. Do not call the smoothest reconstruction “what the sensor saw.”

## 8. Calibration is not validation

**Calibration** uses data to choose parameters or model settings. **Validation** uses relevant independent evidence to test intended claims. **Verification** checks that code solves intended equations. These roles should have different datasets or tests.

### Validation ladder

1. **Internal structure:** units, signs, conservation, positivity, and symmetries.
2. **Exact limits:** zero input, infinite capacity, no-noise, or analytically solvable case.
3. **Numerical verification:** refinement, residual, independent implementation, and error estimate.
4. **Held-out prediction:** freeze the entire procedure and test data matching deployment structure.
5. **External validation:** new time, site, population, sensor, or operating regime.
6. **Decision stress:** vary plausible inputs, objectives, and constraints; find action-switch boundaries.

A model passing one rung has not passed all later rungs.

## 9. Residuals as structured evidence

Aggregate mean squared error can conceal patterns. Tabulate residual versus time, predicted magnitude, group, location, and control setting. Autocorrelation suggests missing dynamics. Funnel shapes suggest nonconstant variance. Group bias suggests measurement or representation failure. Long runs of one sign can violate independence.

Residual patterns can falsify aspects of a model but rarely identify one unique repair. Adding flexible terms may improve fit while damaging interpretability or extrapolation.

## 10. Model discrepancy

Suppose

$$y=h(x,\theta)+\delta(x)+\varepsilon$$

Discrepancy $\delta$ represents systematic model inadequacy. If both $\delta$ and $\theta$ are flexible, they can trade off: a wrong parameter plus discrepancy may match the same data as a right parameter. Ignoring discrepancy forces parameters to absorb omitted mechanisms and can yield false precision.

Use multiple experiments, mechanistic constraints, external calibration, and sensitivity to discrepancy forms. Report effective parameters as effective unless evidence supports a physical interpretation.

## 11. Predictive and causal validation differ

A model can predict under the observed regime without identifying interventions. For binary action $A$, causal effect concerns potential outcomes $Y(1)-Y(0)$. Observational identification may require:

- conditional exchangeability: no unmeasured common causes after adjustment;
- positivity: each action occurs with positive probability in relevant strata;
- consistency: the action is well defined and observed outcome matches its potential outcome;
- appropriate handling of interference: one unit's action may affect another.

In queues, adding staff may change arrival behavior. In epidemics, one person's intervention changes others' exposure. In finance, publishing a signal changes trading and prices. These systems violate simple no-feedback assumptions.

Mechanistic equations can support causal reasoning only when parameters, interventions, and observation processes have causal meaning justified by design or external knowledge.

## 12. Decision robustness

Suppose actions $a$ have losses $L(a,\theta)$. Parameter error matters through loss differences. If nominal best is $a*$, margin against action $b$ is

$$M_{b}(\theta)=L(b,\theta)-L(a*,\theta)$$

Find where $M_{b}=0$. A large positive margin over a plausible parameter region supports action stability conditional on that region and objective. A nearly zero margin calls for more information, a robust compromise, or acknowledgement that values—not numerical precision—decide.

### Worked threshold

Plan A cost is $100+2d$; Plan B is $160+d$. A is better when demand $d<60$, B when $d>60$, tied at 60. At nominal 40 the decision margin is 20 cost units. If defensible demand range is $[30,50]$, A is stable. If $[30,80]$, no single plan dominates across the range.

## 13. A complete audit example

Consider estimating removal rate $\gamma$ and reporting fraction $p$ from reported recoveries $Y(t)\approx p\gamma I(t)$ while $I(t)$ is unobserved. The product $p\gamma I$ may fit observations under many combinations.

- **Units:** $\gamma$ is inverse time; $I$ persons; $p$ dimensionless; rate is persons/time.
- **Sensitivity:** output derivatives with respect to $p$ and $\gamma$ can be nearly proportional.
- **Identifiability:** without separate prevalence or duration data, factors may not separate.
- **Regularization:** a prior on $\gamma$ can stabilize estimates but must be reported as external information.
- **Validation:** held-out reported recoveries test only the combined observation process under similar conditions.
- **Causal boundary:** changing a fitted time-varying rate does not identify an intervention effect.
- **Decision:** test whether policy choice changes across the full compatible parameter set.

This audit is more informative than one best-fit curve with a narrow optimizer error bar.

## 14. Fully worked exercises

<a id="deep-dive-sensitivity-identifiability-validation-ex-1"></a>

### Exercise 1: global versus local

Is $h(\theta)=\theta^{2}$ identifiable on $R$ and on $[0,\infty)$?


<details>
<summary>Hint 1</summary>

Global identifiability asks whether distinct parameter values can produce the same observation.
</details>
<details>
<summary>Hint 2</summary>

Compare theta with its negative on the full line, then reconsider after restricting to nonnegative values.
</details>
<details>
<summary>Solution</summary>

On $R$, $\theta$ and $-\theta$ have the same observation, so not globally identifiable. It is locally identifiable at every nonzero point because derivative $2\theta$ is nonzero and a sufficiently small neighborhood excludes the opposite sign. At zero, no neighborhood contains a one-to-one inverse across both signs. Restricted to $[0,\infty)$, the map is globally one-to-one.

</details>

<a id="deep-dive-sensitivity-identifiability-validation-ex-2"></a>

### Exercise 2: null space

Let $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$. Find the unidentifiable direction.


<details>
<summary>Hint 1</summary>

An unidentifiable direction is a nonzero vector in the observation matrix’s nullspace.
</details>
<details>
<summary>Hint 2</summary>

Solve the first row equation; the second row is a multiple and adds no new restriction.
</details>
<details>
<summary>Solution</summary>

Solve $Av=0$: $v_{1}+v_{2}=0$, so null space is span of $(1,-1)$. Adding $t(1,-1)$ changes components but leaves both observations fixed. The data identify only $x_{1}+x_{2}$.

</details>

### Exercise 3: sensitivity is not uncertainty

An output derivative with respect to $\theta$ is 50. Can we say output uncertainty is 50?

**Solution.** No. Derivative has output-units per parameter-unit and must be combined with a parameter perturbation or uncertainty law. Nonlinearity and dependence may require more than first order.

### Exercise 4: residual boundary

Why can a regularized reconstruction have a larger residual but be preferable for a declared use?

**Solution.** Unregularized inversion may fit noise through weak singular directions, producing unstable predictions. A regularized solution accepts mismatch to reduce sensitivity according to a declared prior structure. Preference must be validated for the use; lower residual alone is not the objective.

### Exercise 5: causal nonclaim

A prediction model accurately forecasts demand after staffing decisions under the current policy. Does it identify the demand response to a new staffing policy?

**Solution.** No. The new action can change arrivals or selection, and historical action assignment may be confounded. Accurate regime prediction is not intervention identification.

## 15. Audit deliverable

For a model under review, submit:

- use and claim ledger;
- units and nondimensionalization table;
- local and global sensitivity with ranges;
- structural identifiability argument or counterexample;
- practical profiles and conditioning diagnostic;
- regularization contribution stated separately from data information;
- verification evidence and independent validation design;
- residual and discrepancy analysis;
- decision-switch boundaries;
- causal assumptions or an explicit causal nonclaim;
- monitoring and fallback beyond the applicability domain.

The [proof/reference volume](../books/applied-modeling-proof-reference/identifiability-inverse-problems.md) develops the theorems. The [trustworthy modeling recipe](recipe-trustworthy-model-compute-validate.md) turns this audit into a project workflow. The [Decision Systems Laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-decision-systems) exposes a queue stability boundary and portfolio sensitivity without treating either as advice.
