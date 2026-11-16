# Applied mathematics and modeling

**Audience.** Learners interested in science, engineering, policy, or industrial problems.

**Goal.** Translate mechanisms into models, analyze them, compute approximations, and communicate limitations.

**Estimated time.** About 500 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Modeling language

**Milestone.** Formulate assumptions and dimensionless variables for a real system.

- **Mathematical modeling** — Choose variables, assumptions, relations, parameters, and tests that turn situations into useful mathematics.
  - [The Working Mathematician's Toolkit](#/books/mathematical-toolkit)
  - [Fit and Audit a Mathematical Model](../recipe-model-fit-audit.md)
  - [Nondimensionalize a Model Before You Compute](../recipe-nondimensional-modeling.md)
  - [Algebra and functions](#/courses/atlas-algebra-functions-standard)
  - [Fit and Audit an Exponential Model](../recipe-exponential-model-audit.md)
  - [Numerical Cards for a Model Audit](../recipe-model-audit-numerical-cards.md)
  - [Grouped Prediction: New Devices and Known Devices](../recipe-model-audit-foundations-tasks.md)
  - [A Separate-Regime Model Check and Repair Guide](../recipe-model-audit-foundations-frozen-test.md)
  - [Functional Laws, Regularity, and Stability](#/courses/atlas-algebra-functions-specialist)
  - [Build a First Model: Units, Balance and Uncertainty](#/courses/atlas-applied-modeling-entry)
  - [Mechanics and Fields: From Force Laws to Spatial Models](#/courses/atlas-mechanics-fields-core)
  - [Motion Before Mechanics: Geometry, Vectors and Rates](#/courses/atlas-physics-models-entry)
- **Dimensional analysis** — Use units and scale invariance to check formulas, reduce variables, and discover dimensionless groups.
  - [Nondimensionalize a Model Before You Compute](../recipe-nondimensional-modeling.md)
  - [Models Before Answers: A First Encounter with Applied Mathematics](../models-before-answers.md)
  - [Applied Modeling: From Mechanisms to Decisions](#/courses/atlas-applied-modeling-standard)
  - [Mathematical Modelling: Models, Evidence and Failure Boundaries](#/books/applied-modeling-proof-reference)
  - [Can the Model Be Trusted? Sensitivity, Identifiability, and Validation](../sensitivity-identifiability-validation.md)
  - [Build, Compute, and Validate a Trustworthy Mathematical Model](../recipe-trustworthy-model-compute-validate.md)
  - [Applied Modeling: Identification, Inversion, and Validation](#/courses/atlas-applied-modeling-advanced)
  - [Build a First Model: Units, Balance and Uncertainty](#/courses/atlas-applied-modeling-entry)
- **Linear systems** — Solve simultaneous linear constraints and interpret existence, uniqueness, and degrees of freedom.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [Program Linear Algebra: Small Algorithms, Explicit Invariants](#/courses/atlas-program-linear-algebra)
  - [Core Solved Exercise Bank](../../problems/atlas/proof-foundations/index.md)
- **Probability distributions** — Use discrete and continuous distribution families to encode different random mechanisms.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [From Counting to Temperature: Entropy and the Partition Function](../entropy-partition-function.md)
  - [Measure and Lebesgue Integration: Size, Exceptions, and Safe Limits — Overview](#/courses/atlas-measure-lebesgue-integration)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)

## Stage 2: Continuous systems

**Milestone.** Analyze equilibria, stability, and field evolution without relying only on exact formulas.

- **Ordinary differential equations** — Model continuous-time change and solve or analyze initial-value and boundary-value problems.
  - [Vector Fields and Flow Lines](../../apps/atlas/index.html#/labs?lab=visual-lab-vector-fields)
  - [Change, Motion, and Patterns Before the Machinery](../differential-equations-first-encounter.md)
  - [Ordinary differential equations](#/courses/atlas-differential-equations-dynamics-standard)
  - [Advanced Dynamical Systems: Local Geometry and Long-Time Structure](#/books/differential-equations-verified-dynamics)
  - [Stability, Feedback, and What Sensors Can Know](../stability-control-observability.md)
  - [A Differential Model and Solver Audit](../recipe-differential-model-solver-audit.md)
  - [Flow, Feedback, and Invariant-Measure Audit](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit)
  - [ODE: A First Course](#/books/ode-first-course)
  - [Boundary Problems, Weak Fields, and Verified Approximation](#/courses/atlas-differential-equations-advanced)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Mechanics and Fields: From Force Laws to Spatial Models](#/courses/atlas-mechanics-fields-core)
  - [Change and motion: control, long times and numerical steps](../change-motion-control-long-time-and-steps.md)
  - [Change and motion: state, rules and futures](../change-motion-state-and-futures.md)
- **Dynamical systems** — Study iteration and flow through states, orbits, invariant sets, and qualitative long-term behavior.
  - [Fixed Points: One Idea Across Mathematics](../fixed-points.md)
  - [Vector Fields and Flow Lines](../../apps/atlas/index.html#/labs?lab=visual-lab-vector-fields)
  - [The Road to Chaos](../../apps/atlas/index.html#/labs?lab=visual-lab-logistic-map)
  - [Diffusion on Networks: Laplacians, Spectra, and Spreading](#/courses/atlas-diffusion-on-networks)
  - [Local Rules, Global Worlds: Cellular Automata from First Principles](#/courses/atlas-cellular-automata-emergence)
  - [Cellular Automata Rule Forge](../../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata)
  - [Fractals by Iteration: Rules, Scale, and the Edge of Escape](../fractals-by-iteration.md)
  - [Change, Motion, and Patterns Before the Machinery](../differential-equations-first-encounter.md)
  - [Ordinary differential equations](#/courses/atlas-differential-equations-dynamics-standard)
  - [Advanced Dynamical Systems: Local Geometry and Long-Time Structure](#/books/differential-equations-verified-dynamics)
  - [Stability, Feedback, and What Sensors Can Know](../stability-control-observability.md)
  - [Chaos, Ergodicity, and the Logic of Long-Time Evidence](../chaos-ergodicity-long-time.md)
  - [A Differential Model and Solver Audit](../recipe-differential-model-solver-audit.md)
  - [Flow, Feedback, and Invariant-Measure Audit](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit)
  - [Dynamical Systems: A First Course](#/books/dynamical-systems-first-course)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Change and motion: control, long times and numerical steps](../change-motion-control-long-time-and-steps.md)
  - [Change and motion: state, rules and futures](../change-motion-state-and-futures.md)
- **Partial differential equations** — Model spatially distributed change through elliptic, parabolic, hyperbolic, and conservation equations.
  - [Waves, Boundaries, and Spectra](#/courses/atlas-waves-boundaries-spectra)
  - [Change, Motion, and Patterns Before the Machinery](../differential-equations-first-encounter.md)
  - [Ordinary differential equations](#/courses/atlas-differential-equations-dynamics-standard)
  - [Advanced Dynamical Systems: Local Geometry and Long-Time Structure](#/books/differential-equations-verified-dynamics)
  - [Boundaries, Modes, and Stationary Paths in Differential Equations](../pde-fourier-variational-structure.md)
  - [A Differential Model and Solver Audit](../recipe-differential-model-solver-audit.md)
  - [Partial Differential Equations](#/books/partial-differential-equations)
  - [PDE: Weak Theory, Waves and Patterns](#/books/pde-weak-theory-waves-patterns)
  - [Heat, wave and Laplace equations](../pde-heat-wave-laplace-equations.md)
  - [The heat equation and the maximum principle](../pde-heat-maximum-principle.md)
  - [Weak solutions and Sobolev spaces: why](../pde-weak-solutions-sobolev-why.md)
  - [Heat modes lose amplitude at different rates](../../apps/atlas/index.html#/labs?lab=visual-lab-heat-mode-decay)
  - [Boundary Problems, Weak Fields, and Verified Approximation](#/courses/atlas-differential-equations-advanced)
  - [Weak Evolution, Randomness, and Memory](#/courses/atlas-differential-equations-specialist)
  - [Analytical Mechanics, Fields and Quantum Thermal Structure](#/courses/atlas-mathematical-physics-advanced)
  - [Geometry, Weak Continua and Quantum Fields](#/courses/atlas-mathematical-physics-specialist)
  - [Mechanics and Fields: From Force Laws to Spatial Models](#/courses/atlas-mechanics-fields-core)
- **Fourier methods** — Represent periodic and nonperiodic signals using frequency components to solve linear equations.
  - [Fourier Synthesis Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-fourier-synthesis)
  - [Waves, Boundaries, and Spectra](#/courses/atlas-waves-boundaries-spectra)
  - [From Least Squares to Fourier: Geometry in Function Space](../hilbert-fourier-geometry.md)
  - [Change, Motion, and Patterns Before the Machinery](../differential-equations-first-encounter.md)
  - [Ordinary differential equations](#/courses/atlas-differential-equations-dynamics-standard)
  - [Advanced Dynamical Systems: Local Geometry and Long-Time Structure](#/books/differential-equations-verified-dynamics)
  - [Boundaries, Modes, and Stationary Paths in Differential Equations](../pde-fourier-variational-structure.md)
  - [A Differential Model and Solver Audit](../recipe-differential-model-solver-audit.md)
  - [Fourier Analysis](#/books/fourier-analysis)
  - [Fourier coefficients](../fourier-coefficients.md)
  - [The discrete transform and the FFT](../fourier-discrete-transform-fft.md)
  - [Convergence and Gibbs](../fourier-convergence-gibbs.md)
  - [Boundary Problems, Weak Fields, and Verified Approximation](#/courses/atlas-differential-equations-advanced)

## Stage 3: Reliable computation

**Milestone.** Implement and validate a stable numerical inference workflow.

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
- **Numerical ODEs** — Approximate trajectories with explicit, implicit, adaptive, and structure-preserving time-stepping schemes.
  - [Vector Fields and Flow Lines](../../apps/atlas/index.html#/labs?lab=visual-lab-vector-fields)
  - [Classical Mechanics: Action, Symmetry and Hamiltonian Dynamics](#/books/action-symmetry-mechanics)
  - [Numerical Mathematics: From Error to Algorithms](#/books/numerical-mathematics-error-algorithms)
  - [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation)
  - [From Local Defect to Global Trust: Discretization and Verification](../numerical-mathematics-discretization-verification.md)
  - [Choose, Run, and Audit a Numerical Method](../recipe-numerical-mathematics-method-selection.md)
  - [Certified Numerical Methods: Solved Exercises](../../problems/atlas/numerical-mathematics-certified-methods/index.md)
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
- **Inverse problems** — Infer hidden causes or parameters from indirect noisy observations with regularization and identifiability analysis.
  - [Regularize and Audit an Inverse Problem](../recipe-regularized-inverse-problems.md)
  - [Models Before Answers: A First Encounter with Applied Mathematics](../models-before-answers.md)
  - [Applied Modeling: From Mechanisms to Decisions](#/courses/atlas-applied-modeling-standard)
  - [Mathematical Modelling: Models, Evidence and Failure Boundaries](#/books/applied-modeling-proof-reference)
  - [Can the Model Be Trusted? Sensitivity, Identifiability, and Validation](../sensitivity-identifiability-validation.md)
  - [Build, Compute, and Validate a Trustworthy Mathematical Model](../recipe-trustworthy-model-compute-validate.md)
  - [Applied Modeling: Identification, Inversion, and Validation](#/courses/atlas-applied-modeling-advanced)
  - [Applied Modeling: Control, Biological Inversion, and Financial Model Risk](#/courses/atlas-applied-modeling-specialist)

## Capstone

Build a reproducible model-compute-validate report for a scientific or operational system.
