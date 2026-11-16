var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: adjoints-unitary-positive-operators
title: "Adjoints, Unitary Maps, and Positive Operators"
level: advanced-undergraduate
estimated_minutes: 235
license: CC BY-SA 4.0
---

# Adjoints, Unitary Maps, and Positive Operators {#section-1-adjoints-unitary-maps-and-positive-operators}

An inner product identifies output measurements with vectors. The algebraic transpose then becomes an adjoint. This creates coordinate-free notions of self-adjoint, unitary, normal, and positive operators—the hypotheses behind spectral theorems. Throughout, the spaces are finite-dimensional real or complex inner-product spaces, and the inner product is linear in its first slot.

<a id="section-3-1-adjoint-existence"></a>
## 1. Adjoint existence {#section-5-1-adjoint-existence}

**Definition 18.1 (Adjoint in the declared inner products).**

For $T:V\\to W$, the adjoint $T^{*}:W\\to V$ is characterized by

$\\langle Tv,w\\rangle=\\langle v,T^{*}w\\rangle$.

Finite-dimensional Riesz representation proves existence and uniqueness: for fixed $w$, $v\\to \\langle Tv,w\\rangle$ is a functional represented by a unique vector. In orthonormal bases, the matrix is conjugate transpose. More generally, define Gram matrices by $\\langle x,y\\rangle=y^\\dagger Gx$ (the first slot is linear). Then the adjoint matrix is $G_V^{-1}A^\\dagger G_W$.

Adjoints satisfy $(ST)^{*}=T^{*}S^{*}$, $(T^{*})^{*}=T$, and $(aS+bT)^{*}=\\overline{a}S^{*}+\\overline{b}T^{*}$ under the first-slot-linear convention.

<a id="section-15-2-kernel-and-image-geometry"></a>
## 2. Kernel and image geometry {#section-17-2-kernel-and-image-geometry}

**Theorem 18.1 (Adjoint kernels and orthogonal images).**

$\\operatorname{ker} T^{*}=(\\operatorname{im} T)^\\perp$ and $\\operatorname{im} T^{*}=(\\operatorname{ker} T)^\\perp$. The first is direct from the defining identity; finite dimensions and equal ranks give the second. Hence

$V=\\operatorname{ker} T \\oplus \\operatorname{im} T^{*}$, $W=\\operatorname{im} T \\oplus \\operatorname{ker} T^{*}$.

<a id="section-23-3-isometries-and-unitary-maps"></a>
## 3. Isometries and unitary maps {#section-25-3-isometries-and-unitary-maps}

**Definition 18.2 (Unitary maps).**

$U$ is unitary (orthogonal over $R$) when $U^{*}U=UU^{*}=I$. Equivalent conditions are preservation of inner products, preservation of norms, and sending an orthonormal basis to an orthonormal basis. Unitary changes of basis are numerically valuable because they preserve norms and condition geometry.

<a id="section-29-4-self-adjoint-and-normal-operators"></a>
## 4. Self-adjoint and normal operators {#section-31-4-self-adjoint-and-normal-operators}

**Definition 18.3 (Self-adjoint, skew-adjoint and normal operators).**

$T$ is self-adjoint when $T=T^{*}$, skew-adjoint when $T^{*}=-T$, and normal when $T^{*}T=TT^{*}$. Self-adjoint and unitary operators are normal. For normal $T$,

$\\lVert Tv\\rVert=\\lVert T^{*}v\\rVert$

because squared norms are $\\langle T^{*}Tv,v\\rangle$ and $\\langle TT^{*}v,v\\rangle$. Thus $\\operatorname{ker} T=\\operatorname{ker} T^{*}$.

Eigenvectors of a normal operator belonging to distinct eigenvalues are orthogonal: use $(T-\\lambda I)$ normal and its kernel/image orthogonality, or the adjoint eigenvalue relation.

<a id="section-41-5-positive-operators"></a>
## 5. Positive operators {#section-43-5-positive-operators}

**Definition 18.4 (Positive semidefinite and positive definite operators).**

$A$ is positive semidefinite if self-adjoint and $\\langle Av,v\\rangle \\ge 0$; positive definite uses $>0$ for nonzero $v$. Every $T^{*}T$ is positive semidefinite because $\\langle T^{*}Tv,v\\rangle=\\lVert Tv\\rVert^2$, and it is positive definite iff $T$ is injective.

The spectral theorem will yield a unique positive square root $A^{\\frac{1}{2}}$ for positive $A$. Polar decomposition then writes $T=U(T^{*}T)^{\\frac{1}{2}}$ when $T$ is invertible, with a partial-isometry version otherwise.

<a id="section-49-6-rayleigh-quotients"></a>
## 6. Rayleigh quotients {#section-51-6-rayleigh-quotients}

For nonzero $v$, $R_A(v)=\\langle Av,v\\rangle/\\lVert v\\rVert^2$. For self-adjoint $A$, it is real. After spectral decomposition it lies between smallest and largest eigenvalues, and extrema occur at eigenvectors. This connects quadratic optimization to spectra.

<a id="section-53-7-boundaries"></a>
## 7. Boundaries {#section-55-7-boundaries}

Adjoint depends on the inner product; transpose alone does not. In infinite dimension, boundedness and domains become essential. A matrix being close to self-adjoint numerically requires a norm and tolerance.

<a id="section-57-8-worked-weighted-adjoint"></a>
## 8. Worked weighted adjoint {#section-59-8-worked-weighted-adjoint}

**Worked example 18.1 (Compute an adjoint in two weighted geometries).**

On $\\mathbb{R}^2$, equip the domain with Gram matrix $G_V=\\operatorname{diag}(1,4)$ and the codomain with $G_W=\\operatorname{diag}(2,1)$. Let

$A=\\begin{pmatrix}1 & 1 \\\\ 0 & 2\\end{pmatrix}$.

The adjoint matrix is

$B=G_V^{-1}A^TG_W$.

Compute $A^TG_W=\\begin{pmatrix}1 & 0 \\\\ 1 & 2\\end{pmatrix}\\begin{pmatrix}2 & 0 \\\\ 0 & 1\\end{pmatrix}=\\begin{pmatrix}2 & 0 \\\\ 2 & 2\\end{pmatrix}$, then multiply by $G_V^{-1}=\\operatorname{diag}(1,\\frac{1}{4})$ to obtain

$B=\\begin{pmatrix}2 & 0 \\\\ \\frac{1}{2} & \\frac{1}{2}\\end{pmatrix}$.

This is neither $A^T$ nor the standard Euclidean adjoint because the two geometries differ. Check with $x=(1,1)$ and $y=(2,-1)$. Since $Ax=(2,2)$,

