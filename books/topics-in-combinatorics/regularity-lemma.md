
# The Regularity Lemma

A graph may contain complicated local structure and still admit a bounded
partition whose large cross-pairs have stable density. Regularity is that
stability property, not a declaration that the graph was sampled randomly.
The proof repeatedly refines a partition using a witness to irregularity
and charges the refinement to an increasing energy bounded by one.
This chapter includes the equitable-partition bookkeeping, a triangle counting
lemma and the resulting triangle removal theorem.

Prepare with finite graphs, double counting, convex averages and
[Hypergraphs and Set Systems](hypergraphs.md). Graphs are finite, simple and
undirected. All counts of irregular class pairs below are unordered;
changing to ordered pairs changes a factor two. The theorem is a dense
graph result: its errors are normalised by class sizes and by the square
of the full vertex count, not by a sparse graph's expected edge count.

## Regularity quantifies over large subsets

For disjoint nonempty vertex sets A,B, put
$d(A,B)=e(A,B)/(|A||B|)$.

**Definition 8.1 (Regular pair).** A pair is epsilon-regular if every
$X\subseteq A,Y\subseteq B$ with
$|X|\ge\epsilon|A|,|Y|\ge\epsilon|B|$ satisfies
$|d(X,Y)-d(A,B)|\le\epsilon$.

A density alone is one average. Regularity compares many restricted averages
with that parent average. It permits exceptions smaller than the specified
threshold and imposes no condition on pairs declared irregular in the final
partition. Neither caveat can be erased when applying the theorem.

**Worked example 8.2 (A concealed two-block pattern).** Split each of A
and B into two equal halves, joining only corresponding halves completely.
The overall density is one half. Taking corresponding halves gives density
one, while opposite halves give zero. For $0<\epsilon<1/2$,
these subsets meet the size threshold and violate regularity.
After the split, every new cross-pair is complete or empty and hence
regular. Refinement exposes the exact hidden information that the original
average concealed.

## A bounded energy increases under refinement

For a partition P of all n vertices, define d(C,D) using the
average adjacency entry on C times D, including when C equals D;
diagonal adjacency entries are zero. Set

$$q(P)=\frac1{n^2}\sum_{C,D\in P}|C||D|d(C,D)^2.$$

Every density lies between zero and one, so $0\le q(P)\le1$.

**Lemma 8.3 (Variance increment).** Refining P cannot decrease q.
If a pair of classes C,D has a witness X,Y with relative sizes
at least epsilon and density difference greater than epsilon, a refinement
splitting X from C and Y from D increases that ordered rectangle's
energy by more than
$\epsilon^4|C||D|/n^2$.

*Proof.* Subrectangle densities have their parent density as weighted mean,
with weights equal to relative subrectangle areas. Subtracting the square
of the mean from the mean square gives the weighted variance, hence a
nonnegative increment. On the collection of subrectangles inside X times Y,
whose total weight is at least $\epsilon^2$, their mean differs from
the parent by more than epsilon. The variance restricted to that collection
is at least its weight times the square of that difference, by
Cauchy–Schwarz or the same mean-square identity. This gives the strict
$\epsilon^4$ bound. Further refinement preserves the gain by the first
assertion. ∎

**Worked example 8.4 (The exact two-block energy).** On the normalised A
by B rectangle of Example 8.2, the coarse density-square is one quarter.
After splitting both halves, two quarter-area cells have density one and
two zero, giving mean square one half. The increase is one quarter.
It is the variance of the four revealed densities. No independence assumption
is used, and the argument applies to a deterministic graph.

## Equitable refinement with an exceptional class

**Theorem 8.5 (Equitable regularity).** For every $0<\epsilon<1/2$
and positive integer $m_0$, there are M,N such that every graph
with $n\ge N$ vertices has a partition
$V_0,V_1,\ldots,V_k$ with

- $m_0\le k\le M$;
- all $V_i$ for $i\ge1$ of the same positive size;
- $|V_0|\le\epsilon n$;
- at most $\epsilon k^2$ unordered main-class pairs irregular.

