var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: voronoi-delaunay
title: "Voronoi Diagrams and Delaunay Triangulation"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Voronoi Diagrams and Delaunay Triangulation

A nearest-site query partitions the plane by distance, while a triangulation joins sites by straight edges. The Voronoi and Delaunay constructions link these two descriptions. Their relationship is strongest when degeneracies are excluded explicitly, and it becomes more informative when cocircular examples show exactly what changes.

**L3 scope.** Sites are a finite nonempty set of distinct points in the Euclidean plane. Use [Projection and Distance](projection-distance-and-closest-points.md), [Spatial Predicates](three-dimensional-predicates.md), [Convex Hulls](convex-hull-as-an-orientation-algorithm.md) and [Arrangements](sweep-line-arrangements.md). The cell construction below works for arbitrary distinct sites. The triangulation and strict duality theorems assume at least three sites, no three collinear and no four cocircular. Exact predicates are used throughout. We prove conservative finite algorithms rather than claiming a fast implementation of Fortune's sweep or randomized insertion.

## Cells are intersections of half-planes

For a site $p$, its closed Voronoi cell is
$$V_p=\\{x:\\lVert x-p\\rVert\\le\\lVert x-q\\rVert\\text{ for every site }q\\}.$$
Squaring and canceling $\\lVert x\\rVert^2$ gives the equivalent linear inequalities
$$2(q-p)\\cdot x\\le\\lVert q\\rVert^2-\\lVert p\\rVert^2.$$
Thus every cell is a closed convex intersection of finitely many half-planes. Distinct sites give nonzero comparison normals. The site itself lies strictly inside every comparison half-plane, so a small disk about it belongs to its cell: take a radius smaller than half the minimum distance to another site. No site cell is empty or merely a line. With one site, the cell is the whole plane.

Every point belongs to at least one cell because a finite list of distances has a minimum. A point belongs to two cells exactly when the corresponding distances tie for that minimum. The interiors of distinct cells are disjoint, since a strict nearest site excludes any other. The entire bisector line is not necessarily a shared cell edge: other sites may be closer on most or all of it. A Voronoi edge is a positive-length one-dimensional part of the common cell boundary, possibly unbounded; a single shared point is a vertex contact rather than an edge.

For the noncollinear general-position setting, a cell is unbounded exactly when its site is a convex-hull vertex. At a hull vertex choose a supporting direction $u$ with $u\\cdot(q-p)<0$ for every other site. Such a direction lies strictly between the two adjacent outward support normals. For $x=p+tu$, $t\\ge0$, the squared-distance difference is
$$\\lVert x-q\\rVert^2-\\lVert x-p\\rVert^2=\\lVert q-p\\rVert^2-2t\\,u\\cdot(q-p)>0.$$
The whole ray belongs to the cell, proving unboundedness.

Conversely, if $p$ is an interior site, choose $r>0$ with the disk of radius $r$ about $p$ contained in the site hull. For every unit direction $u$, express $p+ru$ as a convex combination of sites. At least one site $q$ then has $u\\cdot(q-p)\\ge r$. If $x=p+tu$ is in the cell, its comparison against that site implies $2tr\\le\\lVert q-p\\rVert^2$. A common finite bound on all site distances bounds $t$ in every direction. Hence the cell is bounded. No three collinear sites ensures that a site not on a hull vertex is interior; collinear boundary sites require a more general support-face statement.

## A direct finite cell algorithm

One exact output representation is simply the full inequality list for each cell. Writing all lists costs $O(n^2)$ arithmetic operations and storage. This representation includes unbounded cells faithfully and permits point membership by checking all inequalities. It is not yet a minimal edge list or a fast point-location structure.

For a bounded display window, begin with a fixed rectangle and clip it successively by the comparison half-planes. At a clipping step retain vertices on the kept side and create an exact line–edge intersection when an edge crosses the boundary. A boundary edge is retained once, and a zero denominator is resolved as a parallel contained or disjoint case. Convexity proves correctness: intersecting a convex polygon with one half-plane keeps exactly its inside boundary portions and joins the two crossing points by the new boundary segment. If the intersection loses dimension, represent it as a point, segment or empty set rather than inventing a polygon cycle.

