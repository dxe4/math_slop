var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: gauss-bonnet
title: "Gauss-Bonnet"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Gauss-Bonnet

Gaussian curvature is local: its value at one point follows from derivatives near that point. Gauss–Bonnet gives a global constraint on its integral. For a compact oriented surface, the total combines with boundary turning and corner angles to equal $2\\pi$ times Euler characteristic.

The proof has distinct analytic and topological ingredients. We supply the moving-frame identities, the local integral argument, and the complete summation that handles boundaries and corners. We explicitly import existence of a suitable finite piecewise-smooth triangulation. We also use the simple-plane-boundary turning theorem already proved in [global plane curves](global-plane-curves.md). Neither input is disguised as an immediate consequence of a picture.

Surfaces are $C^3$ and oriented. Boundary arcs are regular $C^2$, with finitely many nonreversing corners and no cusps. At a corner the interior angle lies strictly between zero and $2\\pi$; smooth joining points can be treated as angle $\\pi$. The boundary orientation always keeps the region on the left relative to the chosen surface orientation.

## 1. Signed curvature of a boundary

Let $T$ be the unit tangent along a smooth boundary arc, n the chosen surface normal, and $JT=n\\times T$. The signed geodesic curvature is
$k_g=\\left\\langle\\frac{DT}{ds},JT\\right\\rangle.$
A plane circle traversed counterclockwise with upward normal has positive geodesic curvature. An inner boundary of a plane annulus is traversed clockwise and has negative geodesic curvature.

At a corner with interior angle alpha, define its exterior turn to be
$\\varepsilon=\\pi-\\alpha.$
It lies in (-pi,pi) under the nonreversing hypothesis and can be negative at a reentrant corner. Summing unsigned angle changes would give an incorrect formula for a nonconvex boundary.

Choose a positive orthonormal frame e1,e2 over one patch and set $\\omega(V)=\\langle D_Ve_1,e_2\\rangle$. The preceding chapters proved
$d\\omega=-K\\,dA,\\qquad
k_g=\\frac{d\\theta}{ds}+\\omega(T),$
where theta is the tangent angle relative to the frame. To recall the second identity, write $T=\\cos\\theta\\,e_1+\\sin\\theta\\,e_2$, differentiate, and project tangentially. The coefficient of JT is exactly the displayed sum. This uses a signed angle, not the ordinary curvature magnitude.

## 2. Why frame-relative total turning is one full turn

A local proof needs the total change in theta around a simple boundary, including its corner jumps. This is not obtained by integrating theta' and declaring its endpoints equal: the tangent direction returns, but a real angle lift may change by a nonzero multiple of $2\\pi$.

**Lemma 15.1.** For a positively oriented simple piecewise-$C^2$ boundary of a disk lying with its closure inside one positive coordinate patch, the total frame-relative tangent turning is $2\\pi$.

*Proof.* Apply Gram–Schmidt to the coordinate basis, giving
$X_u=a e_1$ and $X_v=b e_1+c e_2$ with a,c>0. If w=(u',v') is the coordinate boundary velocity, its orthonormal components are Bw, where
$B=\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}.$
Along the boundary, replace B continuously by $(1-t)B+tI$, for 0<=t<=1. Every intermediate matrix has positive diagonal and is invertible. Thus the normalized nonzero tangent direction is continuously deformed to the coordinate tangent direction without becoming zero.

At a corner, connect the incoming and outgoing directions by the signed principal turn in (-pi,pi). The two directions never become opposite under an intermediate invertible linear map: opposite images would imply opposite original directions. Hence these connecting arcs also vary continuously. The resulting closed circle-valued direction loops are homotopic, and their integer winding numbers are equal. Equivalently lift the angle continuously along the parameter interval; its endpoint change divided by $2\\pi$ is integer-valued and cannot change during a continuous deformation.

The coordinate boundary is positively oriented and simple. The piecewise-smooth turning theorem in global-plane-curves.md therefore gives total coordinate turn $2\\pi$. The frame-relative total turn is the same. $\\square$

