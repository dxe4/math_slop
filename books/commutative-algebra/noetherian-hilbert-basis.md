
# Noetherian Rings and the Hilbert Basis Theorem

A polynomial ideal may contain infinitely many equations, yet finitely many can generate all of them. Noetherian finiteness makes that claim precise and keeps it true after adjoining finitely many variables. The same principle controls module presentations, local generators and the irreducible components of a spectrum.

Read [modules and exact sequences](modules-exact-sequences.md), [localisation](localisation.md) and [spectra](prime-ideals-spectrum.md). Rings are commutative with identity. We state separately the finite-generation hypotheses used in Nakayama's lemma: that lemma does not itself require a Noetherian ring.

## 1. Ascending chains and finite generation

**Definition 5.1.** An R-module M is Noetherian if every ascending chain of submodules stabilises. A ring is Noetherian if it is Noetherian as a module over itself, equivalently for chains of ideals.

**Theorem 5.2.** M is Noetherian exactly when every submodule is finitely generated.

*Proof.* If N≤M is not finitely generated, choose x_1∈N and then x_(r+1) outside Rx_1+⋯+Rx_r. This produces a strictly ascending chain, contradicting the condition. Conversely, the union N of an ascending chain is a submodule. A finite generating set for N lies together in some chain member, which must then equal the union. All subsequent members are equal. The zero submodule has the empty generating set and causes no exception. ∎

**Proposition 5.3.** In a short exact sequence 0→A→B→C→0, B is Noetherian exactly when A and C are.

*Proof.* Chains in A are chains in B, and inverse images lift chains in C to chains in B, proving one direction. Conversely, for a chain B_i, both A∩B_i and the images in C eventually stabilise. After a common stage k, any x∈B_j, j≥k, has the same quotient image as some y∈B_k. Then x−y lies in A∩B_j=A∩B_k, so x∈B_k. Thus the chain stabilises. ∎

If R is Noetherian, induction on n makes R^n Noetherian. Every finitely generated module is its quotient, hence Noetherian. In particular its submodules are finitely generated. Conversely the cyclic module R is Noetherian only when the ring is, so finite generation alone over an arbitrary ring is insufficient.

Every finitely generated module over a Noetherian ring is finitely presented: choose R^n→M surjective; its kernel is a finitely generated submodule of R^n, yielding a finite matrix of relations. This is an existence theorem for a finite presentation, not a promise that every module is free.

## 2. Quotients, fractions and polynomial rings

A quotient of a Noetherian ring is Noetherian, because ideals correspond to containing ideals upstairs. A localisation is Noetherian: every ideal of S^(−1)R is extended from its contraction I, and finitely many generators of I extend to generators of the localised ideal. The original I may saturate on contraction, but that does not obstruct finite generation.

**Theorem 5.4 (Hilbert basis theorem).** If R is Noetherian, R[x] is Noetherian.

*Proof.* Let I≤R[x]. Include zero with all leading coefficients of nonzero elements of I to form J≤R. To verify the ideal assertion, align degrees before adding two polynomials; if the proposed coefficient sum is nonzero, it is the leading coefficient of the aligned sum, and otherwise it is the included zero. Multiplying a coefficient by r works the same way: if the product vanishes, it contributes zero. Thus the argument is valid with zero divisors in R.

If J=0 then I=0. Otherwise choose generators a_1,…,a_m of J and polynomials f_i∈I with those leading coefficients, of degrees d_i. Put d=max d_i. The elements of I of degree less than d form an R-submodule L of the finite free module of polynomials of degree less than d, identified with R^d. The previous module result makes L finitely generated, say by h_1,…,h_s.

For f∈I with degree N≥d, express its leading coefficient as Σ_i r_i a_i. Subtract
$$\sum_i r_i x^{N-d_i}f_i.$$
The result belongs to I and has strictly smaller degree because the leading term cancels. Repeating terminates. Once the degree is below d, the remainder is an R-linear combination of the h_j. Thus the f_i and h_j generate I as an ideal. Every ideal is finitely generated, proving the theorem. ∎

The low-degree submodule is essential. Leading coefficients alone do not control all remainders of degree below the selected bound. In the extreme case d=0, that submodule is zero and no low-degree generators are needed.

