
# Graph Minors and Wagner

## Simplification with a record of what was merged

Deleting an edge asks what happens when a connection is removed. Contracting an edge asks what happens when its endpoints are treated as a single region. A minor combines these operations. The resulting graph may have fewer vertices and a different degree pattern, but it still records a definite collection of connected regions and connections in the original graph.

That record makes minors useful as certificates. To prove a graph is nonplanar, we can exhibit connected regions that reproduce one of two forbidden patterns after contraction. To understand a class closed under simplification, we can ask which minimal obstructions lie outside it. These ideas range from small hand calculations to the graph minor theorem of Robertson and Seymour. We will prove the elementary machinery and state that deeper theorem explicitly as cited.

Required preparation includes subgraphs, paths, trees, connectivity, and plane drawings. The planarity argument uses Euler's formula and the Kuratowski theorem from [Planar Graphs and Kuratowski](planar-graphs-kuratowski.md). The difficult direction of Kuratowski is a named input, not reproved by a few contraction pictures here. All graphs in this chapter are finite, undirected, and simple. Graphs are compared up to isomorphism when vertex labels do not matter.

## The three minor operations

**Definition 16.1 (Minor).** A graph $H$ is a minor of $G$, written $H\preccurlyeq G$, if a graph isomorphic to $H$ can be obtained by a finite sequence of vertex deletions, edge deletions, and edge contractions. Zero operations are allowed.

Deleting a vertex deletes all its incident edges. Deleting an edge keeps its endpoints. To contract an edge $uv$, identify $u,v$ to a new vertex, retain their connections to other vertices, delete any loop produced, and replace parallel edges by one edge to remain in the simple-graph convention. This cleanup is part of our contraction operation.

A contraction can change more than one edge count. If a vertex $w$ was adjacent to both $u$ and $v$, its two connections become parallel and are merged. Ignoring this would give the wrong resulting simple graph. The contracted vertex represents a connected pair, rather than an arbitrary pair of vertices: identifying nonadjacent vertices is not an allowed elementary contraction.

Every subgraph is a minor, by deletions alone. Not every minor is a subgraph, because contractions merge vertices and can create adjacency patterns not present on any original vertex subset. This distinction also separates minors from induced subgraphs, where all edges among the selected vertices must be retained.

**Example 16.2 (Contracting an edge of $K_4$).** Label $K_4$ by $u,v,x,y$ and contract $uv$ to $w$. The two edges from $u,v$ to $x$ become one edge $wx$, the two to $y$ become one edge $wy$, and $xy$ remains. The result is $K_3$ on $w,x,y$. Its vertex count drops from four to three and its edge count from six to three. The edge count does not merely decrease by one, because two pairs of parallel edges were merged. The connected regions represented by its vertices are $\{u,v\}$, $\{x\}$, and $\{y\}$.

**Proposition 16.3 (Minor order).** The minor relation is reflexive and transitive. On isomorphism classes of finite simple graphs it is antisymmetric.

*Proof.* Zero operations prove reflexivity. Concatenating operation sequences proves transitivity. Each allowed operation weakly decreases the vertex count. Therefore, if $H\preccurlyeq G$ and $G\preccurlyeq H$, their vertex counts are equal, and neither sequence can use a vertex deletion or contraction. Only edge deletions remain. Mutual minor containment then forces equal edge counts, so neither sequence deletes an edge either. The graphs must be isomorphic. ∎

A proper minor has smaller $|V|+|E|$: every genuine deletion or contraction decreases that integer. This simple measure rules out infinite strictly descending chains starting from a finite graph. It will also let us choose minimal obstructions without an unproved minimization principle.

## Branch sets: a checkable model

**Definition 16.4 (Branch-set model).** An $H$-model in $G$ is a collection of nonempty vertex sets $(B_h:h\in V(H))$ such that the sets are pairwise disjoint, each $G[B_h]$ is connected, and whenever $hh'$ is an edge of $H$, some edge of $G$ joins $B_h$ to $B_{h'}$.

