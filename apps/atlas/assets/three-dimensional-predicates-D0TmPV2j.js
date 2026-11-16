var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: three-dimensional-predicates
title: "Three-Dimensional Predicates"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Three-Dimensional Predicates

The planar predicates of the preceding chapters---orientation, sidedness, intersection---have natural extensions to three dimensions. A plane replaces a line as the fundamental linear object, the cross product replaces the two-dimensional perpendicular, and the scalar triple product generalizes orientation to volume. This chapter defines these three-dimensional tools, derives the plane-line intersection formula, and shows how to slice a convex polyhedron by a plane. The same themes recur: exact formulas, explicit boundary policies, and scale-aware tolerance.

## Planes in $\\mathbb{R}^{3}$

A plane in three-dimensional space is the set of points $X=(x,y,z)$ satisfying

$$n\\cdot X=c,$$

where $n=(n_{x},n_{y},n_{z})$ is a nonzero normal vector and $c$ is a scalar. As in the planar case, $(n,c)$ and $(\\lambda n,\\lambda c)$ describe the same plane for any $\\lambda\\neq 0$.

The signed numerator $n\\cdot X-c$ tells which side of the plane contains $X$. The perpendicular distance from $X$ to the plane is

$$d(X,\\Pi)=\\frac{\\lvert n\\cdot X-c\\rvert}{\\lVert n\\rVert}.$$

A zero normal must be rejected before any computation.

## Line--plane intersection

A line in $\\mathbb{R}^{3}$ is $L(t)=P+tv$ with $v\\neq 0$. It meets the plane $n\\cdot X=c$ when

$$n\\cdot(P+tv)=c,$$

which gives

$$t=\\frac{c-n\\cdot P}{n\\cdot v},$$

provided $n\\cdot v\\neq 0$. If the denominator is zero, the line is parallel to the plane. Two subcases arise:

- **Disjoint parallel:** $c\\neq n\\cdot P$. The line never meets the plane.
- **Contained:** $c=n\\cdot P$. Every point of the line lies in the plane.

## Worked example

Find where the line $(0,0,2)+t(1,1,-1)$ meets the plane $z=0$.

The plane has normal $n=(0,0,1)$ and $c=0$. The denominator is $n\\cdot v=0\\cdot 1+0\\cdot 1+1\\cdot(-1)=-1$. The numerator is $c-n\\cdot P=0-2=-2$. Thus $t=(-2)/(-1)=2$. The intersection point is $(0,0,2)+2(1,1,-1)=(2,2,0)$.

## The cross product

For vectors $u,v\\in\\mathbb{R}^{3}$, the **cross product** is

$$u\\times v=(u_{y}v_{z}-u_{z}v_{y},\\;u_{z}v_{x}-u_{x}v_{z},\\;u_{x}v_{y}-u_{y}v_{x}).$$

It is perpendicular to both $u$ and $v$. Its magnitude is $\\lVert u\\rVert\\lVert v\\rVert\\sin\\theta$, which equals the area of the parallelogram spanned by $u$ and $v$. The cross product is antisymmetric: $u\\times v=-(v\\times u)$.

## The scalar triple product

For vectors $u,v,w\\in\\mathbb{R}^{3}$, the **scalar triple product** is

$$u\\cdot(v\\times w).$$

Its absolute value is the volume of the parallelepiped spanned by $u$, $v$, and $w$. It is zero if and only if the three vectors are coplanar. In exact arithmetic, zero signals coplanarity. The raw magnitude is not a scale-free measure of near-coplanarity: rescaling one vector rescales the triple product. For nonzero vectors, compare the normalized quantity
$$\\frac{|u\\cdot(v\\times w)|}{\\lVert u\\rVert\\,\\lVert v\\rVert\\,\\lVert w\\rVert}$$
with a dimensionless tolerance, while also guarding the norm products against overflow, underflow, and zero inputs.

## Slicing a convex polyhedron

To slice a convex polyhedron by a plane:

