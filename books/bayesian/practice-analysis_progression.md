# From a guided analysis to an independent one

These three stages progressively remove help. They are instructional work, not the six private measurement forms. Keep the original attempt, sources consulted, assistance, revision and fresh check. Feedback should follow observed reasoning → first consequential error → repair → fresh check. No stage changes course mastery automatically. Worked references below are public self-study help; ordinary tutor retrieval and upload omit the marked answer blocks.

## Guided courier

Start after L03 (L01/L02 included). Allow 60–90 minutes. The following data and costs are invented for teaching and do not duplicate a production assessment.

A small courier wants to choose whether to buy an extra reserve service for tomorrow's four deliveries on one route. Model each delivery as on time or late. A fictional planning prior for the shared on-time probability is Beta(3,2). A distinct exchangeable historical batch contains six on-time and two late deliveries. A late delivery costs 10 units. Reserve service costs 14 units for the batch and, **for this decision exercise only**, eliminates all late-delivery losses. No other effect or cost is assumed. The historical batch is not already included in the prior.

1. Write the quantity, population and horizon: tomorrow's four deliveries on this route. Separate the shared probability p, observed outcomes and future count K of on-time deliveries. Explain the exchangeability assumption and one plausible violation.
2. Multiply prior and likelihood kernels and identify the two posterior shapes. Check their sum against prior concentration plus new observations.
3. Construct a full predictive replicate: draw one posterior p, then four conditional outcomes sharing it. Sum them. Explain why drawing an independent p for each delivery changes the joint model.
4. Derive E(K) and Var(K) using conditional expectation and variance. Compare the variance to the fixed-p calculation, and compute the expected late count.
5. Write expected loss for each action. Choose under the stipulated costs, then change the reserve cost to 8. Explain why more Monte Carlo draws cannot resolve an unrealistic reserve-service assumption.
6. Freeze a prior check and a posterior discrepancy before simulating. For example, examine extreme batch counts under the prior and clustering by route/day under posterior predictions. You have no route/day breakdown here: name what cannot be checked from the aggregate counts.

<!-- tutor-reference:start -->
### Guided courier reference

Self-study answer: the kernel is p^(3−1+6)(1−p)^(2−1+2), so p|data is Beta(9,4), concentration 13. For n=4, E(K)=36/13≈2.7692; E(4−K)=16/13≈1.2308. The beta-binomial variance is n ab(a+b+n)/[(a+b)^2(a+b+1)]=2448/2366≈1.0347. At fixed p=9/13 the binomial variance would be 144/169≈.8521. The difference comes from shared uncertainty; it is not simulation error.

Expected no-reserve loss is 10×16/13=160/13≈12.3077. Reserve loss is 14, so do not buy under these stated utilities. At cost 8, buy. Neither decision follows just from a probability of lateness exceeding one half. The reserve effectiveness is stipulated, not estimated from these observations, and a real decision would need evidence about it.

One independent simulation in a blank script could draw `p = rng.beta(9, 4, size=20000)` then `k = rng.binomial(4, p)`. Compare sample mean/variance with the exact values and report Monte Carlo error. Do not treat 20,000 replicates as additional courier observations. Prior counts from Beta(3,2) may reveal implications requiring discussion; they cannot verify domain truth. Aggregate totals alone cannot show time or route dependence.
<!-- tutor-reference:end -->

**Fresh check before moving on:** a new fictional service has posterior Beta(4,6), three future jobs, late loss 5/job and perfect-prevention cost 7. Explain the shared draw and decide under expected loss. Then explain one observation you would need before applying this toy policy to actual deliveries. Ask for help if needed and record it; no answer is required from memory.

## Scaffolded depot

Start after L09 and L10, with L05–L08 and the relevant probability/numerics bridges available. Allow 2–3 hours. This original synthetic mini-dataset records minutes late (negative means early) for five fictional depots on comparable operating days:

```text
depot,delay_minutes
A,-1
A,2
A,0
B,3
B,4
B,2
B,5
C,-2
C,1
D,7
D,9
D,6
E,0
E,2
E,1
E,3
```

Before fitting, select **one** target: a next comparable delivery at observed depot C, or two deliveries at one as-yet unobserved exchangeable depot. State why the target is conditional on comparable operations, not a causal effect of moving depots. Your chosen target determines which effect distribution and which validation unit you need. Defend what “exchangeable depots” means here; five groups give little evidence about its generality.

Complete this analysis outline; the blanks are choices to justify, not hidden grading keys:

