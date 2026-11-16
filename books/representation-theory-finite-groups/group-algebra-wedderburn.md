
# The Group Algebra and Wedderburn

The irreducible character table classifies complex representations, but the matrices themselves also fit into a single algebra. The group algebra C[G] packages every linear combination of group actions. Its decomposition into matrix algebras explains why irreducible degrees have squares in the regular representation, why central elements act by scalars, and how to reconstruct coefficients from Fourier blocks.

Read [character completeness](characters-and-orthogonality.md) first. G is finite throughout. We define k[G] for an arbitrary field k, but the product-of-complex-matrices theorem will be stated only over C. “Wedderburn” here refers to this finite-dimensional complex group-algebra result; no classification of arbitrary division rings is assumed.

## 1. From a group to an algebra

**Definition 6.1.** The group algebra k[G] has k-basis G. Its elements are formal sums a=Σ_g a_g g, with componentwise addition and multiplication
$$\left(\sum_ga_gg\right)\left(\sum_hb_hh\right)
=\sum_{g,h}a_gb_h(gh).$$
The identity is the group identity basis element e. Associativity follows on basis triples from associativity in G, and extends by distributivity to all sums.

The coefficient of x in a product ab is Σ_g a_g b_(g^(−1)x). This is convolution. The algebra is commutative exactly when G is abelian: one direction follows by swapping basis products; the other follows since equality gh=hg in the algebra forces equality of the corresponding group basis elements.

Every representation ρ:G→GL(V) extends uniquely to an algebra homomorphism
$$\rho:k[G]\to\operatorname{End}_k(V),\qquad
\rho(a)=\sum_ga_g\rho(g).$$
Bilinearity and the representation law prove multiplicativity. Conversely, a unital k[G]-module restricts to a representation of G because g and g^(−1) act as inverse operators. Invariant subspaces are exactly submodules; G-maps are exactly k[G]-linear maps.

The regular representation is left multiplication on k[G]. It is faithful as an algebra action: if a acts by zero, applying it to e yields a=0. This is stronger than faithfulness of the underlying group action, which only distinguishes group elements rather than all their linear combinations.

## 2. The complex matrix-block theorem

Let S_1,…,S_r be all inequivalent irreducible complex representations and d_i=dim S_i. Character theory already proved that this list is finite and Σ_i d_i²=|G|.

**Theorem 6.2 (Complex group-algebra decomposition).** The map
$$\Phi:\mathbb C[G]\longrightarrow
\prod_{i=1}^r\operatorname{End}_{\mathbb C}(S_i),
\qquad a\longmapsto(\rho_i(a))_i$$
is an algebra isomorphism. After choosing bases,
$$\mathbb C[G]\cong\prod_i M_{d_i}(\mathbb C).$$

*Proof.* Each component is an algebra homomorphism, so Φ is one. Suppose Φ(a)=0. Then a annihilates every irreducible S_i. The regular representation decomposes into copies of those irreducibles by Maschke; on each copy a acts as zero, and therefore it annihilates the whole regular representation. Applying left multiplication by a to e gives a=0. Hence Φ is injective.

The source has dimension |G| and the target has dimension Σ_i d_i²=|G|. An injective linear map between these equal finite dimensions is surjective. Thus Φ is an algebra isomorphism. ∎

This proof uses the character-theoretic regular decomposition, which was established without the matrix-block theorem. There is therefore no circular appeal to Wedderburn in the dimension argument. In particular, projection onto the i-th matrix block shows that the linear span of {ρ_i(g):g∈G} is all End_C(S_i). This is a finite-group form of the irreducible matrix-density statement.

As a left module over M_d(C), that algebra is the direct sum of its d column spaces. Each column transforms by ordinary left multiplication and is a copy of C^d. Thus the block theorem independently makes visible why S_i occurs d_i times in the regular module.

## 3. The centre and class sums

For a conjugacy class C define its class sum K_C=Σ_(g∈C)g.

**Proposition 6.3.** The class sums form a basis of Z(C[G]).

*Proof.* An element a is central exactly when ha=ah for every group basis element h, or equivalently hah^(−1)=a. Comparing coefficients gives a_(hgh^(−1))=a_g, so coefficients must be constant on conjugacy classes. Such elements are exactly the linear combinations of class sums, which are independent because their supports are disjoint. ∎

Under Φ, the centre becomes the product of scalar matrix centres, one C for each irreducible type. Thus its dimension is both the number of classes and the number of irreducibles, matching the earlier completeness theorem.

