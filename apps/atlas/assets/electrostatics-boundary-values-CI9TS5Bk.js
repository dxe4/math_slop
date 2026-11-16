var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: electrostatics-boundary-values
title: "Electrostatics and Boundary Values"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Electrostatics and Boundary Values

A static charge distribution does not by itself describe every electrostatic experiment. Conducting walls, prescribed voltages and conditions at infinity also shape the field. Coulomb superposition answers one class of source problems; a boundary-value formulation answers another. They agree when their complete hypotheses describe the same physical situation.

We assume the magnetic field is time independent and the electric circulation law has zero right-hand side. On a domain admitting a global scalar potential, write $E=-\\nabla\\phi$. The previous chapter supplies a constructive sufficient condition for that representation. In SI, the local charge law then becomes

$$\\nabla^2\\phi=-\\rho/\\varepsilon_0.$$

This is Poisson's equation; in a charge-free region it becomes Laplace's equation. A local equation still requires boundary or asymptotic data. We first construct the whole-space potential for a smooth compact source, then prove uniqueness statements that justify replacing a boundary by an auxiliary image source.

## The Coulomb potential as a source solution

Suppose the charge density is smooth and compactly supported in three-dimensional space. Define

$$\\phi(x)=\\frac1{4\\pi\\varepsilon_0}\\int\\frac{\\rho(y)}{|x-y|}\\,d^3y.$$

The kernel singularity is locally integrable: its spherical integral near zero behaves like the integral of radius. Thus the potential exists at every observation point for this regular source. Changing variables to the source displacement writes the integral with the kernel fixed and the smooth density translated. Derivatives can then be moved onto that density; on each compact set of observation points, all relevant translated supports stay within one bounded set. Local integrability provides the domination required for those differentiations.

This argument is especially useful for second derivatives. Differentiating the inverse-distance kernel twice and declaring the resulting singular integral ordinary would require additional interpretation. Moving the derivatives onto a smooth compact density avoids that unsupported step. The point-source identity from the previous chapter gives, distributionally, the Laplacian of inverse distance as a negative delta. Integration by parts against the smooth translated density therefore yields the stated Poisson equation. Since the potential is smooth by the differentiation argument, that equation also holds classically.

Its first derivative can equivalently be taken on the kernel, which has only an inverse-square singularity and is still locally integrable in three dimensions. We obtain the familiar field integral

$$E(x)=\\frac1{4\\pi\\varepsilon_0}\\int\\rho(y)\\frac{x-y}{|x-y|^3}\\,d^3y.$$

The potential tends to zero at infinity. For an observation distance much larger than the bounded source support, inverse distance is bounded by a constant times inverse observation distance. Integrating the absolute source density gives the corresponding decay bound. A nonzero total charge has a leading monopole term; if positive and negative charge cancel, the leading far-field order can improve.

Smooth compact densities are a convenient theorem class, not a claim that every laboratory source is smooth. For finitely many point charges, the corresponding sum gives a classical solution away from their positions and a distributional solution globally. Infinite sheets or wires have different asymptotic behavior. Their potentials may not approach zero at infinity, so that reference condition must be reconsidered rather than copied from the compact-source theorem.

## What a boundary condition fixes

A Dirichlet condition specifies the potential on a boundary. Physically, connected ideal conducting electrodes held at prescribed voltages provide such data in electrostatic equilibrium. A Neumann condition specifies the outward normal derivative, which is the negative outward electric component relative to the domain normal. Mixing the outward normal of the vacuum region with the outward normal of an electrode reverses a sign at an internal boundary.

For a bounded connected region with sufficiently regular boundary, suppose two twice differentiable potentials solve the same Poisson equation and have the same Dirichlet values. Their difference is harmonic and zero on the boundary. Green's identity gives

$$\\int_\\Omega|\\nabla u|^2\\,dV=\\int_{\\partial\\Omega}u\\,\\partial_nu\\,dS-\\int_\\Omega u\\nabla^2u\\,dV=0.$$

We assume the regularity needed for this integration by parts, for example twice continuous differentiability in the region with the required first derivatives continuous up to a piecewise smooth boundary. A nonnegative continuous integrand with zero integral vanishes. Hence the difference is constant, and its boundary value makes that constant zero. This proves uniqueness; it does not prove existence for arbitrary rough boundary data.

For identical Neumann data, the same proof makes the difference constant but does not determine that constant. An additive reference potential remains free. Moreover a necessary compatibility condition comes from integrating Poisson's equation: the prescribed normal derivative must integrate to the negative total charge divided by vacuum permittivity. Incompatible source and flux data have no solution, however plausible their separate formulas may look.

