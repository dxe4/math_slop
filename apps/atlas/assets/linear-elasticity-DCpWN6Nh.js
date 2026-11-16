var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: linear-elasticity
title: "Linear Elasticity"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Linear Elasticity

## Learning purpose

This chapter develops the theory of linear isotropic elasticity: the strain--stress relation, the strain energy density, positive-definiteness conditions, and the Navier equations of motion. You will learn to solve boundary value problems, compute wave speeds, and recognise singular behaviour near cracks and corners.

## Kinematics of small displacement

For a displacement with small reference gradient, the deformation gradient is $F=I+\\nabla_Xu$. In the linearised equations below, x denotes the fixed reference coordinate identified with current position to first order. The Green–Lagrange strain $E = \\frac{1}{2}(F^{T} F - I)$ reduces to the infinitesimal strain tensor

$$\\varepsilon = \\frac{1}{2}\\bigl(\\nabla u + (\\nabla u)^{T}\\bigr), \\qquad \\varepsilon_{ij} = \\frac{1}{2}\\left(\\frac{\\partial u_{i}}{\\partial x_{j}} + \\frac{\\partial u_{j}}{\\partial x_{i}}\\right).$$

The infinitesimal strain is symmetric by construction. It vanishes for rigid translations and for infinitesimal rigid rotations $u(x)=a+Wx$ with $W^T=-W$. It is a linearisation and does not vanish for a general finite rotation written as $u(x)=(Q-I)x$; finite rotations require a finite-strain measure such as Green–Lagrange strain.

## Hooke's law for isotropic materials

For isotropic linear elasticity, the stress--strain relation is

$$\\sigma = 2\\mu \\varepsilon + \\lambda \\, \\mathrm{tr}(\\varepsilon) I,$$

or in components,

$$\\sigma_{ij} = 2\\mu \\varepsilon_{ij} + \\lambda \\varepsilon_{kk} \\delta_{ij}.$$

The Lamé parameters $\\mu$ and $\\lambda$ have units of pressure (pascals). The shear modulus $\\mu$ (also denoted $G$) relates shear stress to shear strain. The bulk modulus $K = \\lambda + \\frac{2}{3}\\mu$ relates volumetric stress to volumetric strain.

## Strain energy and stability

The strain energy density is

$$W = \\mu \\varepsilon : \\varepsilon + \\frac{\\lambda}{2}(\\mathrm{tr} \\varepsilon)^{2} = \\mu \\varepsilon_{ij} \\varepsilon_{ij} + \\frac{\\lambda}{2}(\\varepsilon_{kk})^{2}.$$

For $W$ to be positive definite on nonzero symmetric strains, we require

$$\\mu > 0, \\qquad 3\\lambda + 2\\mu > 0.$$

The first condition ensures positive shear stiffness; the second ensures positive bulk stiffness ($K > 0$). They are additional material-stability conditions discussed in *Energy and Thermodynamic Restrictions*, rather than consequences of the reversible entropy equality alone.

## Navier's equations

Substituting Hooke's law into the momentum balance $\\rho u_{tt} = \\nabla \\cdot \\sigma + \\rho b$ gives Navier's equations:

$$\\rho \\frac{\\partial^{2} u}{\\partial t^{2}} = \\mu \\Delta u + (\\lambda + \\mu) \\nabla (\\nabla \\cdot u) + \\rho b.$$

In components,

$$\\rho \\frac{\\partial^{2} u_{i}}{\\partial t^{2}} = \\mu \\frac{\\partial^{2} u_{i}}{\\partial x_{j} \\partial x_{j}} + (\\lambda + \\mu) \\frac{\\partial^{2} u_{j}}{\\partial x_{i} \\partial x_{j}} + \\rho b_{i}.$$

For static problems ($u_{tt} = 0$) with no body force, these reduce to the equilibrium equations.

## Wave propagation

For homogeneous material and no body force, Navier's equations support two types of plane waves:

- **Longitudinal (P) waves:** displacement parallel to propagation direction, speed
  $$c_{P} = \\sqrt{\\frac{\\lambda + 2\\mu}{\\rho}}.$$
- **Transverse (S) waves:** displacement perpendicular to propagation direction, speed
  $$c_{S} = \\sqrt{\\frac{\\mu}{\\rho}}.$$

