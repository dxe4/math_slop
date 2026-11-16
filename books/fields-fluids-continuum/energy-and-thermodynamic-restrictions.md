
# Energy and Thermodynamic Restrictions

## Learning purpose

This chapter derives the energy balance from the first law of thermodynamics, introduces the entropy inequality, and shows how thermodynamics constrains constitutive laws. You will learn to identify the mechanical and thermal power terms and to check whether a proposed constitutive relation is thermodynamically admissible.

## Energy balance

Let $e$ be the specific internal energy (energy per unit mass), $q$ the heat flux vector, and $r$ the heat supply per unit mass. The first law of thermodynamics for a material region $\Omega(t)$ states that the rate of change of total energy equals the power of external forces plus the rate of heat addition:

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} \rho \left( e + \frac{|v|^{2}}{2} \right) \mathrm{d}v = \int_{\partial \Omega(t)} (\sigma n) \cdot v \, \mathrm{d}a + \int_{\Omega(t)} \rho b \cdot v \, \mathrm{d}v - \int_{\partial \Omega(t)} q \cdot n \, \mathrm{d}a + \int_{\Omega(t)} \rho r \, \mathrm{d}v.$$

Using the transport theorem, the divergence theorem, and the momentum balance, the kinetic energy can be separated to yield the local internal energy balance:

$$\rho \frac{De}{Dt} = \sigma : D - \nabla \cdot q + \rho r,$$

where $D$ is the rate of deformation tensor and $\sigma : D = \sigma_{ij} D_{ij}$ is the stress power (mechanical power per unit volume converted to internal energy).

**Sign conventions.** The heat flux vector $q$ is defined so that $-q \cdot n$ is the heat flux into the region across a surface with outward normal $n$. Some texts define $q$ with the opposite sign; always check the convention when comparing formulas.

## Entropy inequality

Let $\eta$ be the specific entropy. The Clausius–Duhem inequality in local form is

$$\rho \frac{D\eta}{Dt} \ge -\nabla \cdot \left( \frac{q}{T} \right) + \frac{\rho r}{T},$$

where $T > 0$ is the absolute temperature. This inequality states that the rate of entropy production is nonnegative.

Combining the energy balance and the entropy inequality, and introducing the Helmholtz free energy $\psi = e - T \eta$, we obtain the reduced dissipation inequality:

$$\rho \left( \frac{D\psi}{Dt} + \eta \frac{DT}{Dt} \right) - \sigma : D + \frac{q \cdot \nabla T}{T} \le 0.$$

For a process with fixed temperature ($DT/Dt = 0$) and Fourier heat conduction $q = -k \nabla T$ with $k \ge 0$, the thermal dissipation is

$$\frac{q \cdot \nabla T}{T} = -\frac{k |\nabla T|^{2}}{T} \le 0,$$

which contributes negatively to the left side, satisfying the inequality. The mechanical dissipation $\sigma : D$ must be handled by the constitutive law.

## Thermodynamic constraints on constitutive laws

Energy conservation alone does not determine material response; it constrains admissible closure. A constitutive equation that violates the entropy inequality may create a perpetual local source under the model's own assumptions.

For example, the reversible linear-elastic relation $\sigma=\partial W/\partial\varepsilon$ makes the mechanical part of the isothermal dissipation inequality an equality for any Lamé parameters. One usually imposes the additional material-stability requirement that

$$W=\mu\varepsilon:\varepsilon+\frac{\lambda}{2}(\operatorname{tr}\varepsilon)^2$$

be positive definite. That separate requirement gives $\mu>0$ and $3\lambda+2\mu>0$. Thus constitutive admissibility under the entropy inequality and positive elastic stiffness are related checks, but the latter does not follow from the reversible equality alone.

## Separating kinetic energy fixes the mechanical power term

The total-energy balance assumes the classical traction and body-force model, heat flux with the declared outward sign, mass conservation and sufficient smoothness for transport and integration by parts. Its stored density is mass density times specific internal plus kinetic energy. A volumetric energy density would be a different variable and must not be substituted without the density factor.

Dot the local momentum equation with velocity. The result is the kinetic-energy rate per volume. The tensor product rule gives $\operatorname{div}(\sigma^Tv)=v\cdot\operatorname{div}\sigma+\sigma:\nabla v$, so the boundary traction power splits into kinetic-force power and local stress power. Subtracting the kinetic equation from total energy cancels body-force power and leaves internal energy with the full velocity-gradient contraction. Classical angular momentum supplies symmetric stress, reducing that contraction to $\sigma:D$.

