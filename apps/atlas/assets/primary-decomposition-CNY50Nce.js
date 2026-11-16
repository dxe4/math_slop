var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: primary-decomposition
title: "Primary Decomposition and Generalized Eigenspaces"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Primary Decomposition and Generalized Eigenspaces {#section-1-primary-decomposition-and-generalized-eigenspaces}

When the minimal polynomial factors into coprime powers, polynomial Bézout identities split the entire space into invariant pieces. Each piece contains exactly one irreducible obstruction. If those irreducibles are linear, the pieces are generalized eigenspaces.

<a id="section-3-1-the-primary-decomposition-theorem"></a>
## 1. The primary decomposition theorem {#section-5-1-the-primary-decomposition-theorem}

**Theorem 13.1 (Primary decomposition over the stated field).**

Suppose

$m_T=p_1^{a_1}\\ldots p_r^{a_r}$

with distinct monic irreducible polynomials $p_i \\in \\mathbb{F}[t]$. Define

$V_i=\\operatorname{ker} p_i(T)^{a_i}$.

Then

$V=V_1 \\oplus \\ldots \\oplus V_r$,

each $V_i$ is invariant, and the restriction $T_i=T|_{V_i}$ has minimal polynomial $p_i^{a_i}$.

<a id="section-21-proof-by-polynomial-projections"></a>
### Proof by polynomial projections {#section-23-proof-by-polynomial-projections}

Let $q_i=m_T/p_i^{a_i}$. Since $q_i$ and $p_i^{a_i}$ are coprime, choose $r_i,s_i$ with

$r_iq_i+s_ip_i^{a_i}=1$.

Modulo the pairwise coprime factors, the Chinese remainder theorem constructs polynomials $e_i$ satisfying

$e_i=1 mod p_i^{a_i}$, $e_i=0 mod p_j^{a_j}$ for $j\\ne i$, and $\\sum e_i=1 mod m_T$.

Set $E_i=e_i(T)$. Then $\\sum E_i=I$, $E_iE_j=0$ for $i\\ne j$, $E_i^2=E_i$, and $\\operatorname{im} E_i=V_i$. Hence every vector decomposes uniquely as $\\sum_i E_i v$.

Restriction minimal polynomials divide the named powers. If the exponent dropped on a component, the lcm of restriction minimal polynomials would be smaller than $m_T$, a contradiction.

<a id="section-35-2-generalized-eigenspaces"></a>
## 2. Generalized eigenspaces {#section-37-2-generalized-eigenspaces}

**Definition 13.1 (Generalized eigenspaces).**

If $m_T$ splits,

$m_T=\\prod_\\lambda (t-\\lambda)^{a_{\\lambda}}$,

and the primary component is

$G_{\\lambda}=\\operatorname{ker}(T-\\lambda I)^{a_{\\lambda}}$.

It equals the stabilized union of kernels:

$\\operatorname{ker}(T-\\lambda I) \\subseteq \\operatorname{ker}(T-\\lambda I)^2 \\subseteq \\ldots$.

On $G_{\\lambda}$, write

$T=\\lambda I+N_{\\lambda}$,

where $N_{\\lambda}$ is nilpotent of index $a_{\\lambda}$. Thus every split operator is a direct sum of “scalar plus nilpotent” primary restrictions.

<a id="section-57-3-stabilization"></a>
## 3. Stabilization {#section-59-3-stabilization}

**Proposition 13.2 (Kernel stabilization and Fitting decomposition).**

For any endomorphism $A$, ascending kernels and descending images stabilize in at most $n$ steps. If $\\operatorname{ker} A^k=\\operatorname{ker} A^{k+1}$, then all later kernels agree: if $A^{k+2}v=0$, then $Av \\in \\operatorname{ker} A^{k+1}=\\operatorname{ker} A^k$, so $v \\in \\operatorname{ker} A^{k+1}$.

At a stable exponent $k$,

$V=\\operatorname{ker} A^k \\oplus \\operatorname{im} A^k$.

Their intersection is zero: if $x=A^ky$ and $A^kx=0$, then $A^{2k}y=0$; stabilization gives $y \\in \\operatorname{ker} A^k$, so $x=0$. Rank–nullity gives dimensions summing to $n$.

For $A=T-\\lambda I$, this is the Fitting decomposition into generalized $\\lambda$-part and a part on which $T-\\lambda I$ is invertible.

<a id="section-71-4-algebraic-and-geometric-multiplicities"></a>
## 4. Algebraic and geometric multiplicities {#section-73-4-algebraic-and-geometric-multiplicities}

When $\\chi_T$ splits, the algebraic multiplicity of $\\lambda$ equals $\\operatorname{dim} G_{\\lambda}$. Indeed, a basis adapted to primary components makes the characteristic polynomial a product; on $G_{\\lambda}$, $T=\\lambda I+N$ has upper triangular form with diagonal $\\lambda$, so its characteristic polynomial is $(t-\\lambda)^{\\operatorname{dim} G_{\\lambda}}$.

The eigenspace $\\operatorname{ker}(T-\\lambda I)$ lies inside $G_{\\lambda}$, so geometric multiplicity is at most algebraic multiplicity. Equality for every eigenvalue occurs exactly when every nilpotent part is zero, equivalently when $m_T$ has no repeated linear factor.

<a id="section-77-5-diagonalizability-criterion"></a>
## 5. Diagonalizability criterion {#section-79-5-diagonalizability-criterion}

**Theorem 13.3 (Split square-free minimum criterion).**

An operator is diagonalizable over $F$ iff its minimal polynomial splits into distinct linear factors.

If diagonalizable, it is annihilated by the product of $(t-\\lambda)$ over its distinct diagonal entries, so $m_T$ divides a square-free split polynomial. Conversely, if $m_T$ has distinct linear factors, primary decomposition gives $V=\\oplus \\operatorname{ker}(T-\\lambda I)$, a basis of eigenvectors.

This criterion separates two obstructions: the polynomial may fail to split over $F$, or it may split with repeated factors encoding nonzero nilpotent structure.

<a id="section-87-6-computing-primary-projections"></a>
## 6. Computing primary projections {#section-89-6-computing-primary-projections}

If $m_T=a b$ with coprime $a,b$ and $ra+sb=1$, then

$E_a=s(T)b(T)$ projects onto $\\operatorname{ker} a(T)$,

$E_b=r(T)a(T)$ projects onto $\\operatorname{ker} b(T)$.

Always check labels by applying the factor meant to kill the image. Different Bézout coefficients yield the same operators modulo $m_T$.

<a id="section-97-example"></a>
### Example {#section-99-example}

If $\\operatorname{char}F\\ne3$ and $m_T=(t-1)^2(t+2)$, solve

$e_1=1 mod (t-1)^2$, $e_1=0 mod (t+2)$.

Such an $e_1$ produces the projection onto $G_1$; $I-e_1(T)$ projects onto the $-2$ eigenspace. The construction works without first finding bases for either component.

<a id="section-105-7-field-sensitive-pieces"></a>
## 7. Field-sensitive pieces {#section-107-7-field-sensitive-pieces}

Over $R$, an irreducible quadratic primary component may represent rotations and dilations with no real eigenvectors. Primary decomposition still works because its factors need only be irreducible, not linear. After extending scalars to $C$, such a component may split further. Dimensions and conjugate pairing must be tracked under scalar extension.

In positive characteristic, inseparable polynomials can have zero derivative and repeated roots after extension. The primary theorem remains valid over $F$; diagonalizability after extension still requires the minimal polynomial to split with no repeated roots.

<a id="section-111-8-common-errors-and-numerical-boundary"></a>
## 8. Common errors and numerical boundary {#section-113-8-common-errors-and-numerical-boundary}

- $\\operatorname{ker}(ab)(T)$ is not generally $\\operatorname{ker} a(T)+\\operatorname{ker} b(T)$ without coprimality.
- An exponent in $m_T$ is a largest nilpotent-chain length, not the dimension of the component.
- Generalized eigenvectors are not necessarily eigenvectors.
- Real primary components need not contain real eigenvalues.
- Exact generalized eigenspaces are discontinuous under perturbation; stable numerical invariant subspaces require separation and residual analysis.

<a id="section-119-9-summary"></a>
## 10. Why the polynomial projections have exactly the named images {#section-594-10-why-the-polynomial-projections-have-exactly-the-name}
The projection proof in Section 1 contains several distinct claims. Here is the image argument with its quantifiers visible. Let $g_i=p_i^{a_i}$ denote the chosen primary powers. Let $e_i$ have residue one modulo $g_i$ and zero modulo every other $g_j$. Since $g_i e_i$ is divisible by every factor, it is divisible by their product $m_T$. Hence $g_i(T)e_i(T)=0$, proving $\\operatorname{im}E_i\\subseteq\\ker g_i(T)$.

Conversely, write $e_i=1+g_i h_i$. If $v\\in\\ker g_i(T)$, evaluation gives $E_iv=v+g_i(T)h_i(T)v=v$. Thus every vector of that kernel lies in the image. These two containments prove equality. The statement is stronger than finding some vectors killed by the factor: it identifies the entire component and proves that the projection fixes it.

If $v$ belongs to another component $\\ker g_j(T)$, $j\\ne i$, divisibility of $e_i$ by $g_j$ gives $E_iv=0$. Therefore the decomposition of an arbitrary vector is obtained directly by evaluating the projectors. Uniqueness follows by applying each $E_i$ to a proposed sum. No eigenbasis has been assumed or used.

This also explains why the primary restriction has its full named minimum. A restriction minimum divides the corresponding power. The least common multiple of the restriction minima annihilates every component and hence all of $V$. It must therefore be divisible by $m_T$. If any exponent decreased, that least common multiple would lack the original exponent of that irreducible and could not be divisible by $m_T$. In particular, each listed component is nonzero.

A useful additional consequence concerns a polynomial $h$ coprime to a component's power $g_i$. Bézout gives $r h+s g_i=1$. On that component, $r(T)h(T)=I$, and the two factors commute, so $r(T)$ is a two-sided inverse of $h(T)$. Thus a polynomial that does not contain the component's irreducible factor acts invertibly there. This is the algebraic separation mechanism behind the projectors: each component's own factor kills a suitable power, while other coprime factors can be undone.

<a id="section-603-11-build-a-nilpotent-triangular-basis-from-the-kernel-f"></a>
## 11. Build a nilpotent triangular basis from the kernel flag {#section-605-11-build-a-nilpotent-triangular-basis-from-the-kernel-f}
Let $N$ be nilpotent on a finite-dimensional space $W$. Write $K_j=\\ker N^j$, with $K_0=\\{0\\}$, and choose $s$ with $N^s=0$, so $K_s=W$. Begin with a basis of $K_1$, extend it to a basis of $K_2$, then to a basis of $K_3$, and continue until $W$. Every extension is justified by the finite-dimensional basis-extension theorem. Record the newly appended vectors as layer $j$.

For a vector $b$ added at layer $j$, $N^j b=0$ implies $Nb\\in K_{j-1}$. All basis vectors needed to express $Nb$ were therefore placed in earlier layers. For layer one, $Nb=0$. Consequently the column of $N$ corresponding to any basis vector has nonzero entries only in earlier rows. The resulting matrix is strictly upper triangular. This proves the triangularity used in Section 4 and original Exercise 9 without assuming a Jordan basis.

The construction does not claim that the image of each basis vector is another single basis vector. It may be a combination of earlier vectors. Turning such a flag basis into chains with the special Jordan pattern is a stronger construction addressed later. The present basis is already sufficient to read the diagonal and determinant: $\\lambda I+N$ has diagonal entries all $\\lambda$, so its characteristic polynomial is $(t-\\lambda)^{\\dim W}$.

If $s$ is the smallest exponent killing a nonzero $W$, every inclusion $K_{j-1}\\subsetneq K_j$ for $1\\le j\\le s$ is strict. Indeed, equality at one consecutive stage propagates to all later stages by the stabilization argument, preventing the kernels from reaching $W$ later unless they had already reached it. Hence $s\\le\\dim W$. This distinguishes nilpotency index from dimension: one counts how many successive applications may be needed, while the other counts all independent directions.

For example, the zero operator on a five-dimensional space has index one but dimension five. At the other extreme, the rule $Ne_1=0$, $Ne_j=e_{j-1}$ for $j=2,\\ldots,d$ has index $d$ because $N^{d-1}e_d=e_1\\ne0$. Both examples fit the same flag proof. A repeated factor exponent in the minimal polynomial describes the longest surviving iteration, not the number of vectors in the primary component.

The zero-dimensional space is a harmless separate boundary: its empty basis gives an empty matrix and characteristic polynomial one. Assertions about a positive nilpotency index or a nonzero witness vector concern nonzero components.

<a id="section-616-12-a-kernel-flag-can-change-with-the-characteristic"></a>
## 12. A kernel flag can change with the characteristic {#section-618-12-a-kernel-flag-can-change-with-the-characteristic}

**Worked example 13.1 (One array in two characteristics).**
Consider the operator on $F^4$ defined on the standard basis by
\\[
Ne_1=0,\\qquad Ne_2=e_1,\\qquad Ne_3=e_1,\\qquad
Ne_4=e_2+e_3.
\\]
For $x=(x_1,x_2,x_3,x_4)$, this gives $Nx=(x_2+x_3,x_4,x_4,0)$ and $N^2x=(2x_4,0,0,0)$. These formulas determine the kernel layers directly; they are not observations from a numerical experiment.

If $\\operatorname{char}F\\ne2$, the first kernel is spanned by $e_1,e_2-e_3$, the second consists of vectors with $x_4=0$, and the third is all of $F^4$. Their dimensions are $2,3,4$. A kernel-adapted ordered basis is
\\[
B=(e_1,\\ e_2-e_3,\\ e_2,\\ e_4).
\\]
Its independence follows by reading the fourth coordinate, then the third and second, then the first. Its first two vectors span $K_1$, and its first three span $K_2$.

In this basis, $N$ kills the first two vectors, sends the third to the first, and sends the fourth to twice the third minus the second. Every image lies in an earlier layer, giving a strictly upper triangular matrix. Because $N^2e_4=2e_1\\ne0$ while $N^3=0$, its minimal polynomial is $t^3$. The characteristic polynomial is $t^4$. These conclusions have different reasons and need not have the same exponent.

In characteristic two, the same written operator has $N^2=0$, whereas $N\\ne0$. Its first kernel still has dimension two, now spanned by $e_1,e_2+e_3$, and its second kernel is all of $F^4$. The ordered list $(e_1,e_2+e_3,e_2,e_4)$ is a basis: its coordinate recovery is unchanged, with subtraction interpreted in the field. The last two basis vectors map respectively to the first and second. The minimal polynomial is now $t^2$, while the characteristic polynomial remains $t^4$.

This is a concrete example of field-sensitive primary information. The matrix entries contain only zero and one, but repeated application can create a coefficient two. Reducing that coefficient in a different characteristic changes a power relation and the kernel growth. The correct procedure is to perform arithmetic in the declared field at every stage, rather than infer a minimum from the appearance of the original entries.

It also shows what the flag method supplies: a basis witnessing triangularity and exact kernel dimensions, without needing to classify every nilpotent operator first. Those dimensions later constrain possible chain lengths, but no unproved chain decomposition was needed to obtain them.

<a id="section-640-13-stabilization-gives-a-complete-fitting-decomposition"></a>
## 13. Stabilization gives a complete Fitting decomposition {#section-642-13-stabilization-gives-a-complete-fitting-decomposition}
For an endomorphism $A$ of an $n$-dimensional space, the kernels $K_j=\\ker A^j$ increase and the images $I_j=\\operatorname{im}A^j$ decrease. A strict kernel inclusion increases dimension by at least one. Starting at $K_0=0$, either equality occurs before step $n$, or $K_n=V$ and the next stage is equal. Thus some $k\\le n$ satisfies $K_k=K_{k+1}$.

To propagate equality, suppose $A^{k+2}v=0$. Then $Av\\in K_{k+1}=K_k$, so $v\\in K_{k+1}$. This proves $K_{k+2}\\subseteq K_{k+1}$; the reverse inclusion is automatic. Repeating the argument proves $K_j=K_k$ for all $j\\ge k$. Rank–nullity then gives constant image dimensions, and the nested images of equal finite dimension agree: $I_j=I_k$ for all $j\\ge k$.

Take $x\\in K_k\\cap I_k$. Write $x=A^ky$ and use $A^kx=0$ to get $A^{2k}y=0$. Stabilization implies $y\\in K_k$, hence $x=0$. Their dimensions add to $n$ by rank–nullity, so $V=K_k\\oplus I_k$. Both summands are $A$-invariant, by applying one more $A$ to their defining equations.

On $K_k$, the restriction is nilpotent. On $I_k$, it is onto because $A(I_k)=I_{k+1}=I_k$, and it is injective as a finite-dimensional surjective endomorphism. One can also check injectivity directly: if $x=A^ky$ and $Ax=0$, then $y\\in K_{k+1}=K_k$, so $x=0$. This proves the invertible-part assertion instead of using the word “stable” as a substitute for it.

At $k=0$ the equality $K_0=K_1$ says $A$ is injective, hence invertible, and the decomposition is $0\\oplus V$. At the other extreme, a nilpotent $A$ eventually gives $V\\oplus0$. The same proof covers both boundaries using $A^0=I$.

For $A=T-\\lambda I$, this decomposition isolates the generalized $\\lambda$-component from a complementary invariant space on which $T-\\lambda I$ is invertible. A complement produced by arbitrary basis extension would not necessarily be invariant. The stable image is distinguished by the operator itself, so it supplies stronger structure than the existence of some vector-space complement.


The finite-dimensional hypothesis cannot be removed merely by saying that every vector is eventually killed. On $F[x]$, define the backward shift $L(1)=0$ and $L(x^j)=x^{j-1}$ for $j\\ge1$, extending linearly. Every polynomial is killed by a sufficiently high power, but no single power kills the whole space: $L^k(x^k)=1$. This is local nilpotence rather than a nilpotent endomorphism with a common finite index.

Its kernels are $\\ker L^k=\\operatorname{span}(1,x,\\ldots,x^{k-1})$ for $k\\ge1$. Coefficient comparison proves the formula: terms of degree at least $k$ shift to distinct surviving powers, so all their coefficients must vanish in the kernel. The kernel dimensions strictly increase forever. Yet every power is onto, because $x^j=L^k(x^{j+k})$. Thus $\\operatorname{im}L^k=F[x]$ and its intersection with the nonzero kernel is not zero. The finite Fitting conclusion fails for every positive $k$.

There is not even a nonzero polynomial annihilating $L$ on the whole space. If $q(t)=a_0+\\cdots+a_dt^d$ is nonzero, apply $q(L)$ to $x^d$. The result $a_0x^d+a_1x^{d-1}+\\cdots+a_d$ is nonzero because these monomials are independent. Every vector has an annihilating power, but the operator has no common minimum polynomial. This distinguishes a pointwise condition on vectors from a uniform algebraic condition on the operator.

It also prepares the finite-generation hypothesis in the next chapter. Any finite set of polynomials has a maximum degree $D$. Applying arbitrary polynomials in $L$ only reduces degree, so their generated $F[t]$-submodule stays inside $F_D[x]$ and cannot contain $x^{D+1}$. Hence this operator module is not finitely generated. A named torsion-module theorem cannot be applied on the strength of local nilpotence alone.

<a id="section-662-14-a-nonsplitting-primary-component-is-a-genuine-altern"></a>
## 14. A nonsplitting primary component is a genuine alternative {#section-664-14-a-nonsplitting-primary-component-is-a-genuine-altern}

**Worked example 13.2 (A real quadratic primary component and its complex split).**
Primary decomposition does not require real eigenvalues. Let
\\[
R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix},\\qquad
T=\\begin{pmatrix}R&I_2\\\\0&R\\end{pmatrix}
\\]
act on $R^4$, and let $p(t)=t^2+1$. Block multiplication gives
\\[
p(T)=T^2+I_4=\\begin{pmatrix}0&2R\\\\0&0\\end{pmatrix}.
\\]
This is nonzero over $R$ but its square is zero. Therefore $p(T)^2=0$ while $p(T)\\ne0$.

