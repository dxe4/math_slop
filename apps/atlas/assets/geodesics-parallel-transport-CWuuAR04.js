var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: geodesics-parallel-transport
title: "Geodesics and Parallel Transport"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Geodesics and Parallel Transport

A straight line in space has zero acceleration. On a curved surface that condition is too restrictive: a great circle bends in space while remaining intrinsically straight. The appropriate derivative removes the normal part of ambient change. The same operation defines parallel transport of tangent arrows along a chosen route.

We construct that derivative using projections, prove the coordinate equations and their local solvability, and derive the angle formulas relating transport to curvature. A geodesic equation is a local differential condition. Global shortest-path claims require separate reasoning; a long great-circle arc is the standard warning.

Use $C^3$ regular surfaces for the coordinate existence arguments, and piecewise $C^1$ paths for transport. Unit-speed curvature formulas require $C^2$ paths. The convention is $S=-dn$, and J denotes positive quarter-turn in the tangent plane: $JV=n\\times V$. The preceding [intrinsic curvature chapter](theorema-egregium.md) supplies the Christoffel coefficients and connection form.

## 1. A derivative that stays on the surface

**Definition 14.1.** For a differentiable tangent vector field V(t) along a surface curve gamma, its covariant derivative is the tangent projection
$\\frac{DV}{dt}=V'-\\langle V',n\\rangle n.$
A parallel field satisfies DV/dt=0. A parametrized curve is a geodesic if $D\\gamma'/dt=0$.

Although V stays tangent, its ordinary derivative need not be tangent, since tangent planes change. Conversely DV/dt=0 does not mean V is constant in ambient space.

**Proposition 14.2 (product rule).**
$\\frac d{dt}\\langle V,W\\rangle
=\\left\\langle\\frac{DV}{dt},W\\right\\rangle
+\\left\\langle V,\\frac{DW}{dt}\\right\\rangle$
for tangent fields V,W.

*Proof.* Differentiate the ambient dot product. Removing normal components of V' and W' changes neither dot product, because the other factor is tangent. $\\square$

In particular, parallel transport preserves lengths and angles. For a geodesic, differentiating $\\|\\gamma'\\|^2$ gives zero, so its speed is constant. A constant curve is included. A nonconstant geodesic can be rescaled affinely to unit speed, but an arbitrary nonlinear change of parameter usually introduces tangential acceleration.

## 2. Coordinate equations

