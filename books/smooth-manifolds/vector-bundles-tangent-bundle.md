
# Vector Bundles and the Tangent Bundle {#section-1-vector-bundles-and-the-tangent-bundle}

Each tangent space is a vector space, but vectors based at different manifold points cannot simply be added. A vector bundle records how such a family varies smoothly. Its local coordinates separate a base point from a vector in its fiber; on overlaps the vector coordinates change linearly, with coefficients depending smoothly on the base point. A tangent bundle is the central example, whose transition matrices are derivatives of manifold coordinate changes.

This L4 chapter assumes [Submanifolds and the Regular Value Theorem](submanifolds-regular-values.md), intrinsic tangent spaces, smooth maps and finite-dimensional linear algebra. All bundles here are real, smooth and of finite constant rank over a Hausdorff second-countable smooth manifold without boundary. A bundle's total space is also without boundary; the fibers are full vector spaces, not bounded disks. We construct the tangent bundle, prove frame and transition criteria, and prove the kernel/image subbundle theorem with its constant-rank assumption. Characteristic classes and sphere-field obstruction theorems are outside this chapter's proved scope.

<a id="section-5-1-local-products-must-preserve-the-fiber-operations"></a>
## 1. Local products must preserve the fiber operations {#section-7-1-local-products-must-preserve-the-fiber-operations}

**Definition 7.1 (Smooth vector bundle).** A rank-$r$ vector bundle over $M$ consists of a smooth manifold $E$, a smooth surjection $\pi:E\to M$, a real vector-space structure on each fiber $E_p=\pi^{-1}(p)$, and local trivializations

$$\Phi_\alpha:\pi^{-1}(U_\alpha)\longrightarrow U_\alpha\times\mathbb R^r.$$

Each $\Phi_\alpha$ is a diffeomorphism, respects projection to $U_\alpha$ and restricts to a linear isomorphism on every fiber. The open sets $U_\alpha$ cover $M$. Fibers at different points have separate zeroes, scalar multiplications and additions. The rank is $r$ and the total dimension is $\dim M+r$.

The product bundle $M\times\mathbb R^r$ has a global trivialization. A general bundle is called trivial if there is a global fiberwise linear diffeomorphism to this product respecting the base projection. Local product descriptions alone do not imply a global one.

On an overlap, two trivializations have the form

$$\Phi_\beta\Phi_\alpha^{-1}(p,v)=(p,g_{\beta\alpha}(p)v),$$

where $g_{\beta\alpha}(p)\in GL_r(\mathbb R)$. The matrix entries are smooth: evaluate the transition on each fixed standard basis vector and read its vector coordinates. Conversely, a smooth matrix function with invertible values gives a smooth transition, with smooth inverse because matrix inversion is given by the adjugate divided by the nonvanishing determinant.

On triple overlaps these matrices satisfy

$$g_{\gamma\beta}(p)g_{\beta\alpha}(p)=g_{\gamma\alpha}(p),\qquad
 g_{\alpha\alpha}=I,\qquad g_{\alpha\beta}=g_{\beta\alpha}^{-1}.$$

The order follows our convention that $g_{\beta\alpha}$ converts an alpha-coordinate column into a beta-coordinate column. Reversing the index convention requires reversing the written product accordingly.

<a id="section-28-2-transition-functions-construct-bundles"></a>
## 2. Transition functions construct bundles {#section-30-2-transition-functions-construct-bundles}

**Theorem 7.2 (Gluing from transitions).** Suppose an open cover $U_\alpha$ of $M$ and smooth invertible matrices $g_{\beta\alpha}$ on overlaps satisfy the identities above. Then identifying

$$(p,v)_\alpha\sim(p,g_{\beta\alpha}(p)v)_\beta$$

constructs a rank-$r$ smooth vector bundle with those local trivializations.

*Proof.* Identity, inverse and cocycle laws make the identification an equivalence relation; every chain of identifications at the same base point reduces to the stated direct change. Let $E$ be the quotient set of the disjoint products. Projection to $p$ is well defined, and every class over $p\in U_\alpha$ has exactly one alpha representative. This gives a bijection between $\pi^{-1}(U_\alpha)$ and $U_\alpha\times\mathbb R^r$.

