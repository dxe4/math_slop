
# Euler Trails and Hamilton Cycles

## Two meanings of covering a graph

A street inspection might require traversing every street exactly once. A visit schedule might instead require visiting every location exactly once. In a graph model, the first requirement concerns edges and the second concerns vertices. Although both sound like route planning, they lead to different mathematical questions and different methods.

Euler's question has a complete answer in terms of degrees and connectivity, together with a constructive method for finding the required route. Hamilton's question does not have the same degree-parity answer. We will prove several obstructions and one useful sufficient condition, Dirac's theorem, while distinguishing those statements from a general decision procedure.

Required preparation is [Graphs, Trees, and Connectivity](graphs-trees-connectivity.md): degree, components, paths, cycles, and the handshake lemma. We also use proof by contradiction, a longest-object argument, and finite counting. Throughout this chapter, $G=(V,E)$ is a finite, undirected, simple graph with at least one vertex. An edge joins two distinct vertices, and at most one edge joins a particular pair. The Euler arguments can be extended to other graph conventions, but those extensions are not assumed here.

## Walks that use every edge

**Definition 11.1 (Euler trail and circuit).** A trail is a walk that repeats no edge, although it may repeat vertices. An Euler trail uses every edge of the graph exactly once. It is open if its first and last vertices differ. An Euler circuit is a closed Euler trail. A circuit may revisit vertices; it need not be a cycle.

A path, by contrast, repeats no vertex. Some texts use “Euler path” for an Euler trail, but we retain the distinction between path and trail from the preceding chapter. An Euler circuit has length $|E|$, because each step uses one edge. Repeated visits to a busy junction do not violate its definition.

An isolated vertex has degree zero. It has no edge that an edge-covering trail needs to use. Put $V_+=\{v\in V:\deg(v)>0\}$. If $E\ne\varnothing$, an Euler trail can exist only when all vertices in $V_+$ lie in one connected component. Isolated vertices elsewhere are irrelevant to this condition. We say explicitly that the edge-containing part is connected, rather than demand that the whole graph be connected.

For an edgeless graph, our convention permits the length-zero walk at any vertex as an Euler circuit: it uses every edge, of which there are none. It does not visit other isolated vertices, and is not an open trail. This convention separates edge coverage from vertex coverage even in the smallest cases.

**Proposition 11.2 (Necessary Euler conditions).** If a graph with at least one edge has an Euler circuit, its edge-containing part is connected and every vertex has even degree. If it has an open Euler trail from $s$ to $t$, its edge-containing part is connected, $s,t$ have odd degree, and every other vertex has even degree.

*Proof.* Every edge is encountered along one walk, so all its endpoints occur in the same connected component. For the degree condition, pair each arrival at a vertex with the following departure. At a vertex other than the endpoints of an open trail, these visits pair all incident edges used by the trail. Because every edge is used exactly once, its total degree is even. At the starting vertex of an open trail there is an unpaired initial departure; at the terminal vertex there is an unpaired final arrival. Their degrees are therefore odd. For a closed trail, the final arrival pairs with the initial departure at the common start, leaving all degrees even. ∎

These conditions must be checked together. Two disjoint triangles have six even-degree vertices but no single trail can cover their edges. A triangle together with an isolated vertex does have an Euler circuit: the triangle's edges can all be used without visiting the isolate.

## Why closed trails can be spliced

**Lemma 11.3 (Parity prevents a wrong stopping point).** In a finite graph whose degrees are all even, start at a vertex incident with an edge and repeatedly follow any unused incident edge until none is available. The resulting trail ends at its starting vertex.

*Proof.* Finiteness guarantees that the process stops, since each step consumes a new edge. Let $s$ be the start and $w$ the stopping vertex. If $w\ne s$, the used trail has an odd number of incident used edges at $w$: arrivals and departures pair except for its final arrival. The total degree of $w$ is even. Thus the number of unused incident edges is odd and, being nonnegative, is at least one. This contradicts stopping at $w$. Therefore $w=s$. ∎

The lemma does not claim that the first closed trail uses every edge. It may close after circling one small part of the graph. The rest of the proof explains how to insert the missing parts.

