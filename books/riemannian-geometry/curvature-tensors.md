
# Curvature Tensors {#section-1-curvature-tensors}

Connection coefficients change when coordinates change. Curvature combines their derivatives and products into a tensor, measuring a failure of successive covariant derivatives to commute. Its sectional, Ricci and scalar contractions retain different amounts of information. Fixing the sign convention is essential before comparing any of their formulas.

This L4 chapter follows [Connections and the Levi-Civita Connection](levi-civita-connection.md) and [Geodesics and the Exponential Map](geodesics-exponential-map.md). Manifolds and metrics are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary, with a positive metric and its torsion-free compatible connection. We prove tensoriality, the algebraic symmetries and contractions, then compute flat, spherical and hyperbolic examples. No comparison theorem, global surface classification or unproved holonomy expansion is used.

<a id="section-5-1-fix-the-derivative-order"></a>
## 1. Fix the derivative order {#section-7-1-fix-the-derivative-order}

Our curvature convention is

$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$

The bracket correction removes the effect of using noncommuting derivative directions. Even for a flat connection, two arbitrary fields can have nonzero bracket, so simply taking the first two terms would not define the same geometric obstruction. With this convention the unit sphere will have positive sectional curvature.

The expression is real-multilinear and linear over smooth functions in every input. Here are the cancellations which establish the stronger assertion. Replacing the first input by $fX$ gives extra terms involving $Yf$ from the second iterated derivative. The identity $[fX,Y]=f[X,Y]-(Yf)X$ supplies their cancellation in the bracket term. Antisymmetry in the first two inputs then gives function-linearity in the second.

Replacing the last input by $fZ$ and expanding twice produces the expected scalar multiple of the old curvature plus derivatives of the scalar. The coefficients multiplying the first covariant derivatives of $Z$ cancel in pairs. The remaining scalar coefficient is $(XYf-YXf-[X,Y]f)Z$, which is zero by the derivation definition of the bracket. Thus curvature is tensorial in all three slots. It depends only on the values of those vectors at the point, despite being defined using differentiated field extensions.

Set

$$R_4(X,Y,Z,W)=g(R(X,Y)Z,W).$$

This lowers the output index to obtain a four-covariant tensor. Its notation is part of our convention: the sectional numerator will put the repeated vectors in the order $X,Y,Y,X$. A text using the opposite sign for the original curvature operator will reverse its sectional signs unless it also changes its contraction convention.

<a id="section-23-2-antisymmetries-and-the-first-bianchi-identity"></a>
## 2. Antisymmetries and the first Bianchi identity {#section-25-2-antisymmetries-and-the-first-bianchi-identity}

The definition immediately gives $R(X,Y)=-R(Y,X)$. Metric compatibility also gives antisymmetry in the last pair of the lowered tensor. Apply the zero scalar operator $XY-YX-[X,Y]$ to $g(Z,W)$ and expand each differentiated pairing by compatibility. The mixed products of first covariant derivatives cancel, leaving

$$g(R(X,Y)Z,W)+g(Z,R(X,Y)W)=0.$$

Hence $R_4(X,Y,Z,W)=-R_4(X,Y,W,Z)$. Thus for each fixed derivative pair, the curvature endomorphism is skew-adjoint. This argument uses compatibility; it would not hold for an arbitrary nonmetric connection.

**Theorem 4.1 (First Bianchi identity).** For the torsion-free connection,

$$R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0.$$

*Proof.* Use normal coordinates at a point. The geodesic coordinate equation along every radial line implies $\Gamma^k_{ij}(p)v^iv^j=0$ for every vector $v$. Torsion freedom makes the lower indices symmetric, so polarization gives $\Gamma^k_{ij}(p)=0$. At this point the curvature coefficients are just

$$\partial_i\Gamma^\ell_{jk}-\partial_j\Gamma^\ell_{ik}.$$

Cyclically sum over $i,j,k$. The six derivatives cancel in pairs because the lower two indices of every connection coefficient are symmetric on the coordinate domain. Thus the cyclic curvature sum vanishes on coordinate vectors at the point. Tensoriality proves it for arbitrary vectors and, since the point was arbitrary, everywhere. ∎

The normal-coordinate step kills the coefficients at one point, not their derivatives. It is therefore fully consistent with nonzero curvature there. The proof has also identified the role of zero torsion rather than treating the Bianchi identity as a formal property of every connection.

<a id="section-43-3-exchange-the-two-input-pairs"></a>
## 3. Exchange the two input pairs {#section-45-3-exchange-the-two-input-pairs}

The antisymmetries and Bianchi imply the pair-exchange identity

