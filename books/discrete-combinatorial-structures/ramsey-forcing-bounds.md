
# Ramsey Forcing, Recursive Bounds, and Constructions {#section-1-ramsey-forcing-recursive-bounds-and-constructions}

Ramsey theory turns a qualitative pigeonhole principle into a quantitative problem. If every pair of people is labeled acquaintance or stranger, how large must the group be before a homogeneous subgroup is forced? The finite theorem says that some threshold exists. The more delicate work is to control that threshold, identify the quantifiers in a coloring statement, and distinguish an upper-bound proof that forces structure from a lower-bound construction that avoids it.

This chapter develops those proof contracts for graph Ramsey numbers. It proves the fundamental recursion, extracts explicit bounds, determines the first nontrivial diagonal value, and uses random coloring to certify lower bounds. It then explains how clique and independence parameters translate Ramsey information into ordinary graph language. The methods are elementary, but the distinctions they enforce—existence versus construction, strict versus weak inequalities, and local choices versus a global homogeneous set—remain essential in more advanced Ramsey problems.

<a id="section-5-prerequisites-and-conventions"></a>
## Prerequisites and conventions {#section-7-prerequisites-and-conventions}

We assume finite simple graphs, complements, binomial coefficients, mathematical induction, and elementary probability including expectation and the union bound. Write $K_n$ for the complete graph on $n$ vertices. A red-blue coloring assigns exactly one of the two colors to every edge. A set of vertices is **red-complete** if all pairs inside it are red, and **blue-complete** if all pairs inside it are blue.

For integers $s,t\ge 1$, the Ramsey number $R(s,t)$ is the least $N$ such that every red-blue coloring of $K_N$ contains either a red $K_s$ or a blue $K_t$. Equivalently, every graph on $N$ vertices contains a clique of size $s$ or an independent set of size $t$: regard graph edges as red and nonedges as blue. The order of the two parameters is immaterial, since swapping colors proves $R(s,t)=R(t,s)$.

The definition contains two proof obligations. To prove $R(s,t)\le N$, analyze **every** coloring of $K_N$. To prove $R(s,t)>n$, exhibit **one** coloring of $K_n$ with neither forbidden configuration. A probability argument can establish that such a coloring exists without displaying it.

<a id="section-13-1-boundary-values-anchor-every-recurrence"></a>
## 1. Boundary values anchor every recurrence {#section-15-1-boundary-values-anchor-every-recurrence}

For $t\ge 1$,

$R(1,t)=R(t,1)=1$.

Every one-vertex set is a monochromatic $K_1$, independent of edge colors. For $s,t\ge 2$,

$R(2,t)=t$ and $R(s,2)=s$.

Indeed, in a coloring of $K_t$, either some edge is red, giving a red $K_2$, or every edge is blue, giving a blue $K_t$. Conversely, color every edge of $K_{t-1}$ blue. There is no red edge and too few vertices for a blue $K_t$.

These boundary values are not cosmetic. A recursion without base cases proves neither finiteness nor a numerical result. They also reveal that $R(s,t)$ is monotone in each parameter: increasing a demanded clique size cannot make the threshold smaller.

<a id="section-27-worked-example-1-an-asymmetric-boundary"></a>
### Worked example 1: an asymmetric boundary {#section-29-worked-example-1-an-asymmetric-boundary}

Compute $R(2,5)$. In any coloring of $K_5$, the presence of a red edge finishes the red alternative. If there is no red edge, all ten edges are blue and the five vertices form a blue $K_5$. Thus $R(2,5)\le 5$. On four vertices, the all-blue coloring contains neither a red $K_2$ nor a blue $K_5$, so $R(2,5)>4$. Therefore $R(2,5)=5$.

Notice the lower witness uses $K_4$, not $K_5$. Equality at a Ramsey threshold always combines an upper proof on $N$ vertices with an avoiding coloring on $N-1$ vertices.

<a id="section-33-2-the-neighborhood-split-gives-the-fundamental-recursio"></a>
## 2. The neighborhood split gives the fundamental recursion {#section-35-2-the-neighborhood-split-gives-the-fundamental-recursio}

**Theorem 3.1 (Ramsey recursion).** For $s,t\ge 2$,

$R(s,t)\le R(s-1,t)+R(s,t-1)$.

