
# Adjunctions

A free construction extends a map from generators uniquely. A quotient construction factors maps killing a specified obstruction. An adjunction expresses such extensions as a natural correspondence between two mapping problems in different categories. Its unit and counit record the universal maps, and their two triangle equations control how those maps fit together.

Read [Yoneda](yoneda-lemma.md), [universal properties](universal-properties-products-coproducts.md) and [limits and colimits](limits-colimits.md). Both categories are locally small, and diagrams are small when limits or colimits are invoked. The optional tensor example assumes commutative rings, modules and the tensor construction from Commutative Algebra. This chapter adapts the adjunction definitions and examples from the earlier Euler Morphisms First source, preserving its original source and identity, and develops the proofs here before any homological application.

## 1. A bijection natural in both arguments

Let F:C→D and G:D→C be functors. An adjunction F⊣G consists of bijections
$$\Phi_{X,Y}:\operatorname{Hom}_D(FX,Y)
\longrightarrow\operatorname{Hom}_C(X,GY)$$
natural in X and Y. We call F the left adjoint and G the right adjoint. For f:X′→X and h:Y→Y′, naturality means
$$\Phi(u\circ Ff)=\Phi(u)\circ f,\qquad
\Phi(h\circ u)=Gh\circ\Phi(u).$$
These formulas specify the objects on which each bijection is used; the suppressed indices are determined by the arrows. A collection of same-cardinality hom sets without these compatibility laws is not the specified adjunction data.

The unit is η_X=Φ_(X,FX)(id_FX):X→GFX. The counit is ε_Y=Φ inverse_(GY,Y)(id_GY):FGY→Y. Naturality immediately gives formulas for every transpose:
$$\Phi(u)=Gu\circ\eta_X,\qquad
\Phi^{-1}(v)=\varepsilon_Y\circ Fv.$$
For the first, apply naturality in Y to id_FX and u. For the second, apply naturality in X to id_GY under the inverse correspondence. These formulas make the whole hom-set bijection recoverable from the two families.

## 2. Unit, counit and the triangle identities

**Theorem 7.1.** The unit and counit are natural transformations Id_C⇒GF and FG⇒Id_D. They satisfy
$$\varepsilon_{FX}\circ F\eta_X=\operatorname{id}_{FX},\qquad
G\varepsilon_Y\circ\eta_{GY}=\operatorname{id}_{GY}.$$
Conversely natural transformations of these types satisfying these two equations determine an adjunction by the transpose formulas above.

*Proof.* For f:X→X′, the two naturality laws for Φ applied to Ff give GFf η_X=η_X′ f. Thus η is natural. Applying the inverse correspondence similarly gives h ε_Y=ε_Y′ FGh for h:Y→Y′, so ε is natural.

The inverse transpose of η_X is id_FX by its definition. Its formula is ε_FX Fη_X, proving the first triangle equation. The transpose of ε_Y is id_GY by the counit's definition, and its formula gives the second.

Conversely define the two proposed assignments using η and ε. Starting from u:FX→Y, their composite returns
$$\varepsilon_YFG(u)F\eta_X
=u\,\varepsilon_{FX}F\eta_X=u.$$
The first equality uses naturality of ε, and the second is the first triangle. Starting from v:X→GY, the other composite returns
$$G\varepsilon_YGF(v)\eta_X
=G\varepsilon_Y\eta_{GY}v=v,$$
using naturality of η and the second triangle. Hence the assignments are inverse bijections. Their naturality in both variables follows by substituting the naturality equations for η,ε and the functor laws into these formulas. ∎

The unit and counit are not generally invertible. Their triangles assert cancellation of particular composites after applying the functors, not separate inverse equations at every object. An equivalence is stronger, with invertible comparison transformations, although the earlier representative construction can arrange a coherent adjoint equivalence.

## 3. Words and free abelian groups

**Worked example 7.2 (Words).** The word functor L:Set→Mon is left adjoint to the forgetful U. A homomorphism L(X)→M restricts along one-letter words to a function X→UM. Conversely a function extends uniquely to the ordered product on each word. These operations are inverse by the free-word proof. Precomposing a letter function or postcomposing a monoid homomorphism commutes with substitution and evaluation, so the bijection is natural in both arguments.