Edges between sets corresponding to nonadjacent vertices of $H$ are permitted: we can delete them. The sets need not cover $V(G)$: we can delete unused vertices. Connectivity within each set is essential. A disconnected set cannot in general be merged to one vertex by contractions without using additional vertices that might belong to another branch set.

**Theorem 16.5 (Branch-set characterization).** A finite simple graph $H$ is a minor of $G$ if and only if $G$ has an $H$-model.

*Proof.* Begin with singleton sets for the vertices of $G$. During a minor operation sequence, track which original vertices have been merged into each current vertex. Deletions discard vertices or connections. Contracting a current edge merges two disjoint connected tracked sets joined by an original edge, so their union is connected. The remaining tracked sets stay disjoint. Every current edge is supported by an original edge between the corresponding sets. At the end these tracked sets form the desired model for $H$.

Conversely, suppose a model is supplied. In each connected $G[B_h]$, choose a spanning tree. For each edge $hh'$ of $H$, choose one witnessing edge between the corresponding sets. Delete every vertex outside the branch sets and every edge except those selected tree and witness edges. Contract each selected spanning tree to one vertex. Different trees use disjoint vertex sets, so these contractions do not merge two branch sets. The remaining witness edges give exactly the edges of $H$. Thus $H\preccurlyeq G$. ∎

A model can be verified without trusting the method that found it. Check disjointness, a connecting tree inside each branch set, and one witness edge for every edge of $H$. This is a positive certificate. Failure of one attempted model says nothing about other possible choices.

Transitivity also has a model interpretation. If a branch set of an $F$-model in $H$ contains several vertices $h$, replace it by the union of their branch sets in a fixed $H$-model in $G$. Connectivity follows along the witness edges for a connecting tree in that set of $H$ vertices. The unions remain disjoint, and the required edges between them are inherited. This explains why nested contractions can be flattened into one certificate in the original graph.

**Example 16.6 (A $K_4$ minor in a wheel).** Let a four-cycle $a,b,c,d,a$ have an additional hub $h$ adjacent to all rim vertices. Take branch sets $\{h\}$, $\{a,b\}$, $\{c\}$, and $\{d\}$. The second set is connected by $ab$. The hub meets all three other sets. Among those three, the witness edges $bc$, $cd$, and $da$ supply every pair. Hence these four branch sets form a $K_4$ model. Contracting $ab$ makes that model visible as an actual four-vertex complete graph. This wheel is planar, consistent with the fact that $K_4$ is planar too.

## Minor versus subdivision

**Definition 16.7 (Subdivision and topological minor).** A subdivision of $H$ replaces each edge of $H$ by a path of positive length, with the replacement paths internally vertex-disjoint and with internal vertices different from all original vertices. If a subgraph of $G$ is a subdivision of $H$, then $H$ is a topological minor of $G$.

**Proposition 16.8.** Every topological minor is a minor.

*Proof.* Delete all vertices and edges outside the chosen subdivision. For each replacement path, contract edges until a single edge remains between its original endpoints. Internal disjointness ensures that these contractions never merge two original vertices or interfere with a different replacement path. The resulting graph is $H$. ∎

The converse is false. A minor branch set can be a branching tree, whereas the internal vertices of a subdivided edge have degree two within the chosen subdivision. A high-degree vertex in a minor can arise by contracting a connected region whose vertices individually have smaller degrees.

For example, take adjacent vertices $u,v$, attach two leaves to each, and include no other edges. The maximum degree is three. Contracting $uv$ produces $K_{1,4}$, which has a degree-four centre. The original graph cannot contain a subdivision of $K_{1,4}$: such a subdivision would require a branch vertex incident with four distinct subdivision edges, and therefore a vertex of degree at least four in the original graph. Degree bounds are not automatically preserved by minors.

