# Reliable numerical mathematics from error to certificates

**Audience.** Learners moving from calculus and linear algebra into reliable approximation, discretization, continuous optimization, and certified integer computation.

**Goal.** Formulate a numerical target, separate conditioning from algorithmic stability, choose a structure-aware method, monitor convergence, and defend the reported answer with an appropriate error or optimality certificate.

**Estimated time.** About 210 hours.

> Use the named course for the current chapter sequence. The earlier path and its original study records remain available separately. See the [course](#/courses/atlas-numerical-mathematics-reliable-computation).

## Stage 1: Representation, sensitivity, and scalar iteration

**Milestone.** Rewrite one cancellation-prone expression, distinguish forward and backward error, and terminate a safeguarded root computation with a valid enclosure.

- **Floating-point arithmetic** — Understand finite number representation, rounding, cancellation, overflow, and stable computation.
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Error Landscapes: Why More Digits and More Points Can Hurt](../numerical-mathematics-error-landscapes.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Numerical Error & Approximation Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-numerical-error-approximation)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
  - [Meshes, Random Gradients, and Numerical Reliability](#/courses/atlas-numerics-optimization-specialist)
- **Root finding** — Approximate zeros using bracketing, fixed-point iteration, Newton methods, and convergence diagnostics.
  - [Fixed Points: One Idea Across Mathematics](../fixed-points.md)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)

## Stage 2: Approximation from samples

**Milestone.** Compare node geometries, build a stable approximation, and justify a quadrature refinement decision with an explicit error indicator.

- **Interpolation and approximation** — Approximate data and functions with polynomials, splines, bases, and minimax or least-squares criteria.
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Error Landscapes: Why More Digits and More Points Can Hurt](../numerical-mathematics-error-landscapes.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Numerical Error & Approximation Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-numerical-error-approximation)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
- **Numerical integration** — Approximate integrals using quadrature, adaptivity, Monte Carlo sampling, and error estimates.
  - [Contours, Winding, and Residues Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-complex-residues)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Error Landscapes: Why More Digits and More Points Can Hurt](../numerical-mathematics-error-landscapes.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Numerical Error & Approximation Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-numerical-error-approximation)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)

## Stage 3: Linear algebra and differential discretization

**Milestone.** Connect residual, conditioning, stability, and refinement evidence in one reproducible linear or discretized computation.

- **Numerical linear algebra** — Solve matrix problems reliably using factorizations, iterative methods, conditioning, and error analysis.
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [A Stable Linear-Algebra Workflow: From Model to Verified Answer](../recipe-stable-linear-algebra-workflow.md)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Regularize and Audit an Inverse Problem](../recipe-regularized-inverse-problems.md)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [From Local Defect to Global Trust: Discretization and Verification](../numerical-mathematics-discretization-verification.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
  - [Meshes, Random Gradients, and Numerical Reliability](#/courses/atlas-numerics-optimization-specialist)
- **Numerical ODEs** — Approximate trajectories with explicit, implicit, adaptive, and structure-preserving time-stepping schemes.
  - [Vector Fields and Flow Lines](../../apps/atlas/index.html#/labs?lab=visual-lab-vector-fields)
  - [Classical Mechanics: Action, Symmetry and Hamiltonian Dynamics](#/books/action-symmetry-mechanics)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [From Local Defect to Global Trust: Discretization and Verification](../numerical-mathematics-discretization-verification.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
- **Numerical PDEs** — Discretize fields using finite differences, volumes, or elements while preserving stability and conservation.
  - [Waves, Boundaries, and Spectra](#/courses/atlas-waves-boundaries-spectra)
  - [Compute a Conservation Law Without Losing the Conserved Quantity](../recipe-conservation-field-computation.md)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [From Local Defect to Global Trust: Discretization and Verification](../numerical-mathematics-discretization-verification.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
  - [Meshes, Random Gradients, and Numerical Reliability](#/courses/atlas-numerics-optimization-specialist)

## Stage 4: Continuous optimization by structure

**Milestone.** Derive gradients reliably, choose a globalized algorithm, and state exactly when first-order or KKT conditions certify global optimality.

- **Convex optimization** — Optimize convex objectives over convex sets using duality, gradients, proximal maps, and interior methods.
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Regularize and Audit an Inverse Problem](../recipe-regularized-inverse-problems.md)
  - [Convex Optimisation: Structure, Duality and Algorithms](#/books/numerical-mathematics-optimization-by-structure)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Integer Optimality Certificates: Relax, Branch, Bound, Verify](../numerical-mathematics-integer-certificates.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Linear Programming and Optimisation: A First Course](#/books/linear-programming-optimisation)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
  - [Meshes, Random Gradients, and Numerical Reliability](#/courses/atlas-numerics-optimization-specialist)
- **Nonlinear optimization** — Find constrained or unconstrained optima using line searches, trust regions, and stationarity conditions.
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Convex Optimisation: Structure, Duality and Algorithms](#/books/numerical-mathematics-optimization-by-structure)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
- **Automatic differentiation** — Compute exact program derivatives efficiently by composing local derivatives forward or backward.
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)

## Stage 5: Discrete decisions and finite certificates

**Milestone.** Construct a relaxation, track incumbent and valid bound directions, and close a small branch-and-bound proof without rounding a relaxed point.

- **Integer optimization** — Optimize discrete decisions using relaxations, branch-and-bound, cutting planes, and combinatorial structure.
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Integer Optimality Certificates: Relax, Branch, Bound, Verify](../numerical-mathematics-integer-certificates.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Linear Programming and Optimisation: A First Course](#/books/linear-programming-optimisation)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)

## Capstone

Produce a reproducible numerical dossier containing the exact mathematical target, data and arithmetic assumptions, a method-selection argument, convergence history, independent checks, a failure diagnosis, and a certificate whose scope matches the final claim.
