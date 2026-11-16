
# Boundary Values, Parameters, and Global Continuation

Local initial-value theory starts at one time and moves outward. A boundary-value problem constrains a solution at separated locations, so its logic is different: zero, one, or many initial slopes may land on the far boundary. Parameter inference and continuation add another layer because the solution itself changes when the equation changes.

This chapter develops maximal solutions, global a priori bounds, parameter sensitivities, linear boundary problems, shooting, Green functions, resonance, and numerical cross-checks. It completes the first manuscript part’s theory of what data determine a solution and how that determination can fail.

Prerequisites are the local fixed-point theorem and continuation criterion in [Models, Well-Posedness, and Continuation](models-wellposedness.md), scalar bounds from [Scalar Comparison, Invariant Regions, and Blow-Up](scalar-comparison-invariant-regions.md), and elementary linear algebra.

## 1. Maximal intervals as a theorem object

Let f be continuous and locally Lipschitz in the state on an open domain D in time-state space. Through every point (t0,z0) in D there is one local solution. Uniqueness lets any two local solutions through that point agree on overlaps. Their union produces a **maximal solution** on an open interval

$$ (\alpha,\beta) $$

containing t0.

Maximal means it has no extension as a solution inside D to a larger interval. It does not mean the state is maximal or unbounded.

**Continuation alternative.** If beta is finite, the graph (t,z(t)) leaves every compact subset of D as t approaches beta from below.

**Proof.** If the graph did not eventually leave a compact subset $K$ of the open domain, there would be times $t_n\uparrow\beta$ with $(t_n,z(t_n))\in K$. Compactness and a finite cover by smaller local existence rectangles give one positive time radius on which an initial-value solution through any of these points exists. For a large enough index that radius extends beyond $\beta$. Uniqueness identifies the new local solution with the old one on their overlap, so they glue to an extension past the maximal endpoint, a contradiction.

If an entire late tail is contained in one compact neighbourhood, one may instead bound the derivative, prove a Cauchy limit at the endpoint and restart there. The common-radius proof also covers repeated visits to a compact set without assuming the whole tail is contained in it. A finite endpoint must therefore involve state escape, coefficient/domain singularity, or approach to the boundary of the declared domain.

## 2. Domain boundaries versus norm blow-up

For

$$x'=-1,\qquad D=\{x>0\},$$

started at x0>0, solution x=x0-t reaches the domain boundary zero at time x0 while its norm remains bounded. If the equation is algebraically meaningful on all real x, choosing D={x>0} may represent a physical positive-state contract or an artificially restricted theorem domain. Extension depends on the model.

For

$$x'=\frac1{1-x},$$

started below one, the vector field itself is singular at x=1. The solution reaches that boundary in finite time under appropriate data; crossing would require a different equation or generalized interpretation.

For x'=x squared on the whole plane, D has no finite state boundary, and finite escape occurs by norm blow-up.

Every report should say which alternative occurred.

## 3. Global bounds from linear growth

Suppose on a finite time strip

$$\|f(t,z)\|\le a(t)+b(t)\|z\|$$

with a,b integrable. The integral equation gives

$$\|z(t)\|\le\|z_0\|+\int_{t_0}^t a(s)\,ds+\int_{t_0}^t b(s)\|z(s)\|\,ds.$$

Gronwall bounds z on the strip. If the strip times all states belongs to D, the continuation alternative extends the solution across the entire strip. Repeating yields global existence.

An affine linear system $z'=A(t)z+g(t)$ satisfies this growth estimate when the matrix norm of $A$ and the norm of $g$ are locally integrable. With merely integrable coefficients its solution class is absolutely continuous, and the equation holds almost everywhere. Existence and uniqueness follow from its integral equation: on a short interval the integral of the matrix norm is less than one, making the Volterra map a contraction; concatenate such intervals and use Gronwall for uniqueness and finite-interval bounds. Continuous coefficients give classical continuously differentiable solutions. In either class there is no finite state blow-up at an interior time of the coefficient interval; the matrix itself need not be invertible.

