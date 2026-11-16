
# Basis Exchange Graphs and Combinatorial Geometry {#section-1-basis-exchange-graphs-and-combinatorial-geometry}

A matroid has many bases, but they do not form an unstructured list. Put two bases next to one another when one can be obtained from the other by deleting one element and inserting one element. The resulting basis graph turns exchange into geometry: distance measures disagreement, shortest paths monotonically repair it, and linear objectives orient the graph toward optima. This geometry is discrete. It does not require a drawing or a representation over a field.

The central discipline of the chapter is scope. Ordinary exchange gives a path and a one-sided replacement. Strong single-element exchange gives a swap valid in both bases. Neither statement, by itself, proves that an arbitrary collection of swaps can be made simultaneously. Every global assertion below is proved separately.

<a id="section-5-prerequisites-and-conventions"></a>
## Prerequisites and conventions {#section-7-prerequisites-and-conventions}

The prerequisite chapters are **Weighted Greedy Theorems and Objective Contracts** (`weighted-greedy-objectives`) and **Duality, Sums, and Matroid Connectivity** (`duality-sums-connectivity`). We also use the basis, circuit, rank, and closure language developed earlier.

Throughout, $M=(E,I)$ is a finite matroid of rank $r$, and $B(M)$ is its set of bases. We write $B-x+y$ for $(B\setminus \{x\})\cup \{y\}$. The symmetric difference is $X\mathbin{\triangle}Y=(X\setminus Y)\cup (Y\setminus X)$. All weights are real unless stated otherwise.

The **basis graph** $G(M)$ has vertex set $B(M)$. Distinct bases $B,C$ are adjacent exactly when $|B\mathbin{\triangle}C|=2$. Thus an edge is a valid one-element exchange, not merely a pair of sets at Hamming distance two.

<a id="section-13-1-the-exact-metric"></a>
## 1. The exact metric {#section-15-1-the-exact-metric}

**Theorem 1 (basis-graph distance).** For any bases $B,C$,

$d_{G(M)}(B,C)=|B\setminus C|=|C\setminus B|=|B\mathbin{\triangle}C|/2$.

In particular, the basis graph is connected and has diameter at most $r$.

**Proof.** Equal cardinality gives $|B\setminus C|=|C\setminus B|$. If $B\ne C$, choose $x\in B\setminus C$. Basis exchange, applied toward $C$, supplies $y\in C\setminus B$ for which $B'=B-x+y$ is a basis. Then $|B'\setminus C|=|B\setminus C|-1$. Induction produces a path of $|B\setminus C|$ edges.

Conversely, one graph edge changes membership of only one element of the current basis outside $C$. Therefore a path starting with $|B\setminus C|$ wrong elements needs at least that many edges. The upper and lower bounds agree. ∎

Every shortest path from $B$ to $C$ is **monotone toward $C$**: each step removes an element of $B_i\setminus C$ and inserts one of $C\setminus B_i$. Indeed, a path of the minimum length has no spare step in which the disagreement fails to decrease.

<a id="section-27-worked-example-1-a-uniform-basis-graph"></a>
### Worked example 1: a uniform basis graph {#section-29-worked-example-1-a-uniform-basis-graph}

For $U(2,4)$, bases are the six two-subsets of $\{1,2,3,4\}$. Two are adjacent when they share one element. Thus $G(U(2,4))$ is the octahedral graph. The distance from $\{1,2\}$ to $\{3,4\}$ is two. Its four shortest paths are

$12\to 13\to 34$, $12\to 14\to 34$, $12\to 23\to 34$, and $12\to 24\to 34$.

The graph is not a tree: exchange geometry naturally contains several routes between the same endpoints.

<a id="section-35-a-diagnostic-counterexample"></a>
### A diagnostic counterexample {#section-37-a-diagnostic-counterexample}

The diameter need not equal $r$. If $M$ has a unique basis, the diameter is zero. If every pair of bases shares a fixed coloop, their maximum disagreement can be below $r$. The exact diameter is

$\max\{|B\setminus C|:B,C\in B(M)\}$,

not automatically the rank.

<a id="section-43-2-intervals-and-shortest-path-witnesses"></a>
## 2. Intervals and shortest-path witnesses {#section-45-2-intervals-and-shortest-path-witnesses}

