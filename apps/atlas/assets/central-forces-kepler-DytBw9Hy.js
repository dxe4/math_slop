var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: central-forces-kepler
title: "Central Forces and the Kepler Problem"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Central Forces and the Kepler Problem

A force directed along the separation of two particles preserves their relative angular momentum. That single fact makes the motion planar and fixes the rate at which the radius sweeps area. The inverse-square law supplies the additional structure that turns planar trajectories into conic sections. Kepler's three laws therefore have distinct mathematical origins; centrality alone does not prove all three.

Read [Newtonian work, energy and momentum](newtonian-mechanics.md), trigonometric coordinates and second-order differential equations. We assume positive constant masses, an inertial frame and an attractive Newtonian interaction. Collisions are excluded from the configuration domain unless explicitly analysed as an endpoint of a solution. No finite-size impact or relativistic correction is included.

## Reduction of an isolated two-body problem

Let positions be $q_1,q_2$, masses $m_1,m_2>0$, total mass $M=m_1+m_2$ and reduced mass $\\mu=m_1m_2/M$. Define centre of mass $Q=(m_1q_1+m_2q_2)/M$ and relative position $r=q_1-q_2$. Suppose the internal potential is $V(\\|r\\|)$ and no external forces act.

The pair forces are equal and opposite. The momentum theorem gives $M\\ddot Q=0$. Subtracting the two particle acceleration equations gives
$$
\\mu\\ddot r=-V'(\\|r\\|)\\frac r{\\|r\\|}.
$$
For Newtonian gravitation $V(s)=-k/s$ with $k=Gm_1m_2>0$, this becomes
$$
\\mu\\ddot r=-\\frac{k r}{\\|r\\|^3},\\qquad r\\ne0.
$$
The relative problem is a particle of mass $\\mu$ in a fixed central field. After solving it, recover $q_1=Q+(m_2/M)r$ and $q_2=Q-(m_1/M)r$. The relative ellipse is not a statement that one finite-mass body is literally fixed at the origin of the original inertial frame.

The kinetic-energy identity is
$$
\\frac12m_1\\|\\dot q_1\\|^2+\\frac12m_2\\|\\dot q_2\\|^2
=\\frac12M\\|\\dot Q\\|^2+\\frac12\\mu\\|\\dot r\\|^2.
$$
Substitution of the recovery formulas proves it: the cross terms cancel and the relative coefficients sum to $\\mu$. Thus centre-of-mass and relative energies separate as well as their equations.

## Planarity and equal areas

Write $s=\\|r\\|$ when distinguishing scalar radius from the vector. The relative angular momentum is $L=r\\times\\mu\\dot r$.

**Theorem 2.1 (Central-force area law).** For any differentiable central potential, $L$ is constant. If $L\\ne0$, the relative motion lies in the fixed plane perpendicular to $L$. In oriented polar coordinates in that plane,
$$
\\ell=\\|L\\|=\\mu s^2\\dot\\theta,\\qquad
\\frac{dA}{dt}=\\frac12s^2\\dot\\theta=\\frac\\ell{2\\mu}.
$$
Consequently equal time intervals sweep equal oriented areas.

*Proof.* Differentiating $L$ gives $\\dot L=r\\times\\mu\\ddot r=0$ because force is parallel to $r$. Since $r\\cdot L=0$, every position lies in the stated plane. The cross product in polar coordinates has magnitude $\\mu s^2\\dot\\theta$ after choosing its orientation consistently with $L$. A sector swept in angle $d\\theta$ has area $s^2d\\theta/2$, proving the rate. $\\square$

When $L=0$, the motion is radial on its interval away from collision, and no increasing polar angle is available for the orbit reduction below. The area rate is still zero. A collision cannot be removed from the analysis by dividing by angular momentum and then forgetting the excluded case.

## Energy creates an effective radial problem

The relative energy in a time-independent central potential is
$$
E=\\frac12\\mu\\dot s^2+V_{eff}(s),\\qquad
V_{eff}(s)=V(s)+\\frac{\\ell^2}{2\\mu s^2}.
$$
The second term is the angular kinetic energy expressed using its conserved momentum. It is not an additional physical force acting in three-dimensional space. Differentiating the polar equations gives the radial equation $\\mu\\ddot s=-V_{eff}'(s)$.

