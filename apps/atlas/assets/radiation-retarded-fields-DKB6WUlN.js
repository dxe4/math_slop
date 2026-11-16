var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: radiation-retarded-fields
title: "Radiation and Retarded Fields"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Radiation and Retarded Fields

Radiation is identified by an outward field-energy flux that survives at large observation distance. A nonzero Poynting vector near a source is not enough: static crossed fields and the bound field of a moving charge can transport energy locally without producing a finite outgoing radiative power at infinity. The distance dependence and the source history distinguish these situations.

We derive retarded point-charge fields for a prescribed smooth subluminal trajectory, then obtain radiation power and the controlled electric-dipole approximation for a small extended source. The point trajectory is externally specified. These results do not supply a finite self-force law by evaluating the singular field on that same trajectory. Radiation reaction and source maintenance remain separate energy-accounting questions.

## A unique retarded point on a worldline

Let a charge follow a three-times continuously differentiable trajectory defined for the past times needed, with speed uniformly bounded below light speed. At an observation event away from that trajectory, retarded time satisfies

$$t_r=t-R(t_r)/c,\\qquad R(t_r)=|x-z(t_r)|.$$

Let the source-to-observer unit direction be $n$, dimensionless source velocity be $\\beta$, and $\\kappa=1-n\\cdot\\beta$, all evaluated at retarded time. The uniform speed bound makes this last factor strictly positive. The function whose zero defines retarded time has derivative negative that factor, so it is strictly decreasing.

For a trajectory extending sufficiently far into the past with the same uniform speed bound, this function is positive far enough in the past and negative at the observation time. The intermediate value theorem gives existence and monotonicity gives uniqueness. For a trajectory specified only on a finite interval, one must instead require that the past light cone intersects that interval; a source cannot be invented outside its declared history.

Implicit differentiation gives

$$\\partial_tt_r=1/\\kappa,\\qquad\\nabla t_r=-n/(c\\kappa),\\qquad\\nabla R=n/\\kappa.$$

These are observer derivatives, not derivatives with source position held fixed. The factor accounts for the movement of the source while its light-travel delay is changing. Ignoring it is the source of an incorrect moving-charge version of the Coulomb formula.

## Derive the Lienard–Wiechert potentials

The point source is represented by charge times a delta on its trajectory, with current equal to that charge times trajectory velocity times the same spatial delta. This pair satisfies distributional continuity for a constant charge on a continuous worldline. It does not describe charge appearing at an unaccounted endpoint.

Insert the source into the retarded Green integral before eliminating source time. The temporal delta has argument observation time minus source time minus source-dependent travel time. Its derivative at the unique root has magnitude equal to the positive retarded factor. The change-of-variable rule for a delta therefore gives

$$\\phi=\\frac{q}{4\\pi\\varepsilon_0\\kappa R},\\qquad
A=\\frac{\\phi\\beta}{c}.$$

These are the Lienard–Wiechert potentials in SI. The denominator is not just the instantaneous geometric distance and not even just the distance to a retarded source point. The additional factor arose from an exact delta-function Jacobian. It is essential to source conservation and the correct relativistic fields.

The formulas are ordinary smooth potential expressions away from the trajectory under sufficient source regularity, and distributional expressions globally. Their singularities at the charge are retained. Any later multiplication, energy integral or force evaluation must respect that distinction.

## Differentiate the potentials completely

Set $D=\\kappa R$ and let a dot on source velocity denote derivative with respect to source time, evaluated at the retarded event. The required derivatives are

$$\\nabla D=-\\beta+\\frac n\\kappa\\left(1-|\\beta|^2+\\frac R c n\\cdot\\dot\\beta\\right),$$

$$\\frac{\\partial_tD}{c}=\\frac{|\\beta|^2-n\\cdot\\beta-(R/c)n\\cdot\\dot\\beta}{\\kappa}.$$