After $j$ cuts a nondegenerate clipped polygon has at most $j+4$ vertices, because one half-plane can add at most one net edge. Scanning the current vertices for every cut costs $O(n^2)$ per site and $O(n^3)$ for all cells. Lower-dimensional outputs are no more expensive. Window clipping describes $V_p$ intersected with that rectangle; it does not turn an unbounded mathematical cell into a bounded one. A plot frame is part of the requested output, not part of the metric definition.

## Lifting distance to a supporting plane

Lift a site $p=(p_x,p_y)$ to $\\widehat p=(p_x,p_y,\\lVert p\\rVert^2)$ in three dimensions. A circle with center $c$ and radius $\\rho$ corresponds to the plane
$$z=2c\\cdot x+\\rho^2-\\lVert c\\rVert^2.$$
The vertical difference at a lifted site is exactly $\\lVert p-c\\rVert^2-\\rho^2$. Thus a circle through three noncollinear sites has no site inside it precisely when its plane supports every lifted site from below. Under no four cocircular sites, no additional lifted point lies on that plane.

This converts the empty-circle rule into a lower-hull condition. To prove that it really gives a triangulation, fix any point $x$ in the planar site hull. Among convex coefficients representing it, minimize the height
$$h(x)=\\min\\left\\{\\sum_i\\lambda_i\\lVert p_i\\rVert^2:\\sum_i\\lambda_i=1,\\ \\sum_i\\lambda_ip_i=x,\\ \\lambda_i\\ge0\\right\\}.$$
The feasible coefficient set is nonempty and compact, so a minimum exists. A minimizing representation can be chosen with at most three positive coefficients. If more than three are positive, the vectors $(1,p_{ix},p_{iy})$ are linearly dependent, giving a nonzero coefficient perturbation that preserves the three constraints. Both sufficiently small signs of this perturbation remain feasible. At a minimum its height derivative must vanish, since otherwise one sign lowers the height. Move until at least one coefficient first becomes zero, preserving the height, and repeat. Finitely many eliminations leave at most three.

For a point not lying on any line through a pair of sites, exactly three positive coefficients remain. Their sites form a nondegenerate triangle. The plane through their lifts supports all lifted sites from below: if another lift lay below it, express its planar site in the same three-site affine basis. Adding a small positive coefficient at that site and subtracting its affine coefficients from the existing positive weights preserves feasibility and lowers height, a contradiction. Positivity of the original three weights allows this small perturbation even when some affine coefficients have negative signs.

The supporting triples therefore cover every such generic point of the hull by their projected triangles. There are finitely many triples, so their union is closed. The generic points are dense in the hull's two-dimensional region; taking limits covers its boundary and the finitely many excluded lines too. Two projected supporting triangles cannot overlap in their interiors: over an open overlap each supporting plane must give the same minimum height, so the planes coincide. Distinct triples on one plane would give four cocircular sites, excluded by hypothesis. Their intersections are consequently whole common edges, common vertices or empty. An apparent crossing of two boundary edges without a shared vertex would also force overlapping triangle interiors locally. We have obtained a triangulation of the site hull with every triangle's open circumdisk empty. This is the Delaunay triangulation in the stated general position.

Every site occurs as a vertex of this triangulation. The tangent plane $z=2p\\cdot x-\\lVert p\\rVert^2$ touches its own lift and is strictly below every other lift by the positive squared site distance. Thus no other sites' convex combination can represent that lifted point at the same height. The lower surface must retain it, even when its planar site lies inside the planar convex hull.

## Duality, with edge and vertex contacts distinguished

An empty-circle triangle's circumcenter belongs to all three site cells. No fourth cell contains it under the cocircularity exclusion. These are Voronoi vertices. Conversely, three nearest-site ties at one point give an empty circle through those sites, hence a lower supporting triangle. General position makes these correspondences unambiguous.

An interior Delaunay edge has two adjacent triangles with different circumcenters. Every point on the segment between those centers remains equally distant from the edge's two sites and no closer to another: squared-distance comparisons are affine in the center, so the inequalities persist along the segment. The centers differ because otherwise four sites would lie on one circle. This gives a positive-length shared Voronoi edge. For a hull edge there is one adjacent triangle; its circumcenter continues along the outward perpendicular ray, and the hull support inequalities keep all other sites no closer along that ray.