**Proof.** Set $a=R(s-1,t)$ and $b=R(s,t-1)$, and consider an arbitrary coloring of $K_{a+b}$. Choose a vertex $v$. Among the other $a+b-1$ vertices, let $A$ be joined to $v$ by red edges and $B$ by blue edges.

It is impossible that both $|A|\le a-1$ and $|B|\le b-1$, because then

$|A|+|B|\le a+b-2$,

whereas $A$ and $B$ partition $a+b-1$ vertices. Hence either $|A|\ge a$ or $|B|\ge b$.

If $|A|\ge a$, apply the definition of $R(s-1,t)$ to any $a$ vertices of $A$. A blue $K_t$ already finishes. Otherwise those vertices contain a red $K_{s-1}$, which together with $v$ forms a red $K_s$, because every edge from $v$ into $A$ is red. The case $|B|\ge b$ is symmetric: obtain a red $K_s$, or extend a blue $K_{t-1}$ by $v$. Thus every coloring has one of the desired configurations. ∎

The proof is a local-to-global forcing argument. It does not claim that the red neighborhood and blue neighborhood are internally monochromatic. It uses a Ramsey theorem of smaller parameter inside one sufficiently large neighborhood.

A slightly sharper version is available when both summands on the right are even:

$R(s,t)\le R(s-1,t)+R(s,t-1)-1$.

To justify it, suppose a coloring on $a+b-1$ vertices avoids both targets. The same neighborhood argument forces every vertex to have red degree at most $a-1$ and blue degree at most $b-1$; since the two degrees sum to $a+b-2$, both are equalities. If $a$ and $b$ are even, every red degree is the odd number $a-1$. But a graph cannot have an odd number $a+b-1$ of vertices all of odd degree, because the sum of degrees is even. This parity improvement requires both evenness hypotheses and should not be inserted into the basic recursion unconditionally.

<a id="section-57-worked-example-2-a-recursive-upper-bound"></a>
### Worked example 2: a recursive upper bound {#section-59-worked-example-2-a-recursive-upper-bound}

The boundary values give $R(2,4)=4$ and $R(3,3)\le 6$, so

$R(3,4)\le R(2,4)+R(3,3)\le 4+6=10$.

This proves a threshold no larger than ten. It does not prove equality: a matching lower construction on nine vertices would still be necessary, and the recursion may have slack.

<a id="section-65-3-iteration-yields-a-binomial-upper-bound"></a>
## 3. Iteration yields a binomial upper bound {#section-67-3-iteration-yields-a-binomial-upper-bound}

**Theorem 3.2.** For $s,t\ge 2$,

$R(s,t)\le C(s+t-2,s-1)$.

**Proof.** Induct on $s+t$. The result is exact on the boundary $s=2$ or $t=2$, since $\binom{t}{t-1}=t$ and $\binom{s}{s-1}=s$. For $s,t\ge 3$, the recursion and induction give

$R(s,t)\le C(s+t-3,s-2)+C(s+t-3,s-1)$

$=C(s+t-2,s-1)$

by Pascal's identity. ∎

On the diagonal,

$R(k,k)\le \binom{2k-2}{k-1}<4^{k-1}$ for $k\ge 2$.

The final strict inequality follows because $\binom{2m}{m}$ is one positive term in the sum $\sum_j \binom{2m}{j}=4^m$, and there are other positive terms when $m\ge 1$. This exponential estimate is coarse but explicit.

<a id="section-85-worked-example-3-keeping-the-exact-binomial-coefficient"></a>
### Worked example 3: keeping the exact binomial coefficient {#section-87-worked-example-3-keeping-the-exact-binomial-coefficient}

For $(s,t)=(4,5)$, the theorem gives

$R(4,5)\le \binom{7}{3}=35$.

Replacing the binomial coefficient immediately by $2^7=128$ would remain valid but discard substantial information. The binomial form also records the asymmetry: it counts lattice paths with three moves of one kind and four of the other, mirroring repeated decrements of $s$ and $t$ in the recursion.

<a id="section-93-4-the-exact-six-vertex-theorem"></a>
## 4. The exact six-vertex theorem {#section-95-4-the-exact-six-vertex-theorem}

**Theorem 3.3.** $R(3,3)=6$.

**Upper bound.** In a coloring of $K_6$, choose a vertex $v$. Among its five incident edges, at least three have the same color. Suppose $va,vb,vc$ are red. If any of $ab,ac,bc$ is red, that edge and $v$ form a red triangle. If none is red, then $a,b,c$ form a blue triangle. The blue-majority case is symmetric. Thus $R(3,3)\le 6$.

