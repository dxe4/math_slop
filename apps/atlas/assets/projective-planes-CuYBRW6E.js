var e=`---
parent_id: book-geometry-proof-reference
chapter_id: projective-planes
title: "Projective Planes"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Projective Planes

## Learning purpose

Projective geometry completes an affine plane by adding "points at infinity" so that every pair of lines meets. This chapter introduces the axioms of a projective plane, constructs the real projective plane $\\mathbb{P}^{2}(\\mathbb{R})$, and states Desargues' and Pappus' theorems with their coordinatization scope. The reader learns to reason with homogeneous coordinates and to recognize when a Euclidean theorem is really a projective theorem in disguise.

## Axioms of a projective plane

A **projective plane** is an incidence structure satisfying:

- (P1) Any two distinct points lie on exactly one line.
- (P2) Any two distinct lines meet in exactly one point.
- (P3) There exist four points, no three collinear.

Axiom P3 guarantees that the plane is nondegenerate: it is not just a single line or a triangle.

**Comparison:** P1--P3 and the elliptic incidence axioms E1--E4 are equivalent incidence packages. P3 yields at least three points on each line by the standard quadrangle construction. Conversely, from a noncollinear triple, use E4 to choose a third point on one side and then a third point on a suitable joining line; P1--P2 verify a four-point quadrangle. Metric elliptic geometry adds more structure than either incidence package.

## The real projective plane

### Homogeneous coordinates

A point in $\\mathbb{P}^{2}(\\mathbb{R})$ is represented by a nonzero triple $(x:y:z)$, with the equivalence $(x:y:z) \\sim (\\lambda x : \\lambda y : \\lambda z)$ for any $\\lambda \\neq 0$. A line is the set of points satisfying a linear equation
$$ax + by + cz = 0$$
with $(a,b,c) \\neq (0,0,0)$, again defined up to scalar multiple.

**Verification of P1:** Two distinct points $P=(x_{1}:y_{1}:z_{1})$ and $Q=(x_{2}:y_{2}:z_{2})$ determine a unique line because the matrix
$$\\begin{pmatrix} x_{1} & y_{1} & z_{1} \\\\ x_{2} & y_{2} & z_{2} \\end{pmatrix}$$
has rank $2$ (the points are distinct), so its nullspace is one-dimensional, giving a unique line $(a:b:c)$.

**Verification of P2:** Two distinct lines have coefficient vectors that span a two-dimensional subspace of $\\mathbb{R}^{3}$; their intersection is the one-dimensional nullspace of the corresponding $2 \\times 3$ matrix, hence a unique point.

### Affine embedding

The affine plane $\\mathbb{R}^{2}$ embeds into $\\mathbb{P}^{2}(\\mathbb{R})$ via $(x,y) \\mapsto (x:y:1)$. The **line at infinity** is $z=0$, with points $(x:y:0)$ representing directions of parallel lines in $\\mathbb{R}^{2}$. Parallel affine lines meet at their common direction point on the line at infinity, restoring P2.

**Common error:** treating homogeneous coordinates as ordinary Cartesian triples. The scalar equivalence means that $(1:2:3)$ and $(2:4:6)$ are the same point, and no point has a unique coordinate representation.

## Duality

In any projective plane, interchanging "point" and "line" while reversing incidence yields another projective plane, the **dual plane**. The axioms P1 and P2 are symmetric under this interchange, so the dual of a projective plane is a projective plane.

**Theorem 11.4 (Principle of duality).** If a theorem about points and lines in a projective plane is provable from P1–P3, then the dual statement (interchanging "point" and "line") is also provable.

**Proof sketch.** Replace every atomic incidence statement "point $P$ lies on line $\\ell$" with "line $P$ passes through point $\\ell$" in the proof. The logical structure and the axioms are preserved because P1 and P2 are dual to each other.

## Theorems of Desargues and Pappus

### Desargues' theorem

**Theorem 11.5 (Desargues, coordinatized scope).** Let $\\triangle ABC$ and $\\triangle A'B'C'$ be two triangles in a projective plane coordinatized by a division ring, in general position so the named joins and intersections are defined and distinct. If the lines $AA'$, $BB'$, $CC'$ are concurrent (meet at a point $O$), then the intersection points
$$P = AB \\cap A'B',\\quad Q = BC \\cap B'C',\\quad R = CA \\cap C'A'$$
are collinear.

**Hypothesis note:** The theorem is a statement of projective incidence geometry. It holds in $\\mathbb{P}^{2}(\\mathbb{R})$ and in any projective plane coordinatized by a skew field. There exist non-Desarguesian projective planes (finite ones, for example) in which the theorem fails; these cannot be coordinatized by a skew field.

**Proof architecture.** In homogeneous coordinates, write each primed vertex as a linear combination of its corresponding unprimed vertex and the concurrency vector. Cross products in the commutative case, or row-nullspace calculations over a division ring with a fixed sided convention, produce $P,Q,R$; the required omitted calculation shows that the resulting three coordinate vectors are linearly dependent. That calculation proves collinearity. A convenient affine chart gives the usual short scalar calculation, while vertices at infinity are handled by choosing another chart; this paragraph outlines rather than executes it, and the theorem is not asserted for arbitrary non-Desarguesian planes.

### Pappus' theorem

**Theorem 11.6 (Pappus, field-coordinatized scope).** In a projective plane coordinatized by a commutative field, let $A,B,C$ be three distinct collinear points and $A',B',C'$ three distinct collinear points on a different line. Assume the cross-joins below are distinct where required so that the displayed intersections are well defined. Define
$$P = AB' \\cap A'B,\\quad Q = BC' \\cap B'C,\\quad R = CA' \\cap C'A.$$
Then $P,Q,R$ are collinear.

**Hypothesis note:** Pappus' theorem is stronger than Desargues' in the sense that it holds only in projective planes coordinatized by **commutative** fields. It implies Desargues' theorem in the presence of P1–P3.

## Cross-ratio

The **cross-ratio** of four collinear points $A,B,C,D$ in $\\mathbb{P}^{1}(\\mathbb{R})$ is
$$(A,B;C,D) = \\frac{AC}{BC} \\bigg/ \\frac{AD}{BD},$$
where directed distances are used. It is invariant under projective transformations.

**Boundary case:** If $D$ is the point at infinity, the cross-ratio reduces to the simple ratio $AC/BC$, which is the affine invariant used in section formulas.

## Common errors

1. **Forgetting the nondegeneracy condition.** Desargues' theorem requires the triangles to be in general position; if corresponding vertices coincide, the intersections may be undefined or trivial.
2. **Using Euclidean metrics in projective arguments.** Projective geometry has no notion of distance or angle. A proof that secretly uses perpendicularity or length is not projective.
3. **Confusing the line at infinity with an ordinary line.** In the affine picture, the line at infinity has no points with $z=1$, so affine formulas fail there.

## Full coordinate proofs and their scope

The preceding theorem statements distinguish arbitrary incidence planes from planes built from algebra. We now execute the coordinate calculations. Desargues uses a division ring with a fixed convention for multiplication. Pappus uses commutativity, so its proof is given over a field. No calculation in this section proves either assertion in every abstract projective plane.

### Definition 11.1 — The field model

For a commutative field F, projective points are one-dimensional subspaces of F³ and projective lines are two-dimensional subspaces. Incidence means inclusion. Nonzero vector representatives can be rescaled but are not themselves the points.

Two distinct point subspaces span a two-dimensional subspace, proving unique join. Two different two-dimensional subspaces meet in a one-dimensional subspace, since their sum has dimension three and the dimension formula gives intersection dimension one. This proves unique intersection. The vectors e1,e2,e3 and e1+e2+e3 represent a quadrangle: any triple is linearly independent by direct coordinate comparison. Thus the model satisfies all three projective axioms, including nondegeneracy, over every field, even the two-element field.

An invertible three-by-three matrix sends subspaces to subspaces and preserves inclusion and dimensions. It therefore gives an incidence automorphism. Multiplying that matrix by a nonzero scalar gives the same projective transformation. This is a construction of projective transformations, not the assertion that every automorphism over every field is induced by an ordinary linear matrix; field automorphisms can enter the broader semilinear classification.

### Theorem 11.2 — Desargues by a linear dependence

Use column vectors in a three-dimensional right vector space over a division ring D. Right multiplication of vectors by scalars fixes the convention. Assume both triples form triangles and all joins and intersections in the configuration are defined.

Suppose first the concurrency point O is distinct from every named vertex. Choose a nonzero representative o. Because A' lies on the line joining A to O, rescale its representative so
$a'=a+o\\alpha.$
This is possible since its coefficient of a is nonzero; alpha is nonzero because A' differs from A. Similarly write
$b'=b+o\\beta,\\qquad c'=c+o\\gamma,$
with nonzero alpha,beta,gamma. Representatives a,b,c need not be normalized in any other way.

Define
$p=a\\alpha^{-1}-b\\beta^{-1},\\quad
q=b\\beta^{-1}-c\\gamma^{-1},\\quad
r=c\\gamma^{-1}-a\\alpha^{-1}.$
The vector p lies in span(a,b). Also
$p=a'\\alpha^{-1}-b'\\beta^{-1}$,
because the two o terms cancel in exactly that order. Hence it also lies on the primed side and represents P. It is nonzero because A and B are distinct. The analogous calculations identify q and r with Q and R. Their sum is zero. Consequently their point subspaces lie in a vector subspace of dimension at most two, so they are collinear. No commuting of scalars was used.

If O equals an unprimed vertex, say A, then B' lies on AB and C' lies on AC. The distinct-line hypotheses force P=B' and R=C', while Q belongs to B'C' by definition. Thus the three intersections are again collinear. If O equals a primed vertex, exchange the two triangles and use the same argument. These cases complete the stated defined configuration. Coincident corresponding vertices would make a named joining line undefined and are excluded.

This proof supplies the division-ring version, rather than referring to a commutative cross-product calculation and assuming it works unchanged over a skew field. Cross products and ordinary determinants require commutativity; right-vector addition and right inverses in the displayed proof do not.

### Theorem 11.3 — Pappus by an explicit cancellation

Let F be commutative. Suppose the two base lines meet at O and initially none of their six chosen vertices equals O. Choose a projective basis so the lines are z=0 and y=0, with O=(1:0:0). Their points can then be represented as
$A=(a:1:0),\\ B=(b:1:0),\\ C=(c:1:0),$
$A'=(a':0:1),\\ B'=(b':0:1),\\ C'=(c':0:1).$
Within each triple the corresponding scalar parameters are distinct.

The line AB' has equation x-ay-b'z=0, and A'B has equation x-by-a'z=0. A nonzero representative of their intersection is
$p=(bb'-aa',\\ b'-a',\\ b-a).$
Substitution checks both equations. The third coordinate is nonzero since a and b differ, so this really is a point. Cyclically the other two intersections have representatives
$q=(cc'-bb',\\ c'-b',\\ c-b),$
$r=(aa'-cc',\\ a'-c',\\ a-c).$
All three coordinates of p+q+r vanish. Their representatives are therefore linearly dependent and the points are collinear.

If one selected vertex is O, relabel cyclically so A=O. Provided the named joins remain defined, AB' is the primed base line. Its intersection with A'B is A', so P=A'. The same argument gives R=A'. Thus collinearity is immediate, with Q on a line through this repeated point. If a primed vertex is O, exchange the two triples. Shared O cases are handled by the same observation unless a named join has identical endpoints, which the hypotheses exclude.

Commutativity was used when substituting the first coordinates and cancelling mixed scalar products. It is therefore a genuine hypothesis. The general coordinatization converses mentioned earlier are deeper incidence theorems; they are not proved just by these forward model calculations.

## Duality with the nondegeneracy step included

The formal duality argument also needs the dual of P3. Given a quadrangle A,B,C,D, take the four lines AB,BC,CD,DA. No three are concurrent: for example AB and BC meet at B, which is not on CD or DA because no three quadrangle points are collinear. The other triples are checked by the same endpoint argument. Thus the dual structure has a quadrangle of points, interpreted as four original lines with no three concurrent.

P1 and P2 exchange, and this verified nondegeneracy gives P3 in the dual. Replacing each incidence statement throughout a proof therefore produces a valid proof in the dual incidence structure. A metric statement involving perpendicularity is not a statement purely in this incidence language and does not automatically have such a dual theorem.

## Cross-ratio without a point-at-infinity exception

On a projective line choose two-dimensional vector representatives a,b,c,d for four distinct points. Define
$[A,B;C,D]=
\\frac{\\det(a,c)\\det(b,d)}
{\\det(b,c)\\det(a,d)}.$
The denominator is nonzero under distinctness. Rescaling any one representative multiplies one numerator and one denominator factor by the same nonzero scalar, so the expression is well defined.

If an invertible two-by-two matrix M acts on the line, each determinant acquires the factor det M. There are two factors upstairs and two downstairs, so they cancel. This proves projective invariance, including configurations containing infinity.

For affine representatives (t,1), substitution gives the directed-distance convention stated earlier. A zero homogeneous vector can never be substituted: it is not a projective point and would destroy the determinant conditions. Swapping two arguments generally changes the value; an invariant still depends on the ordered four-point configuration.

## Worked examples

### Worked example 1 — An intersection lying at infinity

The affine parallel lines y=2x+1 and y=2x-3 have homogeneous equations 2x-y+z=0 and 2x-y-3z=0. Subtraction forces z=0. Then y=2x and the unique projective intersection is (1:2:0). No metric limit is being taken: this is ordinary linear algebra in the projective plane.

### Worked example 2 — A complete Pappus instance

Take a=0,b=1,c=2 and a'=3,b'=4,c'=5 in the coordinate proof. The resulting intersection representatives are p=(4,1,1), q=(6,1,1), and r=(-10,-2,-2). Their sum vanishes. After scaling r by -1/2, its affine point is (5,1), between the other two in this chosen chart. All three satisfy y=z, the Pappus line.

The word between is an affine description of this drawing, not a projective invariant used in the proof. The same configuration can be transformed so one point lies on the selected line at infinity.

### Worked example 3 — An invariant changed by relabeling

For affine coordinates A=0,B=1,C=2,D=3, the existing exercise computes cross-ratio 4/3. Exchange C and D. The determinant formula or directed distances gives 3/4, its reciprocal. Applying one projective transformation to all four ordered points preserves the value, while changing the order can change it. The distinction prevents the phrase cross-ratio invariant from being read as independent of labels.

### Worked example 4 — A projective map that is not affine

The invertible map (x:y:z)↦(x:y:x+z) sends an affine point (x,y) to (x/(x+1),y/(x+1)) when x≠-1. Points on x=-1 go to infinity in this chart. The map is a perfectly defined projective transformation everywhere, but its affine formula has a genuine chart denominator restriction. It does not preserve ordinary Euclidean distances or the designated affine infinity line.

## Practice exercises

<a id="projective-planes-ex-1"></a>
### Exercise 1
Verify that the Fano plane is a projective plane and obtain its affine plane by choosing and deleting one whole projective line as the line at infinity.


<details>
<summary>Hint 1</summary>

Use the projective incidence axioms or the finite-field model.

</details>
<details>
<summary>Hint 2</summary>

Deleting a whole line also deletes its incident points; restrict every other line to the remaining points.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The Fano plane has seven points and seven lines, each line contains three points, each point lies on three lines, and any two points determine a unique line. It satisfies P1--P3; for example, $\\{1,2,4,7\\}$ is a quadrangle. To obtain its affine plane, delete the entire line at infinity $\\{1,2,3\\}$ and its points. The remaining points are $4,5,6,7$, and the other six projective lines restrict to the affine lines $45,67,46,57,47,56$, arranged in three parallel pairs.


</details>

<a id="projective-planes-ex-2"></a>
### Exercise 2
Prove that in $\\mathbb{P}^{2}(\\mathbb{R})$, every line has the same cardinality as the real numbers, and that the plane itself has the cardinality of $\\mathbb{R}^{3}$ modulo scaling.


<details>
<summary>Hint 1</summary>

Identify a line with the one-dimensional projective space of a two-dimensional vector space.

</details>
<details>
<summary>Hint 2</summary>

Cover the plane by its three standard affine charts.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
A line is defined by one linear equation in three variables, so its solution set is a two-dimensional vector subspace of $\\mathbb{R}^{3}$ minus the origin, modulo scaling. This is homeomorphic to $\\mathbb{P}^{1}(\\mathbb{R})$, which has cardinality $|\\mathbb{R}|$. For the plane, the affine chart $z\\ne0$ contains a copy of $\\mathbb R^2$, giving the lower bound $|\\mathbb R|$. Every projective point lies in at least one of the three charts $x\\ne0$, $y\\ne0$, $z\\ne0$, and normalizing that coordinate identifies each chart with $\\mathbb R^2$. A union of three continuum-sized charts has cardinality $|\\mathbb R|$, giving the upper bound.


</details>

<a id="projective-planes-ex-3"></a>
### Exercise 3
Compute the cross-ratio $(A,B;C,D)$ for the points on the real projective line with affine coordinates $A=0$, $B=1$, $C=2$, $D=3$.


<details>
<summary>Hint 1</summary>

Keep the directed-distance convention fixed.

</details>
<details>
<summary>Hint 2</summary>

Substitute the four affine numbers before simplifying.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Using directed distances on the affine line:
$$AC = 2,\\quad BC = 1,\\quad AD = 3,\\quad BD = 2.$$
Hence
$$(A,B;C,D) = \\frac{AC}{BC} \\bigg/ \\frac{AD}{BD} = \\frac{2}{1} \\bigg/ \\frac{3}{2} = \\frac{4}{3}.$$


</details>

<a id="projective-planes-ex-4"></a>
### Exercise 4
State the dual of Pappus' theorem.


<details>
<summary>Hint 1</summary>

Exchange point and line throughout the entire statement.

</details>
<details>
<summary>Hint 2</summary>

An intersection becomes a join, and collinearity becomes concurrency.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $a,b,c$ be three distinct concurrent lines and $a',b',c'$ three distinct concurrent lines through a different point. Define
$$p = (a \\cap b') \\vee (a' \\cap b),\\quad q = (b \\cap c') \\vee (b' \\cap c),\\quad r = (c \\cap a') \\vee (c' \\cap a).$$
Then $p,q,r$ are concurrent. (In words: the lines joining opposite intersection points of two triples of concurrent lines are themselves concurrent.)

Here $X\\vee Y$ denotes the unique line joining distinct points $X$ and $Y$; it is not set union.


</details>

## Further exercises

<a id="projective-planes-ex-5"></a>
### Exercise 11.5

Prove P3 for the model P²(F) over an arbitrary field.

<details>
<summary>Hint 1</summary>

Use the three coordinate vectors and their sum.

</details>

<details>
<summary>Hint 2</summary>

Check linear independence for any three representatives.

</details>

<details>
<summary>Full solution</summary>

The points e1,e2,e3 are independent. A triple consisting of two coordinate vectors and e1+e2+e3 is also independent because the omitted coordinate forces the coefficient of the sum to vanish, after which the other two coefficients vanish. Thus no three of the four points are collinear, proving the quadrangle axiom even over F2.

</details>

<a id="projective-planes-ex-6"></a>
### Exercise 11.6

Show that the coordinate proof of Desargues gives collinearity without using commutativity.

<details>
<summary>Hint 1</summary>

Track scalar multiplication on the right.

</details>

<details>
<summary>Hint 2</summary>

The concurrency terms cancel before summing p,q,r.

</details>

<details>
<summary>Full solution</summary>

With a'=a+o alpha and analogous expressions, p=a alpha^-1-b beta^-1 equals a' alpha^-1-b' beta^-1. Thus it represents both side intersections. Similarly obtain q and r, with p+q+r=0. Right multiplication and addition suffice; no product of two independent scalars is swapped. Their right span has dimension at most two.

</details>

<a id="projective-planes-ex-7"></a>
### Exercise 11.7

Verify the displayed Pappus point p lies on both cross-joins.

<details>
<summary>Hint 1</summary>

Substitute its coordinates into each line equation.

</details>

<details>
<summary>Hint 2</summary>

The cancellations use products in the commutative field.

</details>

<details>
<summary>Full solution</summary>

For AB', x-ay-b'z becomes bb'-aa'-a(b'-a')-b'(b-a)=0. For A'B, x-by-a'z becomes bb'-aa'-b(b'-a')-a'(b-a)=0. The third coordinate b-a is nonzero, so p is a nonzero representative and the two distinct cross-joins meet at its projective point.

</details>

<a id="projective-planes-ex-8"></a>
### Exercise 11.8

Prove cross-ratio invariance using determinants.

<details>
<summary>Hint 1</summary>

Each determinant of transformed vectors gains det M.

</details>

<details>
<summary>Hint 2</summary>

Count the factors in numerator and denominator.

</details>

<details>
<summary>Full solution</summary>

For each pair, det(Mu,Mv)=det M det(u,v). The cross-ratio numerator therefore gains (det M)² and so does its denominator. They cancel since M is invertible. Rescaling individual representatives cancels in the same way, establishing both invariance and independence of representative.

</details>

<a id="projective-planes-ex-9"></a>
### Exercise 11.9

Find the image of affine point (2,3) under the final worked projective map and state its excluded affine line.

<details>
<summary>Hint 1</summary>

Use homogeneous representative (2:3:1).

</details>

<details>
<summary>Hint 2</summary>

Normalize only if the new last coordinate is nonzero.

</details>

<details>
<summary>Full solution</summary>

The image is (2:3:3), giving affine coordinates (2/3,1). The affine denominator is x+1, so the line x=-1 has no finite image in this chart and is sent to the infinity line. The projective map remains defined there because its three homogeneous coordinates are not all zero.

</details>

<a id="projective-planes-ex-10"></a>
### Exercise 11.10

Does a proof of Pappus in P²(R) prove it in every abstract projective plane? Explain.

<details>
<summary>Hint 1</summary>

Separate a model from an axiom package.

</details>

<details>
<summary>Hint 2</summary>

Identify the extra algebra used by the proof.

</details>

<details>
<summary>Full solution</summary>

No. The coordinate proof assumes representatives over a commutative field and uses commutative products. An abstract plane satisfying only P1–P3 need not have those coordinates or satisfy Pappus. A theorem about this field model cannot be promoted to an arbitrary-plane theorem without an additional coordinatization result or axiom.

</details>

## Forward and backward connections

This chapter generalizes the incidence ideas of **Elliptic Geometry** into a self-dual axiomatic system. The homogeneous coordinates introduced here are the foundation for **Finite Geometries** (where the field is finite) and for **Incidence Geometry** (which studies weaker incidence structures). The cross-ratio and projective invariants reappear in **Ordered Geometry** when separation and harmonic sets are discussed.

## Sources

The new proofs are original. Primary-author comparison: [Nigel Hitchin, Projective Geometry, Chapter 1](https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Projective_geometry/Chapter_1_Projective_geometry.pdf). The existing [Projective Geometry seed](../conics-solids-projections/projective-geometry.md) remains intact by reference. Its separate conic and metric discussions are not removed or copied wholesale.

## Summary

Projective incidence is modeled by subspaces, with points and lines exchanging under duality. The supplied Desargues proof works over a division ring with explicit right-vector conventions; the Pappus calculation uses a commutative field. Homogeneous determinants prove cross-ratio invariance even at infinity. These model theorems are stronger than the bare projective-plane axioms and do not hold automatically in every abstract plane.
`;export{e as default};