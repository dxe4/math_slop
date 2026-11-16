var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: potential-flow
title: "Potential Flow: Harmonic Fields, Circulation and Pressure"
level: graduate
estimated_minutes: 440
license: CC BY-SA 4.0
---

# Potential Flow: Harmonic Fields, Circulation and Pressure

An incompressible irrotational velocity can be represented locally by the gradient of a harmonic potential. This reduction gives exact flows and useful outer approximations, but removes viscous shear and leaves topological circulation data to be specified. This chapter derives the potential and Bernoulli equations, solves cylinder and circulation examples, and derives the linear free-surface dispersion relation. It keeps the ideal-flow boundary model separate from a no-slip viscous solution.

Preparation is [Newtonian flow](newtonian-fluids.md), [dimensionless regimes](dimensionless-regimes-and-reduced-equations.md), vector calculus and classical Laplace theory. The velocity is smooth in its declared fluid region; excluded sources, vortices and solid bodies are not silently treated as ordinary interior points. Density is positive and constant in the Bernoulli derivation, and body force is conservative.

## Irrotationality is local, while a potential can be global

If $v=\\nabla\\phi$ with twice differentiable potential, its curl vanishes because mixed derivatives commute. Conversely a continuously differentiable curl-free field has a local potential on a small ball. Fix a base point and integrate the velocity along paths inside the ball. Stokes's theorem makes the integral path independent there, and differentiating the endpoint gives the original vector field.

On a simply connected region, the same argument extends to all paths by contracting loops and using the local curl-free identity. Thus a single-valued global potential exists under that topological hypothesis. On a region with holes, vanishing local curl need not make every loop integral zero. Specifying zero circulation around every relevant closed loop is the additional global requirement.

Incompressibility then becomes $\\Delta\\phi=0$. The velocity boundary condition at an impermeable wall is a Neumann condition: its normal component equals the wall's normal speed. Inviscid flow does not generally obey a no-slip tangential condition. Supplying the normal derivative already determines the corresponding harmonic boundary problem up to its kernel and compatibility restrictions; arbitrary tangential velocity is not independent extra data for that same problem.

For a bounded connected stationary fluid region with zero net boundary volume flux, the Neumann compatibility condition is the integral of the prescribed normal derivative being zero. The scalar weak-PDE theorem gives a potential modulo a constant under its domain and data assumptions. The constant changes no velocity. On an exterior domain, the far-field condition and admissible circulation or growth class must also be stated; the bounded-domain theorem cannot simply be copied without those additions.

## Bernoulli's equation comes from Euler and a gradient identity

For an inviscid constant-density fluid with conservative body potential Phi, Euler momentum is $v_t+(v\\cdot\\nabla)v=-\\nabla p/\\rho-\\nabla\\Phi$. The vector identity for advection is gradient of half squared speed minus velocity crossed with vorticity. If vorticity vanishes and velocity is a potential gradient, the whole equation is a spatial gradient. On a connected region it integrates to

$$\\phi_t+\\frac12|\\nabla\\phi|^2+\\frac p\\rho+\\Phi=C(t).$$

A time-dependent addition to the potential changes C by its time derivative but leaves velocity and pressure unchanged. This is a gauge in the potential representation. The pressure level is fixed by physical boundary or far-field data, rather than by choosing that gauge arbitrarily.

For a steady rotational flow, dotting Euler with velocity still gives Bernoulli constancy along a streamline under the same conservative-force assumptions. It need not give one common value on different streamlines. Irrotationality is what makes the spatial gradient vanish throughout the connected region. Applying a single global Bernoulli constant across a viscous shear or rotational wake would omit terms from the derivation.

An unsteady potential also retains its time derivative in pressure. Inferring pressure from only instantaneous speed can therefore be wrong even when the velocity is irrotational. Moving-body added-mass effects are one manifestation of that term. A constant spatial translation of the observer changes the representation consistently; the material acceleration and boundary motion must still use the same frame.

## A source is harmonic only outside its excluded location

### Example 12.1: a planar source and its flux

On the punctured plane set $\\phi=q\\log r/(2\\pi)$. Its velocity is radial with magnitude $q/(2\\pi r)$ and its Laplacian is zero away from the origin. The outward flux through every circle is q, obtained by multiplying normal speed by circumference. Thus it represents a source or sink of strength q in the excluded region.

It is not a smooth divergence-free field through the origin: the nonzero flux around arbitrarily small circles records a singular source there. Nor does it have finite total gradient energy over the entire punctured plane, since integrating squared speed gives a logarithmic divergence over an unlimited range of radii. A finite annular model with prescribed boundary flux is a well-defined alternative with its region and energy explicitly bounded.

