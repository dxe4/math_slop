
# Counterexamples, Transfer Principles, and Capstones {#section-1-counterexamples-transfer-principles-and-capstones}

Linear algebra becomes reliable when a proof travels with its hypotheses and a counterexample waits at each boundary. This final chapter organizes the book’s transfer principles across fields, coordinates, quotients, duals, polynomials, and inner products, then tests them in cumulative problems.

<a id="section-3-1-a-boundary-atlas"></a>
## 1. A boundary atlas {#section-5-1-a-boundary-atlas}

**Finite dimension.** The terminating basis-extension arguments and finite rank–nullity arithmetic used here rely on finite dimension, as do automatic double-dual surjectivity and orthogonal projection onto every subspace. Algebraic basis extension and algebraic complements remain available in arbitrary vector spaces under the usual choice assumptions; they do not supply convergence or nearest-point projections.

**Field.** Real rotations show eigenvalues may be absent. Characteristic $p$ changes derivatives, signs, trace of identity, and binomial coefficients. Scalar extension can split polynomials but cannot erase repeated minimal factors.

**Choice of basis.** Matrix entries and coordinates change. Rank, minimal/invariant factors, trace, determinant, and operator identities do not. Similarity, equivalence, and congruence answer different typed questions.

**Inner product.** Orthogonality, adjoints, positivity, unitary maps, and nearest-point projections require geometric structure. A bare complement is not an orthogonal complement.

**Normality and commutation.** Diagonalizable does not imply unitarily diagonalizable. Individual diagonalizability does not imply simultaneous diagonalizability without commutation.

**Exact versus numerical.** Exact rank, Jordan structure, and zero residuals are discontinuous under perturbation. Stable computation requires norms, scales, conditioning, backward error, and algorithm-specific evidence.

<a id="section-17-2-transfer-principles"></a>
## 2. Transfer principles {#section-19-2-transfer-principles}

1. **Coordinates:** prove a statement for maps, compute in a basis, then show the conclusion is invariant under its transformation law.
2. **Quotients:** when a map kills $U$, factor through $V/U$; when an operator preserves $U$, induce a quotient operator.
3. **Duality:** reverse arrows to turn images into annihilator kernels and compatibility into certificates.
4. **Polynomial action:** replace repeated operator manipulation by arithmetic modulo $m_T$.
5. **Primary separation:** use coprime factors to build canonical polynomial projections.
6. **Geometry:** after adding an inner product, replace arbitrary complements by orthogonal ones and similarity by unitary similarity when hypotheses permit.
7. **Computation:** distinguish a theorem in exact arithmetic from evidence returned by an implemented algorithm.

<a id="section-27-3-counterexample-design-recipes"></a>
## 3. Counterexample design recipes {#section-29-3-counterexample-design-recipes}

To break a missing hypothesis, use the smallest typed model:

- missing independence: repeat a vector;
- missing finite dimension: polynomial or sequence spaces;
- missing splitting: real plane rotation;
- repeated-root obstruction: a $2\times 2$ Jordan block;
- nonnormal diagonalizable: $\begin{pmatrix}1 & 1 \\ 0 & 2\end{pmatrix}$;
- noncommuting diagonalizable pair: a diagonal map and coordinate swap;
- degenerate form: a zero diagonal direction;
- numerical discontinuity: $\begin{pmatrix}1 & 1 \\ 0 & 1+\epsilon\end{pmatrix}$ as $\epsilon\to 0$.

A good counterexample states the field, spaces, maps, tested conclusion, satisfied assumptions, and precisely omitted assumption.

<a id="section-42-4-proof-dependency-ledger"></a>
## 4. Proof dependency ledger {#section-44-4-proof-dependency-ledger}

The classification spine is:

exchange $\to$ dimension $\to$ quotient/rank–nullity $\to$ invariant subspaces $\to$ polynomial calculus $\to$ primary decomposition $\to$ rational/Jordan forms.

The geometric spine is:

inner product $\to$ orthogonal decomposition $\to$ adjoint/normality $\to$ spectral theorem $\to$ positive square roots/SVD.

Exterior algebra links the two through determinants and minors; duality links equations to measurements; commuting families turn single-operator decompositions into joint structure.

<a id="section-54-5-responsible-completion-status"></a>
## 5. Responsible completion status {#section-56-5-responsible-completion-status}

Authored chapters and solved exercises are not independently reviewed mathematics. A release requires theorem/notation, exercise/solution, cross-reference, accessibility, citation, copy-edit, and reproducible-print audits. Page counts from development artifacts are evidence about the current draft only.

<a id="section-58-exercises-with-full-solutions"></a>
## Capstone investigation: one operator through seven lenses {#section-612-capstone-investigation-one-operator-through-seven-lense}

Choose an exact $4\times 4$ matrix over $\mathbb Q$ whose characteristic polynomial has at least two primary factors and one repeated factor.

1. Compute kernel, image, rank, and an invariant subspace.
2. Determine characteristic/minimal polynomials and primary projections.
3. Find rational and, over a splitting field, Jordan data.
4. Compute the transpose-map annihilator certificate for one system.
5. Add the standard inner product and determine whether the operator is normal.
6. Compare exact classification with an appropriate numerical representation.

**Capstone solution.** Take $A=J_2(1) \oplus \operatorname{diag}(2,3)$ over $Q$. It is invertible, so kernel zero, image all $\mathbb{Q}^4$, rank four; each block span is invariant. $\chi=(t-1)^2(t-2)(t-3)$ and the same polynomial is minimal because the coprime block minima have that lcm, so $A$ is cyclic and its rational form is the single companion block of this product (similar, not equal, to the displayed form). Primary projections are Lagrange–Hermite polynomials congruent to one modulo their named factor and zero modulo the other factors; Bézout/CRT constructs them exactly. The Jordan data over $Q$ already split: one size-two block at $1$, and size-one blocks at $2,3$. For $Ax=b$, invertibility makes $\operatorname{ker} A^T=0$, so no nontrivial compatibility condition exists and every $b$ is reached. The standard matrix is not normal because its Jordan block is not normal. Numerically one should use a real Schur decomposition (and solve systems with pivoted factorization), reporting residuals and conditioning; attempting to recover the exact size-two Jordan block from rounded data is not a stable task. This separates exact similarity classification from reliable numerical computation.
<a id="section-622-6-algebraic-existence-does-not-provide-a-topological-pr"></a>
## 6. Algebraic existence does not provide a topological projection {#section-624-6-algebraic-existence-does-not-provide-a-topological-pr}

