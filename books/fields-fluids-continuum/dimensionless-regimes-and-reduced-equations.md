
# Dimensionless Regimes and Reduced Equations

## Learning purpose

This chapter introduces dimensional analysis and the key dimensionless groups that classify flow regimes. You will learn when the full Navier–Stokes equations can be replaced by reduced models such as Stokes flow, lubrication theory, or shallow-water equations, and what errors these approximations introduce.

## Nondimensionalisation of the Navier–Stokes equations

Choose characteristic scales: length $L$, speed $U$, time $L/U$, and pressure $\rho U^{2}$. Define dimensionless variables

$$x^{*} = \frac{x}{L}, \quad v^{*} = \frac{v}{U}, \quad t^{*} = \frac{t U}{L}, \quad p^{*} = \frac{p}{\rho U^{2}}.$$

The incompressible Navier–Stokes equations become

$$\partial_{t^{*}} v^{*} + (v^{*} \cdot \nabla^{*}) v^{*} = -\nabla^{*} p^{*} + \frac{1}{Re} \Delta^{*} v^{*} + f^{*},$$

where $f^{*} = b L / U^{2}$ is the dimensionless body force and

$$Re = \frac{\rho U L}{\mu} = \frac{U L}{\nu}$$

is the Reynolds number, with $\nu = \mu/\rho$ the kinematic viscosity. The Reynolds number measures the ratio of inertial forces to viscous forces.

## Low Reynolds number: Stokes flow

For $Re \ll 1$, inertial terms are negligible compared to viscous terms and pressure gradients. The Stokes equations are

$$\nabla p = \mu \Delta v + \rho b, \qquad \nabla \cdot v = 0.$$

These are linear and time-independent (quasi-static). The neglect of inertia is valid only if the nondimensional solution and boundary conditions do not create another large scale. For example, near a sharp corner or in an unbounded domain, inertia may reappear at large distances even if $Re$ is small locally.