The unit sends x to [x]. The counit sends a word of monoid elements to their product. The first triangle says that replacing each letter of a word by its one-letter word and then flattening returns that word. The second says that making a one-letter word from a monoid element and evaluating returns the element. The counit is not generally injective: the empty word and the one-letter word containing the monoid identity have equal evaluations but are different words.

**Worked example 7.3 (Free abelian groups).** For a set X, let Z^(X) consist of integer-valued functions on X with finite support, under pointwise addition. Its generators e_x have value one at x and zero elsewhere. A function a:X→UA into an abelian group extends to Σn_xe_x↦Σn_xa(x). Finite support makes the sum defined; abelian addition makes it independent of ordering. It is a homomorphism and is uniquely determined by the generators. This gives a natural adjunction Z^(−)⊣U:Ab→Set. The target being abelian is part of the extension proof, rather than an optional convention.

Neither example starts from a mere existence statement for an adjoint. The objects, arrow actions and explicit inverse maps are constructed. The next chapter studies hypotheses that guarantee an adjoint before such a direct formula is known.

## 4. Abelianisation as a reflection

Let I:Ab→Grp be inclusion and let A(G)=G/[G,G]. Any homomorphism from G to an abelian group kills all commutators, and therefore factors uniquely through that quotient. Conversely a homomorphism from the quotient composes to a homomorphism from G. The quotient factorisation is natural in both source and target by its coset formula. Thus A⊣I.

The unit is the quotient G→G_ab. For an abelian group B, its commutator subgroup is trivial and the counit identifies A(IB) with B. This counit is an isomorphism, while the unit fails to be injective for a nonabelian G. The full subcategory Ab is called reflective because its inclusion has this left adjoint. Reflection preserves the target's mapping problem, rather than identifying each group with its abelianisation.

**Proposition 7.4.** In an adjunction F⊣G, the right adjoint is fully faithful exactly when the counit is a natural isomorphism. Dually, the left adjoint is fully faithful exactly when the unit is a natural isomorphism.

*Proof.* If G is fully faithful, the adjunction and G's hom bijection identify Hom_D(FGY,Z) with Hom_D(Y,Z). The inverse from Hom_D(Y,Z) sends h to h ε_Y, because its transpose is Gh by the second triangle and naturality. Thus precomposition by ε_Y is bijective for every Z. Taking Z=FGY supplies r:Y→FGY with r ε_Y=id. Taking Z=Y and using injectivity shows ε_Yr=id: those two endomorphisms have equal composites with ε_Y. Hence ε_Y is invertible.

Conversely if ε_Y is invertible, precomposition with it identifies Hom_D(Y,Z) with Hom_D(FGY,Z), and the adjunction identifies the latter with Hom_C(GY,GZ). The composite sends h to Gh by the triangle identity. It is a bijection, proving full faithfulness. Reversing arrows proves the dual statement. ∎

## 5. Ordered adjunctions and subset images

In poset categories, a hom set is either empty or a singleton. An adjunction of monotone maps F:P→Q and G:Q→P therefore says
$$Fp\leq q\quad\Longleftrightarrow\quad p\leq Gq.$$
Its unit and counit are the inequalities p≤GFp and FGq≤q. Such a monotone adjunction is often called a Galois connection. An order-reversing Galois correspondence can instead be expressed by replacing one of its posets by its opposite.

**Worked example 7.5.** For a function f:X→Y, order power sets by inclusion. Direct image f_! and inverse image f* satisfy f_!(A)⊆B exactly when A⊆f*(B), proving f_!⊣f*. The unit says A⊆f inverse(f(A)); equality can fail when different points have the same image. The counit says f(f inverse(B))⊆B; equality can fail outside the image of f.

There is also a right adjoint to inverse image, namely
$$\forall_f(A)=\{y\in Y:f^{-1}(\{y\})\subseteq A\}.$$
Indeed f*(B)⊆A exactly when every fibre over a member of B is contained in A, which says B⊆∀_f(A). Empty fibres satisfy the condition, so points outside f(X) belong to ∀_f(A) for every A. This convention is forced by the equivalence, not an arbitrary treatment of missing points.

