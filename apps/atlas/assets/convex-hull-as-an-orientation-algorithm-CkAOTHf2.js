var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: convex-hull-as-an-orientation-algorithm
title: "Convex Hull as an Orientation Algorithm"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Convex Hull as an Orientation Algorithm

The convex hull of a finite point set is the smallest convex set that contains it. It is a fundamental structure in computational geometry, with applications in collision detection, shape analysis, geographic bounding, and data visualization. This chapter presents the monotone-chain algorithm, which sorts the points and then builds lower and upper chains by testing orientation signs. The algorithm runs in $O(n\\log n)$ time, and its correctness is a direct consequence of the orientation predicate properties established in Chapter 2.

## Definition and properties

A set $S\\subseteq\\mathbb{R}^{2}$ is **convex** if for every pair of points $P,Q\\in S$, the entire segment $PQ$ is contained in $S$. The **convex hull** of a finite set of points is the intersection of all convex sets containing them. When the input is not collinear and has at least three distinct points, it is equivalently the convex polygon whose vertices are a subset of the input points and which contains all input points. For zero, one, or collinear distinct points, the hull is respectively empty, a point, or a segment.

The convex hull is unique. Its vertices are extreme points of the input set: points that cannot be expressed as convex combinations of other input points.

## The monotone-chain algorithm

The monotone-chain algorithm proceeds in three phases:

1. **Sort** the points lexicographically by $(x,y)$.
2. **Remove duplicates.**
3. **Build** the lower and upper hulls separately, each by scanning the sorted list and maintaining a chain where every consecutive triple makes a counterclockwise turn.

For the lower hull, scan left to right. For the upper hull, scan right to left. The full hull is the concatenation of the lower and upper chains, omitting the last point of each because it is repeated as the first point of the other chain. Handle an all-collinear input as a separate branch: with the $\\leq0$ policy return the two endpoints, and with a boundary-retaining policy return the distinct points once in a documented order. Blindly concatenating two retained collinear chains duplicates interior points.

The orientation test is the same predicate from Chapter 2:

$$\\operatorname{orient}(A,B,C)=(B_{x}-A_{x})(C_{y}-A_{y})-(B_{y}-A_{y})(C_{x}-A_{x}).$$

When building a chain, a new point is appended if it makes a left turn relative to the previous edge. If it makes a right turn or is collinear, the previous point is removed and the test is repeated. The condition for popping is $\\operatorname{orient}\\leq 0$ (for removing collinear boundary points) or $\\operatorname{orient}<0$ (for keeping them). The API must document which convention it uses.

## Correctness and complexity

The lower-chain invariant is that its directed edges make the required left turns and every processed point lies on or to the left of each directed lower-chain edge; lexicographic order handles vertical edges without treating the chain as the graph of a function. When a new point $C$ makes $\\operatorname{orient}(A,B,C)\\leq0$, then if $A_x<C_x$, the middle point $B$ lies on or above the chord $AC$ and cannot remain on the lower boundary. If $A_x=C_x$, lexicographic order forces all three $x$-coordinates equal with $B$ between $A$ and $C$, so $B$ is again redundant. It can still be an upper-hull extreme point and will be considered during the reverse scan. The symmetric invariant proves the upper chain; concatenating the two chains gives the convex boundary.

The dominant cost is sorting, which takes $O(n\\log n)$ time. The chain-building phase is $O(n)$ because each point is pushed once and popped at most once. The total complexity is $O(n\\log n)$.

## Worked example

Find the convex hull of $(0,0)$, $(2,0)$, $(1,1)$, $(0,2)$, $(2,2)$, $(1,0.5)$.

Sorted: $(0,0)$, $(0,2)$, $(1,0.5)$, $(1,1)$, $(2,0)$, $(2,2)$.

Lower hull build:
- Push $(0,0)$.
- Push $(0,2)$. (Need 2 points to test.)
- Push $(1,0.5)$. Orient$((0,0),(0,2),(1,0.5))=(0)(0.5)-(2)(1)=-2<0$. Pop $(0,2)$.
- Now chain is $(0,0)$, $(1,0.5)$. Push $(1,1)$. Orient$((0,0),(1,0.5),(1,1))=(1)(1)-(0.5)(1)=0.5>0$. Keep.
- Push $(2,0)$. Orient$((1,0.5),(1,1),(2,0))=(0)(-0.5)-(0.5)(1)=-0.5<0$. Pop $(1,1)$.
- Now chain is $(0,0)$, $(1,0.5)$, $(2,0)$. Orient$((0,0),(1,0.5),(2,0))=(1)(0)-(0.5)(2)=-1<0$. Pop $(1,0.5)$.
- Now chain is $(0,0)$, $(2,0)$. Push $(2,2)$. Orient$((0,0),(2,0),(2,2))=(2)(2)-(0)(2)=4>0$. Keep.

