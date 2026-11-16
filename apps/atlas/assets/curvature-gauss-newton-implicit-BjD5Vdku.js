var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: curvature-gauss-newton-implicit
title: "Curvature, Gauss–Newton, and Implicit Differentiation"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Curvature, Gauss–Newton, and Implicit Differentiation

## Purpose and prerequisites

First derivatives answer how an objective changes locally. Curvature answers how that first-order answer itself changes, which directions a quadratic model trusts, and how a fitted solution responds when another variable changes. This chapter develops Hessian-vector products, Newton and Gauss–Newton models, matrix-free linear solves, and implicit derivatives of optima and fixed points.

The prerequisites are matrix calculus, smooth descent, conditioning, and parameter-versus-function geometry. The chapter makes no claim that second-order information removes nonconvexity or data uncertainty. A precisely computed Hessian is curvature of a named finite objective in named coordinates. It is not automatically a population guarantee, an intrinsic geometry, or a causal sensitivity.

## The Hessian as a linear map

For twice differentiable $F\\colon \\mathbb{R}^d\\to \\mathbb{R}$, the Hessian at $\\theta$ is the derivative of the gradient:

$H_{F}(\\theta )v = D(\\nabla F)(\\theta )[v]$.

This action is a **Hessian-vector product** (HVP). Many algorithms need $Hv$, not all $d^{2}$ entries of $H$. The directional identity

$Hv = d/dt \\nabla F(\\theta +tv) |_{t=0}$

suggests three computation routes. Pearlmutter, “Fast Exact Multiplication by the Hessian,” derives an exact, efficient procedure for this product; see the bibliography.

1. differentiate the gradient program in direction $v$;
2. apply reverse mode to the scalar $\\nabla F(\\theta )^{\\top}v$ while treating $v$ as constant;
3. use the centered finite difference
   $(\\nabla F(\\theta +hv)-\\nabla F(\\theta -hv))/(2h)$
   as a verification path, not the primary exact algorithm.

For a smooth scalar program, routes 1 and 2 agree in exact arithmetic. Route 3 has truncation and roundoff error and must use a scale-aware range of $h$.

### Worked HVP without forming a Hessian

Let

$F(\\theta )=(\\frac{1}{2})\\lVert A\\theta -b\\rVert^{2}+(\\lambda /2)\\lVert \\theta \\rVert^{2}$.

Then

$\\nabla F=A^{\\top}(A\\theta -b)+\\lambda \\theta$

and

$Hv=A^{\\top}(Av)+\\lambda v$.

The action needs one multiplication by $A$, one by $A^{\\top}$, and vector operations. Forming $A^{\\top}A$ can cost more storage, square the condition number in a solve, and lose sparsity. The algebraic equality does not make the two computational paths equally reliable.

### Symmetry as a test

If $F$ is twice continuously differentiable near $\\theta$, then $H$ is symmetric. Hence for fixed directions $u,v$,

$u^{\\top}(Hv)=v^{\\top}(Hu)$.

This bilinear identity is a strong implementation check. Failure can reveal an incorrect pullback, mutation between derivative passes, stochastic state, or evaluation at different points. Passing it does not prove every Hessian entry correct, so combine it with exact small cases and finite differences.

## Quadratic models and Newton steps

The second-order local model at $\\theta$ is

$m(p)=F(\\theta )+g^{\\top}p+(\\frac{1}{2})p^{\\top}Hp$, $g=\\nabla F(\\theta )$.

If $H$ is positive definite, its unique minimizer solves

$Hp=-g$.

The direction is a descent direction because

$g^{\\top}p=-g^{\\top}H^{-1}g<0$

whenever $g\\ne 0$. Newton's method uses this local model, then usually globalizes it with a line search or trust region.

If $H$ is singular, indefinite, poorly scaled, or inaccurate away from the current point, an undamped Newton step can be undefined or ascend. Adding damping gives

$(H+\\lambda I)p=-g$.

For $\\lambda > -\\lambda_{\\min}(H)$, the matrix is positive definite. Damping changes both stability and the step; it is not merely an implementation detail.

### Exact scalar contrast

For $F(x)=x^{4}/4-x^{2}/2$,

$g=x^{3}-x$, $H=3x^{2}-1$.

