var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: biology-epidemics-mechanisms
title: "Biological and Epidemic Mechanisms"
level: advanced-undergraduate
estimated_minutes: 110
license: CC BY-SA 4.0
status: draft
---

# Biological and Epidemic Mechanisms

## Dependencies and scope

This chapter uses ODEs, probability, linearization, and networks. It shows how biological mechanisms become balance laws and why fitted compartments do not automatically identify causal processes.

## Positivity and conservation

**Definition 13.1 (closed SIR model).** For closed-population SIR,

$S'=-βSI/N$, $I'=βSI/N-γI$, $R'=γI$.

Adding gives $(S+I+R)'=0$. On each coordinate boundary, the derivative does not point into negative values, so the nonnegative simplex is invariant. These are structural checks any solver should preserve approximately or exactly.

Parameters $β,γ$ have inverse-time units. Under exponential infectious duration, mean duration is $1/γ$. Homogeneous mixing, fixed $N$, instantaneous transitions, and compartment meanings are assumptions, not consequences of the equations.

## Invasion threshold

Near a disease-free state with susceptible count $S_0$,

$I'≈(βS_0/N-γ)I$.

Initial growth occurs when $R_eff,0=(β/γ)(S_0/N)>1$. The basic quantity $R_0=β/γ$ belongs to the fully susceptible reference model. It changes when contact definition, heterogeneity, behavior, or model structure changes.

Local growth criterion does not determine final size or peak. Stochastic extinction can occur even above threshold when infected count is small.

## Network linearization

For infection probabilities or mean-field states $i$, a network linearization can have

$i'=(βA-γI)i$.

Growth is governed by largest eigenvalue of adjacency $A$; linear instability occurs when $βλ_{\\max}(A)>γ$. This is a result for the stated mean-field approximation on a fixed network. Clustering, repeated contacts, temporal edges, adaptive behavior, and finite stochastic dynamics can shift observed thresholds.

## Observation maps and identifiability

Reported cases may satisfy a delayed convolution of incidence multiplied by ascertainment. Hospital admissions and wastewater measure other functions of infection history. A case curve alone can trade off transmission, initial conditions, reporting fraction, and delay. Joint data may help, but only with calibrated observation models.

### Worked confounding

A policy begins when cases are already rising; behavior also changes voluntarily. A later decline cannot be assigned wholly to policy by fitting a time-varying $β$. The fitted curve describes a composite effective contact rate. Causal attribution needs comparison design or assumptions, intervention timing, and sensitivity to unmeasured changes.

## Beyond SIR

Age structure uses next-generation matrices; dominant eigenvalue gives a reproduction threshold under linearization. Reaction-diffusion adds spatial movement and can create patterns. Evolutionary models add heritable types and frequency dependence. Each addition should correspond to a question and observable implication, not complexity for its own sake.

## Final size, peak conditions, and what they do not say

Dividing $S'$ by $R'$ in the closed SIR model gives

$dS/dR=-(\\beta/(\\gamma N))S$.

Therefore $\\log(S(t)/S(0))=-R_0(R(t)-R(0))/N$. If $I(t)$ tends to zero,
this identity gives an implicit final-size equation. It is a consequence of
the closed homogeneous model, not a universal epidemic law. Imports,
demography, waning immunity, time-varying contact, or heterogeneous
susceptibility change it.

At an interior infection peak, $I'=0$, so $S=N/R_0$. This identifies the
susceptible level at a model peak but not the calendar time or observed-case
peak. Reporting delays can move the measured peak, and a time-varying $\\beta$
makes the simple threshold time-dependent.

### Worked final-size bound

Suppose initially $S(0)=0.99N$, $I(0)=0.01N$, $R(0)=0$, and $R_0=2$.
Writing $s_\\infty=S(\\infty)/N$, the identity becomes
$\\log(s_\\infty/0.99)=-2(1-s_\\infty)$. Evaluating the two sides shows a root near
$s_\\infty=0.20$: $\\log(0.20/0.99)=-1.599$, while $-2(0.80)=-1.600$.
Thus about eighty percent are ever infected in this idealized deterministic
model. This is neither a forecast nor an intervention estimate until the
closed-population and constant-parameter assumptions are defended.

