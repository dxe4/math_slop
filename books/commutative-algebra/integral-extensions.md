
# Integral Extensions

An algebraic element over a field satisfies a polynomial equation. Over a ring, the decisive strengthening is that the polynomial can be chosen monic. Integral elements generate finite modules, and that finite control forces primes to lie over primes of the base. This chapter proves the algebra and the prime-lifting statements before using them in the Nullstellensatz.

Read [the determinant trick](noetherian-hilbert-basis.md), [localisation](localisation.md) and [spectra](prime-ideals-spectrum.md). A⊆B is an inclusion of commutative rings with the same identity. Integrality does not require either ring Noetherian or a domain; hypotheses involving fraction fields will say so explicitly.

## 1. Monic equations and finite modules

**Definition 7.1.** An element b∈B is integral over A if
$$b^n+a_1b^{n-1}+\cdots+a_n=0,\qquad a_i\in A,$$
for some n≥1. B is integral over A if every element is. A finite A-algebra means an algebra finitely generated as an A-module. Finite type means finitely generated as an A-algebra; these conditions are different.

**Theorem 7.2.** An element b is integral exactly when A[b] is finite as an A-module. A finite A-algebra is integral over A.

*Proof.* A monic equation reduces every power b^m with m≥n to an A-linear combination of 1,b,…,b^(n−1), giving finite generation.

Conversely suppose an A-algebra C is generated as an A-module by c_1,…,c_r. For b∈C, multiplication by b is an A-linear endomorphism. Write bc_i=Σ_j a_ijc_j. The adjugate of bI−(a_ij) shows det(bI−(a_ij)) kills every generator. It therefore kills 1∈C, so is zero as an element of C. This is a monic equation for b. Apply this to C=A[b] for the converse and to arbitrary finite C for the last statement. ∎

If b_1,…,b_s are integral, adjoining them one by one gives a finite A-module: each monic equation bounds the exponent of its generator, so finitely many products span. Therefore every element of A[b_1,…,b_s] is integral by the theorem. In particular the integral elements of B form a subring, closed under addition, subtraction and multiplication.

An algebra that is both integral and of finite type is finite as a module, by this same finite-generator argument. Merely integral need not mean finite.

## 2. Transitivity, quotients and fractions

**Theorem 7.3 (Transitivity).** If B is integral over A and C is integral over B, then C is integral over A.

*Proof.* For c∈C choose a monic equation over B. Its finitely many coefficients b_i lie in a finite A-algebra B_0=A[b_1,…,b_s]. The same equation makes B_0[c] finite over B_0. Combining finite spanning sets makes it finite as an A-module. Theorem 7.2 then makes c integral over A. This works separately for each c and does not assume the whole B or C finite. ∎

Quotients preserve integrality: reducing a monic equation modulo an ideal gives a monic equation in the quotient. More precisely B/J is integral over the image of A, identified with A/(J∩A).

Localisations preserve integrality too. If b is integral over A and s∈S⊆A, divide its degree-n monic equation by s^n to obtain
$$
(b/s)^n+(a_1/s)(b/s)^{n-1}
+\cdots+a_n/s^n=0.
$$
Thus S^(−1)B is integral over S^(−1)A. The localisation map between them remains injective: a fraction from A killed in B is killed by an A-denominator already in A.

A domain A is integrally closed if every element of Frac A integral over A belongs to A. Every UFD is integrally closed. Write an integral fraction a/d in lowest terms. Clearing the monic equation's denominator shows d divides a^n. Unique factorisation and coprimality force d to be a unit.

A localisation of an integrally closed domain remains integrally closed. If x∈Frac A is integral over S^(−1)A, choose a common multiple s∈S of its finitely many coefficient denominators. Multiplying the degree-n equation by s^n gives a monic equation for sx with coefficients in A, since s^j clears the j-th coefficient denominator. Thus sx∈A, and x∈S^(−1)A. All equations here take place in the common fraction field, so no zero-divisor cancellation is being hidden.

## 3. When an integral domain extension is a field

**Lemma 7.4.** For an integral extension of domains A⊆B, A is a field exactly when B is a field.

