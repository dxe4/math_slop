
# Symmetry and Noether's Theorem for Particles

A continuous symmetry of the action gives a conserved quantity along its stationary paths. The boundary qualification matters: a transformation may change the Lagrangian by a total time derivative while preserving the equations of motion. Ignoring that boundary term can produce the wrong conserved quantity even for a free particle viewed under a Galilean boost.

Read [the action principle](from-a-path-to-a-number.md) and [ideal constraints](constraints-and-lagrange-multipliers.md). We use point transformations of configuration and time, rather than assuming the later Lie-group or symplectic-manifold language. The [geometric symmetry chapter](lie-groups-and-symmetry.md) extends these ideas through group actions and moment maps. The current proof needs the Euler–Lagrange equations but does not require an invertible velocity-to-momentum map.

## Infinitesimal configuration changes

Let $L(q,v,t)$ be $C^2$ on a stated open coordinate domain. A smooth family of configuration changes has
$$
q_\epsilon=q+\epsilon\xi(q,t)+O(\epsilon^2),
$$
with time unchanged for the moment. Along any smooth path,
$$
\delta q=\xi,\qquad \delta v=D_t\xi,
\qquad D_t\xi=\partial_t\xi+(D_q\xi)v.
$$
The symbol $\delta$ denotes differentiation with respect to the transformation parameter at zero. It is not differentiation along the original trajectory. The total derivative $D_t$ combines the explicit time dependence and the change caused by motion through configuration space.

**Definition 6.1 (Infinitesimal boundary symmetry).** The transformation is a boundary symmetry when a smooth scalar $B(q,t)$ satisfies
$$
L_q\cdot\xi+L_v\cdot D_t\xi=D_tB
$$
as an identity for admissible configurations, velocities and times. If B can be chosen zero, it is a strict infinitesimal invariance of L.

The identity concerns the written Lagrangian throughout its domain, not merely its value on one observed solution. Integrating it gives a first-order change of action equal to the endpoint difference of B. A discrete reflection alone provides no such infinitesimal family; it need not generate a new conserved charge through this theorem.

## The configuration version of Noether's theorem

Write $p=L_v$ for the conjugate momentum, without assuming that the relation can be inverted.

**Theorem 6.2 (Time-fixed particle Noether theorem).** Under Definition 6.1, every Euler–Lagrange solution satisfies
$$
Q=p\cdot\xi-B=\text{constant}.
$$

*Proof.* The product rule gives
$$
\frac{d}{dt}(p\cdot\xi-B)
=\dot p\cdot\xi+p\cdot D_t\xi-D_tB.
$$
Euler–Lagrange replaces $\dot p$ by $L_q$, and the symmetry identity makes the right side zero. $\square$

The same calculation before imposing the equations gives the off-trajectory identity
$$
\delta L-D_tB=(L_q-\dot p)\cdot\xi+D_t(p\cdot\xi-B).
$$
It exposes the two separate inputs: a variational symmetry and the equation of motion. Neither input is supplied by seeing a nearly constant numerical time series. Conversely, the short proof is sufficient once those identities have been established analytically.

The normalisation of the transformation parameter fixes the normalisation and units of Q. A translation parameter measured in length produces a momentum component; a dimensionless rotation parameter produces angular momentum. Comparing raw charge magnitudes without their generators and units has no invariant meaning.

## Worked example 1: translations of an isolated collection

Take constant masses $m_i$ and
$$
L=\sum_i\frac12m_i\|\dot q_i\|^2-U(q_1,\ldots,q_N),
$$
where U depends only on position differences. Translate every particle by the same vector $\epsilon a$. Then $\xi_i=a$, $D_t\xi_i=0$, and U is unchanged because every difference is unchanged. This is a strict symmetry with B zero.

The charge is $Q=a\cdot\sum_im_i\dot q_i$. Choosing the three coordinate vectors for a proves conservation of all components of total momentum. With total mass M and centre of mass R, this is $M\dot R=\text{constant}$, reproducing the Newtonian balance without summing pair forces explicitly.

If an external potential depends on the absolute position of one particle, the same translation need not be a symmetry. Momentum balance then contains its external force. The theorem and the Newtonian statement agree because they refer to the same system boundary and interaction model.

## Worked example 2: rotations and angular momentum