Lower hull: $(0,0)$, $(2,0)$, $(2,2)$.

Upper hull (reverse scan):
- Push $(2,2)$, $(2,0)$, $(1,1)$, $(1,0.5)$, $(0,2)$, $(0,0)$.
- After similar pops: $(2,2)$, $(0,2)$, $(0,0)$.

Full hull (omitting last of each): $(0,0)$, $(2,0)$, $(2,2)$, $(0,2)$.

The interior points $(1,1)$, $(1,0.5)$ are correctly discarded.

## Convex combinations and what the output represents

**L3 preparation.** Use the exact determinant identities of [Orientation](orientation-is-the-central-planar-predicate.md) and the closed-set projection arguments of [Projection and Distance](projection-distance-and-closest-points.md). We count exact coordinate comparisons and orientation evaluations as constant-cost primitives for the running-time theorem. Bit complexity and uncertain input are separate questions, discussed below. The output convention in this chapter is an ordered counterclockwise boundary of extreme vertices, without repeating its initial point.

For a nonempty finite set $S=\\{P_1,\\ldots,P_n\\}$, its hull is exactly
$$K=\\left\\{\\sum_i\\lambda_iP_i:\\lambda_i\\ge0,\\ \\sum_i\\lambda_i=1\\right\\}.$$
To prove this, the displayed set contains $S$ and is convex: a convex combination of two such sums has the combined nonnegative coefficients, still summing to one. Conversely every convex set containing $S$ contains each finite convex combination, by induction on the number of positive coefficients. Thus it is contained in every convex set in the defining intersection and is itself one of them. This also proves uniqueness. It is compact because it is the continuous image of the closed bounded coefficient simplex; this uses the finite-dimensional compactness theorem taught in real analysis.

A point is extreme when it is not a nontrivial point of a segment joining two distinct hull points. Every extreme point of this finite hull is an input point. Indeed, express an alleged extreme point as a convex combination of input points. If one positive coefficient belongs to a different point, separate that term from the remaining weighted average. Either the two resulting points are distinct, contradicting extremality, or they both equal the alleged point, contradicting the choice of the separated point. The converse is false: being supplied as input does not make a point extreme. Midpoints on a boundary edge and strictly interior samples are the basic counterexamples.

For a noncollinear finite set, the compact hull has a polygonal boundary with extreme vertices among the input. One direct reason is that on any line supporting the hull, the maximizers of the corresponding linear functional are convex combinations only of maximizing input points. Their hull in that line is a point or a segment with input endpoints. There are only finitely many candidate pairs of endpoints. Following these supporting faces around the set gives its polygonal boundary. The algorithm below constructs both monotone portions of that same boundary without enumerating all candidate pairs.

## A complete lower-chain proof

It is useful to prove the graph portion first. Group the input by horizontal coordinate and retain the smallest vertical coordinate at each value. Any higher point at the same horizontal coordinate cannot force the lower graph downward; it can matter to the upper hull or a vertical endpoint face. Now write the remaining points with strictly increasing horizontal coordinates. A polygonal graph below these points means a piecewise affine function on their horizontal interval whose value at each input coordinate is at most the input height.

The lower boundary is the greatest convex polygonal graph below those samples. To see the direction of the inequality, any convex function below the sample heights lies below the chord joining two chosen sample points on each intervening interval. A convex chain whose knots are input points and which lies below every sample therefore dominates every such convex function. The chain itself is one of those functions, so this domination characterizes it uniquely.

Suppose inductively the retained chain has increasing edge slopes and lies below all processed samples. Append the next rightmost sample. This extends the polygonal graph without changing its old values, so it is still below all processed samples, but the last pair of slopes might fail to increase. With consecutive knots $A,B,C$ in increasing horizontal order, the condition $\\operatorname{orient}(A,B,C)\\le0$ is exactly the condition that the first slope is at least the second. In that event the chord from $A$ to $C$ lies on or below both pieces $AB$ and $BC$: subtract the chord's affine function from each piece; the difference is zero at the outside endpoint and nonnegative at the shared knot $B$, hence nonnegative throughout each interval. Deleting $B$ thus keeps the graph below every input sample, including samples at earlier deleted knots.