*Proof.* If A is a field and b∈B is nonzero, choose a monic relation of least degree. Its constant term is nonzero, since otherwise domain cancellation by b would give a smaller relation. Rearranging the relation gives b times an element of B equal to a nonzero scalar of A, hence an inverse for b.

Conversely suppose B is a field and 0≠a∈A. The element a^(−1)∈B is integral over A:
a^(−n)+c_1a^(−n+1)+⋯+c_n=0.
Multiplying by a^(n−1) gives
a^(−1)=−c_1−c_2a−⋯−c_na^(n−1)∈A.
Thus every nonzero a has its inverse in A. ∎

For a prime 𝔮 of B, the domain B/𝔮 is integral over A/(𝔮∩A). Therefore
$$\mathfrak q\text{ maximal}\quad\Longleftrightarrow\quad
\mathfrak q\cap A\text{ maximal}.$$
This is special to integral extensions. A general contraction of a maximal ideal need only be prime.

## 4. Lying over and going up

**Theorem 7.5 (Lying over).** For every prime 𝔭 of A, some prime 𝔮 of B satisfies 𝔮∩A=𝔭.

*Proof.* Localise at S=A\𝔭. The ring B_S is integral over the nonzero local ring A_𝔭 and contains it. Choose a maximal ideal 𝔫 of B_S. Its contraction is maximal in A_𝔭 by Lemma 7.4 applied to the prime quotients, so it must be the unique maximal ideal 𝔭A_𝔭. Contract 𝔫 to B to obtain a prime 𝔮. The localisation prime correspondence then gives 𝔮∩A=𝔭. ∎

The nonzero assertion is justified by the injected copy of A_𝔭. Thus a maximal ideal exists; we are not choosing one in a zero ring.

**Theorem 7.6 (Going up).** If 𝔭_1⊆𝔭_2 in A and 𝔮_1 lies over 𝔭_1, some 𝔮_2⊇𝔮_1 lies over 𝔭_2.

*Proof.* The inclusion A/𝔭_1⊆B/𝔮_1 is integral. Apply lying over to the prime 𝔭_2/𝔭_1. Its lifted prime in B/𝔮_1 corresponds to a prime 𝔮_2 containing 𝔮_1, with the required contraction. ∎

Lying over makes Spec B→Spec A surjective. It is also a closed map. A closed V_B(J) maps onto V_A(J∩A): every contraction clearly contains J∩A, and lying over for B/J integral over A/(J∩A) supplies every containing base prime. This statement identifies the image exactly, rather than merely showing continuity.

## 5. Incomparability and dimension

**Theorem 7.7 (Incomparability).** If 𝔮_1⊆𝔮_2 in B have the same contraction 𝔭 in A, then 𝔮_1=𝔮_2.

*Proof.* Localise at A\𝔭. The quotient B_S/(𝔮_1)_S is a domain integral over A_𝔭/𝔭A_𝔭, a field. Lemma 7.4 makes the quotient a field. Thus (𝔮_1)_S is maximal, so equals (𝔮_2)_S. Both primes avoid S; contracting back gives equality. ∎

Define Krull dimension as the supremum of finite strict prime-chain lengths, where a chain with n strict inclusions has length n. Going up lifts a base chain, beginning with lying over at its first prime. Conversely any strict chain in B contracts to a strict chain in A by incomparability. Therefore integral extensions satisfy dim B=dim A, including the possibility that both suprema are infinite.

These theorems do not assert that every descending base chain can be lifted through a chosen upper prime. That is a different going-down question, with additional hypotheses. The established results here are lying over, going up and incomparability.

## 6. Worked example: splitting in the Gaussian integers

Z[i] is integral over Z because i²+1=0, and is a finite module with basis 1,i. Prime behaviour is visible in its reductions.

Modulo three, x²+1 has no root in F_3, so
$$\mathbb Z[i]/(3)\cong\mathbb F_3[x]/(x^2+1)$$
is a field of nine elements. Thus (3) is prime upstairs.

Modulo five, x²+1=(x−2)(x+2) with distinct factors. The two maximal ideals (5,i−2),(5,i+2) have quotient F_5, and their intersection equals their product (5) by Chinese remainders.

