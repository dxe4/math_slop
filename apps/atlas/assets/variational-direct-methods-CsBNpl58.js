var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: variational-direct-methods
title: Variational and Direct Methods
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Variational and Direct Methods

A differential equation can arise as the stationarity condition of an energy, but stationarity is not existence and is not minimality. This chapter derives Euler–Lagrange equations with their boundary terms, develops convexity and second-variation tests, and proves the direct-method architecture that produces minimizers from compactness and lower semicontinuity.

## 1. First variation with fixed endpoints

For

$$J[u]=\\int_a^b L(x,u,u')\\,dx,$$

take $u_\\epsilon=u+\\epsilon \\eta$, where eta is smooth and vanishes at a and b. If L is continuously differentiable and differentiation under the integral is justified,

$$\\left.\\frac{d}{d\\epsilon}J[u_\\epsilon]\\right|_{\\epsilon=0}=\\int_a^b(L_u\\eta+L_p\\eta')\\,dx=\\int_a^b\\left(L_u-\\frac{d}{dx}L_p\\right)\\eta\\,dx.$$

The fundamental lemma gives the Euler–Lagrange equation

$$L_u-\\frac{d}{dx}L_p=0.$$

It is necessary for a sufficiently smooth local extremum under admissible variations. Corners, obstacles, inequality constraints, and weak minimizers require modified statements.

## 2. Boundary and symmetry terms

If an endpoint value is free, integration by parts retains $L_p \\eta$ there, producing a natural boundary condition such as $L_p(b)=0$. If the endpoint lies on a curve or the endpoint time varies, transversality changes accordingly. Silently discarding boundary terms changes the problem.

When L has no explicit x-dependence, a smooth extremal satisfies the Beltrami identity

$$L-u'L_p=\\text{constant}.$$

When L has no explicit u-dependence, $L_p$ is constant. These are first integrals, not existence theorems.

## 3. Second variation and convexity

At a smooth extremal,

$$\\delta^2J[\\eta]=\\int_a^b[L_{uu}\\eta^2+2L_{up}\\eta\\eta'+L_{pp}(\\eta')^2]\\,dx.$$

Positive second variation on every nonzero admissible direction supports strict local minimality only with appropriate uniformity and regularity. A negative direction disproves local minimality. Semidefinite second variation is inconclusive.

If $(u,p)\\to L(x,u,p)$ is convex and the admissible set is convex, every stationary admissible point is a global minimizer. Strict convexity on the admissible set gives uniqueness. If the functional has null directions, it is only convex rather than strictly convex there, and uniqueness requires a normalization or is understood modulo that nullspace.

## 4. Direct method

To minimize J over a set A in a reflexive Banach space:

1. show the infimum is finite and choose a minimizing sequence;
2. use coercivity to bound it;
3. use weak compactness to extract a weakly convergent subsequence;
4. show A is weakly closed, so the limit is admissible;
5. use weak lower semicontinuity to obtain $J[u]\\leq liminf J[u_n]$.

Then u attains the infimum. Each step is essential. Boundedness alone gives no strong convergence; pointwise constraints may not be weakly closed; a nonconvex derivative integrand may fail lower semicontinuity.

## 5. Dirichlet energy example

On $H_0^1(\\Omega)$, minimize

$$J[u]=\\tfrac12\\int_\\Omega|\\nabla u|^2\\,dx-\\int_\\Omega fu\\,dx.$$

Poincare and Young inequalities give coercivity. The quadratic energy is weakly lower semicontinuous, and the linear term is weakly continuous. The minimizer satisfies

$$\\int_\\Omega\\nabla u\\cdot\\nabla v\\,dx=\\int_\\Omega fv\\,dx$$

for all v, exactly the weak Poisson equation. Strict convexity gives uniqueness. This equivalence relies on the declared boundary space and data class.

## 6. Constraints and multipliers

For an isoperimetric constraint $G[u]=c$, a regular constrained extremum satisfies stationarity of $J+\\lambda(G-c)$ for some multiplier lambda. Constraint qualification matters. An obstacle constraint $u\\geq \\psi$ yields a variational inequality, not the Euler–Lagrange equality everywhere:

$$A(u,v-u)\\ge F(v-u)$$

for every admissible v. Equality holds away from contact under further regularity.

## 7. Discrete verification

Galerkin or finite-element minimization restricts J to $A_h$. Report energy, Euler residual, constraint violation, mesh, quadrature, and nested-space refinement. For conforming nested spaces, minimum energies decrease toward the continuous infimum under density and consistency. A small optimization gradient only certifies the discrete algebraic problem under its conditioning.

## Exercises with complete worked solutions

### 1. Basic Euler equation
For $L=(u')^2/2+V(u)$, derive the equation.

**Solution.** $L_u=V'(u)$ and $L_p=u'$; hence $V'(u)-u''=0$.

### 2. Shortest graph
For $L=\\sqrt{1+(u')^2}$, find the first integral.

**Solution.** $L$ is independent of $u$, so $L_p=u'/\\sqrt{1+(u')^2}$ is constant. Thus $u'$ is constant and the extremal is a line.

### 3. Beltrami identity
For Exercise 1 with no x-dependence, find the conserved quantity.

**Solution.** $L-u'L_p=V(u)-(u')^2/2$, constant along a smooth extremal.

### 4. Free endpoint
If u(a) is fixed but u(b) is free, what natural condition holds?

**Solution.** The remaining boundary term is $L_p(b)\\eta(b)$. Arbitrary eta(b) forces $L_p(b)=0$.

### 5. Fixed endpoints
Why is there no natural condition for fixed u(b)?

**Solution.** Every admissible variation has eta(b)=0, so the boundary term vanishes without constraining $L_p(b)$.

### 6. Quadratic energy
Minimize $\\int_0^1 (u')^2/2$ with u(0)=0,u(1)=1.

**Solution.** Euler equation is u''=0, giving u=x. Convexity makes it the unique global minimizer. Its energy is 1/2.

### 7. Direct proof of Exercise 6
Prove minimality without Euler–Lagrange.

**Solution.** Write u=x+v with v zero at endpoints. Energy is $1/2 \\int(1+2v'+(v')^2)=1/2+1/2 \\int(v')^2$, since integral v'=0.

### 8. Negative direction
If the second variation is negative for one eta, what follows?

**Solution.** The stationary point cannot be a local minimum in the relevant topology, because small perturbations in that direction lower J to second order.

### 9. Semidefinite boundary
Does nonnegative second variation prove a minimum?

**Solution.** Not by itself. Higher-order terms or lack of uniform positivity may create a saddle or flat direction.

### 10. Coercivity purpose
What does coercivity do to a minimizing sequence?

**Solution.** A uniform upper bound on J forces a norm bound, preventing escape to infinity and enabling weak compactness in a reflexive space.

### 11. Lower semicontinuity
Why is $liminf$ the useful direction?

**Solution.** It ensures the limit energy is no larger than the limiting best energies, so a weak limit of a minimizing sequence attains the infimum.

### 12. Weak closure
Why must the limit remain admissible?

**Solution.** Otherwise compactness could produce a lower-energy point outside the constraints, which cannot serve as a minimizer of the original problem.

### 13. Poisson variation
Differentiate $J[u]=1/2 \\int|\\nabla u|^2-\\int fu$.

**Solution.** $\\delta J[v]=\\int \\nabla u \\cdot \\nabla v-\\int fv$. Setting this to zero for every test v is the weak Poisson equation.

### 14. Strict convexity
What does it add?

**Solution.** Two distinct minimizers would have a midpoint with strictly smaller energy, contradiction. Thus the minimizer is unique.

### 15. Multiplier equation
For constraint $\\int u^2=1$, what term enters Euler–Lagrange?

**Solution.** Stationarity of $J+\\lambda(\\int u^2-1)$ adds $2\\lambda u$ to the $L_u$ term, subject to a regularity/constraint qualification.

### 16. Obstacle contact
Why not impose the free Euler equation on the contact set?

**Solution.** Downward variations may violate $u\\geq \\psi$; admissible variations are one-sided, yielding an inequality and a contact force.

### 17. Discrete energy
In nested conforming spaces, why can minimum energy only decrease?

**Solution.** The finer admissible set contains the coarser one, so its infimum cannot be larger.

### 18. Stationarity versus minimum
Give a scalar counterexample.

**Solution.** $J(x)=-x^2$ has derivative zero at x=0 but a strict local maximum there.

### 19. Quadrature boundary
A discrete energy decreases under refinement. Is continuous convergence proved?

**Solution.** No. Inconsistent quadrature or nonconforming constraints can converge to the wrong functional. Density, consistency, stability, and a limit theorem remain necessary.

### 20. Claim repair
Repair: “The Euler–Lagrange equation has a solution, therefore the minimizer exists.”

**Solution.** The solution is only a stationary candidate. Existence and minimality require admissibility plus convexity/second-variation sufficiency or a direct-method argument with coercivity, closure, compactness, and lower semicontinuity.

## Chapter synthesis

First variations produce interior and boundary conditions; second variations and convexity distinguish candidates; the direct method proves attainment through coercivity, compactness, closure, and lower semicontinuity. Discrete stationarity remains separate from continuous minimality.

## Dependency ledger

- Euler–Lagrange derivation requires admissible differentiable variations.
- Natural conditions depend on which endpoint data are free.
- Convexity supplies global sufficiency; second variation alone may be inconclusive.
- Direct-method existence needs every compactness and closure step.
- Constraint multipliers require qualification; obstacles yield inequalities.
- Numerical minimizers require mesh, residual, constraint, and energy audits.
`;export{e as default};