**Lower bound.** On five vertices arranged cyclically, color the five cycle edges red and the other five edges blue. The red graph is a 5-cycle and has no triangle. Its complement is also a 5-cycle: the blue edges join vertices at cyclic distance two, so the blue graph has no triangle. Therefore an avoiding coloring exists on five vertices and $R(3,3)>5$. Together the bounds prove equality. ∎

The lower witness is often described only by a picture. A text certificate is equally short: label vertices by residues modulo five; color $\{i,j\}$ red when $i-j$ is congruent to $1$ or $-1$, and blue when the difference is congruent to $2$ or $-2$. Any three vertices include two successive cyclic gaps whose sum is at most four; direct inspection of gap patterns shows neither color supplies all three pairs. The complement-is-a-cycle observation is the cleaner certificate.

<a id="section-103-5-graph-parameters-package-the-same-theorem"></a>
## 5. Graph parameters package the same theorem {#section-105-5-graph-parameters-package-the-same-theorem}

For a graph $G$, let $\omega(G)$ be its clique number and $\alpha(G)$ its independence number. The coloring equivalence says

$|V(G)|\ge R(s,t) \Longrightarrow \omega(G)\ge s \text{ or } \alpha(G)\ge t$.

Equivalently,

$\omega(G)<s \text{ and } \alpha(G)<t \Longrightarrow |V(G)|<R(s,t)$.

Contraposition matters: replacing either strict inequality with a weak one changes the claim. Since $\alpha(G)=\omega(\overline{G})$, diagonal Ramsey theory says every sufficiently large graph or its complement has a large clique.

The recursion has a graph proof. Choose $v$ and partition the remaining vertices into its neighborhood $N(v)$ and nonneighborhood. If $N(v)$ has at least $R(s-1,t)$ vertices, it contains an independent $t$-set or an $(s-1)$-clique that extends with $v$. If the nonneighborhood has at least $R(s,t-1)$ vertices, it contains an $s$-clique or an independent $(t-1)$-set that extends with $v$.

<a id="section-117-worked-example-4-a-guaranteed-set-among-ten-vertices"></a>
### Worked example 4: a guaranteed set among ten vertices {#section-119-worked-example-4-a-guaranteed-set-among-ten-vertices}

Since the recursion gives $R(3,4)\le 10$, every graph on ten vertices has either a triangle or an independent set of size four. This statement does not say every ten-vertex graph has both. The complete graph has many triangles and independence number one; the empty graph has no triangle and independence number ten. Ramsey forcing is disjunctive.

<a id="section-121-6-random-coloring-proves-lower-bounds-by-the-first-mome"></a>
## 6. Random coloring proves lower bounds by the first moment {#section-123-6-random-coloring-proves-lower-bounds-by-the-first-mome}

To find a coloring with no monochromatic $K_k$, color every edge of $K_n$ independently red or blue, each with probability $1/2$. For each $k$-vertex set $S$, let $I_S$ be the indicator that all edges inside $S$ have one color. Since $K_k$ has $\binom{k}{2}$ edges,

$P(I_S=1)=2(1/2)^{\binom{k}{2}}=2^{1-\binom{k}{2}}$.

Let $X=\sum_S I_S$ count monochromatic $K_k$ vertex sets. Linearity of expectation gives

$E[X]=\binom{n}{k}2^{1-\binom{k}{2}}$.

The indicators are generally dependent when their vertex sets overlap substantially, but linearity does not require their independence. In fact, two such indicators are independent when the vertex sets share at most two vertices; sharing exactly two means sharing one edge, and the two possible common colors make the joint probability equal the product. Sharing three or more vertices produces several common edges and generally destroys that equality. Larger collections can also have mutual dependencies not visible from a single pair.

**First-moment lower-bound criterion.** If

$\binom{n}{k}2^{1-\binom{k}{2}}<1$,

then $R(k,k)>n$.

**Proof.** If every coloring had at least one monochromatic $K_k$, then the integer-valued random variable $X$ would satisfy $X\ge 1$ for every outcome and hence $E[X]\ge 1$. The strict inequality contradicts this. Therefore some outcome has $X=0$, which is an avoiding coloring on $n$ vertices. ∎

Strictness is the safe contract. From $E[X]\le 1$ alone one cannot conclude an outcome with $X=0$: a random variable identically equal to one is a counterexample.