Modulo two, x²+1=(x+1)². There is one prime over two, (1+i), and (2)=(1+i)² as ideals because (1+i)²=2i differs from two by a unit. Lying over accommodates one prime, two primes or a repeated primary factor; it guarantees existence, not a uniform splitting pattern.

## 7. Worked example: normalising a cusp ring

Let A=k[t²,t³]⊆B=k[t]. The element t is integral over A by T²−t²=0. Thus B=A[t] is finite over A. The fraction fields agree because t=t³/t².

The ring A is not integrally closed: t belongs to its fraction field but not A, since every polynomial in t²,t³ has no degree-one term. The integral closure is exactly k[t]. One inclusion follows because k[t] is integral over A. Conversely any common-fraction-field element integral over A is integral over k[t] as well, using the same monic equation. The UFD k[t] is integrally closed, so the element lies there.

The ideal (t²,t³) of A has the prime (t) of B above it, with residue field k on both sides. Thus even an integral bijective-looking behaviour at a particular point need not make the rings equal. The missing integral element t changes the local algebra.

## 8. Worked example: hypotheses that cannot be dropped

The inclusion Z⊆Q is not integral. For example, if 1/2 satisfied a monic degree-n integer equation, clearing denominators would give one plus an even integer equal to zero, impossible. The maximal ideal (0) of Q contracts to nonmaximal (0) in Z, and no prime of Q lies over (2). Both failures are excluded by integrality in the preceding theorems.

Integrality alone also need not give a finite module. Let B=k⊕V with V an infinite-dimensional k-space and V²=0. Every a+v satisfies (T−a)²=0, so B is integral over k, but is not finite-dimensional over k. Its ideal V is not finitely generated, because multiplication acts on V only by the scalar component. Thus an integral algebra over a Noetherian ring need not be Noetherian unless further finiteness is present.

## Integral closure and its local compatibility

For a domain A with fraction field K, let \bar A be its integral closure in K. It is a subring by closure of integral elements, and it is itself integrally closed. Indeed an element of K integral over \bar A uses finitely many integral coefficients; transitivity makes it integral over A, hence an element of \bar A. This is an idempotence property of the closure operation, not an assumption that \bar A is finite over A.

For a multiplicative set S of nonzero elements,
$$\overline{S^{-1}A}=S^{-1}\bar A$$
inside K. One inclusion follows from localisation of integral equations. For the other, if x is integral over S^(−1)A, clear the finitely many coefficient denominators with s∈S as before. Then sx is integral over A and belongs to \bar A, so x∈S^(−1)\bar A.

In the cusp example A=k[t²,t³], invert t². The element t=t³/t² now lies in A[1/t²], and so does t^(−1)=t/t². Therefore
$$A[1/t^2]=k[t,t^{-1}]=k[t][1/t^2].$$
These equalities use the same embeddings into k(t), so the isomorphism preserves the actual numerators and denominators. The normalisation map is an isomorphism on that basic open. Its omitted primes contain t² and hence t³, since (t³)²=(t²)³; they form the single origin prime (t²,t³). Thus the explicit missing integral element changes the ring at the origin while giving no change on the complementary open. This conclusion follows from the displayed ring identities, independently of any picture of the cusp.

Finite extension of a Noetherian ring does preserve Noetherianity: the larger algebra is a finite module over the base, hence a Noetherian base module. Each ideal is a submodule and has finitely many base generators; these also generate it as an ideal because the base lies inside the algebra and ideal multiplication stays inside it.

Integrality without finiteness is insufficient. Take the diagonal inclusion of the field with p elements into the product of countably many copies of that field. Every sequence b satisfies b to the p-th power equal to b, componentwise, so the extension is integral by a single monic equation. But the ideals supported on the first n coordinates form a strictly ascending chain: the next coordinate selector belongs to the next ideal and not the earlier one. Hence the product ring is not Noetherian. The monic equations bound each individual element without providing finitely many module generators for the whole algebra, exactly the distinction needed in the finite-extension proof.

## 9. Exercises

### CA-07-01 — Finite powers