Since $p$ is irreducible over $R$, a monic divisor of $p^2$ is $1,p$ or $p^2$. The first two cannot annihilate this nonzero space and operator, so $m_T=p^2$. The block triangular determinant gives $\\chi_T=p^2$ as well. The whole four-dimensional space is one primary component for the quadratic $p$, with primary exponent two. The exponent is not its dimension.

There is no real eigenvector. If $Tv=\\lambda v$ for a real $\\lambda$ and nonzero $v$, then $p(T)^2v=p(\\lambda)^2v$. But $p(\\lambda)=\\lambda^2+1>0$, contradicting $p(T)^2=0$. Thus calling this a primary component is meaningful even though no real eigenvalue labels it.

Regard the same displayed matrix as an operator on $C^4$. Its minimal polynomial must now be checked against the complex factors; the real irreducibility argument alone no longer settles it. Choose $z_+=(1,-i)$ and $z_-=(1,i)$, which satisfy $Rz_+=iz_+$ and $Rz_-=-iz_-$. For either sign, the two vectors $(z_\\pm,0)$ and $(0,z_\\pm)$ span an invariant plane on which $T$ sends the second to the first plus $\\pm i$ times itself. These four vectors form a basis because $z_+,z_-$ are independent.

Hence over $C$ there are two primary planes, each with minimum $(t\\mp i)^2$. The characteristic polynomial is their product. This explicit calculation justifies the field-change conclusion without assuming that a real primary component must already contain real generalized eigenvectors. The new space has dimension four over $C$; it is the matrix interpreted with complex coefficients, rather than a claim that the same real coordinate set already permits complex scalar multiplication.

