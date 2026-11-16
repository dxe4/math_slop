
# Projection, Distance, and Closest Points

Finding the closest point on a geometric object to a given query point is one of the most common operations in computational geometry. It underlies collision response, mesh simplification, path planning, and geographic queries. The mathematics is straightforward---projection onto a line---but the boundary case of a finite segment, and the extension to polygons and polyhedra, requires care. This chapter works the formulas, diagnoses common implementation errors, and shows why squared distances are often preferable to exact distances.

This L3 chapter uses the Euclidean norm in a finite-dimensional real space. Segments and triangles are closed and filled unless their boundary alone is requested. A planar polygon query assumes the query lies in its plane; for a spatial query first project to that plane and retain the perpendicular distance. Distances to an empty object and an unattained infimum on an open object need separate output contracts.

## Projection onto an infinite line

Given a line $L(t)=P+tv$ with $v\neq 0$ and a query point $X$, we seek the parameter $t^{*}$ that minimizes the squared distance

$$f(t)=\lVert X-(P+tv)\rVert^{2}=(X-P-tv)\cdot(X-P-tv).$$

Differentiating with respect to $t$ and setting the derivative to zero gives

$$t^{*}=\frac{(X-P)\cdot v}{v\cdot v}.$$

The closest point on the infinite line is $P+t^{*}v$. The vector from the closest point to $X$ is perpendicular to $v$, which is the geometric meaning of projection.

The derivative equation gives the unique minimizer because the squared distance completes to

$$f(t)=|v|^2(t-t^*)^2+|X-P|^2-
\frac{((X-P)\cdot v)^2}{|v|^2}.$$

The leading coefficient is positive. This proves global minimality and uniqueness, not just stationarity. Equivalently the residual at the foot is perpendicular to v, and Pythagoras adds a strictly positive along-line squared displacement for every other parameter. A zero direction makes the denominator zero and describes a point rather than this line problem.

## Projection onto a finite segment

A segment is the image of $L(t)$ for $t\in[0,1]$. If $v=0$, the segment is the single point $P$: return $P$ and $\lVert X-P\rVert$ without evaluating the quotient for $t^*$. For $v\ne0$, the closest point on the segment is obtained by clamping $t^{*}$ to this interval:

$$t_{\text{seg}}=\max(0,\min(1,t^{*})).$$

That one change---clamping---is the entire difference between closest point on a line and closest point on a segment. If $t^{*}<0$, the closest point is $P$. If $t^{*}>1$, the closest point is $P+v$. Otherwise, it is the interior projection $P+t^{*}v$.

Clamping is a theorem about the closest scalar in the closed unit interval to t-star. The completed square decreases as one moves toward t-star, so if t-star is below zero the best allowed parameter is zero; if above one it is one; otherwise it is itself. Nonzero v makes the resulting spatial point unique. At an exactly endpoint parameter the same formula remains valid. A small rounded parameter beyond the interval must not be treated as inside without a declared approximate input model.

A half-open or open segment may have a distance infimum but no closest point. For example, a query at minus one on the real line has infimum distance one from the open interval between zero and one, but no point of that interval attains it. Thus a routine promising a nearest point needs a closed-set hypothesis or a distinct unattained-infimum result. The same clamp values describe boundary limits, not necessarily members of an open input object.

## Worked example 1 {#worked-example}

Find the closest point on the segment from $(0,0)$ to $(2,0)$ to the query point $(3,4)$.

Here $P=(0,0)$ and $v=(2,0)$. The unconstrained parameter is

$$t^{*}=\frac{(3,4)\cdot(2,0)}{(2,0)\cdot(2,0)}=\frac{6}{4}=\frac{3}{2}.$$

Since $t^{*}>1$, we clamp to $t_{\text{seg}}=1$. The closest point is $(0,0)+1\cdot(2,0)=(2,0)$, and the distance is $\lVert(3,4)-(2,0)\rVert=\sqrt{1^{2}+4^{2}}=\sqrt{17}$.

