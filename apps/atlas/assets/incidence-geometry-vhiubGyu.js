var e=`---
parent_id: book-geometry-proof-reference
chapter_id: incidence-geometry
title: "Incidence Geometry"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Incidence Geometry

## Learning purpose

Incidence geometry strips geometry down to the bare relation "point lies on line." This chapter studies incidence structures, their combinatorial properties, and the conditions under which richer structure (order, congruence, parallelism) can be added. The reader learns to classify incidence structures by their parameters and to recognize when a configuration theorem forces additional axioms.

## Incidence structures

An **incidence structure** is a triple $(\\mathcal{P}, \\mathcal{L}, I)$ where $\\mathcal{P}$ is a set of points, $\\mathcal{L}$ is a set of lines, and $I \\subseteq \\mathcal{P} \\times \\mathcal{L}$ is the incidence relation. We write $P \\in \\ell$ when $(P,\\ell) \\in I$.

A structure is **simple** if any two points lie on at most one line. It is **linear** if any two points lie on exactly one line and every line contains at least two points. Linear incidence structures are also called **linear spaces**. A finite linear space is **nontrivial** when not all points lie on one line.

### Examples

- The Euclidean plane is a linear space with infinitely many points and lines.
- The Fano plane is a finite linear space with $7$ points and $7$ lines.
- A **near-pencil** on $n$ points consists of one line containing $n-1$ points and $n-1$ lines each containing $2$ points (the remaining point paired with one of the $n-1$). It is linear but degenerate in a sense made precise below.

## Counting in linear spaces

**Theorem 3.1 (de Bruijn–Erdős).** In a nontrivial finite linear space with $v$ points and $b$ lines, $b\\ge v$. Equality holds exactly for a projective plane or a near-pencil.

**Proof architecture.** Let $r_{P}$ be the number of lines through point $P$ and $k_{\\ell}$ the number of points on line $\\ell$. Counting incidences in two ways gives
$$\\sum_{P} r_{P} = \\sum_{\\ell} k_{\\ell}.$$
The standard de Bruijn--Erdős proof next compares line sizes with the numbers of lines through points not on those lines and sums the resulting inequalities to obtain $b\\ge v$. Tracing equality yields either uniform projective-plane parameters or one line containing all but one point, the near-pencil. This paragraph records the theorem's proof architecture; the incidence-inequality lemma and its equality analysis are imported rather than presented as a complete proof.

**Boundary case:** A near-pencil has one $(v-1)$-point line and $v-1$ two-point lines, hence exactly $b=v$. It is the second equality case, not an exception to the inequality. The all-collinear one-line space is excluded by nontriviality.

## Configurations

A **configuration** $(v_{r}, b_{k})$ is an incidence structure in which every point lies on exactly $r$ lines and every line contains exactly $k$ points. Counting incidences gives $vr = bk$.

### The Fano plane as a configuration

The Fano plane is a $(7_{3}, 7_{3})$ configuration: $v=7$, $b=7$, $r=3$, $k=3$. The incidence equation holds: $7 \\cdot 3 = 7 \\cdot 3$.

### The Pappus configuration

The Pappus theorem involves $9$ points and $9$ lines, each point on $3$ lines and each line through $3$ points. It is a $(9_{3}, 9_{3})$ configuration. Unlike the Fano plane, it is not a linear space because not every pair of points is joined by a line of the configuration.

## Partial linear spaces and generalized polygons

A **partial linear space** relaxes linearity: any two points lie on at most one line. A **generalized $n$-gon** is a connected partial linear space whose incidence graph has diameter $n$ and girth $2n$. In the usual **thick** case every point lies on at least three lines and every line contains at least three points. Thick generalized triangles ($n=3$) are projective planes; generalized quadrangles ($n=4$) are a rich family with no ordinary incidence triangles. Without thickness, degenerate polygons require separate wording.

**Embedding boundary:** Hall's free-completion construction embeds a partial linear space in some projective plane, which may be infinite even when the original structure is finite. Embedding in a specified plane, or in a finite projective plane, is a stronger and separate question. The Pappus configuration, for example, embeds in $\\mathbb P^2(\\mathbb R)$.

## Block designs

A **balanced incomplete block design** (BIBD) with parameters $(v,b,r,k,\\lambda)$ is an incidence structure with $v$ points, $b$ blocks (lines), each block containing $k$ points, each point in $r$ blocks, and every pair of distinct points in exactly $\\lambda$ blocks.

**Counting identities:**
$$vr = bk,\\qquad r(k-1) = \\lambda(v-1).$$

A projective plane of order $n$ is a BIBD with $(v,b,r,k,\\lambda) = (n^{2}+n+1, n^{2}+n+1, n+1, n+1, 1)$.

An affine plane of order $n$ is a BIBD with $(v,b,r,k,\\lambda) = (n^{2}, n^{2}+n, n+1, n, 1)$.

**Common error:** forgetting that a BIBD requires every pair of points to lie in exactly $\\lambda$ blocks. The Pappus configuration is not a BIBD because some pairs of points are not collinear in the configuration.

## A complete proof of the finite line bound

The earlier proof architecture can be made exact for the inequality using elementary linear algebra. The equality classification remains a separately named deeper result; the calculation below does not pretend to derive it from a rank equality alone.

**Theorem — At least as many lines as points.** In a finite nontrivial linear space, $b\\ge v$.

**Proof.** Every point lies on at least two lines: choose a fixed noncollinear triple and use its joining lines, treating a point on one side separately as in the axiomatic-systems chapter. Let $M$ be the real point-by-line incidence matrix, with entry one for incidence and zero otherwise. A diagonal entry of $MM^T$ is $r_P$, the number of lines through P. An off-diagonal entry is one, because two distinct points lie on exactly one line. Hence

$$MM^T=J+\\operatorname{diag}(r_P-1),$$

where J has every entry one. For any nonzero real column z,

$$z^TMM^Tz=\\left(\\sum_Pz_P\\right)^2+\\sum_P(r_P-1)z_P^2>0.$$

The strict inequality follows since every $r_P-1\\ge1$. Thus the rows of M are independent: a row relation $z^TM=0$ would make the displayed positive quantity zero. There can be no more independent rows than columns, so $v\\le b$. $\\square$

This proof imports no classification of finite planes. It also identifies nontriviality's role: in an all-collinear space each point has degree one, the positive diagonal disappears, and one line can serve arbitrarily many points. The additional assertion that equality forces a projective plane or near-pencil is the imported equality part of the classical de Bruijn–Erdős theorem, not a consequence claimed from this proof alone.

### Worked example 1 — A near-pencil at equality

Take points A,B,C,D,E. Use line ABCD and the four lines EA,EB,EC,ED. Pairs among the first four points use ABCD; a pair involving E uses its unique two-point line. Thus the structure is linear and nontrivial with five points and five lines. The degrees are two at A,B,C,D and four at E, while line sizes are four and two. This equality example is not uniform and therefore is not a projective plane of one common order. It explains why the near-pencil must be included in the equality classification.

### Worked example 2 — Counting the affine plane of order three

In the coordinate model over the field with three elements, there are nine points. Each of the three slopes has three intercept choices, giving nine nonvertical lines, and the three vertical lines give twelve altogether. Every point belongs to one line of each of the four directions, so its degree is four. Every line has three points. Counting flags gives $9\\cdot4=12\\cdot3=36$. Fixing a point and counting its eight companions gives $4\\cdot2=8$. The line bound is strict here, since twelve exceeds nine; an affine plane is not one of its equality cases.

### Worked example 3 — A configuration is not a full plane

In a $(9_3,9_3)$ Pappus configuration, each point has three selected incident lines and each selected line contains three points. Thus there are twenty-seven flags. For a fixed point, its three lines supply six other point occurrences; because the selected structure is partial linear, these companions are distinct. There are eight other points altogether, so at least two are not joined to the fixed point by a selected line. The configuration therefore fails the every-pair existence axiom for a linear space. An ambient projective plane may contain all nine points and all their additional joining lines, but those omitted lines are not part of the selected configuration.

## A pair count for nonuniform lines

Count unordered pairs of distinct points by their unique joining line. A line with $k$ points contributes $k(k-1)/2$ pairs, and different lines cannot contribute the same pair. Summing therefore gives $v(v-1)/2$, even when the line sizes vary. This identity does not require uniform design parameters.

For the five-point near-pencil, the four-point line contributes six pairs and its four two-point lines contribute four more. The total ten equals the number of pairs among five points. This complements the flag count, which counts point-line memberships instead. Confusing the counted objects gives a different identity, however plausible its numerical form. Neither equation alone guarantees unique joining lines in an arbitrary proposed table. The structural axiom is what licenses the partition of pairs in the proof, and must be established before the resulting arithmetic is used as evidence about a model.

## What incidence records do not contain

The affine example also verifies the uniqueness axiom directly. For two distinct points whose first coordinates differ, division by their nonzero difference in the field determines exactly one slope, and substitution determines exactly one intercept. If their first coordinates agree, their joining line is vertical; a nonvertical line cannot contain both. Through a point outside a given line there is exactly one line of the same direction. Every other direction meets the given line, because the corresponding two linear equations have a unique solution. These statements use field arithmetic, not the appearance of a nine-point drawing. They do not give an order relation or a Euclidean distance on this finite plane.

The incidence graph records points and lines as two different vertex classes. An edge is membership, not a metric segment in a drawn plane. A four-cycle says two points share two lines, so partial linearity excludes it; an odd cycle is impossible for any incidence graph, irrespective of partial linearity. These are different restrictions. Removing all four-cycles from an arbitrary graph does not by itself make it an incidence graph unless a bipartition is also specified.

Similarly a design parameter identity is a necessary arithmetic condition, not an existence theorem. Values can satisfy both counting equations while no corresponding design exists. Conversely a familiar drawing may represent a valid partial configuration while omitting most joining lines of an ambient plane. The correct universe of points and lines must be fixed before any model axiom or counting theorem is applied.

## Practice exercises

### Exercise 1
<a id="incidence-geometry-ex-1"></a>
Compute the parameters $(v,b,r,k,\\lambda)$ for the affine plane of order $3$ and verify the counting identities.


<details><summary>Hint 1</summary>

There are three choices for each affine coordinate.

</details>
<details><summary>Hint 2</summary>

Count one vertical parallel class and three slope classes.

</details>
<details><summary>Full solution</summary>

**Solution.**
Points: $v = 3^{2} = 9$. Lines: $b = 3^{2}+3 = 12$. Each line has $k=3$ points. Each point lies on $r=4$ lines (one per parallel class, and there are $4$ classes including vertical). Every pair of points determines a unique line, so $\\lambda=1$.

Check: $vr = 9 \\cdot 4 = 36$, $bk = 12 \\cdot 3 = 36$. And $r(k-1) = 4 \\cdot 2 = 8$, $\\lambda(v-1) = 1 \\cdot 8 = 8$. Both identities hold.

</details>

### Exercise 2
<a id="incidence-geometry-ex-2"></a>
Show that in any linear space with $v \\geq 2$ points, $b \\geq 1$. When does $b=1$?


<details><summary>Hint 1</summary>

Choose two distinct points and use their unique joining line.

</details>
<details><summary>Hint 2</summary>

If not all points lie on that line, a triangle supplies more lines.

</details>
<details><summary>Full solution</summary>

**Solution.**
If all points are collinear, one line suffices and $b=1$. If there exist three noncollinear points, at least three lines are needed (the sides of the triangle), so $b \\geq 3$. Thus $b=1$ if and only if the space consists of a single line containing all points.

</details>

### Exercise 3
<a id="incidence-geometry-ex-3"></a>
Prove that every configuration $(v_r,b_k)$ satisfies $vr=bk$. Explain why the second identity $r(k-1)=\\lambda(v-1)$ requires the additional BIBD hypothesis, using the Pappus configuration as a counterexample to automatic pair regularity.


<details><summary>Hint 1</summary>

Count point–block flags first.

</details>
<details><summary>Hint 2</summary>

For the second identity, fix a point and count its companions with multiplicity.

</details>
<details><summary>Full solution</summary>

**Solution.**
Count incidences: each of $v$ points is on $r$ lines, giving $vr$ flags; each of $b$ lines has $k$ points, giving $bk$ flags. Hence $vr=bk$. The Pappus configuration is a $(9_3,9_3)$ configuration, so $r(k-1)=3\\cdot2=6$, while $v-1=8$; no integer $\\lambda$ can satisfy $6=8\\lambda$. A BIBD adds the hypothesis that every point pair occurs in the same number $\\lambda$ of blocks. Only then may one count, for fixed $P$, the pairs $(Q,\\ell)$ with $P,Q\\in\\ell$ to obtain $r(k-1)=\\lambda(v-1)$.

</details>

### Exercise 4
<a id="incidence-geometry-ex-4"></a>
Explain why the Petersen graph is not the incidence graph of a partial linear space.


<details><summary>Hint 1</summary>

Every incidence graph has a prescribed bipartition.

</details>
<details><summary>Hint 2</summary>

The Petersen graph contains a cycle of odd length.

</details>
<details><summary>Full solution</summary>

**Solution.**
The Petersen graph has $10$ vertices and girth $5$. If it were an incidence graph of a partial linear space, vertices would partition into points and lines, edges would represent incidence, and the girth condition would correspond to the absence of $4$-cycles (no two points on two lines). However, the Petersen graph is not bipartite: it contains odd cycles (girth $5$). An incidence graph of any incidence structure is bipartite by construction (points on one side, lines on the other). Hence the Petersen graph cannot be an incidence graph.

</details>

## Forward and backward connections

This chapter generalizes the incidence axioms used in **Finite Geometries** and **Projective Planes**. The counting techniques (de Bruijn–Erdős, BIBD identities) are essential tools for **Ordered Geometry**, where betweenness adds structure beyond pure incidence. The block-design perspective connects to combinatorial design theory and to applications in statistics and coding theory.

## Further exercises

### Exercise 5
<a id="incidence-geometry-ex-5"></a>

Show two distinct lines of a linear space have at most one common point.

<details><summary>Hint 1</summary>

Two common points would determine a unique line.

</details>
<details><summary>Hint 2</summary>

Use distinctness of those points.

</details>
<details><summary>Full solution</summary>

If distinct lines shared two distinct points P,Q, each would be the unique line through P,Q, forcing them equal. Therefore their intersection contains at most one point. The statement uses only uniqueness, not an assumption that every pair of lines actually meets; affine parallel lines show why existence of a line intersection is separate.

</details>

### Exercise 6
<a id="incidence-geometry-ex-6"></a>

Count the lines in a near-pencil on five points.

<details><summary>Hint 1</summary>

One point is outside a four-point line.

</details>
<details><summary>Hint 2</summary>

Join it separately to each point of that line.

</details>
<details><summary>Full solution</summary>

There is one four-point line and four two-point lines joining the outside point to each point on it, for five lines total. Every pair on the large line uses that line, and a pair involving the outside point uses its dedicated two-point line. Thus it is a nontrivial linear space with as many lines as points.

</details>

### Exercise 7
<a id="incidence-geometry-ex-7"></a>

Derive the BIBD pair-counting identity by fixing one point.

<details><summary>Hint 1</summary>

Count pairs consisting of another point and a block containing both.

</details>
<details><summary>Hint 2</summary>

Count first by blocks and then by companion points.

</details>
<details><summary>Full solution</summary>

Fix P. Its r incident blocks each contain k-1 other points, giving r(k-1) incidences with companions. Each of the v-1 other points shares exactly lambda blocks with P, giving lambda(v-1). The two counts describe the same finite set, proving equality. Constant pair multiplicity is the precise extra hypothesis beyond a regular configuration.

</details>

### Exercise 8
<a id="incidence-geometry-ex-8"></a>

Show a partial linear space has no four-cycle in its incidence graph.

<details><summary>Hint 1</summary>

A four-cycle alternates between two points and two lines.

</details>
<details><summary>Hint 2</summary>

Both lines would contain the same two points.

</details>
<details><summary>Full solution</summary>

A four-cycle P,L,Q,M,P would have distinct points P,Q on distinct lines L,M. This violates the at-most-one-line condition. Conversely such a repeated point pair produces that four-cycle. Bipartiteness alone does not exclude four-cycles, so an arbitrary bipartite graph is not automatically the incidence graph of a partial linear space.

</details>

### Exercise 9
<a id="incidence-geometry-ex-9"></a>

Explain why a selected configuration inside a projective plane need not itself be a projective plane.

<details><summary>Hint 1</summary>

Only the selected lines count as lines of the configuration.

</details>
<details><summary>Hint 2</summary>

A joining line in the ambient plane might be omitted.

</details>
<details><summary>Full solution</summary>

A subconfiguration can omit the ambient joining line of two selected points. Those points then have no joining line inside the selected structure, even though they do in the full plane. Likewise selected lines can meet at an unselected point. Incidence axioms must be checked in the chosen point and line sets, not borrowed automatically from the ambient model.

</details>

### Exercise 10
<a id="incidence-geometry-ex-10"></a>

For a projective plane of order two verify the two design identities.

<details><summary>Hint 1</summary>

Use seven points and three points per line.

</details>
<details><summary>Hint 2</summary>

Each point is on three lines and each pair on one.

</details>
<details><summary>Full solution</summary>

The parameters are v=b=7, r=k=3, lambda=1. Thus vr=bk=21 and r(k-1)=6=lambda(v-1). These identities certify necessary counting consistency. They do not alone prove existence of an incidence structure with those parameters; the explicit Fano block list in [Axiomatic Systems](axiomatic-systems.md) supplies the separate existence proof.

</details>

## Sources and provenance

The existing exposition, hypotheses, exercise statements and complete solutions are retained. Added proofs, worked examples and staged hints are original Euler prose under CC BY-SA 4.0. Primary historical reference: David Hilbert, [The Foundations of Geometry](https://www.gutenberg.org/ebooks/17384). A primary-author course comparison is Neil Donaldson, [Math 161 notes](https://www.math.uci.edu/~ndonalds/math161/notes.pdf). Historical source and theorem boundaries remain recorded in the book’s [references](back-matter/references.md).

## Summary

Incidence fixes membership without introducing order or distance. Double counting yields configuration and design identities, and a positive incidence-matrix argument proves the finite nontrivial line bound. Equality classification and advanced embedding results keep their stated imported scope. The next chapter adds betweenness and proves how a line separates an ordered plane.
`;export{e as default};