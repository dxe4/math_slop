var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: topological-spaces-and-open-set-language
title: "Topological Spaces and Open-Set Language"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Topological Spaces and Open-Set Language

Topology begins by discarding lengths while retaining the information needed to speak about nearness and continuity. The basic objects are not pictures but collections of subsets. This shift is powerful because the same proof can apply to Euclidean space, a space of functions, a finite state system, or a quotient obtained by gluing. It is also dangerous: intuitions imported from metric spaces can become false when their hidden hypotheses disappear.

This chapter builds the language slowly. Every operation is computed in several topologies on the same underlying set. That comparison makes the topology—not the point set—visible.

## 1. The topology axioms

A **topology** on a set $X$ is a collection $T$ of subsets of $X$ satisfying:

1. $\\varnothing$ and $X$ belong to $T$;
2. the union of every subcollection of $T$ belongs to $T$;
3. the intersection of every finite subcollection of $T$ belongs to $T$.

The pair $(X,T)$ is a **topological space**, and members of $T$ are **open**. The empty intersection is $X$, so the third rule is consistent with the first.

The word *finite* cannot be removed. In the ordinary topology on $\\mathbb{R}$, each interval $(-1/n,1/n)$ is open, but their intersection over positive integers is $\\{0\\}$, which is not open. Arbitrary unions are required because an open set may need infinitely many local pieces.

Two extreme examples exist on every set. The **indiscrete topology** $\\{\\varnothing,X\\}$ records almost no distinction among points. The **discrete topology** $\\mathcal{P}(X)$ declares every subset open. On the empty set and on a one-point set these agree; on every set with at least two points they differ.

The usual topology on $\\mathbb{R}$ consists of arbitrary unions of open intervals. An equivalent local statement is that $U$ is open exactly when every $x \\in U$ has some $\\varepsilon>0$ with $(x-\\varepsilon,x+\\varepsilon) \\subseteq U$. Equivalence of these descriptions will become systematic through bases.

## 2. Testing finite candidates

On a finite set, one can audit a proposed topology exhaustively. Let $X=\\{a,b,c\\}$ and

$T=\\{\\varnothing,\\{b\\},\\{a,b\\},\\{b,c\\},X\\}$.

Finite intersections remain on the list: the only informative one is $\\{a,b\\} \\cap \\{b,c\\}=\\{b\\}$. Unions also remain on the list; the union of the two two-point sets is $X$. Thus $T$ is a topology.

By contrast, $\\{\\varnothing,\\{a,b\\},\\{b,c\\},X\\}$ is not a topology because the intersection $\\{b\\}$ is missing. A counterexample to a topology claim should name the exact axiom and the exact subcollection that violates it.

Finite examples are not toys. They expose specialization, separation, quotient behavior, and closure identities without analytic distraction.

## 3. Closed sets and dual axioms

A subset $F$ is **closed** when $X\\setminus F$ is open. Complements and De Morgan's laws turn the topology axioms into dual statements:

- $\\varnothing$ and $X$ are closed;
- arbitrary intersections of closed sets are closed;
- finite unions of closed sets are closed.

A set may be open, closed, both, or neither. The terms are not antonyms. In every topology, $\\varnothing$ and $X$ are both open and closed, or **clopen**. In a discrete space every subset is clopen. In ordinary $\\mathbb{R}$, $[0,1)$ is neither open nor closed.

Infinite unions of closed sets need not be closed: the closed singletons $\\{1/n\\}$ have union $\\{1/n:n\\ge 1\\}$, whose limit point $0$ is absent. Dually, infinite intersections of open sets need not be open.

## 4. Interior and closure

For $A \\subseteq X$, the **interior** is

$\\operatorname{int}(A)=\\cup \\{U: U\\text{ open} \\text{ and } U \\subseteq A\\}$.

It is the largest open subset of $A$. The **closure** is

$\\operatorname{cl}(A)=\\cap \\{F: F\\text{ closed} \\text{ and } A \\subseteq F\\}$.

It is the smallest closed superset of $A$. These definitions work because arbitrary unions of open sets and arbitrary intersections of closed sets are allowed.

