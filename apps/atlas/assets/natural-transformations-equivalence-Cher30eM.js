var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: natural-transformations-equivalence
title: "Natural Transformations and Equivalence"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Natural Transformations and Equivalence

Two functors can assign related objects without having a coherent relationship on maps. A natural transformation supplies that coherence. Its square must commute for every arrow, not just for a convenient list of objects. Natural isomorphisms then let us compare categories without demanding that their chosen object representatives be literally identical.

Read [Functors](functors.md). A naturality equation will always specify two functors with the same source and target. The linear examples additionally assume basic finite-dimensional vector spaces over a fixed field; the abelian-group examples require only group homomorphisms. Size conditions for functor categories and choices of quasi-inverses are stated where used.

## 1. Components and the naturality equation

For functors F,G:C→D, a natural transformation α:F⇒G is a family of arrows α_X:FX→GX, one for each object X, such that for every f:X→Y,
$$G(f)\\circ\\alpha_X=\\alpha_Y\\circ F(f).$$
Each side is an arrow FX→GY. Specifying components is only the first step: they must satisfy this equation. A componentwise construction can fail naturality even when every component is individually well-defined.

The identity transformation has components id_FX. If α:F⇒G and γ:G⇒H are natural, define their vertical composite by (γ∘α)_X=γ_X∘α_X. Naturality follows by moving Ff past α and then Gf past γ:
$$Hf\\,\\gamma_X\\alpha_X=\\gamma_YGf\\,\\alpha_X
=\\gamma_Y\\alpha_YFf.$$
Associativity and identity laws hold componentwise. Consequently, whenever the relevant collections are sets at the chosen size, functors C→D and natural transformations form the functor category [C,D].

If C is small and D locally small, each collection of transformations between two fixed functors is a set: it is a subset of the product over objects X of Hom_D(FX,GX), cut out by the naturality equations. The category of all such functors may still be large. If C is large, that product argument cannot simply be used without a further size convention.

## 2. Natural isomorphisms and their inverses

A natural isomorphism is an invertible arrow in the functor category.

**Proposition 3.1.** A natural transformation is a natural isomorphism exactly when each component is an isomorphism in D.

*Proof.* An inverse transformation gives inverse components by evaluating its two composite equations. Conversely suppose every α_X is invertible. From Gf α_X=α_Y Ff, compose with the component inverses to get
$$Ff\\,\\alpha_X^{-1}=\\alpha_Y^{-1}Gf.$$
Thus the inverses form a natural transformation G⇒F. Its two composites are identities componentwise, proving the claim. ∎

The inverse components are forced, so this construction requires no separate choice of inverses. The equation also shows why an arbitrary family of objectwise isomorphisms is insufficient: the forward family must first be proved natural.

**Worked example 3.2 (Double duality).** For finite-dimensional V, let ε_V:V→V** send v to the functional λ↦λ(v). It is linear. A nonzero vector is separated by a linear functional, obtained by including it in a basis, so ε_V is injective. The two finite dimensions agree, hence it is an isomorphism.

For T:V→W and λ∈W*, the two possible composites evaluate as
$$\\bigl(T^{**}\\varepsilon_V(v)\\bigr)(\\lambda)
=\\varepsilon_V(v)(\\lambda\\circ T)
=\\lambda(Tv)
=\\varepsilon_W(Tv)(\\lambda).$$
Therefore ε is a natural isomorphism from the identity functor to double duality. It uses evaluation, not a chosen basis in the resulting map. In contrast a proposed transformation from V to V* would compare a covariant functor with a contravariant one, so it is not even a natural transformation of these same typed functors. A bilinear pairing or a restriction of the source category would be additional data.

## 3. Naturality determines whole families

**Worked example 3.3 (Scalar operations).** Every natural endomorphism of the identity functor on k-vector spaces is multiplication by one fixed scalar. Let α be such a transformation. Its component on the one-dimensional space k is multiplication by some c∈k. For any v∈V, the linear map j_v:k→V with j_v(1)=v gives α_V j_v=j_v α_k. Evaluating at one yields α_V(v)=cv. Conversely multiplication by a fixed c commutes with every linear map, so defines a natural transformation. It is a natural isomorphism exactly when c is nonzero.

