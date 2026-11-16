
# Differentials, Immersions and Submersions {#section-1-differentials-immersions-and-submersions}

A smooth map carries a velocity at its source to a velocity at its target. Its differential is this linear transport at a specified point. The rank of that transport distinguishes maps that locally include every source direction from maps that locally cover every target direction. A constant-rank theorem makes those descriptions precise by choosing coordinates in which the map becomes an inclusion followed by a projection.

This L4 chapter assumes [Tangent Vectors and the Tangent Space](tangent-vectors-spaces.md), finite-dimensional linear algebra and multivariable calculus. All manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary. Maps are smooth. The **Euclidean smooth inverse-function theorem** is a named input: a smooth map between open subsets of the same Euclidean dimension, with invertible derivative at a point, restricts near that point to a diffeomorphism between open neighborhoods. We prove the manifold and constant-rank consequences from that input. Neither a global inverse nor any classification theorem is inferred from a derivative at one point.

<a id="section-5-1-define-the-differential-without-choosing-coordinates"></a>
## 1. Define the differential without choosing coordinates {#section-7-1-define-the-differential-without-choosing-coordinates}

Let $F:M\to N$ be smooth and $p\in M$. A smooth germ $h$ at $F(p)$ pulls back to the germ $h\circ F$ at $p$. Continuity of $F$ ensures that its composition is defined on a neighborhood of $p$. If $v\in T_pM$ is a derivation, define

$$(dF_pv)(h)=v(h\circ F).$$

This is a derivation at $F(p)$. Indeed real linearity follows from that of $v$, and

$$v((h\circ F)(k\circ F))=h(F(p))v(k\circ F)+k(F(p))v(h\circ F).$$

Thus $dF_p:T_pM\to T_{F(p)}N$ is well defined and linear. The basepoint of the target vector is $F(p)$; the definition does not identify tangent spaces belonging to different points.

In the curve model, if $v$ is represented by $\gamma$ through $p$, then $dF_pv$ is represented by $F\circ\gamma$. Applying either description to a target germ $h$ gives $(h\circ F\circ\gamma)'(0)$. This also proves directly that the curve construction is independent of the representative.

Choose source coordinates $x$ and target coordinates $y$. Applying the definition to each $y^a$ gives the coordinate formula

$$(dF_pv)^a=\sum_i\frac{\partial(y^a\circ F\circ x^{-1})}{\partial x^i}(x(p))v^i.$$

Consequently the matrix of the differential is exactly the Jacobian of the coordinate expression. Coordinate changes multiply this matrix on its left and right by invertible transition matrices. Its rank, injectivity and surjectivity are therefore intrinsic.

**Proposition 5.1 (Chain rule and identities).** For smooth $F:M\to N$ and $G:N\to P$,

$$d(G\circ F)_p=dG_{F(p)}\circ dF_p,\qquad d(\operatorname{id}_M)_p=\operatorname{id}_{T_pM}.$$

*Proof.* Applied to a germ $h$ at $G(F(p))$, the left-hand side is $v(h\circ G\circ F)$. Applying the right-hand side to the same germ gives exactly this value by two pullbacks. The identity formula follows by pulling back a germ along the identity. ∎

If $F$ is a diffeomorphism, applying this rule to its inverse shows that every $dF_p$ is an isomorphism. The converse holds locally when dimensions agree; global bijectivity needs separate hypotheses.

<a id="section-33-2-rank-and-maximal-rank-conditions"></a>
## 2. Rank and maximal-rank conditions {#section-35-2-rank-and-maximal-rank-conditions}

**Definition 5.2.** The rank of $F$ at $p$ is the dimension of the image of $dF_p$. An **immersion** has injective differential at every source point. A **submersion** has surjective differential at every source point. A map is an immersion or submersion *at a point* when only that point's differential has the corresponding property.

For $\dim M=m$ and $\dim N=n$, an immersion can exist only if $m\le n$, and a submersion only if $m\ge n$. These are linear dimension restrictions, not existence theorems. When $m=n$, either maximal-rank condition means the differential is invertible.