If the query point had been $(1,4)$, then $t^{*}=\frac{(1,4)\cdot(2,0)}{4}=\frac{2}{4}=\frac{1}{2}\in[0,1]$. The closest point would be $(1,0)$, with distance $4$.

## A complete finite-dimensional convex projection theorem

Every nonempty closed subset of Euclidean finite-dimensional space has a nearest point to a fixed query. Pick one candidate and intersect the set with a closed ball centered at the query, with radius larger than that candidate distance. The intersection is nonempty, closed and bounded, hence compact, and the continuous distance function attains its minimum there. Points beyond the ball cannot improve the initial candidate. Closedness is essential; boundedness of the entire set is unnecessary.

If the set is also convex, the nearest point is unique. For two distinct minimizers Y and Z, their midpoint belongs to the set, while expansion of squared norms gives

$$\left|X-\frac{Y+Z}{2}\right|^2
=\frac{|X-Y|^2+|X-Z|^2}{2}-\frac{|Y-Z|^2}{4}.$$

The final strictly positive subtraction contradicts minimality. This is an exact uniqueness proof, independent of the specific parametrization chosen for the set. Compactness of closed bounded Euclidean sets is the named analytic input; the assertion is not being extended to arbitrary infinite-dimensional normed spaces.

A point Y in a closed convex set is its projection of X exactly when

$$(X-Y)\cdot(Z-Y)\leq0\quad\text{for every }Z\text{ in the set}.$$

Necessity follows by moving from Y a small positive fraction toward Z, remaining in the convex set, and differentiating squared distance at zero. Its one-sided derivative must be nonnegative. For sufficiency expand $|X-Z|^2$ around Y. The assumed inner-product inequality makes it at least $|X-Y|^2+|Z-Y|^2$, proving minimality and uniqueness. This variational certificate often verifies a proposed closest point without solving the minimization afresh.

## Distance to a triangle

For a nondegenerate triangle with vertices $A$, $B$, $C$, the closest point to $X$ is found by:

1. projecting $X$ onto the plane of the triangle;
2. if the projection lies inside the triangle, that is the closest point;
3. otherwise, finding the closest point on each of the three edges and taking the minimum.

Step 2 uses barycentric coordinates or edge orientation signs. Step 3 reduces to three segment-projection problems. If the vertices are collinear or repeated, the triangle plane and interior test are undefined; reduce explicitly to the nondegenerate edges or a single point. The algorithm is $O(1)$ for a single triangle but becomes expensive for large meshes, where spatial acceleration structures are needed.

### Construct the triangle-plane foot and prove the edge reduction

Put $u=B-A$ and $v=C-A$. Independence makes their Gram matrix positive definite. Solve

$$\begin{pmatrix}u\cdot u&u\cdot v\\u\cdot v&v\cdot v\end{pmatrix}
\begin{pmatrix}\beta\\\gamma\end{pmatrix}
=\begin{pmatrix}u\cdot(X-A)\\v\cdot(X-A)\end{pmatrix}.$$

Then $H=A+\beta u+\gamma v$ has residual perpendicular to both plane directions. For every point Y in that plane, Pythagoras gives $|X-Y|^2=|X-H|^2+|H-Y|^2$. Thus minimizing spatial distance is exactly minimizing the planar distance from H, with one fixed perpendicular term added. If beta, gamma and one minus their sum are nonnegative, H is in the closed triangle and is the unique nearest point.

Otherwise a nearest point cannot lie in the triangle's relative interior: a small move toward the external planar query H would stay in that interior and decrease planar distance. It must lie on an edge. The triangle is compact, so existence is assured, and taking the least of the three exact segment distances is exhaustive. Coincident edge-foot candidates are the same geometric point; convex uniqueness prevents two distinct tied minimizers for the filled triangle.

If the Gram matrix is singular, the vertices are collinear or repeated. Their convex hull is the segment between the farthest pair, unless all coincide. Projection onto that segment, or the unique point, gives the answer. Alternatively take the least distance to the three closed edges after dispatching zero-length edges; their union equals the degenerate filled triangle. A singular Gram denominator is a request for this branch, not permission to invent a triangle plane.

