
# Conservation Laws, Entropy and Shocks

A conservation law can remain meaningful after a classical gradient becomes infinite, but its distributional balance alone does not select a unique continuation. Entropy inequalities add that selection. This chapter derives characteristic breaking, jump balance and entropy production, solves convex Riemann problems and constructs a viscous shock profile. The general bounded-data existence and contraction theorem is stated as a named input; the explicit admissibility and limit calculations are proved directly.

Preparation is [hyperbolic energy and characteristics](hyperbolic-conservation-laws.md), weak derivatives, local integral convergence and elementary convexity. We work primarily with a scalar law on the line, $u_t+f(u)_x=0$, with continuously differentiable flux and bounded initial data. A system of conservation laws, or a finite interval with inflow boundaries, needs additional structure and is not covered merely by changing scalar notation to vectors.

## Characteristics explain where the classical description ends

For a smooth solution, the chain rule rewrites the equation as $u_t+f'(u)u_x=0$. Along a path with speed $f'(u)$, the value of u stays constant. A characteristic starting from label xi therefore has position $\xi+t f'(u_0(\xi))$. Its label derivative is $1+t f''(u_0(\xi))u_0'(\xi)$ when the indicated derivatives exist.

As long as this map is invertible and the data remain smooth, it supplies a classical solution. Differentiation gives the gradient as the initial slope divided by that label derivative. A negative minimum of the product of flux curvature and initial slope yields a positive candidate breaking time. If the minimum is attained and the numerator does not vanish at the relevant label, the denominator's approach to zero proves gradient blowup.

The state itself can remain bounded during this event because its characteristic values are still initial values. The failure concerns a single-valued differentiable spatial representation, not an infinite state amplitude. Continuing intersecting characteristic graphs as a multivalued function does not define a distributional solution of the original scalar problem. The weak formulation instead imposes balance on a single-valued almost-everywhere state.

For Burgers flux and smooth initial value minus the sine, the first positive breaking time is one. For smooth nondecreasing Burgers data, the forward label derivative stays at least one, so this steepening mechanism does not cause a forward shock. These conclusions concern the classical formula; arbitrary nonsmooth monotone data still need a weak initial-trace formulation.

## Weak balance includes the initial trace

For bounded u require

$$\int_0^\infty\!\int_{\mathbb R}
[u\phi_t+f(u)\phi_x]dxdt+
\int_{\mathbb R}u_0(x)\phi(0,x)dx=0$$

for every smooth compact spacetime test supported up to the initial time. Boundedness ensures local integrability of both u and its continuous flux. The displayed initial term is meaningful for the bounded initial profile, while a strong local integral trace supplies the usual solution class for uniqueness.

For a piecewise constant jump with left state L, right state R and location st, differentiate the moving interface in distributions. Its coefficient in the conservation equation is $[f]-s[u]$, where brackets mean right minus left. It vanishes precisely when $s(L-R)=f(L)-f(R)$. This Rankine–Hugoniot equation follows also by balancing a shrinking control volume around the interface.

If the states agree, this ratio cannot define a shock speed; there is no actual jump to track. If they differ, the balance gives a speed but no admissibility direction. For Burgers states zero and two, the expansion jump at speed one satisfies this same balance as any proposed weak jump. It is entropy, not another application of conservation, that rules it out.

## Convex entropies give a signed distribution

For a twice differentiable convex entropy eta, define its entropy flux by $q'(u)=\eta'(u)f'(u)$. A smooth solution satisfies the corresponding equality by the chain rule. An entropy solution instead satisfies $\eta(u)_t+q(u)_x\le0$ distributionally. Against a nonnegative compact test this means the integral of $\eta(u)\phi_t+q(u)\phi_x$, with the initial entropy term, is nonnegative.

At a jump the entropy production coefficient is $[q]-s[\eta]$. Thus admissibility requires that coefficient to be nonpositive. This sign convention follows from differentiating the right-state indicator and can be checked directly; reversing the bracket convention reverses both bracket signs and requires corresponding care with the inequality.

For a compressive jump L greater than R and a convex flux, let the chord through the two flux values be l. It has slope s, and $f-l$ is nonpositive between the states. Integrating by parts in the entropy production gives

$$[q]-s[\eta]=\int_R^L\eta''(v)[f(v)-l(v)]\,dv\le0.$$

The endpoint terms vanish because flux and chord agree there. This proves every smooth convex entropy inequality for the jump. For a genuinely curved convex flux, reversing the states reverses the sign and violates a strictly convex entropy. At linear or degenerate portions some inequalities can be equalities, so the strict Lax formulation needs the corresponding nondegeneracy assumption.

### Worked example: the exact Burgers shock defect