Since $\\lambda + 2\\mu > \\mu$ when $3\\lambda + 2\\mu > 0$ and $\\mu > 0$, we always have $c_{P} > c_{S}$. If measured data produce $c_{P} < c_{S}$, the claimed isotropic positive-energy constants are inconsistent.

**Unit check.** The Lamé parameters have units $\\mathrm{kg}/(\\mathrm{m} \\cdot \\mathrm{s}^{2})$. Density has units $\\mathrm{kg}/\\mathrm{m}^{3}$. Their ratio has units $\\mathrm{m}^{2}/\\mathrm{s}^{2}$, so the square roots have velocity units, as required.

## Boundary conditions

Standard boundary conditions for linear elasticity include:

- **Displacement boundary:** $u = \\bar{u}$ on $\\partial \\Omega_{u}$.
- **Traction boundary:** $\\sigma n = \\bar{t}$ on $\\partial \\Omega_{t}$.

Prescribing only traction (pure Neumann problem) leaves rigid-body modes undetermined. For a solution to exist, the applied tractions and body forces must satisfy force and moment equilibrium:

$$\\int_{\\partial \\Omega} \\bar{t} \\, \\mathrm{d}a + \\int_{\\Omega} \\rho b \\, \\mathrm{d}v = 0, \\qquad \\int_{\\partial \\Omega} x \\times \\bar{t} \\, \\mathrm{d}a + \\int_{\\Omega} x \\times \\rho b \\, \\mathrm{d}v = 0.$$

Even with these compatibility conditions, the displacement is determined only up to a rigid-body motion. A normalisation (fixing translation and rotation of the body) is required for uniqueness. Korn's inequality provides the mathematical foundation: it controls the $H^{1}$ norm of $u$ by the $L^{2}$ norm of $\\varepsilon$ after rigid modes are removed.

## Singularities

Near cracks and re-entrant corners, elastic stress can be singular even when total elastic energy is finite. For a mode-I crack in plane strain, the stress near the tip behaves as $\\sigma \\sim K_{I}/\\sqrt{2\\pi r}$, where $K_{I}$ is the stress intensity factor and $r$ is distance from the tip. Pointwise convergence of a naive finite-element mesh is not guaranteed at the singularity; graded meshes or enriched approximations can improve efficiency, while energy convergence remains a separate norm-dependent question.

## Positive energy separates shear from volume change

Write the symmetric strain as its traceless part plus one third its trace times identity. Orthogonality gives

$$W=\\mu|\\operatorname{dev}\\varepsilon|^2+
\\frac K2(\\operatorname{tr}\\varepsilon)^2,\\qquad
K=\\lambda+\\frac{2\\mu}{3}.$$

The two stability conditions are therefore necessary as well as sufficient: a nonzero traceless strain isolates mu, and a pure dilation isolates K. They give a uniform lower bound on squared strain norm, with constant the smaller of mu and three halves K. The Lamé coefficient lambda itself can be negative without violating either condition.

### Example 8.1: a stable auxetic material

Take lambda equal to minus half mu with positive mu. Then K is mu divided by six, Young's modulus is mu and Poisson's ratio is minus one half. Under positive axial tension, the transverse strains in the earlier exercise are positive, so the material expands laterally instead of contracting. Its quadratic energy is nevertheless positive on every nonzero symmetric strain.

The allowed isotropic positive-energy range of Poisson's ratio is strictly between minus one and one half. This follows by substituting lambda greater than minus two thirds mu into its rational formula, whose denominator is then positive. Equivalently the inverse formulas express shear modulus as $E/[2(1+\\nu)]$ and bulk modulus as $E/[3(1-2\\nu)]$. Neither negative Poisson ratio nor negative lambda alone is evidence of negative elastic energy.

At the upper endpoint the incompressible limit is singular in the volumetric stiffness, and pressure becomes a constraint multiplier in a different model. Setting the trace to zero inside a finite compressible Hooke law does not by itself create that independent multiplier. The source exercise states the modified constitutive description explicitly.

## Full displacement anchoring has a direct Korn proof

For a compactly supported smooth vector field, expand the squared symmetric gradient. Its integral is half the gradient norm squared plus half the integral of $\\partial_ju_i\\partial_iu_j$. Integrate that cross term by parts twice. Compact support removes the boundary terms, and it becomes the squared divergence integral. Thus

