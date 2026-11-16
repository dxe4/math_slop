
# Variational Electrodynamics

An action organizes the electromagnetic equations, their gauge freedom and their conserved quantities in one framework. The compact expression is useful only after its variables, boundary conditions and source assumptions are stated. Varying potentials derives the sourced Maxwell equations; the homogeneous equations follow from how the field tensor is defined. Gauge freedom then produces identities and constraints rather than extra measurable photon polarizations.

This chapter derives the field variations directly. The [mechanics introduction to action](../action-symmetry-mechanics/from-a-path-to-a-number.md) is useful preparation. The separate [field-action chapter](../action-symmetry-mechanics/field-theory-action.md) and [field Noether chapter](../action-symmetry-mechanics/noether-s-theorem-in-field-theory.md) provide broader continuations, including material and geometric settings beyond this L3 treatment. Their conventions should be translated before comparing components.

We keep SI, the established metric, physical potentials and source convention. Fields and variations are smooth enough for the stated integrations by parts. Compactly supported variations initially remove all boundary contributions, isolating interior equations. Later sections restore those contributions explicitly. Singular point-charge self-action is not declared finite by placing it inside an integral.

## The field and source action

In coordinate time the action is

$$S[\phi,A]=\int dt\,d^3x\left(\frac{\varepsilon_0|E|^2}{2}-\frac{|B|^2}{2\mu_0}+J\cdot A-\rho\phi\right),$$

with fields defined from the potentials. The density has energy per volume units, so its space-time integral has action units. Electric and magnetic terms enter with opposite signs. A stationary Lorentzian action is not generally a positive energy minimum; physical field energy, derived earlier, has their sum instead.

The source is prescribed for this first variation and is not varied with the potentials. Its charge and current must be conserved for the resulting Maxwell equations to be compatible. A dynamical charged-matter theory instead includes its own action and variations, providing additional equations and the corresponding conservation identity. Maxwell's field action alone does not determine a material's motion, conductivity or restoring forces.

## Vary the scalar potential

For a scalar variation, electric field changes by negative its gradient and magnetic field does not change. Thus the action variation contains negative vacuum permittivity times electric field dotted with the variation gradient, and negative charge density times the variation. Integrating by parts gives

$$\delta_\phi S=\int dt\,d^3x\,(\varepsilon_0\nabla\cdot E-\rho)\delta\phi$$

for compactly supported variation. The fundamental lemma of the calculus of variations makes the coefficient vanish. One direct proof of that lemma for a continuous coefficient is to choose a nonnegative smooth bump in a small neighborhood where a supposed nonzero coefficient has fixed sign; its integral cannot vanish. This is the same localization principle used for field balances.

We therefore recover the electric Gauss law. The scalar potential has no independent first time derivative in this Lagrangian, a fact that will later appear as a Hamiltonian constraint. Its variation remains essential: omitting that variable and varying only the vector potential would lose this equation.

## Vary the vector potential

A vector variation changes electric field by negative its time derivative and magnetic field by its curl. The three contributions are

$$\delta_AS=\int\left(-\varepsilon_0E\cdot\partial_t\delta A-\mu_0^{-1}B\cdot\nabla\times\delta A+J\cdot\delta A\right)dt\,d^3x.$$

Integrate the first term in time and the curl term in space. With compact support, their boundary terms vanish and the bulk coefficient is electric time derivative times vacuum permittivity minus magnetic curl divided by vacuum permeability plus current. Setting it to zero gives Ampere–Maxwell with precisely the sign convention used throughout the book.

The other two Maxwell equations are identities of the smooth potential representation: divergence of magnetic curl vanishes, and the electric curl cancels the time derivative of magnetic curl. The action has therefore produced the complete system through two Euler–Lagrange equations plus two defining identities. A global potential representation may not cover every topological field sector on a noncontractible domain; choosing it is part of the configuration space.

## The same derivation in spacetime notation

Let the four-dimensional volume element use temporal coordinate equal to light speed times time. Then the action is

$$S=\frac1c\int d^4x\left(-\frac1{4\mu_0}F^{\mu\nu}F_{\mu\nu}-J^\mu A_\mu\right).$$

