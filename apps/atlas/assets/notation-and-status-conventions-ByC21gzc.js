var e=`---
parent_id: book-optimization-backprop-from-scratch
matter_id: notation-and-status-conventions
title: "Notation, Status Labels, and Computational Conventions"
license: CC BY-SA 4.0
---

# Notation, Status Labels, and Computational Conventions

This guide fixes defaults so that a compact formula remains auditable. A chapter may override a convention, but it must say so locally. Mathematical type, array shape, axis meaning, and empirical role are all part of notation.

## Scalars, vectors, matrices, and batches

Scalars use lower-case italic letters such as $a$, $x$, and $\\lambda$. Individual vectors are columns: $x\\in \\mathbb{R}^d$. Matrices use upper-case letters: $A\\in \\mathbb{R}^{m\\times d}$. The transpose is $A^{\\top}$, the identity is $I$, and an all-ones vector of context-determined length is $1$.

A data matrix stores observations as rows. Thus $X\\in \\mathbb{R}^{n\\times d}$ means $n$ cases and $d$ features, with row $x_{i}^{\\top}$. A dense map with $d$ inputs and $m$ outputs has $W\\in \\mathbb{R}^{m\\times d}$ and bias $b\\in \\mathbb{R}^m$. One case maps to $Wx+b$; a row batch maps to $XW^{\\top}+1b^{\\top}\\in \\mathbb{R}^{n\\times m}$.

Shape agreement is necessary, not sufficient. Axes also have semantics and units. Two arrays of shape $n\\times d$ cannot be interchanged merely because the dimensions match. Examples name whether rows are people, time windows, devices, or simulated trajectories, and whether columns are measurements, engineered features, logits, or parameters.

The Euclidean inner product is $x^{\\top}y$; $\\lVert x\\rVert_{2}=(x^{\\top}x)^{\\frac{1}{2}}$. The matrix Frobenius inner product is $\\langle A,B\\rangle _{F}=\\operatorname{tr}(A^{\\top}B)$, with norm $\\lVert A\\rVert_{F}$. An un-subscripted norm is used only when the choice is local and unambiguous. Operator norms state their underlying vector norms when needed.

## Functions and derivatives

A function declaration $f\\colon \\mathbb{R}^d\\to \\mathbb{R}^m$ fixes its domain and codomain. $Df(x)$ denotes the derivative at $x$ as a linear map. In standard coordinates, $J_{f}(x)$ is its $m\\times d$ Jacobian. A Jacobian-vector product is $J_{f}(x)v$; a vector-Jacobian product is written $u^{\\top}J_{f}(x)$ or equivalently as the transpose action $J_{f}(x)^{\\top}u$ when a column result is convenient.

For scalar $F\\colon \\mathbb{R}^d\\to \\mathbb{R}$, $\\nabla F(x)$ is the Euclidean gradient satisfying $dF=\\nabla F(x)^{\\top} dx$. If another inner product defines the gradient, the metric is named. The Hessian is $\\nabla ^{2}F(x)$ where the second derivative exists. For a matrix variable, the Frobenius convention is

$dF=\\operatorname{tr}((\\nabla _{X} F)^{\\top} dX)$.

Forward-mode tangents use a dot or an explicit name such as \`dot_x\`. Reverse-mode adjoints use a bar or a name such as \`bar_x\`; source text favors explicit ASCII names when typography could obscure the distinction. An adjoint is accumulated over every downstream path. Assignment and addition are therefore mathematically different operations in a reverse pass.

A subgradient of a convex function $F$ at $x$ is a vector $g$ such that $F(y)\\ge F(x)+g^{\\top}(y-x)$ for every $y$. It is not called “the gradient” when differentiability fails. Directional derivatives state whether the direction is normalized and whether a one-sided limit is used.

## Layers, parameters, and losses

Layer index $\\ell$ increases from input to output. A common convention is

$Z^{\\ell }=A^{\\ell -1}(W^{\\ell })^{\\top}+1(b^{\\ell })^{\\top}$,

$A^{\\ell }=\\phi _\\ell (Z^{\\ell })$.

The batch axis is first. Parameter collections are written $\\theta$; a flattened parameter vector is used only when coordinate operations genuinely require it. $f_\\theta (x)$ is a parameterized predictor, while $F(\\theta )$ usually denotes an optimization objective. Parameter equality and functional equality are not interchangeable because symmetries can make distinct parameters represent the same function.

Per-case losses are $\\ell (y,a)$. An empirical objective on a named index set $S$ is

$\\widehat{R}_{S}(\\theta )=(1/\\lvert S\\rvert) \\sum_{i\\in S} \\ell (y_{i},f_\\theta (x_{i}))$

unless another weighting or reduction is stated. A population risk under a named law $P$ is $R_{P}(\\theta )=\\mathbb{E}_{P}[\\ell (Y,f_\\theta (X))]$. The hat and the subscript are not decorative: one is a finite realized average, while the other is an expectation under an assumption-bearing probability law.

Logits are unconstrained scores. A binary sigmoid or multiclass softmax converts logits into normalized numbers under a model interpretation. A decision rule then maps scores or probabilities to actions using thresholds or costs. Score, probability claim, and action must remain separate.

## Data and randomness

Training, validation, and test index sets are written $S_{\\mathrm{train}}$, $S_{\\mathrm{val}}$, and $S_{\\mathrm{test}}$. A preprocessing transform fitted on training rows has state $\\widehat{\\eta}_{\\mathrm{train}}$; evaluation applies that fixed state. A symbol carrying \`test\` must not influence fitting, model selection, stopping, or threshold choice.

Random variables use upper-case letters and realizations lower-case letters where this improves clarity. $\\mathbb{E}_{P}$ and $\\operatorname{Var}_{P}$ name the law. Conditional expectations state the conditioning information, often a filtration $F_{t}$ representing the history before stochastic update $t$. A random seed is not a probability model; it is one ingredient in reproducing a pseudorandom execution.

Mini-batch $B_{t}$ means the sampled indices at step $t$. Any claim that its gradient is unbiased must name the sampling design and the objective whose gradient is targeted. Weighted sampling requires explicit importance weights when the target objective differs from the sampling law.

## Optimization conventions

Iterates are $\\theta _{t}$; step sizes are $\\alpha _{t}$ or $\\eta _{t}$. A gradient step is $\\theta _{t+1}=\\theta _{t}-\\alpha _{t} g_{t}$, where $g_{t}$ may be an exact gradient, stochastic estimator, subgradient, or preconditioned direction. The chapter names which one.

For constrained problems, $C$ is a feasible set, $\\Pi _{C}$ a projection in the named norm, and $\\operatorname{prox}_{\\alpha g}$ a proximal map. $L$ commonly denotes a gradient-Lipschitz constant and $\\mu$ a strong-convexity constant; neither is assumed positive without a statement. $\\kappa =L/\\mu$ is a condition ratio only when both constants describe the same geometry.

Stopping reports distinguish objective change, gradient or mapping norm, step norm, feasibility residual, stationarity residual, dual gap, and budget exhaustion. A small value of one is not silently substituted for another.

## Reduction and numerical conventions

Every reduction states $\\sum$, $\\operatorname{mean}$, or weighted mean and identifies its axes. Broadcasted operations name the repeated axis. Backpropagation through broadcasting sums adjoints over precisely those repeated positions.

Exact arithmetic statements are separated from floating implementations. $fl(x)$ denotes a rounded floating result when error analysis needs it. Stable formulas may be algebraically equivalent to unstable ones; for example log-sum-exp subtracts a maximum before exponentiation. Numerical equality tests use declared absolute and relative tolerances and include scale-aware residuals.

Reference computations report data type, initialization, seed or random-stream state, batch order, stopping rule, and failure status. NaN and infinity are outcomes to surface, not values to silently discard. A deterministic replay is evidence about one execution path, not evidence of distributional robustness.

## Status labels

A **definition** fixes terminology. A **theorem**, **proposition**, or **lemma** is a proved mathematical claim under stated hypotheses. A **derivation** follows algebraic or calculus transformations. A **heuristic** suggests behavior but does not replace proof. A **finite verification** checks declared cases. A **simulation** studies samples from a declared mechanism. An **empirical observation** summarizes measured behavior. A **failure boundary** states where a conclusion no longer follows.

Manuscript status is separate from the kind of mathematical claim. The shared labels are Outline, Draft and Reviewed. Outline means some chapter or support requirements remain incomplete; Draft means the complete minimum teaching support is present; Reviewed additionally requires independent review by a named reviewer other than the author.

This book currently remains Outline while the older chapter exercise help is completed. No independent review is claimed. A correct local derivation and a successful computation do not themselves establish a reviewed manuscript.

## Claim ladder

The book uses a claim ladder to prevent accidental promotion of evidence:

1. the formula is well-typed and shape-consistent;
2. the hand derivation is correct under its assumptions;
3. the implementation agrees on exact or tolerance-controlled fixtures;
4. the optimizer exhibits a stated finite-run behavior;
5. a convergence theorem applies under verified hypotheses;
6. finite-sample performance is measured under a valid split;
7. a population or deployment claim follows under named sampling and shift assumptions;
8. a probability, causal, fairness, safety, or decision claim receives its additional evidence.

Passing a higher-looking software test does not skip a missing mathematical rung. Conversely, a theorem about an idealized algorithm does not certify the actual program. The reader should always report the highest rung directly supported and the next missing bridge.
`;export{e as default};