var e=`---
parent_id: book-conics-solids-projections
chapter_id: descriptive-geometry
title: "Descriptive Geometry"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Descriptive Geometry

Descriptive geometry is the discipline of representing three-dimensional objects accurately in two dimensions so that spatial measurements can be recovered from the drawing. Developed by Gaspard Monge in the eighteenth century, it remains the foundation of engineering drawing, architecture, and computer-aided design. This chapter presents the orthographic projection system, explains how to construct true lengths and angles from projected views, and introduces the auxiliary view as a tool for solving spatial problems.

This L2 treatment uses Euclidean vectors, dot products and elementary plane equations. A drawing represents a specified projection convention and correspondence of points; it does not establish the hidden spatial object uniquely without that information. The constructions below concern exact geometric data, not manufacturing tolerances or a numerical reconstruction guarantee.

## The orthographic projection system

An orthographic projection maps each point of space to a picture plane by dropping a perpendicular from the point to the plane. Parallel lines in space project to parallel or coincident lines in the plane, unless their direction is perpendicular to the plane, in which case they project to points.

In the standard two-view system, an object is represented by its projections onto two perpendicular planes:

- The **horizontal plane** $H$ (top view) shows width and depth.
- The **vertical plane** $V$ (front view) shows width and height.

The intersection of $H$ and $V$ is the **ground line** $XY$. The two planes are imagined to be rotated about $XY$ until they coincide, so both views appear on the same drawing sheet. In first-angle projection, standard in much of Europe, the top view is placed below the front view; in third-angle projection, standard in the United States, it is placed above. This chapter states the convention with each constructed sheet rather than relying on geography alone.

### Matched views retain three coordinates

Take H to be z zero and V to be y zero, with their common x-axis as ground line. Before folding, a spatial point $(x,y,z)$ has top coordinates $(x,y)$ and front coordinates $(x,z)$. The two x-values must agree. When they do, a matched pair reconstructs exactly one spatial point. If they do not, no spatial point produces that pair in this common coordinate convention. After a view is folded onto the sheet its signed depth or height may be displayed with a reversed sheet direction, so the stated convention must be undone before comparing coordinates.

Correspondence is essential. An unlabelled top view with points $(0,0),(0,1)$ and an unlabelled front view with the same pair permits two matchings. They can represent the spatial pair $(0,0,0),(0,1,1)$ or the pair $(0,0,1),(0,1,0)$. Both give the same sets of projected points. Identifying which front point belongs to which top point removes this ambiguity; assuming matching merely by order in a list does not. Edges, faces and visibility require their own information even after vertices are matched. Two pictures alone do not encode every surface joining those vertices.

### The projection and closest-point proof

Let a plane have point a and nonzero normal n. For any point P its orthogonal projection is

$$Q=P-\\frac{(P-a)\\cdot n}{|n|^2}n.$$

Taking the dot product of Q minus a with n proves that Q lies in the plane. The difference P minus Q is parallel to n, hence perpendicular to every plane direction. For any other plane point R, the decomposition P minus R into P minus Q and Q minus R is orthogonal, so

$$|P-R|^2=|P-Q|^2+|Q-R|^2.$$

It follows that Q is the unique nearest point, with equality only at R equal to Q. This proves the perpendicular-foot construction rather than treating apparent perpendicularity on a foreshortened drawing as evidence. The formula is unchanged if the plane normal is rescaled; a zero normal would not define the plane and is explicitly excluded.

## True length and true shape

A line segment parallel to the projection plane projects in true length. A line of length $L$ making angle $\\theta$ with the projection plane has projected length $L\\cos\\theta$; equivalently, if $\\eta$ is its angle with the plane normal, the length is $L\\sin\\eta$.

For a vector w, orthogonal projection removes its component along a unit normal n. Squaring gives $|w_{\\rm projected}|^2=|w|^2-(w\\cdot n)^2$. The trigonometric length rule follows immediately. Equality with the true length occurs exactly when the normal component vanishes; complete collapse occurs exactly when the segment direction is normal to the picture plane.

To find the true length of an oblique segment from its two principal views:

1. In the top view, draw a right triangle whose base is the segment's projection on $H$ and whose height is the difference in elevation shown in the front view.
2. The hypotenuse is the true length.

Similarly, a plane figure parallel to a projection plane projects in true shape. An oblique plane figure projects as a foreshortened shape. To find the true shape, construct an auxiliary view on a plane parallel to the oblique plane.

For a plane figure there is also an exact area factor. Choose orthonormal directions e and f in its plane and let m be their unit normal. The signed area of their projected parallelogram, measured with picture-plane unit normal n, is

$$n\\cdot(e_{\\rm projected}\\times f_{\\rm projected})
=n\\cdot(e\\times f)=n\\cdot m.$$

Terms containing n disappear from the scalar triple product. Thus all areas in the plane scale by $|m\\cdot n|$. If the dot product is zero the plane is edge-on and projects into a line. Otherwise the projection restricted to that plane is one-to-one, and its inverse area factor is the reciprocal. True shape for every figure in the plane requires parallel picture and object planes, not merely a nonzero area factor. A particular angle can happen to survive an oblique projection without the entire plane being represented isometrically.

## Auxiliary views

An auxiliary view is a projection onto a plane chosen to reveal information hidden in the principal views. Common uses include:

- Finding the true shape of an oblique plane section.
- Finding the true angle between two planes.
- Finding the shortest distance from a point to a line or plane.

To construct an auxiliary view, select a new projection plane perpendicular to one of the principal planes and in a favorable orientation relative to the object. The folding line between the new plane and the principal plane replaces the ground line $XY$. A single standard auxiliary view need not reveal the true shape of every arbitrarily inclined plane. If necessary use a first auxiliary plane containing the object plane normal, so the object becomes edge-on, then a second plane parallel to the object plane. The first and second auxiliary planes are perpendicular, allowing the usual folding construction. Coordinates and perpendiculars establish the orientation before a ruler is used to read a true measurement.

### Worked example 1: true shape of an oblique triangle {#example-true-shape-of-an-oblique-triangle}

Suppose a triangle has vertices $A(1,1,2)$, $B(3,2,4)$, $C(2,4,3)$ in $(x,y,z)$ coordinates with $z$ vertical. Its front view shows $(x,z)$ and its top view shows $(x,y)$. To find the true shape, construct a new projection plane containing the triangle. First find two edge vectors: $\\overrightarrow{AB}=(2,1,2)$ and $\\overrightarrow{AC}=(1,3,1)$. A normal to the triangle plane is $\\overrightarrow{AB}\\times\\overrightarrow{AC}=(-5,0,5)$, or simplified $(1,0,-1)$. The new projection plane should be perpendicular to $(1,0,-1)$ and contain the triangle. In practice, one constructs the auxiliary view by projecting onto a plane with normal $(1,0,-1)$, which means using orthonormal in-plane coordinates $((x+z)/\\sqrt2,y)$ in the auxiliary view.

The chosen triangle lies in $x-z=-1$. Its auxiliary coordinates are $(3/\\sqrt2,1)$, $(7/\\sqrt2,2)$ and $(5/\\sqrt2,4)$. Differences in those coordinates give squared side lengths nine, eleven and six, agreeing with the original three-dimensional vectors. The in-plane edge determinant has magnitude $5\\sqrt2$, so the triangle area is $5\\sqrt2/2$. Using $(x,y)$ alone would discard the different elevations and would not reproduce those lengths. The auxiliary coordinate origin may be translated without changing these measurements; its axes must remain orthonormal and parallel to the object plane.

## Point, line, and plane constructions

### Projection of a point onto a plane

Given a plane defined by three points and a point $P$ outside it, the projection of $P$ onto the plane is found by drawing a line through $P$ perpendicular to the plane and finding its intersection with the plane. In orthographic views, this requires constructing the perpendicular direction from the plane's traces.

### Intersection of two planes

Two distinct nonparallel planes intersect in a line. When their relevant traces have distinct finite intersections, construct this line as follows:

1. Find the intersection points of the $H$-traces; this gives one point on the intersection line.
2. Find the intersection points of the $V$-traces; this gives another point.
3. The line through these two points is the intersection line.

Parallel traces require a separate spatial check: they may indicate an intersection line parallel to the ground line, but they do not by themselves exclude two parallel planes or a coincident-trace degeneracy.

### Shortest distance from a point to a line

The shortest distance from a point $P$ to a line $L$ is the length of the perpendicular from $P$ to $L$. To construct it:

1. Construct a plane through $P$ perpendicular to $L$.
2. Find the intersection $Q$ of this plane with $L$.
3. The segment $PQ$ is the shortest distance.

In orthographic views, this requires an auxiliary view where $L$ appears as a point, so $PQ$ appears in true length.

### A point-to-line formula justifies the construction

For a line $A+tv$ with v nonzero, set

$$t_0=\\frac{(P-A)\\cdot v}{|v|^2},\\qquad Q=A+t_0v.$$

Then P minus Q is perpendicular to v. Every other line point is Q plus a multiple of v, so the same Pythagorean decomposition proves Q uniquely minimizes distance. Expanding gives the equivalent distance formula $|P-A|^2-((P-A)\\cdot v)^2/|v|^2$ for the squared distance. The vector identity for the cross product also makes this $|(P-A)\\times v|^2/|v|^2$. None of these formulas assumes that a projected right angle is the spatial right angle.

### Worked example 2: two parallel trace pairs can hide an intersection

Take planes $y+z=1$ and $y-z=0$. Their normals are independent, so the planes meet. Solving gives y and z both one half while x is free: an entire line parallel to the ground line. Yet their horizontal traces are the parallel lines y one and y zero, and their vertical traces are the parallel lines z one and z zero. The trace-intersection shortcut provides no two finite points in this case, although the spatial intersection certainly exists.

Contrast planes $y+z=1$ and $y+z=2$. Their normals are equal and their constants differ, so they are parallel and disjoint, again with parallel trace pairs. The two spatial cases must be distinguished by the plane data, not the trace pattern alone. Algebraically, nonparallel normals have a nonzero cross product giving the intersection direction. Parallel normals require checking constants to decide disjointness or coincidence.

### Worked example 3: reveal the perpendicular in a suitable view

Let P be $(1,2,3)$ and let the line through the origin have direction $(1,1,0)$. The foot parameter is three halves, giving Q equal to $(3/2,3/2,0)$. The residual vector is $(-1/2,1/2,3)$ and its length is $\\sqrt{38}/2$.

Choose the auxiliary plane $x+y=3$, perpendicular to the line and containing both P and Q. Every point of the given line projects onto Q in this view. Orthonormal plane directions are $(1,-1,0)/\\sqrt2$ and $(0,0,1)$. Relative to Q, the point P has coordinates minus one over the square root of two and three. Their Euclidean distance reproduces the spatial answer. The view works because the desired perpendicular segment lies in a plane parallel to the picture plane, not because a line collapsed somewhere in an unrelated drawing.

## Common errors

- **Confusing first-angle and third-angle layouts.** First-angle places the top view below the front view; third-angle places it above. Mixing conventions in the same drawing creates ambiguity.
- **Projecting along the wrong direction.** An orthographic projection must be perpendicular to the projection plane; oblique projections are a different system.
- **Assuming a projected angle is the true angle.** Planes parallel to the projection plane guarantee true measure for all their angles. An individual angle in an oblique plane may also agree, so measuring a projected angle still requires checking its spatial geometry.
- **Treating visibility as encoded by projection alone.** Hidden-line conventions require a specified object and viewing direction; the projected point locations do not supply face connectivity or occlusion by themselves.

## Practice exercises with solutions

### Exercise 1

<span id="conics-descriptive-ex-1"></span>
A line segment has top view length $6$ and front view vertical difference $8$. Find its true length.

<details><summary>Hint 1</summary>

The top projection retains the horizontal component of the spatial segment.

</details>

<details><summary>Hint 2</summary>

Its missing perpendicular component is the difference in elevation.

</details>

<details><summary>Full solution</summary>

**Solution.** The true length is the hypotenuse of a right triangle with legs $6$ and $8$:

$$L=\\sqrt{6^{2}+8^{2}}=\\sqrt{36+64}=\\sqrt{100}=10.$$

</details>

### Exercise 2

<span id="conics-descriptive-ex-2"></span>
A plane figure projects as a line in the front view and as a $4\\times3$ rectangle in the top view. Is its true area determined? What additional hypothesis would make it $12$?

<details><summary>Hint 1</summary>

An edge-on front view constrains a direction, not the slope of the whole plane relative to the top plane.

</details>

<details><summary>Hint 2</summary>

Compare the family of planes z equal to kx.

</details>

<details><summary>Full solution</summary>

**Solution.** No. A front view that collapses to a line does not imply that the figure is parallel to the horizontal picture plane. For example, a plane $z=kx$ can have a rectangular top projection of area $12$ while its true area is $12\\sqrt{1+k^2}$. If the figure is additionally known to lie in a horizontal plane, the top view is true shape and its area is $4\\cdot3=12$.

</details>

### Exercise 3

<span id="conics-descriptive-ex-3"></span>
Find the angle between the line from $(0,0,0)$ to $(1,1,1)$ and the horizontal plane $z=0$.

<details><summary>Hint 1</summary>

The vertical component is one while the full direction length is the square root of three.

</details>

<details><summary>Hint 2</summary>

Use the sine for the angle with the plane, rather than with its normal.

</details>

<details><summary>Full solution</summary>

**Solution.** The direction vector is $(1,1,1)$. The angle $\\theta$ with the horizontal plane satisfies $\\sin\\theta=\\frac{\\lvert 1\\rvert}{\\sqrt{1^{2}+1^{2}+1^{2}}}=\\frac{1}{\\sqrt{3}}$. So $\\theta=\\arcsin(1/\\sqrt{3})\\approx 35.26^{\\circ}$.

</details>

### Exercise 4

<span id="conics-descriptive-ex-4"></span>
Two planes have normals $(1,0,1)$ and $(0,1,1)$. Find the angle between them.

<details><summary>Hint 1</summary>

Use the dot product of the two normals.

</details>

<details><summary>Hint 2</summary>

For unoriented planes take the acute angle using the absolute cosine; here the dot product is positive.

</details>

<details><summary>Full solution</summary>

**Solution.** The angle $\\phi$ between the planes equals the angle between their normals:

$$\\cos\\phi=\\frac{(1,0,1)\\cdot(0,1,1)}{\\sqrt{2}\\cdot\\sqrt{2}}=\\frac{1}{2}.$$

So $\\phi=\\arccos(1/2)=\\pi/3=60^{\\circ}$.

</details>

### Exercise 5

<span id="conics-descriptive-ex-5"></span>
A point $P(2,3,4)$ is projected orthographically onto the plane $x+y+z=6$. Find the projection point $Q$.

<details><summary>Hint 1</summary>

Move along the stated plane normal and solve for the intersection parameter.

</details>

<details><summary>Hint 2</summary>

Substitute the proposed point into the plane equation and check the residual is normal.

</details>

<details><summary>Full solution</summary>

**Solution.** The normal to the plane is $(1,1,1)$. The line through $P$ perpendicular to the plane is $(2,3,4)+t(1,1,1)=(2+t,3+t,4+t)$. Intersection with $x+y+z=6$:

$$(2+t)+(3+t)+(4+t)=6\\implies 9+3t=6\\implies t=-1.$$

So $Q=(1,2,3)$. Verify: $1+2+3=6$, so $Q$ lies on the plane.

</details>

### Exercise 6

<span id="conics-descriptive-ex-6"></span>
In descriptive geometry, a line is given by its traces: it meets $H$ at $(3,4,0)$ and $V$ at $(3,0,2)$. Find its true length between these traces.

<details><summary>Hint 1</summary>

The x-coordinates cancel when forming the spatial difference vector.

</details>

<details><summary>Hint 2</summary>

Both depth and height differences still contribute to true length.

</details>

<details><summary>Full solution</summary>

**Solution.** The segment between $(3,4,0)$ and $(3,0,2)$ has length

$$L=\\sqrt{(3-3)^{2}+(0-4)^{2}+(2-0)^{2}}=\\sqrt{0+16+4}=\\sqrt{20}=2\\sqrt{5}\\approx 4.472.$$

</details>


### Exercise 7

<span id="conics-descriptive-ex-7"></span>

In the unfolded common-coordinate convention, a point has top coordinates $(2,-3)$ and front coordinates $(2,4)$. Reconstruct it. Could the same top point instead have front coordinates $(5,4)$ in that convention?

<details><summary>Hint 1</summary>

Top and front views share the spatial x-coordinate.

</details>

<details><summary>Hint 2</summary>

The top view supplies y and the front view supplies z; they cannot disagree about x.

</details>

<details><summary>Full solution</summary>

The reconstructed point is $(2,-3,4)$. Its two coordinate projections are exactly the prescribed pair. The alternative front point is incompatible because it requires the same spatial x-coordinate to equal both two and five. No spatial point produces that pair with the stated origins and axes. On a physical sheet one must first account for folding and layout offsets; these data explicitly use the common unfolded convention, so such changes cannot be introduced silently to repair an inconsistency.

</details>

### Exercise 8

<span id="conics-descriptive-ex-8"></span>

A plane region lies in $z=2x$ and has top-view area twelve. Find its true area, assuming the orthographic projection covers the top region once. Explain why that extra covering statement matters for a general parametrized patch.

<details><summary>Hint 1</summary>

A unit normal to the object plane is proportional to $(-2,0,1)$.

</details>

<details><summary>Hint 2</summary>

The absolute dot product with the vertical unit normal is one over the square root of five.

</details>

<details><summary>Full solution</summary>

The top projection scales area by $1/\\sqrt5$, so the true area is $12\\sqrt5$. Equivalently the parametrization $(x,y)\\mapsto(x,y,2x)$ has cross-product area factor the square root of five. Projection restricted to this particular plane is injective, so the once-covered condition follows for a region in that plane. For an arbitrary parametrized surface or repeatedly traced patch, projected areas can overlap; integrating a local area factor then counts multiplicity unless overlap is controlled. The plane hypothesis is doing real work in this exact reconstruction.

</details>

### Exercise 9

<span id="conics-descriptive-ex-9"></span>

Project a segment with direction vector $(1,2,2)$ onto the horizontal plane. Find the ratio of projected to true length and its angle with the plane. Decide whether its top view can show its true length.

<details><summary>Hint 1</summary>

The projected direction is $(1,2,0)$ and the true direction length is three.

</details>

<details><summary>Hint 2</summary>

The vertical component determines the sine of the angle with the plane.

</details>

<details><summary>Full solution</summary>

The projected length ratio is $\\sqrt5/3$, while the angle with the horizontal plane is $\\arcsin(2/3)$. These agree with the cosine and sine relation because the squared horizontal and vertical components sum to nine. Since the vertical component is nonzero, the segment is not parallel to the picture plane and its top projection strictly shortens it. Any segment with the same direction has the same ratio, regardless of where its endpoints are translated. A true-length auxiliary view would use a plane parallel to that direction.

</details>

### Exercise 10

<span id="conics-descriptive-ex-10"></span>

Prove that orthogonal projection onto a plane sends an entire spatial line to one point exactly when its direction is normal to that plane. What happens to distinct parallel lines with a nonnormal direction?

<details><summary>Hint 1</summary>

Project the parametrization A plus t times v using the linear part of the point-projection formula.

</details>

<details><summary>Hint 2</summary>

The projected direction is v minus its component along the unit normal.

</details>

<details><summary>Full solution</summary>

The projected line has parametrization given by the projected base point plus t times the projected direction. It is constant exactly when that direction is zero, which says v equals its own normal component and hence is parallel to the plane normal. Otherwise it is a full line. Parallel original lines have the same nonzero projected direction, so their images are parallel or coincident; distinct spatial lines need not remain distinct after projection. For example, two horizontal lines one above the other can have the same top image. Thus projection preserves the direction relation with explicit collapse/coincidence possibilities, rather than being an invertible map of all space.

</details>

## Looking backward and forward

This chapter developed the orthographic projection system and showed how auxiliary views recover true lengths, angles, and shapes from foreshortened projections. The constructions rely on the same perpendicularity and incidence relations that govern Euclidean space.

The next chapter, **Axonometric Projection**, generalizes orthographic projection to a single pictorial view that shows all three dimensions simultaneously. Unlike descriptive geometry's multi-view system, axonometric projection trades some metric accuracy for immediate spatial comprehension.

## Source and scope

The original Atlas descriptive-geometry reading and its six exercise statements/solutions are retained, with the original triangle-example anchor preserved explicitly. New proofs develop projection, closest points, area factors and matched-view reconstruction, with additional worked trace/auxiliary cases and four supported exercises. Euclidean dot products, cross products, finite-dimensional rank and Pythagoras are the mathematical inputs. First-angle/third-angle placement is a declared drawing convention; no current engineering-standard compliance or empirical reconstruction claim is inferred.
`;export{e as default};