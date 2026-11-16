
# Maxwell Equations and Conservation

Static electric and magnetic laws describe important limiting regimes, but a changing capacitor or an electromagnetic pulse requires a dynamical system. Maxwell's equations combine source constraints with evolution equations. They also identify how energy and momentum move between fields, charges and boundaries. This chapter derives those balances while distinguishing uniqueness of a sufficiently regular solution from existence of one for arbitrary data.

We use SI, total microscopic charge and current, right-handed spatial orientation, and fixed spatial domains unless a moving loop is explicitly introduced. Assume the smoothness needed for the derivatives, integral theorems and time differentiation below. Singular particles and sheets can satisfy integral or distributional versions, but nonlinear self-products of their fields require additional treatment. A square-integrable field-energy argument cannot silently include a divergent point-charge self-field.

## Sources, constraints and evolution

The vacuum equations are

$$
\nabla\cdot E=\rho/\varepsilon_0,\qquad \nabla\cdot B=0,
$$

$$
\partial_tB=-\nabla\times E,\qquad
\partial_tE=c^2\nabla\times B-J/\varepsilon_0,
\qquad c^{-2}=\varepsilon_0\mu_0.
$$

The divergence equations constrain a spatial field configuration and its sources. The curl equations specify its time derivatives. They are related by compatibility, but one cannot discard the constraints and expect evolution to repair arbitrary initial errors.

The static sourced curl equation alone would force current divergence to vanish. When charge changes, continuity instead requires current divergence to cancel that change. The added electric time derivative in the Ampere–Maxwell law has exactly the divergence needed when the electric Gauss law is imposed. This compatibility motivates the correction, but charge conservation by itself does not uniquely derive every aspect of Maxwell's theory. The complete electromagnetic laws are physical postulates whose consequences we are exploring.

Take divergence of the Ampere–Maxwell law and use the electric Gauss law. Commuting derivatives under the stated smoothness gives charge continuity. Conversely, if sources satisfy continuity and the curl evolution equations hold, define the two constraint residuals. Their time derivatives vanish:

$$
\partial_t(\nabla\cdot B)=0,\qquad
\partial_t(\nabla\cdot E-\rho/\varepsilon_0)=0.
$$

For the first, divergence of the Faraday curl is zero. For the second, divergence of the electric evolution equation is negative current divergence divided by vacuum permittivity; subtracting the density derivative cancels it by continuity. Thus initially correct constraints remain correct wherever the regular evolution exists. Initially incorrect residuals remain present. Constraint preservation is not a cleaning mechanism.

## Flux laws and a moving circuit

Integrating the local equations over fixed regions and surfaces yields the familiar charge-flux, magnetic-flux and circulation laws. In particular a fixed oriented surface has induced electric circulation equal to the negative time derivative of its magnetic flux. Passing the time derivative through its fixed-domain integral requires the corresponding time regularity.

A moving material loop measures a different electromotive force. Charges in the moving wire experience a magnetic contribution in addition to the electric field. With loop velocity $v_c$ and matched moving surface, the force-per-charge circulation is

$$\mathcal E=\oint_{C(t)}(E+v_c\times B)\cdot dl
=-\frac{d}{dt}\int_{S(t)}B\cdot n\,dS.$$

The flux derivative contains both field change and change in the surface. For a smooth deformation, the thin ribbon swept by a boundary element supplies the geometric contribution. With the stated orientation it subtracts the boundary integral of velocity crossed with magnetic field. Combining this transport identity with fixed-surface Faraday gives the displayed equation. Zero magnetic divergence makes the flux independent of compatible choices of spanning surface.

A quick sign check is an expanding horizontal circular loop in an upward uniform field. Outward radial velocity crossed with the field points in the negative azimuthal direction. Its circulation is negative, while upward magnetic flux increases. The negative flux derivative has the same sign. This checks the geometric term without pretending the fixed-surface electric circulation and the moving-wire electromotive force are identical quantities.