## Structured populations and next-generation matrices

For infected-state vector $z$, a disease-free linearization often has
$z'=(F-V)z$, where $F$ records production of new infections and $V$ records
transition and removal. When $V$ is invertible with the required positivity
properties, the next-generation matrix is $K=FV^{-1}$ and its spectral radius
is the threshold quantity. Entries depend on the chosen infected states and
units; a matrix of contact counts is not automatically $K$.

For two groups with

$K=\\begin{pmatrix}0.8&0.6\\\\0.2&0.7\\end{pmatrix}$,

the characteristic polynomial is $\\lambda^2-1.5\\lambda+0.44$. Its largest root
is $1.1$, so the disease-free linearization is supercritical even
though both diagonal entries are below one. Cross-group transmission changes
the conclusion.

## Observation models and likelihood boundaries

Let latent incidence be $j_t$. A simple reporting model is

$C_t ~ Poisson(q \\sum_{d=0}^D g_d j_{t-d})$,

where $g$ is a delay distribution and $q$ an ascertainment fraction. If only
$C_t$ is observed, scaling incidence upward while scaling $q$ downward can
leave the mean unchanged. Mechanistic dynamics may reduce this ambiguity, but
only through additional restrictions. Overdispersion, day-of-week effects,
changing test access, and revisions are data-generating mechanisms, not
cosmetic residual noise.

### Worked observation confounding

If the expected reported count is 100, both $(incidence,q)=(200,0.5)$ and
$(500,0.2)$ fit a zero-delay mean model exactly. A prevalence survey estimating
active infection can add a differently oriented observation. It does not
magically remove bias: its sampling frame and test sensitivity must enter its
own observation map.

## Stochastic beginnings and branching approximation

When infection is rare and susceptible depletion negligible, a branching
process can approximate early transmission. If each case independently
produces Poisson($R$) secondary cases, extinction probability $q$ is the
smallest solution of $q=\\exp(R(q-1))$. For $R\\leq 1$, $q=1$; for $R>1$, there is a
root below one. Deterministic exponential growth and stochastic extinction
are therefore compatible statements about different levels of description.

This approximation fails after substantial depletion or dependence between
offspring counts. Superspreading requires a more dispersed offspring law and
can increase extinction probability at fixed mean while also allowing rare
large clusters.

## Common failure modes

- **Compartments as measurements:** $I(t)$ is a defined latent state, not
  automatically a case, hospitalization, or positive test count.
- **Threshold as forecast:** $R_eff>1$ is a local growth statement, not a peak
  size or final-size calculation.
- **Fitted change as causal effect:** a time-varying transmission rate absorbs
  policy, voluntary behavior, seasonality, and misspecification.
- **Solver negativity:** negative populations usually diagnose an unsuitable
  step size or algorithm, not negative biology.
- **Untracked units:** using fractions in one equation and counts in another
  inserts a hidden factor of $N$.
- **More compartments as validation:** complexity without new identifiable
  observations can enlarge ambiguity.

## A contrasting biological mechanism: predator and prey

**Definition 13.2 (Lotka–Volterra interaction).** For positive constants $a,b,c,d$, the idealised population equations are $x'=x(a-by)$ and $y'=y(-c+dx)$. The model assumes a closed homogeneous interaction, unlimited prey growth without predators and predator decline without prey. It does not identify those mechanisms from an observed oscillation alone.

**Worked example (coexistence and a first integral).** Positive equilibria satisfy $y_*=a/b$ and $x_*=c/d$. On the strictly positive quadrant define
$$
H(x,y)=dx-c\\log x+by-a\\log y.
$$
Differentiation gives
$$
\\dot H=(d-c/x)x(a-by)+(b-a/y)y(-c+dx)
=(dx-c)(a-by)+(by-a)(-c+dx)=0.
$$
Thus each positive trajectory stays on a level set of $H$. Its Hessian is diagonal with positive entries $c/x^2$ and $a/y^2$, so $H$ has a strict minimum at coexistence. The linearisation there has off-diagonal entries $-bc/d$ and $da/b$, with eigenvalues $\\pm i\\sqrt{ac}$. These observations describe neutral oscillatory structure in this idealised model; they do not imply an attracting cycle or robustness to damping, carrying capacity or changing contact rates.