Superlinear growth does not imply blow-up. Sign matters: z'=-norm(z) squared z has cubic magnitude but contracts. Use a Lyapunov estimate.

## 4. Energy bounds with forcing

Consider

$$q''+cq'+V'(q)=F(t),$$

with c nonnegative. Let

$$E=\tfrac12(q')^2+V(q).$$

Then

$$E'=-c(q')^2+Fq'.$$

If V is bounded below and coercive, and F is bounded or square-integrable, Young’s inequality gives

$$Fq'\le\frac c2(q')^2+\frac{F^2}{2c}$$

when c is positive. Therefore

$$E'\le-\frac c2(q')^2+\frac{F^2}{2c}\le\frac{F^2}{2c}.$$

Finite forcing energy gives a finite E bound. Coercivity of V turns it into a q bound, while kinetic energy bounds q'. Continuation then yields global existence.

If c=0, integrate |E'|<=|F||q'| and use a different Gronwall estimate. If V is unbounded below, energy may not control q.

The theorem ledger must name coercivity, lower bounds, and forcing class.

## 5. Smooth dependence on parameters

Consider

$$z'=f(t,z,\theta),\qquad z(t_0,\theta)=z_0(\theta).$$

Continuity and local Lipschitz conditions give continuous dependence. If f and z0 are continuously differentiable and solutions stay in a common compact region, the sensitivity

$$S(t)=\frac{\partial z(t,\theta)}{\partial\theta}$$

satisfies the **variational sensitivity equation**

$$S'=f_z(t,z,\theta)S+f_\theta(t,z,\theta),\qquad S(t_0)=\partial_\theta z_0.$$

Derivation begins with a parameter difference quotient, subtracts the two integral equations, uses the mean-value representation of f differences, and applies Gronwall to pass to a uniform limit. Merely differentiating the original equation is a formal preview; the regularity and common-existence argument justify it.

For vector theta, S is a state-by-parameter matrix.

### Logistic rate sensitivity

For x'=r x(1-x/K) with fixed initial data, sensitivity to r satisfies

$$S'=r(1-2x/K)S+x(1-x/K),\qquad S(0)=0.$$

Computing S alongside x is often more accurate than finite differences for local derivatives. It still concerns the ideal model and local parameter change, not parameter identifiability from data.

## 6. Sensitivity is not identifiability

Suppose output y=h(z,theta). Its local parameter sensitivity is

$$y_\theta=h_zS+h_\theta.$$

Two parameters can have proportional sensitivity columns over all observation times, making them locally indistinguishable. Large sensitivity does not mean a parameter can be estimated precisely if noise is large or other parameters mimic it. Small sensitivity can signal weak information or a poor experiment.

Structural identifiability asks whether perfect continuous output uniquely determines parameters in the exact model. Practical identifiability includes sampling, noise, prior constraints, and model discrepancy.

Parameter fitting must not be validated on the same outputs used to choose model structure without accounting for selection.

## 7. Boundary-value problem contract

A second-order scalar BVP can be written

