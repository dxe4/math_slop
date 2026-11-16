
# Circles: Chords, Tangents and Angles

A circle links distance and angle. Every point on it has the same distance from its centre, so joining the centre to two boundary points creates an isosceles triangle. Many circle theorems follow from that simple observation together with congruence, perpendicularity and the triangle angle sum.

This chapter asks how those earlier tools determine chord lengths, tangent directions and angles subtended by an arc. We shall prove each relation with its hypotheses, including the choice of arc in the inscribed-angle theorem. A diagram that makes a central angle look small can be misleading when the intercepted arc is actually the major arc.

Read [Congruent Triangles](congruent-triangles.md), [Area and the Pythagorean Theorem](area-pythagorean-theorem.md), and [Similarity and Proportion](similarity-proportion.md). Every circle has positive radius, and chord endpoints are distinct unless a limiting configuration is explicitly discussed.

## Circle language and three-point determination

**Definition 8.1 (Circle, chord, secant and tangent).** The circle with centre $O$ and radius $r>0$ consists of points $X$ with $OX=r$. A chord joins two distinct circle points. A diameter is a chord through the centre. A secant line meets the circle in two points, while a tangent line meets it in exactly one point.

An arc is a connected part of the circumference between two endpoints. A minor arc has angular measure at most $180^\circ$ and a major arc at least $180^\circ$; a diameter separates two semicircles of $180^\circ$. When two arcs share endpoints, specifying which one is intended is part of the statement.

**Theorem 8.2 (Circumcircle of a triangle).** Three noncollinear points lie on exactly one circle.

*Proof.* The perpendicular bisectors of $AB$ and $BC$ are not parallel, because $AB$ and $BC$ are not parallel. They therefore meet at a point $O$. Their locus properties give $OA=OB$ and $OB=OC$, so a circle centred at $O$ with radius $OA$ passes through all three points. The radius is positive because distinct points cannot all equal $O$.

Conversely, any circle through the three points has a centre equidistant from $A,B$ and from $B,C$. Its centre must lie on both perpendicular bisectors, hence equal their unique intersection $O$. Its radius is then forced. ∎

This circle is the circumcircle, and its radius is the circumradius. The centre need not lie inside the triangle. A right triangle's centre will be the midpoint of its hypotenuse; an obtuse triangle can have its centre outside.

## Chords and perpendicular distances

**Theorem 8.3 (Perpendicular through a chord midpoint).** The line through a circle's centre perpendicular to a chord bisects the chord. Conversely, the line from the centre through the midpoint of a nondiameter chord is perpendicular to it.

*Proof.* Let the perpendicular from $O$ meet chord $AB$ at $M$. If $M=O$, the chord is a diameter and its halves are equal radii. Otherwise right triangles $OMA,OMB$ have common leg $OM$ and equal hypotenuses $OA=OB$. RHS gives $AM=BM$.

For the converse, suppose $AM=BM$ and $O$ is not on the chord line. Triangles $OMA,OMB$ have all corresponding sides equal, so SSS gives equal adjacent angles at $M$. These form a straight angle, so both are right. ∎

If the radius is $r$ and the centre-to-chord distance is $d$, Pythagoras in a half-chord triangle gives
$$
\left(\frac{AB}{2}\right)^2+d^2=r^2,
\qquad AB=2\sqrt{r^2-d^2}.
$$
An actual nonzero chord requires $0\le d<r$. The case $d=0$ is a diameter. At $d=r$, the two intersection points merge into a tangent contact rather than a chord with distinct endpoints.

**Example 8.4 (A hidden right triangle).** A circle has radius $10$ cm, and a chord lies $6$ cm from its centre. The perpendicular bisects the chord, so its half-length satisfies $x^2=10^2-6^2=64$. Thus $x=8$ cm and the full chord is $16$ cm.

For another chord in the same circle at distance eight centimetres, the half-length is six centimetres and the full length twelve. The chord nearer the centre is longer. More generally, in a fixed circle, equal chords have equal centre distances and conversely, because the squared half-length determines $d^2$ and all distances are nonnegative.

## Tangents and radii

**Theorem 8.5 (Tangent-radius perpendicularity).** A line through a circle point $T$ is tangent exactly when it is perpendicular to $OT$.

*Proof.* Suppose the line is perpendicular to $OT$. Any other point $X$ on it forms a right triangle with $O,T$, so
$$
OX^2=OT^2+TX^2>r^2.
$$
Thus no other point of the line lies on the circle, making it tangent.

