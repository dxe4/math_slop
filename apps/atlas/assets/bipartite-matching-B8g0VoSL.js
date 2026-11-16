var e=`---
parent_id: book-graph-theory
chapter_id: bipartite-matching
title: "Bipartite Matching: Hall and Koenig"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Bipartite Matching: Hall and Koenig

A collection of individually possible assignments may be impossible to carry out simultaneously. Every task may have an eligible worker, yet several tasks may compete for the same small pool. Matching theory makes that shortage precise. Hall's theorem gives an exact condition for assigning every left-hand demand to a different compatible right-hand resource. Koenig's theorem supplies a different kind of exactness: the largest number of disjoint compatible pairs equals the smallest number of vertices meeting all compatibility edges.

The required preparation is [Graphs, Degrees, and Isomorphism](graphs-degrees-isomorphism.md), [Paths, Cycles, and Connectivity](paths-cycles-connectivity.md), and finite-set proof methods from [Discrete Mathematics](../discrete-mathematics-proof-counting-structure.md). The preceding chapter, [Eulerian and Hamiltonian Graphs](eulerian-hamiltonian-graphs.md), showed that alternate edges of an even Hamilton cycle give a perfect matching. Here pairing is studied independently of any spanning cycle. No flow theorem or linear programming duality is assumed.

All graphs in this chapter are finite and simple. A bipartition is specified as $V=L\\mathbin{\\dot\\cup}R$, with every edge having one endpoint in each part. Either part may be empty, and isolated vertices are allowed. Those conventions are compatible with the theorems; they must not be concealed by an informal assumption that every object has a possible partner.

## Pairings and the repair of a greedy choice

**Definition 5.1 (Matching and saturation).** A matching $M$ is a set of edges with pairwise disjoint endpoints. A vertex incident with an edge of $M$ is matched; otherwise it is exposed. The matching saturates a set when it matches every vertex in that set. It is perfect when it saturates all vertices. It is maximum when its cardinality is largest among all matchings, and maximal when no further edge can simply be added.

Maximum implies maximal, but maximality only forbids an immediate addition. It does not forbid replacing earlier choices. A matching saturating $L$ need not be perfect when $R$ has additional vertices. Its size is exactly $|L|$, because every edge contains one left endpoint and those endpoints are distinct.

For $X\\subseteq L$, its neighbourhood is
$$N(X)=\\{r\\in R:\\text{some }x\\in X\\text{ satisfies }xr\\in E\\}.$$
This is a union of available resources, not a sum of left degrees. If two demands share a neighbour, that resource is counted once in $N(X)$.

**Lemma 5.2 (Flipping an augmenting path).** Let $M$ be a matching in any finite simple graph. Suppose a simple path has exposed endpoints and alternates between edges outside $M$ and edges in $M$, starting and ending outside $M$. Replacing its matching edges by its nonmatching edges gives a matching with one more edge.

*Proof.* Each internal path vertex has one matching edge on the path and loses it, then gains the other path edge. It has no matching edge outside the path because $M$ was a matching. Each endpoint was exposed and gains one edge. Vertices outside the path retain their matching status, and simplicity prevents a path vertex from being treated twice. Thus the replacement is a matching. The path starts and ends with nonmatching edges and alternates, so it has one more nonmatching than matching edge. The cardinality increases by one. ∎

**Worked Example 5.3 (A maximal matching that needs repair).** On the path $a,b,c,d$, take $M=\\{bc\\}$. Neither $ab$ nor $cd$ can be added while retaining $bc$, so this matching is maximal. Nevertheless the path $a,b,c,d$ is augmenting: its endpoints are exposed and its edge pattern is outside, inside, outside. Flipping produces $\\{ab,cd\\}$.

The new matching is perfect and hence maximum, because no matching on four vertices can have more than two edges. The proof of optimality uses a size bound as well as a construction. A greedy procedure stopping at $\\{bc\\}$ would certify only that its current set is maximal, not that it has solved the maximum-cardinality problem.

## Hall's condition sees every collective shortage

**Theorem 5.4 (Hall).** A finite bipartite graph with specified parts $L,R$ has a matching saturating $L$ if and only if
$$|N(X)|\\ge |X|\\qquad\\text{for every }X\\subseteq L.$$

*Proof of necessity.* A matching saturating $L$ sends each member of $X$ to its distinct matched neighbour in $N(X)$. This is an injection, so the neighbourhood has at least $|X|$ elements.

*Proof of sufficiency.* There is a maximum matching $M$ because the finite graph has finitely many edge subsets. Suppose $M$ leaves $x_0\\in L$ exposed. Orient nonmatching edges from $L$ to $R$ and matching edges from $R$ to $L$. Let $X$ be the left vertices reachable from $x_0$ in this auxiliary directed graph, and $Y$ the reachable right vertices.

No vertex of $Y$ is exposed. Otherwise a shortest directed path to such a vertex is simple, alternates in the required way, and has exposed endpoints; Lemma 5.2 would enlarge $M$. Every member of $Y$ therefore has a matched partner, which is also reachable in $X$. Conversely, every member of $X$ other than $x_0$ was reached along its matching edge from a member of $Y$, since those are the only directed edges entering $L$. These matching edges pair $Y$ bijectively with $X\\setminus\\{x_0\\}$. Thus $|X|=|Y|+1$.

Finally $N(X)=Y$. A reachable right vertex is certainly a neighbour of a reachable left vertex. In the other direction, if $xr$ is an edge with $x\\in X$, then a nonmatching edge is a permitted forward step to $r$. If it is a matching edge, $x\\ne x_0$ and its matched predecessor $r$ already belongs to $Y$. Therefore every neighbour lies in $Y$. We obtain $|N(X)|=|X|-1$, contradicting Hall's hypothesis. No left vertex can remain exposed, completing the proof. ∎

The theorem includes $X=\\varnothing$, whose inequality is $0\\ge0$. If $L$ is empty, the empty matching saturates it. If $L$ is nonempty and $R$ is empty, a singleton left set violates the condition. The inequality for $X=L$ also implies $|L|\\le|R|$, so that cardinality assumption need not be added separately.

**Worked Example 5.5 (Enough resources in total, but not where needed).** Let
$$L=\\{a,b,c,d\\},\\qquad R=\\{1,2,3,4\\},$$
with neighbourhoods $N(a)=N(b)=\\{1\\}$, $N(c)=\\{2,3\\}$ and $N(d)=\\{3,4\\}$. Every left vertex has a neighbour and the two parts have equal size.

The subset $\\{a,b\\}$ has only the neighbour $1$, so Hall fails. No matching saturates $L$. A matching of size three is $\\{a1,c2,d3\\}$; a fourth edge would have to match both $a,b$ to the same right vertex, impossible. The resource $4$ being available does not repair that shortage because it is incompatible with $a,b$. Hall's quantifier over all subsets is exactly what detects such a collective constraint.

The proof is also a certificate-producing argument. A failed alternating search from an exposed left vertex gives the explicit shortage set $X$, not just a statement that a particular greedy search was unlucky. Conversely, a successful saturating matching certifies every Hall inequality simultaneously by restricting its injection to each subset.

## Representatives and regular bipartite graphs

**Corollary 5.6 (Distinct representatives).** For a finite indexed family of finite sets $A_1,\\ldots,A_t$, it is possible to choose elements $a_i\\in A_i$ with all chosen elements distinct if and only if
$$\\left|\\bigcup_{i\\in J}A_i\\right|\\ge |J|\\qquad\\text{for every }J\\subseteq\\{1,\\ldots,t\\}.$$

*Proof.* Build a bipartite graph whose left vertices are the indices and whose right vertices are elements of the finite union. Join $i$ to exactly the members of $A_i$. Then the neighbourhood of an index set $J$ is the displayed union. A left-saturating matching is precisely a selection of distinct representatives, so Hall gives the equivalence. Repeated sets are permitted because their indices are different left vertices. ∎

**Worked Example 5.7 (Four labelled demands).** Consider $A_1=\\{p,q\\}$, $A_2=\\{q,r\\}$, $A_3=\\{p,r\\}$ and $A_4=\\{r,s\\}$. The choices $a_1=p$, $a_2=q$, $a_3=r$, $a_4=s$ give distinct representatives. Each chosen element belongs to its required set, and none repeats.

This explicit selection proves existence without checking all sixteen index subsets separately. It also proves that those sixteen inequalities hold: for any $J$, the corresponding chosen representatives are $|J|$ distinct members of its union. If $A_4$ were instead $\\{p,q,r\\}$, all four sets together would have union of size three, so existence would fail even though each individual set remained nonempty.

**Corollary 5.8 (Positive regularity forces a perfect matching).** A finite bipartite graph in which every vertex has the same degree $r\\ge1$ has a perfect matching.

*Proof.* Counting edges from the two sides gives $r|L|=|E|=r|R|$, so $|L|=|R|$. For $X\\subseteq L$, exactly $r|X|$ edges leave $X$. All end in $N(X)$, whose vertices are each incident with at most $r$ of those edges. Hence $r|X|\\le r|N(X)|$. Cancel the positive integer $r$ and apply Hall. The matching saturates $L$, and equal part sizes make it perfect. The empty graph on empty parts also satisfies the conclusion with the empty matching. ∎

The positivity of $r$ matters. A graph consisting only of isolates is zero-regular even if its part sizes are different; the cancellation argument cannot be made and a nonempty left part cannot be saturated. Minimum degree on just one side is likewise not a replacement for a bound on the collective neighbourhoods.

## Koenig's equality and an optimality certificate

**Definition 5.9 (Vertex cover).** A vertex cover is a set $C\\subseteq V$ meeting every edge. Write $\\tau(G)$ for the minimum size of a vertex cover and $\\nu(G)$ for the maximum size of a matching. Both minima and maxima exist for a finite graph.

A vertex cover is not an edge cover: it selects vertices, not edges. It need not contain every vertex, and a matching's endpoints need not be a minimum cover. The empty set covers an edgeless graph, giving $\\tau=\\nu=0$ there.

**Lemma 5.10 (Weak matching-cover inequality).** In any finite graph, every matching $M$ and vertex cover $C$ satisfy $|M|\\le|C|$.

*Proof.* Each edge of $M$ has an endpoint in $C$. Select one such endpoint per matching edge. Distinct matching edges have disjoint endpoints, so the selected vertices are distinct. This injects $M$ into $C$. Taking an optimal matching and cover gives $\\nu(G)\\le\\tau(G)$. ∎

**Theorem 5.11 (Koenig).** For every finite bipartite graph,
$$\\nu(G)=\\tau(G).$$

*Proof.* Choose a maximum matching $M$. Use the same directed auxiliary graph as in Hall's proof, but now start reachability from every exposed vertex of $L$. Let $Z_L,Z_R$ be the reached vertices in the two parts. No exposed right vertex is reached, or a shortest directed path from one of the roots would augment $M$.

Set $C=(L\\setminus Z_L)\\cup Z_R$. This is a vertex cover. Indeed, an edge whose left endpoint lies outside $Z_L$ is already covered. If its left endpoint lies in $Z_L$, its right endpoint lies in $Z_R$: a nonmatching edge can be followed forward, and for a matching edge its right endpoint is the left vertex's reached predecessor. A root is exposed and has no matching predecessor, so that case introduces no exception.

For each matched pair $\\ell r\\in M$, either both endpoints are reached or neither is. If $r$ is reached, its matching edge reaches $\\ell$. If $\\ell$ is reached, it is not an exposed root and its unique matching predecessor is $r$. In the reached case exactly $r$ belongs to $C$; in the unreached case exactly $\\ell$ does. Also, no exposed vertex belongs to $C$: exposed left vertices are roots and exposed right vertices are not reached. Thus each edge of $M$ contributes exactly one vertex to $C$, and these account for all vertices of $C$. Therefore $|C|=|M|=\\nu(G)$. Weak inequality supplies the reverse bound for every cover, proving equality. ∎

**Worked Example 5.12 (A mixed minimum cover).** Return to the graph of Example 5.5 and the matching $M=\\{a1,c2,d3\\}$. The exposed left vertex is $b$. Its alternating search reaches $b,1,a$ and nothing else: after reaching $a$, its only neighbour is the already reached $1$.

Thus $Z_L=\\{a,b\\}$ and $Z_R=\\{1\\}$. The construction gives $C=\\{c,d,1\\}$. Every edge at $a$ or $b$ meets $1$, and every other edge meets $c$ or $d$, so it is a cover of size three. The matching also has size three. These two witnesses certify optimality directly: no matching can exceed the size of this cover, and no cover can be smaller than this matching. The minimum cover need not lie entirely in one bipartition class.

The auxiliary search is needed to choose the correct endpoint from each matched pair. Arbitrarily choosing one endpoint of every matching edge may miss an edge between the other endpoints. Equality is a theorem guaranteeing a suitable cover, not permission to make arbitrary choices.

Bipartiteness is essential. In a triangle, a largest matching has one edge but a minimum vertex cover has two vertices. The weak inequality still holds, while equality fails. The general-graph obstruction in the next chapter involves odd components rather than a direct extension of this cover equality.

**Proposition 5.13 (Independent sets as cover complements).** For every finite graph, a set is independent if and only if its complement is a vertex cover. Consequently $\\alpha(G)+\\tau(G)=|V|$, where $\\alpha$ is the largest independent-set size. For bipartite graphs this becomes $\\alpha(G)+\\nu(G)=|V|$.

*Proof.* A set $I$ is independent exactly when no edge has both endpoints in $I$. That is equivalent to every edge meeting $V\\setminus I$, the cover condition. Complementation reverses cardinalities by $|V\\setminus I|=|V|-|I|$, so maximizing independent size is equivalent to minimizing cover size. Substitute Koenig's equality in the bipartite case. ∎

## A quantitative form of Hall's obstruction

**Theorem 5.14 (Bipartite deficiency formula).** For a finite bipartite graph, put
$$d=\\max_{X\\subseteq L}\\bigl(|X|-|N(X)|\\bigr).$$
Then
$$\\nu(G)=|L|-d.$$

*Proof.* The empty subset gives value zero, so $d\\ge0$. For any matching and any $X\\subseteq L$, at most $|N(X)|$ vertices of $X$ are matched. Thus at least $|X|-|N(X)|$ left vertices are exposed, giving the upper bound $\\nu(G)\\le|L|-d$.

Add $d$ new right vertices adjacent to every left vertex. For a nonempty $X$, its enlarged neighbourhood has size $|N_G(X)|+d\\ge|X|$ by the definition of $d$. The empty subset also satisfies Hall. Therefore the enlarged graph has a matching saturating $L$. Remove its edges incident with new vertices. At most $d$ edges are removed, leaving a matching of the original graph with at least $|L|-d$ edges. This proves the opposite bound. The argument also covers $d=0$ and empty parts. ∎

**Worked Example 5.15 (Exact size from a shortfall and a witness).** Let $L=\\{a,b,c,d,e\\}$, $R=\\{1,2,3,4\\}$, and take neighbourhoods $\\{1\\},\\{1\\},\\{2\\},\\{2,3\\},\\{3,4\\}$ in that left order. The subset $\\{a,b\\}$ has shortfall one, so at most four left vertices can be matched.

The matching $\\{a1,c2,d3,e4\\}$ has four edges and reaches that bound. Hence $\\nu=4$ and the formula gives maximum shortfall one. There is no need to inspect all thirty-two left subsets to show that no larger shortfall occurs: the four-edge witness already prevents it through the proved upper-bound argument. An exact optimum can be certified by a small obstruction and a matching of the corresponding size.

A large matching is a statement about the declared objective, maximum cardinality. It does not automatically minimize cost, honour priorities or produce a stable allocation under preferences. Those are different mathematical models. Here every allowed edge contributes one unit to the objective, and each vertex has capacity one. The theorems should be interpreted within those explicit assumptions.

## Exercises

### Exercise 5.1
<a id="bipartite-matching-ex-1"></a>

On the path $1,2,3,4,5,6$, show that $M=\\{23,45\\}$ is maximal but not maximum. Exhibit an augmenting path and its flipped matching.

<details>
<summary>Hint 1</summary>

Check the remaining edges against the endpoints already used by $M$.

</details>
<details>
<summary>Hint 2</summary>

Use the entire path between the two exposed endpoints.

</details>
<details>
<summary>Solution</summary>

The remaining edges $12,34,56$ each meet a chosen matching edge, so none can simply be added. Thus $M$ is maximal. The path from $1$ to $6$ has pattern outside, inside, outside, inside, outside and exposed endpoints. Flipping replaces $23,45$ by $12,34,56$, giving a perfect matching of size three. Therefore the original size-two matching was not maximum.

</details>

### Exercise 5.2
<a id="bipartite-matching-ex-2"></a>

Give a bipartite graph with four vertices on each side, no isolated vertices, and no perfect matching. Identify an explicit Hall obstruction.

<details>
<summary>Hint 1</summary>

Make two left vertices share a single possible neighbour.

</details>
<details>
<summary>Hint 2</summary>

Use the remaining left vertices to ensure that the other right vertices are not isolated.

</details>
<details>
<summary>Solution</summary>

Let $L=\\{a,b,c,d\\}$, $R=\\{1,2,3,4\\}$, and use edges $a1,b1,c2,c3,d3,d4$. Every vertex is incident with an edge, but $N(\\{a,b\\})=\\{1\\}$ has size one. Hall forbids a matching saturating $L$, hence forbids a perfect matching. Equal part sizes and positive individual degrees do not resolve the collective shortage.

</details>

### Exercise 5.3
<a id="bipartite-matching-ex-3"></a>

Three rows of a zero-one matrix have their ones respectively in column sets $\\{1,3\\}$, $\\{1,2\\}$ and $\\{2,4\\}$. Choose one entry equal to one in each row with no repeated column, and explain how the choice certifies Hall's inequalities for the row family.

<details>
<summary>Hint 1</summary>

Treat rows as demands and columns as resources.

</details>
<details>
<summary>Hint 2</summary>

A representative assigned to each row remains distinct after restricting to any subset of rows.

</details>
<details>
<summary>Solution</summary>

Choose column $3$ in row one, column $1$ in row two, and column $2$ in row three. All chosen entries are ones and the columns differ. For any subset of rows, its assigned columns are distinct members of the union of its available column sets, so that union has at least as many elements as the subset. This proves every Hall inequality from the concrete matching.

</details>

### Exercise 5.4
<a id="bipartite-matching-ex-4"></a>

Explain why the assumption $r\\ge1$ cannot be removed from the regular-bipartite perfect-matching corollary. Give a counterexample and locate the invalid cancellation in a proof with $r=0$.

<details>
<summary>Hint 1</summary>

A graph with only isolated vertices is zero-regular.

</details>
<details>
<summary>Hint 2</summary>

The equality $0|L|=0|R|$ gives no relation between the two cardinalities.

</details>
<details>
<summary>Solution</summary>

Take two isolated vertices in $L$ and one in $R$. Every degree is zero, yet no left vertex can be matched and no perfect matching exists. The edge count becomes $0=0$ and cannot imply equal part sizes by division by $r$. Likewise $0|X|\\le0|N(X)|$ cannot be canceled to obtain Hall. The positivity hypothesis supplies genuine information.

</details>

### Exercise 5.5
<a id="bipartite-matching-ex-5"></a>

Let $L=\\{a,b,c,d,e\\}$, $R=\\{1,2,3,4\\}$, with edges $a1,b1,c2,d2,e3,e4$. Find a maximum matching, a minimum vertex cover, and a largest independent set. Certify all three sizes.

<details>
<summary>Hint 1</summary>

The pairs $\\{a,b\\}$ and $\\{c,d\\}$ each compete for one resource.

</details>
<details>
<summary>Hint 2</summary>

A cover consisting of $1,2,e$ meets all edges; take its complement for an independent set.

</details>
<details>
<summary>Solution</summary>

The matching $\\{a1,c2,e3\\}$ has size three. The set $\\{1,2,e\\}$ is a cover of size three, proving both are optimal by weak inequality. Its complement $\\{a,b,c,d,3,4\\}$ is independent of size six. Since the graph has nine vertices and every cover has size at least three, the complement identity gives $\\alpha=9-3=6$. These witnesses certify the conclusions without relying on a drawing.

</details>

### Exercise 5.6
<a id="bipartite-matching-ex-6"></a>

Prove directly that $\\nu\\le\\tau$ for finite graphs, then calculate both numbers for a triangle. What hypothesis distinguishes Koenig's equality?

<details>
<summary>Hint 1</summary>

Choose a covering endpoint for each edge of a matching.

</details>
<details>
<summary>Hint 2</summary>

In a triangle two edges always share a vertex, while one chosen cover vertex misses the opposite edge.

</details>
<details>
<summary>Solution</summary>

Distinct matching edges have disjoint endpoints, so a cover must supply at least one different vertex per matching edge. Thus every cover is at least as large as every matching, proving $\\nu\\le\\tau$. A triangle has $\\nu=1$, since any two edges meet, and $\\tau=2$, since one vertex misses an edge and any two vertices cover all three. The triangle is not bipartite; that hypothesis is required for Koenig's equality.

</details>

### Exercise 5.7
<a id="bipartite-matching-ex-7"></a>

For a maximum matching in a bipartite graph, run alternating reachability from all exposed left vertices $U$. Prove that $N(Z_L)=Z_R$ and $|Z_L|-|Z_R|=|U|$. Include the case $U=\\varnothing$.

<details>
<summary>Hint 1</summary>

No exposed right vertex can be reached, and every reached nonroot left vertex arrives along its matching edge.

</details>
<details>
<summary>Hint 2</summary>

The matching pairs $Z_R$ bijectively with $Z_L\\setminus U$.

</details>
<details>
<summary>Solution</summary>

If an exposed right vertex were reached, a shortest alternating path would augment the matching. Thus every vertex of $Z_R$ has its matched partner in $Z_L$. Every reached left vertex outside the root set $U$ has a unique matching predecessor in $Z_R$, so these edges give the claimed bijection and $|Z_L|-|Z_R|=|U|$. Every neighbour of a reached left vertex is reached by a nonmatching step or is its matching predecessor; conversely reached right vertices are neighbours of reached left vertices. Hence the neighbourhood equality holds. If $U$ is empty, neither part is reached, and both identities reduce to zero or empty sets.

</details>

### Exercise 5.8
<a id="bipartite-matching-ex-8"></a>

Take six left vertices $a,b,c,d,e,f$ and five right vertices $1,2,3,4,5$. Let $a,b,c$ each be adjacent to $1,2$, and let $d,e,f$ have only neighbours $3,4,5$ respectively. Find the maximum matching size and the maximum Hall shortfall.

<details>
<summary>Hint 1</summary>

The three left vertices sharing two resources give a shortfall.

</details>
<details>
<summary>Hint 2</summary>

Construct a matching with only one exposed left vertex.

</details>
<details>
<summary>Solution</summary>

The set $\\{a,b,c\\}$ has neighbourhood $\\{1,2\\}$ and shortfall one, giving $\\nu\\le5$. The matching $\\{a1,b2,d3,e4,f5\\}$ has size five, so $\\nu=5$. The deficiency formula then gives $d=|L|-\\nu=6-5=1$. A larger shortfall would contradict the five-edge witness through the upper-bound half of that formula.

</details>

### Exercise 5.9
<a id="bipartite-matching-ex-9"></a>

A student takes one arbitrary endpoint of every edge of a maximum matching and calls the selected vertices a minimum cover. Refute the claim in a bipartite graph and explain what the Koenig construction adds.

<details>
<summary>Hint 1</summary>

Use a four-vertex path and its two-edge perfect matching.

</details>
<details>
<summary>Hint 2</summary>

Select the two outer endpoints and inspect the middle edge.

</details>
<details>
<summary>Solution</summary>

On $a,b,c,d$, the matching $\\{ab,cd\\}$ is maximum. Selecting endpoints $a,d$ misses edge $bc$, so the selection is not even a cover. A valid minimum cover is $\\{b,c\\}$ of size two. Koenig's alternating-reachability construction coordinates the endpoint choices so that every edge is covered; the equality of optimum sizes does not justify arbitrary choices.

</details>

### Exercise 5.10
<a id="bipartite-matching-ex-10"></a>

Prove that a finite $r$-regular bipartite graph with at least one vertex and $r\\ge1$ has its edge set partitioned into $r$ perfect matchings.

<details>
<summary>Hint 1</summary>

First remove one perfect matching supplied by Corollary 5.8.

</details>
<details>
<summary>Hint 2</summary>

Every vertex loses exactly one incident edge, so the remaining graph is $(r-1)$-regular on the same bipartition.

</details>
<details>
<summary>Solution</summary>

Proceed by induction on $r$. For $r=1$, all graph edges already form a perfect matching: each vertex is incident with exactly one. For $r>1$, Corollary 5.8 supplies a perfect matching $M$. Removing it leaves a finite bipartite graph in which every degree is $r-1\\ge1$. By induction its edges partition into $r-1$ perfect matchings. Adding $M$ gives $r$ edge-disjoint perfect matchings covering the original edge set.

</details>

## Sources and provenance

This is original exposition with original examples and exercise development. The unchanged local seeds are Quarto's **Matchings and Network Flows** and the matching sections of Discrete Mathematics **Planarity, Coloring, and Matchings**. Primary sources and further reading include Philip Hall, [“On Representatives of Subsets”](https://academic.oup.com/jlms/article-abstract/s1-10/1/26/2194138), *Journal of the London Mathematical Society* (1935); Dénes Kőnig's original 1931 paper in the published translation [“Graphs and matrices”](https://arxiv.org/abs/2009.03780); and Michel Goemans's [lecture notes on bipartite matching](https://math.mit.edu/~goemans/18433S07/matching-notes.pdf). The Hall, Koenig and deficiency arguments are supplied in full above; no external optimisation theorem is needed.

## Summary

A matching enforces compatibility without reusing vertices, while maximality merely prevents adding an edge to the current choice. An augmenting path repairs earlier choices. Hall's theorem says that every collective demand set must have enough distinct neighbours, and an unsuccessful alternating search exposes a violating set. Koenig's theorem turns a maximum matching into an equally large vertex cover, giving paired optimality certificates. Independent sets are complements of covers, and the maximum Hall shortfall determines exactly how many left vertices must remain exposed. Positive regularity supplies perfect matchings and repeated removal decomposes a regular bipartite graph into them. In [Matchings: Tutte and Berge](matchings-tutte-berge.md), the bipartition is removed, augmenting paths receive a general characterization, and odd components replace neighbourhood shortage as the decisive obstruction.
`;export{e as default};