This derivation identifies the assumption behind the symmetric power form. A generalised continuum with couples can have additional rotational energy and couple-power terms. Using its nonsymmetric force stress with only the classical $\sigma:D$ expression would discard part of its mechanical model. Likewise, elastic stored energy and viscous heat production are different possible destinations of stress power; the balance alone does not decide their split.

## Entropy production has an explicit nonnegative density

Define the local entropy production as specific entropy rate times density plus the divergence of heat entropy flux minus supplied heat divided by absolute temperature. The stated entropy inequality makes it nonnegative. Expanding the heat-flux divergence and substituting the energy equation gives

$$T\zeta=\sigma:D-\rho\frac{D\psi}{Dt}
-\rho\eta\frac{DT}{Dt}-\frac{q\cdot\nabla T}{T}\ge0.$$

This is the same reduced inequality with its sign written as production. The expansion uses $\operatorname{div}(q/T)=\operatorname{div}q/T-q\cdot\nabla T/T^2$. Absolute temperature must be positive throughout the region where division is used. A Celsius numerical value cannot be inserted into those denominators without conversion.

The inequality is a pointwise restriction within a specified constitutive process class. It does not prove existence of a solution of the coupled field equations, positivity of every material modulus or stability of every equilibrium. Those properties can need further convexity, heat-capacity and ellipticity assumptions. The examples below separate a reversible equality from those additional requirements.

## A simple thermoelastic closure exposes rate coefficients

In a constant-density small-strain model let the specific free energy depend smoothly on temperature and symmetric strain, and let stress and entropy depend only on that local state. Assume the constitutive process class permits independent instantaneous strain and temperature rates, with zero temperature gradient available. Insert the free-energy chain rule into the reduced inequality.

The coefficients of arbitrary positive and negative strain rates must vanish, giving stress equal to density times the strain derivative of specific free energy. The coefficient of arbitrary temperature rate likewise gives entropy equal to minus its temperature derivative. These are constitutive restrictions under the stated rate-independence and process-richness hypotheses, not identities obtained from the first law alone.

The remaining thermal term requires minus heat flux dotted with temperature gradient to be nonnegative. For Fourier conduction with scalar nonnegative conductivity it has the desired sign. If the conductivity is a matrix K, the condition is that its symmetric part be positive semidefinite, since a vector's quadratic form ignores the skew part. Material symmetry and observer covariance can impose additional restrictions on that matrix; dissipation alone checks this quadratic sign.

For a rigid body with specific internal energy c times temperature, choose specific entropy $c\log(T/T_{\rm ref})$ plus a reference constant. Its derivative is c divided by temperature, and the associated free energy obeys the preceding thermal identity. Positive c gives positive heat capacity. The reference temperature inside the logarithm makes its argument dimensionless; changing it shifts the reference entropy without changing its temperature derivative.

## Viscous coefficients have separate volumetric and shear conditions

For a compressible Newtonian viscous part $2\mu D+\lambda_v(\operatorname{tr}D)I$, decompose the rate into its traceless part and one third its trace times identity. Orthogonality gives dissipation

$$2\mu|\operatorname{dev}D|^2+
\left(\lambda_v+\frac{2\mu}{3}\right)(\operatorname{tr}D)^2.$$

It is nonnegative for every symmetric rate if and only if the shear coefficient is nonnegative and the parenthesized bulk-viscosity coefficient is nonnegative. Sufficiency follows from the displayed sum. Necessity follows by choosing separately a nonzero traceless rate and a pure dilation. These are nonstrict entropy-production restrictions; strict positivity is an additional desired dissipation property.

The equilibrium pressure part must be accounted for with reversible volumetric storage in the chosen compressible thermodynamic model. In an incompressible model its contraction with D vanishes because the trace is zero. Only the shear restriction is then visible in the accessible rate class. One cannot recover a compressible bulk-viscosity condition by testing solely incompressible motions.

The symbol for a viscosity coefficient must also be distinguished from the Lamé parameter in elastic energy. They can share a conventional Greek letter while having different units and roles: viscosity multiplies a rate and produces irreversible work, while elastic stiffness multiplies a strain and stores reversible work. Matching the letters does not identify the material constants.

### Example 6.1: adiabatic simple-shear heating

Take an incompressible fluid in homogeneous simple shear of constant shear rate gamma, with scalar viscosity mu, constant density and specific heat c. Its two symmetric off-diagonal rate entries are gamma divided by two, so $D:D=\gamma^2/2$. With no heat-flux divergence and no heat supply, the internal-energy equation gives $\rho c\dot T=\mu\gamma^2$.

