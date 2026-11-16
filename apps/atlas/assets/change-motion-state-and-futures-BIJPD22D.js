var e=`---
id: deep-dive-change-motion-state-and-futures
title: "Change and motion: state, rules and futures"
license: CC BY-SA 4.0
---

# Change and motion: state, rules and futures

A changing quantity needs a clock, a state and a rule. Those choices come before solving an equation. This first reading uses rates as instructions and develops an exact tank model. Descriptions of spatial equations are orientation; their full existence and regularity theorems belong to the linked books. The optional nonuniqueness calculation supplies its quadratic rate directly.

Before reading: [Graphing stories](/resources/library:book-algebra-from-stories:graphing-stories/).

## Worked example: state, clock and a well-mixed tank

Imagine a tank containing 100 litres of water. Clean water flows in at 5 litres per minute and well-mixed water flows out at the same rate. Let q be the grams of salt currently in the tank. The concentration is q/100 grams per litre, so salt leaves at

$$5(q/100)=q/20\\quad\\text{grams per minute}.$$

The changing quantity is q, the clock is measured in minutes, and the rule is

$$\\text{rate of change of }q=-q/20.$$

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

$$\\text{rate of change of }x=2x.$$

At x=1 the arrow points upward with slope 2. At x=2 it is twice as steep. At x=0 it is horizontal. Starting at x=1 produces one exponential growth curve. For this locally Lipschitz rule, uniqueness prevents two solution curves from crossing: if they met at the same time and state, the uniqueness theorem would give them the same local continuation. The next example shows why that hypothesis matters.

That non-crossing conclusion needs regularity. Compare

$$\\text{rate of change of }x=\\sqrt{|x|},\\qquad x(0)=0.$$

One solution stays at zero. Another can wait at zero until any chosen time a and then leave along a suitable parabola. The rule is continuous, so solutions exist, but its slope as a function of x is too sharp at zero to force uniqueness. “A differential equation determines the future” is therefore not a definition; it is a theorem whose assumptions matter.

A common local theorem says: if the velocity rule f(t,x) is continuous near an initial point and changes no faster than a fixed multiple of changes in x there, then the initial-value problem x'=f(t,x) has one local solution. The second condition is called a **Lipschitz condition in the state**. It is stronger than continuity. Local means the theorem promises some time interval, not eternal existence.

Even a perfectly smooth rule can have a finite escape time. The equation x'=x squared, started at x=1, has solution 1/(1-t), which becomes unbounded as t approaches 1. Smoothness gives local uniqueness, not a global bound.

## 4. Pictures without closed formulas

For two state variables x and y, the equation supplies an arrow at every point of a plane. The collection is a **vector field**. A **trajectory** follows those arrows, and a **phase portrait** displays many trajectories at once without making time a third axis.

Consider

$$x'=x,\\qquad y'=-y.$$

Along the x-axis, points move away from the origin. Along the y-axis, points move toward it. For most starts, one coordinate shrinks while the other eventually grows. The origin is a **saddle**: it attracts along one direction and repels along another. A picture that shows only the attracting y-axis would give a disastrously incomplete impression.

Now consider

$$x'=-y,\\qquad y'=x.$$

The velocity is perpendicular to the position vector, so x squared plus y squared does not change. Trajectories are circles. The origin is stable in the sense that nearby starts remain nearby, but it is not **asymptotically stable** because nonzero trajectories do not approach it. Stability and attraction are distinct claims.

The [existing vector-field laboratory](#/labs?lab=visual-lab-vector-fields) offers more phase portraits. A plotted path is still numerical evidence. The differential equation, a conserved quantity, or a theorem supplies the proof.

## 5. Equilibria, stability, and changing regimes

An **equilibrium** is a state where the velocity is zero. To test one, disturb it slightly:

- stable: every sufficiently small disturbance stays small;
- asymptotically stable: small disturbances stay small and eventually decay;
- unstable: some arbitrarily small disturbances eventually become noticeably large.

These definitions quantify “small.” A ten-second animation cannot prove them for all future times or all nearby starts.

Parameters can change the type or number of equilibria. In

$$x'=rx-x^3,$$

x=0 is always an equilibrium. When r is negative it attracts nearby starts. When r becomes positive, zero repels and two new attracting equilibria appear at plus or minus the square root of r. This qualitative change is a **bifurcation**. A bifurcation diagram is not merely a plot of one trajectory; it records how invariant behaviour changes as a parameter crosses a critical value.

Linearization replaces a nonlinear rule near an equilibrium by its first-order matrix. If no eigenvalue lies on the imaginary axis, that matrix often correctly determines local stability. When an eigenvalue has zero real part, the test is inconclusive. The nonlinear terms decide. Calling every zero-trace equilibrium a centre is a common error.

## Exercise 1: A cooling assumption

A model says that room temperature is fixed at 20 degrees and tea temperature T obeys rate = -k(T-20), with k positive. What sign does the rate have at T=80, at T=20, and at T=10? Name one assumption.

**Hint 1.** Compare each temperature with the fixed room temperature before applying the minus sign.

**Hint 2.** Keep the positive proportionality constant separate from the signed temperature difference; then distinguish a modelling assumption from a conclusion.

**Solution.** At 80 the difference T-20 is positive, so the rate is negative: the tea cools. At 20 the rate is zero. At 10 the difference is negative, so the rate is positive: the object warms toward the room. The model assumes, among other things, a constant room temperature and a heat-transfer rate proportional to temperature difference. It is not a model of boiling or phase change.

## Exercise 2: Two futures

Why does the rule x'=square root of |x| at x(0)=0 challenge the slogan that a rule always predicts one future?

**Hint 1.** One possible history stays at zero. Seek another that waits there before departing.

**Hint 2.** After a chosen waiting time, try a nonnegative quadratic history and check its rate, including the joining time.

**Solution.** For every waiting time $c\\ge0$, define $x_c(t)=0$ for $0\\le t\\le c$ and $x_c(t)=(t-c)^2/4$ for $t>c$. Before the join both the rate and $\\sqrt{|x_c|}$ are zero. Afterwards both equal $(t-c)/2$. At the join the two one-sided rates are zero, so the history is differentiable there too. Thus each $x_c$ obeys the same rule and starts at zero; the always-zero history also does. Distinct waiting times give distinct futures. The rule is continuous, but $\\sqrt{|x|}$ is not locally Lipschitz at zero. An existence statement therefore cannot be promoted to uniqueness.

## Summary

Explain which state, domain and hypotheses an evolution model needs; distinguish existence from uniqueness with an explicit waiting-time solution.
`;export{e as default};