The moving-loop rule presumes a consistently defined material circuit and sufficient smoothness. Sliding contacts require identifying which parts move and which conducting path is actually closed. An arbitrary moving contour drawn through empty space need not describe an electrical device with the same carrier constraints.

## Derive electromagnetic energy balance

Dot the magnetic curl equation with the electric field. After dividing by vacuum permeability it relates electric field dotted with magnetic curl to electrical work density and the time derivative of electric energy density. Dot Faraday's equation with the magnetic field and use the divergence identity from chapter one. Combining the two gives

$$\partial_tu+\nabla\cdot S=-J\cdot E,$$

$$u=\frac{\varepsilon_0|E|^2}{2}+\frac{|B|^2}{2\mu_0},\qquad
S=\frac{E\times B}{\mu_0}.$$

For clarity, the product identity says the divergence of the cross product is magnetic field dotted with electric curl minus electric field dotted with magnetic curl. Faraday turns the first term into the negative magnetic-energy derivative; Ampere–Maxwell turns the second into the negative electrical work term and the negative electric-energy derivative. The signs therefore follow from the two physical curl laws and one proved vector identity.

The density is nonnegative and has energy per volume units. The Poynting vector has power per area units. For a fixed bounded region, integrating gives field-energy change equal to negative outward energy flux minus work delivered to charges. Positive electrical work density removes field energy. If a passive Ohm law is an adequate material closure, the work term is nonnegative and appears as heating or another material energy gain.

For discrete nonsingular external fields acting on particles, electric force dotted with velocity gives the mechanical power. The magnetic force has zero velocity dot product. Summing or passing to a suitable continuum gives the same electrical work term. Complete energy conservation therefore requires including matter and any external devices maintaining currents or boundary voltages. Field energy alone generally changes during an interaction.

The standard Poynting expression is gauge independent because it uses physical fields. A scalar local continuity equation alone does not uniquely identify a flux: adding a divergence-free term would preserve that one equation. Here the conventional expression is derived directly from Maxwell's fields and their standard energy density. An exercise separates that freedom of rewriting a balance from a physical claim that every such rewrite measures the same local energy transfer.

## Momentum and Maxwell stress

Fields also carry momentum density

$$g=\varepsilon_0E\times B=S/c^2.$$

Define the Maxwell stress tensor by

$$
\sigma_{ij}=\varepsilon_0(E_iE_j-\delta_{ij}|E|^2/2)
+\mu_0^{-1}(B_iB_j-\delta_{ij}|B|^2/2).
$$

Our tensor convention is that its traction on a surface normal is the tensor multiplied by that normal. The associated outward flux of field momentum is the negative of this stress. Stating the convention avoids a common sign ambiguity when comparing a stress tensor with a momentum-flux tensor.

We prove its balance componentwise. For any smooth vector field, the divergence of its dyadic square minus half its squared norm times the identity is the field multiplied by its divergence minus the field crossed with its curl. This follows by the product rule and the identity relating the gradient of squared norm to a directional derivative and a curl. Apply it to both electric and magnetic terms. Gauss' laws produce charge density times electric field and no magnetic-charge term.

The remaining electric curl is negative magnetic time derivative. The magnetic curl is vacuum permeability times current plus the electric time derivative divided by squared light speed. Their cross products combine into current crossed with magnetic field plus the time derivative of momentum density. Therefore

$$\nabla\cdot\sigma=\rho E+J\times B+\partial_tg.$$

Writing the Lorentz force density as $f=\rho E+J\times B$ gives

$$\partial_tg-\nabla\cdot\sigma=-f.$$

Integrating over a fixed region says field momentum changes through boundary traction and momentum exchange with matter. Adding the corresponding matter equation cancels the internal Lorentz force. External material stresses, particles crossing the boundary and imposed devices must still be included in a complete system balance.

