var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: convexity-optimality-duality
title: "Convexity, Optimality, and Dual Certificates"
level: advanced-undergraduate
estimated_minutes: 185
license: CC BY-SA 4.0
---

# Convexity, Optimality, and Dual Certificates

## Purpose and prerequisites

Chapter 10 proved that smoothness controls a descent step. This chapter asks a different question: when does a local condition certify global optimality, especially when learning parameters must satisfy constraints? We develop convex sets and functions, subgradient and normal-cone conditions, Lagrangian lower bounds, KKT certificates, Fenchel conjugates, and computable primal–dual gaps.

The chapter assumes shaped vectors, inner products, derivatives as linear maps, and the smooth-descent chapter. It does not claim that every learning problem is convex. Neural-network training generally is not. Convex models remain valuable because their certificates provide exact reference cases, interpretable failure labels, and components inside larger algorithms.

A constrained learning problem has the form

$\\min_{\\theta} f(\\theta)\\quad\\text{subject to}\\quad h_j(\\theta)=0,\\;g_i(\\theta)\\le 0$.

Three questions must remain separate:

1. **Feasibility:** does $\\theta$ satisfy the declared constraints?
2. **Optimality:** among feasible points, is its objective minimal or nearly minimal?
3. **Model validity:** do the objective and constraints represent the intended decision problem?

A zero duality gap can answer the second question under hypotheses. It cannot answer the third.

## Convex sets and feasible interpolation

A set $C\\subseteq \\mathbb{R}^d$ is **convex** when

$(1-t)x+ty\\in C$

for every $x,y\\in C$ and $t\\in [0,1]$. The point is a convex combination: its nonnegative coefficients sum to one.

Examples include affine subspaces, half-spaces $\\{x\\colon a^{\\top}x\\le b\\}$, Euclidean balls, boxes, and the probability simplex

$\\Delta _{d}=\\{p\\in \\mathbb{R}^d\\colon p_{j}\\ge 0, \\sum_{j} p_{j}=1\\}$.

The union of convex sets need not be convex. The set $\\{x\\colon \\lVert x\\rVert_{2}\\ge 1\\}$ is not convex because opposite feasible points have infeasible midpoint zero. Discrete architecture choices and sparsity constraints such as “at most $k$ nonzeros” are usually nonconvex.

Intersections of convex sets are convex. Indeed, if $x,y$ lie in every $C_{a}$, then their convex combination lies in every $C_{a}$, hence in the intersection. This simple fact lets linear equalities, inequalities, norm bounds, and simplex constraints be combined without losing convexity.

### Worked feasibility audit

Let parameters $(w_{1},w_{2})$ satisfy

$w_{1}+w_{2}=1$, $w_{1}\\ge 0$, and $w_{2}\\ge 0$.

The feasible set is the line segment joining $(1,0)$ and $(0,1)$. The equality alone gives an entire affine line; the nonnegativity inequalities cut it to a compact segment. The point $(0.3,0.7)$ is feasible. $(1.2,-0.2)$ satisfies the equality but violates nonnegativity. A solver report saying only “equality residual zero” is not a feasibility certificate.

## Convex functions and epigraphs

A function $f\\colon C\\to \\mathbb{R}$ on a convex domain is **convex** when

$f((1-t)x+ty)\\le (1-t)f(x)+tf(y)$

for all $x,y\\in C$ and $t\\in [0,1]$. Its graph lies below every chord. It is strictly convex when the inequality is strict for distinct points and $0<t<1$.

The **epigraph** is

$\\operatorname{epi}(f)=\\{(x,r)\\colon x\\in C, r\\ge f(x)\\}$.

The function is convex exactly when its epigraph is a convex set. For one direction, take $(x,r_{x}),(y,r_{y})\\in \\operatorname{epi}(f)$. Convexity of $f$ gives

$f((1-t)x+ty)\\le (1-t)f(x)+tf(y)\\le (1-t)r_{x}+tr_{y}$,

so their convex combination remains in the epigraph. Conversely, apply epigraph convexity to $(x,f(x))$ and $(y,f(y))$ to recover the function inequality.

