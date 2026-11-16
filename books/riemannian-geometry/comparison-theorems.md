
# Comparison Theorems {#section-1-comparison-theorems}

Curvature bounds constrain how geodesics separate, how distance spheres bend and how their volume grows. A comparison theorem makes the direction and range of each implication explicit. The relevant hypotheses differ: an upper sectional bound controls individual Jacobi-field growth from below, a lower sectional bound controls a normal-ball Hessian from above, and a positive Ricci bound controls the length of a minimizing segment.

This L4–L5 chapter assumes the [curvature convention](curvature-tensors.md), [Gauss lemma and local minimization](geodesics-exponential-map.md), and [Jacobi/index theory](jacobi-fields.md) proved earlier. Metrics and manifolds are smooth, real, positive definite, finite-dimensional, Hausdorff, second-countable and without boundary. The reference geodesics are unit speed. We prove constant-model comparison in the stated ranges, including normal-ball volume and a Ricci segment bound. Global Bishop–Gromov, Toponogov and a cut-locus theorem are further results, not names attached to these local proofs. Completeness is not assumed unless it is explicitly mentioned as a later issue.

<a id="section-5-1-model-functions-and-the-first-zero-restriction"></a>
## 1. Model functions and the first-zero restriction {#section-7-1-model-functions-and-the-first-zero-restriction}

For a real constant $\kappa$ let $s_\kappa$ solve $s''+\kappa s=0$, with initial value zero and derivative one. Explicitly it is sine divided by the square root for positive curvature, the identity function for zero, and hyperbolic sine divided by the square root of the negative curvature for negative curvature. Let $c_\kappa=s_\kappa'$ and put $h_\kappa=c_\kappa/s_\kappa$ wherever the denominator is positive.

For positive curvature this range is $0<t<\pi/\sqrt\kappa$. For nonpositive curvature it is all positive times. The logarithmic derivative satisfies

$$h_\kappa'+h_\kappa^2+\kappa=0.$$

Near zero, $s_\kappa(t)/t\to1$. The denominator restriction is essential: carrying a comparison past the first model zero would change signs and invalidate the Wronskian argument below. Model functions are not a substitute for checking that the reference geodesic itself exists throughout the comparison interval.

<a id="section-15-2-an-upper-curvature-bound-gives-lower-separation"></a>
## 2. An upper curvature bound gives lower separation {#section-17-2-an-upper-curvature-bound-gives-lower-separation}

**Theorem 6.1 (Constant-model Jacobi comparison).** Suppose every plane containing the velocity of a unit geodesic has sectional curvature at most $\kappa$. If a normal Jacobi field has zero initial value and initial derivative $w\ne0$, then

$$\|J(t)\|\ge s_\kappa(t)\|w\|$$

throughout the available positive interval before the model's first zero. There is no conjugate time in that interval.

*Proof.* Where the field is nonzero put $f=\|J\|$. Differentiating its squared norm and using the Jacobi equation gives

