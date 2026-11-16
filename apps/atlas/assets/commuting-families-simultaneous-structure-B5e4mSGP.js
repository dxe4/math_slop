var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: commuting-families-simultaneous-structure
title: "Commuting Families and Simultaneous Structure"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Commuting Families and Simultaneous Structure {#section-1-commuting-families-and-simultaneous-structure}

One operator organizes $V$ into invariant pieces; commuting operators preserve much of that organization. Under suitable splitting or normality hypotheses, an entire family shares a triangular or diagonal basis.

<a id="section-3-1-commutants"></a>
## 1. Commutants {#section-5-1-commutants}

**Definition 21.1 (Commutant).**

The commutant of $T$ is \${S:ST=TS}$. It is a subalgebra containing every polynomial in $T$. If $S$ commutes with $T$, it preserves $\\operatorname{ker} p(T)$ and $\\operatorname{im} p(T)$ for every polynomial $p$, hence every primary component and generalized eigenspace.

For cyclic $T$, every commuting operator is a polynomial in $T$: choose a cyclic vector $v$; write $Sv=p(T)v$, then commutation gives $S(T^kv)=p(T)T^kv$ on a basis.

<a id="section-11-2-simultaneous-triangularization"></a>
## 2. Simultaneous triangularization {#section-13-2-simultaneous-triangularization}

**Theorem 21.1 (Simultaneous triangularization of a finite commuting family).**

Over an algebraically closed field, every finite commuting family is simultaneously upper triangularizable. Find a common eigenvector: an eigenspace of the first operator is preserved by all others; restrict the next operator and continue, decreasing within a nonzero preserved space. The common eigenline gives an invariant quotient; induct on dimension.

More generally it suffices that each relevant characteristic polynomial splits. Over $R$, commuting rotations may have no common real eigenline, so only block forms may exist.

<a id="section-19-3-simultaneous-diagonalization"></a>
## 3. Simultaneous diagonalization {#section-21-3-simultaneous-diagonalization}

**Theorem 21.2 (Simultaneous diagonalization).**

A commuting family of individually diagonalizable operators is simultaneously diagonalizable. Decompose into eigenspaces of the first; commutation preserves each, and restrictions of the remaining diagonalizable maps remain diagonalizable. Induct through the family.

Pairwise commutativity is necessary for simultaneous diagonalization because diagonal matrices commute. Individual diagonalizability alone is not enough.

<a id="section-27-4-commuting-normal-families"></a>
## 4. Commuting normal families {#section-29-4-commuting-normal-families}

**Theorem 21.3 (Simultaneous unitary diagonalization).**

A pairwise commuting family of complex normal operators is simultaneously unitarily diagonalizable. Spectral eigenspaces of one normal operator are preserved by the others and, because adjoints are polynomials in a normal operator on its finite spectrum, reducing; restrictions remain normal. Induction yields orthonormal common eigenvectors.

Real commuting self-adjoint operators are simultaneously orthogonally diagonalizable. This underlies compatible observables, decoupled quadratic forms, and modal decompositions.

<a id="section-35-5-joint-spectra-and-polynomial-algebra"></a>
## 5. Joint spectra and polynomial algebra {#section-37-5-joint-spectra-and-polynomial-algebra}

**Definition 21.2 (Joint eigenvalue tuples).**

For simultaneously diagonalized $T_1,\\ldots,T_r$, each common eigenvector has a joint eigenvalue tuple $(\\lambda_1,\\ldots,\\lambda_r)$. A multivariable polynomial acts by $p(\\lambda_1,\\ldots,\\lambda_r)$. Joint spectral projections group common eigenspaces and turn the generated commutative algebra into coordinatewise scalar functions on the finite joint spectrum.

<a id="section-41-6-boundaries"></a>
## 6. Boundaries {#section-43-6-boundaries}

Commuting approximately is not commuting exactly. Near-commuting matrices need not have an exactly common eigenbasis, and quantitative approximation depends on norms, dimensions, and operator classes. Degenerate eigenspaces also make individual eigenvectors nonunique even when joint invariant subspaces are stable.

<a id="section-45-exercises-with-full-solutions"></a>
## 7. Build the common eigenvector without losing invariance {#section-498-7-build-the-common-eigenvector-without-losing-invarianc}

Let $T_1,\\ldots,T_r$ be pairwise commuting endomorphisms of a nonzero finite-dimensional space over an algebraically closed field F, with $r≥1$. Start with $W_0=V$. We construct nonzero subspaces $W_j$ on which the first j operators act as scalars and which every remaining operator preserves.

Suppose $W_{j-1}$ has these properties. The restriction of $T_j$ to it has an eigenvalue in F, because the space is nonzero and F is algebraically closed. Choose a nonzero eigenspace $W_j$ of this restriction. Every earlier operator is already scalar on the containing space, so remains scalar on the smaller one.

For a remaining operator S and $w\\in W_j$, preservation of $W_{j-1}$ and commutation give $T_jSw=ST_jw=\\lambda_jSw$. Thus S preserves $W_j$. This is the step that justifies continuing inside the chosen eigenspace. Choosing an arbitrary smaller space would not preserve the induction hypotheses.

After r steps, every nonzero vector in $W_r$ is a common eigenvector. The dimensions need not decrease strictly at every step: if a restriction is scalar, its entire space can be selected. What matters is that the spaces stay nonzero and carry all the required invariances.

This argument uses eigenvector existence only on the successive restrictions. The earlier determinant/root route supplies that fact over an algebraically closed field. More generally, it works when the characteristic polynomials of the original operators split over F: in an adapted basis the characteristic polynomials of restrictions and quotients divide the original ones, so their roots still lie in F.

Splitting concerns the chosen field, not the entries being easy to write. A real quarter-turn commutes with itself and has a perfectly explicit matrix, yet supplies no real eigenline. One must either keep a real invariant plane or declare a scalar extension before applying the eigenvector construction.

<a id="section-510-quotient-induction-produces-one-common-flag"></a>
### Quotient induction produces one common flag {#section-512-quotient-induction-produces-one-common-flag}

We prove simultaneous triangularization by induction on $\\dim V$. The zero-dimensional space has the empty basis and empty flag. In positive dimension, choose the common eigenline L just constructed. Each $T_j$ induces $\\overline T_j$ on $V/L$, and the induced operators commute: their composites on $v+L$ are $T_iT_jv+L$ and $T_jT_iv+L$.

Apply the induction hypothesis to the quotient family. If its common flag has k-dimensional terms $\\overline V_k$, put $V_0=0$ and $V_{k+1}=q^{-1}(\\overline V_k)$. The quotient identity $qT_j=\\overline T_jq$ proves every preimage invariant under every operator, and the dimension formula makes its dimension $k+1$.

Choosing one vector at each step gives a basis in which every image of the kth basis vector lies in the first k coordinates. All matrices are upper triangular in that same basis. No invariant complement to L was assumed; ordinary lifts of quotient vectors suffice.

A common flag and a common eigenbasis are different conclusions. Triangularization permits a basis vector to feed into earlier directions, while diagonalization removes every such spill. A nonzero nilpotent block remains an obstruction even when every polynomial splits. Commutation alone does not remove that obstruction.

<a id="section-520-8-why-diagonalizable-restrictions-remain-diagonalizable"></a>
## 8. Why diagonalizable restrictions remain diagonalizable {#section-522-8-why-diagonalizable-restrictions-remain-diagonalizable}

Suppose S is diagonalizable over F with distinct eigenvalues $\\mu_1,\\ldots,\\mu_s$. Define
\\[
p_j(t)=\\prod_{k\\ne j}\\frac{t-\\mu_k}{\\mu_j-\\mu_k}.
\\]
The denominators are nonzero in F. On an eigenvector of eigenvalue $\\mu_k$, $p_j(S)$ acts by $\\delta_{jk}$. Since an eigenbasis spans, the operators sum to I, are idempotent, have pairwise zero products, and project onto the eigenspaces.

If U is S-invariant, every polynomial in S preserves U. Hence each $p_j(S)$ preserves U and
$U=\\bigoplus_j(U\\cap E_{\\mu_j}(S))$.
Each summand consists of eigenvectors with one eigenvalue. Choosing a basis in each nonzero summand proves that $S|_U$ is diagonalizable. This spells out the spectral-polynomial argument without borrowing an orthogonality statement that would be false over a general field.

Now let a finite family commute and let each member be diagonalizable over F. Decompose V into eigenspaces of the first member. Every other member preserves each piece, and the preceding result preserves its diagonalizability after restriction. Repeating this construction gives a direct sum of common eigenspaces. Concatenating their bases gives simultaneous diagonalization.

The induction can stop refining a piece when every remaining restriction is scalar. A common eigenspace can therefore have dimension greater than one. The theorem produces a basis, but it does not select individual vectors inside a jointly degenerate piece.

Diagonalizability over F is essential. An operator diagonalizable only after scalar extension does not meet this hypothesis over the original field. Similarly, the diagonal entries of a triangular form may repeat without the restriction being diagonalizable; one cannot replace the polynomial projector construction by a formula with repeated eigenvalue denominators.

Pairwise commutation is necessary because diagonal matrices commute. The corrected real coordinate-swap example illustrates the missing hypothesis: the diagonal matrix has two distinct eigenlines, while the swap exchanges them rather than preserving each one. A shared eigenbasis would force preservation of both and is impossible.

<a id="section-540-a-family-need-not-come-with-an-algorithmic-preferred-or"></a>
### A family need not come with an algorithmic preferred order {#section-542-a-family-need-not-come-with-an-algorithmic-preferred-or}

Choosing which operator to diagonalize first changes intermediate eigenspaces, not the final joint eigenspaces defined by all eigenvalue equations. An efficient implementation might use an operator with a simple spectrum first, but the existence proof does not supply complexity, stability or a best choice.

Even an arbitrary commuting family on finite-dimensional V reduces to finitely many of its members for these existence conclusions. Its linear span lies in the finite-dimensional space $L(V)$; select a basis of that span from the family. A basis simultaneously triangularizing or diagonalizing those selected members works for every linear combination and hence every family member. This is a finite-dimensional reduction, not a claim that an arbitrary infinite family can be inspected by finitely many unspecified numerical tests.

<a id="section-546-9-normal-adjoints-are-polynomials-on-a-finite-spectrum"></a>
## 9. Normal adjoints are polynomials on a finite spectrum {#section-548-9-normal-adjoints-are-polynomials-on-a-finite-spectrum}

Let N be a complex normal operator. The finite spectral theorem gives $N=\\sum_j\\lambda_jP_j$ with orthogonal eigenspace projections. Interpolate the conjugate values using
\\[
q(t)=\\sum_j\\overline{\\lambda_j}\\prod_{k\\ne j}
\\frac{t-\\lambda_k}{\\lambda_j-\\lambda_k}.
\\]
Then $q(N)=\\sum_j\\overline{\\lambda_j}P_j=N^*$. This is an ordinary polynomial with complex coefficients, evaluated on the finite spectrum.

The assertion does not say complex conjugation is a polynomial function on the whole complex plane. The finitely many interpolation conditions make this particular representation possible. Repeated occurrences of the same eigenvalue are grouped into one eigenspace, so every denominator still compares distinct scalars.

If S commutes with N, it commutes with every polynomial in N and therefore with $N^*$. Taking adjoints gives $NS^*=S^*N$. Consequently an eigenspace of N is invariant under both S and $S^*$. Its orthogonal complement is also S-invariant: if $x$ is perpendicular to that eigenspace and u belongs to it, $\\langle Sx,u\\rangle=\\langle x,S^*u\\rangle=0$.

This proves reduction rather than mere invariance. On a reducing subspace M, the adjoint of $S|_M$ is $S^*|_M$. If S is normal, the restricted products commute because they are restrictions of $S^*S$ and $SS^*$. Thus the restriction remains normal, which is the required induction hypothesis.

For a finite commuting normal family, decompose into eigenspaces of the first member, restrict the remaining normal operators to the resulting reducing spaces, and repeat. The chosen bases can be orthonormal within each piece; orthogonality between pieces makes their concatenation orthonormal. This completes the simultaneous unitary proof.

For real self-adjoint operators, use their real orthogonal eigenspace decompositions. Commutation preserves each eigenspace, self-adjointness makes its orthogonal complement invariant, and restrictions remain self-adjoint. A real normal family is different: even one quarter-turn can require a real two-dimensional block. The complex normal theorem is not a real diagonalization theorem in disguise.

<a id="section-565-10-a-degenerate-eigenspace-resolved-by-a-second-operato"></a>
## 10. A degenerate eigenspace resolved by a second operator {#section-567-10-a-degenerate-eigenspace-resolved-by-a-second-operato}

**Worked example 21.1 (Resolve a repeated eigenspace and compute joint projectors).**

On standard $\\mathbb R^3$, take
\\[
T=\\operatorname{diag}(1,1,2),\\qquad
S=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&3\\end{pmatrix}.
\\]
Both are self-adjoint. They commute because T acts as the scalar one on the first coordinate plane and S preserves that plane and its complementary line. T alone leaves every orthonormal basis of that plane admissible.

The vectors $q_+=(e_1+e_2)/\\sqrt2$, $q_-=(e_1-e_2)/\\sqrt2$, and $e_3$ form a common orthonormal eigenbasis. Their joint eigenvalue tuples for $(T,S)$ are $(1,1)$, $(1,-1)$, and $(2,3)$. This shows concretely why a T-eigenbasis need not already diagonalize S: the original $e_1,e_2$ are mixed by S inside a repeated T-eigenspace.

The common projections are
\\[
P_+=\\tfrac12\\begin{pmatrix}1&1&0\\\\1&1&0\\\\0&0&0\\end{pmatrix},\\quad
P_-=\\tfrac12\\begin{pmatrix}1&-1&0\\\\-1&1&0\\\\0&0&0\\end{pmatrix},\\quad
P_3=\\operatorname{diag}(0,0,1).
\\]
Their squares equal themselves, their mixed products are zero, and their sum is I. They give $T=P_++P_-+2P_3$ and $S=P_+-P_-+3P_3$.

They can also be expressed jointly:
$P_+=(2I-T)(I+S)/2$, $P_-=(2I-T)(I-S)/2$, and $P_3=T-I$.
The factor $2I-T$ first removes the third coordinate; only then is the S-sign split applied. Acting on the common basis verifies each formula.

For example, $T^2S$ acts by scalars one, minus one, and twelve on these three pieces. There is no need to multiply three full matrices to understand its action. The joint decomposition separates which operator produced which scalar.

If S were instead scalar on the first plane, its joint tuple there would repeat and the plane would remain a two-dimensional common eigenspace. Individual unit eigenvectors could rotate inside it while the projection onto the plane stayed unchanged. Claims about a stable invariant space and claims about a preferred eigenvector are therefore different even in exact arithmetic.

<a id="section-594-11-joint-polynomial-measurements-and-the-commutant"></a>
## 11. Joint polynomial measurements and the commutant {#section-596-11-joint-polynomial-measurements-and-the-commutant}

For finitely many distinct tuples $\\lambda^{(a)}\\in F^r$, choose, for each pair a,b, one coordinate $j(a,b)$ on which they differ. The polynomial
\\[
h_a(x_1,\\ldots,x_r)=
\\prod_{b\\ne a}
\\frac{x_{j(a,b)}-\\lambda^{(b)}_{j(a,b)}}
{\\lambda^{(a)}_{j(a,b)}-\\lambda^{(b)}_{j(a,b)}}
\\]
takes value one at tuple a and zero at every other tuple. Its denominators are nonzero by their chosen coordinates. This construction works on a finite set of distinct tuples over any field; an infinite-field assumption is sufficient but unnecessary here.

For simultaneously diagonalized operators, $h_a(T_1,\\ldots,T_r)$ is the projection onto the corresponding common eigenspace. Commutation makes multivariable polynomial evaluation unambiguous. These projectors are algebraic; they are orthogonal only when the joint decomposition is orthogonal in a declared inner product.

A commuting operator must preserve every common eigenspace, since it preserves each component eigenvalue equation. Conversely any map acting independently within those spaces commutes with all members of the family, which are scalar there. Thus jointly repeated tuples permit nontrivial internal matrix blocks in the commutant.

If every common eigenspace is one-dimensional, the commutant consists of diagonal actions in the joint basis, and the interpolating polynomials realize every such action. If a common eigenspace has dimension greater than one, polynomials in the family remain scalar on it, while its full endomorphism algebra may be larger. This identifies the exact limitation of the phrase generated commutative algebra.

For one cyclic operator the limitation disappears in another way. A commuting S is determined by its value on the cyclic generator v. Writing $Sv=p(T)v$ forces equality with $p(T)$ on every iterate and hence on V. Different polynomials represent the same operator precisely modulo the annihilating ideal; a unique representative of degree below the minimal polynomial can be chosen.

<a id="section-613-degeneracy-enlarges-the-commutant-in-a-measurable-way"></a>
### Degeneracy enlarges the commutant in a measurable way {#section-615-degeneracy-enlarges-the-commutant-in-a-measurable-way}

For $T=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n)$, the entrywise equation $TS=ST$ is $(\\lambda_i-\\lambda_j)S_{ij}=0$. Thus entries connecting distinct eigenspaces must vanish, while entries inside a repeated-eigenvalue block are free. If the eigenspace dimensions are $m_1,\\ldots,m_s$, the commutant has dimension $\\sum_jm_j^2$.

