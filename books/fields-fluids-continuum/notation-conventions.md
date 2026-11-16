
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the distinctions between proved statements, named theorem inputs, formal reductions and measured observations, and the structural conventions that keep arguments clean.

## Kinematic notation

### Material and spatial coordinates

- $X \in B_{0}$: material particle label (reference position).
- $x = \chi(X, t)$: spatial position at time $t$ of the particle labeled $X$.
- $F = \partial \chi / \partial X$: deformation gradient, with components $F_{iA} = \partial x_{i} / \partial X_{A}$.
- $J = \det F$: Jacobian determinant; measures local volume change.
- $v(x, t)$: spatial velocity field.
- $L = \nabla v$: spatial velocity gradient, with components $L_{ij} = \partial v_{i} / \partial x_{j}$.
- $D = \frac{1}{2}(L + L^{T})$: rate of deformation (symmetric part of $L$).
- $W = \frac{1}{2}(L - L^{T})$: spin tensor (skew-symmetric part of $L$).
- $Df / Dt = \partial_{t} f + v \cdot \nabla f$: material derivative of a scalar field $f$.

### Strain measures

- $C = F^{T} F$: right Cauchy–Green tensor.
- $B = F F^{T}$: left Cauchy–Green tensor.
- $E = \frac{1}{2}(C - I)$: Green–Lagrange strain tensor.
- $\varepsilon = \frac{1}{2}(\nabla u + (\nabla u)^{T})$: infinitesimal strain tensor for small displacement $u = x - X$.

## Balance-law notation

- $\rho(x, t)$: mass density per unit current volume.
- $\rho_{0}(X)$: reference mass density.
- $\sigma(x, t)$: Cauchy stress tensor (second-order, symmetric for classical continua).
- $t(n) = \sigma n$: traction vector on a surface with outward unit normal $n$.
- $b$: body force per unit mass.
- $e$: specific internal energy (energy per unit mass).
- $q$: heat flux vector.
- $r$: heat supply per unit mass.
- $\eta$: specific entropy.
- $T$: absolute temperature.
- $\psi = e - T \eta$: Helmholtz free energy per unit mass.

## Constitutive notation

- $\mu$: dynamic viscosity (units $\mathrm{Pa} \cdot \mathrm{s}$).
- $\nu = \mu / \rho$: kinematic viscosity (units $\mathrm{m}^{2}/\mathrm{s}$).
- $\lambda$: second Lamé parameter (linear elasticity) or second viscosity coefficient (fluids); context disambiguates.
- $K = \lambda + \frac{2}{3}\mu$: bulk modulus.
- $E = \mu(3\lambda + 2\mu) / (\lambda + \mu)$: Young's modulus.
- $\nu_{P} = \lambda / (2(\lambda + \mu))$: Poisson's ratio (distinguished from kinematic viscosity by subscript).
- $k$: thermal conductivity.
- $\alpha = k / (\rho c)$: thermal diffusivity.
- $\sigma_{c}$: electrical conductivity (distinguished from Cauchy stress by subscript).

## Fluid-mechanics notation

- $p$: pressure. In incompressible flow it is a Lagrange multiplier enforcing $\nabla \cdot v = 0$; in compressible flow it is given by an equation of state.
- $Re = \rho U L / \mu = U L / \nu$: Reynolds number.
- $Ma = U / c$: Mach number.
- $Fr = U / \sqrt{g L}$: Froude number.
- $Ca = \mu U / \gamma$: capillary number.
- $Pr = \nu / \alpha$: Prandtl number.
- $c = \sqrt{(\partial p / \partial \rho)_{s}}$: speed of sound.
- $\delta = \sqrt{2\nu / \omega}$: penetration depth in Stokes's second problem.

## Electromagnetic notation

- $E$: electric field.
- $B$: magnetic field.
- $D = \varepsilon_{0} E + P$: electric displacement.
- $H = B / \mu_{0} - M$: magnetic field intensity.
- $\rho_{e}$: charge density (distinguished from mass density by subscript).
- $J$: current density.
- $\varepsilon_{0}$: vacuum permittivity.
- $\mu_{0}$: vacuum permeability.
- $c = 1 / \sqrt{\mu_{0} \varepsilon_{0}}$: speed of light in vacuum.
- $S = (1 / \mu_{0}) E \times B$: Poynting vector.
- $\eta_{m} = 1 / (\mu_{0} \sigma_{c})$: magnetic diffusivity.
- $Rm = \mu_{0} \sigma_{c} U L$: magnetic Reynolds number.

## Wave notation

- $c_{P} = \sqrt{(\lambda + 2\mu) / \rho}$: longitudinal (P) wave speed in linear elasticity.
- $c_{S} = \sqrt{\mu / \rho}$: transverse (S) wave speed in linear elasticity.
- $c_{0} = \sqrt{E / \rho}$: longitudinal wave speed in a thin elastic rod.
- $Z = \rho c$: acoustic impedance.
- $R = (Z_{2} - Z_{1}) / (Z_{2} + Z_{1})$: pressure reflection coefficient.
- $T = 2 Z_{2} / (Z_{2} + Z_{1})$: pressure transmission coefficient.

## Numerical notation

- $\Delta x$, $\Delta t$: spatial and temporal step sizes.
- $Fo = \kappa \Delta t / \Delta x^{2}$: Fourier number.
- $u_{j}^{n}$: discrete approximation at grid point $j$ and time level $n$.
- $K_{ij}$: stiffness matrix entry in finite element methods.

## Index and summation conventions

- Latin indices $i, j, k, \dots$ run over spatial coordinates $1, 2, 3$.
- Capital Latin indices $A, B, C, \dots$ run over material coordinates $1, 2, 3$.
- The Einstein summation convention is used: repeated indices in a product are summed over their range.
- $\delta_{ij}$: Kronecker delta.
- $\varepsilon_{ijk}$: Levi-Civita symbol (permutation tensor).

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms and constitutive assumptions | Definitions, balance laws, thermodynamic inequalities |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard calculus manipulations |
| Empirical observation | Experimental measurement or numerical simulation within stated error bounds | Laboratory data, verified computations |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Cauchy Stress and Momentum Balance".
- Chapter IDs are used in internal links, including `cauchy-stress-and-momentum-balance` and `newtonian-fluids`. The earlier numerical chapter has an explicit alias to the numerical-mathematics primary.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
