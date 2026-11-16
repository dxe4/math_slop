var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: viscous-flows-and-exact-solutions
title: "Viscous Flows and Exact Solutions"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Viscous Flows and Exact Solutions

## Learning purpose

This chapter collects and derives exact solutions of the Navier–Stokes and Stokes equations. You will learn to solve unidirectional flows, axisymmetric flows, and low-Reynolds-number flows, and to verify that each solution satisfies the governing equations and boundary conditions.

## Unidirectional flows

For steady incompressible flow of a constant-density fluid with $\\rho>0$, constant viscosity $\\mu>0$ and no body force ($b=0$), in one direction with $v = (u(y, z), 0, 0)$, the Navier–Stokes equations reduce to

$$\\mu \\Delta u = \\frac{\\partial p}{\\partial x} = -G,$$

where $G$ is the constant pressure gradient. The nonlinear advection terms vanish identically.

**Plane Poiseuille flow (revisited).** Between fixed plates $y = \\pm h$ with $h>0$, take $G>0$ for the maximum-velocity and positive-friction statements below. 

$$u(y) = \\frac{G}{2\\mu}(h^{2} - y^{2}), \\qquad Q = \\int_{-h}^{h} u \\, \\mathrm{d}y = \\frac{2 G h^{3}}{3\\mu},$$

where $Q$ is the volume flux per unit width. The maximum velocity is $u_{\\max} = Gh^{2}/(2\\mu)$ at $y = 0$.

**Circular pipe flow (Hagen–Poiseuille).** For axisymmetric flow in a pipe of radius $a$, in cylindrical coordinates $(r, \\theta, z)$ with $v_{z} = u(r)$:

$$\\frac{\\mu}{r} \\frac{\\mathrm{d}}{\\mathrm{d}r}\\left( r \\frac{\\mathrm{d}u}{\\mathrm{d}r} \\right) = -G.$$

With $u(a) = 0$ and regularity at $r = 0$, the solution is the paraboloid

$$u(r) = \\frac{G}{4\\mu}(a^{2} - r^{2}).$$

The volume flux is

$$Q = \\int_{0}^{a} u(r) \\, 2\\pi r \\, \\mathrm{d}r = \\frac{\\pi G a^{4}}{8\\mu}.$$

This is the Hagen–Poiseuille law. Note the strong dependence on radius: doubling the pipe radius increases flux by a factor of 16.

## Stokes flow past a sphere

For creeping flow ($Re \\ll 1$) past a sphere of radius $a$ with free-stream velocity $U$, the Stokes stream function in spherical coordinates is

$$\\psi = \\frac{U r^{2}}{2}\\left(1-\\frac{3a}{2r}+\\frac{a^{3}}{2r^{3}}\\right)\\sin^{2}\\theta.$$

The velocity components are

$$v_{r} = \\frac{1}{r^{2} \\sin\\theta} \\frac{\\partial \\psi}{\\partial \\theta} = U \\left( 1 - \\frac{3a}{2r} + \\frac{a^{3}}{2r^{3}} \\right) \\cos\\theta,$$
$$v_{\\theta} = -\\frac{1}{r \\sin\\theta} \\frac{\\partial \\psi}{\\partial r} = -U \\left( 1 - \\frac{3a}{4r} - \\frac{a^{3}}{4r^{3}} \\right) \\sin\\theta.$$

The drag force is

$$F_{D} = 6\\pi \\mu a U.$$

This is Stokes's law. The solution is not uniformly valid: at large distances ($r \\sim a/Re$), inertial terms become comparable to viscous terms. Oseen's correction extends the validity.

## Unsteady flows

**Stokes's second problem (oscillating plate).** A plate at $y = 0$ oscillates with velocity $U \\cos(\\omega t)$ in its own plane. The time-periodic solution below describes a plate that has oscillated for all past time, or the long-time limit after transients from compatible initial data have decayed. The fluid above the plate ($y > 0$) satisfies

$$\\partial_{t} u = \\nu \\partial_{yy} u, \\qquad u(0, t) = U \\cos(\\omega t), \\qquad u(\\infty, t) = 0.$$

The solution is

$$u(y, t) = U e^{-y/\\delta} \\cos(\\omega t - y/\\delta),$$

where $\\delta = \\sqrt{2\\nu/\\omega}$ is the penetration depth. The velocity oscillates with exponentially decaying amplitude and a phase lag that increases with distance from the plate.

