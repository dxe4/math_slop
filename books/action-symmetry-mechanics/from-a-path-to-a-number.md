
# From a path to a number

Newton's law $F = ma$ predicts motion from forces. Variational mechanics reorganizes the same physics around paths, scalar energy, and symmetry. That reorganization scales naturally to constrained coordinates, fields, relativity, and numerical simulation. This chapter introduces the central idea: a physical path is selected not by balancing forces at each instant, but by making a scalar quantity---the action---stationary over the whole trajectory.

## Motivation: why reformulate mechanics?

Newtonian mechanics is powerful, but it has limitations. Forces are vectors, and writing vector equations in arbitrary coordinates can be cumbersome. Constraints, such as a bead on a wire or a pendulum bob on a string, require additional forces of constraint that must be solved for. When we move to field theory or general relativity, the notion of force becomes less central, while the notion of an action principle remains.

The variational formulation offers three advantages:

1. **Coordinate freedom**: The Euler--Lagrange equations take the same form in any set of generalized coordinates.
2. **Systematic handling of constraints**: Constraints can be incorporated via Lagrange multipliers or by choosing appropriate coordinates.
3. **Direct connection to symmetry and conservation laws**: Noether's theorem, which we develop in later chapters, reveals that every continuous symmetry of the action corresponds to a conserved quantity.

## The action functional

Let generalized coordinates be $q(t) = (q_{1}, \dots, q_{n})$, describing the configuration of a mechanical system at time $t$. For the natural mechanical models considered first, the *Lagrangian* is the scalar function

$$L(q, \dot{q}, t) = T(q, \dot{q}) - V(q, t),$$

where $T$ is the kinetic energy and $V$ is the potential energy. The dot denotes time differentiation: $\dot{q}_{i} = dq_{i}/dt$.

The *action* of a path $q(t)$ between fixed endpoint configurations $q(t_{0})$ and $q(t_{1})$ is the functional

$$S[q] = \int_{t_{0}}^{t_{1}} L(q(t), \dot{q}(t), t) \, dt.$$

The Lagrangian has units of energy, so the action has units of energy times time. In the standard fixed-endpoint principle, physical paths make the action *stationary*: the first-order change in $S$ vanishes under sufficiently smooth endpoint-fixing perturbations. The word "stationary" is deliberate: it need not mean locally or globally minimal. A stationary mechanical path can be a saddle of the action; the first variation alone does not classify it.

**Definition 4.1 (Stationary path).** A twice continuously differentiable path $q(t)$ is *stationary* for the action functional $S$ with fixed endpoints if, for every smooth perturbation $\eta(t)$ with $\eta(t_{0}) = \eta(t_{1}) = 0$, the first variation $\delta S = 0$.

## Deriving the Euler--Lagrange equation

We now derive the condition that characterizes stationary paths. Consider a one-parameter family of perturbed paths

$$q_{\varepsilon}(t) = q(t) + \varepsilon \eta(t),$$

where $\eta(t)$ is an arbitrary smooth function satisfying the fixed-endpoint condition $\eta(t_{0}) = \eta(t_{1}) = 0$, and $\varepsilon$ is a real parameter. The action becomes a function of $\varepsilon$:

$$S(\varepsilon) = \int_{t_{0}}^{t_{1}} L(q_{\varepsilon}(t), \dot{q}_{\varepsilon}(t), t) \, dt.$$

At a stationary path, $dS/d\varepsilon$ must vanish at $\varepsilon = 0$ for every admissible $\eta$.

Differentiating under the integral sign:

$$\frac{dS}{d\varepsilon}\bigg|_{\varepsilon = 0} = \int_{t_{0}}^{t_{1}} \left[ \frac{\partial L}{\partial q} \eta + \frac{\partial L}{\partial \dot{q}} \dot{\eta} \right] dt.$$

Integrate the second term by parts:

$$\int_{t_{0}}^{t_{1}} \frac{\partial L}{\partial \dot{q}} \dot{\eta} \, dt = \left[ \frac{\partial L}{\partial \dot{q}} \eta \right]_{t_{0}}^{t_{1}} - \int_{t_{0}}^{t_{1}} \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) \eta \, dt.$$

The boundary term vanishes because $\eta(t_{0}) = \eta(t_{1}) = 0$. Substituting back:

$$\frac{dS}{d\varepsilon}\bigg|_{\varepsilon = 0} = \int_{t_{0}}^{t_{1}} \left[ \frac{\partial L}{\partial q} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) \right] \eta \, dt = 0.$$

Since this must hold for every smooth $\eta$ with fixed endpoints, the fundamental lemma of the calculus of variations implies that the coefficient of $\eta$ must vanish identically:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial q} = 0.$$

This is the **Euler--Lagrange equation** for a single degree of freedom.

**Theorem 4.2 (Euler--Lagrange).** Let $L(q, \dot{q}, t)$ be twice continuously differentiable in all arguments, with the path's position–velocity graph compactly contained in its coordinate domain. A twice continuously differentiable path $q(t)$ with fixed endpoints $q(t_{0})$ and $q(t_{1})$ makes the action stationary if and only if it satisfies the Euler--Lagrange equation on $(t_{0}, t_{1})$.

For a system with $n$ generalized coordinates, there is one Euler--Lagrange equation for each coordinate:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_{i}}\right) - \frac{\partial L}{\partial q_{i}} = 0, \qquad i = 1, \dots, n.$$

## Worked example: projectile motion

Consider a particle of mass $m$ moving near Earth's surface under gravity. Using Cartesian coordinates $(x, y)$ with $y$ measured upward, the kinetic and potential energies are

$$T = \frac{m}{2}\left(\dot{x}^{2} + \dot{y}^{2}\right), \qquad V = mgy.$$

The Lagrangian is

$$L = \frac{m}{2}\left(\dot{x}^{2} + \dot{y}^{2}\right) - mgy.$$

**For $x$:** The Lagrangian has no explicit $x$ dependence, so $\partial L/\partial x = 0$. The Euler--Lagrange equation gives

$$\frac{d}{dt}(m\dot{x}) = 0 \quad \Longrightarrow \quad \dot{x} = \text{const}.$$

**For $y$:** We have $\partial L/\partial y = -mg$ and $\partial L/\partial \dot{y} = m\dot{y}$, so

$$\frac{d}{dt}(m\dot{y}) - (-mg) = 0 \quad \Longrightarrow \quad \ddot{y} = -g.$$

Integrating with initial conditions $x(0) = x_{0}$, $y(0) = y_{0}$, $\dot{x}(0) = u$, and $\dot{y}(0) = v$:

$$x(t) = x_{0} + ut, \qquad y(t) = y_{0} + vt - \frac{g}{2}t^{2}.$$

The familiar parabolic trajectory has emerged directly from the stationarity of a scalar functional, without ever writing down a vector force equation.

## Coordinates can encode constraints

A pendulum bob constrained to move on a circle of radius $\ell$ could be described using Cartesian coordinates $(x, y)$ subject to the constraint $x^{2} + y^{2} = \ell^{2}$. A cleaner approach is to use the angle $\theta$ as the generalized coordinate:

$$x = \ell \sin\theta, \qquad y = -\ell \cos\theta.$$

The kinetic and potential energies become

$$T = \frac{m\ell^{2}}{2}\dot{\theta}^{2}, \qquad V = mg\ell(1 - \cos\theta).$$

The Lagrangian is

$$L = \frac{m\ell^{2}}{2}\dot{\theta}^{2} - mg\ell(1 - \cos\theta).$$

The Euler--Lagrange equation for $\theta$ gives

$$\frac{d}{dt}(m\ell^{2}\dot{\theta}) + mg\ell \sin\theta = 0,$$

which simplifies to

$$\ddot{\theta} + \frac{g}{\ell}\sin\theta = 0.$$

For small angles, $\sin\theta \approx \theta$, and the equation linearizes to

$$\ddot{\theta} + \frac{g}{\ell}\theta = 0.$$

This is simple harmonic motion with angular frequency $\omega = \sqrt{g/\ell}$.

**Common error:** The small-angle approximation $\sin\theta \approx \theta$ is often applied without checking its validity. For $\theta = 0.5$ rad ($\approx 29^{\circ}$), the relative error is about $4\%$; for $\theta = 1$ rad, it exceeds $15\%$. The approximation also changes the qualitative behaviour: the linearized pendulum has amplitude-independent period, while the true pendulum's period increases with amplitude.

## The lemma behind the variational implication

**Lemma 4.3 (Fundamental lemma, continuous version).** If a continuous scalar function f on an open time interval satisfies $\int f(t)\eta(t)dt=0$ for every smooth compactly supported test function, then f vanishes throughout the interval.

