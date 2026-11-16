var e=`---
parent_id: book-geometry-proof-reference
chapter_id: hyperbolic-geometry
title: "Hyperbolic Geometry"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Hyperbolic Geometry

## Learning purpose

Hyperbolic geometry arises from replacing Euclid's parallel postulate with its negation: through a point not on a given line there pass at least two distinct lines not meeting the given line. This chapter develops the core theorems of the hyperbolic plane, constructs concrete models, and contrasts the results with their Euclidean counterparts. The reader learns to compute in the Poincar\\'{e} disk and upper half-plane models and to recognize which Euclidean intuitions fail.

## The hyperbolic parallel axiom

**Axiom (Hyperbolic parallel postulate).** Given a line $\\ell$ and a point $P$ not on $\\ell$, there exist at least two distinct lines through $P$ that do not intersect $\\ell$.

Together with the neutral axioms, this axiom characterizes **hyperbolic geometry**. The phrase "at least two" is sharp: in fact, infinitely many such lines exist, but "at least two" suffices for the axiomatic foundation.

## Immediate consequences

### No rectangles

Since the existence of a rectangle is equivalent to the Euclidean parallel postulate (proved in **Neutral Geometry**), hyperbolic geometry contains no rectangles. Every Saccheri quadrilateral has acute summit angles, and every Lambert quadrilateral has an acute fourth angle.

### Angle sum

**Theorem 9.3.** In hyperbolic geometry, the angle sum of every triangle is strictly less than $\\pi$.

**Proof.** By the Saccheri–Legendre theorem, the angle sum is at most $\\pi$. If some triangle had angle sum exactly $\\pi$, the proof in **Neutral Geometry** shows that the Euclidean parallel postulate would follow, contradicting the hyperbolic axiom. Hence the angle sum is $< \\pi$ for every triangle.

### Similarity implies congruence

**Theorem 9.4.** In hyperbolic geometry, if two triangles are similar (corresponding angles equal), then they are congruent.

**Proof for curvature $-1$.** The dual hyperbolic cosine law recovers each side from the three angles; for example,

$$\\cosh a=\\frac{\\cos A+\\cos B\\cos C}{\\sin B\\sin C}.$$

The analogous cyclic formulas determine $b$ and $c$. Thus two triangles with the same corresponding angles have the same corresponding side lengths and are congruent by SSS. Other constant negative curvatures follow after the fixed curvature scale is included in the side lengths.

**Common error:** applying Euclidean similarity arguments (e.g., shadow problems, map scaling) in hyperbolic geometry. There are no nontrivial similar triangles, so proportional reasoning must be replaced by hyperbolic trigonometry.

## Models of hyperbolic geometry

A model proves relative consistency: if Euclidean geometry is consistent, so is hyperbolic geometry.

### Poincar\\'{e} disk model

**Points:** points inside the unit disk $D = \\{(x,y) : x^{2}+y^{2} < 1\\}$.

**Lines:** diameters of $D$ and circular arcs orthogonal to the boundary $\\partial D$.

**Distance:** the hyperbolic distance between $z$ and $w$ in the complex unit disk is
$$d(z,w) = \\operatorname{arccosh}\\!\\left(1 + \\frac{2|z-w|^{2}}{(1-|z|^{2})(1-|w|^{2})}\\right).$$

**Angle measure:** the angle between two hyperbolic lines is the Euclidean angle between their tangents at the intersection point. Hence the model is **conformal**.

**Verification of the parallel axiom:** Take $\\ell$ to be the real diameter and $P=(0,1/2)$. The Euclidean circles with centers $(1,5/4)$ and $(-1,5/4)$ and radius $5/4$ pass through $P$ and meet the unit circle orthogonally. Their arcs inside the disk are hyperbolic lines. Neither meets $\\ell$ inside the disk; one shares the ideal endpoint $(1,0)$ with $\\ell$ and the other shares $(-1,0)$. Lines whose other ideal endpoints lie between these two limiting cases give the infinitely many nonintersecting lines through $P$.

![Poincare disk with the real diameter and two limiting parallel arcs through P equals zero comma one half. The right arc shares the ideal endpoint one comma zero with the diameter, and the left arc shares minus one comma zero.](figures/limiting-parallels.svg)

*The two exact circles through $P$ bound the fan of hyperbolic lines through $P$ that miss the real diameter. Boundary points are ideal points and do not belong to the hyperbolic plane.*

### Upper half-plane model

**Points:** $(x,y)$ with $y > 0$.

**Lines:** vertical rays $\\{x = x_{0},\\; y > 0\\}$ and semicircles centered on the $x$-axis.

**Distance:**
$$d(z,w) = \\operatorname{arccosh}\\!\\left(1 + \\frac{|z-w|^{2}}{2\\,\\operatorname{Im}(z)\\,\\operatorname{Im}(w)}\\right).$$

Both models satisfy all neutral axioms and the hyperbolic parallel axiom. They are isomorphic: a M\\"{o}bius transformation maps one onto the other preserving hyperbolic distance.

## Hyperbolic trigonometry

### Law of sines

For a hyperbolic triangle with sides $a,b,c$ and opposite angles $A,B,C$:
$$\\frac{\\sinh a}{\\sin A} = \\frac{\\sinh b}{\\sin B} = \\frac{\\sinh c}{\\sin C}.$$

### Law of cosines

$$\\cosh c = \\cosh a \\cosh b - \\sinh a \\sinh b \\cos C.$$

**Boundary case:** For very small $a,b,c$, the hyperbolic laws approximate their Euclidean counterparts because $\\sinh x \\approx x$ and $\\cosh x \\approx 1 + x^{2}/2$ for small $x$. This reflects the fact that hyperbolic geometry is locally Euclidean.

### Area

**Theorem 9.5 (Gauss–Bonnet for hyperbolic triangles).** The area of a hyperbolic triangle with angles $A,B,C$ is
$$\\operatorname{Area} = \\pi - (A+B+C).$$

**Proof sketch.** In the upper half-plane model with curvature $-1$, the area element is $dx\\,dy / y^{2}$. Integrating over a triangle bounded by geodesics and using the geodesic curvature of the edges gives the formula. A synthetic proof constructs an ideal triangle (all vertices on the boundary) and subtracts smaller triangles.

**Common error:** forgetting that the area formula depends on the curvature normalization. If the Gaussian curvature is $K < 0$, the area is $(\\pi - (A+B+C))/|K|$.

## Worked example: computing a hyperbolic distance

**Problem.** In the Poincar\\'{e} disk model, find the hyperbolic distance between $z = 0$ and $w = 0.5$.

**Solution.** Using the distance formula with $|z| = 0$, $|w| = 0.5$, $|z-w| = 0.5$:
$$d = \\operatorname{arccosh}\\!\\left(1 + \\frac{2(0.5)^{2}}{(1-0)(1-0.25)}\\right)
   = \\operatorname{arccosh}\\!\\left(1 + \\frac{0.5}{0.75}\\right)
   = \\operatorname{arccosh}\\!\\left(\\frac{5}{3}\\right).$$
Since $\\operatorname{arccosh}(x) = \\ln(x + \\sqrt{x^{2}-1})$, we obtain
$$d = \\ln\\!\\left(\\frac{5}{3} + \\sqrt{\\frac{25}{9}-1}\\right)
   = \\ln\\!\\left(\\frac{5}{3} + \\frac{4}{3}\\right)
   = \\ln 3 \\approx 1.0986.$$

**Verification:** The distance is positive, increases with $|w|$, and tends to infinity as $|w| \\to 1$, all as expected.

## Common errors

1. **Treating hyperbolic lines as Euclidean chords.** A Euclidean chord of the disk is not a hyperbolic line unless it is a diameter. The shortest path between two points follows the orthogonal arc, not the straight segment.
2. **Ignoring orientation in angle measures.** The conformal property means Euclidean and hyperbolic angles agree, but directed angles require care because the model is bounded.
3. **Applying Euclidean area formulas.** The area of a hyperbolic triangle is determined by its angle defect, not by base and height.

## A full metric construction of the disk model

The model statements above can be verified from one length rule. For a piecewise-$C^1$ path in the open complex unit disk define
$L(\\gamma)=\\int\\frac{2|\\gamma'(t)|}{1-|\\gamma(t)|^2}\\,dt.$
Distance is the infimum of these lengths between its endpoints. The denominator is positive exactly on the model domain. The factor two normalizes curvature to -1; changing the scale changes dimensional distance and area formulas.

### Lemma 9.1 — Disk automorphisms preserve lengths

For |a|<1 set
$\\phi_a(z)=\\frac{z-a}{1-\\bar a z}.$
Its denominator does not vanish on the disk. Direct expansion gives
$1-|\\phi_a(z)|^2
=\\frac{(1-|a|^2)(1-|z|^2)}{|1-\\bar a z|^2},\\qquad
|\\phi_a'(z)|=\\frac{1-|a|^2}{|1-\\bar a z|^2}.$
Thus phi_a maps the disk into itself and preserves the length integrand. Its inverse is (w+a)/(1+bar a w), so it is a bijective isometry. Rotations z↦e^(it)z and reflection z↦bar z are isometries by the same length rule. The map phi_a takes a to zero, allowing every point calculation to be normalized at the center.

### Theorem 9.2 — Distance and unique geodesic segments

For 0<=r<1, a radial segment from zero has length
$F(r)=\\int_0^r\\frac{2\\,ds}{1-s^2}
=\\log\\frac{1+r}{1-r}=2\\operatorname{arctanh}r.$
Every other path from zero to radius r has at least this length. Indeed where its radial coordinate rho is differentiable,
$|\\rho'|\\le|\\gamma'|$, so integration gives L>=|F(rho_end)-F(rho_start)|. A path passing through zero is handled by restricting to portions with positive rho and taking limits. The equality condition requires no angular motion and monotone radius. Therefore the minimizing path image is the radial interval.

Normalize two distinct endpoints a,b using phi_a. Their unique minimizing segment is the inverse image of that radial interval, and
$d(a,b)=2\\operatorname{arctanh}
\\left|\\frac{b-a}{1-\\bar a b}\\right|.$
Let t denote the absolute value in this formula. The identity in Lemma 9.1 ensures t<1. Since cosh(2 artanh t)=(1+t²)/(1-t²), expansion gives
$\\cosh d(a,b)
=1+\\frac{2|a-b|^2}{(1-|a|^2)(1-|b|^2)}.$
Thus the earlier displayed distance formula is proved from shortest path length rather than simply posited.

The full geodesic line is the inverse image of a diameter. A fractional linear map takes Euclidean circles or lines to circles or lines, as follows by substituting its inverse into their quadratic equations and clearing the nonzero denominator. It is conformal because its derivative is complex multiplication by a nonzero number. Since disk automorphisms preserve the boundary circle, inverse diameter images meet that circle orthogonally. Hence the geodesic descriptions above follow.

## Incidence, order, and congruence checks

Two interior points determine one complete geodesic line: after normalization at one endpoint, it must be the unique diameter through zero and the other endpoint. Two different lines cannot share two interior points. Lines extend indefinitely in metric distance, since a diameter has signed distance parameter s with radial coordinate tanh(s/2), where s ranges over all real numbers.

For the order structure it helps to introduce the radial Klein map
$k(z)=\\frac{2z}{1+|z|^2}.$
It is a bijection of the disk, with inverse
$k^{-1}(w)=w/(1+\\sqrt{1-|w|^2})$.
An orthogonal circle with center c satisfies
$|z|^2-2\\operatorname{Re}(\\bar c z)+1=0$.
Substitution gives the straight chord equation
$\\operatorname{Re}(\\bar c k(z))=1$.
Diameters map to themselves. Thus k carries geodesic lines and their intervals to Euclidean chords and intervals. Betweenness is transported from those intervals; Pasch's crossing property follows from its ordinary Euclidean version inside the convex disk. The Klein picture is an incidence-and-order tool, not a conformal picture.

Segment transport on a ray is unique because F(r) increases continuously from zero to infinity. Angle transport is unique on a specified side because at zero rays are Euclidean rays, disk isometries move any point to zero, and their derivatives preserve angles. Given two sides and their included angle, normalize their common vertex to zero and one ray to the positive real axis. The two side lengths fix their radial coordinates; the included angle and chosen side fix the second ray. This proves SAS congruence in the model. Reflection handles the opposite orientation.

Real completeness along a line follows from its real signed-distance parameter. Metric completeness can also be checked: a Cauchy sequence stays in some finite hyperbolic ball about zero, hence in the Euclidean closed disk of radius tanh(R/2)<1. On such a disk the length density is bounded above and below by positive constants. A Euclidean subsequential limit is inside the model, and the upper density bound along short segments proves metric convergence. These are the standard incidence, order, congruence, and real-continuity checks used with the neutral package; another formal axiom list should be compared with these constructions explicitly.

For the parallel axiom, the two exact limiting lines constructed earlier through (0,1/2) miss the real diameter inside the disk. Isometries move any point-line configuration into a corresponding standard position, or the Klein chord picture shows that from any point off a line there are two distinct rays to its ideal endpoints and a whole interval of directions missing that line. Boundary endpoints are excluded, so meeting there does not count as intersection in the model. This supplies failure of Euclidean uniqueness while retaining the preceding neutral structures.

## The half-plane equivalence and trigonometry

The Cayley transformation w=(z-i)/(z+i) maps the upper half-plane onto the disk. Its identities
$1-|w|^2=\\frac{4\\,\\operatorname{Im}z}{|z+i|^2},
\\qquad |dw|=\\frac{2|dz|}{|z+i|^2}$
show that disk length becomes |dz|/Im z. Substituting also gives the half-plane distance formula. Vertical lines and real-axis-centered semicircles become disk geodesics by the circle and angle properties. This is a proved model isometry.

The side cosine law can be derived without a hyperboloid. Put one triangle vertex at zero and the others at r and s e^(iA). Let their distances from zero be c and b and their mutual distance a. Then
$\\cosh b=\\frac{1+s^2}{1-s^2},\\quad
\\sinh b=\\frac{2s}{1-s^2},$
and similarly with r,c. Inserting |r-s e^(iA)|² into the distance formula and simplifying gives
$\\cosh a=\\cosh b\\cosh c-\\sinh b\\sinh c\\cos A.$
Cyclic permutation proves the other versions.

For a nondegenerate triangle set x=cosh a,y=cosh b,z=cosh c and
$N=1-x^2-y^2-z^2+2xyz$.
The cosine laws give
$\\sin^2A=\\frac{N}{(y^2-1)(z^2-1)}.$
All relevant sines and hyperbolic sines are positive, so taking positive square roots proves sin A/sinh a is the same at all three vertices, yielding the sine law.

The dual cosine law also follows by substitution: on a common denominator, the numerator of cos A+cos B cos C is
$(yz-x)(x^2-1)+(zx-y)(xy-z)=xN.$
The same denominator gives numerator N for sin B sin C. Dividing proves
$\\cosh a=\\frac{\\cos A+\\cos B\\cos C}{\\sin B\\sin C}.$
This supplies the missing algebra behind the earlier equal-angles congruence argument.

## Triangle area with the boundary calculation supplied

In the half-plane area is dx dy/y². Put omega=dx/y, so d omega=dx dy/y². Along a positively oriented geodesic arc, let theta be its Euclidean tangent angle. Then
$d\\theta+\\frac{dx}{y}=0.$
For a vertical arc both terms vanish. For a semicircle x=A+R cos t,y=R sin t, tangent angle changes by dt while dx/y=-dt, proving the identity. Reversing the arc reverses both terms.

The total tangent turn of a simple geodesic triangle, with its three principal exterior corners, is 2pi. One direct verification uses
$k_t(z)=(1+t)z/(1+t|z|^2)$, t in [0,1].
Each is an orientation-preserving radial diffeomorphism of the disk, since its radial derivative is positive. It deforms the triangle into its straight Klein triangle at t=1. Normalized tangent directions and nonreversing corner connections deform continuously; their integer winding number cannot change. The straight triangle has total turn 2pi by its elementary angle sum. A continuous angle lift, obtained on successive short parameter intervals, justifies the integer winding count. Passing between disk and half-plane does not change that total: the Cayley derivative has a continuous argument on the disk, since its pole is on the excluded boundary, so its argument returns to its initial value around the closed triangle.

Consequently integrating d theta along the smooth arcs gives
$2pi-\\sum(\\pi-A_i)=A+B+C-\\pi$.
The geodesic identity and Green's theorem give
$\\operatorname{Area}=\\oint\\frac{dx}{y}
=-\\int d\\theta=\\pi-(A+B+C).$
This supplies the area proof for a simple convex triangle with finite interior vertices. Ideal vertices require a limiting improper integral and are not silently included. For curvature -kappa², scale lengths by 1/kappa and divide this area by kappa².

## Worked examples

### Worked example 1 — Normalizing two real disk points

For a=1/3 and b=2/3, the normalized radial coordinate is
$(b-a)/(1-ab)=(1/3)/(7/9)=3/7$.
Therefore d=log((1+3/7)/(1-3/7))=log(5/2). Direct Euclidean subtraction gives only 1/3 and is not the hyperbolic distance. The normalization automatically accounts for location relative to the boundary.

### Worked example 2 — An orthogonal circle and a valid interior arc

Take the circle centered at c=(2,0) with radius sqrt3. Since |c|²=1+3, it is orthogonal to the unit boundary. Its equation is x²+y²-4x+1=0. Under the Klein map it becomes the straight chord with first coordinate 1/2. Only its arc inside the disk is the hyperbolic line; the rest of the drawn Euclidean circle is outside the model.

### Worked example 3 — Curvature fixes the area scale

A triangle with angles pi/4,pi/4,pi/3 has defect pi/6. At curvature -1 its area is pi/6. At curvature -4 the corresponding angle triangle has area pi/24, because the metric is scaled by one half in lengths and one quarter in areas. Equal angles determine congruence only after the curvature normalization has been fixed.

## Practice exercises

<a id="hyperbolic-geometry-ex-1"></a>
### Exercise 1
Show that in the Poincar\\'{e} disk model, two distinct hyperbolic lines may share a boundary point without intersecting inside the disk. Such lines are called **asymptotically parallel** or **limiting parallel**.


<details>
<summary>Hint 1</summary>

Keep the unit boundary excluded.

</details>
<details>
<summary>Hint 2</summary>

Two different orthogonal arcs can approach the same ideal endpoint.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Take $\\ell$ to be the real diameter and $P=(0,1/2)$. The circle centered at $(1,5/4)$ with radius $5/4$ passes through $P$ and $(1,0)$; since $1^2+(5/4)^2=1+(5/4)^2$, it is orthogonal to the unit circle. Its interior arc is a hyperbolic line through $P$ that shares the ideal endpoint $(1,0)$ with $\\ell$ but does not meet $\\ell$ inside the disk. The circle centered at $(-1,5/4)$ supplies the other limiting parallel through $P$, sharing the other endpoint $(-1,0)$. Thus each limiting line and $\\ell$ are distinct hyperbolic lines with one common ideal endpoint.


</details>

<a id="hyperbolic-geometry-ex-2"></a>
### Exercise 2
In the upper half-plane model, verify that the $y$-coordinate scaling $(x,y) \\mapsto (\\lambda x, \\lambda y)$ for $\\lambda > 0$ preserves hyperbolic distance.


<details>
<summary>Hint 1</summary>

Track numerator and denominator under scaling.

</details>
<details>
<summary>Hint 2</summary>

Both squared differences and the height product gain lambda².

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $z = x + iy$ and $w = u + iv$. Under scaling, $z' = \\lambda z$ and $w' = \\lambda w$. Then $\\operatorname{Im}(z') = \\lambda \\operatorname{Im}(z)$, $\\operatorname{Im}(w') = \\lambda \\operatorname{Im}(w)$, and $|z'-w'| = \\lambda|z-w|$. Substituting into the distance formula:
$$d(z',w') = \\operatorname{arccosh}\\!\\left(1 + \\frac{\\lambda^{2}|z-w|^{2}}{2\\lambda^{2}\\operatorname{Im}(z)\\operatorname{Im}(w)}\\right)
           = d(z,w).$$
Hence the scaling is a hyperbolic isometry.


</details>

<a id="hyperbolic-geometry-ex-3"></a>
### Exercise 3
A hyperbolic triangle has angles $\\pi/4$, $\\pi/3$, and $\\pi/6$. Compute its area in the curvature $-1$ upper half-plane model.


<details>
<summary>Hint 1</summary>

Add the three angles exactly.

</details>
<details>
<summary>Hint 2</summary>

Subtract their sum from pi for curvature -1.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The angle sum is $\\pi/4 + \\pi/3 + \\pi/6 = (3+4+2)\\pi/12 = 9\\pi/12 = 3\\pi/4$. The area is
$$\\pi - \\frac{3\\pi}{4} = \\frac{\\pi}{4} \\approx 0.7854.$$


</details>

<a id="hyperbolic-geometry-ex-4"></a>
### Exercise 4
Prove that in hyperbolic geometry the angle sum of a convex geodesic quadrilateral is strictly less than $2\\pi$.


<details>
<summary>Hint 1</summary>

Use a diagonal inside the convex quadrilateral.

</details>
<details>
<summary>Hint 2</summary>

Add the two triangle angle-sum inequalities.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $ABCD$ be a convex geodesic quadrilateral. Draw diagonal $AC$, which lies inside and divides it into $\\triangle ABC$ and $\\triangle ADC$. Each triangle has angle sum $< \\pi$ by the hyperbolic angle-sum theorem. Adding the two inequalities gives $\\angle A + \\angle B + \\angle C + \\angle D < 2\\pi$. Equality is impossible because it would require both triangles to have angle sum $\\pi$, which contradicts the hyperbolic parallel axiom. A nonconvex or self-intersecting four-vertex path needs a separate directed-angle convention and triangulation.


</details>

## Further exercises

<a id="hyperbolic-geometry-ex-5"></a>
### Exercise 9.5

Derive distance from zero to radius r using the length rule.

<details>
<summary>Hint 1</summary>

Integrate along a radial segment.

</details>

<details>
<summary>Hint 2</summary>

For other paths compare radial speed with full speed.

</details>

<details>
<summary>Full solution</summary>

The radial integral is ∫0^r 2 ds/(1-s²)=log((1+r)/(1-r)). For any path, |rho'|<=|gamma'| gives length at least the absolute change of that radial antiderivative, using limits at rho=0 if necessary. The radial monotone segment attains the bound.

</details>

<a id="hyperbolic-geometry-ex-6"></a>
### Exercise 9.6

Compute distance between real disk points 0 and 3/5.

<details>
<summary>Hint 1</summary>

Use the radial logarithm.

</details>

<details>
<summary>Hint 2</summary>

Both 1+r and 1-r are positive.

</details>

<details>
<summary>Full solution</summary>

The distance is log((8/5)/(2/5))=log4. It is finite because 3/5 is interior. The same formula diverges as r tends to one, illustrating why the unit boundary is ideal rather than an included line of points.

</details>

<a id="hyperbolic-geometry-ex-7"></a>
### Exercise 9.7

Prove the Klein image of an orthogonal circle is a line chord.

<details>
<summary>Hint 1</summary>

Write its equation as 2 Re(bar c z)=1+|z|².

</details>

<details>
<summary>Hint 2</summary>

Substitute the Klein map.

</details>

<details>
<summary>Full solution</summary>

For a circle centered c with radius squared |c|²-1, expansion gives the stated equation. Thus Re(bar c k(z))=1. The radial map is a disk bijection, so its geodesic arc maps precisely to the corresponding Euclidean chord. It preserves incidence and betweenness, not generally angles.

</details>

<a id="hyperbolic-geometry-ex-8"></a>
### Exercise 9.8

Check the disk automorphism inverse and explain why there is no interior pole.

<details>
<summary>Hint 1</summary>

Solve w=(z-a)/(1-bar a z).

</details>

<details>
<summary>Hint 2</summary>

Use |a z|<1.

</details>

<details>
<summary>Full solution</summary>

Rearranging gives z=(w+a)/(1+bar a w). Neither denominator vanishes for interior arguments because the relevant product modulus is less than one. The displayed modulus identity proves both maps stay in the disk, so this is a genuine bijection rather than only a formal fraction.

</details>

<a id="hyperbolic-geometry-ex-9"></a>
### Exercise 9.9

A triangle has defect pi/8 at curvature -9. Find its area.

<details>
<summary>Hint 1</summary>

Use the curvature scale.

</details>

<details>
<summary>Hint 2</summary>

The normalized area is divided by nine.

</details>

<details>
<summary>Full solution</summary>

Its area is pi/72. The angle defect is dimensionless, while Gaussian curvature has inverse-area units; this scaling makes their ratio an area. The curvature -1 formula without its scale would give a different geometry.

</details>

<a id="hyperbolic-geometry-ex-10"></a>
### Exercise 9.10

Why does the model proof use both the conformal disk and straight-chord Klein coordinates?

<details>
<summary>Hint 1</summary>

Different maps preserve different visible structures.

</details>

<details>
<summary>Hint 2</summary>

Keep the metric assigned to the model separate from a drawing.

</details>

<details>
<summary>Full solution</summary>

The conformal disk makes Euclidean tangent angles equal to hyperbolic angles and supports the length rule. The Klein map straightens lines and intervals, making incidence, betweenness and Pasch transparent. It is not angle preserving in general, so Euclidean angle measurements in the Klein drawing cannot replace the disk's metric angles.

</details>

## Forward and backward connections

This chapter continues the progression from **Neutral Geometry** by adding the hyperbolic parallel axiom. The contrast with Euclidean results (no rectangles, angle defect equals area, similarity implies congruence) is sharp. The next chapter, **Elliptic Geometry**, explores the opposite modification: no parallels exist, and angle sums exceed $\\pi$. The model-building skills practiced here (Poincar\\'{e} disk, upper half-plane) reappear in **Projective Planes** when homogeneous coordinates are introduced.

## Sources

The full metric and model arguments are supplied here. The preserved [Hyperbolic Models seed](../conics-solids-projections/hyperbolic-models.md) remains intact, including its hyperboloid discussion. A further intrinsic treatment is [Surfaces of Constant Curvature and the Hyperbolic Plane](../differential-geometry-curves-surfaces/constant-curvature-hyperbolic-plane.md). Primary-author comparison: [Nigel Hitchin, Projective Geometry notes](https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Projective_geometry/Chapter_1_Projective_geometry.pdf).

## Summary

The Poincare length rule yields explicit disk isometries, unique geodesic segments, and exact distance formulas. Klein coordinates prove the line-order structure, while conformality and normalization prove congruence. The half-plane map is an isometry, and complete algebra and boundary integration prove the trigonometric and area identities. Ideal boundary points remain excluded throughout; the hyperbolic model changes parallel uniqueness while retaining the stated neutral structure.
`;export{e as default};