
# Eulerian and Hamiltonian Graphs

Covering every edge and visiting every vertex are different requirements. An inspection route may revisit a junction while using each street once. A tour through a set of locations may ignore many available streets while visiting each location once. The first problem is governed by edge parity and connectivity of the edge-containing part. The second is governed by more global restrictions, and parity alone does not decide it.

The required preparation is [Graphs, Degrees, and Isomorphism](graphs-degrees-isomorphism.md), [Paths, Cycles, and Connectivity](paths-cycles-connectivity.md), and [Trees](trees.md), together with proof by contradiction and finite counting. The elementary construction of Euler trails and the first Hamilton obstructions are developed in [Euler Trails and Hamilton Cycles](../discrete-mathematics-proof-counting-structure/euler-hamilton.md). We use that foundation rather than repeat its entire trail-splicing argument. This chapter develops the surrounding structure: even cuts, cycle decompositions, balanced orientations, vertex-deletion obstructions, and a closure operation that proves Ore's and Dirac's sufficient conditions.

Unless another convention is explicitly introduced, $G=(V,E)$ is finite, undirected and simple. An edge has two distinct endpoints, and there are no parallel edges. A path has no repeated vertex; a trail has no repeated edge. A cycle has at least three vertices and repeats its first vertex only to close. These conventions matter at small orders and when comparing the two covering questions.

## Recall precisely what the Euler criterion says

**Definition 4.1 (Euler and Hamilton coverage).** An Euler circuit is a closed trail using every edge exactly once. An open Euler trail uses every edge exactly once and has different endpoints. A Hamilton path contains every vertex exactly once. A Hamilton cycle is a cycle containing every vertex.

Write $V_+=\{v:d(v)>0\}$ for the vertices incident with an edge. The previously proved Euler criterion says that, when $E\ne\varnothing$, an Euler circuit exists exactly when all degrees are even and the subgraph on $V_+$ is connected. An open Euler trail exists exactly when that subgraph is connected and exactly two vertices have odd degree. Its endpoints are those odd vertices.

This recalled theorem has two qualifications that are easy to lose. Isolated vertices do not matter to edge coverage, but two separate edge-containing components cannot be covered by one walk. For an edgeless graph with at least one vertex, a length-zero walk based at a vertex is an Euler circuit under our convention. On a graph with no vertices there is no based walk. Hamilton cycles in a simple graph require at least three vertices and must include isolates if any exist, which makes an isolate an obstruction whenever there are other vertices.

The Euler construction in the prerequisite chapter maintains a closed trail and even residual degrees, splicing in another closed excursion whenever unused edges remain. Its finite progress measure is the number of unused edges. The structural equivalences below explain why cycles and balanced directions naturally appear around that construction, without treating a first closed excursion as a completed route.

**Definition 4.2 (Cuts, decomposition and balanced orientation).** For $S\subseteq V$, the edge cut $\delta(S)$ contains the edges with one endpoint in $S$ and one outside. A cycle decomposition partitions $E$ into edge-disjoint cycles. An orientation chooses one direction for each edge; it is balanced when every vertex has equal incoming and outgoing degrees.

A cycle decomposition permits different cycles to share vertices. The empty family decomposes an empty edge set. An orientation does not duplicate an edge: choosing $u\to v$ does not retain a second copy $v\to u$.

**Theorem 4.3 (Four descriptions of even-degree graphs).** For a finite simple graph, the following conditions are equivalent: every degree is even; every cut has even size; the edge set has a cycle decomposition; and the graph has a balanced orientation.

*Proof.* For every $S\subseteq V$, count edge incidences at vertices of $S$:
$$\sum_{v\in S}d(v)=2|E(G[S])|+|\delta(S)|.$$
If all degrees are even, every cut is even. Conversely, taking $S=\{v\}$ shows that even cuts imply even degrees.

Suppose all degrees are even and some edges remain. In a component containing an edge, every nonisolated vertex has degree at least two. Take a longest path in that component. Every neighbour of its last vertex lies on the path, or the path could be extended. Besides its predecessor, it has another neighbour on the path, so the corresponding final segment together with that extra edge forms a cycle. Remove the cycle's edges. Every vertex loses either zero or two incident edges, preserving even degrees. Repeating consumes edges and therefore terminates, producing a cycle decomposition.