**Example 16.9 (A $K_5$ model in the Petersen graph).** Define vertices $a_i,b_i$ for $i\in\mathbb Z/5\mathbb Z$, with outer edges $a_i a_{i+1}$, spokes $a_ib_i$, and inner edges $b_i b_{i+2}$. This is the usual Petersen graph. For each residue $i$, take $B_i=\{a_i,b_i\}$, connected by its spoke. The five branch sets are disjoint. Two indices differing by $1$ or $-1$ have an outer witness edge, while indices differing by $2$ or $-2$ have an inner witness edge. These are all nonzero differences modulo five, so every pair of branch sets is adjacent. They give a $K_5$ minor.

Every Petersen vertex has degree three, so it has no subdivision of $K_5$, whose branch vertices would require degree four. Thus the particular forbidden object produced by a minor model need not also occur as a subdivision of that same graph. Kuratowski's theorem can still force a different forbidden subdivision in a nonplanar graph; there is no conflict between the two statements.

## Planarity survives minor operations

**Theorem 16.10 (Planarity is minor-closed).** Every minor of a planar graph is planar.

*Proof.* Deleting an edge or vertex from a crossing-free drawing leaves a crossing-free drawing of the remaining graph. For a contraction of a drawn edge $uv$, take a thin neighbourhood of the edge together with small neighbourhoods of its endpoints. It can be chosen to meet no other vertex and no nonincident edge; a finite plane drawing permits this local choice. The neighbourhood is a disk-shaped region around the edge and its endpoint neighbourhoods. Every other edge incident with $u$ or $v$ enters it through a distinct boundary point.

Erase the parts inside that region, place the merged vertex inside it, and join it to those boundary points as a noncrossing star, preserving their cyclic boundary order. Outside the region the drawing is unchanged. Any loops or parallel edges may then be deleted for our simple-graph convention. This constructs a crossing-free drawing of the contracted graph. Repeating the argument along a minor sequence proves the result. ∎

The local drawing argument does not say that every arbitrary vertex identification preserves planarity. Only adjacent endpoints are merged along their drawn edge. Identifying distant regions by a new operation would require a separate argument and is not part of the minor definition.

**Proposition 16.11 (The two basic nonplanar graphs).** Neither $K_5$ nor $K_{3,3}$ is planar.

*Proof.* If $K_5$ had a plane drawing, Euler's formula with $n=5$, $m=10$ would give $f=7$. Every face boundary has length at least three, while all edge sides together give $2m=20$. This would imply $21=3f\le20$, a contradiction.

For $K_{3,3}$, Euler's formula with $n=6$, $m=9$ would give $f=5$. Every face boundary has length at least four: the graph is simple and bipartite, and no bridge produces a length-two face boundary. Thus $20=4f\le2m=18$, again impossible. The face counts use the planar drawing assumption only to derive the contradiction. ∎

It follows that a branch-set model of either graph is a certificate of nonplanarity. If the host were planar, its forbidden minor would be planar by Theorem 16.10, contrary to Proposition 16.11.

## Wagner's characterization and its stated input

**Theorem 16.12 (Wagner, using the cited Kuratowski theorem).** A finite simple graph is planar if and only if it has neither $K_5$ nor $K_{3,3}$ as a minor.

*Proof.* If the graph is planar, Theorem 16.10 and Proposition 16.11 exclude both minors. Conversely, suppose it has neither minor. Proposition 16.8 then excludes subdivisions of either graph as subgraphs. The Kuratowski theorem from [Planar Graphs and Kuratowski](planar-graphs-kuratowski.md) says that a finite graph without those two subdivisions is planar. Apply that theorem to conclude planarity. ∎

The dependence is explicit: this is a complete deduction from Kuratowski, not a new elementary proof of Kuratowski's difficult direction. The statement is historically associated with Wagner's 1937 minor formulation. It is also distinct from Wagner's later conjecture about ordering all finite graphs, which leads to the Robertson–Seymour theorem below.

