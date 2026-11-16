
# Dissections and Rearrangements: Area Without Illusions

A **dissection** cuts a figure into finitely many pieces and rearranges them.
Good dissections can prove area identities and reveal symmetry. Bad diagrams can
also conceal a thin gap, overlap, or bent “straight” edge. The mathematics is an
inventory: exact vertices, exact areas, and exact incidences.

## Worked example 1: the Pythagorean rearrangement

Take four congruent right triangles with leg lengths $a,b$ and hypotenuse $c$.
Arrange them inside a square of side $a+b$, with their hypotenuses bordering a
central square. The outer area is $(a+b)^2$; the four triangles have total area
$4(ab/2)=2ab$; the central square has side $c$ and area $c^2$. Therefore

$(a+b)^2 = 2ab+c^2$, hence $a^2+b^2=c^2$.

Why is the centre a square? Its sides are the four equal hypotenuses. At each
corner, the adjacent acute angles sum to 90 degrees because the two acute angles
of a right triangle do. Equal sides plus right angles proves “square”; appearance
alone does not.

**Text description.** The outer boundary is a square. Each triangle occupies one
corner, with its two legs lying along the outer boundary. The four hypotenuses
form a smaller, rotated four-sided hole in the middle.

## Worked example 2: the missing-square illusion

A famous rearrangement uses pieces that seem to form a $13 \times 5$ right triangle
in two ways, apparently creating or deleting one unit square. But triangles with
legs $(8,3)$ and $(5,2)$ have slopes $3/8$ and $2/5$, which are unequal. Their
supposed common hypotenuse is slightly bent. One arrangement contains a thin gap
and the other a thin overlap; their total discrepancy is exactly one square.

The diagnostic is exact slope, not sharper eyesight. Whenever a rearrangement
seems to change area, check:

1. Are the outer boundaries genuinely congruent?
2. Are alleged straight segments collinear?
3. Do pieces overlap or leave gaps?
4. Are rotations and reflections rigid, or has a piece been stretched?

There is an exact area calculation behind the visual defect. Compare the
triangle with vertices $(0,0),(13,0),(13,5)$ with the broken upper boundary that
passes through $(8,3)$. That point lies below the straight upper boundary:
the straight line has height $40/13$ there, exceeding 3 by $1/13$.
The thin triangular difference has base 13 in the horizontal direction and
height $1/13$, hence area $1/2$. Reversing the two small triangles puts the
break at $(5,2)$, which is above the straight boundary by $1/13$; this creates
another half-unit discrepancy on the other side. The two apparent large
triangles therefore differ in area by exactly one. The pieces have not changed
area; the alleged common boundary was never common.

## Tangrams as coordinate geometry

Silhouette puzzles become verifiable by placing all vertices on a coordinate
grid. A polygon's area can be checked by triangulation or by the shoelace
formula. For cyclic vertices $(x_i,y_i)$,

$$\operatorname{area}=\frac12\left|\sum_i (x_i y_{i+1}-y_i x_{i+1})\right|.$$

Here the vertices must follow the boundary of a simple polygon, returning to
the first vertex at the end. A self-crossing list can produce a signed area
with cancellations instead of the physical area of its filled regions.
One explanation of the formula starts with a triangle having one vertex at
the origin and the others $(x,y),(u,v)$. Its signed area is $(xv-yu)/2$.
The determinant is positive for a counterclockwise turn and negative for a
clockwise turn. Triangulate a simple polygon. Sum the signed determinants
around every triangle, using a consistent counterclockwise orientation.
Each internal edge occurs twice in opposite directions and cancels. The
remaining edges are exactly the polygon boundary, giving the displayed sum.
This also explains why a translation of the coordinate origin does not alter
the answer: the added edge terms telescope around the closed boundary.

### Worked example 3: a piece inventory

A square with vertices $(0,0),(4,0),(4,4),(0,4)$ can be partitioned by the
segment joining $(0,1)$ to $(4,1)$. The bottom rectangle has area 4 and the top
rectangle area 12. Cut the top rectangle along its diagonal; the resulting
two right triangles each have area 6. The inventory $4+6+6=16$ matches the
square's area, but that equality alone would not prove a claimed rearrangement.
One must still give the positions of all pieces and establish disjoint interiors
and complete coverage. Overlap of area 1 accompanied by an uncovered region of
area 1 leaves the total piece-area equation unchanged.