The argument uses an explicit positive triangular deformation, so it does not silently assume that a varying coordinate basis has zero effect on winding. It also explains why a frame defined only along the boundary, without an appropriate extension over the region, is not interchangeable with the frame used here.

## 3. Full local theorem

**Theorem 15.2 (local Gauss–Bonnet).** Let D be a closed disk-shaped region lying with its closure in an oriented regular patch, and suppose its boundary satisfies the stated piecewise-$C^2$ conditions. Then
$\\int_DK\\,dA+\\int_{\\partial D}k_g\\,ds
+\\sum_j\\varepsilon_j=2\\pi.$

*Proof.* Integrate $k_g=\\theta'+\\omega(T)$ separately along the smooth boundary arcs. Add the exterior turns at their joining corners. Lemma 15.1 makes the total of the angle derivatives and corner turns equal $2\\pi$. Therefore
$\\int_{\\partial D}k_g\\,ds+\\sum_j\\varepsilon_j
=2\\pi+\\oint_{\\partial D}\\omega.$
Green's theorem in the parameter plane gives
$\\oint_{\\partial D}\\omega=\\int_Dd\\omega$.
The sign is positive because the coordinate chart and boundary are positively oriented. Substitute $d\\omega=-K\\,dA$ and rearrange. $\\square$

Green's theorem is the multivariable-calculus input, with a $C^1$ one-form on a neighborhood of the region and a piecewise-smooth boundary. The chosen $C^3$ surface gives sufficient frame regularity. No geodesic assumption on the boundary was needed. If the boundary arcs happen to be geodesics, their geodesic-curvature integrals vanish.

A region with holes does not satisfy this local disk statement with right side $2\\pi$. It can instead be subdivided into disk-shaped pieces; the next argument produces the correct Euler characteristic automatically.

## 4. The explicit topological input

**Imported triangulation input.** A compact smooth surface region, with finitely many piecewise-smooth boundary corners, admits a finite curvilinear triangulation subordinate to a given coordinate cover and respecting its boundary and specified corner points. Edges may be chosen piecewise smooth and regular, with nondegenerate face angles; each closed face lies in a coordinate neighborhood. Boundary vertices and edges form the boundary cycles.

