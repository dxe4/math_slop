var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: principal-gaussian-mean-curvature
title: "Principal, Gaussian and Mean Curvature"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Principal, Gaussian and Mean Curvature

At one surface point there are infinitely many tangent directions, and each has a normal curvature. The symmetry proved in [the preceding chapter](gauss-map-second-fundamental-form.md) makes this collection manageable: two orthogonal directions determine it completely. Their values are the principal curvatures. Their product and average provide two different summaries, Gaussian and mean curvature.

We retain $S=-dn$. With the outward normal, a sphere of radius $R$ has both principal curvatures $-1/R$. This convention makes its Gaussian curvature positive and its mean curvature negative. The signs are a choice for the oriented quantities; the distinction between product and average is geometric. All pointwise statements concern $C^2$ regular surfaces, with a chosen normal wherever signed quantities are used.

## 1. Diagonalizing the shape operator

**Theorem 11.1 (principal directions).** At each regular point, the shape operator has an orthonormal basis of real eigenvectors. Its eigenvalues $k_1,k_2$ are the principal curvatures.

*Proof.* Choose any orthonormal tangent basis. Self-adjointness makes the matrix
$\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$.
Its characteristic roots are
$\\frac{a+c\\pm\\sqrt{(a-c)^2+4b^2}}2,$
so they are real. Eigenvectors for distinct eigenvalues are orthogonal: if $Sv=\\lambda v$ and $Sw=\\mu w$, then
$\\lambda\\langle v,w\\rangle=\\langle Sv,w\\rangle=\\langle v,Sw\\rangle=\\mu\\langle v,w\\rangle$.
Normalize the two vectors. If the eigenvalues coincide, the discriminant vanishes, giving $a=c$ and $b=0$; the matrix is a scalar multiple of the identity and every orthonormal basis works. $\\square$

At a point with unequal principal curvatures, the two eigenvector lines are determined, but choosing signs for vectors along those lines is additional. At an umbilic point, where $k_1=k_2$, no preferred principal direction remains. The sphere is the basic example: every direction bends equally.

The theorem is pointwise. A continuously varying choice of principal vectors on a whole surface can encounter sign ambiguities, umbilic points, and global obstructions. Computing eigenvectors at one point does not prove a global coordinate system by principal curves.

## 2. Euler's directional formula

**Theorem 11.2 (Euler normal curvature formula).** Let $e_1,e_2$ be orthonormal principal vectors and $T=\\cos\\theta\\,e_1+\\sin\\theta\\,e_2$ a unit tangent vector. Then
$k_n(T)=k_1\\cos^2\\theta+k_2\\sin^2\\theta.$

*Proof.* Since $Se_i=k_ie_i$,
$\\langle ST,T\\rangle$
expands into $k_1\\cos^2\\theta+k_2\\sin^2\\theta$; both mixed products vanish by orthogonality. For unit T this inner product is normal curvature. $\\square$

The formula shows that normal curvature lies between the two principal values and attains them along principal directions. If $k_1\\ne k_2$, these are exactly its extreme direction lines. A mixed direction generally has an intermediate value, not a new independent curvature parameter.

A direction with zero normal curvature is called asymptotic. At a point where the principal values have opposite signs, solving Euler's formula gives two distinct asymptotic lines. If one principal curvature is zero and the other nonzero, only its zero-eigenvalue line is asymptotic. If both vanish, every direction is asymptotic at that point. None of these statements asserts the existence of a straight surface curve following such a direction for a whole interval.

## 3. Two invariants with different meanings

**Definition 11.3.** Gaussian curvature is $K=\\det S=k_1k_2$. Mean curvature is $H=\\tfrac12\\operatorname{tr}S=(k_1+k_2)/2$.

Reversing the normal changes S to -S. Both principal values and H reverse sign, while K is unchanged. Thus Gaussian curvature does not require a global normal choice: the locally calculated values agree when local normals are reversed. Signed H requires orientation, although the property H=0 does not.