The factor outside the integral converts that temporal length measure back to time. Expanding the tensor square gives twice magnetic square minus twice electric square divided by squared light speed. Expanding the current-potential contraction gives charge density times scalar potential minus current dotted with vector potential. Thus the expression is exactly the coordinate-time action above, not a new unit convention.

Use lower-index potential variations. Antisymmetry makes the two field-variation terms equal, so varying the quadratic density gives negative field tensor contracted with the derivative of the potential variation, divided by vacuum permeability. Integration by parts yields

$$\delta S=\frac1c\int\left(\mu_0^{-1}\partial_\mu F^{\mu\nu}-J^\nu\right)\delta A_\nu\,d^4x.$$

Independent compact variations give the sourced tensor equation. Expanding temporal and spatial components again recovers the two equations just derived. The agreement checks the factor of two in the antisymmetric square and the factor of light speed in the volume element.

## Gauge variation and its source condition

The field term is unchanged by a gauge transformation because the field tensor is unchanged. The source term changes, for a compact gauge function, by

$$\delta_\chi S=\frac1c\int J^\mu\partial_\mu\chi\,d^4x
=-\frac1c\int\chi\,\partial_\mu J^\mu\,d^4x.$$

Therefore gauge invariance for every such function is equivalent to source continuity in this prescribed-source action. Necessity follows from the fundamental lemma, and sufficiency follows from the same integration by parts. Gauge symmetry does not make an arbitrary nonconserved imposed current become conserved; it exposes why that source is incompatible with Maxwell theory.

For the source-free Euler–Lagrange expression, taking its four-divergence vanishes identically by antisymmetry and commuting derivatives, whether or not a solution has been chosen. This is an off-shell differential identity. With a prescribed source included, that divergence equals negative the source divergence. With dynamical matter, the full gauge identity also involves matter Euler–Lagrange expressions. These are different statements and should not be collapsed into an assertion that every current is conserved independently of its dynamics.

A gauge function nonzero at a boundary can leave an additional boundary contribution. Fixed-endpoint particle coupling likewise changes by a charge-weighted endpoint value. Such terms do not alter the compact interior variation, but they matter for boundary charges, allowed transformations and the definition of generators. Discarding them requires the actual support or boundary restriction, not merely the label gauge.

## Restore the boundary terms

For a fixed spatial region over a fixed time interval, scalar variation contributes the spatial boundary term negative vacuum permittivity times scalar variation times outward electric field. Vector variation contributes a spatial term equal to vector variation dotted with normal crossed with magnetic field, divided by vacuum permeability. Its temporal endpoint term is negative vacuum permittivity times electric field dotted with vector variation, evaluated at the two time ends.

Fixing the appropriate potentials at boundaries makes these terms vanish. Alternatively, allowing free variations can produce natural boundary conditions or require a boundary action representing supplied sources. Those are different variational problems. The field equations in the interior do not select one of them automatically.

For example, fixing both scalar potential and tangential vector potential is a useful boundary prescription in a selected flux sector. It is not equivalent to every physical perfect-conductor state: an imposed tangential vector potential also constrains normal magnetic flux. The earlier cavity discussion permitted compatible initially trapped flux. A variational treatment must preserve the intended sector rather than eliminate it by an unannounced potential boundary restriction.

## Worked example: electrostatic minimization is a separate reduction

For a bounded grounded region with fixed regular charge, consider the static functional

$$I[\phi]=\int\left(\frac{\varepsilon_0}{2}|\nabla\phi|^2-\rho\phi\right)dV,$$

with zero boundary potential. Its Euler–Lagrange equation is Poisson's equation. Suppose a sufficiently regular solution exists, and compare it with another admissible potential differing by a function that vanishes on the boundary.

Expanding the functional difference gives a linear cross term, the charge term and a positive gradient square. Integration by parts and the solution equation cancel the first two, leaving

$$I[\phi+h]-I[\phi]=\frac{\varepsilon_0}{2}\int|\nabla h|^2\,dV.$$

