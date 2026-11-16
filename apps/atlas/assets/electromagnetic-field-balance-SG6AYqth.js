var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: electromagnetic-field-balance
title: "Electromagnetic Field Balance"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Electromagnetic Field Balance

## Learning purpose

This chapter reviews Maxwell's equations, derives the Poynting theorem for electromagnetic energy balance, and establishes jump conditions at interfaces. You will learn to track energy exchange between fields and matter and to state interface conditions precisely.

## Maxwell's equations in vacuum

In SI units, Maxwell's equations are

$$\\nabla \\cdot E = \\frac{\\rho_{e}}{\\varepsilon_{0}}, \\qquad \\nabla \\times E = -\\frac{\\partial B}{\\partial t},$$
$$\\nabla \\cdot B = 0, \\qquad \\nabla \\times B = \\mu_{0} J + \\mu_{0} \\varepsilon_{0} \\frac{\\partial E}{\\partial t},$$

where $E$ is the electric field, $B$ is the magnetic field, $\\rho_{e}$ is the charge density, $J$ is the current density, $\\varepsilon_{0}$ is the vacuum permittivity, and $\\mu_{0}$ is the vacuum permeability. The speed of light in vacuum is $c = 1/\\sqrt{\\mu_{0} \\varepsilon_{0}}$.

## Poynting theorem

To derive the energy balance, dot Ampère--Maxwell with $E/\\mu_{0}$ and dot Faraday with $B/\\mu_{0}$:

$$\\frac{E}{\\mu_{0}} \\cdot (\\nabla \\times B) = E \\cdot J + \\varepsilon_{0} E \\cdot \\frac{\\partial E}{\\partial t},$$
$$\\frac{B}{\\mu_{0}} \\cdot (\\nabla \\times E) = -\\frac{B}{\\mu_{0}} \\cdot \\frac{\\partial B}{\\partial t}.$$

Combine the two equations and use the vector identity $\\nabla \\cdot (E \\times B) = B \\cdot (\\nabla \\times E) - E \\cdot (\\nabla \\times B)$:

$$-\\nabla \\cdot \\left( \\frac{1}{\\mu_{0}} E \\times B \\right) = E \\cdot J + \\frac{\\partial}{\\partial t}\\left( \\frac{\\varepsilon_{0} |E|^{2}}{2} + \\frac{|B|^{2}}{2\\mu_{0}} \\right).$$

Rearranging gives the Poynting theorem:

$$\\frac{\\partial u_{EM}}{\\partial t} + \\nabla \\cdot S = -J \\cdot E,$$

where

$$u_{EM} = \\frac{1}{2}\\left( \\varepsilon_{0} |E|^{2} + \\frac{|B|^{2}}{\\mu_{0}} \\right)$$

is the electromagnetic energy density and

$$S = \\frac{1}{\\mu_{0}} E \\times B$$

is the Poynting vector (energy flux).

The term $-J \\cdot E$ represents work done by the field on matter. When $J \\cdot E > 0$, electromagnetic energy is converted to mechanical or thermal energy in the material. Field energy alone is not conserved when charges exchange energy with the field.

## Perfectly conducting cavity

In a source-free perfectly conducting cavity, the boundary condition $n \\times E = 0$ says that $E$ has no tangential component at the wall. Therefore $S \\cdot n=(E\\times B)\\cdot n/\\mu_0=(n\\times E)\\cdot B/\\mu_0=0$. With $J = 0$ inside, the Poynting theorem reduces to

$$\\frac{\\partial}{\\partial t} \\int_{V} u_{EM} \\, \\mathrm{d}v = 0,$$

so total electromagnetic energy is conserved.

## Resistive dissipation

For a conductor with Ohm's law $J = \\sigma_{c} E$, where $\\sigma_{c}$ is the electrical conductivity, the work term becomes

$$J \\cdot E = \\sigma_{c} |E|^{2} \\ge 0.$$

This is always nonnegative, representing irreversible conversion of field energy to Joule heating.

## Jump conditions at interfaces

For stationary interfaces under the source conventions below, integral Maxwell equations give jump conditions. In the absence of surface charge, normal $D = \\varepsilon_{0} E$ is continuous; without surface current, tangential $H = B/\\mu_{0}$ is continuous under macroscopic conventions. Tangential $E$ and normal $B$ are also continuous. The precise form depends on whether free or bound sources are used and on the constitutive relations in each region.

**Common error.** Mixing conventions for free versus bound charges, or forgetting that $D$ and $H$ include material polarisation and magnetisation. Always state the convention before writing jump conditions.

