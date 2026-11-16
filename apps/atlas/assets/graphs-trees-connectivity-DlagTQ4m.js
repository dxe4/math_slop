var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: graphs-trees-connectivity
title: "Graphs, Trees, and Connectivity"
level: undergraduate
estimated_minutes: 130
license: CC BY-SA 4.0
---

# Graphs, Trees, and Connectivity

A graph records pairwise adjacency while deliberately forgetting many details. A transit map may ignore geographic distance; a molecule graph may ignore bond angle; a collaboration graph may ignore when work occurred. This abstraction is useful only when conclusions are kept within the model.

This chapter assumes finite sets, proof by induction and extremal choice, and elementary counting. Unless stated otherwise, every graph is finite, undirected, and simple: no loop joins a vertex to itself and no parallel edges repeat a pair.

## 1. Graphs and their local data

A graph is a pair $G=(V,E)$, where $V$ is a finite vertex set and $E\\subseteq \\{\\{u,v\\}:u,v\\in V,u\\ne v\\}$. The **order** is $|V|$; the **size** is $|E|$. Vertices $u,v$ are adjacent when $\\{u,v\\}\\in E$.

The **neighborhood** $N(v)$ is the set of vertices adjacent to $v$, and the **degree** is $\\operatorname{deg}(v)=|N(v)|$. In a simple graph of order $n$, $0\\le \\operatorname{deg}(v)\\le n-1$.

A **subgraph** uses subsets of vertices and edges. An **induced subgraph** on $S\\subseteq V$ includes every original edge with both endpoints in $S$. These notions differ: a subgraph may omit an edge between retained vertices, while an induced subgraph may not.

### Handshake lemma revisited

**Theorem 9.1.** $\\sum_{v\\in V}\\operatorname{deg}(v)=2|E|$.

**Proof.** Count endpoint-edge incidences. Each vertex contributes one incidence per adjacent edge, giving the left side. Every simple undirected edge has exactly two endpoints, giving the right side. ∎

**Corollary 9.2.** The number of odd-degree vertices is even.

This parity condition is necessary for a proposed degree list to be graphical, but not sufficient. The list $(3,3,1,1)$ has even degree sum $8$, yet on four vertices each degree-3 vertex must meet everyone, forcing each alleged degree-1 vertex to meet both degree-3 vertices.

## 2. Walks, trails, paths, and cycles

A **walk** is a vertex sequence $v_{0},\\ldots,v_{k}$ with each consecutive pair adjacent. Its length is $k$. Vertices and edges may repeat. A **trail** repeats no edge. A **path** repeats no vertex. A **cycle** is a closed walk of positive length whose only repeated vertex is the first/last; in a simple graph its length is at least three.

The distinctions prevent false inferences. A closed walk can contain repeated detours and need not contain a cycle: traversing one edge out and immediately back is a closed walk in a tree. However, every positive-length **closed trail** in a simple graph contains a cycle. Choose a shortest positive-length closed subtrail. If it repeated an internal vertex, the portion between two occurrences would be a shorter closed subtrail. Thus only the first/last vertex repeats, and simplicity forces length at least three, so the subtrail is a cycle.

## 3. Connectivity is an equivalence relation

Vertices $u,v$ are **connected** if a path joins them. This relation is reflexive via a length-zero path, symmetric by reversing a path, and transitive by concatenating paths and deleting loops if vertices repeat. Its equivalence classes are the graph’s **connected components**.

A graph is **connected** when it has one component. Connectivity does not imply a direct edge between every pair; it promises a path.

### Minimum edges for connectivity

**Theorem 9.3.** Every connected graph of order $n\\ge 1$ has at least $n-1$ edges.

**Proof.** Begin with one vertex reached. Because the graph is connected, while not all vertices are reached there is an edge from the reached set to an unreached vertex: take a path from a reached vertex to any unreached one and use its first crossing edge. Each such edge adds at most one new vertex. Reaching the other $n-1$ vertices therefore requires at least $n-1$ distinct crossing edges. ∎

The theorem is an inequality. Equality identifies trees, as we now prove.

## 4. Trees are minimally connected and maximally acyclic

A **tree** is a connected graph with no cycle. A **forest** is an acyclic graph, possibly disconnected.

**Lemma 9.4 (leaf existence).** Every finite tree with at least two vertices has at least two leaves, where a leaf has degree $1$.

**Proof.** Choose a longest path. Any neighbor of an endpoint must lie on the path, or the path could be extended. The endpoint cannot have two neighbors on the path: one is the next vertex; another would create a cycle with the segment between them. Hence each endpoint has degree $1$, and the two endpoints are distinct leaves. ∎