To obtain them, write the denominator as distance minus source-to-observer displacement dotted with dimensionless velocity. Differentiate both the displacement and the velocity through retarded time, using the implicit derivatives just proved. The geometric distance derivative and the velocity derivative contribute separate terms; neither may be omitted while keeping the same denominator.

Negative scalar gradient plus negative vector-potential time derivative then equals the Coulomb coefficient times the sum of the denominator-gradient and velocity-weighted denominator-time-derivative terms, divided by its square, minus the direct retarded velocity-derivative term. Combining them and using the vector triple-product identity yields

$$E=\\frac q{4\\pi\\varepsilon_0}\\left[\\frac{(1-|\\beta|^2)(n-\\beta)}{\\kappa^3R^2}
+\\frac{n\\times((n-\\beta)\\times\\dot\\beta)}{c\\kappa^3R}\\right],\\qquad
B=\\frac{n\\times E}{c}.$$

For the electric numerator, the acceleration combination before its cross-product rewrite is $(n-\\beta)(n\\cdot\\dot\\beta)-\\kappa\\dot\\beta$. This is exactly the triple product displayed above. The nonacceleration terms combine to $(1-|\\beta|^2)(n-\\beta)$. These intermediate identities make the reduction checkable rather than asserting a remembered final formula.

The first term decays as inverse distance squared and is called the velocity field. The second decays as inverse distance and is the acceleration or radiation field. Both use the same retarded event. This separation is useful in the far zone, but neither term is an independent source solution with arbitrary data. The full fields and their source satisfy Maxwell's system together.

## Radiation power in the instantaneous rest frame

At a source event where the particle is instantaneously at rest, the radiation field reduces to

$$E_{\\mathrm{rad}}=\\frac q{4\\pi\\varepsilon_0c^2R}\\,n\\times(n\\times a),\\qquad
B_{\\mathrm{rad}}=n\\times E_{\\mathrm{rad}}/c.$$

It is transverse, and its energy flux is outward. The power per solid angle is

$$\\frac{dP}{d\\Omega}=\\frac{q^2a^2\\sin^2\\theta}{16\\pi^2\\varepsilon_0c^3},$$

where the angle is measured from acceleration. Integrating over the sphere gives the Larmor result

$$P=\\frac{q^2a^2}{6\\pi\\varepsilon_0c^3}.$$

The angular integral is the full azimuthal turn times the integral of one minus squared polar cosine from negative one to one, giving eight pi over three. Thus the coefficient follows from the derived far field and Poynting flux, not from dimensional analysis alone.

Velocity-field square and its cross term with radiation decay too rapidly to contribute a finite power through a sphere as its radius grows at fixed retarded source history. They can still store or transport energy near the charge. The limiting outgoing power isolates the inverse-distance field under the stated smooth prescribed-trajectory assumptions.

## Relativistic power and two different time rates

For a general source velocity, far-field flux at a fixed distant detector includes the sixth power of the retarded denominator factor in its angular expression. A source emission-time interval reaches that detector stretched by the same factor. Therefore power assigned per source coordinate time has a fifth power instead. Mixing those two rates changes a coefficient even when the field formula is correct.

A compact route to the total emitted power uses the instantaneous rest frame. Its angular radiation pattern has zero net spatial momentum by symmetry, so emitted four-momentum per proper time is rest-frame power times four-velocity divided by squared light speed. Transforming that four-vector and dividing its temporal energy rate by the laboratory time conversion gives total emitted laboratory power equal to that instantaneous rest-frame power.

Proper acceleration squared is the negative norm of four-acceleration. Expressed in laboratory velocity and acceleration, it is

$$\\alpha^2=\\gamma^6\\left(|a|^2-\\frac{|v\\times a|^2}{c^2}\\right).$$

This follows from differentiating four-velocity: its temporal acceleration component contains the velocity-acceleration dot product, while the spatial part contains both ordinary acceleration and a parallel correction. Subtracting their squared norms gives the expression above. Consequently the total emitted power is