The tensor is symmetric, consistent with the ordinary field contribution to angular-momentum balance. A full material angular-momentum model can also carry internal spin or couple stresses; the vacuum Maxwell tensor does not supply those constitutive choices. Relativity later places the energy flux, momentum density and negative spatial stress into one stress-energy tensor with a fixed metric convention.

## A causal-looking local bound, with its exact meaning

At every point of a real vacuum field,

$$|S|\le cu.$$

Indeed, the cross-product magnitude is at most the product of the field magnitudes. Arithmetic-geometric mean applied to the two nonnegative energy terms then bounds their sum below by the product divided by vacuum permeability and light speed. Equality for a nonzero field requires perpendicular electric and magnetic fields with electric magnitude equal to light speed times magnetic magnitude.

A plane travelling wave satisfies these equalities, but the converse is not a global propagation theorem. Static uniform crossed fields can satisfy them at a point or throughout an ideal infinite region. To infer a wave one needs the spacetime dependence and Maxwell equations, not just one algebraic ratio. The next chapter derives the wave equations and plane-wave structure rather than replacing that derivation by the energy-flux bound.

## Worked example: energy enters a charging capacitor

Consider circular parallel plates of radius $a$, small separation $d$, and slowly changing charge. Away from the edges, use the leading quasistatic model of uniform axial electric field and negligible fringing. The charge-change timescale is long compared with light travel across the device. These are approximation assumptions, not a complete high-frequency boundary solution.

In the vacuum gap, the conduction current is zero but the electric time derivative is not. Its displacement-current flux through an interior circular area is the charging current times that area's fraction of plate area. Ampere–Maxwell then gives $B_\theta=\mu_0Is/(2\pi a^2)$ within the plate radius. At the plate edge the field takes the corresponding full-current value.

The electric field points axially and the magnetic field azimuthally, so their cross product points radially inward when energy is being stored. Integrating inward Poynting flux across the cylindrical side of the gap gives the electric field times current times plate separation, namely voltage times current. Directly differentiating the leading gap energy gives the same result:

$$U=\frac{\varepsilon_0E^2}{2}\pi a^2d,\qquad \frac{dU}{dt}=VI.$$

The calculation explains why energy transfer is not exhausted by following charges into the metal plates. Energy flows through the electromagnetic field into the gap. If the current varies rapidly, omitted induction and fringe corrections matter; a uniform instantaneous electric-field model is then inadequate. For a constant charging current the gap formulas satisfy the local curl evolution in the ideal interior, but the complete finite device still has edges and supply geometry.

## Worked example: energy enters a resistive cylinder

A long uniform cylindrical conductor of radius $a$ and considered length $\ell$ obeys a steady scalar Ohm law with positive conductivity. Neglect end effects in this central segment. Axial current density is uniform, so the axial electric field is current divided by conductivity and cross-sectional area. The magnetic field at the cylindrical wall is the straight-current value.

The resulting Poynting vector points radially inward. Its integrated inward flux across the side is

$$P=EI\ell=VI=\frac{I^2\ell}{\sigma_c\pi a^2}.$$

Inside the conductor the azimuthal magnetic field is proportional to radius, so the inward radial Poynting vector is also proportional to radius. Its divergence is negative current density dotted with electric field. The field-energy density is time independent in this steady model, and the inward flux exactly supplies the material work term.

This is a local long-wire model within a complete driven circuit. The voltage source supplies the energy, and the material converts electrical work to heat under the stated Ohm closure. Maxwell equations alone do not derive a positive conductivity or a temperature evolution law. Nor does the calculation claim that end contacts have no field; it specifies why their effects are neglected in this segment.

## Worked example: radiation pressure from stress

Take a vacuum plane wave travelling in the positive horizontal direction, with transverse electric and magnetic fields satisfying the wave magnitude ratio. Its Poynting vector is forward, while the longitudinal Maxwell stress is negative energy density. Time-averaged forward momentum flux is therefore the mean energy flux divided by light speed.