For vertices $B,C$, their graph interval is

$I(B,C)=\{D:d(B,D)+d(D,C)=d(B,C)\}$.

**Proposition 2.** A basis $D$ lies in $I(B,C)$ if and only if

$B\cap C\subseteq D\subseteq B\cup C$.

**Proof.** By Theorem 1, the interval equality becomes

$|B\setminus D|+|D\setminus C|=|B\setminus C|$.

Let $p=|(B\cap C)\setminus D|$ count omitted common elements and let
$q=|D\setminus (B\cup C)|$ count included outside elements. Partitioning the three bases
and using their equal cardinalities gives

$|B\setminus D|+|D\setminus C|=|B\setminus C|+p+q$.

Therefore the interval equality holds exactly when $p=q=0$, which is precisely
$B\cap C\subseteq D\subseteq B\cup C$. ∎

This is a characterization among bases. An arbitrary $r$-subset between intersection and union need not be a basis.

<a id="section-68-worked-example-2-an-interval-is-constrained-by-dependen"></a>
### Worked example 2: an interval is constrained by dependence {#section-70-worked-example-2-an-interval-is-constrained-by-dependen}

Let $M$ be the graphic matroid of the four-cycle with edges $a,b,c,d$, and let $B=\{a,b,c\}$, $C=\{a,c,d\}$. Their common edges $a,c$ must occur in any interval basis, and no outside edge exists. The only possible interval vertices are $B$ and $C$.

Now add diagonal $e$ and take $B=\{a,b,c\}$, $C=\{c,d,e\}$ in a labeling where both are spanning trees. Every interval basis must contain $c$ and choose two edges from $\{a,b,d,e\}$. A three-set that forms a cycle is still excluded. Set containment describes the metric interval; matroid independence determines which candidates actually occur.

<a id="section-74-3-exchange-rectangles-and-local-squares"></a>
## 3. Exchange rectangles and local squares {#section-76-3-exchange-rectangles-and-local-squares}

Suppose $B$ is a basis, $x_1,x_2\in B$, and $y_1,y_2\notin B$. If all four sets

$B$, $B-x_1+y_1$, $B-x_2+y_2$, and $B-\{x_1,x_2\}+\{y_1,y_2\}$

are bases, they form a four-cycle in the basis graph. It is tempting to infer the fourth corner from the two adjacent exchanges. That inference is false.

<a id="section-82-worked-example-3-two-legal-moves-whose-combination-is-i"></a>
### Worked example 3: two legal moves whose combination is illegal {#section-84-worked-example-3-two-legal-moves-whose-combination-is-i}

Take the rank-two linear matroid over the real numbers represented by

$a=(1,0)$, $b=(0,1)$, $c=(1,1)$, $d=(2,2)$.

The vectors $c,d$ are parallel. Starting from $B=\{a,b\}$, both $B-a+c=\{b,c\}$ and $B-b+d=\{a,d\}$ are bases. But replacing both gives $\{c,d\}$, which is dependent. Two individually legal exchanges do not make an exchange rectangle.

**Square criterion.** The fourth set is a basis precisely when either of the equivalent conditions holds:

- $y_2\notin \operatorname{cl}(B-\{x_1,x_2\}+y_1)$;
- $x_2$ belongs to the fundamental circuit $C(y_2,B-x_1+y_1)$.

The equivalence is just the fundamental-circuit replacement theorem applied after the first exchange. Notice that the certificate is recomputed in the new basis. Reusing the original fundamental circuit is a common source of false simultaneous-exchange arguments.

<a id="section-97-4-strong-exchange-is-local-not-rectangular"></a>
## 4. Strong exchange is local, not rectangular {#section-99-4-strong-exchange-is-local-not-rectangular}

For bases $B,C$ and fixed $x\in B\setminus C$, strong basis exchange produces some $y\in C\setminus B$ such that both $B-x+y$ and $C-y+x$ are bases. In the basis graph, the two new vertices move one step along shortest paths from opposite ends.

**Proposition 3 (a symmetric first step).** If $d(B,C)=k>0$ and $x\in B\setminus C$, there is $y\in C\setminus B$ such that

$d(B-x+y,C)=k-1$ and $d(C-y+x,B)=k-1$.

