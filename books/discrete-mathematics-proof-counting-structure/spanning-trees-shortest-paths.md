
# Spanning Trees and Shortest Paths

## Two questions about a weighted network

Suppose vertices represent sites and edges represent possible connections, each with a numerical cost. One question asks for a cheapest collection of connections that links every site. Another asks for the cheapest route from one specified site to each other site. Both questions involve edges and sums of weights, but they optimize different quantities. A network that is cheapest to construct need not give its users the cheapest journeys.

The distinction leads to two greedy algorithms. Kruskal's algorithm builds a minimum spanning tree by accepting cheap edges that do not create cycles. Dijkstra's algorithm finds shortest routes by permanently settling the vertex with the smallest current distance label. Each algorithm makes a local choice. The mathematical task is to show why the local choice does not prevent a globally optimal answer, and to identify the hypotheses that make that claim true.

Read [graphs, trees and connectivity](graphs-trees-connectivity.md) first, especially unique paths in trees, connected components and cuts. The proofs also use the invariant method from [proof, induction and invariants](proof-induction-invariants.md). Throughout, graphs are finite and their vertex sets are nonempty. We begin with undirected simple graphs and explicitly switch to directed graphs for shortest paths. A weight is part of the mathematical input, not automatically a geographical length, a travel time or a real construction price.

## Minimum spanning trees and the exchange idea

**Definition 10.1 (Weighted spanning tree).** Let $G=(V,E)$ be a connected undirected graph, with a real weight $w(e)$ for every edge. A spanning tree is an edge set $T\subseteq E$ for which $(V,T)$ is connected and acyclic. Its total weight is

$$
w(T)=\sum_{e\in T}w(e).
$$

A minimum spanning tree, abbreviated MST, is a spanning tree of least total weight among all spanning trees of $G$.

The word minimum concerns weight, not edge count: every spanning tree has exactly $|V|-1$ edges. A connected finite graph has a spanning tree, and there are only finitely many edge subsets. Consequently a minimum exists. There can be several different minimum trees. Weights may be negative or zero; the definition and Kruskal's proof permit both.

For a disconnected graph, there is no spanning tree covering all vertices. Instead, a spanning forest consists of a spanning tree in each original connected component, including isolated vertices as one-vertex trees. A minimum spanning forest minimises the sum of their weights. It preserves all original components rather than pretending that a missing connection is available. If there are $n$ vertices and $c$ components, every such forest has $n-c$ edges.

**Example 10.2 (Construction cost versus route cost).** Consider a triangle on vertices $s,a,b$, with $w(sa)=2$, $w(sb)=2$ and $w(ab)=1$. A spanning tree needs two edges. The minimum total is $3$, achieved by $\{sa,ab\}$ or $\{sb,ab\}$. In the first minimum tree, the route from $s$ to $b$ has weight $2+1=3$, although the original graph contains the direct edge $sb$ of weight $2$.

The tree $\{sa,sb\}$ preserves shortest routes from $s$ to both other vertices, but its total weight is $4$. Thus neither minimum construction cost nor shortest source routes can be inferred from the other. Before selecting an algorithm, write down which sum is being minimised.

**Lemma 10.3 (One-edge exchange).** Let $T$ be a tree and let $e=uv$ be an edge not in $T$, with both endpoints among its vertices. Adding $e$ creates exactly one cycle: $e$ together with the unique $u$–$v$ path in $T$. Removing any other edge of that cycle gives a tree on the same vertices.

*Proof.* The unique path plus $e$ is a cycle. Every cycle in $T+e$ must contain $e$, since $T$ itself has no cycle. Removing $e$ from such a cycle leaves a $u$–$v$ path in $T$, which must be the unique one. Therefore there is exactly one cycle. If an edge $f$ of that cycle is removed, the rest of the cycle still joins its endpoints, so removing $f$ does not disconnect the graph. The result has no cycle, because the only cycle has been broken. It is connected and acyclic, hence a tree. ∎