Take entropy $u^2/2$ and flux $u^3/3$. The balanced shock speed is the average of its two states. Substituting and simplifying gives entropy coefficient $(R-L)^3/12$. A downward jump has negative defect; an upward jump has positive defect. For L equal to two and R zero the coefficient is minus two thirds. The sign is not inferred from a plotted front: it is an exact distributional calculation.

The entropy defect is concentrated on the shock line. Away from that line the solution is constant and its entropy equation has zero derivative. Integrating over a spacetime region picks up the defect times the time the shock spends there, together with any entropy flux across the region's boundary. A global entropy total cannot be interpreted without that boundary accounting.

## Convex Riemann problems can be verified directly

For a strictly convex flux with a strictly increasing characteristic speed, Riemann data L greater than R give the entropy shock above. If L is less than R, define a self-similar fan: it equals L when $x/t\le f'(L)$, equals R when $x/t\ge f'(R)$, and equals the inverse characteristic speed in between.

Inside the fan the equation follows by differentiating the similarity form. At its two edges the values match continuously, so there is no jump mass in either the conservation or entropy distribution. The entropy equation is equality in each smooth piece. Integrating by parts piecewise, the boundary fluxes cancel at the continuous edges, proving every convex entropy inequality. As time decreases to zero, the fan differs from the initial step only on an interval whose length is proportional to time, proving the local integral initial trace.

For merely convex flux with flat pieces, the inverse characteristic speed may not be single-valued. A generalized inverse and contact discontinuities enter the description. The direct strict-convex construction should not be advertised unchanged for every convex function, and nonconvex fluxes require the appropriate envelope construction rather than a single shock/fan rule based only on state ordering.

### Worked example: an expanding Burgers fan

For states zero and two the entropy solution is zero to the left of x equal to zero, is x divided by t between zero and twice t, and is two to the right. At time t its difference from the initial step is supported in an interval of length twice t and bounded by two, so its local integral trace follows immediately. The balanced expansion shock at x equal to t has the same initial step but violates the quadratic entropy defect sign.

This pair explicitly proves nonuniqueness of distributional weak balance without entropy. Both functions satisfy Rankine–Hugoniot or the smooth-piece equation and have the same initial trace. Only the fan satisfies all convex entropy inequalities. A conservative approximation therefore needs an admissibility mechanism in addition to algebraic mass cancellation.

## Viscosity supplies both a profile and an entropy inequality

Consider the viscous equation $u_t+f(u)_x=\nu u_{xx}$ with positive viscosity. For smooth solutions the convex entropy chain rule gives

$$\eta(u)_t+q(u)_x=\nu\eta(u)_{xx}
-\nu\eta''(u)u_x^2.$$

The second term is nonpositive. Suppose a uniformly bounded family of these solutions converges strongly in local spacetime integral norm as viscosity tends to zero and has the required initial trace. Continuous functions of their values converge locally in integral norm as well, using uniform continuity on their common bounded range. Pair the entropy identity with a nonnegative compact test. The term with viscosity times the second test derivative tends to zero by the uniform entropy bound, and the remaining dissipation has the favorable sign. The limit is an entropy solution.

This is a limit-identification theorem under strong convergence, not a proof that every viscosity family has that convergence. Compactness, initial traces and boundary layers require additional estimates. Uniform boundedness alone gives weak compactness in some topologies but does not pass a nonlinear flux without more structure.

### Worked example: a viscous Burgers shock

For L greater than R set d equal to their difference and s their average. The traveling profile

$$U(\xi)=s-\frac d2\tanh\!\left(\frac{d\xi}{4\nu}\right),
\qquad \xi=x-st,$$

connects L at minus infinity to R at plus infinity. Integrating its traveling-wave ODE once gives $\nu U'=(U-L)(U-R)/2$, and substitution verifies the hyperbolic tangent formula. Its negative derivative confirms compression. The transition width scales as viscosity divided by jump height, with the numerical constant determined by the chosen level fractions.

For fixed positive time away from the shock line, the profile tends to the balanced discontinuity as viscosity tends to zero. Boundedness and the shrinking transition width give local integral convergence too. The entropy limit calculation therefore identifies that downward shock as admissible. A translated profile represents the same front with a different initial location, so initial trace still fixes the translation.

## The bounded-data uniqueness theorem has a local contraction form

The general Kruzhkov theorem is an explicit input: for a continuously differentiable scalar flux and bounded initial data on the real line, there is a unique bounded entropy solution in the usual local integral initial-trace class. The entropies $|u-k|$, with flux $\operatorname{sign}(u-k)[f(u)-f(k)]$, suffice. They can be obtained from smooth convex approximations with a consistent sign convention.

Its central comparison argument, usually called doubling of variables, establishes the Kato inequality between two entropy solutions. That general argument is not replaced by the single-jump calculation in this chapter. Once that inequality is available, integration against cutoffs with sides moving at a common bound C on the characteristic speeds gives