1. Evaluate the signed plane value $n\\cdot V-c$ at every vertex $V$.
2. For every edge whose endpoint signs have opposite signs, interpolate one intersection point. If exactly one endpoint has sign zero, include that endpoint. If both signs are zero, include the whole edge through its endpoints rather than evaluating a $0/0$ interpolation.
3. Deduplicate intersection points.
4. Order the points around their centroid in a basis of the slicing plane.
5. Verify that each polygon edge lies in one original face.

The slice of a convex polyhedron is convex, but it may be empty, a point, a segment, a polygon, or a whole coplanar face. The polygon-ordering steps apply only to the two-dimensional case. A nonconvex mesh can yield several disjoint polygons and requires face-level topology, not only an unordered point set.

## Why the spatial formulas are correct

**L3 scope.** Coordinates are real numbers unless exact rational input is stated. We use the determinant and inner-product laws from [Linear Algebra](../linear-algebra-structure-proofs.md), and the complete interval and endpoint policies from [Segment Intersection](segment-intersection-needs-boundary-cases.md). An exact zero, a certified nonzero sign and an unresolved interval are different outcomes. None of the proofs authorizes replacing an unresolved value by zero.

For a valid plane, put $s=n\\cdot X-c$ and $Q=X-sn/\\lVert n\\rVert^2$. Substitution gives $n\\cdot Q=c$. Every other plane point has the form $Q+w$ with $n\\cdot w=0$, so
$$\\lVert X-(Q+w)\\rVert^2=s^2/\\lVert n\\rVert^2+\\lVert w\\rVert^2.$$
This proves both the distance formula and uniqueness of the foot. Multiplying the plane equation by a negative number reverses its signed side labels while preserving the plane, foot and unsigned distance. A side label therefore belongs to an oriented equation, not merely to its zero set. If the normal vanishes, the equation instead describes all space when the constant vanishes, and the empty set otherwise; neither is a plane.

The cross-product coordinate formula gives $u\\cdot(u\\times v)=v\\cdot(u\\times v)=0$ by cancellation. Expanding its squared length gives the Gram identity
$$\\lVert u\\times v\\rVert^2=\\lVert u\\rVert^2\\lVert v\\rVert^2-(u\\cdot v)^2.$$
For nonzero inputs the definition of the angle by the dot product now proves the stated sine formula. The same identity and the equality case of Cauchy–Schwarz show that the cross product vanishes exactly when the two vectors are linearly dependent, including zero inputs. Thus three points determine a plane precisely when their two difference vectors have nonzero cross product. Nearly dependent vectors need a conditioning analysis; an algebraically nonzero normal alone supplies no accuracy bound for its normalized direction.

For four points define the spatial orientation by
$$D(A,B,C,P)=((B-A)\\times(C-A))\\cdot(P-A).$$
When the first three points are noncollinear, its sign gives the side of their oriented plane. Its absolute value divided by six is the tetrahedron volume: the base triangle has area half the cross-product length, and the signed perpendicular height is the triple product divided by that length. The familiar pyramid volume formula supplies the remaining factor of three. This volume statement needs no ordering of the points beyond the stated sign convention. A coplanar quadruple has zero determinant even when some of its points coincide; zero does not identify which degeneracy occurred.

Translation cancels from all three differences. Interchanging any two points negates the determinant: for the base point interchange, subtract the new first difference from the other two columns and use alternation; interchanges of the remaining points are column swaps. Under an affine map with linear part $L$, multilinearity gives $D'=\\det(L)D$. An invertible map therefore preserves coplanarity, while its determinant decides whether it preserves spatial orientation. A singular map can flatten an entire tetrahedron. An arbitrary planar projection can also destroy this sign, which explains why the projected planar determinant cannot replace the spatial predicate.

## Intersecting two planes

Let the normals be $n,m$, both nonzero, and put $u=n\\times m$. If $u=0$, write $m=\\lambda n$ using any nonzero coordinate of $n$, and verify the remaining coordinates. The planes agree exactly when their constants satisfy $d=\\lambda c$; otherwise they are disjoint. This coefficient comparison avoids confusing normals that point in opposite directions with different planes.

