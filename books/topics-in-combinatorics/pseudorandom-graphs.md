
# Pseudorandom Graphs

A deterministic graph can reproduce the large-set and fixed-pattern statistics
of a random graph. Dense quasirandomness makes that claim precise through
normalised discrepancies and limiting counts. This chapter proves equivalence
between an operator-norm condition, cut discrepancy, all fixed homomorphism
counts, and the edge-plus-four-cycle criterion. It also explains why triangles
or the largest eigenvalue alone are insufficient shortcuts.

Prepare with adjacency matrices and spectral decomposition, finite probability,
and [The Regularity Lemma](regularity-lemma.md). Graphs are simple and
undirected, with n tending to infinity along a sequence. The parameter
$0<p<1$ is fixed. Every little-o statement concerns that sequence;
a single finite graph needs a stated numerical tolerance instead.
The earlier Quarto pseudorandomness reading remains intact; the exact
normalizations and proofs are developed here.

## Three measures of uniformity

Let A be the symmetric zero-one adjacency matrix, with zero diagonal,
and let J be the all-one matrix, including its diagonal. Put B=A-pJ.
The diagonal entries of B are minus p; their contribution is lower
order on the dense normalizations, but they are retained in exact formulas.

**Definition 9.1 (Operator and cut norms).** The Euclidean operator norm
of B is $\max_{\|x\|=1}\|Bx\|$, equal to its largest absolute
eigenvalue for a real symmetric matrix. Its unnormalized cut norm is

$$\|B\|_\square=\max_{S,T\subseteq V}
\left|\sum_{i\in S,j\in T}B_{ij}\right|.$$

S and T may overlap, and the sum is ordered. For disjoint sets it
is the crossing edge count minus $p|S||T|$. For one set used twice,
the adjacency sum is twice its induced edge count. These conventions avoid
silently changing constants when moving between matrix and graph notation.

**Lemma 9.2 (Mixing and weighted cuts).**
$\|B\|_\square\le n\|B\|_{\rm op}$.
If $0\le f_i,g_j\le1$, then
$|\sum_{ij}B_{ij}f_ig_j|\le\|B\|_\square$.

*Proof.* For a cut, Cauchy–Schwarz gives
$|1_S^{\mathsf T}B1_T|\le\|B\|_{\rm op}\sqrt{|S||T|}$,
which is at most n times the operator norm. For weights, write
$f_i=\int_0^1 1_{f_i\ge s}\,ds$ and likewise for g.
The weighted sum is the integral of cut sums. Taking absolute values
and bounding each integrand proves the claim. Only finite sums are
interchanged with bounded integrals. ∎

## Cut control counts every fixed graph

For a fixed finite simple graph H with h vertices and e edges, define

$$t(H,G)=n^{-h}\sum_{\varphi:V(H)\to V(G)}
\prod_{uv\in E(H)}A_{\varphi(u),\varphi(v)}.$$

This counts all homomorphisms, allowing nonadjacent source vertices to have
the same image. Adjacent collisions contribute zero because A has zero
diagonal. Injective labelled copies are a different exact count.

**Theorem 9.3 (Dense counting from cut discrepancy).**

$$|t(H,G)-p^e|\le e\,\|A-pJ\|_\square/n^2.$$

*Proof.* Order the edges of H and telescope the product difference
between adjacency factors and constant p factors. For one changed edge
uv, fix images of the other h-minus-two vertices. All remaining factors
in that term separate into a function of the image of u, a function
of the image of v, and a constant, each between zero and one.
There is no second edge between u and v because H is simple.
The changed factor is B, so Lemma 9.2 bounds the double sum over
those two images by the cut norm. There are $n^{h-2}$ choices
of the fixed images and e telescoping terms. Divide by $n^h$.
For e zero, both normalised counts are exactly one. ∎

At most $\binom h2 n^{h-1}$ maps identify some source vertex pair,
by choosing that pair first and then its common image. Thus replacing
homomorphisms by injective labelled copies changes normalised counts by
$O_H(1/n)$. Induced counts require absent-edge factors as well;
expand those factors by inclusion-exclusion over the fixed set of nonedges.
The same convergence then gives $p^e(1-p)^{\binom h2-e}$.
An unlabelled-copy count needs division by the appropriate automorphism
multiplicity, not by an unrelated power of n.