For $V=-k/s$ and $\\ell>0$, the effective potential tends to positive infinity at zero, has its unique minimum at $s_c=\\ell^2/(\\mu k)$, and tends to zero from below at infinity. Its minimum is $-\\mu k^2/(2\\ell^2)$. Thus admissible energy cannot be below that minimum. Negative energy confines the radius between positive turning values; nonnegative energy permits unbounded radial motion.

The compact radial interval at negative energy also prevents collision and escape in finite time. Velocities are bounded by the energy relation there. The smooth vector field on the noncollision domain therefore has global continuation in both time directions for those initial conditions.

## The inverse-square orbit equation

Assume $\\ell>0$ and use increasing angle as an independent variable. Put $u(\\theta)=1/s$. From $\\dot\\theta=\\ell u^2/\\mu$,
$$
\\dot s=-\\frac\\ell\\mu\\frac{du}{d\\theta},\\qquad
\\ddot s=-\\frac{\\ell^2}{\\mu^2}u^2\\frac{d^2u}{d\\theta^2}.
$$
The radial acceleration is $\\ddot s-s\\dot\\theta^2$. Substitution into the inverse-square equation gives
$$
\\frac{d^2u}{d\\theta^2}+u=\\frac{\\mu k}{\\ell^2}.
$$
Its real general solution can be written
$$
s(\\theta)=\\frac p{1+e\\cos(\\theta-\\theta_0)},\\qquad
p=\\frac{\\ell^2}{\\mu k},\\qquad e\\ge0,
$$
on the angular interval where the denominator is positive. A phase shift absorbs the two homogeneous sine and cosine constants into an eccentricity and periapsis direction. For $e=0$ the direction is arbitrary because the orbit is a circle.

The positivity restriction is essential. A negative value of the denominator is not a negative physical radius continuing the same orbit. For an unbound conic it describes an algebraic extension outside the permitted polar representation.

