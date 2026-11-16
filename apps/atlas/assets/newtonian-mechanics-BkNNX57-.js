var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: newtonian-mechanics
title: "Newtonian Mechanics: Work, Energy and Momentum"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Newtonian Mechanics: Work, Energy and Momentum

A mechanical model begins with a system boundary, an inertial frame, masses and a force law. Conservation laws are conclusions obtained from those choices. They are not additional equations to impose whenever they simplify a calculation. This chapter derives the work–energy, momentum and angular-momentum identities and explains exactly when they become conservation statements.

Required preparation is vectors, differentiation, integration and the [ODE first course](../ode-first-course.md). We use point particles of positive constant mass. Variable-mass bodies, rigid-body rotation and relativistic momentum require different formulations. The next chapter studies central forces; later chapters reorganise these same balances through action and symmetry.

## State, trajectory and inertial frame

**Definition 1.1 (Newtonian particle model).** A particle of constant mass $m>0$ has position $q(t)\\in\\mathbb R^3$, velocity $v=\\dot q$ and momentum $p=mv$. In an inertial frame its equation is
$$
\\dot q=v,\\qquad \\dot p=F(q,v,t).
$$
The force may include several physical contributions. Its arguments, units and domain are part of the model. A prescribed drag law may depend on velocity relative to a medium, rather than velocity relative to the chosen coordinates alone.

For a continuous force locally Lipschitz in $(q,v)$, the first-order system supplies local existence and uniqueness. Singular interactions need an explicit state domain. An inverse-square force is smooth away from collision, but the local theorem there does not prove that a trajectory avoids collision forever.

A Galilean change between inertial frames has $q'=Rq-ut-a$ and $t'=t$, where $R$ is a constant orthogonal rotation and $u,a$ are constant vectors. Then $\\ddot q'=R\\ddot q$. The same physical force must be expressed in the new coordinates as $F'=RF$. This covariance is a statement about changing the full model. Substituting the new velocity into an unchanged medium-dependent drag formula can describe a different physical problem.

An accelerating frame has an additional acceleration term. It is therefore unsafe to apply $m\\ddot q=F$ in moving coordinates without deriving the corresponding inertial forces. We use fixed inertial axes throughout the following proofs.

## Work measures energy transfer along a path

**Definition 1.2 (Work and kinetic energy).** Along a continuously differentiable path, force work over $[t_0,t_1]$ is
$$
W=\\int_{t_0}^{t_1}F(q(t),v(t),t)\\cdot v(t)\\,dt.
$$
Kinetic energy is $T=\\tfrac12m\\|v\\|^2$. Instantaneous power is $F\\cdot v$. Force has units of mass times length divided by time squared; work and energy have units of mass times length squared divided by time squared.

Work is a line integral along the actual path. A force perpendicular to velocity does no instantaneous work, even when it changes the direction of motion. A vanishing final displacement does not imply zero work: a nonconservative force can dissipate energy around a closed circuit.

**Theorem 1.3 (Work–energy identity).** A twice continuously differentiable solution of $m\\ddot q=F$ satisfies
$$
T(t_1)-T(t_0)=\\int_{t_0}^{t_1}F\\cdot\\dot q\\,dt.
$$

*Proof.* Differentiate the Euclidean squared norm:
$\\dot T=m\\dot q\\cdot\\ddot q=F\\cdot\\dot q$.
Integration gives the identity. Constancy of mass is used when differentiating the energy. $\\square$

The identity is valid for velocity-dependent and time-dependent forces. It becomes conservation of kinetic energy only when the power vanishes. A constant speed can coexist with nonzero acceleration, as uniform circular motion demonstrates.

**Definition 1.4 (Potential force).** A force is conservative on its declared configuration domain if $F(q)=-\\nabla V(q)$ for a single-valued differentiable potential $V$. The potential is defined up to an additive constant on each connected component.

The chain rule gives $F\\cdot\\dot q=-dV(q(t))/dt$. Combining with Theorem 1.3 proves conservation of mechanical energy $E=T+V$ for a time-independent potential. If $V=V(q,t)$ and an additional force $G$ acts, the exact balance instead is
$$
\\frac{d}{dt}(T+V)=\\frac{\\partial V}{\\partial t}+G\\cdot v.
$$
A time-varying potential can exchange energy with the particle even when the position-force term is a gradient at every fixed time. Calling the model conservative without naming time dependence would hide that transfer.