Conversely, suppose the line through $T$ is not perpendicular to $OT$. If it passes through $O$, it meets the circle again at the opposite end of a diameter. Otherwise let $H$ be the perpendicular foot from $O$ to the line; $H\ne T$. Reflect $T$ across line $OH$. The reflected point $T'$ lies on the given line, is distinct from $T$, and has $OT'=OT$ because reflection fixes $O$ and preserves distance. Hence the line has a second circle point and is not tangent. ∎

**Corollary 8.6 (Two tangent lengths).** Tangent segments from the same external point to a circle have equal lengths.

*Proof.* Let the tangent contacts from $P$ be $T,S$. The triangles $OTP,OSP$ are right at the contacts, have common hypotenuse $OP$, and equal legs $OT=OS=r$. RHS gives congruence and therefore $PT=PS$. ∎

**Example 8.7 (Tangent length from the centre distance).** An external point is $17$ cm from a circle centre, and the radius is $8$ cm. At a tangent contact $T$, the radius is perpendicular to the tangent, so
$$
PT^2=17^2-8^2=225.
$$
Thus $PT=15$ cm. The other tangent segment from the same point also has length fifteen centimetres.

Using $17+8$ or $17-8$ would calculate a distance along the centre line rather than a tangent. The right-angle theorem identifies the correct triangle before the numerical operation is selected.

## Inscribed angles and the correct arc

**Definition 8.8 (Central and inscribed angles).** An inscribed angle $\angle AXB$ has its vertex $X$ on the circle and its arms through distinct circle points $A,B$, neither equal to $X$. Its intercepted arc is the arc from $A$ to $B$ that does not contain $X$. The measure of that arc is the corresponding central turn, which may exceed $180^\circ$.

**Theorem 8.9 (Inscribed-angle theorem).** An inscribed angle is half the measure of its intercepted arc.

*Proof.* Draw the diameter from $X$ through $O$ to its other endpoint $D$. First consider an angle $\angle AXD$. If $A\ne D$, triangle $OXA$ is isosceles, so its base angles at $X,A$ are equal, say $\alpha$. Its central angle $AOX$ is $180^\circ-2\alpha$. Since $OX,OD$ are opposite rays, the angle $AOD$ is $2\alpha$. This is the measure of arc $AD$ not containing $X$, proving the theorem when one arm is the diameter. The same argument applies to endpoint $B$.

For a general angle $AXB$, if $D$ lies on its intercepted arc, ray $XD$ splits the angle and the intercepted arc into the corresponding two pieces. Add the two diameter-case equalities to obtain the required factor one-half. If $D$ is outside the intercepted arc, one diameter-case angle contains the other; subtract the smaller equality from the larger. The corresponding arc pieces subtract in the same order. If $D$ equals an endpoint, the initial case already applies. These cases exhaust the possible positions, including major intercepted arcs. ∎

**Corollary 8.10 (Same segment, semicircle and cyclic quadrilateral).** Angles standing on the same arc are equal. An angle standing on a diameter is right. Opposite angles of a convex quadrilateral whose vertices lie on one circle are supplementary.

*Proof.* The first two assertions follow by halving the same arc measure or a semicircle's $180^\circ$. Opposite angles of a cyclic quadrilateral intercept the two complementary arcs between the other two vertices. Those arc measures total $360^\circ$, so the two angles total $180^\circ$. ∎

**Example 8.11 (Minor and major arcs).** A chord's minor arc has measure $124^\circ$. An angle with vertex on the major arc intercepts that minor arc and equals $62^\circ$. An angle with vertex on the minor arc intercepts the major arc of $236^\circ$ and equals $118^\circ$.

The two angles are supplementary, not equal, because their vertices lie on opposite arcs. Reporting “the angle at the circumference is half the central angle” without specifying the intercepted arc would hide this distinction. A reflex central turn can be the correct quantity to halve.

## Intersecting chords and a product

**Theorem 8.12 (Intersecting-chord products).** If chords $AB$ and $CD$ meet at an interior point $P$, with orders $A,P,B$ and $C,P,D$, then
$$
PA\cdot PB=PC\cdot PD.
$$

*Proof.* If the chord lines coincide, their endpoint pairs are the same, so the two products agree immediately. Otherwise triangles $APC,DPB$ are nondegenerate and have equal vertically opposite angles at $P$. Their angles at $C,B$ are equal because $\angle ACD$ and $\angle DBA$ stand on the same arc $AD$. Thus the triangles are similar by AA. The correspondence is $A\leftrightarrow D$, $P\leftrightarrow P$, $C\leftrightarrow B$, giving $PA/PD=PC/PB$. All four segments are positive, so multiplication proves the product equation. ∎

