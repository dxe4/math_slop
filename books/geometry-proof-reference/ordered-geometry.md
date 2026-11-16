
# Ordered Geometry

## Learning purpose

Ordered geometry adds the primitive relation "betweenness" to incidence geometry. This chapter develops the axioms of order, proves the theorems that depend on them (segment and ray classification, the plane separation theorem, and the crossbar theorem), and shows how order underlies the notion of convexity studied in the next chapter.

## Betweenness axioms

Let $\mathcal{P}$ be a set of points and $\mathcal{L}$ a set of lines satisfying the incidence axioms. The **betweenness** relation $B(A,C,B)$, read "$C$ is between $A$ and $B$," satisfies:

- (B1) If $B(A,C,B)$, then $A$, $C$, $B$ are three distinct collinear points.
- (B2) If $B(A,C,B)$, then $B(B,C,A)$.
- (B3) Given distinct $A$ and $B$, there exists $C$ with $B(A,B,C)$; thus a line extends beyond either named endpoint.
- (B4) Of three distinct collinear points, exactly one is between the other two.
- (B5) If $A,B,C$ are noncollinear and $\ell$ is a line not passing through any of them but intersecting $AB$, then $\ell$ intersects $AC$ or $BC$ (Pasch's axiom).

These record Hilbert-style order requirements. They do not assume continuity or congruence. For the complete proofs below we use the explicit compatible line-order formulation stated next, rather than treating a condensed list of triple rules as a proof of every four-point comparison.

## Segments, rays, and lines

**Definition 4.1.** The **segment** $AB$ is $\{A,B\} \cup \{C : B(A,C,B)\}$. The **ray** $AB^{\rightarrow}$ is $\{A,B\}\cup\{C:B(A,C,B)\}\cup\{C:B(A,B,C)\}$. The **line** $AB$ is the union of the two opposite rays.

**Theorem 4.2 (Segment classification).** For any two distinct points $A$ and $B$, the line $AB$ is partitioned into five disjoint sets: the two rays minus the segment, the segment minus the endpoints, and the two endpoints.

**Proof sketch.** By B4, any point $C$ on line $AB$ satisfies exactly one of: $C=A$, $C=B$, $B(A,C,B)$, $B(A,B,C)$, or $B(C,A,B)$. These five cases are mutually exclusive and exhaustive.

## Plane separation

**Theorem 4.3 (Plane separation).** Every line $\ell$ in a plane separates the remaining points into two nonempty convex sets (half-planes) such that:

1. If $A$ and $B$ are in the same half-plane, segment $AB$ does not meet $\ell$.
2. If $A$ and $B$ are in different half-planes, segment $AB$ meets $\ell$.

**Proof architecture.** Define $A\sim B$ for points off $\ell$ when segment $AB$ misses $\ell$. Pasch proves transitivity. The standard two-class lemma then uses the extension axiom B3 and a second Pasch construction: choose one point off $\ell$, extend a transversal through a point of $\ell$, and show every off-line point is equivalent to exactly one of the two points obtained on opposite sides. This establishes two nonempty classes, rather than merely assuming them. Pasch also proves that each class is convex and that a segment joining different classes crosses $\ell$.

**Common error:** assuming that a line separates the plane into exactly two sides without proving it. In some weak geometries (e.g., without Pasch's axiom), a line might separate the plane into more than two components or fail to separate it at all.

## The crossbar theorem

**Theorem 4.4 (Crossbar).** Let $\angle BAC$ be an angle with vertex $A$. If $D$ is a point in the interior of $\angle BAC$, then the ray $AD^{\rightarrow}$ meets segment $BC$.

**Proof architecture.** The interior is the intersection of the $C$-side of $AB$ and the $B$-side of $AC$. A direct appeal to Pasch with line $AD$ is illegal because that line passes through triangle vertex $A$. The standard proof extends the ray past $D$, builds an auxiliary triangle whose vertices avoid line $AD$, and applies Pasch twice; plane separation rules out exits through the two sides adjacent to $A$, leaving an intersection with $BC$. We record the required auxiliary-line argument rather than treating the vertex-passing line as an admissible Pasch line.

**Why this matters:** Once an interior ray, such as a constructed angle bisector, exists, the crossbar theorem guarantees that it meets the opposite side. Existence of a perpendicular or angle bisector itself uses additional congruence assumptions.

## Angle interiors and betweenness of rays

**Definition 4.5.** A point $D$ lies in the **interior** of $\angle BAC$ if $D$ and $C$ are on the same side of $AB$ and $D$ and $B$ are on the same side of $AC$.

**Theorem 4.6 (Betweenness of rays in a half-plane).** Let three distinct, nonopposite rays $AB^{\rightarrow}$, $AC^{\rightarrow}$, $AD^{\rightarrow}$ from $A$ have their punctured parts (with $A$ removed) in one common open half-plane whose boundary passes through $A$. Exactly one of the following holds:

1. $C$ is in the interior of $\angle BAD$;
2. $D$ is in the interior of $\angle BAC$;
3. $B$ is in the interior of $\angle CAD$.

**Proof sketch.** The common half-plane gives a linear, rather than cyclic, order on the rays. Plane separation with respect to their supporting lines shows that exactly one ray separates the other two, which is precisely one of the three displayed interior conditions. Without the half-plane hypothesis the rays at directions $0$, $120^\circ$, and $240^\circ$ are a counterexample: none lies inside the smaller angle formed by the other two under the usual convention.

## Common errors

1. **Using diagrams for case coverage.** A proof that inspects a diagram for "$D$ is between $A$ and $B$" may fail for other configurations. All cases must be derived from the axioms.
2. **Confusing segment with line.** The segment $AB$ does not include points beyond $A$ or $B$ on line $AB$. Arguments about rays must explicitly invoke the betweenness axioms.
3. **Assuming continuity.** The existence of midpoints or angle bisectors requires congruence and continuity axioms, not merely order. In ordered geometry without continuity, segments may have no midpoint.

## Working order package and complete separation proofs

**Line-order convention.** Each line carries a strict linear order, unique up to reversing direction, and betweenness is the corresponding three-point relation. There are points beyond either endpoint of every segment. This is a convenient explicit order formulation for the present development. The equivalence with a minimal primitive Hilbert order presentation is a foundations theorem, not proved by merely listing B1–B5. It introduces neither distances nor parallels. In particular it supplies the elementary interval rule $[A,C]\subseteq[A,B]\cup[B,C]$ for three collinear points, and makes the four-point ordering used in the original exercises precise.

We retain Pasch as a plane axiom: a line avoiding the three vertices and meeting one open triangle side meets another open side. Its “exactly one other side” strengthening and plane separation are now proved without a diagram-dependent shortcut.

**Lemma — Three crossings are impossible.** A line avoiding the vertices of a triangle cannot meet all three open sides.

**Proof.** Suppose the intersections with AB, BC, CA are P,Q,R. They are distinct, since two sides have only their common vertex in common. One of P,Q,R lies between the other two along the crossing line. Relabel the triangle cyclically so that R lies between P and Q. Apply Pasch to triangle BPQ and the line AC. It meets the open side PQ at R and avoids all three vertices. But its only intersection with line BP is A, outside segment BP since P is between A and B. Its only intersection with line BQ is C, outside segment BQ since Q is between B and C. Thus it meets neither remaining side, contradicting Pasch. $\square$

**Theorem — Plane separation from the working order axioms.** Every line l divides its complement into exactly two nonempty convex classes, with a segment crossing l precisely when its endpoints belong to different classes.

**Proof.** For points off l define $P\sim Q$ when their segment misses l, including $P=Q$. The relation is reflexive and symmetric. If P,Q,R are noncollinear and $P\sim Q$, $Q\sim R$, then an intersection of PR with l would force an intersection of PQ or QR by Pasch, impossible. If they are collinear, the line-order interval rule gives the same transitivity. Thus this is an equivalence relation.

Choose A off l and O on l. Extend AO beyond O to B. Then AB meets l at O, so A and B belong to different classes. There cannot be three classes represented by noncollinear points, because all three connecting sides would cross l, contradicting the lemma. Nor can three classes have collinear representatives A,B,C: choose D off their line and off l. Such a point exists by taking a point off the first line and, if necessary, extending its joining line to A past its intersection with l. The noncollinear triple A,B,D forces D to share A's or B's class. A triple formed from D and the other two representatives would then have three different classes and be noncollinear, again impossible. Hence there are exactly two classes.

If P,Q are in one class, their segment misses l. Every point R on that segment has subsegment PR contained in PQ, so R belongs to the same class. This proves convexity. Distinct classes have crossing segments directly by the definition of the relation. $\square$

An auxiliary boundary fact will be useful: if O lies on l and P off it, every point of the punctured ray OP lies in P's half-plane. Any two of those points have a segment missing l, since their supporting line meets l only at O and O lies behind them in its linear order. Similarly opposite punctured rays from O lie in opposite half-planes. This justifies ray-side arguments without pretending the boundary point itself belongs to an open half-plane.

**Theorem — Crossbar, with an admissible Pasch triangle.** For noncollinear A,B,C, if D is interior to angle BAC, the ray AD meets the open segment BC.

**Proof.** Choose E on the ray opposite AB, so E,A,B occur in that order. Apply Pasch to triangle EBC and the line AD. The line avoids its vertices and meets open EB at A, so it meets EC or BC. Any such intersection lies in the C-side of line AB: the interiors of both segments EC and BC lie on that side. The negative ray of AD lies on the opposite side, because D is on the C-side. Thus any intersection must be on the positive ray AD.

The positive ray AD lies in the B-side of line AC because D is interior to BAC. But E is on the opposite side of AC from B, and every interior point of EC is on E's side of AC. Hence the positive ray AD cannot meet EC. The intersection supplied by Pasch must therefore belong to BC, as required. Uniqueness follows from uniqueness of intersection of two distinct supporting lines. $\square$

The converse is also precise: if a punctured ray from A meets the open segment BC, it lies inside angle BAC. Its intersection point shares D's side of AB and B's side of AC by the boundary fact, and the whole punctured ray has those same side memberships. This gives an incidence-and-order test for angular interior, not a visual guess.

**Ray-order proof.** For the three rays in the earlier half-plane theorem, first compare C and D across line AB. If they are opposite, segment CD crosses AB. The crossing lies in their common half-plane whose boundary passes through A, so it is on the positive ray AB; the crossbar converse puts B between the other rays. If C,D are on the same side of AB, compare B,D across AC. If opposite, the same argument puts C between the other rays. In the remaining case D shares C's side of AB and B's side of AC, precisely the definition that D is inside angle BAC. The side conditions also exclude two alternatives holding simultaneously. This proves both existence and uniqueness of the middle ray.

### Worked example 1 — Crossbar with exact affine coordinates

Take $A=(0,0)$, $B=(4,0)$, $C=(0,3)$ and $D=(1,1)$ in the real affine model. The ray AD is $(t,t)$ with $t>0$. The line BC has equation $x/4+y/3=1$. Substitution gives $t=12/7$, a positive parameter. The resulting point equals $(3/7)B+(4/7)C$, so it is strictly inside the segment, not merely on its supporting line. The synthetic theorem guarantees an intersection without coordinates; this calculation identifies it and checks its endpoint and orientation conditions exactly.

### Worked example 2 — Pasch over the rational plane

Let a rational line be $f(x,y)=ax+by+c=0$ and let its values at rational triangle vertices A,B,C be nonzero. If it crosses AB, the endpoint values have opposite signs. Assume $f(A)>0>f(B)$. If $f(C)>0$, the crossing of BC has parameter $t=f(B)/(f(B)-f(C))$ strictly between zero and one; if $f(C)<0$, the same formula on AC gives the other crossing. All these numbers are rational. The third side has equal-sign endpoint values and no crossing. Thus rational affine betweenness satisfies Pasch even though the rational line is not Dedekind complete.

### Worked example 3 — A cyclic arrangement is not a line order

Three rays in directions zero, 120 degrees and 240 degrees admit a cyclic description, but none lies in the smaller sector between the other two. If one tried to impose the earlier middle-ray conclusion without a common half-plane, it would have no valid choice. A line order is linear after a direction has been fixed; the directions around a full point are cyclic. Restricting to one open half-plane converts the relevant cyclic arrangement into a linear one. This hypothesis is structural, not an aesthetic request to draw the picture differently.

## Practice exercises

### Exercise 1
<a id="ordered-geometry-ex-1"></a>
Prove that if $B(A,C,B)$ and $B(C,D,B)$, then $B(A,D,B)$.


<details><summary>Hint 1</summary>

Use the compatible linear order on the line.

</details>
<details><summary>Hint 2</summary>

The hypotheses put the four points in order A,C,D,B, up to reversal.

</details>
<details><summary>Full solution</summary>

**Solution.**
The explicit working line-order convention supplies a linear order up to reversal, compatible with every three-point betweenness relation. We use that convention here; its equivalence to a minimal B1–B5 presentation was not proved above, and B4 alone would not justify a four-point comparison. Here $B(A,C,B)$ fixes the order as $A,C,B$ up to reversal, and $B(C,D,B)$ inserts $D$ between $C$ and $B$. Hence the compatible order is $A,C,D,B$ (or its reverse), so $B(A,D,B)$.

</details>

### Exercise 2
<a id="ordered-geometry-ex-2"></a>
State and prove the converse of Pasch's axiom: if a line $\ell$ meets segment $AB$ and does not pass through $A$, $B$, or $C$, then it meets exactly one of $AC$ or $BC$.


<details><summary>Hint 1</summary>

For noncollinear A,B,C, invoke Pasch; handle collinear points by line order.

</details>
<details><summary>Hint 2</summary>

The two-side classification excludes crossings of all three sides.

</details>
<details><summary>Full solution</summary>

**Solution.**
**Converse of Pasch:** If $\ell$ meets $AB$ and does not pass through $A$, $B$, or $C$, then $\ell$ meets exactly one of $AC$, $BC$.

**Proof:** If $A,B,C$ are collinear, let $X$ be the crossing of $\ell$ with $AB$. The line avoids $A,B,C$, so $X$ is strictly between $A,B$ and differs from $C$. The line order puts $C$ on one side of $X$ and exactly one of $A,B$ on the other; precisely the segment joining that endpoint to $C$ contains $X$. If $A,B,C$ are noncollinear, Pasch gives a crossing of $AC$ or $BC$. Since $\ell$ meets open $AB$, points $A$ and $B$ lie in opposite half-planes. If it also met both $AC$ and $BC$, then $A,C$ would be opposite and $B,C$ would be opposite, forcing $A,B$ onto the same side, a contradiction. Hence exactly one of $AC$ and $BC$ is met.

</details>

### Exercise 3
<a id="ordered-geometry-ex-3"></a>
Show that the interior of an angle is a convex set.


<details><summary>Hint 1</summary>

Use the intersection-of-half-planes definition.

</details>
<details><summary>Hint 2</summary>

A segment joining two points stays in each convex half-plane.

</details>
<details><summary>Full solution</summary>

**Solution.**
Let $\angle BAC$ be an angle. Its interior $I$ is the intersection of the $C$-side of $AB$ and the $B$-side of $AC$. Each half-plane is convex by the plane separation theorem. The intersection of convex sets is convex: if $P,Q \in I$, then $P,Q$ are in both half-planes, so segment $PQ$ is in both half-planes, hence in $I$. Therefore $I$ is convex.

</details>

### Exercise 4
<a id="ordered-geometry-ex-4"></a>
Explain why the rational plane $\mathbb{Q}^{2}$ satisfies the incidence, order, Pasch, and unique-parallel axioms but fails the full Euclidean continuity and segment-copying package.


<details><summary>Hint 1</summary>

Solve intersections by linear equations over the rationals.

</details>
<details><summary>Hint 2</summary>

A rational midpoint exists, while a rational coordinate for the diagonal length need not.

</details>
<details><summary>Full solution</summary>

**Solution.**
Incidence, affine betweenness, and unique parallels restrict algebraically from $\mathbb R^2$. For Pasch, a rational line meeting one side of a rational triangle has a second intersection obtained by solving rational linear equations, so the required intersection remains rational; density alone would not prove this. Rational segments do have rational midpoints. Continuity fails because the Dedekind cut determined by $x^2<2$ has no rational endpoint. Equivalently, the circle $x^2+y^2=2$ through $(1,1)$ has no intersection with the rational $x$-axis, so a segment of length $\sqrt2$ cannot be copied onto that ray.

</details>

## Forward and backward connections

This chapter adds order to the incidence structures of **Incidence Geometry**. The plane separation and crossbar theorems are prerequisites for **Convexity**, where convex sets are defined using segments and half-planes. The betweenness axioms also underlie the metric and measure-theoretic constructions in **Length, Area and Measure**.

## Further exercises

### Exercise 5
<a id="ordered-geometry-ex-5"></a>

Why can Pasch not be applied directly to a line through a triangle vertex?

<details><summary>Hint 1</summary>

Its hypotheses exclude all three vertices.

</details>
<details><summary>Hint 2</summary>

The missing case is exactly why crossbar needs an auxiliary triangle.

</details>
<details><summary>Full solution</summary>

A vertex-passing line violates the stated assumption that the line avoids every vertex. No conclusion follows from that axiom in this case, even if a diagram suggests one. The crossbar construction replaces the original triangle with an auxiliary triangle whose side contains the vertex as an interior point, so Pasch can be applied legally.

</details>

### Exercise 6
<a id="ordered-geometry-ex-6"></a>

Prove that the intersection of any family of convex sets is convex.

<details><summary>Hint 1</summary>

Take two points in the intersection.

</details>
<details><summary>Hint 2</summary>

Their whole segment belongs to every member of the family.

</details>
<details><summary>Full solution</summary>

If P,Q lie in the intersection, every set in the family contains P,Q and hence their segment by convexity. Therefore every segment point belongs to all family members, so it belongs to the intersection. Empty intersections interpreted as the full plane and empty resulting sets cause no exception to the implication.

</details>

### Exercise 7
<a id="ordered-geometry-ex-7"></a>

Give three rays showing why the common-half-plane hypothesis in ray ordering matters.

<details><summary>Hint 1</summary>

Use three equally spaced directions.

</details>
<details><summary>Hint 2</summary>

Take angles zero, 120 degrees, 240 degrees.

</details>
<details><summary>Full solution</summary>

The three rays at those directions do not lie in one open half-plane. Under the usual smaller-angle convention each smaller sector between two has angle 120 degrees and misses the third ray. Thus none is between the other two in the asserted angular sense. A linear order is appropriate only after restricting the cyclic arrangement of rays to a common half-plane.

</details>

### Exercise 8
<a id="ordered-geometry-ex-8"></a>

Distinguish closed-segment convexity from the claim that a boundary line belongs to an open half-plane.

<details><summary>Hint 1</summary>

The two endpoint choices are within the half-plane.

</details>
<details><summary>Hint 2</summary>

The boundary itself is excluded.

</details>
<details><summary>Full solution</summary>

An open half-plane is convex because the segment joining any two of its points stays entirely in it. This does not require any point of its boundary line to belong to the set. A segment with one boundary endpoint is a different situation: its interior can lie in the open side while that endpoint lies outside. The quantifiers in the convexity definition must be respected.

</details>

### Exercise 9
<a id="ordered-geometry-ex-9"></a>

Prove in an ordered affine plane that an affine function keeps a strict sign on a segment when both endpoint values have that sign.

<details><summary>Hint 1</summary>

Evaluate it on a convex combination.

</details>
<details><summary>Hint 2</summary>

The coefficients are nonnegative and sum to one.

</details>
<details><summary>Full solution</summary>

For f(P)>0 and f(Q)>0, affine linearity gives f((1-t)P+tQ)=(1-t)f(P)+tf(Q)>0 for $0\le t\le1$. If both endpoint values are negative, apply the same argument to -f and negate the conclusion. This proves convexity of both strict-sign coordinate half-planes in that model. It verifies an ordered-coordinate model; it is not a substitute for the synthetic plane-separation argument in a general ordered incidence plane.

</details>

### Exercise 10
<a id="ordered-geometry-ex-10"></a>

Why does the existence of a rational midpoint not establish completeness of the rational line?

<details><summary>Hint 1</summary>

A midpoint fills only one special kind of cut.

</details>
<details><summary>Hint 2</summary>

Consider the cut determined by the square root of two.

</details>
<details><summary>Full solution</summary>

The midpoint of rational a,b is rational (a+b)/2, so every rational segment has that point. But the bounded cut determined by positive rationals whose squares are less than two has no rational endpoint. Dedekind completeness asks for endpoints for all cuts, not merely averages of two supplied endpoints. These are logically different existence demands.

</details>

## Sources and provenance

Existing mathematical text, qualifications, exercise statements and full solutions are retained. New complete arguments and examples are original Euler prose under CC BY-SA 4.0. David Hilbert, [The Foundations of Geometry](https://www.gutenberg.org/ebooks/17384), is the primary historical reference for incidence and order. The compatible line-order presentation is explicitly part of our working package; its equivalence to a minimal primitive axiom list is not silently claimed as a supplied proof. The older architecture paragraphs remain as historical explanations, while the complete proofs above supply the stated working-package results.

## Summary

Betweenness turns incidence lines into segments and rays. Under the explicit line-order and Pasch package, three triangle-side crossings are impossible, same-side is a two-class equivalence relation, and the classes are convex. A legal auxiliary-triangle argument proves crossbar, and side comparisons order rays within a common half-plane. None of these arguments assumes Euclidean parallels or real-number completeness. The next chapter adds metric congruence while keeping the parallel postulate open.