For a particle with Euclidean kinetic energy and central potential, let
$\xi=\omega\times q$ for a fixed rotation-axis vector $\omega$. Since $D_t\xi=\omega\times v$,
$$
\delta T=mv\cdot(\omega\times v)=0.
$$
For $V=V(\|q\|)$, its gradient is parallel to q and
$\delta V=\nabla V\cdot(\omega\times q)=0$.
Thus B is zero and the charge is
$$
Q=mv\cdot(\omega\times q)=\omega\cdot(q\times mv).
$$
Arbitrary axes give conservation of the angular-momentum vector. The scalar triple-product identity makes the connection between the infinitesimal rotation and its charge explicit.

For the planar anisotropic oscillator,
$V=(k_xx^2+k_yy^2)/2$, the rotation generator is $\xi=(-y,x)$. Its Lagrangian variation is $(k_x-k_y)xy$, not identically zero unless the two stiffnesses agree. Directly, $\dot L_z=(k_x-k_y)xy$. A special trajectory can still have zero torque, but there is no general rotational Noether charge for unequal stiffnesses.

## Worked example 3: a boost needs its boundary term

For a free particle $L=m\|v\|^2/2$, consider $q_\epsilon=q+\epsilon at$ with constant vector a. The generator is $\xi=at$ and its velocity change is a. Therefore
$$
\delta L=ma\cdot v=D_t(ma\cdot q).
$$
Here $B=ma\cdot q$ is nonzero. Noether gives
$$
Q=ma\cdot(tv-q),
$$
constant along a free trajectory. Its vector form records the initial position of the uniform-motion line, up to the chosen sign and mass factor.

If the boundary term were omitted, one would incorrectly call $mt\,a\cdot v$ conserved. Its derivative is $ma\cdot v$ for a free nonstationary particle. The correction is necessary even though the transformation takes free trajectories into free trajectories.

The finite transformation also clarifies the endpoint change:
$$
L(v+\epsilon a)-L(v)
=D_t\left(\epsilon ma\cdot q+\frac12\epsilon^2m\|a\|^2t\right).
$$
Its derivative at zero is precisely the boundary symmetry used above. This calculation establishes the action statement instead of inferring it solely from invariance of the differential equation.

## Allowing time to transform

A point transformation may also change time:
$$
t_\epsilon=t+\epsilon\tau(q,t)+O(\epsilon^2),\qquad
q_\epsilon=q+\epsilon\xi(q,t)+O(\epsilon^2).
$$
Require the changed clock to be locally increasing along the path. The transformed velocity and time element vary by
$$
\delta v=D_t\xi-vD_t\tau,\qquad
\delta(dt)=(D_t\tau)dt.
$$
The first formula follows by differentiating the quotient $dq_\epsilon/dt_\epsilon$. The second is the derivative of the time-change Jacobian. Omitting the time element would test invariance of L rather than invariance of the action integrand.

Define the Lagrangian energy $E=p\cdot v-L$. On an Euler–Lagrange solution,
$$
\frac{dE}{dt}=-L_t,
$$
because differentiating p dot v minus L cancels the acceleration terms through $p=L_v$ and the velocity terms through $\dot p=L_q$.

**Theorem 6.3 (Point-transformation Noether theorem).** Suppose the infinitesimal action identity is
$$
L_q\cdot\xi+p\cdot(D_t\xi-vD_t\tau)+L_t\tau+L D_t\tau=D_tB.
$$
Then $Q=p\cdot\xi-E\tau-B$ is conserved along every Euler–Lagrange solution in the domain.

*Proof.* Differentiate the proposed charge and insert $\dot p=L_q$, $\dot E=-L_t$:
$$
\dot Q=L_q\cdot\xi+p\cdot D_t\xi+L_t\tau-E D_t\tau-D_tB.
$$
Since $E=p\cdot v-L$, this is exactly the assumed action variation minus $D_tB$, hence zero. $\square$

For a time-independent L, time translations have $\tau=1$, $\xi=0$ and B zero. The charge is minus E. Reversing the generator reverses that sign, so the result is ordinary energy conservation. Time translation and spatial translation are different symmetries with differently dimensioned charges; one should not merge their roles into a generic momentum statement.

If L depends explicitly on time, $\dot E=-L_t$ remains an exact balance even when conservation fails. A prescribed changing environment can supply energy without invalidating the variational formulation.

## Worked example 4: constant force and a corrected momentum

On a line, use $L=m v^2/2+Fq$ with constant force F. Ordinary translation has $\xi=1$, $\tau=0$ and $\delta L=F$. This is $D_t(Ft)$, so B equals Ft and the conserved charge is $p-Ft$.