Conversely, suppose two cells share a positive-length boundary piece. Except at finitely many triple ties, a point on it has just those two nearest sites. Its lifted supporting plane touches just those two lifts. A midpoint of the planar site pair therefore lies on the minimum-height surface, represented by those lifts. Any supporting triangle containing that midpoint can use only sites on the same touching plane: a positive weight at a strictly higher lift would contradict equality of height. Thus the pair forms an edge of the lower triangulation. This proves the claimed edge duality without mistaking an isolated multiple-cell contact for an edge.

No four cocircular sites also makes the lower supporting triangles unique, hence the Delaunay triangulation unique. The geometry, rather than an insertion order, decides the result. Dropping that assumption may leave a polygonal lower face with several valid triangulations and zero-length dual edges after an arbitrary diagonal choice.

## Exact predicates and an explicit construction cost

For a counterclockwise triple $a,b,c$, define the four-row determinant with rows $(x,y,x^2+y^2,1)$ at $a,b,c,p$. Subtract the circumcircle plane expression from its third column. The first three resulting entries in that column vanish, and the last equals $\\lVert p-c_0\\rVert^2-\\rho^2$, where $c_0$ is the circumcenter. Expanding in that column gives
$$\\operatorname{incircle}(a,b,c,p)=\\operatorname{orient}(a,b,c)\\big(\\rho^2-\\lVert p-c_0\\rVert^2\\big).$$
Thus a positive value means strictly inside for counterclockwise input, a negative value means outside and zero means cocircular. Reversing the triple orientation reverses the determinant sign. The predicate is polynomial, so rational coordinates permit exact sign evaluation without taking a square root or rounding a center first.

A deliberately simple construction enumerates every site triple, discards collinear ones, and retains those for which all other sites are outside the circumcircle. Under the stated general position, the preceding lower-surface proof says these are exactly the Delaunay triangles. Each triple requires at most $n$ incircle signs, giving $O(n^4)$ operations. Build shared edges and adjacency from the accepted triples; their circumcenters and hull-edge rays then give the Voronoi graph. This is a proved finite algorithm, not the optimal planar bound.

If the hull has $b$ boundary vertices, the triangulation has $T=2n-b-2$ triangles and $E=3n-b-3$ edges. Indeed Euler's formula gives $n-E+T=1$, and counting triangle-edge incidences gives $3T=2E-b$. Solving yields both expressions. Thus the accepted output is linear-sized even though the conservative enumeration examines many rejected candidates. A sharper construction would require additional algorithmic arguments; output size alone does not supply its running time.

## Worked example 1: three sites and an unbounded diagram

For sites $A=(0,0)$, $B=(4,0)$, $C=(0,4)$, the cells are
$$V_A=\\{x\\le2,\\ y\\le2\\},\\quad V_B=\\{x\\ge2,\\ x\\ge y\\},\\quad V_C=\\{y\\ge2,\\ y\\ge x\\}.$$
Their common vertex is $(2,2)$, the triangle circumcenter, with squared radius eight. All three cells are unbounded because all sites are hull vertices. Their shared boundaries are rays, not the entire three bisector lines. The query $(3,1)$ belongs uniquely to the second cell: its squared distances are ten, two and eighteen. The sole Delaunay triangle is the original site triangle, so its three hull edges dualize to the three Voronoi rays.

## Worked example 2: an interior site has a bounded cell

Add $P=(1,1)$ to the previous three sites. Its cell inequalities reduce to
$$x+y\\ge1,\\qquad 3x-y\\le7,\\qquad -x+3y\\le7.$$
The resulting triangle has vertices $(2,-1)$, $(-1,2)$ and $(7/2,7/2)$. They are the circumcenters of $ABP$, $ACP$ and $BCP$. The first two squared circumradii are five; the third is $25/2$. Direct distance comparison shows the unused fourth site is outside each circle, so all three are empty-circle triangles.

There are four sites and three hull vertices, hence three triangles and six Delaunay edges. The interior site has three incident edges and the bounded three-sided cell predicted above. Its cell extends outside the original site triangle near some corners; cells partition the entire plane, not merely the site hull. Boundedness does not mean containment in that hull.

