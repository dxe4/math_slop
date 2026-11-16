var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: electromagnetic-waves
title: "Electromagnetic Waves"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Electromagnetic Waves

Maxwell's curl equations couple changing electric and magnetic fields. In a source-free vacuum they imply wave equations with speed fixed by the vacuum constants. The divergence constraints then remove longitudinal vacuum plane waves. Propagation, polarization and boundary reflection are therefore consequences of the complete system, not independent assumptions about a scalar oscillating function.

We begin with sufficiently smooth real fields in a vacuum region. Complex amplitudes will be introduced only as a shorthand for harmonic real solutions. When a material interface appears, we state a separate linear, isotropic, lossless constitutive model. Its constants describe a chosen frequency regime, not every possible material response. The later matter chapter examines that limitation directly.

## Wave equations and their missing constraints

Take the curl of Faraday's law and use the curl-of-curl identity. Substitute the sourced magnetic curl and the electric Gauss law. With the wave operator defined in our conventions, the result is

$$\\Box E=-\\nabla\\rho/\\varepsilon_0-\\mu_0\\partial_tJ,\\qquad
\\Box B=\\mu_0\\nabla\\times J,
\\qquad \\Box=c^{-2}\\partial_t^2-\\nabla^2.$$

For the magnetic equation, start with the curl of Ampere–Maxwell, use zero magnetic divergence, and replace electric curl by negative magnetic time derivative. These calculations require commuting derivatives of the regular fields and sources. They do not yet select a solution for given initial or boundary data.

When the sources vanish, each Cartesian component obeys the scalar wave equation. The converse is false. A vector field may satisfy all three component equations while violating a divergence constraint or the coupling between the two physical fields. For example, an arbitrary longitudinal profile travelling at the wave speed can solve its component wave equation but carry nonzero electric divergence in a supposedly charge-free region.

Thus an electromagnetic wave is a solution of Maxwell's complete equations. The component wave equations are valuable derived tools, while the first-order system fixes the allowed polarization and relation between electric and magnetic amplitudes. Initial data must also satisfy the constraints already proved to propagate.

## Plane waves and transverse geometry

Use complex amplitudes with real physical fields obtained by taking the real part. Our phase convention is

$$E=\\operatorname{Re}\\{E_0e^{i(k\\cdot x-\\omega t)}\\},\\qquad
B=\\operatorname{Re}\\{B_0e^{i(k\\cdot x-\\omega t)}\\},\\qquad\\omega>0.$$

The wave vector is real for a travelling vacuum plane wave. Substituting into the divergence equations makes both amplitudes perpendicular to it. Faraday's equation and Ampere–Maxwell give

$$k\\times E_0=\\omega B_0,\\qquad
k\\times B_0=-\\omega E_0/c^2.$$

Cross the first relation with the wave vector and use transversality. For a nonzero amplitude the resulting dispersion relation is $\\omega^2=c^2|k|^2$. Writing the propagation unit vector as $n$ gives the magnetic amplitude as $n\\times E_0/c$. Thus electric field, magnetic field and propagation direction form the specified right-handed geometry.

The electric-to-magnetic-intensity amplitude ratio is the vacuum impedance $Z_0=\\mu_0c=\\sqrt{\\mu_0/\\varepsilon_0}$. This is distinct from the ratio of electric field to magnetic induction, which is light speed. Replacing magnetic induction by magnetic intensity without the permeability factor changes the units and the numerical relation.

A plane wave has infinite extent across its wavefront and therefore generally infinite total energy. It is an exact local or idealized solution and a useful component of wave analysis, not automatically a finite-energy laboratory pulse. Finite beams require transverse structure and, in general, diffraction corrections.

## Polarization and complex-amplitude averages

The complex transverse amplitude records the relative sizes and phases of two perpendicular electric components. Equal phases produce linear polarization. A quarter-turn phase difference gives an ellipse, becoming a circle when the two real component amplitudes have equal magnitude. A handedness name is ambiguous without stating the viewing and phase conventions, so we describe the actual vector rotation when needed.

