var e=`---
parent_id: book-discrete-combinatorial-structures
matter_id: exercise-program-part-ii
title: "Graduate Exercise Program, Part II: Exchange, Extremal Methods, and Synthesis"
description: "Fifty-two graduate-level exercises with complete solutions for Chapters 11–20."
level: graduate
estimated_minutes: 1560
license: CC BY-SA 4.0
production_state: drafting
---

# Graduate Exercise Program, Part II: Exchange, Extremal Methods, and Synthesis {#section-1-graduate-exercise-program-part-ii-exchange-extremal-met}

This supplement supplies fifty-two new exercises for Chapters 11–20. Every problem states its hypotheses, and every solution records the argument rather than only its answer. The numbering is global: Exercises 1–5 accompany Chapter 11, Exercises 6–10 Chapter 12, and so on, with six exercises each for the two cumulative chapters.

Throughout, matroids are finite. For a matroid $M$, write $r_M$ for rank and $M^{*}$ for the dual. A graph has no loops or multiple edges unless stated otherwise. Binomial coefficients with an impossible lower index are zero.

<a id="section-5-chapter-11-weighted-greedy-objectives"></a>
## Chapter 11: Weighted Greedy Objectives {#section-7-chapter-11-weighted-greedy-objectives}

<a id="section-7-exercise-1-recover-an-integral-objective-from-rank-thre"></a>
### Exercise 1: recover an integral objective from rank thresholds {#section-9-exercise-1-recover-an-integral-objective-from-rank-thre}

Let $M=(E,I)$ be a matroid on a nonempty ground set and let $w:E\\to\\mathbb{Z}_{\\ge 0}$. For $j\\ge 1$, put $E_j=\\{e:w(e)\\ge j\\}$. Prove that the maximum weight of an independent set is

$\\max_{I \\in I} w(I)=\\sum_{j=1}^W r_M(E_j)$,

where $W=\\max_e w(e)$. Construct one independent set attaining all threshold ranks simultaneously.

**Solution.** Scan the elements in nonincreasing weight order and let $G$ be the greedy independent set. Immediately after all elements of $E_j$ have been scanned, $G \\cap E_j$ is maximal independent in the restriction $M|E_j$; hence it is a basis of that restriction and has size $r_M(E_j)$. These sets are nested as $j$ decreases, so the single final set $G$ attains every threshold rank. For any $I \\in I$, the layer-cake identity gives

$w(I)=\\sum_{e \\in I}\\sum_{j=1}^{w(e)}1
=\\sum_{j=1}^W |I \\cap E_j| \\le \\sum_{j=1}^W r_M(E_j)$.

For $G$, equality holds at every threshold, proving both assertions. Notice that nonnegativity is essential to the independent-set objective; negative layers have no analogous counting interpretation.

<a id="section-22-exercise-2-separate-basis-and-independent-set-contracts"></a>
### Exercise 2: separate basis and independent-set contracts {#section-24-exercise-2-separate-basis-and-independent-set-contracts}

On $U_{2,3}$ with ground set $\\{a,b,c\\}$, assign weights $w(a)=4$, $w(b)=-1$, and $w(c)=-7$. Determine the maximum-weight independent set and the maximum-weight basis. Then prove the general statement: if all weights are nonzero, the positive-weight elements accepted by greedy form a maximum-weight independent set, whereas maximum-basis greedy continues to rank even through negative weights.

**Solution.** The independent-set optimum is $\\{a\\}$, of weight $4$; adding either negative element lowers the objective. Bases have size two, and $\\{a,b\\}$ is best, of weight $3$. In general, greedy restricted to $E_+=\\{e:w(e)>0\\}$ produces a maximum-weight basis of $M|E_+$, hence a maximum-weight independent set of $M$. An optimum cannot benefit from a negative element, while the matroid greedy theorem optimizes the positive restriction. The nonzero assumption avoids the harmless ambiguity of adjoining feasible zero-weight elements; with zeros, the displayed greedy set is still one optimum but need not be the only one. For the basis objective, feasibility requires rank $r(M)$. The ordinary matroid greedy theorem compares bases and permits arbitrary real weights, so scanning must continue until rank is reached. The two procedures solve different feasible-set problems.

<a id="section-28-exercise-3-manufacture-a-strict-greedy-counterexample"></a>
### Exercise 3: manufacture a strict greedy counterexample {#section-30-exercise-3-manufacture-a-strict-greedy-counterexample}

Let $(E,I)$ be a hereditary system. Suppose $I,J \\in I$, $|I|<|J|$, and $I+e \\notin I$ for every $e \\in J\\setminus I$. Construct explicit rational weights for which descending greedy, under the maximum-weight-independent-set contract that skips negative elements, outputs $I$ but $J$ has larger weight.

**Solution.** Put $p=|I\\setminus J|$, $q=|J\\setminus I|$. Since $|J|>|I|$, $q>p$. Give elements of $I$ distinct weights in $(1,1+\\delta)$, elements of $J\\setminus I$ distinct weights in $(1-\\delta,1)$, and every other element weight $-1$, where $\\delta$ is a sufficiently small positive rational. Heredity makes every prefix of $I$ feasible, so greedy accepts all of $I$; because all of $I$ has been accepted first, the assumed augmentation failure makes it reject every member of $J\\setminus I$. It skips the negative outsiders. Choose $\\delta<(q-p)/(2(p+q))$. Then

$w(J)-w(I) \\ge q(1-\\delta)-p(1+\\delta) > 0$.

The common elements $I \\cap J$ cancel in this comparison. Thus greedy's literal output is $I$, while the feasible set $J$ is strictly heavier.

<a id="section-38-exercise-4-characterize-tie-robustness"></a>
### Exercise 4: characterize tie robustness {#section-40-exercise-4-characterize-tie-robustness}

Let $M$ be a matroid and $w:E\\to\\mathbb{R}$. Prove that every ordering nonincreasing in $w$ produces a maximum-weight basis. Show also that the greedy basis itself need not be unique, and prove that it is unique exactly when every weight-tied exchange $(B-e)+f$ from one greedy basis $B$ is impossible for $e \\in B$, $f \\notin B$ with $w(e)=w(f)$.

**Solution.** The exchange proof of greedy optimality uses only the weak inequality $w(g_i)\\ge w(o)$, so arbitrary ordering inside a tie preserves optimality. In $U_{1,2}$ with equal weights, either singleton is returned, proving nonuniqueness. Now fix a greedy basis $B$. If a feasible tied exchange exists, $(B-e)+f$ is a different basis of the same weight, so the optimum is not unique. Conversely, suppose another maximum basis $D$ exists. Strong basis exchange supplies a bijection between $B\\setminus D$ and $D\\setminus B$ whose paired swaps are bases. The sum of the weight differences over pairs is $w(B)-w(D)=0$. Optimality of $B$ makes every feasible replacement difference nonnegative, so every pair has equal weights. At least one tied feasible exchange therefore exists. This proves the criterion.

<a id="section-44-exercise-5-dualize-a-weighted-basis-problem"></a>
### Exercise 5: dualize a weighted basis problem {#section-46-exercise-5-dualize-a-weighted-basis-problem}

For weights $w:E\\to\\mathbb{R}$, prove

$\\max_{B basis of M} w(B)=w(E)-\\min_{D basis of M^{*}} w(D)$.

Use the identity to describe a correct greedy algorithm for a minimum-weight dual basis and explain why deleting negative-weight elements is not valid.

**Solution.** The bases of $M^{*}$ are exactly $E\\setminus B$ for bases $B$ of $M$. Hence $w(B)=w(E)-w(E\\setminus B)$, and maximizing the left member is equivalent to minimizing the complementary dual basis weight. To find the minimum dual basis, scan in nondecreasing weight and accept an element when it preserves independence in $M^{*}$, continuing until rank $r(M^{*})=|E|-r(M)$. Negative elements are desirable, but they do not by themselves form a basis; deleting or stopping according to sign can violate the fixed-cardinality basis constraint. The sign rule belongs only to optimization over all independent sets.

<a id="section-54-chapter-12-basis-exchange-geometry"></a>
## Chapter 12: Basis-Exchange Geometry {#section-56-chapter-12-basis-exchange-geometry}

<a id="section-56-exercise-6-compute-distance-in-the-basis-graph"></a>
### Exercise 6: compute distance in the basis graph {#section-58-exercise-6-compute-distance-in-the-basis-graph}

The basis graph of a matroid has one vertex per basis and an edge between bases whose symmetric difference has size two. Prove that for bases $B,D$, their graph distance is $|B\\setminus D|$. Conclude that the diameter is at most $r(M)$.

**Solution.** Each graph edge removes one element and adds one, so it can decrease $|B\\setminus D|$ by at most one. Any path from $B$ to $D$ therefore has length at least $|B\\setminus D|$. If $B\\ne D$, basis exchange applied to $B,D$ gives $e \\in B\\setminus D$ and $f \\in D\\setminus B$ such that $B'=(B-e)+f$ is a basis. Then $|B'\\setminus D|=|B\\setminus D|-1$. Iteration reaches $D$ in exactly $|B\\setminus D|$ steps. Since $|B\\setminus D|\\le |B|=r(M)$, the diameter bound follows. Loops and coloops cause no problem: neither appears in a relevant symmetric difference.

<a id="section-62-exercise-7-local-optimality-is-global-optimality"></a>
### Exercise 7: local optimality is global optimality {#section-64-exercise-7-local-optimality-is-global-optimality}

Let $B$ be a basis of a weighted matroid. Assume $w(B)\\ge w(B-e+f)$ for every basis obtained by one exchange. Prove that $B$ is a maximum-weight basis.

**Solution.** Let $D$ be any basis. The multiple symmetric exchange theorem yields a bijection $\\varphi:B\\setminus D \\to D\\setminus B$ such that $B-e+\\varphi(e)$ is a basis for every $e \\in B\\setminus D$. Local optimality gives $w(e)\\ge w(\\varphi(e))$ for every pair. Summing and canceling $B \\cap D$ gives

$w(B)-w(D)=\\sum_{e \\in B\\setminus D}(w(e)-w(\\varphi(e)))\\ge 0$.

Thus no basis is heavier. The matroid hypothesis is load-bearing: a generic constant-cardinality family can have a locally maximal member separated from a better member by moves that require two simultaneous replacements.

<a id="section-72-exercise-8-orient-the-basis-graph"></a>
### Exercise 8: orient the basis graph {#section-74-exercise-8-orient-the-basis-graph}

Orient each basis-graph edge toward its higher-weight endpoint. First assume all basis weights are distinct and prove that the orientation is acyclic with a unique sink. Then prove the stronger fact that distinct element weights already guarantee these conclusions, even though two nonadjacent bases can have equal weight.

**Solution.** Along every directed edge the real-valued potential $w(B)$ strictly increases, so a directed cycle is impossible. A sink is locally maximum; Exercise 7 makes it globally maximum. Distinct basis weights give exactly one global maximum, hence one sink.

Now suppose only the element weights are distinct. Every basis-graph edge exchanges two distinct elements, so its endpoint weights differ and every edge is oriented. If two different bases $B,D$ were both globally maximum, the exchange matching used in Exercise 7 would pair $e \\in B\\setminus D$ with $\\varphi(e) \\in D\\setminus B$ so that every $B-e+\\varphi(e)$ is a basis. Optimality makes each $w(e)-w(\\varphi(e))\\ge 0$, and equality of the two basis totals makes every difference zero, contradicting distinct element weights. Thus the optimum and sink are unique. Distinct subset sums need not hold—for numerical weights $1,2,3,4$, the sets $\\{1,4\\}$ and $\\{2,3\\}$ tie—but a matroid cannot make both tied sets global optima under distinct element weights.

<a id="section-80-exercise-9-count-geodesics-in-a-uniform-matroid"></a>
### Exercise 9: count geodesics in a uniform matroid {#section-82-exercise-9-count-geodesics-in-a-uniform-matroid}

In the basis graph of $U_{r,n}$, let $B,D$ satisfy $|B\\setminus D|=k$. Prove that there are exactly $(k!)^2$ shortest exchange sequences from $B$ to $D$ when sequences are distinguished by their ordered intermediate bases.

**Solution.** A shortest path has length $k$ by Exercise 6. At every step it must remove one as-yet-unremoved element of $B\\setminus D$ and add one as-yet-unadded element of $D\\setminus B$; any other move would fail to decrease the distance and could not fit in $k$ steps. Uniformity makes every resulting $r$-set a basis. Choose an ordering of the $k$ removals in $k!$ ways and independently an ordering of the $k$ additions in $k!$ ways; pair choices by time. Different paired orders produce a different first time at which some element enters or leaves, hence different basis sequences. The count is $(k!)^2$.

<a id="section-86-exercise-10-exchange-with-a-prescribed-common-core"></a>
### Exercise 10: exchange with a prescribed common core {#section-88-exercise-10-exchange-with-a-prescribed-common-core}

Let $B,D$ be bases and let $S \\subseteq B \\cap D$. Prove that there is a shortest path from $B$ to $D$ in the basis graph every vertex of which contains $S$. Reinterpret the claim in a contraction of $M$.

**Solution.** Apply the exchange argument only to elements of $B\\setminus D$; none lies in $S$. Each replacement inserts an element of $D\\setminus B$, so $S$ remains throughout, and distance drops by one at every step. Alternatively, bases of $M/S$ are the sets $B'\\setminus S$ where $B'$ is a basis of $M$ containing $S$ (after interpreting contraction by an independent set; $S$ is independent because it lies in a basis). The preceding path is exactly a shortest basis-graph path between $B\\setminus S$ and $D\\setminus S$ in $M/S$, lifted by adjoining $S$.

<a id="section-92-chapter-13-tur-n-symmetrization-and-stability"></a>
## Chapter 13: Turán Symmetrization and Stability {#section-94-chapter-13-tur-n-symmetrization-and-stability}

<a id="section-94-exercise-11-optimize-a-complete-multipartite-graph"></a>
### Exercise 11: optimize a complete multipartite graph {#section-96-exercise-11-optimize-a-complete-multipartite-graph}

Among complete $r$-partite graphs on $n$ vertices, prove directly that the unique multiset of part sizes maximizing the edge count has sizes differing by at most one. Express the deficit from the balanced graph as half the excess sum of squared part sizes.

**Solution.** For part sizes $a_1,\\ldots ,a_r$ summing to $n$, the edge count is

$e=(n^2-\\sum_i a_i^2)/2$.

If $a_i\\ge a_j+2$, moving one vertex from part $i$ to part $j$ changes the square sum by $(a_i-1)^2+(a_j+1)^2-a_i^2-a_j^2=-2(a_i-a_j-1)<0$, so it raises $e$. At an optimum no such pair exists, hence all sizes are $\\lfloor n/r\\rfloor$ or $\\lceil n/r\\rceil$, with multiplicities fixed by their sum; this multiset is unique. If $b_i$ are those balanced sizes after a suitable ordering, then

$t_r(n)-e=(\\sum_i a_i^2-\\sum_i b_i^2)/2$.

The identity is exact and also shows quantitatively that imbalance costs edges.

<a id="section-108-exercise-12-audit-a-symmetrization-step"></a>
### Exercise 12: audit a symmetrization step {#section-110-exercise-12-audit-a-symmetrization-step}

Let $G$ be $K_{r+1}$-free and let nonadjacent vertices $u,v$ satisfy $deg(u)\\le deg(v)$. Form $G'$ by deleting every edge incident with $u$ and then joining $u$ to every neighbor of $v$. Prove that $G'$ remains $K_{r+1}$-free and that $e(G')\\ge e(G)$. State why nonadjacency is required.

**Solution.** The edge change is $deg(v)-deg(u)\\ge 0$. If a new $K_{r+1}$ in $G'$ avoids $u$, it already existed in $G$. If it contains $u$, its other $r$ vertices all lie in $N_G(v)$ and are pairwise adjacent. Together with $v$ they form a $K_{r+1}$ in $G$, contradiction. We used $u$ nonadjacent to $v$ so that $v$ is not among the copied neighbors and so replacing $u$ by $v$ gives $r+1$ distinct vertices with every required edge. Cloning adjacent vertices needs a different definition and does not have this proof.

<a id="section-114-exercise-13-derive-a-triangle-free-stability-estimate"></a>
### Exercise 13: derive a triangle-free stability estimate {#section-116-exercise-13-derive-a-triangle-free-stability-estimate}

Let $d\\ge 0$, and let $G$ be triangle-free on $n\\ge 1$ vertices with $e(G)\\ge n^2/4-d$. Choose a vertex $v$ of maximum degree $\\Delta$, put $A=N(v)$ and $B=V\\setminus A$, and let $m_B=e(G[B])$. Prove $m_B\\le d$ and $|\\Delta-n/2|\\le \\sqrt{d}$.

**Solution.** The set $A$ is independent. Every $x \\in B$ has at most $\\Delta$ neighbors in total, so summing degrees over $B$ yields $e(A,B)+2m_B\\le \\Delta|B|$. Since $e(G)=e(A,B)+m_B$,

$e(G)+m_B\\le Delta(n-Delta)\\le n^2/4$.

The hypothesis gives $m_B\\le n^2/4-e(G)\\le d$. Also $\\Delta(n-\\Delta)=n^2/4-(\\Delta-n/2)^2$ is at least $e(G)$, so $(\\Delta-n/2)^2\\le d$. Taking square roots proves the balance estimate.

<a id="section-124-exercise-14-identify-equality-without-invoking-a-named-"></a>
### Exercise 14: identify equality without invoking a named theorem {#section-126-exercise-14-identify-equality-without-invoking-a-named-}

Suppose $m\\ge 1$ and a triangle-free graph on $2m$ vertices has $m^2$ edges. Prove from maximum-degree counting that it is the complete bipartite graph $K_{m,m}$.

**Solution.** Use the notation of Exercise 13 with $n=2m$ and $d=0$. Equality forces $m_B=0$ and $\\Delta=m$. Thus both $A$ and $B$ are independent. Moreover $e(A,B)=e(G)=m^2$, while $|A||B|=\\Delta(2m-\\Delta)=m^2$. Every possible crossing edge is therefore present, so $G=K_{m,m}$. This also audits equality in each inequality; merely knowing the two part sizes would not prove completeness.

<a id="section-130-exercise-15-stability-cannot-omit-the-density-hypothesi"></a>
### Exercise 15: stability cannot omit the density hypothesis {#section-132-exercise-15-stability-cannot-omit-the-density-hypothesi}

For every even $n\\ge 8$, construct a triangle-free graph $G$ such that, for every balanced bipartition $V(G)=A \\cup B$, converting $G$ to $K_{A,B}$ requires at least $n^2/16$ edge additions or deletions. Explain which stability premise fails.

**Solution.** Take the empty graph. For any bipartition with parts of size $n/2,n/2$, converting it to $K_{n/2,n/2}$ requires adding exactly $n^2/4$ edges, certainly at least $n^2/16$. Allowing an unbalanced intermediate bipartition does not alter the stated comparison with a balanced complete bipartite target. The graph is triangle-free, but it has zero rather than $n^2/4-o(n^2)$ edges. Forbidden-configuration structure alone gives no closeness to an extremizer; near-extremal density is indispensable.

<a id="section-136-chapter-14-ramsey-forcing-and-recursive-bounds"></a>
## Chapter 14: Ramsey Forcing and Recursive Bounds {#section-138-chapter-14-ramsey-forcing-and-recursive-bounds}

<a id="section-138-exercise-16-prove-the-asymmetric-recursion-with-boundar"></a>
### Exercise 16: prove the asymmetric recursion with boundary cases {#section-140-exercise-16-prove-the-asymmetric-recursion-with-boundar}

For integers $s,t\\ge 3$, prove $R(s,t)\\le R(s-1,t)+R(s,t-1)$. Your convention should be that $R(s,t)$ is the least $N$ such that every graph on $N$ vertices has either a clique of size $s$ or an independent set of size $t$.

**Solution.** Set $N=R(s-1,t)+R(s,t-1)$ and choose a vertex $v$. Among the other $N-1$ vertices, either at least $R(s-1,t)$ are neighbors of $v$, or at least $R(s,t-1)$ are nonneighbors: otherwise their total would be at most $N-2$. In the first set, either there is a $K_{s-1}$, which with $v$ gives $K_s$, or an independent $t$-set. In the second, either there is a $K_s$, or an independent $(t-1)$-set, which with the nonadjacent vertex $v$ gives an independent $t$-set. Thus every $N$-vertex graph has a required configuration.

<a id="section-144-exercise-17-establish-r-3-3-6"></a>
### Exercise 17: establish $R(3,3)=6$ {#section-146-exercise-17-establish-r-3-3-6}

Give both an upper-bound proof and an explicit coloring on five vertices proving the lower bound.

**Solution.** For the upper bound, choose a vertex $v$ of a graph on six vertices. It has at least three neighbors or at least three nonneighbors. If it has three neighbors, then an edge among those three completes a triangle with $v$, while absence of all three internal edges makes the three neighbors an independent triple. If it has three nonneighbors, then an independent pair among them forms an independent triple with $v$, while absence of such a pair means all three mutual edges occur and they form a triangle. For the lower bound, color the edges of a 5-cycle red and its five diagonals blue. Each color class is a 5-cycle and hence triangle-free. Equivalently, $C_5$ has neither a triangle nor an independent triple. Therefore five vertices do not force the outcome, while six do.

<a id="section-150-exercise-18-iterate-the-recursion-exactly"></a>
### Exercise 18: iterate the recursion exactly {#section-152-exercise-18-iterate-the-recursion-exactly}

Using $R(2,t)=R(t,2)=t$, prove by induction that

$R(s,t)\\le C(s+t-2,s-1)$

for $s,t\\ge 2$. Explain why the proof gives an upper bound, not an equality formula.

**Solution.** The boundary values equal the corresponding binomial coefficients: $\\binom{t}{t-1}=t$ and $\\binom{s}{1}=s$. For $s,t\\ge 3$, apply Exercise 16 and the induction hypothesis:

$R(s,t)\\le C(s+t-3,s-2)+C(s+t-3,s-1)=C(s+t-2,s-1)$.

The recursion itself is an inequality because the vertex-neighborhood argument may use more vertices than necessary. Iterating an inequality cannot establish sharpness. The value $R(3,3)=6=\\binom{4}{2}$ happens to meet the estimate, but this coincidence is not part of the inductive logic, and many later parameters are strictly below the binomial bound.

<a id="section-164-exercise-19-a-random-coloring-lower-bound"></a>
### Exercise 19: a random-coloring lower bound {#section-166-exercise-19-a-random-coloring-lower-bound}

Color every edge of $K_n$ independently red or blue with equal probability. Prove that if

$\\binom{n}{k}2^{1-\\binom{k}{2}}<1$,

then $R(k,k)>n$. Make every quantifier in the existence conclusion explicit.

**Solution.** For each $k$-vertex set $S$, let $X_S$ indicate that all $\\binom{k}{2}$ edges inside $S$ receive one color. Its probability is $2\\cdot 2^{-\\binom{k}{2}}=2^{1-\\binom{k}{2}}$. Thus the number $X$ of monochromatic $K_k$ satisfies

$E[X]=\\binom{n}{k}2^{1-\\binom{k}{2}}<1$.

Because $X$ is a nonnegative integer, not every coloring can have $X\\ge 1$; otherwise its expectation would be at least one. Hence there exists at least one red-blue coloring of the edges of this particular $K_n$ with no monochromatic $K_k$. Therefore $n$ vertices do not have the Ramsey forcing property, so the least forcing order satisfies $R(k,k)>n$.

<a id="section-178-exercise-20-convert-between-colorings-and-complements"></a>
### Exercise 20: convert between colorings and complements {#section-180-exercise-20-convert-between-colorings-and-complements}

Prove that a red-blue coloring of $K_n$ with no red $K_s$ and no blue $K_t$ is equivalent to a graph $G$ on $n$ vertices with neither a clique of size $s$ nor an independent set of size $t$. Deduce the symmetry $R(s,t)=R(t,s)$ without using the recursion.

**Solution.** Let red edges be $E(G)$ and blue edges be the complementary pairs. A red $K_s$ is exactly a clique of size $s$ in $G$; a blue $K_t$ is exactly a set with no edges of $G$, hence an independent $t$-set. This correspondence is bijective. Swapping red and blue replaces $G$ by its complement and interchanges the two forbidden sizes. Thus an order $n$ forces $(s,t)$ exactly when it forces $(t,s)$, and their least such orders are equal.

<a id="section-184-chapter-15-probabilistic-alteration-and-dependence"></a>
## Chapter 15: Probabilistic Alteration and Dependence {#section-186-chapter-15-probabilistic-alteration-and-dependence}

<a id="section-186-exercise-21-alter-a-random-set-in-a-uniform-hypergraph"></a>
### Exercise 21: alter a random set in a uniform hypergraph {#section-188-exercise-21-alter-a-random-set-in-a-uniform-hypergraph}

Let $H$ be an $r$-uniform hypergraph with $n$ vertices and $m$ edges. Select each vertex independently with probability $p$. Prove that $H$ has an independent vertex set of size at least $pn-mp^r$.

**Solution.** Let $S$ be the sampled vertex set and let $X$ count edges wholly contained in $S$. From $S$, process those surviving edges and delete one currently present vertex from each edge that has not already been destroyed. At most $X$ vertices are deleted, and the resulting set $I$ contains no edge of $H$. Therefore $|I|\\ge |S|-X$. Linearity of expectation, which needs no independence between edge indicators, gives $E|S|=pn$ and $EX=mp^r$. Some outcome has $|S|-X\\ge pn-mp^r$; altering that outcome produces the claimed independent set. The bound may be negative, but remains valid; its force comes from choosing $p$ well.

<a id="section-192-exercise-22-optimize-the-alteration-parameter"></a>
### Exercise 22: optimize the alteration parameter {#section-194-exercise-22-optimize-the-alteration-parameter}

Under the hypotheses of Exercise 21, suppose $n>0$, $r\\ge 2$ and $m\\ge n/r$. Optimize $pn-mp^r$ over $0\\le p\\le 1$ and deduce

$\\alpha(H)\\ge \\frac{r-1}{r}n\\left(\\frac{n}{rm}\\right)^{1/(r-1)}$.

What choice is correct when $m<n/r$?

**Solution.** Differentiation gives $n-rmp^{r-1}=0$, so

$p_*=\\left(\\frac{n}{rm}\\right)^{1/(r-1)}$.

The assumption makes $p_*\\le 1$; the second derivative is negative for positive $p$, so this is the maximum. At the stationary point, $mp_*^r=np_*/r$, hence the objective equals $((r-1)/r)np_*$, giving the formula. If $m<n/r$, the formal critical point exceeds one and the concave objective is increasing throughout $[0,1]$; take $p=1$, obtaining $\\alpha(H)\\ge n-m$. This is also the direct guarantee from deleting at most one vertex per edge.

<a id="section-206-exercise-23-certify-a-bounded-dependence-satisfiability"></a>
### Exercise 23: certify a bounded-dependence satisfiability condition {#section-208-exercise-23-certify-a-bounded-dependence-satisfiability}

Consider a Boolean CNF formula in which every clause contains exactly $k$ distinct variables and no clause shares a variable with more than $d$ other clauses. Using the symmetric local lemma, prove that the formula is satisfiable whenever $e(d+1)\\le 2^k$. State the dependency graph precisely.

**Solution.** Assign all variables independently and uniformly. For each clause $C$, let $A_C$ be the event that $C$ is false. Since its $k$ distinct literals prescribe one assignment to their variables, $P(A_C)=2^{-k}$. Join two bad events in the dependency graph exactly when their clauses share a variable. An event depends only on its clause variables and is independent of the collection of all events whose clauses use disjoint variables; its graph degree is at most $d$. The symmetric local lemma states that events of probability at most $p$, each dependent on at most $d$ others, have positive probability of simultaneous avoidance if $ep(d+1)\\le 1$. With $p=2^{-k}$, the displayed hypothesis is exactly that condition. Therefore with positive probability no clause is false, so at least one satisfying assignment exists.

<a id="section-212-exercise-24-derandomize-the-first-moment-alteration"></a>
### Exercise 24: derandomize the first-moment alteration {#section-214-exercise-24-derandomize-the-first-moment-alteration}

For the hypergraph in Exercise 21 with rational $p$, describe a deterministic algorithm that finds a sampled set $S$ satisfying $|S|-X(S)\\ge pn-mp^r$, using only exact rational arithmetic and conditional expectations. Explain how to finish with an independent set.

**Solution.** Let $Z=|S|-X(S)$ under the product distribution. Order the vertices. After fixing membership decisions for a prefix, compute the exact conditional expectations of $Z$ under the two possible decisions for the next vertex. Their $p$-weighted average is the current conditional expectation, so at least one is no smaller; choose such a branch. Membership terms and edge-survival probabilities are products of $p$ and $1-p$, hence rational and exactly computable. Induction preserves $E(Z | decisions)\\ge EZ=pn-mp^r$. After every decision is fixed, conditional expectation is the integer $Z(S)$, so it meets the bound. Finally process all edges contained in $S$, deleting one present vertex from each still-surviving edge. At most $X(S)$ deletions occur, leaving an independent set of size at least $Z(S)$.

<a id="section-218-exercise-25-prove-concentration-from-pairwise-informati"></a>
### Exercise 25: prove concentration from pairwise information {#section-220-exercise-25-prove-concentration-from-pairwise-informati}

Let $X_1,\\ldots ,X_n$ be pairwise independent Bernoulli variables with $P(X_i=1)=p$, and put $X=\\sum_i X_i$. Prove that for every $a>0$,

$P(|X-np|\\ge a)\\le np(1-p)/a^2$.

Why would the same conclusion not follow merely from knowing each marginal distribution?

**Solution.** Pairwise independence gives zero covariance for distinct indices. Hence

$\\operatorname{Var}(X)=\\sum_i \\operatorname{Var}(X_i)+2sum_{i<j}\\operatorname{Cov}(X_i,X_j)=np(1-p)$.

Chebyshev's inequality then yields the claimed bound. Marginals alone do not control covariances: if all $X_i$ equal one common Bernoulli variable $Y$, each has the prescribed marginal but $\\operatorname{Var}(X)=n^2p(1-p)$, a factor $n$ larger. Thus a dependency claim must say enough to justify the probabilistic calculation actually used.

<a id="section-232-chapter-16-extremal-set-compression"></a>
## Chapter 16: Extremal Set Compression {#section-234-chapter-16-extremal-set-compression}

For $1\\le i<j\\le n$, the $(i,j)$-shift of a $k$-set $A$ replaces $j$ by $i$ when $j \\in A$, $i \\notin A$, and the replacement is not already in the family; otherwise it leaves $A$ fixed. Apply it simultaneously to every member of a family and write $S_{ij}(F)$.

<a id="section-236-exercise-26-prove-that-a-shift-preserves-family-size"></a>
### Exercise 26: prove that a shift preserves family size {#section-238-exercise-26-prove-that-a-shift-preserves-family-size}

Prove $|S_{ij}(F)|=|F|$ without assuming that the images of distinct sets are automatically distinct.

**Solution.** Partition the $k$-sets into pairs $\\{C \\cup \\{i\\},C \\cup \\{j\\}\\}$, where $C \\subseteq [n]\\setminus \\{i,j\\}$ has size $k-1$, together with singleton classes for sets containing both or neither of $i,j$. On a two-set class, the shift does one of three things: if neither member is in $F$, it contributes zero before and after; if both are in $F$, the definition prevents replacement and contributes two; if exactly one is present, the output contains exactly one, choosing the member that contains $i$. Singleton classes are fixed. Thus every class contributes the same number before and after, proving cardinality preservation and explicitly resolving possible image collisions.

<a id="section-242-exercise-27-preserve-pairwise-intersection-under-shifti"></a>
### Exercise 27: preserve pairwise intersection under shifting {#section-244-exercise-27-preserve-pairwise-intersection-under-shifti}

Let $F \\subseteq \\binom{[n]}{k}$ be pairwise intersecting. Prove that $S_{ij}(F)$ is pairwise intersecting.

**Solution.** Suppose shifted images $A',B'$ were disjoint. Since their preimages $A,B$ intersect, at least one changed; assume $A'=A-j+i$. Then $i \\in A'$, $j \\notin A'$, while disjointness forces $i \\notin B'$. The only intersection that can have been lost is $j$, so $A \\cap B=\\{j\\}$ and $j \\in B'$. Consequently $B'=B$ contains $j$ but not $i$. Because $A$ was shifted, $A'=A-j+i$ was absent from the original family. Because $B$ did not shift despite containing $j$ and omitting $i$, its mate $B-j+i$ must belong to $F$. But $A$ and $B-j+i$ are disjoint: their former common element $j$ was removed, and $i \\notin A$. This contradicts intersection of $F$. Hence no disjoint shifted pair exists.

<a id="section-248-exercise-28-compare-a-family-with-its-lower-shadow"></a>
### Exercise 28: compare a family with its lower shadow {#section-250-exercise-28-compare-a-family-with-its-lower-shadow}

For $1\\le k<n$ and $F\\subseteq \\binom{[n]}{k}$, let
$\\partial F=\\{B\\in \\binom{[n]}{k-1}:B\\subset A\\text{ for some }A\\in F\\}$. Prove the basic incidence bound

$|\\partial F| \\ge k|F|/(n-k+1)$.

Identify when equality can hold.

**Solution.** Count containment pairs $(B,A)$ with $B \\in \\partial F$, $A \\in F$, and $B \\subset A$. Every $A$ contains exactly $k$ members of its lower shadow, giving $k|F|$ pairs. A fixed $(k-1)$-set $B$ has at most $n-(k-1)=n-k+1$ extensions to a $k$-set, so the count is at most $(n-k+1)|\\partial F|$. Rearrangement proves the inequality. Equality requires every $B \\in \\partial F$ to have all $n-k+1$ extensions in $F$. For $0<k<n$, any nonempty $F$ then propagates through adjacent $k$-sets to all of $\\binom{[n]}{k}$, which indeed gives equality; the empty family also does.

<a id="section-259-exercise-29-prove-the-lym-inequality-by-maximal-chains"></a>
### Exercise 29: prove the LYM inequality by maximal chains {#section-261-exercise-29-prove-the-lym-inequality-by-maximal-chains}

Let $A$ be an antichain in $\\mathcal{P}([n])$. Prove

$\\sum_{A\\in A}\\frac{1}{\\binom{n}{|A|}}\\le 1$.

**Solution.** A maximal chain is determined by a permutation: reveal its elements in that order. There are $n!$ such permutation chains. A fixed $a$-set $A$ lies on $a!(n-a)!$ of them, since its elements must occupy the first $a$ positions in any order and the complement the rest. An antichain meets each maximal chain at most once. Counting pairs $(A,chain)$ therefore gives

$\\sum_{A \\in A} |A|!(n-|A|)! \\le n!$.

Divide by $n!$ and use $|A|!(n-|A|)!/n! = 1/\\binom{n}{|A|}$. The proof depends on incomparability, not merely on the members having similar sizes.

<a id="section-271-exercise-30-derive-sperner-s-bound-and-its-equality-lev"></a>
### Exercise 30: derive Sperner's bound and its equality levels {#section-273-exercise-30-derive-sperner-s-bound-and-its-equality-lev}

Use Exercise 29 to prove $|A|\\le \\binom{n}{\\lfloor n/2\\rfloor}$ for every antichain $A$. Prove that a full level of subsets of size $\\lfloor n/2\\rfloor$ or $\\lceil n/2\\rceil$ attains the bound.

**Solution.** Every binomial coefficient $\\binom{n}{a}$ is at most the central value $M=\\binom{n}{\\lfloor n/2\\rfloor}$. Hence each term in the LYM sum is at least $1/M$, and

$|A|/M \\le \\sum_{A\\in A}\\frac{1}{\\binom{n}{|A|}}\\le 1$.

Thus $|A|\\le M$. All subsets of one fixed size form an antichain, and the two central levels have equal size when $n$ is odd; either central level therefore attains $M$. This establishes the extremal value and explicit equality examples, but not by itself the full classification of all equality families.

<a id="section-281-chapter-17-designs-incidence-and-representability"></a>
## Chapter 17: Designs, Incidence, and Representability {#section-283-chapter-17-designs-incidence-and-representability}

<a id="section-283-exercise-31-derive-both-parameter-equations"></a>
### Exercise 31: derive both parameter equations {#section-285-exercise-31-derive-both-parameter-equations}

In a $2-(v,k,\\lambda)$ design with $b$ blocks, suppose $1<k<v$. Prove that every point lies in the same number $r$ of blocks and that

$r(k-1)=\\lambda(v-1)$ and $bk=vr$.

**Solution.** Fix a point $x$ and count pairs $(y,B)$ with $y\\ne x$ and $\\{x,y\\} \\subseteq B$. Each of the $v-1$ choices of $y$ lies with $x$ in exactly $\\lambda$ blocks, giving $\\lambda(v-1)$. If $x$ lies in $r_x$ blocks, each contributes $k-1$ choices of $y$, so $r_x(k-1)=\\lambda(v-1)$. Thus $r_x$ is independent of $x$; call it $r$. Now count point-block incidences. Summing by blocks gives $bk$, and summing by points gives $vr$, proving the second equation. Consequently both displayed divisibilities are necessary for existence.

<a id="section-291-exercise-32-prove-fisher-s-inequality-by-rank"></a>
### Exercise 32: prove Fisher's inequality by rank {#section-293-exercise-32-prove-fisher-s-inequality-by-rank}

Let a nontrivial $2-(v,k,\\lambda)$ design have $0<\\lambda$, and let $N$ be its $v$-by-$b$ point-block incidence matrix over $\\mathbb{R}$. Prove $b\\ge v$.

**Solution.** Distinct rows of $N$ have inner product $\\lambda$, while each row has squared norm $r$. Hence

$NN^T=(r-\\lambda)I_v+\\lambda J_v$.

The all-ones vector is an eigenvector with eigenvalue $r+\\lambda(v-1)>0$; every vector perpendicular to it has eigenvalue $r-\\lambda$. From $r(k-1)=\\lambda(v-1)$ and $k<v$, we get $r>\\lambda$, so this eigenvalue is also positive. Thus $NN^T$ is nonsingular and has rank $v$. Since $\\operatorname{rank}(NN^T)\\le \\operatorname{rank}(N)\\le b$, it follows that $b\\ge v$. The field $\\mathbb{R}$ matters here: modular rank can drop even when the real matrix is nonsingular.

<a id="section-301-exercise-33-complement-every-block"></a>
### Exercise 33: complement every block {#section-303-exercise-33-complement-every-block}

Let $D$ be a $2-(v,k,\\lambda)$ design with replication number $r$ and $v-k\\ge 2$. Prove that the complementary blocks $V\\setminus B$ form a

$2-(v,v-k,b-2r+\\lambda)$ design.

**Solution.** Every complementary block has size $v-k$. Fix distinct points $x,y$. A complement contains both exactly when the original block contains neither. Of the $b$ blocks, $r$ contain $x$ and $r$ contain $y$; their overlap consists of the $\\lambda$ blocks containing both. Inclusion-exclusion shows that $2r-\\lambda$ blocks contain at least one of $x,y$, so $b-2r+\\lambda$ contain neither. This number is independent of the pair, proving the design parameters. The condition $v-k\\ge 2$ ensures the result fits the usual nondegenerate definition of a 2-design.

<a id="section-309-exercise-34-field-sensitive-rank-of-the-fano-incidence-"></a>
### Exercise 34: field-sensitive rank of the Fano incidence matrix {#section-311-exercise-34-field-sensitive-rank-of-the-fano-incidence-}

Let $N$ be the $7$-by-$7$ point-line incidence matrix of the $2-(7,3,1)$ design. Prove that $N$ is nonsingular over every field of characteristic other than $2$ or $3$. Explain why this conclusion cannot be transferred automatically to those two characteristics.

**Solution.** Here $r=3$ and $\\lambda=1$, so over the integers

$NN^T=2I_7+J_7$.

Its eigenvalues over characteristic zero are $9$ on the all-ones line and $2$ on the six-dimensional perpendicular space; hence $det(NN^T)=9*2^6=576=2^6*3^2$. Since $det(N)^2=576$, $det(N)=+-24$. Modulo any prime other than $2$ or $3$, this determinant remains nonzero, so $N$ is invertible. In characteristics $2$ and $3$ the determinant vanishes, so the rank is strictly below seven; the real-rank argument no longer applies. A separate modular elimination is required to determine the exact rank or any represented matroid.

<a id="section-319-exercise-35-constrain-block-intersections-by-two-moment"></a>
### Exercise 35: constrain block intersections by two moments {#section-321-exercise-35-constrain-block-intersections-by-two-moment}

Fix a block $B_0$ in a $2-(v,k,\\lambda)$ design. Prove

$\\sum_{B\\ne B_0}|B \\cap B_0|=k(r-1)$

and

$\\sum_{B\\ne B_0} C(|B \\cap B_0|,2)=\\binom{k}{2}(\\lambda-1)$.

Deduce an exact formula for the sum of squared intersection sizes.

**Solution.** Count incidences $(x,B)$ with $x \\in B_0 \\cap B$ and $B\\ne B_0$. Each of the $k$ points of $B_0$ lies in $r-1$ other blocks, proving the first identity. For the second, count triples $(\\{x,y\\},B)$ with $\\{x,y\\} \\subseteq B_0 \\cap B$ and $B\\ne B_0$. Each of the $\\binom{k}{2}$ pairs lies in $\\lambda-1$ other blocks. Since $s^2=s+2C(s,2)$, adding the identities yields

$\\sum_{B\\ne B_0}|B \\cap B_0|^2=k(r-1)+k(k-1)(\\lambda-1)$.

These two moments can rule out proposed intersection distributions even when the basic parameter divisibilities pass.

<a id="section-337-chapter-18-exact-axiom-enumeration"></a>
## Chapter 18: Exact Axiom Enumeration {#section-339-chapter-18-exact-axiom-enumeration}

<a id="section-339-exercise-36-reconstruct-a-matroid-from-an-integer-rank-"></a>
### Exercise 36: reconstruct a matroid from an integer rank table {#section-341-exercise-36-reconstruct-a-matroid-from-an-integer-rank-}

Let $E$ be finite and let $\\rho:\\mathcal{P}(E)\\to\\mathbb{Z}$ satisfy $\\rho(\\varnothing)=0$, $\\rho(A)\\le \\rho(A+e)\\le \\rho(A)+1$, and rank submodularity. Define $I=\\{A:\\rho(A)=|A|\\}$. Prove that $(E,I)$ is a matroid and has rank function $\\rho$.

**Solution.** The increment rule implies $0\\le \\rho(A)\\le |A|$ and monotonicity. If $A$ is independent and $B \\subseteq A$, submodularity in diminishing-returns form says the increments along a chain to $A$ cannot exceed corresponding earlier increments. Since the total increase to $A$ is $|A|$, every increment is one, including those along a chain to $B$; hence $\\rho(B)=|B|$, proving heredity. If independent $I,J$ satisfy $|I|<|J|$ and no $e \\in J\\setminus I$ raises $\\rho(I)$, repeated diminishing returns gives $\\rho(I \\cup J)=\\rho(I)$. But monotonicity gives $\\rho(I \\cup J)\\ge \\rho(J)=|J|>|I|=\\rho(I)$, contradiction. Thus augmentation holds. Finally, greedily add rank-raising elements within any $A$; the process ends with an independent subset of size $\\rho(A)$, while every independent subset of $A$ has size at most $\\rho(A)$. So the induced matroid rank is exactly $\\rho$.

<a id="section-345-exercise-37-verify-dual-rank-and-involution-exhaustivel"></a>
### Exercise 37: verify dual rank and involution exhaustively {#section-347-exercise-37-verify-dual-rank-and-involution-exhaustivel}

Given an exact rank table $r$ on an $n$-element ground set, define $r^{*}(A)=|A|-r(E)+r(E\\setminus A)$. Prove algebraically that applying this transform twice returns $r$. List the finite checks an implementation must perform before calling the result a certified dual matroid.

**Solution.** Since $r^{*}(E)=n-r(E)+r(\\varnothing)=n-r(E)$,

$r^{**}(A)=|A|-r^{*}(E)+r^{*}(E\\setminus A)$

$=|A|-(n-r(E))+(n-|A|)-r(E)+r(A)=r(A)$.

An implementation should first verify that the input table has one exact integer entry for every one of the $2^n$ masks and satisfies normalization, bounds, monotonicity (or one-element increments), and submodularity. It should compute every dual entry with exact integers, independently check the same rank axioms for $r*$, compare dual bases with complements of primal bases, and compare the twice-dual table entrywise with the original. Recording the mask order and first failing witness makes rejection independently auditable.

<a id="section-357-exercise-38-make-a-rejection-certificate-canonical"></a>
### Exercise 38: make a rejection certificate canonical {#section-359-exercise-38-make-a-rejection-certificate-canonical}

Suppose a hereditary family $F$ fails augmentation. Define a canonical certificate using bit-mask order and prove that two deterministic implementations following your specification return the same witness.

**Solution.** Encode subsets as nonnegative integer masks. Form the finite set $W$ of ordered pairs $(I,J)$ in $F^2$ such that $popcount(I)<popcount(J)$ and $I \\cup \\{e\\}$ is absent from $F$ for every bit $e$ of \`J & ~I\`. Order witnesses lexicographically by the tuple

$(popcount(J)-popcount(I), popcount(I), I, J)$

and return its least member, together with the increasing list of candidate bits and the Boolean membership result for every augmentation. Failure makes $W$ nonempty; finiteness and totality of lexicographic order give a unique least tuple. Any implementation that builds the mathematically specified $W$ and uses that order must therefore return the same masks, regardless of hash-table iteration order.

<a id="section-367-exercise-39-recognize-a-matroid-from-candidate-bases"></a>
### Exercise 39: recognize a matroid from candidate bases {#section-369-exercise-39-recognize-a-matroid-from-candidate-bases}

Let $B$ be a nonempty family of subsets of $E$. Prove that it is the set of bases of a matroid exactly when all members have one common size and, for every $B,D \\in B$ and $e \\in B\\setminus D$, some $f \\in D\\setminus B$ has $B-e+f \\in B$. Give an exact recognition procedure whose witnesses are independently checkable.

**Solution.** Necessity is the basis-exchange theorem. Conversely, define $I$ to be all subsets of members of $B$. Heredity and nonemptiness are immediate. The exchange-matching lemma, proved from the displayed basis axiom by Hall's theorem, says that for candidate bases $B,D$ there is a bijection $\\varphi:B\\setminus D \\to D\\setminus B$ such that $B-e+\\varphi(e)$ is a candidate basis for every $e$.

Suppose $I,J \\in I$, $|I|<|J|$, and no member of $J\\setminus I$ augments $I$. Choose candidate bases $B,D$ containing $I,J$, respectively. The supposition implies $B \\cap (J\\setminus I)=\\varnothing$, because any such element together with $I$ would be a subset of $B$. Since $I \\subseteq B$, we therefore have $B \\cap J=I \\cap J$, and hence $|J\\setminus B|=|J\\setminus I|$. For every $f \\in J\\setminus B$, the inverse-matched element $e=\\varphi^{-1}(f)$ must lie in $I$; otherwise $B-e+f$ would be a candidate basis containing $I+f$. It also lies outside $D$, while $D$ contains $J$, so $e \\in I\\setminus J$. Distinct $f$ have distinct preimages. But $|J\\setminus B|=|J\\setminus I|>|I\\setminus J|$, making such an injection impossible. Thus augmentation holds. Equal cardinality ensures that no member of $B$ properly contains another and that the maximal sets of $I$ are exactly $B$. A recognizer first rejects unequal sizes with two displayed sets. It then scans ordered triples $(B,D,e)$ in canonical mask order and either reports a valid $f$ or returns the triple plus the complete list showing every candidate replacement absent. Acceptance records the family digest and common rank.

<a id="section-375-exercise-40-use-burnside-s-lemma-as-an-orbit-checksum"></a>
### Exercise 40: use Burnside's lemma as an orbit checksum {#section-377-exercise-40-use-burnside-s-lemma-as-an-orbit-checksum}

Let $X$ be a finite list of labeled set systems on $[n]$, closed under relabeling by $S_n$. Prove that the number of isomorphism classes is

$(1/n!) \\sum_{\\pi \\in S_n} |Fix_X(\\pi)|$.

Explain how this supplies an independent checksum for canonical-label enumeration.

**Solution.** Count pairs $(\\pi,F)$ with $\\pi(F)=F$. Summing first over permutations gives the numerator. Summing over systems gives $\\sum_F |Stab(F)|$. On an orbit $O$, orbit-stabilizer says every member has stabilizer size $n!/|O|$, so that orbit contributes $|O| n!/|O|=n!$. Dividing by $n!$ therefore counts orbits. A canonical-label program may independently count distinct canonical representatives. Agreement with the Burnside integer, computed by enumerating fixed systems for every permutation (or conjugacy class with its multiplicity), checks a different decomposition of the same labeled domain. Disagreement detects incomplete generation, a relabeling bug, or an incorrect canonicalizer, though agreement alone does not prove all components correct.

<a id="section-385-chapter-19-structural-investigations"></a>
## Chapter 19: Structural Investigations {#section-387-chapter-19-structural-investigations}

<a id="section-387-exercise-41-build-the-complete-two-element-matroid-atla"></a>
### Exercise 41: build the complete two-element matroid atlas {#section-389-exercise-41-build-the-complete-two-element-matroid-atla}

Classify, up to relabeling, every matroid on a two-element ground set. For each class give its rank and bases, and justify completeness without appealing to a database.

**Solution.** Let $E=\\{a,b\\}$. Rank can be zero, one, or two. At rank zero both elements are loops and the sole basis is \`empty\`. At rank two, $E$ is the sole basis and both elements are coloops. At rank one, either exactly one element is a loop, giving (up to relabeling) bases $\\{\\{a\\}\\}$, or neither is a loop, giving bases $\\{\\{a\\},\\{b\\}\\}$ and a parallel pair. These four systems satisfy basis exchange. They are nonisomorphic because rank and number of loops are isomorphism invariants. Every rank-zero or rank-two system is forced, while at rank one the nonloops are precisely the singleton bases and their number is one or two. Thus the list is exhaustive. A reproducible atlas would encode the bases as masks: respectively $\\{0\\}$, $\\{1\\}$, $\\{1,2\\}$, and $\\{3\\}$ after choosing the displayed labeling.

<a id="section-393-exercise-42-cross-check-a-graphic-dual-certificate"></a>
### Exercise 42: cross-check a graphic dual certificate {#section-395-exercise-42-cross-check-a-graphic-dual-certificate}

Let $G$ be a 4-cycle with edges $e_1,e_2,e_3,e_4$ in cyclic order. Compute the circuits and cocircuits of its cycle matroid $M(G)$, its rank, and the bases of $M(G)^{*}$. Verify directly that no circuit and cocircuit meet in exactly one element.

**Solution.** The only graph cycle is $E$, so the sole circuit is $\\{e_1,e_2,e_3,e_4\\}$. Removing any two edges disconnects the cycle, whereas removing a single edge leaves a connected path. Thus all six two-element edge sets are the minimal edge cuts (bonds) and are the cocircuits. For cyclic vertices $v_1,v_2,v_3,v_4$ with $e_i=v_iv_{i+1}$ (indices modulo four), the opposite pairs are cuts as well: $\\delta(\\{v_2,v_3\\})=\\{e_1,e_3\\}$ and $\\delta(\\{v_3,v_4\\})=\\{e_2,e_4\\}$. The four adjacent pairs isolate individual vertices. The connected graph has rank $4-1=3$; every three-edge subset is a spanning tree and hence a basis. Dual bases are their complements, so all four singletons are bases of $M(G)^{*}$, which is $U_{1,4}$. The unique circuit meets every cocircuit in two elements, never one. These independently computed primal circuits, graph bonds, and complementary bases form three consistent views of the same dual certificate.

<a id="section-399-exercise-43-audit-a-representation-over-two-fields"></a>
### Exercise 43: audit a representation over two fields {#section-401-exercise-43-audit-a-representation-over-two-fields}

Let a matrix have labeled columns

$v_1=(1,0)^T$, $v_2=(0,1)^T$, $v_3=(1,1)^T$, $v_4=(1,-1)^T$.

Determine all circuits of its column matroid over $\\mathbb{Q}$ and over $\\mathbb{F}_2$. Exhibit the exact calculation responsible for the difference.

**Solution.** Over $\\mathbb{Q}$, every pair is independent: the only possibly doubtful pair is $\\{v_3,v_4\\}$, whose determinant is $-2\\ne 0$. The matrix has rank two, so every triple is a minimal dependent set. Thus the circuits are all four 3-subsets. Over $\\mathbb{F}_2$, $-1=1$, so $v_3=v_4$ and $\\{3,4\\}$ is a 2-circuit. The triples $\\{1,2,3\\}$ and $\\{1,2,4\\}$ remain minimal circuits. A triple containing both 3 and 4 is dependent but not minimal because it contains $\\{3,4\\}$. Hence the $\\mathbb{F}_2$ circuits are $\\{3,4\\}$, $\\{1,2,3\\}$, and $\\{1,2,4\\}$. The determinant $\\det[v_3\\ v_4]=-2$ is nonzero over $\\mathbb{Q}$ but zero modulo two, exactly locating the field-sensitive change.

<a id="section-409-exercise-44-run-and-verify-a-concrete-compression"></a>
### Exercise 44: run and verify a concrete compression {#section-411-exercise-44-run-and-verify-a-concrete-compression}

On $\\binom{[5]}{3}$, let

$F=\\{145,245,345,123\\}$,

where $145$ abbreviates $\\{1,4,5\\}$. Apply the $(1,4)$-shift and list the resulting family. Verify family-size preservation and determine whether pairwise intersection is preserved in this instance.

**Solution.** The set $145$ contains both 1 and 4 and is fixed. The set $245$ contains 4 but not 1; its mate is $125$, absent from $F$, so it shifts to $125$. Similarly $345$ shifts to $135$. The set $123$ contains 1 but not 4 and is fixed. Thus

$S_{1,4}(F)=\\{145,125,135,123\\}$.

Both families have four members. The original is pairwise intersecting: the first three meet in $\\{4,5\\}$ pairwise, and $123$ meets them in 1, 2, and 3 respectively. The shifted family is also pairwise intersecting; indeed every member contains 1. The explicit output illustrates canonicalization, while Exercise 27 supplies the theorem that the observed preservation is not accidental.

<a id="section-423-exercise-45-distinguish-minimal-counterexamples-from-mi"></a>
### Exercise 45: distinguish minimal counterexamples from minor-minimal ones {#section-425-exercise-45-distinguish-minimal-counterexamples-from-mi}

Consider the property $P$: “every circuit has size at least four.” Show that $U_{3,4}$ has $P$ but a contraction minor does not. Explain why a search for excluded minors for $P$ is therefore ill-posed in the usual sense.

**Solution.** The uniform matroid $U_{3,4}$ has one circuit, the four-element ground set, so it has $P$. Contract any element $e$. The contraction is $U_{2,3}$, whose three-element ground set is a circuit; it fails $P$. Hence $P$ is not closed under minors. An excluded-minor characterization describes a minor-closed class: if membership could be tested by forbidding a collection of minors, every minor of a member would remain a member. Our example contradicts that prerequisite. One may still search for smallest counterexamples by ground-set size or for minimal failures under a specified order, but calling them excluded minors would assert a closure theorem that is false.

<a id="section-429-exercise-46-synthesize-and-break-a-greedy-rule"></a>
### Exercise 46: synthesize and break a greedy rule {#section-431-exercise-46-synthesize-and-break-a-greedy-rule}

The ground set is the three edges $a,b,c$ of a path in that order. Feasible sets are matchings. Give distinct positive integer weights for which descending greedy returns $\\{b\\}$ although $\\{a,c\\}$ is optimal. Provide both an augmentation witness and an exact objective certificate.

**Solution.** Set $w(b)=5$, $w(a)=3$, and $w(c)=3$ would have a tie, so use $w(a)=4$, $w(c)=3$, $w(b)=6$. Descending greedy accepts $b$ first and rejects both adjacent outer edges, returning weight six. The matching $\\{a,c\\}$ has weight seven and is the exhaustive optimum: the feasible sets are \`empty\`, the three singletons, and $\\{a,c\\}$. Structurally, $I=\\{b\\}$ and $J=\\{a,c\\}$ are feasible with $|I|<|J|$, but neither $I+a$ nor $I+c$ is a matching. This augmentation witness explains why the universal matroid greedy theorem is unavailable, while the exact feasible-set listing certifies the numerical failure.

<a id="section-435-chapter-20-theorem-index-and-full-synthesis"></a>
## Chapter 20: Theorem Index and Full Synthesis {#section-437-chapter-20-theorem-index-and-full-synthesis}

<a id="section-437-exercise-47-an-intersection-of-matroids-need-not-be-a-m"></a>
### Exercise 47: an intersection of matroids need not be a matroid {#section-439-exercise-47-an-intersection-of-matroids-need-not-be-a-m}

Represent matchings in a bipartite graph as the intersection of two partition matroids, one enforcing degree at most one at each left vertex and the other at each right vertex. Use the three-edge path to prove that an intersection of two matroids need not be a matroid.

**Solution.** Partition the edge set by common left endpoint and impose capacity one in each block; this is a partition matroid $M_L$. Do the same at right endpoints to obtain $M_R$. An edge set is independent in both exactly when no two selected edges share either endpoint, namely when it is a matching. For the path edges $a,b,c$, the sets $\\{b\\}$ and $\\{a,c\\}$ are common independent sets, but neither $a$ nor $c$ augments $\\{b\\}$ while preserving both constraints. Thus their intersection fails augmentation. Each constituent system is a matroid, yet simultaneous feasibility is not generally one; this explains both the richer matching structure and the failure of one-pass weight greedy.

<a id="section-443-exercise-48-connect-a-design-to-a-matroid-representatio"></a>
### Exercise 48: connect a design to a matroid representation boundary {#section-445-exercise-48-connect-a-design-to-a-matroid-representatio}

Take the seven nonzero vectors of $F_2^3$ as columns. Prove that their 3-element circuits are exactly the seven triples $\\{x,y,x+y\\}$ with distinct nonzero $x,y$. Show that these triples form a $2-(7,3,1)$ design.

**Solution.** Two distinct nonzero binary vectors are linearly independent, since the only nonzero scalar is one. Three distinct columns are dependent exactly when their sum is zero: in rank at most three, a dependence with all three coefficients nonzero must have coefficients one, so the third vector is $x+y$. Every such triple is minimal because its pairs are independent. Given distinct points $x,y$, their unique circuit triple is $\\{x,y,x+y\\}$; $x+y$ is nonzero and differs from both. Thus every pair lies in exactly one of these 3-subsets. There are $\\binom{7}{2}/\\binom{3}{2}=7$ blocks, and the circuit family is a $2-(7,3,1)$ design. This is a representation theorem over $\\mathbb{F}_2$; it does not assert the same circuit set for arbitrary characteristic.

<a id="section-449-exercise-49-join-alteration-to-exact-certification"></a>
### Exercise 49: join alteration to exact certification {#section-451-exercise-49-join-alteration-to-exact-certification}

Let $G$ be a graph with $n$ vertices and $m$ edges, and let $p \\in Q \\cap [0,1]$. Sample vertices independently with probability $p$. Prove the existence of an independent set of size at least $pn-mp^2$, and specify an exact certificate that a program could emit for the final set.

**Solution.** This is Exercise 21 for the 2-uniform hypergraph of graph edges. If $S$ is sampled and $X$ counts edges induced by $S$, then $E(|S|-X)=pn-mp^2$. Delete one endpoint of each still-present induced edge; at most $X$ deletions yield an independent set of the stated size for some outcome. A program should emit the vertex order, rational $p$, sampled mask $S$, the complete ordered list of induced edges, each deletion with the edge it destroys, and the final mask $I$. A checker verifies $I \\subseteq S$, tests every graph edge has at most one endpoint in $I$, counts the deletions, and checks the exact rational inequality $|I|\\ge pn-mp^2$. The random proof establishes existence; the mask-and-ledger output certifies one realized witness.

<a id="section-455-exercise-50-one-five-cycle-answers-two-extremal-questio"></a>
### Exercise 50: one five-cycle answers two extremal questions {#section-457-exercise-50-one-five-cycle-answers-two-extremal-questio}

Let $G=C_5$. Audit the following proposed synthesis: “$G$ is a maximum-edge triangle-free graph on five vertices, and its red-edge/blue-nonedge coloring avoids a monochromatic triangle.” Decide each clause, correct any false terminology, and explain why the two extremal questions are distinct.

**Solution.** The triangle-free edge bound gives $e(G)\\le \\lfloor 5^2/4\\rfloor=6$, so the five-cycle is not maximum: it has only five edges. The premise therefore contains a trap. What is true is that $C_5$ is maximal triangle-free—adding either missing diagonal creates a triangle—and its complement is another 5-cycle. Hence neither red graph nor blue complement contains a triangle, giving the lower-bound witness $R(3,3)>5$. “Maximum” concerns largest cardinality among all feasible graphs, whereas “maximal” means no single edge can be added. The exercise demonstrates that a Ramsey witness may be locally saturated without being a Turán extremizer; the correct maximum triangle-free graph on five vertices is $K_{2,3}$ with six edges.

<a id="section-461-exercise-51-factor-bases-objectives-and-duals-over-a-di"></a>
### Exercise 51: factor bases, objectives, and duals over a direct sum {#section-463-exercise-51-factor-bases-objectives-and-duals-over-a-di}

Let $M=M_1\\oplus M_2$ on disjoint grounds $E_1,E_2$, and let $w:E_1 \\cup E_2 \\to \\mathbb{R}$. Prove that its bases are exactly $B_1 \\cup B_2$ with $B_i$ a basis of $M_i$, that the maximum basis weight is the sum of the two component optima, and that $M^{*}=M_{1}^{*}\\oplus M_{2}^{*}$.

**Solution.** Independence in a direct sum is componentwise. A maximal independent set must be maximal in each component, so it is the union of component bases; conversely such a union is plainly maximal. Additivity of weights gives

$\\max_{B basis M}w(B)=\\max_{B_1,B_2}(w(B_1)+w(B_2))=\\max_{B_1}w(B_1)+\\max_{B_2}w(B_2)$.

The complement of $B_1 \\cup B_2$ in the disjoint union is $(E_1\\setminus B_1) \\cup (E_2\\setminus B_2)$. These are exactly unions of bases of $M_{1}^{*}$ and $M_{2}^{*}$, so the basis definition of duality proves the final identity. This provides a structural theorem, an optimization decomposition, and a dual cross-check from one product description.

<a id="section-471-exercise-52-design-a-complete-claim-to-certificate-work"></a>
### Exercise 52: design a complete claim-to-certificate workflow {#section-473-exercise-52-design-a-complete-claim-to-certificate-work}

A researcher claims: “For every integer weighting of a supplied hereditary family $F \\subseteq \\mathcal{P}([n])$, descending greedy, skipping negative-weight elements, finds a maximum-weight independent set.” Give a finite audit that either certifies the structural reason for the claim or returns a human-checkable counterexample. Your answer must not attempt infinitely many weight vectors.

**Solution.** First verify the exact domain: masks $0,\\ldots ,2^n-1$, a duplicate-free membership list, $\\varnothing \\in F$, and immediate-deletion heredity. If heredity fails, return $X \\subset Y$ with $Y \\in F$, $X \\notin F$; the advertised object is already misdescribed. Next test augmentation for every ordered pair $I,J \\in F$ with $|I|<|J|$. If all pass, the family is a matroid. Emit the full deterministic check digest plus, for every pair, a successful augmenting element; the matroid greedy theorem then proves the claim for every integer weighting, with the independent-set algorithm skipping negative elements.

If augmentation fails, emit canonical masks $I,J$ and the membership results for all $I+e$, $e \\in J\\setminus I$. Turn this structural witness into finite integer weights. Let $p=|I\\setminus J|$, $q=|J\\setminus I|$, so $q>p$, and put $L=n+1$. Give every element of $I$ weight $L+1$, every element of $J\\setminus I$ weight $L$, and every outsider weight $-1$. Greedy processes and accepts all of $I$ first, rejects every member of $J\\setminus I$, and skips the negative outsiders. Common elements cancel, while

$w(J)-w(I)=qL-p(L+1)=(q-p)L-p>0$,

because $q-p\\ge 1$ and $p\\le n<L$. Emit the ordered greedy trace and compare its exact integer total with $w(J)$. Thus acceptance rests on a structural theorem, while rejection consists of masks, failed augmentations, weights, a trace, and a better feasible set—all checkable without trusting the search program.

<a id="section-483-completion-note"></a>
## Completion note {#section-485-completion-note}

These fifty-two solutions deliberately alternate theorem proof, counterexample diagnosis, exact calculation, and certificate design. They complete the second half of the volume's exercise expansion while preserving the boundary between a finite audit, a structural theorem, and a production claim.

<a id="section-487-source-and-verification-note"></a>
## Sources {#section-489-source-and-verification-note}

The local-dependence and compression exercises use source routes including Alon–Spencer, *The Probabilistic Method*, 4th ed. (2016), and Frankl–Tokushige, *Extremal Problems for Finite Sets* (2018). Exact theorem/page locators matching these exercise formulations remain unverified.
`;export{e as default};