**Theorem 11.4 (Euler circuit criterion and construction).** If $E\ne\varnothing$, a finite undirected simple graph has an Euler circuit if and only if its edge-containing part is connected and every degree is even.

*Proof of sufficiency.* Choose a vertex incident with an edge. Lemma 11.3 constructs a closed trail $T$. Removing its used edges leaves even degrees at every vertex, because a closed trail uses an even number of incident edges at each vertex.

If edges remain, some vertex of $T$ is incident with an unused edge. To justify this, let $U$ be the set of vertices visited by $T$. If a remaining edge has an endpoint in $U$, we are done. Otherwise take a path in the edge-containing component from $U$ to an endpoint of a remaining edge. Its first edge leaving $U$ is unused, because every used edge has both endpoints in $U$. That edge supplies the required vertex in $U$.

Starting at such a vertex $v$, apply Lemma 11.3 in the remaining-edge graph to obtain a closed trail $C$ of unused edges based at $v$. Splice $C$ into $T$: follow $T$ up to an occurrence of $v$, follow all of $C$ back to $v$, and continue along $T$. The result is a closed trail because the two pieces use disjoint sets of edges. It uses more edges than $T$ did.

Repeat while unused edges remain. Every repetition consumes at least one new edge, so the finite process terminates. It can stop only when every edge has been used, giving an Euler circuit. Necessity was proved in Proposition 11.2. ∎

This construction is the idea of Hierholzer's algorithm. The mathematical invariant is that the current route is a closed trail and every remaining degree is even. The progress measure is the number of unused edges, which strictly decreases. A route can safely close before all edges are used because splicing preserves it and adds a new closed excursion. Simply stopping after the first closed excursion would be incomplete.

**Example 11.5 (Splicing two triangles).** Let the vertices be $a,b,c,d,e$, with edge set

$$
E=\{ab,bc,ca,ad,de,ea\}.
$$

Here $ab$ abbreviates the unordered edge $\{a,b\}$. The graph consists of two triangles sharing the vertex $a$. Its degrees are $4,2,2,2,2$, and its edge-containing part is connected. Start with the closed trail $a,b,c,a$. The remaining edges form the triangle $a,d,e,a$, which can be spliced at $a$. The result

$$
a,b,c,a,d,e,a
$$

is an Euler circuit. It has six steps, one for each listed edge. The repeated occurrences of $a$ are allowed because no edge repeats. This example also shows why an Euler circuit need not be a cycle.

## Exactly two odd endpoints

**Theorem 11.6 (Open Euler trail criterion).** A finite undirected simple graph with at least one edge has an open Euler trail if and only if its edge-containing part is connected and exactly two vertices have odd degree. Those vertices must be its endpoints.

*Proof of sufficiency.* Let the odd vertices be $s,t$. Starting at $s$, follow unused edges until stuck. Finiteness guarantees a stopping point. It cannot be an even-degree vertex $w\ne s$: as in Lemma 11.3, a terminal arrival would leave an odd, hence positive, number of unused edges there. It cannot be $s$ either: a trail closing at $s$ uses an even number of its incident edges, whereas its total degree is odd, so at least one would remain. Thus the stopping point is $t$.

Call this open trail $T$. Removing its edges leaves all degrees even. At $s,t$, an odd number of incident edges was used and an odd degree minus that number is even. At every other vertex, both the original and used degrees are even. If edges remain, the connectivity argument from Theorem 11.4 finds a vertex of $T$ incident with an unused edge. Lemma 11.3 supplies a closed trail in the remaining graph based there. Splice it into $T$, preserving the endpoints $s,t$.

Every splice consumes new edges and leaves even residual degrees, so the process eventually covers all edges. The result is an open Euler trail. Necessity and the endpoint assertion follow from Proposition 11.2. ∎

The two Euler theorems combine into a decision method: check connectivity after discarding isolated vertices, then count odd degrees. Zero odd vertices give a circuit, two give an open trail, and any other number rules out an Euler trail. The handshake lemma ensures that the odd count is even, but it does not by itself establish existence of a covering route.

