
# Tangent Planes and Smooth Maps of Surfaces

A surface point has many coordinate labels, but a velocity through that point is a spatial vector. The tangent plane should collect those velocities independently of the chart used to compute them. Likewise a smooth map between surfaces should have one derivative sending input velocities to output velocities, even though its coordinate formula changes between charts.

We develop these statements from classical multivariable calculus and curves. There is no need to assume an abstract tangent-bundle construction. All surfaces are regular subsets of Euclidean three-space, with the patch conventions of [Regular Surfaces and Coordinate Patches](regular-surfaces-patches.md). A tangent plane here is a vector space based at the origin; adding its surface point gives the corresponding affine tangent plane. Confusing the two makes expressions involving sums or derivatives unnecessarily ambiguous.

## Velocities define the tangent space

**Definition 8.1 — Tangent vector.** A vector $w\in\mathbb R^3$ is tangent to $S$ at $p$ if there exists a $C^1$ curve $\gamma:(-\varepsilon,\varepsilon)\to S$ with $\gamma(0)=p$ and $\gamma'(0)=w$. Zero velocities are allowed. The set of these vectors is denoted $T_pS$.

This definition does not require a curve to be regular. A constant curve realizes the zero vector. To show that all these velocities form a two-dimensional vector space, rather than merely a collection, we use a chart and then prove the result does not depend on that chart.

**Theorem 8.2 — Coordinate description of the tangent plane.** If $X:U\to S$ is a $C^1$ patch and $X(q)=p$, then

$$T_pS=\operatorname{im}DX_q=\operatorname{span}\{X_u(q),X_v(q)\}.$$

In particular it is a two-dimensional vector subspace, and $DX_q:\mathbb R^2\to T_pS$ is an isomorphism.

**Proof.** Any tangent curve remains in the patch image for sufficiently small times because the image is a neighborhood of $p$ in $S$. Its coordinate curve $c=X^{-1}\gamma$ is $C^1$: the local graph theorem expresses the chart inverse by smooth coordinate projections and a smooth inverse map. The chain rule gives $\gamma'(0)=DX_qc'(0)$, putting every tangent velocity in the derivative image.

Conversely, for any $a\in\mathbb R^2$ the curve $c(t)=q+ta$ stays in $U$ for sufficiently small $t$, since $U$ is open. Its surface image has velocity $DX_qa$. Thus every vector in the image occurs as a tangent velocity. Rank two makes this map injective and its image two-dimensional. $\square$

**Corollary 8.3 — Independence of coordinates.** On an overlap, two derivative bases span the same plane and are related by the invertible transition Jacobian.

**Proof.** If $Y=X\circ\phi$, the chain rule gives $DY=DX\,D\phi$. The transition theorem makes $D\phi$ invertible. Hence the two images coincide. This also follows directly from the velocity definition, which contains no chart. $\square$

A tangent vector therefore has both a geometric value $w$ and coordinate components $a$. The relation is $w=DX_qa$. Under a change of basis the component pair changes while the spatial vector remains fixed. Later curvature matrices will transform for exactly this reason. Components cannot be added across different charts without first putting them into a common basis.

## Level sets and normals

For a regular level surface $F=c$, differentiating $F(\gamma(t))=c$ gives $\nabla F(p)\cdot\gamma'(0)=0$. Thus every tangent vector lies in the kernel of the nonzero linear functional $w\mapsto\nabla F(p)\cdot w$. That kernel has dimension two, as does the tangent plane, so they are equal:

$$T_pS=\{w:\nabla F(p)\cdot w=0\}.$$

The affine tangent plane is consequently $\nabla F(p)\cdot(x-p)=0$. This equation is useful only where the gradient test has its stated nonvanishing hypothesis. For a poor defining equation such as $F=z^3$ on the plane, its zero gradient gives no normal direction; the surface still has its valid tangent plane from a graph chart.

For a graph $z=f(x,y)$, the upward normal direction is $(-f_x,-f_y,1)$. The affine tangent-plane equation at $(a,b,f(a,b))$ is

$$z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b).$$

This is the usual linearization formula interpreted as a plane in space. Its derivation makes clear that tangent vectors describe first-order displacement. A tangent line need not lie in the surface, and the affine tangent plane need not intersect the surface only at its tangency point.

## Smooth maps and their differentials

**Definition 8.4 — Smooth map between surfaces.** A map $f:S\to S'$ is $C^k$ if it is continuous and all local coordinate expressions $Y^{-1}fX$ are $C^k$ where defined. For a real-valued map, only a domain chart is needed. Coordinate-transition smoothness implies that it suffices to test one choice of charts locally around each point; any other choice composes with smooth transitions.