At $x=0.2$, $g=-0.192$ and $H=-0.88$. The Newton step solves $Hp=-g$, giving $p\\approx -0.218$, even though $g p>0$: it is an ascent direction. Negative curvature made the local quadratic unbounded below. A line search cannot turn an ascent direction into a standard descent step without changing or reversing it; the curvature model needs modification.

## Least-squares curvature and Gauss–Newton

Let $r\\colon \\mathbb{R}^d\\to \\mathbb{R}^n$ be a residual map and

$F(\\theta )=(\\frac{1}{2})\\lVert r(\\theta )\\rVert^{2}$.

With residual Jacobian $J$,

$\\nabla F=J^{\\top}r$.

Differentiating gives the exact Hessian

$H=J^{\\top}J+\\sum_{i=1}^n r_{i} H_{r_{i}}$.

The **Gauss–Newton matrix** is

$G=J^{\\top}J$.

It is positive semidefinite because $v^{\\top}Gv=\\lVert Jv\\rVert^{2}$. It is exact when each residual is affine. It also matches the Hessian at a zero-residual solution, and it can be a useful approximation when residual-weighted second derivatives are small. Those are conditions to check, not slogans.

The Gauss–Newton step minimizes the linearized-residual model

$\\min_{p} (\\frac{1}{2})\\lVert r+Jp\\rVert^{2}$,

whose normal equation is

$J^{\\top}Jp=-J^{\\top}r$.

A numerically stable implementation may solve the least-squares problem using QR or another factorization rather than explicitly forming $J^{\\top}J$. In large problems, matrix-free products are

$Gv=J^{\\top}(Jv)$,

computed as a JVP followed by a VJP.

### Nonlinear residual example

Let $r(\\theta )=\\theta ^{2}-y$. Then

$F=(\\frac{1}{2})(\\theta ^{2}-y)^{2}$,

$g=2\\theta (\\theta ^{2}-y)$,

$H=4\\theta ^{2}+2(\\theta ^{2}-y)=6\\theta ^{2}-2y$,

while $G=(2\\theta )^{2}=4\\theta ^{2}$. At a solution $\\theta ^{2}=y$, they agree. At $\\theta =0$ with $y>0$, $G=0$ but $H=-2y$: Gauss–Newton sees no first-order residual sensitivity and misses negative curvature. The example states exactly why “positive semidefinite” can mean “safe local least-squares model” rather than “complete curvature.”

## Generalized Gauss–Newton

Suppose an output map $a(\\theta )\\in \\mathbb{R}^k$ feeds a twice differentiable convex loss $\\ell (a)$. Then

$F(\\theta )=\\ell (a(\\theta ))$.

Its Hessian decomposes as

$H_{F}=J_{a}^{\\top} H_\\ell J_{a} + \\sum_{j} (\\partial \\ell /\\partial a_{j})H_{a_{j}}$.

The generalized Gauss–Newton matrix keeps

$G=J_{a}^{\\top} H_\\ell J_{a}$,

which is positive semidefinite when $H_\\ell$ is. For binary logistic loss in logit $a$, $H_\\ell =p(1-p)$. With linear logits $a=X\\theta$, the second term vanishes and the exact Hessian is

$H=X^{\\top} W X$, $W=\\operatorname{diag}(p_{i}(1-p_{i}))$

up to the declared sum or mean reduction. Near saturated probabilities, weights approach zero, so curvature can become nearly singular even when feature columns are independent. Ridge adds $\\lambda I$, improving invertibility in the stated coordinates.

For a nonlinear network, generalized Gauss–Newton omits output-curvature terms. It captures first-order changes of outputs under a convex output discrepancy. It is not identical to the ordinary Hessian and need not encode every descent-relevant direction.

## Matrix-free linear solves

Conjugate gradients (CG) solves $Ap=b$ using products $Av$ when $A$ is symmetric positive definite in exact arithmetic. It builds iterates in Krylov spaces

$K_{k}(A,b)=\\operatorname{span}\\{b,Ab,\\ldots,A^{k-1}b\\}$.

Applied to damped Gauss–Newton, $A=G+\\lambda I$ is positive definite for $\\lambda >0$. A preconditioner $M$ should make the transformed system better conditioned while remaining cheap and positive definite. Stopping must be based on the linear residual

$r_{\\mathrm{lin}}=b-Ap$,

