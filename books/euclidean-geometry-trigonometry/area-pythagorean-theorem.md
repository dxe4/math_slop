
# Area and the Pythagorean Theorem

Length measures a segment, perimeter measures a boundary, and area measures a region. A rectangle can have the same perimeter as another rectangle while enclosing a different area. A diagonal can be shorter than a route along two sides even though both routes have the same endpoints. Before applying a formula, identify which quantity the question asks for.

This chapter asks how cutting a figure into simpler regions can establish exact equations. We will derive triangle, parallelogram and trapezium area formulas, then compare two ways of counting the area of a square to prove Pythagoras. The converse will let us recognise a right triangle from its side lengths.

Read [Quadrilaterals and Polygons](quadrilaterals-polygons.md). We assume arithmetic with squares and positive square roots. The registered [Algebra and Functions](#/books/algebra-and-functions) gives further practice with those operations. All lengths are nonnegative, and a nondegenerate triangle has positive base and height.

## The area framework

**Definition 6.1 (Area and perpendicular height).** Area is the nonnegative measure of a plane region, expressed in square units. The height relative to a chosen base is the perpendicular distance from the opposite vertex or parallel side to the line containing that base.

We use the standard area principles: a rectangle with side lengths $a,b$ has area $ab$; congruent regions have equal areas; and the areas of finitely many pieces with disjoint interiors add to the area of their union. Boundary edges themselves contribute no area. These are the measurement rules from which the formulas below are derived.

The unit matters. A rectangle measuring $4$ cm by $7$ cm has area $28\text{ cm}^2$, not $28$ cm. Since one metre is one hundred centimetres, one square metre contains ten thousand square centimetres. Converting an area uses the square of the length conversion factor.

A height is perpendicular, even when a slanted edge is easier to see. In an obtuse triangle, the perpendicular foot may lie outside the base segment. The distance is still measured to the full base line, so the same area formula will remain valid.

## Areas from triangle pieces

**Theorem 6.2 (Triangle area).** A triangle with base length $b>0$ and perpendicular height $h>0$ has area
$$
A=\frac12bh.
$$

*Proof.* A right triangle with perpendicular legs $b,h$ occupies half a rectangle of those side lengths: the rectangle's diagonal creates two congruent triangles. Its area is therefore $bh/2$.

For a general triangle with base $AB$, drop the perpendicular from $C$ to the line $AB$, meeting it at $H$. If $H$ lies between $A,B$, the two right triangles have total area
$$
\frac12 AH\cdot h+\frac12 HB\cdot h
=\frac12(AH+HB)h=\frac12 AB\cdot h.
$$
If $H$ lies beyond $B$, subtract the smaller right triangle $BHC$ from $AHC$ to obtain
$$
\frac12(AH-BH)h=\frac12 AB\cdot h.
$$
The case beyond $A$ is analogous. If $H$ equals a base endpoint, the original right-triangle calculation applies directly. Thus every case gives $bh/2$. ∎

**Theorem 6.3 (Parallelogram and trapezium areas).** A parallelogram with base $b$ and perpendicular height $h$ has area $bh$. A convex trapezium with parallel base lengths $a,b$ and perpendicular height $h$ has area $(a+b)h/2$.

*Proof.* A diagonal divides a parallelogram into two congruent triangles. Each has area $bh/2$, since its opposite vertex lies on the parallel line at distance $h$ from the chosen base line. Their areas add to $bh$.

A diagonal of the trapezium divides it into two triangles, one based on each parallel base. Each has height $h$. Their areas therefore add to $ah/2+bh/2=(a+b)h/2$. Convexity ensures the diagonal pieces partition the region. ∎

**Example 6.4 (A slanted side is not a height).** A parallelogram has base $12$ cm, adjacent side $9$ cm and perpendicular height $7$ cm. Its area is $12\cdot7=84\text{ cm}^2$. Its perimeter is $2(12+9)=42$ cm. Multiplying base by the slanted side would give the wrong area unless that side were perpendicular to the base.

A triangle on the same base line with the same base length and height has area $42\text{ cm}^2$. A trapezium with parallel bases $9$ cm and $15$ cm and height $8$ cm has area $(9+15)8/2=96\text{ cm}^2$. The formulas express distinct decompositions, all using perpendicular distance rather than an arbitrary visible segment.

## Pythagoras by dissection

**Theorem 6.5 (Pythagorean theorem).** In a Euclidean right triangle with positive leg lengths $a,b$ and hypotenuse length $c$,
$$
a^2+b^2=c^2.
$$

*Proof.* Make four congruent copies of the triangle. Place them at the four corners of a square of side $a+b$, with their right angles at the outer corners and with leg lengths $a,b$ alternating cyclically along the outer sides. Each outer side is exactly partitioned into one leg of each length.

The four corner triangles leave a central quadrilateral whose sides are the four hypotenuses, each of length $c$. At a central vertex, the two adjacent acute triangle angles together equal $90^\circ$, because the original right triangle's acute angles are complementary. Subtracting these from the straight angle along the outer side leaves a right angle in the central quadrilateral. Thus the central region is a square of side $c$.

The outer square is partitioned into the four triangles and that central square. By area addition,
$$
(a+b)^2=4\left(\frac12ab\right)+c^2.
$$
Expanding gives $a^2+2ab+b^2=2ab+c^2$. Subtracting $2ab$ proves the equation. ∎

The proof compares areas, so the squared lengths naturally have square units. It does not assert that the unsquared side lengths add. Indeed $a+b>c$ for a nondegenerate right triangle, whereas their squares satisfy the displayed equality.

The right-angle hypothesis is essential. The sides $4,5,6$ form a triangle but do not satisfy $4^2+5^2=6^2$. A triangle may exist without being right. The hypotenuse is the side opposite the right angle, not whichever side happens to be horizontal in a drawing.

**Example 6.6 (A diagonal and two different routes).** A rectangular panel is $8$ cm wide and $15$ cm high. Its diagonal is the hypotenuse of a right triangle with those legs. Thus
$$
c^2=8^2+15^2=64+225=289,
$$
and $c=17$ cm because a length takes the positive root.

A route along one width and one height covers $8+15=23$ cm. The straight diagonal covers $17$ cm. These answers describe different paths. The panel area is $120\text{ cm}^2$, a third quantity with different units. The same input lengths therefore support several valid answers depending on the question.

When finding a missing leg rather than a hypotenuse, rearrange the theorem before taking a root. If $c=29$ and one leg is $20$, the other leg satisfies $b^2=29^2-20^2=441$, so $b=21$. Adding squares in that situation would create a length larger than the given hypotenuse and contradict the configuration.

## Recognising a right angle

**Theorem 6.7 (Converse of Pythagoras).** If a nondegenerate triangle has positive side lengths $a,b,c$ satisfying $a^2+b^2=c^2$, then the angle opposite side $c$ is right.

*Proof.* Construct a right triangle with perpendicular legs of lengths $a,b$. Let its hypotenuse be $d$. The proved theorem gives $d^2=a^2+b^2=c^2$. Since $d,c$ are positive, $d=c$. The constructed triangle and the given triangle therefore have three corresponding equal sides. SSS makes them congruent, so the angle opposite $c$ in the original triangle equals the constructed right angle. ∎

This proof establishes the converse instead of treating an implication as automatically reversible. It uses the forward theorem and a separately justified congruence rule. Also the equation forces $c>a$ and $c>b$, so it identifies the longest side consistently.

**Example 6.8 (A numerical right-angle certificate).** A triangle has sides $12,35,37$ metres. The calculation
$$
12^2+35^2=144+1225=1369=37^2
$$
satisfies the converse, so the angle opposite the $37$ metre side is right. Its area is therefore $(12)(35)/2=210\text{ m}^2$.

For a physical survey, the three measured lengths would have uncertainty, and an approximate square relation would not prove an exactly right angle. For exact side data in a mathematical problem, the equality and converse do establish it. The same arithmetic has a different evidential role depending on whether its inputs are exact or measured.

## Scaling and unit conversion

If all lengths of a rectangle are multiplied by $k>0$, its area is multiplied by $k^2$: $(ka)(kb)=k^2ab$. The same area scaling holds for triangles and parallelograms because their bases and perpendicular heights both scale by $k$. A polygon partitioned into triangles inherits the same factor by adding piece areas.

**Example 6.9 (Enlarging a plan).** A rectangular drawing is $12$ cm by $18$ cm and has area $216\text{ cm}^2$. Enlarging every length by $3/2$ gives dimensions $18$ cm by $27$ cm and area $486\text{ cm}^2$. The area factor is $486/216=9/4=(3/2)^2$.

The perimeter changes from $60$ cm to $90$ cm, a factor of $3/2$. Length, perimeter and area therefore cannot all be converted with the same multiplier. This also explains why converting from metres to centimetres multiplies numerical areas by $100^2$, not by $100$.

For an irregular polygon, choose a decomposition whose pieces are fully specified. If a rectangle is removed from a larger rectangle, subtract its area only when that removed region actually lies inside. If a perpendicular foot is outside a triangle, use the subtraction argument in Theorem 6.2 rather than treating an exterior region as part of the triangle.

Every formula should end with its units and geometric interpretation. Squared calculations are not a substitute for identifying a right angle, and a visual diagonal is not necessarily the path the problem asks to measure. These checks keep algebra tied to the intended figure.

## Exercises

### Exercise 6.1
<a id="area-pythagorean-theorem-ex-1"></a>

A triangle has base $16$ cm and perpendicular height $9$ cm. Find its area and state the correct unit.

<details><summary>Hint 1</summary>

Use half the corresponding rectangle area.

</details>
<details><summary>Hint 2</summary>

Both length units are multiplied.

</details>
<details><summary>Solution</summary>

The area is $(16)(9)/2=72\text{ cm}^2$. Square centimetres are required because the calculation multiplies two lengths. The given height must be perpendicular to the base line; an unrelated nine-centimetre side would not justify the same computation.

</details>

### Exercise 6.2
<a id="area-pythagorean-theorem-ex-2"></a>

A triangle of area $54\text{ m}^2$ has base $12$ m. Find its perpendicular height.

<details><summary>Hint 1</summary>

Start from $A=bh/2$.

</details>
<details><summary>Hint 2</summary>

Rearrange before substituting to avoid losing the factor two.

</details>
<details><summary>Solution</summary>

We have $54=12h/2=6h$, so $h=9$ m. The result is a length, not an area. Substitution gives $(12)(9)/2=54\text{ m}^2$, checking both the arithmetic and the meaning of the requested quantity.

</details>

### Exercise 6.3
<a id="area-pythagorean-theorem-ex-3"></a>

A parallelogram has base $14$ cm, adjacent side $10$ cm and height $6$ cm. Find its area and perimeter.

<details><summary>Hint 1</summary>

The slanted side enters the perimeter, not the area formula.

</details>
<details><summary>Hint 2</summary>

Use opposite-side equality for the boundary length.

</details>
<details><summary>Solution</summary>

Its area is $14\cdot6=84\text{ cm}^2$, while its perimeter is $2(14+10)=48$ cm. Multiplying fourteen by ten would use the wrong height. The two answers have different dimensions because one measures the region and the other the boundary.

</details>

### Exercise 6.4
<a id="area-pythagorean-theorem-ex-4"></a>

A convex trapezium has parallel bases $7$ cm and $19$ cm, separated by $5$ cm. Find its area and explain the diagonal decomposition.

<details><summary>Hint 1</summary>

The diagonal produces two triangles.

</details>
<details><summary>Hint 2</summary>

Both triangle heights equal the separation of the parallel lines.

</details>
<details><summary>Solution</summary>

The area is $(7+19)5/2=65\text{ cm}^2$. One diagonal triangle uses base seven and height five, while the other uses base nineteen and the same height. Their areas $17.5$ and $47.5$ square centimetres add to sixty-five. Convexity ensures these triangles partition the trapezium.

</details>

### Exercise 6.5
<a id="area-pythagorean-theorem-ex-5"></a>

A right triangle has legs $9$ cm and $12$ cm. Find its hypotenuse.

<details><summary>Hint 1</summary>

The unknown hypotenuse square is the sum of the leg squares.

</details>
<details><summary>Hint 2</summary>

Choose the positive square root for a length.

</details>
<details><summary>Solution</summary>

The hypotenuse satisfies $c^2=81+144=225$, so $c=15$ cm. The negative algebraic root is not an admissible length. The result is larger than either leg, agreeing with the geometric meaning of the hypotenuse.

</details>

### Exercise 6.6
<a id="area-pythagorean-theorem-ex-6"></a>

A right triangle has hypotenuse $25$ m and one leg $15$ m. Find its other leg and its area.

<details><summary>Hint 1</summary>

Subtract the known leg square from the hypotenuse square.

</details>
<details><summary>Hint 2</summary>

The two legs form a perpendicular base-height pair.

</details>
<details><summary>Solution</summary>

The missing leg satisfies $b^2=625-225=400$, so $b=20$ m. The area is $(15)(20)/2=150\text{ m}^2$. Adding the squares to find a leg would give a side longer than the hypotenuse and contradict the stated right triangle.

</details>

### Exercise 6.7
<a id="area-pythagorean-theorem-ex-7"></a>

Decide whether a triangle with sides $10,24,26$ is right, stating which angle is determined.

<details><summary>Hint 1</summary>

Use the longest side as the proposed hypotenuse.

</details>
<details><summary>Hint 2</summary>

The converse needs an exact square equality.

</details>
<details><summary>Solution</summary>

We have $10^2+24^2=100+576=676=26^2$. By the converse theorem, the angle opposite the side of length twenty-six is right. This is a conclusion from exact side data and SSS in the converse proof, rather than an assumption that every familiar integer triple must be Pythagorean.

</details>

### Exercise 6.8
<a id="area-pythagorean-theorem-ex-8"></a>

A rectangle is $5$ m by $12$ m. Compare its diagonal with a route along two adjacent sides.

<details><summary>Hint 1</summary>

The diagonal is a right-triangle hypotenuse.

</details>
<details><summary>Hint 2</summary>

The boundary route adds the two side lengths.

</details>
<details><summary>Solution</summary>

The diagonal is $\sqrt{5^2+12^2}=13$ m. The two-side route is $5+12=17$ m. Both connect the same two opposite corners but follow different paths. Reporting one without identifying the requested path could answer a different measurement question.

</details>

### Exercise 6.9
<a id="area-pythagorean-theorem-ex-9"></a>

Every length in a triangle is enlarged by factor $4$. Its original area is $18\text{ cm}^2$. Find the new area and explain the scale factor.

<details><summary>Hint 1</summary>

Both base and perpendicular height change.

</details>
<details><summary>Hint 2</summary>

Area scales by the square of the length factor.

</details>
<details><summary>Solution</summary>

The area factor is $4^2=16$, so the new area is $16\cdot18=288\text{ cm}^2$. Using factor four alone would scale only one length dimension. The triangle formula $bh/2$ shows directly why both scaled dimensions contribute.

</details>

### Exercise 6.10
<a id="area-pythagorean-theorem-ex-10"></a>

Convert $2.4\text{ m}^2$ to square centimetres. Explain why multiplying by one hundred is insufficient.

<details><summary>Hint 1</summary>

Imagine a one-metre square divided into centimetre squares.

</details>
<details><summary>Hint 2</summary>

There are one hundred rows and one hundred columns.

</details>
<details><summary>Solution</summary>

One square metre is $100\cdot100=10000$ square centimetres. Therefore $2.4\text{ m}^2=24000\text{ cm}^2$. Multiplying by one hundred would convert a single length dimension only. An area conversion needs the square of the length conversion factor, just as a geometric enlargement does.

</details>

## Sources

The exposition and exercises are original. Local seeds are module 3 of [the retained geometry course](../../course-texts/atlas-euclidean-trigonometry-standard.md) and sections 1 and 5 of [Paper, Shapes, and Shadows](../../course-texts/atlas-paper-shadow-geometry.md). For the classical theorem and converse see Euclid, [Elements, Book I](https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html), propositions 47–48, David Joyce's online edition, consulted 13 November 2026. The proof here uses the stated finite area principles and a four-triangle dissection.

## Summary

Area formulas follow from rectangle area, congruence and addition or subtraction of pieces. Heights are perpendicular distances to base lines, including when their feet lie outside a triangle. A square dissection proves $a^2+b^2=c^2$ for right triangles, and SSS proves the converse. Lengths use positive square roots, while square units and squared scale factors distinguish area from perimeter. The next chapter studies proportional lengths and explains why angle information can force a common scale.