$$\int_a^b|u(t,x)-v(t,x)|dx
\le\int_{a-Ct}^{b+Ct}|u_0(x)-v_0(x)|dx.$$

The moving cutoff's flux contribution has the correct sign because $|f(u)-f(v)|\le C|u-v|$ on the common bounded state range. Smoothly approximate the interval and its moving edges, then pass by dominated convergence. This explains both local finite dependence and contraction without assuming the initial profiles are integrable over the entire line.

If the initial difference is globally integrable, increasing the interval to cover the line gives global integral contraction. With identical initial data, local contraction gives uniqueness. A finite interval requires boundary entropy conditions; arbitrary endpoint values do not inherit this line theorem. For systems, a single convex entropy generally does not furnish the same scalar contraction result.

## Concave flux reverses the state-order shortcut

### Worked example: a traffic flux

For density between zero and one let $f(\rho)=\rho(1-\rho)$, a strictly concave flux. States one fifth and four fifths have equal flux, so their jump speed is zero. Their characteristic speeds are three fifths on the left and minus three fifths on the right, entering the jump from both sides. The upward density jump is compressive and entropy admissible.

Reverse those states and the entropy solution is a rarefaction with characteristic speeds from minus three fifths to three fifths. Inside its fan the density is $(1-x/t)/2$, decreasing as the similarity coordinate increases. This does not contradict the Burgers state ordering: the flux curvature has the opposite sign. Compression is a statement about characteristic speeds entering a front, not a universal instruction that the numerical state must jump downwards.

The density interval is invariant for the scalar entropy solution with initial values in that interval, by comparison with the two constant solutions. That conclusion uses the scalar comparison theorem. For a fluid system, positivity of density and pressure requires a system-specific invariant-region result; a traffic analogy does not prove it.

## Conservation and numerical selection remain separate

A shared finite-volume flux conserves cell totals up to boundary flux. Consistency requires its coincident-trace value to equal the physical flux. Monotonicity under an appropriate time restriction supplies a discrete comparison and bound mechanism. A convergence theorem additionally identifies compactness and the entropy inequality of any limit. These are different hypotheses with different jobs.

A shock shifted by a distance epsilon has order-one pointwise difference near its front but integral error equal to jump magnitude times that distance. This is why local or global integral norms fit entropy contraction and shock convergence. A narrow smooth transition and a discontinuous exact front can be close in that norm despite an unavoidable pointwise discrepancy.

The retained original hyperbolic reading supplies the earlier twenty numerical/conservation bridge problems with their original solutions. Detailed finite-volume approximation belongs to the numerical-mathematics primary. Here the analytic target is explicit: the bounded entropy solution with its initial trace, rather than an arbitrary mass-conserving weak profile or a picture of a sharp front.

## Exercises with staged help

### 1. Breaking a smooth profile

For Burgers initial data $-2\sin x$, find the first positive characteristic breaking time.

<details><summary>Hint 1</summary>

The flux curvature is one.

</details>
<details><summary>Hint 2</summary>

Use the most negative initial slope in the label derivative.

</details>
<details><summary>Full solution</summary>

The smallest slope is minus two, so the minimum label derivative first reaches zero at time one half. The corresponding initial slope is nonzero, and the gradient formula diverges there. The transported state values remain bounded between minus two and two before the event.

</details>

### 2. A shock with negative speed

Find the Burgers entropy shock speed for left state one and right state minus three, and check characteristic compression.

<details><summary>Hint 1</summary>

The speed is the arithmetic mean of the states.

</details>
<details><summary>Hint 2</summary>

Compare it with the two characteristic speeds, which equal the states.

</details>
<details><summary>Full solution</summary>

The speed is minus one, lying strictly between minus three and one. Characteristics enter from each side, so the downward jump is compressive even though it moves to the left. Direction of motion and admissibility are distinct properties.

</details>

### 3. Entropy defect sign

Compute the quadratic Burgers entropy defect for left state minus one and right state one.

<details><summary>Hint 1</summary>

Use right-minus-left brackets.

</details>
<details><summary>Hint 2</summary>

The defect is the cubed state difference divided by twelve.

</details>
<details><summary>Full solution</summary>

The defect is $2^3/12=2/3$, positive. The jump has zero balanced speed but violates the entropy inequality. The entropy continuation is the fan with value x divided by t between similarity speeds minus one and one, bounded by the two constant states outside.

</details>

### 4. A fan trace

Prove local integral attainment of Riemann data for a bounded self-similar fan with finite edge speeds.

<details><summary>Hint 1</summary>

The region differing from the initial step has length bounded by a constant times time.

</details>
<details><summary>Hint 2</summary>

Multiply that length by a uniform state-difference bound.

</details>
<details><summary>Full solution</summary>

