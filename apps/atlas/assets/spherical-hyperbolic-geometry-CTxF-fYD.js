var e=`---
id: deep-dive-spherical-hyperbolic-geometry
title: "Spherical and Hyperbolic Geometry: Triangles, Models, and Curvature"
license: CC BY-SA 4.0
---

# Spherical and Hyperbolic Geometry: Triangles, Models, and Curvature

**Before reading.** Read [Vectors in the Plane](../books/precalculus/vectors-plane.md), [Right-Triangle Trigonometry](../books/euclidean-geometry-trigonometry/right-triangle-trigonometry.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](../deep-dives/logic-worlds-before-symbols.md). These are preparation for the ideas used below.

Euclidean geometry is not the only coherent geometry. A sphere has positive curvature; a hyperbolic plane has negative curvature. Their geodesic triangles make parallel postulates, angle sums, distance formulas, and area visibly different while retaining exact theorems.

This deep dive assumes vectors, trigonometry, Euclidean proof, and comfort with logarithms and inverse hyperbolic functions. We use complete constant-curvature model spaces. An arbitrary bumpy surface is not automatically governed by every spherical or hyperbolic formula below.

## 1. What replaces a straight line?

On a surface with a length rule, a **geodesic** is locally distance-minimizing and has zero intrinsic turning. On a round sphere, geodesics are great circles: intersections with planes through the sphere center.

Between nonantipodal spherical points, one great circle is determined and its shorter arc is the unique shortest geodesic. Antipodal points lie on infinitely many great circles and have many shortest semicircular routes. A longitude is a great-circle half; an ordinary latitude other than the equator is not geodesic.

In the hyperbolic plane, geodesics depend on the chosen model’s drawing but represent the same intrinsic lines. In the Poincaré disk they are Euclidean diameters or arcs of Euclidean circles meeting the boundary at right angles. In the upper half-plane they are vertical lines or semicircles meeting the real axis orthogonally.

Model boundary points are not ordinary hyperbolic points. They encode ideal directions at infinite intrinsic distance.

## 2. Spherical distance from vectors


**Worked example.**
Represent points on a sphere of radius $R$ as $Ru$ and $Rv$, where $u,v$ are unit vectors. The central angle $\\delta\\in [0,\\pi]$ obeys

$$\\cos \\delta=u\\cdot v$$

The shorter great-circle distance is

$$d=R\\arccos(u\\cdot v)$$

Numerically, roundoff may produce a dot product slightly outside $[-1,1]$; clamp only after validating finite, nonzero vectors and normalizing them. Clamping repairs representation error, not invalid input.

For latitude $\\phi$ and longitude $\\lambda$ in radians, a unit vector is

$$(\\cos\\phi \\cos\\lambda, \\cos\\phi \\sin\\lambda, \\sin\\phi)$$

Thus two locations have central angle satisfying

$$\\cos\\delta=\\sin\\phi_{1} \\sin\\phi_{2}+\\cos\\phi_{1} \\cos\\phi_{2} \\cos(\\lambda_{2}-\\lambda_{1})$$

This spherical law is an Earth approximation. Real geodesy uses an oblate ellipsoid, altitude, and a specified datum when accuracy matters.

## 3. Spherical triangles

A spherical triangle is bounded by three chosen great-circle arcs. For the standard convex case, vertices are pairwise nonantipodal, side lengths $a,b,c$ are shorter angular arcs in $(0,\\pi)$, and the triangle lies within a hemisphere. Angles are angles between tangent directions of great circles.

Use the convention that side $a$ is opposite angle $A$, and so on. The spherical law of cosines on the unit sphere is

$$\\cos c=\\cos a \\cos b+\\sin a \\sin b \\cos C$$

Solving for $C$ requires nondegenerate $\\sin a \\sin b\\ne 0$. The spherical law of sines is

$$\\sin A/\\sin a=\\sin B/\\sin b=\\sin C/\\sin c$$

Like its Euclidean counterpart, inverse sine can be ambiguous; side ranges, orientation, and other equations resolve the triangle.

### Derivation of the cosine law

Place one vertex at unit vector $v$. Let unit tangent directions toward the other two vertices be $p,q$, meeting at angle $C$, so $p\\cdot q=\\cos C$ and both are perpendicular to $v$. The other vertices can be written

$$x=\\cos b v+\\sin b p$$

$$y=\\cos a v+\\sin a q$$

Their dot product is

$$x\\cdot y=\\cos a \\cos b+\\sin a \\sin b \\cos C$$

But $x\\cdot y=\\cos c$, proving the formula. This vector proof makes the unit-sphere and shorter-arc conventions visible.

## 4. Spherical excess and area

For a convex geodesic triangle on a sphere of radius $R$, Girard’s theorem states

$$area=R^{2}(A+B+C-\\pi)$$

The positive quantity $E=A+B+C-\\pi$ is spherical excess.

One proof considers three lunes. A lune of angle $A$ occupies fraction $A/(2\\pi)$ of the sphere and has area $2AR^{2}$. Adding the three appropriate lunes covers one copy of most of the sphere and adds the triangle and its antipode multiple times; careful inclusion counting yields the excess formula.

### Exact right family

Let $N$ be the North Pole and let $P,Q$ lie on the equator separated by longitude $\\phi\\in (0,\\pi)$. Sides $NP$ and $NQ$ are both $\\pi/2$; side $PQ$ is $\\phi$. Angles at $P,Q$ are right because meridians meet the equator orthogonally; angle at $N$ is $\\phi$. Therefore

$$A+B+C=\\pi+\\phi$$

and unit-sphere area is $\\phi$. For $\\phi=\\pi/2$, three right angles enclose one eighth of the sphere, area $\\pi/2$, exactly as the formula predicts.

## 5. Spherical navigation and bearings

The shorter great-circle distance answers “how far along an ideal sphere?” but not the initial heading. For nondegenerate points with latitudes $\\phi_{1},\\phi_{2}$ and longitude difference $\\Delta\\lambda$, an initial bearing from the first location can be computed by

$$\\operatorname{atan2}(\\sin\\Delta\\lambda \\cos\\phi_{2}, \\cos\\phi_{1} \\sin\\phi_{2}-\\sin\\phi_{1} \\cos\\phi_{2} \\cos\\Delta\\lambda)$$

The bearing usually changes along the route. A constant compass bearing follows a rhumb line, which is generally longer but may simplify navigation. Near poles, antipodes, coincident points, or longitude branch cuts, bearings can be undefined or numerically unstable even when distance remains meaningful.

Always state whether longitude is east-positive, which \`atan2\` convention is used, how angles are normalized, and whether the shorter geodesic is intended.

## 6. Hyperbolic parallel behavior

In Euclidean geometry, one parallel passes through an external point. In hyperbolic geometry, infinitely many geodesics through the point do not meet the given geodesic. From the perpendicular ray aimed toward the given line, rotate in either direction: rays with angle smaller than the limiting angle meet the line; the two boundary rays are limiting parallels sharing an ideal endpoint with it; directions beyond those boundaries determine ultraparallel geodesics, which share no finite or ideal endpoint with the given line.

For curvature $-1$, the angle of parallelism $\\Pi(d)$ at perpendicular distance $d>0$ satisfies

$$\\tan(\\Pi(d)/2)=e^{-d}$$

It decreases from $\\pi/2$ toward zero as distance grows. This formula depends on the curvature normalization; rescaling the metric changes $d$.

Hyperbolic triangles have angle sum strictly less than $\\pi$. Similar triangles are congruent: in a fixed hyperbolic curvature, angles determine side lengths. This contrasts with Euclidean geometry, where one can scale a triangle without changing its angles.

## 7. The Poincaré disk metric

The disk is

$$D=\\{u\\in R^{2}:\\lVert u\\rVert<1\\}$$

Its curvature $-1$ distance satisfies

$$\\cosh d(u,v)=1+2\\lVert u-v\\rVert^{2}/[(1-\\lVert u\\rVert^{2})(1-\\lVert v\\rVert^{2})]$$

From the origin,

$$d(0,u)=2 artanh \\lVert u\\rVert=\\log((1+\\lVert u\\rVert)/(1-\\lVert u\\rVert))$$

As $\\lVert u\\rVert\\to 1$, distance diverges. The disk picture compresses infinite intrinsic extent into finite Euclidean radius.

The metric is conformal: angles between hyperbolic curves equal their Euclidean tangent angles in the drawing. It is not length-preserving. Two Euclidean segments of equal drawn length at different disk locations generally have different hyperbolic lengths.

### Geodesic-circle construction

Consider points $A=(r,0)$ and $B=(0,r)$, $0<r<1$. Their non-diameter geodesic lies on a Euclidean circle with center $(q,q)$. Passing through $A$ and meeting the unit boundary orthogonally requires

$$q=(1+r^{2})/(2r)$$

and circle radius

$$\\rho=\\sqrt{2q^{2}-1}$$

Indeed, distance squared from $(q,q)$ to $A$ is $(r-q)^{2}+q^{2}=2q^{2}-1$, and $\\lVert (q,q)\\rVert^{2}-\\rho^{2}=1$, the orthogonal-circle condition.

## 8. Hyperbolic triangles and area

For curvature $-1$, the hyperbolic law of cosines is

$$\\cosh c=\\cosh a \\cosh b-\\sinh a \\sinh b \\cos C$$

The law of sines is

$$\\sin A/\\sinh a=\\sin B/\\sinh b=\\sin C/\\sinh c$$

As side lengths become small, $\\sinh a\\approx a$ and $\\cosh a\\approx1+a^{2}/2$; expanding the cosine law recovers the Euclidean law to leading order. “Locally Euclidean” is therefore an approximation with curvature-scale error, not exact identity.

For a geodesic triangle,

$$area=\\pi-(A+B+C)$$

in curvature $-1$. The defect is positive and area is less than $\\pi$. Ideal triangles with all vertices on the boundary have limiting angles zero and maximal area $\\pi$; boundary vertices themselves are not finite hyperbolic points.

### Exact constructed family

Use $O=(0,0)$, $A=(r,0)$, and $B=(0,r)$ in the Poincaré disk. The two diameter geodesics meet at a right angle at $O$. By symmetry the other angles are equal. From the geodesic circle above, a tangent calculation gives

$$\\cos A=\\frac{q}{\\sqrt{q^{2}+(q-r)^{2}}}$$

For $r=1/2$, $q=5/4$, so $A=B\\approx30.96°$; total is about $151.93°$ and defect about $28.07°$, or $0.490$ radians of normalized area. The exact engine in the live laboratory calculates from the circle rather than measuring pixels.

## 9. Gauss–Bonnet unifies the signs

For a geodesic triangle on a constant-curvature surface,

$$A+B+C-\\pi=K \\times area$$

where $K$ is Gaussian curvature. Thus positive $K$ gives excess, zero gives Euclidean sum, and negative $K$ gives defect.

The general Gauss–Bonnet theorem for a region $D$ with piecewise smooth boundary includes

$$\\int_{D} K dA + \\int_{\\partial D} k_{g} ds + \\sum exterior turns = 2\\pi\\chi(D)$$

The simple triangle formula assumes geodesic edges ($k_{g}=0$), disk-like topology ($\\chi=1$), and compatible angle orientation. Applying it to a small circle of latitude or a region with holes without boundary terms is wrong.

## 10. Models, consistency, and physical scope

The Poincaré disk and upper half-plane are isometric models of the same hyperbolic plane. A theorem true intrinsically is true in either representation even though their Euclidean pictures differ. A model can establish relative consistency: if real-number Euclidean analysis is consistent, the disk construction realizes hyperbolic axioms within it.

Physical spacetime and the surface of Earth require separate models. General relativity uses pseudo-Riemannian spacetime, not simply a two-dimensional hyperbolic plane. A saddle-shaped surface can have negative curvature locally but may not be complete or have constant curvature. Calling every distorted map “non-Euclidean geometry” hides these distinctions.

## 11. Common errors

- Treating a latitude circle as a spherical geodesic.
- Using degrees inside sine or cosine formulas coded for radians.
- Selecting the longer great-circle arc without stating it.
- Assuming antipodal points determine a unique great circle.
- Measuring Poincaré-disk lengths with a Euclidean ruler.
- Including the disk boundary as finite points.
- Using spherical or hyperbolic excess formulas for nongeodesic boundaries.
- Omitting curvature scale from an area formula.
- Assuming Euclidean similar triangles can be rescaled unchanged in hyperbolic geometry.

## 12. Worked exercises

### 1. Equatorial distance

<a id="deep-dive-spherical-hyperbolic-geometry-ex-1"></a>

**Exercise 1.**

On radius $R$, equatorial points differ by $75°$ longitude. Find shorter distance.


<details>
<summary>Hint 1</summary>

On a sphere, shorter great-circle distance equals radius times central angle in radians.
</details>
<details>
<summary>Hint 2</summary>

Convert seventy-five degrees to radians before multiplying by R.
</details>
<details>
<summary>Solution</summary>

Central angle is $75\\pi/180=5\\pi/12$, so distance is $5\\pi R/12$.

</details>

### 2. Spherical cosine law

<a id="deep-dive-spherical-hyperbolic-geometry-ex-2"></a>

**Exercise 2.**

On the unit sphere, $a=b=\\pi/2$ and included angle $C=\\pi/3$. Find $c$.


<details>
<summary>Hint 1</summary>

Use the spherical cosine law with the two sides and included angle given.
</details>
<details>
<summary>Hint 2</summary>

The right-angle side cosines vanish; solve the remaining cosine equation in the valid distance interval.
</details>
<details>
<summary>Solution</summary>

$\\cos c=0\\cdot 0+1\\cdot 1\\cdot \\cos(\\pi/3)=1/2$, so $c=\\pi/3$ in $[0,\\pi]$.

</details>

### 3. Spherical area

A spherical triangle on radius 2 has angles $90°$, $80°$, $70°$. Find area.

**Solution.** Sum is $240°=4\\pi/3$; excess is $\\pi/3$. Area is $R^{2}E=4\\pi/3$.

### 4. Disk radial distance

Find hyperbolic distance from origin to Euclidean radius $r=1/2$.

**Solution.** $2 artanh(1/2)=\\log 3$.

### 5. Hyperbolic area

A curvature $-1$ geodesic triangle has angles $\\pi/2$, $\\pi/4$, $\\pi/6$. Find area.

**Solution.** Sum is $11\\pi/12$, so defect and area are $\\pi/12$.

### 6. Curvature rescaling

For constant curvature $K=-1/R^{2}$, how does defect relate to area?

**Solution.** Gauss–Bonnet gives sum minus $\\pi=K area$, so defect $\\pi-sum=area/R^{2}$; hence $area=R^{2}\\times defect$.

### 7. Orthogonal circle

For $r=1/2$, compute the disk geodesic-circle center coordinate and verify orthogonality.

**Solution.** $q=(1+1/4)/(1)=5/4$. Radius squared is $2(25/16)-1=17/8$. Center norm squared is $25/8$; their difference is 1, so the circle meets the unit boundary orthogonally.

## Continue

Use the [Conics & Curved Geometry Observatory](#/item/visual-lab-conics-curved-geometry) to inspect the exact spherical family and Poincaré construction numerically. The [geometry proof reference](#/item/book-geometry-proof-reference) locates the Euclidean parallel assumption; [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry) implements stable vector and disk formulas. For a physical navigation or surveying task, the [measurement recipe](#/item/recipe-geometric-measurement-construction) forces a choice between planar, spherical, and higher-accuracy Earth models.
`;export{e as default};