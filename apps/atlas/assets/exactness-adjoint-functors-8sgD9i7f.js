var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: exactness-adjoint-functors
title: "Exactness and Adjoint Functors"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Exactness and Adjoint Functors

Adjunctions identify maps across two categories. Exactness determines whether those maps survive kernels, quotients and resolutions. Their interaction has a direction: an exact left adjoint makes its right adjoint preserve injectives, while an exact right adjoint makes its left adjoint preserve projectives. Neither statement licenses reversing the two functors' roles.

Read [adjunctions](/books/library-book-introduction-to-category-theory/adjunctions/), [derived functors](derived-functors-tor-ext.md) and [derived categories](derived-categories.md). The categorical assertions concern additive functors between abelian categories. Derived right-functor assertions assume enough injectives in the relevant source categories, and bounded derived-category computations below use module categories and the stated degree ranges. The chapter expands the exactness sections of the retained earlier adjunction reading; that original source and every old exercise identity remain available.

## 1. Preservation and exactness

For an additive functor, left exact means preserving kernels, equivalently the initial part of every short exact sequence; right exact means preserving cokernels, equivalently its final part. It is exact if both hold. Finite biproducts and zero maps are already preserved by additivity.

A left adjoint preserves colimits, so an additive left adjoint is right exact. A right adjoint preserves limits, so an additive right adjoint is left exact. Additivity can also be recovered for adjoints between abelian categories: a left adjoint preserves zero as initial and finite coproducts, hence the canonical biproduct inclusions, projections and diagonal equations. The expression for addition through biproduct diagonal and fold then proves preservation of addition. The dual argument applies to a right adjoint. We keep additivity explicit when invoking the homological definitions.

For a right-exact functor, exactness is equivalent to preserving monomorphisms. Indeed every short exact sequence already has exact image through its final term; adding injectivity at the first term makes it short exact. Conversely every mono is the first map in a short exact sequence and exactness preserves it. Dually a left-exact functor is exact exactly when it preserves epimorphisms.

These terms do not apply in the abelian sense to the free-module functor from Set merely because it is a left adjoint. Its colimit preservation is meaningful, but Set is not an abelian source category. Module tensor and Hom adjunctions do live in the stated homological framework with their earlier sided hypotheses.

## 2. Projectives and injectives travel in opposite directions

**Theorem 14.1.** For F:A→B left adjoint to G:B→A, exactness of F makes G preserve injectives. Exactness of G makes F preserve projectives.

*Proof.* Let J be injective in B. A map X→GJ across a mono X→Y in A transposes to FX→J. Exactness makes FX→FY monic, so injectivity extends that transpose to FY. Transposing back gives an extension Y→GJ, with the required restriction by naturality of the adjunction. Thus GJ is injective.

Dually let P be projective in A and take an epimorphism E→B in B with a map FP→B. Its transpose P→GB lifts through GE→GB because G is exact and P projective. Transpose the lift back to FP→E. Naturality makes its composite the original map, proving FP projective. ∎

**Worked example 14.2.** For a ring map R→S, extension of scalars S⊗_R− is left adjoint to restriction. Restriction is exact because kernels and quotients keep the same underlying additive groups and maps. Thus extension sends projective R-modules to projective S-modules. This can also be seen directly by extending a free-summand decomposition to the corresponding S-free summand.

Restriction preserves injectives when extension is exact, which is precisely right R-flatness of S. The condition is substantive. For Z→F_p, the field is injective as a module over itself, but its underlying integer group C_p is not divisible and hence not injective. The extension functor is not exact: tensoring multiplication by p on Z makes a zero map. This verifies the hypothesis boundary with actual modules.

The other adjoint to restriction is coinduction Hom_R(S,−), with the left S-action by right translation of its argument. Since restriction is exact, coinduction sends injective R-modules to injective S-modules by the same theorem. These are the correctly typed counterparts of the injective construction used near the start of the book.

## 3. Long exact right-derived sequences from enough injectives

We give the construction needed for the next comparison. For 0→X→Y→Z→0 in a category with enough injectives, choose embeddings X→I_X and Z→I_Z. Injectivity extends the first embedding across Y. Combine that extension with Y→Z→I_Z to embed Y into I_X⊕I_Z: a vector in its kernel first comes from X, where the first component detects it. This monomorphism statement can equivalently be checked by the kernel universal property in an arbitrary abelian category.

