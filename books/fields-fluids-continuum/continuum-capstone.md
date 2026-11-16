
# Continuum Modelling Capstone: Flow, Heat and Waves

A continuum model is a connected statement about its body, fields, balances, constitutive laws, constraints and boundary information. This capstone develops three complete reduced problems: a magnetically braked channel, a thermally constrained bar and an acoustic pulse entering a lossless terminated layer. Each gives an exact solution of its declared equations and an independent balance identity. The examples distinguish an exact reduced solution from a theorem that the reduction approximates a larger system.

Preparation is [Newtonian flow](newtonian-fluids.md), [coupled fields](coupled-field-continuum-models.md), [thermodynamics](energy-and-thermodynamic-restrictions.md) and [acoustic interfaces](acoustics-and-elastic-waves.md). The [weak-form chapter](pde-classification-weak-forms.md) supplies the distinction between a physical balance, a solution-space statement and an approximation. The goal is to derive enough structure that every claimed transfer of mass, work or wave energy has a named source and destination.

## A model contract makes the unknowns and controls explicit

**Definition 19.1 (model contract).** Here a model contract consists of a specified region and time interval; unknown fields with units and solution regularity; local or integral balances; constitutive functions and parameter restrictions; constraints and their initial compatibility; boundary and interface data with declared normals; and the class of conclusions being sought. An exact formula, an asymptotic approximation and a numerical field have different conclusions even when represented by similar arrays.

The contract does not need to be long. It needs to say, for example, whether voltage or charge is controlled, whether a wall moves with matter or defines only a control region, and whether pressure is an equation-of-state variable or a multiplier. Omitting those choices can produce two internally plausible calculations that actually solve different problems.

For each model below, first identify which balances are exact within it. Then identify the reduction hypotheses connecting it to a wider continuum theory. Finally compute a separate energy or flux identity. This order prevents using a small residual of an already reduced equation as though it established the reduction itself.

## Example 19.1: a conducting pressure-driven channel

Take steady incompressible flow between stationary no-slip plates at y equal to minus h and h, with positive constant viscosity, density and conductivity. Impose a transverse dominant magnetic field $B_0e_y$, a positive axial pressure-drop gradient G and a short-circuit electrical condition with leading axial electrical field in the current direction zero. Seek velocity $u(y)e_x$.

In the low magnetic-Reynolds quasistatic reduction, moving Ohm's law gives current in the z direction equal to $\sigma_cB_0u$. Its cross product with the imposed field gives a braking force $-\sigma_cB_0^2u$ in the flow direction. The reduced momentum equation and boundary data are

$$\mu u''-\sigma_cB_0^2u=-G,\qquad u(-h)=u(h)=0.$$

For nonzero imposed field set $m=|B_0|\sqrt{\sigma_c/\mu}$ and solve the constant-coefficient ODE. Symmetry removes the odd hyperbolic-sine term, and the walls determine the remaining coefficient:

$$u(y)=\frac{G}{\sigma_cB_0^2}
\left[1-\frac{\cosh(my)}{\cosh(mh)}\right].$$

This profile is nonnegative, has its maximum at the centre and integrates to flux per width $2G[h-\tanh(mh)/m]/(\sigma_cB_0^2)$. A difference of two solutions tested against itself gives the integral of viscosity times squared derivative plus magnetic braking coefficient times squared value. Both terms are nonnegative and the zero boundary trace removes constants, proving uniqueness in the energy class.

As field tends to zero, the hyperbolic-cosine ratio has a quadratic expansion. The apparent division by squared field cancels, yielding $G(h^2-y^2)/(2\mu)$, exactly the Poiseuille profile. At large Hartmann parameter mh, the interior approaches a flatter profile while a wall adjustment has length approximately one divided by m. The exact reduced formula exposes both limits without assuming the same parabolic shape for every field strength.

Multiply the ODE by u and integrate. Boundary terms vanish and give

$$GQ=\mu\int_{-h}^h|u'|^2dy+
\sigma_cB_0^2\int_{-h}^hu^2dy.$$

Pressure work equals viscous heating plus conduction heating due to motion across the field. Under the short-circuit condition the electrical field work in this direction is zero, but Lorentz braking transfers kinetic work into the nonnegative moving-conduction heat term. That is the mechanical/electrical split derived in the electromagnetic chapter.

The imposed magnetic field is a dominant approximation, not an exact full Maxwell field with nonzero current and identically zero curl everywhere. A smaller induced magnetic component supplies the curl required by reduced Ampère. Its relative size is controlled by the magnetic Reynolds ordering, and its feedback is omitted at this leading level. Calling the ODE solution an exact solution of the full unrestricted electromagnetic-fluid system would therefore overstate its conclusion.

