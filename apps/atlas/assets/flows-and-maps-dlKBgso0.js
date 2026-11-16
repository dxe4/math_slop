var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: flows-and-maps
title: "Flows and Maps: Examples"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Flows and Maps: Examples

A differential equation and an iteration rule both describe change, but they use different time sets and can have different orbit structures. Before analysing stability or chaos, we need to say what the state space is, where evolution is defined, and which changes in a trajectory are being identified. A formula that can be evaluated is not automatically a globally defined dynamical system.

This course begins after an ODE first course. Use [existence and uniqueness](../ode-first-course/existence-uniqueness-picard.md), [linear systems and the matrix exponential](../ode-first-course/linear-systems-matrix-exponential.md), and [the linear phase plane](../ode-first-course/linear-phase-plane.md) for preparation. Those last two readings are the current ODE chapters13 and14. We will use their results without rebuilding a catalogue of linear portraits. Real-analysis preparation includes [continuity](../proof-safe-real-analysis/continuity-and-uniform-continuity.md) and [compactness](../proof-safe-real-analysis/sequences-compactness.md).

## A state and a time set

**Definition 1.1 (Discrete-time system).** A map $T:X\\to X$ on a state space $X$ defines forward iterates $T^0=\\operatorname{id}$ and $T^{n+1}=T\\circ T^n$ for integers $n\\ge0$. The forward orbit of $x$ is the sequence $(T^n(x))_{n\\ge0}$, or its set of visited states when that distinction is stated.

The requirement $T(X)\\subseteq X$ is part of the model. A polynomial formula may be defined on the real line but fail to preserve a proposed physical interval. If an iterate leaves the declared domain, continuing the formula does not show that the original state-space model remained valid.

For an autonomous ODE $x'=f(x)$ on an open set $U\\subseteq\\mathbb R^d$, assume $f$ is continuously differentiable. Local existence and uniqueness give a maximal solution through each $x\\in U$, with maximal open time interval $I_x$ containing zero.

**Definition 1.2 (Local flow).** Write $\\varphi_t(x)$ for that solution at time $t\\in I_x$. The local-flow domain is
$$
\\mathcal D=\\{(t,x):x\\in U,\\ t\\in I_x\\}.
$$
A complete flow has $I_x=\\mathbb R$ for every $x$. A forward-complete system has $[0,\\infty)\\subset I_x$ for every $x$.

These are different properties. Smoothness of $f$ guarantees local uniqueness, not global existence. Escape to infinity or to the boundary of $U$ can end a maximal solution in finite time. The state space must be named when a completeness claim is made.

## Why the flow property is a theorem

**Theorem 1.3 (Composition and reversal).** A unique autonomous local flow satisfies $\\varphi_0(x)=x$ and
$$
\\varphi_s(\\varphi_t(x))=\\varphi_{s+t}(x)
$$
whenever the involved trajectory segments are defined. In particular,$\\varphi_{-t}(\\varphi_t(x))=x$ whenever the forward segment and its reverse lie in the local-flow domain.

*Proof.* Fix a solution through $x$ and a time $t$ in its interval. The shifted function $u(s)=\\varphi_{t+s}(x)$ satisfies $u'=f(u)$ and has $u(0)=\\varphi_t(x)$. Uniqueness makes it equal to the solution through that new state on the common interval. Maximal continuation gives the composition identity for the permitted segments. Setting $s=-t$ gives reversal, and the initial condition gives $\\varphi_0(x)=x$. $\\square$

The restriction to defined segments prevents using an algebraic expression on the wrong side of a blow-up. A local time map has an inverse on its actual range, but that does not make it a bijection of the entire original state space. A complete continuous flow does give a family of homeomorphisms: continuity comes from continuous dependence, and the inverse is the continuous map at negative time.

