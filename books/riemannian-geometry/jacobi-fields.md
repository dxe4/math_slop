
# Jacobi Fields {#section-1-jacobi-fields}

Vary the initial data of a geodesic and nearby trajectories move apart or focus. Their first-order separation is a Jacobi field. Its equation contains curvature, making it the bridge between the connection's local tensor and the exponential map's behavior. A zero of such a field can detect a singular exponential differential, but it cannot by itself classify every competing global route.

This L4 chapter assumes [Geodesics and the Exponential Map](geodesics-exponential-map.md) and [Curvature Tensors](curvature-tensors.md), with their explicit sign convention. Manifolds and metrics are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary. Unless stated otherwise the reference geodesic is unit speed on an interval. We prove the Jacobi equation, realization by initial-data variations, the conjugate-point criterion and second variation, including the interior-conjugate-point obstruction to minimizing. The analytic inputs are smooth ODE dependence, linear ODE uniqueness, compact-interval integration and elementary one-dimensional smoothing described below. Full Morse index theory and curvature comparison are later subjects.

<a id="section-5-1-differentiate-a-geodesic-variation"></a>
## 1. Differentiate a geodesic variation {#section-7-1-differentiate-a-geodesic-variation}

Let $\alpha(s,t)$ be a smooth family whose curves at fixed $s$ are affinely parametrized geodesics. Write $T=\partial_t\alpha$ and $V=\partial_s\alpha$. At the reference curve $s=0$, set $J=V|_0$. Torsion freedom gives $\nabla_sT=\nabla_tV$. The curvature commutator along the variation gives

$$\nabla_s\nabla_tT-\nabla_t\nabla_sT=R(V,T)T.$$

Both statements can be verified from the connection coefficient formulas on the parameter rectangle; they hold even if the variation fails to be an immersion. The parameter vector fields commute, so there is no additional parameter-bracket term. The left first term is zero because each varied curve is geodesic. Hence

$$\frac{D^2J}{dt^2}+R(J,T)T=0.$$

This is our Jacobi equation. Its sign follows from the curvature order fixed in the previous chapter. In particular positive sphere curvature will give an oscillatory equation for normal fields, not a hyperbolic-growth equation.

A Jacobi field is any smooth field along a geodesic satisfying this equation. It is not required to be a tangent field to a surface embedded in the manifold, and it need not be the velocity of a single neighboring geodesic. It represents the derivative of a family, a first-order object with its own initial data.

<a id="section-19-2-initial-data-and-realization"></a>
## 2. Initial data and realization {#section-21-2-initial-data-and-realization}

Choose a parallel orthonormal frame along the reference geodesic. If $J=\sum_i j_iE_i$, the equation is the linear system

$$j''+A(t)j=0,\qquad A_{ij}=g(R(E_j,T)T,E_i).$$

The matrix is symmetric by the curvature symmetries. It is smooth, so the standard linear ODE theorem gives a unique solution for any initial pair $J(t_0),DJ/dt(t_0)$ on the entire geodesic interval. One obtains the whole interval by solving on compact subintervals and gluing by uniqueness. The vector space of Jacobi fields has dimension twice the manifold dimension.

Conversely every such field is realized by a geodesic variation on each compact parameter subinterval. To see this at initial time zero, choose a base-point curve $p(s)$ with velocity $J(0)$. Parallel transport the initial geodesic velocity along that curve, and add $s$ times the parallel transport of $DJ/dt(0)$. This gives a smooth initial-velocity family whose covariant derivative at zero is the prescribed second datum. Solve the geodesic ODE with those varying initial data. Smooth dependence supplies a common small variation parameter on a compact reference time segment. The resulting separation field has exactly the two prescribed data, so Jacobi uniqueness identifies it with $J$.

This is a compact-segment realization theorem. A geodesic defined for all time need not admit one common nonzero variation parameter working for every time on the entire real line without additional uniform control. The proof claims only the local-in-variation statement it actually constructs.

The tangent component is especially simple. Since the reference velocity is parallel and has norm one,

$$\frac{d^2}{dt^2}g(J,T)=-g(R(J,T)T,T)=0.$$

Thus it is affine in time. The tangent fields $(a+bt)T$ are Jacobi fields, corresponding to time shifts and speed changes. If both initial data are perpendicular to $T$, the field stays perpendicular. These normal fields have dimension twice one less than the manifold dimension and carry the focusing information.

<a id="section-37-3-the-exponential-differential-and-conjugate-points"></a>
## 3. The exponential differential and conjugate points {#section-39-3-the-exponential-differential-and-conjugate-points}