**Example 16.13 (A subdivision defeats a simple edge-count test).** Start with $K_{3,3}$ and replace the edge $a_1b_1$ by the two-edge path $a_1,x,b_1$. The new graph has seven vertices and ten edges, so it satisfies the necessary simple planar bound $m\le3n-6$. That bound therefore does not detect its nonplanarity. Contract $a_1x$ to recover $K_{3,3}$; all other vertices may be singleton branch sets. The forbidden minor certifies nonplanarity immediately.

The graph has no $K_{3,3}$ subgraph: the new vertex has degree two and cannot belong to such a subgraph, while the six original vertices are missing $a_1b_1$. It also has no $K_5$ subgraph, because its maximum degree is three. Nonplanarity requires exclusion of the patterns as minors or subdivisions, rather than merely as unchanged subgraphs.

## Minor-closed classes and minimal obstructions

**Definition 16.14 (Minor-closed class).** An isomorphism-invariant class $\mathcal C$ is minor-closed if $G\in\mathcal C$ and $H\preccurlyeq G$ imply $H\in\mathcal C$. An excluded minor for $\mathcal C$ is a graph outside the class all of whose proper minors belong to the class.

Planar graphs form a minor-closed class. Forests do as well. Deletions cannot create a cycle in a forest. Contracting an edge in a tree retains connectedness and reduces both its vertex and edge counts by one; it creates no parallel edges because two endpoints with a common neighbour would have formed a triangle. The result is connected with one fewer edge than vertices, hence still a tree. Applying this to components proves the forest claim.

Bipartite graphs are not minor-closed: contracting one edge of a four-cycle produces a triangle. Connected graphs are not minor-closed either, because deleting an edge can disconnect a tree. A property being natural or important does not make it compatible with every minor operation.

For a graph outside a minor-closed class, choose a minor still outside the class minimizing $|V|+|E|$. Every proper minor of that chosen graph belongs to the class, so it is an excluded minor. Therefore any graph lies in the class exactly when it contains none of its excluded minors. This argument establishes an obstruction description but does not establish that the obstruction list is finite.

**Theorem 16.15 (Robertson–Seymour graph minor theorem; cited).** In every infinite sequence $G_1,G_2,\ldots$ of finite graphs, there exist $i<j$ with $G_i\preccurlyeq G_j$.

This theorem is cited to Robertson and Seymour's *Graph Minors. XX. Wagner's conjecture*, linked through Seymour's author publication page in Sources. Its proof is far beyond this chapter. In particular, the branch-set lemma, a finite search, and the planar forbidden-minor theorem do not prove it.

**Corollary 16.16 (Finite obstruction sets, conditional on Theorem 16.15).** Every minor-closed class of finite graphs has finitely many excluded minors up to isomorphism.

*Proof.* Two distinct excluded minors cannot be comparable by the minor relation: if $H$ were a proper minor of another excluded graph $K$, then minimality of $K$ would put $H$ inside the class, a contradiction. An infinite collection of pairwise nonisomorphic excluded minors would therefore give an infinite sequence with no earlier graph a minor of a later one, contradicting the cited theorem. ∎

A finite-obstruction theorem does not itself list the obstructions for a particular class or bound them by a small usable number. The planar class is unusually concrete: its two forbidden minors are explicit. For forests, the single obstruction is $K_3$, because every cycle contracts to a triangle and every forest minor remains a forest. Other classes can need much more work even after finiteness is known.

## Certificates and scope

A positive minor certificate specifies the branch sets and witness edges. A nonplanarity certificate may give a $K_5$ or $K_{3,3}$ model. A plane drawing supplies a different kind of positive certificate for planarity. A failed attempt to draw a graph or find a model is neither certificate.

For a fixed finite host and pattern, exhaustive search over disjoint vertex-set assignments is a complete but potentially large method of looking for a model. Each candidate can be checked by connectivity and adjacency. That observation establishes decidability by a finite search, not a practical bound on its running time and not a proof of the graph minor theorem. More advanced algorithms and structure theorems require their own hypotheses and proofs.

