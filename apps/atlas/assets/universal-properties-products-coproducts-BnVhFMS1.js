var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: universal-properties-products-coproducts
title: "Universal Properties, Products and Coproducts"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Universal Properties, Products and Coproducts

A Cartesian product is often introduced as a set of ordered pairs. Its categorical meaning is the ability to specify a map into it by specifying two coordinate maps. This mapping property survives in groups and vector spaces, even though their objects have extra structure. Universal properties make that shared reasoning precise and explain which comparison maps are uniquely determined.

Read [natural transformations](natural-transformations-equivalence.md) and the examples of initial and terminal objects. The main constructions use only sets, groups and abelian groups. All hom collections appearing as sets are assumed small. We first discuss finite products and coproducts; arbitrary diagram limits and their size restrictions receive their own chapter.

## 1. Universality belongs to an object with maps

For objects X,Y in C, define the category of pairs of arrows into them. Its objects are triples (A,a:A→X,b:A→Y). An arrow from (A,a,b) to (A′,a′,b′) is h:A→A′ with a′h=a and b′h=b. Identities and composition satisfy those equations by associativity. A terminal object in this category is a product of X and Y.

Thus a product is an object P together with projections p_X:P→X and p_Y:P→Y, such that for every a:A→X and b:A→Y there is exactly one arrow ⟨a,b⟩:A→P satisfying p_X⟨a,b⟩=a and p_Y⟨a,b⟩=b. Existence and uniqueness are both required. Merely supplying arrows to X,Y does not prove this property, and the underlying object alone does not record the chosen projections.

**Proposition 4.1 (Compatible uniqueness).** Two products of the same pair have a unique isomorphism commuting with the projections.

*Proof.* Let (P,p_X,p_Y) and (Q,q_X,q_Y) be products. Their properties give unique arrows u:P→Q with q_Xu=p_X,q_Yu=p_Y and v:Q→P with p_Xv=q_X,p_Yv=q_Y. Both vu and id_P have composites p_X,p_Y with the projections, so uniqueness for P gives vu=id_P. Similarly uv=id_Q. Any compatible arrow P→Q is already u by uniqueness. ∎

This is uniqueness of a compatible isomorphism. It does not assert that P and Q have only one isomorphism as bare objects, or that their chosen representatives are equal. Even a product of two equal sets may have a coordinate-swap automorphism that does not preserve its two individual projections.

## 2. Products in concrete categories

**Worked example 4.2.** In Set, take X×Y with its coordinate projections. Given a,b with common source A, define t↦(a(t),b(t)). This supplies the required arrow. Any function with those coordinates has exactly that value at every t, proving uniqueness. The argument includes empty sets. If either factor is empty, the product is empty, because a map to that factor forces the common source to be empty as well.

In Grp, use the direct product with componentwise multiplication and homomorphic projections. Pairing two homomorphisms is a homomorphism, since the product of the paired values at s,t equals the paired value at st in both coordinates. Uniqueness is inherited from the underlying function calculation. The algebraic step is essential: a set pairing of arbitrary functions would not prove universality in Grp.

The property can also be written as a bijection
$$\\operatorname{Hom}(A,P)\\longrightarrow
\\operatorname{Hom}(A,X)\\times\\operatorname{Hom}(A,Y),\\quad
u\\longmapsto(p_Xu,p_Yu).$$
Its inverse is pairing. It is natural in A contravariantly: precomposing u with h:A′→A corresponds on the right to precomposing both coordinates with h. The equation ⟨a,b⟩h=⟨ah,bh⟩ follows because the two sides have the same projections. Thus the objectwise bijections fit into a natural comparison of Hom functors.

This description suggests how to prove a proposed formula for maps into a product: compare all its projections and use uniqueness. Comparing elements is an optional technique available in concrete categories, whereas projection comparison works without elements.

## 3. Products are functorial once chosen

