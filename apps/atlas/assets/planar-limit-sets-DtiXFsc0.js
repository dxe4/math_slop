var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: planar-limit-sets
title: "Planar Limit Sets: Compactness, Exclusion and Trapping"
level: graduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Planar Limit Sets: Compactness, Exclusion and Trapping

A bounded drawing of a trajectory does not identify its limiting motion. The curve may approach an equilibrium, a periodic orbit or a network containing equilibria; it may also approach a boundary missing from the model's domain. This chapter proves the compactness and energy arguments that organise these alternatives and then states precisely where the Poincaré–Bendixson theorem supplies the specifically planar conclusion.

Required preparation is a continuously differentiable local ODE flow, compactness, connectedness, Green's theorem and the elementary first-integral method. The [periodic-orbit chapter](periodic-orbits-planar-limits.md) supplies return maps and transverse stability. Its original combined source remains a [registered complete supporting reading](back-matter/retained-periodic-planar-reading.md), with all earlier examples and solutions. The general Jordan-curve and Poincaré–Bendixson results used here are named theorem inputs. The limit-set, divergence, trapping and worked-model arguments are developed directly.

## Compact containment supplies the right limit set

Let a continuously differentiable vector field on an open subset of the plane generate its unique local flow. Assume the positive orbit under discussion remains in one compact subset of that open domain. This is stronger than saying its coordinates are bounded: the compact set stays inside the region where the equation is defined. Continuation then makes the orbit exist for all nonnegative time.

Its omega-limit set consists of limits of states along times tending to positive infinity. Equivalently, it is the intersection of the closures of all forward tails. Each tail closure is a nonempty compact subset of the trapping compact set. These closures are nested, so their intersection is nonempty and compact. Each tail is the continuous image of a connected time interval and is connected; taking its closure preserves connectedness. A nested intersection of nonempty compact connected sets is connected as well. For proof of the last assertion, a disconnection of the intersection by disjoint relative neighbourhoods would, by compactness and nesting, eventually disconnect one tail closure.

The set is invariant in both time directions. Given a limit point, take an orbit subsequence converging to it. For any fixed short positive or negative time, continuous dependence moves that subsequence to the corresponding shifted orbit times, which are still arbitrarily large. The shifted limit belongs to the omega-limit set. Compact containment lets these short extensions be repeated for every finite time. Thus a point of the limit set has a complete orbit within it, even though the original hypothesis concerned only the forward orbit of the initial point.

The distance from the original trajectory to its omega-limit set tends to zero. Otherwise there would be a sequence of late times with distance bounded below by one positive number. Compactness gives a convergent subsequence of those states. Its limit belongs to the omega-limit set by definition, contradicting that distance bound. This argument proves attraction to the set without identifying whether that set is a point, a curve or a network.

If the omega-limit set is finite, connectedness forces it to be a single point. Invariance then makes that point an equilibrium. A picture showing several separated late-time clusters cannot be justified as a finite omega-limit set of one such continuous-time orbit without explaining the motion connecting them.

## A decreasing quantity restricts every limit orbit

Suppose a continuously differentiable function is nonincreasing along the trajectory and bounded below on the trapping compact set. Its values converge to a finite limit. By continuity, it takes that same value at every omega-limit point. Invariance says the entire orbit through each such point remains in the level set, so its orbital derivative vanishes there.

Consequently the omega-limit set lies in the largest invariant subset of the zero-derivative set. The earlier distance-to-limit-set result then shows convergence toward that invariant subset. This is the compact finite-dimensional core of LaSalle's argument. It does not identify that subset merely by setting the derivative expression to zero once; an orbit must remain in the zero set for all time.

**Worked example: a damped oscillator.** For $x'=y$, $y'=-x-cy$ with $c>0$, the energy $(x^2+y^2)/2$ has derivative $-cy^2$. Every energy sublevel is compact and positively invariant, so all solutions are global and bounded. The zero-derivative set is the horizontal axis. At a nonzero point of that axis, the vertical derivative is nonzero, so the trajectory leaves the axis immediately. The largest invariant subset is therefore only the origin. The argument proves global convergence to that equilibrium. Energy sublevels also prove Lyapunov stability, giving global asymptotic stability.

