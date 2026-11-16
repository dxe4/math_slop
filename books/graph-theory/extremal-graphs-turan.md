
# Extremal Graphs: Turan

How many edges can a graph have while containing no triangle? A balanced complete bipartite graph gives a large example, but finding one example answers only half the question. To establish a maximum, we must also prove that every graph with more edges contains the forbidden pattern.

Turán's theorem solves the corresponding problem for every forbidden clique. Its extremal construction divides the vertices as evenly as possible into a fixed number of independent parts and joins every pair from different parts. The proof will show why complete multipartite structure emerges, rather than assuming from the outset that the best graph is multipartite.

All graphs in this chapter are finite and simple. Required preparation is graph complements, cliques, degrees, finite maximisation and elementary counting. The colouring distinction from [Graph Colouring: Brooks and Vizing](graph-colouring-brooks-vizing.md) is useful: excluding a large clique is weaker than admitting a colouring with few colours. We shall use sums of squares, but no calculus or asymptotic theorem.

Our principal tools are cloning nonadjacent vertices and balancing part sizes. Cloning preserves the forbidden-clique condition while comparing edge counts. A two-clone argument then forces an equivalence relation in every extremal graph. This also allows us to prove the equality case, so the chapter establishes the exact maximum and all extremal graphs up to isomorphism.

## Asking the extremal question precisely

**Definition 12.1 (Extremal number and clique avoidance).** For a graph $F$ and a nonnegative integer $n$, let
$$
\operatorname{ex}(n,F)
=\max\{e(G): |V(G)|=n,\ G\text{ contains no subgraph isomorphic to }F\}.
$$
Here $e(G)$ denotes the number of edges. Avoidance concerns subgraphs, not induced subgraphs.

For a clique $K_{r+1}$, this means that no $r+1$ distinct vertices are pairwise adjacent. When $n<r+1$, the condition holds automatically. For a general forbidden graph, replacing subgraph avoidance by induced-subgraph avoidance can change the problem substantially. A complete graph contains many noncomplete graphs as subgraphs while containing none of them as induced subgraphs.

The maximum exists because there are only $2^{\binom n2}$ simple graphs on a fixed labelled $n$-vertex set. A construction with $L$ edges proves $\operatorname{ex}(n,F)\ge L$. An argument that every $F$-free graph has at most $L$ edges proves the reverse inequality. Both are needed for equality. Identifying all graphs attaining $L$ is a further statement requiring its own justification.

**Definition 12.2 (Complete multipartite and Turán graphs).** A complete $r$-partite graph has a partition into $r$ independent parts, with every possible edge between different parts. Empty parts may be included. The Turán graph $T_r(n)$ is the complete $r$-partite graph whose $n$ vertices are distributed among the $r$ parts with sizes differing by at most one. Write $t_r(n)=e(T_r(n))$.

We use the parameter $r$ for the number of parts, so the forbidden clique is $K_{r+1}$. Another indexing convention could use $r-1$ parts when forbidding $K_r$; changing conventions without changing both indices produces incorrect claims.

**Example 12.3 (A construction and the threshold it suggests).** For $T_3(11)$, distribute the vertices into parts of sizes $4,4,3$. The edge count is
$$
4\cdot4+4\cdot3+4\cdot3=40.
$$
A clique can use at most one vertex from each independent part, so this graph has no $K_4$. It proves $\operatorname{ex}(11,K_4)\ge40$.

It does contain triangles: choosing one vertex from each part gives three mutually adjacent vertices. Thus the construction avoids a clique of order four, not every clique. Turán's theorem will show that forty is the maximum and that every graph on eleven vertices with forty-one edges contains a $K_4$. That last universal statement is not yet a consequence of drawing the construction.

## Counting and balancing parts

**Lemma 12.4 (Edges and balancing).** A complete $r$-partite graph with part sizes $n_1,\ldots,n_r$ summing to $n$ has
$$
e=\sum_{i<j}n_in_j
=\frac12\left(n^2-\sum_{i=1}^r n_i^2\right).
$$
Among all nonnegative integer part sizes with total $n$, this is maximal exactly when their sizes differ by at most one.