Mixed conditions work through the same boundary term. If one boundary part fixes potential and the rest fixes normal derivative, the difference has zero potential on the first part and zero normal derivative on the other. The energy proof again gives a constant, fixed to zero when a nonempty Dirichlet part actually imposes that reference. A general boundary-value existence theory belongs to PDE analysis; our use of uniqueness always presupposes a solution with the stated regularity has been constructed or otherwise justified.

## Conductors and electrostatic equilibrium

Inside a connected ideal conductor at electrostatic equilibrium, mobile charge has rearranged so the electric field is zero. A sustained interior electric field would drive further motion under the model. The potential is therefore constant throughout that connected conductor. This is an equilibrium idealization: finite conductivity and transients belong to the later material chapter.

At a smooth conductor-vacuum boundary, the tangential field vanishes on the vacuum side when the potential is continuous and constant along the surface. The normal jump is fixed by surface charge. With the normal directed from conductor into vacuum and zero interior field, the exterior normal electric field is surface charge density divided by vacuum permittivity. Surface charge is therefore an output of the boundary-value solution, unless it is explicitly part of the prescribed data.

Grounded and isolated conductors describe different constraints. Grounding fixes a potential and permits charge exchange with a reservoir. Isolation fixes total charge on each isolated conductor but leaves its constant potential to be determined. An image construction that solves the grounded problem cannot be reused unchanged for a neutral isolated conductor. The differential equation in the vacuum can be the same while the global charge constraint differs.

## Worked example: charge above a grounded plane

Put a point charge $q$ at height $a>0$ above the plane with vertical coordinate zero. The physical field region is the upper half-space, excluding the charge position. We seek zero potential on the plane and a potential decaying at large distance. Introduce an auxiliary charge $-q$ at the reflected point below the plane. The potential difference of the two Coulomb terms is

$$\\phi(x,y,z)=\\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac1{\\sqrt{x^2+y^2+(z-a)^2}}-\\frac1{\\sqrt{x^2+y^2+(z+a)^2}}\\right].$$

Every plane point is equidistant from the two source positions, so the boundary value is zero. In the upper half-space the auxiliary term is harmonic; only the real charge contributes the physical singularity. Both terms decay at infinity. These facts identify a candidate solving the complete grounded boundary problem, not a claim that an additional physical negative point charge exists inside the conductor.

Uniqueness on this unbounded region can be reduced to bounded regions. Subtract any other solution with the same physical singular part, plane boundary value and uniform decay at infinity. The difference extends harmonically through the real charge position and vanishes on the plane. On a large half-ball its maximum absolute value is bounded by its largest value on the distant hemisphere, by the harmonic maximum principle. That bound tends to zero as the half-ball expands, so the difference vanishes. The exercise below supplies the bounded maximum principle argument.

Differentiating at the plane gives the induced charge density

$$\\sigma(s)=-\\frac{qa}{2\\pi(s^2+a^2)^{3/2}},\\qquad s^2=x^2+y^2.$$

Its integral over the plane is $-q$: substitute the radial area element and integrate the derivative of inverse square root. The grounded reservoir supplies this total induced charge. The electric force on the real charge comes from the auxiliary field evaluated at that charge, excluding its own singular field. Its direction is toward the plane for either sign of the real charge, and its magnitude is $q^2/(16\\pi\\varepsilon_0a^2)$.

## Worked example: a far-field electric dipole

Place charges $+q$ and $-q$ at $+a\\hat z$ and $-a\\hat z$, respectively, with positive separation parameter. The total charge is zero. For observation distance at least twice that parameter, Taylor-expand inverse distance with respect to the source displacement. The even terms cancel between the two opposite source positions, while the first-order term survives. Define the dipole moment $p=2qa\\hat z$. Then

$$\\phi(x)=\\frac{p\\cdot x}{4\\pi\\varepsilon_0r^3}+O\\left(\\frac{|q|a^3}{\\varepsilon_0r^4}\\right).$$

The remainder is an absolute bound with a universal constant for this stated observation region. To justify it, third derivatives of inverse distance are homogeneous of degree negative four and bounded on a compact annular set away from zero. Along every source displacement segment in the expansion, distance from the observation point remains at least half its radius. Taylor's theorem then gives the claimed uniform control. No numerical fit to a few angles is being used.

The leading electric field follows by differentiating the dipole potential:

$$E_{\\mathrm{dip}}=\\frac{3n(n\\cdot p)-p}{4\\pi\\varepsilon_0r^3},\\qquad n=x/r.$$

