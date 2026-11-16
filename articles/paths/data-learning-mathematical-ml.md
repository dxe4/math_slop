# Data and mathematical learning from evidence to decisions

**Audience.** Learners seeking a prerequisite-light but mathematically rigorous route from data inspection through modern predictive, geometric, probabilistic, and sequential learning.

**Goal.** Build, compute, and audit learning systems while keeping empirical evidence, mathematical theorems, numerical optimization, and deployment claims in separate accountable layers.

**Estimated time.** About 460 hours.

> This is a reading and exploration path across selected resources; it does not supply one primary-book course syllabus. Its existing activities and study identities remain available.

## Stage 1: Data questions before algorithms

**Milestone.** Define an observational unit and prediction horizon, inspect scale and provenance, and identify leakage or split mismatch before fitting.

- **Exploratory data analysis** — Use summaries, visualizations, transformations, and skeptical questions to discover data structure and flaws.
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)
- **Data quality, provenance, and leakage** — Audit observational units, timing, missingness, duplicates, scales, and information paths before fitting a predictor.
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)
- **Descriptive statistics** — Describe distributions and relationships with transparent counts, centers, spreads, shapes, units, and resistant summaries.
  - [Statistics Before Formulas: Variation, Comparison, and Honest Questions](../statistics-first-encounter.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
- **Sampling and study design** — Connect target populations to observed units through sampling frames, assignment mechanisms, measurement plans, and bias audits.
  - [Statistics Before Formulas: Variation, Comparison, and Honest Questions](../statistics-first-encounter.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty](../survey-sampling-design-weights.md)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)

## Stage 2: Mathematical spine for prediction

**Milestone.** Derive least squares, a matrix gradient, a probability risk, and a regularized update with dimensions and assumptions checked.

