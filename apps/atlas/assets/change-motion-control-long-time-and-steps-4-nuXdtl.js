var e=`---
id: deep-dive-change-motion-control-long-time-and-steps
title: "Change and motion: control, long times and numerical steps"
license: CC BY-SA 4.0
---

# Change and motion: control, long times and numerical steps

Once a model has a well-defined solution, several different questions remain. Can an input steer it? Can measurements determine its state? Does an average describe one orbit or a whole distribution? Does a numerical rule preserve the behaviour being studied? These questions have different hypotheses. The worked arguments below use elementary differentiation; the broad research theorems remain explicitly imported orientation.

Before reading: [State, rules and futures](/resources/library:deep-dive-change-motion-state-and-futures/), [Differentiation techniques](/resources/calculus:06/).

## 6. Control and observation

A natural system evolves, but an engineered system also accepts an input u and produces a measured output y:

$$\\dot x=Ax+Bu,\\qquad y=Cx.$$

Here $x$ is the state vector, $u$ the input and $y$ the measured output. The fixed linear maps $A,B,C$ have compatible dimensions. The equations describe an ideal linear model on its declared domain; they do not assert that every physical system is linear.

**Control theory** asks whether inputs can steer the state and whether feedback can make desired behaviour stable. **Controllability** means that, in the declared ideal linear model over an allowed time interval, inputs can reach every state direction. It does not promise small fuel, actuator feasibility, robustness, or safety.

**Observability** asks whether the initial internal state can be reconstructed from the output history and known input. It is not the same as putting one sensor on every state. Dynamics can carry hidden information into a measured coordinate, or they can keep a mode permanently invisible.

For a two-state model, the columns B and AB form a controllability table. If they point in two independent directions, the system is controllable. The rows C and CA form a corresponding observability table. The [stability and control deep dive](#/item/deep-dive-stability-control-observability) derives these tests.

Feedback uses measurements or estimated states to choose input. Negative feedback can stabilize a balancing task, but excessive delay, saturation, noise, or a bad model can reverse the benefit. A closed-loop eigenvalue calculation is exact only for the stated linear, time-invariant, unsaturated model.

## 7. Deterministic chaos is not randomness

A deterministic rule can amplify tiny differences. In a chaotic system, nearby starting points may separate approximately exponentially for a while. A positive **Lyapunov exponent** records an average rate of infinitesimal separation along specified directions and with respect to specified trajectories or measures.

Chaos is not simply:

- complicated appearance;
- measurement noise;
- a large period;
- a single positive finite-time estimate;
- every unpredictable process.

The logistic map, which repeatedly applies x next = r x(1-x), illustrates period doubling and sensitivity in the [road-to-chaos lab](#/labs?lab=visual-lab-logistic-map). Some parameter values have stable periodic cycles; others have chaotic invariant sets; periodic windows occur inside chaotic-looking regimes. A numerical orbit stored with finite precision eventually repeats because a computer has only finitely many states.

Randomness describes a probability model. Chaos describes properties of deterministic dynamics. They can interact: noisy chaotic systems are important, and probability measures help describe deterministic long-time behaviour, but one word does not imply the other.

## 8. Time averages and ergodicity

Suppose a trajectory records temperature every second. Its long-time average is an average along one orbit. A spatial or **ensemble average** averages over states according to a probability measure. **Ergodic theory** asks when these two viewpoints agree for typical starting states.

First the measure must be invariant: evolving a distribution of states must leave that distribution unchanged. Second, ergodicity says that invariant subsets have no intermediate probability; the system does not split into two positive-probability regions that never communicate. Under measure-preserving hypotheses, Birkhoff’s theorem says that time averages of an integrable observable exist for almost every start. If the measure is ergodic, that limit equals the space average almost everywhere.

Return to circular rotation. Along a circle of radius R, the time average of x squared is R squared divided by 2. This agrees with the uniform average around that particular circle. But different circles never mix. For area measure on a disk, the radius identifies nontrivial invariant regions, so the flow is not ergodic for that measure. One correct average for one observable does not establish ergodicity.

**Mixing** is stronger: widely separated observations become asymptotically decorrelated for suitable sets or functions. **Recurrence** says typical points return arbitrarily close under finite invariant measure. Chaos, ergodicity, mixing, recurrence, and positive entropy are connected in important examples but are not synonyms. The [chaos and ergodicity deep dive](#/item/deep-dive-chaos-ergodicity-long-time) keeps their quantifiers separate.

## 9. Fourier modes and least-action ideas

Some problems become simpler after changing coordinates. A vibrating string fixed at both ends can be decomposed into sine-wave shapes. Each shape evolves with its own frequency. **Fourier methods** turn a spatial PDE into a family of time-dependent ODEs for mode amplitudes.

The shapes are not chosen because all waves literally contain tiny physical sine waves. They form an orthogonal coordinate system adapted to the boundary operator. Convergence depends on the function space and the meaning of solution. A Fourier series may converge pointwise, in mean square, weakly, or not uniformly; these are different statements.

Another viewpoint asks which entire path makes a quantity stationary. The shortest route makes length stationary; a soap film reduces area; mechanics uses an action built from kinetic and potential energy. The **calculus of variations** derives Euler–Lagrange differential equations from such pathwise optimization. “Stationary” does not automatically mean “minimum”: maxima and saddle paths also satisfy first-variation equations, and constraints and boundary terms matter.

## Worked example: a numerical step changes the model’s behaviour

Euler’s method takes a short step in the current velocity direction:

$$x_{n+1}=x_n+h f(x_n).$$

Here $f(x_n)$ is the current model’s velocity at state $x_n$, and $h$ is the time step. The update is a new discrete rule, so its long-time behaviour needs its own analysis.

For x'=-x, x(0)=1, and step size 1/2, Euler gives 1, 1/2, 1/4, 1/8 at times 0, 1/2, 1, 3/2. The exact values are about 1, 0.607, 0.368, 0.223. The method follows the right qualitative direction but accumulates error.

A numerical audit asks:

1. Is the model itself identified and dimensionally consistent?
2. Does a solution exist and is it unique over the requested interval?
3. Is the method stable for the equation’s time scales?
4. Does halving the step change the reported quantity as predicted?
5. Are conserved or monotone quantities respected closely enough?
6. Are events, boundaries, discontinuities, and stiffness handled?
7. Is the claim about a short trajectory, a long-time statistic, or the actual continuum problem?

Step-halving is evidence, not a proof of correctness. Two wrong computations can agree, especially after coding the same wrong equation. Compare an independent method, exact benchmark, residual, invariant, or bound when possible. The [model and solver audit recipe](#/item/recipe-differential-model-solver-audit) gives a reusable workflow.

## 11. A connected first route

Use the following sequence when meeting a new evolution problem:

1. Name the state variables, units, time and spatial domains.
2. State the mechanism and every boundary or initial condition.
3. Test equilibria, invariants, signs, and limiting cases before solving.
4. Ask what theorem gives existence, uniqueness, and continuation.
5. Draw a phase portrait or inspect modal structure.
6. Separate stability, control authority, measurement visibility, and robustness.
7. When studying long times, name the invariant measure and observable.
8. Audit the numerical method against refinements and structure.

The goal is not to distrust equations. It is to know exactly which promise each equation and theorem makes.

## Exercise 1: Stable but not attracting

For x'=-y and y'=x, explain why a start at distance 0.01 from the origin never moves farther away, yet never approaches the origin.

**Hint 1.** Inspect the squared distance instead of following each coordinate separately.

**Hint 2.** Differentiate the sum of the two squares using the stated rate rules. What does a zero rate imply for a nonzero starting distance?

**Solution.** Differentiate x squared plus y squared using the rate rules: its rate is 2x(-y)+2y(x)=0. Thus squared distance stays exactly 0.0001. Every sufficiently near start remains equally near, so the origin is stable. The unchanged positive distance prevents convergence, so it is not asymptotically stable.

## Exercise 2: A long-time average

On a unit circular rotation, the time average of x squared is 1/2. Does that prove the flow is ergodic for uniform area on the unit disk?

**Hint 1.** Ask whether every positive-probability invariant part of the disk is visited by one orbit.

**Hint 2.** Use preservation of radius to construct an invariant subset with area probability strictly between zero and one.

**Solution.** No. Every radius is preserved, so an inner disk of radius 1/2 is invariant and has area probability 1/4, neither zero nor one. That nontrivial invariant set rules out ergodicity for area measure. The stated average concerns one observable on one invariant circle.

## Exercise 3: Euler audit

Euler’s method for x'=-2x with step h gives x next = (1-2h)x. What happens for h=1/4 and h=1?

**Hint 1.** Keep the multiplier of the current state as a function of the step size.

**Hint 2.** Compare its magnitude with one, and inspect its sign separately. Decay of the exact differential equation does not choose the numerical step for you.

**Solution.** At h=1/4 the multiplier is 1/2, so approximations decay with the correct sign. At h=1 the multiplier is -1, so the approximation alternates forever even though the exact solution decays to zero. A stable differential equation can be made numerically unstable by an unsuitable step and method.

## Summary

Use an invariant to distinguish stability from attraction, separate an orbit average from ergodicity, and inspect Euler’s amplification factor before trusting a trajectory.
`;export{e as default};