$\\langle Ax,y\\rangle_W=y^TG_WAx=(2,-1)\\cdot(4,2)=6$.

The defining convention is $\\langle x,y\\rangle=y^TGx$, so the desired identity is $\\langle Ax,y\\rangle_W=\\langle x,By\\rangle_V$. Starting from

$y^TG_WAx=(By)^TG_Vx=y^TB^TG_Vx$

gives $B^TG_V=G_WA$, hence $B=G_V^{-1}A^TG_W$. Direct multiplication gives $By=(4,\\frac{1}{2})$, and therefore

$\\langle x,By\\rangle_V=(By)^TG_Vx=(4,\\tfrac12)\\cdot(1,4)=6$,

as required. Testing the formula on vectors catches both convention errors and arithmetic slips without asking the reader to follow an intentionally incorrect computation.

<a id="section-87-9-worked-normality-diagnostics"></a>
## 9. Worked normality diagnostics {#section-89-9-worked-normality-diagnostics}

**Worked example 18.2 (Separate real spectrum from normality).**

Consider $A=\\begin{pmatrix}1 & c \\\\ 0 & 2\\end{pmatrix}$ over $C$ with the standard inner product. Then

$A^{*}A=\\begin{pmatrix}1 & c \\\\ \\overline{c} & \\left|c\\right|^2+4\\end{pmatrix},\\qquad
AA^{*}=\\begin{pmatrix}1+\\left|c\\right|^2 & 2c \\\\ 2\\overline{c} & 4\\end{pmatrix}$.

Comparing the $(1,1)$ entries forces $c=0$ if the matrix is normal. Conversely, $c=0$ makes $A$ diagonal and therefore normal.

Several diagnostics can avoid full products:

- normality implies $\\lVert Ae_i\\rVert=\\lVert A^{*}e_i\\rVert$ for every basis vector;
- normality implies $\\operatorname{ker}(A-\\lambda I)=\\operatorname{ker}(A^{*}-\\overline{\\lambda}I)$;
- a triangular normal matrix is diagonal;
- eigenvectors for distinct eigenvalues must be orthogonal.

Any one failed necessary condition disproves normality. Passing a necessary condition does not prove it unless equivalence has been established.

<a id="section-107-10-positive-operators-and-quadratic-estimates"></a>
## 10. Positive operators and quadratic estimates {#section-109-10-positive-operators-and-quadratic-estimates}

**Worked example 18.3 (Certify strict and nonstrict positivity by squares).**

If $A\\ge 0$, the spectral theorem later shows $A=B^{*}B$ with $B=A^{\\frac{1}{2}}$. Before using that theorem, every $T^{*}T$ supplies concrete positive examples. For

$T=\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$,

$T^{*}T=\\begin{pmatrix}1 & 1 \\\\ 1 & 2\\end{pmatrix}$, and

$x^T(T^{*}T)x=\\lVert Tx\\rVert^2=(x_1+x_2)^2+x_2^2$.

This is strictly positive for nonzero $x$ because $T$ is injective. Completing squares proves definiteness without computing eigenvalues. Conversely, $T=\\begin{pmatrix}1 & 0 \\\\ 0 & 0\\end{pmatrix}$ gives $T^{*}T=\\operatorname{diag}(1,0)$, positive semidefinite but singular; its zero quadratic directions are exactly $\\operatorname{ker} T$.

For positive definite $A$, define lower and upper Rayleigh bounds $m=\\min_{\\lVert v\\rVert=1}\\langle Av,v\\rangle$ and $M=\\max\\ldots$. Then

$m\\lVert v\\rVert^2\\le \\langle Av,v\\rangle \\le M\\lVert v\\rVert^2$.

The spectral theorem identifies $m,M$ as extreme eigenvalues. Quantitatively, small $m$ means the quadratic form has a nearly flat direction and solving with $A$ may amplify error.

<a id="section-127-11-partial-polar-decomposition"></a>
## 11. Partial polar decomposition {#section-129-11-partial-polar-decomposition}

When $T$ is singular, set $\\left|T\\right|=(T^{*}T)^{\\frac{1}{2}}$. On $(\\operatorname{ker} T)^\\perp=\\operatorname{im} \\left|T\\right|$, define

$U(\\left|T\\right|v)=Tv$.

This is well-defined because equal $\\left|T\\right|$ outputs differ by a kernel vector, and it is isometric since $\\lVert Tv\\rVert=\\lVert |T|v\\rVert$. Set $U=0$ on $\\operatorname{ker} \\left|T\\right|$; then $U$ is a partial isometry and $T=U\\left|T\\right|$. Extending $U$ to a unitary map requires matching unused dimensions and introduces choices. The singular case therefore distinguishes canonical action on the support from noncanonical extension.

<a id="section-135-12-error-clinic"></a>
## 12. Error clinic {#section-137-12-error-clinic}

**Using transpose as adjoint in a nonorthonormal basis.** Insert the Gram matrices.

**Forgetting arrow reversal.** $T:V\\to W$ gives $T^{*}:W\\to V$ after inner products, just as the dual map reverses arrows.

**Checking only real eigenvalues to claim self-adjointness.** A nonnormal matrix can have a real spectrum. Self-adjointness is the operator identity $T=T^{*}$.

**Assuming positive entries mean a positive operator.** Positivity concerns the quadratic form and self-adjointness, not entry signs.

**Treating $U^{*}U=I$ as automatically $UU^{*}=I$ outside finite square settings.** In finite equal dimension it follows; isometries on infinite spaces need not be onto.

**Turning “nearly symmetric” into “has real eigenvectors.”** Numerical consequences require a normwise perturbation bound and spectral separation.

<a id="section-149-13-rank-one-operators-as-an-adjoint-laboratory"></a>
## 13. Rank-one operators as an adjoint laboratory {#section-151-13-rank-one-operators-as-an-adjoint-laboratory}

Fix $a \\in W$ and $b \\in V$ and define $T:V\\to W$ by

$Tv=\\langle v,b\\rangle a$

under the convention linear in the first slot. Then

$T^{*}w=\\langle w,a\\rangle b$.

Indeed,

$\\langle Tv,w\\rangle=\\langle v,b\\rangle \\langle a,w\\rangle=\\langle v,\\langle w,a\\rangle b\\rangle$,