Write $\\gamma(t)=X(u^1(t),u^2(t))$ and $V=a^kX_k$ along it. Differentiation and Gauss's formulas give
$\\frac{DV}{dt}
=\\sum_k\\left((a^k)'
+\\sum_{i,j}\\Gamma^k_{ij}(u)(u^i)'a^j\\right)X_k.$
The normal terms disappear under projection. Consequently the geodesic equations are
$(u^k)''+\\sum_{i,j}\\Gamma^k_{ij}(u)(u^i)'(u^j)'=0,\\qquad k=1,2.$
These equations change their coefficients under a coordinate replacement, but the projected-derivative definition shows they describe the same surface curves.

The parallel-transport equations are linear in the unknown coefficients a when gamma is already fixed. The geodesic equations are nonlinear because the curve itself is unknown and appears inside both the coefficients and the velocity products. A theorem for linear equations cannot by itself establish local existence of geodesics.

## 3. Local existence without hiding the nonlinear step

**Lemma 14.3 (local Picard argument).** For a continuously differentiable vector field F on an open subset of $\\mathbb R^m$, the initial equation z'=F(z), z(0)=z0 has a unique solution on some interval about zero.

*Proof.* Choose a closed ball of radius b about z0 contained in the open domain. On it F is bounded by M, and its derivative is bounded by some L. The mean-value estimate along line segments makes F Lipschitz there with constant L. Choose h>0 so that hM<=b and q=hL<1; if either bound is zero the corresponding restriction is unnecessary.

Consider continuous paths z:[-h,h] into this closed ball, with z(0)=z0, using the supremum distance. Define
$(Tz)(t)=z0+\\int_0^tF(z(s))\\,ds.$
The bound hM<=b keeps Tz in the ball, and
$\\|Tz-Tw\\|_\\infty\\le q\\|z-w\\|_\\infty$.
Starting with the constant path z0, repeatedly apply T. Consecutive differences are bounded by a geometric sequence, so the iterates are uniformly Cauchy.

For completeness of this elementary path space, a uniformly Cauchy sequence has a pointwise limit in the complete Euclidean closed ball, and the uniform Cauchy estimate makes convergence uniform. The usual three-term estimate proves the limit continuous. Its value at zero is z0. Thus the iterates converge to an allowed path z. The Lipschitz estimate lets us pass to the limit in T, giving Tz=z. The fundamental theorem of calculus makes z differentiable and solves the equation.

If w is another solution staying in the ball on this interval, then $\\|z-w\\|_\\infty\\le q\\|z-w\\|_\\infty$, forcing equality. Any other local solution stays in the ball after restriction by continuity, so this gives local uniqueness. $\\square$

**Theorem 14.4.** Given a surface point and an initial tangent vector, there is a unique local geodesic with those initial data.

*Proof.* In a patch put z=(u^1,u^2,p^1,p^2), where p is coordinate velocity. The first-order system is $u'=p$ and
$(p^k)'=-\\Gamma^k_{ij}(u)p^ip^j$.
For a $C^3$ patch the Christoffel functions are $C^1$, so this vector field is $C^1$ on the patch-coordinate/velocity domain. Apply the lemma. The resulting coordinate solution gives a surface geodesic. Coordinate independence and local uniqueness make constructions in overlapping charts agree. $\\square$

The theorem is local. A solution may leave a coordinate chart without ceasing to exist geometrically, and an incomplete surface may have a geodesic reaching a missing boundary in finite time. Neither issue is resolved by one local existence interval.

## 4. Why shortest regular curves satisfy the equation

**Proposition 14.5 (energy first variation).** For a smooth variation gamma(t,s) with fixed endpoints, write W=partial_s gamma at s=0 and T=partial_t gamma. Then
$\\frac d{ds}\\frac12\\int_a^b\\|T\\|^2dt\\bigg|_{s=0}
=-\\int_a^b\\left\\langle W,\\frac{DT}{dt}\\right\\rangle dt.$

*Proof.* Differentiate under the integral on the compact parameter rectangle. Equality of mixed partials changes the integrand to $\\langle\\partial_tW,T\\rangle$. Integrate by parts. The endpoint term vanishes because W=0 there, leaving $-\\int\\langle W,T'\\rangle$. Since W is tangent, replacing T' by its tangent projection changes nothing. $\\square$

Thus geodesics are stationary for fixed-endpoint energy. Conversely if all such first variations vanish, DT/dt=0: if it were nonzero somewhere, choose a coordinate tangent field aligned with it at that point and multiply by a nonnegative bump supported sufficiently nearby. Continuity makes the integral strictly nonzero. Such fields arise from coordinate variations $u(t,s)=u(t)+s\\eta(t)$ on a small patch.

For a regular unit-speed reference curve, differentiating length gives the same first variation, because the derivative of the norm at a unit vector is its dot product with the variation. Hence a smooth length-minimizing curve parametrized by arc length must be geodesic. A stationary curve need not be globally minimizing. We do not infer global minimality from the vanishing first derivative.

## 5. Parallel transport exists and is reversible

For a fixed $C^1$ path, the coefficient equations for V are linear with continuous coefficients. The linear ODE lemma in [the fundamental theorem of curves](fundamental-theorem-curves.md) supplies existence and uniqueness for prescribed initial coefficients. If a compact path needs several charts, solve successively on finitely many chart subintervals and use the final vector as the next initial vector. Uniqueness makes the answer independent of the subdivision.

The transport map is linear because the equation is linear. Proposition 14.2 makes it an inner-product-preserving map between the starting and ending tangent planes. Reversing the path gives its inverse: the transported solution read backward satisfies the reversed equation, and uniqueness identifies it. Transport along concatenated paths is the composition of the two maps.

These claims remain valid for a path with finitely many corners by solving separately on its smooth pieces. The transported vector is matched continuously at each common endpoint. No corner turn is added to the vector itself merely because the path's tangent jumps.

## 6. Angles, geodesic curvature, and holonomy

Let e1,e2 be a positive orthonormal frame over a patch with connection form omega. A unit tangent field V along a path can locally be written
$V=\\cos\\alpha\\,e_1+\\sin\\alpha\\,e_2$.
Differentiating and projecting gives
$\\frac{DV}{dt}=(\\alpha'+\\omega(\\gamma'))JV.$
Thus V is parallel exactly when $\\alpha'=-\\omega(\\gamma')$.

For a unit-speed curve with tangent T and angle theta in the same frame, define signed geodesic curvature by $k_g=\\langle DT/ds,JT\\rangle$. The same calculation gives
$k_g=\\theta'+\\omega(T).$
The full ambient acceleration decomposes as
$T'=k_gJT+k_nn.$
The first coefficient measures turning within the surface; the second is normal curvature from the shape operator. Reversing the surface orientation changes the sign of kg, but the geodesic condition kg=0 remains unchanged.