**Example 1.4 (A smooth equation that is not complete).** For $x'=x^2$ on $\\mathbb R$, separation and substitution give
$$
\\varphi_t(x)=\\frac{x}{1-tx}.
$$
For $x>0$, the maximal interval containing zero is $(-\\infty,1/x)$; for $x<0$ it is $(1/x,\\infty)$; for $x=0$ it is all of $\\mathbb R$. Thus the vector field is smooth but positive initial values blow up in finite forward time.

For fixed $t>0$, the time map is defined on $(-\\infty,1/t)$ and maps that interval onto $(-1/t,\\infty)$. It is strictly increasing because its derivative is $(1-tx)^{-2}>0$. Its inverse on that range is $\\varphi_{-t}$. At $x=1$, the expression at $t=2$ equals $-1$, but it is not a solution value through1: the maximal trajectory ended at $t=1$. Evaluating a rational formula beyond its singularity does not continue the ODE.

## Continuous dependence on a common time interval

**Theorem 1.5 (A finite-time separation bound).** Suppose two trajectories stay in a convex compact subset $K\\subset U$ on $0\\le t\\le T$, and $f$ is Lipschitz there with constant $L\\ge0$. Then
$$
\\|\\varphi_t(x)-\\varphi_t(y)\\|\\le e^{Lt}\\|x-y\\|
\\qquad(0\\le t\\le T).
$$

*Proof.* Subtract their integral equations and set $u(t)=\\|\\varphi_t(x)-\\varphi_t(y)\\|$, $a=\\|x-y\\|$. Then $u(t)\\le a+L\\int_0^tu(s)\\,ds$. For $a>0$, put $g(t)=a+L\\int_0^tu(s)\\,ds$. We have $u\\le g$, $g'\\le Lg$, and $g(0)=a$. Therefore $(e^{-Lt}g(t))'\\le0$, giving $u(t)\\le ae^{Lt}$. If $a=0$, replace $a$ by any positive $\\epsilon$ in the inequality and let $\\epsilon\\downarrow0$. $\\square$

The hypothesis is about both trajectories on a shared interval. A local rate estimate does not guarantee they remain in $K$ forever. This is a finite-time upper bound, not a statement that separation actually grows at rate $L$ or that the system is chaotic. It also explains why a long simulation can be sensitive even when every finite-time map is continuous.

If a compact region lies inside an open $C^1$ domain, derivative bounds on a suitable convex neighbourhood give a Lipschitz constant by integrating along straight segments. A nonconvex region needs care: a straight segment can leave it. Use a neighbourhood where the bound holds or a separately justified Lipschitz estimate.

## Orbits, trajectories, and equilibrium points

**Definition 1.6 (Equilibrium and periodic orbit).** An equilibrium is $a\\in U$ with $f(a)=0$; its trajectory is constant. A nonconstant trajectory is periodic if some $P>0$ satisfies $\\varphi_P(x)=x$. Its orbit is the corresponding closed set of visited states, while a trajectory includes the time parameter and starting phase.

Uniqueness prevents two autonomous trajectories from crossing transversely at the same state: after meeting that state they follow the same solution up to a shift of time. This is not the statement that distinct initial states can never lie on one orbit. Two different points on a periodic curve do exactly that.

A fixed point of a single sampled time map need not be an equilibrium. If the sampling time equals a period, every point on a nonconstant periodic orbit is fixed by that map. For a discrete map, by contrast, “fixed point” means $T(x)=x$ for that one update rule.

**Example 1.7 (Rotation and sampling).** For
$$
x'=-y,\\qquad y'=x,
$$
the solution is
$$
\\varphi_t(x,y)=(x\\cos t-y\\sin t,\\ x\\sin t+y\\cos t).
$$
The origin is the only equilibrium. Every circle of positive radius is a periodic orbit of minimal period $2\\pi$. Yet $\\varphi_{2\\pi}$ is the identity on the entire plane. Its nonzero fixed points are sampled periodic states, not equilibria of the vector field.

For the map $T=\\varphi_h$ on one circle, a point returns after $n$ updates exactly when $nh$ is an integer multiple of $2\\pi$. Hence rational $h/(2\\pi)$ gives periodic sampled orbits. An irrational ratio gives no positive integer return. The latter claim concerns nonperiodicity; density would require a further argument.

