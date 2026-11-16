var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: planarity-coloring-matchings
title: "Planarity, Coloring, and Matchings"
level: undergraduate
estimated_minutes: 145
license: CC BY-SA 4.0
---

# Planarity, Coloring, and Matchings {#section-1-planarity-coloring-and-matchings}

Three graph questions ask whether local constraints can coexist globally. Can edges be drawn without crossing? Can adjacent vertices receive different labels from a small palette? Can vertices be paired along allowed edges? Each question has tempting pictures and greedy guesses. The mathematics identifies invariants and certificates that survive beyond a particular drawing or choice order.

This chapter assumes the graph and tree results of Chapter 5 and elementary counting. Unless stated otherwise, every graph is finite, undirected, and simple: edges have two distinct endpoints and there are no parallel edges. A plane graph means a particular crossing-free embedding; a planar graph is one admitting such an embedding.

<a id="section-5-1-planarity-belongs-to-the-graph-not-one-drawing"></a>
## 1. Planarity belongs to the graph, not one drawing {#section-7-1-planarity-belongs-to-the-graph-not-one-drawing}

A graph is **planar** if it has a drawing in the plane in which edges meet only at common endpoints. Such a drawing is a **plane graph**. A messy drawing with crossings does not prove nonplanarity; another drawing may remove them.

A connected plane graph divides the plane into **faces**, including the unbounded exterior face. Face boundaries may repeat an edge when the edge is a bridge, so counting boundary walks requires care.

<a id="section-11-2-euler-s-formula"></a>
## 2. Euler’s formula {#section-13-2-euler-s-formula}

**Theorem 12.1 (Euler’s formula).** If a connected plane graph has $n$ vertices, $m$ edges, and $f$ faces, then

$$n-m+f=2$$

**Proof.** If the graph is a tree, then $m=n-1$ and there is one face, so $n-(n-1)+1=2$. Otherwise the graph has a cycle. Remove an edge on a cycle. The graph remains connected, while the two faces bordering that edge merge into one. Thus both $m$ and $f$ decrease by one, leaving $n-m+f$ unchanged. Repeat until a tree remains. The tree value is $2$, so the original value is $2$. ∎

The proof assumes a connected plane embedding. For a plane graph with $c$ components, the adjusted formula is $n-m+f=1+c$.

<a id="section-21-3-edge-bounds-certify-some-nonplanar-graphs"></a>
## 3. Edge bounds certify some nonplanar graphs {#section-23-3-edge-bounds-certify-some-nonplanar-graphs}

Count edge-sides around faces. Every edge contributes two sides, even if both sides border the same face, so the sum of face-boundary lengths is $2m$.

If a simple connected planar graph has $n\\ge 3$, every face boundary has length at least $3$. Hence

$$3f\\le 2m$$

Combine with $f=2-n+m$ from Euler:

$$3(2-n+m)\\le 2m$$

so

$$m\\le 3n-6$$

This is a necessary condition, not sufficient.

<a id="section-39-k-5-is-nonplanar"></a>
### $K_{5}$ is nonplanar {#section-41-k-5-is-nonplanar}

The complete graph $K_{5}$ has $n=5$ and $m=10$, but a simple planar graph of order five has at most $3\\cdot 5-6=9$ edges. Therefore $K_{5}$ is nonplanar.

<a id="section-43-triangle-free-improvement-and-k-3-3"></a>
### Triangle-free improvement and $K_{3,3}$ {#section-45-triangle-free-improvement-and-k-3-3}

If a simple connected planar graph is triangle-free and has $n\\ge 3$, every face boundary has length at least $4$, so $4f\\le 2m$. Euler then gives

$$m\\le 2n-4$$

The complete bipartite graph $K_{3,3}$ is triangle-free, with $n=6$, $m=9$, but $2n-4=8$; therefore it is nonplanar.

Both the size and connectedness hypotheses explain the short derivation. For example, $K_{2}$ is triangle-free and planar but does not satisfy $m\\le 2n-4$. A version for a disconnected graph with $n\\ge 3$ follows by applying the bound to each nontrivial component and checking isolated vertices and one-edge components separately; the connected case is all that the $K_{3,3}$ application needs.

