var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: invariant-subspaces-block-forms
title: "Invariant Subspaces and Block Structure"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Invariant Subspaces and Block Structure {#section-1-invariant-subspaces-and-block-structure}

A basis adapted to a subspace makes membership visible in coordinates. If an operator also preserves that subspace, its matrix acquires zeros. Those zeros are not cosmetic: they convert a geometric statement into a triangular or block decomposition and make powers, polynomial expressions, determinants, and later spectral arguments manageable.

Throughout, $T:V\\to V$ is an endomorphism of a finite-dimensional vector space over a field $F$.

<a id="section-5-1-invariance"></a>
## 1. Invariance {#section-7-1-invariance}

**Definition 7.1 (Invariant subspace).**

A subspace $U \\subseteq V$ is **$T$-invariant** when $T(U) \\subseteq U$. The zero space and $V$ are always invariant. The kernel and image of every polynomial $p(T)$ are invariant under $T$, because $T$ commutes with every polynomial in itself.

An invariant subspace supports a restricted operator $T|_U:U\\to U$. It also makes the quotient rule

$\\overline{T}(v+U)=T(v)+U$

well-defined: if $v-v' \\in U$, invariance gives $T(v-v') \\in U$. Thus one invariant subspace produces two smaller operators, on $U$ and on $V/U$.

<a id="section-17-examples"></a>
### Examples {#section-19-examples}

- For differentiation on $F_n[x]$, each $F_k[x]$ is invariant.
- For a diagonal matrix, every span of a subset of coordinate vectors is invariant.
- $\\operatorname{ker} T$, $\\operatorname{im} T$, $\\operatorname{ker}(T-\\lambda I)^k$, and $\\operatorname{im}(T-\\lambda I)^k$ are invariant.
- A random line is usually not invariant: a line $\\operatorname{span}(v)$ is invariant exactly when $v$ is an eigenvector (or $v=0$).

<a id="section-24-2-adapted-bases-and-block-upper-triangular-form"></a>
## 2. Adapted bases and block upper triangular form {#section-26-2-adapted-bases-and-block-upper-triangular-form}

**Theorem 7.2 (Adapted block structure).** Let $(u_1,\\ldots,u_r)$ be a basis of invariant $U$, extended by $(w_1,\\ldots,w_s)$ to a basis of $V$. Since each $T(u_j)$ lies in $U$, its coordinates have no $w$ components. Therefore

$[T]=\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}$.

Here $A$ represents $T|_U$. The lower-right block $C$ represents the induced quotient operator after the quotient basis $(w_1+U,\\ldots,w_s+U)$ is chosen. The off-diagonal block $B$ measures how the chosen complement spills into $U$.

Conversely, if a matrix has this form, the span of its first $r$ basis vectors is invariant. Thus invariant subspaces and block upper triangular forms are equivalent descriptions.

<a id="section-34-3-invariant-complements-and-block-diagonal-form"></a>
## 3. Invariant complements and block diagonal form {#section-36-3-invariant-complements-and-block-diagonal-form}

If $V=U \\oplus W$ and both $U$ and $W$ are invariant, a concatenated basis gives

$[T]=\\begin{pmatrix}A & 0 \\\\ 0 & C\\end{pmatrix}$.

Then $T$ is the direct sum $T|_U \\oplus T|_W$. An arbitrary complement need not be invariant. For the nilpotent operator $N(e_2)=e_1$, $N(e_1)=0$, the invariant line $\\operatorname{span}(e_1)$ has complements, but no complementary invariant line: an invariant complement would supply a second eigenvector, while $\\operatorname{ker} N$ is only one-dimensional.

This failure is the first warning that invariant short exact sequences do not always split as operator structures.

<a id="section-44-4-block-calculations"></a>
## 4. Block calculations {#section-46-4-block-calculations}

For compatible blocks,

$\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}\\begin{pmatrix}D & E \\\\ 0 & F\\end{pmatrix}=\\begin{pmatrix}AD & AE+BF \\\\ 0 & CF\\end{pmatrix}$.

Thus block upper triangular matrices are closed under sums, products, and polynomial evaluation. In particular,

$p(\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix})=\\begin{pmatrix}p(A) & \\ast \\\\ 0 & p(C)\\end{pmatrix}$.

The diagonal blocks of a power are $A^k$ and $C^k$. When determinants are available, $\\operatorname{det}(\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix})=\\operatorname{det}(A)\\operatorname{det}(C)$, and the characteristic polynomial factors accordingly. The off-diagonal block generally prevents simply writing the whole power as a block diagonal matrix.

If the diagonal spectra are suitably separated, one can sometimes change the complement to remove $B$; over arbitrary fields this becomes an equation $AX-XC=-B$, whose solvability is not automatic.

<a id="section-58-5-flags-and-triangularization"></a>
## 5. Flags and triangularization {#section-60-5-flags-and-triangularization}

A **flag** is a chain

$0=V_0 \\subset V_1 \\subset \\ldots \\subset V_n=V$

with $\\operatorname{dim} V_k=k$. A basis $(v_1,\\ldots,v_n)$ determines the flag $V_k=\\operatorname{span}(v_1,\\ldots,v_k)$.

**Triangularization criterion.** An operator has an upper triangular matrix in some basis iff it preserves a complete flag.

If the matrix is upper triangular, every leading coordinate span is invariant. Conversely, choose $v_k \\in V_k\\setminus V_{k-1}$. These vectors form a basis, and preservation of $V_k$ says $T(v_k)$ is a combination of $v_1,\\ldots,v_k$, which is upper triangularity.

Over an algebraically closed field, every operator on a nonzero finite-dimensional space has an eigenvector. Induction on dimension then produces an invariant flag and triangularizes the operator. Over $R$, a rotation through 90 degrees has no invariant real line and cannot be real-upper-triangularized.