Repeat this argument until all consecutive slopes increase. Termination follows because each deletion shortens the finite chain. The resulting graph is convex, lies below all processed samples and has knots among those samples. The preceding characterization proves it is exactly their lower convex boundary. This is the missing global justification behind the local pop calculation: a locally deleted knot is never needed by any lower convex graph, and the resulting chain accounts for every processed point, not merely its last triple.

The actual lexicographic scan does not require a separate grouping pass. For points sharing one horizontal coordinate it encounters heights from smallest to largest. An intermediate vertical point is removed on the next equal-coordinate insertion, since the orientation is zero; when the scan moves to a larger horizontal coordinate, the right turn removes a vertical upper endpoint from the lower graph. At the final horizontal coordinate, the bottom-to-top vertical segment is retained as the rightmost supporting face. At the first coordinate the lower graph begins at its bottom endpoint. Thus the graph proof plus this explicit vertical-face accounting proves the stated lexicographic algorithm, including equal-coordinate groups.

Apply the same proof to the reversed scan, or equivalently to coordinates with both axes negated. It yields the upper boundary, directed from the lexicographic maximum back to the minimum. Both scans visit only boundary points of the hull, and together their graphs and extreme vertical faces enclose all input points. Their concatenation is exactly the polygon boundary, with shared endpoint occurrences removed. Empty, singleton, two-point and all-collinear inputs must be dispatched before treating the result as a polygon. They have different dimensions, not failed polygon outputs.

Changing the pop policy to retain collinear points describes the same convex set but changes its boundary representation. In a noncollinear input each side can then carry additional distinct points in order along that side. The all-collinear case needs the separate convention already stated, because there are not two different boundary arcs. A consumer expecting a strict corner at every listed point must either receive the extreme-only form or explicitly compress successive collinear points.

## Worked example 2: vertical sides and a boundary sample

Take $(0,0),(0,1),(0,2),(1,0),(1,1),(2,0),(2,2)$, with a repeated copy of $(0,0)$. Deduplication removes the repeated copy, which otherwise contributes no new geometric information. The lower scan first replaces $(0,1)$ by $(0,2)$ on its vertical temporary chain. Upon encountering $(1,0)$, it pops $(0,2)$ and keeps the bottom edge. The sample $(1,1)$ is later popped when $(2,0)$ arrives. The middle bottom point $(1,0)$ is also popped by the zero-turn policy. Finally $(2,2)$ remains on the right vertical face.

The lower chain is $(0,0),(2,0),(2,2)$; the upper chain is $(2,2),(0,2),(0,0)$. The output is the square in counterclockwise order. Both omitted points on the left edge and the omitted point on the bottom edge remain part of the geometric hull. The interior point does not. Returning only the extreme vertices records an entire filled polygon, rather than a claim that the omitted boundary samples disappeared from the set. Under a boundary-retaining convention, the left-edge and bottom-edge samples would be listed once in boundary order.

## Amortization and the meaning of optimality

The nested deletion loop does not multiply the scan cost by the number of points. In one scan every distinct input point is appended once and can be removed at most once. Charge each successful loop iteration to the point it removes. There are at most as many such charges as insertions, and at most one final unsuccessful orientation check per insertion after the short-chain cases. This proves a linear number of predicate calls. The two scans use linear storage and produce at most as many distinct extreme vertices as distinct inputs.

Sorting dominates in the ordinary comparison model. Duplicate removal is a single adjacent pass after sorting, and concatenation is linear. Hence the upper bound is $O(n\\log n)$ operations and $O(n)$ auxiliary storage. If sorted distinct input is part of the contract, the hull phase itself is linear. If integer sorting is available under a special bounded-key model, the comparison-sorting lower bound is not automatically the right cost statement. These are changes of input or cost model, not contradictions.

For the usual ordered-boundary output, sorting distinct real numbers reduces to planar hull construction. Map each number $a$ to $(a,a^2)$. The tangent line at $a$ has equation $y=2ax-a^2$, and any other mapped number $b$ lies above it by $(b-a)^2>0$. Every mapped point is therefore a strict extreme point on the lower boundary. An ordered hull gives the increasing numbers by following that lower boundary from its least horizontal coordinate to its greatest; locating the starting point and reading the cycle costs linear time. Thus a hull routine in a comparison-based model that could evade the sorting lower bound would also sort those numbers with too few comparisons. The statement presupposes ordered boundary information: returning an unordered set that happens to contain every input parabola point does not itself recover sorted order.

