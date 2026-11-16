var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: bilinear-quadratic-sesquilinear-forms
title: "Bilinear, Quadratic, and Sesquilinear Forms"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Bilinear, Quadratic, and Sesquilinear Forms {#section-1-bilinear-quadratic-and-sesquilinear-forms}

A form measures pairs of vectors rather than transforming one vector. Therefore its matrix changes by congruence, not similarity. Symmetric real forms admit an inertia classification; alternating forms produce symplectic blocks; Hermitian forms carry the complex analogue.

<a id="section-3-1-forms-and-matrices"></a>
## 1. Forms and matrices {#section-5-1-forms-and-matrices}

**Definition 20.1 (Forms, congruence and radicals).**

A bilinear form $b:V \\times V\\to F$ has matrix $A$ in basis $B$ defined by $b(x,y)=[x]_B^T A[y]_B$. Under basis change $[x]_B=P[x]_{B'}$,

$A'=P^TAP$.

This is **congruence**. A form is symmetric if $A^T=A$ and alternating if $b(v,v)=0$. For a general bilinear form, distinguish the left radical $\\{v:b(v,w)=0\\text{ for all }w\\}$ from the right radical $\\{w:b(v,w)=0\\text{ for all }v\\}$. In coordinates these are $\\ker A^T$ and $\\ker A$, respectively. The form is **nondegenerate** when both are zero; in finite dimension this is equivalent to $A$ being invertible. For symmetric or alternating forms the two radicals agree.

Over $\\mathbb{C}$, write a first-slot-linear sesquilinear form as $h(x,y)=[y]_B^{*}A[x]_B$. It is Hermitian when $A^{*}=A$. Under $[x]_B=P[x]_{B'}$, its matrix law is $A'=P^{*}AP$.

<a id="section-15-2-quadratic-forms-and-polarization"></a>
## 2. Quadratic forms and polarization {#section-17-2-quadratic-forms-and-polarization}

**Definition 20.2 (Associated quadratic form).**

A quadratic form associated with symmetric $b$ is $q(v)=b(v,v)$. If characteristic is not two,

$b(u,v)=(q(u+v)-q(u)-q(v))/2$.

Thus $q$ determines $b$. In characteristic two, division fails and alternating contributions disappear on the diagonal; quadratic forms require separate treatment.

<a id="section-25-3-real-symmetric-classification"></a>
## 3. Real symmetric classification {#section-27-3-real-symmetric-classification}

**Theorem 20.1 (Real inertia classification).**

Every real symmetric form has an orthogonal eigenbasis, hence a diagonal matrix. Scaling nonzero basis vectors reduces diagonal entries to $+1$ or $-1$; zero entries remain. Sylvester’s law of inertia says the counts $(n_+,n_-,n_0)$ are invariant under congruence.

One proof characterizes $n_+$ as the maximum dimension of a subspace on which $q$ is positive definite, and similarly for $n_-$; $n_0$ is radical dimension. These characterizations are coordinate-free.

Consequently two real symmetric forms are congruent iff they have the same inertia.

<a id="section-35-4-alternating-forms"></a>
## 4. Alternating forms {#section-37-4-alternating-forms}

**Theorem 20.2 (Symplectic blocks and even rank).**

An alternating form has even rank. If nonzero, choose $u,v$ with $b(u,v)\\ne 0$, scale to one, and split off the nondegenerate plane with matrix $\\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}$. Induction yields a direct sum of such symplectic blocks plus a radical. A nondegenerate alternating space therefore has even dimension.

In characteristic two, alternating matrices are symmetric with zero diagonal, so “skew-symmetric” alone is not a safe definition.

<a id="section-43-5-hermitian-forms"></a>
## 5. Hermitian forms {#section-45-5-hermitian-forms}

**Theorem 20.3 (Hermitian inertia classification).**

Complex Hermitian forms diagonalize with real eigenvalues and are classified under congruence by inertia just like real symmetric forms. Positive-definite Hermitian forms are inner products. Indefinite forms produce geometry in which nonzero vectors may satisfy $q(v)=0$; these isotropic vectors do not contradict nondegeneracy.

<a id="section-49-6-pullbacks-and-restrictions"></a>
## 6. Pullbacks and restrictions {#section-51-6-pullbacks-and-restrictions}

For $T:U\\to V$, the pullback $T^{*}b$ is $(u,u')\\to b(Tu,Tu')$, with matrix $T^TAT$. Restriction is pullback along inclusion. If $T$ is an isomorphism, this is congruence; if not, rank can decrease.

<a id="section-53-7-optimization-and-numerical-boundaries"></a>
## 7. Optimization and numerical boundaries {#section-55-7-optimization-and-numerical-boundaries}

For real symmetric $A$, positive definiteness is equivalent to all eigenvalues positive and to $q(x)>0$ for nonzero $x$. Sylvester’s criterion uses positive leading principal minors in a fixed ordering. In floating computation, definiteness near zero requires scale-aware eigenvalue or Cholesky diagnostics; exact inertia can change under perturbation crossing singularity.

<a id="section-57-exercises-with-full-solutions"></a>
## Investigation: inertia without eigenvectors {#section-511-investigation-inertia-without-eigenvectors}

Classify a real symmetric integer matrix using congruence-preserving elimination, and compare with orthogonal diagonalization.

**Investigation solution.** Symmetric elimination performs the same elementary change on rows and columns, producing $A=L D L^T$ (with symmetric pivoting when needed). For $A=\\begin{pmatrix}2 & 2 & 0 \\\\ 2 & 0 & 0 \\\\ 0 & 0 & -3\\end{pmatrix}$, complete squares: $2x^2+4xy-3z^2=2(x+y)^2-2y^2-3z^2$, giving inertia $(1,2,0)$. Congruence elimination preserves the form and exposes inertia without solving a characteristic polynomial. Orthogonal diagonalization instead preserves Euclidean geometry and exposes actual eigenvalues. In floating arithmetic, pivoted $LDL^T$ with error analysis is the appropriate analogue; unpivoted symbolic steps are not automatically stable.
<a id="section-514-8-development-prove-what-a-congruence-classification-pr"></a>
## 8. Development: prove what a congruence classification preserves {#section-516-8-development-prove-what-a-congruence-classification-pr}

For a bilinear form, a basis change replaces both input coordinate columns by $P$ times the new column. The resulting matrix is $P^\\mathsf TAP$, not $P^{-1}AP$. Its entries describe the same pairwise measurements on newly chosen basis vectors. Similarity instead represents the same endomorphism in a new basis. Confusing these two constructions would incorrectly make a form's individual eigenvalues invariant under arbitrary changes of basis.

Let $A$ be real symmetric. Orthogonal spectral diagonalization first gives diagonal entries $\\lambda_i$. Rescale a basis vector for each nonzero entry by $|\\lambda_i|^{-1/2}$, and retain zero directions. This produces $\\operatorname{diag}(I_p,-I_q,0_r)$ by a generally nonorthogonal congruence. Existence uses the real spectral theorem and positive real square roots. It does not assert the corresponding normal form over a field without an order or these square roots.

Here is the full uniqueness argument, including degeneracy. In the displayed diagonal model, the span of its $p$ positive coordinate vectors is positive definite. Any subspace of dimension larger than $p$ meets the span of negative and zero coordinate vectors nontrivially, because the two dimensions sum to more than the ambient dimension. On that intersection the quadratic value is nonpositive. Thus $p$ is exactly the maximum dimension of a positive-definite subspace. Applying the same argument to the negative of the quadratic form identifies the negative count $q$, and the radical has dimension $r$.

An invertible coordinate map sends subspaces to subspaces of the same dimension and preserves every quadratic value in the new coordinates. Therefore all three numbers are invariant under congruence. Conversely, if two real symmetric forms have the same triple, carrying each to the same diagonal model and composing the basis changes gives a congruence between them. This proves classification, rather than just a method that happens to find some signs.

Nondegeneracy does not require every nonzero vector to have a nonzero quadratic value. In a form with one positive and one negative normalized coordinate, the vector $(1,1)$ is isotropic, but it does not pair to zero with every vector. The radical requires vanishing against every possible partner. Inertia records both the positive/negative balance and the separate zero block; an isotropic direction is not an additional zero block.


<a id="section-527-what-changes-over-a-field-without-real-signs"></a>
### What changes over a field without real signs {#section-529-what-changes-over-a-field-without-real-signs}

There is an algebraic diagonalization proof for a symmetric bilinear form over any field of characteristic different from two. If the form is nonzero, some vector $v$ has $b(v,v)\\ne0$: otherwise polarization would make every $b(x,y)$ zero. Put $a=b(v,v)$. Every vector splits as
$$x=\\frac{b(x,v)}a v+\\left(x-\\frac{b(x,v)}a v\\right),$$
and the second summand is orthogonal to $v$. The line $Fv$ meets its orthogonal complement only at zero, so this is a direct sum with block-diagonal form. Induction diagonalizes the complement until only a zero restriction remains.

**Worked example 20.1 (Rational and finite-field scalar square classes).**

This proof uses neither a Euclidean norm nor an order, but it cannot always normalize a nonzero diagonal coefficient to one or minus one. In one dimension, a basis change replaces $[a]$ by $[c^2a]$ for $c\\ne0$. Over $Q$, the forms $[1]$ and $[2]$ are not congruent, although over $R$ both have the same positive inertia. A rational square root of two would, in lowest terms $p/q$, give $p^2=2q^2$; then both $p$ and $q$ would be even, a contradiction. The reciprocal change would require the same missing square root.

Over the field with three elements, the only nonzero square is one, so the one-dimensional coefficients one and two also remain distinct under congruence. These are scalar square classes, not positive and negative signs from an order. A real-inertia classification must not be exported unchanged to an arbitrary field. In higher dimensions, this observation alone is not a complete classification by a list of individual square classes.

The characteristic restriction has a visible role. A nonzero alternating form has $b(v,v)=0$ for every vector, so the first diagonalization step cannot start in characteristic two even though the form can also be symmetric. Its symplectic block classification in §9 uses a different nondegenerate piece. The two methods are responding to different algebra, not competing prescriptions for the same unrestricted class.

<a id="section-541-derive-sylvester-s-criterion-through-a-schur-complement"></a>
### Derive Sylvester's criterion through a Schur complement {#section-543-derive-sylvester-s-criterion-through-a-schur-complement}

Suppose a real symmetric matrix is partitioned as
$$A=\\begin{pmatrix}a&r^\\mathsf T\\\\r&B\\end{pmatrix},\\qquad a\\ne0.$$
The invertible change
$$P=\\begin{pmatrix}1&-r^\\mathsf T/a\\\\0&I\\end{pmatrix}$$
gives
$$P^\\mathsf TAP=\\operatorname{diag}(a,S),\\qquad S=B-rr^\\mathsf T/a.$$
One can check this by multiplying $AP$ first: its upper-right block becomes zero, and the final left multiplication clears the lower-left block. Equivalently, the quadratic expression is
$$a\\left(x_1+r^\\mathsf Tx'/a\\right)^2+x'^\\mathsf TSx'.$$
Completing a square is therefore an invertible coordinate operation with a verifiable matrix certificate.

If $A$ is positive definite, its restriction to the first $j$ coordinate directions is positive definite. The spectral theorem on that restriction gives positive eigenvalues, hence a positive leading principal determinant. This proves necessity in Sylvester's criterion. Conversely, suppose all leading principal determinants are positive. The first gives $a>0$. The leading principal determinants of $S$ are the corresponding next leading determinants of $A$ divided by $a$, because the displayed elimination has determinant-one change matrices. They remain positive. Induction makes $S$ positive definite, and the square decomposition then makes $A$ positive definite.

The same decomposition with indefinite signs yields scalar-pivot $LDL^\\mathsf T$ steps when the pivot is nonzero, but an indefinite nonsingular matrix can have a zero leading pivot. For a block $\\begin{pmatrix}0&a\\\\a&0\\end{pmatrix}$ with $a\\ne0$, dividing by the first entry is impossible. Over $R$, the basis vectors $(1,1)$ and $(1,-1)$ give diagonal values $2a,-2a$. A block-pivot procedure may keep the two-dimensional block instead. A declared permutation or a two-by-two block is part of an indefinite factorization certificate; the positive-definite scalar-pivot proof is not a general indefinite algorithm.

In characteristic two that last basis change has determinant zero, so it is unavailable. The same zero-diagonal block is a nondegenerate alternating form there and cannot be congruent to a nonzero diagonal matrix: every diagonal value of an alternating form must vanish. This is an algebraic obstruction, not a numerical pivot failure.


<a id="section-560-a-nondegenerate-block-gives-an-inertia-certificate-too"></a>
### A nondegenerate block gives an inertia certificate too {#section-562-a-nondegenerate-block-gives-an-inertia-certificate-too}

The scalar Schur step generalizes when a whole symmetric block is invertible. Write
$$A=\\begin{pmatrix}B&C\\\\C^\\mathsf T&D\\end{pmatrix},
\\qquad
P=\\begin{pmatrix}I&-B^{-1}C\\\\0&I\\end{pmatrix}.$$
If $B$ is invertible and symmetric, multiplication gives
$$P^\\mathsf TAP
 =\\operatorname{diag}\\!\\left(B,D-C^\\mathsf TB^{-1}C\\right).$$
The determinant of $P$ is one. This is a congruence rather than a claim that $B$ is positive. Over $R$, the positive, negative and zero counts of the two diagonal blocks add because the resulting form is their direct sum and inertia is already proved invariant.

This identity explains how an indefinite factorization can use a nonsingular two-by-two block when no scalar diagonal pivot is available. It does not authorize division by a singular block, and it does not establish floating-point stability merely because the identity holds in exact arithmetic. A proposed certificate must state which block was inverted and verify that it is nonsingular.

For Hermitian matrices, replace $C^\\mathsf T$ by $C^*$ and use $P^*AP$. Since an invertible Hermitian $B$ has Hermitian inverse, the remaining block is $D-C^*B^{-1}C$, again Hermitian. The same substitution proof works, with conjugation in the specified positions. Real symmetric and complex Hermitian elimination have parallel formulas, but ordinary transpose cannot be substituted for conjugate transpose in the complex case.

<a id="section-575-9-development-split-alternating-planes-and-locate-radic"></a>
## 9. Development: split alternating planes and locate radicals {#section-577-9-development-split-alternating-planes-and-locate-radic}

Let $b$ be alternating over any field, including characteristic two. If it is nonzero, choose $u,v$ with $b(u,v)\\ne0$ and rescale one input to make $b(u,v)=1$. Alternation implies $b(v,u)=-1$. On $H=\\operatorname{span}(u,v)$, the matrix is
$$J=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix},$$
which is invertible over every field. The two vectors are independent: a relation between them pairs with $u$ and $v$ to force both coefficients zero.

For any $x\\in V$, put
$$x_\\perp=x-b(x,v)u+b(x,u)v.$$
Direct substitution gives $b(x_\\perp,u)=b(x_\\perp,v)=0$. Hence
$$x=b(x,v)u-b(x,u)v+x_\\perp$$
lies in $H+H^{\\perp_b}$. The intersection is zero, because the restriction to $H$ is nondegenerate. Alternation makes left and right orthogonality agree, so this is a direct sum on which the form is block diagonal. Its rank is two plus the rank on the complement.

Repeat on that complement while its form is nonzero. Finite dimension makes the process terminate with a radical on which every pairing is zero. The result is a sum of symplectic planes and a zero block, proving even rank and the even dimension of every nondegenerate alternating space. No step divided by two: the only divisions were by explicitly nonzero values $b(u,v)$.

The defining alternation must not be weakened to a sign equation. In characteristic two, the one-by-one matrix $[1]$ equals its negative transpose but is not alternating, since its value on the basis vector twice is one. By contrast, $J$ is symmetric in that characteristic, has zero diagonal, and remains nondegenerate. For any matrix $A$ in characteristic two, expanding $x^\\mathsf TAx$ shows that it vanishes for every $x$ exactly when all diagonal entries vanish and $a_{ij}+a_{ji}=0$: test first the basis vectors, then their pairwise sums.

This explains how a nonzero bilinear form can disappear from its diagonal function. The symplectic plane has $b(x,x)=0$ for all $x$ in every characteristic, even though it pairs its two basis vectors to one. In characteristic different from two, a quadratic form associated specifically with a symmetric form determines that symmetric form by polarization. It never recovers an arbitrary alternating contribution to a general bilinear form. In characteristic two even symmetric forms can be alternating, so the symmetric-to-quadratic identification itself needs revision.

<a id="section-593-restriction-can-create-a-radical"></a>
### Restriction can create a radical {#section-595-restriction-can-create-a-radical}

For a symmetric form on $V$ and a subspace $U$, the radical of the restriction is
$$\\operatorname{rad}(b|_U)=U\\cap U^{\\perp_b}.$$
The definition asks only that a vector pair to zero with the partners in $U$, not with all of $V$. It is therefore not generally $U\\cap\\operatorname{rad}b$. For the nondegenerate real form $x_1y_1-x_2y_2$, the line generated by $(1,1)$ has zero restricted form and is entirely its own restricted radical. The ambient radical is zero.

When $b|_U$ is nondegenerate, an orthogonal complement does give a direct decomposition. Choose a basis of $U$, whose Gram matrix is invertible. For any $x\\in V$, solve the finite linear equations for $u\\in U$ with $b(x-u,z)=0$ for every basis vector $z$ of $U$. Invertibility gives a unique $u$, so $V=U\\oplus U^{\\perp_b}$. This is the same mechanism used in the symplectic-plane split. If the restricted Gram matrix is singular, that proof has failed for a mathematical reason and cannot be rescued by calling the space orthogonal.

**Worked example 20.2 (Compute two different radicals of the same form).**

For general bilinear forms without symmetry, there are two radicals because a vector can annihilate every partner in one slot but not the other. A matrix example is $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$: its left radical is $\\operatorname{span}(e_2)$ and its right radical is $\\operatorname{span}(e_1)$. Both have dimension one, yet they are different subspaces. Equal nullities are not an equality of the two kinds of annihilator. To verify both kernels directly, write $x=(x_1,x_2)$ and $y=(y_1,y_2)$. Then $b(x,y)=x_1y_2$. Vanishing for every $y$ is equivalent to $x_1=0$, giving the left radical $Fe_2$; vanishing for every $x$ is equivalent to $y_2=0$, giving the right radical $Fe_1$. The form has rank one, but its two slots forget different directions. This computation works over every field and uses no symmetry hypothesis.


<a id="section-606-nondegenerate-bilinear-forms-identify-the-correct-dual-"></a>
### Nondegenerate bilinear forms identify the correct dual map {#section-608-nondegenerate-bilinear-forms-identify-the-correct-dual-}

For a bilinear form, define $\\Phi_R:V\\to V^*$ by $\\Phi_R(w)(v)=b(v,w)$. Both arguments are linear, so $\\Phi_R$ is a linear map with kernel the right radical. Its matrix in the given basis and dual basis is $A$. The other map $\\Phi_L(v)(w)=b(v,w)$ has matrix $A^\\mathsf T$ and kernel the left radical. For a finite-dimensional nondegenerate form each map is an isomorphism, though they need not be the same isomorphism.

If $U\\subseteq V$, its right orthogonal space is $\\Phi_R^{-1}(U^0)$, where $U^0$ is the annihilator from Chapter 8. Since $\\Phi_R$ is an isomorphism and $\\dim U^0=n-\\dim U$, this orthogonal space has that dimension. Equivalently, restricting functionals to $U$ is onto: extend a basis of $U$ to one of $V$ and extend any prescribed functional by setting the added basis values to zero. This links an orthogonality dimension formula to duality rather than to a drawing.

For a symmetric form, left and right orthogonal spaces agree. Nondegeneracy of the restricted form makes their intersection with $U$ zero, and the dimension formula then gives $V=U\\oplus U^{\\perp_b}$. If the restriction is degenerate, the sum can fail to be direct even when the ambient form is nondegenerate. This recovers the isotropic-line example with a precise dimension explanation.

For a Hermitian form, the analogous assignment $w\\mapsto h(\\,\\cdot\\,,w)$ is conjugate-linear in $w$, not linear. The resulting functional is linear in its input, but its dependence on the represented vector has changed. One may use a conjugated dual space or explicitly conjugate the coordinates; one may not silently reuse the bilinear map as a complex-linear identification. The Gram-matrix computation in §10 keeps that distinction visible.


<a id="section-617-the-radical-of-a-pullback-need-not-be-only-the-map-kern"></a>
### The radical of a pullback need not be only the map kernel {#section-619-the-radical-of-a-pullback-need-not-be-only-the-map-kern}

For a symmetric bilinear form $b$ on $V$ and a linear map $T:U\\to V$, a vector $u$ lies in the radical of the pullback exactly when $b(Tu,Tw)=0$ for every $w\\in U$. Equivalently,
$$Tu\\in\\operatorname{im}T\\cap(\\operatorname{im}T)^{\\perp_b}.$$
This always includes $\\ker T$, but can be larger. The map $U/\\ker T\\to\\operatorname{im}T$ is an isomorphism, and under it the descended pullback is precisely the restricted form on the image. Therefore the rank of the pullback equals the rank of $b|_{\\operatorname{im}T}$, not necessarily the rank of $T$.

For instance, the injective map $t\\mapsto(t,t)$ into the real form $x_1y_1-x_2y_2$ pulls back to the zero form. Its image is isotropic, so the whole one-dimensional domain is radical although the map kernel is zero and the ambient form is nondegenerate. Invertibility in a congruence avoids this issue because the image is the whole ambient space. An inclusion or other nonsurjective pullback requires inspecting the image restriction.

<a id="section-625-10-development-keep-the-complex-conjugation-in-its-decl"></a>
## 10. Development: keep the complex conjugation in its declared slot {#section-627-10-development-keep-the-complex-conjugation-in-its-decl}

The complex convention is
$$h(x,y)=y^*Ax,$$
linear in $x$ and conjugate-linear in $y$. Thus $A_{ij}=h(e_j,e_i)$, an order worth checking when converting a table of form values into a matrix. If both coordinate columns change by $P$, substitution gives $h(x,y)=y'^*P^*APx'$. Hermitian congruence is therefore $P^*AP$, with conjugate transpose, not ordinary transpose.

For Hermitian $h$, let $q(x)=h(x,x)\\in R$. Expanding with $z=h(x,y)$ gives
$$q(x+y)-q(x-y)=4\\operatorname{Re}z,$$
$$q(x+iy)-q(x-iy)=4\\operatorname{Im}z.$$
The second sign follows from $h(x,iy)=-ih(x,y)$ and $h(iy,x)=ih(y,x)$. Consequently the first-slot-linear polarization identity is
$$h(x,y)=\\frac14\\{q(x+y)-q(x-y)
               +i q(x+iy)-i q(x-iy)\\}.$$
Using a formula from the opposite convention without conjugating or reversing its sign would reconstruct a different form.

For a worked matrix, take
$$A=\\begin{pmatrix}1&i\\\\-i&2\\end{pmatrix}.$$
Its quadratic function on $(z,w)$ is $|z+iw|^2+|w|^2$. The basis matrix
$$P=\\begin{pmatrix}1&-i\\\\0&1\\end{pmatrix}$$
therefore gives $P^*AP=I$. Direct multiplication confirms $AP=\\begin{pmatrix}1&0\\\\-i&1\\end{pmatrix}$ and then $P^*(AP)=I$. This is a congruence certificate; the entries one and one of its normalized form are not being claimed as the original operator eigenvalues.

Test the slot convention with exact values. Here $h(e_1,e_2)=-i$. The four quadratic values at $e_1+e_2,e_1-e_2,e_1+ie_2,e_1-ie_2$ are respectively $3,3,1,5$. Substituting into polarization gives $-i$, with the correct sign. Also $h(ie_1,e_2)=i h(e_1,e_2)=1$, directly checking first-slot linearity.

Hermitian inertia follows the real proof with complex-linear subspaces and a unitary spectral basis. Eigenvalues are real; scaling each nonzero diagonal direction by the positive real number $|\\lambda|^{-1/2}$ produces signs and zeros. The maximum complex dimension of a positive-definite subspace identifies the positive count, and similarly for the negative count. A nondegenerate indefinite Hermitian form can have isotropic vectors, just as a real symmetric one can. It is positive definiteness, rather than Hermitian symmetry alone, that makes a form an inner product.

<a id="section-649-a-form-and-an-operator-use-different-additional-structu"></a>
### A form and an operator use different additional structure {#section-651-a-form-and-an-operator-use-different-additional-structu}

On a real Euclidean space, a symmetric matrix can simultaneously describe a form $b(x,y)=x^\\mathsf TAy$ and its associated self-adjoint operator. A nonorthogonal change of basis represents these two objects by different matrix rules. The form uses $P^\\mathsf TAP$. The operator uses $P^{-1}AP$, and the Euclidean inner product acquires Gram matrix $G=P^\\mathsf TP$. The two representations agree through the relation $P^\\mathsf TAP=G(P^{-1}AP)$, not by equating their matrices.

This identity explains why diagonalizing a form by congruence need not produce eigenvalues of the associated Euclidean operator. The new basis may normalize lengths differently in each direction. Orthogonal changes have $G=I$ and make the formulas coincide, while general congruences preserve signs of the form without preserving its Euclidean stretches.

For a complex Euclidean inner product, the same bookkeeping uses $G=P^*P$. The associated first-slot-linear form is $b_T(x,y)=\\langle Tx,y\\rangle=y^*G[T]x$, so its matrix is $G[T]$. This matrix is Hermitian when the operator is self-adjoint relative to $G$, even if the operator's coordinate array is not Hermitian under the unweighted coordinate inner product. Carry the Gram matrix when a basis is not orthonormal.

<a id="section-657-11-completion-of-the-existing-inertia-investigation-mod"></a>
## 11. Completion of the existing inertia investigation model {#section-659-11-completion-of-the-existing-inertia-investigation-mod}

**Worked example 20.3 (A complete congruence certificate and orthogonal comparison).**

This is an exact completion of the existing matrix model, with its original assignment and valid square-completion argument retained. It is one worked response to that investigation, not another investigation or a demand for a numerical eigensolver run.

For the existing
$$A=\\begin{pmatrix}2&2&0\\\\2&0&0\\\\0&0&-3\\end{pmatrix},$$
take
$$P=\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix},
\\qquad D=\\operatorname{diag}(2,-2,-3).$$
The determinant of $P$ is one, so its columns are a basis. First multiplication gives
$$AP=\\begin{pmatrix}2&0&0\\\\2&-2&0\\\\0&0&-3\\end{pmatrix},$$
and multiplication by $P^\\mathsf T$ on the left gives $P^\\mathsf TAP=D$. Thus the old-coordinate substitution $(x,y,z)=(u-v,v,w)$ produces $2u^2-2v^2-3w^2$. This verifies the full congruence identity, not just a similarity or a list of proposed signs.

Equivalently,
$$L=P^{-\\mathsf T}=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&0&1\\end{pmatrix},
\\qquad A=LDL^\\mathsf T.$$
The three diagonal signs give inertia $(1,2,0)$, with zero radical. If a normalized signature matrix is desired, use $P\\operatorname{diag}(1/\\sqrt2,1/\\sqrt2,1/\\sqrt3)$ to obtain $\\operatorname{diag}(1,-1,-1)$ by congruence. This latter normalization uses real square roots; the unnormalized integer certificate already establishes the signs.

For an exact orthogonal comparison, the eigenvalues of the upper two-by-two block are $\\lambda_\\pm=1\\pm\\sqrt5$. Corresponding orthogonal eigenvectors are $(\\lambda_\\pm,2,0)$, since $\\lambda_\\pm^2=2\\lambda_\\pm+4$ and $\\lambda_+\\lambda_-+4=0$. Normalize each by $\\sqrt{\\lambda_\\pm^2+4}$ and adjoin $(0,0,1)$ to obtain an orthogonal matrix $U$. Then
$$U^\\mathsf TAU=\\operatorname{diag}(1+\\sqrt5,1-\\sqrt5,-3).$$
The eigenvalues differ from $2,-2,-3$, while their signs give the same inertia. The two certificates preserve different additional structure: $U$ preserves Euclidean lengths; $P$ supplies simpler exact form coordinates.

A self-review rubric for this existing model checks five separate items:

- State the real field, symmetry and the fixed matrix being classified.
- Exhibit an invertible $P$ and verify its determinant or inverse.
- Multiply the congruence identity explicitly and read positive, negative and zero counts from $D$.
- Distinguish $A=LDL^\\mathsf T$ from the basis change $P=L^{-\\mathsf T}$.
- Give an exact orthogonal comparison and separate it from any unperformed numerical computation.

A solution missing the identity $P^\\mathsf TAP=D$ has not supplied the requested congruence certificate. A solution calling the entries of $D$ the eigenvalues has confused the two classifications. These criteria are public mathematical feedback, not evidence of an unseen attempt, a grade or measured learning.

<a id="section-691-12-optional-practice-extensions"></a>
## 14. Source scope for form conventions {#section-761-14-source-scope-for-form-conventions}

The characteristic and alternating-form conventions can be checked in Keith Conrad, [Bilinear Forms](https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf), Theorem 1.6 and Theorems 5.1/5.4. The real signature argument above includes the degenerate case explicitly rather than importing only a nondegenerate classification. The complex polarization formula follows the first-slot-linear convention fixed in this book; changing that convention changes its displayed imaginary sign.

<a id="section-763-summary"></a>

## Summary

<a id="section-765-summary"></a>
Forms transform by congruence because both inputs change coordinates. Radical, rank and real inertia describe different aspects of their structure; isotropic vectors need not be radical vectors. Characteristic two requires particular care because diagonal quadratic values can lose bilinear information.

## Exercises {#section-59-exercises-with-full-solutions}

<a id="section-59-1-transformation-law"></a>
### 1. Transformation law {#section-61-1-transformation-law}
Derive $A'=P^TAP$.

<details>
<summary>Hint 1</summary>

Write the same two vectors as Px and Py in the old coordinates.

</details>

<details>
<summary>Hint 2</summary>

Substitute into xᵀAy and collect the new coordinate expression.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute old coordinates $Px',Py'$ into $x^TAy$; the result is $x'^TP^TAPy'$.


</details>

<a id="section-84-2-radical"></a>
### 2. Radical {#section-86-2-radical}
Identify both radicals with matrix kernels.

<details>
<summary>Hint 1</summary>

Test b(v,w)=0 against every vector in the opposite slot.

</details>

<details>
<summary>Hint 2</summary>

The right radical is ker A and the left radical is ker Aᵀ in the usual column convention.

</details>

<details>
<summary>Solution</summary>

**Solution.** $b(v,w)=v^TAw$ vanishes for every $w$ iff $v^TA=0$, equivalently $A^Tv=0$, so the left radical is $\\ker A^T$. It vanishes for every $v$ iff $Aw=0$, so the right radical is $\\ker A$. For a square matrix these kernels have equal dimension, but they need not be the same subspace unless the form has additional symmetry.


</details>

<a id="section-109-3-nondegeneracy-invariance"></a>
### 3. Nondegeneracy invariance {#section-111-3-nondegeneracy-invariance}
Prove congruence preserves rank.

<details>
<summary>Hint 1</summary>

Congruence multiplies on both sides by invertible matrices.

</details>

<details>
<summary>Hint 2</summary>

Neither multiplication changes rank.

</details>

<details>
<summary>Solution</summary>

**Solution.** Left and right multiplication by invertible $P^T,P$ preserves matrix rank.


</details>

<a id="section-134-4-polarization"></a>
### 4. Polarization {#section-136-4-polarization}
Verify the formula.

<details>
<summary>Hint 1</summary>

Expand q(u+v) and subtract q(u) and q(v).

</details>

<details>
<summary>Hint 2</summary>

For a symmetric bilinear form the remaining term is 2b(u,v), requiring 2 invertible.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand $q(u+v)=b(u,u)+b(u,v)+b(v,u)+b(v,v)=q(u)+2b(u,v)+q(v)$.


</details>

<a id="section-159-5-characteristic-two"></a>
### 5. Characteristic two {#section-161-5-characteristic-two}
Why does $q$ not determine an arbitrary bilinear form there?

<details>
<summary>Hint 1</summary>

The coefficient 2 in polarization becomes zero.

</details>

<details>
<summary>Hint 2</summary>

A nonzero alternating form can have b(v,v)=0 for every v.

</details>

<details>
<summary>Solution</summary>

**Solution.** Alternating forms satisfy $b(v,v)=0$ for every $v$ yet can be nonzero, so adding one leaves the same diagonal function.


</details>

<a id="section-184-6-diagonalization"></a>
### 6. Diagonalization {#section-186-6-diagonalization}
Why does a real symmetric matrix diagonalize orthogonally?

<details>
<summary>Hint 1</summary>

Apply the real self-adjoint spectral theorem.

</details>

<details>
<summary>Hint 2</summary>

An orthonormal eigenbasis gives a diagonal congruence as well as a similarity.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is self-adjoint for the standard inner product; apply the real spectral theorem.


</details>

<a id="section-209-7-normalize-entries"></a>
### 7. Normalize entries {#section-211-7-normalize-entries}
How reduce a nonzero real diagonal entry $a$?

<details>
<summary>Hint 1</summary>

Rescale its basis vector by 1/√|a|.

</details>

<details>
<summary>Hint 2</summary>

The diagonal coefficient becomes its sign.

</details>

<details>
<summary>Solution</summary>

**Solution.** Replace its basis vector by $v/\\sqrt{\\left|a\\right|}$; the new value is $a/\\left|a\\right|$, equal to $+1$ or $-1$.


</details>

<a id="section-234-8-inertia-invariance"></a>
### 8. Inertia invariance {#section-236-8-inertia-invariance}
Why is $n_+$ the maximal positive-subspace dimension?

<details>
<summary>Hint 1</summary>

The positive diagonal coordinate subspace gives the lower bound.

</details>

<details>
<summary>Hint 2</summary>

Any larger subspace intersects the nonpositive coordinate subspace nontrivially, contradicting positive definiteness on it.

</details>

<details>
<summary>Solution</summary>

**Solution.** The span of positive diagonal vectors achieves it. Any larger subspace meets the span of negative and zero vectors nontrivially by dimension counting, yielding a vector with nonpositive quadratic value.


</details>

<a id="section-259-9-classify-a-form"></a>
### 9. Classify a form {#section-261-9-classify-a-form}
Find inertia of $q(x,y)=x^2+4xy+3y^2$.

<details>
<summary>Hint 1</summary>

Complete the square.

</details>

<details>
<summary>Hint 2</summary>

Write q=(x+2y)²−y² and read the signs.

</details>

<details>
<summary>Solution</summary>

**Solution.** Complete square: $(x+2y)^2-y^2$, so inertia is $(1,1,0)$.


</details>

<a id="section-284-10-isotropic-but-nondegenerate"></a>
### 10. Isotropic but nondegenerate {#section-286-10-isotropic-but-nondegenerate}
Give an example.

<details>
<summary>Hint 1</summary>

Use the real form x²−y².

</details>

<details>
<summary>Hint 2</summary>

The vector (1,1) is isotropic while the representing matrix is invertible.

</details>

<details>
<summary>Solution</summary>

**Solution.** $q(x,y)=x^2-y^2$ is nondegenerate with matrix $\\operatorname{diag}(1,-1)$, yet $q(1,1)=0$.


</details>

<a id="section-309-11-alternating-rank"></a>
### 11. Alternating rank {#section-311-11-alternating-rank}
Prove it is even.

<details>
<summary>Hint 1</summary>

Split off a symplectic plane whenever the form is nonzero.

</details>

<details>
<summary>Hint 2</summary>

Each such plane contributes rank two, and induction handles the orthogonal remainder.

</details>

<details>
<summary>Solution</summary>

**Solution.** Split off a nondegenerate symplectic plane whenever the form is nonzero on the quotient by its radical; its orthogonal complement reduces dimension and rank by two. Induct.


</details>

<a id="section-334-12-odd-dimension"></a>
### 12. Odd dimension {#section-336-12-odd-dimension}
Prove every alternating form on odd-dimensional $V$ is degenerate.

<details>
<summary>Hint 1</summary>

Combine the even-rank theorem with the odd dimension.

</details>

<details>
<summary>Hint 2</summary>

Rank cannot equal an odd full dimension.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its rank is even and cannot equal odd $\\operatorname{dim} V$, so its radical has positive dimension.


</details>

<a id="section-359-13-symplectic-pair"></a>
### 13. Symplectic pair {#section-361-13-symplectic-pair}
Given nonzero alternating $b$, find $u,v$ with $b(u,v)=1$.

<details>
<summary>Hint 1</summary>

Choose u,v with b(u,v)≠0.

</details>

<details>
<summary>Hint 2</summary>

Rescale one vector by the inverse of that nonzero scalar.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose a pair with nonzero value and scale one vector by its inverse.


</details>

<a id="section-384-14-pullback-matrix"></a>
### 14. Pullback matrix {#section-386-14-pullback-matrix}
Derive $T^TAT$.

<details>
<summary>Hint 1</summary>

Substitute Tv and Tw into the original form.

</details>

<details>
<summary>Hint 2</summary>

In coordinates the two occurrences of T appear as Tᵀ and T.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute coordinate vectors $Tx,Ty$ into $(Tx)^TA(Ty)$.


</details>

<a id="section-409-15-positive-criteria"></a>
### 15. Positive criteria {#section-411-15-positive-criteria}
Prove positive definite implies invertible.

<details>
<summary>Hint 1</summary>

A kernel vector has zero quadratic value.

</details>

<details>
<summary>Hint 2</summary>

Positive definiteness forbids a nonzero such vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** A kernel vector has $q(v)=0$; definiteness forces it to be zero.


</details>

<a id="section-434-16-similarity-versus-congruence"></a>
### 16. Similarity versus congruence {#section-436-16-similarity-versus-congruence}
Why can congruence change eigenvalues?

<details>
<summary>Hint 1</summary>

A one-dimensional rescaling already changes a nonzero diagonal coefficient.

</details>

<details>
<summary>Hint 2</summary>

Congruence changes the geometry's coordinates through two matching factors rather than an inverse pair.

</details>

<details>
<summary>Solution</summary>

**Solution.** $P^TAP$ is not generally $P^{-1}AP$; e.g. scaling a one-dimensional basis changes $[a]$ to $[p^2a]$ while the form is the same.


</details>

<a id="section-459-17-hermitian-reality"></a>
### 17. Hermitian reality {#section-461-17-hermitian-reality}
Prove $h(v,v)$ is real.

<details>
<summary>Hint 1</summary>

Hermitian symmetry gives h(v,v)=overline{h(v,v)}.

</details>

<details>
<summary>Hint 2</summary>

A scalar equal to its conjugate is real.

</details>

<details>
<summary>Solution</summary>

**Solution.** Hermitian symmetry gives $h(v,v)=\\overline{h(v,v)}$, the criterion for a complex number to be real.


</details>

<a id="section-484-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-486-18-numerical-boundary}
Why is a tiny positive computed eigenvalue not an unconditional definiteness certificate?

<details>
<summary>Hint 1</summary>

Compare the eigenvalue with a rigorous bound on numerical error.

</details>

<details>
<summary>Hint 2</summary>

A sign smaller than the possible perturbation cannot certify the sign of the exact eigenvalue.

</details>

<details>
<summary>Solution</summary>

**Solution.** Rounding and data uncertainty may exceed its separation from zero; a claim needs backward error, scale, and a verified lower bound.


</details>

<a id="section-509-investigation-inertia-without-eigenvectors"></a>

<a id="section-693-12-optional-practice-extensions"></a>
### 19. LSP-20-E19. A symplectic plane and its radical {#section-697-lsp-20-e19-a-symplectic-plane-and-its-radical}

Over an arbitrary field, let
$$A=\\begin{pmatrix}0&1&1\\\\-1&0&0\\\\-1&0&0\\end{pmatrix}.$$
Show that its form is alternating. Find an invertible basis matrix putting it into $J\\oplus0$, identify its radical, and explain how the certificate behaves in characteristic two. Why does the diagonal quadratic function alone fail to identify this form?

<details>
<summary>Hint 1</summary>

Use e₁,e₂ as a symplectic pair and solve Av=0.

</details>

<details>
<summary>Hint 2</summary>

The remaining radical vector completes the basis; check xᵀAx directly, including characteristic two.

</details>

<a id="section-715-lsp-20-e20-crossing-a-zero-signature-direction"></a>
### 20. LSP-20-E20. Crossing a zero signature direction {#section-717-lsp-20-e20-crossing-a-zero-signature-direction}

Replace only the last diagonal entry of the existing investigation matrix by a real parameter $t$, giving
$$A_t=\\begin{pmatrix}2&2&0\\\\2&0&0\\\\0&0&t\\end{pmatrix}.$$
Use one fixed congruence basis to classify its inertia for $t>0$, $t<0$ and $t=0$. Identify the radical at zero and explain why no numerical eigenvalue calculation is needed.

<details>
<summary>Hint 1</summary>

Complete the square in the first two coordinates using a basis independent of t.

</details>

<details>
<summary>Hint 2</summary>

That block has one positive and one negative direction; the last coefficient changes sign through zero.

</details>

<a id="section-735-13-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-737-13-solutions-to-practice-extensions"></a>
<a id="section-737-lsp-20-e19-a-symplectic-plane-and-its-radical-solution"></a>
### LSP-20-E19. A symplectic plane and its radical — solution {#section-739-lsp-20-e19-a-symplectic-plane-and-its-radical-solution}

<details>
<summary>Solution</summary>


The diagonal is zero and $A^\\mathsf T=-A$, so expansion gives $x^\\mathsf TAx=0$ over every field, including characteristic two. Use the basis $(e_1,e_2,e_3-e_2)$, with matrix $P=\\begin{pmatrix}1&0&0\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$ of determinant one. Pairing its first two vectors gives one and its third vector pairs to zero with all three, so $P^\\mathsf TAP=J\\oplus0$. The radical is $\\operatorname{span}(e_3-e_2)$ and rank is two. In characteristic two the minus signs become plus, while the same determinant-one basis remains invertible and the block remains nondegenerate. The diagonal function is identically zero even though the form pairs $e_1,e_2$ to one; it therefore cannot distinguish this form from the zero form.


</details>

<a id="section-748-lsp-20-e20-crossing-a-zero-signature-direction-solution"></a>
### LSP-20-E20. Crossing a zero signature direction — solution {#section-750-lsp-20-e20-crossing-a-zero-signature-direction-solution}

<details>
<summary>Solution</summary>


The same matrix $P=\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$ gives $P^\\mathsf TA_tP=\\operatorname{diag}(2,-2,t)$. Thus inertia is $(2,1,0)$ for $t>0$, $(1,2,0)$ for $t<0$, and $(1,1,1)$ for $t=0$. At zero the radical is $\\operatorname{span}(e_3)$. The leading two directions retain opposite signs in every case; only the last direction crosses the singular boundary. The exact congruence certificate and the sign of the real parameter determine the classification without approximating eigenvalues.


</details>

<a id="section-759-14-source-scope-for-form-conventions"></a>
`;export{e as default};