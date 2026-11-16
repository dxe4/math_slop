var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: discrete-curvature-computation
title: "Discrete Curvature and Computation"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Discrete Curvature and Computation

A triangulated surface has flat faces and sharp joins. It is therefore not a $C^2$ surface to which a pointwise smooth curvature formula can be applied at every mesh vertex. Nevertheless its intrinsic geometry has a precise integrated curvature: the angle missing from a full turn around a vertex. Summing these defects gives an exact discrete Gauss–Bonnet theorem.

This chapter defines the mesh model before computing. We prove the angle-defect identity, distinguish integrated curvature from a chosen area-normalized density, and derive a common cotangent energy formula. We then separate approximation error, arithmetic error, and uncertainty in measured coordinates. A plot or increasingly fine mesh does not, by itself, establish a smooth convergence theorem.

Preparation is ordinary Euclidean triangle geometry, finite sums, and the [smooth Gauss–Bonnet theorem](gauss-bonnet.md). The preserved [curvature and certified-orientation chapter](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) supplies a separate planar estimator and exact uncertainty certificates. Its existing projects remain unchanged.

## 1. What object is being computed?

**Definition 17.1.** A finite Euclidean triangle surface is formed by gluing finitely many nondegenerate Euclidean triangles along matching full edges by length-preserving maps. We require its underlying space to be a compact two-dimensional manifold, possibly with boundary.

Nondegenerate means that each face has positive area and its edge lengths satisfy strict triangle inequalities. At an interior vertex the incident faces form one cyclic fan; at a boundary vertex they form one interval-shaped fan. Each internal edge belongs to two faces, and each boundary edge to one. These conditions exclude branching junctions and accidental collections of disconnected fans.

The intrinsic metric measures paths using their lengths in the individual flat triangles. A realization in $\\mathbb R^3$ is useful for visualization, but the angle data depend only on the triangle metrics and gluing. Extrinsic folding along an edge does not change those data. A self-intersecting picture needs a specified abstract gluing: visual intersections do not automatically identify points.

Away from vertices the intrinsic metric is locally flat. In a face this is immediate. Across an internal edge, unfold its two incident triangles into opposite sides of a plane line; a small neighborhood is isometric to a plane neighborhood. Thus a hinge can bend in space while carrying no intrinsic Gaussian angle defect along its open edge.

## 2. Integrated defects

**Definition 17.2.** If alpha_fv is the angle of face f at vertex v, define
$\\delta_v=2\\pi-\\sum_{f\\ni v}\\alpha_{fv}$
for an interior vertex. For a boundary vertex define
$\\tau_v=\\pi-\\sum_{f\\ni v}\\alpha_{fv}.$

The interior value is integrated Gaussian curvature in this polyhedral model. The boundary value combines boundary turning at that vertex. It can be negative at a reentrant boundary point. Neither is an ordinary smooth pointwise curvature value.

A full flat fan has total angle $2\\pi$ and zero interior defect. A boundary point on a straight unfolded boundary has incident angle sum pi and zero boundary turn. Positive interior defect indicates that less than one full Euclidean angle fits around the vertex; negative defect indicates an excess.

These quantities are dimensionless angles. Smooth Gaussian curvature has inverse-area units, while its integral against area is dimensionless. This is why an angle defect corresponds to an integral rather than immediately to a pointwise K.

## 3. Exact discrete Gauss–Bonnet

**Theorem 17.3.** For a finite Euclidean triangle surface satisfying Definition 17.1,
$\\sum_{\\text{interior }v}\\delta_v+
\\sum_{\\text{boundary }v}\\tau_v
=2\\pi(V-E+F).$

*Proof.* Let Vi,Vb count interior and boundary vertices, and Ei,Eb count internal and boundary edges. Every Euclidean triangle has angle sum pi, so summing all incident face angles over vertices gives pi F. Therefore the left side is
$2\\pi V_i+\\pi V_b-\\pi F.$
Count face-edge incidences: $3F=2E_i+E_b$. Every boundary component is a finite polygonal cycle, so $E_b=V_b$. It follows that
$2\\pi(V-E+F)
=2\\pi(V_i+V_b)-\\pi(3F+E_b)+2\\pi F
=2\\pi V_i+\\pi V_b-\\pi F.$
This equals the defect sum. $\\square$