In the worked T with multiplicities two and one, that dimension is five. For example $R=\\operatorname{diag}(1,-1,0)$ commutes with T but cannot be a polynomial in T, since every such polynomial is scalar on the first plane. This is a concrete reason the earlier cyclic hypothesis matters.

Adding S from the worked pair reduces the common commutant to independent scalar actions on its three common eigenlines, hence dimension three. The joint polynomial projectors realize those three scalar choices. The map R just displayed does not commute with S, so it is removed by the additional constraint.

This dimension count describes the exact algebra of compatible actions. It does not rank numerical procedures or imply that every compatible action is self-adjoint. Within a jointly repeated eigenspace, an arbitrary internal matrix can commute with the family while failing self-adjointness or normality.

<a id="section-623-12-exact-joint-structure-and-a-small-commutator"></a>
## 12. Exact joint structure and a small commutator {#section-625-12-exact-joint-structure-and-a-small-commutator}

**Worked example 21.2 (An arbitrarily small nonzero commutator).**

Over $\\mathbb R$, let $T_\\delta=\\operatorname{diag}(0,\\delta)$ and let B swap the two coordinates. For $\\delta\\ne0$, both are self-adjoint and diagonalizable but do not commute. Their commutator is $\\begin{pmatrix}0&-\\delta\\\\\\delta&0\\end{pmatrix}$, whose operator 2-norm is $|\\delta|$. In fact, writing this commutator as $C_\\delta$ gives $C_\\delta^{\\mathsf T}C_\\delta=\\delta^2I$. Hence $\\|C_\\delta v\\|_2^2=\\delta^2\\|v\\|_2^2$ for every real vector $v$, which proves the norm claim directly. For every nonzero $\\delta$ the displayed product is still a nonzero matrix, so a shared diagonal basis would contradict the identity that diagonal matrices commute.