Give $E$ the quotient topology. The preimage of $\pi^{-1}(U_\alpha)$ is open in every product. If $O$ is open in one product, its saturation has open intersections with all other products, because those intersections are carried by smooth transition homeomorphisms on open overlaps. Hence the quotient map is open and the displayed bijections are homeomorphisms. Their transitions are the prescribed smooth maps, so product base charts and these trivializations provide a smooth atlas.

For completeness, the total space has the required global separation and countability. Distinct base points have disjoint open neighborhoods whose inverse images separate any points over them. Two distinct points of one fiber lie in the same trivialization and have disjoint neighborhoods there, which are open in $E$. Thus $E$ is Hausdorff. The base has a countable subcover by trivializing neighborhoods: refine the cover by a countable basis and choose one original member for each basis element that fits inside a member. The corresponding inverse images form a countable open cover, each second-countable as a product. The union of their countable bases is a countable basis of $E$.

Fiberwise addition and scalar multiplication descend from the product operations because every transition is linear. In the local coordinates the projection is ordinary product projection, hence smooth and surjective. This proves every requirement. ∎

The same argument applies when fibers and local product bijections are already given as a set-theoretic family. Smooth compatible transitions then define the unique topology and smooth structure for which those bijections are trivializations. It is this version we use for tangent spaces.

<a id="section-46-3-assemble-the-tangent-spaces"></a>
## 3. Assemble the tangent spaces {#section-48-3-assemble-the-tangent-spaces}

Let $TM=\coprod_{p\in M}T_pM$ be the disjoint union and $\pi(v_p)=p$. For a chart $x:U\to\mathbb R^n$, send a tangent vector to its base point and its coordinate coefficients:

$$\Phi_x(v_p)=\big(p,(v_px^1,\ldots,v_px^n)\big).$$

Each fiber map is a linear isomorphism by the coordinate-basis theorem. Between charts $x,y$, the vector column changes by

$$v_y=D(y\circ x^{-1})_{x(p)}v_x.$$

The matrix is smooth in $p$, is invertible, and satisfies the cocycle law by the chain rule. The gluing construction therefore gives $TM$ a smooth rank-$n$ vector-bundle structure over $M$. In total-space coordinates this transition is

$$(a,v)\longmapsto\big(y\circ x^{-1}(a),D(y\circ x^{-1})_a v\big).$$

It is a smooth map between open subsets of $\mathbb R^{2n}$, with inverse obtained by interchanging $x$ and $y$. Thus the total tangent bundle has dimension $2n$. Fiber coordinate changes are linear, even though their dependence on the base coordinates need not be linear.

The zero section $0_M:p\mapsto0_p$ is smooth because it is locally $p\mapsto(p,0)$. It is an embedding: projection is a continuous inverse onto its image, and its differential in these coordinates is the injective map $v\mapsto(v,0)$. Its image is consequently an embedded copy of $M$ in $TM$.

**Proposition 7.3 (Differentials form a smooth bundle map).** For smooth $F:M\to N$, the map

$$dF:TM\to TN,\qquad v_p\mapsto dF_pv_p$$

is smooth, is linear on fibers and lies over $F$, meaning $\pi_N\circ dF=F\circ\pi_M$.

*Proof.* In source and target tangent charts it is $(a,v)\mapsto(f(a),Df_a v)$, where $f$ is the smooth coordinate expression of $F$. Its components are smooth functions of $(a,v)$, and the formula is linear in $v$. The base projection identity follows from the definition of $dF_p$. ∎

This map generally covers a map between different bases. Calling its image a subbundle over $M$ without accounting for those bases would be ambiguous. Pullback bundles below supply the correct common-base formulation when needed.

<a id="section-74-4-frames-and-sections"></a>
## 4. Frames and sections {#section-76-4-frames-and-sections}

A smooth section is a smooth $s:M\to E$ satisfying $\pi\circ s=\operatorname{id}_M$. In a trivialization it has the form $s(p)=(p,a_\alpha(p))$, so smoothness is equivalent to smoothness of its coefficient functions. On overlaps they satisfy $a_\beta=g_{\beta\alpha}a_\alpha$.

A local frame is a list of smooth sections $e_1,\ldots,e_r$ over an open set whose values form a basis of every fiber there. A trivialization gives such a frame by taking the preimages of the standard basis. Conversely, a local frame gives a trivialization