**Theorem 9.5.** A tree of order $n$ has exactly $n-1$ edges.

**Proof by induction on $n$.** A one-vertex tree has zero edges. Let $T$ be a tree with $n\\ge 2$ vertices. Remove a leaf $v$ and its unique incident edge. The remaining graph is acyclic. It is also connected: a path between two remaining vertices in $T$ cannot use $v$ internally because $v$ has only one incident edge. Thus the remainder is a tree of order $n-1$, with $n-2$ edges by induction. Restoring the leaf edge gives $n-1$. ∎

Several characterizations follow.

**Tree characterization.** For a finite graph $G$ of order $n\\ge 1$, any two of the following conditions imply the third, and each standard pair characterizes a tree:

1. $G$ is connected;
2. $G$ is acyclic;
3. $|E|=n-1$.

We already proved connected plus acyclic implies the edge count. If $G$ is connected with $n-1$ edges and contained a cycle, remove a cycle edge; connectivity survives, producing a connected graph with $n-2$ edges, contradicting the connectivity lower bound. If $G$ is acyclic with $n-1$ edges and has $c$ components, each component is a tree; summing $n_{i}-1$ over components gives $|E|=n-c$. Thus $n-1=n-c$, so $c=1$ and the graph is connected.

## 5. Unique paths characterize trees

**Theorem 9.6.** A nonempty graph is a tree if and only if exactly one simple path joins every pair of distinct vertices.

**Proof.** In a tree, connectedness supplies at least one path. If two distinct simple paths joined $u$ and $v$, follow them from $u$ until they diverge and then until they first meet again; the two different segments form a cycle, impossible. Conversely, unique paths imply connectedness. If a cycle existed, two vertices on it would be joined by the two directions around the cycle, contradicting uniqueness. ∎

This theorem explains why every edge of a tree is a **bridge**: removing it destroys the unique path between its endpoints. Conversely, an edge lying on a cycle is not a bridge because the rest of the cycle supplies an alternate route.

## 6. Spanning trees expose the connective skeleton

A **spanning tree** of a connected graph uses every vertex and a subset of edges forming a tree. Existence follows from the minimal-connected-subgraph proof in Chapter 2: choose a connected spanning subgraph with the fewest edges; any cycle edge could be removed, so none exists.

Alternatively, repeatedly remove one edge from any cycle. Each removal preserves connectivity and strictly reduces the edge count. Finiteness ensures termination, and the final connected acyclic graph is a spanning tree.

Different deletion choices can yield different spanning trees. A spanning tree preserves reachability but not necessarily distance, capacity, or other edge data.

## 7. Cuts and bridges measure vulnerability

For $S\\subset V$, the **edge cut** $\\delta(S)$ consists of edges with one endpoint in $S$ and the other in $V\\setminus S$. If $G$ is connected and $S$ is nonempty and proper, $\\delta(S)$ is nonempty.

An edge is a bridge exactly when it is the only edge in some cut. If removing $e=uv$ separates the graph, let $S$ be the vertex set of the component containing $u$; then $\\delta(S)=\\{e\\}$. Conversely, if $\\delta(S)=\\{e\\}$, removing $e$ leaves no edge crossing between the two nonempty sides, so the graph disconnects.

This is a structural statement, not a reliability probability. To make claims about real failures, a model would need rates, dependence, repair, and the meaning of a functioning route.

## 8. Bipartite graphs and odd cycles

A graph is **bipartite** if $V$ can be partitioned into $X\\cup Y$ so every edge crosses between the parts. Equivalently, its vertices can be colored with two colors so adjacent vertices receive different colors.

Every cycle in a bipartite graph has even length, because a walk alternates between $X$ and $Y$ and can return to its starting side only after an even number of steps.

The converse is deeper but still elementary.

**Theorem 9.7.** A graph is bipartite if and only if it has no odd cycle.

**Proof of the converse.** Work in one connected component and choose a root $r$. Put in $X$ every vertex whose shortest-path distance from $r$ is even, and in $Y$ every vertex whose distance is odd. Suppose an edge $uv$ had both endpoints in the same part. A shortest root-to-$u$ path, the edge $uv$, and the reverse of a shortest root-to-$v$ path form an odd closed walk, because the two distances have the same parity. Every odd closed walk contains an odd cycle: if an internal vertex repeats, split the walk at two occurrences; the two closed pieces have total odd length, so one is odd, and repeat until no internal vertex repeats. Immediate backtracks have even length and cannot be the final odd piece. We therefore obtain an odd cycle, contradicting the hypothesis. Thus every edge crosses the parts. Apply the construction independently to each component. ∎