## Worked example 2: projection inside the plane is not zero spatial distance

Let the triangle vertices be $(0,0,0)$, $(2,0,0)$ and $(0,2,0)$, and let the query be $(1,1,3)$. The plane foot is $(1,1,0)$ with barycentric coordinates zero, one half and one half. It belongs to the hypotenuse, hence is the triangle projection, but its spatial distance from the query is three. Returning zero because the planar point lies in the filled triangle would discard the perpendicular component. The orthogonal decomposition proves that every other triangle point has a larger squared distance, even though the nearest point lies on an edge rather than in the relative interior.

## Distance to a polygon

For a convex polygon, the closest point is found by projecting onto each edge and taking the minimum, with the additional check that the query point is inside the polygon (in which case the distance is zero). For a nonconvex polygon, the inside/outside test requires a winding number or ray-crossing rule with a careful vertex convention: a ray passing through a vertex must be counted consistently so that boundary points are handled unambiguously.

For a closed filled simple polygon with its boundary and membership rule specified, an outside planar query has a nearest boundary point. The same local-move argument excludes an interior minimizer; compactness gives existence, and the boundary is the union of finitely many closed edges. An inside query has distance zero to the filled region, but can have positive distance to its wire boundary. This edge reduction does not itself prove a winding-number membership algorithm; such an algorithm needs its own stated vertex and boundary conventions. Self-intersecting polygonal paths require a declared fill rule before the phrase “inside the polygon” denotes an object.

## Stability of distance and convex projection

For every nonempty set K, the distance infimum is one-Lipschitz in the query: triangle inequality gives $d(X,K)\leq|X-X'|+d(X',K)$, and reversing the queries gives the opposite bound. Taking infima is legitimate even when no closest point exists. A query uncertainty of norm at most delta therefore changes the distance value by at most delta, without assuming the nearest feature stays the same.

For a nonempty closed convex set the projected point is itself one-Lipschitz. Write Y and Y-prime for the two projections and apply the variational certificate with each other as competitor. Subtracting the resulting inequalities gives