**Proof.** Choose $y$ by strong basis exchange. Both displayed sets are bases. Their set differences from the opposite endpoint lose exactly one element, so Theorem 1 gives both distances. ∎

What is not proved is that choices made for several distinct $x$ can be fixed in advance and executed in arbitrary order. The relevant fundamental circuits change after every move. Multiple symmetric exchange is a genuine additional theorem; this chapter never derives it from Proposition 3.

<a id="section-109-worked-example-4-a-symmetric-swap-in-a-graph"></a>
### Worked example 4: a symmetric swap in a graph {#section-111-worked-example-4-a-symmetric-swap-in-a-graph}

Let $G$ have square edges $12,23,34,41$ and diagonal $13$. Put

$B=\{12,23,34\}$, $C=\{12,34,41\}$.

For $x=23$, the only candidate in $C\setminus B$ is $41$. Both $B-23+41=C$ and $C-41+23=B$ are spanning trees. The graphic certificates agree: $41$ crosses the fundamental cut created by deleting $23$ from $B$, while $23$ lies on the cycle created by adding it to $C$.

<a id="section-117-5-exchange-matchings-simultaneous-comparison-without-si"></a>
## 5. Exchange matchings: simultaneous comparison without simultaneous swaps {#section-119-5-exchange-matchings-simultaneous-comparison-without-si}

There is a useful global statement weaker than performing all swaps at once.

**Theorem 4 (one-way exchange matching).** For bases $B,C$, there exists a bijection

$\varphi:B\setminus C\to C\setminus B$

such that $B-b+\varphi (b)$ is a basis for every $b\in B\setminus C$.

**Proof.** Make a bipartite graph with left side $X=B\setminus C$, right side $Y=C\setminus B$, and join $b$ to $e$ when $B-b+e$ is a basis. For $S\subseteq X$, let $N(S)$ be its neighborhood. If $e\in Y\setminus N(S)$, then its fundamental circuit $C(e,B)$ avoids $S$; otherwise deleting a member of $S$ would permit $e$. Hence $e\in \operatorname{cl}(B\setminus S)$. The common part $B\cap C$ also lies in $B\setminus S$, so

$C\setminus N(S)\subseteq \operatorname{cl}(B\setminus S)$.

The left side is independent, and therefore

$r-|N(S)|=|C\setminus N(S)|\le r(B\setminus S)=r-|S|$.

Thus $|N(S)|\ge |S|$. Hall's theorem supplies a matching saturating $X$; since $|X|=|Y|$, it is a bijection. ∎

The conclusion certifies each swap from the same original basis $B$. It does not say the set of all matched swaps is jointly feasible, and it does not say $C-\varphi (b)+b$ is a basis. Those are different quantifier patterns.

<a id="section-139-6-linear-objectives-orient-the-geometry"></a>
## 6. Linear objectives orient the geometry {#section-141-6-linear-objectives-orient-the-geometry}

Give each element weight $w(e)$ and each basis weight $w(B)=\sum _{e\in B}w(e)$. Orient a basis-graph edge $B\to B-x+y$ when $w(y)>w(x)$.

**Theorem 5 (local equals global for linear basis weights).** A basis $B$ has maximum weight if and only if no incident edge is oriented away from $B$.

**Proof.** A global maximum plainly has no improving neighbor. Conversely, suppose every valid exchange $B-b+e$ satisfies $w(b)\ge w(e)$. For any basis $C$, take the exchange bijection $\varphi:B\setminus C\to C\setminus B$ from Theorem 4. Each matched pair is a valid exchange, so $w(b)\ge w(\varphi(b))$. Summing and then adding the common weight gives $w(B)\ge w(C)$. ∎

**Corollary 6.** Every nonmaximum basis has a strictly improving neighbor.

This is special to linear weights on matroid bases. An arbitrary function on bases can have a strict local maximum that is not global. Even for a linear weight, there may be flat edges between equally weighted optima.

<a id="section-151-worked-example-5-plateaus-and-an-optimal-face"></a>
### Worked example 5: plateaus and an optimal face {#section-153-worked-example-5-plateaus-and-an-optimal-face}

In $U(2,4)$, assign weights $w(1)=w(2)=3$ and $w(3)=w(4)=1$. The unique optimum is $\{1,2\}$. From $\{3,4\}$, every exchange inserting $1$ or $2$ improves the weight. From $\{1,3\}$, exchanging $3$ for $2$ improves, while exchanging $3$ for $4$ is flat.

