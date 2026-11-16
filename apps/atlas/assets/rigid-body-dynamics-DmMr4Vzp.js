var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: rigid-body-dynamics
title: "Rigid Body Dynamics"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
status: draft
---

# Rigid Body Dynamics

A rigid body is a system of particles with fixed relative distances. Despite being a collection of many particles, its motion decomposes cleanly into translation of the centre of mass and rotation about it. This chapter develops the Lagrangian and Hamiltonian formulations of rigid body motion, the Euler equations, and the geometric picture of rotation in terms of Lie groups.

## Kinematics of a rigid body

A rigid body has six degrees of freedom: three for the position of the centre of mass and three for the orientation. The configuration of a rigid body is specified by $(\\mathbf{R}, \\Lambda)$, where $\\mathbf{R} \\in \\mathbb{R}^{3}$ is the center-of-mass position and $\\Lambda \\in SO(3)$ is the rotation matrix relating the body-fixed frame to the space-fixed frame.

A point $\\mathbf{r}$ in the body has space-frame position

$$\\mathbf{r}_{\\text{space}} = \\mathbf{R} + \\Lambda\\mathbf{a},$$

where $\\mathbf{a}$ is the body-frame position. The velocity is

$$\\dot{\\mathbf{r}}_{\\text{space}} = \\dot{\\mathbf{R}} + \\dot{\\Lambda}\\mathbf{a} = \\dot{\\mathbf{R}} + \\Lambda(\\boldsymbol{\\omega} \\times \\mathbf{a}),$$

where $\\boldsymbol{\\omega}$ is the angular velocity in the body frame, defined by $\\Lambda^{T}\\dot{\\Lambda}\\mathbf{a}=\\boldsymbol{\\omega}\\times\\mathbf{a}$ for every body-frame vector $\\mathbf a$. Equivalently, $\\dot\\Lambda\\Lambda^T$ represents cross product with the space-frame angular velocity $\\Lambda\\boldsymbol\\omega$.

## The inertia tensor

**Definition 10.1 (Inertia tensor).** The *inertia tensor* $\\mathbf{I}$ in the body frame is the symmetric matrix

$$I_{ij} = \\int\\rho(\\mathbf{a})(|\\mathbf{a}|^{2}\\delta_{ij} - a_{i}a_{j})\\,d^{3}a,$$

where $\\rho$ is the mass density.

By choosing body axes aligned with the principal axes of $\\mathbf{I}$, the tensor becomes diagonal: $\\mathbf{I} = \\text{diag}(I_{1}, I_{2}, I_{3})$. The $I_{i}$ are the **principal moments of inertia**.

The kinetic energy of rotation is

$$T_{\\text{rot}} = \\frac{1}{2}\\boldsymbol{\\omega}^{T}\\mathbf{I}\\boldsymbol{\\omega} = \\frac{1}{2}(I_{1}\\omega_{1}^{2} + I_{2}\\omega_{2}^{2} + I_{3}\\omega_{3}^{2}).$$

Here and below the mass distribution is fixed in the body, has finite second moments, and has positive total mass. The choice of origin matters: at this point it is the centre of mass. Expanding the squared velocity in the preceding section gives a cross term proportional to $\\int\\rho\\mathbf a\\,d^3a$, which vanishes at that origin. Consequently the full kinetic energy is $M|\\dot{\\mathbf R}|^2/2+T_{\\rm rot}$. The identity $|\\boldsymbol\\omega\\times\\mathbf a|^2=|\\boldsymbol\\omega|^2|\\mathbf a|^2-(\\boldsymbol\\omega\\cdot\\mathbf a)^2$ then proves the displayed tensor formula directly; it is not an independent constitutive assumption.

For any vector $\\mathbf u$,

$$\\mathbf u^T\\mathbf I\\mathbf u=\\int\\rho\\,|\\mathbf u\\times\\mathbf a|^2\\,d^3a\\ge0.$$

Equality for a nonzero $\\mathbf u$ requires the entire mass distribution, up to zero-mass sets, to lie on its axis. A genuinely three-dimensional body therefore has positive-definite inertia. The spectral theorem for a real symmetric matrix provides orthonormal principal axes, and positive definiteness gives $I_i>0$. An ideal straight rod has a zero axial moment and falls outside the invertible-inertia equations used here.