A class sum acts on S_i by a scalar ω_i(C). Taking traces gives
$$\omega_i(C)=\frac{|C|\chi_i(g_C)}{d_i}.$$
These scalars are the central characters of the class sums. They need not equal the ordinary character values; the class size and degree are part of the conversion.

**Theorem 6.4 (Primitive central idempotents).** Define
$$e_i=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})g.$$
Then Φ(e_i) has identity in block i and zero elsewhere. Consequently e_i²=e_i, e_ie_j=0 for i≠j, Σ_i e_i=1, and C[G]e_i is the i-th matrix block.

*Proof.* Since the coefficients are class functions, e_i is central and acts on S_j by a scalar λ_j. Its trace is
$$d_j\lambda_j
=\frac{d_i}{|G|}\sum_g\chi_i(g^{-1})\chi_j(g)
=d_i\delta_{ij}$$
by character orthogonality. Thus λ_j=0 for j≠i and λ_i=1. Injectivity of Φ then proves every asserted product and sum identity. ∎

The adjective primitive means that e_i cannot be split into a sum of two nonzero orthogonal central idempotents. Its image is supported on one centre coordinate, where an idempotent scalar is either zero or one. It is generally not a primitive noncentral idempotent: in a degree-d_i block it splits into d_i diagonal matrix units.

## Applying central projectors to an arbitrary representation

For any complex G-representation V, extend its action to C[G] and set P_i=ρ_V(e_i). The central-idempotent identities give P_i²=P_i, P_iP_j=0 for i≠j and Σ_iP_i=I_V. On each irreducible summand S_j, P_i is the identity exactly when i=j and zero otherwise. Hence im P_i is precisely the canonical S_i-isotypic subspace V[S_i].

These operators split types without choosing individual embedded copies. A repeated irreducible may still have many different summand decompositions inside im P_i. The formula also gives an exact extraction method from specified matrices: average the action matrices with the character weights d_iχ_i(g^(−1))/|G|. The resulting rank is d_i times the multiplicity, while its trace equals that rank over C. Thus the character table supplies canonical type projectors as well as numerical multiplicities.

## 4. Fourier inversion and exact norms

Write A_i=ρ_i(a). The block matrices are the noncommutative Fourier transform of the coefficient function g↦a_g.

**Theorem 6.5 (Coefficient inversion).**
$$a_g=\frac1{|G|}\sum_i d_i
\operatorname{tr}\bigl(A_i\rho_i(g^{-1})\bigr).$$

*Proof.* For any b∈C[G], left multiplication L_b on the regular basis has the coefficient b_e on every diagonal entry, so tr L_b=|G|b_e. On the irreducible decomposition of the regular module, its trace is Σ_i d_i trρ_i(b). Apply this to b=ag^(−1), whose identity coefficient is a_g and whose i-th block is A_iρ_i(g^(−1)). ∎

Choose unitary bases in the irreducibles and define
$$a^*=\sum_g\overline{a_g}g^{-1}.$$
Then (ab)^*=b^*a^*, and ρ_i(a^*)=A_i^*. The coefficient of e in a^*a is Σ_g|a_g|². Taking regular traces yields the Plancherel identity
$$|G|\sum_g|a_g|^2=\sum_i d_i\operatorname{tr}(A_i^*A_i)
=\sum_i d_i\|A_i\|_{\mathrm{HS}}^2.$$
The weight d_i is essential: the regular module contains d_i copies of S_i.

There are also explicit matrix-unit preimages:
$$E^{(i)}_{ab}=\frac{d_i}{|G|}
\sum_g \rho_i(g^{-1})_{ba}g.$$
Matrix-coefficient orthogonality shows that its j-th Fourier block is zero unless j=i, and its i-th block is the usual matrix unit E_ab. Therefore
$$E^{(i)}_{ab}E^{(j)}_{cd}
=\delta_{ij}\delta_{bc}E^{(i)}_{ad}.$$
These formulas provide a constructive version of the algebra isomorphism; no unlabelled diagonalisation choices are hidden.

## 5. A small arithmetic consequence

The class-sum products have integer structure constants. Indeed, the coefficient of x in K_CK_D counts pairs (c,d)∈C×D with cd=x, and conjugation shows this count is constant on the class of x. Thus multiplication by K_C on the class-sum basis of the centre has an integer matrix.

The central-character value ω_i(C) is an eigenvalue of that integer matrix: multiplication sends the nonzero central idempotent e_i to ω_i(C)e_i. It therefore satisfies the matrix's monic characteristic polynomial with integer coefficients. Such numbers are called algebraic integers. Each χ_i(g), being a sum of roots of unity, is also an algebraic integer.