*Proof.* Each cross-part pair is one edge and each within-part pair is a nonedge. Expanding $(\sum_i n_i)^2$ proves the second formula. Suppose two parts have sizes $a\ge b+2$. Moving one vertex from the larger part to the smaller changes their squared-size sum by
$$
(a-1)^2+(b+1)^2-a^2-b^2=-2(a-b-1)<0.
$$
It therefore increases the edge count by $a-b-1>0$. Such an imbalance cannot occur in a maximum.

Conversely, repeatedly make these moves whenever possible. The edge count strictly increases at each move and is bounded by $\binom n2$, so the process terminates. At termination all part sizes differ by at most one. The total $n$ determines the multiset of these sizes uniquely: if $n=rq+s$ with $0\le s<r$, there are $s$ parts of size $q+1$ and $r-s$ parts of size $q$. All such terminal partitions have the same edge count. Thus they are precisely the maximisers. ∎

**Example 12.5 (Balancing with the improvement visible).** On eleven vertices, a complete tripartite graph with parts $6,3,2$ has $18+12+6=36$ edges. Move one vertex from the size-six part to the size-two part. The sizes become $5,3,3$, with $15+15+9=39$ edges; the gain is $6-2-1=3$.

Now move one vertex from a size-five part to a size-three part. The sizes become $4,4,3$, with forty edges; the gain is $5-3-1=1$. Both graphs remain $K_4$-free throughout because they remain tripartite. This verifies the balancing principle within the proposed construction class. The proof still needs to explain why an arbitrary extremal $K_4$-free graph belongs to that class.

For exact calculations, the formula from the lemma gives
$$
t_r(n)=\frac12\left(n^2-s(q+1)^2-(r-s)q^2\right),
\qquad n=rq+s,\quad0\le s<r.
$$
This includes $n<r$, where $q=0$ and the nonempty parts have one vertex each. In that case $T_r(n)=K_n$, as expected when the forbidden clique is too large to occur.

## Mantel's theorem as a first upper-bound proof

**Theorem 12.6 (Mantel).** Every triangle-free graph on $n$ vertices has at most $\lfloor n^2/4\rfloor$ edges, and this bound is attained.

*Proof.* For $n=0$ the statement is immediate; suppose $n\ge1$, and let $m=e(G)$. For every edge $uv$, the neighbourhoods $N(u)$ and $N(v)$ are disjoint: a common neighbour would complete a triangle. Therefore $d(u)+d(v)\le n$. Summing over edges gives
$$
\sum_{v\in V(G)}d(v)^2
=\sum_{uv\in E(G)}(d(u)+d(v))
\le nm.
$$
The first equality holds because each vertex contributes its degree once for each incident edge.

The nonnegative sum $\sum_v(d(v)-2m/n)^2$ expands to
$$
\sum_vd(v)^2\ge\frac{(2m)^2}{n}.
$$
If $m>0$, combine the two inequalities and divide by $m$ to obtain $m\le n^2/4$. If $m=0$, this conclusion is already true. Since $m$ is an integer, $m\le\lfloor n^2/4\rfloor$.

The complete bipartite graph with parts $\lfloor n/2\rfloor,\lceil n/2\rceil$ has no triangle and has $\lfloor n/2\rfloor\lceil n/2\rceil=\lfloor n^2/4\rfloor$ edges. This proves attainability. ∎

The degree-sum proof supplies an independent universal upper bound in the first nontrivial case. It does not automatically generalise by replacing “triangle” with a larger clique: an edge of a $K_4$-free graph may have common neighbours. The general argument needs another mechanism. We shall also establish the equality structure through that argument, instead of inferring it from an unexamined equality chain.

## Cloning while preserving clique avoidance