The corresponding derivative remainder is one further inverse power of distance, justified by the same argument with a higher kernel derivative. Potential decays as inverse distance squared, and field as inverse distance cubed. A relative error statement is inappropriate at angles where the leading potential vanishes. The absolute estimate remains meaningful there, and the vector field need not vanish when the potential does.

This approximation describes the far field of the specified separated source. Sending the separation to zero while keeping dipole moment fixed defines an ideal point-dipole distribution, a different limiting object. Its singular near field and self-energy require their own interpretation. The far-field expression alone does not justify substituting that ideal field into every energy integral through its center.

## Electrostatic energy and a finite capacitor

For a smooth compact charge density with its decaying whole-space potential, assembly work is

$$U=\\frac12\\int\\rho\\phi\\,dV=\\frac{\\varepsilon_0}{2}\\int|E|^2\\,dV.$$

One way to obtain the half is to scale the charge gradually from zero to its final distribution. Linearity makes the potential proportional to the same assembly parameter, whose integral from zero to one is one half. The field identity follows from Poisson's equation and integration by parts. The boundary term at a large sphere tends to zero because potential and field have the compact-source decay orders stated earlier.

This derivation presumes the charge distribution is assembled within the linear electrostatic model. Batteries holding electrode voltages fixed can exchange work, so a field-energy change alone need not equal the mechanical potential energy of a moving object in a fixed-voltage experiment. Point-charge self-energies also diverge. Interaction energy between distinct charges can be finite while the total idealized field energy is not.

## Worked example: spherical capacitor

Two concentric conducting spheres have radii $a<b$, with charges $+Q$ and $-Q$. The vacuum gap is the field region. Spherical symmetry, conductor equilibrium and Gauss' law give a radial field $Q/(4\\pi\\varepsilon_0r^2)$ in the gap and zero field in the conductor interiors and outside the complete neutral arrangement.

The potential difference between the inner and outer conductor is

$$V=\\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac1a-\\frac1b\\right),\\qquad C=\\frac QV=4\\pi\\varepsilon_0\\frac{ab}{b-a}.$$

The expression is positive for a positive charge and the stated inner-minus-outer voltage. Capacitance depends on geometry and vacuum permittivity, not on the magnitude of charge in this linear model. Its SI unit is a farad. Reversing both charge and voltage preserves the same positive capacitance.

Integrating the field-energy density over the annular volume gives

$$U=\\frac{Q^2}{8\\pi\\varepsilon_0}\\left(\\frac1a-\\frac1b\\right)=\\frac12QV.$$

The field is bounded because the inner radius is positive, so there is no point-source self-energy divergence in this capacitor calculation. For a narrow gap of width much smaller than the inner radius, capacitance has leading value vacuum permittivity times the inner spherical area divided by the gap width. That approximation identifies its small geometric parameter; the exact formula remains available when the gap is not narrow.

## Exercises

### Exercise 1: an infinite slab reference {#em-electrostatic-infinite-slab}

A slab occupying $|z|<a$ has uniform volume charge density $\\rho_0$ and extends infinitely in the other two directions. Find the reflection-symmetric electric field and a potential with $\\phi(0)=0$. Explain why zero potential at both spatial infinities is unavailable when the density is nonzero.

**Hint 1.** Symmetry makes the field vertical and odd in the vertical coordinate.

**Hint 2.** Integrate its derivative inside, then enforce continuity at the two slab surfaces with no extra surface charge.

**Solution.** Inside, Gauss' differential law gives $E_z=\\rho_0z/\\varepsilon_0$ after oddness fixes the integration constant. Outside, the field is constant on each side, with values $\\pm\\rho_0a/\\varepsilon_0$. There is no normal jump at either interface, consistent with no separately specified sheet charge. Integrating the negative field gives $\\phi=-\\rho_0z^2/(2\\varepsilon_0)$ inside and $\\phi=-\\rho_0a|z|/\\varepsilon_0+\\rho_0a^2/(2\\varepsilon_0)$ outside. Both potential and field match at the interfaces. The exterior potential grows linearly in magnitude, so no additive constant can make it tend to zero at both infinities. The infinite-source idealization has different asymptotic data from a compact source.

### Exercise 2: Robin uniqueness {#em-electrostatic-robin-uniqueness}

On a bounded connected smooth region, two sufficiently regular solutions of the same Poisson equation obey the same boundary condition $\\partial_n\\phi+\\kappa\\phi=g$, where $\\kappa$ is a strictly positive constant with inverse-length units. Prove uniqueness and explain the change when that constant is zero.

**Hint 1.** Subtract the solutions and use Green's energy identity.

**Hint 2.** Substitute the homogeneous boundary relation into the boundary energy term.