Compare this mechanism with SIR: the closed SIR susceptible compartment decreases monotonically while infection is positive, preventing a positive periodic orbit of the same form. A similar-looking population time series can therefore call for different states and conservation arguments. Observations, rather than visual resemblance alone, must distinguish the mechanisms.

## The same growth rate can represent different generation times

An observed initial exponential growth rate does not determine a reproduction number without a transmission-timing model. In a renewal description, let incidence equal a reproduction factor times the weighted incidence of earlier cases, with a nonnegative generation-interval density of total mass one. Substituting exponential incidence and cancelling its current magnitude gives

$$
1=\\mathcal R\\int_0^\\infty e^{-r a}g(a)\\,da.
$$

This algebra assumes the exponential regime extends over the past ages used by the renewal approximation, or is an asymptotic growth calculation with transients separated. The density describes the timing of secondary transmission, not automatically the infectious-duration distribution.

If every transmission occurs at a fixed age $T$, interpreted as a point-mass generation law, the relation gives $\\mathcal R=e^{rT}$. If generation ages are exponentially distributed with mean $T$, integrating the exponential kernel instead gives $\\mathcal R=1+rT$ when the integral exists. For positive growth and the same mean interval, these two expressions differ. Therefore a reported growth rate cannot be turned into a unique reproduction factor merely by naming a mean duration; the timing distribution matters.

The SIR initial-growth formula is a special case with its own memoryless infectious-removal and constant-contact assumptions. Additional stages or delayed infectiousness can change the relation while leaving an observed early slope almost unchanged. This is a structural uncertainty, not an arithmetic error in the estimated slope.

## A constant reporting fraction and a changing one have different effects

Suppose ideal incidence is exponential and each infection is eventually reported with a constant fraction. A fixed reporting delay convolves this exponential with the delay law. Away from initial transients, the convolution multiplies the exponential by a constant transform factor, so it preserves the growth exponent. Constant under-ascertainment changes level, while a constant delay law changes level and timing interpretation.

Now let the reporting fraction vary with time, still ignoring delays for clarity. Reported incidence is the true incidence times that fraction. Taking its logarithmic derivative adds the reporting fraction's relative rate of change to the true growth rate. Expanding access to testing can therefore make reported cases grow faster than infections, while a declining reporting fraction can obscure growth. No compartment fit can separate these components from the reported curve alone without further information.

**Worked comparison.** True incidence grows five percent per unit time in the continuous exponential-rate convention. If ascertainment also grows at rate two percent over a limited interval, their product grows at rate seven percent. This does not mean transmission increased to the rate inferred by treating reports as unchanged measurements of incidence. The example is a mechanism for ambiguity, not a claim that ascertainment actually followed that trend in any particular dataset.

## Interventions must specify which mechanism changes

A contact reduction, faster removal from infectious mixing, and lower susceptibility act on different model terms. They can give the same instantaneous initial growth rate but different generation intervals, cumulative infections, and observable pathways. A modeled reduction of a fitted effective transmission coefficient represents a conditional counterfactual inside that model. To interpret it as an intervention effect, specify how the intervention changes contact, adherence, observation, and other relevant behavior.

This distinction is especially important when a policy responds to the same observations being explained. The policy, voluntary response, and epidemic state then evolve together. A before-and-after fit can describe their joint trajectory without identifying each cause. Mathematical positivity, conservation, threshold calculations and likelihood evaluation remain valuable, but none supplies the missing comparison design by itself.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="biology-epidemics-mechanisms-ex-1"></a>

Prove that the closed SIR system conserves total population and that the
   nonnegative simplex is forward invariant.

<details>
<summary>Hint 1</summary>

Add the three compartment equations.

</details>
<details>
<summary>Hint 2</summary>

At each zero boundary check that the vector field cannot point outside the nonnegative region.

</details>
<details>
<summary>Full solution</summary>

Summing gives $(S+I+R)'=0$. At $S=0$, $S'=0$; at $I=0$, $I'=0$; and at $R=0$, $R'=\\gamma I\\geq 0$, so uniqueness prevents crossing outward.

