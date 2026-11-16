# Optimization and decision science

**Audience.** Engineers, operations researchers, economists, and machine-learning practitioners.

**Goal.** Formulate decisions mathematically and solve continuous, discrete, and uncertain optimization problems.

**Estimated time.** About 300 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Geometry of objectives

**Milestone.** Recognize convexity and derive optimality conditions.

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
- **Multivariable calculus** — Generalize differentiation and integration to functions, surfaces, and regions in many dimensions.
  - [Surface Curvature Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-parametric-surfaces)
  - [Choose and Verify a Vector Calculus Theorem](../recipe-vector-calculus-theorem-audit.md)
  - [Shape Operator and Minimal-Surface Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-shape-operator-surfaces)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
  - [Differential Geometry of Curves and Surfaces](#/books/differential-geometry-curves-surfaces)
- **Inner-product spaces** — Equip real or complex vector spaces with length, angle, orthogonality, adjoints, and orthonormal coordinates.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [From Least Squares to Fourier: Geometry in Function Space](../hilbert-fourier-geometry.md)
  - [Transport the Metric Before Projecting](../../apps/atlas/index.html#/labs?lab=visual-lab-metric-projection)
  - [Hilbert space and projection](../functional-analysis-hilbert-space-projection.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
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

## Stage 2: Algorithms and constraints

**Milestone.** Choose and diagnose an algorithm for a constrained problem.

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
- **Nonlinear optimization** — Find constrained or unconstrained optima using line searches, trust regions, and stationarity conditions.
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Convex Optimisation: Structure, Duality and Algorithms](#/books/numerical-mathematics-optimization-by-structure)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
  - [Numerical Proofs: Stability, Optimization, and Discretization](#/courses/atlas-numerics-optimization-advanced)
- **Integer optimization** — Optimize discrete decisions using relaxations, branch-and-bound, cutting planes, and combinatorial structure.
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Integer Optimality Certificates: Relax, Branch, Bound, Verify](../numerical-mathematics-integer-certificates.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Linear Programming and Optimisation: A First Course](#/books/linear-programming-optimisation)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)
- **Automatic differentiation** — Compute exact program derivatives efficiently by composing local derivatives forward or backward.
  - [Solve and Diagnose a Smooth Optimization Problem](../recipe-optimization-diagnostics.md)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
  - [Discrete and Global Optimisation](#/books/discrete-global-optimisation)

## Stage 3: Decisions in systems

**Milestone.** Explain how uncertainty and other agents alter the decision model.

- **Operations research** — Optimize allocation, scheduling, queues, inventory, and decisions under constraints and uncertainty.
  - [Models Before Answers: A First Encounter with Applied Mathematics](../models-before-answers.md)
  - [Applied Modeling: From Mechanisms to Decisions](#/courses/atlas-applied-modeling-standard)
  - [Mathematical Modelling: Models, Evidence and Failure Boundaries](#/books/applied-modeling-proof-reference)
  - [Operations Research: Allocation, Flows, Queues, and Inventory](../operations-research-systems.md)
  - [Build, Compute, and Validate a Trustworthy Mathematical Model](../recipe-trustworthy-model-compute-validate.md)
  - [Decision Systems Laboratory: Flow, Queues, and Portfolio Trade-offs](../../apps/atlas/index.html#/labs?lab=visual-lab-decision-systems)
  - [Applied Modeling: Control, Biological Inversion, and Financial Model Risk](#/courses/atlas-applied-modeling-specialist)
  - [Operating models: allocation and flow certificates](../operations-allocation-and-flow-certificates.md)
  - [Operating models: queues, inventory and uncertainty](../operations-queues-inventory-and-uncertainty.md)
- **Game theory** — Model strategic interaction through preferences, equilibria, information, repeated play, and mechanism design.
  - [Fixed Points: One Idea Across Mathematics](../fixed-points.md)
  - [Models Before Answers: A First Encounter with Applied Mathematics](../models-before-answers.md)
  - [Applied Modeling: From Mechanisms to Decisions](#/courses/atlas-applied-modeling-standard)
  - [Mathematical Modelling: Models, Evidence and Failure Boundaries](#/books/applied-modeling-proof-reference)
  - [Operations Research: Allocation, Flows, Queues, and Inventory](../operations-research-systems.md)
  - [Build, Compute, and Validate a Trustworthy Mathematical Model](../recipe-trustworthy-model-compute-validate.md)
  - [Game Theory](#/books/game-theory)
- **Control theory** — Design inputs that steer dynamic systems while analyzing controllability, observability, and stability.
  - [Change, Motion, and Patterns Before the Machinery](../differential-equations-first-encounter.md)
  - [Ordinary differential equations](#/courses/atlas-differential-equations-dynamics-standard)
  - [Advanced Dynamical Systems: Local Geometry and Long-Time Structure](#/books/differential-equations-verified-dynamics)
  - [Stability, Feedback, and What Sensors Can Know](../stability-control-observability.md)
  - [A Differential Model and Solver Audit](../recipe-differential-model-solver-audit.md)
  - [Flow, Feedback, and Invariant-Measure Audit](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit)
  - [Control Theory: State, Feedback and Decisions](#/books/control-theory)
  - [Applied Modeling: Control, Biological Inversion, and Financial Model Risk](#/courses/atlas-applied-modeling-specialist)
- **Reinforcement learning** — Learn sequential decisions from reward using Markov processes, dynamic programming, and exploration.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Decisions over Time: Markov Decision Processes and Reinforcement Learning](../mdp-reinforcement-learning.md)

## Capstone

Solve a realistic allocation or control problem and produce a sensitivity and robustness report.
