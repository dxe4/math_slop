var e=`---
parent_id: book-optimization-backprop-from-scratch
matter_id: glossary-theorem-algorithm-finder
title: "Glossary and Theorem–Algorithm Finder"
license: CC BY-SA 4.0
---

# Glossary and Theorem–Algorithm Finder

This is a retrieval aid, not a substitute for reading hypotheses in context. Chapter numbers follow chapter order. Before applying a theorem or algorithm, return to its chapter and verify domains, shapes, smoothness, sampling design, numerical assumptions, and claim boundary.

## Glossary

### A

**Activation.** A function applied between affine maps in a network. Its derivative, range, smoothness, and scaling affect signal and adjoint propagation. Chapter 16.

**Adjoint.** In reverse mode, the sensitivity of the final scalar output to an intermediate value. Adjoint contributions add across every downstream dependency path. Chapter 8.

**Adaptive-coordinate method.** An update that rescales coordinates using a state built from past gradients. Its behavior depends on units, decay constants, bias correction, and numerical stabilizers; it is not automatically invariant to reparameterization. Chapter 13.

**Automatic differentiation (AD).** Exact chain-rule differentiation of the executed elementary program, up to floating arithmetic. AD is neither symbolic simplification nor finite differencing. Chapters 7–9.

### B

**Backpropagation.** Reverse-mode differentiation specialized to layered computations. It computes vector-Jacobian products from outputs toward parameters while accumulating shared paths. Chapters 8 and 16.

**Baseline.** A simple declared predictor used to determine whether complexity adds value. A baseline is part of the learning contract, not an embarrassing preliminary. Chapters 1 and 21.

**Batch.** A collection of cases processed together. This book stores cases as rows and requires every batch reduction to state whether it is a sum, mean, or weighted mean. Chapters 2, 4, and 6.

**Brier score.** Squared error applied to probability predictions. Under the appropriate expectation it is a proper scoring rule for the conditional event probability. Chapter 15.

### C

**Calibration.** Agreement between predicted probability levels and outcome frequencies under a named target distribution and conditioning scheme. A stable softmax calculation does not establish calibration. Chapters 15 and 21.

**Chain rule.** The derivative of a composition is the composition of derivative linear maps in forward order; reverse mode applies their adjoints in reverse topological order. Chapters 5, 7, and 8.

**Claim ladder.** The ordered separation of typing, derivation, implementation verification, optimizer behavior, statistical evaluation, and broader deployment or causal claims. Chapters 1, 9, and 20.

**Condition number.** A ratio describing sensitivity or anisotropy relative to specified input and output geometries. For a positive-definite quadratic it is the largest-to-smallest eigenvalue ratio. It is not the same as a residual, instability measurement, or generalization gap. Chapter 12.

**Conjugate function.** For convex $f$, the function $f^{\\star}(y)=\\sup_{x}(y^{\\top}x-f(x))$. Conjugates expose dual objectives and computable primal-dual gaps. Chapter 11.

**Convex function.** A function lying below every chord on its convex domain. First-order and subgradient inequalities yield global optimality certificates unavailable for arbitrary nonconvex objectives. Chapters 10–11.

**Cost-sensitive decision.** An action chosen by comparing conditional expected costs. Changing the decision threshold is conceptually different from reweighting the training loss, which can change the probability target. Chapter 15.

### D

**Data leakage.** Use of information outside the allowed training-time information boundary, including future features, test-guided selection, and preprocessing fitted across splits. Chapters 1, 20, and 21.

**Descent lemma.** If $\\nabla F$ is $L$-Lipschitz, then $F(y)\\le F(x)+\\nabla F(x)^{\\top}(y-x)+(L/2)\\lVert y-x\\rVert^{2}$. Substituting a gradient step gives a certified decrease for suitable step sizes. Chapter 10.

**Differential.** The first-order linear change $dF$ induced by input changes. Differentials make shapes and pullbacks explicit and prevent many matrix-calculus memorization errors. Chapters 5–6.

**Directional derivative.** A one-dimensional rate of change along a named direction. Its existence in every direction does not by itself imply differentiability as a linear map. Chapter 9.

**Duality gap.** The difference between feasible primal and dual objective values under the chapter’s sign convention. Weak duality makes it a nonnegative optimality certificate; a small gap is meaningful only with feasibility and correct problem construction. Chapter 11.

### E

**Empirical risk.** A finite realized average of declared per-case losses on a named data set. It is not automatically a population expectation. Chapters 1 and 4.

**Epoch.** A pass through a finite training collection under a specified ordering and batching rule. Epoch count is not a hardware-independent amount of optimization progress. Chapters 13 and 20.

**Equivalence class of parameters.** All parameter settings representing the same function under a declared relation. Unit permutations, softmax shifts, and homogeneous rescalings are common sources. Chapter 18.

### F

**Feature scaling.** A coordinate transformation applied to inputs. It can change numerical conditioning and the meaning of coordinate-dependent penalties. The transform must be fitted only on training data. Chapters 12, 14, and 20.

**Finite difference.** A derivative approximation using nearby function values. Truncation error falls as the step shrinks while floating cancellation eventually grows, producing a scale-dependent useful range. Chapter 9.

**Forward mode.** Automatic differentiation that propagates tangent values with the program. It efficiently computes JVPs, especially when there are few input directions. Chapter 7.

### G

**Gauss–Newton matrix.** For a least-squares residual map, the positive-semidefinite matrix $J^{\\top}J$ formed by dropping residual-weighted second-derivative terms from the exact Hessian. Its definition and adequacy depend on loss structure. Chapter 19.

**Generalization.** Performance beyond the observed fitting sample under a specified target distribution or deployment process. Small empirical risk and optimizer convergence do not alone establish it. Chapters 1, 4, and 21.

**Gradient.** The vector representing a derivative under a named inner product. It is metric-dependent even though the underlying derivative linear map is not. Chapter 5.

**Gradient clipping.** Modification of an update when its norm or coordinates exceed a threshold. It may stabilize computation, but generally biases a stochastic gradient estimator and changes the algorithm. Chapter 13.

### H

**Hessian.** The derivative of the gradient in Euclidean coordinates, when it exists. Hessian-vector products can be computed without materializing the whole matrix. Chapters 5 and 19.

**Huber loss.** A regression loss that is quadratic near zero residual and linear in the tails. Its scale parameter changes the transition between the regimes. Chapter 15.

**Hypergradient.** A derivative of an outer objective through an inner solution or training process. Truncated unrolling and implicit differentiation have different approximation and regularity requirements. Chapter 19.

### I

**Implicit differentiation.** Differentiation of a solution defined by an equation, using a derivative linear solve. It requires local regularity and an invertible or appropriately controlled system; solve residuals belong in the certificate. Chapter 19.

**Importance weighting.** Correction by a target-to-sampling weight ratio when observations or indices are sampled under a different law. It can restore an expectation identity while increasing variance. Chapter 4.

**Initialization.** The distributional or deterministic rule that selects initial parameters. Fan-in and fan-out variance calculations are heuristics under explicit independence and moment assumptions, not universal guarantees. Chapter 16.

### J

**Jacobian.** The coordinate matrix of a derivative from a vector input to a vector output. Large Jacobians are usually accessed through products rather than formed explicitly. Chapters 5–7.

**JVP.** A Jacobian-vector product $Jv$, representing the tangent response to an input direction. Chapter 7.

### K

**Karush–Kuhn–Tucker residuals.** Computable measures of primal feasibility, dual feasibility, complementarity, and stationarity for a constrained problem. Their sufficiency for global optimality relies on convexity and the relevant qualification. Chapter 11.

### L

**Learning contract.** The declaration of observational unit, available information, target, prediction time, loss, action, split, baseline, and admissible claim. Chapter 1.

**Learning rate.** The step-size coefficient in an update. Its safe scale depends on smoothness, parameterization, batch reduction, conditioning, and optimizer state. Chapters 10, 12, and 13.

**Logit.** An unconstrained score passed to a sigmoid or softmax. Stable losses should operate on logits without separately forming extreme probabilities. Chapter 15.

**Log-sum-exp.** $\\log\\left(\\sum_{j} \\exp\\left(z_{j}\\right)\\right)$, evaluated stably by subtracting $\\max_{j} z_{j}$ before exponentiation. Chapter 15.

### M

**Mini-batch gradient.** A gradient computed from a sampled subset or sequence of cases. Unbiasedness is a statement under a declared sampling design and reduction. Chapters 4 and 13.

**Momentum.** An update with persistent velocity state. Stability depends jointly on curvature, step size, damping convention, and initialization. Chapter 13.

### N

**Normalization.** A transformation that centers or rescales activations using per-case, per-feature, batch, or running statistics. The axis and train/deployment state are part of its mathematical definition. Chapter 17.

**Normal cone.** The set of directions supporting a convex feasible set at a point. It turns constrained optimality into the inclusion $0\\in \\partial F(x)+N_{C}(x)$. Chapter 11.

### O

**Observational unit.** The entity treated as one case for splitting and evaluation. Dependence or shared identity between units can invalidate a row-wise split. Chapters 1 and 20.

**Overfitting.** Adaptation to finite training information that does not transfer to the intended target process. It cannot be diagnosed solely from training loss. Chapters 1 and 21.

### P

**Preconditioner.** A coordinate or metric transformation intended to reduce anisotropy in an optimization problem. Its effect must be analyzed with the transformed gradient and units. Chapter 12.

**Projection.** A nearest point in a set under a named metric. Orthogonal projection onto a linear model space yields least squares; projection onto a convex feasible set yields a constrained update. Chapters 3 and 14.

**Proper scoring rule.** A loss whose expected value is minimized by reporting the true conditional distribution under stated conditions. Properness does not imply calibration after finite optimization or distribution shift. Chapter 15.

**Proximal map.** $\\operatorname{prox}_{\\alpha g}(v)=\\operatorname{argmin}_{x}[g(x)+(1/(2\\alpha ))\\lVert x-v\\rVert^{2}]$. It handles some nonsmooth penalties through an exact local subproblem. Chapter 14.

**Pullback.** Reverse transport of an output covector through a derivative to an input covector. VJPs implement pullbacks. Chapters 6 and 8.

### R

**Regularization.** A penalty, constraint, prior-like device, or algorithmic bias intended to control a solution. Different forms are not interchangeable, and coordinate-dependent penalties require declared units. Chapter 14.

**Residual connection.** A map $x\\mapsto x+F(x)$ whose derivative includes an identity path. This can aid signal propagation but does not guarantee trainability or accuracy. Chapter 17.

**Reverse mode.** Automatic differentiation that propagates adjoints from outputs backward. It is efficient for a scalar objective with many inputs. Chapter 8.

### S

**Softmax.** The map $p_{j}=\\exp\\left(z_{j}\\right)/\\sum_{k} \\exp\\left(z_{k}\\right)$, evaluated with a shared logit shift for stability. Adding the same constant to all logits leaves probabilities unchanged. Chapters 15 and 18.

**Stochastic gradient.** A random update direction whose conditional expectation may equal a target gradient under specified sampling assumptions. Its variance and dependence affect convergence behavior. Chapter 13.

**Strong convexity.** A quadratic lower-curvature bound that can imply uniqueness and linear convergence with other smoothness assumptions. It is geometry-dependent. Chapter 10.

**Subgradient.** A global affine lower-support slope for a convex function. The subdifferential is set-valued at a nonsmooth point. Chapters 9 and 14.

### T

**Tape.** A recorded computational graph or execution trace used by reverse AD. Mutation, aliasing, data-dependent branches, and randomness determine what must be saved. Chapter 8.

**Test set.** Data reserved for final evaluation after fitting and selection. Repeated use converts it into selection information. Chapters 1 and 20.

### V

**Validation set.** Data used for model, hyperparameter, threshold, or stopping choices. It is part of training the overall procedure even if gradient updates do not use it. Chapters 1 and 20.

**VJP.** A vector-Jacobian product $u^{\\top}J$; reverse mode composes VJPs without forming full Jacobians. Chapters 6 and 8.

### W

**Weight decay.** A parameter shrinkage update. It coincides with an $L^{2}$ penalty only for particular optimizer and parameterization conventions. Chapters 13–14.

## Theorem finder

| Need | Result and indispensable hypotheses | Chapter |
|---|---|---|
| certify least-squares fitted values | orthogonal projection onto a finite-dimensional linear model space; coefficients may remain nonunique | 3 |
| show a sampled batch gradient targets a full finite gradient | uniform sampling with the matching average, or a declared nonuniform design with valid inverse-probability weights; differentiability or valid interchange for the finite sum | 4 |
| replace a derivative by a gradient vector | chosen inner product and differentiability as a linear map | 5 |
| propagate tangents through a program | differentiable local primitives along a fixed executed trace, correct topological order | 7 |
| accumulate reverse derivatives | scalar target or seeded output covector, saved local state, all dependency paths accumulated | 8 |
| interpret a finite-difference check | smoothness near the test point, scale-aware step and tolerance, fixed branches and random state | 9 |
| guarantee one gradient step decreases $F$ | $L$-Lipschitz gradient and step in the theorem’s range | 10 |
| turn stationarity into global optimality | convex objective and convex feasible set; constrained form includes the normal cone | 11 |
| use a KKT point as a certificate | convexity plus the stated constraint qualification for necessity/strong duality; feasibility and residual conventions verified | 11 |
| predict quadratic gradient-descent rate | symmetric positive-definite Hessian and a stable step; rate measured in the specified norm | 10 and 12 |
| obtain expected stochastic descent | conditional unbiasedness or named bias bound, smoothness, controlled second moment, and an adapted update | 13 |
| justify projected-gradient feasibility | nonempty closed convex feasible set and projection in the named Hilbert geometry | 14 |
| obtain soft thresholding | scalar or separable $L^{1}$ proximal subproblem with the stated scale | 14 |
| identify the conditional mean, median, or quantile | expected squared, absolute, or pinball loss respectively, with existence and possible nonuniqueness handled | 15 |
| call log or Brier loss proper | prediction lies in its valid probability domain and expectation is under the named conditional outcome law | 15 |
| derive variance-preserving initialization heuristic | declared zero-mean/independence approximations, activation moments, width and fan convention | 16 |
| form a Gauss–Newton system | differentiable residual map and least-squares-type objective; positive semidefiniteness follows from $J^{\\top}J$ | 19 |
| differentiate an implicit solution | differentiable defining equation and locally invertible derivative with controlled linear-solve residual | 19 |

## Algorithm finder and verification obligations

| Algorithm | Required inputs and state | Minimum checks | Chapter |
|---|---|---|---|
| affine batch map | $X,W,b$, declared row-batch convention | output shape, hand case, broadcast axis | 2 |
| QR/SVD least squares | design and target, rank/tolerance convention | orthogonality residual, reconstruction, fitted-value invariance | 3 |
| forward-mode JVP | primal inputs and tangent seeds | primal replay, hand JVP, linearity in seed | 7 |
| reverse-mode VJP | recorded graph and output cotangent | branch accumulation, forward/reverse dot test, mutation audit | 8 |
| central-difference check | deterministic scalar function, point, direction or coordinate | step sweep, relative/absolute residual, kink and scale diagnosis | 9 |
| gradient descent | objective/gradient, initial point, step rule | finite values, descent or stated exception, gradient/step ledger | 10 |
| backtracking | descent direction, shrink and acceptance constants | termination assumptions, accepted inequality, evaluation count | 10 |
| primal-dual certificate | primal/dual candidates and sign convention | both feasibilities, complementarity, stationarity, gap | 11 |
| preconditioned gradient step | positive-definite metric or transform | units, symmetry/positivity, transformed residual | 12 |
| SGD | sampling stream, reduction, schedule, initial state | conditional target identity, seed/order record, noise and stopping ledger | 13 |
| momentum | velocity convention and damping | zero/declared initial state, quadratic stability test, exact update ordering | 13 |
| projected gradient | projector and feasible set | feasibility after every step, projector idempotence on fixtures | 14 |
| proximal gradient | smooth gradient and proximal operator | objective/mapping residual, hand proximal cases, scale convention | 14 |
| stable sigmoid/log loss | logits and labels | extreme logits, finite outputs, derivative identity, reduction | 15 |
| stable softmax cross-entropy | logit rows and class targets | shift invariance, row normalization, extreme logits, gradient row sums | 15 |
| dense-network backprop | saved activations/preactivations and loss seed | every shape, batch reductions, JVP/VJP test, selected finite differences | 16 |
| normalization layer | axis, fitted or batch statistics, stabilizer, train/eval mode | constant inputs, small variance, frozen-state replay, derivative test | 17 |
| Hessian-vector product | objective/gradient and direction | symmetry test where valid, finite-difference directional comparison | 19 |
| conjugate-gradient inner solve | linear operator, right side, tolerance | residual history, curvature failure, scale-aware termination | 19 |
| reproducible training pipeline | immutable split identities, preprocessing state, seeds, configs | provenance hash, replay, leakage assertions, typed failure record | 20 |

The minimum checks are a floor. They establish local computational evidence only. Statistical validity, deployment performance, and responsible use remain separate claims.

`;export{e as default};