## Charge conservation is a compatibility condition

Take divergence of Ampère–Maxwell and use that the divergence of a curl vanishes. Gauss's law converts the time derivative of electric divergence into the charge derivative, giving $\\partial_t\\rho_e+\\operatorname{div}J=0$. Thus charge and current cannot be prescribed independently. If their continuity equation fails, the full Maxwell system has inconsistent sources.

Conversely, Faraday's law preserves a zero magnetic divergence initially, and Ampère–Maxwell together with source continuity preserves Gauss's electric constraint initially. These are constraint-propagation identities under the required smoothness. They do not create initial data satisfying the constraints; those must be imposed. Boundary conditions must also match the source and flux problem.

The current here is total electric current in the vacuum-field convention, not mass current and not necessarily the material velocity times charge density alone. Conduction adds relative charge transport. The symbol J is distinct from the deformation Jacobian elsewhere in this book, so its meaning must be fixed locally before combining the equations.

## Poynting balance is a local exchange, not only a global total

The displayed energy derivation assumes classical fields and constant vacuum coefficients. Its integral over a fixed region has electromagnetic storage rate plus outward Poynting flux equal to minus volume electrical work. At an open boundary, incoming field energy can maintain a stationary dissipative material even when the field storage rate is zero. A zero storage derivative does not imply zero energy transfer.

The sign of $J\\cdot E$ can be either positive or negative for a general coupled source. Positive means the field transfers energy to matter; negative means matter supplies the field. A prescribed source can act as a generator, so the nonnegative Joule conclusion needs the separate passive Ohm closure and its nonnegative conductivity. It does not follow for every current allowed by Maxwell's equations.

For linear nondispersive matter with constant positive scalar permittivity and permeability, a similar derivation gives quadratic field storage and flux $E\\times H$ under the matching free-source convention. Dispersive or nonlinear material response generally needs additional material storage variables and work terms. Simply replacing the vacuum constants by arbitrary frequency-dependent functions inside the instantaneous energy formula would not prove the same balance.

The [electromagnetism primary](../electromagnetism-relativity/maxwell-conservation.md) develops the wider field theory. Here the emphasis is the exact work and momentum exchange needed when fields are coupled to a continuum. It is especially important to keep the vacuum total-source convention separate from a macroscopic polarisation/magnetisation split.

### Example 16.1: energy enters a resistor through its side

Take a long cylindrical stationary Ohmic wire of radius a, conductivity positive and constant, carrying steady current I uniformly across its section. Its axial electric field is $E_z=I/(\\sigma_c\\pi a^2)$. Inside the wire the azimuthal magnetic field is $B_\\theta=\\mu_0Ir/(2\\pi a^2)$ in the steady idealisation. The Poynting vector points radially inward, since the axial unit vector crossed with the azimuthal one points inward.

At the surface, its inward power per unit length is $2\\pi a E_z B_\\theta(a)/\\mu_0=E_zI$. The integrated Joule heat per unit length is $\\sigma_c E_z^2\\pi a^2$, the same value $I^2/(\\sigma_c\\pi a^2)$. The field storage is steady, but an inward electromagnetic flux continuously feeds thermal conversion.

This exact local balance explains a circuit power without assigning energy transport solely to the drift of charge carriers. Contacts and the external return path determine the complete field arrangement; the long-wire model neglects their local corrections. Its conclusion is the side-flux accounting within that declared cylindrical segment, not a universal field pattern around every circuit.

## Maxwell stress supplies the field's momentum transfer

In the vacuum total-source convention define the symmetric field stress

$$\\mathsf T=\\varepsilon_0\\left(E\\otimes E-\\frac{|E|^2}{2}I\\right)
+\\frac1{\\mu_0}\\left(B\\otimes B-\\frac{|B|^2}{2}I\\right),$$

and field momentum density $g=\\varepsilon_0E\\times B=S/c^2$. The tensor divergence identity for a vector a is $\\operatorname{div}(a\\otimes a-|a|^2I/2)=(\\operatorname{div}a)a-a\\times\\operatorname{curl}a$. It follows by expanding one component and using the gradient-of-square identity.

Apply it to E and B and substitute the four Maxwell equations. The electric part gives charge force plus $\\varepsilon_0E\\times B_t$. The magnetic part gives $J\\times B+\\varepsilon_0E_t\\times B$. Their sum is the Lorentz force density plus the time derivative of g. Therefore

$$\\partial_tg=\\operatorname{div}\\mathsf T-(\\rho_eE+J\\times B).$$