## Four-cycles force the spectral condition

Let $q_n=n^{-2}\sum_{ij}A_{ij}=2e(G)/n^2$.
For a four-cycle, the unnormalized homomorphism count is
$\operatorname{tr}(A^4)=\sum_j\lambda_j^4$:
expanding the trace records four successive edges and returns to the first
vertex. Opposite vertices may coincide, so this is not exactly eight
times the number of injective unlabelled four-cycles.

**Theorem 9.4 (Dense quasirandom equivalence).** For a graph sequence and
fixed $0<p<1$, the following conditions are equivalent:

1. $\|A-pJ\|_{\rm op}=o(n)$.
2. $\|A-pJ\|_\square=o(n^2)$.
3. $t(H,G)\to p^{e(H)}$ for every fixed finite simple H.
4. $q_n\to p$ and $t(C_4,G)\to p^4$.

*Proof.* The first implies the second by mixing, and the second implies
the third by Theorem 9.3. Taking H to be an edge and a
four-cycle gives the fourth.

Assume the fourth. Let $u=n^{-1/2}1$ and let $\lambda_1$ be
the largest eigenvalue. Rayleigh's inequality gives
$\lambda_1\ge u^{\mathsf T}Au=q_n n$.
Since $\sum_j\lambda_j^4=p^4n^4+o(n^4)$ and $q_n\to p$,
we obtain $\lambda_1/n\to p$ and
$\sum_{j\ge2}\lambda_j^4=o(n^4)$.
Thus every remaining eigenvalue has absolute value o(n).

Expand u in an orthonormal eigenbasis and let c be its coefficient
at a unit top eigenvector v. Then
$q_n n=\lambda_1c^2+o(n)$, since the remaining spectral norm
is o(n). Positivity of p forces $c^2\to1$.
Choose v's sign with c nonnegative; then $\|v-u\|\to0$.
Write $A=\lambda_1vv^{\mathsf T}+R$ with
$\|R\|_{\rm op}=o(n)$. Since $J=nuu^{\mathsf T}$,

$$\|A-pJ\|_{\rm op}
\le|\lambda_1-pn|+pn\|vv^{\mathsf T}-uu^{\mathsf T}\|_{\rm op}
+\|R\|_{\rm op}=o(n),$$

using $\|vv^{\mathsf T}-uu^{\mathsf T}\|_{\rm op}
\le2\|v-u\|$. This proves the missing implication. ∎

The eigenvector-alignment step is necessary. Merely announcing a large top
eigenvalue does not identify its direction with the constant vector.
The fourth-power sum controls all other absolute eigenvalues, including
large negative ones. An unsigned “second largest” comparison could miss
bipartite structure.

**Worked example 9.5 (Balanced complete bipartite graphs).** For
$G=K_{m,m}$, n equals 2m and the nonzero adjacency eigenvalues
are m and minus m. The ordered edge density is one half, but
$t(C_4,G)=2m^4/(2m)^4=1/8$, twice the quasirandom target
$(1/2)^4=1/16$.
Subtracting J/2 removes the positive constant eigenvector but leaves the
negative eigenvalue of magnitude n/2. A whole part as S=T has
no induced edges and discrepancy $m^2/2=n^2/8$.
The graph has the right overall density and a substantial hidden cut.

## Random generation is one source, not the definition

**Worked example 9.6 (Existence through independent edges).** In the
independent-edge model with fixed probability p, expected normalised edge
count tends to p. For C-four homomorphisms, injective maps have four
distinct edge requirements and expectation $p^4$. Noninjective maps
are only $O(n^3)$, so the total expectation tends to $p^4$.

The normalised variance is $O(n^{-2})$: two injective map indicators
are independent unless their image edge sets share an edge, and the
number of pairs sharing an edge is $O(n^6)$ rather than $n^8$.
The noninjective contribution is uniformly $O(1/n)$ and hence negligible.
The edge-count variance likewise tends to zero. Chebyshev's inequality gives
simultaneous convergence in probability of the two statistics. Selecting a
suitable realization at each sufficiently large n yields a deterministic
sequence satisfying Theorem 9.4. No actual random samples or finite
experiment are needed for this existence argument.

