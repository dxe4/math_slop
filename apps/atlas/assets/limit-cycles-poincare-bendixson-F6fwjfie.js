var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: limit-cycles-poincare-bendixson
title: "Limit Cycles and Poincaré–Bendixson"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Limit Cycles and Poincaré–Bendixson

A periodic trajectory returns to a state while moving. Its nearby trajectories may approach the same curve without approaching the same clocked point on that curve. The correct stability question removes the neutral phase direction, usually by taking a transverse return map. Planarity then supplies a remarkable additional restriction on compact limit sets.

Read [Lyapunov functions](lyapunov-functions.md), [conservative systems](conservative-gradient-systems.md), and the ODE uniqueness theorem. We assume a $C^1$ autonomous vector field $F$ on an open subset $U\\subseteq\\mathbb R^2$. Green's theorem is used explicitly for the divergence exclusion. The general Poincaré–Bendixson theorem is a cited dependency, while its applications and the elementary return-map calculations are developed here.

## A cycle is an orbit, not an equilibrium

**Definition 7.1 (Periodic orbit and limit cycle).** A nonconstant trajectory is periodic when $\\varphi_T(p)=p$ for some $T>0$. Its minimal positive return time is its period, and its geometric image is a periodic orbit. A limit cycle is a periodic orbit isolated from other periodic orbits in some neighbourhood.

A nonconstant periodic trajectory cannot pass through an equilibrium, by uniqueness. At a regular point, one nonzero component of $F$ remains of one sign for a short time, so the trajectory cannot return immediately. The positive return times therefore have a positive lower bound. Taking a decreasing sequence toward their infimum and using continuity yields a least return time. Division by that time shows every return is an integer multiple of it.

If two distinct times before a minimal period visited the same point, uniqueness and autonomy would produce a shorter return. Thus a planar periodic orbit is a simple closed curve. Its geometric image does not record its chosen phase, direction-independent shape alone, or speed.

**Definition 7.2 (Orbital stability).** A periodic orbit $\\Gamma$ is orbitally stable when trajectories starting sufficiently near the set remain near the set for all forward time. It is orbitally asymptotically stable when they also have distance to $\\Gamma$ tending to zero. An asymptotic phase relation is a stronger statement and is not included automatically.

A point on a nonconstant cycle cannot be asymptotically stable as a clocked equilibrium would be. Starting a little ahead on the same cycle preserves a phase displacement. A numerical comparison at equal times can therefore show a large error caused mostly by phase, even when both paths remain very near the same orbit.

## Return maps remove the phase direction

Choose $p\\in\\Gamma$ and a short smooth section through $p$ transverse to $F(p)$. In a section coordinate $s$ with $p$ represented by zero, nearby trajectories return after a time $\\tau(s)$ close to $T$. Write $P(s)$ for the returned section coordinate.

The return construction requires transversality and a well-defined local return. If the section is described by $g=0$, then
$\\partial_t g(\\varphi_t(p))|_{t=T}=\\nabla g(p)\\cdot F(p)\\ne0$.
The implicit-function theorem gives a $C^1$ return time near $T$. A sufficiently small section excludes unintended earlier intersections, using local transversality near $p$ and compact separation from the remaining middle part of the cycle.

**Proposition 7.3 (Return-map stability).** If $P(0)=0$ and $|P'(0)|<1$, the cycle is locally orbitally asymptotically stable. If $|P'(0)|>1$, the fixed point is transversely unstable. Equality is inconclusive.

*Proof.* In the first case, continuity of $P'$ gives $|P'|\\le q<1$ on a small section interval. The mean-value theorem gives $|P(s)|\\le q|s|$, so iterates stay in that interval and converge geometrically to zero. Return times are bounded above and away from zero near the cycle. Continuous dependence during each bounded between-return segment gives orbital stability and approach to the full curve. For $|P'(0)|>1$, shrink the interval so that $|P(s)|\\ge q|s|$ for some $q>1$. Any small nonzero section displacement eventually leaves that fixed section neighbourhood, proving transverse instability. $\\square$