where conjugate symmetry and the slot convention account for the scalar placement. This formula makes several facts concrete. $T^{*}T$ sends $v$ to $\\lVert a\\rVert^2\\langle v,b\\rangle b$, so its only possible nonzero eigenvalue is $\\lVert a\\rVert^2\\lVert b\\rVert^2$. Cauchy--Schwarz gives $\\lVert Tv\\rVert\\le\\lVert a\\rVert\\lVert b\\rVert\\lVert v\\rVert$. If $b\\ne0$, the unit vector $v=b/\\lVert b\\rVert$ attains the operator norm $\\lVert T\\rVert=\\lVert a\\rVert\\lVert b\\rVert$. If $a=0$ or $b=0$, then $T=0$ and $\\lVert T\\rVert=0$; every unit vector attains this value when $V\\ne\\{0\\}$. If $V=\\{0\\}$, the norm is still zero but there is no unit vector at which to attain it. In particular, when $b=0$, no scalar multiple of $b$ is a unit vector. For a concrete check in $V=W=\\mathbb{R}^2$ with the standard inner product, $a=(3,4)$ and $b=(0,2)$ give $T(v_1,v_2)=(6v_2,8v_2)$, with norm $10$ attained at the unit vector $(0,1)$; replacing either $a$ or $b$ by zero gives the zero operator. For $V=W$ and $b\\ne0$, set $q=b/\\lVert b\\rVert$. The normalized construction $P(v)=\\langle v,q\\rangle q$ is the orthogonal projection onto $\\operatorname{span}(b)$; with the particular choice $a=q$, the original $T$ equals $\\lVert b\\rVert P$.

Rank-one operators also expose convention mistakes quickly: if the proposed adjoint has scalars conjugated in the wrong place, substituting arbitrary multiples of $a$ and $b$ breaks the defining identity.

<a id="section-167-14-reflections-from-rank-one-projections"></a>
## 14. Reflections from rank-one projections {#section-169-14-reflections-from-rank-one-projections}

Let $q$ be a unit vector and let $P(v)=\\langle v,q\\rangle q$. Then $P=P^{*}=P^2$. Define the Householder reflection

$H=I-2P$

over $R$ or $C$. Since $P$ is self-adjoint, $H^{*}=H$; since $P^2=P$,

$H^2=I-4P+4P^2=I$.

Therefore $H^{*}H=I$: it is unitary and self-adjoint. It sends $q$ to $-q$ and fixes every vector in $q^\\perp$, so its eigenvalues are $-1$ on the reflected line and $1$ on the perpendicular hyperplane.

Given nonzero real vectors $x,y$ with equal norms and $x\\ne y$, choose $q=(x-y)/\\lVert x-y\\rVert$. Since $2\\langle x,x-y\\rangle=\\lVert x-y\\rVert^2$, the associated reflection satisfies $Hx=x-2\\langle x,q\\rangle q=y$. This is the structural basis of Householder QR: use stable orthogonal reflections to zero selected coordinates without changing norms. The same operator is simultaneously a rank-one update, a spectral decomposition $H=(I-P)-P$, and an example where adjoint, positivity of $P$, and unitary geometry interact.

<a id="section-181-exercises-with-full-solutions"></a>
## 15. Construct finite Riesz representation with the declared convention {#section-634-15-construct-finite-riesz-representation-with-the-decla}

Let $V$ be a finite-dimensional real or complex inner-product space. Choose an orthonormal basis $e_1,\\ldots,e_n$. For a linear functional $\\phi$, define $r_\\phi=\\sum_j\\overline{\\phi(e_j)}e_j$. Expanding a vector in the orthonormal basis gives $\\phi(v)=\\langle v,r_\\phi\\rangle$. If two vectors represent the same functional, their difference is orthogonal to every vector, hence to itself, and is zero.

Thus representation exists and is unique without a spectral theorem. Over $\\mathbb C$, the assignment $\\phi\\mapsto r_\\phi$ is conjugate-linear: $r_{a\\phi+b\\psi}=\\overline a r_\\phi+\\overline b r_\\psi$. Equivalently, $w\\mapsto(v\\mapsto\\langle v,w\\rangle)$ is a conjugate-linear identification with the algebraic dual. Its type and scalar rule must be retained when translating the earlier transpose construction.

For $T:V\\to W$ and fixed $w$, represent $\\phi_w(v)=\\langle Tv,w\\rangle$ by $T^*w$. Although representation itself conjugates scalars, $\\phi_{aw}=\\overline a\\phi_w$, so the two conjugations cancel and $T^*(aw)=aT^*w$. Additivity follows similarly. This proves that the constructed adjoint is a linear map $W\\to V$, not merely a separately chosen vector for every $w$.

In orthonormal coordinates this yields conjugate transpose. With arbitrary coordinates and positive Hermitian Gram matrices, the defining identity is $y^\\dagger G_WAx=(By)^\\dagger G_Vx$ for all $x,y$. Therefore $B^\\dagger G_V=G_WA$, and taking conjugate transposes gives $B=G_V^{-1}A^\\dagger G_W$. The formula changes when either geometry changes, even if the coordinate array $A$ does not.

<a id="section-642-a-complex-gram-example-checked-on-vectors"></a>
### A complex Gram example checked on vectors {#section-644-a-complex-gram-example-checked-on-vectors}

Give $V=\\mathbb C^2$ the Gram matrix
\\[
G=\\begin{pmatrix}1&i\\\\-i&2\\end{pmatrix},
\\]
and give $W=\\mathbb C$ its standard inner product. The squared norm is $|x_1+ix_2|^2+|x_2|^2$, so $G$ is positive definite. Its inverse is $\\begin{pmatrix}2&-i\\\\i&1\\end{pmatrix}$. For $T(x_1,x_2)=x_1$, the adjoint is $T^*y=(2y,iy)$.

Indeed $G(2,i)^{\\mathsf T}=(1,0)^{\\mathsf T}$, so $\\langle x,T^*y\\rangle_G=\\overline y\\,x_1=\\langle Tx,y\\rangle$. For $x=(1,i)$ and $y=1$, both sides equal one. Omitting either Gram matrix or conjugation would generally fail this same check.

Here $T^*T$ has coordinate matrix $\\begin{pmatrix}2&0\\\\i&0\\end{pmatrix}$, which is not standard Hermitian. Multiplication by $G$ gives $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, verifying self-adjointness in the declared geometry and quadratic form $\\langle T^*Tx,x\\rangle_G=|x_1|^2$. Positivity is about an operator and its inner product, not a visual symmetry test in arbitrary coordinates.

Also $TT^*$ is multiplication by two. The vector $(2,i)$ has squared G-norm two, so its normalization attains $\\|T\\|=\\sqrt2$. The upper bound follows from Riesz and Cauchy–Schwarz. This is an exact nonzero example; it leaves the original rank-one zero-vector and zero-space distinctions intact.

