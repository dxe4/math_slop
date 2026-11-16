
# Sard's Theorem, Transversality and Whitney Embedding {#section-1-sard-s-theorem-transversality-and-whitney-embedding}

Critical points can be plentiful while their image is small. Sard's theorem makes that statement precise for smooth maps. It supplies regular parameters for transverse intersections and directions for projecting a high-dimensional embedding without losing injectivity or tangent rank. These are three related arguments, but each needs its own hypotheses.

This closing L4 chapter assumes the inverse-function and regular-value theorems, partitions of unity, tangent bundles and Riemannian metrics already developed here. Manifolds are real, finite-dimensional, smooth, Hausdorff, second-countable and without boundary. The analytic inputs are Taylor's theorem with a uniform remainder bound on a compact cube, elementary Lebesgue outer-measure estimates, and Fubini's theorem for compact measurable sets. We prove Sard for infinitely differentiable maps, a finite-dimensional submersion-family transversality theorem, and the weak Whitney embedding theorem for compact manifolds into dimension $2n+1$. Finite-differentiability thresholds, general function-space transversality, noncompact embedding and the sharper dimension-$2n$ Whitney theorem are not claimed as proved.

<a id="section-5-1-critical-values-and-coordinate-measure-zero"></a>
## 1. Critical values and coordinate measure zero {#section-7-1-critical-values-and-coordinate-measure-zero}

For a smooth map $f:M^m\to N^n$ with $n\ge1$, a point is critical when its differential has rank less than $n$. A critical value is the image of a critical point. A regular value has no critical point in its fiber; an empty fiber makes this condition automatically true. Surjectivity of a differential is the relevant rank condition, so if the source dimension is smaller than the target dimension every source point is critical.

A subset of the target has measure zero when its image in every coordinate chart has Euclidean Lebesgue measure zero. This condition is coordinate independent. On compact subdomains a smooth coordinate diffeomorphism is locally Lipschitz with a finite derivative bound. A Lipschitz map in equal dimensions takes null sets to null sets: cover the set by sufficiently small cubes with arbitrarily small total volume, and cover each image by a cube whose volume is at most a fixed dimensional constant times the original volume times the Lipschitz constant to the target dimension. A countable exhaustion handles domains without a single derivative bound. Thus changing target coordinates preserves nullness.

Countability matters. Euclidean domains have countable covers by relatively compact cubes, and our manifolds have countable atlases. A countable union of null sets is null. Nothing in that measure statement would justify an arbitrary uncountable union. These are the bookkeeping facts that allow a local calculation to prove a global theorem.

<a id="section-13-2-a-small-dimensional-image-lemma"></a>
## 2. A small-dimensional image lemma {#section-15-2-a-small-dimensional-image-lemma}

If $f:U\subseteq\mathbb R^m\to\mathbb R^n$ is smooth and $m<n$, its image is null. Work first on a compact cube lying inside the domain. A bound on the first derivative gives a Lipschitz constant there. Subdivide into cubes of side length $\delta$. Their number is bounded by a constant times $\delta^{-m}$. The image of each lies in a target ball of radius at most a constant times $\delta$, coverable by a target cube of comparable side length. The total covering volume is therefore bounded by a constant times $\delta^{n-m}$, which tends to zero.

A countable cube cover of the domain proves the lemma. The same argument applies in manifold charts. In particular a smooth map from a lower-dimensional manifold cannot fill an open subset of a higher-dimensional manifold. Smoothness is doing real work: an arbitrary continuous image has no such derivative bound, so this proof does not exclude space-filling continuous curves.

<a id="section-19-3-sard-s-theorem-the-rank-positive-part"></a>
## 3. Sard's theorem: the rank-positive part {#section-21-3-sard-s-theorem-the-rank-positive-part}

**Theorem 17.1 (Smooth Sard).** The critical values of a smooth map between the manifolds above have measure zero.

It suffices by countable charts to prove the theorem on Euclidean open sets. We induct on source dimension, proving the assertion for every positive target dimension at each stage. Source dimension zero has at most one point per Euclidean chart, whose image is null. Countable charts settle the manifold version of that base case.

Let $C$ be the critical set and let $C_1$ be the subset where every first partial derivative of every component is zero. Consider a point in $C\setminus C_1$. Some component has a nonzero partial derivative. After permuting source and target coordinates, the inverse-function theorem allows the source coordinate change

$$y=(f^1(x),x^2,\ldots,x^m).$$

