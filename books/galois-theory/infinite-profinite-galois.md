
# Infinite and Profinite Galois Groups

An infinite algebraic extension cannot be recovered from an arbitrary abstract subgroup diagram alone. Automorphisms have a topology: agreement on finitely many algebraic elements is a neighbourhood condition. Closed subgroups, rather than every subgroup, are the objects corresponding bijectively to intermediate fields.

Read the [finite correspondence](fundamental-theorem-galois-theory.md), [finite fields](finite-fields-galois-groups.md) and [cyclotomic fields](cyclotomic-fields-polynomials.md). This L4 continuation also requires product topology, compactness, the finite-intersection formulation of compactness and Zorn’s lemma. The compactness of products of compact spaces is used as the explicit topological input Tychonoff’s theorem; it is not proved here. For topology preparation use [Topology: Proof and Counterexample](#/books/topology-proof-counterexample). All extensions in this chapter are algebraic.

## 1. Normality, separability and extension of embeddings

**Definition 13.1.** An algebraic extension L/F is Galois if it is normal and separable. Normal means every irreducible polynomial over F with a root in L splits in L. Separable means every element has separable minimal polynomial. No finite-degree requirement is imposed in this chapter's use of Galois.

Every finite subset of a Galois extension lies in a finite Galois subextension. Take the minimal polynomials of its elements and adjoin all their roots, which belong to L by normality. There are finitely many algebraic roots, so the generated field is finite; it is a separable splitting field. Composita of two such fields give another one. Thus the finite Galois subextensions form a directed family with union L.

**Lemma 13.2 (Algebraic embedding extension).** Any embedding of an intermediate field K into an algebraically closed field Ω extends through the algebraic extension L/K to an embedding L→Ω. If the embedding fixes F and L/F is normal, its extension maps L onto L inside a common algebraic closure.

*Proof.* Order partial extensions by inclusion of their domains and agreement of their maps. A chain has a union field and a well-defined embedding, so Zorn’s lemma supplies a maximal partial extension. If its domain M omits α∈L, α is algebraic over M. Transport its irreducible minimal polynomial into Ω and choose a root there. The simple-extension evaluation construction extends the map to M(α), contradicting maximality. Hence its domain is L.

For the second assertion, an F-embedding sends each α to a root of its minimal polynomial over F. Normality puts that image in L. It permutes the finite root set of that polynomial injectively and hence bijectively. Every element of L is therefore the image of another root in L, so the embedding is onto. ∎

The final surjectivity argument replaces the finite-dimensional argument used earlier. An infinite-dimensional injective linear map need not be surjective; algebraicity and complete finite conjugate sets supply the needed reason here.

## 2. Compatible finite automorphisms

For finite Galois E⊆E′⊆L, restriction gives a surjective homomorphism Gal(E′/F)→Gal(E/F). Surjectivity follows from embedding extension and normality. A whole automorphism of L therefore determines a compatible family of finite automorphisms.

**Definition 13.3 (Inverse limit).** The inverse limit of these finite groups is the subgroup of their product consisting of families (σ_E) such that σ_E′ restricted to E equals σ_E whenever E⊆E′. Multiplication and inversion are coordinatewise.

**Theorem 13.4.** Restriction gives a group isomorphism
$$\operatorname{Gal}(L/F)\cong\varprojlim_{E/F\text{ finite Galois}}\operatorname{Gal}(E/F).$$

*Proof.* Restriction is a homomorphism and is injective because the finite subextensions have union L. Given a compatible family, define σ(a)=σ_E(a) in any finite Galois E containing a. If two fields contain a, a finite Galois compositum contains both, and compatibility makes their values agree. Thus the definition is independent of choice. To check addition and multiplication, place the finitely many involved elements in one finite subextension and use its automorphism there. The family of inverse maps is compatible as well, so the resulting map has an inverse and is an F-automorphism of L. This proves surjectivity. ∎

Compatibility is essential. Independent choices of automorphisms at different finite levels can disagree on their common elements and fail to define any map on the union.

## 3. The Krull topology

Give every finite Galois group the discrete topology and the product its product topology. Transport the subspace topology of the inverse limit to G=Gal(L/F). This is the Krull topology.

**Proposition 13.5.** A neighbourhood basis of the identity consists of
$$U_E=\operatorname{Gal}(L/E)$$
for finite Galois E/F. These are open normal subgroups of finite index. Their cosets are neighbourhoods of arbitrary automorphisms. The group is compact, Hausdorff and totally disconnected.

*Proof.* Specifying the identity value in a finite coordinate gives U_E. Finitely many coordinate conditions can be combined in their compositum, giving the asserted basis. Each U_E is the kernel of restriction onto a finite group, hence normal, open and of that finite index.

The compatibility equations define a closed subset of the product of finite discrete spaces. Each finite space is compact and Hausdorff, so Tychonoff and closed-subspace compactness give compactness. The product and its subspace are Hausdorff. A connected subset has connected image in every finite discrete coordinate, so each such image is a point. Coordinates separate points, hence the original connected subset contains at most one point. Thus G is totally disconnected. Group operations are continuous coordinatewise. ∎

A topological group obtained as an inverse limit of finite discrete groups is called profinite. A sequence, when used, converges if its restrictions eventually agree at every finite level. For general directed families the topology is defined by neighbourhoods, and need not be completely described by sequences. A subgroup's closure consists of automorphisms whose every finite restriction can be matched by some element of that subgroup.

## 4. The infinite correspondence

**Theorem 13.6 (Closed-subgroup correspondence).** For G=Gal(L/F), the maps
$$K\longmapsto\operatorname{Gal}(L/K),\qquad
H\longmapsto L^H$$
are inverse inclusion-reversing bijections between intermediate fields and closed subgroups of G. For any subgroup H, closed or not,
$$\operatorname{Gal}(L/L^H)=\overline H.$$

*Proof.* For an intermediate K, the fixing group is closed: it is the intersection of the stabilisers of its individual elements, each stabiliser being an open-and-closed finite-coordinate condition. The extension L/K is normal and separable. Indeed any K-embedding of L fixes F and hence preserves L, giving normality by conjugate extension; separability follows by divisibility of minimal polynomials. If a∈L is outside K, its separable minimal polynomial over K has a different conjugate root in L. The embedding sending a to that root extends to an automorphism of L fixing K. Hence a is not fixed by the fixing group, proving L^Gal(L/K)=K.

Now let H be any subgroup. If a is fixed by H, its closed stabiliser contains the closure of H, so a is fixed by that closure. Thus H and its closure have the same fixed field, and the closure lies in Gal(L/L^H).

For the reverse inclusion, suppose σ is outside the closure. Some finite Galois E/F has σ restricted to E outside the finite image H_E of H. The finite correspondence says there is an element a∈E^H_E not fixed by σ: otherwise σ|E would belong to Gal(E/E^H_E)=H_E. But a is fixed by H and hence belongs to L^H, so σ does not belong to Gal(L/L^H). This proves equality with the closure. Restricting to closed H gives the stated bijection. ∎

**Proposition 13.7 (Finite degrees).** An intermediate K/F is finite exactly when Gal(L/K) is open. In that case [K:F]=[G:Gal(L/K)].

*Proof.* If K/F is finite, place its generators in a finite Galois E/F. Then U_E is contained in Gal(L/K), making the latter open. Its index is the corresponding finite subgroup index in Gal(E/F), which equals [K:F]. Conversely an open fixing group contains some U_E, so its fixed field is contained in L^U_E=E and is finite. ∎

The familiar numerical degree/index formula has here been proved for finite degrees. It must not be promoted to an unrestricted identity of infinite cardinalities without further analysis. The topology and closed-subgroup statement are the reliable general formulation.

**Theorem 13.8 (Normal closed subgroups).** A corresponding field K/F is Galois exactly when its closed fixing subgroup H is normal in G. In that case restriction identifies Gal(K/F) with the topological quotient G/H.

*Proof.* The conjugation identity σ(L^H)=L^(σHσ⁻¹) is proved by the same elementwise calculation as in the finite case. The closed-subgroup bijection therefore makes normality of H equivalent to invariance of K under all F-automorphisms of L. Embedding extension turns that invariance into normality of K/F; separability is inherited. Restriction has kernel H and is onto by Lemma 13.2. It is continuous by the finite-coordinate definitions. The induced continuous bijection from the compact quotient G/H to the Hausdorff group Gal(K/F) is a homeomorphism. ∎

## 5. Three worked infinite extensions

**Example 13.9 (The algebraic closure of a finite field).** Let L be the union of all F_(qⁿ) inside a fixed closure of F_q. Finite levels have groups C_n generated by Frobenius φ(a)=a^q. When n divides m, restriction sends the exponent class modulo m to the class modulo n. Thus
$$\operatorname{Gal}(L/F_q)\cong\widehat{\mathbb Z}=\varprojlim_n\mathbb Z/n\mathbb Z.$$
Frobenius corresponds to the compatible residue class one. Its integer powers form a dense subgroup because they surject onto every finite cyclic quotient.

That subgroup is proper. For each n, the Chinese remainder theorem specifies a class that is one modulo the largest power of three dividing n and zero modulo the remaining coprime factor. These classes are compatible under reduction. They cannot come from one ordinary integer: the integer would be divisible by every power of two and hence zero, but would be one modulo three. This produces an element outside the integer-power subgroup.

Nevertheless the fixed field of integer powers is already F_q, because being fixed by φ means satisfying x^q=x. The full profinite group has the same fixed field. Without closedness, two different subgroups therefore correspond to one field. The group is procyclic, meaning generated topologically by one element; it is not cyclic as an abstract group of integer powers.

**Example 13.10 (A p-power finite-field tower).** Fix any prime p and put L=∪_(r≥0)F_(q^(pʳ)). Its group is the additive p-adic integer group Z_p=lim Z/pʳZ. This inverse-limit definition requires no metric construction of p-adic numbers.

Its closed subgroups are {0} and pˢZ_p for integers s≥0. To prove this, a nonzero closed subgroup has a least valuation s among its nonzero elements. Choose h=pˢu with u a unit. Units have compatible inverses modulo every pʳ, so multiplication by u is a homeomorphism. Integer multiples are dense in Z_p, hence the closure of the subgroup generated by h is pˢZ_p. Closedness puts that whole subgroup inside H, while minimal valuation puts H inside it. Thus equality holds.

The corresponding fields are L for {0} and F_(q^(pˢ)) for pˢZ_p. In this tower every proper intermediate field is finite. The finite levels still have unbounded degrees; their whole union is the one infinite field on the list.

**Example 13.11 (An infinite cyclotomic tower).** Let L=∪_(r≥1)Q(ζ_(pʳ)) with compatible roots. The finite groups are (Z/pʳZ)× and restriction is reduction, so
$$\operatorname{Gal}(L/\mathbb Q)\cong\mathbb Z_p^\times,$$
where the right side means compatible unit residue classes under multiplication. This is different from the additive group in the preceding example. Complex conjugation is the compatible class −1 and generates a closed order-two subgroup. Its fixed field is the union of the maximal real cyclotomic subfields, because an element lies at a finite level and is real exactly when conjugation fixes it. The real tower has quotient group Z_p×/{±1}. No further decomposition of this unit group is required for the correspondence.

## Exercises

### Exercise 13.1 — A compatible family
<a id="galois-profinite-ex-1"></a>

In lim Z/nZ, explain why the classes of a fixed integer form a compatible family and why arbitrary independent residues need not.

<details>
<summary>Hint</summary>

Compare reduction from modulus m to a divisor n.

</details>

<details>
<summary>Solution</summary>

A fixed integer a reduced modulo m then modulo n gives a modulo n whenever n divides m, so all compatibility equations hold. Independent choices can fail: residue zero modulo two and residue one modulo four disagree after reducing the latter modulo two. Such a pair cannot be restrictions of one automorphism in the finite-field inverse system. Compatibility is what makes a map on the union well-defined.

</details>

### Exercise 13.2 — Hausdorff separation
<a id="galois-profinite-ex-2"></a>

If σ≠τ in Gal(L/F), find a finite-coordinate condition separating them.

<details>
<summary>Hint</summary>

Choose an element where they differ and include it in a finite Galois subextension.

</details>

<details>
<summary>Solution</summary>

There is a∈L with σ(a)≠τ(a). Choose finite Galois E/F containing a. The restrictions to E differ, so the cosets σU_E and τU_E are distinct and disjoint open neighbourhoods. This proves separation using actual algebraic elements rather than an unspecified infinite distance between automorphisms.

</details>

### Exercise 13.3 — An open fixing group
<a id="galois-profinite-ex-3"></a>

Why is Gal(L/K) open when K/F is finite but not necessarily normal?

<details>
<summary>Hint</summary>

Put the finitely many generators in a finite Galois field E.

</details>

<details>
<summary>Solution</summary>

A finite generating set of K is contained in finite Galois E/F inside L. The kernel U_E fixes all of E and hence K, so U_E⊆Gal(L/K). A subgroup containing an open identity neighbourhood is open, since it is a union of cosets of that neighbourhood subgroup. Normality of K is unnecessary for openness; it controls normality of the fixing subgroup instead.

</details>

### Exercise 13.4 — A dense proper subgroup
<a id="galois-profinite-ex-4"></a>

In the algebraic closure of F_q, why do the integer powers of Frobenius form a proper dense subgroup?

<details>
<summary>Hint</summary>

Use their images in every C_n and the compatible CRT element from the example.

</details>

<details>
<summary>Solution</summary>

The exponent one generates each finite C_n, so the integer-power subgroup meets every finite-coordinate coset and is dense. The compatible element that is zero at all two-power coordinates and one at all three-power coordinates cannot be an ordinary integer exponent: divisibility by every power of two forces that integer to be zero, contradicting its residue one modulo three. Thus the dense subgroup is proper.

</details>

### Exercise 13.5 — Equal fixed fields
<a id="galois-profinite-ex-5"></a>

Find the fixed field of the integer-power Frobenius subgroup and compare it with the fixed field of its closure.

<details>
<summary>Hint</summary>

It is enough to require fixation by the generator.

</details>

<details>
<summary>Solution</summary>

Fixation by Frobenius is a^q=a, whose roots are exactly F_q. Such an element is then fixed by every integer power. The closure is the whole Galois group, which also has fixed field F_q. This is the explicit failure of injectivity for the field assignment on arbitrary nonclosed subgroups. Restricting to closed subgroups restores the bijection.

</details>

### Exercise 13.6 — Closed subgroups of Z_p
<a id="galois-profinite-ex-6"></a>

In the p-power finite-field tower, identify the fixed field of p³Z_p and the subgroup fixing F_(q^(p²)).

<details>
<summary>Hint</summary>

Use the finite quotient indexes pˢ.

</details>

<details>
<summary>Solution</summary>

The subgroup p³Z_p has index p³, so its fixed field is the unique degree-p³ finite field F_(q^(p³)). The subgroup fixing F_(q^(p²)) is p²Z_p. The exponents describe relative field degrees p³ and p², not cardinalities of the fields themselves, which are q^(p³) and q^(p²).

</details>

### Exercise 13.7 — Why algebraicity matters
<a id="galois-profinite-ex-7"></a>

Locate the use of algebraicity in the embedding-extension proof.

<details>
<summary>Hint</summary>

Look at the step enlarging a maximal partial domain.

</details>

<details>
<summary>Solution</summary>

For α outside the maximal domain M, algebraicity supplies a nonzero irreducible minimal polynomial over M. Transporting that polynomial into an algebraically closed target gives a root and an extension of the field embedding. Without algebraicity there may be no such polynomial, and algebraic closedness alone does not guarantee a suitable transcendental image over the existing image field. The stated lemma does not claim that arbitrary transcendental extensions embed into an arbitrary algebraically closed target.

</details>

### Exercise 13.8 — Infinite surjectivity
<a id="galois-profinite-ex-8"></a>

Why is an embedding of an infinite normal algebraic extension onto, rather than merely injective?

<details>
<summary>Hint</summary>

Use finite root sets, not finite-dimensional linear algebra.

</details>

<details>
<summary>Solution</summary>

For each a, its minimal polynomial over the fixed base has a finite complete root set inside the normal extension. The embedding maps that set injectively into itself and hence permutes it. Thus a is the image of some root from that same set. Since every element belongs to such a set, every element has a preimage. This proves surjectivity without assuming the whole extension has finite dimension.

</details>

### Exercise 13.9 — Normal closed subgroups
<a id="galois-profinite-ex-9"></a>

What additional property of a closed subgroup makes its fixed field Galois over F, and what group then acts on that field?

<details>
<summary>Hint</summary>

Use conjugation and restriction.

</details>

<details>
<summary>Solution</summary>

The subgroup must be normal in G. Conjugation then preserves its fixed field, and embedding extension gives normality over F; separability is inherited. Restriction is onto with that subgroup as kernel, so the field's Galois group is the topological quotient G/H. Closedness is retained so the quotient is Hausdorff and the field correspondence identifies H exactly rather than replacing it by its closure.

</details>

### Exercise 13.10 — Additive and multiplicative limits
<a id="galois-profinite-ex-10"></a>

Distinguish the inverse systems defining the p-power finite-field group and the p-power cyclotomic group.

<details>
<summary>Hint</summary>

One records Frobenius exponents; the other records unit exponents on roots of unity.

</details>

<details>
<summary>Solution</summary>

For ∪F_(q^(pʳ)), the groups are Z/pʳZ under addition, because composing Frobenius powers adds exponents. Their inverse limit is additive Z_p. For ∪Q(ζ_(pʳ)), the groups are (Z/pʳZ)× under multiplication, because composing ζ↦ζᵃ and ζ↦ζᵇ multiplies exponents. Their inverse limit is Z_p×. The same reduction maps do not make these two group laws interchangeable.

</details>

### Exercise 13.11 — A closure calculation
<a id="galois-profinite-ex-11"></a>

If a subgroup H has full image in every finite Galois quotient, prove its closure is G.

<details>
<summary>Hint</summary>

Every basic coset is determined by one finite restriction.

</details>

<details>
<summary>Solution</summary>

For any σ∈G and finite E/F, surjectivity of the H-image gives h∈H with h|E=σ|E. Thus h∈σU_E, so every basic neighbourhood of σ meets H. Hence every σ belongs to the closure, which is G. The argument proves density; it does not say H=G as an abstract set, as the Frobenius example demonstrates.

</details>

### Exercise 13.12 — A real cyclotomic tower
<a id="galois-profinite-ex-12"></a>

Identify the subgroup fixing the union of real subfields in the p-power cyclotomic tower.

<details>
<summary>Hint</summary>

Complex conjugation is the unit class −1 at every level.

</details>

<details>
<summary>Solution</summary>

Complex conjugation and identity form the subgroup {±1} of the inverse-limit unit group. It is finite and therefore closed in the Hausdorff profinite group. Its fixed field consists exactly of elements real at their finite cyclotomic level, hence the union of the maximal real subfields. The closed correspondence makes it the full fixing subgroup of that union. The resulting real tower has Galois group Z_p×/{±1}.

</details>

## Summary

An infinite Galois group is the inverse limit of its finite Galois quotients. The Krull topology turns finite agreement into neighbourhoods and makes the group profinite. Intermediate fields correspond to closed subgroups, finite degrees to open subgroups, and normal extensions to normal closed subgroups. Dense proper Frobenius subgroups explain why topology is necessary, while finite-field and cyclotomic towers give explicit inverse-limit models.
