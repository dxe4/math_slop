var e=`---
id: book-conics-solids-projections
title: "Conics, Quadrics and Projection"
level: undergraduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Conics, Quadrics and Projection {#section-1-conics-quadrics-and-projection}

A flat curve can remember the solid that produced it. A drawing of a solid can also forget crucial spatial information. This book moves deliberately between plane and space: cone slices become conics, solid slices become polygons, volumes become cross-sectional integrals, and projections become maps with named invariants and distortions.

It assumes Euclidean geometry, coordinates, elementary algebra, and trigonometry. Degenerate slices and hidden hypotheses are treated as mathematical cases rather than graphical accidents.

The L2 route has twelve chapters, each with worked examples and at least ten exercises with staged hints and full solutions. Follow the [reader guide](conics-solids-projections/front-matter/reader-guide.md) for the ordered route, prerequisites, exact theorem inputs and limited reference comparison. The mathematical overview below remains available from the earlier edition; its section numbers are not the current chapter numbering. Differentiation, integration and elementary multiple-integral change of variables are named preparation for area, volume and distortion proofs.

<a id="section-7-1-a-double-cone-and-its-planes"></a>
## 1. A double cone and its planes {#section-9-1-a-double-cone-and-its-planes}

An ideal right circular double cone consists of all lines through a vertex making fixed acute angle $\\alpha$ with an axis. For a plane not through the vertex, let $\\beta\\in[0,\\pi/2]$ be the acute angle between the plane and the cone axis. Its section is classified by comparing $\\beta$ with $\\alpha$:

- $\\beta=\\pi/2$: circle;
- $\\alpha<\\beta<\\pi/2$: ellipse;
- $\\beta=\\alpha$: parabola;
- $0\\leq\\beta<\\alpha$: hyperbola.

If the plane passes through the cone vertex, degenerate sections arise: one point, one line, or two intersecting lines depending on orientation. A classification that assumes “the plane misses the vertex” must state it.

The names ellipse, parabola, and hyperbola can therefore be introduced as cone sections, focus/directrix loci, two-focus loci, or quadratic equations. Proving these descriptions equivalent requires geometry; a picture merely shows compatibility.

<a id="section-20-2-dandelin-spheres-connect-slicing-to-foci"></a>
## 2. Dandelin spheres connect slicing to foci {#section-22-2-dandelin-spheres-connect-slicing-to-foci}

Place a sphere inside one nappe of a cone so that it is tangent to the cone and to the slicing plane. The contact point with the plane becomes a focus of the conic. For an ellipse, two spheres lie in the same nappe on opposite sides of the slicing plane; a parabola uses one sphere, and a hyperbola uses spheres in opposite nappes.

The key fact is **equal tangent lengths**: from one external point to a sphere, tangent segments have equal length. For a point $P$ on the conic, compare the segment from $P$ to the plane-contact focus with a segment from $P$ along a cone generator to the circle where the sphere touches the cone. Equal-tangent relations convert spatial tangencies into constant sums, differences, or focus/directrix ratios.

A complete Dandelin proof must specify the chosen sphere, tangency circles, and which directed generator segments are added or subtracted. The construction explains why a cone slice has focal structure; it does not say every quadratic surface slice is a conic of the same kind.

<a id="section-28-3-ellipses"></a>
## 3. Ellipses {#section-30-3-ellipses}

For distinct foci $F_{1},F_{2}$, an ellipse is the locus

$PF_{1}+PF_{2}=2a$,

where $2a>\\lvert F_{1}F_{2}\\rvert$. Put foci at $(\\pm c,0)$ and define $b^{2}=a^{2}-c^{2}>0$. The standard equation is

$x^{2}/a^{2}+y^{2}/b^{2}=1$.

Eccentricity is $e=c/a$, so $0<e<1$. The corresponding directrices are $x=\\pm a/e$; each focus pairs with its nearer directrix under the ratio definition.

The major-axis vertices are $(\\pm a,0)$, minor-axis vertices $(0,\\pm b)$, and area is $\\pi ab$. The circle occurs as the special case $c=0$, where both foci coincide and the finite-directrix eccentricity description becomes a limiting case with $e=0$.

<a id="section-42-tangent-and-reflection"></a>
### Tangent and reflection {#section-44-tangent-and-reflection}

For $x^{2}/a^{2}+y^{2}/b^{2}=1$, the tangent at any point $(x_{0},y_{0})$ on the ellipse is

$xx_{0}/a^{2}+yy_{0}/b^{2}=1$.

Its normal is proportional to $(x_{0}/a^{2},y_{0}/b^{2})$. Differentiating the constant distance-sum shows this normal bisects directions toward the two foci. Under ideal equal-angle reflection, a ray leaving one focus reflects toward the other.

<a id="section-50-4-parabolas"></a>
## 4. Parabolas {#section-52-4-parabolas}

A parabola is the locus equidistant from focus and directrix. With focus $(p,0)$ and directrix $x=-p$, where $p>0$,

$\\sqrt{(x-p)^{2}+y^{2}}=\\lvert x+p\\rvert$.

Every point on the locus lies to the right of the directrix, and squaring gives

$y^{2}=4px$.

Its vertex is the origin and axis is the x-axis. The tangent at parameter point $(pt^{2},2pt)$ has equation

$ty=x+pt^{2}$.

The tangent makes equal angles with the focal direction and the axis. Thus rays parallel to the axis reflect through the focus. A real parabolic reflector approximates this ideal only when its cross-section, surface finish, wavelength, and alignment support the ray model.

<a id="section-66-5-hyperbolas"></a>
## 5. Hyperbolas {#section-68-5-hyperbolas}

For foci $(\\pm c,0)$, a hyperbola satisfies

$\\lvert PF_{1}-PF_{2}\\rvert =2a$, with $0<2a<2c$.

Let $b^{2}=c^{2}-a^{2}$. Its standard equation is

$x^{2}/a^{2}-y^{2}/b^{2}=1$.

Eccentricity $e=c/a>1$; directrices are $x=\\pm a/e$. Lines

$y=\\pm (b/a)x$

are asymptotes: the curve approaches them as $\\lvert x\\rvert$ grows but does not meet them in this centered nondegenerate form.

Dropping the absolute value selects one branch through a signed distance difference. A solver that returns both branches has solved the squared equation, not necessarily the signed original statement.

<a id="section-84-6-general-conics-and-coordinate-changes"></a>
## 6. General conics and coordinate changes {#section-86-6-general-conics-and-coordinate-changes}

For

$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0$,

translation moves the center or vertex and rotation removes the cross term when the symmetric quadratic matrix can be diagonalized. Since real symmetric matrices have orthogonal eigenvectors, the rotation is distance-preserving.

The sign of $B^{2}-4AC$ classifies the nondegenerate real form as ellipse-like, parabola-like, or hyperbola-like. Rank and constant terms determine whether the locus is a genuine curve, point, pair of lines, repeated line, or empty. Multiplying all coefficients by a nonzero scalar does not change the locus.

<a id="section-94-worked-reduction"></a>
### Worked reduction {#section-96-worked-reduction}

Reduce $4x^{2}+9y^{2}-8x+36y+4=0$:

$4(x-1)^{2}+9(y+2)^{2}=36$,

so

$(x-1)^{2}/9+(y+2)^{2}/4=1$.

It is an ellipse centered $(1,-2)$ with semiaxes 3 and 2.

<a id="section-106-7-cross-sections-of-prisms-and-polyhedra"></a>
## 7. Cross-sections of prisms and polyhedra {#section-108-7-cross-sections-of-prisms-and-polyhedra}

A plane not coplanar with any face intersects each face of a convex polyhedron in nothing, a point, or a segment. These segments join into one convex polygon unless the plane is tangent or misses the solid. If the plane coincides with a face, the intersection includes that whole face and must be handled separately.

For a cube:

- a plane parallel to a face gives a square;
- a plane near a vertex can cut three incident edges, giving a triangle;
- a plane meeting all six faces can give a hexagon.

A common drawing error connects two points lying on faces that share no edge path within the slicing plane. A reliable construction marks plane intersections on solid edges, then joins points only within a common face.

<a id="section-118-regular-tetrahedron-midpoint-section"></a>
### Regular tetrahedron midpoint section {#section-120-regular-tetrahedron-midpoint-section}

Join midpoints of four edges forming a cycle around a tetrahedron. A plane through them makes a parallelogram; in a regular tetrahedron it is a square. Similar triangles show each side is half a tetrahedron edge, while perpendicular directions follow from the regular-coordinate model. “It looks square” is insufficient without these relations.

<a id="section-122-8-surface-area-and-volume"></a>
## 8. Surface area and volume {#section-124-8-surface-area-and-volume}

Surface area is the sum or integral of exposed surface pieces; internal joining faces are not exposed. A right prism with base area $B$, base perimeter $p$, and height $h$ has

$V=Bh$, $lateral area=ph$.

A right circular cylinder has $V=\\pi r^{2}h$ and lateral area $2\\pi rh$. A pyramid or cone has $V=Bh/3$. A sphere has $V=4\\pi r^{3}/3$ and area $4\\pi r^{2}$.

<a id="section-130-cavalieri-proof-idea-for-the-cone-factor"></a>
### Cavalieri proof idea for the cone factor {#section-132-cavalieri-proof-idea-for-the-cone-factor}

Compare a cone or pyramid with a simpler solid after arranging cross-sectional areas. At physical height $z=th$ from the vertex, linear dimensions scale by $t$, so cross-sectional area is $Bt^{2}$. Because $dz=h\\,dt$,

$\\displaystyle V=\\int_{0}^{h}A(z)\\,dz=Bh\\int_{0}^{1}t^{2}\\,dt=\\frac{Bh}{3}$.

This argument assumes parallel cross-sections and ordinary volume additivity. Using slant height in place of perpendicular height changes the solid.

<a id="section-138-frustum"></a>
### Frustum {#section-140-frustum}

A conical or pyramidal frustum with height $h$ and parallel end areas $B_{1},B_{2}$ has

$V=(h/3)(B_{1}+\\sqrt{B_{1}B_{2}}+B_{2})$.

Derive it by subtracting similar full cones. It requires similar, parallel end sections; arbitrary solids with two known end areas do not obey this formula.

<a id="section-146-9-euler-characteristic-and-nets"></a>
## 9. Euler characteristic and nets {#section-148-9-euler-characteristic-and-nets}

For a convex polyhedron, $V-E+F=2$. It is about incidence, not edge lengths. A net cuts selected edges and unfolds faces into a plane without overlap. Different nets can fold to the same solid, and not every connected arrangement of congruent polygons folds without collision.

When counting a net, cut boundary copies of one original edge must be identified on refolding. Treating duplicated boundary vertices as distinct gives the net’s planar graph counts rather than the solid’s counts.

A polyhedral torus has Euler characteristic 0. This boundary case shows why convex or sphere-like hypotheses cannot be deleted.

<a id="section-154-10-projection-what-a-drawing-preserves"></a>
## 10. Projection: what a drawing preserves {#section-156-10-projection-what-a-drawing-preserves}

An **orthographic projection** drops perpendiculars to a picture plane. Parallel spatial lines whose common direction has a nonzero component in the picture plane project to parallel image lines, though distinct lines can project to the same line. A line parallel to the projection direction collapses to a point. Lengths are preserved only for directions parallel to the picture plane.

An **oblique projection** sends points along a fixed nonperpendicular direction. A **perspective projection** sends rays through one camera point to the picture plane. Spatial parallel lines can meet at a vanishing point; cross-ratio along a line is preserved projectively, while ratios on different depth planes generally are not.

Hidden-line conventions and shading help perception but add no incidence facts. To reconstruct a solid uniquely, one perspective drawing is usually insufficient: many three-dimensional configurations share the same image rays.

<a id="section-162-coordinate-camera"></a>
### Coordinate camera {#section-164-coordinate-camera}

With camera at origin and picture plane $z=f>0$, a spatial point $(X,Y,Z)$ with $Z>0$ projects to

$(fX/Z,fY/Z)$.

Points with $Z=0$ do not have finite images in this chart, and points behind the camera need a declared clipping convention. Dividing before checking $Z$ creates numerical artifacts.

<a id="section-170-11-applied-examples"></a>
## 11. Applied examples {#section-172-11-applied-examples}

<a id="section-172-elliptical-whispering-gallery"></a>
### Elliptical whispering gallery {#section-174-elliptical-whispering-gallery}

Under a two-dimensional ray and specular-reflection model, a sound ray from one focus reflects toward the other. Real rooms have three-dimensional spreading, diffraction, absorption, and imperfect boundaries, so the focal effect is frequency- and geometry-dependent.

<a id="section-176-parabolic-dish"></a>
### Parabolic dish {#section-178-parabolic-dish}

Incoming rays parallel to the axis reflect to the focus. Conversely, a point source at the focus produces parallel reflected rays in the ideal section. A surface of revolution is required for a three-dimensional dish; merely bending a strip into a parabola controls only one cross-section.

<a id="section-180-tomographic-slice"></a>
### Tomographic slice {#section-182-tomographic-slice}

A medical or industrial slice reports values on a plane through a three-dimensional object. Stacking slices approximates volume, but voxel thickness, interpolation, alignment, and segmentation create uncertainty. Cavalieri-style summation can estimate volume when slice areas and spacing are known.

<a id="section-184-12-worked-exercises"></a>
## 12. Worked exercises {#section-186-12-worked-exercises}

<a id="section-186-1-ellipse-focal-data"></a>
### 1. Ellipse focal data {#section-188-1-ellipse-focal-data}

For $x^{2}/25+y^{2}/9=1$, find $a,b,c,e$ and foci.

**Answer.** $a=5$, $b=3$, $c=\\sqrt{25-9}=4$, $e=4/5$, foci $(\\pm 4,0)$.

<a id="section-192-2-parabola-focus"></a>
### 2. Parabola focus {#section-194-2-parabola-focus}

Find focus and directrix of $y^{2}=12x$.

**Answer.** $4p=12$, so $p=3$; focus $(3,0)$, directrix $x=-3$.

<a id="section-198-3-hyperbola-check"></a>
### 3. Hyperbola check {#section-200-3-hyperbola-check}

For $x^{2}/16-y^{2}/9=1$, find asymptotes and eccentricity.

**Answer.** $a=4$, $b=3$, $c=5$; asymptotes $y=\\pm 3x/4$, eccentricity $5/4$.

<a id="section-204-4-frustum"></a>
### 4. Frustum {#section-206-4-frustum}

End areas are 4 and 16, height 6. Find volume.

**Answer.** $(6/3)(4+8+16)=56$, assuming parallel similar ends.

<a id="section-210-5-perspective"></a>
### 5. Perspective {#section-212-5-perspective}

With $f=2$, project $(3,-1,6)$.

**Answer.** $(2\\cdot 3/6,2\\cdot (-1)/6)=(1,-1/3)$.

<a id="section-216-6-degenerate-section"></a>
### 6. Degenerate section {#section-218-6-degenerate-section}

What can happen when a conic slicing plane passes through the cone vertex?

**Answer.** The locus can degenerate to a point, one generator line, or two generator lines, depending on orientation; nondegenerate focal formulas require excluding these cases.

<a id="section-222-routes-onward"></a>
## Routes onward {#section-224-routes-onward}

Use [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry) to implement intersections and robust predicates. The [geometry proof reference](#/item/book-geometry-proof-reference) supplies logical dependencies, while the [measurement recipe](#/item/recipe-geometric-measurement-construction) turns cross-sections and projections into an auditable field workflow. Explore the focus/directrix equality directly in the [Conics & Curved Geometry Observatory](#/item/visual-lab-conics-curved-geometry).
`;export{e as default};