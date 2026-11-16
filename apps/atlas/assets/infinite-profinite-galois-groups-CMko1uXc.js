var e=`---
parent_id: book-galois-theory
chapter_id: infinite-profinite-galois-groups
title: "Infinite and Profinite Galois Groups"
level: graduate
license: CC BY-SA 4.0
---

# Infinite and Profinite Galois Groups

An infinite algebraic extension can be assembled from finite pieces, but its automorphism group carries information that finite group order cannot express. Finite restrictions give a topology, and compatible automorphisms of all finite pieces reconstruct an automorphism of the whole field. The result is a profinite group.

The fixed-field correspondence also changes its statement. Every intermediate field still determines a subgroup, but an arbitrary subgroup can have the same fixed field as a larger subgroup. The exact partner is its topological closure. We prove the closed-subgroup version and give explicit dense proper subgroups showing why closedness cannot be omitted.

The algebraic prerequisites are the finite correspondence and embedding-extension arguments. For topology, we explicitly use compactness of arbitrary products of finite discrete spaces, a form of the product compactness theorem. We do not derive that topological input from finite cardinalities. The extension argument below uses Zorn's lemma as a choice principle. These are declared foundations, while the field-group conclusions are proved here.

## 1. Algebraic, normal and separable are still separate hypotheses

**Definition 13.1 (Infinite Galois extension).** An extension E/F is Galois in this chapter if it is algebraic, normal and separable, with no finiteness assumption. Normal means that every irreducible polynomial over F having one root in E splits there. Separable means every element has a separable minimal polynomial.

Every finite set of elements of E lies in a finite Galois subextension L/F inside E. Take the product of their minimal polynomials over F. They are separable, and normality puts all their roots in E. Adjoining those finitely many roots gives the required finite splitting field. Composita of two such subextensions are again finite Galois. Thus they form a directed family whose union is E.

This family includes normal closures of all finite intermediate fields. A finite field K between F and E need not itself be normal over F, but some finite Galois L in the family contains it. That cofinality will let us describe every finite condition using normal finite pieces.

**Lemma 13.2 (Extension of algebraic embeddings).** An F-embedding of an intermediate field K⊆E into an algebraic closure extends to an embedding of E. If E/F is normal, the extended map is an automorphism of E.

*Proof.* Order partial extensions by inclusion of their intermediate domains. A chain has an upper bound given by the union of its domains and compatible maps; the union is a field and the map is an embedding. Zorn's lemma supplies a maximal partial extension.

If its domain M is not E, choose α∈E\\M. The element is algebraic over M. Apply the current embedding to the coefficients of its irreducible minimal polynomial, and choose a root in the algebraically closed target. The irreducible-quotient construction extends the embedding to M(α), contradicting maximality. Hence the domain is E.

Normality puts the image of every element of E back in E, because its image is another root of its minimal polynomial over F. To prove surjectivity, take any α∈E and consider the finite set of all roots of its minimal polynomial. The embedding sends that set injectively into itself, hence permutes it. In particular α has a preimage among those roots. Every element therefore lies in the image. ∎

The final step uses finite conjugate sets even though the whole field is infinite. Injectivity alone is not a general surjectivity argument for infinite sets.

## 2. Finite restrictions define the Krull topology

Let G=Gal(E/F). For each finite Galois L/F inside E, put U_L=Gal(E/L). Restriction gives
$$
G/U_L\\cong\\operatorname{Gal}(L/F).
$$
It is surjective by Lemma 13.2 and has the displayed kernel. The subgroup U_L is normal and has finite index.

**Definition 13.3 (Krull topology).** The cosets σU_L form a basis of open sets. Finite intersections refine this basis because U_{L_1L_2}=U_{L_1}∩U_{L_2}.

Every U_L is both open and closed: its complement is a union of other open cosets. The topology is Hausdorff. If σ≠τ, they differ on some α. A finite Galois L containing α separates their restriction coordinates and hence their cosets.

It is a topological group. To keep a product inside στU_L, take the neighborhoods σU_L and τU_L. Normality lets their product remain inside στU_L. Inversion carries σU_L to σ^{-1}U_L, again using normality. These basis computations prove continuity rather than assuming it from the group notation.

The stabilizer of a single element α is also open and closed. Choose finite Galois L containing it; the stabilizer is the inverse image of the subgroup fixing α in Gal(L/F). The same holds for any finite tuple. Thus the topology says exactly that finitely many algebraic values are prescribed, not that field elements are numerically close.

## 3. Compatible finite automorphisms reconstruct the whole group

**Definition 13.4 (Inverse limit).** Order finite Galois subextensions by inclusion. Their inverse limit is the set of families
$$
(\\sigma_L)_L\\in\\prod_L\\operatorname{Gal}(L/F)
$$
satisfying σ_M|_L=σ_L whenever L⊆M. Each finite factor has the discrete topology, and the limit has the subspace topology.

**Theorem 13.5 (Profinite realization).** Restriction is a topological group isomorphism
$$
G\\cong\\varprojlim_L\\operatorname{Gal}(L/F).
$$
In particular G is compact and Hausdorff.

*Proof.* Restriction produces compatible coordinates. If all coordinates of two automorphisms agree, they agree on every element because E is the union of the finite pieces. Thus the map is injective.

Given a compatible family, define σ(α)=σ_L(α) for any finite Galois L containing α. If another piece is used, pass to their compositum and apply compatibility; the answer is unchanged. Sums, products and inverses can all be checked in one finite piece containing their inputs, so σ is an F-embedding. The coordinate inverses form a compatible family as well, since the finite pieces are preserved by their automorphisms. They define the inverse map on E. Hence σ is an automorphism, proving surjectivity.

A basic restriction condition in the limit is exactly a Krull coset, so this bijection and its inverse are continuous. The limit is closed in the product: each compatibility equation equates two continuous finite-valued coordinates and defines a closed set. Each finite discrete factor is compact. The explicitly imported product compactness theorem makes the arbitrary product compact, and its closed inverse-limit subset is compact. The product and its subset are Hausdorff because distinct coordinates can be separated. ∎

This is the meaning of profinite here: an inverse limit of finite discrete groups, with the topology that makes the reconstruction valid. An abstract group having many finite quotients is not thereby identified with their inverse limit; one still needs injectivity, compatibility and surjectivity of the reconstruction.

## 4. Why closure appears in the fixed-field theorem

For any subgroup H≤G, let E^H be its fixed field, and write cl(H) for its topological closure.

**Proposition 13.6.** One has E^H=E^{cl(H)}. For any intermediate field K, the subgroup Gal(E/K) is closed.

*Proof.* If α is fixed by H, then H lies in its closed stabilizer. The closure therefore lies in that stabilizer and also fixes α. The reverse fixed-field inclusion follows from H⊆cl(H). For K, the fixing subgroup is the intersection over α∈K of their closed stabilizers, hence is closed. ∎

**Theorem 13.7 (Infinite Galois correspondence).** For algebraic Galois E/F, the maps
$$
K\\longmapsto\\operatorname{Gal}(E/K),\\qquad
H\\longmapsto E^H
$$
are inverse inclusion-reversing bijections between intermediate fields and closed subgroups of G.

*Proof.* First E/K is Galois for every intermediate K. It is algebraic and separable because minimal polynomials over K divide the corresponding separable polynomials over F. It is normal because it is the union of the fields KL, where L/F runs through finite splitting fields inside E; each KL is a splitting field over K of the same base polynomials. Thus every element lies in a normal finite extension of K and its K-minimum splits inside E.

If α∉K, its separable minimum over K has degree at least two and has another root β∈E. The embedding K(α)→E sending α to β extends by Lemma 13.2, now over K, to an automorphism of E. Hence α is not fixed by every K-automorphism. This proves E^{Gal(E/K)}=K.

Now let H be closed and suppose σ∉H. Its complement is open, so some basic coset σU_L is disjoint from H. In the finite group Gal(L/F), the restriction σ|_L therefore lies outside the image H_L of H. Finite Galois correspondence supplies α∈L^{H_L} moved by σ|_L: otherwise σ|_L would belong to Gal(L/L^{H_L})=H_L. Such α is fixed by H but not by σ. Thus σ∉Gal(E/E^H). We have proved that every element outside H is outside that fixing subgroup, while the opposite containment H⊆Gal(E/E^H) is immediate. Equality follows.

Both constructions reverse inclusion directly from their definitions. Together with the proved equalities, this establishes the bijections. ∎

For a subgroup that is not closed, its recovered fixing group is cl(H), not H. That is a precise replacement statement, not simply a warning that the finite proof “may fail.”

## 5. Finite degrees, open subgroups and normal quotients

**Theorem 13.8 (Open subgroup and degree).** Under the correspondence, K/F is finite exactly when Gal(E/K) is open. In that case
$$
[K:F]=[G:\\operatorname{Gal}(E/K)].
$$

*Proof.* If K/F is finite, choose finite Galois L/F containing K. Its fixing subgroup in G is the inverse image of Gal(L/K) under restriction. It is open, and surjectivity of restriction identifies its index with [Gal(L/F):Gal(L/K)]=[K:F].

Conversely if H is open, it contains some U_L. Then E^H⊆E^{U_L}=L, so its fixed field is finite over F. The equality E^{U_L}=L is the already proved inverse correspondence for the intermediate field L. ∎

A closed subgroup of finite index is open: its other finitely many cosets are closed, so their union is closed and its complement is H. Thus for the corresponding closed subgroups, finite index, openness and finite fixed-field degree agree. The formula does not extend to arbitrary infinite degrees by replacing numbers with group cardinalities.

**Theorem 13.9 (Normal correspondence).** A closed subgroup H is normal in G exactly when K=E^H is Galois over F. In that case restriction induces a topological isomorphism
$$
G/H\\cong\\operatorname{Gal}(K/F).
$$

*Proof.* Conjugation of H by σ has fixed field σ(K), as follows by applying the two actions to each element. The correspondence therefore gives normality exactly when every σ∈G preserves K. Every F-embedding of K into the algebraic closure extends to E by Lemma 13.2, and normality of E keeps its image in E. Thus the preservation condition is exactly normality of K/F. Separability and algebraicity are inherited, so it is equivalent to being Galois.

When K/F is Galois, restriction lands in Gal(K/F), has kernel H and is onto by embedding extension. It is continuous because fixing any finite set in K is a Krull-open condition in G. The induced bijection from the quotient is continuous. The quotient is compact as a continuous image of compact G, while the target is Hausdorff by its Krull topology. A continuous bijection from a compact space to a Hausdorff space is a homeomorphism: images of closed sets are compact and hence closed. This proves the topological claim. ∎

## 6. Frobenius becomes a profinite generator

**Worked example 13.1 (The algebraic closure of a finite field).** Let E be the algebraic closure of F_q. It is the union of all F_{q^n}: every algebraic element generates a finite field, and every finite field consists of elements algebraic over the base. On F_{q^n}, an automorphism is a power of q-Frobenius, with exponent defined modulo n. Restriction from degree m to degree n for n|m reduces that exponent modulo n. Hence
$$
\\operatorname{Gal}(E/\\mathbb F_q)\\cong
\\widehat{\\mathbb Z}:=\\varprojlim_n\\mathbb Z/n\\mathbb Z.
$$

An element of the limit is a compatible system of residues, not generally one ordinary integer. An integer a gives the family a mod n and corresponds to the automorphism σ^a, where σ(x)=x^q. The negative powers exist because Frobenius is bijective on every finite field and therefore on their union.

**Worked example 13.2 (A dense subgroup with the same fixed field).** The subgroup generated by σ is isomorphic to Z because σ has infinite order: its order on degree-n fields is n for arbitrarily large n. Its image is onto every quotient Z/n, so every basic open coset in the profinite group contains some power of σ. Thus this cyclic subgroup is dense.

Its fixed field is F_q, since σ(x)=x exactly when x is a root of X^q−X. Its closure is the full group, which has the same fixed field by the correspondence. The subgroup is nevertheless proper.

To verify properness explicitly, the profinite group is uncountable. For any infinite binary sequence, use its first a bits to specify a residue modulo 2^a. For each n=2^a m with m odd, combine that residue with zero modulo m using CRT. These choices form a compatible family over all n; distinct binary sequences differ in some 2-power coordinate. There are uncountably many binary sequences, while the powers of σ form a countable group. This supplies a concrete proper dense subgroup, not just an abstract possibility.

## 7. A prime-power tower and its closed subgroups

**Worked example 13.3 (A pro-ℓ extension).** Fix a prime ℓ and put
$$
E_\\ell=\\bigcup_{r\\ge0}\\mathbb F_{q^{\\ell^r}}.
$$
The extension is algebraic Galois, with group
$$
\\mathbb Z_\\ell=\\varprojlim_r\\mathbb Z/\\ell^r\\mathbb Z.
$$
Here ℓ need not differ from the field characteristic: these are degrees and automorphism exponents, not Kummer power equations.

The closed subgroups are 0 and ℓ^sZ_ℓ for s≥0. To prove this, let H be a nonzero closed subgroup. A nonzero element h has a finite ℓ-adic valuation, the least s for which it is divisible by ℓ^s but not ℓ^{s+1}. Choose the least such valuation among elements of H, which exists by well-ordering. Write h=ℓ^s u with u a unit.

Ordinary integers are dense in Z_ℓ because they cover every finite residue class. Multiplication by u is a homeomorphism: its inverses modulo ℓ^r are compatible and define the inverse unit. Hence the closure of the integer multiples of h is ℓ^sZ_ℓ. Since H is closed, it contains that subgroup. Minimality of s puts all elements of H in the same subgroup, so equality follows.

Its fixed field has degree ℓ^s and is F_{q^{\\ell^s}}. The zero subgroup fixes all E_ℓ. This gives a complete infinite correspondence in which all proper finite stages occur and the limiting field corresponds to a closed subgroup that is not open.

## 8. Many independent quadratic directions

**Worked example 13.4 (A product of sign groups).** Let
$$
E=\\mathbb Q(\\sqrt p:p\\text{ a positive rational prime}).
$$
Any finite selection of prime square classes is independent: an integer product with exponents zero or one can be a rational square only when every prime valuation is even. Kummer theory gives degree 2^r for r selected primes and all independent sign changes.

Passing to the union, every assignment of a sign to every prime defines compatible automorphisms of the finite subfields and hence an automorphism of E. Conversely an automorphism is determined by those signs. Therefore
$$
\\operatorname{Gal}(E/\\mathbb Q)\\cong\\prod_p C_2
$$
with the product topology. The extension is normal because it contains both roots of every defining quadratic and is the union of their finite splitting fields.

The subgroup of sign choices that are nontrivial at only finitely many primes is dense: any finite coordinate prescription is realized by such a choice. It is proper because the assignment negative at every prime has infinite support. Its fixed field is Q, since for any element only finitely many square roots are needed, and every sign change on that finite field is supplied by a finite-support automorphism.

This example also separates infinite degree from group size. The field is a countable union of finite extensions generated by finite prime sets, hence is countable. Its degree over Q is countably infinite, since the finite degrees 2^r are unbounded. The sign group is uncountable, as binary sequences give distinct sign assignments. Thus [E:Q] cannot be identified with |Gal(E/Q)| as an infinite-cardinal version of the finite equality.

## 9. What finite approximations retain

An automorphism can be specified coherently at every finite level without being an integer power of one global generator. A subgroup can meet every finite quotient surjectively without being the whole group, unless it is also closed. These are two ways that finite approximations must be paired with topology.

For a particular element, only one finite stage is needed to decide a fixing condition. For a whole intermediate field, possibly infinitely many conditions must hold, and their intersection is closed. This is why fields correspond naturally to closed subgroups. The topology records exactly those finite algebraic observations.

The infinite theorem therefore extends the finite correspondence by changing its objects and its degree statement carefully. It preserves inclusion reversal, normal quotients and finite-index calculations, but it does not identify every abstract subgroup or replace infinite degrees by raw group cardinalities.

## Exercises

### Exercise 13.1
<a id="infinite-profinite-galois-groups-ex-1"></a>

Show that every finite subset of an algebraic Galois extension lies in a finite Galois subextension.

<details>
<summary>Hint 1</summary>

Use the minimal polynomials of its elements.

</details>

<details>
<summary>Hint 2</summary>

Adjoin all their conjugate roots, which normality keeps inside E.

</details>

<details>
<summary>Solution</summary>

The product of the finitely many minimal polynomials has finitely many roots and is built from separable factors. Normality puts every root in E. Their splitting field over F is finite, normal and separable, contains the original elements and lies in E. Thus it supplies the required finite Galois stage.

</details>

### Exercise 13.2
<a id="infinite-profinite-galois-groups-ex-2"></a>

Why is U_L both open and closed in the Krull topology?

<details>
<summary>Hint 1</summary>

Its cosets are basic open sets.

</details>

<details>
<summary>Hint 2</summary>

Express its complement as other cosets.

</details>

<details>
<summary>Solution</summary>

By definition U_L is a basic identity neighborhood. Every coset is open, and its complement is the union of all other cosets, so the complement is open and U_L is closed. Surjective finite restriction also shows there are only finitely many such cosets, although that finiteness is not needed just for the complement argument.

</details>

### Exercise 13.3
<a id="infinite-profinite-galois-groups-ex-3"></a>

Prove that compatible finite restrictions define a well-defined map on E.

<details>
<summary>Hint 1</summary>

An element may belong to two different finite stages.

</details>

<details>
<summary>Hint 2</summary>

Use their finite Galois compositum.

</details>

<details>
<summary>Solution</summary>

If α lies in L and M, place both in LM. Compatibility identifies σ_L(α) and σ_M(α) with the restriction of σ_LM(α), so they agree. The same common-stage argument verifies sums and products, and the compatible inverse family proves bijectivity.

</details>

### Exercise 13.4
<a id="infinite-profinite-galois-groups-ex-4"></a>

Why must an arbitrary subgroup and its closure have the same fixed field?

<details>
<summary>Hint 1</summary>

The stabilizer of one algebraic element is closed.

</details>

<details>
<summary>Hint 2</summary>

Containment in that stabilizer survives closure.

</details>

<details>
<summary>Solution</summary>

If α is fixed by H, then H lies in the closed stabilizer of α. Hence cl(H) also lies there and fixes α. Conversely H⊆cl(H), so any element fixed by the closure is fixed by H. The fixed fields are therefore equal.

</details>

### Exercise 13.5
<a id="infinite-profinite-galois-groups-ex-5"></a>

For closed H and σ outside H, explain the finite witness used in the correspondence proof.

<details>
<summary>Hint 1</summary>

Choose a basic coset about σ disjoint from H.

</details>

<details>
<summary>Hint 2</summary>

Apply finite correspondence to the image of H on that stage.

</details>

<details>
<summary>Solution</summary>

Closedness makes the complement open, so some σU_L avoids H. The restriction σ|_L lies outside H_L. Finite correspondence gives α in the fixed field L^{H_L} that σ moves. This α is fixed by all H but not by σ, excluding σ from Gal(E/E^H).

</details>

### Exercise 13.6
<a id="infinite-profinite-galois-groups-ex-6"></a>

Show that an open fixing subgroup has a finite fixed field.

<details>
<summary>Hint 1</summary>

It contains some U_L.

</details>

<details>
<summary>Hint 2</summary>

Reverse the fixed-field containment.

</details>

<details>
<summary>Solution</summary>

If U_L⊆H, then E^H⊆E^{U_L}=L. Since L/F is finite, its subfield E^H is finite over F. This uses the established fixed-field equality for U_L and does not assume every abstract finite-index subgroup is open.

</details>

### Exercise 13.7
<a id="infinite-profinite-galois-groups-ex-7"></a>

What is Gal(F_qbar/F_q) as a topological group?

<details>
<summary>Hint 1</summary>

Use all finite fields F_{q^n}.

</details>

<details>
<summary>Hint 2</summary>

Restriction reduces a Frobenius exponent modulo a divisor.

</details>

<details>
<summary>Solution</summary>

It is the inverse limit of Z/nZ under the divisibility restriction maps, namely Zhat. A compatible family of residues determines the automorphism on each finite field and hence on their union. The topology is the inverse-limit topology, whose basic conditions specify finitely many such restrictions.

</details>

### Exercise 13.8
<a id="infinite-profinite-galois-groups-ex-8"></a>

Prove that the ordinary Frobenius powers are dense but do not exhaust that group.

<details>
<summary>Hint 1</summary>

They cover every finite cyclic quotient.

</details>

<details>
<summary>Hint 2</summary>

Compare their cardinality with the binary-sequence construction.

</details>

<details>
<summary>Solution</summary>

Every finite restriction is realized by a suitable integer exponent, so the powers meet every basic open coset and are dense. There are only countably many integer exponents, while compatible binary 2-power residues and CRT produce uncountably many profinite exponents. Thus the dense cyclic subgroup is proper.

</details>

### Exercise 13.9
<a id="infinite-profinite-galois-groups-ex-9"></a>

For E_ℓ/F_q, identify the field fixed by ℓ³Z_ℓ.

<details>
<summary>Hint 1</summary>

The subgroup has index ℓ³.

</details>

<details>
<summary>Hint 2</summary>

Use uniqueness of the relevant finite field.

</details>

<details>
<summary>Solution</summary>

The subgroup is open of index ℓ³, so its fixed field has degree ℓ³ over F_q. The tower contains the unique such field F_{q^{ℓ³}}, whose fixing subgroup is precisely ℓ³Z_ℓ by the finite restriction description.

</details>

### Exercise 13.10
<a id="infinite-profinite-galois-groups-ex-10"></a>

In the multiquadratic example, why does every infinite sign assignment define an automorphism?

<details>
<summary>Hint 1</summary>

Any one field element uses only finitely many square roots.

</details>

<details>
<summary>Hint 2</summary>

Check compatibility on overlapping finite selections.

</details>

<details>
<summary>Solution</summary>

On each finite selection the independent sign choices define an automorphism by Kummer theory. Restrictions to smaller selections agree because the signs on shared generators agree. The inverse-limit reconstruction therefore gives one automorphism of the union. Since signs are their own inverses, bijectivity also follows directly.

</details>

### Exercise 13.11
<a id="infinite-profinite-galois-groups-ex-11"></a>

Explain why the finite equality [E:F]=|Gal(E/F)| has no direct infinite-cardinal extension.

<details>
<summary>Hint 1</summary>

Compare the multiquadratic field with its sign group.

</details>

<details>
<summary>Hint 2</summary>

The field has countable dimension, while the group has one coordinate per prime.

</details>

<details>
<summary>Solution</summary>

The multiquadratic field is a countable union of finite extensions and has unbounded finite subdegrees, so its vector-space degree is countably infinite. Its automorphism group is the product of countably many two-element groups and is uncountable. The two cardinalities differ, although the extension is algebraic Galois.

</details>

### Exercise 13.12
<a id="infinite-profinite-galois-groups-ex-12"></a>

State the correct subgroup side of infinite Galois correspondence and its normal quotient clause.

<details>
<summary>Hint 1</summary>

Include the topology and closedness.

</details>

<details>
<summary>Hint 2</summary>

Restriction has kernel H and is onto when its fixed field is Galois.

</details>

<details>
<summary>Solution</summary>

Intermediate fields correspond to closed subgroups of the Krull-topologized Galois group. A closed H is normal exactly when its fixed field K is Galois over F; restriction then gives G/H≅Gal(K/F) as topological groups. For a nonclosed subgroup the recovered fixing group is its closure, so omitting closedness changes the theorem.

</details>

## Sources

J. S. Milne's author-hosted [Fields and Galois Theory, version 5.10](https://www.jmilne.org/math/CourseNotes/FT.pdf), the infinite Galois chapter, is complementary primary reading. The compactness of arbitrary products of finite discrete spaces is an explicit topological input; Zorn's lemma is used explicitly in embedding extension. The finite-field inverse limits, sign-group example and correspondence arguments are developed here without claiming a proof of those foundational choice/compactness principles.

## Summary

An algebraic Galois extension is the directed union of finite Galois pieces, and compatible finite automorphisms reconstruct its compact Hausdorff profinite group. Intermediate fields correspond exactly to closed subgroups. Open subgroups detect finite degrees, and closed normal subgroups give topological Galois quotients. Dense proper subgroups and countable-degree examples show why closure and topology cannot be omitted from the infinite theorem.
`;export{e as default};