*Proof.* Let $T=\lceil2/\epsilon^5\rceil$. Choose an integer
$k_0\ge m_0$ so large that $2^{-k_0}\le\epsilon/(2T)$.
Define $K_0=k_0$ and $K_{t+1}=4K_t4^{K_t}$ for
$t<T$. Choose N large enough that
$k_0\le\epsilon n/2$ and $n\ge4K_T4^{K_T}$ whenever
$n\ge N$. These are finite constants depending only on the
specified parameters.

Start with $k_0$ equal main classes and fewer than $k_0$ leftover
vertices in V-zero. For energy purposes keep every exceptional vertex as
its own singleton class. Suppose there are currently k main classes of
size m, with exceptional size at most epsilon n. If more than
$\epsilon k^2$ unordered pairs are irregular, select one witness pair
of subsets for each. Split each main class by all its incident witness
subsets, giving at most $2^{k-1}$ atoms per class. Every selected
rectangle and its reversal gains the energy from Lemma 8.3, so the
total gain exceeds

$$2\epsilon k^2\epsilon^4m^2/n^2
\ge\epsilon^5/2,$$

using $km\ge n/2$.

Restore equal sizes without undoing the refinement. Put
$b=\lfloor m/4^k\rfloor$, cut each atom into blocks of size b,
and declare its fewer-than-b remaining vertices exceptional singletons.
The large-n choice ensures $m\ge2\cdot4^k$, hence
$b\ge m/(2\cdot4^k)>0$. New exceptional vertices number at
most $k2^kb\le n/2^k$. Every old class supplies at least one
new main block: its leftovers occupy at most $2^kb\le m/2^k<m$.
Thus the new main count is at least k and at most
$n/b\le4k4^k$, since $m\ge n/(2k)$.
It is therefore bounded by the next K value.

Throughout at most T proposed refinements, the initial exception uses at
most epsilon n/2 vertices and each refinement adds at most
$n/2^{k_0}\le\epsilon n/(2T)$. The exceptional budget remains
at most epsilon n, justifying the estimates at every step. Splitting
leftovers into singletons is a genuine refinement, so it does not lose
the witness energy increase. More than T-minus-one failing steps would
raise q above one, impossible. The process therefore stops with the
claimed pair bound and k between $m_0$ and $K_T$.
Take M equal to $K_T$. ∎

The exceptional vertices are grouped as V-zero in the theorem statement,
but not merged into one energy class during its proof. Merging unrelated
leftovers could lower the energy and would invalidate a bare monotonicity
claim. The explicit singleton convention avoids that gap.
For a larger epsilon, apply the theorem with a smaller value below one
half; the stronger partition satisfies the original tolerance. The bound
is enormous, and the existence proof does not assert practical efficiency
or a random-graph generation mechanism.

## Regular triples contain many triangles

**Lemma 8.6 (Typical degrees).** In an epsilon-regular pair A,B, fewer
than epsilon |A| vertices of A have degree into B below
$(d(A,B)-\epsilon)|B|$.

*Proof.* If the set of such vertices met the epsilon size threshold,
its density to all of B would be strictly below the parent density
minus epsilon, violating regularity. ∎

**Theorem 8.7 (Triangle counting).** Let A,B,C be disjoint classes whose
three pairs are epsilon-regular with densities at least d, where
$0<\epsilon<d/2$. Then the number of triangles using one vertex
from each class is at least

$$(1-2\epsilon)(d-\epsilon)^3|A||B||C|.$$

*Proof.* All but fewer than $2\epsilon|A|$ vertices a have at
least $(d-\epsilon)|B|$ neighbours in B and
$(d-\epsilon)|C|$ in C, by Lemma 8.6 twice. For each such
a, these neighbour sets meet the epsilon thresholds because
$d-\epsilon>\epsilon$. Regularity of B,C gives at least
$(d-\epsilon)$ times their size product edges between them.
Each is a triangle with a. Summing over the good a vertices proves
the bound; the classes are disjoint, so every such triangle is counted
once. ∎

