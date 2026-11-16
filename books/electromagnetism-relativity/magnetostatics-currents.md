
# Magnetostatics and Steady Currents

A steady current can produce a magnetic field even when the charge density does not change. The word steady imposes a constraint: charge must not accumulate at an unaccounted endpoint. A wire segment drawn in isolation can illustrate a local field contribution, but it does not specify a complete stationary source unless a return path or another consistent supply mechanism is included.

We take charge density and current density to be time independent. Charge continuity then requires zero current divergence. In vacuum the magnetostatic equations are

$$\nabla\cdot B=0,\qquad\nabla\times B=\mu_0J.$$

The first equation excludes magnetic monopole charge within this classical theory. It does not say the field is zero, nor does it prohibit nonzero circulation around a current. The second equation relates that circulation to electric current with a matched orientation. We keep the SI force law $qv\times B$, the right-handed spatial orientation and the source regularity conventions established earlier.

## Construct a field from a complete steady source

Let the current be smooth, compactly supported and divergence-free throughout space. Define a vector potential by three componentwise Coulomb integrals:

$$A(x)=\frac{\mu_0}{4\pi}\int\frac{J(y)}{|x-y|}\,d^3y.$$

The same local integrability and derivative-transfer argument used for the electrostatic potential makes this potential smooth. Componentwise application of the inverse-distance fundamental solution gives the negative Laplacian of the potential equal to vacuum permeability times current density. We next prove its divergence is zero rather than imposing that as an unexplained extra source equation.

Differentiate the kernel in the observation variable and replace that derivative with its negative source-variable derivative. Integration by parts moves the derivative onto current density. Its divergence vanishes, and compact support removes the boundary term. Hence this potential is in Coulomb gauge. Letting the magnetic field be its curl gives both source equations:

$$\nabla\cdot A=0,\qquad B=\nabla\times A,\qquad
\nabla\times B=\nabla(\nabla\cdot A)-\nabla^2A=\mu_0J.$$

Zero magnetic divergence follows from the divergence-of-curl identity. This is an existence construction for the stated regular compact source class. It does not prove that any arbitrary current, including one with accumulating endpoints, admits a magnetostatic solution.

Differentiating the kernel once also yields the Biot–Savart integral

$$B(x)=\frac{\mu_0}{4\pi}\int\frac{J(y)\times(x-y)}{|x-y|^3}\,d^3y.$$

The sign follows from the negative observation gradient of inverse distance and the reversal of a cross product. Its kernel is locally integrable against a smooth volume current. A filamentary loop is instead a distributional source, with the volume current replaced by oriented current times a line element. Away from the filament its field integral is well defined. At the ideal zero-radius wire the field is singular, and its self-energy cannot be assumed finite.

A useful consistency check is to take divergence of the sourced curl equation. The left side vanishes identically, so the current divergence must vanish. This necessary condition agrees with charge conservation for steady sources. Later, the time-dependent Maxwell correction will permit currents associated with changing charge density, while preserving the full continuity equation.

## Ampere circulation and the domain

Stokes' theorem gives the integral form

$$\oint_{\partial S}B\cdot dl=\mu_0\int_SJ\cdot n\,dS$$

when the fields and surface satisfy its regularity conditions. For a singular wire source, the surface integral is interpreted as enclosed oriented current and can be justified by replacing the wire with a finite cross section before taking the appropriate limit. The circulation direction and current sign are connected by the right-hand convention.

A different spanning surface gives the same current when both surfaces lie within a consistent stationary-source model. Their difference forms a closed boundary, whose net current flux vanishes because current has zero divergence. A sketch that allows one surface to cut a supply wire while another avoids every part of a nonclosed source may have omitted the physical return current or time-dependent charge. The equation is not repaired by assigning two different answers to the same circulation.

Ampere's law calculates a field directly only when symmetry makes its circulation integral simple. The symmetry must preserve the complete source and the relevant boundary conditions. For a straight infinite wire, translations and rotations constrain the direction and radius dependence. For a finite bent wire, a circular observation path usually has neither constant tangential field nor zero contribution from every other segment; the integral law remains true without determining the local field from one equation.

In a current-free multiply connected region, the magnetic field may have zero curl but nonzero circulation around an excluded current. A local magnetic scalar potential can exist while a global single-valued one does not. This is the same domain issue proved for the punctured-plane vortex, now with a current source supplying the physical circulation. A vector potential is a different representation with different global conditions; the two potential questions must not be conflated.

## Worked example: a wire with finite radius