This distinction matters when a numerical output appears stationary at the sampling times. It can hide a full revolution between observations.

## Invariance includes a direction of time

**Definition 1.8 (Forward invariance).** A set $S$ is forward invariant when every solution starting in $S$ remains there for all forward times for which it is defined. If forward existence for all times is also asserted, call that out explicitly. Full invariance permits both time directions within a complete or appropriately restricted local flow.

An interval can be forward invariant because its boundary vector field points inward. The scalar order argument in the next chapter proves such statements under uniqueness. A finite collection of numerical steps staying in the interval is evidence about those steps, not a proof for every initial condition and every time.

**Example 1.9 (A complete flow on an open interval).** On $X=(0,1)$, consider $x'=x(1-x)$. Its solution is
$$
\\varphi_t(x)=\\frac{x e^t}{1-x+x e^t}.
$$
For $x\\in(0,1)$ and every real $t$, both numerator and denominator are positive, and the denominator exceeds the numerator by $1-x>0$. Therefore the value stays in $(0,1)$ for all real time: this is a complete flow on that open state space. As $t\\to\\infty$, the trajectory tends to1, which lies on the boundary and is not a state of $X$. There is no equilibrium inside $X$, so convergence to a domain boundary must not be described as attraction to an equilibrium in that domain.

If we instead take $X=[0,1]$, the same formula includes fixed endpoints0 and1 and defines a complete flow there. Changing the state space changes which limiting states are included, even though interior trajectories have the same formula.

## Maps need not be reversible

An arbitrary map $T:X\\to X$ need not be injective or onto. The logistic map $T(x)=4x(1-x)$ sends $[0,1]$ into itself but identifies $x$ and $1-x$. It has no single-valued inverse on that interval. A unique ODE flow, wherever both time directions are defined, cannot merge two different states at one fixed time.

A forward invariant set of a map may have $T(S)\\subsetneq S$. Some states then have no predecessor inside $S$. Negative iterates require an inverse or a chosen prehistory, and the two notions are not interchangeable. Symbolic dynamics later distinguishes one-sided sequences from two-sided sequences for the same reason.

Even an exact time map and a numerical update are different maps. Forward Euler for $x'=x^2$ gives $x_{n+1}=x_n+h x_n^2$. For positive $h$ it is not equal to $x_n/(1-hx_n)$, the exact time-$h$ map where that map exists. The numerical recurrence can still be algebraically evaluated after the exact solution's blow-up time; those values do not extend the original trajectory.

## Nonautonomous equations require two times

For $x'=f(t,x)$, evolution depends on the initial clock time $s$ and final time $t$. Denote it by $U(t,s)x$. Its composition law is
$U(t,s)U(s,r)=U(t,r)$ on defined segments. It generally cannot be expressed as one autonomous family depending only on $t-s$.

For example,$x'=t$ gives
$$
U(t,s)x=x+\\frac{t^2-s^2}{2}.
$$
A one-unit interval from0 to1 adds $1/2$, while one from1 to2 adds $3/2$. Equal elapsed times do not produce the same update. Adding a clock coordinate $\\tau'=1$ makes the system autonomous in the extended state $(\\tau,x)$, but that increases the dimension. If forcing is periodic, clock phase can instead be taken modulo its forcing period.

This is one reason planar theorems must not be applied to a forced two-state plot without checking the actual autonomous dimension. A projected curve can cross itself even when the extended unique flow cannot.

## Comparing dynamical descriptions

A change of coordinates $h:X\\to Y$ relates maps by $h\\circ T=S\\circ h$ when it carries each update to the other update. If $h$ is a homeomorphism, this is topological conjugacy and preserves periodic orbit structure. Injectivity is essential: a many-to-one factor can collapse distinct orbits.

For local flows, the domain restrictions and time convention must also be specified. A time-oriented orbit equivalence preserves the direction of motion without necessarily preserving the same clock. The linearisation chapter will state exactly which local result it invokes. A coordinate picture alone does not establish any such correspondence.