## An exact base flow is not a perturbation-stability theorem

The unidirectional ansatz removes its nonlinear advection because velocity points along a direction in which the field is invariant. It is therefore an exact Navier–Stokes reduction, not merely a low-Reynolds approximation. Pressure must be independent of the cross-sectional coordinates through the other momentum components, and its constant axial gradient supplies the scalar load. The cross-sectional Poisson problem then determines the profile from the wall data.

Within that scalar class, positive viscosity and zero boundary difference give uniqueness: subtract two profiles, multiply their Laplace difference by the difference, and integrate to obtain zero gradient norm. The boundary trace removes the remaining constant. This theorem says nothing about stability to a general three-dimensional disturbance, whose velocity need not remain unidirectional.

A laminar exact profile can therefore remain an algebraic solution while disturbances of a different form grow. Flow transition and hydrodynamic stability require linearised or nonlinear perturbation estimates. Identifying an exact profile and matching its boundary conditions is still valuable, but it should not be described as proof that every realization with those loads approaches it.

## Regularity at the pipe axis removes a logarithmic branch

Integrate the circular-pipe ODE once to obtain $ru'=-Gr^2/(2\\mu)+C$. Integrating again gives a quadratic term plus C times logarithm of radius and an additive constant. A finite regular axial velocity at the centre excludes the logarithmic term. The wall value then determines the remaining constant and gives the stated paraboloid.

The same logarithm is admissible on an annulus that excludes the axis, so changing only the inner boundary geometry changes the allowed solution family. Applying the regular-axis condition to an annulus would artificially remove a necessary degree of freedom. Conversely keeping it in a full pipe produces a singular source-like behaviour not covered by the smooth pipe model.

The hydraulic conductance scales with the fourth power of radius because velocity scale grows with radius squared and cross-sectional area adds another squared factor. This sensitivity assumes viscosity, pressure gradient and the wall model stay fixed. A deformable pipe or non-Newtonian fluid can change those dependencies through its constitutive equations; the exponent is not a universal dimensional law for every conduit.

## The sphere's drag follows from its surface traction

The stated stream function produces a divergence-free axisymmetric field automatically. Differentiating it gives the two velocity components. They vanish at the sphere surface and approach uniform flow at infinity. Substitution into the constant-viscosity Stokes momentum components gives pressure $p=p_\\infty-3\\mu Ua\\cos\\theta/(2r^2)$, with polar axis in the incoming-flow direction.

At the surface the radial derivative of radial velocity vanishes. The normal stress is therefore minus that pressure. The shear stress component with polar and radial indices is $-3\\mu U\\sin\\theta/(2a)$, obtained by differentiating polar velocity radially and using the zero surface velocities. The axial component of traction on the sphere is the normal stress times cosine theta minus this shear stress times sine theta.

The constant far pressure integrates to zero, and the remaining axial traction is the constant $3\\mu U/(2a)$. Its surface integral is $6\\pi\\mu aU$. Separating the two contributions gives one third from pressure and two thirds from tangential shear. Thus Stokes drag is not a pressure-only force, unlike the ideal potential-flow cylinder calculation.

This solution exactly solves the exterior Stokes model, but not the full finite-Reynolds exterior Navier–Stokes model. The far-field comparison of convection with diffusion becomes nonuniform, as the opening notes. Its drag law is an asymptotic leading term within the appropriate creeping-flow regime, with corrections needing their own matched analysis.

### Example 11.1: torque between rotating cylinders

For concentric cylinders of radii a and b, with a less than b, impose angular speeds $\\Omega_1$ and $\\Omega_2$. Seek steady velocity only in the azimuthal direction. The azimuthal equation gives $v_\\theta=Ar+B/r$, where

$$A=\\frac{\\Omega_2b^2-\\Omega_1a^2}{b^2-a^2},\\qquad
B=\\frac{a^2b^2(\\Omega_1-\\Omega_2)}{b^2-a^2}.$$

Unlike a straight unidirectional flow, its nonlinear acceleration does not vanish: circular motion has radial acceleration minus squared azimuthal speed divided by radius. The radial momentum equation supplies $p_r=\\rho v_\\theta^2/r$. With that pressure, the field is an exact steady solution of the constant-property incompressible equations.

