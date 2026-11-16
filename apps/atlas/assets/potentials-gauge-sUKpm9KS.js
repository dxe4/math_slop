var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: potentials-gauge
title: "Potentials, Gauge and Causality"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Potentials, Gauge and Causality

Potentials organize Maxwell's equations and connect the field theory to an action principle. They also introduce a freedom: different potential pairs can describe identical electric and magnetic fields. That freedom is useful, but it does not remove physical initial data or permit an arbitrary source to violate charge conservation.

This chapter constructs potentials on a star-shaped spatial domain, derives their coupled equations and proves the retarded solution formula under explicit source assumptions. It distinguishes a gauge condition from a boundary condition and a retarded particular solution from the most general solution. All formulas use the physical gauge convention stated in the front matter; the corresponding four-dimensional notation is introduced later.

## Construct potentials without assuming global topology

Suppose a continuously differentiable magnetic field has zero divergence on a region star-shaped about the origin. A vector potential is

$$A(x)=\\int_0^1 t\\,B(tx)\\times x\\,dt.$$

For a uniform field this reduces to half the field crossed with position, the familiar symmetric choice. We prove the general formula rather than inferring it from that special example.

Apply the identity for curl of a cross product to the field inside the integral. For a vector function of position crossed with the position vector, the curl is twice that vector function plus its position-directional derivative minus position times its divergence. In the present formula the zero-divergence term disappears. Multiplication by the integration parameter makes the remaining integrand the derivative of $t^2B(tx)$ with respect to that parameter. The upper endpoint is the magnetic field itself and the lower endpoint vanishes by regularity at the star center. Thus the curl of the constructed potential is the required field.

The open star-shaped domain and compact radial segment justify differentiation under the finite integral locally, exactly as in the scalar-potential construction. If the field also varies smoothly in time, this construction can be performed at each time with the same fixed spatial domain. Faraday's equation then says the curl of $E+\\partial_tA$ vanishes. The scalar theorem supplies a function with

$$B=\\nabla\\times A,\\qquad E=-\\nabla\\phi-\\partial_tA.$$

These are existence statements under stated topology. Zero magnetic divergence on an arbitrary punctured domain does not guarantee a single global vector potential, just as zero electric curl did not guarantee a global scalar potential. The exercises give the flux obstruction. Local potentials may still exist, and overlapping local descriptions require transition information rather than a hidden branch choice.

## Gauge freedom and its exact cancellation

For a twice differentiable scalar function, transform the potentials by

$$A'=A+\\nabla\\chi,\\qquad\\phi'=\\phi-\\partial_t\\chi.$$

The magnetic field change is curl of a gradient and vanishes. The electric field change is a gradient of the time derivative minus the time derivative of the gradient; it vanishes when the mixed derivatives commute. The same electric and magnetic fields therefore result. Gauge freedom is an equivalence of descriptions, not a claim that a nonzero physical field can be erased.

The scalar potential alone is not generally a gauge-invariant observable in a time-dependent problem. A voltage associated with work along a specified moving circuit requires the complete electric and magnetic contributions discussed earlier. In a genuinely electrostatic region, potential differences acquire their familiar path-independent meaning after the domain and time-independent gauge choices have been specified.

A gauge function must also be admissible on the actual domain. A multivalued angle expression can change line integrals or introduce an artificial cut if treated as an ordinary globally smooth function. The cancellation proof used a single-valued differentiable scalar. Singular gauges can be useful in more advanced settings, but they require explicit patching and distributional accounting rather than the same unqualified proof.

## Derive the potential equations

Insert the potential definitions into the electric Gauss law and the Ampere–Maxwell equation. The two resulting equations are

$$-\\nabla^2\\phi-\\partial_t\\nabla\\cdot A=\\rho/\\varepsilon_0,$$

$$\\Box A+\\nabla\\left(\\nabla\\cdot A+c^{-2}\\partial_t\\phi\\right)=\\mu_0J.$$

The magnetic Gauss law and Faraday law already hold by the potential identities. Thus these two equations encode the remaining Maxwell content within the potential representation. The spatial derivative in the second equation acts on the entire indicated scalar combination.