A perfectly absorbing stationary surface receiving the wave acquires pressure equal to incident intensity divided by light speed when no additional outgoing flux carries away that longitudinal momentum. A perfect specular reflector reverses the longitudinal momentum flux, doubling the pressure. This is a classical stress balance; no photon postulate is needed for the result.

For an ideal perfectly conducting reflector at normal incidence, the tangential electric fields of incident and reflected waves cancel at the surface, while their tangential magnetic fields add. The magnetic stress at the wall gives the same doubled mean pressure. Absorption and reflection are different material boundary models. Heating, motion, oblique incidence or transmission require including their actual energy and momentum channels instead of retaining the same coefficient automatically.

## Energy uniqueness in a closed cavity

Suppose two sufficiently smooth Maxwell solutions have the same sources and initial fields in a bounded cavity, and both satisfy zero tangential electric field at its perfectly conducting wall. Subtract them. The difference satisfies homogeneous source equations with zero initial fields and the same homogeneous electric boundary condition.

Apply Poynting's theorem to that difference. The boundary flux vanishes because its normal component is proportional to the tangential electric field crossed with the magnetic field. Thus the nonnegative difference-field energy is constant and initially zero. Both difference fields vanish everywhere. This proves uniqueness in the specified regularity class. It does not construct a solution or settle all compatibility conditions needed for existence.

The wall condition by itself does not require zero normal magnetic field. An initially trapped static magnetic flux may remain; Faraday evolution preserves its compatible boundary behavior. Confusing a perfect conductor with an additional flux-expulsion model would incorrectly remove such initial states. The energy proof compared equal initial fields, so this distinction causes no uniqueness failure.

For a continuum extension of these balances, see the separate [electromagnetic field-balance chapter](../fields-fluids-continuum/electromagnetic-field-balance.md). It places them beside material transport and interfaces. Our derivations here use the fixed vacuum conventions needed for the later Lorentz-covariant organization.

## Exercises

### Exercise 1: an incompatible changing source {#em-maxwell-changing-charge-no-current}

A proposed smooth source has spatially uniform charge density $\rho(t)=\rho_0+\alpha t$ on an open region and zero current there, with nonzero constant $\alpha$. Prove it cannot satisfy all four Maxwell equations in that region.

**Hint 1.** Maxwell equations imply continuity wherever the required derivatives commute.

**Hint 2.** The proposed density derivative cannot be canceled by current divergence.

**Solution.** Divergence of Ampere–Maxwell, followed by the electric Gauss equation, yields density time derivative plus current divergence equal to zero. The proposed source instead gives their sum as the nonzero constant. Therefore no sufficiently smooth pair of fields satisfies the complete system on that open region. This is an interior incompatibility, not an issue that boundary data can repair. A model with charge entering from elsewhere needs a nonzero local current divergence to represent the changing density, or a different source law explicitly outside ordinary charge conservation.

### Exercise 2: frozen constraint errors {#em-maxwell-constraint-not-cleaning}

Set sources to zero and take initial fields $E=\kappa(x,y,z)$, $B=0$ with nonzero constant $\kappa$. Show these time-independent fields satisfy the two curl evolution equations but fail an initial constraint, and explain the lesson.

**Hint 1.** The electric field is a gradient, so its curl vanishes.

**Hint 2.** Its divergence is three times its coefficient.

**Solution.** Both curls and both time derivatives vanish, so the two evolution equations hold for these static fields. But electric divergence is $3\kappa$, contradicting zero source density. The evolution does not change this discrepancy, in agreement with the residual propagation calculation. Thus solving only the curl equations with arbitrary initial data produces fields that need not solve Maxwell's complete system. The example is local and has infinite global energy if extended over all space; finite-energy assumptions were not used to establish this constraint failure.

### Exercise 3: uniform changing induction {#em-maxwell-uniform-changing-magnetic-field}

An ideal field has $B=(B_0+\alpha t)\hat z$ throughout a cylindrical observation region. Find an axisymmetric azimuthal electric field regular at its axis that satisfies Faraday's law. State what freedom and global limitation remain.