The corrected finite-dimension boundary separates three claims. A finite independent list can be extended by a terminating argument in finite dimension. An arbitrary algebraic independent set can be extended to a Hamel basis under the usual choice assumptions. An orthogonal or nearest-point projection concerns an additional inner product and topology. Neither algebraic basis statement supplies that geometric conclusion.

**Definition 23.1 (Hamel basis and finite algebraic expansion).**

A Hamel basis represents every vector by a finite linear combination. There is no convergence claim hidden in the word basis. For the explicit infinite space $F[x]$, the monomials form such a basis and
$F[x]=F\cdot1\oplus xF[x]$.
This algebraic complement requires no limiting process. It already refutes the claim that every complement needs finite dimension.

For a general subspace U of V, the choice-aware basis-extension theorem permits a basis B of U to be extended to a basis C of V. The span W of $C\setminus B$ is an algebraic complement: finite expansions show $V=U+W$, and independence of C makes the intersection zero. The projection onto U along W is a linear map, but its continuity is another question.

**Worked example 23.1 (An algebraic projection that cannot be bounded).**

A dense proper subspace provides a sharp distinction. In real $\ell^2$, let U be the finite-support sequences. Truncating $a=(2^{-j})_{j≥1}$ gives vectors in U converging to a, while a is not in U. Thus U is not closed. Under choice it has an algebraic complement and an algebraic projection P with image U.

That P cannot be bounded. If it were continuous and $u_k=Pu_k$ converged to x, continuity would give $Px=\lim Pu_k=x$, so its image would be closed. This contradicts the displayed sequence. Moreover a has infimum distance zero from U but no nearest point in U: an attained zero distance would make a belong to U.

The usual countable coordinate vectors have dense span in $\ell^2$, but their algebraic span is only U. Infinite convergent expansions and finite Hamel expansions are different types of representation. A topological basis theorem needs the relevant norm, convergence and completeness hypotheses; it cannot be inferred from algebraic basis extension.

The general basis-extension theorem is an imported choice-aware result, not a constructive algorithm in this chapter. The explicit polynomial and sequence examples are checked directly. A reader may use the finite-dimensional results throughout the book without using arbitrary-dimensional choice, but must state that boundary when transferring them.

<a id="section-644-fields-cannot-silently-become-rings"></a>
### Fields cannot silently become rings {#section-646-fields-cannot-silently-become-rings}

The field hypothesis also does work. In the additive group of integers viewed as a module over $\mathbb Z$, the submodule $2\mathbb Z$ has no direct complement. If a complementary subgroup contained a nonzero k, it would also contain the nonzero even integer 2k, contradicting trivial intersection. A zero complement would fail to span all integers.

This does not contradict the vector-space complement theorem: nonzero integers are not all invertible scalars. Replacing a field by a ring changes the objects and the theorem. The same caution applies to row operations that divide by a scalar or to polynomial projectors that divide by differences of roots.

<a id="section-650-7-name-the-transformation-before-naming-an-invariant"></a>
## 7. Name the transformation before naming an invariant {#section-652-7-name-the-transformation-before-naming-an-invariant}

A matrix can represent a map, an endomorphism, or a bilinear form. These roles have different coordinate changes. For a map from V to W, independently changing input and output bases gives $Q^{-1}AP$. For an endomorphism using one basis on both sides, similarity gives $P^{-1}AP$. A real bilinear-form matrix transforms by congruence $P^{\mathsf T}GP$.

Rank belongs to the map and is preserved by equivalence. Characteristic and minimal polynomials belong to an endomorphism and are preserved by similarity. They are not intrinsic classification data for a rectangular map with unrelated source and target. Inertia belongs to a real symmetric form under congruence, while the ordinary matrix eigenvalues need not be preserved.

**Worked example 23.2 (Congruence changes eigenvalues while preserving inertia).**

For example $G=\operatorname{diag}(1,4)$ becomes I under congruence by $\operatorname{diag}(1,1/2)$. Its positive inertia is unchanged, but its coordinate eigenvalues change from one and four to two copies of one. Interpreting those eigenvalues as operator invariants would use the wrong transformation law.

An inner-product matrix and an operator matrix must be transformed together. If x=Px', then the Gram matrix becomes $P^\dagger GP$, while the endomorphism becomes $P^{-1}AP$. The adjoint formula in the new coordinates gives the same adjoint map. A plain transpose in the new coordinates generally fails to do so.

Similarity also need not preserve the standard norm geometry. Over $\mathbb R$, for $0<\varepsilon≤1$, the matrix $\begin{pmatrix}1&1/\varepsilon\\0&2\end{pmatrix}$ is similar to $\begin{pmatrix}1&1\\0&2\end{pmatrix}$ through $P=\operatorname{diag}(\varepsilon,1)$. The characteristic and minimal polynomials agree, but the infinity norm of the first grows as $1+1/\varepsilon$.

The basis change itself has infinity-norm condition number $1/\varepsilon$. Large coordinate amplification is therefore compatible with unchanged exact similarity class. Unitary similarity is more restrictive: it preserves the declared Euclidean geometry and prevents amplification from a badly conditioned basis. It does not make every eigenvalue or invariant subspace insensitive to perturbation.

<a id="section-666-choosing-what-is-being-classified"></a>
### Choosing what is being classified {#section-668-choosing-what-is-being-classified}

