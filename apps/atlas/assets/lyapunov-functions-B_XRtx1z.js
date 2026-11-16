var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: lyapunov-functions
title: "Lyapunov Functions"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Lyapunov Functions

A Lyapunov function converts a geometric question about many trajectories into an inequality that holds throughout a region. Its usefulness depends on three separate facts: the function measures distance from the desired state, its value does not increase along solutions, and the solution remains in the domain where the estimate is valid. None of those facts follows from a single decreasing numerical trace.

Read [linearisation](linearisation-hartman-grobman.md), compactness and continuity, and the ODE continuation theorem. We assume $z'=F(z)$ with $F$ continuously differentiable on an open set $U\\subseteq\\mathbb R^n$. Translate the equilibrium of interest to zero.

## A function that distinguishes the equilibrium

**Definition 5.1 (Positive definiteness and orbital derivative).** A continuous $V$ is positive definite near zero when $V(0)=0$ and $V(z)>0$ for every nearby nonzero $z$. If $V$ is $C^1$, its orbital derivative is
$$
\\dot V(z)=\\nabla V(z)\\cdot F(z).
$$
The chain rule gives $dV(z(t))/dt=\\dot V(z(t))$.

Positive definite here describes a scalar function, not necessarily a quadratic form. The neighbourhood and state domain are part of the definition. A nonnegative function that vanishes along an entire axis does not distinguish the equilibrium from that axis.

**Theorem 5.2 (Lyapunov stability).** Suppose $V$ is $C^1$ and positive definite on a neighbourhood of zero, and $\\dot V\\le0$ there. Then zero is Lyapunov stable.

*Proof.* Choose a target ball of radius $\\epsilon>0$ whose closure lies in the neighbourhood and in $U$. Positivity and compactness give
$m=\\min_{\\|z\\|=\\epsilon}V(z)>0$. Choose $0<c<m$. Continuity at zero gives $\\delta>0$ with $V(z_0)<c$ whenever $\\|z_0\\|<\\delta$, and shrink $\\delta$ below $\\epsilon$.

Until a possible first exit from the target ball, $V(z(t))\\le V(z_0)<c$. Reaching its sphere would require $V\\ge m$, a contradiction. The trajectory stays in the closed target ball, a compact subset of the vector-field domain, so continuation gives existence for all forward time. It remains within the requested distance, proving stability. $\\square$

The theorem does not yet assert attraction. It also does not require $V$ to increase monotonically with Euclidean radius. The positive minimum on each target sphere is enough to construct a trapping level.

**Example 5.3 (A nonincreasing function that proves too little).** For
$x'=x,\\ y'=-y$, take $V(x,y)=y^2$. It is nonnegative and $\\dot V=-2y^2\\le0$, but $V$ vanishes on the whole $x$-axis. The solution $(x_0e^t,0)$ moves away from the origin for every nonzero $x_0$. The origin is unstable. The failed hypothesis is positive definiteness, not a failure of the chain rule.

For a harmonic oscillator $x'=y,\\ y'=-x$, the positive definite energy $(x^2+y^2)/2$ has derivative zero everywhere. It proves stability, while every nonzero trajectory stays on its own energy circle and does not approach the origin. This is the separate limitation of non-strict decay.

## Compact limit sets supply an invariance argument

**Definition 5.4 (Omega-limit set).** If a forward trajectory is defined for all $t\\ge0$, its omega-limit set consists of the points $w$ for which some sequence $t_k\\to\\infty$ satisfies $z(t_k)\\to w$.

If the trajectory stays in a compact set, the omega-limit set is nonempty by sequential compactness. It is closed and lies in that compact set. Continuity of the flow also makes it invariant: for a fixed $s\\ge0$, a convergent sequence $z(t_k)$ gives $\\varphi_s(w)=\\lim z(t_k+s)$ in the omega-limit set. For a predecessor, take a convergent subsequence of $z(t_k-s)$; its image under $\\varphi_s$ is $w$. Uniqueness makes these predecessor segments compatible. Thus the omega-limit set contains full trajectories in both time directions, even if the original trapping set was assumed only forward invariant.

