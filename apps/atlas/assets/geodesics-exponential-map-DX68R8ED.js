var e=`---
parent_id: book-riemannian-geometry
chapter_id: geodesics-exponential-map
title: "Geodesics and the Exponential Map"
level: graduate
license: CC BY-SA 4.0
---

# Geodesics and the Exponential Map {#section-1-geodesics-and-the-exponential-map}

A geodesic carries its velocity parallel along itself. The connection therefore determines an initial-value problem, while the metric determines a length problem. Gauss' lemma links the two locally: radial geodesics in a sufficiently small exponential neighborhood are shortest among all competing paths. Global minimization and completeness require further hypotheses.

This L4 chapter assumes [Riemannian Metrics](riemannian-metrics.md) and [Connections and the Levi-Civita Connection](levi-civita-connection.md). Manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary, with a positive Riemannian metric and its Levi–Civita connection. The analytic inputs are smooth parameter-dependent ODE existence and uniqueness, the Euclidean inverse-function theorem, differentiation under an integral on a compact interval and the ordinary Cauchy–Schwarz inequality. We prove Gauss' lemma, local radial minimization and first variation. Hopf–Rinow, conjugate points and a global cut-locus theorem are not assumed.

<a id="section-5-1-initial-data-give-a-unique-maximal-geodesic"></a>
## 1. Initial data give a unique maximal geodesic {#section-7-1-initial-data-give-a-unique-maximal-geodesic}

A smooth curve satisfies the geodesic equation when its covariant acceleration is zero. In coordinates,

$$\\ddot\\gamma^k+\\Gamma^k_{ij}(\\gamma)\\dot\\gamma^i\\dot\\gamma^j=0.$$

Treat position and velocity as one point of the tangent bundle. The right side gives a smooth first-order vector field there, with coordinate equations $\\dot x=v$ and $\\dot v^k=-\\Gamma^k_{ij}v^iv^j$. The connection transformation rule proves that these descriptions agree on overlapping bundle charts, so this is a global geodesic vector field. The local ODE theorem supplies a unique maximal integral curve for every tangent-bundle initial point. Its projection is the unique maximal geodesic with the prescribed initial position and velocity.

Compatibility of the connection makes squared speed constant: its derivative is twice the pairing of velocity with covariant acceleration. Thus a nonconstant geodesic never stops. Changing the parameter affinely preserves the equation, and uniqueness gives

$$\\gamma_{p,sv}(t)=\\gamma_{p,v}(st)$$

where both expressions exist. A general nonlinear parameter change introduces its second derivative times the old velocity, so it need not preserve the affine geodesic equation. The image and the chosen parametrization are distinct pieces of data.

Smooth ODE dependence also gives smooth dependence on both the initial point and velocity. To reach a specified time, cover the compact segment of an already existing trajectory by finitely many local dependence neighborhoods and compose the local solution maps. This justifies finite-time smooth dependence without supposing that every trajectory exists for all time.

<a id="section-21-2-exponential-domains-and-normal-coordinates"></a>
## 2. Exponential domains and normal coordinates {#section-23-2-exponential-domains-and-normal-coordinates}

For each $p$ let $\\mathcal D_p$ consist of velocities whose geodesic exists at time one, and put $\\exp_p(v)=\\gamma_{p,v}(1)$. This domain is open by the smooth flow-domain theorem and contains a neighborhood of zero. It is star-shaped about zero for nonnegative scaling at most one: such a scaled trajectory only uses an earlier portion of the original trajectory. No assertion about existence at arbitrarily large positive or negative times follows from this property.

The scaling identity gives $\\exp_p(tv)=\\gamma_{p,v}(t)$ for sufficiently small $t$. Its derivative at zero is therefore $v$, so $d(\\exp_p)_0$ is the identity under the natural identification of the tangent space of the vector space $T_pM$ with itself. The inverse-function theorem gives an open neighborhood on which the exponential is a diffeomorphism. Restrict to a sufficiently small tangent ball to obtain normal coordinates.

Choose a positive radius $R$ so that the closed tangent ball of radius $2R$ lies in such an exponential diffeomorphism domain. This extra room is useful: the image of the closed smaller ball is compact, and its boundary is exactly the image of its tangent sphere. A curve leaving that smaller exponential neighborhood must cross that boundary. Keeping track of such escaping competitors is necessary for a genuine distance-minimization proof; comparing only curves that happen to stay inside a chart would be incomplete.

<a id="section-29-3-commuting-variation-directions-covariantly"></a>
## 3. Commuting variation directions covariantly {#section-31-3-commuting-variation-directions-covariantly}

Let $\\alpha(s,t)$ be a smooth variation and write $T=\\partial_t\\alpha$, $V=\\partial_s\\alpha$ as fields along it. The torsion-free connection gives

$$\\nabla_sT=\\nabla_tV.$$

This can be checked fully in coordinates. The ordinary mixed second derivatives of the component functions agree, and the connection terms differ by $\\Gamma^k_{ij}(V^iT^j-T^iV^j)$, which is zero because the lower indices are symmetric. The identity is therefore valid even where the variation is not an immersion. It concerns derivatives along a parameter rectangle, not two arbitrarily chosen ambient field extensions.

We will combine it with metric compatibility. For any two variation fields the derivative of their pairing in either parameter equals the sum of their covariant derivative pairings. These formulas follow by expanding the coefficient rule and the metric-compatibility equation, so no surface embedding theorem is needed to use them.

<a id="section-39-4-gauss-lemma-with-its-radial-normalization"></a>
## 4. Gauss' lemma with its radial normalization {#section-41-4-gauss-lemma-with-its-radial-normalization}

**Theorem 3.1 (Gauss' lemma).** For $v$ in the exponential domain and any tangent-space vector $w$ for which the differential is taken,

$$g_{\\exp_p v}\\bigl(d\\exp_p|_v(v),d\\exp_p|_v(w)\\bigr)=g_p(v,w).$$

*Proof.* Take the variation $\\alpha(s,t)=\\exp_p(t(v+sw))$ for small $s$ and $0\\le t\\le1$. Openness of the time-one domain and compact-time dependence make it smooth. Each $t$-curve is a geodesic with constant squared speed $g_p(v+sw,v+sw)$. Hence

$$\\partial_t g(T,V)=g(T,\\nabla_tV)
=g(T,\\nabla_sT)=\\tfrac12\\partial_sg(T,T)=g_p(v+sw,w).$$

The omitted covariant derivative of $T$ in the first equality is zero by the geodesic equation. At time zero the variation is the constant point $p$, so $V=0$. Integrating in $t$ and evaluating at $s=0,t=1$ gives the displayed formula: the two final fields are the differential of the exponential applied to $v$ and to $w$. At $v=0$ the formula is also immediate from the identity differential. ∎

In a normal neighborhood write a nonzero tangent vector as $v=ru$ with $u$ unit. The differential of the exponential preserves the length of the radial unit direction. It also takes any vector perpendicular to that direction to a vector perpendicular to the radial image. Indeed both assertions follow by putting the relevant input into the Gauss pairing formula and dividing by the positive radius. This is radial orthogonality, not a claim that the exponential preserves all tangent lengths in every direction.

<a id="section-54-5-local-minimizing-curves-including-competitors-that-le"></a>
## 5. Local minimizing curves, including competitors that leave {#section-56-5-local-minimizing-curves-including-competitors-that-le}

For a curve in the normal neighborhood, away from its visits to $p$, write its inverse exponential as $r(t)u(t)$ with unit $u(t)$. Differentiation and Gauss' lemma split its squared speed into

$$\\|\\dot\\gamma\\|^2=(r')^2+
\\bigl\\|d\\exp_p|_{ru}(r u')\\bigr\\|^2.$$

The mixed term is zero because differentiating the unit-norm condition gives $g_p(u,u')=0$. Thus speed is at least the absolute radial derivative.

If a curve begins at $p$ and ends at a point of radius $r_q$, possible repeated visits to $p$ do not invalidate the bound. For any $0<\\varepsilon<r_q$, take the last time its radius equals $\\varepsilon$. On the remaining interval the radius is positive and smooth piece by piece. Integrating the bound gives length at least $r_q-\\varepsilon$. Letting the positive number tend to zero proves length at least $r_q$. The radial geodesic has that length exactly.

Now allow arbitrary competing curves on the whole manifold. Use the radius-$R$ neighborhood with the larger normal domain chosen above. A competitor which leaves it first reaches its radius-$R$ boundary, and the same radial estimate on that initial portion gives length at least $R$. Since the endpoint radius is less than $R$, such a competitor cannot be shorter than the radial path. Curves which remain inside already satisfy the desired bound. Consequently

$$d_g(p,\\exp_pv)=\\|v\\|_g\\qquad(\\|v\\|_g<R).$$

Equality also controls uniqueness. In a length-minimizing regular curve inside the normal domain the nonnegative angular contribution must vanish, and the radial coordinate cannot backtrack. Injectivity of the exponential differential then forces the unit direction to remain fixed wherever the radius is positive. Thus the minimizing image is the radial geodesic. Reparametrizations and pauses can represent the same image; the constant-speed geodesic on a specified parameter interval is the unique such minimizing geodesic.

This is a statement about paths from the chosen center. It does not yet say that every two points of the neighborhood have a minimizing path staying inside it. Strongly convex neighborhoods require an additional argument. Nor does it make the exponential globally injective, as the sphere demonstrates.

<a id="section-73-6-first-variation-of-energy"></a>
## 6. First variation of energy {#section-75-6-first-variation-of-energy}

For a smooth curve on the unit interval define energy $E(\\gamma)=\\frac12\\int_0^1\\|\\dot\\gamma\\|^2dt$. For a smooth variation, differentiation under the integral, compatibility and the mixed-derivative identity give

$$\\left.\\frac{dE}{ds}\\right|_0
=\\bigl[g(V,T)\\bigr]_0^1-\\int_0^1g(V,\\nabla_tT)dt.$$

Indeed differentiate the squared speed to obtain twice the pairing of $\\nabla_sT$ with $T$, replace it by $\\nabla_tV$ and integrate the pairing derivative once by parts. This proves the formula, including its endpoint term. Fixed-endpoint variations have zero endpoint field, so every geodesic is stationary for energy.

Conversely suppose a smooth curve is stationary under all such variations. If its covariant acceleration were nonzero at an interior parameter, choose a nonnegative bump in a small coordinate interval there and take the variation field to be that bump times the acceleration. It is realized by a small coordinate variation supported inside the interval. The formula would give the negative integral of the bump times squared acceleration, strictly negative, contradicting stationarity. Hence acceleration vanishes on the interior and by continuity at the endpoints. This proves the stationary-curve characterization with its hypotheses.

Cauchy–Schwarz gives $L(\\gamma)^2\\le2E(\\gamma)$ on the unit interval, with equality for constant speed. Thus the locally shortest constant-speed geodesic is also a local energy minimizer with fixed endpoints. Stationarity alone does not imply global minimality: a full great-circle circuit is stationary with coincident endpoints, while the constant curve has those same endpoints and zero energy.

<a id="section-86-7-three-worked-examples"></a>
## 7. Three worked examples {#section-88-7-three-worked-examples}

<a id="section-88-worked-example-3-2-the-euclidean-exponential-is-global"></a>
### Worked example 3.2 — The Euclidean exponential is global {#section-90-worked-example-3-2-the-euclidean-exponential-is-global}

With constant Euclidean metric coefficients all connection symbols vanish. The geodesic with data $(p,v)$ is $p+tv$, so $\\exp_p(v)=p+v$. Its differential is the identity at every input, and Gauss' lemma is the ordinary inner-product identity. The integral triangle inequality proves that every joining curve has length at least the endpoint displacement, attained by the straight segment. Thus in this particular geometry the local construction extends to a global diffeomorphism and global minimization statement. Those stronger conclusions came from the explicit formula, not from local inversion alone.

<a id="section-92-worked-example-3-3-sphere-distance-and-the-antipodal-bo"></a>
### Worked example 3.3 — Sphere distance and the antipodal boundary {#section-94-worked-example-3-3-sphere-distance-and-the-antipodal-bo}

For the unit sphere the previously derived geodesic formula is

$$\\exp_p(v)=\\cos r\\,p+\\frac{\\sin r}{r}v,\\qquad r=\\|v\\|,$$

with the continuous smooth value at zero. For radii strictly below $\\pi$, the dot product with $p$ recovers the radius through its cosine, and the tangential component recovers the direction. The differential has unit radial factor and angular factor $\\sin r/r$, which is nonzero in that range. Therefore the exponential is a diffeomorphism from the radius-$\\pi$ tangent ball onto the sphere minus its antipode. This follows from injectivity, surjectivity onto that set and local inversion, not just a drawing of longitude arcs.

For an endpoint with radius below $\\pi$, choose an intermediate normal radius between it and $\\pi$ and apply the minimizing proof. Its distance is its central angle. At the antipode a semicircle gives upper bound $\\pi$. Points along that semicircle with radius tending to $\\pi$ have the already established distances; the triangle inequality and the short remaining arcs give the matching lower bound. Hence the antipodal distance is $\\pi$, attained by every great semicircle through the two points. Minimality survives there, but uniqueness does not.

<a id="section-102-worked-example-3-4-a-vertical-hyperbolic-geodesic"></a>
### Worked example 3.4 — A vertical hyperbolic geodesic {#section-104-worked-example-3-4-a-vertical-hyperbolic-geodesic}

In the upper half-plane metric $(dx^2+dy^2)/y^2$, the coefficients along a constant horizontal coordinate give $\\Gamma^y_{yy}=-1/y$. The path $\\gamma(t)=(x_0,y_0e^{ct})$ therefore solves the vertical equation $y''-(y')^2/y=0$, and the horizontal equation is zero as well. Its metric speed is $|c|$, and it exists for every real time.

The initial metric chapter proved that any joining curve has length at least the absolute logarithmic height difference. This vertical path attains that bound, so its finite segments are globally minimizing between their endpoints. Its time-one point is the exponential image of vertical initial velocity $cy_0\\partial_y$. This computes one family of complete geodesics; it is not yet a proof of completeness for every initial direction of this metric.

<a id="section-108-exercises"></a>
## Exercises {#section-110-exercises}

### Exercise 3.1 {#riemannian-geodesics-ex-1}

Show that the only geodesic with zero initial velocity is the constant curve.

<details><summary>Hint 1</summary>
The constant curve solves the same initial-value problem.
</details>
<details><summary>Hint 2</summary>
Use uniqueness of the first-order tangent-bundle ODE.
</details>
<details><summary>Full solution</summary>
The constant position and zero velocity satisfy both coordinate equations for every time. Any geodesic with the same initial data agrees locally by ODE uniqueness and therefore on its full maximal interval by continuation. Alternatively constant squared speed forces its velocity to stay zero. The constant curve extends for all real time, so its maximal interval is the whole line.
</details>

### Exercise 3.2 {#riemannian-geodesics-ex-2}

Derive the covariant acceleration of $\\beta(s)=\\gamma(\\phi(s))$ when $\\gamma$ is a geodesic. Determine which regular parameter changes preserve its equation for a nonconstant curve.

<details><summary>Hint 1</summary>
Differentiate the scalar factor in the new velocity.
</details>
<details><summary>Hint 2</summary>
The old covariant acceleration vanishes.
</details>
<details><summary>Full solution</summary>
The new acceleration is $\\phi''\\dot\\gamma+(\\phi')^2\\nabla_t\\dot\\gamma=\\phi''\\dot\\gamma$. A nonconstant geodesic has nowhere-zero velocity because speed is constant and positive. Hence the new equation vanishes exactly when the parameter function has zero second derivative. A regular such change is affine with nonzero slope. A nonlinear clock can preserve the image but not the affine geodesic equation.
</details>

### Exercise 3.3 {#riemannian-geodesics-ex-3}

Use Gauss' lemma to show that a vector tangent to a tangent-space sphere maps perpendicular to the radial geodesic direction in a normal neighborhood.

<details><summary>Hint 1</summary>
Such a vector is perpendicular to the radius vector at the base point.
</details>
<details><summary>Hint 2</summary>
Insert it as the second argument in the lemma.
</details>
<details><summary>Full solution</summary>
Tangency to the sphere means $g_p(v,w)=0$, obtained by differentiating the squared tangent norm. Gauss' lemma makes the pairing of their two exponential differential images zero. The first image is the radial geodesic velocity at its endpoint. Thus the images are perpendicular. The result controls this radial pairing; it does not assert that lengths or pairings of two arbitrary angular vectors are unchanged.
</details>

### Exercise 3.4 {#riemannian-geodesics-ex-4}

Why is the boundary-exit estimate necessary when proving that a radial normal geodesic realizes the manifold distance?

<details><summary>Hint 1</summary>
The distance infimum includes every joining curve in the manifold.
</details>
<details><summary>Hint 2</summary>
A local coordinate calculation only controls curves while they remain in its domain.
</details>
<details><summary>Full solution</summary>
Without the exit estimate one would only prove minimality among curves staying in the chosen normal neighborhood. A competing path might leave it, and the definition of distance does not exclude such a path. Choosing a smaller normal ball with closure inside a larger normal domain forces every exiting curve to reach the smaller radius boundary first, costing at least that radius. Since the endpoint's radial distance is smaller, no exiting competitor can improve it. This closes the global-infimum gap using a local boundary control.
</details>

### Exercise 3.5 {#riemannian-geodesics-ex-5}

On a parameter interval of length $T>0$, derive the relation between length and energy and identify equality.

<details><summary>Hint 1</summary>
Apply Cauchy–Schwarz to speed and the constant function one.
</details>
<details><summary>Hint 2</summary>
Energy is one half the integral of squared speed.
</details>
<details><summary>Full solution</summary>
The inequality is $L^2\\le2TE$. Equality in the integral Cauchy–Schwarz relation holds exactly when the nonnegative speed is constant almost everywhere; for a smooth curve this means constant everywhere. Thus an affinely parametrized geodesic satisfies the equality. The inequality alone does not imply that a stationary curve is globally shortest, because competing curves may have smaller length and energy.
</details>

### Exercise 3.6 {#riemannian-geodesics-ex-6}

For the sphere exponential identify all images of vectors of length $\\pi$, and compare uniqueness at radii smaller than $\\pi$.

<details><summary>Hint 1</summary>
The sine term vanishes at that radius.
</details>
<details><summary>Hint 2</summary>
Below that radius the angle and tangent direction can be recovered separately.
</details>
<details><summary>Full solution</summary>
All length-$\\pi$ vectors map to the antipode. Their different directions yield different minimizing semicircles with the same endpoints. For smaller positive radii, the cosine fixes the radius uniquely in the interval and the nonzero sine factor recovers the direction. The normal-domain argument then gives a unique minimizing geodesic image from the center. The collision at the antipode demonstrates why local inversion cannot be extrapolated globally.
</details>

### Exercise 3.7 {#riemannian-geodesics-ex-7}

Verify the metric speed of the vertical upper-half-plane path and compute the distance between its values at times $s,t$.

<details><summary>Hint 1</summary>
Divide the ordinary vertical speed by the current height.
</details>
<details><summary>Hint 2</summary>
Use the logarithmic-height lower bound and the path's own length.
</details>
<details><summary>Full solution</summary>
The ordinary derivative has magnitude $|c|y_0e^{ct}$, and division by the same positive height gives constant metric speed $|c|$. The path segment has length $|c||t-s|$. The logarithmic height ratio gives precisely the same lower bound for any joining curve, so this is the distance. When $c=0$ the curve is constant and the formula correctly gives zero.
</details>

### Exercise 3.8 {#riemannian-geodesics-ex-8}

Explain why a geodesic that traverses a full unit great circle is stationary but not globally energy minimizing among curves with its endpoints on the unit time interval.

<details><summary>Hint 1</summary>
Its endpoints are the same point.
</details>
<details><summary>Hint 2</summary>
Compare its positive constant speed with the constant competitor.
</details>
<details><summary>Full solution</summary>
Its zero covariant acceleration makes the first variation vanish for every fixed-endpoint smooth variation. Its length is $2\\pi$ and its constant-speed energy is $2\\pi^2$ on the unit interval. The constant curve has the same endpoints and zero energy, so the geodesic is not a global minimizer. This distinction does not contradict the local normal-neighborhood result, because the full circuit leaves every sufficiently small normal ball around its starting point.
</details>

### Exercise 3.9 {#riemannian-geodesics-ex-9}

Show that the time-one exponential domain at a point is star-shaped for scaling factors in the interval from zero to one. Does this establish geodesic completeness?

<details><summary>Hint 1</summary>
Scale initial velocity by changing time in the original geodesic.
</details>
<details><summary>Hint 2</summary>
The original time interval already contains the segment from zero to one.
</details>
<details><summary>Full solution</summary>
If the original geodesic exists through time one, a scaled velocity with factor between zero and one uses only times between zero and that factor during its own unit time interval. The scaling identity therefore puts every such velocity in the domain. Completeness would require existence for every velocity and every real time, which this truncation argument does not provide. An open star-shaped neighborhood can still be a proper subset of the tangent space.
</details>

### Exercise 3.10 {#riemannian-geodesics-ex-10}

In the first-variation converse, why may one choose a variation field proportional to the covariant acceleration on a small interior interval?

<details><summary>Hint 1</summary>
Choose that interval inside one coordinate neighborhood of the curve.
</details>
<details><summary>Hint 2</summary>
Use a compactly supported bump and vary the coordinate curve by a small scalar multiple of its component field.
</details>
<details><summary>Full solution</summary>
A nonzero acceleration at an interior point remains nonzero on a small interval whose image lies in one chart. Multiply the acceleration components by a nonnegative bump supported there. Adding a sufficiently small multiple of this field to the coordinate curve stays inside the chart on its compact support and leaves the curve unchanged elsewhere, including the endpoints. Thus it defines an allowed smooth variation. The first-variation integral becomes strictly negative, proving that a stationary curve cannot have such a nonzero acceleration.
</details>

<a id="section-250-sources-and-provenance"></a>
## Sources and provenance {#section-252-sources-and-provenance}

New L4 expansion of the geodesic portion of [Smooth Manifolds, chapter 16](../smooth-manifolds/riemannian-first-look.md), which remains intact. The Gauss-lemma, boundary-exit minimization and first-variation arguments are developed fully here, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, geodesics, normal coordinates and first variation; and do Carmo, *Riemannian Geometry*, the exponential map and minimizing properties. The sphere and upper-half-plane examples continue this book's earlier metric calculations.

<a id="section-254-summary"></a>
## Summary {#section-256-summary}

The geodesic ODE gives maximal smoothly dependent solutions and an exponential locally invertible at zero. Gauss' lemma proves radial orthogonality, and a boundary-exit argument makes radial paths genuinely shortest from their center in a normal ball. First variation characterizes geodesics as stationary energy curves, while sphere and hyperbolic examples distinguish local uniqueness, global collisions and complete one-direction families. Completeness and global minimizing structure remain further questions.
`;export{e as default};