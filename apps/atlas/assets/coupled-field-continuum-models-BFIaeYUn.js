var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: coupled-field-continuum-models
title: "Coupled Field--Continuum Models"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Coupled Field–Continuum Models

## Learning purpose

This chapter examines systems where electromagnetic, thermal, and mechanical fields interact. You will learn the induction equation of magnetohydrodynamics, the magnetic Reynolds number, and a systematic procedure for constructing thermodynamically consistent coupled models.

## Magnetohydrodynamics

In magnetohydrodynamics (MHD), a conducting fluid interacts with a magnetic field. A common nonrelativistic resistive model combines fluid equations with the induction equation. For constant magnetic diffusivity $\\eta_{m} = 1/(\\mu_{0} \\sigma_{c})$ and divergence-free magnetic field,

$$\\partial_{t} B = \\nabla \\times (v \\times B) + \\eta_{m} \\Delta B, \\qquad \\nabla \\cdot B = 0.$$

The Lorentz force density on the fluid is $J \\times B$. In the low-frequency approximation (neglecting displacement current), Ampère's law gives $J = (1/\\mu_{0}) \\nabla \\times B$, so the Lorentz force can be written as

$$f_{L} = \\frac{1}{\\mu_{0}} (\\nabla \\times B) \\times B = \\frac{1}{\\mu_{0}} \\bigl( (B \\cdot \\nabla) B - \\frac{1}{2} \\nabla |B|^{2} \\bigr).$$

This force appears as an additional body force in the momentum equation.