The Lorenz condition sets that combination to zero. The first equation then becomes a scalar wave equation, and the vector equation becomes three component wave equations:

$$\\Box\\phi=\\rho/\\varepsilon_0,\\qquad\\Box A=\\mu_0J.$$

To see how this condition can be reached, call the original scalar combination its gauge residual. Under our gauge convention the residual changes by negative the wave operator applied to the gauge function. Therefore solving a wave equation for that function removes the residual when the corresponding gauge initial and boundary problem is solvable. This is a conditional gauge construction, not a promise that every imposed boundary requirement is simultaneously compatible with every gauge choice.

Residual Lorenz gauges satisfy the homogeneous wave equation. They can change the potentials while leaving fields untouched. Separately, one can add a homogeneous physical electromagnetic solution, such as an incoming wave, which changes the fields. Both additions solve homogeneous equations at the potential level, but only the pure-gradient addition is gauge. Confusing them would incorrectly discard real initial or incoming radiation.

## Coulomb gauge and apparently instantaneous quantities

Coulomb gauge instead imposes zero vector-potential divergence. The scalar equation is then Poisson's equation at each time. Under the compact-source and reference conditions of electrostatics, its solution uses the charge density at that same time. The vector equation retains an additional gradient of the scalar-potential time derivative.

Equivalently, the vector wave equation is driven by

$$J_T=J-\\varepsilon_0\\nabla\\partial_t\\phi,$$

whose divergence is zero by Poisson's equation and charge continuity. This transverse current is a nonlocal spatial decomposition of the physical current. It is not a second independently prescribed transport current that can be assigned arbitrary local values.

An instantaneous-looking scalar potential does not prove instantaneous communication. The observable electric field also contains the time derivative of the vector potential, and a gauge transformation changes both contributions together. The finite domain-of-dependence theorem was proved for the fields themselves, independently of potential gauge. In addition, changing charge density while refusing the current required by continuity is not an allowed Maxwell source experiment.

Constructing a Coulomb gauge from another potential requires solving the spatial Poisson equation for the gauge function with appropriate boundary data. Its residual freedom is harmonic in space. A gauge condition therefore simplifies equations but leaves analytical and physical data to be supplied. The word “gauge” is not a substitute for those data.

## The retarded fundamental response

For the wave operator used here, the retarded Green distribution is

$$G_{\\mathrm{ret}}(x,t)=\\frac{\\delta(t-|x|/c)}{4\\pi|x|}.$$

A useful direct verification begins with a smooth time function and the radial response given by that function at retarded time divided by four pi radius. Away from the origin, differentiate using the radial Laplacian: the spatial second derivatives exactly cancel the second time derivative divided by squared light speed. The response is therefore source-free away from its center.

Its source coefficient is determined by a small sphere. The negative outward radial derivative integrated over that sphere is the retarded time function plus radius divided by light speed times its first derivative. As the radius tends to zero this approaches the function at the present time. The integral of the response's time second derivative over the small volume tends to zero, because its inverse-radius singularity is locally integrable with quadratic small-volume scaling.

More formally, integrate against smooth compactly supported test functions, integrate by parts outside a small ball and pass to the limit. Boundary terms containing spatial variations of the test function vanish at the required rates; the surviving term evaluates it at the center multiplied by the time function. Thus the wave operator of this radial response is the time function times the spatial delta. Applying the same statement to temporal test functions establishes the displayed retarded Green distribution.

This proof fixes both the sign and the coefficient for our wave-operator convention. Using the operator with an additional squared-light-speed factor would change the Green normalization. The distribution is supported on the forward light cone from its source event, making the delay explicit.

## Retarded potentials and charge compatibility

For smooth sources contained in one fixed bounded spatial region at the times considered, the Green response gives

$$\\phi_{\\mathrm{ret}}(x,t)=\\frac1{4\\pi\\varepsilon_0}\\int\\frac{\\rho(y,t-R/c)}R\\,d^3y,$$

$$A_{\\mathrm{ret}}(x,t)=\\frac{\\mu_0}{4\\pi}\\int\\frac{J(y,t-R/c)}R\\,d^3y,
\\qquad R=|x-y|.$$

