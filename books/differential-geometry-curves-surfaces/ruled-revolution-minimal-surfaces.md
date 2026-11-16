
# Ruled, Revolution and Minimal Surfaces

Special surface families let us test general curvature formulas against geometry we can see. Ruled surfaces are built from straight lines. Surfaces of revolution are built by rotating a plane curve. Minimal surfaces are characterized by a vanishing mean-curvature equation and a first-variation property. These families overlap, but none is synonymous with either of the others.

We use the first and second fundamental forms from the preceding chapters, always with $S=-dn$. Pointwise computations need $C^2$ regular patches. Variational calculations below assume sufficiently differentiable compactly supported variations of such patches; $C^3$ regularity is a convenient common hypothesis. A minimal surface is stationary for area under the stated variations. The word minimal by itself does not promise a global least-area surface among all competitors.

## 1. Ruled surfaces and a sign restriction

**Definition 12.1.** A ruled parametrization has the form
$X(u,v)=c(u)+v\,d(u),$
where $d(u)\ne0$ and the indicated patch is regular. For each fixed u, varying v traces part of a straight line, a ruling.

A parametrization can lose regularity even when the displayed formula is smooth. All curvature claims are restricted to the region where
$(c'+vd')\times d\ne0$.
We do not include singular vertices or folded parameter values by convention.

**Theorem 12.2.** At every regular point of a ruled patch, Gaussian curvature is nonpositive.

*Proof.* Since $X_v=d$ and $X_{vv}=0$, the second-form coefficient g is zero. The determinant formula therefore gives
$K=-\frac{f^2}{EG-F^2}\le0.$
The denominator is positive by regularity. $\square$

This rules out a ruled patch on a round sphere, whose K is positive. It does not say every nonpositively curved surface is ruled: the sign condition is necessary for this construction, not sufficient.

A more explicit version is useful. Choose $n=(X_u\times d)/\|X_u\times d\|$. Then
$f=\langle d',n\rangle
=\frac{\det(c',d,d')}{\|(c'+vd')\times d\|},$
because the term involving $\det(d',d,d')$ vanishes. Hence
$K=-\frac{\det(c',d,d')^2}{\|(c'+vd')\times d\|^4}.$
This formula does not require unit-length d. It proves K=0 throughout a regular ruled patch exactly when the displayed triple product vanishes throughout its parameter interval.

The name developable is often used for regular ruled surfaces satisfying that vanishing condition. A global claim that an entire surface can be laid flat without cuts needs more than K=0: topology, singularities, and possible overlap must still be addressed.

## 2. Surfaces of revolution

Let $(r(s),z(s))$ be a regular plane curve parametrized by arc length, with r>0 and
$r'^2+z'^2=1$. Rotate it about the z-axis:
$X(s,\theta)=(r(s)\cos\theta,r(s)\sin\theta,z(s)).$
The condition r>0 avoids the axis, where these particular coordinates collapse. A smooth surface can extend across such a collapse, as a sphere does, but that requires another patch.