*Proof.* If $f(t_*)>0$, continuity gives a smaller interval around that point where f stays strictly positive. Choose a smooth nonnegative bump function supported there and positive somewhere. Its product with f has strictly positive integral, contradicting the assumption. A negative value is ruled out by the same argument applied to minus f. Thus every value is zero. For a vector coefficient, choose a perturbation with only one nonzero component to apply the scalar argument separately. $\square$

The Euler–Lagrange coefficient above is continuous under the stated $C^2$ hypotheses. Differentiating the action under its integral is also justified: the time interval is compact, and for a fixed smooth perturbation a sufficiently small parameter range keeps the varied graph inside a compact neighbourhood of the original graph. The continuous derivatives of L are bounded there, supplying a uniform integrable bound on the derivative. These facts justify the operations rather than treating a formal integration by parts as the whole proof.

Conversely, if the Euler–Lagrange coefficient vanishes, the displayed first-variation formula and fixed endpoints make the variation zero for every allowed perturbation. This proves both directions of the theorem, while keeping existence of a stationary boundary-value solution as a separate issue.

## Worked example: the free-particle action really is minimised

For $L=m\|\dot q\|^2/2$, $m>0$, prescribe $q(0)=q_0$ and $q(T)=q_1$ with $T>0$. The Euler–Lagrange path is the straight uniform motion $q_*(t)=q_0+(q_1-q_0)t/T$. Its action is
$$
S[q_*]=\frac{m}{2T}\|q_1-q_0\|^2.
$$
Every other continuously differentiable path with those endpoints can be written $q_*+\eta$ with zero endpoint perturbations. Expanding the kinetic square gives
$$
S[q_*+\eta]-S[q_*]
=m\dot q_*\cdot\int_0^T\dot\eta\,dt
+\frac m2\int_0^T\|\dot\eta\|^2dt
=\frac m2\int_0^T\|\dot\eta\|^2dt\ge0.
$$
The cross term is zero because its integral is the endpoint difference of eta. Equality forces the continuous derivative of eta to vanish everywhere, and its endpoints then force eta itself to vanish. This proves a unique global minimiser in the chosen path class. Its minimum property comes from the explicit positive-square identity, not merely from satisfaction of the Euler–Lagrange equations.

For an oscillator, the second variation contains a negative potential term as well. On a long enough interval there are directions that reduce action and others that increase it. The later exercise supplies an exact example, explaining why the free-particle conclusion cannot be copied to every potential.

## Symmetry predicts conserved quantities

Define the **generalized momentum** conjugate to $q_{i}$ by

$$p_{i} = \frac{\partial L}{\partial \dot{q}_{i}}.$$

**Theorem 4.4 (Cyclic coordinate).** If $L$ does not depend explicitly on a coordinate $q_{i}$ (that is, $\partial L/\partial q_{i} = 0$), then the corresponding generalized momentum $p_{i}$ is constant along solutions of the Euler--Lagrange equations.

*Proof.* From the Euler--Lagrange equation,

$$\dot{p}_{i} = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_{i}}\right) = \frac{\partial L}{\partial q_{i}} = 0.$$

A coordinate $q_{i}$ on which $L$ does not explicitly depend is called *cyclic* or *ignorable*.

In the projectile example, $x$ is cyclic, so $p_{x} = m\dot{x}$ is conserved. This is the conservation of horizontal momentum, arising from translational symmetry in the $x$-direction.

**Definition 4.5 (Energy function).** Define the quantity

$$E = \sum_{i} \dot{q}_{i} p_{i} - L.$$

**Theorem 4.6 (Energy conservation).** If $L$ has no explicit time dependence ($\partial L/\partial t = 0$), then $dE/dt = 0$ along solutions of the Euler--Lagrange equations.

*Proof.* Differentiate $E$ with respect to time:

$$\frac{dE}{dt} = \sum_{i}\left[\ddot{q}_{i}p_{i} + \dot{q}_{i}\dot{p}_{i}\right] - \sum_{i}\left[\frac{\partial L}{\partial q_{i}}\dot{q}_{i} + \frac{\partial L}{\partial \dot{q}_{i}}\ddot{q}_{i}\right] - \frac{\partial L}{\partial t}.$$