For any poset adjunction, C=GF is a closure operator: it is monotone, inflationary by the unit, and idempotent. Inflationarity gives Cp≤CCp. Applying G to the counit at Fp gives CCp≤Cp, proving equality by antisymmetry. The composite FG is dually a deflationary idempotent operator. These conclusions use the ordered setting; an arbitrary categorical monad has multiplication maps instead of literal equality of endofunctors.

## 6. Adjoints preserve the appropriate universal constructions

**Theorem 7.6.** A left adjoint preserves every existing small colimit. A right adjoint preserves every existing small limit.

*Proof.* Let Q with maps i_j:Dj→Q be a colimit in C, and let F⊣G. For an object Y of D, compatible arrows FDj→Y correspond under the adjunction to arrows Dj→GY. Naturality in the diagram arrows makes compatibility on one side equivalent to compatibility on the other. The colimit property gives a unique map Q→GY with those restrictions. Transpose it back to a unique FQ→Y. Naturality in each i_j shows that its restrictions along Fi_j are exactly the original arrows. Thus (FQ,Fi_j) is a colimit cone in D.

The right-adjoint statement is the same proof with arrows reversed, or by applying this statement to the opposite adjunction. All diagram objects and arrows retain the specified small index category; no larger colimit is asserted. ∎

The theorem includes empty diagrams. A left adjoint preserves initial objects and a right adjoint preserves terminal objects. It does not assert that either functor preserves the other kind of universal construction.

The subset example yields familiar formulas with their empty cases: direct image preserves arbitrary unions, while inverse image preserves arbitrary intersections as a right adjoint. Since inverse image also has ∀_f as right adjoint, it preserves arbitrary unions as a left adjoint too. These are operations in inclusion posets, where joins and meets are colimits and limits.

## 7. Optional algebraic application: tensor–Hom

Let R be commutative and M a fixed R-module. Assume the tensor construction and its balanced-map universal property. There is an adjunction
$$M\otimes_R-\;\dashv\;\operatorname{Hom}_R(M,-).$$
A map u:M⊗X→Y gives X→Hom(M,Y) by x↦(m↦u(m⊗x)). The tensor relations prove linearity in m and x. Conversely a linear v:X→Hom(M,Y) defines a balanced bilinear map (m,x)↦v(x)(m): moving a scalar between m and x gives the same value because v is linear and the Hom module has its standard R-action. The universal property gives a unique map on M⊗X.

The two assignments are inverse on pure tensors and hence on their generating sums. Precomposing in X or postcomposing in Y gives the same evaluation formula, proving naturality. Commutativity of R supplies the unambiguous module action in this statement; a noncommutative tensor–Hom adjunction must specify bimodules and sides separately.

The preservation theorem then gives preservation of module coproducts and cokernels by tensoring, and of products and kernels by this Hom functor. It does not give preservation of kernels by tensoring: flatness is the additional condition developed in Commutative Algebra. Calling a functor “left adjoint” specifies its place in a mapping correspondence, not a claim that it is left exact.

## 8. Uniqueness of an adjoint includes naturality

Two left adjoints F,F′ to the same G have a unique compatible natural isomorphism. For each X, their units make FX and F′X initial objects in the category of maps X→GY, with morphisms in D respecting those maps. The usual universal-property argument gives an isomorphism τ_X:FX→F′X with Gτ_X η_X=η′_X.

For f:X→X′, the arrows τ_X′Ff and F′f τ_X have the same transpose under the F-adjunction. The first transpose is η′_X′f by naturality of the hom bijection; the second is GF′f η′_X, equal to it by naturality of η′. Bijectivity makes the arrows equal, proving τ natural. Compatibility with the units determines it componentwise. Without that compatibility there can be other natural automorphisms, so the uniqueness claim must retain its universal maps.

## 9. Exercises

### CAT-07-01 — Transpose types

For u:FX→Y, write its transpose and the inverse-transpose formula, checking their sources and targets.

<details><summary>Hint 1</summary>
The unit starts at X and the counit ends at Y.
</details>
<details><summary>Hint 2</summary>
Apply G to u and F to an arrow v:X→GY.
</details>
<details><summary>Solution</summary>
The transpose is Gu∘η_X:X→GFX→GY. Conversely v:X→GY gives ε_Y∘Fv:FX→FGY→Y. These formulas are typed because the intermediate objects match. Their two inverse equations use naturality and the triangle identities, as proved in the theorem. Omitting a functor or reversing either composite would generally fail even to define an arrow between the desired hom-set objects.
</details>

