
# Range Searching and k-d Trees

A geometric data structure earns its value through repeated queries. A range query asks which stored points lie in a rectangle; a nearest-neighbor query asks which point minimizes distance to a given location. A balanced spatial decomposition can answer both, but their worst-case guarantees are different. This chapter proves a planar range-reporting bound and a correct nearest-neighbor branch-and-bound method without transferring that range bound to a different problem.

**L3 preparation.** Use [Projection and Distance](projection-distance-and-closest-points.md), [Convex Hulls](convex-hull-as-an-orientation-algorithm.md), comparison sorting and balanced binary-tree terminology. The main construction assumes a finite point set with all horizontal coordinates distinct and all vertical coordinates distinct. It stores one point at each leaf and alternates the splitting axis. Exact coordinate comparisons are primitive operations. Equal-coordinate records and approximate inputs are discussed separately; they are not silently covered by the distinct-coordinate complexity proof.

## Balanced construction and geometric cells

Begin with the smallest closed axis-parallel rectangle containing all points. At the root, sort by horizontal coordinate and divide the points into a lower half and an upper half, with sizes differing by at most one. Put the splitting threshold strictly between the largest lower-half coordinate and the smallest upper-half coordinate. Their arithmetic midpoint is one exact choice. Assign the geometric split line to the upper child: the lower child has coordinate less than the threshold and the upper child has coordinate at least the threshold. Intersect both with the parent cell.

At the next level split by vertical coordinate, then horizontal again, and continue until each leaf stores one point. Empty input has a separate empty-tree representation; a singleton needs no split. Each node stores its cell, child links and subtree size, while each leaf stores its point and original record identity. Every stored point lies in exactly one child cell because no point coordinate equals the chosen threshold. The cells themselves partition the parent with explicit boundary ownership, even for query points lying exactly on a split line.

For a node with $m$ points, each child has at most $\lceil m/2\rceil$. After $h=\lceil\log_2 n\rceil$ splits along any path there is at most one point, so the height is at most $h$. The full binary tree has $n$ leaves and $n-1$ internal nodes: starting from one leaf, each split increases both the leaf count and internal-node count by one. Thus permanent node storage is linear.

A simple construction sorts each node's points anew. At each depth there are at most $n$ points in total, and each local sorting cost is bounded by its size times $\log(n+1)$. With logarithmically many depths this gives $O(n\log^2(n+1))$ time. A better construction first sorts the whole set in both coordinate orders. At a split, take the median from the appropriate sorted order and stably partition the other order into the same two point subsets, preserving its order. Both child orders are then available in linear work at that node. Summing over levels gives $O(n\log(n+1))$ construction time. Discard parent lists after partitioning; disjoint pending subtrees and reusable partition buffers permit linear live auxiliary point storage. Keeping every historical sorted list would instead retain unnecessary data.

The threshold may lie between input values without being close to the center of the cell. Balance concerns point counts, not physical cell aspect ratio. A very thin or elongated cell does not violate the height bound. It can nevertheless affect nearest-neighbor pruning, which is one reason not to infer that query's efficiency from tree height alone.

## A range query and its correctness

Let the query be a closed axis-parallel rectangle, possibly a segment or point. At a node, compare its geometric cell with the query. If disjoint, prune the subtree. If the cell is contained in the query, enumerate all descendant leaves and report their points. Otherwise visit the children, or at a leaf compare its point directly with the four closed query bounds. The cell comparisons must preserve the open or closed flags inherited from splitting. A point on a closed query boundary is included.

Correctness follows by induction on a node's subtree. Every stored point belongs to its node cell. Disjointness therefore proves that none qualifies. Containment proves that every descendant qualifies. In the remaining case the children partition the stored point subset, so applying the same argument to both finds exactly the qualifying points, without duplicates or omissions. At a leaf the direct coordinate comparisons are precisely the definition of membership. The empty-tree case reports nothing.