Substituting $u$ and its derivative into energy yields
$$
E=\\frac{\\ell^2}{2\\mu}\\left((u')^2+u^2\\right)-ku
=\\frac{\\mu k^2}{2\\ell^2}(e^2-1).
$$
Hence $e^2=1+2E\\ell^2/(\\mu k^2)$. This identity connects a geometric property of the orbit to its dynamical initial data.

## Kepler's first and third laws, with proofs

**Theorem 2.2 (Bounded inverse-square orbits are ellipses).** If $k>0$, $\\ell>0$ and $E<0$, the relative orbit is an ellipse with a force centre at one focus, eccentricity $0\\le e<1$ and semimajor axis $a=-k/(2E)$.

*Proof.* Rotate coordinates so $\\theta_0=0$. The orbit equation says $s+ex=p$. Squaring $s=p-ex$ gives
$(1-e^2)x^2+y^2+2epx-p^2=0$.
Complete the square to obtain
$$
\\frac{(x+ae)^2}{a^2}+\\frac{y^2}{a^2(1-e^2)}=1,
\\qquad a=\\frac p{1-e^2}.
$$
Its semiminor axis is $b=a\\sqrt{1-e^2}$, and its focal distance is $\\sqrt{a^2-b^2}=ae$. The origin is therefore one focus. Since $e<1$, the original expression $p-ex$ is positive on this ellipse, so squaring has not added an inadmissible branch. Finally the energy identity gives $a=-k/(2E)$. $\\square$

The area law was already proved for every central potential. The conic conclusion uses the inverse-square force specifically. A harmonic central force also gives closed ellipses, but its force centre is at their centre rather than generically at a focus, and its period law is different.

**Theorem 2.3 (Period–size law).** A bounded noncollision inverse-square orbit has period satisfying
$$
T^2=\\frac{4\\pi^2\\mu}{k}a^3.
$$
For gravitational two-body motion this coefficient is $4\\pi^2/[G(m_1+m_2)]$.

*Proof.* The angular rate never vanishes and the orbit is a compact ellipse. One full traversal sweeps its area $\\pi ab$. The constant area rate gives $T=2\\pi\\mu ab/\\ell$. Since $b^2=a^2(1-e^2)$ and $\\ell^2=\\mu kp=\\mu ka(1-e^2)$, squaring the period expression and cancelling gives the result. Substituting $k=Gm_1m_2$ and $\\mu=m_1m_2/M$ gives the gravitational coefficient. $\\square$

For bodies orbiting a dominant common mass, neglecting each smaller mass gives the familiar approximately common proportionality. The exact two-body coefficient retains both masses. This is a mathematical statement within the isolated Newtonian model, not an assertion that perturbations from every other body vanish.

## Worked example 1: circular motion and its radial stability

For a circular orbit of radius $s_0>0$, the radial acceleration has magnitude $v^2/s_0$. Force balance gives $v^2=k/(\\mu s_0)$, $\\ell^2=\\mu ks_0$ and $E=-k/(2s_0)$. The period $2\\pi s_0/v$ agrees with Theorem 2.3 at $a=s_0$.

At fixed angular momentum, the second derivative of the effective potential at that radius is
$$
V_{eff}''(s_0)=-\\frac{2k}{s_0^3}+\\frac{3\\ell^2}{\\mu s_0^4}
=\\frac{k}{s_0^3}>0.
$$
Thus the radial equilibrium is a strict energy minimum. A small radial perturbation has linear frequency $\\sqrt{k/(\\mu s_0^3)}$, the circular angular frequency. The strict minimum gives radial stability in the reduced system; it does not make a particular clocked point on a circular orbit an attracting equilibrium. The conservative dynamics does not dissipate nearby orbit energy.

## Worked example 2: an eccentric ellipse

Choose consistent dimensionless units with $\\mu=k=1$, $\\ell=\\sqrt3/2$ and $e=1/2$. Then $p=3/4$, $a=1$, $b=\\sqrt3/2$ and $E=-1/2$. The smallest and largest radii are
$$
s_p=\\frac p{1+e}=\\frac12,\\qquad
s_a=\\frac p{1-e}=\\frac32.
$$
At either radial turning point velocity is tangential, so its speed is $\\ell/(\\mu s)$. The periapsis speed is $\\sqrt3$ and the apoapsis speed is $1/\\sqrt3$. Their ratio is three, inversely proportional to the radius ratio, as angular momentum requires.

The period is $2\\pi$, the same as the circular orbit with semimajor axis one. The shape and speed distribution differ, but the area and conserved angular momentum change together to retain that period. At every radius the energy also gives the vis-viva identity
$$
v^2=\\frac{k}{\\mu}\\left(\\frac2s-\\frac1a\\right).
$$
Substituting either turning radius reproduces the two speeds above.

## Worked example 3: escape depends on the chosen interaction

At radius $s_0$, zero relative energy means $v_{esc}=\\sqrt{2k/(\\mu s_0)}$. In units $\\mu=k=s_0=1$, a purely tangential start at speed $\\sqrt2$ has $E=0$, $\\ell=\\sqrt2$, $p=2$ and $e=1$. Its orbit is the parabola $s=2/(1+\\cos\\theta)$ with periapsis at the initial state. The radius diverges as angle tends to $\\pi$, and time to reach infinity is infinite because $dt/d\\theta=\\mu s^2/\\ell$ has a divergent integral there.

A tangential start of speed two at the same point instead has $E=1$, $\\ell=2$ and $e=3$, giving a hyperbola with periapsis radius one. The admissible angular interval ends where $1+3\\cos\\theta=0$. A speed below escape can still lead to collision if the angular momentum is zero; negative energy by itself is insufficient for the noncollision ellipse conclusion.

## An impulse changes which conic is followed

Conservation applies between interventions, rather than across an unmodelled impulse. If a prescribed impulse changes the reduced particle's mechanical momentum from $\\pi=\\mu\\dot r$ to $\\pi+J$ at fixed position r, momentum balance gives
$$
\\Delta L=r\\times J,\\qquad
\\Delta E=\\frac{\\pi\\cdot J}{\\mu}+\\frac{\\|J\\|^2}{2\\mu}.
$$
The energy formula follows by expanding the new kinetic energy; the potential is unchanged at that instantaneous position. Neither conserved quantity should be held at its previous value when constructing the subsequent conic.

For example, start on a circular orbit of radius $s_0$ and speed $v_c=\\sqrt{k/(\\mu s_0)}$. A tangential impulse raises the speed to w with $v_c<w<\\sqrt2v_c$. The new energy remains negative and the new angular momentum is $\\mu s_0w$, so the subsequent orbit is an ellipse. Its semimajor axis is
$$
a_{new}=\\left(\\frac2{s_0}-\\frac{\\mu w^2}{k}\\right)^{-1}.
$$
Initially the radial velocity is zero, while the radial acceleration is $w^2/s_0-k/(\\mu s_0^2)>0$. The impulse point is therefore the new periapsis. As w tends upward to the escape speed, the denominator tends to zero and the ellipse size diverges. This example separates an exact unforced orbit law from the balance needed to change orbits.

## The radial collision case

For $\\ell=0$, take a particle released from rest at radius $s_0$. Its energy is $E=-k/s_0$ and the inward radial equation gives
$$
\\dot s=-\\sqrt{\\frac{2k}{\\mu}\\left(\\frac1s-\\frac1{s_0}\\right)}.
$$
The time to reach zero is the integral of the reciprocal speed from zero to $s_0$. Near zero its integrand behaves like a constant times $\\sqrt s$; near $s_0$ it behaves like a constant times $(s_0-s)^{-1/2}$. Both singularities are integrable, so collision occurs in finite time. The smooth noncollision ODE cannot simply be continued through that event by the local theorem. Collision regularisation and physical impact models require additional choices.

## An unbound orbit predicts a scattering angle

Kepler geometry also describes an encounter rather than a repeated orbit.
Assume an attractive inverse-square interaction, positive relative energy,
nonzero angular momentum and no collision. Far from the force centre the
relative speed tends to a positive value v∞. The impact parameter b is
the perpendicular offset of the incoming asymptotic line from the centre,
so the angular momentum magnitude is μbv∞. Energy at infinity is μv∞²/2.
Substitution into the eccentricity identity gives
$$e^2=1+\\left(\\frac{\\mu b v_\\infty^2}{k}\\right)^2>1.$$
The conic is therefore a hyperbola. This is the positive-energy branch
of the same orbit equation, not an application of the ellipse period law.

Choose polar angle zero at closest approach. The denominator of the conic
equation tends to zero on each asymptote, so the limiting angles satisfy
cos θ∞=−1/e with θ∞ between a right angle and a straight angle. Comparing
the incoming and outgoing velocity directions gives the positive deflection
χ=2θ∞−π. The trigonometric identities then yield
$$\\chi=2\\arcsin(1/e)
=2\\arctan\\left(\\frac{k}{\\mu b v_\\infty^2}\\right).$$
The deflection tends to zero for large impact parameter and grows toward
a straight reversal as the nonzero impact parameter tends to zero. The
limiting collision case still needs separate treatment: the formula for
noncollision trajectories does not define passage through the singular centre.

This example shows which quantities an orbit calculation must retain.
Specifying only positive energy fixes the incoming speed but leaves b and
therefore the deflection undetermined. Specifying only angular momentum
without energy is also insufficient. The full initial state, or equivalent
asymptotic data, determines the encounter. In a many-body experiment, an
isolated two-body approximation additionally assumes that other interactions
are negligible throughout the part of the trajectory used to infer those
data.

The angle is measured between asymptotic velocity directions. It is not
the polar angle swept from a finite initial radius, and a sensor placed
near the centre records a different geometric quantity. Comparing this
formula with a finite observation requires propagating to the observation
radius or quantifying the remaining deflection. Keeping that measurement
definition explicit connects the conserved conic parameters to an observable
without silently replacing finite data by infinite-distance data.

## A fixed period does not bound the periapsis speed

For a noncollision ellipse, substituting its energy
into the kinetic-plus-potential balance gives
$v^2=(k/\\mu)(2/r-1/a)$. At periapsis the radius
is a(1−e), so the speed squared is k/(μa)
times (1+e)/(1−e). Ellipses with the same
semimajor axis therefore have the same period
but different peak speeds and angular momenta.

As eccentricity tends to one at fixed semimajor
axis, the periapsis approaches the singular centre
and that peak speed grows without bound. This
is a singular limit of regular noncollision
orbits, not another ordinary ellipse with
eccentricity one. The period law remains fixed
along the approaching family, which shows
why one global timescale is insufficient to
resolve every local part of an orbit.
An integration or observation protocol based
only on period can miss the increasingly
short periapsis passage. Energy, angular momentum
and the noncollision domain together identify
the relevant scales; period alone does not.

## Exercises

### Exercise 1 — Reduced mass
<a id="central-forces-kepler-ex-1"></a>

For masses m and 3m, find the reduced mass and the coefficients recovering each position from Q and r.

<details>
<summary>Hint 1</summary>

Use total mass 4m.

</details>
<details>
<summary>Hint 2</summary>

The heavier body moves a smaller distance relative to the centre of mass.

</details>
<details>
<summary>Full solution</summary>

The reduced mass is $3m/4$. Taking particle 1 to have mass m gives $q_1=Q+3r/4$ and $q_2=Q-r/4$. Their difference is r and their mass-weighted displacement from Q sums to zero.

</details>

### Exercise 2 — Area ratio
<a id="central-forces-kepler-ex-2"></a>

At two states on the same nonradial central orbit, radii are s and 2s. Compare angular rates.

<details>
<summary>Hint 1</summary>

Keep the same angular momentum.

</details>
<details>
<summary>Hint 2</summary>

The radius enters quadratically in the angular-rate formula.

</details>
<details>
<summary>Full solution</summary>

Since $\\dot\\theta=\\ell/(\\mu s^2)$, the angular rate at radius 2s is one quarter its value at s. The area rate nevertheless remains the same because its factor $s^2/2$ compensates exactly.

</details>

### Exercise 3 — Effective-potential minimum
<a id="central-forces-kepler-ex-3"></a>

Differentiate the inverse-square effective potential and locate its minimum at fixed nonzero angular momentum.

<details>
<summary>Hint 1</summary>

Differentiate both the inverse-radius and inverse-square terms.

</details>
<details>
<summary>Hint 2</summary>

Use the sign change of the first derivative, not only a stationary equation.

</details>
<details>
<summary>Full solution</summary>

The derivative is $k/s^2-\\ell^2/(\\mu s^3)=(ks-\\ell^2/\\mu)/s^3$. It is negative below $\\ell^2/(\\mu k)$ and positive above it, giving a unique global minimum on positive radius. Its value is $-\\mu k^2/(2\\ell^2)$.

</details>

### Exercise 4 — Orbital eccentricity
<a id="central-forces-kepler-ex-4"></a>

With $\\mu=k=1$, $E=-1/8$ and $\\ell=1$, find e, p, a and both turning radii.

<details>
<summary>Hint 1</summary>

Use the energy–eccentricity identity first.

</details>
<details>
<summary>Hint 2</summary>

The turning radii are a times one minus or plus e.

</details>
<details>
<summary>Full solution</summary>

Here $e^2=1-1/4=3/4$, so $e=\\sqrt3/2$, $p=1$ and $a=4$. The turning radii are $4-2\\sqrt3$ and $4+2\\sqrt3$, both positive. Their sum is 2a and their product equals ap, providing direct consistency identities.

</details>

### Exercise 5 — Period scaling
<a id="central-forces-kepler-ex-5"></a>

For fixed masses, how does period change when semimajor axis is multiplied by four?

<details>
<summary>Hint 1</summary>

Apply the squared-period law.

</details>
<details>
<summary>Hint 2</summary>

Take the positive square root after scaling the cube.

</details>
<details>
<summary>Full solution</summary>

The squared period increases by $4^3=64$, so the positive period increases by eight. The comparison assumes the same inverse-square interaction coefficient and reduced mass.

</details>

### Exercise 6 — Vis-viva
<a id="central-forces-kepler-ex-6"></a>

Derive the displayed vis-viva identity for a negative-energy nonradial orbit.

<details>
<summary>Hint 1</summary>

Write energy in terms of total speed rather than radial speed alone.

</details>
<details>
<summary>Hint 2</summary>

Substitute E in terms of semimajor axis.

</details>
<details>
<summary>Full solution</summary>

From $E=\\mu v^2/2-k/s$ and $E=-k/(2a)$, rearrange to obtain $v^2=(2/\\mu)(k/s-k/(2a))=(k/\\mu)(2/s-1/a)$. This relation determines speed magnitude at a radius but not its radial and tangential components separately.

</details>

### Exercise 7 — A radial exception
<a id="central-forces-kepler-ex-7"></a>

Why does negative energy not imply a complete elliptical trajectory when angular momentum is zero?

<details>
<summary>Hint 1</summary>

The Binet reduction divided by angular momentum.

</details>
<details>
<summary>Hint 2</summary>

Examine inward radial motion from rest at positive radius.

</details>
<details>
<summary>Full solution</summary>

Zero angular momentum removes the centrifugal barrier. The released radial solution has negative energy and reaches the collision singularity in finite time, as shown by its integrable time integral. The noncollision ellipse theorem explicitly required positive angular momentum, so it makes no claim about this excluded case.

</details>

### Exercise 8 — Centrality is not enough
<a id="central-forces-kepler-ex-8"></a>

For central force $F=-\\kappa r$ with $\\kappa>0$, find the period of a circular orbit and compare its radius dependence with Kepler's third law.

<details>
<summary>Hint 1</summary>

Set radial acceleration equal to the central force per unit mass.

</details>
<details>
<summary>Hint 2</summary>

Write speed as angular frequency times radius.

</details>
<details>
<summary>Full solution</summary>

Circular balance gives $\\mu s\\omega^2=\\kappa s$, hence $\\omega=\\sqrt{\\kappa/\\mu}$ and $T=2\\pi\\sqrt{\\mu/\\kappa}$, independent of radius. Angular momentum and equal areas are still conserved, but the inverse-square period–size law is not a consequence of centrality alone.

</details>

### Exercise 9 — Turning-point speed ratio
<a id="central-forces-kepler-ex-9"></a>

For an ellipse of eccentricity e between zero and one, find the ratio of periapsis to apoapsis speed.

<details>
<summary>Hint 1</summary>

At either radial turning point velocity is tangential.

</details>
<details>
<summary>Hint 2</summary>

Use radii $a(1-e)$ and $a(1+e)$ with the same angular momentum.

</details>
<details>
<summary>Full solution</summary>

The two speeds are $\\ell/[\\mu a(1-e)]$ and $\\ell/[\\mu a(1+e)]$. Their ratio is $(1+e)/(1-e)$. It tends to one for a circle and grows without bound as eccentricity tends to one with the other orbit parameters interpreted consistently.

</details>

### Exercise 10 — Mass dependence of the period coefficient
<a id="central-forces-kepler-ex-10"></a>

Two isolated binaries have the same relative semimajor axis but total masses M and 4M. With the same gravitational constant, compare periods.

<details>
<summary>Hint 1</summary>

Use the exact reduced two-body coefficient.

</details>
<details>
<summary>Hint 2</summary>

Squared period is inversely proportional to total mass at fixed semimajor axis.

</details>
<details>
<summary>Full solution</summary>

The second binary has one quarter the squared period, hence half the period. The exact law depends on the sum of the two masses, even though the interaction potential originally contains their product. Reduced mass cancels that product in the final coefficient.

</details>

## Summary

A central force conserves angular momentum and gives planarity and equal swept areas. For an attractive inverse-square force, the Binet equation gives conic orbits, and negative energy together with nonzero angular momentum gives a complete ellipse. Its area and energy relations prove the period–size law. Radial collisions, unbound conics and perturbed interactions require their own domain and continuation arguments. Small oscillations next examine a different reduction: motion near an equilibrium decomposed into independent modes.

Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* provide the book-scale comparison references. The derivations, examples and exercise solutions here are original Euler text.
`;export{e as default};