If the origin is translated to a fixed pivot a body vector $\\mathbf d$ from the centre of mass, expansion and the same vanishing first moment give the **parallel-axis theorem**

$$\\mathbf I_{\\rm pivot}=\\mathbf I_{\\rm cm}+M(|\\mathbf d|^2\\mathbf1-\\mathbf d\\mathbf d^T).$$

Use this tensor for a body with a fixed pivot. Substituting the center-of-mass tensor into the heavy-top formulas without this change would omit translational kinetic energy of the moving centre of mass. Translating an origin is distinct from merely rotating the basis in which a fixed tensor is represented.

## Euler's equations

For a rigid body with no external torque, angular momentum $\\mathbf{L} = \\mathbf{I}\\boldsymbol{\\omega}$ is conserved in the space frame. In the body frame, $\\mathbf{L}$ rotates:

$$\\dot{\\mathbf{L}}_{\\text{body}} + \\boldsymbol{\\omega} \\times \\mathbf{L}_{\\text{body}} = 0.$$

Writing $L_{i} = I_{i}\\omega_{i}$:

$$I_{1}\\dot{\\omega}_{1} = (I_{2} - I_{3})\\omega_{2}\\omega_{3},$$
$$I_{2}\\dot{\\omega}_{2} = (I_{3} - I_{1})\\omega_{3}\\omega_{1},$$
$$I_{3}\\dot{\\omega}_{3} = (I_{1} - I_{2})\\omega_{1}\\omega_{2}.$$

These are **Euler's equations** for a free rigid body.

The frame derivative supplies a useful proof. Since $\\mathbf L_s=\\Lambda\\mathbf L_b$, differentiating gives $\\dot{\\mathbf L}_s=\\Lambda(\\dot{\\mathbf L}_b+\\boldsymbol\\omega\\times\\mathbf L_b)$. The space-frame torque is $\\dot{\\mathbf L}_s$ about an inertial centre of mass, or about a fixed pivot; multiplying by $\\Lambda^T$ gives the body-frame equation, with a torque on its right when present. Body components need not be constant when the geometric vector is constant.

In the torque-free case write $\\boldsymbol\\omega=\\mathbf I^{-1}\\mathbf L$. Then $\\dot{\\mathbf L}=\\mathbf L\\times\\mathbf I^{-1}\\mathbf L$. Dotting with $\\mathbf L$ proves conservation of $C=|\\mathbf L|^2$, and dotting with $\\mathbf I^{-1}\\mathbf L$ proves conservation of $T=\\mathbf L\\cdot\\mathbf I^{-1}\\mathbf L/2$. These polynomial identities hold for every solution. Positive inertia and fixed $C$ bound $\\mathbf L$ for all finite times, so the smooth Euler vector field extends its solutions globally. Energy conservation alone would not mean that each component is conserved.

## Worked example: symmetric top

For a symmetric top, $I_{1} = I_{2} \\neq I_{3}$. Euler's equations simplify. The third equation gives $\\dot{\\omega}_{3} = 0$, so $\\omega_{3} = \\text{const}$. The first two become

$$\\dot{\\omega}_{1} = \\Omega\\omega_{2}, \\qquad \\dot{\\omega}_{2} = -\\Omega\\omega_{1},$$

where $\\Omega = (I_{1} - I_{3})\\omega_{3}/I_{1}$. The solution is

$$\\omega_{1}(t) = A\\cos(\\Omega t), \\qquad \\omega_{2}(t) = -A\\sin(\\Omega t).$$

The angular velocity vector precesses about the symmetry axis with frequency $\\Omega$. This is *body cone* motion.

An arbitrary initial transverse direction adds a phase to the two trigonometric arguments. The sign of $\\Omega$ records the orientation of that rotation, whereas its observed period is $2\\pi/|\\Omega|$ when $\\Omega\\ne0$. If $A=0$ the body spins steadily about its symmetry axis; if $\\Omega=0$ the transverse components are constant. Neither limiting case should be described as nontrivial precession. The space-frame path of the symmetry axis requires reconstructing $\\dot\\Lambda=\\Lambda\\widehat{\\omega}$; it is a different curve from this body-frame circle.

## The Lagrangian on $SO(3)$