The solution has $p(t)=p_0+Ft$, which verifies that charge directly. Momentum itself is not conserved. The equation is translation invariant while the potential changes by an additive constant; the boundary form of Noether's theorem captures exactly this distinction. The example also shows why invariance of the force law is a different question from strict invariance of the chosen Lagrangian.

## Total derivatives and equivalent representations

Let $L'=L+D_tA(q,t)$ and consider a time-fixed transformation. The momentum changes to $p'=p+A_q$. Variation commutes with the total derivative here, giving
$$
\delta(D_tA)=D_t(A_q\cdot\xi).
$$
Therefore if B is the original boundary term, one may take $B'=B+A_q\cdot\xi$. The new charge is
$$
p'\cdot\xi-B'=p\cdot\xi-B.
$$
Equivalent Lagrangians therefore give the same time-fixed Noether charge when their boundary terms are transformed consistently. Treating the momentum shift without the boundary shift would create an artificial discrepancy.

The action changes by endpoint values of A. For fixed endpoint variations those values do not change, which is the variational reason the position equations agree. Other endpoint conditions require their own boundary analysis; one cannot discard every endpoint term under every variational problem.

## Constraints and the allowed symmetry

For ideal holonomic constraints at fixed time, allowed virtual displacements are tangent to the constraint set. A configuration symmetry must preserve that set. Infinitesimally this requires $D_qf_a\cdot\xi=0$ for the time-fixed version. Ideal reaction forces lie in the span of the constraint gradients, so their contraction with such a generator vanishes.

In the proof of Theorem 6.2, the constrained equation is $\dot p=L_q+R$, and the additional charge derivative is $R\cdot\xi$. Tangency makes it zero, restoring the conservation conclusion. A transformation that moves the system off its constraint surface does not meet this hypothesis.

Time-dependent constraints, velocity constraints and moving boundaries require further care. In particular, the physical nonholonomic d'Alembert equations generally differ from stationary action with velocity constraints inserted by multipliers. The theorem just proved must not be applied to a different set of equations merely because both descriptions use the word constraint.

## Nearly symmetric models have a balance, not exact conservation

Suppose the symmetry identity has a defect R:
$\delta L-D_tB=\epsilon R(q,v,t)$ in the time-fixed case. The same product-rule proof gives $\dot Q=\epsilon R$ on solutions. If $|R|\le C$ over the stated trajectory region, then
$$
|Q(t)-Q(0)|\le|\epsilon|Ct
$$
for positive time in that region. A small coefficient can give a useful finite-horizon bound without giving uniform conservation forever.

For $L=m v^2/2-\epsilon V(q)$ and spatial translation, the charge is p and $\dot p=-\epsilon V'(q)$. A bound on the potential derivative supplies the displayed drift allowance. Leaving the region where that bound holds invalidates that particular allowance, even if the original equation remains well defined.

Point transformations do not exhaust every useful symmetry or conserved quantity. Hidden integrals can involve velocity-dependent transformations or other extensions. The [integrable-systems chapter](integrable-systems.md) discusses the extra Kepler constants. No converse asserting that every first integral comes from an ordinary coordinate shift has been proved here.

## Dilation gives a virial balance rather than automatic conservation

An instructive transformation is uniform dilation of all particle positions.
For a natural Lagrangian with constant masses, let G be the sum of each
momentum dotted with its position. Suppose the potential is differentiable
and homogeneous of degree k on a scaling-invariant configuration region:
V(aq)=aᵏV(q) for positive a. Differentiating this identity at a=1 gives
the sum of q dotted with the potential gradient equal to kV. Newton's
equations and the product rule now give
$$\frac{dG}{dt}=2T-kV.$$
This is an exact balance along collision-free solutions in that region.
It is generally not zero. A dilation need not be an action symmetry, and
calling its generator a symmetry without checking the action identity would
incorrectly turn this useful relation into a conservation law.

Integrate the balance over a finite observation time and divide by that
time. The difference between twice the mean kinetic energy and k times
the mean potential is the net change in G divided by the horizon. If
G stays bounded as the horizon grows, that endpoint contribution tends to
zero. If the two energy averages also have limits, their limiting values
therefore obey the virial relation. Bounded positions alone are insufficient
unless the momenta, or G itself, are controlled too; singular encounters
can invalidate a casual boundedness argument.

