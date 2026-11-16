
# Menger and Connectivity

A collection of routes gives evidence that a connection is robust: destroying all the routes requires hitting each one. A separating set gives evidence in the opposite direction: every route must pass through a limited set of vertices or edges. Menger's theorem says that these lower and upper certificates can always be made to agree in a finite graph. The theorem concerns the existence of a whole family of routes, rather than the length of one preferred route.

We shall prove a general vertex-disjoint path theorem directly by deletion, contraction and induction. The familiar theorem for two protected terminals will follow by applying this result to their neighbour sets. A line-graph argument then gives the edge version without using flows. The next chapter develops flow as a different route to related min–max statements.

Required preparation is finite graph terminology, simple paths, components, vertex deletion and induction; [the Discrete Mathematics graph chapter](../discrete-mathematics-proof-counting-structure/graphs-trees-connectivity.md) supplies this background. Unless stated otherwise, graphs are finite, undirected and simple. Deleting a set of vertices also deletes incident edges. A path has no repeated vertex; a one-vertex path is permitted where explicitly indicated. Families of paths consist of distinct paths.

## Two meanings of disjointness

**Definition 7.1 (Disjoint paths and protected-terminal separators).** Two paths are vertex-disjoint if they have no common vertex. Distinct paths from $s$ to $t$ are internally vertex-disjoint if their only common vertices are their endpoints $s,t$. A protected-terminal $s$–$t$ separator is a set $S\subseteq V(G)\setminus\{s,t\}$ such that $G-S$ has no $s$–$t$ path.

The endpoints are protected: deleting $s$ itself is not an allowed one-vertex solution. If $s,t$ are already disconnected, the empty set separates them. If they are adjacent, no protected-terminal vertex separator exists, because the edge $st$ survives every permitted deletion. This is why the local vertex theorem will assume nonadjacency.

Any $s$–$t$ separator meets every $s$–$t$ path at an internal vertex. For internally disjoint paths those chosen meeting vertices must be different, so the number of paths is at most the size of every separator. This easy inequality does not establish equality. Finding a small separator and finding many paths are complementary tasks; a failed attempt to find another path is not itself a separator certificate.

**Example 7.2 (Matching certificates).** Let the graph have vertices $s,t,a,b,c$ and edges $sa,sb,sc,at,bt,ct$. The three paths $s,a,t$, $s,b,t$ and $s,c,t$ are internally vertex-disjoint. Deleting $\{a,b,c\}$ separates the protected terminals. Each separator must hit the three disjoint interiors, so its size is at least three; the displayed separator has that size. Thus both optima equal three, without needing a general theorem for this particular graph.

Now add the edge $st$. There are four distinct internally disjoint paths, including the direct edge. However, there is no protected-terminal vertex separator at all. The nonadjacency hypothesis cannot be discarded merely because the conclusion was true before the edge was added.

## The set version, with deletable endpoints

For induction it is useful to prove a more flexible statement. Its endpoint convention differs from the protected-terminal convention and must remain explicit.

**Definition 7.3 (Set-to-set paths and separators).** Let $A,B\subseteq V(G)$. An $A$–$B$ path starts in $A$ and ends in $B$. It can be trimmed so that no internal vertex lies in $A\cup B$; we always use this trimmed form. A one-vertex path at a vertex of $A\cap B$ is allowed. An $A$–$B$ separator is any set $S\subseteq V(G)$ meeting every such path. In this definition vertices of $A$ and $B$ may belong to $S$.

Equivalently, $G-S$ has no path from $A\setminus S$ to $B\setminus S$, including a trivial path at a surviving common vertex. Consequently every separator contains $A\cap B$. The sets $A$ and $B$ themselves are separators, so a minimum separator always exists. If either endpoint set is empty, the minimum is zero.