Orient each cycle consistently around itself. At a vertex, each cycle using it contributes one incoming and one outgoing edge. Since the cycles partition the edges, the resulting orientation is balanced. Finally, a balanced orientation gives $d(v)=d^+(v)+d^-(v)=2d^+(v)$, so every undirected degree is even. All arguments include the edgeless case. ∎

**Worked Example 4.4 (An even cut need not contain a cycle).** Let $G$ be a six-cycle with cyclic order $0,1,2,3,4,5,0$, and take $S=\{0,2,4\}$. Every edge crosses the cut, so $|\delta(S)|=6$, even. Orienting the cycle consistently gives one incoming and one outgoing edge at each vertex.

The theorem says that the whole edge set admits a cycle decomposition, not that every cut considered as an edge set must itself be a cycle in every example. For a different choice $S=\{0\}$, the cut consists of the two edges $01,05$, which form a two-edge path rather than a cycle. Cut parity is a numerical consequence of even degrees; it is not a claim about the shape of each cut.

An immediate consequence is that a graph with all degrees even has no bridge. If a bridge existed, choose one side of the component after deleting it; that side would have a cut of size one. An open Euler trail may contain a bridge, so the no-bridge consequence belongs to even-degree graphs and Euler circuits, not to every edge-covering trail.

**Theorem 4.5 (Balanced orientations are strongly connected on the support).** If $E\ne\varnothing$, the edge-containing part is connected, and all degrees are even, then $G[V_+]$ admits an orientation in which incoming and outgoing degrees agree and every vertex can reach every other by a directed path.

*Proof.* Obtain a balanced orientation from Theorem 4.3. Fix an active vertex $s$, and let $R$ be the set reachable from it by directed paths. No edge is directed from $R$ to its complement, since its endpoint would then be reachable. Sum $d^+(v)-d^-(v)=0$ over $v\in R$. Internal directed edges cancel, leaving
$$0=\#\{\text{edges directed out of }R\}-\#\{\text{edges directed into }R\}.$$
The first count is zero, so the second is also zero. Thus there is no underlying edge between $R$ and its complement in $V_+$. Connectedness and $s\in R$ force $R=V_+$. Since $s$ was arbitrary, the orientation is strongly connected. ∎

An isolated vertex would defeat strong connectivity on the full vertex set, which explains the restriction to $V_+$. The proof also separates two roles: local balance controls the direction of a cut, while undirected connectivity rules out a cut with no edges. Neither hypothesis alone supplies the conclusion.

## Hamilton coverage has different obstructions

**Proposition 4.6 (Deletion and independence obstructions).** If a finite simple graph on $n\ge3$ vertices has a Hamilton cycle, it is connected, has minimum degree at least two, and for every nonempty $S\subseteq V$,
$$c(G-S)\le |S|,$$
where $c$ counts connected components and $c$ of the empty graph is zero. Moreover every independent set has size at most $\lfloor n/2\rfloor$.

*Proof.* The cycle supplies connectivity and two distinct incident edges at each vertex. Delete a nonempty set $S$ from its cyclic order. The remaining vertices occur in at most $|S|$ nonempty consecutive blocks: each block begins immediately after a deleted vertex, and different blocks have different preceding deleted vertices. The cycle edges connect each block. Extra graph edges may merge blocks but cannot split them, giving the component inequality, including deletion of all vertices.

For an independent set $I$, orient the Hamilton cycle and assign to each vertex of $I$ its successor. The successors are distinct and none belongs to $I$, because an independent set contains no adjacent pair. Thus there is an injection from $I$ into $V\setminus I$, so $|I|\le n-|I|$ and $|I|\le\lfloor n/2\rfloor$. ∎

Deleting one vertex from a Hamilton cycle leaves a spanning path, so a Hamiltonian graph has no cut vertex. These are necessary conditions. None of the arguments proves that satisfying the displayed conditions constructs a Hamilton cycle. A failed sufficient test and a proved obstruction are also different: failure of Dirac's hypothesis below does not establish non-Hamiltonicity.

**Worked Example 4.7 (A theta graph separates the questions).** Take vertices $r,s,a,b,c$ and edges $ra,as,rb,bs,rc,cs$. These are three internally disjoint two-edge routes from $r$ to $s$.

