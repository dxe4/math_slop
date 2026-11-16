var e=`---
parent_id: book-graph-theory
chapter_id: matchings-tutte-berge
title: "Matchings: Tutte and Berge"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Matchings: Tutte and Berge

A triangle has no perfect matching even though every vertex has two neighbours. The obstruction is not a shortage in one side of a bipartition: the graph has no bipartition at all. Its odd number of vertices prevents complete pairing. In a larger even-order graph, deleting a small set of vertices can expose several odd components that compete for partners in that deleted set. Tutte's theorem says that these obstructions completely characterize the existence of a perfect matching.

This chapter gives the full proof, including the induction inside odd components. It also proves Berge's augmenting-path characterization of maximum matchings and the Tutte–Berge formula for their exact size. The three results address different questions: whether a current matching can be improved, whether all vertices can be paired, and how many vertices must remain exposed in the best pairing.

Required preparation is [Paths, Cycles, and Connectivity](paths-cycles-connectivity.md), finite counting and strong induction, and [Bipartite Matching: Hall and Koenig](bipartite-matching.md). Hall's theorem is used in the sufficiency proof of Tutte's theorem. That proof does not assume the result being proved on an equally large graph; every recursive invocation is on a strictly smaller even-order graph.

All graphs here are finite, simple and undirected. Isolated vertices are included in component counts. The empty graph has zero components, and its empty matching is perfect. A matching covers each of its endpoints once, so a matching of size $m$ covers exactly $2m$ vertices.

## Improvement by an alternating path

**Definition 6.1 (Exposed vertices and augmenting paths).** Relative to a matching $M$, a vertex is exposed if no edge of $M$ meets it. An $M$-alternating path alternates between edges in $M$ and edges outside $M$. An $M$-augmenting path is a simple alternating path with two exposed endpoints, beginning and ending with edges outside $M$.

The endpoint condition is essential. A path whose first and last edges happen to be outside $M$ need not be augmenting if either endpoint is already matched elsewhere. Replacing its edges would then conflict with that outside matching edge. Simplicity is also part of the definition, so an odd closed alternating-looking walk is not automatically an improving path.

**Worked Example 6.2 (Augmentation in a graph with an odd cycle).** Let the graph have the path $a,b,c,d,e,f$ and one extra edge $ac$. The extra edge makes a triangle on $a,b,c$. Start with $M=\\{bc,de\\}$.

The vertices $a,f$ are exposed. The path $a,b,c,d,e,f$ alternates outside, inside, outside, inside, outside. Flipping gives $M'=\\{ab,cd,ef\\}$, a perfect matching of size three. The extra triangle edge causes no conflict because it is not selected. Thus the improvement argument does not require bipartiteness. The original matching is maximal: every other graph edge meets $bc$ or $de$. It is nevertheless not maximum, since the exhibited replacement is larger.

**Lemma 6.3 (Symmetric differences of matchings).** If $M,N$ are matchings in a finite graph, every nontrivial component of the graph with edge set $M\\triangle N$ is an alternating path or an even alternating cycle.

*Proof.* Each vertex meets at most one edge of $M$ and at most one edge of $N$, so its degree in the symmetric-difference graph is at most two. If its degree is two, one incident edge comes from each matching, because neither matching can supply two. A finite connected graph of maximum degree two with at least one edge is a path or cycle: following edges cannot branch, and either reaches an endpoint or closes using the entire component. The edges alternate by the degree-two observation. A cycle therefore has even length. An edge common to $M,N$ is absent from the symmetric difference, and its endpoints meet no symmetric-difference edge because both matchings already use that common edge. ∎

**Theorem 6.4 (Berge's augmenting-path lemma).** A matching in a finite graph is maximum if and only if it has no augmenting path.

*Proof.* On an augmenting path, remove the edges in $M$ and insert those outside $M$, leaving all other matching edges unchanged. Each internal path vertex loses its one matched path edge and gains the other incident path edge; it cannot have a matching edge outside the path. Each exposed endpoint gains one edge. Thus the new set is a matching. Alternation gives one more inserted than removed edge, so the size increases by one. A maximum matching cannot have such a path.

Conversely, suppose $N$ is a matching with $|N|>|M|$. Common edges cancel when comparing sizes, so in the components of $M\\triangle N$ the total number of $N$-edges exceeds the total number of $M$-edges. An alternating cycle contains equally many of each. An alternating path has excess zero, one, or negative one. Some component must have excess one for $N$ and is therefore a path beginning and ending with $N$-edges.

Its endpoints meet no $M$-edge in the symmetric difference. Nor can either meet a common matching edge, by the final observation of Lemma 6.3. Thus the endpoints are exposed in $M$ in the whole original graph. The path is an $M$-augmenting path, proving the converse. ∎

The theorem is an exact characterization, not a promise that a casual search has examined every possible path. The directed reachability construction in the bipartite chapter exploits a fixed left-right structure. In a general graph, odd cycles make the organisation of alternating searches more delicate. We prove existence and optimality statements here without presenting an efficient general matching-search algorithm.

## Odd components measure an unavoidable loss

**Definition 6.5 (Odd-component count).** For a finite graph $H$, write $o(H)$ for the number of connected components having an odd number of vertices. A one-vertex isolated component is odd. For $S\\subseteq V(G)$, the graph $G-S$ deletes those vertices and all edges meeting them.

**Lemma 6.6 (Component parity).** For every finite graph $H$,
$$o(H)\\equiv |V(H)|\\pmod2.$$

*Proof.* Sum the orders of all components. Even components contribute zero modulo two and each odd component contributes one, so the parity of the total order equals the number of odd components. This also holds for the empty graph, with both quantities zero. ∎

**Lemma 6.7 (Odd-component lower bound).** For every matching $M$ in a finite graph and every $S\\subseteq V$,
$$|V|-2|M|\\ge o(G-S)-|S|.$$

*Proof.* Consider the odd components of $G-S$. If all vertices of such a component were paired internally, its order would be even, impossible. Thus each odd component either contains an exposed vertex or has a matching edge to $S$. There are no edges between different components of $G-S$. At most $|S|$ odd components can use a matching edge to $S$, because those edges require different vertices of $S$. At least $o(G-S)-|S|$ odd components therefore contain an exposed vertex. These vertices are distinct, and the total number of exposed vertices is $|V|-2|M|$, proving the bound. A negative right side gives a valid but uninformative inequality. ∎

**Worked Example 6.8 (Even order and connectedness are insufficient).** In the star $K_{1,5}$, let $z$ be the centre and the other five vertices its leaves. The order is six and the graph is connected. Deleting $S=\\{z\\}$ leaves five odd components, so every matching exposes at least $5-1=4$ vertices.

Any edge is a matching of size one, exposing exactly four vertices. No two edges can be selected because they share the centre. Thus the maximum matching has size one and there is no perfect matching. The obstruction counts components, not just the parity of the original graph's order. In particular, testing only $S=\\varnothing$ would miss it: the connected original graph has even order and hence no odd component.

## The full perfect-matching theorem

**Definition 6.9 (Factor-critical graph).** A finite graph of odd order is factor-critical if deleting any one of its vertices leaves a graph with a perfect matching. A single vertex is factor-critical because its deletion leaves the empty graph.

**Theorem 6.10 (Tutte's one-factor theorem).** A finite simple graph $G$ has a perfect matching if and only if
$$o(G-S)\\le |S|\\qquad\\text{for every }S\\subseteq V(G).$$
A perfect matching is also called a one-factor.

*Proof of necessity.* A perfect matching leaves no exposed vertices. Lemma 6.7 gives $0\\ge o(G-S)-|S|$ for every $S$, exactly the required condition.

*Proof of sufficiency.* We use strong induction on $n=|V(G)|$ for graphs satisfying the displayed condition. The empty graph has the empty perfect matching. For a nonempty graph, the condition at $S=\\varnothing$ says $o(G)=0$, so every component has even order and $n$ is even.

Call a set $S$ tight if $o(G-S)=|S|$. A nonempty tight set exists. Choose any vertex $v$. The graph $G-v$ has odd total order, so by Lemma 6.6 it has at least one odd component. The assumed inequality at $\\{v\\}$ permits at most one. Therefore $o(G-v)=1$, and $\\{v\\}$ is tight. Among tight sets, choose one maximal under inclusion. Finiteness guarantees such a choice. Write $s=|S|\\ge1$.

First, every component of $G-S$ is odd. Suppose there were an even component $D$, and choose $v\\in V(D)$. Its deletion leaves an odd number of vertices inside $D$, so at least one odd component occurs there. The original $s$ odd components of $G-S$ are unchanged. Consequently
$$o(G-(S\\cup\\{v\\}))\\ge s+1.$$
Tutte's assumed inequality bounds that count above by $|S\\cup\\{v\\}|=s+1$. Equality makes the strict superset $S\\cup\\{v\\}$ tight, contradicting maximality. Hence $G-S$ consists of exactly $s$ odd components, say $C_1,\\ldots,C_s$.

Second, each $C_i$ is factor-critical. Fix one such component $C$, choose any $v\\in V(C)$, and put $H=C-v$. We verify Tutte's condition for $H$ before invoking induction. For an arbitrary $X\\subseteq V(H)$, write $r=o(H-X)$. In $G-(S\\cup X\\cup\\{v\\})$, the other $s-1$ original odd components remain, while $C$ contributes exactly $r$ odd components. Therefore the assumed inequality gives
$$s-1+r\\le s+|X|+1,\\qquad\\text{so }r\\le |X|+2.$$
The graph $H$ has even order. Lemma 6.6 gives
$$r\\equiv |V(H)|-|X|\\equiv |X|\\pmod2.$$
If $r>|X|$, the parity and upper bound force $r=|X|+2$. The preceding displayed inequality would then be equality:
$$o(G-(S\\cup X\\cup\\{v\\}))=|S\\cup X\\cup\\{v\\}|.$$
This makes a strict superset of $S$ tight, again contradicting maximality. Thus $r\\le|X|$ for every $X$, proving Tutte's condition for $H$. Because $S$ is nonempty and $H$ omits at least one additional vertex, $|V(H)|\\le n-2$. The induction hypothesis supplies a perfect matching of $H$. Since $v$ was arbitrary, $C$ is factor-critical.

Third, match the vertices of $S$ to different components $C_i$. Construct an auxiliary bipartite graph with left part $S$ and right part the $s$ component labels, joining $x$ to $C_i$ if some original edge connects $x$ to a vertex of $C_i$. For any $X\\subseteq S$, a component not in $N(X)$ has no edge to $X$ and remains an odd component of $G-(S\\setminus X)$. There are $s-|N(X)|$ such components, so
$$s-|N(X)|\\le o(G-(S\\setminus X))\\le|S\\setminus X|=s-|X|.$$
Therefore $|N(X)|\\ge|X|$. Hall's theorem gives a matching saturating $S$, and the equal part sizes make it pair $S$ bijectively with all $s$ components.

For the pair assigning $x_i\\in S$ to $C_i$, choose an original edge $x_iv_i$ with $v_i\\in V(C_i)$. Factor-criticality gives a perfect matching of $C_i-v_i$. Take all these internal matchings together with all edges $x_iv_i$. Different components are disjoint and each vertex of $S$ was assigned once, so no endpoint conflicts occur. Every vertex is covered. This is a perfect matching of $G$, completing the induction. ∎

The second stage is the crucial induction check. Knowing only that the components are odd does not imply that deleting a chosen vertex makes them matchable. Maximality of the tight set rules out a larger tight set, and parity closes the two-unit gap in the estimate. Without those steps the proof would assume exactly the matching property it needs to establish.

**Worked Example 6.11 (A tight-set proof on a four-cycle).** Let $G$ be the cycle $1,2,3,4,1$. The set $S=\\{1,3\\}$ is tight: deleting it leaves isolated vertices $2,4$, so $o(G-S)=2=|S|$. No larger superset is tight, since deleting one further vertex leaves one odd component but a deleted set of size three, and deleting all vertices gives zero components.

The two components are singletons and hence factor-critical. The auxiliary graph joins each of $1,3$ to both component labels. Choose assignments $1$ to $\\{2\\}$ and $3$ to $\\{4\\}$. The selected original edges $12,34$, with empty internal matchings, form the desired perfect matching. The alternative tight set $\\{2,4\\}$ works too; the proof requires a suitable maximal tight set, not a unique one.

## Tutte–Berge gives the exact optimum

**Definition 6.12 (Deficiency).** For a finite graph $G$ on $n$ vertices, define
$$\\operatorname{def}(G)=\\max_{S\\subseteq V}\\bigl(o(G-S)-|S|\\bigr).$$
The maximum exists over a finite family. It is nonnegative because the empty set gives $o(G)\\ge0$.

For every $S$, component parity gives
$$o(G-S)-|S|\\equiv n-2|S|\\equiv n\\pmod2.$$
Thus all candidate values, and their maximum, have the same parity as $n$. In particular $n+\\operatorname{def}(G)$ is even. This parity statement is needed in the construction below.

**Theorem 6.13 (Tutte–Berge formula).** For every finite simple graph of order $n$,
$$\\nu(G)=\\frac{n-\\operatorname{def}(G)}2.$$
Equivalently, a maximum matching exposes exactly $\\operatorname{def}(G)$ vertices.

*Proof.* Lemma 6.7, maximized over $S$, shows that every matching leaves at least $d=\\operatorname{def}(G)$ vertices exposed. Hence $\\nu(G)\\le(n-d)/2$.

For the reverse bound, add $d$ new vertices, join each to every original vertex, and join every pair of new vertices. Call the enlarged graph $J$. Its order $n+d$ is even. We verify Tutte's condition for every deleted set $T\\subseteq V(J)$.

If all new vertices belong to $T$, write $S=T\\cap V(G)$. Then $J-T=G-S$ and the definition of $d$ gives
$$o(J-T)\\le|S|+d=|T|.$$
If some new vertex remains, it is adjacent to every other remaining vertex, so $J-T$ is nonempty and connected. Its odd-component count is therefore zero or one. When $T\\ne\\varnothing$, this is at most $|T|$. When $T=\\varnothing$, the graph $J$ has even order, so the count is zero. These cases establish Tutte's condition, including $d=0$.

Theorem 6.10 supplies a perfect matching of $J$. Remove all its edges incident with new vertices. At most $d$ original vertices lose partners, so the retained matching in $G$ exposes at most $d$ vertices and has at least $(n-d)/2$ edges. Together with the upper bound, this proves equality. The empty graph has $d=0$ and is included. ∎

**Worked Example 6.14 (An exact optimum with an odd-component certificate).** Take three disjoint triangles on vertices $a_i,b_i,c_i$ for $1\\le i\\le3$, and a vertex $z$ joined to $a_1,a_2,a_3$. The graph is connected and has ten vertices. Deleting $\\{z\\}$ leaves three odd components, so every matching exposes at least $3-1=2$ vertices and has at most four edges.

The matching
$$\\{za_1,b_1c_1,a_2b_2,a_3b_3\\}$$
has four edges, exposing only $c_2,c_3$. Thus $\\nu=4$ and $\\operatorname{def}(G)=2$. The set $\\{z\\}$ and the four-edge matching together certify optimality. There is no need to verify all $2^{10}$ deletion sets: the lower bound from this set and the explicit matching meet.

A maximum matching and a deletion set attaining its exposed-vertex bound form complementary witnesses. In bipartite graphs the previous chapter supplied an equally sized vertex cover; in general graphs, the odd-component deficiency is the appropriate exact obstruction. The two results should not be confused: the triangle still has cover number two and matching number one.

These theorems concern cardinality. A perfect matching may have a poor total weight if edge costs matter, and a maximum matching may have several equally large alternatives. The proofs certify sizes and coverage under the stated graph model, not optimality for an undeclared weighted or preference-based objective.

## Exercises

### Exercise 6.1
<a id="matchings-tutte-berge-ex-1"></a>

Let a graph have path edges $12,23,34,45,56$ and extra edge $13$. For $M=\\{23,45\\}$, give an augmenting path and a maximum matching. Explain why the odd cycle does not invalidate the flip.

<details>
<summary>Hint 1</summary>

The exposed vertices are $1$ and $6$.

</details>
<details>
<summary>Hint 2</summary>

The full six-vertex path has the required alternating edge pattern.

</details>
<details>
<summary>Solution</summary>

The path $1,2,3,4,5,6$ alternates outside, inside, outside, inside, outside relative to $M$. Flipping gives $\\{12,34,56\\}$, a perfect matching of size three, hence maximum by the bound of half the vertex count. Edge $13$ creates a triangle but is not selected. The flip proof requires a simple augmenting path and a matching, not a bipartition, so it remains valid.

</details>

### Exercise 6.2
<a id="matchings-tutte-berge-ex-2"></a>

Show that every maximal matching $M$ in a finite graph satisfies $\\nu(G)\\le2|M|$. Give a graph attaining equality.

<details>
<summary>Hint 1</summary>

Every edge of a maximum matching must meet some endpoint of $M$, or it could be added to $M$.

</details>
<details>
<summary>Hint 2</summary>

The $2|M|$ endpoints can each meet at most one edge of another matching.

</details>
<details>
<summary>Solution</summary>

Let $N$ be maximum. Every edge of $N$ has an endpoint covered by $M$, because an edge with both endpoints exposed could be added, contradicting maximality. Choose one such endpoint per edge of $N$. Distinct $N$-edges have disjoint endpoints, so these choices are distinct among the $2|M|$ endpoints. Hence $|N|\\le2|M|$. On the path $a,b,c,d$, the maximal matching $\\{bc\\}$ has size one while $\\{ab,cd\\}$ is maximum of size two, attaining equality.

</details>

### Exercise 6.3
<a id="matchings-tutte-berge-ex-3"></a>

Find a Tutte obstruction and the exact matching number of $K_{1,3}$. State why even order and absence of isolated vertices do not suffice for a perfect matching.

<details>
<summary>Hint 1</summary>

Delete the centre.

</details>
<details>
<summary>Hint 2</summary>

Every two edges of the star share that centre.

</details>
<details>
<summary>Solution</summary>

Deleting the centre leaves three isolated odd components, exceeding the deleted-set size one. Thus Tutte forbids a perfect matching and the deficiency is at least two. One edge is a matching, while no two can coexist, so $\\nu=1$. The four-vertex graph is connected and has no isolate, yet two vertices necessarily remain exposed. Its obstruction concerns the odd components revealed by deletion.

</details>

### Exercise 6.4
<a id="matchings-tutte-berge-ex-4"></a>

Prove that every odd cycle $C_{2r+1}$ with $r\\ge1$ is factor-critical. Explain the matching after an arbitrary vertex is deleted.

<details>
<summary>Hint 1</summary>

Deleting one vertex breaks the cycle into a path on an even number of vertices.

</details>
<details>
<summary>Hint 2</summary>

Pair consecutive vertices along that path.

</details>
<details>
<summary>Solution</summary>

Choose any vertex $v$. The remaining graph is a path on $2r$ vertices; in its path order $x_1,\\ldots,x_{2r}$, take edges $x_1x_2,x_3x_4,\\ldots,x_{2r-1}x_{2r}$. They are disjoint and cover every remaining vertex, so they form a perfect matching of $C_{2r+1}-v$. Since $v$ was arbitrary and the original order is odd, the cycle is factor-critical.

</details>

### Exercise 6.5
<a id="matchings-tutte-berge-ex-5"></a>

Construct a connected even-order graph satisfying Tutte's inequality for the empty set and every singleton, but not for all vertex sets. Use two mutually adjacent vertices joined to every vertex of four disjoint triangles, with no other edges between triangles.

<details>
<summary>Hint 1</summary>

After one vertex is removed, at least one of the two universal vertices remains.

</details>
<details>
<summary>Hint 2</summary>

Delete both universal vertices together.

</details>
<details>
<summary>Solution</summary>

The graph has $2+4\\cdot3=14$ vertices and is connected, so $o(G)=0$. After deleting any single vertex, a universal vertex remains and connects the remaining graph, whose order is thirteen. Thus its odd-component count is one, meeting the singleton inequality. Deleting the two universal vertices leaves four disjoint odd triangles, so $o(G-S)=4>|S|=2$. Tutte's condition fails and no perfect matching exists. Checking only empty and singleton sets is insufficient.

</details>

### Exercise 6.6
<a id="matchings-tutte-berge-ex-6"></a>

In $K_{m,m}$ with $m\\ge1$, show that one whole bipartition class is an inclusion-maximal tight set. Describe the components and auxiliary matching in the proof of Tutte.

<details>
<summary>Hint 1</summary>

Deleting that class leaves $m$ isolated vertices.

</details>
<details>
<summary>Hint 2</summary>

A larger superset deletes additional vertices from the other class and decreases the number of remaining odd components.

</details>
<details>
<summary>Solution</summary>

Take $S=L$, of size $m$. The remaining $R$ vertices are isolated, so $o(G-S)=m$ and $S$ is tight. A strict superset adds $t\\ge1$ vertices of $R$; its size is $m+t$, while its remainder has $m-t$ isolated odd components. Equality is impossible, so $S$ is inclusion-maximal. The components are factor-critical singletons. The auxiliary graph is $K_{m,m}$ between left vertices and singleton labels, and any bijection chooses $m$ original edges forming a perfect matching.

</details>

### Exercise 6.7
<a id="matchings-tutte-berge-ex-7"></a>

Prove directly from the definition that deficiency is nonnegative and has the same parity as the graph order. Deduce that an odd-order graph has positive deficiency.

<details>
<summary>Hint 1</summary>

Use the empty deleted set for nonnegativity.

</details>
<details>
<summary>Hint 2</summary>

Apply component parity to $G-S$ before subtracting $|S|$.

</details>
<details>
<summary>Solution</summary>

The empty set gives candidate value $o(G)\\ge0$. For any $S$, component parity gives $o(G-S)\\equiv n-|S|\\pmod2$, so $o(G-S)-|S|\\equiv n-2|S|\\equiv n\\pmod2$. Every candidate has that parity, hence so does their finite maximum. If $n$ is odd, the maximum is a nonnegative odd integer and is therefore at least one. This recovers the unavoidable exposed vertex in odd order.

</details>

### Exercise 6.8
<a id="matchings-tutte-berge-ex-8"></a>

For disjoint finite graphs $G,H$, prove that deficiency is additive under disjoint union. Explain the corresponding statement about matching numbers.

<details>
<summary>Hint 1</summary>

Split a deleted set into its intersections with the two vertex sets.

</details>
<details>
<summary>Hint 2</summary>

Odd-component counts add across disjoint components, and maximizers can be chosen independently.

</details>
<details>
<summary>Solution</summary>

Write $S=S_G\\cup S_H$. Since there are no edges between the graphs,
$o((G\\mathbin{\\dot\\cup}H)-S)-|S|=[o(G-S_G)-|S_G|]+[o(H-S_H)-|S_H|]$.
Each bracket is at most its graph's deficiency, giving an upper bound by their sum. Choosing maximizing sets in both graphs attains that sum, proving additivity. A matching in the union splits into independent matchings in the two graphs, so $\\nu(G\\mathbin{\\dot\\cup}H)=\\nu(G)+\\nu(H)$. The Tutte–Berge formula is consistent with both additive identities.

</details>

### Exercise 6.9
<a id="matchings-tutte-berge-ex-9"></a>

Let $G$ be the disjoint union of $K_{1,4}$ and a triangle. Give a maximum matching and a deleted-set certificate meeting its exposed-vertex count. Compare this certificate with the choice $S=\\varnothing$.

<details>
<summary>Hint 1</summary>

The star contributes at most one matching edge and the triangle at most one.

</details>
<details>
<summary>Hint 2</summary>

Delete the star centre while leaving the triangle intact.

</details>
<details>
<summary>Solution</summary>

The graph has eight vertices. Select one star edge and one triangle edge, giving a matching of size two and four exposed vertices. No larger matching exists because each component contributes at most one. Deleting only the star centre leaves four isolated leaves and one odd triangle: $o(G-S)=5$, so $o(G-S)-|S|=4$. This meets the exposed-vertex count and gives deficiency four. For $S=\\varnothing$, both original components have odd order, giving only the weaker bound two. The maximum over deleted sets is essential.

</details>

### Exercise 6.10
<a id="matchings-tutte-berge-ex-10"></a>

Suppose a finite graph $G$ has a perfect matching. Show that deleting any vertex produces a graph with deficiency one. Is the converse statement, requiring this property after every vertex deletion, true for all nonempty even-order graphs?

<details>
<summary>Hint 1</summary>

Remove from the perfect matching the edge incident with the deleted vertex.

</details>
<details>
<summary>Hint 2</summary>

For the converse, inspect a graph of two isolated vertices.

</details>
<details>
<summary>Solution</summary>

For a deleted vertex $v$, remove its matching edge $vw$. All other matching edges remain, covering every remaining vertex except $w$. Since $G-v$ has odd order, every matching leaves at least one exposed vertex. Its maximum matching therefore leaves exactly one, and Tutte–Berge gives deficiency one. The converse fails for two isolated vertices: deleting either leaves a single vertex of deficiency one, yet the original graph has no edge and no perfect matching. The conclusion is a necessary deletion property, not an equivalence without further hypotheses.

</details>

## Sources and provenance

This is original exposition with original worked examples and exercises. The unchanged local seeds are Quarto's **Matchings and Network Flows** and the matching discussion in Discrete Mathematics **Planarity, Coloring, and Matchings**. Primary sources include W. T. Tutte, [“The Factorization of Linear Graphs”](https://academic.oup.com/jlms/article-abstract/s1-22/2/107/883273), *Journal of the London Mathematical Society* 22 (1947), 107–111, and Claude Berge, [“Two Theorems in Graph Theory”](https://pmc.ncbi.nlm.nih.gov/articles/PMC534337/), *Proceedings of the National Academy of Sciences* 43 (1957), 842–844. The proof presented here uses maximal tight sets, parity and the previously proved Hall theorem; every induction hypothesis and the universal-vertex step are supplied explicitly. Historical attribution does not imply that this exposition reproduces either original proof.

## Summary

An augmenting path enlarges a matching by one, and symmetric differences prove Berge's converse: every nonmaximum matching has such a path. Odd components after vertex deletion impose an exposed-vertex lower bound. Tutte's theorem proves that their complete absence as obstructions is sufficient for a perfect matching, using a maximal tight set, factor-critical odd components and an auxiliary Hall matching. Maximizing the same obstruction yields deficiency, and adding universal vertices converts the perfect-matching theorem into the exact Tutte–Berge formula. A matching and a deletion set with equal exposed-vertex bounds certify optimality. The next stage of graph theory develops connectivity through disjoint paths and separators, extending the theme that a construction can be paired with a structural obstruction of exactly matching size.
`;export{e as default};