The material Lorentz force is consequently the stress-divergence transfer minus field momentum storage. Integrating over a fixed region gives surface Maxwell traction minus momentum-storage rate as the total force on its charges and currents. This is the momentum counterpart of Poynting exchange. The momentum flux tensor is minus this stress under the displayed conservation convention; overlooking that sign can reverse a radiation-pressure conclusion.

### Example 16.2: radiation pressure follows momentum flux

For a plane wave propagating normally towards a surface, electric and magnetic vectors are transverse and its energy flux is c times its energy density. Its forward momentum flux is therefore intensity divided by c. A perfectly absorbing surface receives that momentum with no reflected outgoing beam, giving mean normal pressure intensity divided by c.

A perfectly reflecting stationary surface reverses the beam momentum, so the momentum change is twice as large and the pressure is twice intensity divided by c. These formulas assume normal incidence and the stated ideal optical boundary. Transmission, oblique incidence or surface motion changes the momentum balance and requires the corresponding outgoing fields. The pressure is a force-per-area consequence of the field flux, not an extra constitutive stress inserted without accounting for reflection.

## Electrostatic energy requires its electrical boundary control

### Example 16.3: attraction of capacitor plates

For large parallel plates with uniform gap field and fixed opposite charges, the field magnitude is the surface charge density divided by vacuum permittivity. Its energy per plate area is half permittivity times squared field times gap. Increasing the gap increases stored energy; the corresponding mechanical force opposes that increase, giving attractive pressure $\\varepsilon_0E^2/2$.

At fixed voltage, field energy instead decreases when the gap increases, which might appear to reverse the force if one differentiates that stored energy alone. The voltage source also exchanges charge and work. For capacitance $\\varepsilon_0A/d$, battery work during a displacement is voltage times the charge change, while the field-energy change is half that amount at fixed voltage. Subtracting storage change from source work gives mechanical work corresponding to the same attractive pressure $\\varepsilon_0V^2/(2d^2)$.

Thus the force calculation must state whether charge or voltage is controlled and include the source when necessary. The continuum mechanical boundary condition is not inferred from a field-energy derivative while ignoring the external apparatus that enforces that electrical constraint. Fringing fields and dielectric deformation add further model terms beyond the parallel-plate idealisation.

## Moving conduction separates mechanical work from heat

In a nonrelativistic conducting continuum, split total current as $J=\\rho_ev+j$, with j the conduction current relative to material velocity. The Lorentz force also includes $\\rho_e v\\times B$, but that convective magnetic term has zero work against v. Its mechanical power is therefore $v\\cdot(\\rho_eE+j\\times B)$. Compare it with electrical field work $J\\cdot E$.

The scalar triple-product identity gives their difference as $j\\cdot(E+v\\times B)$. Under the low-speed moving Ohm law $j=\\sigma_c(E+v\\times B)$ with nonnegative scalar conductivity, this difference is nonnegative and becomes Joule heat. The other part is mechanical Lorentz power. This calculation specifies the split that a coupled mechanical and thermal model must preserve.

The moving Ohm law is an additional material approximation, valid under its low-speed and local conduction assumptions. A relativistic transformation or a dispersive material law needs its corresponding current relation. Its energy consequence cannot be derived by treating the conduction current as identical to total current while the material moves.

## Stationary interface conditions follow from pillboxes and loops

For a fixed smooth interface with common normal pointing from the minus side to the plus side, Gauss pillboxes give normal magnetic continuity and electric-displacement jump equal to free surface charge in the macroscopic convention. Shrinking Faraday and Ampère loops give tangential electric continuity and magnetic-intensity jump equal to free surface current. These statements assume no singular time-changing magnetic flux or additional surface constitutive layer in that idealisation.

In vacuum with total surface sources, use vacuum permittivity times E and B divided by vacuum permeability in those formulas. In matter, D and H incorporate the chosen polarisation and magnetisation convention. Mixing vacuum total charge with a macroscopic free-charge jump counts some sources twice or omits them. The interface normal and right-minus-left bracket must also be kept consistent.

A moving discontinuity introduces transport terms in the distributional curl equations. The stationary loop result is therefore not a universal moving-interface formula. Likewise a sheet carrying surface energy or momentum can have its own storage and tangential transport. The coupled-field chapter declares which interfaces and material terms its particular continuum approximation retains.

## Balance laws do not finish a coupled model

Combining electromagnetic and matter energy removes the internal electrical exchange when both use the same current and work convention. Combining their momenta removes the Lorentz force exchange. Heat transfer, mechanical boundary work and external source power remain. This cancellation is a consistency requirement for a closed coupled model, not an independent proof that the resulting nonlinear PDE is well posed.