```text
Target and horizon: ___
Data-generation / observation assumptions: ___
Initial likelihood and group structure: ___
Prior implications in minutes and between-depot variation: ___
Validation unit and transformations fitted inside training: ___
Prediction algorithm, including which draws are shared: ___
Numerical checks for the reported estimand: ___
Predictive discrepancy selected before seeing its result: ___
First consequential mismatch, proposed repair, full re-check: ___
Limitation that remains after repair: ___
```

As a starting family, consider Normal delays with depot mean alpha_j, common residual SD sigma, alpha_j drawn from Normal(mu,tau²). A **candidate**, not an elicited truth, is mu∼Normal(0,10²) minutes, tau∼HalfNormal(5) minutes, sigma∼HalfNormal(5) minutes. Check its prior predictions before adopting it. A normal delay is permissible because earliness is negative. Do not choose a positive-only likelihood and silently delete early arrivals. Compare pooled and partially pooled predictions without claiming five depots identify a precise population distribution.

Write a blank script and implement the model or a justified simpler starting model. Keep numerical warnings and failed attempts. A plotting or sampling failure is an analysis result to diagnose, not permission to fabricate output. Your report must distinguish a coordinate repair (same target) from changing a likelihood/prior (new target). After any repair, repeat numerical checks, prior implications, prediction and the originally chosen discrepancy. Do not keep trying alternatives on a held-out group and call its later score unseen validation.

<!-- tutor-reference:start -->
### Scaffolded depot checkpoints

Self-study guidance, not a completed fitted analysis: existing C predictions condition on C's observations; new-depot predictions draw one alpha_new per hyperparameter draw and share it across both deliveries, then add separate residuals. Redrawing alpha_new per delivery removes within-depot covariance. For an unseen-depot target, whole-depot holdouts assess the relevant extrapolation and all fitting/transform selection belongs in training. A comparable new visit at C has a different target; if days become ordered, future-visit claims need a chronological boundary as well.

Useful predeclared discrepancies include dispersion of depot means and the maximum absolute within-depot residual, with their small-sample limitations. An extreme D mean is not automatically an outlier to delete. Investigate exchangeability, measurement/selection, prior scale and tail behaviour. If divergences arise, investigate scales and parameterization, then fully reevaluate; adding draws alone need not help. If a heavy-tailed residual model is a justified repair, label the changed likelihood and repeat predictive checks. No posterior estimates or successful fits are asserted for this mini-dataset here.
<!-- tutor-reference:end -->

Finish with a five-minute explanation without code: identify the target, why the predictive draws are shared or separate, one held-out unit and one unresolved limitation. Have a peer ask for a fresh two-delivery construction at a different target; record any assistance.

## Independent blank script

After the prerequisites of the chosen case, use the [existing capstone](./course-capstone.md), [penguin case brief](./case-01_penguins.md) or [sensor forecasting brief](./case-02_sensor_forecasting.md). The available [C03 air-quality case](./case-03_air_quality.md) is another option for historical conditional prediction, with its own target and data restrictions. Save your plan before opening any worked script, notebook or report: **attempt → save plan → consult reference → revise**. Respect the selected case's real/synthetic provenance, target, support and holdout restrictions. C03's shared temporal process requires its local temporal teaching as well as its listed prerequisites; the depot toy above does not replace them.

Before opening a reference solution, saved notebook, result or figure, start from a blank script and freeze a dated plan: population/horizon, observation process, estimand, units/support, models/priors, training-only transformations, validation units, predictive checks, numerical evidence required, sensitivity variants and reporting rules. Save a hash or immutable copy with the initial script. The provided starter can orient data access but is assistance, and using it must be logged. For C03, follow its independent freeze and outcome-custody rules; this exercise cannot authorize viewing sealed outcomes.

Retain a ledger with original attempt, assistance source and date, observed problem, proposed intervention, whether it changes the target, and reevaluation evidence. Keep failed runs. Do not retrospectively describe exploratory work as a prospective test. After final scores have been seen, label revised model comparisons development and require fresh outer evaluation for a new validation claim. Do not open saved answer-bearing outputs simply to choose a model that agrees with them.

Deliver a reproducible script, data/provenance note, model/target statement, predictive report with uncertainty, full repair ledger and a short decision or interpretation memo. Defend one limitation individually: what the data cannot identify, what the computation cannot certify, or what a deployment shift would invalidate. Consult a reference only after saving the independent attempt, marking all subsequent revisions assisted. Transfer measurement uses separate unreleased forms and occurs without this assistance.

Budget the whole additive practice package at 10–17 planning hours after prerequisites, including diagnostics/revisits, these stages and a fresh transfer analysis. Log actual time; this estimate has no learner-study validation. If the capstone or a case already occupies your route, count its independent stage once and record the substitution instead of adding its full duration twice. Original 12/24-week routes remain unchanged; advanced continuation content has its own 24–36-hour estimate.