<a id="section-684-15-algebraic-orthogonality-does-not-supply-euclidean-or"></a>
## 15. Algebraic orthogonality does not supply Euclidean orthogonality {#section-686-15-algebraic-orthogonality-does-not-supply-euclidean-or}
The products $E_iE_j=0$ are often described as orthogonality of algebraic projections. This means that projecting into one component and then another gives zero. It does not mean the component subspaces are perpendicular in an inner product. Primary decomposition is defined over an arbitrary field without any metric data.

**Worked example 13.3 (Algebraic projectors on nonperpendicular lines).**

For an exact real example, use
\\[
T=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}.
\\]
Its eigenvectors $e_1$ and $(1,1)$ have distinct eigenvalues 1 and 2 and form a basis. The corresponding polynomial projectors are $E_1=2I-T$ and $E_2=T-I$, since those polynomials have values $(1,0)$ and $(0,1)$ at the two eigenvalues. Explicitly,
\\[
E_1=\\begin{pmatrix}1&-1\\\\0&0\\end{pmatrix},
\\qquad E_2=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}.
\\]
They sum to $I$, square to themselves, and their products in either order are zero. Their image lines have dot product $e_1\\cdot(1,1)=1$, so they are not perpendicular in the standard Euclidean geometry. The first projector is not a symmetric matrix.

