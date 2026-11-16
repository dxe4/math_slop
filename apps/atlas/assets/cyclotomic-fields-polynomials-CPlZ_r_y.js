var e=`---
parent_id: book-galois-theory
chapter_id: cyclotomic-fields-polynomials
title: "Cyclotomic Fields and Polynomials"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Cyclotomic Fields and Polynomials

The roots of xⁿ−1 have a multiplication law before we ask about their field. A primitive root of unity generates that finite cyclic group, while its field automorphisms act by coprime powers. The crucial theorem is that all such coprime powers are conjugate over Q. We prove that assertion, rather than counting roots and assuming the polynomial irreducible.

Read [splitting fields](splitting-fields-normal-extensions.md), the [finite correspondence](fundamental-theorem-galois-theory.md), Gauss’s lemma for integer polynomials and elementary modular arithmetic first. This chapter works in characteristic zero, inside C, with ζₙ=exp(2πi/n). The Galois group in question fixes Q. Over another base field a cyclotomic polynomial can factor differently.

## 1. Primitive orders partition the roots

**Definition 8.1.** A primitive n-th root of unity is a complex number of multiplicative order exactly n. The n-th cyclotomic polynomial is
$$\\Phi_n(x)=\\prod_{\\substack{1\\le a\\le n\\\\\\gcd(a,n)=1}}(x-\\zeta_n^a).$$
Its degree is Euler’s totient φ(n). We include n=1, with Φ₁=x−1.

The order of ζₙᵃ is n/gcd(a,n), since n divides ak exactly when n/gcd(a,n) divides k. Thus the indicated coprime exponents give precisely the primitive roots, each once. Every n-th root has a unique order dividing n, so grouping by order gives
$$x^n-1=\\prod_{d\\mid n}\\Phi_d(x).$$
The roots are all distinct because the derivative nxⁿ⁻¹ does not vanish at them in characteristic zero.

**Proposition 8.2 (Integer coefficients).** Every Φₙ is monic and belongs to Z[x].

*Proof.* Induct on n. The initial polynomial x−1 has integer coefficients. If all proper-divisor polynomials do, their product P is monic in Z[x]. Divide xⁿ−1 by P using the monic division algorithm over Z, obtaining an integer quotient and remainder. Over C the root partition identity gives exact quotient Φₙ and zero remainder. Uniqueness of polynomial division identifies the integer quotient with Φₙ. ∎

This proof does not infer integer coefficients just because the roots are algebraic integers. It constructs them by exact monic polynomial division. For example Φ₂=x+1, Φ₃=x²+x+1 and Φ₄=x²+1. Dividing x⁶−1 by Φ₁Φ₂Φ₃ gives Φ₆=x²−x+1. Primitive sixth roots generate the same field as primitive cube roots, despite the two polynomials having different root sets.

## 2. The prime-powering argument

**Theorem 8.3 (Cyclotomic irreducibility).** For every n≥1, Φₙ is irreducible over Q.

*Proof.* Choose a monic irreducible factor f∈Z[x] of Φₙ with a primitive root ζ as one of its roots. Such integer factors exist by Gauss’s lemma, since Φₙ is monic in Z[x]. Let p be a prime not dividing n. We show ζᵖ is also a root of f.

Suppose otherwise. The number ζᵖ is still primitive, so it is a root of another monic irreducible factor g of Φₙ, with g≠f. Then g(ζᵖ)=0, so f divides g(xᵖ) over Q. Monic division or Gauss’s lemma makes this a divisibility in Z[x]. Reducing modulo p yields
$$\\overline f(x)\\mid\\overline g(x^p)=\\overline g(x)^p.$$
Since f is monic, its reduction retains its positive degree. Some irreducible factor h of its reduction therefore also divides the reduction of g. Hence h² divides the reduction of fg, and thus divides the reduction of Φₙ and of xⁿ−1.

But xⁿ−1 has no repeated irreducible factor over F_p when p does not divide n. Indeed its derivative is nxⁿ⁻¹ with n nonzero modulo p; any common divisor with xⁿ−1 would divide x and xⁿ−1, whose gcd is one. This contradiction proves ζᵖ is a root of f.

The argument applies to any primitive root already known to be a root of f. If gcd(a,n)=1, every prime factor of the positive integer a is prime to n. Applying the result successively shows ζᵃ is a root of f. Thus f contains all φ(n) primitive roots, while it divides the degree-φ(n) polynomial Φₙ. Both are monic, so f=Φₙ, proving irreducibility. ∎

The proof needs only reduction at primes not dividing n. When p divides n, xⁿ−1 can acquire repeated factors modulo p and ζᵖ need not remain primitive. Treating that excluded case as if the same contradiction applied would erase exactly the arithmetic condition controlling the root order.

For a prime p there is a shorter independent proof. The polynomial Φ_p=1+x+⋯+x^(p−1) becomes
$$\\Phi_p(x+1)=\\frac{(x+1)^p-1}{x}.$$
Its leading coefficient is one; every other coefficient is divisible by p, and the constant coefficient is p rather than a multiple of p². Eisenstein proves irreducibility after the invertible variable translation. This shortcut applies to prime index but does not replace the general argument above.

## 3. The cyclotomic Galois group

**Theorem 8.4.** The field E=Q(ζₙ) is a finite Galois extension of degree φ(n), and
$$\\operatorname{Gal}(E/\\mathbb Q)\\cong(\\mathbb Z/n\\mathbb Z)^\\times.$$
The residue class of a acts by σₐ(ζₙ)=ζₙᵃ.

*Proof.* Irreducibility gives [E:Q]=φ(n). All roots of xⁿ−1 are powers of ζₙ, so E is its splitting field. Characteristic zero makes it separable; hence it is Galois. Each primitive power ζₙᵃ is a conjugate root of the minimal polynomial Φₙ, so evaluation defines an embedding sending ζₙ to that power. Its image is E: if ab≡1 modulo n, then (ζₙᵃ)ᵇ=ζₙ recovers the generator. Thus each coprime residue class gives an automorphism.

Every automorphism must send the generator to a primitive n-th root, since a field isomorphism preserves its multiplicative order. Hence this list exhausts all automorphisms. Distinct classes give distinct images, and composing σₐ and σ_b sends ζₙ to ζₙ^(ab), so the identification respects the multiplicative group law. ∎

The group is abelian but need not be cyclic. For n=8 the unit group has three different elements of order two. Abelianity implies every intermediate extension is normal over Q, by the finite correspondence. It does not imply that a given field has only one subfield of a specified degree.

## 4. Complex conjugation and the real part

For n≥3, complex conjugation sends ζₙ to ζₙ⁻¹ and corresponds to the unit class −1. It is nonidentity and has order two.

**Theorem 8.5 (Maximal real subfield).** For n≥3, put y=ζₙ+ζₙ⁻¹. Then
$$E\\cap\\mathbb R=\\mathbb Q(y),\\qquad [E:\\mathbb Q(y)]=2,$$
and [Q(y):Q]=φ(n)/2. Its Galois group over Q is the unit group modulo the subgroup generated by −1.

*Proof.* The number y is real and ζₙ satisfies x²−yx+1=0 over Q(y), so the relative degree is at most two. Since ζₙ is nonreal for n≥3, it does not belong to Q(y), making that degree exactly two. The fixed field of complex conjugation also has relative degree two by Artin and consists exactly of E∩R. Since it contains Q(y), equality of degrees identifies them. The subgroup generated by −1 is normal because the whole group is abelian, so the quotient statement follows from restriction. ∎

The exceptional indices n=1,2 give E=Q and no nontrivial complex conjugation. The formula φ(n)/2 is not asserted for them. A real algebraic number need not itself generate a normal extension; normality here follows from the abelian cyclotomic group, rather than from reality alone.

## 5. Three complete examples

**Example 8.6 (Fifth roots and √5).** For n=5 the degree is four and the unit group is generated by two modulo five, so it is C₄. Set y=ζ₅+ζ₅⁻¹. Dividing the relation 1+ζ₅+ζ₅²+ζ₅³+ζ₅⁴=0 by ζ₅² gives
$$(\\zeta_5^2+\\zeta_5^{-2})+(\\zeta_5+\\zeta_5^{-1})+1=0.$$
Since ζ²+ζ⁻²=y²−2, this becomes y²+y−1=0. Its roots are (−1±√5)/2; thus the real subfield is Q(√5). Its degree two agrees with φ(5)/2. There is only one quadratic intermediate field because C₄ has only one subgroup of order two.

**Example 8.7 (Eighth roots give a biquadratic field).** We have ζ₈=(1+i)/√2. Its field contains i=ζ₈² and √2=ζ₈+ζ₈⁻¹, so Q(i,√2)⊆Q(ζ₈). The displayed formula gives the reverse inclusion. This field has degree four: Q(√2) is real and lacks i. Its unit group modulo eight is {1,3,5,7}, and every nonidentity class squares to one, so the Galois group is V₄.

The three quadratic subfields are Q(i), Q(√2) and Q(i√2)=Q(√−2). The real subfield is Q(√2), fixed by conjugation. The other two are nonreal but still normal quadratic extensions. This is a concrete contrast with the cyclic quartic example, despite both cyclotomic fields having degree four.

**Example 8.8 (A real cyclic cubic from seventh roots).** The unit group modulo seven is cyclic of order six, generated by three: its powers are 1,3,2,6,4,5,1. Thus Q(ζ₇) has degree six. Its real subfield has degree three and group C₆/⟨−1⟩≅C₃.

For y=ζ₇+ζ₇⁻¹, group the six nontrivial seventh roots into inverse pairs. The cyclotomic relation gives
$$1+y+(y^2-2)+(y^3-3y)=0,$$
so y³+y²−2y−1=0. Its rational-root candidates ±1 give −1 and 1, so the cubic is irreducible. Therefore y generates the full degree-three real subfield, which is itself Galois. Its normality is visible from the quotient group, rather than assumed because the minimal polynomial happens to have real roots.

## 6. Composita of cyclotomic fields

**Proposition 8.9.** For positive integers m,n and ℓ=lcm(m,n),
$$\\mathbb Q(\\zeta_m)\\mathbb Q(\\zeta_n)=\\mathbb Q(\\zeta_\\ell)$$
with the compatible complex roots fixed at the chapter opening.

*Proof.* Both ζ_m=ζ_ℓ^(ℓ/m) and ζ_n=ζ_ℓ^(ℓ/n) lie in Q(ζ_ℓ), giving one containment. The integers ℓ/m and ℓ/n are coprime. Choose integers u,v with uℓ/m+vℓ/n=1 by Bézout. Then ζ_mᵘζ_nᵛ=ζ_ℓ, giving the other containment. Negative exponents are permitted because roots of unity are nonzero. ∎

For example Q(ζ₃)Q(ζ₄)=Q(ζ₁₂), of degree φ(12)=4, and Q(ζ₃)Q(ζ₆)=Q(ζ₆)=Q(ζ₃). The latter equality reminds us that the index n is not uniquely determined by the field Q(ζₙ). A polynomial index records a specified root order, while equality of generated fields can identify different indices.

The radical-extension chapters will need roots of unity in the base for a different reason: an automorphism sending one radical root to another multiplies it by an appropriate root of unity. This chapter establishes the field and group structure of that additional base before any radical-solvability conclusion is attempted.

## 7. Two exact product calculations

The divisor identity also gives a practical symbolic formula. Define the Möbius function $\\mu(k)$ to be zero when a prime square divides $k$, and otherwise $(-1)^r$ when $k$ is a product of $r$ distinct primes, with $\\mu(1)=1$. Its elementary divisor sum is
$$\\sum_{d\\mid k}\\mu(d)=\\begin{cases}1,&k=1,\\\\0,&k>1.\\end{cases}$$
For $k>1$, terms supported on its distinct prime factors sum to $(1-1)^r=0$, proving the identity directly.

**Proposition 8.10 (Multiplicative Möbius inversion).** As an identity in the rational function field $\\mathbb Q(x)$,
$$\\Phi_n(x)=\\prod_{d\\mid n}(x^d-1)^{\\mu(n/d)}.$$

*Proof.* Replace each $x^d-1$ by the product of $\\Phi_e$ over $e\\mid d$. The total exponent of a fixed $\\Phi_e$ in the right side is
$$\\sum_{e\\mid d\\mid n}\\mu(n/d)=\\sum_{k\\mid n/e}\\mu(k).$$
The divisor-sum identity makes this one when $e=n$ and zero otherwise. Every factor except $\\Phi_n$ cancels, proving the result. ∎

Negative exponents mean this is initially a rational-function expression. The preceding integer-polynomial theorem proves that all its denominators cancel. One must cancel algebraically before evaluating at a number where the displayed denominator vanishes. For instance
$$\\Phi_6(x)=\\frac{(x^6-1)(x-1)}{(x^3-1)(x^2-1)}=x^2-x+1.$$
The rational expression shows $0/0$ at $x=1$, while the polynomial value is one. Formal cancellation, rather than informal division at that point, explains the valid evaluation.

A different product uses the conjugates of one algebraic element. For a prime $p$,
$$\\prod_{a=1}^{p-1}(1-\\zeta_p^a)=\\Phi_p(1)=p.$$
All factors are nonzero because each $\\zeta_p^a$ is primitive. This identity follows by evaluating the already established polynomial product, so no denominator issue arises. It exhibits a rational integer as a product of algebraic conjugates. The next chapter develops norm and trace systematically; this is a concrete product calculation motivating that language, without assuming any unproved ideal-factorisation theorem about the prime $p$.

A small field equality can also be checked without a general formula: $\\zeta_6=(1+\\sqrt{-3})/2$ and $\\zeta_3=(-1+\\sqrt{-3})/2$, so $\\zeta_6=\\zeta_3+1$. Both generate $\\mathbb Q(\\sqrt{-3})$, of degree two. Their minimal polynomials $x^2-x+1$ and $x^2+x+1$ differ because the chosen elements differ; equality of generated fields does not imply equality of minimal polynomials. Their maximal real subfield is $\\mathbb Q$, consistent with the degree formula $\\varphi(6)/2=1$.

## Odd indices and their doubled presentations

For every odd positive m, the compatible complex roots satisfy
$$\\zeta_{2m}=-\\zeta_m^{(m+1)/2}.$$
Indeed the right-hand side is the exponential with angle π/m after combining its two minus signs. Also ζ_m is the square of ζ_(2m). Thus each root belongs to the field generated by the other and Q(ζ_(2m))=Q(ζ_m).

The corresponding unit groups are naturally isomorphic by reduction modulo m. Every unit class modulo m has exactly one odd lift modulo twice m, and that lift is a unit there. Multiplication is preserved by reduction, giving the inverse-free group correspondence. The restriction of the root-power automorphism agrees with it because ζ_m is the square of the chosen doubled-index root.

For m=5, primitive tenth roots and primitive fifth roots therefore generate the same degree-four field. They remain different elements with different multiplicative orders and different minimal polynomials. This general calculation explains one systematic source of repeated field descriptions without asserting that the displayed index is always a minimal conductor. A field, a chosen root and the polynomial defining that root are three related pieces of data, not interchangeable names.

The prime product formula also obstructs units in the integral polynomial ring generated by a primitive p-th root. Represent that ring as the quotient of Z[t] by its monic minimal polynomial. Evaluating t at one and reducing integers modulo p kills this polynomial because its value at one is p. Hence evaluation induces a unital homomorphism from the root-generated ring onto the nonzero field of residues modulo p. The element one minus the root maps to zero. It cannot have been a unit, because a unital homomorphism sends an inverse equation to an inverse equation and zero has no inverse in that target. Thus the element is nonzero and invertible in the cyclotomic field but not a unit in this smaller ring. This elementary quotient argument does not require the norm formalism of the next chapter or a prime-ideal factorisation theorem.

## Exercises

### Exercise 8.1 — Orders of powers
<a id="galois-cyclotomic-ex-1"></a>

Find the orders of ζ₁₂², ζ₁₂³ and ζ₁₂⁵ and identify which is primitive of order twelve.

<details>
<summary>Hint</summary>

Use n/gcd(a,n).

</details>

<details>
<summary>Solution</summary>

The orders are 12/gcd(2,12)=6, 12/gcd(3,12)=4 and 12/gcd(5,12)=12. Only the fifth power remains a primitive twelfth root. The formula follows because (ζₙᵃ)ᵏ=1 exactly when n divides ak; after cancelling gcd(a,n), the least positive k is n/gcd(a,n).

</details>

### Exercise 8.2 — Compute Φ₁₂
<a id="galois-cyclotomic-ex-2"></a>

Use the divisor product to compute Φ₁₂.

<details>
<summary>Hint</summary>

Separate x¹²−1=(x⁶−1)(x⁶+1), then factor x⁶+1.

</details>

<details>
<summary>Solution</summary>

The divisors of twelve not already divisors of six are four and twelve. Thus x⁶+1=Φ₄Φ₁₂. Since Φ₄=x²+1 and (x²+1)(x⁴−x²+1)=x⁶+1, we obtain Φ₁₂=x⁴−x²+1. Its degree four agrees with the four residues 1,5,7,11 coprime to twelve. The general theorem supplies irreducibility over Q.

</details>

### Exercise 8.3 — A prime-index Eisenstein proof
<a id="galois-cyclotomic-ex-3"></a>

Prove Φ₇ irreducible using translation and Eisenstein.

<details>
<summary>Hint</summary>

Expand ((x+1)⁷−1)/x and inspect divisibility by seven.

</details>

<details>
<summary>Solution</summary>

The translated polynomial is x⁶+7x⁵+21x⁴+35x³+35x²+21x+7. Every nonleading coefficient is divisible by seven, and the constant seven is not divisible by forty-nine. Eisenstein proves this polynomial irreducible over Q. Translation x↦x+1 is an automorphism of Q[x], so Φ₇ itself is irreducible. Its degree is six.

</details>

### Exercise 8.4 — Why the excluded primes matter
<a id="galois-cyclotomic-ex-4"></a>

Explain why the irreducibility proof restricts to primes p not dividing n.

<details>
<summary>Hint</summary>

Track the order of ζᵖ and the derivative of xⁿ−1 modulo p.

</details>

<details>
<summary>Solution</summary>

If p divides n, ζᵖ has order n/p and is no longer primitive of order n, so it need not be a root of Φₙ. Also the coefficient n in the derivative nxⁿ⁻¹ becomes zero modulo p. The polynomial xⁿ−1 then has repeated factors, so a repeated factor of a reduction would no longer give a contradiction. Both the root-order step and the separable-reduction step need the condition p∤n.

</details>

### Exercise 8.5 — Composition of automorphisms
<a id="galois-cyclotomic-ex-5"></a>

In Q(ζ₁₁), compute σ₃σ₄ and the inverse of σ₃.

<details>
<summary>Hint</summary>

Multiply the exponents modulo eleven and solve 3b≡1.

</details>

<details>
<summary>Solution</summary>

Composition sends ζ₁₁ to ζ₁₁^(3·4)=ζ₁₁¹²=ζ₁₁, so σ₃σ₄=σ₁ is identity. Since 3·4≡1 modulo eleven, σ₄ is the inverse of σ₃. The exponent calculation is valid because the Galois group has been identified with the unit group, rather than merely with a set of possible root images.

</details>

### Exercise 8.6 — An abelian noncyclic example
<a id="galois-cyclotomic-ex-6"></a>

Prove Gal(Q(ζ₈)/Q) is not cyclic, despite being abelian of order four.

<details>
<summary>Hint</summary>

Square all units modulo eight.

</details>

<details>
<summary>Solution</summary>

The units modulo eight are 1,3,5,7, and their squares are all one modulo eight. Thus every nonidentity automorphism has order two, whereas a cyclic group of order four would contain an element of order four. The group is therefore V₄, not C₄. Multiplication of unit classes is commutative, so it remains abelian.

</details>

### Exercise 8.7 — The real-subfield degree
<a id="galois-cyclotomic-ex-7"></a>

Find the degree of Q(ζ₉+ζ₉⁻¹) over Q and explain the exceptional indices of the general formula.

<details>
<summary>Hint</summary>

Use φ(9)=6 and nontrivial conjugation for n≥3.

</details>

<details>
<summary>Solution</summary>

For n=9 the degree is φ(9)/2=3. The relative degree from the full cyclotomic field to its real subfield is two, since ζ₉ is nonreal and satisfies a quadratic over that subfield. For n=1 or two, the full field is already Q and conjugation is identity, so division of φ(n)=1 by two would be meaningless as a field degree. The theorem explicitly excludes those cases.

</details>

### Exercise 8.8 — A cyclotomic compositum
<a id="galois-cyclotomic-ex-8"></a>

Find Q(ζ₄)Q(ζ₆), its degree and its Galois group over Q.

<details>
<summary>Hint</summary>

Use lcm(4,6)=12 and list units modulo twelve.

</details>

<details>
<summary>Solution</summary>

The compositum is Q(ζ₁₂). Its degree is φ(12)=4. The unit group is {1,5,7,11}, with every nonidentity element squaring to one, so the Galois group is V₄. Concretely the field is Q(i,√3), since ζ₁₂=(√3+i)/2 and its powers recover i and √3. The group description follows from the coprime-power theorem.

</details>

### Exercise 8.9 — Different indices, the same field
<a id="galois-cyclotomic-ex-9"></a>

For odd n, prove Q(ζ₂ₙ)=Q(ζₙ).

<details>
<summary>Hint</summary>

One containment follows by squaring; express ζ₂ₙ using −1 and a power of ζₙ.

</details>

<details>
<summary>Solution</summary>

Squaring ζ₂ₙ gives ζₙ, so Q(ζₙ)⊆Q(ζ₂ₙ). Conversely, for odd n, −ζₙ^((n+1)/2)=exp(πi)exp(πi(n+1)/n)=exp(πi/n)=ζ₂ₙ. Thus ζ₂ₙ lies in Q(ζₙ), proving equality. The equality is compatible with φ(2n)=φ(n) for odd n, but the explicit generator identity proves containment directly.

</details>

### Exercise 8.10 — A real cyclic cubic polynomial
<a id="galois-cyclotomic-ex-10"></a>

Prove that y³+y²−2y−1 has a cyclic degree-three splitting field generated by y=ζ₇+ζ₇⁻¹.

<details>
<summary>Hint</summary>

Use the inverse-pair relation and the quotient of the cyclic order-six group by conjugation.

</details>

<details>
<summary>Solution</summary>

The inverse-pair sum gives the displayed polynomial equation. Its only rational-root candidates ±1 give nonzero values, so it is an irreducible cubic. The field Q(y) is the maximal real subfield of Q(ζ₇), whose group is C₆. Conjugation is its order-two subgroup, so Q(y)/Q is Galois with group C₃. A degree-three Galois extension containing a root contains all its conjugates, so it is the splitting field of this irreducible cubic.

</details>

### Exercise 8.11 — No arbitrary exponents
<a id="galois-cyclotomic-ex-11"></a>

Why cannot ζ₈↦ζ₈² define a rational automorphism of Q(ζ₈), although ζ₈² belongs to the field?

<details>
<summary>Hint</summary>

Compare multiplicative orders and generated field degrees.

</details>

<details>
<summary>Solution</summary>

The generator ζ₈ has order eight, but ζ₈²=i has order four. An injective multiplicative map preserves the order of a finite-order element, so this assignment cannot define an automorphism. Also Q(i) has degree two and is smaller than the degree-four field Q(ζ₈), so the proposed image would fail to generate the whole field. Only exponents coprime to eight are allowed.

</details>

### Exercise 8.12 — Normal intermediate extensions
<a id="galois-cyclotomic-ex-12"></a>

Prove every intermediate field of a cyclotomic extension is Galois over Q, and explain why that does not imply its Galois group is cyclic.

<details>
<summary>Hint</summary>

Apply the normal-subgroup theorem to the abelian unit group.

</details>

<details>
<summary>Solution</summary>

The Galois group of Q(ζₙ)/Q is the abelian unit group modulo n. Every subgroup H is normal, so its fixed field is normal over Q; finiteness and separability are inherited. Its Galois group is the quotient of the unit group by H, which is abelian but need not be cyclic. Taking the whole field Q(ζ₈) gives V₄ itself as a noncyclic example. Normality requires a normal fixing subgroup, not a cyclic quotient.

</details>

## Summary

Cyclotomic polynomials have integer coefficients and are irreducible over Q. Coprime powers of a primitive root supply all automorphisms, identifying the Galois group with the unit group modulo n. Conjugation identifies the maximal real subfield, and compatible root powers give the compositum formula. These concrete abelian extensions provide roots of unity for the later Kummer and radical-solvability chapters.
`;export{e as default};