scaled against a declared norm. A small training gradient is a different residual.

For indefinite Hessians, ordinary CG assumptions fail. A curvature check $v^{\\top}Hv\\le 0$ detects nonpositive curvature along a searched direction. Trust-region CG variants can stop at that boundary; silently continuing an SPD solver invalidates its guarantee.

### Error from an inexact solve

If $A$ is positive definite with smallest eigenvalue at least $\\mu >0$, and approximate $\\widetilde{p}$ has residual $r=b-A\\widetilde{p}$, then exact $p=A^{-1}b$ satisfies

$p-\\widetilde{p}=A^{-1}r$

and therefore

$\\lVert p-\\widetilde{p}\\rVert\\le \\lVert r\\rVert/\\mu$.

This turns a computational residual into a step-error certificate when a trustworthy lower bound on $\\mu$ exists. Without such a bound, a tiny residual can coexist with a large forward error in an ill-conditioned system.

## Implicit differentiation of an optimum

Let training parameters $w\\in \\mathbb{R}^d$ minimize an inner objective $L(w,\\lambda )$ depending on hyperparameter $\\lambda \\in \\mathbb{R}^q$. Suppose a local solution $w^{\\star}(\\lambda )$ satisfies

$g(w,\\lambda )=\\nabla _{w} L(w,\\lambda )=0$.

Assume $g$ is continuously differentiable and the inner Hessian

$H=\\partial g/\\partial w=\\nabla ^{2}_{ww}L$

is invertible at the point. The implicit function theorem gives a local differentiable branch with

$H (dw^{\\star}/d\\lambda ) = -B$,

where

$B=\\partial g/\\partial \\lambda =\\nabla ^{2}_{w\\lambda }L$

has shape $d\\times q$. Thus

$dw^{\\star}/d\\lambda =-H^{-1}B$.

For an outer objective $V(w^{\\star},\\lambda )$, the total derivative is

$dV/d\\lambda = \\partial V/\\partial \\lambda - (\\partial V/\\partial w) H^{-1} B$,

using row-gradient notation in the displayed expression. Rather than solve once per hyperparameter, solve the adjoint system

$H^{\\top} a=(\\partial V/\\partial w)^{\\top}$

and compute

$dV/d\\lambda =\\partial V/\\partial \\lambda -a^{\\top}B$.

For a scalar training objective with symmetric $H$, $H^{\\top}=H$, but writing the transpose prevents an unjustified symmetry assumption for general fixed-point systems.

### Ridge hypergradient worked exactly

Let

$L(w,\\lambda )=(\\frac{1}{2})(w-y)^{2}+(\\lambda /2)w^{2}$, $\\lambda >-1$.

Stationarity gives

$g=(1+\\lambda )w-y=0$, so $w^{\\star}=y/(1+\\lambda )$.

Implicit differentiation uses $H=1+\\lambda$ and $B=w^{\\star}$, giving

$dw^{\\star}/d\\lambda =-w^{\\star}/(1+\\lambda )=-y/(1+\\lambda )^{2}$,

matching direct differentiation. If the outer objective is $V=(\\frac{1}{2})(w^{\\star}-t)^{2}$, then

$dV/d\\lambda =(w^{\\star}-t)(-y/(1+\\lambda )^{2})$.

This derivative concerns the declared finite inner and outer objectives. Choosing $\\lambda$ using a test objective would still be leakage, however accurate the derivative.

## Inexact optima and residual-controlled hypergradients

In practice $\\widetilde{w}$ rarely satisfies $g=0$ exactly. Applying an implicit formula there differentiates the solution of a nearby stationarity equation only heuristically unless error is controlled. Two residuals matter:

- the stationarity residual $\\lVert g(\\widetilde{w},\\lambda )\\rVert$;
- the adjoint-solve residual $\\lVert H^{\\top}a-v\\rVert$, where $v=(\\partial V/\\partial w)^{\\top}$.

If the relevant Hessians are uniformly positive definite with eigenvalue at least $\\mu$, then local parameter error can often be bounded by a multiple of $\\lVert g\\rVert/\\mu$; exact assumptions depend on strong convexity and regularity. For the adjoint solve, if $\\widetilde{a}$ has residual $r_{a}=v-H^{\\top}\\widetilde{a}$, then

