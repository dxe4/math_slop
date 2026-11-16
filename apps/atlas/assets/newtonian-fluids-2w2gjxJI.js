var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: newtonian-fluids
title: "Newtonian Fluids"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Newtonian Fluids

## Learning purpose

This chapter develops the constitutive theory and governing equations for Newtonian fluids. You will learn the Navier–Stokes equations for incompressible and compressible flow, the role of pressure as a constraint, and the kinetic energy balance that shows how viscosity dissipates energy.

## Constitutive law

For an isotropic Newtonian fluid, the Cauchy stress is

$$\\sigma = -p I + 2\\mu D + \\lambda (\\nabla \\cdot v) I,$$

where $p$ is the thermodynamic pressure, $\\mu$ is the dynamic viscosity, and $\\lambda$ is the second viscosity coefficient. Both $\\mu$ and $\\lambda$ have units $\\mathrm{Pa} \\cdot \\mathrm{s}$ (or $\\mathrm{kg}/(\\mathrm{m} \\cdot \\mathrm{s})$).

The viscous dissipation must be nonnegative for all symmetric rates $D$. In three dimensions, this requires

$$\\mu \\ge 0, \\qquad \\lambda + \\frac{2}{3}\\mu \\ge 0.$$

The second condition is often written in terms of the bulk viscosity $\\zeta = \\lambda + \\frac{2}{3}\\mu \\ge 0$. For incompressible flow, $\\nabla \\cdot v = 0$ and the term involving $\\lambda$ vanishes, so the bulk viscosity condition becomes invisible.

## Incompressible Navier–Stokes equations

For a constant-density incompressible fluid with spatially constant viscosity $\\mu\\ge0$, mass conservation gives $\\nabla \\cdot v = 0$ and the momentum balance takes the following incompressible Navier–Stokes form. For spatially varying viscosity the viscous force is $\\nabla\\cdot(2\\mu D)=\\mu\\Delta v+2D\\nabla\\mu$ when $\\nabla\\cdot v=0$. For example, $v=(y,0,0)$ and $\\mu=1+y$ on $y>-1$ give force $(1,0,0)$ even though $\\Delta v=0$. 

$$\\rho \\left( \\partial_{t} v + (v \\cdot \\nabla) v \\right) = -\\nabla p + \\mu \\Delta v + \\rho b,$$
$$\\nabla \\cdot v = 0.$$

**The pressure puzzle.** Pressure is not supplied by an independent equation of state in the incompressible formulation. Instead, it is a Lagrange multiplier that enforces the divergence-free constraint. Taking the divergence of the momentum equation yields a Poisson equation for pressure:

$$\\Delta p = -\\rho \\, \\nabla \\cdot \\bigl( (v \\cdot \\nabla) v \\bigr) + \\rho \\nabla \\cdot b.$$

The boundary conditions for this Poisson equation follow from the momentum equation evaluated at the boundary and the given velocity data.

**Common error.** Treating pressure as an independent thermodynamic variable while simultaneously imposing $\\nabla \\cdot v = 0$ and $\\rho = \\mathrm{const}$. In the incompressible formulation, $p$ is determined by the constraint, not by an equation of state.

## Kinetic energy balance

Multiply the momentum equation by $v$ and integrate over the domain. For no-slip or periodic boundaries and suitable forcing, the kinetic energy $K = \\int \\rho |v|^{2}/2 \\, \\mathrm{d}v$ evolves according to

$$\\frac{\\mathrm{d}K}{\\mathrm{d}t} = -\\int_{\\Omega} 2\\mu D : D \\, \\mathrm{d}v + \\int_{\\Omega} \\rho b \\cdot v \\, \\mathrm{d}v.$$

The term $-2\\mu D : D$ is the viscous dissipation rate. Since $D : D = D_{ij} D_{ij} \\ge 0$ and $\\mu \\ge 0$, viscosity always removes kinetic energy (when $\\mu > 0$ and $D \\neq 0$). Boundary terms appear for other boundary conditions; for example, at a moving wall with velocity $v_{w}$, work is done by the wall traction.

## Compressible flow

For compressible flow, one needs:

1. Mass balance: $\\partial_{t} \\rho + \\nabla \\cdot (\\rho v) = 0$.
2. Momentum balance: $\\rho Dv/Dt = \\nabla \\cdot \\sigma + \\rho b$.
3. Total energy balance.
4. An equation of state: $p = p(\\rho, T)$ or $p = p(\\rho, e)$.
5. Temperature-dependent transport properties $\\mu(T)$, $k(T)$.
6. Entropy admissibility for shocks.

Reusing the incompressible equations while allowing arbitrary density variation is inconsistent. The incompressible Navier–Stokes equations assume $\\nabla \\cdot v = 0$, which for variable $\\rho$ would require $D\\rho/Dt = 0$ (density constant along particle paths), not arbitrary density variation.

## Exact solution: plane Couette flow

Consider a constant-density incompressible fluid with constant viscosity $\\mu>0$ between two infinite parallel plates at $y = 0$ and $y = h$, where $h>0$. The lower plate is fixed and the upper plate moves with velocity $U$ in the $x$-direction. Seek a steady unidirectional solution $v = (u(y), 0, 0)$ with zero pressure gradient and no body force ($b=0$).

The incompressibility condition is automatically satisfied. The $x$-momentum equation reduces to

$$\\mu u''(y) = 0.$$

Under these local assumptions, the no-slip data $u(0) = 0$, $u(h) = U$ select the unique profile below. At $\\mu=0$ and $U\\ne0$, both $Uy/h$ and $U(y/h)^2$ satisfy the reduced equation and wall data, so uniqueness would fail. 

$$u(y) = \\frac{U y}{h}.$$

The shear stress is constant:

$$\\tau_{xy} = \\mu \\frac{\\partial u}{\\partial y} = \\frac{\\mu U}{h}.$$

**Slip boundary conditions.** If the walls allow slip with slip length $\\beta$, the boundary condition becomes $u(0) = \\beta u'(0)$ and $u(h) = U - \\beta u'(h)$. The profile changes to a linear function with different slope; the differential equation alone does not determine the solution without proper boundary data.

## The fluid law combines two independent material statements

Isotropy and linear dependence of viscous stress on the symmetric rate give the two-coefficient representation proved in the objectivity chapter. The nonnegative shear and bulk combinations then come from the entropy-production argument. These are independent steps: a rotationally equivariant linear map can have negative dissipation coefficients, and a positive quadratic expression need not have the required observer covariance if constructed from the wrong rate.

In a compressible thermodynamic model p is related to density and thermal state by an equation of state. In the constant-density incompressible limit it enforces a kinematic constraint instead. The pressure symbol can therefore occur in two formulations with different roles. An additive function of time does not change the incompressible interior pressure gradient, though specified traction data can fix that freedom through boundary loading.

For variable viscosity, the divergence acts on the coefficient as well as the rate. The earlier example makes the resulting extra force explicit. Similarly, a variable density cannot be pulled through inertial or body-force operations merely because its total mass is conserved. The constant-density, constant-viscosity specialization is useful precisely because its hypotheses permit those simplifications.

## Deriving kinetic energy reveals every boundary term

For smooth divergence-free velocity and constant positive density, dot momentum with velocity. The advective term is the divergence of kinetic energy times velocity, while pressure work is a divergence because the velocity divergence vanishes. The viscous product rule gives a stress-work divergence minus twice viscosity times squared deformation rate. Thus locally

$$\\partial_t\\frac{\\rho|v|^2}{2}
+\\operatorname{div}\\left[\\left(\\frac{\\rho|v|^2}{2}+p\\right)v
-2\\mu Dv\\right]
=-2\\mu D:D+\\rho b\\cdot v.$$

Here symmetry of D makes the vector stress-power convention unambiguous. On a fixed no-slip boundary the velocity is zero and all mechanical flux terms disappear. On a periodic cell their opposite-face contributions cancel. At an impermeable moving wall the kinetic and pressure advective fluxes vanish normally, but traction can still do tangential work. At an open boundary both transport and stress power need their actual boundary data.

