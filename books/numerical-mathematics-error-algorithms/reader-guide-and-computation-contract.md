
# Reader Guide and Numerical-Computation Contract {#section-1-reader-guide-and-numerical-computation-contract}

<a id="section-1-reading-this-manuscript"></a>
## Reading this manuscript {#section-3-reading-this-manuscript}

This L3 numerical-analysis manuscript has seventeen chapters, with numerical matrix methods supplied by the matrix-computation prerequisite.  Numerical computations and a reader's own implementations require their declared hypotheses and error bounds.

<a id="section-5-audience-and-mathematical-stance"></a>
## Audience and mathematical stance {#section-7-audience-and-mathematical-stance}

The principal reader knows calculus, Taylor expansion, proof-based linear algebra, matrix norms and elementary ODEs. [Calculus](../../apps/calculus/reading/book-a.html), [Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs) and [Matrix Computation in Practice](#/books/matrix-computation-applications) provide preparation. The early arithmetic and scalar-equation chapters can be read before numerical matrix preparation is complete; later discretisation chapters state additional local assumptions.

Numerical mathematics is treated here as the study of justified finite approximations. The recurring questions are:

1. What mathematical problem and data are intended?
2. Is the answer sensitive to admissible changes in those data?
3. What finite approximation replaces the exact problem?
4. How does the implemented arithmetic differ from exact arithmetic?
5. What observable evidence supports the claimed error, and what does it not support?

A successful run is not automatically an accurate result. A tiny residual is not automatically a tiny forward error. Agreement between two implementations is not independent evidence when they share a discretization, data parser, or stopping defect. The book’s central habit is to make each of those boundaries visible.

<a id="section-19-the-seventeen-chapter-main-route"></a>
## The seventeen-chapter main route {#section-21-the-seventeen-chapter-main-route}

1. [Finite Precision, Conditioning, and Stability](finite-precision-conditioning.md)
2. [Nonlinear Equations and Root Certificates](nonlinear-equations.md)
3. [Nonlinear Systems, Jacobians, and Globalization](nonlinear-systems-globalization.md)
4. [Interpolation, Splines, and Least Squares](interpolation-splines-least-squares.md)
5. [Orthogonal, Weighted, and Minimax Approximation](orthogonal-minimax-approximation.md)
6. [Spectral Approximation and Fast Transforms](spectral-approximation.md)
7. [Numerical Differentiation and Quadrature](differentiation-quadrature.md)
8. [Quadrature: Newton–Cotes, Romberg, and Gauss](quadrature.md)
9. [Singular, Oscillatory, and High-Dimensional Integration](difficult-integrals-high-dimension.md)
10. [Initial-Value Methods: Stability Before Speed](initial-value-methods.md)
11. [Multistep, Stiff, and Differential-Algebraic Methods](multistep-stiff-dae-methods.md)
12. [Geometric Numerical Integration](geometric-numerical-integration.md)
13. [Boundary-Value and Field Discretizations](boundary-value-pde-methods.md)
14. [Finite-Volume and Finite-Element Methods](finite-volume-element-methods.md)
15. [Nonlinear and Adaptive Field Methods](nonlinear-adaptive-field-methods.md)
16. [Verified and Interval Computation](verified-interval-computation.md)
17. [Numerical Software Audit Capstones](numerical-capstone-software-audit.md)

Direct, iterative, eigenvalue and randomized matrix methods are developed in the linked matrix-computation prerequisite. Arithmetic enclosures and reproducibility are integrated into the final two chapters.

<a id="section-41-four-coherent-reading-routes"></a>
## Four coherent reading routes {#section-43-four-coherent-reading-routes}

**First numerical-analysis course.** Read Chapters 1–4, 7–8, 10, 13–14, and 17 in that order, using Chapter 16 alongside claims of certification. The linked matrix-computation prerequisite supplies linear solvers. This route samples scalar, approximation, ODE, and field problems while preserving the error-first spine.

**Approximation and scientific data.** Read Chapters 1, 4–9, and 16–17. Add low-rank and randomized matrix methods from the linked matrix-computation prerequisite. This route emphasizes basis choice, transforms, integration, and independently checkable error statements.

**Solvers and simulation.** Read Chapters 1–3 and 10–17. The linked matrix-computation prerequisite supplies linear algebra used inside nonlinear, implicit-time, finite-element, and adaptive solvers. Chapters 16–17 should accompany the first substantial implementation.

**Verified computing.** Read Chapters 1–3, 8, 10–11, and 16–17, with the matrix-computation prerequisite for linear-system certificates. On this route every approximate statement is paired with its input set, rounding contract, residual or inclusion test, and failure result. An interval returned by software is not a certificate until the operations that produced it obey the required directed-rounding and containment assumptions.

<a id="section-51-the-method-contract"></a>
## The method contract {#section-53-the-method-contract}

For every method, keep the following ledger. A blank field is a question, not permission to assume the most favorable answer.

| field | what must be recorded |
|---|---|
| problem | equation, objective, domain, data, boundary or initial conditions, units, and admissible perturbations |
| hypotheses | smoothness, invertibility, rank, sign, compactness, probability model, or regularity actually used |
| target | root, integral, vector, subspace, trajectory, field, bound, or functional, including its norm and scale |
| discretization | nodes, mesh, basis, step, sample rule, quadrature, truncation, and approximation order claimed |
| algebraic method | factorization, iteration, globalization, preconditioner, stopping rule, and failure exits |
| arithmetic | formats, rounding modes, accumulation order, exceptional-value policy, and mixed-precision boundaries |
| evidence | exact benchmark, residual, backward error, enclosure, invariant, balance, refinement, or independent method |
| claim boundary | strongest conclusion licensed and important conclusions still unsupported |

The word “error” is incomplete without a target and a scale. The word “converged” is incomplete without a quantity, criterion, and limiting process. The word “verified” is incomplete without the check and its assumptions.

<a id="section-68-finite-precision-contract"></a>
## Finite-precision contract {#section-70-finite-precision-contract}

Every executable result should name the arithmetic environment at the level material to the claim. That may include binary format, compiler or interpreter, math library, processor behavior, fused operations, rounding mode, treatment of subnormals, reduction order, and parallel schedule. Not every classroom exercise needs all of these fields, but a claim of bitwise reproduction or rigorous enclosure does.

The ideal model \(\operatorname{fl}(x \mathrm{op} y)=(x \mathrm{op} y)(1+\delta)\) with \(\lvert \delta\rvert\le u\) is used only under its hypotheses. It does not silently cover overflow, invalid operations, arbitrary library functions, or all subnormal results. Mixed precision means more than storage types: record where conversion occurs, in which format each residual is evaluated, and which format governs stopping.

<a id="section-74-reproducibility-contract"></a>
## Reproducibility contract {#section-76-reproducibility-contract}

A reproducibility bundle should contain:

- immutable or checksummed input data and the code revision;
- environment and dependency records sufficient to reconstruct the run;
- deterministic seeds and the precise random-number generator when randomness is used;
- algorithmic parameters, tolerances, limits, and failure policies;
- machine-readable raw outputs, not only plotted or rounded values;
- logs for residuals, refinement, rejected steps, exceptional values, and termination;
- a command or procedure that regenerates tables and figures from the recorded artifacts.

Bitwise identity is one legitimate target, but it is not the only target. A statistically reproducible randomized result may instead declare a distribution, confidence or failure level, seed policy, and deterministic verification step. Numerical agreement within a tolerance must say why that tolerance is appropriate.

<a id="section-88-accessibility-contract"></a>
## Accessibility contract {#section-90-accessibility-contract}

No required conclusion may depend only on color, animation, cursor position, or unaided visual comparison. Every quantitative figure needs a text or numerical alternative describing axes, units, scales, series, key values, and the conclusion. Meshes and sparsity plots need structural summaries. Convergence plots need a table of work, error or estimator, and observed slopes. Controls require labels and keyboard access, and motion must respect reduced-motion preferences.

Accessibility improves mathematical auditability: the same data table that supports a screen-reader user also exposes whether an apparent slope used too few points or whether two curves differ only below plotting resolution.

<a id="section-94-exercises-projects-and-responsible-claims"></a>
## Exercises, projects, and responsible claims {#section-96-exercises-projects-and-responsible-claims}

Work a problem before reading its solution. Then compare not only the final value but also the hypotheses, error scale, stopping reason, and boundary statement. A computational solution is incomplete if it gives a plot without data, reports a residual without a norm and scale, or hides failed cases.

Examples drawn from physics, engineering, finance, health, or policy illustrate conditional mathematics. They are not operational certification or professional advice. Real deployment requires validated models and data, domain review, safety and governance processes, and tests beyond this manuscript.

<a id="section-100-a-repeatable-chapter-study-cycle"></a>
## A repeatable chapter study cycle {#section-102-a-repeatable-chapter-study-cycle}

1. State the problem and predict one plausible failure before computing.
2. Work the smallest nontrivial example exactly or by hand.
3. Implement the finite algorithm with observable intermediate diagnostics.
4. Test a normal case, a boundary case, and an intentionally adverse case.
5. Vary discretization and algebraic tolerance independently.
6. Compare against an exact result, enclosure, invariant, or structurally different method.
7. Write one sentence giving the supported conclusion and one giving what remains unproved.

That cycle is the book’s main transferable skill. The goal is not suspicion of every digit; it is confidence proportionate to evidence.