Using $p_{i} = \partial L/\partial \dot{q}_{i}$ and $\dot{p}_{i} = \partial L/\partial q_{i}$ from the Euler--Lagrange equations, all summed terms cancel, leaving

$$\frac{dE}{dt} = -\frac{\partial L}{\partial t}.$$

Thus, if $\partial L/\partial t = 0$, energy is conserved. This is time-translation symmetry implying energy conservation. The [particle Noether chapter](noether-particles.md) generalises the argument with boundary terms and clock changes; [Lie Groups and Symmetry](lie-groups-and-symmetry.md) later supplies its geometric formulation.

## Assumptions and failure modes

- **Endpoint-fixing variations** derive equations for a prescribed boundary problem; other boundary conditions add boundary terms that must be handled separately.
- Stationarity alone does not prove minimisation; even a regular natural mechanical action can have saddle paths.
- **Singular Lagrangians**, where the velocity Hessian $\partial^{2}L/\partial\dot{q}_{i}\partial\dot{q}_{j}$ is not invertible, require constraint methods; the Legendre transform may not be defined.
- **Friction and dissipation** are not represented by a basic $T - V$ Lagrangian without additional modelling (such as Rayleigh dissipation functions or nonholonomic methods).
- **Coordinate singularities**, such as polar coordinates at the origin, are artifacts of the coordinate choice, not physical singularities.
- Conservation laws require the stated symmetry; a time-dependent potential can exchange energy with its environment.

## An oscillator stationary path can fail to minimize action

The free-particle minimum proof must not be generalized to every mechanical
action. Take the oscillator Lagrangian m times the difference of velocity
squared and ω² times position squared, divided by two. Fix the positions
at the two ends of an interval of length T and let q be a stationary
path. For a smooth variation η vanishing at both ends, the exact action
difference is
$$S[q+\varepsilon\eta]-S[q]
=\frac{m\varepsilon^2}{2}\int_0^T(\dot\eta^2-\omega^2\eta^2)\,dt.$$
The linear term vanishes by the oscillator equation and the fixed endpoints.
There are no higher terms because the Lagrangian is quadratic. Choose the
nonzero variation η(t)=sin(πt/T). Its derivative-square integral is π²/T²
times its square integral, so the difference has the sign of π²/T²−ω².
For an interval longer than half an oscillator period, this is negative.
Arbitrarily small multiples of the same variation therefore reduce the action.
The stationary path is not a local minimum in that case.

Other variations with sufficiently high sine frequency make the difference
positive. Thus, on such a long interval, both larger and smaller action
values occur arbitrarily close to the stationary path. The physical equation
still follows from vanishing first variation. What fails is the extra
minimization interpretation, not the Euler–Lagrange theorem.

At exactly half a period, the displayed lowest-frequency variation has zero
action difference. When the endpoints satisfy the oscillator's corresponding
signed relation, changing its amplitude gives different stationary paths
joining the same endpoints. This is the boundary-value degeneracy explored
later through the Hamilton–Jacobi endpoint action. Local uniqueness of an
initial-value problem remains intact because these paths have different
initial velocities.

The calculation supplies a practical distinction between three statements:
a first variation vanishes, a second variation is nonnegative, and a path
is actually a minimum in a specified class. They have different hypotheses
and implications. Positive kinetic energy alone does not settle the sign
of the action's second variation because its potential contribution has the
opposite sign. Calling the principle stationary action preserves exactly
the conclusion proved by the variational calculation.

## Practice exercises

### Exercise 1
<a id="from-a-path-to-a-number-ex-1"></a>

For the Lagrangian $L = \frac{m}{2}\dot{q}^{2} - \frac{k}{2}q^{2}$, derive the equation of motion using the Euler--Lagrange equation.

<details>
<summary>Hint 1</summary>

Differentiate L with respect to position and velocity separately.

</details>
<details>
<summary>Hint 2</summary>

The time derivative of the velocity derivative produces the acceleration term.

</details>
<details>
<summary>Full solution</summary>

**Solution.** We have $\partial L/\partial q = -kq$ and $\partial L/\partial \dot{q} = m\dot{q}$. The Euler--Lagrange equation gives

$$\frac{d}{dt}(m\dot{q}) - (-kq) = 0 \quad \Longrightarrow \quad m\ddot{q} + kq = 0.$$

This is the equation for a simple harmonic oscillator with angular frequency $\omega = \sqrt{k/m}$.