**Lemma 12.7 (Cloning a nonadjacent vertex).** Let $x,y$ be distinct nonadjacent vertices in a $K_{r+1}$-free graph $G$. Form $G'$ by deleting every edge incident with $y$, then joining $y$ to exactly the vertices of $N_G(x)$. Leave all other edges unchanged. Then $G'$ is $K_{r+1}$-free and
$$
e(G')=e(G)+d_G(x)-d_G(y).
$$

*Proof.* The new neighbourhood of $y$ has size $d_G(x)$, while its old degree was $d_G(y)$, proving the edge-count formula. There is no loop because $y\notin N_G(x)$, and $x,y$ remain nonadjacent.

If a new forbidden clique did not contain $y$, it would already have existed in $G$. If it contained $y$, it could not contain $x$, since those two are nonadjacent. Replace $y$ by $x$. Every other clique vertex is in $N_G(x)$, and all edges among those other vertices are unchanged. This would produce a $K_{r+1}$ in $G$, again a contradiction. ∎

Calling $y$ a clone of $x$ refers to their equal open neighbourhoods after the operation. It does not make them adjacent twins. Joining the clone to $x$ as well would invalidate the proof by potentially increasing clique size.

**Example 12.8 (A concrete clone).** Take vertices $x,y,a,b,c$, with edges $xa,xb,xc,ya,yb$ and no others. The graph is bipartite with parts $\{x,y\}$ and $\{a,b,c\}$, so it is triangle-free. The nonadjacent vertices $x,y$ have degrees three and two.

Cloning $x$ at $y$ adds the one missing edge $yc$, increasing the edge count from five to six. The result is $K_{2,3}$ and is still triangle-free. Mantel's bound on five vertices is six, so this particular clone reaches an extremal graph. In the general argument, cloning is useful because the forbidden-clique condition survives without our needing to recognise every intermediate graph by inspection.

## Why every extremal graph is multipartite

**Lemma 12.9 (Structure of an extremal graph).** Let $G$ have the maximum number of edges among $n$-vertex $K_{r+1}$-free graphs. Then nonadjacent vertices have equal degrees. Moreover the relation
$$
x\sim y\quad\text{if }x=y\text{ or }xy\notin E(G)
$$
is an equivalence relation, and $G$ is complete multipartite with at most $r$ nonempty parts.

*Proof.* If two nonadjacent vertices had unequal degrees, cloning the higher-degree vertex at the lower-degree vertex would preserve clique avoidance and strictly increase the number of edges by Lemma 12.7. Extremality forbids this, proving the degree assertion.

The relation is reflexive and symmetric by definition. For transitivity, equality cases are immediate, so consider three distinct vertices $x,y,z$ with $xy,xz$ nonedges. Suppose for a contradiction that $yz$ is an edge. The degree assertion gives
$$
d(x)=d(y)=d(z)=d.
$$
Delete $y$ and $z$, then insert two new vertices at their labels, each with neighbourhood exactly $N_G(x)$ and with no edge between them or to $x$. Since $x$ was adjacent to neither deleted vertex, its $d$ neighbours all survive.

The deletion removes $d(y)+d(z)-1=2d-1$ edges: the edge $yz$ was counted in both degrees and must be counted only once. The two inserted clones add $2d$ edges, so the graph gains one edge.

It remains $K_{r+1}$-free. The three vertices $x,y,z$ are now pairwise nonadjacent, so a clique uses at most one of them. If it uses a new clone, replacing that clone by $x$ would give the same-sized clique in the original graph. A clique avoiding the clones also existed before. Thus the gain contradicts extremality. We conclude that $yz$ must be a nonedge, establishing transitivity.

Each equivalence class is independent. Vertices in different classes must be adjacent, since a nonedge would place them in the same class. Hence the graph is complete multipartite. Choosing one vertex from every nonempty class gives a clique, so there can be at most $r$ such classes. ∎

The two-clone step is worth distinguishing from a single equal-degree clone. One clone would preserve edge count and need not force progress. Replacing the two adjacent vertices simultaneously saves their internal edge in the deletion count, producing the strict gain. This is the point that turns a structural guess into a contradiction.

## Turán's theorem, including equality

**Theorem 12.10 (Turán).** For every integer $r\ge1$ and $n\ge0$,
$$
\operatorname{ex}(n,K_{r+1})=t_r(n).
$$
Equality holds precisely for graphs isomorphic to the balanced complete $r$-partite graph $T_r(n)$.

*Proof.* The construction $T_r(n)$ is $K_{r+1}$-free: a clique can use at most one vertex from each of its $r$ independent parts. It therefore gives a lower bound $t_r(n)$.

Choose any extremal $K_{r+1}$-free graph $G$ on $n$ vertices. If $n=0$ there is only the empty graph, so suppose $n>0$. Lemma 12.9 makes $G$ complete multipartite with at most $r$ nonempty parts. Pad the part list with empty parts to obtain exactly $r$ parts. If two sizes differed by at least two, Lemma 12.4 would increase the edge count while retaining a complete $r$-partite, hence $K_{r+1}$-free, graph. This would contradict extremality.

Thus all part sizes differ by at most one. They are exactly the sizes defining $T_r(n)$, so $G$ is isomorphic to that graph and has $t_r(n)$ edges. This proves the upper bound and the asserted maximum.

For equality classification, any $K_{r+1}$-free graph with $t_r(n)$ edges is itself extremal and hence satisfies the same argument. Conversely, every graph isomorphic to $T_r(n)$ attains the bound. This proves both directions, including the cases of empty parts or $r=1$. ∎

This proof starts with an arbitrary extremal graph, rather than selecting a specially convenient one among several maximisers. That is why the structural argument identifies all equality cases. A procedure that merely transforms one maximiser into a Turán graph would establish the maximum but would require additional reasoning to establish uniqueness.

**Corollary 12.11 (A convenient quadratic bound).** Every $K_{r+1}$-free graph on $n$ vertices satisfies
$$
e(G)\le \frac12\left(1-\frac1r\right)n^2.
$$
Equality holds exactly when $r$ divides $n$ and $G\cong T_r(n)$.

*Proof.* For the balanced part sizes, or indeed any $r$ part sizes summing to $n$,
$$
0\le\sum_{i=1}^r(n_i-n/r)^2
=\sum_i n_i^2-\frac{n^2}{r}.
$$
Use the multipartite edge formula and Turán's theorem. Equality in the sum-of-squares inequality requires every size to equal $n/r$, which is integral exactly when $r$ divides $n$. Equality in Turán's bound then supplies the stated graph. ∎

The exact correction for indivisibility is
$$
t_r(n)=\frac12\left(1-\frac1r\right)n^2
-\frac{s(r-s)}{2r},\qquad s\equiv n\pmod r,\quad0\le s<r.
$$
To check it, expand the squared-size sum with $n=rq+s$; its excess over $n^2/r$ is $s(r-s)/r$. The correction is not always recovered by simply taking the floor of the quadratic bound. For example, $T_8(12)$ has parts $2,2,2,2,1,1,1,1$ and sixty-two edges, while the quadratic expression is sixty-three.

**Example 12.12 (A clique-forcing threshold).** A graph on thirteen vertices with sixty-four edges must contain $K_5$. Indeed, avoiding $K_5$ corresponds to $r=4$. The balanced part sizes are $4,3,3,3$, whose squared-size sum is $16+9+9+9=43$. Therefore
$$
t_4(13)=\frac{169-43}{2}=63.
$$
Turán's theorem excludes a $K_5$-free graph with sixty-four edges.

At sixty-three edges, a $K_5$ need not exist: the complete multipartite construction provides a counterexample. The threshold statement uses a strict excess over the maximum, and its sharpness uses the construction. Confusing $K_4$-free with four-partite would shift the forbidden clique by one and give the wrong threshold.

## Consequences and limits

**Proposition 12.13 (The complementary independent-set form).** If a graph $G$ on $n$ vertices has no independent set of size $r+1$, then
$$
e(G)\ge\binom n2-t_r(n).
$$
Equality holds exactly when $G$ is a disjoint union of $r$ cliques with sizes differing by at most one, permitting empty cliques.

*Proof.* An independent set in $G$ is a clique in its complement $\overline G$. The hypothesis says that $\overline G$ is $K_{r+1}$-free, so $e(\overline G)\le t_r(n)$. Since $e(G)+e(\overline G)=\binom n2$, the bound follows. Equality and its classification follow by complementing the equality case of Turán's theorem. ∎

**Example 12.14 (Forcing an independent four-set).** On ten vertices, $T_3(10)$ has parts $4,3,3$ and $12+12+9=33$ edges. Consequently a graph with no independent four-set has at least $45-33=12$ edges. Every graph with at most eleven edges therefore has an independent set of size four.

The bound is sharp: a disjoint union of cliques of orders four, three and three has $6+3+3=12$ edges. An independent set can choose at most one vertex from each component, so its independence number is three. This is a lower-edge extremal question obtained from the upper-edge question by complementation.

Clique avoidance does not imply multipartiteness for arbitrary graphs. The five-cycle is triangle-free but not bipartite. Turán's theorem says that an edge-*maximising* triangle-free graph is balanced complete bipartite, not that every triangle-free graph is. More generally, a graph with no $K_{r+1}$ need not be $r$-colourable.

An exact extremal theorem should also be separated from stability or supersaturation. Stability would quantify how graphs with nearly $t_r(n)$ edges resemble a Turán graph. Supersaturation would count how many forbidden cliques must occur above the threshold. Neither conclusion follows merely by restating the maximum and equality case. The present proof establishes the threshold and extremisers; those stronger questions require further arguments.

## Exercises

### Exercise 12.1
<a id="extremal-graphs-turan-ex-1"></a>

Count the edges of the complete tripartite graph with part sizes $4,3,2$. Improve it by balancing and identify the maximum among tripartite graphs on nine vertices.

<details><summary>Hint 1</summary>

Sum the products of pairs of part sizes.

</details>
<details><summary>Hint 2</summary>

Move one vertex from the size-four part to the size-two part.

</details>
<details><summary>Solution</summary>

The initial graph has $4\cdot3+4\cdot2+3\cdot2=26$ edges. Moving one vertex gives parts $3,3,3$, with $3\cdot3+3\cdot3+3\cdot3=27$ edges. The gain is $4-2-1=1$. The balancing lemma proves that twenty-seven is maximal among complete tripartite graphs, and adding missing cross-edges shows the same maximum among all tripartite graphs. Turán's theorem further proves it among all $K_4$-free graphs.

</details>

### Exercise 12.2
<a id="extremal-graphs-turan-ex-2"></a>

Find $\operatorname{ex}(14,K_5)$ exactly and give an extremal graph. What follows for a fourteen-vertex graph with seventy-four edges?

<details><summary>Hint 1</summary>

A forbidden five-clique corresponds to four parts.

</details>
<details><summary>Hint 2</summary>

Balance fourteen as a sum of four nonnegative integers.

</details>
<details><summary>Solution</summary>

The balanced part sizes are $4,4,3,3$. Their squared-size sum is $16+16+9+9=50$, giving $t_4(14)=(196-50)/2=73$. Thus $\operatorname{ex}(14,K_5)=73$, attained by $K_{4,4,3,3}$. A graph with seventy-four edges exceeds this maximum and must contain a five-clique. The extremal construction itself has none, so replacing “seventy-four” by “seventy-three” would make the universal conclusion false.

</details>

### Exercise 12.3
<a id="extremal-graphs-turan-ex-3"></a>

Determine the maximum number of edges in a triangle-free graph on seven vertices and classify all graphs attaining it, up to isomorphism.

<details><summary>Hint 1</summary>

Use the two-part case of the exact theorem.

</details>
<details><summary>Hint 2</summary>

The equality classification is part of Turán's proof, not just the numerical Mantel bound.

</details>
<details><summary>Solution</summary>

The balanced bipartition has sizes three and four, giving twelve edges. Turán's theorem says every triangle-free graph has at most twelve and every equality graph is isomorphic to $K_{3,4}$. In that graph the four vertices in the larger part have degree three and the three vertices in the smaller part have degree four. The classification needs the structural argument; the number twelve alone would not identify all maximisers.

</details>

### Exercise 12.4
<a id="extremal-graphs-turan-ex-4"></a>

Prove that cloning a vertex at a nonadjacent vertex cannot increase the clique number. Explain why the clones must remain nonadjacent.

<details><summary>Hint 1</summary>

Separate a clique that avoids the new clone from one that contains it.

</details>
<details><summary>Hint 2</summary>

Replace the clone by its model vertex in the latter case.

</details>
<details><summary>Solution</summary>

A clique avoiding the clone uses unchanged edges and existed before. A clique containing the clone cannot contain its model vertex because they are nonadjacent. Replace the clone by that vertex; all required adjacencies hold by equality of the prescribed neighbourhoods, producing a clique of the same size in the original graph. Thus no larger clique can appear. If the clone were joined to its model, both could lie in one clique, and this replacement would collapse two vertices to one; the argument would fail.

</details>

### Exercise 12.5
<a id="extremal-graphs-turan-ex-5"></a>

In an extremal $K_{r+1}$-free graph, suppose $x$ is nonadjacent to $y,z$ but $yz$ is an edge. Explain the equal-degree argument and compute exactly the edge gain from replacing $y,z$ by two nonadjacent clones of $x$.

<details><summary>Hint 1</summary>

A nonadjacent unequal-degree pair could already be improved by one clone.

</details>
<details><summary>Hint 2</summary>

The edge $yz$ is included in both degrees but is only one deleted edge.

</details>
<details><summary>Solution</summary>

Extremality and the one-clone lemma force $d(x)=d(y)=d(z)=d$. Deleting $y,z$ removes $2d-1$ edges, since their common edge was counted twice in the degree sum. The neighbourhood of $x$ loses no vertex because $x$ was adjacent to neither one. Two nonadjacent clones therefore add $2d$ edges, for a net gain of one. A clique uses at most one clone and can be transferred back to $x$, so forbidden-clique avoidance is preserved. The gain contradicts extremality and proves the required transitivity of nonadjacency.

</details>

### Exercise 12.6
<a id="extremal-graphs-turan-ex-6"></a>

For $n=rq+s$, $0\le s<r$, derive the exact correction
$$
t_r(n)=\left(1-\frac1r\right)\frac{n^2}{2}
-\frac{s(r-s)}{2r}.
$$
Check it for $n=12,r=8$.

<details><summary>Hint 1</summary>

The squared-size sum is $s(q+1)^2+(r-s)q^2$.

</details>
<details><summary>Hint 2</summary>

Compare that sum with $n^2/r$ before dividing by two.

</details>
<details><summary>Solution</summary>

The squared-size sum expands to $rq^2+2sq+s$. Meanwhile $n^2/r=rq^2+2qs+s^2/r$. Their difference is $s-s^2/r=s(r-s)/r$. Substituting in the edge formula gives the claimed correction. For $n=12,r=8$, $q=1,s=4$. The quadratic bound is sixty-three, and the correction is $4\cdot4/(2\cdot8)=1$, giving sixty-two. This example shows that even flooring the quadratic upper bound need not give the exact extremal number.

</details>

### Exercise 12.7
<a id="extremal-graphs-turan-ex-7"></a>

Show that every $r$-colourable graph is $K_{r+1}$-free, and give a counterexample to the converse when $r=2$.

<details><summary>Hint 1</summary>

All vertices of a clique require different colours.

</details>
<details><summary>Hint 2</summary>

Use an odd cycle without triangles.

</details>
<details><summary>Solution</summary>

If an $r$-colourable graph contained $K_{r+1}$, that clique's vertices would require $r+1$ distinct colours, a contradiction. For the converse, $C_5$ is triangle-free, since its only cycle has length five and it has no chords. It is not two-colourable because alternating two colours around an odd cycle fails at the closing edge. Therefore being $K_3$-free is weaker than being bipartite. The multipartite conclusion in Turán's theorem uses extremality, not clique avoidance alone.

</details>

### Exercise 12.8
<a id="extremal-graphs-turan-ex-8"></a>

Prove the bound $e(G)\le(1-1/r)n^2/2$ from the exact theorem using a sum of squares. State all equality conditions.

<details><summary>Hint 1</summary>

For part sizes, expand $\sum_i(n_i-n/r)^2$.

</details>
<details><summary>Hint 2</summary>

Equality is needed both in the extremal theorem and in the part-size inequality.

</details>
<details><summary>Solution</summary>

The nonnegative sum gives $\sum_i n_i^2\ge n^2/r$. Hence $t_r(n)=\frac12(n^2-\sum_i n_i^2)\le(1-1/r)n^2/2$, and every $K_{r+1}$-free graph has at most $t_r(n)$ edges. Equality in the sum of squares means every part has exactly $n/r$ vertices, so $r$ divides $n$. Equality in the extremal bound means $G$ is the Turán graph. Conversely, that balanced graph when $r$ divides $n$ attains the quadratic value. The empty graph at $n=0$ is included.

</details>

### Exercise 12.9
<a id="extremal-graphs-turan-ex-9"></a>

Prove that every graph on ten vertices with at most eleven edges has an independent set of four vertices. Give a twelve-edge graph for which the conclusion fails.

<details><summary>Hint 1</summary>

Apply the $K_4$-free bound to the complement.

</details>
<details><summary>Hint 2</summary>

Complement the balanced complete tripartite graph with part sizes $4,3,3$.

</details>
<details><summary>Solution</summary>

The complement has at least $\binom{10}2-11=34$ edges. Since $t_3(10)=4\cdot3+4\cdot3+3\cdot3=33$, it contains a $K_4$. Those four vertices are independent in the original graph. For sharpness, take a disjoint union of $K_4,K_3,K_3$, with $6+3+3=12$ edges. An independent set contains at most one vertex from each clique, so it has size at most three. Thus eleven cannot be raised to twelve in the universal statement.

</details>

### Exercise 12.10
<a id="extremal-graphs-turan-ex-10"></a>

A graph on twelve vertices has fifty edges. Prove that it contains a $K_4$. Must it contain a $K_5$? Justify both answers with the appropriate thresholds or constructions.

<details><summary>Hint 1</summary>

Compare fifty first with $t_3(12)$ and then with $t_4(12)$.

</details>
<details><summary>Hint 2</summary>

To disprove a forced $K_5$, begin with four equal independent parts and delete edges.

</details>
<details><summary>Solution</summary>

The graph $T_3(12)$ has three parts of size four and $3\cdot16=48$ edges. Fifty exceeds this, so Turán forces a $K_4$. But $T_4(12)$ has four parts of size three and $\binom42\cdot9=54$ edges while avoiding $K_5$. Delete any four edges to obtain fifty edges; deleting edges cannot create a clique, so the resulting graph remains $K_5$-free. Thus a four-clique is forced but a five-clique is not.

</details>

## Sources

This chapter gives original exposition and exercises for the classical extremal theorem. Primary teaching references are Yufei Zhao, [Graph Theory and Additive Combinatorics, MIT 18.225 lecture notes](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf), section 1.2, and Po-Shen Loh, [Extremal Combinatorics](https://www.math.cmu.edu/~ploh/docs/math/mop2010/extremal-soln.pdf), June 2010, section 2, problem 2, for the cloning argument. The local earlier [Probabilistic and Extremal Methods](../discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods.md) provides another Mantel proof and further applications. The external primary references were consulted on 13 November 2026; no passage has been copied.

## Summary

An extremal number requires both an avoiding construction and a universal upper bound. Complete multipartite graphs give the clique-avoiding construction, and balancing their part sizes maximises edges within that class. Cloning preserves clique avoidance; extremality forces nonadjacent vertices to have equal degrees, and the two-clone argument makes nonadjacency an equivalence relation. Therefore every extremal graph is complete multipartite, and balancing proves Turán's exact bound and its equality classification. The quadratic estimate has an explicit divisibility correction, while complementation translates the result into an independent-set threshold. Clique avoidance alone does not imply a small colouring, and stability or supersaturation would require additional proofs beyond the extremal theorem.