Iterating proves R[x_1,…,x_n] Noetherian for every finite n. A finitely generated R-algebra is a quotient of such a polynomial ring, hence Noetherian. Infinite-variable polynomial rings need not be Noetherian.

## 3. Worked example: generators are not a principal generator

The ideal (2,x) in Z[x] is finitely generated but not principal. If (2,x)=(f), then f divides both 2 and x. A polynomial dividing the nonzero constant two is constant. A constant dividing x must be ±1 because x has coefficient one. Thus f would be a unit, making the ideal all Z[x]. But evaluation x↦0 followed by reduction modulo two kills the ideal and not one, so it is proper.

Hilbert's theorem guarantees finite generation, not the PID property. Z[x] is Noetherian even though this ideal needs two generators.

For a closer view of the proof, take I=(2x²,3x³). The identity 3x³−x(2x²)=x³ gives I=(2x²,x³). Its leading-coefficient ideal is all Z because degrees can be aligned to obtain leading coefficient one. Select x³ as that leading generator, with d=3. The low-degree submodule is generated over Z by 2x². For example 5x⁴+6x² reduces by 5x·x³ to 6x², then by 3·2x² to zero. The low-degree generator carries information that the leading coefficient one by itself missed.

## 4. Determinants replace division

A matrix over a ring need not admit field-style elimination, but the adjugate identity remains valid:
$$\operatorname{adj}(B)B=(\det B)I.$$
It follows by the usual cofactor expansion, a polynomial identity in the matrix entries with integer coefficients.

**Lemma 5.5 (Determinant trick).** Suppose M has n generators and an endomorphism φ satisfies φ(M)⊆IM for an ideal I. Then φ satisfies a monic relation
$$\varphi^n+c_1\varphi^{n-1}+\cdots+c_n=0
\quad\text{on }M,\qquad c_j\in I^j.$$

*Proof.* For generators m_1,…,m_n, write φ(m_i)=Σ_j a_ij m_j with a_ij∈I. In the polynomial matrix TI−A, the determinant is monic of degree n, and its coefficient c_j uses j entries from A, so lies in I^j. Substitute the commuting endomorphism φ for T. The vector of generators is killed by φI−A. Multiplying by its adjugate shows the determinant polynomial in φ kills every generator, hence all M. A transpose convention for the generator vector changes A's placement but not its determinant. ∎

No freeness or linear independence of the generators is required. The determinant acts as an annihilating scalar polynomial; we did not invert a matrix of dependent generators.

## 5. Nakayama's lemma and local generators

**Theorem 5.6 (Nakayama).** Let M be finitely generated and I⊆Jac(R). If IM=M, then M=0. More generally, if M=N+IM for a submodule N, then M=N.

*Proof.* Choose generators and express each as an I-linear combination of them, producing (I_n−A)m=0 with entries of A in I. The adjugate gives det(I_n−A)M=0. This determinant has the form 1+i with i∈I. Since I⊆Jac(R), the Jacobson unit criterion makes 1+i a unit. A unit annihilating M forces M=0.

For the general statement, M/N is finitely generated and satisfies I(M/N)=M/N. Apply the first part to obtain M/N=0. ∎

If (R,𝔪) is local with residue field k, and M is finitely generated, its minimum number of generators is
$$\dim_k M/\mathfrak mM.$$
Every generating set maps to a spanning set of the quotient, giving the lower bound. Conversely lift a k-basis to elements m_i∈M and let N be their R-span. Their spanning property gives M=N+𝔪M; Nakayama gives M=N. A finite generating set minimal under removal must therefore map to a basis: choose a basis subset of its residue images, whose lifts already generate by the same argument.

**Worked example.** In R=k[x,y]_(x,y), let 𝔪=(x,y)R. Its quotient 𝔪/𝔪² has k-basis given by x,y. Polynomial linear terms identify the classes, and denominators with nonzero constant term only multiply those linear parts by nonzero constant scalars. Thus 𝔪 needs exactly two generators. In particular this local Noetherian ring is not a DVR, whose maximal ideal has one generator.

## Worked examples: the two Nakayama hypotheses