$$\\int|\\varepsilon(u)|^2=
\\frac12\\int|\\nabla u|^2+\\frac12\\int|\\operatorname{div}u|^2.$$

Density extends the identity to vector fields in the zero-boundary first-Sobolev space. It proves a Korn bound directly: the full gradient norm squared is at most twice the strain norm squared. Vector Poincaré then controls the full first-Sobolev norm. This proof uses the entire zero-boundary space; it does not claim the same identity without boundary terms for arbitrary boundary values.

For a bounded domain, positive energy constants and a bounded energy-dual vector load, define the elasticity bilinear form by integrating twice mu times symmetric-gradient contraction plus lambda times the divergence product. Its diagonal is twice the stored energy, so the previous energy bound and Korn inequality make it coercive in the gradient norm. Its boundedness follows from Cauchy–Schwarz.

Lax–Milgram, proved in the [Sobolev opening](../pde-weak-theory-waves-patterns/sobolev-spaces.md), therefore gives a unique zero-displacement weak equilibrium with a quantitative energy bound. Nonzero displacement data are treated by an admissible first-Sobolev lift and subtraction, exactly as in scalar elliptic theory. The vector Korn step is the additional reason symmetric-gradient energy controls displacement here.

The weak equilibrium is also the unique minimiser of stored energy minus load work. Expanding at that solution cancels the linear difference term by the weak equation and leaves half the coercive bilinear energy of the displacement error. This exact energy-gap identity proves both minimality and a norm estimate. It does not imply a classical pointwise stress without the relevant domain and data regularity.

## Rigid modes explain the pure-traction compatibility conditions

The kernel of symmetric gradient on a connected domain consists of infinitesimal rigid fields $a+Wx$, with W skew. One local distributional proof differentiates the strain identities to obtain

$$\\partial_i\\partial_j u_k=
\\partial_i\\varepsilon_{jk}+\\partial_j\\varepsilon_{ik}
-\\partial_k\\varepsilon_{ij}.$$

If strain vanishes, every second derivative vanishes. First derivatives are therefore constant on each connected component, so u is affine there, and zero symmetric gradient makes its linear part skew. The converse is immediate. This proof identifies the kernel without assuming that every rigid field is an exact finite rotation.

For traction loading, weak solvability requires the load functional to vanish on that kernel. Testing the three translations gives net-force compatibility; testing the three independent infinitesimal rotations gives net-moment compatibility. Boundary traction and volume load must be included with the same units and orientation conventions as momentum balance.

A quotient-space Korn inequality on a bounded connected Lipschitz domain controls first-Sobolev displacement modulo those rigid fields. That general boundary version is a named analytic input here. Restricting to a fixed normalisation complementary to the rigid space restores coercivity, and Lax–Milgram gives a unique normalised solution for compatible loads. Any other solution differs by a rigid field. A disconnected body needs force/moment compatibility and a normalisation on every component, rather than one global set of six conditions.

Mixed boundary conditions require a corresponding Korn inequality removing rigid motions through the anchored displacement patch. They cannot be justified solely by the full-zero-boundary calculation above. A visible rigid-mode drift in a traction computation may thus reflect missing normalisation, whereas an unbalanced total applied force reflects genuine incompatibility of static data.

## Plane stress and plane strain are different reductions

For plane strain impose zero out-of-plane displacement variation in the model, so the out-of-plane normal strain is zero. The planar stress law retains the three-dimensional lambda and mu. The out-of-plane normal stress is generally lambda times the in-plane trace and need not vanish.

For plane stress instead impose zero out-of-plane normal and shear stresses. The shear conditions give zero corresponding shear strains, and the normal equation gives $\\varepsilon_{33}=-\\lambda(\\varepsilon_{11}+\\varepsilon_{22})/(\\lambda+2\\mu)$. Substitution into the in-plane equations replaces lambda by $2\\mu\\lambda/(\\lambda+2\\mu)$. The denominator is positive under the full energy assumptions.

These equations can also be obtained by minimising the three-dimensional quadratic energy over the unrestrained out-of-plane strain. That minimisation explains the reduced stiffness rather than treating its coefficient as a separate memorized material constant. Thin-sheet plane stress and constrained thick-body plane strain therefore predict different forces from the same in-plane deformation.