In these coordinates the map has the form $f(y)=(y^1,g(y^1,y'))$. Elementary row elimination in its differential shows that it is critical precisely when the differential of $y'\mapsto g(y^1,y')$ has rank below $n-1$. Here $n\ge2$; if the target has dimension one, a nonzero first derivative already means regularity and this part of the critical set is empty.

For each fixed first coordinate, the induction hypothesis in source dimension $m-1$ says that the critical values of that slice map have measure zero in the remaining target coordinates. To apply Fubini without a measurability gap, intersect the original critical set with a compact subset of this coordinate neighborhood. Its image is compact, hence measurable, and each fiber of that image is contained in the corresponding slice's critical-value set. Fubini therefore gives measure zero for the compact image. Exhaust the neighborhood by countably many compact subsets and cover this part of the critical set by countably many such neighborhoods. This proves nullness of the rank-positive critical values.

<a id="section-33-4-sard-s-theorem-successive-vanishing-derivatives"></a>
## 4. Sard's theorem: successive vanishing derivatives {#section-35-4-sard-s-theorem-successive-vanishing-derivatives}

For an integer $i\ge1$, let $C_i$ consist of points where all component partial derivatives of orders from one through $i$ vanish. These sets are closed relative to the domain and decrease with $i$.

At a point in $C_i\setminus C_{i+1}$, some derivative of order $i+1$ is nonzero. It is a first derivative of a scalar function $h$ obtained by taking an order-$i$ partial derivative of a component of $f$. The function $h$ vanishes on $C_i$ and has nonzero differential at the chosen point. Its local zero set is consequently a smooth hypersurface by the regular-value theorem. The nearby portion of $C_i$ lies in that hypersurface.

Restrict $f$ to this hypersurface. At the points under consideration its full first differential is zero, since $i\ge1$. Its restricted differential therefore has rank zero, making those points critical for the restricted map to the same positive-dimensional target. The induction hypothesis in source dimension $m-1$ makes their images null. A countable local cover proves that the image of each difference $C_i\setminus C_{i+1}$ is null. No assumption that the whole set $C_i$ is a manifold has been made; only the particular local hypersurface containing the relevant portion is used.

It remains to control a sufficiently deep flat set $C_k$. Choose $k\ge1$ so that $n(k+1)>m$. On a compact cube inside the domain, bound all order-$(k+1)$ derivatives on a slightly larger cube still inside the domain. In a subdivision cube of side length $\delta$ which meets $C_k$, choose a point $x$ in that intersection. Taylor's theorem at $x$ has no terms of orders one through $k$. Consequently for every point $y$ of that subdivision cube,

$$\|f(y)-f(x)\|\le A\delta^{k+1},$$

with a constant independent of the chosen small cube. Convexity of the containing cube ensures the Taylor segments stay in the domain. There are at most a constant times $\delta^{-m}$ subdivision cubes. Cover their relevant images by target cubes with total volume bounded by a constant times

$$\delta^{n(k+1)-m}.$$

The positive exponent makes this tend to zero. Thus the image of $C_k$ in the fixed compact cube is null, and countably many cubes settle the whole flat set.

Finally decompose

$$C=(C\setminus C_1)\cup\bigcup_{i=1}^{k-1}(C_i\setminus C_{i+1})\cup C_k.$$

Every image piece was proved null, and the union is finite at this stage. This completes the induction and proves the Euclidean theorem. Countable source and target charts, with coordinate invariance of nullness, prove the stated manifold theorem. ∎

In particular regular values are dense: a nonempty target coordinate ball has positive measure and cannot consist of critical values. The critical-value set need not be empty, and the theorem does not promise a uniform rank bound near a critical point. We deliberately used unlimited smoothness to choose the required Taylor order. The optimal finite-differentiability theorem needs a different analysis and has not been substituted without proof.

<a id="section-59-5-transverse-inverse-images-and-regular-parameters"></a>
## 5. Transverse inverse images and regular parameters {#section-61-5-transverse-inverse-images-and-regular-parameters}

A smooth map $f:M\to N$ is transverse to an embedded submanifold $Z\subseteq N$ if at every point with image in $Z$,

$$df_x(T_xM)+T_{f(x)}Z=T_{f(x)}N.$$

If the image does not meet $Z$, transversality is automatic. Locally express the submanifold as the zero set of a submersion $q$ into a Euclidean space of dimension equal to its codimension. The displayed condition says exactly that $d(q\circ f)$ is surjective at its zeros. The regular-value theorem therefore proves that the inverse image is an embedded submanifold of the same codimension, with tangent space the inverse image of the submanifold tangent space. If that codimension exceeds the source dimension, transversality forces the inverse image to be empty.

**Theorem 17.2 (Submersion-family transversality).** Let $F:P\times M\to N$ be a smooth submersion and $Z\subseteq N$ an embedded submanifold. Outside a measure-zero subset of the finite-dimensional parameter manifold $P$, the map $F_a(x)=F(a,x)$ is transverse to $Z$.

*Proof.* The inverse image $W=F^{-1}(Z)$ is a submanifold by the preceding local defining-function argument. Apply Sard to its projection $\pi:W\to P$ when the parameter dimension is positive. For a zero-dimensional parameter space every differential to its zero tangent space is already surjective, so every parameter is regular. We check exactly what regularity of this projection means. At a point of $W$, write $A=T_aP$, $B=T_xM$ and let $Q$ be the quotient of the target tangent space by $T Z$. The differential of $F$ followed by the quotient is a surjective map $L:A\oplus B\to Q$, and $T W=\ker L$.

Projection from this kernel onto $A$ is surjective exactly when $L|_B$ is surjective. If the latter is onto, any parameter vector can be completed by a source vector cancelling its $L$ value, giving the first assertion. Conversely, express an arbitrary quotient vector as $L(a,b)$, using surjectivity of $L$. Surjectivity of the kernel projection supplies $b'$ with $L(a,b')=0$. Their difference expresses the same quotient vector as $L(0,b-b')$, proving the reverse implication. The condition on $L|_B$ is precisely transversality of the parameter slice. Hence every regular value of $\pi$ supplies a transverse slice, and Sard proves the exceptional set null. ∎

The same argument covers parameters with empty projection fiber. The resulting good parameters are dense; they need not form an open set without further control such as suitable properness. For example translations $F(a,x)=f(x)+a$ into Euclidean space are a submersion family because the parameter differential is the identity. Thus arbitrarily small translations make the map transverse to a fixed embedded submanifold. This is a finite-dimensional perturbation result, not a theorem about all function-space topologies.

<a id="section-75-6-a-compact-embedding-in-some-finite-dimension"></a>
## 6. A compact embedding in some finite dimension {#section-77-6-a-compact-embedding-in-some-finite-dimension}

Let $M$ be compact of dimension $n\ge1$. Choose a finite chart cover with smooth subordinate functions $\rho_i$ summing to one. Define a map into a finite-dimensional Euclidean space by collecting all components

$$E(p)=\bigl(\rho_i(p),\rho_i(p)x_i^1(p),\ldots,\rho_i(p)x_i^n(p)\bigr)_i,$$

where each weighted coordinate expression is extended by zero outside its chart. Support control makes every component smooth.

The map is injective. If two images agree, choose an index whose weight at the first point is positive. The matching scalar component makes the weight at the second point equal and positive. Dividing the weighted coordinate components by that common weight shows the two chart-coordinate lists agree, so the points agree.

It is an immersion as well. If its differential annihilates a vector, the scalar component gives $d\rho_i(v)=0$. For an index with positive weight, the weighted-coordinate differentials then give $\rho_i dx_i^j(v)=0$ for every coordinate. Thus all coordinates of the tangent vector vanish. A continuous injection from compact space into Hausdorff space is a homeomorphism onto its image: closed subsets of the domain are compact and their images are closed. Together with immersion this proves that $E$ is a smooth embedding. The construction has supplied an actual finite ambient dimension, though probably a large one.

<a id="section-87-7-lower-the-ambient-dimension-without-losing-the-embedd"></a>
## 7. Lower the ambient dimension without losing the embedding {#section-89-7-lower-the-ambient-dimension-without-losing-the-embedd}

**Theorem 17.3 (Compact weak Whitney embedding).** A compact smooth $n$-manifold embeds smoothly into $\mathbb R^{2n+1}$.

*Proof.* Start with the embedding just constructed. If its ambient dimension is smaller than the desired dimension, append zero coordinates. Otherwise suppose the current ambient dimension $N$ is strictly greater than $2n+1$. Bad projection directions arise from two smooth maps into the unit sphere $S^{N-1}$.

The secant-direction map is defined on ordered distinct point pairs and sends $(p,q)$ to $(E(p)-E(q))/\|E(p)-E(q)\|$. Its source dimension is $2n$. The tangent-direction map is defined on unit tangent vectors for any Riemannian metric and sends a vector to its nonzero derivative image under $E$, normalized to unit length. Its source dimension is $2n-1$. The unit tangent sphere bundle is a smooth manifold by local metric orthonormalization, or equivalently by the regular-level equation for the positive quadratic norm.

Both source dimensions are strictly less than $N-1$. The small-dimensional image lemma therefore makes both direction images null in the target sphere. They cannot cover that sphere, whose nonempty coordinate domains have positive coordinate measure. Choose a direction outside their union and orthogonally project to its perpendicular hyperplane.

The projected map is injective: equality of two projected points would make their nonzero difference parallel to the chosen direction, putting that direction or its negative in the secant image. Ordered pairs include both signs. The projected differential is injective for the same reason using the tangent image, which also includes opposite vectors. Thus projection preserves injectivity and immersion. Compactness again makes it an embedding. Repeat the dimension drop until dimension $2n+1$ is reached. Each step is finite, and all its excluded directions have been justified by the proved dimension estimate. ∎

A compact zero-dimensional manifold is a finite set and embeds in the real line directly. The theorem is not the sharp dimension-$2n$ Whitney result. Nor does the compact proof automatically extend to a noncompact manifold: a finite chart list and the compact injection-to-embedding step were both used explicitly. Those stronger embedding theorems require further arguments. No classification of surfaces is part of this proof.

<a id="section-101-8-three-worked-examples"></a>
## 8. Three worked examples {#section-103-8-three-worked-examples}

<a id="section-103-worked-example-17-4-regular-values-can-have-no-preimage"></a>
### Worked example 17.4 — Regular values can have no preimages {#section-105-worked-example-17-4-regular-values-can-have-no-preimage}

For the real square map, the only critical point is zero and the only critical value is zero. Every positive value has two preimages with nonzero derivative. Every negative value has no preimages and is also regular. Thus the regular-value set is dense, as Sard predicts, even though the map is not surjective. The zero fiber is a single point, despite being critical; failure of the regular-value hypothesis does not itself prove the fiber is singular. It only removes the theorem's sufficient guarantee about its dimension and smooth structure.

<a id="section-107-worked-example-17-5-a-translated-parabola-meets-a-line-"></a>
### Worked example 17.5 — A translated parabola meets a line transversely {#section-109-worked-example-17-5-a-translated-parabola-meets-a-line-}

Take $F(a,t)=(t,t^2+a)$ and let the target submanifold be the horizontal axis. The parameter derivative is $(0,1)$ and the source derivative is $(1,2t)$, which together span the plane. Hence the family is a submersion. For negative parameter the intersections occur at the two nonzero roots of $t^2=-a$. At those roots the tangent has nonzero vertical component and the intersections are transverse. For positive parameter there is no intersection, also transverse. At parameter zero the parabola is tangent to the axis and transversality fails. The exceptional parameter set consists of one point. This illustrates both the quotient linear-algebra criterion and the empty-fiber convention in an explicit family.

<a id="section-111-worked-example-17-6-an-immersion-preserving-projection-"></a>
### Worked example 17.6 — An immersion-preserving projection can lose injectivity {#section-113-worked-example-17-6-an-immersion-preserving-projection-}

The circle map $t\mapsto(\cos t,\sin t,\cos2t,\sin2t)$ is an embedding into four-dimensional space: its first two coordinates recover the circle point and its first derivative never vanishes. Projection to its last two coordinates still has nonzero derivative, so it is an immersion. However the parameters differing by $\pi$ have the same projected image, making it two-to-one. Projection to the first two coordinates is instead an embedding. The generic-direction proof protects both tangent and secant conditions separately because neither condition implies the other. This example does not claim that every projection onto any lower-dimensional coordinate subspace is generic or safe.

<a id="section-115-exercises"></a>
## Exercises {#section-117-exercises}

### Exercise 17.1 {#smooth-sard-transversality-whitney-ex-1}

For $f(x,y)=x^2+y^2$, determine all critical points, critical values and regular fibers.

<details><summary>Hint 1</summary>
The differential has one row, the gradient.
</details>
<details><summary>Hint 2</summary>
Separate positive, zero and negative target values.
</details>
<details><summary>Full solution</summary>
The differential is zero only at the origin, so the critical-value set is the singleton zero. A positive fiber is a circle with nonzero differential everywhere; a negative fiber is empty and regular. The zero fiber is one point and critical. Sard asserts the critical-value set is null, which this calculation verifies directly. The regular-fiber dimension conclusion applies to the positive circles and vacuously to empty fibers, not to the critical singleton.
</details>

### Exercise 17.2 {#smooth-sard-transversality-whitney-ex-2}

Explain why the smooth image of a circle in three-dimensional Euclidean space has measure zero, even when its image has self-intersections.

<details><summary>Hint 1</summary>
Use the source and target dimensions in the small-image lemma.
</details>
<details><summary>Hint 2</summary>
The proof did not require injectivity.
</details>
<details><summary>Full solution</summary>
The circle has a finite, hence countable, chart cover of dimension one, below target dimension three. The local derivative-bound covering argument gives null image from each compact chart piece. Their countable union remains null. Self-intersections merely cause some target points to be covered more than once; they do not increase the upper covering-volume bound. The conclusion depends on smooth regularity rather than injectivity.
</details>

### Exercise 17.3 {#smooth-sard-transversality-whitney-ex-3}

Why does the flat-set Taylor estimate require choosing $k$ with $n(k+1)>m$? What if equality holds?

<details><summary>Hint 1</summary>
Count the source subdivision cubes and the volume of each target covering cube.
</details>
<details><summary>Hint 2</summary>
Inspect the power of the subdivision side length.
</details>
<details><summary>Full solution</summary>
There are order $\delta^{-m}$ source cubes and each target cover has volume order $\delta^{n(k+1)}$. Their product has exponent $n(k+1)-m$. Strict positivity makes the bound tend to zero and proves nullness. Equality leaves only a bounded estimate, which need not tend to zero and therefore does not prove the required measure statement. Smoothness allows choosing a larger finite Taylor order, avoiding that gap in this version of the theorem.
</details>

### Exercise 17.4 {#smooth-sard-transversality-whitney-ex-4}

Prove the regular-parameter equivalence when the quotient space $Q$ is zero. Interpret it geometrically.

<details><summary>Hint 1</summary>
Every linear map to the zero space is surjective.
</details>
<details><summary>Hint 2</summary>
The kernel of that map is the whole direct sum.
</details>
<details><summary>Full solution</summary>
If the quotient is zero, both the full map and its source-factor restriction are onto automatically. The kernel is the entire direct sum, whose projection onto the parameter space is surjective. Geometrically the target submanifold has codimension zero near the image point. Its tangent space is the full target tangent space, so every slice is transverse there regardless of its own differential rank. This is consistent with the stated quotient criterion.
</details>

### Exercise 17.5 {#smooth-sard-transversality-whitney-ex-5}

For a smooth map from a curve to a surface, show that transversality to a point forces the point to be outside the image.

<details><summary>Hint 1</summary>
A point submanifold has zero tangent space and codimension two.
</details>
<details><summary>Hint 2</summary>
The curve differential has rank at most one.
</details>
<details><summary>Full solution</summary>
At a point in the fiber, transversality would require the curve differential to span the two-dimensional target tangent space. Its rank is at most one, making that impossible. Thus a transverse map has empty fiber over the specified point. This is the dimension obstruction for a codimension exceeding the source dimension, not a claim that arbitrary curve maps avoid every point.
</details>

### Exercise 17.6 {#smooth-sard-transversality-whitney-ex-6}

In the finite chart embedding, explain why the scalar components $\rho_i$ are retained alongside the weighted coordinate components.

<details><summary>Hint 1</summary>
Equality of weighted coordinates does not by itself imply equality of coordinates if their weights differ.
</details>
<details><summary>Hint 2</summary>
The scalar derivative also removes the extra product-rule term in the immersion proof.
</details>
<details><summary>Full solution</summary>
The scalar components make equal images have equal positive weights in a chosen active chart, permitting division to recover the same coordinate point. Their differentials make a vector in the derivative kernel satisfy $d\rho_i(v)=0$, leaving only the positive weight times the coordinate differential in each remaining component. Thus they support both injectivity and immersion. Omitting them would remove these two decisive deductions from the stated proof.
</details>

### Exercise 17.7 {#smooth-sard-transversality-whitney-ex-7}

Determine why the generic projection argument stops at ambient dimension $2n+1$ rather than proving an embedding in dimension $2n$.

<details><summary>Hint 1</summary>
To drop the ambient dimension by one, compare the sphere dimension with the secant-domain dimension.
</details>
<details><summary>Hint 2</summary>
At current ambient dimension $2n+1$, those two dimensions agree.
</details>
<details><summary>Full solution</summary>
The target direction sphere has dimension $N-1$, while ordered distinct pairs have dimension $2n$. The null-image argument requires strict inequality. At $N=2n+1$ the dimensions are equal, so the elementary small-image lemma no longer ensures that any direction avoids all secants. The tangent condition alone remains easier, but injectivity needs the secant condition as well. The sharper Whitney theorem must therefore use an additional argument beyond this generic projection proof.
</details>

### Exercise 17.8 {#smooth-sard-transversality-whitney-ex-8}

Show that a compact injective immersion is an embedding, and identify the two separate ingredients.

<details><summary>Hint 1</summary>
Compact subsets have closed image in a Hausdorff target.
</details>
<details><summary>Hint 2</summary>
The inverse onto the image must be continuous in addition to the derivative being injective.
</details>
<details><summary>Full solution</summary>
The continuous injection is a bijection onto its image. Every closed domain subset is compact, and its image is compact and therefore closed in the Hausdorff target. Hence the inverse onto the image is continuous. This gives the required topological embedding property; the separately assumed immersion gives its smooth differential condition. Neither derivative injectivity alone nor a set-theoretic injection alone supplies both properties.
</details>

### Exercise 17.9 {#smooth-sard-transversality-whitney-ex-9}

In the parabola family, compute the tangent dimension of the inverse image of the axis for a transverse parameter and compare it with the tangency parameter.

<details><summary>Hint 1</summary>
The source dimension and target-submanifold codimension are both one.
</details>
<details><summary>Hint 2</summary>
At a nonzero root the scalar defining-function derivative is nonzero.
</details>
<details><summary>Full solution</summary>
For a negative parameter the two nonzero roots each have zero-dimensional inverse-image tangent space, the kernel of the nonzero derivative of $t^2+a$. At parameter zero the derivative vanishes, so its kernel is the whole one-dimensional source tangent space. The actual inverse image is still just a singleton. The tangent-kernel formula belongs to the transverse regular-fiber theorem and cannot be applied at that tangency. Confusing the two would assign a false tangent dimension to the singleton from an invalid hypothesis.
</details>

### Exercise 17.10 {#smooth-sard-transversality-whitney-ex-10}

Why is second-countability relevant to the manifold Sard proof, and why does measure zero imply empty interior in positive-dimensional target charts?

<details><summary>Hint 1</summary>
Trace where local critical-image statements are joined globally.
</details>
<details><summary>Hint 2</summary>
A nonempty Euclidean open ball has strictly positive measure.
</details>
<details><summary>Full solution</summary>
Second-countability gives countable chart and local-neighborhood covers, so the local null image pieces combine by a countable union. No theorem says arbitrary uncountable unions of null sets are null. In a positive-dimensional chart any nonempty open set contains a ball of positive volume, so a null set cannot contain that open set. The complement of the critical-value set therefore meets every nonempty chart-open set, which is exactly density of regular values. This conclusion does not additionally assert openness of the regular-value set.
</details>

<a id="section-257-sources-and-provenance"></a>
## Sources and provenance {#section-259-sources-and-provenance}

New L4 text closing the commissioned Smooth Manifolds route. The regular-value, partition and tangent-bundle arguments used here are proved in the earlier chapters. Comparison references are Lee, *Introduction to Smooth Manifolds*, Sard, transversality and embedding chapters; Hirsch, *Differential Topology*, the smooth Sard and weak embedding arguments; and Guillemin and Pollack, *Differential Topology*, regular values and transversality. The proof above is explicitly the smooth Sard induction and compact weak Whitney theorem, not the sharp finite-regularity or dimension-$2n$ result.

<a id="section-261-summary"></a>
## Summary {#section-263-summary}

Smooth Sard follows by reducing positive-rank critical points to lower-dimensional slices, placing successive derivative-flat strata inside hypersurfaces, and controlling the remaining flat set by Taylor covering estimates. Applied to the projection of a transverse total inverse image, it gives almost-everywhere regular parameters. Applied to secant and tangent direction maps, the dimension estimate preserves a compact embedding under successive generic projections down to dimension $2n+1$. Empty fibers, countable covers, finite-dimensional parameters, compactness and the strict direction-dimension inequality remain part of these conclusions.