In every dynamical claim, record the state space, time set, domain of evolution, invariant set, and sense of equivalence. Those choices determine what stability, recurrence, and a numerical comparison can mean. The next chapter uses one-dimensional order to turn this language into strong qualitative conclusions.

## A numerical step can change reversibility

The stable scalar equation $x'=-x$ gives an especially clear comparison.
Its exact time-h map multiplies a state by $e^{-h}$. For every finite real
h this factor is positive and nonzero, so the map is one-to-one, preserves
order and has an inverse. Forward Euler instead multiplies by $1-h$.
At h=1 it sends every starting state to zero in a single step. Distinct
states then have exactly the same numerical future, although no two exact
trajectories can merge at a finite time. If h>1 the Euler factor is negative,
so the numerical update reverses scalar order. The exact flow preserves it.
For h between one and two this alternating numerical sequence still tends
to zero. Convergence toward the correct equilibrium therefore does not mean
that every geometric property of the update agrees with the differential equation.

This example separates three questions. Consistency concerns the approximation
of one short exact step as h tends to zero. Stability concerns amplification
over repeated steps in a stated norm and range of step sizes. Reversibility
and order concern the structure of each implemented map. A method can have
a useful stability range while losing one of the exact flow's structures.
None of these statements requires running an experiment: the scalar factors
provide complete algebraic evidence.

When a plot samples only the accepted states, it can hide this distinction.
A path drawn between successive Euler points is an interpolation chosen by
the plotting routine; it is not another exact ODE trajectory. The uniqueness
theorem applies to exact solutions of the same vector field, not to arbitrary
line segments connecting discrete states. This is the reason to state both
the continuous evolution and the discrete rule when interpreting a numerical
phase portrait.

## Exercises

### Exercise 1.1 — Composition with domains
<a id="flows-and-maps-ex-1"></a>

For $x'=x^2$ and $x_0$=1, check the composition at $t=1/4$,$s=1/4$, and explain why $t=2$ is invalid.

<details>
<summary>Hint 1</summary>

**Hint.** Use the rational formula only before blow-up.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Track the maximal interval through the original state.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first value is 4/3; evolving that state for another 1/4 gives 2, equal to $\\varphi_{1/2}(1)$. The trajectory through 1 has maximal forward endpoint 1, so $\\varphi_2(1)$ is undefined even though the rational expression has a finite algebraic value there.

</details>

### Exercise 1.2 — An interval preserved by a map
<a id="flows-and-maps-ex-2"></a>

Prove $T(x)=4x(1-x)$ maps[0,1] into[0,1].

<details>
<summary>Hint 1</summary>

**Hint.** Complete the square.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check both the lower and upper bounds.

</details>
<details>
<summary>Solution</summary>

**Solution.** For 0≤$x\\le1$ the product is nonnegative, and $4x(1-x)=1-(2x-1)^2\\le1$. Thus every forward iterate remains in the interval. This proves invariance, not a claim about every orbit's limiting behaviour.

</details>

### Exercise 1.3 — Noninvertibility
<a id="flows-and-maps-ex-3"></a>

Show the logistic map in the previous exercise is not injective.

<details>
<summary>Hint 1</summary>

**Hint.** Compare symmetric inputs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Two distinct values suffice.

</details>
<details>
<summary>Solution</summary>

**Solution.** $T(1/4)=3/4=T(3/4)$, although 1/4≠3/4. Therefore no single-valued inverse on[0,1] exists. This distinguishes the map from a unique ODE time map on a domain where reversal is defined.

</details>

### Exercise 1.4 — A complete scalar flow
<a id="flows-and-maps-ex-4"></a>

Verify the composition law for $\\varphi_t(x)=e^{-t}x$ on R and identify its vector field.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the exponential factors.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Differentiate with respect to time.

</details>
<details>
<summary>Solution</summary>