This proof uses more than negative divergence. Divergence excludes cycles below, while energy and compactness identify the limiting equilibrium. Keeping those roles separate avoids interpreting an exclusion theorem as a convergence theorem.

## What Poincaré–Bendixson adds

**Theorem 8.1 (Poincaré–Bendixson, compact equilibrium-free form).** For a continuously differentiable planar autonomous vector field, if a positive orbit remains in a compact subset of its open flow domain and its omega-limit set contains no equilibrium, then that omega-limit set is a periodic orbit.

This is a planar topology theorem, used here as a precise cited input; Perko's *Differential Equations and Dynamical Systems* gives its flow-box and Jordan-curve proof. Compactness alone supplied a nonempty invariant limit set. The additional theorem rules out more complicated equilibrium-free recurrence in two state dimensions, using unique noncrossing trajectories and transverse sections. A general higher-dimensional compactness argument does not provide that restriction.

Notice where the absence of equilibria is required: on the omega-limit set, rather than necessarily throughout the whole region containing the initial state. An equilibrium can lie elsewhere inside a surrounding periodic curve. Conversely, if the limit set contains a saddle and connecting trajectories, this simple periodic conclusion is unavailable. Stronger classifications of graphs of connections need their own finiteness and regularity assumptions.

The theorem does not apply to a discrete planar map, to the projection of a three-dimensional flow, or to a time-dependent planar equation without changing the state space. Adding a periodic clock makes the last problem autonomous but adds a dimension. Intersections in a two-dimensional projection do not contradict uniqueness in the full state space. These distinctions explain why a planar plot by itself cannot determine which theorem applies.

## Divergence excludes closed trajectories through a flux contradiction

Let the vector field be continuously differentiable on a simply connected open planar region. Suppose its divergence is strictly positive throughout, or strictly negative throughout. Then no nonconstant periodic orbit lies entirely in that region. A slightly weaker sufficient condition is one non-strict sign together with failure to vanish identically on any nonempty open subset.

For proof, uniqueness makes a periodic orbit a simple closed curve. The planar Jordan-curve theorem gives its bounded interior, and simple connectivity places that interior inside the stated region. The field is tangent to the orbit, so its outward normal flux through the curve is zero. Green's theorem identifies that flux with the integral of divergence over the interior. A continuous strict-sign integrand has a nonzero integral. Under the weaker condition, some interior open patch has the strict sign, giving the same contradiction. Thus the periodic orbit cannot exist.

The sign hypothesis is a condition on the entire enclosed region, not only on sampled points of the orbit. For instance, the divergence integrated along a cycle determines its transverse multiplier, but that one-dimensional integral is not the area integral in this exclusion proof. A negative cycle multiplier exponent can coexist with an attracting cycle precisely because the divergence need not have the required sign over its whole simply connected interior.

**Worked example: a hole invalidates the interior step.** On an annulus about radius one, consider $r'=1-r$, $\\theta'=1$. In Cartesian form its radial contribution is $(1-r)(x/r,y/r)$, which is smooth away from the origin. Its divergence is $1/r-2$, strictly negative on the annulus from radius three quarters to five quarters. Nevertheless radius one is a periodic orbit. The annular domain is not simply connected and omits the interior region needed by Green's theorem. This is a counterexample to dropping that hypothesis, not a failure of the flux identity.

## Dulac multipliers change the integrand, not the trajectories

Choose a continuously differentiable scalar multiplier on the theorem region, and apply the same flux argument to its product with the vector field. This product is still tangent to any orbit curve, so its flux there is zero. If its divergence has the required one-sign property throughout a simply connected region, the same contradiction excludes periodic orbits.

No time reparameterisation is needed for this proof. Zeros of the multiplier do not by themselves justify treating it as a positive change of clock, and singularities cannot be included in the theorem domain. The product field must have the required regularity where Green's theorem is applied.

**Worked example: competitive interactions.** In the positive quadrant take $x'=x(a-bx-cy)$ and $y'=y(d-ex-fy)$, with $b,f>0$. The multiplier $1/(xy)$ is continuously differentiable there. The two product components are $a/y-bx/y-c$ and $d/x-e-fy/x$. Their divergence is $-b/y-f/x$, strictly negative. The positive quadrant is simply connected, so no nonconstant periodic orbit can lie entirely in it. This calculation does not prove that every positive solution is bounded or that its limit set contains one particular equilibrium. Those are further questions requiring invariant bounds and equilibrium analysis.

