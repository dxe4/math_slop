
# Boundaries, Modes, and Stationary Paths in Differential Equations

**Before reading.** Read [Models and Direction Fields](../books/ode-first-course/models-direction-fields.md), [Riemann Integration from Upper and Lower Sums](../books/proof-safe-real-analysis/riemann-integration.md) and [Differentiation in Euclidean Space](../books/proof-safe-real-analysis/differentiation-in-r-n.md). These are preparation for the ideas used below.

Three methods that are often taught separately share one structural question: what space of admissible functions makes the equation meaningful?

- A PDE needs a domain, boundary conditions, and a solution class.
- A Fourier expansion uses eigenfunctions of a boundary operator and a named mode of convergence.
- A variational problem chooses admissible perturbations, whose boundary terms determine the Euler–Lagrange equation and natural boundary conditions.

This deep dive connects those choices and marks where formal calculations need existence or regularity theorems.

## 1. The boundary is part of the operator

Consider

$$
-u''=f\quad\text{on }0<x<L.
$$

With fixed endpoint values u(0)=u(L)=0, the homogeneous operator has sine eigenfunctions. With zero derivative endpoints, it has cosine eigenfunctions including a constant zero mode. Periodic data create exponential modes. The differential expression -d squared/dx squared is the same, but its domain and spectrum change with the boundary conditions.

A proposed PDE solution must record:

- spatial domain and time interval;
- coefficient regularity and signs;
- initial and boundary data;
- compatibility at corners;
- classical, weak, mild, viscosity, or distributional meaning;
- norm in which stability and convergence are claimed.

Writing u_t=u_xx without this information specifies a family of problems, not one problem.

## 2. Energy before formula

For heat with fixed zero endpoints,

$$
u_t=\kappa u_{xx},\qquad\kappa>0,
$$

multiplication by u and integration gives

$$
\frac12\frac{d}{dt}\int_0^L u^2\,dx=-\kappa\int_0^L u_x^2\,dx.
$$

This proves L2 energy decreases and, by applying it to the difference of two solutions, gives uniqueness. Poincaré’s inequality produces exponential decay.

For the fixed-end wave equation

$$
u_{tt}=c^2u_{xx},
$$

multiplication by u_t gives conservation of

$$
\frac12\int_0^L\bigl(u_t^2+c^2u_x^2\bigr)\,dx.
$$

The same spatial operator participates in dissipation for heat and conservation for waves because their time operators differ.

Boundary terms carry meaning. For heat, a nonzero flux changes total heat. For waves, c squared u_tu_x at an endpoint is power passing through the boundary. Dropping a boundary term without checking data erases an energy source.

The constant mode also changes solvability, not just the appearance of a
Fourier basis. For the Neumann problem $-u''=f$ with $u'(0)=u'(L)=0$,
integrating the equation gives $\int_0^L f\,dx=-u'(L)+u'(0)=0$.
Thus a nonzero average forcing has no solution with those boundary data.
When the compatibility condition holds, adding any constant to a solution
produces another solution: the derivative and both boundary values stay the
same. A normalization such as $\int_0^L u\,dx=0$ selects one representative.
Dirichlet conditions remove that freedom. This is why a uniqueness claim
must state its function space and any normalization, even when the interior
differential equation looks identical.

## 3. Separation is a spectral calculation

Try u=X(x)T(t) for fixed-end heat. Dividing the separated equation gives

$$
-X''=\lambda X,\qquad T'=-\kappa\lambda T.
$$

Nontrivial boundary-compatible X exist for

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,\qquad X_n(x)=\sin\left(\frac{n\pi x}{L}\right).
$$

Thus

$$
u(x,t)=\sum_{n=1}^\infty b_n e^{-\kappa\lambda_n t}X_n(x).
$$

This derivation has three distinct claims:

1. Each separated mode is an exact classical solution.
2. Finite sums are solutions by linearity.
3. Infinite sums represent all data and may be differentiated as required.

Claim 3 needs completeness and convergence. In L2, the sine modes are complete for fixed-end data in the appropriate sense. Pointwise and uniform claims need more regularity. Heat’s positive-time exponential factors improve convergence dramatically.

For waves, the time coefficient oscillates. Rough high-frequency content does not decay, so classical regularity is not automatically recovered.

## 4. Parseval and what it does not say

With b_n=2/L integral u X_n,

