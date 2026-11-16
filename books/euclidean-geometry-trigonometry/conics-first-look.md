
# Conics: A First Look

A circle is already familiar as a distance locus: every point on it is equally far from one fixed centre. Conics extend that idea. An ellipse keeps a sum of two distances fixed, a hyperbola keeps an absolute difference fixed, and a parabola equates distance to a point with distance to a line. These definitions describe whole curves rather than a collection of points that happen to look similar in a drawing.

Required preparation is [Coordinates: Lines, Distance and Circles](coordinates-lines-distance-circles.md), [Circles: Chords, Tangents and Angles](circles-chords-tangents-angles.md), [Solids: Volume, Surface Area and Cross-Sections](solids-volume-surface-area.md), and [Transformations and Symmetry](transformations-symmetry.md). This is an introduction to the geometric ideas, not a second coordinate-conics course.

The further book [Conics, Solids and Projections](#/books/conics-solids-projections), beginning with [A Double Cone and Its Planes](../conics-solids-projections/a-double-cone-and-its-planes.md), develops coordinate equations and spatial connections in detail. We will link to that treatment rather than repeat its coordinate derivations. Here the goal is to recognise the distance conditions, check simple examples and understand how a cone slice can acquire a focal property.

## A locus needs an exact condition

**Definition 18.1 (Locus).** A locus is the set of all points satisfying a specified geometric condition. To establish that a proposed curve is exactly a locus, both directions are needed: every point on the curve must satisfy the condition, and every point satisfying the condition must belong to the curve.

Plotting several satisfying points does not establish the entire locus. A drawing of an oval also does not show that it is an ellipse. “Oval” describes an appearance; “ellipse” will mean a particular distance condition.

Distances in this chapter are ordinary nonnegative lengths. A distance to a line is the perpendicular distance to it. Replacing that distance by a sloping segment to an arbitrary point on the line would change the locus.

## Ellipses and a constant sum

**Definition 18.2 (Ellipse).** Fix distinct foci $F_1,F_2$ at separation $d>0$, and choose a constant $L>d$. The ellipse is the locus of points $P$ such that
$$
PF_1+PF_2=L.
$$
The strict inequality ensures a nondegenerate oval rather than a flattened segment or an empty set.

**Proposition 18.3 (Why the sum restriction matters).** If $L<d$, no point satisfies the sum condition. If $L=d$, its locus is the segment joining the foci.

*Proof.* The triangle inequality gives $PF_1+PF_2\ge F_1F_2=d$, so a smaller sum is impossible. Equality holds exactly when the three points are collinear with $P$ between the foci, including either endpoint. Every point of that segment has sum $d$, and no other point does. ∎

For $L>d$, each focal distance is at most $L$, so the ellipse stays in a bounded region. A taut string with its ends fixed at the two foci describes the same sum condition: the two string segments from the pencil point to the foci have total length $L$. This is an ideal model; string thickness and slack introduce physical errors but do not alter the mathematical definition.

**Example 18.4 (Four useful points of an ellipse).** Let the foci be six units apart, with midpoint $M$, and let the constant sum be ten. On the focal line beyond a focus, a point at distance $s$ from $M$ has focal distances $s-3$ and $s+3$. Their sum is $2s$, so the two outer focal-line points occur five units from $M$.

On the perpendicular bisector, each focal distance must equal five. The right triangle with half-focal separation three and hypotenuse five has remaining leg four. Thus there are two perpendicular-bisector points four units from $M$.

These four points help sketch the ellipse and check its scale, but the full curve is still defined by the distance sum. No standard coordinate equation has been assumed or derived.

If the two foci are allowed to coincide at $F$, the sum condition becomes $2PF=L$, a circle of radius $L/2$. A circle is therefore a symmetric special case of the ellipse family, though Definition 18.2 separately used distinct foci to emphasise the two-focus geometry.

## Parabolas and equal distances

**Definition 18.5 (Parabola).** Fix a point $F$ and a line $\ell$ not containing $F$. The parabola is the locus of points $P$ satisfying
$$
PF=\operatorname{dist}(P,\ell).
$$
The point is its focus and the line its directrix.

Let $D$ be the perpendicular foot from $F$ to $\ell$, and $M$ the midpoint of $FD$. Then $MF=MD$, and $MD$ is the perpendicular distance from $M$ to the line. Therefore $M$ lies on the parabola. It is the vertex. The line through $F,D$ is its axis.

**Proposition 18.6 (Parabola symmetry).** Reflection in the axis carries the parabola onto itself.

*Proof.* The reflection fixes $F$ and maps the perpendicular directrix line onto itself. It preserves distances, so the reflected point $P'$ has $P'F=PF$ and the same distance to $\ell$ as $P$. Thus if $P$ satisfies the equality, so does $P'$. Reflection is its own inverse, proving that the entire locus maps onto itself rather than merely into a subset. ∎

**Example 18.7 (Checking membership without deriving an equation).** Take focus $F=(0,2)$ and directrix $y=-2$. The point $P=(4,2)$ has distance four from the focus and perpendicular distance four from the directrix, so it lies on the parabola.

The point $Q=(0,0)$ has both distances two, so it also lies on the curve and is the vertex. The focus itself does not lie on the parabola: its distance to itself is zero but its distance to the directrix is four. The reflected point $(-4,2)$ belongs by symmetry, or by repeating the same distance calculation.

The line in this definition is not a second focus. One distance is to a fixed point, while the other is to the nearest point on a fixed line. That difference produces a different curve from the constant-sum ellipse.

## Hyperbolas and an absolute difference

**Definition 18.8 (Hyperbola).** Fix distinct foci $F_1,F_2$ at separation $d$, and choose a constant $D$ with $0<D<d$. The hyperbola is the locus
$$
|PF_1-PF_2|=D.
$$
The absolute value includes points nearer either focus. The two signs describe its two branches.

**Proposition 18.9 (Difference restriction).** Every point satisfies $|PF_1-PF_2|\le d$. In particular a proposed difference larger than the focal separation is impossible.

*Proof.* The triangle inequality gives $PF_1\le PF_2+d$, so $PF_1-PF_2\le d$. Interchanging the foci gives $PF_2-PF_1\le d$. Together these are exactly the claimed absolute-value bound. ∎

A zero difference gives the perpendicular bisector, not a nondegenerate hyperbola. The endpoint difference $D=d$ is attained on the two outward rays of the focal line, including the foci. The strict inequalities in Definition 18.8 separate the ordinary curve from those degenerate cases.

**Example 18.10 (Both branches need the absolute value).** Put the foci at $(-5,0)$ and $(5,0)$ and choose difference six. At $(3,0)$, the distances are eight and two, with difference six. At $(-3,0)$, they are two and eight; the signed difference reverses but its absolute value stays six.

Another point is $P=(5,16/3)$. Its distance to $(5,0)$ is $16/3$, and its distance to $(-5,0)$ is
$$
\sqrt{10^2+(16/3)^2}=\sqrt{1156/9}=\frac{34}{3}.
$$
The difference is $18/3=6$, so it lies on the hyperbola. A point on the perpendicular bisector has equal focal distances and therefore cannot belong to this difference-six locus.

One application model uses two signals travelling at the same speed from fixed stations. A fixed difference of arrival times corresponds to a fixed difference of distances. The sign identifies which station is nearer; discarding it can combine two possible location branches.

## Common symmetries

**Proposition 18.11 (Two-focus symmetries).** The focal line and its perpendicular bisector are symmetry axes of both the ellipse and the hyperbola.

*Proof.* Reflection in the focal line fixes each focus and preserves each focal distance. Reflection in the perpendicular bisector exchanges the two foci and therefore exchanges the two focal distances. A sum and an absolute difference are unchanged by that exchange. Each reflection preserves the relevant locus condition, and its inverse is the same reflection, so it carries the entire locus onto itself. ∎

These symmetries can be proved directly from definitions before any equation is written. A half-turn about the focal midpoint is their composition and is also a symmetry. The parabola instead has its one distinguished axis; it has no centre that exchanges two foci because its defining data have a different form.

## Why these are called conic sections

An ideal right circular double cone consists of full generator lines through one vertex, all making the same acute angle $\alpha$ with an axis. Its two halves are called nappes. A plane not through the vertex cuts a nondegenerate conic.

To state the usual classification precisely, let $\beta$ be the angle between the cutting plane and the axis: it is zero for an axis-parallel plane and ninety degrees for a plane perpendicular to the axis. A perpendicular cut is a circle. If $\alpha<\beta<90^\circ$, the cut is an ellipse; if $\beta=\alpha$, it is a parabola; if $0\le\beta<\alpha$, it cuts both nappes and is a hyperbola.

This spatial classification and the existence of the associated Dandelin-sphere configurations are classical geometric results developed in the [conics continuation](../conics-solids-projections/a-double-cone-and-its-planes.md). We state that classification here as a bridge, rather than claim that a drawing proves every case. The next argument proves the focal-sum consequence once the ellipse configuration is given.

If the plane passes through the cone vertex, the section may instead be a point, one generator line or two intersecting generator lines. The vertex exclusion is therefore essential. A narrow slice that merely looks like two lines is still different from an exact degenerate section.

## A Dandelin-sphere explanation of the ellipse sum

**Proposition 18.12 (Focal sum in a given Dandelin configuration).** Suppose an elliptic cutting plane is tangent to two spheres fitted inside one nappe of a right circular cone. Let their contacts with the cutting plane be $F_1,F_2$, and their contacts with the generator through a section point $P$ be $Q_1,Q_2$. Suppose $P$ lies between those two generator contacts, as in the ellipse configuration. Then
$$
PF_1+PF_2=Q_1Q_2,
$$
and the right side is the same for every generator. Thus the section has a constant focal-distance sum.

*Proof.* Tangent segments from one external point to a sphere have equal lengths. To justify that fact, join the point to the sphere centre and to the two contact points. Each radius is perpendicular to its tangent segment, so the two right triangles have equal hypotenuse and equal radius; Pythagoras gives equal tangent lengths.

Both the segment from $P$ to $F_i$ in the cutting plane and the segment from $P$ to $Q_i$ along the generator are tangent to the same sphere. Hence $PF_i=PQ_i$. Since $P$ is between the contacts, adding gives $PF_1+PF_2=PQ_1+PQ_2=Q_1Q_2$.

The cone's tangency circles lie in two fixed planes perpendicular to its axis. Their axial separation is fixed, and every generator makes the same angle with the axis. Therefore the distance along a generator between these two planes is fixed as well. This proves constancy of the sum. ∎

The argument explains why the plane-contact points become foci. It does not require deriving a quadratic equation or using differentiation. Its hypotheses, including the placement of the spheres and the order of contact points, are part of the geometric configuration; changing to a hyperbolic section changes the relevant distance combination.

## Looking onward

The three distance conditions supply a dependable way to classify a proposed model: ask whether it fixes a sum, an absolute difference, or a point-to-line equality. A picture alone may disguise the distinction, especially when a short piece of one conic resembles another.

Coordinate equations, tangent properties, directrices for the other conics and more general projections belong to the further conics book. They require careful attention to real loci and degenerate cases. This introductory chapter has instead connected those future topics to the tools already developed here: distance, perpendicularity, similarity, symmetry and exact geometric hypotheses.

## Exercises

### Exercise 18.1
<a id="conics-first-look-ex-1"></a>

An ellipse has foci eight units apart and constant distance sum ten. Find the distances from the focal midpoint to its two points on the perpendicular bisector.

<details>
<summary>Hint 1</summary>

On that bisector the two focal distances agree.

</details>
<details>
<summary>Hint 2</summary>

Use a right triangle with half-focal separation four and hypotenuse five.

</details>
<details>
<summary>Solution</summary>

Each focal distance is five. If the perpendicular-bisector height is $h$, then $h^2+4^2=5^2$, giving $h=3$. Thus the two points are three units from the midpoint on opposite sides. The positive square root gives the distance, while the two geometric sides give two points.

</details>

### Exercise 18.2
<a id="conics-first-look-ex-2"></a>

Can foci five units apart define an ellipse with constant sum four? Explain.

<details>
<summary>Hint 1</summary>

Use the triangle inequality.

</details>
<details>
<summary>Hint 2</summary>

The broken path through a point cannot be shorter than the direct focal segment.

</details>
<details>
<summary>Solution</summary>

No point can have that sum, because $PF_1+PF_2\ge F_1F_2=5$. A constant sum four is smaller than this lower bound. The issue is not an ellipse that is too small to draw; the real locus is empty.

</details>

### Exercise 18.3
<a id="conics-first-look-ex-3"></a>

Describe the locus when foci are six units apart and the sum is exactly six.

<details>
<summary>Hint 1</summary>

This is the equality case of the triangle inequality.

</details>
<details>
<summary>Hint 2</summary>

Determine where the point must lie relative to the foci.

</details>
<details>
<summary>Solution</summary>

The locus is the full segment between the foci, including its endpoints. Points there have distances adding to six. Any point off that segment gives a strictly longer broken path. Thus this is a degenerate segment rather than a nondegenerate ellipse.

</details>

### Exercise 18.4
<a id="conics-first-look-ex-4"></a>

If two ellipse foci coincide at one point and their distance sum is twelve, identify the locus.

<details>
<summary>Hint 1</summary>

Both focal distances are now the same number.

</details>
<details>
<summary>Hint 2</summary>

Divide the sum condition by two.

</details>
<details>
<summary>Solution</summary>

The condition becomes $2PF=12$, so $PF=6$. The locus is a circle of radius six centred at the common focus. This is the coincident-focus special case, separate from the distinct-focus definition used for a noncircular ellipse.

</details>

### Exercise 18.5
<a id="conics-first-look-ex-5"></a>

A parabola has focus $(0,3)$ and directrix $y=-3$. Check $(6,3)$ and $(0,3)$ for membership, and identify its vertex.

<details>
<summary>Hint 1</summary>

Calculate both point distance and perpendicular line distance.

</details>
<details>
<summary>Hint 2</summary>

The vertex is halfway from the focus to its perpendicular foot on the directrix.

</details>
<details>
<summary>Solution</summary>

At $(6,3)$, the focus distance and directrix distance are both six, so the point belongs. At the focus $(0,3)$, the distances are zero and six, so it does not belong. The perpendicular foot is $(0,-3)$, and the midpoint is $(0,0)$, the vertex.

</details>

### Exercise 18.6
<a id="conics-first-look-ex-6"></a>

For the parabola in Exercise 18.5, explain why $(-6,3)$ belongs whenever $(6,3)$ does.

<details>
<summary>Hint 1</summary>

Identify the axis through the focus perpendicular to the directrix.

</details>
<details>
<summary>Hint 2</summary>

Reflection preserves both distances in the defining equality.

</details>
<details>
<summary>Solution</summary>

The axis is the vertical line $x=0$. Reflection in it sends $(6,3)$ to $(-6,3)$, fixes the focus and maps the directrix onto itself. Both defining distances are therefore preserved, so the reflected point also belongs. This proves the membership from symmetry rather than a fresh numerical calculation.

</details>

### Exercise 18.7
<a id="conics-first-look-ex-7"></a>

For foci $(-5,0),(5,0)$ and absolute distance difference six, verify both $(3,0)$ and $(-3,0)$. Explain what happens without the absolute value.

<details>
<summary>Hint 1</summary>

Compute the two distances at each point in the same focal order.

</details>
<details>
<summary>Hint 2</summary>

The signed differences have opposite signs.

</details>
<details>
<summary>Solution</summary>

At $(3,0)$ the distances are eight and two, giving signed difference six. At $(-3,0)$ they are two and eight, giving signed difference negative six. Both absolute differences are six. An equation with signed difference positive six would retain only the corresponding branch and omit the other.

</details>

### Exercise 18.8
<a id="conics-first-look-ex-8"></a>

Can two foci ten units apart have a point whose absolute focal-distance difference is eleven? Prove your answer.

<details>
<summary>Hint 1</summary>

Apply the triangle inequality in both focal orders.

</details>
<details>
<summary>Hint 2</summary>

It bounds the absolute difference by the focal separation.

</details>
<details>
<summary>Solution</summary>

The inequalities $PF_1\le PF_2+10$ and $PF_2\le PF_1+10$ give $|PF_1-PF_2|\le10$. Therefore eleven is impossible. The upper bound concerns every point in the plane, not just points drawn near the foci.

</details>

### Exercise 18.9
<a id="conics-first-look-ex-9"></a>

A cone has generator-to-axis angle $30^\circ$. Classify nonvertex plane cuts whose plane-to-axis angles are $45^\circ,30^\circ,15^\circ,90^\circ$.

<details>
<summary>Hint 1</summary>

Use the stated angle convention rather than an angle to a generator.

</details>
<details>
<summary>Hint 2</summary>

Compare each value with the cone's half-angle.

</details>
<details>
<summary>Solution</summary>

The forty-five-degree cut gives an ellipse, the thirty-degree cut a parabola, and the fifteen-degree cut a hyperbola. The ninety-degree plane is perpendicular to the axis and gives a circle. These conclusions use the classical nondegenerate classification and the assumption that the plane misses the vertex.

</details>

### Exercise 18.10
<a id="conics-first-look-ex-10"></a>

In the stated ellipse Dandelin configuration, $Q_1Q_2=18$ and $PQ_1=7$. Find $PF_1,PF_2$ and explain why the focal sum is independent of $P$.

<details>
<summary>Hint 1</summary>

Use equality of tangent segments to each sphere.

</details>
<details>
<summary>Hint 2</summary>

The point lies between the generator contacts.

</details>
<details>
<summary>Solution</summary>

Tangent equality gives $PF_1=PQ_1=7$. Since the contact separation is eighteen and $P$ lies between them, $PQ_2=11$, so $PF_2=11$. Their sum is eighteen. The separation of the cone's two fixed tangency-circle planes is the same for every generator, and every generator has the same angle to the axis, so that generator distance, hence the focal sum, stays fixed.

</details>

## Sources

This is original introductory exposition with fresh exercises. The local primary continuation is [A Double Cone and Its Planes](../conics-solids-projections/a-double-cone-and-its-planes.md), in [Conics, Solids and Projections](#/books/conics-solids-projections); its coordinate-conic derivations are not repeated here. External primary textbook treatments are OpenStax, [The Ellipse](https://openstax.org/books/precalculus-2e/pages/10-1-the-ellipse), [The Hyperbola](https://openstax.org/books/precalculus-2e/pages/10-2-the-hyperbola), and [The Parabola](https://openstax.org/books/precalculus-2e/pages/10-3-the-parabola). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Conics can be recognised by exact distance conditions: an ellipse fixes a sum, a hyperbola fixes an absolute difference, and a parabola equates distance to a focus and a directrix. Strict conditions separate genuine curves from empty or degenerate loci. Symmetry follows directly from how reflections preserve or exchange the defining distances. Cone slices provide a spatial interpretation, and the stated Dandelin configuration explains an ellipse's constant focal sum through equal tangent segments. Further coordinate and projection theory belongs to the linked conics book. This completes the school geometry route from points and constructions through proof, measurement, trigonometry, solids and transformations.