**Theorem 7.4 (Set form of Menger's theorem).** For every finite graph $G$ and subsets $A,B\subseteq V(G)$, the maximum number of pairwise vertex-disjoint $A$–$B$ paths equals the minimum size of an $A$–$B$ separator.

*Proof.* Let $k$ be the minimum separator size. Every disjoint path family has at most $k$ paths, since its members require distinct vertices of a separator. We prove the existence of $k$ paths by induction on the number of edges, simultaneously for all vertex sets and all endpoint sets.

If there are no edges, the only paths are the trivial paths at $A\cap B$. Those $|A\cap B|$ paths are disjoint, and their vertices form a minimum separator. If $k=0$ for any graph, the empty family gives the required conclusion. Assume now that the graph has an edge $e=xy$ and $k\geq1$.

Contract $xy$ to a vertex $q$, deleting any loop and retaining just one copy of each parallel edge. Call the resulting graph $H$. In its endpoint set $A'$ put $q$ whenever at least one of $x,y$ belongs to $A$; do the same for $B'$. Other endpoint memberships are unchanged. The graph $H$ has fewer edges than $G$.

If $H$ has $k$ disjoint $A'$–$B'$ paths, lift them to $G$. At most one path uses $q$. If it uses $q$ internally, its two incident edges in $H$ lift to edges incident with $x$ or $y$; connect their ends inside $\{x,y\}$ using $xy$ if necessary. If $q$ is an endpoint, begin or end at an appropriate original endpoint-set member and use $xy$ when necessary to reach the required incident edge. A trivial path at $q\in A'\cap B'$ lifts either to a trivial path at a common original member or to the edge $xy$ joining an $A$ member to a $B$ member. Trim any extra endpoint-set occurrences. No other lifted path uses $x$ or $y$, so the lifted family is still disjoint and has $k$ members. This settles that case.

Otherwise, induction in $H$ gives an $A'$–$B'$ separator $Y$ with $|Y|<k$. It must contain $q$. If it did not, any $A$–$B$ path in $G-Y$ would contract to an $A'$–$B'$ walk avoiding $Y$, and trimming that walk would contradict separation in $H$. Thus lifting the separator gives

$$X=(Y\setminus\{q\})\cup\{x,y\}.$$

This is an $A$–$B$ separator in $G$, because a path avoiding $X$ would contract to one avoiding $Y$. Its size is $|Y|+1\leq k$. Minimality of $k$ therefore forces $|X|=k$ and $|Y|=k-1$.

We next work in $G-e$, which also has fewer edges. Every $A$–$X$ separator $T$ in $G-e$ is an $A$–$B$ separator in $G$. Indeed, if an $A$–$B$ path avoided $T$ in $G$, take its prefix ending at its first vertex in $X$. Such a vertex exists because $X$ separates $A$ from $B$. This prefix cannot use $xy$, since both ends of that edge are already in $X$; using it would encounter $X$ before the supposed first encounter. The prefix is therefore an $A$–$X$ path in $G-e$ avoiding $T$, a contradiction. Hence $|T|\geq k$. Since $X$ itself is an $A$–$X$ separator of size $k$, induction supplies $k$ disjoint $A$–$X$ paths in $G-e$.

The same argument, using the suffix after the last encounter with $X$, supplies $k$ disjoint $X$–$B$ paths. Trim the first family from its $A$ end at its first encounter with $X$, and trim the second from its $B$ end at its first encounter with $X$. Each family has distinct endpoints in the $k$-element set $X$, so each uses every vertex of $X$ exactly once and has no other vertex in $X$.

There is one final disjointness issue. The interiors of an $A$–$X$ path lie in a component of $G-X$ meeting $A\setminus X$, unless the path is trivial. The interiors of an $X$–$B$ path similarly lie in a component meeting $B\setminus X$. No component can meet both sets, because $X$ is an $A$–$B$ separator. Thus the two families have no intersection outside $X$. Concatenate the two paths meeting at each vertex of $X$. Their concatenations are $k$ pairwise disjoint $A$–$B$ paths, with trivial concatenations allowed at common endpoints. This completes the induction. ∎

The last paragraph is essential. Two independently constructed path families cannot generally be spliced without creating intersections. The separating set ensures that their interiors occupy different components, which makes this particular splicing valid.

**Example 7.5 (The contraction branch of the induction).** Take edges $ab,ac,bd$ on vertices $a,b,c,d$, with $A=\{a,b\}$ and $B=\{c,d\}$. The paths $ac$ and $bd$ are disjoint, and $A$ is a separator of size two, so $k=2$. Contracting $ab$ produces a single $A'$ vertex $q$ adjacent to $c,d$; now the minimum separator is $\{q\}$ and the maximum disjoint family has size one.

The proof lifts this smaller separator to $X=\{a,b\}$. In $G-ab$, the two $A$–$X$ paths are the trivial paths at $a,b$, while the two $X$–$B$ paths are $ac,bd$. Concatenation recovers the two original paths. This example shows why the argument cannot simply assert that arbitrary contractions preserve the optimum.

## Two protected terminals

**Theorem 7.6 (Local vertex Menger).** Let $s,t$ be distinct nonadjacent vertices of a finite graph. The maximum number of internally vertex-disjoint $s$–$t$ paths equals the minimum size of a protected-terminal $s$–$t$ separator.

*Proof.* Delete the terminals to form $H=G-\{s,t\}$, and put $A=N_G(s)$ and $B=N_G(t)$. Nonadjacency ensures that both sets lie in $V(H)$. Every simple $s$–$t$ path has at least one internal vertex, and its internal segment joins $A$ to $B$. Conversely, an $A$–$B$ path in $H$ becomes an $s$–$t$ path by adding its two terminal edges. A common neighbour gives a one-vertex internal path, so trivial paths in the set theorem are needed.

These constructions identify disjoint $A$–$B$ path families with internally disjoint terminal path families, after trimming when necessary. A set $S\subseteq V(H)$ meets every $A$–$B$ path exactly when it meets every $s$–$t$ path internally. Thus the separators correspond too. Applying Theorem 7.4 proves equality with the terminals excluded from every deletion set. ∎

This reduction does not put capacity on the terminals and does not count copies of a direct edge. It translates a specific nonadjacent-terminal problem into a set problem whose endpoints are ordinary internal vertices of the original graph.

A separator of minimum cardinality is called minimum. A separator is inclusion-minimal if none of its proper subsets remains a separator. These notions differ. For example, in a graph with paths $s,a,v,t$ and $s,b,v,t$, both $\{v\}$ and $\{a,b\}$ are inclusion-minimal separators, but only the first is minimum. Neither $\{a\}$ nor $\{b\}$ separates, although their two-element union does.

## Edge-disjoint paths, including adjacent terminals

**Definition 7.7 (Edge separator).** An $s$–$t$ edge separator is a set $F\subseteq E(G)$ such that $G-F$ has no $s$–$t$ path. Paths are edge-disjoint when no edge belongs to two of them; they may share internal vertices.

**Theorem 7.8 (Edge Menger).** For any distinct vertices $s,t$ of a finite graph, the maximum number of edge-disjoint $s$–$t$ paths equals the minimum size of an $s$–$t$ edge separator.

*Proof.* Form the line graph $L(G)$: its vertices are the edges of $G$, and two are adjacent if their original edges share an endpoint. Let $A$ be the edges incident with $s$ and $B$ those incident with $t$, now viewed as vertex sets in $L(G)$.

An original $s$–$t$ path gives an $A$–$B$ path in the line graph by listing its edges. Edge-disjoint original paths therefore give vertex-disjoint line-graph paths. Conversely, each line-graph path specifies a connected set of original edges containing an edge incident with $s$ and an edge incident with $t$. Its union contains an original $s$–$t$ path. Select a simple such path. Disjoint line-graph paths specify disjoint edge sets, so the selected original paths are edge-disjoint.

It is not necessary that the listed edges form a traversable walk in precisely their listed order: connectedness of their union supplies the required path. The same observation shows that a vertex set $F$ separates $A$ from $B$ in the line graph exactly when its original edges separate $s$ from $t$ in $G$. The set theorem therefore equates the two original optima. If $st$ is present, its line-graph vertex lies in $A\cap B$ and contributes a valid trivial path corresponding to that one direct edge. ∎

**Example 7.9 (Edge and vertex robustness differ).** Take edges $sa,sb,av,bv,vc,vd,ct,dt$. The paths $s,a,v,c,t$ and $s,b,v,d,t$ share the vertex $v$ but share no edge. Deleting the two edges incident with $s$ separates, so the edge optimum is two. In contrast, deleting the single vertex $v$ separates the nonadjacent terminals, and a path exists, so the vertex optimum is one. A large number of edge routes can still depend on one vulnerable intermediate vertex.

## Fans and cycles

**Definition 7.10 (Connectivity and a fan).** For an integer $k\geq1$, a graph is $k$-connected if it has at least $k+1$ vertices and deleting fewer than $k$ vertices leaves it connected. A $k$-fan from $v$ to $W\subseteq V(G)\setminus\{v\}$ consists of $k$ paths starting at $v$, ending at distinct vertices of $W$, and otherwise disjoint, with no internal vertex in $W$.

**Corollary 7.11 (Fan lemma).** If $G$ is $k$-connected, $v\notin W$ and $|W|\geq k$, then a $k$-fan from $v$ to $W$ exists.

*Proof.* In $H=G-v$, apply set Menger to $A=N(v)$ and $B=W$. If an $A$–$B$ separator $T$ had fewer than $k$ vertices, some vertex of $W$ would survive. Connectedness of $G-T$ would supply a path from $v$ to that surviving vertex. Its portion after the initial edge would be an $A$–$B$ path in $H-T$, a contradiction. Therefore there are at least $k$ disjoint $A$–$B$ paths. Prepend $v$, then trim each at its first $W$ vertex. Distinct endpoints and disjoint interiors are preserved, giving the fan. ∎

The conclusion permits us to choose the target set, but not to prescribe which route must reach which target or how it passes through intermediate vertices. Specifying several terminal pairings gives a different disjoint-path problem and is not an automatic consequence of Menger's theorem.

**Corollary 7.12 (Cycles through two vertices).** A graph with at least three vertices is 2-connected if and only if every two distinct vertices lie on a common cycle.

*Proof.* In a 2-connected graph, nonadjacent vertices have no separator of size zero or one, so Menger gives two internally disjoint paths; their union is a cycle. For adjacent vertices, their edge cannot be a bridge: a bridge in a connected graph with at least three vertices makes at least one endpoint a cutvertex. An alternative path between its ends therefore exists after deleting that edge, and together with the edge forms a cycle.

Conversely, the cycle condition implies connectedness. If a cutvertex $z$ existed, choose $u,v$ from different components of $G-z$. A cycle through $u,v$ provides two internally disjoint $u$–$v$ paths, at most one of which can use $z$. The other would connect their components after deleting $z$, a contradiction. Thus no cutvertex exists and the graph is 2-connected. ∎

## Exercises

### Exercise 7.1
<a id="menger-connectivity-ex-1"></a>

In $K_{2,4}$, let $s,t$ be the two vertices in the part of size two. Determine the maximum number of internally disjoint $s$–$t$ paths and exhibit a minimum protected-terminal separator.

<details>
<summary>Hint 1</summary>

**Hint.** Each vertex in the other part gives a length-two path.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Those four paths have singleton, mutually disjoint interiors. A separator must meet all four.

</details>
<details>
<summary>Solution</summary>

**Solution.** Writing the other part as $\{a,b,c,d\}$ gives paths $s,a,t$, $s,b,t$, $s,c,t$ and $s,d,t$. Their interiors are disjoint. The set $\{a,b,c,d\}$ separates the terminals, so no family can exceed four and no separator can be smaller than four. Both optima are therefore four. The terminals are nonadjacent because they lie in the same bipartition part, so the local vertex theorem applies.

</details>

### Exercise 7.2
<a id="menger-connectivity-ex-2"></a>

Take the triangle with vertices $s,a,t$. Count its distinct internally disjoint $s$–$t$ paths, and explain why the protected-terminal separator minimum is unavailable. Which Menger version still applies?

<details>
<summary>Hint 1</summary>

**Hint.** There is a direct path and a path through the third vertex.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** No permitted vertex deletion removes the direct edge, but deleting edges can remove it.

</details>
<details>
<summary>Solution</summary>

**Solution.** The paths $st$ and $s,a,t$ are distinct and internally disjoint, and these are the only simple terminal paths. Deleting $a$ leaves $st$, while deleting either endpoint is forbidden, so no protected-terminal vertex separator exists. The local vertex theorem's nonadjacency hypothesis fails. Edge Menger still applies: the two paths are edge-disjoint, and deleting both edges incident with $s$ gives a minimum edge separator of size two.

</details>

### Exercise 7.3
<a id="menger-connectivity-ex-3"></a>

In the set version, prove every separator contains $A\cap B$. Explain why trivial paths must be counted even in an edgeless graph.

<details>
<summary>Hint 1</summary>

**Hint.** Consider a common endpoint-set member as a one-vertex path.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A separator meeting that path has only one possible vertex to choose.

</details>
<details>
<summary>Solution</summary>

**Solution.** For each $v\in A\cap B$, the one-vertex path at $v$ is an $A$–$B$ path. Every separator must therefore contain $v$. In an edgeless graph these are all the possible paths, and their vertices form a separator of size $|A\cap B|$. Counting them gives equality on both sides. If trivial paths were omitted while surviving common vertices still counted as connected, the base case and the statement would disagree.

</details>

### Exercise 7.4
<a id="menger-connectivity-ex-4"></a>

Let $G$ be the single edge $xy$, with $A=\{x\}$ and $B=\{y\}$. After contracting the edge, explain the endpoint-set memberships and lift the resulting trivial path. Why is membership inherited from at least one endpoint?

<details>
<summary>Hint 1</summary>

**Hint.** The contracted vertex represents both original endpoints.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Its $A'$ and $B'$ memberships need not arise from the same original vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** The contracted vertex $q$ belongs to both $A'$ and $B'$, so its trivial path is a valid set-to-set path. It lifts to the original edge $xy$, beginning in $A$ and ending in $B$. Requiring both ends to belong to $A$ before assigning $q$ to $A'$ would make $A'$ empty, losing this path; likewise for $B'$. Inheriting membership from either represented endpoint is what makes the lifting argument valid.

</details>

### Exercise 7.5
<a id="menger-connectivity-ex-5"></a>

For the graph in Example 7.9, give both an optimal vertex certificate pair and an optimal edge certificate pair. Explain what failure each describes.

<details>
<summary>Hint 1</summary>

**Hint.** Every route passes through $v$, but there are two choices before and after it.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use one route against the vertex cut $\{v\}$, and two edge-disjoint routes against the two edges incident with $s$.

</details>
<details>
<summary>Solution</summary>

**Solution.** One terminal path together with the separator $\{v\}$ certifies vertex optimum one: connectivity exists but one intermediate-vertex failure destroys it. The two paths $s,a,v,c,t$ and $s,b,v,d,t$, together with edge cut $\{sa,sb\}$, certify edge optimum two. They tolerate deletion of any single edge while still allowing some terminal route. Their common vertex prevents them from giving two independent vertex routes.

</details>

### Exercise 7.6
<a id="menger-connectivity-ex-6"></a>

In the proof of Theorem 7.4, why may the two path families be concatenated at $X$ without sharing other vertices? State the precise component argument.

<details>
<summary>Hint 1</summary>

**Hint.** Trim so each path meets $X$ only at its designated endpoint.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A component of $G-X$ meeting both $A\setminus X$ and $B\setminus X$ would contradict separation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every nontrivial trimmed $A$–$X$ path has all its vertices outside $X$ in a component meeting $A\setminus X$. Every nontrivial trimmed $X$–$B$ path similarly lies outside $X$ in a component meeting $B\setminus X$. Such components cannot coincide: a path inside a common component would join the endpoint sets while avoiding $X$. Thus the families are disjoint outside $X$. Each family uses every vertex of $X$ exactly once, so matching endpoints there creates disjoint concatenations. Trivial paths add no outside vertices.

</details>

### Exercise 7.7
<a id="menger-connectivity-ex-7"></a>

For nonadjacent $s,t$, prove that the minimum protected-terminal separator size is at most $\min\{d(s),d(t)\}$. Explain where nonadjacency is used.

<details>
<summary>Hint 1</summary>

**Hint.** Deleting all neighbours of one terminal leaves it isolated.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The neighbour set must exclude both protected terminals to be an allowed separator.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $s,t$ are nonadjacent, $N(s)$ contains neither $s$ nor $t$. Deleting it isolates $s$ and hence separates the terminals, giving a separator of size $d(s)$. The same argument at $t$ gives the other bound, so the minimum is at most their minimum. With adjacent terminals, $N(s)$ contains the protected vertex $t$ and is not permitted; indeed the direct edge makes every protected-terminal separator impossible.

</details>

### Exercise 7.8
<a id="menger-connectivity-ex-8"></a>

Prove that every $k$-connected graph has minimum degree at least $k$. Include the role of the order condition in the definition.

<details>
<summary>Hint 1</summary>

**Hint.** If a vertex has fewer than $k$ neighbours, delete all of them.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At least one other nonneighbour must remain, because the graph has at least $k+1$ vertices.

</details>
<details>
<summary>Solution</summary>

**Solution.** Suppose $d(v)<k$. The set $N(v)$ has fewer than $k$ vertices. Since $|V|\geq k+1$, at least $|V|-1-d(v)\geq k-d(v)\geq1$ other vertices are nonneighbours of $v$. After deleting $N(v)$, the vertex $v$ is isolated while at least one other vertex survives, so the remaining graph is disconnected. This contradicts $k$-connectivity. Hence every degree is at least $k$.

</details>

### Exercise 7.9
<a id="menger-connectivity-ex-9"></a>

Two triangles share exactly one vertex $v$, and have no other edges between them. Show that every edge belongs to a cycle but the graph is not 2-connected. Why does Corollary 7.12 require cycles through arbitrary pairs of vertices?

<details>
<summary>Hint 1</summary>

**Hint.** Choose one nonshared vertex from each triangle.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Deleting $v$ disconnects those chosen vertices; two internally disjoint paths between them are impossible.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each edge lies on its own triangle. However, deleting $v$ separates the remaining vertices into the two disjoint triangle edges, so $v$ is a cutvertex. For vertices $a,b$ chosen from opposite triangles, every path uses $v$. A common cycle would give two internally disjoint $a$–$b$ paths, at least one avoiding $v$, which is impossible. An edge-by-edge cycle condition therefore does not imply the pairwise cycle condition or 2-connectivity.

</details>

### Exercise 7.10
<a id="menger-connectivity-ex-10"></a>

In the star with centre $v$ and leaves $a,b,c$, the edge sequence $av,bv,cv$ is a path in the line graph. Show that it is not a traversable original walk in that order from $a$ to $c$, and explain how the edge-Menger proof still extracts an original path.

<details>
<summary>Hint 1</summary>

**Hint.** After traversing $av$ and then $vb$, the current vertex is $b$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the connected union of the three edges; the extracted path may omit an unnecessary edge.

</details>
<details>
<summary>Solution</summary>

**Solution.** Consecutive listed edges share $v$, so their three distinct edge-vertices form a line-graph path. But traversing the first two original edges from $a$ ends at $b$, which is not incident with $cv$, so that order is not an original walk. The union is nevertheless a connected subgraph containing $a,c$, and it contains the simple path $a,v,c$. Selecting that path discards $bv$. In the theorem, different line-graph paths have disjoint edge sets, so discarding unnecessary edges preserves the required edge-disjointness.

</details>

## Sources

This chapter's exposition, examples and exercise solutions are original. A primary textbook reference for finite Menger formulations and direct induction is Reinhard Diestel, [*Graph Theory*, Chapter 3, §3.3](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf), consulted 13 November 2026. Euler's retained Quarto chapter *Matchings and Network Flows* supplies the earlier flow-based treatment; the proof here establishes Menger before using any flow theorem. The chapter licence is CC BY-SA 4.0.

## Summary

Menger's theorem equates a largest disjoint route family with a smallest separating set. The direct proof works for deletable endpoint sets, includes trivial paths, and uses contraction or a separator-controlled concatenation to complete an edge induction. Protected-terminal vertex Menger follows for nonadjacent terminals; their exclusion from the cut is essential. Edge Menger permits adjacent terminals and follows through a line graph, where connected edge unions recover original paths. Fans and common cycles express useful consequences of vertex connectivity. In [Flows and Max-Flow Min-Cut](flows-max-flow-min-cut.md), labelled residual paths will provide a quantitative version of the same contrast between feasible routes and obstruction certificates.