$$R_4(X,Y,Z,W)=R_4(Z,W,X,Y).$$

For completeness write $R_{abcd}=R_4(a,b,c,d)$. Bianchi followed by last-pair antisymmetry gives $R_{abcd}=R_{bcda}+R_{cadb}$. Applying Bianchi to those two terms and using the pair antisymmetries gives

$$R_{abcd}=2R_{cdab}+R_{adbc}-R_{bdac}.$$

One more Bianchi identity, on the triple $a,d,b$ with final input $c$, makes the last difference equal to $-R_{abcd}$. Thus twice the first expression equals twice the exchanged one. Division by two over the reals proves the identity. This is an algebraic consequence of the already established symmetries; it is not a separate assumption about the metric.

The familiar curvature tensor therefore has three constraints which should not be confused: antisymmetry in each pair, exchange of the pairs and cyclic Bianchi. Their combination strongly reduces the independent coefficients. It also explains why one sectional quantity determines all the curvature information in dimension two, while higher dimensions admit richer interactions among planes.

<a id="section-57-4-coordinates-and-what-vanishing-symbols-mean"></a>
## 4. Coordinates and what vanishing symbols mean {#section-59-4-coordinates-and-what-vanishing-symbols-mean}

With the convention $R(\partial_i,\partial_j)\partial_k=R^\ell{}_{kij}\partial_\ell$, expanding the definition gives

$$R^\ell{}_{kij}=\partial_i\Gamma^\ell_{jk}-\partial_j\Gamma^\ell_{ik}
+\Gamma^a_{jk}\Gamma^\ell_{ia}-\Gamma^a_{ik}\Gamma^\ell_{ja}.$$

The derivative terms come from differentiating the coefficient of the inner covariant derivative. The product terms differentiate the basis vector carrying that coefficient. Coordinate brackets vanish, so no further term remains in this particular frame. In a noncoordinate frame the bracket term must be retained explicitly.

Normal coordinates make all connection coefficients zero at their center. Compatibility then makes the first derivatives of the metric coefficients zero there as well. If the initial coordinate basis is orthonormal, the metric matrix at the center is the identity. None of this removes the second metric derivatives or first coefficient derivatives which can carry curvature.

A metric is called flat on a region when its curvature tensor vanishes throughout that region. Nonzero connection coefficients alone do not refute flatness. Conversely coefficients vanishing at one point do not prove flatness. The stronger existence of coordinates with constant metric coefficients throughout a neighborhood is another statement whose converse requires an integrability argument, not just the normal-coordinate theorem.

<a id="section-70-5-sectional-curvature-and-its-basis-independence"></a>
## 5. Sectional curvature and its basis independence {#section-72-5-sectional-curvature-and-its-basis-independence}

For an independent pair $X,Y$, define the curvature of their tangent plane by

$$K(X,Y)=\frac{g(R(X,Y)Y,X)}
{g(X,X)g(Y,Y)-g(X,Y)^2}.$$

The denominator is positive by strict Cauchy–Schwarz for independent vectors. Replacing the two vectors by another basis of their plane multiplies that Gram determinant by the square of the basis-change determinant. The numerator changes by the identical factor: expand multilinearly and use antisymmetry in both pairs of the lowered curvature. Thus the ratio depends only on the plane. In an orthonormal pair it is simply the displayed numerator. Reversing the plane orientation changes neither value.

In dimension one there are no tangent two-planes, so sectional curvature is not defined by this expression. It is better to state that fact than to divide a zero Gram determinant and assign a value. The full curvature tensor does vanish in dimension one, since its alternating first pair has no nonzero value. Ricci and scalar curvature defined below then vanish as well.

Sectional curvature is intrinsic. It depends on the metric's connection, not a chosen embedding into a surrounding space. A cylinder with its induced flat local metric can bend in three-dimensional space while having zero intrinsic sectional curvature. Extrinsic normal bending and intrinsic curvature require separate constructions and separate theorems relating them.

<a id="section-83-6-ricci-and-scalar-contractions"></a>
## 6. Ricci and scalar contractions {#section-85-6-ricci-and-scalar-contractions}

For an orthonormal tangent basis define

$$\operatorname{Ric}(X,Y)=\sum_i g(R(e_i,X)Y,e_i).$$

This is the trace of the linear map taking $Z$ to $R(Z,X)Y$, so it is independent of the orthonormal basis. It is symmetric. Indeed Bianchi gives $R(e_i,X)Y-R(e_i,Y)X=-R(X,Y)e_i$. Pairing with $e_i$ gives zero by skew-adjointness, and summing proves equality of the two Ricci arguments.