The split sequence 0→I_X→I_X⊕I_Z→I_Z→0 forms a diagram with the original sequence. The snake lemma gives a short exact sequence of the three cokernels. Repeat the construction on those cokernels. This builds compatible injective resolutions whose degreewise short exact sequences split. Finite sums of injectives are injective by extending each component, so every term has the required property.

An additive functor preserves those split degree sequences. Applying an additive left-exact G and then the cochain connecting-map theorem gives the long exact sequence of R^nG. Comparison and homotopy uniqueness make it independent of the chosen resolutions. This proves the derived exact-sequence input used below; it does not assume the middle resolution is supplied by a mysterious unproved choice of simultaneous lifts.

## 4. Acyclic resolutions can compute the result

An object A is G-acyclic if R^qG(A)=0 for every q>0. Suppose X→A⁰→A¹→⋯ is an exact resolution by G-acyclic objects. Then
$$R^nG(X)\\cong H^n(G(A^\\bullet)).$$
To prove it, write Z⁰=X and Z^(r+1) for the cokernel of Z^r→A^r. Every sequence 0→Z^r→A^r→Z^(r+1)→0 is exact. The derived long exact sequence and acyclicity give R^jG(Z^(r+1))≅R^(j+1)G(Z^r) for j≥1. Its initial terms also identify the cokernel of G(A^(r−1))→G(Z^r) with R¹G(Z^(r−1)).

Left exactness identifies the cycles in degree r of G(A•) with G(Z^r), because the next differential factors through the inclusion of Z^(r+1). Its boundary quotient is therefore the displayed cokernel, equal after r−1 shifts to R^rG(X). In degree zero it is GX. This proves the theorem with its canonical connecting maps. In particular one may use acyclic terms, without demanding that every term be injective.

## 5. Derived composition needs a further hypothesis

**Theorem 14.3.** Let F:A→B be additive exact and G:B→C additive left exact, with enough injectives in A and B. If F sends every injective of A to a G-acyclic object, then
$$R^n(GF)(X)\\cong R^nG(FX)$$
naturally for all n≥0.

*Proof.* An injective resolution X→I• stays exact after F, because F is exact. Its terms F(I^r) are G-acyclic by assumption, so the acyclic-resolution theorem computes R^nG(FX) as H^n(GF(I•)). The same complex defines R^n(GF)(X), since GF is left exact and I is an injective resolution in A. The comparisons and connecting maps used above give naturality in X. ∎

This statement concerns a specified acyclic resolution of FX. It does not require F to preserve injective objects, but it does require the stated acyclicity. Nor does it claim that F(I•) resolves FX when F is only left exact; then it may have nonzero positive cohomology instead.

**Worked example 14.4 (Exactness alone is insufficient).** Let B be modules over R=k[ε]/(ε²), A be k-vector spaces, and F give a vector space the trivial ε-action. Its right adjoint is G=Hom_R(k,−), taking the ε-kernel. The adjunction follows because a map from a trivial-action module must land in that kernel. F is exact, and GF is identity on vector spaces.

But the injective vector space k is sent to the R-module k, and R^nG(k)=Ext^n_R(k,k)=k for every n≥0 by the periodic resolution. Thus Fk is not G-acyclic. Positive R^n(GF) vanishes while positive R^nG(Fk) does not. This is a complete counterexample to dropping the extra hypothesis. It is consistent with Theorem 14.1: G does preserve injectives, while that theorem made no assertion that F sends its injectives in the other direction to injectives or acyclic objects.

## 6. A bounded derived adjunction with an exact right adjoint

For module categories, suppose F⊣G and G is exact. Theorem 14.1 makes F preserve projectives. Choose a bounded-below homological projective model P→X as constructed in the derived-category chapter. Then FP is also bounded below and termwise projective, and defines the left derived object LF(X).

The ordinary adjunction, applied to every component, gives a bijection of chain maps FP→Y with chain maps P→GY: naturality of the hom bijection makes the differential equations correspond. The same formulas correspond chain homotopies. Thus their homotopy classes agree. Both projective sources compute their derived morphisms, proving
$$\\operatorname{Hom}_{D(B)}(LF(X),Y)
\\cong\\operatorname{Hom}_{D(A)}(X,GY)$$
in this bounded range. Exact G sends quasi-isomorphisms to quasi-isomorphisms and requires no replacement of its own. This proves the derived adjunction here without asserting an unbounded replacement theorem.

