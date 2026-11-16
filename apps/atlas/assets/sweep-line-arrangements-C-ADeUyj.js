var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: sweep-line-arrangements
title: "Sweep Lines and Arrangements"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Sweep Lines and Arrangements

A segment-intersection predicate decides one pair. A sweep line organizes many pairs by asking when their vertical order can change. The difficult part is proving that the few neighboring pairs inspected by the sweep suffice to discover every crossing. The same crossings then determine a planar subdivision, whose incidence and faces require more information than a list of point coordinates.

**L3 preparation.** Use [Segment Intersection](segment-intersection-needs-boundary-cases.md), [Orientation](orientation-is-the-central-planar-predicate.md), elementary balanced search trees, priority queues and graph terminology. We give a fast crossing-reporting theorem under precise general-position hypotheses, followed by a slower exact arrangement construction that also handles degeneracies. Running times count exact comparisons and rational arithmetic as primitives; no implementation or bit-complexity theorem is inferred from those counts.

## What the sweep theorem assumes

There are $n$ closed nonzero segments. None is vertical, no two share a collinear supporting line, no endpoint lies on another segment, and no three segments meet at one point. All endpoint and intersection horizontal coordinates are distinct. Parallel noncollinear segments are allowed. These hypotheses are stronger than ordinary visual nondegeneracy: two unrelated endpoints with the same horizontal coordinate are excluded too. They make each event a single insertion, deletion or proper crossing of two segments. Let $k$ be the number of crossing points, equivalently the number of intersecting pairs under these assumptions.

An event queue orders endpoints and discovered future crossings by horizontal coordinate. The status is the ordered sequence, from bottom to top, of segments meeting a vertical line just to the right of the last processed event. Between events, every active segment height is an affine function of the horizontal coordinate. Two heights can exchange order only where the corresponding segments intersect. In an event-free open interval the status order is therefore constant.

At an insertion, locate the segment at its left endpoint height, insert it and inspect its new immediate neighbors. At a deletion, remove the ending segment and inspect the pair that becomes adjacent across the gap. At a crossing, swap the two crossing segments and inspect their newly exposed outside neighbor pairs. In each inspection use the exact closed-segment predicate; enqueue a pair's intersection only when it exists and has strictly larger horizontal coordinate than the current event. Retain one event identity per pair so rediscovering the same future crossing does not create duplicate reports.

A balanced ordered status supports insertion, removal, neighbor lookup and a local exchange in logarithmic time. At a crossing the two equal heights are ordered immediately to the right by their unequal slopes. This is a one-sided symbolic comparison, not evaluation at an arbitrarily chosen decimal offset. A segment may cross another extremely close to the current event; no fixed offset is guaranteed to lie before the next event. Between events the order itself is maintained, and searching at a new endpoint uses the exact height comparison at that endpoint. The model must not treat a changing global coordinate as permission for an ordered data structure to become internally inconsistent.

## Why neighboring pairs suffice

First, the segments at a proper crossing are adjacent immediately before that crossing. If a third active segment were strictly between their heights at arbitrarily close horizontal coordinates on the left, continuity would force its height at the crossing to equal their common height. That would be a forbidden triple intersection. Since finitely many other segment heights differ there, a sufficiently small left neighborhood separates all of them from the two crossing heights. The same argument shows the crossing pair simply exchanges its two adjacent positions.

Now suppose all events before a particular crossing have been processed correctly. Immediately before this crossing its segments are neighbors. Consider the last earlier event after which this neighboring relationship was established. It was either an insertion involving one of them, a deletion of the segment between them, or a crossing that exposed them as a new outside neighbor pair. If they have been neighbors since one first became active, its insertion is that event. Each case is explicitly inspected by the update rules. Their actual intersection is still in the future at that time, so it was enqueued. This proves that the crossing cannot be missed.

For a formal induction, choose the earliest actual crossing alleged to be missing. There are no missed earlier crossings, so every status transition before it is accounted for. The preceding argument enqueues it, a contradiction. Endpoint events are present from the start. Thus processing the least queued event preserves the true order and eventually reports every crossing exactly once. Conversely, every reported point came from the exact predicate and belongs to both closed segments, so there are no invented crossings. The argument proves soundness and completeness separately.

