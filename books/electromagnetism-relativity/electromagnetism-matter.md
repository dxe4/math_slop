
# Electromagnetism in Matter

Vacuum Maxwell equations relate total charge and current to electric and magnetic fields. A material adds degrees of freedom: microscopic dipoles, mobile carriers, mechanical motion and thermal energy. Grouping some sources as polarization and magnetization makes useful macroscopic equations, but it does not determine how the material responds. Constitutive relations are additional models with their own domains of validity.

We first derive the free-source equations and stationary interface laws. Then we distinguish instantaneous lossless response, causal memory, oscillator absorption and conducting skin penetration. Every model states whether its parameters are constant, which sources are called free, and which energy is being counted. This avoids treating a scalar permittivity as a universal replacement for material physics.

## Bound sources and the macroscopic fields

For polarization $P$ and magnetization $M$, define bound sources by

$$\rho_b=-\nabla\cdot P,\qquad J_b=\partial_tP+\nabla\times M.$$

Their continuity equation holds identically under sufficient regularity, and distributionally for the piecewise smooth settings used below. The time derivative of bound charge cancels divergence of polarization current, while divergence of magnetization curl vanishes. This identity is why the grouping is compatible with charge conservation.

Split total charge and current into free plus bound parts. Define electric displacement and magnetic intensity as

$$D=\varepsilon_0E+P,\qquad H=B/\mu_0-M.$$

Substituting the source definitions into the microscopic equations gives

$$\nabla\cdot D=\rho_f,\qquad\nabla\times H=J_f+\partial_tD.$$

Faraday and zero magnetic divergence retain their original forms in terms of electric field and magnetic induction. These equations are exact within the declared coarse-grained source decomposition. They are not closed until polarization, magnetization and free transport are related to fields and material state.

The labels free and bound depend on the material description. Total charge and current remain the quantities entering the original vacuum-form source equations. Comparing two descriptions therefore requires translating the source split as well as the field notation. A surface charge that is free in one effective model must not be counted again as bound in the same source sum.

## Stationary interfaces and their signs

Take a fixed smooth interface with normal directed from medium one to medium two, and jump equal to side-two value minus side-one value. Assume piecewise bounded fields with well-defined traces and no additional singular dipole layer. Shrinking a pillbox and a matched loop gives

$$n\cdot[D]=\sigma_f,\qquad n\cdot[B]=0,$$

$$n\times[E]=0,\qquad n\times[H]=K_f.$$

The normal equations follow from the two divergence laws; the vanishing side-wall contributions rely on bounded fields. The tangential equations follow from curl laws, with finite time derivatives making the shrinking surface terms vanish except for an explicitly prescribed sheet current. A singular impulsive layer or moving interface needs additional distributional transport accounting and is outside this particular derivation.

The same jump expressed in total microscopic sources includes bound surface charge $-n\cdot[P]$ and bound surface current $n\times[M]$. For a polarized material next to vacuum with outward material normal, these become polarization dotted with that normal and magnetization crossed with that normal. The order of the cross product matters.

Free surface charge itself obeys a continuity law: its time derivative plus surface-current divergence plus the jump in normal free bulk current is zero. Thus a time-varying sheet cannot be prescribed independently of its supply currents. The equations describe stationary geometry; moving polarized bodies can carry bound surface charge with their motion, requiring the corresponding terms in the full source derivatives.

## A simple constitutive regime

For a homogeneous, stationary, linear and isotropic lossless medium in a limited regime, one may use $P=\varepsilon_0\chi_eE$ and $M=\chi_mH$, with real constant susceptibilities. Then displacement is constant permittivity times electric field, and magnetic induction is constant permeability times magnetic intensity. Positive permittivity and permeability give a positive quadratic energy in this instantaneous model.

The choice to relate magnetization to magnetic intensity is part of the convention. A susceptibility defined relative to magnetic induction would have a different algebraic relation to permeability. Similarly, tensors replace scalar parameters in anisotropic materials, and nonlinear media require amplitude-dependent or history-dependent laws. Ferromagnetic hysteresis is not described by one fixed positive scalar susceptibility.

Constant parameters are often accurate over a useful frequency band. They should not automatically be extended to arbitrarily high frequency, where material degrees of freedom cannot respond instantaneously. Nor does a bulk local constitutive law determine microscopic surface structure at every length scale. Those limitations specify where a macroscopic calculation can be expected to describe the physical system.