The triangle-free hypothesis is load-bearing. Applying the stronger bound to a graph with triangular faces is invalid.

<a id="section-55-4-degree-consequences-of-planarity"></a>
## 4. Degree consequences of planarity {#section-57-4-degree-consequences-of-planarity}

For a simple planar graph with $n\\ge 3$, $2m\\le 6n-12$, so the average degree $2m/n$ is less than $6$. Therefore some vertex has degree at most $5$.

This is an existence statement. It does not say every vertex has degree at most five: wheel graphs can have a high-degree hub.

Repeatedly removing a vertex of degree at most $5$ gives a **5-degenerate ordering**: in the remaining graph each removed vertex had at most five later neighbors. Reinsert vertices in reverse order and greedily assign a color different from already colored neighbors. With six colors, at most five are forbidden at each step.

**Theorem 12.2.** Every finite simple planar graph is 6-colorable.

The celebrated stronger four-color theorem says four colors suffice, but its proof is far beyond this chapter. Euler’s bound alone gives the transparent six-color argument above; it does not prove four-colorability.

<a id="section-67-5-proper-vertex-coloring"></a>
## 5. Proper vertex coloring {#section-69-5-proper-vertex-coloring}

A **proper coloring** assigns colors to vertices so adjacent vertices receive different colors. The **chromatic number** $\\chi(G)$ is the least number of colors in a proper coloring.

Basic examples:

- an edgeless nonempty graph has chromatic number $1$;
- a nonempty bipartite graph with at least one edge has chromatic number $2$;
- an odd cycle has chromatic number $3$;
- $K_{n}$ has chromatic number $n$.

<a id="section-78-greedy-upper-bound"></a>
### Greedy upper bound {#section-80-greedy-upper-bound}

Choose any vertex order. Color vertices one at a time with the first color unused by already colored neighbors. A vertex of degree at most $\\Delta$ has at most $\\Delta$ colored neighbors, so among $\\Delta+1$ colors at least one remains.

**Theorem 12.3.** If $G$ is a finite nonempty simple graph, then $\\chi(G)\\le \\Delta(G)+1$.

This bound is order-independent, but the number of colors actually used by greedy can depend strongly on the order. A poor greedy result is an upper bound, not proof that fewer colors are impossible.

<a id="section-86-lower-bound-certificates"></a>
### Lower-bound certificates {#section-88-lower-bound-certificates}

A clique of size $r$ forces $\\chi(G)\\ge r$, because its vertices are pairwise adjacent. An odd cycle forces $\\chi(G)\\ge 3$. These certificates need not match the true chromatic number; some graphs have small cliques but large chromatic number.

<a id="section-90-6-matchings-select-disjoint-edges"></a>
## 6. Matchings select disjoint edges {#section-92-6-matchings-select-disjoint-edges}

A **matching** is a set of edges with no shared endpoint. A vertex incident to a matching edge is **matched**; otherwise it is **unmatched**. A matching is **maximal** if no edge can be added. It is **maximum** if it has greatest possible size.

Maximum implies maximal, but not conversely. On the path $a-b-c-d$, the one-edge matching $\\{bc\\}$ is maximal: neither remaining edge can be added. But $\\{ab,cd\\}$ has size two, so $\\{bc\\}$ is not maximum.

<a id="section-96-7-alternating-and-augmenting-paths"></a>
## 7. Alternating and augmenting paths {#section-98-7-alternating-and-augmenting-paths}

Relative to a matching $M$, an **alternating path** alternates between edges outside $M$ and edges inside $M$. An **augmenting path** begins and ends at unmatched vertices, so its first and last edges lie outside $M$.

If $P$ is augmenting, replace matching edges of $P$ by its nonmatching edges. Internal vertices remain matched once, endpoints become matched, and the matching size increases by one.

**Theorem 12.4 (augmenting-path characterization).** A finite matching $M$ is maximum if and only if no augmenting path exists.

