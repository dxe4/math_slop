
# Constraints and Lagrange Multipliers

Many mechanical systems are subject to constraints: a bead slides on a wire, a rolling wheel maintains contact with the ground, or a rigid body preserves fixed distances between its particles. When constraints cannot be eliminated by a choice of coordinates, we need systematic methods. This chapter develops generalized coordinates and holonomic action multipliers, then distinguishes them from d'Alembert reaction multipliers for nonholonomic velocity constraints.

## Classification of constraints

A constraint on a mechanical system with coordinates $q = (q_{1}, \dots, q_{n})$ is a restriction on the allowed configurations or velocities.

**Definition 5.1 (Holonomic constraint).** A constraint is *holonomic* if it can be expressed as a relation among coordinates alone:

$$f(q_{1}, \dots, q_{n}, t) = 0.$$

**Definition 5.2 (Nonholonomic velocity constraint).** Here a velocity constraint is *nonholonomic* when it cannot be locally integrated into regular position equations $f(q,t)=0$. Rolling without slipping supplies an example below. Unilateral inequalities, such as confinement to one side of a surface, require a separate contact condition and reaction-sign convention; they are not treated as ordinary bilateral equalities in the multiplier formulas.

A regular holonomic constraint locally reduces the number of independent configuration coordinates by one. With n coordinates and m constraints, the dimension is n minus m when the matrix $A=D_qf$ has full row rank m. This rank condition is the implicit-function theorem hypothesis; counting written equations without it does not establish a dimension.

## The method of Lagrange multipliers

Consider a system with Lagrangian $L(q, \dot{q}, t)$ subject to $m$ holonomic constraints $f_{a}(q, t) = 0$ for $a = 1, \dots, m$. We can incorporate these constraints into the variational principle by introducing *Lagrange multipliers* $\lambda_{a}(t)$.

Define the augmented Lagrangian

$$\mathcal{L} = L(q, \dot{q}, t) - \sum_{a=1}^{m} \lambda_{a}(t) f_{a}(q, t).$$

Treating $q_{i}$ and $\lambda_{a}$ as independent variables, the Euler--Lagrange equations for $q_{i}$ become

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_{i}}\right) - \frac{\partial L}{\partial q_{i}} = -\sum_{a=1}^{m} \lambda_{a} \frac{\partial f_{a}}{\partial q_{i}}.$$

The terms on the right-hand side represent the *generalized forces of constraint*. The Euler--Lagrange equations for $\lambda_{a}$ simply recover the constraints $f_{a}(q, t) = 0$.

**Theorem 5.3 (Constrained Euler--Lagrange).** For a Lagrangian $L$ and independent holonomic constraints $f_{a}(q, t) = 0$, the stationary paths of the augmented action satisfy the constrained Euler--Lagrange equations above together with the constraints.

*Proof.* Vary q and lambda independently, with fixed configuration endpoints. Integrating the velocity terms by parts gives the q coefficient $L_q-\sum_a\lambda_a(f_a)_q-dL_v/dt$. The coefficient of an arbitrary multiplier variation is minus f. Both vanish by the fundamental lemma, giving the displayed equations and the constraints. Conversely, those equations make every such first variation zero. Smoothness and compact containment of the varied path justify the differentiations as in the preceding action chapter. This result concerns augmented stationary action; it does not by itself assert existence of a solution for arbitrary inconsistent initial data. $\square$

For the ideal-force interpretation, the same full-rank condition supplies the necessary linear algebra. If the Euler–Lagrange residual annihilates every tangent virtual displacement in $\ker A$, it lies in $(\ker A)^\perp=\operatorname{range}A^T$. It can therefore be written $-A^T\lambda$. Full row rank makes this multiplier unique. The physical assumption is that the constraint reactions do no tangent virtual work; geometry alone does not prescribe the dynamics of frictional contact.

## Worked example: simple pendulum via multipliers

Consider a pendulum of mass $m$ and length $\ell$ in the $(x, y)$ plane, with the pivot at the origin. The constraint is $f(x, y) = x^{2} + y^{2} - \ell^{2} = 0$.

