
# Theorema Egregium

Gaussian curvature was defined by differentiating a normal in the surrounding space. Its formula uses the second fundamental form, which changes when a sheet is bent. Gauss's remarkable theorem says that their determinant combination nevertheless depends only on lengths and angles within the sheet. A local isometry preserves K even when it changes the individual principal curvatures.

We prove that assertion rather than treating it as a visual observation. The key is compatibility: the derivatives of a genuine surface patch commute. Comparing their tangent and normal parts produces the Gauss and Codazzi equations. We also develop an oriented orthonormal-frame formula that will supply the curvature identity needed for Gauss–Bonnet.

Throughout this chapter patches are $C^3$ and regular. This makes the metric coefficients $C^2$, the second-form coefficients $C^1$, and all mixed derivatives used below legitimate. We retain $S=-dn$. Review [the first fundamental form](first-fundamental-form.md) and [the Gauss map](gauss-map-second-fundamental-form.md).

## 1. Separating tangent and normal derivatives

Use coordinates $u^1,u^2$, tangent basis $X_i=\partial_iX$, metric $g_{ij}=\langle X_i,X_j\rangle$, and second-form coefficients $h_{ij}=\langle X_{ij},n\rangle$. Here g denotes the full metric matrix, not a single second-form coefficient.

Every second derivative has a unique decomposition
$X_{ij}=\sum_k\Gamma^k_{ij}X_k+h_{ij}n.$
These are Gauss's formulas. Symmetry of mixed derivatives gives $\Gamma^k_{ij}=\Gamma^k_{ji}$ and $h_{ij}=h_{ji}$. Normal differentiation gives Weingarten's formula
$n_i=-\sum_k S^k_iX_k,\qquad
S^k_i=\sum_l g^{kl}h_{li},$
where $(g^{kl})$ is the inverse metric matrix.

**Proposition 13.1.** The tangent coefficients are determined by the metric:
$\Gamma^k_{ij}=\frac12\sum_lg^{kl}
(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}).$

*Proof.* Differentiate $g_{jl}=\langle X_j,X_l\rangle$ with respect to i, and write the two similar identities obtained by permuting i,j,l. Add the first two and subtract the third. Mixed derivative symmetry cancels the unwanted terms, leaving
$\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}
=2\langle X_{ij},X_l\rangle
=2\sum_k\Gamma^k_{ij}g_{kl}.$
Multiplication by the inverse metric solves for each coefficient. $\square$

Thus tangent differentiation can be computed without knowing the embedding. The Christoffel coefficients are coordinate bookkeeping, not scalar curvatures. They can be nonzero in curving coordinates on a flat plane, and can change under a coordinate replacement.

## 2. Full compatibility equations

To keep the indices unambiguous, define
$C^l_{ijk}=\partial_i\Gamma^l_{jk}
-\partial_j\Gamma^l_{ik}
+\sum_p(\Gamma^p_{jk}\Gamma^l_{ip}
-\Gamma^p_{ik}\Gamma^l_{jp}).$
The first two lower indices specify the order of differentiation; the last specifies the tangent vector being differentiated. Other books may arrange these indices differently.

**Theorem 13.2 (Gauss and Codazzi equations).** For every i,j,k,m in {1,2},
$\sum_l g_{ml}C^l_{ijk}
=h_{jk}h_{im}-h_{ik}h_{jm},$
and
$\partial_i h_{jk}-\partial_j h_{ik}
=\sum_p(\Gamma^p_{ik}h_{jp}-\Gamma^p_{jk}h_{ip}).$

*Proof.* Differentiate the decomposition of $X_{jk}$ with respect to i:
$\partial_iX_{jk}
=\sum_l(\partial_i\Gamma^l_{jk})X_l
+\sum_p\Gamma^p_{jk}X_{pi}
+(\partial_i h_{jk})n+h_{jk}n_i.$
Insert Gauss's formula for $X_{pi}$ and Weingarten's formula for $n_i$. Its tangent coefficient in direction $X_l$ is
$\partial_i\Gamma^l_{jk}
+\sum_p\Gamma^p_{jk}\Gamma^l_{pi}
-h_{jk}S^l_i,$
and its normal coefficient is
$\partial_i h_{jk}+\sum_p\Gamma^p_{jk}h_{pi}$.

