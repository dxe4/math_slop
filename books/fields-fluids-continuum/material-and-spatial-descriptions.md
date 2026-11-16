
# Material and Spatial Descriptions

## Learning purpose

This chapter introduces the two fundamental ways of describing motion in continuum mechanics: the material (Lagrangian) description, which follows individual particles, and the spatial (Eulerian) description, which observes the field at fixed locations. You will learn to convert between these viewpoints, compute deformation measures, and recognise why the distinction matters for constitutive modelling.

## Motivation: why two descriptions?

Consider water flowing through a pipe. One way to understand the flow is to release dye at the inlet and track each colored blob as it moves---this is the material viewpoint. Another way is to place probes at fixed stations along the pipe and record velocity and pressure at each station---this is the spatial viewpoint. Solid mechanics typically prefers the material description because the reference shape of a solid body is natural and persistent. Fluid mechanics typically prefers the spatial description because the domain is often fixed and the identity of individual fluid particles is less important than the field at a location.

Both descriptions describe the same physical reality, but the equations look different and different quantities are natural in each.

## The motion map and deformation gradient

Let $B_{0} \subset \mathbb{R}^{3}$ be a reference body, an open bounded set with sufficiently smooth boundary. A material particle is labeled by its position $X \in B_{0}$. At time $t$, the particle $X$ occupies the spatial position

$$x = \chi(X, t).$$

The map $\chi: B_{0} \times [0, T] \to \mathbb{R}^{3}$ is called the motion. We assume $\chi$ is differentiable in both arguments and that $\chi(\cdot, t)$ is invertible for each $t$.

The deformation gradient is the Jacobian of the motion with respect to the reference position:

$$F(X, t) = \frac{\partial \chi}{\partial X}(X, t), \qquad F_{iA} = \frac{\partial x_{i}}{\partial X_{A}}.$$

The determinant $J = \det F$ measures local volume change. A physically admissible orientation-preserving motion satisfies

$$J(X, t) > 0 \quad \text{for all } X \in B_{0}, \; t \in [0, T].$$

If $J = 1$ everywhere, the motion is volume-preserving. The local volume element transforms according to

$$\mathrm{d}v = J \, \mathrm{d}V,$$

where $\mathrm{d}V$ is the reference volume element and $\mathrm{d}v$ is the current volume element.

**Example 2.1: uniform expansion.** Consider the motion $x = (1 + \alpha t) X$ for a scalar $\alpha > 0$. Then $F = (1 + \alpha t) I$ and $J = (1 + \alpha t)^{3}$. A unit cube expands to volume $(1 + \alpha t)^{3}$. At $t = 0$, $J = 1$ as required.

## Velocity and the material derivative

The spatial velocity field $v(x, t)$ is the time derivative of the motion holding the material label fixed, evaluated at the inverse motion:

$$v(x, t) = \left. \frac{\partial \chi}{\partial t}(X, t) \right|_{X = \chi^{-1}(x, t)}.$$

For a spatial scalar field $f(x, t)$, the material derivative (also called the substantial or total derivative) is the time rate of change following a material particle:

$$\frac{Df}{Dt} = \frac{\partial f}{\partial t} + v \cdot \nabla f.$$

This follows from the chain rule: if $\hat{f}(X, t) = f(\chi(X, t), t)$, then

$$\frac{\partial \hat{f}}{\partial t} = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial x_{i}} \frac{\partial x_{i}}{\partial t} = \frac{\partial f}{\partial t} + v \cdot \nabla f.$$

**Common error.** A frequent mistake is to confuse $\partial f / \partial t$ at fixed spatial position $x$ with $Df / Dt$ following a particle. In steady flow ($\partial f / \partial t = 0$), the material derivative is $v \cdot \nabla f$, which is nonzero wherever the field varies along streamlines. Omitting the advection term $v \cdot \nabla f$ when it should be present leads to incorrect balances; including it when the field is already material leads to double counting.

## Velocity gradient, rate of deformation, and spin

The spatial velocity gradient is $L = \nabla v$, with components $L_{ij} = \partial v_{i} / \partial x_{j}$. It decomposes uniquely into symmetric and skew-symmetric parts:

$$L = D + W,$$

where

$$D = \frac{1}{2}\bigl(\nabla v + (\nabla v)^{T}\bigr), \qquad W = \frac{1}{2}\bigl(\nabla v - (\nabla v)^{T}\bigr).$$

The tensor $D$ is the rate of deformation (or rate of strain). It measures the instantaneous rate at which material line elements stretch. The tensor $W$ is the spin tensor (or vorticity tensor). It measures the local rotational rate of material line elements.