An enclosing closed bounding box can be useful for other purposes, but it is not automatically interchangeable with the partition cell in the following complexity proof. Treating both sides of every split as closed may make a query boundary appear to cross both children at many levels. Exact boundary ownership avoids this artificial duplication. When an interval is open at one endpoint, equality at that endpoint means disjointness from the opposite singleton boundary, not a small overlap.

## Why the planar reporting overhead is square-root sized

Fix a vertical line. At a horizontal-coordinate split, that line meets at most one child cell because the threshold line belongs to exactly one side. At a vertical-coordinate split it can meet both children. Consequently, after every pair of levels, the number of cells it meets grows by at most a factor of two. At depth $d$ it meets at most $2^{\lceil d/2\rceil}$ cells. The same bound holds for a horizontal line, with the two level roles exchanged.

Summing this bound over depths up to $h$ costs $O(2^{h/2})$, since the terms form a geometric progression when paired by levels. Because $h=\lceil\log_2 n\rceil$, the sum is $O(\sqrt n)$. This is a bound on all cells met by one complete line throughout the tree, not just the leaves. A query side is a subset of such a line, so its bound is no larger.

A cell visited in the partial-overlap case meets one of the four boundary lines of the query. Indeed, choose a point of the cell inside the query and one outside. The segment joining them lies in the rectangular cell and crosses a query boundary, giving the required contact; half-open endpoint policies are respected because both selected points belong to the cell. Degenerate query rectangles lie on their own boundary lines and satisfy the same conclusion. Therefore only $O(\sqrt n)$ partial-overlap nodes are visited. Their immediately rejected children add only a constant factor.

A wholly contained subtree with $r$ points has $2r-1$ nodes and can be enumerated in $O(r)$ time. The maximal wholly contained subtrees are disjoint, so their total enumeration work is $O(k)$, where $k$ is the number of reported points. We obtain the planar range-reporting bound
$$O(\sqrt n+k)$$
for the balanced alternating-axis tree with the stated exact cell policy. This is a worst-case guarantee, rather than a promise that every query visits only a logarithmic number of nodes. Reporting all points already requires linear time.

## Worked example 1: a closed rectangular query

Use points $A=(0,0)$, $B=(1,4)$, $C=(2,2)$, $D=(3,6)$, $E=(4,1)$, $F=(5,5)$, $G=(6,3)$, $H=(7,7)$. The root threshold is $7/2$. Its left subtree contains $A,B,C,D$ and splits vertically at height three; its right subtree contains $E,F,G,H$ and splits vertically at height four. Both coordinate-distinctness assumptions hold.

For the query $[1,6]\times[2,5]$, the reported points are $B,C,F,G$. Each lies on or inside all four bounds; notably $B,C,F,G$ include points on the rectangle's boundary, so strict comparisons would be wrong. The points $D,E$ fail the vertical bounds, and $A,H$ fail horizontal bounds as well. The decomposition organizes the search, but the closed coordinate inequalities determine the answer. If a query side were exactly a splitting threshold, the half-open partition rule would decide which child owns that side without changing the closed nature of the query.

## Lower bounds for nearest-neighbor search

For a query point $q$ and a closed rectangle with coordinate intervals $[a_i,b_i]$, define the clamped coordinate $c_i=\min(b_i,\max(a_i,q_i))$. Then
$$d(q,R)^2=\sum_i(q_i-c_i)^2.$$
To prove it, minimize the squared coordinate differences separately: a coordinate inside its interval contributes zero, while one outside is minimized at its nearest endpoint. The minimizing coordinates can be combined because a rectangle is their Cartesian product. This is the same projection principle as the earlier segment-clamping proof, applied independently along the axes.

For an open or half-open partition cell, the corresponding closed-box distance is still a valid lower bound, even if its minimizing boundary point is not in the cell. Alternatively store a tight closed bounding box of the subtree's actual points. Every stored point belongs to that box, so its distance is again bounded below by the box distance. Tight boxes can improve pruning but need not partition space and are not the cells used in the range-reporting proof.