## Worked example 1: falling with an explicit energy reference

Take vertical coordinate $z$ increasing upward, constant gravity $F=-mg\\,e_z$, and potential $V=mgz$. Release a particle from height $h>0$ with zero speed. The equation gives $z(t)=h-gt^2/2$ and $v_z=-gt$ until impact. The first contact with the ground occurs at $t=\\sqrt{2h/g}$, and the speed there is $\\sqrt{2gh}$.

The energy calculation reaches the same result from
$$
\\frac12mv_z^2+mgz=mgh.
$$
At $z=0$ the potential is zero by convention, so all of the initial mechanical energy is kinetic. Replacing $V$ by $mgz+C$ shifts both sides by $C$ without changing the predicted speed. The differential equation ceases to describe free fall at contact if the ground supplies an additional force or impulse; extending the parabola through a rigid ground is a change of model.

With a constant drag force of magnitude $d$ opposing the falling velocity over this segment, its work is $-dh$. The kinetic energy at the ground is then $(mg-d)h$, provided $0<d<mg$ and the stated constant opposing force is actually the model. A more realistic speed-dependent drag requires integrating its power along the trajectory. The conservative energy equality cannot simply be reused unchanged.

## A curl calculation has a domain condition

For a $C^2$ potential, equality of mixed partial derivatives implies $\\nabla\\times F=0$. The converse requires a condition on the domain or a separate global argument. On the punctured plane consider
$$
F(x,y)=\\left(-\\frac{y}{x^2+y^2},\\frac{x}{x^2+y^2}\\right).
$$
Its planar curl is zero away from the origin. Along the unit circle $q(t)=(\\cos t,\\sin t)$, however, $F(q(t))=\\dot q(t)$, and its work over one turn is $\\int_0^{2\\pi}1\\,dt=2\\pi$. A single-valued potential would make every closed-path work zero by the chain rule. Therefore this field is not globally conservative on that domain.

The missing origin is mathematically relevant. A local angle function can describe a potential on a suitable cut region, but not as one single-valued function around the complete puncture. Energy arguments must specify where their potential exists, rather than relying only on a local derivative identity.

## Momentum and the system boundary

**Theorem 1.5 (Total momentum balance).** For $N$ particles of masses $m_i>0$, write
$$
\\dot p_i=F_i^{ext}+\\sum_{j\\ne i}F_{ij},
$$
where $F_{ij}$ is the force on particle $i$ due to $j$. If $F_{ij}=-F_{ji}$, then total momentum $P=\\sum_i p_i$ satisfies $\\dot P=\\sum_iF_i^{ext}$.

*Proof.* Sum the equations. Every unordered pair contributes $F_{ij}+F_{ji}=0$, so all internal terms cancel. $\\square$

Define total mass $M=\\sum_im_i$ and centre of mass $Q=M^{-1}\\sum_i m_iq_i$. Constancy of the masses gives $M\\dot Q=P$ and hence $M\\ddot Q=\\sum_iF_i^{ext}$. Internal motion can be complicated while the centre of mass moves uniformly when the external resultant vanishes.

The hypothesis depends on the selected system. A rocket exchanging exhaust with its surroundings is not a fixed collection of constant-mass particles when only its remaining body is counted. Momentum carried across the system boundary must be included. Likewise a force transmitted by a field need not obey an instantaneous particle-only action–reaction model unless the field momentum is accounted for appropriately.

The theorem does not say internal forces do no work. Equal and opposite forces generally act at points with different velocities, so their powers need not cancel. Springs convert internal potential energy into kinetic energy while leaving total momentum unchanged.

## Angular momentum requires a stronger internal condition

**Definition 1.6 (Angular momentum about a fixed origin).** For one particle, $L=q\\times p$. Torque is $\\tau=q\\times F$.

Differentiation gives
$$
\\dot L=\\dot q\\times m\\dot q+q\\times\\dot p=q\\times F.
$$
For many particles, the torque of an internal pair is
$$
q_i\\times F_{ij}+q_j\\times F_{ji}
=(q_i-q_j)\\times F_{ij}.
$$
Thus equal and opposite forces cancel internal torque when they are also directed along the separation vector. This is the central pair-force condition. Weak action–reaction alone cancels total force but need not cancel this moment.

