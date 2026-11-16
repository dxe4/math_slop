var e=`---
parent_id: book-graph-theory
chapter_id: paths-cycles-connectivity
title: "Paths, Cycles, and Connectivity"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Paths, Cycles, and Connectivity

## A route is a mathematical object

A network can admit a journey that repeats stations, a journey that never repeats a connection, and a journey that never revisits a station. These are different requirements. Similarly, losing a particular connection can destroy all routes between two regions even when each region contains many cycles. Graph theory needs precise route language before it can explain either phenomenon.

We develop walks, trails, paths, and cycles, then prove the basic structural facts about connected components and cuts. Distance will provide a second view through shortest paths and layers. Finally, we prove that a graph admits a bipartition exactly when it has no odd cycle. The proofs emphasise certificates: an explicit path proves reachability, whereas a partition without crossing edges proves its failure.

## Preparation and graph conventions

Read [Graphs, Degrees, and Isomorphism](graphs-degrees-isomorphism.md), together with the proof methods from [Introduction to Proof](/books/library-book-introduction-to-proof/). The earlier [Discrete Mathematics graph chapter](/books/library-book-discrete-mathematics-proof-counting-structure/graphs-trees-connectivity/) and [Spanning Trees and Shortest Paths](/books/library-book-discrete-mathematics-proof-counting-structure/spanning-trees-shortest-paths/) provide useful first encounters. Here the conclusions will be proved without assuming a search program has found every possibility.

Every graph in this chapter is finite, undirected, and simple. Walks are therefore specified by vertex sequences, since consecutive vertices determine their edge uniquely. The empty graph is permitted, but we define a connected graph to have a nonempty vertex set and a path between every pair. It follows that the one-vertex graph is connected and the empty graph is not. Component-count formulas will still include the empty graph with zero components.

## Walks, trails, paths, and cycles

**Definition 2.1 (Route terminology).** A walk of length $\\ell\\ge0$ is a sequence $(v_0,\\ldots,v_\\ell)$ with $v_{i-1}v_i\\in E$ for each $i=1,\\ldots,\\ell$. Its endpoints are $v_0,v_\\ell$. A trail is a walk in which no edge repeats. A path is a walk in which no vertex repeats. A walk is closed when its endpoints agree. A cycle is a closed walk of length at least three whose only repeated vertex is its common first and last vertex.

Length counts edges, not the displayed number of vertices. The one-vertex sequence $(v)$ is a length-zero path from $v$ to itself. Under our definition, a positive-length path is not closed. A cycle is instead closed while all its vertices before the final repetition are distinct. In a simple graph its edges are automatically distinct.

The route can be distinguished from the subgraph it traverses. A cycle subgraph can be traversed starting at different vertices and in either direction; those are different displayed sequences describing the same cyclic edge set. When counting cycles, we count that subgraph rather than repeatedly counting starts and orientations. A question about walks may intentionally distinguish those sequences, so its counted objects must be specified.

### Worked example 2.2 (Classifying routes from their repetitions)

Let
$$
V=[6],\\qquad E=\\{12,23,31,34,45,53,56\\}.
$$
The sequence $(1,2,3,4,5,3)$ is a trail of length five: its edges are $12,23,34,45,53$, all distinct. It is not a path because vertex three repeats. It is not closed because its endpoints are one and three.

The sequence $(1,2,1)$ is a closed walk of length two but not a trail: the same undirected edge $12$ is used twice. It is not a cycle, both because the edge repeats and because its length is below three. By contrast, $(3,4,5,3)$ is a cycle, while $(2,3,5,6)$ is a path.

These classifications use the exact sequence, not just the graph. A graph can contain many paths and also admit walks that repeat edges arbitrarily often. Discovering a repeated vertex in one proposed route does not prove that no simple path exists between its endpoints; it only says that this particular route is not one.

**Lemma 2.3 (Deleting repetitions).** Every walk from $u$ to $v$ contains a $u$–$v$ path of no greater length.

*Proof.* If a walk has a repeated vertex, choose occurrences $v_i=v_j$ with $i<j$ and remove the portion after $v_i$ through $v_j$. If $j$ was not the final index, the next edge is still valid because the remaining vertex $v_i$ equals the former $v_j$. The endpoints are retained; if they agree, the route can eventually become the length-zero path. Every deletion reduces length by a positive amount, so finiteness gives termination. The resulting sequence has no repeated vertex and is a path. ∎

This lemma justifies replacing an untidy route by a simple one when only reachability matters. It does not preserve the requirement to use every edge, or the length exactly. Those are different questions: deleting a detour may destroy an Euler traversal or change a length-constrained count.

## Which route certificates force cycles?

**Lemma 2.4 (Two paths force a cycle).** If distinct paths join the same two distinct vertices, their union contains a cycle.

*Proof.* Follow both paths from the first endpoint through their common initial segment. Since the paths are distinct and neither can finish early at the common final endpoint without repeating it later, there is a last vertex $x$ of that initial segment where they separate. Follow the first path from $x$ until it first reaches a vertex $y$ on the remaining suffix of the second path; such a vertex exists at the common final endpoint. The two $x$–$y$ segments have disjoint interiors by this first-meeting choice and the paths' lack of repetitions. They are distinct and together form a cycle. Simplicity excludes a two-edge cycle made of parallel edges. ∎

**Lemma 2.5 (Closed trails and odd closed walks).** Every positive-length closed trail contains a cycle. Every odd-length closed walk contains an odd cycle.

*Proof.* For the first assertion, choose a positive-length closed contiguous segment of the trail of smallest possible length. If it repeated an internal vertex, the portion between two occurrences would be a shorter positive closed segment. Thus its only repetition is the common endpoint. Its edges are distinct, so a simple graph rules out lengths one and two; it is a cycle.

For the second assertion, choose an odd closed walk of smallest length among the odd closed segments obtainable by repeatedly splitting the original walk. If an internal vertex repeats, split there into two closed walks of positive lengths whose sum is odd. One of those lengths is odd, producing a shorter choice, a contradiction. Thus only the endpoint repeats. A simple graph has no loop, and two is even, so the resulting odd walk has length at least three and is an odd cycle. ∎

A general positive closed walk need not contain a cycle: moving along one edge and immediately back is a counterexample. The trail condition in the first assertion and the oddness condition in the second are genuine hypotheses. Proofs about routes are often repaired by checking exactly which of these hypotheses has actually been established.

**Proposition 2.6 (A degree condition for a cycle).** Every nonempty finite simple graph with minimum degree at least two contains a cycle.

*Proof.* Choose a path of maximum length, which exists because there are finitely many paths. Every neighbour of its last vertex lies on the path, since an outside neighbour would extend it. The last vertex has at least two neighbours, so one is not its immediate predecessor. The edge to that earlier vertex and the intervening path segment form a cycle. ∎

## Reachability partitions the vertex set

**Definition 2.7 (Components).** Two vertices are connected when there is a path between them. A connected component is a maximal set of mutually connected vertices, together with all edges induced by that set. Write $c(G)$ for the number of components.

**Theorem 2.8 (Component partition).** Connection is an equivalence relation on the vertex set. Its classes partition the vertices, and no edge joins distinct classes.

*Proof.* A length-zero path proves reflexivity. Reversing a path proves symmetry. Concatenating paths from $u$ to $v$ and from $v$ to $w$ gives a walk from $u$ to $w$, which Lemma 2.3 reduces to a path, proving transitivity. Thus the classes form a partition. An edge between two classes would itself join their vertices, merging the classes, which is impossible. ∎

The induced-subgraph qualification means that a component contains all the original edges among its vertices. Choosing one convenient connecting route through those vertices generally gives only a connected subgraph, not the whole component. An isolated vertex is a one-vertex component, so component detection must not begin by looking only at edges.

**Definition 2.9 (Edge cut).** For $S\\subseteq V$, let
$$
\\delta_G(S)=\\{uv\\in E:u\\in S,\\ v\\in V\\setminus S\\}.
$$
The two sides $S$ and $V\\setminus S$ define the same edge cut. A nontrivial cut has both sides nonempty; its edge set can still be empty.

**Theorem 2.10 (Cut criterion for connectivity).** A graph with nonempty vertex set is connected if and only if every nontrivial cut contains an edge.

*Proof.* In a connected graph, take a vertex on either side and a path between them. Somewhere the path first crosses between the sides, supplying a cut edge. Conversely, if the graph is disconnected, take $S$ to be one component's vertex set. It is nonempty and proper, and no edge joins it to the remaining components. Hence its cut is empty. ∎

### Worked example 2.11 (Components and a crossing certificate)

Let $V=[8]$ and
$$
E=\\{12,23,31,45,56,67,74\\}.
$$
The components are the triangle on $\\{1,2,3\\}$, the four-cycle on $\\{4,5,6,7\\}$, and the isolated vertex eight. The partition is verified by paths within each set and by checking that the entire edge list contains no edge between them.

The cut $\\delta(\\{1,2,3\\})$ is empty, whereas $\\delta(\\{1,2\\})=\\{13,23\\}$. Thus a cut can be empty because it separates whole components, or nonempty inside a component. Add the edge $37$. The first two components merge, leaving two components in all. The new edge is the only edge across the cut with side $\\{1,2,3\\}$, so removing it restores the earlier separation. Vertex eight remains a component throughout.

The example gives both kinds of certificate. A route from one to seven after the addition is $(1,3,7)$. To prove that one still cannot reach eight, the empty cut $\\delta(\\{8\\})$ is a complete obstruction.

## Bridges and cut vertices are different failures

**Definition 2.12 (Bridge and cut vertex).** An edge $e$ is a bridge if $c(G-e)>c(G)$. A vertex $v$ is a cut vertex if $c(G-v)>c(G)$. These definitions apply whether or not the original graph is connected.

**Theorem 2.13 (Bridge characterisations).** For an edge $e=uv$, the following are equivalent: it is a bridge; there is no $u$–$v$ path in $G-e$; it lies on no cycle; it is the sole edge of some nontrivial cut. Deleting a bridge increases the component count by exactly one.

*Proof.* If $u,v$ remain connected after deletion, any route using $e$ can replace that step by a surviving $u$–$v$ path. Thus deleting $e$ changes no component. If they do not remain connected, their original component has split, so $e$ is a bridge. An alternative endpoint path combines with $e$ to form a cycle; conversely a cycle containing $e$ supplies such an alternative path after its deletion. This proves the first three equivalences.

If $e$ is a bridge, let $S$ be the vertex set of the component of $G-e$ containing $u$. The only original edge crossing its boundary is $e$, so $\\delta_G(S)=\\{e\\}$. Conversely, deleting the sole edge of such a cut separates its two nonempty sides, and its endpoints were previously connected by that edge, so the component count increases.

Finally, every vertex of the original component of $e$ remains connected in $G-e$ to at least one of $u,v$: take an original path to $u$ and, if it uses $e$, use its segment ending at $v$ before crossing $e$. Thus at most two components result from that one component. A bridge creates both, so the increase is exactly one. ∎

Deleting a cut vertex can create more than two components because it removes all its incident edges at once. Conversely, a bridge need not have a cut vertex at either endpoint: in $K_2$, deleting its edge produces two isolated vertices, but deleting either vertex leaves one component as before. Removing an isolated vertex decreases the component count and therefore does not make it a cut vertex.

### Worked example 2.14 (A shared vertex without a bridge)

Take two four-cycles sharing only a vertex $r$:
$$
r-a-b-c-r,\\qquad r-d-e-f-r.
$$
Every edge lies on one of the cycles, so Theorem 2.13 shows that there are no bridges. Deleting $r$, however, leaves the disjoint paths $a-b-c$ and $d-e-f$, so $r$ is a cut vertex.

For terminals $b,e$, the routes $(b,a,r,d,e)$ and $(b,c,r,f,e)$ are edge-disjoint, but share the internal vertex $r$. Every terminal path must use $r$ because the two four-cycles meet only there. Thus one internal vertex suffices to destroy all terminal routes, while no single edge suffices. The cut $\\delta(\\{b\\})=\\{ab,bc\\}$ shows that two edges do suffice, matching the two edge-disjoint routes. These matching elementary certificates establish the two different optima without invoking a general theorem about disjoint paths.

## Separators and path bounds

**Definition 2.15 (Protected-terminal separators).** For distinct terminals $s,t$, an internal vertex separator is a set $X\\subseteq V\\setminus\\{s,t\\}$ whose deletion leaves no $s$–$t$ path. Paths are internally vertex-disjoint when their only possible shared vertices are $s,t$. They are edge-disjoint when they share no edge.

Every internal separator meets every terminal path at an internal vertex. Hence $k$ internally vertex-disjoint paths force $|X|\\ge k$: the intersections occur at distinct internal vertices. Similarly, every terminal path crosses every cut $\\delta(S)$ with $s\\in S,t\\notin S$, so $k$ edge-disjoint paths imply $|\\delta(S)|\\ge k$. These are lower bounds on separator sizes obtained from explicit path families, with full justification from distinctness.

An edge set that destroys terminal connection contains an entire terminal cut. Indeed, in the graph after deleting that set, take $S$ to be all vertices reachable from $s$. Then $t\\notin S$, and every original crossing edge must have been deleted, or its other endpoint would also be reachable. This identifies why edge cuts are the natural separating objects.

Protected terminals make an important exception visible. If $s,t$ are adjacent, deleting internal vertices cannot destroy the direct edge, so no internal vertex separator exists. For nonadjacent terminals, deleting all other vertices does separate them. Later connectivity theory will relate maximum disjoint-path families to minimum separators under precise hypotheses. Here we use only the bounds proved above and matching certificates in explicit examples.

## Distance and its layers

**Definition 2.16 (Graph distance).** Within a connected component, $d(u,v)$ is the smallest length of a $u$–$v$ path. For vertices in different components one may write $d(u,v)=\\infty$, but the ordinary finite metric statements below are made within one component.

A path length is a nonnegative integer, and at least one path exists for connected vertices, so the minimum exists. The distance is zero exactly when the vertices agree, and reversing paths gives $d(u,v)=d(v,u)$. Concatenating shortest $u$–$v$ and $v$–$w$ paths gives a walk of length $d(u,v)+d(v,w)$; deleting repetitions produces a path no longer. Therefore
$$
d(u,w)\\le d(u,v)+d(v,w).
$$
These arguments prove that distance is a metric on the vertices of a component.

Every shortest path is induced on its vertices: an edge between two nonconsecutive vertices would replace a segment of length at least two by one edge, yielding a shorter route. For a fixed root $r$, define the layer $L_i=\\{v:d(r,v)=i\\}$. Every edge $uv$ satisfies
$$
|d(r,u)-d(r,v)|\\le1,
$$
because a shortest root-to-$u$ path followed by $uv$ reaches $v$ in at most one extra step, and the same argument works in the other direction.

**Proposition 2.17 (Connectivity needs edges).** A connected graph on $n\\ge1$ vertices has at least $n-1$ edges.

*Proof.* Start with one vertex in a reached set. Until all vertices have been reached, the cut criterion supplies an edge from the reached set to its complement. Retain that edge and add its outside endpoint. Each chosen edge is new because it reaches a previously unreached vertex, and exactly $n-1$ additions are required. Thus the original graph contains at least that many distinct edges. ∎

## Odd cycles exactly obstruct a bipartition

**Definition 2.18 (Bipartite graph).** A graph is bipartite if its vertex set is the disjoint union of two sets $X,Y$ and every edge has one endpoint in each. Either part may be empty.

**Theorem 2.19 (Odd-cycle criterion).** A finite simple graph is bipartite if and only if it contains no odd cycle.

*Proof.* In a bipartite graph, every step changes sides. Returning to the starting side requires an even number of steps, so every cycle has even length.

Conversely, suppose there is no odd cycle. In each component choose a root, put even-distance vertices in $X$ and odd-distance vertices in $Y$, and combine these choices across components. If an edge $uv$ had both endpoints in the same part, shortest root-to-$u$ and root-to-$v$ paths, together with that edge, would form a closed walk of length $d(r,u)+1+d(r,v)$, which is odd. Lemma 2.5 would give an odd cycle, a contradiction. Therefore every edge crosses the partition. For the empty graph both parts are empty and the conclusion holds directly. ∎

### Worked example 2.20 (Layers on a small grid)

Let the vertices be pairs $(i,j)$ with $i\\in\\{0,1\\}$ and $j\\in\\{0,1,2\\}$. Join two vertices when one coordinate agrees and the other differs by one. From root $(0,0)$, the distance is $i+j$: a route needs at least that many coordinate changes, and changing the coordinates monotonically attains it.

The layers are $\\{(0,0)\\}$, then $\\{(1,0),(0,1)\\}$, then $\\{(1,1),(0,2)\\}$, and finally $\\{(1,2)\\}$. Vertices with even and odd coordinate sum give a bipartition. The two shortest routes from $(0,0)$ to $(1,1)$ illustrate that connected graphs can have several shortest paths.

Adding the diagonal edge from $(0,0)$ to $(1,1)$ creates the triangle $(0,0),(1,0),(1,1),(0,0)$. The graph is then not bipartite. The new edge changes the distance layers too, but the explicitly exhibited triangle already provides an exact obstruction; no search through all proposed two-colourings is needed.

## Exercises

### Exercise 2.1
<a id="paths-cycles-connectivity-ex-1"></a>

In the graph with edges $12,23,31,34,45$, classify $(1,2,3,1,3,4)$, $(1,2,3,1)$, $(1,2,3,4)$, and $(4)$ as walks, trails, paths, or cycles, giving their lengths.

<details>
<summary>Hint 1</summary>

**Hint.** Check undirected edge repetitions separately from vertex repetitions.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Traversing $31$ and then $13$ uses the same edge twice. The one-vertex sequence uses no edge.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first is a length-five walk, not a trail because edge $13$ repeats, and not a path because vertices repeat. The second is a length-three closed trail and a cycle; it is not a path under the no-repeated-vertex definition. The third is a length-three path and hence a trail and walk. The last is a length-zero path, trail, and walk, and is closed, but is not a cycle because its length is zero.

</details>

### Exercise 2.2
<a id="paths-cycles-connectivity-ex-2"></a>

Reduce the walk $(a,b,c,b,d,e,d,f)$ to an $a$–$f$ path by deleting repeated portions. Explain why each deletion preserves its endpoints and validity.

<details>
<summary>Hint 1</summary>

**Hint.** Remove the closed excursion from the first occurrence of $b$ to the second.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Do the same for the repeated vertex $d$. The edge following a removed portion still begins at the same vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** Removing the $b,c,b$ excursion leaves $(a,b,d,e,d,f)$. Removing $d,e,d$ leaves $(a,b,d,f)$. Every remaining consecutive pair was already a consecutive pair in the original after identifying the equal endpoints of the deleted excursion. The first and last vertices stay $a,f$, and the final sequence has distinct vertices, so it is a path of length three. The reduction preserves reachability but not the original length seven.

</details>

### Exercise 2.3
<a id="paths-cycles-connectivity-ex-3"></a>

Give a positive-length closed walk containing no cycle. Then prove that an odd-length closed walk cannot be such a counterexample.

<details>
<summary>Hint 1</summary>

**Hint.** A graph consisting of one edge permits an immediate outward-and-return walk.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Split an odd closed walk at an internal repeated vertex. At least one of the two resulting closed walks has odd length.

</details>
<details>
<summary>Solution</summary>

**Solution.** In $K_2$, $(u,v,u)$ is a closed walk of length two and the graph has no cycle. For an odd closed walk, repeatedly split at an internal repeated vertex and retain an odd piece. Its length strictly decreases, so the process terminates with an odd closed walk having no internal repetition. A simple graph excludes a length-one loop, and an odd length cannot equal two, so the final piece is an odd cycle. Thus oddness supplies the extra hypothesis missing from the general closed-walk claim.

</details>

### Exercise 2.4
<a id="paths-cycles-connectivity-ex-4"></a>

For the graph on $[8]$ with edges $12,23,31,45,56,67,74$, list its components. Add $37$, then determine how deleting $12$ or deleting $37$ affects the component count.

<details>
<summary>Hint 1</summary>

**Hint.** Include vertex eight even though it occurs in no edge.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The new edge joins two old components. Compare a triangle edge with the sole edge between the old component sets.

</details>
<details>
<summary>Solution</summary>

**Solution.** Initially the components have vertex sets $\\{1,2,3\\}$, $\\{4,5,6,7\\}$, and $\\{8\\}$, giving count three. Adding $37$ merges the first two and gives count two. Deleting $12$ afterwards leaves the alternative route $1,3,2$, so that count stays two. Deleting $37$ instead separates the merged regions again, restoring count three. Thus $37$ is a bridge in the augmented graph and $12$ is not.

</details>

### Exercise 2.5
<a id="paths-cycles-connectivity-ex-5"></a>

Two triangles on $\\{1,2,3\\}$ and $\\{4,5,6\\}$ are joined by the single edge $34$. Find every bridge and cut vertex, and give a singleton-cut certificate for each bridge.

<details>
<summary>Hint 1</summary>

**Hint.** An edge on a cycle has an alternative endpoint route. Vertex deletion removes more than one edge at a time.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the cut with side $\\{1,2,3\\}$, and inspect what happens when either endpoint of the joining edge is deleted.

</details>
<details>
<summary>Solution</summary>

**Solution.** The only bridge is $34$, since it is the sole member of $\\delta(\\{1,2,3\\})$, while each other edge lies on a triangle. Vertices three and four are cut vertices: removing either leaves its two triangle companions separated from the other triangle. Removing one, two, five, or six leaves a connected graph, because its remaining triangle vertex still reaches the joining edge. Thus exactly the endpoints of the joining edge are cut vertices in this example.

</details>

### Exercise 2.6
<a id="paths-cycles-connectivity-ex-6"></a>

Construct a connected simple graph with no bridges and a cut vertex. Prove both assertions using cycles and component counts, rather than a drawing alone.

<details>
<summary>Hint 1</summary>

**Hint.** Let two cycles meet at one vertex while keeping their edge sets disjoint.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Every edge then lies on a cycle, but deleting the shared vertex separates the remaining pieces.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take vertices $\\{r,a,b,c,d\\}$ and edges $ra,ab,br,rc,cd,dr$, two triangles sharing only $r$. All vertices reach $r$, so the graph is connected. Every edge is on a triangle and hence is not a bridge. Deleting $r$ leaves the two edges $ab$ and $cd$ as separate components, increasing the count from one to two. Therefore $r$ is a cut vertex. Absence of edge vulnerability does not imply absence of vertex vulnerability.

</details>

### Exercise 2.7
<a id="paths-cycles-connectivity-ex-7"></a>

For $C_7$ with vertices $0,\\ldots,6$ in cyclic order, prove
$$
d(i,j)=\\min\\{|i-j|,7-|i-j|\\}
$$
and determine its diameter, the maximum distance between vertices.

<details>
<summary>Hint 1</summary>

**Hint.** Between distinct vertices, the two directions around the cycle give paths of the two displayed lengths.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Once a simple path chooses its first direction, every internal vertex has only one way to continue without immediately repeating a vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** The two cycle arcs give lengths $|i-j|$ and $7-|i-j|$. Any simple path must follow one of these arcs: at an internal vertex of degree two, returning to the predecessor is forbidden, so continuation is forced until the target is reached. Thus the shortest length is the stated minimum, with zero when $i=j$. The minimum is at most three because the two positive arc lengths sum to seven, and distance three is attained, for example between zero and three. The diameter is therefore three.

</details>

### Exercise 2.8
<a id="paths-cycles-connectivity-ex-8"></a>

Prove that every shortest path is an induced subgraph on its vertices. Does the converse hold: must every induced path be a shortest path between its endpoints?

<details>
<summary>Hint 1</summary>

**Hint.** A chord between nonconsecutive vertices shortens a path.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the converse, an induced path may have an alternative route using vertices outside its vertex set. Try a five-cycle.

</details>
<details>
<summary>Solution</summary>

**Solution.** If a shortest path had an edge joining its $i$th and $j$th vertices with $j\\ge i+2$, replacing that segment by the one edge would create a shorter endpoint walk, and hence a shorter path. Thus no chord exists and its induced subgraph contains exactly its path edges. The converse fails in $C_5$: the path $(1,2,3,4)$ is induced on those four vertices, but its endpoints have the shorter route $(1,5,4)$ of length two. Inducedness excludes internal chords, not shortcuts through outside vertices.

</details>

### Exercise 2.9
<a id="paths-cycles-connectivity-ex-9"></a>

Suppose a finite simple graph has no odd cycle and may be disconnected. Construct a bipartition and prove that every edge crosses it, including the isolated-vertex and empty-graph cases.

<details>
<summary>Hint 1</summary>

**Hint.** Choose a root separately in each nonempty component and separate vertices by the parity of their distance from that root.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A same-parity edge, together with two root paths, gives an odd closed walk. Use the odd-cycle reduction.

</details>
<details>
<summary>Solution</summary>

**Solution.** In each component put even-distance vertices in $X$ and odd-distance vertices in $Y$. An edge within either part would form an odd closed walk with shortest paths from that component's root, because the two path lengths have the same parity and the added edge contributes one. That walk contains an odd cycle, contradicting the hypothesis. Hence every edge crosses. An isolated vertex is its own root and can be placed in $X$; it has no edge to violate the rule. For the empty graph take $X=Y=\\varnothing$.

</details>

### Exercise 2.10
<a id="paths-cycles-connectivity-ex-10"></a>

In the triangle with terminals $s,t$ and third vertex $a$, exhibit two internally vertex-disjoint terminal paths. Explain why there is no internal vertex separator, but the minimum edge cut separating the terminals has size two.

<details>
<summary>Hint 1</summary>

**Hint.** One path uses the direct terminal edge and therefore has no internal vertex.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Internal deletion cannot remove that edge. For edges, combine the two-path lower bound with the cut around one terminal.

</details>
<details>
<summary>Solution</summary>

**Solution.** The paths $(s,t)$ and $(s,a,t)$ are internally vertex-disjoint. The only deletable internal vertex is $a$, whose deletion leaves $st$, so no permitted internal separator exists. The paths are also edge-disjoint, forcing any separating edge set to have at least two members. The cut $\\delta(\\{s\\})=\\{st,sa\\}$ has size two and separates them when deleted. Thus the edge optimum is exactly two. Protecting adjacent terminals is why an unrestricted vertex-separator equality would be false here.

</details>

## Sources

This original exposition develops the route, component, and cut ideas in Euler's [Discrete Mathematics graph chapter](/books/library-book-discrete-mathematics-proof-counting-structure/graphs-trees-connectivity/) and the Quarto seed modules/textbooks/combinatorics/chapters/13-connectivity-euler-hamilton.qmd, “Connectivity, Euler tours, and Hamilton cycles”. The present chapter establishes elementary path and separator results; the seed's further disjoint-path theorems require their own later proofs. The original examples and ten exercises here are newly composed.

Primary author-written parallel reading is Reinhard Diestel, [Graph Theory, “The Basics”](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf), for paths, connectivity, and bipartite graphs. Oscar Levin's [graph-theory chapter](https://discrete.openmathbooks.org/dmoi4/ch_graphtheory.html) provides an introductory comparison. These are references for further study, not copied exercise sources. British spelling is used; original prose is licensed CC BY-SA 4.0.

## Summary

Walks may repeat edges, trails may repeat vertices, and paths repeat neither. Deleting repeated portions proves that a walk suffices for reachability. Closed trails and odd closed walks force cycles under different hypotheses. Connection partitions the vertices, while cuts give certificates separating components and bridges.

An edge is a bridge precisely when it has no alternative endpoint path, lies on no cycle, or forms a singleton cut. Vertex deletion has different effects, and protected-terminal separators require care with adjacency. Shortest-path distance supplies a metric and layers; parity of those layers proves the odd-cycle characterisation of bipartite graphs. In [Trees](trees.md), uniqueness of paths and the absence of cycles will become equivalent descriptions of a particularly important class.

`;export{e as default};