Thus this static fixed-boundary functional has a unique minimum on the regular admissible class: zero gap forces constant perturbation, and the boundary makes that constant zero. This is a convexity and uniqueness result, not a proof that every Lorentzian field-action history minimizes action.

At a grounded stationary solution, the functional value is negative the electrostatic field energy, because Poisson and integration by parts relate the charge-potential integral to twice that energy. The functional being minimized and the stored energy are therefore not interchangeable quantities when the source is held fixed. Their different source term explains why their roles differ.

## Hamiltonian variables and Gauss constraint

Canonical momentum conjugate to the spatial vector potential is negative vacuum permittivity times electric field. Momentum conjugate to scalar potential is zero, because the Lagrangian contains no scalar-potential time derivative. This is a constraint, not a missing independent physical oscillator.

Perform the Legendre expression and integrate the scalar-gradient term by parts, retaining or eliminating its boundary contribution according to the chosen data. With a vanishing relevant boundary term, the Hamiltonian is

$$H=\int\left(\frac{|\pi|^2}{2\varepsilon_0}+\frac{|B|^2}{2\mu_0}-J\cdot A+\phi(\rho+\nabla\cdot\pi)\right)dV.$$

Varying scalar potential imposes Gauss in the equivalent form divergence of canonical momentum plus charge density equal to zero. Thus the scalar potential acts as a multiplier for that constraint. Treating its zero conjugate momentum as permission to erase the scalar variable would again discard a physical source law.

In a source-free whole-space Coulomb gauge with appropriate decay, scalar potential can be zero and the vector potential is transverse. At a nonzero spatial Fourier wave vector, only two independent transverse components remain; Gauss fixes the longitudinal electric component. Boundary modes, zero modes and nontrivial topology require their own accounting, so this local mode count is not a complete theorem about every cavity or manifold.

The positive physical field-energy Hamiltonian emerges on the constrained source-free sector. Its positivity is compatible with the indefinite action density because time evolution, constraints and a Legendre transform relate the two functionals. They solve different mathematical problems.

## Worked example: one transverse cavity mode

Take a region between perfectly conducting planes separated by distance $a$, with periodic transverse coordinates of total area $S_\perp$. Let the only vector-potential component be $A_y=q(t)\sin(\pi x/a)$ and take scalar potential zero. It is transverse, regular and has vanishing tangential electric field at the planes.

Its electric component is negative the mode-velocity times the sine, and its magnetic component is mode amplitude times wave number times the cosine. Integrating the action over the spatial region gives

$$L_{\mathrm{mode}}=\frac{S_\perp a}{4}\left(\varepsilon_0\dot q^2-\frac{k^2q^2}{\mu_0}\right),\qquad k=\pi/a.$$

The Euler–Lagrange equation is a harmonic oscillator with frequency light speed times wave number. Its Hamiltonian has the same two quadratic terms with a plus sign and equals the integrated physical field energy. The integral of either spatial sine square or cosine square is half the plane separation, fixing the normalization.

This is a classical mode reduction. No energy quantization has been assumed. Quantizing the resulting oscillator is a further physical and mathematical construction. The transverse periodic boundary is stated so the nonzero potential component does not accidentally violate an additional conducting end wall that was never included in the model.

## Translation currents and the physical stress-energy tensor

For a source-free Lagrangian with no explicit coordinate dependence, define the canonical translation tensor as derivative momentum times field derivative minus the Lagrangian diagonal term. A product-rule calculation proves its divergence vanishes on solutions: the mixed second derivatives cancel the chain-rule derivatives of the Lagrangian, leaving the Euler–Lagrange expression multiplied by a field derivative.

For electromagnetism this gives a conserved canonical tensor involving derivatives of the potential. It is not manifestly gauge invariant or symmetric. The physical tensor from chapter nine is obtained by an improvement:

$$T^{\mu\nu}=\Theta^{\mu\nu}+\frac1{\mu_0}\partial_\alpha(F^{\mu\alpha}A^\nu)$$

