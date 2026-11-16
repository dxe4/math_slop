var e=`---
id: book-control-theory
title: "Control Theory: State, Feedback and Decisions"
level: graduate
status: draft
production_state: complete-draft
planned_chapters: 14
license: CC BY-SA 4.0
---

# Control Theory: State, Feedback and Decisions

This L4 control-theory book starts from [Dynamical Systems: A First Course](dynamical-systems-first-course.md) and [proof-based linear algebra](linear-algebra-structure-proofs.md). It distinguishes a plant model, admissible input, information pattern, performance objective and mathematical certificate. Reachability, state estimation, stabilisation and optimal action answer different questions.

The fourteen chapters develop [state-space models](control-theory/state-space-models.md), [transition matrices](control-theory/transition-matrices-linear-systems.md), [Lyapunov stability](control-theory/lyapunov-stability.md), [controllability](control-theory/control-reachability-observation.md), [observability](control-theory/observability-duality.md), [pole assignment](control-theory/feedback-pole-placement.md), [observers](control-theory/observers-separation-principle.md), [LQR](control-theory/linear-quadratic-regulation.md), [variations and Pontryagin](control-theory/optimal-control-variations.md), [dynamic programming and HJB](control-theory/dynamic-programming-hjb.md), [robustness and small gain](control-theory/robust-sampled-control.md), [sampled-data control and MPC](control-theory/sampled-data-mpc.md), [nonlinear control](control-theory/nonlinear-control.md), and [Kalman filtering](control-theory/kalman-filtering.md). Each supplies worked models and staged exercise help. Controllability, variations and robustness retain twenty original bridge exercises each; the other eleven chapters have ten each.

The earlier integrated [control/observation reading](control-theory/back-matter/retained-control-structure-reading.md) and [variations/LQR/HJB reading](control-theory/back-matter/retained-optimal-control-reading.md) preserve their complete mathematics and original solutions alongside the separated primaries. The three earlier differential-equations source files remain, with their old semantic addresses aliased to the corresponding actual control chapters.

State-space, transition-matrix and nonlinear constructions are new original text; the other chapters separate and substantially expand the earlier seed mathematics. The finite-dimensional deterministic results distinguish feasibility, stability and optimality. The filtering chapter introduces its independent-noise, conditional-information and Gaussian assumptions explicitly rather than importing them into deterministic observation arguments.

Begin with the [reader guide](control-theory/front-matter/reader-guide-prerequisites.md) and [control contracts](control-theory/front-matter/notation-and-control-contracts.md). Continue to [weak PDE theory](pde-weak-theory-waves-patterns.md) for distributed-state analysis and to [numerical mathematics](numerical-mathematics-error-algorithms.md) for discretisation and verified error bounds.
`;export{e as default};