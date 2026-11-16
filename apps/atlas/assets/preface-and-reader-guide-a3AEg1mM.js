var e=`---
parent_id: book-optimization-backprop-from-scratch
matter_id: preface-and-reader-guide
title: "Preface and Reader Guide"
license: CC BY-SA 4.0
---

# Preface and Reader Guide

## Why this book exists

A machine-learning system is a mathematical object before it is a software product. It has observational units, a prediction time, arrays with meanings and units, a function class, an objective, an optimization procedure, a source of randomness, and a rule for turning outputs into decisions. A library call can hide every one of those choices while still returning a plausible number. This book develops the mathematics needed to expose them.

The organizing idea is **auditable learning**. A result is auditable when another reader can reconstruct what was optimized, verify the local calculations, reproduce the finite experiment, and identify exactly which broader claims remain unsupported. The adjective is deliberately stronger than “from scratch.” Reimplementing backpropagation is useful, but a transparent derivative does not repair a leaked split, an incoherent loss, a poorly conditioned coordinate system, or an unjustified population claim.

The volume therefore starts before gradients. It begins with the prediction contract and the geometry of arrays, builds derivatives as linear maps, derives forward and reverse automatic differentiation, and then studies the objectives and algorithms that use those derivatives. Stable losses, stochastic optimization, regularization, network initialization, normalization, curvature, and reproducible pipelines are connected through common shape, evidence, and verification ledgers.

## Intended readers

This book spans L2–L3. Arrive with Year 1 calculus and linear algebra: derivatives, the chain rule, small matrix products, vector spaces, inner products and basic linear systems. The [Calculus course](/calculus/) and [Lucent Linear Algebra](/lucent/web/#/course/linear-algebra) supply that preparation. The opening chapters establish common notation rather than replacing those courses.

For L1 repair, use [Precalculus](/atlas/#/item/book-precalculus) for algebra and functions and [Euclidean Geometry and Trigonometry](/atlas/#/item/book-euclidean-geometry-trigonometry) for coordinates, angles and trigonometric functions. No machine-learning course is required. Part I, chapters 1–9, works at L2 through forward and reverse automatic differentiation. Part II, chapters 10–21, works at L3 and assumes comfort with finite-dimensional proofs and multivariable derivatives. Probability assumptions are introduced when passing from a fixed empirical average to a named random sampling law.

The book supports four audiences:

- an independent learner seeking a prerequisite-light route into the mathematics of machine learning;
- a mathematics or computing student who wants proofs behind backpropagation and optimization;
- a practitioner who wants small reference computations and failure-oriented audit protocols;
- an instructor assembling a course that keeps modeling, numerical, optimization, and statistical claims separate.

No reader is expected to arrive fluent in all four languages. The prerequisite diagnostic isolates algebra, shapes, calculus, probability, computation, and evidence design so that a weak area can be repaired without restarting everything.

## Scope and boundaries

The book owns the route from a finite learning contract through shaped array programs, automatic differentiation, optimization, and an auditable small learning system. It develops least-squares geometry, empirical risk, matrix calculus, JVPs and VJPs, reverse accumulation, nonsmooth derivative checks, smooth and convex optimization, duality, conditioning, stochastic updates, proximal methods, stable regression and classification losses, multilayer backpropagation, initialization, normalization, residual paths, parameter symmetry, structured curvature, implicit differentiation, reproducible pipelines, and integrated case studies.

It does not pretend that those tools prove everything one might want from a model. Generalization bounds, measure-theoretic probability, statistical inference, causal identification, privacy, fairness, robustness certification, and production systems engineering require additional assumptions and fuller sibling treatments. When a chapter reaches one of those boundaries, it states what the finite computation establishes and names the missing bridge.

Framework-specific APIs are also outside the conceptual core. Reference algorithms use mathematical pseudocode or dependency-free small programs. An optimized array or autodifferentiation library may replace them in practice, but only after shapes, reductions, saved state, randomness, and tolerances have an independent specification.

## Five reading routes

**Route A — first mathematics-for-ML course.** Read Chapters 1–6, 8, 10, 12–16, and 20–21. This route gives contracts, arrays, derivatives, reverse mode, reliable optimization, stable losses, a small network, and an end-to-end pipeline. Use the [project and solution appendix](../projects-solutions-reference.md) for cumulative work.

**Route B — automatic differentiation and numerical verification.** Read Chapters 2 and 5–9, then Chapters 16, 19, and 20. Trace every example with an object-and-shape ledger. Implement forward and reverse products before attempting a general tape.

**Route C — optimization.** Read Chapters 2–6 and 10–15, followed by Chapter 19. This route connects smoothness, convex optimality, dual certificates, conditioning, stochastic dynamics, constraints, and structured curvature. Chapter 4 is essential when an update is described as unbiased.

**Route D — neural-network mathematics.** Read Chapters 2, 5–9, 12–13, and 15–19. Keep exact identities, initialization approximations, and empirical measurements in different columns. Finish with the network case studies in Chapter 21.

**Route E — audit and failure analysis.** Read Chapters 1, 4, 9, 12, 15, and 20–21 and the project appendix. This is the shortest route for an experienced reader who already knows the calculations but wants a disciplined claim ladder and reproducibility record.

These routes are suggestions, not alternative editions. The chapter dependency identifiers in the production manifest are authoritative. If a proof uses a concept that a route omits, follow the named prerequisite and return.

## How to read a derivation

Keep four ledgers.

The **object ledger** says what every symbol is: scalar, vector, matrix, batch, random variable, realized sample, parameter, state variable, or function. It includes units and the meaning of each axis. Many apparent calculus mistakes are type mistakes.

The **dependency ledger** records what may depend on what. A mini-batch gradient depends on a sampled index set; a validation decision depends on validation data but must not depend on test outcomes; a normalization transform fitted on training data becomes frozen state at evaluation.

The **evidence ledger** distinguishes an algebraic identity, a theorem under hypotheses, a finite computation, a simulation, and an empirical observation. A thousand successful random tests remain finite evidence. A theorem about an expectation requires the named law and integrability conditions.

The **claim ledger** records the radius of each conclusion. A correct local derivative is narrower than convergence of an optimizer; optimizer convergence is narrower than predictive generalization; prediction is narrower than causal or decision validity.

For each important formula, ask four questions: What are the shapes? What is held fixed? Which reduction is used? What would falsify the surrounding claim? Those questions make the derivation reusable rather than merely memorable.

## Exercises, code, and solutions

Exercises mix hand computation, derivation, proof, counterexample, tiny numerical tests, implementation audits, and interpretation. Full solutions expose the decisive step, but a solution is most useful after a genuine attempt. A productive cycle is:

1. state the requested product: number, proof, disproof, program behavior, or audit judgment;
2. write the objects and shapes before manipulating symbols;
3. solve a tiny exact instance;
4. compare your reasoning with the solution, locating the first divergence;
5. vary one assumption, scale, reduction, or data boundary and predict what changes;
6. record whether the result is exact, tolerance-dependent, or empirical.

Reference code is intentionally small. It should be run with deterministic fixtures and compared against hand-worked examples. Passing tests supports the executed cases, not every input. Whenever floating arithmetic is involved, record the data type, tolerance, scale, seed, stopping rule, and failure behavior.

## Accessibility and visual reasoning

Geometry and computation are expressed in multiple representations. A diagram of a projection is accompanied by an orthogonality equation. A graph of a loss is accompanied by values, limiting behavior, and derivative signs. A heat map is not allowed to carry a distinction through color alone. Interactive controls require labels, keyboard access, and a meaningful numerical or textual alternative, and nonessential motion must respect reduced-motion preferences.

Readers may prefer symbolic, verbal, tabular, spatial, or executable representations. None is treated as a lesser route. The invariant is that the mathematical claim and the evidence supporting it remain explicit.

## Manuscript and study records

The book has twenty-one chapters in two parts, followed by projects, solutions and reference material. It remains Outline while exercise support and chapter completeness are being brought to the shared standard. No independent mathematical review is claimed. Reading marks and project checklists are personal reminders; they do not grade the reader's work.
`;export{e as default};