If a linear map $S$ commutes with $T$, it commutes with every polynomial in $T$ and therefore with every primary projector. In particular, $S$ preserves each primary component: $S(E_iv)=E_i(Sv)$ lies in its image. Equivalently, commuting $S$ past the annihilating polynomial proves invariance directly. This statement needs no splitting or inner product.

The converse is weaker than commutation. A map preserving each component may still act inside a component in a way that does not commute with its restricted operator. And commutation does not by itself remove nilpotent structure: when $T=I_2$, every $S$ commutes with it, including the nonzero nilpotent map sending $e_2$ to $e_1$ and $e_1$ to zero. A simultaneous classification needs additional hypotheses, not just preservation of the primary pieces.

This distinguishes two kinds of choice. The primary subspaces and their polynomial projectors are determined by $T$ and its coprime factors. Bases inside those subspaces are generally not determined. Choosing one changes matrix blocks without changing the component itself. Later canonical forms refine the internal structure while keeping that distinction between a canonical subspace and a chosen coordinate description.


Even a fixed separation between eigenvalues does not bound the sizes of algebraic projectors without more geometric control. For real $s$, set $T_s=\\left(\\begin{smallmatrix}0&s\\\\0&1\\end{smallmatrix}\\right)$. Its eigenvalues are always 0 and 1. Its primary projectors are $E_0=I-T_s$ and $E_1=T_s$, and the identity $T_s^2=T_s$ checks both directly. Their image lines are $\\operatorname{span}(e_1)$ and $\\operatorname{span}((s,1))$.