<a id="section-72-6-cyclic-and-generated-invariant-subspaces"></a>
## 6. Cyclic and generated invariant subspaces {#section-74-6-cyclic-and-generated-invariant-subspaces}

For $v \\in V$, the smallest invariant subspace containing $v$ is

$Z(T,v)=\\operatorname{span}(v,Tv,T^2v,\\ldots)$.

Finite dimension makes this span stabilize. If $(v,Tv,\\ldots,T^{r-1}v)$ is independent and $T^rv$ is its first dependent successor, this list is a basis of the cyclic subspace. The relation for $T^rv$ produces a companion-shaped restriction matrix. Later chapters turn this observation into polynomial and canonical-form theory.

For a set $S$, the smallest invariant subspace containing it is the span of all $T^k s$. Intersections and sums of invariant subspaces are invariant; arbitrary complements need not be.

<a id="section-82-7-reduction-versus-invariance"></a>
## 7. Reduction versus invariance {#section-84-7-reduction-versus-invariance}

An invariant $U$ is **reducing** when there is a distinguished compatible invariant complement. In an inner-product space, one often asks whether $U^\\perp$ is invariant. This follows for self-adjoint operators but not for a general operator. Bare linear algebra supplies complements, not canonical or invariant complements.

The difference matters computationally. An invariant subspace permits a triangular flow: the quotient evolves independently, while its representative may feed into $U$. A reducing decomposition creates independent blocks.

<a id="section-88-8-intertwiners-and-transport"></a>
## 8. Intertwiners and transport {#section-90-8-intertwiners-and-transport}

If $S:V\\to W$ is an isomorphism and $R=S T S^{-1}$, then $U$ is $T$-invariant exactly when $S(U)$ is $R$-invariant. Indeed,

$R(Su)=S(Tu)$.

Thus invariant-subspace lattices are similarity invariants. More generally, an **intertwiner** $A$ satisfying $AT=RA$ sends $T$-invariant information forward: images of invariant subspaces are $R$-invariant, while preimages of $R$-invariant subspaces are $T$-invariant.

<a id="section-96-9-worked-example-finite-differences"></a>
## 9. Worked example: finite differences {#section-98-9-worked-example-finite-differences}

**Worked example 7.3 (Invariant polynomial degrees).**

Let $T:F_2[x]\\to F_2[x]$ be $T(p)(x)=p(x+1)-p(x)$. The constant subspace $U=F_0[x]$ is invariant and in fact killed. The subspace $F_1[x]$ is also invariant because differences lower degree. In the basis $(1,x,x^2)$, assuming characteristic not two,

$[T]=\\begin{pmatrix}0 & 1 & 1 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0\\end{pmatrix}$.

The degree flag is invariant, making the matrix upper triangular. The map is nilpotent: three applications kill every quadratic. In characteristic two the entry $2$ vanishes and the nilpotent structure changes, illustrating that a displayed integer is a field element, not metadata.

<a id="section-106-10-common-errors-and-boundaries"></a>
## 10. Common errors and boundaries {#section-108-10-common-errors-and-boundaries}

**Confusing $T(U) \\subseteq U$ with equality.** Restriction need not be onto.

**Assuming a complement is invariant.** Complement existence is a vector-space fact; invariant splitting is additional structure.

**Reading the wrong zero block.** With the invariant basis vectors first and column-vector convention, the lower-left block is zero.

**Assuming eigenvectors exist over every field.** Triangularization may require the characteristic polynomial to split.

**Treating a nearly invariant computed subspace as exact.** Residuals and angles require a norm and perturbation theory; exact containment has no tolerance.

<a id="section-118-11-summary"></a>
## 12. Separate a preserved subspace from its chosen representatives {#section-593-12-separate-a-preserved-subspace-from-its-chosen-repres}

An invariant subspace lets us reduce a problem without pretending the discarded information is independent of what remains. Let $q:V\\to V/U$ be the quotient map. The defining identity for the induced operator is $qT=\\overline Tq$. It says that applying the operator and then forgetting $U$ gives the same quotient class as first forgetting $U$ and applying the quotient operator.

This identity is stronger than an unexplained resemblance between two matrices. Iterating gives $qT^k=\\overline T^{\\,k}q$ for every nonnegative integer $k$. Taking linear combinations gives $qp(T)=p(\\overline T)q$ for every polynomial $p$ over the same field. Likewise, polynomial evaluation commutes with restriction to $U$. These conclusions use only invariance and linearity; they do not need eigenvalues or a splitting field.

Suppose the restriction is killed by a polynomial $a$ and the quotient is killed by a polynomial $c$. Since $c(\\overline T)=0$, the identity shows $c(T)V\\subseteq U$. Applying $a(T)$ then gives $a(T)c(T)=0$ on $V$. Polynomial operators commute, so the product polynomial kills the whole operator. The conclusion is an annihilating polynomial, not necessarily the minimal one.

For nilpotent pieces this becomes especially concrete. If $(T|_U)^r=0$ and $\\overline T^{\\,s}=0$ for positive integers $r,s$, then $T^sV\\subseteq U$ and $T^{r+s}=0$. Both smaller operators may be zero while $T$ is nonzero: on a two-dimensional space, $Te_2=e_1$ and $Te_1=0$ has zero restriction and zero quotient for $U=Fe_1$, but $T$ itself transfers information into $U$.

That transfer is the block $B$. It is lost if one records only $A$ and $C$. Thus restriction and quotient describe two meaningful pieces without generally reconstructing the original operator up to direct sum. The nilpotence bound also explains why taking the maximum of the two smaller nilpotence orders is insufficient: successive applications can first move information into $U$ and only then erase it.

<a id="section-603-a-complete-adapted-basis-example"></a>
### A complete adapted-basis example {#section-605-a-complete-adapted-basis-example}

**Worked example 7.4 (Restriction, quotient, and spill).**