Uniform flow, sources, sinks and doublet potentials can be superposed because Laplace's equation is linear. Their velocities add, but Bernoulli pressure is quadratic in the resulting total velocity. Adding separate pressure fields would miss cross terms and generally fail Euler momentum for the combined flow.

## The cylinder problem has an exact no-penetration solution

### Example 12.2: uniform flow around a circular cylinder

For a cylinder of radius a and uniform far-field speed U along x, define $\\phi=U(r+a^2/r)\\cos\\theta$ in its exterior. The two radial powers are harmonic angular modes. Differentiation gives

$$v_r=U(1-a^2/r^2)\\cos\\theta,\\qquad
v_\\theta=-U(1+a^2/r^2)\\sin\\theta.$$

The radial velocity is zero at the cylinder and the far-field velocity approaches the uniform stream. On the surface the tangential speed is minus twice U times sine theta. With no body potential difference, Bernoulli gives surface pressure coefficient $1-4\\sin^2\\theta$. Pressure is highest at the front and rear stagnation points and lowest at the top and bottom.

Integrating pressure traction around the circle gives zero drag and zero lift. The constant and squared-sine pressure terms have zero integrals against both normal coordinate components by parity. This is an exact consequence of the steady symmetric ideal model. It does not prove that a real viscous cylinder has zero drag: the ideal flow has no no-slip layer, separation or wake dissipation.

The so-called drag paradox is therefore a mismatch between a mathematically consistent idealisation and an omitted physical mechanism, not an error in the harmonic differentiation. Potential flow can still describe parts of an outer field while viscosity controls forces through a boundary layer and wake. Its usefulness and its force-prediction limit can coexist.

## Circulation survives on a multiply connected exterior

The azimuthal field $\\Gamma e_\\theta/(2\\pi r)$ has zero curl away from the excluded axis and circulation Gamma around every enclosing circle. Its local potential is Gamma times angle divided by two pi, which changes by Gamma after a full turn. It is therefore not the gradient of a single-valued global scalar on the cylinder exterior unless Gamma is zero.

Adding this field leaves cylinder no-penetration and uniform far velocity intact. Thus those velocity conditions alone do not determine the circulation class. A uniqueness claim for a single-valued potential has already restricted it to zero circulation; a more general irrotational velocity problem must prescribe the circulation separately.

### Example 12.3: circulation creates lift with a sign convention

Take positive Gamma to mean counterclockwise circulation and positive U to the right. Cylinder surface tangential velocity becomes $-2U\\sin\\theta+\\Gamma/(2\\pi a)$. Squaring it in Bernoulli produces a pressure term proportional to sine theta, unlike the zero-circulation solution. Integrating its normal traction gives vertical force per unit length $-\\rho U\\Gamma$ and still zero horizontal force.

To verify the sign, denote the circulation speed by g. The cross term in pressure is $2\\rho Ug\\sin\\theta$. Vertical force is minus a times its integral against sine theta, giving $-2\\pi a\\rho Ug=-\\rho U\\Gamma$. Clockwise circulation therefore gives upward lift in this coordinate convention.

This calculation derives the cylinder lift from pressure rather than invoking a memorized formula with an unspecified circulation orientation. It does not select Gamma. Starting-flow viscosity, a trailing-edge condition for another geometry, or imposed circulation can supply additional physical information. The ideal cylinder normal boundary condition alone cannot.

## Boundary work and pressure require the correct moving region

At a moving impermeable body, normal fluid velocity equals normal wall velocity. Tangential ideal slip remains possible. Pressure traction can therefore do work on the moving body even when no fluid crosses its material surface. The unsteady potential derivative participates in the corresponding pressure and energy transfer.

For a fixed domain, integrating harmonic energy by parts gives the gradient-energy integral as potential times its boundary normal derivative when the fields are sufficiently regular. This identity underlies uniqueness of a homogeneous Neumann problem after constants are removed. Exterior applications additionally need the far-boundary term to vanish in the declared decay class; a logarithmic source or nonzero circulation need not fit a finite-energy zero-boundary comparison.

Potential energy minimisation and physical fluid kinetic energy are related through the same squared gradient but have different variational constraints. A harmonic function minimises the Dirichlet energy under fixed potential trace; an impermeable-flow problem typically prescribes a normal velocity instead. Changing the boundary data class changes the functional or its linear boundary term, so one should not infer a fluid boundary condition from the wrong minimum principle.