If instead all four weights are one, every basis is optimal and every basis-graph edge is flat. “No improving edge” certifies global optimality but never promises uniqueness.

<a id="section-157-7-faces-selected-by-weights"></a>
## 7. Faces selected by weights {#section-159-7-faces-selected-by-weights}

For a weight vector $w$, let

$B_w=\{B\in B(M):w(B)\text{ is maximum}\}$.

**Theorem 7.** The maximum-weight bases are the bases of a matroid on $E$ (with possible loops). Consequently, the subgraph of $G(M)$ induced by $B_w$ is connected.

**Proof.** Partition $E$ into weight levels $L_1,\ldots ,L_s$ with weights strictly decreasing, and set $A_j=L_1\cup ⋯\cup L_j$. Greedy optimality says that a basis $B$ is maximum-weight exactly when

$|B\cap A_j|=r(A_j)$ for every $j$.

Indeed, these equalities say that $B$ takes the largest feasible number from the first level, then the largest feasible additional number from the second, and so on. This lexicographically maximizes the level-count vector and hence the weight sum. Conversely, failure at the first deficient prefix can be repaired by augmentation and increases weight.

For each layer define a minor

$M_j=(M|A_j)/A_{j-1}$

on $L_j$ (with $A_0=\varnothing$). The displayed prefix equalities hold exactly when each $B\cap L_j$ is a basis of $M_j$. Thus $B_w$ is the set of bases of the direct sum $M_1\oplus ⋯\oplus M_s$. That direct sum is a matroid, and its basis graph is connected by Theorem 1. ∎

This theorem is a combinatorial version of a polyhedral face statement: optimizing a linear functional selects another matroid basis system. No assertion about every face or every edge of a polytope is needed for the conclusion.

<a id="section-179-worked-example-6-weight-levels-in-a-graphic-matroid"></a>
### Worked example 6: weight levels in a graphic matroid {#section-181-worked-example-6-weight-levels-in-a-graphic-matroid}

Let a connected graph have heavy edges $H$ and light edges $L$, with every heavy edge worth two and every light edge worth one. A maximum-weight spanning tree first takes a maximal forest from $H$; it then adds enough light edges to connect the heavy-edge components. All maximum trees contain exactly $r(H)$ heavy edges. Their heavy parts are bases of the restriction to $H$, and their light parts are bases of the contraction by $H$. Exchanges preserving optimality occur inside these layer minors.

<a id="section-183-8-minors-appear-as-convex-looking-slices"></a>
## 8. Minors appear as convex-looking slices {#section-185-8-minors-appear-as-convex-looking-slices}

Fix independent $I$ and a set $S$ disjoint from $I$. Bases of the minor $(M/I)|S$ correspond to sets $J\subseteq S$ for which $I\cup J$ is a basis of $M|(I\cup S)$ after the appropriate rank is reached. In a basis graph this means that fixing some included elements and forbidding some outside elements leaves, when nonempty, another basis graph.

More precisely, fix disjoint $I,F\subseteq E$ and consider

$V_{I,F}=\{B\in B(M):I\subseteq B\subseteq E\setminus F\}$.

If nonempty, choose $B_0\in V_{I,F}$. Then the variable sets $B\setminus I$ are the bases of $(M\setminus F)/I$. Hence the induced graph on $V_{I,F}$ is connected. This is an exact statement about coordinate restrictions; calling an arbitrary connected induced subgraph a “face” would be unjustified.

<a id="section-193-9-direct-sums-become-cartesian-products"></a>
## 9. Direct sums become Cartesian products {#section-195-9-direct-sums-become-cartesian-products}

Let $M_1$ and $M_2$ have disjoint ground sets. A set is a basis of the direct sum $M_1\oplus M_2$ exactly when it has the form $B_1\cup B_2$, where each $B_i$ is a basis of $M_i$. This elementary factorization has a precise graph consequence.

The **Cartesian product** $G \square H$ has vertices $(g,h)$. Two vertices are adjacent when one coordinate is equal and the other coordinate is an edge in its factor.

**Theorem 8.** There is a natural graph isomorphism

