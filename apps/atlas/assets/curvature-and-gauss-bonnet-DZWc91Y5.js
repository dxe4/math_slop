var e=`---
id: deep-dive-curvature-gauss-bonnet
title: "Curvature and Gauss–Bonnet: Local Bending, Global Topology"
license: CC BY-SA 4.0
---

# Curvature and Gauss–Bonnet: Local Bending, Global Topology

**Before reading.** Read [Differentiation in Euclidean Space](../books/proof-safe-real-analysis/differentiation-in-r-n.md), [Topological Spaces and Open-Set Language](../books/topology-proof-counterexample/topological-spaces-and-open-set-language.md) and [Inner Products and Orthogonal Decomposition](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md). These are preparation for the ideas used below.

Draw a triangle on a sphere using great-circle arcs. Its angles can sum to more than 180 degrees. This local failure of Euclidean geometry is not arbitrary: summed over a closed surface, curvature is forced by the surface's topology. The Gauss–Bonnet theorem is the bridge.

This article assumes multivariable calculus, line and surface integrals, and a
first encounter with smooth surfaces. Differential forms are not required.
Orientations control signs in the boundary formula, so every worked region
states its orientation or uses a sign-independent closed-surface form.

## Two ways a surface bends

Near a smooth point of a surface in \\(\\mathbb R^{3}\\), slice by planes
containing the normal vector. The resulting curves have signed normal
curvatures. Their maximum and minimum values \\(k_1,k_2\\) are the **principal
curvatures**. The **Gaussian curvature** is

\\[
K=k_1k_2.
\\]

On a sphere of radius \\(R\\), the principal curvatures have the same magnitude
\\(1/R\\), so \\(K=1/R^2\\), independently of the normal-orientation convention.
On a circular cylinder of radius \\(R\\), one has magnitude \\(1/R\\) and the
other is zero, so \\(K=0\\). A saddle has principal curvatures of opposite signs
and therefore negative Gaussian curvature.

The cylinder looks bent in space, yet has the same Gaussian curvature as the plane. Cut a paper cylinder along a generator and unroll it without stretching: intrinsic distances and angles remain unchanged. Gauss's *theorema egregium* says $K$ can be computed entirely from the surface's intrinsic metric. Mean curvature $(k_{1}+k_{2})/2$, by contrast, depends on the embedding.

## Geodesics and boundary turning

A **geodesic** is locally straight within the surface. It can be characterized as locally length minimizing or as having zero tangential acceleration under an affine parametrization. Lines are plane geodesics; great circles are sphere geodesics. Not every locally geodesic segment is globally shortest: two antipodal sphere points have many great-circle routes of equal length.

For an oriented boundary curve, **geodesic curvature** $k_{g}$ measures how much the curve turns within the surface. It is zero along a geodesic. At a corner, turning is concentrated in an exterior angle.

For a compact oriented surface region $M$ with piecewise smooth boundary, Gauss–Bonnet states

\\[
\\int_M K\\,dA+\\int_{\\partial M}k_g\\,ds
+\\sum_j\\theta_j=2\\pi\\chi(M),
\\]

where \\(\\theta_j\\) are signed exterior turning angles. The terms depend on
geometry and orientation conventions, but their total is the topological Euler
characteristic.

### Boundary sanity check: a flat disk

For a counterclockwise circle of radius \\(r\\) in the Euclidean plane,
\\(K=0\\), there are no corners, and \\(k_g=1/r\\). Its length is \\(2\\pi r\\), so

\\[
\\int_{\\partial M}k_g\\,ds=\\frac1r(2\\pi r)=2\\pi.
\\]

The disk has \\(\\chi=1\\), and Gauss–Bonnet gives \\(2\\pi=2\\pi\\chi(M)\\). Dropping
the boundary term would incorrectly give zero. This check also shows why
rescaling the circle does not alter the total turning.

## Worked example: a spherical triangle

Take the unit sphere and the triangle bounded by the equator and the meridians at longitudes 0 and $\\pi/2$, with the north pole as third vertex. Every side is a great-circle arc, so $k_{g}=0$. All three interior angles are $\\pi/2$; each exterior turning angle is $\\pi-\\pi/2=\\pi/2$ under the boundary convention.

The triangle is a disk, so $\\chi=1$. Gauss–Bonnet gives

\\[
\\operatorname{area}(M)+\\frac{3\\pi}{2}=2\\pi
\\]

because \\(K=1\\). Hence its area is \\(\\pi/2\\), exactly one eighth of the
sphere's area \\(4\\pi\\).

More generally, a unit-sphere geodesic triangle with angles $\\alpha,\\beta,\\gamma$ has

\\[
\\operatorname{area}(M)=\\alpha+\\beta+\\gamma-\\pi.
\\]

The **spherical excess** is area. On a sphere of radius $R$, $K=1/R^{2}$, so area is $R^{2}(\\alpha+\\beta+\\gamma-\\pi)$.

This is a concrete local-to-global derivation: the angle sum records integrated curvature inside the triangle.

## Closed surfaces

When a compact oriented surface has no boundary,

\\[
\\int_M K\\,dA=2\\pi\\chi(M).
\\]

For a sphere, $\\chi=2$, so total curvature is $4\\pi$, independent of how the sphere is smoothly deformed. A standard torus has $\\chi=0$; its outside region has positive curvature, its inside neck negative curvature, and the integrals cancel. A closed orientable surface of genus $g$ has $\\chi=2-2g$, so every metric on a double torus has total curvature $-4\\pi$.

A polyhedral version makes the theorem plausible. Curvature is concentrated at vertices, with angle defect

\\[
\\delta_v=2\\pi-\\sum\\{\\text{face angles incident at }v\\}.
\\]

Summing all defects gives $2\\pi V$ minus the sum of all face angles. For a triangulated closed surface, face angles total $\\pi F$, while $3F=2E$ because every triangular edge belongs to two faces. Thus

\\[
\\sum_v\\delta_v
=2\\pi V-\\pi F
=2\\pi(V-E+F)
=2\\pi\\chi.
\\]

Smooth Gauss–Bonnet replaces concentrated angle defects with the density $K dA$.

## What the theorem does and does not say

If $K>0$ everywhere on a closed oriented surface, then $\\chi>0$, so among connected orientable surfaces its genus must be zero. If $K=0$ everywhere, then $\\chi=0$, ruling out the sphere. But the integral alone does not determine pointwise curvature: many very different metrics have the same total.

Topology also does not uniquely determine which curvature signs are possible without further hypotheses. A torus cannot have strictly positive curvature everywhere, but it can have regions of both signs. Deep uniformization results show that every closed orientable surface admits a constant-curvature metric after choosing the sign dictated by genus, but that statement concerns an abstract metric, not necessarily an embedding in ordinary three-space.

## Common traps

- Extrinsic bending need not create Gaussian curvature: a cylinder is the basic counterexample.
- Geodesic means locally straight, not always globally shortest.
- The sum of triangle angles depends on both curvature and the choice of geodesic edges.
- Total curvature constrains topology but rarely identifies the exact shape.
- Boundary terms cannot be dropped for a patch with boundary.

## Exercises

<a id="deep-dive-curvature-gauss-bonnet-ex-1"></a>

### Exercise 1

1. Find the Gaussian curvature of a sphere of radius 3 and its total curvature.

<details>
<summary>Hint 1</summary>

Recall how sphere curvature scales when its radius changes.
</details>

<details>
<summary>Hint 2</summary>

Use curvature one over radius squared and sphere area four pi times radius squared for total curvature.
</details>

<details>
<summary>Solution</summary>

\\(K=1/9\\); multiplying by area \\(36\\pi\\) gives total curvature \\(4\\pi\\).

</details>

<a id="deep-dive-curvature-gauss-bonnet-ex-2"></a>

### Exercise 2

2. A geodesic triangle on the unit sphere has angles $\\pi/2$, $\\pi/2$, and $\\pi/3$. Find its area.

<details>
<summary>Hint 1</summary>

For a geodesic triangle on the unit sphere, area equals spherical excess.
</details>

<details>
<summary>Hint 2</summary>

Add the three angles and subtract pi; the unit radius contributes no further factor.
</details>

<details>
<summary>Solution</summary>

The spherical excess is $\\pi/3$, hence the area is $\\pi/3$.

</details>

### Further exercises

3. Use the polyhedral defect formula on a cube.
4. Explain why no smooth metric with $K>0$ everywhere exists on a closed orientable genus-two surface.
5. Why does unrolling a cylinder preserve Gaussian curvature but not its
   appearance in \\(\\mathbb R^3\\)?

### Answers


3. Three square angles meet at each vertex, so each defect is
   \\(2\\pi-3\\pi/2=\\pi/2\\); eight vertices total \\(4\\pi=2\\pi\\cdot2\\).
4. Its Euler characteristic is \\(2-2\\cdot2=-2\\), so Gauss–Bonnet requires
   total curvature \\(-4\\pi\\), contradicting an everywhere-positive integrand.
5. Gaussian curvature is intrinsic and remains zero under an isometry;
   extrinsic curvature and surface normals change when the sheet is rolled.

## Connections

Gauss–Bonnet is a prototype for modern geometry: a differential quantity integrates to a topological invariant. Its descendants include characteristic classes, index theorems, general relativity's curvature tensors, and gauge theory, where local fields encode global bundle data.
`;export{e as default};