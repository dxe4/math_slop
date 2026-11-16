var e=`---
parent_id: book-commutative-algebra
chapter_id: localisation
title: "Localisation"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Localisation

Fractions over a domain invert all nonzero denominators. Localisation allows a specified set of denominators and works even with zero divisors. The equivalence relation must remember that a denominator can annihilate a difference; cross multiplication alone is insufficient. This construction lets us focus on one prime while preserving exact sequences.

Read [ideals and radicals](rings-and-ideals.md) and [modules and exact sequences](modules-exact-sequences.md). R is commutative with identity. A multiplicative set S contains 1 and is closed under products. We allow 0∈S, in which case the localisation will be the zero ring.

## 1. Fractions with zero divisors

On R×S define
$$(a,s)\\sim(b,t)\\quad\\Longleftrightarrow\\quad
u(ta-sb)=0\\text{ for some }u\\in S.$$
Reflexivity and symmetry are immediate. For transitivity, suppose u(ta−sb)=0 and v(rb−tc)=0. Multiplying these equations by vr and us and adding gives uvt(ra−sc)=0. Since uvt∈S, the first and third pairs are equivalent.

Write a/s for the resulting class and S^(−1)R for the class set. Define
$$\\frac as+\\frac bt=\\frac{at+bs}{st},\\qquad
\\frac as\\frac bt=\\frac{ab}{st}.$$
These operations are well defined. For example, replacing a/s by b/t in a sum with c/r changes the cross-multiplied numerators by r²(ta−sb); in a product with c/r the change is rc(ta−sb). The same u annihilates either difference. Replacing both operands follows one at a time.

The ring axioms follow by putting finite sums and products over common denominators. The zero is 0/1, the identity is 1/1, and the map
$$\\iota:R\\to S^{-1}R,\\qquad a\\mapsto a/1$$
is unital. Every s/1 for s∈S is invertible with inverse 1/s.

**Proposition 3.1 (Zero criterion).**
$$a/s=0\\quad\\Longleftrightarrow\\quad ua=0
\\text{ for some }u\\in S.$$
Thus kerι consists of elements annihilated by some denominator. Moreover S^(−1)R is zero exactly when 0∈S.

*Proof.* Comparing (a,s) with (0,1) gives the first statement directly. The ring is zero exactly when 1/1=0, which requires u·1=0 for some u∈S, or 0∈S. ∎

If R is a domain and 0∉S, the multiplier can be cancelled and the familiar cross-multiplication relation returns. In general the map R→S^(−1)R may have a kernel.

## 2. The universal property

**Theorem 3.2.** If φ:R→A is a unital homomorphism sending every s∈S to a unit, there is a unique homomorphism
$$\\widetilde\\varphi:S^{-1}R\\to A,\\qquad
a/s\\mapsto\\varphi(a)\\varphi(s)^{-1}$$
with φ̃ι=φ.

*Proof.* If u(ta−sb)=0, applying φ and cancelling the unit φ(u) gives φ(t)φ(a)=φ(s)φ(b). Multiplication by the two denominator inverses proves the proposed values equal. The sum and product formulas show the map preserves both operations and identity. Uniqueness follows because a/s=(a/1)(s/1)^(−1), whose image is forced. ∎

This property characterises the localisation up to a unique compatible isomorphism: two objects with the property map uniquely to each other, and their composites must be the identities by uniqueness. It also constructs comparisons when one multiplicative set is enlarged.

The universal property permits a zero target ring. If 0∈S, a homomorphism inverting every denominator can only land in a ring where zero is a unit, hence the zero ring. The degenerate case therefore fits the same statement.

## 3. Modules of fractions and exactness

For an R-module M, define S^(−1)M from pairs (m,s), with
$$(m,s)\\sim(n,t)\\iff u(tm-sn)=0
\\text{ for some }u\\in S.$$
The same argument proves an equivalence relation. Addition uses common denominators, and
$$(a/s)(m/t)=am/(st)$$
makes it an S^(−1)R-module. An R-map f induces m/s↦f(m)/s. Its zero criterion is m/s=0 exactly when um=0 for some u∈S.

For any S^(−1)R-module N, every R-map M→N extends uniquely by m/s↦s^(−1)f(m). The proof is the same unit-cancellation argument as for rings. Thus the module construction has the corresponding universal property.

**Theorem 3.3 (Exactness).** Localisation preserves exact sequences of R-modules.

*Proof.* It is enough to check a consecutive pair M'→M→M'' exact at M. Composing the localised maps is zero because the original composite is zero. Conversely, suppose m/s maps to zero. Some u∈S has uf(m)=0 for the following map f. Thus um belongs to its kernel, the preceding image. Choose m' with preceding image um. Then m/s=um/(us) is the localised image of m'/(us). This proves equality of image and kernel.

If the first map is injective, an element mapped to zero has u times its numerator mapped to zero, hence its numerator fraction was already zero. A surjective map remains surjective by lifting the numerator of each target fraction. These observations include exactness at the ends of a short exact sequence. ∎

Consequently
$$S^{-1}(M/N)\\cong S^{-1}M/\\operatorname{im}(S^{-1}N).$$
We may identify S^(−1)N with its image because localisation preserves the inclusion N→M. The isomorphism sends (m+N)/s to m/s modulo S^(−1)N.

## 4. Ideals and primes under localisation

For an ideal I, its extension S^(−1)I is the set of fractions i/s with i∈I. Finite sums have that form after a common denominator.

**Proposition 3.4.**
$$\\iota^{-1}(S^{-1}I)
=\\{a:\\text{some }s\\in S\\text{ has }sa\\in I\\}.$$

*Proof.* If a/1=i/t, some u∈S satisfies u(ta−i)=0, so uta=ui∈I. Conversely if sa∈I, then a/1=sa/s belongs to the extended ideal. ∎

The contraction is called the S-saturation of I. It can be larger than I. Every ideal J of S^(−1)R equals the extension of its contraction: if a/s∈J then a/1=(s/1)(a/s)∈J, and the converse inclusion follows by multiplying a/1 by 1/s.

**Theorem 3.5 (Prime correspondence).** Extension and contraction give inverse order-preserving bijections between primes of S^(−1)R and primes 𝔭 of R disjoint from S.

*Proof.* Contracting a prime gives a prime and avoids S, since units cannot belong to a proper ideal. Conversely let 𝔭∩S=∅. Its extension is proper, since 1 in the extension would imply some s∈S belonged to 𝔭 by Proposition 3.4. If (a/s)(b/t) lies in that extension, clearing denominators gives uab∈𝔭 for some u∈S. Since u∉𝔭, primality gives a∈𝔭 or b∈𝔭, so one factor belongs to the extension. Thus it is prime. Saturation of 𝔭 is itself, since sa∈𝔭 and s∉𝔭 force a∈𝔭. The previous ideal observation proves the other composite is the identity. ∎

## 5. Localising at a prime

For a prime 𝔭, its complement is multiplicatively closed. Write
$$R_{\\mathfrak p}=(R\\setminus\\mathfrak p)^{-1}R.$$

**Theorem 3.6.** R_𝔭 is a local ring with unique maximal ideal 𝔭R_𝔭. Its residue field is the fraction field of R/𝔭.

*Proof.* A fraction a/s with a∉𝔭 is invertible, with inverse s/a. Fractions whose numerator lies in 𝔭 form the proper ideal 𝔭R_𝔭 by the prime correspondence. Thus all elements outside that ideal are units, making it the unique maximal ideal: every proper ideal consists of nonunits and lies inside it.

The quotient is the localisation of R/𝔭 at the images of R\\𝔭, by the quotient compatibility above. Those images are exactly the nonzero elements of the domain R/𝔭. Inverting them gives its fraction field. ∎

The primes of R_𝔭 correspond to primes of R contained in 𝔭, because disjointness from R\\𝔭 means containment in 𝔭. The local ring retains the primes below 𝔭, rather than the primes containing it. This direction matters in dimension arguments.

## 6. Worked example: two different integer localisations

For a prime p, Z[1/p] inverts powers of p. Its elements have denominators p^n. In contrast Z_(p) inverts all integers not divisible by p, so its denominators are coprime to p.

For p=2, 1/2 belongs to Z[1/2] but not Z_(2), while 1/3 belongs to Z_(2) but not Z[1/2]. The local ring Z_(2) has unique maximal ideal generated by two and residue field F_2. The ring Z[1/2] is not local: the prime ideals generated by three and five both survive, since their contractions avoid the powers of two.

Thus the notation R_f for inverting one element and R_𝔭 for localising at a prime names genuinely different operations. A smaller-looking subscript does not specify the same denominator set.

## 7. Worked example: zero divisors can disappear

Take R=Z/6Z and invert powers of two. The denominator set is {1,2,4}. The element three maps to zero because 2·3=0 in R. The map R→F_3 sends every denominator to a unit, so factors through the localisation.

Conversely every localised fraction is represented by an element of F_3, with the inverse of two equal to two. The induced map is bijective: its kernel upstairs consists exactly of {0,3}, the elements killed by a power of two. Hence R[1/2]≅F_3.

The localisation is not zero: no power of two is zero modulo six. If instead we localise k[ε]/(ε²) by powers of ε, the denominator set contains ε²=0, so the result is the zero ring. Inverting a zero divisor may kill some elements; inverting a nilpotent kills the identity too.

## 8. Worked example: a crossing near two different primes

Let R=k[x,y]/(xy). At the prime 𝔭=(x), the element y is inverted, so xy=0 forces x=0. The resulting localisation is k(y): after quotienting x, every nonzero polynomial in y is the image of an element outside 𝔭, and all such polynomials become invertible.

At the maximal ideal 𝔪=(x,y), both x and y remain nonzero and their product remains zero. Indeed Ann_R(x)=(y): in a polynomial representative, fx divisible by xy implies f divisible by y, modulo the relation. Every annihilator of x is therefore inside 𝔪, so no allowed denominator kills x. Similarly y survives. Thus the local ring R_𝔪 still has zero divisors.

Local rings need not be domains. Which component information disappears depends on the prime at which we localise, not merely on the existence of some denominators.

## 9. Detecting modules locally

**Proposition 3.7.** An R-module M is zero exactly when M_𝔪=0 for every maximal ideal 𝔪.

*Proof.* Only the reverse needs work. For 0≠m∈M, Ann_R(m) is proper. Choose a maximal 𝔪 containing it. If m/1 vanished in M_𝔪, some s∉𝔪 would satisfy sm=0, contradicting Ann_R(m)⊆𝔪. Hence M_𝔪≠0. ∎

Exactness now shows a map is an isomorphism exactly when all its maximal localisations are: localise its kernel and cokernel, then apply the proposition. No finite-generation assumption is needed for this criterion.

Finite generation does give a uniform denominator. If S^(−1)M=0 and m_1,…,m_r generate M, choose s_i killing m_i and let s=∏s_i. Then sM=0. Without finite generation, a single multiplier need not exist. For M=⊕_(n≥1)Z/2^nZ and S the powers of two, every element has finite support and is killed by some power, so S^(−1)M=0. No fixed power kills every summand.

For a finitely generated M this also proves
$$M_{\\mathfrak p}\\ne0\\quad\\Longleftrightarrow\\quad
\\operatorname{Ann}_R(M)\\subseteq\\mathfrak p.$$
One direction follows because an annihilator outside 𝔭 becomes a unit. For the other, if the localisation vanished, the finite-generator argument would give a single s∉𝔭 annihilating all M. This contradicts the displayed containment. The finiteness condition belongs in that support formula.

For M=Z/12Z, the annihilator is (12), so the only primes in its support are (2) and (3). Its corresponding local modules are Z/4Z and Z/3Z, obtained by retaining the appropriate primary component. At every other prime, including (0), an annihilating integer becomes a unit.

The support formula can fail without finite generation. The Z-module Q/Z has annihilator zero: for a nonzero integer n, the class of 1/(2n) is not killed by n, since its image is the nonzero class of 1/2. Yet its localisation at the zero prime is zero, because every rational class is torsion and all nonzero integers are inverted. Thus (0) contains the annihilator but is not in the support. The local detection theorem still holds; it is only the reduction of support to the single ideal Ann(M) that needed finitely many generators.

### Solvability is detected by local membership

Let A be any matrix over R and let b be a target vector. The system Ax=b has a solution over R exactly when it has a solution over every maximal localisation. Indeed b represents a class in the cokernel of A. Local exactness identifies its local class with the obstruction to the corresponding local system. If that class vanishes everywhere, the annihilator argument in Proposition 3.7 applied to this particular element forces it to vanish globally. This proves existence without claiming that arbitrary choices of local solution vectors are the coordinates of one common global vector.

A fraction can be a unit even when its numerator was not originally in the denominator set. Precisely, a divided by s is invertible if some b in R has ab in S. That equation supplies inverse bs divided by ab. Conversely an inverse b divided by t gives a multiplier u in S with uab=ust. Thus a times ub belongs to S, proving the criterion with no cancellation of zero divisors. For integers localised at powers of six, two becomes a unit with inverse three divided by six, although two is not a power of six. The units depend on the multiplicative saturation of S, rather than only on the original written denominators.

## 10. Exercises

### CA-03-01 — The extra multiplier

In R=Z/6Z with S powers of two, show 3/1=0 although ordinary cross multiplication gives 3≠0.

<details>
<summary>Hint 1</summary>

Use the multiplier two.

</details>
<details>
<summary>Hint 2</summary>

The fraction equivalence asks whether some allowed denominator annihilates the difference.

</details>
<details>
<summary>Full solution</summary>

Comparing (3,1) and (0,1) gives the difference three, which is nonzero in R. But two lies in S and 2·3=0, so the pairs are equivalent. Thus 3/1=0. This is why the definition cannot use only ta=sb when zero divisors are allowed.

</details>

### CA-03-02 — Invert a nilpotent

Prove that a ring localisation inverting a nilpotent element is zero.

<details>
<summary>Hint 1</summary>

A power of the element is zero.

</details>
<details>
<summary>Hint 2</summary>

A unit with zero power forces 1=0.

</details>
<details>
<summary>Full solution</summary>

If x^n=0 and x becomes a unit, multiplying the equality by its inverse n times gives 1=0. Equivalently the multiplicative set of powers already contains zero, so the zero criterion makes the localisation zero. This is a ring-wide collapse, stronger than merely killing the original nilpotent.

</details>

### CA-03-03 — A universal factorisation

Let φ:R→A invert S. Explain why its factorisation through S^(−1)R is forced on every fraction.

<details>
<summary>Hint 1</summary>

Write a/s as a product of a numerator image and a denominator inverse.

</details>
<details>
<summary>Hint 2</summary>

Homomorphisms preserve inverses of units.

</details>
<details>
<summary>Full solution</summary>

Since a/s=(a/1)(s/1)^(−1), a factorisation must send it to φ(a)φ(s)^(−1). This gives uniqueness. If two representatives differ by a multiplier equation, applying φ and cancelling the invertible multiplier proves these proposed images agree, giving well-definedness. The fraction formulas then prove existence as a homomorphism.

</details>

### CA-03-04 — Saturate an integer ideal

Compute the contraction of (12)Z[1/2] to Z.

<details>
<summary>Hint 1</summary>

An integer a lies in the contraction when 2^n a is divisible by twelve.

</details>
<details>
<summary>Hint 2</summary>

Powers of two can supply the factor four but never the factor three.

</details>
<details>
<summary>Full solution</summary>

If 2^n a is divisible by twelve, then three divides a. Conversely if a=3b, multiplication by four makes 4a divisible by twelve. Thus the contraction is (3). In the localisation, (12)=(3) because four is a unit. Extension followed by contraction is saturation, not necessarily the original ideal.

</details>

### CA-03-05 — Surviving integer primes

Which primes of Z survive in Z[1/6]?

<details>
<summary>Hint 1</summary>

A prime survives exactly when it avoids all powers of six.

</details>
<details>
<summary>Hint 2</summary>

Include the zero prime of Z.

</details>
<details>
<summary>Full solution</summary>

The zero prime avoids every nonzero power of six and survives. A nonzero prime (p) avoids the powers exactly when p is neither two nor three. Thus the surviving primes are (0) and (p) for all primes p≥5. The primes (2),(3) extend to the whole ring because their generators become units.

</details>

### CA-03-06 — Residue field at a nonmaximal prime

For R=k[x,y] and 𝔭=(x), identify the residue field of R_𝔭.

<details>
<summary>Hint 1</summary>

The quotient R/𝔭 is k[y].

</details>
<details>
<summary>Hint 2</summary>

The residue field is its fraction field.

</details>
<details>
<summary>Full solution</summary>

R/𝔭≅k[y], a domain. Every nonzero polynomial in y is represented by an element outside 𝔭 and becomes invertible. Therefore R_𝔭/𝔭R_𝔭≅k(y). It is not merely k, because the original prime was not a maximal ideal of k[x,y].

</details>

### CA-03-07 — Localise a short exact sequence

Localise 0→Z→Z→Z/12Z→0, where the first map is multiplication by twelve, at the prime (2). Identify the last term.

<details>
<summary>Hint 1</summary>

Three becomes a unit.

</details>
<details>
<summary>Hint 2</summary>

The ideal generated by twelve becomes the ideal generated by four.

</details>
<details>
<summary>Full solution</summary>

Exactness gives 0→Z_(2)→Z_(2)→(Z/12Z)_(2)→0 with the same multiplication-by-twelve map. In Z_(2), three is invertible, so (12)=(4). The last term is Z_(2)/(4), naturally isomorphic to Z/4Z because every odd denominator already has an inverse modulo four. The three-primary part of Z/12Z disappears.

</details>

### CA-03-08 — A map detected locally

Prove a map f:M→N is injective if every maximal localisation f_𝔪 is injective.

<details>
<summary>Hint 1</summary>

Localise the kernel using exactness.

</details>
<details>
<summary>Hint 2</summary>

A module with all maximal localisations zero is zero.

</details>
<details>
<summary>Full solution</summary>

Exactness identifies (ker f)_𝔪 with ker(f_𝔪), which is zero by assumption. Proposition 3.7 therefore gives ker f=0. Thus f is injective. The same argument with the cokernel proves a surjectivity criterion, and combining both yields the isomorphism criterion.

</details>

### CA-03-09 — Uniform annihilation

If M is generated by m_1,…,m_r and S^(−1)M=0, construct one s∈S with sM=0.

<details>
<summary>Hint 1</summary>

Each m_i/1 vanishes.

</details>
<details>
<summary>Hint 2</summary>

Multiply their individual annihilating denominators.

</details>
<details>
<summary>Full solution</summary>

For each i choose s_i∈S with s_im_i=0. Let s=∏_i s_i, which lies in S. Then sm_i=0 for every generator because s has s_i as a factor. Every element is a finite R-linear combination of the generators, so sM=0. The empty generating set gives M=0 and one can choose s=1.

</details>

### CA-03-10 — Infinite generation matters

For M=⊕_(n≥1)Z/2^nZ, prove localisation at powers of two vanishes but no single power annihilates M.

<details>
<summary>Hint 1</summary>

Each individual element has finite support.

</details>
<details>
<summary>Hint 2</summary>

For a proposed uniform 2^a, inspect the summand of exponent 2^(a+1).

</details>
<details>
<summary>Full solution</summary>

An element supported in the first N summands is killed by 2^N, so every fraction has zero numerator after an allowed multiplier. Thus the localisation vanishes. But the element one in Z/2^(a+1)Z is not killed by 2^a. Hence no proposed fixed power annihilates every summand. This isolates the role of finite generation in the uniform-denominator theorem.

</details>

### CA-03-11 — Zero divisors in a local ring

Explain why (k[x,y]/(xy))_(x,y) is local but not a domain.

<details>
<summary>Hint 1</summary>

Localisation at a prime is local.

</details>
<details>
<summary>Hint 2</summary>

Neither x nor y is killed by a denominator outside (x,y).

</details>
<details>
<summary>Full solution</summary>

The ideal (x,y) is maximal, so the localisation is local with its extended maximal ideal. The annihilator of x is (y), contained in (x,y), so no denominator outside that maximal ideal kills x. Thus x remains nonzero, and the same holds for y. Their product is still zero by the ring relation, proving the local ring is not a domain.

</details>

### CA-03-12 — Localisation twice

Let S⊆T be multiplicative sets. Show localising S^(−1)R further at the images of T gives T^(−1)R.

<details>
<summary>Hint 1</summary>

Both constructions receive R and invert every element of T.

</details>
<details>
<summary>Hint 2</summary>

Apply the universal property in both directions.

</details>
<details>
<summary>Full solution</summary>

The two-stage ring receives R and makes every t∈T invertible, so T^(−1)R maps uniquely into it. Conversely T^(−1)R inverts S, hence receives S^(−1)R; that map already inverts the images of T and extends through the second localisation. The two composites are compatible with the original map from R, and uniqueness in the universal properties makes them identities. Thus the rings are canonically isomorphic.

</details>

## 11. Summary and next connection

Localisation introduces allowed inverses through a universal property and uses multiplier equations to handle zero divisors correctly. It preserves exact sequences, saturates ideals, selects primes disjoint from denominators and produces local rings at individual primes. Local vanishing detects modules, with finite generation supplying uniform denominators. The next chapter puts all primes together in the [spectrum](prime-ideals-spectrum.md) and identifies localisation with its basic open pieces.
`;export{e as default};