Suppose products have been chosen for every relevant ordered pair of objects. For f:X→X′ and g:Y→Y′, define f×g:X×Y→X′×Y′ by its two projections f p_X and g p_Y. The product property gives a unique such arrow. The identity pair induces the identity map because their projections agree. For a second pair f′,g′, the composite (f′×g′)(f×g) has projections f′f p_X and g′g p_Y, so uniqueness gives
$$(f'\\times g')(f\\times g)=(f'f)\\times(g'g).$$
Therefore these choices produce a functor C×C→C. As with representative choices for equivalences, a claim about all objects must retain its size or choice convention; the construction itself starts from specified product data.

The diagonal Δ_X:X→X×X is the unique arrow with both projections id_X. The symmetry X×Y→Y×X interchanges the projections; its square is the identity by uniqueness. Hence it is an isomorphism. If 1 is terminal, the projection 1×X→X is an isomorphism with inverse pairing of the unique arrow X→1 and id_X.

There is a similarly canonical associativity isomorphism (X×Y)×Z→X×(Y×Z): its three leaf projections are the original arrows to X,Y,Z. Both nested products satisfy the three-coordinate mapping property, by applying the binary property twice. The uniqueness proof of Proposition 4.1 then gives the compatible isomorphism and inverse.

The same reasoning controls repeated reassociation. Every parenthesised finite product has a unique map from a common source with specified leaf projections, by induction on the product expression. Any two composites of compatible reassociation maps therefore agree if they end at the same parenthesisation and preserve the same leaves. This proves the product coherence equations directly from uniqueness; the maps are canonical because of their compatibility, rather than because the differently parenthesised objects were assumed equal.

## 4. Coproducts reverse the mapping problem

A coproduct of X,Y consists of Q with injections i_X:X→Q and i_Y:Y→Q such that any a:X→A and b:Y→A extend uniquely to [a,b]:Q→A with [a,b]i_X=a and [a,b]i_Y=b. It is a product in the opposite category, so the compatible uniqueness proof reverses to give a unique compatible isomorphism between any two coproducts.

The word “injection” here names a structure map, not an assumption of monicity in every category. Its universal property specifies how maps out of Q are determined. Extra properties of those maps require a separate argument in the category at hand.

**Worked example 4.3.** In Set the coproduct is the tagged disjoint union, with elements (0,x) and (1,y). The tags keep the two sources separate even when their underlying sets overlap. Given a,b, define the extension by [a,b](0,x)=a(x) and [a,b](1,y)=b(y). Each element has exactly one tag, so this is well-defined and unique. The ordinary union cannot replace it: if an element lies in both inputs, a and b could prescribe different values there.

A coproduct gives a covariant natural bijection Hom(Q,A)≅Hom(X,A)×Hom(Y,A). Postcomposition with h:A→A′ acts on both output maps and commutes with the extension operation. Chosen coproducts also form a bifunctor by the dual of the product construction. These dual statements reverse the actual arrows and equations, rather than assuming that objects written with similar notation satisfy both properties.

## 5. Finite biproducts in abelian groups

**Worked example 4.4.** For abelian groups A,B, the direct product is also a coproduct. Use i_A(a)=(a,0) and i_B(b)=(0,b). Given homomorphisms u:A→C and v:B→C, the formula (a,b)↦u(a)+v(b) defines a homomorphism because C is abelian. It has the required restrictions. Uniqueness follows from (a,b)=(a,0)+(0,b). Thus this finite object has both mapping properties, with different structural maps. It is called a biproduct.

The zero group is both initial and terminal. In any category with a zero object, the unique composite X→0→Y is the zero arrow from X to Y. Precomposition or postcomposition of a zero arrow stays zero because the relevant map through 0 is unique. In Ab, this is the usual zero homomorphism.

For the biproduct, its maps satisfy p_Ai_A=id_A, p_Bi_B=id_B and the two cross composites are zero. Moreover i_Ap_A+i_Bp_B=id_(A×B), checked at each pair. The sum is meaningful here because homomorphisms of abelian groups can be added pointwise. An arbitrary category need not have an addition of parallel arrows, so this equation cannot be transferred without the additive hypotheses developed later.