**Theorem 8.5 — Differential by velocities.** If $f$ is $C^1$, then a well-defined linear map $df_p:T_pS\to T_{f(p)}S'$ sends a tangent velocity $\gamma'(0)$ to $(f\gamma)'(0)$. In charts it is

$$df_p=DY_r\,D(Y^{-1}fX)_q\,(DX_q)^{-1},$$

where $p=X(q)$ and $f(p)=Y(r)$; the inverse of $DX_q$ means its inverse onto the tangent plane.

**Proof.** Write a tangent curve as $\gamma=Xc$. In target coordinates the image curve is $(Y^{-1}fX)c$. Differentiating and then applying $DY_r$ gives the displayed expression applied to $DX_qc'(0)$. The output therefore depends only on the original velocity, not on the representing curve or its acceleration. It is a composition of linear maps and hence linear. It lies in the target tangent plane by the tangent-velocity theorem. Changing charts yields the same velocity definition and so the same differential. $\square$

This theorem avoids an unjustified use of an inverse three-by-two matrix: $DX$ is not invertible as a map onto all of $\mathbb R^3$. It is invertible as a map from $\mathbb R^2$ onto its two-dimensional image. A coordinate left inverse or the associated Gram system can compute its inverse on that image, but there is no ordinary square-matrix inverse of the original rectangular matrix.

**Proposition 8.6 — Chain rule and local inverses.** For $C^1$ maps $f:S\to S'$ and $g:S'\to S''$, $d(gf)_p=dg_{f(p)}df_p$. A diffeomorphism has invertible differential. Conversely, if $df_p$ is invertible, then $f$ restricts near $p$ to a diffeomorphism onto a neighborhood of $f(p)$.

**Proof.** The chain rule follows by differentiating the image of every representing curve, or by the coordinate formula and the ordinary matrix chain rule. If $f$ has a smooth inverse, differentiate the two identity compositions to get inverse tangent maps. Conversely the coordinate expression $Y^{-1}fX$ has an invertible two-by-two derivative when $df_p$ is invertible. The multivariable inverse-function theorem gives a local coordinate diffeomorphism. Composing its local inverse with $X$ and $Y^{-1}$ produces the surface inverse with its stated neighborhoods. $\square$

Local invertibility is not global injectivity. A map can wrap a plane around a cylinder with invertible differential everywhere. Nor does a singular differential at one point prove the set map is not a homeomorphism: the scalar cube map already shows a smooth bijection can have a nonsmooth inverse. The derivative theorem asserts a smooth local inverse under a sufficient rank condition.

## Worked examples

### Worked example 1 — Tangent vectors on a sphere

Let $S$ be $x^2+y^2+z^2=R^2$, with $R>0$. At $p=(R,0,0)$, the gradient is $(2R,0,0)$. Thus $T_pS=\{(0,a,b):a,b\in\mathbb R\}$ and the affine tangent plane is $x=R$. The vector $(0,2,0)$ is realized by $\gamma(t)=(R\cos(2t/R),R\sin(2t/R),0)$, whose derivative at zero is exactly that vector. A nonunit tangent vector is a valid velocity: its magnitude records how fast the chosen curve moves. The line $p+t(0,2,0)$ is not itself contained in the sphere, illustrating the first-order nature of the tangent plane.

### Worked example 2 — Radial projection and its derivative

Define $F:\mathbb R^3\setminus\{0\}\to S^2$ by $F(x)=x/\|x\|$. Put $r=\|p\|$ and $n=p/r$. Differentiating the norm gives $Dr_p(w)=n\cdot w$, so

$$DF_p(w)=\frac1r\bigl(w-(n\cdot w)n\bigr).$$

The expression is perpendicular to $n$ and therefore tangent to the unit sphere. A radial vector is killed, while vectors orthogonal to the radius are scaled by $1/r$. Restricting $F$ to the radius-$R$ sphere gives differential $w\mapsto w/R$ on its tangent plane. The formula identifies both its image and its scale without choosing angular coordinates, which would fail at a pole.

### Worked example 3 — A local diffeomorphism that wraps globally

Map the plane to a radius-$R$ cylinder by

$$f(u,v)=(R\cos(u/R),R\sin(u/R),v).$$

Its derivative sends $(a,b)$ to $a(-\sin(u/R),\cos(u/R),0)+b(0,0,1)$. These two vectors are independent and orthonormal, so the derivative is an isomorphism onto the cylinder tangent plane everywhere. The local inverse theorem applies. Globally, however, $f(u+2\pi R,v)=f(u,v)$, so the map is not injective and cannot be a global diffeomorphism. This calculation will also show a local length-preserving map in the next chapter; preserving infinitesimal geometry does not erase the global wrap.