**Worked example 8.8 (A numerical counting certificate).** With
$\epsilon=1/20$, density lower bound one half and three classes of
size m, the guaranteed triangle count is
$(9/10)(9/20)^3m^3=6561m^3/80000$.
This is a lower bound on a finite graph satisfying all three pair
hypotheses. It is not a probability or a claim that every triple of
vertices forms a triangle. Rounding the real lower bound upward is permitted
when reporting an integer count, but the formula itself needs no rounding
convention.

## Triangle removal follows with all small graphs covered

**Theorem 8.9 (Triangle removal).** For every $0<\eta<1$ there is
$\delta>0$ such that a graph with fewer than delta $n^3$
triangles can be made triangle-free by deleting at most eta $n^2$
edges.

*Proof.* Choose $\epsilon=\eta/16$, $d=\eta/4$ and
$m_0\ge2/\eta$. Let M,N come from Theorem 8.5 and set
$c=(1-2\epsilon)(d-\epsilon)^3>0$ and
$\delta=\min(c/(8M^3),1/N^3)$.

For $n\ge N$, remove all edges incident to V-zero, all within
main classes, all between irregular main pairs and all between regular
pairs of density below d. Their counts are at most, respectively,
$\epsilon n^2,n^2/(2m_0),\epsilon n^2,dn^2/2$.
Their sum is at most eta $n^2$ by the chosen constants.

Any remaining triangle uses three distinct main classes with regular pairs
of density at least d in the original graph. The counting theorem would
then give at least $cm^3\ge cn^3/(8M^3)\ge\delta n^3$
original triangles, since $m=(n-|V_0|)/k\ge n/(2M)$.
This contradicts the hypothesis. Thus no triangle remains. If $n<N$,
the original triangle count is below $n^3/N^3<1$, so it is
already zero. This covers every n. ∎

The small-graph clause prevents a silent assumption that every input exceeds
the regularity threshold. The conclusion bounds deletions and does not identify
a unique corrected graph. General removal theorems for other fixed patterns
need their corresponding counting statements; they are not obtained merely
by replacing the word triangle in this proof.

## Restricting a regular pair changes its tolerance

**Proposition 8.10 (Slicing).** Suppose A,B is epsilon-regular and
$A'\subseteq A,B'\subseteq B$ each has relative size at
least alpha, with $\alpha\ge\epsilon$.
Then $|d(A',B')-d(A,B)|\le\epsilon$, and the restricted
pair is epsilon-prime regular for
$\epsilon'=\max(\epsilon/\alpha,2\epsilon)$.

*Proof.* The first claim is an application of the parent regularity
definition because both subsets meet its threshold. If X,Y meet
the epsilon-prime thresholds within A-prime and B-prime, their sizes
relative to the original classes are at least epsilon-prime times alpha,
which is at least epsilon. Hence their density differs from the
original density by at most epsilon. Combining this with the first
claim bounds their difference from the new parent density by two
epsilon, which is at most epsilon-prime. ∎

For example, restricting each class to at least one quarter of its
vertices turns tolerance one hundredth into a guaranteed tolerance at
most four hundredths. The density itself changes by at most one
hundredth. The two error statements answer different questions: one
controls the new average, while the other controls future subrectangles
relative to that average. Keeping the original tolerance without the
size factor would apply regularity below its actual threshold.

The lemma is useful when constructing a pattern one vertex at a
time. Earlier choices leave neighbour subsets, and the proof must
track both their remaining relative sizes and the growing tolerance
before invoking another regularity comparison. The triangle proof had
only one such step; larger embeddings need systematic bookkeeping.
A small-looking loss repeated many times can otherwise erase every
remaining size guarantee.

## Worked example: complementing preserves regularity exactly