Apply them to the Euclidean unit vector $e_2$. The components are $E_0e_2=(-s,0)$ and $E_1e_2=(s,1)$, whose sum remains $e_2$. The operator norms are therefore at least $|s|$, because the norm is the supremum of output length on unit inputs. Large opposite components can cancel while the reconstructed vector stays fixed. The eigenvalue gap is one for every $s$; it alone cannot supply a uniform bound on these oblique projections.

For a real symmetric operator, later spectral results add orthogonality that excludes this particular behavior. Here no such assumption was made, and $T_s$ is not symmetric when $s\\ne0$. The computation identifies exactly what extra geometry a stability statement would need. It is an exact parameterized example, with no floating-point run, numerical residual or general perturbation theorem claimed.

The same distinction affects commuting maps. Preservation of a canonical component is an algebraic assertion, while bounds on the length of its projected vectors require a norm and quantitative hypotheses. A component dimension or a polynomial factorization cannot stand in for those estimates. This is why the proof and numerical ledgers accompany one another rather than sharing a single undifferentiated notion of “structure.”

<a id="section-715-16-complete-solution-to-the-original-primary-projector-"></a>
## 16. Complete solution to the original primary-projector example {#section-717-16-complete-solution-to-the-original-primary-projector-}
<a id="section-716-original-unkeyed-example-the-two-crt-projectors"></a>
### Original unkeyed Example: the two CRT projectors {#section-718-original-unkeyed-example-the-two-crt-projectors}

Use the corrected premise $\\operatorname{char}F\\ne3$ and $m(t)=(t-1)^2(t+2)$. Then $3,9,81$ are invertible field elements. Set
\\[
e_{-2}(t)=\\frac{(t-1)^2}{9},\\qquad
e_1(t)=1-e_{-2}(t)=\\frac{(t+2)(4-t)}9.
\\]
The first polynomial is zero modulo $(t-1)^2$ and has value one at $-2$; the second has the opposite residues. Thus $e_1$ solves the exact congruences requested in the original Example. The complementary polynomial is supplied to make the decomposition executable as exact algebra.

Write $E_1=e_1(T)$ and $E_{-2}=e_{-2}(T)$. Their sum is $I$. Direct multiplication gives $e_1e_{-2}=m(t)(4-t)/81$, so the evaluated product is zero and each operator is idempotent. Also
\\[
(T-I)^2E_1=m(T)(4I-T)/9=0,\\qquad
(T+2I)E_{-2}=m(T)/9=0.
\\]
On $\\ker(T-I)^2$, $E_1$ acts as identity because $e_1-1=-(t-1)^2/9$. On $\\ker(T+2I)$, $E_{-2}$ acts as identity because $e_{-2}-1=(t+2)(t-4)/9$. These identities prove the exact image labels and show how to obtain each component of any vector: $v=E_1v+E_{-2}v$ uniquely.

In characteristic two the construction remains valid: $e_1=t^2$ and $e_{-2}=t^2+1$, with the second component now labeled by $-2=0$. In characteristic three it is impossible to solve the requested pair of residues, because $t+2=t-1$: one congruence forces value one at 1 while the other forces zero there. The premise correction is therefore mathematically necessary, not an exclusion for convenience. This elaborates the existing unkeyed request and adds no new core exercise.