An electrical open-circuit condition would instead choose a nonzero electric field so the appropriate total current condition holds. It changes the current and the braking profile. Thus the circuit closure is part of the boundary data, not an optional parameter hidden inside the same short-circuit solution.

## Example 19.2: a thermally loaded bar with two boundary protocols

Consider a homogeneous small-strain bar of length L and constant area, with positive Young's modulus and thermal expansion coefficient alpha. Its prescribed stationary temperature deviation is $\theta(x)=\theta_0\sin(\pi x/L)$, maintained by a thermal source and endpoint temperatures. The axial law is $\sigma=E(u'-\alpha\theta)$, and zero body force makes stress constant.

With both ends fixed, integrate strain over the length. Zero total displacement gives $\sigma=-E\alpha\overline\theta=-2E\alpha\theta_0/\pi$. Integrating again with u zero at the left gives

$$u(x)=\alpha\theta_0\left[\frac L\pi(1-\cos(\pi x/L))
-\frac{2x}{\pi}\right].$$

It vanishes at both endpoints and differentiates to the required strain. The two end reactions are equal and opposite. A positive temperature rise produces compression because thermal extension is blocked, not because the elastic modulus changes sign.

With the left end fixed and the right end traction free, stress instead vanishes. Displacement derivative equals thermal strain and the final right displacement is $2\alpha\theta_0L/\pi$. This is a different boundary-value problem with the same material and temperature field. Imposing both zero right displacement and zero right traction would generally overdetermine it.

The fixed-end stored elastic energy is $L\sigma^2/(2E)$ per area, because the elastic strain is uniform even though the temperature and total displacement gradients are not. In the free-expansion protocol that elastic energy is zero. The steady final field does not determine the full heating history or its reversible thermal-mechanical exchange; it only determines this final storage and reaction state.

For constant thermal conductivity, the prescribed temperature needs volume heat supply $k\pi^2\theta/L^2$ in the stationary heat equation. Integrating it gives $2k\pi\theta_0/L$ per area. The outward conductive fluxes at the two ends sum to exactly that value. Thus the mechanical and thermal solutions each satisfy their own global balances with the stated controls.

Absolute temperature must remain positive, and linear thermal expansion assumes the strain and coefficient range support the small-strain closure. The stationary scalar heat profile does not by itself establish a dynamically consistent arbitrary heating process; a transient thermoelastic problem would include the cross term derived in the coupled chapter. Those distinctions keep this exact final-state calculation within its actual scope.

## Example 19.3: a matched interface can still return all pulse energy

Let medium one occupy a line to the left of an interface and medium two a finite layer of thickness L to its right. Assume positive constant acoustic impedances, lossless linear acoustics, a perfectly rigid far wall and no incoming wave from the left after a prescribed finite pulse. At the first interface define pressure reflection R and transmissions $T_{12}$ and $T_{21}$ using the earlier impedance formulas.

The initial reflected pulse has amplitude R times the incident pulse. The transmitted pulse travels to the rigid wall, reflects with pressure coefficient plus one and returns after round-trip delay $2L/c_2$. Its first outgoing echo into medium one has amplitude $T_{12}T_{21}=1-R^2$. The part retained in medium two reflects from that interface with coefficient $R_{21}=-R$, so successive outgoing echoes have amplitudes $(1-R^2)(-R)^n$ for nonnegative n.

Positive finite impedances make the magnitude of R less than one, so the echo series converges in the appropriate pulse norms. For a pulse short enough that different echoes do not overlap, reflected energy fractions add directly. They sum to

$$R^2+(1-R^2)^2\sum_{n=0}^\infty R^{2n}=1.$$

Thus every incident energy unit eventually returns to the left, even if the first interface reflection is tiny. When impedances match, the initial reflection is zero but a full-amplitude delayed return comes from the rigid back wall. Small initial reflection is not evidence of absorption.

For overlapping coherent harmonic signals, amplitudes must be summed before squaring. With round-trip phase factor z of unit modulus, the total reflection amplitude is $(R+z)/(1+Rz)$. Its numerator and denominator have the same squared modulus for real R and unit-modulus z, so its magnitude is one. This is the frequency-domain form of the same lossless return, including interference.

An absorbing wall, material damping or radiation into another region would remove part of the return and add an outgoing or thermal energy destination. A finite observation window can also miss late echoes while the cavity still stores energy. The model therefore needs both boundary physics and the observation interval before a missing return is called irreversible loss.