$$P=\\frac{q^2\\gamma^6}{6\\pi\\varepsilon_0c^3}\\left(|a|^2-\\frac{|v\\times a|^2}{c^2}\\right).$$

This is the Lienard result. The rest-frame symmetry used in its derivation is specific to this point-charge radiation pattern; it does not mean the power of every emitting apparatus is a Lorentz scalar. Nor does it identify detector arrival-time power with source-time power direction by direction.

## Small extended sources and electric dipole radiation

Let a smooth conserved charge-current distribution remain inside a region of size $a$, with characteristic variation time $T$. For an electric-dipole approximation require $a/(cT)\\ll1$, and for far geometry require observation radius much larger than source size. Radiation-zone dominance additionally requires radius much larger than the corresponding light-travel variation scale. These are separate dimensionless conditions.

Define the dipole moment by integrating source position times charge density. Continuity and integration by parts give its time derivative as the volume integral of current. Expanding the retarded vector potential at large distance and small source light-travel variation therefore gives its leading inverse-distance term proportional to the retarded dipole-moment derivative.

The scalar potential needs equal care. For a neutral source its equal-time monopole term vanishes, but the first source-dependent delay correction does not. It gives a scalar inverse-distance term proportional to observation direction dotted with the dipole derivative. Combining scalar gradient and vector time derivative projects the radiation field transversely, giving

$$E_{\\mathrm{rad}}=\\frac{n\\times(n\\times\\ddot p(t-R/c))}{4\\pi\\varepsilon_0c^2R},\\qquad
P=\\frac{|\\ddot p|^2}{6\\pi\\varepsilon_0c^3}.$$

The coefficient is the same angular integral as before, with charge times acceleration replaced by moment second derivative. The expansion is controlled by bounded source moments and derivatives in the stated regime. If the leading dipole vanishes, one must examine magnetic-dipole or higher electric multipoles; a relative error measured against a zero leading term is meaningless.

The exact ideal point-dipole distribution from the gauge chapter has the same far-field expression away from its singular center. A finite source supplies a physically meaningful size scale for the approximation, while the ideal distribution has none and retains singular near-field energy. Keeping the two interpretations separate prevents a far-field approximation from being used as a complete source model.

## Worked example: an oscillating dipole

Let $p(t)=p_0\\cos(\\omega t)\\hat z$ in the small-source regime. Its second derivative has peak magnitude equal to moment amplitude times squared angular frequency. The angular radiation pattern is proportional to squared sine from the dipole axis and vanishes on that axis.

The instantaneous radiated power is proportional to squared cosine at retarded source time. Its cycle average is

$$\\langle P\\rangle=\\frac{p_0^2\\omega^4}{12\\pi\\varepsilon_0c^3}.$$

The factor of one half comes from averaging the moment's acceleration square, not from averaging the already integrated angular pattern twice. Doubling frequency at fixed dipole amplitude multiplies this leading average power by sixteen, while also making the small-source condition more restrictive.

Maintaining the prescribed oscillation requires a driver to replace radiated energy and any material loss. A perfectly undriven finite oscillator generally cannot retain exactly constant amplitude forever while radiating positive mean power. The formula describes the radiation of a maintained or approximately slowly decaying source; its mechanical amplitude evolution needs a coupled energy model.

## Worked example: a slowly radiating circular orbit

A nonrelativistic charge follows a circle of radius $a$ with angular frequency $\\omega$. Acceleration magnitude is constant, so Larmor power is $q^2a^2\\omega^4/(6\\pi\\varepsilon_0c^3)$. A linear oscillation with the same peak acceleration instead has half that average because its acceleration magnitude oscillates through zero.

Using the leading kinetic energy of circular motion, the energy-loss timescale is

$$t_{\\mathrm{loss}}=\\frac{3\\pi\\varepsilon_0mc^3}{q^2\\omega^2}.$$

This ratio estimates when a constant-energy external-field orbit ceases to be accurate. Over observation times much shorter than the loss timescale, ignoring back reaction can be a useful approximation. Over much longer times, some agent must supply energy or the orbit changes.