The proof uses shortest-path parity only as a mathematical layer structure; it does not require taking ownership of general algorithm verification.

## 9. Distance and layers

In a connected graph, $d(u,v)$ is the length of a shortest $u$–$v$ path. It satisfies:

- $d(u,v)\\ge 0$, with equality exactly when $u=v$;
- $d(u,v)=d(v,u)$;
- $d(u,w)\\le d(u,v)+d(v,w)$.

The triangle inequality holds because concatenating a shortest $u$–$v$ path with a shortest $v$–$w$ path gives a walk of the summed length; the shortest $u$–$w$ path can be no longer.

Layers $L_{i}=\\{v:d(r,v)=i\\}$ satisfy that every edge joins vertices in the same or adjacent layers. If an edge joined layers differing by at least two, it would create a shorter path to the farther endpoint.


### Worked example 1: from an edge list to components

Let $V=\\{a,b,c,d,e,f\\}$ and $E=\\{ab,bc,ca,cd,ef\\}$. Here $ab$ abbreviates the unordered edge $\\{a,b\\}$. The neighborhoods are $N(a)=\\{b,c\\}$, $N(b)=\\{a,c\\}$, $N(c)=\\{a,b,d\\}$, $N(d)=\\{c\\}$, $N(e)=\\{f\\}$, and $N(f)=\\{e\\}$. Their degrees add to $2+2+3+1+1+1=10=2|E|$.

The components are $\\{a,b,c,d\\}$ and $\\{e,f\\}$. In the first component the edges $ab,bc,ca$ form a triangle; $cd$ is a bridge, since deleting it isolates $d$. The edge $ef$ is also a bridge: deleting it increases the number of components from two to three. Thus a bridge is defined by an increase in component count even when the original graph is disconnected. The induced subgraph on $\\{a,c,d\\}$ has both $ac$ and $cd$; the subgraph with just $cd$ on those vertices is not induced.

The edge list is a certificate: one can check every claimed adjacency directly. The degree sum alone cannot identify the components, since different arrangements can have the same degree list. Likewise, a drawing can suggest a component but the absence of an edge between its vertices and the rest must be checked against the whole edge list.

### Worked example 2: construct and check a spanning tree

Take the connected graph with vertices $\\{1,2,3,4,5\\}$ and edges $12,23,31,34,45,35$. It consists of two triangles sharing vertex $3$. Delete $31$ and $35$. The remaining edges $12,23,34,45$ form the path $1-2-3-4-5$, so the retained graph is connected and acyclic. It is a spanning tree with four edges.

A second choice is $\\{13,23,34,35\\}$: every vertex reaches $3$, and the graph has five vertices and four edges, so the tree characterization applies. The two trees differ, although both preserve connectivity. In the original graph $d(1,3)=1$, while in the first tree the distance is $2$. A spanning tree can therefore increase shortest-path distance; its role here is a connectivity certificate, not a promise to preserve distances.

For weighted optimization and shortest-path algorithms, continue to [Spanning Trees and Shortest Paths](spanning-trees-shortest-paths.md). Those questions require additional edge weights and an optimality argument. For Euler and Hamilton questions, where the objects traversed and the allowed repetitions differ, see [Euler and Hamilton](euler-hamilton.md).

### Worked example 3: test a bipartition by layers

Let $V=\\{r,a,b,c,d\\}$ and $E=\\{ra,rb,ac,bc,cd\\}$. From root $r$, the distance layers are $L_0=\\{r\\}$, $L_1=\\{a,b\\}$, $L_2=\\{c\\}$, and $L_3=\\{d\\}$. Every listed edge joins an even layer to an odd layer, so $X=\\{r,c\\}$ and $Y=\\{a,b,d\\}$ give a bipartition. The square $r-a-c-b-r$ is even; its presence is consistent with bipartiteness.

Now add $ab$. It joins two vertices in $L_1$, and $r-a-b-r$ is an odd cycle. This explicit cycle certifies that no two-coloring exists: $r$ must differ from both $a$ and $b$, forcing $a,b$ to share a color despite their new edge. A same-layer edge does not always make a triangle, but the parity proof above still supplies an odd cycle.

### Worked example 4: edge counts and components