<a id="section-734-17-optional-checks-for-kernel-flags-and-primary-geometr"></a>

## Summary

<a id="section-121-9-summary"></a>
Pairwise coprime powers in the minimal polynomial generate complementary polynomial projections. Their images are invariant primary components. In the split case, each is a generalized eigenspace carrying scalar-plus-nilpotent structure; diagonalizability is exactly square-free splitting of the minimal polynomial.

<a id="section-123-exercises-with-full-solutions"></a>

<a id="section-796-summary"></a>
Primary decomposition is a direct sum certified by polynomial congruences. Coprime factors separate independent components, stabilized kernels give Fitting's decomposition, and split primary pieces are scalar plus nilpotent. Algebraic projections need not be orthogonal projections for an inner product.

## Exercises {#section-125-exercises-with-full-solutions}

<a id="section-125-1-primary-subspaces-are-invariant"></a>
### 1. Primary subspaces are invariant {#section-127-1-primary-subspaces-are-invariant}

Prove $\\operatorname{ker} p(T)^a$ is $T$-invariant.

<details>
<summary>Hint 1</summary>

Every polynomial in T commutes with T.

</details>

<details>
<summary>Hint 2</summary>

Apply p(T)^a to Tx when p(T)^ax=0.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T$ commutes with $p(T)^a$; if the latter kills $v$, it also kills $Tv$.


</details>

<a id="section-151-2-projection-idempotence"></a>
### 2. Projection idempotence {#section-153-2-projection-idempotence}

If $e^2=e mod m_T$, prove $e(T)^2=e(T)$.

<details>
<summary>Hint 1</summary>

Interpret the congruence as divisibility by m_T.

</details>

<details>
<summary>Hint 2</summary>

Evaluate e²−e at T.

</details>

<details>
<summary>Solution</summary>

**Solution.** $m_T$ divides $e^2-e$, so evaluation gives $e(T)^2-e(T)=0$.


</details>

<a id="section-177-3-orthogonal-algebraic-projections"></a>
### 3. Orthogonal algebraic projections {#section-179-3-orthogonal-algebraic-projections}

If $e_ie_j=0 mod m_T$, prove $E_iE_j=0$.

<details>
<summary>Hint 1</summary>

Replace the polynomial congruence by an operator equality.

</details>

<details>
<summary>Hint 2</summary>

Evaluation preserves products and m_T(T)=0.

</details>

<details>
<summary>Solution</summary>

**Solution.** Evaluate the divisible polynomial: $(e_ie_j)(T)=E_iE_j=0$.


</details>

<a id="section-203-4-directness-from-projections"></a>
### 4. Directness from projections {#section-205-4-directness-from-projections}

Suppose $\\sum E_i=I$ and $E_iE_j=0$ for $i\\ne j$, with each $E_i^2=E_i$. Prove $V=\\oplus \\operatorname{im} E_i$.

<details>
<summary>Hint 1</summary>

Write each v as ∑E_iv.

</details>

<details>
<summary>Hint 2</summary>

For directness, apply E_j to a zero sum of vectors in the indicated images.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every $v=\\sum_i E_i v$, so the images span. If $\\sum_i x_i=0$ with $x_i \\in \\operatorname{im} E_i$, apply $E_j$; it fixes $x_j$ and kills the others, yielding $x_j=0$.


</details>

<a id="section-229-5-two-factor-b-zout-split"></a>
### 5. Two-factor Bézout split {#section-231-5-two-factor-b-zout-split}

Prove $\\operatorname{ker}(ab)(T)=\\operatorname{ker} a(T) \\oplus \\operatorname{ker} b(T)$ for coprime $a,b$.

<details>
<summary>Hint 1</summary>

Start from a Bézout identity ua+vb=1.

</details>

<details>
<summary>Hint 2</summary>

Decompose a vector killed by ab using that identity and show the two kernels have zero intersection.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $ra+sb=1$, decompose $v=ra(T)v+sb(T)v$; for $v$ killed by $ab(T)$, these terms lie in $\\operatorname{ker} b(T)$ and $\\operatorname{ker} a(T)$. Intersection zero follows by applying the identity to a vector killed by both.


</details>

<a id="section-255-6-stabilizing-kernels"></a>
### 6. Stabilizing kernels {#section-257-6-stabilizing-kernels}

Prove equality at one consecutive stage forces equality thereafter.

<details>
<summary>Hint 1</summary>

Assume ker A^k=ker A^{k+1} and take x killed by A^{k+2}.

</details>

<details>
<summary>Hint 2</summary>

Then Ax lies in ker A^{k+1}; use the equality twice and repeat inductively.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\\operatorname{ker} A^k=\\operatorname{ker} A^{k+1}$ and $A^{k+2}v=0$, then $Av \\in \\operatorname{ker} A^{k+1}=\\operatorname{ker} A^k$, so $v \\in \\operatorname{ker} A^{k+1}$. Induct.


</details>

<a id="section-281-7-fitting-direct-sum"></a>
### 7. Fitting direct sum {#section-283-7-fitting-direct-sum}

At a stable $k$, prove $V=\\operatorname{ker} A^k \\oplus \\operatorname{im} A^k$.

<details>
<summary>Hint 1</summary>

If x=A^ky and A^kx=0, place y in ker A^{2k}.

</details>

<details>
<summary>Hint 2</summary>

Kernel stabilization gives x=0; use rank–nullity to turn zero intersection into the full direct sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** The intersection-zero argument in the text uses stabilization through $2k$. Rank–nullity gives $\\operatorname{dim} \\operatorname{ker} A^k+\\operatorname{dim} \\operatorname{im} A^k=\\operatorname{dim} V$, so zero intersection makes their sum all of $V$.


</details>