</details>

### Exercise 2
<a id="biology-epidemics-mechanisms-ex-2"></a>

With $\\beta=0.3/day$, $\\gamma=0.1/day$, and $S_0/N=0.2$, determine the sign
   and per-day rate of initial infected growth.

<details>
<summary>Hint 1</summary>

Factor the infected derivative as a growth coefficient times I.

</details>
<details>
<summary>Hint 2</summary>

Insert the susceptible fraction before comparing transmission and removal.

</details>
<details>
<summary>Full solution</summary>

The coefficient is $\\beta S_0/N-\\gamma=0.06-0.1=-0.04/day$; equivalently $R_{\\mathrm{eff}}=0.6<1$, so infection declines locally.

</details>

### Exercise 3
<a id="biology-epidemics-mechanisms-ex-3"></a>

Nondimensionalize SIR using fractions $s=S/N$, $i=I/N$, $r=R/N$ and time
   $\\tau=\\gamma t$. Identify the remaining dimensionless parameter.

<details>
<summary>Hint 1</summary>

Apply the chain rule for the new time variable.

</details>
<details>
<summary>Hint 2</summary>

Use population conservation to express the system in fractions and one rate ratio.

</details>
<details>
<summary>Full solution</summary>

The equations are $ds/d\\tau=-R_0si$, $di/d\\tau=R_0si-i$, $dr/d\\tau=i$; only $R_0=\\beta/\\gamma$ remains.

</details>

### Exercise 4
<a id="biology-epidemics-mechanisms-ex-4"></a>

Derive the relation between $S$ and $R$ and hence the SIR final-size
   equation when $I(\\infty)=0$.

<details>
<summary>Hint 1</summary>

Divide the susceptible equation by the removed equation where infection is positive.

</details>
<details>
<summary>Hint 2</summary>

Integrate that relation and then impose the terminal conservation identity.

</details>
<details>
<summary>Full solution</summary>

$dS/dR=-\\beta S/(\\gamma N)$. Integration gives $\\log(S_\\infty/S_{\\mathrm{initial}})=-(\\beta/\\gamma)(R_\\infty-R_{\\mathrm{initial}})/N$, with $R_\\infty=N-S_\\infty$ when the final infected count is zero.

</details>

### Exercise 5
<a id="biology-epidemics-mechanisms-ex-5"></a>

For $R_0=2$, $S(0)=0.99N$, and $R(0)=0$, check that $S(\\infty)/N=0.20$
   approximately satisfies the final-size equation.

<details>
<summary>Hint 1</summary>

Substitute the proposed fraction into the logarithmic final-size equation.

</details>
<details>
<summary>Hint 2</summary>

Compare both sides numerically without treating the rounded fraction as an exact root.

</details>
<details>
<summary>Full solution</summary>

Left side is $\\log(0.20/0.99)=-1.5994$; right side is $-2(0.80)=-1.6$, agreeing to about $6e-4$.

</details>

### Exercise 6
<a id="biology-epidemics-mechanisms-ex-6"></a>

Show that an interior infection peak in constant-parameter SIR occurs when
   $S=N/R_0$. Explain why this does not locate an observed-case peak.

<details>
<summary>Hint 1</summary>

At an interior peak the infected derivative vanishes with I positive.

</details>
<details>
<summary>Hint 2</summary>

Reported cases may lag and rescale the latent infected compartment.

</details>
<details>
<summary>Full solution</summary>

$I'=I(\\beta S/N-\\gamma)$, so an interior stationary point has $S=\\gamma N/\\beta=N/R_0$. Reporting convolution, ascertainment, and time-varying parameters can shift the data peak.

</details>

### Exercise 7
<a id="biology-epidemics-mechanisms-ex-7"></a>

Linearize the infected equation about a disease-free state and derive the
   effective initial threshold.

<details>
<summary>Hint 1</summary>

Hold susceptible population at its disease-free value to first order.

</details>
<details>
<summary>Hint 2</summary>

The coefficient of the small infected perturbation determines local growth.

</details>
<details>
<summary>Full solution</summary>

