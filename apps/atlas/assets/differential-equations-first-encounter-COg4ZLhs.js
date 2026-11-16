var e=`---
id: deep-dive-differential-equations-first-encounter
title: "Change, Motion, and Patterns Before the Machinery"
license: CC BY-SA 4.0
---

# Change, Motion, and Patterns Before the Machinery

Before reading: [Graphing Stories](/resources/library:book-algebra-from-stories:graphing-stories/). The focused continuation is [Change and motion: state, rules and futures](/resources/library:deep-dive-change-motion-state-and-futures/); original notes remain with this retained reading.

Focused readings: [state, rules and futures](./change-motion-state-and-futures.md), then [control, long times and numerical steps](./change-motion-control-long-time-and-steps.md). This complete earlier reading retains its original headings, exercises and saved-work identities.

A cup of tea cools. A rumour spreads through a school. A bridge vibrates. A pilot changes an aircraft’s controls. A patch of dye diffuses through water. None of these stories begins with a request to “find a formula.” It begins with a state, a rule for how that state changes, and a question about what happens next.

A **differential equation** is a compact promise about change. It says which rates of change are permitted at each state, time, or location. The promise may determine one future, several futures, or no future at all. It may be exactly solvable, but usually it is more valuable to learn whether solutions exist, whether nearby starts remain nearby, which patterns persist, and what a numerical approximation can honestly support.

This encounter assumes no calculus. Slopes are treated as instructions such as “rise two units during the next unit of time.” Later resources make limits and derivatives precise. The route continues through the [standard course](#/item/course-differential-equations-dynamics-standard), the [book](#/item/book-differential-equations-verified-dynamics), and the [live flow and feedback audit](#/labs?lab=visual-lab-linear-dynamics-audit).

## 1. State, clock, and rule

Imagine a tank containing 100 litres of water. Clean water flows in at 5 litres per minute and well-mixed water flows out at the same rate. Let q be the grams of salt currently in the tank. The concentration is q/100 grams per litre, so salt leaves at

$$
5\\left(\\frac q{100}\\right)=\\frac q{20}\\quad\\text{grams per minute}.
$$

The changing quantity is q, the clock is measured in minutes, and the rule is

$$
\\text{rate of change of }q=-\\frac q{20}.
$$

The minus sign is not an instruction to make q negative. It says that positive salt amounts decrease. If q is 40 grams now, the instantaneous loss rate is 2 grams per minute. After some salt leaves, the rate is smaller. Repeatedly subtracting 2 forever would therefore be the wrong model.

Four modelling choices are already hidden in the equation:

- the tank volume stays at 100 litres;
- mixing is effectively instantaneous;
- incoming water has no salt;
- flow rates do not change with time.

An equation can be solved perfectly and still answer the wrong physical question when one of those choices is poor. Units are an early warning system: q/20 has units grams per minute only because 20 has units minutes.

An **initial condition**, such as q(0)=40, says where the process starts. A **solution** is an entire time-history that obeys both the rate rule and the initial condition. For this model the history is exponential decay: after every 20 ln 2 minutes the salt amount halves. The exact formula is useful, but so is the qualitative conclusion that q remains positive and approaches zero without crossing it.

## 2. One clock or an entire region?

An **ordinary differential equation**, or ODE, follows finitely many state variables through one independent clock. The salt amount, a pendulum’s angle and speed, or two competing populations can be described this way.

A **partial differential equation**, or PDE, follows a field that varies over space as well as time. Temperature u(x,t) depends on position x and time t. A heat equation says that sharp temperature peaks flatten because the local time rate is related to spatial curvature. A wave equation says that displacement accelerates according to curvature, allowing signals to travel rather than merely smooth.

The equation alone is rarely the whole problem. A PDE needs a region, initial data, and boundary information. A metal rod insulated at both ends behaves differently from a rod whose endpoints are clamped at fixed temperatures. A wave on a loop has different permitted patterns from a wave on a string fixed at both ends.

Three broad equation types organize expectations:

| type | prototype | typical behaviour |
|---|---|---|
| elliptic | equilibrium temperature | boundary values influence the whole interior |
| parabolic | diffusion or heat | roughness smooths and information spreads |
| hyperbolic | wave transport | signals propagate at finite characteristic speeds |

This is a guide, not a theorem without hypotheses. Nonlinear equations, irregular coefficients, corners, shocks, and weak data can change the story. The [PDE, Fourier, and variational deep dive](#/item/deep-dive-pde-fourier-variational-structure) states the missing boundaries.

## 3. Does the rule choose one future?

Draw the line of instructions

$$
\\text{rate of change of }x=2x.
$$

At x=1 the arrow points upward with slope 2. At x=2 it is twice as steep. At x=0 it is horizontal. Starting at x=1 produces one exponential growth curve. Two different solution curves cannot cross: if they met at the same time and state, the local rule would give them the same continuation.

That non-crossing conclusion needs regularity. Compare

$$
\\text{rate of change of }x=\\sqrt{|x|},\\qquad x(0)=0.
$$

One solution stays at zero. Another can wait at zero until any chosen time a and then leave along a suitable parabola. The rule is continuous, so solutions exist, but its slope as a function of x is too sharp at zero to force uniqueness. “A differential equation determines the future” is therefore not a definition; it is a theorem whose assumptions matter.

A common local theorem says: if the velocity rule f(t,x) is continuous near an initial point and changes no faster than a fixed multiple of changes in x there, then the initial-value problem x'=f(t,x) has one local solution. The second condition is called a **Lipschitz condition in the state**. It is stronger than continuity. Local means the theorem promises some time interval, not eternal existence.

Even a perfectly smooth rule can have a finite escape time. The equation x'=x squared, started at x=1, has solution 1/(1-t), which becomes unbounded as t approaches 1. Smoothness gives local uniqueness, not a global bound.

## 4. Pictures without closed formulas

For two state variables x and y, the equation supplies an arrow at every point of a plane. The collection is a **vector field**. A **trajectory** follows those arrows, and a **phase portrait** displays many trajectories at once without making time a third axis.

Consider

$$
x'=x,\\qquad y'=-y.
$$

Along the x-axis, points move away from the origin. Along the y-axis, points move toward it. For most starts, one coordinate shrinks while the other eventually grows. The origin is a **saddle**: it attracts along one direction and repels along another. A picture that shows only the attracting y-axis would give a disastrously incomplete impression.

Now consider

$$
x'=-y,\\qquad y'=x.
$$

The velocity is perpendicular to the position vector, so x squared plus y squared does not change. Trajectories are circles. The origin is stable in the sense that nearby starts remain nearby, but it is not **asymptotically stable** because nonzero trajectories do not approach it. Stability and attraction are distinct claims.

The [existing vector-field laboratory](#/labs?lab=visual-lab-vector-fields) offers more phase portraits. A plotted path is still numerical evidence. The differential equation, a conserved quantity, or a theorem supplies the proof.

## 5. Equilibria, stability, and changing regimes

An **equilibrium** is a state where the velocity is zero. To test one, disturb it slightly:

- stable: every sufficiently small disturbance stays small;
- asymptotically stable: small disturbances stay small and eventually decay;
- unstable: some arbitrarily small disturbances eventually become noticeably large.

These definitions quantify “small.” A ten-second animation cannot prove them for all future times or all nearby starts.

Parameters can change the type or number of equilibria. In

$$
x'=rx-x^3,
$$

x=0 is always an equilibrium. When r is negative it attracts nearby starts. When r becomes positive, zero repels and two new attracting equilibria appear at plus or minus the square root of r. This qualitative change is a **bifurcation**. A bifurcation diagram is not merely a plot of one trajectory; it records how invariant behaviour changes as a parameter crosses a critical value.

Linearization replaces a nonlinear rule near an equilibrium by its first-order matrix. If no eigenvalue lies on the imaginary axis, that matrix often correctly determines local stability. When an eigenvalue has zero real part, the test is inconclusive. The nonlinear terms decide. Calling every zero-trace equilibrium a centre is a common error.

## 6. Control and observation

A natural system evolves, but an engineered system also accepts an input u and produces a measured output y:

$$
A\\,\\text{state}+B\\,\\text{input}=\\text{state rate},\\qquad \\text{measured output}=C\\,\\text{state}.
$$

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

## 10. Numerical trajectories are arguments with error budgets

Euler’s method takes a short step in the current velocity direction:

$$
\\text{next state}=\\text{current state}+\\text{step size}\\times\\text{current velocity}.
$$

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

## Practice with worked solutions

### 1. A cooling assumption

A model says that room temperature is fixed at 20 degrees and tea temperature T obeys rate = -k(T-20), with k positive. What sign does the rate have at T=80, at T=20, and at T=10? Name one assumption.

**Solution.** At 80 the difference T-20 is positive, so the rate is negative: the tea cools. At 20 the rate is zero. At 10 the difference is negative, so the rate is positive: the object warms toward the room. The model assumes, among other things, a constant room temperature and a heat-transfer rate proportional to temperature difference. It is not a model of boiling or phase change.

### 2. Stable but not attracting

For x'=-y and y'=x, explain why a start at distance 0.01 from the origin never moves farther away, yet never approaches the origin.

**Solution.** Differentiate x squared plus y squared using the rate rules: its rate is 2x(-y)+2y(x)=0. Thus squared distance stays exactly 0.0001. Every sufficiently near start remains equally near, so the origin is stable. The unchanged positive distance prevents convergence, so it is not asymptotically stable.

### 3. Two futures

Why does the rule x'=square root of |x| at x(0)=0 challenge the slogan that a rule always predicts one future?

**Solution.** Remaining at zero satisfies the rule because both sides are zero. A trajectory may also remain zero for an arbitrary waiting time and then depart along a parabola chosen to satisfy the equation. Continuity supports existence, but the state dependence is not Lipschitz at zero, so uniqueness is not guaranteed.

### 4. A long-time average

On a unit circular rotation, the time average of x squared is 1/2. Does that prove the flow is ergodic for uniform area on the unit disk?

**Solution.** No. Every radius is preserved, so an inner disk of radius 1/2 is invariant and has area probability 1/4, neither zero nor one. That nontrivial invariant set rules out ergodicity for area measure. The stated average concerns one observable on one invariant circle.

### 5. Euler audit

Euler’s method for x'=-2x with step h gives x next = (1-2h)x. What happens for h=1/4 and h=1?

**Solution.** At h=1/4 the multiplier is 1/2, so approximations decay with the correct sign. At h=1 the multiplier is -1, so the approximation alternates forever even though the exact solution decays to zero. A stable differential equation can be made numerically unstable by an unsuitable step and method.
`;export{e as default};