### Example 8.2: equal in-plane extension

Let the two planar normal strains both be a and the shear strain zero. Under plane strain the planar normal stress is $2(\\mu+\\lambda)a$ and the third normal stress is $2\\lambda a$. Under plane stress the third normal strain adjusts to $-2\\lambda a/(\\lambda+2\\mu)$ and the planar stress is $2\\mu a+4\\mu\\lambda a/(\\lambda+2\\mu)$.

For positive lambda and positive a the plane-stress body can contract in thickness, reducing the planar force relative to the plane-strain constraint. The calculation also remains meaningful in the permitted negative-lambda range, with the corresponding sign changes. Selecting a reduction is a boundary and geometric modelling choice, not a change of coordinate axes.

## Wave speeds follow from the acoustic tensor

Insert a plane wave with unit propagation direction n and polarisation a into the homogeneous dynamic equation. Its algebraic stiffness on the polarisation is $\\mu I+(\\lambda+\\mu)n\\otimes n$. A transverse polarisation is an eigenvector with eigenvalue mu, while a longitudinal one has eigenvalue lambda plus twice mu. Dividing by positive density and taking the square root gives the stated two wave speeds.

Positive full strain energy implies both acoustic eigenvalues are positive and the longitudinal one is larger. The converse is weaker: choosing lambda equal to minus mu gives positive shear and longitudinal acoustic eigenvalues, but negative bulk modulus. Thus real wave speeds along every direction in this isotropic differential expression do not alone prove a positive energy on every homogeneous symmetric strain.

An observed wave speed also needs its mode and geometry identified. A slender rod's approximately uniaxial longitudinal speed uses Young's modulus divided by density, whereas an unbounded three-dimensional longitudinal plane wave uses lambda plus twice mu. Comparing those two measurements without their geometric assumptions can create an apparent inconsistency in otherwise compatible material data.

### Example 8.3: an exact affine equilibrium

Choose any constant symmetric strain S and displacement $u=Sx$ on a bounded body. Its isotropic stress is constant, so its divergence is zero. With zero body force and boundary traction equal to that constant stress times the outward normal, it is an exact weak equilibrium. Its total applied force and moment vanish by the divergence theorem and stress symmetry.

The traction problem admits addition of every infinitesimal rigid field; the strain and stress stay the same. If the boundary displacement is instead fixed to Sx, that ambiguity disappears and the full-displacement theorem gives uniqueness. The example makes compatibility, constitutive response and normalisation explicit without invoking a special domain shape.

## Finite energy can coexist with unbounded stress

For the stated crack-tip stress scale proportional to the inverse square root of distance, squared stress is proportional to the inverse distance. In a two-dimensional cross-section its area integral includes a radial factor, leaving a finite integral near the tip. Thus an energy-space solution can have finite elastic energy and still have no bounded pointwise stress there.

The exact angular crack fields and stress-intensity coefficient require their boundary-value model; the scaling alone does not determine them or a fracture criterion. A material toughness criterion is further constitutive information. Global smooth-boundary regularity theorems do not apply unchanged to a cracked domain, while local estimates away from the tip remain useful.

An energy-norm approximation can therefore converge without uniform pointwise stress convergence at the singular point. Mesh refinement, enrichment or local weighted estimates address different numerical goals. The physical balance, positive-energy existence theorem and singularity interpretation should all be stated before choosing which error quantity is meaningful.

## Summary and connections

This chapter developed linear isotropic elasticity from the constitutive law through the Navier equations to wave propagation and boundary value problems. The stability conditions $\\mu > 0$ and $3\\lambda + 2\\mu > 0$ ensure positive strain energy.

In the previous chapter, *Objectivity and Constitutive Principles*, we established the requirements for admissible constitutive laws. In the next chapter, *Newtonian Fluids*, we turn to the analogous constitutive theory for viscous fluids.

## Exercises

### Exercise 1
For a uniaxial tension test with $\\sigma_{11} = \\sigma$, all other $\\sigma_{ij} = 0$, find the axial strain $\\varepsilon_{11}$ and the transverse strain $\\varepsilon_{22}$ in terms of $\\sigma$, $\\mu$, and $\\lambda$. Express the result using Young's modulus $E = \\mu(3\\lambda + 2\\mu)/(\\lambda + \\mu)$ and Poisson's ratio $\\nu = \\lambda/(2(\\lambda + \\mu))$.