For a closed loop contained with its spanning region in one oriented patch, integration and Green's theorem give
$\\Delta\\alpha=-\\oint\\omega=\\int_DK\\,dA\\pmod{2\\pi}.$
Here the region is on the left during traversal and we used $d\\omega=-K\\,dA$. The returned direction determines an angle only modulo a full turn. General loops not lying in one such patch need compatible frame changes or the global theorem; an unsigned area guess is not a replacement.

## 7. Worked examples

### Worked example 1 — All sphere geodesics are great circles

On a radius-R sphere, a geodesic's ambient acceleration is normal, so $\\gamma''=\\lambda(t)\\gamma$. Its speed c is constant. Differentiating $\\gamma\\cdot\\gamma=R^2$ twice gives $\\lambda=-c^2/R^2$. For c>0 the unique solution with initial point p and tangent v is
$\\gamma(t)=\\cos(ct/R)p+\\frac R c\\sin(ct/R)v.$
Since p is perpendicular to v and has length R, the curve stays on the sphere and in their two-dimensional span. It is a great circle. For c=0 the solution is constant.

A great-circle arc spanning $3\\pi/2$ is still geodesic, but the complementary $\\pi/2$ arc between its endpoints is shorter. This directly separates the equation from global minimality.

### Worked example 2 — Helices on a cylinder

Use distance coordinates $X(s,z)=(R\\cos(s/R),R\\sin(s/R),z)$. The metric is $ds^2+dz^2$, so all Christoffel coefficients vanish. The geodesic equations give s=at+b and z=ct+d.

Their images are helices when both a and c are nonzero, circles when c=0, and axial lines when a=0. Every case has constant speed $\\sqrt{a^2+c^2}$. Local unrolling explains the equation, but a curve wrapping many times may have a shorter competitor using a different lift between the same endpoints.

### Worked example 3 — A latitude turns within a sphere

At fixed colatitude theta0 in (0,pi), take increasing longitude on a radius-R sphere. The positive orthonormal coordinate frame has connection $\\omega=\\cos\\theta\\,d\\phi$. The unit tangent is e2, whose frame angle is constant pi/2. Since $d\\phi/ds=1/(R\\sin\\theta_0)$,
$k_g=\\frac{\\cos\\theta_0}{R\\sin\\theta_0}.$
It vanishes only at the equator. A latitude is round in space but generally not intrinsically straight.

Parallel transport around it changes frame angle by $-2\\pi\\cos\\theta_0$. Modulo 2pi this equals $2\\pi(1-\\cos\\theta_0)$, the curvature integral of the northern cap. The coordinate frame is defined along the latitude but not at the pole, so this agreement should be interpreted with frame changes modulo 2pi rather than pretending the longitude frame extends smoothly across the cap.

## 8. What has been proved

We have established a local initial-value theorem, a variational necessary condition for shortest regular curves, and exact transport identities. We have not proved a global existence theorem for minimizing paths on every surface, or the full theory of conjugate points and cut loci. In the explicit sphere and cylinder examples, suitable competitors already show why those further distinctions matter.

The next chapter combines the geodesic-curvature angle formula with the frame curvature identity. The remaining ingredient is the total turning of a simple planar boundary, proved earlier in [global plane curves](global-plane-curves.md).

## Exercises

<a id="geodesics-parallel-transport-ex-1"></a>
### Exercise 14.1

Prove that a geodesic has constant speed, including the zero-speed case.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Differentiate its squared speed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use tangent projection in the dot product.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

One has d||gamma'||²/dt=2<gamma'',gamma'>=2<Dgamma'/dt,gamma'>=0. Hence speed squared is constant and nonnegative. If its value is zero, the derivative gamma' vanishes everywhere on the interval and the curve is constant.

</details>

<a id="geodesics-parallel-transport-ex-2"></a>
### Exercise 14.2

Find the unit-speed sphere geodesic starting at (R,0,0) with velocity (0,0,1).

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the initial-data formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The initial vectors span the xz plane.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The speed is one, so gamma(t)=(R cos(t/R),0,R sin(t/R)). Its derivative at zero is (0,0,1), its squared norm is R², and gamma''=-gamma/R² is normal. Local uniqueness makes this the required geodesic.

</details>

<a id="geodesics-parallel-transport-ex-3"></a>
### Exercise 14.3

On a radius-2 cylinder, write a unit-speed helix whose unrolled direction has equal positive horizontal and vertical components.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use distance coordinate s, not angular coordinate.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Set both component velocities to 1/sqrt2.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Take s=t/sqrt2 and z=t/sqrt2. Then gamma(t)=(2cos(t/(2sqrt2)),2sin(t/(2sqrt2)),t/sqrt2). In the metric ds²+dz² its speed squared is 1/2+1/2=1 and its coordinate acceleration vanishes, so it is a unit-speed geodesic.

