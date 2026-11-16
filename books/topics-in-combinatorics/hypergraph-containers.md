
# Hypergraph Containers

An independent set avoids every forbidden edge, but there may be exponentially
many such sets. A container description places all of them inside a much
smaller list of supersets, each with few forbidden edges. A fingerprint
records the exceptional choices needed to reconstruct one of those supersets.
Counting fingerprints is useful only after containment and reconstruction
have been proved.

Prepare with [Hypergraphs and Set Systems](hypergraphs.md) and
[The Entropy Method](entropy-method.md). This chapter proves a complete
graph-container algorithm and its counting applications. It then states a
quantitative uniform-hypergraph container theorem as an explicitly imported
result, with its codegree hypotheses. The full higher-uniformity theorem is
not presented as if the graph algorithm alone proved it. Its application
to triangle-free graphs is derived with a proved supersaturation bound.

## A complete graph-container algorithm

Fix a finite simple graph G on n vertices, an integer threshold
$D\ge1$, and a total vertex order for breaking degree ties.
For an independent set I, start with available set A equal to all
vertices and empty fingerprint S. While the induced graph on A has
a vertex of degree at least D, select a maximum-degree vertex v,
using the fixed tie order. If v lies in I, put v in S
and remove v and all its current neighbours from A. Otherwise remove
only v. Stop when the maximum remaining degree is below D.
Set $C=S\cup A$.

**Theorem 12.1 (Graph fingerprints).** This construction satisfies:

- $S\subseteq I\subseteq C$;
- $|S|\le\lfloor n/(D+1)\rfloor$;
- $e(G[C])\le Dn/2$;
- C is determined by S, G, D and the fixed tie order, independently
  of any other information about I.

*Proof.* Maintain $I\subseteq S\cup A$. A negative branch removes
only a vertex not in I. A positive branch records its I vertex,
and its neighbours are outside I by independence. Thus the invariant
and $S\subseteq I$ hold throughout. Every positive branch removes
at least D-plus-one currently available vertices, disjoint from all
vertices removed in other steps, giving the fingerprint bound.

S is independent. A recorded vertex has no neighbour in the final
A, because all its then-available neighbours were removed and available
sets only shrink. Consequently all edges of C lie inside final A,
whose maximum degree is below D. The handshake count gives
$e(G[C])\le(D-1)|A|/2\le Dn/2$.

To reconstruct, repeat the same degree selections and take a positive
branch exactly when the selected v belongs to S. For a fingerprint
that arose from I, every processed I vertex was recorded, so this
criterion agrees with the original branch. Induction on steps gives
the same available sets, same stopping point and same C. ∎

Only fingerprints that arise need be included in the container family.
An arbitrary subset of the allowed size might not be a valid fingerprint;
counting all such subsets is nevertheless a safe upper bound on the
number of containers. No unrecorded negative choices need separate encoding,
because the deterministic selection rule reconstructs them from S.

**Worked example 12.2 (One fingerprint can cover several sets).** On a
complete graph with vertices one through six, threshold two and increasing
tie order, the empty fingerprint arises for the empty independent set
and for either singleton five or six. The procedure removes the first
four vertices negatively and stops on the last two, whose degrees are
one. Their container is that last pair. For singleton four, the
fourth selected vertex is recorded and its closed neighbourhood removes
all remaining vertices, giving container just four. The encoding is
many-to-one, which is permitted: containers cover independent sets rather
than label them bijectively.

## Entropy counts the fingerprints

Let $k=\lfloor n/(D+1)\rfloor$. There are at most
$\sum_{j=0}^k\binom nj$ possible fingerprints. If k is positive,
the binary-ball bound from the entropy chapter and
$h(q)\le q\log(e/q)$ give

$$\log|\mathcal C|\le k\log(en/k)
\le\frac n{D+1}\log(e(D+1)).$$

The final inequality uses that $x\log(en/x)$ increases for
$0<x\le n$. For k zero there is one possible fingerprint and
the logarithm is zero directly. The entropy estimate applies because
$k\le n/2$ for D at least one.

Choose D tending to infinity but with D=o(n), such as an
integer near the square root of n. Then log container-count is
o(n), while each container spans o(n-squared) graph edges.
This gives a subexponential family of edge-sparse supersets for every
graph sequence. It does not yet bound their vertex sizes: an empty
graph has one large independent container and no reason for it to shrink.
A separate supersaturation hypothesis converts edge sparsity into size control.

**Proposition 12.3 (Counting from graph supersaturation).** Suppose a graph
sequence has the property that for every fixed eta greater than zero,
all vertex subsets of size at least $(\alpha+\eta)n$ span at
least $c_\eta n^2$ edges, for some $c_\eta>0$ and all
sufficiently large n. Then its number of independent sets is at most
$2^{\alpha n+o(n)}$.