For zero-boundary divergence-free fields, integration by parts also gives $\\int2D:D=\\int|\\nabla v|^2$. The proof is the symmetric-gradient identity in elasticity with zero divergence. This equality explains the common gradient-norm dissipation formula, but it is not a pointwise identity for every flow or every boundary condition. Retaining D is safer when surface work is part of the problem.

With positive viscosity and zero forcing, Poincaré gives an exponential decay estimate for smooth no-slip solutions in a bounded domain. The bound concerns kinetic energy and uses that fixed boundary anchoring; a uniform translation on a periodic domain can retain its mean velocity. Subtracting that conserved mean or adding a zero-mean normalisation is needed before a periodic Poincaré estimate gives the same conclusion.

## Smooth uniqueness uses a stronger norm than energy alone

Let u and v be two sufficiently smooth solutions with the same forcing and no-slip data, and put w equal to their difference. Subtract the equations so that the advective difference is one divergence-free transport of w plus $(w\\cdot\\nabla)u$. The first transport term gives no integrated contribution to the difference energy. The pressure term also vanishes by zero divergence and boundary conditions.

The remaining nonlinear term is bounded by $\\|\\nabla u\\|_\\infty\\|w\\|_2^2$. Hence

$$\\frac12\\frac d{dt}\\|w\\|_2^2+\\nu\\|\\nabla w\\|_2^2
\\le\\|\\nabla u\\|_\\infty\\|w\\|_2^2.$$

If that gradient norm is integrable in time, Gronwall proves uniqueness and a continuous-dependence estimate. This is a conditional smooth-solution theorem. A finite-energy bound alone does not generally supply that gradient norm in three dimensions, so the proof does not resolve global regularity or uniqueness of arbitrary three-dimensional energy solutions.

The distinction prevents a common logical jump: deriving an energy inequality from a smooth solution does not construct such a solution for every initial state, nor prove it remains smooth forever. Weak existence theories, strong continuation criteria and numerical approximations each add separate arguments. The physical equations and the proved conditional estimate can be used without claiming those open or deeper results have been settled here.

## Stokes velocity has a coercive weak problem

On a bounded domain with zero boundary velocity, restrict the first-Sobolev space to divergence-free vector fields. It is a closed Hilbert subspace because divergence is a continuous map into the square-integrable space. For positive viscosity, the bilinear form given by viscosity times the gradient contraction is bounded and coercive there. A bounded dual body-force functional therefore gives a unique weak Stokes velocity by Lax–Milgram.

Pressure disappears from that restricted test problem because gradients pair to zero against divergence-free tests. Recovering it as a square-integrable multiplier on a bounded Lipschitz domain uses the divergence inf-sup or equivalent pressure-recovery theorem, an explicit analytic input beyond the coercive velocity proof. The recovered pressure is unique up to a constant with the usual displacement-type boundary condition. The scalar pressure Poisson formula alone does not replace this coupled solvability statement.

A conservative body force can be absorbed into pressure in the constant-density Stokes equation. It can alter the measured pressure distribution without creating velocity under stationary no-slip walls. A nonconservative component can drive flow. This decomposition is relative to the actual domain and boundary setting; an imposed pressure drop across an open channel is a load, not an arbitrary harmless gauge.

### Example 9.1: slip changes both profile and dissipation

For equal nonnegative slip lengths beta at the two Couette walls, the linear solution is $u(y)=U(y+\\beta)/(h+2\\beta)$. Its slope is $U/(h+2\\beta)$ and its fluid shear stress is viscosity times that slope. Setting beta to zero recovers no slip. Increasing beta lowers the stress required for the same relative plate speed.

The external upper-wall power per area is shear stress times U. Fluid-volume dissipation per area is viscosity times slope squared times h. Their difference is twice viscosity times beta times slope squared, which is nonnegative and represents the two interfacial slip dissipations. Evaluating traction power at the fluid velocities on the two walls recovers exactly the volume dissipation. Evaluating it at the plate velocities instead includes the interfacial transfer as well.

Thus a wall model changes the energy accounting as well as the profile. A negative slip length would not follow the same dissipative interpretation and can even make the algebraic denominator singular. Its admissibility would need a different physical model rather than an unexamined substitution into the nonnegative-slip theorem.