## Real functions and critical points

For a smooth real-valued function $h:S\to\mathbb R$, its differential is a linear functional on $T_pS$. A **critical point** is one where this functional is zero. If $h$ is the restriction of an ambient differentiable $H$, then $dh_p(w)=\nabla H(p)\cdot w$ for tangent $w$. Thus criticality means the ambient gradient is perpendicular to the tangent plane, not necessarily zero in ambient space.

For height $h(x,y,z)=z$ on a sphere, the ambient gradient is the constant vector $(0,0,1)$ and never vanishes. The restriction is nevertheless critical at the north and south poles, because their tangent planes are horizontal. This is why unconstrained derivative tests cannot simply be substituted into a constrained geometric problem. The surface tells us which directions of variation are permitted.

A local maximum or minimum of a differentiable surface function is critical: compose it with every tangent curve and apply the one-variable derivative test. The converse need not hold. On the graph $z=x^2-y^2$, height is critical at the origin but increases along one coordinate curve and decreases along the other. Curvature will refine the geometric description of such behavior, while the differential identifies its first-order vanishing.

## Worked example — Tangency to a constraint does not determine the constraint

The equation $F(x,y,z)=z^2=0$ describes precisely the ordinary horizontal plane. However, its differential vanishes at every point of that plane. Its kernel is the whole ambient three-dimensional space, which is larger than the actual tangent plane. Thus the regular-level-set hypothesis is a property of the chosen defining function, and a poor defining function can fail it even when its zero set is an excellent smooth surface.

Using instead $G(x,y,z)=z$ defines the same set with nonzero differential. Its kernel is the horizontal plane, and every vector in that kernel is realized as the derivative of a straight line in the surface. This recovers the actual tangent space by the regular-level-set theorem. The first equation did not prove that the surface was singular; it only prevented that theorem from applying to that equation. Conversely, vanishing gradient cannot by itself prove smoothness either: the zero set of $x^2+y^2-z^2$ at the origin is a cone. One must inspect the set or find a valid regular description, rather than equating failure of a sufficient criterion with a geometric conclusion.

## Exercises

### Exercise 8.1
<a id="tangent-planes-smooth-maps-ex-1"></a>
Find the tangent vector space and affine tangent plane of $z=x^2+y^2$ at $(1,2,5)$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the defining function $F=z-x^2-y^2$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its gradient there is $(-2,-4,1)$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The tangent vector space is $\{(a,b,c):c=2a+4b\}$, equivalently the span of $(1,0,2)$ and $(0,1,4)$. Adding the basepoint gives the affine plane $z-5=2(x-1)+4(y-2)$. The vector space equation passes through the origin, whereas the affine equation passes through the selected surface point. Both descriptions express the same first-order directions with different origins.
</details>

### Exercise 8.2
<a id="tangent-planes-smooth-maps-ex-2"></a>
Show that every linear combination of patch derivative vectors is realized by a surface curve velocity.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use a straight coordinate path through the parameter point.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The domain's openness makes a short segment available.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For a parameter point $q$ and coefficients $(a,b)$, take $c(t)=q+t(a,b)$ for sufficiently small positive and negative $t$. It stays in the open chart domain. The curve $\gamma=Xc$ then has derivative $aX_u(q)+bX_v(q)$ at zero by the chain rule. The zero combination is realized by the constant path. Thus the image of the derivative contains no abstract vectors lacking a curve interpretation.
</details>

### Exercise 8.3
<a id="tangent-planes-smooth-maps-ex-3"></a>
Why is the differential formula independent of the acceleration of the representing curve?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Only first derivatives appear in the chain rule.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Write the output velocity using the coordinate derivative matrix.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For a coordinate curve $c$, the output velocity is $DY\,D(Y^{-1}fX)c'(0)$. The original velocity determines $c'(0)$ uniquely because $DX$ is an isomorphism onto the tangent plane. No second derivative of $c$ occurs. Hence two surface curves with the same initial point and velocity give the same output velocity even if their accelerations differ. That is exactly the well-definedness needed for $df_p$.
</details>

### Exercise 8.4
<a id="tangent-planes-smooth-maps-ex-4"></a>
Find the kernel and image of the ambient radial-projection derivative at $p\ne0$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Split a vector into its radial and perpendicular components.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The perpendicular component survives with a nonzero scale.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Write $w=(n\cdot w)n+w_\perp$. Then $DF_p(w)=w_\perp/r$. Its kernel is the radial line spanned by $p$, and its image is the plane perpendicular to $n$, the tangent plane of the unit sphere at $n$. Every vector in that plane occurs by choosing $w$ to be $r$ times it. The ambient derivative is therefore rank two rather than invertible in three dimensions.
</details>

