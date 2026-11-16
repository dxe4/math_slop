var e=`---
parent_id: book-formal-computation-proof-reference
matter_id: reader-contract-and-evidence-ladder
title: "Reader Contract, Scope, and Evidence Ladder"
license: CC BY-SA 4.0
---

# Reader Contract, Scope, and Evidence Ladder {#section-1-reader-contract-scope-and-evidence-ladder}

<a id="section-1-what-this-volume-is"></a>
## What this volume is {#section-3-what-this-volume-is}

This L4 draft develops operational and denotational semantics, imperative type safety, programme logics, interference, temporal verification, abstract interpretation, solver evidence and refinement. Its prerequisite is Automata, Computability and Complexity. Type Theory and Proof Assistants is the foundational companion for the textual Lean chapter.

The twelve authored chapters contain complete local proofs and supported exercises.  Mathematical integers, natural stores, heap resources and finite serial transition systems are used where their chapter hypotheses state them.

<a id="section-7-what-it-does-not-promise"></a>
## What it does not promise {#section-9-what-it-does-not-promise}

The volume does not treat one programming language, solver, or verifier as the definition of computation. It does not equate:

- passing tests with proving a universal claim;
- nondeterministic branches with random choices;
- a timeout with mathematical divergence;
- NP with “not polynomial”;
- type safety with full functional correctness;
- race freedom with deadlock freedom or linearizability;
- model checking with validation of a deployed system;
- solver success with correctness of the front-end translation;
- an authored chapter with a reviewed or released chapter.

<a id="section-21-reading-modes"></a>
## Reading modes {#section-23-reading-modes}

<a id="section-23-continuous-proof-route"></a>
### Continuous proof route {#section-25-continuous-proof-route}

Read Chapters 1–12 in order. Chapters 1–3 establish meaning and type safety; Chapters 4–6 develop state, heap and interference proofs; Chapters 7–10 connect temporal models, abstractions and certificates; Chapters 11–12 assemble mechanised rules and refinement.

<a id="section-27-verification-route"></a>
### Verification route {#section-29-verification-route}

Use the operational and Hoare chapters before temporal or abstract analysis. Return to the prerequisite Automata book for machine and complexity results, and to the Types book for lambda calculus, dependent types and proof terms. The retained earlier overview and reference apparatus preserve the previous combined route as context.

<a id="section-31-reference-lookup"></a>
### Reference lookup {#section-33-reference-lookup}

Use the theorem and transformation atlas to locate hypotheses, then return to the chapter proof. The atlas is intentionally insufficient as a substitute for context.

<a id="section-35-evidence-ladder"></a>
## Evidence ladder {#section-37-evidence-ladder}

Evidence is ordered by claim fit, not prestige.

1. **Worked example.** Demonstrates one execution or construction.
2. **Bounded test suite.** Checks a declared finite input family and guards implementations.
3. **Counterexample.** Refutes a universal statement within the modeled contract.
4. **Witness or model.** Certifies membership, satisfiability, reachability, or one feasible solution.
5. **Locally checkable proof.** Resolution, parse, reduction, invariant, or refinement steps can be replayed by a small checker.
6. **Finite exhaustion.** Closure of a finite reached set proves a model property.
7. **Inductive or coinductive theorem.** Covers all finite or infinite constructions in a formal semantics.
8. **Refinement theorem.** Transfers properties between abstraction layers.
9. **Environmental validation.** Supports that the formal model represents the intended external system.
10. **Release evidence.** Adds independent review, accessibility, citations, cross-references, copy editing, and reproducible artifacts.

A higher rung is not always required. One valid counterexample is decisive against equivalence; a million examples are not. Conversely, a formally checked abstract theorem cannot establish an environmental assumption absent validation.

<a id="section-52-chapter-workflow"></a>
## Chapter workflow {#section-54-chapter-workflow}

For each chapter:

1. write the objects and quantifiers without relying on diagrams;
2. identify representation and malformed-input policy;
3. state the invariant or relation before tracing the algorithm;
4. separate termination, correctness, complexity, and model scope;
5. solve at least one construction and one counterexample exercise;
6. label code experiments as bounded evidence;
7. use the forward pointers only after the retrieval questions can be answered.

<a id="section-64-status-contract"></a>
## Using complete solutions {#section-66-status-contract}

A complete solution gives a reasoned response to the local exercise. Compare the argument with the exact input model, hypotheses and requested conclusion; a displayed answer alone cannot justify a universal claim.
`;export{e as default};