For a rigid rotation with nonzero angular velocity $\omega$, the velocity is $v = \omega \times x$. Then $D = 0$ but $W \neq 0$. A stress contribution proportional to $L$ can respond spuriously to rigid spin; full-gradient dependence alone does not imply a nonzero response when $D=0$. For example, a contribution proportional to $\|D\|_F^2\|W\|_F^2D$, using the Frobenius norm, vanishes at $D=0$ yet is generally nonobjective. For time-dependent observer rotations $Q(t)$, objectivity requires $\sigma^*=Q\sigma Q^T$ under $L^*=\dot Q Q^T+QLQ^T$; pure-rotation response alone is an incomplete test. 

**Example 2.2: simple shear.** Consider the motion $x_{1} = X_{1} + \gamma(t) X_{2}$, $x_{2} = X_{2}$, $x_{3} = X_{3}$. Then

$$F = \begin{pmatrix} 1 & \gamma & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad J = 1.$$

The spatial velocity is $v = (\dot{\gamma} x_{2}, 0, 0)$. The velocity gradient, rate of deformation, and spin are

$$L = \begin{pmatrix} 0 & \dot{\gamma} & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad D = \frac{\dot{\gamma}}{2}\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad W = \frac{\dot{\gamma}}{2}\begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

The rate of deformation is symmetric and measures the shearing rate, while the spin is skew-symmetric and measures the local rotation.

## Polar decomposition and strain measures

The deformation gradient admits a polar decomposition

$$F = R \, U = V \, R,$$

where $R$ is a proper orthogonal tensor (rotation) and $U$, $V$ are symmetric positive-definite tensors (right and left stretch tensors). The right Cauchy–Green tensor $C = F^{T} F = U^{2}$ and the left Cauchy–Green tensor $B = F F^{T} = V^{2}$ are symmetric positive-definite strain measures that eliminate the rotational part of $F$.

The Green–Lagrange strain tensor is

$$E = \frac{1}{2}(C - I) = \frac{1}{2}(F^{T} F - I).$$

For a displacement $u(X,t)=\chi(X,t)-X$ with small material displacement gradient, this reduces to the infinitesimal strain tensor $\varepsilon = \frac{1}{2}(\nabla_X u + (\nabla_X u)^{T})$.

## Local invertibility does not identify particles globally

The hypotheses on a motion include global one-to-one correspondence between reference particles and current positions at each time. A positive determinant plus continuously differentiable motion gives local invertibility by the inverse-function theorem. It does not prove that two distant reference particles never occupy the same current point. That global condition is required before writing one spatial velocity field through a single-valued inverse motion.

For an explicit counterexample on a bounded reference box, map $(X_1,X_2,X_3)$ to $(e^{X_1}\cos X_2,e^{X_1}\sin X_2,X_3)$, with the second reference coordinate ranging over more than a full turn. Its determinant is $e^{2X_1}>0$, but labels separated by a full turn map to the same position. Every point has a local inverse branch while the whole map is not injective. Orientation preservation and noninterpenetration are therefore separate requirements.

A prescribed velocity field can provide the global property through ODE uniqueness. Suppose it is continuous in time and locally Lipschitz in position, and all relevant trajectories exist over the common interval. If two trajectories meet at a later time, solve the same ODE backwards from that meeting point. Local uniqueness, continued along the common interval, forces the two earlier trajectories to coincide. The flow is consequently injective on its initial domain. Its inverse on its image is the backward flow, under the corresponding common-existence assumptions.

For a continuously differentiable velocity, differentiating the trajectory with respect to its initial label gives $\dot F=LF$ and initial derivative identity. Jacobi's formula then integrates to $J=\exp(\int\operatorname{div}v\,dt)$ along each trajectory. It stays positive throughout the smooth common flow. This proves orientation preservation for that construction; it does not extend trajectories through blowup or through a loss of the stated spatial regularity.

## Material lines distinguish stretch from rotation exactly

Let a small reference tangent be a. Its current tangent is $\ell=Fa$. Differentiating at fixed material label gives $\dot\ell=L\ell$. Therefore the squared tangent length has rate $2\ell^TD\ell$: the skew contribution vanishes by the tensor-primer orthogonality identity. A line's instantaneous extension depends on its direction through the symmetric rate, not on the trace alone.

The dot product of two material tangents has rate $\ell_1^T(L^T+L)\ell_2$. Hence D also controls changes of their angle after the individual length changes are separated. If D vanishes throughout a motion, all such infinitesimal length and angle measurements are locally preserved, even though W may rotate their orientation in the observer's axes. A trace-free D can still stretch some directions and contract others while preserving volume.