Material constitutive equations, initial constraints, boundary data and the validity of quasistatic or low-speed reductions must still be supplied. Field energy and continuum strain energy have different storage mechanisms even when they share an integral balance. Keeping those mechanisms explicit prevents double-counting a Maxwell traction together with an already included volume-force representation without the matching region convention.

## Summary and connections

This chapter derived the Poynting theorem from Maxwell's equations, examined energy conservation in cavities and resistive media, and stated interface jump conditions.

Earlier fluid chapters developed the mechanical balance and reduction hypotheses used when fields exchange force and work with matter. In the next chapter, *Coupled Field–Continuum Models*, we combine electromagnetic and continuum mechanical balances to describe conducting fluids and deformable media in electromagnetic fields.

## Exercises

### Exercise 1
In a plane electromagnetic wave in vacuum, $E = E_{0} \\cos(k x - \\omega t) \\hat{y}$ and $B = (E_{0}/c) \\cos(k x - \\omega t) \\hat{z}$. Compute the Poynting vector and the time-averaged energy flux.

<details><summary>Hint 1</summary>

Use the declared right-handed electric and magnetic directions.

</details>

<details><summary>Hint 2</summary>

Average the squared cosine over a full period.

</details>

<details><summary>Full solution</summary>

**Solution.** $S = (1/\\mu_{0}) E \\times B = (E_{0}^{2}/\\mu_{0} c) \\cos^{2}(k x - \\omega t) \\hat{x}$. The time average of $\\cos^{2}$ over one period is $1/2$, so $\\langle S \\rangle = (E_{0}^{2}/2\\mu_{0} c) \\hat{x}$. Using $c = 1/\\sqrt{\\mu_{0} \\varepsilon_{0}}$, this is also $\\langle S \\rangle = \\frac{1}{2} \\varepsilon_{0} c E_{0}^{2} \\hat{x}$.

</details>

### Exercise 2
A coaxial cable has inner radius $a$, outer radius $b$, and carries current $I$. The electric field is radial and the magnetic field is azimuthal. Show that the power transmitted is $P = V I$, where $V$ is the potential difference.

<details><summary>Hint 1</summary>

Insert the cylindrical radial electric and azimuthal magnetic fields.

</details>

<details><summary>Hint 2</summary>

Integrate the axial flux over the annular area, retaining its radial measure.

</details>

<details><summary>Full solution</summary>

**Solution.** For $a < r < b$, $E = V/(r \\ln(b/a)) \\hat{r}$ and $B = \\mu_{0} I/(2\\pi r) \\hat{\\theta}$. The Poynting vector is $S = (V I)/(2\\pi r^{2} \\ln(b/a)) \\hat{z}$. Integrating over the annular cross section: $P = \\int_{a}^{b} S \\cdot 2\\pi r \\, \\mathrm{d}r = V I$.

</details>

### Exercise 3
Verify that for a source-free region ($\\rho_{e} = 0$, $J = 0$), Maxwell's equations imply the wave equations $\\partial_{tt} E - c^{2} \\Delta E = 0$ and $\\partial_{tt} B - c^{2} \\Delta B = 0$.

<details><summary>Hint 1</summary>

Take curl and use the source-free divergence constraints.

</details>

<details><summary>Hint 2</summary>

The double-curl identity changes the spatial operator into minus the Laplacian.

</details>

<details><summary>Full solution</summary>

**Solution.** Take the curl of Faraday's law: $\\nabla \\times (\\nabla \\times E) = -\\partial_{t} (\\nabla \\times B) = -\\mu_{0} \\varepsilon_{0} \\partial_{tt} E$. Using $\\nabla \\times (\\nabla \\times E) = \\nabla(\\nabla \\cdot E) - \\Delta E = -\\Delta E$ (since $\\nabla \\cdot E = 0$), we get $\\Delta E = \\mu_{0} \\varepsilon_{0} \\partial_{tt} E$, or $\\partial_{tt} E - c^{2} \\Delta E = 0$. The same derivation applies to $B$.

</details>

### Exercise 4

Derive charge continuity from Ampère–Maxwell and Gauss's electric law.

<details><summary>Hint 1</summary>

Take a divergence and use the vanishing divergence of a curl.

</details>
<details><summary>Hint 2</summary>

Replace electric divergence by charge divided by permittivity.

</details>
<details><summary>Full solution</summary>

