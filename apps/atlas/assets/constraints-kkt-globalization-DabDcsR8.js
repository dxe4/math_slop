var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: constraints-kkt-globalization
title: "Constraints, KKT Systems, and Globalization"
level: graduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Constraints, KKT Systems, and Globalization {#section-1-constraints-kkt-systems-and-globalization}

<a id="section-1-local-prerequisites"></a>
## Local prerequisites {#section-3-local-prerequisites}

Assume gradients, Hessians, convex sets, and Lagrangian duality. We distinguish necessary conditions, sufficient conditions, constraint qualifications, and numerical residuals.

<a id="section-5-feasible-directions-and-active-constraints"></a>
## Feasible directions and active constraints {#section-7-feasible-directions-and-active-constraints}

For inequalities \\(g_i(x)\\le 0\\), an index is active at x when \\(g_i(x)=0\\). A direction d is first-order feasible for a smooth active inequality when \\(\\nabla g_i(x)^{\\mathsf T} d\\le 0\\); equalities require zero directional change.

At a local minimizer, no feasible direction can have negative objective directional derivative. Multipliers express the objective gradient as a combination of active constraint normals when a constraint qualification makes that representation valid.

<a id="section-11-kkt-conditions"></a>
## KKT conditions {#section-13-kkt-conditions}

For the smooth problem with inequalities \\(g_i\\le 0\\) and equalities \\(h_j=0\\), Karush–Kuhn–Tucker conditions are:

1. primal feasibility: \\(g_i(x)\\le 0\\), \\(h_j(x)=0\\);
2. dual feasibility: \\(\\lambda_i\\ge 0\\);
3. stationarity: \\(\\nabla f+\\sum \\lambda_i \\nabla g_i+\\sum \\nu_j \\nabla h_j=0\\);
4. complementarity: \\(\\lambda_i g_i(x)=0\\).

**Necessary-condition statement.** At a local minimizer, KKT holds under a suitable constraint qualification such as linear independence of active constraint gradients. Without such a condition, multipliers may fail to exist.

**Sufficient-condition statement.** For a convex differentiable objective, convex inequality functions, affine equalities, and any feasible KKT point, that point is globally optimal. Strict convexity can give uniqueness of x, though multipliers need not be unique.

<a id="section-24-constraint-qualification-failure"></a>
### Constraint-qualification failure {#section-26-constraint-qualification-failure}

Minimize \\(f(x)=x\\) subject to \\(g(x)=x^{2}\\le 0\\). The only feasible point and hence minimizer is zero. Stationarity would require \\(1+\\lambda\\cdot 0=0\\), impossible. KKT necessity fails because the active constraint gradient is zero.

<a id="section-28-what-a-linearized-direction-does-and-does-not-mean"></a>
## What a linearized direction does and does not mean {#section-30-what-a-linearized-direction-does-and-does-not-mean}

The inequalities on gradients define the linearized cone, not automatically
the tangent cone of actual feasible paths. If $x_k$ are feasible, $t_k>0$
tends to zero, and $(x_k-x_*)/t_k\\to d$, differentiability implies the active
linearized inequalities and equality equations. The reverse implication can
fail. For the constraint $x^2\\le0$ at zero, the linearized inequality is
$0d\\le0$ for every d, whereas the feasible set is the singleton zero and its
only tangent direction is zero. This is why replacing feasibility by its first
derivative without a qualification can invent improving directions.

For an inactive inequality, continuity preserves its strict slack in some
neighbourhood. Only active inequalities enter the local first-order geometry.
An active inequality, however, can have zero multiplier; activity describes
the feasible boundary, whereas a multiplier describes balance with this
particular objective. These are different data.

<a id="section-45-a-necessity-proof-under-linear-independence"></a>
## A necessity proof under linear independence {#section-47-a-necessity-proof-under-linear-independence}

**Theorem 5.1 (LICQ necessity).** Let f, all inequality functions gᵢ and equality
functions hⱼ be continuously differentiable on a neighbourhood of a local
minimizer x*. Suppose the gradients of all active gᵢ together with all hⱼ
are linearly independent at x*. Then a KKT multiplier vector exists, and is
unique for that active set, with inactive inequality multipliers zero.

*Proof.* Write the active residuals and equality residuals as the first
coordinates of a new local coordinate map. Complete their independent
derivative rows by linear coordinate functions to obtain an invertible square
Jacobian. The inverse-function theorem, used here as the stated standard
multivariable-calculus input, gives a continuously differentiable inverse
chart x=ψ(u,v,w), where u are active g residuals, v are equality residuals,
and w are the remaining free coordinates. Translate the free coordinates so
the candidate is (0,0,0). In a sufficiently small chart neighbourhood all
inactive constraints stay strictly satisfied. Feasibility is therefore exactly
u≤0, v=0, with w free locally.

Let F=f∘ψ. Since both signs of a small free-coordinate change are feasible,
the derivative of F with respect to w is zero at the candidate. For an active
coordinate uᵢ, only a negative displacement is required to stay feasible.
Local minimality gives ∂F/∂uᵢ≤0 by dividing the nonnegative objective change
by that negative displacement. Define λᵢ=−∂F/∂uᵢ≥0 and νⱼ=−∂F/∂vⱼ.
Then the derivative of F+λᵀu+νᵀv is zero in every chart coordinate.
The chain rule and invertibility of the chart derivative give
$\\nabla f+\\sum\\lambda_i\\nabla g_i+\\sum\\nu_j\\nabla h_j=0$ in the original
coordinates. Set all inactive λᵢ to zero. Feasibility and complementarity
already hold. Independence of the active/equality gradients makes the
coefficients in this balance unique. $\\square$

LICQ is sufficient rather than necessary for multiplier existence. Duplicate
constraints can violate it and still admit many valid multipliers. Slater's
condition supplies a different route for convex problems, including some
with dependent active gradients. A report should name the qualification it
actually uses, rather than treating the word regular as a substitute for one.

<a id="section-82-convex-sufficiency-has-no-missing-qualification"></a>
## Convex sufficiency has no missing qualification {#section-84-convex-sufficiency-has-no-missing-qualification}

**Theorem 5.2 (KKT sufficiency).** Suppose f and gᵢ are convex and differentiable
on a common open convex domain, the equalities hⱼ are affine, and x*,λ,ν
satisfy KKT there. Then x* is a global minimizer over the feasible domain.

*Proof.* For λ≥0 the Lagrangian is convex in x: it is a nonnegative sum of
convex terms plus affine terms. Stationarity and the supporting-gradient
inequality imply $L(y,\\lambda,\\nu)\\ge L(x_*,\\lambda,\\nu)$ for every domain
point y. Complementarity and feasibility give $L(x_*,\\lambda,\\nu)=f(x_*)$.
For any feasible y, inequality signs give $L(y,\\lambda,\\nu)\\le f(y)$.
Combining these comparisons proves f(y)≥f(x*). No constraint qualification
is needed for this direction once the KKT certificate has been supplied.
Strict convexity of f on the feasible set gives uniqueness of the primal
minimizer by the midpoint argument. It says nothing by itself about uniqueness
of multipliers. $\\square$

The same argument proves that the supplied multipliers attain a zero-gap
dual bound. Thus a KKT certificate with the stated convex structure carries
more information than a numerical stationarity flag. In a nonconvex problem
the Lagrangian need not be globally minimized at its stationary point, and
that comparison is exactly where the proof can fail.

<a id="section-105-worked-constrained-quadratic"></a>
## Worked constrained quadratic {#section-107-worked-constrained-quadratic}

Minimize \\(0.5(x^{2}+y^{2})\\) subject to \\(x+y\\ge 1\\), written \\(g=1-x-y\\le 0\\). Lagrangian is

\\(L=0.5(x^{2}+y^{2})+\\lambda(1-x-y)\\).

Stationarity gives \\(x=\\lambda\\), \\(y=\\lambda\\). The unconstrained origin is infeasible, so the constraint is active: \\(1-2\\lambda=0\\). Thus \\(\\lambda=1/2\\) and \\(x=y=1/2\\). Convexity and affine constraint make this a global certificate.

<a id="section-113-projected-methods"></a>
## Projected methods {#section-115-projected-methods}

For a closed convex set C, projected gradient uses

\\(x_{\\mathrm{new}}=P_C(x-\\alpha \\nabla f(x))\\).

Projection is uniquely defined in Euclidean norm for nonempty closed convex C. The fixed-point residual

\\(G_\\alpha(x)=[x-P_C(x-\\alpha \\nabla f(x))]/\\alpha\\)

vanishes exactly at first-order constrained optima for convex differentiable problems. Ordinary gradient need not vanish at a boundary solution.

For a box, projection clips each coordinate. For a simplex, projection involves a threshold chosen so entries remain nonnegative and sum to one. Projection onto a nonconvex set can be nonunique and changes the theory.

<a id="section-127-a-projected-step-has-a-quantitative-decrease-bound"></a>
### A projected step has a quantitative decrease bound {#section-129-a-projected-step-has-a-quantitative-decrease-bound}

Let x belong to a nonempty closed convex C and let
z=P_C(x−α∇f(x)), with α>0. The projection inequality with comparison point x
gives $\\nabla f(x)^T(z-x)\\le-\\|z-x\\|^2/\\alpha$. If f has L-Lipschitz
gradient on a region containing the step segment, the descent lemma yields
$$f(z)\\le f(x)-(1/\\alpha-L/2)\\|z-x\\|^2.$$
Thus $0<\\alpha<2/L$ gives strict decrease whenever the projected step is nonzero.
This is a feasible-direction statement and does not require the ordinary
gradient to vanish at the limit. The equivalence of Gα(x)=0 with the convex
variational inequality follows by putting z=x in the full projection
characterization: $-\\nabla f(x)^T(y-x)\\le0$ for every feasible y.

<a id="section-140-worked-example-a-simplex-projection"></a>
### Worked example: a simplex projection {#section-142-worked-example-a-simplex-projection}

Project z=(2,0) onto C={x≥0:x₁+x₂=1}. Every feasible point is (t,1−t)
with 0≤t≤1. Squared distance is (t−2)²+(1−t)², whose unconstrained minimum
has t=3/2, outside the interval. The feasible minimizer is therefore p=(1,0).
For every feasible y=(t,1−t), $(z-p)^T(y-p)=t-1\\le0$, providing the
universal certificate. Merely clipping z to the nonnegative orthant would
leave (2,0), which violates the sum constraint. Different convex sets require
different projections; one cannot compose convenient clipping operations and
assume the result is the projection onto their intersection.

<a id="section-151-penalties-change-the-finite-problem"></a>
## Penalties change the finite problem {#section-153-penalties-change-the-finite-problem}

A quadratic penalty for equality \\(h(x)=0\\) minimizes

\\(f(x)+(\\rho/2)\\lVert h(x)\\rVert^{2}\\).

Finite rho generally leaves nonzero violation. Taking rho very large worsens conditioning and can create cancellation. An **exact penalty**, often based on an L1 norm, can recover constrained solutions above a threshold under assumptions, but becomes nonsmooth.

An augmented Lagrangian combines multiplier estimates and a quadratic penalty, allowing feasibility progress without sending rho immediately to an extreme. The multiplier and penalty update rules are part of the algorithmic contract.

<a id="section-161-barrier-methods"></a>
## Barrier methods {#section-163-barrier-methods}

For strict inequalities \\(g_i(x)<0\\), a logarithmic barrier solves

\\(\\min f(x)-\\mu \\sum \\log(-g_i(x))\\).

As \\(\\mu\\) tends to zero, central-path points may approach a constrained optimum under convexity and regularity. Each finite-mu point solves a different interior problem. Newton systems can be ill conditioned near the boundary; residuals must be scaled and the strict interior preserved.

<a id="section-169-sequential-local-models"></a>
## Sequential local models {#section-171-sequential-local-models}

Sequential quadratic programming approximates the Lagrangian by a quadratic and constraints by linearizations. Trust-region constrained methods restrict the model step. Globalization controls merit decrease or filter progress in objective and violation. A step may improve feasibility while increasing objective; a single scalar merit function encodes how that trade is judged.

<a id="section-173-numerical-kkt-residual"></a>
## Numerical KKT residual {#section-175-numerical-kkt-residual}

A report should give separate components:

- scaled stationarity norm;
- equality violation;
- positive part of inequality violation;
- negative part of multipliers;
- complementarity products;
- conditioning or rank of the active Jacobian.

Compressing these into one maximum can be convenient, but preserve the component table. A tiny complementarity product can arise because both terms are moderately small or because one is huge and the other tiny after poor scaling.

<a id="section-186-small-residuals-need-a-conditioning-and-scaling-interpr"></a>
## Small residuals need a conditioning and scaling interpretation {#section-188-small-residuals-need-a-conditioning-and-scaling-interpr}

Consider minimizing x²/2 subject to εx=ε, where ε is positive and
small. The exact feasible point and optimizer is x=1. At the
infeasible candidate x=0, choose equality multiplier zero. The stationarity
residual is exactly zero and the raw equality residual has magnitude ε.
Both can look excellent if the latter is compared with a fixed
unscaled tolerance. The candidate is still distance one from the feasible
set and has objective zero, below the constrained optimum one half.
It supplies no primal upper bound.

Dividing the constraint by ε leaves the feasible set unchanged and
reveals violation one. The optimal multiplier for the original constraint
is −1/ε, while the multiplier for x=1 is −1. A small residual
and a large multiplier are consistent descriptions of the same poorly
scaled equation. Reporting the original physical units and the reference
scale prevents a tolerance from changing its meaning when the equation
is multiplied by a harmless positive constant.

For a full-row-rank linear equality system Ax=b, the minimum-norm
feasibility correction is d=Aᵀ(AAᵀ)⁻¹(b−Ax). Direct multiplication proves
A(x+d)=b. A singular-value decomposition gives
$$\\|d\\|\\le\\frac{\\|b-Ax\\|}{\\sigma_{\\min}(A)},$$
where the denominator is the smallest positive singular value.
Thus residual size turns into a geometric distance bound only after
the conditioning factor is included. The scalar example has that
singular value ε, explaining its distance-one correction exactly. If
the equality rows are dependent, first specify a consistent independent
representation or use the corresponding pseudoinverse statement on the
range; the displayed inverse is then unavailable as written.

Restoring feasibility can also change the objective. With an L-smooth
objective on the correction segment, the descent lemma bounds the new
value by f(x)+∇f(x)ᵀd+L‖d‖²/2. A certificate may combine that
feasible corrected value with a genuine dual lower bound. It cannot
reuse the old infeasible objective as though no correction were needed.
For nonlinear constraints, the linear correction is only a first
model and requires remainder or convergence control before exact feasibility
is claimed.

The lesson is not that residuals are unhelpful. They are indispensable
local data whose interpretation depends on equation scales, rank and
the output being requested. Separate the algebraic residual, a justified
distance estimate and the objective bound after feasibility repair. That
separation makes a numerical KKT report reviewable without allowing one
small number to stand for every part of an optimization certificate.

<a id="section-233-second-order-conditions"></a>
## Second-order conditions {#section-235-second-order-conditions}

At a KKT point, second-order tests examine the Lagrangian Hessian on feasible or critical directions. Positive definiteness on the appropriate tangent space gives a strict local minimum under regularity. Testing the full Hessian can be too strong because constraint-normal directions are unavailable.

In nonconvex problems, satisfying second-order local conditions still does not certify global optimality.

<a id="section-239-worked-example-curvature-only-on-available-directions"></a>
### Worked example: curvature only on available directions {#section-241-worked-example-curvature-only-on-available-directions}

Minimize f(x,y)=−x²+y² subject to h(x,y)=x=0. At (0,0), the gradient is
zero and the unique equality multiplier is zero. The full objective Hessian
diag(−2,2) is indefinite. Yet every feasible point is (0,y), with objective
y²≥0, so the origin is the unique constrained minimum. The equality tangent
space consists of vectors (0,v), where the Lagrangian quadratic form is
2v²>0 for v≠0. A full-space positive-definiteness requirement would reject
a correct and simple constrained optimum.

For a precise equality-only sufficient theorem, assume twice continuous
differentiability, independent equality gradients, KKT stationarity, and
positive definiteness of the Lagrangian Hessian on the equality tangent space.
Then x* is a strict local minimum. Here is a sequential proof. If feasible
points xₖ→x* with f(xₖ)≤f(x*) existed, normalize dₖ=xₖ−x* to unit vectors
and pass to a convergent subsequence with limit v. Expanding the equalities
and dividing by ‖dₖ‖ shows ∇h(x*)v=0. On feasible points, the difference of
Lagrangian values equals the difference of objective values. Since its
gradient vanishes at x*, second-order Taylor expansion divided by ‖dₖ‖²
would imply $v^T\\nabla^2_{xx}L(x_*)v\\le0$, contrary to tangent positivity.
For inequalities, the appropriate critical cone also depends on active
multiplier signs; the equality-only proof does not authorize replacing it by
an arbitrary nullspace. General second-order inequality results are cited in
the chapter's textbook references rather than asserted by that shortcut.

<a id="section-264-common-errors"></a>
## Common errors {#section-266-common-errors}

- Applying KKT necessity without a constraint qualification.
- Requiring zero ordinary gradient at a boundary solution.
- Treating a large penalty as exact feasibility.
- Reporting only objective change while constraint violation grows.
- Using unscaled residuals for constraints with different units.

<a id="section-272-practice-with-solutions"></a>
## Practice with solutions {#section-274-practice-with-solutions}

**1. Complementarity.** If \\(g_i(x)<0\\) strictly at a KKT point, what must \\(\\lambda_i\\) be?

<details>
<summary>Hint 1</summary>

Use the complementarity product for this one index.
</details>
<details>
<summary>Hint 2</summary>

Strict slack is nonzero, so the product can vanish only through the multiplier.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Complementarity says \\(\\lambda_i g_i(x)=0\\). Since \\(g_i(x)\\) is nonzero, \\(\\lambda_i=0\\). Inactive inequalities exert no multiplier force.
</details>


**2. Box projection.** Minimize \\((x-3)^{2}\\) on \\([0,2]\\). Evaluate projected-gradient residual with \\(\\alpha=1/2\\) at \\(x=2\\).

<details>
<summary>Hint 1</summary>

Compute the unconstrained trial before projecting it.
</details>
<details>
<summary>Hint 2</summary>

The trial is three; projection onto [0,2] returns two.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Gradient is \\(-2\\); unconstrained trial is \\(2-(1/2)(-2)=3\\); projection returns 2. Thus residual is zero, correctly certifying the constrained optimum.
</details>


**3. Penalty feasibility.** Why should a report list violation as rho changes?

<details>
<summary>Hint 1</summary>

Distinguish minimizers of finite penalties from exact constrained solutions.
</details>
<details>
<summary>Hint 2</summary>

Track the original residual and the changing curvature, not just the penalized objective.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The penalized minimizer generally remains infeasible at finite rho. The table shows whether violation decreases, whether conditioning worsens, and whether objective comparisons concern the original feasible problem or changed penalized problems.
</details>

<a id="section-330-exercise-4-prove-the-convex-certificate-directly"></a>
### Exercise 4: prove the convex certificate directly {#section-332-exercise-4-prove-the-convex-certificate-directly}

For the constrained quadratic in the worked example, compute the dual
function and verify the value at λ=1/2.

<details>
<summary>Hint 1</summary>

Complete both squares in L=(x²+y²)/2+λ(1−x−y).
</details>
<details>
<summary>Hint 2</summary>

The unconstrained Lagrangian minimum has x=y=λ.
</details>
<details>
<summary>Full solution</summary>

Completing squares gives $L=((x-\\lambda)^2+(y-\\lambda)^2)/2+\\lambda-\\lambda^2$,
so q(λ)=λ−λ² for λ≥0. This concave quadratic is maximized at λ=1/2 with
value 1/4. The feasible point (1/2,1/2) has objective 1/4 too. Matching
primal and dual values proves optimality, and strict convexity proves primal
uniqueness. This also checks the sign of the constraint multiplier.
</details>

<a id="section-355-exercise-5-active-does-not-mean-positively-priced"></a>
### Exercise 5: active does not mean positively priced {#section-357-exercise-5-active-does-not-mean-positively-priced}

Minimize x²/2 subject to x≥0. Find the optimizer and every KKT multiplier.

<details>
<summary>Hint 1</summary>

Use g(x)=−x, so stationarity is x−λ=0.
</details>
<details>
<summary>Hint 2</summary>

The unconstrained minimizer is feasible and lies on the constraint boundary.
</details>
<details>
<summary>Full solution</summary>

The unique optimizer is x=0. The inequality is active, but stationarity forces
λ=0. This nonnegative multiplier satisfies complementarity. The constraint
has nonzero gradient and LICQ holds; zero price is not evidence of a failed
qualification. It means the unconstrained objective already prefers the
boundary point and has no first-order cost for a small relaxation.
</details>

<a id="section-379-exercise-6-failure-of-necessity"></a>
### Exercise 6: failure of necessity {#section-381-exercise-6-failure-of-necessity}

For min x subject to x²≤0, determine the tangent and linearized cones at zero
and show why no KKT multiplier exists.

<details>
<summary>Hint 1</summary>

The feasible set is a singleton, while the constraint derivative vanishes.
</details>
<details>
<summary>Hint 2</summary>

Stationarity would need 1+λ·0=0.
</details>
<details>
<summary>Full solution</summary>

Only x=0 is feasible, so the tangent cone is {0}. The linearized inequality
is 0d≤0, admitting every real d. The singleton point is globally optimal,
but stationarity is impossible for any finite λ. The active gradient is zero,
violating LICQ; Slater also fails because x²<0 has no solution. This shows
failure of KKT necessity, rather than failure of the optimum itself.
</details>

<a id="section-404-exercise-7-dependent-constraints"></a>
### Exercise 7: dependent constraints {#section-406-exercise-7-dependent-constraints}

Minimize x²/2 subject to x≥1 and 2x≥2. Find all optimal multipliers and
identify the failed qualification.

<details>
<summary>Hint 1</summary>

Write constraints 1−x≤0 and 2−2x≤0.
</details>
<details>
<summary>Hint 2</summary>

At x=1 stationarity requires λ₁+2λ₂=1.
</details>
<details>
<summary>Full solution</summary>

The unique primal optimizer is one. Every pair λ₂∈[0,1/2], λ₁=1−2λ₂
is nonnegative, satisfies stationarity and complementarity, and hence is an
optimal dual certificate. The active gradients −1 and −2 are dependent, so
LICQ fails. Nevertheless strict feasibility exists at x=2 and Slater gives
strong duality. A unique primal point does not force unique multipliers.
</details>

<a id="section-429-exercise-8-projected-decrease"></a>
### Exercise 8: projected decrease {#section-431-exercise-8-projected-decrease}

Assume the projected-step hypotheses with L=8 and α=1/8. Express the proved
decrease in terms of both ‖z−x‖ and the residual ‖Gα(x)‖.

<details>
<summary>Hint 1</summary>

Substitute into 1/α−L/2.
</details>
<details>
<summary>Hint 2</summary>

The step has norm α‖Gα(x)‖.
</details>
<details>
<summary>Full solution</summary>

The decrease is at least 4‖z−x‖². Since z−x=−Gα(x)/8, this is
‖Gα(x)‖²/16. The statement assumes a feasible x, an exact projection onto
a nonempty closed convex set, and the L-smoothness bound along the segment.
Approximate projection needs its own error term before this exact inequality
can be used as a numerical certificate.
</details>

<a id="section-454-exercise-9-equality-penalty"></a>
### Exercise 9: equality penalty {#section-456-exercise-9-equality-penalty}

Minimize f(x)=x²/2 subject to x=1. Solve the quadratic penalty
f(x)+(ρ/2)(x−1)² for ρ>0 and quantify its violation.

<details>
<summary>Hint 1</summary>

Differentiate the scalar strictly convex penalized objective.
</details>
<details>
<summary>Hint 2</summary>

The stationarity equation is (1+ρ)x=ρ.
</details>
<details>
<summary>Full solution</summary>

The penalized minimizer is xρ=ρ/(1+ρ), with violation |xρ−1|=1/(1+ρ).
Its original objective is below the constrained optimum 1/2, so it supplies
no feasible upper bound. The penalty Hessian is 1+ρ; in several dimensions,
only constrained directions may acquire this large curvature, creating a
large condition ratio. Vanishing violation in the limit does not imply exact
feasibility at any finite parameter.
</details>

<a id="section-480-exercise-10-stationarity-without-sufficiency"></a>
### Exercise 10: stationarity without sufficiency {#section-482-exercise-10-stationarity-without-sufficiency}

Minimize −x² over [−1,1]. Show x=0 satisfies KKT for the two box
inequalities, and explain why it is not optimal.

<details>
<summary>Hint 1</summary>

Both inequalities are inactive at zero, so complementarity sets their multipliers to zero.
</details>
<details>
<summary>Hint 2</summary>

Compare the objective value at zero with its values at the endpoints.
</details>
<details>
<summary>Full solution</summary>

Using g₁=x−1≤0 and g₂=−x−1≤0, set λ₁=λ₂=0. At x=0, primal and dual
feasibility, complementarity and stationarity all hold. Yet f(0)=0 and
f(±1)=−1, so zero is a maximum rather than a minimum. The objective is
concave, violating the convex-sufficiency theorem's main hypothesis. KKT is
an algebraic condition with conditional implications, not a universal label
for a solved optimization problem.
</details>

<a id="section-506-summary"></a>
## Summary {#section-508-summary}

Constraints change stationarity geometry. KKT conditions require regularity for necessity and convexity for global sufficiency. Projection, penalties, barriers, and local constrained models each have distinct feasibility and conditioning behavior that must be diagnosed explicitly.

<a id="section-510-source-and-verification-note"></a>
## Sources {#section-512-source-and-verification-note}

For finite-dimensional KKT conditions, see Nocedal and Wright, *Numerical Optimization*, 2nd ed. (2006), Chapter 12, or Boyd and Vandenberghe, *Convex Optimization* (2004), Section 5.5.3. The citation must be read with this chapter’s sign and constraint-qualification conventions.
`;export{e as default};