**Proof.** An augmenting path would enlarge $M$, so a maximum matching has none. Conversely, suppose a larger matching $M'$ exists. In the subgraph formed by the symmetric difference $M\\mathbin{\\triangle}M'$, every vertex has degree at most two, and components are alternating paths or even alternating cycles. Since $|M'|>|M|$, some component contains more $M'$ edges than $M$ edges. Such a component must be a path whose first and last edges lie in $M'\\setminus M$; it is an augmenting path for $M$. ∎

This theorem provides a checkable local certificate for nonmaximum status. Finding no augmenting path still requires a complete search argument, not visual inspection.

<a id="section-108-8-hall-s-condition-for-bipartite-matching"></a>
## 8. Hall’s condition for bipartite matching {#section-110-8-hall-s-condition-for-bipartite-matching}

Let a bipartite graph have parts $X,Y$. For $S\\subseteq X$, let $N(S)\\subseteq Y$ be all neighbors of vertices in $S$.

**Theorem 12.5 (Hall).** There is a matching that covers every vertex of $X$ if and only if

$|N(S)|\\ge |S|$ for every $S\\subseteq X$.

**Necessity.** If a matching covers $S$, its vertices are paired with $|S|$ distinct members of $N(S)$, so the neighborhood must be at least that large.

**Sufficiency.** Choose a maximum matching $M$, which exists because the graph is finite. Suppose it leaves some $x_{0}\\in X$ unmatched. From $x_{0}$, follow alternating paths that use nonmatching edges from $X$ to $Y$ and matching edges from $Y$ to $X$. Let $S$ be the reached vertices in $X$ and $T$ the reached vertices in $Y$. No vertex of $T$ is unmatched, or the path to it would augment $M$. Each $y\\in T$ is therefore matched to a reached vertex of $S$; conversely, every reached $x\\in S\\setminus \\{x_{0}\\}$ was reached along its unique matching edge from a vertex of $T$. These matching edges pair $T$ bijectively with $S\\setminus \\{x_{0}\\}$, so $|S|=|T|+1$. Moreover $N(S)=T$: every neighbor reached by an edge from $S$ is either the matching predecessor or is reached by a permitted nonmatching step. Thus $|N(S)|=|T|<|S|$, contradicting Hall’s condition. Therefore $M$ covers $X$. ∎

Hall’s theorem is about existence of a matching covering one bipartition side. It does not optimize costs, model queues, or solve general assignment operations; those are different questions with additional structure.

<a id="section-122-9-worked-hall-example"></a>
## 9. Worked Hall example {#section-124-9-worked-hall-example}

Let

$X=\\{a,b,c\\}$ and $Y=\\{1,2,3,4\\}$

with neighborhoods $N(a)=\\{1,2\\}$, $N(b)=\\{2,3\\}$, $N(c)=\\{1,3\\}$. Every singleton has at least one neighbor; every pair has at least three neighbors; all three have neighborhood $\\{1,2,3\\}$ of size three. Hall holds. One covering matching is $\\{a1,b2,c3\\}$.

If instead all three neighborhoods were $\\{1,2\\}$, then $S=X$ would have only two neighbors for three vertices, a direct impossibility certificate.

<a id="section-132-10-independence-and-matching-are-different-families"></a>
## 10. Independence and matching are different families {#section-134-10-independence-and-matching-are-different-families}

A stable or **independent vertex set** contains no adjacent vertices. A matching is an independent set of edges under the rule “sharing an endpoint creates conflict.” This analogy is useful but limited.

Matchings of a graph do not generally form a matroid, and stable vertex sets do not either. On the path $a-b-c$, $\\{b\\}$ and $\\{a,c\\}$ are both stable, but neither $a$ nor $c$ can be added to $\\{b\\}$. This violates the matroid exchange axiom. The advanced book and lab use this smallest witness to explain why ordinary weight-greedy choice can fail.


<a id="section-139-worked-example-1-count-faces-without-relying-on-a-pictu"></a>
### Worked example 1: count faces without relying on a picture {#section-141-worked-example-1-count-faces-without-relying-on-a-pictu}

Consider a square $a-b-c-d-a$ with the diagonal $ac$. Draw the square in the plane and place the diagonal inside it. There are $n=4$ vertices and $m=5$ edges. The two interior triangular regions and the exterior give $f=3$, and $4-5+3=2$. The sum of face-boundary lengths is $3+3+4=10=2m$: the diagonal occurs once on each interior face, and each square edge occurs once on an interior face and once on the exterior.