The Lagrangian is

$$L = \frac{m}{2}(\dot{x}^{2} + \dot{y}^{2}) - mgy.$$

The augmented Lagrangian is

$$\mathcal{L} = \frac{m}{2}(\dot{x}^{2} + \dot{y}^{2}) - mgy - \lambda(x^{2} + y^{2} - \ell^{2}).$$

The Euler--Lagrange equations are:

$$m\ddot{x} = -2\lambda x, \qquad m\ddot{y} = -mg - 2\lambda y, \qquad x^{2} + y^{2} = \ell^{2}.$$

Differentiating the constraint twice: $x\dot{x} + y\dot{y} = 0$ and $x\ddot{x} + \dot{x}^{2} + y\ddot{y} + \dot{y}^{2} = 0$. Substituting $\ddot{x}$ and $\ddot{y}$ from the equations of motion:

$$x\left(-\frac{2\lambda x}{m}\right) + y\left(-g - \frac{2\lambda y}{m}\right) + \dot{x}^{2} + \dot{y}^{2} = 0.$$

Using $x^{2} + y^{2} = \ell^{2}$:

$$-\frac{2\lambda \ell^{2}}{m} - gy + \dot{x}^{2} + \dot{y}^{2} = 0.$$

Solving for $\lambda$:

$$\lambda = \frac{m}{2\ell^{2}}(\dot{x}^{2} + \dot{y}^{2} - gy).$$

The tension in the rod is $T = 2\lambda\ell = \frac{m}{\ell}(\dot{x}^{2} + \dot{y}^{2} - gy)$. At the bottom of the swing ($y = -\ell$, maximum speed), the tension exceeds the weight, as expected.

## Nonholonomic constraints: rolling without slipping

A classic nonholonomic system is a vertical disk of radius $R$ rolling without slipping on a horizontal plane. Let $(x, y)$ be the contact point, $\theta$ the rolling angle, and $\phi$ the heading angle. The no-slip conditions are

$$\dot{x} = R\dot{\theta}\cos\phi, \qquad \dot{y} = R\dot{\theta}\sin\phi.$$

These constraints are linear in velocities but not integrable to relations among coordinates alone. They are nonholonomic.

For ideal linear velocity constraints $\sum_i A_{ai}(q,t)\dot q_i=0$, the Lagrange--d'Alembert equations introduce reaction forces in the span of the one-forms $A_a$. One must not simply place the velocity constraint inside an augmented stationary-action principle: that produces the generally different *vakonomic* equations. The physical nonholonomic model follows from the allowed virtual displacements and d'Alembert's principle.

**Definition 5.4 (Virtual work).** The *virtual work* done by a force $F$ under a virtual displacement $\delta q$ is $\delta W = \sum_{i} F_{i}\delta q_{i}$. For ideal constraints, the constraint forces do no virtual work.

## D'Alembert's principle

D'Alembert's principle states that for a system with ideal constraints, the applied forces plus the inertial forces ($-m\ddot{\mathbf{r}}$) do no virtual work:

$$\sum_{i} \left(\mathbf{F}_{i}^{(\text{applied})} - m_{i}\ddot{\mathbf{r}}_{i}\right) \cdot \delta\mathbf{r}_{i} = 0.$$

This principle is equivalent to the Euler--Lagrange equations with multipliers for holonomic constraints and provides the foundation for extending Lagrangian mechanics to nonholonomic systems.

## Worked example: particle on a moving wire

A bead of mass $m$ slides without friction on a wire shaped as $y = ax^{2}$, where $a > 0$ is constant. The wire is rotated about the vertical axis with constant angular velocity $\omega$. Use $x$ as the generalized coordinate.

Use a signed meridian coordinate r along the rotating wire. Its absolute value is the cylindrical radius; its sign distinguishes the two arms through the axis. This gives the regular Cartesian parametrisation

$$\mathbf{r} = (r\cos\omega t, r\sin\omega t, ar^{2}).$$

The velocity components are