A list of eigenvalues with algebraic multiplicities determines the characteristic polynomial but need not determine the similarity class. Repeated roots require information about generalized chains, or equivalently invariant factors. Orthogonal classification asks further whether the decomposition respects the inner product, not merely whether an invertible basis exists.

A proof should therefore state its target before collecting invariants. A rank certificate may solve a map-equivalence question completely while saying little about similarity. A Gram congruence may simplify a quadratic form without diagonalizing a separately specified operator. Moving a calculation between those questions requires a typed argument, not a matching matrix size.

<a id="section-672-8-perturbations-change-some-exact-classifications-disco"></a>
## 8. Perturbations change some exact classifications discontinuously {#section-674-8-perturbations-change-some-exact-classifications-disco}

**Worked example 23.3 (Compute the exact distance to singularity).**

Consider $D_\delta=\operatorname{diag}(1,\delta)$ with real $0<\delta≤1$. It has exact rank two, while changing only its final entry by $-\delta$ produces rank one. The perturbation has operator 2-norm $\delta$.

This is also the smallest such norm. If $D_\delta+E$ is singular, choose a unit vector x in its kernel. Then $\|Ex\|=\|D_\delta x\|≥\delta$, since $|x_1|^2+\delta^2|x_2|^2≥\delta^2$. Thus $\|E\|_2≥\delta$. The distance to singularity is exactly $\delta$, established without a numerical singular-value computation.

A numerical rank decision therefore concerns a declared perturbation scale. If the data uncertainty permits changes of size at least $\delta$, rank one can be an appropriate nearby model while the recorded exact matrix still has rank two. The decision must say which of those claims it makes.

Scaling the whole matrix changes the absolute distance to singularity while leaving exact rank unchanged. Reporting a threshold without the norm, scale and data interpretation leaves the conclusion underdetermined. Exact zero and unresolved smallness are different evidence states.

For Jordan structure, the two-dimensional family $J_\varepsilon=\begin{pmatrix}1&1\\0&1+\varepsilon\end{pmatrix}$ changes type at zero. For $\varepsilon\ne0$ the eigenvectors $e_1$ and $(1,\varepsilon)^{\mathsf T}$ give a diagonalizing basis, while at zero there is one eigenline and a nontrivial nilpotent part.

The entries converge smoothly, but those basis vectors approach dependence. For $0<|\varepsilon|≤1$, their matrix V has infinity norm two and inverse infinity norm $1+1/|\varepsilon|$, so this displayed eigenvector basis has condition number $2(1+1/|\varepsilon|)$. A representation can be exactly correct and badly suited to perturbed data.

An upper triangular Schur representation is already available for every member of this real family, with orthogonal basis I. The matrix entries then vary continuously without claiming an exact Jordan partition from rounded observations. This particular certificate is explicit; it is not a universal stability theorem for every computed Schur decomposition.

<a id="section-690-a-residual-needs-a-conclusion-and-an-error-set"></a>
### A residual needs a conclusion and an error set {#section-692-a-residual-needs-a-conclusion-and-an-error-set}

**Definition 23.2 (Eigenpair residual).**

For a candidate eigenpair $(\lambda,v)$ with $v\ne0$, the residual is $r=Av-\lambda v$. It is an exact equation defect. Over real or complex Euclidean geometry, $E=-rv^\dagger/(v^\dagger v)$ gives $(A+E)v=\lambda v$ and $\|E\|_2=\|r\|_2/\|v\|_2$. This is a concrete backward-error certificate.

It does not by itself bound the distance from v to an eigenvector of the original A. Such a forward conclusion depends on spectral separation and conditioning. Nor does it establish a joint eigenvector if only one of several equations was checked. For a common eigenvector, every declared operator equation needs its own residual and a compatible perturbation interpretation.

Similarly, $AP-PC$ is the equation defect for a proposed similarity basis. If P is invertible, it identifies a perturbed relation, but converting coordinate error through P can amplify it by its condition number. An orthogonal or unitary P has a different error geometry from an arbitrary cyclic basis.

<a id="section-700-9-build-a-certificate-that-another-reader-can-verify"></a>
## 9. Build a certificate that another reader can verify {#section-702-9-build-a-certificate-that-another-reader-can-verify}

A positive certificate supplies a witness and verifies its defining equation: independent columns for a rank lower bound, an explicit preimage for reachability, or an invertible P with $AP=PC$ for similarity. A negative certificate identifies an obstruction: a nonzero left-null functional evaluating nonzero on b, a failed commutator, or an incompatible field requirement.

Dimension comparisons often finish a proof after containment has been established. They do not replace that containment. To identify a kernel, show the proposed vectors are killed, show their independence, and justify that the list is complete. To identify an image, show every output has the stated form, not just that several sample outputs fit.

Polynomial projections require both residue and operator checks. Congruences modulo pairwise coprime factors determine a residue class, while an annihilating polynomial lets those congruences become exact identities after operator evaluation. Denominators must remain invertible in the named field. A rational projector formula need not survive reduction modulo a prime dividing a denominator.

A cyclic certificate likewise needs more than a spanning assertion. Show the Krylov columns are independent and verify the recurrence for the next column. The resulting companion orientation depends on the chosen column order. An equality $AP=PC$ is a useful check because it exposes every column relation without requiring an explicit inverse.

These mechanisms connect the book's exact proof spine to its numerical boundaries. They also help diagnose a failed claim: the field may be wrong, a map may have the wrong type, a denominator may vanish, a basis may be ill-conditioned, or the claimed identity may simply have a nonzero residual. Those failures call for different repairs.

<a id="section-712-infinite-dimensions-do-not-permit-finite-subtraction"></a>
### Infinite dimensions do not permit finite subtraction {#section-714-infinite-dimensions-do-not-permit-finite-subtraction}

Under choice, rank–nullity still has a cardinal-dimension interpretation, but finite subtraction cannot be carried over unchanged. Multiplication by x on $F[x]$ is injective and has a proper image with the same countable algebraic dimension as the whole space. Equal infinite dimensions and containment do not force equality.