We use this standard smooth-triangulation input without proving its existence here. The general smooth triangulation theory is associated with Cairns and Whitehead; see [Whitehead, On C1-Complexes](https://doi.org/10.2307/1968861). Petersen's classical surface treatment also explicitly takes existence of subdivisions as an input before its global summation. The stronger boundary-respecting form just stated is the precise input needed in this chapter.

A finite topological triangulation alone does not instantly provide differentiable edges and usable corner angles. Conversely choosing a few attractive geodesic triangles in a drawing does not prove they form a triangulation. Stating the input accurately avoids both shortcuts. We do not need a triangulation by geodesics: ordinary regular curved edges suffice because their internal curvature contributions cancel.

For a finite triangulation define $\\chi=V-E+F$. Here each geometric vertex, edge, and face is counted once after identifications. The triangulation and Euler-characteristic invariance are topological inputs; the summation below additionally shows that the value computed from any allowed triangulation is the same, since its geometric left side is fixed.

## 5. Full global theorem with boundary and corners

**Theorem 15.3 (global Gauss–Bonnet).** Let M be a compact oriented $C^3$ surface region with the stated boundary and corner regularity. With the imported triangulation input,
$\\int_MK\\,dA+\\int_{\\partial M}k_g\\,ds
+\\sum_{\\text{original boundary corners}}\\varepsilon_j
=2\\pi\\chi(M).$
The empty boundary contributes zero. The formula also holds for a finite disjoint union, by adding its components.

*Proof.* Choose the allowed triangulation and apply Theorem 15.2 to every closed triangular face, giving $2\\pi$ per face. Integrals over face interiors sum to the surface curvature integral. Each internal edge is traversed in opposite directions by its adjacent positive face boundaries.

Under reversal of a unit-speed edge, the acceleration as a geometric vector is unchanged but JT changes sign, so signed kg changes sign. Hence the two internal edge integrals cancel exactly. Boundary edges occur once and retain the induced orientation. Their sum is the boundary integral in the theorem.

It remains to sum face corner turns. Let Vi be the number of interior vertices. Split boundary vertices into Vb,s smooth ones introduced by subdivision and Vc original corners. Put Vb=Vb,s+Vc. At an interior vertex the incident face interior angles fill a full tangent-plane circle and sum to $2\\pi$. At a smooth boundary vertex they fill a half-plane and sum to pi. At an original corner j they fill precisely its surface interior angle alpha_j. Thus the sum S of all face exterior turns is
$S=3\\pi F-2\\pi V_i-\\pi V_{b,s}-\\sum_j\\alpha_j.$
Every triangular face has three corners, which explains the first term. Replacing $V_{b,s}=V_b-V_c$ and using $\\varepsilon_j=\\pi-\\alpha_j$ gives
$S=3\\pi F-2\\pi V_i-\\pi V_b+\\sum_j\\varepsilon_j.$

The summed local formulas now read
$\\int_MK\\,dA+\\int_{\\partial M}k_g\\,ds
+3\\pi F-2\\pi V_i-\\pi V_b+\\sum_j\\varepsilon_j
=2\\pi F.$
Therefore their desired left side equals
$2\\pi V_i+\\pi V_b-\\pi F$.

For the combinatorial conversion, write Ei,Eb for internal and boundary edges. Counting face-edge incidences gives $3F=2E_i+E_b$. Counting boundary cycle edges gives $E_b=V_b$. Consequently
$2\\pi(V-E+F)
=2\\pi(V_i+V_b)-\\pi(3F+E_b)+2\\pi F
=2\\pi V_i+\\pi V_b-\\pi F.$
This is exactly the preceding geometric expression, proving the theorem. $\\square$

The proof includes both introduced smooth boundary vertices and original corners. Omitting that distinction can leave an erroneous extra multiple of pi. It also demonstrates why neither internal edges nor internal vertices can simply be ignored before their contributions have been accounted for.

For a closed oriented compact surface, the theorem reduces to $\\int_MK\\,dA=2\\pi\\chi(M)$. Applying surface classification to replace chi by $2-2g$ is an additional topological step, not necessary for Gauss–Bonnet itself. We do not prove classification again here.

## 6. Worked examples

### Worked example 1 — A flat disk and a flat annulus

A plane disk of radius R has K=0. Its counterclockwise boundary has kg=1/R and length $2\\pi R$, so the boundary integral is $2\\pi$. There are no corners and chi=1, verifying the theorem.

For an annulus, the outer boundary is counterclockwise and contributes $2\\pi$, while the inner boundary is clockwise and contributes $-2\\pi$. Their sum is zero, agreeing with chi=0. Summing unsigned boundary curvature would falsely produce $4\\pi$. Boundary orientation is mathematical data.

### Worked example 2 — A spherical cap

On a radius-R outward sphere, take the northern cap $0\\le\\theta\\le\\theta_0$ with $0<\\theta_0<\\pi$. Its area is
$\\int_0^{2\\pi}\\int_0^{\\theta_0}R^2\\sin\\theta\\,d\\theta\\,d\\phi
=2\\pi R^2(1-\\cos\\theta_0).$
Since K=1/R², its curvature integral is $2\\pi(1-\\cos\\theta_0)$.

The induced latitude direction is increasing longitude. Its geodesic curvature is $\\cos\\theta_0/(R\\sin\\theta_0)$ and its length is $2\\pi R\\sin\\theta_0$, so its boundary integral is $2\\pi\\cos\\theta_0$. Adding gives $2\\pi$, the disk right side. The sign becomes negative for a cap extending beyond a hemisphere, exactly as the formula requires.

### Worked example 3 — The spherical octant

Join the three positive coordinate-axis points on a radius-R sphere by their short great-circle arcs. Each edge is geodesic, so its kg term is zero. Each interior angle is pi/2, hence each exterior turn is pi/2.

The region occupies one eighth of the sphere, so its curvature integral is $(1/R^2)(4\\pi R^2/8)=\\pi/2$. Adding the three exterior turns gives $2\\pi$. Equivalently its three interior angles sum to $3\\pi/2$, exceeding pi by its integrated curvature. This calculation proves the example directly and agrees with the general theorem.

### Worked example 4 — Signed cancellation on a torus

For the standard torus R>a>0,
$K=\\cos v/[a(R+a\\cos v)]$ and
$dA=a(R+a\\cos v)\\,du\\,dv$.
Thus over one full parameter period,
$\\int K\\,dA
=\\int_0^{2\\pi}\\int_0^{2\\pi}\\cos v\\,dv\\,du=0.$
The positive outer and negative inner curvature cancel. The torus has chi=0, so Gauss–Bonnet agrees. This is an actual integral calculation, not merely a prediction from a drawing.

## 7. Scope and interpretation

The theorem concerns signed curvature. Integrating |K| gives a different quantity and generally does not equal $2\\pi\\chi$. Normal reversal does not change K, but boundary orientation and the sign convention for kg must be coordinated.

Compactness makes the finite subdivision and finite integrals available. For a noncompact surface, an exhaustion produces boundary terms that must be controlled; dropping them does not extend the theorem. Self-intersecting loops need winding or multiplicity conventions absent from the simple-boundary statement. Nonorientable surfaces have versions using appropriate area measures or orientation covers, but we have proved the oriented version and do not silently import those extensions.

The differential part is now complete: Gauss equations, connection curvature, geodesic turning, and the local-to-global sum have all been supplied. The named existence of a suitable triangulation and the earlier planar turning result remain visible dependencies. Constant-curvature examples in the next chapter turn this identity into angle-excess and angle-defect area formulas.

## Exercises

<a id="gauss-bonnet-ex-1"></a>
### Exercise 15.1

Compute every Gauss–Bonnet term for a plane square of side a>0.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Straight edges have zero geodesic curvature.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each interior angle is pi/2.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The interior Gaussian curvature and all smooth edge kg integrals vanish. Each of four exterior turns is pi-pi/2=pi/2, summing to 2pi. Since a square is a disk-shaped region, chi=1 and the right side is 2pi. Its side length does not affect this dimensionless identity.

</details>

<a id="gauss-bonnet-ex-2"></a>
### Exercise 15.2

Check the theorem on a plane annulus using boundary signs.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The inner component has the opposite traversal direction.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Do not sum unsigned curvatures.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

K=0. The outer counterclockwise circle contributes 2pi and the inner clockwise circle contributes -2pi, so the total is zero. There are no corners and chi=0. The cancellation fails if one incorrectly assigns both boundaries counterclockwise orientation.

</details>

<a id="gauss-bonnet-ex-3"></a>
### Exercise 15.3

A spherical geodesic triangle has angles pi/2,pi/3,pi/3 on a radius-R sphere. Find its area.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Its boundary curvature vanishes.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Convert exterior turns into interior angles.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For three corners, the theorem gives area/R²+3pi-(pi/2+pi/3+pi/3)=2pi. Thus area/R²=7pi/6-pi=pi/6, so area=pi R²/6. This presupposes the stated simple geodesic triangle exists with those angles and lies in the allowed surface region.

</details>

<a id="gauss-bonnet-ex-4"></a>
### Exercise 15.4

For theta0=2pi/3 compute both integrals on a spherical cap.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cosine is negative.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the cap formulas with signed boundary curvature.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Cos theta0=-1/2, so the curvature integral is 2pi(1+1/2)=3pi and the boundary integral is -pi. Their sum is 2pi. The cap is still topologically a disk; extending past the hemisphere changes the sign of its latitude geodesic curvature.

</details>

<a id="gauss-bonnet-ex-5"></a>
### Exercise 15.5

Why do internal edge geodesic-curvature integrals cancel?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The two induced boundary traversals are opposite.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Track T, its acceleration, and JT under reversal.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Reversal changes T to -T but leaves the geometric acceleration dT/ds unchanged after reparametrization. Since J is fixed by surface orientation, JT changes sign. Therefore kg changes sign while ds stays positive. The paired integrals sum to zero.

</details>

<a id="gauss-bonnet-ex-6"></a>
### Exercise 15.6

Prove 3F=2Ei+Eb and Eb=Vb for an allowed triangulation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Count incidences rather than pictures.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each boundary component is a finite cycle.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Every triangular face has three edge incidences. An internal edge belongs to two faces and a boundary edge to one, giving 3F=2Ei+Eb. Each boundary cycle has equal numbers of vertices and edges, and summing components gives Eb=Vb. These statements require a genuine surface triangulation.

</details>

<a id="gauss-bonnet-ex-7"></a>
### Exercise 15.7

What is the total curvature of a closed oriented surface with chi=-2?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The boundary is empty.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply the global formula without any sign restriction on pointwise K.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The integral is 2pi(-2)=-4pi. This does not imply K is negative at every point; positive and negative regions may coexist, but their signed integral must have the stated value. An integral of absolute curvature would be a different question.

</details>

<a id="gauss-bonnet-ex-8"></a>
### Exercise 15.8

Explain why local Gauss–Bonnet needs the total turning lemma, not just theta(end)=theta(start).

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A direction is circle-valued.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A continuous real angle lift can gain a full turn.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The tangent direction returns to itself, so its angle change is an integer multiple of 2pi, not necessarily zero. The simple positive boundary theorem identifies that integer as one, including corner jumps. Omitting it would leave the local right side undetermined.

</details>

<a id="gauss-bonnet-ex-9"></a>
### Exercise 15.9

A positively traversed disk has smooth boundary integral 5pi/3 and no corners. Find its curvature integral and local holonomy.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use chi=1.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the transport identity modulo 2pi.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Gauss–Bonnet gives integral K dA=2pi-5pi/3=pi/3. For a chart-contained loop the parallel returned angle is pi/3 modulo 2pi. The two conclusions use compatible orientation conventions; reversing traversal reverses the holonomy sign.

</details>

<a id="gauss-bonnet-ex-10"></a>
### Exercise 15.10

Identify the missing ingredients in a purported proof that simply draws geodesic triangles and sums their angle excesses.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Local angle excess is already a theorem.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The triangles must actually form a finite permitted subdivision.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

One must first prove the local curvature-plus-boundary-turn identity, or the geodesic triangle specialization. One must also establish or explicitly import existence of a finite chart-subordinate triangulation with valid edges and corners. Finally internal edges, vertex angle sums, and Euler incidence counts must be justified. A drawing supplies none of these universally.

</details>

## Sources

The local differential argument and complete boundary/corner summation are supplied above. Primary-author comparisons are [Peter Petersen, Classical Differential Geometry, Sections 6.4–6.5](https://www.math.ucla.edu/~petersen/DiffGeo.pdf), and [Anton Petrunin and Sergio Zamora Barrera, Gauss–Bonnet chapter](https://anton-petrunin.github.io/gauss/index.html). Smooth triangulation is explicitly imported; the foundational reference is J. H. C. Whitehead, [On C1-Complexes](https://doi.org/10.2307/1968861), Annals of Mathematics 41 (1940), 809–824. The preserved [Gauss–Bonnet article](/articles/ga-dg-gauss-bonnet/) remains a shorter companion.

## Summary

The frame identity d omega=-K dA and signed tangent turning prove local Gauss–Bonnet. Summing over an explicitly imported suitable triangulation cancels internal edge curvature and converts corner sums into 2pi chi. The resulting global theorem includes smooth boundary curvature and original corner turns. Omitting either term changes the statement. Constant-curvature triangle area formulas follow next; no global surface classification was needed for this proof.
`;export{e as default};