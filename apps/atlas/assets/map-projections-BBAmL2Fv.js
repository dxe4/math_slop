var e=`---
parent_id: book-conics-solids-projections
chapter_id: map-projections
title: "Map Projections"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Map Projections

No flat map can represent the entire sphere without distortion. The task of cartography is to choose a projection that preserves the properties most important for the map's purpose: shape, area, distance, or direction. This chapter surveys the major families of map projections, derives their coordinate formulas, quantifies their distortions, and explains how to select a projection for a given application.

This L2 chapter uses a spherical Earth model of radius R, not an ellipsoid or a geodetic reference frame. Displayed cylindrical formulas initially use R equal to one; multiply both plane coordinates by R for physical lengths on a radius-R sphere. Longitude is measured on a chosen open interval with a declared cut, and latitude lies strictly between the poles unless an endpoint limit is discussed. Differentiation and two-variable area change are the analytic inputs.

## The impossibility of a perfect map

There is no smooth local isometry from a nonempty open patch of a positive-radius sphere to a Euclidean plane. This is a consequence of Gaussian curvature being invariant under local isometries: the sphere has curvature $1/R^2$ and the plane zero. The curvature-invariance theorem is an explicitly imported input from [Theorema Egregium](../../differential-geometry-curves-surfaces/theorema-egregium.md), not proved by a distorted map example. Any projection must distort at least one of: angles, areas, or distances. The choice of projection is therefore a compromise, and understanding the nature of the compromise is essential for informed map reading.

## Cylindrical projections

A cylindrical projection uses an unrolled-cylinder coordinate pattern. This need not be a literal central projection onto a physical cylinder: the latitude formula is chosen to achieve a mathematical property. The standard parallels are usually the equator or two symmetric parallels.

### Mercator projection

The Mercator projection is conformal: it preserves angles. A straight line on a Mercator map is a loxodrome, a path of constant bearing. The projection is defined by

$$X=\\lambda,\\qquad Y=\\ln\\tan\\left(\\frac{\\phi}{2}+\\frac{\\pi}{4}\\right),$$

where $\\lambda$ is longitude and $\\phi$ is latitude. The scale factor at latitude $\\phi$ is $\\sec\\phi$, so areas near the poles are greatly exaggerated. Greenland appears larger than it is relative to equatorial regions.

### Derive Mercator from the desired metric property

The latitude-longitude sphere parametrization is $R(\\cos\\phi\\cos\\lambda,\\cos\\phi\\sin\\lambda,\\sin\\phi)$. Differentiating shows that its coordinate vectors are perpendicular, with lengths $R\\cos\\phi$ and R. Thus

$$ds^2=R^2\\cos^2\\phi\\,d\\lambda^2+R^2d\\phi^2.$$

Seek a cylindrical map $X=R(\\lambda-\\lambda_0)$, $Y=RF(\\phi)$. Its parallel scale is $\\sec\\phi$ and meridional scale is $|F'(\\phi)|$, with perpendicular coordinate directions. Conformality and increasing latitude therefore require $F'=\\sec\\phi$. Integrating, and choosing the equator to map to height zero, gives $F=\\log\\tan(\\pi/4+\\phi/2)$. The logarithm's argument is positive precisely on the stated open latitude interval. This proves the formula and conformality rather than assuming the name Mercator guarantees them.

The area scale is $\\sec^2\\phi$. Neither pole has a finite image, and the longitude cut prevents a single-valued map from identifying both copies of its boundary meridian. A constant bearing relative to north has $\\tan\\beta=\\cos\\phi\\,d\\lambda/d\\phi$ where the denominator is nonzero. On the map this equals $dX/dY$, so such curves become straight lines. East-west parallels and north-south meridians supply the limiting directions. This is a bearing theorem, not a theorem that straight mapped routes are all shortest spherical paths.

### Equal-area cylindrical projections

The Lambert cylindrical equal-area projection uses

$$X=\\lambda\\cos\\phi_{0},\\qquad Y=\\sin\\phi/\\cos\\phi_{0},$$

where $\\phi_{0}$ is the standard parallel. This projection preserves areas but distorts shapes, especially away from the standard parallel. Require $|\\phi_0|<\\pi/2$ so the denominator is nonzero. Its parallel scale is $\\cos\\phi_0/\\cos\\phi$ and its meridional scale is the reciprocal. Their product is one and the image grid is perpendicular, proving equal-area behavior. They are both one at the two latitudes with $|\\phi|=|\\phi_0|$. At other regular points the unequal factors show why area preservation does not imply angle preservation.

## Azimuthal projections

An azimuthal projection maps the sphere to a plane tangent at a point, with azimuths (directions from the center) preserved.

### Stereographic projection

As proved in Stereographic Projection, stereographic projection is azimuthal and conformal. It is widely used for polar maps and for navigation in high latitudes.

### Orthographic projection

The orthographic projection maps each point to the tangent plane by dropping a perpendicular. It is the view of the sphere from infinity. At angular distance $\\theta$ from the center, the projected radius is $R\\sin\\theta$, so the finite radial ratio to spherical distance is $\\sin\\theta/\\theta$; the local radial scale is $\\cos\\theta$. It is neither conformal nor equal-area, but it gives a realistic globe-like appearance.

### Azimuthal equidistant projection

This projection preserves distances from the center point. The radial coordinate is $r=R\\theta$, where $\\theta$ is the angular distance from the center. It is useful for showing air routes from a central airport or missile ranges from a launch site.

## Conic projections

A conic projection maps the sphere to a cone tangent along one standard parallel or secant through two standard parallels. It is especially suitable for mid-latitude regions with east-west extent.

### Lambert conformal conic

This projection is conformal and uses a cone tangent at one standard parallel or secant through two standard parallels. The scale is true along the standard parallels and departs from one away from them; in a secant case it can be below one between the two standard parallels. Its conformal property supports local bearing and angle work, with scale controlled by the chosen parallels.

### Albers equal-area conic

This projection is equal-area and uses two standard parallels. It is widely used for thematic maps of the United States because it preserves area ratios while minimizing shape distortion in the mid-latitudes.

## Pseudocylindrical and compromise projections

### Sinusoidal projection

The sinusoidal projection is pseudocylindrical and equal-area. Its equations are

$$X=(\\lambda-\\lambda_{0})\\cos\\phi,\\qquad Y=\\phi.$$

Parallels are straight horizontal lines spaced equally, and meridians are sinusoidal curves. It preserves area but distorts shape, especially near the edges.

### Robinson projection

The Robinson projection is a compromise projection that does not preserve any single property exactly but aims for a visually pleasing balance of distortions. Its latitude-dependent construction is a selected compromise, not an exact area, angle or distance theorem.

### Winkel tripel projection

The Winkel tripel is the arithmetic mean of the Aitoff projection and the equidistant cylindrical projection. It balances several distortion criteria under a stated choice of its standard parallel; a claim of optimality would require specifying a distortion functional and region.

### A common azimuthal derivation exposes the domains

Use polar angle theta from the map center and azimuth alpha around it. The sphere metric is $R^2d\\theta^2+R^2\\sin^2\\theta\\,d\\alpha^2$. A radial map with plane radius $\\rho(\\theta)$ has local radial scale $\\rho'/R$ and tangential scale $\\rho/(R\\sin\\theta)$, on an interval where the radius is increasing. These follow by comparing the lengths of meridian and parallel tangent vectors, not by dividing finite map radius by finite spherical distance.

For orthographic projection, $\\rho=R\\sin\\theta$ gives scales cosine theta and one. It is one-to-one only on the chosen open visible hemisphere; at its limb the differential loses radial rank, and continuing to the far hemisphere folds points together. For azimuthal equidistant projection, $\\rho=R\\theta$ gives scales one and $\\theta/\\sin\\theta$. Only center-to-point distances are preserved. The antipode has no unique azimuth, so it is excluded rather than assigned an entire circle of ordinary images.

Requiring equal radial and tangential scales gives $\\rho'=\\rho/\\sin\\theta$. With unit scale at the center the solution is $\\rho=2R\\tan(\\theta/2)$, the tangent-plane stereographic convention. Both scales are $\\sec^2(\\theta/2)$, confirming conformality; the antipode is omitted. The earlier equatorial target plane used half this radius. Moving the target plane changes a uniform picture scale, so its numerical factors cannot be copied without checking the convention.

Requiring area scale one instead gives $\\rho\\rho'=R^2\\sin\\theta$. With zero radius at the center this yields $\\rho=2R\\sin(\\theta/2)$, the Lambert azimuthal equal-area map. Its radial and tangential scales are cosine theta-over-two and its reciprocal. Their product is one but they disagree away from the center, so this map is not conformal there. The antipode again lacks a unique azimuth. Polar formulas at the center are interpreted through their common finite limits, not by dividing zero by zero.

## Measuring distortion

The Tissot indicatrix is a tool for visualizing distortion at a point. It is the image of an infinitesimal circle on the sphere under the projection. In a conformal projection, the indicatrix is a circle (angle-preserving). In an equal-area projection, the indicatrix has constant area. In general, it is an ellipse whose semiaxes show the scale distortion in orthogonal directions.

The local scale factors $h$ and $k$ in the meridional and parallel directions, and the angle $\\theta'$ between their images, determine distortion. These source directions are orthonormal only after dividing the coordinate vectors by their spherical lengths. The determinant area rule then gives $hk|\\sin\\theta'|$. For the regular orientation conventions used here the sine is positive. For a conformal projection, $h=k$ and $\\theta'=\\pi/2$. For an equal-area projection, $hk\\sin\\theta'=1$.

### Worked example 1: Mercator scale is local and latitude dependent

At latitude thirty degrees the Mercator length scale in every tangent direction is two divided by the square root of three. Its area scale is four thirds. At latitude sixty degrees the corresponding values are two and four. A small region near the latter latitude is therefore enlarged fourfold in area relative to an equal spherical region at the equator, to first order. A region spanning many latitudes requires integrating the varying area factor; multiplying its total area by one selected latitude's factor would not be an exact global calculation. The common length factor preserves tangent angles even when it differs from one.

### Worked example 2: sinusoidal area preservation with a skew image grid

At longitude offset a from the central meridian, the normalized parallel tangent maps to $(1,0)$ and the normalized meridional tangent maps to $(-a\\sin\\phi,1)$ for the unit-sphere sinusoidal formula. Their determinant is one, proving equal-area behavior directly. But their dot product is generally nonzero.

For offset one radian and latitude thirty degrees, the two vectors are $(1,0)$ and $(-1/2,1)$. Their lengths are one and the square root of five divided by two. The image-grid angle has sine two divided by the square root of five, so the area product including that sine is one. Omitting the sine would falsely report area enlargement. These grid directions are not generally the Tissot ellipse's principal directions; those are orthogonal directions obtained from the differential's symmetric Gram matrix.

### Worked example 3: equal radial distances do not give equal areas

For an azimuthal equidistant map at central angle pi over two, radial scale is one while tangential scale is pi over two. The area scale is therefore pi over two. A center-to-point distance is still exactly R times pi over two, but nearby sideways distances are enlarged. The Lambert azimuthal equal-area map at that angle instead has radial scale one over the square root of two and tangential scale the square root of two. Its area factor is one but its radial distance does not agree with the equidistant map. Each construction satisfies its own named property, and neither satisfies the other's merely because both are azimuthal.

### The angular-distortion formula used in Exercise 6

For a regular differential, rotate source and target orthonormal bases so it scales two perpendicular directions by positive amounts a and b, with a at least b. Such bases exist by the real symmetric spectral theorem applied to its Gram matrix. A ray at angle u maps to angle $v=\\arctan((b/a)\\tan u)$, with the continuous angular branch understood. The change v minus u has extrema where the angular derivative is one, namely $\\tan^2u=a/b$. Its largest absolute value is $2\\arctan\\sqrt{a/b}-\\pi/2$. Symmetry gives opposite extrema, so the greatest change of an angle between two rays is twice that value. Writing it as omega gives

$$\\sin(\\omega/2)=\\frac{a-b}{a+b}.$$

When a equals b this is zero. As b decreases to zero the limiting maximum tends to pi, but the rank-deficient endpoint is no longer a regular distortion ellipse. This is the precise local convention used below; it is not a statement about the angle between two distant finite map paths.

## Common errors

- **Using Mercator for area comparison.** Because Mercator exaggerates high latitudes, it is misleading for comparing the sizes of countries at different latitudes.
- **Assuming straight lines are great circles.** On most projections, straight lines are not great circles. The gnomonic projection is the exception.
- **Ignoring the standard parallels.** The choice of standard parallels affects the pattern of distortion in conic and cylindrical projections.
- **Using a global projection for a local map.** A projection optimized for the whole world may have unacceptable distortion at the scale of a city or region.

## Practice exercises with solutions

### Exercise 1

<span id="conics-maps-ex-1"></span>
Find the Mercator projection coordinates for a point at latitude $\\phi=\\pi/4$ and longitude $\\lambda=\\pi/6$, using a unit sphere.

<details><summary>Hint 1</summary>

Use radians and the unit-sphere formula as stated.

</details>

<details><summary>Hint 2</summary>

The exact tangent of three pi over eight is one plus the square root of two.

</details>

<details><summary>Full solution</summary>

**Solution.** $X=\\lambda=\\pi/6\\approx 0.5236$. $Y=\\ln\\tan(\\pi/8+\\pi/4)=\\ln\\tan(3\\pi/8)\\approx\\ln(2.4142)\\approx 0.8814$.

</details>

### Exercise 2

<span id="conics-maps-ex-2"></span>
At what latitude is the area scale factor of the Mercator projection equal to $4$?

<details><summary>Hint 1</summary>

Conformality gives the same length scale in two perpendicular directions.

</details>

<details><summary>Hint 2</summary>

Square secant latitude and retain both latitude signs.

</details>

<details><summary>Full solution</summary>

**Solution.** The area scale factor of Mercator is $(\\sec\\phi)^{2}$. Setting $\\sec^{2}\\phi=4$ gives $\\cos^{2}\\phi=1/4$, so $|\\cos\\phi|=1/2$. In the usual latitude interval $[-\\pi/2,\\pi/2]$, the two answers are $\\phi=\\pm\\pi/3=\\pm60^{\\circ}$.

</details>

### Exercise 3

<span id="conics-maps-ex-3"></span>
In the azimuthal equidistant projection centered at the north pole, what happens at the south pole?

<details><summary>Hint 1</summary>

At the antipode the radius has a limit but longitude no longer supplies a unique azimuth.

</details>

<details><summary>Hint 2</summary>

Compare limits along two different meridians.

</details>

<details><summary>Full solution</summary>

**Solution.** Approaching the south pole along a meridian gives radial coordinate $r=R\\pi$, but the azimuth depends on the meridian. The antipode has no unique azimuth and therefore no single planar image in the usual projection. The boundary circle of radius $R\\pi$ records directional limits, not multiple images of one mapped point.

</details>

### Exercise 4

<span id="conics-maps-ex-4"></span>
Show that the sinusoidal projection is equal-area.

<details><summary>Hint 1</summary>

Compare the full two-variable Jacobian with spherical area density.

</details>

<details><summary>Hint 2</summary>

For general R multiply both target coordinates by R before comparing physical areas.

</details>

<details><summary>Full solution</summary>

**Solution.** The element of area on the sphere is $dA=R^{2}\\cos\\phi\\,d\\phi\\,d\\lambda$. In the sinusoidal projection, $X=(\\lambda-\\lambda_{0})\\cos\\phi$ and $Y=\\phi$. The Jacobian is

$$J=\\det\\begin{pmatrix}\\frac{\\partial X}{\\partial\\lambda}&\\frac{\\partial X}{\\partial\\phi}\\\\\\frac{\\partial Y}{\\partial\\lambda}&\\frac{\\partial Y}{\\partial\\phi}\\end{pmatrix}=\\det\\begin{pmatrix}\\cos\\phi&-(\\lambda-\\lambda_{0})\\sin\\phi\\\\0&1\\end{pmatrix}=\\cos\\phi.$$

The area element in the plane is $dA'=\\lvert J\\rvert\\,d\\lambda\\,d\\phi=\\cos\\phi\\,d\\lambda\\,d\\phi$. For the displayed unit-sphere convention R equals one, this matches the spherical area element exactly. On a radius-R sphere multiply both plane coordinates by R; the planar Jacobian then also gains the factor $R^2$, giving exact equality of physical area elements. Thus the projection is equal-area under either consistently stated convention.

</details>

### Exercise 5

<span id="conics-maps-ex-5"></span>
A conic projection is tangent to the sphere at latitude $\\phi_{0}=30^{\\circ}$. Find the cone's apex angle.

<details><summary>Hint 1</summary>

Use the right triangle between the cone apex, contact point and axis.

</details>

<details><summary>Hint 2</summary>

The slant height and contact-circle radius determine the sine of the half-angle.

</details>

<details><summary>Full solution</summary>

**Solution.** The cone is tangent along the parallel at $\\phi_{0}$. The radius of this parallel on the unit sphere is $\\cos\\phi_{0}=\\cos 30^{\\circ}=\\sqrt{3}/2$. The slant height of the cone from the apex to the tangent parallel is $\\cot\\phi_{0}=\\cot 30^{\\circ}=\\sqrt{3}$. The half-angle $\\alpha$ of the cone satisfies $\\sin\\alpha=\\cos\\phi_{0}/\\cot\\phi_{0}=\\cos\\phi_{0}\\tan\\phi_{0}=\\sin\\phi_{0}=1/2$. So $\\alpha=\\pi/6=30^{\\circ}$, and the full apex angle is $2\\alpha=\\pi/3=60^{\\circ}$.

</details>

### Exercise 6

<span id="conics-maps-ex-6"></span>
Compare the maximum angular distortion of Mercator with the north-pole-centered orthographic projection at latitude $\\phi=45^{\\circ}$ (so central angle $\\theta=45^{\\circ}$).

<details><summary>Hint 1</summary>

Use the orthographic radial and tangential differential scales.

</details>

<details><summary>Hint 2</summary>

Insert the ratio of their difference to their sum into the derived angular formula.

</details>

<details><summary>Full solution</summary>

**Solution.** Mercator is conformal, so its angular distortion is $0$ everywhere. For the orthographic projection, the maximum angular distortion $\\omega$ at angular distance $\\theta$ from the center is given by $\\sin(\\omega/2)=\\lvert (a-b)/(a+b)\\rvert$, where $a$ and $b$ are the semiaxes of the Tissot indicatrix. For orthographic, $a=1$ and $b=\\cos\\theta$. At the edge of the visible hemisphere ($\\theta=\\pi/2$), $b=0$ and the limiting maximum angular deformation is $\\omega=\\pi$. At $\\phi=45^{\\circ}$ from the center, $\\theta=\\pi/4$, $b=\\sqrt{2}/2$, and

$$\\sin\\frac{\\omega}{2}=\\frac{1-\\sqrt{2}/2}{1+\\sqrt{2}/2}=\\frac{2-\\sqrt{2}}{2+\\sqrt{2}}=\\frac{(2-\\sqrt{2})^{2}}{4-2}=\\frac{6-4\\sqrt{2}}{2}=3-2\\sqrt{2}\\approx 0.1716.$$

So $\\omega\\approx 2\\arcsin(0.1716)\\approx 0.344$ rad $\\approx 19.7^{\\circ}$.

</details>


### Exercise 7

<span id="conics-maps-ex-7"></span>

Use Lambert cylindrical equal-area with standard parallel thirty degrees. Find its parallel and meridional scales at latitude sixty degrees. Is it conformal there?

<details><summary>Hint 1</summary>

Divide cosine thirty degrees by cosine sixty degrees for the parallel scale.

</details>

<details><summary>Hint 2</summary>

The meridional scale is its reciprocal, and the mapped coordinate directions are perpendicular.

</details>

<details><summary>Full solution</summary>

The parallel scale is the square root of three and the meridional scale its reciprocal. Their product is one, so local area is preserved. They are unequal, so the differential is not a common scalar times an orthogonal map and angles are not all preserved. At the standard parallel both scales instead equal one. A projection can be locally conformal at selected latitudes without being conformal throughout its domain; the property must be stated on its actual range of points.

</details>

### Exercise 8

<span id="conics-maps-ex-8"></span>

For orthographic projection at central angle pi over three, compute the local radial scale, tangential scale and area scale. Compare the local radial scale with the ratio of finite map radius to center-to-point spherical distance.

<details><summary>Hint 1</summary>

The radial formula is R times sine theta; differentiate before computing local scale.

</details>

<details><summary>Hint 2</summary>

The finite ratio is sine theta divided by theta, not its derivative.

</details>

<details><summary>Full solution</summary>

The local radial scale is one half, tangential scale one and area scale one half. The finite radial ratio is $3\\sqrt3/(2\\pi)$, which differs from one half. The local scale measures a small radial displacement near the chosen point. The finite ratio compares the complete radius segment from the center, averaging varying radial scale along that segment. Confusing these quantities would assign a wrong Tissot ellipse even though the radius formula itself was correct. This central angle lies strictly within the visible hemisphere, so the differential is regular there.

</details>

### Exercise 9

<span id="conics-maps-ex-9"></span>

At central angle pi over two, compare the radii and the two local scales of Lambert azimuthal equal-area and azimuthal equidistant. Which preserves areas there, and which preserves the full center distance?

<details><summary>Hint 1</summary>

Use the radial formulas twice R times sine theta-over-two and R times theta.

</details>

<details><summary>Hint 2</summary>

For the equal-area map the two scales are reciprocal; for the equidistant map the radial scale is one.

</details>

<details><summary>Full solution</summary>

The Lambert radius is the square root of two times R, with scales one over the square root of two radially and the square root of two tangentially. Their product is one. The equidistant radius is pi R divided by two, exactly the spherical center distance, with scales one radially and pi over two tangentially. Its area scale is pi over two. Both preserve azimuth from the center but answer different measurement questions. Neither of these scale pairs has equal entries, so neither map is conformal at this chosen noncentral point.

</details>

### Exercise 10

<span id="conics-maps-ex-10"></span>

Determine all regular points where the unit-sphere sinusoidal map is conformal, using the normalized tangent vectors from Worked example 2. Keep the longitude cut and excluded poles understood.

<details><summary>Hint 1</summary>

One tangent image is $(1,0)$, the other $(-a\\sin\\phi,1)$.

</details>

<details><summary>Hint 2</summary>

Conformality requires perpendicular images with equal lengths, which here happens exactly when the shear entry vanishes.

</details>

<details><summary>Full solution</summary>

The two conditions are equivalent to $a\\sin\\phi=0$. Within the stated latitude interval this means either longitude offset zero, the central meridian, or latitude zero, the equator. At those points both normalized tangent images have unit length and are perpendicular, so the differential is locally an isometry. Elsewhere the shear gives unequal lengths and a nonright angle, precluding conformality. Equal-area behavior holds throughout the regular domain independently. Local isometry at selected curves of points does not contradict the curvature obstruction, which rules out a local isometry on a nonempty open sphere patch.

</details>

## Looking backward and forward

This chapter surveyed the major families of map projections and quantified their distortions. No projection is perfect; the choice depends on the map's purpose and the region being mapped. The fundamental impossibility of a distortion-free flat map is a consequence of the sphere's positive curvature.

The next chapter, **Applications and Synthesis**, asks how exact geometric models support specified optical, orbital, positioning and design questions. The earlier geometric-art reading remains an optional companion rather than the next required chapter.

## Source and scope

The original Atlas map-projection reading and its six exercise identities/solutions are retained, with the sphere-radius convention made consistent. New derivations supply the metric, cylindrical conformity/area factors, azimuthal differential scales and the angular-distortion formula, with three worked comparisons and four new supported exercises. Curvature invariance under local isometry is explicitly imported from Differential Geometry; the map examples do not prove it. The bibliography's Snyder reference provides a cartographic continuation. This chapter does not certify ellipsoidal coordinates, current chart standards or any institution's present projection choices.
`;export{e as default};