The construction assumes one-dimensional plane waves. A wider duct can have transverse cutoffs and mode conversion, while a moving interface or nonlinear pulse changes the coefficients. The exact echo solution belongs to this declared lossless linear layer, not every apparatus with a similar first reflected waveform.

## An approximation error must be separated from a model error

For the channel ODE, define the positive bilinear form from viscous gradient energy plus magnetic braking energy. If an admissible approximate profile has a residual bounded in the dual energy norm, subtract its equation from the exact one and test with their difference. Coercivity bounds the difference by that residual divided by the coercivity constant. This is an exact reduced-problem error bound.

It does not bound the difference between reduced channel flow and the full finite-domain conducting-fluid problem. End effects, induced-field feedback, uncertain conductivity or a changed circuit are model differences and enter separate residuals or asymptotic estimates. A precise small algebraic residual can coexist with a large error relative to an incorrectly chosen physical model.

For the bar, an approximate temperature changes mechanical load through its thermal strain. Subtracting the two equilibrium equations gives a stress/displacement stability estimate proportional to that temperature difference in the corresponding norm. This propagates a declared input error. It does not infer a temperature field from mechanical data without an inverse-problem uniqueness and stability argument.

For echoes, uncertainty in layer speed or thickness shifts arrival times. In an integral norm a small pulse translation can be small for a sufficiently regular pulse, while its pointwise difference near a sharp front can be large. The solution norm and signal regularity must therefore be chosen before interpreting a timing error as a small or large acoustic prediction error.

## What can be transferred to a new problem

The reusable steps are the balance and power-conjugate choices, not the exact formula's shape. A different channel, thermal boundary or termination changes the boundary-value problem. The tensor conventions, relative-flux transport, positivity restrictions and weak spaces still organize the derivation, but each new geometry needs its own existence or explicit solution argument.

These examples also distinguish a passive material law from an isolated system. A resistor dissipates while an external source supplies it. A constrained bar stores energy supplied during heating. A lossless cavity returns energy after a delay. Total conservation, local entropy production and observed subsystem storage are compatible when all boundary work and internal exchanges are included.

## Exercises with staged help

### Exercise 1

Derive the conducting-channel profile from its reduced ODE and no-slip endpoints.

<details><summary>Hint 1</summary>

Use a constant particular solution and even hyperbolic cosine homogeneous part.

</details>
<details><summary>Hint 2</summary>

The wall value fixes the coefficient relative to its value at mh.

</details>
<details><summary>Full solution</summary>

For nonzero field, the particular solution is $G/(\sigma_cB_0^2)$ and the homogeneous symmetric part is a multiple of $\cosh(my)$. Enforcing either wall value gives the displayed ratio. Symmetry satisfies both walls. Coercivity of the difference equation proves this solution is unique rather than merely one even candidate.

</details>

### Exercise 2

Show the zero-field limit of that profile is Poiseuille flow.

<details><summary>Hint 1</summary>

Expand numerator and denominator hyperbolic cosines to quadratic order in m.

</details>
<details><summary>Hint 2</summary>

Use $m^2=\sigma_cB_0^2/\mu$ before canceling the apparent singularity.

</details>
<details><summary>Full solution</summary>

The bracket is $m^2(h^2-y^2)/2+O(m^4)$ on the fixed gap. Multiplication by $G/(\sigma_cB_0^2)$ gives $G(h^2-y^2)/(2\mu)+O(B_0^2)$. The zero-field problem is therefore a continuous limit of the reduced profiles, although the written nonzero-field formula has a removable singular appearance.

</details>

### Exercise 3

Prove the channel power identity and identify both nonnegative losses.

<details><summary>Hint 1</summary>

Multiply by velocity and integrate across the gap.

</details>
<details><summary>Hint 2</summary>

Zero endpoint velocity removes the integration-by-parts term.

</details>
<details><summary>Full solution</summary>

The result is $GQ=\mu\int|u'|^2+\sigma_cB_0^2\int u^2$. The first is viscous heating and the second moving-conduction heating under the short-circuit closure. Calling both a loss from the full isolated total energy would be wrong: in a thermal model they appear as heat gain or must be removed by a reservoir.

</details>

### Exercise 4

Explain why the nonzero reduced current does not imply the leading imposed uniform field is an exact full Ampère solution by itself.

<details><summary>Hint 1</summary>

A spatially uniform field has zero curl.

</details>
<details><summary>Hint 2</summary>

The small induced field can have the curl that supplies current even when its relative amplitude is small.

</details>
<details><summary>Full solution</summary>