The future-event restriction matters. Testing a neighboring pair may rediscover an intersection already processed or one lying outside the segments' parameter intervals. Neither is a future status transition. Exact rational event ordering can compare cross-multiplied numerators after normalizing denominator signs, as in the earlier intersection chapter. A supporting-line intersection without interval filtering is not a valid segment event.

## Cost and output size

There are $2n$ endpoint events and $k$ crossing events. Each event performs a constant number of neighboring-pair inspections. Hence at most a constant times $n+k$ crossing candidates are generated, whether or not an inspected pair has a future intersection. Priority operations and status changes each cost $O(\\log n)$ up to the usual harmless replacement by $\\log(n+1)$ for tiny inputs. The queue can contain at most $O(n+k)$ entries; since $k\\le n(n-1)/2$, its logarithm is also $O(\\log n)$. The total cost is therefore $O((n+k)\\log(n+1))$ and the storage bound is $O(n+k)$ including reports and scheduled-pair identities.

This is output-sensitive: when crossings are quadratic, the output alone prevents a subquadratic total bound. For disjoint segments the count becomes $O(n\\log(n+1))$, improving on testing every pair. The theorem does not cover arbitrary degeneracy by merely replacing a few comparisons with non-strict ones. Its hypotheses are used in both the adjacency proof and the constant-size event update.

## Worked example 1: a crossing becomes adjacent

Take $s_1$ from $(0,0)$ to $(6,6)$, $s_2$ from $(1,5)$ to $(7,-1)$, and $s_3$ from $(2,-2)$ to $(8,-2)$. Their supporting heights are $x$, $6-x$ and $-2$. The first two cross at $(3,3)$, inside both parameter intervals. The third meets neither segment. Endpoint and crossing horizontal coordinates are distinct, so the fast theorem applies.

At horizontal coordinate one, inserting $s_2$ above $s_1$ makes them neighbors and schedules their crossing at three. Inserting $s_3$ at two puts it below both and does not destroy that adjacency. At three the first two exchange order. Although the third segment is active, it cannot sit between their heights near the crossing. The remaining endpoint events remove segments without discovering a new crossing. The status sequence explains why one pair report suffices; an event at the intersection of the third supporting line with an extension outside a segment would be rejected by the interval predicate.

## Turning crossings into an arrangement

An arrangement records vertices, edge pieces and their embedding. Under the fast theorem's hypotheses, its vertices are the $2n$ distinct endpoints and $k$ crossings. Each crossing subdivides two original segments, increasing the total number of pieces by two. Thus
$$V=2n+k,\\qquad E=n+2k.$$
For each original segment, collect its endpoints and reported crossings, sort them by its exact parameter and join successive distinct points. Sharing one crossing vertex identity between its two incident segments gives the geometric graph. It has degree four at a crossing and degree one at an original endpoint. Merely recording two separate equal-looking coordinate objects would leave a disconnected incidence error.

At a vertex, order outgoing edge directions cyclically. An exact angular comparison first distinguishes the upper and lower half-planes, then uses the cross-product sign within one half; collinear same-direction pieces need a consistent merged-edge policy. No trigonometric angle is required. Give each edge two directed half-edges with a reversal pairing. To follow the face on the left of one half-edge, arrive at its endpoint and choose the outgoing edge immediately clockwise from the reverse direction. Locally that choice keeps the same sector on the left. Repeating this successor rule produces the boundary walks of the embedding.

A bridge may appear twice in the boundary walk of one face, once in each direction. A disconnected graph can give one face several boundary walks. Consequently a walk is not automatically a distinct face, and one coordinate cycle is not a complete face data structure. Full grouping of boundary components into faces requires additional containment or point-location information. The graph and its cyclic edge orders are already meaningful output, but should not be mislabeled as a complete grouped-face implementation.