### Example 9.2: pressure work in plane Poiseuille flow

For the earlier pressure-driven profile between y equal to minus h and h, integrate velocity across the gap. The flux per unit width is $2Gh^3/(3\\mu)$. The pressure power per unit streamwise length is G times that flux. Integrating viscosity times squared shear rate across the same gap gives exactly $2G^2h^3/(3\\mu)$, the identical value.

The walls are stationary and do no work. The pressure drop across the open ends supplies the dissipated kinetic work, although the steady kinetic-energy storage rate is zero. Dropping open-boundary pressure work from a closed-domain energy formula would incorrectly predict decay of a sustained steady flow. This example shows why the boundary terms belong to the theorem statement.

The solution is exact for the declared unidirectional field because its advective acceleration vanishes, even when a Reynolds number based on its speed is not tiny. Small Reynolds number is one sufficient regime for neglecting general inertia; it is not necessary for an individual exact solution whose nonlinear term is identically zero. Stability to arbitrary perturbations is a different problem from exact satisfaction of the base equations.

### Example 9.3: a periodic shear decays without advective transport

On a periodic planar domain choose velocity $(a(t)\\sin(ky),0)$, with zero body force and constant pressure. Its divergence and nonlinear advective term both vanish. The remaining equation is $a'=-\\nu k^2a$, so the amplitude decays exponentially and kinetic energy decays at twice that rate.

This smooth exact family realizes the heat-like dissipation of a shear mode. A constant mean added in the x direction remains unchanged and merely shifts the solution's mean velocity. The fluctuating mode still decays, while the conserved mean contributes a nondecaying kinetic-energy floor. The example makes the periodic zero-mean qualification concrete.

## Pressure boundaries must match the velocity problem

Taking divergence of smooth momentum gives the displayed Poisson equation and its quadratic velocity-gradient source. On a solid wall, dotting momentum with the normal determines a compatible pressure-normal relation involving wall acceleration, viscous terms and body force. It is generally incorrect to impose both a convenient independent pressure boundary value and a full prescribed velocity on the same boundary without checking compatibility.

The pressure equation has a null constant under pure Neumann conditions, just as scalar elliptic theory does. Its compatibility condition follows from the coupled incompressible equations and boundary flux constraints. A pressure normalisation fixes representation; it does not repair a velocity boundary field with nonzero net flux through a closed body. Such velocity data violate the integral divergence-free constraint before solving pressure.

## The zero-viscosity limit changes boundary and regularity questions

Setting viscosity to zero removes the highest spatial derivative and the positive dissipation term. The inviscid equations usually impose impermeability rather than no slip at a solid wall. A family of viscous no-slip solutions can develop a thin layer, so formal removal of viscosity is a singular limit rather than a uniform algebraic approximation.

The original Couette example already shows a simpler degeneracy: without the positive second-derivative coefficient its reduced boundary equation no longer selects a unique profile. A proof for positive viscosity cannot be continued through zero by merely keeping its conclusion while dividing by that coefficient. Boundary-layer theory and inviscid-limit convergence require their own hypotheses, developed later in the book.

For compressible flow, additional thermal variables and an equation of state couple energy and momentum. Density-dependent or temperature-dependent coefficients stay inside the corresponding divergences, and shocks require an admissible weak interpretation. The constant-density incompressible energy proof is one precise model case, rather than a replacement for that larger thermodynamic system.

## Summary and connections

This chapter developed the Newtonian fluid constitutive law, the incompressible and compressible Navier–Stokes equations, the kinetic energy balance, and the classic Couette flow solution.

In the previous chapter, *Linear Elasticity*, we studied the constitutive theory for solids. In the next chapter, *Dimensionless Regimes and Reduced Equations*, we nondimensionalize the Navier–Stokes equations and identify the regimes where simplified models are valid.

## Exercises

### Exercise 1
For steady incompressible plane Poiseuille flow of a constant-density fluid with constant viscosity $\\mu>0$ and no body force ($b=0$), between fixed plates $y = \\pm h$ with $h>0$, driven by a constant pressure gradient $-\\partial p/\\partial x = G>0$, solve for $u(y)$ and find the maximum velocity and wall shear stress. 