Over $\\mathbb Q$, define $T$ on $\\mathbb Q^3$ by
\\[
Te_1=2e_1,\\qquad Te_2=e_1+2e_2,\\qquad Te_3=e_2+3e_3.
\\]
Take $U=\\operatorname{span}(e_1,e_2)$. Its restriction matrix is $A=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, the quotient matrix is $C=(3)$, and the spill block is $B=(0,1)^{\\mathsf T}$. The quotient class of $e_3$ evolves by multiplication by three even though $e_3$ itself does not span an invariant complement.

For example, $T^2e_3=T(e_2+3e_3)=e_1+5e_2+9e_3$. Modulo $U$, only $9e_3+U$ remains, agreeing with $\\overline T^{\\,2}$. The other two coefficients are genuine accumulated information rather than a failure of the quotient calculation. A quotient statement should therefore always specify which components it intentionally forgets.

The basis also supplies an immediate computational check on the zero block. The first two columns have zero third entry because their source vectors belong to $U$. A zero upper-right block would assert something else: preservation of the chosen complement. Reading columns as images prevents those two statements from being exchanged.

<a id="section-617-13-complements-are-graphs-and-invariance-is-an-equation"></a>
## 13. Complements are graphs, and invariance is an equation {#section-619-13-complements-are-graphs-and-invariance-is-an-equation}

Fix a vector-space decomposition $V=U\\oplus W$ and write the adapted matrix as $\\begin{pmatrix}A&B\\\\0&C\\end{pmatrix}$. Every other complement of $U$ is the graph of a unique linear map $X:W\\to U$. Indeed, the projection onto $W$ restricts to an isomorphism from that complement to $W$; its inverse must send $w$ to $Xw+w$.

The graph is invariant exactly when $T(Xw+w)$ again has this form. Its $W$ component is $Cw$, while its $U$ component is $AXw+Bw$. Membership in the graph therefore requires
\\[
AXw+Bw=XCw\\quad\\hbox{for every }w,
\\]
or $AX-XC=-B$. This is the promised equation for removing the spill block. Its unknown is a map from the old complement to $U$, not an endomorphism of either space unless their dimensions happen to match.

In coordinates the basis change has matrix $S=\\begin{pmatrix}I&X\\\\0&I\\end{pmatrix}$ and inverse $\\begin{pmatrix}I&-X\\\\0&I\\end{pmatrix}$. Multiplication gives
\\[
S^{-1}\\begin{pmatrix}A&B\\\\0&C\\end{pmatrix}S
=\\begin{pmatrix}A&AX+B-XC\\\\0&C\\end{pmatrix}.
\\]
Thus solving the graph equation changes a triangular description into a block diagonal one. The quotient basis classes are unchanged, because replacing $w$ by $w+Xw$ changes only its representative.

**Worked example 7.5 (Constructing an invariant complement).**

In the preceding three-dimensional example, write $X=(x,y)^{\\mathsf T}$. Then $(A-3I)X=-B$ gives $-x+y=0$ and $-y=-1$, so $x=y=1$. The new complement is generated by $w=e_3+e_1+e_2$, and direct calculation gives $Tw=3w$. The new basis $(e_1,e_2,w)$ separates the restriction block from the quotient block.

This example also shows what was choice-dependent. The original quotient operator did not need a lift, while its displayed quotient basis did. A complement supplies actual representatives. An invariant complement supplies representatives whose span evolves independently. These are successively stronger choices, and none should be silently inferred from the existence of a quotient.

<a id="section-640-a-bounded-solvability-theorem-and-an-obstruction"></a>
### A bounded solvability theorem and an obstruction {#section-642-a-bounded-solvability-theorem-and-an-obstruction}

Suppose $A=\\operatorname{diag}(a_1,\\ldots,a_r)$ and $C=\\operatorname{diag}(c_1,\\ldots,c_s)$ in chosen bases, and every $a_i-c_j$ is nonzero in $F$. The graph equation becomes $(a_i-c_j)X_{ij}=-B_{ij}$. It has the unique solution $X_{ij}=-B_{ij}/(a_i-c_j)$. This proves a separated-diagonal case directly, without importing a general spectral theorem for the equation.

If the two smaller operators are separately diagonalizable over $F$, first choose their diagonalizing bases and apply this result when their eigenvalue sets are disjoint. Over a field that does not contain those eigenvalues, those diagonal bases are unavailable. A broader Sylvester-equation theorem needs its own hypotheses; the elementary entrywise proof does not establish it for arbitrary blocks.

Separation is sufficient in this case, not necessary. When $A=C=(\\lambda)$ and $B=0$, every scalar $X$ works. When $A=C=(\\lambda)$ and $B=(1)$, the equation reads $0=-1$ and no complement graph is invariant. The same diagonal blocks can therefore accompany a fully split operator or a nonsplit one. The off-diagonal data decides the difference.

<a id="section-648-14-powers-record-the-repeated-spill-between-blocks"></a>
## 14. Powers record the repeated spill between blocks {#section-650-14-powers-record-the-repeated-spill-between-blocks}

Let $M=\\begin{pmatrix}A&B\\\\0&C\\end{pmatrix}$. Its $k$th power, for $k≥1$, is
\\[
M^k=\\begin{pmatrix}
A^k&\\displaystyle\\sum_{j=0}^{k-1}A^{k-1-j}BC^j\\\\
0&C^k
\\end{pmatrix}.
\\]
The order of the factors matters: rectangular $B$ is a map between two different coordinate spaces, so it cannot in general be moved through $A$ or $C$.

For $k=1$ the sum is $B$. If the formula holds at $k$, multiplication on the right by $M$ makes the new upper-right block $A^kB+\\sum_{j=0}^{k-1}A^{k-1-j}BC^{j+1}$. Reindexing adds the missing $j=0$ term and gives the formula for $k+1$. This supplies the information hidden behind the star in the earlier diagonal-block calculation.