If the graph has $c$ connected components, its number of faces, including the unbounded one, is
$$F=E-V+1+c.$$
Here is a derivation using the same polygonal separation input stated in [Triangulation](polygon-triangulation-art-gallery.md). A spanning forest has $V-c$ edges and no closed cycle, so its complement is one face; deleting a leaf edge cannot create a bounded region, proving that claim inductively. Add each remaining edge in the given planar embedding. Its endpoints are already connected by a simple graph path, and together the path and new edge form a simple closed polygonal curve. Separation splits one existing face into two, increasing the face count by one. There are $E-(V-c)$ such edges, which proves the formula. The argument concerns embedded graphs with intersections already split into vertices.

## Worked example 2: an arrangement with one bounded face

Let $s_1$ run from $(0,0)$ to $(10,0)$, $s_2$ from $(1,-1)$ to $(9,7)$, and $s_3$ from $(3,5)$ to $(11,-3)$. Their pair crossings are $(2,0)$, $(5,3)$ and $(8,0)$. They occur at three different horizontal coordinates, different from every endpoint coordinate. Thus $n=3$, $k=3$, $V=9$ and $E=9$. All three segments belong to one component, so $F=2$.

The bounded face is the triangle with those three crossing vertices. The tails leading to original endpoints are bridges. In the exterior-face boundary traversal each such tail must be walked out and back, so the walk repeats some vertices and edges. Deleting the tails would preserve the bounded triangle but change the graph's incidence. Keeping them and pretending every face boundary is a simple polygon would also be incorrect. The face formula accounts for both features without losing the endpoints.

## A complete slower construction for degenerate input

For arbitrary finite closed segments, including zero-length ones, use the exhaustive pair predicate rather than the general-position sweep theorem. Begin a cut list for each segment with its endpoints. For every pair, compute the intersection as empty, a point or a closed segment. Add a point intersection to both cut lists; for an overlap, add both overlap endpoints to both lists. A zero-length segment contributes a point vertex and can also cut a longer segment when it lies on it.

For each nonzero original segment, sort and deduplicate its cuts in a nonzero coordinate direction. Form the closed pieces between consecutive cut points. Identify equal geometric vertices exactly, and merge equal pieces while retaining the set of original segment owners. A zero-length input does not create an edge. Its point is either an existing vertex or an isolated vertex. This is a finite mathematical construction; it makes no assumption that all intersection components are isolated points.

To prove completeness, every noncollinear crossing or endpoint contact is found by its pair and becomes a cut. Every change in ownership along a collinear overlap occurs at an endpoint of at least one original segment, which also appears as a pair-overlap cut or an original endpoint. After all cuts, interiors of distinct resulting pieces therefore cannot cross, and collinear interiors either coincide or are disjoint. If two pieces still crossed without sharing a vertex, their owners' pair intersection would have supplied the missing cut, a contradiction. If partially overlapping collinear pieces remained, an overlap endpoint would have supplied the missing cut. Merging coincident pieces hence produces exactly the subdivision of the input union, with correct ownership, including shared endpoints and isolated points.

There are quadratically many pairs and each contributes at most two cut points per involved segment. Each original segment has $O(n)$ cuts, so all cut lists together have $O(n^2)$ entries. Their sorting costs $O(n^2\\log(n+1))$; exact dictionaries for vertices and endpoint-pair pieces fit within the same bound. Owner incidences are bounded by the total number of unmerged pieces, also quadratic. These are conservative operation and storage bounds, not the fast sweep bound. They show that a complete degenerate construction is possible without pretending its events have constant size.

## Worked example 3: a simultaneous event is not three vertices

Take the horizontal segment from $(-2,0)$ to $(2,0)$, the vertical segment from $(0,-2)$ to $(0,2)$ and the diagonal segment from $(-1,-1)$ to $(1,1)$. All three meet at the origin. The general-position theorem fails both verticality and concurrency assumptions. Pair reporting finds three intersecting pairs but only one geometric crossing vertex.