Thus the commutator can be arbitrarily small while no common exact eigenbasis exists. At $\\delta=0$, T becomes scalar and any B-eigenbasis works. The exact property changes at the limit. This example does not refute a quantitative near-commuting approximation theorem; it shows that a numerical residual alone is not an equality certificate.

The scale of the matrices also matters. A commutator has the units and scaling of a product: replacing T and S by aT and bS multiplies it by ab. A reported absolute tolerance without norms, scale or model class cannot be interpreted as a universal structural conclusion.

For exact data, verify the product identity before using simultaneous structure. For approximate data, record the norm, data perturbation set, operator class and target conclusion. The conclusion might concern nearby commuting operators or stable joint subspaces rather than exact eigenvectors of the recorded arrays. Such a quantitative theorem is additional analysis, not supplied by the present existence proofs.

<a id="section-635-triangular-joint-values-do-not-classify-a-nilpotent-alg"></a>
### Triangular joint values do not classify a nilpotent algebra {#section-637-triangular-joint-values-do-not-classify-a-nilpotent-alg}

**Worked example 21.3 (Joint diagonal values miss a nilpotent algebra).**

On $F^3$, let $Ne_1=0$, $Ne_2=e_1$, and $Ne_3=e_2$, and put $S=I+N^2$. The operators commute because S is a polynomial in N. Their standard matrices are simultaneously upper triangular, and the standard leading-coordinate flag is common.