They immediately give

$\\operatorname{int}(A) \\subseteq A \\subseteq \\operatorname{cl}(A)$,

$int(\\operatorname{int}(A))=\\operatorname{int}(A)$, and $cl(\\operatorname{cl}(A))=\\operatorname{cl}(A)$.

Monotonicity is equally important: if $A \\subseteq B$, then $\\operatorname{int}(A) \\subseteq \\operatorname{int}(B)$ and $\\operatorname{cl}(A) \\subseteq \\operatorname{cl}(B)$. For closure, every closed set containing $B$ also contains $A$, so the smallest closed set containing $A$ cannot be larger.

In the finite topology above, closed sets are $X,\\{a,c\\},\\{c\\},\\{a\\},\\varnothing$. Hence $\\operatorname{cl}(\\{b\\})=X$, $\\operatorname{cl}(\\{a\\})=\\{a\\}$, and $\\operatorname{cl}(\\{c\\})=\\{c\\}$. The same singleton can therefore behave very differently at different points.

## 5. Neighborhood characterizations

A **neighborhood** of $x$ is a set $N$ containing some open set $U$ with $x \\in U$. Some authors reserve the word for open neighborhoods; this book says “open neighborhood” when openness is required.

The closure has a local characterization:

$x \\in \\operatorname{cl}(A)$ if and only if every open neighborhood of $x$ meets $A$.

To prove it, suppose some open $U$ contains $x$ and misses $A$. Then $X\\setminus U$ is a closed superset of $A$ that omits $x$, so $x \\notin \\operatorname{cl}(A)$. Conversely, if $x \\notin \\operatorname{cl}(A)$, the open complement $X\\setminus \\operatorname{cl}(A)$ is a neighborhood of $x$ disjoint from $A$.

Similarly, $x \\in \\operatorname{int}(A)$ exactly when $A$ is a neighborhood of $x$. These local tests are often easier than intersections over all closed supersets.

## 6. Boundary, exterior, and dense sets

The **exterior** of $A$ is $\\operatorname{int}(X\\setminus A)$. The **boundary** is

$\\partial(A)=\\operatorname{cl}(A) \\cap \\operatorname{cl}(X\\setminus A)=\\operatorname{cl}(A)\\setminus \\operatorname{int}(A)$.

A boundary point has every neighborhood meeting both $A$ and its complement. Thus

$X=\\operatorname{int}(A) disjoint-\\cup \\partial(A) disjoint-\\cup \\operatorname{int}(X\\setminus A)$.

The boundary is closed and is unchanged by complementation. A set is open exactly when it misses its boundary; it is closed exactly when it contains its boundary.

A set $A$ is **dense** in $X$ when $\\operatorname{cl}(A)=X$, equivalently when every nonempty open set meets $A$. In ordinary $\\mathbb{R}$, both $\\mathbb{Q}$ and its complement are dense. Density does not mean large measure, high proportion, or inclusion of most points.

In an indiscrete nonempty space, every nonempty subset is dense. In a discrete space, only $X$ is dense. These examples prevent importing a geometric meaning that the definition does not contain.

## 7. Accumulation and isolated points

A point $x$ is an **accumulation point** of $A$ if every neighborhood of $x$ meets $A\\setminus \\{x\\}$. The derived set $A'$ consists of all accumulation points. A point of $A$ not in $A'$ is isolated in $A$.

Always $A' \\subseteq \\operatorname{cl}(A)$. The formula $\\operatorname{cl}(A)=A \\cup A'$ also holds: if $x \\in \\operatorname{cl}(A)$ but $x \\notin A$, every neighborhood meeting $A$ automatically meets $A\\setminus \\{x\\}$. No separation axiom is needed for this definition of accumulation point. What can change across texts is whether neighborhoods are required to contain points distinct from $x$ or infinitely many points; those versions agree only under additional hypotheses.

For $A=\\{1/n:n\\ge 1\\}$ in ordinary $\\mathbb{R}$, $A'=\\{0\\}$ and $\\operatorname{cl}(A)=A \\cup \\{0\\}$. Each $1/n$ is isolated within $A$, even though it is not isolated in $\\mathbb{R}$.

