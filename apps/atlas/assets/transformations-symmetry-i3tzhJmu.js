var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: transformations-symmetry
title: "Transformations and Symmetry"
level: secondary
license: "CC BY-SA 4.0"
---

# Transformations and Symmetry

A transformation moves every point according to one rule. Some transformations preserve lengths, some preserve shape while changing scale, and others preserve much less. Naming the preserved property makes a geometric argument more precise than saying that two pictures “look the same”.

Required preparation is [Vectors in the Plane](vectors-plane.md), [Congruent Triangles](congruent-triangles.md), [Similarity and Proportion](similarity-proportion.md), and coordinate trigonometry. We study translations, rotations, reflections and dilations at school level. More general transformation theories belong to later geometry; no abstract algebra is assumed here.

The central question is which relationships survive a transformation. If a map preserves every distance, it transports congruence statements. If it multiplies every distance by one positive factor, it transports similarity statements. Symmetry asks a different question: does the transformation carry one specified figure onto itself?

## Transformations as rules on the plane

**Definition 17.1 (Transformation and isometry).** A plane transformation assigns an image point to each point of the plane. An isometry preserves the distance between every pair of points. The translations, rotations and reflections below are bijections: every image has a unique original point.

The word “every” matters. A rule might preserve the distance from the origin while changing distances between other points. For example, assigning all points on each origin-centred circle to one point on that circle preserves radius but collapses many distinct points. That rule is not an isometry.

**Definition 17.2 (Translation).** For a fixed vector $\\mathbf v=(a,b)$, the translation $T_{\\mathbf v}$ sends
$$
(x,y)\\longmapsto(x+a,y+b).
$$
Every point undergoes the same displacement.

**Proposition 17.3 (Translation preserves distance).** A translation is an isometry, with inverse translation by $-\\mathbf v$.

*Proof.* For points $P,Q$, the difference of their translated coordinates is $(Q+\\mathbf v)-(P+\\mathbf v)=Q-P$. Its magnitude, hence their distance, is unchanged. Adding $-\\mathbf v$ reverses the coordinate change at every point. ∎

A translation does not fix any point unless its vector is zero. It preserves direction as well as length: every segment remains parallel to its image. The zero translation is the identity, which fixes every point.

## Rotation and reflection

**Definition 17.4 (Rotation).** A rotation through angle $\\theta$ about $C$ fixes $C$ and turns each other point through the same directed angle while retaining its distance from $C$. An anticlockwise rotation about the origin has coordinate rule
$$
(x,y)\\longmapsto
(x\\cos\\theta-y\\sin\\theta,\\ x\\sin\\theta+y\\cos\\theta).
$$

**Proposition 17.5 (Rotation preserves distance).** The displayed rotation is an isometry. Its inverse is rotation through $-\\theta$ about the same centre.

*Proof.* Write $c=\\cos\\theta$ and $s=\\sin\\theta$. For any displacement $(u,v)$, its transformed squared length is
$$
(uc-vs)^2+(us+vc)^2=(u^2+v^2)(c^2+s^2)=u^2+v^2.
$$
The transformed difference of any pair of points is obtained by this same rule, so their distance is unchanged. The angle-subtraction relationships, or the reverse geometric turn, show that rotation through $-\\theta$ reverses the map. A nonorigin centre is handled by subtracting $C$, rotating, then adding $C$ back. ∎

Important special cases are
$$
90^\\circ:(x,y)\\mapsto(-y,x),\\qquad
180^\\circ:(x,y)\\mapsto(-x,-y),\\qquad
-90^\\circ:(x,y)\\mapsto(y,-x).
$$
The signs should be checked on a familiar point: an anticlockwise quarter-turn sends $(1,0)$ to $(0,1)$.

**Definition 17.6 (Reflection).** Reflection in a line fixes every point on that line and sends an off-line point to the opposite side so that the line is the perpendicular bisector of the segment joining the point to its image.

Reflection in the $x$-axis is $(x,y)\\mapsto(x,-y)$, in the $y$-axis it is $(x,y)\\mapsto(-x,y)$, and in $y=x$ it is $(x,y)\\mapsto(y,x)$.

**Proposition 17.7 (Reflection preserves distance).** A reflection is an isometry and is its own inverse.

*Proof.* For reflection in the $x$-axis, a coordinate difference $(u,v)$ becomes $(u,-v)$, with unchanged squared length $u^2+v^2$. Applying the rule twice restores the point. For another line, first translate and rotate the plane to carry that line to the $x$-axis, perform the reflection, then undo the rotation and translation. Each step preserves distance, so the composition does too. The geometric reflection rule also shows directly that reflecting twice exchanges each paired point back. ∎