Now attach a new leaf $e$ to $a$ by an edge drawn in the exterior. The new graph has $n=5$, $m=6$, and still $f=3$. The new edge is a bridge and occurs twice in the boundary walk of the exterior face. Consequently the boundary lengths are $3,3,6$ and still total $2m=12$. Counting distinct edges on each face instead would miss one side of the bridge. The unchanged value $5-6+3=2$ is consistent with Euler’s formula.

<a id="section-145-worked-example-2-a-bound-can-reject-but-cannot-certify-"></a>
### Worked example 2: a bound can reject, but cannot certify planarity {#section-147-worked-example-2-a-bound-can-reject-but-cannot-certify-}

Could a simple connected graph with $8$ vertices and $19$ edges be planar? The connected simple planar bound gives $m\\le3(8)-6=18$, so the answer is no. The graph’s exact adjacency list is unnecessary for this impossibility certificate, provided the stated order, size, and simplicity are correct.

Now take $K_{3,3}$ and add one isolated vertex. It has $n=7$ and $m=9$, so it satisfies $m\\le3n-6=15$ and even $m\\le2n-4=10$. Nevertheless it is nonplanar: deleting the isolated vertex from any alleged plane drawing would yield a drawing of $K_{3,3}$. Passing a necessary bound cannot establish planarity. The connected derivation must not be applied to this disconnected graph without using the separate extension stated above.

<a id="section-151-worked-example-3-an-upper-bound-and-a-lower-bound-for-c"></a>
### Worked example 3: an upper bound and a lower bound for coloring {#section-153-worked-example-3-an-upper-bound-and-a-lower-bound-for-c}

Let $G$ be a triangle on $a,b,c$ with an extra vertex $d$ adjacent only to $c$. The triangle forces three different colors, so $\\chi(G)\\ge3$. Assign colors $1,2,3$ to $a,b,c$ respectively and color $d$ with $1$. Every edge has differently colored endpoints, so $\\chi(G)\\le3$. The lower and upper bounds agree, giving $\\chi(G)=3$.

The maximum degree is $3$, so the general greedy theorem only promises four colors. It remains true but is less sharp. A correct proof of the exact chromatic number combines a lower-bound obstruction with an actual coloring; a coloring alone cannot exclude a smaller palette, and a clique alone does not construct a coloring.

<a id="section-157-worked-example-4-repair-a-maximal-matching"></a>
### Worked example 4: repair a maximal matching {#section-159-worked-example-4-repair-a-maximal-matching}

In the path $a-b-c-d-e-f$, start with $M=\\{bc,de\\}$. The unmatched vertices are $a$ and $f$. The full path alternates outside, inside, outside, inside, outside the matching: $ab,bc,cd,de,ef$. Flip its five edges to obtain $M'=\\{ab,cd,ef\\}$. All six vertices are matched, and the size rises from two to three.

The original matching was maximal: every edge outside it touches either $bc$ or $de$. Yet it was not maximum. Once $M'$ is found, no matching can have more than three edges because each matching edge uses two distinct vertices. Thus the vertex count certifies its optimality, while the augmenting path certifies the failure of the original matching.

<a id="section-163-worked-example-5-checking-hall-on-sets"></a>
### Worked example 5: checking Hall on sets {#section-165-worked-example-5-checking-hall-on-sets}

Let $X=\\{a,b,c\\}$ and $Y=\\{1,2,3,4\\}$, with $N(a)=\\{1\\}$, $N(b)=\\{1,2\\}$, and $N(c)=\\{2,3\\}$. The singleton neighborhood sizes are $1,2,2$. The pair neighborhoods have sizes $2$ for $\\{a,b\\}$ and $3$ for each of $\\{a,c\\},\\{b,c\\}$. The whole of $X$ has neighborhood $\\{1,2,3\\}$ of size three, and the empty set has empty neighborhood. Every subset satisfies Hall’s inequality. The matching $\\{a1,b2,c3\\}$ covers $X$; vertex $4$ can remain unmatched because the theorem does not demand coverage of $Y$.