There is no common eigenbasis: N is nonzero nilpotent and has only the eigenline $Fe_1$. A diagonalizable nilpotent operator would have every diagonal entry zero and would therefore be zero, contradicting $Ne_2=e_1$.

Every diagonal joint pair in this triangular form is $(0,1)$. Nevertheless the polynomial $p(t,s)=s-1$ gives $p(N,S)=N^2\\ne0$, although $p(0,1)=0$. Thus values on diagonal tuples do not determine polynomial action for a merely triangular family. The description as scalar functions on a finite joint spectrum requires simultaneous diagonalization.

The generated algebra here has independent elements $I,N,N^2$. Independence follows by applying a proposed relation to $e_3$: its coefficients multiply the independent vectors $e_3,e_2,e_1$. The nilpotent directions are genuine algebraic information that a list of joint diagonal values loses.

This example links simultaneous structure to primary and cyclic analysis. Commutativity supplies common organization, but whether that organization consists of scalar eigenspaces or of nontrivial extensions remains a separate structural question. A common flag is useful precisely when a common eigenbasis is unavailable.

<a id="section-649-13-optional-practice-extensions"></a>
## 15. Proof and field boundary {#section-715-15-proof-and-field-boundary}

The common-eigenvector and quotient inductions, restriction projectors, interpolation and reducing-space mechanisms, worked joint example and commutator calculation are proved above. The finite spectral theorem for a complex normal operator is the explicit input from Chapter 19; algebraic triangularization instead uses splitting over the named field. The original counterexample key now explicitly chooses the real field. No quantitative perturbation theorem, executed numerical comparison or human qualification is supplied.