The temperature therefore rises linearly from its initial positive value at rate $\mu\gamma^2/(\rho c)$. The mechanical boundary work needed to sustain shear becomes internal heat. If one instead insists on a uniform fixed temperature, heat must be removed at precisely the corresponding rate in this idealised homogeneous model. Declaring both adiabatic isolation and fixed temperature with nonzero dissipative shear would violate the energy equation.

This calculation assumes the coefficients remain constant over the resulting temperature range and neglects effects outside the homogeneous model. Temperature-dependent viscosity or density changes modify it. The exact result is useful because it exposes the direction and units of the energy transfer before any such extension is introduced.

### Example 6.2: steady conduction produces entropy without storing energy

On a rigid rod with constant positive conductivity, fix positive endpoint temperatures $T_h>T_c$. The steady temperature is affine, with constant rightward heat flux $q=k(T_h-T_c)/L$. Internal energy has no time rate and the flux divergence is zero, so energy balance holds without a volume supply.

Entropy production is nevertheless positive. Integrating $k(T')^2/T^2$ along the rod gives $q(1/T_c-1/T_h)>0$. The outgoing entropy flux at the cold end exceeds the incoming entropy flux at the hot end by that amount. Energy flux is unchanged between the two ends, whereas the same energy carries more entropy at the lower absolute temperature.

Equal endpoint temperatures give zero flux and zero production. Reversing the ordering reverses the heat-flow direction but leaves the production nonnegative. A negative conductivity would reverse that sign and violate the stated local inequality for a nonzero gradient, even if an algebraic stationary profile could still be written.

## Reversible storage does not imply material stability

### Example 6.3: negative stiffness still gives a reversible identity

In one small-strain dimension take volumetric energy $W(\varepsilon)=-E\varepsilon^2/2$ with positive E, and define stress as its derivative. The work rate equals the energy derivative exactly, so the isothermal mechanical dissipation is zero. Yet the stored energy is concave and the reference state is unstable as a material equilibrium.

For a displacement field with constant density, the resulting dynamic equation is $\rho u_{tt}=-E u_{xx}$. A sine mode has amplitude satisfying $a''=(E/\rho)n^2a$ and therefore exponential growth. Higher spatial frequencies grow faster. The reversible equality is satisfied while positive stiffness and a well-behaved wave model fail.

Thus the entropy inequality cannot be used as a proof of positive elastic moduli in a purely reversible closure. The positive-definite isotropic energy conditions stated earlier are separate stability assumptions. Similarly a compatible entropy/free-energy identity does not by itself force positive heat capacity; the conventional positive-capacity requirement supports a stable thermal response and the forward heat equation.

## Finite deformation uses reference power consistently

For an isothermal hyperelastic body, let a free energy per reference volume depend on F, and let first Piola stress be its derivative with respect to F. The reference work rate is $P:\dot F$. The chain rule makes that rate equal to the stored reference-energy rate, giving a reversible mechanical equality in consistent units.

Frame indifference requires the energy at RF to equal that at F for every proper spatial rotation. Differentiate a smooth rotation path through identity with skew rate W. The resulting condition is $P:WF=0$ for every skew W, equivalently $PF^T$ symmetric. Since $PF^T=J\sigma$, this matches classical Cauchy stress symmetry. It connects an objective constitutive energy to the angular-momentum condition without confusing the two-point P with a symmetric same-space tensor.

The small-strain expressions are approximations to such finite-deformation descriptions under their own scaling. A reference-volume energy, current-volume energy and specific energy differ by Jacobian and density factors. The appropriate power-conjugate stress changes with that choice. Keeping the measure explicit prevents a formally correct derivative of the wrong energy density from being called a constitutive stress.

## Global balances need their boundary entropy flux

Integrate the entropy inequality over a material body. The heat entropy flux through its boundary and the supplied heat divided by local absolute temperature remain on the right. An isolated adiabatic body with no entropy-carrying supply has nondecreasing total entropy. A subsystem exchanging heat can have decreasing stored entropy while exporting or importing the corresponding flux; the local production still remains nonnegative.

An isothermal experiment typically involves such an exchange with a reservoir. Its stored internal energy need not be conserved, because mechanical work and heat removal can balance. Conversely, an energy-conserving closed system can redistribute energy internally and produce entropy. These are different integrated statements, with different fluxes and different equality or inequality signs.

For rough weak solutions, the total-energy equation and entropy inequality require their own integral formulations and trace classes. A smooth chain-rule derivation cannot simply be repeated at a shock. The [weak-PDE entropy chapter](../pde-weak-theory-waves-patterns/conservation-laws-shocks.md) illustrates that distinction in a scalar law; thermodynamic entropy for continuum systems needs its system-specific constitutive and admissibility structure.

## Summary and connections

This chapter derived the local energy balance, introduced the entropy inequality, and showed how thermodynamics restricts constitutive modelling. The key insight is that constitutive laws must be checked against dissipation inequalities, not just force balance.

In the previous chapter, *Cauchy Stress and Momentum Balance*, we established the mechanical balance laws. In the next chapter, *Objectivity and Constitutive Principles*, we examine the frame-indifference requirements that further restrict admissible constitutive forms.

## Exercises

### Exercise 1
For an incompressible Newtonian fluid with $\sigma = -p I + 2\mu D$, show that the stress power is $\sigma : D = 2\mu D : D \ge 0$ when $\mu \ge 0$.

<details><summary>Hint 1</summary>

The incompressible rate has zero trace.

</details>

<details><summary>Hint 2</summary>

The remaining symmetric-rate contraction is a sum of squares.

</details>

<details><summary>Full solution</summary>

**Solution.** Since $D$ is traceless for incompressible flow ($\nabla \cdot v = 0$ implies $\mathrm{tr}(D) = 0$), we have $I : D = 0$. Thus $\sigma : D = (-p I + 2\mu D) : D = 2\mu D : D$. The tensor $D : D = D_{ij} D_{ij}$ is a sum of squares, hence nonnegative. With $\mu \ge 0$, the stress power is nonnegative, consistent with thermodynamic dissipation.

</details>

### Exercise 2
A rigid heat conductor has $v = 0$, constant density $\rho>0$, $e = c T$ with constant $c > 0$, and constant conductivity $k>0$. Derive the heat equation from energy balance with Fourier conduction. For spatially varying $k$, the conduction term remains $\nabla\cdot(k\nabla T)$. 

<details><summary>Hint 1</summary>

Insert zero velocity and Fourier conduction into internal energy.

</details>

<details><summary>Hint 2</summary>

Only constant conductivity can be pulled out of the divergence as a scalar multiplier.

</details>

<details><summary>Full solution</summary>

**Solution.** With $v = 0$, $D = 0$, and $q = -k \nabla T$, the energy balance becomes $\rho c \partial_{t} T = \nabla\cdot(k\nabla T) + \rho r$. For constant $k$ this conduction term is $k\Delta T$; with $r = 0$, this is the standard heat equation $\partial_{t} T = \alpha \Delta T$ with thermal diffusivity $\alpha = k/(\rho c)$.

</details>

### Exercise 3
Show that for an isothermal elastic process with $W = \mu \varepsilon : \varepsilon + (\lambda/2)(\mathrm{tr} \varepsilon)^{2}$, the reduced dissipation inequality is satisfied with equality.

<details><summary>Hint 1</summary>

Convert volumetric stored energy to specific energy with the constant density.

</details>

<details><summary>Hint 2</summary>

The reversible stress is the strain derivative of that same stored-energy convention.

</details>

<details><summary>Full solution</summary>

**Solution.** Here $W$ is energy per unit current volume, whereas $\psi$ in the dissipation inequality is energy per unit mass. For constant density in the small-strain model, set $\psi=W/\rho$. Then $DT/Dt=0$ and

$$\sigma=\frac{\partial W}{\partial\varepsilon}=2\mu\varepsilon+\lambda\,\operatorname{tr}(\varepsilon)I,\qquad D=\dot\varepsilon.$$

Therefore $\rho\dot\psi=\dot W=(\partial W/\partial\varepsilon):\dot\varepsilon=\sigma:D$. With no temperature-gradient term, the reduced inequality has left side $\rho\dot\psi-\sigma:D=0$. The equality expresses reversible elastic storage under these assumptions; it does not rely on mixing specific and volumetric energy units.

</details>

### Exercise 4

For anisotropic Fourier flux $q=-K\nabla T$, determine the matrix condition giving nonnegative thermal entropy production for every gradient.

<details><summary>Hint 1</summary>

Insert the flux into minus its product with the gradient.

</details>
<details><summary>Hint 2</summary>

A quadratic form depends only on the symmetric part of its matrix.

</details>
<details><summary>Full solution</summary>

Production is $(\nabla T)^TK\nabla T/T^2$, equal to the form of the symmetric part. It is nonnegative for every gradient if and only if that symmetric part is positive semidefinite. A skew part contributes zero to this local production but may still face other material-symmetry and covariance restrictions.

</details>

### Exercise 5

Derive the shear and bulk conditions for nonnegative compressible Newtonian viscous dissipation.

<details><summary>Hint 1</summary>

Split D into its deviator and spherical part.

</details>
<details><summary>Hint 2</summary>

Choose pure shear and pure dilation separately for necessity.

</details>
<details><summary>Full solution</summary>

The contraction is $2\mu|\operatorname{dev}D|^2+(\lambda_v+2\mu/3)(\operatorname{tr}D)^2$. It is nonnegative for all symmetric D exactly when $\mu\ge0$ and $\lambda_v+2\mu/3\ge0$. Restricting to incompressible rates removes the second term, so that restricted process class cannot determine the bulk condition.

</details>

### Exercise 6

For adiabatic homogeneous shear with density two, specific heat three, viscosity four and shear rate five, find the temperature-rise rate.

<details><summary>Hint 1</summary>

The viscous heating per volume is viscosity times squared shear rate.

</details>
<details><summary>Hint 2</summary>

Divide by density times specific heat to convert power per volume into a temperature rate.

</details>
<details><summary>Full solution</summary>

The heating is one hundred in consistent power-density units, so the temperature rate is $100/6=50/3$. Constant coefficients and no heat removal are part of the model. Holding temperature fixed instead would require removing that same power density, rather than retaining the adiabatic assumption.

</details>

### Exercise 7

A steady rod carries heat flux q from absolute temperature six hundred to three hundred. Express its integrated entropy production in terms of q.

<details><summary>Hint 1</summary>

Compare outgoing and incoming entropy fluxes.

</details>
<details><summary>Hint 2</summary>

The same energy flux is divided by two different absolute temperatures.

</details>
<details><summary>Full solution</summary>

Production per cross-sectional area is $q(1/300-1/600)=q/600$, positive for heat flowing towards the colder end. The stored energy is steady because the energy flux entering and leaving is equal. Entropy production and stored-energy rate therefore need not share the same equality statement.

</details>

### Exercise 8

If specific free energy is smooth in temperature and strain and independent rates are admissible, derive the entropy and stress coefficients imposed by reversible local response.

<details><summary>Hint 1</summary>

Expand its material derivative by the chain rule.

</details>
<details><summary>Hint 2</summary>

An inequality holding for both signs of arbitrary rates forces their coefficients to vanish.

</details>
<details><summary>Full solution</summary>

The temperature-rate coefficient gives $\eta=-\partial_T\psi$, and the strain-rate coefficient gives $\sigma=\rho\partial_\varepsilon\psi$ in the constant-density small-strain convention. A heat-gradient restriction remains separately. These conclusions use the declared state-only constitutive dependence and independent process rates; an internal-variable or rate-dependent material has additional terms and need not satisfy the same reversible-only stress formula.

</details>

### Exercise 9

Show why a reversible negative quadratic stiffness is not ruled out by zero mechanical dissipation, and identify its dynamic failure in a sine mode.

<details><summary>Hint 1</summary>

Define stress as the energy derivative even when that energy is concave.

</details>
<details><summary>Hint 2</summary>

The second spatial derivative of a sine reverses its sign.

</details>
<details><summary>Full solution</summary>

For $W=-E\varepsilon^2/2$, stress work equals the stored-energy derivative, giving zero dissipation. But momentum becomes $\rho u_{tt}=-E u_{xx}$, so a sine amplitude obeys $a''=(E/\rho)n^2a$ and has an exponentially growing solution. Positive stiffness and dynamic stability are therefore additional conditions beyond the reversible entropy equality.

</details>

### Exercise 10

Differentiate reference-energy frame indifference to derive the correct symmetry expression involving first Piola stress.

<details><summary>Hint 1</summary>

Use a rotation path through identity with arbitrary skew derivative W.

</details>
<details><summary>Hint 2</summary>

The energy variation is P contracted with WF.

</details>
<details><summary>Full solution</summary>

Frame indifference gives $P:WF=0$ for every skew W, equivalently $(PF^T):W=0$. Orthogonality to all skew matrices forces $PF^T$ symmetric. Since this product is $J\sigma$, it matches symmetric Cauchy stress. It does not force P itself symmetric, because P maps between material and spatial spaces and includes reference-area scaling.

</details>