For a bounded harmonic trajectory, k=2 and the relation gives equal
long-time kinetic and potential averages. For an inverse-distance attractive
potential, k=−1, so twice the mean kinetic energy equals minus the mean
potential. If the total energy is a fixed negative number, combining the
two relations gives mean kinetic energy equal to minus that total and
mean potential equal to twice the total. A nonsingular elliptic Kepler
orbit supplies a periodic case where the endpoint contribution vanishes
exactly over each complete period.

This application demonstrates a broader use of the Noether calculation.
When the transformation changes the action by a known nonzero density,
retain that density and derive a balance. With controlled endpoint terms,
the balance can imply an averaged law even when no exact charge is
conserved. The hypotheses concern the actual orbit and averaging limit;
a finite numerical time series does not establish those limits by itself.

## A nonconservative force turns the same calculation into a balance

If a generalized force F is added
to the Euler–Lagrange equations, the
time-fixed Noether product rule gains
the term F dotted with its configuration
generator. An exact action symmetry
of the conservative part therefore
gives a charge balance, not automatic
conservation for the forced system.
The force must be included before
the final derivative is set to zero.

For a free particle with linear
drag, spatial translation still identifies
momentum as the natural charge, but
its derivative is minus drag coefficient
times velocity. Constant mass gives
exponential momentum decay. Writing down
the free-particle Lagrangian and declaring
translation symmetry without the drag
term would predict an incorrect conserved
momentum. The balance correctly identifies
transfer to the omitted medium. For
ideal constraint reactions, tangency of
the allowed symmetry made the corresponding
force contraction vanish; generic dissipative
forces have no such cancellation.

## Exercises

### Exercise 1 — Horizontal momentum
<a id="noether-particles-ex-1"></a>

For $L=m(\dot x^2+\dot y^2)/2-mgy$, apply a horizontal translation.

<details>
<summary>Hint 1</summary>

The potential does not depend on x.

</details>
<details>
<summary>Hint 2</summary>

Use a constant horizontal generator with zero time component.

</details>
<details>
<summary>Full solution</summary>

Take $\xi=(1,0)$, $\tau=0$ and B zero. The Lagrangian variation vanishes, so $Q=p_x=m\dot x$ is conserved. Vertical momentum is not conserved because gravity breaks the corresponding strict translation symmetry.

</details>

### Exercise 2 — Time translation
<a id="noether-particles-ex-2"></a>

Identify the Noether charge for $\tau=1$, $\xi=0$ when L is autonomous.

<details>
<summary>Hint 1</summary>

Include the changed time element in the action identity.

</details>
<details>
<summary>Hint 2</summary>

Use the sign convention in Theorem 6.3.

</details>
<details>
<summary>Full solution</summary>

The action identity is satisfied with B zero because $L_t=0$ and the constant generator has zero total derivative. The charge is $-E$. Its constancy is equivalent to energy conservation; the minus sign reflects the chosen direction of the time-shift generator.

</details>

### Exercise 3 — Anisotropic torque
<a id="noether-particles-ex-3"></a>

Derive the angular-momentum drift of the anisotropic planar oscillator.

<details>
<summary>Hint 1</summary>

Use the generator $(-y,x)$.

</details>
<details>
<summary>Hint 2</summary>

Its kinetic-energy variation is zero, so only the potential contributes.

</details>
<details>
<summary>Full solution</summary>

The potential variation is $(k_y-k_x)xy$, so the Lagrangian variation is $(k_x-k_y)xy$. The product-rule identity gives $\dot L_z=(k_x-k_y)xy$, agreeing with the direct torque calculation. Equal stiffness restores a domain-wide conserved angular momentum.

</details>

### Exercise 4 — Boost charge
<a id="noether-particles-ex-4"></a>

For a free particle on a line with $q=q_0+vt$, evaluate the charge for generator $\xi=t$.

<details>
<summary>Hint 1</summary>

The boundary term is mq.

</details>
<details>
<summary>Hint 2</summary>

Substitute the complete uniform-motion solution.

</details>
<details>
<summary>Full solution</summary>

The charge is $mtv-mq=m(tv-q)=-mq_0$, constant. The incomplete expression mtv would generally grow with time. The endpoint correction is essential to obtain the correct conserved quantity.

</details>

### Exercise 5 — A boundary constant
<a id="noether-particles-ex-5"></a>

What happens to the charge if a constant is added to B?

<details>
<summary>Hint 1</summary>

A constant has zero total derivative.

</details>
<details>
<summary>Hint 2</summary>

Compare the charge values rather than their derivatives.