The degrees of $r,s$ are three and the other degrees are two, so there is an open Euler trail:
$$r,a,s,b,r,c,s.$$
Its six steps use each listed edge once. There is no Euler circuit because two degrees are odd. The graph is bipartite with parts $\{r,s\}$ and $\{a,b,c\}$. A cycle alternates between the parts, so a Hamilton cycle would have to use equally many vertices from each, impossible here. Nevertheless $a,r,b,s,c$ is a Hamilton path. Thus an open Euler trail, a Hamilton path and a Hamilton cycle have genuinely different requirements.

More generally a cycle in a bipartite graph uses the same number of vertices from each part. A path uses part sizes differing by at most one. These statements follow by reading alternate positions along the vertex order; they are structural restrictions, not consequences of degree parity.

## A closure lemma turns degree sums into a cycle

**Lemma 4.8 (Hamilton closure step).** Let $G$ be a finite simple graph on $n\ge3$ vertices, and let $u,v$ be nonadjacent vertices satisfying $d_G(u)+d_G(v)\ge n$. Then $G$ has a Hamilton cycle if and only if the graph $G+uv$, obtained by adding that edge, has one.

*Proof.* A Hamilton cycle already in $G$ remains in the enlarged graph. For the converse, take a Hamilton cycle in $G+uv$. If it avoids the new edge, it is already in $G$. Otherwise deleting $uv$ leaves a spanning path
$$x_1=u,x_2,\ldots,x_n=v$$
using only original edges.

For indices $i\in\{1,\ldots,n-1\}$, put
$$A=\{i:ux_{i+1}\in E(G)\},\qquad B=\{i:x_iv\in E(G)\}.$$
Every neighbour of $u$ occurs once among $x_2,\ldots,x_n$, and every neighbour of $v$ once among $x_1,\ldots,x_{n-1}$. Hence $|A|=d_G(u)$ and $|B|=d_G(v)$. Their sizes sum to at least $n$, while there are only $n-1$ indices, so some $i$ belongs to both.

Use the cycle
$$x_1,x_2,\ldots,x_i,x_n,x_{n-1},\ldots,x_{i+1},x_1.$$
Its two joining edges exist by membership in $B$ and $A$, and all other edges are path edges. Nonadjacency of $u,v$ excludes the degenerate choices $i=1$ and $i=n-1$, so both displayed segments fit the usual cycle interpretation. Every vertex occurs once before closure. This is a Hamilton cycle in $G$. ∎

The argument is a controlled reversal of part of a spanning path. Adding an arbitrary edge does not preserve Hamiltonicity backwards. The degree-sum condition provides the two cross-connections needed to remove the artificially added edge.

**Theorem 4.9 (Ore).** A finite simple graph on $n\ge3$ vertices is Hamiltonian if every pair of nonadjacent vertices $u,v$ satisfies $d(u)+d(v)\ge n$.

*Proof.* Add missing edges one at a time until the graph is complete. For every added edge, its endpoints satisfied the degree-sum condition in the original graph, and their degrees have only increased. Lemma 4.8 therefore preserves Hamiltonicity in both directions at each step. The final graph $K_n$ has the Hamilton cycle given by any ordering of all vertices followed by its first vertex. Applying the equivalence backwards through the finite sequence gives a Hamilton cycle in the original graph. ∎

**Corollary 4.10 (Dirac).** A finite simple graph on $n\ge3$ vertices with minimum degree at least $n/2$ has a Hamilton cycle.

*Proof.* For nonadjacent $u,v$, both degrees are at least $n/2$, so their sum is at least $n$. Ore's theorem applies. ∎

The threshold is an inequality over integers: for odd $n$, degree at least $n/2$ means degree at least $\lceil n/2\rceil$. Connectedness need not be added to these two sufficient theorems; their hypotheses already force the Hamilton conclusion. In contrast, an even-degree condition by itself permits several disconnected cycles.

**Worked Example 4.11 (Ore succeeds when Dirac does not apply).** Begin with a clique on six vertices $a,b,c,d,e,f$. Add a vertex $z$ adjacent exactly to $a,b$. Prove Hamiltonicity using Ore, and exhibit a cycle.

