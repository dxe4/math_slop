var e=`---
id: recipe-optimization-diagnostics
title: "Solve and Diagnose a Smooth Optimization Problem"
license: CC BY-SA 4.0
---

# Recipe: Solve and Diagnose a Smooth Optimization Problem

**Before reading.** Read [Linear Maps, Isomorphism, and Rank–Nullity](/resources/library:book-linear-algebra-structure-proofs:linear-maps-isomorphism-rank-nullity/), [Functions, Domains, and Graphs](/resources/library:book-algebra-and-functions:functions-domain-graphs/).

An optimizer returning a vector is not evidence that the mathematical problem was solved. This recipe turns a differentiable objective into a checked result: scaled variables, verified derivatives, a justified algorithm, convergence evidence, and sensitivity tests.

## Inputs and deliverable

Start with an objective $f\\colon R^n -> R$, an initial point, any constraints, and a statement of what the result will be used for. Deliver:

- the exact objective and feasible set;
- variable scales and derivative checks;
- iteration history and stopping reasons;
- first- and, where relevant, second-order optimality diagnostics;
- results from multiple starts or perturbations;
- known nonconvex, numerical, and modeling failure modes.

## Step 1 — Separate model, objective, and solver

Write the scientific or decision goal before its computational surrogate. Least squares

$f(\\theta)=(1/2)\\lVert r(\\theta)\\rVert_2^2$

assumes large residuals deserve quadratic emphasis. Adding $\\lambda\\lVert \\theta\\rVert_2^2/2$ expresses a preference for smaller parameters. Neither choice is a neutral solver detail.

Record bounds and equality constraints explicitly. A penalty does not guarantee feasibility unless its limiting argument and chosen magnitude justify that claim.

## Step 2 — Scale variables and terms

If one coordinate is near $10^-6$ and another near $10^5$, an isotropic step can be tiny in one meaningful direction and enormous in another. Set $\\theta=D z$, where diagonal $D$ contains characteristic scales, and optimize $g(z)=f(Dz)$.

Then

$gradient g(z)=D^T gradient f(Dz)$,

so scaling is a change of geometry. Normalize residual terms only with a defensible noise, unit, or decision scale. Blind standardization can erase meaningful costs.

## Step 3 — Verify derivatives

For a direction $v$, compare the directional derivative with a centered finite difference:

$gradient f(x)^T v approximately [f(x+h v)-f(x-h v)]/(2h)$.

Test several normalized random and coordinate directions. As $h$ decreases, truncation error initially falls like $h^2$, then floating-point cancellation grows. Look for a U-shaped error curve rather than demanding accuracy at the smallest $h$.

Automatic differentiation computes derivatives of the implemented program, not the intended formula. A perfect AD result can faithfully differentiate a bug or nondifferentiable branch.

## Step 4 — Understand the basic descent guarantee

Suppose $f$ has an $L$-Lipschitz gradient:

$\\lVert \\nabla f(x)-\\nabla f(y)\\rVert \\le L\\lVert x-y\\rVert$.

The descent lemma states

$f(y) \\le f(x)+\\nabla f(x)^T(y-x)+(L/2)\\lVert y-x\\rVert^2$.

For gradient descent $y=x-\\alpha gradient f(x)$, substitution gives

$f(y) \\le f(x)-\\alpha(1-L \\alpha/2)\\lVert \\nabla f(x)\\rVert^2$.

Thus any $0<\\alpha<2/L$ decreases the objective unless the gradient is zero. This is a local computational fact, not yet a guarantee of a global minimum. Convexity supplies the bridge from stationary point to global optimality.

The descent lemma follows from a one-dimensional integral along the segment,
provided the gradient bound holds throughout that segment. Write $d=y-x$.
The fundamental theorem of calculus gives
$f(y)-f(x)=\\int_0^1\\nabla f(x+td)^Td\\,dt$.
Subtract $\\nabla f(x)^Td$ and bound the integrand's remainder by
$\\|\\nabla f(x+td)-\\nabla f(x)\\|\\|d\\|\\le Lt\\|d\\|^2$.
Integration gives $L\\|d\\|^2/2$, proving the inequality. A declared global
Lipschitz constant supplies this bound everywhere; a local constant suffices
only while the proposed segment stays in its valid region.

For a convex differentiable function, the supporting-plane inequality is
$f(y)\\ge f(x)+\\nabla f(x)^T(y-x)$. Consequently a zero gradient at $x$
gives $f(y)\\ge f(x)$ for every $y$, a global optimum. Without convexity,
the zero derivative of $f(x)=-x^2$ at zero gives a maximum instead. Thus a
small first-order residual needs the surrounding mathematical hypotheses before
it becomes an optimality certificate.

### Worked quadratic

#### Worked example: unequal curvature directions

Let

$f(x,y)=1/2(x^2+10y^2)-x-10y$.

Its gradient is $(x-1,10y-10)$ and Hessian is $\\operatorname{diag}(1,10)$. Setting the gradient to zero gives minimizer $(1,1)$. The Hessian eigenvalues lie from $mu=1$ to $L=10$, so the condition number is $kappa=10$.

From $(0,0)$ with $\\alpha=0.1$, one gradient step gives

$(x_1,y_1)=(0,0)-0.1(-1,-10)=(0.1,1)$.

The steep direction reaches its solution immediately, while $x$ contracts by factor $0.9$ each step. Ill-conditioning appears as unequal progress along eigenvector directions.

If $\\alpha=0.21>2/L$, the $y$ error multiplies by $1-10(0.21)=-1.1$, so it oscillates and grows.

## Step 5 — Globalize the step

When $L$ is unknown, use backtracking line search. Given descent direction $p$, Armijo's condition accepts $\\alpha$ when

$f(x+\\alpha p) \\le f(x)+c \\alpha gradient f(x)^T p$,

for a small $c$ such as $10^-4$.

\`\`\`text
x <- initial point
repeat:
    g <- gradient(x)
    if scaled_norm(g) <= gradient_tolerance: stop
    p <- choose_descent_direction(g, curvature_information)
    alpha <- 1
    while f(x + alpha*p) > f(x) + c*alpha*dot(g,p):
        alpha <- rho*alpha          # 0 < rho < 1
    x_new <- x + alpha*p
    record objective, norm(g), alpha, step, feasibility
    if scaled_norm(x_new-x) <= step_tolerance: investigate, then stop
    x <- x_new
\`\`\`

A tiny step with a large gradient may mean bad scaling, a broken direction, or line-search stagnation—not convergence.

## Step 6 — Choose curvature carefully

Newton's method solves

$H(x)p=-gradient f(x)$

and sets $x_new=x+p$. Near a nondegenerate minimizer it can converge quadratically. Far away, an indefinite Hessian can produce a direction with $gradient f^T p>0$, which is not descent. Damping, trust regions, or positive-definite Hessian modifications globalize the method.

Never form $H^{-1}$ explicitly. Solve the linear system using a factorization or iterative method. The accuracy required of that solve should match optimization progress; oversolving early wastes work.

For large problems, quasi-Newton methods approximate curvature from gradient changes. L-BFGS limits memory. Conjugate gradients exploit positive-definite Hessian-vector products. These choices connect optimization performance to numerical linear algebra.

## Step 7 — Handle simple constraints explicitly

For a closed convex set $C$, projected gradient uses

$x_{k+1}=projection_C(x_k-\\alpha gradient f(x_k))$.

For box constraints, projection clips each coordinate to its interval. A constrained optimum can have a nonzero ordinary gradient; the correct diagnostic is a projected-gradient or KKT residual.

Projection onto a nonconvex set may be nonunique. General nonlinear constraints call for methods whose feasibility and multiplier conditions match the problem.

## Step 8 — Audit the returned point

Check:

1. finite objective, variables, gradients, and residuals;
2. scaled first-order residual;
3. feasibility and complementary conditions;
4. Hessian eigenvalue estimates or curvature along sampled directions;
5. agreement across tighter tolerances and derivative implementations;
6. multiple starts for nonconvex problems;
7. sensitivity to data, regularization, and scaling;
8. the original scientific metric, not just the surrogate objective.

## Failure modes

- Gradient norm depends on units; use scaled tolerances.
- Objective decrease can converge to a saddle, boundary artifact, or poor local minimum.
- Squaring a poorly conditioned residual problem roughly squares its matrix condition number in normal equations.
- NaNs often originate before the solver notices them; guard domains of logs, roots, and divisions.
- Stochastic-gradient noise creates a floor below which deterministic tolerances are meaningless.
- A training objective can be optimized perfectly while validation performance worsens.
- Reproducible seeds do not replace variation across seeds.

## Exercises with hints and complete solutions

### Exercise 1
<a id="optimization-diagnostics-ex-1"></a>

Compute the second gradient-descent iterate for the worked quadratic with
$\\alpha=0.1$.

<details><summary>Hint 1</summary>

The first iterate was $(0.1,1)$.

</details>
<details><summary>Hint 2</summary>

Evaluate both gradient coordinates there before subtracting the scaled gradient.

</details>
<details><summary>Solution</summary>

The gradient is $(0.1-1,10\\cdot1-10)=(-0.9,0)$. Thus the next iterate
is $(0.1,1)-0.1(-0.9,0)=(0.19,1)$. The first coordinate's error decreases
from $-0.9$ to $-0.81$, while the second remains at its optimum.

</details>

### Exercise 2
<a id="optimization-diagnostics-ex-2"></a>

Why is $p=-g$ a descent direction whenever the gradient $g$ is nonzero?

<details><summary>Hint 1</summary>

The directional derivative is $g^Tp$.

</details>
<details><summary>Hint 2</summary>

Substitute $-g$ and use positivity of the squared Euclidean norm.

</details>
<details><summary>Solution</summary>

The derivative is $g^T(-g)=-\\|g\\|^2<0$. Differentiability implies
$f(x+\\alpha p)=f(x)+\\alpha g^Tp+o(\\alpha)$, so all sufficiently small
positive steps decrease $f$. This does not promise that an arbitrarily large
step will decrease it; a step-selection argument is still needed.

</details>

### Exercise 3
<a id="optimization-diagnostics-ex-3"></a>

Minimize $(x-3)^2$ subject to $0\\le x\\le2$. Why is its gradient nonzero
at the solution?

<details><summary>Hint 1</summary>

Find the feasible point nearest 3.

</details>
<details><summary>Hint 2</summary>

The unconstrained downhill direction at the upper endpoint is infeasible.

</details>
<details><summary>Solution</summary>

The minimum is attained at $x=2$, with value 1. Its derivative there is
$2(2-3)=-2$. The direction toward larger $x$ would lower the objective but
leave the interval. For any $\\alpha>0$, projecting $2-\\alpha(-2)$ back
onto $[0,2]$ gives 2. The projected-gradient residual is therefore zero,
as required for a constrained optimum, despite the nonzero ordinary gradient.

</details>

### Exercise 4
<a id="optimization-diagnostics-ex-4"></a>

A symmetric quadratic Hessian has eigenvalues 2 and 200. Give a positive
constant step smaller than $2/L$.

<details><summary>Hint 1</summary>

The gradient Lipschitz constant is the largest absolute eigenvalue.

</details>
<details><summary>Hint 2</summary>

Keep the inequality strict.

</details>
<details><summary>Solution</summary>

Here $L=200$, so $2/L=0.01$. For example $\\alpha=0.009$ satisfies the
descent bound. Along the two eigenvectors the error factors are
$1-2\\alpha=0.982$ and $1-200\\alpha=-0.8$, both of magnitude below one.
The second direction oscillates but contracts; oscillation alone is not failure.

</details>

### Exercise 5
<a id="optimization-diagnostics-ex-5"></a>

What derivative comparison would reveal a sign error in one gradient coordinate?

<details><summary>Hint 1</summary>

Isolate that coordinate with a basis vector.

</details>
<details><summary>Hint 2</summary>

Compare at points where the true derivative is not zero.

</details>
<details><summary>Solution</summary>

Compare the reported coordinate $g_j(x)$ with
$[f(x+he_j)-f(x-he_j)]/(2h)$ over several sensible step sizes. For a
smooth function the central difference approaches the true partial derivative
until rounding dominates. At a point with nonzero partial derivative, a sign
error makes the two results approximately opposite. A zero derivative at one
point would hide that error, which is why several points are useful. This
comparison concerns the implemented objective; its scientific meaning needs
the separate modelling argument stated earlier.

</details>

## Connections

Use **convex optimization** to know when local certificates are global, **nonlinear optimization** for trust regions and constraints, **automatic differentiation** for scalable derivatives, **numerical linear algebra** for Newton systems, and **optimization for learning** to connect solver progress with generalization rather than training loss alone.
`;export{e as default};