For a unit vector $X$ chosen as the first basis vector, its diagonal Ricci value is the sum of sectional curvatures of the planes containing it and the other orthonormal basis vectors. The scalar curvature is the trace of Ricci:

$$\operatorname{Scal}=\sum_i\operatorname{Ric}(e_i,e_i)
=2\sum_{i<j}K(e_i,e_j).$$

Thus sectional, Ricci and scalar curvature are different contractions. A single scalar at a point generally cannot recover every plane curvature. In dimension two there is one tangent plane, so Ricci equals its sectional value times the metric and scalar curvature is twice that value. In higher dimensions the contraction loses information.

Under a constant metric scaling $\widetilde g=c^2g$ with $c>0$, the Koszul formula shows that the Levi–Civita connection and its curvature operator with one vector output are unchanged. Lowering that output multiplies the four-tensor by $c^2$, while the sectional denominator multiplies by $c^4$. Hence sectional and scalar curvature divide by $c^2$. The bilinear Ricci tensor is unchanged because its trace definition does not use the lowered metric coefficient; its trace as a scalar uses the inverse metric and therefore does scale. This distinction prevents mixing the tensor with its numerical values on differently normalized unit vectors.

<a id="section-100-7-three-worked-examples"></a>
## 7. Three worked examples {#section-102-7-three-worked-examples}

<a id="section-102-worked-example-4-2-nonzero-polar-coefficients-zero-curv"></a>
### Worked example 4.2 — Nonzero polar coefficients, zero curvature {#section-104-worked-example-4-2-nonzero-polar-coefficients-zero-curv}

In the flat polar metric $dr^2+r^2d\theta^2$, the nonzero symbols are $\Gamma^r_{\theta\theta}=-r$ and $\Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=1/r$. The coefficient of the radial direction in $R(\partial_r,\partial_\theta)\partial_\theta$ is

$$\partial_r(-r)-(1/r)(-r)=-1+1=0.$$

All other terms in that component formula vanish. In two dimensions the pair antisymmetries and pair exchange reduce all lowered components to this one value up to signs and metric pairing, so the tensor is zero. The coefficient-derivative term alone would have given a false nonzero answer. This computation explicitly exhibits the product cancellation needed to turn changing frame coefficients into an invariant result.

<a id="section-110-worked-example-4-3-sphere-curvature-from-tangent-projec"></a>
### Worked example 4.3 — Sphere curvature from tangent projection {#section-112-worked-example-4-3-sphere-curvature-from-tangent-projec}

On the unit sphere the ambient derivative of tangent fields splits as $D_XY=\nabla_XY-g(X,Y)p$, as proved in the first look. The ambient derivative is flat. Take the tangential part of its curvature identity. Differentiating the normal term contributes $-g(Y,Z)X$ in the first iterated derivative and the corresponding exchanged term in the second. Hence

$$R(X,Y)Z=g(Y,Z)X-g(X,Z)Y.$$

For an orthonormal pair the sectional numerator is one. Therefore the unit sphere has constant sectional curvature one, Ricci tensor $(n-1)g$ and scalar curvature $n(n-1)$. The formulas for Ricci and scalar also hold for the one-dimensional sphere, where they are zero and sectional planes are absent. A sphere of radius $a$ has the scaled metric and sectional curvature $1/a^2$. This derives the positive sign rather than fixing it by naming convention after the calculation.

<a id="section-118-worked-example-4-4-negative-curvature-in-the-upper-half"></a>
### Worked example 4.4 — Negative curvature in the upper half-plane {#section-120-worked-example-4-4-negative-curvature-in-the-upper-half}

For $g=(dx^2+dy^2)/y^2$, use the orthonormal frame $e_1=y\partial_x$, $e_2=y\partial_y$. Its bracket is $[e_1,e_2]=-e_1$. The coefficient formula or Koszul identity gives

$$\nabla_{e_1}e_1=e_2,\qquad \nabla_{e_1}e_2=-e_1,
\qquad \nabla_{e_2}e_1=\nabla_{e_2}e_2=0.$$

These equalities can be checked by the coordinate coefficients $\Gamma^y_{xx}=1/y$, $\Gamma^x_{xy}=-1/y$ and $\Gamma^y_{yy}=-1/y$, including the derivative of each frame's factor $y$. Substituting into the intrinsic curvature definition gives

$$R(e_1,e_2)e_2=0-0-\nabla_{-e_1}e_2=-e_1.$$

