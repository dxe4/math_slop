var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: first-fundamental-form
title: "The First Fundamental Form"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The First Fundamental Form

A coordinate map can stretch a surface grid unevenly. Equal changes in longitude have different physical lengths near a sphere's equator and near a pole. Even perpendicular coordinate axes can map to nonperpendicular tangent directions. The first fundamental form records exactly how coordinate displacements become lengths and angles, without relying on the visual spacing of grid lines.

We use the tangent planes established in the previous chapter. The Euclidean dot product restricts to each tangent plane and is positive definite there. Coordinates turn that inner product into a two-by-two matrix. The matrix depends on the chart, while the geometric lengths and angles it computes do not. Proving this distinction prepares us for intrinsic curvature and local isometries later in the book.

## Definitions and positive definiteness

**Definition 9.1 — First fundamental form.** At $p\\in S$, define $I_p(w,z)=w\\cdot z$ for $w,z\\in T_pS$. In a regular patch $X(u,v)$ write

$$E=X_u\\cdot X_u,\\qquad F=X_u\\cdot X_v,\\qquad G=X_v\\cdot X_v,\\qquad
g=\\begin{pmatrix}E&F\\\\F&G\\end{pmatrix}.$$

For tangent components $a=(a^1,a^2)^T$ and $b=(b^1,b^2)^T$, the corresponding vectors have inner product $a^Tgb$. The shorthand $ds^2=E\\,du^2+2F\\,du\\,dv+G\\,dv^2$ records this quadratic form; it is not a finite-distance formula between arbitrary coordinate points.

**Proposition 9.2 — Positivity and the Gram determinant.** In a regular patch, $E>0$, $G>0$, and $EG-F^2=\\|X_u\\times X_v\\|^2>0$. Consequently $a^Tga>0$ for every nonzero component vector $a$.

**Proof.** The first two quantities are squared norms of nonzero derivative vectors. The cross-product identity $\\|u\\times v\\|^2=\\|u\\|^2\\|v\\|^2-(u\\cdot v)^2$ follows by expansion in coordinates. It gives the determinant identity, and regularity makes its right side positive. Finally $a^Tga=\\|a^1X_u+a^2X_v\\|^2$; independence makes this vector nonzero when $a\\ne0$. $\\square$

Conversely, for any two vectors the Gram matrix is positive definite exactly when they are independent. This supplies an alternative rank test: a candidate surface metric matrix with zero determinant signals a failure of the chosen coordinate derivative basis. It does not necessarily signal a singular point of the underlying surface, as the sphere's polar chart demonstrates.

## Lengths, angles and area

**Theorem 9.3 — Length in coordinates.** For a piecewise-$C^1$ coordinate path $c(t)=(u(t),v(t))$ contained in a patch, its surface image has length

$$L=\\int_a^b\\sqrt{E(u')^2+2Fu'v'+G(v')^2}\\,dt.$$

**Proof.** The chain rule gives $\\gamma'=X_uu'+X_vv'$. Taking its squared norm produces the displayed quadratic expression. The speed-integral theorem from Chapter 2 then gives length. Finite piecewise smoothness is handled by adding the lengths of its pieces. If a route crosses chart boundaries, divide it into finitely many chart-contained pieces on a compact parameter interval; the following invariance proof makes their values agree on overlaps. $\\square$

For two nonzero tangent vectors with coordinate columns $a,b$, their angle $\\theta\\in[0,\\pi]$ is specified by

$$\\cos\\theta=\\frac{a^Tgb}{\\sqrt{a^Tga}\\sqrt{b^Tgb}}.$$

The positive denominators follow from regularity. In particular the coordinate curves are perpendicular exactly when $F=0$. Their individual speeds are $\\sqrt E$ and $\\sqrt G$. Orthogonality says nothing by itself about whether these speeds are equal or constant.

**Definition 9.4 — Area element.** In a regular injective patch the surface-area element is

$$dA=\\|X_u\\times X_v\\|\\,du\\,dv=\\sqrt{EG-F^2}\\,du\\,dv.$$