The order is seven. Vertex $z$ has degree two, so Dirac's minimum-degree hypothesis, which would require degree at least four, fails. The only nonadjacent pairs are $z$ with one of $c,d,e,f$. Each of those four clique vertices has degree five, so each relevant sum is $2+5=7$. Ore applies. One explicit Hamilton cycle is
$$z,a,c,d,e,f,b,z.$$
Failure of the stronger minimum-degree test did not mean failure of Hamiltonicity; checking the actual nonadjacent pairs revealed enough structure.

Even Ore's condition is sufficient rather than necessary. The cycle $C_8$ is Hamiltonian by definition, but every vertex has degree two, so nonadjacent degree sums are four, below eight. Degree conditions are valuable guarantees within their scope, not universal replacements for the Hamilton problem.

## Certificates, transformations and the next question

An exhibited Hamilton cycle is checked by verifying its edges and its vertex list. An exhibited Euler circuit is checked by verifying every edge is used exactly once. These are different certificates even when their lengths happen to agree. The cut and deletion obstructions certify nonexistence under specific structural conditions, while the closure lemma transforms one Hamilton existence question into another without claiming that every graph eventually closes to a complete graph.

Repeated closure steps terminate because each step adds a previously absent edge to a finite simple graph. If the process stops before becoming complete, the preserved equivalence still holds, but the stopping graph need not answer the question immediately. In particular, “no admissible closure edge remains” is not a non-Hamiltonicity certificate. A sparse cycle already demonstrates that limitation.

A Hamilton cycle of even order also selects disjoint pairs: take alternate cycle edges. Those edges cover every vertex exactly once. The converse fails, since a path on four vertices has such a pairing without having a Hamilton cycle. The next two chapters make pairing itself the central question, first in bipartite graphs and then in general graphs with odd-component obstructions.

## Exercises

### Exercise 4.1
<a id="eulerian-hamiltonian-graphs-ex-1"></a>

Let $G$ be a five-cycle together with two isolated vertices. Decide whether it has an Euler circuit, an open Euler trail, a Hamilton path or a Hamilton cycle. State your conventions.

<details>
<summary>Hint 1</summary>

Edge coverage can ignore isolated vertices, whereas Hamilton coverage cannot.

</details>
<details>
<summary>Hint 2</summary>

Apply the Euler criterion to $V_+$ and note that a path containing other vertices cannot include an isolate.

</details>
<details>
<summary>Solution</summary>

The edge-containing part is a connected cycle and all degrees are even, including the zero degrees. Thus an Euler circuit exists, namely a traversal of the five-cycle. There is no open Euler trail because there are no odd-degree endpoints. Neither Hamilton path nor Hamilton cycle exists: the graph has other vertices besides each isolate, and no edge permits a path to enter or leave an isolated vertex. A length-zero path cannot contain all seven vertices.

</details>

### Exercise 4.2
<a id="eulerian-hamiltonian-graphs-ex-2"></a>

Prove that an even-degree finite simple graph has no bridge, using the cut-incidence identity. Explain why this does not rule out bridges in graphs with open Euler trails.

<details>
<summary>Hint 1</summary>

A bridge determines a cut with exactly one crossing edge.

</details>
<details>
<summary>Hint 2</summary>

Compare the parity of $\sum_{v\in S}d(v)$ with $2|E(G[S])|+|\delta(S)|$.

</details>
<details>
<summary>Solution</summary>

If $e$ were a bridge, let $S$ be the vertices on one side of its original component after removing $e$. Then $\delta(S)=\{e\}$. The identity would equate an even degree sum to an even integer plus one, a contradiction. For an open Euler trail, two degrees are odd, so that even-degree argument is unavailable. The one-edge graph has an open Euler trail and its only edge is a bridge.

</details>

### Exercise 4.3
<a id="eulerian-hamiltonian-graphs-ex-3"></a>

Give a cycle decomposition of $K_5$ on vertices $0,1,2,3,4$, then use it to specify a balanced orientation. Verify that no edge is omitted or repeated.

<details>
<summary>Hint 1</summary>

Start with the five-cycle $0,1,2,3,4,0$.

</details>
<details>
<summary>Hint 2</summary>

The five remaining edges form another five-cycle using jumps of two modulo five.

</details>
<details>
<summary>Solution</summary>

Use cycles $0,1,2,3,4,0$ and $0,2,4,1,3,0$. The first uses $01,12,23,34,04$; the second uses $02,24,14,13,03$. These are ten different edges, all $\binom52$ edges of $K_5$. Direct both cycles in the listed order. Each vertex receives one incoming and one outgoing edge from each cycle, so its incoming and outgoing degrees are both two.