## Worked example: a dielectric sphere in a uniform field

A sphere of radius $a$ has constant positive permittivity, sits in vacuum and carries no free charge. A uniform imposed field points along the third axis at large distance. Seek an interior potential linear in position and an exterior potential equal to the imposed linear potential plus a decaying dipole term. The angular dependence is the first spherical harmonic selected by the axial field.

Write the interior field as a constant multiplier of the imposed field. Potential continuity at the surface relates that multiplier to the exterior dipole coefficient. Normal displacement continuity supplies the second equation. Solving gives

$$E_{\mathrm{in}}=\frac{3\varepsilon_0}{\varepsilon+2\varepsilon_0}E_0\hat z,$$

$$p=4\pi\varepsilon_0a^3\frac{\varepsilon-\varepsilon_0}{\varepsilon+2\varepsilon_0}E_0\hat z.$$

For explicit verification, take exterior potential $-E_0r\cos\theta+C\cos\theta/r^2$ and interior potential $-AE_0r\cos\theta$. Continuity gives $C=E_0a^3(1-A)$. The exterior radial field at the surface is $E_0(3-2A)\cos\theta$, while the interior one is $AE_0\cos\theta$. Equating their displacement components yields the stated multiplier and dipole coefficient.

Polarization is uniform inside, so volume bound charge vanishes there. Its normal surface component supplies an angular bound charge proportional to polar cosine, with zero total charge. The exterior field is therefore dipolar in addition to the imposed field, consistent with overall neutrality.

The formulas approach the neutral conducting-sphere electrostatic limit as permittivity becomes very large in this model. That limit does not establish a universal high-frequency conductor response. The imposed uniform field also has infinite global energy if extended indefinitely; it is boundary data representing a large external apparatus, not a finite isolated source whose full energy was computed here.

## Energy balance with material response

The macroscopic curl equations give

$$E\cdot\partial_tD+H\cdot\partial_tB+\nabla\cdot(E\times H)=-E\cdot J_f.$$

This follows from the same cross-product divergence identity used in vacuum, now retaining the two constitutive time derivatives explicitly. For real constant scalar permittivity and permeability, they become the time derivative of

$$u=\tfrac12\varepsilon|E|^2+\tfrac12\mu|H|^2.$$

That stored-energy formula is therefore proved for an instantaneous linear lossless closure. It is not generally valid in a dispersive or hysteretic material. When displacement depends on field history, electric field dotted with displacement derivative need not be the derivative of the same simple quadratic at the current time.

A microscopic or effective oscillator model supplies the missing material energy. With no magnetization, combine vacuum field energy with the oscillator's kinetic and restoring energies. Their exchange cancels polarization work exactly, leaving only free-carrier work and material damping. This provides a controlled example of energy accounting rather than identifying every apparent field-energy decrease as irreversible absorption.

Macroscopic electromagnetic momentum inside matter also depends on how field and material contributions are separated. The vacuum stress-energy theorem applies to the complete microscopic source system; a macroscopic field-only momentum formula needs its accompanying material balance. We do not choose between competing partial bookkeeping conventions while omitting their mechanical terms.

## Causal response and harmonic loss

A temporally causal stationary linear polarization model has the local memory form

$$P(t)=\varepsilon_0\int_0^\infty\chi(\tau)E(t-\tau)\,d\tau.$$

The kernel has no negative time lag. For harmonic convention with negative frequency times time in the exponential, its susceptibility is the integral of the kernel times positive frequency times lag in the exponential. Suitable integrability makes this function analytic in the upper complex-frequency half-plane, because the exponential decays there.

Analyticity constrains frequency response, but a complete dispersion relation requires additional decay and regularity assumptions for its contour and principal-value limits. We do not infer an unrestricted formula from the word causal alone. A spatially nonlocal material kernel would also need a physically appropriate space-time support condition; temporal causality by itself does not license instantaneous influence between arbitrary separated material points.

For a scalar harmonic susceptibility, mean polarization work is angular frequency times vacuum permittivity times its imaginary part times squared complex electric amplitude, divided by two. To derive the sign, differentiate the harmonic polarization to introduce negative imaginary frequency, then use the complex-conjugate averaging rule. A passive material in this regime has nonnegative absorbed work for positive frequency. The sign would reverse if the opposite harmonic convention were used without translating the susceptibility.

## Worked example: the damped Lorentz oscillator