Each summand describes one crossing from the quotient-side coordinates into $U$. Before crossing, a vector undergoes $j$ applications of $C$; the map $B$ then transfers it; the remaining applications use $A$. There can be only one such crossing because the lower-left block is zero. This explanation is a statement about composition order, not a probabilistic interpretation of the terms.

For scalar blocks $A=(a)$, $C=(c)$, $B=(b)$ with $a\\ne c$, the spill sum is $b(a^k-c^k)/(a-c)$, by multiplying the finite geometric sum by $a-c$. If $a=c$, it is $kb\\,a^{k-1}$, with powers interpreted algebraically. The integer $k$ is a field element. In positive characteristic it can vanish, so a formula familiar over real numbers may exhibit different cancellation.

For $M=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, induction gives $M^k=\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}$. Over characteristic $p>0$, $M^p=I$, although $M\\ne I$. Over $\\mathbb Q$ there is no positive integer $k$ for which that off-diagonal entry vanishes. This is an exact field diagnostic, not an approximation or a statement about growth in an unspecified norm.

The same reasoning helps check polynomial expressions. A polynomial evaluated on a block triangular operator has the expected restriction and quotient blocks, but its spill combines contributions from every nonconstant power. Replacing it by a block diagonal expression without first finding an invariant complement drops those terms and changes the operator.

<a id="section-669-finite-differences-in-two-characteristic-regimes"></a>
### Finite differences in two characteristic regimes {#section-671-finite-differences-in-two-characteristic-regimes}

The repaired notation $F_d[x]$ denotes formal polynomials of degree at most $d$ over the named field. It does not denote a finite field. For characteristic not two, put $v_0=1$, $v_1=x$, and $v_2=(x^2-x)/2$. These have distinct leading degrees and form a basis of $F_2[x]$. The difference operator satisfies $Tv_0=0$, $Tv_1=v_0$, and $Tv_2=v_1$.

Thus its nilpotence order is exactly three: $T^3=0$, while $T^2v_2=v_0\\ne0$. Its kernel consists of constants, and its image is $\\operatorname{span}(1,x)$. The degree flag is invariant, but the operator does not split into three zero one-dimensional blocks.

In characteristic two, division by two is unavailable and $T(x^2)=1=T(x)$. Hence $T^2=0$, its image is $\\operatorname{span}(1)$, and its kernel is $\\operatorname{span}(1,x^2-x)$. The polynomial $x^2-x$ is nonzero as a formal polynomial even over the two-element field. It happens to vanish at both field elements when interpreted as a function; formal polynomial equality and equality of evaluations are different notions.

<a id="section-677-15-lifting-a-flag-and-declaring-the-root-hypothesis"></a>
## 15. Lifting a flag and declaring the root hypothesis {#section-679-15-lifting-a-flag-and-declaring-the-root-hypothesis}

The algebraically closed statement in Section 5 is a true forward import, not an assertion that every field has eigenvectors. Here is its dependency and induction structure. For a nonzero $n$-dimensional space, the determinant construction gives a monic degree-$n$ polynomial $\\det(tI-A)$. Algebraic closure supplies a root $\\lambda$ in $F$. The determinant invertibility criterion then gives a nonzero vector killed by $A-\\lambda I$.

The determinant criterion is developed in Chapter 10, and the characteristic-polynomial/root equivalence in Chapter 11, Sections 3–4. Those are the exact forward inputs for this route; the construction does not invoke Jordan form, the spectral theorem, or Cayley–Hamilton. A reader can use the present flag criterion independently while deferring this existence application until those inputs have been learned.

The zero-dimensional space has the empty flag, providing the induction base case. Choose an eigenvector $v_1$ and let $U=Fv_1$. The quotient has dimension $n-1$. By induction, its induced operator preserves a complete quotient flag $0=\\overline V_0\\subset\\cdots\\subset\\overline V_{n-1}=V/U$. Set $V_0=0$ and $V_{k+1}=q^{-1}(\\overline V_k)$ for $0≤k≤n-1$.

Every preimage is invariant because $qT=\\overline Tq$. Its dimension is $k+1$, by the quotient dimension formula, and $V_1=U$. Thus these subspaces give a complete invariant flag. Choosing one new vector at each step gives the triangularizing basis by the already proved criterion. The lift fills the induction step rather than assuming a complement is invariant.

The diagonal entries can repeat. Triangularization only asks that each image stay in the span of preceding basis vectors and itself. Diagonalization would ask for a basis of individual eigenvectors, a much stronger condition. The finite-difference chain supplies a concrete triangular operator that is not a direct sum of eigenlines.

Over the real field, a plane rotation lacks a real root and therefore blocks the first eigenvector step. One can still represent the whole plane as an invariant block. Moving to complex scalars changes the field and the available one-dimensional subspaces. It does not prove that a missing real invariant line was present all along.



<a id="section-693-16-cyclic-certificates-and-quotients-that-intertwine"></a>
## 16. Cyclic certificates and quotients that intertwine {#section-695-16-cyclic-certificates-and-quotients-that-intertwine}

A cyclic calculation asks which part of an operator one starting vector can reach. Take $v\\ne0$. Because $V$ is finite-dimensional, there is a first index $r≥1$ such that $v,Tv,\\ldots,T^rv$ is dependent. The preceding $r$ vectors are independent, so the dependence has a nonzero coefficient on $T^rv$ and can be solved uniquely as
\\[
T^rv=a_0v+a_1Tv+\\cdots+a_{r-1}T^{r-1}v.
\\]

Applying $T$ and substituting this relation repeatedly expresses every later iterate in the same span. Thus the first dependence is a complete stabilization certificate, not merely a hint from the initial terms. In the basis $(v,Tv,\\ldots,T^{r-1}v)$, the restriction has ones immediately below the diagonal and last column $(a_0,\\ldots,a_{r-1})^{\\mathsf T}$. The orientation follows from the column-vector convention.