</details>

### Exercise 2
<a id="from-a-path-to-a-number-ex-2"></a>

Show that adding a constant $C$ to the potential energy $V$ does not change the Euler--Lagrange equations.

<details>
<summary>Hint 1</summary>

A constant potential shift changes no coordinate or velocity derivative.

</details>
<details>
<summary>Hint 2</summary>

Compare the two energy reference values after comparing the equations.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The modified Lagrangian is $L' = T - (V + C) = L - C$. Since $C$ is constant, $\partial L'/\partial q = \partial L/\partial q$ and $\partial L'/\partial \dot{q} = \partial L/\partial \dot{q}$. The Euler--Lagrange equation is unchanged. The energy $E$ shifts by $C$, but only energy differences are physically meaningful.

</details>

### Exercise 3
<a id="from-a-path-to-a-number-ex-3"></a>

For a free particle in two dimensions with Lagrangian $L = \frac{m}{2}(\dot{x}^{2} + \dot{y}^{2})$, identify all cyclic coordinates and their corresponding conserved quantities.

<details>
<summary>Hint 1</summary>

Inspect which coordinates occur explicitly in L.

</details>
<details>
<summary>Hint 2</summary>

Cyclic coordinates conserve their conjugate momenta through Euler–Lagrange.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Neither $x$ nor $y$ appears explicitly in $L$, so both are cyclic. The conserved momenta are $p_{x} = m\dot{x}$ and $p_{y} = m\dot{y}$. These are the components of linear momentum.

</details>

### Exercise 4
<a id="from-a-path-to-a-number-ex-4"></a>

Derive the small-angle period of a simple pendulum of length $\ell$ in a uniform gravitational field $g$.

<details>
<summary>Hint 1</summary>

Linearise the sine only in the small-angle regime.

</details>
<details>
<summary>Hint 2</summary>

Convert the resulting positive angular frequency to a period.

</details>
<details>
<summary>Full solution</summary>

**Solution.** For small angles, the equation of motion is $\ddot{\theta} + (g/\ell)\theta = 0$. This is simple harmonic motion with angular frequency $\omega = \sqrt{g/\ell}$. The period is

$$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{\ell}{g}}.$$

</details>

### Exercise 5
<a id="from-a-path-to-a-number-ex-5"></a>

Consider a particle constrained to move on the surface of a sphere of radius $R$. Using spherical coordinates $(\theta, \phi)$, write the Lagrangian and derive the equations of motion.

<details>
<summary>Hint 1</summary>

Express the Cartesian kinetic energy in spherical coordinates at fixed radius.

</details>
<details>
<summary>Hint 2</summary>

The azimuthal coordinate is cyclic, while the polar derivative includes the spherical metric factor.

</details>
<details>
<summary>Full solution</summary>

**Solution.** With $r = R$ fixed, the Cartesian coordinates are $x = R\sin\theta\cos\phi$, $y = R\sin\theta\sin\phi$, $z = R\cos\theta$. The kinetic energy is

$$T = \frac{mR^{2}}{2}\left(\dot{\theta}^{2} + \sin^{2}\theta \, \dot{\phi}^{2}\right).$$

With $V = 0$ (free motion on the sphere), the Lagrangian is $L = T$. The Euler--Lagrange equations are:

$$\ddot{\theta} - \sin\theta\cos\theta \, \dot{\phi}^{2} = 0, \qquad \frac{d}{dt}(\sin^{2}\theta \, \dot{\phi}) = 0.$$

The second equation shows that $p_{\phi} = mR^{2}\sin^{2}\theta \, \dot{\phi}$ is conserved, reflecting rotational symmetry about the $z$-axis.

</details>

### Exercise 6 — Minimum free action
<a id="from-a-path-to-a-number-ex-6"></a>

For mass m=2, endpoints q(0)=1 and q(2)=3, find the free-particle stationary path and its action. Prove its minimum property.

<details>
<summary>Hint 1</summary>

The Euler–Lagrange equation makes velocity constant.

</details>
<details>
<summary>Hint 2</summary>

Expand the action around the straight path using a perturbation with zero endpoints.

</details>
<details>
<summary>Full solution</summary>

The path is q(t)=1+t, with velocity one. Its action is $\int_0^2(2/2)dt=2$. Every competing path is q plus eta, and the cross term integrates to zero. Its action exceeds two by $\int_0^2\dot\eta^2dt\ge0$, with equality only for zero eta. Thus the minimiser is unique in the stated differentiable path class.