$$(p,a_1,\ldots,a_r)\longmapsto\sum_i a_i e_i(p).$$

To justify the inverse's smoothness, write these sections in any existing local trivialization. Their coefficient columns form a smooth invertible matrix. Its inverse is smooth, so coefficients relative to the frame are smooth as well. This verifies both directions rather than merely using pointwise bases.

**Corollary 7.4.** A rank-$r$ bundle is trivial exactly when it admits a global smooth frame. In rank one, this is equivalent to a nowhere-zero smooth section.

*Proof.* Apply the preceding frame/trivialization correspondence over the whole base. In rank one any nonzero fiber vector is a basis, so a nowhere-zero section is precisely a one-element frame. ∎

For $TM$, chart coordinate vectors form local frames, but a global frame need not exist. A smooth tangent section is a smooth vector field. Global questions about such sections depend on the transition functions, not just on the dimensions of the individual tangent spaces.

<a id="section-90-5-pullback-bundles-and-constant-rank-maps"></a>
## 5. Pullback bundles and constant-rank maps {#section-92-5-pullback-bundles-and-constant-rank-maps}

For a smooth $F:P\to M$ and a bundle $E\to M$, define

$$F^*E=\{(p,e):F(p)=\pi(e)\}\longrightarrow P.$$

A trivialization of $E$ over $U$ gives one over $F^{-1}(U)$ by retaining the same fiber coordinates. Its transitions are $g_{\beta\alpha}\circ F$, which are smooth and satisfy the cocycle law. Theorem 7.2 therefore supplies the pullback's smooth bundle structure. Its fiber at $p$ is a copy of $E_{F(p)}$. In particular $dF$ can be read as a bundle map $TP\to F^*TM$ over the identity of $P$.

A bundle map over the identity from $E\to M$ to $H\to M$ is smooth, preserves the base and is linear on each fiber. In local frames it is $(p,v)\mapsto(p,A(p)v)$ for a smooth matrix $A$. A subbundle is a fiberwise linear subset locally expressible, after a smooth change of frame, as a fixed coordinate subspace.

**Theorem 7.5 (Constant-rank kernel and image).** If such a bundle map has rank $s$ at every base point, its fiberwise kernel and image are smooth subbundles of ranks $r-s$ and $s$, where $r$ is the source rank.

*Proof.* Near any base point, permute source and target frame vectors so an $s$ by $s$ upper-left matrix block $B(p)$ is invertible throughout a neighborhood. Write the first $s$ rows as $[B\ C]$. The first $s$ full columns of $A$ are independent and span its image, because its rank is exactly $s$. They are smooth image-frame sections. Adjoining the last target standard basis columns extends them to a full frame: its matrix has block form $\left[\begin{smallmatrix}B&0\\D&I\end{smallmatrix}\right]$ and invertible determinant.

For each remaining source coordinate vector $e_j$, the vector with coefficient blocks $(-B^{-1}Ce_j,e_j)$ belongs to the kernel. Indeed its top $s$ output entries vanish, and every other output row is a linear combination of the first $s$ rows because rank is $s$; thus every output entry vanishes. These smooth vectors are independent and span the kernel by solving the top equations. Adjoining the first $s$ source coordinate vectors extends them to a full frame, with invertible block triangular change matrix. Hence both subsets meet the subbundle definition. If $s=0$, the map is zero and the assertions are immediate. Empty source or target blocks cause no change to the argument. ∎

This is a bundle theorem about linear maps in each fiber, with smoothly varying matrices. Its constant-rank hypothesis concerns every point of the neighborhood. A family with changing kernel dimension cannot be a fixed-rank subbundle there.

<a id="section-108-6-worked-examples"></a>
## 6. Worked examples {#section-110-6-worked-examples}

<a id="section-110-worked-example-7-6-the-circle-tangent-bundle-is-trivial"></a>
### Worked example 7.6 — The circle tangent bundle is trivial {#section-112-worked-example-7-6-the-circle-tangent-bundle-is-trivial}

From the sphere tangent calculation, $T_{(x,y)}S^1$ consists of vectors perpendicular to $(x,y)$. The vector $e(x,y)=(-y,x)$ is tangent, smooth and never zero. Hence it is a global frame of this rank-one bundle. The explicit trivialization sends $(p,a)$ to $a(-y,x)$ at $p=(x,y)$.