The shear component is viscosity times $v_\\theta'-v_\\theta/r$, equal to $-2\\mu B/r^2$. The torque delivered to the fluid at the inner cylinder per unit axial length is $4\\pi\\mu B$, with the opposite torque at the outer cylinder. Their combined power is $4\\pi\\mu B(\\Omega_1-\\Omega_2)$, nonnegative because B has the same sign as the speed difference.

Integrating the volume dissipation gives $4\\pi\\mu B^2(1/a^2-1/b^2)$, exactly that power. Equal angular speeds give B zero and rigid rotation with no viscous dissipation, even though the radial pressure gradient and acceleration remain nonzero. Stability to Taylor-vortex disturbances is a separate question; the exact circular base solution alone does not settle it.

## Start-up flow has a real initial-boundary corner

### Example 11.2: an impulsively started plate

Take a quiescent half-space and start the wall at constant tangential speed U at time zero. For positive times the unidirectional equation is diffusion, with wall value U, far value zero and initial interior value zero. Set $\\eta=y/(2\\sqrt{\\nu t})$ and seek $u=UF(\\eta)$. Substitution gives $F''+2\\eta F'=0$.

Integrating gives derivative proportional to $e^{-\\eta^2}$. The two endpoint conditions normalise the solution to the complementary error function, so $u=U\\operatorname{erfc}(y/(2\\sqrt{\\nu t}))$. Its penetration length grows like the square root of time. At every fixed positive distance its value tends to zero as time decreases to zero, while its wall value remains U for positive times.

There is no continuous classical value satisfying both initial rest and the suddenly changed wall at their common corner. The solution instead has the appropriate initial interior or integral trace and the positive-time boundary value. Its wall stress magnitude is $\\mu|U|/\\sqrt{\\pi\\nu t}$, unbounded near zero but integrable in time over a finite start interval. An initial stress singularity is therefore compatible with finite accumulated impulse.

A smooth wall ramp resolves that corner and changes the short-time stress. Treating the periodic oscillating-wall formula as though it were the same start-up problem would miss its homogeneous transient. Each exact solution must be matched to its own initial and boundary protocol before it becomes a comparison case.

### Example 11.3: cycle-averaged power of an oscillating plate

Use the time-periodic solution in the opening. The plate-on-fluid tangential traction has amplitude $\\sqrt2\\mu U/\\delta$ and leads the plate velocity by one eighth of a cycle. Multiplying by $U\\cos\\omega t$ and averaging gives positive mean input power $\\mu U^2/(2\\delta)$ per area. Instantaneous power can change sign during part of the cycle, representing reversible kinetic-energy exchange.

The velocity-gradient square has time average $U^2e^{-2y/\\delta}/\\delta^2$. Integrating viscosity times that quantity over the half-space gives the same mean dissipation. Mean kinetic storage over a full cycle is zero. Thus the phase shift does not remove dissipation; it separates cyclic storage from the in-phase mean power component.

The sign of the wall traction needs the receiver named. The lower boundary has outward fluid normal opposite the positive normal coordinate, so its applied traction is minus the raw shear component. The equal-and-opposite force on the plate has the opposite sign. A phase statement without that force convention can be off by half a cycle while its derivative formula is otherwise correct.

## Pressure work and constitutive units select the right comparison

For a pressure-driven straight conduit, pressure-drop power is pressure difference times volume flux, not mass flux unless divided by density in the corresponding specific-energy form. For a rotating device, torque times angular speed supplies power. For a translating wall, force times speed does. These are different geometrical integrals of the same traction-power density in the energy theorem.

The exact profiles let each balance be checked symbolically before approximating a more complicated geometry. A constant coefficient, wall slip length, domain radius or forcing sign is part of that comparison case. Changing one while keeping an old reference profile does not measure a numerical error against the same mathematical problem.

## Local exact solutions need global qualifications

Infinite plates and fully developed pipes idealize away ends. A finite pipe with inflow, outflow and developing boundary layers is not globally the same problem, even when the paraboloid approximates its interior. Likewise the sphere solution's far condition and the oscillatory half-space's positive-frequency history are essential pieces of their exact statements.

These restrictions do not make the examples less useful. They identify which mechanism each isolates: cross-sectional viscosity, exterior creeping-flow traction, curved streamline acceleration, or unsteady penetration. Combining those mechanisms in a new model requires matching its boundary data and scale ordering rather than superposing nonlinear solutions without checking the pressure and advective terms.

The following potential-flow and boundary-layer chapters use the exact viscous examples as reference points for what is retained or discarded. Potential flow omits tangential wall stress, whereas a thin-layer approximation can retain large normal velocity gradients even when the outer viscous coefficient is small. The exact solutions keep that distinction concrete.

