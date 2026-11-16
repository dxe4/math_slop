
# Riemannian Metrics, Connections and Geodesics: A First Look

A smooth manifold has tangent vectors but no preferred lengths or angles. A Riemannian metric adds those measurements. Its Levi–Civita connection then compares directions at nearby points in the unique way compatible with both the metric and the manifold's ordinary Lie bracket. Geodesics are curves whose own velocity is parallel under this connection.

This L4 chapter assumes tangent bundles, partitions of unity, Lie brackets and the local ODE constructions already proved in this book. Manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary. We prove metric existence, the full Levi–Civita construction, parallel transport and the local geodesic exponential theorem. The named parameter-dependent Euclidean ODE and inverse-function theorems are the analytic inputs. Global distance minimization, curvature tensors, Jacobi fields and Hopf–Rinow are further Riemannian theory; they are not conclusions silently attached to the local exponential map.

## 1. A smoothly varying positive inner product

A Riemannian metric assigns a positive-definite symmetric real bilinear form $g_p$ to each tangent space, with smooth coordinate coefficients $g_{ij}=g(\partial_i,\partial_j)$. Positivity means $g_p(v,v)>0$ for every nonzero tangent vector. Its inverse matrix has smooth coefficients because its determinant is nowhere zero and the adjugate formula is smooth. Thus the metric identifies tangent and cotangent vectors smoothly and invertibly.

Every smooth manifold under our conventions admits a metric. Choose a locally finite coordinate cover and a subordinate partition of unity. Each chart pulls the Euclidean inner product back to a metric on its domain. Multiply these local metrics by their nonnegative partition weights, extend the weighted terms by zero and sum. The support condition makes each extension smooth, and local finiteness makes the sum smooth. At a point and nonzero vector, every contributing local metric is positive on that vector and at least one partition weight is positive, so the sum is positive definite. No orientability assumption was used. This argument is a positivity construction, not an attempt to average arbitrary coordinate vectors.

The length of a smooth curve on a compact parameter interval is the integral of the square root of $g(\dot\gamma,\dot\gamma)$. Its value is unchanged by a regular monotone reparametrization, by the chain rule and real substitution. Unlike a coordinate speed, this expression uses the metric at each point. The metric also defines the gradient of a function by $g(\operatorname{grad}f,V)=df(V)$. This equation uniquely determines a smooth field; its coordinate coefficients are obtained by applying the inverse metric to the covector coefficients. Thus a differential and a gradient are related but remain objects of different types.

## 2. What a connection must do

A connection assigns a field $\nabla_XY$ to two smooth fields, is real-bilinear, is linear over smooth functions in its first argument, and obeys the rule

$$\nabla_X(fY)=(Xf)Y+f\nabla_XY.$$

Linearity in the first argument says that the derivative direction is measured pointwise. The product rule in the second says that a changing scalar coefficient has its own derivative. A connection need not be linear over functions in that second argument.

Its torsion is $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$. The product rules and the bracket's coefficient rules make torsion linear over functions in both arguments. A metric-compatible connection satisfies

$$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ).$$

This expresses differentiation of an inner product, rather than invariance of individual coordinate metric coefficients. A metric coefficient can vary even when the connection is compatible, because the coordinate vectors can themselves vary covariantly.

**Theorem 16.1 (Levi–Civita).** There exists a unique connection that is metric compatible and torsion free.

We prove both existence and uniqueness, not merely solve for plausible coordinate symbols. Define the Koszul expression

$$\begin{aligned}
R(X,Y,Z)={}&Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)\\
&-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).
\end{aligned}$$

If a compatible torsion-free connection exists, expand the three differentiated inner products by compatibility. Replace differences of covariant derivatives by brackets using zero torsion. The terms cancel in pairs except twice $g(\nabla_XY,Z)$. Therefore any candidate must satisfy

$$2g(\nabla_XY,Z)=R(X,Y,Z).$$

Since the metric is nondegenerate, this already proves uniqueness. Establishing that the right side actually defines a connection requires the following additional checks.

## 3. Existence from the Koszul expression

First, $R$ is linear over smooth functions in its third argument. Substitute $fZ$ throughout and use $[Y,fZ]=(Yf)Z+f[Y,Z]$ and $[fZ,X]=f[Z,X]-(Xf)Z$. The extra derivative terms from the first two metric derivatives cancel exactly with the corresponding bracket terms. The third differentiated term is already linear in the direction $fZ$. Thus $R(X,Y,fZ)=fR(X,Y,Z)$.