Suppose an acyclic graph has seven vertices and four edges. Each component is a tree, including an isolated vertex as a one-vertex tree. Writing its component orders as $n_1,\\ldots,n_c$, summation gives $4=\\sum_i(n_i-1)=7-c$, hence $c=3$. This count does not determine the component sizes: the disjoint union of a five-vertex path and two isolated vertices is one possibility; three components of orders $3,2,2$ are another.

If the seven-vertex graph has four edges but acyclicity is not known, the same conclusion need not hold. A triangle together with a disjoint edge and two isolated vertices has four components. The triangle uses one edge beyond the minimum needed to connect its three vertices, illustrating why the forest hypothesis is essential.

### Reading structural claims as certificates

To prove that two vertices are connected, list a path. To disprove their connection, exhibit a partition with the vertices on opposite sides and no crossing edge. To show that an edge is not a bridge, list a cycle containing it; to show it is a bridge, give a cut containing only that edge. Each certificate has a different direction: discovering a plausible drawing is not the same as proving that every omitted edge is absent.

For a connected graph, deleting a non-bridge edge leaves its endpoints connected by an alternative path. Replacing any use of the deleted edge by that path shows that all vertex pairs remain connected. Conversely, if an edge lies on no cycle, an alternative endpoint path would combine with the edge to form a cycle. Thus it is a bridge. This equivalence complements the cut criterion and is useful when cycles are easier to see than cuts.

A forest on $n$ vertices has at most $n-1$ edges when $n\\ge1$, but the converse fails: a triangle plus an isolated vertex has four vertices and three edges and is not a tree. Its equality of edge count hides both a cycle and disconnection. A hypothesis such as connectedness or acyclicity is needed in addition to the count.

## 10. Common errors

- Using “path” for a walk with repeated vertices, then applying a simple-path theorem.
- Assuming connected means complete.
- Proving a degree-sum condition and treating it as sufficient for a graph to exist.
- Removing a vertex from a tree without checking it is a leaf; connectivity may fail.
- Using $|E|=|V|-1$ alone without connectedness or acyclicity.
- Calling any connected subgraph spanning; spanning means every original vertex remains.
- Inferring real-system robustness from graph connectivity without a failure model.

## 11. Exercises with worked solutions

### DM-CH05-E001 — components in a forest

Prove that a forest with $n$ vertices and $c$ components has $n-c$ edges.

<details>
<summary>Hint</summary>

Sum the edge counts of the tree components.

</details>

<details>
<summary>Solution</summary>

#### DM-CH05-E001 — Solution

Each component is a tree. If component $i$ has $n_{i}$ vertices, it has $n_{i}-1$ edges. Summing gives $\\sum_{i}(n_{i}-1)=\\sum_{i} n_{i}-c=n-c$.

</details>

### DM-CH05-E002 — every edge a bridge

Prove that a connected graph is a tree if and only if every edge is a bridge.

<details>
<summary>Hint</summary>

Compare a cycle edge with the unique-path property.

</details>

<details>
<summary>Solution</summary>

#### DM-CH05-E002 — Solution

In a tree, unique paths show every edge is a bridge. Conversely, suppose a connected graph has a cycle. Any edge on that cycle can be removed while the rest of the cycle still joins its endpoints, so that edge is not a bridge. Therefore, if every edge is a bridge, no cycle exists; combined with connectedness, the graph is a tree.

</details>

### DM-CH05-E003 — degree forcing

Show that every simple graph of order at least $2$ has two vertices of the same degree.

<details>
<summary>Hint</summary>

Which two extreme degrees cannot coexist?

</details>

<details>
<summary>Solution</summary>

#### DM-CH05-E003 — Solution

Degrees lie in $\\{0,\\ldots,n-1\\}$. But degree $0$ and degree $n-1$ cannot both occur: a universal vertex would be adjacent to an isolated vertex. Thus at most $n-1$ degree values are available to $n$ vertices. Pigeonhole forces equality of two degrees.

</details>

### DM-CH05-E004 — count edges from degrees

A tree has four vertices of degree $1$, three of degree $2$, and all remaining vertices degree $3$. How many degree-3 vertices can it have?

<details>
<summary>Hint</summary>

Let $x$ be the unknown count and apply the handshake lemma.

</details>

<details>
<summary>Solution</summary>

#### DM-CH05-E004 — Solution

Let $x$ be the number of degree-3 vertices. Then $n=7+x$ and the degree sum is $4+6+3x=10+3x$. A tree has $n-1=6+x$ edges, so the handshake lemma gives degree sum $2(6+x)=12+2x$. Equating yields $10+3x=12+2x$, hence $x=2$.