Compare the modified neighborhoods $N(a)=N(b)=\\{1\\}$ and $N(c)=\\{2,3,4\\}$. Each individual vertex has a neighbor and $|N(X)|=4\\ge3$, yet $S=\\{a,b\\}$ has only one neighbor. No matching can cover both $a$ and $b$. Checking only singletons and the entire side misses this obstruction. Equality $|N(S)|=|S|$ is allowed: it forces any matching covering $S$ to use all vertices of $N(S)$, but is not itself a failure.

<a id="section-169-how-the-certificates-fit-together"></a>
### How the certificates fit together {#section-171-how-the-certificates-fit-together}

Planarity, coloring, and matching use different kinds of evidence. A crossing-free embedding certifies planarity, whereas an edge-bound violation can certify nonplanarity only when its hypotheses hold. A proper coloring certifies an upper bound for $\\chi$; a clique or odd cycle gives a lower bound. For matching, a specific set of disjoint edges gives a lower bound on maximum size, while an augmenting path proves that a particular matching is not maximum. Hall’s deficient set certifies failure to cover $X$.

The directions matter. For example, a graph with an odd cycle might still be planar, and a planar graph can have an odd cycle; these properties answer different questions. Similarly, an unmatched vertex does not by itself show that a larger matching exists. It may have no neighbor, or all possible routes for an alternating search may end without reaching a second unmatched vertex.

For an actual assignment application, first state the two parts and the edges representing allowed pairs. Hall’s theorem treats each allowed edge as equally feasible and asks only whether all of $X$ can be covered. If reviewers have capacities above one, or pairings have costs, those features require a modified model and a separate argument. A successful matching is evidence for the model as specified, not for unstated fairness or scheduling requirements.

<a id="section-177-11-common-errors"></a>
## 11. Common errors {#section-179-11-common-errors}

- Declaring a graph nonplanar because one drawing crosses.
- Applying Euler’s connected formula without accounting for components.
- Assuming $m\\le 3n-6$ proves planarity; it is only necessary.
- Using the triangle-free edge bound without proving triangle-freeness.
- Treating a greedy color count as the chromatic number.
- Confusing maximal with maximum matching.
- Flipping an arbitrary alternating path; only an augmenting path increases size.
- Checking Hall only on single vertices rather than every subset.
- Assuming graph stable sets satisfy matroid exchange because both are called independent.

<a id="section-189-12-exercises-with-worked-solutions"></a>
## 12. Exercises with worked solutions {#section-191-12-exercises-with-worked-solutions}

<a id="section-191-dm-ch06-e001-planar-degree"></a>
### DM-CH06-E001 — planar degree {#section-193-dm-ch06-e001-planar-degree}

Prove that every nonempty finite simple planar graph has a vertex of degree at most $5$.

<details>
<summary>Hint</summary>

Use an average-degree argument for a component with at least three vertices.

</details>

<details>
<summary>Solution</summary>

<a id="section-205-dm-ch06-e001-solution"></a>
#### DM-CH06-E001 — Solution {#section-207-dm-ch06-e001-solution}

It is enough to work componentwise; isolated vertices already qualify. For a component of order at least three, planarity gives $m\\le 3n-6$, so average degree is $2m/n\\le 6-12/n<6$. If every degree were at least six, the average would be at least six, contradiction. Components of order one or two also contain degree at most one.

</details>

<a id="section-211-dm-ch06-e002-greedy-coloring-audit"></a>
### DM-CH06-E002 — greedy coloring audit {#section-213-dm-ch06-e002-greedy-coloring-audit}

Color the path $v_{1}v_{2}v_{3}v_{4}$ in order $v_{1},v_{4},v_{2},v_{3}$ using first available colors. How many colors appear, and what does that prove?

<details>
<summary>Hint</summary>

Track the colors already used at each vertex, then find a two-coloring.

</details>

<details>
<summary>Solution</summary>

<a id="section-225-dm-ch06-e002-solution"></a>
#### DM-CH06-E002 — Solution {#section-227-dm-ch06-e002-solution}