Assume enough space-time smoothness for the derivative operations used below; singular source limits are named separately. These formulas solve the respective sourced wave equations by convolution with the proved fundamental response. They select a retarded particular solution. Additional homogeneous fields require their own initial or incoming-radiation data.

We must still show the Lorenz condition. Differentiating the retarded current integrand with respect to observation coordinates differentiates both inverse distance and source time. Its observation divergence equals physical source divergence evaluated at retarded time divided by distance, minus the full source-coordinate divergence of the entire integrand. The latter includes the retarded-time dependence and cannot be replaced by a derivative holding that time fixed.

Integration makes the full source-coordinate divergence vanish by spatial support. Continuity replaces the remaining physical current divergence by negative density time derivative. Comparing coefficients gives

$$\\nabla\\cdot A_{\\mathrm{ret}}=-c^{-2}\\partial_t\\phi_{\\mathrm{ret}}.$$

Thus source conservation supplies precisely the Lorenz compatibility needed for the two wave equations to represent Maxwell fields. Arbitrary independently assigned density and current would not pass this argument. The source support condition is also substantive: an infinite ideal current may require boundary terms or a different convergence prescription.

## Fields obtained by differentiating retarded potentials

Write brackets for evaluation at retarded time and let $n=(x-y)/R$. Taking the gradient of the scalar potential and the time derivative of the vector potential gives

$$E=\\frac1{4\\pi\\varepsilon_0}\\int\\left(\\frac{[\\rho]n}{R^2}+\\frac{[\\partial_t\\rho]n}{cR}-\\frac{[\\partial_tJ]}{c^2R}\\right)d^3y.$$

The magnetic curl gives

$$B=\\frac{\\mu_0}{4\\pi}\\int\\left(\\frac{[J]}{R^2}+\\frac{[\\partial_tJ]}{cR}\\right)\\times n\\,d^3y.$$

Every term uses retarded source data. The extra density and current derivatives are what an instantaneous Coulomb-only prescription omits. To derive their signs, note that an observation gradient of retarded time is negative the source-to-observer unit vector divided by light speed. The inverse-distance gradient is negative that unit vector divided by distance squared. Applying those two chain-rule contributions and the potential minus signs yields the electric formula; the curl reverses the corresponding cross-product order in the magnetic formula.

These expressions are often called Jefimenko formulas. Their derivation here is the differentiation just described, subject to the stated regular-source control. They should not be applied to a moving point charge by substituting a time-dependent delta and ignoring its implicit retarded-position Jacobian. That calculation is developed separately in the radiation chapter.

## Worked example: two gauges for a changing uniform magnetic field

In a local observation region, prescribe a smooth time-dependent uniform vertical magnetic field. Choose the symmetric vector potential $A=B(t)(-y,x,0)/2$ and scalar potential zero. The induced electric field is negative its time derivative and has the circular direction required by Faraday's law.

Apply the gauge function $\\chi=-B(t)xy/2$. The new vector potential has only a first component, $A'_x=-B(t)y$, while the new scalar potential is $\\partial_tB(t)xy/2$. Its scalar-gradient contribution and vector-time-derivative contribution separately differ from their old values. Adding them gives the same electric field, and the curl still gives the same magnetic field.

For a complete local Maxwell source model, charge density is zero and Ampere–Maxwell requires current $J=\\varepsilon_0\\partial_t^2A$. This current is divergence-free. If the prescribed magnetic time dependence is linear, that current vanishes locally. The ideal fields are spatially unbounded when extended to all space, so this is a local model, not a finite-energy apparatus with an instantly changed field everywhere. The gauge calculation does not remove that physical limitation.

## Worked example: a travelling pure gauge

Let a gauge function be a sinusoid with vacuum wave phase and dispersion. Begin from zero potentials and set $A=\\nabla\\chi$, $\\phi=-\\partial_t\\chi$. The new potentials are nonzero and travel with that phase. Nevertheless magnetic curl vanishes, and the two electric contributions cancel exactly.