## Trapping annuli prove existence without proving uniqueness

Consider a compact annulus inside the open flow domain. Suppose its two boundary curves are smooth and the vector field points strictly into the annulus on both. Local boundary coordinates and a first-exit argument show that a forward trajectory cannot cross outward. Compactness and continuation make every such trajectory global and keep its limit set within the annulus.

If there is no equilibrium in the annulus, the Poincaré–Bendixson theorem applies to any chosen trajectory there and gives a periodic orbit. The proof establishes at least one. It does not show that different starts have the same limit orbit or that there is only one cycle in the annulus.

For a boundary defined by a scalar level function, compute its gradient paired with the vector field. On an outer radial boundary the radial velocity must point inward, whereas on an inner boundary it must point outward from the hole. Using the same numerical sign for both boundaries confuses outward-from-the-origin with inward-to-the-annulus.

**Worked example: one trapping annulus and three cycles.** On the positive-radius domain let

$$r'=-r(r-1)(r-2)(r-3),\\qquad\\theta'=1.$$

The annulus from radius one half to radius seven halves is trapping: the radial velocity is positive at its inner boundary and negative at its outer boundary. There is no equilibrium because angular speed never vanishes there. Three distinct periodic circles occur at radii one, two and three. The radial derivatives there are respectively minus two, plus two and minus six. Thus the first and third circles attract transversely, while the middle one repels. Their periods are all $2\\pi$, with multipliers given by exponentiating these rates over a period. This example simultaneously proves that a trapping annulus need not contain a unique cycle and that neighbouring basins can be separated by an unstable cycle.

## Conserved regular levels can give a family of neutral cycles

For positive constants, the Lotka–Volterra system $x'=x(a-by)$, $y'=y(-c+dx)$ conserves

$$H(x,y)=dx-c\\log x+by-a\\log y.$$

Differentiate along the vector field. The terms involving the product of the populations, the individual populations and the constants cancel in pairs, giving zero. The Hessian is diagonal with positive entries $c/x^2$ and $a/y^2$, so the conserved function is strictly convex and has its unique minimum at the positive coexistence equilibrium.

Every sublevel is compact within the positive quadrant. Each one-variable linear-minus-log term tends to infinity both at zero and at positive infinity, so an upper bound on their sum keeps both coordinates away from all those boundaries. Above the minimum, a level contains no critical point. Its boundary is a smooth closed curve: strict convexity and properness make every ray from the minimiser meet it once, with nonzero outward derivative. The nonzero vector field is tangent to that compact curve. Its speed has a positive minimum, so traversing the finite-length curve takes a finite positive time. This proves periodic motion on each nontrivial positive level.

The cycles are neutral as a family. Two trajectories on different conserved levels cannot approach the same cycle because their energy values stay different. A numerical spiral toward one level would require an explanation such as discretisation drift or an altered model. The first integral is a theorem about the ideal equations; it does not establish that observed biological populations satisfy those equations.

## A closed-looking separatrix can have infinite travel time

Consider the planar Hamiltonian system $q'=p$, $p'=q-q^3$. Its energy is $p^2/2-q^2/2+q^4/4$. The origin is a saddle. On the zero-energy right-hand loop, the moving branches satisfy $p=\\pm q\\sqrt{1-q^2/2}$ for positive coordinate up to $\\sqrt2$.

Near the saddle the travel-time integral contains the reciprocal of the coordinate times a factor tending to one. It diverges logarithmically as the coordinate tends to zero. Hence the moving trajectory approaches the saddle only in infinite time. Its closure is a closed geometric loop containing the equilibrium, but the moving orbit has no finite period.

An exact parametrisation is $q(t)=\\sqrt2\\operatorname{sech}t$ and $p(t)=-\\sqrt2\\operatorname{sech}t\\tanh t$. Differentiating verifies both equations; at both infinite time ends the state approaches zero. At the turning point the vector field is nonzero, so the trajectory passes through it regularly. The equilibrium in the omega-limit set is precisely what prevents application of the equilibrium-free periodic conclusion.

## Scope of a planar conclusion