$\\lVert a-\\widetilde{a}\\rVert\\le \\lVert r_{a}\\rVert/\\mu$

and the induced hypergradient error obeys

$\\lVert (a-\\widetilde{a})^{\\top}B\\rVert\\le (\\lVert r_{a}\\rVert/\\mu )\\lVert B\\rVert$.

Reporting only a hypergradient value without these residuals hides whether optimization or linear algebra dominates its error.

## Fixed-point differentiation

Some algorithms define a state by

$w^{\\star}=T(w^{\\star},\\lambda )$.

Let $A=\\partial T/\\partial w$ and $C=\\partial T/\\partial \\lambda$. Differentiating gives

$(I-A)dw^{\\star}/d\\lambda =C$.

Invertibility of $I-A$ is essential. A sufficient local condition is $\\lVert A\\rVert<1$, which also makes the fixed point locally contractive. Near eigenvalue one, both convergence and implicit sensitivity can be poor.

Unrolling $K$ iterations differentiates the actual finite algorithm. Implicit differentiation targets the limiting fixed point under its assumptions. They answer different questions when $K$ is finite, the initial state depends on $\\lambda$, convergence is incomplete, or the update contains discrete branches.

## Equality-constrained solutions

For an inner problem

$\\min_{w} L(w,\\lambda )$ subject to $c(w,\\lambda )=0$,

introduce multiplier $\\nu$ and KKT residual

$K(w,\\nu ,\\lambda )=[\\nabla _{w} L+J_{c}^{\\top}\\nu ; c]$.

Differentiate $K=0$ with respect to $\\lambda$. The sensitivity solve uses the bordered KKT Jacobian

$\\begin{bmatrix}
\\nabla ^{2}_{ww}\\mathcal{L} & J_{c}^{\\top} \\\\
J_{c} & 0
\\end{bmatrix}
\\begin{bmatrix}
dw^{\\star}/d\\lambda \\\\
d\\nu^{\\star}/d\\lambda
\\end{bmatrix}
=-\\partial K/\\partial \\lambda$

with Lagrangian $\\mathcal{L}=L+\\nu ^{\\top}c$. Invertibility requires constraint qualification and suitable second-order conditions. Redundant constraints, changing active sets, complementarity boundaries, or nonunique solutions can make the derivative undefined or branch-dependent.

## Curvature does not erase geometry or statistics

- Hessians change under parameter re-scaling; at stationary points they transform by congruence.
- Symmetry directions can make Hessians and Gauss–Newton matrices singular without changing the represented function.
- Fisher, generalized Gauss–Newton, and empirical Hessian coincide only under specified model, loss, expectation, and regularity conventions.
- A well-conditioned local solve does not establish that the objective reflects deployment cost.
- Hypergradients optimize the outer data supplied to them; they do not license reuse of a final test set.
- Nonsmooth activations and discrete preprocessing require trace-aware or generalized analysis. A software HVP follows a recorded branch.

## A matrix-free second-order recipe