Over a characteristic-zero field, differentiation on $F[x]$ is onto and has the one-dimensional kernel of constants. The cardinal equality is compatible with one extra kernel dimension; it does not let one cancel two countable infinities and conclude that the kernel is zero. The finite theorem's terminating arithmetic is doing real work.

Double annihilation must also be distinguished from surjectivity onto the double dual. With the full algebraic dual and usual choice, $(U^0)_0=U$ remains true for an arbitrary algebraic subspace. If $v\notin U$, choose a basis of $V/U$ containing the nonzero class $v+U$ and a coordinate functional taking value one there. Pulling it back kills U but does not kill v, proving the required separation.

That argument uses basis extension rather than finite dimension subtraction. It does not assert that every functional on $V^*$ is evaluation at a vector of V. The latter is double-dual surjectivity, a different statement. It also says nothing about continuous duals, where closedness and topology change the separation question.

These distinctions explain why a theorem may survive beyond finite dimension while its original finite proof does not. A transfer record should name the replacement mechanism rather than declare either that all infinite-dimensional statements fail or that an algebraic choice theorem supplies every missing analytic conclusion.

<a id="section-724-scalar-extension-preserves-equations-but-can-change-fac"></a>
### Scalar extension preserves equations but can change factorization {#section-726-scalar-extension-preserves-equations-but-can-change-fac}

For a field extension $F\subseteq K$, a finite matrix over F has the same rank over K. A nonzero minor remains nonzero under the inclusion, and a zero minor remains zero. The largest size of a nonzero minor is therefore unchanged.

The minimal polynomial also remains the same polynomial when viewed in $K[t]$. If its degree over F is d, the vectorized matrices $I,A,\ldots,A^{d-1}$ are independent over F. Their finite coefficient matrix has the same rank over K, so they remain independent there. The original degree-d monic relation still holds; uniqueness of a monic relation of smallest degree identifies the polynomial.

What can change is its factorization. The real rotation retains minimal polynomial $t^2+1$ over the complex field, where it factors into distinct linear terms and permits diagonalization. A repeated factor $(t-\lambda)^2$ stays repeated after extension, so a nontrivial Jordan obstruction cannot disappear merely by allowing more scalars.

This proof separates a coefficient identity from its factorization over a named field. It does not confuse extending scalars with changing individual entries or reducing integers modulo a prime.

<a id="section-734-reduction-modulo-a-prime-is-a-different-operation"></a>
### Reduction modulo a prime is a different operation {#section-736-reduction-modulo-a-prime-is-a-different-operation}

There is no field inclusion from $\mathbb Q$ to $F_p$ taking integers to their residues: the invertible rational scalar p would have to map to zero. An integer matrix can nevertheless be reduced entrywise, and rational entries can be reduced when their denominators remain invertible modulo p.

An integer matrix's rank can drop on reduction. Every minor larger than its rational rank is the zero integer, so remains zero. A nonzero integer witness minor can become zero if p divides it. For example $\operatorname{diag}(1,p)$ has rational rank two and rank one over $F_p$.

The same issue affects polynomial projectors with denominators. Their congruence calculations must be redone when a denominator vanishes or two previously coprime factors merge. It is not enough to copy a rational expression and replace its integer symbols by residues.

A reproducible field-change certificate therefore records the exact coefficient domain, which scalars were inverted, which polynomial factors stayed coprime, and which witness minors survived. These are algebraic checks. Numerical rounding in the real field is another operation again and requires a norm and perturbation model rather than modular arithmetic.

<a id="section-744-10-complete-certificate-sheet-for-the-existing-seven-le"></a>
## 10. Complete certificate sheet for the existing seven-lens capstone {#section-746-10-complete-certificate-sheet-for-the-existing-seven-le}

This sheet retains the original fixed operator and valid model. It completes the previously named constructions; it introduces no ninth investigation. Let
\[
A=\begin{pmatrix}1&1&0&0\\0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix}
\]
over $\mathbb Q$, with the standard real inner product used only in the geometric and perturbation parts.

<a id="section-752-primary-projectors-with-their-actual-polynomials"></a>
### Primary projectors with their actual polynomials {#section-754-primary-projectors-with-their-actual-polynomials}

The characteristic polynomial is
$m(t)=(t-1)^2(t-2)(t-3)=t^4-7t^3+17t^2-17t+6$.
The minimal polynomial is the same: the first block has a nonzero nilpotent part of square zero, and the scalar blocks require factors $t-2$ and $t-3$.

Use
\[
p_1(t)=\frac{(3t-1)(t-2)(t-3)}4,\quad
p_2(t)=-(t-1)^2(t-3),\quad
p_3(t)=\frac{(t-1)^2(t-2)}4.
\]
The first polynomial has value one and derivative zero at one, and value zero at two and three. The second has a double zero at one, value one at two and zero at three. The third has a double zero at one, zero at two and value one at three.

On $J_2(1)=I+N$, $p(I+N)=p(1)I+p'(1)N$ because $N^2=0$. On the other blocks polynomial evaluation is scalar evaluation. Thus $P_1=p_1(A)=\operatorname{diag}(1,1,0,0)$, $P_2=p_2(A)=\operatorname{diag}(0,0,1,0)$ and $P_3=p_3(A)=\operatorname{diag}(0,0,0,1)$.

These give the explicit CRT certificate: $\sum P_j=I$, $P_j^2=P_j$, and $P_iP_j=0$ for $i\ne j$. Also $(A-I)P_1$ is the matrix with its only nonzero entry one at position (1,2); its square is zero. The primary pieces are therefore the two-dimensional generalized eigenspace at one and the two scalar lines.

<a id="section-770-a-cyclic-basis-and-the-correctly-oriented-companion"></a>
### A cyclic basis and the correctly oriented companion {#section-772-a-cyclic-basis-and-the-correctly-oriented-companion}