*Proof.* Use the preceding containers with D tending to infinity and
o(n). Their edge bounds are smaller than $c_\eta n^2$ for
large n, so every container has size below $(\alpha+\eta)n$.
Each has at most $2^{(\alpha+\eta)n}$ subsets, and there are
$\exp(o(n))$ containers. Divide the logarithmic bound by n,
let n tend to infinity for each fixed eta, then let eta
decrease to zero. This is exactly the claimed limsup form. ∎

**Worked example 12.4 (Complete bipartite independent sets).** Let n equal
2m and G equal $K_{m,m}$. A subset of size at least
$(1/2+\eta)n$ has numbers a,b in the two sides with
$a+b\ge m+2\eta m$ and each at most m. Their product
is at least $m(a+b-m)\ge2\eta m^2=\eta n^2/2$,
so supersaturation holds with alpha one half. Containers give at most
$2^{n/2+o(n)}$ independent sets. Directly, every independent set
lies entirely in one side, giving exactly $2^{m+1}-1$ after
subtracting the twice-counted empty set. The leading exponential rate agrees,
while the container theorem does not claim that sharper exact count.

## The imported uniform-hypergraph theorem

For an r-uniform simple hypergraph H with n vertices and nonempty
edge set, let $d=r e(H)/n$ be its average vertex degree,
and let $\Delta_j$ be the largest number of edges containing a
fixed j-set of vertices. In particular $\Delta_r=1$.
Large codegrees indicate concentrations that a vertex-degree average alone
cannot detect.

**Theorem 12.5 (Uniform-hypergraph containers, cited).** For each fixed
$r\ge2$ and $0<\epsilon<1$, there are constants
$0<c<1/2$ and $C>0$ depending only on r and epsilon such that the following holds.
If $0<\tau<c$ and

$$\Delta_j\le c\,d\,\tau^{j-1}
\quad(2\le j\le r),$$

there is a family of vertex subsets $\mathcal C$ such that every
independent set is contained in some C in that family, every such
C spans at most epsilon e(H) edges, and

$$\log|\mathcal C|\le C n\tau\log(1/\tau).$$

This is the maximum-codegree sufficient form of the hypergraph container
theorem developed by David Saxton and Andrew Thomason, *Hypergraph containers*,
and independently József Balogh, Robert Morris and Wojciech Samotij,
*Independent sets in hypergraphs*. Their primary papers supply the full
higher-uniformity proof. The constants are existential here; no numerical
values or uniformity in r or epsilon are asserted.

The graph proof above explains fingerprints and decoding but does not prove
this theorem for r greater than two. In a larger edge, recording one
vertex does not permit deleting every other edge vertex: independence only
forbids taking the complete remaining link. Higher-uniformity proofs track
those smaller-uniformity constraints and control their concentrations. The
codegree assumptions are the information needed for that additional argument.

## A full application: count triangle-free graphs

Use a new base parameter N, the number of vertices of an ordinary
graph to be counted. Form a three-uniform hypergraph H whose vertex
set is the edges of $K_N$ and whose hyperedges are its triangles.
Its independent sets are exactly triangle-free labelled graphs on those
fixed N vertices. This encoding retains the vertex labels and each
possible edge choice; it is not an unlabelled-graph count.

H has $n=\binom N2$ vertices, average degree d equal to
N-minus-two, and both $\Delta_2,\Delta_3$ at most one.
A pair of distinct base edges belongs to at most one triangle.
With $\tau=N^{-1/3}$, the quantities d tau and d tau-squared
both tend to infinity, so the cited codegree conditions hold for every
fixed c at sufficiently large N. The container logarithm is then
$O(N^{5/3}\log N)=o(N^2)$.

**Lemma 12.6 (Triangle supersaturation).** If a simple N-vertex graph has
$e\ge(1/4+\eta)N^2$ edges, its number t of triangles is
at least eta $N^3/3$.

*Proof.* For an edge uv, the common-neighbour count is at least
$d(u)+d(v)-N$ by the union bound on their neighbour sets.
Summing over edges counts each triangle three times and gives

$$3t\ge\sum_v d(v)^2-Ne
\ge4e^2/N-Ne=e(4e-N^2)/N.$$

The middle inequality is Cauchy–Schwarz using total degree 2e.
Under the assumed edge bound, $4e-N^2\ge4\eta N^2$
and $e\ge N^2/4$, giving the stated conclusion. ∎

Apply Theorem 12.5 with a fixed epsilon equal to eta, taking eta
small and positive. Each container is an ordinary graph with at most
$\eta\binom N3<\eta N^3/6$ triangles. By Lemma 12.6,
it has fewer than $(1/4+\eta)N^2$ edges. Counting all its
edge subsets gives an upper bound for the triangle-free graphs it
contains, even though some of those subsets may still have triangles.