For two real harmonic quantities represented by complex amplitudes, averaging their product over a full period gives half the real part of one amplitude times the other's complex conjugate. This follows by expanding each real part into positive- and negative-frequency terms: the twice-frequency terms average to zero, leaving the two constant conjugate terms.

Consequently the mean Poynting vector is

$$\\langle S\\rangle=\\frac1{2\\mu_0}\\operatorname{Re}(E_0\\times B_0^*).$$

For a travelling vacuum wave it points along the propagation direction and has magnitude $\\varepsilon_0c|E_0|^2/2$. Here the norm includes both complex transverse components. It is not always the square of the maximum instantaneous magnitude of one scalar component. Confusing those amplitude conventions introduces a factor of two when comparing linear and circular polarization.

For a single linearly polarized sinusoid, electric and magnetic energy densities are equal at every point and time. Their sum is proportional to squared cosine. For a circularly polarized wave of fixed vector magnitude, the energy density can instead be constant in time. The same complex-amplitude formula handles both cases when the amplitude norm is used consistently.

## Worked example: a finite longitudinal pulse profile

Let a real smooth function of one variable have compact support, and define a plane-fronted pulse propagating along the positive first coordinate direction by $E=f(x-ct)\\hat y$ and $B=f(x-ct)\\hat z/c$. Both divergence constraints vanish because the nonzero components vary only in the propagation coordinate. Direct differentiation verifies both curl evolution equations.

Electric and magnetic energies are equal, and their total density is $\\varepsilon_0f^2$. The Poynting vector is $\\varepsilon_0cf^2\\hat x$. Integrating energy along the propagation coordinate gives the conserved energy per unit transverse area,

$$\\mathcal U=\\varepsilon_0\\int_{\\mathbb R}f(\\xi)^2\\,d\\xi.$$

At a fixed plane, integrate forward energy flux over the entire pulse passage. The substitution from time to profile coordinate contributes the inverse light-speed factor, leaving exactly the same energy per area. No sinusoidal time average or root-mean-square convention is required.

The profile is localized longitudinally but remains uniform across an infinite transverse plane. Its energy per area is finite, while its total energy is not. The calculation makes that distinction explicit. It also demonstrates an exact Maxwell pulse without assuming a single frequency; every part of this one-dimensional vacuum profile translates at the same speed.

## Reflection at a perfectly conducting plane

Let the vacuum occupy the negative first-coordinate half-space, with a perfectly conducting wall at its boundary. An incident wave travels toward the wall. The tangential electric field must vanish there, so the reflected electric amplitude is the negative of the incident amplitude. Its propagation direction reverses, which makes the reflected magnetic amplitude add rather than cancel at the wall.

For a linearly polarized incident wave, choose equal real amplitude scale and write the resulting standing fields as

$$E_y=2E_a\\sin(kx)\\sin(\\omega t),\\qquad
B_z=2E_a\\cos(kx)\\cos(\\omega t)/c.$$

These follow by adding the two opposite travelling complex waves and taking real parts. They satisfy the wall electric condition and the vacuum dispersion relation. Their mean energy flux is zero because energy stored electrically and magnetically oscillates within the standing pattern rather than crossing the ideal reflector.

## Worked example: standing-wave nodes and pressure

The standing electric field vanishes on every plane where the spatial sine vanishes. Magnetic antinodes occupy those same planes; electric antinodes lie a quarter wavelength away. Thus a zero electric field at the wall does not imply zero field energy or zero force there.

At the wall, the tangential magnetic field has twice the incident amplitude. The time average of its squared value gives the normal Maxwell stress. The resulting pressure is twice incident intensity divided by light speed, agreeing with the momentum-flux argument of the previous chapter. This agreement checks the reflected magnetic sign as well as the factor in harmonic averaging.