If b satisfies a monic degree-n equation, show 1,b,…,b^(n−1) span A[b].

<details>
<summary>Hint 1</summary>

Use the equation to reduce b^n.

</details>
<details>
<summary>Hint 2</summary>

Multiply it by higher powers and induct on the exponent.

</details>
<details>
<summary>Full solution</summary>

The relation expresses b^n as an A-linear combination of lower powers. If b^m with m≥n occurs, multiply the relation by b^(m−n), replacing it by powers with smaller exponents. Induction reduces every polynomial in b to the listed span. The list need not be independent; integrality gives finite spanning, not a basis.

</details>

### CA-07-02 — Integral sums and products

Explain why b+c and bc are integral when b,c are.

<details>
<summary>Hint 1</summary>

Adjoin both elements first.

</details>
<details>
<summary>Hint 2</summary>

A[b,c] is a finite A-algebra, so use the determinant trick.

</details>
<details>
<summary>Full solution</summary>

The monic relation for b gives finitely many b-powers, and the one for c gives finitely many c-powers. Their products span A[b,c] over A. Multiplication by b+c or bc is an endomorphism of this finite module, so its determinant relation annihilates the algebra's identity and gives a monic equation for the element. Thus both are integral.

</details>

### CA-07-03 — Transitivity uses finitely many coefficients

Why does transitivity not require B to be finite as an A-module?

<details>
<summary>Hint 1</summary>

A particular monic equation has only finitely many coefficients.

</details>
<details>
<summary>Hint 2</summary>

Work inside the subalgebra they generate.

</details>
<details>
<summary>Full solution</summary>

For c integral over B, its chosen monic equation uses finitely many b_i. Since B is integral over A, A[b_i] is finite over A. Adjoining c gives a module finite over that smaller algebra and hence over A. This local finite witness proves c integral. Different c may require different coefficient subalgebras, so the entire B need not have finite rank.

</details>

### CA-07-04 — A UFD is normal

Prove an integral fraction a/d in a UFD, written coprimely, belongs to the ring.

<details>
<summary>Hint 1</summary>

Clear denominators in a monic equation.

</details>
<details>
<summary>Hint 2</summary>

Every prime factor of d would divide a^n.

</details>
<details>
<summary>Full solution</summary>

The cleared equation gives
a^n=−d(c_1a^(n−1)+c_2a^(n−2)d+⋯+c_nd^(n−1)).
Thus d divides a^n. In a UFD each irreducible divisor of d is prime and would divide a, contrary to coprimality. Hence d is a unit and a/d belongs to the ring. This proves integral closure in the fraction field.

</details>

### CA-07-05 — Localisation of integrality

Write the monic equation for b/s in terms of one for b.

<details>
<summary>Hint 1</summary>

Divide the degree-n equation by s^n.

</details>
<details>
<summary>Hint 2</summary>

The j-th coefficient gets denominator s^j.

</details>
<details>
<summary>Full solution</summary>

From b^n+a_1b^(n−1)+⋯+a_n=0 obtain
(b/s)^n+(a_1/s)(b/s)^(n−1)+⋯+a_n/s^n=0.
All coefficients lie in S^(−1)A. Every element of S^(−1)B has such a fraction form, proving the localised extension integral.

</details>

### CA-07-06 — Contraction of a maximal ideal

For an integral extension, prove contraction of a maximal ideal is maximal.

<details>
<summary>Hint 1</summary>

Pass to prime domain quotients.

</details>
<details>
<summary>Hint 2</summary>

An integral subdomain of a field is a field by Lemma 7.4.

</details>
<details>
<summary>Full solution</summary>

If 𝔮 is maximal, B/𝔮 is a field integral over A/(𝔮∩A), an embedded domain. Lemma 7.4 forces that domain to be a field. Therefore 𝔮∩A is maximal. For a general nonintegral map, Z→Q supplies a counterexample.

</details>

### CA-07-07 — Prime chains

Use going up and incomparability to explain dim A=dim B for an integral inclusion.

<details>
<summary>Hint 1</summary>

Lift finite chains in A one prime at a time.

</details>
<details>
<summary>Hint 2</summary>

