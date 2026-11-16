
# Glossary, Theorem, and Algorithm Finder

This finder uses stable chapter identifiers rather than format-specific page numbers. It is a retrieval aid, not a substitute for a theorem’s hypotheses or an algorithm’s failure conditions. The key lists the seventeen current chapters and three matrix-computation prerequisite routes; qualified matrix keys below refer to that separate book.

## Stable chapter key

| chapter | stable identifier and source |
|---:|---|
| 1 | [`finite-precision-conditioning`](finite-precision-conditioning.md) |
| 2 | [`nonlinear-equations`](nonlinear-equations.md) |
| 3 | [`nonlinear-systems-globalization`](nonlinear-systems-globalization.md) |
| 4 | [`interpolation-splines-least-squares`](interpolation-splines-least-squares.md) |
| 5 | [`orthogonal-minimax-approximation`](orthogonal-minimax-approximation.md) |
| 6 | [`spectral-approximation`](spectral-approximation.md) |
| 7 | [`differentiation-quadrature`](differentiation-quadrature.md) |
| 8 | [`quadrature`](quadrature.md) |
| 9 | [`difficult-integrals-high-dimension`](difficult-integrals-high-dimension.md) |
| 10 | [`initial-value-methods`](initial-value-methods.md) |
| 11 | [`multistep-stiff-dae-methods`](multistep-stiff-dae-methods.md) |
| 12 | [`geometric-numerical-integration`](geometric-numerical-integration.md) |
| 13 | [`boundary-value-pde-methods`](boundary-value-pde-methods.md) |
| 14 | [`finite-volume-element-methods`](finite-volume-element-methods.md) |
| 15 | [`nonlinear-adaptive-field-methods`](nonlinear-adaptive-field-methods.md) |
| 16 | [`verified-interval-computation`](verified-interval-computation.md) |
| 17 | [`numerical-capstone-software-audit`](numerical-capstone-software-audit.md) |
| prerequisite | [`matrix-computation-applications:floating-point-and-factorization`](../matrix-computation-applications/floating-point-and-factorization.md), [`matrix-computation-applications:sparse-and-iterative-methods`](../matrix-computation-applications/sparse-and-iterative-methods.md) |
| prerequisite | [`matrix-computation-applications:qr-least-squares-svd`](../matrix-computation-applications/qr-least-squares-svd.md), [`matrix-computation-applications:eigenvalue-computations`](../matrix-computation-applications/eigenvalue-computations.md) |
| prerequisite | [`matrix-computation-applications:randomized-numerical-linear-algebra`](../matrix-computation-applications/randomized-numerical-linear-algebra.md), [`matrix-computation-applications:mixed-precision-verified-computing`](../matrix-computation-applications/mixed-precision-verified-computing.md) |

## Glossary

**absolute error.** \(\lvert \widehat{x}-x\rvert\) or a norm of the difference, with units inherited from the target. Prefer it when the target may be zero. See `finite-precision-conditioning`.

**absolute stability.** For a time method applied to a test equation, the set of scaled parameters for which the numerical amplification does not grow. It is not a complete accuracy or nonlinear-stability statement. See `initial-value-methods`, `multistep-stiff-dae-methods`.

**adaptive method.** A method that changes step, mesh, sample allocation, degree, or precision using an indicator and deterministic or declared stochastic decision rule. Adaptivity needs a stopping budget and failure state. See `differentiation-quadrature`, `initial-value-methods`, `nonlinear-adaptive-field-methods`.

**aliasing.** Indistinguishability of different frequencies or modes after finite sampling. It can move unresolved content into represented coefficients. See `spectral-approximation`.

**a posteriori estimate.** An error estimate built from the computed result and data, under a theorem’s assumptions. An indicator without a reliability result is not automatically an error bound. See `nonlinear-adaptive-field-methods`.

