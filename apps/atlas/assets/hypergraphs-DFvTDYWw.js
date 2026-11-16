var e=`---
parent_id: book-topics-in-combinatorics
chapter_id: hypergraphs
title: "Hypergraphs and Set Systems"
level: graduate
license: CC BY-SA 4.0
---

# Hypergraphs and Set Systems

A higher-order constraint may forbid a whole triple or larger set, rather
than one pair. Hypergraphs record those constraints directly. Their matching,
covering and colouring problems resemble graph problems but can have different
integrality gaps and structural obstructions. This chapter develops exact
finite certificates, proves a local-lemma colouring criterion and establishes
the classical sunflower bound used in higher-order arguments.

Read the matching and finite-probability chapters of Combinatorics and the
extremal set-system material in Matroids and Extremal Combinatorics. All
families here are finite and simple: an edge is a nonempty subset and no
edge is repeated. An r-uniform family has a fixed positive integer edge
size r. These conventions are hypotheses, not consequences of the word
hypergraph. The earlier Quarto hypergraph reading remains a separate source;
the present chapter rewrites and extends its mathematical entry point.

## Incidence, links and shadows

**Definition 5.1 (Hypergraph and link).** A hypergraph is a pair
$H=(V,\\mathcal E)$ with finite vertex set V and a set of nonempty
edges. Its vertex degree is $d(v)=|\\{e:v\\in e\\}|$.
In an r-uniform hypergraph, the link of v consists of the distinct
$(r-1)$-sets $e\\setminus\\{v\\}$ from edges containing v.

Counting vertex-edge incidences gives $\\sum_vd(v)=r|\\mathcal E|$.
For a subset S, its codegree counts edges containing all of S;
large codegrees indicate concentration not visible in the average vertex
degree. Links at different vertices overlap and cannot in general be chosen
independently. A graph theorem with a two-endpoint hypothesis should not be
transferred to these higher-uniformity links without checking its proof.

For an r-set family F on n vertices, its lower shadow consists of all
$(r-1)$-subsets contained in a member. If $1\\le r\\le n$,
count pairs $(B,A)$ with $B\\subset A$, $|B|=r-1$, and
$A\\in F$. Each A contributes r, while each B has at most
$n-r+1$ possible extensions. Therefore

$$|\\partial F|\\ge\\frac{r|F|}{n-r+1},\\qquad
\\frac{|\\partial F|}{\\binom n{r-1}}
\\ge\\frac{|F|}{\\binom nr}.$$

This normalized shadow inequality is a double count. It is not the sharp
Kruskal–Katona description for every family size. A sharper conclusion requires
additional structure or another theorem, rather than changing the denominator
in the incidence calculation.

## Integral and fractional certificates

A matching is a family of pairwise disjoint edges; write nu for its
maximum size. A transversal meets every edge; write tau for its minimum
size. Every transversal must use distinct vertices to meet disjoint matching
edges, so $\\nu\\le\\tau$. The union of a maximal matching is a
transversal, since an edge disjoint from that union could be added.
For r-uniform families this gives $\\tau\\le r\\nu$.
A maximal matching need not be maximum; maximality is enough for this
certificate and does not establish optimality of the matching found.

A fractional matching assigns nonnegative weights $x_e$ to edges with
$\\sum_{e\\ni v}x_e\\le1$ at every vertex. A fractional transversal
assigns nonnegative vertex weights $y_v$ with
$\\sum_{v\\in e}y_v\\ge1$ for every edge. For every such pair,

$$\\sum_ex_e\\le\\sum_ex_e\\sum_{v\\in e}y_v
=\\sum_vy_v\\sum_{e\\ni v}x_e\\le\\sum_vy_v.$$

Thus matching and cover weights of equal total value certify both fractional
optima, without appealing to an unproved strong-duality conclusion. General
finite linear-programming duality yields equality of the optimal fractional
values, but integral values can differ sharply. The polyhedral chapter later
examines when a linear relaxation has the integrality needed for an exact
combinatorial conclusion.

**Worked example 5.2 (The Fano gap).** Let V be the seven nonzero vectors
of $\\mathbb F_2^3$. Each two-dimensional subspace contributes its three
nonzero vectors as one edge. Any two distinct vertices determine exactly one
such edge, and each vertex lies in three edges. There are seven edges by
incidence counting. Two two-dimensional subspaces intersect nontrivially in
a three-dimensional space, so every two edges meet and $\\nu=1$.
One chosen edge meets all edges, giving $\\tau\\le3$.
One vertex covers three edges, while two cover exactly five because their
common edge is counted twice. Hence $\\tau=3$.

Weights $x_e=1/3$ satisfy each vertex constraint exactly, and
$y_v=1/3$ satisfies each edge constraint exactly. Both totals are
$7/3$, so weak duality already proves the fractional optimum.
The integral matching is one, integral cover three and common fractional
value seven thirds. Confusing any pair of these optimisation problems would
produce a false equality theorem.

## Minimal transversals form a dual family

Call a family a clutter when no member properly contains another; every
uniform family is one. For a nonempty clutter H with no empty edge,
let b(H) be its inclusion-minimal transversals. Finiteness ensures every
transversal contains a minimal one, and nonemptiness of H ensures none
of those minimal transversals is empty.

**Proposition 5.3 (Blocker involution).** Under these hypotheses,
$b(b(H))=H$.

*Proof.* A set S meets every member of b(H) exactly when it contains
an edge of H. The reverse implication follows because every transversal
meets that contained edge. For the forward implication, if S contains
no H edge, its complement meets every H edge and is a transversal.
It therefore contains a minimal transversal T, which is disjoint from
S, contradicting the proposed intersection with every member of b(H).
The inclusion-minimal sets containing an H edge are exactly H's own
edges, because H is a clutter. Taking minimal transversals again gives
the claimed identity. ∎

This is an exact finite duality of families, distinct from fractional
linear-programming duality and distinct from an equality of their minimum
cardinalities. For instance, the Fano family has matching number one
and cover number three while still satisfying the blocker involution.
Minimality means no vertex can be removed from that particular cover;
it does not mean the cover has globally minimum size. The clutter
hypothesis removes redundant larger edges from the second application.
Without it, b(b(H)) recovers only the inclusion-minimal edges, rather
than every edge originally listed. Empty families require separate
conventions about the empty edge and are excluded here explicitly.

## Independent sets and two-colourability

A vertex subset is independent if it contains no complete edge. Its
complement is a transversal exactly when it is independent, so
$\\alpha(H)+\\tau(H)=|V|$ for maximum independent-set size alpha.
This is a complement relation within one hypergraph, not a matching-cover
equality. Two-colourability, also called property B, asks for a red/blue
vertex colouring with no monochromatic edge; both colour classes must be
independent simultaneously.

For an r-uniform family, independent fair colours make a particular edge
monochromatic with probability $p=2^{1-r}$. The union bound shows that
$|\\mathcal E|2^{1-r}<1$ suffices for a proper two-colouring.
It is only sufficient: failure of this numerical inequality does not establish
noncolourability. Dependence among intersecting edges can be handled more
precisely by a local lemma.

## The local lemma with its conditional proof

**Theorem 5.4 (Finite local lemma).** Let $E_i$ be finitely many events.
For each i let $\\Gamma(i)$ be its neighbours in a dependency graph,
and assume $E_i$ is independent of the sigma-field generated by all
nonneighbour events other than itself. If numbers $0<x_i<1$ satisfy

$$\\mathbb P(E_i)\\le x_i\\prod_{j\\in\\Gamma(i)}(1-x_j),$$

then the probability that no event occurs is positive.

*Proof.* Induct on the size of a conditioning set S, not containing i,
to prove $\\mathbb P(E_i\\mid\\bigcap_{j\\in S}E_j^c)\\le x_i$.
Conditioning events have positive probability by the preceding smaller-set
bounds; at size zero this is immediate from the displayed assumption.
Split S into neighbours $S_1$ of i and nonneighbours $S_2$.
The conditional probability is at most

$$\\frac{\\mathbb P(E_i\\mid\\bigcap_{j\\in S_2}E_j^c)}
{\\mathbb P(\\bigcap_{j\\in S_1}E_j^c\\mid\\bigcap_{j\\in S_2}E_j^c)}.$$

Independence makes the numerator $\\mathbb P(E_i)$.
Expand the denominator by the multiplication rule in any order of $S_1$.
Each conditional factor has a conditioning set smaller than S and is
at least $1-x_j$ by induction. The quotient is therefore at most
$\\mathbb P(E_i)/\\prod_{j\\in S_1}(1-x_j)\\le x_i$.
If $S_1$ is empty, the same numerator independence gives the bound
directly. This establishes all conditional bounds and, simultaneously, positivity
of their denominators. Finally expand the probability of avoiding every event:
its factors are at least $1-x_i$, so it is at least their positive
finite product. ∎

The dependency assumption is stronger than pairwise independence from individual
nonneighbours. The proof conditions on their joint avoidance, which is why
independence from the generated collection is required.

**Corollary 5.5 (Symmetric criterion).** If every event has probability at
most p, the dependency graph has maximum degree D, and
$e p(D+1)\\le1$, then avoidance has positive probability.

*Proof.* For $D\\ge1$, choose $x=1/(D+1)$.
Then $x(1-x)^D\\ge1/[e(D+1)]$, using
$(1+1/D)^D\\le e$. Each vertex with fewer neighbours has an even
larger product. The local-lemma condition follows. If $D=0$, all events
are independent in the stated sense and $p\\le1/e<1$, so their
finite avoidance product is positive. ∎

For monochromatic-edge events, disjoint edges use disjoint independent vertex
colours, giving the required joint independence. If maximum vertex degree
is Delta, an edge meets at most $r(\\Delta-1)$ other edges.
Consequently

$$e\\,2^{1-r}\\bigl(r(\\Delta-1)+1\\bigr)\\le1$$

is sufficient for two-colourability. Overcounting a multiply intersecting
edge only increases this safe dependency bound.

**Worked example 5.6 (A degree condition without an edge-count limit).**
For ten-uniform H with maximum vertex degree at most ten, the expression
is at most $91e/512<273/512<1$, using $e<3$.
Thus H is two-colourable regardless of its total number of edges.
The union-bound condition alone would only guarantee this for fewer than
512 edges. The local lemma exploits limited interaction rather than requiring
a globally small family. It is an existence proof, not an algorithmic
sampling guarantee; an algorithmic local lemma needs additional construction.

## Sunflowers expose repeated intersections

**Definition 5.7 (Sunflower).** Distinct sets $A_1,\\ldots,A_k$ form a
sunflower with core C if $A_i\\cap A_j=C$ whenever $i\\ne j$.
The sets $A_i\\setminus C$ are its pairwise disjoint petals.
The core can be empty. Equal edge size does not mean equal petals as
sets; for distinct uniform edges and $k\\ge2$, each petal is nonempty.

**Theorem 5.8 (Classical sunflower bound).** For integers $r\\ge1,k\\ge2$,
an r-uniform family with more than $r!(k-1)^r$ members contains a
k-member sunflower.

*Proof.* Induct on r. At r equal to one, more than $k-1$
distinct singletons provide k disjoint petals with empty core.
For larger r, take a maximal disjoint subfamily M. If it has at
least k members, those already form the desired sunflower. Otherwise its
union U has at most $r(k-1)$ vertices and meets every member of F.
The nonempty family gives nonempty U. Some vertex in U lies in at
least $|F|/|U|>(r-1)!(k-1)^{r-1}$ members.
Delete that vertex from those members; the resulting distinct $(r-1)$-sets
satisfy the induction threshold. A sunflower among them becomes one among
the original sets by adding the deleted vertex to its core. ∎

**Worked example 5.9 (A threshold is not a classification).** Any family
of 163 distinct triples contains four sets with one common pairwise intersection,
because $3!\\,3^3=162$. The core could have size zero, one or two.
The theorem does not say every 162-member family avoids such a configuration,
nor that this classical bound is the best possible quantitative result.
Its value here is a complete inductive certificate that concentrates a
large family into a simpler intersection pattern.

## Worked example: a maximal matching gives a cover certificate

In any r-uniform hypergraph, take a matching to which no additional edge
can be added. The union of its edges meets every edge: a disjoint
edge would contradict maximality. Hence this union is a transversal of
size r times the chosen matching size, at most r times the maximum
matching size. This proves the useful bound on transversal number without
solving either optimisation problem exactly.

Maximal does not mean maximum. For the three edges consisting of
vertices one-two-three, one-four-five, and two-six-seven, the first edge alone
is a maximal matching. Yet the last two edges are disjoint and give
a larger matching. The first edge's three vertices still cover every
edge, so its certificate is valid even though its optimisation claim
would be false. This distinction is valuable when an algorithm stops
because no immediate augmentation is available. Its stopping condition proves
the covering certificate just described; a stronger assertion of optimality
needs an additional exchange or augmentation theorem. Hypergraph greedy rules
do not inherit such a theorem merely from the graph matching vocabulary.

## Exercises

### Exercise 5.1
<a id="hypergraphs-ex-1"></a>

Prove the uniform incidence identity and explain why it must change for
a nonuniform family.

<details><summary>Hint 1</summary>

Count pairs $(v,e)$ with v in e in two orders.

</details>
<details><summary>Hint 2</summary>

A nonuniform edge contributes its own size rather than a common r.

</details>
<details><summary>Solution</summary>

Counting by vertices gives $\\sum_vd(v)$; counting by edges gives
$\\sum_e|e|$. In the uniform case this is $r|\\mathcal E|$.
Without uniformity the equality to the common-r expression need not hold,
though the general double count remains exact.

</details>

### Exercise 5.2
<a id="hypergraphs-ex-2"></a>

Give a maximal matching that is not maximum, even in a two-uniform family.

<details><summary>Hint 1</summary>

Use the three edges of a path on four vertices.

</details>
<details><summary>Hint 2</summary>

Choose its middle edge first.

</details>
<details><summary>Solution</summary>

With edges $\\{1,2\\},\\{2,3\\},\\{3,4\\}$, the singleton matching
containing $\\{2,3\\}$ is maximal because every other edge meets it.
The two outside edges form a matching of size two. Thus maximality need
not mean maximum cardinality.

</details>

### Exercise 5.3
<a id="hypergraphs-ex-3"></a>

Show that the normalised shadow bound is equality for the family of all
r-subsets of an n-set.

<details><summary>Hint 1</summary>

Every $(r-1)$-set has all $n-r+1$ extensions present.

</details>
<details><summary>Hint 2</summary>

Both normalised densities should be one.

</details>
<details><summary>Solution</summary>

The family size is $\\binom nr$ and shadow size $\\binom n{r-1}$.
The identity $r\\binom nr=(n-r+1)\\binom n{r-1}$ makes the bound
exact. Every incidence upper bound used in its proof is attained here.

</details>

### Exercise 5.4
<a id="hypergraphs-ex-4"></a>

Verify both constant fractional certificates in the Fano example and identify
the resulting optimal value.

<details><summary>Hint 1</summary>

Each vertex and edge has three incidences.

</details>
<details><summary>Hint 2</summary>

Compare matching and cover totals through weak duality.

</details>
<details><summary>Solution</summary>

Putting one third on each of seven edges gives each vertex incident
weight one and objective seven thirds. Putting one third on each vertex
gives each edge cover weight one and the same objective. Weak duality
bounds every matching value above by every cover value, so these equal
feasible certificates attain both fractional optima.

</details>

### Exercise 5.5
<a id="hypergraphs-ex-5"></a>

Prove that an independent set's complement is a transversal, and conversely.

<details><summary>Hint 1</summary>

An edge misses the complement exactly when it lies entirely in the set.

</details>
<details><summary>Hint 2</summary>

Negate that statement for every edge.

</details>
<details><summary>Solution</summary>

The complement meets every edge exactly when no edge is contained in
the original set. This is precisely independence. Taking maximum independent
and minimum transversal sizes in the complement bijection gives
$\\alpha+\\tau=|V|$, independently of any matching number.

</details>

### Exercise 5.6
<a id="hypergraphs-ex-6"></a>

Use the union bound to show every four-uniform family with at most seven
edges has property B.

<details><summary>Hint 1</summary>

A fixed edge is monochromatic with probability two times $2^{-4}$.

</details>
<details><summary>Hint 2</summary>

The sum of bad-event probabilities is below one.

</details>
<details><summary>Solution</summary>

Each bad event has probability $1/8$, so the chance of any bad
edge is at most $7/8<1$. There is positive probability of no bad
edge and hence at least one proper two-colouring. This conclusion does
not require bad events to be independent.

</details>

### Exercise 5.7
<a id="hypergraphs-ex-7"></a>

Why do disjoint edges give the joint independence required in the local-lemma
proof for independent vertex colours?

<details><summary>Hint 1</summary>

Each edge event uses only its own coordinate colours.

</details>
<details><summary>Hint 2</summary>

Take the whole union of vertices used by all its nonneighbours.

</details>
<details><summary>Solution</summary>

An edge's colour coordinates are disjoint from that entire union. Independent
coordinate families generate independent event collections, so its event is
independent of every combined event determined by the nonneighbour edges,
including their joint avoidance. Pairwise event independence alone would
not justify that conditioning step.

</details>

### Exercise 5.8
<a id="hypergraphs-ex-8"></a>

Apply the classical sunflower theorem to five-uniform families seeking three
petals. State the strict family-size threshold.

<details><summary>Hint 1</summary>

Use $r!(k-1)^r$ with r five and k three.

</details>
<details><summary>Hint 2</summary>

Five factorial is 120 and two to the fifth is 32.

</details>
<details><summary>Solution</summary>

The threshold is $120\\times32=3840$. More than 3840 distinct
five-sets guarantee a three-member sunflower. The theorem makes no avoidance
claim at equality and does not specify the core size.

</details>

### Exercise 5.9
<a id="hypergraphs-ex-9"></a>

Explain why the sunflower induction's link remains a simple family and
meets its smaller-uniformity threshold.

<details><summary>Hint 1</summary>

Every selected edge contains the same vertex.

</details>
<details><summary>Hint 2</summary>

Deleting that common vertex is injective on those edges.

</details>
<details><summary>Solution</summary>

Two selected edges with equal deletions would themselves be equal, so no
repetitions arise. The selected vertex has degree exceeding
$|F|/[r(k-1)]>(r-1)!(k-1)^{r-1}$, giving exactly the
strict threshold for the induction on distinct $(r-1)$-sets.
Adding the common vertex back enlarges only the common core.

</details>

### Exercise 5.10
<a id="hypergraphs-ex-10"></a>

Prove that the Fano hypergraph is not two-colourable.

<details><summary>Hint 1</summary>

A line-free set has at most four vertices: for a fixed a in it,
the vectors a+b for other b must all lie outside it.

</details>
<details><summary>Hint 2</summary>

A line-free four-set is $\\{a,b,c,a+b+c\\}$ with a,b,c independent;
its complementary three vectors sum to zero.

</details>
<details><summary>Solution</summary>

For a line-free set S, the distinct $a+b$ with b in
$S\\setminus\\{a\\}$ lie outside S, so $|S|-1\\le7-|S|$,
giving $|S|\\le4$. A two-colouring has a class of size at least
four. If it is larger or contains a line, it is already monochromatic.
Otherwise its four vertices include independent a,b,c, and the only possible
fourth not making a line is $a+b+c$. Their sum is zero.
All seven nonzero vectors sum to zero as well, so the complementary
three sum to zero and form a line in the other colour. Every colouring
therefore has a monochromatic edge.

</details>

## Summary and next connection

Hypergraphs retain higher-order incidences that graph shadows can lose.
Matching, covering and fractional certificates are different problems. Joint
dependency control yields a proved local-lemma colouring condition, and a
large uniform family forces a sunflower by induction. The polynomial method
next replaces finite set membership by evaluation constraints and dimension
bounds.
`;export{e as default};