**Theorem 5.5 (LaSalle's principle on a compact set).** Let $\\Omega\\subset U$ be compact and positively invariant, and let $V$ be $C^1$ on a neighbourhood of $\\Omega$, with $\\dot V\\le0$ on $\\Omega$. Let $M$ be the largest invariant subset of
$E=\\{z\\in\\Omega:\\dot V(z)=0\\}$. Every trajectory in $\\Omega$ has distance to $M$ tending to zero.

*Proof.* Along a trajectory in $\\Omega$, the function $V$ is nonincreasing and bounded below, so it has a finite limit $L$. At every omega-limit point, continuity gives $V=L$. The omega-limit set is invariant by the preceding argument, so $V$ is constant along each of its full trajectories. Differentiating gives $\\dot V=0$ there. Hence the omega-limit set is contained in $M$.

If distance to $M$ did not tend to zero, a sequence of arbitrarily late points would stay at distance at least $\\eta>0$. Compactness gives a convergent subsequence, whose limit is an omega-limit point in $M$. Its distance to $M$ is then at most its distance to that limiting point, which tends to zero, a contradiction. $\\square$

This proof identifies exactly what monotonicity supplies: a constant value on the limiting invariant dynamics. The set $E$ itself need not be invariant. It is a common error to stop after listing all zero-derivative points instead of determining which complete trajectories can remain among them.

**Corollary 5.6 (Strict decay gives attraction).** Under the local positive-definite hypotheses of Theorem 5.2, if $\\dot V(z)<0$ for every nearby $z\\ne0$, the equilibrium is locally asymptotically stable.

*Proof.* Use a sufficiently small compact trapping sublevel from the stability proof. Its zero-derivative set contains only zero, so LaSalle gives convergence to zero for every start in that sublevel. Stability was already proved. $\\square$

## Damping can make a weak derivative sufficient

**Example 5.7 (A damped oscillator).** Let
$$
x'=y,\\qquad y'=-x-dy,\\qquad d>0.
$$
Take $V=(x^2+y^2)/2$. Then
$\\dot V=x y+y(-x-dy)=-d y^2\\le0$.
Every closed energy sublevel is a compact forward invariant disk. The set $E$ has $y=0$, but a trajectory remaining there must also have $y'=-x=0$. Thus its largest invariant subset is the origin. LaSalle proves convergence from every initial state, and positive definiteness gives stability. The origin is globally asymptotically stable even though $\\dot V$ is not negative at every nonzero point.

The calculation did not require solving the characteristic polynomial. It also explains the role of coupling: the position coordinate can have zero instantaneous energy decay, but a nonzero position generates velocity and therefore subsequent dissipation.

**Example 5.8 (A pendulum needs a specified energy region).** For
$$
\\theta'=\\omega,\\qquad \\omega'=-\\sin\\theta-d\\omega,\\qquad d>0,
$$
the energy $V=\\omega^2/2+1-\\cos\\theta$ satisfies $\\dot V=-d\\omega^2$.
Work in the chart $-\\pi<\\theta<\\pi$ and choose an energy level $c<2$. Its closed sublevel is compactly contained in this chart: $1-\\cos\\theta\\le c<2$ keeps $\\theta$ away from both endpoints, and $|\\omega|\\le\\sqrt{2c}$. It is forward invariant.

Inside it,$E$ has $\\omega=0$. Invariance also requires $\\sin\\theta=0$, leaving only $\\theta=0$ in the chart. LaSalle therefore proves convergence to the downward equilibrium for every start in that sublevel. On the full angle cylinder, the upright equilibrium also exists and is a stationary trajectory. A global assertion that every state approaches the downward equilibrium would be false.

## Proper energy levels and global continuation

A local Lyapunov function gives a local conclusion. To use it globally, one sufficient condition is that every sublevel $\\{V\\le c\\}$ is compact in the vector-field domain and that $\\dot V\\le0$ throughout that domain. Starting from any state, its initial sublevel traps the trajectory, so continuation is global. Attraction then depends on the invariant set in that particular sublevel.

**Definition 5.9 (Proper sublevels).** We call $V$ proper on $U$ when each of its closed sublevels is compact in $U$. On the whole Euclidean space, a continuous function tending to infinity as $\\|z\\|\\to\\infty$ has proper sublevels. On an open domain, behaviour near its missing boundary must also be checked.

For instance,$V(x)=x^2$ is radially unbounded on $\\mathbb R$ but its sublevel in $U=(0,\\infty)$ may approach the deleted endpoint zero. It is not compact in that domain. Naming the state space remains necessary.

**Example 5.10 (An exact global decay estimate).** Consider
$$
x'=-x+y-x(x^2+y^2),\\qquad
y'=-x-y-y(x^2+y^2).
$$
For $V=(x^2+y^2)/2$, cross terms cancel and
$$
\\dot V=-x^2-y^2-(x^2+y^2)^2=-2V-4V^2\\le-2V.
$$
Properness on $\\mathbb R^2$ gives global continuation. Integrating the inequality gives $V(t)\\le e^{-2t}V(0)$ and therefore $\\|(x(t),y(t))\\|\\le e^{-t}\\|(x_0,y_0)\\|$. The origin is globally exponentially stable. The rotational terms change phase but not this energy calculation.

This conclusion is stronger than the local Jacobian result because the inequality and properness hold at every state. The proof says why the entire basin is covered.

## Quantitative rates need comparison constants

Suppose on a trapping region
$$
a_1\\|z\\|^2\\le V(z)\\le a_2\\|z\\|^2,\\qquad
\\dot V\\le-a_3\\|z\\|^2,
$$
with $a_1,a_2,a_3>0$. Then $\\dot V\\le-(a_3/a_2)V$, so
$$
\\|z(t)\\|\\le\\sqrt{a_2/a_1}\\,
e^{-a_3t/(2a_2)}\\|z(0)\\|.
$$
The factor two in the state exponent comes from taking a square root. A nonincreasing energy alone does not justify an exponential rate.

For algebraic decay, if $\\dot V\\le-cV^p$ with $c>0,p>1$, integrate the derivative of $V^{1-p}$ on intervals where $V>0$:
$$
V(t)\\le
\\left[V(0)^{1-p}+c(p-1)t\\right]^{-1/(p-1)}.
$$
If $V$ reaches zero, invariance of the equilibrium continues the inequality. For $x'=-x^3$, $V=x^2/2$ gives $\\dot V=-4V^2$, reproducing the exact algebraic decay. Different derivative inequalities encode genuinely different rates.

## Perturbations change the conclusion

Suppose a quadratic certificate obeys $\\dot V\\le-a\\|z\\|^2$ in an unforced model. Adding a disturbance $w(t)$ to the vector field adds $2z^TPw$ to the derivative, bounded by $2\\|P\\|\\|z\\|\\|w\\|$. A persistent disturbance can prevent convergence to the original equilibrium even if it is small.

The scalar example $x'=-x+\\delta$ has equilibrium $\\delta$, not zero, and solution $x(t)=\\delta+(x_0-\\delta)e^{-t}$. Thus an undisturbed stability theorem cannot be turned into a claim of exact recovery under every small input. A perturbation theorem must specify the input class and whether it proves attraction, an ultimate bound, or another property.

Likewise, evaluating $\\nabla V\\cdot F$ on finitely many points does not establish its sign throughout a region. A symbolic factorisation, a uniform analytical estimate, or a rigorous enclosure can do so. A plotted decrease along one trajectory only concerns that trajectory and the numerical approximation used.

## Choosing a useful function

Physical energy is a natural candidate, but damping and coupling often call for cross terms. The matrix construction in the preceding chapter systematically finds a quadratic form for a Hurwitz linearisation. In a nonlinear system, add terms only after checking that the new function remains positive definite and the derivative estimate holds on the chosen region.

A zero derivative at isolated times is harmless; the issue is whether an entire limiting trajectory can remain in $E$. Conversely, an attractive set containing several equilibria or a periodic orbit does not identify a unique limiting point without more information. LaSalle's distance conclusion is deliberately stated for the invariant set.

These distinctions make Lyapunov analysis a reusable proof method rather than a slogan that “energy decreases.” The next chapter studies conservative systems, where energy is constant, and gradient systems, where the objective itself gives strict directional information.

## A certified neighbourhood and the whole basin

**Proposition 5.11 (An attraction basin is open).** Let $F$ be $C^1$ on an open state domain and let $a$ be a locally asymptotically stable equilibrium. Its basin $B$, consisting of initial states whose solutions exist for all forward time and converge to $a$, is open in the state domain.

*Proof.* Local asymptotic stability supplies an open neighbourhood $N$ of $a$ such that every initial state in $N$ has a global forward solution converging to $a$. Take any $x\\in B$. Convergence gives a finite time $T$ with $\\phi_T(x)\\in N$. The domain of the time-$T$ flow map is open, and this map is continuous by finite-time continuous dependence. Consequently there is an open neighbourhood $W$ of $x$ on which solutions exist through time $T$ and whose time-$T$ images all lie in $N$. Each such solution continues globally after that time and converges to $a$. Uniqueness and the flow composition law join the initial segment to this attracting continuation. Hence $W\\subset B$, proving openness. $\\square$

Equivalently, the basin is the union, over nonnegative times, of the inverse images of $N$ under the corresponding flow maps, with each map restricted to its actual domain. One inclusion follows from convergence into the neighbourhood; the other follows from continuing an orbit after it enters the neighbourhood.

A small strict Lyapunov sublevel can provide such an $N$. Its size need not equal the full basin: initial states outside that sublevel may enter it later. Taking inverse images can enlarge the region certified to converge, provided membership and forward existence are justified.

Openness does not make a basin boundary smooth, nor does it identify that boundary from one trajectory. Separate open basins can have invariant sets between them, including saddle equilibria and their invariant manifolds. The proposition concerns neighbourhoods of points already in the basin, not a regularity theorem for its edge.

## A bounded disturbance changes the conclusion

For the scalar equation $x'=-x+u(t)$ with continuous input satisfying
|u(t)|≤U, variation of constants gives
$$|x(t)|\\le e^{-t}|x(0)|+U(1-e^{-t}).$$
The first term decays, while the second bounds the accumulated forcing.
The unforced origin is asymptotically stable, but under an unknown persistent
input the warranted conclusion is an eventual bound by U, rather than
convergence to zero. A constant nonzero input attains a nonzero equilibrium,
so this distinction is essential even in the simplest system.

The energy calculation makes the same boundary visible. For V=x²/2,
its derivative is −x²+xu, bounded above by −x²/2+U²/2 using the elementary
square inequality. Outside the interval |x|≤U it is nonpositive, whereas
inside it the sign may vary. An argument that drops the input term would
incorrectly reuse the unforced strict-decay conclusion. In more complicated
systems, first identify the disturbance norm and where its contribution can
dominate dissipation. A Lyapunov function can support a robust boundedness
claim without proving exact regulation or specifying a control strategy.

## Exercises

### Exercise 5.1 — Positive definiteness
<a id="lyapunov-functions-ex-1"></a>

Is V=$x^2$ positive definite at the origin of $\\mathbb R^2$? Explain its limitation.

<details>
<summary>Hint 1</summary>

**Hint.** Test points on the y-axis.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Nonnegative is weaker than positive definite.

</details>
<details>
<summary>Solution</summary>

**Solution.** It vanishes at every(0,y), so it is not positive definite in $\\mathbb R^2$. A nonincrease of this function cannot alone control distance from the origin because motion along that axis is invisible to it.

</details>

### Exercise 5.2 — An orbital derivative
<a id="lyapunov-functions-ex-2"></a>

For $x'=-x-y,\\ y'=x-y$, compute the derivative of $V=(x^2+y^2)/2$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the chain rule.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cancel the mixed terms.

</details>
<details>
<summary>Solution</summary>

**Solution.** The derivative is $x(-x-y)+y(x-y)=-x^2-y^2=-2V$. Proper sublevels give global continuation and the state bound $\\|z(t)\\|\\le e^{-t}\\|z_0\\|$.

</details>

### Exercise 5.3 — Weak decay
<a id="lyapunov-functions-ex-3"></a>

Why does Vdot=0 for the harmonic oscillator not imply attraction?

<details>
<summary>Hint 1</summary>

**Hint.** Its energy is constant.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Nonzero initial energy cannot approach zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every nonzero trajectory stays on a positive energy circle. If it approached the origin, continuity would force its constant energy to tend to zero, a contradiction. The function proves stability but not attraction.

</details>

### Exercise 5.4 — Largest invariant subset
<a id="lyapunov-functions-ex-4"></a>

For the damped oscillator, determine the largest invariant subset of{$y=0$}.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate y' on that set.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Remaining there requires both velocity and acceleration zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** On $y=0$, the acceleration is-x. A trajectory can keep y identically zero only if $x=0$. Hence the largest invariant subset is the origin, allowing LaSalle to prove attraction.

</details>

### Exercise 5.5 — A pendulum threshold
<a id="lyapunov-functions-ex-5"></a>

Why is the strict energy bound $c<2$ useful in Example 5.8?

<details>
<summary>Hint 1</summary>

**Hint.** The upright state has potential energy 2.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check compact containment in the chosen angle chart.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inequality prevents θ from approaching±π and bounds the velocity, so the sublevel is compactly contained in (-π,π)×R. It also excludes the upright equilibrium. At or above 2, the same chart and invariant-set conclusion require additional care.

</details>

### Exercise 5.6 — A state-rate conversion
<a id="lyapunov-functions-ex-6"></a>

If $\\|z\\|^2\\le V\\le9\\|z\\|^2$ and $\\dot V\\le-2\\|z\\|^2$, derive an exponential state estimate.

<details>
<summary>Hint 1</summary>

**Hint.** First bound Vdot in terms of V.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Then use both norm comparisons.

</details>
<details>
<summary>Solution</summary>

**Solution.** We get $\\dot V\\le-(2/9)V$, hence $V(t)\\le e^{-2t/9}V(0)$. Therefore $\\|z(t)\\|\\le3e^{-t/9}\\|z_0\\|$. The energy and distance rates differ by the square-root conversion.

</details>

### Exercise 5.7 — An algebraic comparison
<a id="lyapunov-functions-ex-7"></a>

For $\\dot V\\le-3V^2$ and $V_0=2$, give the comparison bound.

<details>
<summary>Hint 1</summary>

**Hint.** Integrate the derivative of 1/V.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the initial reciprocal.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inequality gives $1/V(t)\\ge1/2+3t$ while $V>0$, so $V(t)\\le2/(1+6t)$. If V reaches zero the bound continues by the equilibrium interpretation. It is algebraic rather than exponential.

</details>

### Exercise 5.8 — Properness in a domain
<a id="lyapunov-functions-ex-8"></a>

Why is $x^2$ not proper on (0,∞) despite growing at infinity?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect a low sublevel.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compactness must hold inside the actual domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** The sublevel $0<x\\le1$ approaches the missing endpoint 0 and is not compact in (0,∞). Growth at large x does not control escape to a deleted boundary. Both parts of the domain must be checked.

</details>

### Exercise 5.9 — A disturbance counterexample
<a id="lyapunov-functions-ex-9"></a>

Solve $x'=-x+0.01$ and explain why undisturbed attraction to zero does not transfer unchanged.

<details>
<summary>Hint 1</summary>

**Hint.** Shift by the new equilibrium.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the scalar linear solution.

</details>
<details>
<summary>Solution</summary>

**Solution.** The solution is $0.01+(x_0-0.01)e^{-t}$, tending to 0.01. The original equilibrium of x'=-x is no longer an equilibrium of the perturbed equation. A robustness claim should describe the shifted state or a residual bound, not exact convergence to zero.

</details>

### Exercise 5.10 — LaSalle's conclusion
<a id="lyapunov-functions-ex-10"></a>

If the largest invariant subset M has several points, what does the compact-set theorem establish and what does it not establish?

<details>
<summary>Hint 1</summary>

**Hint.** Read the distance formulation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A set limit is not automatically a selected point.

</details>
<details>
<summary>Solution</summary>

**Solution.** It establishes $\\operatorname{dist}(z(t),M)\\to0$. It does not identify a particular point of M or prove that z(t) converges to one point. Additional structure is needed to exclude motion or multiple possible limits inside M.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Earlier Euler treatment: [Nonlinear Stability and Bifurcation](../differential-equations-verified-dynamics/nonlinear-stability-bifurcation.md). Additional original worked material and solved exercises remain available there.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

A positive definite function and nonpositive orbital derivative prove stability through compact trapping levels. LaSalle's compact-set argument turns monotonicity into approach to the largest invariant zero-derivative set; strict decay gives attraction. Properness can extend the result globally, and quantitative inequalities supply rates. Persistent forcing and numerical samples require separate conclusions.
`;export{e as default};