If the centripetal force is magnetic, its instantaneous mechanical work is zero, so radiation cannot be replenished by that magnetic force alone. The external-field Lorentz trajectory and the radiation power were computed under a prescribed-path approximation. A self-consistent slowly decaying orbit requires the radiation-reaction correction or an energy-based adiabatic treatment. This identifies the limitation instead of treating the two approximate calculations as contradictory exact solutions.

## Worked example: acceleration direction matters

For a fixed laboratory acceleration magnitude, acceleration parallel to velocity gives the sixth power of normalization in the Lienard factor, while perpendicular acceleration gives the fourth power. The difference comes from the cross-product term, not from an alternative radiation law.

If laboratory force magnitude is held fixed instead, the acceleration also changes with normalization. The relativistic force relations make parallel acceleration fall with its inverse cube and transverse acceleration with its inverse first power. Substituting those into the power formula makes parallel-force power independent of normalization at fixed force and makes transverse-force power grow with its square.

Thus the phrase “radiation grows as the sixth power” is incomplete without saying what is held fixed and in which direction. The source trajectory, the laboratory force and the proper acceleration are different possible controls. The invariant proper-acceleration expression organizes the comparison and prevents a misleading extrapolation from one geometry to another.

## Near-field energy and self-force limits

The classical point-charge field has divergent self-energy. Radiation measured far away is finite under the stated smooth trajectory, but that fact alone does not define a finite instantaneous self-force. A proposed mechanical energy balance must also account for changing bound near-field energy and whatever external forces maintain the prescribed trajectory.

A useful formal nonrelativistic radiation-reaction model contains a term proportional to acceleration derivative. Its mechanical power equals a total time derivative of a velocity-acceleration product minus Larmor power. The total derivative represents an exchange with bound near-field energy, showing why instantaneous mechanical loss need not equal outgoing radiative power at the same source time.

Deriving and interpreting a valid self-force law requires additional regularization, scale assumptions and attention to unwanted solutions. We do not present the formal higher-derivative equation as a universally reliable point-particle law. In slowly varying regimes, reduced-order approximations can be useful, but they must state their timescale separation and external-field assumptions. The far-field derivations proved above remain distinct from that unresolved modeling step.

## Exercises

### Exercise 1: retarded-time derivatives {#em-radiation-retarded-root-derivatives}

Under the stated smooth uniformly subluminal trajectory assumptions, derive the observation-time and observation-gradient derivatives of retarded time. Explain why their common denominator stays positive.

**Hint 1.** Differentiate the implicit light-travel equation, including source-position dependence.

**Hint 2.** The source-time derivative of distance is negative light speed times direction dotted with dimensionless velocity.

**Solution.** Time differentiation produces one minus the direction-velocity dot product multiplying the retarded-time derivative, equal to one. Spatial differentiation gives the same factor multiplying that gradient, equal to negative direction divided by light speed. The uniform speed bound makes the factor at least one minus the speed bound, strictly positive. Hence both derivatives exist away from the trajectory by the implicit function theorem. A finite history interval must still contain the retarded intersection; the local derivative calculation does not supply missing source history.

### Exercise 2: the delta Jacobian {#em-radiation-moving-delta-jacobian}

Explain why inserting a moving point charge into the retarded Green formula gives inverse retarded factor in addition to inverse distance. Derive the factor from the temporal delta and state what an instantaneous substitution misses.

**Hint 1.** Keep the source-time integral until after inserting its moving spatial delta.

**Hint 2.** Differentiate observation time minus source time minus travel time with respect to source time.

**Solution.** After the spatial integration, the temporal delta's argument has derivative negative one plus direction dotted with dimensionless source velocity, namely negative the retarded factor. Its unique root therefore contributes the reciprocal of that positive magnitude. The scalar potential is the Coulomb coefficient times charge divided by distance and that factor. Evaluating charge at a retarded location while retaining only the ordinary inverse-distance denominator omits this change-of-variable effect. The omission changes the subsequent field and is not a small-velocity identity unless an explicit approximation is made.

