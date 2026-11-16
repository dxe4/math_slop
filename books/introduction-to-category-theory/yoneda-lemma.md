
# The Yoneda Lemma

Universal properties describe an object through its maps. The Yoneda lemma explains why this method recovers actual arrows: a natural operation on all maps into an object is already determined by what it does to that object's identity. The formula is short, but its sources, variance and naturality account for its force.

Read [Hom functors](functors.md), [naturality](natural-transformations-equivalence.md) and [universal properties](universal-properties-products-coproducts.md). In the formal theorem C is small and all functors take values in Set. For standard large examples, use a larger ambient universe or a chosen small collection containing the objects under discussion. No set of all sets is formed in its own size convention. The proof formulas themselves use only the specified hom sets and elements.

## 1. Presheaves and the representable example

A presheaf on C means a contravariant functor F:Cᵒᵖ→Set. Thus an arrow f:X→Y induces a function Ff:FY→FX. We call elements of FX generalised data at X; this phrase does not add any axioms beyond functoriality.

For A∈C, the representable presheaf yA is Hom_C(−,A). Its value at X is the set of arrows X→A, and its action on f:X→Y is precomposition, sending u:Y→A to uf:X→A. For u:A→B, postcomposition gives a natural transformation yu:yA⇒yB with component h↦uh. Naturality follows from associativity: u(hf)=(uh)f.

The assignment A↦yA and u↦yu preserves identities and composition componentwise. It is the Yoneda functor y:C→[Cᵒᵖ,Set]. It does not reverse the arrow u, because the reversal has already occurred in the argument of each presheaf.

## 2. The bijection and its two inverse formulas

**Theorem 5.1 (Yoneda).** For a presheaf F and an object A there is a bijection
$$\operatorname{Nat}(yA,F)\cong F(A).$$
It sends a transformation α to α_A(id_A). Given a∈FA, its inverse sends f:X→A to Ff(a).