**Example 11.7 (A bridge can belong to an open Euler trail).** Take triangles on $a,b,c$ and on $d,e,f$, and add the edge $cd$. The only odd vertices are $c,d$, each of degree three. The graph is connected, so it has an open Euler trail, for example

$$
c,a,b,c,d,e,f,d.
$$

The seven steps use the six triangle edges and the bridge $cd$ exactly once. There is no Euler circuit because two degrees are odd. A bridge is therefore not an automatic obstruction to an open Euler trail. It is an obstruction to an Euler circuit in a connected edge-containing graph: a closed route would have to cross into the separated side and then cross back, repeating the only connecting edge.

## Visiting every vertex once

**Definition 11.8 (Hamilton path and cycle).** A Hamilton path is a path containing every vertex of $G$. A Hamilton cycle is a cycle containing every vertex, with its initial vertex repeated only to close the cycle. A Hamilton cycle in a simple graph therefore requires $n=|V|\ge3$.

An isolated vertex matters here because it is a required vertex to visit. A Hamilton path has $n-1$ edges, while a Hamilton cycle has $n$ edges. Other graph edges can remain unused. Unlike Euler questions, the goal is not to consume the entire edge set.

**Example 11.9 (The properties are independent).** In the complete graph $K_4$ on $a,b,c,d$, the sequence $a,b,c,d,a$ is a Hamilton cycle. All four vertices have degree three, however, so there are four odd vertices and no Euler trail. Conversely, the two-triangle graph of Example 11.5 has an Euler circuit but no Hamilton cycle. Removing its shared vertex $a$ disconnects the remaining vertices into $\{b,c\}$ and $\{d,e\}$; a single spanning cycle could not survive that separation in the required way, as the next proposition proves.

Thus an even-degree condition is not a Hamilton criterion, and a Hamilton cycle need not use every edge. Inspecting degree parity answers the edge question, not the vertex question.

**Proposition 11.10 (Hamilton obstructions).** If a simple graph has a Hamilton cycle, it is connected and every vertex has degree at least two. Moreover, for every nonempty proper subset $S\subset V$, the graph obtained by deleting $S$ has at most $|S|$ connected components. If a graph has a Hamilton path, deletion of any subset $S$ leaves at most $|S|+1$ components.

*Proof.* A spanning cycle supplies paths connecting all vertices and two distinct incident cycle edges at every vertex, proving the first assertions. Delete the vertices of a nonempty proper set $S$ from that cycle. The surviving vertices form at most $|S|$ nonempty consecutive blocks around the cyclic order: each block begins after a deleted vertex, and different blocks have different such preceding deleted vertices. Each block is connected by surviving cycle edges. Extra edges of $G-S$ can merge these blocks but cannot split them, so $G-S$ has at most $|S|$ components.

For a spanning path, deleting one vertex can split a block into at most two, increasing the number of nonempty blocks by at most one. Starting with one block, deleting $|S|$ vertices leaves at most $|S|+1$ blocks. Again the surviving path edges connect each block, and extra edges can only merge blocks. This proves the path assertion, including deletion of all vertices, which leaves zero components. ∎

In particular, a graph with a Hamilton cycle has no cut vertex: deleting any one vertex leaves the other vertices connected. These conditions are necessary, not a complete criterion. Their failure rules out a Hamilton cycle; their success does not establish one without further argument.

A bipartite graph supplies another quick obstruction. Every cycle alternates between its two parts, so a Hamilton cycle must use equally many vertices from each part. Every path alternates too, so a Hamilton path can use part sizes differing by at most one. These restrictions follow by counting alternating positions, independently of Euler degree parity.

## A sufficient degree condition: Dirac's theorem

Let $\delta(G)$ denote the smallest vertex degree. A dense graph has many opportunities to close and extend a long path. The following theorem turns that idea into a sufficient condition with explicit hypotheses.

**Theorem 11.11 (Dirac).** Let $G$ be a finite undirected simple graph with $n\ge3$ vertices. If $\delta(G)\ge n/2$, then $G$ has a Hamilton cycle.

*Proof.* First $G$ is connected. Otherwise each component, having at least one vertex of degree at least $n/2$, would need at least $n/2+1$ vertices: all neighbours of that vertex must lie in its component. Two components would then contain more than $n$ vertices, impossible.

