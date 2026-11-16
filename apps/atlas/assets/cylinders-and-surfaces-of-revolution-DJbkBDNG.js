var e=`---
parent_id: book-conics-solids-projections
chapter_id: cylinders-and-surfaces-of-revolution
title: "Cylinders and Surfaces of Revolution"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Cylinders and Surfaces of Revolution

A cone is produced by lines through a point, but a cylinder is produced by parallel lines through a curve. A circular base gives a circular cylinder; it is right circular only when the generators are perpendicular to the base. An elliptical base similarly gives an elliptical cylinder, which can be right or oblique. This chapter studies cylinders as section-bearing solids, then generalizes to surfaces of revolution, where rotating a plane curve around an axis creates surfaces whose cross-sections and areas obey systematic rules.

The scope is L2 Euclidean solid geometry. Section arguments require coordinates, distances and trigonometry. The area and volume derivations additionally use the elementary arc-length integral, double integration and change of variables; readers without those calculus tools can first follow the geometric formulas and return to their proofs. Surface area means the area of the swept set, unless multiplicity is explicitly mentioned. This distinction is essential when a generating curve is retraced.

## Right circular cylinders

A right circular cylinder of radius $r$ and height $h$ has two parallel circular bases of radius $r$ connected by a lateral surface whose generators are perpendicular to the bases. Its volume and lateral surface area are

$$V=\\pi r^{2}h,\\qquad A_{\\text{lateral}}=2\\pi rh.$$

The total surface area including both bases is $2\\pi rh+2\\pi r^{2}$.

Here is why these are distinct formulas rather than an analogy with a prism. Horizontal slices are disks of the same area, so integrating their areas over perpendicular height gives volume. For lateral area, cut along one generator and unroll. A full circumference becomes a straight segment of length $2\\pi r$, while each generator retains length $h$. The resulting rectangle has area $2\\pi rh$. Its two long edges are identified on the original surface; counting the cut twice would add an artificial face. The two original bases must be added separately when the cylinder is closed.

For an infinite right circular cylinder, a plane can produce several complete loci; a finite cylinder may clip any of them at its end caps:

- A plane perpendicular to the axis gives a circle.
- A plane parallel to the axis gives two parallel lines (or one line if tangent, or empty if missing).
- A plane tilted relative to the axis, but not parallel to it, gives an ellipse.

The ellipse case is less familiar than the cone section, but it is equally important. For a cylinder of radius $r$, if the slicing plane makes angle $\\theta$ with the axis (so $\\pi/2-\\theta$ is the angle between the plane and the base), the resulting ellipse has semiminor axis $b=r$ and semimajor axis $a=r/\\sin\\theta$. As $\\theta\\to\\pi/2$, the plane becomes perpendicular to the axis and $a\\to r$, recovering the circle.

### Why the section is an ellipse

Consider a cylinder $x^{2}+y^{2}=r^{2}$ and a plane $z=ky$ for constant $k>0$. Substituting $z=ky$ does not change the $x^{2}+y^{2}=r^{2}$ constraint in the $(x,y)$ coordinates, but the induced basis vectors $(1,0,0)$ and $(0,1,k)$ are orthogonal but not orthonormal. Parameterize the cylinder by $(r\\cos t,r\\sin t,z)$. In the plane $z=ky$, a point is $(r\\cos t,r\\sin t,kr\\sin t)$. Using coordinates $u=r\\cos t$ and $v=r\\sin t\\sqrt{1+k^{2}}$ along orthogonal axes in the plane, the locus satisfies $u^{2}/r^{2}+v^{2}/(r^{2}(1+k^{2}))=1$, an ellipse with $a=r\\sqrt{1+k^{2}}$ and $b=r$. Since $\\sin\\theta=1/\\sqrt{1+k^{2}}$ where $\\theta$ is the angle between the plane itself and the vertical axis, this matches $a=r/\\sin\\theta$.

## Oblique and elliptical cylinders

An oblique cylinder has parallel generators that are not perpendicular to the bases. Its volume is still $V=Bh$, where $B$ is the base area and $h$ is the perpendicular distance between the bases. The lateral area is more complicated because the slant height $l$ differs from the perpendicular height; for a right section with perimeter $p$, $A_{\\text{lateral}}=pl$ where $l$ is measured along a generator.

To prove the volume assertion for a general oblique cylinder, take its base in the plane $z=0$ and write its displacement vector as $(u,v,h)$ with $h>0$. The solid is parametrized by

$$F(x,y,t)=(x+tu,y+tv,th),\\qquad (x,y)\\in D,\\quad 0\\leq t\\leq1.$$

The absolute Jacobian is $h$: adding horizontal shear to a vertical column does not change this determinant. Change of variables therefore gives $\\int_D\\int_0^1h\\,dt\\,dx\\,dy=Bh$. Equivalently, every horizontal section is a translate of the base and has area $B$, so Cavalieri's principle gives the same result. Generator length is $\\sqrt{u^2+v^2+h^2}$, larger than $h$ when the cylinder is oblique; replacing height by that length changes the volume incorrectly.

The lateral-area formula also has a precise interpretation. Let $b(s)$ trace a simple piecewise smooth base boundary once, and let the fixed generator vector be $w$, of length $l$. The lateral parametrization is $b(s)+tw$, with $0\\leq t\\leq1$. Its area element is $|b'(s)\\times w|\\,ds\\,dt$. Orthogonal projection onto the plane perpendicular to $w$ sends $b'(s)$ to a vector whose length is $|b'(s)\\times w|/l$. Its projected boundary is the boundary of a right section of the infinite cylinder: every generator meets that perpendicular plane exactly once. Consequently the lateral area is $l$ times that section's perimeter. The right section need not be the drawn oblique base, and can extend beyond the finite end caps. This does not invalidate the formula: each lateral generator still has the same length, and the projected perimeter records its perpendicular width.

An elliptical cylinder has an ellipse as its base. Its volume is $V=(\\pi ab)h$ for semiaxes $a$ and $b$, and for a right cylinder the lateral area is its base perimeter times height. The elliptical perimeter has no elementary closed form in general; for an oblique cylinder use the right-section perimeter instead.

## Surfaces of revolution

A surface of revolution is generated by revolving a plane curve around an axis lying in the same plane. Common examples include:

- Sphere: revolve a semicircle $x^{2}+y^{2}=r^{2}$ with $y\\geq 0$ around the x-axis.
- Prolate spheroid: revolve an ellipse around its major axis.
- Oblate spheroid: revolve an ellipse around its minor axis.
- Paraboloid: revolve a parabola around its axis.
- Hyperboloid of one sheet: revolve a hyperbola around its conjugate axis.
- Hyperboloid of two sheets: revolve a hyperbola around its transverse axis.
- Torus: revolve a circle around an external axis.

### Surface area by Pappus

For the first theorem of Pappus, assume a simple, piecewise smooth, regular profile lies on one side of the axis, meets the axis at most at finitely many points, and is traced once. A simple closed profile is allowed with its two endpoint parameters identified. Rotation must not cover a positive-area part more than once. The generated surface area is the profile length $L$ times the distance $2\\pi\\bar{r}$ traveled by its arc-length centroid:

$$A=2\\pi\\bar{r}L.$$

For a sphere, the generating semicircle has length $\\pi r$ and its centroid is at distance $2r/\\pi$ from the axis, giving $A=2\\pi(2r/\\pi)(\\pi r)=4\\pi r^{2}$.

### Volume by Pappus

For the second theorem of Pappus, take a bounded plane region with piecewise smooth boundary, lying on one side of the axis and with its interior disjoint from the axis. Boundary contact is allowed. Rotate the region once without overlapping interiors. The generated volume is its area $A$ times the distance $2\\pi\\bar{r}$ traveled by its area centroid:

$$V=2\\pi\\bar{r}A.$$

For a sphere, the generating semicircular disk has area $\\pi r^{2}/2$ and its centroid is at distance $4r/(3\\pi)$ from the axis, giving $V=2\\pi(4r/(3\\pi))(\\pi r^{2}/2)=4\\pi r^{3}/3$.


### Proofs and the two different centroids

Write a profile in the half-plane as $(x(t),r(t))$, where $r(t)\\geq0$ is distance from the x-axis. Its rotated parametrization is

$$X(t,\\phi)=(x(t),r(t)\\cos\\phi,r(t)\\sin\\phi),\\qquad0\\leq\\phi<2\\pi.$$

The two derivative vectors are perpendicular, with lengths $\\sqrt{x'(t)^2+r'(t)^2}$ and $r(t)$. Their cross product therefore has norm $r(t)\\sqrt{x'(t)^2+r'(t)^2}$. Integrating gives

$$A_{\\rm surface}=2\\pi\\int r\\,ds
=2\\pi L\\left(\\frac1L\\int r\\,ds\\right).$$

The expression in parentheses is exactly the distance of the arc-length centroid from the axis. At an isolated axis contact the angular derivative vanishes, but the corresponding circles have zero area. The parametrization remains regular elsewhere, and the integral is obtained by omitting small profile intervals around those contacts and taking their limit. The seam at angle zero also has zero area. Simplicity and the nonoverlap assumption ensure that this parameter integral counts the surface once rather than measuring a multiple covering.

For volume use $(x,r,\\phi)\\mapsto(x,r\\cos\\phi,r\\sin\\phi)$ on the region times an angular interval. Its absolute Jacobian is $r$. Away from the axis and angular seam it is one-to-one under the stated assumptions. Change of variables gives

$$V=\\int_D\\int_0^{2\\pi}r\\,d\\phi\\,dA
=2\\pi\\int_Dr\\,dA
=2\\pi A\\left(\\frac1A\\int_Dr\\,dA\\right).$$

Now the centroid uses area measure, not length measure. That change of measure is why the semicircular arc and semicircular disk have different centroid distances. Symmetry locates either centroid on the perpendicular bisector, but symmetry alone does not determine its distance from the axis.

If a region crosses the axis, positive and negative signed coordinates can cancel in a centroid while their rotations overlap. Replacing signed radius by absolute radius removes cancellation but may still count the same volume twice. For example, rotating a full disk around a diameter produces a ball, whereas adding the rotations of its upper and lower halves counts that ball twice. The correct method is to select a nonoverlapping generating half or to account explicitly for multiplicity.

### Worked example 1: derive the sphere's centroids

For the semicircular arc put $x=R\\cos t$, $r=R\\sin t$, with $0\\leq t\\leq\\pi$. Then $ds=R\\,dt$, the length is $\\pi R$, and its radial first moment is $R^2\\int_0^\\pi\\sin t\\,dt=2R^2$. Its centroid distance is therefore $2R/\\pi$. Pappus gives area $4\\pi R^2$, recovering the formula without assuming the centroid value in advance.

For the semicircular disk, integrate radial distance using $0\\leq r\\leq\\sqrt{R^2-x^2}$. The first moment is

$$\\int_{-R}^{R}\\int_0^{\\sqrt{R^2-x^2}}r\\,dr\\,dx
=\\frac12\\int_{-R}^{R}(R^2-x^2)\\,dx=\\frac{2R^3}{3}.$$

Dividing by area $\\pi R^2/2$ gives $4R/(3\\pi)$, so Pappus gives volume $4\\pi R^3/3$. The same calculation for the half-ellipse with horizontal semiaxis $a$ and vertical semiaxis $b$ replaces the upper bound by $b\\sqrt{1-x^2/a^2}$. Its first moment is $2ab^2/3$, and division by area $\\pi ab/2$ gives $4b/(3\\pi)$. This supplies the centroid calculation needed in Exercise 5.

### Worked example 2: an external-axis torus

Take the profile circle $(x,r)=(a\\sin t,R+a\\cos t)$ with $R>a>0$. It stays strictly above the axis and has length $2\\pi a$. The cosine contribution to its radial first moment integrates to zero, leaving centroid radius $R$. Thus the torus area is $4\\pi^2Ra$. The generating disk also has centroid radius $R$, since reflection in its horizontal diameter pairs equal-area pieces at opposite offsets from that center. Its area is $\\pi a^2$, so the enclosed torus volume is $2\\pi^2Ra^2$.

The strict inequality is structural. At $R=a$ the swept surface touches itself at the axis and loses regularity there. At $R<a$ the generating disk crosses the axis, so this application no longer computes the ordinary volume of its union. The algebraic expression still exists, but it no longer has the same geometric justification. A drawing of a thick tube cannot replace the hypothesis.

### Worked example 3: when a finite cylinder clips the ellipse

Let the lateral cylinder be $x^2+y^2=9$, $0\\leq z\\leq10$, and cut by $z=5+2y$. In the plane, orthonormal coordinates along $(1,0,0)$ and $(0,1,2)/\\sqrt5$ give ellipse semiaxes $3$ and $3\\sqrt5$. But the full ellipse reaches heights $5\\pm6$, hence extends below and above the finite cylinder. The lateral intersection retains only the arcs satisfying $0\\leq5+2y\\leq10$, or $|y|\\leq5/2$. It is not a complete ellipse on the finite lateral surface.

In general $z=z_0+ky$ on a radius-$r$ cylinder has height range $[z_0-|k|r,z_0+|k|r]$. The whole ellipse lies between caps $z=0$ and $z=H$ exactly when both endpoints of that interval lie in $[0,H]$. If one instead intersects the entire closed solid, the cut includes a filled elliptical region clipped by the cap planes. Distinguishing the infinite surface, finite lateral surface and finite solid avoids three different answers being assigned to the same imprecise question.

## Quadric surfaces

The general second-degree equation in three variables

$$Ax^{2}+By^{2}+Cz^{2}+Dxy+Exz+Fyz+Gx+Hy+Iz+J=0$$

describes a quadric surface. After translation and rotation, the principal real types include the following standard forms; the cone is singular at its vertex and therefore is not a nondegenerate quadric:

- Ellipsoid: $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}+\\frac{z^{2}}{c^{2}}=1$.
- Hyperboloid of one sheet: $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=1$.
- Hyperboloid of two sheets: $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=-1$.
- Elliptic paraboloid: $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=\\frac{z}{c}$.
- Hyperbolic paraboloid: $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=\\frac{z}{c}$.
- Elliptic cone: $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=\\frac{z^{2}}{c^{2}}$.

The ellipsoid, both hyperboloids, the elliptic paraboloid, and the elliptic cone are surfaces of revolution when $a=b$. The ellipsoid becomes a sphere when $a=b=c$; the hyperboloid of one sheet becomes a cooling-tower shape. The hyperbolic paraboloid is a saddle and is not a surface of revolution for any positive parameter choice.

### Cross-sections of quadrics

Planes intersect quadrics in conic sections. For the ellipsoid, every plane section is an ellipse (or a point, or empty). For the hyperboloid of one sheet, generic sections by planes parallel to the axis are hyperbolas, but special positions can give a pair of lines (for example, $x=a$ in the standard form); sections perpendicular to the axis are ellipses. For the elliptic paraboloid, sections perpendicular to the axis are ellipses, and sections containing the axis are parabolas. This is why the names transfer from plane curves to surfaces: the same quadratic structure governs both.

## Common errors

- **Confusing slant height with perpendicular height.** In an oblique cylinder, the volume uses perpendicular height, but the lateral area uses the true generator length.
- **Applying Pappus across the axis.** Use the one-side, single-tracing and nonoverlap hypotheses stated above; for regions the axis must miss the interior. Boundary contact of measure zero, as at the endpoints of a generating semicircle, is allowed when the swept surface or volume is otherwise nonoverlapping.
- **Forgetting the sign in hyperboloid classification.** One sheet has $=1$ on the left; two sheets have $=-1$. The sign determines whether the surface is connected.
- **Assuming all quadric sections are nondegenerate.** A tangent plane can meet a quadric in a point or a pair of lines.

## Practice exercises with solutions

### Exercise 1

<span id="conics-revolution-ex-1"></span>
A plane cuts a right circular cylinder of radius $5$ at angle $\\theta=\\pi/6$ to the axis. Find the semiaxes of the elliptical section.

<details><summary>Hint 1</summary>

The cylinder radius supplies the shorter in-plane axis.

</details>

<details><summary>Hint 2</summary>

Use the sine of the angle with the axis, not with the base.

</details>

<details><summary>Full solution</summary>

**Solution.** The semiminor axis is $b=r=5$. The semimajor axis is $a=r/\\sin\\theta=5/\\sin(\\pi/6)=5/(1/2)=10$. The ellipse has semiaxes $10$ and $5$.

</details>

### Exercise 2

<span id="conics-revolution-ex-2"></span>
Use Pappus's first theorem to find the surface area of a torus with tube radius $r$ and distance $R$ from the tube center to the axis of revolution, where $R>r$.

<details><summary>Hint 1</summary>

Use the circumference of the generating circle.

</details>

<details><summary>Hint 2</summary>

Its arc-length centroid is the circle center, at distance R.

</details>

<details><summary>Full solution</summary>

**Solution.** The generating circle has arc length $L=2\\pi r$ and its centroid is at distance $R$ from the axis. The surface area is $A=2\\pi R\\cdot 2\\pi r=4\\pi^{2}Rr$.

</details>

### Exercise 3

<span id="conics-revolution-ex-3"></span>
Use Pappus's second theorem to find the volume of the same torus.

<details><summary>Hint 1</summary>

Use the area of the generating disk rather than its circumference.

</details>

<details><summary>Hint 2</summary>

The area centroid is at distance R; R>r prevents overlap.

</details>

<details><summary>Full solution</summary>

**Solution.** The generating disk has area $\\pi r^{2}$ and its centroid is at distance $R$ from the axis. The volume is $V=2\\pi R\\cdot\\pi r^{2}=2\\pi^{2}Rr^{2}$.

</details>

### Exercise 4

<span id="conics-revolution-ex-4"></span>
Identify the quadric surface $4x^{2}+9y^{2}-z^{2}=36$ and describe its sections by the planes $z=0$, $z=3$, and $x=0$.

<details><summary>Hint 1</summary>

Normalize the constant term before deciding the number of sheets.

</details>

<details><summary>Hint 2</summary>

Substitute each plane equation separately; the new ellipse semiaxes scale together.

</details>

<details><summary>Full solution</summary>

**Solution.** Dividing by $36$:

$$\\frac{x^{2}}{9}+\\frac{y^{2}}{4}-\\frac{z^{2}}{36}=1.$$

This is a hyperboloid of one sheet. The section $z=0$ gives $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1$, an ellipse with semiaxes $3$ and $2$. The section $z=3$ gives $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1+\\frac{9}{36}=\\frac{5}{4}$, an ellipse with semiaxes $3\\sqrt{5}/2$ and $\\sqrt{5}$. The section $x=0$ gives $\\frac{y^{2}}{4}-\\frac{z^{2}}{36}=1$, a hyperbola with semiaxes $2$ and $6$.

</details>

### Exercise 5

<span id="conics-revolution-ex-5"></span>
A prolate spheroid is formed by revolving the ellipse $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1$ with $a>b$ around the x-axis. Find its volume.

<details><summary>Hint 1</summary>

A half-ellipse stays on one side of the rotation axis.

</details>

<details><summary>Hint 2</summary>

Its centroid follows from the first-moment integral above; alternatively integrate disk areas.

</details>

<details><summary>Full solution</summary>

**Solution.** By Pappus's second theorem, the generating half-ellipse has area $\\pi ab/2$ and its centroid is at distance $4b/(3\\pi)$ from the x-axis (by symmetry of the half-ellipse). The volume is

$$V=2\\pi\\cdot\\frac{4b}{3\\pi}\\cdot\\frac{\\pi ab}{2}=\\frac{4}{3}\\pi ab^{2}.$$

Alternatively, using the disk method directly:

$$V=\\pi\\int_{-a}^{a}\\left(b\\sqrt{1-\\frac{x^{2}}{a^{2}}}\\right)^{2}dx=\\pi b^{2}\\int_{-a}^{a}\\left(1-\\frac{x^{2}}{a^{2}}\\right)dx=\\pi b^{2}\\left[x-\\frac{x^{3}}{3a^{2}}\\right]_{-a}^{a}=\\frac{4}{3}\\pi ab^{2}.$$

</details>

### Exercise 6

<span id="conics-revolution-ex-6"></span>
Show that the hyperbolic paraboloid $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=\\frac{z}{c}$ contains two families of straight lines.

<details><summary>Hint 1</summary>

Factor a difference of squares.

</details>

<details><summary>Hint 2</summary>

Fix one factor and let the other vary; retain zero parameter values.

</details>

<details><summary>Full solution</summary>

**Solution.** Factor the equation as
$$\\left(\\frac{x}{a}+\\frac{y}{b}\\right)\\left(\\frac{x}{a}-\\frac{y}{b}\\right)=\\frac{z}{c}.$$
For every real $\\lambda$, the two plane equations
$$\\frac{x}{a}+\\frac{y}{b}=\\lambda,\\qquad \\frac{z}{c}=\\lambda\\left(\\frac{x}{a}-\\frac{y}{b}\\right)$$
define a line on the surface. The second family is
$$\\frac{x}{a}-\\frac{y}{b}=\\mu,\\qquad \\frac{z}{c}=\\mu\\left(\\frac{x}{a}+\\frac{y}{b}\\right),$$
for every real $\\mu$. These formulas include the zero-parameter generators and avoid division by $\\lambda$ or $\\mu$.

</details>


### Exercise 7

<span id="conics-revolution-ex-7"></span>

A cylinder has a rectangular base of side lengths three and four in the horizontal plane. Its top is the translate by $(3,0,5)$. Find its volume, and explain why generator length is not the height used in that answer.

<details><summary>Hint 1</summary>

Find the base area and the vertical separation independently.

</details>

<details><summary>Hint 2</summary>

Each horizontal section is a translate of the rectangle. Compare five with the length of the translation vector.

</details>

<details><summary>Full solution</summary>

The base area is twelve and the perpendicular separation is five, so the volume is sixty cubic units. The generator has length $\\sqrt{34}$, exceeding five. Using twelve times that length would count a different height. Horizontal shear changes where the upper rectangle sits but does not change any horizontal section's area, so integration over the vertical interval of length five gives the stated volume. If the solid were turned in space, height would still mean distance perpendicular to the chosen parallel bases, rather than a preferred coordinate direction.

</details>

### Exercise 8

<span id="conics-revolution-ex-8"></span>

Revolve the line segment from $(0,a)$ to $(h,b)$ about the x-axis, where $h>0$ and $a,b>0$. Derive the lateral area and enclosed frustum volume. Include the cylindrical case $a=b$.

<details><summary>Hint 1</summary>

The profile is a straight segment with radius changing linearly from a to b.

</details>

<details><summary>Hint 2</summary>

Its length centroid is its midpoint. For volume integrate disks with radius $a+(b-a)x/h$.

</details>

<details><summary>Full solution</summary>

The slant length is $l=\\sqrt{h^2+(b-a)^2}$, and the profile centroid has radius $(a+b)/2$. Pappus gives lateral area $\\pi(a+b)l$. This excludes both end disks. The volume follows from

$$\\pi\\int_0^h\\left(a+\\frac{b-a}{h}x\\right)^2dx
=\\pi h\\left(a^2+a(b-a)+\\frac{(b-a)^2}{3}\\right)
=\\frac{\\pi h}{3}(a^2+ab+b^2).$$

When the radii are equal, the formulas become $2\\pi ah$ and $\\pi a^2h$. The derivation therefore includes a cylinder without dividing by the difference of the radii. When the radii differ, extending the profile gives a cone, but subtracting two cone volumes is unnecessary here.

</details>

### Exercise 9

<span id="conics-revolution-ex-9"></span>

A radius-two cylinder lies between heights zero and eight. A slicing plane is $z=3+ky$. Determine exactly which real values of k leave its full infinite-cylinder ellipse inside those caps. Explain the case $k=0$.

<details><summary>Hint 1</summary>

The y-coordinate ranges from minus two to two on the cylinder.

</details>

<details><summary>Hint 2</summary>

Both ends of the height interval $[3-2|k|,3+2|k|]$ must lie between zero and eight.

</details>

<details><summary>Full solution</summary>

The lower bound requires $2|k|\\leq3$ and the upper requires $2|k|\\leq5$. Together these give $|k|\\leq3/2$. Equality is allowed: the ellipse then touches the lower cap at its lowest point. At zero the plane is horizontal, so the section is a circle of radius two at height three, the equal-semiaxis ellipse case. Outside the allowed interval the infinite-cylinder ellipse still exists, but at least one of its arcs lies outside the finite cylinder. Clipping does not change its underlying conic equation; it changes which points of that conic belong to the bounded geometric object.

</details>

### Exercise 10

<span id="conics-revolution-ex-10"></span>

A student rotates the full unit disk about a diameter and applies Pappus using its centroid on that diameter, obtaining zero volume. Identify the failed hypothesis, and compute the correct volume without importing a sphere-volume formula.

<details><summary>Hint 1</summary>

The rotation axis crosses the interior of the proposed generating region.

</details>

<details><summary>Hint 2</summary>

Use only the upper half-disk and its radial first moment, or integrate circular cross-sections along the diameter.

</details>

<details><summary>Full solution</summary>

The disk lies on both sides of the axis and its interior meets the axis. Its signed first moments cancel, although the swept solid has positive volume. The upper and lower halves each generate the same ball, so treating them as disjoint swept volumes would also be wrong. At coordinate x along the diameter, the ball's cross-section is a disk of squared radius $1-x^2$. Thus its volume is

$$\\pi\\int_{-1}^{1}(1-x^2)\\,dx=\\frac{4\\pi}{3}.$$

Equivalently, the upper half-disk has area $\\pi/2$ and centroid radius $4/(3\\pi)$ by the worked calculation, yielding the same value through the valid one-side version of Pappus. A zero signed centroid is not evidence of a zero swept solid.

</details>

## Looking backward and forward

This chapter extended the cone-section picture to cylinders and to general surfaces of revolution. Pappus's theorems give elegant shortcuts for surface area and volume, while the classification of quadric surfaces shows how the conic sections reappear as plane sections of three-dimensional quadratic surfaces.

The next chapter, **Quadrics in Coordinates**, develops the classification preview into a systematic method using symmetric quadratic forms, translations and rank. Later spherical geometry treats the sphere as a space with its own distances and angles, rather than only as a surface swept by rotation.

## Source and scope

This revision preserves the earlier Atlas chapter, including its six exercise statements and solutions. New proofs, examples and four further exercises develop the commissioned L2 scope. The analytic inputs are elementary change of variables, Fubini and the arc-length/parametrized-area formulas from multivariable calculus. No claim of a general quadric-classification proof is made in this chapter; that is the next reading's task.
`;export{e as default};