**Proposition 5.3 (Rank cannot drop immediately below its value).** If $F$ has rank $r$ at $p$, it has rank at least $r$ throughout some neighborhood of $p$.

*Proof.* In coordinate matrices, rank $r>0$ supplies a nonzero $r$ by $r$ minor. Its determinant is continuous and remains nonzero sufficiently near $p$. Hence the neighboring rank is at least $r$. If $r=0$, the assertion is automatic. ∎

Thus immersion and submersion conditions are open conditions at a point: once the largest possible rank is reached, it persists nearby. A smaller rank need not persist. The function $x\mapsto x^2$ has rank zero at zero and rank one at every nearby nonzero point. We will explicitly assume constant rank whenever the normal-form theorem requires it.

<a id="section-45-3-the-manifold-inverse-function-theorem"></a>
## 3. The manifold inverse-function theorem {#section-47-3-the-manifold-inverse-function-theorem}

**Theorem 5.4 (Local inverse).** Suppose $\dim M=\dim N$ and $dF_p$ is an isomorphism. Then there are open neighborhoods $U$ of $p$ and $V$ of $F(p)$ such that $F:U\to V$ is a diffeomorphism.

*Proof.* Select charts around the two points and restrict the source so its image is in the target chart. The coordinate expression has invertible derivative by the Jacobian description. Apply the named Euclidean inverse-function theorem to obtain smaller open coordinate neighborhoods and a smooth inverse. Composing this inverse with the two chart maps gives a smooth inverse on the corresponding manifold neighborhoods. ∎

A map with such neighborhoods at every point is a local diffeomorphism. It is an open map, because the image of an open set is covered by its images inside local diffeomorphism neighborhoods, each open in the target. It need not be injective: $t\mapsto(\cos t,\sin t)$ is a local diffeomorphism from the line to the circle and repeats after every full turn.

If a local diffeomorphism is also globally bijective, it is a diffeomorphism. Its local smooth inverses agree with the unique set-theoretic inverse, so that inverse is smooth on an open cover of the target. This uses bijectivity explicitly rather than deriving it from local differentiation.

<a id="section-55-4-constant-rank-produces-a-normal-form"></a>
## 4. Constant rank produces a normal form {#section-57-4-constant-rank-produces-a-normal-form}

**Theorem 5.5 (Constant-rank theorem).** Suppose $F:M^m\to N^n$ has constant rank $r$ on a neighborhood of $p$. There are local coordinates centered at $p$ and $F(p)$ in which

$$F(u_1,\ldots,u_m)=(u_1,\ldots,u_r,0,\ldots,0).$$

*Proof.* Work in initial Euclidean coordinates centered at the two points. For $r>0$, permute coordinates so the upper-left $r$ by $r$ derivative minor is invertible. Write the coordinate expression as $f=(f_1,\ldots,f_n)$ and introduce the source map

$$\Phi(x)=(f_1(x),\ldots,f_r(x),x_{r+1},\ldots,x_m).$$

Its derivative is block triangular with the chosen invertible minor and an identity block, so it is invertible at zero. The Euclidean inverse-function theorem makes $\Phi$ a local coordinate change. In these new coordinates write

$$g=f\circ\Phi^{-1}=(u_1,\ldots,u_r,g_{r+1}(u,v),\ldots,g_n(u,v)),$$

where $u$ has $r$ entries and $v$ has $m-r$ entries. Restrict to a product of small convex balls in $(u,v)$ contained in the new domain. The derivative of $g$ has first $r$ rows $[I\ 0]$. Since its rank is exactly $r$ everywhere, every derivative of its last components in a $v$ direction must vanish: a nonzero such column would be independent of the first $r$ columns, whose top entries form the identity.

For fixed $u$, integrate the derivative of $g_j(u,v)$ along a segment in the convex $v$ ball. It is zero, so $g_j(u,v)=h_j(u)$ is independent of $v$. The functions $h_j$ are smooth by fixing any $v$, for example zero. Change target coordinates by