Choose a path $v_1,v_2,\ldots,v_k$ with as many vertices as possible. Such a path exists by finiteness. Every neighbour of either endpoint lies on the path, because a neighbour outside it would extend the path. Also $k\ge3$, since the minimum degree is at least two when $n\ge3$.

Consider two subsets of the $k-1$ positions $1,\ldots,k-1$:

$$
A=\{i:v_1v_{i+1}\in E\},
\qquad B=\{i:v_iv_k\in E\}.
$$

Every neighbour of $v_1$ contributes exactly one position to $A$, and every neighbour of $v_k$ contributes exactly one to $B$. Thus

$$
|A|+|B|=\deg(v_1)+\deg(v_k)\ge n>k-1.
$$

The two position sets cannot be disjoint, because their common containing set has only $k-1$ positions. Choose $i\in A\cap B$. The path edges together with $v_iv_k$ and $v_{i+1}v_1$ give the cycle

$$
v_1,v_2,\ldots,v_i,v_k,v_{k-1},\ldots,v_{i+1},v_1.
$$

This visits every one of the $k$ path vertices exactly once before returning to $v_1$. When $i=1$ or $i=k-1$, omit any empty intermediate run; the same cycle description is valid.

If $k<n$, connectedness supplies an edge from some vertex $w$ outside this cycle to a vertex $u$ on it. Indeed a path from an outside vertex to the cycle has a first edge entering it. Starting at $w$, move to $u$ and then follow the cycle around, stopping just before returning to $u$. This is a path on $k+1$ distinct vertices, contradicting the maximal choice of $k$. Hence $k=n$, and the constructed cycle is Hamiltonian. ∎

The proof uses a longest path as an existence argument. It does not tell us that finding such a path is computationally easy. An argument with an extremal object and an efficient algorithm are separate achievements.

**Example 11.12 (Applying the condition and recognizing its limit).** Let $G$ be obtained from $K_6$ by deleting the three edges $ab$, $cd$, and $ef$, which share no endpoints. Every vertex loses one of its five neighbours, so every degree is four. Since $4\ge6/2$, Dirac's theorem guarantees a Hamilton cycle. One explicit cycle is $a,c,b,e,d,f,a$; none of its consecutive pairs is a deleted edge.

The condition is sufficient but not necessary. The cycle graph $C_6$ is itself a Hamilton cycle, even though each of its degrees is $2<6/2$. Failing Dirac's hypothesis means the theorem gives no answer, not that no Hamilton cycle exists. Nor does the theorem imply an Euler circuit from Hamiltonicity: that would need a separate parity check.

## Algorithms and the limits of greedy choices

For an Euler problem, the degree and connectivity checks decide existence, and the trail-splicing proof gives a terminating construction whenever the checks succeed. When implementing it, each edge must have a persistent used/not-used identity, and a shared vertex must be retained as the attachment point of each splice. Reusing a vertex is permitted; reusing an edge is not. Efficient data structures can avoid repeated full rescans, but the correctness proof is the parity and splicing argument, independent of a particular representation.

For a Hamilton cycle, one complete finite search fixes a starting vertex and tries every ordering of the remaining $n-1$ vertices. Check adjacency between consecutive vertices and then from the last back to the start. If a Hamilton cycle exists, one of these orderings records it, so the search will find one. If every ordering fails, no cycle exists. There are $(n-1)!$ orderings before possible symmetry reductions, so this method's completeness is not a promise of practical speed for large inputs.

A greedy path extension can fail even when a Hamilton cycle exists. Take the square $a,b,c,d,a$ and add diagonal $ac$. Starting with $a,c,b$ gets stuck if only unused vertices may be appended: both neighbours of $b$ are already used, while $d$ remains unvisited. Yet $a,b,c,d,a$ is a Hamilton cycle. Backtracking must reconsider earlier choices. The Euler splicing rule cannot simply repair a Hamilton route, because repeating an attachment vertex would violate the vertex-once requirement.

## Exercises

All graphs in the exercises are finite, undirected, and simple. State whether the conclusion concerns edges or vertices, and give an explicit route or a proved obstruction whenever requested.