The configuration space of a rigid body with one point fixed is $SO(3)$. Using Euler angles $(\\phi, \\theta, \\psi)$, the rotation matrix is

$$\\Lambda = R_{z}(\\phi)R_{x}(\\theta)R_{z}(\\psi).$$

The kinetic energy expressed in Euler angles is

$$T = \\frac{1}{2}I_{1}(\\dot{\\theta}\\cos\\psi + \\dot{\\phi}\\sin\\theta\\sin\\psi)^{2} + \\frac{1}{2}I_{2}(-\\dot{\\theta}\\sin\\psi + \\dot{\\phi}\\sin\\theta\\cos\\psi)^{2} + \\frac{1}{2}I_{3}(\\dot{\\psi} + \\dot{\\phi}\\cos\\theta)^{2}.$$

For a symmetric top ($I_{1} = I_{2}$), this simplifies to

$$T = \\frac{I_{1}}{2}(\\dot{\\theta}^{2} + \\dot{\\phi}^{2}\\sin^{2}\\theta) + \\frac{I_{3}}{2}(\\dot{\\psi} + \\dot{\\phi}\\cos\\theta)^{2}.$$

## Worked example: heavy symmetric top

A symmetric top with fixed pivot point in a uniform gravitational field $g$ has potential energy $V = Mgl\\cos\\theta$, where $l$ is the distance from the pivot to the centre of mass.

In this example $I_1,I_3$ mean principal moments **about the pivot**. We take the center-of-mass displacement along the symmetry axis, with $\\theta$ measured from the upward vertical. Thus $\\theta=0$ puts the centre of mass highest, consistent with the sign of the potential.

The Lagrangian is

$$L = \\frac{I_{1}}{2}(\\dot{\\theta}^{2} + \\dot{\\phi}^{2}\\sin^{2}\\theta) + \\frac{I_{3}}{2}(\\dot{\\psi} + \\dot{\\phi}\\cos\\theta)^{2} - Mgl\\cos\\theta.$$

Since $\\phi$ and $\\psi$ are cyclic, $p_{\\phi}$ and $p_{\\psi}$ are conserved. The energy

$$E = \\frac{I_{1}}{2}\\dot{\\theta}^{2} + \\frac{(p_{\\phi} - p_{\\psi}\\cos\\theta)^{2}}{2I_{1}\\sin^{2}\\theta} + \\frac{p_{\\psi}^{2}}{2I_{3}} + Mgl\\cos\\theta$$

is also conserved. The effective potential for $\\theta$ is

$$V_{\\text{eff}}(\\theta) = \\frac{(p_{\\phi} - p_{\\psi}\\cos\\theta)^{2}}{2I_{1}\\sin^{2}\\theta} + Mgl\\cos\\theta.$$

The motion in $\\theta$ is bounded between turning points where $E-p_\\psi^2/(2I_3)=V_{\\text{eff}}(\\theta)$; the constant spin-energy term must be subtracted. For $I_1=3,I_3=2,p_\\phi=0,p_\\psi=2,Mgl=1$, the value $\\theta=\\pi/2$ with $\\dot\\theta=0$ gives $E=1$ but $V_{\\text{eff}}=0$, exposing the missing offset in $E=V_{\\text{eff}}$. The precession rate $\\dot{\\phi}$ varies with $\\theta$, producing the characteristic nutation. This online energy-offset correction postdates the retained draft PDF.

## Poinsot's construction

For a torque-free asymmetric rigid body with $I_i>0$ and rotational energy $T>0$, use the inertial center-of-mass rest frame. Write $\\boldsymbol\\omega$ and $\\mathbf L_b=\\mathbf I\\boldsymbol\\omega$ in body coordinates and $\\mathbf L_s=\\Lambda\\mathbf L_b$ in space coordinates; $\\mathbf L_s$ is fixed. The auxiliary ellipsoid fixed in the body is the unnormalized physical energy quadric in coordinates $\\mathbf u$, with contact point $\\mathbf u=\\boldsymbol\\omega$:

$$I_1u_1^2+I_2u_2^2+I_3u_3^2=2T,\\qquad \\left.\\nabla_{\\mathbf u}(\\mathbf u^T\\mathbf I\\mathbf u)\\right|_{\\mathbf u=\\boldsymbol\\omega}=2\\mathbf L_b.$$