$$\Psi(y)=\big(y_1,\ldots,y_r,y_{r+1}-h_{r+1}(y_1,\ldots,y_r),\ldots,y_n-h_n(y_1,\ldots,y_r)\big).$$

This is a diffeomorphism on a sufficiently small product neighborhood: its inverse adds the same $h_j$ to the last coordinates. It maps the image of $g$ to $(u,0)$. Because $f(0)=0$ and $\Phi(0)=0$, the $h_j(0)$ vanish, so the new coordinates remain centered.

When $r=0$, every coordinate derivative of $f$ is zero on a small convex ball. Integrating along line segments makes $f$ constant there, equal to zero in the centered target coordinates. This is exactly the asserted form for rank zero. The formulas also cover the maximal-rank cases with empty blocks. ∎

The connected small product neighborhood is doing real work: zero derivatives in the last variables imply independence along each connected fiber there. The theorem is local, so distant points mapping into the same target neighborhood are not included automatically.

<a id="section-81-5-immersions-and-submersions-as-local-models"></a>
## 5. Immersions and submersions as local models {#section-83-5-immersions-and-submersions-as-local-models}

**Corollary 5.6 (Local immersion form).** If $F:M^m\to N^n$ is an immersion at $p$, local coordinates make it $u\mapsto(u,0)$.

*Proof.* Its rank is $m$, the largest possible. Proposition 5.3 makes that rank constant nearby. Apply Theorem 5.5 with $r=m$. ∎

In particular an immersion restricts near each source point to an injective map with continuous inverse onto its local image, since coordinate projection recovers $u$. This is a local statement about the selected source neighborhood. Other source neighborhoods can meet that same image and create crossings.

**Corollary 5.7 (Local submersion form).** If $F:M^m\to N^n$ is a submersion at $p$, local coordinates make it $(u,v)\mapsto u$, with $u\in\mathbb R^n$.

*Proof.* Rank $n$ persists near $p$ by Proposition 5.3. Apply the constant-rank theorem with $r=n$. ∎

Every submersion is an open map. Given an open $O\subset M$ and $p\in O$, choose a normal-form product neighborhood inside $O$. Its projection contains an open target neighborhood of $F(p)$ contained in $F(O)$. Taking the union over $p$ proves openness. Surjectivity of the entire map is not required: its image is an open subset, possibly proper.

The same normal form gives a local section through every point: in these centered coordinates send $u$ to $(u,0)$. Transferring back gives a smooth $s$ near $F(p)$ with $s(F(p))=p$ and $F\circ s$ the identity. Such a section can depend on the selected source point. It need not extend over the whole target.

<a id="section-97-6-worked-examples"></a>
## 6. Worked examples {#section-99-6-worked-examples}

<a id="section-99-worked-example-5-8-an-immersed-curve-with-a-crossing"></a>
### Worked example 5.8 — An immersed curve with a crossing {#section-101-worked-example-5-8-an-immersed-curve-with-a-crossing}

Consider $F:\mathbb R\to\mathbb R^2$, $F(t)=(\sin t,\sin(2t))$. Its differential sends a scalar velocity $a$ to $a(\cos t,2\cos(2t))$. If the first component is zero, then $\cos t=0$ and $\cos(2t)=-1$, so the second component is nonzero. Thus the differential is injective everywhere and $F$ is an immersion.

However $F(0)=F(\pi)=(0,0)$. The two branch velocities are $(1,2)$ and $(-1,2)$, which are not parallel. Each small source interval maps to a regular local arc, as Corollary 5.6 promises, but the full image crosses itself at the origin. The local theorem does not identify these two source points or promise that the full image is an embedded one-dimensional manifold there.

<a id="section-105-worked-example-5-9-squared-radius-and-its-exceptional-p"></a>
### Worked example 5.9 — Squared radius and its exceptional point {#section-107-worked-example-5-9-squared-radius-and-its-exceptional-p}