Setting $S \\approx S_0$ gives $I' \\approx \\gamma[(\\beta/\\gamma)(S_0/N)-1]I$; growth requires $R_0S_0/N>1$.

</details>

### Exercise 8
<a id="biology-epidemics-mechanisms-ex-8"></a>

For $K=\\begin{pmatrix}0.8&0.6\\\\0.2&0.7\\end{pmatrix}$, compute both eigenvalues and interpret the
   dominant one as a local threshold only.

<details>
<summary>Hint 1</summary>

Use trace and determinant to solve the quadratic characteristic polynomial.

</details>
<details>
<summary>Hint 2</summary>

Only the larger eigenvalue determines the local linear invasion criterion.

</details>
<details>
<summary>Full solution</summary>

Roots of $\\lambda^2-1.5\\lambda+0.44$ are $(1.5 \\pm \\sqrt{0.49})/2$, namely $1.1$ and $0.4$. The dominant root exceeds one, so the disease-free linearization grows under this specified matrix model.

</details>

### Exercise 9
<a id="biology-epidemics-mechanisms-ex-9"></a>

For network linearization $i'=(\\beta A-\\gamma I)i$, prove that a symmetric
   adjacency matrix produces initial growth along an eigenvector precisely
   when its eigenvalue exceeds $\\gamma/\\beta$.

<details>
<summary>Hint 1</summary>

Expand the initial vector in an orthogonal eigenbasis of the symmetric adjacency matrix.

</details>
<details>
<summary>Hint 2</summary>

Each mode grows at its own scalar exponential rate.

</details>
<details>
<summary>Full solution</summary>

For eigenvector $v$, the solution factor is $\\exp((\\beta \\lambda-\\gamma)t)$; its exponent is positive exactly when $\\lambda>\\gamma/\\beta$.

</details>

### Exercise 10
<a id="biology-epidemics-mechanisms-ex-10"></a>

Give two fixed networks with the same mean degree but different largest
    adjacency eigenvalues. Explain the threshold consequence.

<details>
<summary>Hint 1</summary>

Compare a regular network with a network concentrating edges at a hub.

</details>
<details>
<summary>Hint 2</summary>

Equal mean degree does not fix the largest eigenvalue.

</details>
<details>
<summary>Full solution</summary>

On four vertices, a path has mean degree $1.5$ and spectral radius about $1.618$; a three-leaf star also has mean degree $1.5$ but radius $\\sqrt{3}$. Thus equal mean degree need not give equal linear threshold.

</details>

### Exercise 11
<a id="biology-epidemics-mechanisms-ex-11"></a>

If reported cases have mean $q j_t$ with no delay, exhibit two distinct
    $(q,j_t)$ pairs giving the same expected report of 100.

<details>
<summary>Hint 1</summary>

Keep the product of ascertainment and incidence fixed.

</details>
<details>
<summary>Hint 2</summary>

Both factors can change while the observed expectation remains the same.

</details>
<details>
<summary>Full solution</summary>

$(q,j)=(0.5,200)$ and $(0.2,500)$ both give mean 100, among infinitely many pairs.

</details>

### Exercise 12
<a id="biology-epidemics-mechanisms-ex-12"></a>

Name two data streams that can add information about incidence versus
    ascertainment, and state one bias model needed for each.

<details>
<summary>Hint 1</summary>

Choose observations with different sensitivity to infection and reporting.

</details>
<details>
<summary>Hint 2</summary>

Each additional stream needs its own sampling and measurement assumptions.

</details>
<details>
<summary>Full solution</summary>

A prevalence survey needs sampling-frame and assay sensitivity/specificity models. Hospital admissions need infection-to-admission delay and changing severity/admission models. Wastewater needs shedding and catchment calibration.

</details>

### Exercise 13
<a id="biology-epidemics-mechanisms-ex-13"></a>

With delay weights $(0.25,0.5,0.25)$ and incidences $(40,80,120)$ at times
    $t,t-1,t-2$, compute expected reports at $q=0.5$.

<details>
<summary>Hint 1</summary>

Form the weighted sum in the stated time order.

</details>
<details>
<summary>Hint 2</summary>

Apply the ascertainment fraction after convolution.

</details>
<details>
<summary>Full solution</summary>

