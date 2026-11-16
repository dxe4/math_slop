
# Polygon Triangulation and the Art Gallery Theorem

A polygon can look almost convex while hiding a region from a proposed guard. Triangulation turns the question into a finite collection of convex pieces, and a coloring argument then chooses guards without solving a separate visibility problem for every point. This chapter proves the existence and size of a triangulation, a constructive quadratic-time procedure, and the vertex-guard upper bound. It also distinguishes that bound from finding a minimum guard set.

**L3 preparation.** Use [Orientation](orientation-is-the-central-planar-predicate.md), [Segment Intersection](segment-intersection-needs-boundary-cases.md) and [Convex Hulls](convex-hull-as-an-orientation-algorithm.md). Exact coordinates and predicates are assumed for the correctness and operation counts. A polygon here is one simple closed polygonal boundary, with distinct vertices and no crossings or nonadjacent contacts, together with its filled bounded region. There are no holes. Boundary visibility is allowed: a guard at $G$ sees $P$ when the whole closed segment $GP$ belongs to that filled region.

## The geometric input and a precise diagonal

We use polygonal Jordan separation as a stated topological input: a simple closed polygonal curve separates the plane into one bounded and one unbounded component, has that curve as their common boundary, and locally has one interior side along each open edge. This statement is independent of the triangulation argument below; a proof of general Jordan separation is not supplied here. All subsequent diagonal and combinatorial conclusions are derived with that input explicit.

A diagonal joins two nonadjacent polygon vertices, has its open segment entirely inside the polygon, and has no other boundary point on that open segment. Such a diagonal splits the boundary into its two vertex-to-vertex arcs. Each arc together with the diagonal is a simple polygonal curve. Jordan separation and the local interior sides show that their filled regions have disjoint interiors and union the original polygon: on crossing the diagonal one switches between the two pieces, whereas outside the original boundary one belongs to neither. Thus a valid diagonal is a certified split, rather than merely a line segment between vertices.

A triangulation is a finite decomposition into nondegenerate closed triangles whose union is the polygon and whose pairwise intersections are shared edges, shared vertices or empty. No added interior vertices are used. Several collinear boundary vertices are permitted, but zero-length boundary edges and retracing an edge are excluded. To simplify diagonal finding, first remove a vertex lying strictly between its two boundary neighbors on a straight edge. This changes neither the filled set nor its simplicity. Record the removed points and their order so they can be reinserted later; dropping their learner or geometric identities is unnecessary.

After these removals, a nondegenerate simple polygon has a strictly convex vertex. For an existence proof choose a direction for which one vertex is the unique minimum of the corresponding linear coordinate. Such a direction exists because only finitely many directions make a pair tie. The polygon lies on the higher-coordinate side of its supporting line, so its interior angle at that vertex is strictly less than a straight angle. The adjacent edges cannot overlap, and after the removals they are not collinear. In a counterclockwise boundary traversal this is a positive orientation turn. An algorithm can simply scan for such a turn; the generic direction establishes existence and need not be chosen numerically.

## The diagonal lemma, including the hidden-vertex case

Let $v$ be a strictly convex vertex and let $a,b$ be its boundary neighbors. The small portion of the triangle $avb$ near $v$ lies inside the polygon, since it lies between the two incident boundary edges on their interior side. If the closed triangle contains no other polygon vertex, then $ab$ is a valid diagonal, unless the whole polygon is already the triangle.

Here is why an edge cannot secretly invalidate this conclusion. No other polygon edge can cross either incident side $av$ or $vb$, by simplicity. An edge with no endpoint in the triangle cannot enter and leave it through its base $ab$ twice, because a straight segment intersects the base line at most once unless it lies in that line. The collinear possibility would put an endpoint on the base or overlap it, contradicting the assumed absence of other triangle vertices or simplicity. Thus no boundary edge enters the open triangle. Starting near $v$ and moving within its connected interior therefore stays in the polygon. The same argument and the absence of extra base contacts put the open base inside. The two triangle sides are already boundary edges, so $a,b$ are nonadjacent unless there are only three vertices.

