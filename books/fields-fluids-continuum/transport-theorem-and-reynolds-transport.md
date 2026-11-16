
# Transport Theorem and Reynolds Transport

## Learning purpose

This chapter derives the Reynolds transport theorem, which tells us how to differentiate an integral over a time-dependent domain. This result is the bridge from integral balance laws (mass, momentum, energy) to their local differential forms.

## Motivation: moving domains

Physical conservation laws are often stated for material regions---sets of particles that move with the continuum. A material region $\Omega(t)$ is the image of a fixed reference region $\Omega_{0} \subset B_{0}$ under the motion: $\Omega(t) = \chi(\Omega_{0}, t)$. The boundary $\partial \Omega(t)$ moves with the local material velocity $v$. We need a rule for computing

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} f(x, t) \, \mathrm{d}v,$$

where $f$ is a spatial field.

## Reynolds transport theorem

**Theorem 3.1 (Reynolds transport).** Let $\Omega(t)$ be a material region and let $f(x, t)$ be a smooth spatial scalar field. Then

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} f \, \mathrm{d}v = \int_{\Omega(t)} \left( \frac{Df}{Dt} + f \, \nabla \cdot v \right) \mathrm{d}v.$$

Equivalently, using the material derivative expansion,

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} f \, \mathrm{d}v = \int_{\Omega(t)} \bigl( \partial_{t} f + \nabla \cdot (f v) \bigr) \, \mathrm{d}v.$$

**Proof.** Pull the integral back to the reference configuration:

$$\int_{\Omega(t)} f(x, t) \, \mathrm{d}v = \int_{\Omega_{0}} f(\chi(X, t), t) \, J(X, t) \, \mathrm{d}V.$$

Differentiate under the integral sign with respect to $t$:

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega_{0}} \hat{f}(X, t) \, J(X, t) \, \mathrm{d}V = \int_{\Omega_{0}} \left( \frac{\partial \hat{f}}{\partial t} \, J + \hat{f} \, \dot{J} \right) \mathrm{d}V.$$

Using $\partial \hat{f} / \partial t = Df / Dt$ and $\dot{J} = J \, \nabla \cdot v$ (from Jacobi's formula), we obtain

$$\int_{\Omega_{0}} \left( \frac{Df}{Dt} + f \, \nabla \cdot v \right) J \, \mathrm{d}V = \int_{\Omega(t)} \left( \frac{Df}{Dt} + f \, \nabla \cdot v \right) \mathrm{d}v.$$

The alternative form follows from the identity $\nabla \cdot (f v) = v \cdot \nabla f + f \, \nabla \cdot v$.

## Control volumes with arbitrary boundary velocity

For a control volume $V(t)$ whose boundary moves with velocity $w$ (not necessarily the material velocity), the transport theorem generalizes to

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{V(t)} f \, \mathrm{d}v = \int_{V(t)} \partial_{t} f \, \mathrm{d}v + \int_{\partial V(t)} f \, w \cdot n \, \mathrm{d}a.$$

If $w = v$, the boundary is material and we recover the Reynolds theorem. If $w = 0$, the domain is fixed. The relative flux across the boundary uses $v - w$.

**Common error.** Confusing a material region with a fixed control volume leads to missing or double-counting flux terms. In fluid mechanics, we often analyse fixed pipes or channels ($w = 0$) but the fluid carries mass, momentum, and energy across the boundaries. The general transport theorem with $w \neq v$ makes this explicit.

## Application to vector and tensor fields

The transport theorem extends componentwise to vector and tensor fields. For a vector field $g(x, t)$,

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} g \, \mathrm{d}v = \int_{\Omega(t)} \left( \frac{Dg}{Dt} + g \, \nabla \cdot v \right) \mathrm{d}v.$$

This form is used in deriving the local momentum balance from the integral statement.

## The proof's smoothness and geometry assumptions

One sufficient contract for the preceding calculation is a bounded Lipschitz reference region and a family of orientation-preserving diffeomorphisms defined on a neighbourhood of its closure, continuously differentiable in space and time with the mixed derivatives needed for the determinant rate. Let the integrand be continuously differentiable on a neighbourhood of the swept region. On a compact time subinterval the pulled-back integrand and its time derivative are then bounded by an integrable reference function, so differentiation under the integral is justified.

