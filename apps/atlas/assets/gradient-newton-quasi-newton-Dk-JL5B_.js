var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: gradient-newton-quasi-newton
title: "Gradient, Newton, and Quasi-Newton Methods"
level: graduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Gradient, Newton, and Quasi-Newton Methods {#section-1-gradient-newton-and-quasi-newton-methods}

<a id="section-1-local-prerequisites-and-scope"></a>
## Local prerequisites and scope {#section-3-local-prerequisites-and-scope}

Assume multivariable derivatives, eigenvalues, and convexity. We derive progress guarantees and diagnose conditioning, globalization, and derivative computation.

<a id="section-5-smoothness-gives-a-descent-model"></a>
## Smoothness gives a descent model {#section-7-smoothness-gives-a-descent-model}

A differentiable function has an \\(L\\)-Lipschitz gradient if

\\(\\lVert \\nabla f(x)-\\nabla f(y)\\rVert\\le L\\lVert x-y\\rVert\\).

**Lemma 6.1 (Descent).** Under this condition on a convex region containing the segment,

\\(f(y)\\le f(x)+\\nabla f(x)^{\\mathsf T}(y-x)+(L/2)\\lVert y-x\\rVert^{2}\\).

Set \\(y=x-\\alpha \\nabla f(x)\\). Then

*Proof of the descent lemma.* Put d=y−x and integrate the derivative along
the segment:
$$f(y)-f(x)-\\nabla f(x)^Td
=\\int_0^1[\\nabla f(x+td)-\\nabla f(x)]^Td\\,dt.$$
Cauchy–Schwarz and the Lipschitz bound make the integrand at most
Lt‖d‖². Integrating gives L‖d‖²/2. The segment must remain in the region
on which this same L is valid. Thus an arbitrary local Hessian estimate does
not license a large trial step leaving that region.

For y=x−α∇f(x), substitution now gives

\\(f(y)\\le f(x)-\\alpha(1-L \\alpha/2)\\lVert \\nabla f(x)\\rVert^{2}\\).

Thus \\(0<\\alpha<2/L\\) guarantees strict decrease unless the gradient vanishes. Decrease alone does not prove convergence to a global minimum without additional structure.

<a id="section-32-rates-for-convex-objectives"></a>
## Rates for convex objectives {#section-34-rates-for-convex-objectives}

For convex \\(L\\)-smooth \\(f\\) with an attained minimizer, gradient descent with step \\(1/L\\) has objective gap of order \\(1/k\\), with a bound depending on the initial distance to a minimizer. If \\(f\\) is also \\(\\mu\\)-strongly convex, distance and objective error decrease geometrically with a factor governed by \\(1-\\mu/L\\). The ratio \\(L/\\mu\\) is a condition number of the objective geometry.

Rates require the named global or level-set assumptions. A function can be locally well behaved and globally have other basins. A stopping tolerance does not replace the theorem's initial-distance constant.

<a id="section-38-worked-anisotropic-quadratic"></a>
### Worked anisotropic quadratic {#section-40-worked-anisotropic-quadratic}

Let \\(f(x,y)=0.5(x^{2}+100y^{2})\\). Gradient descent gives

\\(x_{\\mathrm{new}}=(1-\\alpha)x\\), \\(y_{\\mathrm{new}}=(1-100\\alpha)y\\).

Strict contraction in both coordinates requires \\(0<\\alpha<0.02\\). With \\(\\alpha=0.01\\), y reaches zero in one exact step while x shrinks by only one percent per step. The condition number 100 appears as unequal directional progress. Scaling \\(z=10y\\) makes the level sets rounder and permits balanced steps in transformed coordinates.

<a id="section-46-the-objective-rate-proof-and-its-exact-scope"></a>
### The objective-rate proof and its exact scope {#section-48-the-objective-rate-proof-and-its-exact-scope}

Assume f is convex and differentiable on all of $\\mathbb R^n$, its gradient
is globally L-Lipschitz with L>0, and a minimizer x* exists. With α=1/L,
write x⁺=x−αg, g=∇f(x). Combining descent and convexity gives
$$f(x^+)-f(x_*)\\le g^T(x-x_*)-\\frac\\alpha2\\|g\\|^2
=\\frac{\\|x-x_*\\|^2-\\|x^+-x_*\\|^2}{2\\alpha}.$$
The equality is an expansion of the squared distance. Sum this inequality
over k steps. Its distance terms telescope; nonnegativity of the final
squared distance gives
$$\\sum_{j=1}^k[f(x_j)-f(x_*)]\\le\\frac L2\\|x_0-x_*\\|^2.$$
The objective decreases at each step, so the last of these k gaps is no
larger than their average. Consequently
$$f(x_k)-f(x_*)\\le\\frac{L\\|x_0-x_*\\|^2}{2k},\\qquad k\\ge1.$$
This is a last-iterate objective bound, conditional on a finite initial
distance to an attained minimizer. It does not assert the same rate for
iterates of a nonsmooth function or a trial point projected onto an unspecified
constraint set. A level-set version is possible only if every segment needed
in the proof has the required smoothness bound.

If f is also μ-strongly convex, its supporting quadratic at x implies
$$f(x_*)\\ge f(x)-\\frac{\\|\\nabla f(x)\\|^2}{2\\mu}.$$
Indeed the minimum over all comparison vectors of that supporting quadratic
is the expression on the right, and evaluation at x* is at least its minimum.
Thus ‖g‖²≥2μ[f(x)−f(x*)]. Applying the descent inequality yields
$$f(x_{k+1})-f(x_*)\\le(1-\\mu/L)[f(x_k)-f(x_*)].$$
For the nonconstant case 0<μ≤L, iteration gives a geometric objective rate.
The strong-convexity lower bound converts it to
$\\|x_k-x_*\\|^2\\le2[f(x_0)-f(x_*)](1-\\mu/L)^k/\\mu$.
This is an upper guarantee; particular quadratics can converge faster, and
poor scaling can make L/μ unnecessarily large in the chosen coordinates.

<a id="section-78-line-search"></a>
## Line search {#section-80-line-search}

When \\(L\\) is unknown, backtracking tests the Armijo condition

\\(f(x+\\alpha p)\\le f(x)+c \\alpha \\nabla f(x)^{\\mathsf T} p\\)

for a descent direction \\(p\\), where \\(0<c<1\\). Shrink alpha until accepted. Under standard smoothness and a genuine descent direction, the process terminates.

The Wolfe curvature condition prevents steps that are too short and supports quasi-Newton updates. A tiny accepted step with a large gradient can indicate poor scaling, inaccurate derivatives, or a bad direction.

Here is a precise finite-termination argument for Armijo backtracking. Fix a
point x with gᵀp<0, an initial α₀>0, and shrink by β∈(0,1). Continuous
differentiability alone gives f(x+αp)=f(x)+αgᵀp+o(α), so every sufficiently
small α>0 satisfies Armijo for c∈(0,1). If an L-smooth bound holds along the
trial ray, the explicit sufficient threshold is
$$\\alpha\\le\\frac{2(1-c)(-g^Tp)}{L\\|p\\|^2}.$$
Repeated multiplication by β eventually reaches it. This proof concerns
exact function and derivative values. Floating arithmetic, a noisy objective
or an incorrect directional derivative can invalidate an implementation's
acceptance decision without contradicting the theorem.

For gradient directions, Armijo backtracking also gives a useful
stationarity conclusion under global L-smoothness and a lower objective
bound. With p=−∇f(x), every trial step up to 2(1−c)/L is
accepted. On a geometric grid starting from a fixed α₀, the accepted
step is therefore bounded below by the smaller of α₀ and
2β(1−c)/L. The accepted Armijo decrease is at least c times
that positive lower bound times the squared gradient norm. Summing
over iterations makes those squared norms summable because the objective
cannot decrease below its lower bound. In particular, the gradient
norm tends to zero.

This argument does not require convexity and therefore proves stationarity,
rather than global optimality. It also does not automatically prove
that the iterates converge to one point: a bounded sequence can
have several accumulation points, and an unbounded sequence may have
no accumulation point at all. Compact level sets supply subsequential
limits, and continuity makes each such limit stationary. Additional
structure is needed to identify a unique minimizing limit. Keeping
these conclusions separate explains what globalization contributes beyond
the finite termination of each individual line search.

<a id="section-120-newton-s-method"></a>
## Newton's method {#section-122-newton-s-method}

Newton minimizes the quadratic local model

\\(m(p)=f(x)+g^{\\mathsf T} p+0.5 p^{\\mathsf T} H p\\)

by solving \\(Hp=-g\\). Near a point with nonsingular Hessian and sufficient regularity, it can converge quadratically. If \\(H\\) is indefinite, the stationary model step may be an ascent direction or head toward a saddle.

Do not form \\(H^{-1}\\). Solve the linear system with structure-aware numerical linear algebra. For large problems use Hessian-vector products and an inexact inner solve whose tolerance tracks outer progress.

<a id="section-130-a-local-quadratic-newton-estimate"></a>
### A local quadratic Newton estimate {#section-132-a-local-quadratic-newton-estimate}

Suppose ∇f(x*)=0, f is twice continuously differentiable near x*, and in a
convex ball about x* its Hessian H is M-Lipschitz and satisfies H(x)≽mI for
some m>0. The full Newton step x⁺=x−H(x)⁻¹∇f(x) obeys
$$\\|x^+-x_*\\|\\le\\frac{M}{2m}\\|x-x_*\\|^2.$$
To prove it, set e=x−x*. The fundamental theorem gives
$\\nabla f(x)=\\int_0^1H(x_*+te)e\\,dt$. Subtract the Newton expression from e
and factor H(x)⁻¹ to get an integral of
$[H(x)-H(x_*+te)]e$. Its norm is at most
$m^{-1}\\int_0^1M(1-t)\\|e\\|^2dt=M\\|e\\|^2/(2m)$.
Choose the initial error small enough that this bound stays inside the ball
and is at most a fixed fraction of ‖e‖; induction then proves local
convergence and the quadratic estimate at every subsequent step. This argument
does not say a distant starting point enters that neighbourhood.

For an indefinite but nonsingular stationary Hessian, a related inverse-bound
argument can still give local Newton convergence to a saddle or maximum.
Positive definiteness above supplies the interpretation as a local minimum,
not merely the invertibility required for solving a root equation. Newton's
method solves ∇f=0; minimizing f globally requires further reasoning.

<a id="section-152-worked-example-a-full-newton-step-can-increase-a-convex"></a>
### Worked example: a full Newton step can increase a convex objective {#section-154-worked-example-a-full-newton-step-can-increase-a-convex}

For f(x)=eˣ−x, the unique minimizer is zero. At x=−2, the full Newton step
is p=−(e⁻²−1)/e⁻²=e²−1, so x⁺=e²−3>4. The starting value is 2+e⁻²<3.
For x>4, convexity gives f(x)≥f(4)=e⁴−4>3, so the full step increases the
objective. No numerical run is needed for this comparison. The Hessian is
positive everywhere, and local Newton convergence near zero is valid, yet
neither fact authorizes accepting this distant full step. Armijo damping or a
trust region addresses the missing global control.

<a id="section-162-damping-and-trust-regions"></a>
### Damping and trust regions {#section-164-damping-and-trust-regions}

A damped Newton method line-searches along a modified descent direction. A trust-region method minimizes the model subject to \\(\\lVert p\\rVert\\le \\Delta\\), compares actual with predicted reduction,

\\(\\rho=[f(x)-f(x+p)]/[m(0)-m(p)]\\),

and updates \\(\\Delta\\). A poor ratio says the local model was unreliable at that scale; it does not by itself identify why.

<a id="section-170-quasi-newton-curvature"></a>
## Quasi-Newton curvature {#section-172-quasi-newton-curvature}

Let \\(s_k=x_{k+1}-x_k\\) and \\(y_k=g_{k+1}-g_k\\). Quasi-Newton methods impose a secant equation on an approximate Hessian or inverse. BFGS preserves positive definiteness when \\(s_k^{\\mathsf T} y_k>0\\), typically supported by a suitable line search on smooth problems.

L-BFGS stores a limited history of vector pairs rather than a dense matrix. Curvature information is approximate; skipped updates and scaling choices belong in diagnostics.

For a positive-definite Hessian approximation B, the BFGS Hessian update is
$$B^+=B-\\frac{Bss^TB}{s^TBs}+\\frac{yy^T}{s^Ty},\\qquad s^Ty>0.$$
Multiplication by s gives B⁺s=y, the secant equation. Symmetry is immediate.
For a vector v, Cauchy–Schwarz in the B inner product gives
$v^TBv-(v^TBs)^2/(s^TBs)\\ge0$, with equality exactly when v is parallel
to s. The remaining term $(v^Ty)^2/(s^Ty)$ is nonnegative. If v is a
nonzero multiple of s, this term is strictly positive since sᵀy>0; if v is
not parallel, the first term is strictly positive. Thus B⁺ is positive
definite. The curvature hypothesis is doing essential work in both the
denominator and the proof.

If s=αp with α>0 and the weak Wolfe condition
$\\nabla f(x+\\alpha p)^Tp\\ge c_2\\nabla f(x)^Tp$, where c₂<1 and gᵀp<0,
then sᵀy≥α(c₂−1)gᵀp>0. This explains the link between line search and
the update, without claiming every approximate line search or noisy gradient
preserves it. If curvature fails, damping or skipping is a separate algorithmic
choice to record. Positive definiteness of successive B matrices does not
alone prove a superlinear rate; that deeper theorem needs additional assumptions.

<a id="section-195-worked-example-one-dimensional-secant-curvature"></a>
### Worked example: one-dimensional secant curvature {#section-197-worked-example-one-dimensional-secant-curvature}

Let f(x)=3x²/2, start at x=1 and take a step to x=1/2. Then s=−1/2,
y=3/2−3=−3/2 and sy=3/4>0. In one dimension BFGS cancels the old scalar
B term with its rank-one subtraction, leaving B⁺=y/s=3, the exact Hessian.
The next full model step from 1/2 is −(3/2)/3=−1/2, reaching the minimum
zero. This exact quadratic example explains what a secant pair learns. For a
varying Hessian, the same pair measures curvature averaged along one segment,
so it cannot identify every direction or every future Hessian.

<a id="section-205-automatic-differentiation"></a>
## Automatic differentiation {#section-207-automatic-differentiation}

Automatic differentiation applies the chain rule to the implemented computational graph. Forward mode propagates directional derivatives and is efficient for few inputs or requested directions. Reverse mode propagates adjoints backward and is efficient for a scalar output with many inputs.

For a composition

\\(x \\to u=x^{2} \\to v=\\sin u \\to f=v+3x\\),

reverse mode seeds \\(\\bar{f}=1\\), accumulates \\(\\bar{v}=1\\), \\(\\bar{u}=\\cos u\\), and

\\(\\bar{x}=\\bar{u}\\cdot 2x+3=2x \\cos(x^{2})+3\\).

AD gives derivatives of executed branches and floating-point operations. It does not prove the program represents the intended mathematics or that a nondifferentiable branch has the desired generalized derivative.

<a id="section-219-derivative-audit"></a>
## Derivative audit {#section-221-derivative-audit}

For several normalized directions \\(v\\), compare

\\(g(x)^{\\mathsf T} v\\) with \\([f(x+h v)-f(x-h v)]/(2h)\\)

across a geometric sequence of h. Error should first decrease and then rise as rounding dominates. Complex-step checks can avoid subtraction for analytic code paths, but fail across nonanalytic operations and branch logic.

<a id="section-227-stopping-diagnostics"></a>
## Stopping diagnostics {#section-229-stopping-diagnostics}

Record scaled gradient norm, step norm, objective change, line-search/trust ratio, curvature status, and finite values. For nonconvex objectives, small gradient establishes approximate first-order stationarity, not a minimum. Sample or factor Hessian information to distinguish positive curvature, negative curvature, and unresolved directions.

Multiple starts provide evidence of other basins but cannot prove global optimality. A lower bound, convex relaxation, or problem-specific argument is needed for that.

<a id="section-233-common-errors"></a>
## Common errors {#section-235-common-errors}

- Using an unscaled gradient norm across mixed units.
- Calling Newton globally convergent because it is locally quadratic.
- Forming an explicit inverse Hessian.
- Treating AD as validation of the intended objective.
- Declaring a saddle solved because the gradient is small.

<a id="section-241-practice-with-solutions"></a>
## Practice with solutions {#section-243-practice-with-solutions}

**1. Safe step.** If an objective is known \\(L=20\\) smooth, give a constant step guaranteed by the descent lemma.

<details>
<summary>Hint 1</summary>

Require a positive coefficient of the gradient norm squared.
</details>
<details>
<summary>Hint 2</summary>

The interval is 0<α<2/L; the usual choice is 1/L.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Any \\(0<\\alpha<0.1\\) gives strict descent away from stationarity. \\(\\alpha=0.05=1/L\\) is the standard conservative choice.
</details>


**2. Negative curvature.** If \\(g^{\\mathsf T} p<0\\) but \\(p^{\\mathsf T} H p<0\\), what does the local model do for increasing positive multiples of p?

<details>
<summary>Hint 1</summary>

Evaluate m(tp) as a polynomial in positive t.
</details>
<details>
<summary>Hint 2</summary>

Its quadratic coefficient is negative, so it dominates the linear term as t grows.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Both its linear and quadratic terms decrease, so the unconstrained quadratic model is unbounded below along that ray. A trust region or modified Hessian is needed; blindly solving \\(Hp=-g\\) is not justified.
</details>


**3. Reverse mode.** Why is reverse mode attractive for one scalar loss and a million parameters?

<details>
<summary>Hint 1</summary>

Compare one reverse sweep with independent forward coordinate directions.
</details>
<details>
<summary>Hint 2</summary>

The graph produces one scalar output, so its adjoint can accumulate all input derivatives together.
</details>
<details>
<summary>Full solution</summary>

**Solution.** One reverse sweep accumulates all input partial derivatives at cost typically a small multiple of evaluating the graph, whereas separate forward coordinate directions would require roughly a million sweeps.
</details>

<a id="section-299-exercise-4-prove-a-fixed-step-summability-bound"></a>
### Exercise 4: prove a fixed-step summability bound {#section-301-exercise-4-prove-a-fixed-step-summability-bound}

For L-smooth f bounded below by m, use α=1/L to bound the sum of squared
gradient norms through k−1, without assuming convexity.

<details>
<summary>Hint 1</summary>

Rearrange each descent inequality and sum the objective differences.
</details>
<details>
<summary>Hint 2</summary>

The final objective is at least m. The smallest squared norm is at most their average.
</details>
<details>
<summary>Full solution</summary>

Descent gives $\\|\\nabla f(x_j)\\|^2\\le2L[f(x_j)-f(x_{j+1})]$. Summing
yields $\\sum_{j=0}^{k-1}\\|\\nabla f(x_j)\\|^2\\le2L[f(x_0)-m]$ and hence
$\\min_{j<k}\\|\\nabla f(x_j)\\|^2\\le2L[f(x_0)-m]/k$. This is a
best-iterate stationarity estimate, not a convex objective-gap bound or a
proof of a global minimum. Infinite summability also forces the gradient norms
to tend to zero if all steps remain under the smoothness hypotheses.
</details>

<a id="section-325-exercise-5-the-convex-rate-constant"></a>
### Exercise 5: the convex rate constant {#section-327-exercise-5-the-convex-rate-constant}

Suppose L=10 and the initial distance to some attained minimizer is at most
three. How many gradient steps with α=1/L suffice for the proved objective
gap to be at most 0.01?

<details>
<summary>Hint 1</summary>

Use the last-iterate convex bound with its distance squared.
</details>
<details>
<summary>Hint 2</summary>

Solve 45/k≤0.01 for the integer k.
</details>
<details>
<summary>Full solution</summary>

The bound is $10(3^2)/(2k)=45/k$, so k≥4500 suffices. This is a
worst-case guarantee, not a predicted or observed iteration count. It relies
on global convexity, an attained minimizer, the L-smooth bound on all required
segments, and exact fixed-step gradient descent. A local estimate of L or an
unsubstantiated initial-distance guess does not certify this number.
</details>

<a id="section-351-exercise-6-an-indefinite-newton-root"></a>
### Exercise 6: an indefinite Newton root {#section-353-exercise-6-an-indefinite-newton-root}

Apply Newton's method to f(x)=−x²/2 from a nonzero point. Does its next point
minimize f?

<details>
<summary>Hint 1</summary>

Use g=−x and H=−1 in Hp=−g.
</details>
<details>
<summary>Hint 2</summary>

The root of the gradient is the maximum of this function.
</details>
<details>
<summary>Full solution</summary>

The Newton equation gives p=−x, so x⁺=0 in one step. But zero is the
global maximum, and f is unbounded below. Indeed g p=x²>0, so the step is
an ascent direction. Newton solved the gradient root exactly while failing
the optimization task. A globalization strategy demanding a descent direction
would reject this direction or modify its curvature model.
</details>

<a id="section-376-exercise-7-armijo-s-explicit-threshold"></a>
### Exercise 7: Armijo's explicit threshold {#section-378-exercise-7-armijo-s-explicit-threshold}

For L=12, c=1/4, gᵀp=−2 and ‖p‖²=1, give a sufficient Armijo step
threshold. With α₀=1 and β=1/2, give the first backtracking grid point at or below it.

<details>
<summary>Hint 1</summary>

Insert the data in 2(1−c)(−gᵀp)/(L‖p‖²).
</details>
<details>
<summary>Hint 2</summary>

The resulting threshold is one quarter; the grid contains 1, 1/2, 1/4.
</details>
<details>
<summary>Full solution</summary>

Every positive α≤1/4 satisfies the sufficient smoothness comparison. The
first grid point at or below the threshold is 1/4, after two reductions.
The method could accept an earlier point because the threshold is sufficient,
not necessary. The same L bound must hold along the trial segment, and the
evaluations must implement the stated Armijo comparison.
</details>

<a id="section-401-exercise-8-a-bfgs-sign-failure"></a>
### Exercise 8: a BFGS sign failure {#section-403-exercise-8-a-bfgs-sign-failure}

Take B=I, s=(1,0), y=(−1,0). Compute the formal BFGS update and explain
why its positive-definiteness proof does not apply.

<details>
<summary>Hint 1</summary>

The curvature product sᵀy is negative.
</details>
<details>
<summary>Hint 2</summary>

The two rank-one modifications both affect only the first coordinate.
</details>
<details>
<summary>Full solution</summary>

Here sᵀBs=1 and sᵀy=−1. The update is
$I-\\operatorname{diag}(1,0)-\\operatorname{diag}(1,0)=\\operatorname{diag}(-1,1)$,
which is indefinite. The curvature term in the proof is no longer nonnegative.
Applying an algebraically defined update is therefore insufficient; a method
relying on positive definiteness must enforce or repair the curvature condition.
</details>

<a id="section-426-exercise-9-a-newton-neighbourhood"></a>
### Exercise 9: a Newton neighbourhood {#section-428-exercise-9-a-newton-neighbourhood}

Suppose the local Newton theorem holds on a ball of radius 1/4, with m=2
and M=4. Show an initial error at most 1/4 stays in the ball, and bound
the next two errors.

<details>
<summary>Hint 1</summary>

The quadratic constant M/(2m) is one.
</details>
<details>
<summary>Hint 2</summary>

Square 1/4 and then square the result; all intermediate errors stay below the radius.
</details>
<details>
<summary>Full solution</summary>

The estimate gives e₁≤1/16 and e₂≤1/256. More generally e⁺≤e²≤e/4
when e≤1/4, so induction keeps every iterate in the same ball, where the
hypotheses continue to hold. These numbers describe an exact local iteration;
inexact linear solves and derivative error require additional terms in the
recursion rather than reuse of this unchanged bound.
</details>

<a id="section-452-exercise-10-an-anisotropic-optimum-step"></a>
### Exercise 10: an anisotropic optimum step {#section-454-exercise-10-an-anisotropic-optimum-step}

For f=(x²+100y²)/2, choose a constant positive step minimizing the worst
absolute coordinate contraction factor max{|1−α|,|1−100α|}.

<details>
<summary>Hint 1</summary>

Balance the slow positive factor with the fast negative factor.
</details>
<details>
<summary>Hint 2</summary>

Solve 1−α=100α−1 inside the stable interval.
</details>
<details>
<summary>Full solution</summary>

The balanced step is α=2/101, with worst factor 99/101. To see it is
optimal, if both factors were smaller than q, their two bounds would require
α>1−q and α<(1+q)/100. Compatibility forces q≥99/101. The balanced
choice attains equality. This quadratic-specific optimal fixed step differs
from the conservative 1/L step; changing coordinates changes the spectrum
and hence the comparison.
</details>

<a id="section-478-summary"></a>
## Summary {#section-480-summary}

Smoothness gives descent, convexity globalizes it, strong convexity gives linear rates, and curvature can accelerate local convergence. Scaling, globalization, derivative audits, and stopping evidence determine whether those theorems apply to the implemented problem.

<a id="section-482-source-and-verification-note"></a>
## Sources {#section-484-source-and-verification-note}

For Armijo/Wolfe line searches and BFGS, see Nocedal and Wright, *Numerical Optimization*, 2nd ed. (2006), Chapters 3 and 6; [edition record](https://doi.org/10.1007/978-0-387-40065-5). Descent and curvature assumptions remain part of each local statement.
`;export{e as default};