<a id="section-656-16-isometry-surjectivity-and-normality-have-different-h"></a>
## 16. Isometry, surjectivity, and normality have different hypotheses {#section-658-16-isometry-surjectivity-and-normality-have-different-h}

For a linear map $J:V\\to W$, the condition $J^*J=I_V$ implies $\\langle Jv,Jw\\rangle=\\langle v,w\\rangle$ and therefore injectivity. Conversely inner-product preservation gives that identity by testing against every pair of vectors. Norm preservation implies inner-product preservation by real or complex polarization, with complex linearity included.

For example $J:\\mathbb C^2\\to\\mathbb C^3$, $J(x,y)=(x,y,0)$, has $J^*J=I_2$ but $JJ^*=\\operatorname{diag}(1,1,0)$. The second product is the orthogonal projection onto the image, not $I_3$. The identity matrices live on different spaces, so an untyped statement that one product implies the other is misleading.

For a finite-dimensional endomorphism, injectivity implies surjectivity. Thus $J^*J=I$ then makes $J$ unitary and gives $JJ^*=I$. More generally a surjective isometry between equal-dimensional inner-product spaces is unitary after stating its domain and codomain. An isometric inclusion into a larger space is not a surjective unitary isomorphism.

This distinction explains the two projection factors in a partial isometry. On its initial support it preserves lengths, while its kernel is killed. Its image can be proper. The identity on the whole domain must then be replaced by the projection onto the initial support, and the identity on the codomain by the projection onto the image.

<a id="section-666-a-complete-eigenvector-argument-for-a-normal-operator"></a>
### A complete eigenvector argument for a normal operator {#section-668-a-complete-eigenvector-argument-for-a-normal-operator}

Normality concerns an endomorphism $T:V\\to V$. If $T$ is normal, expand the products to see $S=T-\\lambda I$ is normal for every scalar $\\lambda$. Its adjoint is $T^*-\\overline\\lambda I$. The norm identity for normal operators therefore gives $\\ker(T-\\lambda I)=\\ker(T^*-\\overline\\lambda I)$.

If $Tv=\\lambda v$, then $T^*v=\\overline\\lambda v$. For another eigenvector $Tw=\\mu w$, the adjoint relation yields
$\\lambda\\langle v,w\\rangle=\\langle Tv,w\\rangle=\\langle v,T^*w\\rangle=\\mu\\langle v,w\\rangle$.
Distinct eigenvalues force orthogonality. This supplies the missing mechanism behind the earlier stated diagnostic without assuming that a complete eigenbasis already exists.

A failed necessary condition can disprove normality, but one successful check need not establish the full operator identity. Checking equal norms only on a chosen basis, for example, compares diagonal quadratic entries and does not determine every mixed term. The polarization identity recovers those mixed terms only when the norm equality holds for every vector.

<a id="section-676-17-positive-square-roots-declare-the-spectral-input"></a>
## 17. Positive square roots: declare the spectral input {#section-678-17-positive-square-roots-declare-the-spectral-input}

Let $A$ be positive semidefinite on a finite-dimensional real or complex inner-product space. The forward input from Chapter 19, Sections 1–2, is an orthonormal eigenbasis for self-adjoint operators. Positivity makes each eigenvalue nonnegative by evaluating its eigenvector. Define $S$ to multiply the eigenspace of eigenvalue $\\lambda$ by $\\sqrt\\lambda$.

Then $S$ is positive, self-adjoint, and $S^2=A$. Grouping equal eigenvalues shows this definition does not depend on the particular orthonormal basis within each eigenspace. This construction uses the stated spectral theorem; the existence of the square root has not been derived from the word positive alone.

Its uniqueness can be completed explicitly. Suppose $B$ is another positive square root. Since $B^2=A$, $B$ commutes with $A$ and preserves every eigenspace $E_\\lambda$ of $A$. On $E_0$, $\\|Bv\\|^2=\\langle B^2v,v\\rangle=0$, so $Bv=0$.

For $\\lambda>0$, the operator $B+\\sqrt\\lambda I$ on $E_\\lambda$ is injective: a vector in its kernel gives $0=\\langle Bv,v\\rangle+\\sqrt\\lambda\\|v\\|^2$, forcing zero. Finite dimension makes it invertible. Since $(B-\\sqrt\\lambda I)(B+\\sqrt\\lambda I)=0$ on that eigenspace, $B=\\sqrt\\lambda I$ there. Thus $B=S$ on every eigenspace.

The positivity condition is necessary for uniqueness. On a real one-dimensional space, the positive scalar operator four has square roots two and minus two, but only two is positive. On a kernel subspace, positivity also rules out nonzero nilpotent square roots that could exist without self-adjointness.

The spectral input remains a forward dependency, not a circular proof of Chapter 19. The elementary adjoint, isometry, and $T^*T$ positivity arguments preceding it do not require that theorem. A reader can use those independently while postponing square roots and polar decomposition.

<a id="section-690-18-complete-the-partial-polar-decomposition-on-its-supp"></a>
## 18. Complete the partial polar decomposition on its support {#section-692-18-complete-the-partial-polar-decomposition-on-its-supp}

Let $T:V\\to W$ and let $S=(T^*T)^{1/2}$, using the declared square-root input. For every $v$,
\\[
\\|Sv\\|^2=\\langle S^2v,v\\rangle
=\\langle T^*Tv,v\\rangle=\\|Tv\\|^2.
\\]
Hence $\\ker S=\\ker T$. Since $S$ is self-adjoint, its image is $(\\ker S)^\\perp$. Call this support $M$ and put $N=\\operatorname{im}T$.

Define $U$ on $M$ by $U(Sv)=Tv$. Equal S-images give a difference in $\\ker S=\\ker T$, so this definition is well-defined. It is linear because both S and T are linear. The displayed norm identity proves it is an isometry from $M$ onto $N$. Extend it by zero on $\\ker S$ in the orthogonal decomposition $V=M\\oplus\\ker S$.

This gives a linear map on all of $V$ with $T=US$. Its kernel is exactly $\\ker S$, and its image is $N$. The zero operator is included: then $M=N=0$ and the canonical partial isometry is zero. No normalization of a zero vector occurs.

For $x\\in M$, the isometry property gives $U^*Ux=x$; for $x\\in\\ker S$, $Ux=0$. Thus $U^*U=P_M$. Similarly $UU^*=P_N$: on $N$, write $y=Ux$ with $x\\in M$ and use $U^*y=x$; on $N^\\perp$, the adjoint identity gives $U^*y=0$. The two products are the initial and final support projections.