This companion-shaped matrix need not be triangular. The cyclic basis is adapted to successive applications of $T$, whereas a triangular basis is adapted to invariant subspaces of every dimension. The partial spans of a cyclic basis are usually not invariant: before the dependence occurs, applying $T$ to the final generator produces a new independent vector.

For a concrete example over $\\mathbb Q$, set $Te_1=e_2$, $Te_2=e_3$, and $Te_3=-e_1+e_2$. Starting at $e_1$ gives the whole space with the first relation $T^3e_1=-e_1+Te_1$. The corresponding polynomial is $t^3-t+1$. Every vector is a combination of the first three iterates, so applying that polynomial to all of $V$ gives zero.

This polynomial has no rational root. If a reduced fraction $a/b$ were a root, multiplying by $b^3$ gives $a^3-ab^2+b^3=0$. Coprimality forces $b=1$, and then an integer root divides one, leaving only $1$ and $-1$; neither works. If the operator had a rational eigenvalue, its eigenvector would force that scalar to be a root of the annihilating polynomial. Thus it has no rational eigenline and cannot be triangularized over $\\mathbb Q$, despite having a completely explicit cyclic basis.

The example separates three tasks: generate an invariant space, find an annihilating polynomial, and find a complete invariant flag over the original field. The first two are available here without rational eigenvalues. Later polynomial operator theory organizes this information systematically; the present computation already prevents a field extension from being smuggled into a change of basis.

<a id="section-710-intertwiners-preserve-an-operator-quotient"></a>
### Intertwiners preserve an operator quotient {#section-712-intertwiners-preserve-an-operator-quotient}

Let $A:V\\to W$ satisfy $AT=RA$. Its kernel is $T$-invariant, since $Av=0$ implies $A(Tv)=RAv=0$. Its image is $R$-invariant, since $R(Av)=A(Tv)$. The first isomorphism theorem therefore has an operator-compatible refinement:
\\[
\\widetilde A:V/\\ker A\\longrightarrow\\operatorname{im}A,
\\qquad \\widetilde A(v+\\ker A)=Av.
\\]

This is a well-defined vector-space isomorphism by the usual quotient argument. It also satisfies $\\widetilde A\\,\\overline T=(R|_{\\operatorname{im}A})\\widetilde A$, because both sides send $v+\\ker A$ to $ATv$. The induced quotient dynamics and the image dynamics are consequently isomorphic. This supplies the exact meaning of the information transported by a possibly noninvertible intertwiner.

It does not make $T$ and $R$ similar on their whole spaces. The zero map intertwines every such pair, yet discards everything. An image of an invariant subspace can collapse to zero, and a preimage can contain the whole kernel. Only an invertible intertwiner supplies the two-way transport of all invariant subspaces stated earlier.

For example, the quotient map $q:V\\to V/U$ intertwines $T$ and $\\overline T$, while inclusion $j:U\\to V$ intertwines $T|_U$ and $T$. These two arrows attach the restriction and quotient to the original operator without claiming a direct-sum decomposition. A splitting would require an additional intertwining section from the quotient back to $V$, equivalent to an invariant complement.

<a id="section-724-a-finite-invariance-certificate"></a>
### A finite invariance certificate {#section-726-a-finite-invariance-certificate}

In coordinates, let columns of an $n$-by-$r$ matrix $K$ form a basis for a proposed subspace and let $M$ represent the ambient operator. The column space is invariant exactly when there is an $r$-by-$r$ matrix $D$ with $MK=KD$. Necessity expresses each image of a basis column in the same basis; sufficiency follows by applying the identity to every column combination.

Full column rank of $K$ is part of the certificate. It ensures $D$ really represents the restriction and is uniquely determined. A dependent generator list may still describe an invariant space, but its coefficient relations can make $D$ nonunique and invalidate a claim that the displayed list is a basis.

This is an exact finite proof procedure: verify independence, compute the indicated images, and check equality. A small residual $MK-KD$ is not the same certificate over $\\mathbb Q$ or an abstract field. Quantifying its meaning requires the norm, scaling, and perturbation hypotheses deliberately left to the numerical continuation.


<a id="section-733-commuting-projections-certify-an-invariant-splitting"></a>
### Commuting projections certify an invariant splitting {#section-735-commuting-projections-certify-an-invariant-splitting}

A complement can also be recorded by a projection. For $V=U\\oplus W$, define $P(u+w)=u$. Then $P^2=P$, $\\operatorname{im}P=U$, and $\\ker P=W$. Both summands are invariant under $T$ exactly when $PT=TP$.

If they are invariant, $PT(u+w)=Tu=TP(u+w)$. Conversely, commutation gives $Tu=TPu=PTu\\in U$ for $u\\in U$, and $P(Tw)=T(Pw)=0$ for $w\\in W$. Thus a commuting idempotent is an operator-level splitting certificate, while an arbitrary idempotent is only a vector-space splitting.

Preservation of $U$ alone requires the weaker identity $(I-P)TP=0$. Its input first enters $U$ through $P$, and its output has no component outside $U$. For the two-dimensional nilpotent example, $P=\\operatorname{diag}(1,0)$ has $NP=0$ but $PN=N\\ne0$. The invariant line is present, yet this projection does not commute with the operator.

For a graph complement described by $X$, the projection onto $U$ along that graph has block matrix $P_X=\\begin{pmatrix}I&-X\\\\0&0\\end{pmatrix}$. Its range and kernel can be checked directly. Computing $P_XT=TP_X$ gives exactly $AX-XC=-B$. The graph equation and the commuting-projection condition are therefore two certificates for the same extra structure.

This formulation connects block decomposition to later operator polynomials without presuming such a projection exists. A polynomial in $T$ automatically commutes with $T$, but being a projection additionally requires idempotence. Neither commutation nor idempotence may be inferred solely from a convenient block label.