The same proof classifies natural endomorphisms of the identity on Ab by integers. An endomorphism of Z is multiplication by an integer n. Applying naturality to the homomorphism Z→A selecting a∈A forces α_A(a)=na. Conversely integer multiplication commutes with every group homomorphism of abelian groups. To obtain an isomorphism on every A, its component on Z must be invertible, forcing n=1 or n=−1; both indeed work universally.

A family depending on a basis usually fails this kind of compatibility. Consider two-dimensional vector spaces and only linear isomorphisms, a groupoid. Assign to V the set of its ordered bases, with isomorphisms transporting each basis. A natural choice of one ordered basis would have to be fixed by every automorphism of V. But the automorphism interchanging the two members of that chosen basis moves it to a different ordered basis. Hence no such natural choice exists, over any field. This is stronger than observing that a choice was unspecified: no choice can satisfy the required symmetry.

## 4. Transformations from algebraic constructions

Let U:Mon→Set forget the multiplication and L:Set→Mon be the word functor. Define η_X:X→ULX by putting x into a one-letter word. For a function f:X→Y, the word map ULf sends [x] to [f(x)], exactly η_Y(f(x)). Thus η is natural. Its components are injective, but they are generally not surjective because words can have other lengths.

Word length also defines a natural transformation from UL to the constant functor with value the nonnegative integers. Every letterwise map preserves the length of a word, including the empty word. The constant functor sends each source arrow to the identity on its fixed target, so this length preservation is precisely its naturality equation. Naturality does not require a transformation to arise from a homomorphism of monoids when the target category is Set.

For an abelian group A let T(A) be its torsion subgroup. Every homomorphism sends torsion elements to torsion elements because an equation na=0 maps to nf(a)=0. Restricting maps makes T:Ab→Ab a functor. The inclusions T(A)→A commute with every homomorphism, giving a natural transformation T⇒Id. Passing to quotients gives another functor A↦A/T(A) and natural quotient maps Id⇒Q. The inclusion is not usually an isomorphism; for Z its source is zero. The quotient is not usually an isomorphism either; for a nonzero finite group its target is zero.

If a natural transformation has monic components, it is monic in the functor category: equality after composition gives componentwise cancellation and hence equality of transformations. The dual statement holds for epic components. This proves sufficient conditions directly; no converse for an arbitrary functor category is assumed here.

## 5. Horizontal composition and commuting comparisons

Suppose α:F⇒G for C→D and β:H⇒K for D→E. Their horizontal composite is the transformation HF⇒KG with component
$$(\\beta*\\alpha)_X=\\beta_{GX}\\circ H(\\alpha_X)
=K(\\alpha_X)\\circ\\beta_{FX}.$$
The equality is naturality of β applied to α_X. Naturality of the composite follows by applying the naturality squares for α and β and the functor laws for H and K. For example, moving a map f:X→Y across the first expression first uses naturality of β with Gf and then applies H to the naturality equation for α.

Vertical and horizontal composition satisfy the interchange law. To see the actual calculation, take α:F₀⇒F₁, α′:F₁⇒F₂ and β:H₀⇒H₁, β′:H₁⇒H₂. The component of (β′∘β)*(α′∘α) expands to
$$\\beta'_{F_2X}\\,\\beta_{F_2X}\\,H_0(\\alpha'_X)\\,H_0(\\alpha_X).$$
Naturality of β changes the middle pair to H₁(α′_X)β_(F₁X). The resulting expression is exactly the component of (β′*α′)∘(β*α). This proof states the needed types and the commuting square instead of treating diagram pasting as an unexplained rule.

Whiskering is the special case with one transformation an identity. For a functor H:D→E, the components Hα_X compare HF with HG. For a functor J:B→C, the components α_JB compare FJ with GJ. Functors preserve inverse equations, so both kinds of whiskering preserve natural isomorphisms.

## 6. Equivalence and choices of representatives

An equivalence between C and D consists of functors F:C→D and G:D→C with natural isomorphisms Id_C⇒GF and FG⇒Id_D. The functor G is called a quasi-inverse. This permits different object representatives and multiple isomorphic objects, unlike an isomorphism of categories that requires inverse functors equal on the nose.