Maintain a best actual stored point already inspected and its squared distance $D$. A subtree whose box lower bound is greater than $D$ cannot contain a nearer or tied point. Prune it. Otherwise visit its children, preferably the one with smaller lower bound first, and update the candidate at leaves. Initialization can use an arbitrary leaf, or an infinite bound until the first leaf is reached. No subtree is pruned on the basis of an unachieved distance estimate.

For a single arbitrary nearest answer, equality of the lower bound with the current achieved distance also permits pruning: a different tied answer is unnecessary. To return all ties, or the tied point with least original identifier, equality cannot generally be pruned. The output contract therefore determines a genuine mathematical comparison in the algorithm. Visiting a nearer-looking child first can improve the achieved bound earlier, but is an ordering heuristic within a proved complete search, not a substitute for the lower-bound inequality.

The correctness proof follows the invariant that the best candidate is an actual inspected point and every discarded subtree has no answer required by the chosen tie policy. Finite traversal ends, every remaining eligible leaf has been considered, and the final achieved distance is minimal. The proof establishes correctness for every query location, including outside the root rectangle. It does not establish a logarithmic worst-case time.

## Worked example 2: pruning and ties

Let a subtree's tight box be $[4,6]\times[1,3]$ and the query be $(1,5)$. Its closest box point is $(4,3)$, giving squared distance thirteen. If the current inspected candidate is $(2,4)$, with squared distance two, the whole subtree can be pruned. No hidden point in that rectangle can beat the candidate because thirteen already bounds its squared distance from below.

If the achieved distance were sixteen instead, the subtree could not be pruned: a point at $(4,3)$ would improve it to thirteen. If the achieved distance were exactly thirteen, pruning is valid for one arbitrary nearest answer but may discard another tied nearest point. In a record-sensitive application a tie policy must be stated before this equality decision. Approximate box bounds that accidentally round upward could also discard a real closer point; exact bounds or outward-safe enclosures are required for a certified conclusion.

## Worked example 3: nearest search can inspect the whole tree

Place distinct points on the unit circle with distinct horizontal and vertical coordinates, and query its center. For concrete rational samples one may use $(1,0)$, $(15/17,8/17)$, $(3/5,4/5)$, $(5/13,12/13)$ and $(7/25,24/25)$. Every squared center distance is one. More samples with the same distinct-coordinate property follow from the rational parametrization with distinct parameters strictly between zero and one.

Any tight box containing at least two different circle points also contains their midpoint. That midpoint has squared length $1-\lVert p-q\rVert^2/4<1$, by expanding the norm. Hence the box's distance from the center is strictly less than one. Once a leaf candidate of distance one is known, no internal subtree box can be pruned even under the single-answer equality policy. Every internal node must be visited. There are linearly many, so the method has a linear worst case. This example satisfies the tree's balance hypotheses; good height does not force a good nearest-query bound.

## Equal coordinates and uncertain data

The main range theorem assumes distinct coordinates so each median split has a threshold strictly between the two halves. With many equal split coordinates, no geometric line may divide the points into balanced halves along that axis. Sorting equal coordinates by record identifier can balance a binary list, but it does not produce the disjoint geometric half-cells required by the line-crossing proof. Its claimed square-root bound would need a different analysis.

One honest alternative groups coincident locations with their original record identities and retains equal-coordinate groups together, allowing unbalanced splits or larger leaf buckets. The membership and nearest-bound proofs still work when all descendants remain in their recorded cells, but the height and reporting costs must then be recomputed. If all points share one horizontal coordinate, a one-dimensional structure along the other coordinate is often a better declared model. Removing duplicate geometric locations should preserve their owner lists if the query asks for records rather than unique positions.

For uncertain measurements, a point may straddle a query boundary across admissible realizations. A robust interface can distinguish definitely inside, definitely outside and unresolved memberships using interval comparisons. A single exact tree built from nominal coordinates does not certify all perturbed realizations. Similarly, a nearest identity can change when two measured distances are close; reporting one nominal winner does not prove that identity is stable. The deterministic exact theory supplies the contract to which a separate uncertainty analysis must refer.