It is therefore a smooth covector in its last slot. More explicitly, evaluate on a coordinate basis to get smooth coefficients; function-linearity shows that their linear combination gives its value on every field. Apply the inverse metric pointwise and divide by two to obtain a unique smooth field $\nabla_XY$. The definition is intrinsic, so fields constructed in different charts agree without an additional transition assumption.

Two further expansions give

$$R(fX,Y,Z)=fR(X,Y,Z),$$

$$R(X,fY,Z)=fR(X,Y,Z)+2(Xf)g(Y,Z).$$

For the first identity the derivatives of $f$ from the differentiated pairings cancel the terms introduced by the two brackets involving $fX$. For the second the two copies of $(Xf)g(Y,Z)$ remain, while the derivatives along $Y$ and $Z$ cancel against their bracket terms. Real bilinearity is immediate. Pairing with every $Z$ now proves precisely the connection product rules.

Finally, subtract the Koszul expression with $X,Y$ interchanged. Symmetry of the metric and antisymmetry of the bracket give

$$R(X,Y,Z)-R(Y,X,Z)=2g([X,Y],Z).$$

Nondegeneracy makes the torsion zero. Adding the expressions with $Y,Z$ interchanged instead gives

$$R(X,Y,Z)+R(X,Z,Y)=2Xg(Y,Z),$$

which is metric compatibility. These verifications establish existence and finish the theorem. The argument relies only on the metric, bracket and scalar differentiation, explaining why the resulting connection is canonical for the metric rather than for an arbitrary coordinate chart.

In coordinates write $\nabla_{\partial_i}\partial_j=\Gamma^k_{ij}\partial_k$, summing repeated indices. Coordinate brackets vanish, so the Koszul formula becomes