## 8. Comparing topologies

If $T_{1} \\subseteq T_{2}$ on the same set, then $T_{1}$ is **coarser** and $T_{2}$ is **finer**. Finer means more open sets, not larger open sets. The discrete topology is finest and the indiscrete topology coarsest.

Refining the topology makes interiors larger or unchanged and closures smaller or unchanged. Indeed, there are more candidate open subsets for the interior and more closed supersets whose intersection can shrink the closure.

Topologies are partially ordered, not linearly ordered. On $\\{a,b\\}$, the topologies $\\{\\varnothing,\\{a\\},X\\}$ and $\\{\\varnothing,\\{b\\},X\\}$ are incomparable.

The intersection of any family of topologies on $X$ is a topology. Therefore every collection $S \\subseteq \\mathcal{P}(X)$ lies inside a unique coarsest topology: the intersection of all topologies containing $S$. This abstract construction is correct but not yet computational; Chapter 2 turns it into bases and subbases.

## 9. Kuratowski closure laws

Closure satisfies four reusable laws:

1. $\\operatorname{cl}(\\varnothing)=\\varnothing$;
2. $A \\subseteq \\operatorname{cl}(A)$;
3. $\\operatorname{cl}(A \\cup B)=\\operatorname{cl}(A) \\cup \\operatorname{cl}(B)$;
4. $cl(\\operatorname{cl}(A))=\\operatorname{cl}(A)$.

For the nontrivial direction in the union law, $\\operatorname{cl}(A) \\cup \\operatorname{cl}(B)$ is a finite union of closed sets containing $A \\cup B$, so minimality of closure gives $\\operatorname{cl}(A \\cup B) \\subseteq \\operatorname{cl}(A) \\cup \\operatorname{cl}(B)$. Monotonicity gives the reverse inclusion.

Arbitrary unions do not obey the same formula. In $\\mathbb{R}$, each $A_{n}=\\{1/n\\}$ is closed, yet $\\operatorname{cl}(\\bigcup_{n} A_{n})$ includes $0$, while $\\bigcup_{n} \\operatorname{cl}(A_{n})$ does not.

Conversely, an operator on $\\mathcal{P}(X)$ satisfying these four laws defines a topology by declaring fixed points closed. This result shows that topology can be encoded through closure rather than open sets.

## 10. Proof audit and forward map

When proving an open-set statement, record whether the operation is an arbitrary union or a finite intersection. When computing closure, choose between the closed-superset definition and the neighborhood test. When proposing a counterexample, keep the underlying set fixed and change only the topology when possible; this isolates which claim depends on topological structure.

The next chapters make open sets manageable through bases, then show that continuity is exactly preservation of this local structure by inverse image. Subspaces, products, and quotients will be characterized by universal mapping tests rather than memorized lists.

## Worked examples: reading the axioms locally

### Worked example 1 — Dense and closed points in a finite topology

Let $X=\\{a,b,c\\}$ with opens $\\varnothing,\\{b\\},\\{a,b\\},\\{b,c\\},X$. The complements show that the closed sets are $X,\\{a,c\\},\\{c\\},\\{a\\},\\varnothing$. The only closed set containing $b$ is $X$, so $\\operatorname{cl}\\{b\\}=X$: the singleton is dense. It is also open. By contrast $\\{a\\}$ is closed but not open, because it is absent from the open-set list. Its interior is empty and its boundary is itself. These conclusions come from the specified topology, although all three points look identical as unnamed elements of a set. In particular, the familiar real-line intuition that singletons always have empty interior is not an axiom of topology.

### Worked example 2 — Two dense sets with disjoint interiors

In the usual real line put $A=\\mathbb Q$ and $B=\\mathbb R\\setminus\\mathbb Q$. Every nonempty open interval contains a rational and an irrational number. Thus both closures equal $\\mathbb R$, while neither set contains a nonempty open interval, so both interiors are empty. Their boundaries are therefore the whole line. Nevertheless $A\\cap B=\\varnothing$ and $A\\cup B=\\mathbb R$. This gives two precise warnings: closure does not preserve intersections, because the intersection of the two closures is the whole line; interior does not preserve unions, because the interior of their union is the whole line. The valid finite-union law for closure and finite-intersection law for interior have the opposite placements.