$G(M_1\oplus M_2)\cong G(M_1) \square G(M_2)$.

Under this isomorphism,

$d(B_1\cup B_2,C_1\cup C_2)=d(B_1,C_1)+d(B_2,C_2)$.

**Proof.** Map $B_1\cup B_2$ to $(B_1,B_2)$. It is a bijection by the basis description of a direct sum. A one-element exchange cannot delete an element in one summand and insert an element in the other: that would lower the basis size in the first summand and raise it above rank in the second. Hence an adjacent pair changes exactly one component along an edge of its basis graph. Conversely, any exchange inside one component gives an exchange in the direct sum. This proves the graph isomorphism.

A path in the product projects to paths in both factors, so its length is at least the sum of the two factor distances. Concatenating a shortest path in the first coordinate with one in the second attains that sum. The distance identity also follows directly from Theorem 1 because disjoint ground sets make set-difference sizes additive. ∎

<a id="section-211-worked-example-7-a-prism-from-a-direct-sum"></a>
### Worked example 7: a prism from a direct sum {#section-213-worked-example-7-a-prism-from-a-direct-sum}

The basis graph of $U(1,2)$ is one edge, and the basis graph of $U(1,3)$ is a triangle. Therefore the basis graph of $U(1,2)\oplus U(1,3)$ is the triangular prism $K_2 \square K_3$. Each basis chooses one element from each block. Moving along a triangular edge changes the choice in the three-element block; moving along a vertical edge changes the choice in the two-element block.

Direct-sum factorization makes several claims transparent. The diameter is the sum of factor diameters. The number of bases is the product of the numbers of factor bases. A coloop factor has a one-vertex basis graph and changes rank without changing exchange geometry. This is another reason rank alone does not determine diameter.

<a id="section-217-10-exchange-orders-and-geodesic-interleavings"></a>
## 10. Exchange orders and geodesic interleavings {#section-219-10-exchange-orders-and-geodesic-interleavings}

The distance theorem proves that a shortest route exists, but routes can interact. If a matroid is a direct sum and shortest factor paths have lengths $p$ and $q$, every interleaving of their steps is a shortest path in the product. For two fixed factor paths, there are $C(p+q,p)$ interleavings: select which $p$ of the total positions carry first-factor moves.

Outside a direct sum, two proposed exchanges may obstruct one another, as Worked example 3 showed. Thus the binomial interleaving count is a theorem about independent factors, not a generic lower bound for basis graphs.

There is nevertheless a useful accessibility fact for every matroid.

**Proposition 9.** Let $B,C$ be bases and let $S$ be any nonempty subset of $B\setminus C$. Some shortest path from $B$ to $C$ begins by deleting an element of $S$.

**Proof.** Choose $x\in S$. Ordinary basis exchange toward $C$ supplies $y\in C\setminus B$ for which $B-x+y$ is a basis. Its distance to $C$ is one less than the distance from $B$ to $C$. Follow this first edge by any shortest path to $C$. The total length equals $d(B,C)$. ∎

The proposition lets us prescribe the first deletion, not the first insertion. Nor does it prescribe the order of all deletions: after the first step, the circuits governing later insertions may change.

<a id="section-231-11-failure-modes-and-proof-diagnostics"></a>
## 11. Failure modes and proof diagnostics {#section-233-11-failure-modes-and-proof-diagnostics}

1. **Hamming adjacency replaces matroid adjacency.** Two $r$-sets differing by one deletion and insertion are adjacent only if both are bases.
2. **Two legal swaps are combined.** Recompute the fundamental circuit after the first swap; Worked example 3 shows why.
3. **Strong exchange is multiplied without proof.** A theorem with $\text{for every }x\text{ there exists }y$ does not provide one simultaneous assignment for a set of $x$ values.
4. **An exchange matching becomes symmetric.** Theorem 4 repairs $B$; it makes no claim about repairing $C$.
5. **Local optimality is used for a nonlinear objective.** Theorem 5 depends on additive weights and the exchange matching.
6. **No improving neighbor is read as unique optimum.** Flat optimal edges and entire optimal basis graphs may remain.
7. **Every induced connected subgraph is called a face.** Only the explicitly fixed/forbidden and weight-selected families were proved to inherit matroid structure.
8. **Rank is confused with diameter.** Rank is only an upper bound; common coloops and restricted basis families shrink the diameter.