<details><summary>Hint 1</summary>

Integrate the pressure-driven second-order ODE twice.

</details>

<details><summary>Hint 2</summary>

Use both no-slip endpoint values and symmetry before differentiating the stress.

</details>

<details><summary>Full solution</summary>

**Solution.** The equation is $\\mu u'' = -G$ with $u(\\pm h) = 0$. Integrating twice: $u(y) = -Gy^{2}/(2\\mu) + A y + B$. The boundary conditions give $B = Gh^{2}/(2\\mu)$ and $A = 0$ by symmetry. Thus

$$u(y) = \\frac{G}{2\\mu}(h^{2} - y^{2}).$$

The maximum velocity is $u_{\\max} = Gh^{2}/(2\\mu)$ at $y = 0$. The wall shear stress is $\\tau_{w} = \\mu u'(h) = -G h$ (magnitude $G h$).

</details>

### Exercise 2
For a constant-density incompressible fluid with spatially constant viscosity $\\mu\\ge0$, derive the pressure Poisson equation by taking the divergence of the momentum equation.

<details><summary>Hint 1</summary>

Take divergence while keeping constant-density and constant-viscosity assumptions explicit.

</details>

<details><summary>Hint 2</summary>

Zero velocity divergence removes its time derivative and Laplacian divergence.

</details>

<details><summary>Full solution</summary>

**Solution.** Taking $\\nabla \\cdot$ of $\\rho (\\partial_{t} v + (v \\cdot \\nabla) v) = -\\nabla p + \\mu \\Delta v + \\rho b$ and using $\\nabla \\cdot v = 0$ (so $\\nabla \\cdot \\partial_{t} v = 0$ and $\\nabla \\cdot \\Delta v = 0$):

$$\\Delta p = -\\rho \\, \\nabla \\cdot ((v \\cdot \\nabla) v) + \\rho \\nabla \\cdot b.$$

The term $\\nabla \\cdot ((v \\cdot \\nabla) v) = \\partial_{i}(v_{j} \\partial_{j} v_{i}) = (\\partial_{i} v_{j})(\\partial_{j} v_{i}) + v_{j} \\partial_{j} (\\partial_{i} v_{i}) = \\mathrm{tr}(L^{2})$ since $\\nabla \\cdot v = 0$.

</details>

### Exercise 3
Show that for plane Couette flow, the kinetic energy is constant in time and the dissipation rate equals the power input from the moving upper plate.

<details><summary>Hint 1</summary>

The steady storage rate is zero, but wall work need not be.

</details>

<details><summary>Hint 2</summary>

Compute the constant shear dissipation and the upper-wall traction power per area.

</details>

<details><summary>Full solution</summary>

