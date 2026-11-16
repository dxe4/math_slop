var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: boundary-value-pde-methods
status: draft
title: "Boundary-Value and Field Discretizations"
level: advanced-undergraduate
estimated_minutes: 115
license: CC BY-SA 4.0
---



# Boundary-Value and Field Discretizations

## Numerical scope and prerequisites

Assume the continuous boundary or field problem, its domain, and compatible data have already been specified. General PDE classification and modeling belong elsewhere. This chapter examines finite differences, flux balances, weak discretization ideas, stability, and verification.

We use the one-dimensional boundary problem

\\(-u''(x)=f(x)\\) on \\((0,1)\\), with \\(u(0)=u(1)=0\\),

as a transparent prototype.

## From Taylor expansion to a grid equation

At a uniform grid point \\(x_i\\), Taylor expansion gives

\\([u(x_{i-1})-2u(x_i)+u(x_{i+1})]/h^{2} = u''(x_i)+\\mathcal O(h^{2})\\)

when \\(u\\) has four bounded derivatives locally. Replacing \\(-u''=f\\) produces a tridiagonal linear system.

The expression \\(\\mathcal O(h^{2})\\) is **local consistency**. Convergence of the discrete solution requires stability: local defects must not be amplified without control by the inverse discrete operator.

### Discrete energy and uniqueness

For zero boundary values, the discrete negative second derivative matrix \\(A\\) satisfies

\\(v^{\\mathsf T} A v = (1/h^{2}) \\sum_{i=0}^{n} (v_{i+1}-v_i)^{2}\\)

up to the chosen scaling convention. This is positive for every nonzero interior vector, so the system is uniquely solvable. The identity is a discrete analogue of integration by parts and supplies a stability estimate.

**Worked manufactured solution.** Choose \\(u(x)=x(1-x)\\). Then \\(-u''=2\\), and the central second difference reproduces the second derivative of this quadratic exactly at every interior node. The grid values solve the discrete equations exactly apart from arithmetic. This test checks assembly and boundary indexing, but it does not demonstrate the advertised order for a nonquadratic solution.

## Boundary conditions are part of the operator

Dirichlet data prescribe values; Neumann data prescribe normal flux; Robin data combine them. A pure Neumann Poisson problem has solutions only under a compatibility condition and is unique only up to a constant. Silently pinning one value changes the representation and must be documented.

Naive one-sided boundary stencils can reduce global accuracy. Ghost points, fitted stencils, or weak boundary enforcement each have consistency and stability contracts. Corners, curved boundaries, and discontinuous coefficients require special audits.

## Conservation through fluxes

A finite-volume method integrates a balance over each cell. Interior face fluxes cancel pairwise, leaving boundary flux and sources. This makes conservation algebraically visible:

\\(cell change = incoming flux - outgoing flux + source\\).

Conservation alone does not guarantee accuracy, positivity, or absence of oscillations. A flux must also approximate the constitutive law and handle direction, limiting, and boundary data consistently.

## Weak formulations and finite elements

For the prototype, multiply by a test function \\(v\\) vanishing at the boundary and integrate:

\\(\\int_0^{1} u' v' dx = \\int_0^{1} f v dx\\).

This weak form needs only first derivatives. Choose a finite-dimensional trial/test space, such as continuous piecewise linear functions. The Galerkin solution \\(u_h\\) satisfies the equation for every test function in that space.

**Céa estimate (proof in the finite-element chapter).** If a bilinear form \\(a\\) is continuous and coercive on a Hilbert space and the exact and Galerkin problems are well posed, then

\\(\\lVert u-u_h\\rVert \\le (M/\\alpha) \\inf_{v_h} \\lVert u-v_h\\rVert\\).

Here \\(M\\) is the continuity constant and \\(\\alpha\\) the coercivity constant in the selected norm. The theorem says the numerical solution is nearly as good as the best available finite-space approximation. It does not supply the approximation rate until mesh and regularity estimates are added.

## Time-dependent field problems

Spatial discretization often yields a large ODE system