**Hint 1.** Use a fixed circular contour of radius $s$.

**Hint 2.** Its magnetic flux derivative is $\alpha\pi s^2$.

**Solution.** Faraday gives $2\pi sE_\theta=-\alpha\pi s^2$, so $E_\theta=-\alpha s/2$. This is regular at the axis when written in Cartesian components. Adding the gradient of any sufficiently regular scalar does not change its curl, so Faraday alone does not uniquely fix the electric field. Here the time derivative is constant and the constructed electric field is time independent, compatible with the local vacuum Ampere evolution for uniform magnetic field. Extending the ideal fields to infinity gives infinite energy and unbounded electric magnitude, so a finite apparatus requires additional source and boundary structure.

### Exercise 4: a sliding bar power balance {#em-maxwell-moving-bar-power}

A conducting bar of length $L$ slides at constant speed $v$ perpendicular to itself along fixed rails in a uniform perpendicular magnetic field of magnitude $B$. The closed circuit has resistance $R>0$. Neglect inductive transients and friction. Derive the electromotive force magnitude, current, magnetic drag and required mechanical power.

**Hint 1.** The moving bar sweeps magnetic area at rate $Lv$.

**Hint 2.** Its current experiences force magnitude $ILB$, opposing the imposed motion.

**Solution.** The motional electromotive force magnitude is $BLv$, so the quasistatic current is $BLv/R$. The bar force has magnitude $ILB$ and opposes motion by the flux-change sign. External power is therefore $ILBv$, equal to $I$ times electromotive force and hence to $I^2R$. The magnetic force does no work on each carrier along that carrier's total instantaneous velocity; constraints and electric fields distribute the work supplied by the moving apparatus. There is no contradiction between that microscopic perpendicularity and mechanical energy being converted into circuit heating. The neglected inductive transient would require an additional stored-field energy term.

### Exercise 5: perfectly conducting walls and magnetic flux {#em-maxwell-pec-trapped-flux}

Explain why zero tangential electric field on a cavity wall does not imply zero normal magnetic field there. Give a static field example compatible with the source-free interior equations and state why it does not contradict the energy uniqueness proof.

**Hint 1.** A uniform static magnetic field with zero electric field solves the interior vacuum equations.

**Hint 2.** The uniqueness comparison requires the same initial magnetic field as well as the same electric boundary condition.

**Solution.** A constant magnetic field and zero electric field have zero curls, zero divergences and zero time derivatives. They satisfy the tangential electric wall condition even though the magnetic normal component is generally nonzero on portions of a closed cavity boundary. This describes compatible initially trapped flux in the perfect-conductor model, rather than imposing a separate flux-expulsion condition. The zero-field solution has different initial magnetic data. The uniqueness theorem never compared those distinct initial conditions, so the example does not violate it. Specifying the physical wall model and initial flux prevents the mistaken inference.

### Exercise 6: a balance does not uniquely name a flux {#em-maxwell-divergence-free-flux-shift}

Let $G$ be a twice continuously differentiable vector field. Show replacing a Poynting vector by $S+\nabla\times G$ preserves its local scalar energy balance and total flux through a closed smooth surface. Explain what this mathematical observation does not prove about physical energy transport.

**Hint 1.** Divergence of a curl vanishes.

**Hint 2.** Apply the divergence theorem to the added term on a closed surface.

**Solution.** The local divergence is unchanged by the added curl, so the same energy density and work term still satisfy the scalar equation. The added closed-surface flux is the volume integral of its zero divergence and therefore vanishes when the field is regular throughout the enclosed region. This is a freedom in writing one continuity relation. It does not identify every modified local vector as the standard physical flux associated with Maxwell's field energy and stress. The conventional Poynting vector is obtained by the stated field derivation, with its relation to momentum and boundary forces. An excluded singularity would also require revisiting the closed-surface argument's regularity hypothesis.