Replace every edge between two fixed vertex classes by a nonedge and
every nonedge by an edge. For any nonempty subsets of these classes,
the new density is one minus the old density. Subtracting the new
parent density therefore gives the negative of the old density difference.
Absolute values agree. The pair is epsilon-regular after this bipartite
complement precisely when it was epsilon-regular before, with the same
threshold and tolerance.

This observation distinguishes uniformity from density. A nearly empty regular
pair and a nearly complete regular pair can be equally regular, even
though their edge counts are very different. A counting lemma asking for
a lower density bound needs that additional hypothesis; regularity alone
cannot force even one edge in an empty pair. For induced patterns,
some pairs are required to be edges and others nonedges. Complementing
the latter pairs preserves the regularity calculation, while the needed
density bound becomes a lower bound on one minus the original density.
Both quantities must be recorded before an embedding argument begins.

## Exercises

### Exercise 8.1
<a id="regularity-lemma-ex-1"></a>

Prove that every complete or empty bipartite pair is epsilon-regular for
any positive epsilon.

<details><summary>Hint 1</summary>

Compare the parent density with every nonempty restricted density.

</details>
<details><summary>Hint 2</summary>

All those densities are the same endpoint, zero or one.

</details>
<details><summary>Solution</summary>

A complete pair gives density one on every permitted subset rectangle,
and an empty pair gives zero throughout. The density difference is always
zero, so every threshold comparison holds. Regularity permits both extremes;
it is not synonymous with density one half.

</details>

### Exercise 8.2
<a id="regularity-lemma-ex-2"></a>

Compute the density and a violating witness in the concealed two-block
example.

<details><summary>Hint 1</summary>

Two of four equal subrectangles contain all possible edges.

</details>
<details><summary>Hint 2</summary>

Use one corresponding pair of halves for the witness.

</details>
<details><summary>Solution</summary>

The total density is one half. A matching pair of halves has density
one and each has relative size one half. For epsilon below one half,
the difference one half exceeds epsilon while both size thresholds hold,
so the original pair is irregular.

</details>

### Exercise 8.3
<a id="regularity-lemma-ex-3"></a>

Derive the weighted-variance identity underlying energy monotonicity.

<details><summary>Hint 1</summary>

Let weights sum to one and let mu be their weighted mean.

</details>
<details><summary>Hint 2</summary>

Expand the square of each value minus mu.

</details>
<details><summary>Solution</summary>

$\sum_jw_j(z_j-\mu)^2=\sum_jw_jz_j^2-\mu^2$,
because $\sum w_jz_j=\mu$ and $\sum w_j=1$.
The left side is nonnegative. Applying this to each parent density
rectangle proves that replacing its squared mean by refined mean squares
cannot decrease q.

</details>

### Exercise 8.4
<a id="regularity-lemma-ex-4"></a>

Why are exceptional vertices kept as singleton energy classes during the
proof, even though the theorem lists one class V-zero?

<details><summary>Hint 1</summary>

Energy is monotone under refinement, not arbitrary regrouping.

</details>
<details><summary>Hint 2</summary>

Merging leftovers from unrelated atoms can average away a variance gain.

</details>
<details><summary>Solution</summary>

Singleton leftovers refine each old atom and retain every witness cut.
Collecting them into one energy class would merge pieces from different
parents and need not preserve or increase energy. V-zero is a presentation
of the exceptional set; the finer singleton partition is the proof device
that keeps monotonicity valid.

</details>

### Exercise 8.5
<a id="regularity-lemma-ex-5"></a>

Explain why each main class is split into at most $2^{k-1}$ witness
atoms.

<details><summary>Hint 1</summary>

It participates in at most k minus one selected unordered pairs.

</details>
<details><summary>Hint 2</summary>

Each witness subset gives one binary membership choice.

</details>
<details><summary>Solution</summary>

For each partner there is at most one selected subset in the class.
An atom is determined by its in-or-out choices for at most k-minus-one
subsets. There are at most $2^{k-1}$ such patterns; empty atoms can
be discarded. No independence among those subsets is required.