<a id="section-745-17-optional-practice-extensions"></a>
## 19. Proof and import boundary for the invariant-space extensions {#section-809-19-proof-and-import-boundary-for-the-invariant-space-ex}

The graph-complement equation, separated-diagonal solution, power formula, nilpotence bound, quotient-flag lift, and exact finite-difference calculations are proved above. Eigenvector existence by the determinant route has the explicitly declared forward inputs from Chapters 10–11 and algebraic closure of the named field. No unrestricted Sylvester-equation theorem, numerical perturbation result, or canonical-form classification is imported. The original minute estimate remains historical; expanded effort and learner effectiveness have not been measured.

<a id="section-811-summary"></a>

## Summary

<a id="section-120-11-summary"></a>
Invariant subspaces are precisely the subspaces that support restrictions and quotient operators. Adapted bases produce block upper triangular matrices; invariant complements produce block diagonal matrices. Complete invariant flags characterize triangularizability, while cyclic spans build the smallest invariant space generated by a vector.

<a id="section-122-exercises-with-full-solutions"></a>

<a id="section-813-summary"></a>
An invariant subspace gives a restriction and a quotient operator, represented by diagonal blocks in an adapted matrix. A complementary subspace need not be invariant; its graph must solve the appropriate compatibility equation. Powers record coupling between blocks, and nilpotence orders can add across the quotient boundary. Duality next expresses preserved constraints as annihilators.

## Exercises {#section-124-exercises-with-full-solutions}

<a id="section-124-1-kernels-of-polynomials-are-invariant"></a>
### 1. Kernels of polynomials are invariant {#section-126-1-kernels-of-polynomials-are-invariant}

Prove $\\operatorname{ker} p(T)$ is $T$-invariant.

<details>
<summary>Hint 1</summary>

Use commutation of T with each power of itself.

</details>

<details>
<summary>Hint 2</summary>

Apply p(T) to the image of a kernel vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $p(T)v=0$, then $p(T)Tv=Tp(T)v=0$ because $T$ commutes with its powers. Thus $Tv$ remains in the kernel.


</details>

<a id="section-150-2-images-of-polynomials-are-invariant"></a>
### 2. Images of polynomials are invariant {#section-152-2-images-of-polynomials-are-invariant}

Prove $\\operatorname{im} p(T)$ is $T$-invariant.

<details>
<summary>Hint 1</summary>

Write an arbitrary image vector as p(T)v.

</details>

<details>
<summary>Hint 2</summary>

Move T past p(T) to exhibit another preimage.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $y=p(T)v$, then $Ty=Tp(T)v=p(T)Tv$, which is again in the image.


</details>

<a id="section-176-3-quotient-well-definedness"></a>
### 3. Quotient well-definedness {#section-178-3-quotient-well-definedness}

Prove $v+U \\to  Tv+U$ is well-defined iff $U$ is invariant.

<details>
<summary>Hint 1</summary>

Compare two representatives differing by an element of U.

</details>

<details>
<summary>Hint 2</summary>

For necessity, compare a vector in U with zero as representatives of one coset.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $v-v' \\in U$, the two outputs define the same coset exactly when $T(v-v') \\in U$; invariance guarantees this. Conversely, apply well-definedness to $u+U=0+U$: then $Tu+U=U$, so $Tu \\in U$ for every $u \\in U$.


</details>

<a id="section-202-4-adapted-block-form"></a>
### 4. Adapted block form {#section-204-4-adapted-block-form}

Prove an adapted basis has matrix $\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Inspect images of the first block of basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Their components outside the preserved subspace must vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first basis vectors lie in $U$, and their images lie in $U$; consequently the lower coordinates of the first block of columns vanish. No condition is imposed on images of complement basis vectors, giving the other three blocks.


</details>

<a id="section-228-5-converse-block-test"></a>
### 5. Converse block test {#section-230-5-converse-block-test}

If $[T]=\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}$, prove the first coordinate subspace is invariant.

<details>
<summary>Hint 1</summary>

Write an input in the first coordinate subspace as (x,0).

</details>

<details>
<summary>Hint 2</summary>

Multiply the block matrix and inspect its second component.

</details>

<details>
<summary>Solution</summary>

**Solution.** A vector in it has coordinates $(x,0)$. Multiplication gives $(Ax,0)$, still in the same coordinate subspace.


</details>

<a id="section-254-6-restriction-and-quotient-blocks"></a>
### 6. Restriction and quotient blocks {#section-256-6-restriction-and-quotient-blocks}

Identify $A$ and $C$ intrinsically in an adapted matrix.

<details>
<summary>Hint 1</summary>

The first block acts directly on U.

</details>

<details>
<summary>Hint 2</summary>

For the quotient block, discard components in U and use the quotient classes of the remaining basis vectors.

</details>

<details>
<summary>Solution</summary>

**Solution.** $A$ is the matrix of $T|_U$ in the chosen basis of $U$. The quotient classes of the complement basis form a basis of $V/U$, and reducing $T(w_j)$ modulo $U$ discards the $B$ component, leaving $C$; hence $C$ represents the induced quotient operator.


</details>

<a id="section-280-7-sums-and-intersections"></a>
### 7. Sums and intersections {#section-282-7-sums-and-intersections}

Prove sums and intersections of invariant subspaces are invariant.

<details>
<summary>Hint 1</summary>

Use a vector satisfying both membership conditions for intersection.

</details>

<details>
<summary>Hint 2</summary>

For sums, distribute T over one component from each subspace.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $u \\in U \\cap W$, then $Tu$ lies in both $U$ and $W$. If $x=u+w \\in U+W$, then $Tx=Tu+Tw \\in U+W$. The same proofs handle arbitrary intersections and finite sums.


</details>

<a id="section-306-8-kernel-image-chain"></a>
### 8. Kernel-image chain {#section-308-8-kernel-image-chain}