**Solution.** For steady flow, $\\mathrm{d}K/\\mathrm{d}t = 0$. The dissipation rate is $\\int 2\\mu D : D \\, \\mathrm{d}v = \\int \\mu (u')^{2} \\, \\mathrm{d}v = \\mu (U/h)^{2} \\cdot (\\mathrm{area} \\cdot h)$. The power input from the upper plate is traction times velocity integrated over the plate: $\\int \\tau_{xy} U \\, \\mathrm{d}a = \\mu (U/h) \\cdot U \\cdot \\mathrm{area}$. These are equal.

</details>

### Exercise 4

Derive the equal-slip Couette profile for nonnegative slip length beta and find its no-slip limit.

<details><summary>Hint 1</summary>

The reduced ODE gives a linear profile with two constants.

</details>
<details><summary>Hint 2</summary>

Apply both signed wall-slip conditions before solving its slope.

</details>
<details><summary>Full solution</summary>

Write $u=ay+b$. The lower condition gives $b=\\beta a$, and the upper gives $a(h+2\\beta)=U$. Hence $u=U(y+\\beta)/(h+2\\beta)$, with no-slip limit $Uy/h$. Positive h and nonnegative beta make the denominator nonzero; extending this expression to arbitrary negative beta would need separate admissibility analysis.

</details>

### Exercise 5

For $v=(y,0,0)$ and viscosity $1+y$ on the region y greater than minus one, compute the viscous force.

<details><summary>Hint 1</summary>

The velocity Laplacian is zero but the shear stress is not constant.

</details>
<details><summary>Hint 2</summary>

Keep the viscosity inside the stress divergence.

</details>
<details><summary>Full solution</summary>

The only nonzero symmetric shear entries of $2\\mu D$ are both $1+y$. Their row divergence is $(1,0,0)$. The incorrect constant-viscosity shortcut would give zero from the Laplacian. Positivity of viscosity holds on the specified region, but does not make its gradient vanish.

</details>

### Exercise 6

Compute flux per unit width and pressure power for the plane Poiseuille profile in Exercise 1.

<details><summary>Hint 1</summary>

Integrate its quadratic velocity over the symmetric gap.

</details>
<details><summary>Hint 2</summary>

Multiply the resulting flux by the positive pressure-drop gradient.

</details>
<details><summary>Full solution</summary>

The flux is $Q=2Gh^3/(3\\mu)$, and pressure power per streamwise length and width is $GQ=2G^2h^3/(3\\mu)$. Squaring $u'=-Gy/\\mu$, multiplying by viscosity and integrating gives the same dissipation. Open-end pressure work supports the steady flow; stationary wall work is zero.

</details>

### Exercise 7

Verify the periodic shear solution with initial amplitude a and wave number k, and state why its nonlinear term vanishes.

<details><summary>Hint 1</summary>

Velocity has only an x component and depends only on y.

</details>
<details><summary>Hint 2</summary>

Its Laplacian multiplies the mode by minus k squared.

</details>
<details><summary>Full solution</summary>

The solution is $(ae^{-\\nu k^2t}\\sin(ky),0)$. Advection is the x velocity times an x derivative, which is zero, and divergence is also zero. The remaining equation is scalar diffusion. Its energy decays at rate $2\\nu k^2$, while its amplitude decays at rate $\\nu k^2$.

</details>

### Exercise 8

Identify the extra regularity used in the smooth uniqueness estimate that is not supplied by kinetic energy alone.

<details><summary>Hint 1</summary>

Inspect the coefficient in the Gronwall difference bound.

</details>
<details><summary>Hint 2</summary>

It is a supremum norm of a spatial derivative integrated in time.

</details>
<details><summary>Full solution</summary>

The estimate needs $\\int_0^T\\|\\nabla u\\|_\\infty dt$ finite. The standard energy quantities control a velocity square norm and integrated gradient square norm, which do not generally give that supremum-gradient integral in three dimensions. Thus the conditional smooth uniqueness proof cannot be advertised as uniqueness of every global three-dimensional finite-energy solution.

</details>

### Exercise 9

Why does adding an arbitrary function of time to incompressible pressure preserve the interior equation, and when can boundary data remove this freedom?

<details><summary>Hint 1</summary>

Only a spatial gradient appears in interior momentum.

</details>
<details><summary>Hint 2</summary>

Traction contains pressure itself rather than only its gradient.

</details>
<details><summary>Full solution</summary>

The added spatial gradient is zero, so velocity and interior momentum are unchanged. Prescribed traction changes by minus that added scalar times the normal, so such boundary loading can fix the pressure level. A zero-mean convention is a normalisation for the velocity-boundary problem, while a physical pressure load is actual boundary information.

</details>

### Exercise 10

For a fixed closed vessel with prescribed boundary velocity, state a necessary integral compatibility condition for incompressibility.

<details><summary>Hint 1</summary>

Integrate the zero-divergence constraint.

</details>
<details><summary>Hint 2</summary>

The divergence theorem turns it into net outward volume flux.

</details>
<details><summary>Full solution</summary>

The boundary integral of prescribed velocity dotted with outward normal must be zero. Otherwise no divergence-free interior field can match those data. Selecting a pressure gauge or solving a scalar pressure Poisson equation cannot repair that incompatible boundary flux. Additional regularity and boundary conditions are needed for a sufficiency theorem.

</details>
`;export{e as default};