The theorem does not state that every deterministic graph was secretly
generated by this model. It says the specified limiting statistics are
equivalent. A construction with the same properties is quasirandom regardless
of its origin; a visually noisy finite picture need not satisfy a useful
discrepancy bound.

## Why triangle statistics alone can miss structure

**Worked example 9.7 (Cancelling cubic eigenvalues).** On four equally
weighted types, let
$f=(1,1,-1,-1)$ and $g=(1,-1,1,-1)$, and set

$$W_{ij}=\tfrac12+\tfrac14(f_if_j-g_ig_j).$$

Every entry is zero, one half or one. The averaged operator W/4
has orthogonal eigenvectors the constant vector, f and g, with eigenvalues
one half, one quarter and minus one quarter; its fourth eigenvalue is
zero. Its edge density is one half. Its triangle density, the trace
of the cubed averaged operator, is
$(1/2)^3+(1/4)^3+(-1/4)^3=1/8$,
the random target. But its four-cycle density is
$1/16+2/256=9/128>1/16$.

This is initially a weighted four-type model, not an unlabelled four-vertex
simple graph with loops silently allowed. To realize its limiting statistics
by simple graphs, take four equally sized classes and choose each distinct
vertex pair independently with its type probability W. The missing diagonal
is lower order. Expected fixed homomorphism densities converge to the weighted
ones by separating injective maps, and the shared-edge variance argument
above gives concentration for edges, triangles and four-cycles simultaneously.
Thus suitable simple realizations retain the asymptotic counterexample.
Positive and negative cubic contributions cancel, while fourth powers cannot.

## Degrees and codegrees expose what the moments control

**Proposition 9.8 (Degree concentration from cuts).** If
$\|A-pJ\|_\square\le\delta n^2$, then for every eta
greater than zero, at most $2\delta n/\eta$ vertices have
degrees outside the interval from $(p-\eta)n$ to
$(p+\eta)n$.

*Proof.* For the set S above the upper degree threshold, its
cut sum against all vertices exceeds eta n |S| and is
at most delta n squared. Thus |S| is at most delta n
over eta. Apply the same argument to the negative discrepancy for
the lower-threshold set, then add the two bounds. ∎

For a quasirandom sequence, choosing a tolerance tending to zero slowly
enough makes all but a vanishing fraction of degrees close to pn.
This is a statement about most vertices, not an assertion of exact
regularity. A few exceptional degrees can coexist with the normalised
cut property.

The fourth moment also controls most codegrees. Put
$c_{uv}=(A^2)_{uv}$, including $c_{uu}=d(u)$.
Then $\sum_{u,v}c_{uv}=\sum_wd(w)^2$ and
$\sum_{u,v}c_{uv}^2=\operatorname{tr}(A^4)$.
If the edge and four-cycle hypotheses hold, Cauchy–Schwarz bounds
the first sum divided by $n^3$ below by $q_n^2$ and above by
the square root of $\operatorname{tr}(A^4)/n^4$. Both limits are
p squared. Expanding squares therefore gives
$\sum_{u,v}(c_{uv}-p^2n)^2=o(n^4)$.
For any fixed eta, only o(n-squared) ordered pairs can differ
from p-squared n by more than eta n; otherwise their squared
errors alone would exceed that bound. This is the precise second-moment
reason four-cycles reveal hidden common-neighbour structure that a cubic
trace can conceal by cancellation.

## Dense and sparse scales must remain distinct

If the target density tends to zero, an absolute o(n-squared) cut error
can dwarf the entire edge set. The dense criterion would then say little
about relative uniformity. Regular graphs can instead use their nontrivial
spectral scale: with degree d and $p=d/n$, B annihilates the constant
vector, and centred indicator vectors give

$$|e(S,T)-d|S||T|/n|
\le\lambda\sqrt{|S|(1-|S|/n)|T|(1-|T|/n)},$$

where lambda bounds the remaining absolute adjacency eigenvalues and the
edge sum uses the ordered convention when sets overlap. This is a
finite exact mixing bound, but a sparse subgraph-counting theorem still needs
its own hypotheses. A dense regularity or counting conclusion cannot be
transferred by merely substituting a tiny p.