### Exercise 7: static crossed fields {#em-maxwell-static-crossed-field-flux}

For constant fields $E=E_0\hat x$ and $B=B_0\hat y$ in a source-free observation region, compute energy density, energy flux and their divergences. Explain why nonzero energy flux alone does not establish heating or a travelling wave.

**Hint 1.** The cross product points in the third coordinate direction.

**Hint 2.** Every spatial and time derivative of these ideal fields vanishes.

**Solution.** The energy density is the sum of the two constant positive quadratic terms, and the Poynting vector is $E_0B_0\hat z/\mu_0$. Its divergence and the density time derivative both vanish, matching zero electrical work. Energy entering one side of a bounded observation region leaves another, with no net accumulation in this local idealization. The fields have no travelling phase or temporal variation. Even choosing their magnitudes to saturate the local flux bound does not change that fact. Their extension to all space has infinite energy, so a finite physical realization must include its sources and boundaries.

### Exercise 8: stress directions {#em-maxwell-uniform-field-stress}

For a uniform electric field along the third axis and zero magnetic field, find the diagonal entries of Maxwell stress in terms of electric energy density. Repeat for a magnetic field along that axis with zero electric field. Explain the units.

**Hint 1.** The field dyadic has only its third diagonal component nonzero.

**Hint 2.** Subtract half the squared field magnitude in every diagonal direction.

**Solution.** For either pure field, the transverse entries are negative the corresponding energy density and the longitudinal entry is positive that density. All off-diagonal entries vanish. Thus the field has a longitudinal tension and transverse compressive traction under our stress convention. Energy per volume has units joules per cubic metre, equal to newtons per square metre, so the same coefficient has the correct stress units. This stress is not the outward momentum-flux tensor; the latter carries the opposite spatial sign in our balance equation. That distinction is needed when computing radiation pressure.

### Exercise 9: the energy-flux bound {#em-maxwell-flux-bound-equality}

Prove the local inequality $|S|\le cu$ and characterize all equality cases, including zero fields. Explain why its proof uses no derivatives.

**Hint 1.** First bound cross-product magnitude by the product of magnitudes.

**Hint 2.** Apply the arithmetic-geometric mean inequality to the electric and magnetic energy terms.

**Solution.** Cross-product magnitude is at most the product of field magnitudes, with equality for nonzero perpendicular vectors. The sum of the two nonnegative energy terms is at least twice the square root of their product, which equals that product of magnitudes divided by vacuum permeability and light speed. Combining the bounds gives the result. For a nonzero field, equality requires perpendicular fields and electric magnitude equal to light speed times magnetic magnitude. If both fields are zero, equality also holds; if only one is zero, energy is positive and flux zero, so the inequality is strict. This is a pointwise algebraic statement and therefore does not prove propagation without the differential equations.

### Exercise 10: dissipation without an unjustified final-state claim {#em-maxwell-passive-conductivity-estimate}

On a periodic spatial box, assume sufficiently smooth Maxwell fields with $J=\sigma_cE$, constant conductivity $\sigma_c>0$, and compatible charge continuity. Derive a field-energy decay identity and a bound on the time integral of squared electric field. Does this alone force the entire electromagnetic energy to tend to zero?

**Hint 1.** Opposite periodic faces cancel the Poynting boundary flux.

**Hint 2.** A nonzero constant magnetic field with zero electric field is a possible surviving state.

**Solution.** Integration gives energy derivative equal to negative conductivity times the volume integral of squared electric field. Energy is nonnegative, so integrating over any time interval bounds conductivity times the space-time electric square integral by the initial field energy. Letting the final time increase gives the same bound over the infinite time interval whenever the smooth solution exists globally. This estimate does not force total energy to vanish: a constant magnetic field with zero electric field has positive constant energy and no dissipation. Nor does finite time-integrated electric energy by itself prove pointwise convergence in time without additional control. The exact balance and the remaining analytical question are separate conclusions.
