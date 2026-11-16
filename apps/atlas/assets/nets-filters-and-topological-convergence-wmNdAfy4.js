var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: nets-filters-and-topological-convergence
title: "Nets, Filters, and Topological Convergence"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Nets, Filters, and Topological Convergence

Sequences see topology faithfully in metric and first-countable spaces, but arbitrary spaces can have closures invisible to every sequence. Nets and filters repair that gap by allowing eventual behavior indexed by general directed systems.

## 1. Directed sets and nets

A **directed set** is a nonempty preorder $(D,\\le)$ in which every pair has a common upper bound. A **net** in $X$ is a function $x:D\\to X$, written $(x_{d})$. It converges to $x$ when for every neighborhood $U$ of $x$, there is $d_{0}$ such that $d\\ge d_{0}$ implies $x_{d} \\in U$.

Sequences are nets directed by $\\mathbb{N}$. Finite subsets of a set, ordered by inclusion, form another important directed set. Direction does not mean numerical size; it formalizes “enough information has been accumulated.”

Constant nets converge to their constant point. A net may have several limits in a non-Hausdorff space. In an indiscrete space every net converges to every point.

## 2. Closure detected by nets

The fundamental theorem is

$x \\in \\operatorname{cl}(A)\\iff \\exists(x_\\alpha)\\subseteq A:\\ x_\\alpha\\to x$.

The reverse direction is immediate: every neighborhood of the limit eventually contains a point of $A$. For the forward direction, direct the neighborhoods of $x$ by reverse inclusion and choose $x_{U} \\in A \\cap U$. Smaller neighborhoods represent later indices. The resulting net converges to $x$.

This proof uses a choice from each neighborhood intersection. It also explains why sequences suffice under first countability: a countable nested local base supplies a sequential choice.

## 3. Continuity detected by nets

A map $f:X\\to Y$ is continuous iff it preserves convergence of every net. Continuity sends eventual membership in $f^{-1}(V)$ to eventual membership in $V$.

Conversely, if $f$ is not continuous, some $A \\subseteq X$ violates $f(\\operatorname{cl}(A)) \\subseteq \\operatorname{cl}(f(A))$, or directly some neighborhood of $f(x)$ has no suitable inverse-image neighborhood. Direct neighborhoods of $x$ and choose points whose images stay outside the target neighborhood. This net converges to $x$, but its image does not converge to $f(x)$.

Testing only sequences may miss this witness. The ordinal space $[0,\\omega_{1}]$ illustrates the boundary: no sequence of countable ordinals is cofinal in $\\omega_{1}$, while a net indexed by countable ordinals can approach it.

## 4. Subnets

A subnet in this manuscript uses an order-preserving cofinal map $\\varphi:E\\to D$: order preserving means $e\\le e'\\Rightarrow\\varphi(e)\\le\\varphi(e')$, cofinal means that for every $d\\in D$ some $e\\in E$ has $\\varphi(e)\\ge d$, and the subnet is $y_e=x_{\\varphi(e)}$. Other books use eventual-cofinal maps, so a comparison must first align conventions.

Every tail of a sequence is a subnet. A subsequence is a subnet. A subnet of a convergent net converges to the same limit because cofinality eventually carries it beyond every original threshold.

A **cluster point** of a net is a point whose every neighborhood is visited frequently: after every index, some later term lies in the neighborhood. A point is a cluster point iff some subnet converges to it.

For the nontrivial direction, suppose $x$ is a cluster point of $(x_d)_{d\\in D}$. Let $E$ consist of triples $(U,d,e)$ with $U$ a neighborhood of $x$, $e\\ge d$, and $x_e\\in U$. Order triples by refinement and growth:

$$(U,d,e)\\le(U',d',e')\\quad\\Longleftrightarrow\\quad U'\\subseteq U,\\ d'\\ge d,\\ e'\\ge e.$$

This is directed: intersect two neighborhoods, choose a common upper bound of the four displayed indices, and then use frequent visitation to choose a still later term in the intersection. The map $\\varphi(U,d,e)=e$ is order preserving and cofinal, and the resulting subnet converges to $x$ because later triples refine any prescribed neighborhood. Conversely, if a subnet converges to $x$, cofinality and convergence together find, after any original index, a subnet term in any neighborhood of $x$; hence $x$ is a cluster point.

## 5. Filters

A **filter** $F$ on $X$ is a nonempty family of subsets satisfying:

1. $\\varnothing \\notin F$;
2. if $A,B \\in F$, then $A \\cap B \\in F$;
3. if $A \\in F$ and $A \\subseteq B$, then $B \\in F$.

It converges to $x$ when every neighborhood of $x$ lies in $F$. The neighborhood filter at $x$ is the family of all neighborhoods of $x$.

A filter base is a nonempty family of nonempty sets such that every finite intersection contains another base member. Its upward closure is a filter. The tails $\\{x_{d}:d\\ge d_{0}\\}$ of a net generate its **eventuality filter**. Conversely, a filter yields a net by directing pairs $(A,a)$ with $A \\in F$, $a \\in A$ appropriately. Nets and filters thus encode the same convergence theory with different bookkeeping.

## 6. Ultrafilters

An **ultrafilter** is a maximal proper filter. Equivalently, for every $A \\subseteq X$, exactly one of $A$ or $X\\setminus A$ belongs to it. Principal ultrafilters contain every set containing a chosen point. Free ultrafilters, when they exist, contain no finite set.

Compactness admits a powerful formulation: a space is compact iff every ultrafilter converges. If $X$ is compact and $\\mathcal U$ is an ultrafilter, the closed sets $\\{\\operatorname{cl}A:A\\in\\mathcal U\\}$ have the finite-intersection property, so they share a point $x$. If an open neighborhood $V$ of $x$ were absent from $\\mathcal U$, then $X\\setminus V\\in\\mathcal U$, contradicting $x\\in\\operatorname{cl}(X\\setminus V)=X\\setminus V$. Thus every open neighborhood of $x$ belongs to $\\mathcal U$; because every neighborhood contains an open one, $\\mathcal U\\to x$.

Conversely, if an open cover has no finite subcover, its closed complements have the finite-intersection property. Extend the filter they generate to an ultrafilter $\\mathcal U$. A purported limit $x$ belongs to some cover member $V$, so $V\\in\\mathcal U$; but the complement $X\\setminus V$ also belongs to the original filter and hence to $\\mathcal U$, a contradiction. This converse uses the ultrafilter extension principle; its choice dependence is part of the theorem's scope.

## 7. Hausdorffness and unique limits

A space is Hausdorff iff every net has at most one limit. In a Hausdorff space, disjoint neighborhoods of two alleged limits contradict eventual membership in both. Conversely, if $x,y$ cannot be separated, direct pairs of neighborhoods $(U,V)$ by reverse inclusion and choose a point in every $U \\cap V$; the net converges to both.

For filters, Hausdorffness equivalently says no proper filter converges to two distinct points.

## 8. Product convergence revisited

Nets make infinite product convergence exact: $x_{d} \\to x$ in $\\prod_{i} X_{i}$ iff $\\pi_{i}(x_{d})\\to x_{i}$ for all $i$. A product-basic neighborhood restricts finitely many coordinates, so directedness combines finitely many thresholds.

The corresponding box statement fails because one box can restrict infinitely many coordinates and directedness promises only finite common upper bounds.

## Worked examples and the net–filter dictionary

### Worked example 1 — Finite information approximates an uncountable tuple

Let $I$ be uncountable and consider $P=\\{0,1\\}^{I}$ in the product topology. Let $A$ be its finite-support tuples: those equal to one at only finitely many indices. Direct the finite subsets $F\\subseteq I$ by inclusion and let $x_F$ be the indicator of $F$. The net converges to the all-one tuple. Indeed a basic neighborhood of that tuple restricts finitely many coordinates, say $J$, to be one. Whenever $F\\supseteq J$, the tuple $x_F$ satisfies every required restriction.

No sequence in $A$ can have the same limit. The union of the finite supports of its countably many terms is countable. Choose an index outside that union. At this coordinate every term is zero, so the sequence cannot converge coordinatewise to one. Thus the all-one tuple belongs to $\\operatorname{cl}A$ and is reached by an explicit net, while every sequence fails. This is a concrete closure obstruction that does not require familiarity with ordinal notation.

### Worked example 2 — A filter can converge to several points

On $X=\\{0,1\\}$ use the Sierpinski topology $\\varnothing,\\{1\\},X$. The principal ultrafilter at $1$ is $\\mathcal U=\\{\\{1\\},X\\}$. It converges to $1$, since both its neighborhoods belong to $\\mathcal U$. It also converges to $0$, whose only neighborhood is $X$. Maximality of a filter therefore does not guarantee uniqueness of its limit. The missing hypothesis is Hausdorffness of the space, not an additional requirement that the filter be still larger.

Compare the principal ultrafilter at $0$, namely $\\{\\{0\\},X\\}$. It converges to $0$ but not to $1$, since the neighborhood $\\{1\\}$ is absent. The asymmetry reflects the topology's asymmetry. A filter describes eventual sets; a space determines which of those sets must count as neighborhoods of a proposed limit.

### Worked example 3 — The ordinary eventual filter does not decide every subset

For the sequence $x_n=n$ in $\\mathbb N$, the eventuality filter consists exactly of the cofinite subsets. A subset contains a tail precisely when its complement is finite. Neither the even numbers nor the odd numbers are cofinite, so neither belongs to this filter. It is therefore not an ultrafilter. Nevertheless it is a proper filter: intersections of finitely many cofinite sets remain cofinite, and supersets remain cofinite.

This matters when using the ultrafilter alternative. The assertion that one of a set and its complement belongs to a filter is false for general filters. Passing from this eventual filter to a maximal extension involves a choice principle; it cannot be achieved by simply calling every sufficiently large-looking set a member. The compactness chapter gives the complete Zorn argument and keeps that assumption explicit.

### Proposition — Every proper filter has a canonical convergent net representation

Let $\\mathcal F$ be a proper filter on a set $X$. Form the directed preorder

$$D=\\{(A,a):A\\in\\mathcal F,\\ a\\in A\\},\\qquad
(A,a)\\le(B,b)\\iff B\\subseteq A.$$

It is nonempty because filter members are nonempty. Given two indices, their filter-set intersection is nonempty and belongs to the filter; pairing it with any one of its elements supplies a common upper bound. Define the net $x_{(A,a)}=a$.

For a subset $S\\subseteq X$, the net is eventually in $S$ if and only if $S\\in\\mathcal F$. If $S\\in\\mathcal F$, choose any $s\\in S$. Beyond $(S,s)$, every later index has its set contained in $S$, so its point lies in $S$. Conversely, if all indices beyond $(A,a)$ have their points in $S$, then for each $b\\in A$ the index $(A,b)$ is beyond $(A,a)$ and gives $b\\in S$. Thus $A\\subseteq S$ and upward closure gives $S\\in\\mathcal F$.

In particular, this net converges to a topological point exactly when the filter does. Notice that using *all* pairs avoids selecting one representative from every filter member in order to define the net. The only choices inside the proof are individual witnesses to nonempty sets. This differs from the earlier neighborhood-indexed construction, which explicitly chooses one point per neighborhood; both routes are valid, but their set-theoretic bookkeeping is different. $\\square$

## Exercises with complete solutions

### TOP-CH07-E001 — Exercise 1
Show finite subsets of a set, ordered by inclusion, are directed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take two finite subsets and look for a finite set containing both.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their union is an upper bound.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E001 — Solution 1
For finite $F,G$, their finite union contains both and is an upper bound. Reflexivity and transitivity of inclusion give a preorder.


</details>

### TOP-CH07-E002 — Exercise 2
Prove a constant net converges to its constant value.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every term already lies in every neighborhood of its constant value.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Any index can serve as a threshold.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E002 — Solution 2
Every neighborhood of the constant value contains every term, so any index is an eventual threshold.


</details>

### TOP-CH07-E003 — Exercise 3
Describe net convergence in a discrete space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Test the open singleton containing the proposed limit.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It forces eventual equality, which also suffices.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E003 — Solution 3
A net converges to $x$ iff it is eventually equal to $x$, because $\\{x\\}$ is a neighborhood and eventual equality is sufficient for every neighborhood.


</details>

### TOP-CH07-E004 — Exercise 4
Describe it in an indiscrete space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

List the neighborhoods in the indiscrete topology.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every net is eventually in the whole space.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E004 — Solution 4
Every net converges to every point because the only neighborhood condition that matters is eventual membership in $X$, which is automatic.


</details>

### TOP-CH07-E005 — Exercise 5
Prove a limit of a net lies in the closure of its range.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Any neighborhood of the limit eventually contains a term.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Hence it meets the range, which is the closure criterion.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E005 — Solution 5
Every neighborhood of the limit contains eventual terms and therefore meets the range. The neighborhood closure criterion applies.


</details>

### TOP-CH07-E006 — Exercise 6
Construct the neighborhood-directed net proving closure detection.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Order neighborhoods in the direction of increasing precision.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a point of the subset in each neighborhood and use reverse inclusion.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E006 — Solution 6
Order neighborhoods of $x$ by $U\\le V$ when $V \\subseteq U$. For each $U$, choose $a_{U} \\in A \\cap U$. Given neighborhood $W$, every index $U\\ge W$ satisfies $U \\subseteq W$, hence $a_{U} \\in W$.


</details>

### TOP-CH07-E007 — Exercise 7
Prove continuity preserves net limits.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull a neighborhood back by the continuous map.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Eventual membership in that preimage gives eventual image membership.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E007 — Solution 7
For a neighborhood $V$ of $f(x)$, continuity gives a neighborhood $U$ of $x$ with $f(U) \\subseteq V$. Eventually $x_{d} \\in U$, so eventually $f(x_{d}) \\in V$.


</details>

### TOP-CH07-E008 — Exercise 8
Construct a net witnessing failure of continuity at $x$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Negate the neighborhood continuity condition.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a witness outside the target neighborhood in every source neighborhood.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E008 — Solution 8
Choose a neighborhood $V$ of $f(x)$ such that every neighborhood $U$ of $x$ contains $x_{U}$ with $f(x_{U}) \\notin V$. Directed by reverse inclusion, $x_{U}\\to x$, but the image net never enters $V$.


</details>

### TOP-CH07-E009 — Exercise 9
Prove a subnet of a convergent net has the same limit.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use cofinality to get beyond one original threshold.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Order preservation keeps all subsequent subnet indices beyond it.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E009 — Solution 9
For each eventual threshold $d_{0}$, cofinal order preservation gives an $e_{0}$ after which $\\varphi(e)\\ge d_{0}$. Thus every neighborhood eventual for the original is eventual for the subnet.


</details>

### TOP-CH07-E010 — Exercise 10
Show a subsequence is a subnet.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The subsequence index map is strictly increasing.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Such a map from the natural numbers to themselves is cofinal.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E010 — Solution 10
The strictly increasing index map $k\\to n_{k}$ is order preserving and cofinal in $\\mathbb{N}$, so the resulting net is a subnet.


</details>

### TOP-CH07-E011 — Exercise 11
Prove the tails of a net form a filter base.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Tails are nonempty because each threshold indexes a term.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A common upper bound gives a tail contained in two earlier tails.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E011 — Solution 11
Tails are nonempty. Given thresholds $d_{1},d_{2}$, directedness gives $d_{3}$ above both; the tail at $d_{3}$ lies in the intersection of the two earlier tails.


</details>

### TOP-CH07-E012 — Exercise 12
Prove the neighborhood family at $x$ is a filter.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every neighborhood contains an open neighborhood of the point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Intersect two open cores and use upward closure.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E012 — Solution 12
It excludes the empty set, is upward closed, and the intersection of two neighborhoods contains the intersection of their open cores, an open neighborhood of $x$.


</details>

### TOP-CH07-E013 — Exercise 13
Show a principal ultrafilter at $x$ converges to $x$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A principal ultrafilter contains every set containing its chosen point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

All neighborhoods of that point have this property.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E013 — Solution 13
Every neighborhood contains $x$, so it belongs to the family of all subsets containing $x$.


</details>

### TOP-CH07-E014 — Exercise 14
Prove the ultrafilter either-or criterion implies maximality.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Assume a proper extension adds a previously absent set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its complement is already present, forcing the empty intersection into the extension.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E014 — Solution 14
If a proper filter strictly extended it by a set $A$ not already present, the criterion puts $X\\setminus A$ in the ultrafilter and hence in the extension. Closure under intersections would then put $\\varnothing$ in the extension, impossible.


</details>

### TOP-CH07-E015 — Exercise 15
Prove uniqueness of net limits in a Hausdorff space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose disjoint neighborhoods of alleged distinct limits.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A common threshold would force a term into both.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E015 — Solution 15
If a net converged to distinct $x,y$, choose disjoint neighborhoods $U,V$. It is eventually in each, hence eventually in their empty intersection, a contradiction.


</details>

### TOP-CH07-E016 — Exercise 16
Construct a doubly convergent net when two points lack disjoint neighborhoods.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Index pairs of neighborhoods by simultaneous refinement.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their intersections are nonempty by failure of Hausdorff separation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E016 — Solution 16
Index pairs $(U,V)$ of neighborhoods of $x,y$ by reverse inclusion and choose $z_{U,V} \\in U \\cap V$. Refining the pair eventually places the net in any fixed neighborhood of either point.


</details>

### TOP-CH07-E017 — Exercise 17
Prove product convergence is coordinatewise for nets.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Continuity of each projection gives necessity.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Finite-coordinate neighborhoods allow finitely many thresholds to be combined.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E017 — Solution 17
Projections give necessity. A basic product neighborhood restricts finitely many coordinates; take an upper bound of their finitely many eventual thresholds for sufficiency.


</details>

### TOP-CH07-E018 — Exercise 18
Why is a sequence insufficient at $\\omega_{1}$?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Bound the range of a countable list of countable ordinals.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its supremum lies strictly below the first uncountable ordinal.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E018 — Solution 18
The supremum of countably many countable ordinals is countable and therefore below $\\omega_{1}$. No sequence from below can be eventually inside every final interval approaching $\\omega_{1}$.


</details>

### TOP-CH07-E019 — Exercise 19
Prove first countability makes closure sequential.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Replace a countable local base by its successive finite intersections.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose one subset point in each of the resulting decreasing neighborhoods.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E019 — Solution 19
Choose a decreasing countable local base $U_{n}$ at $x$. If $x \\in \\operatorname{cl}(A)$, choose $a_{n} \\in A \\cap U_{n}$. Every neighborhood contains some $U_{N}$, so $a_{n}$ is inside it for all $n\\ge N$.


</details>

### TOP-CH07-E020 — Exercise 20
Identify the flaw: “A function preserving convergent sequences is continuous.”


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Identify the hidden requirement that all closure points be sequential limits.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The ordinal endpoint supplies a counterexample when that requirement fails.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH07-E020 — Solution 20
The proof would need every closure point to be a sequential limit. That holds in first-countable spaces but not arbitrary spaces; ordinal examples supply nonsequential closure behavior.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Chapter checkpoint

Nets replace a fixed countable clock by an arbitrary directed notion of “eventually.” They detect closure and continuity in every topological space, while filters package the same behavior as families of large sets. Unique net limits characterize Hausdorffness, and coordinatewise net convergence explains the finite-support design of product topology.

## Transferred capstone 7 {#topology-transferred-e007}

Original question identity: [TOP-CH22-E007](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Let $A$ be a subset of an arbitrary space $X$. Construct a net in $A$ converging to each point of $\\operatorname{cl}(A)$. Specify the directed set and order.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Order neighborhoods of the closure point by reverse inclusion.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose points in the corresponding intersections with A, recording enough indexing data to avoid ambiguous choices.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Fix $x \\in \\operatorname{cl}(A)$. Let $D$ be the set of neighborhoods of $x$, ordered by reverse inclusion: write $U \\le V$ when $V \\subseteq U$. Given $U,V$, the neighborhood $U \\cap V$ is an upper bound, so $D$ is directed. Because $x \\in \\operatorname{cl}(A)$, each $U$ meets $A$; choose $a_{U} \\in A \\cap U$. For any neighborhood $N$ of $x$, if $U\\ge N$, then $U \\subseteq N$, so $a_{U} \\in U \\subseteq N$. Hence the net $(a_{U})_{U \\in D}$ converges to $x$.

</details>

A choice-free variant using an actual directed partially ordered set takes indices (U,a,n), where U is a neighborhood of the closure point, a belongs to its intersection with A, and n is a nonnegative integer. Declare an index below another when they are equal, or when the second neighborhood is contained in the first and the second integer is strictly larger. This order is reflexive, transitive and antisymmetric. Given two indices, their neighborhood intersection meets A; any point in that intersection and an integer larger than both gives an upper bound. The net selects the a component of each index. For any neighborhood N, take one index with neighborhood N. Every larger index selects a point in N, proving convergence. This uses only existence of an intersection point for each particular argument, without simultaneously choosing a point for every neighborhood. The original solution explicitly uses that simultaneous choice instead.
`;export{e as default};