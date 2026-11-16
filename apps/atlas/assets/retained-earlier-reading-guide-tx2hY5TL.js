var e=`---
parent_id: book-fields-fluids-continuum
matter_id: retained-earlier-reading-guide
title: "Retained Earlier Fields and Continua Reading"
license: CC BY-SA 4.0
---

# Fields and Continua: Balance, Stress, Flow, and Waves

This book develops continuum and classical field models from integral balance laws. Universal balances are separated from constitutive closure, boundary data, regularity, and discretisation. It assumes vector calculus, tensors, partial differential equations, and classical mechanics. SI units are used unless explicitly nondimensionalised; Cauchy stress takes tension as positive.

## 1. Material and spatial descriptions

Label each material particle by $X$ in a reference body $B_{0}$. Its current position is the motion

$x=\\chi (X,t)$.

The deformation gradient is $F=\\partial \\chi /\\partial X$, and $J=\\det F$. A physically orientation-preserving smooth motion has $J>0$. Local volume transforms as $dv=J\\,dV$.

The spatial velocity is $v(x,t)=\\partial_{t}\\chi (X,t)$ evaluated at $X=\\chi^{-1}(x,t)$. For a spatial scalar $f$, the material derivative is

$Df/Dt=\\partial_{t}f+v\\cdot \\nabla f$.

It follows by the chain rule along a particle trajectory. Confusing $\\partial_{t}$ at fixed spatial point with $D/Dt$ following matter is a common source of missing advection terms.

The velocity gradient decomposes as

$\\nabla v=D+W$,

where $D=(\\nabla v+(\\nabla v)^{T})/2$ is rate of deformation and $W=(\\nabla v-(\\nabla v)^{T})/2$ is local spin. A rigid rotation can have $D=0$ but $W\\ne 0$, so a constitutive law depending directly on the full gradient may falsely treat rigid rotation as strain.

## 2. Transport theorem

For a material region $\\Omega (t)$ moving with the continuum,

$d/dt \\int_{\\Omega (t)} f dv = \\int_{\\Omega (t)} (Df/Dt+f\\nabla \\cdot v) dv$.

Equivalently the integrand is $\\partial_{t}f+\\nabla \\cdot (fv)$. This Reynolds transport theorem converts a moving-domain balance into a local equation.

For a control volume moving with an arbitrary boundary velocity $w$, the relative flux uses $v-w$. Omitting that distinction can double-count or miss transported material.

**Derivation through the reference body.** Pull the integral back:

$\\int_{\\Omega (t)}f dv=\\int_{\\Omega_{0}}f(\\chi (X,t),t)J(X,t)dV$.

Differentiate and use $\\dot J=J\\nabla \\cdot v$. This identity follows from Jacobi’s determinant formula. The result is the transport theorem.

## 3. Conservation of mass

Mass of every material region is constant:

$d/dt \\int_{\\Omega (t)}\\rho dv=0$.

Transport and localization give

$D\\rho /Dt+\\rho \\nabla \\cdot v=0$,

or

$\\partial_{t}\\rho +\\nabla \\cdot (\\rho v)=0$.

Along a motion, this integrates to $\\rho (\\chi (X,t),t)J(X,t)=\\rho_{0}(X)$. Thus density increases when material volume shrinks.

An incompressible material has $J=1$ for motions from a volume-preserving reference, which implies $\\nabla \\cdot v=0$. Constant density along particles also gives divergence-free velocity through mass balance. In a mixture, individual species densities may change through diffusion and reaction even when total mass is conserved.

At a discontinuity moving with normal speed $s$, integral mass balance yields a jump condition. In one dimension, $s[\\rho ]=[\\rho v]$, where $[\\cdot ]$ denotes right minus left. A pointwise derivative formula cannot be imposed across the jump.

## 4. Cauchy stress and momentum

Assume contact force on a surface element depends locally and linearly on its unit normal. Cauchy’s theorem gives traction

$t(n)=\\sigma n$.

Linear momentum balance for a material region is

$d/dt \\int_{\\Omega (t)}\\rho v dv = \\int_{\\partial \\Omega (t)}\\sigma n da + \\int_{\\Omega (t)}\\rho b dv$.

Using transport, mass conservation, and the divergence theorem yields

$\\rho Dv/Dt=\\nabla \\cdot \\sigma +\\rho b$.

Here body force $b$ has units acceleration and stress has units pascals. If body force were instead specified per unit volume, the factor $\\rho$ would be omitted; name the convention.

Balance of angular momentum implies $\\sigma =\\sigma^{T}$ for a classical Cauchy continuum with no couple traction or body couple. Micropolar, Cosserat, and couple-stress continua enlarge the kinematics and can admit nonsymmetric force stress. Symmetry is a conclusion inside a model class, not a definition of every generalised stress.

For symmetric plane stress, orthogonal rotation gives $\\sigma '=Q^{T}\\sigma Q$. Principal stresses are eigenvalues. The [stress laboratory](#/item/visual-lab-stress-tensor) displays the exact transformation and its Mohr-circle encoding.

## 5. Energy and thermodynamic restrictions

Let $e$ be internal energy per unit mass, $q$ heat flux, and $r$ heat supply per unit mass. A standard local first-law balance is

$\\rho De/Dt = \\sigma :D - \\nabla \\cdot q + \\rho r$,

after kinetic energy has been separated using momentum balance. Sign conventions for $q$ differ; here $q$ is the heat-flux vector appearing with outward flux through $q\\cdot n$.

The entropy inequality in a simple form is

$\\rho D\\eta /Dt \\ge -\\nabla \\cdot (q/T)+\\rho r/T$,

for absolute temperature $T>0$. Combining it with energy balance yields a Clausius–Duhem inequality constraining constitutive laws. Fourier heat flux $q=-k\\nabla T$ with $k\\ge 0$ produces nonnegative thermal entropy production $k\\lvert \\nabla T\\rvert^{2}/T^{2}$.

Energy conservation does not determine a material response. It constrains admissible closure. A constitutive equation that violates the entropy inequality may create a perpetual local source under the model’s own assumptions.

## 6. Objectivity and constitutive modelling

A material law should not change its physical prediction under a superposed rigid change of observer. Under $x*=c(t)+Q(t)x$ with orthogonal $Q$, Cauchy stress transforms $\\sigma *=Q\\sigma Q^{T}$ for an objective law.

The small-strain tensor $\\varepsilon =(\\nabla u+(\\nabla u)^{T})/2$ is invariant under infinitesimal rigid motions but not adequate for arbitrary finite rotations. Finite elasticity uses deformation measures such as right Cauchy–Green tensor $C=F^{T}F$, which is unchanged by a superposed spatial rotation.

Constitutive choices include dependence on temperature, history, rate, internal variables, anisotropy, and damage. Calibration in one loading path does not prove validity in another. An audit records:

- frame-indifference or the appropriate covariance principle;
- material symmetry group;
- energy or dissipation inequality;
- dimensional consistency;
- small-parameter or rate regime;
- stability, ellipticity, or hyperbolicity conditions;
- measurements used for identification.

## 7. Linear elasticity

For small displacement $u$, strain is $\\varepsilon =sym \\nabla u$. Isotropic linear elasticity uses

$\\sigma =2\\mu \\varepsilon +\\lambda tr(\\varepsilon )I$.

The strain energy density is

$W=\\mu \\varepsilon :\\varepsilon +(\\lambda /2)(tr \\varepsilon )^{2}$.

In three dimensions, positive definiteness on nonzero symmetric strains requires $\\mu >0$ and $3\\lambda +2\\mu >0$. These conditions correspond to positive shear and bulk moduli.

With density $\\rho$ and body force $b$, dynamics is

$\\rho u_{tt}=\\nabla \\cdot \\sigma +\\rho b$.

For homogeneous constants this supports longitudinal and transverse waves with speeds

$c_{P}=\\sqrt{(\\lambda +2\\mu )/\\rho }$, $c_{S}=\\sqrt{\\mu /\\rho }$.

Boundary conditions commonly prescribe displacement on one portion and traction $\\sigma n$ on another. Prescribing only pure traction leaves rigid-body modes unless force and moment compatibility and a normalisation are handled. Korn’s inequality controls displacement by strain after rigid modes are removed.

Near cracks and corners, stress can be singular even when total elastic energy is finite. Pointwise convergence of a naive mesh is not guaranteed at the singularity.

## 8. Newtonian fluids

For an isotropic Newtonian fluid,

$\\sigma =-pI+2\\mu D+\\lambda (\\nabla \\cdot v)I$.

The viscosity coefficients $\\mu$ and $\\lambda$ have units $\\mathrm{Pa\\cdot s}$. In three dimensions, nonnegative viscous dissipation for every symmetric rate $D$ requires $\\mu\\geq 0$ and $\\lambda+2\\mu/3\\geq 0$; the second condition is invisible after imposing incompressibility. For a constant-density incompressible fluid with spatially constant viscosity $\\mu\\ge0$, $\\nabla \\cdot v=0$ and momentum has the form below. Spatially varying viscosity instead contributes $\\nabla\\cdot(2\\mu D)=\\mu\\Delta v+2D\\nabla\\mu$. This online spatial-viscosity clarification postdates the retained draft PDF.

$\\rho (\\partial_{t}v+(v\\cdot \\nabla )v)=-\\nabla p+\\mu \\Delta v+\\rho b$.

Pressure is not supplied by an independent equation of state in this incompressible formulation; it enforces the divergence constraint. Taking divergence gives a pressure Poisson equation whose boundary conditions follow from momentum and velocity data.

The kinetic-energy balance under no-slip or periodic boundaries and suitable forcing is

$d/dt \\int \\rho \\lvert v\\rvert^{2}/2 dv = -\\int 2\\mu D:D dv + \\int \\rho b\\cdot v dv$,

with boundary terms included for other conditions. Viscosity dissipates kinetic energy when $\\mu \\ge 0$.

For compressible flow one needs mass, momentum, total energy, an equation of state, temperature-dependent transport properties, and entropy admissibility for shocks. Reusing incompressible equations while allowing arbitrary density variation is inconsistent.

## 9. Dimensionless regimes and reduced equations

Choose characteristic length $L$, speed $U$, time $L/U$, and pressure $\\rho U^{2}$. Nondimensional incompressible Navier–Stokes becomes

$\\partial_{t}v+(v\\cdot \\nabla )v=-\\nabla p+(1/Re)\\Delta v+f$.

For $Re≪1$, neglecting inertia gives Stokes flow, but only if the nondimensional solution and boundary conditions do not create another large scale. For $Re≫1$, viscosity is small in the bulk but can remain dominant in thin boundary layers; setting it to zero everywhere can erase no-slip compatibility.

Mach number $Ma=U/c_{sound}$ controls compressibility effects. Froude number compares inertia and gravity at a free surface. Capillary number compares viscosity and surface tension. A single flow can need several ratios.

Lubrication theory assumes a small aspect ratio and ordered velocity/pressure scales. Shallow-water equations average depth under long-wave hypotheses. Reduced equations inherit a regime, not just fewer variables.

## 10. Electromagnetic field balance

Maxwell’s equations imply the Poynting theorem in vacuum with sources:

$\\partial_{t} u_{\\mathbb{E}M}+\\nabla \\cdot S=-J\\cdot E$,

where

$u_{\\mathbb{E}M}=(\\varepsilon_{0}\\lvert E\\rvert^{2}+\\lvert B\\rvert^{2}/\\mu_{0})/2$, $S=(1/\\mu_{0})E\\times B$.

Dot Ampère–Maxwell with $E$, dot Faraday with $B/\\mu_{0}$, and use

$\\nabla \\cdot (E\\times B)=B\\cdot (\\nabla \\times E)-E\\cdot (\\nabla \\times B)$.

The term $J\\cdot E$ is work per unit volume done on matter. Field energy alone is not conserved when charges exchange energy with the field.

At an interface, integral Maxwell equations give jump conditions. In the absence of surface charge, normal $D$ is continuous; without surface current, tangential $H$ is continuous under macroscopic conventions. Tangential $E$ and normal $B$ obey their own conditions. Constitutive relations and free/bound source conventions must be stated.

Electromagnetic stress and momentum introduce additional convention choices in matter. Vacuum Maxwell stress is unambiguous within the vacuum theory; macroscopic material momentum splits require care.

## 10A. Coupled field–continuum models

Real media often couple balances. In magnetohydrodynamics, a conducting fluid interacts with a magnetic field. A common nonrelativistic resistive model combines incompressible or compressible fluid equations with an induction equation. For constant magnetic diffusivity $\\eta_{m}$ and divergence-free magnetic field,

$\\partial_{t}B=\\nabla \\times (v\\times B)+\\eta_{m}\\Delta B$, $\\nabla \\cdot B=0$.

The Lorentz force density can be written $J\\times B$, with current connected to $B$ by an appropriate low-frequency form of Ampère’s law. Which displacement-current terms are neglected, whether charge neutrality is assumed, and whether SI factors $\\mu_{0}$ appear must be declared before mixing formulas.

Magnetic Reynolds number $Rm=UL/\\eta_{m}$ compares field advection with magnetic diffusion. At large $Rm$, magnetic flux is approximately frozen into a sufficiently smooth ideal conducting flow; reconnection, resistivity, boundaries, and weak regularity limit that slogan.

In ideal MHD, kinetic, internal, and magnetic energies exchange. A discretisation that separately conserves fluid energy while allowing $\\nabla \\cdot B$ error to grow can generate unphysical forces. Constrained transport, divergence cleaning, or compatible finite elements target the magnetic constraint, but each has a different discrete claim.

Thermoelasticity couples deformation and temperature: thermal expansion enters stress, while deformation and heat conduction enter energy and entropy balances. Poroelasticity couples solid deformation with pore-fluid flow. Electroelastic and magnetoelastic materials add field-dependent energy. In each case, writing two familiar PDEs next to one another is insufficient. Coupling terms must exchange equal and opposite power so the combined first law closes.

A safe coupled-model construction follows this order:

1. choose the combined state and reference/spatial descriptions;
2. write total mass, momentum, energy, charge, or species balances;
3. identify constraints such as $\\nabla \\cdot B=0$ or incompressibility;
4. propose a joint free energy and dissipation potential where appropriate;
5. derive constitutive forces and fluxes with units and objectivity;
6. state interface conditions so flux leaving one subsystem enters the other;
7. test a decoupled limit and a total-energy identity.

This is where mathematical physics earns its name: different field theories meet through shared balance, but their closures cannot be spliced by notation alone.

## 11. PDE type, data, and weak form

The wave equation needs initial displacement and velocity plus boundary or radiation conditions. The heat equation needs initial temperature and spatial boundary conditions but not an independent initial time derivative. Elliptic static elasticity needs boundary conditions and compatibility; hyperbolic elasticity propagates finite-speed waves.

For diffusion $u_{t}-\\kappa \\Delta u=f$, multiply by test function $w$, integrate, and integrate by parts:

$\\int w u_{t}+\\kappa \\int \\nabla w\\cdot \\nabla u=\\int wf+\\kappa \\int_{\\partial \\Omega }w \\partial_{n} u$.

This weak form lowers spatial differentiability requirements and naturally incorporates flux boundaries. Trial and test spaces must encode essential boundary conditions. A finite-element matrix without its function spaces and boundary treatment is incomplete mathematics.

Conservation laws often use finite-volume schemes because flux leaving one cell enters its neighbor exactly at the discrete level. Stability, consistency, and convergence remain separate questions. For nonlinear shocks, numerical viscosity and entropy stability matter.

## 12. Worked audits

### A. Plane stress

Let

$\\displaystyle \\sigma =\\begin{pmatrix}90&25\\\\25&30\\end{pmatrix}\\,\\mathrm{MPa}$.

Then mean stress is $60\\,\\mathrm{MPa}$, circle radius is $\\sqrt{30^{2}+25^{2}}=\\sqrt{1525}\\,\\mathrm{MPa}$, and principal stresses are $60\\pm \\sqrt{1525}\\,\\mathrm{MPa}$. The major principal normal angle is

$\\displaystyle \\theta =\\tfrac12\\operatorname{atan2}(2\\cdot25,90-30)\\approx 19.9^\\circ$

modulo $180^\\circ$; the other principal direction is perpendicular. Trace $120\\,\\mathrm{MPa}$ and determinant $2075\\,\\mathrm{MPa}^{2}$ agree with the eigenvalue sum and product.

### B. Couette flow

Between plates $y=0,h$ with $h>0$, let the lower plate be fixed and upper plate move at $U$. For an incompressible constant-density fluid with constant viscosity $\\mu>0$ and no body force ($b=0$), steady unidirectional flow $v=(u(y),0,0)$ with zero pressure gradient gives $\\mu u''=0$. No-slip data $u(0)=0$, $u(h)=U$ uniquely yield $u=Uy/h$. Shear stress is constant $\\tau_{xy}=\\mu U/h$. If walls slip, the profile changes; the differential equation alone does not determine it. These local example hypotheses are clarified online; the retained draft PDF predates this clarification.

### C. Elastic wave units

$\\lambda ,\\mu$ have pressure units $kg/(m\\cdot s^{2})$, while density has $kg/m^{3}$. Their ratio has units $m^{2}/s^{2}$, so square roots in $c_{P},c_{S}$ have velocity units. If measured data produce $c_{P}<c_{S}$, the claimed isotropic positive-energy constants are inconsistent because $\\lambda +2\\mu$ must exceed $\\mu$ when the bulk positivity condition holds.

### D. Electromagnetic energy

In a source-free perfectly conducting cavity, boundary condition $n\\times E=0$ makes normal Poynting flux vanish. Poynting’s theorem then conserves total field energy. With a resistive current $J=\\sigma_{c}E$, the work term $J\\cdot E=\\sigma_{c}\\lvert E\\rvert^{2}\\ge 0$ transfers field energy into matter.

## Continuation

Proceed to nonlinear elasticity, viscoelasticity, plasticity, multiphase flow, turbulence, magnetohydrodynamics, general-relativistic fluids, geometric conservation laws, or certified numerics only after choosing the appropriate kinematics and constitutive structure. The durable sequence is balance, closure, data, weak formulation, invariant audit, then computation.
`;export{e as default};