Using $\binom{n}{k}\le n^k/k!$ yields the checkable sufficient condition

$(n^k/k!)2^{1-\binom{k}{2}}<1$.

Using the still coarser $\binom{n}{k}\le n^k$ is sometimes convenient, but every relaxation weakens the range. The calculation provides an existence certificate, not an efficient algorithm for locating the coloring.

<a id="section-149-worked-example-5-a-numerical-probabilistic-certificate"></a>
### Worked example 5: a numerical probabilistic certificate {#section-151-worked-example-5-a-numerical-probabilistic-certificate}

Take $k=5$ and $n=8$. There are $\binom{8}{5}=56$ five-vertex sets, and any fixed one is monochromatic with probability $2^{1-10}=1/512$. Hence

$E[X]=56/512=7/64<1$.

Some two-coloring of $K_8$ has no monochromatic $K_5$, so $R(5,5)>8$. This is a valid but weak lower bound. Its purpose is to demonstrate the certificate: the exact expected count is rational, the comparison is strict, and no independence among the $I_S$ is asserted.

<a id="section-157-7-off-diagonal-random-coloring-requires-unequal-probabi"></a>
## 7. Off-diagonal random coloring requires unequal probabilities {#section-159-7-off-diagonal-random-coloring-requires-unequal-probabi}

For avoiding a red $K_s$ and a blue $K_t$, color each edge red independently with probability $p$ and blue with probability $1-p$. Let $X$ count red $K_s$ sets and $Y$ count blue $K_t$ sets. Then

$E[X+Y]=\binom{n}{s}p^{\binom{s}{2}}+\binom{n}{t}(1-p)^{\binom{t}{2}}$.

If this quantity is less than one, there exists a coloring avoiding both configurations, and therefore $R(s,t)>n$. The probability $p=1/2$ need not be a sensible choice when $s$ and $t$ differ. Choosing $p$ balances two competing bad-event contributions; proving an optimized closed form is a calculus problem separate from the probabilistic existence argument.

The edge-color choices are mutually independent. The bad-event indicators generally are not. Two clique events whose edge sets are disjoint are independent, even if their vertex sets share one vertex; events sharing an edge need not be independent. This distinction becomes load-bearing for local-dependence tools, though not for the displayed expectation.

<a id="section-167-worked-example-6-an-off-diagonal-calculation"></a>
### Worked example 6: an off-diagonal calculation {#section-169-worked-example-6-an-off-diagonal-calculation}

To avoid a red triangle and a blue $K_4$ on $n=5$ vertices, take $p=1/2$. The expectation bound is

$\binom{5}{3}(1/2)^3+\binom{5}{4}(1/2)^6=10/8+5/64>1$.

The criterion fails. It does **not** prove that every coloring on five vertices contains one of the targets; it merely says this particular first-moment calculation does not certify avoidance. Failure of a sufficient condition is not proof of the negation.

<a id="section-175-8-multicolor-and-hypergraph-existence-follow-the-same-a"></a>
## 8. Multicolor and hypergraph existence follow the same architecture {#section-177-8-multicolor-and-hypergraph-existence-follow-the-same-a}

Let $R_r(k)$ be the least $N$ such that every coloring of the edges of $K_N$ with $r$ colors has a monochromatic $K_k$. Finiteness can be derived inductively from two-color Ramsey theory, or directly by repeatedly partitioning later vertices according to the color of their edge to a selected vertex. At each step retain a large color class; after enough steps, $k$ selected vertices share one color on all mutual edges.

For random uniform $r$-coloring, a fixed $K_k$ is monochromatic with probability

$r\,r^{-\binom{k}{2}}=r^{1-\binom{k}{2}}$.

Thus $\binom{n}{k}r^{1-\binom{k}{2}}<1$ certifies $R_r(k)>n$.

The same first-moment syntax works for $q$-uniform hypergraphs after replacing graph edges by $q$-subsets. A fixed $k$-vertex set contains $\binom{k}{q}$ hyperedges, so its monochromatic probability in an $r$-coloring is $r^{1-\binom{k}{q}}$. This calculation is correct once the model is named, but it does not transfer graph recurrences unchanged: a vertex link in a hypergraph is a lower-uniformity object, and the inductive state must track that extra structure.

<a id="section-187-9-a-bounded-exact-ramsey-audit"></a>
## 9. A bounded exact Ramsey audit {#section-189-9-a-bounded-exact-ramsey-audit}

