var e=`---
parent_id: book-algorithms-computation-proof-desk
matter_id: computational-evidence-guide
title: "Guide to Proof, Code, Certificates, and Computational Evidence"
license: CC BY-SA 4.0
---

# Guide to Proof, Code, Certificates, and Computational Evidence {#section-1-guide-to-proof-code-certificates-and-computational-evid}

<a id="section-1-one-claim-one-evidence-type"></a>
## One claim, one evidence type {#section-3-one-claim-one-evidence-type}

This volume uses computation as an inspectable mathematical instrument. It never treats output as self-authenticating. Before running a program, write the proposition it is meant to support and choose the evidence class that can support it.

A correctness proof quantifies over all legal inputs. A trace illustrates one input. A complete finite enumeration proves a bounded proposition only after generator completeness and checker correctness are justified. A randomized experiment estimates behavior under a sampling design. A security experiment defines adversarial advantage rather than measuring ordinary accuracy. A numerical result adds rounding and conditioning obligations.

<a id="section-7-dependency-free-examples"></a>
## Dependency-free examples {#section-9-dependency-free-examples}

Reference programs use the language standard library so their mathematical state is visible. This is a transparency choice, not a performance recommendation. Each example should expose input validation, deterministic ordering when output is archived, structured failures, and assertions for boundary cases. If randomness is pedagogically necessary, use an explicit seed and still state the probability theorem independently.

Run examples from a clean checkout with network disabled. Record interpreter version, command, standard input, output, and source hash. An assertion passing establishes only its concrete predicate; the surrounding invariant proves the general result.

<a id="section-13-certificates"></a>
## Certificates {#section-15-certificates}

A positive certificate supplies locally checkable evidence: a graph path, satisfying assignment, vertex cover, parse tree, code syndrome explanation, or unsafe-state trace. A negative certificate may be harder: a closed reachable set proves nonreachability, a cut proves a flow upper bound, and a proof object may establish unsatisfiability.

For every checker, publish syntax, validation, soundness statement, and failure messages. Reject duplicate or out-of-range fields explicitly. Producer correctness and checker soundness are different theorems. Where possible, implement them independently to reduce common-mode error.

<a id="section-19-exhaustive-finite-checks"></a>
## Exhaustive finite checks {#section-21-exhaustive-finite-checks}

An exhaustion report must identify the finite domain, enumeration formula, symmetry reductions, predicate, observed count, and expected count. For all binary words up to length $n$, show that the generator emits $\\sum_{k=0}^n 2^k$ distinct words. For a bounded transition model, show that every initial state and enabled transition appears.

Early exit can find a counterexample but cannot support a universal success count. Timeouts create censored searches, not negative proofs. A bounded proof stays bounded unless a theorem supplies a completeness threshold.

<a id="section-25-randomized-algorithms"></a>
## Randomized algorithms {#section-27-randomized-algorithms}

Separate fixed input, internal coins, sampled data, and environmental randomness. Report whether the algorithm is Las Vegas, Monte Carlo, or heuristic; state failure probability and resource bound. Repetition arguments require independence or another dependence analysis. A seed enables replay but does not make one draw representative.

Adversarial order and random order are different input models. Expected hash-table or pivot behavior must name what is random and what the adversary observes.

<a id="section-31-numerical-geometry-and-graphics"></a>
## Numerical geometry and graphics {#section-33-numerical-geometry-and-graphics}

Exact geometric predicates decide combinatorial structure. Floating coordinates can make a determinant sign unreliable near zero, so report scale, tolerance policy, and degeneracy behavior. Never use a tolerance without units or explain it as “close enough” independent of magnitude.

Graphics output requires a text or numerical alternative: transformation matrices, clipped coordinates, triangle coverage samples, or pixel tables. A picture can reveal a bug but cannot serve as the only specification. Reduced-motion and keyboard access are part of any interactive deployment.

<a id="section-37-cryptographic-experiments"></a>
## Cryptographic experiments {#section-39-cryptographic-experiments}

Educational code may illustrate XOR identities, collision counting, or game structure, but it is not a production construction. Never invent cryptography for deployment. A security report names scheme version, parameter, adversary interface, win event, assumption, reduction loss, randomness and nonce obligations, and side-channel boundary.

Round-trip tests establish functional correctness on cases. They do not establish indistinguishability or unforgeability. Timing measurements do not establish constant-time behavior on other compilers or hardware.

<a id="section-43-quantum-experiments"></a>
## Quantum experiments {#section-45-quantum-experiments}

A state-vector simulation verifies matrix calculations for the represented qubit count. It does not show hardware advantage. Report normalization error, basis ordering, gate convention, measurement sampling, and tolerance. Separate oracle queries, total gates, qubits, shots, data loading, and classical postprocessing.

Hardware results add calibration time, topology, compilation, noise, and uncertainty. An asymptotic algorithm theorem and a device run occupy different evidence rows.

<a id="section-49-formal-tools"></a>
## Formal tools {#section-51-formal-tools}

For proof assistants, list definitions, statement, imported axioms, kernel and elaborator versions, generated obligations, and whether holes are prohibited. For SMT or model checkers, record encoding, solver result category, resource limit, certificate availability, and counterexample validation.

\`unknown\`, timeout, and resource exhaustion are neither proof nor refutation. A proof-producing tool reduces trust only when an independent checker validates the complete artifact and its link to the intended statement.

<a id="section-55-reproducible-artifact-record"></a>
## Reproducible artifact record {#section-57-reproducible-artifact-record}

Each substantial computation should retain:

1. claim identifier and nonclaim list;
2. source and input hashes;
3. toolchain versions and configuration;
4. exact invocation and resource limits;
5. randomness seeds or a declaration of determinism;
6. stdout, structured result, and certificate;
7. checker outcome and tests;
8. numerical tolerances with units;
9. model-to-system assumptions;
10. reviewer and disposition state.

Repeating an execution can reproduce the same error. Use the proof, specification and interpretation of the result to decide what the computation establishes.

<a id="section-72-failure-oriented-checklist"></a>
## Failure-oriented checklist {#section-74-failure-oriented-checklist}

Ask what happens on empty, singleton, duplicate, maximal, malformed, disconnected, cyclic, negative-weight, collision-heavy, degenerate, ill-conditioned, nonce-reused, and unfairly scheduled inputs as applicable. Add at least one example that violates a tempting hypothesis. Good computational mathematics makes the failure boundary executable.
`;export{e as default};