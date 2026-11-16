
# Recipe: Audit a Compartmental Epidemic Model

**Before reading.** Read [Models and Direction Fields](#/books/ode-first-course/models-direction-fields), [Sample Spaces and Events](#/books/introduction-to-probability/sample-spaces-events).

Compartmental models are useful because they turn a verbal mechanism into equations that can be inspected, challenged, and compared with data. They are dangerous when a clean curve is mistaken for a forecast independent of assumptions. This recipe builds and audits an SIR model, then shows how observation, heterogeneity, and uncertainty alter its interpretation.

This is educational mathematical material, not a clinical or public-health decision tool. Real decisions require current data, domain experts, ethical analysis, and models tailored to the population and pathogen.

## Output of the recipe

Produce a model report containing:

1. a state diagram and equation-to-arrow correspondence;
2. a table of variables, parameters, units, and data sources;
3. conservation, positivity, and limiting-case checks;
4. identifiable combinations rather than unjustified parameter precision;
5. uncertainty or sensitivity results tied to a stated question;
6. explicit failure conditions and a plan for revision.

## Step 1 — State the question before choosing equations

Questions such as “Can early incidence grow?”, “What peak load is plausible?”, and “Which observations distinguish two mechanisms?” require different models. Fix a time horizon and population boundary. An SIR model may illuminate epidemic-scale susceptible depletion, but it cannot represent an exposed period, reinfection, age structure, spatial travel, changing behavior, or clinical progression unless those mechanisms are added.

## Step 2 — Declare state variables and units

Let $s(t)$, $i(t)$, and $r(t)$ be fractions of a closed population that are susceptible, infectious, and removed at time $t$, measured in days. Thus they are dimensionless and satisfy

$s+i+r=1$.

Use parameters:

- $\beta$: effective transmission rate per infectious person per day, units $day^-1$ in this fraction formulation;
- $\gamma$: removal rate, units $day^-1$;
- $1/\gamma$: mean infectious duration under the exponential waiting-time assumption.

The model is

$ds/dt=-\beta s i$,

$di/dt=\beta s i-\gamma i$,

$dr/dt=\gamma i$.

If states are counts instead, the common mass-action form is $dS/dt=-\beta SI/N$. Never move between fraction and count forms without moving the factor $N$ and rechecking units.

## Step 3 — Connect each term to a mechanism

The flow $\beta s i$ moves population from susceptible to infectious. It encodes homogeneous random mixing and frequency-dependent contact in one product. The flow $\gamma i$ moves population from infectious to removed. All three equations must use each flow with opposite signs where it leaves and enters.

Adding the equations gives

$d(s+i+r)/dt=0$,

so total fraction is conserved. On a boundary such as $s=0$, $ds/dt=0$; at $i=0$, $di/dt=0$; at $r=0$, $dr/dt\ge 0$. With nonnegative initial values, the vector field points inward or along the simplex, supporting nonnegative solutions.

### Accessible diagram description

Three outlined boxes read Susceptible $s$, Infectious $i$, and Removed $r$. A right-pointing arrow from the first to second is labelled $\beta s i$; a right-pointing arrow from second to third is labelled $\gamma i$. Beneath each label is its unit, fraction per day. The boxes use different border patterns as well as labels, and a note says the total content of all boxes remains one.

## Step 4 — Derive thresholds rather than memorizing them

Factor the infectious equation:

$di/dt=i(\beta s-\gamma)$.

For positive $i$, prevalence grows when $\beta s>\gamma$. Define

$R_0=\beta/\gamma$.

At the start of a nearly wholly susceptible population, growth occurs when $R_0>1$. More generally the instantaneous model ratio is

$R_eff(t)=R_0 s(t)$

for constant parameters. Infection reaches its deterministic peak when $s=1/R_0$, provided the trajectory reaches that value with $i>0$.

$R_0$ is dimensionless. It is not a fixed biological property independent of contact patterns, population structure, model definition, or time. A fitted early exponential growth rate identifies approximately $\beta s_0-\gamma$, not $\beta$ and $\gamma$ separately without other information.

## Step 5 — Work a numerical example with scale

### Worked example: instantaneous growth in the declared SIR model

Let $N=100,000$, $s_0=0.999$, $i_0=0.001$, $r_0=0$, $\beta=0.30 day^-1$, and $\gamma=0.10 day^-1$. Then

$R_0=3$, and mean infectious duration is $10 days$.

Initially,

$di/dt=i_0(\beta s_0-\gamma)$

$=0.001(0.30 \times 0.999-0.10)$

$=0.0001997 day^-1$.

Multiplying by $N$, the model's instantaneous net change is about $19.97$ infectious people per day. Over a sufficiently short early interval, $s approximately s_0$ and

$i(t) approximately i_0 \exp(rt)$, with $r=0.1997 day^-1$.

The approximate doubling time is $\ln 2/r=3.47 days$. This approximation deteriorates as susceptible fraction changes, parameters change, or stochastic effects matter. It should not be extended blindly across the whole outbreak.

## Step 6 — Separate the latent process from observations

Models describe hidden states; datasets record testing, reporting, admissions, surveys, or deaths with delays and selection. For example, expected newly reported cases might be modeled as

$C_k approximately \rho integral_{day k} N \beta s(t)i(t) dt$,

followed by a reporting-delay distribution and a count-noise model. Here $\rho$ is a dimensionless detection fraction. Observed cases are not the same state as $i(t)$, and daily incident cases are not prevalence.

If only reported cases are observed, $\rho$, initial infections, and transmission intensity can compensate for one another. Report parameter correlations and profile fits. Precision in an optimizer's last decimal is not evidence of identifiability.

## Step 7 — Check the final-size relation

Divide $ds/dt$ by $dr/dt$ while $i>0$:

$ds/dr=-(\beta/\gamma)s=-R_0s$.

Integrate from initial to final states:

$\ln(s_{\infty}/s_0)=-R_0(r_{\infty}-r_0)$.

If eventually $i_{\infty}=0$, conservation gives $r_{\infty}=1-s_{\infty}$. This implicit relation is a useful independent check on a numerical solution with constant parameters. It is not valid unchanged when births, waning immunity, or time-varying transmission are added.

For the worked example with $s_0 approximately 1$, the nontrivial root solves approximately $s_{\infty}=exp[-3(1-s_{\infty})]$, which is near $0.060$. The model therefore predicts a large cumulative removed fraction under its no-change assumptions. That output is a conditional scenario, not an assertion that contact behavior and interventions remain fixed.

## Step 8 — Audit heterogeneity with a next-generation matrix

Suppose groups are indexed by $a$ and infected source groups by $b$. Let $K_ab$ be the expected number of new infections in group $a$ caused by one newly infected individual in group $b$ when susceptibility is at the reference state. Entries are nonnegative and dimensionless. The structured reproduction number is the spectral radius

$R_0=\rho(K)$,

the largest eigenvalue magnitude. Row sums alone generally do not determine the threshold because infections generate a sequence of types. The associated eigenvectors describe the early composition under the linearized model, subject to irreducibility and modeling assumptions.

Collapsing heterogeneous groups can bias both the threshold and intervention comparison. Conversely, adding dozens of weakly informed groups can make parameters unidentifiable. Increase complexity only when it answers the question and the data can constrain it.

## Step 9 — Perform sensitivity and falsification checks

Vary parameters over defensible ranges jointly, not only one at a time. Examine outputs directly connected to the question: early growth, peak timing, cumulative incidence, or probability of exceeding capacity. Check at least:

- $\beta=0$: no new infections;
- $i_0=0$: the disease-free state persists;
- larger $\gamma$ with other quantities fixed: shorter mean duration and smaller $R_0$;
- smaller integration steps: numerical outputs converge;
- synthetic-data recovery: known generating parameters or identifiable combinations can be recovered under the proposed observation model.

Compare alternate structures, such as an exposed compartment or time-varying $\beta$, and ask whether conclusions survive. A model that can fit only because every week has a free transmission parameter may interpolate well while explaining little.

## Failure modes and stop conditions

- Stop if variables mix counts and fractions or any equation fails a unit check.
- Homogeneous mixing can badly misrepresent households, age groups, geography, and highly variable contact.
- Exponential residence times imply a memoryless removal hazard; staged compartments may better approximate concentrated durations.
- Deterministic fractions are poor at very small counts, where extinction probability matters.
- Fitting cumulative counts with independent errors ignores strong temporal dependence.
- Changes in reporting can masquerade as changes in transmission.
- $R_{\mathrm{eff}}<1$ in one fitted model does not remove uncertainty or establish a causal effect.
- A projection beyond the regime used for calibration is a scenario conditional on structural stability.

## Exercises with hints and complete solutions

### Exercise 1
<a id="epidemic-model-audit-ex-1"></a>

Verify the units of every term in $di/dt=\beta si-\gamma i$.

<details><summary>Hint 1</summary>

In this convention s and i are dimensionless fractions.

</details>
<details><summary>Hint 2</summary>

Both terms must have the units of a fraction per unit time.

</details>
<details><summary>Solution</summary>

$i$ and $s$ are fractions. $di/dt$ has units $day^-1$; both $\beta si$ and $\gamma i$ do too because $\beta$ and $\gamma$ have units $day^-1$.

</details>

### Exercise 2
<a id="epidemic-model-audit-ex-2"></a>

With $\beta=0.24 day^-1$, $\gamma=0.12 day^-1$, and $s=0.40$, is $i$ growing?

<details><summary>Hint 1</summary>

Factor the infected derivative as i times its net growth rate.

</details>
<details><summary>Hint 2</summary>

Use the current susceptible fraction rather than assuming it is one.

</details>
<details><summary>Solution</summary>

$\beta s-\gamma=0.24(0.40)-0.12=-0.024 day^-1$, so positive $i$ decreases at that instant.

</details>

### Exercise 3
<a id="epidemic-model-audit-ex-3"></a>

For early growth rate $r=0.14 day^-1$, compute the approximate doubling time.

<details><summary>Hint 1</summary>

A doubling multiplies the early exponential by two.

</details>
<details><summary>Hint 2</summary>

Take a logarithm and divide by the positive rate.

</details>
<details><summary>Solution</summary>

$\ln 2/0.14 \approx 4.95 days$.

</details>

### Exercise 4
<a id="epidemic-model-audit-ex-4"></a>

In a count model $dS/dt=-\beta SI/N$, determine the units of $\beta$.

<details><summary>Hint 1</summary>

In this alternative convention S,I,N are counts.

</details>
<details><summary>Hint 2</summary>

The ratio SI/N has count units, unlike the unnormalized product SI.

</details>
<details><summary>Solution</summary>

Since $SI/N$ is a count, $\beta$ must have units $day^-1$ so the flow is people per day. This differs from the unnormalized $\beta SI$ convention.

</details>

### Exercise 5
<a id="epidemic-model-audit-ex-5"></a>

Explain why observing the early rate $r$ alone cannot identify both $\beta$ and $\gamma$ when $s_0$ is known.

<details><summary>Hint 1</summary>

The early rate supplies one scalar equation.

</details>
<details><summary>Hint 2</summary>

Vary one parameter and compensate with the other while preserving that equation.

</details>
<details><summary>Solution</summary>

The approximation gives one equation $r=\beta s_0-\gamma$ for two unknowns. Many pairs lie on the same line and generate the same initial rate.

</details>

### Exercise 6
<a id="epidemic-model-audit-ex-6"></a>

For $K=[[1.2,0.4],[0.3,0.8]]$, show from its characteristic polynomial that the dominant eigenvalue exceeds one.

<details><summary>Hint 1</summary>

Expand the two-by-two determinant.

</details>
<details><summary>Hint 2</summary>

Compute both roots and compare their magnitudes with one.

</details>
<details><summary>Solution</summary>

The characteristic polynomial is $(1.2-\lambda)(0.8-\lambda)-0.12=\lambda^2-2\lambda+0.84$. Its roots are $1\pm\sqrt{0.16}$, namely $1.4$ and $0.6$; the spectral radius is $1.4>1$.

</details>

## Connections and computational ladder

The recipe begins with **mathematical modeling**, **ordinary differential equations**, and **conditional probability**. It leads to **mathematical biology**, **network science**, **stochastic processes**, **statistical inference**, and **inverse problems**. A programmable counterpart should separate solver, observation model, and inference; carry units in documentation; test conservation and positivity; show ensembles rather than one curve; and allow a screen reader to access every plotted series as a table. The next mathematical step is to derive branching-process extinction probabilities when counts are small, then compare them with the deterministic threshold.