Its inverse coefficient is $a=v\cdot(-y,x)$, because $(-y,x)$ has squared length one on the circle. Both formulas are smooth in ambient coordinates and hence in the bundle charts. A circle has no single global real coordinate chart, but its tangent bundle still has a global frame. Those are different kinds of global choice.

<a id="section-116-worked-example-7-7-a-twisted-line-bundle-has-no-global-"></a>
### Worked example 7.7 — A twisted line bundle has no global frame {#section-118-worked-example-7-7-a-twisted-line-bundle-has-no-global-}

Take equivalence classes of $(t,a)\in\mathbb R\times\mathbb R$ under $(t,a)\sim(t+n,(-1)^na)$ for integer $n$, and project to $e^{2\pi it}\in S^1$. Over any sufficiently short open arc, choose a real lift $t$ and use $a$ as fiber coordinate. On overlap components the lifts differ by a locally constant integer $n$, so the transition is the constant scalar $(-1)^n$. The gluing theorem makes this a smooth line bundle, the Möbius line bundle.

A section corresponds on the real lift to a smooth function $a(t)$ satisfying $a(t+1)=-a(t)$. If it never vanished, then $a(0)$ and $a(1)$ would have opposite signs, contradicting the intermediate value theorem on $[0,1]$. Thus no nowhere-zero smooth section exists, and Corollary 7.4 proves the bundle nontrivial. This is an elementary line-bundle obstruction; no characteristic-class theorem is being cited as a substitute for a proof.

<a id="section-122-worked-example-7-8-smooth-kernels-and-rank-failure"></a>
### Worked example 7.8 — Smooth kernels and rank failure {#section-124-worked-example-7-8-smooth-kernels-and-rank-failure}

Over the line, let a map from the trivial rank-two bundle to the trivial line bundle have fiber matrix $A(t)=[1\ t]$. It is surjective at every $t$. Its kernel is the line spanned by the smooth nowhere-zero vector $(-t,1)$, a trivial kernel subbundle. The formula $(a,b)\mapsto a+tb$ directly confirms the kernel and shows how its line rotates while its dimension remains fixed.

By contrast, fiber multiplication by $t$ from a trivial line bundle to itself has kernel zero for $t\ne0$ and the whole fiber at zero. Its image has rank one away from zero and rank zero there. Neither family is a fixed-rank subbundle over a neighborhood of zero. Smoothness of the matrix alone does not remove this changing-dimension obstruction.

<a id="section-128-7-exercises"></a>
## 7. Exercises {#section-130-7-exercises}

### Exercise 7.1 {#smooth-manifolds-bundles-ex-1}

Derive the transition cocycle identity from three trivializations, stating which matrix converts which coordinate column.

<details><summary>Hint 1</summary>
Convert an alpha column first to beta coordinates and then to gamma coordinates.
</details>
<details><summary>Hint 2</summary>
The result must equal the direct alpha-to-gamma conversion on every vector.
</details>
<details><summary>Solution</summary>
By convention $v_\beta=g_{\beta\alpha}v_\alpha$ and $v_\gamma=g_{\gamma\beta}v_\beta$. Substitution gives $v_\gamma=g_{\gamma\beta}g_{\beta\alpha}v_\alpha$. Direct conversion gives $g_{\gamma\alpha}v_\alpha$. Equality for every column proves $g_{\gamma\beta}g_{\beta\alpha}=g_{\gamma\alpha}$. Identity conversion gives $g_{\alpha\alpha}=I$, and the two-way identity gives inverse matrices. Keeping the conversion direction explicit prevents an incorrect order of multiplication.
</details>

### Exercise 7.2 {#smooth-manifolds-bundles-ex-2}

Prove $T\mathbb R^n$ is the trivial rank-$n$ bundle and write the differential bundle map of a smooth $f:\mathbb R^n\to\mathbb R^m$ in that trivialization.