**Example 8.13 (A missing chord piece).** The pieces of one chord are $3$ cm and $8$ cm; one piece of a second intersecting chord is $4$ cm. Its other piece $x$ satisfies $3\cdot8=4x$, so $x=6$ cm.

The lengths are pieces measured from the common interior intersection, not whole chords. Substituting the entire second chord as $x$ would answer a different equation. External secant and tangent product formulas need their own segment-order conventions; the theorem proved here is specifically for intersecting chords inside the circle.

Circle arguments reward careful naming. Equal radii belong to a specified circle, a tangent's right angle occurs at its contact, and an inscribed angle intercepts a specified arc. These conditions determine which earlier congruence, similarity or Pythagorean result applies. The next chapter turns circle and triangle procedures into a discussion of which exact lengths classical tools can construct.

## Exercises

### Exercise 8.1
<a id="circles-chords-tangents-angles-ex-1"></a>

A circle has radius $13$ cm and a chord $5$ cm from the centre. Find the chord length.

<details><summary>Hint 1</summary>

The perpendicular from the centre bisects the chord.

</details>
<details><summary>Hint 2</summary>

Use Pythagoras for the half-chord.

</details>
<details><summary>Solution</summary>

If the half-length is $x$, then $x^2+5^2=13^2$, so $x^2=144$ and $x=12$ cm. The full chord is $24$ cm. Doubling is necessary because the right triangle contains only half the chord. The positive root is chosen for the length.

</details>

### Exercise 8.2
<a id="circles-chords-tangents-angles-ex-2"></a>

Why do three distinct collinear points not have a circumcircle, whereas three noncollinear points do?

<details><summary>Hint 1</summary>

A line meets a circle in at most two distinct points.

</details>
<details><summary>Hint 2</summary>

For noncollinear points, use two perpendicular bisectors.

</details>
<details><summary>Solution</summary>

Three distinct points on one line cannot all belong to one circle because that would give three line-circle intersections. For a noncollinear triple, the two perpendicular bisectors of adjacent sides are not parallel and meet in a unique centre equidistant from all three vertices. This supplies both existence and uniqueness under the noncollinearity hypothesis.

</details>

### Exercise 8.3
<a id="circles-chords-tangents-angles-ex-3"></a>

A chord's intercepted arc, not containing an inscribed vertex, measures $148^\circ$. Find that inscribed angle and the angle from a vertex on the opposite arc.

<details><summary>Hint 1</summary>

Halve the specified intercepted arc.

</details>
<details><summary>Hint 2</summary>

The complementary arc has measure $360^\circ-148^\circ$.

</details>
<details><summary>Solution</summary>

The first angle is $74^\circ$. A vertex on the other arc intercepts the complementary $212^\circ$ arc, giving $106^\circ$. These add to $180^\circ$. The endpoint chord alone does not determine a unique inscribed-angle measure without locating the vertex's arc.

</details>

### Exercise 8.4
<a id="circles-chords-tangents-angles-ex-4"></a>

Points $A,B$ are endpoints of a diameter and $C$ is another circle point. If $AC=9$ cm and $BC=12$ cm, find $AB$.

<details><summary>Hint 1</summary>

The angle at $C$ stands on a semicircle.

</details>
<details><summary>Hint 2</summary>

Apply Pythagoras only after establishing that right angle.

</details>
<details><summary>Solution</summary>

The inscribed angle $\angle ACB$ is $90^\circ$. Hence $AB^2=9^2+12^2=225$, so $AB=15$ cm. Here the diameter is the hypotenuse. The circle theorem supplies the required right-angle hypothesis rather than leaving it to the appearance of the drawing.

</details>

### Exercise 8.5
<a id="circles-chords-tangents-angles-ex-5"></a>

A convex cyclic quadrilateral has one angle $97^\circ$. Find its opposite angle.

<details><summary>Hint 1</summary>

Opposite angles intercept complementary arcs.

</details>
<details><summary>Hint 2</summary>

Their sum is a straight angle.

</details>
<details><summary>Solution</summary>

The opposite angle is $180^\circ-97^\circ=83^\circ$. The theorem applies because all four vertices lie on one circle in cyclic order. An arbitrary quadrilateral has total $360^\circ$, but that alone would not determine one opposite angle from the other.

</details>

### Exercise 8.6
<a id="circles-chords-tangents-angles-ex-6"></a>