Because X is $C^3$, $\partial_iX_{jk}=\partial_jX_{ik}$. Equate normal coefficients and rearrange to obtain Codazzi's equation. Equate tangent coefficients and use symmetry of the lower Christoffel indices to obtain
$C^l_{ijk}=h_{jk}S^l_i-h_{ik}S^l_j.$
Finally multiply by $g_{ml}$ and sum l. The identity $\sum_lg_{ml}S^l_i=h_{mi}$ gives the claimed Gauss equation. Every step compares coefficients in the actual basis $X_1,X_2,n$, so no independence assertion is omitted. $\square$

These are necessary compatibility conditions for any forms coming from a patch. A converse existence theorem for prescribed forms is a further theorem, not proved merely by displaying these equations. We do not claim that arbitrary symmetric matrices g and h are realizable.

## 3. The intrinsic curvature formula

**Theorem 13.3 (Theorema Egregium).** Gaussian curvature of a $C^3$ regular surface is determined by its first fundamental form and its first two derivatives. Local isometries preserve Gaussian curvature.

*Proof.* Set i=1,j=2,k=2,m=1 in the Gauss equation:
$\sum_lg_{1l}C^l_{122}=h_{22}h_{11}-h_{12}^2.$
The determinant formula for the shape operator therefore becomes
$K=\frac{\sum_lg_{1l}C^l_{122}}{g_{11}g_{22}-g_{12}^2}.$
The denominator is positive. Proposition 13.1 expresses every Christoffel coefficient using g and its first derivatives, and C uses one more derivative. Thus the entire right side is computed from the metric.

If a local isometry identifies two surface neighborhoods, use a patch on the first and its image on the second. The metric coefficient functions are identical in these corresponding coordinates. The displayed formula then gives identical K values at corresponding points. Coordinate independence also follows, because on every patch the formula equals the already geometric quantity det S. $\square$

This proof does not assert that H or either principal curvature is intrinsic. The plane and cylinder are locally isometric, but their shape operators differ. It also does not say equal K values force an isometry: a scalar function is less information than an entire metric.

We can now define Gaussian curvature for a positive $C^2$ metric on a plane domain by the intrinsic formula itself, even if no embedding in $\mathbb R^3$ has been supplied. The hyperbolic plane later uses exactly that viewpoint. It requires a positive length form, not an assumed abstract manifold course.

## 4. Orthonormal frames and a connection one-form

Choose a positive orthonormal tangent frame e1,e2 on a patch, for example by Gram–Schmidt from Xu,Xv, so $e_1\times e_2=n$. A one-form here simply means an expression $P\,du+Q\,dv$ that assigns $Pu'+Qv'$ to a tangent velocity.

**Definition 13.4.** Put
$\omega(V)=\langle D_Ve_1,e_2\rangle.$
Here D is the ordinary ambient directional derivative. Orthogonality gives
$D_Ve_1=\omega(V)e_2+h(V,e_1)n,$
$D_Ve_2=-\omega(V)e_1+h(V,e_2)n.$
These formulas follow by taking dot products with the three orthonormal vectors. The normal coefficients use the second fundamental form.

For later integration, define the exterior derivative of $\omega=Pdu+Qdv$ by
$d\omega=(Q_u-P_v)du\,dv$.
The notation $du\wedge dv$ is also used for the signed area symbol; its evaluation on two velocities is their coordinate determinant. This elementary definition is all the exterior calculus needed here.

**Theorem 13.5 (frame curvature identity).**
$d\omega=-K\,dA,$
where $dA=\|X_u\times X_v\|du\wedge dv$ is the positive oriented area form.