Fix a unit initial vector $u$ at $p$ and let $\gamma(t)=\exp_p(tu)$. For any $w\in T_pM$, vary the initial velocity to $u+sw$. Differentiating the exponential expression gives the Jacobi field with $J_w(0)=0$ and $DJ_w/dt(0)=w$:

$$J_w(t)=d\exp_p|_{tu}(tw).$$

This formula is valid for the available time interval; it follows from the actual variation rather than from a dimension count. In particular at positive $r$,

$$d\exp_p|_{ru}(w)=J_w(r)/r.$$

A positive parameter $r$ is conjugate to the initial point along this geodesic when a nonzero Jacobi field vanishes at both zero and $r$. Such a field has nonzero initial derivative, because zero position and derivative would force the entire solution to vanish. The formula therefore proves that conjugacy is equivalent to a nonzero kernel of the exponential differential at $ru$. Domain and target have equal dimensions, so this is also failure of invertibility there.

Any field vanishing at the two endpoints is normal: its affine tangent component has two zeros and is identically zero. Consequently conjugate multiplicity is at most one less than the manifold dimension. The statement is attached to the specified geodesic and parameter. A point reached along another geodesic can behave differently, and the existence of two distinct preimages of the exponential does not by itself give a kernel at either preimage.

<a id="section-51-4-constant-curvature-solutions"></a>
## 4. Constant-curvature solutions {#section-53-4-constant-curvature-solutions}

If sectional curvature is the constant $\kappa$, then for a normal vector along a unit geodesic the curvature term is $\kappa J$. Here we use the constant-curvature operator established explicitly for the model spaces in the previous chapter; the same operator formula is the hypothesis for this general model calculation. In a parallel frame each normal coefficient solves $j''+\kappa j=0$.

Define

$$s_\kappa(t)=
\begin{cases}
\sin(\sqrt\kappa t)/\sqrt\kappa,&\kappa>0,\\
t,&\kappa=0,\\
\sinh(\sqrt{-\kappa}t)/\sqrt{-\kappa},&\kappa<0.
\end{cases}$$

The solution with zero initial value and normal initial derivative $w$ is $s_\kappa(t)$ times the parallel transport of $w$. Differentiating verifies both the equation and initial data; uniqueness gives completeness of this solution description. Positive curvature produces the first positive zero at $\pi/\sqrt\kappa$. Zero and negative curvature have no positive zero in this particular initial-value family. The tangent coefficients remain affine rather than using the normal formula.

For nonzero initial value one adds the derivative $s_\kappa'(t)$ times its parallel transport. These explicit solutions give exact model comparisons later, but no variable-curvature inequality has yet been proved by writing them down.

<a id="section-68-5-second-variation-and-the-index-form"></a>
## 5. Second variation and the index form {#section-70-5-second-variation-and-the-index-form}

Let the unit reference geodesic have parameter interval $[0,L]$. Consider a smooth fixed-endpoint variation and its field $V$. The first-variation endpoint term is zero for every variation parameter. Differentiate its remaining integral at the reference geodesic, where covariant acceleration vanishes. The curvature commutator gives

$$E''(0)=-\int_0^L g\bigl(V,D_t^2V+R(V,T)T\bigr)dt.$$

Integration by parts removes the second derivative, with zero endpoint values, giving

$$E''(0)=I(V,V),\qquad
I(V,W)=\int_0^L\bigl(g(D_tV,D_tW)-g(R(V,T)T,W)\bigr)dt.$$

This derives the second variation rather than assigning it from analogy with a scalar equation. The curvature endomorphism is self-adjoint by pair exchange and antisymmetry, so the index form is symmetric. Every smooth endpoint-zero field is realized by a fixed-endpoint variation: use the point exponential of a small multiple of the field along the compact reference curve. Smoothness and compactness give one common sufficiently small multiplier, and zero endpoint vectors keep the endpoints fixed.

If the geodesic minimizes energy under such variations, the index form must be nonnegative. A negative value supplies a shorter-energy variation by the ordinary second-derivative criterion, since the first variation is zero. It also supplies a strictly shorter curve: Cauchy–Schwarz bounds squared length by twice the parameter-interval length times energy, and the reference unit-speed curve attains equality. Thus negative index excludes length minimization as well.

For a Jacobi field, integration by parts in the bilinear form yields

$$I(J,W)=\bigl[g(D_tJ,W)\bigr]_0^L,$$

because the interior Jacobi expression is zero. If the test field has zero endpoint values, this is zero. A Jacobi field vanishing at the endpoints therefore supplies a zero direction of the index form, which need not already be a negative direction. This is why an endpoint conjugate point requires care.

