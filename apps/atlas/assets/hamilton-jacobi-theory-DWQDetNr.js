var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: hamilton-jacobi-theory
title: "Hamilton--Jacobi Theory"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
status: draft
---

# Hamilton--Jacobi Theory

The Lagrangian formulation focuses on paths in configuration space. The Hamiltonian formulation elevates the momenta to independent variables and studies evolution in phase space. Hamilton--Jacobi theory goes further: it treats the action as a function of the endpoint coordinates and seeks a partial differential equation whose solution generates the entire dynamics. Read the dedicated [Hamiltonian and Legendre-transform chapter](hamiltonian-legendre-transform.md) and [canonical-transformation chapter](canonical-transformations-poisson-brackets.md) for their full hypotheses and worked developments. The opening constructions below recap that preparation before turning to the Hamilton--Jacobi equation.

## From Lagrangian to Hamiltonian

Given a Lagrangian $L(q, \\dot{q}, t)$, define the generalized momenta

$$p_{i} = \\frac{\\partial L}{\\partial \\dot{q}_{i}}.$$

**Definition 9.1 (Regular Lagrangian).** A Lagrangian is *regular* if the velocity Hessian

$$W_{ij} = \\frac{\\partial^{2}L}{\\partial\\dot{q}_{i}\\partial\\dot{q}_{j}}$$

is invertible everywhere. This ensures the map $(q, \\dot{q}, t) \\mapsto (q, p, t)$ can be (locally) inverted to express $\\dot{q}$ as a function of $(q, p, t)$.

For a regular Lagrangian, the **Hamiltonian** is defined by the Legendre transform:

$$H(q, p, t) = \\sum_{i} p_{i}\\dot{q}_{i} - L(q, \\dot{q}, t),$$

where $\\dot{q}$ is understood as a function of $(q, p, t)$.