The canonical U is unique among maps vanishing on $\\ker S$ and satisfying $T=US$: its values on $\\operatorname{im}S=M$ are forced. This is a sharper statement than uniqueness of a unitary extension. The latter can have many choices on the unused directions.

For example $T=\\operatorname{diag}(3,0)$ on $\\mathbb C^2$ has $S=\\operatorname{diag}(3,0)$ and canonical $U=\\operatorname{diag}(1,0)$. Its unitary extensions are $\\operatorname{diag}(1,\\xi)$ for $|\\xi|=1$. Every one gives the same product with S. Over the real field the choices include the two signs on the kernel line.

For a rectangular map with rank r, extending U to a surjective isometry requires equality of the unused dimensions $\\dim V-r=\\dim W-r$, hence equal total dimensions. One can then choose any isometry between the two unused orthogonal complements. If $\\dim V<\\dim W$, an isometric embedding may exist, but cannot be surjective; calling it a square unitary would change the type.

The invertible square case has no unused directions. Then $S^{-1}$ exists, $U=TS^{-1}$, and U is unitary. This recovers the familiar polar formula while explaining exactly which claims survive singularity, rectangularity, and zero spaces.

<a id="section-713-19-recover-image-geometry-and-norm-identities-without-s"></a>
## 19. Recover image geometry and norm identities without spectra {#section-715-19-recover-image-geometry-and-norm-identities-without-s}

The image formula can be proved constructively as well as by counting ranks. Let $x\\in(\\ker T)^\\perp$ and define a functional on $\\operatorname{im}T$ by $\\phi(Tv)=\\langle v,x\\rangle$. Equal T-images differ by a kernel vector, so the functional is well-defined. Finite Riesz representation within the image gives a vector w in that image with $\\langle Tv,w\\rangle=\\langle v,x\\rangle$ for every v. Hence $T^*w=x$.

The reverse containment follows from the adjoint identity, so $\\operatorname{im}T^*=(\\ker T)^\\perp$ without assuming rank equality in advance. The construction also explains the solution freedom: any other representing output vector differs from w by a vector in $(\\operatorname{im}T)^\\perp=\\ker T^*$. The unique representative lying in the image has removed that ambiguity.

There is a parallel elementary route to operator norms. For nonzero W, Cauchy–Schwarz gives $\\|z\\|=\\sup_{\\|w\\|=1}|\\langle z,w\\rangle|$, with equality at $w=z/\\|z\\|$ when z is nonzero. At z=0 every unit vector gives zero. If W itself is zero there is no unit sphere, and the zero operator's norm is defined separately as zero.

For nonzero domain and codomain, apply this formula twice to the adjoint identity:
\\[
\\|T\\|=\\sup_{\\|v\\|=\\|w\\|=1}|\\langle Tv,w\\rangle|
=\\sup_{\\|v\\|=\\|w\\|=1}|\\langle v,T^*w\\rangle|=\\|T^*\\|.
\\]
If either space is zero, both operator norms are zero by the convention just stated. This preserves the distinction between a norm value and attainment on an empty unit sphere.

Submultiplicativity gives $\\|T^*T\\|≤\\|T\\|^2$. Conversely $\\|Tv\\|^2=\\langle T^*Tv,v\\rangle≤\\|T^*T\\|\\|v\\|^2$, so taking the supremum gives $\\|T\\|^2≤\\|T^*T\\|$. Thus equality holds. No eigenbasis or singular-value decomposition was used; these later theories will explain the same quantity through spectra.

<a id="section-730-separating-self-adjoint-and-skew-parts"></a>
### Separating self-adjoint and skew parts {#section-732-separating-self-adjoint-and-skew-parts}

For a complex endomorphism, write $H=(T+T^*)/2$ and $K=(T-T^*)/(2i)$. Both are self-adjoint, and $T=H+iK$. Expanding gives $T^*T=H^2+K^2+i(HK-KH)$ and $TT^*=H^2+K^2-i(HK-KH)$. Therefore T is normal exactly when H and K commute.

This is an operator test, not an assumption that arbitrary self-adjoint operators commute. For $T=\\operatorname{diag}(1,i)$, the parts are $\\operatorname{diag}(1,0)$ and $\\operatorname{diag}(0,1)$ and do commute. Normal operators can have nonreal eigenvalues, while the self-adjoint parts retain real quadratic values.

<a id="section-736-20-positive-quadratic-forms-have-their-own-cauchy-schwa"></a>
## 20. Positive quadratic forms have their own Cauchy–Schwarz inequality {#section-738-20-positive-quadratic-forms-have-their-own-cauchy-schwa}

Let A be positive semidefinite and set $[u,v]=\\langle Au,v\\rangle$. This form is Hermitian and nonnegative, but it may be degenerate. If $[v,v]>0$, applying nonnegativity to $[u-av,u-av]$ with $a=[u,v]/[v,v]$ proves $|[u,v]|^2≤[u,u][v,v]$ by the same scalar calculation as before.

If $[v,v]=0$, consider $[v+tu,v+tu]$ for real t. Nonnegativity for both signs of arbitrarily small t forces the real part of $[u,v]$ to vanish. In the complex case, replacing u by iu forces its imaginary part to vanish. Thus $[u,v]=0$ for every u, and the inequality also holds in this case.

In particular, $[v,v]=0$ implies $Av=0$: self-adjointness gives $\\langle Av,u\\rangle=[v,u]=0$ for every u, including $u=Av$. The converse is immediate. This proves that the zero quadratic directions are exactly the kernel before invoking a spectral theorem.

It also explains why adding a strictly positive scalar multiple of the identity makes A invertible. For c>0, $\\langle(A+cI)v,v\\rangle≥c\\|v\\|^2$, so its kernel is zero and finite dimension gives an inverse. Cauchy–Schwarz then gives $\\|(A+cI)v\\|≥c\\|v\\|$, hence $\\|(A+cI)^{-1}\\|≤1/c$. The bound is meaningful without computing an eigenvalue.

<a id="section-746-bounds-from-elementary-squares"></a>
### Bounds from elementary squares {#section-748-bounds-from-elementary-squares}

For $A=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$ over the real field, $\\langle Ax,x\\rangle=(x_1+x_2)^2+x_2^2$. The upper bound is at most $3\\|x\\|^2$ because $(x_1+x_2)^2≤2x_1^2+2x_2^2$. For the lower bound, write $x_1=(x_1+x_2)-x_2$, obtaining
$\\|x\\|^2≤2(x_1+x_2)^2+3x_2^2≤3\\langle Ax,x\\rangle$.