Before identifying a limiting mechanism, establish the open equation domain, global forward existence and compact containment. Then determine which equilibria can belong to the limit set. Use a decreasing function to restrict that set, a divergence argument to exclude cycles, or a trapping argument together with the stated planar theorem to produce them. A uniqueness or stability conclusion needs still another argument, such as a return-map derivative, a conserved quantity or a specialised Liénard theorem with its own hypotheses.

The order matters. Numerical closure does not supply a missing compactness theorem, and a smooth-looking loop does not distinguish a finite-period orbit from a separatrix. Exact signs, domains and invariant sets turn the picture into a conditional mathematical conclusion.

## Exercises with staged hints and full solutions

<a id="planar-limit-sets-ex-1"></a>
### Exercise 1: compactness inside the domain

A trajectory stays bounded but approaches a point removed from the open equation domain. Which step of the omega-limit argument fails?

<details><summary>Hint 1</summary>

Compactness must hold in the theorem's domain, not just in the surrounding plane.

</details>
<details><summary>Hint 2</summary>

An ambient accumulation point may not carry any defined local flow.

</details>
<details><summary>Full solution</summary>

Its closure need not be a compact subset of the open domain. A late-time subsequence can converge to the removed point, so nonemptiness and invariance of a limit set within the flow domain are not obtained. Continuation through that point is also unavailable. Bounded coordinate values cannot replace compact containment.

</details>

<a id="planar-limit-sets-ex-2"></a>
### Exercise 2: a finite limit set

Why must a finite omega-limit set under the compact-containment hypotheses be one equilibrium?

<details><summary>Hint 1</summary>

Use the connectedness of nested tail closures.

</details>
<details><summary>Hint 2</summary>

Then apply invariance to the remaining single point.

</details>
<details><summary>Full solution</summary>

A nonempty finite connected set contains exactly one point, since any two distinct points in a finite metric set can be separated by relative neighbourhoods. Invariance keeps the entire orbit through that point within the singleton. Its time derivative is therefore zero, so the point is an equilibrium.

</details>

<a id="planar-limit-sets-ex-3"></a>
### Exercise 3: the largest invariant zero set

For $x'=y$, $y'=-2x-3y$, identify the largest invariant subset where the derivative of $x^2+y^2/2$ vanishes.

<details><summary>Hint 1</summary>

Differentiate the proposed energy before setting its derivative to zero.

</details>
<details><summary>Hint 2</summary>

Check whether a nonzero point on the resulting axis remains there.

</details>
<details><summary>Full solution</summary>

The derivative is $2xy+y(-2x-3y)=-3y^2$. Its zero set is the horizontal axis. At a point there with nonzero $x$, the vertical derivative is $-2x$, so the orbit leaves the axis. Only the origin remains invariant. Compact energy sublevels and the proved limit-set argument give convergence to the origin, with stability supplied by the same positive-definite energy.

</details>

<a id="planar-limit-sets-ex-4"></a>
### Exercise 4: non-strict divergence

Explain why nonpositive divergence is enough for exclusion if it vanishes on no nonempty open subset.

<details><summary>Hint 1</summary>

Assume a periodic orbit exists and inspect its open interior.

</details>
<details><summary>Hint 2</summary>

Continuity turns one strictly negative value into a negative integral over a small patch.

</details>
<details><summary>Full solution</summary>

The divergence cannot vanish everywhere in the open interior. It is strictly negative at some point, hence on a smaller open patch by continuity. It is nonpositive elsewhere, so its area integral is strictly negative. Tangency makes the boundary flux zero, contradicting Green's theorem. The same domain and simple-connectivity hypotheses remain necessary.

</details>

<a id="planar-limit-sets-ex-5"></a>
### Exercise 5: an annular counterexample

For $r'=1-r$, $\\theta'=1$, find a region containing its cycle on which divergence is negative and explain why exclusion fails.

<details><summary>Hint 1</summary>

The polar divergence of a radial velocity is its derivative plus itself divided by radius.

</details>
<details><summary>Hint 2</summary>

Choose radii above one half while excluding the origin.

</details>
<details><summary>Full solution</summary>

The radial contribution gives $-1+(1-r)/r=1/r-2$, and the constant angular motion has zero divergence. On the annulus from three quarters to five quarters this is strictly negative, yet radius one is periodic. That annulus is not simply connected and does not contain the cycle's whole interior, so the exclusion theorem's domain hypothesis fails.

