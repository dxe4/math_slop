var e=`---
id: visual-lab-conics-curved-geometry
title: "Conics & Curved Geometry Observatory"
level: undergraduate
estimated_minutes: 125
license: CC BY-SA 4.0
---

# Conics & Curved Geometry Observatory

This live laboratory joins two experiments that expose hidden assumptions in flat pictures:

1. construct ellipses, a parabola, and hyperbolas from one unsquared focus/directrix distance rule;
2. compare triangle side lengths, angles, and normalized area in spherical, Euclidean, and hyperbolic geometry.

Open the [live observatory](#/labs?lab=visual-lab-conics-curved-geometry). Every canvas state has a semantic numerical table, and the sanitized URL stores the instrument, parameters, and selected conic row.

## Instrument A: one rule, three conic families

The fixed focus is $F=(0,0)$ and directrix is the vertical line $x=1$. A point $P=(x,y)$ belongs to the conic when

$d(P,F)=e d(P,ℓ)$,

where

$d(P,F)=\\sqrt{x^{2}+y^{2}}$

and

$d(P,ℓ)=|x-1|$.

The positive eccentricity $e$ determines the type:

- $e<1$: ellipse;
- $e=1$: parabola;
- $e>1$: hyperbola.

The canvas draws the focus, directrix, sampled locus, and two distance segments for the selected point. The table reports both distances, their ratio, and signed residual

$d(P,F)-e d(P,ℓ)$.

This unsquared residual matters. The algebraic equation

$x^{2}+y^{2}=e^{2}(x-1)^{2}$

is equivalent here because both distances are nonnegative, but in a general derivation squaring a signed expression can admit extraneous points. A visual curve alone cannot audit that logical step.

## Exact parameterizations used by the engine

### Ellipse, $0<e<1$

Let $s=1-e^{2}$. Completing squares gives center and semiaxes

$h=-e^{2}/s$, $a=e/s$, $b=e/\\sqrt{s}$.

The deterministic points are

$x=h+a \\cos t$, $y=b \\sin t$.

For $e=1/2$, $h=-1/3$, $a=2/3$, and $b=1/\\sqrt{3}$. The axis vertices are $x=1/3$ and $x=-1$. At the first, focus distance is $1/3$ and directrix distance $2/3$, ratio $1/2$.

### Parabola, $e=1$

Squaring and cancelling $x^{2}$ gives

$y^{2}=1-2x$, so $x=(1-y^{2})/2$.

The vertex is $(1/2,0)$. At $y=2$, the point is $(-3/2,2)$: focus distance $5/2$, directrix distance $5/2$, so the equality holds without relying on pixel position.

### Hyperbola, $e>1$

Let $s=e^{2}-1$. Center and semiaxes are

$h=e^{2}/s$, $a=e/s$, $b=e/\\sqrt{s}$.

Both branches use

$x=h\\pm a cosh t$, $y=b sinh t$.

For $e=3/2$, $h=9/5$ and $a=6/5$, so the axis vertices are $3/5$ and $3$. Their focus/directrix ratios are respectively $(3/5)/(2/5)=3/2$ and $3/2=3/2$.

Near $e=1$, ellipse and hyperbola centers become very large. That is genuine geometry of this fixed focus/directrix placement and also a numerical warning: formulas with $1-e^{2}$ in the denominator are ill-conditioned near the parabolic boundary. The lab uses the exact $e=1$ formula rather than pretending one expression is stable everywhere.

## Guided conic experiments

### Experiment 1: classify without appearance

Move through eccentricities. Before reading the label, predict the class from whether $e$ is below, equal to, or above 1. Select several table rows and verify the ratio.

**Conclusion.** Classification comes from a distance invariant, while the plotted scale and crop can make a branch look deceptively circle-like or nearly straight.

### Experiment 2: inspect both hyperbola branches

Choose $e=1.5$ or $e=2$. Select a row on each branch. The same focus and directrix rule defines both. Dropping the absolute directrix distance would incorrectly privilege one side of the line.

### Experiment 3: distinguish a sample from the continuum

The line segments connecting deterministic sample points are a rendering approximation. The table checks only those rows. The parameterization proof establishes every real parameter point; neither 24 samples nor a smooth-looking curve proves there are no missing branches.

## Instrument B: normalized curvature triangles

The second instrument uses constant curvature $+1$, $0$, and $-1$. Its central comparison is

$angle \\sum - \\pi = K \\times area$

for the displayed geodesic families. For $K=+1$, angle excess equals area. For $K=-1$, negative difference means angle defect equals area. At $K=0$, a Euclidean triangle sums to exactly $\\pi$, but area is not determined by its angles.

Changing curvature scale would change the area factor. These values are normalized, not universal unit-free areas for every sphere or hyperbolic surface.

## Spherical family

On the unit sphere choose the North Pole and two equatorial points separated by longitude $\\varphi$. The two meridian sides each have length $\\pi /2$, while the equatorial side has length $\\varphi$. The equator meets each meridian at a right angle and the meridians meet at angle $\\varphi$, so

$angle \\sum=\\pi +\\varphi$, $area=\\varphi$.

The table derives lengths from unit-vector dot products:

$d(u,v)=arccos(u\\cdot v)$.

The canvas is an orthographic projection. It does not preserve every spherical length or area; the numerical table contains the intrinsic measurements.

### Experiment 4: excess grows with the wedge

Increase $\\varphi$ from 30° through 120°. Two angles stay 90°, the polar angle and excess increase together, and normalized area equals $\\varphi$ in radians. Do not substitute degree values directly into the area formula.

## Euclidean family

The Euclidean display uses a right triangle with base 1 and chosen acute angle $\\alpha$; its height is $\\tan \\alpha$. The angles are $90^{\\circ}$, $\\alpha$, and $90^{\\circ}-\\alpha$, so their sum remains 180° while area changes.

### Experiment 5: angles do not set Euclidean scale

Changing $\\alpha$ changes shape in this displayed family. Even after angles are fixed, multiplying both legs by a common factor creates similar noncongruent triangles with different areas. This is impossible in a fixed-curvature hyperbolic plane, where triangle angles determine side lengths.

## Hyperbolic family

In the Poincaré disk, choose

$O=(0,0)$, $A=(r,0)$, $B=(0,r)$, with $0<r<1$.

The geodesics $OA$ and $OB$ are diameters and meet at 90°. The third geodesic is a Euclidean circle orthogonal to the disk boundary, with center $(q,q)$ and radius $\\rho$:

$q=(1+r^{2})/(2r)$, $\\rho =\\sqrt{2q^{2}-1}$.

The table’s orthogonality identity is

$|(q,q)|^{2}-\\rho ^{2}=1$.

Because the model is conformal, the two remaining hyperbolic angles equal the Euclidean tangent angles in the drawing. Each has

$\\cos A=q/sqrt(q^{2}+(q-r)^{2})$.

The side distances use

$cosh d(u,v)=1+2\\lVert u-v\\rVert^{2}/[(1-\\lVert u\\rVert^{2})(1-\\lVert v\\rVert^{2})]$.

The boundary circle is not part of the hyperbolic plane. Euclidean distance to it shrinks while intrinsic distance diverges.

### Experiment 6: approach the boundary

Increase $r$. The nonright angles shrink, total angle sum falls below 180°, and defect/area grows. At small $r$, the triangle is nearly Euclidean because curvature effects are small at that scale. At $r\\to 1$, $A,B$ approach ideal boundary points; the displayed endpoints never equal 1.

## Table and keyboard operation

In conic view:

- Left/Right Arrow selects the previous or next sample;
- Up/Down Arrow changes eccentricity;
- Home/End selects the first or last row;
- table row buttons provide the same selection.

In curvature view:

- Left/Right Arrow cycles spherical, Euclidean, and hyperbolic geometry;
- Up/Down Arrow changes the family parameter;
- Home/End selects its minimum or maximum.

All controls are labeled native elements. A live status reads the selected distances or triangle angle sum. Redundant labels, line styles, and tables carry information beyond color. State changes redraw instantly with no animated interpolation; reduced-motion preference is explicitly honored.

## Numerical and theorem boundaries

- The residual is floating-point and should be near zero, not necessarily bitwise zero.
- A sampled curve is not a proof of completeness or nonintersection.
- The spherical formula assumes shorter great-circle sides and a convex triangle.
- The simple area identities assume geodesic sides and constant normalized curvature.
- The Poincaré disk preserves angles, not Euclidean lengths or areas.
- A local curvature model is not automatically an Earth, spacetime, or architectural model.
- A held visual pattern does not prove a theorem; derive it or state it as an observation.

## Worked checks

### Check 1: ellipse vertex

For $e=1/2$, verify point $(1/3,0)$.

**Answer.** Focus distance $1/3$; directrix distance $|1/3-1|=2/3$; multiplying by $e$ gives $1/3$.

### Check 2: spherical area scale

The same right spherical triangle with $\\varphi =60^{\\circ}$ lies on radius $R=3$. Find area.

**Answer.** Excess is $\\pi /3$; area $R^{2}E=9\\pi /3=3\\pi$ square units.

### Check 3: disk validation

Why is $r=1$ rejected?

**Answer.** The point lies on the ideal boundary, outside the disk’s point set; distance denominators vanish and intrinsic distance from the origin is infinite.

### Check 4: Euclidean nonclaim

The Euclidean triangle’s sum is 180°. Does that establish the physical canvas is flat to arbitrary precision?

**Answer.** No. The engine constructed an ideal Euclidean model. A claim about a physical surface requires measurement and an error tolerance.

## Continue

Derive the course-level facts in [Geometry and Trigonometry](#/item/course-euclidean-trigonometry-standard). Use [Spherical and Hyperbolic Geometry](#/item/deep-dive-spherical-hyperbolic-geometry) for cosine laws and Gauss–Bonnet, [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry) for predicate and stability details, and the [measurement recipe](#/item/recipe-geometric-measurement-construction) before transferring an ideal diagram to a field claim.
`;export{e as default};