$v_{1}$ gets color 1; nonadjacent $v_{4}$ also gets 1; $v_{2}$, adjacent to $v_{1}$, gets 2; $v_{3}$, adjacent to both $v_{2}$ and $v_{4}$, sees colors 2 and 1 and gets 3. This run uses three colors, proving only $\\chi\\le 3$. The path is bipartite, so in fact $\\chi=2$. The poor order does not provide a lower bound.

</details>

<a id="section-231-dm-ch06-e003-augment-a-matching"></a>
### DM-CH06-E003 — augment a matching {#section-233-dm-ch06-e003-augment-a-matching}

On path $a-b-c-d$, start with $M=\\{bc\\}$. Identify an augmenting path and update the matching.

<details>
<summary>Hint</summary>

Start at an unmatched endpoint and alternate outside and inside the matching.

</details>

<details>
<summary>Solution</summary>

<a id="section-245-dm-ch06-e003-solution"></a>
#### DM-CH06-E003 — Solution {#section-247-dm-ch06-e003-solution}

The full path $a-b-c-d$ alternates: $ab\\notin M$, $bc\\in M$, $cd\\notin M$, and its endpoints are unmatched. Flipping membership gives $\\{ab,cd\\}$, increasing size from one to two. No matching on four vertices can exceed two, so the result is maximum.

</details>

<a id="section-251-dm-ch06-e004-hall-obstruction"></a>
### DM-CH06-E004 — Hall obstruction {#section-253-dm-ch06-e004-hall-obstruction}

Four projects must be assigned distinct reviewers. Three projects accept only reviewers $\\{p,q\\}$, while the fourth accepts $\\{q,r,s\\}$. Prove no complete assignment exists.

<details>
<summary>Hint</summary>

Choose the three projects with the restricted options.

</details>

<details>
<summary>Solution</summary>

<a id="section-265-dm-ch06-e004-solution"></a>
#### DM-CH06-E004 — Solution {#section-267-dm-ch06-e004-solution}

Take $S$ to be the three projects whose neighborhood is $\\{p,q\\}$. Then $|S|=3$ but $|N(S)|=2$, violating Hall’s necessary condition. The fourth project’s options cannot repair the shortage inside this subset.

</details>


<a id="section-272-dm-ch06-e005-euler-with-a-bridge"></a>
### DM-CH06-E005 — Euler with a bridge {#section-274-dm-ch06-e005-euler-with-a-bridge}

A connected plane graph has $7$ vertices and $9$ edges. How many faces does it have? A new leaf and its incident edge are drawn in one face. What changes?

<details>
<summary>Hint</summary>

Use Euler’s formula before and after adding the leaf.

</details>

<details>
<summary>Solution</summary>

Euler gives $f=2-n+m=2-7+9=4$. Adding a leaf increases both $n$ and $m$ by one and does not split a face, so there are still four faces. The new bridge occurs twice in the boundary walk of its face; its two sides still contribute two to the sum of face-boundary lengths. The graph remains connected.

</details>

<a id="section-290-dm-ch06-e006-a-planar-obstruction"></a>
### DM-CH06-E006 — a planar obstruction {#section-292-dm-ch06-e006-a-planar-obstruction}

Can a simple connected triangle-free graph with $10$ vertices and $17$ edges be planar? Give a reason with all relevant hypotheses.

<details>
<summary>Hint</summary>

Compare its size with the triangle-free bound.

</details>

<details>
<summary>Solution</summary>

If planar, the simple connected triangle-free graph with $n=10\\ge3$ would have at most $2n-4=16$ edges. Its $17$ edges violate that necessary condition, so it cannot be planar. The ordinary bound $3n-6=24$ would not detect this obstruction; the stronger conclusion relies on triangle-freeness.

</details>

<a id="section-308-dm-ch06-e007-exact-chromatic-number"></a>
### DM-CH06-E007 — exact chromatic number {#section-310-dm-ch06-e007-exact-chromatic-number}

Find the chromatic number of a five-cycle $v_1v_2v_3v_4v_5v_1$ and justify both bounds.

<details>
<summary>Hint</summary>

Try alternating two colors around the cycle, then give an explicit three-coloring.

</details>

<details>
<summary>Solution</summary>