$$
\int_0^L|u|^2\,dx=\frac L2\sum_{n=1}^\infty|b_n|^2
$$

for L2 data under the chosen normalization. Parseval converts function energy into modal energy.

It does not say:

- the series converges at every point;
- a derivative series converges;
- truncation error is small in maximum norm;
- a different boundary basis is valid;
- coefficients obtained from sampled data are free of aliasing.

If u has s square-integrable weak derivatives, weighted coefficient sums decay accordingly in standard periodic or compatible settings. Smoothness buys spectral decay. A jump produces slow coefficient decay and Gibbs ringing.

## 5. Weak solutions from the same integration by parts

For Poisson’s equation with zero endpoints, multiply by a smooth test v that also vanishes at endpoints:

$$
\int_0^L u'v'\,dx=\int_0^L fv\,dx.
$$

This identity can define a solution with one weak derivative even if u'' does not exist pointwise. The energy space and boundary trace become part of the definition.

Existence can follow from a coercive bilinear form through Lax–Milgram. Coercivity here comes from Poincaré’s inequality:

$$
\|u\|_{L^2}\le C\|u'\|_{L^2}.
$$

The theorem needs a Hilbert space, bounded bilinear form, coercivity, and bounded linear functional. Formal integration by parts alone does not prove a weak solution exists.

Regularity theory asks when a weak solution gains derivatives from smoother coefficients, data, and boundaries. Corners, discontinuous coefficients, and nonsmooth domains can limit that gain.

## 6. Functionals and first variations

A functional assigns a number to an entire admissible function:

$$
J[y]=\int_a^b L(x,y,y')\,dx.
$$

For fixed endpoints, perturb y by epsilon eta with eta(a)=eta(b)=0. Differentiate at zero:

$$
\delta J=\int_a^b\bigl(L_y\eta+L_{y'}\eta'\bigr)\,dx.
$$

Integration by parts gives

$$
\delta J=\int_a^b\left(L_y-\frac{d}{dx}L_{y'}\right)\eta\,dx+\bigl[L_{y'}\eta\bigr]_a^b.
$$

The boundary term vanishes for fixed endpoint variations. If delta J=0 for every smooth compactly supported eta, the fundamental lemma gives the Euler–Lagrange equation

$$
L_y-\frac{d}{dx}L_{y'}=0.
$$

This is a necessary condition for a sufficiently smooth interior minimizer. A stationary path could instead be a maximum or saddle, and a minimizer might fail to be smooth enough for the classical equation.

## 7. Worked variational cases

### Dirichlet energy

**Worked example.**

Let

$$
J[y]=\frac12\int_a^b(y')^2\,dx
$$

with y(a)=A and y(b)=B. Euler–Lagrange gives y''=0, so stationary paths are straight lines. Convexity makes the stationary path the unique global minimizer:

$$
J[\theta y+(1-\theta)z]\le\theta J[y]+(1-\theta)J[z],
$$

with strictness unless derivatives agree almost everywhere.

The same energy produces weak Poisson equations after adding a forcing term:

$$
J[y]=\frac12\int_a^b(y')^2\,dx-\int_a^b fy\,dx.
$$

Its first variation is integral y'eta'-integral f eta. Thus minimization and weak formulation coincide.

### Shortest graph

Length of a graph is

$$
J[y]=\int_a^b\sqrt{1+(y')^2}\,dx.
$$

Because L has no explicit y, Euler–Lagrange says y'/square root of 1+y' squared is constant, hence y' is constant and the graph is a line. This proves stationarity. Global minimality also follows from geometric or convex arguments.

### Mechanics

For

$$
L(q,q')=\frac12m(q')^2-V(q),
$$

Euler–Lagrange gives

$$
mq''=-V'(q).
$$

Action uses kinetic minus potential energy and is generally stationary, not globally minimized. Conjugate points and second variation diagnose loss of minimality.

## 8. Natural boundary conditions

If y(b) is free, eta(b) need not vanish. Stationarity forces the boundary coefficient

$$
L_{y'}(b)=0
$$

unless an endpoint cost or geometric constraint changes it. This is a natural boundary condition.

In higher-dimensional field problems, boundary terms distinguish prescribed values from prescribed fluxes. Finite-element weak formulations preserve this distinction: essential conditions enter the trial space, while natural conditions enter boundary integrals.

## 9. Constraints and multipliers

An isoperimetric problem minimizes J[y] subject to

$$
K[y]=\text{constant}.
$$

Under a constraint qualification, a stationary path satisfies Euler–Lagrange for J+lambda K with an unknown multiplier lambda. The multiplier is determined jointly with boundary data and the constraint.

Pointwise constraints, obstacles, positivity, and inequality constraints lead to variational inequalities and complementary conditions. Simply adding a constant multiplier is insufficient.

In optimal control, dynamics themselves constrain paths. Adjoint variables act as time-dependent multipliers, leading to Pontryagin conditions. These are necessary conditions under hypotheses, not automatic global optima.

## 10. Direct method and existence

Euler–Lagrange begins by assuming a sufficiently smooth optimizer. The direct method instead takes a minimizing sequence and asks:

1. coercivity: does bounded objective control an appropriate norm?
2. compactness: can a subsequence converge in a useful topology?
3. closure: does the limit remain admissible?
4. lower semicontinuity: is objective at the limit no larger than the liminf?

If yes, a minimizer exists. It may initially be weak; regularity theory then asks whether it satisfies a classical Euler–Lagrange equation.

Failure modes include escape to infinity, oscillation, concentration, nonconvex microstructure, and a constraint set not closed in the convergence topology.

## 11. Modal and variational approximations

Rayleigh–Ritz chooses a finite-dimensional trial space satisfying essential boundary conditions and minimizes energy there. Galerkin requires the residual be orthogonal to test functions. For symmetric coercive problems these viewpoints coincide.

Using the first N sine modes for fixed-end Poisson yields a spectral Galerkin method. Finite elements use local piecewise-polynomial bases and handle complex geometry. Approximation error depends on regularity and the trial space; algebraic solver error is a separate layer.

For an eigenproblem, the Rayleigh quotient

$$
R[u]=\frac{\int_0^L(u')^2\,dx}{\int_0^L u^2\,dx}
$$

has minimum (pi/L) squared over nonzero zero-end functions. Equality occurs for the first sine mode. Orthogonality constraints characterize later eigenvalues through min–max principles.

## 12. Honest theorem boundaries

- Fourier separation does not prove general nonlinear PDE solvability.
- Energy uniqueness does not construct a solution.
- A weak solution need not be classical.
- Euler–Lagrange is necessary, not always sufficient.
- Stationary does not mean minimum.
- A minimizing sequence does not guarantee a convergent admissible subsequence.
- A stable discrete linear solve does not repair wrong boundary conditions.
- Spectral convergence is not automatically exponential for rough data.

## Practice with worked solutions

### 1. Boundary mismatch

<a id="deep-dive-pde-fourier-variational-structure-ex-1"></a>

**Exercise 1.**

Why are sine modes inappropriate for an insulated heat rod with nonzero mean?


<details>
<summary>Hint 1</summary>

An insulated endpoint imposes zero derivative, while sine modes impose zero value.
</details>
<details>
<summary>Hint 2</summary>

Check which boundary condition each sine basis function satisfies and whether it includes the constant mode.
</details>
<details>
<summary>Solution</summary>

Sines satisfy zero value, not zero derivative, at endpoints and omit the constant Neumann mode. They enforce the wrong operator domain and cannot preserve the nonzero mean.

</details>

### 2. Natural endpoint

<a id="deep-dive-pde-fourier-variational-structure-ex-2"></a>

**Exercise 2.**

For J[y]=one half integral y' squared, fix y(a) but leave y(b) free. What conditions follow?


<details>
<summary>Hint 1</summary>

A free endpoint leaves the variation eta nonzero there.
</details>
<details>
<summary>Hint 2</summary>

Integrate the first variation by parts; the coefficient of the free endpoint variation must vanish.
</details>
<details>
<summary>Solution</summary>

The interior equation is y''=0. At b, eta is free, so the boundary term y'(b)eta(b) forces y'(b)=0. With only y(a) fixed, the minimizing straight path is constant.

</details>

### 3. Energy versus existence

An energy estimate shows two heat solutions with the same data are equal. What remains?

**Solution.** Existence and regularity remain. One may construct via Fourier series, semigroups, Galerkin limits, or another method and then verify the constructed object lies in the class used by the uniqueness proof.

### 4. Stationary saddle

Why can action in mechanics be stationary without minimal?

**Solution.** The first variation vanishes in every admissible direction, but the second variation can have both positive and negative directions. Kinetic-minus-potential structure is not generally convex over paths.