Unlike the smooth proof, this calculation needs no differentiable frame or curvature derivative. It uses exact Euclidean face angle sums and the incidence structure of a genuine surface. Orientation is not required for these intrinsic angle counts. A nonmanifold mesh with three faces sharing an edge falls outside the hypotheses; applying the same vertex formulas need not produce the same Euler identity.

For a closed polyhedral sphere, chi=2 and total defect is $4\\pi$. Some vertices may have negative defect even though the total is positive. The formula constrains the signed sum, not the sign at each vertex.

## 4. What subdivision preserves

**Proposition 17.4.** Subdividing the flat triangles without changing their intrinsic metric leaves old vertex defects unchanged and gives zero new defect at each newly inserted flat interior vertex, or zero turn at a new straight boundary vertex.

*Proof.* At an old vertex, subdivision splits its original incident angles into smaller angles with exactly the same sum. At a point inside a face, new triangles fill a full plane neighborhood, giving total $2\\pi$. At a point on an old internal edge, the unfolded two-sided neighborhood is also a full plane neighborhood. On an old boundary edge it is a half-plane neighborhood, giving total pi. Substitution into the definitions proves the claim. $\\square$

A face split by an interior vertex changes the counts by Delta V=1, Delta E=3, Delta F=2, preserving V-E+F. Splitting an internal edge and retriangulating its two faces has the same count changes. Splitting a boundary edge has changes 1,2,1, also preserving the alternating sum.

Refining a mesh approximation to a curved surface is usually a different operation. New vertices may be projected onto the curved surface, changing edge lengths and face angles rather than merely subdividing the old flat metric. Proposition 17.4 does not claim those defects stay fixed. A convergence theorem must specify the sampled surface, placement of vertices, mesh-quality conditions, and the sense in which curvature is compared.

## 5. Worked examples

### Worked example 1 — The regular tetrahedron

Three equilateral face angles pi/3 meet at each of the four vertices. Thus
$\\delta=2\\pi-3(\\pi/3)=\\pi.$
The sum is $4\\pi$. Its counts V=4,E=6,F=4 give chi=2, verifying the theorem.

If its edge length is L, each face has area $\\sqrt3L^2/4$. Allocating one third of each incident face to a vertex gives vertex area A=$\\sqrt3L^2/4$. The corresponding density is
$\\delta/A=\\frac{4\\pi}{\\sqrt3L^2}.$
That density is a chosen mesh quantity. It is not the smooth curvature of a face, which is zero, and not automatically the curvature of a round sphere passing through the four vertices.

### Worked example 2 — The regular octahedron

Four equilateral angles meet at every vertex. Hence each defect is $2\\pi-4\\pi/3=2\\pi/3$. With six vertices the total is again $4\\pi$. Its counts V=6,E=12,F=8 also give chi=2.

The defects differ from the tetrahedron although the total and topology agree. Thus Gauss–Bonnet does not determine a unique local distribution. Both surfaces are flat on each open face and across unfolded open edges; the integrated intrinsic curvature is concentrated at their vertices.

### Worked example 3 — A flat square split along a diagonal

The diagonal creates two triangles but does not change the flat square metric. At each of the four boundary vertices the sum of incident triangle angles is pi/2, so tau=pi/2. Their total is $2\\pi$.

There are V=4,E=5,F=2, giving chi=1. The diagonal is internal but contributes no separate curvature term. Inserting the square's center and joining it to all corners produces a new interior vertex with angle sum $2\\pi$ and defect zero. The old boundary turns remain pi/2, exactly as subdivision invariance predicts.

### Worked example 4 — A cone from a sector

Take a Euclidean sector of angle beta=$3\\pi/2$ and glue its radial edges. Around the new apex the total incident angle is beta, giving defect $2\\pi-\\beta=\\pi/2$. Every point away from the apex is intrinsically flat.