Model a density of bound carriers, each with charge $q$, mass $m$, restoring frequency $\omega_0>0$ and damping coefficient $\Gamma\ge0$. Their displacement obeys

$$m\ddot x+m\Gamma\dot x+m\omega_0^2x=qE,\qquad P=Nqx.$$

A steady harmonic response gives

$$\chi_e(\omega)=\frac{Nq^2}{\varepsilon_0m(\omega_0^2-\omega^2-i\Gamma\omega)}.$$

Its imaginary part is nonnegative at positive frequency when damping is nonnegative. At zero damping and exact resonance, however, a bounded steady harmonic amplitude is unavailable; the driven undamped initial-value problem grows instead. The denominator formula must not be treated as a finite response at its singular point.

Multiply the displacement equation by carrier velocity and by number density. The time derivative of material kinetic plus restoring energy equals electric field dotted with polarization current minus $Nm\Gamma|\dot x|^2$. Add vacuum Poynting balance. Polarization work cancels, leaving the nonnegative damping term as material dissipation and any free-current work as its separate channel.

This derivation also separates causality from loss. With damping, homogeneous transients decay under the stable oscillator dynamics and the harmonic response describes the maintained long-time state. Initial conditions still matter before that state is reached. At high frequency the susceptibility tends toward zero with an inverse-frequency-square leading behavior, rather than remaining the same nonzero constant at every frequency.

## Conductivity and a quasistatic limit

For mobile carriers without a restoring term, the same velocity equation gives Drude conductivity $\sigma(\omega)=Nq^2/[m(\Gamma-i\omega)]$. With positive damping its real part is nonnegative. The DC value is finite when the damping is positive; in the zero-damping model a constant electric field accelerates carriers rather than producing a finite stationary Ohm current.

In a homogeneous conductor with real positive conductivity, permittivity and permeability in a chosen low-frequency range, Maxwell equations give

$$\nabla^2B=\mu\sigma_c\partial_tB+\mu\varepsilon\partial_t^2B.$$

When frequency times permittivity is much smaller than conductivity, neglecting the displacement-current term gives magnetic diffusion with diffusivity $1/(\mu\sigma_c)$. This is a reduced quasistatic equation. Its mathematical instantaneous tails do not replace the full electromagnetic domain-of-dependence statement at a rapidly switched wavefront, where the omitted term and material dispersion can no longer be ignored.

## Worked example: skin penetration and heating

A homogeneous conductor fills the positive third-coordinate half-space. Take a harmonic electric field parallel to the first axis with spatial dependence $e^{ikz}$. Constant real positive material parameters give

$$k^2=\mu\varepsilon\omega^2+i\mu\sigma_c\omega.$$

Choose the square-root branch with positive imaginary part, so the field decays into the passive conductor. In a good conductor, conduction dominates displacement and

$$k\simeq(1+i)/\delta,\qquad\delta=\sqrt{2/(\mu\sigma_c\omega)}.$$

The real and imaginary parts are equal at leading order: phase changes and amplitude decay occur on the same depth scale. Faraday relates magnetic intensity to electric amplitude by factor wave number divided by permeability and frequency. The mean inward Poynting flux is the real part of that factor times electric amplitude square divided by two.

Differentiating this flux with depth gives negative mean Joule heating density. In the good-conductor expression, integrating the heating over the half-space gives $\sigma_c\delta|E_0|^2/4$, exactly the incoming surface flux. The exact constant-parameter wave-number equation gives the same identity through its real-imaginary product, so the energy sign is not merely an approximation check.

This half-space solution presumes a maintained harmonic boundary field after transients. Its material constants must be valid at that frequency, and its thickness must be large compared with penetration depth to justify omitting a rear interface. Thin films, anisotropy, nonlinear heating and temperature-dependent conductivity require additional modeling.

## Exercises

### Exercise 1: a prescribed uniformly polarized sphere {#em-matter-polarized-sphere}

A sphere of radius $a$ has fixed uniform polarization $P$ and vacuum outside, with no free charge. Find its bound sources, dipole moment and uniform interior electric field. Treat polarization as prescribed rather than as susceptibility times the unknown field.

**Hint 1.** Volume bound charge vanishes; surface charge is polarization dotted with outward normal.

**Hint 2.** Match an interior linear potential and exterior dipole potential using continuity and the normal electric jump.