If $u\\ne0$, the intersection is a line with direction $u$ and one point
$$P=\\frac{c(m\\times u)+d(u\\times n)}{\\lVert u\\rVert^2}.$$
Indeed $n\\cdot(m\\times u)=\\lVert u\\rVert^2$, $m\\cdot(u\\times n)=\\lVert u\\rVert^2$, and the two unwanted scalar products vanish. Thus $n\\cdot P=c$ and $m\\cdot P=d$. Any other solution differs from $P$ by a vector perpendicular to both independent normals, hence by a scalar multiple of $u$. This proves existence and exhaustiveness, including planes that do not admit a convenient coordinate graph. Small cross-product length relative to the normal lengths warns that the intersection location can be sensitive even though its exact existence is settled.

## Worked example 2: a spatial crossing and a projection trap

Take $A=(0,0,0)$, $B=(2,0,0)$, $C=(0,2,0)$, and the segment from $U=(1/2,1/2,1)$ to $V=(1/2,1/2,-1)$. The triangle normal is $(0,0,4)$. The line–plane parameter is $t=1/2$, giving $P=(1/2,1/2,0)$. Its barycentric coordinates relative to $A,B,C$ are $(1/2,1/4,1/4)$, all positive, so this is a unique interior crossing of both the segment and the triangle.

In the same example the planar projection of the segment to the horizontal coordinate plane is a single point. A planar segment-intersection routine sees no transverse crossing there. Conversely, two spatial segments at distinct heights may project to intersecting planar segments while being disjoint. Projection is useful only after its relationship with the actual intersection plane has been proved. For the two planes $z=0$ and $x+y=1$, the normals are $(0,0,1)$ and $(1,1,0)$; their intersection direction is $(-1,1,0)$ and a convenient point is $(1/2,1/2,0)$. The preceding formula returns precisely that point, although every other point on the same line is equally valid.

## An exhaustive segment–triangle predicate

Here a triangle means the filled closed convex hull of its three vertices. First remove the possibility of a zero-length segment by treating it as a point. If the triangle normal vanishes, its filled convex hull is a point or the segment between a farthest pair of its vertices. The earlier closed-set segment cases then apply in a suitable line coordinate; for two spatial lines one must additionally verify coplanarity and the resulting point in all three coordinates. Merely crossing two projections is insufficient.

For clarity, two nonparallel spatial segment directions $v,w$ admit an explicit reduction. Set $k=v\\times w$. Their supporting lines can meet only if $(Q-P)\\cdot k=0$. Under that condition write $Q-P=sv-tw$ in the independent planar basis $v,w$; crossing with each direction gives
$$s=\\frac{((Q-P)\\times w)\\cdot k}{\\lVert k\\rVert^2},\\qquad t=\\frac{((Q-P)\\times v)\\cdot k}{\\lVert k\\rVert^2}.$$
The reconstruction identity follows because the coplanarity condition puts $Q-P$ in that basis. Endpoint interval checks now give the complete segment answer. If $k=0$, test collinearity by $(Q-P)\\times v=0$, after the point cases; a nonzero direction coordinate then reduces the collinear case to interval overlap. This supplies the spatial reduction needed for a degenerate triangle without assuming that intersecting projections meet in space.

For a nondegenerate triangle, intersect the segment's supporting line with its plane. A nonzero denominator gives at most one parameter. Compare it with both closed endpoints before deciding membership. For a parameter in the interval, the resulting point is in the filled triangle exactly when its three barycentric coordinates are nonnegative. One way to compute two of them is the nonsingular Gram system for the independent vectors $B-A,C-A$; the third is one minus their sum. The Gram determinant is positive because the cross product is nonzero. This proves that the coordinate solution is unique and reconstructs the point rather than merely approximating a projected picture.