### Exercise 3: uniform motion is not radiation {#em-radiation-uniform-motion-limit}

For constant subluminal source velocity, determine which part of the exact point-charge field remains. Show why its local energy flux does not yield finite outgoing radiative power at arbitrarily large distance.

**Hint 1.** The source acceleration derivative vanishes.

**Hint 2.** A squared inverse-distance-squared field falls faster than the area of a large sphere grows.

**Solution.** The inverse-distance acceleration term vanishes, leaving the velocity field proportional to inverse distance squared. Its magnetic part may be nonzero, so the Poynting vector need not vanish locally. Its magnitude is bounded at large distance by an inverse fourth power for a fixed uniformly subluminal velocity, while sphere area grows quadratically. The resulting total far-zone flux tends to zero. Thus a transported bound field can have local energy flow without radiation. The statement presumes a sufficiently regular asymptotic comparison at the corresponding retarded history, not a finite sphere confusing moving stored energy with asymptotic emission.

### Exercise 4: an angular power fraction {#em-radiation-equatorial-power-fraction}

For an oscillating electric dipole, find the fraction of radiated power within the equatorial belt $|\\cos\\theta|\\le1/2$. The same ratio applies instantaneously when the dipole acceleration is nonzero and to its cycle average.

**Hint 1.** Substitute the polar cosine as the integration variable.

**Hint 2.** The azimuthal factor cancels, leaving integrals of one minus the squared variable.

**Solution.** The full angular denominator is the integral of $1-u^2$ from negative one to one, equal to four thirds. Over the belt from negative one half to one half it is eleven twelfths. Their ratio is eleven sixteenths. All common amplitude and frequency factors cancel, which explains why the ratio survives time averaging. At an instant of zero dipole acceleration, total power is zero and an instantaneous ratio of two zero powers is undefined; the pattern statement is understood where emission is nonzero or through the well-defined cycle average.

### Exercise 5: source rate and arrival rate {#em-radiation-angular-time-rates}

Derive the relation between source emission-time interval and arrival-time interval at a fixed distant observation point. Explain why the angular radiation expression has retarded-factor power six for arrival-rate flux but power five for source-time emitted power.

**Hint 1.** Differentiate observation time equal to source time plus travel time.

**Hint 2.** The radiation field contains the inverse cube of the retarded factor before squaring.

**Solution.** The arrival interval equals the retarded factor times the source interval. Squaring the far-field amplitude gives its inverse sixth power in energy received per observation time and solid angle. To attribute that received energy to its source-time interval, multiply by the arrival-to-source interval ratio, leaving inverse fifth power. The distinction is a Jacobian between two physically different clocks, not a change in the electromagnetic field formula. It must be kept when integrating directional emission or comparing beamed radiation measurements with a source's energy loss rate.

### Exercise 6: two separate small parameters {#em-radiation-small-source-far-zone}

For a harmonic source of size $a$ and angular frequency $\\omega$, state separate conditions for a dipole approximation and for radiation-zone dominance. Compare the induction and electrostatic dipole terms to the radiation term at generic nonzero angular amplitude.

**Hint 1.** Source light-travel variation is measured by angular frequency times source size divided by light speed.

**Hint 2.** The three field terms contain inverse cube, inverse square and inverse first power of observation radius.

**Solution.** The small-source condition is $\\omega a/c\\ll1$, together with observation radius large compared with source size for the geometric expansion. Radiation dominance requires $\\omega R/c\\gg1$. At generic angles the induction-to-radiation ratio scales as $c/(\\omega R)$ and the electrostatic-to-radiation ratio as its square. A small antenna can still be observed in its near zone, and a large distant source need not be a dipole. At angular zeros or vanishing leading moments, these relative comparisons fail and absolute estimates or higher multipoles are required.