A circle at intrinsic radial distance r has length beta r and local geodesic curvature 1/r, so its boundary turning integral is beta. Adding the apex defect gives $2\\pi$, the disk identity. The smooth part has K=0, while the singular point carries a nonzero integrated contribution. Ignoring that point would lose the correct total.

## 6. Area-normalized curvature is a convention

Choose positive vertex areas A_v that partition the total mesh area, for example by allocating one third of each incident triangle. One may define a density $K_v=\\delta_v/A_v$ at interior vertices. Then $\\sum_vK_vA_v=\\sum_v\\delta_v$ is an identity, not a convergence theorem.

Other positive allocations give other density values. Barycentric areas, circumcentric constructions, and application-specific dual cells need their own domain and positivity conditions. A circumcenter may lie outside an obtuse triangle, so an unsigned drawing of a dual cell should not silently stand in for a signed or positive-area definition.

If a mesh is enlarged by a factor c>0, every angle and defect remains unchanged, while areas multiply by c². The density therefore divides by c², matching smooth Gaussian-curvature units. Correct scaling is a useful consistency check but cannot prove accurate approximation: many poor estimators can have the right units.

Boundary tau values should not automatically be divided by area and called Gaussian curvature. In the discrete theorem they account for boundary turning, corresponding to the smooth boundary and corner terms. A boundary treatment must state whether it aims to estimate interior K, boundary geodesic curvature, or the combined integral identity.

## 7. A cotangent computation with its exact meaning

A common mesh operator comes from the energy of a piecewise-affine scalar function. We derive it to distinguish this construction from Gaussian angle defect.

Let a positively oriented plane triangle have vertices p_i,p_j,p_k and area A>0. Its barycentric coordinate functions lambda_i are affine, equal to one at their own vertex and zero at the other two. With J the positive quarter-turn,
$\\nabla\\lambda_i=\\frac{J(p_k-p_j)}{2A},$
and cyclic versions give the others. These formulas follow by checking their edge-normal direction and their change from zero to one across the appropriate altitude.

For distinct i,j, taking dot products gives
$\\nabla\\lambda_i\\cdot\\nabla\\lambda_j
=-\\frac{\\cot\\alpha_k}{2A},$
where alpha_k is the opposite angle. Indeed the relevant numerator is the negative dot product of the two edges from p_k, and their determinant is 2A.

**Proposition 17.5 (triangle energy).** If u is affine with vertex values u_i,u_j,u_k, then
$\\frac12\\int_{\\triangle}|\\nabla u|^2dA
=\\frac14\\left[
\\cot\\alpha_k(u_i-u_j)^2+
\\cot\\alpha_i(u_j-u_k)^2+
\\cot\\alpha_j(u_k-u_i)^2\\right].$

*Proof.* Write $\\nabla u=\\sum_lu_l\\nabla\\lambda_l$. Since $\\sum_l\\lambda_l=1$, their gradients sum to zero. Expanding the square and grouping pairs therefore gives
$|\\nabla u|^2=-\\sum_{l<m}(\\nabla\\lambda_l\\cdot\\nabla\\lambda_m)(u_l-u_m)^2$.
The gradient is constant across the triangle, so multiplying by A/2 and substituting the dot-product identity yields the formula. $\\square$

Summing over faces gives energy
$E(u)=\\tfrac14\\sum_{\\{i,j\\}}w_{ij}(u_i-u_j)^2$,
where w is the sum of cotangents of angles opposite that edge, with one term for a boundary edge. For a chosen positive area A_i, one common Laplacian convention is
$(\\Delta u)_i=\\frac1{2A_i}\\sum_jw_{ij}(u_j-u_i).$
It is minus the energy derivative divided by A_i. This is a discrete differential operator, not the Gaussian curvature defect.

An obtuse triangle has a negative cotangent. That does not make its complete energy negative: the exact energy is an integral of a square. Nonnegative individual interior-edge weights require an extra condition. If the two opposite angles are alpha,beta, then
$\\cot\\alpha+\\cot\\beta=\\sin(\\alpha+\\beta)/(\\sin\\alpha\\sin\\beta)$,
which is nonnegative when alpha+beta<=pi. This is the familiar intrinsic Delaunay angle condition. It is not true for an arbitrary mesh.