The time-averaged standing-wave energy density is spatially uniform for this pair of equal counterpropagating waves, even though its electric and magnetic parts separately vary with position. Their complementary sine and cosine squares add to one. Instantaneous energy density and energy flux still vary in time and space, satisfying the local balance. An average that vanishes does not mean the instantaneous transport vector vanishes at every instant.

A real conductor has finite response and may absorb energy. The exact cancellation and doubled magnetic wall field belong to the ideal perfect-conductor boundary model. They are not automatically valid at every frequency or for a thin transparent sheet.

## A lossless material interface

For this section alone, take two stationary homogeneous media with positive constant permittivities and permeabilities in the frequency regime considered. There is no free surface charge or free surface current. At normal incidence, continuity of tangential electric and magnetic intensity gives two amplitude equations. If the incident electric amplitude is normalized to one, write reflected and transmitted amplitudes as $r,t$ and impedances as $Z_1,Z_2$:

$$1+r=t,\\qquad (1-r)/Z_1=t/Z_2.$$

The reflected magnetic contribution has the minus sign because its propagation direction is reversed. Solving gives

$$r=\\frac{Z_2-Z_1}{Z_2+Z_1},\\qquad t=\\frac{2Z_2}{Z_2+Z_1}.$$

Electric amplitude is not power. The time-averaged flux has an additional inverse-impedance factor. Therefore the reflected and transmitted power fractions are

$$\\mathcal R=r^2,\\qquad\\mathcal T=(Z_1/Z_2)t^2,
\\qquad \\mathcal R+\\mathcal T=1.$$

The final identity follows by direct substitution and expresses losslessness for this normal-incidence model. If a medium absorbs, if an interface carries a current, or if constitutive parameters depend strongly on frequency, these particular real-coefficient formulas require modification. The matter chapter will distinguish the relevant models rather than treating all media as vacuum with a relabeled speed.

## Worked example: dielectric reflection with a phase reversal

Take incidence from vacuum into a nonmagnetic lossless dielectric whose permittivity is four times the vacuum value. Its impedance is half the vacuum impedance and its wave speed is half the vacuum speed. The electric reflection coefficient is negative one third and the transmission coefficient is two thirds.

The negative reflected coefficient records a phase reversal of the electric oscillation. Its power fraction is one ninth. The transmitted power fraction is not four ninths: multiplying by the impedance ratio gives eight ninths. These fractions add to one, while the electric amplitudes satisfy their separate continuity relation.

The transmitted wavelength is half the incident wavelength because the interface preserves temporal frequency while the speed changes. The frequency cannot jump independently on the two sides of a stationary interface and still match the boundary fields for every time. At oblique incidence the same phase-matching principle preserves the tangential wave-vector component, leading to Snell's relation.

This example assumes the supplied material constants describe the frequency of the incident harmonic wave. A broadband pulse would sample their frequency dependence and may change shape. Its energy transport then cannot be inferred by applying one frequency-independent amplitude coefficient to every component without justification.

## Guided waves and cutoff

A conducting waveguide provides transverse structure, so its longitudinal propagation need not have the vacuum plane-wave dispersion. In a rectangular perfect-conductor guide, a simple mode has electric field in the second coordinate direction proportional to $\\sin(\\pi x/a)e^{i(kz-\\omega t)}$, independent of the second coordinate. It satisfies zero tangential electric field at all four walls.

Applying Faraday determines a transverse magnetic component proportional to negative longitudinal wave number and a longitudinal magnetic component in temporal quadrature. Substituting into Maxwell's remaining equations gives

$$\\omega^2=c^2\\left(k^2+\\frac{\\pi^2}{a^2}\\right).$$

A real longitudinal wave number requires frequency above the cutoff. Below it, the mode has an imaginary longitudinal wave number and a purely decaying solution can be selected along a half-guide. That is evanescence, not a freely travelling wave with a real phase velocity.

