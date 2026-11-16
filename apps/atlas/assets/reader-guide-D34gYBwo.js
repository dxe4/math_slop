var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
matter_id: reader-guide
title: "Reader Guide and Optimization Contract"
license: CC BY-SA 4.0
---

# Reader Guide and Optimization Contract {#section-1-reader-guide-and-optimization-contract}

<a id="section-1-why-this-book-exists"></a>
## Why this book exists {#section-3-why-this-book-exists}

An optimization run can end with a plausible point while answering the wrong question. The variables may have the wrong domain, a penalty may have silently replaced a constraint, a local method may be reported as a global solver, or a floating lower bound may be treated as exact. This book is organized around a stricter idea: the structure of a problem determines both the algorithms that are justified and the evidence needed to stop.

The twelve-chapter convex route begins with formulation, convexity, separation, duality and KKT conditions, continues through smooth, proximal, barrier and nonsmooth methods, then develops conic models, regularised learning and solver interfaces. All twelve source readings are authored, with at least three examples and ten exercises supplying two hints and full solutions per chapter. [Discrete and Global Optimisation](../../discrete-global-optimisation.md) now owns integer structure, cuts, branching, mixed-integer convexity and nonconvex global proof. Native aliases preserve the earlier identities, and original mathematical sources remain intact.

This is a mathematical optimization book. Small binary, graph, and separable examples expose formulations and algorithms. It does not cover logistics, queues, inventory, finance, scheduling practice, or general operations-research modeling. A reader needing those application domains should bring their model here only after its variables and assumptions have been specified independently.

<a id="section-9-intended-readers"></a>
## Intended readers {#section-11-intended-readers}

This is an L4 continuation of [Linear Programming and Optimisation](../../linear-programming-optimisation.md). Required preparation includes multivariable calculus, proof-based linear algebra, conditioning and introductory algorithmic reasoning. [Automatic differentiation](../../optimization-backprop-from-scratch/reverse-mode-adjoint-backprop.md) supplies the derivative programs used by the algorithms. The [central-path chapter](../interior-point-methods.md) develops the barrier continuation beyond the first-course treatment.

The book supports four uses:

- a graduate route through convex certificates and algorithms;
- a reference route for readers who know algorithms but need precise hypotheses;
- a software-audit route centered on residuals, bounds, logs, and replay;
- a bridge from numerical optimization to verified global computation.

The text does not assume that every reader needs every chapter. It does require that any skipped prerequisite be revisited before its conclusion is used.

<a id="section-22-the-optimization-contract"></a>
## The optimization contract {#section-24-the-optimization-contract}

For each problem, write a ledger with the following fields.

| Field | Question that must be answered |
|---|---|
| Variables | What is each variable, its dimension and units, and is it real, integer, binary, or mixed? |
| Objective | Is the direction minimize or maximize, and what does its scale mean? |
| Feasible set | Which equalities, inequalities, set memberships, and domain bounds are exact? |
| Attainment | Is an optimizer known to exist, or is only an infimum meaningful? |
| Requested output | Is the deliverable a point, value, bound, stationarity witness, global certificate, or proof log? |
| Arithmetic model | Are calculations exact, ordinary floating point, outward rounded, or a mixture? |
| Claim radius | Is the conclusion local, convex-global, discrete-global, or globally verified on a bounded domain? |

These fields prevent category errors. A feasible point supplies an upper bound for a minimization problem but not a lower bound. A stationary point may be locally useful but need not be globally optimal. A dual value is a lower bound only after sign conventions and dual feasibility are checked. A finite branch-and-bound tree is a certificate only if every leaf closes for an admissible reason and every bound is valid in the declared arithmetic model.

<a id="section-38-reading-routes"></a>
## Reading routes {#section-40-reading-routes}

Read Chapters 1–5 for the convex formulation and certificate foundations, then Chapters 6–9 for algorithms. Chapters 10–12 develop conic programming, regularised regression/SVM/LASSO and solver-facing modelling contracts. All twelve are actual teaching sources. The retained exercise-program appendices preserve the earlier continuous/discrete source arrangement; current chapter exercise sets define the present twelve-chapter route.

