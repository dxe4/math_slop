var e=`---
parent_id: book-applied-modeling-proof-reference
matter_id: reader-guide-and-modeling-contract
title: "Reader Guide and Modeling Contract"
license: CC BY-SA 4.0
---

# Reader Guide and Modeling Contract {#section-1-reader-guide-and-modeling-contract}

<a id="section-1-what-this-volume-promises"></a>
## What this volume promises {#section-3-what-this-volume-promises}

Applied mathematics is not a bag of equations waiting to be attached to a story. A model connects a question about a system to a representation, evidence, a calculation, and a claim. Every connection can succeed or fail for a different reason. This book develops mathematics for inspecting those connections: dimensional invariance, perturbation, identifiability, regularization, validation, optimization, stochastic decisions, networks, queues, strategic interaction, biological dynamics, signals, financial valuation, and reproducible computation.

The organizing promise is simple: every important result should say what it guarantees, what information it consumes, and where its authority ends. A proof of convergence is not evidence that the limiting model describes a population. A unique optimum is not evidence that the written objective captures every value at stake. A fitted mechanism is not automatically a causal intervention model. Conversely, empirical uncertainty does not make mathematical reasoning optional. Mathematics exposes conservation laws, incompatible assumptions, unidentifiable parameters, unstable computations, dominated decisions, and claims that cannot follow from the evidence offered.

This is an L2–L3 course in mathematical modelling. Required entry preparation is Year 1 calculus and linear algebra: derivatives, integrals, small matrices, vectors and linear systems. Use [Calculus](/calculus/) and [Lucent Linear Algebra](/lucent/web/#/course/linear-algebra) for those courses, or [Precalculus](/atlas/#/item/book-precalculus) for earlier algebra and functions. Probability, elementary ODE models and optimisation enter at their named application chapters; each chapter states its additional preparation.

Begin with model contracts and then the [cooling audit](../cooling-model-validation.md), now chapter 2. Chapters 3–7 build dimensions, uncertainty, sensitivity, identification and validation around that example. Chapters 8–15 apply those ideas. The [reproducible-computation reading](../reproducible-model-computation.md) and [synthesis projects](../synthesis-projects-solutions.md) remain available as back matter. The manuscript is Draft: the fifteen chapters include worked examples and staged exercise help.

<a id="section-11-the-model-use-contract"></a>
## The model-use contract {#section-13-the-model-use-contract}

Before selecting a method, write a compact contract with seven fields.

1. **Question.** What quantity, comparison, decision, or mechanism is being investigated? Name the population, spatial and temporal scale, and intended user.
2. **Representation.** What objects stand for the system—states, parameters, networks, probability laws, feasible sets, or signals—and what has been omitted?
3. **Observation.** How are recorded values produced from latent states? Include units, sampling, censoring, missingness, aggregation, and measurement error.
4. **Computation.** Which finite algorithm turns inputs into outputs? State tolerances, initial conditions, randomness, discretization, and failure signals.
5. **Evidence.** Which observations distinguish the proposed representation from alternatives? Separate calibration data, validation data, structural information, and value judgments.
6. **Claim.** Is the output descriptive, predictive, causal, prescriptive, or a conditional mathematical consequence? Name its horizon and conditioning information.
7. **Fallback.** What action is taken when diagnostics fail, inputs leave the supported regime, or consequences exceed the model's authority?

The contract is not paperwork placed after analysis. It determines which theorem is relevant. If the question concerns intervention, a predictive error bound is insufficient. If it concerns a queue's long-run mean, a transient simulation without a stability argument is insufficient. If it concerns a financial claim, physical probabilities and pricing probabilities must not be exchanged silently.

<a id="section-25-worked-contract-a-clinic-appointment-system"></a>
### Worked contract: a clinic appointment system {#section-27-worked-contract-a-clinic-appointment-system}

Suppose a clinic considers changing appointment capacity. The question is the distribution of patient waiting time over the next quarter under several staffing schedules, not merely the average number in the waiting room on one sampled day. The representation is a time-varying multiclass queue with cancellations and priority rules. The observation map records booked time, arrival time, service start, completion, cancellation, and missing timestamps. The computation is a discrete-event simulation with fixed scenario seeds and a queue-balance invariant. Evidence includes held-out weeks, service-time checks, and staff review of exceptional pathways. The claim is a conditional scenario comparison, not a causal estimate unless the scheduling intervention is identified. The fallback retains current staffing whenever data completeness or overload diagnostics fail.

That contract directs the reader to the uncertainty, queueing, validation, and reproducible-computation chapters. It also prevents an $M/M/1$ formula from being presented as an empirical conclusion when arrivals are scheduled, service classes differ, and capacity varies by hour.

<a id="section-31-four-reading-routes"></a>
## Four reading routes {#section-33-four-reading-routes}

**Proof spine.** Read Model Contracts; Dimensions, Scales, Similarity, and Perturbation; Uncertainty, Evidence, and Conditional Claims; Sensitivity and Conditioning; Identifiability and Inverse Problems; Validation and Causal Boundaries; and Reproducible Model Computation. This route supplies the audit language used everywhere else.

**Decisions and operations.** After the proof spine, read Optimization and Duality; Dynamic and Stochastic Decisions; Networks; Queues and Inventory; and Games. Keep the distinction between feasibility, optimality, equilibrium, and welfare visible: they answer different questions.

**Mechanisms and measurements.** Add Biological and Epidemic Mechanisms, then Signals and Computational Inversion. These chapters emphasize state invariance, observation maps, thresholds, sampling, resolution, and regularization.

**Valuation and risk.** Read Uncertainty, Optimization, Dynamic Decisions, and Financial Valuation in that order. The route separates physical probabilities, state prices, risk summaries, model uncertainty, and recommendations.

Chapter prerequisite notes give the dependency graph. The listed routes support a broad narrative, but selective readers should follow those prerequisites rather than chapter numbers alone.

<a id="section-43-how-to-read-a-modeling-theorem"></a>
## How to read a modeling theorem {#section-45-how-to-read-a-modeling-theorem}

For each theorem, make five annotations.

- **Objects:** What mathematical types appear? A finite vector, random variable, probability law, graph, policy, trajectory, or function space cannot be exchanged for another type without a map.
- **Hypotheses:** Which assumptions are mathematical, and which assert something about the world? Convexity of a written objective is mathematical; adequacy of the objective is substantive.
- **Conclusion:** Does the theorem establish existence, uniqueness, stability, rate, optimality, identification, or an error bound? These properties are not synonyms.
- **Witness:** What object certifies the conclusion—a feasible solution, dual variable, residual, coupling, invariant, likelihood profile, or replication portfolio?
- **Boundary:** Which plausible change invalidates the result? Search for nonconvexity, rank loss, distribution shift, dependence, interference, boundary parameters, unstable discretization, or missing variables.

When a proof is difficult, first reconstruct this five-line skeleton. The algebra becomes easier once the product of the proof is known.

<a id="section-55-exercises-solutions-and-projects"></a>
## Exercises, solutions, and projects {#section-57-exercises-solutions-and-projects}

The exercises mix four kinds of work. **Derivation** exercises rebuild a mathematical result from declared assumptions. **Audit** exercises locate an unsupported transition in a proposed analysis. **Computation** exercises require an algorithm, invariant, and interpretable failure signal. **Transfer** exercises move a method to a new domain and demand an explicit new contract. Capstones combine all four.

Use solutions in two passes. First compare only the contract, theorem choice, and proof skeleton. Then inspect details after locating the earliest step where your argument diverges. A numerically matching answer can still rest on a unit error, accidental cancellation, information leak, or unsupported causal interpretation.

Projects should leave a reproducibility bundle: question and claim ledger; input schema and provenance; mathematical derivation; executable specification; exact or limiting test case; numerical diagnostics; uncertainty and sensitivity report; validation plan; accessible output description; and a statement of uses the artifact does not support.

<a id="section-63-a-hierarchy-of-evidence"></a>
## A hierarchy of evidence {#section-65-a-hierarchy-of-evidence}

This volume uses five evidence layers without pretending that one replaces another.

1. **Algebraic evidence** verifies identities, feasibility, conservation, dimensions, and exact finite cases.
2. **Analytic evidence** proves existence, uniqueness, stability, convergence, or error bounds under hypotheses.
3. **Computational evidence** shows what a specified implementation returns and whether numerical invariants hold.
4. **Empirical evidence** compares model implications with observations under a sampling and measurement process.
5. **Decision evidence** assesses consequences, objectives, constraints, alternatives, and distributional effects.

Strong algebraic evidence cannot repair a poor observation process. Strong predictive evidence cannot alone identify an intervention effect. A value judgment cannot be proved from data, but it can be made explicit and stress-tested. The claim ledger records which layer supports each sentence.

<a id="section-75-accessibility-and-alternative-representations"></a>
## Accessibility and alternative representations {#section-77-accessibility-and-alternative-representations}

No graph or animation is intended to be the sole carrier of a conclusion. A visual comparison should also have a numerical table, symbolic description, or ordered list of changes. Network diagrams should identify nodes and edges in text. Dynamic instruments should expose initial values, parameter ranges, derived quantities, and a reduced-motion mode. Colour must not be the only distinction.

The source uses plain inline mathematics so that core relations remain available without a specialized rendering engine. Symbols are locally declared. Long computations should provide intermediate invariants and meaningful names rather than asking a reader to infer state from position or colour.
`;export{e as default};