### Worked example 3 — Refining a topology changes closure

Give $\\mathbb R$ first its usual topology and then its discrete topology. Let $C=(0,1)$. In the usual topology its closure is $[0,1]$, because every neighborhood of either endpoint meets $C$ and every point outside that closed interval has a neighborhood missing $C$. In the discrete topology every set is closed, so its closure is just $C$. More open neighborhoods impose more tests on a possible closure point. The endpoints fail the new singleton-neighborhood tests. This explains the direction of the general monotonicity rule: refining the topology can shrink closures and enlarge interiors, while leaving the underlying subset exactly the same.

## Exercises with complete solutions

### TOP-CH01-E001 — Exercise 1

List every topology on a one-point set.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Which subsets does a one-point set have?

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both are required by the topology axioms.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E001 — Solution 1

If $X=\\{x\\}$, then $\\varnothing$ and $X$ must be open, and these are all subsets. Hence the unique topology is $\\{\\varnothing,X\\}$, simultaneously discrete and indiscrete.


</details>

### TOP-CH01-E002 — Exercise 2

Show that the intersection of any family of topologies on $X$ is a topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check each topology axiom inside every member of the family.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A union of sets belonging to every topology still belongs to every topology.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E002 — Solution 2

Every member contains $\\varnothing,X$, so their intersection does. A family of sets lying in every topology has its arbitrary union in every topology, hence in the intersection. The same argument applies to finite intersections.


</details>

### TOP-CH01-E003 — Exercise 3

Show that the union of two topologies need not be a topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use two different proper nonempty open subsets of a three-point set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Arrange that their intersection is absent from both small topologies.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E003 — Solution 3

On $X=\\{a,b,c\\}$, take $T_{1}=\\{\\varnothing,\\{a\\},X\\}$ and $T_{2}=\\{\\varnothing,\\{b\\},X\\}$. Their union contains $\\{a\\}$ and $\\{b\\}$ but not their union $\\{a,b\\}$, so it violates closure under unions.


</details>

### TOP-CH01-E004 — Exercise 4

Audit $T=\\{\\varnothing,\\{a\\},\\{a,b\\},\\{a,c\\},X\\}$ on $X=\\{a,b,c\\}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check the intersection of the two larger proper open sets first.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Then check their union and all unions involving the singleton.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E004 — Solution 4

The intersection $\\{a,b\\} \\cap \\{a,c\\}=\\{a\\}$ is listed; other finite intersections add nothing. Any union of the two two-point sets is $X$, and all other unions are listed. Therefore $T$ is a topology.


</details>

### TOP-CH01-E005 — Exercise 5

Prove that a finite intersection of closed sets is closed without using the dual closed-set axiom as a premise.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Translate the proposed closed-set identity to complements.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply the open-set finite-intersection axiom and De Morgan's law.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E005 — Solution 5

For closed $F_{1},...,F_{n}$, De Morgan gives $X\\setminus\\bigcap_{i} F_{i}=\\bigcup_{i}(X\\setminus F_{i})$. Each complement is open and an arbitrary, hence finite, union of open sets is open. Thus the intersection is closed. In fact the same proof permits arbitrary intersections.


</details>

### TOP-CH01-E006 — Exercise 6

Give a subset of ordinary $\\mathbb{R}$ that is both open and closed, and one that is neither.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use intervals for open and closed examples.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A half-open bounded interval gives a set that is neither.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E006 — Solution 6

Both $\\varnothing$ and $\\mathbb{R}$ are clopen. The interval $[0,1)$ is not open because $0$ has no contained open interval, and not closed because its complement is not open at $1$.


</details>

### TOP-CH01-E007 — Exercise 7

Prove $\\operatorname{int}(A \\cap B)=\\operatorname{int}(A) \\cap \\operatorname{int}(B)$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

