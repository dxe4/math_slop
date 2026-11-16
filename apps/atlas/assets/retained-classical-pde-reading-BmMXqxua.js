var e=`---
parent_id: book-differential-equations-verified-dynamics
matter_id: retained-classical-pde-reading
title: PDE Boundaries, Energy, and Fourier Structure
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# PDE Boundaries, Energy, and Fourier Structure

A partial differential equation is not only a formula containing partial derivatives. It is an operator on a domain, paired with initial and boundary data and interpreted in a named function class. Heat, waves, and equilibrium fields may share spatial derivatives but make different promises about smoothing, propagation, and admissible data.

This chapter develops classical one-dimensional prototypes, their energy identities, Fourier modes, and the first weak-solution viewpoint. It does not claim the full regularity or existence theory of general PDEs.

## 1. From local balance to a field equation

Let u(x,t) be temperature in a uniform rod. Internal energy per unit length is rho c u, where rho is density per length and c is specific heat. Fourier’s constitutive law says heat flux is

$$q=-ku_x,$$

so heat moves down the temperature gradient when conductivity k is positive. Conservation on an interval [a,b] gives

$$\\frac{d}{dt}\\int_a^b\\rho cu\\,dx=q(a,t)-q(b,t)+\\int_a^b s(x,t)\\,dx.$$

For smooth u, localization yields

$$\\rho cu_t=ku_{xx}+s.$$

With constant coefficients and no source,

$$u_t=\\kappa u_{xx},\\qquad\\kappa=\\frac{k}{\\rho c}>0.$$

Units: kappa has length squared per time. A diffusion time across length L is L squared/kappa.

The derivation assumes a continuum, local equilibrium, linear flux-gradient response, uniform material, and enough smoothness to localize. At very short length or time scales, non-Fourier transport may be needed.

## 2. Initial and boundary data

On 0<x<L, the heat equation needs initial temperature

$$u(x,0)=u_0(x)$$

and boundary conditions. Common choices:

- Dirichlet: u is prescribed at endpoints;
- Neumann: flux, hence u_x, is prescribed;
- Robin: a linear combination models convective exchange;
- periodic: endpoints represent the same location.

Boundary data must be compatible with a requested classical solution at corners. If u0(0) differs from the prescribed u(0,0), a smooth solution up to the corner cannot satisfy both. A weaker solution may still exist and smooth immediately for positive time.

For insulated Neumann boundaries u_x=0, total heat is conserved:

$$\\frac{d}{dt}\\int_0^L u(x,t)\\,dx=\\kappa[u_x(L,t)-u_x(0,t)]=0.$$

For zero Dirichlet boundaries, heat can leave; the mean is not generally conserved.

## 3. Classification of second-order equations

A linear second-order PDE in two variables has principal part

$$Au_{xx}+2Bu_{xy}+Cu_{yy}.$$

The sign of B squared-AC distinguishes elliptic, parabolic, and hyperbolic principal symbols under nondegenerate coordinate changes:

- negative: elliptic;
- zero: parabolic;
- positive: hyperbolic.

Laplace’s equation is elliptic; heat is parabolic in space-time; the wave equation is hyperbolic. Classification is local and concerns the highest-order terms. Lower-order terms, boundaries, coefficient degeneracy, nonlinearity, and systems affect the actual theory.

Elliptic problems usually impose boundary data rather than initial time evolution. Parabolic problems smooth while evolving. Hyperbolic problems carry finite-speed signals. These descriptions require hypotheses and should not be used as definitions.

## 4. Maximum principle for heat

Suppose u is a classical heat solution on a closed space-time rectangle with kappa positive. At a strict interior space-time maximum occurring after initial time,

$$u_x=0,\\qquad u_{xx}\\le0,\\qquad u_t\\ge0$$

when viewed as the first attainment of a new maximum. But the equation gives u_t=kappa u_xx<=0, producing a contradiction under a strict formulation. Therefore the maximum is controlled by initial and spatial boundary data.

Consequences include:

- uniqueness for classical Dirichlet problems;
- preservation of nonnegativity;
- comparison of subsolutions and supersolutions;
- no spontaneous overshoot beyond imposed extremes.

The proof must handle nonstrict cases, often by perturbing u to u-epsilon t. For an elliptic pure-Neumann problem, constants lie in the kernel and a normalization such as fixed mean is needed. For Neumann heat evolution, the prescribed initial condition fixes the constant mode and restores uniqueness.

A discrete method with negative weights can violate a maximum principle even while converging asymptotically. Positivity and monotonicity are numerical properties worth auditing.

## 5. Heat energy identity

For zero Dirichlet data and a smooth solution,

$$E(t)=\\tfrac12\\int_0^L u(x,t)^2\\,dx.$$

Differentiate, use the PDE, and integrate by parts:

$$\\begin{aligned}E'&=\\int_0^L uu_t\\,dx=\\kappa\\int_0^L uu_{xx}\\,dx\\\\&=\\kappa[uu_x]_0^L-\\kappa\\int_0^L u_x^2\\,dx=-\\kappa\\int_0^L u_x^2\\,dx.\\end{aligned}$$

The boundary term vanishes because u=0 at both endpoints.

This identity proves uniqueness. If u and v share data, w=u-v solves the homogeneous problem with E(0)=0. Since E is nonnegative and nonincreasing, it remains zero.

Poincaré’s inequality for zero-end functions,

$$\\int_0^L u^2\\,dx\\le\\left(\\frac L\\pi\\right)^2\\int_0^L u_x^2\\,dx,$$

gives

$$E'\\le-2\\kappa\\left(\\frac\\pi L\\right)^2E.$$

Gronwall then yields exponential L2 decay at the rate of the slowest sine mode. The constant is sharp.

Energy uniqueness assumes enough regularity to differentiate and integrate by parts. A weak formulation recovers the argument through approximation.

## 6. Wave equation and finite propagation

For a stretched string with displacement u, tension T, and mass density rho, small-slope force balance gives

$$u_{tt}=c^2u_{xx},\\qquad c^2=T/\\rho.$$

Initial data specify both displacement and velocity:

$$u(x,0)=u_0(x),\\qquad u_t(x,0)=v_0(x).$$

On the whole line, d’Alembert’s formula is

$$u(x,t)=\\tfrac12[u_0(x-ct)+u_0(x+ct)]+\\frac1{2c}\\int_{x-ct}^{x+ct}v_0(s)\\,ds.$$

Only initial data within distance ct influence (x,t), demonstrating finite propagation speed. Heat behaves differently: its fundamental solution is positive everywhere for any positive time, so influence is instantly nonzero in the ideal mathematical model.

Finite propagation does not say signals retain shape in every medium. Variable coefficients, multiple dimensions, dispersion, damping, and nonlinear shocks change waveforms.

## 7. Wave energy

For fixed endpoints, define

$$E(t)=\\tfrac12\\int[u_t^2+c^2u_x^2]\\,dx.$$

Then

$$E'=\\int[u_tu_{tt}+c^2u_xu_{xt}]\\,dx=c^2\\int[u_tu_{xx}+u_xu_{xt}]\\,dx.$$

Integrating the first term by parts gives boundary power c squared u_t u_x and cancels the interior second term. Fixed endpoints have u_t=0 there, so E'=0.

Different boundary conditions change the energy flux. A driven endpoint injects or removes energy. Damping adds a negative term. Calling a numerical energy change “error” is wrong when the boundary or damping physically changes energy.

Uniqueness follows by applying the energy identity to the difference of two solutions with identical data. Zero initial energy forces both w_t and w_x to vanish; fixed boundaries then force w=0.

## 8. Separation of variables as an eigenproblem

For zero-end heat, try u=X(x)T(t). Substitution gives

$$\\frac{T'}{\\kappa T}=\\frac{X''}X=-\\lambda.$$

The spatial problem is

$$-X''=\\lambda X,\\qquad X(0)=X(L)=0.$$

Nonzero solutions occur at

$$\\lambda_n=\\left(\\frac{n\\pi}L\\right)^2,\\qquad X_n=\\sin\\frac{n\\pi x}L.$$

The time factors are exp(-kappa lambda_n t). Thus a formal solution is

$$u(x,t)=\\sum_{n=1}^{\\infty}b_ne^{-\\kappa\\lambda_nt}\\sin\\frac{n\\pi x}L.$$

For the wave equation, time factors solve T''+c squared lambda_n T=0, producing sines and cosines in time.

Separation does not claim every solution is one product. Linearity permits sums, and completeness of eigenfunctions represents suitable data. The functional setting justifies convergence and differentiation.

## 9. Orthogonality and Fourier coefficients

The sine modes satisfy

$$\\int_0^L\\sin\\frac{n\\pi x}L\\sin\\frac{m\\pi x}L\\,dx=\\begin{cases}0,&n\\ne m,\\\\L/2,&n=m.\\end{cases}$$

Therefore suitable initial data have coefficients

$$b_n=\\frac2L\\int_0^L u_0(x)\\sin\\frac{n\\pi x}L\\,dx.$$

In L2, the normalized modes form a complete orthonormal basis. Parseval’s identity says

$$\\int_0^L|u_0|^2\\,dx=\\frac L2\\sum_{n=1}^{\\infty}|b_n|^2.$$

This is a statement about mean-square representation. Pointwise convergence at a jump approaches the midpoint of one-sided limits under standard piecewise-smooth hypotheses. Uniform convergence fails across a jump. Differentiating the series termwise needs stronger coefficient decay or a weak interpretation.

For positive heat time, exponential mode damping makes the series much smoother than rough L2 initial data. This is the smoothing effect in spectral coordinates.

## 10. Other boundary operators

Neumann conditions X'(0)=X'(L)=0 produce cosine modes, including the constant mode lambda zero. That constant represents the conserved mean and does not decay.

Robin conditions produce a transcendental eigenvalue equation. Mixed conditions shift the frequencies. Periodic boundaries produce complex exponential modes or paired sines and cosines.

More generally, a regular Sturm–Liouville problem

$$-(pX')'+qX=\\lambda wX$$

with suitable self-adjoint boundary conditions has real eigenvalues and orthogonal eigenfunctions in weighted inner product integral wXY. Self-adjointness, positivity, and compactness hypotheses do the work. Singular endpoints and nonself-adjoint operators need more care.

Boundary conditions are part of the operator. Reusing fixed-end sine modes for an insulated problem is not an approximation choice; it solves the wrong spectral problem.

## 11. Weak formulation

For Poisson’s equation

$$-u_{xx}=f,\\qquad u(0)=u(L)=0,$$

multiply by a smooth test function v vanishing at endpoints and integrate:

$$\\int_0^L u_xv_x\\,dx=\\int_0^L fv\\,dx.$$

Only one weak derivative of u appears. This motivates seeking u in the Sobolev space of square-integrable functions with square-integrable weak derivative and zero trace.

The bilinear form a(u,v)=integral u_xv_x is coercive by Poincaré’s inequality. The linear functional integral fv is bounded. Lax–Milgram then gives one weak solution under appropriate data hypotheses.

This slice has not constructed Sobolev spaces or proved Lax–Milgram, so the paragraph is an orientation, not a self-contained full theorem. The key methodological point is complete: integration by parts transfers derivatives to tests, embeds boundary conditions in the function space, and makes energy the natural norm.

For the heat equation, a weak formulation integrates against space-time tests and incorporates initial data through a time integration by parts. Weak solutions can exist when classical pointwise derivatives do not.

## 12. Conservation laws and shocks

The scalar conservation law

$$u_t+f(u)_x=0$$

integrates conservation over space-time control volumes. Even smooth initial data can develop crossing characteristics and discontinuities.

A weak solution satisfies the integrated identity against all compactly supported smooth tests. Weak solutions are not unique. An entropy condition selects physically admissible shocks, for example ruling out a shock whose characteristics emerge from it in the wrong direction for a convex flux.

For Burgers’ flux f(u)=u squared/2, characteristic speed is u. Decreasing initial data can make faster left characteristics catch slower right ones, producing a shock. Increasing data spread into a rarefaction.

Fourier truncation near shocks rings and does not enforce entropy automatically. Finite-volume methods use numerical fluxes and conservation; monotonicity, total variation, and entropy consistency become central.

## 13. Reaction–diffusion and pattern boundaries

A reaction–diffusion system has

$$u_t=Du_{xx}+F(u)$$

for vector u and diffusion matrix D. A spatially stable homogeneous equilibrium can become unstable to some nonzero Fourier modes when components diffuse at different rates and reaction coupling satisfies suitable conditions. This is a Turing instability.

A linear dispersion relation tells which infinitesimal modes initially grow. It does not by itself prove a stable nonlinear pattern, select final amplitude, or validate the reaction mechanism. Domain size and boundary conditions discretize allowed modes.

If D has a negative eigenvalue, the forward problem can be ill-posed: high-frequency modes grow arbitrarily fast. “Diffusion” requires positive semidefinite structure.

## 14. Numerical boundary audits

For heat on a uniform grid, forward Euler with centered second differences gives

$$u_j^{n+1}=u_j^n+r(u_{j+1}^n-2u_j^n+u_{j-1}^n),\\qquad r=\\frac{\\kappa\\,\\Delta t}{(\\Delta x)^2}.$$

The weights are nonnegative and sum to one when 0<=r<=1/2. Then the discrete maximum principle holds. If r>1/2, the centre weight is negative; high-frequency modes grow and oscillate.

This condition couples time and space refinement. Halving dx while keeping dt fixed multiplies r by four and can destabilize a previously stable computation.

For the wave equation, centered explicit schemes have a Courant condition c dt/dx<=1 in the standard one-dimensional case. Boundaries, variable coefficients, and dimensions modify the restriction.

An audit reports:

- continuous PDE, coefficient units, domain, initial and boundary data;
- solution concept and regularity expected;
- spatial operator and boundary discretization;
- time integrator and stability restriction;
- mesh and time refinement;
- mass, maximum, energy, entropy, or residual diagnostics;
- treatment of discontinuities and linear solver tolerances.

## Worked problems

### 1. Neumann mean

Show that heat flow with u_x=0 at both ends preserves the spatial mean.

**Solution.** Integrate the PDE:

$$\\frac{d}{dt}\\int_0^L u\\,dx=\\kappa\\int_0^L u_{xx}\\,dx=\\kappa[u_x(L,t)-u_x(0,t)]=0.$$

Division by L shows the mean is constant. The constant Fourier mode therefore cannot decay.

### 2. Heat uniqueness

Why does the energy proof compare two solutions rather than trying to solve either one?

**Solution.** Their difference satisfies a homogeneous linear equation with zero data. Energy then begins at zero and cannot increase, forcing the difference to vanish. Uniqueness can be proved without constructing a solution.

### 3. Wave boundary power

If a string endpoint moves, why might energy fail to be conserved?

**Solution.** Integration by parts leaves boundary power c squared u_t u_x. At a fixed endpoint u_t=0, but a moving boundary can do work on the string. The sign records injection or removal, so numerical energy change should be compared to boundary work.

### 4. Fourier claim repair

“The Fourier series equals the initial function at every point because the sine modes are complete.”

**Solution.** Completeness gives L2 equality for the equivalence class of square-integrable data. Pointwise equality needs additional regularity and can fail or converge to midpoint values at jumps. Uniform equality is stronger still.

### 5. Explicit heat instability

For r=0.6, what is the amplification of the alternating grid mode u_j=(-1)^j?

**Solution.** The second-difference bracket is -4u_j, so the update multiplies the mode by 1-4r=1-2.4=-1.4. Its magnitude grows and sign alternates. The continuum heat equation damps this mode, so the scheme is numerically unstable at that grid ratio.

## Dependency ledger

- Conservation plus Fourier’s constitutive law produced the heat equation.
- Boundary conditions removed or exposed energy flux terms.
- Maximum principles used the sign of the second derivative at an interior extreme.
- Poincaré’s inequality converted dissipation into exponential decay.
- Orthogonality computed modal coefficients; completeness justified L2 representation.
- Extra regularity, not completeness alone, controls pointwise differentiation.
- Weak formulations used integration by parts to reduce derivative demands.
- Entropy conditions selected among weak conservation-law solutions.
- Discrete convex weights supplied a maximum principle under the heat stability restriction.
`;export{e as default};