If other vertices do lie in the closed triangle, choose one, $w$, whose perpendicular height above the line $ab$ toward $v$ is greatest. Exclude $a,v,b$ from this choice. No other vertex can lie on the open incident edges, because a nonadjacent contact is forbidden. The chosen $w$ therefore differs from both neighbors and is eligible for a diagonal from $v$.

Draw the line through $w$ parallel to $ab$. The small cap between that line and $v$, bounded by portions of $va$ and $vb$, has no other polygon vertex in its open interior, by maximality of the height. No boundary edge can cross its two incident-side boundaries. An edge with neither endpoint in the cap cannot pass through its interior by entering and leaving only through the cap base: straightness again permits at most one crossing of that line. Consequently no boundary edge crosses the open segment $vw$. Ties at the height of $w$ lie on the cap base and do not create an interior crossing. The segment starts in the polygon's interior sector at $v$, so its open part stays inside until it reaches $w$. It is a valid diagonal.

This cap argument is the reason to select the maximal-height vertex. Choosing an arbitrary visible-looking vertex inside the triangle has no such certificate. It also shows that triangle vertices on the base can be handled without declaring a zero orientation to have a small positive sign. All containment and height comparisons can use determinants with the same base, avoiding normalized normals or square roots.

We have proved that every simple polygon with more than three vertices and no redundant collinear boundary vertices has a diagonal. Splitting on that diagonal and applying the same argument to the two smaller polygons produces a triangulation by induction. A removed collinear boundary vertex can then be reinserted: it lies in the interior of one boundary edge of one triangle; join it to that triangle's opposite vertex and replace the triangle by the two resulting nondegenerate triangles. Repeating in recorded order restores all original vertices without changing the filled polygon.

## Triangle counts and a constructive cost bound

A triangulation of an $n$-vertex simple polygon has $n-2$ triangles and $n-3$ interior diagonals. For a triangle the claims hold directly. A splitting diagonal creates polygons with $n_1,n_2$ vertices, where $n_1+n_2=n+2$, because both endpoints occur in both pieces. Induction gives $(n_1-2)+(n_2-2)=n-2$ triangles and $(n_1-3)+(n_2-3)+1=n-3$ diagonals. Reinserting a collinear boundary vertex increases the vertex and triangle counts by one and the interior-diagonal count by one, preserving the formulas. The counts refer to positive-area triangles, not zero-area fans through straight boundary points.

For a constructive algorithm, scan the current counterclockwise boundary for a convex vertex. Inspect every other vertex for membership in its closed neighbor triangle, retaining a maximal-height candidate if needed. The diagonal lemma proves the resulting split is valid. Recur until triangles remain, and finally restore recorded collinear vertices. Each split uses a linear number of exact orientation and coordinate operations in that subpolygon. There are at most $n-3$ splits and no subpolygon has more than $n$ vertices, giving the simple upper bound $O(n^2)$.

This is a correctness-first quadratic algorithm, not a claim about an optimal implementation of polygon triangulation. Explicitly copying every recursive boundary list can use quadratic total storage; recording the decomposition tree and its incidences uses linear output size. If a faster method uses monotone partitioning or a more elaborate data structure, its additional invariants and costs need separate proofs. Nor does the operation count include the bit cost of exact rational comparisons. The polygon's simplicity is part of this chapter's input contract; diagnosing an invalid self-intersecting boundary is a different task.

## Worked example 1: a concave pentagon

Let the counterclockwise vertices be $A=(0,0)$, $B=(4,0)$, $C=(4,4)$, $D=(2,2)$, $E=(0,4)$. The inward notch is at $D$: the turn from $CD$ to $DE$ has orientation $-8$. The apparent fan diagonal $AC$ is invalid because its open segment passes through the nonadjacent vertex $D$. This is a boundary contact, even though the segment does not visibly leave the filled region.

The two valid diagonals $AD$ and $BD$ produce triangles $ABD$, $BCD$, $ADE$. Each has area four by its determinant, so the polygon area is twelve. There are three triangles and two diagonals, agreeing with the formulas for five vertices. Give $A$ color red, $B$ blue and $D$ green; then $C$ must be red and $E$ blue. The green class has one vertex. Since $D$ belongs to every triangle, it sees every point of the polygon by a segment lying in one of those convex triangles. The guard lies at a reflex boundary vertex, which is permitted by the visibility convention.