## A linear free surface gives a dispersive wave equation

Consider a flat-bottom fluid layer of depth h, small surface elevation eta and irrotational velocity. Linearise around rest with atmospheric pressure at the surface and constant gravity. The bulk potential is harmonic, its normal derivative vanishes at the bottom, and at the undisturbed surface the linear kinematic and dynamic conditions are $\\eta_t=\\phi_y$ and $\\phi_t+g\\eta=0$.

For a mode with horizontal wave number k positive and temporal frequency omega, harmonicity and the bottom condition give a vertical potential factor $\\cosh(k(y+h))$. At the surface its normal derivative divided by its value is $k\\tanh(kh)$. Combining the two boundary conditions eliminates the mode amplitudes and yields

$$\\omega^2=gk\\tanh(kh).$$

In shallow water, small kh makes hyperbolic tangent approximately kh, giving wave speed approximately the square root of gh. In deep water it approaches one, giving a frequency proportional to the square root of k and hence wavelength-dependent phase speed. The shallow-water reduction in the preceding scaling chapter corresponds to the long-wave part of this linear relation.

With constant surface tension, the linear curvature pressure adds the term $-\\gamma\\eta_{xx}/\\rho$ to the dynamic condition. The same elimination gives $(gk+\\gamma k^3/\\rho)\\tanh(kh)$ for squared frequency. Both restoring contributions are positive for positive gravity, density and surface tension. A nonlinear free-surface existence or breaking theorem requires additional analysis; the mode derivation is a linearised model with small-amplitude assumptions.

## The ideal model has precise limits

Irrotationality is not an automatic consequence of large Reynolds number in every flow. Vorticity can enter through boundaries, initial data or other mechanisms, and a potential representation requires its own local and topological conditions. A high-Re outer region can be approximately irrotational while a thin adjacent layer carries large vorticity.

Likewise, incompressibility requires a compatible material and scaling regime, rather than only a harmonic ansatz. Pressure predicted below a liquid's admissible range can trigger cavitation, and speeds approaching sound speed invalidate a constant-density approximation. Exact potential formulas are useful probes of such boundaries, but their algebra does not prevent the physical model from leaving its regime.

The next boundary-layer chapter retains the viscous normal derivatives needed to connect a no-slip wall to an outer velocity. That connection explains how a thin region can change forces even when potential flow remains a good approximation farther away. The two descriptions form complementary models with matched assumptions, rather than interchangeable solutions of the same boundary problem.

## Exercises with staged help

### 1. A local potential

Show that velocity $(2x,-2y)$ is incompressible and irrotational and find a potential.

<details><summary>Hint 1</summary>

Compute divergence and planar curl independently.

</details>
<details><summary>Hint 2</summary>

Integrate the first velocity component and match the second.

</details>
<details><summary>Full solution</summary>

Both divergence and curl vanish. The potential is $x^2-y^2$ plus an arbitrary spatial constant, whose gradient gives the velocity and whose Laplacian is zero. A time-dependent constant is also allowed if a Bernoulli gauge is changed consistently.

</details>

### 2. Circulation and a global scalar

Why can a nonzero circulating azimuthal field on the punctured plane have no single-valued global potential?

<details><summary>Hint 1</summary>

Integrate around one circle enclosing the puncture.

</details>
<details><summary>Hint 2</summary>

The integral of a single-valued gradient around a closed path is zero.

</details>
<details><summary>Full solution</summary>

The loop integral is Gamma, nonzero. A globally single-valued differentiable potential would give zero by the fundamental theorem along the loop, a contradiction. Local angle potentials still exist, and the field has zero curl away from the excluded point. Topology distinguishes the local and global statements.

</details>

### 3. Source strength

Compute the flux through a circle for the logarithmic source and explain why its origin cannot be restored as an ordinary smooth fluid point.

<details><summary>Hint 1</summary>

Multiply radial speed by circumference.

</details>
<details><summary>Hint 2</summary>

The nonzero result persists on arbitrarily small enclosing circles.

</details>
<details><summary>Full solution</summary>

The flux is q for every radius. A smooth divergence-free field on the entire enclosed disk would have zero flux by the divergence theorem. Thus the origin carries a singular source or is an excluded boundary, and cannot be included under the same smooth incompressible hypothesis.

</details>

### 4. Cylinder boundary data

Differentiate the cylinder potential to verify no penetration and identify the largest surface speed magnitude without circulation.

<details><summary>Hint 1</summary>

Use the radial derivative and the angular derivative divided by radius.