Under central internal forces, total angular momentum changes only through the total external torque. If that torque vanishes, angular momentum is conserved. For a central one-particle force, $F(q)$ is parallel to $q$ and $L$ is constant. A nonzero $L$ confines the position to the plane perpendicular to it because $q\\cdot L=0$. The next chapter uses that geometric reduction to derive orbit equations and Kepler's laws.

Changing the fixed origin by a constant vector $a$ changes angular momentum to $L'=L-a\\times P$. Consequently the numerical value depends on the origin, while conservation is retained under a fixed shift when total momentum is also conserved. A moving origin requires differentiating its position and introduces additional terms.

## Worked example 2: a spring and turning points

For motion on a line with $F=-kx$, $k>0$, the potential is $V=kx^2/2$. Start at $x(0)=a$ with velocity $u$. The conserved energy is $E=mu^2/2+ka^2/2$. At any turning point, velocity is zero, so its coordinate satisfies
$$
x_{turn}^2=a^2+\\frac{m}{k}u^2.
$$
The explicit oscillator solution is
$x(t)=a\\cos(\\omega t)+(u/\\omega)\\sin(\\omega t)$ with $\\omega=\\sqrt{k/m}$.
Its amplitude agrees with the energy result, and its period is $2\\pi/\\omega$.

Energy determines the allowed position range and the magnitude of velocity at a position, but not its sign or starting phase. The initial condition supplies that information. Adding linear damping $-c\\dot x$ gives $\\dot E=-c\\dot x^2$, so the original amplitude and period formulas no longer follow from conservation. The distinction prepares the later study of normal modes and dissipative stability.

## Worked example 3: a collision with the same momentum and different energy

Two particles on a line have masses $m_1,m_2$ and initial velocities $u_1,u_2$. If external impulse is negligible and they stick together, momentum balance gives the common final velocity
$$
v=\\frac{m_1u_1+m_2u_2}{m_1+m_2}.
$$
Let $\\mu=m_1m_2/(m_1+m_2)$. Expanding the squares shows
$$
\\frac12m_1u_1^2+\\frac12m_2u_2^2
-\\frac12(m_1+m_2)v^2
=\\frac12\\mu(u_1-u_2)^2.
$$
The right side is nonnegative and vanishes only when the initial velocities agree. The missing translational kinetic energy can become deformation, vibration or heat. Momentum conservation alone does not make this collision elastic.

For $m_1=m_2=m$, $u_1=u$ and $u_2=0$, the common velocity is $u/2$. The initial kinetic energy is $mu^2/2$, while the final translational energy is $mu^2/4$. The difference is another $mu^2/4$. No contradiction arises: the model did not assert conservation of this part of the energy during sticking.

## Separating bulk motion from internal kinetic energy

For a closed collection with constant positive masses, define total mass M,
centre of mass R and relative positions rᵢ=qᵢ−R. Their defining identity
is $\\sum_i m_i r_i=0$, and differentiating it gives zero weighted relative
velocity. Expanding each particle velocity into the centre velocity plus
its relative velocity therefore yields the exact decomposition
$$\\sum_i\\frac{m_i}{2}\\|\\dot q_i\\|^2
=\\frac M2\\|\\dot R\\|^2+\\sum_i\\frac{m_i}{2}\\|\\dot r_i\\|^2.$$
The cross term vanishes because it is the dot product of the centre velocity
with that zero weighted relative-velocity sum. This identity is kinematic:
it does not assume that internal forces are conservative or that the
relative kinetic energy stays constant.

Under equal and opposite internal forces, summing Newton's equations gives
M times the centre acceleration equal to the total external force. Dotting
with the centre velocity gives the power transferred into bulk kinetic
energy. The full work–energy theorem instead pairs each external force
with the velocity of the particle on which it acts and also includes
internal work. The difference can change relative motion. Thus two external
force arrangements with the same resultant can produce the same centre
acceleration while exciting different internal vibrations or rotations.

For a concrete case, take two equal particles initially at rest, joined
by a spring, and apply opposite forces outward along their separation.
The total external force is zero, so the centre remains at rest. The
forces nevertheless do positive work as the particles separate, increasing
spring potential energy and possibly relative kinetic energy. A vanishing
resultant is therefore insufficient to conclude that no energy entered the
system. To make an energy claim, the points of force application and their
motions must be included.