**Theorem 12.7 (Leading count of triangle-free labelled graphs).** Their
number is $2^{N^2/4+o(N^2)}$.

*Proof.* The upper bound follows from the subexponential container count
on the N-squared scale and at most
$2^{(1/4+\eta)N^2}$ subsets per container. Let N tend to
infinity for each fixed eta, then let eta decrease to zero.
For the lower bound, every subgraph of one fixed balanced complete
bipartite graph is triangle-free, giving
$2^{\lfloor N^2/4\rfloor}$ labelled graphs. The logarithmic upper
and lower limits agree. The upper proof uses exactly the cited
hypergraph theorem and the supersaturation lemma proved here. ∎

The conclusion is a leading count. It does not state that every
triangle-free graph is bipartite, nor identify the full structure of
a typical graph beyond this exponential scale. Stronger structural or
lower-order enumeration conclusions need further work.

## Limits of a container certificate

A container is a superset, not necessarily an independent set. An
edge-sparsity conclusion becomes a size bound only when a suitable
supersaturation statement is supplied. A family of containers can overlap
heavily; multiplying their count by all subset counts remains a safe
upper bound but need not be exact. Finally, changing the forbidden
configuration changes the encoded hypergraph and its codegrees. One
successful triangle computation does not verify a general pattern theorem.

The finished book has moved from exact specifications and algebraic
representations through analytic and probabilistic bounds to these compressed
families. Across all twelve chapters, the proof obligation is the same:
state the objects and hypotheses, prove what the encoding preserves,
and distinguish the proved result from a cited deeper input.

## Worked example: covering may deliberately overcount

Take the three-vertex path and threshold two. The middle vertex is selected
first because its degree is two. An independent set containing it produces
the singleton middle-vertex container. An independent set omitting it produces
the container consisting of the two endpoints: after removing the middle
vertex, both remaining degrees are zero and the procedure stops.

There are five independent sets in total: the empty set, three singletons
and the endpoint pair. Counting all subsets of the two containers gives
two plus four, namely six. The surplus is the empty set, which
belongs to both containers. Nothing is wrong with this upper bound.
A container family is a cover, not a partition and not a bijective
encoding of every independent set.

The example separates three statements that must be proved independently:
every target set lies in a reconstructed container; the number of possible
containers is controlled; and each container supports a controlled number of
target sets. Their product or sum gives an upper bound even when
containers overlap. Claiming an exact count would require additional disjointness
or an explicit correction for that overlap.

## Exercises

### Exercise 12.1
<a id="hypergraph-containers-ex-1"></a>

Prove the invariant $I\subseteq S\cup A$ in the graph algorithm.

<details><summary>Hint 1</summary>

Consider the positive and negative branches separately.

</details>
<details><summary>Hint 2</summary>

No neighbour of a recorded I vertex can lie in I.

</details>
<details><summary>Solution</summary>

A negative branch removes only a vertex outside I. A positive branch
moves its I vertex into S and removes neighbours all outside I
by independence. No other I vertex is lost. The invariant holds
initially and therefore after every step, including the final container.

</details>

### Exercise 12.2
<a id="hypergraph-containers-ex-2"></a>

Why does the fingerprint contain at most $n/(D+1)$ vertices?

<details><summary>Hint 1</summary>

Every recorded vertex is processed while its current degree is at least D.

</details>
<details><summary>Hint 2</summary>

Removed available sets never return later.

</details>
<details><summary>Solution</summary>

Each recording step removes that vertex and at least D current neighbours,
a set of at least D-plus-one vertices. These removal sets are disjoint
across recording steps. Their total size cannot exceed n, proving the
bound and its integer-floor version.

</details>

### Exercise 12.3
<a id="hypergraph-containers-ex-3"></a>

Explain why no edge joins a recorded vertex to the final available set.

<details><summary>Hint 1</summary>

All its neighbours still available at its recording step were removed.

</details>
<details><summary>Hint 2</summary>

The final available set is contained in every later available set.

</details>
<details><summary>Solution</summary>

Any final available vertex was available when the recorded vertex was
selected. If adjacent, it would have been deleted then, contradiction.
Thus S-to-A edges are absent. Together with independence of S,
this reduces the container's edge count to the low-degree residual graph.

</details>

### Exercise 12.4
<a id="hypergraph-containers-ex-4"></a>

Why does reconstruction from S need the fixed degree-tie order?

<details><summary>Hint 1</summary>

The next selected vertex depends on the current available set.

</details>
<details><summary>Hint 2</summary>

Different choices among tied degrees could lead to different negative deletions.

</details>
<details><summary>Solution</summary>

A deterministic selection rule makes the available set and S determine
the next vertex uniquely. Membership in S then determines the branch,
so induction reconstructs the whole run. Without fixed ties, the same
S could accompany unrecorded different choices, and the claimed encoding
would need additional information.