$$\begin{gathered}y''=F(x,y,y'),\qquad a<x<b,\\ B_a(y(a),y'(a))=0,\qquad B_b(y(b),y'(b))=0.\end{gathered}$$

Unlike an IVP, it does not specify both state coordinates at one location. Questions are:

- Does any trajectory connect the boundary conditions?
- Is it unique?
- How sensitively does it depend on data?
- In what function class?

### Zero, one, or many

For y''=0:

- y(0)=0 and y(1)=1 gives unique y=x;
- y(0)=0 and y(0)=1 is inconsistent, giving none;
- y(0)=0 and y(1) unspecified gives infinitely many slopes.

For

$$y''+\lambda y=0,\qquad y(0)=y(\pi)=0,$$

there is only zero unless lambda=n squared for a positive integer n. At those eigenvalues every scalar multiple of sin(nx) is a solution.

The IVP remains unique for each chosen y'(0). The separated boundary operator becomes singular at resonance.

## 8. Linear two-point problems

Consider

$$-(py')'+qy=f$$

on [a,b] with p positive, q nonnegative, and zero Dirichlet data. Multiply the homogeneous equation by y and integrate:

$$\int_a^b\bigl[p(y')^2+qy^2\bigr]\,dx=0.$$

Both terms are nonnegative, so y'=0 and, with zero endpoints, y=0. Thus the homogeneous problem has only zero and the inhomogeneous problem has at most one solution.

Existence can follow from:

- a Green function construction;
- converting to a Fredholm integral equation;
- Lax–Milgram in an energy space;
- Sturm–Liouville spectral expansion;
- finite-dimensional approximation plus compactness.

The energy argument alone proves uniqueness, not existence.

If q has a sufficiently negative part, the energy need not be coercive and eigenvalue resonance can occur.

## 9. Shooting as a map

For

$$y''=F(x,y,y'),\qquad y(a)=A,\quad y(b)=B,$$

choose initial slope s and solve the IVP

$$y(a;s)=A,\qquad y'(a;s)=s.$$

Define shooting residual

$$R(s)=y(b;s)-B.$$

A BVP solution corresponds to a root R(s)=0. Under smooth parameter dependence,

$$R'(s)=S_1(b),$$

where sensitivity S solves the linearized variational equation with initial data S(a)=(0,1).

Consequences:

- a sign-changing bracket and continuity give existence of at least one root;
- R' nonzero at a root gives local isolation and conditioning by the inverse-function theorem;
- several roots give several BVP solutions;
- R tangent to zero makes Newton shooting ill-conditioned;
- unstable IVP propagation can make R numerically enormous even for a well-scaled BVP.

Shooting is a root solver wrapped around an ODE solver. Both error layers need tolerances and refinement.

## 10. Linear shooting example

Solve

$$y''+y=0,\qquad y(0)=0,\quad y(L)=B.$$

The IVP with slope s is

$$y(x;s)=s\sin x.$$

Thus

$$R(s)=s\sin L-B.$$

If sin L is nonzero, the unique slope is B/sin L. As L approaches pi, conditioning deteriorates. At L=pi:

- if B is nonzero, there is no solution;
- if B=0, every slope is a solution.

The exact example displays the finite-dimensional Fredholm alternative: away from a homogeneous nullspace, inversion is unique; at resonance, forcing/boundary data need compatibility and solutions are nonunique up to nullspace elements.

## 11. Green function for a simple boundary operator

Solve

$$-y''=f,\qquad y(0)=y(1)=0.$$

For fixed source location xi, Green function G(x,xi) is continuous, piecewise linear, zero at endpoints, and its derivative has jump -1 required by -G_xx=delta_xi. It is

$$G(x,\xi)=\begin{cases}x(1-\xi),&x\le\xi,\\ \xi(1-x),&x\ge\xi.\end{cases}$$

Then

$$y(x)=\int_0^1G(x,\xi)f(\xi)\,d\xi.$$

Differentiate on each side and account for the jump to verify the equation. Because G is nonnegative, nonnegative f gives nonnegative y. The maximum obeys a bound from the integral of G.

This representation simultaneously constructs a solution, proves uniqueness when paired with the homogeneous energy argument, and displays dependence on forcing.

For general coefficients, Green functions may change sign or fail at eigenvalues.

## 12. Fredholm compatibility at resonance

Consider a self-adjoint operator L with homogeneous boundary conditions and nontrivial null vector phi. If

$$Ly=f,$$

then taking inner product with phi gives

$$\langle f,\phi\rangle=\langle Ly,\phi\rangle=\langle y,L\phi\rangle=0,$$

after boundary terms vanish. Thus f must be orthogonal to the nullspace.

If compatibility holds, solutions are nonunique: add any nullspace vector. A normalization, such as orthogonality to the nullspace or fixed mean, selects one.

For Neumann Poisson,

$$-y''=f,\qquad y'(0)=y'(1)=0,$$

constants form the nullspace. Integrating the equation gives necessary condition integral f=0. If satisfied, solutions differ by a constant.

## 13. Nonlinear BVP multiplicity

For

$$-y''=\lambda e^y,\qquad y(0)=y(1)=0,$$

solution count can change with lambda. Shooting residuals may have folds; Newton iteration from different initial guesses can converge to different branches.

A numerical solver returning one branch does not prove uniqueness. Use:

- analytical monotonicity or convexity when available;
- bifurcation continuation;
- degree or upper/lower-solution theory;
- multiple starts and deflation as evidence;
- validated numerics for theorem-level root counts.

The full nonlinear elliptic theory is beyond this chapter; the audit lesson is essential now.

## 14. Finite differences for a boundary problem

For -y''=f on [0,1], grid x_j=jh and centered differences give

$$\frac{-y_{j-1}+2y_j-y_{j+1}}{h^2}=f_j$$

for interior j, with boundary values inserted. The matrix is symmetric positive definite under zero Dirichlet data. The discrete energy

$$\sum_j\frac{(y_j-y_{j-1})^2}{h}$$

is positive and mirrors coercivity.

Consistency is second order for smooth y. Stability of the inverse in a suitable norm turns local residual error into global convergence.

Report:

- exact boundary insertion;
- h, h/2, h/4 output differences;
- linear residual;
- condition estimate or solver tolerance;
- comparison with a manufactured solution;
- maximum-principle or sign check;
- separation of discretization and algebraic error.

## 15. Shooting versus global discretization

Shooting advantages:

- reuses adaptive IVP solvers;
- handles smooth low-dimensional problems efficiently;
- gives slope sensitivity naturally.

Shooting risks:

- unstable IVP modes amplify error;
- multiple roots and missed brackets;
- discontinuities or singular endpoints;
- poor conditioning near resonance.

Finite-difference, collocation, or finite-element methods solve for the whole path and can handle separated boundaries more symmetrically. They introduce a larger algebraic system and mesh error.

Agreement between refined shooting and refined collocation is a valuable independent cross-check because the methods have different failure modes.

## 16. Manufactured boundary audit

Choose exact y(x)=sin(pi x)+x. For operator

$$-y''+y=f$$

on [0,1], compute

$$f=(\pi^2+1)\sin(\pi x)+x,$$

with y(0)=0 and y(1)=1.

This test checks inhomogeneous boundaries, forcing, signs, and second-order convergence. It does not validate a physical operator. Perturb the grid so the exact solution is not represented by accidental symmetry, and test output functionals as well as nodal maximum error.

## 17. Continuation in a parameter

Suppose F(u,lambda)=0 represents a discretized or functional BVP. Ordinary parameter stepping solves at lambda+Delta lambda using the previous solution as a guess. It fails near a fold where u is not a single-valued function of lambda.

Pseudo-arclength continuation adds a tangent-based normalization and treats both u and lambda as unknowns. It can pass folds. Branch switching at bifurcations requires nullspace information.

Numerical continuation plots are evidence of branches. Rigorous claims need:

- residual bounds;
- nonsingularity or validated bifurcation conditions;
- mesh refinement;
- exclusion of missed branches within a stated region;
- function-space interpretation of the discrete branch.

## 18. Parameter fitting through BVPs

Some models infer a parameter from conditions at both ends. For example, an unknown conductivity may be chosen so a steady temperature field matches a measured endpoint flux.

The nested map is:

    parameter -> BVP solution -> predicted observation -> residual.

Differentiate through the BVP by a sensitivity equation when the linearized boundary operator is invertible. Near resonance, sensitivities become large and inference is ill-conditioned. If multiple BVP branches exist, the forward map is set-valued until a branch-selection mechanism is specified.

Calibration uncertainty, measurement noise, and model discrepancy sit outside the numerical BVP residual.

## A fold is a failure of one parameter chart, not necessarily of the branch

The distinction between local parameter dependence and continuation is already visible in finite dimensions. Consider the solution set $u^2+\lambda^2=1$. Near a point with nonzero $u$, the implicit function theorem expresses $u$ as a smooth function of the parameter. At the top and bottom points, that derivative formula is singular. The full solution set is nevertheless a smooth circle, because the gradient of its defining equation never vanishes on the circle.

A pseudo-arclength chart uses both coordinates as unknowns and adds a scalar condition along a chosen tangent. At a reference point, take a nonzero tangent orthogonal to the defining gradient. The augmented derivative has one row equal to that gradient and one row equal to the tangent. These rows are independent, so the augmented system is locally invertible. A predictor displaced along the tangent and a correction satisfying the augmented equations can therefore follow the regular branch through a parameter fold.

This argument proves local chart nonsingularity, not that every numerical correction converges or that one chart covers the whole branch. At a true singular point where the defining derivative loses the necessary rank, a tangent normalisation may not suffice. Branching, self-intersections and loss of compactness require further analysis. In a function-space boundary problem, the corresponding derivative must be an invertible bounded operator between the stated spaces; invertibility of one discretised matrix is a different finite statement.

## A finite escape time limits parameter differentiation

Common existence is also essential for smooth dependence on a parameter. For $x'=\theta x^2$ with fixed initial value one, the solution is $x(t,\theta)=1/(1-\theta t)$ wherever the denominator is positive along the forward branch. At a fixed positive time, it is a smooth function of the parameter only below the corresponding escape threshold. Its parameter derivative is $t/(1-\theta t)^2$, which diverges near that threshold.

The sensitivity equation is correct throughout any compact parameter-time region staying away from the denominator zero. It does not justify differentiating an output across a parameter for which the solution has already ceased to exist at that output time. Extending the rational formula beyond its pole does not extend the original maximal trajectory through infinity.

This example connects continuation and inference. An output map at a fixed horizon has a domain in parameter space, not necessarily the entire nominal parameter range. Optimisation of a fitting residual must respect that domain. An algorithm that replaces a failed solve by an arbitrary large residual creates a numerical convention; it has not supplied a differentiable physical forward map across the failure.

## Compatibility can select an affine solution family

For a linear boundary operator with a nontrivial nullspace, a compatible right-hand side can produce an affine family of solutions. A normalisation should be an explicit additional condition that intersects that nullspace transversely. For Neumann Poisson on an interval, fixing the mean removes the constant ambiguity. Fixing one point value also removes it when an appropriate continuous representative exists. In a weaker function space without pointwise meaning, the mean constraint may be legitimate while a point value is not.

The chosen normalisation affects the represented solution but does not change the compatibility condition. Forcing with nonzero integral cannot be repaired by selecting a mean. Conversely, imposing two independent normalisations on a one-dimensional kernel can overdetermine the problem. Count the kernel and state the solution space before treating a normalisation as a harmless bookkeeping step.

## Exercises with worked solutions

<a id="boundary-value-continuation-ex-1"></a>

### 1. Domain-boundary continuation

For x'=-1 with physical domain x>0 and x(0)=2, find the maximal forward interval and classify the endpoint.

<details><summary>Hint 1</summary>

Solve the constant-velocity equation in its declared positive domain.

</details>

<details><summary>Hint 2</summary>

At the finite endpoint the state is bounded but no longer belongs to the model domain.

</details>

<details><summary>Full solution</summary>

**Solution.** x(t)=2-t remains in the declared domain for 0<=t<2. The state tends to zero at t=2 and remains bounded, but (2,0) lies on the boundary of the time-state domain. The endpoint is domain escape rather than norm blow-up. Extending to negative x is an algebraic option only if the model definition is enlarged.

</details>

<a id="boundary-value-continuation-ex-2"></a>

### 2. Linear global existence

Suppose z'=A(t)z+g(t) with norm A and norm g integrable on every finite interval. Why can no solution blow up at a finite interior time?

<details><summary>Hint 1</summary>

Bound the field by a linear state-growth term and an integrable forcing.

</details>

<details><summary>Hint 2</summary>

Gronwall controls every finite interior interval; continuation then has no state-escape obstruction.

</details>

<details><summary>Full solution</summary>

**Solution.** The growth bound \(\|f(t,z)\|\le\|A(t)\|\,\|z\|+\|g(t)\|\) and Gronwall give a finite state bound on every finite interval. The coefficient domain contains all states, so the continuation alternative extends the unique local solution throughout the coefficient interval.

</details>

<a id="boundary-value-continuation-ex-3"></a>

### 3. Sensitivity equation

For x'=theta x, x(0)=x0 independent of theta, derive and solve S=partial x/partial theta.

<details><summary>Hint 1</summary>

Differentiate the integral equation under the stated common-existence hypotheses.

</details>

<details><summary>Hint 2</summary>

The sensitivity has zero initial value and a forcing equal to the original state.

</details>

<details><summary>Full solution</summary>

**Solution.** S'=theta S+x with S(0)=0. Since x=x0 exp(theta t), integrating factor gives S=t x0 exp(theta t)=t x(t), agreeing with direct differentiation.

</details>

<a id="boundary-value-continuation-ex-4"></a>

### 4. Resonant Dirichlet problem

Classify solutions of y''+4y=sin(2x) on [0,pi] with y(0)=y(pi)=0.

<details><summary>Hint 1</summary>

Pair the forcing with a homogeneous null vector.

</details>

<details><summary>Hint 2</summary>

The self-adjoint sign convention changes both operator and forcing; the relevant squared sine integral is nonzero.

</details>

<details><summary>Full solution</summary>

**Solution.** The homogeneous nullspace includes $\sin(2x)$. The operator in self-adjoint form is $-y''-4y=-\sin(2x)$; its forcing is not orthogonal to the null vector because $\langle-\sin(2x),\sin(2x)\rangle=-\lVert\sin(2x)\rVert_2^2\neq0$. Therefore the Fredholm compatibility condition fails and no solution exists. Direct undetermined coefficients would produce a resonant $x\cos(2x)$ term that cannot satisfy both endpoints.

</details>

<a id="boundary-value-continuation-ex-5"></a>

### 5. Neumann compatibility

Solve the compatibility question for -y''=1 with y'(0)=y'(1)=0.

<details><summary>Hint 1</summary>

Integrate the differential equation over the full interval.

</details>

<details><summary>Hint 2</summary>

The prescribed endpoint derivatives force a zero left side, while the constant forcing integrates to one.

</details>

<details><summary>Full solution</summary>

**Solution.** Integrating gives -[y'(1)-y'(0)]=integral_0^1 1 dx=1, while both derivatives make the left side zero. No solution exists. Equivalently, forcing 1 is not orthogonal to the constant nullspace.

</details>

<a id="boundary-value-continuation-ex-6"></a>

### 6. Shooting conditioning

For y''+y=0, y(0)=0, y(L)=1, what happens as L approaches pi?

<details><summary>Hint 1</summary>

Write the exact shooting residual as a function of initial slope.

</details>

<details><summary>Hint 2</summary>

Its slope derivative is the sine of the endpoint length and tends to zero at resonance.

</details>

<details><summary>Full solution</summary>

**Solution.** The required slope is 1/sin L, whose magnitude diverges as L approaches pi. The derivative of the shooting residual with respect to slope is sin L and tends to zero, so the root becomes ill-conditioned. At L=pi the target is incompatible and no solution exists.

</details>

<a id="boundary-value-continuation-ex-7"></a>

### 7. Green-function sign

For -y''=f with zero Dirichlet data and f nonnegative, prove y nonnegative from the stated G.

<details><summary>Hint 1</summary>

Inspect each piece of the Green kernel on the unit square.

</details>

<details><summary>Hint 2</summary>

Integrating a nonnegative kernel against nonnegative forcing preserves sign.

</details>

<details><summary>Full solution</summary>

**Solution.** Both pieces of G(x,xi) are nonnegative on the unit square. Therefore y(x)=integral Gf is nonnegative for every x. This is the one-dimensional inverse-positivity or maximum-principle property for the operator.

</details>

<a id="boundary-value-continuation-ex-8"></a>

### 8. Discrete manufactured solution

Why is a small linear-system residual insufficient to claim small error?

<details><summary>Hint 1</summary>

A residual concerns the discrete operator actually solved.

</details>

<details><summary>Hint 2</summary>

Continuum approximation and inverse amplification require separate bounds.

</details>

<details><summary>Full solution</summary>

**Solution.** Residual measures how accurately the discrete equations were solved. Error from the continuum solution also includes truncation and boundary discretization, and residual-to-error amplification depends on inverse stability or conditioning. A wrong discrete operator can be solved to machine precision. Add a manufactured continuum solution and mesh refinement.

</details>

<a id="boundary-value-continuation-ex-9"></a>

### 9. Repair a shooting claim

“Newton shooting converged, so the BVP has a unique solution.”

<details><summary>Hint 1</summary>

Convergence of one Newton sequence gives no count of all possible roots.

</details>

<details><summary>Hint 2</summary>

Keep IVP error, shooting conditioning and global uniqueness as separate questions.

</details>

<details><summary>Full solution</summary>

**Solution.** Convergence establishes one numerical root of one discretized shooting residual to a tolerance. Other roots may exist, the IVP integration may be inaccurate, and the root can be ill-conditioned. Uniqueness needs an analytical monotonicity/coercivity theorem or a validated global root count in a stated class.

</details>

<a id="boundary-value-continuation-ex-10"></a>
### 10. A regular chart through a parameter fold

For $u^2+\lambda^2=1$ near $(0,1)$, use tangent $(1,0)$ and predictor $(\epsilon,1)$. Write the augmented correction equations, solve their nearby branch and show the augmented derivative is invertible at the reference point.

<details><summary>Hint 1</summary>

The tangent normalisation fixes the horizontal coordinate at the predictor value.

</details>
<details><summary>Hint 2</summary>

Use the positive square-root branch near the top of the circle and compare the two derivative rows.

</details>
<details><summary>Full solution</summary>

The equations are $u^2+\lambda^2-1=0$ and $u-\epsilon=0$. Near the reference point their solution is $u=\epsilon$, $\lambda=\sqrt{1-\epsilon^2}$ for sufficiently small predictor displacement. At $(0,1)$ the derivative rows are $(0,2)$ and $(1,0)$, giving determinant minus two. The augmented chart is locally regular even though expressing $u$ as a single-valued smooth function of $\lambda$ fails at the fold. This is a local chart statement, not a guarantee of convergence from every numerical starting guess.

</details>

## Computation audit

For a BVP or parameter-continuation result, publish:

- operator, domain, solution class, and all boundary conditions;
- homogeneous nullspace and compatibility check;
- energy/coercivity or maximum-principle argument where available;
- shooting bracket, residual derivative, and root tolerance;
- independent global discretization;
- mesh refinement and algebraic residual separately;
- manufactured-solution benchmark;
- branch, fold, and initial-guess sensitivity;
- parameter-sensitivity equation and observation conditioning;
- explicit statement of existence, uniqueness, or multiplicity evidence.

## Dependency ledger

- Local uniqueness glued solutions into one maximal trajectory.
- Compact containment inside the open domain enabled continuation.
- Gronwall and coercive energy estimates prevented finite state escape.
- Differentiability plus a common compact solution region justified parameter sensitivities.
- Boundary operators, not IVP uniqueness, controlled BVP existence and multiplicity.
- Energy coercivity proved homogeneous uniqueness.
- Green functions constructed solutions and exposed sign structure.
- Nullspace orthogonality supplied compatibility at resonance.
- Shooting converted the BVP into a root problem with its own conditioning.
- Mesh stability connected discrete residual and truncation error to continuum convergence.