**Proposition 11.4.** In any coordinate tangent basis,
$K=\\frac{eg-f^2}{EG-F^2},\\qquad
H=\\frac{Ge-2Ff+Eg}{2(EG-F^2)}.$

*Proof.* The shape matrix is $I^{-1}B$. Its determinant is $\\det B/\\det I$, yielding the first expression. The inverse metric is
$(EG-F^2)^{-1}\\begin{pmatrix}G&-F\\\\-F&E\\end{pmatrix}$.
Multiply by B and take half its trace to obtain the second. The denominator is strictly positive at a regular point. $\\square$

**Proposition 11.5.** One always has $H^2\\ge K$, with equality exactly at an umbilic point.

*Proof.* Subtract the product from the square of the average:
$H^2-K=\\frac{(k_1-k_2)^2}{4}.$
The right side is nonnegative and vanishes precisely when the two eigenvalues coincide. $\\square$

K and H recover the unordered principal values as $H\\pm\\sqrt{H^2-K}$. They do not recover the principal directions, which require the operator itself. Neither quantity measures the largest ordinary curvature of every surface curve, because a curve may additionally turn within the tangent plane.

## 4. Point classifications and their limits

A point is elliptic when K>0, hyperbolic when K<0, parabolic when K=0 but S is nonzero, and planar or flat to second order when S=0. At an elliptic point both principal values share a sign; at a hyperbolic point they have opposite signs. Normal reversal exchanges positive and negative definiteness but preserves this classification.

For a graph with horizontal tangent, the second form is its Hessian. A definite Hessian makes the graph lie strictly on one side of its tangent plane sufficiently near the point, by the quadratic Taylor term dominating the smaller remainder. An indefinite Hessian gives opposite signs along its two eigendirections, so both sides occur arbitrarily close. These are local conclusions with a nondegenerate second derivative.

A vanishing Hessian gives no such conclusion. The graphs $z=x^4+y^4$ and $z=x^3$ both have zero second form at zero. The first lies on one side of its tangent plane; the second crosses it. Thus the label flat at a point is about second-order bending, not an assertion that a neighborhood is a plane.

Similarly, K=0 at one point does not imply that S=0 there. The cylinder has one nonzero principal curvature everywhere. Nor does K=0 everywhere imply a single global planar parametrization: periodic identification on a cylinder is a global obstruction.

## 5. Curvature formulas for graphs

**Theorem 11.6.** For $X(x,y)=(x,y,h(x,y))$ with upward normal and $W=\\sqrt{1+h_x^2+h_y^2}$,
$K=\\frac{h_{xx}h_{yy}-h_{xy}^2}{W^4},$
$H=\\frac{(1+h_y^2)h_{xx}-2h_xh_yh_{xy}+(1+h_x^2)h_{yy}}{2W^3}.$

*Proof.* The first-form determinant is
$(1+h_x^2)(1+h_y^2)-h_x^2h_y^2=W^2$.
The second-form entries are the Hessian entries divided by W, so their determinant is $(h_{xx}h_{yy}-h_{xy}^2)/W^2$. Dividing gives K. Substitution into Proposition 11.4 gives the numerator for H with an additional denominator W, hence the total denominator $2W^3$. $\\square$

The formulas apply at every graph point, not just horizontal tangents. A Hessian eigenvalue by itself is generally not a principal curvature away from a horizontal tangent, because the tangent coordinate basis has changed lengths and angles.

For actual principal directions in nonorthonormal coordinates, solve
$Bv=kIv.$
This is the generalized eigenvalue equation. The coordinate matrix $I^{-1}B$ may not look symmetric, but it is self-adjoint for the I-inner product and therefore still has real eigenvalues. Replacing it with the ordinary symmetric matrix B changes the problem.

## 6. Worked examples

### Worked example 1 — A scaled quadratic saddle