</details>

### Exercise 7 — An endpoint term is not necessarily zero
<a id="from-a-path-to-a-number-ex-7"></a>

Add $d(cq^2/2)/dt$ to a Lagrangian. What is the action change, and why does the fixed-endpoint first variation remain unchanged?

<details>
<summary>Hint 1</summary>

Integrate the total derivative exactly.

</details>
<details>
<summary>Hint 2</summary>

A fixed nonzero action offset can still have zero variation.

</details>
<details>
<summary>Full solution</summary>

The action changes by $c[q(t_1)^2-q(t_0)^2]/2$. This number need not be zero. But it is the same for every path with the prescribed endpoints, so its variation is zero and the stationary paths are unchanged. Other endpoint conditions cannot discard it without additional analysis.

</details>

### Exercise 8 — A stationary oscillator saddle
<a id="from-a-path-to-a-number-ex-8"></a>

For $L=m(\dot q^2-\omega^2q^2)/2$ with positive m and omega, consider the zero path with endpoints zero on an interval of length $T>\pi/\omega$. Show it has both increasing and decreasing action directions.

<details>
<summary>Hint 1</summary>

Use sine perturbations that vanish at both endpoints.

</details>
<details>
<summary>Hint 2</summary>

Compare the first sine mode with an integer mode whose frequency exceeds omega.

</details>
<details>
<summary>Full solution</summary>

For $\eta_n(t)=\sin(n\pi t/T)$, the action of $\epsilon\eta_n$ is
$$
\frac{m\epsilon^2T}{4}\left(\frac{n^2\pi^2}{T^2}-\omega^2\right).
$$
At n=1 it is negative by the assumed interval length; for a sufficiently large integer n it is positive. Both approach the zero stationary path as epsilon tends to zero, so the action has a saddle there. The Euler–Lagrange equation alone did not decide minimisation.

</details>

### Exercise 9 — A free terminal position
<a id="from-a-path-to-a-number-ex-9"></a>

For a free particle with fixed q(0)=q0 and free terminal position at time T, add terminal cost $\kappa(q(T)-a)^2/2$ with positive kappa. Derive the endpoint condition and terminal position.

<details>
<summary>Hint 1</summary>

Keep the final integration-by-parts term because the endpoint variation is now arbitrary.

</details>
<details>
<summary>Hint 2</summary>

The interior equation still gives a straight path; combine it with the terminal boundary equation.

</details>
<details>
<summary>Full solution</summary>

The terminal coefficient of the variation is $p(T)+\kappa(q(T)-a)$, so it must vanish. With constant velocity, $p(T)=m(q(T)-q_0)/T$. Solving gives $q(T)=(mq_0+\kappa Ta)/(m+\kappa T)$. The endpoint is a weighted compromise, not a separately fixed boundary value. Changing allowed variations changes the mathematical problem.

</details>

### Exercise 10 — A nonlinear coordinate for free motion
<a id="from-a-path-to-a-number-ex-10"></a>

On the positive half-line write a free particle position as q=exp(u). Derive its Euler–Lagrange equation in u and reconstruct the Cartesian acceleration.

<details>
<summary>Hint 1</summary>

Substitute the transformed velocity into kinetic energy.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the coordinate-dependent mass factor as well as the velocity.

</details>
<details>
<summary>Full solution</summary>

The Lagrangian is $L=me^{2u}\dot u^2/2$. Its Euler–Lagrange equation is $me^{2u}(\ddot u+\dot u^2)=0$. Since the prefactor is positive, $\ddot u+\dot u^2=0$. Reconstructing gives $\ddot q=e^u(\ddot u+\dot u^2)=0$. The nonlinear coordinate equation is compatible with free Cartesian motion, on the interval where the position remains in the chosen positive-domain chart.

</details>

<a id="connections"></a>
## Summary

This chapter established the variational foundation of mechanics: the action principle, the Euler--Lagrange equations, and the first connections between symmetry and conservation. Continue to **Constraints and Lagrange Multipliers** for systematic methods handling constraints that cannot be eliminated by coordinate choice. The ideas here also prepare the ground for **Hamilton--Jacobi Theory**, where the action becomes a function of the endpoints and generates canonical transformations.