**Solution.** The composition is $e^{-s}e^{-t}x=e^{-(s+t)}x$ and $\\varphi_0$ is the identity. Differentiation gives x'=-x. The formula exists for every real time and state, so it is a complete flow with inverse $\\varphi_{-t}$.

</details>

### Exercise 1.5 — Sampled fixed points
<a id="flows-and-maps-ex-5"></a>

For planar rotation, classify fixed points of $\\varphi_\\pi$ and $\\varphi_{2\\pi}$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the rotation formulas.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A sampled fixed point need not be an equilibrium.

</details>
<details>
<summary>Solution</summary>

**Solution.** The half-turn sends z to-z, so its only fixed point is 0. The full-turn map is the identity and fixes every state. Nevertheless the vector field has only the equilibrium 0; other fixed sampled states lie on nonconstant periodic circles.

</details>

### Exercise 1.6 — A dependence estimate
<a id="flows-and-maps-ex-6"></a>

If two trajectories remain in a region with Lipschitz constant 2 and initial separation $10^{-3}$, give the theorem's bound at time 3.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute into $e^{Lt}$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Do not interpret the upper bound as observed growth.

</details>
<details>
<summary>Solution</summary>

**Solution.** The separation is at most $10^{-3}e^6$, about 0.40343, under the common-region hypothesis. The actual separation may shrink or stay much smaller. The inequality does not establish a positive Lyapunov exponent or chaos.

</details>

### Exercise 1.7 — A domain-dependent limit
<a id="flows-and-maps-ex-7"></a>

Why is the limit 1 of an interior logistic trajectory not an equilibrium of the flow on (0,1)?

<details>
<summary>Hint 1</summary>

**Hint.** Equilibria must be states of the declared space.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare with the closed interval model.

</details>
<details>
<summary>Solution</summary>

**Solution.** The number 1 is absent from (0,1), so it is not an equilibrium in that state space. It is a boundary limit. On[0,1] it is included and satisfies f(1)=0. The interior formula alone does not settle which model is intended.

</details>

### Exercise 1.8 — Nonautonomous composition
<a id="flows-and-maps-ex-8"></a>

Verify $U(2,1)U(1,0)x=U(2,0)x$ for x'=t.

<details>
<summary>Hint 1</summary>

**Hint.** Add the two increments.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the initial and final clock times.

</details>
<details>
<summary>Solution</summary>

**Solution.** The increments are $(1^2-0^2)/2=1/2$ and $(2^2-1^2)/2=3/2$, totaling 2. The direct increment is $(2^2-0^2)/2=2$. This is a two-time evolution law rather than a family depending only on elapsed time.

</details>

### Exercise 1.9 — An exact step versus Euler
<a id="flows-and-maps-ex-9"></a>

For $x'=x^2$,$x_0$=1,$h=1/2$, compute the exact time-h value and one Euler update.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate both formulas.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The difference is already visible in one step.

</details>
<details>
<summary>Solution</summary>

**Solution.** The exact value is 1/(1-1/2)=2, while Euler gives 1+(1/2)1²=3/2. They are different maps. The numerical value is an approximation on this valid interval, not an alternative exact trajectory.

</details>

### Exercise 1.10 — A circle as state space
<a id="flows-and-maps-ex-10"></a>

For $\\theta'=1$, compare trajectories on R and on angles modulo 2π.

<details>
<summary>Hint 1</summary>

**Hint.** Check equality in each state space.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Returning modulo a period differs from equality on the real line.

</details>
<details>
<summary>Solution</summary>

**Solution.** On R, θ(t)=θ0+t never returns at positive time. On the circle, values differing by 2π represent the same state, so every orbit has period 2π. The vector field formula does not determine recurrence until the state space is specified.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

A dynamical system includes its state space, time set, and domain of evolution. Unique autonomous ODEs give local flow composition and reversal, while completeness requires further bounds. Maps need not be invertible, sampled fixed points need not be equilibria, and nonautonomous equations require two clock times. One-dimensional order next provides qualitative conclusions beyond explicit formulas.
`;export{e as default};