**Theorem 9.2 (Hamilton's equations).** For a regular Lagrangian, the Euler--Lagrange equations are equivalent to Hamilton's equations:

$$\\dot{q}_{i} = \\frac{\\partial H}{\\partial p_{i}}, \\qquad \\dot{p}_{i} = -\\frac{\\partial H}{\\partial q_{i}}.$$

*Proof.* From the definition of $H$, consider a variation with $q$ and $p$ independent:

$$dH = \\sum_{i}\\left(\\dot{q}_{i}\\,dp_{i} + p_{i}\\,d\\dot{q}_{i} - \\frac{\\partial L}{\\partial q_{i}}\\,dq_{i} - \\frac{\\partial L}{\\partial \\dot{q}_{i}}\\,d\\dot{q}_{i}\\right) - \\frac{\\partial L}{\\partial t}\\,dt.$$

Since $p_{i} = \\partial L/\\partial \\dot{q}_{i}$, the terms involving $d\\dot{q}_{i}$ cancel. Using the Euler--Lagrange equation $\\dot{p}_{i} = \\partial L/\\partial q_{i}$:

$$dH = \\sum_{i}\\left(\\dot{q}_{i}\\,dp_{i} - \\dot{p}_{i}\\,dq_{i}\\right) - \\frac{\\partial L}{\\partial t}\\,dt.$$

Comparing with the total differential $dH = \\sum_{i}(\\partial H/\\partial q_{i}\\,dq_{i} + \\partial H/\\partial p_{i}\\,dp_{i}) + \\partial H/\\partial t\\,dt$, we obtain Hamilton's equations and $\\partial H/\\partial t = -\\partial L/\\partial t$.

## Worked example: harmonic oscillator

For a one-dimensional harmonic oscillator with $L = \\frac{m}{2}\\dot{q}^{2} - \\frac{k}{2}q^{2}$:

$$p = \\frac{\\partial L}{\\partial \\dot{q}} = m\\dot{q} \\quad \\Longrightarrow \\quad \\dot{q} = \\frac{p}{m}.$$

The Hamiltonian is

$$H = p\\dot{q} - L = \\frac{p^{2}}{m} - \\left(\\frac{p^{2}}{2m} - \\frac{k}{2}q^{2}\\right) = \\frac{p^{2}}{2m} + \\frac{k}{2}q^{2}.$$

Hamilton's equations are

$$\\dot{q} = \\frac{p}{m}, \\qquad \\dot{p} = -kq.$$

Differentiating the first and substituting the second gives $m\\ddot{q} = -kq$, recovering the original equation of motion. The Hamiltonian is the total energy, and $dH/dt = \\partial H/\\partial t = 0$, so energy is conserved.

## Phase space and the symplectic structure

The $2n$-dimensional space with coordinates $(q_{1}, \\dots, q_{n}, p_{1}, \\dots, p_{n})$ is called **phase space**. Hamilton's equations can be written compactly using the **symplectic matrix**

$$J = \\begin{pmatrix} 0 & I_{n} \\\\ -I_{n} & 0 \\end{pmatrix},$$

where $I_{n}$ is the $n \\times n$ identity matrix. Let $z = (q, p)$. Then

$$\\dot{z} = J\\nabla H.$$

**Definition 9.3 (Poisson bracket).** For functions $f(q, p, t)$ and $g(q, p, t)$, the Poisson bracket is

$$\\{f, g\\} = \\sum_{i}\\left(\\frac{\\partial f}{\\partial q_{i}}\\frac{\\partial g}{\\partial p_{i}} - \\frac{\\partial f}{\\partial p_{i}}\\frac{\\partial g}{\\partial q_{i}}\\right).$$

In terms of Poisson brackets, the time evolution of any phase-space function is

$$\\frac{df}{dt} = \\{f, H\\} + \\frac{\\partial f}{\\partial t}.$$

A function $f$ is conserved if and only if $\\{f, H\\} = 0$ (when $f$ has no explicit time dependence).

## Canonical transformations

**Definition 9.4 (Canonical transformation).** A transformation $(q, p) \\mapsto (Q, P)$ is *canonical* if it preserves the Poisson bracket structure: $\\{Q_{i}, P_{j}\\} = \\delta_{ij}$, $\\{Q_{i}, Q_{j}\\} = 0$, and $\\{P_{i}, P_{j}\\} = 0$.

Locally, on a suitable generating-function chart, a canonical transformation can be represented by

$$\\sum_{i} p_{i}\\,dq_{i} - H\\,dt = \\sum_{i} P_{i}\\,dQ_{i} - K\\,dt + dF,$$

where $K$ is the new Hamiltonian and $F$ is the generating function. The relevant coordinate projection must be nonsingular. This local representation is not a claim that every canonical map has one globally defined generating function of a specified type.

There are four standard types of generating functions:

1. **Type 1:** $F = F_{1}(q, Q, t)$, with $p_{i} = \\partial F_{1}/\\partial q_{i}$, $P_{i} = -\\partial F_{1}/\\partial Q_{i}$, and $K = H + \\partial F_{1}/\\partial t$.
2. **Type 2:** $F = F_{2}(q, P, t) - \\sum_{i} Q_{i}P_{i}$, with $p_{i} = \\partial F_{2}/\\partial q_{i}$, $Q_{i} = \\partial F_{2}/\\partial P_{i}$, and $K = H + \\partial F_{2}/\\partial t$.
3. **Type 3:** $F = F_{3}(p, Q, t) + \\sum_{i} q_{i}p_{i}$.
4. **Type 4:** $F = F_{4}(p, P, t) + \\sum_{i}(q_{i}p_{i} - Q_{i}P_{i})$.

## The Hamilton--Jacobi equation

Consider a generating function of type 2, $S(q, P, t)$, where we choose the new momenta $P_{i}$ to be constants of motion. If we can find such a transformation where $K = 0$, then the new coordinates are also constants: $\\dot{Q}_{i} = \\partial K/\\partial P_{i} = 0$ and $\\dot{P}_{i} = -\\partial K/\\partial Q_{i} = 0$.

The condition $K = 0$ becomes the **Hamilton--Jacobi equation**:

$$H\\left(q, \\frac{\\partial S}{\\partial q}, t\\right) + \\frac{\\partial S}{\\partial t} = 0.$$

Here $S(q, P, t)$ is called **Hamilton's principal function**. The $P_{i}$ are $n$ constants of integration. Once $S$ is found, the transformation equations give

$$p_{i} = \\frac{\\partial S}{\\partial q_{i}}, \\qquad Q_{i} = \\frac{\\partial S}{\\partial P_{i}} = \\beta_{i},$$

where $\\beta_{i}$ are constants. Inverting $Q_{i} = \\partial S/\\partial P_{i}$ gives $q_{i}(t)$ in terms of the $2n$ constants $(P, \\beta)$.

**Definition 9.5 (Nondegenerate complete integral).** A $C^2$ solution $S(q,P,t)$ with n parameters is a nondegenerate complete integral on a region when the mixed matrix $S_{qP}$ is invertible there. Merely writing n parameter symbols does not establish that condition.

**Theorem 9.6 (Jacobi, local form).** If H is $C^2$ and S is a nondegenerate complete integral, the equations $p=S_q$ and $S_P=\\beta$, with constant P and beta, define local Hamiltonian solutions. They parametrise nearby initial data wherever the generating coordinate map remains nonsingular.

*Proof.* The implicit-function theorem solves $S_P(q,P,t)=\\beta$ for q locally because its q derivative is $S_{Pq}$. Differentiating at fixed P and beta gives $S_{Pq}\\dot q+S_{Pt}=0$. Differentiating the Hamilton–Jacobi equation with respect to P gives $S_{Pt}+S_{Pq}H_p=0$. Subtraction and invertibility yield $\\dot q=H_p$.

Now differentiate $p=S_q$ along the constructed path: $\\dot p=S_{qq}\\dot q+S_{qt}$. Differentiating the PDE with respect to q gives $S_{qt}+H_q+S_{qq}H_p=0$. Combining with the position equation gives $\\dot p=-H_q$. Finally the type-two generating map has nonsingular mixed derivative, so it gives local independent phase coordinates P and beta as proved in the preceding canonical chapter. $\\square$

The result is local in space, parameters and time. If the mixed derivative loses rank or S ceases to be smooth, these coordinates need not describe a single branch through that point. Such failure of one generating description is not necessarily a singularity of the underlying Hamiltonian trajectory.

## Worked example: free particle

For a free particle in one dimension, $H = p^{2}/(2m)$. The Hamilton--Jacobi equation is

$$\\frac{1}{2m}\\left(\\frac{\\partial S}{\\partial q}\\right)^{2} + \\frac{\\partial S}{\\partial t} = 0.$$

Try a solution of the form $S(q, P, t) = W(q, P) - Et$, where $P$ is a constant (which we identify with the energy $E$). Then

$$\\frac{1}{2m}\\left(\\frac{dW}{dq}\\right)^{2} = E \\quad \\Longrightarrow \\quad W = \\pm\\sqrt{2mE}\\,q.$$

So $S = \\pm\\sqrt{2mE}\\,q - Et$. The transformation equations give

$$p = \\frac{\\partial S}{\\partial q} = \\pm\\sqrt{2mE}, \\qquad \\beta = \\frac{\\partial S}{\\partial E} = \\pm\\frac{mq}{\\sqrt{2mE}} - t.$$

Solving the second equation for $q$:

$$q = \\pm\\sqrt{\\frac{2E}{m}}(t + \\beta) = \\frac{p}{m}(t + \\beta).$$

This is uniform motion with constant velocity $p/m$, as expected.

The energy-parameter chart above assumes $E>0$ and chooses one momentum sign. It excludes the resting branch at E zero. A simpler complete integral $S(q,P,t)=Pq-P^2t/(2m)$ uses momentum as its parameter and has $S_{qP}=1$, including P zero. Then $\\beta=q-Pt/m$ labels the initial position directly. The choice of constants can therefore remove a coordinate degeneracy without changing the physical family of solutions.

## Worked example: harmonic oscillator via Hamilton--Jacobi

For the harmonic oscillator, $H = p^{2}/(2m) + \\frac{k}{2}q^{2}$. The Hamilton--Jacobi equation is

$$\\frac{1}{2m}\\left(\\frac{\\partial S}{\\partial q}\\right)^{2} + \\frac{k}{2}q^{2} + \\frac{\\partial S}{\\partial t} = 0.$$

With $S = W(q, P) - Pt$ (where $P$ is the energy):

$$\\frac{1}{2m}\\left(\\frac{dW}{dq}\\right)^{2} + \\frac{k}{2}q^{2} = P.$$

Solving for $dW/dq$:

$$\\frac{dW}{dq} = \\sqrt{2mP - mkq^{2}} = \\sqrt{mk}\\sqrt{\\frac{2P}{k} - q^{2}}.$$

Let $\\omega = \\sqrt{k/m}$ and $A^{2} = 2P/k$. Then

$$W = \\sqrt{mk}\\int\\sqrt{A^{2} - q^{2}}\\,dq = \\sqrt{mk}\\left[\\frac{q}{2}\\sqrt{A^{2} - q^{2}} + \\frac{A^{2}}{2}\\arcsin\\frac{q}{A}\\right].$$

The constant $\\beta$ is

$$\\beta = \\frac{\\partial S}{\\partial P} = \\frac{\\partial W}{\\partial P} - t = \\frac{1}{\\omega}\\arcsin\\frac{q}{A} - t.$$

Solving for $q$:

$$q = A\\sin(\\omega(t + \\beta)) = \\sqrt{\\frac{2P}{k}}\\sin(\\omega(t + \\beta)).$$

This is the familiar sinusoidal solution, with amplitude determined by energy and phase by $\\beta$.

The chosen positive square root describes only the portion with positive momentum and $|q|<A$. The principal arcsine inverse fixes a corresponding local phase interval. To continue through a turning point one must change momentum branch or use another generating chart; the displayed positive-root W is not one smooth global function covering the entire periodic orbit.

## Endpoint action and its boundary derivatives

Suppose a family of stationary paths between initial and final configurations depends smoothly on its endpoints and times on a stated region. Let $\\mathcal S$ be their evaluated action. Varying the action gives no interior term because Euler–Lagrange holds. The endpoint contribution is
$$
\\delta\\mathcal S=p_1\\cdot\\delta q_1-H_1\\delta t_1
-p_0\\cdot\\delta q_0+H_0\\delta t_0.
$$
To check a moving terminal time, the variation at the old time is $\\delta q_1-v_1\\delta t_1$, while the changed integration limit contributes $L_1\\delta t_1$. Their sum is $p_1\\delta q_1-(p_1v_1-L_1)\\delta t_1$, giving the stated sign. The initial endpoint has the opposite orientation.

With the initial endpoint fixed, $\\mathcal S_{q_1}=p_1$ and $\\mathcal S_{t_1}=-H_1$, so the endpoint action satisfies the Hamilton–Jacobi equation wherever it is a smooth single branch. Existence or uniqueness of that boundary-value family is an additional hypothesis, not a consequence of assigning a symbol to its action.

**Worked example (Oscillator endpoint action and a caustic).** For frequency omega positive and a travel time T with $\\sin(\\omega T)\\ne0$, the oscillator joining q0 to q has endpoint action
$$
\\mathcal S(q,q_0,T)=\\frac{m\\omega}{2\\sin\\omega T}
\\bigl[(q^2+q_0^2)\\cos\\omega T-2qq_0\\bigr].
$$
Indeed the initial and final velocities from the oscillator solution are $\\omega(q-q_0\\cos\\omega T)/\\sin\\omega T$ and $\\omega(q\\cos\\omega T-q_0)/\\sin\\omega T$. Along that solution,
$L=(m/2)d(q\\dot q)/dt$, so the endpoint difference of $mq\\dot q/2$ gives the displayed action. Differentiating it with respect to q yields the final momentum, while minus its q0 derivative yields the initial momentum.

At an integer multiple of $\\pi/\\omega$, the endpoint equation loses dependence on initial velocity. If the final position is not the required signed initial position there is no joining oscillator trajectory; if it is, infinitely many initial velocities join those endpoints. The formula's singular denominator records that failure of this boundary chart. It does not mean every physical oscillator solution becomes singular at that time.

## Separation of variables

The Hamilton--Jacobi equation is a partial differential equation in $n + 1$ variables. When it admits **separation of variables**, we can write

$$S = \\sum_{i} W_{i}(q_{i}, P) - Et,$$

reducing the specified separated example to ordinary differential equations and quadratures. Liouville integrability of an autonomous Hamiltonian additionally requires n independent commuting time-independent first integrals on the declared region, as discussed in [Integrable Systems](integrable-systems.md). Existence of a local time-dependent complete integral alone does not establish that global conclusion.

**Common error:** The Hamilton–Jacobi function $S(q,P,t)$ is not the action functional on arbitrary paths. Along a characteristic, $dS/dt=S_q\\dot q+S_t=p\\dot q-H=L$, so the difference between its endpoint and initial values equals the path action. Equality with the endpoint value alone requires a chosen initial reference. A complete integral, an endpoint action branch and a functional on all trial paths therefore have related but distinct meanings.

## A free-particle graph can form a caustic

Caustics can occur even when the Hamiltonian trajectory is globally smooth.
Take a free particle on the real line and an initial action
$S_0(q)=-mq^2/(2\\tau)$ with τ>0. Its initial momentum field is the
configuration derivative, p₀=−mq₀/τ. The exact characteristic starting at
q₀ therefore has constant momentum p₀ and position
$$q(t)=q_0(1-t/\\tau).$$
Every characteristic reaches position zero at time τ. They arrive with
different momenta, so they are different states in phase space and never
violate uniqueness of Hamilton's initial-value equations. What fails is the
projection of this evolving momentum graph onto the position coordinate.

Before the focusing time, solve for q₀ from the displayed relation and
express momentum as p=−mq/(τ−t). Integrating with respect to q and
using the Hamilton–Jacobi equation gives the branch
$$S(q,t)=-\\frac{mq^2}{2(\\tau-t)},\\qquad t<\\tau.$$
Direct differentiation verifies Sₜ+(S_q)²/(2m)=0 and the prescribed initial
action. The configuration Hessian grows without bound as the focus is
approached. At the focus, the phase-space image is still a smooth line,
but above the one configuration point it contains every momentum in the
family. It cannot be the graph of a single finite-valued momentum derivative
there.

For later times a graph representation is again possible away from the
singular focusing time by solving the same linear characteristic relation.
That does not provide one smooth classical Hamilton–Jacobi solution through
the caustic. Alternative generating charts or weaker solution concepts answer
different continuation questions, and should not be silently substituted for
the classical branch theorem used here.

The example separates two kinds of invertibility. Hamiltonian evolution on
the full phase space is invertible for every finite time in this free
model. The map from initial position labels to current positions is not
invertible at the focus because the chosen initial momenta depend on those
labels. A nondegeneracy condition on a complete integral or endpoint action
is precisely what permits recovering the intended family from configuration
coordinates. Its failure need not signal a singular physical force or a
failure of the underlying ordinary differential equation.

In this example the label-to-position derivative is one minus t/τ.
It vanishes at the focus and changes sign across it, while the
full phase-space trajectory derivative still contains the nonzero
momentum-label derivative. Losing rank after projection is therefore
an explicit coordinate calculation, not a claim that Hamiltonian
volume has collapsed. This distinction is useful whenever an action
representation becomes singular: inspect the projection used by the
generating function before interpreting the singularity as a physical
failure of motion.

When using an action field to reconstruct trajectories, record the region
where that graph is single valued and its projection is nonsingular.
Several trajectories may share a configuration while having different
velocities. A configuration drawing alone cannot distinguish that ordinary
phase-space situation from an invalid intersection of identical full states.

## The energy derivative reconstructs the travel clock

On a one-dimensional allowed interval
with nonzero momentum, a separated
action has momentum p equal to
one signed square root of 2m(E−V).
Differentiating its square relation
with respect to E gives pE=m/p.
The energy derivative of the spatial
action integral is therefore the
integral of reciprocal velocity,
which is the elapsed travel time
on that signed branch.

This explains the integration constant
in the separated Hamilton–Jacobi
solution as a clock reference.
It also identifies a limitation:
at a turning point the momentum
vanishes and the displayed derivative
is singular. An ordinary simple
turning point can still have a
finite time integral, so singular
integrand does not mean infinite
travel time. Continue through adjacent
branches with the appropriate sign
and convergence argument. A separatrix
can instead have divergent travel
time. The quadrature and its endpoint
hypotheses determine which conclusion
holds, rather than the formal
separated notation alone.

## Practice exercises

### Exercise 1
<a id="hamilton-jacobi-theory-ex-1"></a>

For a particle in one dimension with $H = p^{2}/(2m) + V(q)$, show that Hamilton's equations are equivalent to Newton's second law.

<details>
<summary>Hint 1</summary>

Write both first-order Hamilton equations.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the position equation and substitute the momentum derivative.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Hamilton's equations give $\\dot{q} = p/m$ and $\\dot{p} = -V'(q)$. Differentiating the first: $\\ddot{q} = \\dot{p}/m = -V'(q)/m$. Multiplying by $m$: $m\\ddot{q} = -V'(q) = F$, which is Newton's second law.

</details>

### Exercise 2
<a id="hamilton-jacobi-theory-ex-2"></a>

Compute the Poisson brackets $\\{q, p\\}$, $\\{q, q\\}$, and $\\{p, p\\}$ for a one-dimensional system.

<details>
<summary>Hint 1</summary>

Apply the coordinate derivatives in the definition directly.

</details>
<details>
<summary>Hint 2</summary>

Each coordinate depends on only one of q and p.

</details>
<details>
<summary>Full solution</summary>

**Solution.** $\\{q, p\\} = (\\partial q/\\partial q)(\\partial p/\\partial p) - (\\partial q/\\partial p)(\\partial p/\\partial q) = 1 \\cdot 1 - 0 \\cdot 0 = 1$. Similarly, $\\{q, q\\} = 0$ and $\\{p, p\\} = 0$.

</details>

### Exercise 3
<a id="hamilton-jacobi-theory-ex-3"></a>

Show that for any function $f(q, p, t)$, $df/dt = \\{f, H\\} + \\partial f/\\partial t$. Hence show that if $f$ has no explicit time dependence and $\\{f, H\\} = 0$, then $f$ is conserved.

<details>
<summary>Hint 1</summary>

Differentiate the observable along the trajectory with the ordinary chain rule.

</details>
<details>
<summary>Hint 2</summary>

Insert both Hamilton equations before collecting the bracket terms.

</details>
<details>
<summary>Full solution</summary>

**Solution.** By the chain rule, $df/dt = \\sum_{i}(\\partial f/\\partial q_{i}\\dot{q}_{i} + \\partial f/\\partial p_{i}\\dot{p}_{i}) + \\partial f/\\partial t$. Using Hamilton's equations, $\\dot{q}_{i} = \\partial H/\\partial p_{i}$ and $\\dot{p}_{i} = -\\partial H/\\partial q_{i}$. Substituting gives $df/dt = \\sum_{i}(\\partial f/\\partial q_{i}\\partial H/\\partial p_{i} - \\partial f/\\partial p_{i}\\partial H/\\partial q_{i}) + \\partial f/\\partial t = \\{f, H\\} + \\partial f/\\partial t$. If $\\partial f/\\partial t = 0$ and $\\{f, H\\} = 0$, then $df/dt = 0$.

</details>

### Exercise 4
<a id="hamilton-jacobi-theory-ex-4"></a>

A particle of mass $m$ moves in a central potential $V(r) = -k/r$ in two dimensions. Write the Hamiltonian in polar coordinates and identify a conserved quantity other than energy.

<details>
<summary>Hint 1</summary>

Retain the polar mass factor in angular kinetic energy.

</details>
<details>
<summary>Hint 2</summary>

An angle absent from the Hamiltonian has conserved conjugate momentum.

</details>
<details>
<summary>Full solution</summary>

**Solution.** In polar coordinates, $H = \\frac{1}{2m}\\left(p_{r}^{2} + \\frac{p_{\\phi}^{2}}{r^{2}}\\right) - \\frac{k}{r}$. Since $\\phi$ is cyclic, $p_{\\phi}$ is conserved. This is the angular momentum $L_{z} = mr^{2}\\dot{\\phi}$.

</details>

### Exercise 5
<a id="hamilton-jacobi-theory-ex-5"></a>

Solve the Hamilton--Jacobi equation for a particle falling vertically in a uniform gravitational field: $H = p^{2}/(2m) + mgq$.

<details>
<summary>Hint 1</summary>

Separate time as minus energy times time.

</details>
<details>
<summary>Hint 2</summary>

Integrate the resulting momentum square root on one permitted position branch.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The Hamilton--Jacobi equation is $\\frac{1}{2m}(\\partial S/\\partial q)^{2} + mgq + \\partial S/\\partial t = 0$. With $S = W(q, P) - Pt$:

$$\\frac{1}{2m}\\left(\\frac{dW}{dq}\\right)^{2} + mgq = P \\quad \\Longrightarrow \\quad \\frac{dW}{dq} = \\sqrt{2m(P - mgq)}.$$

Integrating: $W = -\\frac{1}{3m^{2}g}(2m(P - mgq))^{3/2}$. Then $\\beta = \\partial S/\\partial P = \\partial W/\\partial P - t = -\\frac{1}{g}\\sqrt{\\frac{2(P - mgq)}{m}} - t$. Solving for $q$:

$$q = \\frac{P}{mg} - \\frac{g}{2}(t + \\beta)^{2}.$$

This is the familiar free-fall parabola.

</details>

### Exercise 6 — A momentum-parametrised complete integral
<a id="hamilton-jacobi-theory-ex-6"></a>

For $H=p^2/(2m)$, verify $S=Pq-P^2t/(2m)$ and reconstruct the trajectory from its parameter derivative.

<details>
<summary>Hint 1</summary>

Compute the q and t derivatives separately.

</details>
<details>
<summary>Hint 2</summary>

The derivative with respect to P is the new constant coordinate.

</details>
<details>
<summary>Full solution</summary>

Here $S_q=P$ and $S_t=-P^2/(2m)$, so the PDE holds identically. The mixed derivative is one. Setting $S_P=q-Pt/m=\\beta$ gives $q=\\beta+Pt/m$, with momentum P constant. This chart includes the zero-momentum resting solution as well as both signs of moving momentum.

</details>

### Exercise 7 — Endpoint momentum
<a id="hamilton-jacobi-theory-ex-7"></a>

Differentiate the oscillator endpoint action with respect to its final position and compare with the final velocity.

<details>
<summary>Hint 1</summary>

The travel time and initial position are held fixed.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the quadratic numerator before cancelling the factor two.

</details>
<details>
<summary>Full solution</summary>

The derivative is $m\\omega(q\\cos\\omega T-q_0)/\\sin\\omega T$. The joining oscillator solution has exactly this final velocity divided by m. Thus the derivative equals final momentum on the noncaustic branch. Its validity requires the nonzero sine denominator specified in the endpoint formula.

</details>

### Exercise 8 — A focused oscillator family
<a id="hamilton-jacobi-theory-ex-8"></a>

Start an oscillator at q0=1 and prescribe travel time $T=\\pi/\\omega$. Which final positions are possible, and how many initial velocities give the possible endpoint?

<details>
<summary>Hint 1</summary>

Use the general oscillator position solution with arbitrary initial velocity.

</details>
<details>
<summary>Hint 2</summary>

At this time the sine vanishes and the cosine is minus one.

</details>
<details>
<summary>Full solution</summary>

The final position is minus one independently of initial velocity. No initial velocity reaches any other prescribed final position at that time. Every real initial velocity reaches minus one, giving a nonunique joining family. The ordinary initial-value evolution is still smooth; the endpoint generating chart has lost invertibility.

</details>

### Exercise 9 — Counting parameters is insufficient
<a id="hamilton-jacobi-theory-ex-9"></a>

For a free particle inspect $S(q,P,t)=P^2q-P^4t/(2m)$. Where is its mixed derivative nondegenerate, and why does it not globally parametrise every momentum?

<details>
<summary>Hint 1</summary>

First check that it really solves the PDE.

</details>
<details>
<summary>Hint 2</summary>

Its momentum is the square of its parameter.

</details>
<details>
<summary>Full solution</summary>

The q derivative is $P^2$ and time derivative is $-P^4/(2m)$, so the PDE holds. But $S_{qP}=2P$, vanishing at P zero. On either half-line of nonzero parameter it is a valid local chart covering positive momenta, while negative momenta are never represented. One written parameter is not a guarantee of one globally independent phase coordinate.

</details>

### Exercise 10 — Falling-particle branch
<a id="hamilton-jacobi-theory-ex-10"></a>

In Exercise 5 the chosen W derivative is positive. Which time branch of its reconstructed parabola satisfies that choice, and how is the descending branch described?

<details>
<summary>Hint 1</summary>

Differentiate the reconstructed position to find momentum.

</details>
<details>
<summary>Hint 2</summary>

The positive square root must match the sign of that momentum.

</details>
<details>
<summary>Full solution</summary>

The momentum is $-mg(t+\\beta)$, so the positive-root W describes the ascending portion with $t+\\beta<0$. At the turning point it reaches zero and this smooth energy chart fails. The descending portion uses the negative-root W, with the corresponding local parameter relation. The same physical parabola continues smoothly, but not through one unchanged positive-root generating branch.

</details>

<a id="connections"></a>
## Summary and continuation

Hamilton–Jacobi theory turns a nondegenerate smooth generating function into local Hamiltonian trajectories. Endpoint derivatives identify momenta and energy, while caustics and turning points explain why one generating branch need not remain global. The [symplectic chapter](symplectic-geometry.md) develops the geometric structure and [integrable systems](integrable-systems.md) states the additional hypotheses needed for global commuting integrals.

There is also a formal semiclassical connection. In a region with a smooth nonzero-amplitude ansatz $\\psi=a\\exp(iS/\\hbar)$ for the scalar Schrödinger equation, matching the leading phase terms gives $S_t+\\|\\nabla S\\|^2/(2m)+V=0$. This is a formal WKB expansion; it is not a universal rigorous convergence statement as Planck's constant tends to zero. Caustics, interference and amplitude errors require further analysis in the quantum-mechanics treatment.

Taylor’s *Classical Mechanics* and Goldstein, Poole and Safko’s *Classical Mechanics* are comparison references. The local complete-integral and endpoint-action arguments above are original Euler exposition.
`;export{e as default};