This decomposition also explains the sticking collision above. With negligible
external impulse the centre velocity is unchanged. Sticking removes relative
translational motion, so its kinetic energy is the part available for
conversion into other forms. It does not erase the centre kinetic energy
in an arbitrary inertial frame. Changing that frame shifts the bulk term
while leaving relative velocities and the computed collision loss unchanged.
The same separation will underlie the reduced-mass central-force problem,
where centre motion and relative orbital motion can be analysed independently.

## An impulse has a precise kinetic-energy jump

For a constant-mass particle, an impulse J changes momentum
by J and hence velocity by J/m. Expanding the two
kinetic energies gives the jump equal to J dotted with
the average of the pre-impact and post-impact velocities.
Using only the incoming velocity would omit the quadratic
term ‖J‖²/(2m). The identity follows from the momentum
change and remains meaningful when a short interaction
is idealized as instantaneous.

It does not by itself determine the impulse. A contact
or collision model must supply that through restitution,
constraints or another physical law. Nor does the particle's
kinetic change identify all heat or deformation energy
inside an extended body. The sticking example specified
momentum balance and a common final velocity, which
made its kinetic loss computable. These separate roles
explain why an impulse equation and an energy equation
can both be correct without either replacing the missing
interaction law. Retain the system boundary when applying
the jump to a collection of particles.

## Exercises

### Exercise 1 — Power of a perpendicular force
<a id="newtonian-mechanics-ex-1"></a>

A particle has nonzero force always perpendicular to its velocity. What happens to kinetic energy, and must its trajectory be a line?

<details>
<summary>Hint 1</summary>

Use the work–energy derivative rather than the acceleration magnitude.

</details>
<details>
<summary>Hint 2</summary>

Constant speed permits a changing velocity direction.

</details>
<details>
<summary>Full solution</summary>

The power is $F\\cdot v=0$, so kinetic energy and speed are constant. The direction can change because acceleration need not vanish. Uniform circular motion under an inward force is an example, so the trajectory need not be a line.

</details>

### Exercise 2 — A nonquadratic potential
<a id="newtonian-mechanics-ex-2"></a>

For $F(x)=-ax^3$ with $a>0$, find a potential and the turning amplitude from $x(0)=0$, $\\dot x(0)=u$.

<details>
<summary>Hint 1</summary>

Integrate minus the force with respect to position.

</details>
<details>
<summary>Hint 2</summary>

At a turning point the kinetic term vanishes.

</details>
<details>
<summary>Full solution</summary>

Take $V=ax^4/4$. The initial energy is $mu^2/2$, so a turning point obeys $ax^4/4=mu^2/2$. Its magnitude is $(2mu^2/a)^{1/4}$. For $u=0$ the particle remains at the equilibrium zero.

</details>

### Exercise 3 — A time-dependent spring
<a id="newtonian-mechanics-ex-3"></a>

For $V(x,t)=k(t)x^2/2$, derive the mechanical energy balance with no other force.

<details>
<summary>Hint 1</summary>

Include the partial derivative with respect to time.

</details>
<details>
<summary>Hint 2</summary>

The position-force contribution cancels against kinetic-energy change.

</details>
<details>
<summary>Full solution</summary>

The force is $-k(t)x$, while $\\partial_tV=k'(t)x^2/2$. Therefore $d(T+V)/dt=k'(t)x^2/2$. Energy is generally not conserved, even though the force is a gradient at each fixed time.

</details>

### Exercise 4 — Internal spring work
<a id="newtonian-mechanics-ex-4"></a>

For a pair with $F_{12}=-F_{21}$, express total internal power in terms of their relative velocity.

<details>
<summary>Hint 1</summary>

Write the sum of the two force–velocity products.

</details>
<details>
<summary>Hint 2</summary>

Cancel the force vectors without assuming equal velocities.

</details>
<details>
<summary>Full solution</summary>

The power is $F_{12}\\cdot v_1+F_{21}\\cdot v_2=F_{12}\\cdot(v_1-v_2)$. It need not vanish. For a spring this power equals the negative derivative of its stored potential, so internal work can change kinetic energy without changing total momentum.

</details>

### Exercise 5 — An angular-momentum counterexample
<a id="newtonian-mechanics-ex-5"></a>

Take $q_1=(1,0,0)$, $q_2=0$, $F_{12}=(0,1,0)$ and $F_{21}=-F_{12}$. Compute total internal force and torque.

<details>
<summary>Hint 1</summary>

Force cancellation uses only the sum.

</details>
<details>
<summary>Hint 2</summary>

Use the separation cross the pair force for the torque.