**Solution.** The surface charge is $P\cdot n$ and has zero integral. The resulting dipole moment is sphere volume times polarization, obtained by integrating position times that surface charge and using the spherical normal dyadic integral. The interior potential is $P\cdot x/(3\varepsilon_0)$, and the exterior potential is $a^3P\cdot x/(3\varepsilon_0r^3)$. They agree at the sphere, and their normal derivative jump supplies the stated surface source. The interior field is therefore $-P/(3\varepsilon_0)$. This depolarizing field must be combined self-consistently with a susceptibility law only if such a law is additionally imposed.

### Exercise 2: magnetization as a bound current {#em-matter-magnetized-cylinder}

An ideal infinitely long cylinder has uniform axial magnetization $M_0\hat z$ and no free current. Identify its bound side current and derive its interior magnetic induction and intensity, choosing zero exterior background.

**Hint 1.** Bound surface current is magnetization crossed with outward normal.

**Hint 2.** Compare the resulting azimuthal sheet with the continuous infinite-solenoid model.

**Solution.** The side current is azimuthal with magnitude equal to magnetization. Uniform bulk magnetization has zero curl, so there is no additional bulk bound current. The equivalent ideal solenoid gives interior induction $\mu_0M_0\hat z$ and zero exterior field under the stated background choice. Subtracting magnetization from induction divided by vacuum permeability gives zero interior magnetic intensity. Thus zero free current and zero intensity do not imply zero induction in a magnetized material. A finite cylinder has end fields and demagnetizing effects omitted by this infinite translational model.

### Exercise 3: bound charge at a dielectric interface {#em-matter-interface-bound-charge}

Vacuum is medium one and a dielectric of permittivity $2\varepsilon_0$ is medium two. There is no free surface charge. For an electric field normal to the interface, relate the two field components and compute the bound surface charge in terms of the medium-one normal field, using the stated jump normal.

**Hint 1.** Normal displacement is continuous.

**Hint 2.** Bound sheet charge is negative the normal polarization jump.

**Solution.** Displacement continuity makes the dielectric normal electric component half the vacuum component. Vacuum polarization is zero, while dielectric polarization is vacuum permittivity times that smaller electric field. The bound sheet charge is therefore negative one half vacuum permittivity times the original vacuum normal component. The total normal electric jump multiplied by vacuum permittivity gives the same result. This checks the free-source macroscopic equation against the total-source microscopic equation and the declared side-one-to-side-two normal convention.

### Exercise 4: oscillator absorption sign {#em-matter-oscillator-passivity}

Compute the imaginary part of the Lorentz-oscillator susceptibility and prove nonnegative mean absorption for positive frequency and nonnegative damping. Identify the exceptional undamped resonance.

**Hint 1.** Multiply numerator and denominator by the denominator's complex conjugate.

**Hint 2.** The imaginary numerator is proportional to damping times frequency.

**Solution.** The imaginary part is the positive prefactor times $\Gamma\omega$ divided by $(\omega_0^2-\omega^2)^2+\Gamma^2\omega^2$. It is nonnegative for the stated signs, making mean polarization work nonnegative under our harmonic convention. If damping vanishes away from resonance the response is real and mean loss zero. At simultaneous zero damping and resonant frequency, the denominator vanishes and a bounded steady harmonic response cannot be assumed. The initial-value oscillator instead contains resonant growth. Positivity of a formal expression away from that singular point does not establish a finite response at it.

### Exercise 5: Drude conductivity {#em-matter-drude-conductivity}

Derive the complex conductivity of the mobile-carrier model with no restoring force. Find its real part and DC limit for positive damping, then explain why zero damping cannot be inserted into the same finite DC conclusion.

**Hint 1.** Solve the harmonic velocity equation rather than displacement first.

**Hint 2.** Current is number density times charge times velocity.

**Solution.** The velocity amplitude is charge times electric amplitude divided by mass times damping minus imaginary frequency. Multiplying by number density and charge gives the stated conductivity. Its real part is $Nq^2\Gamma/[m(\Gamma^2+\omega^2)]$, nonnegative. The DC limit is $Nq^2/(m\Gamma)$ for positive damping. With zero damping a constant field produces continuing acceleration, so no finite stationary conductivity follows. The order and physical meaning of the zero-frequency and zero-damping limits therefore matter.

### Exercise 6: why dispersive energy needs state {#em-matter-memory-energy-state}

Use the oscillator model to explain why stored material energy cannot generally be a function of the instantaneous electric field alone. Give two allowed oscillator states with the same instantaneous field but different material energy.

**Hint 1.** At an instant of zero driving field, oscillator displacement and velocity need not vanish.

