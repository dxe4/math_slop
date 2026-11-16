var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: constant-curvature-hyperbolic-plane
title: "Surfaces of Constant Curvature and the Hyperbolic Plane"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Surfaces of Constant Curvature and the Hyperbolic Plane

A surface of constant Gaussian curvature has the same local curvature value at every point. The plane, sphere, and hyperbolic plane are the basic metric models for zero, positive, and negative values. Their visible placement in three-space is not the definition: a metric can be taught directly as a rule for measuring tangent lengths on a domain.

This chapter constructs the hyperbolic metric, computes its curvature, and proves its geodesic and distance formulas. It also separates model calculations from classification. Knowing that a particular metric has constant curvature is not a proof that every metric of that curvature is globally the same surface.

The required tools are [Theorema Egregium](theorema-egregium.md), the geodesic equation, ordinary complex arithmetic for fractional linear maps, and [Gauss–Bonnet](gauss-bonnet.md). Complex notation z=x+iy is a convenient abbreviation for two real coordinates; no complex analysis course is assumed.

## 1. Metric models and scale

A positive metric $g_{ij}du^idu^j$ assigns squared length to every coordinate tangent vector. Length is the integral of its positive square root along a path. The Christoffel and curvature formulas derived earlier make sense for such coefficients even without a supplied embedding.

On the upper half-plane H={x+iy:y>0}, define
$ds^2=\\frac{dx^2+dy^2}{y^2}.$
Its conformal scale is lambda=1/y. Therefore
$K=-\\lambda^{-2}\\Delta\\log\\lambda
=-y^2\\Delta(-\\log y)=-1.$
Its area element is $dA=dx\\,dy/y^2$. Angles agree with Euclidean angles because multiplying an inner product by one positive factor preserves angle quotients at that point. Lengths and areas do not agree with their Euclidean values.

Multiplying a metric by a constant c² multiplies lengths by c and areas by c². The conformal curvature formula, or the general intrinsic formula, divides K by c². Thus
$(dx^2+dy^2)/(\\kappa^2y^2)$
has curvature $-\\kappa^2$ for positive kappa. The curvature normalization must accompany every hyperbolic length or area formula.

The real line y=0 is excluded. It is not a row of ordinary surface points where one may substitute into the denominator. Later we show that approaching it has infinite hyperbolic distance from any fixed interior point.

## 2. Isometries proved by differentiation

**Proposition 16.1.** A real fractional linear map
$T(z)=\\frac{az+b}{cz+d},\\qquad ad-bc=\\delta>0,$
is an isometry of the upper half-plane metric.

*Proof.* Direct subtraction from its complex conjugate gives
$\\operatorname{Im}T(z)=\\delta y/|cz+d|^2>0$.
Its derivative as a real conformal map has length scale
$|T'(z)|=\\delta/|cz+d|^2$, found by differentiating the quotient. Hence
$\\frac{|dT(z)|}{\\operatorname{Im}T(z)}
=\\frac{|dz|}{y}.$
It preserves the integrand of path length. Its inverse is another real fractional linear map with positive determinant, so it is a bijection and preserves the infimum of path lengths in both directions. $\\square$

Translations, positive dilations, and z↦-1/z are examples. Their Euclidean appearance can change size dramatically while their hyperbolic length effect is zero. A dilation multiplies both Euclidean displacement and height by the same factor, which explains the cancellation.

An isometry preserves the metric and therefore sends geodesics to geodesics, by the coordinate equation or the projected-variation characterization in corresponding coordinates. We will also prove minimizing properties directly rather than infer them merely from an appealing family of curves.

## 3. Vertical paths and all geodesic lines

**Lemma 16.2.** The distance between x0+iy1 and x0+iy2 is $|\\log(y2/y1)|$, realized by the monotone vertical segment.