</details>

### Exercise 8.6
<a id="regularity-lemma-ex-6"></a>

Prove the typical-degree lemma's lower-degree conclusion directly from the
regular-pair definition.

<details><summary>Hint 1</summary>

Collect all vertices whose degrees violate the claimed threshold.

</details>
<details><summary>Hint 2</summary>

If that set were large enough, its average density to B would violate
regularity.

</details>
<details><summary>Solution</summary>

If at least epsilon |A| vertices had degree strictly below
$(d(A,B)-\epsilon)|B|$, take them as X and all of B as Y.
Their average gives $d(X,B)<d(A,B)-\epsilon$, a prohibited
density gap. Thus the bad set is smaller than the threshold.

</details>

### Exercise 8.7
<a id="regularity-lemma-ex-7"></a>

Why does the triangle-counting proof need $d-\epsilon>\epsilon$?

<details><summary>Hint 1</summary>

The last regularity application is on two neighbour subsets.

</details>
<details><summary>Hint 2</summary>

Their relative sizes must meet the regularity thresholds in B and C.

</details>
<details><summary>Solution</summary>

The good vertex guarantees neighbour fractions at least d minus epsilon.
These must be at least epsilon before regularity of the B,C pair
can control their crossing density. Without that size comparison, the pair
hypothesis supplies no bound on those possibly tiny neighbour rectangles.

</details>

### Exercise 8.8
<a id="regularity-lemma-ex-8"></a>

Can a regular pair contain an isolated vertex? Give a proof using one
isolated vertex in a very large A and all other A-to-B edges present.

<details><summary>Hint 1</summary>

Choose $|A|>\epsilon^{-2}$.

</details>
<details><summary>Hint 2</summary>

A permitted X contains at most one bad vertex among at least epsilon |A|
vertices.

</details>
<details><summary>Solution</summary>

The parent density is $1-1/|A|$. Every restricted density differs
from one by at most $1/(\epsilon|A|)<\epsilon$;
its difference from the parent is smaller still or equals $1/|A|$.
Thus all required differences are below epsilon. The isolated singleton
is too small to contradict regularity, showing why conclusions concern most
vertices rather than every vertex.

</details>

### Exercise 8.9
<a id="regularity-lemma-ex-9"></a>

List the four edge categories removed in the triangle-removal proof and
the reason a surviving triangle would contradict the original triangle count.

<details><summary>Hint 1</summary>

Track exceptional vertices, same-class edges, irregular pairs and low-density pairs.

</details>
<details><summary>Hint 2</summary>

Every surviving triangle identifies a regular dense triple of full classes.

</details>
<details><summary>Solution</summary>

Those four categories are exactly the deletions listed. A surviving triangle
must span three distinct main classes whose original pairs are regular and
have density at least d. The counting lemma then forces at least
$c m^3\ge\delta n^3$ original triangles, contradicting the assumed
strict upper bound. Its one visible triangle certifies many original ones.

</details>

### Exercise 8.10
<a id="regularity-lemma-ex-10"></a>

Explain why the choice $\delta\le1/N^3$ handles graphs smaller than
the regularity theorem's threshold.

<details><summary>Hint 1</summary>

For n below N, compare delta $n^3$ with one.

</details>
<details><summary>Hint 2</summary>

A nonnegative integer triangle count below one is zero.

</details>
<details><summary>Solution</summary>

For $n<N$, the hypothesis gives fewer than $n^3/N^3<1$
triangles. Therefore there are none and no deletion is needed. The
regularity partition itself need not exist with the stated lower class
count on these small inputs; the separate integer argument closes that
case.

</details>

## Summary and next connection

Witness cuts raise a bounded density-square energy. Equal-size chopping and
singleton leftovers preserve that gain while controlling the exception budget.
Regular triples yield explicit triangle counts, which give a full removal
argument including small graphs. Pseudorandomness next asks when one uniform
density already controls the statistics of a whole graph sequence.