<a id="section-89-6-an-interior-conjugate-point-prevents-minimizing"></a>
## 6. An interior conjugate point prevents minimizing {#section-91-6-an-interior-conjugate-point-prevents-minimizing}

Suppose a nonzero Jacobi field vanishes at zero and at some $a$ strictly between zero and $L$. Define a continuous piecewise-smooth field $V$ to equal that field up to $a$ and zero afterwards. Its index with itself is zero, by the preceding integration identity on the first segment. The derivative at $a$ is nonzero, since otherwise Jacobi uniqueness would force the field to vanish everywhere.

Choose a smooth endpoint-zero field $W$ with $W(a)=-D_tJ(a)$. Integration by parts on the first segment gives

$$I(V,W)=-\|D_tJ(a)\|^2<0.$$

Hence $I(V+\varepsilon W,V+\varepsilon W)$ is negative for sufficiently small positive $\varepsilon$: its linear term is twice that negative cross term and its quadratic term is bounded. The field has one corner, so we explain why smooth variations are still available rather than applying the smooth formula without justification.

In a parallel frame its components are continuous and piecewise smooth with bounded first derivative on the compact interval. Smooth those components in a small neighborhood of the interior corner by convolution with a standard smooth averaging kernel, leaving them unchanged near the two endpoints. The functions and first derivatives converge in the square-integral norm: away from the single corner they converge pointwise, their derivatives stay uniformly bounded, and the shrinking corner neighborhood has vanishing length. Integration by parts on the two pieces shows that convolving the first derivative gives the derivative of the convolution, since continuity removes a jump in the function itself. A cutoff supported away from the endpoints preserves their zero values and the same convergence.

The curvature coefficient matrix is bounded on this compact segment, so this convergence makes the index forms converge. A sufficiently close smooth approximation therefore still has negative index. It is realized by a fixed-endpoint smooth variation and excludes minimizing by the second-variation argument. This proves the interior-conjugate-point obstruction. It does not say that a geodesic ending exactly at its first conjugate point is nonminimizing; the sphere semicircle is the counterexample to that stronger claim.

<a id="section-103-7-three-worked-examples"></a>
## 7. Three worked examples {#section-105-7-three-worked-examples}

<a id="section-105-worked-example-5-1-flat-fields-and-a-global-topology-wa"></a>
### Worked example 5.1 — Flat fields and a global topology warning {#section-107-worked-example-5-1-flat-fields-and-a-global-topology-wa}

In Euclidean space parallel frames are constant and curvature is zero. Every Jacobi field is $J(t)=a+tb$. A field with zero values at two distinct times must be zero, so there are no conjugate points. The exponential is globally injective there, but that last feature is stronger than the Jacobi calculation alone.

On the unit circle the curvature operator also vanishes, because its tangent spaces are one-dimensional. Jacobi fields along a unit geodesic are affine multiples of its parallel tangent and again have no pair of distinct zeros unless identically zero. Nevertheless the circle exponential is periodic and not globally injective. A full circuit is not a shortest path between its coincident endpoints. Thus no-conjugate behavior alone cannot supply a global injectivity or global minimizing theorem without further topology and hypotheses.

<a id="section-111-worked-example-5-2-sphere-focusing-at-an-endpoint-and-i"></a>
### Worked example 5.2 — Sphere focusing at an endpoint and in the interior {#section-113-worked-example-5-2-sphere-focusing-at-an-endpoint-and-i}

For the unit sphere of dimension at least two, normal zero-initial-value Jacobi fields are $\sin t$ times parallel normal vectors. At time $\pi$ they vanish again, with multiplicity $n-1$. This agrees with the exponential sending all length-$\pi$ initial vectors to the antipode. The semicircle still minimizes length, as proved in the previous chapter, despite having a conjugate endpoint.

A segment continued beyond that time has the conjugate point in its interior. The index argument then proves it is not minimizing. For example on a segment of length greater than $\pi$, one can also choose a parallel normal direction times a sine bump spread over the whole interval; its derivative-energy and curvature terms give a negative index when the interval is sufficiently long in exactly the corresponding way. The general piecewise-Jacobi argument does not need a special trigonometric guess. In dimension one there are no normal directions, so the unit circle has no such conjugate point, consistent with the first example.

<a id="section-117-worked-example-5-3-hyperbolic-separation-without-zeros"></a>
### Worked example 5.3 — Hyperbolic separation without zeros {#section-119-worked-example-5-3-hyperbolic-separation-without-zeros}