The equation becomes $0=\\mu_0\\operatorname{div}J+\\mu_0\\partial_t\\rho_e$, hence $\\partial_t\\rho_e+\\operatorname{div}J=0$. Inconsistent prescribed charge and current cannot satisfy the full Maxwell system. Propagation of Gauss's constraint also requires it to hold initially.

</details>

### Exercise 5

For a stationary Ohmic cylindrical wire, show that inward surface Poynting power per unit length equals integrated Joule heating.

<details><summary>Hint 1</summary>

Use the axial electric field and azimuthal magnetic field at the wire radius.

</details>
<details><summary>Hint 2</summary>

The inward flux is electric field times magnetic field divided by permeability times the circumference.

</details>
<details><summary>Full solution</summary>

The result is $2\\pi a E_z[\\mu_0I/(2\\pi a)]/\\mu_0=E_zI$. Since $E_z=I/(\\sigma_c\\pi a^2)$, this is $I^2/(\\sigma_c\\pi a^2)$, equal to $\\sigma_cE_z^2\\pi a^2$. Steady field storage does not eliminate the continuing side influx of energy into the resistor.

</details>

### Exercise 6

Find the mean normal pressure of a wave of intensity I on an ideal absorbing surface and on an ideal reflecting surface.

<details><summary>Hint 1</summary>

Forward momentum flux is energy flux divided by c.

</details>
<details><summary>Hint 2</summary>

Reflection reverses the outgoing normal momentum.

</details>
<details><summary>Full solution</summary>

At normal incidence the pressures are $I/c$ and $2I/c$ respectively. The latter includes the change from incoming positive momentum to outgoing negative momentum. Oblique incidence, transmission or surface motion changes this balance, so those ideal conditions belong to the formulas.

</details>

### Exercise 7

Why does differentiating only stored capacitor field energy at fixed voltage give an incomplete force calculation?

<details><summary>Hint 1</summary>

Changing the plate gap at fixed voltage changes the charge.

</details>
<details><summary>Hint 2</summary>

The external voltage source exchanges work equal to voltage times that charge change.

</details>
<details><summary>Full solution</summary>

For capacitance $\\varepsilon_0A/d$, source work and field-energy change are both nonzero during a displacement. Mechanical work is source work minus stored-energy change, giving attractive pressure $\\varepsilon_0V^2/(2d^2)$. Ignoring the source uses an energy derivative for a different control problem and can reverse the predicted force sign.

</details>

### Exercise 8

Under moving Ohm's law, derive the electrical work remaining after mechanical Lorentz power is subtracted.

<details><summary>Hint 1</summary>

Split total current into convective and relative-conduction parts.

</details>
<details><summary>Hint 2</summary>

Use the scalar triple product to rewrite magnetic mechanical work.

</details>
<details><summary>Full solution</summary>

With $J=\\rho_ev+j$, the difference is $j\\cdot E-v\\cdot(j\\times B)=j\\cdot(E+v\\times B)$. For $j=\\sigma_c(E+v\\times B)$ it is $\\sigma_c|E+v\\times B|^2\\ge0$. The omitted convective magnetic force has zero power against v, though it is not zero as a force vector in general.

</details>

### Exercise 9

State the vacuum Maxwell momentum identity and explain why field momentum storage matters in a time-dependent force calculation.

<details><summary>Hint 1</summary>

Use field momentum density $S/c^2$.

</details>
<details><summary>Hint 2</summary>

Integrate stress divergence and retain its time-derivative term.

</details>
<details><summary>Full solution</summary>

The identity is $\\rho_eE+J\\times B=\\operatorname{div}\\mathsf T-\\partial_tg$. Total material force equals surface Maxwell traction minus the rate of field momentum inside the region. Dropping that storage term is justified only in an appropriate stationary or averaged setting; a general transient can store or release momentum in the field.

</details>

### Exercise 10

Repair a claim that the stationary macroscopic interface formulas apply unchanged to every moving material interface with total charge sources.

<details><summary>Hint 1</summary>

The free/bound source convention and interface motion are separate assumptions.

</details>
<details><summary>Hint 2</summary>

Moving discontinuities contribute transport distributions to the curl equations.

</details>
<details><summary>Full solution</summary>

State that the displayed pillbox/loop formulas describe a stationary interface with the declared free-source D/H convention, or the corresponding vacuum total-source convention. A moving interface needs the distributional transport terms and any surface storage/current model. Mixing total charge with free-charge displacement conditions can double-count polarisation, and ignoring motion can omit an actual interface flux.

</details>
`;export{e as default};