The direct product of nonabelian groups is generally not their coproduct. Take two copies of C₂ and try to extend maps taking their generators to (12) and (23) in S₃. In the direct product the two standard source generators commute. Their proposed images do not: their products in the two orders are different three-cycles. No homomorphism can have those restrictions, so the required extension fails to exist. The product property remains valid; the coproduct property is the one that fails.

## 6. Free constructions and quotients are universal data

The word monoid L(X) from Chapter 2 comes with a function j:X→UL(X). Consider the category whose objects are functions a:X→UM to underlying sets of monoids, and whose arrows are monoid homomorphisms h with Uh∘a=b. The word-extension proof gives a unique arrow from j to every such object: send a word to the product of its assigned letters. Thus j is initial in this category. The universal object includes the map j, not just the monoid L(X).

**Worked example 4.5 (A quotient group).** Fix a normal subgroup N of G. The quotient q:G→G/N is initial among homomorphisms f:G→H killing every element of N, with arrows given by compatible homomorphisms of the targets. To prove it, define the induced map by gN↦f(g). If gN=g′N, then g inverse g′ belongs to N and f(g)=f(g′), giving well-definedness. It preserves products by coset multiplication and has the required composite with q. Every coset has a representative, so the composite equation determines it uniquely.

The normality hypothesis gives the group structure on cosets. If one starts with an arbitrary subgroup, quotienting by its normal closure gives the analogous universal group, but the ordinary set of its cosets need not have that group structure. The mapping problem determines which quotient construction is appropriate.

Universal descriptions also prove compatibility of induced maps. For example if f:G→H sends N into a normal subgroup M, it induces G/N→H/M by the same formula. Two successive such maps compose as expected because both composites agree on the quotient map from G. Surjectivity of that map, or equivalently the uniqueness part of its property, proves the equality. Functoriality is therefore a consequence of the universal construction, rather than an extra formula checked by unrelated choices.

## 7. Universal objects can fail to exist

Passing to a smaller category can destroy existence even when its arrows are unchanged between the retained objects. The category of nonempty sets has no initial object. If I were initial, the set of functions I→{0,1} would have exactly one member. Since I is nonempty, the two constant functions are distinct, contradicting that requirement. A singleton is terminal there, but no initial object replaces the omitted empty set.

There is also no coproduct of two copies of C₂ in the category of finite groups. Suppose a finite group P with the required maps existed. For each n≥3, take the dihedral group of order 2n, generated by two reflections. Concretely on residues modulo n, take s(i)=−i and t(i)=1−i. Both are involutions; their composite is a rotation by one, so they generate all n rotations and n reflections. These transformations are distinct for n≥3, proving the stated order.

The two reflection maps from C₂ would extend to a homomorphism P→D_(2n). Its image contains both reflections and therefore the entire dihedral group. Hence |P|≥2n for every n, contradicting finiteness of P. This proves nonexistence inside finite groups without needing the full free-product construction. A universal property is a demand on every allowed target, and arbitrarily large finite targets already obstruct it here.

## 8. Exercises

### CAT-04-01 — Projection uniqueness

Suppose u,v:A→X×Y have equal composites with both projections. Prove u=v and explain why either projection alone need not suffice.

<details><summary>Hint 1</summary>
Both maps solve the same product mapping problem.
</details>
<details><summary>Hint 2</summary>
In Set, fix the first coordinate while changing the second.
</details>
<details><summary>Solution</summary>
The two equal coordinate composites specify a pair of maps A→X,Y. The uniqueness clause of the product property says exactly one map has those two coordinates, so u=v. One coordinate alone does not generally determine a pair. For a singleton source and X a singleton but Y a two-element set, the two maps selecting different second coordinates have the same first projection and differ. Products require all the specified coordinate data.
</details>

### CAT-04-02 — A tagged sum

For X=Y={a}, construct their coproduct in Set and show why the untagged union with its usual inclusions fails.