For an auditable placement, list the transformed vertices of each piece.
A translation adds the same vector to all its vertices. A quarter-turn about
the origin sends $(x,y)$ to $(-y,x)$ and preserves lengths and unsigned area.
Reflections preserve unsigned area too, although they reverse orientation.
These formulas provide exact placement records even when a sketch is unavailable.

### Worked example 4: a sheared rectangle

Consider the parallelogram $(0,0),(4,0),(6,3),(2,3)$. Cut along the vertical
segment from $(2,0)$ to $(2,3)$. Translate the left triangular piece by $(4,0)$.
It fills the triangular gap on the right, giving the rectangle
$[2,6]\times[0,3]$. The area is $4\cdot3=12$, despite the sloping side's
length being $\sqrt{13}$. Height means perpendicular distance between parallel
bases, not sloping edge length. If a parallelogram has overhang greater than its
base, one triangle need not fit in this manner; use repeated strips, or split
along a diagonal and compute two triangle areas instead.

Equal area is necessary for a dissection but not sufficient under extra rules
such as “three pieces only” or “cuts along grid lines.” Boundary lengths and
allowed angles can offer additional obstructions.

## Hinged and non-hinged pieces

If pieces may be detached, any rigid motion is allowed separately. If they must
remain hinged, paths can collide and orientation matters. State whether pieces
may be flipped: a physical one-sided printed piece cannot be reflected by motion
in the plane, though a plain two-sided paper piece can be turned over in space.

## Common errors

- Assuming a drawn line is straight rather than comparing slopes.
- Verifying total area but not coverage and disjointness.
- Calling equal-area figures congruent; congruence preserves all distances.
- Ignoring whether reflection is allowed.
- Using a numerical measurement as exact proof when the claim is exact.

## Worked example: area survives while boundary length changes

Arrange four unit squares into one square with side two. Its area is four
and its outer perimeter is eight. Rearrange the same pieces into a straight
strip one unit wide and four units long. The area is still four, but the
outer perimeter is now ten. A dissection preserves the areas of its pieces;
it does not promise to preserve the perimeter of their union.

To account for the change, begin with the sum of the four piece perimeters,
which is sixteen. Every shared unit edge appears twice in this sum, once
for each adjacent piece, and neither copy lies on the outside boundary.
The two-by-two square has four shared unit edges, so removing those eight
counted lengths leaves eight. The strip has only three shared unit edges,
so removing six leaves ten. This boundary inventory explains the difference
without measuring a drawing.

The reasoning assumes pieces meet along whole edges, do not overlap and do
not leave internal holes. More general dissections need the same idea with
the actual shared lengths and all boundary components stated. A gap can
create additional boundary even when it is hard to see. Equal total area
is therefore only one check on a proposed rearrangement: the claimed outer
shape, shared edges and absence of holes each need their own justification.

## Exercises


### Exercise 1 {#dissections-rearrangements-ex-1}

**Explorer.** Cut a rectangle along one diagonal. What congruent pieces result,
   and how can they be rearranged into the original rectangle?

<details>
<summary>Hint 1</summary>

Compare the two triangles' side lengths.

</details>

<details>
<summary>Hint 2</summary>

Use a
   half-turn about the diagonal's midpoint.

</details>

<details>
<summary>Solution</summary>

Two congruent right triangles result. A half-turn about the midpoint of the
   diagonal exchanges them; placing both along their original diagonal restores
   the rectangle. This simple answer identifies the motion and shared boundary.

</details>

### Exercise 2 {#dissections-rearrangements-ex-2}

**Foundation.** Explain why a parallelogram of base $b$ and height $h$ has
   area $bh$ by a dissection.

<details>
<summary>Hint 1</summary>

Cut along a perpendicular to the base.

</details>

<details>
<summary>Hint 2</summary>

Move the
   overhang to the opposite end; consider repeated strips if it is wide.

</details>

<details>
<summary>Solution</summary>

When the overhang is at most the base, cut off the right triangle at one
   slanted end and translate it to the other. This forms a rectangle of base
   $b$ and height $h$. For larger overhang, repeatedly cut and shift a strip
   of horizontal width $b$ until that case applies. Equivalently, the diagonal
   makes two triangles of base $b$ and height $h$, each of area $bh/2$.
   Thus the total area is $bh$ in either case.

</details>

### Exercise 3 {#dissections-rearrangements-ex-3}

**Secondary.** Use four right triangles to derive the Pythagorean identity,
   explicitly justifying the centre's shape.