The return map compares transverse states, not two solutions at equal clock times. Its derivative is a local multiplier; a numerical ratio between two distant sampled trajectories need not approximate it.

## An exact radial return

**Example 7.4 (A logistic radius).** On $r>0$, let
$$
r'=r(1-r),\\qquad\\theta'=1.
$$
The circle $r=1$ has period $2\\pi$. Its exact radial solution gives the one-turn return map
$$
P(r_0)=\\frac{1}{1+(1/r_0-1)e^{-2\\pi}}.
$$
At $r_0=1$, $P(1)=1$ and $P'(1)=e^{-2\\pi}<1$. Thus the circle attracts nearby trajectories orbitally. Radii below1 increase and radii above1 decrease, so in this particular model every positive radius approaches1.

An annulus $1/2\\le r\\le3/2$ is forward invariant: the radial rate is positive on the inner circle and negative on the outer circle. The angular rate never vanishes, so no equilibrium lies there. This region will also establish existence through the planar theorem below, without relying on the explicit formula.

The polar equations correspond on the punctured plane to
$F=(-y+x(1-r),\\,x+y(1-r))$. Their divergence is $2-3r$, equal to $-1$ on the cycle. The multiplier formula derived next therefore gives the same $e^{-2\\pi}$.

## The nontrivial planar multiplier

Along a $T$-periodic trajectory $\\gamma(t)$, the variational equation is
$$
Z'=DF(\\gamma(t))Z,\\qquad Z(0)=I.
$$
The standard differentiable-dependence theorem for $C^1$ ODEs identifies $Z$ with the derivative of the flow; this foundational result is cited from the references. The following determinant and tangent calculations then give an explicit multiplier.

**Proposition 7.5 (Planar multiplier formula).** One eigenvalue of $Z(T)$ is1, and the other is
$$
\\rho=\\exp\\left(\\int_0^T\\operatorname{div}F(\\gamma(t))\\,dt\\right)>0.
$$
It equals the derivative of a consistently oriented local section return map.

*Proof.* The tangent vector $\\gamma'(t)=F(\\gamma(t))$ solves the variational equation and repeats after $T$. It is nonzero, so $Z(T)$ has eigenvalue1. For a two-by-two equation $Z'=A(t)Z$, differentiate $\\det Z=z_{11}z_{22}-z_{12}z_{21}$. Direct substitution cancels off-diagonal terms and gives
$(\\det Z)'=(\\operatorname{tr}A)\\det Z$. Since $\\det Z(0)=1$, integration gives $\\det Z(T)=\\exp\\int_0^T\\operatorname{tr}A$. The second eigenvalue is the determinant because the first is1.

In a basis consisting of the flow tangent and a section tangent at $p$, the full-period derivative has tangent column $(1,0)^T$. Adjusting the final time to return to the section adds only a flow-tangent component. The induced scalar derivative transverse to that direction is therefore the remaining diagonal entry, equal to the second eigenvalue. $\\square$

A negative divergence integral gives $\\rho<1$ and transverse attraction; a positive one gives $\\rho>1$ and repulsion. A zero integral is inconclusive. The formula is specifically planar and autonomous. A higher-dimensional flow has several transverse multipliers, and a periodically forced model requires its extended autonomous state or a separately defined stroboscopic map.

## Excluding cycles by an area argument

**Theorem 7.6 (Bendixson–Dulac exclusion).** Let $D$ be a simply connected open planar region, $F$ be $C^1$, and $B$ be a $C^1$ scalar function on $D$. If $\\operatorname{div}(BF)$ is strictly positive everywhere on $D$, or strictly negative everywhere, no periodic orbit lies entirely in $D$.

*Proof.* A periodic orbit would be a simple closed curve bounding a region whose closure lies in $D$. Along its boundary,$F$ and hence $BF$ are tangent, so their outward flux is zero. Green's theorem gives
$$
0=\\int_{\\partial R}BF\\cdot n\\,ds
=\\iint_R\\operatorname{div}(BF)\\,dA,
$$
contradicting the strict sign. $\\square$