Choose $v=(0,1,1,1)^{\mathsf T}$. The four Krylov columns form
\[
P=(v,Av,A^2v,A^3v)=
\begin{pmatrix}0&1&2&3\\1&1&1&1\\1&2&4&8\\1&3&9&27\end{pmatrix}.
\]
Swapping the first two rows and subtracting the first row from the last two reduces its determinant calculation to
$\det\begin{pmatrix}1&2&3\\1&3&7\\2&8&26\end{pmatrix}=4$.
Hence $\det P=-4\ne0$ and v is cyclic.

The next iterate is $A^4v=(4,1,16,81)^{\mathsf T}$. It equals $-6v+17Av-17A^2v+7A^3v$. Therefore the companion matrix is
\[
C=\begin{pmatrix}0&0&0&-6\\1&0&0&17\\0&1&0&-17\\0&0&1&7\end{pmatrix}.
\]
Directly, both $AP$ and $PC$ equal
$\begin{pmatrix}1&2&3&4\\1&1&1&1\\2&4&8&16\\3&9&27&81\end{pmatrix}$.
This proves similarity with the declared column convention rather than merely naming a companion form.

No polynomial of degree below four can kill A, since applying it to v would give a dependence among P's columns. The displayed degree-four recurrence, together with commutation with powers of A, kills every Krylov basis vector. This supplies another complete minimal-polynomial certificate.

<a id="section-791-a-system-and-its-transpose-map-certificate"></a>
### A system and its transpose-map certificate {#section-793-a-system-and-its-transpose-map-certificate}

The inverse is
\[
A^{-1}=\begin{pmatrix}1&-1&0&0\\0&1&0&0\\0&0&1/2&0\\0&0&0&1/3\end{pmatrix}.
\]
For $b=(3,1,4,6)^{\mathsf T}$ the solution is $x=(2,1,2,2)^{\mathsf T}$, verified by multiplication. Both kernel and left kernel are zero; image and dual image are the full spaces. The annihilator compatibility test is vacuous because every b is reachable. There is no nonzero negative certificate for this invertible A.

For a declared failure case within the same dossier, change the operator to $B=A-I$. Its image is $\operatorname{span}(e_1,e_3,e_4)$ and its kernel is $\mathbb Qe_1$. Its left kernel is $\mathbb Qe_2$, so reachability is exactly $b_2=0$. The original b now fails, certified by $e_2^{\mathsf T}b=1$.

For $\widetilde b=(3,0,4,6)^{\mathsf T}$, all B-solutions are $(s,3,4,3)^{\mathsf T}$ with $s\in\mathbb Q$. This changed case explains a nontrivial annihilator without pretending the original invertible model had one.

<a id="section-803-standard-geometry-real-schur-form-and-controlled-error"></a>
### Standard geometry, real Schur form, and controlled error {#section-805-standard-geometry-real-schur-form-and-controlled-error}

The first block satisfies
$J^{\mathsf T}J=\begin{pmatrix}1&1\\1&2\end{pmatrix}$ and
$JJ^{\mathsf T}=\begin{pmatrix}2&1\\1&1\end{pmatrix}$.
Consequently $A^{\mathsf T}A-AA^{\mathsf T}=\operatorname{diag}(-1,1,0,0)\ne0$. A is not normal in the standard inner product.

Nevertheless A is already real upper triangular. The exact real Schur representation is $Q=I$, $H=A$, with $AQ-QH=0$ and $Q^{\mathsf T}Q-I=0$. This is a complete representation certificate, not the output of a numerical algorithm run. Its small integer entries and identity factors are exactly representable in ordinary binary arithmetic; no measured performance or observed rounding residual is asserted.

Use the infinity norm for the following conditioning record. Row sums give $\|A\|_\infty=3$ and $\|A^{-1}\|_\infty=2$, so $\kappa_\infty(A)=6$. If only b changes, $\|\delta x\|_\infty≤2\|\delta b\|_\infty$. With grid spacing $h=1/1000$, nearest-grid data rounding has error at most $h/2$ per component. The original integer b is unchanged by that rounding.

As a separate permitted perturbation, $\delta b=(1/2000,-1/2000,0,0)^{\mathsf T}$ gives $\delta x=(1/1000,-1/2000,0,0)^{\mathsf T}$, attaining the absolute factor two. These are manually derived values for a specified uncertainty case, not observations from a program.

If $\|E\|_\infty≤\eta<1/2$, $A+E$ remains invertible. A kernel vector would satisfy $\|z\|_\infty≤2\eta\|z\|_\infty$ and hence vanish. For $(A+E)z=y$, the identity $z=A^{-1}y-A^{-1}Ez$ gives
$\|(A+E)^{-1}\|_\infty≤2/(1-2\eta)$.
Thus a perturbed solve obeys
$\|\widehat x-x\|_\infty≤\frac2{1-2\eta}(\|\delta b\|_\infty+\eta\|x\|_\infty)$.

For an exact classification failure case, change the second diagonal entry to $1+\varepsilon$, with rational $0<|\varepsilon|<1/2$. All four eigenvalues are distinct, so the perturbed operator diagonalizes, unlike the original Jordan block. Its real Schur basis can still be I. The earlier two-dimensional calculation shows why a natural eigenvector basis becomes ill-conditioned as $\varepsilon\to0$, even while this system-solution bound stays finite.

<a id="section-823-dossier-comparison-record-and-self-review"></a>
### Dossier comparison record and self-review {#section-825-dossier-comparison-record-and-self-review}

The record is: exact rational input A and b; exact CRT and companion identities above; standard real geometry; Schur representation $(I,A)$ with zero mathematical residual; infinity-norm conditioning six; declared data error $h/2$ and matrix error $\eta<1/2$; explicit perturbation bounds; no executed software run. A learner who performs the original comparison should record their actual arithmetic, algorithm, residuals and precision separately rather than relabel this manual certificate as their run.

An eight-part public self-review can check field/types; kernel/image and invariant blocks; all polynomial residues/projector identities; cyclic independence and $AP=PC$; the actual system/annihilator cases; the nonnormal and Schur certificates; the conditioning/error derivation; and the distinction between stable representation and unstable exact Jordan classification. The changed B and diagonal-perturbation cases test different failure mechanisms. This rubric supports mathematical self-review, not assessed mastery or human qualification.