The coordinate vectors are orthogonal with lengths one and r. Their cross product gives the normal
$n=(-z'\cos\theta,-z'\sin\theta,r').$
This choice points inward on an upward-parametrized cylinder. Whenever an outward choice is wanted, reverse it and all signed principal values.

**Proposition 12.3.** With this normal,
$k_s=r'z''-z'r'',\qquad k_\theta=\frac{z'}r,\qquad K=-\frac{r''}r.$

*Proof.* Direct differentiation gives E=1,F=0,G=r² and second-form entries
$e=r'z''-z'r''$, f=0, g=rz'. Thus the coordinate directions are principal and yield the first two formulas. Differentiate $r'^2+z'^2=1$ to obtain $r'r''+z'z''=0$. Therefore
$k_sk_\theta
=\frac{r'z'z''-z'^2r''}{r}
=-\frac{(r'^2+z'^2)r''}{r}
=-\frac{r''}r.$
No division by z' is used, so the formula also holds where z'=0. $\square$

In these coordinates intrinsic Gaussian curvature depends only on the radius function and its second arc-length derivative. This is an early instance of the more general intrinsic theorem proved next. A profile with increasing radius need not have a particular sign of K; the sign depends on its concavity, not merely its slope.

## 3. Worked examples of ruled and rotational geometry

### Worked example 1 — A cone has zero curvature away from its vertex

Take $X(u,v)=(v\cos u,v\sin u,av)$ for v>0 and fixed nonzero real a. It is ruled by the lines with fixed u. Its cross product is nonzero because v>0. Along the arc-length meridian, radius is a linear function of arc length, so r''=0 and K=0.

One can also use the ruled formula: $c=0$, so $\det(c',d,d')=0$. This proves the same result without reparametrization. The vertex at v=0 is excluded because the two coordinate derivatives become dependent there. The zero value of smooth Gaussian curvature on the regular part is consistent with a nonzero integrated angle defect at the cone tip in a discrete or singular description.

### Worked example 2 — The catenoid is minimal

For a>0 set
$X(u,v)=(a\cosh v\cos u,a\cosh v\sin u,av).$
Choose
$n=(\operatorname{sech}v\cos u,\operatorname{sech}v\sin u,-\tanh v)$.
The coordinate vectors are orthogonal and both have squared length $a^2\cosh^2v$. Their cross product never vanishes.

The second derivatives have normal products e=-a,f=0,g=a. Thus the principal values are
$-\frac1{a\cosh^2v},\qquad \frac1{a\cosh^2v}.$
Their average vanishes at every parameter point, and
$K=-1/(a^2\cosh^4v)$ is strictly negative. This is an exact identity on the regular domain, not an inference from a few computed samples. The surface is rotational, but it has no nontrivial straight ruling contained in a generic meridian.

### Worked example 3 — The helicoid is ruled and minimal

Let a be a nonzero constant and
$X(u,v)=(v\cos u,v\sin u,au).$
For fixed u this is a straight horizontal line, so the surface is ruled. The normal
$n=\frac{(-a\sin u,a\cos u,-v)}{\sqrt{a^2+v^2}}$
is defined everywhere in the parameter plane. The first-form coefficients are E=a²+v²,F=0,G=1. The second-form coefficients are
$e=0,\qquad f=\frac a{\sqrt{a^2+v^2}},\qquad g=0.$
Consequently H=0 and
$K=-\frac{a^2}{(a^2+v^2)^2}<0.$
The coordinate directions are not principal, since the second form has a nonzero mixed entry. The helicoid demonstrates that ruled does not mean intrinsically flat. Its rulings are straight, but transverse changes of rulings produce negative Gaussian curvature.

## 4. Minimality as a differential equation

**Definition 12.4.** A regular surface is minimal when H=0 at every point. The definition is independent of normal reversal.

For a graph z=h(x,y), the mean-curvature formula gives the minimal graph equation
$(1+h_y^2)h_{xx}-2h_xh_yh_{xy}+(1+h_x^2)h_{yy}=0.$
The denominator in H is positive, so clearing it loses no cases. At a horizontal tangent this reduces at that point to $h_{xx}+h_{yy}=0$. It does not reduce to the ordinary Laplace equation at all points of a general graph.

A plane is a minimal graph, as every second derivative is zero. The quadratic saddle h=x²-y² has H=0 at the origin, but substituting its derivatives gives a numerator proportional to y²-x² rather than an identity zero. A suggestive saddle shape is not a minimality proof.

The two explicit examples above are useful because their exact cancellation persists everywhere. Numerical laboratories can help locate such candidates, but the differential equation or form computation establishes the assertion.

## 5. First variation of area

**Theorem 12.5.** Let X be an oriented regular patch on a bounded parameter region, and let f be a sufficiently smooth scalar function compactly supported in its interior. For the normal variation $X_t=X+tfn$, the derivative of area at t=0 is
$\frac{dA(X_t)}{dt}\bigg|_{0}=-2\int fH\,dA.$

*Proof.* Since f vanishes outside a compact subset, only that compact part changes. Regularity persists there for sufficiently small t by continuity and a positive lower bound for the original area factor. Differentiate the tangent vectors:
$(X_t)_i=X_i+t(f_in+fn_i)$.
Thus the first-form derivative is
$\dot g_{ij}
=f\langle n_i,X_j\rangle+f\langle X_i,n_j\rangle
=-2fh_{ij}.$
Terms involving $f_i n$ disappear because n is orthogonal to the tangent vectors.

For an invertible positive 2-by-2 matrix g, differentiating its determinant gives
$\frac{d}{dt}\sqrt{\det g}=\tfrac12\sqrt{\det g}\operatorname{tr}(g^{-1}\dot g)$.
This follows directly by differentiating $g_{11}g_{22}-g_{12}^2$, or by the inverse-matrix formula for the determinant derivative. Substituting the preceding expression gives
$\dot{\sqrt{\det g}}=-f\operatorname{tr}(g^{-1}h)\sqrt{\det g}=-2fH\sqrt{\det g}$.
Integrating over the fixed parameter region proves the result. Differentiation under the integral is legitimate because the changing integrand and its derivative are continuous on one compact support. $\square$

**Corollary 12.6.** A surface has H=0 if and only if every compactly supported normal variation has zero first area derivative.

*Proof.* The forward direction follows from the formula. Conversely, if H is nonzero at a point, continuity gives a small patch where it has a fixed strict sign. Choose a nonnegative smooth function f supported there and positive on a smaller open region. Such functions can be made from the standard smooth bump $e^{-1/(1-|x|^2)}$ inside a coordinate disk, set to zero outside. Then $\int fH$ has a strict sign, contradicting stationarity. $\square$

For the outward sphere H=-1/R, a positive outward f gives positive area derivative, as expected. This sign check is valuable: changing the definition of S without changing the variation formula would give an inconsistent prediction.

Zero first derivative means stationary, just as a one-variable function may have zero derivative at a maximum, minimum, or saddle. A proof of least area requires additional estimates or a suitable second-variation argument. None is supplied merely by H=0.

## 6. A global obstruction

**Theorem 12.7.** There is no nonempty compact regular surface without boundary in $\mathbb R^3$ with H identically zero.

*Proof.* The continuous function $p\mapsto\|p\|^2$ attains a maximum at some p. Its first derivative along every tangent direction is zero, so p is perpendicular to the tangent plane. Choose patch coordinates whose tangent basis at p is orthonormal. For each coordinate direction,
$\partial_{ii}\|X\|^2=2\|X_i\|^2+2\langle X,X_{ii}\rangle.$
At the maximum, each such second derivative is nonpositive. Their sum is therefore nonpositive. But X=p is normal there, so tangent parts of $X_{ii}$ do not contribute, giving
$\partial_{11}\|X\|^2+\partial_{22}\|X\|^2
=4+2\langle p,n\rangle(h_{11}+h_{22})=4+4H\langle p,n\rangle=4.$
This is a contradiction. The point is an interior surface point because there is no boundary. $\square$

Compact minimal pieces with boundary do exist, including plane disks. The proof fails there because a maximum may lie on the boundary, where two-sided interior second-derivative tests are unavailable. Noncompact examples such as the catenoid and helicoid also escape the argument because the squared-distance function need not attain a maximum.

The [shape-operator laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-shape-operator-surfaces) compares the catenoid, helicoid, sphere, and torus numerically. It should be read alongside these exact domain and sign calculations. The next chapter explains why the product K, unlike the individual principal values, is determined by the metric.

## 7. A graph flux consequence with a full proof

For a graph h define the two-dimensional vector field
$F=\frac{\nabla h}{\sqrt{1+|\nabla h|^2}}.$
Differentiating its two components with the quotient rule gives
$\operatorname{div}F
=\frac{(1+h_y^2)h_{xx}-2h_xh_yh_{xy}+(1+h_x^2)h_{yy}}
{(1+|\nabla h|^2)^{3/2}}
=2H.$
The area measure in this displayed divergence is ordinary parameter-plane area. It must not be silently replaced by surface area without its factor W.

For a minimal graph over a bounded smooth domain, the plane divergence theorem gives zero total outward flux of F across the domain boundary. This is a necessary integral consequence of the pointwise equation. It need not mean the flux is zero at each boundary point.

**Proposition 12.8.** Let Omega be a bounded connected plane domain with piecewise-smooth boundary, and let h be $C^2$ on a neighborhood of its closure. If its graph is minimal and h=0 on the boundary, then h=0 throughout Omega.

*Proof.* The minimal equation says div F=0. Apply the divergence theorem to hF. By the product rule,
$\operatorname{div}(hF)
=\nabla h\cdot F+h\operatorname{div}F
=\frac{|\nabla h|^2}{\sqrt{1+|\nabla h|^2}}.$
Its boundary integral is zero because h vanishes there. Consequently the integral of the displayed nonnegative continuous function over Omega is zero. If the function were positive at any point, continuity would make its integral over a sufficiently small disk positive, a contradiction. Thus grad h=0 everywhere.

A differentiable function with zero gradient is locally constant. On a connected domain these local constants agree, so h is constant. Continuity to the nonempty boundary and its zero value there identify that constant as zero. $\square$

Replacing h by h-c proves the same conclusion for any constant boundary height c. This is a restricted uniqueness statement proved by an energy identity; it is not a solution of the general minimal-surface boundary-value problem. It assumes the unknown surface is a single graph over the specified domain and has the stated boundary data and regularity. The catenoid is not excluded because it is not such a single graph spanning one constant-height boundary over a bounded plane domain.

The proof also illustrates why minimality is more than a local saddle impression. Its pointwise divergence equation forces integral identities and rigidity under certain boundary conditions. Those are consequences of the exact equation, not of a numerical mean-curvature value rounded to zero.

## Exercises

<a id="ruled-revolution-minimal-surfaces-ex-1"></a>
### Exercise 12.1

Derive K<=0 for a regular ruled patch without assuming its ruling vector has unit length.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Differentiate twice in the ruling parameter.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the determinant formula for Gaussian curvature.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For X=c(u)+vd(u), Xvv=0 regardless of the length of d. Hence the second-form coefficient g vanishes and K=(eg-f²)/(EG-F²)=-f²/(EG-F²)<=0. Regularity makes the denominator positive, so no unit normalization is required.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-2"></a>
### Exercise 12.2

An upward arc-length cylinder meridian is r=R,z=s. Find the signed principal values using the chapter's meridian normal.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Substitute r'=0,z'=1.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

This particular normal points inward.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Here r''=z''=0, so ks=0 and ktheta=1/R. The specified normal is (-cos theta,-sin theta,0), inward. With the outward normal both values reverse, giving 0 and -1/R. K is zero in either orientation.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-3"></a>
### Exercise 12.3

Explain why the cone computation cannot assign a smooth curvature value to its vertex.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Evaluate the patch derivative at v=0.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A regular patch needs two independent tangent derivatives.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

At v=0 the angular derivative Xu vanishes. Thus Xu cross Xv=0 and the displayed coordinates are not regular. In fact a nonplanar cone vertex is not a C2 regular surface point. The assertion K=0 concerns only v>0 and does not remove the singular tip defect.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-4"></a>
### Exercise 12.4

For a sphere use r(s)=R sin(s/R),z(s)=R cos(s/R) on 0<s<pi R. Compute K.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check arc-length speed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use -r''/r where r is positive.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The derivative squares sum to cos²(s/R)+sin²(s/R)=1. Also r''=-r/R². Therefore K=1/R² throughout the parameter strip. The excluded endpoint coordinates are poles where r=0; another patch describes those regular sphere points.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-5"></a>
### Exercise 12.5

For a torus meridian r(s)=R+a cos(s/a),z(s)=a sin(s/a), R>a>0, calculate K.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The meridian speed is one.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Differentiate r twice with respect to s.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

One has r'=-sin(s/a), z'=cos(s/a), and r''=-cos(s/a)/a. Thus K=cos(s/a)/(a(R+a cos(s/a))). The sign changes with cosine. The denominator is positive by R>a, so the strip is regular everywhere.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-6"></a>
### Exercise 12.6

For the catenoid a=2, find H and K at v=0 and explain why H=0 holds beyond that point.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use its exact principal-value formulas.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The cancellation does not depend on v.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The principal values at v=0 are -1/2 and 1/2, giving H=0 and K=-1/4. At arbitrary v they remain opposite, namely ±1/(2 cosh²v), so their mean vanishes identically. This all-parameter formula is the minimality proof.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-7"></a>
### Exercise 12.7

Why are helicoid coordinate directions not principal despite E,F,G being diagonal?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect the second form.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A diagonal metric alone does not diagonalize S.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For nonzero a, f=a/sqrt(a²+v²) is nonzero while e=g=0. Thus I^-1B has off-diagonal entries, and applying S to either coordinate tangent produces a nonzero component in the other direction. Orthogonal coordinate lines need not be principal lines.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-8"></a>
### Exercise 12.8

Test whether h=x²-y² is a minimal graph everywhere.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Insert its derivatives in the minimal graph equation.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The mixed second derivative is zero but its first derivatives are not.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The numerator is 2(1+4y²)-2(1+4x²)=8(y²-x²). It does not vanish identically. Hence the graph is not a minimal surface, although its mean curvature vanishes at the origin and along the lines y=±x.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-9"></a>
### Exercise 12.9

Use first variation to predict the area change for an outward sphere under positive constant normal displacement.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Its signed mean curvature is negative.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For a closed sphere use the same formula globally, or directly differentiate its area.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The formula gives -2∫fH dA=(2f/R)(4pi R²)=8pi Rf for constant f. Directly, the varied sphere has radius R+tf and area 4pi(R+tf)², whose derivative is the same value. This checks the sign convention.

</details>

<a id="ruled-revolution-minimal-surfaces-ex-10"></a>
### Exercise 12.10

Explain why the nonexistence theorem does not rule out a planar minimal disk.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Identify where the maximum principle calculation uses no boundary.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The farthest points of the disk can lie on its circle boundary.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The squared-distance maximum on a plane disk occurs on its boundary. There one cannot vary in every tangent direction for a two-sided interval staying inside the surface piece, so the interior second-derivative contradiction does not apply. The disk has H=0 and is a valid compact surface with boundary.

</details>

## Sources

Original proofs and examples are compared with [Peter Petersen, Classical Differential Geometry, Sections 5.3 and 5.5](https://www.math.ucla.edu/~petersen/DiffGeo.pdf) and [Sucharit Sarkar, Math 120A notes](https://www.math.ucla.edu/~sucharit/120A-notes.html). The preserved [shape-operator and minimal-surface laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-shape-operator-surfaces) is an optional numerical companion.

## Summary

Regular ruled surfaces have K<=0, while arc-length revolution coordinates give K=-r''/r. Exact form calculations establish H=0 for the catenoid and helicoid. The area variation formula identifies H=0 with stationarity under compactly supported normal variations, rather than automatic global minimization. A maximum argument excludes compact boundaryless minimal surfaces in R3. The next chapter derives intrinsic Gaussian curvature from the metric.