At $\\mathbf r_c=\\Lambda\\boldsymbol\\omega$, its tangent plane is $\\mathbf L_s\\cdot\\mathbf r=2T$, fixed in space. The material point instantaneously at contact has velocity $(\\Lambda\\boldsymbol\\omega)\\times\\mathbf r_c=0$, so the auxiliary ellipsoid rolls without slipping; $\\dot{\\mathbf r}_c=\\Lambda\\dot{\\boldsymbol\\omega}$ is the generally nonzero velocity of the moving contact locus, not of that material point. The polhode is the contact curve on the body ellipsoid, and the herpolhode is its curve on the fixed plane. In momentum coordinates the energy equation is instead $\\mathbf L_b^T\\mathbf I^{-1}\\mathbf L_b=2T$, intersected with the sphere $|\\mathbf L_b|^2=|\\mathbf L_s|^2$; reciprocal coefficients do not define the rolling $\\boldsymbol\\omega$ ellipsoid. For $\\mathbf I=\\mathrm{diag}(2,3,4)$ and $\\boldsymbol\\omega=(1,1,1)$, Euler's equations give $\\dot{\\boldsymbol\\omega}=(-1/2,2/3,-1/4)$: the earlier reciprocal expression $\\sum_i\\omega_i^2/I_i$ has derivative $-13/72$, while both $\\boldsymbol\\omega^T\\mathbf I\\boldsymbol\\omega$ and $|\\mathbf L_b|^2$ have derivative zero. This online energy-quadric and frame correction postdates the retained draft PDF.

## Stability of rotation

**Theorem 10.2.** For a torque-free rigid body with three distinct positive principal moments, a nonzero steady rotation about an extreme principal axis is Lyapunov stable as an equilibrium of the body-frame angular-velocity equations. Rotation about the intermediate principal axis is unstable.

*Proof sketch.* Linearize Euler's equations about steady rotation $\\boldsymbol{\\omega} = (0, 0, \\omega_{3})$. Perturbations $(\\delta\\omega_{1}, \\delta\\omega_{2})$ satisfy

$$I_{1}\\delta\\dot{\\omega}_{1} = (I_{2} - I_{3})\\omega_{3}\\delta\\omega_{2},$$
$$I_{2}\\delta\\dot{\\omega}_{2} = (I_{3} - I_{1})\\omega_{3}\\delta\\omega_{1}.$$

Seeking solutions $\\propto e^{\\lambda t}$ gives

$$\\lambda^{2} = \\frac{(I_{2} - I_{3})(I_{3} - I_{1})}{I_{1}I_{2}}\\omega_{3}^{2}.$$

If $I_{3}$ is the largest or smallest, $(I_{2} - I_{3})(I_{3} - I_{1}) < 0$, so the transverse linearized modes oscillate. Imaginary eigenvalues alone do not prove nonlinear stability: here the conserved combination $L^2-2I_3T=I_1(I_1-I_3)\\omega_1^2+I_2(I_2-I_3)\\omega_2^2$ is definite in the transverse variables. Together with conserved energy and the local sign of the nonzero reference spin, it bounds all components near that equilibrium and gives Lyapunov stability. If $I_{3}$ is intermediate, the product is positive, giving a growing real mode and instability.

Here is a full nonlinear argument, including perturbations that change the values of the invariants. Let the reference momentum be $(0,0,\\ell)$, $\\ell\\ne0$. The conserved function

$$A=T-\\frac{C}{2I_3}=\\frac12\\left[\\left(\\frac1{I_1}-\\frac1{I_3}\\right)L_1^2+\\left(\\frac1{I_2}-\\frac1{I_3}\\right)L_2^2\\right]$$

is positive in the transverse variables when $I_3$ is largest, and its negative is positive when $I_3$ is smallest. In either case put $W=|A|+(C-\\ell^2)^2$, with fixed positive coefficients if physical units are to be matched. In a small neighborhood having the same sign of $L_3$ as $\\ell$, $W\\ge0$ and vanishes only at the reference equilibrium. It is conserved. On the boundary of any sufficiently small closed ball about that equilibrium, continuity and compactness give a positive minimum of $W$. Initial states close enough to the equilibrium have smaller $W$ and cannot cross that boundary. This proves Lyapunov stability in all three momentum coordinates; the invertible linear conversion between $\\mathbf L$ and $\\boldsymbol\\omega$ preserves it.