## Exercises with hints and full solutions

### Exercise 1

Why does median splitting bound height even if one child cell is physically much larger than its sibling?

<details><summary>Hint 1</summary>

Follow point counts along a path.

</details>

<details><summary>Hint 2</summary>

The recurrence uses the number of stored points, not area.

</details>

<details><summary>Full solution</summary>

A node with $m$ points has children of at most $\lceil m/2\rceil$ points. Repeating this bound leaves at most one point after $\lceil\log_2 n\rceil$ levels. Cell width, height and area do not enter that recurrence. Large empty portions of a cell may worsen geometric pruning but do not increase the combinatorial height under the stated balanced construction.

</details>

### Exercise 2

A vertical query line coincides with a horizontal-coordinate split. Which child owns it, and why does that matter to the reporting proof?

<details><summary>Hint 1</summary>

The lower child uses a strict inequality.

</details>

<details><summary>Hint 2</summary>

The per-two-level crossing argument needs one child at this type of split.

</details>

<details><summary>Full solution</summary>

The upper-coordinate child owns the threshold line because its condition is coordinate at least the threshold. The lower child's coordinate is strictly smaller and does not meet that line. Hence the line intersects at most one child at a split perpendicular to it. If both child cells were treated as closed, the line would falsely meet both, and repeating that ambiguity could invalidate the stated crossing count even though no input point lies on the threshold.

</details>

### Exercise 3

Compute the squared distance from $(8,-1)$ to the box $[2,5]\times[0,4]$.

<details><summary>Hint 1</summary>

Clamp each coordinate separately.

</details>

<details><summary>Hint 2</summary>

Both query coordinates lie outside their corresponding intervals.

</details>

<details><summary>Full solution</summary>

The nearest box point is $(5,0)$. The squared distance is $3^2+(-1)^2=10$. Any box point has a first-coordinate distance at least three and a second-coordinate distance at least one, so ten is also a proved lower bound, achieved at the clamped point. No square root is needed for comparing this bound with another squared distance.

</details>

### Exercise 4

Explain why a range query that reports all $n$ points cannot have total time bounded only by $O(\sqrt n)$ under explicit reporting.

<details><summary>Hint 1</summary>

Each reported identity must be emitted.

</details>

<details><summary>Hint 2</summary>

The query theorem includes an output-size term.

</details>

<details><summary>Full solution</summary>

Writing $n$ point identities requires at least $n$ output operations in the reporting model. The correct bound is $O(\sqrt n+k)$, which becomes linear when $k=n$. A counting query could instead return a stored subtree size without listing descendants, but that is a different output contract and requires its own cost statement.

</details>

### Exercise 5

Why can a nearest search returning all ties not prune a subtree whose lower bound equals the achieved best distance?

<details><summary>Hint 1</summary>

A lower bound may be attained by a stored point.

</details>

<details><summary>Hint 2</summary>

A tied point is part of the requested output.

</details>

<details><summary>Full solution</summary>

The subtree may contain another actual point at exactly that best distance. Pruning on equality would discard a required tied answer. A strict greater-than lower bound excludes both closer and tied points and is therefore safe. Equality pruning becomes valid only when the contract asks for one arbitrary nearest point, or when additional information independently rules out any tie preferred by the chosen policy.

</details>

### Exercise 6

Prove that enumerating all wholly contained subtrees costs $O(k)$ in total rather than $O(k\log n)$.

<details><summary>Hint 1</summary>

Choose maximal contained subtrees, which have disjoint leaf sets.

</details>

<details><summary>Hint 2</summary>

A full binary tree with $r$ leaves has $2r-1$ nodes.

</details>

<details><summary>Full solution</summary>

Traverse each maximal contained subtree once, emitting its leaves. A subtree with $r$ leaves costs linear work in $r$, and the selected subtrees are disjoint. Their leaf counts sum to at most the total reported count $k$. Summing their linear costs is therefore $O(k)$. Searching independently from the root for each already selected leaf would add unnecessary repeated work and is not this enumeration algorithm.