The finite-generation assumption is essential. Over R=Z_(p), the module Q satisfies pQ=Q but is nonzero. It cannot be finitely generated over R: finitely many rational generators have a bounded p-power in their denominators, while Q contains fractions with arbitrarily large such powers.

The Jacobson condition is essential too. In R=Z, let I=(2) and M=Z/3Z. Multiplication by two is invertible on M, so IM=M≠0, while I is proper but not contained in Jac(Z). Properness alone is insufficient.

## 6. Consequences for spectra and nilpotents

A topological space is Noetherian if every descending chain of closed subsets stabilises. For Spec R with R Noetherian, a descending chain V(I_1)⊇V(I_2)⊇⋯ corresponds to an ascending chain of radicals √I_1⊆√I_2⊆⋯, so stabilises.

Every open subset is then quasi-compact. Directly, write U=⋃_αD(f_α), and let I=(f_α). Finite generation of I, followed by expressing its finite generators using finitely many f_α, gives a finite subfamily generating the same ideal. Its D(f_α) already cover U. Any open cover of U refines to basic opens inside U, so also has a finite subcover.

Every closed subset has finitely many irreducible components. If a counterexample existed, the descending-chain condition would give a minimal closed counterexample. It could not be irreducible, so would be a union of two proper closed subsets. Minimality gives finite irreducible decompositions of both, a contradiction. Removing redundant members gives the maximal irreducible closed subsets. They are unique: an irreducible subset covered by finitely many closed subsets lies in one, by repeated use of irreducibility. Comparing two decompositions then matches their maximal members.

Their generic points are exactly the minimal primes over the defining ideal. Thus there are finitely many such primes in a Noetherian ring. The conclusion concerns minimal primes, not all prime ideals: Z has infinitely many maximal primes despite being Noetherian.

**Proposition 5.7.** The nilradical of a Noetherian ring is nilpotent as an ideal.

*Proof.* Write √(0)=(a_1,…,a_r) with a_i^(n_i)=0. In a product of N=1+Σ_i(n_i−1) generators, at least one a_i occurs n_i times, so the product is zero. Expanding arbitrary products of N ideal elements as sums of those monomials shows (√0)^N=0. If the ideal is zero, exponent one suffices. ∎

Being an ideal of nilpotent elements does not imply a uniform exponent without finite generation. The proof identifies the exact additional input.

A Noetherian spectrum does not conversely force a Noetherian ring. Let
$$A=k[x_1,x_2,\ldots]/(x_ix_j:\ i,j\geq1).$$
Every element is uniquely a scalar plus a finite k-linear combination of the x_i, and the ideal 𝔫 spanned by the variables has square zero. Every prime contains 𝔫, while A/𝔫≅k, so Spec A has exactly one point and is Noetherian as a topological space.

The ring A is not Noetherian. Multiplying a variable combination by a scalar-plus-variable element only multiplies it by the scalar, since all products of variables vanish. Therefore finitely many generators of 𝔫 would span only a finite-dimensional k-subspace, whereas the classes x_i are linearly independent. Thus 𝔫 is not finitely generated. The example isolates information in a nilpotent ideal that the spectrum's topology cannot control.

Noetherianity need not pass to a subring. Inside the polynomial ring k[x,y], consider R=k+xk[x,y], consisting of a scalar plus a polynomial divisible by x. This is a subring because sums and products retain that form. Its ideal I=xk[x,y] has square x²k[x,y]. Modulo that square, the classes x,xy,xy² and all later powers of y times x are linearly independent over k. They span I/I², and the R-action on this quotient factors through R/I=k. If I had finitely many R-generators, their images would span this quotient over k, contradicting its infinite dimension. Thus R is not Noetherian although the containing two-variable polynomial ring is. Quotients, finite polynomial adjunctions and localisations have the proved preservation properties, while arbitrary subrings require their own argument.

## 7. Exercises

### CA-05-01 — A finitely presented module

Prove a finitely generated module over a Noetherian ring has a finite presentation.

<details>
<summary>Hint 1</summary>

Choose a surjection R^n→M.

</details>
<details>
<summary>Hint 2</summary>

Its kernel is a submodule of a Noetherian module.

</details>
<details>
<summary>Full solution</summary>