### CAT-07-02 — The free-word counit

Describe the counit at a monoid M and exhibit two distinct words with the same image.

<details><summary>Hint 1</summary>
Its source is the word monoid on the underlying set of M.
</details>
<details><summary>Hint 2</summary>
Compare the empty word with the one-letter word containing the identity of M.
</details>
<details><summary>Solution</summary>
The counit evaluates a finite list of elements of M by multiplying them in order. Both the empty list and the one-letter list [1_M] evaluate to 1_M, although they have lengths zero and one and are distinct. The map is therefore not injective, even for the trivial monoid. The triangle identities still hold: they compare the specified unit substitutions and evaluations rather than requiring counit invertibility.
</details>

### CAT-07-03 — Free abelian extension

For X={a,b}, a function sends a to u and b to v in an abelian group A. Write its transpose on Z^(X) and prove uniqueness.

<details><summary>Hint 1</summary>
Every formal element is me_a+ne_b.
</details>
<details><summary>Hint 2</summary>
A homomorphism is determined on the two generators.
</details>
<details><summary>Solution</summary>
The extension sends me_a+ne_b to mu+nv for integers m,n. Additivity of A proves it preserves sums, including negative multiples and zero. Any homomorphism extending the two selected images must take exactly those values on every such integer combination, proving uniqueness. The construction uses abelian addition; it does not give a homomorphism to an arbitrary nonabelian group with arbitrary images u,v.
</details>

### CAT-07-04 — Abelianisation unit

For G=S₃, explain why the unit of abelianisation is not an isomorphism, while the counit at an abelian group is.

<details><summary>Hint 1</summary>
The source group has noncommuting elements.
</details>
<details><summary>Hint 2</summary>
An isomorphism to an abelian group would force commutation in the source.
</details>
<details><summary>Solution</summary>
The abelianisation unit maps S₃ to an abelian quotient. If it were an isomorphism, S₃ would be abelian, contradicting its noncommuting transpositions. For an abelian group B every commutator is identity, so quotienting by its commutator subgroup changes nothing up to the canonical quotient isomorphism. That is the counit at B. The different behaviour is consistent with the inclusion right adjoint being fully faithful while the left adjoint is not.
</details>

### CAT-07-05 — Fibre quantification

For the inclusion f:{a}→{a,b}, compute ∀_f of the empty source subset and compare it with direct image of that subset.

<details><summary>Hint 1</summary>
The fibre over b is empty.
</details>
<details><summary>Hint 2</summary>
An empty fibre is contained in every subset.
</details>
<details><summary>Solution</summary>
The fibre over a is {a}, not contained in the empty subset, while the fibre over b is empty and is contained in it. Therefore ∀_f(empty)={b}. Direct image of the empty subset is empty. These are different adjoints on opposite sides of inverse image. Their formulas encode existential versus universal membership conditions, and the empty-fibre clause is necessary for the right-adjoint equivalence.
</details>

### CAT-07-06 — Closure saturation

For a function f:X→Y, identify the closure operator f* f_! on P(X) and describe its fixed subsets.

<details><summary>Hint 1</summary>
Its value is f inverse(f(A)).
</details>
<details><summary>Hint 2</summary>
It adds all points sharing an image with a point already present.
</details>
<details><summary>Solution</summary>
The operator replaces A by the union of all fibres meeting A. It is inflationary, monotone and idempotent because adding complete such fibres does not introduce new images. Its fixed subsets are precisely unions of whole fibres. This gives a concrete model of the closure operator GF for a poset adjunction, and shows that closure need not be topological closure or involve a metric.
</details>

### CAT-07-07 — Empty colimits

Use Theorem 7.6 to identify the image under the free-abelian-group functor of the initial set.

<details><summary>Hint 1</summary>
The initial set is empty.
</details>
<details><summary>Hint 2</summary>
There is one finitely supported integer function on an empty domain.
</details>
<details><summary>Solution</summary>
The free abelian group on the empty set is the zero group, since its only formal integer combination is zero. This is initial in Ab, as required for preservation of the empty colimit by a left adjoint. The forgetful right adjoint sends that group to a singleton, which is terminal in Set; it is not required to preserve the initial object. The two conclusions concern different universal properties of the same zero group.
</details>