</details>

### Exercise 7

Extend the boundary-crossing argument to an alternating-axis tree in three dimensions. What range-reporting overhead does it suggest under the corresponding distinct-coordinate and balance assumptions?

<details><summary>Hint 1</summary>

Fix one axis-perpendicular plane.

</details>

<details><summary>Hint 2</summary>

In each group of three levels, one split selects one child and the other two can double the count.

</details>

<details><summary>Full solution</summary>

An axis-perpendicular plane intersects at most four times as many cells after three levels. At height about $\log_2 n$, the count is $O(4^{(\log_2 n)/3})=O(n^{2/3})$. Summing over depths has the same order, and the six boundary planes of a box add only a constant factor. Thus the analogous reporting overhead is $O(n^{2/3})$, plus output size. The argument depends on fixed dimension and the same exact partition ownership, not merely on the name k-d tree.

</details>

### Exercise 8

All records have the same horizontal coordinate. Why does breaking horizontal ties by identifier fail to justify the planar range theorem as written?

<details><summary>Hint 1</summary>

The halves may be balanced as lists but not separable by a vertical line.

</details>

<details><summary>Hint 2</summary>

Locate the exact geometric property used in the line-crossing recurrence.

</details>

<details><summary>Full solution</summary>

No threshold strictly between equal horizontal coordinates separates the two record subsets. Assigning identifiers to opposite children therefore creates overlapping or nongeometric ownership, rather than the two disjoint half-cells assumed in the proof. A vertical query line through that coordinate can meet both subsets. One may use a one-dimensional vertical structure or analyze a different tie policy, but balancing identifiers alone does not establish the claimed geometric reporting bound.

</details>

### Exercise 9

Does a balanced tree prove logarithmic worst-case nearest-neighbor search? Give the decisive counterexample property.

<details><summary>Hint 1</summary>

Use the center query for points on a circle.

</details>

<details><summary>Hint 2</summary>

Every internal tight box contains a midpoint strictly closer than the actual nearest distance.

</details>

<details><summary>Full solution</summary>

No. For distinct unit-circle samples every actual query distance at the center is one. Every internal subtree has at least two points, whose midpoint lies strictly inside the unit disk and inside the subtree box. Hence its lower bound is strictly below one and cannot prune that subtree after a distance-one candidate is known. All internal nodes are visited, giving linear work despite logarithmic height. Balance controls path length; it does not guarantee that a query follows only a bounded number of paths.

</details>

### Exercise 10

A measured point has horizontal coordinate in $[2-\varepsilon,2+\varepsilon]$ with $\varepsilon>0$, and the closed query begins at horizontal coordinate two. What can be certified from this coordinate alone?

<details><summary>Hint 1</summary>

The interval includes values on both sides of the boundary.

</details>

<details><summary>Hint 2</summary>

Closed membership includes equality but not all smaller values.

</details>

<details><summary>Full solution</summary>

Neither definite inclusion nor definite exclusion follows: admissible values lie below, on and above the boundary. Other query coordinates may separately prove exclusion, but if they are safely inside, horizontal membership remains unresolved. Using the nominal midpoint two would include the nominal point while saying nothing about all admissible realizations. The correct data-uncertainty conclusion is conditional or unresolved until the coordinate interval is narrowed or the output contract explicitly asks only about nominal values.

</details>

## What is proved and where to continue

Balanced alternating coordinate splits give a linear-size structure and the stated planar reporting bound with exact boundary ownership. Nearest-neighbor branch-and-bound is correct through a box-distance certificate and has a linear worst case. Equal-coordinate and uncertain-data policies need their own analysis. The [de Berg et al. third-edition author contents](https://ics-websites.science.uu.nl/geobook/toc.html) includes k-d trees beside range trees and fractional cascading; those stronger range structures are separate topics. The original exposition here does not claim their bounds for this tree. The next reading returns to geometry itself, comparing certified distances on spherical and hyperbolic models.