<a id="section-307-8-nilpotent-primary-restriction"></a>
### 8. Nilpotent primary restriction {#section-309-8-nilpotent-primary-restriction}

On $G_{\\lambda}$, prove $N=T-\\lambda I$ is nilpotent.

<details>
<summary>Hint 1</summary>

Recall the defining kernel condition for the generalized eigenspace.

</details>

<details>
<summary>Hint 2</summary>

The same power of T−λI becomes zero on its restriction.

</details>

<details>
<summary>Solution</summary>

**Solution.** By definition $G_{\\lambda}=\\operatorname{ker} N^{a_{\\lambda}}$, so the restriction satisfies $N^{a_{\\lambda}}=0$.


</details>

<a id="section-333-9-characteristic-polynomial-of-scalar-plus-nilpotent"></a>
### 9. Characteristic polynomial of scalar plus nilpotent {#section-335-9-characteristic-polynomial-of-scalar-plus-nilpotent}

Prove $\\chi_{\\lambda I+N}(t)=(t-\\lambda)^d$ for nilpotent $N$ on a $d$-space.

<details>
<summary>Hint 1</summary>

Build a basis adapted to the successive kernels of N.

</details>

<details>
<summary>Hint 2</summary>

Its matrix is strictly triangular, so λI+N is triangular with constant diagonal λ.

</details>

<details>
<summary>Solution</summary>

**Solution.** A nilpotent operator has an adapted kernel-chain basis making it strictly upper triangular. Then $\\lambda I+N$ is upper triangular with every diagonal entry $\\lambda$; multiply diagonal entries of $tI-T$.


</details>

<a id="section-359-10-multiplicity-bound"></a>
### 10. Multiplicity bound {#section-361-10-multiplicity-bound}

Prove geometric multiplicity is at most algebraic multiplicity.

<details>
<summary>Hint 1</summary>

Begin a basis with a basis of the eigenspace.

</details>

<details>
<summary>Hint 2</summary>

The first diagonal block is λI, forcing that many factors t−λ in the characteristic polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** The eigenspace lies in $G_{\\lambda}$, whose dimension equals algebraic multiplicity. Taking dimensions gives the inequality.


</details>

<a id="section-385-11-diagonalizable-implies-square-free-minimum"></a>
### 11. Diagonalizable implies square-free minimum {#section-387-11-diagonalizable-implies-square-free-minimum}

Prove one direction of the criterion.

<details>
<summary>Hint 1</summary>

Write T in an eigenbasis.

</details>

<details>
<summary>Hint 2</summary>

A polynomial annihilates the diagonal operator precisely when it vanishes at every distinct eigenvalue.

</details>

<details>
<summary>Solution</summary>

**Solution.** In an eigenbasis, $\\prod_{\\lambda}(T-\\lambda I)=0$, where the product ranges over distinct diagonal values. Thus $m_T$ divides a split polynomial with no repeated factor.


</details>

<a id="section-411-12-square-free-minimum-implies-diagonalizable"></a>
### 12. Square-free minimum implies diagonalizable {#section-413-12-square-free-minimum-implies-diagonalizable}

Prove the converse.

<details>
<summary>Hint 1</summary>

Apply primary decomposition to distinct linear factors.

</details>

<details>
<summary>Hint 2</summary>

Each primary subspace is an ordinary eigenspace when every exponent is one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Primary decomposition for distinct linear factors has exponent one, giving $V=\\oplus_\\lambda \\operatorname{ker}(T-\\lambda I)$. Concatenating bases of these eigenspaces yields an eigenbasis.


</details>

<a id="section-437-13-a-repeated-characteristic-root-without-obstruction"></a>
### 13. A repeated characteristic root without obstruction {#section-439-13-a-repeated-characteristic-root-without-obstruction}

Give a diagonalizable operator with characteristic polynomial $(t-1)^3$.

<details>
<summary>Hint 1</summary>

Try a scalar operator.

</details>

<details>
<summary>Hint 2</summary>

Its matrix is already diagonal even though its characteristic polynomial repeats one root.

</details>

<details>
<summary>Solution</summary>

**Solution.** $I_3$ works. Its minimal polynomial is only $t-1$; repeated algebraic multiplicity alone does not obstruct diagonalization.


</details>

<a id="section-463-14-a-repeated-minimum-obstruction"></a>
### 14. A repeated minimum obstruction {#section-465-14-a-repeated-minimum-obstruction}

Show a size-two Jordan block is not diagonalizable.

<details>
<summary>Hint 1</summary>

Compare the dimensions of the eigenspace and the whole block.

</details>

<details>
<summary>Hint 2</summary>

The off-diagonal entry forces a repeated factor in the minimal polynomial.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimal polynomial is $(t-\\lambda)^2$, which has a repeated factor, violating the criterion. Directly, its eigenspace has dimension one rather than two.


</details>

<a id="section-489-15-nonsplitting-obstruction"></a>
### 15. Nonsplitting obstruction {#section-491-15-nonsplitting-obstruction}

Explain why a 90-degree rotation is not diagonalizable over $R$ but is over $C$.

<details>
<summary>Hint 1</summary>

Compute the characteristic polynomial of the rotation.

</details>

<details>
<summary>Hint 2</summary>

Over C its two roots are distinct; over R neither is an eigenvalue.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its minimal polynomial $t^2+1$ does not split over $R$. Over $C$ it becomes $(t-i)(t+i)$ with distinct factors, so the criterion yields diagonalizability.


</details>

<a id="section-515-16-component-minimum"></a>
### 16. Component minimum {#section-517-16-component-minimum}

Why must the restriction minimum on $V_i$ be the full $p_i^{a_i}$?

