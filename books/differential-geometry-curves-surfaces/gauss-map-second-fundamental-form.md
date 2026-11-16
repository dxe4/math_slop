
# The Gauss Map and Second Fundamental Form

The first fundamental form tells us how to measure lengths while remaining on a surface. It does not record every way the surface bends in the surrounding space. A plane and a cylinder can have identical local length measurements while their normal vectors behave differently. Differentiating a chosen normal produces the extra information. The result is a linear map on each tangent plane and an associated symmetric bilinear form.

This chapter develops those objects directly from regular patches and ordinary derivatives in $\mathbb R^3$. Review [tangent planes and smooth maps](tangent-planes-smooth-maps.md) and [the first fundamental form](first-fundamental-form.md). We use a $C^2$ patch for pointwise curvature. When later chapters differentiate its curvature equations, they will require $C^3$ regularity. No abstract connection or tensor calculus is assumed.

## 1. A normal field is a geometric choice

**Definition 10.1.** Let $X:U\to\mathbb R^3$ be a $C^2$ regular surface patch, where $U$ is open in $\mathbb R^2$ and $X_u\times X_v\ne0$. Its patch normal is
$n=\frac{X_u\times X_v}{\|X_u\times X_v\|}.$
An orientation on a surface is a consistent continuous choice of unit normal on its overlapping patches. Given that choice, the Gauss map sends a point $p$ to $n(p)\in S^2$.

The two opposite normals describe the same tangent plane. Selecting one is necessary for signed normal curvature and signed mean curvature. A local patch always supplies a normal; a global surface need not admit a consistent choice. All assertions below are local unless an oriented surface is explicitly specified.

The tangent plane to the unit sphere at $n(p)$ is $n(p)^\perp$. This is the same vector plane as $T_pM$, considered as a subspace of $\mathbb R^3$. Thus the derivative $dn_p:T_pM\to T_{n(p)}S^2$ can be regarded as an endomorphism of one vector plane. The points at which the two planes are attached differ, but their vector directions agree.

**Definition 10.2.** The shape operator is $S_p=-dn_p$. This book keeps the minus sign throughout. In particular, the outward normal of a sphere gives negative principal curvatures. A source using $dn$ instead of $-dn$ will reverse those signed values.

To differentiate $n$ in a tangent direction $v$, choose a surface curve $\gamma$ with $\gamma(0)=p$ and $\gamma'(0)=v$. Then $dn_p(v)=(n\circ\gamma)'(0)$. The ordinary derivative of a differentiable map depends only on the initial velocity, so this definition does not depend on the chosen curve.

## 2. Why the derivative stays tangent

**Proposition 10.3.** For every tangent vector $v$, $dn_p(v)$ is perpendicular to $n(p)$.

*Proof.* Along the selected curve, $n\cdot n=1$. Differentiating gives $2(n\circ\gamma)'\cdot n=0$. Therefore $dn_p(v)\in n(p)^\perp=T_pM$. Linearity follows from linearity of the derivative. $\square$

Normal differentiation therefore produces tangential information, even though it measures the motion of a normal vector. It does not produce another normal vector. This elementary orthogonality calculation is what makes the shape operator a map between tangent directions.

Write $X_1=X_u$, $X_2=X_v$, and $n_i=\partial_i n$. Since $n\cdot X_j=0$, differentiating with respect to the ith parameter gives
$n_i\cdot X_j+n\cdot X_{ij}=0.$
Consequently
$S(X_i)\cdot X_j=n\cdot X_{ij}.$
The right side involves the normal part of a second derivative of the patch. This identity links changing normals with bending position vectors.

**Theorem 10.4 (self-adjointness).** With the inner product induced from $\mathbb R^3$, the shape operator satisfies
$\langle Sv,w\rangle=\langle v,Sw\rangle$
for all tangent vectors $v,w$.