**Solution.** The difference is harmonic and satisfies $\\partial_nu=-\\kappa u$. Green's identity gives the nonnegative volume integral of the squared gradient equal to $-\\kappa$ times the nonnegative boundary integral of the squared potential. Both quantities must therefore vanish. The difference is constant throughout the connected region, and its zero boundary square forces that constant to zero. If the coefficient vanishes, the same argument removes the gradient but leaves an arbitrary constant, which is the usual Neumann reference ambiguity. The sign of the coefficient matters; the proof does not establish uniqueness for a negative Robin coefficient.

### Exercise 3: electrostatic reciprocity {#em-electrostatic-reciprocity}

Let two smooth compact charge distributions have their decaying Coulomb potentials. Prove $\\int\\rho_1\\phi_2=\\int\\rho_2\\phi_1$, and express the common value as a field cross integral.

**Hint 1.** The Coulomb kernel is symmetric in its two arguments.

**Hint 2.** Alternatively integrate Poisson's equation against the other potential and check the distant boundary term.

**Solution.** Inserting the two source integrals produces a double integral with product of the two densities and the symmetric inverse-distance kernel. Smooth compact support and the locally integrable kernel make it absolutely integrable, so interchanging the variables gives reciprocity. Integration by parts also expresses each side as $\\varepsilon_0\\int\\nabla\\phi_1\\cdot\\nabla\\phi_2$, equal to the electric-field cross integral with the same coefficient. At a large sphere the boundary factor has inverse-distance potential, inverse-square gradient and quadratic area, so its total tends to zero. The proof concerns regular sources; it does not authorize including a point charge's divergent self-term.

### Exercise 4: interaction without self-energy {#em-electrostatic-two-charge-energy}

Two distinct point charges have values $q_1,q_2$ and separation $d>0$. Derive their finite electrostatic interaction energy and explain why it is not the complete integral of their ideal field-energy density over all space.

**Hint 1.** Bring one charge in from infinity while the other is held fixed.

**Hint 2.** The assembly expression counts each unordered pair once after the factor of one half.

**Solution.** The potential of the first charge at the second position is $q_1/(4\\pi\\varepsilon_0d)$, so the assembly work for that interaction is $q_1q_2/(4\\pi\\varepsilon_0d)$. The pair expression with a half gives the same answer because its two ordered cross terms are equal. Near either charge, however, its own field magnitude behaves as inverse radius squared, making its squared-energy integral diverge like the integral of inverse radius squared. Removing those self-terms defines a finite interaction contribution but is not an equality to an unregularized finite total field energy. The separation condition prevents a further collision divergence in the interaction term itself.

### Exercise 5: the grounded-plane energy factor {#em-electrostatic-image-energy}

For the charge above a grounded plane in the worked example, integrate the force to find its mechanical potential energy relative to infinite separation. Compare it with charge times the image potential and explain the factor of one half.

**Hint 1.** The vertical force is $-q^2/(16\\pi\\varepsilon_0a^2)$.

**Hint 2.** Mechanical force is the negative derivative of energy with respect to the height.

**Solution.** Integration with zero energy at infinite height gives $U=-q^2/(16\\pi\\varepsilon_0a)$. The image potential at the charge is $-q/(8\\pi\\varepsilon_0a)$, so multiplying by the charge gives twice this mechanical energy. The induced charge is not an independently fixed second point charge; it changes as the real charge is moved, and the grounded reservoir participates in the assembly. Equivalently, gradually building the real charge builds the induced charge linearly and introduces the assembly factor one half. Differentiating the derived energy returns the correct attractive force. Treating the image as a separate physical charge with a fixed interaction-energy rule would miss that constraint.

### Exercise 6: harmonic maximum principle {#em-electrostatic-maximum-principle}

Prove that a harmonic function continuous on the closure of a bounded region takes no value larger than its largest boundary value. Assume it is twice continuously differentiable inside. Use a small positive quadratic perturbation, and derive the corresponding lower bound.

**Hint 1.** The Laplacian of a positive multiple of squared distance is strictly positive.

**Hint 2.** At an interior maximum of a twice differentiable function, the Hessian has nonpositive trace.

**Solution.** Add $\\epsilon|x|^2$ to the harmonic function. Its Laplacian is strictly positive, so it cannot attain a maximum at an interior point, where the second directional derivatives would have nonpositive sum. Compactness of the closure makes its maximum occur somewhere, hence on the boundary. This bounds the original function at any fixed point by the largest boundary value plus a quantity controlled by the small coefficient and the bounded coordinate radius. Let the positive coefficient tend to zero to obtain the upper bound. Applying the same result to the negative function gives the lower bound. This weak maximum principle proves uniqueness with zero Dirichlet data and supports the truncated-domain argument used for the grounded plane.

