var e=`---
parent_id: book-number-and-arithmetic
chapter_id: shapes-perimeter-area
title: "Shapes, Perimeter, and Area"
level: foundation
license: CC BY-SA 4.0
---

# Shapes, Perimeter, and Area

A fence follows the boundary of a garden, while grass covers its interior.
These require different measurements: boundary length and area. A shape can
have a long boundary while covering little ground, and equal-area shapes
can have different boundaries. This chapter develops that distinction using
rectangles, squares, triangles and composite figures whose dimensions can
be stated exactly.

Read [Units and Measurement](units-measurement.md) and
[Powers and Roots](powers-roots.md). You should be able to add lengths,
multiply positive numbers and interpret square units. The figures here are
flat regions with straight sides unless a curve is explicitly mentioned.
Drawings illustrate their stated dimensions; a picture that is not to scale
cannot replace those dimensions in an exact calculation.

## Name the shape and its boundaries

**Definition 11.1 (Polygon).** A simple polygon is a closed shape made of
finitely many straight segments joined end to end, without crossings except
at neighbouring endpoints. The segments are its sides and their endpoints
its vertices. A triangle has three sides and a quadrilateral four.

A rectangle is a quadrilateral with four right angles. A square is a
rectangle whose four sides are equal. Thus every square is also a rectangle;
calling the two categories completely separate would discard the defining
properties they share. A parallelogram has opposite sides parallel. A
rectangle is one type of parallelogram, but a slanted parallelogram need
not have right angles.

The distinction between a region and its boundary matters. A drawing of
a rectangle's outline can represent the whole filled region, but the
outline itself is a collection of length segments, not an area. State
whether a problem asks about covering, enclosing, or traversing before
selecting a formula.

**Definition 11.2 (Perimeter).** The perimeter of a polygon is the sum
of the lengths around its complete boundary. It is measured in length
units, such as centimetres or metres.

**Worked example 11.3 (A rectangular fence).** A rectangle has length
$8$ metres and width $3$ metres. Its boundary has two sides of each
length, so its perimeter is $8+3+8+3=22$ metres. Multiplying
$8\\times3=24$ gives an area, not the fence length. If a two-metre
opening is left in that boundary, twenty metres of fence are needed,
provided the opening replaces a two-metre segment and no extra posts or
returns are included in the model.

## Area counts equal squares

**Definition 11.4 (Area).** Area measures the size of a flat region in
square units. A square unit is the area of a square with side one chosen
length unit. Disjoint pieces have areas that add, and moving a piece
rigidly does not change its area.

For a rectangle with whole-number side lengths, a grid of unit squares
has one row for each unit of width and one column for each unit of
length. Thus its area is length times width. Subdividing a unit into
smaller equal intervals extends the same counting argument to fractional
side lengths. The resulting area unit is squared because two independent
length factors are multiplied.

**Worked example 11.5 (A fractional width).** A rectangle is $4$ metres
long and $1.5$ metres wide. Split it into a four-by-one rectangle and
a four-by-half rectangle. Their areas are four and two square metres,
so the total is six square metres, agreeing with $4\\times1.5=6$.
Its perimeter is $4+1.5+4+1.5=11$ metres. The different units
help distinguish the two answers.

An area of six square metres need not form a six-metre-long square or
strip. It could be a two-by-three rectangle, a one-by-six rectangle, or
many other shapes. Area records one quantity and does not determine
all side lengths. A square of area six has side $\\sqrt6$ metres,
not six metres and not three metres.

## Triangle area uses perpendicular height

**Proposition 11.6 (Triangle area).** A triangle with a chosen base of
length $b$ and corresponding perpendicular height $h$ has area
$bh/2$.

For a right triangle, place a congruent copy against its sloping side
to form a rectangle. The two equal-area triangles fill that rectangle,
whose sides are the perpendicular legs. Each therefore has half its
area. For a triangle whose perpendicular from its top vertex meets
the base between its endpoints, the perpendicular splits it into two
right triangles. Their base lengths add to $b$, and both have height
$h$, so their areas add to $bh/2$.

If the perpendicular meets the extended base outside the triangle, one
right triangle contains another. Subtract their areas: their base
lengths differ by $b$ and they share height $h$, again leaving $bh/2$.
Thus the perpendicular need not fall inside the triangle. The stated
height always measures the shortest distance to the line containing the
base, not the length of an arbitrary sloping side.

**Worked example 11.7 (A sloping side is not the height).** A triangle
has base ten centimetres and perpendicular height four centimetres. Its
area is $10\\times4\\div2=20$ square centimetres. The top vertex
can move along a line parallel to the base at that same height; the
area remains twenty even as the sloping sides change length. Without
those side lengths the perimeter is not determined. Enough information
for an area calculation need not be enough for a boundary calculation.

A triangle has three possible choices of base, each with its own
corresponding height. Their products give the same area, because they
describe the same region. Mixing a base from one choice with a height
perpendicular to another does not apply the proposition.

## Composite figures need an inventory of pieces

A region assembled from disjoint rectangles has area equal to the sum
of their areas. A region made by cutting a hole from a rectangle has
area equal to the outer rectangle's area minus the hole's area, when
the hole lies entirely inside. Shared boundaries have no area, but
boundaries contribute to perimeter only when they belong to the final
region's boundary.

**Worked example 11.8 (An L-shaped region).** Begin with a $6$ by $4$
centimetre rectangle and remove a $2$ by $1$ centimetre rectangle from
its top-right corner. The remaining area is $24-2=22$ square
centimetres. To trace the new boundary, start at the bottom-left corner
and travel right six, up three, left two, up one, left four, and down
four centimetres. These lengths sum to twenty centimetres. The original
rectangle's perimeter was also twenty. This equality happens because
the removed outer lengths two and one are replaced by equal inward
lengths; removing a corner need not reduce the perimeter even though
it reduces the area.

If instead a rectangular hole is cut entirely inside the board,
the new inner boundary contributes to the complete boundary length.
A question asking for paint on the filled region uses area subtraction;
a question asking for edging around every exposed boundary includes
the hole's perimeter as well. Define the target measurement before
assuming that “subtract the hole” applies to every quantity.

## Scaling and comparison

Doubling every length of a rectangle doubles each side in its boundary,
so it doubles the perimeter. But its area receives a factor of two
from both length and width, making it four times as large. Tripling
lengths makes the perimeter three times and the area nine times as
large. General similar shapes obey the same length and area scale
pattern, but a shape whose width is unchanged while its length doubles
has not had every length doubled.

Two shapes can have equal area but different perimeter. A one-by-six
rectangle has area six and perimeter fourteen, while a two-by-three
rectangle has area six and perimeter ten, using the same units.
Conversely, two rectangles can have equal perimeter and different area:
a one-by-five and a two-by-four rectangle both have perimeter twelve,
but areas five and eight. Neither measurement determines the other.

Curved shapes also have boundaries and areas. A circle consists of
points a fixed distance from its centre; its radius is that distance,
and a diameter runs through the centre between opposite boundary points.
A circle is not a polygon. Grid counting can approximate its enclosed
area, but partial boundary squares and the chosen grid size affect
the approximation. Exact circle formulas belong to a further geometry
route; a rough drawing does not prove them or justify treating the
circle as a square.

## Exercises

### Exercise 11.1
<a id="shapes-perimeter-area-ex-1"></a>

Is every square a rectangle? Is every rectangle a square? Use the definitions.

<details><summary>Hint 1</summary>

Compare the required right angles and equal sides.

</details>
<details><summary>Hint 2</summary>

A two-by-five rectangle provides a possible counterexample in one direction.

</details>
<details><summary>Solution</summary>

Every square is a rectangle because it has four right angles. A rectangle
need not be a square: a two-by-five rectangle has unequal adjacent side
lengths, so it lacks the square's equal-side condition.

</details>

### Exercise 11.2
<a id="shapes-perimeter-area-ex-2"></a>

Find the perimeter and area of a seven-by-four centimetre rectangle.

<details><summary>Hint 1</summary>

Perimeter adds boundary lengths; area multiplies the two dimensions.

</details>
<details><summary>Hint 2</summary>

There are two sides of each length.

</details>
<details><summary>Solution</summary>

The perimeter is $7+4+7+4=22$ centimetres. The area is
$7\\times4=28$ square centimetres. The units identify which quantity
each number measures.

</details>

### Exercise 11.3
<a id="shapes-perimeter-area-ex-3"></a>

A square has area forty-nine square metres. Find its side and perimeter.

<details><summary>Hint 1</summary>

The side squared gives the area.

</details>
<details><summary>Hint 2</summary>

After finding the side, add four equal sides for the boundary.

</details>
<details><summary>Solution</summary>

The side is $\\sqrt{49}=7$ metres, and the perimeter is
$4\\times7=28$ metres. Taking a square root recovers a length
from this square's area.

</details>

### Exercise 11.4
<a id="shapes-perimeter-area-ex-4"></a>

A triangle has base twelve centimetres and corresponding perpendicular
height five centimetres. Find its area.

<details><summary>Hint 1</summary>

Compare with a rectangle using the same base and height.

</details>
<details><summary>Hint 2</summary>

The triangle has half the rectangle's area.

</details>
<details><summary>Solution</summary>

Its area is $12\\times5\\div2=30$ square centimetres.
The five-centimetre measurement must be perpendicular to the chosen base,
as stated.

</details>

### Exercise 11.5
<a id="shapes-perimeter-area-ex-5"></a>

A triangle has a known base of six metres and a sloping side of five
metres, but no other information. Can its area be found as $6\\times5/2$?

<details><summary>Hint 1</summary>

The formula requires a perpendicular height.

</details>
<details><summary>Hint 2</summary>

A sloping side need not be perpendicular to the base.

</details>
<details><summary>Solution</summary>

No. The five-metre side has not been identified as a perpendicular height.
Different triangles can share those two side lengths while having different
heights and areas. Additional geometric information is required.

</details>

### Exercise 11.6
<a id="shapes-perimeter-area-ex-6"></a>

An eight-by-five centimetre rectangle loses a two-by-two centimetre corner.
Find its remaining area.

<details><summary>Hint 1</summary>

The removed square lies within the original rectangle.

</details>
<details><summary>Hint 2</summary>

Subtract the removed area, not merely one of its side lengths.

</details>
<details><summary>Solution</summary>

The outer area is $8\\times5=40$ square centimetres and the
removed area $2\\times2=4$. The remainder is $36$ square
centimetres. Subtracting two would confuse length with area.

</details>

### Exercise 11.7
<a id="shapes-perimeter-area-ex-7"></a>

Compare the perimeters of a one-by-eight rectangle and a two-by-four
rectangle, and verify their equal areas.

<details><summary>Hint 1</summary>

Calculate each boundary sum separately.

</details>
<details><summary>Hint 2</summary>

Both length-width products equal eight.

</details>
<details><summary>Solution</summary>

Their areas are both eight square units. Their perimeters are
$1+8+1+8=18$ and $2+4+2+4=12$ length units.
Equal area therefore does not imply equal perimeter.

</details>

### Exercise 11.8
<a id="shapes-perimeter-area-ex-8"></a>

A three-by-four rectangle has all side lengths doubled. Find the factor
by which its perimeter changes and the factor for its area.

<details><summary>Hint 1</summary>

Compare the original with a six-by-eight rectangle.

</details>
<details><summary>Hint 2</summary>

Perimeter uses a sum of lengths; area uses two length factors.

</details>
<details><summary>Solution</summary>

The perimeter changes from fourteen to twenty-eight, a factor of two.
Area changes from twelve to forty-eight, a factor of four.
Doubling both dimensions supplies two factors of two in the area.

</details>

### Exercise 11.9
<a id="shapes-perimeter-area-ex-9"></a>

A six-by-six square board has a one-by-two rectangular hole entirely
inside it. Find the area left and the length of every exposed boundary.

<details><summary>Hint 1</summary>

Subtract the hole's area from the board's area.

</details>
<details><summary>Hint 2</summary>

The boundary measurement includes both the outside and the hole's edge.

</details>
<details><summary>Solution</summary>

The remaining area is $36-2=34$ square units. The outer boundary
is twenty-four units and the inner boundary is $1+2+1+2=6$,
so the complete exposed boundary length is thirty units.

</details>

### Exercise 11.10
<a id="shapes-perimeter-area-ex-10"></a>

A circle has radius three centimetres. What is its diameter, and why
does this information not make it a six-by-six square?

<details><summary>Hint 1</summary>

A diameter consists of two radii lying on one straight line.

</details>
<details><summary>Hint 2</summary>

The boundary's shape is part of the region's definition.

</details>
<details><summary>Solution</summary>

The diameter is six centimetres. The circle has a curved boundary with
all boundary points three centimetres from its centre; a six-by-six
square has straight sides and corners farther from its centre.
The same overall width does not identify the same shape or area.

</details>

## Summary and next connection

Perimeter measures a complete boundary in length units; area measures a
region in square units. Rectangles use length times width, and triangles
half base times perpendicular height. Composite regions need a clear
inventory of included and removed pieces. Scale factors act differently
on length and area. The final chapter combines these distinctions with
estimation and checks on the meaning of an answer.
`;export{e as default};