Equivalently, for a point already known to lie in the triangle plane, evaluate the three expressions
$$n\\cdot((B-A)\\times(P-A)),\\quad n\\cdot((C-B)\\times(P-B)),\\quad n\\cdot((A-C)\\times(P-C)).$$
They are the corresponding barycentric coordinates times $\\lVert n\\rVert^2$ in cyclic order. Expanding in the basis $B-A,C-A$ proves that identity directly. Their simultaneous nonnegativity is therefore an exact membership certificate. A point off the plane must be rejected before using these inequalities, since they ignore its normal displacement.

If the line denominator is zero but its starting point is off the plane, the intersection is empty. If the line lies in the plane, substitute its segment parameter into those three edge expressions. Each is an affine function of the parameter. Intersect the three resulting closed linear inequality intervals with the segment domain. The result is empty, a singleton or an interval, whose image is the full intersection. A zero coefficient means either no restriction or an impossible inequality; it is never an instruction to divide by zero. This clipping argument proves completeness of the coplanar branch, including overlap along an edge. Open-boundary variants need explicit endpoint flags and triangle-edge policies rather than a change of numerical tolerance.

A coordinate-plane reduction is another valid approach. Delete a coordinate whose normal component is nonzero. Restricted to the triangle plane this projection is an affine bijection: the missing coordinate is uniquely recovered from the plane equation. It preserves intersections and convex combinations, so planar clipping is then justified. Choosing the largest absolute normal component improves the recovery denominator, although that choice alone does not prove a floating-point error bound.

## Why convex slicing finds every vertex

Assume a bounded, full-dimensional convex polyhedron with its complete vertex, edge and face incidence, and a valid slicing plane. The slice is convex because both sets are convex. It is bounded and described by finitely many linear inequalities in the plane. Its dimension can be zero, one or two; emptiness is a separate possibility. A face lying in the slicing plane is handled by its existing boundary vertices, and repeated discoveries of a vertex represent one point.

To prove completeness of the edge procedure, take an extreme point of the slice and the smallest face of the original polyhedron containing it. In the relative interior of a face of dimension at least two, a plane either contains local face directions or cuts out a local line. In either case a small segment through the point remains in the slice, contradicting extremality. If the smallest face is an edge, a point in its relative interior is extreme in the slice only if the slicing plane crosses that edge rather than containing it. The remaining possibility is an original vertex on the plane. Hence every slice vertex is exactly one of the points the procedure collects.

Conversely, every collected crossing or plane vertex lies in the polyhedron and plane. Their convex hull is contained in the slice. A bounded polytope is the convex hull of its extreme points: within any positive-dimensional face, extend a line through a nonextreme point to the two boundary endpoints, express the point as their convex combination, and repeat in faces of smaller dimension. Finite face dimension terminates this argument at extreme points. Applying it inside the slice proves the reverse containment. This supplies a constructive correctness proof for taking the convex hull of the collected points.

For a genuine polygon, choose an orthonormal basis of the slicing plane and reduce to two coordinates. A planar convex-hull algorithm removes intermediate collinear boundary points and orders the remaining vertices. Angular ordering around an interior centroid is another option when duplicate and collinear ray cases are explicitly settled; it is not a replacement for recognizing a point or segment slice first. A segment along a face boundary can have redundant collinear samples without acquiring extra corners. Checking which original faces support the polygon edges is useful incidence information, but does not replace the extremality proof.

## Worked example 3: a cube slice and its limiting cases

Slice the unit cube by $x+y+z=1$. Its three vertices $(1,0,0),(0,1,0),(0,0,1)$ lie on the plane. All other cube vertices have sum zero, two or three; edge processing creates no additional slice vertex. The slice is their filled equilateral triangle. Each side has length $\\sqrt2$, and the cross product of two side vectors is $(1,1,1)$, so its area is $\\sqrt3/2$. A center-based ordering is legitimate here because the slice is two-dimensional.