Because the gauge function satisfies the homogeneous wave equation, the Lorenz condition is also preserved. Thus nonzero oscillating solutions of the homogeneous potential equations need not represent nonzero radiation. One must inspect the physical field tensor or electric and magnetic fields, not just a graph of one potential component.

This example differs from the longitudinal field counterexample in the wave chapter. There, a nonzero physical electric field failed Maxwell's constraints. Here the physical fields are identically zero and satisfy all source-free equations. The distinction is the scalar potential's cancellation of the longitudinal vector-potential derivative. It illustrates concretely which information a gauge equivalence removes and which information remains physical.

## Worked example: a conserved ideal point dipole

Let a smooth time-dependent dipole moment be prescribed at the origin. Define distributional sources $\\rho=-p(t)\\cdot\\nabla\\delta_0$ and $J=\\dot p(t)\\delta_0$. Their continuity equation holds because the two delta-gradient terms cancel. This ideal source is neutral overall and is not a finite-size material model.

Away from the origin, the retarded potentials are

$$\\phi=\\frac1{4\\pi\\varepsilon_0}\\left(\\frac{n\\cdot p(t-r/c)}{r^2}+\\frac{n\\cdot\\dot p(t-r/c)}{cr}\\right),\\qquad
A=\\frac{\\mu_0}{4\\pi r}\\dot p(t-r/c).$$

The scalar expression follows by moving the source delta derivative onto the Green kernel; equivalently it is negative the divergence of the retarded dipole vector divided by distance, with the Coulomb coefficient. Differentiation produces both the inverse-square dipole term and the inverse-distance time-derivative term.

Taking vector-potential divergence gives two negative terms involving the first and second moment derivatives. The scalar time derivative divided by squared light speed produces the same two terms with positive signs, so Lorenz gauge holds. Dropping the scalar inverse-distance term would spoil that compatibility during acceleration of the dipole moment.

The potentials solve the distributional source problem and give ordinary fields away from the origin. Their singular energy near the source is not a finite dipole self-energy. A physical small-source approximation has an additional source-size and wavelength regime, treated in the radiation chapter. The exact ideal distribution and the controlled far-field approximation are related descriptions with different domains of validity.

## Exercises

### Exercise 1: verify the homotopy potential {#em-gauge-homotopy-nonuniform-field}

For the divergence-free field $B=(-y,x,0)$ on all of space, use the radial vector-potential construction to obtain an explicit polynomial potential and verify its curl directly.

**Hint 1.** The field evaluated on the radial segment is the segment parameter times the field at its endpoint.

**Hint 2.** Integrating the square of that parameter gives one third.

**Solution.** The construction gives negative one third of position crossed with the endpoint field, namely $A=(zx,zy,-x^2-y^2)/3$. Its first curl component is negative two thirds of the second coordinate minus one third of that coordinate, giving negative that coordinate. Its second component is one third of the first coordinate plus two thirds of that coordinate. The final component vanishes. Thus the curl is exactly the prescribed field. This nonuniform example checks the parameter weight in the construction; using the uniform-field half factor would give the wrong coefficient here.

### Exercise 2: a time-only gauge {#em-gauge-time-only-residual}

Take a smooth gauge function depending only on time. Describe its effect on both potentials and fields. Determine when it preserves the Lorenz condition.

**Hint 1.** Its spatial gradient vanishes.

**Hint 2.** Its wave operator contains only the second time derivative divided by squared light speed.

**Solution.** The vector potential is unchanged, while the scalar potential changes by a spatially uniform negative first time derivative. Its spatial gradient is zero, so neither physical field changes. The Lorenz residual changes by negative the gauge function's second time derivative divided by squared light speed. Thus Lorenz gauge survives exactly for a function affine in time on the interval considered. A general time-only gauge remains a valid field equivalence but moves the potentials out of that gauge condition. This separates admissible field-preserving transformations from the narrower residual transformations of one selected gauge.

### Exercise 3: a compact source cannot create net charge {#em-gauge-total-charge-compatibility}

Suppose smooth density and current satisfy continuity and remain supported in one fixed bounded spatial region. Prove total charge is constant. Explain why switching on a lone positive compact charge from zero without external current is not an admissible example for retarded Maxwell formulas.