In reference coordinates the same information is contained in $C=F^TF$. Differentiation gives $\dot C=2F^TDF$. Thus C is constant under a purely rigid superposed spatial rotation. It is not generally constant in a volume-preserving deformation, since determinant preservation fixes only the product of its principal stretches. These identities explain why a constitutive law can depend on C for finite strain without responding to a change of spatial observer.

## Polar decomposition follows from a positive square root

For invertible orientation-preserving F, its right tensor C is symmetric positive definite. Apply the spectral theorem and take the positive square root of each positive eigenvalue to define the unique positive definite square root U. Define $R=FU^{-1}$. Then $R^TR=U^{-1}CU^{-1}=I$ and its determinant is positive, so R is a proper rotation. This proves $F=RU$ rather than merely naming its factors.

If another such factorisation existed, its right stretch squared would again equal C and positivity would force the same square root. The rotation would then also be the same. Define $V=RUR^T$ to obtain the left form $F=VR$, with V positive definite. U and V have the same principal stretch values in their material and spatial frames respectively.

The proof needs invertibility to define the positive inverse and rotation. At a singular F one can construct partial polar factors, but a unique proper rotation need not follow. A smooth continuum motion here stays within the invertible class. The polar decomposition is an instantaneous geometric factorisation, not a claim that a loading history physically occurs first as a stretch and then as a rotation in time.

### Example 2.3: finite rotation and a small-strain error

For a planar rigid rotation R, use displacement gradient $H=R-I$. The exact Green strain is zero because $F^TF=I$. Its infinitesimal strain is $(R+R^T)/2-I$, equal in the rotating plane to $(\cos\theta-1)I$. At a large angle it falsely reports a compressive strain even though every length is preserved.

The issue is the approximation parameter. Expanding $F=I+H$ gives $E=\operatorname{sym}H+H^TH/2$. The omitted term has norm at most half the squared gradient norm. A small gradient makes it second order; a small displacement amplitude by itself does not. A rapidly oscillating small-amplitude displacement can still have a large gradient. Likewise a large rigid translation has zero displacement gradient and does not invalidate the strain approximation through its amplitude alone.

The rate tensor D concerns the current velocity gradient, while Green strain concerns a finite deformation relative to the reference. Integrating D componentwise in fixed axes does not generally produce the finite strain, because material directions rotate and stretch during the history. A constitutive rate model needs the appropriate transport or objective rate, developed in the later objectivity chapter.

### Example 2.4: steady flow can accelerate

Take the steady extensional field $v=(ax_1,-ax_2,0)$. Its trajectories are $x_1=X_1e^{at}$, $x_2=X_2e^{-at}$ and fixed third coordinate. The partial time derivative of v is zero, but its material acceleration is $(a^2x_1,a^2x_2,0)$, obtained by applying the velocity gradient to v. A stationary velocity field need not give constant velocity to a moving particle.

The determinant of the motion is one, so material volume is preserved. Its principal lengths nevertheless change exponentially in opposite directions. This one exact field thus separates three properties: temporal steadiness at fixed points, nonzero particle acceleration, and zero volume-change rate. Omitting advection would erase the acceleration while leaving the other two calculations apparently plausible.

## Paths, streamlines and streaks use different labels

A pathline follows one material particle through time. A streamline at a selected time is a curve tangent to the instantaneous velocity field, with that time held fixed throughout its spatial tracing. A streakline at a selected observation time collects all particles that passed through one injection point at earlier times. They coincide in many steady examples, but their definitions are different and generally give different curves in an unsteady field.

For uniform unsteady velocity $(U,at,0)$ with nonzero U, a particle released from the origin at time zero has path $(Ut,at^2/2,0)$. A streamline at time t has constant slope at divided by U and is straight. Particles injected at times tau have observation positions $(U(t-\tau),a(t^2-\tau^2)/2,0)$, which generally form a different curve. The velocity is spatially uniform, so none of these distinctions is caused by spatial shear.

Measurements must specify which construction they represent. A dye image records a streak or material patch according to its injection protocol; an instantaneous velocity plot gives streamline directions. Inferring a time-dependent particle history from only the latter can impose information absent from the measurement. The mathematical motion map is the object that retains the actual particle labels.

These smooth kinematics do not cover shocks or arbitrary weak velocity fields. In those settings a classical inverse flow, pointwise deformation gradient or unique particle path can fail or require additional theory. The balance chapters therefore state their smooth derivations before introducing weak integral meanings, rather than treating every differentiable identity as valid across a discontinuity.

