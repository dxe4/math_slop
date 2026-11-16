var e=`---
id: book-ode-first-course
title: "ODE: A First Course"
level: undergraduate
license: CC BY-SA 4.0
---

# ODE: A First Course {#section-1-ode-a-first-course}

An ordinary differential equation turns a rule for change into a mathematical problem. This book develops the first undergraduate course: models and solution intervals, exact first-order methods, local existence and uniqueness, scalar qualitative analysis, second-order linear equations, forcing and resonance, convergent series, transforms, numerical error, boundary spectra, and linear systems. It ends with a nonlinear preview and one fully developed Lyapunov example.

 It contains original explanations, proofs, worked examples, and supported exercises.  The earlier Calculus previews, Quarto textbooks, Lucent lessons, Atlas seed chapters, and their existing editions remain separate resources with their original identities.

<a id="section-5-preparation-and-routes-into-the-book"></a>
## Preparation and routes into the book {#section-7-preparation-and-routes-into-the-book}

The required preparation is single-variable calculus through power series: [Calculus chapters 04–17](/books/calculus-course/), covering limits, derivatives, integration, sequences, series, and Taylor expansions. The [reader guide and diagnostic](ode-first-course/front-matter/reader-guide-and-prerequisite-diagnostic.md) links the exact chapters and gives a short repair route.

Chapters 1–12 do not require a completed linear algebra course. Chapter 6 develops the two-by-two initial-data algebra it uses, and the Picard proof explains its limit arguments locally. From Chapter 13, use the L2 [Lucent linear algebra book](/books/lucent-linear-algebra/), particularly matrices and composition, inverses, eigenvalues, diagonalization, and complex eigenvalues.

A learner who already knows the elementary solving methods can use Chapter 4 for the existence proof, Chapter 5 for rigorous phase-line reasoning, and Chapters 9, 11, and 12 for the boundaries of formal series, numerical calculations, and eigenfunction arguments. Those chapters still refer backward to the precise definitions and hypotheses on which they depend.

<a id="section-13-part-i-first-order-models-and-theory"></a>
## Part I: First-order models and theory {#section-15-part-i-first-order-models-and-theory}

1. [Models and Direction Fields](ode-first-course/models-direction-fields.md) defines a solution on a specified interval and separates a rate law, its physical interpretation, and its graphical evidence.
2. [Separable and Linear First-Order Equations](ode-first-course/separable-linear-first-order.md) proves the two principal elementary methods with branch and coefficient-domain restrictions.
3. [Exact Equations and Substitutions](ode-first-course/exact-equations-substitutions.md) develops potentials on rectangles, integrating factors, Bernoulli equations, and ratio substitutions.
4. [Existence, Uniqueness, and Picard Iteration](ode-first-course/existence-uniqueness-picard.md) constructs solutions by successive approximations and proves uniqueness, finite-time sensitivity, and continuation.
5. [Phase Lines and Equilibria](ode-first-course/phase-lines-equilibria.md) turns scalar sign diagrams into justified trapping, stability, basin, and blow-up conclusions.

The recurring question is what each operation preserves. Division can lose equilibria, an inverse can select a branch, and a local theorem does not promise all-time existence. Recording those conditions makes an exact answer more useful rather than less complete.

<a id="section-23-part-ii-linear-methods-approximation-and-boundary-spect"></a>
## Part II: Linear methods, approximation, and boundary spectra {#section-25-part-ii-linear-methods-approximation-and-boundary-spect}

6. [Second-Order Linear Equations](ode-first-course/second-order-linear-equations.md) proves the regular initial-value theorem, fundamental-pair representation, Wronskian identities, and characteristic-root formulas.
7. [Forcing, Undetermined Coefficients, and Variation of Parameters](ode-first-course/forcing-variation-parameters.md) derives particular responses and explains resonance modifications.
8. [Oscillation, Damping, and Resonance](ode-first-course/oscillation-resonance.md) connects mechanical balances, energy, damping, and forced amplitude.
9. [Series Solutions and the Frobenius Method](ode-first-course/series-frobenius.md) proves convergence near ordinary points and regular singular points, with the logarithmic alternatives for real indicial roots.
10. [The Laplace Transform](ode-first-course/laplace-transform.md) derives unilateral transform rules under explicit regularity and growth assumptions, completing applications by direct solution verification.
11. [Numerical Methods and Stability](ode-first-course/numerical-methods-stability.md) proves fixed-interval error bounds and distinguishes accuracy, stability, positivity, and conservation.
12. [Boundary Value Problems and Sturm–Liouville Theory](ode-first-course/boundary-value-sturm-liouville.md) proves Green's identity, real eigenvalues, weighted orthogonality, and the complete elementary constant-coefficient spectra.

These methods complement one another. A transform table can suggest a formula that the initial-value theorem then identifies uniquely. A series recurrence needs a convergence argument. Orthogonal eigenfunctions do not automatically give a complete expansion theorem. A stable numerical multiplier does not certify small error.

<a id="section-35-part-iii-systems-and-a-nonlinear-preview"></a>
## Part III: Systems and a nonlinear preview {#section-37-part-iii-systems-and-a-nonlinear-preview}

13. [Linear Systems and the Matrix Exponential](ode-first-course/linear-systems-matrix-exponential.md) proves the exponential's convergence and group law, solves constant forced systems, and exhibits transient growth.
14. [The Phase Plane of Linear Systems](ode-first-course/linear-phase-plane.md) gives a complete real planar classification, including centres, defective roots, zero eigenvalues, and lines of equilibria.
15. [A Nonlinear Preview](ode-first-course/nonlinear-preview.md) computes Jacobians, shows why borderline linearisation can be inconclusive, and proves local and selected global attraction by an explicit quadratic estimate.

The nonlinear chapter prepares the questions of a subsequent dynamics course. It does not require general stable-manifold, conjugacy, bifurcation, or periodic-orbit theorems. The existing [advanced dynamics book](differential-equations-verified-dynamics.md) supplies a further route with additional preparation.

<a id="section-43-using-the-exercises"></a>
## Using the exercises {#section-45-using-the-exercises}

Each chapter has twelve exercises. Attempt the problem before opening its first hint. The second hint supplies a more specific step; the solution gives a complete argument, including the interval or hypothesis that makes the calculation valid. A successful exercise answer should verify initial data and domains where relevant.

After reading a solution, close it and reconstruct the argument from its starting assumptions. Then alter one coefficient or initial value and decide which parts survive. Study checkmarks record personal reading, not graded mathematical evidence.

The [references, notation, and continuations](ode-first-course/back-matter/references-notation-and-continuations.md) identify the benchmarks and local source lineage. Original wording and examples are retained under CC BY-SA 4.0; reference texts are cited for mathematical context and are not copied.
`;export{e as default};