Thus sectional curvature is minus one everywhere, Ricci is minus the metric and scalar curvature is minus two. Omitting the noncoordinate bracket correction would incorrectly produce zero. The calculation proves constant negative curvature for this specified metric. Its global completeness and its role among all possible surfaces are separate questions, not consequences of one frame computation alone.

<a id="section-131-exercises"></a>
## Exercises {#section-133-exercises}

### Exercise 4.1 {#riemannian-curvature-ex-1}

Verify directly that curvature is function-linear in its third input by listing the scalar derivative which remains after the first-derivative terms cancel.

<details><summary>Hint 1</summary>
Expand both iterated derivatives on $fZ$ with the connection product rule.
</details>
<details><summary>Hint 2</summary>
Compare the second scalar derivatives with the bracket acting on the scalar.
</details>
<details><summary>Full solution</summary>
The terms containing one derivative of $f$ times one covariant derivative of $Z$ cancel between the two iterated expressions. The remaining coefficient of $Z$ is $XYf-YXf-[X,Y]f$, which is zero by the bracket definition on functions. The untouched terms are exactly $fR(X,Y)Z$. Thus the result depends only on the pointwise third vector, despite its differentiated definition.
</details>

### Exercise 4.2 {#riemannian-curvature-ex-2}

For a metric-compatible connection, explain why $g(R(X,Y)Z,Z)=0$ for every triple of fields.

<details><summary>Hint 1</summary>
Use skew-adjointness of the curvature endomorphism.
</details>
<details><summary>Hint 2</summary>
The same real number equals its own negative.
</details>
<details><summary>Full solution</summary>
Last-pair antisymmetry gives $g(R(X,Y)Z,Z)=-g(Z,R(X,Y)Z)$. Symmetry of the real metric identifies the two pairings, so twice that number is zero and the number vanishes. This is not a claim that the curvature vector itself vanishes; it says that its component along the input vector is zero. On the sphere it can be a nonzero perpendicular vector.
</details>

### Exercise 4.3 {#riemannian-curvature-ex-3}

Show that changing the orientation of an orthonormal basis of a fixed tangent two-plane does not change sectional curvature.

<details><summary>Hint 1</summary>
A basis change with determinant minus one still has determinant square one.
</details>
<details><summary>Hint 2</summary>
Both the alternating numerator and Gram determinant acquire that square.
</details>
<details><summary>Full solution</summary>
The numerator has one alternating pair for the two basis directions and another alternating pair for their repeated positions. Each contributes a determinant factor, so the product factor is its square. The denominator is the basis Gram determinant and has the same square factor. Their ratio is unchanged. Sectional curvature therefore belongs to an unoriented tangent plane, even though the connection and frame calculations may involve orientation-dependent coordinate signs.
</details>

### Exercise 4.4 {#riemannian-curvature-ex-4}

Compute sectional, Ricci and scalar curvature for the round three-sphere of radius two.

<details><summary>Hint 1</summary>
Scale the unit sphere metric by four.
</details>
<details><summary>Hint 2</summary>
In dimension three Ricci has two sectional contributions per unit direction.
</details>
<details><summary>Full solution</summary>
Sectional curvature is one quarter. Ricci is one half times the radius-two metric, since $(n-1)K=2/4$. Scalar curvature is $n(n-1)K=6/4=3/2$. If comparing Ricci as a bilinear tensor under the identification with the unit sphere, it is unchanged; writing it as a coefficient times the newly scaled metric produces the factor one half. This keeps the metric and tensor scaling statements consistent.
</details>

### Exercise 4.5 {#riemannian-curvature-ex-5}

Why does a one-dimensional Riemannian manifold have zero curvature operator although it may have nonzero connection coefficients in a chosen coordinate?

<details><summary>Hint 1</summary>
The first two curvature inputs form an alternating pair.
</details>
<details><summary>Hint 2</summary>
Every two vectors in a one-dimensional tangent space are dependent.
</details>
<details><summary>Full solution</summary>
Tensoriality and antisymmetry force the curvature to vanish on any dependent first pair, hence on all pairs in dimension one. A coordinate metric $a(x)^2dx^2$ can still have connection coefficient $a'/a$. Its nonzero value records the changing coordinate scale and can be removed locally by an arc-length coordinate. There is no two-plane sectional curvature to evaluate in this dimension.
</details>

### Exercise 4.6 {#riemannian-curvature-ex-6}

Compute $R(e_1,e_2)e_1$ in the upper-half-plane frame and compare it with the computed value on $e_2$.

