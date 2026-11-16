var e=`---
parent_id: book-smooth-manifolds
chapter_id: submanifolds-regular-values
title: "Submanifolds and the Regular Value Theorem"
level: graduate
license: CC BY-SA 4.0
---

# Submanifolds and the Regular Value Theorem {#section-1-submanifolds-and-the-regular-value-theorem}

A subset can look smooth in a drawing while carrying a singular crossing or an unsuitable topology. An embedded submanifold has a more precise property: suitable ambient coordinates turn the subset into a coordinate plane, and its own topology is the topology inherited from the ambient manifold. A regular fiber has exactly this form because a submersion becomes a coordinate projection.

This L4 chapter assumes [Differentials, Immersions and Submersions](differentials-immersions-submersions.md), including its constant-rank theorem and the named Euclidean inverse-function input. All manifolds are finite-dimensional real, Hausdorff, second-countable and without boundary. Subsets carry the subspace topology unless stated otherwise. We establish the embedded-submanifold structure, prove the regular-value theorem, identify tangent kernels and distinguish sufficient regularity hypotheses from necessary ones. No Sard theorem or transversality existence theorem is used here.

<a id="section-5-1-embedded-submanifolds-use-ambient-slice-charts"></a>
## 1. Embedded submanifolds use ambient slice charts {#section-7-1-embedded-submanifolds-use-ambient-slice-charts}

**Definition 6.1 (Embedded submanifold).** A subset $S\\subset M^m$ is an embedded submanifold of dimension $k$ if for every $p\\in S$ there is an ambient chart $x:U\\to V\\subset\\mathbb R^m$ such that

$$x(S\\cap U)=V\\cap(\\mathbb R^k\\times\\{0\\}).$$

Such a chart is a slice chart. We use a fixed dimension $k$ throughout a given submanifold, even when it has several connected components. The empty subset satisfies the local condition vacuously and can be regarded as an empty submanifold of any permitted dimension; no tangent-space calculation is being made at an empty point.

The first $k$ coordinates in a slice chart give a bijection from $S\\cap U$ to the open subset $\\{u:(u,0)\\in V\\}$ of $\\mathbb R^k$. This bijection is a homeomorphism for the subspace topology, since it is the restriction of the chart followed by the coordinate-plane identification. The resulting restricted charts cover $S$.

**Proposition 6.2 (Induced smooth structure).** These restricted charts make $S$ a smooth $k$-manifold. The inclusion $\\iota:S\\hookrightarrow M$ is smooth with injective differential, and the image of $d\\iota_p$ in a slice chart is $\\mathbb R^k\\times\\{0\\}$.

*Proof.* Subspaces of Hausdorff spaces are Hausdorff. Intersecting an ambient countable basis with $S$ gives a countable basis for its topology, so it is second-countable. The slice charts establish the local Euclidean condition.

On an overlap, a transition between restricted charts is obtained by inserting $(u,0)$ into the ambient smooth transition and retaining its first $k$ components. Its domain is open in the coordinate plane, and it is smooth as a composition of smooth maps. The inverse transition has the same description, so these charts define a smooth atlas. In slice coordinates, inclusion is $u\\mapsto(u,0)$. It is smooth and its derivative is the injective coordinate inclusion. The stated tangent-image description follows. ∎

A submanifold of dimension equal to the ambient dimension is locally open and hence an open subset. A zero-dimensional embedded submanifold is discrete in its subspace topology. These limiting cases follow from the same definition and need no separate geometric picture.

<a id="section-23-2-smoothness-into-the-subset-is-detectable-in-the-ambie"></a>
## 2. Smoothness into the subset is detectable in the ambient manifold {#section-25-2-smoothness-into-the-subset-is-detectable-in-the-ambie}

**Theorem 6.3 (Smooth factorization).** If $S\\subset M$ is embedded and $G:P\\to M$ is smooth with image contained in $S$, then the same set map $\\widetilde G:P\\to S$ is smooth. Conversely, smoothness of $\\widetilde G$ implies smoothness of $\\iota\\circ\\widetilde G$.

*Proof.* The converse follows from smooth inclusion and composition. For the forward implication, $\\widetilde G$ is continuous into the subspace topology: the inverse image of $S\\cap O$ is $G^{-1}(O)$ for every ambient open $O$. Around each target point choose a slice chart. Continuity allows a source neighborhood mapping into its domain. The coordinate expression for $\\widetilde G$ is the first $k$ components of the smooth ambient coordinate expression for $G$, so it is smooth. These local expressions cover the source. ∎

In particular a smooth ambient curve whose values lie in $S$ is smooth as a curve in $S$. Its ambient velocity belongs to the image of $T_pS$ under inclusion. Conversely every tangent vector of $S$ is represented by such a curve, by the tangent-space construction already proved. We may therefore identify $T_pS$ with its injective image inside $T_pM$, remembering that this is an inclusion of tangent spaces at the same ambient point.

The induced smooth structure is unique among embedded structures with the stated inclusion property. More directly, any two systems of ambient slice charts have smooth restricted transitions by Proposition 6.2, so their maximal atlases coincide. The subspace topology and ambient smooth structure jointly determine this embedded structure.

<a id="section-33-3-embeddings-are-maps-whose-images-have-this-structure"></a>
## 3. Embeddings are maps whose images have this structure {#section-35-3-embeddings-are-maps-whose-images-have-this-structure}

**Definition 6.4.** A smooth map $F:P\\to M$ is an embedding if it is an injective immersion and a homeomorphism from $P$ onto $F(P)$ with its subspace topology.

**Theorem 6.5 (Embedding and image).** An embedding identifies its source diffeomorphically with an embedded submanifold of the target. Conversely, the inclusion of an embedded submanifold is an embedding.

*Proof.* Fix $p\\in P$. The immersion normal form gives a source neighborhood $U$ and ambient coordinates in which $F|_U$ is a coordinate inclusion. The homeomorphism condition makes $F(U)$ open in the full image $F(P)$, so there is an ambient open set $O$ with $F(U)=O\\cap F(P)$. Shrink the normal-form target neighborhood inside $O$, and choose a smaller coordinate product about $F(p)$ whose coordinate-plane slice is contained in the local image $F(U)$. This is possible because that local image is open in the coordinate plane around $F(p)$.

Within this smaller product there are no additional branches from outside $U$, by the choice of $O$. The full image is therefore precisely the coordinate-plane slice there. These charts prove $F(P)$ embedded. In them $F$ is the identity between its source coordinates and the slice coordinates, so its inverse on the image is smooth. Conversely, an embedded inclusion is an injective immersion by Proposition 6.2 and a homeomorphism onto its subspace image by its topology. ∎

The homeomorphism requirement excludes an image that returns arbitrarily near itself in a way not reflected by its source topology. An immersion alone gives only a local inclusion about each source point. Even injectivity alone does not supply the global topology condition.

**Proposition 6.6 (Compact and proper criteria).** An injective immersion from a compact manifold into a Hausdorff manifold is an embedding. More generally, a proper injective immersion is an embedding, where proper means that inverse images of compact sets are compact.

*Proof.* A continuous bijection from a compact space onto a Hausdorff image is a homeomorphism: closed source subsets are compact, so their images are compact and hence closed. This proves the compact assertion.

For the proper assertion we prove $F$ is closed. Let $C$ be closed in the source and let $q\\notin F(C)$. Choose an ambient neighborhood of $q$ with compact closure $K$, using a relatively compact coordinate neighborhood. Properness makes $F^{-1}(K)$ compact; its closed subset $C\\cap F^{-1}(K)$ is compact. Its image is compact and closed in the Hausdorff target. The interior of $K$ minus that image is an open neighborhood of $q$ avoiding $F(C)$. Thus $F(C)$ is closed. An injective continuous closed map is a homeomorphism onto its image: its inverse takes source-closed sets to image-closed sets. The immersion hypothesis now completes the embedding definition. ∎

<a id="section-51-4-regular-values-give-embedded-fibers"></a>
## 4. Regular values give embedded fibers {#section-53-4-regular-values-give-embedded-fibers}

**Definition 6.7.** For smooth $F:M^m\\to N^n$, a point $p\\in M$ is regular if $dF_p$ is surjective. A target point $q\\in N$ is a regular value if every point of $F^{-1}(q)$ is regular. A value outside the image is regular by the universal quantifier over an empty fiber.

**Theorem 6.8 (Regular-value theorem).** If $q$ is a regular value and $F^{-1}(q)$ is nonempty, then $m\\ge n$ and $S=F^{-1}(q)$ is an embedded submanifold of dimension $m-n$. At every $p\\in S$,

$$T_pS=\\ker(dF_p)\\subset T_pM,$$

using the tangent inclusion. An empty fiber is simply the empty embedded subset.

*Proof.* Surjectivity at a fiber point forces $m\\ge n$. The submersion normal form gives coordinates centered at that point and at $q$ in which $F(u,v)=u$, with $u\\in\\mathbb R^n$ and $v\\in\\mathbb R^{m-n}$. Restrict the source chart so its image is in the selected target chart. In this neighborhood, $F=q$ is exactly $u=0$, a coordinate plane of dimension $m-n$. Reorder the coordinates if needed to match Definition 6.1. These slice charts at every fiber point establish embeddedness with the inherited topology and smooth structure.

In these coordinates the derivative is $(a,b)\\mapsto a$, whose kernel consists precisely of the tangent velocities $(0,b)$ to that plane. Coordinate changes preserve both the differential kernel and the tangent-image identification, so the equality is intrinsic. ∎

A manifold is Hausdorff, so the singleton $\\{q\\}$ is closed. Consequently every such fiber is also closed in $M$. Closed does not mean compact when the source is not compact, and embedded does not mean connected. Neither extra property is asserted by the theorem.

Regularity is sufficient, not necessary, for an individual fiber to be embedded. The function $x\\mapsto x^3$ has derivative zero at zero, yet its zero fiber is the embedded point $\\{0\\}$. One cannot reverse the theorem by inspecting the fiber alone.

<a id="section-69-5-graphs-and-independent-constraints"></a>
## 5. Graphs and independent constraints {#section-71-5-graphs-and-independent-constraints}

**Proposition 6.9 (Graphs).** The graph of a smooth $f:M\\to N$ is an embedded submanifold of $M\\times N$, diffeomorphic to $M$.

*Proof.* The graph map $\\Gamma(p)=(p,f(p))$ is smooth. Projection to the first factor is a continuous inverse on the graph, so it is a homeomorphism onto that image. Its differential is $v\\mapsto(v,df_pv)$, which is injective because the first component is $v$. The embedding theorem applies. The projection is also smooth as a map from the embedded graph, so it supplies the claimed diffeomorphism. ∎

For constraints $F=(F_1,\\ldots,F_n):M\\to\\mathbb R^n$, regularity means that the real linear functionals $dF_1,\\ldots,dF_n$ are independent at each fiber point. In Euclidean space these are the Jacobian rows. The regular fiber has tangent vectors satisfying all equations $dF_i(v)=0$. Each independent equation removes one dimension; merely counting written equations without checking independence is insufficient.

For two collections of constraints, stack their derivative rows and check independence of the combined collection. The regular-value theorem then applies to the combined map. This is a local independent-constraints statement, not a claim that any two arbitrary submanifolds intersect in the expected dimension.

<a id="section-79-6-worked-examples"></a>
## 6. Worked examples {#section-81-6-worked-examples}

<a id="section-81-worked-example-6-10-a-sphere-and-its-tangent-plane"></a>
### Worked example 6.10 — A sphere and its tangent plane {#section-83-worked-example-6-10-a-sphere-and-its-tangent-plane}

Let $F:\\mathbb R^{d+1}\\to\\mathbb R$ be $F(x)=\\sum_{j=1}^{d+1}x_j^2$, with $d\\ge1$. Its derivative is $dF_x(v)=2\\sum_jx_jv_j$. On $F^{-1}(1)$ the vector $x$ is nonzero, and choosing $v=x/2$ gives derivative value one. Thus one is a regular value and the sphere $S^d$ is embedded of dimension $d$.

At $p\\in S^d$, its tangent space is $\\{v:p\\cdot v=0\\}$. For $S^2$ at $(1,0,0)$ this is the plane $v_1=0$. The level equation itself is quadratic, but its first-order tangent constraint is linear. The fiber is compact because it is closed and bounded in Euclidean space, an additional Euclidean compactness argument beyond regularity.

<a id="section-87-worked-example-6-11-two-independent-circle-constraints"></a>
### Worked example 6.11 — Two independent circle constraints {#section-89-worked-example-6-11-two-independent-circle-constraints}

On $\\mathbb R^4$, define $F(x_1,x_2,y_1,y_2)=(x_1^2+x_2^2,y_1^2+y_2^2)$. Along the fiber at $(1,1)$, its derivative rows are $(2x_1,2x_2,0,0)$ and $(0,0,2y_1,2y_2)$. Each row is nonzero, and their disjoint coordinate blocks make them independent.

Hence the fiber is embedded of dimension $4-2=2$, and is the product $S^1\\times S^1$. A tangent vector $(a_1,a_2,b_1,b_2)$ satisfies $x_1a_1+x_2a_2=0$ and $y_1b_1+y_2b_2=0$. One free angular direction belongs to each factor. The parametrization by two angles is locally useful but not a single injective global chart: each angle is periodic.

<a id="section-93-worked-example-6-12-a-singular-constraint-has-crossing-"></a>
### Worked example 6.12 — A singular constraint has crossing branches {#section-95-worked-example-6-12-a-singular-constraint-has-crossing-}

For $H(x,y)=xy$, the zero fiber is the union of the two coordinate axes. The differential is $dH_{(x,y)}(a,b)=ya+xb$, which is nonzero at every nonorigin point of that fiber and zero at the origin. Away from the origin the regular local model applies, but zero is not a regular value.

The entire zero fiber is not an embedded submanifold of any fixed dimension. Near the origin it is not discrete, so dimension zero is impossible; it contains no ambient open neighborhood, so dimension two is impossible. If it were embedded of dimension one, both curves $t\\mapsto(t,0)$ and $t\\mapsto(0,t)$ would be smooth into it by Theorem 6.3. Their independent ambient velocities would both belong to its one-dimensional tangent image at zero, a contradiction. The kernel of $dH_0$ is the whole plane, but it cannot be interpreted as a tangent plane to this singular fiber through the regular-value theorem.

<a id="section-99-7-exercises"></a>
## 7. Exercises {#section-101-7-exercises}

### Exercise 6.1 {#smooth-manifolds-submanifolds-ex-1}

Find all regular values of $F:\\mathbb R\\to\\mathbb R$, $F(x)=x^2$. Include values outside its image.

<details><summary>Hint 1</summary>
Its only point with nonsurjective differential is zero.
</details>
<details><summary>Hint 2</summary>
A negative value has an empty fiber, not a critical point in that fiber.
</details>
<details><summary>Solution</summary>
Since $F'(x)=2x$, zero is the only critical source point, and its target value is zero. Every positive value has two nonzero preimages, both regular, so it is regular. Every negative value has empty fiber and is regular vacuously. Thus the regular values are precisely $\\mathbb R\\setminus\\{0\\}$. A positive fiber is a zero-dimensional embedded two-point manifold; the zero fiber is also an embedded point although zero is not a regular value.
</details>

### Exercise 6.2 {#smooth-manifolds-submanifolds-ex-2}

Show that the graph of $f(x)=x^2$ in the plane is a regular fiber, and find its tangent line at $(a,a^2)$.

<details><summary>Hint 1</summary>
Use $G(x,y)=y-x^2$ rather than treating a graph as an implicit picture.
</details>
<details><summary>Hint 2</summary>
The $y$ derivative is always one.
</details>
<details><summary>Solution</summary>
The graph is $G^{-1}(0)$. Its differential is $(u,v)\\mapsto-2xu+v$, which is surjective everywhere because its second coefficient is one. Hence the graph is embedded of dimension one. At $(a,a^2)$ the tangent kernel satisfies $v=2au$, so the line is spanned by $(1,2a)$. Differentiating the graph parametrization $(t,t^2)$ gives the same vector and confirms the two constructions agree.
</details>

### Exercise 6.3 {#smooth-manifolds-submanifolds-ex-3}

On $S^2\\subset\\mathbb R^3$, let $h(x,y,z)=z$. Prove zero is a regular value and identify the tangent to its equator at $(1,0,0)$.

<details><summary>Hint 1</summary>
At an equator point, the ambient vector $(0,0,1)$ lies in the sphere tangent plane.
</details>
<details><summary>Hint 2</summary>
Apply $dh$ to that vector, then intersect its kernel with the sphere tangent space.
</details>
<details><summary>Solution</summary>
For $p=(x,y,0)$ on the equator, $p\\cdot(0,0,1)=0$, so this vector lies in $T_pS^2$. The height derivative on it is one, proving surjectivity at every equator point. The regular fiber is embedded of dimension one. At $(1,0,0)$ the sphere tangent condition is $v_x=0$ and the height kernel condition is $v_z=0$. Their intersection is the line spanned by $(0,1,0)$, the equator's tangent direction there.
</details>

### Exercise 6.4 {#smooth-manifolds-submanifolds-ex-4}

Prove that the product of embedded submanifolds $S^k\\subset M^m$ and $T^\\ell\\subset N^n$ is embedded in $M\\times N$, and identify its tangent space.

<details><summary>Hint 1</summary>
Take the product of ambient slice charts and reorder coordinates.
</details>
<details><summary>Hint 2</summary>
A curve in the product consists of a curve in each factor.
</details>
<details><summary>Solution</summary>
In product slice charts, $S\\times T$ has coordinates $(u,0,v,0)$. Reordering places the $k+\\ell$ free entries first, giving the required coordinate-plane slice in dimension $m+n$. The product subspace topology agrees with the topology given by these charts, so the subset is embedded of dimension $k+\\ell$. Its tangent space identifies with $T_pS\\times T_qT$ inside $T_pM\\times T_qN$, either from these coordinates or from the paired curve velocities.
</details>

### Exercise 6.5 {#smooth-manifolds-submanifolds-ex-5}

For $G:\\mathbb R^3\\to\\mathbb R^2$, $G(x,y,z)=(x^2+y^2,z)$, describe the fiber at $(1,0)$ and its tangent space at $(a,b,0)$.

<details><summary>Hint 1</summary>
The derivative rows use separate spatial directions on that fiber.
</details>
<details><summary>Hint 2</summary>
Solve $2au+2bv=0$ and $w=0$.
</details>
<details><summary>Solution</summary>
The fiber is the unit circle in the plane $z=0$. Its derivative rows are $(2x,2y,0)$ and $(0,0,1)$, which are independent because $x^2+y^2=1$. Thus $(1,0)$ is regular and the fiber has dimension one. At $(a,b,0)$ the tangent consists of $(u,v,w)$ with $au+bv=0$ and $w=0$, equivalently the span of $(-b,a,0)$. The two written constraints remove two dimensions because their differentials are independent.
</details>

### Exercise 6.6 {#smooth-manifolds-submanifolds-ex-6}

Why does writing the line $y=0$ as the zero fiber of $F(x,y)=y^2$ not invalidate the regular-value theorem? Find another defining function for which zero is regular.

<details><summary>Hint 1</summary>
The theorem is an implication whose premise concerns the chosen map.
</details>
<details><summary>Hint 2</summary>
Compare $y^2$ with $y$.
</details>
<details><summary>Solution</summary>
For $F=y^2$, the differential is $2y\\,dy$ and vanishes on the whole zero fiber. Zero is not regular, so the theorem makes no assertion from that map. The fiber is nevertheless the embedded line. Using $G(x,y)=y$ defines the same subset and has differential $dy$, which is surjective everywhere. The theorem then applies and gives dimension one with tangent kernel $v_y=0$. Embeddedness of a set does not require every possible defining function to have a regular zero value.
</details>

### Exercise 6.7 {#smooth-manifolds-submanifolds-ex-7}

Show that an injective immersion $F:P\\to M$ with compact $P$ is a diffeomorphism onto its embedded image. Explain why compactness alone would not suffice without immersion.

<details><summary>Hint 1</summary>
Use compact-to-Hausdorff topology before applying the embedding theorem.
</details>
<details><summary>Hint 2</summary>
A local cusp remains a failure of differential injectivity even in a compact source construction.
</details>
<details><summary>Solution</summary>
Continuity and injectivity give a bijection from compact $P$ onto its Hausdorff image, and the compact-to-Hausdorff argument proves it is a homeomorphism. Together with immersion this is an embedding, so Theorem 6.5 supplies the smooth image structure and smooth inverse. Compactness proves only the topology assertion. It gives no derivative condition and cannot make a zero or noninjective differential injective. Therefore an argument omitting immersion has not established an embedding or its smooth local model.
</details>

### Exercise 6.8 {#smooth-manifolds-submanifolds-ex-8}

Let $F:M\\to\\mathbb R^r$ and $G:M\\to\\mathbb R^s$ be smooth. Assume the combined differential $d(F,G)_p$ is surjective at every point where $F(p)=0$ and $G(p)=0$. Determine the intersection's dimension and tangent space when it is nonempty.

<details><summary>Hint 1</summary>
Apply the regular-value theorem to a single map with target $\\mathbb R^{r+s}$.
</details>
<details><summary>Hint 2</summary>
A vector belongs to the combined kernel exactly when both component derivatives kill it.
</details>
<details><summary>Solution</summary>
The intersection is $(F,G)^{-1}(0,0)$, and the hypothesis says precisely that $(0,0)$ is regular. Thus it is embedded of dimension $\\dim M-r-s$ when nonempty. Its tangent space is $\\ker dF_p\\cap\\ker dG_p$. Separate surjectivity of the two component maps would not suffice: two identical scalar constraints are each regular but their combined differential has rank one rather than two. Independence of the stacked constraints is the needed hypothesis.
</details>

### Exercise 6.9 {#smooth-manifolds-submanifolds-ex-9}

Prove that the hyperbola $xy=1$ is a closed embedded one-dimensional submanifold of the plane and that its inclusion is proper. Is it compact?

<details><summary>Hint 1</summary>
For $H(x,y)=xy$, neither coordinate is zero on this fiber.
</details>
<details><summary>Hint 2</summary>
The inverse image of an ambient compact set under inclusion is its intersection with the closed subset.
</details>
<details><summary>Solution</summary>
The derivative $dH=(y,x)$ is nonzero on $xy=1$, so one is a regular value and the hyperbola is embedded of dimension one. It is closed as the inverse image of the closed singleton one. For any compact $K\\subset\\mathbb R^2$, its intersection with this closed hyperbola is closed in $K$ and hence compact, proving properness of inclusion. The hyperbola is unbounded, for it contains $(t,1/t)$ for every positive $t$, so it is not compact. Proper inclusion does not imply compact source when the target is noncompact.
</details>

### Exercise 6.10 {#smooth-manifolds-submanifolds-ex-10}

Explain why the closed disk $D=\\{(x,y):x^2+y^2\\le1\\}$ is not an embedded submanifold without boundary of the plane under Definition 6.1.

<details><summary>Hint 1</summary>
Its interior contains two-dimensional ambient neighborhoods.
</details>
<details><summary>Hint 2</summary>
A two-dimensional embedded submanifold of a two-dimensional ambient manifold must be open.
</details>
<details><summary>Solution</summary>
At an interior point the subset contains an ambient neighborhood, so a slice chart there cannot have dimension less than two: a lower-dimensional coordinate plane contains no open Euclidean set. Thus any fixed embedded dimension would have to be two. But a dimension-two slice in the plane is the whole ambient chart image, forcing the subset to be open near every point. Boundary-circle points of the disk have no ambient neighborhood contained in it, a contradiction. The disk is naturally a manifold with boundary, but that is a different definition from the no-boundary convention used here.
</details>

<a id="section-241-8-summary-and-continuation"></a>
## 8. Summary and continuation {#section-243-8-summary-and-continuation}

An embedded submanifold combines a local coordinate-plane condition with the inherited topology. Slice charts construct its unique induced smooth structure, and ambient smooth maps landing in it factor smoothly. An embedding supplies exactly this kind of image; compactness or properness can supply its required topology when injective immersion is already known. A regular fiber is embedded of the predicted dimension and has tangent space equal to the differential kernel. Critical fibers require their own analysis: some remain smooth, while others cross or change local dimension.

The next chapter assembles the pointwise tangent spaces into a smooth vector bundle. Slice tangent inclusions and differential kernels will then become examples of bundle maps and subbundles when their ranks are constant. No global bundle statement has been assumed in the pointwise proofs above.

*Source provenance: original Euler L4 exposition, proofs and exercises for the commissioned Smooth Manifolds text, continuing the preceding intrinsic differential and constant-rank chapter. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. Existing Quarto and point-set manifold manuscripts remain in place. CC BY-SA 4.0. Draft.*
`;export{e as default};