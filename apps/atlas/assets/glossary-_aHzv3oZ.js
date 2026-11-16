var e=`---
parent_id: book-fields-fluids-continuum
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Entries point to the corresponding primary chapter.

## Glossary

**Acoustic impedance.** $Z = \\rho c$, the product of density and wave speed. Determines reflection and transmission at interfaces. "Acoustics and Elastic Wave Propagation".

**Acoustic wave equation.** Linearised equation for small pressure perturbations: $p'_{tt} = c^{2} \\Delta p'$. "Acoustics and Elastic Wave Propagation".

**Alfvén's frozen-flux theorem.** In ideal MHD, magnetic flux through a material surface is conserved. The exact theorem assumes zero resistivity, a smooth solenoidal field and a smooth invertible material motion. "Coupled Field–Continuum Models".

**Bulk modulus.** $K = \\lambda + \\frac{2}{3}\\mu$, relating volumetric stress to volumetric strain. Its positivity is part of the elastic positive-energy condition. "Linear Elasticity"; "Notation and Conventions".

**Bulk viscosity.** $\\zeta = \\lambda + \\frac{2}{3}\\mu$, the coefficient of viscous resistance to volume change. Nonnegativity required by the entropy inequality. "Newtonian Fluids".

**Capillary number.** $Ca = \\mu U / \\gamma$, comparing viscous forces to surface tension. "Dimensionless Regimes and Reduced Equations".

**Cauchy stress tensor.** Second-order tensor $\\sigma$ such that traction $t(n) = \\sigma n$. Symmetric for classical continua. "Cauchy Stress and Momentum Balance".

**Clausius–Duhem inequality.** Local form of the second law: $\\rho D\\eta/Dt \\ge -\\nabla \\cdot (q/T) + \\rho r/T$. "Energy and Thermodynamic Restrictions".

**Deformation gradient.** $F = \\partial \\chi / \\partial X$, the Jacobian of the motion map. "Material and Spatial Descriptions".

**Euler equations.** Inviscid momentum equations obtained by setting $\\mu = 0$ in the Navier–Stokes equations. Do not generally inherit viscous no-slip conditions. "Dimensionless Regimes and Reduced Equations".

**Fourier number.** $Fo = \\kappa \\Delta t / \\Delta x^{2}$, the dimensionless time step for explicit heat-equation schemes. Stability requires $Fo \\le 1/2$ for FTCS. "Numerical Methods for PDEs".

**Froude number.** $Fr = U / \\sqrt{g L}$, comparing inertia to gravity at a free surface. "Dimensionless Regimes and Reduced Equations".

**Green–Lagrange strain.** $E = \\frac{1}{2}(C - I)$, an objective finite strain measure. Reduces to infinitesimal strain when the displacement gradient is small. "Material and Spatial Descriptions".

**Hagen–Poiseuille law.** Volume flux $Q = \\pi G a^{4}/(8\\mu)$ for laminar flow in a circular pipe. "Viscous Flows and Exact Solutions".

**Helmholtz free energy.** $\\psi = e - T \\eta$, used to derive stress and entropy in thermoelasticity. "Energy and Thermodynamic Restrictions"; "Coupled Field–Continuum Models".

**Ideal MHD.** Magnetohydrodynamics with zero magnetic diffusivity ($\\eta_{m} = 0$). "Coupled Field–Continuum Models".

**Incompressible flow.** Flow satisfying $\\nabla \\cdot v = 0$. Density is constant along particle paths but need not be uniform in space. "Conservation of Mass"; "Newtonian Fluids".

**Korn's inequality.** Mathematical estimate controlling the $H^{1}$ norm of displacement by the $L^{2}$ norm of strain, after removing rigid modes. "Linear Elasticity".

**Lame parameters.** $\\mu$ (shear modulus) and $\\lambda$ (second Lame parameter), the two independent elastic constants for isotropic linear elasticity. "Linear Elasticity".

**Mach number.** $Ma = U / c$, the ratio of flow speed to the speed of sound. "Compressible Flow and Shock Waves".

**Magnetic Reynolds number.** $Rm = \\mu_{0} \\sigma_{c} U L$, comparing magnetic advection to diffusion. "Coupled Field–Continuum Models".

**Material derivative.** $Df/Dt = \\partial_{t} f + v \\cdot \\nabla f$, the time rate of change following a material particle. "Material and Spatial Descriptions".

**Navier equations.** Equations of motion for linear isotropic elasticity: $\\rho u_{tt} = \\mu \\Delta u + (\\lambda + \\mu) \\nabla(\\nabla \\cdot u) + \\rho b$. "Linear Elasticity".

**Navier–Stokes equations.** Momentum balance for a Newtonian fluid. Incompressible form: $\\rho (\\partial_{t} v + (v \\cdot \\nabla) v) = -\\nabla p + \\mu \\Delta v + \\rho b$ with $\\nabla \\cdot v = 0$. "Newtonian Fluids".

**Objectivity (frame indifference).** Requirement that constitutive laws transform correctly under rigid observer changes. "Objectivity and Constitutive Principles".

**Penetration depth.** $\\delta = \\sqrt{2\\nu/\\omega}$, the characteristic decay length in Stokes's second problem. "Viscous Flows and Exact Solutions".

**Plane Poiseuille flow.** Steady unidirectional flow between parallel plates driven by a pressure gradient. "Newtonian Fluids"; "Viscous Flows and Exact Solutions".

**Poisson's ratio.** $\\nu_{P} = \\lambda / (2(\\lambda + \\mu))$, the ratio of transverse contraction to axial extension in uniaxial tension. "Notation and Conventions".

**Poynting vector.** $S = (1/\\mu_{0}) E \\times B$, the electromagnetic energy flux. "Electromagnetic Field Balance".

**Prandtl number.** $Pr = \\nu / \\alpha$, comparing momentum diffusivity to thermal diffusivity. "Dimensionless Regimes and Reduced Equations".

**Rankine--Hugoniot conditions.** Jump conditions expressing conservation of mass, momentum, and energy across a shock discontinuity. "Conservation of Mass"; "Compressible Flow and Shock Waves".

**Rate of deformation tensor.** $D = \\frac{1}{2}(\\nabla v + (\\nabla v)^{T})$, the symmetric part of the velocity gradient. Objective and measures instantaneous stretching. "Material and Spatial Descriptions".

**Reynolds number.** $Re = \\rho U L / \\mu = U L / \\nu$, the ratio of inertial to viscous forces. "Dimensionless Regimes and Reduced Equations".

**Reynolds transport theorem.** Rule for differentiating integrals over time-dependent domains: $\\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_{\\Omega(t)} f \\, \\mathrm{d}v = \\int_{\\Omega(t)} (Df/Dt + f \\nabla \\cdot v) \\, \\mathrm{d}v$. "Transport Theorem and Reynolds Transport".

**Shallow-water equations.** Depth-averaged hyperbolic equations for long waves in a thin fluid layer. "Dimensionless Regimes and Reduced Equations".

**Sound speed.** $c = \\sqrt{(\\partial p / \\partial \\rho)_{s}}$ for isentropic perturbations; $c = \\sqrt{\\gamma R T}$ for an ideal gas. "Compressible Flow and Shock Waves".

**Spin tensor.** $W = \\frac{1}{2}(\\nabla v - (\\nabla v)^{T})$, the skew-symmetric part of the velocity gradient. Not objective. "Material and Spatial Descriptions".

**Stokes equations.** Quasi-static viscous limit when both the spatial and independent time-scale inertia parameters are small: $\\nabla p = \\mu \\Delta v + \\rho b$, $\\nabla \\cdot v = 0$. "Dimensionless Regimes and Reduced Equations".

**Stokes's law.** Drag force $F_{D} = 6\\pi \\mu a U$ on a sphere in creeping flow. "Viscous Flows and Exact Solutions".

**Stress power.** $\\sigma : D$, the mechanical power per unit volume converted to internal energy. "Energy and Thermodynamic Restrictions".

**Weak formulation.** Integral form of a PDE obtained by multiplying by a test function and integrating by parts, lowering differentiability requirements. "PDE Classification, Boundary Data, and Weak Forms".

**Young's modulus.** $E = \\mu(3\\lambda + 2\\mu)/(\\lambda + \\mu)$, the ratio of axial stress to axial strain in uniaxial tension. "Linear Elasticity".

## Claim finder with status guards

### Theorems

**Cauchy's theorem ("Cauchy Stress and Momentum Balance").** There exists a second-order tensor $\\sigma$ such that traction depends linearly on normal: $t(n) = \\sigma n$. Proved by applying momentum balance to a shrinking tetrahedron.

**Symmetry of Cauchy stress ("Cauchy Stress and Momentum Balance").** For classical continua with no couple traction or body couple, $\\sigma = \\sigma^{T}$. Proved from angular momentum balance.

**Reynolds transport theorem ("Transport Theorem and Reynolds Transport").** Proved by pulling back to the reference configuration and applying Jacobi's formula.

### Empirical observations

**Stokes's law validity ("Viscous Flows and Exact Solutions").** The drag formula $F_{D} = 6\\pi \\mu a U$ is experimentally verified for $Re \\ll 1$. Inertial corrections (Oseen) become significant at $Re \\approx 1$.

**Speed of sound in air ("Compressible Flow and Shock Waves").** $c \\approx 347 \\, \\mathrm{m}/\\mathrm{s}$ at $300 \\, \\mathrm{K}$; measured values agree with the ideal-gas prediction within experimental error.

### Open problems

**Navier–Stokes existence and smoothness.** Existence and regularity of solutions to the three-dimensional incompressible Navier–Stokes equations for arbitrary smooth initial data remains open. "Newtonian Fluids".

## Further primary entries

**Potential and circulation:** [Potential Flow](../potential-flow.md) distinguishes local curl-free fields from a single-valued global scalar, and derives cylinder pressure/lift and free-surface dispersion. **Boundary-layer profile:** [Boundary Layers](../boundary-layers.md) proves normalised Blasius shooting and its deficit identities. **Integrated models:** [Capstone](../continuum-capstone.md) combines magnetic braking, thermal constraint and acoustic echoes with explicit boundary power.
`;export{e as default};