For nilpotent $N$, show $\\operatorname{ker} N^k \\subseteq \\operatorname{ker} N^{k+1}$ and $\\operatorname{im} N^{k+1} \\subseteq \\operatorname{im} N^k$, and that all are invariant.

<details>
<summary>Hint 1</summary>

Apply one more N to a kernel equation.

</details>

<details>
<summary>Hint 2</summary>

Rewrite N^(k+1)v as N^k(Nv) for the image inclusion.

</details>

<details>
<summary>Solution</summary>

**Solution.** $N^kv=0$ implies $N^{k+1}v=0$. Every $N^{k+1}v=N^k(Nv)$ lies in $\\operatorname{im} N^k$. Invariance follows from Exercises 1 and 2 with $p(x)=x^k$.


</details>

<a id="section-332-9-a-non-invariant-complement"></a>
### 9. A non-invariant complement {#section-334-9-a-non-invariant-complement}

For $N(e_1)=0$, $N(e_2)=e_1$, show $\\operatorname{span}(e_1)$ has no invariant complement.

<details>
<summary>Hint 1</summary>

Parameterize every complementary line by a generator with second coordinate one.

</details>

<details>
<summary>Hint 2</summary>

Its image has zero second coordinate, obstructing invariance.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every complement is $\\operatorname{span}(e_2+ae_1)$. Its generator maps to $e_1$, which is not a multiple of $e_2+ae_1$; hence the line is not invariant.


</details>

<a id="section-358-10-block-diagonal-criterion"></a>
### 10. Block diagonal criterion {#section-360-10-block-diagonal-criterion}

Prove $V=U \\oplus W$ yields a block diagonal matrix in concatenated bases iff both summands are invariant.

<details>
<summary>Hint 1</summary>

Inspect images of basis vectors from both summands.

</details>

<details>
<summary>Hint 2</summary>

Invariance removes the off-diagonal block belonging to each summand.

</details>

<details>
<summary>Solution</summary>

**Solution.** If both are invariant, images of each block of basis vectors remain within its summand, so both off-diagonal blocks vanish. Conversely, a block diagonal matrix visibly sends each coordinate summand to itself.


</details>

<a id="section-384-11-powers-of-a-block-triangular-matrix"></a>
### 11. Powers of a block triangular matrix {#section-386-11-powers-of-a-block-triangular-matrix}

Prove the diagonal blocks of $M^k$ are $A^k,C^k$ when $M=\\begin{pmatrix}A & B \\\\ 0 & C\\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Use induction with block multiplication.

</details>

<details>
<summary>Hint 2</summary>

The zero lower-left block prevents cross terms from entering the diagonal blocks.

</details>

<details>
<summary>Solution</summary>

**Solution.** The claim holds for $k=1$. Multiplying $M^k=\\begin{pmatrix}A^k & * \\\\ 0 & C^k\\end{pmatrix}$ by $M$ gives diagonal blocks $A^{k+1}$ and $C^{k+1}$. Induction completes the proof.


</details>

<a id="section-410-12-flag-criterion"></a>
### 12. Flag criterion {#section-412-12-flag-criterion}

Prove the triangularization criterion.

<details>
<summary>Hint 1</summary>

Convert a triangular matrix into its initial coordinate subspaces.

</details>

<details>
<summary>Hint 2</summary>

Conversely, choose each basis vector at the next stage of the flag.

</details>

<details>
<summary>Solution</summary>

**Solution.** An upper triangular matrix sends $\\operatorname{span}(v_1,\\ldots,v_k)$ into itself. Conversely, choose $v_k \\in V_k\\setminus V_{k-1}$ from a preserved complete flag. Then $(v_k)$ is a basis and $Tv_k \\in V_k=\\operatorname{span}(v_1,\\ldots,v_k)$, so entries below the diagonal vanish.


</details>

<a id="section-436-13-real-rotation-boundary"></a>
### 13. Real rotation boundary {#section-438-13-real-rotation-boundary}

Show $R=\\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$ has no invariant real line.

<details>
<summary>Hint 1</summary>

An invariant real line would give a real eigenvalue.

</details>

<details>
<summary>Hint 2</summary>

Apply the rotation twice to a generator.

</details>

<details>
<summary>Solution</summary>

**Solution.** An invariant real line would have a nonzero generator $v$ with $Rv=\\lambda v$ for real $\\lambda$. Applying $R$ twice gives $-v=\\lambda^2v$, so $\\lambda^2=-1$, impossible over $R$.


</details>

<a id="section-462-14-smallest-cyclic-subspace"></a>
### 14. Smallest cyclic subspace {#section-464-14-smallest-cyclic-subspace}

Prove $Z(T,v)=\\operatorname{span}(T^kv:k\\ge 0)$ is the smallest invariant subspace containing $v$.

<details>
<summary>Hint 1</summary>

Check the span is closed under applying T.

</details>

<details>
<summary>Hint 2</summary>

Any invariant space containing v must contain every successive iterate.

</details>

<details>
<summary>Solution</summary>

**Solution.** It contains $v$ and applying $T$ shifts each generator to the next, so it is invariant. Every invariant subspace containing $v$ contains successively $Tv,T^2v,\\ldots$, hence their span.


</details>

<a id="section-488-15-similarity-transports-invariance"></a>
### 15. Similarity transports invariance {#section-490-15-similarity-transports-invariance}

For $R=STS^{-1}$, prove $U$ is $T$-invariant iff $S(U)$ is $R$-invariant.

<details>
<summary>Hint 1</summary>

Apply the conjugacy identity to a vector of S(U).

</details>

<details>
<summary>Hint 2</summary>

Use S⁻¹ for the reverse implication.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $u \\in U$, then $R(Su)=STu \\in S(U)$. Applying the same argument to $S^{-1}$ proves the converse.


</details>

