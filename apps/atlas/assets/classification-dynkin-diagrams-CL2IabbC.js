var e=`---
parent_id: book-lie-groups-lie-algebras
chapter_id: classification-dynkin-diagrams
title: "Classification and Dynkin Diagrams"
level: graduate
license: CC BY-SA 4.0
---

# Classification and Dynkin Diagrams {#section-1-classification-and-dynkin-diagrams}

The classification is a consequence of positive definiteness, together with
the integral angles established in [Root Systems](root-systems.md). A picture
of the familiar diagrams is not a proof that the list is exhaustive. We
will exclude every other graph, prove existence for every surviving graph,
and explain exactly the equivalence under which the answer is unique.
The objects classified are finite reduced crystallographic root systems
in a positive Euclidean space. The classification of complex semisimple
Lie algebras requires an additional existence and uniqueness theorem for
Lie algebras with a specified root system; that theorem is not silently
identified with the root-system theorem proved here.

Choose simple roots alpha-one through alpha-r. Their Cartan integers are
a-ij equal to twice the inner product of alpha-i with alpha-j divided
by the squared length of alpha-i. Our row convention therefore puts
the coroot in the first position. A Dynkin diagram has one vertex per
simple root, and the product a-ij a-ji edges between two vertices.
The product is zero, one, two or three. For multiple edges an arrow
points toward the shorter root. Reversing the convention for the Cartan
matrix transposes the matrix without changing this geometric arrow rule.

<a id="section-21-the-positive-matrix-behind-a-diagram"></a>
## The positive matrix behind a diagram {#section-23-the-positive-matrix-behind-a-diagram}

Scale each simple root to length square two, without claiming that the
scaled vectors are roots. Their Gram matrix C has diagonal entries two.
Its off-diagonal entry on an edge of multiplicity m is minus the square
root of m. All other entries vanish. The simple roots are a basis, so
C is positive definite. Every principal submatrix is positive definite
as well, because a nonzero vector supported on the selected vertices
still has a positive quadratic value.

The underlying graph is connected precisely when the root system is
irreducible. Indeed, disconnected simple-root components span orthogonal
spaces. Every root is Weyl-conjugate to a simple root, and each generating
reflection preserves those component spaces, so every root lies in one
component. Conversely, an orthogonal decomposition of the roots separates
the simple roots and hence the graph. It is enough to classify connected
diagrams and then take orthogonal disjoint unions.

**Lemma 11.1 (Forbidden subgraphs).** A connected positive diagram is a
tree, has vertex degree at most three, has at most one vertex of degree
three, has at most one multiple edge, and cannot contain both a multiple
edge and a vertex of degree three. A triple edge constitutes the whole
diagram.

*Proof.* For a cycle, put coefficient one on its vertices and zero
elsewhere. The diagonal contribution is twice the number of vertices.
Each cycle edge subtracts at least two. Extra chords only subtract
more, so the quadratic value is nonpositive. This contradicts positivity.
Thus the graph is a tree.

If a vertex has four neighbors, use coefficient two at the center
and one at four chosen neighbors. The diagonal contribution is sixteen,
and the four edges subtract at least sixteen. The absence of cycles
means that there are no edges among those neighbors. Again positivity
fails. Larger degree contains this forbidden principal configuration.

If two degree-three vertices exist, choose their shortest connecting
path, put coefficient two at every vertex of that path, and put
coefficient one at two additional neighbors at each end. There are
four additional leaves. If the path has k vertices, the diagonal
sum is eight k plus eight. Its k minus one path edges subtract
at least eight each, and its four end edges subtract at least
four each. The total is at most zero. This excludes two branches.

For the multiple-edge assertions we can discard any other branches
and inspect a minimal connecting path. A path Gram determinant obeys

$$D_0=1,\\qquad D_1=2,\\qquad
D_j=2D_{j-1}-m_{j-1}D_{j-2}.$$

Here m is the edge multiplicity. A triple edge followed by even one
single edge gives leading determinants two, one, zero; a stronger
following edge makes the last value smaller. A triple edge can have
no additional vertex. For two double edges joined by single edges,
the leading determinants are two, two, then remain two along the
single edges; the final double edge gives zero. Two multiple edges
therefore cannot coexist.

Finally suppose a double edge and a branch coexist. Take the branch,
two of its other neighbors, and the path leading to and across the
double edge. Eliminating the two leaf variables by completing squares
reduces the diagonal entry of the branch from two to one: each
single leaf subtracts one half. Along the single path starting at
this entry the determinants are all one, since the recurrence starts
with one and one. Crossing the double edge produces zero. If any
chosen leaf edge was multiple, an already forbidden configuration
would be present or the subtraction would be larger. This proves
the last exclusion. ∎

These arguments use test vectors or principal determinants, not a
visual impression that a diagram is too large. They remain valid
inside a larger diagram: extending the selected vector by zero or
taking the selected principal submatrix preserves the contradiction.

<a id="section-95-exhausting-the-possible-trees"></a>
## Exhausting the possible trees {#section-97-exhausting-the-possible-trees}

A connected graph without a branch is a chain. With only single edges
it is A-r. A triple edge gives the rank-two diagram G-two. Consider
a chain with one double edge. Suppose there are p vertices on one
side of the double edge, including its endpoint, and q on the other.
Both numbers are positive. The single-edge chain with p vertices
has determinant p plus one; the endpoint entry of its inverse is
p divided by p plus one. Both statements follow from the displayed
determinant recurrence and the cofactor formula for an inverse entry.

Use a Schur complement to join the two chains by an edge of squared
weight two. Positivity is equivalent to positivity of the two chains
and the remaining scalar condition

$$1-\\frac{2pq}{(p+1)(q+1)}>0,
\\qquad\\text{equivalently}\\qquad (p-1)(q-1)<2.$$

Assume p is at most q. Either p equals one, with q arbitrary, or
p and q both equal two. The first case is B-r or C-r according
to which endpoint is shorter. The second is F-four. In rank two
the two endpoint orientations describe the same system up to a
similarity and a relabeling, so B-two and C-two are the same type.
In higher rank the two orientations give distinct types. For F-four,
reversing the path while exchanging long and short gives the same
diagram type. There is consequently only one F-four entry.

It remains to classify a single branch with only single edges. Let
the three arm lengths, counted away from the central vertex, be
p at most q at most r, each at least one. Eliminating the arm
matrices leaves the central Schur complement

$$2-\\frac p{p+1}-\\frac q{q+1}-\\frac r{r+1}
=\\frac1{p+1}+\\frac1{q+1}+\\frac1{r+1}-1.$$

All arms are positive, so the entire matrix is positive precisely
when the last expression is positive. If p were at least two,
the sum of the three reciprocals would be at most one. Hence
p equals one. If q equals one, every r is allowed: the resulting
diagram is D of rank r plus three. If q equals two, the inequality
requires r plus one less than six, leaving r equal to two, three
or four. These are E-six, E-seven and E-eight. If q were at least
three, the sum would be at most one again. Nothing remains.

**Theorem 11.2 (Exhaustive diagram list).** Every irreducible finite
reduced crystallographic root system has one of the diagrams

$$A_r\\ (r\\ge1),\\quad B_r,C_r\\ (r\\ge2),\\quad D_r\\ (r\\ge4),
\\quad E_6,E_7,E_8,F_4,G_2.$$

The B-two/C-two identification is understood. The convention D-three
is omitted because its graph is A-three, and D-two is disconnected.
This theorem so far proves necessity. The next argument supplies
existence without assuming the exceptional root systems beforehand.

<a id="section-150-existence-from-an-integral-reflection-lattice"></a>
## Existence from an integral reflection lattice {#section-152-existence-from-an-integral-reflection-lattice}

Take one listed diagram, its specified length ratios and its normalized
positive Gram matrix. Positivity follows from exactly the chain and
Schur-complement inequalities already computed. Choose vectors alpha-i
with that Gram matrix and with the indicated relative lengths.
Their actual Cartan entries are integers: along a single edge they
are minus one in both directions, along a double edge minus one
and minus two, and along a triple edge minus one and minus three.

Let Q be their integer span and let W be generated by their
orthogonal reflections. Each reflection preserves Q, by the integral
Cartan entries. W is finite. To see this without invoking a theorem
about Coxeter groups, observe that an isometry preserving Q can send
each basis vector only to a lattice point on a fixed bounded sphere.
A lattice has finitely many points in a bounded set: its basis-coordinate
inverse maps that set into a bounded box in real coordinate space,
and there are finitely many integer tuples in that box. There are
therefore only finitely many choices for the images of all basis
vectors, and a linear map is determined by those images.

Set R to be the union of the W-orbits of the chosen vectors.
It is finite, spans the space, excludes zero, and is stable under
reflection in each of its own members, since such a reflection
is a conjugate of a generating reflection. It is crystallographic:
the coroot of w alpha-i pairs integrally with Q, by transporting
the pairing back through w-inverse. Every root belongs to Q.
It is reduced as well. All root lengths are the chosen simple
lengths, whose largest-to-smallest squared ratio is at most three.
If roots beta and c beta were distinct positive scalar multiples,
integrality in both directions would give both twice c and twice
its reciprocal integral. The only possible nontrivial positive ratios
are two and one half; these would require squared length ratio
four, which is absent. Thus only beta and minus beta lie on
each root line. Connectedness of the original diagram forces R
to be irreducible, because an orthogonal decomposition would separate
its generating vectors.

We have constructed a root system, but should not skip a subtlety:
an arbitrary integral obtuse basis is not being declared a simple
basis without argument. We identify the resulting type through invariants
that also give a useful numerical way to recognize exceptional cases.
Its root lattice is exactly Q, since the generators are roots and
all their reflected images remain in Q. Its coroot lattice is exactly
the integer span of the generating coroots, for the same reason.

Normalize the shortest roots to length square two. The determinant
of a root-lattice Gram matrix is independent of the chosen integer
basis: an integer change between lattice bases has determinant plus
or minus one. Together with the corresponding determinant for the
normalized dual root system, rank and length ratio distinguish the
listed possibilities. Here are the determinant computations, including
the exceptional ones, rather than a reliance on a classification table.

For a single-edge chain the recurrence gives r plus one. For a
three-arm diagram the determinant is the product of the three arm
determinants times the central Schur complement. It gives four for
D-r, three for E-six, two for E-seven and one for E-eight. For
example the E-eight arm product is two times three times five,
and its central complement is one thirtieth. These determinants
are distinct from the other simply-laced diagrams of the same rank.

For a one-ended double chain the Cartan determinant is two. Multiplying
by the product of the simple squared lengths divided by two converts
it to the Gram determinant. For B-r this gives two to the power
r, and for C-r it gives four. The normalized dual exchanges these
values. In F-four the Cartan determinant is one and there are two
long simple roots of squared length four, giving Gram determinant
four; its normalized dual also gives four. At rank four this pair
differs from both B-four and C-four. G-two has length ratio square
three, which no other listed system has. The rank-two double case
has the same pair for B-two and C-two, as expected.

The constructed system must have one of the types already proved
necessary, and these invariants force precisely the intended entry.
Thus every entry exists. This argument also proves why adding an
exceptional name to a list would not suffice: one needs either an
explicit root model or a finite reflection-lattice construction with
an identification argument such as this one.

<a id="section-230-uniqueness-and-three-worked-recognitions"></a>
## Uniqueness and three worked recognitions {#section-232-uniqueness-and-three-worked-recognitions}

**Theorem 11.3 (Root-system classification).** Two irreducible finite
reduced crystallographic root systems with the same Dynkin diagram
are related by a linear similarity taking roots to roots. Every
system is an orthogonal sum of these irreducible types, uniquely
up to permutation of its components.

*Proof.* The diagram determines all length ratios and all pairwise
angles between simple roots. Connectedness fixes the relative lengths
throughout the graph. After one overall rescaling, the two simple
bases have identical Gram matrices and hence are related by an
isometry. That isometry intertwines the simple reflections. Every
root is Weyl-conjugate to a simple root, by the descent proof in
the preceding root chapter, so the isometry takes the entire root
set to the other root set. Orthogonal components are precisely the
connected components of the diagram; their uniqueness follows. ∎

**Worked example 1: a proposed extra exceptional graph.** Consider
single-edge arms of lengths one, two and five. The rank is nine.
Its central complement is one half plus one third plus one sixth
minus one, which is zero. Completing squares on the arms supplies
a nonzero vector of zero quadratic value, so this cannot be a
finite Euclidean root system. The failure is equality, not a small
numerical rounding error. The corresponding semidefinite graph has
other important uses, but it lies outside the positive-definite theorem.

**Worked example 2: recognizing B versus C.** In Euclidean r-space,
the roots plus or minus e-i and plus or minus e-i plus or minus
e-j form B-r. Adjacent differences e-i minus e-(i+1), followed by
e-r, give its simple roots. For C-r replace the single-coordinate
roots by plus or minus twice e-i and take last simple root twice
e-r. In rank at least three, B has one short simple endpoint
and C one long endpoint. After shortest-length normalization their
root-lattice determinant pairs are respectively (two-to-r, four) and
(four, two-to-r). Thus the diagrams encode a distinction in lattice
geometry, not just a preferred way to draw an arrow. In rank two,
a rotation and scale exchange the two descriptions.

**Worked example 3: E-six by arithmetic.** A simply-laced rank-six
connected diagram with a branch has three arms totaling five vertices.
The positive possibilities from the inequality are one, one, three
and one, two, two. The first is D-six, with determinant four;
the second is E-six, with determinant three. A chain would be
A-six, with determinant seven. A lattice Gram determinant of three,
together with these hypotheses, therefore singles out E-six. It does
not by itself say that any arbitrary rank-six integral lattice of
determinant three is a root lattice: the root-system hypotheses
and the preceding exhaustive list are doing essential work.

<a id="section-280-exercises-with-staged-hints-and-solutions"></a>
## Exercises with staged hints and solutions {#section-282-exercises-with-staged-hints-and-solutions}

### Exercise 11.1: a cycle obstruction {#classification-dynkin-diagrams-ex-1}

Show that a triangle of single edges cannot be a finite Dynkin diagram.

<details>
<summary>Hint 1</summary>
Use the normalized Gram matrix, whose diagonal is two and whose
three off-diagonal edge entries are minus one.
</details>
<details>
<summary>Hint 2</summary>
Evaluate its quadratic form on the vector with all three coordinates one.
</details>
<details>
<summary>Solution</summary>
The three diagonal terms add to six. Each of the three edges
contributes minus two, giving zero. The vector is nonzero, so
the matrix is not positive definite. The argument uses a principal
submatrix and therefore also forbids a triangle inside a larger graph.
</details>

### Exercise 11.2: degree four {#classification-dynkin-diagrams-ex-2}

Find a zero vector for the quadratic form of a single-edge four-leaf star.

<details>
<summary>Hint 1</summary>
Give every leaf the same coordinate and solve the leaf equations.
</details>
<details>
<summary>Hint 2</summary>
Take the center coordinate twice the leaf coordinate.
</details>
<details>
<summary>Solution</summary>
Use center two and leaves one. The form is eight from the center
plus eight from the leaves minus sixteen from the edges, hence
zero. In fact multiplying the matrix by this vector gives zero
at each coordinate. Extra edge weights only make the same test
value smaller, which explains the general degree bound.
</details>

### Exercise 11.3: path determinants {#classification-dynkin-diagrams-ex-3}

Prove that a single-edge path of r vertices has determinant r plus one.

<details>
<summary>Hint 1</summary>
Expand the tridiagonal determinant at the last row.
</details>
<details>
<summary>Hint 2</summary>
The recurrence is D-r equal to twice D-(r-1) minus D-(r-2).
</details>
<details>
<summary>Solution</summary>
The empty determinant is one and the first determinant two. If
the preceding values are r and r minus one, the recurrence
gives twice r minus r plus one, namely r plus one. Induction
proves the formula. All leading determinants are positive, which
also proves positive definiteness by successive square completion.
</details>

### Exercise 11.4: two double edges {#classification-dynkin-diagrams-ex-4}

Explain why a chain whose two end edges are double and whose other edges
are single is impossible, even if the end edges are far apart.

<details>
<summary>Hint 1</summary>
Start the leading determinant recurrence at the first double edge.
</details>
<details>
<summary>Hint 2</summary>
The first two nonempty determinants are both two; single edges keep them equal.
</details>
<details>
<summary>Solution</summary>
The recurrence starts with two and two. At a single edge, twice
two minus two stays two. At the last double edge the value
becomes twice two minus twice two, zero. A positive matrix must
have positive principal determinants, giving a contradiction independent
of the chain's length. Additional vertices cannot repair this principal obstruction.
</details>

### Exercise 11.5: locating F-four {#classification-dynkin-diagrams-ex-5}

Classify a positive double-edge chain whose double edge is not at an end.

<details>
<summary>Hint 1</summary>
Both side lengths p and q are at least two.
</details>
<details>
<summary>Hint 2</summary>
Use the strict inequality (p minus one)(q minus one) less than two.
</details>
<details>
<summary>Solution</summary>
Both factors are positive integers, so their product can be less
than two only if both equal one. Hence p and q equal two.
There are four vertices, and this is F-four. In particular moving
the double edge farther into a long chain cannot produce another
finite family. The strictness of positivity excludes the equality cases.
</details>

### Exercise 11.6: the D family {#classification-dynkin-diagrams-ex-6}

Compute the determinant for arms one, one and r minus three, where r is at least four.

<details>
<summary>Hint 1</summary>
The arm determinants multiply to four times r minus two.
</details>
<details>
<summary>Hint 2</summary>
The remaining central complement is the reciprocal of r minus two.
</details>
<details>
<summary>Solution</summary>
The two short arms each contribute two. The third contributes
r minus two. The central complement is one half plus one half
plus the reciprocal of r minus two minus one, leaving that
reciprocal. Multiplication gives four. It is positive for every
allowed rank, and the total rank is indeed r.
</details>

### Exercise 11.7: why E stops {#classification-dynkin-diagrams-ex-7}

For arms one, two and r, determine every positive case with r at least two.

<details>
<summary>Hint 1</summary>
The first two reciprocal contributions add to five sixths.
</details>
<details>
<summary>Hint 2</summary>
You need the reciprocal of r plus one strictly greater than one sixth.
</details>
<details>
<summary>Solution</summary>
The inequality becomes r plus one less than six. Thus r is
two, three or four, giving ranks six, seven and eight. At
r equal to five the form has a null direction, and larger
r makes its Schur complement negative. This proves the exceptional
cutoff instead of merely observing that familiar diagrams stop at eight.
</details>

### Exercise 11.8: finiteness of the reflection group {#classification-dynkin-diagrams-ex-8}

Explain where positive definiteness enters the reflection-lattice existence proof.

<details>
<summary>Hint 1</summary>
The group preserves lengths of the chosen lattice basis vectors.
</details>
<details>
<summary>Hint 2</summary>
A positive sphere is bounded in basis coordinates; an indefinite level set need not be.
</details>
<details>
<summary>Solution</summary>
Positive definiteness makes each fixed-length sphere bounded. Its
intersection with the lattice is finite, so each basis image has
finitely many choices and the whole group is finite. In an
indefinite bilinear space the fixed quadratic-value set can be unbounded,
and the same reasoning fails. Integrality alone consequently does
not establish a finite root system.
</details>

### Exercise 11.9: reducedness {#classification-dynkin-diagrams-ex-9}

If two crystallographic roots beta and c beta have c positive, show that
c is one half, one or two. Explain the length bound used in the construction.

<details>
<summary>Hint 1</summary>
Both twice c and twice divided by c must be positive integers.
</details>
<details>
<summary>Hint 2</summary>
Their product is four; enumerate the positive integer factor pairs.
</details>
<details>
<summary>Solution</summary>
The possible pairs are one and four, two and two, or four
and one. These give c equal to one half, one or two.
The nonunit possibilities require squared root-length ratio four.
The constructed systems have largest squared ratio at most three,
so they cannot occur. This verifies reducedness rather than
assuming that reflection closure would imply it automatically.
</details>

### Exercise 11.10: recognizing E-seven {#classification-dynkin-diagrams-ex-10}

Find the three possible irreducible simply-laced rank-seven types and their lattice determinants.

<details>
<summary>Hint 1</summary>
There is a chain, the ordinary D branch, and one exceptional branch.
</details>
<details>
<summary>Hint 2</summary>
For the exceptional case use arms one, two and three.
</details>
<details>
<summary>Solution</summary>
The types are A-seven, D-seven and E-seven. Their determinants
are eight, four and two respectively. For the last, the arm
product is two times three times four, and the central complement
is one half plus one third plus one fourth minus one, namely
one twelfth. The resulting determinant is two.
</details>

### Exercise 11.11: diagram uniqueness {#classification-dynkin-diagrams-ex-11}

Why does matching the Gram matrices of simple roots match all roots,
rather than only the chosen bases?

<details>
<summary>Hint 1</summary>
An isometry intertwines the reflection in a vector with reflection in its image.
</details>
<details>
<summary>Hint 2</summary>
Use the earlier height descent that takes every root to a simple root.
</details>
<details>
<summary>Solution</summary>
Every root is a product of simple reflections applied to a simple
root. The basis isometry carries that product to the corresponding
product for the second system, so it carries every root into
the second system. Applying its inverse proves surjectivity. Without
the descent result, equality of a few pairwise angles would not
by itself establish equality of the entire finite sets.
</details>

### Exercise 11.12: what has been classified {#classification-dynkin-diagrams-ex-12}

Does this chapter prove that each listed diagram determines a unique
connected compact Lie group? Give a concrete obstruction to that conclusion.

<details>
<summary>Hint 1</summary>
Separate a root system, a Lie algebra, and a global Lie group.
</details>
<details>
<summary>Hint 2</summary>
Recall the covering from SU(2) to SO(3).
</details>
<details>
<summary>Solution</summary>
No. SU(2) and SO(3) have isomorphic Lie algebras and the same
rank-one root system, but their global topology differs: the
first is simply connected and covers the second with kernel
of order two. This chapter classifies Euclidean root systems.
Lie-algebra reconstruction and global forms require additional arguments,
and the global form also controls which highest-weight representations descend.
</details>

<a id="section-542-summary"></a>
## Summary {#section-544-summary}

Positive principal forms forbid cycles, repeated branches and repeated
multiple edges. Two Schur-complement inequalities then leave exactly the
classical chains and the five exceptional diagrams. Integral reflection
lattices prove existence, and simple-root Gram matrices plus root descent
prove uniqueness up to similarity. The classification records local
root geometry; it keeps separate the further Lie-algebra reconstruction
and the global topology of groups. Highest weights will next connect
these diagrams to concrete finite-dimensional representations.

<a id="section-559-sources"></a>
## Sources {#section-561-sources}

Humphreys and the institution-hosted Kirillov notes provide further reading on root systems and Dynkin diagrams.
`;export{e as default};