<a id="section-242-12-solved-exercises"></a>
## 12. Solved exercises {#section-244-12-solved-exercises}

<a id="section-244-exercise-1-distance-and-geodesics"></a>
### Exercise 1: distance and geodesics {#section-246-exercise-1-distance-and-geodesics}
<a id="basis-exchange-geometry-ex-1"></a>

In $U(3,6)$, let $B=\{1,2,3\}$ and $C=\{4,5,6\}$. Find their distance and count shortest paths when the three deletions and three insertions are recorded.

<details>
<summary>Hint 1</summary>

**Hint.** The distance counts elements that must be removed from the first basis.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In a uniform matroid, any order of the three deletions and any order of the three insertions stays feasible.

</details>

<details>
<summary>Solution</summary>

**Solution.** The distance is $|B\setminus C|=3$. Any ordering of the deleted elements and any ordering of the inserted elements gives a valid path because every three-set is a basis. Pairing the two orders step by step gives $3!\,3! = 36$ shortest paths.

</details>

<a id="section-270-exercise-2-characterize-an-interval"></a>
### Exercise 2: characterize an interval {#section-272-exercise-2-characterize-an-interval}
<a id="basis-exchange-geometry-ex-2"></a>

In $U(3,5)$, take $B=\{1,2,3\}$ and $C=\{1,4,5\}$. List $I(B,C)$.

<details>
<summary>Hint 1</summary>

**Hint.** An interval basis must retain the intersection and lie inside the union.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Here element one is fixed, and the other two positions can be any two of the four remaining labels.

</details>

<details>
<summary>Solution</summary>

**Solution.** An interval basis must contain $1$, lie in $\{1,2,3,4,5\}$, and have size three. Every such set is a uniform-matroid basis. Thus the interval consists of the six sets $\{1\}\cup X$, where $X$ is a two-subset of $\{2,3,4,5\}$.

</details>

<a id="section-296-exercise-3-rank-one-geometry"></a>
### Exercise 3: rank-one geometry {#section-298-exercise-3-rank-one-geometry}
<a id="basis-exchange-geometry-ex-3"></a>

Describe the basis graph of a rank-one matroid with $k$ nonloops and any number of loops.

<details>
<summary>Hint 1</summary>

**Hint.** List the bases before drawing the basis graph.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each basis is a singleton nonloop, and any two such bases differ by one exchange.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each basis is a singleton containing a nonloop. Any two distinct such singletons differ by one deletion and insertion, so the basis graph is $K_k$. Loops occur in no basis and create no vertices. Its diameter is zero for $k=1$ and one for $k\ge 2$.

</details>

<a id="section-322-exercise-4-a-failed-rectangle"></a>
### Exercise 4: a failed rectangle {#section-324-exercise-4-a-failed-rectangle}
<a id="basis-exchange-geometry-ex-4"></a>

For the vectors in Worked example 3, compute the fundamental circuits $C(c,\{a,b\})$ and $C(d,\{a,b\})$, and explain why they do not certify the double swap.

<details>
<summary>Hint 1</summary>

**Hint.** Compute dependence relative to the original basis, then recompute after one exchange.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** After inserting $c$, the columns $c,d$ are parallel; the old fundamental circuits no longer apply.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both $c$ and $d$ have both coordinates nonzero, so each fundamental circuit is $\{a,b,c\}$ or $\{a,b,d\}$, respectively. Hence either original basis vector may be removed for either insertion. After inserting $c$ and deleting $a$, however, $d$ is parallel to $c$, so $C(d,\{b,c\})=\{c,d\}$ and deleting $b$ is invalid. Original certificates do not survive a basis change.

</details>

<a id="section-348-exercise-5-common-coloops-and-diameter"></a>
### Exercise 5: common coloops and diameter {#section-350-exercise-5-common-coloops-and-diameter}
<a id="basis-exchange-geometry-ex-5"></a>

Let $M=U(1,1)\oplus U(2,4)$. Determine its rank and basis-graph diameter.

<details>
<summary>Hint 1</summary>