Epigraphs turn objectives into constraints. Minimizing $f(x)$ is equivalent to minimizing $r$ subject to $(x,r)\\in \\operatorname{epi}(f)$. This perspective is useful when an objective is a maximum of several convex losses: introduce $r$ and require each loss to be at most $r$.

### Closure rules used in learning

If $f_{i}$ are convex and $a_{i}\\ge 0$, then $\\sum_{i} a_{i}f_{i}$ is convex. A pointwise maximum of convex functions is convex. If $f$ is convex and $A$ is affine, then $x\\mapsto f(Ax+b)$ is convex. These rules show that empirical averages of convex per-case losses, linear constraints, and convex penalties produce convex programs.

Strict convexity is sufficient, not necessary, for a unique minimizer. The function $f(x)=x^{4}$ is strictly convex and has unique minimizer zero, but its Hessian vanishes at zero. The function $f(x)=\\max\\left(0,x\\right)^{2}$ has a whole half-line of minimizers, despite being convex and differentiable.

## First-order global certificates

If differentiable $f$ is convex on an open convex set, then for every $x,y$,

$f(y)\\ge f(x)+\\nabla f(x)^{\\top}(y-x)$.

This is the supporting-hyperplane inequality. To prove it, define the one-variable convex function

$\\phi (t)=f(x+t(y-x))$.

For $0<t\\le 1$, convexity gives

$\\phi (t)\\le (1-t)\\phi (0)+t\\phi (1)$,

so $[\\phi (t)-\\phi (0)]/t\\le \\phi (1)-\\phi (0)$. Letting $t\\downarrow 0$ yields

$\\nabla f(x)^{\\top}(y-x)\\le f(y)-f(x)$.

If $\\nabla f(x^{\\star})=0$, the inequality gives $f(y)\\ge f(x^{\\star})$ for every $y$; $x^{\\star}$ is globally optimal. Conversely, an unconstrained differentiable local minimizer in an open domain has zero gradient. Thus gradient zero is necessary and sufficient for unconstrained differentiable convex optimization.

For a possibly nonsmooth convex function, $s\\in \\partial f(x)$ means

$f(y)\\ge f(x)+s^{\\top}(y-x)$ for every $y$.

Hence

$x^{\\star}\\text{ minimizes }f \\quad\\Longleftrightarrow\\quad 0\\in \\partial f(x^{\\star})$.

The forward implication follows because the zero vector satisfies the subgradient inequality at a minimizer. The reverse follows immediately from that inequality.

### Strong convexity and an objective-gap bound

A differentiable function is $\\mu$-strongly convex when

$f(y)\\ge f(x)+\\nabla f(x)^{\\top}(y-x)+(\\mu /2)\\lVert y-x\\rVert^{2}$.

For an unconstrained full-space problem, setting $y=x^{\\star}$ directly supplies a lower bound involving distance, not the gradient-based upper bound we want. Instead minimize the right-hand quadratic in $y$ for fixed $x$. Its minimum occurs at $y=x-(1/\\mu )\\nabla f(x)$, giving

$f(x^{\\star})\\ge f(x)-\\lVert \\nabla f(x)\\rVert^{2}/(2\\mu )$.

Therefore

$f(x)-f(x^{\\star})\\le \\lVert \\nabla f(x)\\rVert^{2}/(2\\mu )$.

This is an upper certificate on suboptimality when a valid strong-convexity constant is known. A small gradient without a justified $\\mu$ does not supply this bound.

## Constrained optimality and normal cones

For a closed convex set $C$ and $x\\in C$, define the normal cone

$N_{C}(x)=\\{n\\in \\mathbb{R}^{d}\\colon n^{\\top}(z-x)\\le 0\\text{ for every }z\\in C\\}$.

At an interior point, $N_{C}(x)={0}$. At the boundary, normals point outward. A differentiable convex function $f$ is minimized over $C$ exactly when

$0\\in \\nabla f(x^{\\star})+N_{C}(x^{\\star})$,