<a id="section-829-11-optional-practice-extensions"></a>
## 11. Proof, choice, and evidence boundary {#section-897-13-proof-choice-and-evidence-boundary}

The finite transfer, rank-distance, residual and complete capstone calculations are derived here. Arbitrary-dimensional algebraic basis extension and direct-summand existence use the usual choice assumptions, as explicitly stated in [Keith Conrad, Zorn's Lemma and Some Applications, Corollary 4.2, printed page 19](https://kconrad.math.uconn.edu/blurbs/zorn1.pdf). That import supplies no continuity or nearest-point theorem. The corrected keys explicitly name the real field. No source qualification, learner evidence, executed numerical result or whole-book release is asserted.

A complete dossier records which entries are exact, which are measured or rounded, and which calculations were actually executed. A symbolic equality proved by hand is valid evidence of that equality. It is not an observed software run, a timing comparison, or a calibration study. The worked capstone above uses exact arithmetic and explicit perturbation bounds, keeping those evidence types visible.

<a id="section-901-summary"></a>

## Summary

<a id="section-903-summary"></a>
Structural theorems travel with their field, dimension, geometry and exactness hypotheses. Counterexamples identify the failed step when one hypothesis is removed; quotient, dual and module constructions supply positive transfer principles. Exact classification data and numerical backward-error certificates support different conclusions.

## Exercises {#section-60-exercises-with-full-solutions}

<a id="section-60-1-finite-dimension-failure"></a>
### 1. Finite-dimension failure {#section-62-1-finite-dimension-failure}
Give an injective non-surjective endomorphism of an infinite-dimensional space.

<details>
<summary>Hint 1</summary>

Use the vector space with a countable basis e₀,e₁,… and finite-support vectors.

</details>

<details>
<summary>Hint 2</summary>

The shift e_j↦e_{j+1} is injective but misses e₀.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $\mathbb{F}[x]$, multiplication by $x$ is injective but misses nonzero constants.


</details>

<a id="section-85-2-double-dual-boundary"></a>
### 2. Double dual boundary {#section-87-2-double-dual-boundary}
What finite-dimensional proof fails for infinite $V$?

<details>
<summary>Hint 1</summary>

Locate the step asserting dim V*=dim V.

</details>

<details>
<summary>Hint 2</summary>

That finite-basis dimension argument no longer proves surjectivity of the canonical map to V**.

</details>

<details>
<summary>Solution</summary>

**Solution.** Evaluation $V\to V^{**}$ remains injective, but the equal-dimension argument for surjectivity disappears; algebraic $V^{*}$ is much larger.


</details>

<a id="section-110-3-quotient-transfer"></a>
### 3. Quotient transfer {#section-112-3-quotient-transfer}
If $U \subseteq \operatorname{ker} T$, construct the descended map.

<details>
<summary>Hint 1</summary>

Try the formula T̄(v+U)=Tv.

</details>

<details>
<summary>Hint 2</summary>

Compare representatives differing by u∈U and use Tu=0.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $\overline{T}(v+U)=T(v)$; the containment proves representative independence, and quotient operations prove linearity.


</details>

<a id="section-135-4-invariant-quotient"></a>
### 4. Invariant quotient {#section-137-4-invariant-quotient}
If $T(U) \subseteq U$, construct the quotient operator.

<details>
<summary>Hint 1</summary>

Try T̄(v+U)=Tv+U.

</details>

<details>
<summary>Hint 2</summary>

Well-definedness now needs T(U)⊆U rather than T(U)=0.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $\overline{T}(v+U)=Tv+U$; invariance makes it well-defined.


</details>

<a id="section-160-5-similarity-versus-equivalence"></a>
### 5. Similarity versus equivalence {#section-162-5-similarity-versus-equivalence}
Give same-rank matrices not similar.

<details>
<summary>Hint 1</summary>

Use two invertible matrices with the same characteristic polynomial but different minimal polynomials.

</details>

<details>
<summary>Hint 2</summary>

Their equal rank proves equivalence while their minimal polynomials forbid similarity.

</details>

<details>
<summary>Solution</summary>

**Solution.** $I_2$ and $\begin{pmatrix}1 & 1 \\ 0 & 1\end{pmatrix}$ are equivalent by rank but not similar because only the first equals its every conjugate and their minimal polynomials differ.


</details>

<a id="section-185-6-congruence-warning"></a>
### 6. Congruence warning {#section-187-6-congruence-warning}
Give congruent matrices with different eigenvalues.

<details>
<summary>Hint 1</summary>

Rescale a one-dimensional nonzero form.

</details>

<details>
<summary>Hint 2</summary>

Matrices (1) and (4) are congruent over R but have different eigenvalues.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over $\mathbb{R}$, one-dimensional $[1]$ and $[4]$ are congruent via $P=[2]$, since $P^T[1]P=[4]$, but their operator eigenvalues differ.


</details>

<a id="section-210-7-field-failure"></a>
### 7. Field failure {#section-212-7-field-failure}
Give a real operator whose characteristic polynomial has no real root.

<details>
<summary>Hint 1</summary>

Use the real quarter-turn.

</details>

<details>
<summary>Hint 2</summary>

Its characteristic polynomial is t²+1.

</details>

<details>
<summary>Solution</summary>

**Solution.** The 90-degree rotation has $t^2+1$, hence no real eigenvector.


</details>

<a id="section-235-8-extension-limit"></a>
### 8. Extension limit {#section-237-8-extension-limit}
Give an operator not diagonalizable over any extension.

<details>
<summary>Hint 1</summary>

Use a size-two Jordan block.

</details>

<details>
<summary>Hint 2</summary>

Its nonzero nilpotent part persists after extending the scalar field.

</details>

<details>
<summary>Solution</summary>

**Solution.** A nontrivial Jordan block has repeated minimal factor $(t-\lambda)^2$, which stays repeated after extension.


</details>

<a id="section-260-9-characteristic-failure"></a>
### 9. Characteristic failure {#section-262-9-characteristic-failure}
Show a nonconstant polynomial can have zero derivative.

<details>
<summary>Hint 1</summary>

Work in characteristic p.

</details>

<details>
<summary>Hint 2</summary>

The formal derivative of t^p is zero although the polynomial is nonconstant.

</details>

<details>
<summary>Solution</summary>

**Solution.** In characteristic $p$, $(t^p)'=pt^{p-1}=0$.


</details>

<a id="section-285-10-trace-warning"></a>
### 10. Trace warning {#section-287-10-trace-warning}
Can $\operatorname{tr} I=0$?

<details>
<summary>Hint 1</summary>

Compute the trace of the identity as the dimension times 1_F.

</details>

<details>
<summary>Hint 2</summary>

Choose a positive dimension divisible by the field characteristic.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes: on a $p$-dimensional space over characteristic $p$, $\operatorname{tr} I=p=0$, though $I$ is nonzero and invertible.


</details>

<a id="section-310-11-generalized-not-ordinary"></a>
### 11. Generalized not ordinary {#section-312-11-generalized-not-ordinary}
Give a generalized eigenvector that is not an eigenvector.

<details>
<summary>Hint 1</summary>

Use the second vector in a length-two nilpotent chain.

</details>

<details>
<summary>Hint 2</summary>

It is killed by the square but not by the operator itself.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $J_2(\lambda)$, the top chain vector $e_2$ satisfies $(T-\lambda I)^2e_2=0$ but $(T-\lambda I)e_2=e_1\ne 0$.


</details>

<a id="section-335-12-diagonalizable-not-normal"></a>
### 12. Diagonalizable not normal {#section-337-12-diagonalizable-not-normal}
Provide and verify an example.

<details>
<summary>Hint 1</summary>

Choose an upper triangular matrix with distinct eigenvalues and a nonzero off-diagonal entry.

</details>

<details>
<summary>Hint 2</summary>

Distinct roots give diagonalizability; compare TT* and T*T.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\begin{pmatrix}1 & 1 \\ 0 & 2\end{pmatrix}$ has distinct eigenvalues, so diagonalizes, but direct multiplication shows $A^{*}A\ne AA^{*}$ in the standard inner product.


</details>

<a id="section-360-13-normal-not-real-diagonalizable"></a>
### 13. Normal not real diagonalizable {#section-362-13-normal-not-real-diagonalizable}
Provide an example.

<details>
<summary>Hint 1</summary>

Use a real rotation by 90 degrees.

</details>

<details>
<summary>Hint 2</summary>

It is orthogonal and normal, with no real eigenvectors.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take the real quarter-turn $R=\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}$. Since $R^TR=RR^T=I_2$, it is orthogonal and normal. Its characteristic polynomial is $t^2+1$, which has no real root, so it has no real eigenvalue and no real diagonal form. The angle restriction matters: the identity rotation and the half-turn $-I_2$ are already real diagonal matrices.