At the origin of $h(x,y)=2x^2-3y^2$, the gradient vanishes and the upward shape matrix is $\\operatorname{diag}(4,-6)$. Hence $k_1=4,k_2=-6$, $K=-24$, and $H=-1$.

For a direction making angle theta with the positive x direction,
$k_n=4\\cos^2\\theta-6\\sin^2\\theta$.
It vanishes when $\\tan^2\\theta=2/3$, producing two asymptotic lines. The values have inverse-length units if the coordinates have length units and the coefficients are scaled accordingly. The negative Gaussian curvature comes from opposite signs, not from the signed value of H.

### Worked example 2 — A paraboloid away from its vertex

Take $h(x,y)=a(x^2+y^2)/2$ with $a>0$, at $(r,0)$. Then $W=\\sqrt{1+a^2r^2}$, $I=\\operatorname{diag}(W^2,1)$, and $B=\\operatorname{diag}(a/W,a/W)$. Therefore the coordinate radial and transverse lines are principal, with values
$k_r=\\frac a{W^3},\\qquad k_t=\\frac aW.$
Their product is $a^2/W^4$, agreeing with the graph K formula.

At r=0 the two values coincide and the point is umbilic. For r>0 they differ even though the coordinate Hessian is the same scalar matrix everywhere. The changing metric, rather than changing Hessian entries, explains the difference.

### Worked example 3 — Positive and negative curvature on a torus

Let $R>a>0$ and
$X(u,v)=((R+a\\cos v)\\cos u,(R+a\\cos v)\\sin u,a\\sin v).$
Use outward normal $n=(\\cos v\\cos u,\\cos v\\sin u,\\sin v)$. The coordinate vectors are orthogonal with squared lengths $(R+a\\cos v)^2$ and $a^2$. Differentiating n gives
$S(X_u)=-\\cos v\\,X_u/(R+a\\cos v)$ and $S(X_v)=-X_v/a$.

Thus
$K=\\frac{\\cos v}{a(R+a\\cos v)},\\qquad
H=-\\frac12\\left(\\frac{\\cos v}{R+a\\cos v}+\\frac1a\\right).$
The denominator in K stays positive. The outside, where cos v>0, is elliptic; the inside is hyperbolic. At the top and bottom cos v=0, giving parabolic circles because the meridian curvature remains nonzero. A single smooth connected surface can therefore contain all three sign types.

### Worked example 4 — Mean zero does not mean flat

For $h=(x^2-y^2)/2$ at zero, the principal values are 1 and -1. Consequently H=0 while K=-1. The point has nonzero bending in every principal direction and is hyperbolic.

Calling an entire surface minimal requires H=0 everywhere on its regular domain, not just at this point. The displayed quadratic saddle does not have H identically zero away from zero. In the next chapter, the catenoid and helicoid provide surfaces for which the full computation does establish that global-in-domain identity.

## 7. Reading computations responsibly

Curvatures are geometric quantities, but their formulas can be poorly conditioned in a nearly singular patch. The exact denominator EG-F² is positive at regular points; a tiny numerical value can magnify errors. A rendered principal direction may also become unstable near an umbilic because the two eigenvalues nearly coincide and no preferred direction exists at equality.

A numerical report should therefore distinguish a verified regular parameter point, a computed approximate value, and an exact symbolic identity. A sampled H near zero does not prove minimality of a whole surface. Conversely changes of signs caused solely by reversing the normal do not indicate a geometric disagreement.

The retained [Gaussian-curvature article](/articles/ga-dg-gaussian-curvature/) offers a shorter orientation. Our derivations supply the matrix and normal-differentiation steps that its local formula only outlines. The shape-operator laboratory is a companion for comparing directions, not a substitute for those proofs.

## 8. A matrix example and the directional conic

### Worked example 5 — A nonsymmetric coordinate matrix with real principal values

