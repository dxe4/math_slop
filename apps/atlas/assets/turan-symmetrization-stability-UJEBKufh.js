var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: turan-symmetrization-stability
title: "Turán Symmetrization, Equality, and Stability"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Turán Symmetrization, Equality, and Stability {#section-1-tur-n-symmetrization-equality-and-stability}

An extremal theorem has three layers. An inequality identifies the largest possible value. An equality analysis identifies every object attaining it. A stability statement explains what near-attainment forces. These layers must not be conflated: an edge count can be sharp without its proof classifying equality, and a unique optimizer does not automatically imply a useful quantitative description of near-optimizers.

This chapter develops all three layers for finite simple graphs forbidding a clique. Symmetrization converts adjacency patterns into complete multipartite structure. Convexity balances the part sizes. For triangle-free graphs we then prove an explicit edit-distance stability theorem. For general $r$ we prove an exact quantitative balance theorem inside the complete $r$-partite family and clearly mark what it does—and does not—say about arbitrary $K_{r+1}$-free graphs.

<a id="section-5-prerequisites-and-scope"></a>
## Prerequisites and scope {#section-7-prerequisites-and-scope}

The prerequisite is **Structural Reference Seed: Matroids and Extremal Methods** (\`structural-reference-seed\`). We use finite counting, induction, simple graphs, cliques, independent sets, and elementary inequalities.

Every graph here is finite, undirected, and simple. Write $n=|V(G)|$, $e(G)=|E(G)|$, $N(v)$ for the open neighborhood, and $d(v)=|N(v)|$. A graph is $K_{r+1}$-free when it contains no set of $r+1$ pairwise adjacent vertices. We assume $r\\ge 1$; the interesting cases have $r\\ge 2$.

The **Turán graph** $T_r(n)$ is the complete $r$-partite graph whose part sizes differ by at most one. Its number of edges is $t_r(n)$. If $n=qr+s$, where $0\\le s<r$, its parts have sizes $q+1$ repeated $s$ times and $q$ repeated $r-s$ times, so

$t_r(n)=((n^2)-(s(q+1)^2+(r-s)q^2))/2$.

<a id="section-15-1-why-complete-multipartite-graphs-are-safe"></a>
## 1. Why complete multipartite graphs are safe {#section-17-1-why-complete-multipartite-graphs-are-safe}

A complete $r$-partite graph partitions its vertices into independent sets $V_1,\\ldots ,V_r$ and includes every edge whose endpoints lie in different parts. A clique uses at most one vertex from each part, so it has size at most $r$. Thus every complete $r$-partite graph is $K_{r+1}$-free.

If the part sizes are $n_1,\\ldots ,n_r$, then

$e=\\sum _{i<j}n_i n_j=(n^2-\\sum _i n_i^2)/2$.

For fixed sum $n$, maximizing edges is the same as minimizing the sum of squares.

**Lemma 2.1 (Balancing).** If $n_i\\ge n_j+2$, moving one vertex from part $i$ to part $j$ increases the edge count by $n_i-n_j-1>0$.

**Proof.** The sum of squared part sizes changes by

$(n_i-1)^2+(n_j+1)^2-n_i^2-n_j^2=-2(n_i-n_j-1)$.

The edge count changes by the negative of half this quantity. ∎

Repeated balancing therefore ends exactly when all part sizes differ by at most one. This proves uniqueness of the maximizing size multiset among complete $r$-partite graphs.

<a id="section-35-worked-example-1-balancing-a-tripartite-graph"></a>
### Worked example 1: balancing a tripartite graph {#section-37-worked-example-1-balancing-a-tripartite-graph}

For $n=10$, the complete tripartite graph with sizes $(6,2,2)$ has

$6\\cdot 2+6\\cdot 2+2\\cdot 2=28$

edges. Moving one vertex from the first part to the second gives $(5,3,2)$ and $31$ edges. Moving once more gives $(4,3,3)$ and $33$ edges. Thus $t_3(10)=33$; the two moves gain three and two edges, exactly as the lemma predicts.

<a id="section-43-2-cloning-a-nonneighbor"></a>
## 2. Cloning a nonneighbor {#section-45-2-cloning-a-nonneighbor}

Let $u,v$ be nonadjacent. **Cloning $u$ onto $v$** means deleting every edge incident with $v$, then joining $v$ to exactly the vertices in $N(u)$. The new vertices $u,v$ are nonadjacent twins.

**Lemma 2.2 (Cloning).** If $G$ is $K_{r+1}$-free, cloning $u$ onto its nonneighbor $v$ preserves that property. The edge count changes by $d(u)-d(v)$.

**Proof.** Only cliques containing $v$ could be new. Replacing $v$ by $u$ in such a clique produces a clique of the same size in the original graph, because the other vertices all belong to $N(u)$. The degree calculation is immediate: all unchanged edges cancel, while $v$ loses $d(v)$ incident edges and gains $d(u)$. ∎

Thus cloning a higher-degree vertex onto a lower-degree nonneighbor never reduces the number of edges. The safety proof uses nonadjacency: cloning an adjacent vertex without accounting for their mutual edge is a different operation.

<a id="section-53-worked-example-2-symmetrizing-a-path"></a>
### Worked example 2: symmetrizing a path {#section-55-worked-example-2-symmetrizing-a-path}

In the path $1-2-3-4$, vertices $1$ and $3$ are nonadjacent, with degrees one and two. Clone $3$ onto $1$. The new neighborhood of $1$ is $\\{2,4\\}$, so the resulting graph is the four-cycle with bipartition $\\{1,3\\}$ and $\\{2,4\\}$. Its edge count rises from three to four, and triangle-freeness is preserved.

<a id="section-57-3-the-clone-and-symmetrize-structural-lemma"></a>
## 3. The clone-and-symmetrize structural lemma {#section-59-3-the-clone-and-symmetrize-structural-lemma}

We isolate the standard symmetrization conclusion so that the extremal argument does not hide a termination assumption.

**Lemma 2.3 (Symmetrization).** From every finite $K_{r+1}$-free graph $G$, a finite sequence of nonadjacent cloning operations, applied to whole twin classes when degrees tie, produces a complete multipartite $K_{r+1}$-free graph $H$ with $e(H)\\ge e(G)$.

**Proof.** Call vertices equivalent when they have identical open neighborhoods; distinct equivalent vertices are necessarily nonadjacent. Their equivalence classes are independent, and between two classes either all cross edges occur or none do.

If nonadjacency is not an equivalence relation on vertices, there are pairwise distinct $a,b,c$ with $ab,bc$ absent and $ac$ present. Compare degrees. If one of $a,c$ has degree larger than $b$, cloning that endpoint onto $b$ strictly increases edges. Otherwise $d(b)\\ge d(a),d(c)$. Clone $b$ simultaneously onto the entire twin class containing whichever endpoint has smaller degree, one vertex at a time. This does not decrease edges and merges that class with the class of $b$; because $a$ and $c$ are adjacent, their two classes cannot both merge with $b$. With equal degrees, choose the merge that increases the sum of squares of twin-class sizes.

Use the lexicographic potential

$(e(G), \\sum _Q |Q|^2)$,

where $Q$ ranges over twin classes. A degree-improving clone increases the first coordinate. An equal-degree class clone leaves the first coordinate fixed and strictly increases the second. The first coordinate is at most $\\binom{n}{2}$ and the second at most $n^2$, so this process terminates. At termination nonadjacency is transitive: otherwise the preceding operation would improve the potential. Along with reflexivity (allowing a vertex to be grouped with itself) and symmetry, nonadjacency partitions the vertices into independent classes, with every edge between distinct classes. The terminal graph is complete multipartite. It has at most $r$ nonempty parts, since selecting one vertex from each part gives a clique.

The whole-class convention in a tie ensures that already formed twin classes are not partly dismantled. Equivalently, one may regard the procedure as operating on a weighted quotient graph whose vertex weights are class sizes. The same lexicographic potential applies. ∎

The secondary potential matters. Edge count alone can stay constant under a clone, so "repeat until done" is not a proof of termination.

<a id="section-77-4-tur-n-s-theorem-and-equality"></a>
## 4. Turán's theorem and equality {#section-79-4-tur-n-s-theorem-and-equality}

**Theorem 1 (Turán).** If $G$ is an $n$-vertex finite simple $K_{r+1}$-free graph, then

$e(G)\\le t_r(n)$.

Equality holds if and only if $G$ is isomorphic to $T_r(n)$.

**Proof.** Apply the symmetrization lemma. It gives a complete $k$-partite graph $H$, where $k\\le r$, and $e(H)\\ge e(G)$. Add empty parts if necessary and regard $H$ as complete $r$-partite. The balancing lemma gives $e(H)\\le t_r(n)$, proving the inequality.

The equality classification is proved independently in the inductive proposition below; it cannot be recovered merely by observing that a nondecreasing symmetrization ends at $T_r(n)$, because some cloning steps may preserve edge count. Conversely, $T_r(n)$ is $K_{r+1}$-free and has $t_r(n)$ edges by construction. ∎

<a id="section-89-5-an-induction-that-audits-the-numerical-bound"></a>
## 5. An induction that audits the numerical bound {#section-91-5-an-induction-that-audits-the-numerical-bound}

Symmetrization explains structure. A separate induction gives a useful check on every term in the edge bound.

**Clique-removal induction with equality.** For $n\\ge r$, the numerical bound in Theorem 1 holds by double induction on $(r,n)$. Equality forces $G\\cong T_r(n)$.

**Proof.** The base $r=1$ says that a $K_2$-free graph has no edges. For every $r$, if $n\\le r$, every simple graph has at most $\\binom{n}{2}=t_r(n)$ edges, and equality gives the complete graph, namely $T_r(n)$ with empty parts allowed. We now use the lexicographic induction hypothesis for smaller $r$, and for the same $r$ on fewer vertices.

If $G$ contains no $K_r$, the bound for parameter $r-1$ gives

$e(G)\\le t_{r-1}(n)\\le t_r(n)$.

The second inequality follows by allowing an additional part; it is strict when the additional part can be nonempty and $r\\le n$.

Otherwise choose a clique $S$ of size $r$. Every vertex outside $S$ has at most $r-1$ neighbors in $S$, because adjacency to all of $S$ would create $K_{r+1}$. Therefore the edges with at least one endpoint in $S$ number at most

$\\binom{r}{2}+(r-1)(n-r)$.

The induced graph $G-S$ remains $K_{r+1}$-free, so induction gives

$e(G)\\le t_r(n-r)+\\binom{r}{2}+(r-1)(n-r)$.

It remains to check that the right side is $t_r(n)$. Begin with the balanced $r$ parts of $T_r(n-r)$ and add one vertex to every part. Each new vertex is adjacent to all old vertices outside its own part, contributing $(r-1)(n-r)$ old-new edges in total, and the new vertices contribute $\\binom{r}{2}$ edges among themselves. The resulting part sizes are exactly those of $T_r(n)$, proving the identity.

For equality, first consider $r\\le n<2r$. The complement $F$ of $G$ has $n-r$ edges: this follows by subtracting $t_r(n)=\\binom{n}{2}-(n-r)$ from $\\binom{n}{2}$. Also $F$ has no independent set of size $r+1$, since such a set would be a $K_{r+1}$ in $G$. Choosing one endpoint of each edge gives a vertex cover of $F$ of size at most $n-r$, and hence an independent set of size at least $r$. If two edges of $F$ shared an endpoint, those two edges could be covered by one vertex and all remaining edges by at most one vertex each. The cover would then have size at most $n-r-1$, producing an independent set of size at least $r+1$, a contradiction. Thus $F$ is a matching of $n-r$ edges plus isolated vertices. Its complement is exactly $T_r(n)$: the matched pairs are the size-two parts and the remaining vertices are singleton parts.

Now suppose $n\\ge 2r$ and equality holds. The $K_r$-free branch is strict because $t_{r-1}(n)<t_r(n)$, so $G$ contains an $r$-clique $S=\\{s_1,\\ldots ,s_r\\}$. Equality in every displayed bound forces $G-S\\cong T_r(n-r)$ and forces each outside vertex to have exactly $r-1$ neighbors in $S$. Let $V_1,\\ldots ,V_r$ be the nonempty independent parts of $G-S$; they are all nonempty because $n-r\\ge r$. For $x\\in G-S$, let $f(x)$ be its unique nonneighbor in $S$.

If $x\\in V_i$ and $y\\in V_j$ with $i\\ne j$, then $xy$ is an edge. They cannot have $f(x)=f(y)=s_k$, because then

$\\{x,y\\}\\cup (S\\setminus \\{s_k\\})$

would be a clique of size $r+1$. Hence the nonempty label sets $f(V_1),\\ldots ,f(V_r)$ are pairwise disjoint subsets of the $r$-element set $S$. There are $r$ of them, so each is a distinct singleton. After relabeling, every vertex of $V_i$ misses exactly $s_i$. Therefore $V_i\\cup \\{s_i\\}$ is independent, and every possible edge between two different such sets is present. These $r$ classes have balanced sizes because $V_1,\\ldots ,V_r$ were the balanced parts of $T_r(n-r)$. Thus $G\\cong T_r(n)$. This completes the double induction and the equality proof. ∎

The two proofs serve different purposes. Induction audits the recurrence and equality without relying on edge-preserving transformations; cloning exposes why complete multipartite adjacency is the natural terminal structure.

<a id="section-125-worked-example-3-the-induction-step-for-k-4"></a>
### Worked example 3: the induction step for $K_4$ {#section-127-worked-example-3-the-induction-step-for-k-4}

Let $r=3$ and remove a triangle from a $K_4$-free graph on $n=10$ vertices. At most $3$ internal triangle edges and $2\\cdot 7=14$ edges from the triangle to the remaining vertices are present. The remaining seven vertices contribute at most $t_3(7)=16$. Hence

$e(G)\\le 16+14+3=33=t_3(10)$.

The arithmetic mirrors adding one vertex to each part of $T_3(7)$, changing balanced sizes $(3,2,2)$ into $(4,3,3)$.

<a id="section-133-worked-example-4-the-triangle-free-equality-case"></a>
### Worked example 4: the triangle-free equality case {#section-135-worked-example-4-the-triangle-free-equality-case}

Set $r=2$. Every triangle-free simple graph on $n$ vertices has at most $\\lfloor n^2/4\\rfloor$ edges. Equality forces the complete bipartite graph with part sizes $\\lfloor n/2\\rfloor$ and $\\lceil n/2\\rceil$. For $n=7$, the maximum is $3\\cdot 4=12$, attained uniquely up to isomorphism by $K_{3,4}$.

<a id="section-137-counterexample-forbidding-any-graph-is-not-the-same-the"></a>
### Counterexample: forbidding any graph is not the same theorem {#section-139-counterexample-forbidding-any-graph-is-not-the-same-the}

Turán's proof uses that the forbidden graph is a clique. A complete bipartite graph can contain many four-cycles, so it is not a candidate for a $C_4$-free extremal problem. Cloning preserves clique-freeness because a new clique through the clone transfers to the model vertex. The same transfer need not preserve avoidance of an arbitrary noncomplete graph.

<a id="section-141-6-exact-deficit-inside-the-multipartite-family"></a>
## 6. Exact deficit inside the multipartite family {#section-143-6-exact-deficit-inside-the-multipartite-family}

Equality is qualitative. Within complete multipartite graphs, the deficit has an exact quadratic form.

Let $b_1,\\ldots ,b_r$ be the balanced part sizes: $s$ entries equal $q+1$ and $r-s$ equal $q$. For any integer sizes $n_i\\ge 0$ summing to $n$, align the two lists to minimize $\\sum _i(n_i-b_i)^2$.

**Theorem 2 (multipartite quantitative stability).** For the complete $r$-partite graph $K_{n_1,\\ldots ,n_r}$,

$t_r(n)-e(K_{n_1,\\ldots ,n_r})=(1/2)(\\sum _i n_i^2-\\sum _i b_i^2)$.

Moreover,

$\\sum _i(n_i-n/r)^2=2(t_r(n)-e)+s(r-s)/r$.

Consequently, if $e\\ge t_r(n)-\\delta n^2$, then

$\\max_i |n_i-n/r|\\le \\sqrt{2\\delta n^2+r/4}$.

**Proof.** The first identity follows by subtracting the formula $(n^2-\\sum n_i^2)/2$ for the two edge counts. Since $\\sum _i n_i=n$, expanding about $n/r$ gives

$\\sum _i n_i^2=n^2/r+\\sum _i(n_i-n/r)^2$.

For the balanced vector, a direct calculation gives

$\\sum _i(b_i-n/r)^2=s(r-s)/r$.

Substitution proves the second identity. Since $s(r-s)/r\\le r/4$, the edge-deficit hypothesis bounds the sum of squared deviations by $2\\delta n^2+r/4$; each individual square is at most that sum. ∎

This is a real stability statement, but its hypothesis already assumes complete $r$-partite structure. Symmetrization can produce such a graph without losing edges, so the theorem controls the part sizes of the symmetrized output. It does not by itself bound the edit distance from the original graph to that output: cloning may change many edges while preserving their number.

<a id="section-171-worked-example-5-the-deficit-records-imbalance"></a>
### Worked example 5: the deficit records imbalance {#section-173-worked-example-5-the-deficit-records-imbalance}

For complete tripartite graphs on $12$ vertices, balanced sizes $(4,4,4)$ give $48$ edges. Sizes $(6,3,3)$ give $45$, a deficit of three. The squared deviations from $4$ are $4+1+1=6$, exactly twice the deficit because $12$ is divisible by three.

<a id="section-175-7-a-general-quantitative-stability-theorem-for-triangle"></a>
## 7. A general quantitative stability theorem for triangles {#section-177-7-a-general-quantitative-stability-theorem-for-triangle}

For $r=2$, one can control arbitrary triangle-free graphs directly, with no hidden regularity or removal lemma.

**Theorem 3 (explicit triangle-free stability).** Let $n\\ge1$ and $\\delta\\ge0$, and let $G$ be an $n$-vertex triangle-free simple graph with

$e(G)\\ge n^2/4-\\delta n^2$.

Then there is a bipartition $V(G)=A\\cup B$ such that deleting at most $\\delta n^2$ edges makes $G$ bipartite. Furthermore,

$||A|-n/2|\\le \\sqrt{\\delta }n$

for the partition constructed in the proof.

**Proof.** Choose a vertex $v$ of maximum degree $\\Delta$. Set $A=N(v)$ and $B=V(G)\\setminus A$. Triangle-freeness makes $A$ independent. Let $m_B$ be the number of edges inside $B$, and let $e(A,B)$ count crossing edges.

Every $x\\in B$ has total degree at most $\\Delta$. Summing $d(x)$ over $B$ yields

$e(A,B)+2m_B\\le \\Delta |B|=\\Delta (n-\\Delta )$.

Since $e(G)=e(A,B)+m_B$, it follows that

$e(G)+m_B\\le \\Delta (n-\\Delta )\\le n^2/4$.

Thus $m_B\\le n^2/4-e(G)\\le \\delta n^2$. Delete precisely those $m_B$ internal edges. There are no edges inside $A$, so the remaining graph is bipartite across $(A,B)$.

Also $e(G)\\le \\Delta (n-\\Delta )=n^2/4-(\\Delta -n/2)^2$. Combining this with the lower bound gives $(\\Delta -n/2)^2\\le \\delta n^2$. Since $|A|=\\Delta$, the balance estimate follows. ∎

The theorem bounds deletions, not additions. To turn the graph into the complete bipartite graph on $(A,B)$, one may also need to add missing crossing edges. Their number is

$|A||B|-e(A,B)=\\Delta (n-\\Delta )-e(G)+m_B\\le 2\\delta n^2$.

So at most $3\\delta n^2$ total edge edits transform $G$ into that complete bipartite graph. This constant follows from the proof; it is not claimed optimal.

<a id="section-209-worked-example-6-a-near-extremal-triangle-free-graph"></a>
### Worked example 6: a near-extremal triangle-free graph {#section-211-worked-example-6-a-near-extremal-triangle-free-graph}

Start with $K_{m,m}$ and delete $k$ crossing edges. The result is triangle-free on $n=2m$ vertices and has $n^2/4-k$ edges. The theorem permits at most $k$ internal-edge deletions; the natural bipartition actually has zero internal edges and needs only the $k$ missing crossing edges added. Stability gives a universal guarantee, not an exact reconstruction cost for every example.

<a id="section-213-8-equality-diagnostics-and-near-equality-pitfalls"></a>
## 8. Equality diagnostics and near-equality pitfalls {#section-215-8-equality-diagnostics-and-near-equality-pitfalls}

1. **The graph model is omitted.** Loops, parallel edges, or infinite graphs are outside the theorem as stated.
2. **A complete multipartite candidate is assumed optimal before balancing.** Part sizes $(6,2,2)$ are safe for $K_4$ but not extremal on ten vertices.
3. **Symmetrization is said to terminate because edges rise.** Equal-degree cloning can preserve edge count; a secondary finite potential is required.
4. **The terminal graph is confused with the input.** A structure theorem for the symmetrized output does not automatically give edit distance from the original.
5. **Equality is inferred from the inequality alone.** The strict clause in the structural lemma and strict balancing are what classify equality.
6. **The multipartite deficit theorem is applied to an arbitrary graph.** Its input is $K_{n_1,\\ldots ,n_r}$, not merely a $K_{r+1}$-free graph.
7. **The stability partition is arbitrary.** The proof uses the neighborhood of a maximum-degree vertex.
8. **Deletion distance and edit distance are merged.** Theorem 3 first deletes internal edges; completing the bipartite graph also requires additions.

<a id="section-224-9-solved-exercises"></a>
## 9. Solved exercises {#section-226-9-solved-exercises}

<a id="section-226-exercise-1-compute-a-tur-n-number"></a>
### Exercise 1: compute a Turán number {#section-228-exercise-1-compute-a-tur-n-number}
<a id="turan-symmetrization-stability-ex-1"></a>

Find $t_4(11)$ and the equality graph.

<details>
<summary>Hint 1</summary>

**Hint.** Write the vertex number as a quotient and remainder on division by four.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The balanced parts have sizes three, three, three, two; count all cross-part pairs.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $11=4\\cdot 2+3$. The balanced sizes are $(3,3,3,2)$. Thus

$t_4(11)=(121-(9+9+9+4))/2=45$.

Equality among $K_5$-free graphs occurs exactly for $K_{3,3,3,2}$, up to isomorphism.

</details>

<a id="section-256-exercise-2-verify-one-balancing-move"></a>
### Exercise 2: verify one balancing move {#section-258-exercise-2-verify-one-balancing-move}
<a id="turan-symmetrization-stability-ex-2"></a>

How many edges are gained by changing complete four-partite sizes $(7,4,3,2)$ to $(6,4,3,3)$?

<details>
<summary>Hint 1</summary>

**Hint.** Use the one-vertex balancing gain rather than recounting every edge.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Moving from size $a$ to size $b$ gains $a-b-1$ edges.

</details>

<details>
<summary>Solution</summary>

**Solution.** A vertex moves from a part of size seven to one of size two. The balancing lemma gives gain $7-2-1=4$. Directly, the sum of squares falls from $49+16+9+4=78$ to $36+16+9+9=70$, so edges rise by $(78-70)/2=4$.

</details>

<a id="section-282-exercise-3-cloning-safety"></a>
### Exercise 3: cloning safety {#section-284-exercise-3-cloning-safety}
<a id="turan-symmetrization-stability-ex-3"></a>

Explain why cloning can create a new path on four vertices even though it cannot create a new forbidden clique.

<details>
<summary>Hint 1</summary>

**Hint.** Keep ordinary and induced paths distinct, and examine a proposed path using both twins.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Clone a nonisolated vertex onto an isolated nonneighbour in a three-vertex star plus an isolated vertex; the result is a four-cycle.

</details>

<details>
<summary>Solution</summary>

**Solution.** The transfer argument works for a clique containing the cloned vertex because every other clique vertex is a neighbor of the model vertex and all edges among those other vertices already exist. **Correction to the earlier key.** Its statement, "For a path, the cloned vertex may occupy an internal or endpoint role whose required adjacencies and nonadjacencies do not all transfer to an induced copy," was false for this operation: cloning a vertex onto a nonneighbor preserves induced-$P_4$-freeness. An ordinary $P_4$ subgraph requires three path edges on four distinct vertices and permits extra edges; an induced $P_4$ requires exactly those three edges among its four vertices. Take $V(G)=\\{1,2,3,4\\}$ and $E(G)=\\{12,14\\}$, with vertex $3$ isolated. The original graph has only two edges, so contains no ordinary $P_4$. Cloning $u=1$ onto $v=3$ gives $E(G')=\\{12,14,23,34\\}$, a four-cycle. Now the path $1-2-3-4$ is present, but the closing edge $14$ is extra; all four vertices span four edges, so there is no induced $P_4$. This ordinary path contains both model and clone: replacing $3$ by $1$ repeats a vertex and does not give a four-vertex path in $G$. A clique cannot contain both nonadjacent twins, so its transfer has no such collision. To prove induced-$P_4$-freeness is preserved in general, consider any proposed induced $P_4$ after cloning $u$ onto its nonneighbor $v$. If it avoids $v$, it already existed in $G$. If it contains $v$ but not $u$, replacing $v$ by $u$ transfers every edge and nonedge to an induced $P_4$ in $G$. If it contains both, they have equal open neighborhoods within the four selected vertices, which is impossible in an induced path $a-b-c-d$: those neighborhoods are $\\{b\\}$, $\\{a,c\\}$, $\\{b,d\\}$, and $\\{c\\}$, all distinct. Thus ordinary-$P_4$-freeness can fail while induced-$P_4$-freeness is preserved.

</details>

<a id="section-308-exercise-4-exact-multipartite-deficit"></a>
### Exercise 4: exact multipartite deficit {#section-310-exercise-4-exact-multipartite-deficit}
<a id="turan-symmetrization-stability-ex-4"></a>

On $n=15$ vertices compare complete tripartite sizes $(5,5,5)$ and $(7,4,4)$.

<details>
<summary>Hint 1</summary>

**Hint.** Count edges from $e=(n^2-\\sum a_i^2)/2$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Alternatively compare squared deviations of the second part vector from the balanced vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** The balanced graph has $(225-75)/2=75$ edges. The second has $(225-(49+16+16))/2=72$, so its deficit is three. Its squared deviations from five sum to $4+1+1=6$, twice the deficit.

</details>

<a id="section-334-exercise-5-maximum-degree-partition"></a>
### Exercise 5: maximum-degree partition {#section-336-exercise-5-maximum-degree-partition}
<a id="turan-symmetrization-stability-ex-5"></a>

Let a triangle-free graph have $n=20$ and $e=96$. What does Theorem 3 guarantee?

<details>
<summary>Hint 1</summary>

**Hint.** Express the deficit from $n^2/4$ in the theorem's $\\delta n^2$ form.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Here the deficit is four; substitute it into the deletion, balance, and addition bounds separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $n^2/4=100$, take $\\delta =4/400=0.01$. The constructed partition becomes bipartite after deleting at most four edges. Its first part has size $\\Delta$ satisfying $|\\Delta -10|\\le 2$, so $8\\le \\Delta \\le 12$. At most eight missing crossing edges then need addition, and at most twelve total edits suffice for completion by the stated coarse bound.

</details>

<a id="section-360-exercise-6-equality-in-the-triangle-free-stability-ineq"></a>
### Exercise 6: equality in the triangle-free stability inequalities {#section-362-exercise-6-equality-in-the-triangle-free-stability-ineq}
<a id="turan-symmetrization-stability-ex-6"></a>

If a triangle-free graph has $n=2m$ and $m^2$ edges, show from the proof of Theorem 3 that it is $K_{m,m}$.

<details>
<summary>Hint 1</summary>

**Hint.** At the exact extremal value, the two upper bounds in the stability proof must both be equalities.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The internal-edge count vanishes and the product of part sizes reaches $m^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every inequality in

$e+m_B\\le \\Delta (n-\\Delta )\\le n^2/4$

must be equality. Hence $m_B=0$, $\\Delta =m$, and $e(A,B)=m^2=|A||B|$. Thus all crossing edges occur and neither part has an internal edge. The graph is $K_{m,m}$.

</details>

<a id="section-390-exercise-7-why-maximum-degree-is-essential"></a>
### Exercise 7: why maximum degree is essential {#section-392-exercise-7-why-maximum-degree-is-essential}
<a id="turan-symmetrization-stability-ex-7"></a>

In $K_{2,5}$, choose a vertex in the part of size five and form its neighborhood partition. Compare it with choosing a maximum-degree vertex.

<details>
<summary>Hint 1</summary>

**Hint.** Locate the graph's maximum degree before applying the proof's degree inequality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A vertex on the five-vertex shore has degree two, while a vertex on the two-vertex shore has degree five.

</details>

<details>
<summary>Solution</summary>

**Solution.** A vertex in the size-five part has degree two, giving part sizes $(2,5)$. A maximum-degree vertex lies in the size-two part and has degree five, giving $(5,2)$. Both describe the same natural bipartition here, but only the maximum-degree choice justifies $d(x)\\le \\Delta$ for every $x$ in the proof. In a general triangle-free graph, an arbitrary vertex provides no such bound.

</details>

<a id="section-416-exercise-8-a-sparse-graph-is-not-stable-near-tur-n"></a>
### Exercise 8: a sparse graph is not stable near Turán {#section-418-exercise-8-a-sparse-graph-is-not-stable-near-tur-n}
<a id="turan-symmetrization-stability-ex-8"></a>

Show that a path on $n\\ge 4$ vertices meets the conclusion of Theorem 3 with $\\delta =1/4$, but that the conclusion is then weak.

<details>
<summary>Hint 1</summary>

**Hint.** With $\\delta=1/4$, the required density lower bound reduces to zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A path is already bipartite, but the allowed imbalance becomes as large as half the vertex number.

</details>

<details>
<summary>Solution</summary>

**Solution.** A path is already bipartite, so zero deletions suffice. Its $n-1$ edges satisfy $n-1\\ge n^2/4-(1/4)n^2=0$. The balance estimate permits deviation as large as $n/2$, conveying essentially no balance. Stability becomes informative only when $\\delta$ is small.

</details>

<a id="section-442-exercise-9-number-of-parts"></a>
### Exercise 9: number of parts {#section-444-exercise-9-number-of-parts}
<a id="turan-symmetrization-stability-ex-9"></a>

Why can a complete multipartite $K_{r+1}$-free graph have at most $r$ nonempty parts?

<details>
<summary>Hint 1</summary>

**Hint.** Select one representative vertex from every nonempty part.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All representatives from different parts are adjacent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choosing one vertex from each nonempty part produces a clique, because all cross-part edges exist. With $r+1$ nonempty parts this would give a forbidden $K_{r+1}$.

</details>

<a id="section-468-exercise-10-additions-after-the-stability-partition"></a>
### Exercise 10: additions after the stability partition {#section-470-exercise-10-additions-after-the-stability-partition}
<a id="turan-symmetrization-stability-ex-10"></a>

Under Theorem 3's hypotheses, derive the bound of $2\\delta n^2$ on missing cross edges.

<details>
<summary>Hint 1</summary>

**Hint.** Write missing crossing edges as the number of potential cross pairs minus the actual cross edges.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $e(A,B)=e(G)-m_B$ and bound both the density deficit and $m_B$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The number is $\\Delta (n-\\Delta )-e(A,B)$. Since $e(A,B)=e(G)-m_B$, it equals $\\Delta (n-\\Delta )-e(G)+m_B$. The first two terms are at most $n^2/4-e(G)\\le \\delta n^2$, and the theorem gives $m_B\\le \\delta n^2$. Their sum is at most $2\\delta n^2$.

</details>

<a id="section-494-exercise-11-verify-the-tur-n-recurrence"></a>
### Exercise 11: verify the Turán recurrence {#section-496-exercise-11-verify-the-tur-n-recurrence}
<a id="turan-symmetrization-stability-ex-11"></a>

For $n=qr+s$ with $0\\le s<r$ and $n\\ge r$, verify directly that

$t_r(n)-t_r(n-r)=(r-1)(n-r)+\\binom{r}{2}$.

<details>
<summary>Hint 1</summary>

**Hint.** Compare corresponding balanced parts before and after adding $r$ vertices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** One new vertex enters each part; count old–new edges and new–new edges separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** The balanced parts for $n$ have sizes $q+1$ repeated $s$ times and $q$ repeated $r-s$ times. For $n-r=(q-1)r+s$, all corresponding sizes are one smaller. Add the new vertices one per part. Between a new vertex and old vertices there are all edges except those to its old part; summed across parts this is $(r-1)(n-r)$. Every pair of new vertices lies in different parts, contributing $\\binom{r}{2}$ more edges. This accounts for the whole difference.

</details>

<a id="section-522-exercise-12-equality-constraints-in-clique-removal"></a>
### Exercise 12: equality constraints in clique removal {#section-524-exercise-12-equality-constraints-in-clique-removal}
<a id="turan-symmetrization-stability-ex-12"></a>

Suppose equality holds in the clique-removal induction with a selected $r$-clique $S$. What two numerical equalities must hold before any structural alignment is considered?

<details>
<summary>Hint 1</summary>

**Hint.** Equality in a sum of upper bounds requires equality in each summand.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Inspect the remaining graph's bound and the maximum allowed number of neighbours in the selected clique.

</details>

<details>
<summary>Solution</summary>

**Solution.** First, $G-S$ must itself have exactly $t_r(n-r)$ edges. Second, every vertex outside $S$ must have exactly $r-1$ neighbors in $S$; otherwise the bound $(r-1)(n-r)$ on cross edges would be strict. These conditions are necessary, not on their own sufficient to identify the global part partition.

</details>

<a id="section-548-summary-and-forward-connections"></a>
## Summary and forward connections {#section-550-summary-and-forward-connections}

Cloning a vertex onto a nonneighbor preserves clique-freeness and compares degrees. A secondary twin-class potential turns repeated cloning into a finite symmetrization proof. The terminal complete multipartite graph is optimized by balancing its parts, proving Turán's bound and its equality case. Inside the multipartite family, edge deficit is exactly half a quadratic imbalance. For arbitrary triangle-free graphs, the maximum-degree neighborhood partition gives a direct quantitative theorem: density near the triangle-free extremum implies a nearly balanced bipartition with few internal edges.

Later chapters use the same proof architecture in Ramsey bounds, probabilistic alteration, and set-system compression. The transferable lesson is not that every forbidden-subgraph problem becomes multipartite. It is that a valid transformation must preserve the forbidden condition, a finite potential must prove termination, equality must audit every strict step, and any stability constant must follow from an explicit inequality under explicitly stated hypotheses.

<a id="section-554-source-and-verification-note"></a>
## Sources {#section-556-source-and-verification-note}

For the Turán extremal bound and equality framework, see J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, 2nd ed. (2001), Chapter 4; [edition record](https://doi.org/10.1017/CBO9780511987045). Exact theorem locators are not specified here for the symmetrization architecture or stability statement; those remain unresolved and are not priority claims.


<a id="section-559-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-561-sources-for-the-expanded-teaching}

The original van Lint–Wilson reference beside the symmetrization discussion remains the chapter's source route. The added staged hints and explanations are original exposition; they do not supply a new historical attribution or theorem locator.

<a id="section-563-summary"></a>
## Summary {#section-565-summary}

Clique avoidance admits complete multipartite extremizers, and symmetrization plus balancing proves the sharp Turán bound and its equality description. Deficit identities quantify imbalance within that family. A separate argument is required for near-extremal arbitrary graphs; the triangle-free stability estimate provides it under explicit hypotheses. Ramsey forcing next asks what patterns sufficiently large complete colourings must contain.

`;export{e as default};