Above cutoff the phase and group velocities are

$$v_p=\\omega/k>c,\\qquad v_g=d\\omega/dk=c^2k/\\omega<c.$$

A phase crest is not an independently transmitted signal. For this lossless guided mode, the integrated mean power divided by integrated mean energy per guide length equals the displayed group velocity. To verify it, integrate the transverse sine and cosine squares over the rectangular section. The mean power is area times squared electric amplitude times longitudinal wave number divided by four vacuum permeability and frequency. The mean energy per length is area times vacuum permittivity and squared amplitude divided by four. Their ratio is the claimed velocity.

This equality is specific to the stated mode and lossless model. In general absorbing or strongly dispersive media, group velocity alone does not define a universal signal speed. The vacuum causal statement can instead be proved directly from the local field energy.

## A finite domain of dependence

Consider a source-free smooth Maxwell solution in a backward light-cone region. Let a ball centered at a chosen observation point shrink at speed light, from initial radius $ct_0+\\delta$ to radius $\\delta>0$ at observation time. Let its initial fields vanish throughout the initial ball.

The derivative of field energy in this moving ball is the negative outward Poynting flux minus light speed times the boundary energy density integral. The second term comes from the shrinking volume. Since the normal Poynting component is bounded below by negative light speed times energy density, the derivative is nonpositive. Initial energy is zero and energy is nonnegative, so it remains zero in the shrinking ball.

At the observation time the fields therefore vanish throughout the smaller ball, including its center. Applied to a difference of two solutions, this proves that matching initial fields and sources in the appropriate backward cone force matching observation fields. The argument does not require control of distant infinity, because every moving ball is bounded. It proves a domain-of-dependence statement for existing sufficiently regular solutions; it does not construct those solutions or handle singular sources without further analysis.

## Exercises

### Exercise 1: a false electromagnetic wave {#em-wave-longitudinal-counterexample}

Let $f$ be a nonconstant smooth function and set $E=f(x-ct)\\hat x$, $B=0$. Show each nonzero component satisfies a scalar wave equation, but the pair is not a source-free Maxwell solution.

**Hint 1.** Differentiate the travelling profile twice in space and time.

**Hint 2.** Check electric divergence and the electric evolution equation separately.

**Solution.** The time second derivative is light speed squared times the spatial second derivative, so the electric component obeys its scalar wave equation. Electric divergence is the profile derivative, which is not identically zero for the nonconstant profile. Also zero magnetic curl would require zero electric time derivative in vacuum, which this travelling profile generally lacks. The fields therefore fail Maxwell's complete system. The example shows why solving derived second-order equations alone is insufficient; transversality and first-order coupling are independent conditions that must be retained.

### Exercise 2: source terms in the wave equations {#em-wave-source-derivation}

Derive both sourced field wave equations stated near the beginning of the chapter, with the correct charge-gradient and current-time-derivative signs.

**Hint 1.** Curl Faraday for the electric equation and curl Ampere–Maxwell for the magnetic one.

**Hint 2.** Replace curl of curl by gradient of divergence minus Laplacian.

**Solution.** Curling Faraday yields electric charge gradient divided by vacuum permittivity minus electric Laplacian on the left, and negative vacuum permeability times current time derivative minus the electric second time derivative divided by squared light speed on the right. Rearranging gives the stated electric wave operator and its two negative source terms. Curling Ampere–Maxwell gives negative magnetic Laplacian equal to vacuum permeability times current curl minus the magnetic second time derivative divided by squared light speed. Rearranging gives the positive current-curl magnetic source. Both derivations use the divergence constraints and the smoothness needed to commute time and spatial derivatives.

### Exercise 3: derive harmonic averaging {#em-wave-phasor-average}

For complex scalar amplitudes $F,G$ and positive frequency, prove that the period average of $\\operatorname{Re}(Fe^{-i\\omega t})\\operatorname{Re}(Ge^{-i\\omega t})$ is $\\operatorname{Re}(FG^*)/2$. Explain its use for a vector cross product.