<details><summary>Hint 1</summary>
Two source copies are different even when their underlying elements agree.
</details>
<details><summary>Hint 2</summary>
Map the two copies to different elements of {0,1}.
</details>
<details><summary>Solution</summary>
The tagged union has two elements (0,a),(1,a), and any two prescribed image values determine a unique function from it. The ordinary union is the singleton {a}. Its two usual inclusions are the same map. If the source maps to {0,1} send the first copy to zero and the second to one, no function from that singleton can satisfy both restrictions. Thus the existence clause fails, although the untagged set contains both underlying inputs.
</details>

### CAT-04-03 — The terminal unit

Prove that X×1 is isomorphic to X when 1 is terminal, identifying both arrows and their composites.

<details><summary>Hint 1</summary>
One arrow is the projection to X.
</details>
<details><summary>Hint 2</summary>
Pair id_X with the unique map from X to 1.
</details>
<details><summary>Solution</summary>
Let p:X×1→X be projection and j=⟨id_X,!⟩:X→X×1. Then pj=id_X by the pairing equation. The composite jp and id_(X×1) have the same projection to X. They also have the same projection to 1 because there is only one arrow to a terminal object. Product uniqueness gives jp=id. Thus the chosen projections and terminal map supply an actual inverse pair.
</details>

### CAT-04-04 — Diagonal naturality

For f:X→Y, prove (f×f)Δ_X=Δ_Yf.

<details><summary>Hint 1</summary>
Both arrows have target Y×Y.
</details>
<details><summary>Hint 2</summary>
Compare their two projections separately.
</details>
<details><summary>Solution</summary>
Each projection of the left composite is f, because the two projections of Δ_X are identities and the definition of f×f applies f in each coordinate. Each projection of the right composite is also f by the diagonal equations for Y. Product uniqueness makes the arrows equal. This is a naturality equation for the diagonal transformation from the identity functor to the chosen product-with-itself functor.
</details>

### CAT-04-05 — A zero arrow

Show that a zero arrow remains zero after precomposition and postcomposition in a category with a zero object.

<details><summary>Hint 1</summary>
Write it explicitly as a composite through 0.
</details>
<details><summary>Hint 2</summary>
Maps to or from 0 are unique in the required direction.
</details>
<details><summary>Solution</summary>
The zero arrow X→Y is X→0→Y. Precomposing by W→X gives W→X→0→Y, whose first part is the unique arrow W→0, so the result is the zero arrow W→Y. Postcomposing by Y→Z similarly replaces 0→Y→Z by the unique arrow 0→Z. Associativity then gives zero X→Z. No addition on hom sets is needed for either conclusion.
</details>

### CAT-04-06 — A nonabelian obstruction

Explain why the standard maps C₂→C₂×C₂ do not make the direct product a coproduct in Grp.

<details><summary>Hint 1</summary>
The two standard generators commute in the product.
</details>
<details><summary>Hint 2</summary>
Send them to two noncommuting transpositions in S₃.
</details>
<details><summary>Solution</summary>
The maps sending the source generators to (12) and (23) are legitimate homomorphisms because those permutations square to identity. An extending homomorphism from C₂×C₂ would have to preserve commutation of its two coordinate generators. The two transpositions do not commute: the ordered products give opposite three-cycles. Hence no extension exists. This disproves the required coproduct property with one explicit target while leaving the valid product property untouched.
</details>

### CAT-04-07 — Compatible isomorphism

Why does Proposition 4.1 require commuting with projections when claiming a unique isomorphism between products?

<details><summary>Hint 1</summary>
Consider a product of a two-element set with itself.
</details>
<details><summary>Hint 2</summary>
Coordinate swap is an isomorphism but does not fix the named projections.
</details>
<details><summary>Solution</summary>
A bare product object can have many automorphisms. In the stated set product, the identity and coordinate swap are distinct bijections. Only the identity preserves both projections individually; swap interchanges them. The universal property determines an arrow by its specified coordinate maps, so uniqueness applies within that compatibility condition. It cannot prohibit isomorphisms solving a different mapping problem.
</details>