*Proof.* Write $\omega_i=\langle\partial_i e_1,e_2\rangle$. Commuting mixed frame derivatives gives
$\partial_u\omega_v-\partial_v\omega_u
=\langle\partial_v e_1,\partial_u e_2\rangle
-\langle\partial_u e_1,\partial_v e_2\rangle.$
Insert the frame derivative formulas. Products of tangential parts vanish because e1 and e2 are orthogonal. The remaining expression is
$h(X_v,e_1)h(X_u,e_2)
-h(X_u,e_1)h(X_v,e_2).$
This is minus the determinant of the two-by-two matrix with rows giving h on Xu and Xv against e1,e2. Its determinant is det S multiplied by the positively oriented tangent area of Xu,Xv. Since det S=K, the expression equals $-K\|X_u\times X_v\|$. $\square$

Rotating the frame changes omega but not its exterior derivative. Indeed for $e'_1=\cos\phi\,e_1+\sin\phi\,e_2$, direct differentiation gives $\omega'=\omega+d\phi$ on a region with a real angle function phi. Its exterior derivative is unchanged because mixed derivatives of phi agree. Thus the connection form remembers a frame choice while its curvature does not.

## 5. Orthogonal and conformal metric formulas

Suppose the metric is $a^2du^2+b^2dv^2$ with a,b positive. Choose $e_1=X_u/a,e_2=X_v/b$. The dual component forms are $\theta_1=a\,du$ and $\theta_2=b\,dv$.

Differentiating tangent displacements, or equivalently comparing the tangent parts of $X_{uv}=X_{vu}$, gives
$d\theta_1=\omega\wedge\theta_2,\qquad
d\theta_2=-\omega\wedge\theta_1.$
For clarity, the first follows from $-a_vdu\wedge dv$ on the left and the coefficient of du in omega times b on the right. The second similarly compares $b_u$ with the coefficient of dv times a. Consequently
$\omega=-\frac{a_v}{b}du+\frac{b_u}{a}dv.$
The curvature identity yields
$K=-\frac1{ab}\left[
\partial_u\left(\frac{b_u}{a}\right)
+\partial_v\left(\frac{a_v}{b}\right)\right].$
This is a derived formula, not an extra sign convention.

The orthogonal formula also holds for a standalone positive metric, without assuming an embedding. To verify this directly from the intrinsic definition, its Christoffel coefficients are
$$
\Gamma^1_{11}=a_u/a,\quad \Gamma^1_{12}=a_v/a,\quad
\Gamma^1_{22}=-bb_u/a^2,
$$
$$
\Gamma^2_{11}=-aa_v/b^2,\quad \Gamma^2_{12}=b_u/b,\quad
\Gamma^2_{22}=b_v/b.
$$
Substituting them into the defined coefficient C gives
$$C^1_{122}
=-\frac{bb_{uu}}{a^2}+\frac{bb_ua_u}{a^3}
-\frac{a_{vv}}a+\frac{a_vb_v}{ab}
=-\frac ba\left[\partial_u(b_u/a)+\partial_v(a_v/b)\right].$$
The intrinsic numerator is $a^2C^1_{122}$ and the determinant is $a^2b^2$, yielding exactly the displayed K formula. Thus its later use for the hyperbolic metric requires no unproved surface-realization theorem.

For a conformal metric $\lambda^2(du^2+dv^2)$, a=b=lambda and the formula simplifies to
$K=-\lambda^{-2}(\partial_{uu}+\partial_{vv})\log\lambda.$
The derivatives act on the logarithm, not directly on lambda. This distinction is essential in the hyperbolic examples.

## 6. Worked examples

### Worked example 1 — Nonzero Christoffel symbols on a plane

In polar coordinates on a plane, the metric is $dr^2+r^2d\theta^2$ for r>0. The coefficient formula gives
$\Gamma^r_{\theta\theta}=-r$ and
$\Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=1/r$.
They are nonzero even though the surface is flat.

Taking a=1,b=r in the orthogonal formula gives $K=-r^{-1}\partial_r(1)=0$. Thus the changing coordinate basis contributes connection coefficients but no curvature. The polar singularity r=0 is excluded from these coordinates, not removed from the plane.

### Worked example 2 — Recovering sphere curvature from lengths

Away from the poles a radius-R sphere has metric
$R^2d\theta^2+R^2\sin^2\theta\,d\phi^2$.
Take a=R and b=R sin theta. The connection form is $\omega=\cos\theta\,d\phi$. Therefore
$d\omega=-\sin\theta\,d\theta\wedge d\phi
=-\frac1{R^2}dA.$
Hence K=1/R². No normal derivative is needed in this computation. The result agrees with multiplying the two outward signed principal values, both -1/R.