## Summary and connections

This chapter derived exact solutions for Poiseuille flow, Stokes flow past a sphere, and the oscillating plate. These solutions are benchmarks for numerical methods and asymptotic approximations.

The preceding scaling chapter identifies the regimes isolated by these exact fields. Potential flow and boundary layers follow before compressible flow and waves.

## Exercises

### Exercise 1
For steady incompressible plane Poiseuille flow with constant density $\\rho>0$, constant viscosity $\\mu>0$, no body force ($b=0$), plates $y=\\pm h$ with $h>0$, and driving pressure gradient $G=-\\partial p/\\partial x>0$, find the wall shear stress $\\tau_{w}$ and the friction factor $f = 2\\tau_{w}/(\\rho u_{m}^{2})$, where $u_{m} = Q/(2h)$ is the mean velocity. 

<details><summary>Hint 1</summary>

Differentiate the parabolic profile and evaluate its wall-gradient magnitude.

</details>

<details><summary>Hint 2</summary>

Use the mean rather than maximum velocity in the declared friction factor.

</details>

<details><summary>Full solution</summary>

**Solution.** $\\tau_{w} = \\mu |u'(h)| = \\mu G h / \\mu = G h$. The mean velocity is $u_{m} = Gh^{2}/(3\\mu)$. Thus $f = 2 G h / (\\rho (Gh^{2}/3\\mu)^{2}) = 18\\mu^{2}/(\\rho G h^{3}) = 12/Re_{h}$, where $Re_{h} = \\rho u_{m} (2h) / \\mu$.

</details>

### Exercise 2
Verify that the Hagen–Poiseuille velocity profile satisfies the Navier–Stokes equations.

<details><summary>Hint 1</summary>

Check the transverse pressure equations as well as the axial ODE.

</details>

<details><summary>Hint 2</summary>

Regularity at the axis removes the logarithmic branch.

</details>

<details><summary>Full solution</summary>

**Solution.** For $v = (0, 0, u(r))$ in cylindrical coordinates, continuity is satisfied. The $r$ and $\\theta$ momentum equations reduce to $\\partial p/\\partial r = 0$ and $\\partial p/\\partial \\theta = 0$, so $p = p(z)$. The $z$-momentum equation is $\\mu (u'' + u'/r) = -G$. Substituting $u = G(a^{2} - r^{2})/(4\\mu)$: $u' = -Gr/(2\\mu)$, $u'' = -G/(2\\mu)$, so $u'' + u'/r = -G/(2\\mu) - G/(2\\mu) = -G/\\mu$. Thus $\\mu(u'' + u'/r) = -G$ as required.

</details>

### Exercise 3
For Stokes's second problem, find the fluid shear component $\\sigma_{xy}=\\mu\\,\\partial u/\\partial y$ at $y=0$, and then find the tangential traction exerted by the plate on the fluid. State their phases relative to the plate velocity.

<details><summary>Hint 1</summary>

Differentiate the decaying amplitude and the y-dependent phase.

</details>

<details><summary>Hint 2</summary>

Convert the shear component to lower-wall traction with the outward fluid normal.

</details>

<details><summary>Full solution</summary>

**Solution.** Differentiation gives

$$\\sigma_{xy}(0,t)=-\\frac{\\mu U}{\\delta}\\bigl(\\cos\\omega t-\\sin\\omega t\\bigr)=-\\frac{\\sqrt{2}\\mu U}{\\delta}\\cos(\\omega t+\\pi/4).$$

At the lower boundary the outward normal of the fluid is $-e_y$, so the plate-on-fluid traction is $t_x=-\\sigma_{xy}=(\\sqrt{2}\\mu U/\\delta)\\cos(\\omega t+\\pi/4)$. Relative to the plate velocity $U\\cos\\omega t$, that traction leads by $45^{\\circ}$. The opposite traction exerted by the fluid on the plate must not be assigned the same phase without stating the normal and which body receives the force.

</details>

### Exercise 4

Derive the logarithmic branch of the circular-pipe ODE and explain which condition removes it.

<details><summary>Hint 1</summary>

Multiply the radial equation by r before integrating.

</details>
<details><summary>Hint 2</summary>

Bounded regular velocity at the axis excludes a nonzero logarithm.

</details>
<details><summary>Full solution</summary>