**Hint 1.** Integrate continuity over a ball containing all sources.

**Hint 2.** The current is zero on the distant boundary under the support assumption.

**Solution.** The time derivative of total charge is negative the outward current integral. That boundary current vanishes, so total charge is constant. A lone positive charge that appears from an initially charge-free compact source changes that total and violates the stated compatibility. A physically consistent creation-of-separation model can instead produce opposite charges with zero net change, or allow charge to enter through a boundary with an accounted current. The retarded integrals do not repair an inconsistent source pair merely by delaying its values.

### Exercise 4: physical homogeneous fields are not always gauge {#em-gauge-homogeneous-not-pure-gauge}

Two Lorenz-gauge potential pairs solve the same sourced wave equations. Explain why their difference need not be a pure gauge, and give a concrete source-free counterexample.

**Hint 1.** A transverse travelling plane wave is a homogeneous potential solution with nonzero fields.

**Hint 2.** A pure gauge would leave every physical field unchanged.

**Solution.** The difference solves homogeneous wave equations and the homogeneous Lorenz condition, but those conditions still admit transverse radiation. Take a transverse sinusoidal vector potential with vacuum dispersion and scalar potential zero. Its divergence vanishes, while its curl and time derivative give nonzero magnetic and electric fields. It is therefore not pure gauge. A retarded particular solution can be supplemented by such a physical incoming or initially specified field. Selecting no additional homogeneous radiation is an extra physical condition, not a consequence of choosing Lorenz gauge.

### Exercise 5: a global vector-potential obstruction {#em-gauge-magnetic-flux-obstruction}

On punctured three-space, consider $B=x/|x|^3$. It has zero classical divergence there. Prove no single smooth vector potential exists throughout that domain with curl equal to this field. Explain why the example is not an allowed source-free magnetic field on all of space.

**Hint 1.** Its flux through any centered sphere is nonzero.

**Hint 2.** Stokes' theorem on the closed sphere would give zero flux for a globally defined curl, without needing a potential inside the sphere.

**Solution.** If a smooth vector potential existed on the punctured domain, it would be defined on a neighborhood of a centered sphere. The surface version of Stokes gives the flux of its curl equal to circulation on the sphere's empty boundary, hence zero. But the prescribed field has flux four pi, a contradiction. The obstruction is global despite zero local divergence. Distributionally on all of space this field has a delta magnetic divergence, violating the no-magnetic-charge Maxwell equation. It is a mathematical example identifying the topology hypothesis, not a hidden prediction of a magnetic monopole in the vacuum theory used here.

### Exercise 6: derive the electric retarded integrand {#em-gauge-retarded-electric-chain-rule}

Starting from the retarded scalar and vector potentials for regular compact sources, derive the three terms of the electric field formula. State where the two source time-derivative terms come from.

**Hint 1.** The observation gradient changes both inverse distance and retarded time.

**Hint 2.** Retarded-time gradient is negative the displacement unit vector divided by light speed.

**Solution.** Negative scalar-potential gradient first differentiates inverse distance, giving the outward density term divided by distance squared. Its action on retarded source time gives the outward density-time-derivative term divided by light speed and distance. Negative vector-potential time derivative produces the negative current-time-derivative term multiplied by vacuum permeability. Rewriting that coefficient with the common Coulomb factor introduces inverse squared light speed. All three source quantities are evaluated at retarded time. The derivation requires the source regularity and integral control stated in the chapter; a moving delta source needs a separate distributional calculation rather than the same unchecked differentiation.

### Exercise 7: the dipole fields {#em-gauge-point-dipole-fields}

Differentiate the ideal point-dipole potentials to identify the electric inverse-cube, inverse-square and inverse-distance terms, and the two magnetic terms, away from the source. Describe their different distance regimes.

**Hint 1.** Differentiate both the angular unit vector and retarded moment in the scalar potential.

**Hint 2.** The radiation electric numerator is the transverse projection $n(n\\cdot\\ddot p)-\\ddot p$.

