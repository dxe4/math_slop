var e=`---
parent_id: book-graph-theory
chapter_id: decompositions-orientations
title: "Decompositions and Orientations"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Decompositions and Orientations

## Pieces, interfaces, and directions

**Definition 17.1.** A graph decomposition describes a graph through specified subgraphs and the interfaces at which they meet. An orientation assigns exactly one direction to each undirected edge. A decomposition can expose a separation without choosing directions; an orientation can expose reachability without deleting or contracting any edge. These are different operations and need different certificates.

Deleting bridges produces components joined by a tree. Splitting at articulation vertices instead produces blocks meeting at vertices. Neither is generally an edge partition into cycles: two vertex blocks can overlap at an articulation vertex, while bridge components have disjoint vertex sets. A degeneracy order is a third kind of decomposition, recursively removing a low-degree vertex and recording the remaining interface to later vertices.

An orientation retains the undirected endpoints of every edge. A balanced orientation constrains the numbers of incoming and outgoing edges. An acyclic orientation constrains directed cycles. A strong orientation constrains directed reachability between every ordered pair. None of those descriptions should be substituted for another: a directed path is balanced and acyclic but not strong; a consistently directed cycle is balanced and strong but not acyclic. We will prove the exact statements that connect these properties to undirected structure.

Required preparation is the earlier treatment of paths, cuts, trees, Euler trails, and colouring, together with induction and algorithm invariants. The discussion of [Graph Minors and Wagner](graph-minors-wagner.md) supplies context for contractions, but a bridge tree records which pieces were contracted and which edges joined them. Retaining that correspondence is what lets it answer questions about separations in the original graph. No spectral or probability preparation is needed here.

A certificate is a mathematical object with a stated scope. A cut certifies one separation, not a probability of real-world failure. A vertex ordering certifies one set of precedence constraints, not a unique schedule. The arguments below keep the object, the checking rule, and the conclusion together, so that the output of an algorithm can be inspected independently of the search that produced it.


Large graphs become understandable when we split them along genuine weak points or orient their edges to expose precedence and reachability. The useful outcome is often a **certificate**: a small object that another person can check without trusting the algorithm that found it. A bridge certifies a one-edge separation, a topological order certifies acyclicity, a directed cycle refutes it, and a pair of directed spanning reachability trees certifies strong connectivity.

This chapter assumes paths, cycles, trees, connectivity, planar bounds, coloring, and matchings. Graphs are finite. Unless stated otherwise, undirected graphs are simple; directed graphs may have two oppositely directed arcs between a pair only when explicitly constructed that way.

## Separations begin with bridges and articulation vertices

**Definition 17.2.** For an undirected graph $G$, an edge $e$ is a **bridge** if deleting it increases the number of connected components. A vertex $v$ is an **articulation vertex** if deleting $v$ and all incident edges increases the number of components.

**Proposition 17.3.** An edge is a bridge if and only if it lies on no cycle.

**Proof.** If $e=uv$ lies on a cycle, the rest of that cycle is a $u$–$v$ path after $e$ is deleted. Any walk that used $e$ can substitute that path, so deletion does not separate its component. Conversely, if $e$ lies on no cycle and $G-e$ still contains a $u$–$v$ path, that path together with $e$ forms a cycle, contradiction. Thus its endpoints separate in $G-e$, and $e$ is a bridge. ∎

The proposition supplies two kinds of certificate. A cycle containing $e$ certifies that $e$ is not a bridge. To certify that it is a bridge, give the vertex set $S$ of one component of $G-e$; checking that $e$ is the only edge from $S$ to $V\\setminus S$ proves the claim.

**Example 17.4 (classify a tail edge).**

Take a triangle $abc$ and attach the path $c-d-e$. Edges $ab,bc,ca$ lie on a cycle, so none is a bridge. Edge $cd$ is the unique edge crossing $\\{a,b,c\\}$ to $\\{d,e\\}$, and $de$ is the unique edge crossing $\\{a,b,c,d\\}$ to $\\{e\\}$; both are bridges. Vertices $c$ and $d$ are articulation vertices. Vertex $e$ is not: deleting it does not split the remaining graph.

## Depth-first search produces checkable bridge data

Run depth-first search (DFS) in a connected undirected graph. Give each vertex a discovery number $\\operatorname{disc}(v)$. For a vertex $v$, let

$$\\operatorname{low}(v)$$

be the smallest discovery number reachable by going down zero or more DFS-tree edges from $v$ and then using at most one back edge to an ancestor of its endpoint. The parent tree edge is not counted as a back edge. The option of using no back edge includes the discovery number of $v$ itself. It can be computed after the descendants of $v$:

$$
\\operatorname{low}(v)=\\min\\left(
\\{\\operatorname{disc}(v)\\}
\\cup\\{\\operatorname{disc}(w):vw\\text{ is a back edge to an ancestor }w\\}
\\cup\\{\\operatorname{low}(c):c\\text{ is a tree child of }v\\}
\\right).
$$

In an undirected DFS, every non-tree edge joins a vertex to an ancestor; there are no cross edges between completed sibling subtrees. This follows because if an edge first connects two undiscovered subtrees, DFS follows it and makes one endpoint a descendant of the other.

**Theorem 17.5 (DFS bridge criterion).** A DFS-tree edge $vc$, where $v$ is the parent of $c$, is a bridge exactly when $\\operatorname{low}(c)>\\operatorname{disc}(v)$.

**Proof.** If $\\operatorname{low}(c)\\le \\operatorname{disc}(v)$, some vertex in the subtree rooted at $c$ has a non-tree edge to $v$ or an ancestor of $v$. Tree paths plus that edge form a cycle containing $vc$, so it is not a bridge. If $\\operatorname{low}(c)>\\operatorname{disc}(v)$, there is no edge from the $c$-subtree to $v$ or an ancestor of $v$. There is also no edge to another DFS subtree. Consequently $vc$ is the only exit from the $c$-subtree and is a bridge. ∎

**Example 17.6 (compute low values).**

In the graph with edges $12,23,31,34,45,53,56$, begin DFS along $1,2,3,4,5,6$. The edge $31$ makes $\\operatorname{low}(3)=1$; edge $53$ makes $\\operatorname{low}(5)=\\operatorname{disc}(3)$. Thus tree edges inside triangles $123$ and $345$ fail the strict bridge inequality. Vertex $6$ has no back edge, so $\\operatorname{low}(6)=\\operatorname{disc}(6)>\\operatorname{disc}(5)$ and $56$ is a bridge. The cut $\\{6\\}$ is an independently checkable certificate. With the stated discovery order, the complete values are $\\operatorname{low}(1)=\\operatorname{low}(2)=\\operatorname{low}(3)=1$, $\\operatorname{low}(4)=\\operatorname{low}(5)=3$, and $\\operatorname{low}(6)=6$. In particular, equality $\\operatorname{low}(4)=\\operatorname{disc}(3)$ means the edge $34$ lies on a cycle; the bridge test must use a strict inequality.

## Edge blocks and the bridge tree

Delete all bridges of a connected graph. The remaining connected components are its **2-edge-connected components** in the following decomposition sense; isolated vertices are allowed. Contract each component to one node and retain the bridges between them.

**Theorem 17.7.** The contracted graph is a tree.

**Proof.** Contraction preserves connectedness, so the result is connected. If it contained a cycle, every retained edge on that cycle would have an alternate route between its endpoints. It would therefore not have been a bridge in the original graph, contradiction. A connected acyclic graph is a tree. ∎

Every surviving edge still lies on its original cycle, because no edge of any cycle was a bridge and hence none of that cycle was deleted. Thus each remaining component has no bridge internally. This justifies the decomposition terminology even for a one-vertex component. This **bridge tree** records all one-edge bottlenecks. Removing one tree edge partitions its nodes, and expanding the contracted components gives the corresponding vertex separation in the original graph.

Vertex separations require a finer object. A **block** is a maximal connected subgraph that has no articulation vertex when considered by itself; each bridge is a two-vertex block, and each isolated vertex is a one-vertex block. Two distinct blocks share at most one vertex. Indeed, if they shared two, deleting any one vertex would leave their union connected through the other shared vertex, while deletion of a vertex belonging to only one block would leave that block connected and still attached to the other. Their union would have no articulation vertex, contradicting maximality.

Before forming the incidence graph, note why a shared block vertex really is an articulation vertex of the connected graph. Suppose two distinct blocks share $v$, but deleting $v$ leaves the component connected. There is then a path avoiding $v$ from one block minus $v$ to the other block minus $v$. Choose such a path with its internal vertices outside those two blocks, by trimming it at its first and last block contacts. Their union together with this path has no articulation vertex. Deleting $v$ leaves the blocks joined by the new path. Deleting an internal path vertex leaves its two remaining pieces attached through the shared vertex $v$. Deleting any other vertex leaves its block connected and still attached through $v$, with the path attached at its surviving end if an endpoint was deleted. This contradicts maximality of the blocks. Thus the shared vertex separates the graph. This also supplies the justification for the articulation incidences used in the following proof.

Build a bipartite incidence graph whose nodes are blocks and articulation vertices, joining an articulation vertex to every block containing it. Within each connected component of the original graph, this **block–cut graph** is a tree.

**Proof.** It is connected: trace an original path between vertices in any two blocks and record the successive blocks containing its edges. Whenever consecutive distinct blocks meet, their unique common vertex separates the portions on the two sides and is therefore an articulation vertex, giving the corresponding two incidence edges.

Suppose the incidence graph contained an alternating cycle of distinct blocks and articulation vertices. Let $U$ be the union of the blocks on that cycle. Deleting a vertex inside one block cannot disconnect that block, and the other cycle blocks remain attached around the opposite direction. Deleting a shared cycle vertex breaks the cycle into a chain, but the remaining blocks along that chain still join the two neighboring blocks; each affected block minus the deleted vertex remains connected. Thus $U$ has no articulation vertex. It strictly contains each block on the cycle, contradicting the maximality of those blocks. Hence the incidence graph is acyclic. Being connected and acyclic, it is a tree. ∎

The maximality clause matters. Arbitrary overlapping subgraphs without articulation vertices do not yield a canonical tree.

**Example 17.8 (compress before solving).**

Suppose triangles $abc$ and $cde$ share only $c$, and a leaf edge $ef$ is attached. The blocks are the two triangles and the bridge $ef$; articulation vertices are $c$ and $e$. The block–cut tree is

$$\\text{triangle }abc \\; - \\; c \\; - \\; \\text{triangle }cde \\; - \\; e \\; - \\; \\text{edge }ef$$

Any route from a vertex in the first triangle to $f$ must pass through $c$ and $e$. The tree displays these obligations without retaining every cycle edge.

## Degeneracy is a recursive decomposition

**Definition 17.9.** A graph is **k-degenerate** if every nonempty subgraph has a vertex of degree at most $k$. Equivalently, its vertices can be ordered $v_{1},\\ldots,v_{n}$ so each $v_{i}$ has at most $k$ neighbors among $v_{i+1},\\ldots,v_{n}$.

**Proof of equivalence.** If every subgraph has a low-degree vertex, repeatedly remove one and record the removal order. At removal time, its remaining neighbors are precisely its later neighbors. Conversely, given such an order, any nonempty subgraph contains an earliest vertex $v_{i}$; all of its neighbors in that subgraph occur later, so it has degree at most $k$ there. ∎

Reverse greedy coloring along the order uses at most $k+1$ colours. To prove this, process the vertices in the reverse of the removal order. At vertex $v_i$, only later vertices have already been coloured, and at most $k$ of those are its neighbours. At least one of the $k+1$ colours is therefore available. For every edge, its earlier endpoint receives a colour different from its already-coloured later endpoint, so the resulting colouring is proper. The ordering is a compact certificate: check every edge and count later neighbors. It proves an upper bound but need not prove the smallest possible $k$ or chromatic number.

**Example 17.10 (certify outer layers).**

For the graph obtained from a cycle by adding one diagonal $uv$, delete the internal vertices of one rim $u$–$v$ path in order from $u$ toward $v$, then do the same on the other rim path, and finally remove $u,v$. An internal rim vertex has only its two rim neighbours before deletion, and the final two vertices have at most one remaining neighbour each. Thus each removed vertex has at most two later neighbours. The graph is 2-degenerate and hence 3-colorable. This spells out the removal order even when a residual cycle remains after the first deletion. A triangle created by the diagonal supplies a matching lower certificate of three colours when the diagonal joins vertices at distance two. In that case the upper and lower certificates meet, proving the chromatic number is three.

## Orientations and degree balance

**Definition 17.11.** An **orientation** replaces every undirected edge $uv$ by exactly one of $u\\to v$ or $v\\to u$. For a vertex $v$, write $d^{+}(v)$ and $d^{-}(v)$ for its outdegree and indegree. Always

$$\\sum_{v} d^{+}(v)=|E|=\\sum_{v} d^{-}(v)$$

An orientation is **balanced** if $|d^{+}(v)-d^{-}(v)|\\le 1$ at every vertex.

**Theorem 17.12.** Every finite undirected graph has a balanced orientation.

**Proof.** Work in each component. Pair its odd-degree vertices arbitrarily; their number is even because the sum of degrees is even. Add one temporary edge for each pair, allowing temporary parallel edges. Every degree is now even. Each nontrivial augmented component has a closed trail using every edge exactly once. Start following unused edges until stuck. At a stopping vertex different from the start, the used incident edges would be odd in number, so its even total degree would leave at least one unused incident edge, a contradiction. Thus the trail closes. Removing its edges leaves every residual degree even. If unused edges remain, connectivity supplies a visited vertex incident with an unused edge: otherwise a path to an unused edge would have a first unused edge leaving the visited set. Start another closed residual trail there and splice it into the first. Each splice consumes new edges, so finiteness gives a closed trail using them all. Temporary parallel edges have distinct identities and cause no change to this parity argument. Isolated components need no edge directions. Orient every edge along the resulting closed trail. Then indegree equals outdegree in the augmented graph. Remove temporary edges. At an even-degree original vertex nothing changes. At an odd-degree vertex exactly one incident temporary edge is removed, so indegree and outdegree differ by one. ∎

The proof is constructive. The oriented edge list itself is a certificate; checking the balance inequalities is linear in the number of edges.

**Example 17.13 (balance a path).**

For path $a-b-c-d$, odd-degree vertices are $a,d$. Add temporary edge $da$, giving a four-cycle, and orient $a\\to b\\to c\\to d\\to a$. Delete $d\\to a$. The path orientation is $a\\to b\\to c\\to d$. Endpoints have imbalance one and internal vertices imbalance zero, as required.

## Acyclic orientations and topological orders

**Definition 17.14.** A directed graph is **acyclic** if it contains no directed cycle. A **topological order** is a vertex order in which every arc points from an earlier to a later vertex.

**Theorem 17.15.** A finite directed graph is acyclic if and only if it has a topological order.

**Proof.** A topological order forbids a directed cycle: following the cycle would require indices to increase and return to the start. Conversely, the empty graph has the empty topological order. Every nonempty finite acyclic directed graph has a vertex of indegree zero. If every vertex had an incoming arc, repeatedly follow incoming arcs; finiteness would repeat a vertex and create a directed cycle. Remove an indegree-zero vertex. The remaining graph is acyclic, so induction orders it; place the removed vertex first. ∎

This theorem yields complementary certificates. A nonempty acyclic digraph also has a sink: apply the source argument to the digraph with every arc reversed. A topological order proves acyclicity after checking every arc once. A directed cycle proves non-acyclicity after checking only its listed arcs.

Every undirected graph has an acyclic orientation: choose any total vertex order and direct every edge forward. Conversely, each acyclic orientation may have several topological orders. The orientation encodes precedence constraints; the topological order is one compatible schedule.

**Example 17.16 (two certificates for one digraph).**

For arcs $a\\to c$, $b\\to c$, $b\\to d$, $c\\to e$, $d\\to e$, the order $a,b,c,d,e$ is topological, as is $b,a,d,c,e$. To show that adding $e\\to b$ breaks acyclicity, list the directed cycle $b\\to c\\to e\\to b$. Merely reporting that the ordering algorithm failed would be weaker than supplying the cycle.

## Strong orientations and bridge obstructions

**Definition 17.17.** A directed graph is **strongly connected** if every ordered pair of vertices is joined by a directed path. An orientation of an undirected connected graph can be strongly connected only if the graph has no bridge: if bridge $uv$ is directed from one side of its cut to the other, there is no directed route back across that cut.

The obstruction is also sufficient. The following result is Robbins’s strong-orientation theorem; its proof is included. A one-vertex connected graph has no bridge and its empty orientation is strong under the convention that a vertex reaches itself by a length-zero path.

**Theorem 17.18.** A connected undirected graph has a strongly connected orientation if and only if it has no bridge.

**Proof.** Necessity was just shown. For sufficiency, run DFS from root $r$. Orient every tree edge from parent to child. Orient every non-tree edge from descendant to ancestor. We prove every vertex can reach $r$; since tree edges give a directed path from $r$ to every vertex, strong connectivity follows.

Consider a nonroot vertex $v$ and its parent edge $pv$. Because $pv$ is not a bridge, the DFS bridge criterion gives $\\operatorname{low}(v)\\le \\operatorname{disc}(p)$. Thus within the subtree of $v$ there is a descendant $z$ with a non-tree edge $z\\to a$ to $p$ or an ancestor of $p$. Starting at $v$, follow downward-oriented tree edges to $z$, then take $z\\to a$. This reaches a vertex strictly closer to $r$ than $v$. Repeating the argument must terminate at $r$, because depth strictly decreases after each such segment. Therefore $v$ reaches $r$. ∎

The construction provides a certificate consisting of the DFS tree, discovery numbers, low values, and orientation. Alternatively, two spanning directed trees—one reaching outward from a root and one reaching inward to it—directly certify strong connectivity.

**Example 17.19 (orient two cycles sharing a vertex).**

Let cycles $abc a$ and $cdec$ share vertex $c$. There is no bridge. Orient the first as $a\\to b\\to c\\to a$ and the second as $c\\to d\\to e\\to c$. From any vertex, follow its cycle to $c$; from $c$, enter either cycle and reach any target. The orientation is strong. Sharing only one vertex does not obstruct strong orientation; a bridge, not an articulation vertex, is the relevant edge-orientation obstruction.

## Cuts certify failure of reachability

For a digraph and vertex set $S$, let $\\delta^{+}(S)$ be arcs leaving $S$ and $\\delta^{-}(S)$ arcs entering it. If $\\delta^{+}(S)$ is empty for a nonempty proper $S$, no vertex in $S$ can reach a vertex outside $S$; hence the digraph is not strong. This cut is a concise failure certificate.

Conversely, if a vertex $s$ cannot reach $t$, let $S$ be the set reachable from $s$. Then $s\\in S$, $t\\notin S$, and $\\delta^{+}(S)$ is empty. Thus failed reachability always has a cut certificate, not merely an unsuccessful search trace.

To verify strong connectivity efficiently, choose root $r$, search forward from $r$, and search from $r$ in the reversed digraph. If both searches reach every vertex, $r$ reaches all vertices and all vertices reach $r$, so any $u$ reaches any $v$ through $r$. If the forward search fails, its reachable set has no outgoing arc in the original digraph. If the reversed search fails, its reachable set has no outgoing arc in the reversed digraph, hence no incoming arc in the original. Its complement then has no outgoing arc in the original, giving the promised failure certificate with the stated direction.

**Example 17.20 (extract a failed-reachability cut).**

Let the arcs be $1\\to 2$, $2\\to 1$, $2\\to 3$, $3\\to 4$, $4\\to 3$. From $3$, the reachable set is $S=\\{3,4\\}$. No arc leaves $S$, so $\\delta^{+}(S)=\\varnothing$; in particular, $3$ cannot reach $1$. The arc $2\\to 3$ enters $S$ and does not repair the missing outward direction.

## Tournaments: orientation forces a long path

**Definition 17.21.** A **tournament** is an orientation of a complete graph: for each distinct pair, exactly one of $u\\to v$ or $v\\to u$ occurs.

**Theorem 17.22.** Every finite nonempty tournament has a directed path containing every vertex.

**Proof.** Induct on the number $n\\ge 1$ of vertices. For $n=1$, the single vertex is the required path. For $n\\ge 2$, remove $v$ and take, by induction, a spanning directed path

$$x_{1}\\to x_{2}\\to \\ldots\\to x_{k}$$

in the remaining tournament. If $v\\to x_{1}$, insert $v$ first. If $x_{k}\\to v$, insert it last. Otherwise $x_{1}\\to v$ and $v\\to x_{k}$. Scan from left to right for the first index $i$ with $v\\to x_{i+1}$. Minimality gives $x_{i}\\to v$, so insert $v$ between $x_{i}$ and $x_{i+1}$. The resulting sequence is a directed spanning path. ∎

The result guarantees a path, not a directed cycle and not a unique ranking. A three-vertex cyclic tournament has no source even though it has a spanning path.

## Decomposition algorithms and certificate discipline

A structural algorithm should report both its answer and evidence that can be checked independently.

- **Bridge decomposition:** list each bridge and one side of its cut; list a cycle for each disputed nonbridge.
- **Degeneracy:** list a removal order and remaining degree at every removal.
- **Acyclicity:** return a topological order, or return a directed cycle.
- **Strong connectivity:** return forward and reverse search trees from one root, or a nonempty proper directed cut with no outgoing arc.
- **Strong orientation:** return the orientation plus inward and outward reachability trees; if impossible, return a bridge and its cut.

Certificates have scope. A topological order certifies one given orientation, not the underlying undirected graph. A bridge cut certifies impossibility of a strong orientation, not impossibility of all useful orientations. A degeneracy order proves an upper bound even when it is not optimal.

## Common errors and repairs

- **Bridge by appearance:** a narrow-looking edge is not necessarily a bridge. Repair: give a deletion cut or use the cycle criterion.
- **Low-link inequality reversed:** $\\operatorname{low}(c)=\\operatorname{disc}(v)$ already supplies a cycle through $vc$; the bridge condition is strict $\\operatorname{low}(c)>\\operatorname{disc}(v)$.
- **Blocks chosen arbitrarily:** maximality and articulation incidence are needed for the block–cut tree.
- **Order direction reversed:** if edges point earlier-to-later, removing a source builds the order at the front, not the back.
- **Search failure without evidence:** return the reachable set and verify its empty outgoing cut.
- **Balanced confused with strong:** small degree imbalance says nothing by itself about reachability.
- **Articulation confused with bridge:** two cycles may share an articulation vertex yet admit a strong orientation.
- **DFS orientation applied with bridges present:** a bridge produces no back-edge escape from its child subtree, so the strong-orientation proof fails exactly there.
- **Experimental claim:** testing many graphs can suggest a characterization, but a cut necessity proof and a constructive sufficiency proof are both required.

## Bounded investigation: certificate-producing graph auditor
<a id="DM-CH12-P001"></a>

For simple undirected graphs with at most $12$ vertices and $24$ edges, design a small exact auditor. Input is a vertex list and edge list. Output must include:

1. connected components;
2. all bridges, each with one side of its deletion cut;
3. the bridge tree after component contraction;
4. either a strong orientation with inward/outward reachability trees, or a bridge obstruction;
5. a degeneracy order and its maximum later-neighbor count.

Test exactly these families: paths $P_{n}$ for $2\\le n\\le 8$, cycles $C_{n}$ for $3\\le n\\le 8$, two cycles sharing one vertex, two cycles joined by one edge, and five additional labelled graphs of your choice. Bound exhaustive cross-checking to all subsets of the supplied edge set only when there are at most $12$ edges. Record graph order, size, returned certificates, and every failed check. Do not infer an unbounded theorem from the finite tests; compare each output against the proved criteria in this chapter.

## Exercises

For each conclusion, identify the certificate that makes it checkable. Distinguish local degree balance from directed reachability and distinguish edge separations from vertex separations.

### Exercise 17.1
<a id="decompositions-orientations-ex-1"></a>
<a id="DM-CH12-E001"></a>

**bridge certificate.**

Let $G$ have edges $12,23,31,34,45,53$. Find all bridges and certify each answer.

<details>
<summary>Hint 1</summary>

Use the cycle criterion separately on the two triangles.

</details>
<details>
<summary>Hint 2</summary>

Every listed edge belongs to one of those triangles, even though the triangles share one vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** Edges $12,23,31$ lie on cycle $1-2-3-1$; edges $34,45,53$ lie on cycle $3-4-5-3$. Hence every edge lies on a cycle and there are no bridges. Notice that vertex $3$ is an articulation vertex: deleting it separates $\\{1,2\\}$ from $\\{4,5\\}$. This confirms that articulation does not imply an incident bridge.

</details>

### Exercise 17.2
<a id="decompositions-orientations-ex-2"></a>
<a id="DM-CH12-E002"></a>

**bridge tree.**

Three cycles are connected in a chain by single edges $e_{1},e_{2}$. Describe the bridge tree.

<details>
<summary>Hint 1</summary>

First remove the two connecting edges and identify the remaining components.

</details>
<details>
<summary>Hint 2</summary>

Contract each cycle to a single node and retain the two original connecting edges.

</details>
<details>
<summary>Solution</summary>

**Solution.** Deleting $e_{1},e_{2}$ leaves three 2-edge-connected components, one per cycle. Contract them to nodes $A,B,C$. The retained edges are $AB$ and $BC$, so the bridge tree is the three-node path $A-B-C$. Each retained edge is a bridge because deleting it separates one end cycle from the others.

</details>

### Exercise 17.3
<a id="decompositions-orientations-ex-3"></a>
<a id="DM-CH12-E003"></a>

**degeneracy certificate.**

Prove every forest is 1-degenerate and hence 2-colorable.

<details>
<summary>Hint 1</summary>

A nontrivial tree has a leaf, found at an endpoint of a longest path.

</details>
<details>
<summary>Hint 2</summary>

The property must hold in every nonempty subgraph, which is again a forest; then reverse the removal order.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every nonempty forest has either an isolated vertex or a leaf. Indeed, in a nontrivial tree a longest path has endpoints of degree one. Thus every nonempty subgraph, itself a forest, has a vertex of degree at most one, proving 1-degeneracy. Repeatedly remove such a vertex and colour in reverse order. At most one later neighbor is already coloured, so two colours suffice.

</details>

### Exercise 17.4
<a id="decompositions-orientations-ex-4"></a>
<a id="DM-CH12-E004"></a>

**balanced orientation of a star.**

Can the star $K_{1,4}$ be oriented with equal indegree and outdegree at every vertex? Find a balanced orientation.

<details>
<summary>Hint 1</summary>

At a leaf, indegree plus outdegree is one, so exact equality is impossible.

</details>
<details>
<summary>Hint 2</summary>

Balance is weaker than equality. Split the four central incident edges into two incoming and two outgoing.

</details>
<details>
<summary>Solution</summary>

**Solution.** Equality is impossible at any leaf because its total degree is one. Balanced means difference at most one. Direct two edges toward the centre and two away. The centre then has indegree two and outdegree two; every leaf has degrees $(1,0)$ or $(0,1)$. Thus all imbalances are at most one.

</details>

### Exercise 17.5
<a id="decompositions-orientations-ex-5"></a>
<a id="DM-CH12-E005"></a>

**topological certificate.**

For arcs $p\\to q$, $p\\to r$, $q\\to s$, $r\\to s$, $s\\to t$, give a topological order and prove adding $t\\to q$ destroys acyclicity.

<details>
<summary>Hint 1</summary>

Put the common predecessor first and the final successor last.

</details>
<details>
<summary>Hint 2</summary>

After the new arc is added, look at the three vertices q, s, and t.

</details>
<details>
<summary>Solution</summary>

**Solution.** $p,q,r,s,t$ is topological; swapping $q,r$ gives another. After adding $t\\to q$, the arcs $q\\to s$, $s\\to t$, $t\\to q$ form a directed cycle. That listed cycle is a direct certificate of non-acyclicity.

</details>

### Exercise 17.6
<a id="decompositions-orientations-ex-6"></a>
<a id="DM-CH12-E006"></a>

**source existence.**

Prove that every nonempty finite acyclic digraph has both a source and a sink.

<details>
<summary>Hint 1</summary>

Following predecessors forever in a finite graph must repeat a vertex.

</details>
<details>
<summary>Hint 2</summary>

Apply the same predecessor argument to the reversed digraph to obtain the other type of vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** The source proof for a nonempty digraph follows incoming arcs: if there were no source, repeated predecessor selection would eventually repeat a vertex, creating a directed cycle. Apply the same argument to the reversed digraph to obtain a source there, which is a sink in the original digraph.

</details>

### Exercise 17.7
<a id="decompositions-orientations-ex-7"></a>
<a id="DM-CH12-E007"></a>

**impossible strong orientation.**

Prove that a tree with at least two vertices has no strongly connected orientation.

<details>
<summary>Hint 1</summary>

Every edge in a nontrivial tree is a bridge.

</details>
<details>
<summary>Hint 2</summary>

Look at the two sides of the cut belonging to a single oriented bridge and ask which direction is unavailable.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every edge of a tree is a bridge: deleting edge $uv$ separates the unique $u$–$v$ path. In any orientation, choose a bridge directed from side $A$ to side $B$. No other edge crosses the cut, so no directed path can travel from $B$ back to $A$. Therefore the orientation is not strong.

</details>

### Exercise 17.8
<a id="decompositions-orientations-ex-8"></a>
<a id="DM-CH12-E008"></a>

**strong orientation of a cycle.**

How many strongly connected orientations does a labelled cycle $C_{n}$ have for $n\\ge 3$?

<details>
<summary>Hint 1</summary>

In a strong orientation, no cycle vertex can be a source or sink.

</details>
<details>
<summary>Hint 2</summary>

Each vertex has total degree two, so one chosen edge direction forces the direction of the next.

</details>
<details>
<summary>Solution</summary>

**Solution.** A strong orientation cannot give any vertex outdegree zero. Since every vertex has undirected degree two, strong connectivity forces each vertex to have one incoming and one outgoing edge. Once one edge direction is chosen, this balance forces every subsequent edge around the cycle, producing one consistently clockwise orientation. Reversing all edges gives the other. Thus there are exactly two.

</details>

### Exercise 17.9
<a id="decompositions-orientations-ex-9"></a>
<a id="DM-CH12-E009"></a>

**reachability cut.**

Suppose a search from $s$ reaches exactly $S$, with $t\\notin S$. Prove no arc leaves $S$.

<details>
<summary>Hint 1</summary>

Assume an arc leaves the set of vertices reached by the search.

</details>
<details>
<summary>Hint 2</summary>

Append that arc to a path reaching its tail and compare with the definition of the reachable set.

</details>
<details>
<summary>Solution</summary>

**Solution.** If an arc $u\\to v$ had $u\\in S$ and $v\\notin S$, concatenate an $s$–$u$ directed path with that arc. Then $v$ would be reachable and would belong to $S$, contradiction. Hence $\\delta^{+}(S)=\\varnothing$, certifying that $t$ is unreachable from $s$.

</details>

### Exercise 17.10
<a id="decompositions-orientations-ex-10"></a>
<a id="DM-CH12-E010"></a>

**tournament path insertion.**

Insert vertex $v$ into path $a\\to b\\to c\\to d$ when $a\\to v$, $b\\to v$, $v\\to c$, and $v\\to d$.

<details>
<summary>Hint 1</summary>

Search for two consecutive path vertices with the new vertex between their directions.

</details>
<details>
<summary>Hint 2</summary>

The supplied arcs b to v and v to c give the required insertion point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The transition from a path vertex pointing to $v$ to $v$ pointing to the next path vertex occurs between $b$ and $c$. Therefore $a\\to b\\to v\\to c\\to d$ is a directed path containing all five vertices. The orientations involving $a,d$ are consistent but only the two arcs adjacent to the insertion point are needed.

</details>

## Sources

This chapter rewrites and extends Euler's existing chapter [Graph Decompositions, Orientations, and Structural Certificates](../discrete-mathematics-proof-counting-structure/graph-decompositions-orientations.md). Its distinct mathematical arguments, eight worked examples, bounded investigation, and ten complete exercise solutions have been retained; the source file remains unchanged. The bridge, low-value, block, degeneracy, balance, ordering, reachability, and tournament arguments are proved in the text rather than inferred from computation.

The strong-orientation characterization is H. E. Robbins's theorem, originally published as [A Theorem on Graphs, with an Application to a Problem of Traffic Control](https://www.jstor.org/stable/2303897), *The American Mathematical Monthly* 46 (1939), 281–283, DOI 10.2307/2303897. The DFS proof above is self-contained. For broader context on connectivity and blocks, see Reinhard Diestel's author-hosted [Graph Theory preview](https://diestel-graph-theory.com/basic.html), especially Chapter 3. References consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0; no external text or figures are reproduced.

## Summary

Bridges, articulation structure, and degeneracy orders decompose an undirected graph into pieces with explicit interfaces. Orientations expose balance, precedence, and reachability. The decisive results pair claims with certificates: cycles versus bridge cuts, topological orders versus directed cycles, and reachability trees versus empty outgoing cuts. A connected graph admits a strong orientation exactly when it has no bridge, linking undirected decomposition to directed reachability. These ideas connect backward to trees, coloring, and matching certificates, and forward to exact computation, network algorithms, and independence structures.

The decompositions in this chapter preserve different interfaces: bridge components meet through edges, blocks meet through articulation vertices, and a degeneracy order records later neighbours. The orientation theorems then separate local degree balance from acyclicity and global reachability. Those distinctions prepare for further work on structural graph algorithms and on the independence and decomposition methods studied in Combinatorial Structures.
`;export{e as default};