</details>

<a id="section-385-14-individual-versus-simultaneous"></a>
### 14. Individual versus simultaneous {#section-387-14-individual-versus-simultaneous}
Give two diagonalizable maps not simultaneously diagonalizable.

<details>
<summary>Hint 1</summary>

Choose two diagonalizable matrices that fail to commute.

</details>

<details>
<summary>Hint 2</summary>

A common diagonal basis would force their products to agree.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over $\mathbb{R}$, $\operatorname{diag}(1,2)$ and the coordinate swap are diagonalizable but do not commute; common diagonal matrices would commute.


</details>

<a id="section-410-15-complement-not-invariant"></a>
### 15. Complement not invariant {#section-412-15-complement-not-invariant}
Give an invariant subspace without invariant complement.

<details>
<summary>Hint 1</summary>

Take the invariant eigenline in a single size-two Jordan block.

</details>

<details>
<summary>Hint 2</summary>

Any complementary line invariant under the block would supply a second independent eigenvector.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $N(e_2)=e_1,N(e_1)=0$, $\operatorname{span}(e_1)$ is invariant; every complementary line is generated by $e_2+ae_1$ and maps to $e_1$, outside that line.


</details>

<a id="section-435-16-isotropic-not-radical"></a>
### 16. Isotropic not radical {#section-437-16-isotropic-not-radical}
Give a nonzero isotropic vector in a nondegenerate form.

<details>
<summary>Hint 1</summary>

Use the nondegenerate form x²−y².

</details>

<details>
<summary>Hint 2</summary>

The vector (1,1) has zero self-pairing but pairs nontrivially with some other vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $q(x,y)=x^2-y^2$, $(1,1)$ is isotropic, while matrix $\operatorname{diag}(1,-1)$ is invertible.


</details>

<a id="section-460-17-tensor-nonpurity"></a>
### 17. Tensor nonpurity {#section-462-17-tensor-nonpurity}
Give a tensor not expressible as one pure tensor.

<details>
<summary>Hint 1</summary>

In a two-dimensional tensor product consider e₁⊗e₁+e₂⊗e₂.

</details>

<details>
<summary>Hint 2</summary>

Its coefficient matrix has rank two, whereas a pure tensor has coefficient rank at most one.

</details>

<details>
<summary>Solution</summary>

**Solution.** $e_1 \otimes f_1+e_2 \otimes f_2$ has coefficient matrix rank two, while a pure tensor has rank at most one.


</details>

<a id="section-485-18-exterior-dependence"></a>
### 18. Exterior dependence {#section-487-18-exterior-dependence}
When does $v_1 ∧\ldots∧ v_k$ vanish?

<details>
<summary>Hint 1</summary>

Use the alternating multilinear determinant property.

</details>

<details>
<summary>Hint 2</summary>

A dependence makes the wedge zero; extend an independent list to a basis to prove the converse.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exactly when the vectors are dependent: alternation proves one direction; extension to a basis proves the independent wedge is a basis element.