<details><summary>Hint 1</summary>
Insert the four displayed covariant derivatives and the nonzero bracket.
</details>
<details><summary>Hint 2</summary>
The first two iterated terms again vanish.
</details>
<details><summary>Full solution</summary>
The result is $-\nabla_{-e_1}e_1=e_2$. Together with $R(e_1,e_2)e_2=-e_1$, this gives a skew-adjoint quarter-turn-shaped operator on the tangent plane. Its sectional numerator is still the pairing of the latter value with $e_1$, namely minus one. Reading only the former value without the stipulated input order could reverse the reported sectional sign.
</details>

### Exercise 4.7 {#riemannian-curvature-ex-7}

Prove that a Riemannian isometry preserves curvature and sectional curvature.

<details><summary>Hint 1</summary>
It carries the Levi–Civita connection to the target connection by uniqueness.
</details>
<details><summary>Hint 2</summary>
Apply that relation to every term of the curvature definition and use bracket naturality.
</details>
<details><summary>Full solution</summary>
Pushforward intertwines both iterated covariant derivatives because it intertwines the connections. It also carries the bracket to the bracket. Thus it takes the source curvature vector to the target curvature vector with pushed inputs. Metric preservation makes their pairings and the two-vector Gram determinants equal. Consequently the sectional ratio is preserved on corresponding tangent planes. The argument uses a genuine metric isometry, not an arbitrary smooth coordinate map.
</details>

### Exercise 4.8 {#riemannian-curvature-ex-8}

Explain why a cylinder of positive radius can have zero intrinsic curvature while its normal changes along a circular cross-section.

<details><summary>Hint 1</summary>
Use coordinates consisting of arc length around the cylinder and height.
</details>
<details><summary>Hint 2</summary>
Their local metric has constant identity coefficients.
</details>
<details><summary>Full solution</summary>
On a patch avoiding the angular seam, use the radius times angle and the height as coordinates. The metric is the sum of their squared differentials, so all connection symbols and curvature components vanish there. The ambient unit normal still rotates around the axis, giving extrinsic bending. Intrinsic curvature is built from the metric, whereas the normal's variation refers to a specific embedding. The two observations are consistent and require distinct measurements.
</details>

### Exercise 4.9 {#riemannian-curvature-ex-9}

Suppose a metric is multiplied by a positive constant factor nine. State the scaling of the curvature operator, sectional curvature, bilinear Ricci tensor and scalar curvature.

<details><summary>Hint 1</summary>
The connection remains unchanged under a constant rescaling.
</details>
<details><summary>Hint 2</summary>
Distinguish the tensorial Ricci contraction from its scalar trace.
</details>
<details><summary>Full solution</summary>
The connection and curvature operator are unchanged. Sectional curvature divides by nine because the numerator acquires one metric factor and the denominator two. The bilinear Ricci tensor is unchanged as a trace of the curvature endomorphism. Scalar curvature divides by nine because taking the metric trace uses the rescaled inverse metric. These statements compare the same tangent vectors; changing to newly normalized unit vectors introduces the corresponding norm factors as well.
</details>

### Exercise 4.10 {#riemannian-curvature-ex-10}

Show from the scalar contraction that a three-dimensional metric with constant sectional curvature minus two has scalar curvature minus twelve.

<details><summary>Hint 1</summary>
There are three unordered pairs in an orthonormal three-frame.
</details>
<details><summary>Hint 2</summary>
Scalar curvature is twice the sum of those plane values.
</details>
<details><summary>Full solution</summary>
The three plane curvatures sum to minus six, and the factor two gives minus twelve. Equivalently the constant-curvature formula is $n(n-1)K$, which gives $3\cdot2\cdot(-2)=-12$. This is a contraction at each point under the stated constant-plane hypothesis. Merely knowing scalar curvature minus twelve would not justify reversing the argument to conclude every plane has curvature minus two.
</details>

<a id="section-273-sources-and-provenance"></a>
## Sources and provenance {#section-275-sources-and-provenance}

New L4 development continuing this book's connection and geodesic chapters, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, the curvature tensor and curvature contractions; and do Carmo, *Riemannian Geometry*, curvature and constant-curvature examples. The chosen sign convention is stated before every contraction, and the sphere and upper-half-plane signs are computed directly. The normal-coordinate proof uses the already proved local exponential theorem.

<a id="section-277-summary"></a>
## Summary {#section-279-summary}

Curvature is the tensorial covariant-derivative commutator with its bracket correction. Compatibility and zero torsion yield the pair antisymmetries, first Bianchi and pair exchange. Sectional curvature is a plane invariant; Ricci and scalar curvature are successive traces with distinct scaling rules. Flat polar, positive spherical and negative upper-half-plane computations show why coordinate coefficients, intrinsic curvature and extrinsic bending must remain separate.
