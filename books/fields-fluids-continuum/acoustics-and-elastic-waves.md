
# Acoustics and Elastic Wave Propagation

## Learning purpose

This chapter studies small-amplitude wave propagation in fluids and solids. You will learn the acoustic wave equation, separation of variables in bounded domains, and the reflection and transmission of waves at interfaces.

## Acoustic wave equation

For small perturbations of a uniform fluid at rest with density $\rho_{0}$ and pressure $p_{0}$, write $\rho = \rho_{0} + \rho'$, $p = p_{0} + p'$, $v = v'$. Linearizing the compressible Euler equations and eliminating $v'$ gives the acoustic wave equation

$$\frac{\partial^{2} p'}{\partial t^{2}} = c^{2} \Delta p',$$

where $c = \sqrt{(\partial p/\partial \rho)_{s}}$ is the speed of sound. In one dimension, the general solution is d'Alembert's solution:

$$p'(x, t) = f(x - ct) + g(x + ct),$$

representing right-moving and left-moving waves.

## Separation of variables in a duct

Consider a duct of length $L$ with rigid walls ($\partial p'/\partial x = 0$ at $x = 0, L$). Seeking solutions $p'(x, t) = X(x) T(t)$ gives

$$\frac{T''}{c^{2} T} = \frac{X''}{X} = -k^{2}.$$

The spatial eigenfunctions are $X_{n}(x) = \cos(n\pi x/L)$ with eigenvalues $k_{n} = n\pi/L$ for $n = 0, 1, 2, \ldots$. For $n\geq 1$, the temporal solutions are $T_{n}(t) = A_{n} \cos(\omega_{n} t) + B_{n} \sin(\omega_{n} t)$ with $\omega_{n} = c k_{n} = n\pi c/L$. The exceptional $n=0$ equation is $T_{0}''=0$, so $T_{0}=A_{0}+B_{0}t$; it is a spatially uniform zero-frequency mode, not an oscillation. In a closed linear acoustic model, a nonzero $B_{0}$ represents an unbounded change of the mean pressure and is normally excluded by the conserved mean or by initial data. The modes $n \ge 1$ are standing waves with $n$ pressure nodes in the open interval when the endpoints are rigid pressure antinodes.

## Elastic waves in a rod

For longitudinal waves in a thin elastic rod, the displacement $u(x, t)$ satisfies

$$\rho \frac{\partial^{2} u}{\partial t^{2}} = E \frac{\partial^{2} u}{\partial x^{2}},$$

where $E$ is Young's modulus. The wave speed is $c_{0} = \sqrt{E/\rho}$. For steel with $E = 200 \, \mathrm{GPa}$ and $\rho = 7850 \, \mathrm{kg}/\mathrm{m}^{3}$, $c_{0} \approx \sqrt{2.55 \times 10^{7}} \approx 5050 \, \mathrm{m}/\mathrm{s}$.

## Reflection and transmission at an interface

When a plane wave hits an interface between two media, part reflects and part transmits. For normal incidence on a plane interface between media 1 and 2 with impedances $Z_{1} = \rho_{1} c_{1}$ and $Z_{2} = \rho_{2} c_{2}$, the reflection and transmission coefficients for pressure are

$$R = \frac{Z_{2} - Z_{1}}{Z_{2} + Z_{1}}, \qquad T = \frac{2 Z_{2}}{Z_{2} + Z_{1}}.$$

When $Z_{2} \gg Z_{1}$ (e.g., sound in air hitting water), $R \approx 1$ and $T \approx 2$; nearly all energy reflects. When $Z_{2} = Z_{1}$, $R = 0$ and $T = 1$; perfect transmission.

## The first-order acoustic system retains more than pressure

Let K be reference density times sound speed squared. Smooth small perturbations of the uniform rest state obey $p_t+K\operatorname{div}v=0$ and $\rho_0v_t+\nabla p=0$. Differentiating the first equation in time and inserting the second produces the pressure wave equation. This derivation assumes a positive isentropic derivative, constant reference state and perturbations small enough that quadratic terms are neglected.

The scalar pressure equation does not contain every velocity degree of freedom. A divergence-free initial velocity with zero pressure perturbation can persist as a stationary vortical part of this ideal linearisation. Given pressure and velocity data, the initial pressure derivative must equal minus K times the initial velocity divergence. Choosing that derivative independently can give a solution of the scalar wave equation that does not match the intended first-order fluid state.

In a rigid closed cavity, integrating the first-order pressure equation gives a constant mean pressure because the boundary volume flux is zero. Thus the formal uniform mode linear in time in the second-order equation is excluded by compatible first-order data. This is a concrete compatibility restriction, rather than merely a preference for bounded oscillations. The constant mean pressure itself is a zero-frequency state and should not be counted as a positive-frequency standing mode.

## A positive energy controls the linear evolution

Multiply the pressure equation by pressure divided by K and momentum by velocity. The pressure-gradient and divergence terms combine into a divergence, giving

$$\partial_t\left(\frac{p^2}{2K}+\frac{\rho_0|v|^2}{2}\right)
+\operatorname{div}(pv)=0.$$

The energy density is positive because both reference density and K are positive. Its boundary flux is acoustic pressure times normal velocity. Rigid walls and homogeneous pressure-release boundaries have zero flux. A homogeneous boundary impedance relation $p=Z_bv_n$ with nonnegative scalar $Z_b$ instead removes energy at rate $Z_bv_n^2$ per area, providing a simple passive boundary model.

For two smooth solutions with identical data and the same energy-noninjecting boundary condition, apply this identity to their difference. Initially zero total energy stays zero, proving uniqueness in that class. The finite-energy extension is supplied by the wave/symmetric-system framework in the [hyperbolic weak-PDE chapter](../pde-weak-theory-waves-patterns/hyperbolic-conservation-laws.md). The ideal identity does not account for viscosity or thermal attenuation, which require additional dissipative terms and boundary layers.

For a one-way plane wave, velocity amplitude is pressure amplitude divided by the positive acoustic impedance, with sign determined by propagation direction. Pressure and velocity then have equal contributions to time-averaged energy. For a standing wave they can be out of phase locally, so a large pressure amplitude need not imply a large net travelling energy flux.

## Interface amplitudes follow from two continuity conditions

Take normal incidence at a stationary bonded fluid interface with no surface mass or energy storage, and use pressure amplitudes A incident, B reflected and C transmitted. Pressure continuity gives $A+B=C$. The velocity amplitudes have opposite signs for opposite propagation directions, so normal-velocity continuity gives $(A-B)/Z_1=C/Z_2$. Solving this two-by-two system proves the coefficients in the opening.

For positive real impedances, the mean travelling-wave intensity is squared pressure amplitude divided by twice impedance under the peak-amplitude convention. Hence the energy reflection fraction is $R^2$ and the transmission fraction is $(Z_1/Z_2)T^2$. Substitution shows that their sum is one. This is a lossless interface result, not an absorption model.

### Example 15.1: a pressure amplitude larger than the incident one

Let the second impedance be three times the first. The reflected pressure amplitude is one half the incident amplitude, while the transmitted pressure amplitude is three halves. The energy fractions are one quarter reflected and three quarters transmitted. Thus a transmission amplitude above one does not create energy: the impedance changes the pressure-to-velocity relation and the energy normalisation.

In the limit of a very high second impedance, reflected pressure approaches the incident pressure and transmitted pressure approaches twice it, but transmitted velocity and energy tend to zero. The boundary behaves like a rigid wall. The opposite low-impedance limit reverses the reflected pressure sign and approximates a pressure-release boundary. These limiting statements keep amplitude, velocity and energy distinct.

## Boundary types select different standing spectra

Rigid ends impose zero normal velocity and, through momentum, zero normal pressure derivative for a smooth fixed wall. Ideal open ends are approximated as pressure-release boundaries, although a real aperture has radiation impedance and an end correction. On an interval, two rigid or two pressure-release ends have positive modal wave numbers that are integer multiples of pi divided by length, but their pressure eigenfunctions are cosine or sine respectively.

One rigid end and one pressure-release end give a quarter-wave family. Choose a cosine profile at the rigid left end, then require its value to vanish at the right. The wave numbers are $(n+1/2)\pi/L$ for nonnegative n. Their positive fundamental frequency is sound speed divided by four times length.

### Example 15.2: a quarter-wave cavity

Take a cavity of length L with rigid left end and ideal pressure-release right end. Its lowest pressure mode is proportional to $\cos(\pi x/(2L))$. Pressure is largest at the rigid end and zero at the open end. Velocity has the complementary spatial pattern and vanishes at the rigid end.

The next allowed frequency is three times the fundamental, not twice it. A half-wave formula copied from the two-open-end source exercise would therefore predict the wrong spectrum. Changing a boundary idealisation changes the mode family even though the bulk wave speed and PDE remain identical.

## A duct has transverse modes and cutoffs

In a rigid rectangular duct, separate a longitudinal exponential from a transverse Neumann eigenfunction. Its transverse eigenvalue is $\pi^2(m^2/a^2+n^2/b^2)$ for nonnegative integers m and n. The frequency relation is squared frequency equal to sound speed squared times longitudinal wave number squared plus that transverse eigenvalue.

For a fixed nonzero transverse mode, frequencies below its cutoff give an imaginary longitudinal wave number and an evanescent field rather than an ordinary propagating travelling wave. The uniform transverse mode has zero eigenvalue and no positive cutoff in this ideal model. Thus one-dimensional acoustics describes the low-frequency propagating family only when higher modes are absent or evanescent in the region of interest.

An evanescent near field can still be important near an aperture or source even when it carries no far propagating mode of that type. Applying the plane-wave impedance relation indiscriminately to such a field ignores its spatial structure. Radiation and matching problems need the complete set of modes compatible with their boundary geometry.

## Rod waves have a mechanical impedance too

For the one-dimensional rod model, multiply the displacement equation by its velocity. The energy density is kinetic plus $E u_x^2/2$, and its flux is $-E u_xu_t$. At a fixed displacement end the velocity is zero; at a traction-free end the stress is zero. Both give zero energy flux, but select different displacement eigenfunctions.

For a travelling rod wave define a compression-positive force amplitude as minus cross-sectional area times axial stress. Its ratio to particle velocity is area times density times longitudinal rod speed. Continuity of velocity and axial force at an ideal junction then gives reflection and transmission formulas with this mechanical impedance, analogous to the pressure formulas. The area factor is essential when rods of different cross sections are joined.

A fixed end reflects compression with the same force sign, while a free end reflects it with opposite force sign. Displacement and force reflection signs differ because velocity/stress have opposite directional signs in a travelling wave. Naming which amplitude is being reflected avoids an apparent disagreement between the two familiar endpoint rules.

The rod speed uses Young's modulus because its long-wavelength approximation permits lateral contraction. The three-dimensional bulk longitudinal speed uses a different acoustic stiffness, as the elasticity chapter derived. Neither formula can be substituted for the other without its geometric and frequency assumptions.

## Spherical spreading includes a reactive near field

### Example 15.3: an outgoing spherical harmonic wave

For radius greater than an excluded source region, pressure amplitude proportional to $e^{ikr}/r$ solves the time-harmonic wave equation with frequency equal to sound speed times k. Radial momentum gives velocity amplitude equal to pressure divided by impedance times $1+i/(kr)$ under the time factor $e^{-i\omega t}$.

The additional inverse-radius factor is in quadrature and represents reactive near-field motion. Far from the source the plane-wave impedance relation is recovered. The mean outward intensity is squared pressure amplitude divided by twice impedance, so it decreases as inverse radius squared. Multiplying by spherical area gives radius-independent radiated power in the lossless region.

The origin is excluded because the field is singular there. Its source strength and near-boundary structure must come from a source model. A pointwise formula outside a radiator does not supply that radiator's internal mechanical energy balance or justify including its singular centre as a smooth acoustic point.

## Linearisation and measurement have distinct limits

Small-amplitude acoustics neglects quadratic advection and thermodynamic nonlinearities. Finite-amplitude steepening can accumulate over a long propagation distance even when local perturbations start small. Dissipation, dispersion and boundary layers can then compete with nonlinear effects; the lossless linear model does not decide that regime.

A resonance frequency also depends on the boundary and loading model. A real nominally open pipe radiates into its surroundings, and a compliant wall couples acoustic pressure to structural motion. Its frequencies and damping can differ from the ideal rigid/pressure-release calculations without changing the material's local sound speed. Those are different boundary-value systems rather than errors to hide in an adjusted bulk wave equation.

The source exercises retain their original ideal numerical data. They illustrate exact model calculations, not calibration of every real material with the same name. Mode identification, units and boundary assumptions must accompany a comparison before one infers an elastic constant or an acoustic impedance from a measured frequency.

## Summary and connections

This chapter derived the acoustic wave equation, solved it by separation of variables, and analysed wave reflection at interfaces. These results connect the continuum mechanical foundations to practical wave propagation problems.

In the previous chapter, *Compressible Flow and Shock Waves*, we studied finite-amplitude compressible phenomena. Electromagnetic field balance follows, before coupled models, weak forms and the capstone.

## Exercises

### Exercise 1
Find the fundamental frequency of an organ pipe of length $L = 2 \, \mathrm{m}$ open at both ends. The speed of sound in air is $c \approx 340 \, \mathrm{m}/\mathrm{s}$.

<details><summary>Hint 1</summary>

Open endpoints are pressure nodes in the ideal boundary model.

</details>

<details><summary>Hint 2</summary>

Convert angular frequency to ordinary frequency after selecting the first mode.

</details>

<details><summary>Full solution</summary>

**Solution.** For an open pipe, pressure nodes at both ends give $k_{n} = n\pi/L$ and $\omega_{n} = n\pi c/L$. The fundamental ($n = 1$) frequency is $f_{1} = c/(2L) = 340/4 = 85 \, \mathrm{Hz}$.

</details>

### Exercise 2
A steel rod ($\rho = 7850 \, \mathrm{kg}/\mathrm{m}^{3}$, $E = 200 \, \mathrm{GPa}$) has length $L = 1 \, \mathrm{m}$ and is fixed at both ends. Find the three lowest longitudinal vibration frequencies.

<details><summary>Hint 1</summary>

Use the rod longitudinal speed rather than the bulk-solid P-wave speed.

</details>

<details><summary>Hint 2</summary>

Fixed endpoints give the integer displacement-node family.

</details>

<details><summary>Full solution</summary>

**Solution.** $c_{0} = \sqrt{E/\rho} \approx 5050 \, \mathrm{m}/\mathrm{s}$. Fixed ends require displacement nodes: $k_{n} = n\pi/L$. Frequencies $f_{n} = n c_{0}/(2L) = n \cdot 2525 \, \mathrm{Hz}$. The lowest three are $2525 \, \mathrm{Hz}$, $5050 \, \mathrm{Hz}$, and $7575 \, \mathrm{Hz}$.

</details>

### Exercise 3
A sound wave in air ($\rho_{1} = 1.2 \, \mathrm{kg}/\mathrm{m}^{3}$, $c_{1} = 340 \, \mathrm{m}/\mathrm{s}$) hits a water surface ($\rho_{2} = 1000 \, \mathrm{kg}/\mathrm{m}^{3}$, $c_{2} = 1500 \, \mathrm{m}/\mathrm{s}$). Find the reflection and transmission coefficients and the fraction of energy reflected.

<details><summary>Hint 1</summary>

Compute each positive impedance before forming the pressure ratios.

</details>

<details><summary>Hint 2</summary>

Energy reflection is the square of the pressure reflection coefficient for this lossless incident medium.

</details>

<details><summary>Full solution</summary>

**Solution.** $Z_{1} = 1.2 \cdot 340 = 408 \, \mathrm{kg}/(\mathrm{m}^{2} \cdot \mathrm{s})$, $Z_{2} = 1000 \cdot 1500 = 1.5 \times 10^{6} \, \mathrm{kg}/(\mathrm{m}^{2} \cdot \mathrm{s})$. $R = (1.5 \times 10^{6} - 408)/(1.5 \times 10^{6} + 408) \approx 0.9995$. $T \approx 1.9995$. The energy reflection coefficient is $R^{2} \approx 0.999$, so nearly all energy reflects.

</details>

### Exercise 4

Prove that the pressure mean is constant in a closed rigid cavity under the first-order acoustic system.

<details><summary>Hint 1</summary>

Integrate the pressure time equation over the cavity.

</details>
<details><summary>Hint 2</summary>

The boundary normal velocity is zero.

</details>
<details><summary>Full solution</summary>

The time derivative of integrated pressure is minus K times the boundary volume flux, hence zero. Therefore the scalar wave equation's uniform linear-in-time mode is incompatible with this closed first-order system unless its slope is zero. The constant pressure mean remains an allowed zero-frequency state.

</details>

### Exercise 5

For an interface with $Z_2=3Z_1$, compute pressure and energy coefficients and verify total transmitted-plus-reflected energy.

<details><summary>Hint 1</summary>

Solve the pressure and normal-velocity continuity equations.

</details>
<details><summary>Hint 2</summary>

Transmission energy has the impedance ratio factor.

</details>
<details><summary>Full solution</summary>

Pressure coefficients are R equal to one half and T equal to three halves. Reflected energy is one quarter and transmitted energy $(1/3)(9/4)=3/4$, summing to one. Using T squared alone as an energy fraction would incorrectly predict energy creation.

</details>

### Exercise 6

Derive the quarter-wave fundamental for a rigid-left, pressure-release-right cavity.

<details><summary>Hint 1</summary>

A cosine spatial profile satisfies the left derivative condition.

</details>
<details><summary>Hint 2</summary>

Its first zero occurs after one quarter of a wavelength.

</details>
<details><summary>Full solution</summary>

The smallest positive wave number is $\pi/(2L)$, so angular frequency is $\pi c/(2L)$ and ordinary frequency $c/(4L)$. Higher modes have odd multiples of this frequency. A two-pressure-release-end half-wave formula describes a different boundary class.

</details>

### Exercise 7

Show that the nonnegative impedance condition $p=Z_bv_n$ cannot inject acoustic energy into a fixed cavity.

<details><summary>Hint 1</summary>

Use pressure times normal velocity as outward energy flux.

</details>
<details><summary>Hint 2</summary>

The flux becomes a nonnegative square times impedance.

</details>
<details><summary>Full solution</summary>

The outward flux is $Z_bv_n^2\ge0$, so its contribution to stored-energy rate is nonpositive. This is a homogeneous passive relation. A prescribed incoming signal or active impedance would add a supply and change the energy estimate.

</details>

### Exercise 8

Identify the angular cutoff frequency $\omega_c$ of a transverse duct mode with Laplacian eigenvalue lambda and describe the below-cutoff longitudinal behaviour.

<details><summary>Hint 1</summary>

Use squared frequency equal to $c^2(k_x^2+\lambda)$.

</details>
<details><summary>Hint 2</summary>

A negative longitudinal squared wave number gives an exponential spatial dependence.

</details>
<details><summary>Full solution</summary>

The angular cutoff is $c\sqrt\lambda$. Below it $k_x^2$ is negative and the corresponding mode is evanescent rather than an ordinary travelling mode. For the uniform transverse mode lambda is zero, so there is no positive cutoff in this ideal duct model.

</details>

### Exercise 9

Why does an ideal junction of different rod areas use $A\rho c_0$ rather than only $\rho c_0$ as its force–velocity impedance?

<details><summary>Hint 1</summary>

The junction transmits axial force, not stress alone.

</details>
<details><summary>Hint 2</summary>

Multiply stress by the corresponding section area.

</details>
<details><summary>Full solution</summary>

Travelling compression-positive force amplitude is area times the corresponding stress amplitude. Since stress/particle-speed magnitude is $\rho c_0$, force/particle-speed magnitude is $A\rho c_0$. Force and velocity continuity then give the correct power-conserving junction relation. Stress continuity without the area factor would generally violate force balance.

</details>

### Exercise 10

For an outgoing spherical wave, explain why constant radiated power is compatible with decreasing intensity and pressure amplitude.

<details><summary>Hint 1</summary>

Pressure amplitude decreases as inverse radius.

</details>
<details><summary>Hint 2</summary>

Intensity is quadratic while sphere area grows quadratically.

</details>
<details><summary>Full solution</summary>

Mean intensity decreases as $1/r^2$, and multiplication by $4\pi r^2$ gives constant outward power. The pressure amplitude decreases as $1/r$. The reactive near-field velocity component is in quadrature and does not alter that mean power in the lossless source-free exterior. The singular source centre remains outside the smooth model region.

</details>