We use two elementary algebraic-integer facts here. Sums and products of algebraic integers are algebraic integers: if α and β satisfy monic integer polynomials of degrees a,b, the finitely generated integer module spanned by α^uβ^v with 0≤u<a,0≤v<b is stable under multiplication by α+β and αβ. Writing those multiplication relations as a matrix and applying the determinant identity shows that each multiplier satisfies a monic integer polynomial. The module contains 1, so the resulting annihilating polynomial also annihilates the multiplier itself. A rational algebraic integer is an integer: if a/b in lowest terms satisfies a monic degree-m polynomial, clearing b^m shows b divides a^m, forcing b=1.

Now row orthogonality gives
$$\frac{|G|}{d_i}
=\sum_C\chi_i(g_C^{-1})\,\omega_i(C).$$
The right side is an algebraic integer; the left side is rational. Hence d_i divides |G|. This is a genuine arithmetic restriction on an irreducible degree, stronger than its square merely fitting beneath the group order. The later Burnside chapter will develop further character-theoretic arithmetic; this argument supplies its first ingredient.

## 6. Worked example: C_2 and two scalar blocks

Let C_2={e,s}. Its two characters send s to ±1. The Fourier map sends a e+b s to (a+b,a−b), and its inverse sends (x,y) to [(x+y)/2]e+[(x−y)/2]s.

The central idempotents are e_+=(e+s)/2 and e_-=(e−s)/2. Their squares equal themselves, their product is zero and their sum is e. Thus C[C_2]=Ce_+⊕Ce_-≅C×C. Multiplication becomes coordinatewise multiplication in those two one-dimensional blocks.

Over F_2 these formulas are unavailable. Instead (s−e)²=s²−2s+e²=0, although s−e≠0. The regular module is not semisimple, and the complex block decomposition cannot simply be reduced modulo two.

## 7. Worked example: the S_3 blocks

Use the classes e, three transpositions and two 3-cycles. Put T=Σ_(transpositions)t and R=(123)+(132). The central idempotents are
$$e_1=\frac16(e+T+R),\qquad
e_\varepsilon=\frac16(e-T+R),\qquad
e_W=\frac13(2e-R).$$
Their sum is e. The first two generate one-dimensional ideals, and the last generates a four-dimensional ideal. Hence
$$\mathbb C[S_3]\cong\mathbb C\times\mathbb C\times M_2(\mathbb C).$$

The transposition class sum acts by 3 on the trivial representation, −3 on sign and 0 on W, since its scalar is 3χ(t)/d. The 3-cycle class sum acts by 2,2,−1, respectively. These two central operators distinguish all three blocks even though either operator alone has a repeated eigenvalue.

For instance the coefficient of e in e_W is 2/3. Fourier inversion gives the same answer: only the degree-two identity block is nonzero, so the identity coefficient is (1/6)·2·tr I_2=4/6. This is the block's regular-module dimension divided by |G|.

## 8. Worked example: a cyclic Fourier transform

For C_3 with generator r and ω³=1, ω≠1, let a=a_0e+a_1r+a_2r². Its blocks are scalars
$$A_j=a_0+a_1\omega^j+a_2\omega^{2j},\qquad j=0,1,2.$$
Inversion gives a_t=(1/3)Σ_j A_jω^(−jt). This is the ordinary three-point discrete Fourier transform. Convolution of group-algebra coefficients becomes pointwise multiplication of the A_j.

Take a=e−r. Then A_0=0, A_1=1−ω and A_2=1−ω². The coefficient norm is two. Plancherel reads 3·2=0+|1−ω|²+|1−ω²|²=3+3. The element is not invertible because its trivial block vanishes, although it is a nonzero vector of C[C_3]. Nonzero and invertible are different properties in a product algebra.

## 9. Exercises

### REP-06-01 — Convolution coefficient

Prove that the x-coefficient of ab is Σ_g a_gb_(g^(−1)x), and use it to identify the identity of k[G].

<details>
<summary>Hint 1</summary>

In the product sum impose gh=x.

</details>
<details>
<summary>Hint 2</summary>

For each g, exactly one h satisfies that equation.

</details>
<details>
<summary>Full solution</summary>

Expanding ab gives Σ_(g,h)a_gb_h gh. A term contributes to x exactly when h=g^(−1)x, giving the formula. For the basis element e with coefficient one only at the group identity, convolution leaves every coefficient of b unchanged on either side. Thus that basis element is the multiplicative identity. It is distinct from the all-ones sum of every group basis element.

</details>