For instability order the moments $I_1<I_2<I_3$ and take reference $\\mathbf L=(0,\\ell,0)$, $\\ell>0$. Put $d=1/I_1-1/I_2>0$, $c=1/I_2-1/I_3>0$, and $a=\\sqrt{d/c}$. The invariant curves $C=\\ell^2$, $T=C/(2I_2)$ contain the branch

$$L_3=-aL_1,\\qquad L_2=\\sqrt{\\ell^2-(1+a^2)L_1^2},\\qquad L_1>0.$$

Euler's equation on this branch gives $\\dot L_1=caL_2L_1$. Its third equation agrees with $\\dot L_3=-a\\dot L_1$, because $ca^2=d$. Choose a fixed small $\\delta>0$ with $(1+a^2)\\delta^2<3\\ell^2/4$. As long as $0<L_1\\le\\delta$, $L_2>\\ell/2$, hence $\\dot L_1\\ge ca\\ell L_1/2$. Starting with arbitrarily small positive $L_1$, the trajectory must reach $\\delta$ in finite time: otherwise integration of this inequality would force it eventually above $\\delta$. These initial states tend to the reference equilibrium but leave a fixed neighborhood. That is nonlinear instability, without an unstated appeal to a linear instability theorem. Reversing the sign of the reference spin gives the corresponding outgoing branch in reverse orientation.

## Worked example: intermediate-axis departure

Take $(I_1,I_2,I_3)=(2,3,4)$ and the steady angular velocity $(0,1,0)$, so $\\ell=3$. Here $d=1/6$, $c=1/12$, and $a=\\sqrt2$. On the branch just constructed, near the equilibrium,

$$\\dot L_1\\simeq\\frac{\\sqrt2}{4}L_1.$$

Direct linearisation in $(\\omega_1,\\omega_3)$ gives $\\dot\\omega_1=-\\omega_3/2$ and $\\dot\\omega_3=-\\omega_1/4$, hence $\\lambda^2=1/8$ and the same growth rate $\\sqrt2/4$. The two calculations serve different purposes: the linear rate describes initial departure, while the invariant-curve inequality proves that arbitrarily small perturbations actually escape a fixed neighborhood. The subsequent bounded motion is not exponential forever, since $C$ confines the momentum to a sphere. The instability concerns a particular steady rotation, not unbounded growth of the body's energy.

**Common error:** Do not extend the distinct-moment theorem to neutral stability "about any axis" for a nonspherical symmetric top. All statements here concern torque-free body-frame angular velocities with positive principal moments. For a spherical inertia tensor $I_1=I_2=I_3$, every angular velocity is a constant equilibrium and is Lyapunov stable. For $I_1=I_2=I\\ne I_3$, Euler's equations are steady exactly when $\\omega_3=0$ or $\\omega_1=\\omega_2=0$; a generic tilted body axis is not steady. The symmetry-axis equilibria are Lyapunov stable because $r=\\sqrt{\\omega_1^2+\\omega_2^2}$ and $\\omega_3$ are constant. An equatorial fixed-speed circle is likewise stable as a set, but an individual nonzero equatorial spin is not Lyapunov stable against out-of-plane perturbations, which produce slow azimuthal drift. For the explicit moments $(I_1,I_2,I_3)=(1,1,2)$, the tilted value $\\boldsymbol\\omega=(1,0,1)$ has $\\dot{\\boldsymbol\\omega}=(0,1,0)$. Near the equatorial equilibrium $(1,0,0)$, the initial condition $(1,0,\\epsilon)$ has the exact solution $\\boldsymbol\\omega_\\epsilon(t)=(\\cos(\\epsilon t),\\sin(\\epsilon t),\\epsilon)$. Its initial distance from that fixed equilibrium is $|\\epsilon|$, but at $t=\\pi/|\\epsilon|$ the distance is $\\sqrt{4+\\epsilon^2}>2$ for every $\\epsilon\\ne0$.

## Practice exercises

<a id="rigid-body-dynamics-ex-1"></a>

### Exercise 1
Compute the principal moments of inertia for a uniform solid sphere of mass $M$ and radius $R$.