An external point is $26$ cm from the centre of a circle of radius $10$ cm. Find either tangent length.

<details><summary>Hint 1</summary>

The radius to a contact is perpendicular to the tangent.

</details>
<details><summary>Hint 2</summary>

Subtract the radius square from the centre-distance square.

</details>
<details><summary>Solution</summary>

The tangent length $t$ satisfies $t^2=26^2-10^2=576$, so $t=24$ cm. Both tangent segments from the point are equal by RHS congruence, hence either has that length. The distance sixteen centimetres obtained by subtraction would instead be the near-circle distance along the centre line.

</details>

### Exercise 8.7
<a id="circles-chords-tangents-angles-ex-7"></a>

A line has perpendicular distance $d$ from a circle centre of radius five. Describe its intersections for $d=7$, $d=5$, and $d=3$.

<details><summary>Hint 1</summary>

Compare the shortest centre-to-line distance with the radius.

</details>
<details><summary>Hint 2</summary>

The half-chord equation is $x^2=25-d^2$.

</details>
<details><summary>Solution</summary>

At distance seven there is no intersection, because every line point is farther than the radius. At distance five there is one tangent contact at the perpendicular foot. At distance three there are two intersections, with half-chord $\sqrt{25-9}=4$ and chord length eight. The tangent case is not a chord with two distinct endpoints.

</details>

### Exercise 8.8
<a id="circles-chords-tangents-angles-ex-8"></a>

Two chords meet internally at $P$. Their pieces satisfy $PA=5$, $PB=12$, and $PC=10$. Find $PD$.

<details><summary>Hint 1</summary>

Use products of pieces measured from the same intersection.

</details>
<details><summary>Hint 2</summary>

Do not replace a piece by a whole chord length.

</details>
<details><summary>Solution</summary>

The product theorem gives $5\cdot12=10\cdot PD$, so $PD=6$. Every supplied piece is positive and the order is internal as required. The whole second chord is sixteen, but it is the piece six that belongs in the product with ten.

</details>

### Exercise 8.9
<a id="circles-chords-tangents-angles-ex-9"></a>

Prove that two chords of the same circle are equal exactly when their perpendicular distances from the centre are equal.

<details><summary>Hint 1</summary>

Use the radius and half-chord right triangle.

</details>
<details><summary>Hint 2</summary>

All distances and half-lengths are nonnegative.

</details>
<details><summary>Solution</summary>

For chord length $c$ at distance $d$, $(c/2)^2+d^2=r^2$. Equal chord lengths therefore give equal distance squares and hence equal nonnegative distances. Conversely, equal distances give equal half-length squares and hence equal chord lengths. The fixed common radius is essential to compare these two equations.

</details>

### Exercise 8.10
<a id="circles-chords-tangents-angles-ex-10"></a>

Angles $\angle AXB$ and $\angle AYB$ have vertices on a circle and share chord $AB$. If the first is $40^\circ$, determine the second when $X,Y$ lie on the same arc between $A,B$, and when they lie on opposite arcs.

<details><summary>Hint 1</summary>

Identify whether the two angles intercept the same arc.

</details>
<details><summary>Hint 2</summary>

Opposite arcs produce supplementary inscribed angles.

</details>
<details><summary>Solution</summary>

On the same arc, both vertices intercept the other arc, so the second angle is also $40^\circ$. On opposite arcs, the intercepted arc measures are complementary around the circle, so the second angle is $180^\circ-40^\circ=140^\circ$. Merely sharing chord endpoints does not guarantee equal angles; the vertex locations complete the hypothesis.

</details>

## Sources

The chapter and exercises are original expansions of module 5 of [the retained geometry course](../../course-texts/atlas-euclidean-trigonometry-standard.md). Classical circle results appear in Euclid, [Elements, Book III](https://mathcs.clarku.edu/~djoyce/elements/bookIII/bookIII.html), especially propositions 1, 3, 16, 20–22, 31 and 35, David Joyce's online edition, consulted 13 November 2026. All chord products above use the explicitly stated internal-intersection convention.

## Summary

Perpendicular bisectors locate a triangle's unique circumcircle. Equal radii and right-triangle congruence show that a perpendicular from the centre bisects a chord, while Pythagoras relates chord length to centre distance. A tangent is perpendicular to its contact radius, and two tangents from one external point are equal. Inscribed angles halve their intercepted arcs, giving semicircle and cyclic-quadrilateral consequences. Similar triangles prove the intersecting-chord product. Next we examine which exact lengths and angles these construction tools can produce and where their classical limits lie.