</details>

<a id="geodesics-parallel-transport-ex-4"></a>
### Exercise 14.4

Find geodesic curvature of the increasing-longitude latitude theta=pi/3 on a radius-3 outward sphere.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the frame connection.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Insert sine and cosine at pi/3.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The formula gives kg=cos(pi/3)/(3sin(pi/3))=(1/2)/(3sqrt3/2)=1/(3sqrt3). It is positive in the stated orientation and nonzero, so this latitude is not a geodesic. Reversing traversal changes its sign.

</details>

<a id="geodesics-parallel-transport-ex-5"></a>
### Exercise 14.5

Prove that parallel transport preserves inner products.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the derivative product rule.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both covariant derivatives vanish.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For parallel V and W, d<V,W>/dt=<DV/dt,W>+<V,DW/dt>=0. Therefore their inner product is constant. Taking V=W proves preservation of norms; applying the result to two nonzero fields gives angle preservation.

</details>

<a id="geodesics-parallel-transport-ex-6"></a>
### Exercise 14.6

Why is transport along the reversed route the inverse map?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Read a solution backward.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use uniqueness with its endpoint value as new initial data.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

If V(t) solves the forward equation, then V(b+a-t) along the reversed path has covariant derivative equal to the negative of the original zero derivative. It starts at the forward endpoint and ends at the original starting vector. Uniqueness identifies it with reversed transport, so the two maps compose to the identity.

</details>

<a id="geodesics-parallel-transport-ex-7"></a>
### Exercise 14.7

Write the parallel coefficient equations in Euclidean polar coordinates along r=R,theta=t.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the polar Christoffel symbols.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Keep the radial and angular coordinate basis lengths distinct.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The nonzero relevant symbols are Gamma^r_thetatheta=-R and Gamma^theta_thetar=1/R. Thus (a^r)'-R a^theta=0 and (a^theta)'+a^r/R=0. These equations describe a constant ambient arrow despite changing polar components; zero component derivatives would not be parallel in this moving basis.

</details>

<a id="geodesics-parallel-transport-ex-8"></a>
### Exercise 14.8

Derive the endpoint term in the energy variation before imposing fixed endpoints.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Integrate the derivative of <W,T>.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Do not discard boundary values prematurely.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The derivative is ∫<partial_t W,T>dt=[<W,T>]_a^b-∫<W,T'>dt. Since W is tangent, the last T' can be projected covariantly. Only for fixed endpoints, where W(a)=W(b)=0, does the bracket vanish. Free-endpoint problems require their own boundary conditions.

</details>

<a id="geodesics-parallel-transport-ex-9"></a>
### Exercise 14.9

For a positively traversed chart-contained region with integral K dA=pi/3, determine the returned parallel direction angle and the effect of reversing the route.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use -integral omega.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Angles are directions modulo 2pi.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The holonomy angle is pi/3 modulo 2pi. Reversal gives the inverse transport rotation, so the angle becomes -pi/3 modulo 2pi. The scalar area of the same geometric region need not change, but its signed traversal in the formula does.

</details>

<a id="geodesics-parallel-transport-ex-10"></a>
### Exercise 14.10

Does zero geodesic curvature prove a curve is globally shortest between its endpoints? Give a counterexample.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a great circle.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare a long arc with its complementary short arc.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

No. On a radius-R sphere, a great-circle arc of central angle 3pi/2 has kg=0 everywhere in its interior and length 3pi R/2. The complementary arc between those endpoints has length pi R/2. The local equation survives while global minimality fails.

</details>

## Sources

The proofs above are supplied directly. Primary-author comparisons: [Sucharit Sarkar, Math 120A notes, Lectures 16–18](https://www.math.ucla.edu/~sucharit/120A-notes.html), and [Anton Petrunin and Sergio Zamora Barrera, What Is Differential Geometry, chapters on geodesics and transport](https://anton-petrunin.github.io/gauss/index.html). Preserved companions: [geodesics](/articles/ga-dg-geodesics/) and [parallel transport](/articles/ga-dg-parallel-transport/).

## Summary

Tangent projection defines covariant differentiation. Geodesics solve a locally unique nonlinear initial-value equation and are stationary for fixed-endpoint energy. Parallel transport instead solves a linear equation along a prescribed path and preserves inner products. In an oriented frame, parallel angle satisfies alpha'=-omega(gamma') and geodesic curvature is theta'+omega(T). Their curvature integral leads to Gauss–Bonnet.
`;export{e as default};