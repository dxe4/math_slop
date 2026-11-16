var e=`---
id: deep-dive-geometry-first-encounter
title: "Geometry Before Formulas: Shape, Motion, and Curved Worlds"
license: CC BY-SA 4.0
---

# Geometry Before Formulas: Shape, Motion, and Curved Worlds

Geometry asks what stays true when we measure, move, enlarge, slice, or bend a world. You can begin with paper, string, a box, a round fruit, and a pencil. No algebra or prior geometry is assumed. Measurements in an experiment are approximate; statements proved from definitions are exact inside the chosen mathematical model.

## 1. Describe before calculating

A **point** marks a location without size. A **line segment** is the straight path between two endpoints. A **ray** starts at one point and continues in one direction. Two rays with a common endpoint form an **angle**. Angle measures turning, not arm length: extending a ray does not change the turn.

Length, area, and volume answer different questions:

- length measures a path and uses units such as centimetres;
- area measures a covering and uses square units;
- volume measures filling and uses cubic units.

A rectangle 4 cm by 3 cm has perimeter $14 cm$ and area $12 cm^{2}$. A box 4 cm by 3 cm by 2 cm has volume $24 cm^{3}$. Units catch errors: adding an area to a length has no geometric meaning.

### Try it

Make two different rectangles from twelve equal edge units. They have the same perimeter but need not have the same area. A picture can suggest a pattern; a table of dimensions makes the comparison inspectable.

## 2. Rigid motions explain sameness

Slide a paper triangle without turning it. Rotate it. Flip it over a crease. These are **translations**, **rotations**, and **reflections**. Each preserves all distances and angles, so each is a rigid motion or **isometry**.

Two shapes are **congruent** when a rigid motion can match one exactly to the other. Congruence is stronger than “looks similar.” A triangle with sides 3, 4, 5 is not congruent to one with sides 6, 8, 10, although their shapes agree.

A **symmetry** is a rigid motion that carries an object onto itself. A non-square rectangle has half-turn symmetry and two mirror lines. A square has four mirror lines and four rotational positions, including the unchanged position. Counting the unchanged motion matters: symmetries form a system that can be composed.

### A reliable test

Trace a shape onto transparent paper. If sliding, turning, or flipping the tracing matches a second shape, the two are congruent in the idealized plane. Physical thickness and drawing error affect the test, not the definition.

## 3. Similarity means one scale factor


**Worked example.**
Shapes are **similar** when corresponding angles agree and every corresponding length is multiplied by one positive scale factor.

A 3–4–5 triangle enlarged by factor 2 has sides 6–8–10. Its perimeter doubles, its area multiplies by $2^{2}=4$, and a solid enlarged by factor 2 would have volume multiplied by $2^{3}=8$.

Adding the same number to every length does not preserve shape. Sides 6–7–8 are not a scaled copy of 3–4–5 because $6/3$, $7/4$, and $8/5$ differ.

Similarity lets us measure inaccessible objects. If a 1 m stick casts a 0.8 m shadow while a tree casts a 6.4 m shadow at the same time on level ground, the similar triangles give

$$tree height / 6.4 = 1 / 0.8$$

so the modeled height is 8 m. The result depends on parallel sunlight, vertical objects, level ground, simultaneous measurements, and a readable shadow edge.

## 4. Coordinates turn shape into data

Place a square grid on the plane. A point has coordinates $(x,y)$. Moving from $A=(1,2)$ to $B=(5,5)$ changes $x$ by 4 and $y$ by 3. Those changes form a right triangle, so the direct distance is

$$\\sqrt{4^{2}+3^{2}}=5$$

Coordinates do not replace geometry; they give it an auditable language. A horizontal line keeps $y$ fixed. A vertical line keeps $x$ fixed. The midpoint of $(x_{1},y_{1})$ and $(x_{2},y_{2})$ is

$$((x_{1}+x_{2})/2,(y_{1}+y_{2})/2)$$

The diagonal distance formula follows from the Pythagorean theorem. It is not an unrelated rule to memorize.

## 5. Circles and conics are distance promises

A **circle** is the set of points the same distance $r$ from a center. String tied to one fixed point physically approximates this promise. With center $(0,0)$, the coordinate rule is

$$x^{2}+y^{2}=r^{2}$$

Now fix a point called a **focus** and a line called a **directrix**. Compare each point’s distance to both:

$$distance to focus = e \\times distance to directrix$$

The positive number $e$ is **eccentricity**.

- $0<e<1$ produces an ellipse;
- $e=1$ produces a parabola;
- $e>1$ produces a hyperbola.

This single definition joins three curves that otherwise look unrelated. Squaring a distance equation can help calculate, but the original unsquared distances should be checked so that an algebraic manipulation does not admit an unintended point.

## 6. Trigonometry records shape-independent ratios

All right triangles sharing one acute angle are similar. Their size changes, but three ratios do not:

$$\\sin \\theta = opposite/hypotenuse$$

$$\\cos \\theta = adjacent/hypotenuse$$

$$\\tan \\theta = opposite/adjacent$$

“Opposite” and “adjacent” depend on which acute angle is chosen. The hypotenuse is always opposite the right angle.

On a circle of radius 1, the point reached after turning angle $\\theta$ has coordinates $(\\cos \\theta,\\sin \\theta)$. This explains why sine and cosine also describe rotation and waves. The identity

$$\\sin^{2}\\theta+\\cos^{2}\\theta=1$$

is simply the circle equation for that point.

## 7. Solids reveal hidden shapes

A solid has more information than its outside surface. Slice a cube parallel to a face and the cross-section is a square. Slice it near a corner and a triangle can appear. Slice a circular cone at different angles and obtain circles, ellipses, parabolas, or hyperbolas.

For a prism, volume equals base area times perpendicular height. A pyramid with the same base and height has one third that volume. This factor is a theorem about filling or cross-sections, not something established by a single drawing.

A convex polyhedron made from flat polygonal faces has vertices $V$, edges $E$, and faces $F$. Many familiar examples satisfy

$$V-E+F=2$$

For a cube, $8-12+6=2$. The hypotheses matter: holes or nonconvex identifications can change the result.

## 8. A sphere is not a flat plane

On a sphere, a shortest route follows part of a **great circle**, whose plane passes through the sphere’s center. Lines of longitude are great circles; most latitude circles are not.

Start at the North Pole, travel to the equator, turn 90 degrees along the equator, then return to the pole along another longitude. The triangle has two right angles at the equator and another right angle at the pole: its sum is 270 degrees, not 180.

No contradiction occurred. “Every triangle sums to 180 degrees” is a Euclidean-plane theorem. Spherical geometry uses different lines and different parallel behavior. In hyperbolic geometry, triangles have angle sum less than 180 degrees. Geometry is a study of consequences from stated assumptions, not a collection of picture-based certainties.

## Model boundaries

A diagram can reveal a conjecture, but scale, perspective, and drawing error can
hide a failed hypothesis. Coordinate calculations inherit the chosen metric and
units. Congruence claims require rigid motion or a theorem, while similarity
claims require one common scale factor. Euler's polyhedron formula above was
stated for convex polyhedra; applying it to a surface with a handle changes the
topological type. Spherical and hyperbolic conclusions use their own geodesics
and cannot be imported into a Euclidean proof without changing the axioms.

## 9. Worked practice

### 1. Scale and area

<a id="deep-dive-geometry-first-encounter-ex-1"></a>

**Exercise 1.**

A similar copy has scale factor 3. How do perimeter and area change?


<details>
<summary>Hint 1</summary>

A similarity scales every side length by the same factor.
</details>
<details>
<summary>Hint 2</summary>

Perimeter adds lengths, while area multiplies two lengths; compare one factor of three with two.
</details>
<details>
<summary>Solution</summary>

Every length and therefore perimeter multiplies by 3. Area multiplies by $3^{2}=9$.

</details>

### 2. Coordinate distance

<a id="deep-dive-geometry-first-encounter-ex-2"></a>

**Exercise 2.**

Find the distance from $(-1,2)$ to $(5,10)$.


<details>
<summary>Hint 1</summary>

Find the horizontal and vertical changes between the coordinate points.
</details>
<details>
<summary>Hint 2</summary>

Use those changes as the legs of a right triangle and apply the distance formula.
</details>
<details>
<summary>Solution</summary>

Coordinate changes are 6 and 8, so distance is $\\sqrt{6^{2}+8^{2}}=\\sqrt{100}=10$.

</details>

### 3. Circle check

Does $(3,4)$ lie on the circle $x^{2}+y^{2}=25$?

**Answer.** Yes: $3^{2}+4^{2}=9+16=25$. Its distance from the origin is 5.

### 4. Right-triangle ratio

Relative to an acute angle, opposite side is 5 and adjacent side is 12. Find tangent.

**Answer.** $\\tan \\theta=5/12$. The hypotenuse would be 13, so sine is $5/13$ and cosine $12/13$.

### 5. Euler audit

A tetrahedron has 4 vertices, 6 edges, and 4 faces. Check the convex-polyhedron formula.

**Answer.** $V-E+F=4-6+4=2$.

### 6. Curved triangle

Which step fails if someone applies the Euclidean triangle-sum theorem to a spherical triangle?

**Answer.** The theorem assumes Euclidean lines in a flat plane, including Euclidean parallel behavior. Great-circle geodesics on a sphere do not satisfy those assumptions.

## Continue the atlas

Use [Paper, Shapes, and Shadows](#/item/course-paper-shadow-geometry) or [Fold, Reflect, Prove](#/item/course-origami-construction-geometry) for hands-on starts. The [standard geometry and trigonometry course](#/item/course-euclidean-trigonometry-standard) develops the full computational spine. The [Conics & Curved Geometry Observatory](#/item/visual-lab-conics-curved-geometry) supplies exact tables alongside its drawings. Proof-ready learners can continue to the [geometry proof reference](#/item/book-geometry-proof-reference), while [Spherical and Hyperbolic Geometry](#/item/deep-dive-spherical-hyperbolic-geometry) explains precisely how curved worlds differ.
`;export{e as default};