on source-free solutions. To check it, expand the derivative. The sourced-free Maxwell equation removes its derivative-of-field term, and the remaining potential derivative converts the canonical derivative into the antisymmetric field tensor. The resulting expression is exactly the earlier symmetric field-only tensor.

The improvement has antisymmetry in its two derivative-current indices, so its double divergence vanishes identically. Integrated momentum changes only by a surface contribution, which vanishes under suitable decay or must be included at a finite boundary. In a region with prescribed sources, additional terms and the source or matter momentum enter; the source-free proof does not establish separate conservation of field momentum during force exchange.

## Worked example: angular momentum in a uniform magnetic field

For a constant external vertical magnetic field, choose the symmetric vector potential. The coupled particle Lagrangian is invariant under rotations about that axis. Its canonical angular momentum equals mechanical axial angular momentum plus charge times magnetic induction times squared transverse radius divided by two.

Direct Lorentz-force torque gives the mechanical angular-momentum derivative as negative the derivative of that extra radius term. Their sum is conserved. Mechanical axial angular momentum alone can change, even though the external field has axial symmetry.

A different gauge can obscure the manifest rotational invariance of the Lagrangian. The changed Lagrangian differs by a total derivative, so the symmetry's boundary correction changes the canonical generator by the matching amount. The same physical conserved quantity remains. This is a concrete example of why a gauge-dependent canonical expression must be accompanied by its symmetry convention rather than treated as an observer-independent mechanical quantity.

The particle is again in the prescribed-field approximation. Radiation, field-source reaction and the apparatus maintaining a uniform field are excluded from this one-particle conservation statement. Including them requires the complete angular-momentum budget, not an assumption that the external source has zero role.

## Gauge fixing and the remaining data

Adding negative one half the squared Lorenz residual divided by vacuum permeability to the covariant density yields simple sourced wave equations for every potential component. Variation shows its residual-gradient term cancels the corresponding term from the original Maxwell potential equation.

Those gauge-fixed equations have more solutions unless compatible initial and boundary data are retained. For a conserved source, the Lorenz residual itself obeys the homogeneous wave equation. Setting both its initial value and initial time derivative to zero, with compatible boundary data, keeps it zero by wave uniqueness. The resulting potentials then solve the original Maxwell equations.

Thus gauge fixing is a controlled way to organize a calculation, not a replacement for Gauss constraints or a proof of every boundary problem's solvability. The book's source equations, potential constructions, energy balances and relativistic tensor description meet in this requirement: physical fields are specified by compatible sources and data, while redundant descriptions may be simplified only with their conditions stated.

## Exercises

### Exercise 1: scalar variation with boundary {#em-action-scalar-boundary-variation}

Derive the scalar-potential Euler–Lagrange equation on a fixed bounded region and retain its spatial boundary term. State two different ways to make that term harmless, and explain why they describe different variational data.

**Hint 1.** The electric variation is negative the scalar-variation gradient.

**Hint 2.** Integration by parts produces an outward-normal electric component.

**Solution.** The bulk coefficient is vacuum permittivity times electric divergence minus charge density. The spatial boundary term is negative vacuum permittivity times the integral of scalar variation times outward electric field. Fixing scalar potential makes its variation zero there; alternatively allowing arbitrary scalar variation would require zero outward electric component unless an added boundary action supplies a different source condition. The first is prescribed-potential data and the second is a natural flux condition. Their common interior equation does not make them the same physical boundary problem.

### Exercise 2: vector variation signs {#em-action-vector-curl-variation}

Derive the vector-potential equation from the coordinate-time action, including the time-endpoint term and spatial magnetic boundary term. Explain where the magnetic-curl minus sign comes from.

**Hint 1.** Integrate the electric variation in time and the magnetic curl variation in space.

**Hint 2.** Use the divergence of variation crossed with magnetic field.

**Solution.** The bulk coefficient is vacuum permittivity times electric time derivative minus magnetic curl divided by permeability plus current. The temporal endpoint term is negative vacuum permittivity times the spatial integral of electric field dotted with vector variation. The spatial term is vector variation dotted with outward normal crossed with magnetic field, divided by permeability. The curl term's bulk minus sign comes from the negative magnetic square already present in the Lagrangian, not from changing the Stokes orientation. Compact variations remove both boundary contributions and yield Ampere–Maxwell, while other variations require explicit boundary data or sources.

