var e=`---
parent_id: book-dynamical-systems-first-course
matter_id: reader-guide-prerequisites
title: "Reader Guide and Prerequisites"
license: CC BY-SA 4.0
---

# Reader Guide and Prerequisites {#section-1-reader-guide-and-prerequisites}

This L3 course begins with nonlinear dynamics after a first course in ordinary differential equations. Complete the ODE readings on [existence and uniqueness](../../ode-first-course/existence-uniqueness-picard.md), [scalar phase lines](../../ode-first-course/phase-lines-equilibria.md), [matrix exponentials](../../ode-first-course/linear-systems-matrix-exponential.md), and [linear planar systems](../../ode-first-course/linear-phase-plane.md). Their stable chapter identities specify the preparation even when their displayed numbers change. The [nonlinear preview](../../ode-first-course/nonlinear-preview.md) is a useful bridge.

You should be comfortable with derivatives as linear maps, eigenvalues and eigenvectors, continuity, compactness and elementary proof. [Linear Algebra: Structure and Proof](../../linear-algebra-structure-proofs.md) supplies the matrix foundations. [Real Analysis](../../proof-safe-real-analysis.md) supplies the [compactness](../../proof-safe-real-analysis/sequences-compactness.md) and [continuity](../../proof-safe-real-analysis/continuity-and-uniform-continuity.md) arguments used repeatedly. The implicit-function theorem and complex numbers are additional preparation identified where they first enter.

<a id="section-5-the-objects-in-a-dynamical-claim"></a>
## The objects in a dynamical claim {#section-7-the-objects-in-a-dynamical-claim}

Keep a short record of the state space, time set, evolution law and domain of definition. A forward-invariant set need not provide existence for all future time. A local conjugacy need not be differentiable. A periodic orbit is a geometric set, while a trajectory also includes its time parameter. A map obtained by numerical stepping is usually different from an exact sampled flow.

The first eight chapters develop local evolution, scalar order, planar geometry, linearisation, Lyapunov functions, conservative and gradient systems, cycles and bifurcations. The remaining seven develop iterated maps, period forcing, symbolic dynamics, Lorenz equations, geometric dimension, quadratic complex iteration and numerical evidence. The book's [contents and preparation map](../../dynamical-systems-first-course.md) links every chapter.

<a id="section-11-proof-citation-and-experiment"></a>
## Proof, citation and experiment {#section-13-proof-citation-and-experiment}

Elementary arguments are proved under their stated hypotheses. General Hartman–Grobman, Poincaré–Bendixson and Hopf theorems are explicitly cited, while selected applications and normal forms are derived. Later chapters likewise distinguish a proved symbolic model or covering argument from cited universality, horseshoe and Lorenz-attractor results. A special example does not establish every conclusion of a general theorem.

For each worked example, reproduce the equilibrium list, domain restrictions and decisive inequality before sketching an orbit. For each exercise, attempt the problem before opening Hint 1, then use Hint 2 only if the first cue is insufficient. The full solution explains the requested conclusion and its limitations. Exercise anchors use semantic chapter IDs so that reordering a reading route does not change their identities.

The numerical chapter derives finite-horizon error and residual statements. Its proposed investigations are instructions for a learner, rather than reports of computations performed for this manuscript. Neither a long numerical orbit nor a reading checkmark is graded evidence.

<a id="section-19-continuations"></a>
## Continuations {#section-21-continuations}

The [numerical mathematics book](../../numerical-mathematics-error-algorithms.md) develops time stepping, stiffness, structure and rigorous enclosures. The earlier [differential-equations material](../../differential-equations-verified-dynamics.md) retains additional dynamics, control and weak-equation discussions. Their original sources remain separate: this first course does not replace or silently retire those resource identities.
`;export{e as default};