The dual statement uses an exact left adjoint F, a bounded-above homological injective model I for Y, and the fact that G preserves injectives. It gives F⊣RG in that range. In cohomological indexing this is the bounded-below injective range. The bounds and the preserved module class explain which computation is valid, rather than a slogan that every ordinary adjunction can be applied termwise to any chosen resolution.

**Worked example 14.5.** For R→S, restriction is exact and extension preserves projectives, so derived extension is left adjoint to restriction in the bounded projective range. A free resolution of a module, tensored with S, represents derived extension; it may have nonzero positive homology, namely the Tor groups. Treating it as the ordinary module S⊗M would discard exactly that derived information. The map Z→F_p and M=C_p gives nonzero degree-one homology, consistent with the earlier tensor calculations.

## 7. Exercises

### HA-14-01 — Preservation direction

Let F⊣G between abelian categories and F exact. Prove GJ injective for injective J by an explicit transpose-and-extension argument.

<details><summary>Hint 1</summary>
Transpose a map from the source of a mono into GJ.
</details>
<details><summary>Hint 2</summary>
F preserves that mono, so J can extend its transpose.
</details>
<details><summary>Solution</summary>
Given X→Y monic and X→GJ, transpose the latter to FX→J. Exactness makes FX→FY monic. Injectivity of J extends to FY→J. Its transpose Y→GJ restricts to the original map by naturality of the adjunction. Thus every required extension exists. This proves preservation by the right adjoint; it gives no corresponding assertion for the objects FJ in the opposite direction.
</details>

### HA-14-02 — Projective scalar extension

For R→S, explain why extension of scalars preserves projectives without assuming S flat over R.

<details><summary>Hint 1</summary>
Restriction is exact for every ring map.
</details>
<details><summary>Hint 2</summary>
Alternatively tensor a free-summand decomposition and retain its splitting maps.
</details>
<details><summary>Solution</summary>
The exact right adjoint restriction makes the left adjoint preserve projectives by Theorem 14.1. Directly, a projective is a summand of a free module, and tensoring the inclusion/retraction keeps their composite identity. The free module extends to the corresponding free S-module, so the extended summand is projective. Flatness would demand preservation of arbitrary injections, which is a separate stronger exactness property of the extension functor.
</details>

### HA-14-03 — Restriction need not preserve injectives

For Z→F_p, show restriction of the injective F_p-module F_p is not injective over Z and identify the failed exact-left-adjoint hypothesis.

<details><summary>Hint 1</summary>
Over a field every module is injective.
</details>
<details><summary>Hint 2</summary>
The underlying cyclic integer group is not divisible by p.
</details>
<details><summary>Solution</summary>
The field as a vector space is injective, but its underlying C_p has no p-th root of its nonzero element, so Baer's integer criterion makes it noninjective. The extension functor F_p⊗_Z− is not exact: multiplication by p on Z becomes zero on a nonzero vector space. Therefore the hypothesis that would make restriction preserve injectives fails exactly as required, while restriction itself remains exact.
</details>

### HA-14-04 — The simultaneous embedding

In the injective-resolution construction, prove the map Y→I_X⊕I_Z is monic.

<details><summary>Hint 1</summary>
A zero second component forces an element into the included X.
</details>
<details><summary>Hint 2</summary>
The first component then restricts to the injective embedding of X.
</details>
<details><summary>Solution</summary>
If both components vanish, injectivity of Z→I_Z makes the original quotient of that element zero. It therefore comes from x∈X. The first component on such an element is exactly the chosen embedding X→I_X, so its vanishing makes x zero. In an abstract abelian category the same reasoning uses the two kernel factorisations and their monicity, avoiding underlying elements. Thus the middle term really is an injective resolution embedding, and the snake lemma can be applied to its cokernels.
</details>

### HA-14-05 — Acyclic does not mean injective

Why can the acyclic-resolution theorem use more objects than an injective resolution, and what extra condition does it require of each term?

<details><summary>Hint 1</summary>
Compare an extension property with vanishing of derived values for one fixed functor.
</details>
<details><summary>Hint 2</summary>
The proof uses only that term's positive R^qG groups vanish.
</details>
<details><summary>Solution</summary>
Injectivity requires extension of every map from every subobject. G-acyclicity instead concerns vanishing of the positive derived functors of this particular G. The dimension-shifting proof needs precisely that vanishing for each resolution term to obtain its connecting isomorphisms. Injective terms always have it, but it can also hold for noninjective terms. The resolution must still be exact and start at X; a list of acyclic objects without those maps would not compute anything.
</details>