These assumptions are sufficient rather than minimal. They make the chain rule, change of variables, determinant derivative and divergence theorem available in their ordinary forms. If the Jacobian reaches zero, the change-of-variables proof can fail. If an integrand jumps across an internal surface, differentiating its smooth pieces must include that moving interface. We treat that piecewise calculation below instead of silently applying a smooth theorem through a discontinuity.

For a moving control region use its own diffeomorphism, with boundary velocity w. Repeating the pullback proof with that map gives the general boundary formula. Only the normal component of w enters the result: adding a tangential boundary velocity reparametrizes the surface without changing the instantaneous region. An arbitrary smooth extension of the boundary velocity to the interior can be used in the divergence-theorem calculation, and the final boundary integral is independent of that extension.

This distinction explains why a control region does not need to follow a material set. It is enough to know how its boundary moves and which physical flux passes through it. A fixed laboratory box, a piston-following cylinder and a material parcel use different boundary velocities even when they intersect the same fluid at a selected instant.

## A general local balance determines the relative flux

Suppose a smooth scalar density q, physical flux j and volume supply s satisfy $\partial_tq+\operatorname{div}j=s$. Insert that equation into the arbitrary-control-volume transport formula and use the divergence theorem. The result is

$$\frac d{dt}\int_{V(t)}q+
\int_{\partial V(t)}(j-qw)\cdot n
=\int_{V(t)}s.$$

The subtraction is forced by the movement of the integration boundary. If the physical flux is advective plus diffusive, $j=qv+h$, the relative outward flux is $q(v-w)+h$. Diffusion is not removed just because the boundary follows the material. Conversely, a fixed boundary has no geometric correction and uses the full physical flux.

The same equation can be derived in reverse. If it holds for every sufficiently small fixed control volume and all fields are continuous with the stated derivatives, localization forces the pointwise local equation. The quantifier over every region is essential: one integral balance over an entire vessel can hold even when positive and negative local defects cancel inside it. For merely integrable fields, the analogous localization gives a distributional equation rather than pointwise differentiability.

A density per unit mass needs a density factor before this theorem is applied. For a specific quantity a, its density per current volume is rho times a. Assuming the continuity equation for rho, the product rule gives $\partial_t(\rho a)+\operatorname{div}(\rho av)=\rho Da/Dt$. Therefore the rate of its integral over a material region is the integral of rho times its material derivative. This familiar mass-weighted form depends on mass conservation; applying it to an unrelated weight would discard an additional product term.

## Example 3.1: an expanding sphere with a spatially varying integrand

Let a ball have radius R(t), positive and differentiable, and integrate $f(x)=|x|^2$. Its integral is $4\pi R^5/5$, so the direct rate is $4\pi R^4\dot R$. The moving-boundary formula gives the same answer because f is $R^2$ on the sphere and its normal speed is $\dot R$.

If the ball is material under radial velocity $v=(\dot R/R)x$, then the material derivative of f is twice $\dot R/R$ times f and the divergence is three times that factor. The volume integrand in Reynolds' theorem is consequently five times the factor times f. Its integral again gives the same rate. Keeping only the divergence contribution would miss the change of a spatially varying field along moving particles.

For the constant integrand one, the same calculation reduces to the surface area times normal speed, the derivative of the volume. Thus even a constant field can have a changing integral on a moving region. A conservation statement concerns both the field and flux; constancy of the integrand alone does not imply constancy of its total over every chosen moving box.

## Example 3.2: a moving piston changes the bookkeeping

Take a cylindrical control region of cross-sectional area A, fixed left end and right end at L(t). A uniform fluid of constant density moves right with speed V. Its physical mass flux is rho times V. The left outward normal is negative and its boundary speed zero; at the right end the normal is positive and the boundary speed is $\dot L$.

The net relative outward mass flux is $\rho A(V-\dot L)-\rho AV=-\rho A\dot L$. The mass inside the control region has rate $\rho A\dot L$, so the two terms cancel exactly. When the right end is an impermeable piston following the fluid, $\dot L=V$ and the right relative flux is zero. The incoming left mass accounts for the entire mass increase.

Using V rather than the relative speed at the moving right end would predict zero net flux and an unexplained growth of stored mass. Using relative speed at a fixed boundary would be harmless only because that boundary's speed happens to vanish. The general formula prevents selecting a convention separately at each surface without saying which region is being analysed.