$$|Y-Y'|^2\leq(X-X')\cdot(Y-Y')
\leq|X-X'|\,|Y-Y'|.$$

If the projection points differ, cancel their positive distance; if not, the assertion is immediate. This proves a global stability statement for the exact mathematical projection. It does not certify an unspecified numerical evaluation or perturbation of the set itself.

## Worked example 3: distance can be stable while a nonconvex nearest point jumps

Take the two-point set $\{(-1,0),(1,0)\}$. At the origin both points minimize distance, with value one. For a query $(t,0)$ near zero, positive t selects the right point and negative t the left. The nearest location jumps as the query crosses zero, while the distance value is $1-|t|$ for absolute t below one and remains one-Lipschitz. Returning all ties or a chosen representative is part of the output contract for a nonconvex set.

Replacing this set by its convex hull would give the entire segment between the two points and zero distance at the origin, a different problem. Similarly a circle boundary and its filled disk have different projection sets. Convexity is the hypothesis responsible for uniqueness of the point, whereas continuity of the distance value needs only nonemptiness.

## Squared distances

When only comparisons are needed---for example, to find the nearest neighbor among a set of segments---squared distances suffice and avoid a square root. Squaring does not improve dynamic range: it can overflow a large finite difference or underflow a small one sooner than a scaled norm such as a robust `hypot` implementation. If coordinates are as large as $10^{154}$, squared distances may overflow in double precision. Scale before squaring, or use a scaled norm or logarithmic comparison when the range requires it.

## Common errors

- **Forgetting to clamp.** The closest point on an infinite line may lie far outside the segment. A routine that returns $P+t^{*}v$ without clamping gives wrong answers for segment queries.
- **Using exact distance when squared distance suffices.** Exact nonnegative squared distances can be compared without constructing their square roots. This avoids an unnecessary algebraic operation; actual machine cost and rounding behavior require a stated arithmetic model.
- **Inconsistent vertex convention in ray crossing.** A point on a polygon edge may be counted as inside by one ray and outside by another. The even-odd rule must handle vertices on the ray consistently.
- **Skipping the point-in-polygon test.** A point inside a filled nonconvex polygon is at distance zero from the polygonal region, but it may not be at distance zero from any edge. The inside test must precede the edge-distance minimization.

## Practice exercises with solutions

### Exercise 1
Find the closest point on the segment from $(1,1)$ to $(4,1)$ to the point $(3,5)$.

<details><summary>Hint 1</summary>

Compute the unconstrained dot-product parameter.

</details>

<details><summary>Hint 2</summary>

It lies in the closed interval, so the perpendicular foot is retained.

</details>

<details><summary>Full solution</summary>

**Solution.** $P=(1,1)$, $v=(3,0)$. Then $t^{*}=((3,5)-(1,1))\cdot(3,0)/(3^{2})=(2,4)\cdot(3,0)/9=6/9=2/3$. Since $0\leq 2/3\leq 1$, the closest point is $(1,1)+(2/3)(3,0)=(3,1)$. The distance is $\lvert 5-1\rvert=4$.

</details>

### Exercise 2
A query point is at $(-1,2)$. The segment runs from $(0,0)$ to $(1,0)$. Find the closest point and distance.

<details><summary>Hint 1</summary>

The unconstrained parameter is negative.

</details>

<details><summary>Hint 2</summary>

The quadratic distance is minimized at the nearest allowed endpoint.

</details>

<details><summary>Full solution</summary>

**Solution.** $t^{*}=((-1,2)-(0,0))\cdot(1,0)/1=-1$. Clamp to $0$. Closest point is $(0,0)$. Distance is $\sqrt{(-1)^{2}+2^{2}}=\sqrt{5}$.

</details>

### Exercise 3
Under what arithmetic assumptions does comparing squared distances preserve their exact order, and what can happen in floating point?

<details><summary>Hint 1</summary>

Square root is strictly increasing on nonnegative exact numbers.

</details>

<details><summary>Hint 2</summary>

Rounded intermediate squared values can already lose information before a square root is considered.

</details>

<details><summary>Full solution</summary>

**Solution.** For nonnegative exact values $a$ and $b$, monotonicity of the square root gives $a<b$ exactly when $\sqrt a<\sqrt b$. Thus exact integer or rational squared computations preserve the order without evaluating roots. Floating-point subtractions, multiplications, and sums can already round, overflow, or underflow; correctly rounded square roots are monotone, so they cannot reverse the order of their rounded nonnegative inputs, but two distinct exact distances can tie after rounding. Comparing floating squared values avoids an extra operation but is not exact arithmetic.

</details>

### Exercise 4
For a triangle with vertices $(0,0)$, $(2,0)$, $(0,2)$, find the closest point to $(1,1)$.

<details><summary>Hint 1</summary>

The point lies on the triangle hypotenuse.

</details>

<details><summary>Hint 2</summary>

Boundary membership is included in a closed filled triangle.

</details>

<details><summary>Full solution</summary>

**Solution.** The point $(1,1)$ lies on the edge from $(2,0)$ to $(0,2)$, which has equation $x+y=2$. Its barycentric coordinates relative to $((0,0),(2,0),(0,2))$ are $(0,1/2,1/2)$, so it lies on the boundary of the closed triangle. The closest point is $(1,1)$ itself, and the distance is $0$.

</details>

### Exercise 5
A convex polygon has vertices $(0,0)$, $(3,0)$, $(3,3)$, $(0,3)$. Find the closest point on the polygon to $(4,2)$.

<details><summary>Hint 1</summary>

First certify the query is outside the filled square.

</details>

<details><summary>Hint 2</summary>

Minimize on every closed edge; do not confuse the closest carrier point with a segment foot.

</details>

<details><summary>Full solution</summary>

**Solution.** The point is outside the polygon. Project onto each edge:
- Edge $(0,0)$-$(3,0)$: closest is $(3,0)$, distance $\sqrt{1^{2}+2^{2}}=\sqrt{5}$.
- Edge $(3,0)$-$(3,3)$: $t^{*}=((4,2)-(3,0))\cdot(0,3)/9=6/9=2/3$. Closest is $(3,2)$, distance $1$.
- Edge $(3,3)$-$(0,3)$: closest is $(3,3)$, distance $\sqrt{1^{2}+1^{2}}=\sqrt{2}$.
- Edge $(0,3)$-$(0,0)$: closest is $(0,2)$, distance $4$.

The minimum distance is $1$, achieved at $(3,2)$ on the right edge.

</details>


### Exercise 6

For the query minus one on the real line, compare distance to the closed interval from zero to one with distance to the open interval between them. State whether a nearest point exists in each case.

<details><summary>Hint 1</summary>

Every point of either interval is at least one unit from the query, with strict inequality for the open interval.

</details>

<details><summary>Hint 2</summary>

Points approaching zero from above make the open-interval distances approach one without attaining it.

</details>

<details><summary>Full solution</summary>

Both distance values, understood as infima, equal one. The closed interval attains that value at zero, its unique nearest point. Every point of the open interval is positive and therefore farther than one, so no nearest point exists there. A function returning a closest member cannot report zero for the open set; it can report the infimum and the fact that no member attains it. Closing an object changes the point-construction contract even when it leaves this distance value unchanged.

</details>

### Exercise 7

A query point is known within Euclidean distance delta of a displayed position, while the target nonempty set is fixed. Prove a bound on the resulting distance uncertainty. Does the same proof bound the location of a chosen nearest point for a nonconvex target?

<details><summary>Hint 1</summary>

Apply triangle inequality to the query displacement and an arbitrary target point, then take the infimum.

</details>

<details><summary>Hint 2</summary>

Use the two-point example to examine nearest-location jumps.

</details>

<details><summary>Full solution</summary>

The distance value changes by at most delta, by the proved one-Lipschitz inequality. No nearest-point existence is required for this value bound. For nonconvex targets a selected nearest location can jump between distant minimizers under arbitrarily small query changes, as with the two points at opposite ends of a unit diameter near their midpoint. Thus the same reasoning does not bound a nearest location. For a closed convex target the separate variational argument does prove that location bound, with the same constant one.

</details>

### Exercise 8

Let a closed segment run from A to B and let Y be a point on it. Show that the convex variational projection certificate needs to be checked only at A and B to prove Y is nearest to X.

<details><summary>Hint 1</summary>

Every segment point is a convex combination of its two endpoints.

</details>

<details><summary>Hint 2</summary>

The inner product with X minus Y is linear in the competitor displacement.

</details>

<details><summary>Full solution</summary>

If both endpoint inequalities are nonpositive, then for any Z equal to a convex combination of A and B, the inner product of X minus Y with Z minus Y is the same convex combination of those two inequalities and is nonpositive. The full variational characterization therefore makes Y the unique nearest point. Necessity follows by choosing each endpoint as a competitor. This is a finite certificate for the whole segment, including an endpoint minimizer; checking perpendicularity alone would miss the one-sided endpoint inequalities.

</details>

### Exercise 9

A degenerate triangle has vertices $(0,0)$, $(2,0)$ and $(5,0)$. Find its nearest point to $(3,4)$ when the triangle means the closed convex hull. Explain why no triangle-plane Gram inverse is needed.

<details><summary>Hint 1</summary>

The convex hull is the segment joining the farthest pair.

</details>

<details><summary>Hint 2</summary>

The query's horizontal foot lies between zero and five.

</details>

<details><summary>Full solution</summary>

The hull is the horizontal segment from zero to five, whose closest point is $(3,0)$ with distance four. It need not be an input vertex. The two displacement columns of the purported triangle are dependent, so the Gram matrix is singular and provides no plane inversion. Reducing the hull to its farthest endpoint pair, or minimizing over its nondegenerate edges with point dispatches, solves the actual one-dimensional object directly. A zero determinant indicates that dimensional branch rather than a failed ordinary triangle answer.

</details>

### Exercise 10

Compare the nearest-point sets from the origin to the unit circle boundary and to its filled closed disk. Which hypotheses of the convex uniqueness theorem distinguish the answers?

<details><summary>Hint 1</summary>

Every boundary point has norm one, but the disk contains the origin.

</details>

<details><summary>Hint 2</summary>

The circle boundary is closed and nonempty but is not convex.

</details>

<details><summary>Full solution</summary>

Every circle boundary point is a nearest point, with distance one. The filled disk has the unique nearest point at the origin itself and distance zero. Both targets are closed and nonempty, so existence holds. Only the filled disk is convex, giving uniqueness through the midpoint argument. Describing the target merely as a circle or polygon without stating whether it means the boundary or filled region can therefore change both the distance and the number of minimizers. The target-set definition precedes the numerical formula.

</details>

## Transferred capstone: Closest point on a polygon {#computational-legacy-capstone-4}

Find the closest point on the triangle with vertices $(0,0)$, $(4,0)$, $(0,3)$ to the query point $(5,2)$.

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

For an outside query, a nearest point of a filled triangle lies on its boundary.

</details>

<details><summary>Hint 2</summary>

Project onto every closed edge with parameter clamping, then compare squared distances.

</details>

<details><summary>Full solution</summary>

**Solution.** The query point is outside the triangle. We project onto each edge:

- Edge $(0,0)$-$(4,0)$: $t^{*}=(5,2)\cdot(4,0)/16=20/16=5/4>1$. Closest point is $(4,0)$, distance $\sqrt{1^{2}+2^{2}}=\sqrt{5}$.
- Edge $(4,0)$-$(0,3)$: direction $(-4,3)$. $t^{*}=((5,2)-(4,0))\cdot(-4,3)/25=(1,2)\cdot(-4,3)/25=2/25\in[0,1]$. Closest point is $(4,0)+(2/25)(-4,3)=(92/25,6/25)$, distance $\sqrt{(5-92/25)^{2}+(2-6/25)^{2}}=\sqrt{(33/25)^{2}+(44/25)^{2}}=55/25=11/5=2.2$.
- Edge $(0,3)$-$(0,0)$: $t^{*}=((5,2)-(0,3))\cdot(0,-3)/9=3/9=1/3$. Closest point is $(0,2)$, distance $5$.

The minimum distance is $11/5$, achieved at $(92/25,6/25)$ on the edge $(4,0)$-$(0,3)$.

A nearest point cannot be in the filled triangle’s interior: moving a small positive distance from that candidate toward the outside query would remain in the triangle while reducing the distance. Hence minimizing on the three closed edges is exhaustive. The squared winning distance is 121/25, strictly less than five, making the comparison with the first edge exact.

</details>

## Looking backward and forward

This chapter developed the projection formula for lines and segments, showed the importance of clamping for finite segments, and extended the ideas to triangles and polygons. Squared distances were recommended for comparison tasks.

The next chapter, **Transformations and Homogeneous Coordinates**, changes perspective: instead of asking where a point is relative to a fixed object, we ask how to move the object itself. Affine and projective transformations preserve lines but change distances and angles in predictable ways, and homogeneous coordinates unify translation, rotation, and scaling into a single matrix formalism.

## Summary and source

Completing the squared norm proves global line projection and interval clamping. Closed sets in finite-dimensional Euclidean space have nearest points, convexity makes them unique, and the variational certificate proves nonexpansive projection. Triangle-plane projection plus closed-edge minimization is exhaustive, with explicit degenerate handling and retained perpendicular distance. Boundary-only, filled, open and nonconvex targets have different point-output contracts even when some distance infima agree.

The earlier five exercises and full solutions plus the transferred capstone remain, now with staged hints. Five new questions give eleven supported problems. New closed-convex, stability, plane/edge and target-set proofs develop the L3 commission, with compactness of closed bounded Euclidean sets as a named analytic input. No numerical implementation, example execution or independent review is claimed.