A finite generating set defines R^n→M surjective. Finite free R^n is Noetherian by the exact-sequence criterion and induction, so its kernel is finitely generated. Map R^m onto that kernel using finite generators and compose with inclusion. This gives an exact presentation R^m→R^n→M→0. The first map need not be injective.

</details>

### CA-05-02 — Localisation preserves Noetherianity

Prove S^(−1)R Noetherian when R is.

<details>
<summary>Hint 1</summary>

Every localised ideal is extended from its contraction.

</details>
<details>
<summary>Hint 2</summary>

Extend a finite generating set of that contraction.

</details>
<details>
<summary>Full solution</summary>

For J≤S^(−1)R let I be its contraction. Choose I=(a_1,…,a_n). The ideal-extension correspondence gives J=S^(−1)I=(a_1/1,…,a_n/1). Hence every ideal of the localisation is finitely generated, proving it Noetherian. No assertion that extension and contraction preserve every original ideal unchanged is needed.

</details>

### CA-05-03 — Infinite variables

Exhibit a strictly ascending ideal chain in k[x_1,x_2,…].

<details>
<summary>Hint 1</summary>

Adjoin one variable to the generating list at each step.

</details>
<details>
<summary>Hint 2</summary>

Set the previous variables to zero to prove strictness.

</details>
<details>
<summary>Full solution</summary>

The chain (x_1)<(x_1,x_2)<⋯ is strictly ascending. The new variable x_(n+1) cannot belong to the previous ideal because the map setting x_1,…,x_n to zero kills that ideal and not x_(n+1). Thus the ring is not Noetherian. Hilbert's finite-variable hypothesis cannot be discarded.

</details>

### CA-05-04 — Where the low degrees enter

For I=(2x²,x³) in Z[x], explain why x³ alone cannot generate I despite its leading coefficient generating the full coefficient ideal.

<details>
<summary>Hint 1</summary>

Compare the degree of 2x².

</details>
<details>
<summary>Hint 2</summary>

A nonzero multiple of x³ has no term of degree below three.

</details>
<details>
<summary>Full solution</summary>

Every polynomial multiple of x³ has all its terms divisible by x³, so cannot equal the nonzero degree-two polynomial 2x². The leading coefficient one of x³ controls reductions in degrees at least three, but says nothing about that lower-degree element. The separate finite R-module of low-degree remainders supplies 2x² as an additional generator.

</details>

### CA-05-05 — Nakayama with a quotient

If M is finitely generated and I⊆Jac(R), prove M=N from M=N+IM.

<details>
<summary>Hint 1</summary>

Pass to M/N.

</details>
<details>
<summary>Hint 2</summary>

Its I-multiple is the whole quotient.

</details>
<details>
<summary>Full solution</summary>

The quotient is finitely generated and I(M/N)=(IM+N)/N=M/N. Nakayama's zero conclusion gives M/N=0, hence M=N. No finite-generation hypothesis on N itself was required, and the ring need not be Noetherian for this argument.

</details>

### CA-05-06 — Residue generators

For a finitely generated module over a local ring, show lifts of a residue-field basis of M/𝔪M generate M.

<details>
<summary>Hint 1</summary>

Let N be the span of the lifts.

</details>
<details>
<summary>Hint 2</summary>

Their residue spanning gives M=N+𝔪M.

</details>
<details>
<summary>Full solution</summary>

For each m∈M, its residue is a linear combination of the chosen basis residues. Lift the field coefficients to R and subtract the corresponding combination of lifted generators. The difference lies in 𝔪M. Thus M=N+𝔪M, and Nakayama gives M=N. Every generating set must span the same quotient, so its cardinality is at least that basis dimension.

</details>

### CA-05-07 — A necessary hypothesis

For M=Q over Z_(p), verify pM=M and explain why this does not contradict Nakayama.

<details>
<summary>Hint 1</summary>

Divide each rational number by p.

</details>
<details>
<summary>Hint 2</summary>

A finite set of rational generators has bounded denominator p-valuation.

</details>
<details>
<summary>Full solution</summary>