## The dual tree and three colors

Construct a graph with one node for each triangle and one edge for each shared interior diagonal. This dual graph is a tree. The inductive splitting construction proves it: each diagonal separates two triangulated subpolygons whose duals are trees, and exactly one dual edge joins those two trees. Joining two disjoint trees by one edge is connected and creates no cycle. Reinserting a collinear boundary vertex replaces one triangle node by two adjacent nodes; each former adjacency attaches to the appropriate replacement. The graph remains connected, and its node and edge counts both increase by one, so it is still a tree.

For more than one triangle the tree has a leaf. Its triangle has only one interior edge and two original boundary edges, so the vertex between those boundary edges is an ear tip. Removing the ear triangle removes that vertex and its two boundary edges, replacing them by the interior diagonal. This yields the triangulated polygon with one fewer vertex. This ear existence is a consequence of triangulation; it was not assumed in the preceding diagonal lemma, so the proof is not circular.

Color the vertices of one final triangle with three different colors. Reverse the successive ear removals. Each restored ear meets the current polygon along an edge whose endpoints already have different colors; assign its restored tip the third color. Existing triangle colors remain unchanged, and the restored triangle has all three. This inductively yields a proper coloring of the triangulation graph: the endpoints of every triangle edge differ. The method does not assert that every planar graph is three-colorable; the special triangulated simple-polygon structure is essential.

The three color classes partition the $n$ polygon vertices. At least one has size at most $\lfloor n/3\rfloor$, because if all were larger their total would exceed $n$. Choose that whole class as guards. Every triangle has one vertex of each color, so it has a chosen guard. Convexity puts the segment from that guard to every point of the triangle inside the triangle and hence inside the polygon. Since the triangles cover the polygon, these guards see every polygon point, including points on shared edges.

This proves the vertex-guard upper bound commonly called the art gallery theorem: every simple $n$-vertex polygon without holes can be guarded from at most $\lfloor n/3\rfloor$ of its vertices under closed visibility. We prove this sufficiency statement here. Sharp lower-bound constructions for every admissible size, polygons with holes, mobile guards and minimum-cardinality guard algorithms are separate results, not consequences of the coloring proof.

## Worked example 2: the bound need not be the minimum

Consider the L-shaped polygon $A=(0,0)$, $B=(3,0)$, $C=(3,1)$, $D=(1,1)$, $E=(1,3)$, $F=(0,3)$. A triangulation consists of $ABD$, $BCD$, $ADE$, $AEF$, sharing diagonals $BD$, $AD$, $AE$. Its dual is a path. Coloring $A$ red, $B$ blue and $D$ green forces $C$ red, $E$ blue and $F$ green. Each color class has two vertices, so the construction returns two guards, in agreement with the upper bound for six vertices.

Yet the single guard at $A$ sees the whole polygon. The region is the union of the horizontal rectangle $[0,3]\times[0,1]$ and the vertical rectangle $[0,1]\times[0,3]$. A segment from the origin to a point in either rectangle stays in that same rectangle by coordinate scaling. Thus one guard suffices. A valid universal construction need not optimize each input, and a larger chosen color class does not prove a second guard is necessary.

## Worked example 3: retaining a straight boundary vertex

Take $A=(0,0)$, $B=(2,0)$, $C=(4,0)$, $D=(4,2)$, $E=(0,2)$. The straight vertex $B$ may be removed temporarily. Triangulate the resulting rectangle by $AD$, obtaining $ACD$ and $ADE$. Reinserting $B$ splits $ACD$ into $ABD$ and $BCD$. All three resulting triangles have positive area, and their union is still the rectangle. The original five-vertex counts are three triangles and two diagonals.

The refined triangulation needs its own consistent coloring: choose $A$ red, $B$ blue, $D$ green, then $C$ red and $E$ blue. The one green guard at $D$ sees the whole convex rectangle. Keeping the previous coloring blindly while inserting a vertex would not generally preserve proper coloring. Reinsertion preserves geometry; the subsequent coloring proof applies to the actual final triangulation and its actual vertex count.

## Exercises with staged hints and full solutions