An infinitely long cylindrical wire of radius $a$ carries uniform axial current density, with total current $I$ directed along the positive axis. This is not a compact source, so we use its translational and rotational symmetry rather than applying the compact-source decay theorem. An external uniform background field is excluded as part of the specification.

The field is azimuthal. A circular Ampere path of cylindrical radius $s$ encloses current proportional to its cross-sectional area when inside the wire and the full current when outside. Thus

$$B_\theta(s)=\begin{cases}
\mu_0Is/(2\pi a^2),&s<a,\\
\mu_0I/(2\pi s),&s>a.
\end{cases}$$

The interior field vanishes at the axis and joins continuously to the exterior field. A discontinuity in volume current density at the wire surface does not require a discontinuity in the field itself. An additional ideal sheet current would instead produce the tangential jump examined in an exercise.

One compatible vector potential has only an axial component:

$$A_z(s)=\begin{cases}
\mu_0I(1-s^2/a^2)/(4\pi),&s<a,\\
-\mu_0I\log(s/a)/(2\pi),&s>a.
\end{cases}$$

In cylindrical coordinates the azimuthal curl component is the negative radial derivative of that component, giving the field above. The potential is continuous at the wire surface. It does not approach zero at arbitrarily large radius; the logarithm reflects the infinite-source idealization. Replacing it by a finite current loop changes the distant field and permits the compact-source treatment.

The exterior field energy per unit length grows logarithmically with an outer radius cutoff. A real return conductor sets a physical outer scale. Sending that return path to infinity while asking for finite total energy per unit length changes the mathematical question. This distinction will reappear when an ideal thin wire is assigned an inductance without stating its radius or return geometry.

## Worked example: the axis of a circular loop

A circular loop of radius $a$ lies in the horizontal plane and carries current counterclockwise as seen from the positive axis. Parametrize its source point by the usual sine and cosine pair. At an axial observation point of coordinate $z$, the source-to-observer distance is constant around the loop. The vector cross product of the line element with that displacement has a constant axial term and transverse terms whose full-turn integrals vanish.

Explicitly, those three cross-product terms are proportional to $az\cos\theta$, $az\sin\theta$ and $a^2$. Biot–Savart therefore gives

$$B_z(z)=\frac{\mu_0Ia^2}{2(a^2+z^2)^{3/2}},\qquad B_x=B_y=0.$$

At the loop center the field is the vacuum permeability times current divided by twice the loop radius. Far along either axial direction it falls as inverse distance cubed. Its axial direction is the same on both sides of the loop for the chosen current orientation. Reversing the current reverses the entire vector field.

This example uses exact symmetry to cancel transverse contributions, not an assumption that each individual wire element produces an axial field. Off the axis those cancellations change, and the denominator also varies around the source loop. One cannot substitute a transverse coordinate into the axial formula and retain an exact solution.

The far-field coefficient is naturally written using the magnetic moment $m=I\pi a^2\hat z$. That moment will be derived for general localized steady currents next. The loop is a singular line source, but an observation point on the axis remains a positive distance from the wire, so its field integral has no local singularity.

## Magnetic moment and the localized far field

For a compact smooth steady current, define

$$m=\frac12\int y\times J(y)\,d^3y.$$

The moment is independent of the coordinate origin. To see why, first prove the spatial integral of each current component vanishes. Integrate the divergence of the vector field whose components are the current components multiplied by one source coordinate. Zero current divergence leaves precisely the selected current component, and compact support removes the boundary flux. Translating the origin changes the moment by a constant cross the integral of current, which is zero.

A second integration-by-parts identity follows by multiplying the current by a product of two source coordinates before taking divergence. It gives

$$\int(y_iJ_j+y_jJ_i)\,d^3y=0.$$

Thus the first current-moment matrix is antisymmetric. Expand the inverse-distance kernel in the vector-potential integral for observation distance much larger than the source support. The nominal inverse-distance term vanishes because the integral of current is zero. The next term contracts the antisymmetric moment matrix with the observation direction and equals the magnetic moment cross that direction. Consequently

$$A(x)=\frac{\mu_0}{4\pi}\frac{m\times n}{r^2}+O(r^{-3}),\qquad
B(x)=\frac{\mu_0}{4\pi r^3}\bigl(3n(n\cdot m)-m\bigr)+O(r^{-4}).$$