For q∈Q, q=p(q/p), so pQ=Q. But Q is not finitely generated over Z_(p): denominators of finitely many generators use bounded powers of p, and coefficients with denominators coprime to p cannot increase that bound. Fractions 1/p^n eventually lie beyond it. Nakayama requires finite generation, so the nonzero module is consistent with the theorem.

</details>

### CA-05-08 — Proper is not enough

Check IM=M for I=(2)⊂Z and M=Z/3Z, and identify the failed hypothesis.

<details>
<summary>Hint 1</summary>

Two is a unit modulo three.

</details>
<details>
<summary>Hint 2</summary>

The Jacobson radical of Z is zero.

</details>
<details>
<summary>Full solution</summary>

Multiplication by two permutes Z/3Z and has inverse multiplication by two, so IM=M. The module is nonzero and finite. The failed hypothesis is I⊆Jac(Z): the intersection of all maximal ideals (p) is zero, since a nonzero integer has only finitely many prime divisors. Hence (2) is proper but not a Jacobson-radical ideal.

</details>

### CA-05-09 — A nilpotence bound

If the nilradical is generated by a,b with a³=b⁴=0, give an exponent killing the whole ideal.

<details>
<summary>Hint 1</summary>

Consider degree-six monomials in a,b.

</details>
<details>
<summary>Hint 2</summary>

Avoiding a³ and b⁴ would permit total degree at most two plus three.

</details>
<details>
<summary>Full solution</summary>

Every degree-six monomial a^i b^(6−i) has either i≥3 or 6−i≥4. Thus each vanishes. Expanding products of six arbitrary elements of (a,b) shows (a,b)^6=0. This is the bound 1+(3−1)+(4−1)=6; a smaller exponent may work in a particular ring, but this one follows from the given relations alone.

</details>

### CA-05-10 — Finitely many components, many primes

Explain why finite irreducible decomposition of Spec Z does not imply finitely many primes.

<details>
<summary>Hint 1</summary>

Spec Z is already irreducible.

</details>
<details>
<summary>Hint 2</summary>

Its generic point and its closed primes play different roles.

</details>
<details>
<summary>Full solution</summary>

Since Z is a domain, Spec Z is irreducible with generic point (0), so has exactly one irreducible component. It nevertheless has a distinct maximal ideal (p) for every positive prime p. Components correspond to minimal primes, not all primes. Noetherianity makes the former finite while allowing infinitely many specialisations inside a component.

</details>

### CA-05-11 — Noetherian is not Artinian

Give a descending ideal chain in Z that does not stabilise.

<details>
<summary>Hint 1</summary>

Use increasing powers of two.

</details>
<details>
<summary>Hint 2</summary>

The generator 2^n is not divisible by 2^(n+1).

</details>
<details>
<summary>Full solution</summary>

The chain (2)>(4)>(8)>⋯ is strictly descending: 2^n belongs to (2^n) but not (2^(n+1)). Z is Noetherian because every ideal is principal, so its ascending chains stabilise, yet its descending chains need not. The Artinian condition studied later asks for descending-chain termination and is a different finiteness property.

</details>

### CA-05-12 — Determinant annihilation

If M is generated by m_1,m_2 with m_1=am_1+bm_2 and m_2=cm_1+dm_2, show [(1−a)(1−d)−bc]M=0.

<details>
<summary>Hint 1</summary>

Form the 2×2 relation matrix I−A.

</details>
<details>
<summary>Hint 2</summary>

Multiply by its adjugate without assuming the generators independent.

</details>
<details>
<summary>Full solution</summary>

The column of generators is killed by [[1−a,−b],[−c,1−d]]. Its adjugate product is the scalar determinant [(1−a)(1−d)−bc] times I. Thus that determinant kills both generators and hence every R-linear combination. If a,b,c,d lie in a Jacobson-radical ideal, the determinant is a unit of the form 1+i, giving M=0. No matrix inverse on a free basis was assumed.

</details>

## 8. Summary and next connection

Noetherianity turns ideal and submodule control into finite data. Hilbert's theorem preserves that control through finite polynomial extensions, while the determinant trick and Nakayama identify efficient local generators. Spectra gain finite irreducible decompositions, and nilpotents gain a uniform ideal exponent. The next chapter uses these tools to build [primary decompositions](primary-decomposition.md), retaining information beyond an ideal's radical.