## Worked example 3: a cocircular square

For $(0,0),(2,0),(2,2),(0,2)$, all four sites lie on the circle centered at $(1,1)$. The Voronoi diagram has four quadrants meeting at one vertex. Opposite cells meet only at that vertex and share no edge. Either square diagonal yields a triangulation whose triangle circumdisks are empty, so Delaunay uniqueness fails.

In lifted coordinates all four points lie on one supporting plane. Enumerating all empty triples would return four triangles with overlapping interiors, not a triangulation. A degenerate algorithm must keep that polygonal face and choose one coherent triangulation of it, or leave a nontriangular Delaunay subdivision. Its added diagonal has no positive-length Voronoi dual edge. The no-four-cocircular assumption is therefore doing real work in both the enumeration theorem and the strict edge duality.

## Exercises with hints and full solutions

### Exercise 1

Derive the cell of $(0,0)$ against the single competing site $(6,2)$.

<details><summary>Hint 1</summary>

Expand both squared distances and cancel the common quadratic terms.

</details>

<details><summary>Hint 2</summary>

The bisector normal is the site difference.

</details>

<details><summary>Full solution</summary>

The inequality is $12x+4y\\le40$, or $3x+y\\le10$. It is a closed half-plane containing the origin strictly. Equality is the perpendicular bisector, which passes through the midpoint $(3,1)$. With only these two sites every point on that line is a nearest-site tie, so it is the full shared unbounded cell boundary.

</details>

### Exercise 2

Why is a complete bisector line usually larger than the shared boundary of two Voronoi cells?

<details><summary>Hint 1</summary>

Equality of two distances does not establish that they are minimal.

</details>

<details><summary>Hint 2</summary>

Use the first worked example and a point high on the bisector of $A,B$.

</details>

<details><summary>Full solution</summary>

The line $x=2$ makes the distances to $A=(0,0)$ and $B=(4,0)$ equal. At $(2,10)$, however, $C=(0,4)$ is closer than either. Thus this point lies on their bisector but not in either cell. Their actual shared boundary is only the part satisfying the third site's comparison as well, here the ray $x=2$, $y\\le2$. All-site inequalities are necessary.

</details>

### Exercise 3

Show that a site has a neighborhood of unique nearest-site ownership when all sites are distinct.

<details><summary>Hint 1</summary>

Take half the smallest distance from that site to a competitor.

</details>

<details><summary>Hint 2</summary>

Use the triangle inequality for every competitor.

</details>

<details><summary>Full solution</summary>

Let the minimum competing distance be $d>0$ and take $\\lVert x-p\\rVert<d/2$. For any competitor $q$, the triangle inequality gives $\\lVert x-q\\rVert\\ge\\lVert p-q\\rVert-\\lVert x-p\\rVert>d/2>\\lVert x-p\\rVert$. Hence ownership is unique throughout that open disk. In the one-site case ownership is unique everywhere without needing a minimum over an empty competitor set.

</details>

### Exercise 4

A general-position set has ten sites and five hull vertices. Find its Delaunay triangle and edge counts.

<details><summary>Hint 1</summary>

Use Euler's formula with the outer face separated from the triangular faces.

</details>

<details><summary>Hint 2</summary>

Each hull edge belongs to only one triangle.

</details>

<details><summary>Full solution</summary>

The formulas give thirteen triangles and twenty-two edges. They satisfy $10-22+13=1$ and $3\\cdot13=2\\cdot22-5$. Both identities encode the hull correction. Counting every edge twice in triangle incidences would incorrectly treat the outside face as another triangle.

</details>

### Exercise 5

Explain why reversing two sites in the incircle determinant requires changing the interpretation of its sign.

<details><summary>Hint 1</summary>

Both the determinant and planar orientation are alternating.

</details>

<details><summary>Hint 2</summary>

The geometric circle does not change when its defining sites are reordered.

</details>

<details><summary>Full solution</summary>

Swapping two defining rows negates the determinant, while leaving the same three-point circle. The identity includes the orientation factor, which is also negated. Thus positive means inside only for counterclockwise defining triples; for clockwise triples negative means inside. One can normalize the orientation first or compare the two signs consistently. Ignoring that factor changes a geometric predicate merely by relabeling its inputs.