### Exercise 7: a Neumann incompatibility {#em-electrostatic-neumann-charge-flux}

A ball of radius $a$ contains total charge $Q$. A proposed boundary condition sets the outward normal potential derivative to a constant $g$. Find the necessary relation between that constant and total charge. Explain what failure of the relation means.

**Hint 1.** Integrate Poisson's equation over the ball.

**Hint 2.** The boundary derivative integral is the constant times sphere area.

**Solution.** The divergence theorem gives $4\\pi a^2g=-Q/\\varepsilon_0$, so the necessary value is $g=-Q/(4\\pi\\varepsilon_0a^2)$. The minus sign follows from the electric field being the negative potential gradient. If the relation fails, no sufficiently regular solution satisfies both the source equation and the proposed boundary data. An arbitrary additive potential cannot repair the mismatch because it changes no derivative. Satisfying the integral compatibility is necessary but is not, by this argument alone, a proof of existence for every possible source and domain regularity class.

### Exercise 8: dipole potential and field zeros {#em-electrostatic-dipole-angular-zero}

For a nonzero ideal dipole moment away from its source point, show that the dipole potential vanishes on an equatorial plane but its electric field never vanishes at any finite nonzero observation point.

**Hint 1.** Decompose the dipole moment into components parallel and perpendicular to the observation direction.

**Hint 2.** The field numerator becomes twice the parallel component minus the perpendicular component.

**Solution.** The potential is proportional to the observation-direction dot product with the dipole moment, so it vanishes when that dot product is zero. Write the moment as parallel plus perpendicular parts. The field numerator is twice the parallel part minus the perpendicular part, whose orthogonal squared norm is four times the parallel norm squared plus the perpendicular norm squared. This is positive for a nonzero moment. Thus the field cannot vanish away from the source, including on the potential-zero plane. A zero potential value is a chosen scalar reference value, not a statement that its spatial derivatives vanish.

### Exercise 9: two capacitors in series {#em-electrostatic-series-energy}

Two ideal vacuum capacitors of positive capacitances $C_1,C_2$ are connected in series with an initially neutral isolated intermediate conductor. Derive the effective capacitance by both voltage addition and field-energy addition. State the role of the neutrality assumption.

**Hint 1.** The two charge magnitudes are equal when no net charge is trapped on the intermediate conductor.

**Hint 2.** Add the two voltage drops, or add their quadratic charging energies.

**Solution.** Let the common charge magnitude be $Q$. The voltage drops are $Q/C_1$ and $Q/C_2$, so the total is $Q(1/C_1+1/C_2)$. The effective capacitance is their positive product divided by their sum. The two energies add to $Q^2(1/C_1+1/C_2)/2$, matching the energy of that effective capacitor. The equality of charge magnitudes follows from charge conservation on the neutral isolated intermediate conductor. If it starts with trapped net charge, the two charges need not have equal magnitudes and the simple one-parameter charging relation acquires an offset. The derivation is for ideal lumped capacitors under electrostatic conditions, not an arbitrary high-frequency circuit.

### Exercise 10: a capacitance-matrix theorem {#em-electrostatic-capacitance-matrix}

Inside a grounded conducting box are two separate conducting electrodes. Assume the smooth connected vacuum region admits harmonic functions $f_i$ equal to one on electrode $i$ and zero on the other boundaries, with enough regularity for Green's identity. Prove the matrix relating electrode charges to their voltages is symmetric and positive definite. Specify the vacuum-domain normal convention.

**Hint 1.** Write the potential as the voltage-weighted sum of the two harmonic functions.

**Hint 2.** Green's identity identifies each matrix entry with $\\varepsilon_0\\int\\nabla f_i\\cdot\\nabla f_j$.

**Solution.** The vacuum-region outward normal points into an electrode at an internal boundary, opposite its outward physical normal. Hence the electrode charge is the integral of the potential's vacuum-normal derivative multiplied by vacuum permittivity. Linearity expresses each charge through the voltage coefficients. Green's identity, using the defining boundary values, gives exactly the cross-gradient integral stated in the second hint for each coefficient. That expression is symmetric in the two indices. Its quadratic form at a voltage vector is vacuum permittivity times the integral of the squared gradient of the resulting potential. Zero value forces a constant potential; the grounded outer boundary makes that constant zero, and the electrode values then make both voltages zero. Thus the matrix is positive definite. Existence of the harmonic basis was a hypothesis, not proved by the matrix argument.
`;export{e as default};