<a id="section-717-summary"></a>

## Summary

<a id="section-719-summary"></a>
Commutation preserves polynomial kernels and images and enables common invariant decompositions. Under the stated splitting or diagonalizability hypotheses it yields simultaneous triangular or diagonal coordinates. Repeated eigenspaces leave room for internal mixing, and an approximately zero commutator is not exact commutation.

## Exercises {#section-47-exercises-with-full-solutions}

<a id="section-47-1-kernel-preservation"></a>
### 1. Kernel preservation {#section-49-1-kernel-preservation}
If $ST=TS$, prove $S \\operatorname{ker} p(T) \\subseteq \\operatorname{ker} p(T)$.

<details>
<summary>Hint 1</summary>

Commutation with T implies commutation with p(T).

</details>

<details>
<summary>Hint 2</summary>

For x in the kernel, compute p(T)Sx=Sp(T)x.

</details>

<details>
<summary>Solution</summary>

**Solution.** $p(T)Sv=Sp(T)v=0$ for a kernel vector.


</details>

<a id="section-72-2-image-preservation"></a>
### 2. Image preservation {#section-74-2-image-preservation}
Prove $S \\operatorname{im} p(T) \\subseteq \\operatorname{im} p(T)$.

<details>
<summary>Hint 1</summary>