<details><summary>Hint 1</summary>

Use equality of the two transverse strains by the symmetric loading.

</details>

<details><summary>Hint 2</summary>

Solve the zero transverse stress equation before substituting into the axial equation.

</details>

<details><summary>Full solution</summary>

**Solution.** From Hooke's law, $\\sigma_{11} = 2\\mu \\varepsilon_{11} + \\lambda(\\varepsilon_{11} + 2\\varepsilon_{22}) = \\sigma$ and $\\sigma_{22} = 2\\mu \\varepsilon_{22} + \\lambda(\\varepsilon_{11} + 2\\varepsilon_{22}) = 0$. Solving the second equation: $\\varepsilon_{22} = -\\lambda \\varepsilon_{11}/(2(\\lambda + \\mu)) = -\\nu \\varepsilon_{11}$. Substituting into the first: $\\sigma = \\varepsilon_{11}(2\\mu + \\lambda(1 - 2\\nu)) = E \\varepsilon_{11}$. Thus $\\varepsilon_{11} = \\sigma/E$ and $\\varepsilon_{22} = -\\nu \\sigma/E$.

</details>

### Exercise 2
A steel bar has $\\rho = 7850 \\, \\mathrm{kg}/\\mathrm{m}^{3}$, $\\mu = 79.3 \\, \\mathrm{GPa}$, and $\\lambda = 121 \\, \\mathrm{GPa}$. Compute $c_{P}$ and $c_{S}$ and verify $c_{P} > c_{S}$.

<details><summary>Hint 1</summary>

Convert gigapascals to pascals before dividing by density.

</details>

<details><summary>Hint 2</summary>

Use the longitudinal and transverse acoustic moduli separately.

</details>

<details><summary>Full solution</summary>

**Solution.** $c_{P} = \\sqrt{(121 + 2 \\cdot 79.3) \\times 10^{9} / 7850} = \\sqrt{279.6 \\times 10^{9} / 7850} \\approx \\sqrt{3.562 \\times 10^{7}} \\approx 5968 \\, \\mathrm{m}/\\mathrm{s}$. $c_{S} = \\sqrt{79.3 \\times 10^{9} / 7850} \\approx \\sqrt{1.010 \\times 10^{7}} \\approx 3178 \\, \\mathrm{m}/\\mathrm{s}$. Clearly $c_{P} > c_{S}$.

</details>

### Exercise 3
Show that for incompressible linear elasticity ($\\nabla \\cdot u = 0$), Navier's equations reduce to $\\rho u_{tt} = \\mu \\Delta u - \\nabla p + \\rho b$, where $p$ plays the role of a pressure Lagrange multiplier.

<details><summary>Hint 1</summary>

The incompressible constraint changes the constitutive model.

</details>

<details><summary>Hint 2</summary>

Introduce the independent pressure multiplier rather than discarding all spherical stress.

</details>

<details><summary>Full solution</summary>

**Solution.** With $\\nabla \\cdot u = 0$, the term $(\\lambda + \\mu)\\nabla(\\nabla \\cdot u)$ vanishes. However, the constitutive law must be modified because $\\mathrm{tr}(\\varepsilon) = 0$ and $\\lambda$ is indeterminate. We write $\\sigma = -p I + 2\\mu \\varepsilon$, where $p$ enforces the incompressibility constraint. Then $\\nabla \\cdot \\sigma = -\\nabla p + \\mu \\Delta u$, giving the result.

</details>

### Exercise 4

Prove the strain-energy positivity conditions using deviatoric and spherical strains.

<details><summary>Hint 1</summary>

The two strain parts are orthogonal.

</details>
<details><summary>Hint 2</summary>

Choose each part alone to prove necessity.

</details>
<details><summary>Full solution</summary>

Energy equals $\\mu|\\operatorname{dev}\\varepsilon|^2+(K/2)(\\operatorname{tr}\\varepsilon)^2$. It is strictly positive on every nonzero symmetric strain exactly when mu and K are positive. Since $3K=3\\lambda+2\\mu$, these are the stated conditions. Nonnegative rather than strictly positive coefficients can leave a strain kernel and need not give the same coercive theorem.