The exact cut construction gives seven vertices: six endpoints and the origin. Each original segment splits into two pieces, giving six edges. The graph is connected and has no bounded face, so Euler's formula gives $F=6-7+2=1$. Substituting one distinct crossing into $E=n+2k$ would give five edges, an error because that formula assumed exactly two incident segments per crossing. A grouped sweep event would need all three incident segments and their complete order change. Sequentially swapping an arbitrary selected pair three times, without a proved event policy, is not the fast theorem applied to this input.

## Exercises with hints and full solutions

### Exercise 1

Why is the event queue initially incomplete but still sufficient to start the sweep?

<details><summary>Hint 1</summary>

All endpoints are known, but most crossings have not yet been inspected.

</details>

<details><summary>Hint 2</summary>

Use the last event that establishes adjacency before any crossing.

</details>

<details><summary>Full solution</summary>

Every insertion and deletion event is initially present. A crossing need only be scheduled before its turn, not at initialization. Its two segments are adjacent just before it, and their most recent adjacency-creating event causes the pair inspection that schedules it. The earliest-missed-crossing proof makes this argument inductive, avoiding the circular assumption that every crossing was already in the queue.

</details>

### Exercise 2

Explain why evaluating status order at the event coordinate plus a fixed positive decimal offset is unsound.

<details><summary>Hint 1</summary>

There is no lower bound on separation between distinct event coordinates.

</details>

<details><summary>Hint 2</summary>

Two valid rational-coordinate inputs can have crossings closer together than the chosen offset.

</details>

<details><summary>Full solution</summary>

The offset may pass another event, so the evaluated order need not be the immediate right-hand order of the current event. General position means coordinates are distinct, not uniformly separated. The correct conceptual comparison uses a one-sided limit: among segments tied at the current point, compare their slopes. Other segment heights remain separated locally. This symbolic order follows from affine height functions and does not need a numerical step size.

</details>

### Exercise 3

Six segments in general position have four crossings and two connected components. Compute their arrangement vertex, edge and face counts.

<details><summary>Hint 1</summary>

Each ordinary crossing adds one vertex and splits two segments.

</details>

<details><summary>Hint 2</summary>

Include the exterior face and use the component count.

</details>

<details><summary>Full solution</summary>

There are $V=12+4=16$ vertices and $E=6+8=14$ edges. Euler's relation gives $F=14-16+1+2=1$. Thus these counts describe a forest-like arrangement with no bounded face. Omitting the component correction would yield a nonsensical zero face count. The calculation uses the general-position hypotheses for the vertex and edge formulas, but Euler's component formula is more general.

</details>

### Exercise 4

For a segment event, why must the supporting-line intersection parameter be checked against both segment domains before enqueueing it?

<details><summary>Hint 1</summary>

Two finite segments may have intersecting line extensions.

</details>

<details><summary>Hint 2</summary>

An intersection beyond an endpoint occurs after that segment has ceased to be active.

</details>

<details><summary>Full solution</summary>

The status tracks only points actually on the closed segments. A supporting-line crossing outside either parameter interval cannot change the order of two active segments at that coordinate. Enqueueing it would invent a geometric event and might request a swap involving an absent segment. The exact pair predicate proves both line equality and interval membership before its output becomes a legitimate event.

</details>

### Exercise 5

Construct the subdivision of the collinear intervals $[0,3]$ and $[1,4]$ on the horizontal axis, retaining ownership labels.

<details><summary>Hint 1</summary>

The pair intersection is the whole interval $[1,3]$.

</details>

<details><summary>Hint 2</summary>

Cut at all four distinct endpoint coordinates.

</details>

<details><summary>Full solution</summary>

The vertices occur at zero, one, three and four. The three edge pieces are $[0,1]$ owned only by the first input, $[1,3]$ owned by both, and $[3,4]$ owned only by the second. The overlap is one geometric edge with two owners, not two coincident graph edges. There are four vertices, three edges and one component, hence one face. This example requires interval output and cannot be represented by a finite list of isolated pair-intersection points alone.

</details>

### Exercise 6

Two disjoint closed segments form an arrangement. Explain why one face can have more than one boundary walk.