A functor is essentially surjective if every target object is isomorphic to some FX. The following construction keeps its choice hypothesis explicit.

**Theorem 3.4.** An equivalence is fully faithful and essentially surjective. Conversely, a fully faithful functor equipped, for each D∈D, with a chosen C_D and an isomorphism ε_D:FC_D→D has a quasi-inverse. For a small target, ordinary set-indexed choice supplies such data from essential surjectivity. For a large target, representative selection must be part of the stated size convention or supplied data.

*Proof.* If G is a quasi-inverse with η:Id_C⇒GF and ε:FG⇒Id_D, then F is faithful: Ff=Fg implies GFf=GFg, and naturality and invertibility of η give f=g. The dual argument using ε shows G faithful. Given u:FX→FY, define g=η_Y inverse∘G(u)∘η_X. Naturality of η gives GFg=η_Y g η_X inverse=G(u). Faithfulness of G therefore gives Fg=u, proving fullness. Finally ε_D exhibits each D as isomorphic to an F-image.

For the converse, set GD=C_D. Given u:D→D′, full faithfulness determines a unique arrow Gu satisfying
$$F(Gu)=\\varepsilon_{D'}^{-1}\\,u\\,\\varepsilon_D.$$
The right side is typed from FC_D to FC_D′. Uniqueness and the functor laws for F prove that G preserves identities and composition. The displayed equation makes ε:FG⇒Id_D natural.

For X∈C choose η_X:X→GFX as the unique arrow whose F-image is ε_(FX) inverse. Full faithfulness reflects isomorphisms, so η_X is invertible. Applying F to its naturality square gives the equation defining G(Ff), and faithfulness reflects that equality. Thus η is a natural isomorphism Id_C⇒GF, proving the equivalence. ∎

The proof does not claim that the representative choices are canonical. Naturality concerns how the resulting assignments interact with arrows; it can hold even when making the initial choices was arbitrary.

## 7. Worked equivalences and invariants

A preorder can have distinct but mutually comparable objects. Quotient its objects by x∼y when both comparisons hold. The resulting ordered set has a well-defined comparison relation: replacing either representative by an equivalent one preserves comparisons by transitivity. The projection is fully faithful because a comparison between its classes is exactly the original comparison. It is surjective on objects. Choosing a representative for each class, when this is a set-indexed choice, gives a quasi-inverse. The original preorder category need not be isomorphic to the quotient category because their object sets may have different sizes.

For finite-dimensional vector spaces, the full subcategory with objects kⁿ, n≥0, has one object in each isomorphism class. It is fully faithful by construction and essentially surjective because every finite-dimensional space has a basis. With chosen bases for the spaces in the relevant size convention, the quasi-inverse sends a linear map to its matrix in those bases. Composing linear maps multiplies those matrices, and the coordinate isomorphisms satisfy naturality by the definition of a coordinate matrix. Naturality of the resulting coordinate comparisons does not turn the bases into a natural basis selection of the kind ruled out earlier: their target is the coordinate functor built from those same choices, rather than a basis preserved by every automorphism.

Equivalences preserve and reflect isomorphism classes, and full faithfulness identifies automorphism groups of corresponding objects. They also preserve initial objects. If I is initial in C, choose an isomorphism FX→D for any target object D. Full faithfulness makes Hom(FI,FX) a singleton, and composition with the chosen isomorphism makes Hom(FI,D) a singleton. Thus FI is initial. The same proof reversed handles terminal objects. Later chapters extend this mapping argument to limits and adjunctions.

## 8. Exercises

### CAT-03-01 — Component inverses

Prove directly that the inverse components of a natural transformation with invertible components satisfy naturality.

<details><summary>Hint 1</summary>
Begin with Gf α_X=α_Y Ff.
</details>
<details><summary>Hint 2</summary>
Compose on the two appropriate sides with component inverses.
</details>
<details><summary>Solution</summary>
Multiplying on the left by α_Y inverse and on the right by α_X inverse gives α_Y inverse Gf=Ff α_X inverse. Both sides map GX to FY, and this is the naturality equation for the family from G to F. Componentwise products are identities, so these inverse components are a transformation inverse. The proof uses the original naturality equation; an arbitrary family of isomorphisms would not provide that starting equality.
</details>

### CAT-03-02 — Integer multiplication

Classify the natural automorphisms of the identity functor on Ab.

<details><summary>Hint 1</summary>
Determine the component on Z first.
</details>
<details><summary>Hint 2</summary>
Use homomorphisms selecting individual elements of other abelian groups.
</details>
<details><summary>Solution</summary>
The component on Z is multiplication by an integer n. Naturality with the map Z→A sending one to a forces the component on A to send a to na. Invertibility on Z requires n=1 or n=−1, and both multiply every abelian group by an invertible scalar, with inverse the same operation. Hence these two are precisely the natural automorphisms. A multiplication that happens to be invertible on some finite groups need not be invertible on the whole category.
</details>

### CAT-03-03 — A failed vector choice

Explain why a natural choice of a nonzero vector in every nonzero finite-dimensional vector space, with all linear maps between those spaces, cannot exist.

<details><summary>Hint 1</summary>
There is a zero endomorphism of each such space.
</details>
<details><summary>Hint 2</summary>
Naturality would have to hold for that endomorphism too.
</details>
<details><summary>Solution</summary>
A chosen vector gives a map from a constant singleton functor to the underlying-set functor. For the zero endomorphism of V, naturality says its action must preserve the chosen vector. Its action sends every vector to zero, so the chosen vector must be zero, contradicting the nonzero requirement. This argument is distinct from choosing bases on a groupoid of isomorphisms, where zero maps are absent and the obstruction instead comes from automorphism symmetry.
</details>

### CAT-03-04 — One-letter words

Verify naturality of the maps η_X:X→ULX for a function that identifies two distinct letters.

<details><summary>Hint 1</summary>
Naturality does not require the function to be injective.
</details>
<details><summary>Hint 2</summary>
Evaluate both routes at each original letter.
</details>
<details><summary>Solution</summary>
For every x, the first route creates [x] and then applies the letterwise map, giving [f(x)]. The second route first gives f(x) and then creates its singleton word, again giving [f(x)]. If f identifies two letters, both routes identify their images in exactly the same way. Thus the square commutes for noninjective functions as well. Naturality refers to all arrows of Set, including maps that forget distinctions.
</details>

### CAT-03-05 — Torsion inclusions

Show that a homomorphism A→B induces a commuting square for the torsion inclusions, and give a component where the inclusion is not invertible.

<details><summary>Hint 1</summary>
An equation na=0 remains true after applying a homomorphism.
</details>
<details><summary>Hint 2</summary>
Use the abelian group Z.
</details>
<details><summary>Solution</summary>
A torsion element a has some positive n with na=0, so nf(a)=0 and f(a) belongs to T(B). Restricting f is therefore well-defined, and inclusion after restriction and f after inclusion both send a to f(a). For A=Z the inclusion is zero→Z and is not surjective, so it is not an isomorphism. The family is natural despite having noninvertible components, as the definition permits.
</details>

### CAT-03-06 — Constant functors and compatible families

For a constant functor ΔA:C→D and F:C→D, translate a natural transformation ΔA⇒F into explicit arrows and equations.

<details><summary>Hint 1</summary>
Every arrow under ΔA becomes id_A.
</details>
<details><summary>Hint 2</summary>
Write the component at X and the equation for f:X→Y.
</details>
<details><summary>Solution</summary>
The components are arrows a_X:A→FX. Naturality says Ff∘a_X=a_Y∘id_A=a_Y. Thus they form a family of arrows from a common source whose composites along every diagram arrow agree. These are the data later called a cone over F. No universal property is included yet: many such families may exist, and being one of them does not make A a limit.
</details>

### CAT-03-07 — Pointwise monicity

Suppose α:F⇒G has monic components. Prove it is monic as an arrow in the functor category.

<details><summary>Hint 1</summary>
Start with two transformations β,γ:H⇒F having equal composites with α.
</details>
<details><summary>Hint 2</summary>
Evaluate that equality at every object.
</details>
<details><summary>Solution</summary>
At X the equality reads α_X β_X=α_X γ_X. Monicity of α_X gives β_X=γ_X. Since transformations are equal exactly when all their components agree, β=γ. This is the categorical cancellation property in the functor category. The argument proves the stated sufficient condition without assuming a converse or the existence of any special probing functors.
</details>

### CAT-03-08 — Quasi-inverse arrow formula

Given the representative data of Theorem 3.4, prove that the constructed G preserves a composite v∘u.

<details><summary>Hint 1</summary>
Apply F to both proposed source arrows.
</details>
<details><summary>Hint 2</summary>
The middle ε and its inverse cancel.
</details>
<details><summary>Solution</summary>
The image of Gv∘Gu under F is ε_D″ inverse v ε_D′ ε_D′ inverse u ε_D=ε_D″ inverse(vu)ε_D. This is also the defining image of G(vu). Faithfulness of F forces equality of the two source arrows. The identity law follows by the same formula with u an identity. Fullness supplied existence of each Gu, while faithfulness supplies these uniquely determined functor laws.
</details>

### CAT-03-09 — Equivalent but not isomorphic

Give finite categories that are equivalent but cannot be isomorphic because their object counts differ.

<details><summary>Hint 1</summary>
Use a preorder with two mutually comparable elements.
</details>
<details><summary>Hint 2</summary>
Compare it with the one-object terminal category.
</details>
<details><summary>Solution</summary>
Take the category with two objects and exactly one arrow between every ordered pair. All its arrows are invertible because each composite is the unique endomorphism. The functor to the terminal category is fully faithful, since each hom set is a singleton, and essentially surjective. Choosing either object provides a quasi-inverse and the unique arrows give natural isomorphisms. An isomorphism of categories would induce a bijection on objects, which is impossible between two objects and one.
</details>

### CAT-03-10 — Horizontal composition

For α:F⇒G and β:H⇒K, show the two component formulas β_GX Hα_X and Kα_X β_FX agree.

<details><summary>Hint 1</summary>
The component α_X is itself an arrow in the domain of H and K.
</details>
<details><summary>Hint 2</summary>
Apply naturality of β to that arrow.
</details>
<details><summary>Solution</summary>
Naturality of β for α_X:FX→GX states K(α_X)∘β_FX=β_GX∘H(α_X). Both sides map HFX to KGX. Thus the two ways of first changing the inner or outer functor give the same horizontal-composite component. This is an application of an existing naturality square, not an extra axiom imposed on the pair of transformations.
</details>

### CAT-03-11 — Initial objects under equivalence

Explain why essential surjectivity is needed in the argument that an equivalence sends an initial object to an initial object.

<details><summary>Hint 1</summary>
Full faithfulness first controls arrows only between image objects.
</details>
<details><summary>Hint 2</summary>
A target object outside the image needs comparison with an image object.
</details>
<details><summary>Solution</summary>
Full faithfulness identifies Hom(FI,FX) with the singleton Hom(I,X), but initiality in the target requires a singleton Hom(FI,D) for every D. Essential surjectivity supplies an isomorphism FX→D; postcomposition with it is a bijection on those hom sets. Without that hypothesis there may be additional objects with no arrow from FI or several such arrows. The proof therefore uses both map control and coverage of object isomorphism classes.
</details>

### CAT-03-12 — Natural coordinates versus natural bases

Why does choosing bases to construct a coordinate functor not contradict the failure of a natural basis selection in Section 3?

<details><summary>Hint 1</summary>
Identify the two different target assignments in the claims.
</details>
<details><summary>Hint 2</summary>
A coordinate matrix changes with the chosen bases and with the map.
</details>
<details><summary>Solution</summary>
The impossible selection asks every automorphism to preserve a fixed chosen ordered basis when bases are transported by that automorphism. The coordinate construction instead defines the image of an automorphism to be its matrix in the chosen bases. The coordinate isomorphism intertwines that matrix with the original map, which is its naturality equation. The matrix need not fix the coordinate basis. Naturality compares two functors whose arrow assignments have both been specified; it is not invariance under all maps without a corresponding action on the target.
</details>

## 9. Next connection

Natural transformations provide compatible maps between whole constructions. Universal properties next describe objects through compatible mapping problems and show why their unique comparison maps are often natural rather than arbitrary.
`;export{e as default};