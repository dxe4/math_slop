var e=`---
id: visual-lab-vector-fields
title: "Vector Fields and Flow Lines"
level: advanced-undergraduate
estimated_minutes: 45
license: CC BY-SA 4.0
---

# Vector Fields and Flow Lines

A system of ordinary differential equations does not initially give a path. It gives a local rule: at every state, which way and how fast should the state move? A vector field displays that rule; numerical integration joins the local instructions into trajectories.

[Open the runnable vector-field experiment](#/labs?lab=visual-lab-vector-fields)

## Reading a phase portrait

For an autonomous planar system

$ẋ = F(x,y), ẏ = G(x,y)$,

the pair $(F,G)$ is the velocity at $(x,y)$. The horizontal axis is a state variable, not necessarily physical position, and the vertical axis is the second state variable. Time is implicit: a solution moves along a curve as time increases.

In the experiment:

- arrows show normalized velocity direction; their colour intensity hints at speed;
- coloured points are initial conditions;
- bright curves integrate forward in time;
- faint curves integrate backward;
- the numerical solver is fourth-order Runge–Kutta (RK4).

Click anywhere to seed another solution. All four implemented vector fields are smooth, hence locally Lipschitz in the state. The local existence-and-uniqueness theorem therefore applies: two exact solution curves meeting at a state agree wherever their time-shifted solutions both exist. They may describe the same orbit; distinct orbits cannot cross. Intersections of finite numerical curves are not evidence against this theorem.

## Investigation 1 — A conserved radius

Choose the linear centre

$ẋ=-\\omega y, ẏ=\\omega x$.

Every arrow is perpendicular to the position vector. Differentiate the squared radius:

$d/dt (x^{2}+y^{2}) = 2x ẋ + 2y ẏ = 2x(-\\omega y)+2y(\\omega x)=0$.

Thus $x^{2}+y^{2}$ is conserved. For $\\omega\\ne0$, nonzero states move on circles with period $2\\pi/|\\omega|$; the origin is stationary. The interface restricts $\\omega$ to positive values from 0.25 to 2.5. If zero were allowed, every state would instead be stationary; a negative value would reverse orientation. Change the positive angular speed: the geometric orbits remain unchanged, although traversal time changes. A phase portrait can hide timing information.

Seed two points on the same ray at different radii. Then seed two points on the same circle. State precisely which pairs share an orbit and which merely share an angular phase.

## Investigation 2 — Stable and unstable directions

Choose the linear saddle

$ẋ=\\lambda x, ẏ=-\\lambda y$.

It has the explicit solution

$x(t)=x_{0}e^{\\lambda t}, y(t)=y_{0}e^{-\\lambda t}$.

For $\\lambda>0$, as enforced by the interface range 0.25 to 2.5, the y-axis is stable forward in time and the x-axis is unstable. Non-axis trajectories have distance to the y-axis tending to zero backward in time and distance to the x-axis tending to zero forward in time, while their other coordinate grows without bound. This is approach to an axis, not convergence to a finite point on it. Negative $\\lambda$ would exchange the stable and unstable directions; zero would make every point stationary.

Multiply the two solution coordinates:

$x(t)y(t)=x_{0}y_{0}$.

So non-axis trajectories lie on hyperbolas. Use the experiment to verify both invariants: the coordinate axes stay fixed and each coloured path resembles one branch of $xy=constant$.

This local pattern appears near a nonlinear equilibrium whenever the Jacobian has real eigenvalues of opposite signs.

## Investigation 3 — A self-sustaining oscillation

Choose the Van der Pol system

$ẋ=y, ẏ=\\mu (1-x^{2})y-x$, with $\\mu >0$.

Seed one nonzero state close to the origin and another far away. The finite paths suggest attraction toward the same isolated closed orbit, unlike the family of circles in the linear centre. For this classical equation with $\\mu>0$, the existence, uniqueness and attraction theorem for its **stable limit cycle** uses the Liénard theory; these conclusions do not follow from an RK4 picture or from Poincaré–Bendixson alone. The exact origin stays at its equilibrium. Use the [limit-cycle chapter](#/item/library:book-dynamical-systems-first-course:limit-cycles-poincare-bendixson) for the hypotheses of the planar existence theorem and the distinction between existence and uniqueness.

The term $\\mu (1-x^{2})y$ supplies the mechanism. When $|x|<1$, it acts like negative damping and pumps small motion. When $|x|>1$, it removes energy from large motion. The balance selects a preferred oscillation amplitude.

Increase $\\mu$ from $0.1$ toward $3$. The orbit becomes less sinusoidal and develops slow segments joined by fast jumps, a first view of relaxation oscillation.

## Investigation 4 — Pendulum energy and damping

In phase variables $(\\theta ,\\omega )$, the damped pendulum obeys

$\\theta ̇=\\omega , \\omega ̇=-\\sin \\theta -c\\omega$.

With $c=0$, define energy

$E(\\theta ,\\omega )=\\omega ^{2}/2 + 1-\\cos \\theta$.

Differentiation gives $dE/dt=0$. Closed curves represent swinging motions; open curves represent complete rotations. The boundary passing through the unstable upright equilibrium is a **separatrix**.

For $c>0$, the same calculation gives

$dE/dt = -c\\omega ^{2} \\le 0$.

This inequality alone proves that energy is nonincreasing; it does not prove that every trajectory spirals or converges to a downward rest state. For a precise local attraction claim, choose a connected energy sublevel $E\\le a$ with $0<a<2$ around one downward equilibrium, with $c>0$. It is compact and forward invariant. The only trajectory that stays entirely in the zero-dissipation set $\\omega=0$ in this region is the downward equilibrium, since $\\dot\\omega=-\\sin\\theta$. The invariant-set principle then gives convergence there. This principle is an additional theorem, developed in the [Lyapunov chapter](#/item/library:book-dynamical-systems-first-course:lyapunov-functions). On the full phase plane, upright equilibria and their stable manifolds are exceptions to attraction to downward rest. Outside this specified region, decreasing energy alone does not classify the orbit. The conservative separatrix is the energy-two boundary; positive damping destroys its role as an invariant energy level. Compare $c=0$, $0.12$, and $0.8$ while retaining these qualifications.

## What RK4 contributes

Euler's method uses one tangent per step and has global error proportional to the step size. RK4 samples four related slopes:

$k_{1}=f(y_{n})$, two midpoint slopes $k_{2},k_{3}$, and an endpoint slope $k_{4}$.

Their weighted average advances the state with global error proportional to the fourth power of the step size for smooth problems. It is accurate, but not magical: long integrations can drift from conserved quantities, and stiff equations may require specialised solvers.

The linear-centre circles provide a diagnostic. If a numerical trajectory visibly spirals with a supposedly conservative rule, numerical error—not the differential equation—created the drift.

## Challenges

1. Use the saddle's explicit solution to prove $xy$ is constant without differentiating the product.
2. For the linear centre, find the period as a function of $\\omega$.
3. Seed nearby Van der Pol trajectories inside and outside the limit cycle. Describe attraction geometrically without claiming their points synchronize in time.
4. Derive $dE/dt=-c\\omega ^{2}$ for the pendulum carefully.
5. Explain why normalizing arrows helps reveal direction but hides quantitative speed. Which other parts of the interface restore that information?

## Accessible route and solver boundary

All system and integration choices use labelled native controls. Focus the phase portrait, move the coral cursor with the arrow keys, and press Enter or Space to seed a trajectory; Home selects the origin, Delete removes the last seed, and R restores the preset. The initial-condition table gives every seed and its exact instantaneous velocity without relying on arrow direction or colour. Trajectories are finite RK4 approximations with a fixed integration budget. They may drift from invariants or miss stiff behavior, so use analytic solutions, conserved quantities, and step refinement to check any conclusion drawn from their shape.
`;export{e as default};