<a id="section-514-16-intertwiner-image"></a>
### 16. Intertwiner image {#section-516-16-intertwiner-image}

If $AT=RA$ and $U$ is $T$-invariant, prove $A(U)$ is $R$-invariant.

<details>
<summary>Hint 1</summary>

Write a vector of A(U) as Au.

</details>

<details>
<summary>Hint 2</summary>

Use the intertwining equation and invariance of U to identify its next preimage.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every element is $Au$ for $u \\in U$; applying $R$ gives $RAu=ATu$, and $Tu \\in U$, so this lies in $A(U)$.


</details>

<a id="section-540-17-difference-operator"></a>
### 17. Difference operator {#section-542-17-difference-operator}

For the finite-difference example, compute $T(1),T(x),T(x^2)$ and verify the matrix.

<details>
<summary>Hint 1</summary>

Apply the defining difference rule to each monomial.

</details>

<details>
<summary>Hint 2</summary>

Use those coefficient columns in the stated polynomial basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** They are $0$, $1$, and $(x+1)^2-x^2=2x+1$. Their coordinate columns are $(0,0,0)$, $(1,0,0)$, $(1,2,0)$, giving the displayed matrix.


</details>

<a id="section-566-18-exact-versus-approximate-invariance"></a>
### 18. Exact versus approximate invariance {#section-568-18-exact-versus-approximate-invariance}

Let $A=\\begin{pmatrix}1 & \\epsilon \\\\ 0 & 2\\end{pmatrix}$. Is $\\operatorname{span}(e_2)$ invariant? Is $\\operatorname{span}(e_1)$ invariant?

<details>
<summary>Hint 1</summary>

Apply A to each line generator.

</details>

<details>
<summary>Hint 2</summary>

Exact invariance requires the component outside the line to vanish exactly.

</details>

<details>
<summary>Solution</summary>

**Solution.** $Ae_2=\\epsilon e_1+2e_2$, so $\\operatorname{span}(e_2)$ is invariant exactly when $\\epsilon=0$; “small” is not exact invariance. Since $Ae_1=e_1$, $\\operatorname{span}(e_1)$ is invariant for every $\\epsilon$. Quantifying near-invariance would require a norm and scale.

</details>

<a id="section-591-12-separate-a-preserved-subspace-from-its-chosen-repres"></a>

<a id="section-747-17-optional-practice-extensions"></a>
### 19. LSP-07-E19. Find an invariant graph {#section-751-lsp-07-e19-find-an-invariant-graph}

Over $\\mathbb Q$, let $Te_1=0$, $Te_2=2e_2$, and $Te_3=e_1+e_2+e_3$. For $U=\\operatorname{span}(e_1,e_2)$, solve the graph equation for an invariant complementary line whose generator has third coordinate one. Verify its invariance directly and give the resulting block diagonal matrix.

<details>
<summary>Hint 1</summary>

Write the complementary generator as (a,b,1).

</details>

<details>
<summary>Hint 2</summary>

Its third coordinate forces the eigenvalue; compare its first two coordinates to solve the graph equation.

</details>

<a id="section-767-lsp-07-e20-nilpotence-can-cross-a-quotient-boundary"></a>
### 20. LSP-07-E20. Nilpotence can cross a quotient boundary {#section-769-lsp-07-e20-nilpotence-can-cross-a-quotient-boundary}

Let $Ne_1=0$, $Ne_2=e_1$, and $Ne_3=e_2$, and take $U=Fe_1$ over any field. Determine the nilpotence orders of the restriction, quotient, and full operator. Prove the general positive-integer bound $T^{r+s}=0$ when $(T|_U)^r=0$ and $\\overline T^{\\,s}=0$, and explain why replacing the sum by the maximum fails here.

<details>
<summary>Hint 1</summary>

Compute the successive images of each standard generator.

</details>

<details>
<summary>Hint 2</summary>

In general, quotient nilpotence first sends all vectors into U, after which restriction nilpotence kills them.

</details>

<a id="section-785-18-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-787-18-solutions-to-the-optional-practice-extensions"></a>
<a id="section-787-lsp-07-e19-find-an-invariant-graph-solution"></a>
### LSP-07-E19. Find an invariant graph — solution {#section-789-lsp-07-e19-find-an-invariant-graph-solution}

<details>
<summary>Solution</summary>

The blocks are $A=\\operatorname{diag}(0,2)$, $C=(1)$, and $B=(1,1)^{\\mathsf T}$. For $X=(x,y)^{\\mathsf T}$, the equation gives $-x=-1$ and $y=-1$, so $X=(1,-1)^{\\mathsf T}$. The generator is $w=e_3+e_1-e_2$, and $Tw=e_1-e_2+e_3=w$. Thus $(e_1,e_2,w)$ is an adapted basis with block diagonal matrix $\\operatorname{diag}(0,2,1)$. The third coordinate fixes the generator normalization; it does not assert that every complement was invariant.


</details>

<a id="section-797-lsp-07-e20-nilpotence-can-cross-a-quotient-boundary-sol"></a>
### LSP-07-E20. Nilpotence can cross a quotient boundary — solution {#section-799-lsp-07-e20-nilpotence-can-cross-a-quotient-boundary-sol}

<details>
<summary>Solution</summary>

The restriction is zero on a nonzero one-dimensional space, so its nilpotence order is one. In the quotient, $e_3+U$ maps to $e_2+U$, then to zero; the quotient order is two. The full operator has $N^2e_3=e_1\\ne0$ and $N^3=0$, hence order three. Generally $qT^s=\\overline T^{\\,s}q=0$ implies $T^sV\\subseteq U$, and then $T^rT^s=0$. Here $r+s=3$, whereas $\\max(r,s)=2$ does not kill the full operator.


</details>

<a id="section-807-19-proof-and-import-boundary-for-the-invariant-space-ex"></a>
`;export{e as default};