Write a vector in the image as p(T)x.

</details>

<details>
<summary>Hint 2</summary>

Then S p(T)x=p(T)Sx lies in the same image.

</details>

<details>
<summary>Solution</summary>

**Solution.** $S(p(T)v)=p(T)Sv$, which remains in the image.


</details>

<a id="section-97-3-eigenspace-preservation"></a>
### 3. Eigenspace preservation {#section-99-3-eigenspace-preservation}
Show $S(E_{\\lambda}(T)) \\subseteq E_{\\lambda}(T)$.

<details>
<summary>Hint 1</summary>

Use the polynomial p(t)=t−λ.

</details>

<details>
<summary>Hint 2</summary>

Apply the kernel-preservation result.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply Exercise 1 to $p(t)=t-\\lambda$.


</details>

<a id="section-122-4-cyclic-commutant"></a>
### 4. Cyclic commutant {#section-124-4-cyclic-commutant}
Prove the polynomial claim.

<details>
<summary>Hint 1</summary>

Let v be a cyclic vector and write Sv=q(T)v.

</details>

<details>
<summary>Hint 2</summary>

Commutation forces S and q(T) to agree on every T^kv, hence on a basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose cyclic $v$, express $Sv=p(T)v$; then for spanning $T^kv$, $S(T^kv)=T^kSv=p(T)T^kv$.


</details>

<a id="section-147-5-common-eigenvector"></a>
### 5. Common eigenvector {#section-149-5-common-eigenvector}
Outline the finite-family proof.

<details>
<summary>Hint 1</summary>

Take an eigenspace of the first operator over the stated splitting field.

</details>

<details>
<summary>Hint 2</summary>

It is invariant under the remaining commuting maps; successively restrict until a common eigenvector is obtained.

</details>

<details>
<summary>Solution</summary>

**Solution.** Start with an eigenspace of one map; every commuting map preserves it. Restrict the next and choose an eigenspace inside it, continuing. Nonzero dimension remains, and any final vector is common.


</details>

<a id="section-172-6-quotient-commutation"></a>
### 6. Quotient commutation {#section-174-6-quotient-commutation}
If a common invariant subspace $U$ exists, prove induced quotient maps commute.

<details>
<summary>Hint 1</summary>

Evaluate both quotient compositions on a coset x+U.

</details>

<details>
<summary>Hint 2</summary>

Their representatives are STx and TSx, which agree.

</details>

<details>
<summary>Solution</summary>

**Solution.** On $v+U$, the two composite outputs are $STv+U$ and $TSv+U$, equal by commutation.


</details>

<a id="section-197-7-triangular-induction"></a>
### 7. Triangular induction {#section-199-7-triangular-induction}
Complete the proof.

<details>
<summary>Hint 1</summary>

Start with the common eigenline and pass to the quotient.

</details>

<details>
<summary>Hint 2</summary>

Lift a simultaneous triangularizing quotient basis and place the eigenvector first.

</details>

<details>
<summary>Solution</summary>

**Solution.** Put a common eigenvector first, triangularize the commuting induced family on the quotient, and lift its basis; the common line makes entries below the first diagonal position zero.


</details>

<a id="section-222-8-necessity-for-simultaneous-diagonalization"></a>
### 8. Necessity for simultaneous diagonalization {#section-224-8-necessity-for-simultaneous-diagonalization}
Prove it.

<details>
<summary>Hint 1</summary>

Two diagonal matrices in the same basis commute.

</details>

<details>
<summary>Hint 2</summary>

Conjugate their products back to the original coordinates.

</details>

<details>
<summary>Solution</summary>

**Solution.** In a common basis both matrices are diagonal and commute; conjugating back preserves equality of products.