</details>
<details>
<summary>Full solution</summary>

The symmetry identity is unchanged. The charge shifts by the negative of that constant, so its conservation and differences between times are unchanged. A conserved charge's additive reference is not fixed by its time derivative alone.

</details>

### Exercise 6 — Gauge-equivalent translation
<a id="noether-particles-ex-6"></a>

Add $D_t(cq^2/2)$ to the free-particle Lagrangian. For ordinary translation, find p', B' and the charge.

<details>
<summary>Hint 1</summary>

The added velocity term is cqv.

</details>
<details>
<summary>Hint 2</summary>

Translate the total derivative as well as the original Lagrangian.

</details>
<details>
<summary>Full solution</summary>

The new momentum is $p'=mv+cq$. Under $\xi=1$, the additional boundary term is $B'=cq$. Thus the charge is $p'-B'=mv$, the same physical momentum as before. Shifting only the momentum would give an inconsistent comparison.

</details>

### Exercise 7 — Constraint tangency
<a id="noether-particles-ex-7"></a>

For a particle constrained to $x^2+y^2=\ell^2$, check that planar rotation is tangent and translation in x is generally not.

<details>
<summary>Hint 1</summary>

Contract each generator with the constraint gradient.

</details>
<details>
<summary>Hint 2</summary>

The gradient is $(2x,2y)$.

</details>
<details>
<summary>Full solution</summary>

Rotation gives $(2x,2y)\cdot(-y,x)=0$, so it preserves the circle infinitesimally. Translation gives $(2x,2y)\cdot(1,0)=2x$, generally nonzero. Even if the unconstrained kinetic term is translation invariant, that generator does not preserve the fixed-circle constraint.

</details>

### Exercise 8 — A weak force
<a id="noether-particles-ex-8"></a>

For $L=m v^2/2-\epsilon V(q)$, assume $|V'|\le C$ along a trajectory for $0\le t\le T$. Bound its momentum change.

<details>
<summary>Hint 1</summary>

Use the translation defect in the Noether identity.

</details>
<details>
<summary>Hint 2</summary>

Integrate the resulting derivative estimate over the stated interval.

</details>
<details>
<summary>Full solution</summary>

The momentum derivative is $-\epsilon V'(q(t))$, so $|p(t)-p(0)|\le|\epsilon|Ct$ and in particular at most $|\epsilon|CT$ at the endpoint. The estimate is conditional on remaining where the derivative bound holds and does not imply exact conservation or a uniform infinite-time bound.

</details>

### Exercise 9 — Constant force
<a id="noether-particles-ex-9"></a>

For the constant-force example, verify the charge from the explicit position solution.

<details>
<summary>Hint 1</summary>

Integrate the constant acceleration once to find momentum.

</details>
<details>
<summary>Hint 2</summary>

The boundary term is Ft.

</details>
<details>
<summary>Full solution</summary>

The solution is $q=q_0+v_0t+Ft^2/(2m)$, giving $p=mv_0+Ft$. The charge $p-Ft=mv_0$ is constant, while momentum itself changes. This is precisely the boundary-symmetry conclusion.

</details>

### Exercise 10 — A discrete reflection
<a id="noether-particles-ex-10"></a>

Why does invariance under $q\mapsto-q$ alone not meet the particle Noether theorem's hypotheses?

<details>
<summary>Hint 1</summary>

The theorem differentiates a continuous transformation parameter at the identity.

</details>
<details>
<summary>Hint 2</summary>

A two-element symmetry supplies no such nontrivial local parameter family by itself.

</details>
<details>
<summary>Full solution</summary>

Reflection is a discrete transformation. Knowing only that it preserves the Lagrangian does not supply an infinitesimal generator satisfying the assumed identity. It can constrain the form of the potential, but the theorem does not assign it a conserved differential charge without an additional continuous symmetry or another argument.

</details>

## Summary

Noether's theorem connects an action identity to a conserved charge through the Euler–Lagrange equations. Boundary terms, changed clocks and constraint tangency determine the correct formula. Translations, rotations, boosts and time shifts reproduce distinct conserved quantities with explicit hypotheses, while a broken symmetry gives a drift balance. Hamiltonian mechanics next changes velocity to momentum coordinates; the later geometric treatment organises these generators into group actions and moment maps.

This first-course proof develops the particle consequences behind the retained [geometric Noether discussion](lie-groups-and-symmetry.md). Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* are comparison references; the exposition, examples and exercises here are original Euler text.