## Summary and forward connections

This chapter established the kinematic framework: material labels $X$, spatial positions $x = \chi(X, t)$, the deformation gradient $F$, the material derivative $Df / Dt$, and the velocity gradient decomposition $L = D + W$. These tools are prerequisites for everything that follows.

In the next chapter, *Transport Theorem and Reynolds Transport*, we use these kinematic quantities to differentiate integrals over moving domains---the essential step in deriving local balance laws from integral statements.

## Exercises

### Exercise 1
For the motion $x_{1} = X_{1} + t X_{2}$, $x_{2} = X_{2} + t X_{1}$, $x_{3} = X_{3}$, compute $F$, $J$, $v$, $L$, $D$, and $W$. Determine for which $t$ the motion is physically admissible.

<details><summary>Hint 1</summary>

Differentiate the affine motion with respect to its material labels.

</details>

<details><summary>Hint 2</summary>

Invert the planar matrix before writing a spatial velocity or velocity gradient.

</details>

<details><summary>Full solution</summary>

**Solution.** We have

$$F = \begin{pmatrix} 1 & t & 0 \\ t & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad J = \det F = 1 - t^{2}.$$

Admissibility requires $J > 0$, so $|t| < 1$. The velocity is $v = (X_{2}, X_{1}, 0) = (x_{2} - t x_{1}, x_{1} - t x_{2}, 0)/(1 - t^{2})$ after inverting the motion. The spatial velocity gradient is

$$L = \nabla v = \frac{1}{1 - t^{2}}\begin{pmatrix} -t & 1 & 0 \\ 1 & -t & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$

Then $D = L$ (since $L$ is symmetric) and $W = 0$. The motion is irrotational at every instant.

</details>

### Exercise 2
Show that for any motion, $\dot{J} = J \, \mathrm{tr}(L) = J \, \nabla \cdot v$.

<details><summary>Hint 1</summary>

Use the determinant derivative and the chain rule for the deformation gradient.

</details>

<details><summary>Hint 2</summary>

The trace is cyclic even when the two matrix products are not equal.

</details>

<details><summary>Full solution</summary>

**Solution.** By Jacobi's formula for the derivative of a determinant,

$$\dot{J} = J \, \mathrm{tr}(F^{-1} \dot{F}).$$

Since $\dot{F} = \partial v / \partial X = (\partial v / \partial x)(\partial x / \partial X) = L F$, we have $F^{-1}\dot F=F^{-1}LF$, which is similar to $L$, not generally equal to it. Cyclicity of the trace gives

$$\operatorname{tr}(F^{-1}\dot F)=\operatorname{tr}(F^{-1}LF)=\operatorname{tr}(LFF^{-1})=\operatorname{tr}L.$$

Therefore $\dot{J} = J \, \mathrm{tr}(L) = J \, \nabla \cdot v$.

</details>

### Exercise 3
A velocity field is given by $v = (a x_{1}, -a x_{2}, 0)$ with $a > 0$ constant. Find the material motion map $\chi(X, t)$ assuming $\chi(X, 0) = X$. Compute $F$ and $J$ and verify the result of Exercise 2.

<details><summary>Hint 1</summary>

Solve the two scalar trajectory equations with their initial labels.

</details>

<details><summary>Hint 2</summary>

The two exponential stretch factors cancel in the determinant.

</details>

<details><summary>Full solution</summary>

**Solution.** The ODEs $\dot{x}_{1} = a x_{1}$, $\dot{x}_{2} = -a x_{2}$, $\dot{x}_{3} = 0$ with $x(0) = X$ have solutions $x_{1} = X_{1} e^{a t}$, $x_{2} = X_{2} e^{-a t}$, $x_{3} = X_{3}$. Thus

$$F = \begin{pmatrix} e^{a t} & 0 & 0 \\ 0 & e^{-a t} & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad J = 1.$$

Since $\nabla \cdot v = a - a + 0 = 0$, we have $\dot{J} = J \cdot 0 = 0$, consistent with $J(t) = J(0) = 1$ for all $t$.

</details>

### Exercise 4

For the exponential polar-coordinate map in the text, compute the determinant and exhibit two distinct labels with the same image.

<details><summary>Hint 1</summary>

Differentiate the first two output coordinates with respect to the first two labels.

</details>
<details><summary>Hint 2</summary>

Choose second-coordinate labels separated by a full turn inside the stated box.

</details>
<details><summary>Full solution</summary>