Suppose the metric matrix at a point is $I=\\operatorname{diag}(4,1)$ and the second-form matrix is
$B=\\begin{pmatrix}0&2\\\\2&0\\end{pmatrix}$.
Then the coordinate shape matrix is
$A=I^{-1}B=\\begin{pmatrix}0&1/2\\\\2&0\\end{pmatrix}.$
It is not symmetric for the ordinary coordinate dot product. Nevertheless its eigenvalues solve t²-1=0 and are 1 and -1, as self-adjointness predicts.

Corresponding coordinate eigenvectors are (1,2) and (1,-2). Their ordinary coordinate dot product is -3, but their metric inner product is $4(1)(1)+(2)(-2)=0$. Each has metric length sqrt8, so dividing by sqrt8 produces a genuinely orthonormal principal basis in the tangent plane. This calculation makes the generalized eigenvalue equation concrete: the coordinate entries are not themselves physical orthonormal components.

One can also visualize the second form by a directional conic. In an orthonormal principal basis, write a tangent vector as xe1+ye2. Then
$\\mathrm{II}(v,v)=k_1x^2+k_2y^2.$
For a fixed positive reference level c, the equation II(v,v)=c is an ellipse when both principal values are positive. When they are both negative, use the negative level -c to obtain the analogous ellipse. At a hyperbolic point, either nonzero level gives a hyperbola, whose asymptotic lines are precisely the zero-normal-curvature directions.

At a parabolic point with one nonzero value, a suitable nonzero level gives two parallel lines. Thus the word parabolic in the point classification does not mean this particular conic is a parabola. At an umbilic point with nonzero curvature, the level conic is a circle because both coefficients agree. These statements follow directly from the diagonal quadratic equation and require no new surface theorem.

The picture is a tangent-plane representation of second-order bending. It is not literally the intersection of the surface with its tangent plane, and its selected nonzero reference level is a convention. Higher-order terms can change actual intersections when the second form is degenerate. The conic is useful because it displays exactly the information the second form contains, while making clear that it contains no cubic or higher Taylor information.

## Exercises

<a id="principal-gaussian-mean-curvature-ex-1"></a>
### Exercise 11.1

Prove that the extreme normal curvatures are the principal values.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use Euler's formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The two squared trigonometric factors are nonnegative and sum to one.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Euler's formula is a convex combination of k1 and k2, so every value lies between them. The endpoints occur along their eigenvector lines. If k1 and k2 differ, attaining an endpoint forces the other squared coefficient to vanish. If they coincide, every direction attains the same value.

</details>

<a id="principal-gaussian-mean-curvature-ex-2"></a>
### Exercise 11.2

Recover principal curvatures from H=2 and K=3.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the characteristic polynomial.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its roots have sum 2H and product K.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The values solve $t^2-4t+3=0$, so they are 1 and 3. Their directions cannot be recovered from H and K alone. They satisfy $H^2-K=1$, consistent with unequal principal values.

</details>

<a id="principal-gaussian-mean-curvature-ex-3"></a>
### Exercise 11.3

Find the asymptotic directions when principal values are 2 and -8.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Set Euler's expression equal to zero.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Divide by cos²theta after excluding its zero case.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The equation is $2\\cos^2\\theta-8\\sin^2\\theta=0$. The case cos theta=0 does not solve it. Thus $\\tan^2\\theta=1/4$, giving two lines of slopes ±1/2 in the principal orthonormal basis.

</details>

<a id="principal-gaussian-mean-curvature-ex-4"></a>
### Exercise 11.4

Explain how H and K change under normal reversal and why elliptic/hyperbolic classification is unaffected.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Both eigenvalues reverse.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Inspect their product and average.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Normal reversal sends each ki to -ki. The product remains K and the average becomes -H. Therefore the sign of K, and hence elliptic versus hyperbolic classification, is unchanged. Positive or negative definiteness of II is exchanged.

</details>

<a id="principal-gaussian-mean-curvature-ex-5"></a>
### Exercise 11.5