$$\Gamma^k_{ij}=\frac12 g^{k\ell}
(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$

The symmetry in the lower indices expresses zero torsion in a coordinate basis. The symbols themselves are not tensor coefficients: differentiating a coordinate basis under a nonlinear coordinate change introduces second derivatives. The difference of two connections is tensorial, but one connection's symbols do not have that simpler transformation rule.

## 4. Parallel transport along a curve

For a smooth field $V(t)$ along a smooth curve, define its covariant derivative in a chart by

$$\frac{DV^k}{dt}=\frac{dV^k}{dt}
+\Gamma^k_{ij}(\gamma(t))\dot\gamma^i(t)V^j(t).$$

This definition agrees with $\nabla_{\dot\gamma}V$ when the field is extended locally, and does not depend on such an extension. Indeed the coefficient formula only uses its values along the curve and their parameter derivatives. Transforming those values by the tangent Jacobian and differentiating supplies second-coordinate derivatives which cancel the inhomogeneous change of the connection symbols. Thus the local formulas agree on overlapping charts and define a vector field along the curve intrinsically.

Parallel transport is the equation $DV/dt=0$. It is a linear ODE in the vector coefficients. On any compact portion of the curve a finite chain of coordinate intervals gives a unique solution for prescribed initial data, and linear ODE continuation covers the entire curve's parameter interval. The solution depends linearly on its initial vector. Following the same curve backwards gives its inverse transport, by uniqueness.

Compatibility gives the differentiated pairing rule along curves:

$$\frac{d}{dt}g(V,W)=g(DV/dt,W)+g(V,DW/dt).$$

It follows either by the connection identity in an extended local frame or by expanding the coordinate formula. Thus parallel transport preserves inner products and in particular lengths. It identifies tangent spaces along a chosen route; no conclusion that transport is independent of the route follows. Curvature, developed in the later theory, measures precisely a local obstruction to such path independence.

## 5. Geodesics and the local exponential map

A geodesic is a curve whose velocity is parallel to itself. Its coordinates satisfy

$$\ddot\gamma^k+\Gamma^k_{ij}(\gamma)\dot\gamma^i\dot\gamma^j=0.$$

Rewrite this as a first-order smooth ODE on the tangent bundle, with position derivative equal to velocity and velocity derivative equal to the displayed quadratic expression. The intrinsic connection guarantees agreement of these equations on overlapping bundle charts. The local ODE theorem therefore gives a unique maximal geodesic for each initial point and velocity, with smooth dependence on those initial data.

Its squared speed is constant, because the pairing rule gives derivative $2g(D\dot\gamma/dt,\dot\gamma)=0$. A nonzero initial velocity therefore never vanishes along the geodesic. An affine change of parameter preserves the geodesic equation by the chain rule. An arbitrary nonlinear change introduces an extra acceleration term, so it generally preserves only the unparametrized image, not the geodesic equation with its chosen affine parameter.

Fix a point $p$. On the set of initial velocities whose geodesics exist up to time one, put $\exp_p(v)=\gamma_{p,v}(1)$. Smooth dependence makes this domain open, and it contains zero and a neighborhood of zero: the constant geodesic has a compact time segment and the local finite-chain dependence argument applies near it. Scaling the initial velocity gives $\gamma_{p,tv}(s)=\gamma_{p,v}(ts)$ wherever both sides exist, by the affine-parameter rule and uniqueness. Hence the differential of $\exp_p$ at zero sends $v$ to its initial velocity $v$. The inverse-function theorem proves that the exponential is a diffeomorphism from a neighborhood of zero onto a neighborhood of $p$.

These are normal coordinates near the chosen point. The proof gives no global injectivity or surjectivity and no global minimizing assertion. If the geodesic reaches a missing point of the manifold in finite time, its initial velocity may lie outside the time-one domain despite the perfectly smooth metric near every actual point.

## 6. Three worked examples

### Worked example 16.2 — Polar connection coefficients on a flat plane

On a polar coordinate sector with positive radius, the Euclidean metric is $dr^2+r^2d\theta^2$. Substituting in the coefficient formula gives

$$\Gamma^r_{\theta\theta}=-r,\qquad
\Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=1/r,$$

with all other symbols zero. The geodesic equations are $\ddot r-r\dot\theta^2=0$ and $\ddot\theta+2\dot r\dot\theta/r=0$. A radial straight path with constant angle and affine positive radius satisfies them. A constant-radius circular traversal with nonzero angular speed fails the first equation, so it is not a Euclidean geodesic.

The nonzero symbols do not indicate curved intrinsic geometry here: Cartesian coordinates make all symbols zero for this same metric. They account for the varying polar basis. Any assertion about curvature must therefore use the connection's invariant derivative combinations, not the mere presence of nonzero individual symbols.

### Worked example 16.3 — Great circles from the induced sphere connection

On the unit sphere with its induced Euclidean metric, take the tangent projection of the ambient derivative to define $\nabla_XY$. The ordinary derivative product rule proves metric compatibility, and the coordinate derivative commutator proves that its torsion is zero. Uniqueness therefore identifies it with the Levi–Civita connection. Differentiating the tangency relation $\langle Y,p\rangle=0$ gives the normal component of the ambient derivative as $-\langle X,Y\rangle p$. Thus along a sphere curve,

$$D\dot\gamma/dt=\ddot\gamma+\|\dot\gamma\|^2\gamma.$$

For initial point $p$, tangent velocity $v$ of norm $c>0$, the curve $\gamma(t)=\cos(ct)p+\sin(ct)v/c$ has norm one, initial velocity $v$ and solves this equation with zero right side. Uniqueness makes it the geodesic. Its image is a great circle, and it exists for every real time. The zero initial vector gives the constant curve. At time one many distinct vectors can reach the same sphere point, so this complete example still has no globally injective exponential map.

### Worked example 16.4 — Constant speed does not prevent finite escape

Give the punctured Euclidean plane its usual metric. Starting at $(1,0)$ with velocity $(-1,0)$ gives the geodesic $\gamma(t)=(1-t,0)$ until time one. Its speed is constantly one, but no continuation through that time can remain in the punctured plane. Any continuous extension would have to take the missing origin as its value. Smooth metric coefficients and bounded speed therefore do not imply geodesic completeness on a noncompact manifold.

For contrast, on a compact manifold all geodesics are complete. The fixed-speed vectors form a compact subset of its tangent bundle: a finite family of relatively compact bundle charts and a positive lower bound for the metric on their closures bound all fiber coordinates. This speed-level set is closed, so it is compact. The geodesic ODE trajectory stays in that set. A finite cover by local existence neighborhoods gives a common continuation time, preventing a finite maximal endpoint. This is the compact-set continuation argument, not an invocation of an unproved global distance theorem.

## Exercises

### Exercise 16.1 {#smooth-riemannian-first-look-ex-1}

Show that a positive smooth function times a Riemannian metric is again a metric. What fails if the function vanishes?

<details><summary>Hint 1</summary>
Check symmetry, smoothness and positivity separately.
</details>
<details><summary>Hint 2</summary>
Evaluate on a nonzero tangent vector at a zero of the scalar function.
</details>
<details><summary>Full solution</summary>
Smooth multiplication preserves smooth coefficients and symmetry. Strict positivity of the function preserves strict positivity of every nonzero vector's squared length. At a zero, every vector has zero squared length under the product, so the form is degenerate and is not a Riemannian metric. Nonnegative coefficients alone do not suffice for positive definiteness; the partition construction succeeds because at least one positive contribution remains at each point.
</details>

### Exercise 16.2 {#smooth-riemannian-first-look-ex-2}

Write the coordinate formula for the gradient and show why it differs from the coordinate partial-derivative list in general.

<details><summary>Hint 1</summary>
Pair the proposed gradient with each coordinate basis vector.
</details>
<details><summary>Hint 2</summary>
Invert the metric coefficient matrix.
</details>
<details><summary>Full solution</summary>
The defining pairing equations are $g_{ij}(\operatorname{grad}f)^i=\partial_jf$. Their unique solution is $(\operatorname{grad}f)^i=g^{ij}\partial_jf$. The partial derivatives are the coefficients of the covector $df$, while the gradient is a vector requiring the inverse metric. Only in an orthonormal coordinate frame with identity coefficient matrix do those two lists coincide numerically. Their transformation rules remain different even then.
</details>

### Exercise 16.3 {#smooth-riemannian-first-look-ex-3}

Prove that the difference of two connections is linear over smooth functions in both arguments.

<details><summary>Hint 1</summary>
Subtract their first-argument linearity identities.
</details>
<details><summary>Hint 2</summary>
The two derivatives of the scalar factor in the second argument cancel.
</details>
<details><summary>Full solution</summary>
If $A(X,Y)=\nabla_XY-\widetilde\nabla_XY$, first-argument function-linearity is inherited from both connections. In the second argument the two terms $(Xf)Y$ cancel, leaving $A(X,fY)=fA(X,Y)$. Hence the difference is tensorial. A single connection retains its second-argument product-rule term, explaining why its symbols do not transform as tensor coefficients.
</details>

### Exercise 16.4 {#smooth-riemannian-first-look-ex-4}

Show that the Euclidean metric in Cartesian coordinates has zero connection symbols and straight affine geodesics.

<details><summary>Hint 1</summary>
Every metric coefficient is constant.
</details>
<details><summary>Hint 2</summary>
The geodesic coordinate equations reduce to zero second derivatives.
</details>
<details><summary>Full solution</summary>
All derivatives of the metric coefficients vanish, so the formula makes every connection symbol zero. The geodesic equations then say each coordinate has zero second derivative. With initial point $p$ and velocity $v$, the unique solution is $p+tv$. On all Euclidean space it exists for every time. On a proper open subdomain it is only the portion staying in that subdomain, which can have a finite maximal endpoint.
</details>

### Exercise 16.5 {#smooth-riemannian-first-look-ex-5}

Prove that a parallel vector field along a curve which vanishes at one time vanishes throughout its connected parameter interval.

<details><summary>Hint 1</summary>
Use uniqueness of its linear transport ODE.
</details>
<details><summary>Hint 2</summary>
The identically zero field solves the same initial-value problem.
</details>
<details><summary>Full solution</summary>
The zero field is parallel with zero initial value. Local uniqueness makes every other solution with that value agree near the specified time, and finite-chain continuation propagates this equality throughout the interval. One can also use preservation of its squared metric norm: the norm is constant and initially zero, so positivity makes the field zero everywhere. Both proofs use the metric-compatible transport constructed above.
</details>

### Exercise 16.6 {#smooth-riemannian-first-look-ex-6}

Show that a geodesic has constant energy density and explain why an arbitrary nonlinear parameter change usually destroys its affine geodesic equation.

<details><summary>Hint 1</summary>
Differentiate the squared speed using compatibility.
</details>
<details><summary>Hint 2</summary>
For a new curve $\beta(s)=\gamma(\phi(s))$, differentiate the extra scalar factor in its velocity.
</details>
<details><summary>Full solution</summary>
The squared speed derivative is twice the inner product of covariant acceleration and velocity, hence zero for a geodesic. Under reparametrization the covariant acceleration becomes $\phi''\dot\gamma+(\phi')^2D\dot\gamma/dt$. The second term vanishes for a geodesic, but the first generally does not. For nonconstant geodesics the affine equation is retained exactly when the reparametrization has zero second derivative, assuming a regular change of parameter.
</details>

### Exercise 16.7 {#smooth-riemannian-first-look-ex-7}

For the sphere exponential based at $p$, determine the images of tangent vectors of length $\pi$. What does this say about global injectivity?

<details><summary>Hint 1</summary>
Insert the length into the explicit great-circle formula at time one.
</details>
<details><summary>Hint 2</summary>
The sine factor vanishes.
</details>
<details><summary>Full solution</summary>
Every such vector maps to $-p$, independently of its tangent direction. In positive-dimensional tangent spaces this produces distinct vectors with identical exponential image, including the two opposite directions for the circle. Thus the exponential is not globally injective. Its differential at zero remains the identity, so the local inverse theorem is fully consistent with this global collision far from zero.
</details>

### Exercise 16.8 {#smooth-riemannian-first-look-ex-8}

Let $F$ be a diffeomorphism preserving Riemannian metrics. Prove that it carries geodesics with their affine parameter to geodesics.

<details><summary>Hint 1</summary>
Transport the source connection to the target using the diffeomorphism.
</details>
<details><summary>Hint 2</summary>
Metric compatibility and zero torsion survive that transport, so use uniqueness.
</details>
<details><summary>Full solution</summary>
Define a target connection by pushing forward the source covariant derivatives. The chain rule gives its connection product rules; bracket naturality gives zero torsion; metric preservation gives compatibility with the target metric. Levi–Civita uniqueness identifies it with the target connection. Pushing forward a zero covariant acceleration therefore gives zero covariant acceleration along the image curve. This preserves the affine parameter, since no reparametrization was made.
</details>

### Exercise 16.9 {#smooth-riemannian-first-look-ex-9}

Does the existence of a Riemannian metric imply orientability? Explain using the metric construction and the open Möbius strip.

<details><summary>Hint 1</summary>
The partition argument did not select signs of ordered frames.
</details>
<details><summary>Hint 2</summary>
The earlier Möbius obstruction rules out a nonvanishing top form, not positive inner products.
</details>
<details><summary>Full solution</summary>
It does not imply orientability. The partition construction produces a metric on every manifold with our countability and smoothness assumptions, including the open Möbius strip. That strip is nonorientable by its previously proved sign equation. A metric measures lengths and unsigned angles; it does not choose which ordered tangent frames are positive. A metric volume form needs an orientation in addition to the metric.
</details>

### Exercise 16.10 {#smooth-riemannian-first-look-ex-10}

For a one-dimensional metric $g=a(x)^2dx^2$ with smooth positive $a$, compute its connection symbol and verify that arc-length coordinates remove it locally.

<details><summary>Hint 1</summary>
The one-dimensional coefficient formula contains just the derivative of the metric coefficient.
</details>
<details><summary>Hint 2</summary>
Set $s(x)=\int_{x_0}^x a(u)du$ and use its positive derivative.
</details>
<details><summary>Full solution</summary>
The symbol is $a'/a$. The coordinate change has nonzero derivative and is locally invertible. Since $ds=a(x)dx$, the metric becomes $ds^2$, with constant coefficient and zero connection symbol. Equivalently the original equation $x''+(a'/a)(x')^2=0$ makes the second derivative of $s(x(t))$ zero. This is a coordinate simplification of the same geometry, not evidence that connection symbols are tensor coefficients.
</details>

## Sources and provenance

New L4 first-look development using this book's tangent, bracket, partition and ODE constructions, with sphere and polar examples continuing [Differential Geometry: Curves and Surfaces](../differential-geometry-curves-surfaces/first-fundamental-form.md). Comparison references are Lee, *Introduction to Riemannian Manifolds*, metric connections and geodesics chapters; do Carmo, *Riemannian Geometry*, the Levi–Civita connection and exponential map sections; and Tu, *An Introduction to Manifolds*, Riemannian metrics. The full Koszul existence and uniqueness argument is supplied above. No global minimization, Hopf–Rinow, curvature comparison or independent-review result is claimed.

## Summary

A partition of unity constructs a Riemannian metric without orientability. The Koszul formula proves existence and uniqueness of its torsion-free metric connection. Parallel transport preserves inner products, and geodesics have constant speed with locally unique smoothly dependent solutions. The point exponential is a local diffeomorphism at zero. Global completeness, injectivity and minimizing behavior require separate arguments, as the sphere and punctured-plane examples make explicit.