</details>

<a id="section-510-19-numerical-rank-discontinuity"></a>
### 19. Numerical rank discontinuity {#section-512-19-numerical-rank-discontinuity}
Analyze $A_e=\begin{pmatrix}1 & 1 \\ 1 & 1+e\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Compute the determinant exactly.

</details>

<details>
<summary>Hint 2</summary>

Rank drops at e=0 even though the entries depend continuously on e.

</details>

<details>
<summary>Solution</summary>

**Solution.** Exact rank is one at $e=0$ and two for every nonzero $e$; choosing numerical rank needs scale and an error threshold.


</details>

<a id="section-535-20-jordan-discontinuity"></a>
### 20. Jordan discontinuity {#section-537-20-jordan-discontinuity}
Why is Jordan form unstable?

<details>
<summary>Hint 1</summary>

Compare an exact repeated eigenvalue with a small split perturbation.

</details>

<details>
<summary>Hint 2</summary>

Jordan block sizes depend on exact kernel dimensions, which can jump.

</details>

<details>
<summary>Solution</summary>

**Solution.** An arbitrarily small perturbation can split a repeated eigenvalue and replace a block by distinct one-dimensional eigenspaces, changing the partition discontinuously.


</details>

<a id="section-560-21-proof-transfer"></a>
### 21. Proof transfer {#section-562-21-proof-transfer}
Prove row rank equals column rank without row reduction.

<details>
<summary>Hint 1</summary>

Use im T*=(ker T)° for the algebraic dual map.

</details>

<details>
<summary>Hint 2</summary>

Rank–nullity gives rank T*=rank T, and the two matrices are transposes.

</details>

<details>
<summary>Solution</summary>

**Solution.** Column rank is $\operatorname{rank} T$; row rank is $\operatorname{rank} T^{*}$. Rank normal form or annihilator identities give $\operatorname{rank} T^{*}=\operatorname{rank} T$.


</details>

<a id="section-585-22-synthesis-certificate"></a>
### 22. Synthesis certificate {#section-587-22-synthesis-certificate}
For $T$, list exact data that determine its similarity class over arbitrary $F$.

<details>
<summary>Hint 1</summary>

Use the module classification over F[t].

</details>

<details>
<summary>Hint 2</summary>

The ordered monic invariant factors, or equivalently all elementary divisors, determine the similarity class.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its invariant factors (equivalently rational canonical form or elementary divisors) determine and are determined by the $\mathbb{F}[t]$-module. Trace, determinant, characteristic polynomial, and minimal polynomial alone may be insufficient.


</details>

<a id="section-610-capstone-investigation-one-operator-through-seven-lense"></a>

<a id="section-831-11-optional-practice-extensions"></a>
### 23. LSP-22-E23. A field change can break a numerical witness {#section-835-lsp-22-e23-a-field-change-can-break-a-numerical-witness}

Over $\mathbb R$, verify that the coordinate swap is diagonalizable and fails to commute with $\operatorname{diag}(1,2)$. Then reduce those same arrays modulo two and explain exactly which part of the witness fails. Keep the field change explicit.

<details>
<summary>Hint 1</summary>

Compute the swap's eigenspaces over R before reducing the arrays.

</details>

<details>
<summary>Hint 2</summary>

In characteristic two its eigenvalues merge and the nonzero nilpotent part prevents diagonalizability; check commutation separately.

</details>

<a id="section-851-lsp-22-e24-a-backward-error-certificate-for-one-eigenpa"></a>
### 24. LSP-22-E24. A backward-error certificate for one eigenpair {#section-853-lsp-22-e24-a-backward-error-certificate-for-one-eigenpa}

Over real Euclidean space, let $A=\operatorname{diag}(1,2)$, $\lambda=1$ and $v=(1,\varepsilon)^{\mathsf T}$ with $\varepsilon\ne0$. Compute r and the rank-one correction E from Section 8. Verify $(A+E)v=v$ and give $\|E\|_2$. Explain why this is a nearby-matrix claim.

<details>
<summary>Hint 1</summary>

Compute r=Av−λv and E=−rvᵀ/(vᵀv).

</details>

<details>
<summary>Hint 2</summary>

Use Ev=−r and the rank-one norm formula ‖E‖₂=‖r‖₂/‖v‖₂.

</details>

<a id="section-869-12-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-871-12-solutions-to-the-optional-practice-extensions"></a>
<a id="section-871-lsp-22-e23-a-field-change-can-break-a-numerical-witness"></a>
### LSP-22-E23. A field change can break a numerical witness — solution {#section-873-lsp-22-e23-a-field-change-can-break-a-numerical-witness}

<details>
<summary>Solution</summary>


Over the real field, the swap has eigenvectors $(1,1)$ and $(1,-1)$ with eigenvalues one and minus one. The two products with $\operatorname{diag}(1,2)$ differ. In characteristic two, the swap is not I but its difference from I is nonzero and squares to zero, so its minimal polynomial is $(t-1)^2$ and it is not diagonalizable. The noncommutation survives, but the premise that both maps are individually diagonalizable fails.


</details>

<a id="section-882-lsp-22-e24-a-backward-error-certificate-for-one-eigenpa"></a>
### LSP-22-E24. A backward-error certificate for one eigenpair — solution {#section-884-lsp-22-e24-a-backward-error-certificate-for-one-eigenpa}

<details>
<summary>Solution</summary>


The residual is $r=(0,\varepsilon)^{\mathsf T}$ and
$E=-\frac1{1+\varepsilon^2}\begin{pmatrix}0&0\\\varepsilon&\varepsilon^2\end{pmatrix}$.
Its product with v is $-r$, so $(A+E)v=v$. The rank-one norm is $\|r\|_2/\|v\|_2=|\varepsilon|/\sqrt{1+\varepsilon^2}$. This proves v is an exact eigenvector of the specified nearby matrix; it does not make v an exact eigenvector of the original A.


</details>

<a id="section-895-13-proof-choice-and-evidence-boundary"></a>