### Exercise 7: null radiation fields {#em-radiation-leading-field-invariants}

Show the leading far-zone electric and magnetic radiation fields have both electromagnetic invariants zero. Explain why this need not be true for the complete field at a finite observation radius.

**Hint 1.** Radiation electric field is perpendicular to the observation direction.

**Hint 2.** The magnetic field is direction crossed with electric field divided by light speed.

**Solution.** The cross-product relation makes the two fields perpendicular and gives electric magnitude equal to light speed times magnetic magnitude. Their dot invariant and magnetic-minus-electric square invariant therefore vanish. The full point-charge or dipole field includes faster-decaying near terms that need not share those relations. Their contributions can make the invariants nonzero at finite radius even though the leading radiative part is null. Dropping those terms is a far-zone approximation, not a tensor identity for the complete solution everywhere.

### Exercise 8: dipole origin shift {#em-radiation-dipole-origin-translation}

For a localized conserved source, shift the spatial origin by a fixed vector. Derive the change in electric dipole moment and prove its second time derivative is unchanged. State why a time-dependent origin is a different problem.

**Hint 1.** The dipole integral gains negative the shift times total charge.

**Hint 2.** Total charge is constant under the localized continuity assumptions.

**Solution.** The new moment is the old moment minus total charge times the fixed origin shift. Since total charge and the shift are constant, their second derivative vanishes. Thus the dipole radiation expression is unchanged under a fixed spatial translation to the stated approximation order, with observation geometry translated consistently. If the origin itself accelerates, its derivatives enter the new moment and the observer coordinates are no longer related by that simple fixed translation. One must transform the complete field and source description rather than use the fixed-origin proof to infer observer-independent dipole components.

### Exercise 9: proper acceleration and Lienard power {#em-radiation-proper-acceleration-power}

Derive the laboratory expression for squared proper acceleration and use it to compare radiation for acceleration parallel and perpendicular to velocity. Keep explicit which acceleration is being held fixed.

**Hint 1.** Differentiate the temporal and spatial components of four-velocity with respect to proper time.

**Hint 2.** Decompose ordinary acceleration into velocity-parallel and transverse parts before subtracting the squared norms.

**Solution.** The temporal four-acceleration component is $\\gamma^4(v\\cdot a)/c$, and its spatial part is $\\gamma^2a+\\gamma^4(v\\cdot a)v/c^2$. Their Minkowski norm gives negative $\\gamma^6(a_\\parallel^2+a_\\perp^2/\\gamma^2)$, equivalent to the cross-product expression in the chapter. At fixed ordinary acceleration magnitude, parallel power therefore carries a sixth normalization power and perpendicular power a fourth. At fixed force the acceleration itself changes through the relativistic force relation, so those scalings cannot be reused unchanged. The proper-acceleration formulation states the invariant content without conflating the controls.

### Exercise 10: near-field power in a formal reaction model {#em-radiation-near-field-total-derivative}

Suppose a formal nonrelativistic model uses reaction force $m\\tau_0\\dot a$, with $\\tau_0=q^2/(6\\pi\\varepsilon_0mc^3)$. Derive its mechanical-power identity and show that for periodic motion its mean reaction work is negative mean Larmor power. Do not infer that this force law has been derived or is universally valid.

**Hint 1.** Differentiate velocity dotted with acceleration.

**Hint 2.** The total derivative averages to zero over a complete smooth period.

**Solution.** The model's power is $m\\tau_0v\\cdot\\dot a=m\\tau_0\\,d(v\\cdot a)/dt-m\\tau_0|a|^2$. The last term is negative Larmor power, while the first is a total derivative associated in this formal bookkeeping with changing bound near-field energy. Over a complete periodic cycle that derivative contributes zero, giving the claimed average. Instantaneously the reaction work can differ from negative radiated power. This algebra does not prove the model from a singular self-field, exclude runaway solutions or establish an approximation regime; those are additional physical and analytical requirements.
`;export{e as default};