Integration gives $u'=-Gr/(2\\mu)+C/r$, then $u=-Gr^2/(4\\mu)+C\\log r+D$. Regularity at zero forces C to vanish. On an annulus excluding zero, that argument is unavailable and the inner wall data can require a nonzero logarithmic coefficient. Domain geometry determines which branch is admissible.

</details>

### Exercise 5

For sphere Stokes flow, split the total drag into pressure and shear contributions.

<details><summary>Hint 1</summary>

Project the normal and polar traction components onto the axial direction.

</details>
<details><summary>Hint 2</summary>

The sphere averages of squared axial cosine and sine are one third and two thirds.

</details>
<details><summary>Full solution</summary>

Pressure contributes $2\\pi\\mu aU$ and shear $4\\pi\\mu aU$, summing to $6\\pi\\mu aU$. The constant far pressure gives zero net force. The calculation uses the full Stokes traction, so replacing it by ideal-flow pressure alone would omit two thirds of this drag.

</details>

### Exercise 6

For equal rotating-cylinder angular speeds, find A and B and determine dissipation and radial pressure gradient.

<details><summary>Hint 1</summary>

Insert equality of the two angular speeds into the boundary-value solution.

</details>
<details><summary>Hint 2</summary>

Rigid rotation has zero symmetric rate but nonzero centripetal acceleration.

</details>
<details><summary>Full solution</summary>

B is zero and A is the common angular speed Omega. Velocity is $\\Omega r$, the shear stress and dissipation vanish, and $p_r=\\rho\\Omega^2r$. Thus a nondissipating rigidly rotating fluid can still require a radial pressure force. Zero deformation rate does not imply zero acceleration.

</details>

### Exercise 7

Derive the cylinder torque-power equality from the coefficient B.

<details><summary>Hint 1</summary>

Multiply each wall torque by its own angular speed.

</details>
<details><summary>Hint 2</summary>

Use $B(1/a^2-1/b^2)=\\Omega_1-\\Omega_2$.

</details>
<details><summary>Full solution</summary>

Net power per length is $4\\pi\\mu B(\\Omega_1-\\Omega_2)=4\\pi\\mu B^2(1/a^2-1/b^2)$, nonnegative. Direct volume integration of squared shear gives the same expression. A torque sign without identifying which cylinder acts on the fluid can reverse one wall's contribution and spoil this balance.

</details>

### Exercise 8

For the impulsively started plate, derive the wall-stress time dependence and determine whether its magnitude has finite time integral near zero.

<details><summary>Hint 1</summary>

Differentiate the complementary error function profile at its zero argument.

</details>
<details><summary>Hint 2</summary>

The resulting singularity is inverse square root of time.

</details>
<details><summary>Full solution</summary>

The shear component is $-\\mu U/\\sqrt{\\pi\\nu t}$. Its magnitude integrates from zero to T to $2\\mu|U|\\sqrt{T/(\\pi\\nu)}$, finite. The infinite instantaneous start stress reflects incompatible abrupt initial/boundary data, not an infinite accumulated impulse over every finite interval.

</details>

### Exercise 9

Find the average power delivered by the periodic oscillating plate and compare it with viscous dissipation.

<details><summary>Hint 1</summary>

Average the product of the stated traction and wall velocity.

</details>
<details><summary>Hint 2</summary>

Integrate the exponentially decaying average squared velocity gradient.

</details>
<details><summary>Full solution</summary>

The product average is $\\mu U^2/(2\\delta)$. The volume dissipation per area is $\\int_0^\\infty\\mu U^2e^{-2y/\\delta}/\\delta^2dy$, the same value. Periodic mean storage is zero, although kinetic energy and instantaneous power vary during a cycle.

</details>

### Exercise 10

Repair the claim that an exact laminar Navier–Stokes profile must attract every nearby three-dimensional disturbance.

<details><summary>Hint 1</summary>

The ansatz restricts which velocity components and spatial dependencies are allowed.

</details>
<details><summary>Hint 2</summary>

Perturbations can leave that invariant solution class.

</details>
<details><summary>Full solution</summary>

State that the profile exactly solves the declared equations and boundary data, with any uniqueness proof restricted to the stated scalar class. Stability under general disturbances requires the corresponding linear or nonlinear perturbation problem and its bounds. The existence of the base flow alone proves no attraction theorem, even when the advective term vanishes exactly within its ansatz.

</details>
`;export{e as default};