or equivalently $-\\nabla f(x^{\\star})\\in N_{C}(x^{\\star})$.

Proof: the normal condition says

$[-\\nabla f(x^{\\star})]^{\\top}(z-x^{\\star})\\le 0$,

so $\\nabla f(x^{\\star})^{\\top}(z-x^{\\star})\\ge 0$ for all feasible $z$. The supporting-hyperplane inequality then gives $f(z)\\ge f(x^{\\star})$. Conversely, if $x^{\\star}$ minimizes differentiable convex $f$ over convex $C$, the directional derivative along every feasible segment from $x^{\\star}$ is nonnegative, which is the same normal inequality.

### Worked boundary optimum

Minimize $(\\frac{1}{2})(x-3)^{2}$ subject to $x\\le 1$. The unconstrained minimizer 3 is infeasible, so $x^{\\star}=1$. Here $\\nabla f(1)=-2$. The normal cone of $(-\\infty ,1]$ at 1 is $[0,\\infty )$, and $-\\nabla f(1)=2\\in N_{C}(1)$. A nonzero gradient is therefore compatible with constrained optimality: the feasible set blocks the downhill direction.

## Lagrangians and weak duality

Consider the convex-form primal problem

$p^{\\star} = inf_{x} f(x)$

subject to $g_{i}(x)\\le 0$ for $i=1,…,m$ and $Ax=b$, where $f,g_{i}$ are convex.

For multipliers $\\lambda _{i}\\ge 0$ and unrestricted $\\nu$, define the Lagrangian

$L(x,\\lambda ,\\nu )=f(x)+\\sum_{i}\\lambda _{i} g_{i}(x)+\\nu ^{\\top}(Ax-b)$.

The dual function is

$q(\\lambda ,\\nu )=inf_{x} L(x,\\lambda ,\\nu )$.

For any feasible $x$, nonnegative $\\lambda$ gives $\\sum_{i}\\lambda _{i} g_{i}(x)\\le 0$ and the equality term vanishes. Therefore

$q(\\lambda ,\\nu )\\le L(x,\\lambda ,\\nu )\\le f(x)$.

Taking the infimum over feasible $x$ yields **weak duality**:

$q(\\lambda ,\\nu )\\le p^{\\star}$.

Every dual-feasible multiplier pair produces a lower bound on the primal optimum. The dual problem maximizes that lower bound:

$d^{\\star}=\\sup_{\\lambda \\ge 0,\\nu }q(\\lambda ,\\nu )\\le p^{\\star}$.

Weak duality needs no constraint qualification. Strong duality and multiplier existence require additional hypotheses; they cannot be inferred from convexity alone. The [linear-programming course](../linear-programming-optimisation.md) proves exact LP duality, while its [KKT chapter](../linear-programming-optimisation/lagrange-multipliers-kkt.md) states smooth qualification and sufficiency boundaries. Here the learning applications use explicit feasible points and lower bounds, so the computed certificate can be inspected directly.

## KKT conditions as a certificate

For a convex problem, a feasible point $x^{\\star}$ and multipliers $(\\lambda^{\\star},\\nu^{\\star})$ are primal–dual optimal when they satisfy:

1. primal feasibility: $g_{i}(x^{\\star})\\le 0$, $Ax^{\\star}=b$;
2. dual feasibility: $\\lambda _{i}^{\\star}\\ge 0$;
3. stationarity: $0\\in \\partial f(x^{\\star})+\\sum_{i}\\lambda _{i}^{\\star}\\partial g_{i}(x^{\\star})+A^{\\top}\\nu^{\\star}$;
4. complementary slackness: $\\lambda_{i}^{\\star}g_{i}(x^{\\star})=0$ for every $i$.

For differentiable functions, subdifferentials become gradients. Complementary slackness says an inactive constraint $g_{i}(x^{\\star})<0$ must have zero multiplier; a positive multiplier can occur only on an active boundary.

### Worked inequality certificate

Minimize $(\\frac{1}{2})(x-3)^{2}$ subject to $g(x)=x-1\\le 0$. The Lagrangian is