Minor arguments often simplify a graph while preserving an obstruction. They should not be used to carry over unrelated data. Distances can shrink, degrees can rise, bipartiteness can fail, and edge identities can disappear under contraction. The branch-set record explains exactly what connectivity and adjacency have been retained. The next chapter studies decompositions that retain interfaces between graph pieces rather than merging them without a record.

## Exercises

### Exercise 16.1
<a id="graph-minors-wagner-ex-1"></a>

Contract one edge of $K_4$ in the simple-graph convention. Give the resulting graph, its edge count, and the corresponding branch sets.

<details>
<summary>Hint 1</summary>

The two remaining vertices each had an edge to both contracted endpoints.

</details>
<details>
<summary>Hint 2</summary>

Each such pair of edges becomes parallel and must be replaced by one edge.

</details>
<details>
<summary>Solution</summary>

If $uv$ is contracted, use branch sets $\{u,v\}$, $\{x\}$, $\{y\}$. The resulting vertex has one edge to each of $x,y$, which also remain adjacent. The result is $K_3$ with three edges. The contracted edge disappears and two parallel pairs are merged, so the original six edges become three. Merely subtracting the contracted edge would give the wrong simple-graph edge count.

</details>

### Exercise 16.2
<a id="graph-minors-wagner-ex-2"></a>

Give a $K_3$ model in the six-cycle $v_1v_2\cdots v_6v_1$, and describe contractions realizing it.

<details>
<summary>Hint 1</summary>

Group the vertices into three adjacent pairs around the cycle.

</details>
<details>
<summary>Hint 2</summary>

Use the edges between successive pairs as the three witness edges.

</details>
<details>
<summary>Solution</summary>

Take $B_1=\{v_1,v_2\}$, $B_2=\{v_3,v_4\}$, and $B_3=\{v_5,v_6\}$. Each is connected by a cycle edge. The witness edges are $v_2v_3$, $v_4v_5$, and $v_6v_1$. Contract $v_1v_2$, $v_3v_4$, and $v_5v_6$ to obtain a triangle. The sets are disjoint, so no two proposed triangle vertices are accidentally merged.

</details>

### Exercise 16.3
<a id="graph-minors-wagner-ex-3"></a>

In the path $1-2-3-4$, the sets $\{1,4\}$, $\{2\}$, and $\{3\}$ have an edge between every pair. Explain why they do not prove a $K_3$ minor.

<details>
<summary>Hint 1</summary>

Check every branch-set condition, not just the witness edges between sets.

</details>
<details>
<summary>Hint 2</summary>

The first set is disconnected. A forest cannot acquire a cycle by minor operations.

</details>
<details>
<summary>Solution</summary>

The set $\{1,4\}$ is not connected in the path, so the proposed sets are not a branch-set model. Merging vertices one and four would require using intermediate vertices already assigned to other sets. The path is a forest and every minor of a forest is a forest, while $K_3$ contains a cycle. Thus no alternative valid model exists either. This example shows that adjacency between disconnected groups is insufficient.

</details>

### Exercise 16.4
<a id="graph-minors-wagner-ex-4"></a>

Construct a graph of maximum degree three with a $K_{1,4}$ minor. Explain why it has no subdivision of $K_{1,4}$.

<details>
<summary>Hint 1</summary>

Join two prospective central vertices and attach two leaves to each.

</details>
<details>
<summary>Hint 2</summary>

Contract the central edge. A subdivision retains a degree-four branch vertex.

</details>
<details>
<summary>Solution</summary>

Use the tree with edges $uv,ua,ub,vc,vd$. Its maximum degree is three at $u,v$. Contracting $uv$ produces a centre adjacent to four leaves, giving $K_{1,4}$. A subdivision of that star would need one original vertex incident with four distinct paths at its centre, hence degree at least four in the host. No such vertex exists. A minor is therefore not necessarily a topological minor of the same type.