The next chapter changes representation from adjacency constraints to convex
feasible regions. There too, the normalisation, dimension and distinction
between exact and approximate certificates determine what a picture or
calculation can establish.

## Worked example: turning a global tolerance into a set-size condition

Suppose a graph on ten thousand vertices has cut discrepancy at most ten
thousand relative to density parameter two fifths. Choose disjoint sets of
one thousand vertices each. The expected crossing count in the constant-density
comparison is four hundred thousand, while the discrepancy hypothesis permits
an error of at most ten thousand. Dividing by the million possible crossing
pairs gives an actual density within one hundredth of two fifths.

The same absolute discrepancy says much less about two sets of ten vertices.
There are only one hundred possible crossing edges, so a bound allowing ten
thousand errors is vacuous there. Large-set uniformity does not rule out a
small exceptional configuration. This is why the normalisation and the size
of the sets must be stated together.

In general, a cut bound of delta times the square of the vertex count gives
density error at most delta divided by the product of the two set-size
fractions. If both fractions are at least eta, the error is at most delta
divided by eta squared. This conclusion follows simply by dividing the cut
inequality; it introduces no independence assumption. It also explains why a
sequence of vanishing global discrepancies controls fixed positive-size
fractions, while subsets whose fractions shrink require a stronger rate.
Quantifying that rate is a different task from asserting a dense limit.

## Exercises

### Exercise 9.1
<a id="pseudorandom-graphs-ex-1"></a>

Prove the weighted-cut bound for weights between zero and one.

<details><summary>Hint 1</summary>

Express each weight as an integral of threshold indicators.

</details>
<details><summary>Hint 2</summary>

Use the triangle inequality after exchanging finite sums with the integrals.

</details>
<details><summary>Solution</summary>

The weighted bilinear sum equals the double integral of cut sums on
$\{i:f_i\ge s\}$ and $\{j:g_j\ge t\}$.
Each absolute integrand is at most the cut norm, and the integration
square has area one. Thus the whole absolute value is at most that
norm. Negative weights would require a modified decomposition and constant.

</details>

### Exercise 9.2
<a id="pseudorandom-graphs-ex-2"></a>

Explain the distinction between $2e(G)/n^2$ and $e(G)/\binom n2$.

<details><summary>Hint 1</summary>

The matrix normalisation includes ordered diagonal positions.

</details>
<details><summary>Hint 2</summary>

Their ratio is $(n-1)/n$.

</details>
<details><summary>Solution</summary>

The first equals the second times $(n-1)/n$.
The graph density excludes loops and counts unordered pairs, while the
matrix average uses all ordered positions with zero diagonal. Their difference
is O(1/n), so their limits agree, but exact finite formulas need the
chosen convention.

</details>

### Exercise 9.3
<a id="pseudorandom-graphs-ex-3"></a>

Bound the number of noninjective maps from an h-vertex graph to n vertices.

<details><summary>Hint 1</summary>

Any such map identifies at least one source pair.

</details>
<details><summary>Hint 2</summary>

Choose the pair and then at most h minus one independent images.

</details>
<details><summary>Solution</summary>

For each of the $\binom h2$ pairs, at most $n^{h-1}$ maps
identify it. The union bound gives $\binom h2 n^{h-1}$.
Double counting maps with several collisions only makes this an upper
bound, which is exactly what the normalised O(1/n) comparison needs.

</details>

### Exercise 9.4
<a id="pseudorandom-graphs-ex-4"></a>

Why does the cut-counting telescoping proof require H to be simple?

<details><summary>Hint 1</summary>

Inspect factors involving both endpoints of the edge currently changed.

</details>
<details><summary>Hint 2</summary>

A parallel edge would leave another joint factor of the two free images.

</details>
<details><summary>Solution</summary>

For a simple H, after fixing other images, all unchanged incident
factors separate into one-variable functions at u and v. A parallel
edge leaves a factor depending jointly on both images, so the weighted
cut lemma no longer applies in that form. A multigraph counting claim
needs a separate argument.

</details>

### Exercise 9.5
<a id="pseudorandom-graphs-ex-5"></a>

Verify the four-cycle homomorphism count for $K_{m,m}$.

<details><summary>Hint 1</summary>