### Exercise 1

A simple polygon has eleven vertices. How many triangles and interior diagonals does a triangulation using no new vertices have?

<details><summary>Hint 1</summary>

Use both induction formulas, not an area estimate.

</details>

<details><summary>Hint 2</summary>

The triangle and diagonal counts differ by one.

</details>

<details><summary>Full solution</summary>

There are nine triangles and eight interior diagonals. Each new split increases the number of pieces by one, so eight diagonals give nine triangles. The formulas depend on simplicity, no holes and no added vertices; a self-crossing eleven-point list does not acquire these counts merely by having eleven entries.

</details>

### Exercise 2

Why can the diagonal lemma not use an arbitrary vertex inside the neighbor triangle in place of a maximal-height one?

<details><summary>Hint 1</summary>

Identify exactly which empty region the proof uses.

</details>

<details><summary>Hint 2</summary>

A different edge may cross the proposed segment if a vertex remains above the selected base-parallel line.

</details>

<details><summary>Full solution</summary>

The proof requires a cap with no polygon vertex in its interior. Maximal height guarantees that condition. An arbitrary selected vertex may leave other vertices in the cap; edges incident to them can cross the proposed diagonal without crossing the two original incident sides. The straight-edge argument then has an endpoint inside the cap and no longer excludes such a crossing. This diagnoses the failed proof step; it does not claim every arbitrary choice necessarily fails.

</details>

### Exercise 3

In Worked example 1, explain why $AC$ is not a valid diagonal even if both of its endpoints are polygon vertices and its whole segment lies in the filled polygon.

<details><summary>Hint 1</summary>

The diagonal definition includes a condition on its open segment.

</details>

<details><summary>Hint 2</summary>

Substitute the coordinates of $D$ into the parameterization of $AC$.

</details>

<details><summary>Full solution</summary>

The point $D=(2,2)$ equals $A+(C-A)/2$. It is a nonadjacent boundary vertex in the open segment $AC$. A valid splitting diagonal has no such boundary contact and has its open segment in the interior. Thus the segment fails that contract. The smaller segment $AD$ is valid and appears in the actual triangulation; treating $AC$ as one unsplit diagonal would conceal the incidence at $D$.

</details>

### Exercise 4

Prove directly that a tree with at least two nodes has a leaf. Explain its role in the coloring argument.

<details><summary>Hint 1</summary>

Take a longest simple path in the finite tree.

</details>

<details><summary>Hint 2</summary>

An additional neighbor of an endpoint either extends the path or creates a cycle.

</details>

<details><summary>Full solution</summary>

At an endpoint of a longest path, a neighbor outside the path would extend it. A neighbor on the path other than the next node would create a cycle. Therefore the endpoint has only its one path neighbor and is a leaf. Applied to the triangulation dual, it gives a triangle sharing exactly one interior diagonal. Its tip can be removed and later restored with the third color, establishing the inductive coloring step.

</details>

### Exercise 5

A triangulated polygon has color-class sizes four, five and five. How many vertex guards does the coloring proof choose? Does it show four are necessary?

<details><summary>Hint 1</summary>

Choose the entire smallest class.

</details>

<details><summary>Hint 2</summary>

Separate a sufficient construction from an impossibility proof for smaller sets.

</details>

<details><summary>Full solution</summary>

It chooses four guards, one at each vertex in the smallest class. Every triangle contains a vertex of that class, so sufficiency follows. It does not prove that three guards cannot see the polygon; that would require a lower-bound visibility argument for this particular polygon. Four agrees with the universal bound for fourteen vertices, but equality in that numerical bound is not evidence of optimality for this input.

</details>

### Exercise 6

Explain why a single guard sees every point of a convex polygon, even when the coloring construction returns more than one.

<details><summary>Hint 1</summary>

Use the defining segment property of convexity.

</details>

<details><summary>Hint 2</summary>

The guard may be any one vertex under closed visibility.

</details>

<details><summary>Full solution</summary>

For a guard vertex $G$ and any point $P$ of the filled convex polygon, convexity puts the whole segment $GP$ inside that polygon. Thus $G$ sees $P$. The coloring algorithm is designed for all simple polygons, including nonconvex ones, and need not exploit additional convexity to minimize its output. Its correctness and a one-guard convexity proof are compatible sufficient arguments with different strengths.