Translations and rotations preserve clockwise versus anticlockwise order around a triangle. Reflection reverses it. Both orientations of a triangle can still be congruent: a congruence may involve a reflection. Thus orientation is an extra property to track, not part of the definition of equal side lengths.

**Example 17.8 (A fold as a reflection).** Reflect $P=(2,7)$ in the horizontal line $y=3$. Its vertical distance from the line is four, so the image is $P'=(2,-1)$. The midpoint of $PP'$ is $(2,3)$ on the mirror, and $PP'$ is vertical, hence perpendicular to that mirror.

More generally reflection in $y=k$ sends $(x,y)$ to $(x,2k-y)$. This rule describes an ideal fold placing one side of the plane onto the other. A physical crease has thickness and may be imperfect, but the mathematical reflection is exact.

## Composing transformations

**Theorem 17.9 (Composition of isometries).** Performing one isometry and then another preserves every distance.

*Proof.* If the first map is $F$ and the second $G$, then for any $P,Q$,
$$
|G(F(P))-G(F(Q))|=|F(P)-F(Q)|=|P-Q|.
$$
The first equality uses preservation by $G$ and the second preservation by $F$. ∎

Composition is generally order-sensitive. The notation $G\\circ F$ means first $F$, then $G$; the rightmost map acts first. The inverse of that composition performs the inverse operations in reverse order. This follows because undoing the second step must occur before undoing the first.

**Example 17.10 (The same two motions in different orders).** Let $T$ translate by $(3,-1)$ and let $R$ rotate anticlockwise by ninety degrees about the origin. Starting at $P=(1,2)$, first $T$ gives $(4,1)$, and then $R$ gives $(-1,4)$.

In the reverse order, $R$ first gives $(-2,1)$, and $T$ then gives $(1,0)$. The images differ, so $R\\circ T$ and $T\\circ R$ are different transformations. Each still preserves distances; order affects the resulting position, not the isometry property.

A useful special composition uses two parallel mirrors. Reflection in $y=a$ followed by reflection in $y=b$ sends
$$
(x,y)\\mapsto(x,2a-y)\\mapsto(x,y+2(b-a)).
$$
It is a translation perpendicular to the mirrors by twice their signed separation. Reversing the order reverses the translation vector. Reflecting first in the $x$-axis and then in the $y$-axis instead gives $(x,y)\\mapsto(-x,-y)$, a half-turn about their intersection.

## Dilations preserve shape rather than size

**Definition 17.11 (Dilation).** A dilation with centre $C$ and positive factor $k$ sends
$$
P\\longmapsto C+k(P-C).
$$
It fixes $C$ and multiplies every displacement from $C$ by $k$.

**Theorem 17.12 (Dilation scales distances).** Under this dilation, every distance is multiplied by $k$, while angles are preserved. Its inverse is the dilation about $C$ with factor $1/k$.

*Proof.* Image-point differences are $k(Q-P)$, whose magnitude is $k|Q-P|$ because $k>0$. Every triangle is therefore carried to a triangle with all corresponding sides in the same ratio, so SSS similarity preserves its angles. Multiplying the displacement from $C$ by $1/k$ restores every point. ∎

For $k=1$ the map is the identity. A zero factor would collapse the entire plane to the centre and have no inverse, so it is excluded from this definition. One can also define negative factors, combining a positive dilation with a half-turn, but the positive form suffices here.

**Example 17.13 (A dilation and its measurements).** Dilate a rectangle with vertices $(1,1),(5,1),(5,3),(1,3)$ by factor two about $C=(1,1)$. Its image vertices are $(1,1),(9,1),(9,5),(1,5)$. The original sides four and two become eight and four.

Perimeter grows from twelve to twenty-four, while area grows from eight to thirty-two. Length has factor two and area factor four. The centre stays fixed, and points are not simply doubled in coordinates because the dilation centre is not the origin. Subtracting the centre before scaling prevents that mistake.

## Symmetry belongs to a particular figure

**Definition 17.14 (Symmetry).** A symmetry of a figure is an isometry carrying that figure onto itself. A reflection symmetry has a mirror line; a rotational symmetry has a centre and an angle. The identity counts as a symmetry.

A transformation carrying a triangle to a congruent triangle elsewhere is not necessarily a symmetry of the original triangle. The image must coincide with the whole original figure. Also, “onto” excludes a map that merely sends a figure into a smaller part of itself.