Changing the constant to zero leaves just the origin; changing it to a negative number makes the slice empty. The plane $z=0$ instead gives the entire bottom square face. These cases share the same valid nonzero normal concept but have different output dimensions. A routine that always constructs a cyclic polygon would attach invented edges to the singleton or fail on the empty case. For $x+y=0$ the slice is the vertical edge through the origin, giving the remaining one-dimensional possibility. None of these boundary outcomes is a numerical failure.

## Arithmetic certificates and input uncertainty

For integer point coordinates bounded in magnitude by $B$, each orientation difference coordinate is bounded by $2B$. The determinant has six signed triple products, so $|D|\\le48B^3$ is a safe bound on its absolute value, with corresponding bounds needed for intermediate arithmetic. This is a sufficient range estimate, not a claim that arbitrary integer inputs fit a particular machine type. Rational intersection coordinates can be retained as numerator/denominator data and compared by sign-aware cross multiplication.

For an explicit data-uncertainty certificate, suppose each coordinate of each nominal point changes by at most $\\varepsilon$. Let $M$ bound the magnitudes of all nominal difference coordinates. Each difference coordinate changes by at most $2\\varepsilon$. Expanding a triple product and bounding each changed factor gives
$$|D_{\\rm true}-D_{\\rm nominal}|\\le6\\big((M+2\\varepsilon)^3-M^3\\big)=E.$$
There are six triple products, which explains the factor six. If the nominal determinant is greater than $E$ or less than $-E$, its sign is fixed throughout the entire coordinate box. Otherwise this bound alone is inconclusive. It neither proves exact coplanarity nor even proves that both signs actually occur. An arithmetic-rounding enclosure would have to be added separately before this becomes a certificate for a particular computed value. Input uncertainty and arithmetic evaluation error answer different questions.

## Common errors

- **Dividing by $n\\cdot v=0$ without checking.** The intersection formula is invalid for parallel lines. Always test the denominator.
- **Using the planar orientation formula in 3D.** The expression $(B_{x}-A_{x})(C_{y}-A_{y})-(B_{y}-A_{y})(C_{x}-A_{x})$ measures projected area in the $xy$-plane, not true spatial orientation. Use the scalar triple product instead.
- **Confusing cross product magnitude with dot product.** The cross product magnitude involves $\\sin\\theta$; the dot product involves $\\cos\\theta$. They are complementary, not interchangeable.
- **Assuming the slice of a nonconvex mesh is a single polygon.** Without face-level topology, the intersection points may form multiple disjoint cycles.

## Practice exercises with solutions

### Exercise 1
Find the intersection of the line $(1,2,3)+t(0,1,1)$ with the plane $x+y+z=6$.

<details><summary>Hint 1</summary>

Start by taking the normal–direction dot product.

</details>

<details><summary>Hint 2</summary>

The starting point already has coordinate sum six.

</details>

<details><summary>Full solution</summary>

**Solution.** $n=(1,1,1)$, $c=6$, $P=(1,2,3)$, $v=(0,1,1)$. The denominator is $n\\cdot v=0+1+1=2$. The numerator is $6-(1+2+3)=0$. Thus $t=0$ and the intersection is $P=(1,2,3)$. The point lies in the plane.

</details>

### Exercise 2
Compute the scalar triple product of $u=(1,0,0)$, $v=(0,1,0)$, $w=(1,1,0)$. What does the result mean geometrically?

<details><summary>Hint 1</summary>

Compute the cross product before the final dot product.

</details>

<details><summary>Hint 2</summary>

All three input vectors have zero final coordinate.

</details>

<details><summary>Full solution</summary>

**Solution.** $v\\times w=(0,0,-1)$. Then $u\\cdot(v\\times w)=1\\cdot 0+0\\cdot 0+0\\cdot(-1)=0$. The vectors are coplanar; they all lie in the $xy$-plane.

</details>

### Exercise 3
Find the area of the parallelogram spanned by $u=(2,0,0)$ and $v=(1,1,0)$.

<details><summary>Hint 1</summary>

