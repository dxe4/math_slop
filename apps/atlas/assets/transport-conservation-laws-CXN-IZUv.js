var e=`---
parent_id: book-partial-differential-equations
chapter_id: transport-conservation-laws
title: "Transport and Scalar Conservation Laws"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Transport and Scalar Conservation Laws

Conservation relates a local differential equation to a balance across the boundary of a region. For a smooth density u(t,x) and a flux F(u), the equation is u_t+F(u)_x=0. It says that the amount in an interval changes by inflow minus outflow. A classical solution may lose differentiability when its characteristics meet. The balance law can remain meaningful across a moving jump, but then an additional admissibility rule is needed to distinguish physically appropriate discontinuities.

This chapter gives the classical first-course picture in one space dimension. It proves smooth characteristic formulas, the jump-speed condition and explicit Riemann solutions for Burgers' equation. It does not prove existence or uniqueness for arbitrary bounded entropy data. Such general weak theory belongs to the L4 PDE continuation. Here every discontinuous example has finitely many explicitly described smooth regions, so its balance identity can be justified by ordinary integration by parts.

The preparation is [characteristics](first-order-characteristics.md), the fundamental theorem of calculus and elementary convexity. We use the sign convention that a positive flux moves conserved amount toward increasing x. The left and right limits of a moving interface are uL and uR; brackets mean right minus left, [q]=qR−qL.

## 1. From interval balance to a PDE

Suppose u and its first derivatives are continuous on a time-space rectangle. Conservation on every fixed interval [a,b] means

\\[
 \\frac{d}{dt}\\int_a^b u(t,x)\\,dx=F(u(t,a))-F(u(t,b)).
\\]

Differentiation under the integral and the fundamental theorem yield ∫_a^b(u_t+F(u)_x)dx=0. Since the integrand is continuous and this holds for all intervals, it vanishes pointwise. Conversely integrating the PDE proves the balance. This equivalence requires the stated smoothness. At a shock, differentiating the nonlinear composite across the jump by an ordinary chain rule is invalid.

For linear flux F(u)=cu, the solution with C1 initial data g is u(t,x)=g(x−ct). Every profile is translated with the same speed; distinct characteristics cannot collide. For nonlinear F∈C2, the classical equation becomes u_t+F'(u)u_x=0. Along a characteristic u is constant, so the characteristic carrying the initial value g(ξ) has location

\\[
 x=\\Xi_t(\\xi)=\\xi+tF'(g(\\xi)),\\qquad u(t,\\Xi_t(\\xi))=g(\\xi).
\\]

Where the map is invertible,

\\[
 u_x=\\frac{g'(\\xi)}{1+tF''(g(\\xi))g'(\\xi)}.
\\]

A formula before inversion is a parametric description, not automatically a function. Vanishing of the denominator signals failure of the smooth graph construction. Depending on the data, loss of global invertibility can also require control at spatial infinity.

## 2. A precise smooth lifespan for Burgers

For Burgers' equation choose F(u)=u²/2. Assume g is C1 and bounded, with bounded derivative. Then Ξ_t(ξ)=ξ+t g(ξ) is onto R whenever it is strictly increasing: boundedness of g makes its limits at infinity equal to ±∞. If m=inf g' is negative, set T*=−1/m. For 0≤t<T*, Ξ_t'≥1+tm>0, so it is a C1 diffeomorphism. The characteristic formula gives a global-in-space classical solution up to that time.

If g' attains its negative minimum at ξ0, the gradient there is m/(1+tm), tending to negative infinity as t approaches T* from below. The value remains g(ξ0), so the singularity is in the gradient, not the density. No C1 continuation with these data exists through that point: every C1 solution must follow the same characteristics before the collision and would have an unbounded derivative on approach.

When m=0 or m>0, the same construction works for every finite t≥0. This is a sufficient global smoothness conclusion under the bounded-data hypotheses. An unbounded affine profile can also be solved, but its behavior at infinity needs a separate argument and is not an instance of this bounded-data theorem.

**Worked example 3.1: bounded compression.** Take g(ξ)=−tanhξ. Then g'=−sech²ξ has minimum −1 at zero. The map ξ−t tanhξ is a diffeomorphism for t<1. The solution stays between minus one and one, while u_x(t,0)=−1/(1−t). At t=1 the central gradient breaks. Drawing continued characteristic lines after that time produces intersecting branches, which do not constitute a classical solution.

**Worked example 3.2: bounded expansion.** With g(ξ)=tanhξ, one has Ξ_t'=1+t sech²ξ≥1. The solution is classical for all forward time and its gradient is sech²ξ/(1+t sech²ξ), everywhere nonnegative and bounded by 1/(1+t). Characteristics separate because larger values travel faster. The distinction between compression and expansion will reappear for discontinuous initial data.

## 3. Balance across a moving jump

Let an interface be x=s(t), with s C1, and let u be C1 on each side with continuous one-sided traces. Assume the PDE holds in the two open regions. For a fixed interval containing the interface, differentiate its split integral:

\\[
 \\frac{d}{dt}\\left(\\int_a^{s(t)}u_L\\,dx+
 \\int_{s(t)}^b u_R\\,dx\\right)
 =F(u(a))-F(u(b))+s'(u_L-u_R)+F(u_R)-F(u_L).
\\]

The extra interface contribution vanishes precisely when

\\[
 s'(t)[u]=[F(u)].
\\]

This is the Rankine–Hugoniot condition. For a genuine jump [u]≠0, its speed is the secant slope [F]/[u]. If the traces agree, continuity produces no jump condition of this form; division by [u] is then meaningless.

There is an equivalent test-function statement. For a smooth function φ compactly supported away from the top time boundary, a piecewise smooth solution with initial trace g satisfies

\\[
 \\int_0^\\infty\\!\\int_{\\mathbb R}
 (u\\phi_t+F(u)\\phi_x)\\,dx\\,dt+
 \\int_{\\mathbb R}g(x)\\phi(0,x)\\,dx=0.
\\]

Integrate separately on each side of the interface. Interior terms vanish by the classical PDE; the moving-boundary term is the integral of φ(s(t),t)([F]−s'[u]) up to an overall orientation sign. It vanishes exactly under the displayed jump condition. All integrals here can be evaluated as ordinary integrals over finitely many smooth regions. This proves the stated identity for our examples without importing a general weak compactness theorem.

**Worked example 3.3: a Burgers shock.** Let uL=2 and uR=0. The jump moves at speed ((0²−2²)/2)/(0−2)=1. Thus u(t,x)=2 for x<t and zero for x>t satisfies the conservation identity with the corresponding step initial data. The left characteristics travel at speed two and the right characteristics at speed zero; both move toward the interface in its moving frame. Assigning any bounded value on the interface itself does not change the integral identity.

## 4. Why conservation alone is insufficient

For the reversed data uL=0,uR=2, Rankine–Hugoniot again permits a discontinuity traveling at speed one. Characteristics now move away from that jump. It is an expansion shock. The same initial data also admit the continuous fan

\\[
 u(t,x)=\\begin{cases}
 0,&x\\le0,\\\\
 x/t,&0<x<2t,\\\\
 2,&x\\ge2t,
 \\end{cases}\\qquad t>0.
\\]

Inside the fan u_t=−x/t² and u u_x=x/t². At its edges u is continuous, so integration by parts produces no jump defect. The fan has the correct step initial trace locally in the integral sense: on any bounded spatial interval, its difference from the initial step is supported in an interval of length 2t and is bounded by two, so the integral of the absolute difference tends to zero. Conservation alone therefore admits at least two candidates for these data.

For a strictly convex flux, a compressive shock satisfies the Lax inequalities

\\[
 F'(u_R)<s'<F'(u_L).
\\]

For distinct constant Burgers states this is equivalent to uL>uR, because s'=(uL+uR)/2. The inequalities express that characteristics enter the shock from both sides. They are an admissibility criterion, additional to conservation. We next derive the same orientation from a convex entropy inequality and from viscous smoothing in this explicit setting.

## 5. Convex entropy and the jump sign

Let η be C2 and convex and define its entropy flux q by q'(u)=η'(u)F'(u). A classical solution satisfies η(u)_t+q(u)_x=0 by the chain rule. A dissipative discontinuous solution is required to satisfy the distributional inequality η(u)_t+q(u)_x≤0. For our piecewise smooth class this means that the jump coefficient obeys

\\[
 [q]-s'[\\eta]\\le0.
\\]

Indeed, integrating against a nonnegative smooth test function gives the opposite-sign integrated inequality ∫(ηφ_t+qφ_x)+∫η(g)φ(0,·)≥0. The sign comes from integration by parts and should always be checked rather than guessed.

For Burgers choose η(u)=u²/2 and q(u)=u³/3. Writing a=uL,b=uR and s'=(a+b)/2, direct algebra gives

\\[
 [q]-s'[\\eta]=\\frac{(b-a)^3}{12}.
\\]

Thus this entropy rejects every expansion jump b>a and accepts every compressive jump b<a. More generally, for any C2 convex η, use q'=uη' and the identity s'=(a+b)/2 to write the coefficient as ∫_a^b(u−s')η'(u)du. Integration by parts, or pairing symmetric points about s', shows it is nonpositive when b<a: for b>a the integral equals ∫_0^{(b-a)/2}r[η'(s'+r)−η'(s'−r)]dr≥0, and reversal changes its sign. Strict convexity gives a strict sign for a genuine jump.

The continuous rarefaction has no interface entropy defect, since its values and entropy fluxes agree across the edges. On each smooth region entropy is conserved. Thus it satisfies all these convex entropy inequalities. These checks establish admissibility of the explicit solutions, not a uniqueness theorem for arbitrary rough initial data.

## 6. Rarefactions for a convex flux

Suppose F is C2 with F''>0 on the closed interval between a<b. Seek a self-similar solution u(t,x)=V(x/t). Within a nonconstant smooth region the equation becomes (F'(V)−ξ)V'=0, so V=(F')^−1(ξ). The Riemann fan is

\\[
 V(\\xi)=\\begin{cases}
 a,&\\xi\\le F'(a),\\\\
 (F')^{-1}(\\xi),&F'(a)<\\xi<F'(b),\\\\
 b,&\\xi\\ge F'(b).
 \\end{cases}
\\]

The inverse is C1 because F'' never vanishes there. This solution is continuous for t>0, solves the PDE on the three open pieces and has no jump defect at the matching edges. Its difference from the step data lies in a cone of width proportional to t on any fixed time slice, so it has the local integral initial trace. A finite wave speed range here follows from bounded values on [a,b].

For a>b a shock with speed (F(a)−F(b))/(a−b) is compressive by the strict convexity secant inequalities. This gives the complete elementary Riemann solver for one strictly convex scalar flux: expansion fans for increasing data, shocks for decreasing data and constants for equal states. Interactions of several waves require further bookkeeping and are not solved by applying one Riemann formula independently forever.

## 7. Viscous selection in a worked traveling wave

Consider viscous Burgers u_t+u u_x=νu_xx with ν>0. A traveling profile U(z), z=x−st, satisfies νU''=(U−s)U'. Integrating once and imposing end states a at minus infinity and b at plus infinity yields νU'=(U−a)(U−b)/2 and s=(a+b)/2. The speed is again the conservation jump speed.

When a>b put d=a−b. The explicit profile is

\\[
 U(z)=\\frac{a+b}{2}-\\frac d2\\tanh\\left(\\frac{dz}{4\\nu}\\right).
\\]

It decreases from a to b, and substitution verifies the first-order profile equation. Its transition thickness is proportional to ν/d. As ν decreases to zero, it tends at every z≠0 to the compressive step. On each bounded interval the difference in absolute integral tends to zero: outside a short neighborhood of zero convergence is uniform, while inside that neighborhood both profiles are bounded by the same end states. This is a direct proof for the displayed family, not a general vanishing-viscosity theorem.

For a smooth viscous solution, multiplication by η'(u) gives

\\[
 \\eta(u)_t+q(u)_x
 =\\nu\\eta(u)_{xx}-\\nu\\eta''(u)u_x^2.
\\]

The final term is nonpositive for convex η. It explains the entropy sign. Passing this identity to a limit in a general family would require convergence and bounds not proved here. The explicit traveling wave supplies one complete instance in which viscosity selects a compressive shock.

## 8. Integral conservation and finite domains

On the whole line, a compactly supported smooth solution has constant total integral as long as the support and smoothness justify the calculation. On a periodic domain the same follows because the endpoint fluxes cancel. On a bounded interval total amount generally changes through the endpoints. Conservation is a boundary statement as well as an interior equation.

For nonlinear transport, the direction of boundary entry depends on the state through F'(u). Prescribing both endpoint traces without considering these characteristic directions can overdetermine the problem. A moving jump inside the domain also carries its own compatibility condition; its speed cannot be chosen independently of the states. These facts connect the geometric discussion of the preceding chapter with the integral formulation here.

A finite-difference approximation may conserve a discrete sum while converging to an inadmissible weak solution if no appropriate entropy mechanism is supplied. Conversely a visually smooth numerical plot does not prove a classical solution exists beyond characteristic breaking. Numerical methods appear later with their own consistency, stability and admissibility discussion. The formulas here provide exact benchmarks and explain which mathematical property an approximation should represent.

## 9. Range, frames and what a shock conserves

Before characteristic breaking, the Burgers formula immediately preserves the value range: every u(t,x) is an initial value g(ξ), because the characteristic map is onto. In particular a bound |g|≤M implies |u|≤M. The same bound holds for each explicit Riemann shock or rarefaction whose end states lie in [−M,M]. A gradient singularity therefore need not be preceded by growth in the maximum amplitude. This distinction is visible in the bounded tanh example and matters when interpreting a numerical signal that appears harmless in amplitude.

Burgers' equation is also invariant under a change to a uniformly moving frame with a corresponding velocity shift. If u solves it classically and V is constant, define w(t,y)=u(t,y+Vt)−V. Then w_t=u_t+Vu_x and w_y=u_x, so w_t+w w_y=u_t+u u_x=0. A shock with physical speed s has speed s−V in the new coordinate, and its end states become a−V,b−V. Their average is s−V, consistent with Rankine–Hugoniot. Compression is unchanged because the two relative characteristic speeds are unchanged.

The jump transports conserved amount but dissipates convex entropy. For the quadratic entropy, a compressive Burgers jump a>b has coefficient −(a−b)³/12. On an interval containing only that moving discontinuity, the entropy balance includes this negative interface contribution in addition to endpoint entropy fluxes. It would be incorrect to call every decreasing integral a failure of conservation: the conserved quantity is u, whereas u²/2 is the selected entropy. Their fluxes and balance laws differ. Conversely, checking only the entropy decay does not replace checking the original amount balance and its exact jump speed.

## 10. A complete interaction of two shocks

Take three constant Burgers states a>b>c, initially separated at positions x1<x2. The two jumps are compressive. Until they meet, their locations are s1(t)=x1+(a+b)t/2 and s2(t)=x2+(b+c)t/2. The first shock is faster because its speed exceeds the second by (a−c)/2. They meet at

\\[
 t_*=\\frac{2(x_2-x_1)}{a-c},\\qquad
 x_*=x_1+\\frac{a+b}{2}t_*.
\\]

Before that time the solution is a to the left of s1, b between s1 and s2, and c to the right of s2. Afterward the intermediate state disappears and a single compressive shock separates a from c, with location x*+(a+c)(t−t*)/2. Every open constant region solves the PDE, and each interface has exactly its Rankine–Hugoniot speed. The new shock also satisfies compression because c<(a+c)/2<a.

This piecewise construction satisfies the conservation test-function identity across the interaction point as well. Split the time integral at t*. Integration by parts on the lower and upper time slabs produces time-slice terms at t*. As t approaches t* from below, the intermediate interval has length s2−s1 tending to zero; its bounded contribution against any compactly supported test function tends to zero. The remaining a and c regions converge locally in absolute integral to the two-state step at x*. The upper time slab has exactly that initial trace. Hence the two time-slice terms cancel, leaving no point mass at the meeting event. Interface balance alone would not excuse checking this trace matching, but here the bounded vanishing-width argument supplies it.

Convex entropy inequalities hold by the same decomposition. Every shock segment has a nonpositive entropy defect. The entropy of the bounded intermediate state occupies a shrinking interval, so the time traces again match and no additional interaction defect of the wrong sign appears. This verifies the explicit finite-interaction solution without appealing to a general entropy semigroup theorem.

For a numerical example let a=3,b=1,c=−1 and x1=0,x2=4. The initial speeds are two and zero, so the shocks meet at t*=2,x*=4. The outgoing shock has speed one. Continuing the two incoming lines past their meeting would reverse their order and assign contradictory constant regions. The interaction calculation replaces that invalid continuation by one new admissible interface. This is a concrete instance of the broader principle: characteristic or wave formulas must be updated when the geometry they assume ceases to hold.

## Exercises

### PDE-CONS-E001 — Interval balance
For u(t,x)=g(x−ct), verify interval conservation with flux cu.
<details><summary>Hint 1</summary>Differentiate the integral after shifting its limits.</details>
<details><summary>Hint 2</summary>The result should depend only on the two endpoint values.</details>
<details><summary>Full solution</summary>The interval amount is ∫_{a−ct}^{b−ct}g(y)dy. Its derivative is −cg(b−ct)+cg(a−ct), which equals incoming flux cu(t,a) minus outgoing flux cu(t,b). This establishes the balance directly for continuous g; the classical PDE additionally needs differentiability.</details>

### PDE-CONS-E002 — Breaking time
For g(ξ)=−A tanh(kξ), with A,k>0, find the smooth breaking time.
<details><summary>Hint 1</summary>The minimum derivative occurs at zero.</details>
<details><summary>Hint 2</summary>Use T*=−1/inf g'.</details>
<details><summary>Full solution</summary>One has g'=−Ak sech²(kξ), so its minimum is −Ak. Thus T*=1/(Ak). Along the characteristic from zero, u_x=−Ak/(1−Akt), which tends to minus infinity while u remains zero on that characteristic.</details>

### PDE-CONS-E003 — Shock speed
For Burgers states uL=3,uR=−1, calculate the shock speed and check compression.
<details><summary>Hint 1</summary>The speed is the arithmetic mean of the two states.</details>
<details><summary>Hint 2</summary>Compare it to the two characteristic speeds.</details>
<details><summary>Full solution</summary>The speed is (3−1)/2=1. The right characteristic speed is −1 and the left speed is three, so −1<1<3. Both characteristic families enter the moving shock; it is compressive.</details>

### PDE-CONS-E004 — Wrong speed
Why does a Burgers jump from two to zero moving at speed three fail conservation?
<details><summary>Hint 1</summary>Compute [F] and s'[u].</details>
<details><summary>Hint 2</summary>The interface defect cannot be canceled by the constant regions.</details>
<details><summary>Full solution</summary>Here [F]=−2 and [u]=−2, whereas s'[u]=−6. The defect [F]−s'[u] is four, not zero. The two constant regions separately solve the PDE, but a test function supported near the interface detects the nonzero balance defect.</details>

### PDE-CONS-E005 — Entropy coefficient
Evaluate the quadratic entropy jump coefficient for a=0,b=2.
<details><summary>Hint 1</summary>Use (b−a)³/12.</details>
<details><summary>Hint 2</summary>A dissipative jump requires a nonpositive result.</details>
<details><summary>Full solution</summary>The coefficient is 8/12=2/3>0. This expansion shock violates the convex entropy inequality even though it satisfies Rankine–Hugoniot at speed one. Conservation and entropy are independent requirements.</details>

### PDE-CONS-E006 — A rarefaction
Write the Burgers rarefaction for uL=−1,uR=2 and identify its edge speeds.
<details><summary>Hint 1</summary>The middle fan is x/t.</details>
<details><summary>Hint 2</summary>Match to the two constant values.</details>
<details><summary>Full solution</summary>For t>0 the solution is −1 when x≤−t, x/t when −t<x<2t and two when x≥2t. The left and right edges travel at speeds −1 and two. Values match continuously at both edges, so no jump defect is present there.</details>

### PDE-CONS-E007 — Initial trace
Bound the local integral difference between this fan and its initial step data.
<details><summary>Hint 1</summary>The difference is supported between −t and 2t.</details>
<details><summary>Hint 2</summary>A bound by interval length times maximum difference suffices.</details>
<details><summary>Full solution</summary>The interval has length 3t, and the difference is at most three. Thus its absolute integral over any compact set is at most 9t, tending to zero. This verifies the local integral trace; no pointwise assertion at the initial jump is needed.</details>

### PDE-CONS-E008 — Convex secants
For a>b and strictly convex C2 flux F, prove F'(b)<[F]/[u]<F'(a).
<details><summary>Hint 1</summary>Write the secant slope as an average derivative on [b,a].</details>
<details><summary>Hint 2</summary>The derivative is strictly increasing.</details>
<details><summary>Full solution</summary>The slope is (a−b)^−1∫_b^aF'(v)dv. Strict convexity makes F'(v) strictly between the endpoint derivative values on the interval interior. Its average therefore lies strictly between them, giving exactly the compressive inequalities.</details>

### PDE-CONS-E009 — Viscous width
For the displayed viscous profile with a−b=d, find the distance between points where the tanh argument is minus one and plus one.
<details><summary>Hint 1</summary>The argument is dz/(4ν).</details>
<details><summary>Hint 2</summary>Solve for each endpoint z.</details>
<details><summary>Full solution</summary>The two points are z=−4ν/d and z=4ν/d. Their distance is 8ν/d. This quantifies one reasonable transition-width convention and shows its proportionality to viscosity and inverse proportionality to jump height.</details>

### PDE-CONS-E010 — Periodic amount
Prove that a C1 periodic solution of the conservation law has constant mean.
<details><summary>Hint 1</summary>Integrate the equation over one period.</details>
<details><summary>Hint 2</summary>The periodic endpoint fluxes agree.</details>
<details><summary>Full solution</summary>The derivative of the period integral is −F(u(t,T))+F(u(t,0))=0 because the endpoint values coincide. Division by T gives a constant mean. This reasoning remains valid for the finite-interface examples when every internal Rankine–Hugoniot defect vanishes.</details>

### PDE-CONS-E011 — Viscous entropy
Derive the entropy identity for smooth viscous Burgers and η(u)=u²/2.
<details><summary>Hint 1</summary>Multiply the PDE by u.</details>
<details><summary>Hint 2</summary>Use u u_xx=(u²/2)_xx−u_x².</details>
<details><summary>Full solution</summary>Multiplication gives (u²/2)_t+(u³/3)_x=νu u_xx. The product identity converts the right side to ν(u²/2)_xx−νu_x². The last term is nonpositive and measures quadratic entropy dissipation in smooth viscous flow.</details>

### PDE-CONS-E012 — A different convex flux
On positive states take F(u)=u³/3 and Riemann data a=1,b=2. Find the rarefaction.
<details><summary>Hint 1</summary>F'(u)=u² is invertible on the state interval.</details>
<details><summary>Hint 2</summary>The fan edges are F'(1) and F'(2).</details>
<details><summary>Full solution</summary>The solution is one for x/t≤1, sqrt(x/t) for 1<x/t<4 and two for x/t≥4. The square root is the positive inverse appropriate to [1,2]. Since F''=2u>0 there, the convex fan construction applies. It would be invalid to use this inverse across both positive and negative states without further analysis.</details>

## Sources and scope

This is original exposition of smooth transport, finite-interface conservation and explicit scalar Riemann problems. Standard classical PDE and conservation-law treatments provide the benchmark scope. General entropy existence, stability, uniqueness and convergence of numerical approximations are not asserted from these elementary calculations. The L4 weak/nonlinear PDE continuation develops those questions separately.

## Summary

A conservation law is a balance of amount and endpoint flux. Smooth nonlinear characteristics may compress until gradients fail while values remain bounded. A moving jump then has a forced speed, but conservation alone does not select a unique continuation. Convex entropy and compressive characteristics distinguish shocks from expansion fans in the explicit convex examples. Viscous traveling waves explain the same orientation through a complete calculation, while broader weak theory remains a separate task.
`;export{e as default};