In the upper half-plane model of curvature minus one, a normal Jacobi field with zero initial value and derivative of norm one has norm $\sinh t$ for positive time. It never vanishes again and its magnitude grows faster than the flat value $t$. Its associated exponential differential in that direction has factor $\sinh t/t$, using the exact relation in section 3.

This proves the stated separation and absence of normal conjugate zeros along any reference geodesic on its available interval. It does not prove global geodesic completeness or global injectivity of the exponential by itself. Those require control of existence intervals and topology, addressed in later global results. The model formula is exact, while a sampled numerical separation would only illustrate it.

<a id="section-123-exercises"></a>
## Exercises {#section-125-exercises}

### Exercise 5.1 {#riemannian-jacobi-ex-1}

Show that $(a+bt)T$ is a Jacobi field along every unit-speed geodesic.

<details><summary>Hint 1</summary>
The velocity is parallel.
</details>
<details><summary>Hint 2</summary>
Curvature vanishes when its first two inputs are dependent.
</details>
<details><summary>Full solution</summary>
Its second covariant derivative is zero because the scalar coefficient is affine and the tangent is parallel. The curvature term is the same affine scalar times $R(T,T)T$, which is zero by antisymmetry. Hence it satisfies the equation. These are the tangent directions of the Jacobi solution space, corresponding to changes of time origin and speed rather than normal focusing.
</details>

### Exercise 5.2 {#riemannian-jacobi-ex-2}

Prove that a Jacobi field whose value and covariant derivative vanish at one time is identically zero.

<details><summary>Hint 1</summary>
Use a parallel frame to turn the equation into a linear ordinary system.
</details>
<details><summary>Hint 2</summary>
The zero field has those same two initial data.
</details>
<details><summary>Full solution</summary>
The component equation is a smooth linear second-order system, equivalently a first-order system for the component and its derivative. ODE uniqueness identifies the prescribed solution with zero on a neighborhood and then throughout the connected interval by continuation. This proves, in particular, that a nonzero conjugate field has nonzero derivative at each endpoint where its value vanishes.
</details>

### Exercise 5.3 {#riemannian-jacobi-ex-3}

For constant curvature four, find the first positive conjugate time and the normal zero-initial-value solution with prescribed derivative.

<details><summary>Hint 1</summary>
Use the model function with square root of curvature equal to two.
</details>
<details><summary>Hint 2</summary>
Normalize its derivative at zero to one.
</details>
<details><summary>Full solution</summary>
The scalar factor is $\sin(2t)/2$. It has initial value zero and derivative one. Its first positive zero is $\pi/2$. Multiplying it by the parallel transport of the prescribed normal derivative gives the solution. For a model of dimension at least two the corresponding conjugate multiplicity is the number of independent normal directions, namely one less than that dimension.
</details>

### Exercise 5.4 {#riemannian-jacobi-ex-4}

Why is a Jacobi field vanishing at two distinct times perpendicular to the geodesic velocity everywhere between them?

<details><summary>Hint 1</summary>
Its tangent component is affine.
</details>
<details><summary>Hint 2</summary>
An affine scalar function with two distinct zeros is zero.
</details>
<details><summary>Full solution</summary>
Metric compatibility and curvature skew-adjointness show that the scalar pairing with the unit velocity has zero second derivative. The two zero field values make that affine scalar zero at the two endpoints and therefore identically zero. Thus the field is normal throughout. This is why conjugate multiplicity is bounded by the normal initial-derivative dimension rather than the full tangent dimension.
</details>

### Exercise 5.5 {#riemannian-jacobi-ex-5}

Relate a kernel vector of $d\exp_p$ at $ru$ with $r>0$ to a Jacobi field with zero values at times zero and $r$.

<details><summary>Hint 1</summary>
Use the initial derivative of that vector and the formula containing the factor $t$.
</details>
<details><summary>Hint 2</summary>
The factor $r$ is nonzero and does not change whether the final value vanishes.
</details>
<details><summary>Full solution</summary>
For a tangent vector $w$ take the Jacobi solution with initial value zero and derivative $w$. Its endpoint value is $r\,d\exp_p|_{ru}(w)$. Thus a nonzero kernel vector gives a nonzero Jacobi field vanishing at both endpoints. Conversely a nonzero such field has a nonzero initial derivative and the same formula puts it in the differential kernel. This proves both directions with the scaling factor explicit.
</details>

### Exercise 5.6 {#riemannian-jacobi-ex-6}

For a unit sphere normal Jacobi field $J(t)=\sin t\,E(t)$ with parallel unit $E$, compute its index on the interval from zero to $\pi$.