<details>
<summary>Hint 1</summary>

Use rotational symmetry to make the three diagonal moments equal.

</details>

<details>
<summary>Hint 2</summary>

Compute their sum as twice the integral of squared radius, using spherical shells.

</details>

<details>
<summary>Full solution</summary>

By symmetry, all principal moments are equal. For a solid sphere, $I = \\frac{2}{5}MR^{2}$ about any axis through the centre.

To derive the constant, $\\operatorname{tr}\\mathbf I=2\\int r^2\\,dm=8\\pi\\rho R^5/5$. Each of the three equal moments is one third of this trace. Substituting $M=4\\pi\\rho R^3/3$ gives $I=2MR^2/5$ as stated. This calculation uses uniform volume density, rather than a thin spherical shell.

</details>

<a id="rigid-body-dynamics-ex-2"></a>

### Exercise 2
A rectangular box with sides $a$, $b$, $c$ and uniform density has mass $M$. Find its principal moments of inertia about the centre.

<details>
<summary>Hint 1</summary>

Put the box centre at the origin and align the axes with its edges.

</details>

<details>
<summary>Hint 2</summary>

For the first moment integrate y squared plus z squared; symmetry makes mixed products zero.

</details>

<details>
<summary>Full solution</summary>

$I_{1} = \\frac{M}{12}(b^{2} + c^{2})$, $I_{2} = \\frac{M}{12}(a^{2} + c^{2})$, $I_{3} = \\frac{M}{12}(a^{2} + b^{2})$.

For example, with density $M/(abc)$, $\\int y^2\\,dm=M b^2/12$ because $\\int_{-b/2}^{b/2}y^2\\,dy=b^3/12$. The same calculation gives $\\int z^2\\,dm=M c^2/12$, proving the first formula. Every off-diagonal entry vanishes because its integrand is odd in one centred coordinate. Cyclic permutation gives the other two moments and proves these axes are principal.

</details>

<a id="rigid-body-dynamics-ex-3"></a>

### Exercise 3
For a free symmetric top with $I_{1} = I_{2}$ and $I_{3}$, show that the total angular momentum $L^{2} = L_{1}^{2} + L_{2}^{2} + L_{3}^{2}$ and the kinetic energy $T$ are both conserved.

<details>
<summary>Hint 1</summary>

Write Euler’s equations for the body components of angular momentum.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the squared norm and the quadratic kinetic energy, keeping the reciprocal-inertia coefficients.

</details>

<details>
<summary>Full solution</summary>

From Euler's equations with $I_{1} = I_{2}$: $\\dot{L}_{1} = (1/I_{3} - 1/I_{2})L_{2}L_{3}$ and $\\dot{L}_{2} = (1/I_{1} - 1/I_{3})L_{3}L_{1}$. Then $\\dot{L}^{2} = 2(L_{1}\\dot{L}_{1} + L_{2}\\dot{L}_{2} + L_{3}\\dot{L}_{3}) = 2L_{1}L_{2}L_{3}(1/I_{3} - 1/I_{2} + 1/I_{1} - 1/I_{3}) = 0$ since $I_{1} = I_{2}$. Also $2T = L_{1}^{2}/I_{1} + L_{2}^{2}/I_{2} + L_{3}^{2}/I_{3} = (L^{2} - L_{3}^{2})/I_{1} + L_{3}^{2}/I_{3}$, which is constant because $L^{2}$ and $L_{3}$ are conserved. This online rate-sign correction postdates the retained draft PDF.

</details>

<a id="rigid-body-dynamics-ex-4"></a>

### Exercise 4
A spinning figure skater pulls in their arms, reducing their moment of inertia from $I_{i}$ to $I_{f} < I_{i}$. If the initial angular velocity is $\\omega_{i}$, find the final angular velocity and discuss energy conservation.

<details>
<summary>Hint 1</summary>

Use the absence of an external axial torque.

</details>

<details>
<summary>Hint 2</summary>

Express both energies in terms of the same conserved angular momentum; internal work can change kinetic energy.

</details>

<details>
<summary>Full solution</summary>