</details>

### Exercise 4.4
<a id="eulerian-hamiltonian-graphs-ex-4"></a>

Classify Euler and Hamilton coverage for $K_{2,4}$. In particular, determine whether a Hamilton path can exist.

<details>
<summary>Hint 1</summary>

Compute degrees separately in the two bipartition classes.

</details>
<details>
<summary>Hint 2</summary>

Along a bipartite path, the numbers of vertices from the two parts differ by at most one.

</details>
<details>
<summary>Solution</summary>

The two vertices in the smaller part have degree four and the four in the larger part have degree two. The graph is connected and all degrees are even, so it has an Euler circuit and no open Euler trail. A Hamilton cycle would require equal part sizes, impossible for two and four. A Hamilton path would require the part sizes to differ by at most one, also impossible. Edge coverage therefore succeeds although neither form of Hamilton coverage does.

</details>

### Exercise 4.5
<a id="eulerian-hamiltonian-graphs-ex-5"></a>

A graph contains the path $1,2,3,4,5,6$ and the extra edges $13,14,26,36$, but no edge $16$. Use the closure-step construction to exhibit a Hamilton cycle without adding $16$.

<details>
<summary>Hint 1</summary>

The endpoints each have degree at least three. Look for an index $i$ with both $1(i+1)$ and $i6$ present.

</details>
<details>
<summary>Hint 2</summary>

The choice $i=2$ joins the forward initial segment to the reversed final segment.

</details>
<details>
<summary>Solution</summary>

At $i=2$, the needed joining edges are $13$ and $26$. The resulting cycle is $1,2,6,5,4,3,1$. Its edges are $12,26,65,54,43,31$, all given, and it contains every vertex once before returning to $1$. The forbidden edge $16$ is not used. This explicitly implements the reversal in Lemma 4.8.

</details>

### Exercise 4.6
<a id="eulerian-hamiltonian-graphs-ex-6"></a>

For $n\ge5$, take $K_{n-1}$ and add a vertex adjacent to exactly two clique vertices. Prove that Ore's hypothesis holds while Dirac's hypothesis fails. Give the shape of a Hamilton cycle.

<details>
<summary>Hint 1</summary>

The only nonadjacent pairs involve the new vertex.

</details>
<details>
<summary>Hint 2</summary>

A clique vertex not adjacent to the new vertex has degree $n-2$.

</details>
<details>
<summary>Solution</summary>

The new vertex $z$ has degree two. A nonneighbour in the clique has degree $n-2$, so every nonadjacent sum is $n$. Ore applies. Since $2<n/2$ for $n\ge5$, Dirac's hypothesis fails. If the two neighbours are $a,b$, take the cycle beginning $z,a$, then list every other clique vertex, then $b,z$. All internal transitions are clique edges, and the two edges at $z$ are its prescribed neighbours.

</details>

### Exercise 4.7
<a id="eulerian-hamiltonian-graphs-ex-7"></a>

Take four disjoint edges $a_ib_i$ for $1\le i\le4$ and three additional vertices $s_1,s_2,s_3$. Join each $s_j$ to every endpoint of those edges, and include no other edges. Prove that there is a Hamilton path but no Hamilton cycle.

<details>
<summary>Hint 1</summary>

Delete the three vertices $s_1,s_2,s_3$ to test the component obstruction.

</details>
<details>
<summary>Hint 2</summary>

For a path, use each $s_j$ to join one two-vertex block to the next.

</details>
<details>
<summary>Solution</summary>

Deleting $S=\{s_1,s_2,s_3\}$ leaves four components, the four disjoint edges. Since $4>|S|=3$, Proposition 4.6 rules out a Hamilton cycle. The sequence $a_1,b_1,s_1,a_2,b_2,s_2,a_3,b_3,s_3,a_4,b_4$ is a Hamilton path: every consecutive pair is either one of the original four edges or an allowed edge incident with an $s_j$, and every vertex appears exactly once.

</details>

### Exercise 4.8
<a id="eulerian-hamiltonian-graphs-ex-8"></a>

Construct a connected simple graph with minimum degree two, an Euler circuit and no Hamilton cycle. Prove all three assertions.

<details>
<summary>Hint 1</summary>