The remainder constants depend on bounded source moments, and the estimates apply away from a bounded source support. They are absolute estimates, so a vanishing leading moment requires inspecting the next order rather than dividing by zero to claim a relative error. The kernel Taylor argument is the same controlled method used for the electrostatic dipole, with the additional cancellation imposed by steady-current conservation.

For a closed thin loop, the moment becomes half the current times the line integral of position cross line element. In a plane this is current times signed area normal. The expression remains meaningful for a nonplanar loop as a vector area. Its direction follows the current orientation; using unsigned area would lose that information.

## Forces, torque and energy accounting

A moving charge experiences magnetic force perpendicular to its instantaneous velocity, so that contribution does no direct instantaneous mechanical work. A current-carrying apparatus can nevertheless exchange mechanical and electrical energy. The charges, constraints, conductors and current sources form a larger system. Holding a current fixed while changing geometry generally requires a source to supply or absorb energy.

The magnetic force on a thin wire segment is current times its oriented line element crossed with the external field. Its own singular field is excluded. For a closed loop in a uniform external field, net force is zero because the line integral of its displacement element is zero. Its torque about an arbitrary origin is

$$\tau=I\oint r\times(dl\times B)=m\times B.$$

To derive the last identity, expand the triple product. The term containing the closed integral of position dotted with its differential vanishes because it is the integral of a total differential. The remaining component integrals are antisymmetric under integration by parts around the closed loop and equal the vector-area expression for the magnetic moment. This proof uses a spatially uniform external field; a field gradient can produce a net dipole force.

For a smooth localized steady current, magnetic field energy is

$$U_B=\frac1{2\mu_0}\int|B|^2\,dV=\frac12\int J\cdot A\,dV.$$

The identity follows by integrating the divergence of the potential crossed with the magnetic field and using the sourced curl equation. The surface term vanishes under the localized-source decay derived above. It also shows gauge independence: adding a gradient changes the source expression by an integral of a divergence and a term containing current divergence, both zero under these hypotheses. The equality is an energy identity, not a universal fixed-current mechanical potential rule for every externally driven circuit.

## Worked example: an ideal toroidal inductor

Consider the continuous-winding model of a toroid with rectangular vacuum cross section, inner cylindrical radius $a$, outer radius $b>a$ and height $h$. There are effectively $N$ turns carrying current $I$, represented by an axisymmetric current sheet. In this ideal model the magnetic flux is confined to the toroidal interior and the exterior background field is zero. Discrete winding leakage is outside this approximation.

An azimuthal Ampere circle inside links the total winding current, giving $B_\theta=\mu_0NI/(2\pi s)$. Flux through one rectangular turn is the height times the radial integral of this field. The result and the flux linkage are

$$\Phi=\frac{\mu_0NIh}{2\pi}\log\frac ba,\qquad
N\Phi=LI,\qquad L=\frac{\mu_0N^2h}{2\pi}\log\frac ba.$$

The logarithm is dimensionless and positive. Inductance has henry units. Integrating the magnetic energy over the toroidal volume, with cylindrical volume element, gives

$$U_B=\frac{\mu_0N^2I^2h}{4\pi}\log\frac ba=\frac12LI^2.$$

This checks the same geometry through flux and field energy. The result uses vacuum permeability and a linear field response. Adding a magnetic core requires a constitutive model, which can be nonlinear or hysteretic; replacing the constant by an arbitrary scalar material label is not generally an exact treatment. Finite turn spacing also changes the field near individual wires and outside the ideal confinement region.

## Exercises

### Exercise 1: current conservation is necessary {#em-magnetic-current-compatibility}

A proposed smooth time-independent current has nonzero divergence on an open region. Prove no twice differentiable magnetostatic field can satisfy the sourced curl equation there. Explain the physical issue if the prescribed current is used anyway.

**Hint 1.** Take divergence of both sides of the equation.

**Hint 2.** Compare the result with the full charge continuity equation.

**Solution.** Divergence of a curl vanishes for the stated smoothness, so the sourced equation forces zero divergence of current. A prescribed nonzero divergence contradicts that necessary identity. Charge continuity instead requires a changing charge density whose time derivative cancels the divergence. Such a source is not stationary and must be treated with time-dependent fields, including the displacement-current term introduced in the next chapter. This conclusion is local: no boundary adjustment can cancel a nonzero smooth divergence at an interior point while leaving the same magnetostatic equation there.

### Exercise 2: the ideal infinite solenoid {#em-magnetic-infinite-solenoid}

An ideal infinitely long continuous solenoid has $n$ turns per unit length carrying current $I$. Assume axial and rotational symmetry and choose zero uniform exterior background field. Derive the interior field and state the idealization behind the exterior result.