The domain condition ensures that the whole enclosed region is available for the integral. A singular multiplier cannot be silently used across its missing set. We state the strict-sign version; weaker non-strict variants need an additional condition preventing the divergence from vanishing throughout a possible interior.

**Example 7.7 (A competitive-system exclusion).** For positive $x,y$,
$$
x'=x(a-bx-cy),\\qquad y'=y(d-ex-fy),
$$
with $b,f>0$, choose $B=1/(xy)$. Then
$$
BF=\\left(a/y-bx/y-c,\\ d/x-e-fy/x\\right),
$$
and $\\operatorname{div}(BF)=-b/y-f/x<0$. The positive quadrant is simply connected and the multiplier is $C^1$ there, so there is no periodic orbit wholly inside it. This does not by itself prove convergence of every trajectory: boundedness, compact containment, and the equilibrium content of the limit set remain separate questions.

## Poincaré–Bendixson as a cited theorem

**Theorem 7.8 (Equilibrium-free omega-limit form; cited).** For a $C^1$ planar autonomous field, suppose a positive orbit remains in a compact subset of its open flow domain. If its omega-limit set contains no equilibrium, that set is a periodic orbit.

The full planar topological proof is cited from Hirsch–Smale–Devaney and Strogatz. We do not substitute a short noncrossing sketch for that proof. The hypotheses supply unique local flow, global continuation, compactness, and the planar restriction. The result does not apply directly to discrete maps, a three-state system projected onto a plane, delay equations, or a forced planar system treated without its clock variable.

The theorem also does not say every bounded planar orbit approaches a cycle. An omega-limit set can contain equilibria and connecting orbits, so the equilibrium-free hypothesis cannot be removed.

**Corollary 7.9 (A trapping annulus produces a cycle).** Let a compact annular region lie inside the flow domain. Suppose $F$ points strictly inward relative to the annulus on both boundary curves and has no equilibrium inside the annulus, including its boundary. Then the annulus contains a periodic orbit.

*Proof.* A first boundary exit would contradict the strict inward derivative of a local defining function. Thus every forward trajectory started there remains there, and compact continuation makes it global. Its omega-limit set is nonempty and contains no equilibrium. Theorem 7.8 makes it a periodic orbit. $\\square$

Inward pointing gives existence, not uniqueness or attraction of a specified cycle. Several periodic orbits can lie in the same trapping annulus.

**Example 7.10 (Several cycles inside one trap).** On an annular domain with $r>0$, set
$$
r'=r(r-1)(r-2)(3-r),\\qquad\\theta'=1.
$$
The annulus $1/2\\le r\\le7/2$ traps forward motion: the radial rate is positive at its inner boundary and negative at its outer boundary. There is no equilibrium because $\\theta'=1$. Nevertheless it contains three periodic circles $r=1,2,3$. The radial derivatives there are respectively $-2,2,-6$, so the first and third attract transversely and the middle one repels. A single trapping argument cannot distinguish those three outcomes without the radial analysis.

## Why a hole invalidates the divergence shortcut

For the smooth field
$F=(-y+x(1-r^2),\\,x+y(1-r^2))$, the unit circle is periodic. Its divergence is $2-4r^2$, strictly negative throughout $0.9<r<1.1$. This is not a counterexample to Theorem 7.6: that annulus is not simply connected, and the circle's interior includes points where the divergence condition fails. A boundary-flux proof cannot ignore the missing central disk.

Likewise a numerical picture of an apparent annulus supplies no exact inward inequalities. Compute the directional derivative on each boundary, with opposite geometric interpretations at the inner and outer edges. A ray pointing outward from the centre on the inner circle points inward relative to the annulus.

## What a computed cycle claim should contain

State the autonomous state space, a transversal section, the return condition, period, and residual or analytic identity. For a stability claim, provide a multiplier theorem or a uniform return-map bound, not merely one apparently contracting plotted path. Report whether error is measured at equal time, after phase adjustment, or on section returns.

The next chapter studies how cycles can emerge as parameters vary. A general Hopf theorem needs more than a trace crossing: regularity, transversality and nonlinear nondegeneracy determine what the small periodic branch actually does.