**Example 17.15 (The eight symmetries of a square).** An unlabelled square has rotations through $0^\\circ,90^\\circ,180^\\circ,270^\\circ$ about its centre. It has four mirror lines: the two diagonals and the two lines through midpoints of opposite sides.

These eight maps are distinct. To see that no further square symmetries exist, choose one vertex. Its image has four possible vertices, and an adjacent vertex must map to one of the two vertices adjacent to that image. These choices determine the images of all remaining vertices by their distances. Thus at most eight symmetries are possible, and the eight listed realise them all.

A nonsquare rectangle has only the identity and half-turn among these rotations, together with the two midpoint mirror lines. Its diagonals are not mirrors because reflection across one would exchange sides of unequal lengths. Similar drawings can therefore have different symmetry sets.

For a regular $n$-gon, the same vertex-and-adjacent-vertex argument gives at most $2n$ symmetries. The $n$ rotations by multiples of $360^\\circ/n$ and its $n$ reflection axes realise all of them. For odd $n$, each axis passes through a vertex and the midpoint of the opposite side; for even $n$, half pass through opposite vertices and half through opposite side midpoints.

## Symmetry, construction and proof

Symmetry can prove equalities rather than merely illustrate them. Reflection in the perpendicular bisector of a segment exchanges its endpoints and fixes every point on the bisector, so each such point is equidistant from the endpoints. A triangle's symmetry axis can identify an altitude with a median and angle bisector. The proof needs the stated symmetry, not a sketch that seems balanced.

When repeating a tile, translations and rotations may organise a tessellation. Around any interior meeting point, the tile angles must sum to a full turn. This is a necessary local condition, but arbitrary pieces satisfying one angle sum need not tile the whole plane. A proposed infinite pattern still needs a rule that covers the plane without gaps or overlaps.

The elementary transformation language also prepares the study of conics. Translating a circle changes its centre without changing radius, and stretching a circle differently in two directions changes its shape. The latter is not an isometry or a uniform dilation, so it deserves a different analysis rather than an automatic appeal to congruence.

## Exercises

### Exercise 17.1
<a id="transformations-symmetry-ex-1"></a>

Translate $(-2,5)$ by vector $(4,-3)$, then give the inverse translation.

<details>
<summary>Hint 1</summary>

Add corresponding components.

</details>
<details>
<summary>Hint 2</summary>

Undo a displacement by its negative.

</details>
<details>
<summary>Solution</summary>

The image is $(2,2)$. The inverse translation uses vector $(-4,3)$ and returns $(2-4,2+3)=(-2,5)$. The same inverse works for every point because the two fixed displacement vectors add to zero.

</details>

### Exercise 17.2
<a id="transformations-symmetry-ex-2"></a>

Rotate $(3,-2)$ anticlockwise by ninety degrees about the origin.

<details>
<summary>Hint 1</summary>

Use the quarter-turn rule.

</details>
<details>
<summary>Hint 2</summary>

Check the result by comparing its distance from the origin.

</details>
<details>
<summary>Solution</summary>

The image is $(-(-2),3)=(2,3)$. Both points have squared distance thirteen from the origin. The sign pattern also agrees with turning the original fourth-quadrant ray anticlockwise into the first quadrant.

</details>

### Exercise 17.3
<a id="transformations-symmetry-ex-3"></a>

Reflect $(7,-1)$ in $y=2$ and identify the midpoint of the point-image segment.

<details>
<summary>Hint 1</summary>

The new vertical coordinate is $2k-y$.

</details>
<details>
<summary>Hint 2</summary>

The midpoint should lie on the mirror.

</details>
<details>
<summary>Solution</summary>

The image is $(7,4-(-1))=(7,5)$. The midpoint is $(7,2)$, lying on the mirror, and the joining segment is vertical. Thus the mirror is its perpendicular bisector, as required.

</details>

### Exercise 17.4
<a id="transformations-symmetry-ex-4"></a>

Show that reflecting first in $y=1$ and then in $y=4$ is a translation.

<details>
<summary>Hint 1</summary>

Write the coordinate change for each reflection.

</details>
<details>
<summary>Hint 2</summary>

Simplify the second vertical coordinate.

</details>
<details>
<summary>Solution</summary>

The first map gives $(x,2-y)$; the second gives $(x,8-(2-y))=(x,y+6)$. Thus the composition translates by $(0,6)$, twice the three-unit mirror separation. Reversing the order would translate by $(0,-6)$.

</details>

### Exercise 17.5
<a id="transformations-symmetry-ex-5"></a>

Dilate $P=(5,1)$ by factor three about $C=(2,-1)$.