### HA-14-06 — A derived-composition comparison

Under Theorem 14.3's hypotheses, identify the single cochain complex computing both compared objects and explain why it is legitimate on both sides.

<details><summary>Hint 1</summary>
Choose an injective resolution I of X in A.
</details>
<details><summary>Hint 2</summary>
Exactness of F preserves the resolution and the additional assumption makes its terms G-acyclic.
</details>
<details><summary>Solution</summary>
The common complex is GF(I•). It defines R^n(GF)(X) because I is injective in A and GF is left exact. It computes R^nG(FX) because F(I•) is an exact G-acyclic resolution of FX. These are distinct justifications for the same formula, and the second needs both hypotheses. Without them, writing the same complex would not establish that it resolves or derives the intended second input.
</details>

### HA-14-07 — The dual-number counterexample

For the trivial-action adjunction in Example 14.4, compute R¹(GF)(k) and R¹G(Fk).

<details><summary>Hint 1</summary>
GF is identity on k-vector spaces.
</details>
<details><summary>Hint 2</summary>
The periodic R-resolution gives Ext¹_R(k,k)=k.
</details>
<details><summary>Solution</summary>
The first group is zero because identity is exact. The second is k by the periodic calculation. The exact functor F therefore fails to send the injective vector space k to a G-acyclic module. The example obeys the ordinary adjunction and its exactness direction, so the discrepancy isolates the additional acyclicity condition rather than contradicting either earlier preservation theorem.
</details>

### HA-14-08 — Chain adjunction

Why does naturality of an ordinary adjunction make a degreewise transpose of a chain map into a chain map?

<details><summary>Hint 1</summary>
A chain-map equation composes with one source differential and one target differential.
</details>
<details><summary>Hint 2</summary>
The two naturality variables transpose these two compositions.
</details>
<details><summary>Solution</summary>
Naturality in the source turns precomposition with the image of a source differential into precomposition with that differential after transposing. Naturality in the target turns postcomposition with its differential into postcomposition with the right adjoint's differential. Thus the two sides of each chain-map equation transpose to the two required sides in the other category. Additivity makes sums and signs correspond as well, so chain homotopy equations transpose too. Objectwise bijections without naturality would not prove these claims.
</details>

### HA-14-09 — Derived scalar extension

For Z→F_p and M=C_p, compute the homology of its derived extension represented by the two-term integer free resolution.

<details><summary>Hint 1</summary>
Tensor multiplication by p with F_p.
</details>
<details><summary>Hint 2</summary>
The resulting differential is zero between two copies of F_p.
</details>
<details><summary>Solution</summary>
The model has F_p in degrees one and zero with zero differential, so both H₁ and H₀ are F_p. Ordinary scalar extension retains only H₀. The nonzero H₁ is Tor₁^Z(F_p,C_p), the exactness obstruction from the resolution. Restriction is exact and the extended free model is projective over F_p, so it fits the bounded derived adjunction without claiming that ordinary extension was exact.
</details>

### HA-14-10 — Why a bound is stated

What proved property of bounded projective or injective models is used in the derived adjunction, and why does it not automatically cover every unbounded complex?

<details><summary>Hint 1</summary>
Maps from bounded-below projectives into acyclic complexes are null-homotopic by an induction with a first degree.
</details>
<details><summary>Hint 2</summary>
Recall the unbounded acyclic free dual-number complex.
</details>
<details><summary>Solution</summary>
The bounded model theorem identifies derived morphisms with homotopy classes, allowing the ordinary chain adjunction to compute them. Its null-homotopy induction needs a starting degree, and its dual injective version needs the corresponding opposite bound. An unbounded acyclic complex of free modules can be noncontractible, so termwise projectivity alone cannot justify that identification. General unbounded derived adjunctions require suitable K-projective or K-injective replacement results, explicitly beyond this bounded proof.
</details>

## 8. Further routes

Exact adjunctions now connect universal maps with injectives, projectives and acyclic resolutions under proved hypotheses. The retained advanced categorical readings and the later Advanced Category Theory commission develop additional structures; the present homological route has supplied the resolution and exactness preparation they require.
`;export{e as default};