<details><summary>Hint 1</summary>
Use the global standard coordinate functions and their coordinate derivations.
</details>
<details><summary>Hint 2</summary>
The base point changes to $f(x)$, while the vector changes by its Jacobian.
</details>
<details><summary>Solution</summary>
The map $v_x\mapsto(x,(v_xx^1,\ldots,v_xx^n))$ is the tangent trivialization from the single global standard chart. It identifies the bundle with $\mathbb R^n\times\mathbb R^n$. In these coordinates $df(x,v)=(f(x),Df_xv)$, a smooth fiberwise linear map covering $f$. It does not generally preserve the base point, so it is not a bundle map over an identity unless the base map is an identity.
</details>

### Exercise 7.3 {#smooth-manifolds-bundles-ex-3}

For a vector bundle $E\to M$, show that the zero section is an embedded submanifold of dimension $\dim M$.

<details><summary>Hint 1</summary>
Every trivialization turns the zero section into the slice $U\times\{0\}$.
</details>
<details><summary>Hint 2</summary>
The projection is a continuous inverse from the section image back to the base.
</details>
<details><summary>Solution</summary>
A zero section is smooth because its local expression is $p\mapsto(p,0)$. It is injective, its differential is the coordinate inclusion, and projection is a continuous inverse onto its image. Thus it is an embedding. Equivalently its image satisfies the embedded slice-chart definition directly in every bundle trivialization. Its dimension is the base dimension, while the ambient total dimension is $\dim M+r$.
</details>

### Exercise 7.4 {#smooth-manifolds-bundles-ex-4}

Let $e_1,\ldots,e_r$ be a frame, written as a row of basis sections, and let a new frame be $e'=eB$ for a smooth invertible matrix $B$. How do the coefficient columns of a section transform?

<details><summary>Hint 1</summary>
Write the same section as $s=ea=e'a'$.
</details>
<details><summary>Hint 2</summary>
A basis change and a coefficient change must cancel in their product.
</details>
<details><summary>Solution</summary>
Substituting $e'=eB$ gives $ea=eBa'$. Independence of the old frame forces $a=Ba'$, hence $a'=B^{-1}a$. The inverse matrix is smooth because its determinant never vanishes. Thus the new coefficients are smooth whenever the old ones are. The direction of this inverse is essential: transforming the basis and the coefficient column by the same matrix would generally change the section.
</details>

### Exercise 7.5 {#smooth-manifolds-bundles-ex-5}

Show that $a(t)=\sin(\pi t)$ defines a smooth section of the Möbius line bundle. Locate its zeroes on the base circle.

<details><summary>Hint 1</summary>
Check the anti-periodic relation under $t\mapsto t+1$.
</details>
<details><summary>Hint 2</summary>
All integer values of $t$ project to the same point of the circle.
</details>
<details><summary>Solution</summary>
Since $\sin(\pi(t+1))=-\sin(\pi t)$, the pairs $(t,a(t))$ define a well-defined section under the quotient relation. Smoothness follows in each local lift chart. Its lifted zeroes are exactly the integers, which all project to the base point one in the complex unit-circle notation. Thus this smooth section has one zero on the base. Existence of sections, including this one and the zero section, does not imply existence of a nowhere-zero section or a global frame.
</details>

### Exercise 7.6 {#smooth-manifolds-bundles-ex-6}

Describe the pullback of a trivial bundle $M\times\mathbb R^r$ along any smooth $F:P\to M$. Give a global trivialization.

<details><summary>Hint 1</summary>
A pullback point is $(p,(F(p),v))$.
</details>
<details><summary>Hint 2</summary>
The fiber coordinate $v$ is already globally defined.
</details>
<details><summary>Solution</summary>
The map $(p,(F(p),v))\mapsto(p,v)$ is a fiberwise linear bijection from the pullback to $P\times\mathbb R^r$. Its inverse is $(p,v)\mapsto(p,(F(p),v))$. Both are smooth in the pullback product charts, so this is a global bundle trivialization. No injectivity, surjectivity or rank condition on $F$ is needed. Pulling back a trivial bundle preserves its global frame by composition.
</details>

### Exercise 7.7 {#smooth-manifolds-bundles-ex-7}

For the bundle map over $\mathbb R$ with matrix $A(t)=\left[\begin{smallmatrix}1&t\\0&0\end{smallmatrix}\right]$, find smooth frames for its kernel and image and verify constant rank.