**backward error.** The smallest admissible data perturbation for which a computed output is exact. Structured backward error preserves properties named by the problem. See `finite-precision-conditioning`, `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**basis conditioning.** Sensitivity caused by coordinates used to represent an approximation space, distinct from the quality of the space itself. See `interpolation-splines-least-squares`, `spectral-approximation`.

**bitwise reproducibility.** Exact agreement of stored output bits under a specified environment, operation order, and exceptional-value policy. It is stronger than agreement within an error tolerance and does not prove correctness. See `verified-interval-computation`, `numerical-capstone-software-audit`.

**bracket.** An interval whose endpoint signs and continuity hypotheses support a root-existence conclusion. A sign change can fail to isolate a unique root. See `nonlinear-equations`.

**certificate.** A finite artifact and check that imply a stated mathematical conclusion under explicit assumptions. A residual is a certificate only when an appropriate residual-to-error or inclusion theorem applies. See `verified-interval-computation`, `numerical-capstone-software-audit`.

**componentwise error.** Error scaled separately by components, often preferable when vector components have very different magnitudes or units. See `finite-precision-conditioning`, `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**condition number.** First-order or global amplification of admissible input perturbations by a problem map. Its perturbation structure, norm, and scaling are part of the definition. See `finite-precision-conditioning`.

**consistent initialization.** Initial values for a differential-algebraic problem that satisfy its algebraic constraints and any required differentiated constraints. See `multistep-stiff-dae-methods`.

**consistency.** Agreement of a discretization with the target equation in a limiting regime. Consistency without a suitable stability statement need not imply convergence. See `initial-value-methods`, `boundary-value-pde-methods`.

**convergence.** Approach of a named approximation to a named target in a named norm, topology, probability mode, or limit. Iteration, mesh, sample, and distributional convergence are different statements.

**direct method, linear algebra.** A factorization-based method designed to complete in finitely many arithmetic stages in exact arithmetic. Rounding, pivoting, sparsity, and rank decisions still matter. See `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**discretization error.** Difference between an exact infinite-dimensional target and the exact solution of its finite approximation. It is distinct from incomplete algebraic solution and rounded implementation. See `initial-value-methods`, `boundary-value-pde-methods`.

**enclosure.** A set guaranteed to contain a target under the construction’s arithmetic and theorem assumptions. Narrow appearance alone does not establish containment. See `verified-interval-computation`.

**estimator efficiency.** An upper control of an estimator by the actual error plus declared additional terms; conventions vary, so inspect the inequality. It complements reliability. See `nonlinear-adaptive-field-methods`.

**estimator reliability.** An upper bound on actual error by a constant times a computable estimator, under stated assumptions. The constant and norm matter. See `nonlinear-adaptive-field-methods`.

**finite volume.** A discretization built from balances over control volumes and numerical fluxes across faces. Internal flux cancellation is a central conservation check. See `finite-volume-element-methods`.

**finite element.** A discretization using finite-dimensional trial and test spaces in a weak formulation. Space, quadrature, assembly, essential boundary treatment, and algebraic solve all enter its error ledger. See `finite-volume-element-methods`.

**floating-point operation.** A represented operation with a named format and rounding behavior. The common relative-error model has exceptions and is not a universal model of a compound expression. See `finite-precision-conditioning`.

**forward error.** Distance from computed output to intended exact output in a stated scale. See `finite-precision-conditioning`.

**globalization.** A mechanism such as line search or trust region that controls steps outside a local convergence neighborhood. It does not turn every stationary point into a desired root. See `nonlinear-systems-globalization`.

**inexact solve.** An algebraic or nonlinear solve stopped according to a declared criterion before exact finite convergence. Its tolerance should be balanced against other error sources. See `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`, `nonlinear-adaptive-field-methods`.

**interval extension.** A set-valued evaluation intended to enclose the range of a real expression over interval inputs. Equivalent real formulas can give enclosures of very different widths. See `verified-interval-computation`.

**iterative refinement.** Correction of a computed linear solution using residuals, possibly evaluated in higher precision. Its guarantee depends on factorization error, conditioning, precision choices, and stopping. See `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing`.

**Krylov subspace.** A span generated from a residual or vector by repeated action of a matrix. Convergence depends on spectral or polynomial approximation structure and preconditioning, not iteration count alone. See `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**least squares.** Minimization of a squared residual norm. Normal equations characterize the solution under rank assumptions but can square a condition number when formed directly. See `interpolation-splines-least-squares`.

**local truncation error.** One-step defect produced when exact solution data are inserted into a discrete method, with normalization stated. See `initial-value-methods`.

**manufactured solution.** A chosen exact function inserted into an equation to derive compatible forcing and data, providing an implementation benchmark. It tests the implemented pathway exercised, not every model regime. See `boundary-value-pde-methods`, `numerical-capstone-software-audit`.