For $\varnothing\ne S\subsetneq V$, the cut $\delta(S)$ consists of edges with one endpoint in $S$ and the other outside. An edge set $F$ respects this cut when no edge of $F$ crosses it. We use the cut to identify an exchange that preserves every edge already selected.

**Theorem 10.4 (Safe light edge across a cut).** Suppose $G$ is connected, and $F$ is contained in some minimum spanning tree. Let $\delta(S)$ be a cut respected by $F$. If $e$ has minimum weight among the edges crossing this cut, then $F\cup\{e\}$ is contained in some minimum spanning tree.

*Proof.* Choose an MST $T$ containing $F$. If $e\in T$, nothing needs changing. Otherwise add $e$ to $T$. The resulting cycle contains the tree path between the endpoints of $e$. Since the endpoints are on opposite sides of the cut, that path contains another crossing edge $f$. No edge of $F$ crosses the cut, so $f\notin F$.

By the exchange lemma, $T'=T+e-f$ is a spanning tree. Since $e$ is lightest across the cut, $w(e)\le w(f)$, and therefore

$$
w(T')=w(T)+w(e)-w(f)\le w(T).
$$

Minimality of $T$ forces equality, so $T'$ is also an MST. Removing $f\notin F$ preserves all of $F$, and $T'$ contains $e$. Thus it contains $F\cup\{e\}$ as required. ∎

The conclusion says that at least one optimum extends the enlarged choice. It does not say that every optimum contains $e$. With tied weights, the exchange may replace one optimum by another of equal weight. That weaker statement is exactly what the algorithm needs: its future choices only need one compatible optimum to remain available.

## Kruskal's algorithm

Kruskal processes edges in nondecreasing order of weight. Ties may be resolved in any fixed order. Initially every vertex is an isolated component of the chosen forest. An edge is accepted precisely when its endpoints lie in different current components. Joining those components cannot create a cycle. An edge whose endpoints are already connected is rejected, because the existing path and the edge would form a cycle.

```text
KRUSKAL(V, E, w)
    F := empty edge set
    sort E in nondecreasing order of weight
    for each edge e = {u,v} in that order:
        if u and v are in different components of (V,F):
            add e to F
    return F
```

A connected graph allows an early stop after $|V|-1$ accepted edges. Scanning the entire list also works and handles disconnected graphs without a separate stopping rule. Component membership can be maintained by a disjoint-set data structure or checked directly in the current forest. The correctness argument does not depend on that implementation choice.

**Theorem 10.5 (Kruskal's correctness).** On a finite connected undirected graph with arbitrary real edge weights, Kruskal returns an MST. On a disconnected graph, it returns a minimum spanning forest. Tied weights do not affect either conclusion.

*Proof.* First suppose the graph is connected. Maintain the invariant that the accepted edge set $F$ is a forest contained in some MST. It holds initially because $F$ is empty. Rejection leaves it unchanged. Consider an edge $e=uv$ about to be accepted, and let $S$ be the vertex set of the current component containing $u$. The endpoint $v$ lies outside $S$, and the cut is respected by $F$.

Every previously processed edge now has both endpoints in the same current component. An accepted edge is itself in $F$; a rejected edge already had an $F$-path between its endpoints, and paths are not removed later. Thus no previously processed edge crosses this cut. Since edges are processed in nondecreasing order, every crossing edge has weight at least $w(e)$. The safe-edge theorem therefore preserves the invariant when $e$ is added. Equality of weights is allowed throughout.

At termination, $F$ must connect all vertices. Otherwise take an original graph path between two different final forest components. Some edge of that path crosses between final components. Its endpoints were also disconnected when that edge was processed, because the forest only grows. The algorithm would have accepted it, contradicting the supposed final separation. Hence $F$ is a spanning tree. The invariant places it inside an MST; both trees have $|V|-1$ edges, so they are equal.

For a disconnected graph, edges never join different original components. The global sorted scan simply interleaves the sorted scans within them. Applying the connected argument separately gives an MST in each component, including the empty tree at an isolated vertex. Their union is a minimum spanning forest because any competing spanning forest has at least the minimum possible weight in every component. ∎

**Example 10.6 (A full Kruskal trace with a tie).** Let $V=\{A,B,C,D,E\}$ and take exactly these edges:

$$
AB:1,\quad BC:2,\quad AC:3,\quad BD:4,\quad CD:4,\quad DE:5,\quad CE:6,\quad BE:7.
$$

Break the weight-$4$ tie by considering $BD$ before $CD$. The table records every decision; the component column describes the accepted forest after that decision.

| Edge | Weight | Decision and reason | Current components | Total accepted weight |
| --- | ---: | --- | --- | ---: |
| $AB$ | $1$ | Accept: different components | $AB\mid C\mid D\mid E$ | $1$ |
| $BC$ | $2$ | Accept: join $C$ to $AB$ | $ABC\mid D\mid E$ | $3$ |
| $AC$ | $3$ | Reject: $A$ and $C$ already connected | $ABC\mid D\mid E$ | $3$ |
| $BD$ | $4$ | Accept: join $D$ | $ABCD\mid E$ | $7$ |
| $CD$ | $4$ | Reject: endpoints already connected | $ABCD\mid E$ | $7$ |
| $DE$ | $5$ | Accept: join $E$ | $ABCDE$ | $12$ |
| $CE$ | $6$ | Reject: endpoints already connected | $ABCDE$ | $12$ |
| $BE$ | $7$ | Reject: endpoints already connected | $ABCDE$ | $12$ |

The returned tree is $\{AB,BC,BD,DE\}$, of weight $12$. Reversing the weight-$4$ tie gives $\{AB,BC,CD,DE\}$, also of weight $12$. The correctness proof certifies both without claiming uniqueness. The first tree's $A$–$E$ path has weight $1+4+5=10$, while the original graph has route $A,B,E$ of weight $1+7=8$. This gives another direct check that an MST need not preserve shortest paths.

**Example 10.7 (Negative weights and a disconnected graph).** Let the vertices be $p,q,r,x,y,z$, with edges $pq:-2$, $qr:1$, $pr:3$, and $xy:0$. The original components are $\{p,q,r\}$, $\{x,y\}$ and $\{z\}$. Kruskal accepts $pq$, accepts $xy$, accepts $qr$, and rejects $pr$ because it closes a triangle. The resulting forest has weight $-2+0+1=-1$ and three edges, agreeing with $n-c=6-3$.

The isolated vertex remains part of the spanning forest even though it contributes no edge. A negative edge causes no difficulty: the algorithm still compares total tree weights, and acyclicity prevents indefinite repetition of a favourable edge. The shortest-walk problem with negative weights is a different matter, as we will see below.

## Weighted paths, labels and relaxation

We now allow a finite directed graph. An arc $(u,v)$ can be traversed from $u$ to $v$; its reverse need not exist. An undirected edge can be represented by two opposite arcs of the same weight when applying the shortest-path algorithm. From this point until the counterexample, all arc weights satisfy $w(u,v)\ge0$.

**Definition 10.8 (Shortest-path distance).** Fix a source vertex $s$. The weight of a directed walk is the sum of its arc weights, counting repetitions. Define $\delta(s,v)$ to be the smallest possible weight of a directed walk from $s$ to $v$, and set $\delta(s,v)=\infty$ when no such walk exists.

For nonnegative weights, deleting a closed portion of a walk cannot increase its weight. Therefore a reachable vertex has a shortest route that is a simple path, or the empty path when $v=s$. There are finitely many simple paths, so the minimum exists. In particular, $\delta(s,s)=0$. Distinct vertices can have distance zero when zero-weight arcs connect them. Directed distances need not be symmetric.

**Definition 10.9 (Tentative label and relaxation).** A tentative label $d(v)$ records the weight of a currently known source-to-$v$ route, or $\infty$ if none has yet been recorded. Relaxing an arc $(u,v)$ means replacing $d(v)$ by $d(u)+w(u,v)$ if that value is smaller. A predecessor record then stores $u$ as the previous vertex of the improved route.

A finite label is an upper bound on the optimum, since it describes one available route: $\delta(s,v)\le d(v)$. Initially only the empty source route is known, so $d(s)=0$ and all other labels are $\infty$. A finite label is not automatically final. A later route through another vertex may improve it. Dijkstra's key decision is when improvement can no longer occur.

## Dijkstra's algorithm and its invariant

Let $S$ be the set of settled vertices. A vertex is settled when its current label is certified to be its true distance and is never changed again. At each step choose an unsettled vertex of minimum tentative label. Stop if all remaining labels are infinite. Otherwise settle that vertex and relax its outgoing arcs to unsettled vertices.

```text
DIJKSTRA(V, E, w, s)
    require every arc weight to be nonnegative
    S := empty set
    for each vertex v:
        d[v] := infinity
        predecessor[v] := none
    d[s] := 0
    while some vertex is outside S:
        choose u outside S with minimum d[u]
        if d[u] = infinity:
            stop
        add u to S
        for each outgoing arc (u,v) with v outside S:
            if d[u] + w(u,v) < d[v]:
                d[v] := d[u] + w(u,v)
                predecessor[v] := u
    return d and predecessor
```

Ties between minimum labels may be broken arbitrarily. A candidate equal to the existing label need not replace it; the displayed version retains the first predecessor. Each predecessor is settled before its unsettled successor, so following predecessor records backwards strictly decreases settlement order. This prevents predecessor cycles even when zero-weight arcs exist.

**Theorem 10.10 (Dijkstra's correctness).** For a finite directed graph with nonnegative arc weights and source $s$, the algorithm returns $d(v)=\delta(s,v)$ for every vertex. Finite predecessor chains reconstruct shortest paths; unreachable vertices retain label $\infty$ and no predecessor.

*Proof.* Maintain three facts after each completed iteration. First, every finite label is the weight of a recorded source path. Second, every settled vertex $x$ has $d(x)=\delta(s,x)$. Third, for every arc $(x,y)$ from a settled vertex to an unsettled vertex,

$$
d(y)\le\delta(s,x)+w(x,y).
$$

The source is chosen first, since it alone has a finite initial label. Its value zero is optimal because all walk weights are nonnegative. Relaxing its outgoing arcs establishes the three facts. In later relaxations, a recorded path to a settled vertex is extended by one arc to an unsettled vertex; its predecessors were settled earlier, so this extension has no repeated vertex. Thus finite labels continue to have path witnesses. Relaxation establishes the third fact for the new settled vertex, while earlier inequalities remain true because tentative labels only decrease.

It remains to justify each later settlement. Let $u$ have the least finite label among unsettled vertices. Its finite witness makes it reachable. Take a shortest source-to-$u$ path, and let $y$ be its first unsettled vertex. Since $s$ is already settled, $y$ has a predecessor $x$ on this path that is settled. The third invariant gives

$$
d(y)\le\delta(s,x)+w(x,y)
\le\text{weight of the path prefix ending at }y
\le\delta(s,u).
$$

The middle inequality holds because the true distance to $x$ is no greater than this particular prefix to $x$. The final inequality uses nonnegativity of every remaining arc on the path. By the minimum-label choice, $d(u)\le d(y)$; by its path witness, $\delta(s,u)\le d(u)$. Therefore

$$
\delta(s,u)\le d(u)\le d(y)\le\delta(s,u),
$$

forcing equality throughout. The new settlement is correct, completing the induction.

If the algorithm stops with unsettled vertices labeled $\infty$, none is reachable. Otherwise take a source path to a reachable unsettled vertex, and its first crossing from settled to unsettled. The third invariant would give that first unsettled vertex a finite label, contradicting the stopping condition. Conversely, an unreachable vertex cannot receive a finite label because every finite label has a path witness. There are at most $|V|$ settlements, so the process terminates. The predecessor chains terminate at $s$ and realise the final labels, giving shortest paths. ∎

The proof identifies precisely where nonnegative weights matter: the prefix to $y$ cannot cost more than the complete shortest path to $u$. A later negative arc could reverse that inequality. Zero weights cause equality, which the proof permits; strictly positive weights are unnecessary.

**Example 10.11 (A Dijkstra table with zero and infinity).** Let the vertices be $s,a,b,c,d,u$, and take exactly these arcs:

$$
s\to a:4,\quad s\to b:1,\quad b\to a:2,\quad b\to c:5,\quad b\to d:9,
$$

$$
a\to c:1,\quad a\to d:7,\quad c\to d:0.
$$

Vertex $u$ has no incident arc. Start at $s$. Each row shows labels after settling the named vertex and relaxing its outgoing arcs.

| Just settled | $d(s)$ | $d(a)$ | $d(b)$ | $d(c)$ | $d(d)$ | $d(u)$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Initial labels | $0$ | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| $s$ | $0$ | $4$ | $1$ | $\infty$ | $\infty$ | $\infty$ |
| $b$ | $0$ | $3$ | $1$ | $6$ | $10$ | $\infty$ |
| $a$ | $0$ | $3$ | $1$ | $4$ | $10$ | $\infty$ |
| $c$ | $0$ | $3$ | $1$ | $4$ | $4$ | $\infty$ |
| $d$ | $0$ | $3$ | $1$ | $4$ | $4$ | $\infty$ |

The next minimum label is infinite, so the algorithm stops rather than inventing a route to $u$. Predecessors are $b\leftarrow s$, $a\leftarrow b$, $c\leftarrow a$ and $d\leftarrow c$. The shortest path to $d$ is therefore $s,b,a,c,d$, with weight $1+2+1+0=4$. The tentative label $10$ was a valid route cost but was not final. The zero-weight final arc makes $c$ and $d$ have equal distances without making them the same vertex.

**Example 10.12 (A negative edge breaks settlement).** Consider the three directed arcs $s\to a:2$, $s\to b:5$ and $b\to a:-4$. There is no directed cycle. Running the displayed settlement procedure despite its failed precondition would first give labels $d(a)=2$, $d(b)=5$, then settle $a$, then $b$. The arc from $b$ to the already settled $a$ is ignored, leaving answer $2$ for $a$.

But $s,b,a$ has weight $5-4=1$, which is the true minimum. The failure occurs even without a negative cycle. Allowing arbitrary changes to settled vertices would abandon the algorithm and its proved invariant, rather than repair this proof. Algorithms designed for negative weights require a different argument. In an undirected walk model, even one negative edge permits repeated back-and-forth traversal with decreasing total weight; that issue never arises in the acyclic edge sets of the MST problem.

## Reading an algorithm result responsibly

A trace supplies a particular computation; an invariant explains all inputs meeting the hypotheses. Keep the input graph, edge directions, complete edge list and tie convention visible when checking a trace. A table omitting an arc can give internally consistent arithmetic for the wrong problem. Record predecessor information as well as distances when actual routes are wanted.

For a direct implementation, Dijkstra can find each minimum by scanning all unsettled vertices. There are at most $n$ scans of at most $n$ entries, and each outgoing arc is examined once, giving $O(n^2+m)$ basic operations for $n$ vertices and $m$ arcs. More specialised priority queues improve selection on large sparse graphs. These implementation improvements do not replace the nonnegative-weight condition or change the mathematical objective.

For Kruskal, verify both feasibility and optimality. A tree with $n-1$ edges is not automatically connected, and a connected output is not automatically minimum. Its proof uses the safe-extension invariant, not merely the number of accepted edges. For Dijkstra, a label becomes final when settled, not when first discovered. These distinctions are common sources of convincing-looking but incorrect greedy arguments.

## Exercises

### Exercise 10.1
<a id="spanning-trees-shortest-paths-ex-1"></a>

In the triangle with $w(sa)=w(sb)=2$ and $w(ab)=1$, find every MST and a tree preserving both shortest paths from $s$. Can any MST do both jobs?

<details>
<summary>Hint 1</summary>

List the three possible two-edge spanning trees and their total weights.

</details>
<details>
<summary>Hint 2</summary>

Compare the route to the vertex not joined directly to $s$ in each minimum tree.

</details>
<details>
<summary>Solution</summary>

The trees $\{sa,ab\}$ and $\{sb,ab\}$ have weight $3$ and are exactly the MSTs. The third tree $\{sa,sb\}$ has weight $4$. The original shortest routes from $s$ to $a$ and $b$ both have weight $2$, achieved directly. In either MST one of those routes instead has weight $3$. Thus the weight-$4$ star preserves both shortest source routes, and neither MST does. The two objectives have genuinely different optima.

</details>

### Exercise 10.2
<a id="spanning-trees-shortest-paths-ex-2"></a>

Run Kruskal on vertices $1,2,3,4$ with edges $12:1$, $13:1$, $23:1$, $34:2$, $24:3$, $14:4$. Process the three weight-$1$ edges in the listed order. Give a second MST obtained by a different tie order.

<details>
<summary>Hint 1</summary>

After two accepted triangle edges, the remaining triangle edge closes a cycle.

</details>
<details>
<summary>Hint 2</summary>

The cheapest edge connecting vertex $4$ to the triangle is $34$.

</details>
<details>
<summary>Solution</summary>

The decisions are: accept $12$, accept $13$, reject $23$, accept $34$, reject $24$, reject $14$. The output $\{12,13,34\}$ has weight $1+1+2=4$. Processing $12,23,13$ within the tie instead yields $\{12,23,34\}$, also of weight $4$. Kruskal's theorem proves both are minimum. An optimality check is that any spanning tree needs a connection to $4$ of weight at least $2$ and two other edges of weight at least $1$ each, so its weight is at least $4$.

</details>

### Exercise 10.3
<a id="spanning-trees-shortest-paths-ex-3"></a>

Prove that an edge strictly lighter than every other edge crossing some nontrivial cut belongs to every MST of a connected weighted graph.

<details>
<summary>Hint 1</summary>

Suppose an MST omits the distinguished edge and add it to create a cycle.

</details>
<details>
<summary>Hint 2</summary>

The cycle's tree path must contain another edge crossing the same cut. Compare the two weights strictly.

</details>
<details>
<summary>Solution</summary>

Let $e$ be the unique lightest crossing edge and suppose an MST $T$ omits it. Adding $e$ creates a cycle whose remaining tree path connects opposite sides of the cut. Choose another crossing edge $f$ on that path. The exchange lemma makes $T+e-f$ a spanning tree, and strict lightness gives $w(e)<w(f)$. Its total weight is strictly smaller than $w(T)$, contradicting minimality. Therefore every MST contains $e$. Strictness is essential: tied light edges may belong to different optima instead.

</details>

### Exercise 10.4
<a id="spanning-trees-shortest-paths-ex-4"></a>

Prove that an edge strictly heavier than every other edge on some cycle belongs to no MST.

<details>
<summary>Hint 1</summary>

Assume an MST contains the heavy edge, then remove that edge to split the tree into two components.

</details>
<details>
<summary>Hint 2</summary>

The remainder of the original cycle connects the heavy edge's endpoints, so some other cycle edge crosses the two tree components.

</details>
<details>
<summary>Solution</summary>

Suppose an MST $T$ contains the heavy edge $e$. Removing $e$ produces two components containing its endpoints separately. The remainder of the graph cycle is a path between those endpoints, so it contains an edge $f$ crossing the two components. That edge is not in $T-e$. Adding it reconnects the components without a cycle, giving a spanning tree $T-e+f$. Since $w(f)<w(e)$, its weight is smaller than $w(T)$, a contradiction. Hence no MST contains $e$. The argument does not exclude an edge merely tied for largest weight.

</details>

### Exercise 10.5
<a id="spanning-trees-shortest-paths-ex-5"></a>

A graph has vertices $p,q,r,x,y,z$ and edges $pq:-2$, $qr:1$, $pr:3$, $xy:0$. Find a minimum spanning forest, its weight and its edge count. Explain the role of $z$.

<details>
<summary>Hint 1</summary>

Treat each original connected component independently; no algorithm may introduce an absent edge.

</details>
<details>
<summary>Hint 2</summary>

The triangle component needs two edges, the $x,y$ component one, and the isolated vertex none.

</details>
<details>
<summary>Solution</summary>

Choose $pq$, $qr$ and $xy$. The triangle's alternatives have weights $-2+3=1$ and $1+3=4$, while the chosen pair has weight $-1$. The edge $xy$ is required in its component, and $z$ contributes an isolated one-vertex tree. Thus the minimum forest has total weight $-1$ and three edges. There are six vertices and three original components, so $n-c=3$ confirms the edge count. The output spans $z$ by retaining the vertex, not by fabricating an incident edge.

</details>

### Exercise 10.6
<a id="spanning-trees-shortest-paths-ex-6"></a>

Run Dijkstra from $s$ on arcs $s\to p:7$, $s\to q:2$, $q\to p:1$, $q\to r:6$, $p\to r:2$. Show the label changes and reconstruct the shortest route to $r$.

<details>
<summary>Hint 1</summary>

After settling $s$, the smaller tentative label is at $q$, not $p$.

</details>
<details>
<summary>Hint 2</summary>

The route through $q$ improves $p$ before $p$ is settled. That improvement affects the later route to $r$.

</details>
<details>
<summary>Solution</summary>

After $s$, the labels $(d(p),d(q),d(r))$ are $(7,2,\infty)$. Settle $q$ to obtain $(3,2,8)$. Settle $p$ next, improving $r$ to $5$, then settle $r$. The predecessor chain is $r\leftarrow p\leftarrow q\leftarrow s$, so the shortest route is $s,q,p,r$ with weight $2+1+2=5$. The initial label $7$ at $p$ described a known direct route but was not its true shortest distance; permanent settlement occurs later.

</details>

### Exercise 10.7
<a id="spanning-trees-shortest-paths-ex-7"></a>

Consider arcs $s\to a:0$, $s\to b:0$, $a\to b:0$, $b\to a:0$, $a\to t:2$, $b\to t:2$. Find all distances from $s$. Explain why tied labels and the zero-weight cycle do not invalidate Dijkstra or force predecessor cycles in the displayed algorithm.

<details>
<summary>Hint 1</summary>

Nonnegative weights include zero. Compare the direct zero-cost routes with every possible improvement.

</details>
<details>
<summary>Hint 2</summary>

The algorithm updates predecessors only for unsettled destinations, and each predecessor is already settled.

</details>
<details>
<summary>Solution</summary>

The distances are $0$ at $s,a,b$ and $2$ at $t$. The empty path and the direct zero-cost arcs witness the zeros; no nonnegative route can improve below zero. Every route to $t$ finishes with an arc of weight $2$, so its minimum is $2$. Either $a$ or $b$ may be settled first after $s$. The proof uses weak inequalities and allows that tie. A predecessor is always settled before its successor, so backwards predecessor steps strictly decrease settlement order and cannot cycle. The graph's zero-cost cycle does not require a cycle in the chosen routes.

</details>

### Exercise 10.8
<a id="spanning-trees-shortest-paths-ex-8"></a>

For arcs $s\to a:2$, $s\to b:5$, $b\to a:-4$, show explicitly how the displayed settlement algorithm fails if its weight precondition is ignored. Why is the absence of directed cycles insufficient?

<details>
<summary>Hint 1</summary>

Trace the order in which the vertices would be settled, using the current tentative labels.

</details>
<details>
<summary>Hint 2</summary>

Compare the direct route to $a$ with the route whose expensive prefix is followed by the negative arc.

</details>
<details>
<summary>Solution</summary>

After $s$ the labels are $2$ at $a$ and $5$ at $b$, so $a$ would be settled first with label $2$. Settling $b$ later cannot update the already settled $a$ in this procedure. Yet $s,b,a$ costs $5-4=1$, smaller than $2$. There is no cycle, but the negative final arc makes an expensive prefix lead to a cheaper complete route. This breaks the prefix comparison in Dijkstra's proof. Absence of negative cycles can guarantee meaningful shortest distances without validating this particular greedy settlement rule.

</details>

### Exercise 10.9
<a id="spanning-trees-shortest-paths-ex-9"></a>

A directed graph has vertices $s,a,b,c$ and exactly the arcs $s\to a:1$, $a\to s:1$, $b\to a:0$. Run Dijkstra from $s$ and explain the labels at $b$ and $c$.

<details>
<summary>Hint 1</summary>

Directed reachability follows arrow directions. An arc entering a reached vertex cannot automatically be traversed backwards.

</details>
<details>
<summary>Hint 2</summary>

After settling $s$ and $a$, determine whether any unsettled vertex has a finite label.

</details>
<details>
<summary>Solution</summary>

The initial labels are $d(s)=0$ and infinity elsewhere. Settling $s$ gives $d(a)=1$; settling $a$ changes nothing further. Both $b$ and $c$ retain infinity, so the algorithm stops. Vertex $c$ is isolated. Vertex $b$ has an outgoing arc to $a$, but no arc sequence from $s$ reaches $b$. Their labels mean unreachable from this source, rather than a very large finite route cost. Neither receives a predecessor.

</details>

### Exercise 10.10
<a id="spanning-trees-shortest-paths-ex-10"></a>

Suppose all vertices of a nonnegatively weighted directed graph are reachable from $s$. Someone supplies finite labels $D(s)=0$, a source path of weight $D(v)$ for every vertex $v$, and inequalities $D(v)\le D(u)+w(u,v)$ for every arc. Prove that the labels are the true shortest distances, without rerunning Dijkstra.

<details>
<summary>Hint 1</summary>

The supplied paths give one direction of the comparison between a label and the optimal distance.

</details>
<details>
<summary>Hint 2</summary>

Apply the arc inequalities successively along an arbitrary source-to-$v$ path and telescope the intermediate labels.

</details>
<details>
<summary>Solution</summary>

The supplied path to $v$ shows $\delta(s,v)\le D(v)$. Conversely, take any source-to-$v$ path $s=v_0,v_1,\ldots,v_k=v$. Repeatedly applying the arc inequalities yields $D(v)\le D(s)+\sum_{i=1}^k w(v_{i-1},v_i)=\sum_{i=1}^k w(v_{i-1},v_i)$. Thus $D(v)$ is no greater than the weight of any source path, including a shortest one, so $D(v)\le\delta(s,v)$. The two inequalities give equality. Path witnesses and arc inequalities together certify optimality; either kind of evidence alone would be insufficient.

</details>

## Sources

The chapter's exposition, proofs, weighted examples, pseudocode and exercises are newly written. For complementary presentations of the standard algorithms, see MIT OpenCourseWare, *6.046J Design and Analysis of Algorithms*, Spring 2012, [Lecture 3: Minimum Spanning Trees I](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2012/6baf48ebe3babed294c31a907a916e08_MIT6_046JS12_lec03.pdf), and *6.006 Introduction to Algorithms*, Fall 2011, [Lecture 16: Dijkstra](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-16-dijkstra/), consulted 13 November 2026. These references provide further algorithmic context; no source text, diagram or implementation is reproduced here.

## Summary

Minimum spanning trees minimise the total weight of a connecting tree, while shortest-path algorithms minimise route weights from a chosen source. Kruskal's safe choice comes from a cut and an exchange that preserves some compatible optimum. Its proof allows tied and negative weights and extends componentwise to minimum spanning forests.

Dijkstra maintains path witnesses for finite labels and exact distances for settled vertices. Nonnegative weights make the minimum tentative label safe to settle; zero weights permit ties, while negative edges can invalidate the argument even in an acyclic graph. Unreachable vertices retain infinity. In both algorithms, an explicit invariant explains why a sequence of local decisions gives the required global result, and the hypotheses identify the inputs for which that explanation applies.