<details><summary>Hint 1</summary>
The first column never vanishes and the second is $t$ times it.
</details>
<details><summary>Hint 2</summary>
Solve $a+tb=0$ for the source coordinates.
</details>
<details><summary>Solution</summary>
Its rank is one at every point. The kernel has frame $(-t,1)$, since precisely the pairs $(-tb,b)$ map to zero. The image has frame $(1,0)$, since every output is $(a+tb,0)$ and every such first component occurs. Both frames are smooth and nowhere zero. They exhibit rank-one subbundles of the two trivial rank-two bundles, in agreement with Theorem 7.5.
</details>

### Exercise 7.8 {#smooth-manifolds-bundles-ex-8}

Why is fiber multiplication by $t^2$ over $\mathbb R$ not an isomorphism of line bundles, even though it is an isomorphism over the punctured base?

<details><summary>Hint 1</summary>
Inspect the fiber map at zero before trying to write an inverse.
</details>
<details><summary>Hint 2</summary>
A bundle isomorphism must be invertible on every fiber and have a smooth total inverse.
</details>
<details><summary>Solution</summary>
At zero the map sends the whole one-dimensional fiber to zero, so it is not even a fiberwise bijection there. On $\mathbb R\setminus\{0\}$ the inverse is multiplication by $t^{-2}$, a smooth function on that punctured base, so the restriction is an isomorphism. It cannot extend to a bundle inverse at zero because the original fiber map loses all vectors there. This is a rank failure, not merely an inconvenient formula for a potentially existing inverse.
</details>

### Exercise 7.9 {#smooth-manifolds-bundles-ex-9}

Show that the tangent bundle of $M\times N$ identifies smoothly with the paired family of $T_pM\times T_qN$ over $(p,q)$.

<details><summary>Hint 1</summary>
Differentiate the two product projections to define the map intrinsically.
</details>
<details><summary>Hint 2</summary>
In product charts the tangent coordinate transition is block diagonal.
</details>
<details><summary>Solution</summary>
Send $v\in T_{(p,q)}(M\times N)$ to $(d\pi_Mv,d\pi_Nv)$. Product coordinates identify this with splitting a coefficient column into its $M$ and $N$ blocks, so it is a linear isomorphism in each fiber. Both it and its inverse are smooth in product tangent charts. Transition derivatives are block diagonal with the separate chart-transition Jacobians, so these local identifications agree on overlaps. The bundle has rank $\dim M+\dim N$ over the product base.
</details>

### Exercise 7.10 {#smooth-manifolds-bundles-ex-10}

If $F:M\to N$ is a diffeomorphism, prove $dF:TM\to TN$ is a diffeomorphism and a fiberwise linear isomorphism covering $F$.

<details><summary>Hint 1</summary>
The differential bundle map is already proved smooth.
</details>
<details><summary>Hint 2</summary>
Apply the intrinsic chain rule to $F^{-1}\circ F$ and $F\circ F^{-1}$.
</details>
<details><summary>Solution</summary>
The maps $dF$ and $d(F^{-1})$ are smooth by Proposition 7.3. The chain rule gives their two composites as the identity maps on $TM$ and $TN$. They are therefore smooth inverses. Their fiber maps are linear and inverse to one another at corresponding base points, and their projections cover $F$ and $F^{-1}$. Thus the tangent construction respects diffeomorphisms on both the total spaces and their vector-bundle structures.
</details>

<a id="section-270-8-summary-and-continuation"></a>
## 8. Summary and continuation {#section-272-8-summary-and-continuation}

A smooth vector bundle is a locally trivial family of vector spaces with smooth linear transition maps. Cocycle identities allow its construction and keep conversion conventions consistent. The tangent bundle uses coordinate-change Jacobians as those transitions; differentials are smooth fiberwise linear maps covering their original base maps. Frames characterize triviality, pullbacks change the base, and constant rank makes kernels and images into smooth subbundles. The circle and Möbius examples show why local rank and global twisting are separate issues.

The next chapter develops smooth vector fields as tangent sections and proves their local flow properties from a stated Euclidean ordinary-differential-equation theorem. No existence of a flow has been inferred solely from a smooth bundle section here.

*Source provenance: original expanded Euler L4 treatment of the vector-bundle scope in Quarto Topology chapter 17, whose source and companion exposition remain intact. Tangent and submanifold prerequisites are the actual earlier chapters of this book. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. Exercises and worked derivations are original. CC BY-SA 4.0. Draft.*