Reduced Ampère requires a curl proportional to current. The imposed uniform field alone cannot provide it. A smaller induced component supplies that curl; the leading momentum model uses the dominant field in the force and neglects its higher-order feedback. This is an asymptotic ordering, not an exact assertion that uniform B and nonzero J satisfy every full field equation simultaneously.

</details>

### Exercise 5

For an arbitrary prescribed bar temperature deviation, derive the constant stress under two fixed endpoints.

<details><summary>Hint 1</summary>

Equilibrium makes stress constant.

</details>
<details><summary>Hint 2</summary>

Integrate $u'=\alpha\theta+\sigma/E$ over the length.

</details>
<details><summary>Full solution</summary>

Zero net displacement gives stress $-E\alpha$ times the spatial temperature mean. The result depends on the mean even when local temperature varies. A zero-mean thermal deviation produces zero net axial reaction in this ideal uniform bar, while local displacement can still vary. Compatibility and linear constitutive range remain assumed.

</details>

### Exercise 6

For the sine temperature, compute the heat supply integral and outward endpoint fluxes.

<details><summary>Hint 1</summary>

Differentiate the stationary temperature twice for its source.

</details>
<details><summary>Hint 2</summary>

The left outward normal reverses the sign of the axial flux.

</details>
<details><summary>Full solution</summary>

Volume supply per area is $k\pi^2\theta/L^2$, whose integral is $2k\pi\theta_0/L$. Each endpoint exports $k\pi\theta_0/L$, so their sum agrees. This confirms stationary thermal balance for the prescribed profile; it does not prescribe the transient heating history.

</details>

### Exercise 7

What is the first echo amplitude from the lossless terminated layer when the initial interface pressure reflection is R?

<details><summary>Hint 1</summary>

Multiply transmission into and out of the layer.

</details>
<details><summary>Hint 2</summary>

Rigid-wall pressure reflection contributes plus one.

</details>
<details><summary>Full solution</summary>

The amplitude is $T_{12}T_{21}=1-R^2$, delayed by $2L/c_2$. Later echo amplitudes multiply by powers of minus R from internal interface reflection. When R is zero the first echo has full amplitude despite no initial reflection, so impedance matching alone does not make the terminated layer absorbing.

</details>

### Exercise 8

Prove total return of nonoverlapping pulse energy using the geometric echo series.

<details><summary>Hint 1</summary>

The reflected pulses all lie in the same outgoing medium, so their squared relative amplitudes give energy fractions.

</details>
<details><summary>Hint 2</summary>

Sum the series with ratio R squared.

</details>
<details><summary>Full solution</summary>

Initial reflected fraction is $R^2$, and echoes contribute $(1-R^2)^2\sum_{n\ge0}R^{2n}=1-R^2$. Their sum is one. Nonoverlap avoids cross terms in the pulse energies; coherent overlap requires summing amplitudes first, as in the frequency-domain formula.

</details>

### Exercise 9

For unit-modulus round-trip phase z and real $|R|<1$, prove the total harmonic reflection coefficient has magnitude one.

<details><summary>Hint 1</summary>

Compare the squared moduli of R plus z and one plus Rz.

</details>
<details><summary>Hint 2</summary>

Both contain the same real cross term and the same two squared terms.

</details>
<details><summary>Full solution</summary>

Each squared modulus is $1+R^2+2R\operatorname{Re}z$. The denominator cannot vanish when $|R|<1$, so their ratio has modulus one. A finite measured deficit can instead reflect storage, a finite time window or additional loss mechanisms absent from this ideal terminated model.

</details>

### Exercise 10

Separate reduced-equation approximation error from physical model error in the conducting-channel example.

<details><summary>Hint 1</summary>

The coercive residual bound compares two fields within one fixed ODE and boundary class.

</details>
<details><summary>Hint 2</summary>

Induced-field, circuit or end-effect changes alter that problem itself.

</details>
<details><summary>Full solution</summary>

A dual residual and coercivity bound control distance to the exact short-circuit reduced profile. They do not bound neglected induced-field feedback, finite channel ends, uncertain constitutive parameters or a different electrical closure. Those require separate model perturbation or asymptotic estimates with their own data and norms. A nearly exact numerical solution of the wrong reduced problem can remain a poor physical prediction.

</details>

## Sources and continuation

Gurtin, *An Introduction to Continuum Mechanics*, provides the balance viewpoint; Chorin and Marsden, *A Mathematical Introduction to Fluid Mechanics*, develops the fluid reductions. The coupled and wave chapters provide the explicitly linked field and interface identities used here. Further work can extend these three contracts to new geometry or constitutive behaviour, but must carry their boundary power, constraints and solution spaces with the extension.