\\(M y'(t)+K y(t)=g(t)\\).

The mass matrix \\(M\\), stiffness or flux operator \\(K\\), boundary treatment, and time integrator form one coupled algorithm. Explicit time steps for diffusion commonly face a restriction proportional to \\(h^{2}\\); implicit steps trade that restriction for linear or nonlinear solves.

For transport, centered high-order schemes can oscillate near discontinuities. Upwinding adds numerical diffusion. Limiters aim to balance resolution with monotonicity, but a method's order may drop near extrema or shocks. A beautiful smooth-region convergence plot does not settle discontinuous cases.

## Consistency, stability, and convergence

For a well-posed linear initial-value discretization, a Lax-style equivalence theorem relates consistency plus stability to convergence under a specified norm and setup. Quoting “consistency plus stability equals convergence” without defining the problem class, stability norm, boundary treatment, and refinement is incomplete.

Grid refinement should preserve the physical domain and compare solutions on a common representation. Refining only the solver tolerance while keeping the mesh fixed measures algebraic error, not discretization error.

## Verification ladder

1. **Exact discrete case:** constants, linears, or known null modes.
2. **Manufactured solution:** derive forcing and boundary data from a chosen smooth solution.
3. **Refinement study:** compare errors across meshes and estimate observed order.
4. **Conservation/energy audit:** track the structure the scheme promises.
5. **Independent formulation:** compare flux and weak forms or a different stencil family.
6. **Boundary stress cases:** nonzero flux, mixed conditions, corners, and coefficient jumps.

### Observed order

If errors behave as \\(E_h=C h^p\\), then

\\(p_{obs}=\\log(E_h/E_{h/2})/\\log 2\\).

Using differences between nested solutions can estimate order when exact truth is absent, but correlated errors or interpolation between grids can distort the result.

## Common errors

- Calling a stencil second order after testing only a polynomial it reproduces exactly.
- Ignoring compatibility and null spaces in Neumann problems.
- Reporting solver residual as field discretization error.
- Mixing cell averages and point values without a conversion contract.
- Assuming conservation implies convergence or physical validity.

## The grid, norm, and boundary contract

A finite-difference equation is incomplete until the unknown locations, endpoint treatment and norm are specified. In this chapter let $N\\ge2$ be the number of equal intervals, $h=1/N$, and $x_i=ih$. Interior vectors have $N-1$ entries; extend them by $v_0=v_N=0$. Define
$$
(A_hv)_i=\\frac{-v_{i-1}+2v_i-v_{i+1}}{h^2},
\\qquad \\|v\\|_\\infty=\\max_{1\\le i<N}|v_i|.
$$
This convention removes the scaling ambiguity in the earlier energy identity. If a matrix is instead assembled without the factor $h^{-2}$, its right-hand side and inverse bound must change together.

**Definition 1 (Grid consistency).** With sampling operator $(I_hu)_i=u(x_i)$, the truncation defect is $\\tau_h=A_hI_hu-I_hf$. Consistency in the maximum norm means $\\|\\tau_h\\|_\\infty\\to0$ for the stated smooth exact functions as the mesh refines. This compares exact samples with the exact discrete operator, before any rounding or linear-solver error.

**Proposition 2 (Central consistency).** If $u\\in C^4[0,1]$ and $-u''=f$, then $\\|\\tau_h\\|_\\infty\\le h^2\\|u^{(4)}\\|_\\infty/12$.

*Proof.* Taylor-expand $u(x_i+h)$ and $u(x_i-h)$ to third order with fourth-order remainders bounded by $\\|u^{(4)}\\|_\\infty h^4/24$ each. Adding cancels odd terms. The error in the second difference is at most $h^2\\|u^{(4)}\\|_\\infty/12$, and negation gives the claimed bound. The stencil stays inside $[0,1]$, including at the first and last interior points. ∎

The proof is uniform because the fourth derivative is bounded on the closed interval. At a coefficient jump, corner singularity or discontinuous solution, applying that Taylor argument across the irregularity is invalid. One can still formulate a useful scheme, but its rate requires a different representation and analysis.

## Maximum principle and a complete convergence proof

**Lemma 3 (Discrete comparison).** If $A_hv\\ge0$ componentwise and $v_0,v_N\\ge0$, then $v_i\\ge0$ everywhere.

*Proof.* If there were a negative interior minimum at index $i$, then $2v_i-v_{i-1}-v_{i+1}\\le0$. The assumed nonnegative value forces equality and both neighbors equal to this minimum. Repeating along the connected grid reaches an endpoint with the same negative value, contradicting its nonnegativity. Thus a negative minimum is impossible. ∎

This proof also explains why connection to the boundary matters. A periodic or Neumann Laplacian has constants in its null space; the endpoint contradiction is unavailable. A coercive reaction term or a gauge changes the operator contract rather than repairing the same proof by wording.

**Theorem 4 (Uniform inverse bound and convergence).** For the stated homogeneous Dirichlet grid, $A_h$ is invertible and
$$\\|A_h^{-1}g\\|_\\infty\\le\\frac18\\|g\\|_\\infty.$$
Consequently the solution of $A_hU=I_hf$ satisfies
$$\\|I_hu-U\\|_\\infty\\le\\frac{h^2}{96}\\|u^{(4)}\\|_\\infty.$$

*Proof.* The comparison lemma applied to $v$ and $-v$ shows a zero right-hand side has only the zero solution. A square finite-dimensional matrix with trivial kernel is invertible. Put $w_i=x_i(1-x_i)/2$. Quadratic exactness gives $A_hw=\\mathbf1$, and $0\\le w_i\\le1/8$. For $v=A_h^{-1}g$, let $G=\\|g\\|_\\infty$. Then $A_h(Gw-v)=G\\mathbf1-g\\ge0$ and $A_h(Gw+v)=G\\mathbf1+g\\ge0$, with zero endpoint data. Comparison gives $-Gw\\le v\\le Gw$, proving the inverse bound. Finally $A_h(I_hu-U)=\\tau_h$, and Proposition 2 gives the error estimate. ∎

This is a complete consistency-plus-stability argument for one precisely stated elliptic problem. It does not need a general Lax equivalence theorem. The inverse norm and truncation norm match, the domain is fixed, the boundary values are represented exactly, and the solution has the required regularity. Nonzero Dirichlet data enter the right-hand side through the known endpoint terms; a boundary-data error contributes separately through comparison.

If a numerical solver returns $\\widehat U$ with residual $r=I_hf-A_h\\widehat U$, then
$$\\|I_hu-\\widehat U\\|_\\infty
\\le\\frac18\\bigl(\\|\\tau_h\\|_\\infty+\\|r\\|_\\infty\\bigr).$$
A rigorous use of this inequality requires enclosed residual arithmetic. A nearest-rounded residual remains useful evidence but is not automatically a proof bound.

**Worked example 1 (A nonquadratic manufactured case).** Take $u(x)=x^4-x$ so both endpoints vanish and $f(x)=-12x^2$. Its fourth derivative equals $24$. At $h=1/2$ there is one unknown with $A_h=(8)$ and load $-3$, so $U_1=-3/8$. The exact sample is $1/16-1/2=-7/16$. Their difference is $-1/16$, of magnitude $0.0625$. The theorem gives $24(1/2)^2/96=1/16$, attained here. Unlike the quadratic example, this case has a nonzero truncation defect and exercises the predicted order.

## Heat stepping and the exact meaning of a CFL restriction

Consider $u_t=\\kappa u_{xx}$, $\\kappa>0$, on a uniform grid. With either periodic data or fixed homogeneous Dirichlet values, forward Euler in time and centered space give
$$U_i^{n+1}=\\mu U_{i-1}^n+(1-2\\mu)U_i^n+\\mu U_{i+1}^n,
\\qquad \\mu=\\frac{\\kappa\\Delta t}{h^2}.$$
The dimensionless diffusion number measures the interaction of space and time steps.

**Theorem 5 (Explicit heat maximum-norm stability).** If $0\\le\\mu\\le1/2$, each new value is a convex combination of old neighboring values. The homogeneous scheme is a contraction in the maximum norm and preserves any common interval containing the old and boundary values.

*Proof.* All three weights are nonnegative and sum to one. Thus an updated value lies between the minimum and maximum of its inputs. Apply this to a difference of two solutions with the same boundary values to get the contraction inequality. Repetition preserves it for every time level. ∎

For a periodic Fourier mode $U_i^n=\\xi^ne^{\\mathrm i i\\theta}$, direct substitution gives
$$\\xi(\\theta)=1-4\\mu\\sin^2(\\theta/2).$$
On an even periodic grid the alternating mode $\\theta=\\pi$ is present. Requiring $|\\xi|\\le1$ for all modes gives exactly $\\mu\\le1/2$. With Dirichlet data on a finite grid the largest eigenvalue has a slightly smaller magnitude than $4\\kappa/h^2$, so a slightly larger grid-dependent spectral step can exist. The uniform $1/2$ condition remains a simple sufficient maximum-principle condition and becomes sharp for refinement. State which claim is being made.

**Worked example 2 (An unstable alternating mode).** Take $\\kappa=3$, $h=0.1$. The uniform bound is $\\Delta t\\le h^2/(2\\kappa)=1/600$. With $\\Delta t=0.002$, $\\mu=0.6$. The alternating periodic mode is multiplied by $1-4(0.6)=-1.4$ at each step, so its magnitude grows even though the continuous heat equation dissipates it. With $\\Delta t=0.001$, $\\mu=0.3$ and this multiplier is $-0.2$. Some sign oscillation is compatible with contraction; preservation of nonnegative data follows from all stencil weights, not from a demand that every modal multiplier be nonnegative.

The term CFL originates in hyperbolic domain-of-dependence reasoning. For diffusion it is often used broadly for this explicit stability restriction. For transport $u_t+a u_x=0$ with $a>0$, an upwind step is
$U_i^{n+1}=(1-\\nu)U_i^n+\\nu U_{i-1}^n$, $\\nu=a\\Delta t/h$.
Its convexity restriction is $0\\le\\nu\\le1$. The exact information travels distance $a\\Delta t$ per step, which must lie within the numerical stencil's upstream reach for convergence under this explicit local scheme. This necessary domain-of-dependence condition alone does not prove a general method stable or accurate.

Centered forward-time transport instead has multiplier $1-\\mathrm i\\nu\\sin\\theta$ and squared modulus $1+\\nu^2\\sin^2\\theta$. Except for zero or degenerate modes it exceeds one. Merely satisfying $\\nu\\le1$ cannot rescue that scheme. CFL compatibility and a sufficient stability theorem are separate steps in the reasoning.

## Implicit diffusion and energy

Backward Euler satisfies $(I+\\Delta t\\kappa A_h)U^{n+1}=U^n$; Crank–Nicolson satisfies
$$(I+\\tfrac12\\Delta t\\kappa A_h)U^{n+1}
=(I-\\tfrac12\\Delta t\\kappa A_h)U^n.$$
The symmetric positive-definite Dirichlet $A_h$ has an orthogonal eigenbasis. On a mode with eigenvalue $\\lambda_h>0$, the multipliers are $1/(1+\\Delta t\\kappa\\lambda_h)$ and $(1-\\Delta t\\kappa\\lambda_h/2)/(1+\\Delta t\\kappa\\lambda_h/2)$. Both have modulus at most one for every positive time step. This proves Euclidean stability of the exact algebraic updates. Crank–Nicolson's multiplier tends to minus one on a very stiff mode, so unconditional stability does not imply strong damping or a maximum principle.

**Worked example 3 (A stable oscillatory implicit mode).** Suppose $\\Delta t\\kappa\\lambda_h=10$. Backward Euler multiplies the mode by $1/11$; Crank–Nicolson multiplies it by $-2/3$. The exact semidiscrete multiplier is $e^{-10}$. Both steps are norm stable; only the first strongly suppresses the unresolved component. Second-order time accuracy is a small-step asymptotic statement and does not justify a coarse oscillatory transient.

## A reproducible finite-difference specification

~~~text
poisson_dirichlet(N, f):
    require integer N >= 2
    h = 1/N
    diagonal[i] = 2/h^2
    lower[i] = upper[i] = -1/h^2
    rhs[i] = f(i*h), for i = 1,...,N-1
    solve the tridiagonal system with zero endpoint values
    recompute rhs - A*U independently
    return U and the residual
~~~

For $N=2$ and $f(x)=-12x^2$ the expected output is the one-entry vector $(-3/8)$ with zero exact-arithmetic residual. This fixture follows algebraically from Worked example 1; it makes no claim of an executed solver. For the sine source $f=\\pi^2\\sin(\\pi x)$, the sampled sine vector is an eigenvector with eigenvalue
$\\lambda_h=4h^{-2}\\sin^2(\\pi h/2)$.
Thus $U_i=(\\pi^2/\\lambda_h)\\sin(\\pi x_i)$, an explicit nonpolynomial refinement reference.

At four interior points, $N=5$, this gives approximately $(0.607510,0.982972,0.982972,0.607510)$ rather than exact samples $(0.587785,0.951057,0.951057,0.587785)$. This example from the continuum discretization route belongs to the same operator contract. Retaining the exact eigenvalue formula is more useful than comparing rounded tables alone.

## Practice with solutions

### Exercise 1: Null space
<a id="boundary-value-pde-methods-ex-1"></a>

Why does the discrete Laplacian with pure Neumann conditions have a constant null vector?

<details>
<summary>Hint 1</summary>

**Hint.** Apply the operator to a constant vector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All value differences vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differences of a constant vanish, so every interior and boundary flux difference is zero. This mirrors the continuous fact that derivatives do not determine an additive constant. A compatibility condition and gauge or quotient-space treatment are required.

</details>

### Exercise 2: Refinement ratio
<a id="boundary-value-pde-methods-ex-2"></a>

Errors are \\(0.020,0.0051,0.00128\\) as \\(h\\) halves. Estimate the order.

<details>
<summary>Hint 1</summary>

**Hint.** Form successive error ratios.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take their base-two logarithms.

</details>

<details>
<summary>Solution</summary>

**Solution.** Ratios are about \\(3.92\\) and \\(3.98\\); logarithm base two gives orders near \\(1.97\\) and \\(1.99\\), supporting second-order behavior in this range.

</details>

### Exercise 3: Manufactured limit
<a id="boundary-value-pde-methods-ex-3"></a>

What does a passed manufactured-solution test not establish?

<details>
<summary>Hint 1</summary>

**Hint.** Separate numerical verification from model validity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** One manufactured case tests selected formulas and data paths.

</details>

<details>
<summary>Solution</summary>

**Solution.** It does not validate the physical model, cover nonsmooth solutions, prove stability, test every boundary case, or guarantee convergence on distorted meshes. It checks the implemented equations for the chosen case.

</details>

## Claim boundary

This chapter treats discretization mathematics for already posed boundary and field problems. It does not take ownership of the general differential-equations curriculum or infer physical truth from numerical agreement.


## Further exercises

### Exercise 4: Comparison principle
<a id="boundary-value-pde-methods-ex-4"></a>

Why does the comparison proof fail for a periodic grid without a reaction term?

<details>
<summary>Hint 1</summary>

**Hint.** Track the minimum through equal neighbors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There is no anchored endpoint.

</details>

<details>
<summary>Solution</summary>

**Solution.** A constant negative vector has zero periodic Laplacian. Propagating a negative minimum around the grid gives no contradiction, so the operator has a constant null mode. A compatibility condition and gauge are needed for Poisson inversion.

</details>

### Exercise 5: Barrier bound
<a id="boundary-value-pde-methods-ex-5"></a>

For $A_hv=g$ and $\\|g\\|_\\infty\\le0.08$, bound $\\|v\\|_\\infty$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the proved inverse norm.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Multiply the data norm by one eighth.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $0.08/8=0.01$. It applies to the specified unit-interval homogeneous Dirichlet operator with its $h^{-2}$ scaling, uniformly in the grid. Changing domain length changes the barrier and its constant.

</details>

### Exercise 6: Heat weights
<a id="boundary-value-pde-methods-ex-6"></a>

At $\\mu=0.4$, update old neighboring values $(1,0,0)$. Explain positivity.

<details>
<summary>Hint 1</summary>

**Hint.** List the three stencil weights.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The center weight is one minus twice mu.

</details>

<details>
<summary>Solution</summary>

**Solution.** The new center value is $0.4(1)+0.2(0)+0.4(0)=0.4$. All weights are nonnegative and sum to one, so any old values in $[0,1]$ remain there. The result needs compatible boundary values as well.

</details>

### Exercise 7: Transport instability
<a id="boundary-value-pde-methods-ex-7"></a>

For centered forward-time transport, show instability on a mode with $\\sin\\theta\\ne0$ and $\\nu\\ne0$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the squared modulus.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The real and imaginary parts are perpendicular.

</details>

<details>
<summary>Solution</summary>

**Solution.** The multiplier is $1-\\mathrm i\\nu\\sin\\theta$, with squared modulus $1+\\nu^2\\sin^2\\theta>1$. Repeated steps amplify the mode. An ordinary Courant bound $\\nu\\le1$ does not imply this scheme's stability.

</details>

### Exercise 8: Manufactured heat source
<a id="boundary-value-pde-methods-ex-8"></a>

For $u=e^{-t}\\sin(\\pi x)$, find forcing in $u_t-\\kappa u_{xx}=f$ and endpoint data on $(0,1)$.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate time and space separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The second space derivative contributes minus pi squared.

</details>

<details>
<summary>Solution</summary>

**Solution.** The source is $f=(\\kappa\\pi^2-1)e^{-t}\\sin(\\pi x)$. Endpoint values are zero and initial data are $\\sin(\\pi x)$. The scheme must use all three consistently for a manufactured-solution comparison.

</details>

### Exercise 9: Residual contribution
<a id="boundary-value-pde-methods-ex-9"></a>

If $\\|\\tau_h\\|_\\infty\\le0.002$ and $\\|r\\|_\\infty\\le0.0004$, bound the total sampled error.

<details>
<summary>Hint 1</summary>

**Hint.** Use the same inverse estimate on the sum of defects.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add their norm bounds before multiplying.

</details>

<details>
<summary>Solution</summary>

**Solution.** The error is at most $(0.002+0.0004)/8=0.0003$. A rigorous certificate requires both inputs to be proved or enclosed bounds. A tiny solver residual cannot remove the truncation term.

</details>

### Exercise 10: Sine eigenvector
<a id="boundary-value-pde-methods-ex-10"></a>

Use $\\sin(a+b)+\\sin(a-b)=2\\sin(a)\\cos(b)$ to derive the sampled sine eigenvalue.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the tridiagonal row to a sine sample.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Rewrite one minus cosine as twice sine squared.

</details>

<details>
<summary>Solution</summary>

**Solution.** The row gives $[2-2\\cos(\\pi h)]\\sin(\\pi x_i)/h^2=4h^{-2}\\sin^2(\\pi h/2)\\sin(\\pi x_i)$. Endpoint samples vanish. The exact discrete solution scales this vector by $\\pi^2/\\lambda_h$, revealing a genuine discretization error.

</details>

## Choosing the refinement path

A useful refinement study states what is held fixed. In the heat problem, halving the space step while keeping a forward Euler time step fixed eventually violates the stability condition. Reducing both together with $\\Delta t$ proportional to $h^2$ respects that restriction, but blends first-order time error with second-order space error at the same asymptotic scale. To identify the spatial order, choose a time step small enough that another time refinement changes the measured output negligibly. To identify time order, hold the grid fixed and recognize that the reference is then the semidiscrete solution unless a spatial bound is included.

Boundary approximation deserves a similar independent study. A one-sided derivative used for Neumann data can have a lower consistency order than the interior stencil. Pure Neumann data also need compatibility before a gauge is selected; pinning a value in an incompatible system does not solve the original problem. On curved domains, refining the interior while keeping a polygonal boundary fixed converges to the problem on that polygon. The geometry representation must converge to the intended domain if a continuum-domain claim is desired.

The error norm should follow the question. Maximum error is informative for a smooth scalar Dirichlet solution, energy error measures derivatives in a variational problem, and an integral norm can better describe a displaced front. A convergence rate without its norm, boundary treatment, regularity and refinement path is incomplete. These choices determine which theorem applies and which observed discrepancy can falsify the computation.

## Sources

The maximum-principle, barrier and Fourier calculations are proved here. Driscoll and Braun, [Absolute stability](https://fncbook.com/absstab-diffusion/) and [Stiffness](https://fncbook.com/stiffness/), give an author-maintained treatment of time stepping for semidiscrete diffusion. The general Lax equivalence theorem is orientation only; its full functional-analytic proof is not supplied or needed for the scalar elliptic proof above. The finite-element quasi-optimality proof is developed in the following chapter.

## Summary

Consistency identifies the defect made by exact samples. Stability bounds its amplification in a specified norm. For the unit-interval Dirichlet problem, comparison and a quadratic barrier give an explicit uniform inverse bound and a full second-order error estimate. Heat and transport show why space, time and boundary treatment form one algorithm: their Courant restrictions have precise hypotheses. Finite volumes and finite elements next provide alternative conservation and variational structures.
`;export{e as default};