</details>

<a id="section-247-9-restriction-diagonalizability"></a>
### 9. Restriction diagonalizability {#section-249-9-restriction-diagonalizability}
If $S$ is diagonalizable and $U$ invariant under $S$, prove $S|_U$ diagonalizable.

<details>
<summary>Hint 1</summary>

The restriction minimum divides the original minimum.

</details>

<details>
<summary>Hint 2</summary>

Use the split square-free criterion for diagonalizability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Spectral polynomial projections preserve $U$, decomposing it into intersections with eigenspaces.


</details>

<a id="section-272-10-simultaneous-diagonal-induction"></a>
### 10. Simultaneous diagonal induction {#section-274-10-simultaneous-diagonal-induction}
Prove the theorem for two maps.

<details>
<summary>Hint 1</summary>

Decompose into eigenspaces of the first map.

</details>

<details>
<summary>Hint 2</summary>

The second preserves each and remains diagonalizable there, giving eigenbases inside all summands.

</details>

<details>
<summary>Solution</summary>

**Solution.** Decompose $V$ into eigenspaces of $T$; $S$ preserves each and its restrictions diagonalize. Concatenate eigenbases of the restrictions.


</details>

<a id="section-297-11-counterexample-without-commuting"></a>
### 11. Counterexample without commuting {#section-299-11-counterexample-without-commuting}
Give diagonalizable maps with no common eigenbasis.

<details>
<summary>Hint 1</summary>

Choose a diagonal map with distinct eigenvalues and a diagonalizable map that does not preserve its eigenlines.

</details>

<details>
<summary>Hint 2</summary>

Noncommutation rules out a common diagonal basis.

</details>

<details>
<summary>Solution</summary>

**Solution.** Over $\\mathbb{R}$, $A=\\operatorname{diag}(1,2)$ and $B=\\begin{pmatrix}0 & 1 \\\\ 1 & 0\\end{pmatrix}$ are each diagonalizable but do not commute, so cannot be simultaneously diagonalized.


</details>

<a id="section-322-12-real-boundary"></a>
### 12. Real boundary {#section-324-12-real-boundary}
Give commuting real maps without real simultaneous triangularization.

<details>
<summary>Hint 1</summary>

Use a real quarter-turn together with the identity.

</details>

<details>
<summary>Hint 2</summary>

They commute, but real triangularization would give a real eigenvalue for the quarter-turn.

</details>

<details>
<summary>Solution</summary>

**Solution.** A 90-degree rotation and its powers commute, but the rotation has no real eigenline, which every real upper triangular form would supply.


</details>

<a id="section-347-13-self-adjoint-preservation"></a>
### 13. Self-adjoint preservation {#section-349-13-self-adjoint-preservation}
If self-adjoint $A,B$ commute, show each eigenspace of $A$ reduces $B$.

<details>
<summary>Hint 1</summary>

Commutation gives invariance of each A-eigenspace under B.

</details>

<details>
<summary>Hint 2</summary>

Self-adjointness of B then gives invariance of its orthogonal complement.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is invariant by commutation; its orthogonal complement is invariant under self-adjoint $B$.


</details>

<a id="section-372-14-joint-polynomial-action"></a>
### 14. Joint polynomial action {#section-374-14-joint-polynomial-action}
Prove $p(T_1,\\ldots,T_r)v=p(\\lambda_1,\\ldots,\\lambda_r)v$ on a common eigenvector.

<details>
<summary>Hint 1</summary>

Apply the operators successively to the common eigenvector.

</details>

<details>
<summary>Hint 2</summary>

Every monomial acts by the corresponding product of scalar eigenvalues.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each monomial contributes the corresponding product of eigenvalues; sum with polynomial coefficients.


</details>

<a id="section-397-15-joint-projections"></a>
### 15. Joint projections {#section-399-15-joint-projections}
Why can distinct joint tuples be separated by polynomials over an infinite field?

<details>
<summary>Hint 1</summary>

For each competing tuple choose a coordinate where it differs from the selected tuple.

</details>

<details>
<summary>Hint 2</summary>

Multiply normalized linear factors in those coordinates to obtain one at the selected tuple and zero at the others.

</details>

<details>
<summary>Solution</summary>

**Solution.** For finitely many distinct points, products of suitable affine linear functions give multivariable Lagrange interpolants taking prescribed values.


</details>

<a id="section-422-16-repeated-eigenvalues"></a>
### 16. Repeated eigenvalues {#section-424-16-repeated-eigenvalues}
Why may $S$ mix eigenvectors inside one $T$-eigenspace?

<details>
<summary>Hint 1</summary>