*Proof.* Any piecewise-$C^1$ path (x(t),y(t)) joining them has length
$L=\\int\\frac{\\sqrt{x'^2+y'^2}}y\\,dt
\\ge\\int\\frac{|y'|}y\\,dt
\\ge\\left|\\int\\frac{y'}y\\,dt\\right|
=|\\log(y2/y1)|.$
The vertical monotone path attains equality. $\\square$

For distinct endpoints, equality requires x'=0 on smooth pieces and monotone logarithmic height, so the image of the minimizing path is exactly the vertical interval, with possible pauses or reparametrization.

**Theorem 16.3.** Distinct upper-half-plane points are joined by a unique minimizing path image. It is a vertical segment if their real parts agree; otherwise it is the segment of a Euclidean circle centered on the real axis joining them. The complete geodesic lines are the corresponding vertical lines and upper semicircles.

*Proof.* If z and w have different real parts, their equal-distance equation from a real center A gives
$A=\\frac{|z|^2-|w|^2}{2(\\operatorname{Re}z-\\operatorname{Re}w)}.$
Thus there is a unique real-axis-centered circle through them, of radius r>0. Its real endpoints are A-r and A+r. The fractional linear map
$T(\\zeta)=\\frac{\\zeta-(A-r)}{(A+r)-\\zeta}$
has determinant 2r>0. On that upper semicircle it takes purely imaginary positive values: its argument is a right angle, or this follows by substituting the circle equation. Therefore it sends the circular segment to a vertical interval.

By Proposition 16.1 and Lemma 16.2, that circular segment minimizes length, and any other minimizing path image would map to the same unique vertical interval. Hence it has the same image. The equal-real-part case is the lemma.

Vertical unit-speed parametrizations are gamma(t)=x0+iy0e^t. Substitution in the metric Christoffel equations verifies they are geodesics: the nonzero symbols are
$\\Gamma^x_{xy}=\\Gamma^x_{yx}=-1/y$,
$\\Gamma^y_{xx}=1/y$, and $\\Gamma^y_{yy}=-1/y$.
Their isometric circular images are geodesics too.

Finally every initial point and nonzero tangent direction is tangent to exactly one of these lines. A vertical direction determines a vertical line. Otherwise the condition that the circle radius be perpendicular to the tangent determines its real center uniquely. The local geodesic uniqueness theorem then identifies every geodesic with the appropriate model line. $\\square$

The orthogonality to the real axis is Euclidean orthogonality at the ideal endpoints. Those endpoints do not lie in H. The geodesic line is its interior arc, extended for all hyperbolic time, not an included closed semicircle.

## 4. The full distance formula

**Theorem 16.4.** For z,w in H,
$\\cosh d_H(z,w)=1+\\frac{|z-w|^2}{2\\,\\operatorname{Im}z\\,\\operatorname{Im}w}.$

*Proof.* Define the expression on the right to be Q(z,w). For the map in Proposition 16.1, direct subtraction gives
$|T(z)-T(w)|^2
=\\frac{\\delta^2|z-w|^2}{|cz+d|^2|cw+d|^2}.$
The product of transformed imaginary parts has exactly the same multiplicative factor. Hence Q is invariant under every such isometry.

Map the unique geodesic line through the points to a vertical line, using the preceding construction if needed. On a vertical line the distance is $|\\log(y2/y1)|$, whose hyperbolic cosine is
$(y2/y1+y1/y2)/2
=1+\\frac{(y2-y1)^2}{2y1y2}.$
This equals Q in that case. Invariance of Q and of distance proves the general identity. Equal points give Q=1 and distance zero directly. $\\square$

The formula is an exact consequence of length minimization, not a definition selected to match a picture. Because cosh is strictly increasing on nonnegative real arguments, it determines the nonnegative distance uniquely.

The earlier [curved metric computation chapter](../analytic-computational-geometry/curved-metric-computation.md) discusses robust evaluation. Its distinction between a valid interior input and a floating-point issue remains important. Rewriting an inverse hyperbolic function can improve conditioning but cannot make a boundary point valid.

## 5. The disk model

The Cayley map $w=(z-i)/(z+i)$ takes H onto the open unit disk. Direct calculation gives
$1-|w|^2=\\frac{4y}{|z+i|^2},\\qquad
|dw|=\\frac{2|dz|}{|z+i|^2}.$
Consequently the transformed metric is
$ds^2=\\frac{4|dw|^2}{(1-|w|^2)^2}.$
This proves isometry of the two models by substitution. The positive scale also proves conformality of the disk.

For a radial interval from zero to radius r in (0,1), length is
$\\int_0^r\\frac{2\\,dt}{1-t^2}
=\\log\\frac{1+r}{1-r}.$
It is globally minimizing because the isometry takes it to an upper-half-plane geodesic. The boundary r=1 is infinitely far away; it is not a finite-distance circle of the model.

Fractional linear maps carry circles or lines to circles or lines and preserve angles where defined. This elementary fact follows by substituting the inverse map into a general circle equation and clearing its squared denominator. Thus the upper-half-plane geodesics become diameters and circle arcs orthogonal to the unit boundary. Generic Euclidean chords are not hyperbolic geodesics.

Substituting the Cayley identities into Theorem 16.4 gives the disk formula
$\\cosh d_D(u,v)
=1+\\frac{2|u-v|^2}{(1-|u|^2)(1-|v|^2)}.$
Its denominators must remain strictly positive. The formula agrees with the radial integral when u=0.

## 6. Completeness is an intrinsic statement

**Proposition 16.5.** The upper-half-plane hyperbolic distance is complete.

*Proof.* Let z_n=x_n+iy_n be hyperbolic Cauchy. The length inequality in Lemma 16.2, applied to any path, gives
$|\\log y_n-\\log y_m|\\le d_H(z_n,z_m)$.
Thus log y_n is real Cauchy, so y_n tends to a finite positive value y and is bounded above by some M.

The distance formula gives
$|z_n-z_m|^2
=2y_ny_m(\\cosh d_H(z_n,z_m)-1)
\\le2M^2(\\cosh d_H(z_n,z_m)-1).$
Its right side tends uniformly to zero for sufficiently late n,m. Hence the sequence is Euclidean Cauchy and has a Euclidean limit z=x+iy with y>0. Applying the same distance formula to z_n and z shows hyperbolic distance tends to zero. Therefore the limit lies in H and the metric is complete. $\\square$

Euclidean boundedness of the disk does not make it hyperbolically bounded. Completeness belongs to the metric, not to whether the picture fits on a page. The model is intrinsic: no embedding of the entire hyperbolic plane in ordinary three-space has been supplied or assumed.

## 7. Constant curvature, triangles, and classification boundaries

For a simple geodesic triangle bounding a compact disk in curvature K=-kappa², Gauss–Bonnet gives
$\\operatorname{Area}=\\frac{\\pi-(A+B+C)}{\\kappa^2}.$
Indeed the edge kg terms vanish and the three exterior turns sum to $3\\pi-(A+B+C)$. Positive area forces the angle sum below pi. For a sphere of curvature 1/R², the corresponding formula is area=$R^2(A+B+C-\\pi)$ for an allowed spherical triangle region.

These are statements about regions with specified metric and boundaries. They do not by themselves prove all hyperbolic axioms or a classification of every constant-curvature surface. The existing [hyperbolic geometry chapter](../geometry-proof-reference/hyperbolic-geometry.md) supplies the axiomatic and trigonometric viewpoint by reference.

Within the special metric ansatz $ds^2+f(s)^2d\\theta^2$, constant K gives the ordinary equation f''+Kf=0. Its solutions are linear combinations of trigonometric functions for positive K, affine functions for zero K, and hyperbolic functions for negative K, subject to f>0. This classifies that coordinate ansatz on its domain, not all global surfaces.

Even zero curvature does not fix global geometry. A cylinder has closed nonconstant geodesics around its circular direction, while every nonconstant planar geodesic is an unclosed straight line. A global isometry would preserve geodesics and closedness, so these two K=0 surfaces are not globally isometric. A general local constant-curvature normal-form theorem and the global complete simply-connected classification are further results not proved or used here. No conclusion about global embedding or topology is inferred solely from one constant K.

## 8. Worked examples

### Worked example 1 — A radial disk distance

Take u=0 and v=3/5 on the real diameter of the unit disk. The radial integral gives
$d=\\log\\frac{1+3/5}{1-3/5}=\\log4.$
The disk formula gives cosh d=$1+2(9/25)/(16/25)=17/8$. Since cosh(log4)=(4+1/4)/2=17/8, both derivations agree. The ordinary Euclidean distance 3/5 does not measure this hyperbolic length.

### Worked example 2 — Two points at equal height

In H choose z=i and w=1+i. Their minimizing arc has real center 1/2 and radius sqrt5/2, found by the equal-radius equation. The distance formula gives cosh d=3/2, so
$d=\\log\\frac{3+\\sqrt5}{2}.$
The horizontal Euclidean segment has hyperbolic length one. The exact distance is smaller than one, consistent with the curved geodesic rising to a slightly greater height where Euclidean displacement costs less hyperbolic length.

### Worked example 3 — Triangle area and curvature scale

A curvature -1 geodesic triangle with angles pi/4,pi/4,pi/3 has angle sum 5pi/6 and area pi/6. If the metric is scaled so curvature becomes -4, lengths are halved and areas quartered, giving area pi/24 for corresponding angles.

Angles are unchanged by constant scaling, but the area formula includes the curvature scale. Using area=angle defect without stating K=-1 would miss this factor.

### Worked example 4 — A negative-curvature patch in three-space

The tractricoid patch
$X(u,v)=(\\operatorname{sech}u\\cos v,\\operatorname{sech}u\\sin v,u-\\tanh u),\\quad u>0,$
is taken with v in an open interval of length less than $2\\pi$ when a single injective patch is wanted. It has E=tanh²u,F=0,G=sech²u. Set a=tanh u,b=sech u in the orthogonal curvature formula. Since b_u/a=-sech u, its derivative is sech u tanh u, giving K=-1.

This regular patch is not the whole complete hyperbolic plane. The meridian distance from a positive u to the excluded value zero is $\\int_0^u\\tanh t\\,dt=\\log\\cosh u$, which is finite. Its restricted metric is incomplete. A local constant-curvature calculation must not be promoted to a global model identification.

## Exercises

<a id="constant-curvature-hyperbolic-plane-ex-1"></a>
### Exercise 16.1

Compute K of the upper-half-plane metric directly from the conformal formula.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use lambda=1/y.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Differentiate -log y twice.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The coordinate Laplacian of -log y is 1/y². Therefore K=-lambda^-2 Delta log lambda=-y²/y²=-1. The computation requires y>0, where the metric is positive and smooth.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-2"></a>
### Exercise 16.2

Prove that positive dilation z->az is an isometry for a>0.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Both displacement and height acquire the same factor.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the length integrands.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Under the map |dz| becomes a|dz| and y becomes ay. Their quotient remains |dz|/y, so every path retains length. The inverse dilation exists and has the same property, hence distances are preserved in both directions.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-3"></a>
### Exercise 16.3

Find distance from 2i to 10i and a unit-speed parametrization of the minimizing path.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use logarithmic height.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The real part is fixed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The distance is log(10/2)=log5. The path gamma(t)=2ie^t for 0<=t<=log5 has hyperbolic speed |gamma'|/Im gamma=1 and joins the endpoints. The length lower bound proves it minimizes.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-4"></a>
### Exercise 16.4

Find disk distance from zero to radius 1/3.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Integrate the radial metric or use its logarithmic formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Keep the boundary denominator positive.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The distance is log((1+1/3)/(1-1/3))=log2. It is finite because 1/3<1. As radius tends to one, the denominator tends to zero and this distance diverges.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-5"></a>
### Exercise 16.5

Calculate cosh d between i and 2+i.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use equal positive heights.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The Euclidean squared separation is four.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The formula gives cosh d=1+4/2=3, so d=arcosh3=log(3+sqrt8). Their unique geodesic arc is centered at real point one with radius sqrt2, not the horizontal Euclidean segment.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-6"></a>
### Exercise 16.6

Explain why a disk boundary point is not a finite-distance input.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect either the radial integral or the exact formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The model is the open disk.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For r approaching one, radial distance log((1+r)/(1-r)) diverges. At r=1 the metric denominator vanishes and the point is excluded from the domain. An arithmetic clamp cannot convert such an ideal boundary point into an interior point.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-7"></a>
### Exercise 16.7

A geodesic triangle has angle defect pi/5 in curvature -9. Find its area.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the scaled formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Kappa squared is nine.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The area is (pi/5)/9=pi/45. Angles are dimensionless, while curvature has inverse-area units. Omitting the curvature factor would implicitly assume the different normalization K=-1.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-8"></a>
### Exercise 16.8

Show the upper-half-plane circle through i and 1+i is orthogonal to the real axis.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Find its real center.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

At a real-axis endpoint its radius is horizontal.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The center is 1/2 and the radius sqrt5/2. Its two intersections with the real axis have horizontal radius vectors, so their circle tangents are vertical and hence perpendicular to the real axis. Only the upper open arc lies in the hyperbolic plane.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-9"></a>
### Exercise 16.9

Give a rigorous obstruction to a global isometry from a cylinder to a plane despite K=0 in both.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a geodesic property preserved by metric isometries.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare closed nonconstant geodesics.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

A circular cross-section of the cylinder is a closed nonconstant geodesic by unrolling coordinates. Every planar geodesic has affine coordinates and a nonconstant one cannot close. An isometry would carry the former to the latter while preserving its closedness, a contradiction.

</details>

<a id="constant-curvature-hyperbolic-plane-ex-10"></a>
### Exercise 16.10

Why does the tractricoid's K=-1 computation not establish completeness?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Its parameter boundary is excluded.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Integrate meridian length toward u=0.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The meridian length from epsilon to a fixed u is log cosh u-log cosh epsilon, with finite limit as epsilon decreases to zero. Choosing a sequence u_n->0 along the meridian gives an intrinsic Cauchy sequence with no point in the restricted patch as limit. Constant curvature is a local condition and does not prevent missing finite-distance ends.

</details>

## Sources

The exact metric calculations and proofs are supplied here. Primary-author comparison: [Peter Petersen, Classical Differential Geometry](https://www.math.ucla.edu/~petersen/DiffGeo.pdf), especially its intrinsic metric and geodesic sections, and [Anton Petrunin and Sergio Zamora Barrera](https://anton-petrunin.github.io/gauss/index.html). Preserved internal companions are [Hyperbolic Geometry](../geometry-proof-reference/hyperbolic-geometry.md) and [Curved Metric Computation](../analytic-computational-geometry/curved-metric-computation.md).

## Summary

The upper-half-plane metric and its disk transform have K=-1. Explicit fractional linear isometries reduce geodesic minimization to vertical paths and prove the exact distance formulas. The metric is complete even though its disk picture is Euclidean bounded. Gauss–Bonnet converts constant curvature into triangle area formulas with a necessary scale factor. These model proofs do not constitute a global classification of all constant-curvature surfaces.
`;export{e as default};