An open subset of both sets lies in their intersection.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the other inclusion, interior of an intersection is contained in both interiors.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E007 — Solution 7

The right side is open and contained in $A \\cap B$, so it lies in the interior. Conversely, $\\operatorname{int}(A \\cap B)$ is open and contained in each of $A,B$, hence in each interior and therefore their intersection.


</details>

### TOP-CH01-E008 — Exercise 8

Find a counterexample to $\\operatorname{int}(A \\cup B)=\\operatorname{int}(A) \\cup \\operatorname{int}(B)$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Look for two sets with empty interior whose union has nonempty interior.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Rationals and irrationals partition the real line.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E008 — Solution 8

In $\\mathbb{R}$, take $A=\\mathbb{Q}$ and $B=\\mathbb{R}\\setminus\\mathbb{Q}$. Each has empty interior, but their union is $\\mathbb{R}$, whose interior is $\\mathbb{R}$.


</details>

### TOP-CH01-E009 — Exercise 9

Prove $\\operatorname{cl}(A \\cap B) \\subseteq \\operatorname{cl}(A) \\cap \\operatorname{cl}(B)$ and show equality can fail.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use monotonicity for the general inclusion.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Disjoint adjacent open intervals can have closures meeting at an endpoint.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E009 — Solution 9

Monotonicity gives both inclusions from $A \\cap B \\subseteq A,B$. In $\\mathbb{R}$, take $A=(0,1)$ and $B=(1,2)$. Their intersection is empty, while their closures meet at $1$.


</details>

### TOP-CH01-E010 — Exercise 10

Compute interior, closure, and boundary of $\\mathbb{Q}$ in ordinary $\\mathbb{R}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Test every interval around an arbitrary real point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both rationals and irrationals meet every such interval.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E010 — Solution 10

Every interval contains rational and irrational points. Thus $\\operatorname{int}(\\mathbb{Q})=\\varnothing$, $\\operatorname{cl}(\\mathbb{Q})=\\mathbb{R}$, and $\\partial(\\mathbb{Q})=\\operatorname{cl}(\\mathbb{Q})\\setminus \\operatorname{int}(\\mathbb{Q})=\\mathbb{R}$.


</details>

### TOP-CH01-E011 — Exercise 11

Prove $\\partial(A)=\\partial(X\\setminus A)$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write boundary symmetrically using two closures.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Complementation swaps the two factors of that intersection.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E011 — Solution 11

The symmetric formula $\\partial(A)=\\operatorname{cl}(A) \\cap \\operatorname{cl}(X\\setminus A)$ is unchanged when $A$ and its complement are exchanged.


</details>

### TOP-CH01-E012 — Exercise 12

Prove that $A$ is closed if and only if $\\partial(A) \\subseteq A$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the formula boundary equals closure minus interior.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A closed set contains its closure; conversely any missing closure point is a boundary point.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E012 — Solution 12

If $A$ is closed, $\\operatorname{cl}(A)=A$, so its boundary lies in $A$. Conversely, $\\operatorname{cl}(A)=A \\cup \\partial(A)$: points of the closure outside $A$ cannot lie in the interior of $A$, hence lie on its boundary. If the boundary is contained in $A$, then $\\operatorname{cl}(A)=A$, so $A$ is closed.


</details>

### TOP-CH01-E013 — Exercise 13

Prove the neighborhood characterization of density.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Translate density into the absence of a nonempty open set missing the subset.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Neighborhoods contain open neighborhoods, so the two formulations agree.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E013 — Solution 13

If $\\operatorname{cl}(A)=X$, every point of a nonempty open $U$ belongs to the closure, so $U$ meets $A$. Conversely, if every nonempty open set meets $A$, every neighborhood of every point meets $A$; the closure test gives $\\operatorname{cl}(A)=X$.


</details>

### TOP-CH01-E014 — Exercise 14

Find all dense subsets of a nonempty indiscrete space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

What are the nonempty neighborhoods in the indiscrete topology?

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every such neighborhood meets any nonempty subset.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E014 — Solution 14

Every nonempty subset is dense because its only closed superset is $X$; the empty set has empty closure. Thus precisely the nonempty subsets are dense.