### Exercise 3: source conservation from gauge invariance {#em-action-gauge-source-equivalence}

For a prescribed regular source, prove the action is invariant under every compactly supported gauge change if and only if current is conserved. Explain why this is not an independent dynamics law for arbitrary imposed sources.

**Hint 1.** The field density does not change at all.

**Hint 2.** Integrate the source-current contraction with the gauge derivative by parts and use the fundamental lemma.

**Solution.** The entire change is the integral of current times gauge derivative, divided by light speed. Compact support removes its boundary term, leaving negative gauge function times current divergence. If divergence vanishes, every change is zero. Conversely, invariance for every smooth compact gauge function forces that divergence to vanish as a distribution, or pointwise when continuous. This is a compatibility condition on a prescribed source. A dynamical matter theory must supply the matter equations and the corresponding full symmetry identity; the gauge variation does not force an arbitrarily assigned inconsistent external current to become physically conserved.

### Exercise 4: particle coupling and endpoints {#em-action-particle-gauge-endpoints}

Show the particle coupling $-q\int A_\mu dx^\mu$ equals the usual coordinate-time coupling and changes by only an endpoint term under the book's gauge convention. State why its use with a particle's own singular field requires more work.

**Hint 1.** Lower the spatial potential indices before contracting with the displacement.

**Hint 2.** The gauge derivative along the worldline is a total derivative.

**Solution.** The contraction is scalar potential times time differential minus spatial vector potential dotted with spatial displacement. The leading negative charge therefore gives the standard positive current-like velocity coupling and negative scalar coupling. The gauge change adds charge times the gauge function's final-minus-initial value, so fixed-endpoint variations leave the trajectory equation unchanged. This derivation is finite for a smooth external potential on the worldline. The self-potential of an ideal point charge is singular there, and the combined field self-action diverges. An extended-source or justified regularization scheme is needed before treating that formal self-coupling as a complete dynamical theory.

### Exercise 5: the scalar constraint {#em-action-hamiltonian-gauss-constraint}

Compute the canonical momenta of scalar and vector potentials and derive the Gauss constraint from the Hamiltonian multiplier. Explain why the scalar variable cannot simply be deleted because its conjugate momentum vanishes.

**Hint 1.** Electric field contains negative vector-potential time derivative but no scalar-potential time derivative.

**Hint 2.** Integrate the scalar-gradient term in the Legendre expression by parts.

**Solution.** Vector canonical momentum is negative vacuum permittivity times electric field, and scalar canonical momentum is zero. After the stated boundary handling, scalar potential multiplies charge density plus divergence of vector momentum. Varying it imposes that sum equal to zero, exactly electric Gauss. Deleting the multiplier before imposing this condition would allow unphysical longitudinal initial fields, like the frozen constraint error example in chapter four. The vanishing scalar momentum identifies a constrained variational system rather than an irrelevant source equation.

### Exercise 6: variable positive permittivity {#em-action-positive-dielectric-minimum}

For a real smooth positive scalar permittivity bounded below away from zero, derive the fixed-Dirichlet electrostatic equation from the functional with density $\varepsilon(x)|\nabla\phi|^2/2-\rho\phi$. Prove a regular solution is its unique minimizer on a connected bounded region.

**Hint 1.** Keep permittivity inside the divergence after integration by parts.

**Hint 2.** The exact functional gap is the weighted gradient square of a zero-boundary perturbation.

**Solution.** Variation gives negative divergence of permittivity times potential gradient minus charge density equal to zero. At a solution, expansion by a zero-boundary perturbation cancels the linear terms and leaves one half the integral of permittivity times squared perturbation gradient. The positive lower bound makes that gap nonnegative and forces zero gradient when it vanishes. Connectedness makes the perturbation constant, and its boundary value makes it zero. This proves uniqueness and minimization conditional on regular existence. Replacing positive permittivity by an arbitrary sign-changing effective parameter would remove this coercive argument and cannot inherit the same conclusion.

