var e=`---
id: recipe-trustworthy-model-compute-validate
title: "Build, Compute, and Validate a Trustworthy Mathematical Model"
license: CC BY-SA 4.0
---

# Build, Compute, and Validate a Trustworthy Mathematical Model

**Before reading.** Read [Functions, Domains, and Graphs](/resources/library:book-algebra-and-functions:functions-domain-graphs/), [Models and Direction Fields](/resources/library:book-ode-first-course:models-direction-fields/).

Use this recipe when a mathematical model will inform a scientific, operational, engineering, biological, or financial calculation. It produces an auditable chain from question to monitored decision. It does not certify that every modeled decision is appropriate; it makes assumptions and failure boundaries inspectable.

The workflow is deliberately cyclic. A failed unit check can change the state variables. Weak identifiability can change the measurement plan. Validation can change the model class. Record revisions rather than polishing away the path.

## Deliverables at a glance

Create one project folder or report with:

1. use contract and claim ledger;
2. variable, unit, and provenance table;
3. mechanism and observation diagrams with text equivalents;
4. nondimensional equations and limiting cases;
5. identifiability and sensitivity audit;
6. solver contract and exact verification cases;
7. uncertainty and decision-scenario table;
8. calibration and validation split;
9. causal boundary statement;
10. results, limitations, monitoring, and fallback.

## Step 1 — Write the use contract

Complete:

> At **decision time**, using **available information**, estimate or choose **output/action** for **population/system and horizon**, judged by **criterion**, subject to **constraints**.

Add an excluded-use sentence. Example:

> At Monday 06:00, use arrivals recorded through Sunday and the published staff rota to compare Tuesday desk allocations for the next four weeks, judged by mean and 90th-percentile wait plus idle staff-hours, subject to staffing and safety constraints. This model does not identify the causal effect of staffing on demand and is not valid for emergency surges.

This timestamp prevents future leakage. Naming a tail metric prevents an average from hiding long waits. The exclusion prevents a forecast from becoming a causal claim.

## Step 2 — Build the variable and provenance table

For every symbol record:

| Field | Example |
| --- | --- |
| symbol and meaning | $\\lambda$, attempted arrival rate |
| unit | customers/hour |
| role | input, state, parameter, control, observation, output |
| availability time | known by Monday 06:00 |
| source | timestamped entry log |
| transformation | hourly count divided by open hours |
| uncertainty | sampling variation and missed entries |
| allowed range | nonnegative; stable baseline needs $\\lambda <\\mu$ |

Do not give one symbol two meanings in the same analysis. Distinguish attempted arrivals, admitted arrivals, throughput, and completed service. For finance, distinguish physical probability $P$ from pricing measure $Q$ and state that every example is educational, not advice.

## Step 3 — Draw mechanisms and observations separately

A state diagram answers “what changes the system?” An observation diagram answers “what does the sensor or record see?” Give a text list of every arrow so the model is accessible without a graphic.

For SIR, infections move $S\\to I$ and removals $I\\to \\mathbb{R}$. Reported cases may observe only a delayed fraction of new infections. Equating reports with current infectious count hides an observation model.

For inventory, orders, receipts, sales, lost demand, spoilage, and stock count are different events. Past sales during stockouts censor demand.

## Step 4 — Derive balances and check dimensions

Begin from

$change \\in stock = inflows - outflows + production - loss$.

Write units beside each term. All additive terms must match. Check signs at boundaries: can the equations create negative population or inventory? Does network flow conserve at intermediate nodes? Does a portfolio budget sum under the declared cash convention?

A passed units check rejects nonsense but does not prove mechanism truth. Record both the check and its limitation.

## Step 5 — Nondimensionalize before choosing a solver

Choose characteristic state scale $X$ and time scale $T$; write $x=Xu$, $t=T\\tau$. Identify dimensionless groups. Explain how scales were chosen—from equilibrium, geometry, initial state, forcing, or domain knowledge.

For M/M/1, utilization $\\rho =\\lambda /\\mu$ is dimensionless, while $1/\\mu$ sets time scale. Equal $\\rho$ does not imply equal waits in minutes. For logistic growth, $n=N/K$ and $\\tau =rt$ yield $dn/d\\tau =n(1-n)$.

Evaluate exact limits: zero input, no coupling, infinite capacity, vanishing noise, or a stability boundary. If a small parameter multiplies the highest derivative or long time is important, check for singular perturbation rather than deleting it.

## Step 6 — Audit identifiability before fitting

Ask whether ideal noiseless observations determine the unknowns.

- For linear $y=A\\theta$, compute or reason about $ker A$ and singular values.
- For nonlinear $y=h(\\theta )$, inspect Jacobian rank, symmetries, and parameter transformations.
- For dynamical systems, vary observation times and inputs; a measurement design is part of the map.

Construct an explicit pair of distinct parameter values with the same or nearly same outputs if possible. If data identify only a combination, reparameterize to that combination or obtain another measurement.

Regularization, constraints, and priors can produce a unique estimate. State which uniqueness comes from data and which from external preference. Never describe a prior-driven direction as “measured precisely.”

## Step 7 — Define uncertainty by source

Keep separate:

- measurement error;
- process variability;
- finite-data parameter uncertainty;
- model discrepancy;
- scenario/structural change;
- objective or value uncertainty.

Assign probabilities only when a probability model is defended. Otherwise use named scenarios or bounded sets. Record dependence; summing independent errors in quadrature is invalid under shared shocks.

Propagate uncertainty to final outcomes and decisions, not only parameters. A parameter interval is incomplete if the action changes at a threshold inside it.

## Step 8 — Design sensitivity around decisions

Compute local derivatives or finite differences in dimensionless units. Then perform global sweeps over defensible ranges, including interactions and regime boundaries.

For each alternative action $b$ relative to nominal best $a*$, calculate margin

$M_b=L(b)-L(a*)$.

Find where $M_b=0$. Report:

- stable action region;
- tie or switch surface;
- input with greatest decision leverage;
- uncertainty not included in the range.

Do not call a parameter “important” without naming output, range, and importance definition.

## Step 9 — Write the solver contract

Before implementation, specify:

- input validation and typed failure states;
- exact/floating representation;
- algorithm and complexity expectation;
- convergence or stopping rule;
- tolerances tied to scale and conditioning;
- deterministic seed/stream if random;
- invariants and certificates returned;
- complete numerical alternative for visuals.

Examples:

- max flow returns edge flows and a minimum-cut certificate;
- an M/M/1 evaluator returns \`unstable\` when $\\lambda \\ge \\mu$, not a negative wait;
- an optimizer returns feasibility residual and dual gap;
- a reconstruction returns forward residual, penalty norm, and conditioning warning.

## Step 10 — Verify the computation

Use the ladder:

1. hand-derived tiny case;
2. zero and boundary case;
3. invariant or conservation check;
4. independent algorithm or exhaustive enumeration on small inputs;
5. refinement or tolerance study;
6. malformed and extreme-scale inputs;
7. deterministic state serialization round trip.

Verification establishes that code implements equations to the tested standard. It does not validate equations for reality.

### Example: flow verification

On a network with source outgoing capacity 7, build a feasible flow of value 7. The source cut gives an exact upper bound, so equality certifies optimum. Tests should also verify every capacity and node balance and reject duplicate or missing nodes.

### Example: simulation verification

Validate a queue simulator against stable M/M/1 formulas before adding schedules. Use independent replications for Monte Carlo standard error; customers within one run share queue history and are not independent replications.

## Step 11 — Separate calibration from validation

Calibration data choose parameters, preprocessing, model family, thresholds, or solver settings. Validation data challenge the frozen procedure.

Choose a split resembling use:

- future time for forecasting;
- held-out site for geographic transfer;
- held-out person for new-person use;
- held-out operating regime for robustness.

Repeated inspection turns a test set into validation or training information. Reserve a final test if a credible sampling assessment matters, or state that evidence is exploratory.

Report residuals by time, magnitude, group, site, and control, not only an average. Include calibration of probabilistic intervals and tail outcomes relevant to decisions.

## Step 12 — State the causal boundary

Classify each claim:

- mathematical identity/theorem;
- computation for supplied inputs;
- association;
- prediction under stability/sampling assumptions;
- equilibrium under specified strategies and payoffs;
- no-arbitrage valuation under attainable trading assumptions;
- causal intervention effect;
- normative recommendation.

For a causal claim, define action, outcome, population, horizon, and comparison. Address exchangeability/confounding, positivity/overlap, consistency/action versions, selection, and interference. Mechanistic language alone is not identification.

In strategic networks, queues, epidemics, and markets, deployment changes behavior. Include feedback in the state or explicitly limit the claim to the existing regime.

## Step 13 — Stress the model, not only parameters

Compare:

- alternate mechanisms;
- alternate observation processes;
- alternate objectives and constraints;
- distribution shift or correlated failure;
- missing node/edge or sensor failure;
- delayed data and action;
- solver failure and capacity boundary;
- adversarial but in-scope scenario.

A robustness proof over set $U$ says nothing outside $U$. Explain why each scenario belongs and which plausible scenario remains absent.

For financial risk, include tail severity and liquidity/funding constraints; a quantile is not maximum loss. Keep all examples non-advisory.

## Step 14 — Communicate a result with its certificate

Use this result template:

> Under **hypotheses**, with **inputs and units**, method **M** produced **result**. Internal checks **C** and independent evidence **V** support **claim type** over **scope**. The decision is stable for **range** and changes at **boundary**. It does not establish **excluded inference**.

Attach the certificate: cut, dual feasible bound, conservation residual, exact limiting case, reconstruction resolution, or statewise replication.

## Step 15 — Monitor and define a fallback

Choose leading indicators:

- input range or dimensionless group leaves applicability domain;
- residual mean or tail exceeds threshold;
- queue load approaches one;
- covariance or calibration changes;
- observation availability or sensor version changes;
- action distribution loses overlap;
- solver status is nonoptimal, infeasible, singular, or unstable.

Predefine a fallback: abstain, use a conservative baseline, request review, collect another measurement, or switch to manual control. Monitoring without an action is only logging.

## Worked miniature audit

### Worked example: a service desk near capacity

A service desk has estimated $\\lambda =8/hour$, $\\mu =10/hour$.

**Use.** Compare current desk with one modest arrival increase under ordinary weekday operation.

**Formula.** Under M/M/1, $W=1/(\\mu -\\lambda )=0.5 hour$.

**Units.** In the continuous-time queue, arrival and service event rates have
dimension inverse time; customer counts are counts of events. Thus $W$ is in
hours and $L=\\lambda W$ is a mean number of customers.

**Boundary.** Requires $\\lambda <\\mu$; at or above capacity no stationary mean exists.

**Sensitivity.** $\\partial W/\\partial \\lambda =0.25 hour^{2}$ at current point and grows sharply near capacity.

**Identifiability.** Timestamped arrival and completion records must distinguish attempted arrivals, abandonment, and service durations.

**Verification.** Exact formula and Little's law $L=\\lambda W=4$ cross-check.

**Validation.** Examine interarrival/service dependence, time-varying rates, priorities, and later held-out days.

**Causal boundary.** The formula compares conditional modeled rates; it does not identify how staffing changes arrival behavior.

**Fallback.** Do not use stationary output during surge or when estimated $\\lambda \\ge 0.95\\mu$; use a transient operational procedure and escalation.

## Exercises with hints and complete solutions

### Exercise 1
<a id="trustworthy-model-compute-validate-ex-1"></a>

Keep service rate 10 per hour and increase the model's arrival rate from 8
to 9 per hour. Compute mean time in the system and mean number present under
the same stationary M/M/1 assumptions.

<details><summary>Hint 1</summary>

Both arrival rates are below service capacity, so the stated stationary formulas apply.

</details>
<details><summary>Hint 2</summary>

Use $W=1/(\\mu-\\lambda)$ and then Little's law $L=\\lambda W$.

</details>
<details><summary>Solution</summary>

Initially $W=1/(10-8)=1/2$ hour and $L=8/2=4$ customers. At arrival
rate 9, $W=1/(10-9)=1$ hour and $L=9$ customers. A 12.5 per cent increase
in the arrival rate doubles the model's mean time in system. This demonstrates
near-capacity sensitivity within the unchanged assumptions; it does not prove
how an actual service change would alter arrivals or service durations.

</details>

### Exercise 2
<a id="trustworthy-model-compute-validate-ex-2"></a>

A numerical routine substitutes arrival rate 11 and service rate 10 into the
same formula and reports $W=-1$ hour. Diagnose the conclusion.

<details><summary>Hint 1</summary>

Check the formula's stability hypothesis before interpreting the arithmetic.

</details>
<details><summary>Hint 2</summary>

An M/M/1 stationary probability distribution requires traffic intensity below one.

</details>
<details><summary>Solution</summary>

Here $\\lambda>\\mu$, so no stationary finite mean time is supplied by the
M/M/1 formula. The negative number is an out-of-domain calculation, not a
negative waiting time. At equality the denominator vanishes and the stationary
finite-mean claim also fails. A transient queue model or a changed capacity
assumption is needed before reporting a meaningful performance quantity.

</details>

## Final review questions

1. Can another reader reconstruct the decision-time information set?
2. Do all additions and comparisons respect units?
3. Which dimensionless groups control regimes?
4. Which unknown combinations can observations distinguish?
5. What comes from regularization or prior information?
6. What exact case or certificate verifies computation?
7. Which unused evidence tests intended use?
8. Where does the selected action change?
9. Is any association being narrated as intervention?
10. What happens after monitoring detects failure?

The [Applied Modeling course](#/item/course-applied-modeling-standard) teaches the underlying methods. The [proof/reference volume](#/item/book-applied-modeling-proof-reference) develops theorem architecture. The [Operations Research deep dive](#/item/deep-dive-operations-research-systems) and [Financial Mathematics deep dive](#/item/deep-dive-financial-mathematics-pricing-risk) provide domain-specific audits. The [Decision Systems Laboratory](#/labs?lab=visual-lab-decision-systems) supplies exact, accessible computation examples.
`;export{e as default};