$L(x,\\lambda )=(\\frac{1}{2})(x-3)^{2}+\\lambda (x-1)$.

At $x^{\\star}=1$, stationarity is $(x^{\\star}-3)+\\lambda^{\\star}=0$, so $\\lambda^{\\star}=2$. Primal feasibility holds, $\\lambda^{\\star}\\ge 0$, and $\\lambda^{\\star}(x^{\\star}-1)=0$. These four facts certify global optimality.

The multiplier has a sensitivity interpretation only under regularity and a declared parameterization. If the bound becomes $x\\le c$, the optimal value for $c<3$ is $(\\frac{1}{2})(c-3)^{2}$, whose derivative is $c-3=-\\lambda^{\\star}$. Rescaling the constraint by 1,000 rescales its multiplier by $\\frac{1}{1000}$; multiplier magnitudes are not unit-free importance scores.

## Equality-constrained quadratic learning

Let $H\\in \\mathbb{R}^{d\\times d}$ be symmetric positive definite and consider

$\\min_w \\frac{1}{2}w^{\\top}Hw-c^{\\top}w\\quad\\text{subject to}\\quad Aw=b$.

The Lagrangian is

$L(w,\\nu )=(\\frac{1}{2})w^{\\top}Hw-c^{\\top}w+\\nu ^{\\top}(Aw-b)$.

Stationarity gives

$Hw-c+A^{\\top}\\nu =0$,

so

$w=H^{-1}(c-A^{\\top}\\nu )$.

Substitute into $Aw=b$:

$AH^{-1}A^{\\top}\\nu =AH^{-1}c-b$.

If $A$ has independent rows, the Schur-complement matrix is positive definite and the multiplier is unique. One can solve the saddle system directly:

\`\`\`text
[ H  A^T ][w] = [c]
[ A   0  ][ν]   [b]
\`\`\`

Do not form explicit inverses in floating computation. Factor or solve the structured system and report primal residual $Aw-b$ plus stationarity residual $Hw-c+A^{\\top}\\nu$.

### Worked constrained ridge fit

Let $H=\\operatorname{diag}(2,4)$, $c=(2,8)^{\\top}$, and require $w_{1}+w_{2}=1$. Unconstrained stationarity gives $(1,2)$, which violates the equality. Write $A=(1,1)$ and $b=1$.

Since $H^{-1}=\\operatorname{diag}(\\frac{1}{2},\\frac{1}{4})$,

$AH^{-1}A^{\\top}=\\frac{3}{4}$,

$AH^{-1}c-b=(1+2)-1=2$,

so $\\nu =\\frac{8}{3}$. Then

$w=H^{-1}(c-A^{\\top}\\nu )=(-\\frac{1}{3},\\frac{4}{3})^{\\top}$.

The equality holds. Direct substitution verifies stationarity:

$Hw-c+A^{\\top}\\nu =(-\\frac{2}{3},\\frac{16}{3})^{\\top}-(2,8)^{\\top}+(\\frac{8}{3},\\frac{8}{3})^{\\top}=(0,0)^{\\top}$.

The negative first coefficient is allowed because the only declared constraint was the sum. If nonnegativity is intended, it must be added and the certificate changes.

## Primal–dual gaps

For any primal-feasible $x$ and dual-feasible $(\\lambda ,\\nu )$, define

$gap=f(x)-q(\\lambda ,\\nu )\\ge 0$.

Because $q\\le p^{\\star}\\le f(x)$,

$0\\le f(x)-p^{\\star}\\le gap$.

Thus a computed dual value gives an absolute objective-gap certificate. A relative gap needs a declared scale; dividing by a near-zero objective is unstable. Common denominators include $\\max\\left(1,\\lvert f(x)\\rvert,\\lvert q\\rvert\\right)$ or an application-specific value scale.

A small gap is meaningful only if feasibility and the dual function are evaluated accurately. Approximate inner minimization can overestimate $q$, destroying its lower-bound status. A certificate routine should return typed residuals rather than silently clipping a negative numerical gap to zero.

### Worked lower bound

Suppose a feasible model has objective $12.4$ and a valid dual point gives $q=12.1$. Then $p^{\\star}\\in [12.1,12.4]$, and the model is at most $0.3$ above optimum in objective units. If a second solver returns objective $12.0$, at least one record is wrong: it contradicts the proven lower bound unless tolerances or problem definitions differ.

## Fenchel conjugates and regularized empirical risk

For a proper convex function $f$, its conjugate is

$f^{\\star}(s)=\\sup_{x}[s^{\\top}x-f(x)]$.

The definition immediately gives the Fenchel–Young inequality

$f(x)+f^{\\star}(s)\\ge s^{\\top}x$.

Equality holds exactly when $s\\in \\partial f(x)$, equivalently $x\\in \\partial f^{\\star}(s)$ under standard closedness conditions.

### Quadratic conjugate

For $f(x)=(\\frac{1}{2})\\lVert x\\rVert^{2}$, maximize $s^{\\top}x-(\\frac{1}{2})\\lVert x\\rVert^{2}$. Completing the square gives maximizer $x=s$ and value $(\\frac{1}{2})\\lVert s\\rVert^{2}$; the quadratic is self-conjugate.

### Absolute-value conjugate

For $f(x)=\\lambda \\lvert x\\rvert$,

$f^{\\star}(s)=0$ when $\\lvert s\\rvert\\le \\lambda$, and $+\\infty$ otherwise.

If $\\lvert s\\rvert\\le \\lambda$, then $sx-\\lambda \\lvert x\\rvert\\le 0$ for all $x$, with equality at zero. If $\\lvert s\\rvert>\\lambda$, choose $x$ with matching sign and arbitrarily large magnitude, making the supremum infinite. Thus an $L^{1}$ penalty in the primal becomes a box constraint in the dual.

This penalty–constraint correspondence is useful, but not mystical. It follows from support functions and conjugacy, and coordinate units still matter.

## A ridge-regression dual

Consider

$\\min_{w} (\\frac{1}{2})\\lVert Xw-y\\rVert^{2}+(\\lambda /2)\\lVert w\\rVert^{2}$, $\\lambda >0$.

Introduce residual $r=Xw-y$ and multiplier $\\alpha$ for $r-Xw+y=0$:

$L(w,r,\\alpha )=(\\frac{1}{2})\\lVert r\\rVert^{2}+(\\lambda /2)\\lVert w\\rVert^{2}+\\alpha ^{\\top}(r-Xw+y)$.

Minimizing over $r$ gives $r=-\\alpha$; minimizing over $w$ gives $w=(1/\\lambda )X^{\\top}\\alpha$. Substitution yields

$q(\\alpha )=\\alpha ^{\\top}y-(\\frac{1}{2})\\lVert \\alpha \\rVert^{2}-(1/(2\\lambda ))\\lVert X^{\\top}\\alpha \\rVert^{2}$.

The dual maximizes this unconstrained concave quadratic. From any $\\alpha$, its value is a lower bound on the primal optimum. At optimality,

$r=-\\alpha$ and $\\lambda w=X^{\\top}\\alpha$.

Sign conventions vary with the equality multiplier. A reproducible implementation should test primal–dual relations rather than compare multiplier signs across texts.

## Constraints in learning are modeling choices

Examples of convex learning constraints include:

- nonnegative coefficients for a declared monotonic linear relationship;
- simplex weights for a convex combination of fixed predictors;
- norm bounds representing a complexity or resource budget;
- linear equalities encoding conservation or identifiability conventions;
- group-average prediction constraints computed on a named finite dataset.

The last example needs special care. A constraint on observed group averages is a finite algebraic statement. It does not prove population parity, causal fairness, equal utility, or robustness under shift. Feasibility can also be impossible when constraints conflict; a solver should distinguish infeasible from failed-to-converge.

Softening a constraint by adding a penalty changes the problem. For $g(x)\\le 0$, the penalized objective $f(x)+\\rho \\max\\left(0,g(x)\\right)$ does not automatically reproduce the constrained solution for an arbitrary $\\rho$. The units of $\\rho$ must convert constraint violation into objective units.

## Certificate-oriented pseudocode

\`\`\`text
function audit_kkt(x, lambda, nu, problem, tolerances):
    primal_ineq = max_i(max(0, g_i(x)))
    primal_eq = norm(A*x - b)
    dual = max_i(max(0, -lambda_i))
    stationarity = norm(grad_f(x)
                        + sum_i lambda_i*grad_g_i(x)
                        + transpose(A)*nu)
    complementarity = max_i(abs(lambda_i*g_i(x)))
    return all residuals with absolute and scale-relative tolerances
\`\`\`

This does not establish the hypotheses behind KKT sufficiency. The audit record must also declare convexity evidence, constraint qualification, units, reduction conventions, arithmetic, and how derivatives were checked.

## Failure boundaries

- KKT points need not be global optima in nonconvex problems.
- Strong duality is not automatic; weak duality is the unconditional bound.
- Strict feasibility can fail even when the primal has a solution.
- A small stationarity residual without feasibility is not a constrained certificate.
- A small primal–dual gap does not validate the dataset, loss, or constraints.
- Multiplier values change under constraint rescaling.
- Penalties and hard constraints encode different objectives unless equivalence is proved.
- Floating residuals require scale-aware tolerances and cannot be interpreted from raw magnitude alone.

## Convexity belongs to a specified parameterisation

For binary labels in zero–one form and fixed feature rows, logistic loss is convex in the linear coefficient vector. Write each row's linear score as $z$ and its loss as $\\log(1+e^z)-yz$. Differentiation gives first derivative equal to the sigmoid probability minus the label, and second derivative equal to that probability times one minus itself. The second derivative is nonnegative. Composing with a fixed affine score and summing preserves convexity.

In matrix form, the data Hessian is $X^TWX$, with nonnegative diagonal weights. Its quadratic form is the sum of the weighted squared feature projections, proving positive semidefiniteness directly. Adding a positive ridge penalty makes the Hessian at least the ridge coefficient times the identity. The resulting objective is strongly convex, so it has at most one minimiser. Because the nonnegative logistic loss plus the ridge term is coercive and continuous, a minimiser also exists. This supplies both uniqueness and attainment rather than confusing the two claims.

The unregularised problem can fail attainment. With one positive-label observation and one free scalar score, the loss is $\\log(1+e^{-w})$. It is positive at every finite coefficient and tends to zero as the coefficient tends to positive infinity. Its infimum is zero but no finite minimiser exists. More generally, a separating direction in a classification dataset can send the coefficients toward infinity while the empirical loss approaches its infimum. A solver returning a large finite coefficient has not discovered a missing finite stationary point.

**Worked application: fixing versus learning a representation.** If a neural network first produces a fixed feature table and only its last linear coefficients are trained with logistic loss and positive ridge regularisation, the argument above applies to that last-layer problem. If the feature-generating parameters are trained at the same time, the design matrix depends on those parameters. The convexity proof no longer applies to the joint problem. Being convex in one block with the other fixed does not imply joint convexity. The scalar product parameterisation with a squared residual gives a simple illustration of how a convex prediction loss becomes nonconvex in factors.

## A certificate can control optimisation error without controlling prediction

Strong convexity supplies an objective-to-parameter bound: a suboptimality gap at most $\\epsilon$ implies Euclidean distance from the unique minimiser at most $\\sqrt{2\\epsilon/\\mu}$. This follows from the quadratic growth inequality at the minimiser. For a new feature row, Cauchy–Schwarz then bounds the score change by the feature norm times that distance. A classification decision is preserved only if the minimiser's score margin exceeds this possible change.

The feature norm and margin in this statement concern the particular input under discussion. A uniform decision guarantee requires a bounded input set and a uniform positive margin. Neither follows from a training optimization certificate. On an input distribution with unbounded features, a small coefficient error need not give a small uniform score error. Likewise, a tiny score perturbation can flip an example lying close to the decision boundary.

These links clarify what a primal–dual gap contributes to learning. It can certify how well the finite optimization problem was solved and, under additional curvature and input assumptions, bound a resulting score change. It does not establish that the dataset represents deployment, that the chosen loss captures the desired costs, or that model restrictions are appropriate. Keeping those assumptions visible preserves the usefulness of an exact convex certificate without asking it to answer statistical or operational questions outside its scope.

## Exercises

1. Prove that an affine subspace $\\{x\\colon Ax=b\\}$ is convex.
2. Give two convex sets whose union is not convex, and exhibit the failed midpoint.
3. Prove that the pointwise maximum of two convex functions is convex.
4. Use the supporting-hyperplane inequality to show that every stationary point of a differentiable convex function is global.
5. Find $\\partial \\max\\left(0,x\\right)$ at $x=-1,0,2$, and identify all minimizers over $[-3,3]$.
6. Minimize $(x-4)^{2}$ subject to $x\\le 1$. Give the normal-cone and KKT certificates.
7. Minimize $(\\frac{1}{2})(x^{2}+y^{2})$ subject to $x+y=1$. Solve by the KKT system.
8. For the problem in Exercise 7, derive the dual function and verify equality of primal and dual optima.
9. Prove weak duality directly for one inequality constraint $g(x)\\le 0$.
10. A feasible point has objective 7.3 and a valid dual value is 7.1. Give the certified interval for the optimum and maximum suboptimality.
11. Compute the conjugate of $f(x)=(a/2)x^{2}$ for $a>0$.
12. Compute the conjugate of the indicator $I_[-1,1](x)$, which is zero inside the interval and $+\\infty$ outside.
13. Derive the minimum-norm point in $\\{w\\colon w_{1}+w_{2}=3\\}$ and give its equality multiplier under objective $(\\frac{1}{2})\\lVert w\\rVert^{2}$.
14. A constraint $g(x)\\le 0$ is replaced by $1000g(x)\\le 0$. Relate the KKT multipliers and explain why raw multiplier size is not importance.
15. Show that the dual of ridge derived above is concave by identifying its Hessian.
16. Construct a nonconvex problem with a KKT point that is not a global minimizer.
17. Explain why a zero finite-sample group-average constraint does not prove population or causal fairness.
18. Design a complete numerical certificate record for a convex constrained fit, naming at least six quantities or hypotheses.

## Full solutions

1. If $Ax=b$ and $Ay=b$, then for $t\\in [0,1]$, $A[(1-t)x+ty]=(1-t)b+tb=b$. Thus every convex combination remains in the affine subspace.
2. In $R$, take $C_{1}=[-2,-1]$ and $C_{2}=[1,2]$. Both are convex, but $-1\\in C_{1}$ and $1\\in C_{2}$ have midpoint 0, which is in neither interval, so the union is not convex.
3. Let $h(x)=\\max\\left(f(x),g(x)\\right)$. For $z=(1-t)x+ty$, convexity gives $f(z)\\le (1-t)f(x)+tf(y)\\le (1-t)h(x)+th(y)$, and the same bound holds for $g(z)$. Taking their maximum proves $h(z)\\le (1-t)h(x)+th(y)$.
4. If $\\nabla f(x^{\\star})=0$, then for every $y$, convexity gives $f(y)\\ge f(x^{\\star})+\\nabla f(x^{\\star})^{\\top}(y-x^{\\star})=f(x^{\\star})$. Hence no point has lower value.
5. The subdifferentials are $\\{0\\}$ at $-1$, $[0,1]$ at 0, and $\\{1\\}$ at 2. The function is zero for every $x\\le 0$, so over $[-3,3]$ the complete minimizer set is $[-3,0]$.
6. The optimum is $x^{\\star}=1$. For $C=(-\\infty ,1]$, $N_{C}(1)=[0,\\infty )$ and $-f'(1)=-2(1-4)=6\\in N_{C}(1)$. With $g(x)=x-1$, stationarity is $2(x-4)+\\lambda =0$, giving $\\lambda^{\\star}=6$; feasibility, nonnegativity, and complementary slackness all hold.
7. The Lagrangian is $(\\frac{1}{2})(x^{2}+y^{2})+\\nu (x+y-1)$. Stationarity gives $x=-\\nu$, $y=-\\nu$. The equality gives $-2\\nu =1$, hence $\\nu =-\\frac{1}{2}$ and $(x,y)=(\\frac{1}{2},\\frac{1}{2})$. The objective is $\\frac{1}{4}$.
8. Infimizing the Lagrangian over $x,y$ at $x=y=-\\nu$ gives $q(\\nu )=-\\nu ^{2}-\\nu$. Its derivative is $-2\\nu -1$, so the maximum is at $\\nu =-\\frac{1}{2}$, with $q=\\frac{1}{4}$, equal to the primal value.
9. For any feasible $x$ and $\\lambda \\ge 0$, $\\lambda g(x)\\le 0$, so $L(x,\\lambda )=f(x)+\\lambda g(x)\\le f(x)$. Since $q(\\lambda )=inf_{z}L(z,\\lambda )\\le L(x,\\lambda )$, we have $q(\\lambda )\\le f(x)$ for every feasible $x$; therefore $q(\\lambda )\\le p^{\\star}$.
10. Weak duality and feasibility give $7.1\\le p^{\\star}\\le 7.3$. The feasible point is at most $7.3-7.1=0.2$ above optimum in objective units.
11. Maximize $sx-(a/2)x^{2}$. Stationarity gives $x=s/a$, and substitution gives $f^{\\star}(s)=s^{2}/(2a)$. Positive $a$ makes this the unique maximum.
12. The conjugate is $\\sup_{\\lvert x\\rvert\\le 1}sx=\\lvert s\\rvert$, attained at $x=\\operatorname{sign}(s)$ for nonzero $s$ and at every feasible $x$ when $s=0$. It is the support function of the interval.
13. The Lagrangian is $(\\frac{1}{2})(w_{1}^{2}+w_{2}^{2})+\\nu (w_{1}+w_{2}-3)$. Stationarity gives $w_{1}=w_{2}=-\\nu$; the equality yields $w_{1}=w_{2}=\\frac{3}{2}$ and $\\nu =-\\frac{3}{2}$.
14. If the original stationarity term is $\\lambda \\nabla g$, the rescaled constraint contributes $\\lambda'1000\\nabla g$. Equality of stationarity requires $\\lambda'=\\lambda /1000$. The feasible set is unchanged while the multiplier number changes, so its raw magnitude depends on units and parameterization.
15. The dual Hessian is $-I-(1/\\lambda )XX^{\\top}$, which is negative definite because $I+(1/\\lambda )XX^{\\top}$ is positive definite. Hence the dual objective is strictly concave.
16. Minimize $f(x)=x^{4}-x^{2}$ without constraints. The point $x=0$ has $f'(0)=0$, so it satisfies stationarity/KKT, but $f(\\pm 1/\\sqrt{\\left(2\\right)})=-\\frac{1}{4}<0=f(0)$. Nonconvexity removes global sufficiency.
17. The constraint is an algebraic equality on named rows and perhaps on a fitted model. Population transfer needs a sampling/shift model; causal fairness needs intervention and identification assumptions; utility needs a decision model. None follows from finite feasibility.
18. A complete record includes primal objective, dual objective, absolute/relative gap, inequality violation, equality residual, dual-sign violation, stationarity residual, complementarity residual, derivative-check evidence, convexity evidence, constraint-qualification statement, units/scales, solver tolerance, and arithmetic. Any six are necessary but the whole record is preferable.

## Verification checkpoint and forward links

Build two tiny convex programs: the equality-constrained quadratic above and a one-inequality boundary problem. Compute primal and dual solutions independently, then report objective gap, feasibility, stationarity, dual feasibility, and complementarity under explicit scales. Deliberately rescale one constraint and verify that the primal solution stays fixed while its multiplier changes.

Chapter 13 adds noisy gradients and momentum, where exact dual certificates are often unavailable. Chapter 14 uses convex optimality to justify proximal regularization. Later case studies will use these convex programs as reference oracles for nonconvex pipelines.
`;export{e as default};