**Hint 1.** Expand each real part as half the amplitude expression plus its conjugate.

**Hint 2.** The twice-frequency factors integrate to zero over a period.

**Solution.** The expanded product has four terms with common factor one quarter. Two oscillate at twice the frequency and have zero period integral. The remaining terms are the constant conjugate pair, whose sum is twice the real part of the amplitude product. This gives the required half factor. A vector cross product is a signed combination of scalar component products, so the same calculation applies componentwise. The amplitudes are peak complex amplitudes in the specified convention; using already root-mean-square amplitudes would change the prefactor. Stating that convention prevents applying the half twice.

### Exercise 4: elliptic polarization without ambiguous naming {#em-wave-elliptic-polarization}

A wave travelling along the first axis has complex electric amplitude $E_1\\hat y+iE_2\\hat z$, with positive real component scales. Describe the real polarization ellipse, its instantaneous rotation at a fixed point with phase initially zero, and its mean intensity.

**Hint 1.** The real components are proportional to cosine of phase and negative sine of phase.

**Hint 2.** At a fixed point the phase decreases as time increases.

**Solution.** The real components are $E_y=E_1\\cos\\psi$ and $E_z=-E_2\\sin\\psi$, so the squared normalized components sum to one. The ellipse semiaxes are the two positive scales; it is circular exactly when they agree. At initial phase zero, the vector points along the positive second axis and begins moving toward the positive third axis as time advances. This describes the rotation without an unstated observer convention. Mean intensity is $\\varepsilon_0c(E_1^2+E_2^2)/2$, from the squared complex norm. In the circular case the instantaneous vector magnitude is constant, consistent with the same formula rather than an extra factor of one half.

### Exercise 5: Snell phase matching {#em-wave-snell-phase-matching}

Two stationary lossless isotropic media have wave speeds $v_1,v_2$. Derive the relation between incident and transmitted angles to a flat interface normal. State when no real transmitted propagation angle exists.

**Hint 1.** Boundary phases must match for every interface position and every time.

**Hint 2.** Frequency is common and tangential wave number is common, while wave-number magnitude is frequency divided by speed.

**Solution.** Matching temporal phase fixes the same frequency on both sides. Matching phase along the interface fixes $k_1\\sin\\theta_1=k_2\\sin\\theta_2$. Substituting the two wave-number magnitudes gives $\\sin\\theta_2=(v_2/v_1)\\sin\\theta_1$. If the right side exceeds one, a real transmitted angle is impossible and the transmitted normal wave number is imaginary in this simple model. This occurs for sufficiently oblique incidence from the slower medium to the faster one. The statement identifies the phase condition; the reflected and evanescent amplitudes still require the appropriate boundary equations.

### Exercise 6: nearest standing-wave antinode {#em-wave-pec-node-location}

For the standing wave in the negative first-coordinate half-space, locate its electric nodes and the nearest electric antinode to the wall. Compare them with magnetic nodes and explain the wall pressure.

**Hint 1.** Electric amplitude is proportional to a spatial sine; magnetic amplitude to the corresponding cosine.

**Hint 2.** A quarter wavelength separates a sine node from the nearest antinode.

**Solution.** Electric nodes occur at $x=-m\\pi/k$ for nonnegative integers, including the wall. The nearest electric antinode is at negative one quarter wavelength. Magnetic nodes lie at electric antinodes, while magnetic antinodes lie at electric nodes. The wall therefore has zero tangential electric field but a doubled magnetic oscillation. Its magnetic stress gives nonzero mean radiation pressure. These are amplitude-node statements: a field may also vanish momentarily everywhere in one component at a particular time without creating a new spatial node.

### Exercise 7: matched impedance is not matched speed {#em-wave-impedance-matched-different-speed}