</details>

### TOP-CH01-E015 — Exercise 15

Find the accumulation points of $Z$ in ordinary $\\mathbb{R}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate an integer from all the other integers by a short interval.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For a noninteger use an interval avoiding the integer lattice altogether.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E015 — Solution 15

There are none. For each real $x$, choose a sufficiently small interval meeting at most one integer; if that integer is $x$, removing $x$ leaves no point of $\\mathbb{Z}$ in the interval.


</details>

### TOP-CH01-E016 — Exercise 16

If $T_{1} \\subseteq T_{2}$, compare closures computed in the two topologies.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A finer topology supplies more neighborhoods to test.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Failure of the closure test in the coarser topology also fails in the finer one.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E016 — Solution 16

The finer topology $T_{2}$ has more open sets and therefore more closed sets. Intersecting the larger collection of closed supersets can only shrink the result: $cl_{T_{2}}(A) \\subseteq cl_{T_{1}}(A)$.


</details>

### TOP-CH01-E017 — Exercise 17

Give two incomparable topologies on a three-point set.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Make one topology distinguish a point which the other cannot.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Two different singleton-generated topologies on three points suffice.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E017 — Solution 17

On $\\{a,b,c\\}$, use $\\{\\varnothing,\\{a\\},X\\}$ and $\\{\\varnothing,\\{b\\},X\\}$. Each contains an open singleton absent from the other, so neither collection includes the other.


</details>

### TOP-CH01-E018 — Exercise 18

Prove the closure union law for two sets using neighborhoods.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove the easy inclusion by monotonicity.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

If a point is in neither closure, intersect two neighborhoods missing the respective sets.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E018 — Solution 18

If $x$ lies outside both closures, choose open neighborhoods $U,V$ of $x$ disjoint from $A,B$. Then $U \\cap V$ is an open neighborhood disjoint from $A \\cup B$, so $x$ lies outside its closure. This proves $\\operatorname{cl}(A \\cup B) \\subseteq \\operatorname{cl}(A) \\cup \\operatorname{cl}(B)$; monotonicity supplies the reverse inclusion.


</details>

### TOP-CH01-E019 — Exercise 19

Why does the preceding neighborhood proof not extend directly to arbitrary unions?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare the permitted number of intersections in the topology axioms.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Intervals shrinking around zero show why infinitely many intersections are different.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E019 — Solution 19

It would require intersecting one neighborhood for every member of an arbitrary family. Topologies guarantee only finite intersections of open sets are open. The family $\\{1/n\\}$ in $\\mathbb{R}$ demonstrates the resulting failure.


</details>

### TOP-CH01-E020 — Exercise 20

Let $c:\\mathcal{P}(X)\\to P(X)$ satisfy the four Kuratowski closure laws. Prove the fixed points $\\{F:c(F)=F\\}$ are closed sets of a topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Declare the fixed sets of the closure operator to be closed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use extensivity and monotonicity for arbitrary intersections, and the finite-union axiom for finite unions.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH01-E020 — Solution 20

The empty set is fixed, and $X \\subseteq c(X) \\subseteq X$, so $X$ is fixed. For fixed $F_{i}$, monotonicity follows from the laws: if $A \\subseteq B$, then $c(B)=c(A \\cup B)=c(A) \\cup c(B)$, hence $c(A) \\subseteq c(B)$. Therefore $c(\\bigcap_{i} F_{i}) \\subseteq \\bigcap_{i} c(F_{i})=\\bigcap_{i} F_{i}$, while extensivity gives equality. For two fixed sets, $c(F \\cup G)=c(F) \\cup c(G)=F \\cup G$; induction gives finite unions. Thus the fixed points obey the closed-set axioms, and their complements form a topology.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Chapter checkpoint

A topology is a rule for which local pieces count as open. Interior extracts the largest open part, closure adds all points that no neighborhood can avoid, and boundary records unavoidable contact with both sides. Every calculation depends on the topology, and every theorem must respect the finite-intersection/arbitrary-union asymmetry. Bases will now compress this global collection into a usable local vocabulary.
`;export{e as default};