*Proof.* For the coordinate tangent basis the preceding identity gives
$\langle SX_i,X_j\rangle=\langle n,X_{ij}\rangle$.
Because $X$ is $C^2$, mixed partial derivatives agree, so this equals $\langle n,X_{ji}\rangle=\langle X_i,SX_j\rangle$. Expand arbitrary $v,w$ as linear combinations of $X_1,X_2$ and use bilinearity. $\square$

Self-adjointness is a statement about the tangent inner product. It does not say that every coordinate matrix of $S$ is symmetric for the ordinary coordinate dot product. A nonorthonormal basis changes the matrix test, as the next section shows.

## 3. The second fundamental form

**Definition 10.5.** The second fundamental form is
$\mathrm{II}_p(v,w)=\langle S_pv,w\rangle.$
It is a symmetric bilinear form. In patch coordinates put
$e=\langle X_{uu},n\rangle,\qquad
f=\langle X_{uv},n\rangle,\qquad
g=\langle X_{vv},n\rangle.$
Its quadratic expression is $e\,du^2+2f\,du\,dv+g\,dv^2$.

Keep this coefficient $g$ distinct from the entire first-form matrix. We will write
$I=\begin{pmatrix}E&F\\F&G\end{pmatrix},\qquad
B=\begin{pmatrix}e&f\\f&g\end{pmatrix}$
when matrix notation is helpful. The first form is positive definite at a regular point, while the second form can be positive, negative, indefinite, or zero.

**Proposition 10.6 (coordinate shape matrix).** If columns record the coefficients of $S(X_u)$ and $S(X_v)$ in the coordinate tangent basis, then its matrix is $A=I^{-1}B$.

*Proof.* The bilinear identity gives $A^TI=B$ by evaluating the two basis vectors. Self-adjointness also gives $A^TI=IA$, so $IA=B$ and $A=I^{-1}B$. Alternatively solve the two scalar inner-product equations for each column. Invertibility is legitimate because $\det I=EG-F^2=\|X_u\times X_v\|^2>0$. $\square$

This formula is often the shortest computational route. Treating $B$ itself as the shape matrix works only when $I$ is the identity at the point. Even diagonal $I$ may contain nonunit scale factors.

Under a coordinate change with tangent coefficient matrix $J$, the form matrices become $I'=J^TIJ$ and $B'=J^TBJ$. The operator matrix becomes $A'=J^{-1}AJ$, by ordinary change of basis. Thus the two forms transform by congruence, while the operator transforms by similarity. These are different rules with different purposes.

## 4. Normal acceleration and normal curvature

**Proposition 10.7.** If a $C^2$ surface curve $\gamma(t)=X(u(t),v(t))$ passes through $p$, then
$\langle\gamma''(t),n\rangle
=e(u')^2+2fu'v'+g(v')^2
=\mathrm{II}(\gamma',\gamma').$

*Proof.* Differentiate twice:
$\gamma''=X_u u''+X_vv''+X_{uu}(u')^2+2X_{uv}u'v'+X_{vv}(v')^2$.
The first two terms are tangent and have zero dot product with $n$. Taking the normal component of the remaining terms gives the displayed expression. $\square$

For a unit-speed curve, its normal curvature is $k_n=\langle\gamma'',n\rangle$. For any nonzero tangent direction represented by $v$, the corresponding direction-dependent value is
$k_n(v)=\frac{\mathrm{II}(v,v)}{\mathrm I(v,v)}.$
Scaling $v$ does not change this quotient. Therefore it belongs to a direction, not to an arbitrary speed of traversal.

Two surface curves with the same unit tangent at a point have the same normal curvature there, although their tangential accelerations can differ. Their ordinary space-curve curvatures need not agree. If the unit-speed acceleration is split into tangent and normal components, its squared norm is the sum of their squared norms. Normal curvature supplies only one of those contributions.

A negative normal curvature means the acceleration points partly opposite the chosen normal. It does not mean a negative speed, a negative ordinary curvature magnitude, or an invalid patch.

## 5. Worked examples

### Worked example 1 — A plane has a constant Gauss map