</details>

### Exercise 6

For the right triangle with vertices $(0,0),(4,0),(0,4)$, classify $(1,1)$ and $(5,5)$ relative to its circumcircle without a square root.

<details><summary>Hint 1</summary>

The center is $(2,2)$ and the squared radius is eight.

</details>

<details><summary>Hint 2</summary>

Compare squared distances with eight.

</details>

<details><summary>Full solution</summary>

The squared center distances are two and eighteen respectively. The first point is strictly inside and the second strictly outside. Since the defining triple is counterclockwise with orientation sixteen, their incircle determinant signs are positive and negative respectively. This agrees with the derived polynomial identity and requires no approximate radius.

</details>

### Exercise 7

Why does clipping a cell to a display rectangle not prove the original cell is bounded?

<details><summary>Hint 1</summary>

The displayed set is an intersection with an additional bounded set.

</details>

<details><summary>Hint 2</summary>

Even the whole plane becomes a rectangle after this clipping.

</details>

<details><summary>Full solution</summary>

The output represents $V_p$ intersected with the window. Every such intersection is bounded because the window is bounded, regardless of the original cell. For a one-site diagram the true cell is the whole plane while the display is exactly the rectangle. Boundedness must be inferred from the actual half-plane system or the proved hull criterion, with the window edges distinguished from true cell edges.

</details>

### Exercise 8

What goes wrong if all empty triples of four cocircular sites are retained as separate triangles?

<details><summary>Hint 1</summary>

Use the square example and compare triangle interiors.

</details>

<details><summary>Hint 2</summary>

The lower supporting face is a quadrilateral, not four independent facets.

</details>

<details><summary>Full solution</summary>

Each triple has the same empty circumcircle, so enumeration accepts all four. Their interiors overlap, violating the triangulation intersection contract. The lower surface has one quadrilateral face; it must be triangulated coherently by one diagonal, yielding two triangles, or kept as a nontriangular subdivision face. The general-position proof excluded precisely this common supporting-plane ambiguity.

</details>

### Exercise 9

Prove that a site cannot disappear from the lower lifted surface even when it is interior to the planar convex hull.

<details><summary>Hint 1</summary>

Use the tangent plane at its own paraboloid lift.

</details>

<details><summary>Hint 2</summary>

Every other lifted site has a strictly positive vertical gap above that plane.

</details>

<details><summary>Full solution</summary>

At site $p$ the tangent plane is $z=2p\\cdot x-\\lVert p\\rVert^2$. At another site $q$ the vertical gap is $\\lVert q-p\\rVert^2>0$. Any convex combination using other sites has a positive weighted gap, so it cannot reach the lifted point of $p$ at the same height. Its own lift is therefore an exposed lower vertex. Planar interior status and lifted lower extremality are different geometric properties.

</details>

### Exercise 10

Does linear Delaunay output size imply that the exhaustive triple-enumeration construction runs in linear time?

<details><summary>Hint 1</summary>

Count rejected candidates as well as accepted triangles.

</details>

<details><summary>Hint 2</summary>

There are cubically many candidate triples, each inspected against other sites.

</details>

<details><summary>Full solution</summary>

No. The output contains only linearly many accepted triangles, but the algorithm still enumerates cubically many triples and may perform linearly many incircle signs for each. The proved upper bound is quartic. A smaller output permits a faster algorithm but does not establish one; a new search strategy and its correctness and cost arguments would be required.

</details>

## Sources and continuation

The half-plane, lifting and duality proofs are original exposition of classical constructions. The [de Berg et al. third-edition author contents](https://ics-websites.science.uu.nl/geobook/toc.html) places Voronoi diagrams and Delaunay triangulation in separate chapters and includes faster construction methods beyond the algorithms proved here. [O’Rourke's second-edition author page](https://www.science.smith.edu/~jorourke/books/compgeom.html) likewise includes Voronoi material. This source comparison concerns topic scope; it supplies no implementation evidence. Next, range searching organizes repeated spatial queries with bounding regions and a balanced decomposition.
`;export{e as default};