### Worked example 3 — A rolled plane and an obstruction to flattening a sphere

The map $X(s,t)=(R\cos(s/R),R\sin(s/R),t)$ has E=G=1,F=0. On a strip narrow enough to avoid wrapping, it is a local isometry from a planar strip to the cylinder. The metric formula gives K=0, although one principal curvature is nonzero.

A sphere neighborhood has K=1/R², so Theorem 13.3 forbids a local isometry from any nonempty spherical open region to a planar one. This is a local obstruction, stronger than a complaint about a seam in a global map. It concerns exact preservation of the metric, not the possibility of a useful approximate map.

### Worked example 4 — A conformal negative-curvature metric

On y>0 set $\lambda=1/y$. Then $\log\lambda=-\log y$ has Laplacian 1/y², so
$K=-y^2(1/y^2)=-1$.
This calculation concerns the positive metric $(dx^2+dy^2)/y^2$ on an open domain. We have not claimed an embedding of the whole domain as a regular surface in ordinary three-space. Later we prove its distance and geodesic properties intrinsically.

## 7. Avoiding false converses

The Gauss equations constrain forms that actually arise from a patch. Solving a curvature formula for one coefficient does not automatically solve every compatibility condition. The Codazzi equations remain necessary as well. A full converse involves an integrable differential system and will be left as a separately named theorem rather than silently used.

Likewise a vanishing curvature function is a local differential condition; global periods and topology may survive. A cylinder and plane share K=0 but differ globally. Equal curvature values at two points do not identify neighborhoods, and equal constant curvature does not by itself classify arbitrary global surfaces.

The result we have proved is precise: local metric measurements determine K. The frame identity gives a second way to express that result and prepares an integral version. In the next chapter, omega controls both turning of a tangent direction and parallel transport along a curve.

## An obstruction between different sphere radii

A sphere of radius one has Gaussian curvature one; at radius two it is one quarter. A local isometry must preserve the numerical curvature at corresponding points by the theorem just proved. Hence these two round metrics cannot have locally isometric neighborhoods, despite having the same qualitative sign of curvature.

Radial scaling still gives an angle-preserving correspondence. It doubles tangent lengths, making its pullback metric four times the original rather than equal to it. Conformality and local isometry are therefore different conclusions even in this symmetric case. Matching curvature is a necessary condition here, not a proved general converse guaranteeing local isometry from one matching value. The argument uses the specified metrics and their length scales. A picture showing two round surfaces of different displayed sizes cannot settle the question without saying what those sizes mean geometrically and which metric the proposed correspondence preserves.

## Exercises

<a id="theorema-egregium-ex-1"></a>
### Exercise 13.1

Derive the formula for Gamma from three derivatives of the metric.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write derivatives of gij as inner products of patch derivatives.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Add the i and j identities and subtract the l identity.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The combination ∂i gjl+∂j gil-∂l gij cancels all but 2<Xij,Xl>. Substituting the tangent decomposition gives 2Σk Gamma^k_ij gkl. Invert the positive metric to solve for Gamma. Normal components contribute zero in these dot products.

</details>

<a id="theorema-egregium-ex-2"></a>
### Exercise 13.2

For the polar plane metric, compute Gamma^r_thetatheta and Gamma^theta_rtheta.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Only gthetatheta=r² varies.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the diagonal inverse metric.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The first value is -(1/2)∂r(r²)=-r. The second is (1/2)(1/r²)∂r(r²)=1/r. Both are nonzero for r>0, while the derived orthogonal curvature formula gives zero. Nonzero connection coefficients do not imply nonzero K.

</details>

<a id="theorema-egregium-ex-3"></a>
### Exercise 13.3