**Hint 1.** Symmetry makes the field axial and constant in each current-free radial region.

**Hint 2.** A rectangular Ampere loop crossing the sheet relates the interior and exterior axial components.

**Solution.** The rectangular loop has one long side inside and the other outside, with opposite traversal directions. The enclosed sheet current is the turn density times current times the loop length. Ampere's law gives the interior-minus-exterior axial field equal to $\mu_0nI$. The selected exterior background is zero, so the interior field has that magnitude and direction set by the winding orientation. A uniform axial field could otherwise be added to both regions. The exterior-zero statement is exact for this translation-invariant continuous-sheet model, not for a finite solenoid with ends. Nor is it a global decay condition in every direction, since the ideal interior extends indefinitely along the axis.

### Exercise 3: a surface-current jump {#em-magnetic-sheet-current-jump}

An infinite sheet at $z=0$ carries uniform surface current $K\hat x$. Find the magnetic fields on its two sides under the antisymmetry condition across the sheet, with no added uniform background. Verify the oriented jump relation using upward normal.

**Hint 1.** The field is parallel to the horizontal direction perpendicular to current.

**Hint 2.** Use $\hat z\times(B_+-B_-)=\mu_0K\hat x$ and the antisymmetry condition.

**Solution.** The fields are $B_+=-(\mu_0K/2)\hat y$ above and $B_-=(\mu_0K/2)\hat y$ below. Their difference is negative vacuum permeability times current magnitude in the transverse direction. Crossing that difference with the upward normal gives the required current direction and coefficient. The normal magnetic component is zero on both sides, so the magnetic divergence law has no sheet source. Without the imposed absence of background, a common uniform field could be added while retaining the same jump. The example distinguishes source-imposed discontinuity from the additional global choice of background.

### Exercise 4: force between parallel wires {#em-magnetic-parallel-wire-force}

Two straight parallel wires separated by $d>0$ carry signed currents $I_1,I_2$ along the same reference axis. Derive the magnitude of force per unit length and determine attraction or repulsion. Exclude each wire's own field from its force calculation.

**Hint 1.** Evaluate the field of the first wire at the second wire.

**Hint 2.** Apply the wire force law with a consistent right-hand orientation.

**Solution.** The external field magnitude at the second wire is $\mu_0|I_1|/(2\pi d)$. Multiplying by the second current magnitude gives force per unit length $\mu_0|I_1I_2|/(2\pi d)$. For currents in the same direction, the line element crossed with the external azimuthal field points toward the other wire, so the force is attractive. Reversing one current reverses that force and gives repulsion. Reversing both leaves attraction unchanged. This is the infinite-wire local force model; its return geometry and total stored energy require separate specifications. The self-field at an ideal filament is singular and is not an extra finite contribution to this calculation.

### Exercise 5: loop moment and origin {#em-magnetic-loop-origin-independence}

Prove the magnetic moment of a closed filamentary loop is independent of the choice of coordinate origin, and explain what fails for an open wire segment treated alone.

**Hint 1.** Translate the position vector by a constant in the moment integral.

**Hint 2.** The integral of the line element around a closed loop is zero.

**Solution.** Changing the origin replaces position by position minus a constant vector. The moment changes by negative one half of current times that constant crossed with the closed line-element integral. The integral is zero because the loop returns to its starting point, so the moment is unchanged. For an open segment, the line-element integral equals endpoint displacement and need not vanish. Its moment contribution can therefore depend on the origin. A complete localized steady-current system restores conservation through its return paths; assigning an intrinsic localized magnetic dipole solely to an arbitrary open segment discards that structure.

### Exercise 6: source moments and far-field cancellation {#em-magnetic-steady-source-moments}

For smooth compact divergence-free current, prove both that its spatial integral vanishes and that $\int(y_iJ_j+y_jJ_i)=0$. Explain their different roles in the vector-potential expansion.

**Hint 1.** Integrate divergences of current multiplied by one source coordinate and by a product of two coordinates.

**Hint 2.** The boundary terms vanish by compact support, and the current-divergence terms vanish by stationarity.

**Solution.** The divergence of the vector field with components $y_iJ_k$ is $J_i$ plus a term proportional to current divergence. Integrating gives zero total current component. Using $y_iy_jJ_k$ instead gives the sum of the two first moments in the statement, again with a vanished divergence term. The first identity cancels the inverse-distance term of the vector potential. The second makes the first-moment matrix antisymmetric, allowing its three independent entries to be represented by the magnetic moment vector. Together they yield the dipolar leading field. Without the steady-source hypothesis, neither cancellation follows from the same integration by parts.