For at most seven vertices, an exhaustive investigation can encode a coloring by a bit string of length $\binom{n}{2}$ in lexicographic edge order. For each string it should report:

1. the first red $s$-set or blue $t$-set, if one exists;
2. for an avoiding coloring, its full red edge list and blue complement;
3. the exact number of avoiding labeled colorings;
4. whether color swap or a vertex permutation identifies displayed witnesses;
5. independent verification by enumerating all candidate vertex subsets.

The output needs a text table; color alone is not an accessible certificate. Exact enumeration proves the statement only for the bounded $n,s,t$ requested. Quotienting by isomorphism requires a tested canonical-label procedure; sorting degree sequences is not enough to prove two graphs isomorphic.

<a id="section-199-10-common-errors-and-proof-boundaries"></a>
## 10. Common errors and proof boundaries {#section-201-10-common-errors-and-proof-boundaries}

1. **The threshold quantifier is reversed.** Upper bounds analyze every coloring; lower bounds need one avoiding coloring.
2. **A large star is called a clique.** Same-colored edges from $v$ say nothing about edges among their other endpoints until the smaller Ramsey theorem is applied.
3. **The recursion loses a vertex.** The two neighborhoods contain $N-1$, not $N$, vertices; the contradiction uses $a+b-1>a+b-2$.
4. **Expectation at most one is treated as enough.** The elementary first-moment zero-witness argument needs expectation strictly below one.
5. **Bad-event independence is invented.** Linearity of expectation is unconditional; later dependence-sensitive arguments need a real dependency analysis.
6. **A sufficient criterion fails, so impossibility is claimed.** A union or expectation bound may be too weak even when an avoiding object exists.
7. **A numerical upper bound is reported as exact.** Equality requires a lower witness one vertex below the claimed threshold.
8. **Graph and hypergraph recurrences are conflated.** Their random counts look parallel, but their links and induction parameters differ.

<a id="section-210-11-solved-exercises"></a>
## 11. Solved exercises {#section-212-11-solved-exercises}

<a id="section-212-exercise-1-symmetry-and-monotonicity"></a>
### Exercise 1: symmetry and monotonicity {#section-214-exercise-1-symmetry-and-monotonicity}
<a id="ramsey-forcing-bounds-ex-1"></a>

Prove $R(s,t)=R(t,s)$ and $R(s,t)\le R(s+1,t)$.

<details>
<summary>Hint 1</summary>

**Hint.** For symmetry interchange the color names. For monotonicity compare the two red targets.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A red $(s+1)$-clique contains a red $s$-clique without altering the blue alternative.

</details>

<details>
<summary>Solution</summary>

**Solution.** Swapping red and blue converts the assertion “red $K_s$ or blue $K_t$” into “red $K_t$ or blue $K_s$” without changing the host complete graph, proving symmetry. If every coloring of $K_N$ contains a red $K_{s+1}$ or blue $K_t$, then it contains a red $K_s$ inside the larger red clique or the same blue $K_t$. Taking $N=R(s+1,t)$ gives $R(s,t)\le N$.

</details>

<a id="section-238-exercise-2-derive-r-3-3-le-6-only-from-the-recursion"></a>
### Exercise 2: derive $R(3,3)\le 6$ only from the recursion {#section-240-exercise-2-derive-r-3-3-le-6-only-from-the-recursion}
<a id="ramsey-forcing-bounds-ex-2"></a>

Use boundary values and the fundamental recurrence.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the recurrence at $(s,t)=(3,3)$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each boundary term is $R(2,3)=R(3,2)=3$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The recurrence gives $R(3,3)\le R(2,3)+R(3,2)$. Both boundary terms equal three, so $R(3,3)\le 6$. This proves only the upper bound. The red 5-cycle with blue complement supplies the separate lower bound needed for equality.

</details>

<a id="section-264-exercise-3-a-binomial-value"></a>
### Exercise 3: a binomial value {#section-266-exercise-3-a-binomial-value}
<a id="ramsey-forcing-bounds-ex-3"></a>

Use the general theorem to bound $R(5,5)$ without decimal approximations.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute into the binomial upper bound rather than an asymptotic estimate.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate $\binom{5+5-2}{5-1}$ exactly.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute $s=t=5$:

$R(5,5)\le \binom{8}{4}=\frac{8!}{4!\,4!}=70$.

The calculation is an upper bound, not an exact evaluation.

