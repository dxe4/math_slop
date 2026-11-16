var e=`---
id: course-euclidean-trigonometry-standard
title: "Geometry and Trigonometry: Proof, Coordinates, and Measurement"
level: secondary
estimated_minutes: 900
license: CC BY-SA 4.0
---

# Geometry and Trigonometry: Proof, Coordinates, and Measurement

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-euclidean-trigonometry-standard/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This is a standard course from Euclidean constructions through coordinates, conics, trigonometry, solids, and the first curved geometries. It assumes basic algebra, fractions, and measurement. Each module separates exact deductions in an ideal model from approximate physical measurements or floating-point computations.

## Entry diagnostic and 15-hour route

Before Module 1:

1. Solve $3x-7=11$.
2. Find the distance and midpoint between $(1,-1)$ and $(5,2)$.
3. Convert $150^{\\circ}$ to radians.
4. Decide whether five accurate drawings can prove that the diagonals of
   every quadrilateral are perpendicular.
5. From $P\\Rightarrow Q$, state the contrapositive.

The answers are $x=6$; distance $5$ and midpoint $(3,1/2)$;
$5\\pi/6$; no, because a non-rhombic rectangle is already a counterexample;
and $\\neg Q\\Rightarrow\\neg P$. Repair algebra and ratio skills before
continuing if Questions 1–3 are difficult. Review proof foundations if
Questions 4–5 are difficult.

The advertised 900 minutes include reading, construction, and assessed work,
not merely this overview. Use this route:

| Stage | Modules | Extended work | Evidence |
| --- | --- | --- | --- |
| 1. Proof and motion | 1–2 | [Geometric arguments](#/item/book-geometry-proof-reference?chapter=the-layers-of-a-geometric-argument), [axiomatic systems](#/item/book-geometry-proof-reference?chapter=axiomatic-systems), and one origami construction | Two-column proof and rigid-motion verification |
| 2. Scale and coordinates | 3–4 | [Ordered geometry](#/item/book-geometry-proof-reference?chapter=ordered-geometry), [projection and distance](#/item/book-analytic-computational-geometry?chapter=projection-distance-and-closest-points) | Indirect measurement report and coordinate check |
| 3. Circles, conics, and triangles | 5–6 | [Circles and conics](#/item/book-analytic-computational-geometry?chapter=circles-and-conics-as-quadratic-forms), [focus–directrix computation](#/item/book-analytic-computational-geometry?chapter=conic-focus-directrix-computation), and the conics lab | Locus proof plus a solved ambiguous triangle |
| 4. Space and measurement | 7–8 | [Three-dimensional predicates](#/item/book-analytic-computational-geometry?chapter=three-dimensional-predicates) and the measurement recipe | Cross-section model with uncertainty audit |
| 5. Curvature and synthesis | 9–10 | [Spherical and hyperbolic geometry](#/item/deep-dive-spherical-hyperbolic-geometry) and the capstone | Comparison of one Euclidean theorem with a curved counterpart |

Keep a proof portfolio. For every claim, label the givens, definitions,
postulates, previously proved results, and conclusion. For every numerical
answer, state units, angle mode, and rounding point.

## Module 1: definitions, diagrams, and proof

A diagram represents a claim but does not supply every fact that looks true in the picture. Mark equal lengths, right angles, parallel lines, and given incidences explicitly.

In Euclidean geometry we work with points, lines, distances, angles, and assumptions including a form of the parallel postulate. Definitions fix meaning; postulates establish allowed starting relations; theorems follow by deduction. A **counterexample** refutes a universal claim, while many confirming drawings do not prove it.

Two angles are **vertical** when opposite lines form them. They are equal: each forms a linear pair with the same adjacent angle, and straight angles have the same measure. If parallel lines are cut by a transversal, alternate interior angles are equal. Conversely, an appropriate equal-angle condition can prove lines parallel.

### Worked proof: triangle angle sum

For triangle $ABC$, draw through $C$ the line parallel to $AB$. The angles at $A$ and $B$ reappear at $C$ as alternate interior angles. Together with the original angle at $C$, they form a straight angle. Thus

$A+B+C=180^{\\circ}$.

This proof uses the Euclidean parallel postulate. It is therefore a diagnostic for non-Euclidean geometry, not an assumption-free truth about every possible surface.

## Module 2: congruence and rigid motion

A translation, rotation, or reflection preserves distance and angle. Compositions of these motions are isometries. Two figures are congruent precisely when an isometry can match them in the Euclidean plane.

Triangle congruence criteria compress information:

- **SSS:** three corresponding sides;
- **SAS:** two sides and their included angle;
- **ASA/AAS:** two angles and a side;
- **RHS/HL:** hypotenuse and one leg for right triangles.

SSA is generally ambiguous. With two sides and a nonincluded angle, zero, one, or two triangles may satisfy the data.

### Worked proof: base angles of an isosceles triangle

Suppose $AB=AC$. Compare triangle $ABC$ with triangle $ACB$: $AB=AC$, $AC=AB$, and $BC=CB$. SSS gives congruence, so corresponding base angles at $B$ and $C$ are equal.

This apparently playful reversal is a proof: it identifies two ordered triangles and an exact congruence criterion.

### Symmetry as a system

The symmetries of an equilateral triangle are three rotations and three reflections. Composing two symmetries gives another symmetry; an identity motion exists; every symmetry has an inverse. This is the first geometric example of a group. A tessellation asks which copies cover the plane without gaps or overlaps; angle sums around a vertex provide a necessary local check but may not prove a global tiling.

## Module 3: similarity and the Pythagorean theorem

Similar triangles have equal corresponding angles and proportional corresponding sides. AA establishes triangle similarity: once two angles agree, the third agrees by the Euclidean angle-sum theorem.

If scale factor is $k$, lengths multiply by $k$, areas by $k^{2}$, and volumes of similar solids by $k^{3}$. These powers follow by multiplying one, two, or three independent length dimensions.

### Pythagoras from similarity

In right triangle $ABC$, let altitude from the right-angle vertex $C$ meet hypotenuse $AB$ at $D$. The two small triangles are similar to the original. If $AB=c$, $AC=b$, $BC=a$, $AD=p$, and $DB=q$, similarity gives

$b^{2}=cp$ and $a^{2}=cq$.

Adding,

$a^{2}+b^{2}=c(p+q)=c^{2}$.

The converse also holds in Euclidean geometry: if side lengths satisfy $a^{2}+b^{2}=c^{2}$ with $c$ longest, the included angle is right.

### Application: indirect distance

If two landmarks are inaccessible, construct a smaller similar triangle from a measurable baseline and sighting angles. A scale factor then transfers the missing length. State whether sights are coplanar, the baseline endpoints are known, and angles were measured from the intended direction.

## Module 4: coordinate and vector geometry

For points $A=(x_1,y_1)$ and $B=(x_2,y_2)$, define displacement

$B-A=(x_2-x_1,y_2-y_1)$.

Then

$$
\\operatorname{dist}(A,B)
=\\sqrt{(x_2-x_1)^{2}+(y_2-y_1)^{2}}
$$

and

$$
\\operatorname{mid}(A,B)
=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right).
$$

A line through point $P$ with direction vector $v\\ne 0$ is $P+tv$. A line with nonzero normal $n$ is the set of $X$ satisfying $n\\cdot (X-P)=0$. Two nonzero vectors are perpendicular exactly when their dot product is zero.

### Worked projection

Project vector $w$ onto nonzero $v$:

$$\\operatorname{proj}_v(w)=\\frac{w\\cdot v}{v\\cdot v}\\,v.$$

For $w=(3,4)$ and $v=(1,1)$, the coefficient is $7/2$, so projection is $(3.5,3.5)$. The residual $(-0.5,0.5)$ has dot product zero with $v$.

Rigid motions have coordinate formulas. Translation adds a fixed vector. Rotation by angle $\\theta$ about the origin uses

$$
\\begin{pmatrix}
\\cos\\theta&-\\sin\\theta\\\\
\\sin\\theta&\\cos\\theta
\\end{pmatrix}.
$$

Reflection in the x-axis maps $(x,y)$ to $(x,-y)$. Each has an invariant—distance—and each formula should be tested on fixed or easily predicted points.

## Module 5: circles and conic sections

A circle with center $(h,k)$ and radius $r>0$ satisfies

$(x-h)^{2}+(y-k)^{2}=r^{2}$.

A radius perpendicular to a chord bisects it. A tangent is perpendicular to the radius at the contact point. An inscribed angle intercepting a fixed arc has half the corresponding central angle.

### Power of a point

For a point $P$ and a circle, a secant meeting the circle at $A,B$ satisfies a constant signed product $PA\\cdot PB$; two secants through $P$ give equal products. In a tangent-secant configuration this becomes

$PT^{2}=PA\\cdot PB$.

Similarity of triangles supplies the proof. Segment order and signed or external lengths must be handled consistently.

### One focus/directrix definition

Fix focus $F$ and directrix line $\\ell$. A point $P$ belongs to a conic when

$d(P,F)=e\\,d(P,\\ell)$, with $e>0$.

Eccentricity $e<1$, $e=1$, or $e>1$ produces ellipse, parabola, or hyperbola. With $F=(0,0)$ and $\\ell\\colon x=1$, squaring yields

$x^{2}+y^{2}=e^{2}(x-1)^{2}$.

The unsquared definition must still be checked. In the [Conics & Curved Geometry Observatory](#/item/visual-lab-conics-curved-geometry), every displayed row reports both distances and their residual.

### Quadratic recognition

A general second-degree equation

$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0$

can represent a nondegenerate ellipse-like, parabola-like, or hyperbola-like conic according to $B^{2}-4AC<0$, $=0$, or $>0$, after rotations and translations—provided the real locus is nondegenerate. The discriminant alone does not distinguish an actual ellipse from an empty or point-degenerate equation.

## Module 6: trigonometry from triangles and circles

In a right triangle, sine, cosine, and tangent are side ratios. On the unit circle they extend to every real angle:

$(\\cos\\theta,\\sin\\theta)$.

Angles measured in radians are arc length divided by radius. A full turn is $2\\pi$ radians. Radians make calculus and arc formulas natural; a calculator silently in degree mode can invalidate an otherwise correct computation.

The circle equation gives

$$\\sin^{2}\\theta+\\cos^{2}\\theta=1.$$

Angle addition follows by composing rotations:

$$
\\cos(\\alpha+\\beta)
=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta,
$$

$$
\\sin(\\alpha+\\beta)
=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta.
$$

### Solve general triangles

For side $a$ opposite angle $A$, and similarly for $b,c$, the Euclidean law of sines is

$a/\\sin A=b/\\sin B=c/\\sin C=2R$,

where $R$ is circumradius. The law of cosines is

$c^{2}=a^{2}+b^{2}-2ab \\cos C$.

It reduces to Pythagoras when $C=90^{\\circ}$. With SSA data, $\\sin B=b \\sin A/a$ may yield two angles $B$ and $180^{\\circ}-B$; check the remaining angle and side ordering rather than accepting the first inverse-sine output.

### Worked triangle

If $a=5$, $b=7$, and included angle $C=60^{\\circ}$, then

$c^{2}=25+49-70(1/2)=39$, so $c=\\sqrt{39}$.

Its area is
$(1/2)ab\\sin C=35\\sqrt{3}/4$.

## Module 7: solid geometry and cross-sections

Prisms and cylinders have volume $base area \\times perpendicular height$. Pyramids and cones have one third that value. A sphere of radius $r$ has surface area $4\\pi r^{2}$ and volume $(4/3)\\pi r^{3}$.

These formulas require perpendicular height, not a slanted edge. Dimensional scaling audits them: area must scale like $r^{2}$, volume like $r^{3}$.

A plane slice can simplify a solid problem. A plane through a sphere’s center gives a great circle. A plane cutting a cube may produce a triangle, quadrilateral, pentagon, or hexagon depending on which faces it meets. Each cross-section vertex lies on a solid edge; unsupported points floating in a face signal a bad construction.

For a convex polyhedron,

$V-E+F=2$.

This Euler relation is topological: bending faces without changing incidence preserves it. A torus-like polyhedral surface has a different Euler characteristic, so “any polyhedron” is too broad.

### Cavalieri’s principle

If two solids between parallel planes have equal cross-sectional areas at every height, they have equal volumes. This turns a three-dimensional volume comparison into a family of two-dimensional area comparisons. Continuity and measurability assumptions sit behind a rigorous integral treatment.

## Module 8: construction and measurement

Ideal straightedge-and-compass constructions allow drawing the line through two known points, a circle with known center and radius, and intersections. Each physical tool introduces width, calibration, alignment, and reading error.

Classic constructions—perpendicular bisector, angle bisector, parallel through a point—must be justified by congruent triangles or locus definitions. The [origami construction course](#/item/course-origami-construction-geometry) supplies reflection-based alternatives.

For a measured function $q=q(x_1,\\ldots ,x_n)$, small independent input errors may be approximated by derivative sensitivities. A conservative first-order absolute bound is

$|\\Delta q| ≲ \\sum _i |\\partial q/\\partial x_i| |\\Delta x_i|$.

This is an approximation, not an exact interval unless remainder terms are controlled. The [geometric measurement recipe](#/item/recipe-geometric-measurement-construction) builds a complete field workflow.

## Module 9: spherical and hyperbolic geometry

On a sphere of radius $R$, geodesics are great-circle arcs. For unit direction vectors $u,v$, the shorter arc length is

$$R\\arccos(u\\cdot v).$$

A spherical triangle has angle sum greater than $\\pi$. On the unit sphere, its area is the spherical excess

$A+B+C-\\pi$.

In the hyperbolic plane of curvature $-1$, triangles have sum less than $\\pi$, and area equals the defect

$\\pi -(A+B+C)$.

These are normalized curvature statements. For curvature magnitude $1/R^{2}$, the area factor changes by $R^{2}$.

The Poincaré disk draws an infinite hyperbolic plane inside a Euclidean circle. Its geodesics are diameters or circular arcs orthogonal to the boundary. The model preserves angles but distorts lengths, which diverge toward the boundary. Multiple hyperbolic parallels pass through a point outside a given line, unlike Euclidean geometry; on a sphere, distinct great circles always meet.

Use [Spherical and Hyperbolic Geometry](#/item/deep-dive-spherical-hyperbolic-geometry) for proofs, laws of cosines, navigation, and model boundaries.

## Module 10: assessment with worked answers

### 1. Congruence data

Why does SSA not generally prove congruence?

**Answer.** A fixed side opposite a given angle can intersect the other side’s ray in two positions, creating two noncongruent triangles. Extra conditions, such as a right angle with hypotenuse-leg data, remove the ambiguity.

### 2. Similarity scale

A photograph is enlarged by factor $1.5$. Original area is
$80\\,\\mathrm{cm}^{2}$. Find new area.

**Answer.** Area factor is $1.5^{2}=2.25$, so new area is
$180\\,\\mathrm{cm}^{2}$.

### 3. Line intersection

Intersect $X=(1,0)+t(2,1)$ with the y-axis.

**Answer.** The x-coordinate is $1+2t=0$, so $t=-1/2$; the point is $(0,-1/2)$.

### 4. Conic classification

Classify $9x^{2}+4y^{2}=36$ and give semiaxes.

**Answer.** Divide by 36: $x^{2}/4+y^{2}/9=1$, an ellipse with semiaxes 2 in x and 3 in y.

### 5. Tangent length

From external point $P$, a secant has external part 3 and whole length 12. Find tangent length.

**Answer.** $PT^{2}=3\\cdot 12=36$, so the nonnegative length is 6.

### 6. Unit-circle values

If $\\cos\\theta=-3/5$ and $\\theta$ lies in quadrant II, find sine and tangent.

**Answer.** Sine is positive and
$\\sin^{2}\\theta=1-9/25=16/25$, so $\\sin\\theta=4/5$ and
$\\tan\\theta=-4/3$.

### 7. Ambiguous triangle

Given $A=30^{\\circ}$, $a=5$, $b=8$, find possible $B$ values to one decimal degree.

**Answer.** $\\sin B=b \\sin A/a=0.8$. Thus $B\\approx 53.1^{\\circ}$ or $126.9^{\\circ}$; both leave a positive third angle ($96.9^{\\circ}$ or $23.1^{\\circ}$), so two triangles exist.

### 8. Solid scaling

Double every dimension of a cone. What happens to surface area and volume?

**Answer.** Surface area multiplies by 4; volume by 8.

### 9. Spherical coordinates

On Earth modeled as radius $R$, two equatorial points differ by longitude $60^{\\circ}$. Find shorter surface distance.

**Answer.** Central angle is $\\pi /3$, so distance is $R\\pi /3$.

### 10. Hypothesis audit

Why does the Euclidean law of cosines not automatically hold for sides measured along a sphere?

**Answer.** Its proof uses Euclidean plane geometry and straight-line triangles. Great-circle sides require the spherical law of cosines; local Euclidean approximation is only approximate for small triangles.

## Portfolio checkpoints and feedback

After Module 2, prove a triangle congruence result twice: once with a named
criterion and once by a rigid motion. After Module 4, derive a line or circle
claim synthetically and verify it in coordinates. After Module 6, solve one
SSA case with zero solutions, one with one solution, and one with two. After
Module 8, repeat one measurement at three scales and decide whether absolute
or relative error is more stable.

Use the assessment to locate repairs:

- Questions 1–2 and 5 diagnose congruence, similarity, and circle theorems.
- Questions 3–4 diagnose coordinate equations and algebraic interpretation.
- Questions 6–7 diagnose unit-circle signs, angle mode, and inverse
  trigonometry.
- Questions 8–10 diagnose dimension, curvature, and theorem hypotheses.

A correct diagram with missing reasons is unfinished. A symbolic derivation
with no domain or units is also unfinished.

## Capstone

Choose a structure—a roof truss, a room, a package, a mapped route, or an entirely specified diagram. Produce a scale drawing and coordinate model; prove one congruence, similarity, or circle claim; solve one length or angle with trigonometry; include a solid or cross-section calculation; reproduce one result numerically; and state measurement, curvature, and rounding assumptions. Finish by showing how one conclusion changes in spherical or hyperbolic geometry.

Submit the construction record, proof portfolio, calculations, and a one-page
error audit. Score the work out of 24: 6 points for valid proofs, 5 for the
coordinate and trigonometric model, 4 for the solid or cross-section, 4 for
measurement assumptions and units, 3 for the curved comparison, and 2 for a
clear diagram with a complete text description. Any conclusion that depends
on an unstated special feature of the drawing must be revised before the
project is complete.

## Required selected geometry core work

The original 900-minute/15-hour declaration describes the earlier outline. It is an authored planning estimate, not the workload of the full required roster and portfolios below; full selected study time is unknown.

This route joins the preceding secondary course to selected undergraduate work
in synthetic proof, coordinates, vectors and transformations. The required
work is the roster below, its four checkpoints and the one specified capstone
family. It does not assign every chapter of the linked working books. Their
edition labels remain in force; completing this route does not release those
books or establish mastery. The other open capstone choices above remain
available additional projects, without complete models being claimed here.

### Preparation, required questions and complete feedback

Start with all five questions and answers in **Entry diagnostic and 15-hour
route** above. Repair algebra, fractions, ratios, units, coordinates and proof
language as directed there. The diagnostic does not establish readiness for
the undergraduate computational chapters. Before those chapters, also learn
vector subtraction, dot products, nonzero directions and normals, matrix
multiplication and signed two-dimensional determinants. The named chapters
below explain the geometric uses. Keep exact rational inputs distinct from
measurements and rounded arithmetic.

Use this order. Preparation readings are not extra, unnamed assignments.

1. Read Modules 1–2 and the opening overview of [Geometry by Definition and
   Proof](#/item/book-geometry-proof-reference), sections 1–4. Read its
   [layers of an argument](#/item/book-geometry-proof-reference?chapter=the-layers-of-a-geometric-argument)
   and [axiomatic systems](#/item/book-geometry-proof-reference?chapter=axiomatic-systems)
   chapters. Carry out the point-to-point crease in sections 1–2 of
   [Fold, Reflect, Prove](#/item/course-origami-construction-geometry): state
   distinct endpoints, the reflection definition and both directions of the
   perpendicular-bisector locus. Then do checkpoint GEO-CP1.
2. Read Modules 3–4, proof-reference overview section 5 and
   [Ordered Geometry](#/item/book-geometry-proof-reference?chapter=ordered-geometry).
   In [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry),
   read **Represent Geometric Objects with Invariants**, **Orientation Is the
   Central Planar Predicate**, **Segment Intersection Needs Boundary Cases**
   and **Projection, Distance, and Closest Points**. These are the preparations
   for GEO-PROJ and synthesis Exercises 1–4. State closed-segment membership,
   endpoint policy, nonzero denominators, orientation convention and the
   zero-length-segment branch. The projection minimum can also be proved by
   completing the square in the squared distance; calculus is not required
   for this selected work. Do GEO-PROJ and GEO-CP2.
3. Read Modules 5–6, proof-reference overview sections 6–8 and
   [Conics, Solids, and Projection](#/item/book-conics-solids-projections)
   opening overview sections 1–6. Read computational chapters **Circles and
   Conics as Quadratic Forms** and **Conic Focus–Directrix Computation** before
   synthesis Exercises 6–7. Review completing squares and real symmetric
   quadratic matrices; eigenvalue classification is a stated preparation,
   not something the entry diagnostic tested. Keep the unsquared distance
   definition, nondegeneracy and eccentricity range. Do GEO-CP3.
4. Read Modules 7–8, conics/solids overview sections 7–10, computational
   **Three-Dimensional Predicates**, and all twelve steps of the
   [measurement recipe](#/item/recipe-geometric-measurement-construction).
   Use perpendicular height, explicit face/edge incidence, line–plane
   denominator branches and a declared camera chart. Do GEO-SPACE and GEO-CP4.
5. Before GEO-TRANS and synthesis Exercise 5, read **Transformations and
   Homogeneous Coordinates**. Declare column vectors and right-to-left
   composition. Before synthesis Exercise 9, read **Convex Hull as an
   Orientation Algorithm**, including duplicate/collinear cases and the
   elementary scan invariant and operation-count argument. No implementation
   is required for the fixed finite questions.
6. Read Module 9, proof-reference overview sections 9–10 and **Curved Metric
   Computation**. Read sections 1–4 and 6–10 of
   [Spherical and Hyperbolic Geometry](#/item/deep-dive-spherical-hyperbolic-geometry).
   Use radians, normalized nonzero spherical directions, the open disk
   domain and curvature scaling before synthesis Exercise 10. Hyperbolic
   distance uses logarithms/inverse hyperbolic cosine; repair those operations
   before evaluating that question. Complete GEO-PROOF, GEO-ASSESS and GEO-SYN,
   then the fixed capstone family.

The following **42 existing questions** are all required. Each indicated
Answer or Solution is complete public feedback for its own printed question;
do not substitute an answer from a different chapter with the same number.

| Local group | Exact questions | Native question and complete-key address |
| --- | --- | --- |
| GEO-ASSESS | 1–10 | This course, Module 10: **Congruence data** through **Hypothesis audit**, each immediately followed by its Answer |
| GEO-PROOF | 1–6 | [Geometry by Definition and Proof](#/item/book-geometry-proof-reference), opening overview **11. Worked proof audits**: false converse; perpendicular-bisector converse; reflection composition; circle power; conic hypothesis; parallel audit; each Solution is adjacent |
| GEO-SPACE | 1–6 | [Conics, Solids, and Projection](#/item/book-conics-solids-projections), opening overview **12. Worked exercises**: ellipse focal data; parabola focus; hyperbola check; frustum; perspective; degenerate section; each Answer is adjacent |
| GEO-PROJ | 1–5 | [Projection, Distance, and Closest Points](#/item/book-analytic-computational-geometry?chapter=projection-distance-and-closest-points), **Practice exercises with solutions**, Exercises 1–5 and their adjacent Solutions |
| GEO-TRANS | 1–5 | [Transformations and Homogeneous Coordinates](#/item/book-analytic-computational-geometry?chapter=transformations-and-homogeneous-coordinates), **Practice exercises with solutions**, Exercises 1–5 and their adjacent Solutions |
| GEO-SYN | 1–10 | [Worked Exercises and Synthesis](#/item/book-analytic-computational-geometry?chapter=worked-exercises-and-synthesis), Exercises 1–10 and their adjacent Solutions: representations; orientation/area; segment intersection; closest point; composition; conic classification; focus/directrix; plane/line; convex hull; curved distance |

For GEO-SYN 2, check every consecutive turn before claiming convexity. For
GEO-SYN 4, compare all three clamped edge projections. For GEO-SYN 6, the
substitution $u=x+3y$ is an invertible linear change, not a claim that $(u,y)$
is an orthonormal frame. For GEO-SYN 9, all five supplied points are hull
vertices: in the printed order beginning $(-1,2)$, consecutive orientations
are $7,7,1,4,6$, all positive. GEO-SYN 10 compares two specified distances in
different normalized geometries; it does not assert a universal ordering of
spherical and hyperbolic distances.

### Four fixed checkpoint questions

These specify one choice for each original checkpoint. Attempt the questions
before using the public models in the next subsection.

- **GEO-CP1, after Module 2.** In the Euclidean plane let $A=(-4,0)$,
  $B=(4,0)$, $C=(0,3)$ and $D=(0,0)$. Prove triangles $ACD$ and $BCD$
  congruent with a named criterion, then prove it independently by a rigid
  motion. State the correspondence.
- **GEO-CP2, after Module 4.** For these distinct $A,B$, prove synthetically
  that the entire equidistance locus $PA=PB$ is their perpendicular bisector.
  Verify the biconditional in coordinates, treating $P=D$ explicitly.
- **GEO-CP3, after Module 6.** With side notation opposite the corresponding
  angle, fix $A=30^{\\circ}$ and $b=8$. Solve the three SSA cases $a=3,4,5$.
  Count nondegenerate triangles and give every admissible third-side value;
  check the positive ray and remaining angles.
- **GEO-CP4, after Module 8.** Draw the same nominal 4 cm half-span at scale
  factors $k=1/2,1,2$. Repeat the length reading at each scale and retain the
  raw readings, instrument resolution and calibration. Compare absolute and
  relative errors against nominal lengths $2,4,8$ cm. For a fully supplied
  paper-data choice, use this synthetic practice record with a declared
  $\\pm0.01$ cm reading bound. It is not an observed experiment:

| Scale k | Nominal length (cm) | Reading 1 (cm) | Reading 2 (cm) | Reading 3 (cm) |
| --- | --- | --- | --- | --- |
| 1/2 | 2 | 1.99 | 2.00 | 2.01 |
| 1 | 4 | 3.99 | 4.00 | 4.01 |
| 2 | 8 | 7.99 | 8.00 | 8.01 |

If using physical drawings, keep your actual observations rather than replacing
them by this table. The fixed data choice practises the error audit; it does
not show that a learner repeated a physical measurement or detected a shared
instrument bias.

### Complete checkpoint models and repairs

**GEO-CP1.** $AC=BC=\\sqrt{4^2+3^2}=5$, $AD=BD=4$, and $CD=3$ is shared.
SSS gives $\\triangle ACD\\cong\\triangle BCD$, with $A\\leftrightarrow B$ and
$C,D$ fixed. Independently, $r(x,y)=(-x,y)$ fixes $C,D$ and swaps $A,B$.
For any $X,Y$, changing the sign of their x-coordinate difference leaves
$|r(X)-r(Y)|^2=|X-Y|^2$, so $r$ is an isometry. Repair any proof that assumes
the symmetry from the drawing or gives a correspondence incompatible with its
congruence criterion.

**GEO-CP2.** If $P$ is on the perpendicular bisector, the two right triangles
with vertices $P,D,A$ and $P,D,B$ have equal legs, so $PA=PB$ by Pythagoras
(or SAS). Conversely, if $PA=PB$ and $P\\ne D$, SSS gives congruence using
$DA=DB$ and shared $PD$; equal adjacent angles at $D$ sum to a straight angle,
so each is right. If $P$ lies on $AB$, equality of the two distances forces
$P=D$, already on the locus; in particular the degenerate $P=D$ case does
not require a triangle congruence argument. For $P=(x,y)$,
$$PA^2-PB^2=(x+4)^2+y^2-[(x-4)^2+y^2]=16x.$$
Nonnegative distances therefore give $PA=PB\\iff x=0$. This is a general
coordinate derivation, not verification at a few plotted points. Repair a
one-direction locus proof or an invocation of nondegenerate triangles at $D$.

**GEO-CP3.** Place $A=(0,0)$, $C=(4\\sqrt3,4)$ and $B=(c,0)$ with $c>0$.
Then $AC=8$, angle $A=30^{\\circ}$, and
$$BC=a\\iff(c-4\\sqrt3)^2=a^2-16.$$
For $a=3$ the right side is $-7$: no triangles. For $a=4$ there is one root
$c=4\\sqrt3$ and angles $B=90^{\\circ},C=60^{\\circ}$. For $a=5$ there are
two roots $c=4\\sqrt3+3$ and $c=4\\sqrt3-3$, both positive because
$4\\sqrt3>3$. The sine law gives $\\sin B=4/5$, so respectively
$B\\approx53.1^{\\circ},126.9^{\\circ}$ and
$C\\approx96.9^{\\circ},23.1^{\\circ}$, all leaving positive third angles.
The circle/ray construction also proves these are all possibilities. Repair
acceptance of only the principal inverse-sine value, or a root on the wrong ray.

| SSA side a | Radicand a^2-16 | Nondegenerate triangles |
| --- | --- | --- |
| 3 | -7 | 0 |
| 4 | 0 | 1 |
| 5 | 9 | 2 |

**GEO-CP4.** For the supplied record, every row has maximum absolute deviation
$0.01$ cm and range $0.02$ cm. Maximum relative deviations are
$0.01/2=0.5\\%$, $0.01/4=0.25\\%$ and $0.01/8=0.125\\%$. Absolute length
error is stable in this fixed-resolution record, while relative error decreases
as scale grows. Dividing readings by $k$ to recover the original half-span
gives absolute bounds $0.02,0.01,0.005$ cm; do not mix those rescaled quantities
with the raw readings. Different actual observations may support a different
description. Repetition alone cannot exclude systematic bias. Repair a claim
of observed calibration, randomness or constant relative error based on these
synthetic rows.

### One fixed capstone family: construction to curved comparison

This is one completely specified choice of the original open capstone. P is
primary work, C changes its dimensions, and R is a later public reconstruction
of the same family. All models below are public. A return date or declaration
does not verify a delay or previously unseen work.

Use a **closed right triangular prism** in Euclidean space. Its front vertices
are $A_0=(-w,0,0)$, $B_0=(w,0,0)$, $C_0=(0,h,0)$; its back vertices
$A_1,B_1,C_1$ are the corresponding front vertices plus $(0,0,L)$.
Every coordinate and dimensional input is in metres. The roof section is the
front triangle; the closed solid includes the floor and both triangular ends.
Let $D=(0,0)$ in that front section. The spherical comparison is a separate
geodesic triangle, not this physical roof carried onto a sphere.

| Work | Half-span w (m) | Rise h (m) | Depth L (m) | Sphere radius R_s | Longitude phi/pi |
| --- | --- | --- | --- | --- | --- |
| P | 4 | 3 | 6 | 1 | 1/2 |
| C | 3 | 4 | 5 | 2 | 1/3 |
| R | 5 | 12 | 4 | 3 | 1/6 |

For **each** row, supply these eight connected deliverables before comparing
with the models. For C explain what changes and what remains invariant; for R
reconstruct the reasoning and state earlier model exposure.

1. Draw the front section at **1:100**, so 1 m becomes 1 cm. Construct the
   apex from two equal-radius circles centred at the base endpoints with
   radius $s=\\sqrt{w^2+h^2}$. Select the intersection with positive y-coordinate.
   Construct the perpendicular bisector and midpoint. Give a construction
   log, full text diagram description and all six spatial vertex coordinates.
2. Prove the two half-triangles congruent by a named criterion and by a rigid
   motion. Prove the similarity claim for the section at $y=h/2$, including
   point order and parallelism. Identify givens, definitions and theorem
   dependencies rather than reading them from the picture.
3. Use column homogeneous vectors in the front plane. Reflect in $x=0$,
   then translate by $(10,2)$ m. Write the matrices and their product, check
   distance/orientation behavior, and locate the apex. Compare the reversed
   composition. Distinguish this isometry from the scale drawing.
4. Find the slope angle $\\theta$, its exact sine/cosine/tangent and the sloping
   edge. State angle mode, domains and final rounding.
5. Find the closest point $Q$ on segment $AC$ to $D$ by vector projection.
   Check segment membership and residual perpendicularity. Cross-check the
   distance by triangle area. Reproduce at least that result with recorded
   decimal arithmetic or calculator work, preserving the exact expression.
6. Calculate volume, full closed surface area and the complete plane section
   $y=h/2$. Give its four vertices. Audit dimensions and vertex/edge/face
   incidence. Explain why the upper half-height portion is not a fully scaled
   copy of the entire solid.
7. Write a one-page error audit. Treat the stated $w,h,L$ as nominal readings
   each with a deterministic $\\pm0.01$ m bound, keeping the symmetric right-prism
   model. Give a guaranteed volume interval, compare it with first-order
   sensitivity, and separate instrument/model error from numerical rounding.
8. On a sphere of radius $R_s$, take the North Pole $N$ and two equatorial
   points $U,V$ separated by longitude $\\phi$ from the table. Use shorter
   great-circle sides. Derive all sides, angles and area and explain exactly
   which Euclidean conclusion changes. All three vertices lie in a common
   open hemisphere for these $0<\\phi<\\pi$ choices.

### Complete capstone models: construction, proof and coordinates

For any row $w,h,L>0$. The equal-radius circles centred at $A=(-w,0)$ and
$B=(w,0)$ have intersections $(0,h)$ and $(0,-h)$, since subtracting their
squared equations gives $x=0$, then $y^2=s^2-w^2=h^2$. The radius $s>w$
ensures two distinct intersections; selecting positive y gives $C$ uniquely.
The line joining the intersections is $x=0$, meeting $AB$ at $D=(0,0)$.
The drawing coordinates are the same numbers in centimetres, while the
spatial coordinates remain metres. State this conversion rather than treating
the paper drawing as the full-size object.

SSS gives $\\triangle ACD\\cong\\triangle BCD$: equal sloping edges $s$,
equal half-spans $w$, shared rise $h$. Reflection $r(x,y)=(-x,y)$ gives the
second proof by the distance calculation in GEO-CP1. The perpendicular-bisector
biconditional follows from $PA^2-PB^2=4wx$, using $w>0$. Thus the midpoint
and symmetry claims have algebraic and synthetic reasons.

Put $E=(-w/2,h/2)$ on $AC$ and $F=(w/2,h/2)$ on $BC$. Their segment is
parallel to $AB$, and both lie strictly between the relevant endpoints.
AA gives $\\triangle CEF\\sim\\triangle CAB$ with length factor $1/2$:
$CE=CF=s/2$, $EF=w$, and its area is one quarter of the full front triangle.
This similarity uses Euclidean parallel-angle behavior.

The reflection and translation matrices are
$$H=\\begin{pmatrix}-1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix},\\qquad
T=\\begin{pmatrix}1&0&10\\\\0&1&2\\\\0&0&1\\end{pmatrix}.$$
Applying $H$ first requires
$$TH=\\begin{pmatrix}-1&0&10\\\\0&1&2\\\\0&0&1\\end{pmatrix}.$$
Its linear part satisfies $A^TA=I$ and $\\det A=-1$, so distances are preserved
and orientation reversed. It sends $C$ to $(10,h+2)$. Reversing the order gives
$$HT=\\begin{pmatrix}-1&0&-10\\\\0&1&2\\\\0&0&1\\end{pmatrix},$$
sending $C$ to $(-10,h+2)$. These transformations are not the scale drawing:
that uniform factor $1/100$ scales lengths, areas and volumes by different
powers in the same unit system.

### Complete capstone models: trigonometry, projection and solids

The right half-triangle gives
$$s=\\sqrt{w^2+h^2},\\quad \\theta=\\arctan(h/w),\\quad
\\sin\\theta=h/s,\\quad\\cos\\theta=w/s,\\quad\\tan\\theta=h/w.$$
Here $0<\\theta<\\pi/2$. Recovering $s=w/\\cos\\theta$ is the requested
trigonometric length check. Angles below are degrees rounded only at the end;
the exact arctangent is in radians until converted by $180/\\pi$.

| Work | Sloping edge s (m) | Slope angle (degrees, approx.) | Volume (m^3) | Closed surface (m^2) | Half-height section (m^2) |
| --- | --- | --- | --- | --- | --- |
| P | 5 | 36.9 | 72 | 132 | 24 |
| C | 5 | 53.1 | 60 | 104 | 15 |
| R | 13 | 67.4 | 240 | 264 | 20 |

For the projection, $u=C-A=(w,h)$ and $D-A=(w,0)$, so
$$t_*={(D-A)\\cdot u\\over u\\cdot u}={w^2\\over w^2+h^2},\\qquad
Q=\\left({-wh^2\\over w^2+h^2},{w^2h\\over w^2+h^2}\\right),\\qquad
DQ={wh\\over s}.$$
Since $0<t_*<1$, this line projection belongs to the segment; no endpoint
clamp changes it. Direct substitution gives $(D-Q)\\cdot u=0$. The independent
area check is $wh/2=s\\,DQ/2$ for the half-triangle.

| Work | Projection t_* | Q_x (m) | Q_y (m) | Exact DQ (m) | DQ rounded to 0.001 m |
| --- | --- | --- | --- | --- | --- |
| P | 16/25 | -36/25 | 48/25 | 12/5 | 2.400 |
| C | 9/25 | -48/25 | 36/25 | 12/5 | 2.400 |
| R | 25/169 | -720/169 | 300/169 | 60/13 | 4.615 |

For P, a reproducible decimal calculation is $t_*=0.64$,
$Q=(-4,0)+0.64(4,3)=(-1.44,1.92)$, and
$DQ=\\sqrt{1.44^2+1.92^2}=\\sqrt{2.0736+3.6864}=\\sqrt{5.76}=2.4$ m.
For C use $t_*=0.36$, $Q=(-1.92,1.44)$ and the same squared norm. For R,
$DQ=60/13=4.615384615\\ldots$ m; rounding to 0.001 m has error
$5/13000$ m, less than $0.0005$ m. These are public calculation models;
retain the arithmetic actually performed in your own reproduction.

The front area is $wh$ and its perimeter is $2w+2s$. Extrusion through the
perpendicular depth $L$ gives
$$V=whL,\\qquad S=2wh+2L(w+s).$$
For P, the two ends contribute 24 m$^2$, the floor 48 m$^2$, and the two
sloping rectangles 60 m$^2$: total 132 m$^2$. The corresponding complete totals
are in the table. There are six vertices, nine edges and five faces, so
$6-9+5=2$ for this convex closed prism.

The slice $y=h/2$ is the rectangle with vertices
$(-w/2,h/2,0)$, $(w/2,h/2,0)$, $(w/2,h/2,L)$, $(-w/2,h/2,L)$.
Its side lengths are $w,L$ and its area is $wL$. Its vertices lie on the
four sloping prism edges. The upper half-height portion has front area
$wh/4$ and unchanged depth $L$, hence volume $V/4$ (18, 15, 60 m$^3$).
Only scaling **all three** dimensions by $1/2$ would give $V/8$.

### Complete capstone models: error and curved comparison

Let $e=0.01$ m and suppose all true inputs lie in the stated positive intervals
$[w-e,w+e]$, $[h-e,h+e]$, $[L-e,L+e]$. Because the volume product increases in
each positive input, a guaranteed enclosure in this model is
$$[(w-e)(h-e)(L-e),\\ (w+e)(h+e)(L+e)].$$
No probabilistic independence is required. Correlation may make the enclosure
conservative; it does not invalidate the bound. The assumption still excludes
an asymmetric section, leaning prism or curved surfaces not represented by
these inputs.

| Work | Nominal volume (m^3) | Exact lower volume (m^3) | Exact upper volume (m^3) | First-order absolute bound (m^3) |
| --- | --- | --- | --- | --- |
| P | 72 | 71.461299 | 72.541301 | 0.54 |
| C | 60 | 59.531199 | 60.471201 | 0.47 |
| R | 240 | 238.722099 | 241.282101 | 1.28 |

Writing $S_2=wh+wL+hL$ and $S_1=w+h+L$, the endpoints expand exactly as
$V-eS_2+e^2S_1-e^3$ and $V+eS_2+e^2S_1+e^3$. Thus the first-order bound
$eS_2$ alone is not guaranteed: P's actual maximum upward change is
$0.541301$ m$^3$, greater than $0.54$ m$^3$. These exact decimals arise from
rational endpoint products, not observed experiments. Keep a guaranteed
interval outward when rounding it for reporting. If lengths are displayed to
0.001 m or angles to 0.1 degree, that display rounding is separate from the
stated measurement bounds. The audit must also retain calibration, raw data
or the supplied-data declaration, model assumptions, units and unresolved
disagreements; repeat readings do not remove shared bias.

For the spherical comparison, set $N=(0,0,R_s)$,
$U=(R_s,0,0)$ and $V=(R_s\\cos\\phi,R_s\\sin\\phi,0)$. Use shorter
great-circle arcs, with $0<\\phi<\\pi$. The two meridian sides have length
$\\pi R_s/2$ and the equatorial side has length $R_s\\phi$. Meridians meet
the equator orthogonally, and their tangent directions at $N$ meet at angle
$\\phi$. The angles are therefore $\\pi/2,\\pi/2,\\phi$. The spherical cosine
law also gives $\\cos\\phi=0\\cdot0+1\\cdot1\\cos\\phi$ when applied at $N$.
Girard's formula gives area $R_s^2\\phi$ and angle sum $\\pi+\\phi$.

| Work | Meridian side / pi | Equatorial side / pi | Angle sum / pi | Spherical area / pi |
| --- | --- | --- | --- | --- |
| P | 1/2 | 1/2 | 3/2 | 1/2 |
| C | 1 | 2/3 | 4/3 | 4/3 |
| R | 3/2 | 1/2 | 7/6 | 3/2 |

For P this is the unit-sphere octant: three right angles, area $\\pi/2$, one
eighth of the sphere. It directly contrasts with the Euclidean triangle angle
sum $\\pi$ proved in Module 1 and used in AA similarity. Great circles do not
supply that proof's Euclidean parallel line. C and R change both curvature
scale and longitude: the table keeps the factor $R_s^2$ in area and $R_s$ in
length. This is a model comparison, not a correction to the exact Euclidean
roof theorem or a measured claim about a building site.

### Comparison, repair and retained work

Use the original 24-point capstone criteria above as a descriptive comparison
guide: 6 proof, 5 coordinate/trigonometric model, 4 solid/section, 4 measurement
and units, 3 curved comparison, 2 diagram/text description. They do not award
a learner grade, establish unaided work, or create three separate 24-point
qualifications. Apply the same dimensions when comparing P, C and R, and name
the actual repairs rather than reporting only a total.

Revise before treating the selected work as complete if a congruence lacks a
correspondence, a locus has only one direction, SSA omits a branch, a projection
falls outside its segment, a matrix uses the wrong order, a perspective picture
is used as length evidence, a volume uses sloping height, an interval omits its
remainder, or a curved claim uses nongeodesic edges or the wrong radius factor.
Compare each of the 42 roster questions with its own full source key and
retain the reason for every correction. A matching number without its domain,
hypotheses or derivation is unfinished.

Keep separate dated learner-owned text files for **first**, **comparison** and
**revised** work for every roster group/checkpoint and each P/C/R portfolio. For
example, use \`GEO-CAP-P-first.txt\`, \`GEO-CAP-P-comparison.txt\` and
\`GEO-CAP-P-revised.txt\`, with corresponding C and R names. The first file keeps
the original attempt and declares public answers/help already seen; preserve
it before opening further models. The comparison file names incorrect or
unsupported claims, the exact source help used and the needed repairs. The
revised file retains the corrected argument and what changed. Record the
course/source version with the files, and keep earlier contents when returning.

These are manually retained external worksheets, not new shared-writing tasks
or automatically immutable records. Native reading marks and the mutable
shared note do not preserve every worksheet. A current export is a snapshot,
not by itself a first/comparison/revision history. Public answers, declared
help and client dates do not establish independent performance or a verified
delay. The route adds no programme allocation, credit, observed workload,
whole-book release or claim that the other open projects have complete models.
`;export{e as default};