</details>
<details>
<summary>Full solution</summary>

The internal force is zero. The torque is $(1,0,0)\\times(0,1,0)=(0,0,1)$, nonzero. Equal and opposite forces are therefore insufficient for angular-momentum conservation unless their line of action or additional internal angular momentum is included.

</details>

### Exercise 6 — Changing the origin
<a id="newtonian-mechanics-ex-6"></a>

Derive the relation between total angular momenta about origins separated by a constant vector $a$.

<details>
<summary>Hint 1</summary>

Replace each position by $q_i-a$.

</details>
<details>
<summary>Hint 2</summary>

Collect the common shift using total momentum.

</details>
<details>
<summary>Full solution</summary>

Summing $(q_i-a)\\times p_i$ gives $L-a\\times\\sum_ip_i=L-a\\times P$. If both L and P are constant, the shifted angular momentum is also constant. Its value nevertheless generally differs.

</details>

### Exercise 7 — A centre-of-mass acceleration
<a id="newtonian-mechanics-ex-7"></a>

A two-particle system has masses 2 and 3 in consistent units and external resultant $(10,0,0)$. Find its centre-of-mass acceleration under action–reaction.

<details>
<summary>Hint 1</summary>

The total mass controls the centre-of-mass equation.

</details>
<details>
<summary>Hint 2</summary>

Internal forces cancel from that equation.

</details>
<details>
<summary>Full solution</summary>

The total mass is five, so $\\ddot Q=(10,0,0)/5=(2,0,0)$ in the corresponding acceleration units. Nothing in this result determines the relative motion, which still depends on internal forces and initial conditions.

</details>

### Exercise 8 — Work around a puncture
<a id="newtonian-mechanics-ex-8"></a>

Evaluate the work of the curl-free punctured-plane field around a circle of radius $R>0$, traversed once counterclockwise.

<details>
<summary>Hint 1</summary>

Use $q(t)=R(\\cos t,\\sin t)$.

</details>
<details>
<summary>Hint 2</summary>

The radius cancels between the field and path derivative.

</details>
<details>
<summary>Full solution</summary>

The field along the circle is $R^{-1}(-\\sin t,\\cos t)$ and the path derivative is $R(-\\sin t,\\cos t)$. Their product is one, so the work is $2\\pi$. It is nonzero at every radius, ruling out a single-valued global potential on the punctured domain.

</details>

### Exercise 9 — Sticking masses
<a id="newtonian-mechanics-ex-9"></a>

Masses $m$ and $2m$ have velocities $3u$ and zero and stick. Find final velocity and lost translational kinetic energy.

<details>
<summary>Hint 1</summary>

Apply total momentum balance first.

</details>
<details>
<summary>Hint 2</summary>

Compare initial and final sums of squared speeds with their masses.

</details>
<details>
<summary>Full solution</summary>

The final velocity is $m(3u)/(3m)=u$. Initial kinetic energy is $9mu^2/2$ and final translational energy is $3mu^2/2$. The loss is $3mu^2$, agreeing with the reduced-mass formula using $\\mu=2m/3$ and relative velocity $3u$.

</details>

### Exercise 10 — A moving system boundary
<a id="newtonian-mechanics-ex-10"></a>

Why can one not apply $M\\dot v=F_{ext}$ to a body losing mass simply by replacing constant M with M(t)?

<details>
<summary>Hint 1</summary>

The total-momentum proof assumed a fixed collection of constant-mass particles.

</details>
<details>
<summary>Hint 2</summary>

Track momentum carried by material crossing the selected boundary.

</details>
<details>
<summary>Full solution</summary>

The changing body is an open subsystem. Departing material carries momentum at its own velocity, and the balance includes a flux term. Differentiating $M(t)v(t)$ alone does not identify that flux. A correct equation follows from a specified larger closed system or an explicit open-system momentum balance with the crossing velocities stated.

</details>

## Summary

Newton's law gives exact balances for work, momentum and angular momentum under explicit frame and system assumptions. Time-independent potential forces conserve mechanical energy, pairwise action–reaction cancels internal resultant, and central pair forces additionally cancel internal torque. Energy can change while momentum is conserved, and local curl information need not provide a global potential. Central forces next turn the angular-momentum balance into a planar orbit equation and Kepler's laws.

John R. Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* are the book-scale comparison references. The derivations, examples and exercises here are original Euler exposition.
`;export{e as default};