A homomorphism alternates between the two vertex classes.

</details>
<details><summary>Hint 2</summary>

Choose which class receives the first source vertex.

</details>
<details><summary>Solution</summary>

There are two choices of initial side and m independent choices for
each of the four source images, giving $2m^4$.
Opposite images may coincide, so the count is exact without requiring
m at least two. Dividing by $(2m)^4$ gives one eighth.

</details>

### Exercise 9.6
<a id="pseudorandom-graphs-ex-6"></a>

Where is top-eigenvector alignment proved in Theorem 9.4, and why does
it matter?

<details><summary>Hint 1</summary>

Expand the normalised constant vector in the eigenbasis.

</details>
<details><summary>Hint 2</summary>

Its Rayleigh quotient approaches the top eigenvalue on the n scale.

</details>
<details><summary>Solution</summary>

The nontrivial spectral contribution is o(n), so
$q_n n=\lambda_1c^2+o(n)$ forces $c^2\to1$ because
both $q_n$ and $\lambda_1/n$ tend to positive p.
This lets the rank-one leading part be replaced by pJ.
A large eigenvalue without alignment would not justify that replacement.

</details>

### Exercise 9.7
<a id="pseudorandom-graphs-ex-7"></a>

Check that the four-type example has the random triangle density but
excess four-cycle density.

<details><summary>Hint 1</summary>

Use eigenvalues one half, one quarter, minus one quarter and zero.

</details>
<details><summary>Hint 2</summary>

Odd powers cancel the opposite pair, while even powers add them.

</details>
<details><summary>Solution</summary>

The cube trace is $1/8+1/64-1/64=1/8$.
The fourth trace is $1/16+1/256+1/256=9/128$,
where the target is $8/128$. The example shows exactly how cubic
cancellation can hide structure that fourth powers reveal.

</details>

### Exercise 9.8
<a id="pseudorandom-graphs-ex-8"></a>

Explain why sharing a vertex does not necessarily make two random-edge
homomorphism indicators dependent, while sharing an edge can.

<details><summary>Hint 1</summary>

The independent random coordinates are unordered graph edges.

</details>
<details><summary>Hint 2</summary>

Compare the sets of random edge variables used by the two products.

</details>
<details><summary>Solution</summary>

Products using disjoint edge-variable sets are independent even if some
vertex names coincide. A shared edge reuses a random coordinate and can
produce covariance. Counting those shared-edge pairs gives O($n^{2h-2}$)
potential dependencies for a fixed pattern, leading to vanishing normalised
variance.

</details>

### Exercise 9.9
<a id="pseudorandom-graphs-ex-9"></a>

Why can dense o(n-squared) discrepancy be too weak when p tends to zero?

<details><summary>Hint 1</summary>

Compare the allowed error with the total expected edge scale.

</details>
<details><summary>Hint 2</summary>

A smaller-order-than-n-squared quantity may still exceed p times n squared.

</details>
<details><summary>Solution</summary>

For example, error $n^{3/2}$ is o($n^2$), but if p is
$1/n$ the expected edge scale is only order n.
The error can then dominate the whole signal. Sparse uniformity requires
normalizations and hypotheses suited to its density regime.

</details>

### Exercise 9.10
<a id="pseudorandom-graphs-ex-10"></a>

Can one finite graph establish a little-o condition? State the corresponding
finite kind of claim one could make instead.

<details><summary>Hint 1</summary>

Little-o compares a ratio along an unbounded sequence.

</details>
<details><summary>Hint 2</summary>

For one graph, specify an actual tolerance and normalisation.

</details>
<details><summary>Solution</summary>

No. One can prove, for example, that its maximum cut discrepancy is
at most epsilon n squared for a named epsilon. A sequence-level claim
requires such normalised errors to tend to zero. A finite calculation
or picture alone does not supply that limiting quantifier.

</details>

## Summary and next connection

Operator mixing implies cut control, which counts every fixed simple pattern.
Edges and the fourth spectral moment recover the operator condition through
an eigenvector-alignment argument. Homomorphisms, injective and induced copies
have distinct finite normalizations. Random sampling gives one existence route,
while sparse scales and cubic cancellations require separate care. Polyhedral
methods next encode exact finite feasibility through inequalities and vertices.