Why is the eigenvalue problem Bv=kIv needed in general coordinates?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start from S=I^-1B.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Multiply its ordinary eigenvalue equation by I.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

A coordinate vector v is principal precisely when $I^{-1}Bv=kv$, which is equivalent to $Bv=kIv$. If I is not the identity, the equation Bv=kv solves a different problem. Self-adjointness is relative to the metric I, so I^-1B need not be symmetric in the ordinary coordinate inner product.

</details>

<a id="principal-gaussian-mean-curvature-ex-6"></a>
### Exercise 11.6

Compute K and H at zero for $h=x^2+xy+y^2$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

At zero the gradient vanishes.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the Hessian and its determinant and trace.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The shape matrix is $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. Its eigenvalues are 3 and 1, with directions (1,1) and (1,-1). Thus K=3 and H=2. The positive Hessian makes the point elliptic with the upward normal.

</details>

<a id="principal-gaussian-mean-curvature-ex-7"></a>
### Exercise 11.7

On the torus with R=3 and a=1, calculate K at v=0, pi/2, and pi.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the exact torus formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The denominator remains positive at all three points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The values are $1/(3+1)=1/4$, zero, and $-1/(3-1)=-1/2$. At pi/2 the meridian principal curvature is -1, so the zero K point is parabolic rather than planar. The inside negative curvature has larger magnitude than the outside positive value in this example.

</details>

<a id="principal-gaussian-mean-curvature-ex-8"></a>
### Exercise 11.8

Prove H²=K exactly when every direction is principal.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the squared-difference identity.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A self-adjoint operator with equal eigenvalues is scalar.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The identity gives H²-K=(k1-k2)²/4. Equality forces k1=k2=k. In an orthonormal eigenbasis S=kId, so every nonzero vector is an eigenvector. Conversely if every direction is principal, the sum of two independent eigenvectors forces their eigenvalues equal, and the identity gives equality.

</details>

<a id="principal-gaussian-mean-curvature-ex-9"></a>
### Exercise 11.9

Give two flat-to-second-order graph points with different tangent-plane crossing behavior.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare an even fourth power and an odd third power.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both Hessians vanish at zero.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The graphs z=x⁴+y⁴ and z=x³ both have zero gradient and Hessian at zero, hence S=0 there. The first is nonnegative and touches its tangent plane only at zero. The second has both positive and negative nearby values. Thus zero second form alone does not decide which side of the tangent plane contains the graph.

</details>

<a id="principal-gaussian-mean-curvature-ex-10"></a>
### Exercise 11.10

A routine reports principal curvatures 1 and 1 at one sample. Does that prove the surface is a sphere?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The claim concerns only one point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Many surfaces have an umbilic point.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

It proves at most that the sampled point is umbilic if the reported values are exact. For example the paraboloid h=(x²+y²)/2 has values 1 and 1 at zero but unequal values away from its vertex, so it is not a sphere. Numerical equality at one approximate sample provides even less evidence.

</details>

## Sources

Original derivations are compared with [Sucharit Sarkar, Math 120A notes, Lectures 20–21](https://www.math.ucla.edu/~sucharit/120A-notes.html) and [Peter Petersen, Classical Differential Geometry, Sections 5.3–5.4](https://www.math.ucla.edu/~petersen/DiffGeo.pdf). Companion: the preserved [Gaussian-curvature article](/articles/ga-dg-gaussian-curvature/) and [shape-operator laboratory](#/labs?lab=visual-lab-shape-operator-surfaces).

## Summary

Self-adjointness gives two orthogonal principal directions and real principal values. Euler's formula recovers every normal curvature from them. Gaussian curvature is their orientation-independent product; mean curvature is their signed average. Pointwise signs classify second-order bending but do not establish global shape. The next chapter uses these formulas to prove curvature identities for ruled, rotational, and minimal surfaces.
`;export{e as default};