Use the orthogonal formula to find K for ds²+f(s)²dtheta², f>0.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Set a=1 and b=f.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Only one derivative term remains.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The formula reduces to K=-(1/f)∂s(f')=-f''/f. It agrees with the revolution result when f is a radius function of an arc-length profile. The formula itself applies to any positive metric of this form, whether or not a revolution embedding was supplied.

</details>

<a id="theorema-egregium-ex-4"></a>
### Exercise 13.4

Find K for the conformal metric e^(2x)(dx²+dy²).

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The logarithm of the scale is x.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Take its ordinary coordinate Laplacian.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Here lambda=e^x and log lambda=x, whose second coordinate derivatives vanish. Hence K=0. A nonconstant scale factor need not produce nonzero curvature; applying the Laplacian to lambda instead of its logarithm would give the wrong result.

</details>

<a id="theorema-egregium-ex-5"></a>
### Exercise 13.5

Why does reversing n leave the Gauss compatibility equation unchanged?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every h coefficient changes sign.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each right-side term is a product of two such coefficients.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The metric and its Christoffel coefficients stay fixed. The right side hjk him-hik hjm contains two h factors in each product, so normal reversal changes neither product. Thus the intrinsic left side and Gaussian curvature are unchanged, consistently with det(-S)=det S in dimension two.

</details>

<a id="theorema-egregium-ex-6"></a>
### Exercise 13.6

A proposed local isometry sends a sphere patch to a plane patch. Give a decisive obstruction.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the proved invariance.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare nonempty corresponding points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

At every point of a radius-R sphere K=1/R², while the plane has K=0. A local isometry would give identical metric coefficients in corresponding coordinates and therefore identical K. Since R>0 the two values differ, so no such local isometry exists.

</details>

<a id="theorema-egregium-ex-7"></a>
### Exercise 13.7

Derive the determinant identity by choosing indices in the Gauss equation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use i=1,j=2,k=2,m=1.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The symmetric mixed coefficient appears squared.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The equation becomes Σl g1l C^l_122=h22 h11-h12 h21. Symmetry h12=h21 makes the right side det h. Dividing by det g gives det S=K. The index order must match the definition of C, rather than a differently indexed formula from another text.

</details>

<a id="theorema-egregium-ex-8"></a>
### Exercise 13.8

For the Euclidean constant metric and h=diag(1,1), test the Gauss equation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

All Christoffel coefficients vanish.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The determinant of h is nonzero.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The metric has constant entries, so Gamma and C vanish. But the selected Gauss right side is 1. Thus these forms cannot come from a regular patch with that constant metric. Symmetry and positivity of the separate matrices do not suffice for compatibility.

</details>

<a id="theorema-egregium-ex-9"></a>
### Exercise 13.9

If omega is replaced by omega+dphi, prove d omega is unchanged.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use coordinate components.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Mixed second partial derivatives agree.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Write omega=Pdu+Qdv. The new components are P+phi_u and Q+phi_v. Their exterior derivative coefficient is Q_u-P_v+phi_vu-phi_uv=Q_u-P_v for C2 phi. This is why a local frame rotation changes the connection form without changing its curvature.

</details>

<a id="theorema-egregium-ex-10"></a>
### Exercise 13.10

Why does K=0 on a cylinder not give a global isometry to the plane?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Curvature invariance is a necessary condition.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Consider the periodic circular direction.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The cylinder's circular coordinate wraps and identifies values differing by 2pi R in unrolled distance. A local unrolling is injective only on a suitable strip. Moreover the cylinder contains noncontractible loops while the plane does not. Equality of local curvature cannot remove that global topological distinction.

</details>

## Sources

The full derivations above are original. Primary-author references for comparison are [Sucharit Sarkar, Math 120A notes, Lectures 14–15 and 23–24](https://www.math.ucla.edu/~sucharit/120A-notes.html), and [Peter Petersen, Classical Differential Geometry, Sections 6.2–6.3](https://www.math.ucla.edu/~petersen/DiffGeo.pdf). The retained Quarto calculus chapter states the intrinsic theorem; this chapter supplies its compatibility proof.

## Summary

The Christoffel coefficients follow from metric derivatives. Commuting third derivatives of a patch proves the full Gauss and Codazzi equations, and the Gauss determinant identity proves that K is intrinsic. For a positive oriented orthonormal frame, d omega=-K dA. These identities explain local-isometry invariance and provide the turning and transport formulas needed for Gauss–Bonnet.