</details>

<a id="section-294-exercise-4-clique-independence-consequence"></a>
### Exercise 4: clique–independence consequence {#section-296-exercise-4-clique-independence-consequence}
<a id="ramsey-forcing-bounds-ex-4"></a>

Show that every graph on six vertices has a triangle or an independent three-set.

<details>
<summary>Hint 1</summary>

**Hint.** Turn edges and nonedges into a two-colouring of the complete graph.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A monochromatic blue triangle consists of three pairwise nonadjacent vertices of the original graph.

</details>

<details>
<summary>Solution</summary>

**Solution.** Color graph edges red and nonedges blue. Since $R(3,3)=6$, there is a red triangle, which is a graph triangle, or a blue triangle, whose three pairs are all nonedges and hence form an independent set. The alternatives need not both occur.

</details>

<a id="section-320-exercise-5-audit-a-claimed-lower-witness"></a>
### Exercise 5: audit a claimed lower witness {#section-322-exercise-5-audit-a-claimed-lower-witness}
<a id="ramsey-forcing-bounds-ex-5"></a>

Why does a red 6-cycle with all chords blue fail to prove $R(3,3)>6$?

<details>
<summary>Hint 1</summary>

**Hint.** An avoiding witness must forbid triangles in both color classes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Inspect alternating vertices one, three, five around the six-cycle.

</details>

<details>
<summary>Solution</summary>

**Solution.** The red graph has no triangle, but the blue complement does. Vertices $1,3,5$ around the cycle are pairwise nonconsecutive, so all three connecting chords are blue. Thus they form a blue triangle. A lower witness must avoid both colors' target simultaneously.

</details>

<a id="section-346-exercise-6-first-moment-at-k-4-n-5"></a>
### Exercise 6: first moment at $k=4,n=5$ {#section-348-exercise-6-first-moment-at-k-4-n-5}
<a id="ramsey-forcing-bounds-ex-6"></a>

Compute the expected number of monochromatic $K_4$ sets in a fair random coloring of $K_5$ and state the conclusion.

<details>
<summary>Hint 1</summary>

**Hint.** For each four-set compute the probability that all its six edges have one color.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There are five four-sets, each with monochromatic probability $1/32$.

</details>

<details>
<summary>Solution</summary>

**Solution.** A fixed four-set has six edges and is monochromatic with probability $2^{1-6}=1/32$. There are five four-sets, so $E[X]=5/32<1$. Consequently some coloring of $K_5$ contains no monochromatic $K_4$, and $R(4,4)>5$. The conclusion is existence, not an explicit coloring or the exact Ramsey number.

</details>

<a id="section-372-exercise-7-dependence-between-bad-events"></a>
### Exercise 7: dependence between bad events {#section-374-exercise-7-dependence-between-bad-events}
<a id="ramsey-forcing-bounds-ex-7"></a>

In fair random coloring, let $A$ be the event that triangle $123$ is red and $B$ the event that triangle $124$ is red. Are $A$ and $B$ independent?

<details>
<summary>Hint 1</summary>

**Hint.** Count the distinct edges jointly required to be red.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two triangles share edge $12$, so their union has five required edges rather than six.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each event has probability $1/8$. Their union of required edges is $\{12,13,23,14,24\}$, five distinct edges, so $P(A\cap B)=1/32$. But $P(A)P(B)=1/64$. The events are not independent because they share the required edge $12$. This dependence does not affect $E[I_A+I_B]=P(A)+P(B)$.

</details>

<a id="section-398-exercise-8-multicolor-first-moment"></a>
### Exercise 8: multicolor first moment {#section-400-exercise-8-multicolor-first-moment}
<a id="ramsey-forcing-bounds-ex-8"></a>

In a uniform three-coloring of $K_6$, compute the expected number of monochromatic triangles. Does the strict first-moment criterion certify an avoiding coloring?

<details>
<summary>Hint 1</summary>

**Hint.** One triangle has three edges; sum the probabilities for its three possible common colors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Multiply $3(1/3)^3$ by the twenty vertex triples, then compare strictly with one.

</details>

<details>
<summary>Solution</summary>

**Solution.** A fixed triangle is monochromatic with probability $3(1/3)^3=1/9$. There are $\binom{6}{3}=20$ triangles, so the expectation is $20/9$, greater than one. The criterion does not certify avoidance. No conclusion about existence or nonexistence follows from this failed sufficient test.

</details>