For $R:\mathbb R^2\to\mathbb R$, $R(x,y)=x^2+y^2$, the differential is $dR_{(x,y)}(a,b)=2xa+2yb$. It is surjective exactly away from the origin. On $x>0$, the map $\Phi(x,y)=(s,t)=(x^2+y^2,y)$ has inverse $(s,t)\mapsto(\sqrt{s-t^2},t)$ on the open region $s>t^2$. These are actual smooth coordinates there, and $R$ becomes projection to $s$.

At the origin its differential is zero and rank is not locally constant. The zero fiber consists of one point, whereas each positive fiber is a circle and each negative fiber is empty. Applying the rank-one projection model at zero would therefore give both an incorrect differential and an incorrect local fiber shape. The next chapter develops the regular-value theorem that formalizes the good fibers.

<a id="section-111-worked-example-5-10-a-cusp-is-smooth-and-injective-but-"></a>
### Worked example 5.10 — A cusp is smooth and injective but not immersive {#section-113-worked-example-5-10-a-cusp-is-smooth-and-injective-but-}

The map $C:\mathbb R\to\mathbb R^2$, $C(t)=(t^2,t^3)$, is smooth and injective. If $C(s)=C(t)$, equality of cubes already gives $s=t$. Its differential is $a\mapsto a(2t,3t^2)$, so it has rank one for $t\ne0$ and rank zero at zero.

The inverse on its image is continuous, for example by taking the real cube root of the second coordinate. It is nevertheless not an immersion at zero and cannot acquire the regular inclusion form there through smooth coordinate changes: invertible coordinate derivatives preserve rank. Smoothness, injectivity and being a homeomorphism onto the image do not replace the differential condition. In contrast, the preceding crossed curve has the differential condition but fails global injectivity.

<a id="section-117-7-exercises"></a>
## 7. Exercises {#section-119-7-exercises}

### Exercise 5.1 {#smooth-manifolds-differentials-ex-1}

For a constant smooth map $F:M\to N$, compute $dF_p$ from the derivation definition. Which maximal-rank conditions can hold?

<details><summary>Hint 1</summary>
Every pulled-back target germ is constant near the source point.
</details>
<details><summary>Hint 2</summary>
The zero linear map is injective only on a zero-dimensional source and surjective only onto a zero-dimensional target.
</details>
<details><summary>Solution</summary>
For every target germ $h$, $h\circ F$ is constant, so every source derivation kills it. Thus $dF_p=0$. It is injective exactly when $\dim M=0$ and surjective exactly when $\dim N=0$. These conditions include genuine zero-dimensional manifolds, whose tangent spaces are zero vector spaces. A constant map on a positive-dimensional source is never an immersion; into a positive-dimensional target it is never a submersion.
</details>

### Exercise 5.2 {#smooth-manifolds-differentials-ex-2}

If $G\circ F$ is an immersion, prove $F$ is an immersion. If $G\circ F$ is a submersion, what follows about $dG$ and at which points?

<details><summary>Hint 1</summary>
Apply the chain rule to a vector in the kernel of $dF$.
</details>
<details><summary>Hint 2</summary>
Surjectivity of a composite forces surjectivity of its second linear map.
</details>
<details><summary>Solution</summary>
If $dF_pv=0$, then $d(G\circ F)_pv=dG_{F(p)}0=0$. Injectivity of the composite forces $v=0$, so $F$ is immersive at every $p$. In the submersion case, every target tangent vector of $G$ at $G(F(p))$ is the image of some $dF_pv$ under $dG_{F(p)}$. Hence $dG_{F(p)}$ is surjective. This proves $G$ is submersive at points of $F(M)$, not necessarily at other points of its domain. No global surjectivity of $F$ was assumed.
</details>

### Exercise 5.3 {#smooth-manifolds-differentials-ex-3}

Find the ranks of $f(x,y)=(x,xy)$ at all points. Explain why its rank-one points do not have a constant-rank neighborhood.