**Example 10.1: flow past a sphere.** For Stokes flow past a sphere of radius $a$, the drag is $F_{D} = 6\pi \mu a U$ (Stokes's law). This is valid for $Re = \rho U a / \mu \ll 1$. At $Re \approx 1$, inertial corrections become significant.

## High Reynolds number and boundary layers

For $Re \gg 1$, viscosity is small in the bulk flow but remains dominant in thin boundary layers near walls. Setting $\mu = 0$ everywhere (the Euler equations) removes the highest derivative and cannot satisfy the no-slip boundary condition. This is a singular perturbation: the limit $Re \to \infty$ is not uniform.

Prandtl's boundary layer theory introduces a stretched coordinate normal to the wall. For flow over a flat plate, the boundary layer thickness scales as $\delta \sim L / \sqrt{Re}$. Within the layer, viscous and inertial terms balance; outside, the flow is approximately inviscid.

## Other dimensionless groups

- **Mach number:** $Ma = U / c_{\mathrm{sound}}$ controls compressibility effects. A value below about $0.3$ is a restricted engineering heuristic, with the additional data and thermal qualifications discussed below.
- **Froude number:** $Fr = U / \sqrt{g L}$ compares inertia and gravity at a free surface.
- **Capillary number:** $Ca = \mu U / \gamma$ compares viscous forces to surface tension $\gamma$.
- **Prandtl number:** $Pr = \nu / \alpha = c_{p} \mu / k$ compares momentum diffusivity to thermal diffusivity.

A single flow may require several dimensionless groups. For example, free-surface flow of a viscous fluid involves $Re$, $Fr$, and $Ca$.

## Lubrication and shallow-water approximations

**Lubrication theory** assumes a small aspect ratio $\epsilon = h/L \ll 1$, where $h$ is a typical gap height and $L$ is a streamwise length scale. For steady, incompressible, constant-viscosity Newtonian flow between no-slip walls, with negligible inertia and no normal wall motion (no squeeze term), take the lower wall stationary and the upper wall sliding at speed $U$. The pressure scale becomes $\mu U / (\epsilon^{2} L)$ rather than $\rho U^{2}$. The resulting one-dimensional Reynolds equation is

$$\frac{\partial}{\partial x}\left( h^{3} \frac{\partial p}{\partial x} \right) = 6\mu U \frac{\partial h}{\partial x}.$$

**Shallow-water equations** average the depth of a fluid layer under long-wave hypotheses. The resulting equations are hyperbolic and support hydraulic jumps (analogous to shock waves).

In both cases, the reduced equations inherit a regime, not just fewer variables. Using lubrication theory outside its asymptotic regime leads to incorrect pressure scales and missed inertial effects.

## The time scale can preserve inertia at small Reynolds number

The opening nondimensionalisation chose the advective time. If a boundary oscillates on an independently specified time T, introduce the Strouhal number $St=L/(UT)$ instead. The acceleration terms then have coefficients St and one in the inertia-scaled equation. In a viscous-pressure scaling, pressure is measured by $\mu U/L$ and the coefficients become $Re\,St$ for local acceleration and Re for advection.

Thus small Reynolds number suppresses advection when the scaled field stays controlled, but does not suppress unsteady acceleration unless $Re\,St=L^2/(\nu T)$ is small too. Taking speed to zero at fixed frequency reduces Re while leaving this latter parameter unchanged. The quasi-static Stokes equation in the opening therefore requires both the relevant spatial and temporal scale assumptions. An unsteady Stokes equation retains the time derivative even when convection is negligible.

An arbitrary pressure scale P introduces a further coefficient $P/(\rho U^2)$ in front of the pressure gradient. Choosing P from an expected balance makes that coefficient convenient, but the physical pressure difference must still be consistent with that choice. Multiplying a dimensionless equation by Re changes its presentation, not which physical terms are comparable. A missing parameter cannot be removed by relabelling the units.

### Example 10.2: an oscillating wall has a diffusion length

In a half-space with a flat wall oscillating tangentially at angular frequency omega, seek a unidirectional velocity depending only on normal distance and time. Its nonlinear advection is exactly zero, so the governing scalar equation is $u_t=\nu u_{yy}$. A complex mode proportional to $e^{i\omega t-ky}$ requires $\nu k^2=i\omega$. The decaying root is $k=(1+i)/\delta$ with $\delta=\sqrt{2\nu/\omega}$.

Taking the real part gives velocity $Ue^{-y/\delta}\cos(\omega t-y/\delta)$. The decay length and phase lag come from unsteady diffusion, not from an advective boundary-layer balance. Comparing a body length to delta produces the same frequency-viscosity parameter as $Re\,St$, up to the chosen factor two. A very small amplitude does not remove that penetration scale.

The solution is exact within its infinite flat-wall and constant-property assumptions. Its lack of convection is a special geometry, whereas a general low-Re flow needs an estimate controlling that term. An exact example and a general asymptotic reduction therefore have different logical warrants even when their resulting equations look similar.

## Dimensional analysis determines groups, not constitutive functions

For positive physical quantities, record each one's powers of fundamental mass, length and time units as a column of a dimension matrix. A monomial is dimensionless exactly when its exponent vector lies in that matrix's nullspace. Linear algebra then gives the number of independent exponent combinations as the number of quantities minus the dimension-matrix rank.

A dimensionally invariant relation can be expressed through such independent combinations on the positive quantity domain. Taking logarithms makes unit changes translations along the dimension-column directions, and the invariant combinations describe the quotient by those translations. This is the elementary content of the dimensional-group reduction. It assumes the listed quantities contain all relevant dimensional inputs; an omitted length, surface roughness or frequency introduces an omitted group.

For drag on a sphere with only radius, speed, viscosity and density included, there are two independent groups: a drag coefficient and Reynolds number. Dimensional analysis permits an unknown relation between them. It does not derive the coefficient six pi or the inverse-Re form of creeping-flow drag. Those require solving the flow model with its no-slip and far-field conditions.

If radius is the chosen length and drag scale is $\rho U^2a^2$, the Stokes formula gives dimensionless drag $6\pi/Re$. A diameter-based Reynolds number or a drag coefficient with projected area and a half-density factor has different numerical constants. An apparently conflicting drag law can therefore come from conventions rather than physics; each scale must be declared before numbers are compared.

## Thin-gap scaling has two small parameters

Let streamwise length be L and gap thickness h, with aspect ratio epsilon. Continuity makes the typical normal velocity epsilon times the streamwise speed when the wall slope is comparably small. Normal viscous derivatives are larger than streamwise ones by the inverse square of epsilon. Balancing pressure with normal shear therefore gives pressure scale $\mu UL/h^2$, the opening's viscous thin-gap scale.

Under these choices, the ratio of streamwise advection to dominant shear diffusion is $Re_L\epsilon^2$, equivalently a gap-based Reynolds number times epsilon. Small aspect ratio alone does not guarantee negligible inertia if the other quantities grow as the gap shrinks. Local acceleration has its own time parameter as well. The lubrication reduction assumes these discarded contributions are small on the stated scales and that no steep wall or entry region violates that ordering.

The leading normal momentum equation makes pressure independent of the normal coordinate. Streamwise momentum gives $\mu u_{yy}=p_x$. Integrating with lower-wall velocity zero and upper tangential velocity U gives the local Couette–Poiseuille profile. Its depth flux is

$$q=-\frac{h^3}{12\mu}p_x+\frac{Uh}{2}.$$

For an impermeable upper graph y equal to h(x,t), its normal velocity condition is $v(h)=h_t+u(h)h_x$ in Cartesian components. Integrating incompressibility through the gap gives $q_x+h_t=0$. This retains squeeze motion when h changes in time. A stationary gap eliminates that term, and constant U then gives the Reynolds equation displayed earlier. At a sloping stationary wall, its velocity must still satisfy the tangent/normal kinematic condition; no squeeze does not mean discarding that geometric term.

### Example 10.3: a gently varying wedge fixes its own flux

Take stationary $h(x)=h_0(1+\kappa x/L)$ with kappa greater than minus one, constant viscosity and equal pressures at both ends. Steady continuity makes q constant. Integrating the pressure-gradient formula and imposing zero total pressure change gives q equal to U divided by two times the ratio of the integrals of $h^{-2}$ and $h^{-3}$.

Those elementary integrals yield $q=Uh_0(1+\kappa)/(2+\kappa)$. For kappa zero this is the parallel Couette flux. For a converging wedge the predicted pressure rises above its endpoint value inside; a diverging wedge gives the opposite sign. If the latter would fall below a physically admissible absolute pressure, cavitation changes the model and its boundary conditions. The thin-gap formula does not authorize an unlimited tensile liquid pressure.

The derivation requires small actual wall slope $h_0|\kappa|/L$ and the inertial ordering above. The slope parameter kappa itself need not be the same small number as the aspect ratio, but the gap must remain positive everywhere. A correct algebraic solution of the reduced equation outside those geometric hypotheses is not a justified approximation to the original flow.

## Long-wave depth averaging uses a different balance

For a shallow layer with positive depth, small depth-to-horizontal-length ratio and a free surface varying on the long horizontal scale, leading vertical momentum is hydrostatic under the appropriate time and Froude scaling. With a flat bottom, no viscosity in the leading bulk model and an approximately depth-uniform horizontal velocity, depth integration gives

$$h_t+(hu)_x=0,\qquad
(hu)_t+\left(hu^2+\frac{gh^2}{2}\right)_x=0.$$

The pressure term follows by integrating the hydrostatic profile $\rho g(h-z)$ through the depth. Nonflat bed, friction and nonuniform vertical profiles add terms or change closure. These equations are a formal long-wave model until a convergence theorem supplies an error estimate for a specified family of smooth solutions and data.

Their characteristic speeds are $u\pm\sqrt{gh}$, obtained by differentiating the flux in depth and momentum variables. Positive depth gives strict hyperbolicity. At vacuum the two speeds meet and the variables can become singular, so arguments dividing by depth cease to apply. Hydraulic jumps use conservative balance and an energy admissibility condition rather than the smooth depth-averaged equation at the jump point.

For a smooth flat-bottom solution the mechanical energy density is $hu^2/2+gh^2/2$ and its flux is $u(hu^2/2+gh^2)$. Direct multiplication and the mass equation give an energy equality. Across an admissible dissipative jump it becomes the corresponding inequality. Conservation of the two primary fluxes alone does not determine which discontinuity represents the physical hydraulic transition.

## Large and small parameters can produce nonuniform limits

At high Reynolds number, a small viscous coefficient multiplies the highest derivative. The limiting inviscid equation has fewer boundary conditions, so a no-slip wall typically produces a rapidly varying layer. Inside it the normal derivative compensates for the small coefficient. This explains the square-root boundary-layer scaling without proving convergence to the inviscid solution in every geometry.

Separation, adverse pressure gradients and roughness can invalidate a simple attached-layer description. Likewise the low-Re limit around an unbounded two-dimensional body can fail to be uniform far from it, and a short entrance region can violate a long-channel approximation. A reduction needs both a parameter ordering and a region where the assumed derivatives remain on those scales.

Low Mach number is another multi-assumption limit. The familiar value around three tenths is an engineering heuristic for certain gas-flow settings, not a mathematical incompressibility theorem. Acoustic initial layers, thermal density variation and imposed pressure changes can matter even when a chosen bulk speed is small relative to sound speed. A rigorous low-Mach limit specifies the equation of state, boundary data, initial preparation and norm of convergence.

## An error claim needs more than dropping a coefficient

Writing a remainder with a small prefactor only bounds it when the multiplied derivatives are controlled uniformly. A boundary layer shows how that uniformity can fail. To prove an approximation error, insert the reduced solution or a composite expansion into the full equation, estimate its residual in a stated norm and use a stability bound for the difference with matched data. The interval and domain on which those constants hold are part of the conclusion.

The same logic distinguishes an asymptotic model from a fitted empirical closure. A closure can be useful over a measured regime without being the leading term of a controlled expansion. Conversely an exact limiting derivation may require parameter values outside a particular experiment. This chapter's dimensionless groups organize the assumptions; they do not replace physical closure or the analytic stability argument.

## Summary and connections

This chapter introduced the Reynolds number and other dimensionless groups, examined the Stokes and boundary-layer limits, and discussed lubrication and shallow-water approximations. Each reduced model is valid only in a specific asymptotic regime.

In the previous chapter, *Newtonian Fluids*, we derived the full Navier–Stokes equations. The next chapter, *Viscous Flows and Exact Solutions*, develops specific flow geometries before potential flow and boundary layers.

## Exercises

### Exercise 1
Estimate the Reynolds number for blood flow in an artery of diameter $D = 2 \, \mathrm{cm}$ with average velocity $U = 30 \, \mathrm{cm}/\mathrm{s}$. Blood has $\rho \approx 1060 \, \mathrm{kg}/\mathrm{m}^{3}$ and $\mu \approx 3.5 \times 10^{-3} \, \mathrm{Pa} \cdot \mathrm{s}$. Is Stokes flow appropriate?

<details><summary>Hint 1</summary>

Convert centimetres and centimetres per second into SI units.

</details>

<details><summary>Hint 2</summary>

Use the specified diameter consistently as the Reynolds length.

</details>

<details><summary>Full solution</summary>

**Solution.** $Re = \rho U D / \mu = 1060 \cdot 0.30 \cdot 0.02 / (3.5 \times 10^{-3}) \approx 1817$. This is much larger than 1, so Stokes flow is not appropriate. Inertial effects dominate.

</details>

### Exercise 2
For incompressible Stokes flow with constant density and viscosity and a conservative body force, show that the vorticity satisfies $\Delta \omega = 0$.

<details><summary>Hint 1</summary>

Take curl of the constant-coefficient Stokes equation.

</details>

<details><summary>Hint 2</summary>

A conservative body force has zero curl.

</details>

<details><summary>Full solution</summary>

**Solution.** Taking the curl of the Stokes momentum equation $\nabla p = \mu \Delta v + \rho b$ and using $\nabla \times \nabla p = 0$ and $\omega = \nabla \times v$, we get $0 = \mu \Delta \omega + \rho \nabla \times b$. For conservative body forces ($b = -\nabla \phi$), $\nabla \times b = 0$ and thus $\Delta \omega = 0$.

</details>

### Exercise 3
Derive the boundary layer thickness scaling $\delta \sim L / \sqrt{Re}$ by balancing inertial and viscous terms in the boundary layer equations.

<details><summary>Hint 1</summary>

Use continuity to scale the small normal velocity.

</details>

<details><summary>Hint 2</summary>

Balance streamwise advection with normal viscous diffusion.

</details>

<details><summary>Full solution</summary>

**Solution.** In the boundary layer, let $x \sim L$, $y \sim \delta$, $u \sim U$, and $v \sim U \delta/L$ by continuity. The inertial term $u \partial u / \partial x \sim U^{2}/L$. The viscous term $\nu \partial^{2} u / \partial y^{2} \sim \nu U / \delta^{2}$. Balancing: $U^{2}/L \sim \nu U / \delta^{2}$, giving $\delta^{2} \sim \nu L / U = L^{2}/Re$, so $\delta \sim L / \sqrt{Re}$.

</details>

### Exercise 4

With independent time scale T, derive the coefficient of local acceleration when pressure is scaled viscously.

<details><summary>Hint 1</summary>

Compare density times speed divided by time with viscosity times speed divided by length squared.

</details>
<details><summary>Hint 2</summary>

Express the ratio using Reynolds and Strouhal numbers.

</details>
<details><summary>Full solution</summary>

The coefficient is $\rho L^2/(\mu T)=Re\,St$. It can stay order one as speed tends to zero because speed cancels from this product. Thus small Re alone need not justify a quasi-static reduction under a fixed rapid forcing frequency.

</details>

### Exercise 5

Verify the penetration scale of the oscillating-wall solution by substituting a decaying complex exponential into unsteady diffusion.

<details><summary>Hint 1</summary>

Its time derivative multiplies by imaginary angular frequency.

</details>
<details><summary>Hint 2</summary>

Select the square root with positive real part for decay away from the wall.

</details>
<details><summary>Full solution</summary>

The exponent coefficient satisfies $\nu k^2=i\omega$. The decaying choice is $(1+i)\sqrt{\omega/(2\nu)}$, giving penetration length $\sqrt{2\nu/\omega}$. Taking the real part yields the stated exponentially decaying, phase-lagged cosine. The amplitude does not determine that length in this linear geometry.

</details>

### Exercise 6

Derive the thin-gap inertial coefficient using streamwise Reynolds number and aspect ratio.

<details><summary>Hint 1</summary>

Compare advection on length L with viscous diffusion across gap h.

</details>
<details><summary>Hint 2</summary>

Replace h by epsilon times L only after taking the ratio.

</details>
<details><summary>Full solution</summary>

The ratio is $(U^2/L)/(\nu U/h^2)=Uh^2/(\nu L)=Re_L\epsilon^2$. It is also $Re_h\epsilon$. A small aspect ratio suppresses this contribution only together with a compatible Reynolds scaling; increasing speed as the gap shrinks can keep the ratio large.

</details>

### Exercise 7

Integrate incompressibility through a moving impermeable gap and derive the squeeze term.

<details><summary>Hint 1</summary>

Differentiate the depth flux with a variable upper limit.

</details>
<details><summary>Hint 2</summary>

Use $v(h)=h_t+u(h)h_x$ at the upper graph.

</details>
<details><summary>Full solution</summary>

The integrated equation is $q_x-u(h)h_x+v(h)-v(0)=0$. With a fixed impermeable lower wall and the upper kinematic condition, it becomes $q_x+h_t=0$. Dropping the upper-limit derivative would miss the wall-slope cancellation and give the wrong steady or squeeze balance.

</details>

### Exercise 8

For the wedge with kappa equal to one, find the steady flux under equal endpoint pressures and compare it with a parallel gap of height $h_0$.

<details><summary>Hint 1</summary>

Use the integrated flux formula from the worked example.

</details>
<details><summary>Hint 2</summary>

The comparison parallel Couette flux is half speed times height.

</details>
<details><summary>Full solution</summary>

The wedge flux is $2Uh_0/3$, compared with $Uh_0/2$ in the parallel gap. The predicted diverging-wedge pressure is below its common endpoint value inside. Thin-gap slope, inertia and cavitation assumptions must still hold; the algebraic flux is not a validity theorem outside them.

</details>

### Exercise 9

Derive the characteristic speeds of flat-bottom shallow water in variables depth h and momentum m.

<details><summary>Hint 1</summary>

Differentiate flux $(m,m^2/h+gh^2/2)$.

</details>
<details><summary>Hint 2</summary>

Use velocity m divided by positive depth.

</details>
<details><summary>Full solution</summary>

The Jacobian is $\begin{pmatrix}0&1\\-u^2+gh&2u\end{pmatrix}$. Its characteristic equation is $(\lambda-u)^2-gh=0$, so speeds are $u\pm\sqrt{gh}$. They are distinct for positive depth. At zero depth the variable transformation and strict-hyperbolicity argument degenerate.

</details>

### Exercise 10

Why does a small coefficient multiplying a discarded term not alone prove a small model error?

<details><summary>Hint 1</summary>

The term may contain derivatives growing as the coefficient shrinks.

</details>
<details><summary>Hint 2</summary>

An error estimate also needs stability and compatible initial/boundary data.

</details>
<details><summary>Full solution</summary>

In a boundary layer the normal derivatives compensate for a small viscosity, leaving an order-one contribution. A justified error bound needs uniform control of the residual after inserting an approximation and a stability estimate for its difference from the full solution, on a stated region and time interval with matched data. Dimensional scaling organises that analysis but does not complete it by itself.

</details>