## Why a planar autonomous cycle cannot flip its transverse multiplier

The planar multiplier formula has a useful sign consequence: its exponential
is strictly positive. A smooth planar autonomous periodic orbit therefore
cannot acquire a negative transverse multiplier, and in particular cannot
lose stability by crossing minus one. The one-dimensional return map comes
from an oriented flow, so its local derivative at the fixed point has this
positive sign. A generic period-doubling mechanism for a scalar map cannot
be transferred unchanged to this planar autonomous setting.

This does not prohibit every bifurcation of a planar cycle. Its positive
multiplier can reach one, where the strict stability test becomes inconclusive.
Global connections to equilibria can also change the orbit structure while
the period grows. Those mechanisms require their own hypotheses. Nor does
the sign argument prohibit period doubling in a periodically forced planar
equation: adding the forcing phase makes the autonomous system three
dimensional, with a different transverse return space. A Poincaré section of
a higher-dimensional flow can have several multipliers and different signs.

The distinction gives a diagnostic for reading numerical pictures. If a claimed
planar autonomous computation reports a negative nontrivial cycle multiplier,
inspect the system dimension, orientation conventions, numerical derivative
and the return definition before interpreting it as a physical flip. An
apparent alternation of displayed samples is a sampling observation, whereas
the multiplier theorem concerns a complete first return to a transversal
section of an exact periodic orbit.

## Exercises

### Exercise 7.1 — Minimal period
<a id="limit-cycles-poincare-bendixson-ex-1"></a>

Why would a repeated point at two times strictly within a minimal period contradict minimality?

<details>
<summary>Hint 1</summary>

**Hint.** Use uniqueness and autonomy.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Their time difference gives a shorter return.

</details>
<details>
<summary>Solution</summary>

**Solution.** If γ(s)=γ(t) with 0≤s<t<T, the shifted trajectories agree by uniqueness. The positive difference t-s is then a return period, smaller than T. This contradicts the choice of minimal period and proves simplicity of the planar orbit.

</details>

### Exercise 7.2 — Orbital comparison
<a id="limit-cycles-poincare-bendixson-ex-2"></a>

Why can two nearby points on one cycle fail to approach each other at equal clock time?

<details>
<summary>Hint 1</summary>

**Hint.** Their phases differ.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Both remain exactly on the same set.

</details>
<details>
<summary>Solution</summary>

**Solution.** Autonomous evolution preserves the phase shift along the periodic orbit. The two clocked points can stay separated periodically even though both have zero distance to the orbit. Orbital stability concerns distance to that set, not synchronization of phases.

</details>

### Exercise 7.3 — A return multiplier
<a id="limit-cycles-poincare-bendixson-ex-3"></a>

For $P(s)=0.4s+s^2$ near zero, prove local attraction of its fixed point 0.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate and choose a small interval.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use a uniform derivative bound below 1.

</details>
<details>
<summary>Solution</summary>

**Solution.** $P'(s)=0.4+2s$. On $|s|\\le0.1$, its absolute value is at most 0.6. Thus $|P(s)|\\le0.6|s|$, the interval is invariant, and iterates converge geometrically to zero. This is the local contraction used for transverse cycle attraction.

</details>

### Exercise 7.4 — A neutral warning
<a id="limit-cycles-poincare-bendixson-ex-4"></a>

Why is $P'(0)=1$ insufficient for deciding attraction?

<details>
<summary>Hint 1</summary>

**Hint.** Compare simple cubic maps.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The next nonlinear term can point inward or outward.

</details>
<details>
<summary>Solution</summary>

**Solution.** The maps $P(s)=s-s^3$ and $P(s)=s+s^3$ both have derivative 1 at zero. For sufficiently small nonzero s, the first decreases its magnitude and approaches zero, while the second increases it and eventually leaves a fixed small interval. Higher-order information is needed.

</details>

### Exercise 7.5 — An integrated multiplier
<a id="limit-cycles-poincare-bendixson-ex-5"></a>