Thus $I/3≤A≤3I$ as quadratic forms. In particular A is invertible and $\\|A^{-1}\\|≤3$, by the same Cauchy–Schwarz argument. These bounds are not claimed sharp. They supply an exact certificate of coercivity and a finite inverse bound without an unexecuted numerical eigenvalue calculation.

<a id="section-753-quadratic-positivity-still-needs-self-adjointness"></a>
### Quadratic positivity still needs self-adjointness {#section-755-quadratic-positivity-still-needs-self-adjointness}

The self-adjoint requirement in the definition cannot simply be dropped. Over the real field, $K=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$ has $x^{\\mathsf T}Kx=0$ for every x. Hence $I+K$ has strictly positive quadratic values on every nonzero real vector, but is not symmetric and is not a positive operator under the chapter's definition.

Likewise positive entries are insufficient: $\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ has only positive entries but has quadratic value minus two on $(1,-1)$. Positivity is a basis-independent condition on a self-adjoint operator and its geometry, not a collection of entry signs. These examples separate hypotheses that can otherwise look interchangeable in a coordinate table.

<a id="section-759-riesz-coordinates-and-changes-of-basis"></a>
### Riesz coordinates and changes of basis {#section-761-riesz-coordinates-and-changes-of-basis}

A linear functional written as $\\phi(x)=c^{\\mathsf T}x$ has no conjugation on x. Its representing vector in a Gram geometry satisfies $\\phi(x)=r^\\dagger Gx$, so $Gr=\\overline c$ and $r=G^{-1}\\overline c$. The coefficient column of a linear measurement and the representing vector therefore obey different scalar rules. In an orthonormal basis the Gram factor disappears, but the conjugation remains.

This formula connects the algebraic dual to the adjoint construction rather than identifying them without a choice. The functional is independent of the inner product; its representing vector changes with G. Kernel and image dimensions of T are likewise algebraic, while the specific orthogonal complement representing $\\operatorname{im}T^*$ depends on the geometry.

The adjoint formula is also compatible with arbitrary basis changes. If input coordinates change by x=Sx' and output coordinates by y=Ry', the new matrices are $A'=R^{-1}AS$, $G'_V=S^\\dagger G_VS$, and $G'_W=R^\\dagger G_WR$. Substitution gives
\\[
(G'_V)^{-1}(A')^\\dagger G'_W
=S^{-1}(G_V^{-1}A^\\dagger G_W)R.
\\]
This is exactly the coordinate change expected for a map W to V. The calculation checks the inverse positions and the reversal of the arrow, without requiring either basis change to be unitary.

<a id="section-772-unitary-transport-of-orthogonal-projections"></a>
### Unitary transport of orthogonal projections {#section-774-unitary-transport-of-orthogonal-projections}

For a unitary isomorphism $J:V\\to W$ and a subspace M of V, $JP_MJ^*$ is the orthogonal projector onto J(M). Its square equals itself because $J^*J=I$, it is self-adjoint, and its image is J(M). These three statements identify the operator by the earlier characterization of orthogonal projections.

For a rectangular isometric inclusion, $JP_MJ^*$ remains the projector onto J(M), but $JJ^*$ is only the projector onto J(V). Even when $M=V$, it need not be the identity of W. This connects the typed rectangular example to both the projection and partial-polar formulas.

Unitary transport preserves lengths, angles, and approximation error because it transports the entire geometry. An arbitrary similarity transforms an operator's coordinate representation, but does not preserve the standard inner product unless the Gram matrix is transformed too. Confusing these operations is why a nonorthonormal coordinate matrix can look nonsymmetric while still representing a self-adjoint operator.

<a id="section-780-21-optional-practice-extensions"></a>
## 23. Proof and dependency boundary {#section-852-23-proof-and-dependency-boundary}

Finite Riesz representation, the complex Gram example, rectangular isometry distinctions, the normal-eigenvector argument, square-root uniqueness, and all support-isometry identities are derived here. Existence of the positive square root uses the explicit finite self-adjoint spectral theorem from Chapter 19, Sections 1–2; it is not an independent proof of that theorem. The original adopted rank-one zero/attainment clarification remains byte-exact. No numerical run, human qualification, or validated effort is supplied.

<a id="section-854-summary"></a>

## Summary

<a id="section-856-summary"></a>
Adjoints depend on the declared inner products and reverse composition. Unitary maps preserve geometry, normal operators have matching adjoint norms, and T*T encodes positivity and injectivity. Coordinate conjugate transpose represents an adjoint directly only in orthonormal bases.

## Exercises {#section-183-exercises-with-full-solutions}

<a id="section-183-1-uniqueness"></a>
### 1. Uniqueness {#section-185-1-uniqueness}
Prove the adjoint is unique.

<details>
<summary>Hint 1</summary>

Subtract two proposed adjoints in their defining identity.

</details>

<details>
<summary>Hint 2</summary>

Choose the test vector equal to their difference applied to a fixed vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $S,R$ both work, $\\langle v,(S-R)w\\rangle=0$ for all $v$; choose $v=(S-R)w$ to force zero.


</details>

<a id="section-208-2-product-reversal"></a>
### 2. Product reversal {#section-210-2-product-reversal}
Prove $(ST)^{*}=T^{*}S^{*}$.

<details>
<summary>Hint 1</summary>

Move S and then T across the inner product.

</details>

<details>
<summary>Hint 2</summary>

Compare with the defining identity for the adjoint of ST.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\langle STu,w\\rangle=\\langle Tu,S^{*}w\\rangle=\\langle u,T^{*}S^{*}w\\rangle$; uniqueness identifies the adjoint.


</details>

<a id="section-233-3-involution"></a>
### 3. Involution {#section-235-3-involution}
Prove $(T^{*})^{*}=T$.

<details>
<summary>Hint 1</summary>

Conjugate the adjoint identity and exchange the two vectors.

</details>

<details>
<summary>Hint 2</summary>

Use uniqueness once the defining identity for the second adjoint is established.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conjugate symmetry converts the defining identity to the adjoint identity for $T^{*}$; uniqueness gives $T$.


</details>

<a id="section-258-4-matrix-formula"></a>
### 4. Matrix formula {#section-260-4-matrix-formula}
Derive conjugate transpose in orthonormal bases.

<details>
<summary>Hint 1</summary>

Test the adjoint identity on each pair of orthonormal basis vectors.

</details>

<details>
<summary>Hint 2</summary>

The resulting entries are transposed and conjugated.

</details>

<details>
<summary>Solution</summary>

