var e=`---
id: visual-lab-parametric-surfaces
title: "Surface Curvature Studio"
level: advanced-undergraduate
estimated_minutes: 55
license: CC BY-SA 4.0
---

# Surface Curvature Studio

A surface can be presented as an equation, a mesh, a metric space, or a topological object. The most useful viewpoint depends on the question. This laboratory keeps several viewpoints synchronized: a formula produces a triangle mesh, derivatives produce tangent directions and a normal, the fundamental forms produce curvature, and colour turns the sign of Gaussian curvature into something you can inspect.

[Open the runnable Surface Curvature Studio](#/labs?lab=visual-lab-parametric-surfaces)

The experiment includes a sphere, ring torus, hyperbolic paraboloid, and Möbius strip. Drag to orbit, use the wheel or \`+\` and $-$ to zoom, and use the arrow keys when the canvas has focus. The numerical table remains available when WebGL is unavailable and is also the precise alternative to the colour map.

## 1. From two parameters to a surface

A **parametric surface** is a map

$r\\colon D \\subset \\mathbb{R}^{2} \\to \\mathbb{R}^{3}$, with $r(u,v) = (x(u,v), y(u,v), z(u,v))$.

The parameter rectangle $D$ is a set of labels. Its grid is carried into three-dimensional space by $r$. Curves with $u$ constant and curves with $v$ constant become the grid lines drawn in the lab.

The labels need not be unique. Longitude coordinates identify $u=0$ with $u=2\\pi$; at the poles of a sphere, every longitude describes the same point. This is a defect of one coordinate chart, not a singularity of the sphere. A map of Earth has a seam even though Earth does not.

For the sphere of radius $R$, the studio uses

$r(u,v) = R(\\cos v \\cos u, \\sin v, \\cos v \\sin u)$

with $0\\le u\\le 2\\pi$ and $-\\pi /2\\le v\\le \\pi /2$. Here $u$ is longitude and $v$ is latitude. Holding $v$ fixed gives a circle of latitude; holding $u$ fixed gives a meridian.

For the torus, with fixed major radius $R$ and tube radius $\\rho$,

$r(u,v) = ((R+\\rho \\cos v)\\cos u, \\rho \\sin v, (R+\\rho \\cos v)\\sin u)$.

The parameter $u$ travels around the large ring and $v$ travels around the tube. Both directions are periodic.

The hyperbolic paraboloid is a graph:

$r(u,v) = (u, a(u^{2}-v^{2}), v)$.

Its parameter domain is only a finite patch in the lab, because the full surface is unbounded. Changing $a$ changes how strongly the patch bends.

The Möbius strip uses

$r(u,v) = ((R+v \\cos(u/2))\\cos u, v \\sin(u/2), (R+v \\cos(u/2))\\sin u)$

for $0\\le u\\le 2\\pi$ and $-w\\le v\\le w$. At the seam,

$r(2\\pi ,v) = r(0,-v)$.

The reversal of $v$ is the half-twist. It is the reason a Möbius strip has one side and one boundary curve.

## 2. Tangent vectors, normals, and area

Fix a point $(u,v)$ in the parameter domain. Differentiating in each coordinate direction gives two tangent vectors:

$r_u = \\partial r/\\partial u$, and $r_v = \\partial r/\\partial v$.

Provided these vectors are linearly independent, they span the tangent plane. Their cross product is perpendicular to the surface:

$N = (r_v \\times r_u) / |r_v \\times r_u|$.

The order of the cross product selects one of two orientations. Reversing it changes $N$ to $-N$, but does not change the tangent plane or Gaussian curvature.

The pointwise curvature formulas require a $C^2$ regular patch on an open parameter neighborhood. We use $S=-dN$: the displayed outward sphere normal gives principal values $-1/R$ and signed mean curvature $-1/R$. The numerical regularity check can fail at a singular chart or an unresolved small denominator. In that case the table marks the normal and curvatures undefined, and the mesh omits triangles and grid edges using those samples; zero curvature is not substituted for a failed chart.

The magnitude

$|r_u \\times r_v|$

is the local area scale. A small parameter rectangle of area $du dv$ maps to surface area approximately

$dA = |r_u \\times r_v| du dv$.

This explains why an equally spaced longitude-latitude mesh bunches near a sphere's poles. Equal areas in parameter space do not necessarily become equal areas on the surface.

Choose **unit normal** colouring in the lab. Red, green, and blue contributions encode the absolute components of $N$. On a sphere, the normal is radial. On the saddle it rotates rapidly near the centre as the tangent plane changes. On the Möbius strip, no continuous global orientation exists: transport a chosen normal around the centre line and it returns reversed.

## 3. The first fundamental form: intrinsic measurement

Dot products of the tangent vectors give

$E = r_u \\cdot r_u$, $F = r_u \\cdot r_v$, and $G = r_v \\cdot r_v$.

Together they form the first fundamental form

$I = E du^{2} + 2F du dv + G dv^{2}$.

For a small parameter displacement $(du,dv)$, this expression approximates squared distance on the surface. It therefore determines local length, angle, and area without referring to ambient coordinates after $E$, $F$, and $G$ are known.

The area scale also satisfies

$|r_u \\times r_v| = \\sqrt{EG-F^{2}}$.

The quantity $EG-F^{2}$ must be positive at a regular point. If it vanishes, the two tangent vectors are dependent and the parametrization has ceased to provide a two-dimensional coordinate system there. Sphere coordinates at a pole are a familiar example: the geometry is regular, but that chart is not.

## 4. The second fundamental form: bending against the normal

Second derivatives measure how the tangent directions change:

$r_uu$, $r_uv$, and $r_vv$.

Taking their components along the selected unit normal gives

$e = N \\cdot r_uu$, $f = N \\cdot r_uv$, and $g = N \\cdot r_vv$.

These coefficients form the second fundamental form

$II = e du^{2} + 2f du dv + g dv^{2}$.

The first form measures within the surface; the second records how the surface sits in three-dimensional space. Combining them gives two central curvature quantities:

$K = (eg-f^{2})/(EG-F^{2})$

and

$H = (Eg-2Ff+Ge)/(2(EG-F^{2}))$.

$K$ is **Gaussian curvature** and $H$ is **mean curvature** under the chosen sign convention. Reversing $N$ reverses $H$ but leaves $K$ unchanged, because both factors in the numerator of $K$ change sign. This is one reason Gaussian curvature is the natural scalar in the studio's orientation-independent colour map.

If $k_{1}$ and $k_{2}$ are the principal curvatures, then

$K = k_{1}k_{2}$, and $H = (k_{1}+k_{2})/2$.

The sign of $K$ divides local shapes into three families:

- $K>0$: both principal curvatures have the same sign. The surface is locally dome-like or bowl-like.
- $K<0$: the principal curvatures have opposite signs. The surface is locally saddle-like.
- $K=0$: at least one principal curvature vanishes. If the other is nonzero, the point is parabolic; if both are zero, it is planar or flat to second order. Neither condition asserts a planar neighborhood.

The curvature palette is diverging: cyan represents negative $K$, a pale neutral tone represents values near zero, and coral represents positive $K$. Colour intensity is scaled to the current mesh, while the table gives unscaled numerical values.

## 5. Investigation A — Constant curvature on a sphere

Select **Sphere** and Gaussian curvature colouring. The colour is constant because

$K = 1/R^{2}$.

Set $R=0.70$, record $K$ from the table, then set $R=1.40$. The radius doubles, lengths on corresponding great circles double, surface area grows by a factor of four, and Gaussian curvature falls by a factor of four.

This scaling is dimensionally necessary: curvature has units of inverse length squared. It also prevents a common visual mistake. A larger sphere may look just as curved on screen because the camera fits it into the same viewport, yet its intrinsic curvature is smaller.

Turn on the parameter grid and orbit toward a pole. Longitude lines meet there. The concentration does not indicate infinite curvature; the table's regular sphere samples approximate $1/R^{2}$, and the mesh stays slightly away from the singular latitude endpoints. A calculation at a singular parameter pair is undefined even though another chart describes a perfectly smooth sphere point.

**Conjecture to test:** does changing the mesh density change the reported curvature? It should change polygon smoothness but not the mathematical value beyond numerical roundoff. Resolution belongs to the approximation, not the surface definition.

## 6. Investigation B — Positive and negative regions on a torus

Select **Ring torus**. For the parametrization above, direct calculation gives

$K(v) = \\cos v / (\\rho (R+\\rho \\cos v))$.

At $v=0$, the outer equator, both factors in the denominator are positive and $K>0$. At $v=\\pi$, the inner equator, $\\cos v=-1$, so $K<0$ as long as $\\rho <R$. At $v=\\pi /2$ and $3\\pi /2$, $K=0$.

Orbit so that you can see through the hole. Identify the coral outside, cyan neck, and pale transition circles. Then increase the tube radius. The denominator at the inner equator contains $R-\\rho$, so the negative curvature grows in magnitude as the tube approaches the major radius.

The torus is the local-to-global experiment. A closed orientable torus has Euler characteristic $χ=0$. Gauss–Bonnet says

$\\int K dA = 2\\pi χ = 0$.

The positive outer contribution and negative inner contribution cancel. This does not mean $K=0$ pointwise. A topological integral can vanish through cancellation.

**Conjecture to test:** the top and bottom circles have $K=0$, but are they locally flat like a sheet of paper? Orbit and inspect neighbouring colours. A zero at one curve does not make an open neighbourhood flat.

## 7. Investigation C — A surface that is negative everywhere

Select **Hyperbolic paraboloid**. For

$z = a(u^{2}-v^{2})$,

the Gaussian curvature is

$K(u,v) = -4a^{2} / (1 + 4a^{2}(u^{2}+v^{2}))^{2}$.

It is negative whenever $a\\ne 0$. At the origin it equals $-4a^{2}$; far from the origin its magnitude decreases. This gives a useful counterexample to judging curvature by height. The central point has height zero but the largest curvature magnitude in the displayed patch.

There are also two straight lines on the surface. Along $u=v$ and $u=-v$, the height is zero. A surface can be saddle-curved while containing straight lines. In fact the hyperbolic paraboloid is doubly ruled: through each point pass two straight lines lying entirely in the surface.

Decrease $a$ toward zero. Positions approach a plane and the curvature palette approaches neutral. Increase $a$ and compare the centre row in the table with $-4a^{2}$.

**Conjecture to test:** is negative curvature equivalent to having negative height? Rotate the model until the vertical direction is visually ambiguous, then use the formula. Curvature is local differential geometry; height depends on a chosen coordinate axis.

## 8. Investigation D — Orientation fails on a Möbius strip

Select **Möbius strip** and show the parameter grid. Follow the centre line $v=0$ through one circuit in $u$. The tangent plane returns to the starting plane, but a continuously transported normal returns with opposite sign.

The studio uses an absolute-component normal palette and two-sided lighting so the mesh remains legible. Because $N$ and $-N$ have identical absolute components, that palette deliberately does **not** prove the sign reversal. Instead, compare the first two signed-normal rows in the numerical table: their parameter pairs are identified at the seam, their positions agree, and their normals are opposite. The parameter grid separately shows the transverse-coordinate reversal. There is no way to repair the signed reversal by selecting a better global normal: non-orientability is a topological obstruction, not a shader defect.

Now follow one boundary edge. At $u=2\\pi$, the point labelled $v=w$ is glued to the starting point labelled $v=-w$. Continuing along what looked like the other edge completes one boundary loop. The rectangle in parameter space has two horizontal edges, but its Möbius identification joins them.

Gaussian curvature is still meaningful locally. The formula for $K$ does not depend on choosing one global orientation. By contrast, a globally signed mean curvature requires care because the normal cannot be chosen consistently over the entire strip.

**Conjecture to test:** how many circuits are required for a transverse arrow to return with both its position and direction unchanged? Track a parameter-grid cross-line. Position returns after one circuit; transverse orientation requires two.

## 9. What the renderer computes

The visual is not a prerecorded animation. For each mesh vertex, the application evaluates $r(u,v)$ and estimates first and second derivatives with centred finite differences. It then computes $E,F,G,e,f,g$, the unit normal, and $K$. Adjacent samples are joined into triangles and sent to a native WebGL 2 pipeline.

The vertex shader applies model, camera, and perspective transformations. The fragment shader combines curvature or normal data with two-sided directional lighting. Parameter-grid lines are a second indexed draw. No external graphics package is required.

If WebGL 2 cannot be created, a Canvas 2D fallback projects the same mesh on the CPU, depth-sorts its triangles, and draws the same curvature categories. If neither graphics context is available, the sample table and equations remain usable.

Several limitations matter:

- finite differences introduce truncation and floating-point error;
- a triangle mesh only samples the continuous surface;
- coordinate singularities can make derivative estimates unstable even when the surface is smooth;
- the colour scale is chosen from the current mesh, so colour intensity should not be compared numerically across different surfaces;
- perspective and lighting convey shape but are not proofs of a curvature sign.

The indexed mesh is a sampled parameter rectangle with duplicated seam vertices; the sphere mesh also omits tiny polar bands. It is not an independently constructed triangulation with all sphere, torus or Möbius seam identifications. Topology labels refer to the defining continuous model, not homology computed from these mesh indices. The closed-surface Gauss–Bonnet identity used for the full sphere or torus needs compactness, orientation and no boundary; a finite patch or a Möbius strip cannot simply use that boundary-free formula.

Use the table to check the image, and use a derivation to check the table. The three representations catch different errors.

## 10. Exercises

1. Differentiate the sphere parametrization and verify that its unit normal is radial away from the poles.
2. Use dimensional analysis to explain why sphere curvature must scale like $R^{-2}$, even before calculating its constant factor.
3. From the torus curvature formula, locate every point where $K=0$ and describe the corresponding curves geometrically.
4. Verify the saddle formula at the origin directly from the first and second fundamental forms.
5. Explain why reversing a unit normal changes $H$ but not $K$.
6. A cylinder of radius $R$ has principal curvatures $1/R$ and $0$. What are $K$ and $H$? Why can it be unrolled without stretching despite looking bent?
7. Use $r(2\\pi ,v)=r(0,-v)$ to prove that the two apparent parameter-domain edges of the Möbius strip form one geometric boundary curve.
8. Increase mesh density from its minimum to maximum. List which visible changes are mathematical and which are numerical or graphical.

### Hints and checks

1. Compute $r_u$ and $r_v$; their cross product is proportional to $r$ up to the selected orientation.
2. Gaussian curvature is a product of two quantities with units $length^{-1}$.
3. The sign is controlled by $\\cos v$; the zero sets occur at the top and bottom of the tube.
4. At $(0,0)$, $E=G=1$, $F=0$, while the relevant normal second derivatives are $2a$ and $-2a$ up to orientation.
5. Each coefficient $e,f,g$ changes sign. The numerator of $H$ is linear in them; the numerator of $K$ is quadratic.
6. $K=0$ and $|H|=1/(2R)$. Gaussian curvature is intrinsic; mean curvature records extrinsic bending.
7. Start at $(0,w)$, cross the seam to $(2\\pi ,w)=(0,-w)$, and continue along the other parameter edge.
8. Smoothness of silhouettes and grid tessellation change. The defining equation, topology, and exact curvature do not.

## Accessible route

Every surface, display, mesh, and parameter choice is available through labelled native controls. Focus the canvas and use the arrow keys to orbit, plus or minus to zoom, and R to reset; reduced-motion settings suppress automatic rotation. The signed-normal and curvature tables are the numerical alternative to shape, lighting, and colour. They also remain available when WebGL and Canvas rendering fail. The tables sample finitely many parameter points, so derivations remain necessary for global curvature and topology claims.

## Connections

This laboratory sits at an intersection of multivariable calculus, differential geometry, topology, and computer graphics. Tangent vectors become vertex attributes; normals drive lighting; fundamental forms measure a manifold; Gaussian curvature feeds Gauss–Bonnet; parameter seams become texture and mesh-topology problems. The same mathematics appears in geometric modelling, general relativity, shell mechanics, surface optimization, cartography, and scientific visualization.

For the global theorem behind the sphere and torus comparison, continue to [Curvature and Gauss–Bonnet: Local Bending, Global Topology](#/item/deep-dive-curvature-gauss-bonnet). To turn these ideas into a longer programmable sequence, follow the [Mathematics for graphics and visualization learning path](#/path/graphics-and-visualization), then derive the model-view-projection transformation as a composition of linear and projective maps.
`;export{e as default};