### Exercise 8.5
<a id="tangent-planes-smooth-maps-ex-5"></a>
Locate the critical points of height on a radius-$R$ sphere.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Height differentiates a tangent vector to its third component.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The functional vanishes on the whole tangent plane exactly when that plane is horizontal.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The height differential is $w\mapsto w_z$. It vanishes on $T_pS=p^\perp$ exactly when the vertical vector is normal to that plane, meaning $p$ lies on the vertical axis. Thus the critical points are $(0,0,R)$ and $(0,0,-R)$. They are respectively the global maximum and minimum. The ambient gradient is not zero; criticality is a statement about the allowed tangent directions.
</details>

### Exercise 8.6
<a id="tangent-planes-smooth-maps-ex-6"></a>
Prove the surface chain rule using the velocity definition of the differential.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Represent a tangent vector by one curve.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Send the curve through the two maps successively.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $w=\gamma'(0)$ at $p$, then $df_p(w)=(f\gamma)'(0)$. Applying the second differential yields $dg_{f(p)}df_p(w)=(gf\gamma)'(0)$, which by definition equals $d(gf)_p(w)$. Since every tangent vector has such a curve representation, the maps agree on the whole tangent plane. The intermediate velocity belongs to the correct tangent plane because it is a curve velocity there.
</details>

### Exercise 8.7
<a id="tangent-planes-smooth-maps-ex-7"></a>
Give a smooth surface map whose differential is invertible everywhere but which is not globally injective.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the plane-to-cylinder wrapping map.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compare two parameters separated by one circumference.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $f(u,v)=(R\cos(u/R),R\sin(u/R),v)$, the derivative images of the two standard basis vectors are independent, so its tangent differential is invertible everywhere. Nevertheless $u$ and $u+2\pi R$ give identical points. Local inverse neighborhoods exist but cannot be combined into one global inverse over the whole cylinder. The example separates the local derivative theorem from a global topological assertion.
</details>

### Exercise 8.8
<a id="tangent-planes-smooth-maps-ex-8"></a>
Let $h$ attain a local maximum at an interior surface point. Prove $dh$ vanishes there.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compose $h$ with an arbitrary tangent curve.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the one-variable stationary-point theorem.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For any $w\in T_pS$, choose a two-sided surface curve $\gamma$ through $p$ with velocity $w$. The real function $h\gamma$ has a local maximum at zero, so its derivative is zero. That derivative is $dh_p(w)$. Since this holds for every tangent vector, the linear functional is zero. At a boundary point one-sided variations require a different condition, which is why interior is included.
</details>

### Exercise 8.9
<a id="tangent-planes-smooth-maps-ex-9"></a>
Show that a coordinate change alters components but not a tangent vector's value.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Write $Y=X\phi$ and apply the chain rule.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The new component pair is transformed by $D\phi$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For components $b$ in the $Y$ chart, the spatial vector is $DY\,b=DX\,D\phi\,b$. Thus its components in the $X$ chart are $a=D\phi\,b$. Invertibility of the transition Jacobian makes this conversion reversible. Both expressions give the same vector in $\mathbb R^3$. The basis changes and the component column changes together; holding both fixed would describe a different vector.
</details>

### Exercise 8.10
<a id="tangent-planes-smooth-maps-ex-10"></a>
Explain why writing an ordinary inverse of the three-by-two matrix $DX$ is incorrect, and state the valid inverse used in the differential formula.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The domain and codomain dimensions of that ambient matrix differ.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Restrict its codomain to the derivative image.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The matrix maps $\mathbb R^2$ injectively into $\mathbb R^3$, so it cannot be a bijection onto all of its ambient codomain and has no square-matrix inverse. Its image is exactly the two-dimensional tangent plane. As a map onto that plane, it is a linear isomorphism and has an inverse assigning each tangent vector its two coordinate components. This is the meaning of $(DX)^{-1}$ in the chart formula.
</details>

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The preserved seeds are Quarto Calculus Chapters 13 and 28 and the [Unhurried surface-patch reading](../../apps/unhurried/articles/ga-dg-surface-patches/index.html). A verified primary-author reference for chart derivatives and tangent spaces is Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lectures 11–12. The inverse-function theorem is used as the explicitly named multivariable calculus input introduced in the preceding chapter.

## Summary

Tangent vectors are curve velocities, and a patch derivative identifies them with a two-dimensional vector plane independently of coordinates. Smooth surface maps differentiate to linear maps between these planes; the chain rule and local inverse theorem follow from their coordinate counterparts. Ambient formulas are valid after restricting to tangent directions, and criticality of a surface function concerns only those directions. The next chapter equips each tangent plane with the length and angle information induced from Euclidean space.