</details>
<details><summary>Hint 2</summary>

Evaluate both components at radius a.

</details>
<details><summary>Full solution</summary>

The radial component is zero there and the tangential one is $-2U\\sin\\theta$. Its largest magnitude is $2|U|$, reached at the top and bottom. The nonzero tangential wall speed shows that this is an ideal slip solution, not a no-slip viscous solution.

</details>

### 5. Cylinder pressure

Find the surface pressure coefficients at the front stagnation point and at the top of the zero-circulation cylinder.

<details><summary>Hint 1</summary>

Use the coefficient $1-4\\sin^2\\theta$.

</details>
<details><summary>Hint 2</summary>

The relevant angles are zero and one quarter-turn.

</details>
<details><summary>Full solution</summary>

The coefficients are one and minus three. The first is the stagnation pressure increase and the second reflects the doubled surface speed. These are ideal-model gauge-pressure differences relative to the far field. If absolute pressure becomes physically inadmissible, the liquid model needs a cavitation treatment.

</details>

### 6. Lift orientation

For rightward U and clockwise circulation of magnitude G, find the lift direction and force per unit length under the declared convention.

<details><summary>Hint 1</summary>

Clockwise circulation has negative signed Gamma.

</details>
<details><summary>Hint 2</summary>

Insert that sign into the derived vertical force.

</details>
<details><summary>Full solution</summary>

Gamma is minus G, so vertical force is $+\\rho UG$, upward. The normal pressure integral fixes this sign for the stated axes and stream direction. Reversing the circulation convention without changing the formula would reverse the interpreted answer incorrectly.

</details>

### 7. Pressure superposition

Explain why adding two harmonic potentials does not allow adding their Bernoulli pressure corrections independently.

<details><summary>Hint 1</summary>

The resulting velocity is a sum.

</details>
<details><summary>Hint 2</summary>

Its squared magnitude contains a cross term.

</details>
<details><summary>Full solution</summary>

The total squared speed is $|v_1|^2+2v_1\\cdot v_2+|v_2|^2$. Separate pressure corrections omit the cross term, and any time-dependent potential terms must also use one consistent gauge. Laplace linearity applies to the potential and velocity, while pressure recovery is nonlinear in their sum.

</details>

### 8. Shallow-water speed

Derive the long-wave phase speed from the finite-depth dispersion relation.

<details><summary>Hint 1</summary>

Use the first-order small-argument expansion of hyperbolic tangent.

</details>
<details><summary>Hint 2</summary>

Phase speed is omega divided by wave number.

</details>
<details><summary>Full solution</summary>

For small kh, squared frequency is approximately $ghk^2$, giving phase speed approximately $\\sqrt{gh}$. The approximation depends on small depth relative to wavelength, not merely on small wave amplitude. Amplitude was already reduced in obtaining the linear surface equations.

</details>

### 9. Neumann compatibility

State the necessary boundary condition for a bounded incompressible potential region with prescribed wall normal speed and no internal sources.

<details><summary>Hint 1</summary>

Integrate the harmonic equation.

</details>
<details><summary>Hint 2</summary>

Its normal derivative equals the wall normal velocity.

</details>
<details><summary>Full solution</summary>

The integral of prescribed wall normal velocity over the whole boundary must vanish. It is the zero net volume-flux condition. A contracting impermeable closed boundary around an incompressible fluid without an outlet violates this condition; choosing a different potential constant does not repair the inconsistency.

</details>

### 10. The drag paradox

Repair a claim that exact zero cylinder drag in potential flow proves all high-Reynolds-number cylinder drag is zero.

<details><summary>Hint 1</summary>

List the boundary and vorticity mechanisms absent from the ideal calculation.

</details>
<details><summary>Hint 2</summary>

A small viscous coefficient can multiply large derivatives in a thin layer.

</details>
<details><summary>Full solution</summary>

State that the steady symmetric zero-circulation ideal slip model has zero integrated pressure drag. A viscous no-slip flow can develop a boundary layer, separation and a wake, so the high-Re limit need not be uniform or share that force conclusion. An outer potential approximation may remain useful while the omitted thin regions determine nonzero drag.

</details>

## Sources and continuation

Batchelor, *An Introduction to Fluid Dynamics*, and Chorin and Marsden, *A Mathematical Introduction to Fluid Mechanics*, discuss ideal flows and their relation to viscous models. The harmonic potentials, cylinder pressure/lift integrals and linear dispersion calculation are direct here. General free-surface existence, inviscid convergence and circulation selection require further hypotheses beyond those calculations.
`;export{e as default};