$$\dot{\mathbf{r}} = (\dot{r}\cos\omega t - r\omega\sin\omega t, \dot{r}\sin\omega t + r\omega\cos\omega t, 2ar\dot{r}).$$

The squared speed is

$$v^{2} = \dot{r}^{2} + r^{2}\omega^{2} + 4a^{2}r^{2}\dot{r}^{2} = \dot{r}^{2}(1 + 4a^{2}r^{2}) + r^{2}\omega^{2}.$$

The Lagrangian is

$$L = \frac{m}{2}\left[\dot{r}^{2}(1 + 4a^{2}r^{2}) + r^{2}\omega^{2}\right] - mgar^{2}.$$

The Euler--Lagrange equation for $r$ is

$$\frac{d}{dt}\left[m\dot{r}(1 + 4a^{2}r^{2})\right] - m\left(4a^{2}r\dot{r}^{2} + r\omega^{2} - 2agr\right) = 0.$$

Expanding:

$$m\ddot{r}(1 + 4a^{2}r^{2}) + m\dot{r}(8a^{2}r\dot{r}) - 4ma^{2}r\dot{r}^{2} - mr\omega^{2} + 2magr = 0.$$

Simplifying:

$$\ddot{r}(1 + 4a^{2}r^{2}) + 4a^{2}r\dot{r}^{2} - r\omega^{2} + 2agr = 0.$$

At equilibrium ($\dot r=\ddot r=0$), we require $r(2ag-\omega^2)=0$. If $\omega^2\ne2ag$, the only equilibrium is $r=0$. At the critical value $\omega^2=2ag$, the effective potential is flat in $r$, so every fixed $r$ allowed by the idealized wire is an equilibrium. The dimensions now provide a useful check: both $2ag$ and $\omega^2$ have units of inverse time squared.

**Common error:** The product-rule terms when differentiating $r\cos\omega t$ and $r\sin\omega t$ must both be retained. Their mixed products cancel when the two squared velocity components are added, leaving the rotational term $r^2\omega^2$. Inertial effects are already encoded in the reduced kinetic energy; adding the same effects again as extra generalized forces would count them twice.

## Small oscillations about equilibrium

For a system with one degree of freedom and Lagrangian $L = \frac{1}{2}m(q)\dot{q}^{2} - V(q)$, assume $m(q_0)>0$ and $V''(q_0)>0$. An equilibrium point $q_{0}$ satisfies $V'(q_{0}) = 0$. Expanding to second order about $q_{0}$:

$$L \approx \frac{1}{2}m(q_{0})\dot{\eta}^{2} - \frac{1}{2}V''(q_{0})\eta^{2},$$

where $\eta = q - q_{0}$. The small-oscillation frequency is

$$\omega = \sqrt{\frac{V''(q_{0})}{m(q_{0})}}.$$

**Worked example:** For the pendulum with $L = \frac{m\ell^{2}}{2}\dot{\theta}^{2} - mg\ell(1 - \cos\theta)$, the equilibrium $\theta = 0$ gives $V''(0) = mg\ell$ and $m(0) = m\ell^{2}$, so $\omega = \sqrt{g/\ell}$, as before.

The [normal-modes chapter](oscillations-normal-modes.md) proves the multidimensional mass-weighted version. A vanishing second derivative or a nonpositive effective mass does not meet the positive-frequency hypotheses above.

## Determining multipliers from consistent accelerations

For a natural system with constant positive-definite mass matrix M and applied force F, the equations are $M\ddot q=F-A^T\lambda$. A twice differentiable constraint path must satisfy not only f=0 but also
$$
A\dot q+f_t=0,\qquad A\ddot q+c=0,
$$
where $c_a=\dot q^T(f_a)_{qq}\dot q+2(f_a)_{qt}\dot q+(f_a)_{tt}$. Substituting the force equation gives
$$
(AM^{-1}A^T)\lambda=AM^{-1}F+c.
$$
The matrix on the left is positive definite when A has full row rank: for any nonzero w its quadratic form is $(A^Tw)^TM^{-1}(A^Tw)>0$. Thus the reaction multipliers are uniquely determined at a consistent position and velocity.