## Independent mathematical certificates

A proposed boundary deserves a certificate different from merely repeating a scan. Suppose distinct listed vertices form a simple counterclockwise convex polygon, every edge has all input points on its left closed half-plane, and every listed vertex is itself an input point. Then the polygon equals the input hull. The polygon contains the inputs by its half-plane description, hence contains their hull. Conversely, convexity and input membership of its vertices put every convex combination in the input hull, so the polygon is contained in it. These two inclusions prove equality. Strict turns give the extreme-only representation; zero turns allow redundant boundary points.

The simplicity and convexity assumptions cannot be silently removed. A repeated cycle can make every input lie on the desired side yet list a boundary more than once. Collinear triples alone do not prove a polygon has the right winding or is nondegenerate. One particularly clean finite certificate is the actual list of supporting edges together with all input-side signs, a dimension declaration and a single cyclic ordering of distinct endpoints. For point and segment hulls, replace polygon-side checks by equality or collinear interval containment and verify that the extreme endpoints belong to the input.

This quadratic-sized certificate is useful for explaining a small example even though the construction is faster. A proof certificate and an efficient algorithm serve different purposes. For large point sets one may exploit the sorted chain structure to shorten the certificate, but doing so requires its own argument. The capstone below illustrates explicit support signs without implying that a numerical picture has supplied them.

## Worked example 3: every circular sample is extreme

Let $P$ lie on a circle of center $O$ and positive radius $r$. The linear functional $X\\mapsto(P-O)\\cdot(X-O)$ takes value $r^2$ at $P$. At another circle point $Q$ it equals $r^2-\\lVert Q-P\\rVert^2/2$, which is strictly smaller when the points are distinct. Therefore $P$ uniquely maximizes this functional among any finite collection of distinct circle samples. A convex combination of other samples has strictly smaller value and cannot equal $P$. This proves extremality without assuming the points are evenly spaced or relying on the drawing's apparent roundness.

For example, $(1,0),(0,1),(-1,0),(0,-1)$ all survive as corners, while the origin is discarded if added. The tangent functional at $(1,0)$ is simply the first coordinate. The other three circle points have smaller first coordinate, and so does the origin. With just one or two distinct samples the hull has the corresponding lower dimension; “every sample is extreme” still holds, but there is no filled two-dimensional polygon.

## Exact arithmetic and uncertain point sets

Sorting and orientation must refer to the same declared input coordinates. With rational data, compare coordinates and determinant signs exactly; the operation-count theorem treats those as primitives, while large numerators introduce additional bit costs. Translating or scaling a set cannot change exact collinearity, although an implementation with fixed-width arithmetic may overflow. The proven integer determinant bound in the orientation chapter supplies a starting range contract, not an assertion that every coordinate type is safe.

For uncertain coordinates, the input is a family of possible point sets. Near-collinear samples can be vertices for some members and interior for others. A fixed numerical tolerance in the pop rule can therefore remove a real corner or retain inconsistent turns. The coordinate-box bound from the orientation chapter may certify a particular turn uniformly across the family. If it cannot, the correct conclusion is that the current certificate is incomplete; refining arithmetic resolves rounding uncertainty, whereas narrowing input boxes requires better data. Neither operation can silently declare a different mathematical point set to be the original one.

## Common errors

- **Using $<0$ instead of $\\leq 0$ without documenting the choice.** Keeping collinear boundary points changes the hull representation and may break downstream algorithms that assume strict convexity.
- **Forgetting to remove duplicates.** Duplicate points cause zero-length edges and may trigger division by zero in later processing.
- **Assuming the input is already sorted.** The $O(n\\log n)$ sorting step is essential for correctness; without it, the chain-building phase may produce non-convex results.
- **Not handling fewer than two distinct points.** With zero or one distinct points, the hull is trivial. With two, it is the segment connecting them.

## Practice exercises with solutions

### Exercise 1
Find the convex hull of $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$, $(0.5,0.5)$.

<details><summary>Hint 1</summary>

Which four input points support the square boundary?

</details>

<details><summary>Hint 2</summary>

Check the center lies inside their convex hull.

</details>

<details><summary>Full solution</summary>

**Solution.** The interior point $(0.5,0.5)$ is discarded. The hull is the square with vertices $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$.

</details>

### Exercise 2
What is the convex hull of three collinear points $(0,0)$, $(1,1)$, $(2,2)$?

<details><summary>Hint 1</summary>

A convex hull contains the interval between its extreme points.

</details>

<details><summary>Hint 2</summary>

