var e=`---
parent_id: book-applied-modeling-proof-reference
matter_id: synthesis-projects-solutions
title: "Synthesis Projects, Solution Architecture, and Reference Back Matter"
level: advanced-undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Synthesis Projects, Solution Architecture, and Reference Back Matter

## Purpose and dependencies

This capstone chapter depends on Chapters 1–6 and at least two application chapters. It defines the volume's cumulative projects, solution standard, notation policy, and index plan.

## Solution standard

A full solution must show the decisive reasoning, not only a numerical answer. For modeling work it should include:

1. target and information boundary;
2. variable definitions with units;
3. equations derived from mechanisms or formal assumptions;
4. hypothesis and feasibility checks before a theorem or formula is used;
5. exact calculation or reproducible algorithm;
6. sensitivity, identifiability, and uncertainty statement;
7. validation or verification evidence;
8. claim boundary and continuation.

Proof solutions should identify the theorem dependency and where each hypothesis enters. Computational solutions should name representation, invariant, stopping rule, and error. A hint should advance one conceptual step without revealing the entire route.

## Capstone A: service redesign

Choose a small service system. Compare an exact queue baseline with an empirical or simulated model that includes one violated baseline assumption such as schedules, multiple servers, or abandonment. Deliver a timestamped data contract, Little's-law audit, tail wait metric, staffing decision frontier, and causal nonclaim.

**Required transfer.** Show two systems with equal utilization but different absolute time scales. Identify a regime where the stationary formula is invalid. Explain whose waiting or workload is absent from the objective.

## Capstone B: resilient supply network

Construct a capacitated flow network with inventory at one or more nodes and two disruption scenarios. Produce a feasible flow and cut certificate in the base case. Compare a here-and-now stocking decision with scenario recourse. Audit whether static capacity, travel time, correlated failures, and unmet-demand penalties are defensible.

**Required transfer.** Find one capacity increase with zero marginal value because another cut binds, and one change that alters the minimum cut.

## Capstone C: inverse biological model

Select a small compartment or population model and a separate observation map. Demonstrate structural non-identifiability or weak practical identification, then propose an additional measurement or experiment. Nondimensionalize the state equations, profile at least one parameter, and keep predictive fit separate from intervention attribution.

**Required transfer.** Construct two parameter sets with nearly identical observations and materially different unobserved states.

## Capstone D: signal reconstruction

Generate a known signal, apply a sampling or blur operator, add controlled noise, and compare unregularized and regularized inverses. Report singular values, forward residual, penalty, resolution, and reconstruction error—truth error is available only because the experiment is synthetic.

**Required transfer.** Exhibit aliasing or a null-space pair and explain which prior restriction selects one reconstruction.

## Capstone E: financial model-risk audit

Build a one-period finite-state market with traded assets and a contingent claim. Determine whether the claim is replicated; if so, give the portfolio and statewise verification. If incomplete, report no-arbitrage bounds under declared constraints. Add a two-asset moment table and stress covariance inputs.

The report must state that it is educational mathematics, not advice; separate physical probabilities from state prices; and list trading assumptions whose failure changes the result.

## Oral and written defense prompts

- Which conclusion survives a change of units?
- Which parameter combination is observed, and which is assumed?
- What is the strongest available certificate?
- Where does a probability distribution enter, and why that one?
- What would falsify the model for its intended use?
- Which output is predictive, causal, equilibrium-based, or valuation-based?
- What action is robust, and over exactly which set?
- What is the fallback beyond the applicability domain?

## Notation and convention plan

The back matter will index symbols by chapter and meaning, avoiding false global uniqueness. It will include:

- units and dimension vectors;
- state, control, parameter, observation, and action symbols;
- probability-law versus pricing-measure conventions;
- graph orientation and flow sign conventions;
- queue rate and time metrics;
- loss-versus-return signs in finance;
- norm and conditioning conventions;
- theorem, algorithm, dataset, application, and failure-mode indexes.

## Reference policy

Use primary sources for named theorems and historical claims, standard references for established theory, and dated authoritative sources for empirical or regulatory statements. Open problems and current practice require a status date. Citations support claims; they do not replace derivations promised by the text.

## Cumulative review exercises

1. A model has low held-out error but a rank-deficient observation map. Reconcile the facts.
2. A robust optimizer, no-arbitrage price, and Nash equilibrium each use a different universal or fixed-point claim. State their incomparable scopes.
3. Explain how dimensionless scaling, dual certificates, and residual checks jointly audit a flow model without validating road data.
4. Give a causal question for a queue intervention and list exchangeability, positivity, consistency, and interference concerns.

## Solution sketches

1. Predictions of an observed combination can be stable while individual parameters remain unidentified; parameter uniqueness is not necessary for in-domain prediction.
2. Robustness holds over a declared uncertainty set; no-arbitrage constrains attainable traded payoffs; equilibrium blocks unilateral deviations under specified payoffs. None implies the others or supplies moral preference.
3. Scaling checks unit invariance, duality proves optimum of the representation, and residuals verify computation. Missing roads and uncertain capacities live outside these internal checks.
4. Ask how adding a server changes waits. Staffing assignment may respond to demand; some demand ranges may never receive each action; versions of “add a server” must be defined; arrivals can reroute between sites, creating interference.

## Worked use contract

For the queue-intervention exercise, one acceptable contract is: **target**—the mean waiting time among arrivals to the represented sites during the next staffing period; **action**—assign one additional server for the entire period under a named routing rule; **state and data**—timestamped arrivals, service starts/completions, staffing, site, and routing eligibility; **structural assumptions**—consistent intervention versions, no cross-site spillover beyond the routing model, and conditional exchangeability/positivity for the staffing comparison; **computation**—fit on predeclared training periods and reproduce queue simulation with fixed seeds and event-order conventions; **validation**—held-out time blocks, load-stratified calibration, and sensitivity to arrival/service dependence; **decision rule**—first require a predeclared uncertainty interval whose lower bound for waiting-hours saved is strictly positive, then require the conservative ratio $\\max(0,U_C)/L_H$ to fall below the declared threshold, where $U_C$ is the upper incremental-cost bound and $L_H>0$ is the lower waiting-hours-saved bound. Otherwise retain the fallback staffing rule and do not form a misleading ratio with zero or negative savings. Each clause names an object that can fail; none converts observational fit into a causal guarantee by itself.

## A fixed core capstone: cooling, cost and a deadline

This section supplies a completely specified undergraduate instance of the course's model-compute-decide report. The preceding specialist Capstones A–E retain their graduate preparation and open project briefs. Here, complete the algebra and numerical parts of [AM-CV-1](#/item/book-applied-modeling-proof-reference?chapter=cooling-model-validation), the course's five review problems and the selected optimization Exercises 7, 8, 9, 14 and 15 before beginning. The cooling source derives its ODE and numerical bounds; the optimization source teaches the difference between feasibility, a bound and a certificate. Fractions, logarithms, derivatives, geometric series and nonnegative inequalities suffice for this fixed instance. Its full workload has not been measured. The retained draft PDF predates this online addition.

### AM-MCD-1: the question before its public model

At time zero choose exactly one of two admissible actions, **P** or **F**, before learning which of two scenarios occurs. Interpolation, switching actions later and scenario-specific time-zero choices are outside the admissible set. Minimize the action's cost subject to a temperature deadline in **both** scenarios and the budget below. No probability law is supplied, so averaging scenarios would answer a different question.

All values are **authored synthetic model inputs**. The action-dependent retention factors, proportional-excess equations, costs and uncertainty set are explicitly GIVEN for this exercise. The original cooling fit supplies no observations under F and cannot identify an intervention effect. The labels P and F name mathematical alternatives; the answer is a conditional model decision, not a real cooling or safety recommendation.

| Input | Value | Meaning or unit |
| --- | --- | --- |
| A | 20 | constant ambient, degrees Celsius |
| B | 60 | positive initial temperature excess, degrees Celsius |
| Delta | 10 | observation interval, minutes |
| D | 20 | decision deadline, minutes |
| H | 30 | inclusive maximum deadline temperature, degrees Celsius |
| budget | 3 | synthetic credits |
| m | 40 | Euler steps per observation interval for the numerical check |
| N | 10 | terms in the rational logarithm enclosure |
| rounding | 1/10000 | allowed output rounding contribution, degrees Celsius |
| numerical budget | 1/4 | total numerical error budget, degrees Celsius |

For action $a$ and scenario $s$, the GIVEN retention $q_{a,s}$ is the fraction of positive excess remaining after one interval. The GIVEN equation is $T'=-k_{a,s}(T-A)$, with $k_{a,s}=-\\log(q_{a,s})/\\Delta>0$ and $T(0)=A+B$. Costs are paid once at time zero and are identical in both scenarios.

| Scenario | Action | Retention q | Cost (credits) |
| --- | --- | --- | --- |
| normal | P | 1/2 | 0 |
| adverse | P | 2/3 | 0 |
| normal | F | 1/4 | 3 |
| adverse | F | 1/3 | 3 |

The primary, changed and return reports use these fixed contracts; the later sections give their complete public keys.

| Work | Deadline (minutes) | Target (degrees Celsius) | Budget (credits) |
| --- | --- | --- | --- |
| AM-MCD-1 | 20 | 30 | 3 |
| AM-MCD-2 | 20 | 50 | 0 |
| AM-MCD-R | 10 | 35 | 3 |

Carry the original calibration records $(0,80),(10,50),(20,35)$ and frozen test record $(30,55/2)$ from AM-CV-1 into the report. Fit the original-scale line and positive-excess exponential using all three calibration records; retain their residual table and graph. Reuse the complete AM-CV-1 keys after your attempt, explicitly recording that exposure. The normal P law agrees with that fitted exponential. The other three laws are supplied scenarios, not further fitted results.

Submit all twelve deliverables in the original course capstone: use contract; units; relationship diagram or text; mechanism derivation; scaling; limiting case and computational check; sensitivity/identifiability; two uncertainty scenarios; fitting/validation separation; claim ledger; reproducible computation and full table; and a stable decision with its failure boundary. Give an exhaustive feasibility/optimality certificate, a target-switch calculation and a budget-infeasible case. For the adverse F equation at the deadline, derive Euler from the derivative and certify total error below the stated numerical budget, accounting separately for stepping, logarithm evaluation and output rounding. Compare with the exact observation-grid value independently of the stepping algorithm.

**One-step hint.** Compute the excess after two complete intervals before comparing costs. A cheaper action that violates a hard deadline is not feasible. A numerical method that systematically underestimates temperature needs an error allowance before its output can certify a maximum-temperature constraint.

### Complete primary public model: contract, equations and scales

**1. Use contract.** At time zero, with only the supplied information, choose $a\\in\\{P,F\\}$ to minimize $C_a$, subject to $C_a\\le3$ and $T_{a,s}(20)\\le30$ for every $s\\in\\{\\text{normal},\\text{adverse}\\}$. The represented object has one uniform temperature, constant ambient, positive initial excess and a positive constant decay rate for the chosen action/scenario throughout the episode. Sensor lag, spatial gradients, ambient drift, changing rates and new actions are excluded. The domain is this finite synthetic model. Failure to certify an admissible action yields “no feasible action in the supplied set,” with no invented replacement action.

**2. Variable and units table.** In addition to the supplied input table, $t,h$ have units minutes; $T,A,B,x=T-A$ have temperature or temperature-difference units; $k$ has units inverse minutes; and $q,\\tau=t/\\Delta,\\theta=(T-A)/B,kh$ are dimensionless. Celsius differences have the same size as kelvin differences. Form ratios of excesses, not ratios of raw Celsius values. The fixed costs have synthetic-credit units; no conversion to time, temperature or monetary value is implied.

**3. Relationship list.** Action and scenario select $q$ and hence $k$; initial excess and the proportional-excess equation determine $x(t)$; adding ambient determines $T(t)$; the deadline and target determine thermal feasibility; budget determines cost feasibility; least cost orders the remaining admissible actions. The scenario is unknown at the decision time. It cannot select a different time-zero action retrospectively.

**4. Derivation.** Under the GIVEN law, $x'=-kx$ and $x(0)=60$. Integrating $x'/x=-k$ on the positive branch gives $\\log(x/60)=-kt$. Thus

$$
T_{a,s}(t)=20+60e^{-k_{a,s}t}=20+60q_{a,s}^{t/10}.
$$

The logarithm's argument is dimensionless. Direct differentiation and the initial value verify this solution. At integer observation indices $j$, $T(j\\Delta)=A+Bq^j$ is an exact rational computation for the supplied rational $q$ values.

**5. Scaling.** With $\\theta=(T-20)/60$ and $\\tau=t/10$, the equation becomes $d\\theta/d\\tau=\\log(q)\\theta$ with $\\theta(0)=1$. The deadline is $\\tau=2$ and the target is $\\theta\\le1/6$. The ambient and initial excess set scales; the dimensionless retention distinguishes the four trajectories. Changing minutes to seconds divides each numerical rate $k$ by 60 and multiplies the time coordinates by 60, preserving $kt$ and every decision.

**6. Limits and computational checks.** Every law gives $T(0)=80$, remains strictly above ambient at every finite nonnegative time, and tends to 20 as $t\\to\\infty$. With fixed finite $t$, letting $k\\to0^+$ gives the no-decay limit 80. These are exact properties of the stipulated equations. The full rational grid below provides a separate reference for the finite-step calculation.

| Scenario | Action | T(0) | T(10) | T(20) | T(30) |
| --- | --- | --- | --- | --- | --- |
| normal | P | 80 | 50 | 35 | 55/2 |
| adverse | P | 80 | 60 | 140/3 | 340/9 |
| normal | F | 80 | 35 | 95/4 | 335/16 |
| adverse | F | 80 | 40 | 80/3 | 200/9 |

### Complete primary public model: uncertainty and the decision

**7. Sensitivity and identification.** At the deadline $T(20)=20+60q^2$, so $\\partial T(20)/\\partial q=120q$ degrees Celsius per unit change in the dimensionless retention. For the target 30, thermal feasibility is exactly $q^2\\le1/6$; on the positive branch this is $q\\le1/\\sqrt6$. The adverse F value $1/3$ satisfies this strictly. This algebra describes a hypothetical perturbation boundary inside the given model; it does not supply evidence for additional real scenarios. For fixed $q$, the temperature decreases with deadline time. Costs and the admissible action set are additional decision inputs, independent of a temperature fit.

With known ambient, the first exact calibration reading identifies $B=60$, and the second identifies $q=1/2$; the third checks calibration consistency. The AM-CV-1 squared-loss argument proves that this zero-loss curve uses all three records. If ambient were unknown and only the first two observations were available, infinitely many $(A,B,q)$ would agree with them, as the existing changed cooling key demonstrates. Neither a smaller Euler step nor a perfect baseline fit identifies the F action law. That law and the adverse scenario remain assumptions supplied for the decision exercise.

**8. Two uncertainty scenarios.** Normal and adverse specify four conditional laws before calculation. The robust requirement is the intersection of their feasible-action sets. There are no estimated probabilities, confidence levels or random sensor errors in this decision table. The bounded-sensor audit in the cooling chapter is a separate analysis; its envelope is not silently merged into these scenario inputs.

**9. Fitting versus validation evidence.** AM-CV-1 gives the line $155/2-(9/4)t$ with calibration residuals $5/2,-5,5/2$ and squared loss $75/2$, while the excess exponential gives zero calibration residuals. Frozen test predictions at 30 minutes are 10 and $55/2$; their test residuals are $35/2$ and zero. Retain the source's graph and all-three-record justification. These authored observations supply finite synthetic consistency evidence. They do not empirically validate normal P, any F trajectory or an intervention effect. A real-use validation design would need unused observations under the relevant actions and conditions, an observation-error model, predeclared acceptance limits and an applicability/fallback contract. No such evidence is supplied here.

**10. Claim ledger.**

| Claim type | Supported conclusion and evidence | Boundary |
| --- | --- | --- |
| Conditional prediction | The four exact grid trajectories follow from the given ODEs, initial value and scenario retentions | Agreement with authored records is not evidence that a real object obeys these laws |
| Conditional optimal decision | Exhaustive feasibility and cost comparisons over two actions certify the least-cost feasible action | The objective, budget, target and scenario set are stipulated choices |
| Causal effect | No intervention effect is identified by the supplied baseline observations | Action-dependent laws are GIVEN, not estimated causal responses |
| Equilibrium | $T=20$ is the equilibrium of each stipulated scalar ODE; positive-excess trajectories approach it | No finite-time attainment, behavioral equilibrium or Nash claim follows |
| Conditional valuation | Costs are fixed synthetic credits used to order feasible actions | No traded payoff, state prices, no-arbitrage valuation or financial advice is represented |

**11. Reproducible computation.** The grid table uses exact rational powers. The numerical continuation below supplies a fixed-step recurrence, a stopping rule of 80 updates, rational logarithm bounds and an independent exact grid reference. No random seed is needed for these deterministic computations. The standalone listing uses Python 3.10 or newer with only standard-library fractions and reads no files or external data.

**12. Stable decision and certificate.** Both actions satisfy the budget. P has deadline temperatures $35>30$ and $140/3>30$, so it violates both scenario constraints. F has $95/4<30$ and $80/3<30$, so it satisfies both. Its worst temperature is $80/3$, with slack $30-80/3=10/3$ degrees Celsius. Enumeration exhausts the two admissible actions; F is the unique feasible action and therefore the unique least-cost feasible action, at cost 3. The cost difference 3 does not excuse P's violated hard constraints. Continuous interpolation between P and F, randomized deadline violations and a future-dependent choice are outside the stated feasible set.

Holding the budget at 3 and changing only the inclusive target $H$ gives the complete switch map:

| Target interval | Robust feasible actions | Least-cost decision |
| --- | --- | --- |
| H < 80/3 | none | no feasible action |
| 80/3 <= H < 140/3 | F | F, cost 3 |
| H >= 140/3 | P and F | P, cost 0 |

The endpoint equalities are feasible because the requirement is inclusive. In particular, F remains the choice throughout the middle interval, including the original target 30. At target 30, reducing the budget below 3 removes F while P still fails thermally, proving infeasibility. Outside the given action laws and two-scenario uncertainty set, this report supports no action recommendation. It cannot certify unlisted actions or diagnose which real assumption would fail.

### Numerical certificate: adverse F at the deadline

Here $q=1/3$, $\\ell=-\\log q=\\log3$, $k=\\ell/10$, $m=40$ and $h=10/40=1/4$ minute. Forward Euler gives

$$
x_{n+1}=(1-\\ell/m)x_n,\\qquad x_0=60,\\qquad n=2m=80.
$$

The cooling chapter proves, for $0<\\ell/m<1$,

$$
0\\le60q^2-60(1-\\ell/m)^{2m}
\\le60q^2\\frac{\\ell^2}{m-\\ell}.
$$

The left side is nonnegative: Euler underestimates the positive exact excess. A sub-target Euler output alone would therefore be insufficient.

For $r=3$, put $z=(r-1)/(r+1)=1/2$. Integrating the geometric series yields

$$
L_N=2\\sum_{a=0}^{N-1}\\frac{z^{2a+1}}{2a+1}<\\ell<L_N+R_N,
\\qquad R_N=\\frac{2z^{2N+1}}{(2N+1)(1-z^2)}.
$$

The first two terms give $L_2=13/12$ and $R_2=1/60$, hence $\\ell<11/10<40$, which verifies positive decreasing Euler excess. The stepping bound is therefore strictly less than

$$
\\frac{(20/3)(11/10)^2}{40-11/10}=\\frac{242}{1167}.
$$

With $N=10$, $R_{10}=1/16515072$. The derivative of $60(1-\\ell/m)^{2m}$ has magnitude at most 120 on this positive-step branch, so evaluating the logarithm anywhere in its rational enclosure contributes at most $120R_{10}$. With an output-rounding allowance $1/10000$,

$$
\\frac{242}{1167}+\\frac{120}{16515072}+\\frac1{10000}<\\frac14.
$$

| Numerical contribution | Bound (degrees Celsius) |
| --- | --- |
| stepping | 242/1167 |
| logarithm | 120/16515072 |
| rounding | 1/10000 |
| total budget | 1/4 |

The independently computed exact temperature is $20+60(1/3)^2=80/3$. The logarithm-enclosed Euler endpoints below bracket Euler's value for the exact logarithm. The exact grid value and the total numerical allowance also satisfy $80/3+1/4<30$; thus this computed-model feasibility is well separated from the deadline. Stepping, logarithm and rounding bounds concern solving the chosen equation. They do not cover observation error, uncertain physical parameters or model discrepancy.

### A bounded standalone reference computation

The following fixed-data program reproduces the complete grid and the rational certificates. Its assertions check this authored instance. An exact hand ledger using the displayed powers and bounds is also a complete reproduction; executing code is not an assessment requirement.

\`\`\`python
from fractions import Fraction as F

# EULER-APPLIED-MCD-V1: fixed synthetic inputs, not a fitted intervention law.
AMBIENT, EXCESS = F(20), F(60)
COST = {"P": F(0), "F": F(3)}
RETENTION = {
    "normal": {"P": F(1, 2), "F": F(1, 4)},
    "adverse": {"P": F(2, 3), "F": F(1, 3)},
}


def temperature(q: F, intervals: int) -> F:
    if not 0 < q < 1 or type(intervals) is not int or not 0 <= intervals <= 3:
        raise ValueError("Use a cooling retention and zero to three intervals")
    return AMBIENT + EXCESS * q ** intervals


def choose(target: F, budget: F, intervals: int = 2) -> str | None:
    if budget < 0 or type(intervals) is not int or intervals not in (1, 2):
        raise ValueError("Use a nonnegative budget and one or two intervals")
    feasible = [action for action in COST if COST[action] <= budget and all(
        temperature(case[action], intervals) <= target
        for case in RETENTION.values())]
    return min(feasible, key=COST.get) if feasible else None


def outward(lower: F, upper: F) -> str:
    if not 0 <= lower <= upper:
        raise ValueError("This fixed positive-temperature display needs ordered bounds")
    scale = 10000
    left = lower.numerator * scale // lower.denominator
    right = -((-upper.numerator * scale) // upper.denominator)
    def decimal(value: int) -> str:
        return f"{value // scale}.{value % scale:04d}"
    return "[" + decimal(left) + ", " + decimal(right) + "]"


for scenario, case in RETENTION.items():
    for action, q in case.items():
        print(scenario, action, [str(temperature(q, j)) for j in range(4)])

assert choose(F(30), F(3)) == "F"
assert choose(F(80, 3), F(3)) == "F"
assert choose(F(80, 3) - F(1, 100), F(3)) is None
assert choose(F(140, 3), F(3)) == "P"
assert choose(F(30), F(2)) is None
assert choose(F(50), F(0)) == "P"
assert choose(F(35), F(3), 1) is None

z, terms, m = F(1, 2), 10, 40
ell_low = 2 * sum((z ** (2 * a + 1) / (2 * a + 1)
                   for a in range(terms)), F(0))
remainder = 2 * z ** (2 * terms + 1) / (
    (2 * terms + 1) * (1 - z * z))
ell_high = ell_low + remainder
assert remainder == F(1, 16515072)
assert 0 < ell_low < ell_high < F(11, 10) < m
euler_low = AMBIENT + EXCESS * (1 - ell_high / m) ** (2 * m)
euler_high = AMBIENT + EXCESS * (1 - ell_low / m) ** (2 * m)
recurrent = EXCESS
for _ in range(2 * m):
    recurrent *= 1 - ell_low / m
assert AMBIENT + recurrent == euler_high
exact = temperature(RETENTION["adverse"]["F"], 2)
stepping = (exact - AMBIENT) * ell_high ** 2 / (m - ell_high)
logarithm = 120 * remainder
assert euler_low <= euler_high < exact
assert exact - euler_low <= stepping + logarithm
assert stepping < F(242, 1167)
assert F(242, 1167) + logarithm + F(1, 10000) < F(1, 4)
assert exact + F(1, 4) < 30
print("Adverse F Euler at 20 minutes:", outward(euler_low, euler_high))
print("Exact grid reference:", exact, "; total numerical allowance < 1/4 C")
\`\`\`

### AM-MCD-2: changed target, complete public key

Keep the equations, actions, scenarios and 20-minute deadline. Change only the target to $H=50$ and the available budget to zero. Reconstruct the twelve-part report, stating which derivations remain applicable and recomputing feasibility and the decision before using the earlier model.

**Complete changed key.** The same exact grid and ODE derivation apply because neither the laws nor time changed. P's worst deadline temperature is $140/3<50$, so it meets both thermal constraints and its zero cost meets the budget. F's temperatures also meet the target, but cost 3 violates the zero budget. P is the only feasible action and is uniquely optimal with value zero. Nonnegative action costs independently give the matching lower bound zero. For P the worst thermal slack is $50-140/3=10/3$. The scale target becomes $(50-20)/60=1/2$. At this unchanged deadline the sensitivity remains $\\partial T(20)/\\partial q=120q$, while the changed thermal boundary is $q^2\\le1/2$, or $q\\le1/\\sqrt2$ on the positive branch. The data-identification, synthetic validation and causal boundaries are unchanged. The adverse F numerical calculation remains a check of its given equation, but supplies no feasibility evidence for an unaffordable action. This distinction belongs in the revised claim ledger.

### AM-MCD-R: later public return, complete public key

At another sitting if useful, close the earlier keys, record the date and help used, and change the deadline to 10 minutes, target to 35 and budget to 3. Both scenarios remain possible. Submit a public reconstruction of all twelve deliverables, highlighting the information boundary and the no-feasible-action conclusion. The questions and key are public; a date or declaration does not establish an enforced delay or unseen performance.

**Complete return key.** Now the normalized deadline is $\\tau=1$ and the normalized target is $(35-20)/60=1/4$. The output is $T(10)=20+60q$, so the revised sensitivity is $\\partial T(10)/\\partial q=60$ and the thermal boundary is $q\\le1/4$. P gives 50 and 60, so it fails both thermal constraints. F gives 35 and 40: equality passes in the normal scenario, but the adverse scenario fails. Both costs meet the budget, yet neither action meets the robust thermal requirement. Enumeration certifies that the feasible set is empty. Choosing F after inspecting only the normal row would replace the declared robust problem with a different one. Selecting P in one future and F in another at time zero would also violate the information contract. Exact rational powers require no integration tolerance here; the earlier 20-minute Euler certificate is not a certificate for a different reporting time without recalculation. The ODE, units, scaling method, limiting cases, baseline identification argument, two scenarios and fitting/validation separation remain applicable. Update the claim ledger to “no admissible action certified under the supplied constraints”; a real-world fallback requires new authorized actions and evidence, which are absent.

### Twelve-deliverable self-review and retained work

For each row use **shown**, **needs repair** or **used help**, pointing to the actual line in your worksheet. These are descriptive self-study labels, not grades.

| Original deliverable | Complete model location | Focused repair |
| --- | --- | --- |
| Use contract | Primary 1; changed/return target, time and budget | Name the decision time and require one action before the scenario is known |
| Variables and units | Input table and primary 2 | Distinguish temperature from excess, and check inverse-minute rates |
| Diagram or relationship list | Primary 3 | Connect action/scenario to law, state, constraint and cost |
| Derivation from mechanisms | GIVEN rate law and primary 4 | Integrate positive excess and verify initial value/derivative |
| Dimensionless or scale analysis | Primary 5; changed/return normalized targets | Scale both time and excess; preserve the target inequality |
| Limiting case and computational check | Primary 6, exact grid and Euler certificate | Check ambient, positive branch, initial and no-decay limits |
| Sensitivity and identifiability | Primary 7 and target-switch map | Separate baseline parameter identification from given action laws |
| At least two uncertainty scenarios | Given normal/adverse table and primary 8 | Use an intersection of constraints; no probabilities were supplied |
| Validation separate from fitting | Primary 9 and retained AM-CV-1 work | Keep the frozen test outside fitting and state its synthetic scope |
| Prediction/causal/equilibrium/valuation ledger | Primary 10 and each changed conclusion | State which claim is mathematical, assumed or unsupported |
| Reproducible computation and complete table | Primary 11, exact grid, rational listing and numerical certificate | Show exact fractions and separate stepping, logarithm and rounding |
| Stable decision and unsupported boundary | Primary 12, switch map, budget case and return infeasibility | Certify the full admissible set and decline to invent an unlisted action |

Retain separate \`AM-MCD-1-first.txt\`, \`AM-MCD-1-comparison.txt\` and \`AM-MCD-1-revised.txt\` files, followed by the corresponding changed files and \`AM-MCD-R-first.txt\` with its own comparison/revision. Record earlier public models and help used. Preserve the first attempt when correcting it. The [worksheet portfolio workflow](/guide/learner-records/#keep-a-worksheet-portfolio) describes manual recovery; the reading note remains mutable and does not retain every worksheet. These native tasks add no registered shared writing task, score, programme stage or mastery award.
`;export{e as default};