### CAT-07-08 — Compatibility of transposes

For h:Y→Y′ and u:FX→Y, prove Φ(hu)=Gh Φ(u) from the unit formula.

<details><summary>Hint 1</summary>
Expand Φ using Gu η_X.
</details>
<details><summary>Hint 2</summary>
Apply functoriality of G to hu.
</details>
<details><summary>Solution</summary>
The unit formula gives Φ(hu)=G(hu)η_X=Gh Gu η_X=Gh Φ(u). The sources and targets match X→GY′. Naturality in the X-variable additionally uses naturality of η to move a source arrow through it. Thus the formula together with its naturality data gives the whole two-variable compatibility rather than unrelated bijections.
</details>

### CAT-07-09 — Tensor hypotheses

State the hypotheses used to obtain M⊗_R−⊣Hom_R(M,−) as endofunctors on one module category.

<details><summary>Hint 1</summary>
Specify the ring convention and the module structure on Hom.
</details>
<details><summary>Hint 2</summary>
The balanced-map formula must accept a scalar in either input.
</details>
<details><summary>Solution</summary>
The stated version assumes a commutative unital ring R and R-modules, with M fixed. Commutativity makes scalar multiplication on Hom_R(M,Y) an R-module action preserving linearity and allows the balancing identity in M⊗_R X. The currying and evaluation maps are linear and inverse under those conventions. For a noncommutative ring, left modules alone do not supply the same expression without additional side and bimodule data; that requires a separately typed adjunction.
</details>

### CAT-07-10 — A right adjoint preserves kernels

Explain the kernel-preservation consequence for Hom_R(M,−) without claiming it preserves cokernels.

<details><summary>Hint 1</summary>
A kernel is an equaliser of a homomorphism and zero.
</details>
<details><summary>Hint 2</summary>
Right adjoints preserve limits, not automatically colimits.
</details>
<details><summary>Solution</summary>
For f:X→Y, a map M→X lands in ker f exactly when its composite with f is zero. Hence Hom(M,ker f) identifies with the kernel of Hom(M,f), matching the general limit-preservation theorem. Cokernels are colimits, so that theorem gives no corresponding preservation statement for this right adjoint. Additional projectivity conditions on M govern stronger exactness, and are not supplied merely by the existence of the adjunction.
</details>

### CAT-07-11 — Fully faithful right adjoints

If the counit of F⊣G is invertible, explain why the adjunction hom bijection makes G full as well as faithful.

<details><summary>Hint 1</summary>
Compare Hom_D(Y,Z) with Hom_D(FGY,Z) using ε_Y.
</details>
<details><summary>Hint 2</summary>
The composite bijection sends h to Gh by a triangle equation.
</details>
<details><summary>Solution</summary>
Precomposition with the isomorphism ε_Y gives a bijection Hom_D(Y,Z)→Hom_D(FGY,Z). Transposition gives a bijection from there to Hom_C(GY,GZ). The composite takes h to G(hε_Y)η_GY=Gh because Gε_Y η_GY=id. Thus the actual hom-set map induced by G is a bijection. Surjectivity is fullness and injectivity is faithfulness; both follow, rather than only a cancellation statement.
</details>

### CAT-07-12 — Uniqueness and compatibility

In comparing two left adjoints to the same G, why does the unit compatibility specify the component isomorphism uniquely?

<details><summary>Hint 1</summary>
Use the first adjunction with target F′X.
</details>
<details><summary>Hint 2</summary>
Its transpose must be the already specified η′_X.
</details>
<details><summary>Solution</summary>
The hom bijection Hom_D(FX,F′X)≅Hom_C(X,GF′X) sends a proposed τ_X to Gτ_X η_X. Requiring that expression to equal η′_X fixes exactly one element on the right and therefore exactly one arrow on the left. The universal-property comparison proves this arrow invertible, and comparing transposes proves its naturality in X. Uniqueness without the compatibility condition would be stronger and need not hold.
</details>

## 10. Next connection

Adjunctions encode universal factorisations and prove preservation theorems from natural mapping correspondences. The next chapter develops existence criteria, keeping completeness, local smallness and the solution-set condition explicit instead of substituting one hypothesis for the others.