A planar cycle has period 3 and constant divergence -2 along it. Compute its transverse multiplier.

<details>
<summary>Hint 1</summary>

**Hint.** Integrate over the full period.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Exponentiate the result.

</details>
<details>
<summary>Solution</summary>

**Solution.** The integral is -6, so $\\rho=e^{-6}<1$. Under the regular-cycle and return-map hypotheses, this implies local transverse attraction. It does not state a global basin or a chosen asymptotic phase.

</details>

### Exercise 7.6 — Dulac's domain
<a id="limit-cycles-poincare-bendixson-ex-6"></a>

Why can $B=1/(xy)$ be used in the open positive quadrant but not across an axis?

<details>
<summary>Hint 1</summary>

**Hint.** Check smoothness.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The area integral must lie in the multiplier's domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** The function is C¹ for x,$y>0$ but singular on either axis. A periodic curve and its enclosed region must stay in a domain where BF is C¹. Extending the same calculation across an axis would violate the theorem's regularity hypothesis.

</details>

### Exercise 7.7 — A trapped cycle
<a id="limit-cycles-poincare-bendixson-ex-7"></a>

For r'=r(1-r),$\\theta'=1$, check both boundary directions for $1/2\\le r\\le3/2$.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the scalar radial field.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At the inner boundary increasing radius enters the annulus.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $r=1/2$ the rate is 1/4>0, pointing into the annulus. At $r=3/2$ the rate is -3/4<0, again pointing into it. Together with absence of equilibria and compact containment, the cited planar theorem guarantees a periodic orbit.

</details>

### Exercise 7.8 — Existence versus uniqueness
<a id="limit-cycles-poincare-bendixson-ex-8"></a>

Use Example 7.10 to explain why trapping alone does not prove a unique cycle.

<details>
<summary>Hint 1</summary>

**Hint.** List its three zero radial rates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The angular motion never stops.

</details>
<details>
<summary>Solution</summary>

**Solution.** The same trapping annulus contains circles of radii 1,2,3, all periodic because $\\theta'=1$. Two attract and one repels. Thus the inward-boundary argument proves at least one periodic orbit but cannot establish uniqueness or a particular stability type.

</details>

### Exercise 7.9 — An inapplicable planar theorem
<a id="limit-cycles-poincare-bendixson-ex-9"></a>

A forced two-coordinate system is plotted in a bounded plane region. Why is that insufficient for applying Theorem 7.8?

<details>
<summary>Hint 1</summary>

**Hint.** The theorem assumes an autonomous planar state.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the forcing phase if necessary.

</details>
<details>
<summary>Solution</summary>

**Solution.** The clock phase is another state variable in an autonomous representation, generally making the state dimension three. A two-coordinate projection is not the full planar autonomous flow. The Poincaré–Bendixson restriction therefore cannot be imported from the plot alone.

</details>

### Exercise 7.10 — A hole example
<a id="limit-cycles-poincare-bendixson-ex-10"></a>

Compute the divergence of F=(-y+x(1-$r^2$),x+y(1-$r^2$)) and explain its unit-circle orbit on a negative-divergence annulus.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate the Cartesian components.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The annulus does not include the circle's full interior.

</details>
<details>
<summary>Solution</summary>

**Solution.** The divergence is $2-4(x^2+y^2)$, negative for $r>1/\\sqrt2$. The unit circle has r'=0 and $\\theta'=1$, so it is periodic. The annulus around it has a hole, invalidating the simply connected region hypothesis; no contradiction occurs.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Earlier Euler treatment: [Periodic Orbits and Planar Limit Sets](../differential-equations-verified-dynamics/periodic-orbits-planar-limits.md). Additional original worked material and solved exercises remain available there.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

Periodic stability is transverse and orbital, naturally studied through return maps. The planar multiplier formula connects local attraction to integrated divergence, while Bendixson–Dulac excludes cycles only under its full domain conditions. Poincaré–Bendixson is an explicitly cited planar theorem; compact trapping applications prove existence without automatic uniqueness. Parameter-dependent cycle creation is the next topic.
`;export{e as default};