- **Vectors** — Represent directed quantities, coordinates, combinations, dot products, and geometric dependence.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear Algebra Before the Machinery: Moves, Mixtures, and Directions](../linear-algebra-first-encounter.md)
  - [Why Complex Numbers Are Geometric](../complex-numbers.md)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
  - [Precalculus](#/books/precalculus)
  - [Euclidean Geometry and Trigonometry](#/books/euclidean-geometry-trigonometry)
  - [Motion Before Mechanics: Geometry, Vectors and Rates](#/courses/atlas-physics-models-entry)
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
- **Inner-product spaces** — Equip real or complex vector spaces with length, angle, orthogonality, adjoints, and orthonormal coordinates.
  - [Linear Algebra as Transformation](#/courses/atlas-linear-transformations)
  - [Linear algebra II](#/courses/atlas-linear-algebra-standard)
  - [From Least Squares to Fourier: Geometry in Function Space](../hilbert-fourier-geometry.md)
  - [Transport the Metric Before Projecting](../../apps/atlas/index.html#/labs?lab=visual-lab-metric-projection)
  - [Hilbert space and projection](../functional-analysis-hilbert-space-projection.md)
  - [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced)
- **Multivariable calculus** — Generalize differentiation and integration to functions, surfaces, and regions in many dimensions.
  - [Surface Curvature Studio](../../apps/atlas/index.html#/labs?lab=visual-lab-parametric-surfaces)
  - [Choose and Verify a Vector Calculus Theorem](../recipe-vector-calculus-theorem-audit.md)
  - [Shape Operator and Minimal-Surface Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-shape-operator-surfaces)
  - [Analysis and Linear Algebra Core Practice](../../problems/atlas/analysis-core-practice/index.md)
  - [Differential Geometry of Curves and Surfaces](#/books/differential-geometry-curves-surfaces)
- **Probability distributions** — Use discrete and continuous distribution families to encode different random mechanisms.
  - [Entropy, Codes, and the Price of Noise](../entropy-codes-noise.md)
  - [From Counting to Temperature: Entropy and the Partition Function](../entropy-partition-function.md)
  - [Measure and Lebesgue Integration: Size, Exceptions, and Safe Limits — Overview](#/courses/atlas-measure-lebesgue-integration)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
- **Statistical inference** — Estimate parameters, quantify uncertainty, test hypotheses, and distinguish procedures from conclusions.
  - [Audit a Compartmental Epidemic Model](../recipe-epidemic-model-audit.md)
  - [Statistics I: data and inference](#/courses/atlas-statistics-data-decisions)
  - [Principles of Statistical Inference: Procedures, Guarantees, and Limits](#/books/principles-statistical-inference)
  - [A Trustworthy Statistical Workflow: From Question to Stress Test](../recipe-trustworthy-statistical-workflow.md)
  - [Statistical Computing by Simulation and Resampling](#/courses/atlas-simulation-resampling-code)
  - [Bayesian Inference Laboratory: Updating and Prediction](../../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference)
  - [Probability and Statistics Core Practice](../../problems/atlas/probstat-core-practice/index.md)
  - [Exact Randomization: All Six Assignments](../../apps/atlas/index.html#/labs?lab=visual-lab-exact-randomization)
  - [Statistics with R: From Data to Inference](#/books/statistics-with-r)
  - [Regression and Generalised Linear Models](#/books/regression-and-generalised-linear-models)
  - [Checkpoints for Uncertainty, Design and Prediction](../recipe-model-audit-foundations-checkpoints.md)
  - [Statistical Experiments, Processes, and Bayesian Decisions](#/courses/atlas-probability-statistics-advanced)
  - [Probability, Inference, and Decisions](#/courses/atlas-probability-statistics-core)
  - [Stochastic Integration, Diffusions, and Inference Validation](#/courses/atlas-probability-statistics-specialist)
  - [Research Frontiers: A Two-Paper Seminar and Reproduction Project](#/courses/atlas-research-frontiers-advanced)
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

## Stage 3: Supervised learning and computation

**Milestone.** Implement and validate a train-only fitting pipeline, backpropagate one network exactly, and separate optimization error from generalization evidence.

- **Statistical learning** — Analyze prediction, empirical risk, model selection, regularization, kernels, and generalization.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)
- **Supervised risk and model selection** — Connect loss, population risk, empirical risk, validation, hyperparameter selection, and the target population of a predictive claim.
  - [Data, Patterns, and Prediction: A First Encounter](../data-prediction-first-encounter.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
  - [From Rows to Predictions: A First Data Course](#/courses/atlas-data-prediction-entry)
- **Regularization and kernel methods** — Control fitted sensitivity with penalties and positive-semidefinite kernels while separating numerical stability from generalization.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Recipe: Build and Audit a Trustworthy Predictive Model](../recipe-trustworthy-predictive-model.md)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Kernels and Gaussian Processes](#/books/kernels-and-gaussian-processes)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
- **Optimization for learning** — Train models using stochastic gradients, momentum, regularization, constraints, and modern first-order methods.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Regularization & Kernel Learning Observatory](../../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)
- **Neural networks** — Compose parameterized nonlinear maps and study representation, backpropagation, training, and inductive bias.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
- **Computational graphs and backpropagation** — Differentiate composed array programs by reverse accumulation with explicit shapes, saved values, and numerical checks.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning](#/books/optimization-backprop-from-scratch)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)

## Stage 4: Structured probability and data geometry

**Milestone.** Condition a finite Gaussian law, read independences from a graph, audit an embedding, and solve a transport coupling with exact marginals.

- **Gaussian processes** — Place probability distributions over functions using kernels for flexible Bayesian prediction and uncertainty.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Kernels and Gaussian Processes](#/books/kernels-and-gaussian-processes)
- **Gaussian-process conditioning and computation** — Condition finite Gaussian laws induced by kernels and compute posterior means and covariances with explicit noise and stability assumptions.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Kernels and Gaussian Processes](#/books/kernels-and-gaussian-processes)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)
- **Probabilistic graphical models** — Represent conditional independence and structured distributions with directed or undirected graphs.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Probabilistic Graphical Models](#/books/probabilistic-graphical-models)
- **Inference in probabilistic graphical models** — Use factorization and conditional independence for exact or approximate inference while distinguishing graphs from causal diagrams.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs](#/books/structured-probabilistic-learning)
  - [Probabilistic Graphical Models](#/books/probabilistic-graphical-models)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)
- **Manifold learning** — Recover low-dimensional geometric structure from high-dimensional samples using neighborhoods and spectra.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Geometry from Samples: Manifolds, Neighborhood Graphs, and Optimal Transport](../data-geometry-transport.md)
- **Neighborhood graphs and data embeddings** — Construct local graphs, Laplacians, and spectral or geodesic embeddings while auditing sampling, scale, connectivity, and nonuniqueness.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Geometry from Samples: Manifolds, Neighborhood Graphs, and Optimal Transport](../data-geometry-transport.md)
- **Optimal transport** — Compare and move probability mass optimally using couplings, Wasserstein geometry, and convex duality.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Geometry from Samples: Manifolds, Neighborhood Graphs, and Optimal Transport](../data-geometry-transport.md)
- **Wasserstein distance and couplings** — Compare distributions by optimizing transport couplings with exact marginal constraints, dual bounds, and regularized computation.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Geometry from Samples: Manifolds, Neighborhood Graphs, and Optimal Transport](../data-geometry-transport.md)

## Stage 5: Sequential decisions and learning limits

**Milestone.** Solve a discounted Bellman equation and state a generalization or regret guarantee with its sampling, capacity, coverage, and horizon hypotheses.

- **Markov decision processes** — Model sequential control with states, actions, transitions, rewards, policies, and Bellman operators under explicit Markov and horizon assumptions.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Decisions over Time: Markov Decision Processes and Reinforcement Learning](../mdp-reinforcement-learning.md)
- **Reinforcement learning** — Learn sequential decisions from reward using Markov processes, dynamic programming, and exploration.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Decisions over Time: Markov Decision Processes and Reinforcement Learning](../mdp-reinforcement-learning.md)
- **Exploration, bandits, and sequential regret** — Balance information and reward in online decisions using stochastic bandits, confidence, coverage, and regret.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Decisions over Time: Markov Decision Processes and Reinforcement Learning](../mdp-reinforcement-learning.md)
- **Learning theory** — Prove when learning generalizes using capacity, concentration, online regret, and computational constraints.
  - [Generalization: Why Fitting Data Is Not Learning](../generalization-capacity.md)
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
- **Capacity, concentration, and PAC guarantees** — Relate finite samples to uniform generalization through concentration inequalities, VC dimension, Rademacher complexity, and quantified confidence.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Auditable Learning: Optimization, Generalization, and Identification](#/courses/atlas-data-learning-advanced)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)
- **Online learning and regret** — Evaluate sequential prediction against comparators using adversarial or stochastic regret and first-order update rules.
  - [Mathematics for Machine Learning: Structure, Uncertainty, and Generalization](#/courses/atlas-mathematics-for-machine-learning)
  - [Statistical Learning: Risk, Capacity, and Generalization](#/books/statistical-learning-generalization)
  - [Decisions over Time: Markov Decision Processes and Reinforcement Learning](../mdp-reinforcement-learning.md)
  - [Learning Guarantees and Sparse Inference: Identification Before Certification](#/courses/atlas-data-learning-specialist)

## Capstone

Build a dependency-free, reproducible predictive or sequential case study with a data contract, train-only computation, baseline, uncertainty or regret statement, accessibility-ready numerical alternative, shift and causal-scope audit, and a report separating theorem, computation, simulation, and empirical claim.