**Which terms are neglected?** The model above neglects displacement current ($\\partial_{t} E$ in Ampère's law), assumes charge neutrality, and uses SI factors with $\\mu_{0}$. These assumptions must be declared before mixing formulas from different sources.

## Magnetic Reynolds number

The magnetic Reynolds number

$$Rm = \\frac{U L}{\\eta_{m}} = \\mu_{0} \\sigma_{c} U L$$

compares magnetic field advection to magnetic diffusion. At large $Rm$, magnetic flux is approximately frozen into a sufficiently smooth ideal conducting flow. This is Alfvén's frozen-flux theorem. However, reconnection, resistivity, boundaries, and weak regularity limit the validity of that slogan. In ideal MHD ($\\eta_{m} = 0$), the induction equation becomes $\\partial_{t} B = \\nabla \\times (v \\times B)$, which transports field lines under the smooth invertible-flow and solenoidal hypotheses proved below.

## Energy exchange and the divergence-free constraint

In ideal MHD, kinetic, internal, and magnetic energies exchange. A discretisation that separately conserves fluid energy while allowing $\\nabla \\cdot B$ error to grow can generate unphysical forces. Constrained transport, divergence cleaning, or compatible finite elements target the magnetic constraint, but each has a different discrete claim. The choice of method depends on which conservation properties are most important for the application.

## Thermoelasticity and poroelasticity

Thermoelasticity couples deformation and temperature: thermal expansion enters stress, while deformation and heat conduction enter energy and entropy balances. The coupling terms must exchange equal and opposite power so the combined first law closes.

Poroelasticity couples solid deformation with pore-fluid flow. The Biot equations combine linear elasticity with Darcy's law for fluid flow through the pore network. Electroelastic and magnetoelastic materials add field-dependent energy terms to the constitutive law.

## Systematic construction of coupled models

A safe coupled-model construction follows this order:

1. Choose the combined state and reference/spatial descriptions.
2. Write total mass, momentum, energy, charge, or species balances.
3. Identify constraints such as $\\nabla \\cdot B = 0$ or incompressibility.
4. Propose a joint free energy and dissipation potential where appropriate.
5. Derive constitutive forces and fluxes with units and objectivity.
6. State interface conditions so flux leaving one subsystem enters the other.
7. Examine a decoupled limit and derive a total-energy identity.

This is where mathematical physics earns its name: different field theories meet through shared balance, but their closures cannot be spliced by notation alone.

## The induction equation follows from a declared Ohm law

Use the low-speed quasineutral approximation and neglect displacement current. A scalar local conductivity gives $J=\\sigma_c(E+v\\times B)$, while reduced Ampère gives $J=\\operatorname{curl}B/\\mu_0$. Solve for E and insert it into Faraday. The result is

$$B_t=\\operatorname{curl}(v\\times B)
-\\operatorname{curl}(\\eta_m\\operatorname{curl}B).$$

This curl form remains the appropriate expression for a spatially varying magnetic diffusivity. Only for constant diffusivity and zero magnetic divergence does it reduce to the Laplacian form in the opening. Dropping derivatives of a variable coefficient changes the induction equation, just as it did for viscosity and thermal conduction.

Taking divergence of the curl form gives zero time derivative of magnetic divergence. Thus initially solenoidal data retain that constraint in the smooth continuous model. The identity does not correct nonzero initial divergence. A numerical formulation can also need an explicit compatible discrete curl/divergence pair; a continuous differential cancellation alone does not prove its stored arrays satisfy the same relation.

The reduced Lorentz force uses total conduction current under the quasineutral model. Adding full Maxwell displacement terms later without revisiting the field momentum and energy split would mix approximations. Every retained or discarded electrical mechanism must be represented consistently in all the balances, rather than only in induction.

## Frozen flux has a precise smooth theorem

Assume an invertible smooth material motion with positive Jacobian, a smooth solenoidal magnetic field and ideal induction. Expand the curl product using zero magnetic divergence. The material magnetic derivative is $DB/Dt=(\\nabla v)B-B\\operatorname{div}v$. Combine that with $\\dot F=(\\nabla v)F$ and $\\dot J=J\\operatorname{div}v$.

Differentiating $JF^{-1}B\\circ\\chi$ makes all three terms cancel, so it equals the initial magnetic vector at the material label. Consequently the ideal Cauchy formula is $B\\circ\\chi=FB_0/J$. Nanson's relation transforms magnetic surface flux into the reference integral of that constant pulled-back vector. Flux through every such material surface is therefore conserved.

The proof states what field-line transport means. A reference curve tangent to a nonzero initial B maps to a current curve tangent to F times that vector, which is J times the current B. Positive J preserves orientation. This assertion needs the smooth one-to-one flow and nonzero tangent fields. Resistivity, singularities, reconnection regions or weak regularity can invalidate that line mapping; a large finite magnetic Reynolds number alone is not an exact topology theorem.

### Example 17.1: uniform stretching changes magnetic strength

For a volume-preserving diagonal motion with factors $e^{at},e^{-at},1$, the ideal formula multiplies the first magnetic component by $e^{at}$ and the second by $e^{-at}$. A field initially along the stretched direction grows in magnitude despite constant material volume. Its flux through a material surface perpendicular to that direction stays constant because the corresponding area shrinks reciprocally.

Thus frozen flux does not mean constant magnetic magnitude at every particle. It links the vector to the full deformation, including directional stretch. The increased magnetic energy must be supplied through mechanical work in the coupled momentum equation. Prescribing the velocity without including that work describes an externally driven kinematic induction model instead.

## Kinetic and magnetic work cancel in a total identity

Consider smooth incompressible constant-density resistive MHD on a periodic domain with constant coefficients. Multiply momentum by velocity and induction by magnetic field divided by permeability. Periodicity removes the surface terms. The induction transport contribution becomes minus the Lorentz power by the scalar triple-product identity and integration by parts for curl.

Adding the two equations gives

$$\\frac d{dt}\\int\\left(\\frac{\\rho|v|^2}{2}+
\\frac{|B|^2}{2\\mu_0}\\right)
=-\\int2\\mu D:D-\\frac{\\eta_m}{\\mu_0}\\int|\\operatorname{curl}B|^2
+\\int\\rho b\\cdot v.$$

The two dissipations are nonnegative under the coefficient restrictions. If thermal energy is included in an isolated model, these losses appear as heat generation rather than disappearance of total energy. In an isothermal model a reservoir can remove that heat. Those two thermal protocols have different total-storage statements.

The derivation is a smooth energy identity, not a global smooth existence theorem for arbitrary three-dimensional data. Nonperiodic boundaries add mechanical and electromagnetic fluxes, which must be matched at the interface. Also, rewriting Lorentz force as divergence of magnetic stress uses the divergence constraint: otherwise an extra term proportional to B times its divergence appears. Ignoring that difference can turn a constraint error into an artificial force.

### Example 17.2: an Alfvén mode exchanges two energies

Linearise about rest with a constant magnetic field along the x direction, and take transverse velocity w and magnetic perturbation b depending only on x. In the ideal limit their equations are $\\rho w_t=(B_0/\\mu_0)b_x$ and $b_t=B_0w_x$. Eliminating b gives a wave equation with speed $|B_0|/\\sqrt{\\mu_0\\rho}$.

Kinetic and magnetic perturbation energies exchange, while their sum is conserved in the periodic ideal case. The characteristic combinations are velocity plus or minus magnetic perturbation divided by the square root of permeability times density. Their opposite propagation directions show that magnetic tension can support waves even in an incompressible fluid with no ordinary compressional acoustic mode.

Adding viscosity and magnetic diffusion damps these linear combinations through their coupled diffusion terms. Unequal diffusivities need not leave each ideal characteristic combination independently decoupled. The ideal wave speed is a model prediction under the stated linearisation and constant base field, not a universal propagation speed in arbitrary inhomogeneous MHD.

## Thermoelastic coupling fixes both cross coefficients

In a linear small-strain perturbation model about positive temperature $T_0$, let thermal deviation be theta, elastic tensor C be positive and volumetric heat capacity c be positive. A thermal stress coefficient beta gives $\\sigma=C\\varepsilon-\\beta\\theta I$. The corresponding linearised heat equation includes $\\beta T_0\\operatorname{div}u_t$, so its form is $c\\theta_t+\\beta T_0\\operatorname{div}u_t-k\\Delta\\theta=r$.

Multiply momentum by displacement velocity and heat by theta divided by $T_0$, using homogeneous displacement and insulating or periodic thermal boundaries. Mechanical energy gains the term beta times theta times divergence of displacement velocity, while the thermal quadratic perturbation energy loses exactly that term. The sum has derivative equal to external mechanical/thermal perturbation work minus $k/T_0$ times squared temperature-gradient norm.

The positive perturbation energy is kinetic plus elastic energy plus $c\\theta^2/(2T_0)$. It is a linearised stability quantity, not a claim that absolute internal energy is this simple quadratic expression. A consistent local free-energy expansion supplies the stress and entropy coefficients. Choosing the two coupling coefficients independently would generally leave an unbalanced cross power and break that thermodynamic structure.

### Example 17.3: constrained and free thermal expansion

Under a spatially uniform temperature deviation, a homogeneous isotropic body held at zero strain develops stress $-\\beta\\theta I$. A freely expanding body can instead take spherical strain with trace $\\beta\\theta/K$, giving zero stress in this linear model. Its three equal normal strains are one third that trace.

The same material coefficient therefore produces either stress or deformation depending on the boundary constraint. Neither outcome is determined by temperature alone. If the body is dynamically heated, the heat equation's coupling term accounts for the mechanical work associated with changing strain; omitting it while keeping thermal stress would not retain the same perturbation-energy balance.

## Poroelasticity has a joint storage variable

Let zeta denote fluid content per reference volume in a small-strain porous solid. A simple joint energy is elastic energy plus $M(\\zeta-\\alpha\\operatorname{tr}\\varepsilon)^2/2$, with positive storage modulus M and a coupling coefficient alpha. Differentiation gives pore pressure $p=M(\\zeta-\\alpha\\operatorname{tr}\\varepsilon)$ and stress $C\\varepsilon-\\alpha pI$.

Take a Darcy content flux q equal to minus a positive-semidefinite mobility matrix times pressure gradient, and content balance $\\zeta_t+\\operatorname{div}q=s$. Differentiate the joint energy: its two terms pair with strain rate and content rate. Quasistatic mechanical equilibrium converts the first into mechanical load power, while integrating the content term by parts gives pressure-supply power and outward pressure/flux work minus the mobility quadratic form.

This proves nonnegative Darcy dissipation and equal cross coupling from one joint energy. The flux is defined in fluid-content units here; a mass-flux formulation needs the corresponding density factors. Dynamic inertia, nonlinear porosity and multiple fluid phases add variables and cannot be inserted without updating storage and power conventions.

### Example 17.4: undrained response is stiffer than drained response

For a uniform volumetric strain, drained pressure zero lets fluid content change to alpha times the strain trace, leaving the drained elastic bulk modulus K. Under an undrained zero-content-change condition, pressure is minus M alpha times that trace. Stress therefore has an extra positive spherical stiffness $\\alpha^2M$, giving undrained bulk modulus $K+\\alpha^2M$.

The distinction comes from which variable can relax. It is not a different elastic tensor assigned to the same unconstrained state. A finite-time experiment can lie between these limiting protocols because Darcy transport takes time; a coupled boundary-value problem determines that intermediate response.

## Interfaces must transmit the same work on both sides

When two subsystems share an interface, equal-and-opposite forces and compatible velocities make their mechanical power cancel in a combined balance. Electrical or fluid-content transfer similarly needs matching flux and effort variables. An interfacial resistance produces its own nonnegative dissipation; an interface with storage retains an additional time rate. Setting all jumps to zero without stating the interface model can omit either mechanism.

This is why adding a body force to momentum is insufficient to define a coupled model. The corresponding energy exchange, constitutive state, boundary flux and constraint must also appear. A decoupled limit can help reveal an inconsistency, but matching that limit does not alone prove the full model exists, is stable or is calibrated for a particular material.

## Summary and connections

This chapter introduced MHD, the magnetic Reynolds number, and the systematic construction of coupled models. The key principle is that coupling terms must exchange equal and opposite power for the combined first law to close.

In the previous chapter, *Electromagnetic Field Balance*, we established Maxwell's equations and the Poynting theorem. In the next chapter, *PDE Classification, Boundary Data, and Weak Forms*, we turn to the mathematical structure of the equations governing all these coupled systems.

## Exercises

### Exercise 1
For smooth solenoidal ideal MHD ($\\eta_{m}=0$) and a smooth invertible material flow, show that magnetic flux through every transported material surface is constant.

<details><summary>Hint 1</summary>

Pull material surface flux back using Nanson and the smooth ideal Cauchy formula.

</details>

<details><summary>Hint 2</summary>

The reference vector J times inverse deformation times B is constant when magnetic divergence vanishes.

</details>

<details><summary>Full solution</summary>

**Solution.** For a material surface $S(t)$ with boundary curve $C(t)$, the flux is $\\Phi = \\int_{S(t)} B \\cdot n \\, \\mathrm{d}a$. By the transport theorem for surfaces and the induction equation with $\\eta_{m} = 0$:

$$\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = \\int_{S} \\bigl( \\partial_{t} B + \\nabla \\times (B \\times v) \\bigr) \\cdot n \\, \\mathrm{d}a = \\int_{S} \\nabla \\times (v \\times B + B \\times v) \\cdot n \\, \\mathrm{d}a = 0.$$

</details>

### Exercise 2
Estimate the magnetic Reynolds number for liquid mercury ($\\sigma_{c} \\approx 1.04 \\times 10^{6} \\, \\mathrm{S}/\\mathrm{m}$) flowing at $U = 1 \\, \\mathrm{m}/\\mathrm{s}$ in a channel of width $L = 0.1 \\, \\mathrm{m}$.

<details><summary>Hint 1</summary>

Use the declared SI permeability, conductivity, speed and length.

</details>

<details><summary>Hint 2</summary>

Compare induction transport and resistive diffusion on those same scales.

</details>

<details><summary>Full solution</summary>

**Solution.** $Rm = \\mu_{0} \\sigma_{c} U L = (4\\pi \\times 10^{-7}) \\cdot (1.04 \\times 10^{6}) \\cdot 1 \\cdot 0.1 \\approx 0.13$. Since $Rm < 1$, magnetic diffusion dominates over advection; the frozen-flux approximation is not valid.

</details>

### Exercise 3
For a thermoelastic solid with free energy $\\psi(\\varepsilon, T)$, derive the stress and entropy from $\\sigma = \\rho \\partial \\psi / \\partial \\varepsilon$ and $\\eta = -\\partial \\psi / \\partial T$. Show that the Clausius–Duhem inequality is satisfied if the heat flux obeys Fourier's law with $k \\ge 0$.

<details><summary>Hint 1</summary>

Expand the specific free-energy derivative with consistent constant-density small-strain units.

</details>

<details><summary>Hint 2</summary>

Mechanical and temperature-rate terms cancel, leaving the conductive quadratic sign.

</details>

<details><summary>Full solution</summary>

**Solution.** From $\\psi = \\psi(\\varepsilon, T)$, the chain rule gives $\\dot{\\psi} = (\\partial \\psi / \\partial \\varepsilon) : \\dot{\\varepsilon} + (\\partial \\psi / \\partial T) \\dot{T} = (\\sigma/\\rho) : D - \\eta \\dot{T}$. The reduced dissipation inequality becomes $\\rho(\\dot{\\psi} + \\eta \\dot{T}) - \\sigma : D + q \\cdot \\nabla T / T = q \\cdot \\nabla T / T = -k |\\nabla T|^{2}/T \\le 0$, which is satisfied for $k \\ge 0$.

</details>

### Exercise 4

Derive induction with spatially varying magnetic diffusivity and identify the term absent from a constant-coefficient Laplacian formula.

<details><summary>Hint 1</summary>

Keep the coefficient inside the resistive curl.

</details>
<details><summary>Hint 2</summary>

Expand curl of a scalar times a vector only after writing the full expression.

</details>
<details><summary>Full solution</summary>

Induction is $B_t=\\operatorname{curl}(v\\times B)-\\operatorname{curl}(\\eta_m\\operatorname{curl}B)$. With zero magnetic divergence, its resistive part is $\\eta_m\\Delta B-\\nabla\\eta_m\\times\\operatorname{curl}B$. Dropping the coefficient-gradient term changes the model. The curl form also makes propagation of the divergence constraint immediate.

</details>

### Exercise 5

For the ideal volume-preserving exponential stretch, find the magnetic field from an initial vector along the first coordinate.

<details><summary>Hint 1</summary>

Use the ideal Cauchy formula and the determinant one.

</details>
<details><summary>Hint 2</summary>

The first material direction stretches exponentially while its normal area contracts.

</details>
<details><summary>Full solution</summary>

The field is its initial magnitude times $e^{at}$ in the first spatial direction. The normal material area factor is $e^{-at}$, so their product and hence flux are unchanged. Frozen flux preserves this product, not the magnetic magnitude alone. Smooth invertible ideal-flow hypotheses are essential to that formula.

</details>

### Exercise 6

Show the cancellation of kinetic and magnetic Lorentz power on a periodic domain.

<details><summary>Hint 1</summary>

Integrate the induction curl term against B divided by permeability.

</details>
<details><summary>Hint 2</summary>

The triple product reverses the sign of velocity dotted with current crossed with B.

</details>
<details><summary>Full solution</summary>

The magnetic contribution is $\\mu_0^{-1}\\int(v\\times B)\\cdot\\operatorname{curl}B=-\\int v\\cdot(J\\times B)$. This cancels the positive mechanical Lorentz power. Viscous and resistive terms remain nonpositive, while boundary fluxes vanish under periodic conditions. The cancellation is an energy identity for smooth solutions, not a global regularity theorem.

</details>

### Exercise 7

Derive the Alfvén wave speed from the transverse linearised equations.

<details><summary>Hint 1</summary>

Differentiate the velocity equation in time.

</details>
<details><summary>Hint 2</summary>

Use induction to replace the magnetic time derivative.

</details>
<details><summary>Full solution</summary>

The result is $w_{tt}=B_0^2w_{xx}/(\\mu_0\\rho)$, so the positive speed is $|B_0|/\\sqrt{\\mu_0\\rho}$. Both ideal constant-base equations are needed; adding dissipation or spatial variation changes the mode problem. The wave exchanges kinetic and magnetic perturbation energy.

</details>

### Exercise 8

Explain why thermal stress coefficient beta requires the heat coupling coefficient beta times reference absolute temperature in the linear perturbation model.

<details><summary>Hint 1</summary>

Multiply momentum by displacement velocity and heat by temperature deviation divided by the reference temperature.

</details>
<details><summary>Hint 2</summary>

The two cross powers must cancel in the positive perturbation-energy identity.

</details>
<details><summary>Full solution</summary>

Mechanical energy gains $\\beta\\int\\theta\\operatorname{div}u_t$. The heat equation with coefficient $\\beta T_0$, multiplied by $\\theta/T_0$, contributes its negative. Independent coefficients generally leave a residual cross term. The match comes from a common thermodynamic expansion and a stated temperature normalisation.

</details>

### Exercise 9

Derive pore pressure and stress from the stated joint poroelastic energy and obtain undrained bulk stiffness.

<details><summary>Hint 1</summary>

Differentiate separately with respect to fluid content and strain.

</details>
<details><summary>Hint 2</summary>

Set fluid-content change to zero for the undrained uniform response.

</details>
<details><summary>Full solution</summary>

Pressure is $M(\\zeta-\\alpha\\operatorname{tr}\\varepsilon)$ and stress $C\\varepsilon-\\alpha pI$. With zeta zero, the added spherical stiffness is $\\alpha^2M$, so undrained K is drained K plus that positive amount. Drained p zero permits the content variable to relax and leaves the original elastic stiffness.

</details>

### Exercise 10

Prove nonnegative Darcy dissipation for flux minus a positive-semidefinite mobility times pressure gradient.

<details><summary>Hint 1</summary>

Pair the content balance with pore pressure.

</details>
<details><summary>Hint 2</summary>

Integration by parts leaves pressure-gradient dotted with flux in the storage rate.

</details>
<details><summary>Full solution</summary>

The internal storage contribution is $\\int\\nabla p\\cdot q=-\\int(\\nabla p)^T\\mathsf K\\nabla p\\le0$. Boundary pressure/flux work and volume supply remain separately. The corresponding nonnegative dissipation is its negative. This conclusion requires the declared fluid-content units; a mass-flux model needs its density factors carried consistently.

</details>
`;export{e as default};