The delayed latent mean is $0.25(40)+0.5(80)+0.25(120)=80$; multiplying by $q$ gives 40 reports.

</details>

### Exercise 14
<a id="biology-epidemics-mechanisms-ex-14"></a>

For Poisson branching mean $R=2$, verify that an extinction probability
    near $0.203$ satisfies $q=\\exp(2(q-1))$.

<details>
<summary>Hint 1</summary>

Insert the proposed probability into the generating function equation.

</details>
<details>
<summary>Hint 2</summary>

An approximate fixed point is distinct from a proof that it is the smallest one.

</details>
<details>
<summary>Full solution</summary>

The right side is $\\exp(2(0.203-1))=\\exp\\left(-1.594\\right)=0.2031$, so the approximation is consistent.

</details>

### Exercise 15
<a id="biology-epidemics-mechanisms-ex-15"></a>

Explain how a process can have $R>1$ yet become extinct, without
    contradicting the deterministic linearization.

<details>
<summary>Hint 1</summary>

Distinguish a mean reproduction number from every realised offspring count.

</details>
<details>
<summary>Hint 2</summary>

A positive probability of zero offspring permits extinction even when the mean exceeds one.

</details>
<details>
<summary>Full solution</summary>

$R>1$ makes expected early growth positive but individual offspring counts remain random; an initial lineage can produce zero descendants. Deterministic equations describe a large-population mean-field limit.

</details>

### Exercise 16
<a id="biology-epidemics-mechanisms-ex-16"></a>

Diagnose the inference "cases declined after intervention, therefore the
    intervention caused the entire decline." List at least three alternatives.

<details>
<summary>Hint 1</summary>

List mechanisms affecting transmission, susceptible composition and reporting.

</details>
<details>
<summary>Hint 2</summary>

Temporal ordering alone does not remove these competing explanations.

</details>
<details>
<summary>Full solution</summary>

Voluntary behavior, seasonality, susceptible depletion, reporting changes, concurrent measures, regression to the mean, and model misspecification are alternatives; causal allocation requires a design or assumptions.

</details>

### Exercise 17
<a id="biology-epidemics-mechanisms-ex-17"></a>

A numerical SIR solver returns $I=-4$ for one step. Give two diagnostics and
    two remedies that preserve the model's invariant region more faithfully.

<details>
<summary>Hint 1</summary>

Check the numerical step and population balance before altering the model.

</details>
<details>
<summary>Hint 2</summary>

Use step refinement or a positivity-preserving method rather than treating clipping as a proof.

</details>
<details>
<summary>Full solution</summary>

Check step-size convergence and whether conservation also failed. Reduce the step or use a positivity-preserving/invariant-aware method; event handling or suitable implicit schemes may help. Clipping alone corrupts conservation.

</details>

### Exercise 18
<a id="biology-epidemics-mechanisms-ex-18"></a>

Design an identifiability audit for an SEIR model observed only through
    delayed cases. State perturbations, additional data, and a falsification.

<details>
<summary>Hint 1</summary>

Vary latent parameters along observationally similar directions.

</details>
<details>
<summary>Hint 2</summary>

Combine profile or sensitivity information with new data streams and an unused predictive comparison.

</details>
<details>
<summary>Full solution</summary>

Vary latent period, ascertainment, initial exposed count, and delay jointly while checking profile likelihood or singular values. Add prevalence or admissions with explicit observation models. A held-out stream whose timing cannot be reproduced is a useful falsification.

</details>

## Project

Build and audit a deterministic SIR or SEIR model together with its observation
model. Supply a compartment diagram and a separate observation diagram; prove
positivity and conservation, derive the local threshold, and verify both
numerically under step refinement. Generate seeded synthetic delayed reports,
then demonstrate at least one practically nonidentified parameter tradeoff.
Add one independent data stream and show quantitatively which singular
direction improves. Report counts and fractions without mixing units, include
text tables for every plot, and end with a claim ledger separating mechanism
description, forecast, and causal intervention statements.

## Summary

Conservation and invasion thresholds constrain the mechanism, while observations introduce reporting and delay. A fitted parameter change does not identify an intervention effect. Signal inversion next revisits the observation operator directly.
`;export{e as default};