### REP-06-02 — Units from blocks

Show a∈C[G] is invertible exactly when every Fourier block ρ_i(a) is invertible.

<details>
<summary>Hint 1</summary>

An algebra isomorphism preserves products and the identity.

</details>
<details>
<summary>Hint 2</summary>

Invertibility in a finite product is coordinatewise.

</details>
<details>
<summary>Full solution</summary>

If ab=ba=1, each block product is I, so all blocks are invertible. Conversely, if all A_i are invertible, their tuple of inverses belongs to the product algebra. Surjectivity of Φ gives b with Φ(b)=(A_i^(−1))_i. Then Φ(ab)=Φ(ba)=I, and injectivity gives ab=ba=1. This applies to arbitrary linear combinations, not only group basis elements.

</details>

### REP-06-03 — Central idempotents for C_3

Write all three primitive central idempotents of C[C_3].

<details>
<summary>Hint 1</summary>

Each degree is one and χ_j(r^a)=ω^(ja).

</details>
<details>
<summary>Hint 2</summary>

The coefficient formula uses the inverse r^(−a).

</details>
<details>
<summary>Full solution</summary>

The idempotents are
e_j=(1/3)(e+ω^(−j)r+ω^(−2j)r²), j=0,1,2.
Their k-th character values are (1/3)Σ_(a=0)^2ω^((k−j)a)=δ_kj. Hence they are pairwise orthogonal, sum to e and each generates a one-dimensional ideal. They coincide with the weighted cyclic projectors when applied to any representation.

</details>

### REP-06-04 — Class-sum coefficients

For S_3 show T²=3e+3R, with T and R as in Section 7.

<details>
<summary>Hint 1</summary>

Expand the nine ordered products of transpositions.

</details>
<details>
<summary>Hint 2</summary>

Equal transpositions give e; distinct transpositions give 3-cycles.

</details>
<details>
<summary>Full solution</summary>

There are three products t²=e. The six ordered products of distinct transpositions give 3-cycles. Each of the two cycles occurs three times, since conjugation makes the counts equal and the six contributions exhaust both classes. Thus T²=3e+3[(123)+(132)]=3e+3R. On the blocks, the identity reads 3²=3+3·2, (−3)²=3+3·2 and 0²=3+3·(−1), consistent in all three cases.

</details>

### REP-06-05 — Dimensions of block ideals

Prove dim C[G]e_i=d_i² and explain why its multiplicity as a left-module sum is d_i.

<details>
<summary>Hint 1</summary>

Under Φ only the i-th matrix block remains.

</details>
<details>
<summary>Hint 2</summary>

Decompose a matrix into its columns under left multiplication.

</details>
<details>
<summary>Full solution</summary>

The ideal corresponds to M_(d_i)(C), which has vector-space dimension d_i². Its d_i column spaces are invariant under left multiplication, each naturally C^(d_i) carrying S_i. Hence the ideal is S_i^(⊕d_i) as a G-module. Its algebra dimension d_i² and its irreducible degree d_i refer to different objects.

</details>

### REP-06-06 — Primitive central versus primitive

For d_i>1, show e_i is not a primitive idempotent without the word “central.”

<details>
<summary>Hint 1</summary>

Split I_(d_i) into diagonal matrix units.

</details>
<details>
<summary>Hint 2</summary>

Only the sum of all those units is central in the block.

</details>
<details>
<summary>Full solution</summary>

Inside M_(d_i)(C), I=E_11+⋯+E_(d_i d_i), a sum of nonzero pairwise orthogonal idempotents. Their preimages split e_i in C[G]. Individual diagonal units fail to commute with suitable off-diagonal units when d_i>1, so they are not central. The central scalar identity cannot split into two nonzero orthogonal central idempotents, which is the separate meaning of primitive central.

</details>

### REP-06-07 — The star operation

Verify (ab)^*=b^*a^* and show a self-adjoint idempotent has orthogonal-projection matrices in unitary Fourier blocks.

<details>
<summary>Hint 1</summary>

Check the product on group basis terms before extending conjugate-linearly.

</details>
<details>
<summary>Hint 2</summary>

A block satisfies A²=A=A^*.

</details>
<details>
<summary>Full solution</summary>

For basis elements, (gh)^*=(gh)^(−1)=h^(−1)g^(−1)=h^*g^*. Conjugating coefficients and distributing gives the general identity. In a unitary representation, ρ(a^*)=ρ(a)^*. Thus a=a^*=a² gives A=A^*=A² in every block. A Hermitian idempotent is the orthogonal projection onto its image, because its kernel is orthogonal to its image and eigenvalues are zero or one.