Only the final cross-product coordinate can survive here.

</details>

<details><summary>Hint 2</summary>

Parallelogram area is the cross-product length, not half that length.

</details>

<details><summary>Full solution</summary>

**Solution.** $u\\times v=(0,0,2)$. The magnitude is $2$, so the area is $2$.

</details>

### Exercise 4
A line is parallel to a plane. How do you distinguish the disjoint case from the contained case?

<details><summary>Hint 1</summary>

Use the denominator to identify parallelism first.

</details>

<details><summary>Hint 2</summary>

Then the starting point either satisfies the plane equation or does not.

</details>

<details><summary>Full solution</summary>

**Solution.** Compute $n\\cdot v$. If it is zero, the line is parallel. Then evaluate $c-n\\cdot P$. If this is also zero, the line lies in the plane. Otherwise, the line is parallel and disjoint.

</details>

### Exercise 5
Explain why the scalar triple product is invariant under cyclic permutation of its arguments.

<details><summary>Hint 1</summary>

Write the scalar triple product as a determinant.

</details>

<details><summary>Hint 2</summary>

A cyclic permutation of three columns consists of two transpositions.

</details>

<details><summary>Full solution</summary>

**Solution.** The scalar triple product $u\\cdot(v\\times w)$ equals the determinant of the matrix with columns $u,v,w$. The determinant is invariant under cyclic permutation of columns and changes sign under transposition. Hence $u\\cdot(v\\times w)=v\\cdot(w\\times u)=w\\cdot(u\\times v)$.

</details>

### Exercise 6

Find the line where $x=1$ and $y+z=2$ meet. Explain why reversing either normal does not change the set.

<details><summary>Hint 1</summary>

Use normals $(1,0,0)$ and $(0,1,1)$.

</details>

<details><summary>Hint 2</summary>

The cross product gives direction $(0,-1,1)$; choose one convenient point satisfying both equations.

</details>

<details><summary>Full solution</summary>

Their normals are independent and their cross product is $(0,-1,1)$. The line is $(1,1,1)+t(0,-1,1)$. Substitution proves every listed point satisfies both equations. Conversely the equations force $x=1$ and $z=2-y$, so every common point has this form. Reversing a normal together with its plane constant multiplies one equation by minus one, preserving its solution set. It may reverse the chosen line parameter, which does not change the line.

</details>

### Exercise 7

Intersect the segment $U=(-1,1,0)$, $V=(3,1,0)$ with the filled triangle $A=(0,0,0)$, $B=(2,0,0)$, $C=(0,2,0)$.

<details><summary>Hint 1</summary>

The whole segment is in the triangle plane; use planar inequalities.

</details>

<details><summary>Hint 2</summary>

At height $y=1$, triangle membership is $0\\le x\\le1$.

</details>

<details><summary>Full solution</summary>

The plane denominator and starting plane residual both vanish, so the isolated-point formula is unavailable. Substitution gives $X(t)=(-1+4t,1,0)$, with $0\\le t\\le1$. Triangle membership is $x\\ge0$, $y\\ge0$, $x+y\\le2$. Here these reduce to $t\\ge1/4$ and $t\\le1/2$. The answer is the full closed segment from $(0,1,0)$ to $(1,1,0)$, not just its endpoints. The clipping inequalities prove that every intermediate point belongs and no other segment point does.

</details>

### Exercise 8

For the same triangle, show that the three edge inequalities can accept $(1/2,1/2,100)$. What additional condition repairs the predicate?

<details><summary>Hint 1</summary>

The normal is vertical, so the normal dot each cross product discards the point's vertical displacement.

</details>

<details><summary>Hint 2</summary>

A filled spatial triangle is contained in its own plane.

</details>

<details><summary>Full solution</summary>

The edge expressions depend only on the first two coordinates, which have barycentric coordinates $(1/2,1/4,1/4)$. All three expressions are therefore positive, even though the point is one hundred units off the plane. Require $n\\cdot(P-A)=0$ as well. For points satisfying that equality, uniqueness in the independent planar basis proves the equivalence between the edge inequalities and nonnegative barycentric coordinates. Thus the repaired conditions are both necessary and sufficient.