</details>

### Exercise 12.5
<a id="hypergraph-containers-ex-5"></a>

For the six-vertex complete-graph example, identify the container for I
empty and for I equal to singleton four.

<details><summary>Hint 1</summary>

Threshold two stops when only two vertices remain if no positive branch occurs.

</details>
<details><summary>Hint 2</summary>

A positive branch in a complete graph removes the entire current available set.

</details>
<details><summary>Solution</summary>

For the empty set, vertices one through four are removed negatively
and the final container is five and six. For singleton four,
vertices one through three are removed negatively; four is then recorded
and the remaining clique deleted. Its container is just four.
The procedure describes supersets and is not a bijection of independent
sets with fingerprints.

</details>

### Exercise 12.6
<a id="hypergraph-containers-ex-6"></a>

Count independent sets in $K_{m,m}$ exactly, including the empty set once.

<details><summary>Hint 1</summary>

Every nonempty independent set is contained in exactly one side.

</details>
<details><summary>Hint 2</summary>

The empty set appears in both side-subset lists.

</details>
<details><summary>Solution</summary>

The two lists have $2^m$ subsets each and intersect only in the
empty set. Their union therefore has $2^{m+1}-1$ members.
This agrees in leading exponential rate with the container bound without
making its coarser upper estimate exact.

</details>

### Exercise 12.7
<a id="hypergraph-containers-ex-7"></a>

Compute the average degree and two largest codegree parameters for the
triangle hypergraph on edges of $K_N$.

<details><summary>Hint 1</summary>

Each base edge extends to a triangle by choosing its third vertex.

</details>
<details><summary>Hint 2</summary>

Two distinct base edges determine at most one triangle.

</details>
<details><summary>Solution</summary>

Every hypergraph vertex has degree N-minus-two, so that is also its
average degree. A pair of base edges has codegree one if they
share an endpoint and zero otherwise; hence the maximum is one
for N at least three. A hyperedge itself has three-codegree one.
These parameters, not a visual density impression, verify the cited
theorem's hypotheses for large N.

</details>

### Exercise 12.8
<a id="hypergraph-containers-ex-8"></a>

Derive $3t\ge4e^2/N-Ne$ in the supersaturation proof.

<details><summary>Hint 1</summary>

Sum lower bounds for common neighbours over each edge.

</details>
<details><summary>Hint 2</summary>

Use total degree 2e in Cauchy–Schwarz for the squared-degree sum.

</details>
<details><summary>Solution</summary>

Each triangle contributes three common-neighbour incidences, and summing
$d(u)+d(v)$ over edges gives $\sum_vd(v)^2$.
Thus $3t\ge\sum_vd(v)^2-Ne$.
Cauchy–Schwarz makes the squared-degree sum at least $(2e)^2/N$,
proving the displayed inequality.

</details>

### Exercise 12.9
<a id="hypergraph-containers-ex-9"></a>

Why does a container spanning few triangles not automatically have few edges?
State the extra step used here.

<details><summary>Hint 1</summary>

A complete bipartite graph has many edges and no triangles.

</details>
<details><summary>Hint 2</summary>

The relevant threshold is near one quarter of N squared, not near zero.

</details>
<details><summary>Solution</summary>

Triangle sparsity alone allows a balanced complete bipartite graph with
about N squared over four edges. The proved supersaturation lemma says
exceeding that threshold by eta N squared forces many triangles.
Combining that specific statement with the container triangle bound gives
the size limit needed for counting; it does not force o(N-squared)
edges.

</details>

### Exercise 12.10
<a id="hypergraph-containers-ex-10"></a>

Which part of the triangle-free enumeration proof is imported, and which
parts are proved within this chapter?

<details><summary>Hint 1</summary>

Separate graph decoding, higher-uniformity containers, codegree calculations and
supersaturation.

</details>
<details><summary>Hint 2</summary>

The graph deletion algorithm is not a proof of the three-uniform theorem.

</details>
<details><summary>Solution</summary>

The general uniform-hypergraph container theorem is the cited input.
The graph fingerprint theorem, entropy-based fingerprint bound, triangle
encoding and codegrees, supersaturation inequality, and final upper/lower
count comparison are proved here. The conclusion therefore has a transparent
imported dependency rather than an unstated higher-uniformity proof gap.

</details>

## Summary and further study

Fingerprints require a proved decoder and containment invariant. The graph
case supplies both directly, while the cited higher-uniformity theorem needs
codegree control. Supersaturation translates edge-sparse containers into
useful size bounds, yielding the leading count of triangle-free labelled
graphs. Further refinements concern quantitative constants, stability, sparse
regimes and lower-order terms, each with additional hypotheses and proofs.