**Solution.** The electric field is the Coulomb coefficient times $[3n(n\\cdot p)-p]/r^3+[3n(n\\cdot\\dot p)-\\dot p]/(cr^2)+[n(n\\cdot\\ddot p)-\\ddot p]/(c^2r)$, with every moment evaluated at retarded time. To obtain it, use the gradient of the direction components, $\\partial_in_j=(\\delta_{ij}-n_in_j)/r$, and the retarded-time gradient in each scalar term, then combine the vector-potential time derivative. The magnetic field is the coefficient $\\mu_0/(4\\pi)$ times $\\dot p\\times n/r^2+\\ddot p\\times n/(cr)$ from the vector curl. The fastest-decaying term dominates sufficiently close to the ideal dipole for a slowly varying nonzero moment; the inverse-distance transverse terms govern radiation far away. At a zero of a moment or derivative, that informal dominance needs reexamination. None of these ordinary formulas assigns finite field values at the source point.

### Exercise 8: verify the radial Green source {#em-gauge-green-small-sphere}

For a smooth time function $f$, show $f(t-r/c)/(4\\pi r)$ solves the homogeneous wave equation for positive radius and has distributional source $f(t)\\delta_0$ under our wave operator. Identify the small-sphere coefficient explicitly.

**Hint 1.** For a radial function use the radial Laplacian as the second derivative of radius times the function, divided by radius.

**Hint 2.** The negative integrated radial derivative is $f(t-\\epsilon/c)+(\\epsilon/c)f'(t-\\epsilon/c)$.

**Solution.** Multiplying the response by radius removes its geometric denominator. Two radial derivatives then give the same retarded second time derivative divided by squared light speed as the temporal part, so the wave operator vanishes away from the origin. On a small sphere, direct radial differentiation gives the coefficient in the second hint, which tends to the present-time source value. The time-second-derivative volume contribution tends to zero with the squared radius. Integration by parts against a smooth compact test function leaves precisely that limiting central value times the test function at the origin; remaining boundary variations vanish. Thus the distributional source has positive unit spatial-delta coefficient multiplying the time function, fixing the Green normalization.

### Exercise 9: the static limit {#em-gauge-jefimenko-static-limit}

For regular compact time-independent conserved sources, reduce the retarded field formulas to electrostatic Coulomb and magnetostatic Biot–Savart expressions. Explain which assumptions make this reduction exact and why it is different from a low-frequency approximation.

**Hint 1.** Every source time derivative vanishes.

**Hint 2.** Evaluation at an earlier time then gives the same source values as evaluation now.

**Solution.** Both explicit derivative terms in the electric integrand vanish, leaving the Coulomb density kernel. The current derivative in the magnetic integrand vanishes, leaving the Biot–Savart current kernel. Retarded evaluation changes neither remaining source because it is exactly time independent. Conservation also makes the steady current divergence-free, matching the magnetostatic theorem. This is an exact reduction within the stated source class. A slowly varying source instead has small but generally nonzero time derivatives and retarded changes; treating it quasistatically requires a specified ratio of source timescale to light-travel scale and control of the omitted terms.

### Exercise 10: an instantaneous potential is not a signal protocol {#em-gauge-coulomb-causality}

Explain why the instantaneous scalar-potential Poisson equation in Coulomb gauge does not contradict the field domain-of-dependence theorem. Your answer must mention the vector potential, source conservation and the difference between a nonlocal decomposition and a local field measurement.

**Hint 1.** The electric field contains two potential contributions that change together under gauge transformations.

**Hint 2.** A prescribed local charge change cannot be detached from the current required by continuity.

**Solution.** Coulomb gauge determines a scalar potential through a whole spatial charge configuration, while its vector equation contains the corresponding nonlocal transverse-current decomposition. The measured electric field combines negative scalar gradient with negative vector-potential time derivative; neither contribution is separately gauge invariant. A source modification must obey continuity and cannot be specified as arbitrary instantaneous changes of charge at unrelated points with no current. For compatible sources, the physical fields satisfy Maxwell's equations and the previously proved backward-cone energy result. A nonlocal decomposition of a field into mathematical parts does not turn either part into an independently controllable local signal. Initial and boundary data must also match before applying the domain-of-dependence comparison.
`;export{e as default};