A medium has permittivity and permeability each four times the corresponding vacuum value. For normal incidence from vacuum in the stated lossless model, find its impedance, speed and reflection coefficient. Explain what quantity controls the absence of reflection.

**Hint 1.** Impedance uses the square root of a ratio, while speed uses the inverse square root of a product.

**Hint 2.** Insert the resulting impedance into the normal-incidence coefficient.

**Solution.** The common factor cancels in the permeability-to-permittivity ratio, so impedance equals vacuum impedance. The product grows by sixteen, so speed is one quarter of vacuum light speed. The impedance reflection coefficient is therefore zero. The transmitted frequency is unchanged but its wavelength is smaller. Equality of wave speed is not the condition used by the normal-incidence boundary equations; their electric and magnetic amplitude ratio is the relevant quantity. This conclusion assumes no loss, free interface current or anisotropy, as stipulated for the coefficient formula.

### Exercise 8: a single evanescent guided mode {#em-wave-evanescent-average-power}

Below the cutoff of the guide mode discussed in the chapter, choose the solution decaying with positive longitudinal coordinate. Show its time-averaged longitudinal power is zero, and explain why this does not prove that every finite region containing evanescent fields transmits zero power.

**Hint 1.** The longitudinal wave number is purely imaginary.

**Hint 2.** The transverse magnetic component is then in quadrature with the electric component.

**Solution.** Faraday makes the transverse magnetic amplitude negative the longitudinal wave number divided by frequency times the electric amplitude. With a purely imaginary wave number, their product in the longitudinal complex Poynting expression is purely imaginary. Its real part, and hence mean longitudinal power for this one decaying mode, is zero. A finite barrier or composite guide can contain both decaying and growing exponentials, with boundary-determined phase relations. Their cross terms can carry nonzero mean power. The single-mode calculation therefore cannot be promoted to a universal claim about every configuration that includes an evanescent region.

### Exercise 9: guide velocities at twice cutoff {#em-wave-guide-velocity-ratios}

For the stated guide mode at frequency twice cutoff, find $[v_g^2/c^2,v_p^2/c^2]$. Explain why the phase value does not contradict the domain-of-dependence result.

**Hint 1.** The dispersion relation gives $c^2k^2/\\omega^2=1-\\omega_c^2/\\omega^2$.

**Hint 2.** Group and phase speeds have product equal to squared vacuum light speed in this model.

**Solution.** The normalized squared wave-number ratio is three quarters, so group speed squared divided by vacuum light speed squared is three quarters. The phase ratio is its reciprocal, four thirds. Thus the requested vector is $[3/4,4/3]$. A harmonic phase crest is not a compactly initiated disturbance or a separately controllable signal. The backward-cone energy argument concerns the effect of changing initial data and sources, while a steady harmonic pattern has already been specified throughout its domain. Those different statements are compatible.

### Exercise 10: local agreement from a backward cone {#em-wave-local-domain-dependence}

Two sufficiently smooth Maxwell solutions have identical sources throughout a backward light cone and identical initial fields on its base ball, whose radius is $ct_0+\\delta$ with positive margin. Prove their fields agree on the ball of radius $\\delta$ at time $t_0$.

**Hint 1.** Subtract the solutions and integrate difference-field energy on the ball shrinking at light speed.

**Hint 2.** The energy derivative is negative the boundary integral of $S\\cdot n+cu$, which is nonnegative before the minus sign.

**Solution.** The difference has zero sources in the cone and zero energy on the initial ball. Poynting balance plus the shrinking-boundary transport term gives energy derivative equal to the negative integral stated in the second hint. The algebraic flux bound makes the integrand nonnegative, so this energy cannot increase. Since it starts at zero and remains nonnegative, it stays zero. Continuous difference fields therefore vanish in every shrinking ball, including the final ball of positive radius. The proof needs neither distant boundary conditions nor an assumption of zero fields outside the initial ball, only the stated local source and initial agreement throughout the cone.
`;export{e as default};