**Hint 2.** Its energy contains both displacement square and velocity square.

**Solution.** One state can have zero displacement and velocity, while another has nonzero displacement or velocity at the same instant of zero applied field. Their material energies differ even though the instantaneous electric field agrees. Initial conditions and past forcing determine those extra state variables. A quadratic expression involving only the current field cannot distinguish them and therefore cannot be the complete stored energy of this dispersive model. The combined field-plus-oscillator energy balance resolves the issue without assigning every history-dependent exchange to irreversible heat.

### Exercise 7: skin-depth scaling and absorbed power {#em-matter-skin-depth-scaling}

Within the good-conductor regime with unchanged material constants, increase frequency by a factor of four while holding the surface electric amplitude fixed. Find the change in skin depth and total mean heating per area in a sufficiently thick half-space.

**Hint 1.** Depth varies as inverse square root of frequency.

**Hint 2.** The depth-integrated heating is conductivity times depth times squared surface amplitude divided by four.

**Solution.** Skin depth is halved. With the specified fixed surface electric amplitude and unchanged conductivity, integrated heating per area is also halved. The absorbed power would obey a different comparison if incident intensity, surface magnetic amplitude or a circuit current were held fixed instead. The half-space and good-conductor conditions must remain valid at both frequencies. If the material disperses significantly over that change, the constants cannot be held fixed and this scaling no longer follows.

### Exercise 8: a magnetic diffusion mode {#em-matter-diffusion-mode}

In the reduced magnetic diffusion model, find the decay rate of $B=B_0\sin(kx)\hat y$ for positive wave number. State a timescale condition under which dropping displacement current is consistent for that mode.

**Hint 1.** The spatial Laplacian multiplies the profile by negative squared wave number.

**Hint 2.** Compare its decay rate times permittivity with conductivity.

**Solution.** The mode decays with rate $k^2/(\mu\sigma_c)$, so its time constant is permeability times conductivity divided by squared wave number. Its divergence is zero because the nonzero component varies in a different coordinate. Consistency of the reduced equation requires decay rate times permittivity much smaller than conductivity, equivalently $\varepsilon k^2/(\mu\sigma_c^2)\ll1$. This is an internal approximation check, not an assertion that the diffusion model describes arbitrarily rapid fronts. At short times or fine spatial scales the neglected second time derivative and actual frequency-dependent material response must be reconsidered.

### Exercise 9: interface source continuity {#em-matter-surface-continuity}

For a fixed flat interface with free surface charge and tangential free surface current, derive the surface continuity equation including normal bulk-current supply from both sides. Use the chapter's jump convention.

**Hint 1.** Integrate total free continuity across a thin pillbox and include current leaving its side wall along the sheet.

**Hint 2.** The top-minus-bottom normal contribution is the normal component of the bulk-current jump.

**Solution.** Charge per interface area changes at the surface-density time derivative. Tangential sheet-current divergence measures net charge leaving a surface patch along its edge. Bulk current contributes the side-two normal value minus the side-one normal value. Their sum must vanish by free charge conservation. Thus surface-density derivative plus surface-current divergence plus normal bulk-current jump is zero. A growing sheet charge requires either tangential convergence or normal supply. Reversing both side labels and the normal preserves the same physical statement, while changing only one reverses a sign incorrectly.

### Exercise 10: when a constant anisotropic energy exists {#em-matter-anisotropic-stored-energy}

Let a real constant invertible matrix define $D=\varepsilon E$ in an instantaneous electric material model. Determine when there exists a scalar stored energy whose differential is $E\cdot dD$, and when that quadratic energy is positive for every nonzero field. Do not infer that every dispersive nonreciprocal material is forbidden.

**Hint 1.** The required gradient with respect to electric components is the transpose matrix times the field.

**Hint 2.** A twice differentiable scalar has a symmetric Hessian.

**Solution.** Exactness of the work differential requires the constant transpose matrix to be symmetric, hence the permittivity matrix itself symmetric. Then stored energy, up to a constant, is one half the field contracted with that matrix and itself. Positivity for every nonzero field is exactly positive definiteness. A nonsymmetric instantaneous constant law cannot be assigned this simple scalar stored energy by ignoring its antisymmetric work. This conclusion concerns the stipulated state-free model. Frequency-dependent, biased or nonreciprocal systems can include additional dynamical material variables and a different complete energy accounting; the argument does not rule them out categorically.