Angular momentum is conserved: $I_{i}\\omega_{i} = I_{f}\\omega_{f}$, so $\\omega_{f} = (I_{i}/I_{f})\\omega_{i}$. The kinetic energy changes from $T_{i} = I_{i}\\omega_{i}^{2}/2$ to $T_{f} = I_{f}\\omega_{f}^{2}/2 = (I_{i}^{2}/I_{f})\\omega_{i}^{2}/2 = (I_{i}/I_{f})T_{i} > T_{i}$. The skater does work by pulling their arms in, increasing the kinetic energy.

</details>

<a id="rigid-body-dynamics-ex-5"></a>

### Exercise 5
For the heavy symmetric top, find the condition on $p_{\\phi}$ and $p_{\\psi}$ for the existence of a steady precession solution with $\\theta = \\theta_{0}$ constant and $0<\\theta_0<\\pi$ (nonvertical motion).

<details>
<summary>Hint 1</summary>

Set the polar velocity and acceleration equal to zero without fixing the two cyclic velocities.

</details>

<details>
<summary>Hint 2</summary>

Use the conserved spin momentum to eliminate the spin velocity in the polar equation, then use the azimuthal momentum relation.

</details>

<details>
<summary>Full solution</summary>

For a nonvertical steady precession with $\\sin\\theta_0\\ne0$, $\\dot\\theta=\\ddot\\theta=0$ and

$$p_\\phi=p_\\psi\\cos\\theta_0+I_1\\dot\\phi\\sin^2\\theta_0.$$

Substituting this relation into the $\\theta$ equation and dividing by $\\sin\\theta_0$ gives the explicit quadratic

$$I_1\\cos\\theta_0\\,\\dot\\phi^2-p_\\psi\\dot\\phi+Mgl=0.$$

A real steady-precession rate exists exactly when this quadratic has a real root (with the $\\cos\\theta_0=0$ case read as a linear equation). Together with the displayed momentum relation, this is the requested condition on $p_\\phi$ and $p_\\psi$.

</details>

<a id="rigid-body-dynamics-ex-6"></a>

### Exercise 6

Derive the parallel-axis formula for a uniform solid sphere whose pivot is on its surface. Identify the moment about the line from pivot to centre and the two perpendicular moments.

<details>
<summary>Hint 1</summary>

At the centre the tensor is a scalar multiple of the identity. The displacement has length $R$.

</details>

<details>
<summary>Hint 2</summary>

Choose the third axis parallel to the displacement and apply $M(R^2\\mathbf1-\\mathbf d\\mathbf d^T)$.

</details>

<details>
<summary>Full solution</summary>

The center tensor is $2MR^2\\mathbf1/5$. With $\\mathbf d=(0,0,R)$ the translation adds $MR^2\\operatorname{diag}(1,1,0)$. The pivot tensor is therefore $MR^2\\operatorname{diag}(7/5,7/5,2/5)$. The axial line is unchanged by the translation; distances from that line are identical. The two perpendicular axes acquire the full $MR^2$ correction. The result assumes the sphere remains rigid and the pivot is fixed in inertial space.

</details>

<a id="rigid-body-dynamics-ex-7"></a>

### Exercise 7

For distinct ordered moments $I_1<I_2<I_3$, construct a conserved function proving stability near $(L_1,L_2,L_3)=(\\ell,0,0)$, $\\ell\\ne0$.

<details>
<summary>Hint 1</summary>

Subtract a multiple of $C$ from $T$ so the coefficient of $L_1^2$ vanishes.

</details>

<details>
<summary>Hint 2</summary>

The remaining coefficients are negative. Negate the result, and add a squared norm constraint to control the first component locally.

</details>

<details>
<summary>Full solution</summary>

Take $W=C/(2I_1)-T+\\eta(C-\\ell^2)^2$, where $\\eta>0$ has units energy divided by angular momentum to the fourth power. Its first term difference is $[(1/I_1-1/I_2)L_2^2+(1/I_1-1/I_3)L_3^2]/2$, positive away from the first axis. Near the chosen sign of $L_1$, $W=0$ only at $(\\ell,0,0)$. It is a conserved continuous positive-definite function there. Its positive minimum on a small surrounding sphere prevents a sufficiently small initial state from leaving that sphere, exactly as in the proof in the text. Control is local because the opposite equilibrium also has $W=0$.

</details>

<a id="rigid-body-dynamics-ex-8"></a>