<details>
<summary>Hint 1</summary>

Subtract the centre before scaling.

</details>
<details>
<summary>Hint 2</summary>

Add the centre back after multiplying the displacement.

</details>
<details>
<summary>Solution</summary>

The displacement $P-C$ is $(3,2)$. Tripling gives $(9,6)$, so the image is $C+(9,6)=(11,5)$. Directly tripling the original coordinates would use the origin as centre and answer a different question.

</details>

### Exercise 17.6
<a id="transformations-symmetry-ex-6"></a>

A figure is dilated by factor $5/2$. State its perimeter and area scale factors.

<details>
<summary>Hint 1</summary>

Perimeter is a sum of lengths.

</details>
<details>
<summary>Hint 2</summary>

Area scales with two length dimensions.

</details>
<details>
<summary>Solution</summary>

Perimeter has factor $5/2$, and area has factor $(5/2)^2=25/4$. Angles are unchanged. These are similarity statements; the dilation is not an isometry unless its factor is one.

</details>

### Exercise 17.7
<a id="transformations-symmetry-ex-7"></a>

List the reflection axes and nonidentity rotations of a nonsquare rectangle.

<details>
<summary>Hint 1</summary>

Unequal adjacent side lengths rule out a quarter-turn.

</details>
<details>
<summary>Hint 2</summary>

A mirror must preserve the sets of long and short sides.

</details>
<details>
<summary>Solution</summary>

The two reflection axes pass through midpoints of opposite sides. The only nonidentity rotation within one full turn is one hundred eighty degrees about the centre. Diagonals are not axes for a nonsquare rectangle, and quarter-turns would exchange unequal side lengths.

</details>

### Exercise 17.8
<a id="transformations-symmetry-ex-8"></a>

How many symmetries does an unlabelled regular pentagon have? Describe them.

<details>
<summary>Hint 1</summary>

Count rotations including the identity.

</details>
<details>
<summary>Hint 2</summary>

For an odd regular polygon, each mirror passes through a vertex and the opposite side midpoint.

</details>
<details>
<summary>Solution</summary>

There are five rotations by multiples of seventy-two degrees and five reflections, for ten total. The vertex-and-neighbour argument bounds the number by twice five, so the list is complete. Labelling vertices and requiring labels fixed would impose additional restrictions.

</details>

### Exercise 17.9
<a id="transformations-symmetry-ex-9"></a>

Explain why translating a triangle to a congruent triangle in another location need not be a symmetry of the original triangle.

<details>
<summary>Hint 1</summary>

Symmetry requires the image figure to coincide with the original.

</details>
<details>
<summary>Hint 2</summary>

Congruence compares two figures, while symmetry is a self-map of one figure.

</details>
<details>
<summary>Solution</summary>

A translation preserves all distances, so the image is congruent. But if the image occupies a different location, the translated set is not the original set. It therefore fails the onto-itself condition for symmetry. Congruence of image and original is necessary for an isometric symmetry but is not sufficient.

</details>

### Exercise 17.10
<a id="transformations-symmetry-ex-10"></a>

Prove that a nonzero translation cannot permute the vertices of a finite polygon.

<details>
<summary>Hint 1</summary>

Iterate the translation starting at one vertex.

</details>
<details>
<summary>Hint 2</summary>

Nonzero multiples of its displacement produce distinct positions.

</details>
<details>
<summary>Solution</summary>

If translation by nonzero $\\mathbf v$ permuted the finite vertex set, repeated application would keep $P+n\\mathbf v$ in that set for every nonnegative integer $n$. These positions are distinct, because equality for two different integers would imply a nonzero scalar multiple of $\\mathbf v$ is zero. An infinite collection cannot fit in a finite vertex set, giving a contradiction.

</details>

## Sources

The exposition and exercises are original, drawing on motion and folding themes in the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md) and [Origami Construction Geometry](../../courses/origami-construction-geometry.md). For another primary textbook treatment of geometric repetition and symmetry, see OpenStax, [Tessellations](https://openstax.org/books/contemporary-mathematics/pages/10-5-tessellations). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Translations, rotations and reflections preserve every distance, and their compositions remain isometries. Composition order generally changes the resulting map, while inverse operations undo steps in reverse order. A positive dilation preserves angles and multiplies distances by its scale factor, giving the square law for area. Symmetry requires a figure to map onto itself, a stronger condition than being carried to a congruent copy elsewhere. Coordinate rules make these distinctions explicit and provide short checks of fixed points and preserved quantities. The final chapter introduces conic curves through geometric slicing and distance conditions.
`;export{e as default};