The middle point lies halfway between the endpoints.

</details>

<details><summary>Full solution</summary>

**Solution.** With the $\\leq 0$ policy, only the extremes $(0,0)$ and $(2,2)$ are kept. The hull is the segment connecting them.

</details>

### Exercise 3
Explain why the monotone-chain algorithm is $O(n\\log n)$ and not $O(n)$.

<details><summary>Hint 1</summary>

Separate sorting cost from total stack insertions and deletions.

</details>

<details><summary>Hint 2</summary>

For a lower bound, place the numbers to be sorted on a parabola.

</details>

<details><summary>Full solution</summary>

**Solution.** The sorting step requires $O(n\\log n)$ comparisons. The chain-building phase is $O(n)$, but it does not dominate. No comparison-based algorithm can compute the convex hull in $o(n\\log n)$ time in the worst case, because sorting reduces to convex hull.

</details>

### Exercise 4
A point set has $n$ distinct points on a circle. How many vertices does the convex hull have?

<details><summary>Hint 1</summary>

Find a linear functional uniquely maximized at one chosen circle point.

</details>

<details><summary>Hint 2</summary>

Use its radial direction as the functional normal.

</details>

<details><summary>Full solution</summary>

**Solution.** Every one of the $n$ distinct points on a circle is extreme, so the convex hull has $n$ vertices. The distinctness hypothesis avoids counting duplicate inputs as different vertices.

</details>

### Exercise 5
Prove the local lower-hull claim used by the pop step, and explain why it does not show that the popped point is absent from the full hull.

<details><summary>Hint 1</summary>

Write both adjacent slopes when horizontal coordinates are distinct.

</details>

<details><summary>Hint 2</summary>

A lower-chain deletion says nothing about the upper scan.

</details>

<details><summary>Full solution</summary>

**Solution.** The scan order gives $A_x\\leq B_x\\leq C_x$. If $A_x<C_x$ and $\\operatorname{orient}(A,B,C)\\leq0$, then $B$ lies on or above the chord $AC$ and cannot be a lower-boundary vertex for the processed points. If $A_x=C_x$, all three $x$-coordinates agree and lexicographic order puts $B$ between $A$ and $C$ on the vertical line, so it is redundant. Repeating the pop restores the directed-edge invariant. This is only a lower-hull conclusion: a popped point can be an upper extreme point---the worked example pops $(0,2)$ from the lower chain and retains it on the upper chain.

</details>

### Exercise 6

Prove that adding a point already in the convex hull does not change that hull. Does removing an arbitrary input point preserve it?

<details><summary>Hint 1</summary>

Use the smallest-convex-set definition for both inclusions.

</details>

<details><summary>Hint 2</summary>

Contrast a midpoint with a corner of a triangle.

</details>

<details><summary>Full solution</summary>

Write $K=\\operatorname{conv}S$ and let $P\\in K$. Since $K$ is convex and contains $S\\cup\\{P\\}$, the hull of that larger set is contained in $K$. Since it contains $S$, it contains $K$ as well. The hulls agree. Removing an arbitrary point need not preserve the hull: removing one vertex from a nondegenerate three-point triangle leaves a segment. Removing a point that is a convex combination of the remaining inputs does preserve it by the proved addition result. This distinguishes redundant samples from essential extreme vertices.

</details>

### Exercise 7

A list gives the square vertices counterclockwise, twice in succession. Every directed edge has all inputs on its left. Why is it still an invalid extreme-vertex boundary output?

<details><summary>Hint 1</summary>

The output contract requires a single ordered boundary without repeated vertices.

</details>

<details><summary>Hint 2</summary>

Containment signs certify a geometric set only after the claimed polygon representation is specified.

</details>

<details><summary>Full solution</summary>

The list traverses the same boundary twice and repeats each vertex. It fails the distinct-cycle output condition, even though every edge supports the correct convex hull. A downstream perimeter sum would return twice the actual perimeter. Thus support signs alone do not establish that the representation is a single simple polygon. Deleting the repeated traversal yields the correct list, but that repair must be made explicitly rather than inferred from containment alone.

</details>

### Exercise 8

Find the extreme-only hull of $(0,0),(0,1),(0,2),(1,1)$ and state the dimension of the result. Which point is redundant?

<details><summary>Hint 1</summary>

The equal-horizontal-coordinate group contributes both extreme vertical endpoints to the full hull.

</details>

<details><summary>Hint 2</summary>

The middle vertical point is a convex combination of those endpoints.

</details>