**mesh independence.** Evidence that a reported output has stabilized under a declared mesh-refinement path and other tolerances. It is not a universal proof of discretization accuracy. See `boundary-value-pde-methods`, `nonlinear-adaptive-field-methods`.

**minimax approximation.** Approximation that minimizes maximum error in a named domain and norm. It differs from least squares and projection. See `orthogonal-minimax-approximation`.

**mixed precision.** Use of more than one arithmetic format within a computation. A contract records storage, compute, residual, accumulation, conversion, and stopping formats. See `verified-interval-computation`, `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing`.

**nonnormal matrix.** A matrix that does not commute with its adjoint. Eigenvalues alone may poorly describe transient behavior and perturbation sensitivity. See `matrix-computation-applications:qr-least-squares-svd`, `matrix-computation-applications:eigenvalue-computations`.

**observed order.** A rate inferred from finite refinement values. It is evidence consistent with asymptotic theory, not a proof of the theory or a bound at an untested scale. See `numerical-capstone-software-audit`.

**outward rounding.** Rounding lower enclosure endpoints downward and upper endpoints upward so the exact operation remains contained. See `verified-interval-computation`.

**preconditioner.** A transformation intended to make an iterative problem easier while allowing recovery of the original target. Setup cost, application accuracy, symmetry, variable behavior, and stopping interpretation matter. See `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**probabilistic guarantee.** A conclusion holding in expectation or outside a stated failure event under a named distribution and dependence model. See `difficult-integrals-high-dimension`, `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing`.

**quadrature exactness.** Exact integration by a rule for every function in a stated finite class under exact arithmetic. It does not imply accuracy for arbitrary nonsmooth or singular integrands. See `differentiation-quadrature`.

**randomized range finder.** A method that samples the action of a matrix to build a candidate low-dimensional range. Oversampling, power steps, randomness, and an independent residual check determine the claim. See `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing`.

**relative error.** Absolute error divided by a nonzero target scale. It is undefined or misleading near an exact zero unless combined with an absolute scale. See `finite-precision-conditioning`.

**reproducibility bundle.** Inputs, environment, code revision, seeds, parameters, raw outputs, logs, and regeneration procedure sufficient for the declared comparison. See `numerical-capstone-software-audit`.

**residual.** Failure of an approximate object to satisfy its defining equation. A residual becomes an error estimate only through additional stability or conditioning information.

**roundoff floor.** A regime in which reducing a discretization scale or tolerance no longer reduces—and may increase—the error because arithmetic effects dominate. See `differentiation-quadrature`, `numerical-capstone-software-audit`.

**safeguard.** A rule that preserves a bracket, admissible set, descent condition, or finite step when a fast local proposal is unreliable. See `nonlinear-equations`, `nonlinear-systems-globalization`.

**spectral approximation.** Approximation using global basis functions and structured coefficient transforms. Rapid convergence depends on regularity and stable coefficient evaluation. See `spectral-approximation`.

**stiffness.** A property of a problem-method-objective combination in which stability or fast modes impose work much smaller than the time scale of interest. It is not simply a large derivative. See `initial-value-methods`, `multistep-stiff-dae-methods`.

**tolerance.** A requested threshold in a stopping or acceptance rule. It is not an error guarantee without a bridge theorem. See `numerical-capstone-software-audit`.

**trust region.** A globalization strategy restricting a local model to a region whose radius changes according to agreement between predicted and actual reduction. See `nonlinear-systems-globalization`.

**unit roundoff.** A format- and rounding-dependent relative scale near one used in standard arithmetic models. It is distinct from spacing conventions and underflow thresholds. See `finite-precision-conditioning`.

**validation versus verification.** In this volume, verification asks whether equations and algorithms were solved or implemented as specified; validation asks whether the model adequately represents its intended external use. See `numerical-capstone-software-audit`.

**weak form.** An integral formulation against test functions, often obtained through integration by parts. It changes regularity and boundary bookkeeping, not the obligation to state a solution class. See `boundary-value-pde-methods`, `finite-volume-element-methods`.

**zero-stability.** Control of perturbation propagation in the homogeneous recurrence of a multistep method. Along with consistency and appropriate hypotheses it supports convergence. See `multistep-stiff-dae-methods`.

## Theorem and principle finder

Each entry states a retrieval contract, not a replacement proof.

### 1. Derivative conditioning principle

**Retrieve from:** `finite-precision-conditioning`.

**Contract.** A differentiable problem map, a declared absolute or relative perturbation, nonzero denominators for relative scaling, and a neighborhood small enough for linearization.

**Gives.** First-order amplification or an interval-wide derivative bound.

**Does not give.** Stability of the algorithm used to evaluate the map.

### 2. Forward-backward error bridge

**Retrieve from:** `finite-precision-conditioning`, `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**Contract.** A small structured backward perturbation and a condition bound valid over that perturbation neighborhood.