### Exercise 11.1
<a id="euler-hamilton-ex-1"></a>

A graph consists of the triangle $a,b,c,a$ and an isolated vertex $z$. Determine whether it has an Euler circuit, an open Euler trail, a Hamilton path, and a Hamilton cycle.

<details>
<summary>Hint 1</summary>

An Euler route must cover edges, whereas a Hamilton route must include the isolated vertex.

</details>
<details>
<summary>Hint 2</summary>

The edge-containing part is one even-degree triangle. An open Euler trail would require two odd vertices.

</details>
<details>
<summary>Solution</summary>

The route $a,b,c,a$ is an Euler circuit; the isolate has no edge to cover. There is no open Euler trail because there are zero, rather than two, odd-degree vertices. There is no Hamilton path or cycle: a route visiting all four vertices would need to connect $z$ to another vertex, but no such edge exists. This illustrates why the Euler connectivity condition discards isolated vertices and the Hamilton condition cannot do so.

</details>

### Exercise 11.2
<a id="euler-hamilton-ex-2"></a>

Let $G$ be the disjoint union of two triangles. Explain why even degrees do not suffice for an Euler circuit. Can adding one edge between the triangles create an open Euler trail?

<details>
<summary>Hint 1</summary>

A single walk cannot move between disconnected components.

</details>
<details>
<summary>Hint 2</summary>

The added edge joins the components and changes the parity of exactly its two endpoints.

</details>
<details>
<summary>Solution</summary>

Originally every degree is two, but the edge-containing part has two components, so no Euler trail can cover both triangles. Adding one edge between a vertex in each triangle makes the graph connected. Its endpoints now have degree three, and the other four vertices retain degree two. Exactly two vertices are odd, so Theorem 11.6 gives an open Euler trail between the endpoints of the added edge. There is still no Euler circuit because those degrees are odd.

</details>

### Exercise 11.3
<a id="euler-hamilton-ex-3"></a>

For the graph of Example 11.7, give a Hamilton path and prove that no Hamilton cycle exists.

<details>
<summary>Hint 1</summary>

A Hamilton path may traverse the bridge once on its way from one triangle to the other.

</details>
<details>
<summary>Hint 2</summary>

Deleting $c$ leaves $a,b$ separated from the triangle on $d,e,f$. Apply the cut-vertex consequence.

</details>
<details>
<summary>Solution</summary>

The sequence $a,b,c,d,e,f$ is a Hamilton path: every consecutive pair is an edge and all six vertices occur once. There is no Hamilton cycle because deleting $c$ leaves two nonempty components, one containing $a,b$ and one containing $d,e,f$. Proposition 11.10 would allow at most one component after deleting one vertex from a Hamiltonian graph. Equivalently, a cycle visiting both sides of the bridge would have to cross that bridge twice, which a cycle cannot do.

</details>

### Exercise 11.4
<a id="euler-hamilton-ex-4"></a>

Let $G$ consist of the triangles $a,b,c,a$, $c,d,e,c$, and $e,f,g,e$. Construct an Euler circuit by splicing and justify why the Euler criterion applies.

<details>
<summary>Hint 1</summary>

The shared vertices $c,e$ have larger degrees, but their degrees remain even.

</details>
<details>
<summary>Hint 2</summary>

Begin with $a,b,c,a$, insert the second triangle at $c$, and then insert the third at $e$.

</details>
<details>
<summary>Solution</summary>

The graph is connected. Vertices $c,e$ have degree four, and $a,b,d,f,g$ have degree two, so the circuit criterion applies. Splicing gives $a,b,c,d,e,f,g,e,c,a$. Its nine steps are $ab,bc,cd,de,ef,fg,ge,ec,ca$, exactly the nine graph edges, each once. The repeated shared vertices are permitted in a trail, and the initial and terminal vertex is $a$, so this is an Euler circuit.

</details>

### Exercise 11.5
<a id="euler-hamilton-ex-5"></a>

Prove that in an even-degree graph every edge cut has even size. Deduce that a connected even-degree graph with at least one edge has no bridge.

<details>
<summary>Hint 1</summary>

For a vertex subset $S$, sum the degrees over $S$ and distinguish edges internal to $S$ from edges leaving it.

