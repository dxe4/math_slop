var e=`---
id: book-geometry-proof-reference
title: "Geometry: Euclidean, Projective and Non-Euclidean"
level: undergraduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Geometry: Euclidean, Projective and Non-Euclidean {#section-1-geometry-euclidean-projective-and-non-euclidean}

<a id="section-1-current-route-and-authorship"></a>
## Current route and authorship {#section-3-current-route-and-authorship}

**L2–L3.** The sixteen-chapter route expands the foundations and models below into full teaching chapters.  Use the [reader guide](geometry-proof-reference/front-matter/reader-guide.md) for exact preparation and imported-theorem boundaries.

1. [The layers of a geometric argument](geometry-proof-reference/the-layers-of-a-geometric-argument.md).
2. [Axiomatic Systems](geometry-proof-reference/axiomatic-systems.md).
3. [Incidence Geometry](geometry-proof-reference/incidence-geometry.md).
4. [Ordered Geometry](geometry-proof-reference/ordered-geometry.md).
5. [Neutral Geometry](geometry-proof-reference/neutral-geometry.md).
6. [Congruence, Area and Similarity in the Euclidean Plane](geometry-proof-reference/euclidean-congruence-area-and-similarity.md).
7. [Circles and Inversive Geometry](geometry-proof-reference/circles-and-inversive-geometry.md).
8. [Isometries, Similarities, Affine and Projective Transformations](geometry-proof-reference/isometries-and-plane-transformation-groups.md).
9. [Hyperbolic Geometry](geometry-proof-reference/hyperbolic-geometry.md).
10. [Elliptic Geometry](geometry-proof-reference/elliptic-geometry.md).
11. [Projective Planes](geometry-proof-reference/projective-planes.md).
12. [Finite Geometries](geometry-proof-reference/finite-geometries.md).
13. [Convexity](geometry-proof-reference/convexity.md).
14. [Length, Area and Measure](geometry-proof-reference/length-area-and-measure.md).
15. [Discrete Groups and Tessellations](geometry-proof-reference/discrete-groups-and-tessellations.md).
16. [Summary and Modern Directions](geometry-proof-reference/summary-and-modern-directions.md).

The four earlier chapter identities now resolve through native aliases to the canonical transformation, length/area/measure, tessellation and synthesis chapters. Those destinations integrate the earlier mathematical text and original exercise headings and full solutions. The earlier raw paths are provenance, not separately registered current resources. Original content below and all existing source/PDF history are retained; no new print edition or review is asserted.


This reference organizes Euclidean geometry by logical dependency. It is not a historical reconstruction of Euclid’s *Elements*, and it does not attempt a complete modern axiom system. Instead it states the hypotheses used by common theorems, proves representative results, and supplies spherical or hyperbolic countermodels when a Euclidean assumption is essential.

<a id="section-27-1-the-layers-of-a-geometric-argument"></a>
## 1. The layers of a geometric argument {#section-29-1-the-layers-of-a-geometric-argument}

Keep four layers separate:

1. **Primitive language:** point, line, incidence, betweenness, congruence.
2. **Definitions:** angle bisector, circle, parallel, polygon, similarity.
3. **Axioms or postulates:** assumptions about incidence, order, congruence, continuity, and parallels.
4. **Theorems:** deductions from the selected axioms and definitions.

A coordinate model can prove consistency relative to real-number algebra and can verify a proposed theorem. It does not make definitions unnecessary. Conversely, an accurate physical construction is evidence about a ruler and material, not a proof inside the ideal model.

Modern Euclidean axiom systems include more than the familiar parallel postulate. Incidence axioms guarantee, for example, one line through two distinct points. Order axioms govern “between.” Congruence axioms govern copying segments and angles. Continuity principles rule out gaps. Neutral or absolute geometry usually means the portion available without a Euclidean parallel axiom.

<a id="section-40-2-parallel-formulations-and-dependency"></a>
## 2. Parallel formulations and dependency {#section-42-2-parallel-formulations-and-dependency}

One Euclidean formulation says: through a point not on line $\\ell$, exactly one line parallel to $\\ell$ exists. Under suitable neutral-geometry axioms, this is equivalent to statements including:

- every triangle has angle sum $\\pi$;
- rectangles exist;
- similar noncongruent triangles exist;
- there is no upper bound on triangle area;
- a transversal of parallel lines has the Euclidean alternate-angle behavior.

“Equivalent” is relative to the rest of the axiom system. It does not mean each statement defines parallelism in isolation.

In a hyperbolic plane, through an external point pass infinitely many nonintersecting geodesics, giving a countermodel to Euclidean uniqueness within the neutral axiom package. On a sphere, great circles all meet, but spherical geometry also changes global incidence and order; it is a contrasting model rather than a neutral countermodel.

<a id="section-54-3-congruence-theorems"></a>
## 3. Congruence theorems {#section-56-3-congruence-theorems}

<a id="section-56-sas-proof-pattern"></a>
### SAS proof pattern {#section-58-sas-proof-pattern}

Suppose triangles $ABC$ and $A'B'C'$ have $AB=A'B'$, $AC=A'C'$, and included angles $A=A'$. A rigid placement moves $A$ to $A'$ and ray $AB$ to ray $A'B'$. Segment-copy uniqueness places $B$ on $B'$. The equal included angle aligns ray $AC$ with $A'C'$, and equal length places $C$ on $C'$. The triangles coincide under an isometry.

This proof depends on the ability to copy and compare segments and angles uniquely. “They look the same” is not a congruence criterion.

<a id="section-62-why-aaa-and-ssa-fail"></a>
### Why AAA and SSA fail {#section-64-why-aaa-and-ssa-fail}

AAA fixes shape but not scale, so it proves similarity rather than congruence. SSA can produce the ambiguous case. Fix angle $A$, adjacent side $b$, and opposite side $a$. A circle of radius $a$ centered at the endpoint of $b$ can meet the remaining angle ray zero, one, or two times.

<a id="section-66-consequences"></a>
### Consequences {#section-68-consequences}

Congruent triangles prove:

- an isosceles triangle has equal base angles;
- a point lies on the perpendicular bisector of $AB$ exactly when its distances to $A$ and $B$ agree;
- angle-bisector points are equidistant from the two boundary lines, using perpendicular distance;
- diagonals of a parallelogram bisect each other.

Each “locus” statement has two directions. Proving that points on a perpendicular bisector are equidistant is not enough; one must also prove every equidistant point lies on it.

<a id="section-77-4-isometries-and-symmetry"></a>
## 4. Isometries and symmetry {#section-79-4-isometries-and-symmetry}

An isometry $f:R^{2}\\to R^{2}$ satisfies $d(f(P),f(Q))=d(P,Q)$ for all points. It preserves collinearity, betweenness, angle magnitude, circles, area magnitude, and congruence. Orientation may be preserved or reversed.

Every Euclidean-plane isometry is exactly one of:

- identity or translation;
- rotation;
- reflection;
- glide reflection.

One proof chooses images of a noncollinear triangle. A rigid motion matching those three images is unique, and distances to three noncollinear reference points determine every other point. The classification then analyzes whether orientation is preserved and whether a fixed point exists.

Composition laws explain common constructions:

- two reflections in intersecting lines produce rotation through twice their directed angle;
- two reflections in parallel lines produce translation by twice their signed separation;
- three reflections may produce a reflection or glide reflection.

A finite figure’s symmetry set forms a group. Regular $n$-gons have $n$ rotations and $n$ reflections, the dihedral group of order $2n$. A frieze or wallpaper classification requires translations and additional global discreteness assumptions; local motif symmetry alone does not determine the full pattern group.

<a id="section-98-5-similarity-and-proportionality"></a>
## 5. Similarity and proportionality {#section-100-5-similarity-and-proportionality}

Triangles are similar when corresponding angles agree and corresponding sides share one positive factor. In Euclidean geometry, AA, SAS in proportion, or SSS in proportion suffices.

<a id="section-102-parallel-line-proportionality"></a>
### Parallel-line proportionality {#section-104-parallel-line-proportionality}

In triangle $ABC$, let $D$ lie on $AB$, $E$ on $AC$, and $DE\\parallel BC$. Alternate angles give triangle $ADE$ similar to $ABC$; therefore

$AD/AB=AE/AC=DE/BC$.

The converse also needs conditions on point order. Algebraic ratios without incidence information can describe points on extensions rather than the intended segments.

<a id="section-110-pythagoras-and-distance"></a>
### Pythagoras and distance {#section-112-pythagoras-and-distance}

The altitude-to-hypotenuse similarity proof yields $a^{2}+b^{2}=c^{2}$. In coordinate geometry this becomes the distance formula. The converse identifies right angles. Over arbitrary normed planes, a different distance rule can break this form, so Pythagoras characterizes inner-product geometry rather than every possible notion of length.

<a id="section-114-area-ratios"></a>
### Area ratios {#section-116-area-ratios}

Triangles sharing an altitude have area ratio equal to base ratio. Similar polygons of scale $k$ have area ratio $k^{2}$; triangulate them into corresponding triangles. This proof assumes ordinary Euclidean area additivity.

<a id="section-118-6-circle-theorem-dependency-map"></a>
## 6. Circle theorem dependency map {#section-120-6-circle-theorem-dependency-map}

A circle is a distance locus. Its center-radius definition immediately gives equal radii and reflection symmetry through every diameter.

<a id="section-122-chord-and-center"></a>
### Chord and center {#section-124-chord-and-center}

The perpendicular from the center to a chord bisects the chord. Proof: the two right triangles share the center-to-chord segment, have equal radii, and are congruent by hypotenuse-leg. Conversely, for a nondegenerate chord that is not a diameter, the unique line through the center and chord midpoint is perpendicular to the chord. For a diameter the midpoint is the center, so “the line through those two points” is not uniquely determined.

<a id="section-126-inscribed-angle-theorem"></a>
### Inscribed-angle theorem {#section-128-inscribed-angle-theorem}

An inscribed angle is half its intercepted central angle. Connect the center to the angle’s endpoints and vertex, split into isosceles triangles, and apply triangle angle sums. Several configurations depend on whether the center lies inside the angle, so a complete proof treats cases or uses directed angles.

Consequences include:

- an angle subtending a diameter is right;
- opposite angles of a cyclic quadrilateral sum to $180^{\\circ}$;
- equal chords intercept equal arcs.

<a id="section-136-power-of-a-point"></a>
### Power of a point {#section-138-power-of-a-point}

For a circle with center $O$ and radius $r$, define signed power

$Pow(P)=\\lvert P-O\\rvert^{2}-r^{2}$.

A line through $P$ meeting the circle at directed points $A,B$ satisfies

$PA\\cdot PB=Pow(P)$.

This coordinate-free product follows from similar triangles or a one-dimensional quadratic along the line. For an external tangent point $T$, $PT^{2}=Pow(P)$. Inside the circle, signed power is negative; switching silently between directed and unsigned segments causes sign errors.

<a id="section-148-7-conics-as-loci"></a>
## 7. Conics as loci {#section-150-7-conics-as-loci}

For a focus $F$ not on a directrix line $\\ell$, the focus/directrix locus

$d(P,F)=e d(P,ℓ)$, $e>0$,

gives ellipse, parabola, or hyperbola according as $e<1$, $e=1$, or $e>1$. Distance to a line means perpendicular distance.

With $F=(0,0)$ and $ℓ:x=1$, squaring gives

$x^{2}+y^{2}=e^{2}(x-1)^{2}$.

Since both original distances are nonnegative, squaring this equality is logically reversible. In other conic manipulations involving isolated signed expressions, squaring may introduce extraneous solutions and the locus condition must be rechecked.

An ellipse also has a two-focus definition: the sum of distances to two distinct foci equals a constant greater than the focal separation. Equality gives the segment joining the foci, while a smaller constant gives the empty locus. A hyperbola uses an absolute difference equal to a positive constant smaller than the focal separation. Equality gives the two outward rays on the focal line, a larger constant gives the empty locus, and zero gives the perpendicular bisector rather than a hyperbola. Other degenerate quadratic equations can produce intersecting lines, a repeated line, a point, or an empty locus; “quadratic equation” does not guarantee a nondegenerate conic.

Reflective properties follow from equal-angle or gradient arguments: an elliptical ray from one focus reflects toward the other, a parabolic ray parallel to its axis reflects toward its focus, under ideal specular reflection. These are local tangent claims, not statements about every physical dish or mirror.

<a id="section-166-8-trigonometric-theorems"></a>
## 8. Trigonometric theorems {#section-168-8-trigonometric-theorems}

The unit-circle definition makes sine and cosine coordinates of a rotation. Rotation-matrix multiplication proves addition identities. Dot products give

$u\\cdot v=\\lvert u \\rvert \\lvert v \\rvert \\cos\\theta$.

Applying this to two sides of a triangle proves the Euclidean law of cosines. Dropping a perpendicular and comparing areas proves the law of sines, or one can use the circumcircle and inscribed angles.

The inverse symbols require domains. $arcsin$ returns one principal angle, not every angle with a given sine. A triangle solver must check angle sum, positivity, side ordering, and the SSA alternative.

Angles may be dimensionless ratios in radians, yet writing “radians” prevents degree-mode mistakes. The small-angle approximations $\\sin\\theta \\approx \\theta$ and $\\tan\\theta \\approx \\theta$ require $\\theta$ in radians and a controlled small range; they are approximations, not identities.

<a id="section-178-9-solids-and-polyhedral-topology"></a>
## 9. Solids and polyhedral topology {#section-180-9-solids-and-polyhedral-topology}

A polyhedron consists of vertices, edges, faces, and incidence data—not merely a shaded perspective drawing. For a convex polyhedron, Euler’s formula is

$V-E+F=2$.

A proof removes one face, projects the remaining surface to a planar connected graph without edge crossings, and repeatedly removes an edge bounding a face or a terminal edge. Each face-removing step decreases $E$ and $F$ together; each tree-edge step decreases $E$ and $V$ together. The final single vertex has $V-E+F=1$ for the opened graph, so replacing the removed face gives 2.

Convexity supports the projection. More generally the invariant is Euler characteristic; a closed orientable surface with $g$ handles has $V-E+F=2-2g$ for a valid cell decomposition.

Volume formulas can be proved by dissection, Cavalieri’s principle, or integration. They require perpendicular height. For arbitrary self-intersecting or unbounded solids, naive “base times height” language may not define a finite volume.

<a id="section-190-10-curved-countermodels-and-local-truth"></a>
## 10. Curved countermodels and local truth {#section-192-10-curved-countermodels-and-local-truth}

On a unit sphere, geodesic distance between unit vectors $u,v$ is $\\arccos(u\\cdot v)\\in[0,\\pi]$. For antipodal points there are many minimizing semicircles, so the distance is defined although a unique shorter arc is not. A nondegenerate spherical triangle bounding a convex region in an open hemisphere, with minor great-circle edges and angles $A,B,C$, has area

$A+B+C-\\pi$.

In curvature $-1$ hyperbolic geometry, a geodesic triangle has area

$\\pi -(A+B+C)$.

Thus triangle angle sum detects integrated curvature. The general Gauss–Bonnet theorem includes Gaussian curvature and boundary geodesic curvature; quoting the simple formulas for arbitrary surfaces or nongeodesic edges is invalid.

Euclidean conclusions can still approximate small regions of a smooth surface. “Locally flat” means errors shrink at an appropriate rate as scale shrinks; it does not make a large navigation triangle exactly Euclidean.

<a id="section-204-11-worked-proof-audits"></a>
## 11. Worked proof audits {#section-206-11-worked-proof-audits}

<a id="section-206-1-a-false-converse"></a>
### 1. A false converse {#section-208-1-a-false-converse}

Claim: if quadrilateral diagonals are equal, it is a rectangle. Refute it.

**Solution.** A non-square isosceles trapezoid has equal diagonals but need not have four right angles. Equal diagonals alone are insufficient. A parallelogram with equal diagonals is a rectangle, because parallelogram structure supplies the missing side relations for congruent triangles.

<a id="section-212-2-perpendicular-bisector-converse"></a>
### 2. Perpendicular-bisector converse {#section-214-2-perpendicular-bisector-converse}

If $PA=PB$, prove $P$ lies on the perpendicular bisector of distinct $A,B$.

**Solution.** Let $M$ be midpoint of $AB$. Triangles $PMA$ and $PMB$ have $PA=PB$, $MA=MB$, and shared $PM$; SSS makes them congruent. Their adjacent angles at $M$ are equal and form a straight angle, so each is right. Hence $PM$ is the perpendicular bisector. If $P=M$, the conclusion is immediate.

<a id="section-218-3-reflection-composition"></a>
### 3. Reflection composition {#section-220-3-reflection-composition}

Reflect $(x,y)$ in $x=0$, then in $x=a$. Identify the transformation.

**Solution.** First $(-x,y)$, then $(2a+x,y)$. It is translation by $(2a,0)$, twice the directed separation.

<a id="section-224-4-circle-power"></a>
### 4. Circle power {#section-226-4-circle-power}

A point is 13 units from a circle center of radius 5. Find tangent length.

**Solution.** Power is $13^{2}-5^{2}=144$; tangent length is the nonnegative square root, 12.

<a id="section-230-5-conic-hypothesis"></a>
### 5. Conic hypothesis {#section-232-5-conic-hypothesis}

What locus arises from the two-focus ellipse rule when the stated distance sum equals the focal separation?

**Solution.** The triangle inequality becomes equality, so points lie on the segment joining the foci. The usual nondegenerate ellipse requires a strictly larger constant.

<a id="section-236-6-parallel-audit"></a>
### 6. Parallel audit {#section-238-6-parallel-audit}

Which hypothesis is exposed by a spherical triangle with three right angles?

**Solution.** Euclidean parallel behavior. Its angle-sum proof used a parallel through a vertex; great circles do not supply that line.

<a id="section-242-reference-route"></a>
## Reference route {#section-244-reference-route}

Use the [standard course](#/item/course-euclidean-trigonometry-standard) for a guided sequence, [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry) for robust coordinates and algorithms, and [Conics, Solids, and Projection](#/item/book-conics-solids-projections) for the synthetic flat-to-spatial bridge. The [curved-geometry deep dive](#/item/deep-dive-spherical-hyperbolic-geometry) supplies full non-Euclidean formulas. When applying theorems outside a diagram, follow the [measurement and construction recipe](#/item/recipe-geometric-measurement-construction) and label the ideal theorem, instrument reading, numerical approximation, and error model separately.
`;export{e as default};