</details>

<a id="planar-limit-sets-ex-6"></a>
### Exercise 6: Dulac regularity

Why can the multiplier $1/(xy)$ be used on the positive quadrant but not on a region containing either coordinate axis?

<details><summary>Hint 1</summary>

The product field must meet Green's theorem's regularity hypotheses.

</details>
<details><summary>Hint 2</summary>

A singular denominator is a domain restriction, even if some terms cancel in one expression.

</details>
<details><summary>Full solution</summary>

The multiplier is continuously differentiable where both coordinates are positive and finite. It is undefined on the axes, so the stated product-field proof does not apply across them without a separately justified extension and boundary calculation. The theorem region must be chosen before invoking its sign condition; a formal divergence simplification alone does not establish the missing regularity.

</details>

<a id="planar-limit-sets-ex-7"></a>
### Exercise 7: all three radial cycles

Classify the radii one, two and three in the polynomial radial example and compute their transverse multipliers.

<details><summary>Hint 1</summary>

At a simple radial root, differentiate by removing its vanishing factor.

</details>
<details><summary>Hint 2</summary>

The angular speed gives the common period; exponentiate each radial derivative over it.

</details>
<details><summary>Full solution</summary>

The derivatives are minus two, plus two and minus six. With period $2\\pi$, the multipliers are $e^{-4\\pi}$, $e^{4\\pi}$ and $e^{-12\\pi}$. The first and third cycles attract transversely and the second repels. The trapping annulus contains all three, disproving uniqueness from trapping alone.

</details>

<a id="planar-limit-sets-ex-8"></a>
### Exercise 8: conservation and attraction

Why cannot two distinct regular Lotka–Volterra energy levels approach the same periodic level?

<details><summary>Hint 1</summary>

Each trajectory keeps its initial value of the continuous first integral.

</details>
<details><summary>Hint 2</summary>

Compactness near the proposed limiting cycle converts set-distance convergence into convergence of the energy values.

</details>
<details><summary>Full solution</summary>

If a trajectory approached that compact cycle, uniform continuity of the first integral on a surrounding compact neighbourhood would force its energy toward the cycle's energy. Its energy is constant, so it would have had that value initially. A trajectory on a different level cannot do this. The conserved family therefore supplies neutral cycles rather than one attracting cycle.

</details>

<a id="planar-limit-sets-ex-9"></a>
### Exercise 9: infinite-time closure

Use the zero-energy Duffing formula to explain why the right-hand loop is not a periodic orbit.

<details><summary>Hint 1</summary>

Write elapsed time as the integral of reciprocal velocity near the saddle.

</details>
<details><summary>Hint 2</summary>

The velocity is proportional to the coordinate to leading order near zero.

</details>
<details><summary>Full solution</summary>

The travel-time integral contains $dq/[q\\sqrt{1-q^2/2}]$. Near zero it diverges like the integral of $1/q$. The trajectory approaches the equilibrium only at infinite positive or negative time. Adding the equilibrium to its closure makes a closed-looking set but does not give the moving solution a finite period.

</details>

<a id="planar-limit-sets-ex-10"></a>
### Exercise 10: three distinct logical claims

A trapping annulus contains no equilibrium. What extra evidence is needed to claim a unique stable cycle?

<details><summary>Hint 1</summary>

Apply the precise planar theorem only to obtain what it states.

</details>
<details><summary>Hint 2</summary>

Separate counting cycles from their transverse return behaviour.

</details>
<details><summary>Full solution</summary>

Compact trapping and absence of equilibria give at least one periodic orbit through Poincaré–Bendixson. Uniqueness needs an additional argument controlling all candidate cycles, such as a suitable specialised theorem or monotonic return structure. Local asymptotic stability needs transverse contraction or another valid stability theorem. The three-cycle radial example shows that neither conclusion follows from trapping alone.

</details>

## Chapter synthesis

Compactness gives a nonempty connected invariant omega-limit set; a decreasing function confines it; planar topology identifies an equilibrium-free limit as a cycle. Divergence excludes cycles on the correct enclosed domain, while trapping produces them without counting them. First integrals and separatrices distinguish neutral periodic families from attraction and infinite-time closure.
`;export{e as default};