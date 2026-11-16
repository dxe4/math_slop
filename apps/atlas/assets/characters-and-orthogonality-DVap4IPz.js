var e=`---
parent_id: book-representation-theory-finite-groups
chapter_id: characters-and-orthogonality
title: "Characters and Orthogonality"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Characters and Orthogonality

A representation assigns a matrix to every group element; a character keeps only its trace. Why should so much information survive this compression? The answer is that an average of traces computes a dimension of equivariant maps. Maschke's theorem and Schur's lemma then turn those dimensions into irreducible multiplicities.

Read [Maschke's theorem](maschkes-theorem.md) and [Schur's lemma](schurs-lemma.md). Throughout this chapter G is finite and every representation is finite-dimensional over C. Complex conjugation and positivity are essential to the inner-product statements. The corresponding formulas in modular characteristic do not classify representations.

## 1. Trace functions and the coefficient-field convention

**Definition 4.1.** The character of V is the function
$$\\chi_V:G\\to\\mathbb C,\\qquad \\chi_V(g)=\\operatorname{tr}\\rho_V(g).$$
A class function is any function constant on conjugacy classes. Characters are class functions because
tr(ρ(hgh^(−1)))=tr(ρ(h)ρ(g)ρ(h)^(−1))=trρ(g).

An isomorphism of representations conjugates every action operator by the same linear isomorphism, so it preserves the character. Also χ_V(e)=dim V. Direct sums give χ_(V⊕W)=χ_V+χ_W because their matrices are block diagonal.

Every g has finite order d, so ρ(g)^d=I. The polynomial x^d−1 has distinct complex roots: its derivative dx^(d−1) has no common root with it. Thus ρ(g) is diagonalizable, and its eigenvalues are d-th roots of unity. Consequently
$$\\chi_V(g^{-1})=\\overline{\\chi_V(g)},\\qquad
|\\chi_V(g)|\\leq\\dim V.$$
The first identity follows by replacing each unit-modulus eigenvalue λ with λ^(−1)=\\bar λ. The inequality is the triangle inequality for the eigenvalue sum.

**Proposition 4.2.** For dim V>0, equality |χ_V(g)|=dim V holds exactly when ρ(g) is scalar. Moreover χ_V(g)=dim V holds exactly when ρ(g)=I.

*Proof.* A sum of dim V unit-modulus numbers has maximal modulus only when all summands have the same argument. One way to see this is to square its modulus: every real part of λ_i\\bar λ_j is at most one, and maximal total forces every such real part to be one. Thus all eigenvalues coincide. Diagonalizability then makes ρ(g) scalar. Conversely a scalar unitary operator has maximal trace modulus. The trace itself equals the positive integer dim V only when that common scalar is 1. ∎

So the character recovers the representation kernel as {g:χ_V(g)=χ_V(e)}. A nonidentity scalar operator attains the absolute-value bound but need not belong to the kernel.

## 2. Averaging the Hom representation

For representations V,W, let G act on Hom_C(V,W) by
$$g\\cdot T=\\rho_W(g)T\\rho_V(g)^{-1}.$$
This is a representation: multiplying the actions for g,h gives the action for gh, since the inverses appear in reversed order on the right. Its fixed space is exactly Hom_G(V,W).

**Lemma 4.3.** The character of this Hom representation is
$$\\chi_{\\operatorname{Hom}(V,W)}(g)
=\\chi_W(g)\\chi_V(g^{-1})
=\\chi_W(g)\\overline{\\chi_V(g)}.$$

*Proof.* If A acts on W and B acts on V, the linear operator T↦ATB on Hom(V,W) has trace tr A·tr B. To check this without tensor notation, use the matrix-unit basis E_ab. The coefficient of E_ab in AE_abB is A_aa B_bb. Summing over a,b gives the product of traces. Apply this with A=ρ_W(g), B=ρ_V(g)^(−1), and use the inverse-character identity. ∎

For class functions define
$$\\langle f,h\\rangle_G=\\frac1{|G|}\\sum_{g\\in G}f(g)\\overline{h(g)}.$$
This Hermitian inner product is linear in f, conjugate-linear in h and positive definite. Positivity follows because ⟨f,f⟩ is the average of |f(g)|², vanishing only for f=0.

**Theorem 4.4 (The Hom formula).**
$$\\langle\\chi_W,\\chi_V\\rangle_G
=\\dim_{\\mathbb C}\\operatorname{Hom}_G(V,W).$$

*Proof.* The Reynolds operator on Hom(V,W) is the average of its G-action operators. It projects onto the fixed space Hom_G(V,W). The trace of a complex projection is its rank. Taking its trace, using linearity and Lemma 4.3, gives the displayed formula. ∎

This proves in particular that the inner product of two characters is a nonnegative integer. That is a special property of characters, not of arbitrary class functions. If their roles are reversed, the resulting Hom dimension agrees because both are the real integer inner product and the Hermitian product is conjugate symmetric.

### Recovering an actual isomorphism

The Hom average can recover matrices as well as dimensions. Suppose V and W are irreducible and their character inner product is one. Average each matrix unit E_ab by the action above. At least one average is nonzero: otherwise the projection would vanish on a basis of Hom(V,W), hence on the whole space, contradicting its rank one. Each nonzero average intertwines the actions and is an isomorphism by Schur's lemma. Thus a finite search through a specified basis constructs an actual change of coordinates between the two representations.

One arbitrary trial matrix is insufficient, because it may lie in the projection's kernel. For reducible representations a nonzero intertwiner can also have a nontrivial kernel or proper image. The irreducibility hypotheses supply the step from a nonzero averaged matrix to an invertible matrix; the character calculation supplies the existence of a successful trial.

## 3. Row orthogonality and multiplicities

**Theorem 4.5 (Row orthogonality).** For pairwise nonisomorphic irreducible complex representations S_i with characters χ_i,
$$\\langle\\chi_i,\\chi_j\\rangle_G=\\delta_{ij}.$$

*Proof.* The Hom formula turns the left side into dim Hom_G(S_j,S_i). Schur's lemma makes that dimension one when i=j and zero otherwise. ∎

If V≅⊕_i S_i^(⊕m_i), additivity gives χ_V=Σ_i m_iχ_i. Taking its inner product with χ_j yields
$$m_j=\\langle\\chi_V,\\chi_j\\rangle_G,\\qquad
\\langle\\chi_V,\\chi_V\\rangle_G=\\sum_i m_i^2.$$

**Corollary 4.6.** A nonzero complex representation V is irreducible exactly when ⟨χ_V,χ_V⟩=1. Two complex representations are isomorphic exactly when their characters agree.

*Proof.* Maschke decomposes both into irreducibles. A sum of squares of nonnegative integer multiplicities equals one precisely when there is a single summand with multiplicity one. Equality of characters gives equal inner products with every irreducible character and hence equal multiplicities; uniqueness of decomposition gives an isomorphism. The converse follows from invariance of trace under conjugation. ∎

The irreducibility criterion presupposes an actual representation or a known genuine character. A made-up class function of norm one is not thereby proved to be a character.

## 4. The regular representation and completeness

The regular character χ_reg has value |G| at e and zero elsewhere, by the fixed-basis-vector count. Every irreducible S occurs in the regular representation. Indeed, choose 0≠v∈S; the map e_g↦gv has nonzero invariant image and hence is surjective. Maschke splits that surjection, so S embeds in C[G]. Therefore there are finitely many irreducible types.

Its multiplicity is
$$\\langle\\chi_{\\mathrm{reg}},\\chi_i\\rangle_G=\\chi_i(e)=d_i.$$
Consequently
$$\\mathbb C[G]\\cong\\bigoplus_i S_i^{\\oplus d_i},
\\qquad |G|=\\sum_i d_i^2.$$
This degree-square identity gives a powerful completeness certificate once a collection of inequivalent irreducible representations has been constructed.

**Theorem 4.7 (Character completeness).** The irreducible characters form an orthonormal basis of the space of complex class functions. In particular their number equals the number of conjugacy classes.

*Proof.* Orthogonality is already proved. To prove spanning, suppose a class function f is orthogonal to every irreducible character. Form the group-algebra element
$$a=\\sum_{g\\in G}f(g)g^{-1}.$$
It is central: conjugation only permutes terms, and f is constant on classes. On an irreducible S_i, its operator ρ_i(a)=Σ_g f(g)ρ_i(g^(−1)) commutes with G, hence is a scalar λ_iI by Schur. Its trace is
$$d_i\\lambda_i=\\sum_g f(g)\\chi_i(g^{-1})
=|G|\\langle f,\\chi_i\\rangle_G=0.$$
Since d_i is a nonzero complex integer, λ_i=0.

The regular representation is a direct sum of those irreducibles, so a acts by zero on it. Applying left multiplication by a to the regular basis vector e_e gives a itself as a vector. Hence a=0, and linear independence of group basis elements gives f(g)=0 for all g. Thus the orthogonal complement of the irreducible-character span is zero. Finite-dimensional inner-product linear algebra gives spanning.

Finally, the indicator functions of the conjugacy classes form a basis of the class-function space, whose dimension is the number of classes. ∎

This proves the completeness theorem that the earlier short character-table reading imported. The proof did not assume completeness in order to decompose the regular module: Maschke and the explicit map from a regular module to any irreducible supplied that decomposition first.

## 5. Columns and matrix coefficients

Let C_1,…,C_r be the conjugacy classes, with representatives g_j and sizes c_j. Define
$$U_{ij}=\\sqrt{\\frac{c_j}{|G|}}\\chi_i(g_j).$$
Row orthogonality states UU^*=I. Completeness makes U square, so its inverse is U^* and U^*U=I as well. Therefore
$$\\sum_i\\chi_i(g_j)\\overline{\\chi_i(g_\\ell)}
=\\frac{|G|}{c_j}\\delta_{j\\ell}.$$
The norm of a column is the centraliser size |C_G(g_j)|=|G|/c_j. Distinct class columns are orthogonal. Omitting c_j from row sums, or adding it a second time to column sums, gives incorrect identities.

There is a finer relation before taking traces. Choose invariant positive-definite products and orthonormal bases on each S_i, so their matrices are unitary.

**Theorem 4.8 (Matrix-coefficient orthogonality).**
$$\\frac1{|G|}\\sum_g
\\rho_i(g)_{ab}\\overline{\\rho_j(g)_{cd}}
=\\frac{\\delta_{ij}\\delta_{ac}\\delta_{bd}}{d_i}.$$

*Proof.* Let E_bd:S_j→S_i send the d-th basis vector to the b-th and the others to zero. Its equivariant average is zero if i≠j by Schur. If i=j it is scalar; averaging conjugations preserves trace, so its scalar is tr(E_bd)/d_i=δ_bd/d_i. The (a,c) entry of the average is the sum on the left: the inverse matrix in the averaging formula is the conjugate transpose, giving (ρ_j(g)^(−1))_dc=\\overline{ρ_j(g)_cd}. Taking that entry gives the result. ∎

Summing diagonal matrix coefficients recovers character orthogonality. The full relation explains why a character norm detects an irreducible even though a character records only diagonal sums.

## 6. Worked example: the Fourier table of C_3

Write C_3={e,r,r²} and ω=exp(2πi/3). Its three one-dimensional representations give rows
$$\\chi_0=(1,1,1),\\quad
\\chi_1=(1,\\omega,\\omega^2),\\quad
\\chi_2=(1,\\omega^2,\\omega).$$
Since 1+ω+ω²=0, distinct rows have inner product zero and each has norm one. All classes have size one. These three rows exhaust the three classes, and the degree squares add to three.

Consider χ=(4,1,1), obtained from the direct sum of the three-dimensional regular representation and a trivial line. Its multiplicities are
$$\\langle\\chi,\\chi_0\\rangle=2,\\quad
\\langle\\chi,\\chi_1\\rangle=1,\\quad
\\langle\\chi,\\chi_2\\rangle=1.$$
For example the second is (4+ω²+ω)/3=1. Thus its degree-four decomposition is two trivial lines plus the two nontrivial lines. Complex conjugation in the inner product is visible here; all-real tables can conceal it.

## 7. Worked example: ordered pairs for S_3

The classes of S_3 have sizes 1,3,2, represented by e,(12),(123). Its trivial, sign and standard-plane characters are
$$\\chi_1=(1,1,1),\\quad
\\chi_\\varepsilon=(1,-1,1),\\quad
\\chi_W=(2,0,-1).$$
For W, subtract the fixed trivial line from the coordinate permutation character (3,1,0). Its norm is (4+0+2)/6=1, independently certifying its irreducibility. The degree squares 1+1+4=6 certify completeness.

Let X={(i,j):i≠j} be the six ordered pairs of distinct labels. A pair is fixed exactly when both labels are individually fixed. Only the identity has two fixed labels, so χ_X=(6,0,0). Its multiplicities are 1,1,2, respectively, and
$$\\mathbb C[X]\\cong 1\\oplus\\varepsilon\\oplus W^{\\oplus2}.$$
Taking the character norm gives 6, equal to 1²+1²+2², which also agrees with the dimension of its equivariant endomorphism algebra.

One can obtain these conclusions without writing a single 6×6 matrix. The trace calculation still comes from a real representation construction—the permutation action—not from guessing a row of numbers.

## 8. Worked example: a class function that is not a character

For the same S_3 classes let f=χ_W−χ_ε=(1,1,−2). It is a class function with positive integer value f(e)=1, and all its values are integers. Nevertheless
$$\\langle f,\\chi_\\varepsilon\\rangle=-1.$$
No complex representation has a negative irreducible multiplicity, so f is not a character. It is a virtual character, an integer difference of genuine characters.

There is also a simpler obstruction: |f((123))|=2 exceeds f(e)=1, contradicting the trace bound. The multiplicity test is stronger as a systematic method once the complete irreducible table is known. A class function is a genuine character precisely when every coefficient in its irreducible-character expansion is a nonnegative integer. Sufficiency follows by constructing that many copies of each irreducible; necessity follows from the multiplicity formula.

Inflation along a quotient preserves the character inner product. If both characters factor through G/N, each element of the quotient has exactly |N| preimages, so the sum over G is |N| times the quotient sum. Dividing by |G| gives the quotient inner product unchanged. Hence an irreducible quotient representation remains irreducible after inflation, and its multiplicities in inflated direct sums are unchanged. Its kernel, however, now includes N. Orthogonality therefore detects irreducibility in the specified action without requiring that action to be faithful.

## 9. Exercises

### REP-04-01 — Character of a direct sum

Prove χ_(V⊕W)=χ_V+χ_W and compute the character of the zero representation.

<details>
<summary>Hint 1</summary>

Use a basis obtained by concatenating bases of the summands.

</details>
<details>
<summary>Hint 2</summary>

Trace is the sum of the diagonal entries of the block diagonal matrix.

</details>
<details>
<summary>Full solution</summary>

The action matrix on V⊕W is diag(ρ_V(g),ρ_W(g)). Its trace is the sum of the two block traces. The zero-dimensional matrix has trace zero, so the zero representation has identically zero character. Its norm is zero and it is not irreducible, consistent with the nonzero hypothesis in the irreducibility criterion.

</details>

### REP-04-02 — Recover the kernel

For a nonzero complex representation, prove kerρ={g:χ(g)=χ(e)} and distinguish equality of absolute values.

<details>
<summary>Hint 1</summary>

Every eigenvalue has unit modulus.

</details>
<details>
<summary>Hint 2</summary>

Equality in the triangle inequality forces a common phase.

</details>
<details>
<summary>Full solution</summary>

Write d=χ(e). If χ(g)=d, the sum of d unit-modulus eigenvalues is the positive real number d. Equality in the triangle inequality makes them all equal, and their common value must be 1. Diagonalizability gives ρ(g)=I. The reverse implication is immediate. Equality |χ(g)|=d only forces ρ(g)=λI with |λ|=1. For a nontrivial one-dimensional character, every element satisfies the absolute-value equality but many lie outside the kernel.

</details>

### REP-04-03 — Inner-product order

Use the Hom formula to explain why ⟨χ_V,χ_W⟩=⟨χ_W,χ_V⟩ despite the inner product being Hermitian rather than bilinear.

<details>
<summary>Hint 1</summary>

Both quantities are dimensions.

</details>
<details>
<summary>Hint 2</summary>

Hermitian symmetry conjugates a nonnegative integer to itself.

</details>
<details>
<summary>Full solution</summary>

The Hom formula makes each inner product a nonnegative integer, hence real. Hermitian symmetry gives ⟨χ_V,χ_W⟩=\\overline{⟨χ_W,χ_V⟩}=⟨χ_W,χ_V⟩. Equivalently, decomposing both representations gives the same integer Σ_i m_i n_i in either order. Arbitrary class-function inner products need not be real and cannot be treated as bilinear.

</details>

### REP-04-04 — Standard S_n irreducibility

For n≥2, prove the complex sum-zero subrepresentation of C^n is irreducible by computing the norm of its character from orbit counts on ordered pairs.

<details>
<summary>Hint 1</summary>

The coordinate permutation character π satisfies ⟨π,1⟩=1.

</details>
<details>
<summary>Hint 2</summary>

The action on ordered pairs has two orbits: equal and unequal coordinates.

</details>
<details>
<summary>Full solution</summary>

The average of π is the fixed-space dimension of C^n, which is one because the set action is transitive. The function π(g)² counts ordered pairs fixed by g and is the character of the permutation action on {1,…,n}². That action has two orbits, so its fixed-space dimension, the average of π², is two. Since π is real valued, ⟨π,π⟩=2. The sum-zero character is π−1, and its norm is 2−1−1+1=1. It comes from an actual nonzero representation, so it is irreducible.

</details>

### REP-04-05 — Regular multiplicities

Show the trivial representation occurs once in C[G], and a degree-d irreducible occurs d times.

<details>
<summary>Hint 1</summary>

The regular character vanishes off the identity.

</details>
<details>
<summary>Hint 2</summary>

Apply the multiplicity formula with the degree at e.

</details>
<details>
<summary>Full solution</summary>

For an irreducible χ, its multiplicity is
|G|^(−1)Σ_gχ_reg(g)\\overline{χ(g)}
=\\overline{χ(e)}=d.
The degree is a positive integer and hence real. For the trivial character d=1, so its multiplicity is one. This also agrees with the all-ones fixed line. Taking total dimensions yields Σ_i d_i²=|G|.

</details>

### REP-04-06 — Complete a C_3 decomposition

Decompose the class function χ=(5,2,2) of C_3 and decide whether it is a character.

<details>
<summary>Hint 1</summary>

Use the three Fourier rows of Section 6.

</details>
<details>
<summary>Hint 2</summary>

The two nontrivial coefficient sums use ω+ω²=−1.

</details>
<details>
<summary>Full solution</summary>

The trivial multiplicity is (5+2+2)/3=3. Each nontrivial multiplicity is (5+2ω+2ω²)/3=(5−2)/3=1. Thus χ=3χ_0+χ_1+χ_2. All coefficients are nonnegative integers, so it is the character of three trivial lines plus one copy of each nontrivial line, of total degree five.

</details>

### REP-04-07 — Weighted S_3 rows

Calculate the norm of (2,0,−1) both with and without class sizes, and explain the discrepancy.

<details>
<summary>Hint 1</summary>

The three classes have sizes 1,3,2.

</details>
<details>
<summary>Hint 2</summary>

The definition averages over six elements, not three representatives.

</details>
<details>
<summary>Full solution</summary>

The correct norm is (1·4+3·0+2·1)/6=1. Omitting sizes but retaining denominator six gives 5/6; averaging the three representatives instead gives 5/3. Neither is the group inner product. Class representatives compress repeated equal values, and the sizes must restore exactly how many group elements contributed each term.

</details>

### REP-04-08 — Column norm

Using the S_3 table, compute the squared norm of its transposition column and interpret it group-theoretically.

<details>
<summary>Hint 1</summary>

Read the entries 1,−1,0.

</details>
<details>
<summary>Hint 2</summary>

Compare |G| with the transposition class size.

</details>
<details>
<summary>Full solution</summary>

The squared norm is 1+1+0=2. The transposition class has size three, so |G|/3=2, the centraliser order. Explicitly the centraliser of (12) in S_3 is {e,(12)}. Column orthogonality uses an unweighted sum over irreducible rows; the group-class weight has already appeared on its right side.

</details>

### REP-04-09 — Genuine versus virtual characters

Let f=Σ_i a_iχ_i be a class function in the complete irreducible basis. Prove it is a character exactly when all a_i are nonnegative integers.

<details>
<summary>Hint 1</summary>

For necessity use multiplicities of an actual representation.

</details>
<details>
<summary>Hint 2</summary>

For sufficiency construct a direct sum.

</details>
<details>
<summary>Full solution</summary>

If f=χ_V, Maschke and orthogonality give a_i=⟨f,χ_i⟩ equal to the irreducible multiplicity, a nonnegative integer. Conversely, when all a_i have that form, form V=⊕_i S_i^(⊕a_i). There are finitely many irreducible types, so this is finite-dimensional, and additivity gives χ_V=f. Integer coefficients of either sign define virtual characters, but negative ones prevent a genuine representation.

</details>

### REP-04-10 — Permutation centralisers and orbits

For a finite G-set X, show dim End_G(C[X]) equals the number of G-orbits on X×X.

<details>
<summary>Hint 1</summary>

Use the character norm and the fixed-point count.

</details>
<details>
<summary>Hint 2</summary>

The square of the fixed-point count is the fixed-point count on ordered pairs.

</details>
<details>
<summary>Full solution</summary>

The Hom formula gives dim End_G(C[X])=⟨χ_X,χ_X⟩. Since χ_X(g) is a real integer count, its squared absolute value is the number of ordered pairs fixed by g. Thus the norm equals the average character of C[X×X], which is the dimension of its fixed space. The fixed-space basis consists of orbit sums, so that dimension is the number of orbits on X×X.

</details>

### REP-04-11 — Irreducible matrix coefficients

For an irreducible unitary representation of degree d, prove
Σ_g|ρ(g)_ab|²=|G|/d.

<details>
<summary>Hint 1</summary>

Use matrix-coefficient orthogonality with the same representation twice.

</details>
<details>
<summary>Hint 2</summary>

Take c=a and d-index=b; distinguish the degree symbol from an index.

</details>
<details>
<summary>Full solution</summary>

In Theorem 4.8 take i=j and the same pair of matrix indices in the coefficient and its conjugate. Both Kronecker deltas equal one, so the average of |ρ(g)_ab|² is 1/d. Multiplication by |G| gives the result. The numerical value is independent of the chosen positions a,b when the bases are orthonormal for invariant products.

</details>

### REP-04-12 — Why orthogonality alone is insufficient

Explain why a list of mutually orthogonal irreducible characters is not automatically complete. Give a sufficient degree-square certificate.

<details>
<summary>Hint 1</summary>

An orthonormal subset can be smaller than a basis.

</details>
<details>
<summary>Hint 2</summary>

Every omitted irreducible contributes a positive square to |G|.

</details>
<details>
<summary>Full solution</summary>

Orthogonality establishes independence, not spanning. For example the trivial character alone is an orthonormal irreducible list in any nontrivial group, yet other irreducibles may exist. If constructed pairwise inequivalent irreducibles have degrees d_1,…,d_s with Σ_(i=1)^s d_i²=|G|, the regular decomposition leaves no room for another irreducible: any omitted one has positive degree and would add a positive square to the already exhausted sum. Thus that identity, together with actual irreducible constructions, certifies completeness.

</details>

## 10. Summary and next connection

A character inner product is a dimension of equivariant maps. This turns Schur's lemma into orthogonality, computes multiplicities, and classifies complex representations by their characters. The regular action proves degree-square completeness, while central group-algebra elements prove that irreducible characters span all class functions. The next chapter uses these results to construct and interpret [character tables](character-tables.md).
`;export{e as default};