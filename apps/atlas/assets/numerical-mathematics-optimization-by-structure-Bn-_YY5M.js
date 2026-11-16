var e=`---
id: book-numerical-mathematics-optimization-by-structure
title: "Convex Optimisation: Structure, Duality and Algorithms"
level: graduate
license: CC BY-SA 4.0
production_state: complete-draft
status: draft
---

# Convex Optimisation: Structure, Duality and Algorithms {#section-1-convex-optimisation-structure-duality-and-algorithms}

This L4 continuation of [Linear Programming and Optimisation](linear-programming-optimisation.md) develops formulations, convex sets/functions, separation and conjugacy, duality and sensitivity, KKT conditions, smooth/proximal methods, barriers and nonsmooth constrained methods. The stable book identity is unchanged. [Automatic differentiation](optimization-backprop-from-scratch/reverse-mode-adjoint-backprop.md) has its primary home in the ML mathematics book.

The convex route has twelve chapters. Each has at least three developed examples and ten exercises with two staged hints and full solutions. Applications include [regularised regression, SVM and LASSO](numerical-mathematics-optimization-by-structure/regularised-regression-svm-lasso.md), and [solvers and modelling languages](numerical-mathematics-optimization-by-structure/solvers-modelling-languages.md).

Integer, mixed-integer and nonconvex global methods now belong to [Discrete and Global Optimisation](discrete-global-optimisation.md). Native aliases preserve all earlier chapter identities, and the original files remain intact. The certificate route there links the full earlier verified-software and proof-log developments. Historical supporting matter in this book retains its earlier source context rather than defining the new primary chapter sequence.

The worked problem below remains an exact convex orientation. The [reader guide](numerical-mathematics-optimization-by-structure/front-matter/reader-guide.md) states the complete chapter route and the LP, calculus, linear-algebra and arithmetic prerequisites.

<a id="section-9-problem-contract"></a>
## Problem contract {#section-11-problem-contract}

Write every problem as

\\(\\operatorname{minimize} f(x) \\quad\\text{subject to}\\quad x \\in C\\),

then record:

- variable domain, dimensions, units, and integrality;
- objective direction and scaling;
- equality and inequality conventions;
- whether infeasibility is possible and how it is reported;
- requested output: point, value, bound, certificate, or all four;
- assumptions behind any global claim.

Replacing a hard constraint by a penalty changes the mathematical problem at finite penalty. Rounding a continuous optimum need not preserve feasibility. Minimizing a surrogate does not prove improvement in an external goal.

<a id="section-26-a-first-exact-example"></a>
## A first exact example {#section-28-a-first-exact-example}

Minimize \\(f(x,y)=(x-1)^{2}+4(y+2)^{2}\\). The Hessian is \\(\\operatorname{diag}(2,8)\\), positive definite, so \\(f\\) is strictly convex. Setting the gradient \\((2(x-1),8(y+2))\\) to zero gives \\((1,-2)\\). Convexity makes this stationary point the unique global minimizer.

Add constraint \\(x+y\\ge 1\\). The unconstrained minimizer has sum \\(-1\\), so it is infeasible. The constrained solution lies on the boundary. Writing \\(y=1-x\\) yields

\\(\\phi(x)=(x-1)^{2}+4(3-x)^{2}\\).

Then \\(\\phi'(x)=2(x-1)+8(x-3)=10x-26\\), so \\(x=13/5\\), \\(y=-8/5\\). A multiplier calculation gives the same point and a dual certificate once signs are fixed. This tiny example already separates unconstrained stationarity, feasibility, active constraints, and global convexity.

<a id="section-36-claim-labels-and-notation"></a>
## Claim labels and notation {#section-38-claim-labels-and-notation}

- \\(f^{\\star}\\) denotes the optimal value only when existence is established; otherwise use \\(\\inf f\\).
- \\(x^{\\star}\\) denotes an optimizer only after feasibility and attainment are known.
- \\(g(x)\\le 0\\) is the default inequality convention.
- A “gap” states whether it is absolute, relative, primal–dual, or integrality.
- A local minimum, stationary point, and global minimum are never synonyms.
- A bound computed in floating point is called certified only when rounding and solver assumptions support that word.

<a id="section-45-study-method"></a>
## Study method {#section-47-study-method}

For each algorithm, prove one invariant, work one exact example, construct one failure, and interpret one stopping certificate. Draw small branch-and-bound trees by hand. Verify derivatives directionally. Scale variables before comparing tolerances. The purpose is to know why an algorithm may stop, not merely how to call one.
`;export{e as default};