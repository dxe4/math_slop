var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
matter_id: exercise-program-part-i
title: "Exercise Program, Part I: Continuous Structure and Certificates"
license: CC BY-SA 4.0
---

# Exercise Program, Part I: Continuous Structure and Certificates

This supplement adds a proof-oriented problem bank for Chapters 1–9. Every solution states the hypothesis that licenses its main step. Unless a problem says otherwise, vectors are real column vectors, \\(\\lVert \\cdot \\rVert\\) is the Euclidean norm, inequalities are componentwise, and minimization is over the displayed feasible set. A numerical observation is not called a certificate unless the solution identifies its mathematical guarantee.

## Chapter 1: Formulations and claim boundaries

### Exercise 1.1: infimum without attainment

Minimize \\(e^x\\) over \\(x\\in \\mathbb{R}\\). State the infimum, decide whether an optimizer exists, and identify the invalid phrase in “the minimum is attained at negative infinity.”

**Solution.** Since \\(e^x>0\\), zero is a lower bound. For every \\(\\varepsilon>0\\), choosing \\(x<\\log \\varepsilon\\) gives \\(e^x<\\varepsilon\\), so the infimum is \\(0\\). No real \\(x\\) satisfies \\(e^x=0\\); hence there is no optimizer. Negative infinity is not an element of \\(\\mathbb{R}\\), so it cannot be a feasible point or an attaining argument.

### Exercise 1.2: compactness and existence

Let \\(f(x,y)=x^{2}+xy+2y^{2}-3x\\) on \\(C=\\{(x,y):x^{2}+y^{2}\\le 4\\}\\). Prove that a minimizer exists without computing it.

**Solution.** The polynomial \\(f\\) is continuous. The set \\(C\\) is closed and bounded in finite-dimensional Euclidean space, hence compact, and it is nonempty because \\((0,0)\\in C\\). The extreme-value theorem therefore gives a point in \\(C\\) at which \\(f\\) attains its minimum. This argument proves existence only, not uniqueness or the coordinates of the minimizer.

### Exercise 1.3: a restriction and a relaxation

For \\(P=\\min\\{x^{2}:x\\in [-2,2], x\\ge 1\\}\\), give one proper restriction and one proper relaxation, and order their optimal values relative to \\(P\\).

**Solution.** The feasible set of \\(P\\) is \\([1,2]\\), so \\(v(P)=1\\). Adding \\(x\\ge 3/2\\) gives the restriction \\([3/2,2]\\) with value \\(9/4\\ge 1\\). Dropping \\(x\\ge 1\\) gives the relaxation \\([-2,2]\\) with value \\(0\\le 1\\). For minimization, a restriction supplies an upper bound through any feasible point, while a relaxation supplies a lower bound.

### Exercise 1.4: exact reparameterization

Show that minimizing \\((x-3)^{2}\\) over \\(x>0\\) is exactly equivalent to minimizing \\((e^z-3)^{2}\\) over \\(z\\in \\mathbb{R}\\). State why replacing \\(x=e^z\\) by \\(x=z^{2}\\) is not exact.

**Solution.** The exponential map is a bijection from \\(\\mathbb{R}\\) onto \\((0,\\infty)\\), with inverse \\(\\log\\); it preserves every feasible point and objective value in both directions. The map \\(z↦z^{2}\\) reaches \\([0,\\infty)\\), including the forbidden point \\(0\\), and is two-to-one away from zero. Thus it changes the feasible set and does not give a bijective reformulation, even though its optimum happens to occur at \\(x=3\\) here.

### Exercise 1.5: scaling a residual

The constraints are \\(x=1000\\) and \\(y=0.001\\). Compare the unscaled residual norm at \\((999.9,0.002)\\) with the dimensionless residual norm obtained by dividing each residual by its target magnitude. Interpret the difference.

**Solution.** The raw residual is \\((-0.1,0.001)\\), with norm approximately \\(0.100005\\); it is dominated by the first coordinate's units. Scaling gives \\((-0.0001,1)\\), with norm approximately \\(1.000000005\\), exposing a 100% relative error in \\(y\\) and a 0.01% error in \\(x\\). Equal numerical tolerances have no invariant meaning until scales are declared.

### Exercise 1.6: nonunique variables but unique prediction

Minimize \\((x_1+x_2-1)^{2}\\) over \\(\\mathbb{R}^{2}\\). Describe all minimizers and the uniquely determined quantity.

**Solution.** The objective is nonnegative and equals zero exactly when \\(x_1+x_2=1\\). Hence every \\((t,1-t)\\) is a global minimizer, so the parameter vector is not identifiable. Nevertheless the prediction \\(x_1+x_2\\) is uniquely equal to \\(1\\) at every minimizer. Reporting a single parameter pair without the nonuniqueness boundary would overstate the result.

### Exercise 1.7: epigraph reformulation

Prove that \\(\\min_x \\max\\{(x-1)^{2},(x+1)^{2}\\}\\) is equivalent to \\(\\min_{x,t} t\\) subject to both squared terms being at most \\(t\\). Find the optimum.

**Solution.** For fixed \\(x\\), the smallest feasible \\(t\\) is exactly the maximum of the two expressions, so projecting optimal pairs onto \\(x\\) preserves values and minimizers. Symmetry suggests \\(x=0\\), where both terms equal \\(1\\). More decisively, their average is \\(x^{2}+1\\), so their maximum is at least \\(x^{2}+1\\ge 1\\); \\((x,t)=(0,1)\\) attains that lower bound.

### Exercise 1.8: penalty is not a reformulation

Compare \\(\\min x^{2}\\) subject to \\(x\\ge 1\\) with \\(\\min_x x^{2}+\\rho \\max(0,1-x)\\) for \\(\\rho=1\\). Find both minimizers.

**Solution.** The constrained problem has unique minimizer \\(x=1\\) and value \\(1\\). For the penalty problem, when \\(x\\le 1\\) the objective is \\(x^{2}+1-x\\), minimized at \\(x=1/2\\) with value \\(3/4\\); for \\(x\\ge 1\\) it is \\(x^{2}\\), minimized at \\(1\\) with value \\(1\\). Thus the penalized minimizer is \\(1/2\\), infeasible for the original problem. A finite penalty needs an exactness theorem before it may be called equivalent.

### Exercise 1.9: surrogate claim boundary

Suppose \\(\\lvert F(x)-S(x)\\rvert\\le 0.1\\) for every feasible \\(x\\), and \\(x_s\\) minimizes \\(S\\). Prove an upper bound on \\(F(x_s)-\\inf_x F(x)\\).

**Solution.** For any feasible \\(x\\), \\(F(x_s)\\le S(x_s)+0.1\\le S(x)+0.1\\le F(x)+0.2\\). Taking the infimum over \\(x\\) gives \\(F(x_s)-\\inf F\\le 0.2\\). The result needs the uniform error bound on the whole feasible set; agreement only at sampled points would not license it.

### Exercise 1.10: infeasible or unbounded

Classify each problem: (a) minimize \\(x\\) subject to \\(x\\ge 1\\) and \\(x\\le 0\\); (b) minimize \\(-x\\) subject to \\(x\\ge 0\\); (c) minimize \\((x-2)^{2}\\) over \\(\\mathbb{R}\\).

**Solution.** Problem (a) is infeasible because no real number satisfies both inequalities. Problem (b) is feasible but unbounded below: along \\(x=k\\), the objective \\(-k\\) tends to negative infinity. Problem (c) is feasible and attains the finite value \\(0\\) at \\(x=2\\). These statuses are logically distinct and require different certificates.

### Exercise 1.11: counterexample to rounding

Give a one-variable integer optimization problem whose continuous relaxation has a unique optimum but rounding that optimum to the nearest integer is infeasible.

**Solution.** Minimize \\((x-1.6)^{2}\\) over the discrete feasible set \\(\\{1,3\\}\\). Its convex-hull relaxation replaces that set by \\([1,3]\\) and has the unique optimum \\(x=1.6\\). Rounding to the nearest integer gives \\(2\\), which is not in the original feasible set. Thus even a natural tight domain relaxation does not make coordinatewise rounding feasibility preserving.

### Exercise 1.12: a complete problem contract

For \\(\\min \\lVert Ax-b\\rVert^{2}\\) subject to \\(x\\ge 0\\), list a minimal mathematical output contract that distinguishes a point from a certificate.

**Solution.** Declare dimensions \\(A\\in \\mathbb{R}^{m\\times n}\\), \\(b\\in \\mathbb{R}^{m}\\), variable \\(x\\in \\mathbb{R}^{n}\\), the Euclidean norm, and exact nonnegativity. A candidate output must include \\(\\hat{x}\\), its residual value, and a feasibility check. A global certificate may include multipliers \\(\\lambda\\ge 0\\) satisfying stationarity \\(2A^{\\mathsf T}(A\\hat{x}-b)-\\lambda=0\\) and complementarity \\(\\lambda_i \\hat{x}_i=0\\); convexity then licenses global optimality. Without the certificate, the point is only a candidate.

## Chapter 2: Convexity, optimality, and elementary duality

### Exercise 2.1: convex combination audit

Prove that \\(\\{x\\in \\mathbb{R}^{n}:a^{\\mathsf T}x\\le \\beta\\}\\) is convex, stating where the hypotheses on the mixing coefficient enter.

**Solution.** Take feasible \\(x,y\\) and \\(\\theta\\in [0,1]\\). Linearity gives \\(a^{\\mathsf T}(\\theta x+(1-\\theta)y)=\\theta a^{\\mathsf T}x+(1-\\theta)a^{\\mathsf T}y\\le \\theta \\beta+(1-\\theta)\\beta=\\beta\\). Nonnegative weights preserve the two inequalities, and weights summing to one recover the same right side. Thus every convex combination is feasible.

### Exercise 2.2: a nonconvex sublevel set

Show that the sublevel set \\(\\{x\\in \\mathbb{R}:x^{4}-5x^{2}\\le -4\\}\\) is not convex.

**Solution.** Factoring gives \\((x^{2}-1)(x^{2}-4)\\le 0\\), hence \\(1\\le x^{2}\\le 4\\); the set is \\([-2,-1]\\cup [1,2]\\). Both \\(-1\\) and \\(1\\) are feasible, but their midpoint \\(0\\) is not. A single failed midpoint proves nonconvexity.

### Exercise 2.3: first-order convexity