### Exercise 7: the reduced mode oscillator {#em-action-mode-oscillator-energy}

For the mode reduction in the worked example, derive its equation of motion and conserved Hamiltonian. Identify the normalization obtained from the spatial integrals and explain why no quantum energy levels follow yet.

**Hint 1.** The sine-square and cosine-square integrals both equal half the plane separation.

**Hint 2.** Treat the mode amplitude as an ordinary single generalized coordinate.

**Solution.** The effective mass coefficient is vacuum permittivity times transverse area times plane separation divided by two. The restoring coefficient is the same geometric factor times squared wave number divided by permeability. Their ratio gives squared frequency equal to squared light speed times squared wave number. The Hamiltonian is the sum of the two positive mode quadratics and is conserved for this undriven classical oscillator. Its allowed energies remain continuous. Quantization requires an additional quantum prescription, not merely the observation that a field mode has harmonic time dependence.

### Exercise 8: derive the canonical translation current {#em-action-canonical-translation-proof}

For a regular source-free field Lagrangian with no explicit coordinate dependence, prove the canonical translation tensor has zero divergence on Euler–Lagrange solutions by an explicit product-rule calculation.

**Hint 1.** Differentiate momentum times field derivative and the diagonal Lagrangian term separately.

**Hint 2.** The second field derivatives cancel against the chain rule for the Lagrangian.

**Solution.** The differentiated product contains derivative of conjugate field momentum times field derivative plus momentum times a mixed second field derivative. The Lagrangian chain rule contains the same mixed-derivative term and its field-coordinate derivative term. Their cancellation leaves the difference between divergence of field momentum and the Lagrangian's field derivative, multiplied by the translated field derivative. Euler–Lagrange sets that coefficient to zero. If a prescribed source introduces explicit coordinate dependence, the cancellation leaves corresponding external terms, so separate field translation conservation no longer follows. The complete matter-plus-field system has its own translation statement when that full action is symmetric.

### Exercise 9: improvement and boundary momentum {#em-action-stress-improvement-boundary}

Prove an improvement of a current by the divergence of a tensor antisymmetric in its first two indices does not change its divergence. Explain when its integrated charge is unchanged and when a boundary contribution must be retained.

**Hint 1.** The two derivatives commute and are symmetric in those indices.

**Hint 2.** On a constant-time slice the temporal-temporal improvement vanishes, leaving a spatial divergence.

**Solution.** The double divergence contracts a symmetric derivative pair with an antisymmetric tensor, giving zero. The integrated temporal current changes by a spatial boundary integral, since the repeated temporal antisymmetric component vanishes. Appropriate decay at infinity or a boundary condition making that integral zero preserves the total charge. At a finite wall or interface with nonzero term, the boundary contribution must be included rather than discarded. Thus canonical and improved electromagnetic momenta agree globally only with their actual boundary accounting; equality of divergences alone is not equality of every finite-region integral.

### Exercise 10: gauge-fixed equations and compatible initial data {#em-action-lorenz-gauge-initial-data}

The Lorenz-gauge-fixed action gives $\Box A^\mu=\mu_0J^\mu$. For conserved regular current, derive the residual equation and prove zero residual initial value and time derivative preserve the original Maxwell equations under compatible wave boundary conditions.

**Hint 1.** Take four-divergence of the potential wave equation.

**Hint 2.** Homogeneous wave uniqueness keeps the residual zero from zero initial data.

**Solution.** Commuting derivatives gives the wave operator of the Lorenz residual equal to vacuum permeability times current divergence, which vanishes. Its zero initial value and derivative, together with boundary conditions admitting the usual wave uniqueness argument, force it to stay zero. Substituting that result into the unfixed potential equations recovers the original sourced Maxwell equation; the homogeneous equations still follow from the potential identities. Without those compatible data the gauge-fixed wave equations can retain an unwanted residual and need not describe the original constrained system. Simplifying the differential operator therefore does not remove the obligation to specify physical and gauge data consistently.