</details>

### Exercise 5

For lambda equal to minus half mu with positive mu, compute E, Poisson's ratio and K.

<details><summary>Hint 1</summary>

Use the three-dimensional isotropic conversion formulas.

</details>
<details><summary>Hint 2</summary>

The denominator lambda plus mu remains positive.

</details>
<details><summary>Full solution</summary>

The values are E equal to mu, Poisson's ratio minus one half, and K equal to mu divided by six. Both stability moduli are positive, so the negative transverse ratio describes a valid positive-energy auxetic model. Negative lambda alone is not the criterion for instability.

</details>

### Exercise 6

Prove the full-zero-boundary Korn estimate from the integrated symmetric-gradient identity.

<details><summary>Hint 1</summary>

The divergence-square term in that identity is nonnegative.

</details>
<details><summary>Hint 2</summary>

Use density to pass the smooth compact-support calculation to the energy space.

</details>
<details><summary>Full solution</summary>

The identity gives $\\|\\varepsilon(u)\\|_2^2\\ge\\|\\nabla u\\|_2^2/2$ for smooth compact fields. Approximation in the first-Sobolev norm preserves each term, giving the same bound on the zero-boundary space. Poincaré then controls the full norm. Without those boundary conditions the omitted boundary terms and rigid modes require a different Korn statement.

</details>

### Exercise 7

Derive the pure-traction force compatibility condition from a translation test and the moment condition from an infinitesimal rotation test.

<details><summary>Hint 1</summary>

Both tests have zero symmetric gradient.

</details>
<details><summary>Hint 2</summary>

The load functional must therefore vanish on all constant vectors and all skew-affine fields.

</details>
<details><summary>Full solution</summary>

The constant test leaves its dot product with total body plus boundary force, forcing that vector sum to zero. A rotation test is angular vector crossed with position; the load pairing becomes that angular vector dotted with total load moment, forcing the moment to vanish. On disconnected bodies these tests can be chosen independently on each component, giving separate compatibility conditions.

</details>

### Exercise 8

Find the effective in-plane Lamé coefficient for plane stress and explain why plane strain generally has nonzero third normal stress.

<details><summary>Hint 1</summary>

Solve the third normal stress equation for the third normal strain.

</details>
<details><summary>Hint 2</summary>

Plane strain fixes that strain instead of solving for it.

</details>
<details><summary>Full solution</summary>

Zero third stress gives $\\varepsilon_{33}=-\\lambda\\operatorname{tr}_2\\varepsilon/(\\lambda+2\\mu)$, leading to effective coefficient $2\\mu\\lambda/(\\lambda+2\\mu)$. Plane strain instead sets that strain to zero, so its third stress is $\\lambda\\operatorname{tr}_2\\varepsilon$. The reductions impose different physical constraints and should not be interchanged for the same geometry without justification.

</details>

### Exercise 9

Show that lambda equal to minus mu gives real positive isotropic plane-wave speeds but fails positive full strain energy.

<details><summary>Hint 1</summary>

Evaluate the two acoustic eigenvalues.

</details>
<details><summary>Hint 2</summary>

Evaluate K on a pure dilation separately.

</details>
<details><summary>Full solution</summary>

Both acoustic eigenvalues equal mu, positive when mu is positive. But $K=-\\mu/3$ is negative, so pure volumetric strain has negative energy. Thus the full positive-energy assumption is stronger than reality of these wave speeds. The example lies outside the book's stable isotropic elasticity hypothesis despite its real formal waves.

</details>

### Exercise 10

Explain how an inverse-square-root crack stress can have finite elastic energy yet prevent uniform stress convergence at the tip.

<details><summary>Hint 1</summary>

Square the stress scale and include the planar area factor.

</details>
<details><summary>Hint 2</summary>

An integrable singularity still has unbounded point values.

</details>
<details><summary>Full solution</summary>

Squared stress behaves like $1/r$, while polar area contributes r, making the near-tip radial energy integral finite. The stress itself diverges as r tends to zero, so a bounded polynomial approximation cannot converge uniformly to it at that point. Energy convergence remains meaningful; enriched or graded approximations can improve efficiency but the error norm and singular-domain theorem must be stated explicitly.

</details>
`;export{e as default};