<a id="section-424-exercise-9-the-parity-refinement"></a>
### Exercise 9: the parity refinement {#section-426-exercise-9-the-parity-refinement}
<a id="ramsey-forcing-bounds-ex-9"></a>

Assume $R(s-1,t)=a$ and $R(s,t-1)=b$ are both even. Prove $R(s,t)\le a+b-1$.

<details>
<summary>Hint 1</summary>

**Hint.** An avoiding colouring forces upper bounds on both color degrees at every vertex.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Since those bounds sum to the full degree, all red degrees are $a-1$; use the parity of their sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** Suppose a coloring of $K_{a+b-1}$ avoids a red $K_s$ and blue $K_t$. For each vertex, red degree cannot reach $a$, or its red neighborhood would contain a red $K_{s-1}$ or blue $K_t$. Similarly blue degree cannot reach $b$. Since the two degrees sum to $a+b-2$, they must equal $a-1$ and $b-1$. Thus every vertex has odd red degree. The number of vertices $a+b-1$ is odd, so the sum of red degrees would be odd, contradicting the handshaking lemma. Therefore no avoiding coloring exists.

</details>

<a id="section-450-exercise-10-optimize-only-what-is-claimed"></a>
### Exercise 10: optimize only what is claimed {#section-452-exercise-10-optimize-only-what-is-claimed}
<a id="ramsey-forcing-bounds-ex-10"></a>

For fixed $n,s,t$, define $f(p)=\binom{n}{s}p^{\binom{s}{2}}+\binom{n}{t}(1-p)^{\binom{t}{2}}$. Explain what finding a $p$ with $f(p)<1$ proves and what merely finding the minimizing $p$ does not prove.

<details>
<summary>Hint 1</summary>

**Hint.** Interpret $f(p)$ as an expected integer defect count.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The strict inequality is a sufficient condition; failure to find such a value is not its converse.

</details>

<details>
<summary>Solution</summary>

**Solution.** A value with $f(p)<1$ makes the expected total number of red $K_s$ and blue $K_t$ sets less than one, so some coloring has neither and $R(s,t)>n$. A minimizer with value at least one yields no Ramsey conclusion: the first-moment criterion is sufficient, not necessary. Optimization of this bound does not prove that no avoiding coloring exists and does not establish an exact Ramsey number.

</details>

<a id="section-476-chapter-summary-and-connections"></a>
## Chapter summary and connections {#section-478-chapter-summary-and-connections}

Ramsey numbers measure when every edge coloring forces a homogeneous complete subgraph. The neighborhood split proves finiteness through $R(s,t)\le R(s-1,t)+R(s,t-1)$, and induction yields the binomial upper bound. The exact identity $R(3,3)=6$ pairs a universal six-vertex argument with a five-vertex avoiding coloring. Random independent edge colors reverse the direction: if the expected number of forbidden monochromatic sets is strictly below one, an avoiding coloring exists. Clique and independence numbers translate every statement into ordinary graph language.

The next probabilistic chapter strengthens the first-moment viewpoint through alteration, concentration, and controlled dependence. Later chapters on extremal graphs and set systems ask how density restrictions force configurations without coloring every pair, while exact-computation chapters turn small Ramsey witnesses into reproducible certificates.

<a id="section-482-source-and-verification-note"></a>
## Sources {#section-484-source-and-verification-note}

For finite Ramsey definitions and forcing recurrences, see J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, 2nd ed. (2001), Chapter 3; [edition record](https://doi.org/10.1017/CBO9780511987045). The probabilistic lower-bound discussion has no verified theorem/page locator in this source guide.


<a id="section-487-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-489-sources-for-the-expanded-teaching}

The original van Lint–Wilson reference beside the Ramsey discussion remains the chapter's source route. The added staged hints and explanations are original exposition. The first-moment methods also have a primary reference route in Alon and Spencer, [*The Probabilistic Method*, fourth edition](https://www.wiley.com/en-us/the-probabilistic-method-4th-edition-p-9781119062073).

<a id="section-491-summary"></a>
## Summary {#section-493-summary}

Ramsey recurrences prove upper bounds by splitting a neighbourhood; explicit colourings and first moments prove lower bounds in the opposite direction. Boundary cases, strict inequalities, and integer rounding remain essential. The six-vertex triangle theorem is exact, while general numerical certificates need not determine the Ramsey number. The next chapter develops alteration and dependence tools beyond the first moment.

