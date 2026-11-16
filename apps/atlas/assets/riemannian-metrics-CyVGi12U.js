var e=`---
parent_id: book-riemannian-geometry
chapter_id: riemannian-metrics
title: "Riemannian Metrics"
level: graduate
license: CC BY-SA 4.0
---

# Riemannian Metrics {#section-1-riemannian-metrics}

A Riemannian metric is a smoothly varying inner product, but its consequences extend beyond tangent-space algebra. It measures lengths of curves, induces a distance compatible with the manifold topology, controls derivatives of functions and supplies a canonical unsigned volume density. Each construction uses positivity in a different way.

This L4 opening expands [the Smooth Manifolds first look](../smooth-manifolds/riemannian-first-look.md). Manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary. We assume the proved tangent, differential, partition-of-unity and compactly supported integration constructions of that book. Curves are continuous and piecewise smooth on a compact interval, with finitely many pieces. The analytic inputs are ordinary integration, compactness and Euclidean change of variables. We prove the distance and topology statements here. Geodesics, curvature and Hopf–Rinow are later chapters; no minimizing-geodesic theorem is needed for the definition of distance.

<a id="section-5-1-positive-smooth-inner-products"></a>
## 1. Positive smooth inner products {#section-7-1-positive-smooth-inner-products}

A Riemannian metric is a positive-definite symmetric bilinear form $g_p$ on each tangent space whose coordinate coefficients $g_{ij}$ vary smoothly. Positive definiteness means that every nonzero vector has strictly positive squared norm. Nonnegative definiteness would allow zero-length directions and does not support the same distance arguments.

For coordinate tangent columns related by $v_y=Jv_x$, equality of the same vector's squared length gives

$$g_y=J^{-T}g_xJ^{-1}.$$

This is the change rule for the metric coefficient matrix, not a statement that coordinate matrices remain numerically equal. A coordinate calculation must transform the vectors and the coefficient matrix together.

Every manifold under our conventions admits a metric. Choose a locally finite smooth coordinate cover and a subordinate nonnegative partition of unity. Pull the ordinary Euclidean inner product back in each chart, multiply by the corresponding partition function, extend by zero and add. Support control gives smooth extensions, and local finiteness gives a smooth sum. At every point at least one weight is positive, so evaluating on a nonzero vector gives a strictly positive total. This repeats the existence argument for the reader's convenience; the partition theorem itself is established in Smooth Manifolds. No orientation is selected or required.

The metric sends a vector to the covector pairing with it, often written $v^\\flat=g(v,\\cdot)$. The inverse operation sends a covector $\\alpha$ to $\\alpha^\\sharp$, using the inverse metric matrix. Smoothness of the inverse follows from its nonzero determinant and the adjugate formula. These operations change type; the same numerical list of coordinate entries generally cannot be used for both a vector and a covector.

<a id="section-19-2-length-before-distance"></a>
## 2. Length before distance {#section-21-2-length-before-distance}

The speed of a curve is $\\|\\dot\\gamma(t)\\|_g$, and its length is the sum over smooth pieces of

$$L_g(\\gamma)=\\int\\sqrt{g_{\\gamma(t)}(\\dot\\gamma(t),\\dot\\gamma(t))}\\,dt.$$

The tangent transformation rule makes speed independent of coordinates. An increasing regular change of parameter preserves the integral by ordinary substitution; a decreasing one reverses endpoints and introduces the absolute parameter derivative, again preserving length. Concatenating curves adds lengths, while reversing a curve preserves its length. Repeated traversal counts repeatedly, so length belongs to the journey rather than merely to its image.

On a connected manifold any two points can be joined by such a curve. Fix one point and consider all reachable points. A small coordinate ball around a reachable point is reachable using straight coordinate segments. Thus the reachable set is open. Its complement is open by the same argument: if a coordinate ball around a supposedly unreachable point contained a reachable point, the segment joining them would make it reachable too. Connectedness makes the reachable set the whole manifold.

For points in one connected component define

$$d_g(p,q)=\\inf\\{L_g(\\gamma):\\gamma\\text{ joins }p\\text{ to }q\\}.$$

The preceding argument makes the set nonempty and the infimum finite. Reversal gives symmetry. Concatenation and curves approaching each infimum give the triangle inequality: for any positive error choose the two curves within half that error and concatenate them. The constant curve gives zero distance from a point to itself. The fact that distinct points have positive distance requires a local estimate and is not automatic from the infimum of positive numbers.

Across different connected components there is no joining curve. One may use the extended value infinity, but then the result is an extended distance rather than an ordinary finite-valued metric. All finite-distance claims below apply within a component, or to a connected manifold as a whole.

<a id="section-37-3-local-estimates-prove-nondegeneracy-and-the-topology"></a>
## 3. Local estimates prove nondegeneracy and the topology {#section-39-3-local-estimates-prove-nondegeneracy-and-the-topology}

Choose coordinates centered at $p$ and a closed Euclidean ball of radius $r>0$ inside the chart image. On its compact inverse image, the metric coefficient matrices have uniform positive lower and finite upper bounds:

$$\\lambda\\|v\\|^2\\le g_x(v,v)\\le\\Lambda\\|v\\|^2.$$

To justify the lower bound, evaluate the continuous quadratic form on the product of the compact coordinate ball and the Euclidean unit sphere. Its positive minimum is strictly greater than zero. The maximum gives the upper bound.

A curve from the center which leaves this ball must first reach its boundary. On that initial portion its length is at least $\\sqrt\\lambda$ times the Euclidean displacement, hence at least $\\sqrt\\lambda r$. This follows from the integral triangle inequality on its finitely many smooth pieces. If a curve remains in the ball until it reaches another point $q$ inside, the same estimate bounds its length below by $\\sqrt\\lambda\\|x(q)\\|$. A curve which leaves has the stronger boundary-exit bound. Thus every curve from $p$ to such a $q$ has length at least that coordinate-displacement bound. Straight coordinate segments give the upper bound

$$\\sqrt\\lambda\\|x(q)\\|\\le d_g(p,q)\\le\\sqrt\\Lambda\\|x(q)\\|\\qquad (\\|x(q)\\|<r).$$

For a point outside the ball, every joining curve has the boundary-exit lower bound. In particular the distance to any distinct point is positive: choose a sufficiently small ball to exclude that point, or use the displayed estimate if it lies inside. The infimum is therefore a genuine metric on a component.

These bounds also prove equality of the metric and manifold topologies. Sufficiently small coordinate balls lie inside prescribed distance balls by the upper bound. Conversely a distance ball of radius below the exit bound stays inside the chart ball, where the lower bound forces small coordinate displacement. Neither direction assumes a minimizing curve exists. The proof controls all competing curves, including those which try to leave the chosen chart to find a shorter route.

<a id="section-53-4-comparing-metrics-without-confusing-local-and-global-"></a>
## 4. Comparing metrics without confusing local and global bounds {#section-55-4-comparing-metrics-without-confusing-local-and-global-}

For two smooth metrics $g,h$ and a compact subset $K$, there are constants $0<c\\le C<\\infty$ such that

$$c\\|v\\|_g\\le\\|v\\|_h\\le C\\|v\\|_g\\qquad(p\\in K).$$

Use finitely many compact coordinate neighborhoods covering $K$ and compare both positive matrices there, or take maxima and minima of one norm on the other's unit sphere bundle over $K$. The compact finite-chart description makes those extrema finite and positive. The corresponding length bounds hold for curves contained in $K$.

They do not immediately compare distances between points of $K$, because the curves defining those distances may leave $K$. If the norm bounds hold on the entire manifold, taking the infimum over all curves gives the same bounds for distances. In particular on a compact manifold all smooth Riemannian metrics have globally comparable distances. On a noncompact manifold the constants can diverge at infinity, allowing different completeness behavior even though the induced topology is unchanged.

A compact connected Riemannian manifold is complete as a metric space. Indeed its metric topology is the compact manifold topology. Any Cauchy sequence has a convergent subsequence by compactness; the triangle inequality and Cauchy condition then make the whole sequence converge to the same point. This proves metric completeness in the compact case directly. Equivalence with geodesic completeness in the general connected case is the later Hopf–Rinow theorem, not an input used here.

<a id="section-65-5-gradients-and-derivative-bounds"></a>
## 5. Gradients and derivative bounds {#section-67-5-gradients-and-derivative-bounds}

For a smooth real function define its gradient by $g(\\operatorname{grad}f,V)=df(V)$. In coordinates,

$$(\\operatorname{grad}f)^i=g^{ij}\\partial_jf.$$

The Cauchy–Schwarz inequality gives $|df(V)|\\le\\|\\operatorname{grad}f\\|_g\\|V\\|_g$. If the gradient norm is bounded by a constant $A$ everywhere, integrate this inequality along any joining curve. The Fundamental Theorem on each piece and the triangle inequality give $|f(p)-f(q)|\\le A L_g(\\gamma)$. Taking the infimum yields an $A$-Lipschitz function for the Riemannian distance.

Conversely, if a smooth function is $A$-Lipschitz for that distance, choose a coordinate curve with any initial velocity $v$. The distance between its nearby points is at most the length of that short curve segment. Divide the Lipschitz inequality by the absolute time increment and let it tend to zero. Continuity of speed makes the segment length divided by that increment tend to $\\|v\\|_g$. Hence $|df(v)|\\le A\\|v\\|_g$. Taking the supremum over unit vectors gives the same gradient bound. Thus for smooth functions the two global conditions are equivalent.

Distance from a fixed point is always one-Lipschitz by the triangle inequality. It need not be smooth: on the real line, distance from zero is absolute value, which has different one-sided derivatives at zero. A Lipschitz estimate alone is not permission to insert a function into a smooth-gradient calculation at its nonsmooth points.

<a id="section-77-6-metric-volume-is-a-density-before-it-is-a-form"></a>
## 6. Metric volume is a density before it is a form {#section-79-6-metric-volume-is-a-density-before-it-is-a-form}

In coordinates the metric volume density is

$$d\\operatorname{vol}_g=\\sqrt{\\det g_x}\\,|dx^1\\cdots dx^n|.$$

Under coordinate change its coefficient transforms with the absolute Jacobian, since the determinant transformation above gives $\\det g_y=(\\det J)^{-2}\\det g_x$. This is an unsigned density, whose compactly supported integral can be constructed in arbitrary charts using a partition of unity and the ordinary absolute-Jacobian substitution theorem. The same finite double-partition argument as for forms proves independence of choices. No orientability is needed.

If the manifold is oriented, positive charts give the volume form $\\mu_g=\\sqrt{\\det g_x}\\,dx^1\\wedge\\cdots\\wedge dx^n$. It evaluates positively on positive frames. Reversing the orientation replaces this canonical positive form by its negative; its integral with that reversed orientation is still positive. An arbitrarily fixed top form, by contrast, has its integral negated when only the orientation changes. Keeping these two operations separate avoids a misleading statement that positive metric volume becomes negative.

For a conformal metric $\\widetilde g=e^{2\\phi}g$, tangent lengths multiply by $e^\\phi$, gradients by $e^{-2\\phi}$ and volume densities by $e^{n\\phi}$. The first follows from the quadratic norm, the second from the inverse matrix, and the third from the determinant in dimension $n$. These different powers measure different geometric types.

<a id="section-89-7-isometries-and-local-isometries"></a>
## 7. Isometries and local isometries {#section-91-7-isometries-and-local-isometries}

A Riemannian isometry is a diffeomorphism whose pullback metric equals the source metric. It preserves the speed and length of every curve. Applying the same statement to its inverse and taking both infima proves preservation of distance. The determinant transformation also proves preservation of metric volume density. Orientation reversal affects signed top forms but does not change the unsigned density statement.

A local isometry has metric-preserving differential and is a local diffeomorphism, but it need not preserve global distances. The map from the real line to the unit circle given by the angular exponential preserves tangent lengths, yet points one full turn apart have identical images. Their source distance is positive and their image distance is zero. Local length preservation therefore cannot replace the global bijectivity in an isometry definition.

<a id="section-95-8-three-worked-examples"></a>
## 8. Three worked examples {#section-97-8-three-worked-examples}

<a id="section-97-worked-example-1-1-distance-around-the-unit-circle"></a>
### Worked example 1.1 — Distance around the unit circle {#section-99-worked-example-1-1-distance-around-the-unit-circle}

On the unit circle with its induced metric, let two points have angular separation $\\theta$ chosen between zero and $2\\pi$. Their distance is $\\min(\\theta,2\\pi-\\theta)$. The two simple connecting arcs realize those lengths and give the upper bound.

For the lower bound, lift any piecewise-smooth joining curve to a real angle using successive overlapping angle charts and their integer-turn adjustments. A finite subdivision of its compact parameter interval makes that construction possible. The final angle differs from the initial one by $\\theta+2\\pi k$ for some integer. The lifted speed has absolute value equal to the original metric speed, so its integral is at least the absolute endpoint difference. Minimizing over the integer possibilities gives the claimed lower bound. This proof explicitly controls extra windings and does not assume that every joining curve is a simple arc.

<a id="section-103-worked-example-1-2-an-incomplete-metric-on-the-whole-re"></a>
### Worked example 1.2 — An incomplete metric on the whole real line {#section-105-worked-example-1-2-an-incomplete-metric-on-the-whole-re}

Take $g=e^{-2x}dx^2$. The coordinate change $u=e^{-x}$ is a diffeomorphism onto the positive half-line and transforms the metric to $du^2$. Consequently

$$d_g(x,y)=|e^{-x}-e^{-y}|.$$

The lower bound follows by the ordinary integral triangle inequality in the $u$ coordinate, and a monotone interval segment realizes it. For $x_k=\\log k$, the corresponding coordinates are $1/k$, a Cauchy sequence with limit zero outside the positive half-line. There is no limit in the original manifold: a proposed real limit would have a strictly positive exponential coordinate. Hence this metric is incomplete although the manifold is the entire real line and has its usual topology. The ordinary metric $dx^2$ on the same manifold is complete. Completeness is geometric, not solely topological.

<a id="section-111-worked-example-1-3-a-useful-bound-in-the-upper-half-pla"></a>
### Worked example 1.3 — A useful bound in the upper half-plane {#section-113-worked-example-1-3-a-useful-bound-in-the-upper-half-pla}

On $y>0$ take $g=(dx^2+dy^2)/y^2$. The function $f=\\log y$ has gradient $y\\partial_y$ of norm one. The global derivative bound therefore gives

$$d_g((x_1,y_1),(x_2,y_2))\\ge|\\log(y_2/y_1)|.$$

For points on one vertical line, the monotone vertical path has exactly that length, so equality holds. Approaching the missing horizontal boundary along a vertical line therefore takes infinite metric length, although its Euclidean length can be finite. We have not used this one estimate alone to claim completeness of every possible path or the whole metric space.

The volume density is $dx\\,dy/y^2$. A rectangle of horizontal width $b-a$ and vertical range from positive $c$ to $d$ has metric area $(b-a)(1/c-1/d)$ by ordinary iterated integration. Horizontal coordinate widths at different heights thus represent different physical lengths and areas. A constant-height horizontal path gives a legitimate length upper bound between its endpoints, but no proof here says it minimizes over all paths.

<a id="section-121-exercises"></a>
## Exercises {#section-123-exercises}

### Exercise 1.1 {#riemannian-metrics-ex-1}

For $g=4dx^2+dy^2$ on the plane compute the distance between two arbitrary points.

<details><summary>Hint 1</summary>
Apply the coordinate transformation $(u,v)=(2x,y)$.
</details>
<details><summary>Hint 2</summary>
In the transformed coordinates the metric is Euclidean.
</details>
<details><summary>Full solution</summary>
The distance is the square root of four times the squared horizontal difference plus the squared vertical difference. The transformed straight segment realizes this length, while the Euclidean integral triangle inequality bounds all other transformed paths below by the same displacement. This proves equality, not just an upper bound derived from one convenient path. The constant anisotropy changes distances while keeping the ordinary plane topology.
</details>

### Exercise 1.2 {#riemannian-metrics-ex-2}

Show that pointwise positive metrics form a convex set. Explain why an infinite weighted sum needs an additional hypothesis.

<details><summary>Hint 1</summary>
Evaluate a convex combination on a nonzero vector.
</details>
<details><summary>Hint 2</summary>
Smoothness and convergence are separate from pointwise positivity.
</details>
<details><summary>Full solution</summary>
A convex combination of two positive squared norms is positive, with smooth symmetric coefficients. For a family of weighted local metrics, nonnegative weights summing to one preserve pointwise positivity wherever the terms are defined. An arbitrary infinite sum may fail to converge or be smooth. The partition construction uses local finiteness, making every local coefficient sum finite and eliminating those issues without an unproved interchange of infinite sums and derivatives.
</details>

### Exercise 1.3 {#riemannian-metrics-ex-3}

Prove that on a compact connected manifold any two Riemannian distances are comparable by global positive constants.

<details><summary>Hint 1</summary>
First compare tangent norms uniformly on the whole manifold.
</details>
<details><summary>Hint 2</summary>
Integrate along every joining curve and then take infima.
</details>
<details><summary>Full solution</summary>
Compactness supplies constants bounding one norm above and below by positive multiples of the other at every tangent space. Integrating preserves the same constants for all curve lengths. Taking the infimum over the identical class of joining curves yields the corresponding distance inequalities in both directions. The estimates are global because the whole manifold is compact, so no competing curve can leave the region where the constants apply.
</details>

### Exercise 1.4 {#riemannian-metrics-ex-4}

For a conformal metric $\\widetilde g=e^{2\\phi}g$, compute the norm of $\\operatorname{grad}_{\\widetilde g}f$ in terms of the original gradient norm.

<details><summary>Hint 1</summary>
The gradient vector itself acquires the inverse-metric factor.
</details>
<details><summary>Hint 2</summary>
Its norm is measured in the rescaled metric as well.
</details>
<details><summary>Full solution</summary>
The vector is $e^{-2\\phi}\\operatorname{grad}_gf$. Measuring it in the new metric multiplies its old norm by $e^\\phi$, giving total factor $e^{-\\phi}$ relative to the old gradient norm. Using the vector's coefficient factor alone would miss the metric's simultaneous contribution. This distinction is an instance of the separate scaling rules for vectors, covectors and norms.
</details>

### Exercise 1.5 {#riemannian-metrics-ex-5}

Prove that a smooth function on a connected Riemannian manifold with zero gradient is constant.

<details><summary>Hint 1</summary>
The metric identification makes its differential zero.
</details>
<details><summary>Hint 2</summary>
Integrate along piecewise-smooth joining curves.
</details>
<details><summary>Full solution</summary>
Zero gradient means the differential evaluates to zero on every vector. Along any smooth curve piece the derivative of the composed function is therefore zero, so the endpoint values agree by the Fundamental Theorem. Connectedness supplies piecewise-smooth joining curves between any two points, and concatenating the pieces proves global constancy. On a disconnected manifold independent constants on different components remain possible.
</details>

### Exercise 1.6 {#riemannian-metrics-ex-6}

Does a smooth local isometry necessarily preserve global distance? Give the exact counterexample and identify the failed global hypothesis.

<details><summary>Hint 1</summary>
Use angular exponentiation from the real line to the unit circle.
</details>
<details><summary>Hint 2</summary>
Compare source points separated by one full turn.
</details>
<details><summary>Full solution</summary>
The angular map has unit-speed differential and is a local diffeomorphism, so it is a local isometry for the usual metrics. The source points zero and $2\\pi$ have distance $2\\pi$, while their images are the same circle point and have distance zero. The global map is not injective and has no single-valued inverse. Therefore the argument applying length preservation to an inverse to compare both distance infima is unavailable.
</details>

### Exercise 1.7 {#riemannian-metrics-ex-7}

Explain why the metric volume density exists on the open Möbius strip even though a nowhere-zero top form does not.

<details><summary>Hint 1</summary>
The metric exists by a partition construction without orientation.
</details>
<details><summary>Hint 2</summary>
A density uses an absolute Jacobian under the reversing transition.
</details>
<details><summary>Full solution</summary>
The metric gives a positive square-root determinant coefficient in every chart. On overlaps that coefficient transforms by the absolute determinant, so an orientation-reversing transition does not force a sign change or a zero. A top form instead transforms with the signed determinant and would yield the previously proved Möbius sign obstruction. Thus the density glues globally, whereas an everywhere nonzero top form would orient the strip and cannot exist.
</details>

### Exercise 1.8 {#riemannian-metrics-ex-8}

For the upper-half-plane metric, prove the distance bound between two heights directly by integrating along an arbitrary joining curve.

<details><summary>Hint 1</summary>
The metric speed dominates the absolute logarithmic height derivative.
</details>
<details><summary>Hint 2</summary>
Apply the integral triangle inequality to that scalar derivative.
</details>
<details><summary>Full solution</summary>
The speed is $\\sqrt{\\dot x^2+\\dot y^2}/y$, which is at least $|\\dot y|/y=|(\\log y)'|$. Its integral is at least the absolute change in logarithmic height. Summing over the finite smooth pieces gives the same endpoint change, proving the bound for every joining curve. Taking infima gives the claimed distance estimate. The direct proof agrees with the gradient argument and does not require knowing the geodesics of this metric.
</details>

### Exercise 1.9 {#riemannian-metrics-ex-9}

For $g=e^{-2x}dx^2$ compute the distance from zero to $\\log k$ and the length of the whole ray from zero towards positive infinity.

<details><summary>Hint 1</summary>
Use the positive-half-line coordinate $u=e^{-x}$.
</details>
<details><summary>Hint 2</summary>
The ray approaches the missing endpoint zero in that coordinate.
</details>
<details><summary>Full solution</summary>
The distance is $1-1/k$ for positive integers $k$. The monotone ray has total length $\\int_0^\\infty e^{-x}dx=1$. No point at positive infinity belongs to the original manifold, so the finite accumulated length does not create a new endpoint there. The associated Cauchy sequence demonstrates metric incompleteness exactly because no point realizes the limiting coordinate zero.
</details>

### Exercise 1.10 {#riemannian-metrics-ex-10}

Prove that the squared distance function from the origin is smooth on Euclidean space, although the distance itself is not smooth at the origin in positive dimension.

<details><summary>Hint 1</summary>
The square is the sum of the coordinate squares.
</details>
<details><summary>Hint 2</summary>
Restrict the distance to a straight coordinate line through zero.
</details>
<details><summary>Full solution</summary>
The squared distance is a polynomial and hence smooth everywhere. Restricting the distance to any unit coordinate line gives absolute value, whose positive and negative derivatives at zero differ. A smooth ambient function would have a differentiable restriction to that line, so the distance cannot be smooth at zero. This example separates the useful one-Lipschitz distance estimate from smooth differential calculus at its singular point.
</details>

<a id="section-263-sources-and-provenance"></a>
## Sources and provenance {#section-265-sources-and-provenance}

New L4 expansion beginning from [Smooth Manifolds, chapter 16](../smooth-manifolds/riemannian-first-look.md), which remains intact as the first-look preparation. This chapter adds a full distance/topology proof, global versus compact-local metric comparison, smooth Lipschitz-gradient equivalence and metric-density integration, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, Riemannian metrics and distance sections, and do Carmo, *Riemannian Geometry*, the introductory metric and length discussion.

<a id="section-267-summary"></a>
## Summary {#section-269-summary}

Positive smooth tangent inner products produce coordinate-independent curve lengths and a genuine distance on each connected component. Uniform local bounds prove both nondegeneracy and compatibility with manifold topology. Global metric comparison needs global norm bounds, while derivative bounds characterize smooth Lipschitz functions. Metric volume is canonically an unsigned density, becoming a positive top form only after orientation is chosen. Local isometries and noncompact conformal examples show why global distance and completeness conclusions need their own hypotheses.
`;export{e as default};