This formula exposes the role of initial data. The starting configuration must satisfy f=0, and its velocity must satisfy the differentiated constraint. Choosing arbitrary initial values and asking multipliers to repair both discrepancies changes the mathematical problem. A numerical projection or stabilisation may be useful, but it is an additional algorithm requiring its own error analysis. Near loss of constraint rank, the multiplier system can become badly conditioned even before exact singularity.

## Worked example: a moving guide can supply energy

Let a bead move under gravity while an ideal bilateral horizontal guide enforces $y=a(t)$, with a twice continuously differentiable prescribed a. The constraint is $f=y-a(t)$ and its reaction is $R=-\lambda e_y$. The vertical equation gives
$$
\lambda=-m(a''+g),\qquad R=m(a''+g)e_y.
$$
At fixed time, every allowed virtual displacement is horizontal, so the reaction does zero virtual work. But the actual vertical velocity is a', and the reaction power is $m(a''+g)a'$. The physical energy is
$$
E=\tfrac12m(\dot x^2+a'^2)+mga.
$$
Its derivative equals the same reaction power because the horizontal velocity is constant. Ideal does not mean unable to exchange energy with a moving boundary.

More generally, for an otherwise autonomous natural system, $\dot E=R\cdot\dot q=-\lambda^TA\dot q=\lambda^Tf_t$. Stationary holonomic constraints have $f_t=0$, so their ideal reactions do no actual work. Moving constraints need not have that property. A one-sided contact or a string additionally restricts the sign of its admissible reaction; the bilateral multiplier calculation does not impose that inequality automatically.

## Why the rolling conditions are not position equations

Suppose the rolling disk's two position coordinates were smooth functions $x=X(\theta,\phi)$ and $y=Y(\theta,\phi)$ on a local holonomic constraint surface. The velocity relations would require
$$
X_\theta=R\cos\phi,\quad X_\phi=0,\qquad
Y_\theta=R\sin\phi,\quad Y_\phi=0.
$$
Equality of mixed partials would then require both $-R\sin\phi=0$ and $R\cos\phi=0$, impossible for positive R. Thus there is no such local position graph. The two angles are independent allowed velocity coordinates, so a regular holonomic description would have provided exactly this kind of graph by the implicit-function theorem.

One can also perform a small heading turn, roll, reverse the heading turn and roll back. The angles can return to their initial values while the disk position has changed. This path dependence is consistent with the derivative contradiction. It is the reason the d'Alembert virtual-displacement model must be distinguished from imposing an integrated position constraint or a different stationary-action model.

## Virtual work and actual power are different for moving constraints

In the sign convention used above, the ideal reaction is R=−Aᵀλ, where
A is the configuration derivative of the constraint map f. An allowed
virtual displacement at fixed clock time satisfies Aδq=0, so R·δq=0.
The actual velocity along a time-dependent constraint instead satisfies
$A\dot q+f_t=0$. Consequently the actual reaction power is
$$R\cdot\dot q=\lambda^Tf_t.$$
It need not vanish. This is the general identity behind the moving-guide
example: an ideal reaction does no allowed tangent virtual work, while a
moving support can still supply or remove mechanical energy.

For a time-independent constraint, the explicit derivative is zero and the
two conclusions agree. For a moving constraint, replacing an actual displacement
over elapsed time by a virtual displacement at one fixed time drops the
support motion. The resulting false zero-power assertion can contradict an
otherwise correct multiplier calculation. The multiplier's sign depends on
the chosen constraint representation, but the physical reaction and power
are invariant when that representation and multiplier are transformed together.

If the unconstrained Lagrangian has energy E, its balance along ideal
constrained motion becomes dE/dt=−Lₜ+R·q̇. Both explicit forcing in the
Lagrangian and motion of the constraint can contribute. This identity
follows from the same product-rule derivation as ordinary energy conservation,
with the reaction retained in the Euler–Lagrange equation. It provides an
independent way to interpret a computed reaction without assuming every ideal
support is energetically passive.

## Practice exercises

### Exercise 1
<a id="constraints-and-lagrange-multipliers-ex-1"></a>

A particle of mass $m$ moves in the plane subject to the holonomic constraint $x^{2} + y^{2} = R^{2}$ (motion on a circle). Using the method of Lagrange multipliers, find the constraint force and show that it is directed radially inward with magnitude $mR\dot{\theta}^{2}$.

<details>
<summary>Hint 1</summary>

Use the augmented Lagrangian with the declared minus sign.

</details>
<details>
<summary>Hint 2</summary>

A fixed radius has inward acceleration equal to radius times angular speed squared.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The augmented Lagrangian is $\mathcal{L} = \frac{m}{2}(\dot{x}^{2} + \dot{y}^{2}) - \lambda(x^{2} + y^{2} - R^{2})$. The equations of motion are $m\ddot{x} = -2\lambda x$ and $m\ddot{y} = -2\lambda y$. In polar coordinates, $x = R\cos\theta$, $y = R\sin\theta$, and the radial equation gives $-mR\dot{\theta}^{2} = -2\lambda R$, so $\lambda = \frac{m}{2}\dot{\theta}^{2}$. The radial constraint force is $F_{r} = -2\lambda R = -mR\dot{\theta}^{2}$, directed inward.

</details>

### Exercise 2
<a id="constraints-and-lagrange-multipliers-ex-2"></a>

Show that, with this chapter's sign convention $\mathcal L=L-\sum_a\lambda_af_a$, the holonomic constraint force $Q_i=-\sum_a\lambda_a\partial f_a/\partial q_i$ does no virtual work.

<details>
<summary>Hint 1</summary>

Write the tangent condition for each constraint.

</details>
<details>
<summary>Hint 2</summary>

The reaction is a linear combination of those normal covectors.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Virtual displacements satisfy $\sum_{i}(\partial f_{a}/\partial q_{i})\delta q_{i} = 0$. The virtual work is $\delta W = \sum_{i}Q_{i}\delta q_{i} = -\sum_{a}\lambda_{a}\sum_{i}(\partial f_{a}/\partial q_{i})\delta q_{i} = 0$.

</details>

### Exercise 3
<a id="constraints-and-lagrange-multipliers-ex-3"></a>

A double pendulum consists of two masses $m_{1}$ and $m_{2}$ attached to rigid rods of lengths $\ell_{1}$ and $\ell_{2}$. Write the Lagrangian using angles $\theta_{1}$ and $\theta_{2}$ as generalized coordinates and derive the equations of motion.

<details>
<summary>Hint 1</summary>

Differentiate both mass positions, retaining the relative-angle cross term.

</details>
<details>
<summary>Hint 2</summary>

Apply Euler–Lagrange separately to the two independent angular coordinates.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The positions are $\mathbf{r}_{1} = (\ell_{1}\sin\theta_{1}, -\ell_{1}\cos\theta_{1})$ and $\mathbf{r}_{2} = \mathbf{r}_{1} + (\ell_{2}\sin\theta_{2}, -\ell_{2}\cos\theta_{2})$. The kinetic energy is

$$T = \frac{m_{1}}{2}\ell_{1}^{2}\dot{\theta}_{1}^{2} + \frac{m_{2}}{2}\left[\ell_{1}^{2}\dot{\theta}_{1}^{2} + \ell_{2}^{2}\dot{\theta}_{2}^{2} + 2\ell_{1}\ell_{2}\dot{\theta}_{1}\dot{\theta}_{2}\cos(\theta_{1} - \theta_{2})\right].$$

The potential energy is $V = -m_{1}g\ell_{1}\cos\theta_{1} - m_{2}g(\ell_{1}\cos\theta_{1} + \ell_{2}\cos\theta_{2})$. The Euler--Lagrange equations yield coupled nonlinear equations for $\theta_{1}$ and $\theta_{2}$.
Writing $\Delta=\theta_1-\theta_2$, those equations are

$$
(m_1+m_2)\ell_1^2\ddot\theta_1
+m_2\ell_1\ell_2\ddot\theta_2\cos\Delta
+m_2\ell_1\ell_2\dot\theta_2^2\sin\Delta
+(m_1+m_2)g\ell_1\sin\theta_1=0,
$$

$$
m_2\ell_2^2\ddot\theta_2
+m_2\ell_1\ell_2\ddot\theta_1\cos\Delta
-m_2\ell_1\ell_2\dot\theta_1^2\sin\Delta
+m_2g\ell_2\sin\theta_2=0.
$$

</details>

### Exercise 4
<a id="constraints-and-lagrange-multipliers-ex-4"></a>

Consider a bead of mass $m$ sliding on a frictionless parabolic wire $y = ax^{2}$, where $a>0$ has units of inverse length, in a uniform gravitational field $g$ (no rotation). Find the frequency of small oscillations about $x = 0$.

<details>
<summary>Hint 1</summary>

Substitute the wire geometry into kinetic and gravitational energy.

</details>
<details>
<summary>Hint 2</summary>

Keep only quadratic terms in position and velocity near the rest equilibrium.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Since $\dot y=2ax\dot x$, we have $v^2=\dot x^2(1+4a^2x^2)$ and

$$L=\frac m2\dot x^2(1+4a^2x^2)-mgax^2.$$

To quadratic order near $x=0$, $L\approx(m/2)\dot x^2-mgax^2$, so $\ddot x+2agx=0$ and $\omega=\sqrt{2ag}$. Because $ag$ has units $T^{-2}$, the result is dimensionally consistent.

</details>

### Exercise 5
<a id="constraints-and-lagrange-multipliers-ex-5"></a>

A particle moves under gravity on the inside of a smooth cone $z = r\cot\alpha$ (in cylindrical coordinates), where $\alpha$ is the half-angle. Find the Lagrangian and the condition for a horizontal circular orbit at height $h$.


Assume $0<\alpha<\pi/2$ and $h>0$, so the orbit avoids the cone apex.

<details>
<summary>Hint 1</summary>

Use cylindrical kinetic energy and eliminate the constrained height.

</details>
<details>
<summary>Hint 2</summary>

Set radial velocity and acceleration to zero in the radial equation for a circular orbit.

</details>
<details>
<summary>Full solution</summary>

**Solution.** With $z = r\cot\alpha$, the constraint gives $\dot{z} = \dot{r}\cot\alpha$. The squared speed is $v^{2} = \dot{r}^{2} + r^{2}\dot{\phi}^{2} + \dot{z}^{2} = \dot{r}^{2}(1 + \cot^{2}\alpha) + r^{2}\dot{\phi}^{2} = \dot{r}^{2}\csc^{2}\alpha + r^{2}\dot{\phi}^{2}$. The Lagrangian is $L = \frac{m}{2}(\dot{r}^{2}\csc^{2}\alpha + r^{2}\dot{\phi}^{2}) - mgr\cot\alpha$. For a horizontal circular orbit, $r = h\tan\alpha$ is constant, so $\dot{r} = 0$. The radial Euler--Lagrange equation gives $mr\dot{\phi}^{2} = mg\cot\alpha$, so $\dot{\phi}^{2} = g\cot\alpha / r = g/(h\tan\alpha) \cdot \cot\alpha = g/(h\tan^{2}\alpha)$. The angular velocity is $\dot{\phi} = \sqrt{g/(h\tan^{2}\alpha)}$.

</details>

### Exercise 6 — A bad defining function
<a id="constraints-and-lagrange-multipliers-ex-6"></a>

A particle is fixed at q=0 while a nonzero applied force F acts. Why does using the constraint f(q)=q squared fail in the multiplier equation, while f(q)=q succeeds?

<details>
<summary>Hint 1</summary>

Evaluate each constraint gradient at the allowed configuration.

</details>
<details>
<summary>Hint 2</summary>

The equation must balance F through the gradient multiplied by lambda.

</details>
<details>
<summary>Full solution</summary>

For f=q squared, its derivative is 2q=0 at the constrained point. The equation $m\ddot q=F-2\lambda q$ would demand 0=F, impossible for nonzero F. The defining function violates the full-rank hypothesis. Using f=q gives $0=F-\lambda$, so lambda=F supplies the required reaction. The same geometric set can have a regular or singular written representation.

</details>

### Exercise 7 — The multiplier matrix for a circle
<a id="constraints-and-lagrange-multipliers-ex-7"></a>

For a planar mass m with f=x squared plus y squared minus ell squared, compute the scalar matrix $AM^{-1}A^T$ on the circle.

<details>
<summary>Hint 1</summary>

The mass matrix is m times the identity.

</details>
<details>
<summary>Hint 2</summary>

The constraint gradient has components 2x and 2y.

</details>
<details>
<summary>Full solution</summary>

The matrix is $(4x^2+4y^2)/m=4\ell^2/m$, strictly positive for positive mass and radius. With gravity its right side is $2(\dot x^2+\dot y^2-gy)$, reproducing the chapter's pendulum multiplier. Degeneracy at ell=0 would invalidate this regular-circle description.

</details>

### Exercise 8 — A guide at constant vertical speed
<a id="constraints-and-lagrange-multipliers-ex-8"></a>

In the moving-guide example take a(t)=ut with constant u. Find reaction power and compare it with physical-energy change.

<details>
<summary>Hint 1</summary>

The guide acceleration is zero but its velocity need not be.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the gravitational potential as the guide moves.

</details>
<details>
<summary>Full solution</summary>

The reaction is $mg e_y$, with power mgu. The kinetic energy stays constant because both velocity components are constant, while gravitational potential mgut changes at rate mgu. The reaction therefore supplies energy when u is positive and extracts it when u is negative. Zero virtual work did not imply zero actual power.

</details>

### Exercise 9 — String versus rigid rod
<a id="constraints-and-lagrange-multipliers-ex-9"></a>

At the top of a pendulum circle, the derived signed tension is $T=m(v^2/\ell-g)$. What follows if the speed squared is less than g times ell for a string model and for a bilateral rigid rod model?

<details>
<summary>Hint 1</summary>

A string can pull but cannot push.

</details>
<details>
<summary>Hint 2</summary>

The multiplier equation alone has not imposed the unilateral force restriction.

</details>
<details>
<summary>Full solution</summary>

The formula gives a negative signed tension. A rigid rod may supply the corresponding compression and retain the circle constraint. A string cannot supply that outward push, so the taut-string equality model ceases to apply: the string slackens and the subsequent motion needs the appropriate unconstrained/contact description. Accepting the negative value as physical string tension would ignore the model's inequality condition.

</details>

### Exercise 10 — A closed angle loop
<a id="constraints-and-lagrange-multipliers-ex-10"></a>

Start a rolling disk at heading zero. Turn its heading to delta, roll through angle epsilon, turn back to heading zero, then roll through minus epsilon. Find its net planar displacement.

<details>
<summary>Hint 1</summary>

Heading changes alone have zero rolling rate in the stated constraints.

</details>
<details>
<summary>Hint 2</summary>

Integrate each straight roll at its fixed heading.

</details>
<details>
<summary>Full solution</summary>

The first roll contributes $R\epsilon(\cos\delta,\sin\delta)$ and the reverse roll contributes $(-R\epsilon,0)$. The net is $R\epsilon(\cos\delta-1,\sin\delta)$, generally nonzero, although both angles return to their starting values. This path dependence agrees with the proof that position cannot be a local function of those two angles satisfying the no-slip equations.

</details>

<a id="connections"></a>
## Summary

Full-rank holonomic constraints supply tangent virtual displacements and unique ideal reaction multipliers. Their acceleration equations require consistent initial data, and moving constraints can exchange mechanical energy despite zero virtual work. Nonintegrable rolling relations require the d'Alembert model rather than a substituted holonomic action principle. The [particle Noether chapter](noether-particles.md) next uses constraint tangency when deriving conserved charges, while the Hamiltonian chapters require the appropriate regular coordinate and momentum domains.

Taylor’s *Classical Mechanics* and Goldstein, Poole and Safko’s *Classical Mechanics* are the comparison references. The additional multiplier, moving-boundary and rolling arguments above are original Euler exposition.