### Exercise 8

For $(I_1,I_2,I_3)=(1,1,2)$, explain why the equatorial circle $\\omega_1^2+\\omega_2^2=1$, $\\omega_3=0$ is stable as a set but its point $(1,0,0)$ is unstable as an equilibrium.

<details>
<summary>Hint 1</summary>

The transverse radius and the third component are separately conserved.

</details>

<details>
<summary>Hint 2</summary>

Use the exact solution starting from $(1,0,\\epsilon)$ and wait for an angular displacement of $\\pi$.

</details>

<details>
<summary>Full solution</summary>

If the initial transverse radius is $r$ and axial component $z$, the distance to the circle is $\\sqrt{(r-1)^2+z^2}$ and stays constant. This proves set stability. The solution from $(1,0,\\epsilon)$ is $(\\cos\\epsilon t,\\sin\\epsilon t,\\epsilon)$. Its initial distance to the particular point is $|\\epsilon|$, while at $t=\\pi/|\\epsilon|$ that distance exceeds two. Thus no fixed small neighborhood of the point contains all trajectories starting sufficiently close to it. Slow drift along a stable set can destroy stability of each of its individual points.

</details>

<a id="rigid-body-dynamics-ex-9"></a>

### Exercise 9

A heavy symmetric top has $\\theta_0=\\pi/2$. For $Mgl>0$, what spin momentum and precession rate can give steady motion at this angle? Find $p_\\phi$.

<details>
<summary>Hint 1</summary>

At this angle the quadratic steady-precession equation becomes linear.

</details>

<details>
<summary>Hint 2</summary>

Use $\\sin^2\\theta_0=1$ and $\\cos\\theta_0=0$ in the azimuthal momentum.

</details>

<details>
<summary>Full solution</summary>

The equation is $-p_\\psi\\dot\\phi+Mgl=0$. Hence $p_\\psi\\ne0$ is necessary and $\\dot\\phi=Mgl/p_\\psi$. The azimuthal momentum must be $p_\\phi=I_1Mgl/p_\\psi$. Conversely these choices with $\\dot\\psi=p_\\psi/I_3$ and constant $\\theta=\\pi/2$ satisfy the cyclic momentum equations and polar equation, so they produce the requested motion. This existence calculation does not establish its stability.

</details>

<a id="rigid-body-dynamics-ex-10"></a>

### Exercise 10

Let $\\mathbf I$ be positive definite and $\\boldsymbol\\tau_b$ an applied body torque. Derive the rates of $T$ and $C=|\\mathbf L|^2$. Can a nonzero torque change the direction of space angular momentum while doing no work?

<details>
<summary>Hint 1</summary>

Use $\\dot{\\mathbf L}=\\mathbf L\\times\\boldsymbol\\omega+\\boldsymbol\\tau_b$.

</details>

<details>
<summary>Hint 2</summary>

Dot this equation separately with $\\boldsymbol\\omega$ and $2\\mathbf L$.

</details>

<details>
<summary>Full solution</summary>

Since the body inertia is constant, $\\dot T=\\boldsymbol\\omega\\cdot\\dot{\\mathbf L}=\\boldsymbol\\omega\\cdot\\boldsymbol\\tau_b$, whereas $\\dot C=2\\mathbf L\\cdot\\boldsymbol\\tau_b$. A torque perpendicular to the angular velocity does no instantaneous work. For a spherical body, choose a nonzero torque perpendicular to $\\mathbf L$: it changes the space vector by $\\dot{\\mathbf L}_s=\\Lambda\\boldsymbol\\tau_b$, preserves its norm and energy, and turns its direction. For an asymmetric body, perpendicularity to $\\boldsymbol\\omega$ and perpendicularity to $\\mathbf L$ are different conditions, so energy preservation need not preserve $C$.

</details>

<a id="connections"></a>

## Summary and connections

Rigid body dynamics exemplifies the interplay of symmetry and conservation. The free rigid body is integrable, and its solution in terms of elliptic functions is a classic result. In **Perturbation Methods**, we study how small external torques modify this integrable structure. The geometric formulation in terms of $SO(3)$ and coadjoint orbits connects to **Lie Groups and Symmetry** and provides the template for understanding more complex systems in **Field Theory Action**.
`;export{e as default};