</details>
<details>
<summary>Hint 2</summary>

The sum is $2|E(S)|+|\delta(S)|$. A bridge would give a cut of size one.

</details>
<details>
<summary>Solution</summary>

Let $E(S)$ be the edges with both endpoints in $S$, and let $\delta(S)$ be the edges with exactly one endpoint in $S$. Counting incidences gives $\sum_{v\in S}\deg(v)=2|E(S)|+|\delta(S)|$. The left side and the first term on the right are even, so $|\delta(S)|$ is even. If an edge were a bridge in a connected graph, deleting it would split the vertices into two nonempty sides, with that edge as the unique original crossing edge. The corresponding cut would have size one, contradicting evenness.

</details>

### Exercise 11.6
<a id="euler-hamilton-ex-6"></a>

Classify $K_{2,3}$ with respect to Euler circuits, open Euler trails, Hamilton paths, and Hamilton cycles. Give explicit routes for the properties that hold, using parts $\{a_1,a_2\}$ and $\{b_1,b_2,b_3\}$.

<details>
<summary>Hint 1</summary>

Each $a$ vertex has degree three and each $b$ vertex has degree two. A cycle in a bipartite graph alternates parts.

</details>
<details>
<summary>Hint 2</summary>

An Euler trail should start and finish at the two $a$ vertices. A Hamilton path can start and finish in the larger part.

</details>
<details>
<summary>Solution</summary>

The graph is connected and has exactly two odd vertices, $a_1,a_2$, so it has an open Euler trail but no Euler circuit. One such trail is $a_1,b_1,a_2,b_2,a_1,b_3,a_2$, which uses all six edges once. The sequence $b_1,a_1,b_2,a_2,b_3$ is a Hamilton path. A Hamilton cycle would alternate between the parts and therefore use equally many vertices from each, impossible with part sizes two and three. Thus the graph has both kinds of open route and neither kind of closed route.

</details>

### Exercise 11.7
<a id="euler-hamilton-ex-7"></a>

For each integer $k\ge2$, use Dirac's theorem to show that $K_{k,k}$ has a Hamilton cycle. Give an explicit cycle and determine when it has an Euler circuit.

<details>
<summary>Hint 1</summary>

Its order is $2k$ and every vertex has degree $k$.

</details>
<details>
<summary>Hint 2</summary>

Alternate through the two parts to construct the Hamilton cycle. For an Euler circuit, inspect the parity of $k$.

</details>
<details>
<summary>Solution</summary>

The graph is simple with $n=2k\ge4$ and minimum degree $k=n/2$, so Dirac's theorem applies. Label the parts $a_1,\ldots,a_k$ and $b_1,\ldots,b_k$. The cycle $a_1,b_1,a_2,b_2,\ldots,a_k,b_k,a_1$ is Hamiltonian. Since the graph is connected, it has an Euler circuit exactly when all degrees $k$ are even, namely when $k$ is even. For odd $k\ge3$, all $2k$ vertices are odd, so there is no Euler trail at all. Hamiltonicity does not decide that parity question.

</details>

### Exercise 11.8
<a id="euler-hamilton-ex-8"></a>

Three triangles share only a single vertex $u$, and have no other edges between them. Prove that this graph has an Euler circuit but no Hamilton path.

<details>
<summary>Hint 1</summary>

There are six outer vertices, each of degree two. Compute the degree of $u$.

</details>
<details>
<summary>Hint 2</summary>

Deleting $u$ leaves three components. Compare that with the path deletion bound for a one-element set.

</details>
<details>
<summary>Solution</summary>

The graph is connected, the central vertex $u$ has degree six, and every outer vertex has degree two. Hence it has an Euler circuit, obtained by traversing each triangle as an excursion from $u$. If it had a Hamilton path, deleting $S=\{u\}$ would leave at most $|S|+1=2$ components by Proposition 11.10. In fact the three disjoint outer edges are three components. This contradiction rules out a Hamilton path, and therefore also rules out a Hamilton cycle.

</details>

### Exercise 11.9
<a id="euler-hamilton-ex-9"></a>