\`\`\`text
inputs: objective F, point theta, gradient g, HVP(v), damping lambda
define A(v) = HVP(v) + lambda * v
check several fixed u,v: dot(u,A(v)) approximately dot(v,A(u))
run a positive-definite Krylov solve for A(p) = -g
record every linear residual and any nonpositive-curvature event
verify predicted change: pred = -dot(g,p) - 0.5*dot(p,HVP(p))
evaluate actual change only on the declared fitting objective
accept, shorten, or reject according to a predeclared globalization rule
retain point, damping, solve tolerance, iterations, and floating type
\`\`\`

For generalized Gauss–Newton, implement $HVP(v)$ as a JVP through outputs, multiplication by output-loss curvature, and a VJP. Never materialize a large Jacobian merely to imitate the formula.

## Exercises

1. Derive the HVP for ridge least squares and explain why it avoids $A^{\\top}A$.
2. Prove the bilinear symmetry identity for a continuously twice differentiable scalar objective.
3. For $F(x)=x^{4}/4-x^{2}/2$, compute the Newton direction at $x=2$ and determine whether it is descent.
4. Prove that the Newton direction is descent when $H$ is positive definite and $g\\ne 0$.
5. Derive the exact Hessian decomposition for nonlinear least squares.
6. For $r(\\theta )=\\theta ^{2}-y$, compare exact and Gauss–Newton curvature at $\\theta =0$ and at a zero-residual solution.
7. Show that $J^{\\top}WJ$ is positive semidefinite when $W$ is positive semidefinite.
8. Derive the Hessian of mean binary logistic loss with linear logits, including the factor $1/n$.
9. Explain why saturated logistic probabilities can create ill-conditioning even for full-column-rank $X$.
10. Prove the linear-solve error bound from a residual when $A$ has eigenvalues at least $\\mu$.
11. Compute the exact ridge inner solution and its implicit derivative in the worked scalar example.
12. Let $L(w,\\lambda )=(\\frac{1}{2})(w-\\lambda )^{2}+(\\frac{1}{2})w^{2}$. Find $w^{\\star}(\\lambda )$ and $dw^{\\star}/d\\lambda$ directly and implicitly.
13. Derive the adjoint hypergradient formula and check all matrix shapes for vector $\\lambda$.
14. Bound the hypergradient error caused by an adjoint residual $r_{a}$.
15. Differentiate the fixed point $w^{\\star}=\\tanh\\left(aw^{\\star}+\\lambda \\right)$ and state the local invertibility condition.
16. Compare what unrolling $K$ iterations differentiates with what the implicit formula differentiates.
17. Write the KKT sensitivity matrix for minimizing $(\\frac{1}{2})\\lVert w\\rVert^{2}$ subject to $a^{\\top}w=\\lambda$, where $a\\ne 0$, and solve for $dw^{\\star}/d\\lambda$.
18. Specify a four-way verification suite for an HVP implementation that contains stochastic or mutable state.

## Full solutions

1. $\\nabla F=A^{\\top}(A\\theta -b)+\\lambda \\theta$; differentiating in direction $v$ gives $Hv=A^{\\top}(Av)+\\lambda v$. It uses operator applications and never stores the dense product $A^{\\top}A$, preserving structure and avoiding a normal-equation formation step.
2. Continuous second partials imply $H=H^{\\top}$. Therefore $u^{\\top}Hv=(u^{\\top}Hv)^{\\top}=v^{\\top}H^{\\top}u=v^{\\top}Hu$. Equivalently, differentiate the two-parameter scalar $F(\\theta +su+tv)$ in either order.
3. At $x=2$, $g=8-2=6$ and $H=12-1=11$, so $p=-\\frac{6}{11}$. Since $gp=-\\frac{36}{11}<0$, it is a descent direction. This local fact does not require the full step to decrease without a globalization argument.
4. From $Hp=-g$, $p=-H^{-1}g$. Hence $g^{\\top}p=-g^{\\top}H^{-1}g<0$ because $H^{-1}$ is positive definite and $g$ is nonzero.
5. $F=(\\frac{1}{2})\\sum_{i} r_{i}^{2}$, so $\\nabla F=\\sum_{i} r_{i}\\nabla r_{i}=J^{\\top}r$. Differentiating each term gives $\\nabla r_{i}\\nabla r_{i}^{\\top}+r_{i}H_{r_{i}}$. Summation yields $J^{\\top}J+\\sum_{i} r_{i}H_{r_{i}}$.
6. Exact curvature is $6\\theta ^{2}-2y$; Gauss–Newton is $4\\theta ^{2}$. At $\\theta =0$, these are $-2y$ and $0$. At $\\theta ^{2}=y$, exact curvature is $6y-2y=4y$, equal to Gauss–Newton.
7. Factor $W=C^{\\top}C$ or use its nonnegative quadratic form. Then $v^{\\top}J^{\\top}WJv=(Jv)^{\\top}W(Jv)\\ge 0$ for every $v$.
8. With $p_{i}=\\operatorname{sigmoid}(x_{i}^{\\top}\\theta )$, the mean-loss gradient is $X^{\\top}(p-y)/n$. Since $dp_{i}/da_{i}=p_{i}(1-p_{i})$, the Hessian is $X^{\\top} \\operatorname{diag}(p_{i}(1-p_{i}))X/n$.
9. Full column rank only guarantees $X^{\\top}X$ is positive definite. Curvature uses weights $p_{i}(1-p_{i})$, which approach zero when logits saturate. If informative rows receive tiny weights, eigenvalues of $X^{\\top}WX$ can approach zero.
10. Exact and approximate solutions obey $A(p-\\widetilde{p})=r$. Thus $p-\\widetilde{p}=A^{-1}r$. For SPD $A$, $\\lVert A^{-1}\\rVert_{2}=1/\\lambda_{\\min}(A)\\le 1/\\mu$, giving the bound.
11. Stationarity $(1+\\lambda )w-y=0$ gives $w^{\\star}=y/(1+\\lambda )$. Here $H=1+\\lambda$ and $B=\\partial g/\\partial \\lambda =w^{\\star}$, so $dw^{\\star}/d\\lambda =-H^{-1}B=-y/(1+\\lambda )^{2}$.
12. Stationarity is $(w-\\lambda )+w=2w-\\lambda =0$, so $w^{\\star}=\\lambda /2$ and the direct derivative is $\\frac{1}{2}$. Implicitly, $H=2$, $B=-1$, and $-H^{-1}B=\\frac{1}{2}$.
13. Let $v=(\\partial V/\\partial w)^{\\top}\\in \\mathbb{R}^d$, $H\\in \\mathbb{R}^{d\\times d}$, and $B\\in \\mathbb{R}^{d\\times q}$. Solve $H^{\\top}a=v$ for $a\\in \\mathbb{R}^d$. Then $a^{\\top}B\\in \\mathbb{R}^{1\\times q}$, and $dV/d\\lambda =\\partial V/\\partial \\lambda -a^{\\top}B$ has the required row shape $1\\times q$.
14. If $r_{a}=v-H^{\\top}\\widetilde{a}$, then $a-\\widetilde{a}=H^{-\\top}r_{a}$. Under $\\sigma_{\\min}(H)\\ge \\mu$, $\\lVert a-\\widetilde{a}\\rVert\\le \\lVert r_{a}\\rVert/\\mu$. Therefore $\\lVert (a-\\widetilde{a})^{\\top}B\\rVert\\le \\lVert r_{a}\\rVert \\lVert B\\rVert/\\mu$ in compatible spectral norms.
15. Differentiate $w=\\tanh\\left(aw+\\lambda \\right)$: $dw/d\\lambda =(1-w^{2})(a dw/d\\lambda +1)$. Hence $dw/d\\lambda =(1-w^{2})/[1-a(1-w^{2})]$. The denominator must be nonzero; the sufficient contraction condition is $\\lvert a\\rvert(1-w^{2})<1$ locally.
16. Unrolling differentiates the exact composition of $K$ update maps, including initialization and every finite-step state. The implicit formula differentiates a local solution or limiting fixed point satisfying its residual equation. They differ with incomplete convergence, initialization dependence, truncation, or branch changes.
17. The KKT equations are $w+\\nu a=0$ and $a^{\\top}w-\\lambda =0$. Their sensitivity system is $[I,a; a^{\\top},0][w';\\nu ']=[0;1]$. Directly, $w^{\\star}=a\\lambda /\\lVert a\\rVert^{2}$, so $dw^{\\star}/d\\lambda =a/\\lVert a\\rVert^{2}$; substitution into the system gives $\\nu '=-1/\\lVert a\\rVert^{2}$.
18. Freeze all random draws and mutable state; compare the HVP to a centered difference of frozen gradients across several $h$; check bilinear symmetry with fixed direction pairs; compare against an explicitly formed Hessian on a tiny deterministic problem; and repeat after serialization/restoration of every state component. Also run an intentionally unfrozen trial to demonstrate that the harness detects stochastic contamination rather than silently widening tolerance.

## Reproducible verification specification

Create three dependency-free fixtures: a ridge quadratic with known $H$, the scalar nonlinear residual above, and a two-parameter logistic problem. For each, compare an explicit Hessian product, directional differentiation of the gradient, and centered finite differences over a logarithmic $h$ grid. Verify bilinear symmetry, predicted-versus-actual quadratic change, damped-CG residual decrease, and the residual-to-forward-error bound using known eigenvalues. For implicit differentiation, compare direct, unrolled, and implicit derivatives in the two scalar examples while varying optimization and linear-solve tolerances independently. Store complete numeric traces rather than plots alone. Every tolerance must combine absolute and relative scale, and every stochastic or mutable input must be frozen. Passing these fixtures certifies agreement on the fixtures only.
`;export{e as default};