*Proof.* First construct a transformation from a. Define αᵃ_X(f)=Ff(a). For h:X′→X, contravariant functoriality gives
$$Fh(\alpha^a_X(f))=Fh(Ff(a))=F(fh)(a)
=\alpha^a_{X'}(fh).$$
This is precisely naturality between the presheaves yA and F. Hence the inverse formula really supplies a transformation, rather than merely functions at each object.

Evaluating it at id_A returns F(id_A)(a)=a. Conversely start with a natural transformation α. Apply its naturality square to f:X→A and evaluate at id_A. Precomposition sends id_A to f, so the square gives
$$\alpha_X(f)=Ff\bigl(\alpha_A(\operatorname{id}_A)\bigr).$$
Thus α equals the transformation constructed from its selected element. The two assignments are inverse, proving bijectivity. ∎

The identity arrow has a special role because every arrow f:X→A is its precomposition by f. Naturality propagates the value at that one element to every other component. The theorem does not say that an arbitrary value at an arbitrary object determines a transformation without this representable structure.

The bijection is natural in both variables. If β:F⇒G, then evaluating βα at the identity gives β_A(α_A(id_A)), so the corresponding element is β_A(a). If u:A→B, precomposing a transformation yB⇒F with yu gives, at id_A, the value F(u)(b), where b is its element of FB. This is contravariant in A, as the arrow FA←FB requires. These calculations specify the two naturality claims rather than leaving their directions implicit.

## 3. Full faithfulness and recovered arrows

Apply the theorem with F=yB. It gives
$$\operatorname{Nat}(yA,yB)\cong\operatorname{Hom}_C(A,B).$$
Under this bijection an arrow u corresponds exactly to postcomposition by u, because α_X(f)=uf. Therefore y is fully faithful.

**Corollary 5.2.** If yA and yB are naturally isomorphic, then A and B are isomorphic. A chosen natural isomorphism determines a unique underlying isomorphism of representing objects.

*Proof.* Fullness supplies arrows u:A→B and v:B→A corresponding to the transformation and its inverse. Functoriality gives y(vu)=id_yA and y(uv)=id_yB. Faithfulness gives vu=id_A and uv=id_B. The arrow u is uniquely recovered by evaluating at id_A. ∎

This is a reconstruction result from all generalised elements and their compatibility. Knowing only the cardinalities of the hom sets is not enough, because it supplies neither the component functions nor their naturality. Even choosing unrelated bijections at each object would omit the equation used in the proof.

Global points alone can also be insufficient. In Grp the terminal object is the trivial group, and there is only one map from it to any group. These points cannot distinguish the identity and trivial endomorphisms of C₂. Yoneda instead uses every domain X and compatibility with every map between such domains. Taking X=A and its identity is what recovers a general arrow without needing a particular collection of underlying elements.

## 4. Covariant Yoneda and universal elements

There is a dual covariant form. For F:C→Set and hA=Hom_C(A,−),
$$\operatorname{Nat}(hA,F)\cong F(A).$$
The transformation associated with a sends f:A→X to Ff(a). Its naturality follows from covariant functoriality. Evaluating at id_A and applying naturality to f proves the inverse formulas exactly as before, with arrows reversed. The assignment A↦hA is fully faithful from Cᵒᵖ to [C,Set]; this time changing the representing object acts by precomposition and reverses its direction.

A presheaf F is representable when there is an object A and a natural isomorphism yA⇒F. Equivalently it has an element a∈FA such that every x∈FX has a unique expression Ff(a) for f:X→A. This equivalence is exactly the formula of Theorem 5.1 together with componentwise bijectivity. We call a a universal element.

For a presheaf, form its category of elements. An object is a pair (X,x∈FX). An arrow (X,x)→(Y,y) is f:X→Y with Ff(y)=x. Composition follows from contravariant functoriality and identities from its identity law. The universal-element condition says precisely that (A,a) is terminal in this category: its incoming arrow from (X,x) exists uniquely. For a covariant functor the analogous condition is initial, using arrows with Ff(x)=y. Keeping this direction straight prevents confusing two different universal mapping problems.

## 5. Underlying sets of groups and natural operations

**Worked example 5.3.** The underlying-set functor U:Grp→Set is covariantly represented by Z. A homomorphism Z→G is determined by the image g of one, and every g defines a homomorphism n↦gⁿ. Evaluation at one is therefore a bijection Hom(Z,G)→UG. It is natural because applying a homomorphism to gⁿ gives the same power of its image. The representing universal element is one in the underlying group Z.

Covariant Yoneda now classifies natural transformations U⇒U by integers. Under the representation, a transformation is determined by its value on the universal element one of Z. If that value is n, naturality with the homomorphism Z→G selecting g forces the operation on G to be g↦gⁿ. Conversely integer powers commute with every group homomorphism, so each n supplies a transformation. Different integers give different operations because they differ on one in Z.

The target category is Set. Consequently these component functions are not required to be group homomorphisms. For instance squaring is natural as an operation on underlying sets, but squaring on S₃ does not preserve products: for the transpositions a=(12),b=(23), both squares are identity whereas (ab)² is a nonidentity three-cycle. This separates naturality from preservation of algebraic structure by a component.

Restrict U to the category of finite groups. It is not represented by any finite group P. If p∈P were a universal element, its order n would force every image of p under a homomorphism to have order dividing n. Yet the cyclic group of order n+1 has a generator of order n+1, which could not be obtained. This contradicts universal generation of the underlying elements. Thus changing the allowed category changes representability, even though its arrows are still ordinary group homomorphisms.

## 6. Subsets are represented by a two-element set

**Worked example 5.4.** The contravariant power-set functor P on Set sends a function to inverse image. It is represented by the set 2={0,1}: a function χ:X→2 corresponds to the subset χ inverse({1}). Its inverse sends a subset to its characteristic function. Precomposing the characteristic function pulls back its subset, so the bijection is natural. The universal element is the subset {1} of 2.

Yoneda classifies every natural unary operation on subsets, with respect to inverse image. A transformation P⇒P corresponds to a subset K⊆2. On A⊆X it must act by
$$A\longmapsto\chi_A^{-1}(K).$$
The four choices of K give constant empty subset, identity, complement and constant full subset. These operations all commute with inverse image. The formula also proves no other natural unary operation exists on this whole category with these maps.

This classification is not a statement about covariant direct-image power sets. Complement does not commute with direct image in general. For the inclusion of a singleton into a two-element set, the complement of the full source is empty and has empty image, while the complement of its image in the target is nonempty. The variance of the actual functor is therefore essential to the conclusion.

Pairs of subsets are represented by 2×2, because maps X→2×2 are pairs of characteristic functions. Thus natural transformations P×P⇒P correspond to subsets of the four-element set 2×2, giving sixteen binary Boolean operations. Intersection corresponds to the singleton {(1,1)}; union to all pairs except (0,0); symmetric difference to {(0,1),(1,0)}. Each operation is evaluated pointwise according to the membership pair of an element. The universal calculation proves both their naturality and the completeness of the list.

## 7. Products and representing objects

**Worked example 5.5.** For fixed A,B∈C, consider the presheaf F(X)=Hom(X,A)×Hom(X,B), acting by precomposition in both coordinates. A representation of F by P is precisely a product of A,B. Indeed its universal element in FP is a pair of projections p:P→A,q:P→B. The universal-element formula sends h:X→P to (ph,qh), and componentwise bijectivity is exactly existence and uniqueness of a pairing arrow. This recovers the previous chapter's product property without adding an elementwise model of P.

The representation also explains uniqueness and functoriality uniformly. A natural map between two such mapping problems gives, when they are representable, a unique map between their representing objects. For product-coordinate maps, that recovered arrow is the f×g already defined by its projections. The identity evaluation formula proves it has the stated coordinates. Naturality and Yoneda do not assert existence of the products; they control maps once representation has been established.

For vector spaces, the underlying-set functor is covariantly represented by the one-dimensional space k: every linear map k→V is determined by the image of one. Its natural set-valued endomorphisms are therefore indexed by elements c∈k and act as v↦cv. This reproves the scalar-operation classification and shows that linearity of the component maps follows in this example even when it was not imposed as part of their target category. The representing object and its universal element determine which operations are possible.

## 8. Exercises

### CAT-05-01 — Recover a transformation

For a presheaf F and a∈FA, prove directly that α_X(f)=Ff(a) is natural.

<details><summary>Hint 1</summary>
Use an arrow h:X′→X and an element f:X→A.
</details>
<details><summary>Hint 2</summary>
Contravariant composition gives F(fh)=Fh∘Ff.
</details>
<details><summary>Solution</summary>
Applying the two routes gives Fh(α_X(f))=Fh(Ff(a)) and α_X′(fh)=F(fh)(a). Contravariant functoriality makes these equal. Their common value lies in FX′. Thus every naturality square commutes, and the formula defines a transformation yA⇒F. This construction verifies existence of the whole family before the identity evaluation proves uniqueness.
</details>

### CAT-05-02 — Recover an arrow

Given α:yA⇒yB, express the corresponding arrow u:A→B and prove its component formula.

<details><summary>Hint 1</summary>
Evaluate at the identity of A.
</details>
<details><summary>Hint 2</summary>
Apply naturality to f:X→A.
</details>
<details><summary>Solution</summary>
Set u=α_A(id_A), which belongs to Hom(A,B). Naturality for f gives α_X(f)=u∘f. Therefore α is postcomposition by u on every hom set, not only at A. This also proves uniqueness: any other recovered arrow would have the same evaluation at the identity. The argument needs compatibility across domains and would fail for arbitrary unrelated functions on the individual hom sets.
</details>

### CAT-05-03 — Covariant direction

State the action of the covariant representable Hom(A,−) on f:X→Y and explain how changing A acts on representables.

<details><summary>Hint 1</summary>
The first action uses postcomposition.
</details>
<details><summary>Hint 2</summary>
For u:A→B, a map B→X can be precomposed with u.
</details>
<details><summary>Solution</summary>
The arrow f sends h:A→X to fh:A→Y, giving a covariant functor in X. An arrow u:A→B gives instead a natural transformation Hom(B,−)⇒Hom(A,−) by precomposition h↦hu. Thus the representing-object assignment reverses u and defines a functor from C opposite. Distinguishing the variable being changed prevents assigning the wrong direction to the fully faithful covariant Yoneda embedding.
</details>

### CAT-05-04 — Universal elements and terminality

For a presheaf F, prove that a universal element a∈FA gives a terminal object in its category of elements.

<details><summary>Hint 1</summary>
An incoming arrow from (X,x) is f:X→A satisfying Ff(a)=x.
</details>
<details><summary>Hint 2</summary>
Use both existence and uniqueness in the universal-element definition.
</details>
<details><summary>Solution</summary>
For every object (X,x), universality supplies a unique f:X→A with Ff(a)=x. That is exactly a unique arrow (X,x)→(A,a) in the element category. Hence (A,a) is terminal. Conversely terminality gives the same unique equations and therefore componentwise bijections Hom(X,A)→FX. For a covariant functor the element-category equation is reversed in its use of F, and the analogous universal object is initial.
</details>

### CAT-05-05 — Complement naturality

Prove that complement commutes with inverse image, and give a counterexample for direct image.

<details><summary>Hint 1</summary>
Compare membership for an element of the source.
</details>
<details><summary>Hint 2</summary>
For failure of direct-image compatibility, use a nonsurjective inclusion.
</details>
<details><summary>Solution</summary>
For f:X→Y and B⊆Y, an element x belongs to the inverse image of Y minus B exactly when f(x) does not belong to B. This is equivalent to x not belonging to the inverse image of B, so the complements agree. For the inclusion {a}→{a,b}, take the full source subset. Its source complement is empty and has empty image, whereas the target complement of its image is {b}. Thus complement defines the stated contravariant natural operation but not the corresponding covariant one.
</details>

### CAT-05-06 — Four unary operations

Identify the universal subset K⊆2 corresponding to the identity and complement transformations P⇒P.

<details><summary>Hint 1</summary>
Evaluate each operation on the universal element {1}⊆2.
</details>
<details><summary>Hint 2</summary>
Pull K back along a characteristic function.
</details>
<details><summary>Solution</summary>
Identity sends {1} to {1}, so its K is {1}. Complement sends it to {0}, so its K is {0}. Pullback along χ_A gives A and X minus A respectively. The other two subsets, empty and all of 2, give constantly empty and constantly full subsets. Yoneda makes this four-member list complete, because every transformation has exactly one value on the universal subset and that value determines all components.
</details>

### CAT-05-07 — A binary operation

Find the subset of 2×2 representing implication, which includes a point unless it belongs to the first subset and not the second.

<details><summary>Hint 1</summary>
List the four possible membership pairs.
</details>
<details><summary>Hint 2</summary>
Exclude exactly (1,0).
</details>
<details><summary>Solution</summary>
The representing subset is {(0,0),(0,1),(1,1)}. Pullback along the pair of characteristic functions of A,B gives (X minus A) union B. Pullback respects the two characteristic maps, so the operation is natural with respect to inverse images. This operation depends on the ambient X through complement, but that dependence is already encoded by the universal classifier; it does not prevent naturality.
</details>

### CAT-05-08 — A natural operation that is not homomorphic

Show squaring is natural for the underlying-set functor on groups but not a natural endomorphism of the identity functor on Grp.

<details><summary>Hint 1</summary>
Every homomorphism preserves powers.
</details>
<details><summary>Hint 2</summary>
Check the two transpositions (12),(23) in S₃.
</details>
<details><summary>Solution</summary>
For any homomorphism f, f(g²)=f(g)², giving the required Set-valued naturality equation. But squaring on S₃ is not a group homomorphism: the two transpositions have square identity while their product is a three-cycle with nonidentity square. Thus the component at S₃ is not an arrow of Grp, so the family cannot be a transformation between the identity functor on that target category. The target of the component maps is part of the statement.
</details>

### CAT-05-09 — Finite-group representability

Why does a hypothetical finite representing group for the underlying-set functor lead to a contradiction even if its universal element does not generate it?

<details><summary>Hint 1</summary>
Only the order of that one element is needed.
</details>
<details><summary>Hint 2</summary>
Homomorphic images cannot increase its order beyond a multiple constraint.
</details>
<details><summary>Solution</summary>
If the universal element p has order n, any homomorphism sends it to an element whose order divides n. Universality requires every element of every finite group to occur as such an image, independently of whether p generates the source. A generator in the cyclic group of order n+1 cannot occur, since n+1 does not divide n. The contradiction therefore uses only finiteness of the element order, not a prior presentation of the representing group.
</details>

### CAT-05-10 — Products as representation

Given a representation of X↦Hom(X,A)×Hom(X,B), recover the product projections explicitly.

<details><summary>Hint 1</summary>
The representing object is P and its identity is an element of Hom(P,P).
</details>
<details><summary>Hint 2</summary>
Apply the representing bijection at P to id_P.
</details>
<details><summary>Solution</summary>
The image of id_P is a pair (p:P→A,q:P→B). Yoneda's formula says the component at X sends f:X→P to (pf,qf). Bijectivity therefore gives exactly one f for every prescribed pair of arrows from X to A,B. Hence P with these projections is a product. The recovery includes its structure maps; simply knowing the representing object's isomorphism class would not yet specify which projections realise the property.
</details>

### CAT-05-11 — Generalised points

Give two distinct maps in Grp that cannot be distinguished by precomposition with any map from the terminal object, and explain how Yoneda distinguishes them.

<details><summary>Hint 1</summary>
Use the identity and trivial endomorphisms of C₂.
</details>
<details><summary>Hint 2</summary>
Use C₂ itself as a testing domain.
</details>
<details><summary>Solution</summary>
Every map from the trivial group to C₂ selects its identity, so both proposed endomorphisms give the same composite with every such map. They remain distinct, because one sends the nonidentity element to itself and the other sends it to identity. In the representable Hom functor, evaluate their induced transformations at the domain C₂ on id_C₂. The results are the original two arrows and are different. The full collection of generalised points includes the needed test.
</details>

### CAT-05-12 — Natural in the presheaf

Let β:F⇒G and let α:yA⇒F correspond to a∈FA. Prove that βα corresponds to β_A(a).

<details><summary>Hint 1</summary>
Evaluate the composite at id_A.
</details>
<details><summary>Hint 2</summary>
Alternatively use naturality of β on f:X→A.
</details>
<details><summary>Solution</summary>
The identity evaluation gives (βα)_A(id_A)=β_A(α_A(id_A))=β_A(a). At a general f, the component is β_X(Ff(a)), which equals Gf(β_A(a)) by naturality of β. This is exactly the transformation constructed from the element β_A(a). Both calculations agree and explicitly prove naturality of the Yoneda correspondence in its presheaf variable.
</details>

## 9. Next connection

Yoneda translates natural mapping problems into representing objects and recovered arrows. Limits and colimits next organise whole diagrams of such mapping requirements, with products and equalisers providing concrete constructions when the stated size hypotheses permit them.