## 8. Approximation and certification

Suppose every computed incident face angle at v has a certified error at most epsilon, and v has m incident faces. If the constant pi is treated exactly, the computed defect error is at most m epsilon by the triangle inequality. If the chosen numerical representation of the initial 2pi also has an error bound, add that bound. High valence can amplify accumulated angular error even if every individual angle looks accurate.

Area normalization introduces another source. If $|\\widehat\\delta-\\delta|\\le\\eta_\\delta$ and $|\\widehat A-A|\\le\\eta_A<A$, then
$\\left|\\frac{\\widehat\\delta}{\\widehat A}-\\frac\\delta A\\right|
\\le\\frac{\\eta_\\delta}{A-\\eta_A}
+\\frac{|\\delta|\\eta_A}{A(A-\\eta_A)}.$
To prove it, add and subtract delta/hat A, use the two error bounds, and use $\\widehat A\\ge A-\\eta_A>0$. Tiny areas can make density highly sensitive even when angle defects are well controlled.

These are conditional error certificates: their hypotheses must actually be established. A difference between two rounded outputs is not an error enclosure. Measured coordinates may vary within an admitted set independently of arithmetic rounding, while mesh discretization can differ from the target smooth geometry even if every calculation on the mesh is exact.

The retained [certified-orientation chapter](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) makes these distinctions concrete for plane samples. Its regular-circle estimator has an explicit restricted sampling theorem. That theorem should not be transferred to arbitrary surface meshes merely because both computations use angles.

## 9. What a computation can establish

Exact triangle arithmetic and exact combinatorial counts establish a finite discrete theorem. Certified angle enclosures establish finite numerical bounds. A sequence of meshes can suggest convergence, but a general claim requires a theorem with mesh-quality and approximation hypotheses. Poorly shaped triangles, missing topology, and unverified boundary conventions can all defeat an apparently plausible calculation.

Similarly a sampled mean curvature near zero is not a proof that a smooth surface is minimal, and an angle-defect density close to one at a handful of vertices is not a proof of a round sphere. The shape-operator laboratory reports finite differential estimates from its selected parametrizations; the mathematical chapters establish the identities beyond those samples.

The useful connection is therefore precise. Smooth and polyhedral geometry each possess an integrated curvature law, and their formulas motivate numerical models. Their agreement in suitable limits is a further statement to be proved for a specified approximation scheme, not a license to identify corners with smooth derivatives.

## Exercises

<a id="discrete-curvature-computation-ex-1"></a>
### Exercise 17.1

Calculate all vertex defects of a regular tetrahedron and their total.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Three equilateral angles meet at each vertex.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each face angle is pi/3.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Every defect is 2pi-3pi/3=pi. Four vertices therefore contribute 4pi. The count V-E+F=4-6+4=2 gives the same result through discrete Gauss–Bonnet. The edge length affects neither angles nor integrated defects.

</details>

<a id="discrete-curvature-computation-ex-2"></a>
### Exercise 17.2

Repeat for a regular octahedron.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Four equilateral faces meet at each vertex.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

There are six vertices.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

At each vertex the incident sum is 4pi/3, so defect is 2pi/3. Six copies sum to 4pi. The counts 6-12+8=2 verify the theorem. Its local defects differ from a tetrahedron's despite equal total curvature.

</details>

<a id="discrete-curvature-computation-ex-3"></a>
### Exercise 17.3

A flat interior fan has angles pi/2,pi/3,pi/6,pi. Find its defect and explain whether one listed face is allowed.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Sum the angles first.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Definition 17.1 excludes degenerate triangles.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The formal sum is 2pi, suggesting defect zero. But a face angle pi is impossible in a nondegenerate Euclidean triangle, so these data do not describe an allowed mesh fan. A valid replacement could split that pi contribution into two angles pi/2 from two different nondegenerate faces.

</details>

<a id="discrete-curvature-computation-ex-4"></a>
### Exercise 17.4

For one Euclidean triangle with angles A,B,C, prove the sum of its three boundary turns is 2pi.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every vertex is a boundary vertex.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use A+B+C=pi.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The sum is (pi-A)+(pi-B)+(pi-C)=3pi-pi=2pi. Its Euler count is 3-3+1=1. This is the simplest boundary instance and shows why the boundary reference angle is pi rather than 2pi.