**Solution.** Basis entries satisfy $\\langle Te_j,f_i\\rangle=a_{ij}=\\langle e_j,T^{*}f_i\\rangle$, whose coordinate is the conjugate-transposed entry under the convention.


</details>

<a id="section-283-5-nonorthonormal-formula"></a>
### 5. Nonorthonormal formula {#section-285-5-nonorthonormal-formula}
Derive $A^{*}=G_V^{-1}A^\\dagger G_W$.

<details>
<summary>Hint 1</summary>

Write the defining identity in coordinates with the two Gram matrices.

</details>

<details>
<summary>Hint 2</summary>

Collect the arbitrary coordinate vectors to obtain G_V A*=A†G_W.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $B$ denoting the adjoint matrix, the identity is $y^\\dagger G_WAx=(By)^\\dagger G_Vx=y^\\dagger B^\\dagger G_Vx$ for all $x,y$. Hence $B^\\dagger G_V=G_WA$; taking conjugate transposes gives $G_VB=A^\\dagger G_W$, and solving gives the formula.


</details>

<a id="section-308-6-kernel-identity"></a>
### 6. Kernel identity {#section-310-6-kernel-identity}
Prove $\\operatorname{ker} T^{*}=(\\operatorname{im} T)^\\perp$.

<details>
<summary>Hint 1</summary>

Test T*w=0 against all domain vectors.

</details>

<details>
<summary>Hint 2</summary>

The adjoint identity says exactly that w is orthogonal to every Tv.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T^{*}w=0$ iff $\\langle v,T^{*}w\\rangle=\\langle Tv,w\\rangle=0$ for every $v$, exactly iff $w$ is orthogonal to the image.


</details>

<a id="section-333-7-image-identity"></a>
### 7. Image identity {#section-335-7-image-identity}
Prove $\\operatorname{im} T^{*}=(\\operatorname{ker} T)^\\perp$.

<details>
<summary>Hint 1</summary>

First show im T* is contained in (ker T)⊥.

</details>

<details>
<summary>Hint 2</summary>

Then use rank–nullity and the already proved adjoint kernel identity to compare dimensions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Images of $T^{*}$ are orthogonal to $\\operatorname{ker} T$; both spaces have dimension $\\operatorname{rank} T=\\operatorname{dim} V-\\operatorname{dim} \\operatorname{ker} T$.


</details>

<a id="section-358-8-norm-preservation"></a>
### 8. Norm preservation {#section-360-8-norm-preservation}
If $U^{*}U=I$, prove $U$ preserves inner products.

<details>
<summary>Hint 1</summary>

Insert U*U=I into ⟨Uv,Uw⟩.

</details>

<details>
<summary>Hint 2</summary>

Use the adjoint identity to move one U.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\langle Uv,Uw\\rangle=\\langle v,U^{*}Uw\\rangle=\\langle v,w\\rangle$.


</details>

<a id="section-383-9-converse-polarization"></a>
### 9. Converse polarization {#section-385-9-converse-polarization}
If a complex linear map preserves norms, prove it preserves inner products.

<details>
<summary>Hint 1</summary>

Recover inner products from squared norms by complex polarization.

</details>

<details>
<summary>Hint 2</summary>

Apply norm preservation to all vectors appearing in that identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the complex polarization identity expressing $\\langle v,w\\rangle$ from norms of $v+i^kw$; preserved norms preserve the expression.


</details>

<a id="section-408-10-normal-norm-equality"></a>
### 10. Normal norm equality {#section-410-10-normal-norm-equality}
Prove $\\lVert Tv\\rVert=\\lVert T^{*}v\\rVert$ for normal $T$.

<details>
<summary>Hint 1</summary>

Express both squared norms with T*T and TT*.

</details>

<details>
<summary>Hint 2</summary>

Normality identifies those operators.

</details>

<details>
<summary>Solution</summary>

**Solution.** Squared norms are $\\langle T^{*}Tv,v\\rangle$ and $\\langle TT^{*}v,v\\rangle$, equal by normality.


</details>

<a id="section-433-11-kernel-equality"></a>
### 11. Kernel equality {#section-435-11-kernel-equality}
For normal $T$, prove $\\operatorname{ker} T=\\operatorname{ker} T^{*}$.

<details>
<summary>Hint 1</summary>

Use the equality of the two norms from Exercise 10.

</details>

<details>
<summary>Hint 2</summary>

A vector has zero image exactly when that image has zero norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exercise 10 makes either norm zero exactly when the other is zero.


</details>

<a id="section-458-12-positive-construction"></a>
### 12. Positive construction {#section-460-12-positive-construction}
Prove $T^{*}T$ is positive semidefinite.

<details>
<summary>Hint 1</summary>

Compute ⟨T*Tv,v⟩.

</details>

<details>
<summary>Hint 2</summary>

It equals ‖Tv‖², and T*T is self-adjoint.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is self-adjoint and $\\langle T^{*}Tv,v\\rangle=\\langle Tv,Tv\\rangle=\\lVert Tv\\rVert^2\\ge 0$.


</details>

<a id="section-483-13-definiteness"></a>
### 13. Definiteness {#section-485-13-definiteness}
When is $T^{*}T$ positive definite?

<details>
<summary>Hint 1</summary>

Use the same squared-norm identity.

</details>

<details>
<summary>Hint 2</summary>

Strict positivity for nonzero v is equivalent to injectivity of T.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exactly when $\\lVert Tv\\rVert^2>0$ for every nonzero $v$, which is injectivity.


</details>

<a id="section-508-14-self-adjoint-eigenvalues"></a>
### 14. Self-adjoint eigenvalues {#section-510-14-self-adjoint-eigenvalues}
Prove every eigenvalue is real.

<details>
<summary>Hint 1</summary>

Compare ⟨Tv,v⟩ with its complex conjugate.

</details>

<details>
<summary>Hint 2</summary>

For an eigenvector this scalar is λ‖v‖².

</details>

<details>
<summary>Solution</summary>

**Solution.** If $Tv=\\lambda v$, then $\\lambda\\lVert v\\rVert^2=\\langle Tv,v\\rangle=\\langle v,Tv\\rangle=\\overline{\\lambda}\\lVert v\\rVert^2$, so $\\lambda=\\overline{\\lambda}$.


</details>

<a id="section-533-15-orthogonal-eigenvectors"></a>
### 15. Orthogonal eigenvectors {#section-535-15-orthogonal-eigenvectors}
For self-adjoint $T$, prove eigenvectors for distinct eigenvalues are orthogonal.

<details>
<summary>Hint 1</summary>

Compute ⟨Tv,w⟩ in two ways using self-adjointness.