$$f''=\frac{\|D_tJ\|^2-(f')^2-g(R(J,T)T,J)}{f}.$$

Cauchy–Schwarz makes the first two numerator terms nonnegative. The sectional bound makes the negative curvature term at least $-\kappa f^2$, because the field is perpendicular to unit velocity. Hence $f''+\kappa f\ge0$.

Define $W=f's_\kappa-fs_\kappa'$. On the model-positive interval its derivative is $(f''+\kappa f)s_\kappa\ge0$. The initial-data equation gives $J(t)=tw+O(t^3)$ in a parallel frame: its second derivative is zero at zero and its third derivative is bounded nearby. Thus $f(t)/t\to\|w\|$ and $f'(t)\to\|w\|$, so $W\to0$ at zero. It follows that $(f/s_\kappa)'\ge0$, giving the displayed lower bound while the field remains nonzero.

It is nonzero near zero. If it had a first zero before the model zero, the same lower bound up to that time and continuity would contradict that zero. Thus it stays nonzero throughout the asserted interval. Every conjugate field would have nonzero initial derivative and be normal, so the conjugate-point conclusion follows. ∎

The same proof gives $f'/f\ge h_\kappa$ along such a field. In nonpositive upper curvature there is no model zero, so the conclusion excludes conjugate points on every available positive portion of the geodesic. It does not extend a finite geodesic existence interval, and it does not make an exponential globally injective. The flat circle remains an explicit warning about topology.

<a id="section-35-3-hessian-of-distance-in-a-normal-ball"></a>
## 3. Hessian of distance in a normal ball {#section-37-3-hessian-of-distance-in-a-normal-ball}

Fix a point and a sufficiently small normal ball whose closure lies in a larger exponential coordinate domain, as in the local minimization proof. Its distance function $r$ from the center is smooth away from that center and has gradient the unit radial velocity. Indeed Gauss' lemma identifies its differential with pairing against that velocity. Define the Hessian by

$$\operatorname{Hess}r(X,Y)=g(\nabla_X\operatorname{grad}r,Y).$$

It is symmetric: subtracting its two inputs gives $X(Yr)-Y(Xr)-[X,Y]r=0$ by zero torsion. Its radial component is zero, since the radial velocity is parallel and has unit norm.

Let $W$ be perpendicular to the radial direction at radius $a$. A variation through radial geodesics supplies the unique Jacobi field with initial value zero and final value $W$. Exponential invertibility gives its existence and uniqueness. Using a variation of the unit initial direction at fixed final radius, the commuting-variation derivative identity yields

$$\operatorname{Hess}r(W,W)=g(D_tJ(a),J(a))=I(J,J).$$

The second equality is the Jacobi integration identity. The first is intrinsic: varying the endpoint differentiates the radial velocity, which is exactly the distance gradient. The field is normal throughout by its endpoint condition.

The Jacobi field minimizes the index form among all fields with the same endpoints. Write another field as $J+Z$, where $Z$ vanishes at both ends. The mixed index term is zero by the Jacobi identity, and $I(Z,Z)\ge0$ because the radial geodesic minimizes energy in this normal ball, with the full manifold-distance comparison already proved. Thus $I(J+Z,J+Z)\ge I(J,J)$. This proves the index lemma in precisely the normal-ball setting used below, without assuming a global no-conjugate index theorem.

<a id="section-51-4-the-two-hessian-inequalities"></a>
## 4. The two Hessian inequalities {#section-53-4-the-two-hessian-inequalities}

**Theorem 6.2 (Normal-ball Hessian comparison).** At positive radius $a$ in the normal ball, and before the model first zero when relevant, the following hold for tangent vectors $W$ perpendicular to the radial direction:

$$K\le\kappa\ \Longrightarrow\
\operatorname{Hess}r(W,W)\ge h_\kappa(a)\|W\|^2,$$

$$K\ge\kappa\ \Longrightarrow\
\operatorname{Hess}r(W,W)\le h_\kappa(a)\|W\|^2.$$

Only radial sectional planes along the joining geodesic need satisfy the bound.

*Proof of the first implication.* Apply the preceding Jacobi norm comparison to the field with final value $W$. Its logarithmic derivative satisfies $f'/f\ge h_\kappa$. The Hessian value is $f(a)f'(a)$, so it is at least the model logarithmic derivative times the final squared norm. The zero vector case is immediate.

*Proof of the second implication.* Parallel transport $W$ backwards and multiply it by $s_\kappa(t)/s_\kappa(a)$ to obtain a comparison field $V$ with the same endpoints as $J$. The index lemma bounds the true Hessian above by $I(V,V)$. The lower sectional bound makes

$$I(V,V)\le\|W\|^2\int_0^a
\left(\left(\frac{s_\kappa'}{s_\kappa(a)}\right)^2
-\kappa\left(\frac{s_\kappa}{s_\kappa(a)}\right)^2\right)dt.$$

Integrate the derivative of $s_\kappa s_\kappa'$ and use its zero initial value. The result is $h_\kappa(a)\|W\|^2$, as required. ∎

The radial zero component extends these statements to arbitrary vectors by projecting off the radial part. Positive curvature does not force the distance Hessian to be positive at every radius. The model cotangent becomes negative beyond a hemisphere while remaining inside the sphere's normal domain. The inequalities preserve that sign instead of replacing the model by an informal convexity slogan.

<a id="section-75-5-volume-comparison-within-a-normal-ball"></a>
## 5. Volume comparison within a normal ball {#section-77-5-volume-comparison-within-a-normal-ball}

Assume dimension at least two. At a unit initial direction choose an orthonormal basis perpendicular to it. Vary those directions to obtain radial Jacobi fields $J_i$ with zero initial value and those initial derivatives. In a parallel frame collect their columns in a matrix $A(t)$. Before the normal-domain boundary it is invertible, and $A(t)=tI+O(t^3)$ near zero.

Gauss' lemma makes the radial direction orthogonal to all angular directions. The metric-volume density in these polar coordinates is therefore

$$a(t,u)\,dt\,d\sigma(u),\qquad a=\sqrt{\det(g(J_i,J_j))}.$$

Choose the parallel normal-frame orientation consistently near zero. The positive determinant has no zero in this domain, so this square root equals $\det A$. The usual derivative-of-determinant identity gives

$$\frac{\partial_ta}{a}=\operatorname{tr}(A'A^{-1})
=\operatorname{tr}\operatorname{Hess}r.$$

The last equality follows from the endpoint Jacobi description of the Hessian as the endomorphism taking $J_i$ to its covariant derivative. Its radial entry is zero. Thus the trace comparison from the preceding theorem gives, under a lower radial sectional bound,

$$\partial_t\log a\le(n-1)h_\kappa(t).$$

Integrating this difference from a small positive radius and taking its limit at zero, where both $a/t^{n-1}$ and $s_\kappa/t$ tend to one, yields $a(t,u)\le s_\kappa(t)^{n-1}$. An upper sectional bound yields the reverse inequality by the other Hessian comparison.

Integration over the initial unit sphere proves the corresponding ball-volume estimate

$$\operatorname{Vol}(B(p,R))\le
\omega_{n-1}\int_0^R s_\kappa(t)^{n-1}dt$$

for a lower bound, with reversal for an upper bound. Here $R$ lies within the specified normal ball and before the positive model zero; $\omega_{n-1}$ is the ordinary area of the unit tangent sphere. The smaller exponential ball is the actual metric ball by the boundary-exit estimate. Polar coordinates omit only the center, a measure-zero point, so ordinary coordinate integration justifies the formula.

This is a normal-ball comparison under sectional bounds. It is not the global Bishop–Gromov theorem under only a Ricci lower bound. That theorem needs further control through cut points and an appropriate trace inequality. Stating the stronger name would conceal hypotheses not supplied by this proof.

<a id="section-103-6-a-positive-ricci-bound-limits-minimizing-length"></a>
## 6. A positive Ricci bound limits minimizing length {#section-105-6-a-positive-ricci-bound-limits-minimizing-length}

**Theorem 6.3 (Ricci minimizing-segment bound).** In dimension $n\ge2$, suppose a unit-speed minimizing geodesic segment has Ricci value at least $(n-1)\kappa$ on its velocity, where $\kappa>0$. Its length is at most $\pi/\sqrt\kappa$.

*Proof.* If its length is $L$, choose a parallel orthonormal normal frame and the endpoint-zero test fields $V_i(t)=\sin(\pi t/L)E_i(t)$. Summing their index forms gives

$$\sum_i I(V_i,V_i)
\le(n-1)\left(\frac{\pi^2}{2L}-\frac{\kappa L}{2}\right).$$

The derivative term uses the integral of cosine squared, while the curvature sum is exactly the Ricci value times sine squared. If $L>\pi/\sqrt\kappa$, the sum is negative, so at least one individual index is negative. The second-variation argument gives a shorter curve with the same endpoints, contradicting minimizing. This proves the bound. ∎

If every pair of points admits a minimizing geodesic and the Ricci hypothesis holds globally, the same bound applies to diameter. Existence of those global minimizing geodesics is an additional premise here. The next chapter's completeness theorem will supply it under its own assumptions. Equality is allowed: a round sphere has minimizing antipodal semicircles at exactly the model length. The proof establishes a strict obstruction above the threshold, not a contradiction at equality.

<a id="section-116-7-three-worked-examples"></a>
## 7. Three worked examples {#section-118-7-three-worked-examples}

<a id="section-118-worked-example-6-4-the-flat-and-hyperbolic-model-factor"></a>
### Worked example 6.4 — The flat and hyperbolic model factors {#section-120-worked-example-6-4-the-flat-and-hyperbolic-model-factor}

At zero model curvature, the separation function is $t$, the Hessian factor is $1/t$ and the normal area factor is $t^{n-1}$. Euclidean radial geodesics attain every equality. With curvature minus one, the factors become hyperbolic sine, hyperbolic cotangent and the corresponding power of hyperbolic sine. The exact Jacobi solutions in the upper-half-plane model attain these formulas on each available normal domain.

For a surface the hyperbolic normal circle length is $2\pi\sinh R$, and integrating gives disk area $2\pi(\cosh R-1)$. The Euclidean formulas are $2\pi R$ and $\pi R^2$. These are normal-disk calculations; extending the formulas to all radii for a particular global model requires proving that its exponential stays injective and defined there. The local comparison alone does not silently supply that global result.

<a id="section-124-worked-example-6-5-a-sphere-hessian-can-be-negative"></a>
### Worked example 6.5 — A sphere Hessian can be negative {#section-126-worked-example-6-5-a-sphere-hessian-can-be-negative}

On the unit sphere, before its antipode the model factor is $\cot r$. At radius $\pi/4$ it is one; at radius $3\pi/4$ it is minus one. Hence distance spheres in the latter region have negative Hessian on their tangent directions for the outward radial gradient. The distance itself still increases along each outward radial geodesic; its radial derivative is one and radial Hessian zero.

The sign change concerns variation of that radial gradient in transverse directions. It does not say the distance becomes negative or decreases along the geodesic. The sphere's normal disk area is $2\pi(1-\cos R)$ in dimension two, agreeing with the density factor $\sin r$. At the antipodal radius this normal-coordinate description ceases to be one-to-one, so the local proof stops where its assumptions say it must.

<a id="section-130-worked-example-6-6-the-segment-threshold-on-a-round-sph"></a>
### Worked example 6.6 — The segment threshold on a round sphere {#section-132-worked-example-6-6-the-segment-threshold-on-a-round-sph}

For a round $n$-sphere of radius $a$, sectional curvature is $1/a^2$ and Ricci on a unit vector is $(n-1)/a^2$. The Ricci theorem therefore bounds every minimizing segment by $\pi a$. A great semicircle realizes that length between antipodes. Continuing it further produces a longer arc whose endpoints admit a shorter route, in agreement with both the index bound and the conjugate-point calculation.

The bound scales with length exactly as curvature does inversely with length squared. Replacing a sphere by a picture twice as large without changing the assigned metric would not change this threshold; physically rescaling the metric by four would double it. The theorem concerns the specified metric, not a rendering's pixel size.

<a id="section-136-exercises"></a>
## Exercises {#section-138-exercises}

### Exercise 6.1 {#riemannian-comparison-ex-1}

Differentiate the model logarithmic derivative and verify its scalar equation.

<details><summary>Hint 1</summary>
Use the quotient rule on $s'/s$.
</details>
<details><summary>Hint 2</summary>
Replace the second derivative with minus curvature times the function.
</details>
<details><summary>Full solution</summary>
The derivative is $s''/s-(s'/s)^2=-\kappa-h^2$, giving $h'+h^2+\kappa=0$. The calculation requires a nonzero denominator, and our comparison range chooses it positive. It cannot be carried through a model zero as an ordinary smooth identity without changing its domain.
</details>

### Exercise 6.2 {#riemannian-comparison-ex-2}

Under sectional curvature at most zero, prove the absence of conjugate points on an available unit geodesic interval starting at zero.

<details><summary>Hint 1</summary>
A conjugate field is normal and has nonzero initial derivative.
</details>
<details><summary>Hint 2</summary>
Use the flat model lower norm bound.
</details>
<details><summary>Full solution</summary>
The comparison theorem gives $\|J(t)\|\ge t\|D_tJ(0)\|$ for every positive available time. Its right side is strictly positive for a nonzero endpoint-vanishing candidate, so no positive endpoint zero exists. This does not guarantee that the geodesic exists at every positive time, and the flat circle shows why absence of conjugate points alone does not make an exponential globally injective.
</details>

### Exercise 6.3 {#riemannian-comparison-ex-3}

What is the Hessian bound for radial sectional curvature at least zero inside a normal ball?

<details><summary>Hint 1</summary>
Use the lower-curvature implication in Theorem 6.2.
</details>
<details><summary>Hint 2</summary>
The flat logarithmic derivative is reciprocal radius.
</details>
<details><summary>Full solution</summary>
On perpendicular vectors the Hessian is at most the squared norm divided by radius. On an arbitrary vector replace it by its perpendicular projection, since the radial Hessian component is zero. This is an upper bound, not a claim that the Hessian is nonnegative. The sphere example at radii beyond a hemisphere satisfies this upper bound while its transverse Hessian is negative.
</details>

### Exercise 6.4 {#riemannian-comparison-ex-4}

Why may the index lemma compare the true endpoint Jacobi field with the model field even though the model field is not generally Jacobi in the original manifold?

<details><summary>Hint 1</summary>
Subtract the endpoint fields and inspect the two endpoints.
</details>
<details><summary>Hint 2</summary>
The mixed index term vanishes for the true Jacobi field.
</details>
<details><summary>Full solution</summary>
Their difference has zero values at both endpoints. The true field's mixed index with that difference is zero by integration of its Jacobi equation. The remaining self-index of the difference is nonnegative because the reference radial segment minimizes energy in the normal domain. Therefore the true index is no larger than the comparison index. The argument only requires correct endpoint data for the competitor, not that it solve the original Jacobi equation.
</details>

### Exercise 6.5 {#riemannian-comparison-ex-5}

For a normal disk in a surface with curvature at least one, state the volume upper bound and its radius restriction.

<details><summary>Hint 1</summary>
The model density is sine and the initial direction circle has length $2\pi$.
</details>
<details><summary>Hint 2</summary>
Remain inside the actual normal disk and before the model zero.
</details>
<details><summary>Full solution</summary>
The area is at most $2\pi\int_0^R\sin t\,dt=2\pi(1-\cos R)$. The radius must lie within the specified exponential normal domain and satisfy $R<\pi$. No estimate for an arbitrary larger metric ball follows directly, because the polar parametrization and injectivity used in the proof can fail. The bound is attained by the unit sphere's corresponding normal disk.
</details>

### Exercise 6.6 {#riemannian-comparison-ex-6}

Assume radial sectional curvature at most minus one. What lower normal-area factor follows, and why does it not prove global completeness?

<details><summary>Hint 1</summary>
Reverse the volume comparison using the upper-curvature Hessian bound.
</details>
<details><summary>Hint 2</summary>
An estimate along existing radial curves does not continue them beyond their maximal interval.
</details>
<details><summary>Full solution</summary>
The normal polar density is at least $\sinh(t)^{n-1}$ in the available normal domain. This follows by integrating the lower trace bound with its Euclidean initial normalization. A manifold can omit points while retaining the same local metric and curvature, causing finite-time escape. Thus growth estimates on the trajectories which exist cannot establish existence for all time or all initial velocities.
</details>

### Exercise 6.7 {#riemannian-comparison-ex-7}

Derive the Ricci length threshold when the bound is $\operatorname{Ric}(T,T)\ge4(n-1)$.

<details><summary>Hint 1</summary>
The positive model curvature constant is four.
</details>
<details><summary>Hint 2</summary>
Take its square root in the denominator.
</details>
<details><summary>Full solution</summary>
Every minimizing unit-speed segment has length at most $\pi/2$. A longer segment would make the sum of the normal sine-field indices negative. At equality the argument gives only a nonpositive upper bound for the sum and no strict contradiction. A round sphere of radius one half realizes the equality case between antipodes, so replacing the conclusion by a strict inequality would be false.
</details>

### Exercise 6.8 {#riemannian-comparison-ex-8}

Why does a Ricci lower bound alone not justify the individual Hessian comparison proved using sectional curvature?

<details><summary>Hint 1</summary>
The model test field selects one radial plane at a time.
</details>
<details><summary>Hint 2</summary>
Ricci sums the sectional contributions rather than bounding each separately.
</details>
<details><summary>Full solution</summary>
The index estimate for one perpendicular vector contains the curvature of that vector's plane with the radial direction. A lower bound on the sum of all such plane values does not imply the same bound on each summand. Therefore the individual test-field inequality cannot use only Ricci as written. The Ricci segment theorem succeeds by summing all the normal test fields, which is exactly where that trace hypothesis applies.
</details>

### Exercise 6.9 {#riemannian-comparison-ex-9}

Explain the normalization at zero in the normal-volume proof and why no arbitrary multiplicative constant remains.

<details><summary>Hint 1</summary>
Each angular Jacobi field has initial derivative one basis vector.
</details>
<details><summary>Hint 2</summary>
The matrix is radius times the identity to first order.
</details>
<details><summary>Full solution</summary>
The angular matrix is $tI+O(t^3)$, so its determinant divided by $t^{n-1}$ tends to one. The model function divided by $t$ also tends to one. Thus the ratio of the true density to the model density tends to one at zero. Integrating the logarithmic derivative inequality from a small radius and taking the limit therefore fixes the multiplicative constant at one, rather than an unspecified initial factor.
</details>

### Exercise 6.10 {#riemannian-comparison-ex-10}

State the additional premise needed to turn the Ricci minimizing-segment bound into a diameter bound, and identify what is not yet proved here.

<details><summary>Hint 1</summary>
Distance is an infimum, and its minimizing curve need not be supplied by definition.
</details>
<details><summary>Hint 2</summary>
Every pair must be joined by a minimizing geodesic to apply the segment estimate directly.
</details>
<details><summary>Full solution</summary>
Assume every pair of points admits a minimizing geodesic and the Ricci bound holds globally. The segment bound then controls each pair's distance and hence the diameter. This chapter has not proved that arbitrary pairs have such geodesics, nor that the resulting bounded manifold is compact. Hopf–Rinow in the next chapter supplies the relevant connection to completeness and compact closed balls. The present theorem remains valid without borrowing those unproved conclusions.
</details>

<a id="section-278-sources-and-provenance"></a>
## Sources and provenance {#section-280-sources-and-provenance}

New L4–L5 development using this book's proved Gauss lemma, index form and curvature conventions, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, Jacobi comparison and curvature comparison, and do Carmo, *Riemannian Geometry*, comparison theorems and the positive Ricci diameter argument. The supplied proof is constant-model radial Jacobi/Hessian comparison, normal-ball volume under sectional bounds, and the Ricci minimizing-segment estimate. Global Bishop–Gromov and Toponogov are not claimed as proved.

<a id="section-282-summary"></a>
## Summary {#section-284-summary}

A scalar Wronskian proves lower Jacobi separation under an upper sectional bound. The index lemma supplies the complementary Hessian upper bound under a lower bound, and tracing then integrating yields normal-ball volume estimates. A separate sum of sine-test indices turns positive Ricci curvature into a maximum length for minimizing segments. Model zeros, normal-domain limits, existing geodesic intervals and global existence premises remain explicit throughout.