## Reference fluxes follow from the area transformation

For a smooth motion with deformation gradient F and positive Jacobian J, Nanson's formula transforms an outward spatial flux into a reference flux. Its vector is $JF^{-1}j$ evaluated along the motion, since the spatial normal area is $JF^{-T}N$ and the scalar surface product can be transposed. Thus flux integrals on corresponding boundaries agree with the reference expression.

Applying the two divergence theorems on corresponding subregions gives the Piola transform identity

$$\operatorname{Div}_X[J F^{-1}(j\circ\chi)]
=J(\operatorname{div}_xj)\circ\chi.$$

It can also be proved weakly: pair the reference divergence with a compact reference test, integrate by parts, transform its gradient by the chain rule and change variables. Both sides then act identically on every test. The gradient structure of F is important. An arbitrary matrix field with positive determinant is not automatically the derivative of a motion, so the same divergence identity cannot be assigned to it without an integrability condition.

In material coordinates a conserved volume density becomes $Jq\circ\chi$. Its time derivative and the transformed relative flux give the reference conservation equation. For an actual material map w equals v, leaving only any nonadvective flux. This is the structural reason material mass conservation later has the simple pointwise form rho times J equal to its reference value.

## Internal moving interfaces contribute jump terms

### Example 3.3: a one-dimensional moving discontinuity

Let q and j be smooth on each side of an interface at x equal to s(t). Write the right-minus-left jump with brackets. Differentiating the two moving subintegrals in a fixed interval gives an interface contribution $-\dot s[q]$ from stored density and $[j]$ from the flux derivative. With no singular interface supply, balance requires $[j]-\dot s[q]=0$.

For a constant-speed shock this is exactly Rankine–Hugoniot. For mass density and advective flux it becomes $\dot s[\rho]=[\rho v]$. The interface need not move with either side's material velocity; a nonzero relative mass flux can cross it. A material contact with no mass crossing satisfies the stronger sidewise relative-flux condition, not just an arbitrary chosen shock speed.

In higher dimensions replace the scalar flux by its normal component and the interface speed by its normal speed. Tangential interface parametrization again does not affect the balance. A surface mass, interfacial energy or singular force adds an interface storage or supply term, so the zero-jump condition belongs only to the model without that additional surface content.

This piecewise derivation preserves the integral law even where a classical derivative fails. The [conservation-law chapter](../pde-weak-theory-waves-patterns/conservation-laws-shocks.md) develops the extra entropy condition needed for a scalar nonlinear shock; transport and conservation alone do not supply it.

## Moving numerical regions must preserve the geometry too

For a moving cell the constant-integrand transport identity is the geometric conservation law: its volume rate equals the integrated boundary normal speed. A numerical moving-mesh discretisation must represent this geometry consistently with its density flux. Otherwise even a physically constant density field can appear to gain or lose material because the cell volume and the swept boundary volume disagree.

This statement does not prescribe a particular moving-mesh algorithm. It identifies the exact relation that a discrete approximation needs to respect. Likewise, satisfying a discrete geometric relation does not by itself prove stability, approximation order or conservation of a nonlinear energy. Each property needs the matching discrete balance and hypotheses.

For vector or tensor integrands the ordinary transport theorem applies componentwise in a fixed Cartesian frame. If the reporting frame itself rotates in time, differentiation also acts on its basis components. Omitting those basis-rate terms would confuse a coordinate derivative with a physical change of the tensor. The later objectivity chapter handles that observer dependence explicitly.

## Summary and connections

The Reynolds transport theorem converts statements about rates of change of integrated quantities over moving domains into local differential equations. It is the indispensable tool for the next three chapters, where we derive conservation of mass, momentum, and energy.

In the previous chapter, *Material and Spatial Descriptions*, we established the kinematic quantities $F$, $J$, $v$, and $Df / Dt$ that appear in the transport theorem. In the next chapter, *Conservation of Mass*, we apply the transport theorem to the scalar field $\rho$ to obtain the continuity equation.

## Exercises

### Exercise 1
Let $\Omega(t)$ be a material region and let $f(x, t) = x_{1} + t$. For the motion $x_{1} = X_{1} e^{t}$, $x_{2} = X_{2}$, $x_{3} = X_{3}$, compute both sides of the Reynolds transport theorem explicitly and verify equality.