<details>
<summary>Hint 1</summary>

Subtract the four triangle areas from the outer square.

</details>

<details>
<summary>Hint 2</summary>

The two acute angles of a right triangle sum to a right angle.

</details>

<details>
<summary>Solution</summary>

The outer square has area $(a+b)^2$; subtracting four triangles leaves area
   $(a+b)^2-2ab=a^2+b^2$. The inner quadrilateral has four sides $c$. At each
   vertex its angle is $180 ^{\circ}$ minus the two complementary acute angles,
   hence $90 ^{\circ}$; it is a square of area $c^2$. Equating gives the identity.

</details>

### Exercise 4 {#dissections-rearrangements-ex-4}

**Secondary.** Decide whether points $(0,0)$, $(5,2)$, and $(13,5)$ are
   collinear.

<details>
<summary>Hint 1</summary>

Compare slopes from the origin.

</details>

<details>
<summary>Hint 2</summary>

Cross-multiply
   rather than round the fractions.

</details>

<details>
<summary>Solution</summary>

The slope from $(0,0)$ to $(5,2)$ is $2/5$; to $(13,5)$ it is $5/13$.
   Since $2/5 \ne  5/13$, they are not collinear. Cross multiplication gives
   $26 \ne  25$, avoiding rounded decimals.

</details>

### Exercise 5 {#dissections-rearrangements-ex-5}

**Undergraduate.** Find the area of the polygon with cyclic vertices
   $(0,0),(4,0),(5,2),(2,4),(0,2)$.

<details>
<summary>Hint 1</summary>

Keep the stated cyclic order.

</details>

<details>
<summary>Hint 2</summary>

Make separate
   forward and reverse product sums before subtracting.

</details>

<details>
<summary>Solution</summary>

The forward shoelace sum is $0+8+20+4+0=32$; the reverse sum is
   $0+0+4+0+0=4$. The area is $|32-4|/2=14$ square units.

</details>

<a id="section-157-complete-solutions-to-the-original-five-problems"></a>
<a id="section-155-complete-solutions-to-the-original-five-problems"></a>
## Complete solutions to the original five problems

