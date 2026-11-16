var e=`---
id: book-formal-computation-proof-reference
title: "Programme Semantics and Verification"
level: graduate
estimated_minutes: 2880
license: CC BY-SA 4.0
---

# Programme Semantics and Verification {#section-1-programme-semantics-and-verification}

This L4 book develops mathematical meanings for programmes and the proof methods used to establish their properties. Its twelve-chapter route begins with operational and denotational semantics, then builds type safety, programme logics, concurrency, temporal reasoning, abstract interpretation, solver evidence and refinement. The prerequisite is [Automata, Computability and Complexity](#/item/book-automata-computability-complexity), together with comfort reading induction and elementary first-order arguments.

The chapters include worked examples, supported exercises and complete local solutions. The Lean and reference-code listings are textual examples with stated expected interpretations; no successful run or tool output is inferred from their inclusion.

<a id="section-5-reading-route"></a>
## Reading route {#section-7-reading-route}

1. [Small-Step, Big-Step, and Trace Semantics](#/item/book-formal-computation-proof-reference?chapter=small-step-and-big-step-semantics) proves terminating equivalence and distinguishes final results, divergence and stuckness under explicit hypotheses.
2. [Denotational Semantics, Domains, and Fixed Points](#/item/book-formal-computation-proof-reference?chapter=denotational-semantics-and-fixed-points) proves least-fixed-point and adequacy arguments using finite information.
3. [Type Safety for Imperative Languages](#/item/book-formal-computation-proof-reference?chapter=type-safety-imperative-languages) proves preservation and progress for a specified integer/Boolean language and explains heap-typing extensions.
4. [Hoare Logic, Weakest Preconditions, and Total Correctness](#/item/book-formal-computation-proof-reference?chapter=hoare-logic-and-total-correctness) proves rule soundness and develops summation, quotient and array-maximum contracts.
5. [Separation Logic and Ownership](#/item/book-formal-computation-proof-reference?chapter=separation-logic-and-concurrency) proves wand adjunction, an explicitly scoped frame theorem and finite-list reversal.
6. [Concurrency and Rely–Guarantee Reasoning](#/item/book-formal-computation-proof-reference?chapter=concurrency-rely-guarantee) proves finite-prefix composition under compatible interference contracts.
7. [Temporal Logics, Path Quantifiers, and Fixed-Point Characterizations](#/item/book-formal-computation-proof-reference?chapter=temporal-logics-and-fixed-points) proves finite CTL fixed-point meanings and preserves the earlier trace-equivalence separation example.
8. [Explicit, Symbolic, and Abstraction-Based Model Checking](#/item/book-formal-computation-proof-reference?chapter=explicit-and-symbolic-model-checking) proves accepting-lasso and finite safety-certificate arguments, with bounded and abstract evidence qualified.
9. [Abstract Interpretation](#/item/book-formal-computation-proof-reference?chapter=abstract-interpretation) proves the abstract invariant theorem and develops intervals, widening, justified descending refinement and reduced products.
10. [SAT, SMT, Proof Certificates, and Automated Deduction](#/item/book-formal-computation-proof-reference?chapter=sat-smt-and-automated-deduction) proves resolution refutation completeness, DPLL correctness and exact local certificate obligations.
11. [Verifying Programmes in a Proof Assistant](#/item/book-formal-computation-proof-reference?chapter=verifying-programs-proof-assistant) develops a small embedded command language, complete verification rules and expected Lean examples. [Type Theory and Proof Assistants](#/item/book-types-proofs-construction) supplies the foundational companion.
12. [Refinement, Trusted Bases, Counterexamples, and Synthesis Capstones](#/item/book-formal-computation-proof-reference?chapter=refinement-trust-and-counterexample-capstones) proves finite-prefix safety transfer and full circular-queue operation refinement.

<a id="section-20-working-with-the-arguments"></a>
## Working with the arguments {#section-22-working-with-the-arguments}

For each theorem, write its state space, observation and quantifiers before tracing an example. Identify whether it establishes safety, termination, liveness or a relation between models. Invariants must be initialised and preserved; interference assertions must survive the allowed environment; variants need a well-founded range and terminating bodies. A checked certificate would establish its encoded conclusion, while translation and model fidelity require their own argument.

Each chapter includes at least three worked examples and ten or more exercises. Reveal the two hints in order before consulting a full solution. The folded practice retains its earlier semantic exercise anchors. Study checkmarks record a learner's activity and do not certify an independently produced proof.

<a id="section-26-provenance-and-companion-routes"></a>
## Provenance and companion routes {#section-28-provenance-and-companion-routes}

The book retains the semantic ID \`book-formal-computation-proof-reference\`. Its original operational, denotational, Hoare, heap, temporal, model-checking, solver and refinement sources are expanded here. Four earlier Mathematics for Computer Science specialist chapters are incorporated in full: semantics/types, Hoare/termination, transition systems and verification evidence. The former logic temporal chapter is incorporated with its original five solutions and branching diagram. Source-owned aliases preserve the earlier resource addresses, and original files remain available.

The earlier combined-book overview is retained as back matter with its mathematical descriptions. Languages, machines and complexity now have their first-course home in Automata, Computability and Complexity; lambda calculus and proof terms live in Type Theory and Proof Assistants. Their original chapter identifiers continue through native aliases.

Benchmarks are Glynn Winskel, *The Formal Semantics of Programming Languages*, and Christel Baier and Joost-Pieter Katoen, *Principles of Model Checking*. Deep relative-completeness, temporal-expressiveness and LTL-complexity inputs are labelled as cited where not proved locally. No cited result is promoted to an unconditional claim about deployed software or hardware.
`;export{e as default};