For \\(f(x)=e^x\\), verify \\(f(y)\\ge f(x)+f'(x)(y-x)\\) using a one-variable auxiliary function.

**Solution.** Fix \\(x\\) and set \\(h(y)=e^y-e^x-e^x(y-x)\\). Then \\(h'(y)=e^y-e^x\\), which is negative for \\(y<x\\), zero at \\(x\\), and positive for \\(y>x\\). Thus \\(h\\) has global minimum \\(h(x)=0\\). The supporting-line inequality follows, proving convexity without appealing to a graph.

### Exercise 2.4: strict versus strong convexity

Show that \\(f(x)=x^{4}\\) is strictly convex on \\(\\mathbb{R}\\) but is not \\(\\mu\\)-strongly convex for any \\(\\mu>0\\).

**Solution.** Its derivative \\(4x^{3}\\) is strictly increasing, which implies strict convexity. If it were \\(\\mu\\)-strongly convex and twice differentiable, we would have \\(f''(x)=12x^{2}\\ge \\mu\\) for all \\(x\\). At \\(x=0\\) this says \\(0\\ge \\mu\\), a contradiction. Strict convexity gives uniqueness when a minimizer exists but no uniform quadratic curvature.

### Exercise 2.5: Hessian with a flat direction

Classify \\(f(x,y)=(x-y)^{2}\\) as convex, strictly convex, or strongly convex, and find its minimizers.

**Solution.** The Hessian is \\(2\\begin{bmatrix}1 & -1 \\\\ -1 & 1\\end{bmatrix}\\); its quadratic form is \\(2(u-v)^{2}\\ge 0\\), so \\(f\\) is convex. It has null direction \\((1,1)\\), hence is neither strictly nor strongly convex on \\(\\mathbb{R}^{2}\\). The minimum value is zero at every point with \\(x=y\\).

### Exercise 2.6: stationary point certificate

Let \\(f\\) be differentiable and convex on \\(\\mathbb{R}^{n}\\). Prove that \\(\\nabla f(x^{\\star})=0\\) certifies global optimality.

**Solution.** Convex differentiability gives the supporting inequality \\(f(y)\\ge f(x^{\\star})+\\nabla f(x^{\\star})^{\\mathsf T}(y-x^{\\star})\\) for every \\(y\\). The gradient term vanishes, so \\(f(y)\\ge f(x^{\\star})\\) globally. Convexity is load-bearing: for \\(f(x)=x^{3}\\), the derivative vanishes at zero, which is not a minimum.

### Exercise 2.7: constrained variational inequality

Minimize \\((x-3)^{2}\\) over \\([0,2]\\). Verify the variational inequality \\(f'(x^{\\star})(y-x^{\\star})\\ge 0\\) for every feasible \\(y\\) at the solution.

**Solution.** The unconstrained minimizer \\(3\\) is infeasible, and the closest feasible point is \\(x^{\\star}=2\\). Here \\(f'(2)=-2\\); for \\(y\\in [0,2]\\), \\(y-2\\le 0\\), so \\(f'(2)(y-2)\\ge 0\\). Since the objective and feasible set are convex, this inequality is also sufficient for global optimality.

### Exercise 2.8: strong-convexity distance bound

If \\(f\\) is \\(\\mu\\)-strongly convex, differentiable, and has minimizer \\(x^{\\star}\\), prove \\(f(x)-f(x^{\\star})\\ge (\\mu/2)\\lVert x-x^{\\star}\\rVert^{2}\\).

**Solution.** Strong convexity in first-order form gives \\(f(x)\\ge f(x^{\\star})+\\nabla f(x^{\\star})^{\\mathsf T}(x-x^{\\star})+(\\mu/2)\\lVert x-x^{\\star}\\rVert^{2}\\). An unconstrained differentiable minimizer satisfies \\(\\nabla f(x^{\\star})=0\\), leaving the claimed bound. Thus an objective gap bounds distance only when a positive curvature constant is available.

### Exercise 2.9: conjugate of a scaled square

For \\(a>0\\), compute the convex conjugate of \\(f(x)=(a/2)x^{2}\\).

**Solution.** By definition, \\(f^{\\star}(s)=\\sup_x\\{sx-(a/2)x^{2}\\}\\). The concave quadratic has derivative \\(s-ax\\), so its unique maximizer is \\(x=s/a\\). Substitution gives \\(s^{2}/a-s^{2}/(2a)=s^{2}/(2a)\\). Positivity of \\(a\\) ensures the supremum is finite and attained.

### Exercise 2.10: weak duality signs

For \\(\\min f(x)\\) subject to \\(g(x)\\le 0\\), define \\(L(x,\\lambda)=f(x)+\\lambda g(x)\\) with \\(\\lambda\\ge 0\\). Prove that \\(q(\\lambda)=\\inf_x L(x,\\lambda)\\) is a lower bound on the primal optimum.

**Solution.** For every feasible \\(x\\), \\(\\lambda g(x)\\le 0\\), so \\(L(x,\\lambda)\\le f(x)\\). Also \\(q(\\lambda)\\le L(x,\\lambda)\\). Hence \\(q(\\lambda)\\le f(x)\\) for every feasible \\(x\\), and therefore \\(q(\\lambda)\\le p^{\\star}\\). Reversing the multiplier sign would destroy this argument.

### Exercise 2.11: strict feasibility and strong duality

Minimize \\(x^{2}\\) subject to \\(1-x\\le 0\\). Derive the dual and exhibit matching primal and dual values.

**Solution.** The Lagrangian is \\(x^{2}+\\lambda(1-x)\\). Minimizing in \\(x\\) gives \\(x=\\lambda/2\\) and \\(q(\\lambda)=\\lambda-\\lambda^{2}/4\\) for \\(\\lambda\\ge 0\\). This concave quadratic is maximized at \\(\\lambda=2\\), with value \\(1\\). The primal minimizer is \\(x=1\\), also value \\(1\\). The strictly feasible point \\(x=2\\) verifies the usual Slater hypothesis for this convex problem.

### Exercise 2.12: Jensen equality boundary

Let \\(f\\) be strictly convex, \\(x\\ne y\\), and \\(\\theta\\in (0,1)\\). What strict inequality holds, and why are the endpoint restrictions necessary?

**Solution.** Strict convexity gives \\(f(\\theta x+(1-\\theta)y)<\\theta f(x)+(1-\\theta)f(y)\\). If \\(\\theta=0\\) or \\(1\\), the two sides are identical, regardless of \\(x,y\\). If \\(x=y\\), they are also identical. Thus both distinct points and an interior mixing weight are necessary for the strict conclusion.

### Exercise 2.13: coercivity counterexample

Give a convex continuous function on \\(\\mathbb{R}\\) that is bounded below but does not attain its infimum, and explain which common existence hypothesis fails.

**Solution.** The function \\(f(x)=e^x\\) is continuous and convex, with infimum zero not attained. It is not coercive because \\(f(x)\\) does not tend to infinity as \\(\\lvert x\\rvert\\to \\infty\\); instead it tends to zero as \\(x\\to -\\infty\\). Continuity alone on a noncompact feasible set does not guarantee attainment.

### Exercise 2.14: certificate from a subgradient

For \\(f(x)=\\lvert x\\rvert+2\\lvert x-1\\rvert\\), prove that \\(x=1\\) is the unique minimizer using subgradients.

**Solution.** At \\(x=1\\), \\(\\partial \\lvert x\\rvert=\\{1\\}\\) and \\(\\partial 2\\lvert x-1\\rvert=[-2,2]\\), so \\(\\partial f(1)=[-1,3]\\) contains zero; convexity makes \\(1\\) globally optimal. For \\(x<1\\), slopes are \\(-3\\) when \\(x<0\\) and \\(-1\\) when \\(0<x<1\\); for \\(x>1\\) the slope is \\(3\\). Thus no other point has zero in its subdifferential, proving uniqueness.

## Chapter 3: Separation, conjugacy, and supporting geometry

### Exercise 3.1: separating an exterior point from a ball

Let \\(C=\\{x:\\lVert x\\rVert\\le 2\\}\\) and let \\(z\\) satisfy \\(\\lVert z\\rVert>2\\). Give an explicit strict separating hyperplane.

**Solution.** Take normal \\(a=z\\) and threshold \\(\\beta=2\\lVert z\\rVert\\). For \\(x\\in C\\), Cauchy–Schwarz gives \\(a^{\\mathsf T}x=z^{\\mathsf T}x\\le \\lVert z\\rVert\\lVert x\\rVert\\le 2\\lVert z\\rVert=\\beta\\). But \\(a^{\\mathsf T}z=\\lVert z\\rVert^{2}>2\\lVert z\\rVert=\\beta\\). Thus \\(a^{\\mathsf T}x\\le \\beta<a^{\\mathsf T}z\\) strictly separates \\(z\\) from the closed ball.

### Exercise 3.2: no strict separation at the boundary

Explain why a point \\(z\\in C\\) cannot be strictly separated from a nonempty set \\(C\\) by an inequality \\(a^{\\mathsf T}x\\le \\beta<a^{\\mathsf T}z\\) valid for all \\(x\\in C\\).

**Solution.** Substituting the particular member \\(x=z\\) into the asserted inequality yields \\(a^{\\mathsf T}z\\le \\beta<a^{\\mathsf T}z\\), an impossibility. This elementary contradiction is why projection-based strict-separation theorems assume the point lies outside the closed convex set.

### Exercise 3.3: projection normal certificate

Project \\(z=(3,1)\\) onto the halfspace \\(C=\\{(x,y):x\\le 1\\}\\) and verify the normal-cone inequality.

**Solution.** The nearest feasible point is \\(p=(1,1)\\). The displacement is \\(z-p=(2,0)\\). For any \\((x,y)\\in C\\), \\((z-p)^{\\mathsf T}((x,y)-p)=2(x-1)\\le 0\\). This variational inequality certifies that \\(p\\) is the Euclidean projection; it also supplies a supporting normal to \\(C\\) at \\(p\\).

### Exercise 3.4: support function of a box

Compute the support function of \\(C=[-a,a]\\times [-b,b]\\) for \\(a,b\\ge 0\\).

**Solution.** The coordinates separate: \\(\\sup_{\\lvert x\\rvert\\le a,\\lvert y\\rvert\\le b}(s_1x+s_2y)=\\sup s_1x+\\sup s_2y\\). Each term is maximized by matching the sign, giving \\(a\\lvert s_1\\rvert+b\\lvert s_2\\rvert\\). This formula remains valid when either side length is zero.

### Exercise 3.5: Fenchel–Young certificate

For \\(f(x)=x^{2}/2\\), verify Fenchel–Young and identify its equality condition.

**Solution.** The conjugate is \\(f^{\\star}(s)=s^{2}/2\\). Therefore \\(f(x)+f^{\\star}(s)-sx=(x-s)^{2}/2\\ge 0\\), which is Fenchel–Young. Equality holds exactly when \\(x=s\\), equivalently \\(s=f'(x)\\). The nonnegative square is an explicit primal-dual certificate.

### Exercise 3.6: conjugate of an absolute value

Compute the conjugate of \\(f(x)=\\alpha\\lvert x\\rvert\\) for \\(\\alpha>0\\).

**Solution.** If \\(\\lvert s\\rvert\\le \\alpha\\), then \\(sx-\\alpha\\lvert x\\rvert\\le 0\\) for every \\(x\\), and \\(x=0\\) attains zero, so \\(f^{\\star}(s)=0\\). If \\(s>\\alpha\\), send \\(x\\to \\infty\\); if \\(s<-\\alpha\\), send \\(x\\to -\\infty\\); the supremum is then infinity. Thus \\(f^{\\star}\\) is the indicator of \\([-\\alpha,\\alpha]\\).

### Exercise 3.7: conjugate under translation

If \\(g(x)=f(x-a)\\) for a proper function \\(f\\), derive \\(g^{\\star}(s)\\).

**Solution.** Substitute \\(u=x-a\\), so \\(x=u+a\\). Then \\(g^{\\star}(s)=\\sup_x\\{sx-f(x-a)\\}=\\sup_u\\{s(u+a)-f(u)\\}=a^{\\mathsf T}s+f^{\\star}(s)\\). The derivation is algebraic and does not require differentiability, but the spaces and inner product must be compatible.

### Exercise 3.8: biconjugate of a nonclosed function

Let \\(f(0)=1\\), \\(f(x)=0\\) for \\(x>0\\), and \\(f(x)=\\infty\\) for \\(x<0\\). Determine \\(f^{**}(0)\\) and explain the gap.

**Solution.** The greatest lower-semicontinuous convex function below \\(f\\) is the indicator of \\([0,\\infty)\\), whose value at zero is \\(0\\); hence \\(f^{**}(0)=0<1=f(0)\\). Directly, the epigraph has a missing limit point at \\((0,0)\\). Biconjugation closes and convexifies a proper function, so equality requires convexity and lower semicontinuity.

### Exercise 3.9: normal cone of an interval

Compute \\(N_{[0,2]}(x)\\) at interior points and endpoints using \\(N_C(x)=\\{v:v(y-x)\\le 0 \\quad\\text{for all}\\quad y\\in C\\}\\).

**Solution.** For \\(0<x<2\\), choosing \\(y\\) on both sides forces \\(v=0\\). At \\(x=0\\), the condition is \\(vy\\le 0\\) for all \\(y\\ge 0\\), so \\(v\\le 0\\). At \\(x=2\\), \\(v(y-2)\\le 0\\) for all \\(y\\le 2\\), so \\(v\\ge 0\\). Outside the set the normal cone is empty by convention.

### Exercise 3.10: optimality by normal inclusion

Use a normal cone to solve \\(\\min (x-4)^{2}/2\\) over \\([0,2]\\).

**Solution.** Convex constrained optimality is \\(0\\in f'(x)+N_C(x)\\). At \\(x=2\\), \\(f'(2)=-2\\) and \\(N_C(2)=[0,\\infty)\\), so choose normal \\(2\\) and obtain zero. At an interior point the normal is zero, which would require \\(x=4\\), infeasible. Convexity makes the inclusion sufficient, so \\(x^{\\star}=2\\).

### Exercise 3.11: polar of a cone

For \\(K=\\mathbb{R}_+^{2}\\), compute \\(K^{\\circ}=\\{y:y^{\\mathsf T}x\\le 0 \\quad\\text{for every}\\quad x\\in K\\}\\).

**Solution.** Testing \\(x=(t,0)\\) with \\(t\\ge 0\\) forces \\(y_1\\le 0\\), and testing \\((0,t)\\) forces \\(y_2\\le 0\\). Conversely, if both coordinates of \\(y\\) are nonpositive, then \\(y^{\\mathsf T}x\\le 0\\) for every nonnegative \\(x\\). Hence \\(K^{\\circ}=\\mathbb{R}_-^{2}\\).

### Exercise 3.12: subgradient from conjugate equality

Let \\(f\\) be proper closed convex. Prove that \\(s\\in \\partial f(x)\\) if and only if \\(f(x)+f^{\\star}(s)=s^{\\mathsf T}x\\).

**Solution.** The subgradient inequality is \\(f(y)\\ge f(x)+s^{\\mathsf T}(y-x)\\), or \\(s^{\\mathsf T}y-f(y)\\le s^{\\mathsf T}x-f(x)\\) for all \\(y\\). Thus \\(x\\) attains the supremum defining \\(f^{\\star}(s)\\), and \\(f^{\\star}(s)=s^{\\mathsf T}x-f(x)\\). Reversing these algebraic steps proves the converse. Closedness is standard for the conjugate framework, though this equivalence at finite values follows directly from the definition.

### Exercise 3.13: a supporting line for a norm

Find all subgradients of \\(\\lVert x\\rVert_2\\) at a nonzero \\(x\\), and verify the supporting inequality.

**Solution.** The norm is differentiable away from zero, with unique subgradient \\(s=x/\\lVert x\\rVert\\). For any \\(y\\), Cauchy–Schwarz gives \\(s^{\\mathsf T}y\\le \\lVert y\\rVert\\), while \\(s^{\\mathsf T}x=\\lVert x\\rVert\\). Therefore \\(\\lVert y\\rVert\\ge \\lVert x\\rVert+s^{\\mathsf T}(y-x)\\). The equality at \\(x\\) and global inequality certify the supporting hyperplane.

### Exercise 3.14: separation failure without convexity

Let \\(C=\\{(-1,0),(1,0)\\}\\) and \\(z=(0,0)\\). Show that \\(z\\notin C\\) but no affine hyperplane strictly separates \\(z\\) from all of \\(C\\).

**Solution.** Suppose \\(a^{\\mathsf T}x\\le \\beta<a^{\\mathsf T}z=0\\) for both points. Writing \\(a=(a_1,a_2)\\), the two inequalities give \\(a_1\\le \\beta<0\\) and \\(-a_1\\le \\beta<0\\). Adding yields \\(0\\le 2\\beta<0\\), impossible. The point lies in the convex hull of \\(C\\); strict separation from the original nonconvex set therefore fails.

## Chapter 4: Duality, sensitivity, and perturbation

### Exercise 4.1: equality-constrained quadratic dual

Derive the dual of \\(\\min x^{2}/2\\) subject to \\(x=3\\), using multiplier \\(\\nu\\in \\mathbb{R}\\).

**Solution.** The Lagrangian is \\(L(x,\\nu)=x^{2}/2+\\nu(x-3)\\). Its minimizer in \\(x\\) is \\(x=-\\nu\\), giving \\(q(\\nu)=-\\nu^{2}/2-3\\nu\\). Maximizing this concave quadratic yields \\(\\nu^{\\star}=-3\\) and dual value \\(9/2\\). The only primal feasible point is \\(x^{\\star}=3\\), also with value \\(9/2\\), so the matching values certify optimality.

### Exercise 4.2: sign of a value-function subgradient

Let \\(p(u)=\\inf\\{f(x):g(x)\\le u\\}\\) for a convex problem. If strong duality at \\(u=0\\) has an optimal multiplier \\(\\lambda^{\\star}\\ge 0\\), prove \\(p(u)\\ge p(0)-\\lambda^{\\star}u\\) whenever the perturbed problem is meaningful.

**Solution.** Use \\(L_u(x,\\lambda^{\\star})=f(x)+\\lambda^{\\star}(g(x)-u)\\). Its infimum is \\(q_0(\\lambda^{\\star})-\\lambda^{\\star}u=p(0)-\\lambda^{\\star}u\\), by strong duality at zero. Weak duality for the problem with right side \\(u\\) gives the displayed lower bound. Thus \\(-\\lambda^{\\star}\\) is a subgradient of the convex value function at zero; relaxing the constraint cannot increase the value.

### Exercise 4.3: multiplier rescaling

The same constraint is written as \\(g(x)\\le 0\\) and \\(10g(x)\\le 0\\). Relate optimal multipliers that represent the same Lagrangian term.

**Solution.** If \\(\\lambda g(x)\\) is the original term and \\(\\mu(10g(x))\\) is the rescaled term, equality for all \\(x\\) requires \\(\\mu=\\lambda/10\\). Multiplier magnitude therefore depends on constraint scaling, although the product entering stationarity does not. Comparing raw multipliers across differently scaled formulations is meaningless.

### Exercise 4.4: redundant constraints and nonunique multipliers

Minimize \\(x^{2}\\) subject to \\(x\\ge 1\\) and \\(2x\\ge 2\\). Find all KKT multipliers under constraints \\(1-x\\le 0\\), \\(2-2x\\le 0\\).

**Solution.** The solution is \\(x^{\\star}=1\\). Stationarity is \\(2-\\lambda_1-2\\lambda_2=0\\); feasibility and complementarity hold automatically at the active point. Hence every pair \\(\\lambda_2\\in [0,1]\\), \\(\\lambda_1=2-2\\lambda_2\\) is dual feasible and satisfies KKT. The optimizer is unique, but redundant active normals make the multiplier nonunique.

### Exercise 4.5: Slater failure without a gap

For \\(\\min x^{2}\\) subject to \\(x^{2}\\le 0\\), show that strict feasibility fails but primal and dual values still agree.

**Solution.** The only feasible point is zero, so the primal value is zero; no point satisfies \\(x^{2}<0\\). The Lagrangian is \\((1+\\lambda)x^{2}\\) for \\(\\lambda\\ge 0\\), whose infimum is zero for every such multiplier. The dual supremum is therefore zero. Slater is a sufficient condition for strong duality here, not a necessary one.

### Exercise 4.6: primal-dual interval

A convex minimization algorithm returns a feasible point of value \\(7.03\\) and a dual-feasible point of value \\(6.98\\). State the certified interval and the sharpest absolute suboptimality conclusion.

**Solution.** Weak duality gives \\(6.98\\le p^{\\star}\\le 7.03\\). The feasible point is at most \\(7.03-6.98=0.05\\) above the optimum. This conclusion requires genuine primal and dual feasibility; small residuals without error bounds would not certify the displayed interval.

### Exercise 4.7: complementarity as activity information

Suppose \\(\\lambda\\ge 0\\), \\(g(x)\\le 0\\), and \\(\\lambda g(x)=0\\). What follows when \\(\\lambda>0\\), and what does \\(\\lambda=0\\) fail to determine?

**Solution.** If \\(\\lambda>0\\), division gives \\(g(x)=0\\), so the constraint is active. If \\(\\lambda=0\\), complementarity holds whether \\(g(x)<0\\) or \\(g(x)=0\\); the constraint may be inactive or active with zero multiplier. The converse “active implies positive multiplier” is false without additional nondegeneracy.

### Exercise 4.8: a dual infeasibility certificate

Prove the system \\(x\\ge 1\\), \\(x\\le 0\\) infeasible by finding nonnegative weights that combine its inequalities into a contradiction.

**Solution.** Write the constraints as \\(1-x\\le 0\\) and \\(x\\le 0\\). Give each weight one and add: \\((1-x)+x\\le 0\\), hence \\(1\\le 0\\). Because any feasible \\(x\\) would preserve inequalities under nonnegative combination, the contradiction is a certificate of infeasibility. Its validity can be checked without searching for \\(x\\).

### Exercise 4.9: dual unboundedness and primal status

Derive the Lagrange dual of \\(\\min 0\\) subject to \\(1-x\\le 0\\) and \\(x\\le 0\\), and interpret it.

**Solution.** With multipliers \\(\\lambda_1,\\lambda_2\\ge 0\\), \\(L=\\lambda_1+(\\lambda_2-\\lambda_1)x\\). Its infimum is finite only if \\(\\lambda_1=\\lambda_2\\), then equals \\(\\lambda_1\\). Maximizing over equal nonnegative multipliers is unbounded above. Weak duality rules out a finite feasible primal value; here the primal is infeasible. Dual unboundedness alone must be interpreted under the exact primal-dual construction.

### Exercise 4.10: perturbing an equality

Let \\(p(u)=\\min\\{x^{2}/2:x=u\\}\\). Compute \\(p\\), its derivative, and the equality multiplier at parameter \\(u\\) under Lagrangian \\(x^{2}/2+\\nu(x-u)\\).

**Solution.** Feasibility forces \\(x=u\\), so \\(p(u)=u^{2}/2\\) and \\(p'(u)=u\\). Stationarity gives \\(x+\\nu=0\\), hence \\(\\nu^{\\star}=-u\\). Because the parameter appears as \\(-\\nu u\\) in the Lagrangian, the value derivative is \\(-\\nu^{\\star}=u\\). The sign follows from the chosen perturbation convention.

### Exercise 4.11: sensitivity kink

Compute \\(p(u)=\\min\\{x^{2}:x\\ge u\\}\\) and its one-sided derivatives at \\(u=0\\).

**Solution.** If \\(u\\le 0\\), zero is feasible and \\(p(u)=0\\). If \\(u>0\\), the closest feasible point to zero is \\(x=u\\), so \\(p(u)=u^{2}\\). Both one-sided derivatives at zero are zero, so \\(p\\) is differentiable there, though its second derivative jumps. This example warns that a change in active set need not create a first-derivative kink.

### Exercise 4.12: an actual value-function kink

Compute \\(p(u)=\\min\\{x:x\\ge u, x\\ge 0\\}\\) and its subdifferential at \\(u=0\\).

**Solution.** Feasibility requires \\(x\\ge \\max(u,0)\\), and the increasing objective is minimized at that lower endpoint. Thus \\(p(u)=\\max(u,0)\\). Its left slope at zero is zero and right slope is one, so \\(\\partial p(0)=[0,1]\\). A unique derivative cannot be reported at the active-set transition.

### Exercise 4.13: Fenchel dual of quadratic regularization

Derive a scalar dual for \\(\\min_x (x-b)^{2}/2+\\alpha\\lvert x\\rvert\\) using \\(\\alpha\\lvert x\\rvert=\\sup_{\\lvert s\\rvert\\le \\alpha} sx\\).

**Solution.** Interchanging min and sup is valid here by closed convex finite-dimensional duality. For fixed \\(s\\), minimize \\((x-b)^{2}/2+sx\\); stationarity gives \\(x=b-s\\) and value \\(bs-s^{2}/2\\). The dual is \\(\\max_{\\lvert s\\rvert\\le \\alpha} bs-s^{2}/2\\), solved by projecting \\(b\\) onto \\([-\\alpha,\\alpha]\\). The primal relation \\(x^{\\star}=b-s^{\\star}\\) yields soft thresholding.

### Exercise 4.14: approximate certificate with residual allowance

Suppose a dual formula is \\(q(y)=-\\lVert y\\rVert^{2}/2\\) subject to \\(A^{\\mathsf T}y=c\\). A computed \\(\\hat{y}\\) has \\(\\lVert A^{\\mathsf T}\\hat{y}-c\\rVert=10^{-3}\\). May \\(q(\\hat{y})\\) be used directly as a certified lower bound?

**Solution.** No. Weak duality applies to dual-feasible points, and \\(\\hat{y}\\) is not known to satisfy the equality. One needs a rigorous correction to a feasible \\(y\\), or an error theorem converting residual and conditioning information into a safe degraded bound. Merely printing more digits or observing a small residual does not restore the hypothesis.

## Chapter 5: Gradient, Newton, and quasi-Newton methods

### Exercise 5.1: one descent-lemma step

Let \\(f\\) have \\(L\\)-Lipschitz gradient. Prove that the step \\(x^+=x-(1/L)\\nabla f(x)\\) satisfies \\(f(x^+)\\le f(x)-\\lVert \\nabla f(x)\\rVert^{2}/(2L)\\).

**Solution.** The descent lemma gives \\(f(x+s)\\le f(x)+\\nabla f(x)^{\\mathsf T}s+(L/2)\\lVert s\\rVert^{2}\\). Substitute \\(s=-\\nabla f(x)/L\\). The linear term is \\(-\\lVert \\nabla f(x)\\rVert^{2}/L\\) and the quadratic term is \\(\\lVert \\nabla f(x)\\rVert^{2}/(2L)\\), yielding the claim. The global Lipschitz-gradient hypothesis on the relevant segment licenses the model.

### Exercise 5.2: exact quadratic iteration

Apply gradient descent with step \\(\\alpha\\) to \\(f(x)=\\lambda x^{2}/2\\), \\(\\lambda>0\\). Derive \\(x_k\\) and the convergence condition.

**Solution.** The update is \\(x_{k+1}=(1-\\alpha \\lambda)x_k\\), hence \\(x_k=(1-\\alpha \\lambda)^k x_0\\). It converges to zero for every start exactly when \\(\\lvert 1-\\alpha \\lambda\\rvert<1\\), or \\(0<\\alpha<2/\\lambda\\). At the endpoints it either stagnates or oscillates, and outside it diverges.

### Exercise 5.3: audit a small-gradient counterexample request

Can a differentiable convex function on finite-dimensional space have a unique minimizer \\(x^{\\star}\\) and a sequence with distance from \\(x^{\\star}\\) tending to infinity while gradient norm tends to zero? Prove your answer, then show why convexity is load-bearing.

**Solution.** No. On the unit sphere about \\(x^{\\star}\\), continuity and uniqueness give a positive minimum gap \\(\\delta\\). Convexity along each ray implies \\(f(x)-f(x^{\\star})\\ge \\delta\\lVert x-x^{\\star}\\rVert\\) when the distance is at least one. The supporting inequality gives \\(f(x)-f(x^{\\star})\\le \\nabla f(x)^{\\mathsf T}(x-x^{\\star})\\le \\lVert \\nabla f(x)\\rVert \\lVert x-x^{\\star}\\rVert\\), hence \\(\\lVert \\nabla f(x)\\rVert\\ge \\delta\\). Without convexity, \\(f(x)=x^{2}/(1+x^{2})\\) has unique minimizer zero while \\(f'(x)=2x/(1+x^{2})^{2}\\) tends to zero at infinity.

### Exercise 5.4: backtracking termination

Assume \\(\\nabla f\\) is \\(L\\)-Lipschitz and backtracking tests \\(f(x-\\alpha g)\\le f(x)-c \\alpha\\lVert g\\rVert^{2}\\) with \\(g=\\nabla f(x)\\) and \\(0<c<1\\). Show every \\(\\alpha\\le 2(1-c)/L\\) passes.

**Solution.** The descent lemma yields \\(f(x-\\alpha g)\\le f(x)-\\alpha\\lVert g\\rVert^{2}+(L \\alpha^{2}/2)\\lVert g\\rVert^{2}\\). This is at most \\(f(x)-c \\alpha\\lVert g\\rVert^{2}\\) when \\(1-L \\alpha/2\\ge c\\), exactly the stated bound. Geometric reduction of a positive trial step must eventually cross that threshold.

### Exercise 5.5: Newton solves a quadratic once

For \\(f(x)=x^{\\mathsf T}Ax/2-b^{\\mathsf T}x\\) with symmetric positive-definite \\(A\\), show that a full Newton step reaches the minimizer from any start.

**Solution.** The gradient is \\(Ax-b\\) and Hessian is the constant matrix \\(A\\). Newton gives \\(x^+=x-A^{-1}(Ax-b)=A^{-1}b\\). Positive definiteness makes \\(A\\) invertible and \\(f\\) strictly convex, so this point is the unique global minimizer. Inexact solves or nonquadratic curvature remove the one-step conclusion.

### Exercise 5.6: Newton direction may ascend

At \\(x=1\\), compute the Newton direction for \\(f(x)=x^{4}-3x^{2}\\) and decide whether it is a descent direction.

**Solution.** We have \\(f'(1)=4-6=-2\\) and \\(f''(1)=12-6=6\\), so \\(p=-f'/f''=1/3\\). The directional derivative is \\(f'(1)p=-2/3<0\\), so it descends here. At \\(x=0.5\\), \\(f'=-2.5\\) and \\(f''=-3\\); then \\(p=-5/6\\) and \\(f'p>0\\), an ascent direction. Indefinite curvature requires a safeguard.

### Exercise 5.7: regularized Newton direction

If \\(H\\) is symmetric and \\(H+\\tau I\\) is positive definite, show \\(p=-(H+\\tau I)^{-1}g\\) is a descent direction whenever \\(g\\ne 0\\).

**Solution.** Let \\(B=H+\\tau I\\). Then \\(g^{\\mathsf T}p=-g^{\\mathsf T}B^{-1}g<0\\) because \\(B^{-1}\\) is positive definite and \\(g\\) is nonzero. Positive definiteness, not merely invertibility, supplies the strict sign. A line search can then globalize the direction.

### Exercise 5.8: conditioning and gradient descent

For \\(f(x)= (x_1^{2}+\\kappa x_2^{2})/2\\) with \\(\\kappa\\ge 1\\), use step \\(1/\\kappa\\). Give the two coordinate contraction factors.

**Solution.** The update is \\(x_1^+=(1-1/\\kappa)x_1\\) and \\(x_2^+=0\\). The high-curvature coordinate is solved immediately, while the low-curvature coordinate contracts by \\(1-1/\\kappa\\), close to one when \\(\\kappa\\) is large. The condition number therefore predicts slow worst-direction progress.

### Exercise 5.9: diagonal rescaling

Rescale the quadratic in Exercise 5.8 using \\(z_1=x_1\\), \\(z_2=\\sqrt{\\kappa}x_2\\). What is the new Hessian?

**Solution.** Substitution gives \\(f=(z_1^{2}+z_2^{2})/2\\), whose Hessian in \\(z\\) coordinates is the identity. Its condition number is one. This does not change the underlying objective values, but it changes the geometry seen by an unscaled gradient algorithm.

### Exercise 5.10: BFGS curvature condition

For a \\(\\mu\\)-strongly convex differentiable function, prove that \\(s^{\\mathsf T}y\\ge \\mu\\lVert s\\rVert^{2}>0\\) when \\(s=x^+-x\\ne 0\\) and \\(y=\\nabla f(x^+)-\\nabla f(x)\\).

**Solution.** Strong monotonicity of the gradient gives \\((\\nabla f(x^+)-\\nabla f(x))^{\\mathsf T}(x^+-x)\\ge \\mu\\lVert x^+-x\\rVert^{2}\\). This is exactly \\(s^{\\mathsf T}y\\ge \\mu\\lVert s\\rVert^{2}\\). Since \\(\\mu>0\\) and \\(s\\ne 0\\), the BFGS curvature denominator is strictly positive.

### Exercise 5.11: secant equation in one dimension

In one dimension, an inverse-Hessian approximation \\(B\\) must satisfy \\(By=s\\). If \\(y\\ne 0\\), find \\(B\\) and interpret a negative result.

**Solution.** Necessarily \\(B=s/y\\). If \\(sy>0\\), this scalar inverse-curvature estimate is positive. If \\(sy<0\\), it is negative and cannot represent the inverse of a positive-definite local Hessian. A positive-definite quasi-Newton update therefore needs a curvature safeguard or modified pair.

### Exercise 5.12: directional derivative audit

For \\(f(x,y)=\\sin(xy)+x^{2}\\), compute \\(\\nabla f(1,0)^{\\mathsf T}v\\) for \\(v=(2,-1)\\) and compare it with the derivative of \\(\\phi(t)=f((1,0)+tv)\\) at zero.

**Solution.** The gradient is \\((y \\cos(xy)+2x, x \\cos(xy))\\), hence \\((2,1)\\) at \\((1,0)\\), and its product with \\(v\\) is \\(3\\). Directly, \\(\\phi(t)=\\sin((1+2t)(-t))+(1+2t)^{2}\\); differentiating at zero gives \\(-1+4=3\\). Agreement is a necessary local audit, not a universal proof that an implementation is correct.

### Exercise 5.13: stopping by objective decrease can fail

Show that the rule “stop when \\(\\lvert f(x_{k+1})-f(x_k)\\rvert\\le 10^{-6}\\)” may stop far from stationarity merely because the step is tiny.

**Solution.** For \\(f(x)=x^{2}/2\\), take \\(x_k=1\\) and gradient step \\(\\alpha=10^{-8}\\). Then \\(x_{k+1}=1-10^{-8}\\), and the objective change is about \\(10^{-8}\\), below tolerance, while \\(\\lvert f'(x_k)\\rvert=1\\). A useful stopping contract must inspect stationarity and explain scaling, not only successive objective values.

### Exercise 5.14: Polyak–Lojasiewicz decrease

Assume \\(f\\) is \\(L\\)-smooth and satisfies \\(\\lVert \\nabla f(x)\\rVert^{2}\\ge 2\\mu(f(x)-f^{\\star})\\). Show a step of size \\(1/L\\) contracts the objective gap by at most \\(1-\\mu/L\\).

**Solution.** Exercise 5.1 gives \\(f(x^+)-f^{\\star}\\le f(x)-f^{\\star}-\\lVert \\nabla f(x)\\rVert^{2}/(2L)\\). The stated inequality makes the subtracted term at least \\((\\mu/L)(f(x)-f^{\\star})\\). Therefore \\(f(x^+)-f^{\\star}\\le (1-\\mu/L)(f(x)-f^{\\star})\\). Convexity is not required once the PL inequality and smoothness are explicitly assumed.

## Chapter 6: Accelerated and proximal methods

### Exercise 6.1: shifted soft threshold

Compute \\(\\operatorname{prox}_{\\lambda\\lvert \\cdot -a\\rvert}(v)\\) for \\(\\lambda>0\\).

**Solution.** Substitute \\(u=x-a\\) and \\(w=v-a\\). The defining problem becomes \\(\\min_u \\lambda\\lvert u\\rvert+(u-w)^{2}/2\\), whose solution is \\(\\operatorname{sign}(w)\\max(\\lvert w\\rvert-\\lambda,0)\\). Thus the required proximal point is \\(a+\\operatorname{sign}(v-a)\\max(\\lvert v-a\\rvert-\\lambda,0)\\). The quadratic term ensures uniqueness.

### Exercise 6.2: proximal optimality condition

For proper closed convex \\(g\\) and \\(\\alpha>0\\), prove \\(p=\\operatorname{prox}_{\\alpha g}(v)\\) if and only if \\((v-p)/\\alpha\\in \\partial g(p)\\).

**Solution.** The defining objective \\(g(x)+\\lVert x-v\\rVert^{2}/(2\\alpha)\\) is strongly convex for \\(\\alpha>0\\). Its necessary and sufficient optimality condition is \\(0\\in \\partial g(p)+(p-v)/\\alpha\\), which rearranges to the claim. Strong convexity also makes \\(p\\) unique.

### Exercise 6.3: projection onto the nonnegative orthant

Compute \\(\\operatorname{prox}_{\\delta_C}(v)\\) for \\(C=\\mathbb{R}_+^n\\), where \\(\\delta_C\\) is the convex indicator.

**Solution.** The indicator restricts the proximal minimization to \\(x\\ge 0\\), so it is Euclidean projection onto the orthant. Coordinates separate, and each minimizes \\((x_i-v_i)^{2}\\) over \\(x_i\\ge 0\\). Therefore \\(p_i=\\max(v_i,0)\\). The formula is exact in Euclidean geometry.

### Exercise 6.4: fixed points and composite optimality

Let \\(f\\) be convex differentiable, let \\(g\\) be proper closed convex, and let \\(\\alpha>0\\). Show \\(x=\\operatorname{prox}_{\\alpha g}(x-\\alpha \\nabla f(x))\\) if and only if \\(0\\in \\nabla f(x)+\\partial g(x)\\).

**Solution.** Apply Exercise 6.2 with \\(v=x-\\alpha \\nabla f(x)\\) and \\(p=x\\). It gives \\(-\\nabla f(x)\\in \\partial g(x)\\), exactly the composite first-order inclusion. Convexity then makes the fixed point a global minimizer, provided a minimizer exists.

### Exercise 6.5: one lasso coordinate step

For \\(f(x)= (x-4)^{2}/2\\), \\(g(x)=2\\lvert x\\rvert\\), take proximal-gradient step size \\(\\alpha=1/2\\) from \\(x=0\\). Compute the new point.

**Solution.** The gradient is \\(x-4\\), so the forward point is \\(0-(1/2)(-4)=2\\). The prox parameter for \\(g\\) is \\(\\alpha\\cdot 2=1\\); soft thresholding gives \\(x^+=\\operatorname{sign}(2)\\max(2-1,0)=1\\). This is one step, not yet the exact minimizer, which is \\(2\\).

### Exercise 6.6: gradient-mapping certificate

For convex differentiable \\(f\\), proper closed convex \\(g\\), and \\(\\alpha>0\\), define \\(G_\\alpha(x)=(x-\\operatorname{prox}_{\\alpha g}(x-\\alpha \\nabla f(x)))/\\alpha\\). Prove \\(G_\\alpha(x)=0\\) exactly at composite stationary points.

**Solution.** \\(G_\\alpha(x)=0\\) means the proximal point equals \\(x\\). By Exercise 6.4 this is equivalent to \\(0\\in \\nabla f(x)+\\partial g(x)\\). Thus its norm is a stationarity diagnostic with the declared step and scaling; an objective difference alone does not have this exact fixed-point meaning.

### Exercise 6.7: proximal point for a quadratic

For \\(g(x)=\\mu x^{2}/2\\) with \\(\\mu>0\\) and \\(\\alpha>0\\), compute \\(\\operatorname{prox}_{\\alpha g}(v)\\) and its Lipschitz factor.

**Solution.** Stationarity gives \\(\\mu x+(x-v)/\\alpha=0\\), so \\(x=v/(1+\\alpha \\mu)\\). The map is linear with Lipschitz factor \\(1/(1+\\alpha \\mu)<1\\) for \\(\\alpha,\\mu>0\\). Strong convexity turns the usual nonexpansive behavior into a contraction.

### Exercise 6.8: Moreau envelope of an indicator

Let \\(g=\\delta_C\\) for a nonempty closed convex set \\(C\\), and let \\(\\alpha>0\\). Identify its Moreau envelope \\(g_\\alpha(v)\\).

**Solution.** By definition, \\(g_\\alpha(v)=\\inf_x\\{\\delta_C(x)+\\lVert x-v\\rVert^{2}/(2\\alpha)\\}\\). Only \\(x\\in C\\) contribute, and the minimum squared distance is \\(\\operatorname{dist}(v,C)^{2}\\). Hence \\(g_\\alpha(v)=\\operatorname{dist}(v,C)^{2}/(2\\alpha)\\), attained at the unique Euclidean projection.

### Exercise 6.9: why extrapolation need not descend

For \\(f(x)=x^{2}/2\\), take two iterates \\(x_{k-1}=0\\), \\(x_k=1\\) and extrapolate \\(y_k=x_k+\\beta(x_k-x_{k-1})\\) with \\(\\beta>0\\). Compare objective values.

**Solution.** The extrapolated point is \\(1+\\beta\\), so \\(f(y_k)=(1+\\beta)^{2}/2>1/2=f(x_k)\\). Momentum may increase the objective even on the simplest convex quadratic. Accelerated rate proofs control a potential or a designated sequence, not necessarily monotonicity of every extrapolated point.

### Exercise 6.10: a function-value restart

State a deterministic restart rule motivated by Exercise 6.9 and its limited guarantee.

**Solution.** One rule is: if a proposed accelerated accepted iterate has objective larger than the previous accepted iterate, discard the extrapolation, reset momentum to zero, and take the basic proximal-gradient step. This enforces the chosen acceptance comparison if that basic step is itself descent under the step-size hypotheses. It does not by itself prove an accelerated rate.

### Exercise 6.11: inexact prox residual

Let \\(g\\) be proper closed convex and \\(\\alpha>0\\). Suppose \\(\\tilde{p}\\) satisfies \\(r\\in \\partial g(\\tilde{p})+(\\tilde{p}-v)/\\alpha\\) with \\(\\lVert r\\rVert\\le \\eta\\). Interpret the certificate.

**Solution.** Exact proximal optimality would have residual zero. The inclusion says \\(\\tilde{p}\\) is stationary for the strongly convex proximal subproblem up to a norm-bounded perturbation \\(r\\). By strong monotonicity of its subdifferential, its distance to the exact prox is at most \\(\\alpha \\eta\\). A convergence theorem must control how such errors accumulate.

### Exercise 6.12: subgradient versus proximal stability

For minimizing \\(\\lvert x\\rvert\\), compare the subgradient step from \\(x=\\varepsilon>0\\) with step size \\(\\alpha>\\varepsilon\\) to the proximal step with the same \\(\\alpha\\).

**Solution.** A subgradient is \\(1\\), so the explicit step is \\(\\varepsilon-\\alpha<0\\), overshooting zero. The proximal step is soft thresholding: \\(\\max(\\varepsilon-\\alpha,0)=0\\). The implicit proximal treatment resolves the kink exactly, while a constant explicit subgradient step can oscillate across it.

### Exercise 6.13: averaged iterate bound interpretation

An algorithm proves \\(F(\\bar{x_k})-F^{\\star}\\le C/k\\) for \\(\\bar{x_k}=(1/k)\\sum_{i=1}^k x_i\\). Does the theorem bound \\(F(x_k)-F^{\\star}\\)?

**Solution.** Not without an additional argument. The conclusion concerns the averaged point, a different output from the last iterate. Convexity may be used in deriving the average's bound, but it does not automatically transfer the same bound to \\(x_k\\). The implementation and report must return the iterate named in the theorem.

### Exercise 6.14: allowable forward step

For \\(f(x)=\\lambda x^{2}/2\\) with \\(\\lambda>0\\) and \\(g=0\\), proximal gradient reduces to gradient descent. Determine the nonexpansive range of its update map.

**Solution.** The map is \\(T(x)=(1-\\alpha \\lambda)x\\), with Lipschitz factor \\(\\lvert 1-\\alpha \\lambda\\rvert\\). It is nonexpansive exactly when \\(\\lvert 1-\\alpha \\lambda\\rvert\\le 1\\), or \\(0\\le \\alpha\\le 2/\\lambda\\). Strict convergence for nonzero starts requires \\(0<\\alpha<2/\\lambda\\); the endpoints include stagnation or sign oscillation.

## Chapter 7: Automatic differentiation and linearized systems

### Exercise 7.1: forward accumulation on a graph

Let \\(u=x_1x_2\\), \\(v=\\sin u\\), and \\(F=v+x_1^{2}\\). At \\(x=(1,2)\\), compute the JVP in direction \\(d=(3,-1)\\) by forward accumulation.

**Solution.** Primal values are \\(u=2\\), \\(v=\\sin 2\\). Tangents are \\(\\dot{u}=d_1x_2+x_1d_2=3\\cdot 2-1=5\\), \\(\\dot{v}=\\cos(2)\\dot{u}=5\\cos2\\), and \\(\\dot{F}=\\dot{v}+2x_1d_1=5\\cos2+6\\). Each tangent follows the same graph order as the primal computation.

### Exercise 7.2: reverse accumulation

For the graph in Exercise 7.1, derive the full gradient symbolically by a reverse sweep.

**Solution.** Seed \\(\\bar{F}=1\\). The addition gives \\(\\bar{v}=1\\) and contributes \\(2x_1\\) directly to \\(\\bar{x_1}\\). Through \\(v=\\sin u\\), \\(\\bar{u}=\\cos u\\). Through \\(u=x_1x_2\\), contributions are \\(\\bar{x_1}=x_2 \\cos(x_1x_2)+2x_1\\) and \\(\\bar{x_2}=x_1 \\cos(x_1x_2)\\). Their product with any direction reproduces the forward JVP.

### Exercise 7.3: JVP versus VJP dimensions

If \\(F:\\mathbb{R}^{n}\\to \\mathbb{R}^{m}\\), state the dimensions and mathematical meanings of \\(J_F(x)d\\) and \\(J_F(x)^{\\mathsf T}w\\).

**Solution.** For \\(d\\in \\mathbb{R}^{n}\\), the JVP lies in \\(\\mathbb{R}^{m}\\) and is the directional derivative of every output along one input direction. For \\(w\\in \\mathbb{R}^{m}\\), the VJP lies in \\(\\mathbb{R}^{n}\\) and is the gradient of the scalar \\(w^{\\mathsf T}F(x)\\). Forward mode naturally propagates the former; reverse mode naturally propagates the latter.

### Exercise 7.4: shared-subexpression accounting

Let \\(u=x^{2}\\) and \\(F=u+u^{2}\\). Compute \\(dF/dx\\) and explain the error from treating the two appearances of \\(u\\) as independent.

**Solution.** The adjoint of \\(u\\) receives contributions \\(1\\) from the first term and \\(2u\\) from the square, so \\(\\bar{u}=1+2u\\). Therefore \\(F'(x)=(1+2x^{2})2x=2x+4x^{3}\\). Dropping either contribution violates the reverse-mode rule that adjoints from all outgoing edges must be summed.

### Exercise 7.5: a branch boundary

For \\(F(x)=x^{2}\\) if \\(x\\ge 0\\) and \\(F(x)=-x\\) otherwise, give the derivative away from zero and decide differentiability at zero.

**Solution.** For \\(x>0\\), \\(F'(x)=2x\\); for \\(x<0\\), \\(F'(x)=-1\\). At zero the right derivative is zero and the left derivative is \\(-1\\), so no derivative exists. AD through the executed \\(x\\ge 0\\) branch may return zero at the boundary, but that branch derivative is not a derivative of the mathematical piecewise function.

### Exercise 7.6: derivative through a recurrence

Let \\(z_0=\\theta\\) and \\(z_{k+1}=z_k^{2}+\\theta\\). Compute \\(\\mathrm{d}z_2/\\mathrm{d}\\theta\\) by forward recurrence.

**Solution.** Tangents satisfy \\(\\dot{z_0}=1\\) and \\(\\dot{z}_{k+1}=2z_k \\dot{z_k}+1\\). Since \\(z_1=\\theta^{2}+\\theta\\), \\(\\dot{z_1}=2\\theta+1\\). Then \\(z_2=(\\theta^{2}+\\theta)^{2}+\\theta\\) and \\(\\dot{z_2}=2(\\theta^{2}+\\theta)(2\\theta+1)+1\\). The loop count is part of the differentiated program.

### Exercise 7.7: implicit scalar derivative

The positive solution \\(z(\\theta)\\) satisfies \\(z^{2}+\\theta z-1=0\\). Derive \\(\\mathrm{d}z/\\mathrm{d}\\theta\\) wherever the implicit-function hypothesis holds.

**Solution.** Differentiate: \\((2z+\\theta)z'+z=0\\), so \\(z'=-z/(2z+\\theta)\\). The formula requires \\(2z+\\theta\\ne 0\\), the scalar nonsingularity condition. For the positive root and real \\(\\theta\\), \\(2z+\\theta=\\sqrt{\\theta^{2}+4}>0\\), so it holds globally on that branch.

### Exercise 7.8: adjoint through a linear solve

Let \\(A(\\theta)z=b(\\theta)\\) with invertible \\(A\\), and \\(J=c^{\\mathsf T}z\\). Derive an adjoint formula for \\(\\mathrm{d}J/\\mathrm{d}\\theta\\).

**Solution.** Differentiating the solve gives \\(Az'=b'-A'z\\). Rather than forming \\(z'\\), solve \\(A^{\\mathsf T}\\lambda=c\\). Then \\(J'=c^{\\mathsf T}z'=\\lambda^{\\mathsf T}Az'=\\lambda^{\\mathsf T}(b'-A'z)\\). Invertibility of \\(A\\) licenses both the state and adjoint solves.

### Exercise 7.9: Hessian-vector product

For \\(f(x)=\\log(1+e^{a^{\\mathsf T}x})\\), derive \\(\\nabla^{2} f(x)v\\) without forming a matrix.

**Solution.** Let \\(s=a^{\\mathsf T}x\\) and \\(\\sigma=e^s/(1+e^s)\\). Then \\(\\nabla f=\\sigma a\\) and \\(\\nabla^{2}f=\\sigma(1-\\sigma)aa^{\\mathsf T}\\). Applying it gives \\(\\nabla^{2}f(x)v=\\sigma(1-\\sigma)a(a^{\\mathsf T}v)\\). The computation needs two inner products/scalar operations and one scaled vector.

### Exercise 7.10: centered-difference order

Assuming \\(\\phi\\) has three continuous derivatives near zero, show \\([\\phi(h)-\\phi(-h)]/(2h)=\\phi'(0)+\\mathcal{O}(h^{2})\\).

**Solution.** Taylor expansions give \\(\\phi(\\pm h)=\\phi(0)\\pm h\\phi'(0)+(h^{2}/2)\\phi''(0)\\pm (h^{3}/6)\\phi'''(\\xi_\\pm)\\). Subtracting cancels constant and quadratic terms; division by \\(2h\\) leaves \\(\\phi'(0)\\) plus a term bounded by a constant times \\(h^{2}\\). Floating-point cancellation adds a separate small-\\(h\\) error not represented by this truncation analysis.

### Exercise 7.11: a blind coordinate check

Why can testing only coordinate directions miss a wrong gradient implementation? Give a two-dimensional error that one particular coordinate test misses.

**Solution.** If only \\(e_1\\) is tested, any error orthogonal to it is invisible. For example, true gradient \\((1,2)\\) and returned gradient \\((1,9)\\) have the same dot product with \\(e_1\\). Testing several fixed coordinates is better, while random normalized directions reduce systematic blind spots; neither finite strategy proves correctness on all inputs.

### Exercise 7.12: nondifferentiable primitive contract

At \\(x=0\\), what must a library contract say before differentiating \\(abs(x)\\) or \\(\\max(x,0)\\)?

**Solution.** The classical derivative does not exist for either primitive at zero. A library may return a chosen subgradient, a branch derivative, an interval, or an error, but it must name that convention. Downstream optimization claims must then match it; calling the returned number “the derivative” without qualification is false.

### Exercise 7.13: differentiating a KKT system

For equality-constrained stationarity \\(\\nabla_x f(x,\\theta)+A^{\\mathsf T}\\nu=0\\), \\(Ax=b(\\theta)\\), write the linear system for \\((x',\\nu')\\) when \\(A\\) is constant.

**Solution.** Differentiation gives \\(H x'+A^{\\mathsf T}\\nu'=-\\nabla^{2}_{x \\theta}f\\) and \\(Ax'=b'\\), where \\(H=\\nabla^{2}_{xx}f\\) at the solution. Thus

\\(\\begin{bmatrix}H & A^{\\mathsf T} \\\\ A & 0\\end{bmatrix}[x';\\nu']=[-\\nabla^{2}_{x \\theta}f;b']\\).

The formula requires nonsingularity of this KKT matrix and stability of the active/equality structure.

### Exercise 7.14: tape mutation failure

Explain why overwriting an intermediate needed in a reverse sweep can corrupt a derivative even when the primal output is correct.

**Solution.** Reverse rules often require primal values, such as the input to \\(\\sin\\) or both factors of a product. If an in-place operation destroys them and no equivalent value is stored or recomputed, the adjoint uses unrelated data. The primal pass may remain correct because it proceeds forward; derivative correctness needs a tape or a proved recomputation/checkpoint policy.

## Chapter 8: Constraints, KKT systems, and globalization

### Exercise 8.1: feasible directions at a corner

For \\(C=\\mathbb{R}_+^{2}\\), describe the feasible-direction cone at \\((0,0)\\) and at \\((1,0)\\).

**Solution.** At the origin, a first-order feasible direction must satisfy \\(d_1\\ge 0,d_2\\ge 0\\), so the cone is \\(\\mathbb{R}_+^{2}\\). At \\((1,0)\\), the first coordinate is locally interior and unrestricted, while the active second bound requires \\(d_2\\ge 0\\); hence the cone is \\(\\mathbb{R}\\times \\mathbb{R}_+\\).

### Exercise 8.2: KKT solution of a constrained quadratic

Minimize \\((x-2)^{2}+(y-1)^{2}\\) subject to \\(x+y\\le 1\\). Find a primal-dual KKT certificate.

**Solution.** With \\(g=x+y-1\\), stationarity is \\(2(x-2)+\\lambda=0\\), \\(2(y-1)+\\lambda=0\\). The unconstrained point violates the constraint, so it is active. Solving with \\(x+y=1\\) gives \\(\\lambda=2\\), \\(x=1\\), \\(y=0\\). Primal feasibility, \\(\\lambda\\ge 0\\), stationarity, and complementarity hold; convexity makes this a global certificate.

### Exercise 8.3: constraint qualification failure

Minimize \\(f(x)=x\\) subject to \\(g(x)=x^{2}\\le 0\\). Show the solution lacks a KKT multiplier.

**Solution.** Feasibility forces \\(x^{\\star}=0\\), so it is the global minimizer. Stationarity would require \\(f'(0)+\\lambda g'(0)=1+\\lambda\\cdot 0=0\\), impossible for any \\(\\lambda\\). The active constraint gradient vanishes, so a standard constraint qualification fails. KKT necessity cannot be invoked without its qualification.

### Exercise 8.4: complementary slackness sign audit

Minimize \\(x^{2}\\) subject to \\(x\\ge 2\\). Write the constraint in the book's \\(g\\le 0\\) convention and find the multiplier.

**Solution.** Use \\(g(x)=2-x\\le 0\\). The solution is \\(x^{\\star}=2\\). Stationarity \\(2x-\\lambda=0\\) gives \\(\\lambda^{\\star}=4\\), which is nonnegative, and complementarity holds. Writing \\(x-2\\le 0\\) would describe the opposite feasible half-line and is not a harmless sign change.

### Exercise 8.5: equality projection formula

For full-row-rank \\(A\\), derive the projection of \\(z\\) onto \\(\\{x:Ax=b\\}\\).

**Solution.** Minimize \\(\\lVert x-z\\rVert^{2}/2\\) with Lagrangian plus \\(\\nu^{\\mathsf T}(Ax-b)\\). Stationarity gives \\(x=z-A^{\\mathsf T}\\nu\\); feasibility yields \\(AA^{\\mathsf T}\\nu=Az-b\\). Full row rank makes \\(AA^{\\mathsf T}\\) invertible, so \\(x=z-A^{\\mathsf T}(AA^{\\mathsf T})^{-1}(Az-b)\\). These equations certify both feasibility and orthogonality.

### Exercise 8.6: projected-gradient fixed point

For differentiable convex \\(f\\), nonempty closed convex \\(C\\), and \\(\\alpha>0\\), prove that \\(x=P_C(x-\\alpha \\nabla f(x))\\) is equivalent to constrained first-order optimality.

**Solution.** Projection characterization gives \\((x-\\alpha \\nabla f(x)-x)^{\\mathsf T}(y-x)\\le 0\\) for every \\(y\\in C\\). Dividing by negative \\(-\\alpha\\) yields \\(\\nabla f(x)^{\\mathsf T}(y-x)\\ge 0\\). For convex differentiable \\(f\\), this variational inequality is necessary and sufficient for global minimization over \\(C\\).

### Exercise 8.7: quadratic penalty trajectory

Minimize \\(x^{2}+(\\rho/2)(x-1)^{2}\\) over \\(\\mathbb{R}\\). Find \\(x_\\rho\\) and show exact feasibility is absent at finite \\(\\rho\\).

**Solution.** Stationarity gives \\(2x+\\rho(x-1)=0\\), so \\(x_\\rho=\\rho/(\\rho+2)\\). For every finite positive \\(\\rho\\), this is strictly less than one and violates the target equality \\(x=1\\). It approaches one only as \\(\\rho\\to \\infty\\); the quadratic penalty is not an exact finite reformulation.

### Exercise 8.8: logarithmic barrier central point

Minimize \\(x-\\tau \\log x\\) over \\(x>0\\), with \\(\\tau>0\\). Find the minimizer and interpret the limit.

**Solution.** The derivative is \\(1-\\tau/x\\), so the unique stationary point is \\(x=\\tau\\); the second derivative \\(\\tau/x^{2}\\) is positive. As \\(\\tau\\downarrow 0\\), the point approaches the boundary solution of minimizing \\(x\\) over \\(x\\ge 0\\). For every positive \\(\\tau\\), the barrier iterate remains strictly feasible.

### Exercise 8.9: second-order sufficient condition

Suppose the objective and equality-constraint functions are twice continuously differentiable near a feasible point \\(x^{\\star}\\). At \\(x^{\\star}\\), suppose the constraint Jacobian \\(A\\) has full row rank, KKT holds, and \\(d^{\\mathsf T}Hd>0\\) for every nonzero \\(d\\) with \\(Ad=0\\), where \\(H\\) is the Lagrangian Hessian at \\(x^{\\star}\\). What does this certify locally?

**Solution.** The null space of \\(A\\) is the tangent space to the equality manifold. Positive curvature on every nonzero tangent direction, together with KKT and regularity, gives a strict local minimizer. It does not by itself certify global optimality unless additional structure such as convexity is present.

### Exercise 8.10: an SQP model

At \\(x_k\\), write the standard quadratic subproblem for equality-constrained \\(\\min f(x)\\) subject to \\(c(x)=0\\).

**Solution.** With gradient \\(g_k\\), symmetric Hessian or approximation \\(B_k\\), and Jacobian \\(J_k\\), solve

\\(\\min_d g_k^{\\mathsf T}d+(1/2)d^{\\mathsf T}B_kd\\) subject to \\(c(x_k)+J_kd=0\\).

The constraint is a local linearization and the objective is a local quadratic model. A merit function, filter, or trust region is still needed to globalize acceptance away from a solution.

### Exercise 8.11: merit-function conflict

Give a step that decreases \\(f(x)=x\\) but worsens feasibility for equality \\(x=0\\), and explain why objective descent alone is insufficient.

**Solution.** From \\(x=0.1\\), take step to \\(x=-1\\). The objective decreases from \\(0.1\\) to \\(-1\\), but equality residual magnitude increases from \\(0.1\\) to \\(1\\). A constrained globalization rule must balance objective and violation or enforce feasibility; unconstrained descent can move away from the feasible manifold.

### Exercise 8.12: scaled KKT residual

Why is \\(\\lVert \\nabla f(x)+J^{\\mathsf T}\\lambda\\rVert\\le 10^{-6}\\) not a coordinate-invariant stopping rule?

**Solution.** Rescaling variables, objective, or constraints rescales the gradient, Jacobian, and multipliers, changing the numerical norm without changing the underlying point. A defensible test uses declared absolute and relative scales, reports primal, dual, and complementarity components separately, and records the norms. A raw threshold alone is not an interpretable certificate.

### Exercise 8.13: active-set identification boundary

If \\(g_i(\\hat{x})=-10^{-9}\\), may one conclude constraint \\(i\\) is inactive at the exact solution?

**Solution.** No. The computed point and constraint evaluation have errors, and the exact solution could have \\(g_i(x^{\\star})=0\\). Even with exact arithmetic, a nearby approximate point may lie slightly inside an eventually active constraint. Identification requires a separation margin and an error bound, or it should be reported as provisional.

### Exercise 8.14: KKT is not globally sufficient without convexity

Give an unconstrained differentiable problem with a KKT stationary point that is not a local minimum.

**Solution.** For \\(f(x)=x^{3}\\), unconstrained KKT is simply \\(f'(x)=0\\). At \\(x=0\\), \\(f'(0)=0\\), but values are negative immediately to the left and positive to the right, so zero is not a local minimum. Convexity would make stationarity globally sufficient; without it, KKT is only a stationarity condition.

## Chapter 9: Nonsmooth and composite constrained methods

### Exercise 9.1: subdifferential of a maximum

Compute \\(\\partial f(0)\\) for \\(f(x)=\\max\\{2x,-x\\}\\).

**Solution.** Both affine pieces are active at zero, with slopes \\(2\\) and \\(-1\\). The subdifferential of a finite maximum of affine functions is the convex hull of active slopes, so \\(\\partial f(0)=[-1,2]\\). Since it contains zero and \\(f\\) is convex, zero is a global minimizer.

### Exercise 9.2: absolute affine composition

For \\(f(x)=\\lvert a^{\\mathsf T}x-b\\rvert\\), give its subdifferential at a point satisfying \\(a^{\\mathsf T}x=b\\).

**Solution.** At zero, \\(\\partial \\lvert \\cdot \\rvert=[-1,1]\\). The affine chain rule yields \\(\\partial f(x)=\\{ta:t\\in [-1,1]\\}\\). No rank hypothesis is needed for this scalar affine composition; if \\(a=0\\) and feasibility holds, the set correctly collapses to \\(\\{0\\}\\).

### Exercise 9.3: constrained subgradient certificate

Minimize \\(\\lvert x-2\\rvert\\) over \\([0,1]\\). Verify \\(0\\in \\partial f(x^{\\star})+N_C(x^{\\star})\\) at the solution.

**Solution.** The solution is \\(x^{\\star}=1\\). Since \\(1<2\\), \\(\\partial f(1)=\\{-1\\}\\). The normal cone \\(N_{[0,1]}(1)=[0,\\infty)\\) contains \\(1\\), so \\(-1+1=0\\). Convexity of both objective and feasible set makes the inclusion globally sufficient.

### Exercise 9.4: projected subgradient step

For \\(f(x)=\\lvert x\\rvert\\), \\(C=[-1,2]\\), start at \\(x=1/2\\) with step \\(\\alpha=1\\). Compute one projected subgradient step.

**Solution.** At \\(1/2\\), take the unique subgradient \\(g=1\\). The unprojected point is \\(-1/2\\), already in \\(C\\), so projection leaves it unchanged. The objective remains \\(1/2\\); a single projected subgradient step need not decrease the function, even in a convex problem.

### Exercise 9.5: diminishing-step conditions

Give a standard pair of conditions on positive subgradient steps \\(\\alpha_k\\) that allow convergence theory while avoiding a finite total travel distance.

**Solution.** A common choice requires \\(\\sum_k \\alpha_k=\\infty\\) and \\(\\sum_k \\alpha_k^{2}<\\infty\\), for example \\(\\alpha_k=1/(k+1)\\). The divergent first sum prevents steps from having insufficient total reach; square summability controls accumulated error terms. Conclusions still require convexity, bounded subgradients, and the precise theorem's iterate convention.

### Exercise 9.6: best-iterate extraction

If \\(\\sum_{k=0}^{N-1} \\alpha_k(f(x_k)-f^{\\star})\\le R\\) with \\(\\alpha_k>0\\), prove a bound for the best objective value.

**Solution.** Let \\(m=\\min_{k<N}(f(x_k)-f^{\\star})\\). Every gap is at least \\(m\\), so \\(m \\sum \\alpha_k\\le \\sum \\alpha_k(f(x_k)-f^{\\star})\\le R\\). Therefore \\(m\\le R/(\\sum \\alpha_k)\\). The proof certifies a best iterate, not necessarily the last iterate.

### Exercise 9.7: exact \\(\\ell_1\\) penalty threshold

Minimize \\(x^{2}\\) subject to \\(x=1\\). For penalty \\(x^{2}+\\rho\\lvert x-1\\rvert\\), determine when \\(x=1\\) is a minimizer.

**Solution.** At \\(x=1\\), optimality requires \\(0\\in 2+\\rho[-1,1]\\), which holds exactly when \\(\\rho\\ge 2\\). Convexity makes this sufficient. For \\(\\rho<2\\), the condition fails and the penalized minimizer differs from the constrained one. The threshold equals the magnitude of the equality multiplier under the matching sign convention.

### Exercise 9.8: proximal map of a hinge

Compute \\(\\operatorname{prox}_{\\lambda\\max(0,\\cdot)}(v)\\) for \\(\\lambda>0\\).

**Solution.** If the solution is negative, the hinge is zero and the quadratic is minimized at \\(x=v\\), valid when \\(v<0\\). If positive, stationarity gives \\(x=v-\\lambda\\), valid when \\(v>\\lambda\\). In the remaining interval \\(0\\le v\\le \\lambda\\), the kink optimality condition contains zero at \\(x=0\\). Thus the prox is \\(v\\) for \\(v<0\\), \\(0\\) for \\(0\\le v\\le \\lambda\\), and \\(v-\\lambda\\) for \\(v>\\lambda\\).

### Exercise 9.9: prox of a sum is not composition

Disprove \\(\\operatorname{prox}_{f+g}=\\operatorname{prox}_f\\circ \\operatorname{prox}_g\\) using indicators of two lines in \\(\\mathbb{R}^{2}\\).

**Solution.** Let \\(f\\) be the indicator of the x-axis and \\(g\\) the indicator of the diagonal \\(\\{(t,t)\\}\\). Their sum is the indicator of the intersection \\(\\{(0,0)\\}\\), so \\(\\operatorname{prox}_{f+g}(1,0)=(0,0)\\). But \\(\\operatorname{prox}_g(1,0)=(1/2,1/2)\\), followed by \\(\\operatorname{prox}_f(1/2,1/2)=(1/2,0)\\). The unequal outputs disprove the identity.

### Exercise 9.10: distance subgradient

For nonempty closed convex \\(C\\) and \\(x\\notin C\\), show a subgradient of \\(d_C(x)=\\operatorname{dist}(x,C)\\) is \\((x-P_Cx)/\\lVert x-P_Cx\\rVert\\).

**Solution.** Let \\(p=P_Cx\\) and \\(s=(x-p)/\\lVert x-p\\rVert\\). Projection gives \\(s^{\\mathsf T}(q-p)\\le 0\\) for every \\(q\\in C\\). For arbitrary \\(z\\), choose \\(q=P_Cz\\). Then \\(s^{\\mathsf T}(z-q)\\le \\lVert z-q\\rVert=d_C(z)\\), so \\(s^{\\mathsf T}(z-x)=s^{\\mathsf T}(z-q)+s^{\\mathsf T}(q-p)-d_C(x)\\le d_C(z)-d_C(x)\\). Rearranging gives the subgradient inequality.

### Exercise 9.11: saddle inclusion

For \\(\\min_x g(x)+h(Kx)\\), write a primal-dual saddle formulation and its optimality inclusions.

**Solution.** Using \\(h(Kx)=\\sup_y\\{y^{\\mathsf T}Kx-h^{\\star}(y)\\}\\), the saddle function is \\(g(x)+y^{\\mathsf T}Kx-h^{\\star}(y)\\). A saddle point satisfies \\(0\\in \\partial g(x)+K^{\\mathsf T}y\\) and \\(0\\in \\partial h^{\\star}(y)-Kx\\). These inclusions are a certificate under proper closed convex hypotheses and a qualification ensuring the representation and saddle attainment.

### Exercise 9.12: normal cone sum qualification

Why should one not use \\(N_{C\\cap D}(x)=N_C(x)+N_D(x)\\) without a qualification? Give a sufficient finite-dimensional condition.

**Solution.** Subdifferential sum rules can fail when domains meet only degenerately, so the right side may omit normals to the intersection. A standard sufficient condition for closed convex sets is \\(\\operatorname{ri}(C)\\cap \\operatorname{ri}(D)\\ne\\varnothing\\), where \\(\\operatorname{ri}\\) is relative interior. Under it, the indicator-function sum rule gives the normal-cone identity.

### Exercise 9.13: stationarity residual at a kink

For \\(f(x)=\\lvert x\\rvert\\), compare \\(\\lvert f'(x)\\rvert\\) near zero with \\(\\operatorname{dist}(0,\\partial f(x))\\) at zero.

**Solution.** Classical \\(f'(0)\\) does not exist, so a gradient-norm test is undefined there. For nonzero \\(x\\), the subdifferential is \\(\\{\\operatorname{sign} x\\}\\), at distance one from zero. At zero, \\(\\partial f(0)=[-1,1]\\), so the distance is zero and correctly certifies optimality. Nonsmooth stopping must use the appropriate set-valued condition.

### Exercise 9.14: bounded-domain Lipschitz certificate

Show that \\(f(x)=\\max_{1\\le i\\le m}(a_i^{\\mathsf T}x+b_i)\\) is Lipschitz with constant \\(L=\\max_i\\lVert a_i\\rVert\\).

**Solution.** Choose an active index \\(i\\) at \\(x\\). Then \\(f(x)-f(y)\\le a_i^{\\mathsf T}(x-y)\\le \\lVert a_i\\rVert\\lVert x-y\\rVert\\le L\\lVert x-y\\rVert\\). Swapping \\(x,y\\) bounds the opposite difference. Thus \\(\\lvert f(x)-f(y)\\rvert\\le L\\lVert x-y\\rVert\\). Finiteness of the maximum makes \\(L\\) finite.

## Project 1 (Chapter 2): a bounded convex certificate dossier

On the box \\(C=[-1,2]\\times [-2,1]\\), minimize

\\(f(x,y)=(x+y-1)^{2}+(x-2y)^{2}/2+(x^{2}+y^{2})/4\\).

Produce: an exact optimizer, an exact optimal value, a first-order global certificate, and a short explanation of why the box does or does not change the unconstrained answer. All work must remain within this displayed two-variable problem.

**Complete solution.** Expanding the objective gives
\\(f(x,y)=7x^2/4+13y^2/4-2x-2y+1\\): the mixed terms cancel. Therefore

\\(\\partial_x f=2(x+y-1)+(x-2y)+x/2=(7/2)x-2\\),

\\(\\partial_y f=2(x+y-1)-2(x-2y)+y/2=(13/2)y-2\\).

The Hessian is \\(H=\\begin{bmatrix}7/2 & 0 \\\\ 0 & 13/2\\end{bmatrix}\\). Its leading principal minors are \\(7/2>0\\) and \\(91/4>0\\), so \\(H\\) is positive definite and \\(f\\) is strongly convex. Stationarity gives \\(x=4/7\\) and \\(y=4/13\\). Both coordinates lie strictly inside \\(C\\), so the box normal cone is \\(\\{0\\}\\) there and the unconstrained stationary point is feasible. Strong convexity makes it the unique global constrained optimizer.

Using \\(x+y-1=-11/91\\), \\(x-2y=-4/91\\), and \\(x^{2}+y^{2}=(2704+784)/8281=3488/8281\\), the exact value is \\(121/8281+8/8281+872/8281=1001/8281=11/91\\). Independently, substituting into the expanded quadratic gives \\(1-4/7-4/13=11/91\\). The dossier certificate is: exact feasibility; positive-definite Hessian; zero gradient; and zero box normal. Each component is independently checkable, and no numerical solver status is needed.

## Project 2 (Chapter 7): bounded derivative-audit laboratory

For parameters \\((\\theta_1,\\theta_2)\\in [-1,1]^{2}\\), define \\(A(\\theta)=\\begin{bmatrix}2+\\theta_1 & \\theta_2 \\\\ \\theta_2 & 3\\end{bmatrix}\\). Let \\(z(\\theta)\\) be the optimizer of the unconstrained quadratic \\(z^{\\mathsf T}A(\\theta)z/2-(1,-1)^{\\mathsf T}z\\), and set \\(J(\\theta)=z_1^{2}+2z_2\\). Derive an adjoint gradient, prove this optimization problem is well-defined on the entire parameter box, and prescribe a bounded directional audit using only directions \\(d\\in \\{-1,1\\}^{2}\\) and step sizes \\(h\\in \\{2^{-4},...,2^{-16}\\}\\).

**Complete solution.** On the box, \\(2+\\theta_1\\ge 1\\) and

\\(\\det A=3(2+\\theta_1)-\\theta_2^{2}\\ge 3-1=2>0\\).

The symmetric matrix is therefore positive definite, so the quadratic is strongly convex and its unique optimizer is characterized by \\(A(\\theta)z=(1,-1)^{\\mathsf T}\\); every state and adjoint solve is unique. After solving for \\(z\\), set \\(c=\\nabla_zJ=(2z_1,2)^{\\mathsf T}\\) and solve \\(A^{\\mathsf T}\\lambda=c\\). Since the linear term is constant, the adjoint formula is \\(\\partial_{\\theta_i}J=-\\lambda^{\\mathsf T}(\\partial_{\\theta_i}A)z\\). Here

\\(\\partial_{\\theta_1}A=\\begin{bmatrix}1 & 0 \\\\ 0 & 0\\end{bmatrix}\\), so \\(J_{\\theta_1}=-\\lambda_1z_1\\), while \\(\\partial_{\\theta_2}A=\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}\\), so \\(J_{\\theta_2}=-(\\lambda_1z_2+\\lambda_2z_1)\\).

For an audit, choose the center and the four points \\((\\pm 1/2,\\pm 1/2)\\). Every listed \\(h\\le 1/16\\) and sign direction keeps both \\(\\theta\\pm hd\\) in the box. Compare \\(\\nabla J(\\theta)^{\\mathsf T}d\\) with \\([J(\\theta+hd)-J(\\theta-hd)]/(2h)\\). Record absolute error, relative error with a protected denominator, solve residuals, and the \\(h\\)-curve. Agreement should improve quadratically before rounding dominates. This finite audit can expose defects but cannot prove the implementation correct everywhere; the derivation and definiteness proof carry the universal claims.

## Project 3 (Chapter 9): a bounded nonsmooth primal-dual certificate

For \\(x\\in [-2,2]\\), solve

\\(\\min F(x)=\\lvert x-1\\rvert+(1/2)x^{2}\\),

then provide a subgradient-plus-normal certificate, derive a Fenchel-style dual variable for the absolute-value term, and give one proximal-gradient map whose fixed point is the optimizer.

**Complete solution.** On \\(x<1\\), the derivative of the smooth pieces is \\(-1+x\\), which is negative for all \\(x<1\\); on \\(x>1\\) it is \\(1+x>0\\). At \\(x=1\\),

\\(\\partial F(1)=1+[-1,1]=[0,2]\\),

so zero belongs to the subdifferential. The point lies in the interior of \\([-2,2]\\), whose normal cone is \\(\\{0\\}\\); therefore \\(0\\in \\partial F(1)+N_{[-2,2]}(1)\\). Convexity makes \\(x^{\\star}=1\\) globally optimal, and strong convexity from \\(x^{2}/2\\) makes it unique. The value is \\(1/2\\).

Write \\(\\lvert x-1\\rvert=\\sup_{\\lvert s\\rvert\\le 1}s(x-1)\\). Minimizing \\(x^{2}/2+sx-s\\) over the box gives unconstrained \\(x=-s\\), which is always in the box for \\(\\lvert s\\rvert\\le 1\\). The dual objective is \\(-s^{2}/2-s\\), maximized at \\(s^{\\star}=-1\\), with value \\(1/2\\); the recovered \\(x=-s^{\\star}=1\\) and matching values form a primal-dual certificate.

Finally split \\(f(x)=x^{2}/2\\) and \\(g(x)=\\lvert x-1\\rvert+\\delta_{[-2,2]}(x)\\). For any \\(\\alpha\\in (0,2)\\), the map is \\(T(x)=\\operatorname{prox}_{\\alpha g}((1-\\alpha)x)\\). At \\(x^{\\star}=1\\), proximal optimality requires \\(((1-\\alpha)-1)/\\alpha=-1\\in \\partial \\lvert x-1\\rvert\\big|_{x=1}+N_{[-2,2]}(1)=[-1,1]\\), so \\(T(1)=1\\). The fixed-point inclusion reproduces the global certificate; it is not merely a numerical observation.
`;export{e as default};