**Gives.** A forward-error estimate up to the stated higher-order or denominator effects.

**Does not give.** Small forward error for an ill-conditioned problem.

### 3. Interval inclusion principle

**Retrieve from:** `verified-interval-computation`.

**Contract.** Input containment, inclusion-respecting operations, directed endpoint bounds, and domain-safe exceptional handling.

**Gives.** Containment of the exact expression’s range or of the theorem-specific target.

**Does not give.** A sharp enclosure, existence of a root, or correctness of an arbitrary interval library configuration.

### 4. Intermediate-value root guarantee

**Retrieve from:** `nonlinear-equations`.

**Contract.** Continuity on a closed interval and endpoint values with opposite signs or a zero endpoint.

**Gives.** Existence of a root and, with bisection, a deterministic enclosing interval sequence.

**Does not give.** Uniqueness or differentiability.

### 5. Contraction mapping pattern

**Retrieve from:** `nonlinear-equations`.

**Contract.** A complete invariant set and contraction factor strictly below one on that set.

**Gives.** A unique fixed point in the set and geometric iteration/error bounds.

**Does not give.** Global convergence when the invariant-set or uniform-contraction condition is checked only locally.

### 6. Local Newton convergence

**Retrieve from:** `nonlinear-equations`, `nonlinear-systems-globalization`.

**Contract.** A sufficiently regular derivative or Jacobian, nonsingularity at the solution, and a starting point in a suitable neighborhood; variants change these hypotheses.

**Gives.** A local rate, often quadratic for exact Newton under standard assumptions.

**Does not give.** A safe starting region, a globally correct root, or a certificate from a small step alone.

### 7. Interpolation remainder

**Retrieve from:** `interpolation-splines-least-squares`.

**Contract.** Distinct nodes and enough derivatives over an interval containing nodes and evaluation point.

**Gives.** Error as a derivative term times the nodal product.

**Does not give.** Stable coefficient computation or favorable behavior for arbitrary node families as degree grows.

### 8. Orthogonal projection principle

**Retrieve from:** `interpolation-splines-least-squares`, `orthogonal-minimax-approximation`.

**Contract.** An inner-product space and a closed finite-dimensional approximation subspace.

**Gives.** A best approximation in the induced norm and residual orthogonality.

**Does not give.** Best uniform approximation or stable solution through normal equations.

### 9. Alternation criterion

**Retrieve from:** `orthogonal-minimax-approximation`.

**Contract.** The stated real approximation space and hypotheses for the uniform approximation problem.

**Gives.** A characterization or certificate of minimax optimality through alternating extremal error.

**Does not give.** A least-squares optimum or an automatically stable computational procedure.

### 10. Polynomial exactness and quadrature remainder

**Retrieve from:** `differentiation-quadrature`.

**Contract.** A rule, its exact polynomial class, and sufficient integrand smoothness for the chosen remainder representation.

**Gives.** Exactness on the class and an asymptotic or bounded remainder under its hypotheses.

**Does not give.** Accuracy for singular or unresolved oscillatory inputs.

### 11. Monte Carlo mean-square rate

**Retrieve from:** `difficult-integrals-high-dimension`.

**Contract.** A declared sampling distribution, finite variance, and dependence assumptions.

**Gives.** For the basic independent estimator, unbiasedness
\(E[\widehat{I}_N]=I\), variance \(\operatorname{Var}(\widehat{I}_N)=\sigma^{2}/N\), and therefore root-mean-square
error \(\sigma/\sqrt{N}\) when the sampling variance \(\sigma^{2}\) is finite.

**Does not give.** A deterministic bound for a particular draw or dimension-free variance.

### 12. Linear residual-to-error identity