### Exercise 7: residual Coulomb gauge {#em-magnetic-residual-gauge}

Show a gauge change $A\mapsto A+\nabla\chi$ preserves the magnetic field. Determine when it also preserves Coulomb gauge and give a nonconstant example on a ball. Explain why boundary data may remove this residual freedom.

**Hint 1.** Use curl of a gradient and divergence of a gradient separately.

**Hint 2.** The polynomial $xy$ is harmonic.

**Solution.** The field change is curl of a gradient, zero for a twice continuously differentiable gauge function. The potential divergence changes by the Laplacian of that function, so Coulomb gauge survives exactly when the gauge function is harmonic. On a ball, the polynomial suggested in the hint has gradient $(y,x,0)$ and zero Laplacian, giving a nontrivial residual change. Imposing an appropriate scalar boundary condition on the gauge function can restrict harmonic freedom, for example zero Dirichlet data forces it to vanish by harmonic uniqueness. A gauge condition alone is therefore not identical to a complete potential specification.

### Exercise 8: mutual inductance reciprocity {#em-magnetic-mutual-reciprocity}

Two disjoint smooth closed filamentary loops carry currents. Derive the mutual flux coefficient as a double line integral and prove it is unchanged when the source and receiving loops are interchanged. State what reversing one loop orientation does.

**Hint 1.** Flux through the receiving loop equals circulation of the source vector potential.

**Hint 2.** The kernel is inverse separation and the numerator is the dot product of the two oriented line elements.

**Solution.** Substituting the filamentary vector potential into the receiving-loop circulation gives the coefficient $M=\mu_0(4\pi)^{-1}\oint\oint dl_1\cdot dl_2/|r_1-r_2|$. The two compact disjoint loops have positive minimum separation, so the integral is nonsingular and its order can be exchanged. Both the dot product and separation kernel are symmetric, proving reciprocity. Reversing one orientation negates the corresponding line element and hence the coefficient. Mutual inductance can therefore be signed relative to winding conventions. This finite mutual integral does not imply the self-inductance of an ideal zero-radius filament is finite.

### Exercise 9: an inductance inequality {#em-magnetic-inductance-energy-bound}

For two finite-cross-section localized coils in a linear vacuum model, let their finite magnetic energies define self-inductances $L_1,L_2>0$ and mutual coefficient $M$. Prove $M^2\le L_1L_2$ and identify the field condition for equality.

**Hint 1.** Express the three coefficients through inner products of the fields produced by unit currents.

**Hint 2.** Use the nonnegativity of every linear combination's field energy, or the integral Cauchy–Schwarz inequality.

**Solution.** If the unit-current fields are $B_1,B_2$, then the self coefficients are their squared field norms divided by vacuum permeability, and the mutual coefficient is their cross inner product with the same factor. Cauchy–Schwarz gives the claimed inequality. Equality occurs exactly when the two unit-current fields are proportional almost everywhere in the field-energy norm. Equivalently, some nonzero current combination has zero total field throughout space in that norm. Generic separated coils do not satisfy this perfect proportionality, but the inequality itself requires no separation approximation. Finite self-energy is essential; divergent filament self-terms cannot be inserted into this Hilbert-space argument.

### Exercise 10: scalar and vector potentials are different questions {#em-magnetic-annular-potentials}

On an annular cylindrical region with $s>0$, take $B=\kappa\hat\theta/s$. Show it has zero local curl and divergence but no global single-valued magnetic scalar potential when the constant is nonzero. Construct a global vector potential on the same region.

**Hint 1.** A circular path around the excluded axis has nonzero circulation.

**Hint 2.** Try an axial vector potential proportional to the logarithm of cylindrical radius.

**Solution.** Direct cylindrical differentiation gives zero divergence and curl throughout the annular domain. The circulation around a full positive circle is $2\pi\kappa$, which rules out a global representation as the negative gradient of a single-valued scalar when the constant is nonzero. A local angle expression would change after one turn. On the other hand, $A=-\kappa\log(s/s_0)\hat z$, with any fixed positive reference radius, is globally single-valued on the region. Its azimuthal curl is the negative radial derivative of its axial component, exactly the required field. Thus the scalar-potential obstruction does not prevent this vector potential; the two representations impose different differential and global conditions.
