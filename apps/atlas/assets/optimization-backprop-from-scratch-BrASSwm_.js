var e=`---
id: book-optimization-backprop-from-scratch
title: "Optimization and Backpropagation from Scratch: Mathematical Foundations for Auditable Learning"
level: advanced-undergraduate
estimated_minutes: 3850
license: CC BY-SA 4.0
---

# Optimization and Backpropagation from Scratch

## What this book is for

A modern learning system combines a data contract, array representation, differentiable program, scalar objective, optimizer, regularization or constraints, numerical implementation, and evaluation protocol. This L2–L3 book derives those layers from Year 1 calculus and linear algebra and keeps their guarantees separate.

The goal is not to imitate a software framework. It is to make the mathematics inspectable enough that a learner can:

- define the observational unit, prediction time, loss, baseline, and split before fitting;
- trace vector, matrix, batch, and parameter shapes without accidental broadcasting;
- understand a derivative as a linear map and derive gradients from differentials;
- compute JVPs and VJPs without forming enormous Jacobians;
- prove reverse-mode branch accumulation and implement a scalar reference engine;
- apply smoothness, convexity, duality, and spectral arguments to optimization;
- derive stochastic descent, momentum, batch-noise, and adaptive-coordinate dynamics;
- distinguish proper probability scores, class-weighted targets, and decision costs;
- audit activation and adjoint propagation through initialized depth;
- distinguish problem conditioning, algorithmic stability, and statistical generalization;
- derive ridge, projections, proximal steps, and soft thresholding;
- recognize parameter symmetries and compare learned functions in declared geometries;
- verify computation while refusing generalization, causal, or decision claims that the evidence does not support.

Every algorithm is presented first as mathematics or dependency-free pseudocode. Optimized tensor libraries are useful engineering tools, but their names are not explanations.

## Audience, prerequisites, and repair routes

The intended reader has completed first-year calculus and linear algebra. [Calculus](/calculus/) and [Linear Algebra: Structure and Proof](/atlas/#/item/book-linear-algebra-structure-proofs) provide that preparation. For earlier algebra and function repair, use [Precalculus](/atlas/#/item/book-precalculus); [Euclidean Geometry and Trigonometry](/atlas/#/item/book-euclidean-geometry-trigonometry) supplies coordinate and trigonometric preparation. No previous machine-learning course is required.

Chapters 1–9 form Part I (L2), ending with reverse accumulation and derivative interpretation. Chapters 10–21 form Part II (L3), developing proof-based optimisation and learning geometry. Projects and reference solutions are back matter.

Before Chapter 5, a reader should be comfortable with:

- multiplying small matrices and checking shapes;
- dot products, Euclidean norms, and a projection onto a line;
- one-variable derivatives and the chain rule;
- finite sums and averages.

The [Mathematics for Machine Learning course](#/item/course-mathematics-for-machine-learning) provides a broader prerequisite-light route. Readers wanting full theorem development for vector spaces, spectral theory, and factorizations should use [Linear Algebra: Structure and Proof](#/item/book-linear-algebra-structure-proofs). Probability limits, inference, and population guarantees belong in the probability and statistical-learning volumes. This book uses expectations only where needed to define empirical or stochastic objectives and always states that boundary.

### Prerequisite diagnostic

Try these without software:

1. If $W$ is $4\\times 3$ and $x$ has length 3, what is the shape of $Wx$?
2. Differentiate $(\\frac{1}{2})(wx-y)^{2}$ with respect to $w$.
3. Explain why a feature measured after prediction time is invalid even if it improves test accuracy.
4. Find the minimizer of $(c-1)^{2}+(c-5)^{2}$.
5. State one reason a small training loss does not prove small future loss.

Answers: $4\\times 1$; $(wx-y)x$; it leaks future information; $c=3$; and finite fitting data can differ from the target population, among other reasons. If Questions 1–2 are unfamiliar, start with Chapters 1–2 and the linked course. If Question 3 or 5 is unfamiliar, do not skip Chapter 1: the task contract is part of the mathematics.

## Notation and computation conventions

- Individual vectors are columns: $x\\in \\mathbb{R}^d$.
- A batch stores observations as rows: $X\\in \\mathbb{R}^{n\\times d}$.
- Dense-layer weights use $W\\in \\mathbb{R}^{m\\times d}$, so one case maps as $Wx+b$ and a batch as $XW^{\\top}+1b^{\\top}$.
- $Df(x)$ is the derivative as a linear map; $J_{f}(x)$ is its standard-coordinate Jacobian.
- For scalar $F$, $\\nabla F$ is the Euclidean gradient unless another inner product is named.
- Matrix gradients use the Frobenius convention $dF=\\operatorname{tr}((\\nabla _{X} F)^{\\top}dX)$.
- A JVP is $Jv$; a VJP is $u^{\\top}J$.
- $\\widehat{R}_{S}$ is empirical risk on named rows $S$; $R_{P}$ is expectation under named law $P$.
- Every reduction states sum, mean, weights, and denominator behavior.
- Exact algebra, floating computation, empirical observation, and theorem are labeled separately.

Shapes are executable specifications, but shape agreement does not establish semantic correctness. Units, timing, axis meaning, and observation scope remain part of every array.

## Part and dependency architecture

The book has two parts; the thematic groups below describe the progression within them. An arrow means “read before,” not merely “appears earlier.”

\`\`\`text
learning contract → arrays/maps → projection → empirical risk
                         ↓                         ↓
                   derivatives → forward/reverse AD → verification
                         ↓                         ↓
          smooth descent → convex duality → stochastic dynamics
                         ↓              ↓          ↓
                   conditioning → regularization → stable losses
                                                    ↓
                                      initialized networks → model geometry
                                                               ↓
                                          auditable pipelines and case studies
\`\`\`

### Part I (L2), chapters 1–9 — Foundations and automatic differentiation

1. **Learning Contracts, Losses, and Baselines** — defines units, targets, timing, losses, empirical risk, train/validation/test roles, leakage, baselines, and claim ladders.
2. **Arrays, Linear Maps, and Shape Contracts** — builds the application-level vector and matrix language, rank, projection, norms, batches, and reference shape checks.
3. **Projection, Least Squares, and Data Geometry** — develops projection existence and uniqueness, residual certificates, coefficient nonuniqueness, centering, QR/SVD consequences, weighted metrics, conditioning, leverage, and claim boundaries without duplicating the linear-algebra proof volume.
4. **Expectation, Empirical Risk, and Sampling Boundaries** — distinguishes deterministic averages from named laws, derives conditional and weighted objectives, proves uniform and importance-corrected mini-batch identities, and marks dependence, shift, and population claims as probability boundaries.

### Differentiation as program transformation

5. **Derivatives as Linear Maps: Differentials, Gradients, and Shapes** — develops differentiability, JVPs, gradients under different metrics, chain-rule proof, Hessians, Taylor bounds, and nondifferentiable boundaries.
6. **Matrix Calculus, Jacobian Products, and Batch Reductions** — derives matrix-product pullbacks, broadcast reductions, least-squares derivatives, ridge curvature, stable log-sum-exp, and JVP/VJP duality.
7. **Computational Graphs and Forward Mode** — formalizes DAG traces, proves tangent propagation by topological induction, derives dual-number and array JVP rules, compares differentiation orientations, and audits branches, mutation, randomness, and higher derivatives.
8. **Reverse-Mode Automatic Differentiation and Backpropagation** — proves branch accumulation, specifies a scalar engine, derives dense-network backpropagation, and audits mutation, randomness, control flow, memory, and gradient checks.
9. **Nonsmooth Programs and Gradient Verification** — separates classical derivatives, directional derivatives, and convex subgradients; derives finite-difference error; limits complex-step claims; and combines exact, directional, JVP/VJP, state, and active-set tests.

### Part II (L3), chapters 10–21 — Optimisation and learning systems

10. **Smooth Optimization, Descent Guarantees, and Step Sizes** — proves the descent step, convex and strongly convex certificates, exact quadratic dynamics, backtracking, nonconvex stationarity rates, and stopping diagnostics.
11. **Convexity, Optimality, and Dual Certificates** — develops convex sets and epigraphs, first-order and normal-cone optimality, weak/strong duality boundaries, KKT residuals, Fenchel conjugates, constrained quadratics, ridge duality, and primal–dual gaps.
12. **Conditioning, Scaling, and Preconditioned Learning** — separates conditioning, residual, stability, and generalization; derives spectral effects of scaling, ridge, preconditioning, and stable loss arithmetic.
13. **Stochastic Gradients, Momentum, and Adaptive Coordinates** — derives conditional noise decompositions, smooth expected descent and noise floors, batch and step schedules, exact noisy-quadratic dynamics, momentum stability, adaptive coordinate units, clipping bias, and reproducible stopping records.
14. **Constraints, Proximal Steps, and Regularization** — derives projections, ridge filters, proximal descent, soft thresholding, coordinate dependence, implicit bias, and leakage-safe hyperparameter selection.

### Losses, networks and model geometry

15. **Stable Regression and Classification Losses** — derives mean, median, quantile, Huber, proper log and Brier targets; stable binary and multiclass logit paths; margin boundaries; class-weight transformations; cost thresholds; and loss verification ledgers.
16. **Multilayer Networks and Signal Initialization** — proves shaped batch backpropagation, derives fan-in/fan-out second-moment heuristics and their assumptions, tracks forward/backward signal products through depth, exposes symmetry failure, and specifies a multi-seed initialization audit.
17. **Normalization, Residual Paths, and Architectural Assumptions** — derives normalization axes and pullbacks, train/deployment state, residual Jacobian bounds, stochastic masking, equivariance boundaries, and architecture audit ledgers.
18. **Parameter Symmetry and the Geometry of Learned Functions** — develops equivalence classes, softmax shifts, unit permutations, homogeneous scaling, quotient ideas, pullback metrics, Gauss–Newton/Fisher boundaries, and coordinate-dependent flatness.
19. **Curvature, Gauss–Newton, and Implicit Differentiation** — derives Hessian-vector products, Newton and Gauss–Newton models, matrix-free linear solves, hypergradients, and residual-controlled implicit derivatives.

### Auditable learning systems

20. **Training Pipelines and Reproducible Computation** — assembles immutable data flow, fitted-state boundaries, deterministic replay, optimizer and random state, typed failures, checkpoints, provenance, and accessible numerical reporting.
21. **Case Studies and Failure Boundaries** — compares small linear, logistic, and network models under nonidentifiability, scale, leakage, imbalance, shift, signal failure, and objective mismatch.
**Project appendix — Projects, Solutions, Notation, and Reference Back Matter** — consolidates audit contracts and verification tables with cumulative exercises, complete solutions, and capstone specifications.

## What is currently available

The twenty-one chapters form a connected spine rather than isolated essays:

1. declare the learning task and finite evidence;
2. encode cases as shaped mathematical maps;
3. project finite targets into attainable model spaces while distinguishing fits from coefficients;
4. state the finite or probabilistic weighting law behind a risk and batch gradient;
5. interpret derivatives as local linear maps;
6. derive batch and matrix pullbacks;
7. propagate JVPs through explicit computational graphs;
8. execute reverse accumulation and test forward/reverse duality;
9. separate smooth derivatives from trace conventions at kinks;
10. use verified derivatives under smooth step-size guarantees;
11. certify convex constrained solutions with feasibility, KKT, and dual-gap evidence;
12. diagnose conditioning and coordinate scale;
13. control stochastic noise, momentum state, and adaptive units under explicit schedules;
14. impose penalties or constraints with explicit geometry;
15. choose numerically stable losses while preserving their probability or decision semantics;
16. audit forward and backward signal propagation before training a deep network;
17. distinguish normalization axes and deployment state while tracing residual paths;
18. compare parameters through the functions they represent;
19. compute structured curvature and residual-controlled implicit sensitivities;
20. assemble immutable pipeline state, replay evidence, and typed failures;
21. stress the whole system with small exact failure studies;

The project appendix synthesises the contracts through cumulative projects and reference tables.

Every chapter has worked derivations, failure boundaries, exercises, and full solutions.

## Code and evidence contract

Reference algorithms use only arrays, loops, arithmetic, and deterministic test fixtures. A production implementation may substitute optimized kernels if it preserves:

- declared shapes, axes, units, and reductions;
- finite input and output checks;
- graph identity and branch accumulation;
- immutable or correctly saved forward values;
- deterministic seed and random-stream records;
- comparison against hand-worked or exact tiny cases;
- directional, coordinate, and JVP/VJP derivative tests;
- tolerance, stopping, and failure reports;
- train-only preprocessing and frozen evaluation.

A passing gradient check supports the derivative of the executed program at tested traces. It does not establish that the program encodes the intended learning task, that the finite sample represents deployment, that probabilities are calibrated, or that an association is causal.

## Exercises and projects

The cumulative programme includes:

- a leakage-resistant baseline and split ledger;
- a shape-checked affine reference engine;
- forward/reverse duality and gradient verification;
- a conditioned quadratic with preconditioning;
- ridge versus proximal sparsity under unit changes;
- symmetry-equivalent networks compared in function space;
- an end-to-end tiny learning system with immutable evaluation.

## Scope boundaries and sibling volumes

This volume owns the mathematical and computational route from array programs through derivatives and optimization to auditable backpropagation. It does not attempt to replace:

- foundational linear algebra and spectral proofs;
- measure-theoretic probability, concentration, or statistical inference;
- full generalization theory and capacity bounds;
- architecture-specific surveys of convolution, recurrence, attention, or graph networks;
- causal inference, fairness, privacy, robustness certification, or production systems engineering.

The [statistical learning reference](#/item/book-statistical-learning-generalization) supplies population-risk and capacity arguments. [Structured Probabilistic Learning](#/item/book-structured-probabilistic-learning) treats kernels, Gaussian conditioning, and graphical models. The [regularization observatory](#/labs?lab=visual-lab-regularization-kernel-learning) provides an accessible exactly solved convex contrast to nonconvex training.
`;export{e as default};