</details>

### Exercise 16.5
<a id="graph-minors-wagner-ex-5"></a>

Subdivide one edge of $K_{3,3}$ once. Prove the resulting graph is nonplanar and explain why searching only for an unchanged $K_{3,3}$ subgraph misses the obstruction.

<details>
<summary>Hint 1</summary>

Contract one of the two edges in the replacement path.

</details>
<details>
<summary>Hint 2</summary>

The new vertex has degree two, while all vertices of a $K_{3,3}$ subgraph would need degree at least three within the host.

</details>
<details>
<summary>Solution</summary>

Contracting one replacement edge recovers $K_{3,3}$, so the new graph has a nonplanar minor and is nonplanar. A $K_{3,3}$ subgraph cannot include the new degree-two vertex. On the six old vertices, the subdivided edge is absent, leaving only eight of the nine required edges. Thus there is no unchanged $K_{3,3}$ subgraph, even though there is a subdivision and a minor. The obstruction survives the change of edge lengths.

</details>

### Exercise 16.6
<a id="graph-minors-wagner-ex-6"></a>

Verify the five spoke-pair branch sets in the Petersen graph form a $K_5$ model, accounting for all possible differences between two indices modulo five.

<details>
<summary>Hint 1</summary>

There are four nonzero residues modulo five. The outer and inner edges account for different pairs of them.

</details>
<details>
<summary>Hint 2</summary>

Differences $\pm1$ use outer edges; differences $\pm2$ use inner edges.

</details>
<details>
<summary>Solution</summary>

Each $B_i=\{a_i,b_i\}$ is connected by its spoke, and distinct branch sets are disjoint. For any $i\ne j$, the difference $j-i$ is one of $1,-1,2,-2$ modulo five. An outer edge joins $B_i$ to $B_j$ in the first two cases, and an inner edge does so in the last two. Thus every pair is adjacent and the sets model $K_5$. Planarity is minor-closed and $K_5$ is nonplanar, so this also certifies Petersen nonplanarity.

</details>

### Exercise 16.7
<a id="graph-minors-wagner-ex-7"></a>

Prove that the class of graphs of maximum degree at most two is minor-closed and has the single excluded minor $K_{1,3}$.

<details>
<summary>Hint 1</summary>

A connected graph of maximum degree at most two is a path, a cycle, or an isolated vertex. Alternatively bound the degree of a newly contracted vertex.

</details>
<details>
<summary>Hint 2</summary>

If a graph has a degree-three-or-more vertex, keep three of its incident edges and delete unwanted vertices and edges.

</details>
<details>
<summary>Solution</summary>

Deletions do not raise degrees. Contracting an edge whose endpoints have degrees at most two leaves the new vertex with degree at most $(2-1)+(2-1)=2$, with parallel-edge cleanup only reducing it. Thus the class is minor-closed. A vertex with at least three neighbours supplies a $K_{1,3}$ subgraph after keeping that vertex, three neighbours, and the three incident edges while deleting other edges. Conversely $K_{1,3}$ cannot be a minor of a degree-at-most-two graph by minor closure. Hence exactly the graphs in this class exclude $K_{1,3}$ as a minor, making it the unique minimal obstruction.

</details>

### Exercise 16.8
<a id="graph-minors-wagner-ex-8"></a>

A graph contains a $K_4$ model with branch sets $B_1,B_2,B_3,B_4$. Construct a triangle model from it without choosing new paths in the original graph.

<details>
<summary>Hint 1</summary>

A triangle is a minor of $K_4$. Combine two branch sets joined by a witness edge.

</details>
<details>
<summary>Hint 2</summary>

Use $B_1\cup B_2$, $B_3$, and $B_4$. Check connectivity and the three required adjacencies.

</details>
<details>
<summary>Solution</summary>