The first expression is the surface-integral formula from multivariable calculus: the derivative maps a coordinate parallelogram to a tangent parallelogram with this area factor. This chapter does not claim a new measure-theoretic construction of surface area. It proves that the formula is independent of chart, so calculations made with that established calculus definition are geometrically consistent. Injectivity avoids counting several covers of the same surface region as if they were distinct area.

## Change of coordinates

**Theorem 9.5 — Metric and area transformation.** If $Y=X\\circ\\phi$ and $J=D\\phi$ is its invertible coordinate Jacobian, then

$$g_Y=J^T(g_X\\circ\\phi)J,\\qquad
\\det g_Y=(\\det J)^2(\\det g_X)\\circ\\phi.$$

The length, angle and area formulas agree between the two charts.

**Proof.** The derivative relation is $DY=(DX\\circ\\phi)J$. Multiplying its transpose by itself gives the matrix identity, since $g_X=DX^TDX$. Taking determinants gives the second identity. For a coordinate path $c$, its old component velocity is $Jc'$. Thus $c'^Tg_Yc'=(Jc')^Tg_X(Jc')$, so the same surface speed is computed. The bilinear identity gives the same conclusion for angle numerators and their norm denominators. For area, the positive square root of the determinant gains $|\\det J|$, exactly the factor in the two-dimensional change-of-variables formula. Hence integrals over the same surface region agree. $\\square$

The transpose placements are necessary. A coordinate basis change acts on a bilinear form from both sides, not by ordinary similarity. In particular the numerical eigenvalues of $g$ in arbitrary coordinates are not principal curvatures and are not independent of coordinates. They measure the chosen parametrization's stretch relative to the Euclidean metric on its parameter plane. Later the shape operator is an operator on the tangent plane, a different object with a different transformation law.

Orientation reversals change the sign of the area vector $X_u\\times X_v$, but not its norm or scalar area. An integral of a scalar density therefore needs the absolute Jacobian. An oriented flux integral uses a consistently chosen normal and its corresponding signed area vector. Mixing the two conventions would make scalar area change sign when chart coordinates are interchanged.

## Worked examples

### Worked example 1 — An oblique grid in a flat plane

Take $X(u,v)=(u+v,v,0)$. The derivative vectors are $(1,0,0)$ and $(1,1,0)$, so $E=1$, $F=1$, $G=2$, and $EG-F^2=1$. Although the surface is a plane, its coordinate curves meet at angle with cosine $1/\\sqrt2$, hence angle $\\pi/4$. Along $u=v=t$, $0\\le t\\le1$, the metric speed squared is $1+2+2=5$, giving length $\\sqrt5$. Directly the surface path is $(2t,t,0)$ with the same speed. Dropping the mixed term would instead give $\\sqrt3$, an incorrect answer caused by treating a nonorthogonal basis as orthogonal. The unit parameter square has area one because the area factor is one, even though its image is an oblique parallelogram.

### Worked example 2 — Unrolling a cylinder locally

For $X(u,v)=(R\\cos u,R\\sin u,v)$, the metric is $R^2du^2+dv^2$. Replacing the angular coordinate by $w=Ru$ makes it $dw^2+dv^2$, the flat plane metric. A coordinate path $(u,v)=(t,ct)$ for $0\\le t\\le T$ therefore has length $T\\sqrt{R^2+c^2}$. This is the familiar helix length, derived using only the surface metric.

The map $(w,v)\\mapsto(R\\cos(w/R),R\\sin(w/R),v)$ preserves these inner products locally. It is not globally injective, so it is not a global isometry between the whole plane and cylinder. Points whose $w$ coordinates differ by $2\\pi R$ have identical images. Local unrolling preserves path lengths on a chosen sheet while global identifications change which routes join two surface points.

### Worked example 3 — Sphere measurements and a polar chart

On a radius-$R$ sphere use

$$X(\\theta,\\phi)=(R\\sin\\theta\\cos\\phi,R\\sin\\theta\\sin\\phi,R\\cos\\theta),\\quad0<\\theta<\\pi.$$

On an angular branch avoiding its duplicate seam, its derivatives are perpendicular with squared norms $R^2$ and $R^2\\sin^2\\theta$. Thus $E=R^2$, $F=0$, $G=R^2\\sin^2\\theta$. A meridian segment has length $R|\\theta_2-\\theta_1|$, while a monotone longitude change at fixed colatitude has length $R\\sin\\theta\\,|\\phi_2-\\phi_1|$. The same angular change produces smaller physical travel near a pole.

The area element is $R^2\\sin\\theta\\,d\\theta\\,d\\phi$. Integrating first on strips bounded away from the poles and the seam, then taking their limits, gives total area $4\\pi R^2$. The omitted polar-cap integrals tend to zero, and a shrinking seam strip has area tending to zero by the same bounded integral. Exactly at a pole, $G=0$ in this formula because the longitude derivative vanishes; that point requires a different chart. It is not a point with a degenerate geometric inner product.

## Isometries and conformal coordinates

**Definition 9.6 — Local isometry.** A smooth map between surfaces is a local isometry when its differential is an inner-product isomorphism at every point. Equivalently, in coordinates its pullback metric equals the source metric. The inverse-function theorem then supplies local diffeomorphism neighborhoods. A global isometry here means a diffeomorphism with that property; the global bijection is part of the definition.

A local isometry preserves lengths of piecewise smooth paths because its differential preserves every velocity norm, and integration preserves the resulting equality. It also preserves angles by the inner-product formula. Conversely, if a smooth map preserves the lengths of every sufficiently short parametrized path and is a local diffeomorphism, differentiating the length of short path segments yields preservation of each tangent norm. Polarization, $2I(w,z)=\\|w+z\\|^2-\\|w\\|^2-\\|z\\|^2$, then gives preservation of the full inner product.

**Definition 9.7 — Conformal coordinates.** A chart is conformal when $g=\\lambda^2I_2$ for a positive function $\\lambda$. In such coordinates angles equal the corresponding Euclidean parameter angles, while lengths are scaled locally by $\\lambda$ and areas by $\\lambda^2$.

The equality of angles follows by cancelling the common factors in the cosine formula. Conversely, a positive inner product on a two-dimensional plane that gives all the Euclidean angles must make the two standard axes perpendicular and make $(1,1)$ and $(1,-1)$ perpendicular. The first condition makes the mixed term zero; the second makes the diagonal coefficients equal. Thus its matrix is a positive scalar multiple of the identity. Equal angle preservation does not imply that scalar is one.

For the stereographic sphere patch from Chapter 7, differentiation gives $E=G=4R^2/(1+u^2+v^2)^2$ and $F=0$. It is conformal, with factor $2R/(1+u^2+v^2)$, but not a local isometry from a flat plane with its ordinary metric. At the parameter origin the factor is $2R$, and it varies with distance from that origin. The map preserves angles while changing lengths and area; these three properties must not be interchanged.

## What the form does and does not determine

The first form determines lengths of given paths, angles of tangent directions, and area. It does not directly choose a shortest path or provide a closed expression for distance between arbitrary surface points. Finding geodesics requires a differential or variational argument, and global shortest routes require additional completeness and topology considerations. A path can be locally straight yet cease to minimize after travelling far enough.

Nor does the first form determine how a surface sits in space. A plane region and an unrolled cylinder have identical local metrics while their normals vary differently. The second fundamental form records that extrinsic bending. Gauss's later theorem will show that one special combination of extrinsic curvatures, Gaussian curvature, can nevertheless be recovered from the first form and its derivatives. That is a theorem to prove, not an assumption that all bending is intrinsic.

## A coordinate speed needs its metric coefficients

In the plane patch $r(u,v)=(2u,v,0)$, a coordinate displacement of one in the first direction covers twice the physical distance of the same coordinate displacement in the second direction. The first fundamental form has coefficients four, zero and one. Consequently the coordinate path $(u(t),v(t))=(t,t)$ has physical speed $\\sqrt5$, although its coordinate velocity has ordinary Euclidean norm $\\sqrt2$. Neither computation is contradictory: they measure vectors in different metrics.

The same issue affects angles. The coordinate vectors $(1,1)$ and $(1,-1)$ look perpendicular in an unweighted parameter drawing. Their surface tangent images are $(2,1,0)$ and $(2,-1,0)$, whose inner product is three. Their physical angle therefore has cosine three fifths. A parameter grid is an aid for locating points, not an automatic ruler or protractor. Applying the first fundamental form before interpreting a coordinate calculation is essential even for a perfectly flat surface. Curvature is not responsible for this discrepancy; the deliberate stretch of one coordinate already creates it.

## Exercises

### Exercise 9.1
<a id="first-fundamental-form-ex-1"></a>
Compute the first form of a graph $X(u,v)=(u,v,f(u,v))$ and its determinant.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Take the dot products of $(1,0,f_u)$ and $(0,1,f_v)$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The fourth-order product cancels in $EG-F^2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The coefficients are $E=1+f_u^2$, $F=f_uf_v$, and $G=1+f_v^2$. Their determinant is $(1+f_u^2)(1+f_v^2)-f_u^2f_v^2=1+f_u^2+f_v^2>0$. Thus every nonzero tangent component vector has positive squared length, in agreement with graph regularity. The area factor is the positive square root of that determinant.
</details>

### Exercise 9.2
<a id="first-fundamental-form-ex-2"></a>
For $X(u,v)=(u+v,v,0)$ find the angle between coordinate directions and the area factor.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The metric coefficients are $1,1,2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the cosine formula and the square root of the determinant.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The angle cosine is $F/\\sqrt{EG}=1/\\sqrt2$, so the angle is $\\pi/4$. The determinant is $2-1=1$, giving area factor one. An oblique coordinate grid can preserve area while distorting angles. The two properties impose different conditions on the derivative, so neither should be inferred from the other.
</details>

### Exercise 9.3
<a id="first-fundamental-form-ex-3"></a>
Find the length of the cylinder path $X(t,2t)$ for $0\\le t\\le\\pi$ when $R=3$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use metric $9du^2+dv^2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Both coordinate velocities are constant.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Here $u'=1$, $v'=2$, so squared speed is $9+4=13$. Integrating its constant positive square root over an interval of length $\\pi$ gives $\\pi\\sqrt{13}$. This length counts the chosen half-revolution and rise; it is not necessarily the shortest cylinder distance between the endpoint images, because different wrapping routes can connect the same points.
</details>

### Exercise 9.4
<a id="first-fundamental-form-ex-4"></a>
Prove the metric transformation law under a regular coordinate change.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Write $DY=DX\\,J$ at corresponding points.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Form $DY^TDY$ and keep the order of factors.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The chain rule gives $DY=DXJ$. Therefore $g_Y=DY^TDY=J^TDX^TDXJ=J^Tg_XJ$. This is a congruence law for a bilinear form. Its determinant is $(\\det J)^2\\det g_X$. Both statements are evaluated at corresponding parameters; omitting that composition would compare coefficients at unrelated points of the surface.
</details>

### Exercise 9.5
<a id="first-fundamental-form-ex-5"></a>
Why does scalar surface area use an absolute Jacobian under orientation reversal?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Area is a nonnegative density, while the cross product is oriented.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Take the positive square root of the determinant transformation.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The transformed Gram determinant is $(\\det J)^2\\det g$. Its positive square root is $|\\det J|\\sqrt{\\det g}$. That factor matches the ordinary change-of-variables formula for nonnegative area. The signed area vector instead gains $\\det J$ and reverses its normal direction. Using the signed factor for scalar area would make the same region have negative area after interchanging coordinate names.
</details>

### Exercise 9.6
<a id="first-fundamental-form-ex-6"></a>
On a radius-two sphere find the length of a quarter-longitude arc at colatitude $\\pi/6$, and compare with the equator.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A fixed-colatitude route has speed $R\\sin\\theta$ per unit longitude.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A quarter turn has longitude change $\\pi/2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At $\\theta=\\pi/6$, the physical latitude-circle radius is $2\\sin(\\pi/6)=1$, giving length $\\pi/2$. At the equator the radius is two, giving length $\\pi$. Equal coordinate changes do not have equal length because the coefficient $G=4\\sin^2\\theta$ varies. This is a chart measurement, not a claim that either latitude arc is a geodesic.
</details>

### Exercise 9.7
<a id="first-fundamental-form-ex-7"></a>
Show a local isometry preserves the length of every piecewise-$C^1$ path in its domain.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate the image path.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The differential preserves the norm of each velocity.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $\\gamma$, the image velocity is $df(\\gamma')$. By the local-isometry hypothesis its norm equals $\\|\\gamma'\\|$ at every smooth parameter value. Integrating the two equal speeds over each smooth piece gives equal lengths, and finite additivity joins the pieces. Global injectivity is unnecessary for this equality along a specified route, although it is necessary for a global isometry as defined here.
</details>

### Exercise 9.8
<a id="first-fundamental-form-ex-8"></a>
For $g=\\lambda^2I_2$ with $\\lambda>0$, prove angle preservation and find the area factor relative to the parameter plane.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Substitute the scalar matrix into the angle formula.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its determinant is $\\lambda^4$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The numerator of the cosine formula is $\\lambda^2a\\cdot b$, and its denominator is $\\lambda\\|a\\|\\lambda\\|b\\|$. Cancelling gives the ordinary Euclidean angle. The area factor is $\\sqrt{\\lambda^4}=\\lambda^2$. Tangent lengths are multiplied by $\\lambda$, so conformality alone need not preserve either lengths or area. Positivity of $\\lambda$ ensures the metric is nondegenerate.
</details>

### Exercise 9.9
<a id="first-fundamental-form-ex-9"></a>
Explain why the zero longitude coefficient at a sphere pole does not make the sphere's tangent inner product degenerate.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The longitude derivative itself vanishes there.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A metric matrix needs a basis, not two dependent coordinate vectors.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At a pole, the angular parametrization has $X_\\phi=0$, so its two displayed derivative vectors do not form a basis and it is not a valid patch. The geometric first form is still the positive Euclidean dot product on the actual two-dimensional tangent plane. A stereographic or graph patch produces an independent basis and a positive-definite matrix there. The failed coordinate matrix diagnoses the chart, not the surface metric.
</details>

### Exercise 9.10
<a id="first-fundamental-form-ex-10"></a>
Give a local length-preserving map between different embedded surfaces and explain why it does not preserve their normal variation.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Unroll a cylinder onto a plane region.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The two metrics agree after replacing angle by arc length.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The map $(w,v)\\mapsto(R\\cos(w/R),R\\sin(w/R),v)$ from a sufficiently narrow plane strip to a cylinder patch has derivative columns of unit length and zero dot product. It preserves the first form and hence all path lengths within that strip. The plane's normal is constant, while the cylinder's normal changes with $w$. Thus the first form records intrinsic measurements without determining extrinsic normal variation; that additional information belongs to the second fundamental form.
</details>

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The preserved local companions are [Unhurried first fundamental form](/articles/ga-dg-first-fundamental-form/), Quarto Calculus Chapter 28, and the unchanged [Surface Curvature Studio](../../visual-labs/parametric-surfaces-live.md). Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lecture 13, are a verified primary-author reference. Surface integration and the ordinary change-of-variables theorem are named calculus inputs; coordinate invariance is proved here.

## Summary

The first fundamental form is the Euclidean inner product restricted to tangent planes. Its Gram matrix computes path lengths, tangent angles and area factors, and the congruence transformation law proves independence of coordinates. Local isometries preserve these intrinsic measurements; conformal coordinates preserve angles with a possibly varying length scale. Neither coordinate singularities nor visible bending alone determine intrinsic geometry. The next chapter differentiates the surface normal to define the shape operator and second fundamental form.
`;export{e as default};