<details><summary>Hint 1</summary>

Pull the spatial field back along the exponential motion.

</details>

<details><summary>Hint 2</summary>

Differentiate the field and Jacobian factors separately.

</details>

<details><summary>Full solution</summary>

**Solution.** The velocity is $v = (x_{1}, 0, 0)$ and $\nabla \cdot v = 1$. The material derivative is $Df / Dt = \partial_{t} f + v \cdot \nabla f = 1 + x_{1} \cdot 1 = 1 + x_{1}$. The integrand on the right is $Df / Dt + f \, \nabla \cdot v = 1 + x_{1} + (x_{1} + t) = 1 + 2 x_{1} + t$.

For the left side, pull back: $\hat{f} = X_{1} e^{t} + t$ and $J = e^{t}$. Then

$$\int_{\Omega_{0}} (X_{1} e^{t} + t) e^{t} \, \mathrm{d}V = e^{t} \int_{\Omega_{0}} X_{1} e^{t} \, \mathrm{d}V + t e^{t} \, \mathrm{Vol}(\Omega_{0}).$$

Differentiating and comparing with the pulled-back right side confirms equality.

</details>

### Exercise 2
A fixed control volume $V$ contains fluid with density $\rho(x, t)$. Show that

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{V} \rho \, \mathrm{d}v + \int_{\partial V} \rho v \cdot n \, \mathrm{d}a = 0$$

is equivalent to the differential continuity equation $\partial_{t} \rho + \nabla \cdot (\rho v) = 0$.

<details><summary>Hint 1</summary>

Apply the divergence theorem to the physical flux.

</details>

<details><summary>Hint 2</summary>

Localization requires the identity for every fixed subregion, not only one vessel.

</details>

<details><summary>Full solution</summary>

**Solution.** Apply the divergence theorem to the surface integral: $\int_{\partial V} \rho v \cdot n \, \mathrm{d}a = \int_{V} \nabla \cdot (\rho v) \, \mathrm{d}v$. Since $V$ is fixed, the time derivative commutes with the integral. Thus

$$\int_{V} \bigl( \partial_{t} \rho + \nabla \cdot (\rho v) \bigr) \, \mathrm{d}v = 0.$$

Because $V$ is arbitrary, the integrand must vanish pointwise.

</details>

### Exercise 3
Consider a spherical material region of radius $R(t) = R_{0} (1 + \alpha t)$ with uniform density $\rho(t)$. Use the transport theorem to find how $\rho(t)$ evolves if total mass is conserved.

<details><summary>Hint 1</summary>

The velocity is radial with rate equal to radius derivative divided by radius.

</details>

<details><summary>Hint 2</summary>

The divergence has three identical directional contributions.

</details>

<details><summary>Full solution</summary>

**Solution.** Total mass is $M = \rho(t) \cdot \frac{4}{3}\pi R(t)^{3}$. Conservation requires $\dot{M} = 0$. By the transport theorem,

$$0 = \frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} \rho \, \mathrm{d}v = \int_{\Omega(t)} \left( \frac{D\rho}{Dt} + \rho \, \nabla \cdot v \right) \mathrm{d}v.$$

For uniform spherical expansion, $v = (\dot{R}/R) x$ and $\nabla \cdot v = 3 \dot{R}/R = 3\alpha/(1 + \alpha t)$. Since $D\rho/Dt = \dot{\rho}$ for uniform $\rho$, we obtain

$$\dot{\rho} + \rho \cdot \frac{3\alpha}{1 + \alpha t} = 0 \quad \Longrightarrow \quad \rho(t) = \rho_{0} (1 + \alpha t)^{-3}.$$

This is consistent with $M = \rho_{0} \cdot \frac{4}{3}\pi R_{0}^{3}$ constant.

</details>

### Exercise 4

For a moving ball integrate the constant field one and derive its geometric volume rate.

<details><summary>Hint 1</summary>

Only the boundary-motion term remains in the arbitrary-volume formula.

</details>
<details><summary>Hint 2</summary>

The normal speed is the radius derivative everywhere on the sphere.

</details>
<details><summary>Full solution</summary>