For discrete or mixed-integer problems, continue to the separate [discrete/global book](../../discrete-global-optimisation.md) after the duality preparation. Its certificate chapter links the earlier software and proof-log sources. For derivative programs use the [ML mathematics book](../../optimization-backprop-from-scratch.md); for interval construction use [Verified and Interval Computation](../../numerical-mathematics-error-algorithms/verified-interval-computation.md). The current book uses those results in convex arguments rather than teaching them again.

An experienced reader may begin with formulations and the KKT/barrier readings, then return to separation and duality hypotheses behind a claimed gap. A small residual without feasibility, qualifications and an appropriate structural theorem is not a convex-global conclusion.

<a id="section-46-how-to-read-an-algorithm"></a>
## How to read an algorithm {#section-48-how-to-read-an-algorithm}

For every method, maintain four synchronized records.

The **mathematical state** lists the current iterate, active constraints, multipliers, relaxation domain, incumbent, and bounds. The **numerical state** lists scaling, arithmetic type, tolerances, factorization status, and residuals. The **logical state** records which theorem authorizes the next step and which assumptions have been checked. The **replay state** records deterministic inputs, ordering choices, branch decisions, and any exact or interval witness needed by an independent checker.

A worked example is complete only when a reader can identify:

1. the problem being solved;
2. the property exploited by the update;
3. the invariant or bound preserved;
4. the stopping rule and what it proves;
5. a condition under which the same output would not support that claim.

<a id="section-60-evidence-ladder"></a>
## Evidence ladder {#section-62-evidence-ladder}

The following levels are deliberately not interchangeable.

1. **Observed behavior:** an iterate, plot, or residual was produced in one run.
2. **Implementation evidence:** exact small cases, derivative checks, invariants, and tests support the executed code path.
3. **Local mathematical certificate:** stationarity, a local model condition, or a local optimality test holds under stated regularity.
4. **Convex-global certificate:** feasibility and a valid convex dual or first-order condition prove global optimality for the stated convex problem.
5. **Discrete-global certificate:** a valid relaxation-and-search ledger closes all alternatives for a bounded discrete problem.
6. **Verified global certificate:** exact or outward-rounded bounds and a replayable partition cover the declared domain.

Moving upward requires additional evidence. More digits at one level do not substitute for the missing logical bridge.

<a id="section-73-exercises-and-projects"></a>
## Exercises and projects {#section-75-exercises-and-projects}

Exercises should be attempted before reading solutions. First classify the requested product: derivation, proof, counterexample, numerical estimate, certificate, or audit judgment. For computations, record enough intermediate state to reproduce the answer. For proofs, state every domain and regularity assumption before invoking an optimality theorem. For counterexamples, identify exactly which missing hypothesis fails.

Projects use proof logs rather than screenshots. A log should include a normalized problem statement, hashes or stable encodings of data, arithmetic policy, all tolerances, deterministic ordering, node or region records, incumbent updates, lower-bound derivations, unresolved failures, and a final claim no stronger than the evidence.

<a id="section-79-accessibility-and-alternative-representations"></a>
## Accessibility and alternative representations {#section-81-accessibility-and-alternative-representations}

Every geometric idea should remain available without relying on an image. Supporting hyperplanes are also inequalities; branch trees are also tables of node domains and closure reasons; convergence plots are also sequences with residual and bound columns. Color must not be the only carrier of feasibility, activity, or status. Interactive materials need visible labels, keyboard operation, a stable textual or numerical alternative, and a useful reduced-motion state.

Readers may use symbolic, verbal, tabular, spatial, or executable representations. The invariant is that variables, hypotheses, and claims remain recoverable from the alternative. A proof log is particularly accessible because it linearizes a potentially complicated visual search into inspectable records.

<a id="section-85-production-status"></a>
## Continue into discrete optimisation {#section-87-production-status}

The twelve-chapter convex route includes 120 supported exercises. The separate discrete/global book continues into integer formulations and exact search.
`;export{e as default};