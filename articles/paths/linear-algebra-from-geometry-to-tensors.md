# Linear algebra from geometry to tensors

**Audience.** Learners in mathematics, computing, data, engineering, or physics who want a complete structural and computational linear-algebra spine.

**Goal.** Move from vectors and systems through abstract maps, metric geometry, spectra, multilinear structure, and reliable large-scale computation.

**Estimated time.** About 420 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Vectors, matrices, and constraints

**Milestone.** Translate among equations, column combinations, and geometric transformations.

- **Vectors** — Represent directed quantities, coordinates, combinations, dot products, and geometric dependence.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Why Complex Numbers Are Geometric](../complex-numbers.md)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
  - [Precalculus](#/books/precalculus)
  - [Euclidean Geometry and Trigonometry](#/books/euclidean-geometry-trigonometry)
  - [Motion Before Mechanics: Geometry, Vectors and Rates](#/courses/atlas-physics-models-entry)
- **Matrices** — Use rectangular arrays to encode systems, data, transformations, and composition.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Parameters, Rank, and Complete Solution Sets](../../apps/atlas/index.html#/labs?lab=visual-lab-parameter-systems)
  - [Full Rank, but Which Integer Outputs?](../../apps/atlas/index.html#/labs?lab=visual-lab-integer-image)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
- **Linear systems** — Solve simultaneous linear constraints and interpret existence, uniqueness, and degrees of freedom.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Core Solved Exercise Bank](../../problems/atlas/proof-foundations/index.md)

## Stage 2: Coordinate-free structure

**Milestone.** Prove rank–nullity and separate operator invariants from coordinate artifacts.

- **Vector spaces** — Abstract linear combination, independence, subspaces, sums, quotients, and field-dependent structure.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [What Can the Measurements Determine?](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-information)
  - [Keep the Original Columns: Rank Factorization](../../apps/atlas/index.html#/labs?lab=visual-lab-rank-factorization)
  - [Pull a Measurement Backward: Dual Coordinates](../../apps/atlas/index.html#/labs?lab=visual-lab-dual-coordinates)
  - [Simplicial complexes and the boundary map](../homology-simplicial-complexes-boundary-map.md)
- **Basis and dimension** — Build unique coordinate systems from independent spanning lists and prove dimension is invariant through exchange.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
- **Linear maps** — Study structure-preserving maps through kernels, images, composition, coordinate matrices, and isomorphisms.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Eigenvectors Under Repeated Motion](../../apps/atlas/index.html#/labs?lab=visual-lab-eigenvectors)
  - [Spacetime Invariants: Special Relativity by Geometry](../spacetime-invariants.md)
  - [Parameters, Rank, and Complete Solution Sets](../../apps/atlas/index.html#/labs?lab=visual-lab-parameter-systems)
  - [What Can the Measurements Determine?](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-information)
  - [Keep the Original Columns: Rank Factorization](../../apps/atlas/index.html#/labs?lab=visual-lab-rank-factorization)
  - [Pull a Measurement Backward: Dual Coordinates](../../apps/atlas/index.html#/labs?lab=visual-lab-dual-coordinates)
  - [Why Eigenvalue Values Are Not Enough](../../apps/atlas/index.html#/labs?lab=visual-lab-polynomial-projectors)
  - [Can These Pure Values Extend Linearly?](../../apps/atlas/index.html#/labs?lab=visual-lab-tensor-relations)
  - [Nearest points and perpendicular error](../../apps/atlas/index.html#/labs?lab=visual-lab-hilbert-projections)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
  - [Investigation: What Does a Persistence Rank Audit Identify?](#/courses/atlas-research-frontiers-specialist)
  - [The exponential map](../lie-exponential-map.md)
  - [Matrix groups: SO(3) and SU(2)](../lie-matrix-groups-so3-su2.md)
- **Rank, nullity, and the four subspaces** — Account for visible and lost dimensions through kernels, images, row and column spaces, and rank–nullity.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Chain complexes and d squared](../homology-chain-complexes-d-squared.md)
  - [Betti numbers and Euler characteristic](../homology-betti-euler-characteristic.md)
- **Coordinates and change of basis** — Translate vectors and operators between coordinate systems and distinguish invariant structure from matrix entries.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
- **Determinants** — Interpret signed volume scaling and use it to detect invertibility and orientation.
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Eigenvectors Under Repeated Motion](../../apps/atlas/index.html#/labs?lab=visual-lab-eigenvectors)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)

## Stage 3: Metric geometry and approximation

**Milestone.** Derive projection and solve a least-squares problem by a justified factorization.

- **Inner-product spaces** — Equip real or complex vector spaces with length, angle, orthogonality, adjoints, and orthonormal coordinates.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [From Least Squares to Fourier: Geometry in Function Space](../hilbert-fourier-geometry.md)
  - [Transport the Metric Before Projecting](../../apps/atlas/index.html#/labs?lab=visual-lab-metric-projection)
  - [Hilbert space and projection](../functional-analysis-hilbert-space-projection.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Orthogonal projections** — Decompose vectors into subspace and perpendicular components and characterize closest-point approximation.
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Transport the Metric Before Projecting](../../apps/atlas/index.html#/labs?lab=visual-lab-metric-projection)
  - [Hilbert space and projection](../functional-analysis-hilbert-space-projection.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Least squares** — Solve inconsistent linear systems by projection while separating model error, residuals, rank, and conditioning.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [A Stable Linear-Algebra Workflow: From Model to Verified Answer](../recipe-stable-linear-algebra-workflow.md)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Matrix factorizations** — Decompose matrices into triangular, orthogonal, diagonal, or structured factors suited to solving and interpretation.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [A Stable Linear-Algebra Workflow: From Model to Verified Answer](../recipe-stable-linear-algebra-workflow.md)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)

## Stage 4: Spectra and normal forms

**Milestone.** Explain both successful diagonalization and the structure exposed when it fails.

- **Eigenvalues and eigenvectors** — Find directions preserved by a transformation and use spectra to understand repeated action.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Eigenvectors Under Repeated Motion](../../apps/atlas/index.html#/labs?lab=visual-lab-eigenvectors)
  - [Why Eigenvalue Values Are Not Enough](../../apps/atlas/index.html#/labs?lab=visual-lab-polynomial-projectors)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Singular value decomposition** — Resolve arbitrary rectangular maps into orthogonal input/output directions and nonnegative stretch factors.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Matrix Computation in Practice: Structure, Error, and Scale](#/books/matrix-computation-applications)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [A Stable Linear-Algebra Workflow: From Model to Verified Answer](../recipe-stable-linear-algebra-workflow.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Canonical forms** — Classify operators up to similarity using minimal polynomials, invariant factors, Jordan chains, and rational forms.
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)
- **Spectral theory** — Connect operator structure to eigenvalues, invariant subspaces, diagonal forms, and functional calculus.
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [Waves, Boundaries, and Spectra](#/courses/atlas-waves-boundaries-spectra)
  - [Mathematical Quantum Mechanics: States, Operators, and Dynamics](#/books/two-state-quantum-mechanics)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)

## Stage 5: Dual and multilinear structure

**Milestone.** Track coordinate changes across operator, form, dual, and tensor transformation laws.

- **Dual spaces and transpose maps** — Study linear measurements, dual bases, annihilators, transpose maps, and the coordinate-free reversal of arrows.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [Linear Programming and Optimisation: A First Course](#/books/linear-programming-optimisation)
  - [Why Hahn–Banach and Baire matter](../functional-analysis-hahn-banach-baire.md)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)
- **Bilinear and quadratic forms** — Classify pairings, energies, and conics through congruence, definiteness, inertia, and symmetric or skew structure.
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
- **Multilinear maps** — Generalize bilinear structure to several slots and organize symmetries, contractions, and universal factorization.
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Finite-Dimensional Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs)
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)
- **Tensor algebra** — Represent multilinear relationships independently of coordinates using tensor products, symmetric and exterior powers, and contractions.
  - [Spectra, Tensors, and the Limits of Diagonalization](../spectral-tensor-structure.md)
  - [Stress Tensor & Mohr Circle Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-stress-tensor)
  - [Can These Pure Values Extend Linearly?](../../apps/atlas/index.html#/labs?lab=visual-lab-tensor-relations)
  - [Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation](#/courses/atlas-linear-algebra-specialist)

## Stage 6: Reliable computation

**Milestone.** Choose, implement, and audit a stable solver with conditioning and residual evidence.

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

## Capstone

Analyze one real linear operator from geometry, data, physics, or a network using bases, four subspaces, projection, spectral or singular structure, a tested implementation, and an explicit numerical-error budget.