Join two cycles by identifying one vertex, without adding a bridge.

</details>
<details>
<summary>Hint 2</summary>

Deleting the shared vertex exposes a Hamilton obstruction.

</details>
<details>
<summary>Solution</summary>

Take two four-cycles sharing exactly one vertex $v$. The graph is connected. The shared vertex has degree four and all six other vertices have degree two, so its minimum degree is two and it has an Euler circuit. Deleting $v$ leaves the two disjoint three-vertex paths, so the component count is two for a deleted set of size one. No Hamilton cycle exists by Proposition 4.6. Connectedness and minimum degree two alone are therefore insufficient.

</details>

### Exercise 4.9
<a id="eulerian-hamiltonian-graphs-ex-9"></a>

For every $k\ge2$, explain why $K_{k,k+1}$ is non-Hamiltonian despite minimum degree $(|V|-1)/2$. Also give an even-order family showing that minimum degree $n/2-1$ does not guarantee Hamiltonicity.

<details>
<summary>Hint 1</summary>

Use bipartition sizes for the first family.

</details>
<details>
<summary>Hint 2</summary>

For even order $n=2k$, consider two disjoint cliques of order $k$.

</details>
<details>
<summary>Solution</summary>

The graph $K_{k,k+1}$ has order $2k+1$ and minimum degree $k=(n-1)/2$, but its unequal bipartition classes cannot support a spanning cycle. For even $n=2k$ with $k\ge2$, the graph consisting of two disjoint $K_k$ components has minimum degree $k-1=n/2-1$ and no Hamilton cycle because it is disconnected. These examples demonstrate the sharp integer nature of Dirac's threshold; they do not contradict its stronger hypothesis.

</details>

### Exercise 4.10
<a id="eulerian-hamiltonian-graphs-ex-10"></a>

Prove that a graph with a Hamilton cycle of even order has a perfect matching. Give a connected counterexample to the converse, defining a perfect matching as disjoint edges covering every vertex.

<details>
<summary>Hint 1</summary>

List the cycle vertices in cyclic order and choose alternate edges.

</details>
<details>
<summary>Hint 2</summary>

A four-vertex path has a natural pairing but has endpoints of degree one.

</details>
<details>
<summary>Solution</summary>

Write the Hamilton cycle as $v_1,v_2,\ldots,v_{2r},v_1$. The edges $v_1v_2,v_3v_4,\ldots,v_{2r-1}v_{2r}$ are pairwise disjoint and cover all vertices, giving a perfect matching. Conversely, the connected path $a,b,c,d$ has perfect matching $\{ab,cd\}$ but no Hamilton cycle: its endpoints have degree one and cannot have the two cycle neighbours required in a spanning cycle. Pairing all vertices is weaker than arranging them on one cycle.

</details>

## Sources and provenance

This is original exposition and original exercise development, using the unchanged local seeds in the Discrete Mathematics chapter **Euler Trails and Hamilton Cycles** and Quarto's **Connectivity, Euler and Hamilton** chapter. The elementary Euler criterion is recalled from its linked full proof. The closure method is attributed to J. A. Bondy and V. Chvátal, [“A method in graph theory”](https://www.sciencedirect.com/science/article/pii/0012365X76900789), *Discrete Mathematics* 15 (1976), 111–135. Reinhard Diestel's [*Graph Theory*, contents and reading map](https://www.maths.tcd.ie/EMIS/monographs/Diestel/en/contents.html) identifies the standard Euler-tour and Hamilton-cycle treatments for further study. The closure step, Ore's condition and Dirac's condition are proved above rather than invoked as unproved external facts.

## Summary

Euler coverage concerns edges, with isolates handled separately; Hamilton coverage concerns every vertex. Even degrees are equivalent to even cuts, a cycle decomposition and a balanced orientation, and connected edge support promotes balance to strong connectivity. Hamilton cycles impose vertex-deletion and independence restrictions that parity cannot replace. The closure step preserves Hamiltonicity when a missing edge's endpoint degrees sum to at least the order; it yields Ore's and Dirac's sufficient conditions without making them necessary. A witness cycle, an obstruction and an inapplicable sufficient test carry different logical meanings. In [Bipartite Matching: Hall and Koenig](bipartite-matching.md), disjoint vertex pairings become the central object, with exact existence and optimality certificates.