<details><summary>Hint 1</summary>
Its derivative norm is the absolute cosine.
</details>
<details><summary>Hint 2</summary>
The curvature term is the squared sine.
</details>
<details><summary>Full solution</summary>
The index is the integral of $\cos^2t-\sin^2t=\cos2t$ from zero to $\pi$, giving zero. This agrees with the Jacobi integration identity and the zero endpoint values. A zero index direction at the conjugate endpoint does not supply the negative direction used for an interior conjugate point. The minimizing semicircle is therefore consistent with this calculation.
</details>

### Exercise 5.7 {#riemannian-jacobi-ex-7}

In curvature minus one, show that a normal Jacobi field with zero initial value and nonzero derivative has no positive zero.

<details><summary>Hint 1</summary>
The scalar solution is hyperbolic sine.
</details>
<details><summary>Hint 2</summary>
Parallel transport preserves the nonzero derivative's norm.
</details>
<details><summary>Full solution</summary>
The field is $\sinh t$ times that transported derivative. The scalar factor is strictly positive for positive time, and the transported vector never vanishes because transport is an isomorphism. Their product therefore cannot vanish. This is a statement on the available reference interval. It does not extend the geodesic's interval or establish a global inverse for the exponential.
</details>

### Exercise 5.8 {#riemannian-jacobi-ex-8}

Explain why a nontrivial periodic exponential map need not have any singular differential, using the unit circle.

<details><summary>Hint 1</summary>
Different real angles can reach the same point while each has nonzero angular derivative.
</details>
<details><summary>Hint 2</summary>
The circle has no normal Jacobi directions.
</details>
<details><summary>Full solution</summary>
The circle exponential sends a real angle to its unit-circle point and repeats every full turn. Its derivative has norm one everywhere, so it is a local diffeomorphism at every angle. The one-dimensional Jacobi equation has only affine tangent solutions, with no nonzero solution vanishing at two distinct times. Thus noninjectivity is global periodicity, not a differential singularity or a conjugate point.
</details>

### Exercise 5.9 {#riemannian-jacobi-ex-9}

Why does negative second energy variation imply a strictly shorter nearby curve in the fixed-interval unit-speed setting?

<details><summary>Hint 1</summary>
The reference energy is half the interval length.
</details>
<details><summary>Hint 2</summary>
Use length squared bounded by twice interval length times energy for the varied curve.
</details>
<details><summary>Full solution</summary>
The reference has energy $L/2$ and length $L$. Zero first variation and negative second derivative make nearby nonzero small variation parameters have energy strictly below $L/2$. For each such curve Cauchy–Schwarz gives squared length at most $2L$ times that smaller energy, hence strictly below $L^2$. Its length is therefore smaller. The comparison uses the same parameter interval and endpoints throughout.
</details>

### Exercise 5.10 {#riemannian-jacobi-ex-10}

In the interior-conjugate construction, why can the field equal to a Jacobi field before the conjugate time and zero afterwards be smoothed without losing the negative-index conclusion?

<details><summary>Hint 1</summary>
It is continuous at the join because the Jacobi value there is zero.
</details>
<details><summary>Hint 2</summary>
The index depends continuously on the field and its first derivative in the square-integral norm on a compact segment.
</details>
<details><summary>Full solution</summary>
Continuity removes any function jump; only its first derivative has a finite corner jump. In a parallel frame, smoothing in a shrinking interior neighborhood gives convergence of both components and first derivatives in the square-integral norm, while keeping endpoint values zero. Curvature coefficients are bounded on the compact segment, so both terms of the index form converge. After adding the small smooth test field, the index is strictly negative, an open inequality preserved by a sufficiently close smooth approximation. That smooth field is realized by an allowed variation.
</details>

<a id="section-265-sources-and-provenance"></a>
## Sources and provenance {#section-267-sources-and-provenance}

New L4 development following the proved curvature and exponential conventions in this book, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, Jacobi fields and second variation; and do Carmo, *Riemannian Geometry*, conjugate points and the index form. The interior-conjugate argument includes its smoothing justification rather than treating a corner field as already smooth. The scope is not the full Morse index theorem or a variable-curvature comparison theorem.

<a id="section-269-summary"></a>
## Summary {#section-271-summary}

Jacobi fields are exactly the initial-data derivatives of local geodesic families on compact time segments. Their equation is linear, and their zero-initial-value solutions encode the exponential differential. Conjugate endpoints correspond to a kernel there, while an interior conjugate point gives a genuinely negative smooth index direction and prevents minimizing. Constant-curvature models exhibit oscillation or growth; the circle shows that absence of conjugate points alone cannot remove global periodicity.