Contract chains in B and check strictness.

</details>
<details>
<summary>Full solution</summary>

Lying over starts a lift of the first base prime; going up lifts each next inclusion. The contractions are distinct, so the lifted inclusions are strict. Conversely a strict inclusion of upper primes cannot contract to equality by incomparability. Thus every finite chain length in one ring is bounded by a realised length in the other. Taking suprema proves equality, even if unbounded.

</details>

### CA-07-08 — Two primes over five

Identify the residue fields of (5,i−2) and (5,i+2) in Z[i].

<details>
<summary>Hint 1</summary>

Send i to 2 or −2 in F_5.

</details>
<details>
<summary>Hint 2</summary>

Both values satisfy x²+1=0 modulo five.

</details>
<details>
<summary>Full solution</summary>

The homomorphisms Z[i]→F_5 defined by reducing integers and sending i to ±2 are well defined because (±2)²+1=0 in F_5. They are onto and have the stated kernels, so both residue fields are F_5. The ideals are distinct since i−2 and i+2 differ by four, a unit modulo five.

</details>

### CA-07-09 — The missing cusp element

Show t∉k[t²,t³] but t is integral over it and lies in its fraction field.

<details>
<summary>Hint 1</summary>

List the possible nonzero monomial degrees in the subring.

</details>
<details>
<summary>Hint 2</summary>

Use t³/t² and the equation T²−t².

</details>
<details>
<summary>Full solution</summary>

Every nonconstant monomial generated by t²,t³ has degree at least two, so no polynomial combination has a degree-one term equal to t. But t=t³/t² lies in the fraction field, and it satisfies the monic equation T²−t² with coefficient t² in the subring. Thus the cusp ring is not integrally closed.

</details>

### CA-07-10 — Finite type plus integral

Prove an integral finite-type A-algebra is finite as a module.

<details>
<summary>Hint 1</summary>

Choose its finitely many algebra generators.

</details>
<details>
<summary>Hint 2</summary>

Bound each generator exponent by its monic equation.

</details>
<details>
<summary>Full solution</summary>

Write B=A[b_1,…,b_r] with each b_i integral, of equation degree n_i. Every product reduces to an A-linear combination of monomials b_1^(e_1)⋯b_r^(e_r) with 0≤e_i<n_i. The finitely many such products span B as an A-module. This proves finite generation without claiming those products independent.

</details>

### CA-07-11 — Finite module over a Noetherian base

If A is Noetherian and B is finite over A, prove B is Noetherian.

<details>
<summary>Hint 1</summary>

B is a Noetherian A-module.

</details>
<details>
<summary>Hint 2</summary>

A B-ideal is also an A-submodule.

</details>
<details>
<summary>Full solution</summary>

Finite generation makes B a Noetherian A-module. Every ideal J of B is therefore finitely generated as an A-module, say by j_1,…,j_s. Since A⊆B, their A-span is contained in their B-ideal span, while ideal closure gives the reverse containment inside J. Thus the same elements generate J as a B-ideal. Every B-ideal is finitely generated, so B is Noetherian.

</details>

### CA-07-12 — Integral does not mean injective on spectra

Use Z⊆Z[i] to show the spectrum map of an integral extension need not be one-to-one.

<details>
<summary>Hint 1</summary>

Look at the two primes over five.

</details>
<details>
<summary>Hint 2</summary>

Both contract to (5), but differ in the residue assigned to i.

</details>
<details>
<summary>Full solution</summary>

The distinct maximal ideals (5,i−2) and (5,i+2) both contract to (5) in Z. Hence the map on spectra is not injective. Lying over asserts surjectivity, and incomparability asserts that two comparable upper primes with the same contraction coincide. These two primes are incomparable, so neither result is violated.

</details>

## 10. Summary and next connection

Monic equations are equivalent to finite module witnesses and persist under sums, products, quotients, localisation and transitivity. Integral extensions lift primes, lift ascending chains and prevent comparable primes from collapsing under contraction. Normalisation examples separate integrality from equality and from finite type. The next chapter applies these finite-algebra ideas to [the Nullstellensatz](nullstellensatz.md).