**Retrieve from:** `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**Contract.** A nonsingular matrix and compatible norm.

**Gives.** \(e=A^{-1}r\) and corresponding norm bounds.

**Does not give.** Small error from residual alone when the inverse action is large.

### 13. Symmetric eigenvalue residual bound

**Retrieve from:** `matrix-computation-applications:qr-least-squares-svd`, `matrix-computation-applications:eigenvalue-computations`.

**Contract.** A symmetric or Hermitian matrix and a normalized approximate eigenvector.

**Gives.** A bound from eigenpair residual to distance between the proposed value and the spectrum; separation can further control direction.

**Does not give.** The same conclusion unchanged for a nonnormal matrix.

### 14. Best low-rank approximation principle

**Retrieve from:** `matrix-computation-applications:qr-least-squares-svd`, `matrix-computation-applications:eigenvalue-computations`.

**Contract.** Singular values in the declared spectral or Frobenius norm setting.

**Gives.** Error of truncating the singular-value decomposition at a selected rank.

**Does not give.** That the numerical rank is meaningful below data uncertainty.

### 15. Randomized range guarantee

**Retrieve from:** `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing`.

**Contract.** A named random sketch distribution, dimensions, oversampling or power parameters, and probability statement.

**Gives.** Expected or high-probability approximation quality.

**Does not give.** Success for every seed; use an independent residual check.

### 16. Consistency-stability-convergence bridge

**Retrieve from:** `initial-value-methods`, `multistep-stiff-dae-methods`, `boundary-value-pde-methods`.

**Contract.** The chapter-specific stability notion, consistency order, regularity, and fixed finite horizon or mesh family.

**Gives.** A global convergence statement for the specified problem and method class.

**Does not give.** Accuracy outside the stability regime or for a different boundary/constraint treatment.

### 17. Discrete conservation balance

**Retrieve from:** `boundary-value-pde-methods`, `finite-volume-element-methods`.

**Contract.** One consistently oriented flux per shared face plus explicit boundary and source contributions.

**Gives.** Cancellation of internal fluxes and a global discrete balance.

**Does not give.** High-order pointwise accuracy, positivity, or entropy stability by itself.

### 18. Weak coercive solve pattern

**Retrieve from:** `boundary-value-pde-methods`, `finite-volume-element-methods`.

**Contract.** Declared trial/test spaces, bounded and coercive bilinear form, compatible data, and correctly lifted essential boundaries.

**Gives.** Well-posed weak and discrete problems plus an energy framework for error analysis.

**Does not give.** Classical regularity or an optimal mesh rate without approximation and regularity hypotheses.

### 19. Residual-estimator reliability pattern

**Retrieve from:** `nonlinear-adaptive-field-methods`.

**Contract.** The specified operator, mesh regularity, solution regime, norm, residual and jump terms, and theorem constants.

**Gives.** An upper error control by a computable estimator under the chapter’s assumptions.

**Does not give.** Exact error equality or convergence from arbitrary marking and nonlinear stopping.

### 20. Verified nonlinear inclusion pattern

**Retrieve from:** `verified-interval-computation`.

**Contract.** An interval region, derivative enclosures, nonsingular preconditioner or center data as required, and outward-rounded evaluation.

**Gives.** The theorem-specific existence, uniqueness, or exclusion conclusion.

**Does not give.** Nonexistence when the test merely fails.

## Algorithm finder by task

| task | begin with | principal method families | minimum evidence |
|---|---|---|---|
| evaluate a cancellation-prone expression | `finite-precision-conditioning` | reformulation, scaling, stable primitives | exact identity plus adverse-scale comparison |
| make a reduction reproducible | `verified-interval-computation` | fixed tree, pairwise/compensated sum, exact accumulator where available | order, format, exceptional policy, reference check |
| enclose an arithmetic result | `verified-interval-computation` | outward-rounded interval evaluation, subdivision, centered forms | input enclosure and containment audit |
| find a scalar root | `nonlinear-equations` | bisection, fixed point, safeguarded Newton/secant | bracket or local hypotheses, residual-to-root bridge |
| solve a nonlinear system | `nonlinear-systems-globalization` | damped Newton, line search, trust region, continuation | scaled residual, step acceptance, Jacobian audit |
| interpolate or fit data | `interpolation-splines-least-squares` | barycentric evaluation, splines, QR-based least squares | node/basis/objective declaration and residual |
| minimize uniform approximation error | `orthogonal-minimax-approximation` | exchange/alternation-guided methods | extremal-error and alternation evidence |
| compute global coefficients | `spectral-approximation` | structured cosine/Fourier transforms, stable recurrences | normalization, aliasing check, coefficient decay |
| differentiate sampled data | `differentiation-quadrature` | balanced stencils, extrapolation, regularized alternatives | truncation/noise/roundoff budget |
| integrate a smooth function | `differentiation-quadrature` | composite, Gaussian, adaptive quadrature | exactness check and refinement/estimator record |
| integrate singular or oscillatory data | `difficult-integrals-high-dimension` | transformation, splitting, phase-aware quadrature | singularity/phase analysis and work-versus-error table |
| integrate in high dimension | `difficult-integrals-high-dimension` | Monte Carlo and structured sampling | variance/failure model, seed, independent check |
| solve a dense or sparse system | `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods` | pivoted factorization, stationary/Krylov iteration, preconditioning | scaled residual and conditioning/backward evidence |
| find eigenpairs or low rank | `matrix-computation-applications:qr-least-squares-svd`, `matrix-computation-applications:eigenvalue-computations` | power/subspace iteration, shifted solves, singular-value methods | residual, separation, orthogonality, truncation error |
| accelerate matrix work probabilistically | `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing` | sketches, range finding, mixed-precision refinement | probability budget and deterministic residual check |
| integrate a nonstiff initial-value problem | `initial-value-methods` | explicit one-step methods, embedded adaptivity | step history, local estimator, invariant/reference check |
| integrate a stiff or constrained problem | `multistep-stiff-dae-methods` | implicit multistep, nonlinear step solve, consistent initialization | stability regime, constraint and solve residuals |
| solve a boundary or field problem | `boundary-value-pde-methods` | finite differences, flux/weak discretizations | boundary audit, manufactured solution, refinement |
| preserve local conservation | `finite-volume-element-methods` | finite-volume flux assembly | cell and global balance tables |
| use variational structure | `finite-volume-element-methods` | finite-element assembly, lifting, quadrature | weak residual, energy and mesh checks |
| adapt a nonlinear field solve | `nonlinear-adaptive-field-methods` | damped nonlinear iteration, residual estimation, deterministic marking | coupled error budget and complete adaptive history |
| design a reproducible study | `numerical-capstone-software-audit` | exact fixtures, refinement, invariant/balance checks | artifact schema and claim-boundary statement |
| audit an integrated solver | `numerical-capstone-software-audit` | adverse fixtures, seeded defects, proof logs, regression tests | rerunnable dossier with success and failure cases |

## Failure-message finder

**Residual small, answer implausible.** Check scaling and conditioning in `finite-precision-conditioning`, then use the problem-specific residual bridge in `nonlinear-equations`, `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`, or `matrix-computation-applications:qr-least-squares-svd`, `matrix-computation-applications:eigenvalue-computations`.

**Refinement stops improving.** Separate discretization, iteration, data, and roundoff floors with `differentiation-quadrature` and `numerical-capstone-software-audit`.

**Newton step grows or leaves the domain.** Use scaling, safeguarding, line search, or trust regions in `nonlinear-systems-globalization`; for fields also inspect `nonlinear-adaptive-field-methods`.

**Iterative linear solve stagnates.** Inspect spectrum, nonnormality, scaling, preconditioning, orthogonality loss, and stopping in `matrix-computation-applications:floating-point-and-factorization`, `matrix-computation-applications:sparse-and-iterative-methods`.

**Randomized output changes with the seed.** That is expected variation until the theorem and verification step say otherwise; use `matrix-computation-applications:randomized-numerical-linear-algebra`, `matrix-computation-applications:mixed-precision-verified-computing` and `numerical-capstone-software-audit`.

**Time solution oscillates or explodes.** Check the method’s stability region, step, nonlinear solve, and problem stiffness in `initial-value-methods` and `multistep-stiff-dae-methods`.

**Field solution violates conservation.** Audit face orientation, boundary fluxes, source quadrature, and nonlinear linearization in `finite-volume-element-methods` and `nonlinear-adaptive-field-methods`.

**Interval enclosure is enormous.** Inspect scaling, dependency, centered forms, monotonicity, and subdivision in `verified-interval-computation`. Width is a quality issue; containment is a validity issue.

**A rerun differs.** First decide whether the contract is bitwise, tolerance-based, or statistical. Then inspect reductions, threads, arithmetic environment, seeds, unordered data, and hidden defaults using `verified-interval-computation` and `numerical-capstone-software-audit`.