[Exercise 1](#dissections-rearrangements-ex-1) · [Exercise 2](#dissections-rearrangements-ex-2) · [Exercise 3](#dissections-rearrangements-ex-3) · [Exercise 4](#dissections-rearrangements-ex-4) · [Exercise 5](#dissections-rearrangements-ex-5)

<a id="section-178-hints-for-exercises-1-5"></a>
<a id="section-176-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#dissections-rearrangements-ex-1) · [Exercise 2](#dissections-rearrangements-ex-2) · [Exercise 3](#dissections-rearrangements-ex-3) · [Exercise 4](#dissections-rearrangements-ex-4) · [Exercise 5](#dissections-rearrangements-ex-5)

<a id="section-191-exercise-6-exact-collinearity-dissections-rearrangement"></a>
<a id="section-189-exercise-6-exact-collinearity-dissections-rearrangement"></a>
### Exercise 6: exact collinearity {#dissections-rearrangements-ex-6}

For points $(0,0),(a,b),(c,d)$, prove that collinearity is equivalent to
$ad-bc=0$, provided $(a,b)\ne(0,0)$. Apply it to $(a,b)=(8,3)$ and $(c,d)=(13,5)$.

<details><summary>Hint 1</summary> Twice the signed triangle area is a determinant.
</details>
<details><summary>Hint 2</summary> Two nonzero planar vectors are parallel precisely when one is a scalar multiple.
</details>
<details><summary>Solution</summary> If $(c,d)=t(a,b)$, substitution gives zero. Conversely, if $a\ne0$,
the equation gives $d=bc/a$, so $(c,d)=(c/a)(a,b)$. If $a=0$, then $b\ne0$
and the equation forces $c=0$, giving the same conclusion with scalar $d/b$.
For the specified points the determinant is $40-39=1$, so they are not collinear.
</details>
<a id="section-205-exercise-7-a-translated-triangle-dissections-rearrangem"></a>
<a id="section-203-exercise-7-a-translated-triangle-dissections-rearrangem"></a>
### Exercise 7: a translated triangle {#dissections-rearrangements-ex-7}

Find the area of the triangle $(2,1),(6,1),(3,4)$ by a base-height argument and
by shoelace. Explain why subtracting $(2,1)$ from every vertex is harmless.

<details><summary>Hint 1</summary> The horizontal base has length 4.
</details>
<details><summary>Hint 2</summary> Translation preserves all distances and perpendicular heights.
</details>
<details><summary>Solution</summary> The height is $4-1=3$, so the area is $4\cdot3/2=6$.
The forward product sum is $2+24+3=29$, and the reverse is $6+3+8=17$.
Their difference divided by 2 is 6. Translation gives $(0,0),(4,0),(1,3)$,
with determinant 12 and the same area. It moves every point by one vector,
preserving the geometric triangle.
</details>
<a id="section-220-exercise-8-orientation-and-reflection-dissections-rearr"></a>
<a id="section-218-exercise-8-orientation-and-reflection-dissections-rearr"></a>
### Exercise 8: orientation and reflection {#dissections-rearrangements-ex-8}

Reflect the triangle $(0,0),(3,0),(0,2)$ in the vertical axis. Compare its signed
and unsigned areas before and after reflection.

<details><summary>Hint 1</summary> Reflection sends $(x,y)$ to $(-x,y)$.
</details>
<details><summary>Hint 2</summary> Retain the order of the three labelled vertices.
</details>
<details><summary>Solution</summary> The original determinant is $3\cdot2=6$, giving signed area 3.
The reflected vertices are $(0,0),(-3,0),(0,2)$, giving determinant $-6$ and
signed area $-3$. Both unsigned areas are 3. A reversal of orientation is
compatible with preserving area; it is not compatible with preserving the
printed face of a one-sided piece using planar rotations alone.
</details>
<a id="section-235-exercise-9-area-is-not-congruence-dissections-rearrange"></a>
<a id="section-233-exercise-9-area-is-not-congruence-dissections-rearrange"></a>
### Exercise 9: area is not congruence {#dissections-rearrangements-ex-9}

Give two rectangles with area 12 that are not congruent. Explain why this does
not obstruct a dissection when arbitrary finite straight cuts are permitted.

<details><summary>Hint 1</summary> Compare side lengths of a $3\times4$ and a $2\times6$ rectangle.
</details>
<details><summary>Hint 2</summary> A collection of twelve unit squares can assemble both rectangles.
</details>
<details><summary>Solution</summary> The two specified rectangles have area 12 but different side
length sets, so no rigid motion maps one to the other. Cut the first into twelve
unit squares and arrange them in two rows of six. This is a valid finite
dissection. Congruence of the whole outlines is stronger than rearrangeability
of pieces under these rules.
</details>
<a id="section-250-exercise-10-consecutive-odd-areas-dissections-rearrange"></a>
<a id="section-248-exercise-10-consecutive-odd-areas-dissections-rearrange"></a>
### Exercise 10: consecutive odd areas {#dissections-rearrangements-ex-10}

Prove $1+3+\cdots+(2n-1)=n^2$ by adjoining a border to a square, and identify
exactly which unit squares are added at stage $n$.

<details><summary>Hint 1</summary> Compare squares of side $n-1$ and $n$.
</details>
<details><summary>Hint 2</summary> Count the new top row and rightmost column without counting their corner twice.
</details>
<details><summary>Solution</summary> Place the smaller square in the bottom-left corner of the larger.
Add the top row of $n$ unit squares and the rightmost column below its top
square, containing $n-1$ squares. They have disjoint interiors and fill the
entire missing border, so the new area is $2n-1$. Starting at area zero and
adding these borders for stages 1 through $n$ gives the identity. The explicit
placement certifies both coverage and absence of overlap.
</details>
<a id="section-266-project-an-auditable-dissection"></a>
<a id="section-264-project-an-auditable-dissection"></a>
## Project: an auditable dissection

Choose an area identity such as $1+3+...+(2n-1)=n^2$. Make a paper dissection or
rearrangement that demonstrates it for general $n$. Submit a piece inventory,
coordinate or length specification, proof of no overlaps or gaps, and a text
description usable without the picture. Then deliberately create a nearly
correct false diagram and explain the exact defect.

<a id="section-274-summary"></a>
<a id="section-272-summary"></a>
## Summary

A dissection proof needs a piece inventory, allowed rigid motions and a coverage
argument. Area equality is necessary but does not check placement. Exact slopes
and determinants expose false straight edges; signed triangle areas explain
shoelace and its orientation convention. Describe cuts and coordinates so that
the reasoning remains available without relying on a persuasive drawing.