Let $X(u,v)=p+ua+vb$ with linearly independent constant vectors $a,b$. The cross product and its normalized direction are constant. Hence $n_u=n_v=0$, so $S=0$. All second derivatives of $X$ vanish, giving $e=f=g=0$ directly.

Every surface curve therefore has zero normal acceleration. It can still turn within the plane: a unit circle drawn in it has ordinary curvature one. The second form records bending of the plane itself, rather than every curve one can draw on it. Changing to curvilinear coordinates on the plane can make $X_{ij}$ nonzero, but their normal components remain zero.

### Worked example 2 — An outward-oriented sphere

On the sphere of radius $R>0$ centered at zero, the outward normal is $n(p)=p/R$. Thus for every tangent vector $v$,
$dn_p(v)=v/R$ and $S_pv=-v/R$.
It follows that $\mathrm{II}=-(1/R)\mathrm I$.

For any unit-speed curve on the sphere, differentiate $\gamma\cdot\gamma=R^2$ twice. The result is $\gamma\cdot\gamma''=-1$, so $\langle\gamma'',n\rangle=-1/R$, agreeing with the second-form computation. The tangential part can vary from curve to curve. Reversing the normal changes the second form to $+(1/R)\mathrm I$ but changes no length measurements.

### Worked example 3 — A cylinder distinguishes directions

Use $X(u,v)=(R\cos u,R\sin u,v)$ with outward normal $n=(\cos u,\sin u,0)$. The first form is $I=\operatorname{diag}(R^2,1)$. Second derivatives give $B=\operatorname{diag}(-R,0)$, so $A=\operatorname{diag}(-1/R,0)$.

The circular direction bends normally; the axial direction does not. A vector $aX_u+bX_v$ has normal curvature
$-\frac{Ra^2}{R^2a^2+b^2}.$
It ranges between $-1/R$ and zero. The cylinder is not a plane in space, despite admitting locally identical first-form measurements after replacing $u$ by distance $Ru$.

### Worked example 4 — A graph at a horizontal tangent

For $X(x,y)=(x,y,h(x,y))$, take the upward normal
$n=(-h_x,-h_y,1)/W$, where $W=\sqrt{1+h_x^2+h_y^2}$.
Then $I$ has entries $1+h_x^2,h_xh_y,1+h_y^2$, and $B=(\operatorname{Hess}h)/W$.

If $h_x=h_y=0$ at the point, $I$ is the identity and the shape matrix is exactly the Hessian. For $h=x^2+xy-2y^2$ at zero, it is
$\begin{pmatrix}2&1\\1&-4\end{pmatrix}$.
The mixed term matters: the coordinate axes are not eigenvector directions. Away from a horizontal tangent, using the Hessian alone would omit both the normalizing factor and the inverse first form.

## 6. What the Gauss map can and cannot tell us

Since $S=-dn$, their determinants agree in dimension two. Nonzero determinant means the Gauss map derivative is invertible, so the inverse function theorem makes the Gauss map locally one-to-one with an open image near that point. Zero determinant means some tangent direction changes the normal only to higher order, or not at all.

These are derivative statements. A derivative vanishing at one point does not force the normal to be constant nearby. For instance a graph whose first nonzero terms have degree three has zero second form at the origin but can bend nearby. Conversely a constant normal on an entire connected patch forces its position to lie in a plane: differentiating $X\cdot n$ gives zero in both coordinate directions.

The Gauss map is not the same thing as a camera view or a radial position map. Only on a sphere centered at the origin does the outward normal coincide with normalized position everywhere. It is also not generally globally injective. Multiple points can share a normal direction, and local invertibility at selected points does not settle the global question.

The next chapter uses self-adjointness to select orthogonal principal directions and summarize the shape operator by two eigenvalues. That reduction explains why a quadratic direction-dependent quantity can be encoded by principal, Gaussian, and mean curvatures.

## 7. Normal sections and the curvature of an actual curve

The direction quotient II(v,v)/I(v,v) is not only an algebraic construction. It can be realized by a curve cut out with a plane.