On every fixed compact interval the difference is supported in the interval swept out by the finite fan edges and the initial jump. Its length is at most a fixed constant times t and its magnitude at most the state-range width. Their product tends to zero, proving local integral convergence to the step. No pointwise value at the initial jump is required.

</details>

### 5. Viscous profile differentiation

Verify that the displayed hyperbolic tangent profile satisfies $\nu U'=(U-L)(U-R)/2$.

<details><summary>Hint 1</summary>

Differentiate the hyperbolic tangent and use the square of the hyperbolic secant.

</details>
<details><summary>Hint 2</summary>

The two factors on the right are opposite half-jump shifts of the same tangent term.

</details>
<details><summary>Full solution</summary>

The derivative is $-d^2\operatorname{sech}^2(d\xi/(4\nu))/(8\nu)$. The product of the two shifted factors is $-d^2\operatorname{sech}^2(d\xi/(4\nu))/4$; dividing it by two gives exactly viscosity times the derivative. The limits at the two infinities are L and R, so it connects the correct states with the balanced speed.

</details>

### 6. A nonlinear weak-limit gap

Why is weak convergence alone insufficient to pass from viscous solutions to the nonlinear flux and entropy terms?

<details><summary>Hint 1</summary>

Compare weak convergence with nonlinear squaring.

</details>
<details><summary>Hint 2</summary>

The stated limit argument assumes local strong integral convergence and a common bounded range.

</details>
<details><summary>Full solution</summary>

Weak convergence does not preserve nonlinear compositions: oscillations can have zero weak mean and nonzero squared mean. Strong local integral convergence with a uniform state bound allows continuous flux and entropy compositions to converge by uniform continuity and truncation of small exceptional sets. Without a suitable stronger compactness or structural argument, the limiting conservation and entropy identities remain unproved.

</details>

### 7. A local dependence interval

If the common characteristic-speed bound is four, identify the initial interval controlling the solution difference over $[2,5]$ at time one half.

<details><summary>Hint 1</summary>

Expand both ends backward by speed times time.

</details>
<details><summary>Hint 2</summary>

The local contraction estimate bounds an integral difference, not arbitrary point values.

</details>
<details><summary>Full solution</summary>

The expanded interval is $[0,7]$. The integral difference on $[2,5]$ at that time is at most the initial integral difference on $[0,7]$. If it vanishes initially there, the two entropy solutions agree almost everywhere on the later interval. This conclusion uses the stated scalar comparison theorem and its bounded state range.

</details>

### 8. Concave compression

For the traffic flux, classify the jump from density one quarter to three quarters and compute its speed.

<details><summary>Hint 1</summary>

The two flux values coincide.

</details>
<details><summary>Hint 2</summary>

The characteristic derivative is one minus twice density.

</details>
<details><summary>Full solution</summary>

The speed is zero. Characteristic speeds are one half on the left and minus one half on the right, entering the stationary front. It is therefore an entropy compression for the concave flux despite being an upward density jump. A rule based only on downward state jumps would misclassify it.

</details>

### 9. Shifted-shock error

Two jumps of height h have the same states and differ only in position by epsilon. Compute their global integral difference.

<details><summary>Hint 1</summary>

They agree except between their two front locations.

</details>
<details><summary>Hint 2</summary>

The disagreement has constant magnitude on that strip.

</details>
<details><summary>Full solution</summary>

The difference has magnitude $|h|$ on an interval of length $|\epsilon|$, so its integral is $|h\epsilon|$. Its essential-supremum difference remains $|h|$ for every nonzero shift. Integral error therefore records a small location displacement in a way pointwise maximum error cannot.

</details>

### 10. A conservation-only claim

Repair a claim that a shared interface flux proves convergence to the unique entropy solution on any domain.

<details><summary>Hint 1</summary>

Shared flux proves telescoping balance only.

</details>
<details><summary>Hint 2</summary>

Identify consistency, stability, admissibility, compactness and boundary assumptions separately.

</details>
<details><summary>Full solution</summary>

State that shared flux conserves discrete cell totals up to physical boundary flux. Convergence to the intended entropy solution additionally needs consistency with the physical flux, a suitable stability and entropy mechanism, compactness or a corresponding theorem, and boundary rules matching the solution class. The scalar line contraction theorem does not automatically apply to a finite-domain scheme or a system of laws.

</details>

## Sources and continuation

Dafermos, *Hyperbolic Conservation Laws in Continuum Physics*, and Bressan, *Hyperbolic Systems of Conservation Laws*, distinguish scalar entropy theory from systems. Kruzhkov bounded-data existence and doubling-of-variables contraction are named theorem inputs here. The jump calculation, convex entropy defect, strict-convex fan, viscous profile and strong-limit entropy identification are direct proofs. Variational and pattern equations next require different compactness and stability mechanisms rather than an indiscriminate reuse of scalar entropy contraction.