<details>
<summary>Hint 1</summary>

Suppose the exponent on one component were smaller.

</details>

<details>
<summary>Hint 2</summary>

Combine that smaller power with the other full primary factors to obtain a smaller annihilator of T.

</details>

<details>
<summary>Solution</summary>

**Solution.** Restriction minima divide those powers, and their lcm annihilates all direct summands, hence annihilates $T$. If the exponent on one component were smaller, that lcm would be a proper divisor of $m_T$, contradicting minimality.


</details>

<a id="section-541-17-projection-independence"></a>
### 17. Projection independence {#section-543-17-projection-independence}

If two polynomials have the same residues modulo every $p_i^{a_i}$, prove they give the same operator.

<details>
<summary>Hint 1</summary>

Subtract the two polynomials.

</details>

<details>
<summary>Hint 2</summary>

The pairwise coprime primary powers all divide the difference, hence their product m_T does.

</details>

<details>
<summary>Solution</summary>

**Solution.** Their difference is divisible by the product $m_T$ by the polynomial Chinese remainder theorem. Evaluating a multiple of $m_T$ at $T$ gives zero.


</details>

<a id="section-567-18-perturbation-boundary"></a>
### 18. Perturbation boundary {#section-569-18-perturbation-boundary}

Compare $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ with $\\begin{pmatrix}1 & 1 \\\\ \\epsilon & 1\\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Compute the perturbed characteristic polynomial before discussing its roots.

</details>

<details>
<summary>Hint 2</summary>

Compare the exact repeated-root structure at ε=0 with the split roots when ε≠0 over a suitable field.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $\\epsilon=0$ there is one eigenvalue with a nontrivial generalized eigenspace. For nonzero $\\epsilon$ over an extension containing square roots, the eigenvalues are $1\\pm\\sqrt{\\epsilon}$ and are distinct when the characteristic is not two. Arbitrarily small perturbation can split primary structure, so exact generalized eigenspaces cannot be inferred solely from floating closeness.

</details>

<a id="section-592-10-why-the-polynomial-projections-have-exactly-the-name"></a>

<a id="section-736-17-optional-checks-for-kernel-flags-and-primary-geometr"></a>
### 19. LSP-13-E19. A flag proof does not require Jordan chains {#section-737-lsp-13-e19-a-flag-proof-does-not-require-jordan-chains}

On $F^3$, let $Ne_1=0$, $Ne_2=e_1$ and $Ne_3=e_1$. Find the kernel layers, an adapted ordered basis, and the minimal and characteristic polynomials. Does the answer change in characteristic two?

<details>
<summary>Hint 1</summary>

Compute N² and solve Nv=0 first.

</details>

<details>
<summary>Hint 2</summary>

Choose a basis adapted to ker N⊂ker N² and distinguish the minimal degree from the dimension-dependent characteristic degree.

</details>

<a id="section-753-lsp-13-e20-two-kinds-of-orthogonality"></a>
### 20. LSP-13-E20. Two kinds of orthogonality {#section-755-lsp-13-e20-two-kinds-of-orthogonality}

For $T=\\left(\\begin{smallmatrix}1&2\\\\0&3\\end{smallmatrix}\\right)$ over $R$, find its two polynomial primary projectors and their image lines. Verify their products are zero and decide whether the image lines are perpendicular in the standard Euclidean inner product.

<details>
<summary>Hint 1</summary>

Use the interpolation polynomials for eigenvalues 1 and 3.

</details>

<details>
<summary>Hint 2</summary>

Compute their image eigenvectors, then compare algebraic zero products with their Euclidean dot product.

</details>

<a id="section-771-18-solutions-to-the-kernel-flag-and-geometry-checks"></a>

## Solutions

<a id="section-773-18-solutions-to-the-kernel-flag-and-geometry-checks"></a>
<a id="section-772-lsp-13-e19-a-flag-proof-does-not-require-jordan-chains-"></a>
### LSP-13-E19. A flag proof does not require Jordan chains — solution {#section-774-lsp-13-e19-a-flag-proof-does-not-require-jordan-chains-}

<details>
<summary>Solution</summary>


For $(a,b,c)$, $N(a,b,c)=(b+c,0,0)$. Thus $K_1=\\operatorname{span}(e_1,e_2-e_3)$, $K_2=F^3$, and $(e_1,e_2-e_3,e_2)$ is an adapted basis. The first two vectors are killed and the last maps to the first, so the matrix is strictly upper triangular. Since $N\\ne0$ but $N^2=0$, the minimum is $t^2$ and the characteristic polynomial is $t^3$. The formulas remain valid in characteristic two, with minus interpreted as plus; no division was used and no power produces a surviving coefficient two.


</details>

<a id="section-783-lsp-13-e20-two-kinds-of-orthogonality-solution"></a>
### LSP-13-E20. Two kinds of orthogonality — solution {#section-785-lsp-13-e20-two-kinds-of-orthogonality-solution}

<details>
<summary>Solution</summary>


The eigenvalue-1 and eigenvalue-3 projectors are $(3I-T)/2=\\left(\\begin{smallmatrix}1&-1\\\\0&0\\end{smallmatrix}\\right)$ and $(T-I)/2=\\left(\\begin{smallmatrix}0&1\\\\0&1\\end{smallmatrix}\\right)$. They project onto $\\operatorname{span}(e_1)$ and $\\operatorname{span}((1,1))$, respectively. Direct multiplication gives zero in both orders and their sum is $I$. But $e_1\\cdot(1,1)=1$, so the lines are not Euclidean-orthogonal. Algebraic complementary projections use composition, whereas perpendicularity is an extra geometric assertion.


</details>

<a id="section-794-summary"></a>
`;export{e as default};