The planar Jacobian has columns $e^{X_1}(\cos X_2,\sin X_2)$ and $e^{X_1}(-\sin X_2,\cos X_2)$, with determinant $e^{2X_1}$. The third coordinate contributes a factor one. Labels with the same first and third entries and second entries differing by $2\pi$ have identical images. Positive determinant gives local invertibility but fails to exclude this global overlap.

</details>

### Exercise 5

Prove $\dot C=2F^TDF$ and explain why a skew velocity gradient gives no change in reference squared lengths.

<details><summary>Hint 1</summary>

Differentiate the product $F^TF$.

</details>
<details><summary>Hint 2</summary>

Insert $\dot F=LF$ on both sides of the product rule.

</details>
<details><summary>Full solution</summary>

The derivative is $F^TL^TF+F^TLF=F^T(L^T+L)F=2F^TDF$. If L is skew, D vanishes and C is constant. A reference tangent a has squared current length $a^TCa$, so all those squared lengths are unchanged. This argument concerns the current rate throughout a motion, not merely a skew matrix at an isolated initial instant.

</details>

### Exercise 6

For $F=R\operatorname{diag}(2,1,1/2)$ with proper orthogonal R, find U, C and J.

<details><summary>Hint 1</summary>

The spatial rotation cancels in $F^TF$.

</details>
<details><summary>Hint 2</summary>

Take the positive square root for the right stretch.

</details>
<details><summary>Full solution</summary>

C is diagonal with entries four, one and one quarter; U has entries two, one and one half. J is one, since the rotation determinant is one and the stretch factors multiply to one. The motion preserves volume but not lengths. The left stretch is R times U times its transpose, so its directions are spatially rotated.

</details>

### Exercise 7

Give a displacement with arbitrarily small supremum amplitude but a displacement gradient that does not tend to zero.

<details><summary>Hint 1</summary>

Increase spatial frequency while reducing amplitude.

</details>
<details><summary>Hint 2</summary>

Differentiate before estimating the small parameter.

</details>
<details><summary>Full solution</summary>

On a fixed interval use $u_n(X)=\sin(nX)/(2n)$ in one component. Its amplitude tends to zero but its derivative is $\cos(nX)/2$, whose supremum stays one half. The deformation factor in that direction remains positive, so this also avoids confusing the example with an orientation reversal. Small displacement amplitude alone does not force the quadratic finite-strain correction to vanish uniformly.

</details>

### Exercise 8

For steady velocity $(ax_1,-ax_2,0)$, compute the material acceleration directly from its trajectories and from the spatial formula.

<details><summary>Hint 1</summary>

Differentiate the exponential trajectories twice.

</details>
<details><summary>Hint 2</summary>

The partial time derivative vanishes, leaving the advective term.

</details>
<details><summary>Full solution</summary>

The trajectory second derivatives are $(a^2X_1e^{at},a^2X_2e^{-at},0)=(a^2x_1,a^2x_2,0)$. Spatially, the gradient is diagonal with entries a, minus a and zero; multiplying by v gives the same result. The acceleration is not zero merely because the velocity at each fixed position is time independent.

</details>

### Exercise 9

For uniform unsteady velocity $(U,at,0)$, describe a particle path released at time tau and its position at a later observation time t.

<details><summary>Hint 1</summary>

Integrate each time-dependent velocity from the release time.

</details>
<details><summary>Hint 2</summary>

The collection over release times is a streakline, while one fixed release time gives one path.

</details>
<details><summary>Full solution</summary>

For release from the origin its observed position is $(U(t-\tau),a(t^2-\tau^2)/2,0)$. Holding tau fixed and varying t gives the particle path. Holding t fixed and varying tau gives the streakline. A streamline at that t instead has fixed slope at divided by U, so it is straight when U is nonzero. The three protocols agree only under additional special conditions.

</details>

### Exercise 10

Explain what ODE hypotheses prevent two distinct material trajectories from crossing and why a positive Jacobian alone is insufficient.

<details><summary>Hint 1</summary>

Start both paths backwards from a proposed meeting point.

</details>
<details><summary>Hint 2</summary>

Local spatial Lipschitz regularity gives uniqueness; common existence extends the comparison along the interval.

</details>
<details><summary>Full solution</summary>

For a time-continuous locally spatially Lipschitz velocity with the required common trajectories, backward uniqueness from a meeting point forces the entire earlier paths to agree, contradicting distinct initial labels. Positive determinant only supplies an inverse near each label, and the exponential polar-coordinate example has overlapping distant labels despite that property. The global flow argument and the local determinant argument therefore do different work.

</details>