</details>


### DM-CH05-E005 — induced and ordinary subgraphs

Let $G$ have vertices $1,2,3,4$ and edges $12,23,31,34$. List the edges induced by $\\{1,3,4\\}$. Is the subgraph on those vertices with only edge $34$ induced?

<details>
<summary>Hint</summary>

Check every original edge whose endpoints are both retained.

</details>

<details>
<summary>Solution</summary>

Both $31$ and $34$ have endpoints in the chosen set; neither $12$ nor $23$ does. Thus the induced edge set is $\\{31,34\\}$. The proposed subgraph omits $31$, so it is a subgraph but not the induced subgraph. Vertex $1$ is retained even though it is isolated in the proposed subgraph.

</details>

### DM-CH05-E006 — two paths and a cycle

Prove that if two distinct simple paths join vertices $u$ and $v$, their union contains a cycle.

<details>
<summary>Hint</summary>

Follow the paths until they first diverge, then locate their next common vertex.

</details>

<details>
<summary>Solution</summary>

Travel along the first path from $u$ to the first point at which the two paths take different next edges. Continue along that path until it first meets the remaining part of the second path; such a meeting exists at $v$. The two segments between the divergence and meeting have no common internal vertex by the choice of the first meeting, and each is simple. Together they form a cycle. The argument does not require the original paths to be internally disjoint everywhere.

</details>

### DM-CH05-E007 — adding an edge to a tree

Let $T$ be a tree and let $u,v$ be distinct nonadjacent vertices. Prove that adding $uv$ creates exactly one cycle.

<details>
<summary>Hint</summary>

Use the unique $u$–$v$ path before the edge is added.

</details>

<details>
<summary>Solution</summary>

The unique $u$–$v$ path in $T$ together with $uv$ is a cycle. Every cycle in the enlarged graph must use the new edge, because $T$ had none. Removing $uv$ from any such cycle leaves a simple $u$–$v$ path in $T$, which is the unique path already identified. Hence there is exactly one new cycle.

</details>

### DM-CH05-E008 — a component count with a hypothesis

A forest has $12$ vertices and $8$ edges. Find its number of components. Explain why the same answer cannot be inferred for an arbitrary graph with those counts.

<details>
<summary>Hint</summary>

Apply the forest identity, then build a small cycle and add isolated vertices.

</details>

<details>
<summary>Solution</summary>

For a forest, $m=n-c$, so $c=12-8=4$. Without acyclicity, take a triangle with a leaf attached to one of its vertices, together with four disjoint edges. This graph has $4+8=12$ vertices and $4+4=8$ edges, but five components. The cycle accounts for the extra edge, so the forest conclusion does not apply.

</details>

### DM-CH05-E009 — layers constrain edges

In a connected graph rooted at $r$, prove that an edge $uv$ satisfies $|d(r,u)-d(r,v)|\\le1$.

<details>
<summary>Hint</summary>

Append the edge to a shortest path to either endpoint.

</details>

<details>
<summary>Solution</summary>

A shortest $r$–$u$ path followed by $uv$ is a walk to $v$ of length $d(r,u)+1$, so $d(r,v)\\le d(r,u)+1$. Reversing the roles of $u,v$ gives $d(r,u)\\le d(r,v)+1$. Together these inequalities give the stated absolute-value bound. An edge can join the same layer, as a triangle rooted at one vertex shows.

</details>

### DM-CH05-E010 — an odd-cycle certificate

A graph consists of a five-cycle $1-2-3-4-5-1$ and a leaf $6$ adjacent only to $3$. Is it bipartite? Which edges are bridges?

<details>
<summary>Hint</summary>

Use the cycle itself to settle two-colorability and compare its edges with the leaf edge.

</details>

<details>
<summary>Solution</summary>

The five-cycle is odd, so the graph is not bipartite. Each of its five edges lies on that cycle and is not a bridge: the rest of the cycle gives an alternative route. The edge $36$ is a bridge because removing it isolates $6$; equivalently, it is the sole edge in the cut $\\delta(\\{6\\})$. The leaf does not change the odd-cycle obstruction.

</details>

## Chapter summary

Graphs turn adjacency into a finite structure. Walk distinctions control what may repeat; connectivity partitions vertices; trees are exactly connected acyclic graphs and carry $n-1$ edges and unique paths. Spanning trees retain reachability, cuts expose bridges, and absence of odd cycles exactly characterizes bipartiteness. Every conclusion depends on the graph convention and on which data the abstraction intentionally discarded.
`;export{e as default};