<details><summary>Hint 1</summary>
Its Jacobian has rows $(1,0)$ and $(y,x)$.
</details>
<details><summary>Hint 2</summary>
Its determinant is $x$, while its first row never vanishes.
</details>
<details><summary>Solution</summary>
The rank is two when $x\ne0$ and one when $x=0$. Every neighborhood of a point on $x=0$ contains points with nonzero $x$, so the rank changes there. At such a rank-one point the constant-rank theorem is unavailable. At points with $x\ne0$, the inverse-function theorem does apply. Nonzero rank at one point guarantees a lower bound nearby, not constancy at a nonmaximal value.
</details>

### Exercise 5.4 {#smooth-manifolds-differentials-ex-4}

Prove that a smooth map with zero differential everywhere on a connected manifold is constant.

<details><summary>Hint 1</summary>
First use a small convex coordinate ball and line segments to prove local constancy.
</details>
<details><summary>Hint 2</summary>
A nonempty fiber of a locally constant map is open and its complement is open.
</details>
<details><summary>Solution</summary>
Near each source point, restrict the map to a target chart. Its coordinate expression has all first derivatives zero on a small convex coordinate ball. Integrating along segments makes it constant there. Thus the map is locally constant. Fix one value attained. Its fiber is open by local constancy; its complement is a union of other open fibers. Connectedness forces this nonempty open-and-closed fiber to be the entire manifold. Without connectedness the map may take a different constant value on each component.
</details>

### Exercise 5.5 {#smooth-manifolds-differentials-ex-5}

Show that the restriction of $t\mapsto t^3$ from $\mathbb R$ to itself is a smooth bijection but not a diffeomorphism. Where does the local inverse theorem apply?

<details><summary>Hint 1</summary>
Differentiate the map at zero and away from zero.
</details>
<details><summary>Hint 2</summary>
A smooth inverse would make the derivative of the composite identity equal to one.
</details>
<details><summary>Solution</summary>
The cubic is strictly increasing and onto, hence bijective. Its derivative is $3t^2$, which vanishes at zero. If its inverse were smooth there, the chain rule for the inverse composite would give $1=(\text{inverse})'(0)\cdot0=0$, impossible. At every nonzero source point the derivative is nonzero, so the theorem gives a local smooth inverse. The failure is at zero; global set-theoretic invertibility does not repair the missing derivative hypothesis.
</details>

### Exercise 5.6 {#smooth-manifolds-differentials-ex-6}

Compute the rank of $F(x,y,z)=(x+y,y+z)$ and give global coordinates exhibiting its submersion form.

<details><summary>Hint 1</summary>
Adjoin one source coordinate to the two output coordinates.
</details>
<details><summary>Hint 2</summary>
Try $(u,v,w)=(x+y,y+z,y)$ and solve for $(x,y,z)$.
</details>
<details><summary>Solution</summary>
The derivative rows $(1,1,0)$ and $(0,1,1)$ are independent, so rank is two everywhere. The proposed coordinate change has inverse $(x,y,z)=(u-w,w,v-w)$, a linear diffeomorphism. In these coordinates $F(u,v,w)=(u,v)$. Holding $(u,v)$ fixed leaves the free parameter $w$, displaying one-dimensional affine fibers. This is a global linear instance of the local projection theorem.
</details>

### Exercise 5.7 {#smooth-manifolds-differentials-ex-7}

Show that the height $h:S^1\to\mathbb R$, $h(x,y)=y$, is submersive except at the top and bottom points. Use an angle parameter locally; do not assume a global angle chart.

<details><summary>Hint 1</summary>
Around a point with angle $t_0$, a sufficiently short interval gives a local parametrization $(\cos t,\sin t)$.
</details>
<details><summary>Hint 2</summary>
The derivative of its height is $\cos t$.
</details>
<details><summary>Solution</summary>
In each short angle chart the coordinate expression is $\sin t$, whose derivative is $\cos t$. It is nonzero except when $x=\cos t=0$, namely $(0,1)$ and $(0,-1)$. A nonzero map between the one-dimensional tangent spaces is surjective, so these are exactly the exceptions. At either extremum the differential is zero. Local angle charts suffice to compute the rank intrinsically; no continuous global angle on the whole circle is being used.
</details>