</details>

### REP-06-08 — Fourier inversion of a basis element

Apply inversion to a=h∈G and state the resulting identity for the regular character.

<details>
<summary>Hint 1</summary>

Its g-coefficient is δ_gh.

</details>
<details>
<summary>Hint 2</summary>

The block product is ρ_i(hg^(−1)).

</details>
<details>
<summary>Full solution</summary>

Inversion gives δ_gh=(1/|G|)Σ_i d_iχ_i(hg^(−1)). Thus Σ_i d_iχ_i(x) is |G| when x=e and zero otherwise. This is precisely the regular character identity. It is consistent with the regular decomposition used to prove inversion, rather than an independent extra assumption.

</details>

### REP-06-09 — A rational algebraic integer

Prove directly that a rational root of a monic integer polynomial is an integer.

<details>
<summary>Hint 1</summary>

Write the rational number a/b in lowest terms with b>0.

</details>
<details>
<summary>Hint 2</summary>

Clear denominators and reduce the resulting identity modulo b.

</details>
<details>
<summary>Full solution</summary>

If (a/b)^m+c_(m−1)(a/b)^(m−1)+⋯+c_0=0, multiplication by b^m gives
a^m+c_(m−1)a^(m−1)b+⋯+c_0b^m=0.
Therefore b divides a^m. Since gcd(a,b)=1, no prime dividing b divides a, so b=1. The rational number is an integer. Monicity is essential: 1/2 is a root of 2x−1.

</details>

### REP-06-10 — Degrees and order

Show that degree three is impossible for a complex irreducible of a group of order 20, despite satisfying the square bound. Compare degree five for order 24.

<details>
<summary>Hint 1</summary>

Use d dividing |G|, not only d²≤|G|.

</details>
<details>
<summary>Hint 2</summary>

For order 24, degree five fails both; degree four satisfies both. Try order 20 and degree three.

</details>
<details>
<summary>Full solution</summary>

For order 24, degree five is impossible because 25>24 and because 5 does not divide 24. To see the extra strength of divisibility, in order 20 a hypothetical degree-three irreducible satisfies 3²=9≤20 but 3 does not divide 20. The class-sum algebraic-integer argument rules it out. These are necessary conditions and do not by themselves construct every remaining possible degree.

</details>

### REP-06-11 — Kernel of a block projection

Describe kerρ_i as a two-sided ideal of C[G], where ρ_i now denotes the extended algebra homomorphism. Distinguish it from the group representation kernel.

<details>
<summary>Hint 1</summary>

Under Φ, ρ_i is projection onto one matrix factor.

</details>
<details>
<summary>Hint 2</summary>

A group element acts as the identity, rather than zero, in the group kernel.

</details>
<details>
<summary>Full solution</summary>

The algebra kernel corresponds to all tuples whose i-th block is zero, namely the direct sum of the other matrix blocks. Equivalently it is C[G](1−e_i). The group kernel is {g:ρ_i(g)=I}, not {g:ρ_i(g)=0}; no group basis element has zero action because its matrix is invertible. Instead g is in the group kernel exactly when g−e belongs to the algebra kernel.

</details>

### REP-06-12 — Why the field matters

For F_2[C_2], prove x=s−e is nonzero with x²=0 and explain why Maschke's decomposition proof cannot be repeated.

<details>
<summary>Hint 1</summary>

The two basis vectors remain independent even in characteristic two.

</details>
<details>
<summary>Hint 2</summary>

The averaging denominator and the regular irreducible decomposition were used in Theorem 6.2.

</details>
<details>
<summary>Full solution</summary>

Since e and s are distinct basis vectors, x=s−e≠0. Its square is s²−2s+e²=e+e=0. In characteristic two the group order is zero, so Maschke's averaging cannot split the regular representation. Indeed, the only irreducible of C_2 over an algebraic closure of F_2 is trivial, while the regular module is a nontrivial extension. The injectivity-through-all-irreducible-summands argument therefore loses its required decomposition. A product of matrix algebras can contain nilpotent matrices, so nilpotence alone is not the whole obstruction; the nonsemisimple regular module is the relevant failure.

</details>

## 10. Summary and next connection

The complex group algebra is a product of one full matrix algebra for each irreducible representation. Class sums describe its centre, character formulas give its central idempotents, and Fourier inversion reconstructs every group coefficient from matrix blocks. The class-sum action also imposes arithmetic restrictions on degrees. The next chapter constructs new representations from subgroups through [induction and reciprocity](induction-frobenius-mackey.md).