**Hint.** A coloop is common to every basis, so it never contributes to the distance.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Only the $U(2,4)$ factor varies, and two disjoint pairs require two exchanges.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its rank is three. The unique element of $U(1,1)$ is a coloop contained in every basis. Variable choices are the two-subsets of the four-element second summand, whose basis graph has diameter two. Therefore $G(M)$ has diameter two, strictly below the rank.

</details>

<a id="section-374-exercise-6-certify-optimality-locally"></a>
### Exercise 6: certify optimality locally {#section-376-exercise-6-certify-optimality-locally}
<a id="basis-exchange-geometry-ex-6"></a>

In $U(2,4)$, weights are $5,4,4,-2$. List all maximum-weight bases and verify Theorem 7's connectivity conclusion.

<details>
<summary>Hint 1</summary>

**Hint.** Choose the largest element weight first, then identify the tied choices for the second position.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two optimal bases differ only by exchanging the equal-weight elements.

</details>

<details>
<summary>Solution</summary>

**Solution.** A maximum basis contains element $1$ and one of $2,3$, so the optima are $\{1,2\}$ and $\{1,3\}$. They differ by exchanging $2$ and $3$, hence are adjacent. The top prefix $\{1\}$ contributes rank one, and the next level $\{2,3\}$ contributes one element in the contracted layer.

</details>

<a id="section-400-exercise-7-fixed-coordinate-slice"></a>
### Exercise 7: fixed-coordinate slice {#section-402-exercise-7-fixed-coordinate-slice}
<a id="basis-exchange-geometry-ex-7"></a>

Let $M=U(3,6)$. Require every basis to contain $1$ and forbid $6$. Identify the minor whose bases parameterize the slice and its basis graph.

<details>
<summary>Hint 1</summary>

**Hint.** A compulsory independent element is contracted and a forbidden element deleted.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** After removing the compulsory label, the variable part chooses two of four elements.

</details>

<details>
<summary>Solution</summary>

**Solution.** Variable elements lie in $\{2,3,4,5\}$ and two must be chosen. The minor is $(M\setminus 6)/1\cong U(2,4)$. Its basis graph is the octahedral graph on six vertices, so the slice is connected.

</details>

<a id="section-426-exercise-8-monotonicity-of-shortest-paths"></a>
### Exercise 8: monotonicity of shortest paths {#section-428-exercise-8-monotonicity-of-shortest-paths}
<a id="basis-exchange-geometry-ex-8"></a>

Prove that a shortest path from $B$ to $C$ cannot insert an element outside $C$.

<details>
<summary>Hint 1</summary>

**Hint.** A shortest path must reduce disagreement by exactly one at every step.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Inserting an element outside the target basis cannot produce that unit reduction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its length is $|B\setminus C|$. Each step can reduce this quantity by at most one. Inserting an element outside $C$ leaves the number of wrong elements unchanged if a wrong element was deleted, or increases it if an element of $B\cap C$ was deleted. Either event consumes a step without the required unit decrease at every step, so the path would exceed the minimum length.

</details>

<a id="section-452-exercise-9-why-additive-weights-matter"></a>
### Exercise 9: why additive weights matter {#section-454-exercise-9-why-additive-weights-matter}
<a id="basis-exchange-geometry-ex-9"></a>

Give a function on the bases of $U(2,4)$ with a strict local maximum that is not global.

<details>
<summary>Hint 1</summary>

**Hint.** Use two disjoint bases, which are nonadjacent in the basis graph.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Give the first a middle positive value, its neighbours a smaller value, and the disjoint basis a larger value.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assign value $2$ to $\{1,2\}$, value $3$ to its disjoint basis $\{3,4\}$, and value $0$ to the other four bases. Every neighbor of $\{1,2\}$ shares one element with it and has value zero, so $\{1,2\}$ is a strict local maximum. It is not global because $\{3,4\}$ has value three. This function is not a sum of fixed element weights; Theorem 5 does not apply.

</details>

<a id="section-478-exercise-10-optimal-bases-under-ties"></a>
### Exercise 10: optimal bases under ties {#section-480-exercise-10-optimal-bases-under-ties}
<a id="basis-exchange-geometry-ex-10"></a>

Suppose $w$ takes only two values, high on $H$ and low on $E\setminus H$. Show directly that $B$ is maximum-weight exactly when $|B\cap H|=r(H)$.

<details>
<summary>Hint 1</summary>