The union $B_1\cup B_2$ is connected because each set is connected and a witness edge joins them. It is disjoint from $B_3,B_4$. An edge between $B_3,B_4$ is already present, and edges from $B_1$ to each of those sets witness the other two triangle adjacencies. Thus the three proposed sets form a $K_3$ model. This is the branch-set version of composing minor operations, not an identification of disconnected regions.

</details>

### Exercise 16.9
<a id="graph-minors-wagner-ex-9"></a>

Explain why satisfying $m\le3n-6$ does not establish planarity. Give a concrete nonplanar graph satisfying that inequality, with a minor certificate.

<details>
<summary>Hint 1</summary>

Use the subdivided $K_{3,3}$ example, whose vertex and edge counts were computed in the chapter.

</details>
<details>
<summary>Hint 2</summary>

The edge bound is necessary for simple planar graphs of order at least three. Necessity does not imply sufficiency.

</details>
<details>
<summary>Solution</summary>

Subdividing one edge of $K_{3,3}$ once gives $n=7$, $m=10$, so $10\le15=3n-6$. Contracting one edge of the replacement path recovers $K_{3,3}$, proving nonplanarity. The numerical inequality therefore cannot distinguish this graph from all planar graphs with similar counts. It is a necessary consequence of a drawing, not a construction of a drawing or a forbidden-minor characterization.

</details>

### Exercise 16.10
<a id="graph-minors-wagner-ex-10"></a>

Prove directly that forests are exactly the graphs with no $K_3$ minor. Identify where this proof avoids using the cited Robertson–Seymour theorem.

<details>
<summary>Hint 1</summary>

Every minor of a forest is a forest. Every nonforest contains a cycle.

</details>
<details>
<summary>Hint 2</summary>

Delete everything outside a chosen cycle and contract its edges until three vertices remain.

</details>
<details>
<summary>Solution</summary>

A forest cannot have a $K_3$ minor because minor operations preserve being a forest, while a triangle is cyclic. Conversely a nonforest has a cycle of length at least three. Delete vertices and edges outside that cycle and contract cycle edges until it becomes a triangle. Thus every nonforest has a $K_3$ minor. This explicit argument identifies the obstruction and proves the characterization itself; it does not need the general theorem asserting finite obstruction sets for every minor-closed class.

</details>

## Sources

The explanations, branch-set arguments, examples, and exercises are original. Wagner's historical minor formulation is documented by K. Wagner, [Über eine Eigenschaft der ebenen Komplexe](https://link.springer.com/article/10.1007/BF01594196), *Mathematische Annalen* 114 (1937), 570–590. The proof above explicitly depends on the separately stated Kuratowski theorem. For further treatment, see Reinhard Diestel's author-hosted [Graph Theory preview](https://diestel-graph-theory.com/basic.html), Chapters 4 and 12.

The cited graph minor theorem is Neil Robertson and Paul D. Seymour, *Graph Minors. XX. Wagner's conjecture*, *Journal of Combinatorial Theory, Series B* 92 (2004), 325–357; its author-hosted link is listed on [Seymour's publication page](https://web.math.princeton.edu/~pds/online.html). Its deep proof is not reproduced or claimed here. References consulted 13 November 2026. This chapter's original prose is licensed CC BY-SA 4.0; no external text or figures are reproduced.

## Summary

Minor operations delete vertices, delete edges, and contract edges with a declared simple-graph cleanup. Branch sets record disjoint connected regions and witness edges, giving an equivalent and checkable description of a minor. A subdivision always contracts to a minor, but a minor need not be a subdivision of the same graph.

Planarity is preserved by all minor operations. Together with the cited Kuratowski theorem, this proves Wagner's characterization by exclusion of $K_5$ and $K_{3,3}$ minors. Minimal obstructions describe every minor-closed class; the separate Robertson–Seymour theorem, stated as cited, implies their finiteness. Neither finiteness nor a failed search supplies an obstruction list automatically. In [Decompositions and Orientations](decompositions-orientations.md), connected pieces and their interfaces will instead be retained to certify separations and directed reachability.
