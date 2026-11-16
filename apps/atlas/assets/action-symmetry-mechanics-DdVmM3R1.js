var e=`---
id: book-action-symmetry-mechanics
title: "Classical Mechanics: Action, Symmetry and Hamiltonian Dynamics"
level: advanced-undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Classical Mechanics: Action, Symmetry and Hamiltonian Dynamics

Newton's law $F=ma$ predicts motion from forces. Variational mechanics reorganizes the same physics around paths, scalar energy, and symmetry. That reorganization scales naturally to constrained coordinates, fields, relativity, and numerical simulation.

Begin with [Newtonian work, energy and momentum](action-symmetry-mechanics/newtonian-mechanics.md), [central forces and the Kepler problem](action-symmetry-mechanics/central-forces-kepler.md), and [oscillations and normal modes](action-symmetry-mechanics/oscillations-normal-modes.md). The [Hamiltonian velocity transform](action-symmetry-mechanics/hamiltonian-legendre-transform.md) and [canonical transformations](action-symmetry-mechanics/canonical-transformations-poisson-brackets.md) then develop the phase-space tools used by the later geometric chapters.

## From a path to a number

Let generalized coordinates be $q(t)=(q_{1},...,q_{n})$. A Lagrangian is usually

$L(q,\\dot{q},t)=T(q,\\dot{q})-V(q,t)$,

kinetic minus potential energy. The action of a path between fixed endpoint configurations is

$S[q]=\\int_{t_{0}}^{t_{1}} L(q,\\dot{q},t)\\,dt$.

The Lagrangian has energy units, so the action has energy-times-time units. In the standard fixed-endpoint principle, physical paths make the action stationary: the first-order change vanishes under sufficiently smooth endpoint-fixing perturbations. “Stationary” need not mean locally or globally minimal.

## Deriving the Euler–Lagrange equation

Perturb one coordinate by $q_{\\varepsilon}(t)=q(t)+\\varepsilon \\eta(t)$, with $\\eta(t_{0})=\\eta(t_{1})=0$. Differentiate action at $\\varepsilon=0$:

$dS/d \\varepsilon = \\int [(\\partial L/\\partial q) \\eta + (\\partial L/\\partial \\dot{q}) \\dot{\\eta}] dt$.

Integrate the second term by parts:

$\\int (\\partial L/\\partial \\dot{q}) \\dot{\\eta} dt$

$= [(\\partial L/\\partial \\dot{q})\\eta]_{t_{0}}^{t_{1}} - \\int d/dt(\\partial L/\\partial \\dot{q}) \\eta dt$.

The boundary term is zero. If the remaining integral vanishes for every smooth $\\eta$, its coefficient must vanish:

$d/dt(\\partial L/\\partial \\dot{q}) - \\partial L/\\partial q = 0$.

For several coordinates, there is one such equation for each $q_{i}$. This is the Euler–Lagrange equation.

### Worked example: projectile motion

For position $(x,y)$ near Earth's surface,

$L=(m/2)(\\dot{x}^{2}+\\dot{y}^{2})-mgy$.

For $x$, the Lagrangian has no explicit $x$ dependence:

$d/dt(m \\dot{x})=0$, so $\\dot{x}$ is constant.

For $y$:

$d/dt(m \\dot{y})-(-mg)=0$, so $\\ddot{y}=-g$.

Taking the initial time to be $t=0$, with initial position $(x_{0},y_{0})$ and velocity $(u,v)$, integration gives

$x=x_{0}+ut$, and $y=y_{0}+vt-(g/2)t^{2}$.

The familiar parabola has emerged from stationarity of a scalar functional.

## Coordinates can encode constraints

A pendulum bob constrained to a circle of radius $\\ell$ could be described with $(x,y)$ plus a constraint $x^{2}+y^{2}=\\ell^{2}$. A cleaner coordinate is its angle $\\theta$:

$x=\\ell \\sin \\theta$, $y=-\\ell \\cos \\theta$.

Then

$T=(m \\ell^{2}/2) \\dot{\\theta}^{2}$, and $V=mg \\ell(1-\\cos \\theta)$.

Euler–Lagrange gives

$m \\ell^{2} \\ddot{\\theta} + mg \\ell \\sin \\theta=0$,

or $\\ddot{\\theta}+(g/\\ell)\\sin \\theta=0$.

For small angles, $\\sin \\theta \\approx \\theta$, producing a harmonic oscillator with angular frequency $\\sqrt{g/\\ell}$. The approximation requires $\\lvert \\theta\\rvert$ well below one radian; it changes the period-amplitude relation and fails for large swings.

## Symmetry predicts conserved quantities

Define generalized momentum

$p_{i}=\\partial L/\\partial \\dot{q}_{i}$.

If $L$ does not depend explicitly on a coordinate $q_{i}$, then Euler–Lagrange says $p_{i}$ is constant. The coordinate is *cyclic*. Translational symmetry in $x$ produced conservation of horizontal momentum in the projectile example. Rotational symmetry produces angular-momentum conservation.

If $L$ has no explicit time dependence, define energy

$E=\\sum_{i} \\dot{q}_{i} p_{i}-L$.

Differentiate:

$dE/dt = \\sum_{i} [\\ddot{q}_{i} p_{i} + \\dot{q}_{i} \\dot{p}_{i}] - \\sum_{i}[(\\partial L/\\partial q_{i})\\dot{q}_{i} +(\\partial L/\\partial \\dot{q}_{i})\\ddot{q}_{i}] - \\partial L/\\partial t$.

Using $p_{i}=\\partial L/\\partial \\dot{q}_{i}$ and $\\dot{p}_{i}=\\partial L/\\partial q_{i}$, all summed terms cancel, leaving

$dE/dt=-\\partial L/\\partial t$.

Thus time-translation symmetry implies energy conservation along Euler–Lagrange solutions. More generally, Noether's theorem associates a conserved quantity with each sufficiently smooth one-parameter variational symmetry, subject to the regularity and boundary hypotheses of the theorem. If the Lagrangian changes by a total time derivative rather than remaining exactly invariant, the conserved quantity acquires the corresponding boundary-term correction.

## Hamiltonian form

When the velocity-to-momentum map can be inverted (locally, for example, when the velocity Hessian is nonsingular), the Legendre transform defines

$H(q,p,t)=\\sum_{i} p_{i} \\dot{q}_{i}-L$.

The evolution equations become

$\\dot{q}_{i}=\\partial H/\\partial p_{i}$, and $\\dot{p}_{i}=-\\partial H/\\partial q_{i}$.

For one particle with $L=m \\dot{q}^{2}/2-V(q)$, momentum is $p=m \\dot{q}$ and

$H=p^{2}/(2m)+V(q)$.

Hamiltonian form exposes phase-space geometry and motivates integrators that preserve it approximately.

## Numerical motion: preserve structure, not only local accuracy

Explicit Euler for $\\dot{q}=p/m$, $\\dot{p}=-V'(q)$ updates both from the old state. Over many oscillator periods it commonly drifts in energy. Symplectic Euler instead uses the new momentum in the position update:

\`\`\`text
for each time step:
    p <- p - h * derivative(V, q)
    q <- q + h * p / m
\`\`\`

It is only first-order accurate, yet it is symplectic. Backward-error theory can associate it with a nearby modified Hamiltonian over long but finite intervals under smoothness, boundedness, nonresonance, and step-size hypotheses; in such regular regimes the original-energy error is often bounded and oscillatory. This is not an unconditional or eternal energy bound. For orbital or molecular dynamics, qualitative geometry can matter more than a tiny one-step error.

### Worked oscillator step

Take $m=k=1$, $V(q)=q^{2}/2$, step $h=0.1$, and $(q,p)=(1,0)$. Then

$p_{\\mathrm{new}}=0-0.1(1)=-0.1$,

$q_{\\mathrm{new}}=1+0.1(-0.1)=0.99$.

The energy changes from $0.5$ to $(0.99^{2}+0.1^{2})/2=0.49505$. Exact conservation is not promised stepwise; the claim concerns controlled long-run behavior.

## Assumptions and failure modes

- Endpoint-fixing variations derive equations for a prescribed boundary problem; other boundary conditions add terms.
- A stationary path can be a maximum or saddle of action.
- Singular Lagrangians require constraint methods; the Legendre transform may not be invertible.
- Friction is not represented by a basic $T-V$ Lagrangian without additional modeling.
- Coordinate singularities, such as polar coordinates at the origin, are not physical singularities.
- Conservation laws require the stated symmetry; a time-dependent potential can exchange energy with its environment.
- Numerical conservation of energy alone does not guarantee the correct orbit or phase.

## Exercises

1. For $L=m \\dot{q}^{2}/2-kq^{2}/2$, derive the equation of motion.
2. Show that adding a constant to $V$ does not change that equation.
3. For a free particle in two dimensions, identify two cyclic coordinates and their conserved quantities.
4. Derive the pendulum's small-angle period.
5. Apply one symplectic Euler step to the oscillator above with $(q,p)=(0,1)$ and $h=0.1$.

## Answers

1. $m \\ddot{q}+kq=0$.
2. Derivatives of the constant vanish, so Euler–Lagrange is unchanged; only the energy zero shifts.
3. Both $x$ and $y$ are absent from $L=m(\\dot{x}^{2}+\\dot{y}^{2})/2$, so $p_{x}=m \\dot{x}$ and $p_{y}=m \\dot{y}$ are conserved.
4. Linearization gives $\\ddot{\\theta}+(g/\\ell)\\theta=0$, hence $T=2 \\pi \\sqrt{\\ell/g}$.
5. $p_{\\mathrm{new}}=1-0.1(0)=1$, then $q_{\\mathrm{new}}=0+0.1(1)=0.1$.

## Connections

This chapter joins **ordinary differential equations**, **calculus of variations**, **classical mechanics**, and **ode numerics**. Continue to **symplectic geometry** for phase-space invariants, **statistical mechanics** for many-particle probability, and **special relativity** for actions compatible with spacetime symmetry.

## Preparation and continuation

This L3–L4 route assumes [Calculus](/calculus/) and [Linear Algebra: Structure and Proof](/atlas/#/item/book-linear-algebra-structure-proofs). Particle mechanics and Hamilton–Jacobi theory work at L3. Symplectic geometry, momentum maps, integrability and field actions use L4 preparation stated locally. [Geometric numerical integration](numerical-mathematics-error-algorithms/geometric-numerical-integration.md) belongs to the numerical-analysis continuation.
`;export{e as default};