**Proposition 10.8 (normal-section interpretation).** Fix a regular point p and a unit tangent T. The plane through p spanned by T and n cuts out a regular surface curve near p whose unit-speed normal acceleration is the normal curvature in direction T. Its acceleration has no component in the surface tangent direction JT.

*Proof.* Put J T=n cross T, the other unit tangent direction. The chosen plane is the zero set of the linear function L(q)=<q-p,JT>. Its restriction to the surface has derivative one in direction JT, so its derivative is nonzero. The multivariable implicit-function theorem therefore gives a regular local level curve. Its tangent line is the kernel of that derivative inside the tangent plane, namely the line spanned by T. Choose its traversal to have tangent T and reparametrize by arc length.

The curve lies in the fixed plane span(T,n) through p, so its acceleration at p lies in that plane. Unit speed makes the acceleration perpendicular to T. Hence it is a scalar multiple of n, with scalar II(T,T) by Proposition 10.7. This proves both assertions. $\square$

This construction is local. Farther away the plane may meet other parts of the surface, and the chosen component may turn or stop being a regular intersection. No global cross-section uniqueness is claimed.

For a different unit-speed surface curve with the same initial T, suppose its ordinary curvature is kappa>0 and its principal curve normal is N. The equality gamma''=kappa N gives
$k_n=\kappa\langle N,n\rangle.$
Thus the difference between ordinary and normal curvature is controlled by the angle between two different normals: the principal normal of the space curve and the chosen surface normal. If they are perpendicular, normal curvature is zero even though the curve can bend strongly within the surface.

If kn is nonzero, the ordinary radius 1/kappa equals $|\langle N,n\rangle|/|k_n|$ and is no larger than the normal-section radius $1/|k_n|$. This conclusion requires kappa and kn nonzero before taking reciprocals. At a zero-curvature normal section, its acceleration vanishes at the point and there need not be a principal curve normal there. Keeping these exceptional cases prevents an osculating-circle picture from introducing undefined divisions.

## Exercises

<a id="gauss-map-second-fundamental-form-ex-1"></a>
### Exercise 10.1

Prove directly that $n_u$ and $n_v$ are tangent to the surface.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Differentiate the unit-length identity.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The tangent plane is the orthogonal complement of n.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

From $n\cdot n=1$, differentiation gives $n_i\cdot n=0$ for each parameter i. The regular tangent plane equals $n^\perp$, so both derivatives lie in it. This does not assert that they are multiples of one another or nonzero.

</details>

<a id="gauss-map-second-fundamental-form-ex-2"></a>
### Exercise 10.2

Derive self-adjointness of $S$ without choosing principal directions.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Differentiate $n\cdot X_j=0$.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use equality of mixed second partials.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Differentiation gives $-n_i\cdot X_j=n\cdot X_{ij}$. The right side is symmetric in i,j because X is C2. Since $SX_i=-n_i$, the two mixed inner products agree on a tangent basis. Bilinear expansion proves the assertion for arbitrary tangent vectors.

</details>

<a id="gauss-map-second-fundamental-form-ex-3"></a>
### Exercise 10.3

What changes when the chosen normal is replaced by its negative?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The first form uses only tangent vectors.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Differentiate the new normal before identifying the shape operator.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The first form is unchanged. The Gauss map and its derivative change sign, so S changes to -S and every coefficient of II changes sign. Normal curvature changes sign as well. Length, area, and the underlying tangent plane remain unchanged; an unsigned curvature magnitude of a curve is not affected.

</details>

<a id="gauss-map-second-fundamental-form-ex-4"></a>
### Exercise 10.4

Find II for an outward-oriented sphere of radius 3.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The normal is p/3.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The shape operator is minus the derivative.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For tangent v, $dn(v)=v/3$ and $S(v)=-v/3$. Hence $\mathrm{II}(v,w)=-\langle v,w\rangle/3$, or $\mathrm{II}=-(1/3)\mathrm I$.
Every unit tangent direction has normal curvature -1/3. Reversing the normal would reverse this sign.

</details>

<a id="gauss-map-second-fundamental-form-ex-5"></a>
### Exercise 10.5