<details><summary>Hint 1</summary>

Each segment has two half-edges, both bordering the exterior.

</details>

<details><summary>Hint 2</summary>

The half-edge successor cannot jump between disconnected components.

</details>

<details><summary>Full solution</summary>

Around each isolated segment the successor walk travels to its endpoint and back, producing one closed walk per component. Both walks border the same unbounded face. The local rotation information therefore produces two walks while the graph has only one face. Grouping them into that face is additional global information; treating every successor cycle as a new face would overcount.

</details>

### Exercise 7

Why can a third segment not lie between two crossing segments arbitrarily close to their proper crossing under the fast theorem's hypotheses?

<details><summary>Hint 1</summary>

Take the limit of their affine height functions at the crossing coordinate.

</details>

<details><summary>Hint 2</summary>

The third segment would have to attain the same height there.

</details>

<details><summary>Full solution</summary>

The crossing heights converge to a common value. A height trapped between them along arbitrarily close coordinates converges to that same value by continuity. The third segment is active locally and would pass through the crossing, producing a forbidden triple intersection. Since only finitely many other segments exist, each has a separated height in a sufficiently small neighborhood, and one common neighborhood works for all of them. Thus the crossing pair is adjacent there.

</details>

### Exercise 8

A pair of segments has already had its unique intersection processed and later becomes adjacent again. Should that intersection be queued a second time?

<details><summary>Hint 1</summary>

Two noncollinear straight segments intersect at most once.

</details>

<details><summary>Hint 2</summary>

The event rule requires a strictly future coordinate.

</details>

<details><summary>Full solution</summary>

No. The old intersection lies at or before the current event and cannot be a future status change. The future-coordinate filter rejects it, and the pair identity also prevents duplicate queued reports. The adjacency may have changed because other segments were inserted, deleted or crossed nearby, but that does not give the pair a second geometric intersection.

</details>

### Exercise 9

Prove the cut construction cannot leave a crossing in the interiors of two distinct output edges.

<details><summary>Hint 1</summary>

Choose one original segment owner for each edge.

</details>

<details><summary>Hint 2</summary>

Their pair predicate was processed before splitting.

</details>

<details><summary>Full solution</summary>

For noncollinear owners, their crossing was returned as a point and inserted into both cut lists. Sorting those lists makes it an endpoint of every incident output piece, contradicting that it remains an interior crossing. For collinear owners, any overlap boundary was inserted as a cut, and pieces with coincident interiors are merged by their exact endpoints. Thus a remaining partial overlap is impossible too. The proof depends on processing every pair, which is precisely why this slower construction does not inherit the fast sweep's cost.

</details>

### Exercise 10

What additional information is needed to turn reported crossing coordinates into a useful embedded arrangement graph?

<details><summary>Hint 1</summary>

A graph needs shared vertices and edges, not just points.

</details>

<details><summary>Hint 2</summary>

A planar embedding also records cyclic direction order at vertices.

</details>

<details><summary>Full solution</summary>

Identify equal endpoints and crossing points as shared vertices; retain which original segments contain each cut; sort cuts along their owners; and form the edge pieces between consecutive cuts, merging coincident pieces with owner sets. Record the cyclic order of outgoing pieces and the reversal pairing of half-edges. These data support boundary walks and local incidence. If grouped faces are required, also determine which walks belong to the same face, especially across disconnected components. Crossing coordinates alone supply none of that full incidence automatically.

</details>

## Scope and sources

The fast sweep proves crossing reporting only under the stated general position. The exhaustive cut construction proves a complete finite segment-union subdivision under arbitrary exact degeneracies, at a larger cost. Neither theorem claims a numerical implementation has run. The topic organization follows the segment-intersection and arrangement entries in the [de Berg et al. third-edition author contents](https://ics-websites.science.uu.nl/geobook/toc.html) and [O’Rourke second-edition author page](https://www.science.smith.edu/~jorourke/books/compgeom.html); the proofs here are original exposition. The next chapter studies distance-based subdivisions through Voronoi cells and their Delaunay dual.
`;export{e as default};