In the square $a,b,c,d,a$ with diagonal $ac$, verify that greedy extension can get stuck at $a,c,b$, although Dirac's theorem guarantees a Hamilton cycle. Explain why Euler-style splicing is not an automatic repair.

<details>
<summary>Hint 1</summary>

List the neighbours of $b$ and the degrees of all four vertices.

</details>
<details>
<summary>Hint 2</summary>

The minimum degree is two and the graph has four vertices. Repeating an attachment vertex is acceptable for an Euler trail but not for a Hamilton path.

</details>
<details>
<summary>Solution</summary>

The neighbours of $b$ are $a,c$, both already used in the path $a,c,b$, so this path cannot be extended by appending a new vertex even though $d$ is unvisited. The degrees are $3,2,3,2$, giving minimum degree $2=4/2$; Dirac's theorem guarantees a Hamilton cycle, explicitly $a,b,c,d,a$. Splicing an excursion at a previously used vertex generally repeats that vertex and so violates the Hamilton requirement. The failed partial path must be reconsidered, not certified as evidence that no Hamilton cycle exists.

</details>

### Exercise 11.10
<a id="euler-hamilton-ex-10"></a>

For an integer $k\ge2$, show that $K_{k,k+1}$ has minimum degree $(n-1)/2$, where $n$ is its order, but has no Hamilton cycle. What does this say about replacing $n/2$ by $(n-1)/2$ in Dirac's theorem for all graphs?

<details>
<summary>Hint 1</summary>

The order is $2k+1$. Vertices in the larger part have the smaller degree.

</details>
<details>
<summary>Hint 2</summary>

A cycle alternates parts, so a spanning cycle cannot cover unequal part sizes.

</details>
<details>
<summary>Solution</summary>

The graph has $n=2k+1$ vertices. Its degrees are $k+1$ in the size-$k$ part and $k$ in the size-$(k+1)$ part, so $\delta=k=(n-1)/2$. A Hamilton cycle would alternate between the two parts and use the same number from each, impossible because their sizes differ. Therefore the proposed weaker degree threshold would be false as a universal theorem. This family does not contradict Dirac: its minimum degree is strictly smaller than $n/2=k+1/2$.

</details>

## Sources

The exposition, graph examples, exercises, and proof wording in this chapter are original. The classical results are attributed to their established sources. The constructive Euler method is associated with Carl Hierholzer; the publisher records the article as Carl Hierholzer and Christian Wiener, [Ueber die Möglichkeit, einen Linienzug ohne Wiederholung und ohne Unterbrechung zu umfahren](https://link.springer.com/article/10.1007/BF01442866), *Mathematische Annalen* 6 (1873), 30–32. Dirac's sufficient condition appears in G. A. Dirac, [Some Theorems on Abstract Graphs](https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/plms/s3-2.1.69), *Proceedings of the London Mathematical Society* s3-2 (1952), 69–81. These links identify the original research publications; the proofs above are self-contained.

For additional introductory reading, see Oscar Levin, *Discrete Mathematics: An Open Introduction*, [Euler Paths and Circuits](https://discrete.openmathbooks.org/dmoi3/sec_paths.html). Its terminology uses “Euler path” for the edge-once object called an Euler trail here. References consulted 13 November 2026. This chapter's original prose is licensed CC BY-SA 4.0; no source text or figures are reproduced.

## Summary

Euler routes cover edges, so repeated vertices are allowed and isolated vertices do not obstruct edge coverage. With at least one edge, connectivity of the edge-containing part and zero odd degrees exactly characterise Euler circuits; the same connectivity and exactly two odd degrees characterise open Euler trails. The parity argument and closed-trail splicing give both proofs and a terminating construction.

Hamilton routes cover vertices without revisiting them. Connectivity, degree bounds, vertex-deletion component counts, and bipartite part sizes supply necessary conditions. Dirac's minimum-degree condition is sufficient for a Hamilton cycle, and its longest-path proof explains why enough neighbours force a spanning cycle. Failing that hypothesis gives no negative conclusion. Exhaustive search is complete but may be large, and a failed greedy extension is not a proof of impossibility. The next graph topics build on these distinctions when studying how graphs can be embedded, colored, and matched.