On a radius-2 outward cylinder, find normal curvature in a direction making angle pi/4 with the circular unit tangent.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use an orthonormal circular/axial basis.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

II is diagonal there with entries -1/2 and zero.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The unit vector is $(e_c+e_a)/\sqrt2$. By bilinearity and the diagonal shape operator, its normal curvature is $(-1/2)(1/2)+0(1/2)=-1/4$. Using the raw angular coordinate vector as a unit vector would miss its length factor.

</details>

<a id="gauss-map-second-fundamental-form-ex-6"></a>
### Exercise 10.6

For $h=x^2+3xy+y^2$, compute the upward shape matrix at the origin.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check the first derivatives.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

At a horizontal tangent the first form is the identity.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The first derivatives vanish at zero. The Hessian is $\begin{pmatrix}2&3\\3&2\end{pmatrix}$, so this is S in the coordinate orthonormal basis. The mixed coefficient is 3, not 6: the quadratic expression contains twice the off-diagonal matrix entry.

</details>

<a id="gauss-map-second-fundamental-form-ex-7"></a>
### Exercise 10.7

Why do two unit-speed surface curves with equal initial tangents have equal normal acceleration?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the twice-differentiated patch formula.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their tangential second derivatives disappear on taking the dot product with n.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The normal acceleration is II(T,T), which depends only on the common tangent T at that point and the surface's second form. Parameter accelerations contribute tangent vectors and disappear in the normal projection. The full accelerations may differ because their tangential components need not agree.

</details>

<a id="gauss-map-second-fundamental-form-ex-8"></a>
### Exercise 10.8

If the coordinate tangent basis changes by an invertible matrix J, derive the transformation rule for II.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write each new vector as a linear combination of the old ones.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply bilinearity in both slots.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

If new coefficient vectors a,b represent old vectors Ja,Jb, then II equals $a^T J^TBJb$. Thus $B'=J^TBJ$. The corresponding operator matrix instead transforms as $A'=J^{-1}AJ$. Confusing these two rules can produce incorrect eigenvalues.

</details>

<a id="gauss-map-second-fundamental-form-ex-9"></a>
### Exercise 10.9

Show that an invertible shape operator makes the Gauss map a local diffeomorphism.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The sphere tangent plane at n is the same vector plane as the surface tangent plane.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the inverse function theorem in local coordinates.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Since $dn=-S$, invertibility of S gives an invertible derivative of the Gauss map between two-dimensional tangent spaces. The inverse function theorem in surface and sphere charts supplies neighborhoods on which it is a diffeomorphism. It gives no global injectivity conclusion.

</details>

<a id="gauss-map-second-fundamental-form-ex-10"></a>
### Exercise 10.10

Give a surface point where II vanishes although the surface is not locally planar.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Try a cubic graph with horizontal tangent.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compute its Hessian at the origin and compare nearby values.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For $h(x,y)=x^3$, the upward second form at zero vanishes because its Hessian vanishes there. In every neighborhood there are points with x nonzero, where $h_{xx}=6x$ is nonzero and the second form does not vanish. A planar open patch would have constant normal and zero II throughout, so this graph is not locally a plane.

</details>

## Sources

The exposition and exercises are original. Primary-author comparison: [Sucharit Sarkar, Math 120A notes, Lectures 19–20](https://www.math.ucla.edu/~sucharit/120A-notes.html), and [Peter Petersen, Classical Differential Geometry, Section 5.2](https://www.math.ucla.edu/~petersen/DiffGeo.pdf). The retained Quarto calculus chapter `modules/textbooks/calculus/chapters/28-differential-geometry.qmd` is a companion seed; its text and exercises are unchanged.

## Summary

The Gauss map records the chosen unit normal, and its negative derivative is the self-adjoint shape operator. The second form II(v,w)=I(Sv,w) records normal acceleration. In coordinates its matrix is not generally the shape matrix: S is represented by I^-1B. Reversing the normal reverses signed normal bending. Principal directions and the curvature invariants in the next chapter summarize this operator.