<details><summary>Full solution</summary>

The counterclockwise hull is $(0,0),(1,1),(0,2)$. Its orientation is positive, so it is a two-dimensional triangle. The point $(0,1)$ is the midpoint of the first and last vertices and is redundant as a listed corner, although it lies on the hull boundary. The lower graph uses the bottom vertical endpoint, and the upper graph uses the top one. Keeping only the smallest point from every equal-coordinate group for both scans would incorrectly lose $(0,2)$, so lower and upper grouping policies must differ.

</details>

### Exercise 9

Show that every point $(a,a^2)$ in a finite collection with distinct real parameters is extreme, and explain precisely how an ordered hull would sort the parameters.

<details><summary>Hint 1</summary>

Subtract the tangent line $y=2ax-a^2$ from the parabola height.

</details>

<details><summary>Hint 2</summary>

Locate the leftmost vertex and follow the lower boundary to the rightmost one.

</details>

<details><summary>Full solution</summary>

At another parameter $b$, the height above that tangent is $(b-a)^2>0$. Thus the functional $y-2ax$ is uniquely minimized at $(a,a^2)$, proving it cannot be a convex combination of other samples. All points occur on the lower boundary in increasing horizontal order; the remaining upper boundary is the endpoint chord. In the cyclic ordered hull, locate the smallest parameter and choose the lower-boundary direction, which can be identified from the orientation or increasing coordinates. Reading that chain gives the sorted list, with linear overhead. An unordered extreme-point set does not provide this ordering information.

</details>

### Exercise 10

Consider $A=(0,0)$, $B=(1,-\\delta)$, $C=(2,0)$ with $\\delta>0$. Explain why replacing sufficiently small orientation values by zero can change the exact hull. What if the middle height is uncertain in $[-\\varepsilon,\\varepsilon]$?

<details><summary>Hint 1</summary>

Compute $\\operatorname{orient}(A,B,C)$ before applying any tolerance rule.

</details>

<details><summary>Hint 2</summary>

An uncertain family can contain both a nondegenerate triangle and a segment.

</details>

<details><summary>Full solution</summary>

The exact orientation is $2\\delta>0$, so the three points form a nondegenerate triangle and all are extreme. A positive absolute cutoff can relabel this as collinearity and remove $B$, changing a filled triangle to a segment however small its area. If the middle height ranges across $[-\\varepsilon,\\varepsilon]$ with positive $\\varepsilon$, the family includes a lower triangle, an upper triangle and the collinear segment. It has no single fixed oriented triangular boundary. A faithful answer records that ambiguity or obtains narrower input data; increasing arithmetic precision alone cannot select one realization of uncertain measurements.

</details>

## Transferred capstone: Convex hull verification {#computational-legacy-capstone-9}

The points $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$, $(-1,2)$ are given. Find the convex hull and verify that every non-hull point is inside or on the boundary.

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Prove each candidate edge supports all the other input points on the left.

</details>

<details><summary>Hint 2</summary>

Every listed point must be justified as a vertex; do not omit the high point.

</details>

<details><summary>Full solution</summary>

**Solution.** The extreme points are $(-1,2)$, $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$. The point $(1,4)$ is extreme; $(2,3)$ is extreme. Checking orientations confirms that $(-1,2)$-$(0,0)$-$(3,1)$-$(2,3)$-$(1,4)$ forms a convex polygon. No input point lies outside.

An exact supporting-edge certificate is obtained by listing the orientations of all three other points for each directed edge in this order. Label the cycle vertices A=(-1,2), B=(0,0), C=(3,1), D=(2,3), E=(1,4). For AB, BC, CD, DE and EA respectively the triples are (7,7,6), (7,7,11), (7,7,1), (4,5,1) and (6,10,4), with the other points listed in alphabetical order after excluding edge endpoints. Every value is strictly positive. Thus every directed edge is a strict supporting edge of the point hull and every named endpoint is extreme; the cycle is the convex boundary rather than an unchecked self-crossing order. In this input there are no remaining non-hull points to inspect.

</details>

## Looking backward and forward

This chapter presented the monotone-chain convex hull algorithm and showed that its correctness rests entirely on the orientation predicate. The $O(n\\log n)$ complexity is optimal for comparison-based algorithms.

The next commissioned chapter, **Polygon Triangulation and the Art Gallery Theorem**, uses convexity and orientation to decompose a simple polygon. The later curved-metric reading returns to distances on spheres and hyperbolic disks. Its metric computations require their own geometric hypotheses.
`;export{e as default};