**Hint.** All bases have the same cardinality, so only the number of high elements affects their relative weights.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Extend a basis of the restriction to $H$; it realizes exactly $r(H)$ high elements.

</details>

<details>
<summary>Solution</summary>

**Solution.** Any independent subset of $H$ has size at most $r(H)$, and a basis can contain at most that many high elements. Extend a basis of $H$ to a basis of $M$; this achieves $r(H)$ high elements. Since all bases have the same cardinality, maximizing total weight is exactly maximizing the high-element count. Therefore the stated equality is necessary and sufficient.

</details>

<a id="section-504-exercise-11-a-product-distance"></a>
### Exercise 11: a product distance {#section-506-exercise-11-a-product-distance}
<a id="basis-exchange-geometry-ex-11"></a>

Let $M=U(2,4)\oplus U(1,3)$. Take bases $B=\{1,2\}\cup \{a\}$ and $C=\{3,4\}\cup \{b\}$ on disjoint labeled ground sets. Find their distance and count the interleavings of a fixed shortest path in each factor.

<details>
<summary>Hint 1</summary>

**Hint.** Distances add across the two direct-sum factors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Interleave the two ordered first-factor steps with the single second-factor step by choosing its position.

</details>

<details>
<summary>Solution</summary>

**Solution.** The uniform rank-two components are disjoint bases, so their distance is two. The rank-one components are different, so their distance is one. Product distance is three. A fixed two-step path in the first factor and the one-step path in the second can be interleaved in $C(3,2)=3$ ways.

</details>

<a id="section-530-exercise-12-prescribe-a-deletion-not-an-insertion"></a>
### Exercise 12: prescribe a deletion, not an insertion {#section-532-exercise-12-prescribe-a-deletion-not-an-insertion}
<a id="basis-exchange-geometry-ex-12"></a>

In the graphic matroid of a spanning tree $T$, explain why any chosen edge $x\in T\setminus T'$ can be the first deletion on some shortest path to another spanning tree $T'$, but an arbitrary $y\in T'\setminus T$ cannot necessarily be its replacement.

<details>
<summary>Hint 1</summary>

**Hint.** Deleting a chosen tree edge creates a cut.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A replacement from the target tree must cross that cut; exchange ensures one exists but does not make every target edge cross it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Basis exchange applied with the chosen $x$ supplies at least one $y$ in $T'\setminus T$ such that $T-x+y$ is a tree, and that exchange reduces disagreement by one. Graphically, valid $y$ values are precisely edges of $T'\setminus T$ crossing the cut formed by deleting $x$. An arbitrary edge of $T'\setminus T$ may lie entirely inside one component of that cut, in which case it fails to reconnect the forest.

</details>

<a id="section-556-summary-and-connections"></a>
## Summary and connections {#section-558-summary-and-connections}

The basis graph has an exact metric: distance is half the symmetric-difference size. Its intervals are controlled by set containment plus independence, and its shortest paths repair disagreement one element at a time. Strong exchange supplies a symmetric first step, while Hall's theorem supplies a one-way exchange matching used to prove that local and global optima coincide for additive weights. Weight-optimal bases and fixed-coordinate slices are themselves basis systems of minors or direct sums, so their induced graphs stay connected.

The next geometric questions require additional theorems: which abstract graphs are basis graphs, how base polytopes encode all linear objectives, and when collections of exchanges can be made simultaneously. The results here provide reliable entry points without treating single-element exchange as a universal simultaneous-swap principle.

<a id="section-562-source-and-verification-note"></a>
## Sources {#section-564-source-and-verification-note}

For strong basis exchange, see Neil White, ed., *Theory of Matroids* (1986), Chapter 4; [edition record](https://doi.org/10.1017/CBO9780511629563). The individual chapter author and theorem/page locator remain unverified.


<a id="section-567-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-569-sources-for-the-expanded-teaching}

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

<a id="section-571-summary"></a>
## Summary {#section-573-summary}

Basis exchange supplies paths whose distance is the number of required deletions. Intervals preserve common elements, but separate legal moves need not combine into an exchange rectangle. Additive weights orient edges, and nonimproving exchange inequalities certify a global optimum. Direct sums produce product behavior; prescribed simultaneous exchanges require stronger hypotheses. The later exact-enumeration chapter records these properties as finite certificates.