### CAT-04-08 — Quotient factorisation

Let f:G→H be a homomorphism. Prove that it factors through G/N exactly when N⊆ker f, for a normal subgroup N.

<details><summary>Hint 1</summary>
The quotient map kills N.
</details>
<details><summary>Hint 2</summary>
For the converse, define the value on a coset representative.
</details>
<details><summary>Solution</summary>
Any composite through the quotient kills N, proving necessity. If N lies in the kernel, send gN to f(g). Two representatives differ by an element of N, whose image is identity, so the formula is well-defined. It preserves multiplication and composes with the quotient to f. Surjectivity of the quotient map makes the induced homomorphism unique. Both the condition and the resulting map are part of the universal factorisation statement.
</details>

### CAT-04-09 — Naturality of pairing

For a:A→X,b:A→Y and h:A′→A, prove ⟨a,b⟩h=⟨ah,bh⟩.

<details><summary>Hint 1</summary>
Both sides map A′ to the same product.
</details>
<details><summary>Hint 2</summary>
Compose with each projection and use associativity.
</details>
<details><summary>Solution</summary>
The first projection of the left side is ah, and its second is bh, because the projections of the pairing are a,b. The right side has those same projections by its defining property. Uniqueness therefore proves equality. This establishes contravariant naturality in the common source, and avoids assuming any elementwise description of the product.
</details>

### CAT-04-10 — Finite-group nonexistence

In the finite-group argument, why is the map from a hypothetical coproduct to each dihedral group surjective?

<details><summary>Hint 1</summary>
The restrictions specify two reflection images.
</details>
<details><summary>Hint 2</summary>
Those reflections generate the entire target.
</details>
<details><summary>Solution</summary>
The extension's image is a subgroup containing the images of both given C₂ maps. Those images include the chosen reflections s,t. Their composite is a rotation generating all rotations, and composing rotations with a reflection gives all remaining symmetries. Hence the image is the full dihedral group. Surjectivity supplies the lower order bound 2n on the hypothetical finite source, and unbounded n creates the contradiction. Merely having some homomorphism to a large target would not imply that bound.
</details>

### CAT-04-11 — Product reassociation

Explain why two composites of reassociation maps from ((W×X)×Y)×Z to W×(X×(Y×Z)) agree if each preserves all four leaf projections.

<details><summary>Hint 1</summary>
Iterate the binary product mapping property.
</details>
<details><summary>Hint 2</summary>
A map into the target is uniquely determined by its four coordinate maps.
</details>
<details><summary>Solution</summary>
To map into the target, first specify its W-coordinate and its map into X×(Y×Z). The latter is determined by its X-coordinate and map into Y×Z, which is determined by the Y- and Z-coordinates. Thus the four leaf maps uniquely determine the complete arrow. Both proposed composites have the same four maps by assumption, so they agree. This proves the relevant coherence equality through repeated uniqueness rather than a literal equality of parenthesised objects.
</details>

### CAT-04-12 — Free monoid universality

For X={a,b} and a monoid M with chosen elements u,v, describe the unique homomorphism L(X)→M extending that choice. Does it require u,v to commute?

<details><summary>Hint 1</summary>
Keep the order of the letters in each word.
</details>
<details><summary>Hint 2</summary>
Concatenation corresponds to multiplying two ordered products.
</details>
<details><summary>Solution</summary>
Replace every a by u and every b by v, multiply in the word's order, and send the empty word to one. Associativity proves that concatenating words corresponds to multiplying their images, so this is a homomorphism. Every word is a product of its letters, making this extension unique. No commutativity is required: the words ab and ba are distinct and may map to different products uv and vu. Imposing commutation would define a different universal problem.
</details>

## 9. Next connection

Products and free objects are specified by their interactions with all maps. The Yoneda lemma next explains the general mechanism by which compatible maps between Hom functors recover an actual arrow between their representing objects.
`;export{e as default};