</details>

### Exercise 7

One triangulation triangle has a straight boundary vertex inserted on one of its boundary edges. Prove that the replacement triangles are nondegenerate and that their interiors do not overlap.

<details><summary>Hint 1</summary>

The inserted point is strictly between the edge endpoints.

</details>

<details><summary>Hint 2</summary>

Join it to the opposite vertex, which is off the edge line.

</details>

<details><summary>Full solution</summary>

Both new bases have positive length on the old edge line and share the old triangle's positive perpendicular height. Each new triangle therefore has positive area. The joining segment separates the old triangle into the two side regions, whose interiors are disjoint and whose union is the old triangle. Their shared segment is the only new interior edge. This proves geometric validity and the increment of one in both triangle and diagonal counts.

</details>

### Exercise 8

Why does a triangulation with a hole not automatically have the dual-tree property used here?

<details><summary>Hint 1</summary>

The proof of a tree used recursive splitting of a single simple polygon by separating diagonals.

</details>

<details><summary>Hint 2</summary>

Around a hole, triangle adjacency can return to its starting point without crossing an outside boundary.

</details>

<details><summary>Full solution</summary>

The input is no longer one filled Jordan polygon. Some connections between boundary components do not split the region into two disjoint polygon interiors, so the tree-joining induction does not apply. Triangles surrounding a hole can form a cycle in the adjacency graph. The leaf-removal and three-color conclusions therefore require new arguments and may have different statements. Applying the no-hole vertex bound without those arguments would omit a material hypothesis.

</details>

### Exercise 9

Give a rigorous reason the diagonal algorithm has a quadratic upper bound despite branching recursion.

<details><summary>Hint 1</summary>

Count final triangles and splitting events.

</details>

<details><summary>Hint 2</summary>

Bound each event's local scan by the original number of vertices.

</details>

<details><summary>Full solution</summary>

There are at most $n-3$ splitting events, because each increases the number of pieces by one and the final triangulation has $n-2$ triangles. Every event scans at most $n$ current vertices and uses a fixed number of exact predicates per vertex. Hence the sum is at most a constant times $n(n-3)$, plus preprocessing and reinsertion costs of at most quadratic order. This bound does not require that the recursive pieces have equal sizes or that the recursion depth be logarithmic.

</details>

### Exercise 10

An approximate orientation evaluation at a proposed diagonal endpoint is unresolved. May the routine certify the diagonal by treating that value as zero because a drawing appears harmless?

<details><summary>Hint 1</summary>

The proof distinguishes a true boundary contact from an interior segment.

</details>

<details><summary>Hint 2</summary>

Refining arithmetic and improving uncertain input data are different operations.

</details>

<details><summary>Full solution</summary>

No. The diagonal lemma requires exact containment and no forbidden boundary contact. An unresolved sign does not prove either condition. If the coordinates are exact but arithmetic evaluation is insufficient, a sound exact or certified refinement can settle it. If the coordinates themselves are uncertain, different realizations may have different diagonal validity, and further measurement or an explicitly conditional result is needed. A drawing and an arbitrary tolerance supply neither missing certificate.

</details>

## What the argument establishes

A simple polygon without holes admits a triangulation with its original vertices. Exact diagonal construction gives a quadratic operation bound, and the dual tree produces a three-coloring and the stated vertex-guard upper bound. Minimum guard sets, self-crossing inputs, holes and numerical implementations require their own contracts. The next chapter uses a sweep order to organize intersections and arrangements, where event ties and incidence become central.

## Sources and mathematical provenance

The diagonal and coloring arguments above are original exposition of classical results, using polygonal Jordan separation as the explicit imported topological input. Topic placement was compared with the [de Berg et al. third-edition author contents](https://ics-websites.science.uu.nl/geobook/toc.html) and [O’Rourke’s second-edition author description](https://www.science.smith.edu/~jorourke/books/compgeom.html), which include polygon triangulation and art-gallery material. Their implementations and full proof texts were not compared. No claim of a faster triangulation algorithm or a sharp lower-bound construction is imported from a table of contents.