The rate is $\int_{\partial B_R}\dot R\,da=4\pi R^2\dot R$, agreeing with differentiation of $4\pi R^3/3$. This is the geometric conservation identity. It describes the chosen region's volume rather than conservation of a physical material density.

</details>

### Exercise 5

Starting from $\partial_tq+\operatorname{div}(qv+h)=s$, derive the balance on a control volume with boundary velocity w.

<details><summary>Hint 1</summary>

Replace the partial time derivative in the moving-volume formula.

</details>
<details><summary>Hint 2</summary>

Combine the physical and geometric surface terms before assigning outward signs.

</details>
<details><summary>Full solution</summary>

The rate plus $\int_{\partial V}[q(v-w)+h]\cdot n$ equals the integrated supply. The advective part uses relative velocity, but h remains because diffusion can cross even a material boundary. With w zero this reduces to the full physical flux on a fixed region.

</details>

### Exercise 6

For uniform density two, area three and piston speed four, with fluid speed also four, compute the storage rate and the two relative boundary mass fluxes.

<details><summary>Hint 1</summary>

The right relative speed vanishes at an impermeable moving piston.

</details>
<details><summary>Hint 2</summary>

The left boundary is fixed and has outward normal opposite the flow.

</details>
<details><summary>Full solution</summary>

Storage increases at rate $2\cdot3\cdot4=24$. The right relative flux is zero and the left outward flux is minus twenty-four. Their sum with the storage rate is zero. Using the full fluid speed at the moving right boundary would incorrectly erase the net incoming mass.

</details>

### Exercise 7

Why can tangential boundary motion be changed without altering the transport rate of a fixed scalar field over the instantaneous moving region?

<details><summary>Hint 1</summary>

Inspect the boundary velocity's appearance in the surface formula.

</details>
<details><summary>Hint 2</summary>

Tangential velocity changes a parametrization while its normal product vanishes.

</details>
<details><summary>Full solution</summary>

The geometric term is $fw\cdot n$. Adding any tangential vector changes neither its normal component nor the volume swept out to first order. Hence the instantaneous rate is unchanged. A physical material surface may still carry tangential transport of a surface density; that would be an additional surface-balance model rather than the present volume integral.

</details>

### Exercise 8

A jump has left density one and flux three, right density two and flux five. Find the balanced interface speed without a singular supply.

<details><summary>Hint 1</summary>

Use right-minus-left jumps consistently.

</details>
<details><summary>Hint 2</summary>

Solve the jump-flux equation only because the density jump is nonzero.

</details>
<details><summary>Full solution</summary>

The density jump is one and the flux jump two, so the speed is two. This proves balance only. Whether the states satisfy an entropy or other constitutive admissibility rule requires more information about the governing flux law. If the density jump were zero but flux jump nonzero, no interface speed could repair the missing balance without a singular supply.

</details>

### Exercise 9

Prove the mass-weighted material transport formula for a specific scalar a, assuming the smooth continuity equation for rho.

<details><summary>Hint 1</summary>

Use rho times a as the volume density in Reynolds' theorem.

</details>
<details><summary>Hint 2</summary>

The terms proportional to a cancel by continuity.

</details>
<details><summary>Full solution</summary>

The integrand is $D(\rho a)/Dt+\rho a\operatorname{div}v=\rho Da/Dt+a[D\rho/Dt+\rho\operatorname{div}v]$. The bracket vanishes, leaving the integral of $\rho Da/Dt$. The cancellation depends on rho satisfying continuity; an arbitrary changing weight would retain that bracket.

</details>

### Exercise 10

Explain why one zero integral residual over an entire body does not imply a pointwise balance and state a sufficient localization condition.

<details><summary>Hint 1</summary>

A nonzero continuous residual can have positive and negative parts that cancel globally.

</details>
<details><summary>Hint 2</summary>

Require the integral identity on every small subregion.

</details>
<details><summary>Full solution</summary>

For example an odd continuous residual on a symmetric interval has zero total integral while being nonzero. If a continuous residual integrates to zero on every sufficiently small ball, a nonzero value would preserve its sign on a small neighbourhood and give a nonzero integral there, a contradiction. Thus it vanishes pointwise. For merely integrable residuals the corresponding compact-test statement yields almost-everywhere or distributional equality through the fundamental lemma.

</details>