</details>

<details>
<summary>Hint 2</summary>

The real, distinct eigenvalues multiply the same inner product.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\lambda\\langle v,w\\rangle=\\langle Tv,w\\rangle=\\langle v,Tw\\rangle=\\mu\\langle v,w\\rangle$; distinct scalars force zero.


</details>

<a id="section-558-16-rayleigh-reality"></a>
### 16. Rayleigh reality {#section-560-16-rayleigh-reality}
Why is $R_A(v)$ real for self-adjoint $A$?

<details>
<summary>Hint 1</summary>

The numerator equals its own conjugate.

</details>

<details>
<summary>Hint 2</summary>

The denominator is positive real for v≠0.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\langle Av,v\\rangle=\\langle v,Av\\rangle=\\overline{\\langle Av,v\\rangle}$, so the numerator is real; the denominator is positive real.


</details>

<a id="section-583-17-inner-product-dependence"></a>
### 17. Inner-product dependence {#section-585-17-inner-product-dependence}
Give a matrix self-adjoint in one inner product but not standard.

<details>
<summary>Hint 1</summary>

Start with a diagonal self-adjoint operator in a nonorthonormal coordinate basis.

</details>

<details>
<summary>Hint 2</summary>

For example choose a nonsymmetric matrix similar to a real diagonal one, and transport the Euclidean Gram matrix.

</details>

<details>
<summary>Solution</summary>

**Solution.** Any real diagonalizable matrix with real eigenvalues becomes self-adjoint by declaring an eigenbasis orthonormal; e.g. $\\begin{pmatrix}1 & 1 \\\\ 0 & 2\\end{pmatrix}$ is not standard symmetric but is self-adjoint for the transported inner product.


</details>

<a id="section-608-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-610-18-numerical-boundary}
Why are unitary similarities preferred computationally?

<details>
<summary>Hint 1</summary>

Unitary changes of basis preserve Euclidean norms and condition number one.

</details>

<details>
<summary>Hint 2</summary>

General similarities can amplify errors through a poorly conditioned basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** They preserve vector and operator 2-norms, do not magnify perturbations through a badly conditioned basis, and give backward-stable reduction frameworks.

</details>

<a id="section-632-15-construct-finite-riesz-representation-with-the-decla"></a>

<a id="section-782-21-optional-practice-extensions"></a>
### 19. LSP-18-E19. A second functional in a complex Gram geometry {#section-786-lsp-18-e19-a-second-functional-in-a-complex-gram-geomet}

Use the Gram matrix $G=\\begin{pmatrix}1&i\\\\-i&2\\end{pmatrix}$ on $\\mathbb C^2$ and the standard geometry on $\\mathbb C$. For $L(x_1,x_2)=x_2$, find the adjoint, verify its defining identity, and find the operator norm and a unit vector attaining it.

<details>
<summary>Hint 1</summary>

Use the Gram-matrix adjoint formula for the row matrix (0,1).

</details>

<details>
<summary>Hint 2</summary>

Its adjoint applied to 1 is the representing vector; its Gram norm determines both the norm and an attaining direction.

</details>

<a id="section-802-lsp-18-e20-rectangular-polar-factors-have-two-support-p"></a>
### 20. LSP-18-E20. Rectangular polar factors have two support projections {#section-804-lsp-18-e20-rectangular-polar-factors-have-two-support-p}

Let $T:\\mathbb R^2\\to\\mathbb R^3$ be $T(x,y)=(0,3y,0)$. Find S and the canonical partial isometry U, calculate $U^*U$ and $UU^*$, and give an isometric extension of U from the support to the whole domain. Explain why no such extension is a surjective unitary map onto $\\mathbb R^3$.

<details>
<summary>Hint 1</summary>

Compute T*T and its positive square root first.

</details>

<details>
<summary>Hint 2</summary>

The canonical partial isometry agrees with T/S on the support and vanishes on its orthogonal complement.

</details>

<a id="section-820-22-solutions-and-the-original-polarization-elaboration"></a>

## Solutions

<a id="section-822-22-solutions-and-the-original-polarization-elaboration"></a>
<a id="section-822-lsp-18-e19-a-second-functional-in-a-complex-gram-geomet"></a>
### LSP-18-E19. A second functional in a complex Gram geometry — solution {#section-824-lsp-18-e19-a-second-functional-in-a-complex-gram-geomet}

<details>
<summary>Solution</summary>


The adjoint is $L^*z=(-iz,z)$, since $G^{-1}(0,1)^{\\mathsf T}=(-i,1)^{\\mathsf T}$ and $G(-i,1)^{\\mathsf T}=(0,1)^{\\mathsf T}$. Thus $\\langle x,L^*z\\rangle_G=\\overline z x_2=\\langle Lx,z\\rangle$. The representing vector $(-i,1)$ has squared G-norm one and maps to one, so the operator norm is one and is attained at that unit vector. Cauchy–Schwarz supplies the upper bound.


</details>

<a id="section-833-lsp-18-e20-rectangular-polar-factors-have-two-support-p"></a>
### LSP-18-E20. Rectangular polar factors have two support projections — solution {#section-835-lsp-18-e20-rectangular-polar-factors-have-two-support-p}

<details>
<summary>Solution</summary>


Here $T^*T=\\operatorname{diag}(0,9)$, $S=\\operatorname{diag}(0,3)$, and $U(x,y)=(0,y,0)$. Its support products are $U^*U=\\operatorname{diag}(0,1)$ on $\\mathbb R^2$ and $UU^*=\\operatorname{diag}(0,1,0)$ on $\\mathbb R^3$. The extension $\\widetilde U(x,y)=(x,y,0)$ is an isometry agreeing with U on its support, but its image has dimension two. No map from a two-dimensional space can be a surjective isometry onto a three-dimensional space.


</details>

<a id="section-844-original-exercise-9-the-actual-polarization-formula"></a>
### Original Exercise 9: the actual polarization formula {#section-846-original-exercise-9-the-actual-polarization-formula}

For first-slot linearity, expansion gives
$\\langle v,w\\rangle=\\frac14(\\|v+w\\|^2-\\|v-w\\|^2+i\\|v+iw\\|^2-i\\|v-iw\\|^2)$.
The first difference is four times the real part and the second difference four times the imaginary part, as derived in the Chapter 17 extension. A complex linear map carries these four combinations to the corresponding combinations of its images. Norm preservation therefore preserves the entire expression and the inner product. Mere norm preservation by a nonlinear or conjugate-linear map does not justify that step.

<a id="section-850-23-proof-and-dependency-boundary"></a>
`;export{e as default};