### Exercise 5.8 {#smooth-manifolds-differentials-ex-8}

For the projection $\pi:M\times N\to M$, describe its differential and construct a section when a point $q\in N$ is fixed.

<details><summary>Hint 1</summary>
Product coordinates identify tangent velocities with a pair of velocities.
</details>
<details><summary>Hint 2</summary>
Use $s(p)=(p,q)$.
</details>
<details><summary>Solution</summary>
In product charts, $d\pi_{(p,q)}(v,w)=v$, so the differential is surjective and its kernel consists of pairs $(0,w)$. The formula is independent of product charts because it comes from differentiating a coordinate projection, or from composing curves. The map $s$ is smooth and satisfies $\pi\circ s=\operatorname{id}_M$. This example has a global section after choosing $q$; the general local-section theorem does not promise such a global choice for arbitrary submersions.
</details>

### Exercise 5.9 {#smooth-manifolds-differentials-ex-9}

Prove that no nonempty compact positive-dimensional manifold admits a smooth submersion to $\mathbb R$.

<details><summary>Hint 1</summary>
A real-valued smooth function on a compact space attains a maximum.
</details>
<details><summary>Hint 2</summary>
In a chart about a maximum, every coordinate first derivative is zero. There is no manifold boundary here.
</details>
<details><summary>Solution</summary>
A continuous real function on a nonempty compact manifold attains its maximum at some point $p$. A coordinate neighborhood of $p$ is open in Euclidean space because manifolds have no boundary. The ordinary derivative test for an interior local maximum gives every first partial derivative zero there. Thus $dh_p=0$, which cannot surject onto the one-dimensional tangent space of $\mathbb R$. Hence the function is not a submersion. The no-boundary assumption matters: a maximum at an interval endpoint does not satisfy this interior derivative argument.
</details>

### Exercise 5.10 {#smooth-manifolds-differentials-ex-10}

Let $F:M^n\to N^n$ be a bijective smooth map whose differential is invertible everywhere. Prove it is a diffeomorphism. Identify the separate uses of bijectivity and the differential hypothesis.

<details><summary>Hint 1</summary>
Use the local inverse theorem at every source point.
</details>
<details><summary>Hint 2</summary>
Compare each local inverse with the unique global set-theoretic inverse.
</details>
<details><summary>Solution</summary>
The differential hypothesis gives local diffeomorphisms $F:U_p\to V_p$. Surjectivity makes the sets $V_p$ cover $N$. Bijectivity supplies a unique global inverse and forces its restriction on each $V_p$ to equal the local smooth inverse. Therefore that global inverse is smooth on an open cover and hence smooth. Without injectivity the local inverse choices need not agree, and without surjectivity they do not define an inverse on all of $N$. The cubic example shows why bijectivity alone is insufficient.
</details>

<a id="section-259-8-summary-and-continuation"></a>
## 8. Summary and continuation {#section-261-8-summary-and-continuation}

The differential transports tangent derivations by pullback of functions, agrees with velocity transport along curves and has the coordinate Jacobian as its matrix. Its chain rule is intrinsic. Constant rank on a neighborhood yields the inclusion/projection normal form, using the Euclidean inverse-function theorem as an explicit input. Maximal rank persists nearby, giving the immersion and submersion forms, openness of submersions and local sections. None of these local statements supplies global injectivity, a global inverse or a smooth structure on a self-crossing full image.

The next chapter uses these local forms to define embedded submanifolds and prove the regular-value theorem with its dimension statement. The differential and rank hypotheses established here will distinguish regular fibers from exceptional sets such as the squared-radius zero fiber.

*Source provenance: original Euler L4 exposition, proofs and exercises for the commissioned Smooth Manifolds text. The earlier Quarto manifold material remains in place; no manuscript has been removed or copied over. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. The Euclidean smooth inverse-function theorem is a named calculus input. CC BY-SA 4.0. Draft.*