On a fixed T-eigenspace, T is the scalar λI.

</details>

<details>
<summary>Hint 2</summary>

Every linear map of that space commutes with this scalar action.

</details>

<details>
<summary>Solution</summary>

**Solution.** On that entire subspace $T=\\lambda I$, which commutes with every restriction of $S$; commutation imposes no further direction choice there.


</details>

<a id="section-447-17-family-size"></a>
### 17. Family size {#section-449-17-family-size}
Why does the proof extend from pairs to finite families?

<details>
<summary>Hint 1</summary>

After resolving one map, restrict all remaining maps to its eigenspaces.

</details>

<details>
<summary>Hint 2</summary>

Pairwise commutation and diagonalizability survive restriction, so induction applies.

</details>

<details>
<summary>Solution</summary>

**Solution.** Repeatedly refine invariant eigenspace decompositions; finite dimension and finite family make induction terminate.


</details>

<a id="section-472-18-numerical-boundary"></a>
### 18. Numerical boundary {#section-474-18-numerical-boundary}
Why does small $\\lVert ST-TS\\rVert$ not prove common exact eigenvectors?

<details>
<summary>Hint 1</summary>

A small residual is quantitative, whereas an exact invariant subspace is an algebraic condition.

</details>

<details>
<summary>Hint 2</summary>

Even a nonzero commutator of arbitrarily small norm prevents exact simultaneous diagonalization.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is an approximate norm statement, while exact joint eigenspaces are algebraic and can change discontinuously. Quantitative replacement theorems require operator class, norm, spectral gaps, and error bounds.

</details>

<a id="section-496-7-build-the-common-eigenvector-without-losing-invarianc"></a>

<a id="section-651-13-optional-practice-extensions"></a>
### 19. LSP-21-E19. Resolve a repeated eigenspace {#section-655-lsp-21-e19-resolve-a-repeated-eigenspace}

For T and S in Section 10, find the action of $p(T,S)=T+S^2$ on each joint eigenspace and write the result using $P_+,P_-,P_3$. Give its matrix in the original basis.

<details>
<summary>Hint 1</summary>

Read the joint eigenvalue tuples from Section 10.

</details>

<details>
<summary>Hint 2</summary>

Evaluate t+s² at each tuple, multiply its projector, and sum the three matrices.

</details>

<a id="section-671-lsp-21-e20-adjoints-on-a-two-point-complex-spectrum"></a>
### 20. LSP-21-E20. Adjoints on a two-point complex spectrum {#section-673-lsp-21-e20-adjoints-on-a-two-point-complex-spectrum}

Suppose a normal operator has distinct eigenvalues zero and i. Find a degree-at-most-one polynomial q with $q(N)=N^*$ and prove that every operator commuting with N preserves both eigenspaces and their orthogonal complements.

<details>
<summary>Hint 1</summary>

Interpolate conjugation at the two spectral points.

</details>

<details>
<summary>Hint 2</summary>

The polynomial q(t)=−t agrees with conjugation on 0,i; commuting with N therefore implies commuting with N* and preserving both spectral summands.

</details>

<a id="section-689-14-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-691-14-solutions-to-the-optional-practice-extensions"></a>
<a id="section-691-lsp-21-e19-resolve-a-repeated-eigenspace-solution"></a>
### LSP-21-E19. Resolve a repeated eigenspace — solution {#section-693-lsp-21-e19-resolve-a-repeated-eigenspace-solution}

<details>
<summary>Solution</summary>


The three joint tuples give values $1+1=2$, $1+1=2$, and $2+9=11$. Thus $p(T,S)=2P_++2P_-+11P_3=\\operatorname{diag}(2,2,11)$. Although S resolves the first plane into two joint eigenlines, this particular polynomial has the same value on both and groups them again.


</details>

<a id="section-702-lsp-21-e20-adjoints-on-a-two-point-complex-spectrum-sol"></a>
### LSP-21-E20. Adjoints on a two-point complex spectrum — solution {#section-704-lsp-21-e20-adjoints-on-a-two-point-complex-spectrum-sol}

<details>
<summary>Solution</summary>


The conditions are $q(0)=0$ and $q(i)=-i$, so $q(t)=-t$. Spectral evaluation gives $N^*=-N$. A commuting S commutes with every spectral polynomial projector of N, so preserves both eigenspaces. Each projector is self-adjoint; taking the adjoint of its commutation with S proves commutation with $S^*$ as well. Orthogonality and the adjoint identity then make the complements S-invariant. No global polynomial formula for complex conjugation is being asserted.


</details>

<a id="section-713-15-proof-and-field-boundary"></a>
`;export{e as default};