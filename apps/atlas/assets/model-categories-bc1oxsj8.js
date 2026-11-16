var e=`---
parent_id: book-advanced-category-theory
chapter_id: model-categories
title: "Model Categories"
level: graduate
license: CC BY-SA 4.0
---

# Model Categories

Homological algebra often treats a quasi-isomorphism as a map that should become invertible, although it need not have a strict inverse of complexes. A model category adds cofibrations and fibrations to a class of weak equivalences so replacements, lifting and homotopies can be handled inside an ordinary category. The axioms are powerful, but their verification in spaces or unbounded complexes is substantial. We prove structural consequences directly from the axioms and work explicit chain calculations; the major existence and comparison theorems are named imports.

Read [Homological Algebra, Complexes and Homology](../morphisms-modules-categories/complexes-and-homology.md), [Derived Categories](../morphisms-modules-categories/derived-categories.md), and [Introduction to Category Theory, Adjunctions](../introduction-to-category-theory/adjunctions.md). The earlier [Morphisms First model-category reading](../morphisms-modules-categories/model-categories.md) remains live with its original exercises, solutions and illustrative listing. No mathematical example in this chapter was executed by software.

## Axioms with a fixed convention

**Definition 9.1.** A model category M is complete and cocomplete, equipped with weak equivalences W, cofibrations C and fibrations F. Weak equivalences satisfy two-out-of-three among f,g,gf. Each class is closed under retracts in the arrow category. A cofibration has the left lifting property against an acyclic fibration, and an acyclic cofibration against every fibration. Every arrow factors both as a cofibration followed by an acyclic fibration and as an acyclic cofibration followed by a fibration. Here acyclic means belonging to W as well as the named class.

The words do not imply that cofibrations are monomorphisms or fibrations are epimorphisms in every model category. Those descriptions hold in particular models. An object is cofibrant if the initial-object map to it is a cofibration, and fibrant if its map to the terminal object is a fibration. The model structure includes all three classes; specifying only weak equivalences is insufficient to choose replacements or lifting problems.

**Lemma 9.2 (Lifting characterization).** In a model category, a map has the left lifting property against every acyclic fibration if and only if it is a cofibration.

*Proof.* One direction is the lifting axiom. Conversely factor such a map i:A to B as A to X by a cofibration j followed by an acyclic fibration p:X to B. Put i on the left and p on the right of the square whose top map is j and bottom map is the identity of B. A lift l:B to X exists. The equations pl=identity_B and li=j show that i is a retract of j in the arrow category: the map from i to j is (identity_A,l) and back is (identity_A,p). Cofibrations are closed under retracts, so i is a cofibration. ∎

**Proposition 9.3 (Closure under composition).** Cofibrations compose, as do acyclic cofibrations.

*Proof.* A map with the left lifting property against a fixed class of right maps retains that property under composition: in a square for ji, first lift across i to obtain a map from the middle object, then lift across j. The equations fit because the first lift uses the lower composite to define its lower edge. Lemma 9.2 characterizes cofibrations by lifting against acyclic fibrations, so their composites are cofibrations. The same factorization-and-retract argument characterizes acyclic cofibrations by lifting against all fibrations: factor a map with that lifting property as an acyclic cofibration followed by a fibration and retract it. Hence they also compose. ∎

This proof uses both factorization and retract closure. Citing lifting alone as a complete characterization would leave a gap: the axiom initially gives only the forward implication. The retract argument supplies the converse.

## A model structure that can be checked completely

**Worked example 9.4 (Discrete model structure).** On any complete and cocomplete category M, take weak equivalences to be isomorphisms and take every arrow to be both a cofibration and a fibration. Two-out-of-three and retract closure hold for isomorphisms, and all arrows are closed under retracts. A square against an acyclic fibration has an isomorphism on the right, so the lift is obtained by composing with its inverse; the dual statement holds when the left arrow is an isomorphism. Factor f as f followed by an identity isomorphism for the cofibration–acyclic-fibration factorization, and as an identity isomorphism followed by f for the other. Thus every axiom holds. All objects are cofibrant and fibrant, and the homotopy category is the original category because inverting isomorphisms changes nothing.

This example is deliberately computationally trivial but logically useful. It shows that “fibrant” alone does not mean a topological lifting condition, and that the same underlying category may support radically different weak-equivalence choices. It also gives a complete model-axiom verification rather than relying on an imported existence theorem.

## Replacements and the homotopy category

Factor the initial-object map 0 to X as a cofibration 0 to QX followed by an acyclic fibration QX to X. Then QX is cofibrant and QX to X is a weak equivalence. Dually factor X to the terminal object as an acyclic cofibration X to RX followed by a fibration RX to 1. These are cofibrant and fibrant replacements. The axioms ensure their existence, but the factorizations may not be functorial unless functorial factorization is part of the chosen model structure or separately constructed.

**Proposition 9.5.** Any two cofibrant replacements of X represent isomorphic objects in a localization that inverts W.

*Proof.* Each replacement has a weak equivalence to X. The localization sends both maps to isomorphisms, so the composite of one inverse with the other gives an isomorphism between the two replacement objects. This argument proves independence up to isomorphism in the localization. It does not choose a canonical strict map between the replacements in M. ∎

**Imported theorem 9.6 (Homotopy category representation).** The localization Ho(M)=M[W inverse] exists in an appropriate universe and is equivalent to the category of cofibrant-fibrant objects with morphisms modulo the model-category homotopy relation. The proof uses cylinder and path objects, lifting, and independence of choices; we import it from standard model-category theory. The localization universal property says a functor out of Ho(M) is the same as a functor out of M that sends W to isomorphisms, up to the appropriate natural equivalence.

An isomorphism in Ho(M) need not come from an isomorphism in M. This is the point of localization. It also does not follow that Ho(M) retains mapping spaces or higher homotopies; its morphisms are ordinary sets of equivalence classes.

## Chain complexes as the central algebraic model

**Imported theorem 9.7 (Projective model structure).** For unbounded chain complexes of left R-modules over a ring R, there is a projective model structure with quasi-isomorphisms as weak equivalences, degreewise surjections as fibrations, and cofibrations characterized by monomorphisms with dg-projective cokernel. A dg-projective complex is a complex of projective modules whose maps to every acyclic complex are null-homotopic. The existence proof requires unbounded replacement machinery and a small-object or equivalent construction; it is imported. Every complex is fibrant because its map to zero is degreewise surjective.

For bounded-below complexes of projective modules, the lifting argument is elementary. Given a degreewise surjective quasi-isomorphism p:X to Y, its kernel is acyclic. Starting in the lowest degree of a projective complex P, lift the map of modules using projectivity. At the next degree, the defect of commuting with the differential lies in the kernel and is a cycle; acyclicity and projectivity allow a correction. Inducting upward gives a chain-map lift. This proves such P are cofibrant within the imported model structure. Without bounded-below induction, the same argument cannot simply start at a lowest degree; unbounded dg-projective replacements require the imported theorem.

**Worked example 9.8 (A replacement of a cyclic module).** Let n be a nonzero integer and view Z/nZ as a complex concentrated in degree zero. The two-term complex P with Z in degrees one and zero, differential multiplication by n, and augmentation from degree zero to Z/nZ has H_1=0 because multiplication by n is injective, H_0=Z/nZ, and all other homology zero. Thus the augmentation is a quasi-isomorphism. Both terms are free and P is bounded below, so it is cofibrant. Tensor P with Z/mZ to compute Tor_1 over Z: the degree-one homology is the kernel of multiplication by n on Z/mZ. For m=n, this kernel is all of Z/nZ, giving Tor_1(Z/nZ,Z/nZ) isomorphic to Z/nZ. Tensoring the unreplaced degree-zero module with itself would have no degree-one term and would miss this derived information.

The projective model homotopy category is the derived category D(R), under the imported comparison theorem identifying localization at quasi-isomorphisms. This gives a model-categorical interpretation of the homological text's derived category. The comparison identifies ordinary homotopy categories; mapping-complex or infinity-categorical enhancements retain more information.

## Spaces and simplicial sets

**Imported theorem 9.9 (Kan–Quillen structure).** Simplicial sets have a model structure whose cofibrations are monomorphisms, fibrations are Kan fibrations, and weak equivalences are maps inducing weak homotopy equivalences after geometric realization. Every simplicial set is cofibrant; Kan complexes are fibrant. The full lifting and factorization verification, together with comparison to suitable spaces, is imported. The complete category of all simplicial sets is used, not an unspecified finite subcategory.

**Worked example 9.10 (A horn and a filler).** The simplicial horn Lambda^2_1 consists of two edges of a triangle meeting at its middle vertex, with the opposite edge and two-simplex missing. A map from this horn to a simplicial set records two composable one-simplices. A filler Delta^2 supplies a third edge and a two-simplex witnessing a composite. In a Kan complex every horn, including outer horns, fills. In a quasicategory only inner horns are required to fill, so composition can exist coherently without every arrow having a homotopy inverse. This concrete two-dimensional picture will be used in the infinity-category chapter; it is not a proof of the Kan–Quillen model structure.

The classical topological model structure uses weak homotopy equivalences and suitable Serre fibrations on an appropriate category of spaces. Its precise category and cofibrations matter for the axioms; we import the existence theorem rather than claiming that all naive topological spaces with arbitrary inclusions form the desired model structure. A non-surjective map can be a fibration in a topological model, so “fibration equals surjection” is not a portable rule.

## Quillen adjunctions and derived calculations

**Definition 9.11.** An adjunction F:M to N left adjoint to G is a Quillen adjunction if F preserves cofibrations and acyclic cofibrations, equivalently G preserves fibrations and acyclic fibrations. The equivalence is a lifting-property translation through the adjunction, using the lifting characterizations proved above. A left derived functor LF applies F after cofibrant replacement; a right derived functor RG applies G after fibrant replacement.

**Proposition 9.12 (Adjoint lifting translation).** F preserves cofibrations if and only if G preserves acyclic fibrations. Separately, F preserves acyclic cofibrations if and only if G preserves fibrations.

*Proof.* A square with F(i) on the left and p on the right corresponds under adjunction to a square with i on the left and G(p) on the right, with lifts corresponding bijectively. If G sends acyclic fibrations to acyclic fibrations, every cofibration i lifts against G(p), so F(i) lifts against p and is a cofibration by Lemma 9.2. The converse uses the same argument in reverse, together with the characterization of acyclic fibrations by right lifting against cofibrations obtained by the dual retract argument. The parallel statement for acyclic cofibrations and fibrations completes the Quillen equivalence. ∎

For a ring map R to S, extension of scalars S tensor over R - is left adjoint to restriction of scalars. On projective chain-model structures under the appropriate sided module convention, the left derived extension is computed by S tensor over R P for a cofibrant replacement P. Flatness of S over R would let ordinary tensor preserve more quasi-isomorphisms, but is not required to define the derived functor after replacing the source. A numerical Tor example should therefore state which variable was resolved.

**Imported theorem 9.13 (Derived adjunction).** A Quillen adjunction induces an adjunction LF left adjoint to RG on homotopy categories. The proof uses replacement choices and the homotopy-category representation theorem; it is imported with those hypotheses. A Quillen equivalence imposes further derived unit/counit equivalence conditions and is stronger than a Quillen adjunction.

## Exercises

### Exercise 9.1 {#model-categories-ex-discrete}

Verify the two factorization axioms of the discrete model structure.
<details><summary>Hint 1</summary>All arrows are fibrations and cofibrations; only isomorphisms are weak equivalences.</details>
<details><summary>Hint 2</summary>Use the identity arrow at either source or target.</details>
<details><summary>Solution</summary>Factor f:A to B as f followed by identity_B: the first is a cofibration, the second an acyclic fibration. Factor it as identity_A followed by f: the first is an acyclic cofibration, the second a fibration. Both composites equal f, so both required factorizations exist.</details>

### Exercise 9.2 {#model-categories-ex-retract}

Complete the retract argument for a map having left lifting against acyclic fibrations.
<details><summary>Hint 1</summary>Factor i as a cofibration j then an acyclic fibration p.</details>
<details><summary>Hint 2</summary>Use the lift against p to produce a retraction in the arrow category.</details>
<details><summary>Solution</summary>The lift l:B to the middle object satisfies pl=identity_B and li=j. The arrow i maps to j using identity_A and l, and j maps back to i using identity_A and p. Their composite is identity on i because pl=identity_B. Thus i is a retract of the cofibration j and is a cofibration.</details>

### Exercise 9.3 {#model-categories-ex-composition}

Prove composition closure of cofibrations using their lifting characterization.
<details><summary>Hint 1</summary>Start with a square for a composite ji against an acyclic fibration.</details>
<details><summary>Hint 2</summary>Lift first over i and then over j.</details>
<details><summary>Solution</summary>The first lift extends the top map across i while using the given bottom composite. It produces a compatible top map for a lifting square with j. The second lift extends across j and solves the original square. Thus ji lifts against every acyclic fibration and is a cofibration by Lemma 9.2.</details>

### Exercise 9.4 {#model-categories-ex-replacement}

Construct a cofibrant replacement of X from the factorization axiom.
<details><summary>Hint 1</summary>Factor the initial-object map to X.</details>
<details><summary>Hint 2</summary>Choose the factorization with a cofibration first and an acyclic fibration second.</details>
<details><summary>Solution</summary>Factor 0 to X as 0 to QX by a cofibration followed by QX to X by an acyclic fibration. The first map makes QX cofibrant. The second is a weak equivalence, so QX to X is a cofibrant replacement.</details>

### Exercise 9.5 {#model-categories-ex-resolution}

Compute the homology of the two-term resolution of Z/nZ for n nonzero.
<details><summary>Hint 1</summary>The degree-one differential is multiplication by n on Z.</details>
<details><summary>Hint 2</summary>Its kernel and cokernel give the two possible homology groups.</details>
<details><summary>Solution</summary>Multiplication by n is injective, so H_1=0. Its cokernel is Z/nZ, so H_0=Z/nZ. All other terms vanish. The augmentation to Z/nZ in degree zero induces the identity on H_0 and is a quasi-isomorphism.</details>

### Exercise 9.6 {#model-categories-ex-tor}

Compute Tor_1 over Z of Z/nZ with itself using the resolution.
<details><summary>Hint 1</summary>Tensor the free two-term resolution with Z/nZ.</details>
<details><summary>Hint 2</summary>Multiplication by n becomes zero on Z/nZ.</details>
<details><summary>Solution</summary>The tensor complex has Z/nZ in degrees one and zero and zero differential. Its degree-one homology is Z/nZ. By the definition of derived tensor using the projective replacement, this is Tor_1^Z(Z/nZ,Z/nZ).</details>

### Exercise 9.7 {#model-categories-ex-fibrant}

Why is every chain complex fibrant in the projective model structure?
<details><summary>Hint 1</summary>The terminal complex is zero.</details>
<details><summary>Hint 2</summary>Fibrations are degreewise surjections.</details>
<details><summary>Solution</summary>For every complex X, each component map X_k to the zero module is surjective. Therefore X to zero is a fibration, which is the definition of X being fibrant.</details>

### Exercise 9.8 {#model-categories-ex-horn}

Explain what an inner two-dimensional horn records in a simplicial set.
<details><summary>Hint 1</summary>It has two edges sharing a vertex.</details>
<details><summary>Hint 2</summary>A filler supplies a two-simplex and the missing edge.</details>
<details><summary>Solution</summary>A map from the inner horn records two composable one-simplices. A filler of the full two-simplex supplies a third edge interpreted as a composite and a two-simplex witnessing its relationship to the pair. Different fillers may exist; uniqueness is not part of the horn condition.</details>

### Exercise 9.9 {#model-categories-ex-quillen}

State how the lifting square for F(i) against p corresponds to one for i against G(p).
<details><summary>Hint 1</summary>Transpose the two horizontal arrows under the adjunction.</details>
<details><summary>Hint 2</summary>A diagonal lift transposes in both directions.</details>
<details><summary>Solution</summary>Adjunction gives bijections between the upper and lower horizontal maps in the F(i)-p square and maps in an i-G(p) square. Naturality preserves commutativity. A lift on one side transposes to a lift on the other, so the two lifting problems are equivalent.</details>

### Exercise 9.10 {#model-categories-ex-derived}

Explain why applying a left Quillen functor directly to X may fail to compute its left derived functor.
<details><summary>Hint 1</summary>Weak equivalences need only be preserved between suitable cofibrant objects.</details>
<details><summary>Hint 2</summary>Use QX before applying the functor.</details>
<details><summary>Solution</summary>If X is not cofibrant, F need not send a weak equivalence involving X to an isomorphism in the target homotopy category. A cofibrant replacement QX to X is weakly equivalent to X, and the derived value is represented by F(QX). Independence from the replacement holds in the homotopy category under the Quillen hypotheses.</details>

## Sources

Original expanded exposition adapting topics and selected examples from the retained Euler Morphisms First model-category chapter, whose source and five solutions remain live. Hovey, *Model Categories*, is the benchmark for the projective, simplicial and homotopy-category theorems identified as imports. The discrete model, lifting characterization, composition closure and cyclic-module computation are proved in this chapter.

## Summary

A model structure combines weak equivalences with two lifting classes and two factorizations. Retract arguments turn the lifting axioms into useful characterizations and composition laws. Replacements make derived calculations possible, while localization and its cofibrant-fibrant description are imported global theorems. The chain complex example computes a Tor group missed by ordinary tensoring. Simplicial horns preview the coherent composition studied next.
`;export{e as default};