</details>

<a id="discrete-curvature-computation-ex-5"></a>
### Exercise 17.5

Prove the discrete Gauss–Bonnet formula directly from counts.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Sum face angles by vertices.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Then eliminate Ei and Eb.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The defect sum is 2pi Vi+pi Vb-pi F because every face contributes pi. With 3F=2Ei+Eb and Eb=Vb, one obtains 2pi(V-E+F)=2pi Vi+pi Vb-pi F. Thus the two expressions agree. The edge-incidence identities use the surface hypotheses.

</details>

<a id="discrete-curvature-computation-ex-6"></a>
### Exercise 17.6

Insert a vertex inside one flat face and join it to its three corners. What happens to defects and Euler characteristic?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The new triangles fill a plane around the inserted vertex.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Track count changes.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The new interior vertex has incident angle sum 2pi and defect zero. At the old corners the face angle is merely split, so their defects are unchanged. The count changes are Delta V=1, Delta E=3, Delta F=2, preserving chi. This is intrinsic subdivision, not projection onto a different curved metric.

</details>

<a id="discrete-curvature-computation-ex-7"></a>
### Exercise 17.7

A vertex has defect pi/6 and allocated area 2. Find its density, then enlarge the mesh by factor three.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Angles are unchanged.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Area scales by nine.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The original density is pi/12. After scaling the area is 18 and the defect remains pi/6, so the density is pi/108, one ninth of its original value. The integrated contribution density times area is unchanged.

</details>

<a id="discrete-curvature-computation-ex-8"></a>
### Exercise 17.8

A cone is formed from a sector of angle 5pi/3. Find the apex defect and the boundary curvature integral at radius r.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The apex angle sum is the sector angle.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The circular boundary has length beta r and curvature 1/r.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The apex defect is 2pi-5pi/3=pi/3. The boundary integral is (1/r)(5pi r/3)=5pi/3. They sum to 2pi, consistent with the disk topology. The regular part contributes no smooth Gaussian curvature.

</details>

<a id="discrete-curvature-computation-ex-9"></a>
### Exercise 17.9

Why can three faces sharing one edge invalidate the discrete theorem's proof?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect the face-edge count.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Such an edge is not an ordinary surface neighborhood.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The identity 3F=2Ei+Eb assumes each internal edge has exactly two incident faces. A three-face junction contributes three incidences instead and has a branching local neighborhood rather than a disk. The stated vertex formulas and Euler conversion therefore cannot be applied without a different nonmanifold model.

</details>

<a id="discrete-curvature-computation-ex-10"></a>
### Exercise 17.10

Suppose a valence-6 vertex has each angle error at most 10^-4 radians. Give a defect error bound and explain what it does not bound.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Add absolute angle errors.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

No smooth target approximation was specified.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

With exact 2pi, the defect error is at most 6 times 10^-4 radians. An additional bound for the represented 2pi must be added if needed. This controls arithmetic or input-angle errors under the stated certificates, not discrepancy between the polyhedral metric and an unknown smooth surface. It also does not directly bound an area-normalized density without an area error bound.

</details>

## Sources

The finite proofs and examples are supplied directly. For classical smooth context see [Peter Petersen, Classical Differential Geometry](https://www.math.ucla.edu/~petersen/DiffGeo.pdf) and [Anton Petrunin and Sergio Zamora Barrera](https://anton-petrunin.github.io/gauss/index.html). The preserved internal source [Curvature, Turning and Certified Orientation](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) supplies its own separate estimator and uncertainty theorems; no legacy project or solution is replaced here.

## Summary

A valid Euclidean triangle surface has exact interior angle defects and boundary turns whose sum is 2pi chi. Subdivision of its unchanged flat metric preserves those integrated quantities. Dividing defect by area creates a convention-dependent density, and cotangent energies define a different discrete operator. Exact finite identities, numerical error certificates, measurement uncertainty, and smooth-mesh convergence are separate claims requiring separate hypotheses.
`;export{e as default};