Two colors would have to alternate on the path $v_1,\\ldots,v_5$, making $v_1$ and $v_5$ the same color despite their edge. Thus at least three colors are needed. Assign colors $1,2,1,2,3$ in order. Each consecutive pair and the closing pair differ, so this is a proper three-coloring. Therefore $\\chi=3$.

</details>

<a id="section-326-dm-ch06-e008-matching-and-optimality"></a>
### DM-CH06-E008 — matching and optimality {#section-328-dm-ch06-e008-matching-and-optimality}

The bipartite graph has $X=\\{a,b,c\\}$, $Y=\\{1,2,3\\}$, and edges $a1,a2,b2,c2,c3$. Give a matching covering $X$ and prove it is maximum.

<details>
<summary>Hint</summary>

Try the most restricted vertex first and check that all selected endpoints differ.

</details>

<details>
<summary>Solution</summary>

The edges $\\{a1,b2,c3\\}$ exist and have no shared endpoints, so they form a matching covering all three vertices of $X$. Any matching has at most three edges because each edge uses a distinct vertex of $X$. The displayed matching achieves that upper bound and is maximum. Since both parts have size three, it covers $Y$ too.

</details>

<a id="section-344-dm-ch06-e009-equality-in-hall-s-condition"></a>
### DM-CH06-E009 — equality in Hall’s condition {#section-346-dm-ch06-e009-equality-in-hall-s-condition}

Let $X=\\{a,b,c\\}$, $Y=\\{1,2,3,4\\}$ with $N(a)=\\{1,2\\}$, $N(b)=\\{1,2\\}$ and $N(c)=\\{2,3,4\\}$. Does equality for $S=\\{a,b\\}$ prevent a matching covering $X$? Explain its effect.

<details>
<summary>Hint</summary>

Find a covering matching, then consider which vertices must be used to match $a$ and $b$.

</details>

<details>
<summary>Solution</summary>

No. The matching $\\{a1,b2,c3\\}$ covers $X$. Here $N(\\{a,b\\})=\\{1,2\\}$ has the same size as $S$, so a matching covering $S$ must use both $1$ and $2$ for $a,b$. In any matching covering all of $X$, vertex $c$ must therefore use $3$ or $4$. Equality restricts a covering matching but does not violate Hall’s inequality.

</details>

<a id="section-362-dm-ch06-e010-a-deficient-subset-despite-global-abundanc"></a>
### DM-CH06-E010 — a deficient subset despite global abundance {#section-364-dm-ch06-e010-a-deficient-subset-despite-global-abundanc}

Let $X=\\{a,b,c\\}$, $Y=\\{1,2,3,4\\}$, with $N(a)=N(b)=\\{1\\}$ and $N(c)=\\{2,3,4\\}$. Every vertex of $X$ has a neighbor and $|Y|>|X|$. Can a matching cover $X$?

<details>
<summary>Hint</summary>

Inspect the neighborhood of $\\{a,b\\}$ rather than all of $Y$.

</details>

<details>
<summary>Solution</summary>

No. The set $S=\\{a,b\\}$ has neighborhood $N(S)=\\{1\\}$, so $|N(S)|=1<2=|S|$. Both vertices would need the same partner, which a matching cannot use twice. Hall’s necessary condition therefore fails. The additional vertices on the other side are irrelevant because neither $a$ nor $b$ is adjacent to them.

</details>

<a id="section-380-source-and-verification-note"></a>
## Sources {#section-382-source-and-verification-note}

For the modern finite-graph formulations of Euler’s planar formula and Hall’s matching criterion, see Reinhard Diestel, *Graph Theory*, 5th ed. (2017), Chapters 4–5; [edition record](https://doi.org/10.1007/978-3-662-53622-3). This chapter-level locator does not establish historical priority.

<a id="section-384-chapter-summary"></a>
## Chapter summary {#section-386-chapter-summary}

Euler’s invariant turns plane drawings into edge bounds and low-degree vertices. Coloring uses upper-bound constructions and lower-bound certificates that must not be confused. Matchings are improved by augmenting paths, and Hall’s neighborhood inequalities exactly characterize when one side of a finite bipartite graph can be covered. Visual intuition guides examples; hypotheses and certificates carry the proof.

`;export{e as default};