</details>

### Exercise 9

The triangle with vertices $(0,0,0),(1,0,0),(0,1,0)$ is tested against the point $(0,0,\\delta)$, with $\\delta>0$. Each coordinate has uncertainty at most $\\varepsilon$. Give a sufficient condition for a fixed positive orientation, and explain why a failed bound does not prove coplanarity.

<details><summary>Hint 1</summary>

The nominal determinant is $\\delta$ and one may take $M=\\max(1,\\delta)$.

</details>

<details><summary>Hint 2</summary>

Use the chapter's absolute perturbation bound, not a comparison of the determinant with an unrelated fixed tolerance.

</details>

<details><summary>Full solution</summary>

A sufficient condition is $\\delta>6((M+2\\varepsilon)^3-M^3)$ with $M=\\max(1,\\delta)$. The proved error bound then keeps every admissible determinant strictly positive. If that inequality fails, the bound may simply be too coarse; it does not identify an actual zero determinant or a realization of either sign. When $\\delta>\\varepsilon$, moving this point alone within its box cannot reach the nominal base plane, although uncertainty in the other points must still be considered. A valid uncertain-data answer distinguishes a sufficient certificate from a complete characterization of all realizations.

</details>

### Exercise 10

A polyhedron routine is given only a list of mesh vertex coordinates, with no edges or faces. Explain why the convex slicing proof does not justify returning every plane-crossing pairwise chord as a mesh slice. Give a concrete ambiguity.

<details><summary>Hint 1</summary>

The proof assumes actual polyhedron edges and convexity, not arbitrary pairs of sample points.

</details>

<details><summary>Hint 2</summary>

The eight vertices of a cube may be used to describe its boundary, an edge graph, or a different collection of triangles.

</details>

<details><summary>Full solution</summary>

Vertex positions alone do not specify which segments or faces belong to the object. The same eight cube corners may describe the closed solid cube or just its twelve edges. The plane $z=1/2$ cuts the solid in a filled square and the edge graph in four isolated points. Even those two objects already require different output sets despite identical vertices. Arbitrary pairwise chords add diagonals that need not be edges or belong to a nonconvex mesh at all. For a declared convex solid one can first construct its convex hull and valid incidence, then apply the proof. For a general mesh the given face topology and its intersection rules are indispensable.

</details>

## Transferred capstone: Plane and line in 3D {#computational-legacy-capstone-8}

Find the intersection of the line $(1,0,0)+t(1,1,1)$ with the plane $x+y+z=3$. Is the line parallel to the plane?

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Take the dot product of the line direction with the plane normal.

</details>

<details><summary>Hint 2</summary>

A nonzero denominator gives a unique line parameter before any interval filtering.

</details>

<details><summary>Full solution</summary>

**Solution.** $n=(1,1,1)$, $c=3$, $P=(1,0,0)$, $v=(1,1,1)$. The denominator is $n\\cdot v=3\\neq 0$, so the line is not parallel. The parameter is $t=(3-(1+0+0))/3=2/3$. The intersection is $(1,0,0)+(2/3)(1,1,1)=(5/3,2/3,2/3)$.

</details>

## Looking backward and forward

This chapter extended lines and orientation to three dimensions, introducing planes, cross products, scalar triple products, and plane-line intersection. The slicing proof applies to a bounded convex polyhedron with known incidence; a general mesh needs its actual face topology. Determinant signs certify sides, while a separate interval calculation distinguishes point crossings, overlaps and uncertain inputs.

The next chapter, **Convex Hull as an Orientation Algorithm**, returns to the plane and shows how the orientation predicate, combined with a sorting step, constructs the convex hull of a point set in $O(n\\log n)$ time. The same orientation sign that classifies left and right turns becomes the filter that discards interior points.
`;export{e as default};