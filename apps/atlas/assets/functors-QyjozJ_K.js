var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: functors
title: "Functors"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Functors

Categories organise objects and their permitted arrows. A functor transports both kinds of data, preserving composition and identities. The arrow assignment carries mathematical information that an object assignment alone cannot supply: two constructions can give the same objects while acting differently on maps.

Read [Categories and Examples](categories-and-examples.md), including opposites and path categories. We assume categories are locally small when their hom collections are used as sets. A small category has a set of objects and a set of arrows. Set and the usual categories of all groups are large in the ambient convention; writing a category of all such objects does not assert a set of all sets. Any formation of a functor category or a product indexed by objects must respect these size distinctions. No unrestricted collection of all categories is treated as a small category.

## 1. The two assignments and two laws

A covariant functor F:C→D assigns an object FX to each X and an arrow Ff:FX→FY to every f:X→Y, satisfying
$$F(\\operatorname{id}_X)=\\operatorname{id}_{FX},\\qquad
F(g\\circ f)=F(g)\\circ F(f).$$
Both laws are part of the definition. An assignment preserving binary composition need not preserve identities: a constant map from a monoid to a nonidentity idempotent preserves products but sends its identity to the wrong arrow.

The identity functor fixes every object and arrow. Functors compose by composing their assignments. The identity and composition laws for the composite follow by substituting those for the two given functors. Functor composition is associative as equality of assignments. These facts permit a category of small categories and functors at an appropriately larger size, rather than a small category containing all small categories in the same universe.

A contravariant functor from C to D means a covariant functor Cᵒᵖ→D. Thus f:X→Y gives Ff:FY→FX, and a composable pair satisfies F(g∘f)=Ff∘Fg. Contravariance reverses arrows and composition; it does not reverse multiplication in the coefficient field or change the identity convention.

**Proposition 2.1.** Every functor preserves isomorphisms.

*Proof.* Apply F to the two equations for an inverse. They become F(f inverse)∘Ff=id_FX and Ff∘F(f inverse)=id_FY. Hence F(f inverse) is the inverse of Ff. The contravariant case is the same argument with reversed equations. ∎

A functor need not reflect isomorphisms. The functor from the one-object category of nonnegative integers under addition to the terminal one-object category sends every arrow to an identity. A positive integer is not invertible in the source monoid, although its image is invertible.

## 2. Forgetting and forming quotients

**Worked example 2.2.** The forgetful functor U:Grp→Set sends a group to its underlying set and a homomorphism to its underlying function. Its laws hold because identities and composites are the same functions before and after forgetting. The construction is not just the statement that each group has an underlying set: the arrow assignment and its preservation laws complete the functor.

For a group G let G_ab=G/[G,G]. A homomorphism f:G→H sends commutators to commutators, since f(aba inverse b inverse) is the corresponding commutator of f(a),f(b). Hence it sends the generated commutator subgroup into [H,H]. Define f_ab on cosets by [g]↦[f(g)]. This is well-defined because differences in the source commutator subgroup map into the target subgroup. It is a homomorphism, preserves identity maps and respects composition by evaluating a coset representative. Thus abelianisation is a functor Grp→Ab.

These are different operations. Forgetting retains the underlying function of each map; abelianisation can identify distinct maps. If G is nonabelian, choose a noncentral h. Conjugation g↦hgh inverse differs from the identity on G, but both induce the identity on G_ab because conjugation becomes trivial in an abelian quotient. This gives an explicit loss of arrow information without claiming that the quotient has lost every group invariant.

## 3. Fullness, faithfulness and reflection

A functor is faithful if each map Hom_C(X,Y)→Hom_D(FX,FY) is injective. It is full if each such map is surjective, and fully faithful if both conditions hold. These are hom-set conditions for each fixed pair of source objects; faithfulness does not require an injective object assignment.

The forgetful functor Grp→Set is faithful because distinct homomorphisms are distinct underlying functions. It is not full: a function between two groups need not preserve the identity or multiplication. For instance the function interchanging the two elements of C₂ is not a homomorphism. The inclusion Ab→Grp is fully faithful because every group homomorphism between abelian groups is already an arrow of Ab.

**Proposition 2.3.** A fully faithful functor reflects isomorphisms. A faithful functor reflects monomorphisms and epimorphisms.

*Proof.* Suppose Ff is invertible. Fullness supplies g:Y→X mapping to its inverse. Then F(gf)=id_FX=F(id_X), and faithfulness gives gf=id_X. The other composite gives fg=id_Y in the same way. Thus f is invertible.

If Ff is monic and fa=fb, applying F and cancelling Ff gives Fa=Fb. Faithfulness gives a=b, so f is monic. For epicity, start with af=bf and use cancellation on the other side. ∎

Full faithfulness does not by itself guarantee preservation of monomorphisms when target objects outside the image can supply new cancellation diagrams. Here is a finite example. Take the category generated by u,v:C→A and f:A→B with the relation fu=fv. Keep u and v distinct, as in the quotient path construction. In the full subcategory on A,B, the arrow f is monic because the only arrows into A are its identity. In the larger category it is not monic, as the distinct u,v witness. The inclusion is fully faithful but the target has an additional probing object C.

For preorder categories every functor is faithful, because each hom set has at most one element. A functor is a monotone object map: a comparison x≤y must give a comparison Fx≤Fy. Fullness additionally requires the converse implication for each pair. Thus fully faithful functors between posets are precisely order embeddings, rather than arbitrary monotone functions.

## 4. Hom as a functor

Fix an object A in a locally small category C. The covariant functor Hom_C(A,−):C→Set sends X to Hom_C(A,X), and f:X→Y to the function u↦f∘u. Identities act identically; applying first f and then g sends u to g∘f∘u, which is the action of their composite.

The contravariant Hom_C(−,A):Cᵒᵖ→Set sends f:X→Y to precomposition, mapping v:Y→A to v∘f:X→A. The composition law now reverses order. The reversal is forced by types, rather than being a convention one may change independently.

Both variables fit together in the bifunctor
$$\\operatorname{Hom}_C:C^{\\mathrm{op}}\\times C\\longrightarrow\\mathbf{Set}.$$
An arrow from (A,B) to (A′,B′) consists of a:A′→A and b:B→B′ in C. Its action sends u:A→B to b∘u∘a. Applying two such pairs gives the same result as their composite by associativity. Precomposition and postcomposition commute because (b∘u)∘a=b∘(u∘a). Local smallness is the exact condition that makes these values objects of Set.

**Worked example 2.4.** In a group viewed as a one-object category, the hom bifunctor acts on a group element u by left multiplication by b and right multiplication by a. In a general category these are typed compositions rather than unrestricted multiplication. The same formula therefore includes a familiar algebraic action and the more general map spaces needed for Yoneda later.

## 5. Words provide a free construction

For a set X let L(X) be the monoid of finite words in letters from X, with concatenation and the empty word. A function f:X→Y acts letter by letter on words. It preserves the empty word and concatenation, so gives a monoid homomorphism L(f). Applying identity functions or composing letter functions gives the same action on every finite list. Therefore L:Set→Mon is a functor.

It is faithful. If f and g differ at x, their images of the one-letter word [x] differ, so L(f) and L(g) differ. It is not full. For singleton alphabets {a} and {b}, a monoid homomorphism may send a to the two-letter word bb, extending by concatenation to aⁿ↦b^(2n). No function between these singleton sets induces that word map, because letterwise maps preserve the length of a one-letter word.

The word construction also has a universal extension property. A function j:X→underlying(M) into a monoid extends uniquely to a homomorphism L(X)→M by sending a word to the ordered product of its letters' images and the empty word to one. Concatenation proves multiplicativity. Uniqueness follows because every word is a product of one-letter words. The later adjunction chapter packages these extensions as a natural correspondence; the present proof establishes the actual algebraic extension first.

## 6. Opposite directions for power sets and linear duals

A function f:X→Y gives a direct-image map P(X)→P(Y), A↦f(A). Images respect identity functions and composites, so this is a covariant endofunctor of Set. It also gives an inverse-image map P(Y)→P(X), B↦f inverse(B), which is contravariant because inverse image of a composite is the composite of inverse images in reverse order. The notation f inverse(B) here means a subset preimage; f need not have an inverse function.

**Worked example 2.5.** Let X={0,1}, Y={*} and f the unique function. Direct image sends either nonempty singleton to {*}, so it is not injective on subsets. Inverse image sends the empty subset to empty and {*} to all of X. Thus these two functorial constructions have different domains, codomains and information. Replacing one by the other would change both variance and the actual map.

For vector spaces over a fixed field k, linear duality sends V to V*=Hom_k(V,k) and T:V→W to T*:W*→V*, λ↦λ∘T. Composition and identity laws are the contravariant Hom laws. On finite-dimensional spaces it is fully faithful as a functor from the opposite category. To see fullness, choose bases of V and W. A linear map W*→V* has a matrix which is the transpose of a unique matrix for a map V→W. The transpose reverses matrix products, matching the contravariant composition rule. Faithfulness follows from uniqueness of that transposed matrix. The bases prove existence and uniqueness but are not part of the intrinsic definition of T*.

This finite-dimensional proof should not be applied to arbitrary infinite-dimensional dual spaces by pretending that every linear functional has finite coordinate support in a chosen dual list. In infinite dimension the algebraic dual is larger than the span of those coordinate functionals. Each later use of a duality equivalence must retain its stated finiteness hypotheses.

## 7. Functors from presentations and the meaning of image

An assignment of objects to vertices and arrows to directed edges of a graph, respecting endpoints, extends uniquely to a functor from its free path category: send a path to the composite of its edge images and the empty path to the identity. Associativity makes concatenation compatible with this rule. Uniqueness follows because the paths are composites of their edges.

If relations are imposed, the extension descends exactly when the given related paths have equal images. The equivalence relation on paths given by equal images is a congruence, since composition of equal arrows stays equal. Thus checking the generating relations makes every consequence of those relations respected as well.

**Worked example 2.6.** A functor from a one-object group G to the category of k-vector spaces chooses a space V and an invertible operator for every g, with the identity and multiplication laws. This is precisely a representation of G. For the cyclic group of order three, choosing an operator T with T³=id is enough: the three arrows act by id,T,T². The relation proves invertibility, with inverse T², and multiplication respects exponents modulo three. This connects categorical presentations to exact representation certificates.

The essential image of F is the full subcategory of D consisting of objects isomorphic to some FX. “Full” here is deliberate. The literal collection of image arrows need not be closed under composition if distinct source objects map to the same target object. For example take two disjoint source arrows X→Y and Y′→Z, and map them to the consecutive generating arrows A→B→C of a free path category, identifying FY=FY′=B. Their target composite exists, but no source composite exists, so it is not an image arrow. The full essential image is nevertheless a well-defined subcategory.

## 8. Exercises

### CAT-02-01 — A missing identity law

Let a monoid contain an idempotent e≠1. Show the constant assignment to e preserves binary multiplication but is not a functor between the corresponding one-object categories.

<details><summary>Hint 1</summary>
Compute the image of a product and the product of the images.
</details>
<details><summary>Hint 2</summary>
The source identity also has image e.
</details>
<details><summary>Solution</summary>
Every product maps to e, while the product of its two images is e²=e. Thus composition is preserved. But the identity must map to the target identity one, whereas its image is e≠1. Hence the functor identity axiom fails. An endofunction monoid with a nonidentity projection supplies such an idempotent, so the missing axiom is a real independent restriction rather than a redundant convention.
</details>

### CAT-02-02 — A functor between monoids

Prove that functors between one-object monoid categories are exactly unital monoid homomorphisms.

<details><summary>Hint 1</summary>
There is only one possible object assignment.
</details>
<details><summary>Hint 2</summary>
Translate the two functor laws into multiplication and identity equations.
</details>
<details><summary>Solution</summary>
The arrow assignment is a function between the two monoids. Preservation of composition says it preserves products in the same order, and preservation of the single identity says it preserves one. These are precisely the unital monoid-homomorphism laws. Conversely any such homomorphism gives the required arrow assignment and satisfies both functor axioms. A bare product-preserving map need not suffice, as the preceding exercise demonstrates.
</details>

### CAT-02-03 — Monotone but not full

View the real line and integers as ordered categories. Show that the floor function is a functor which is faithful but not full.

<details><summary>Hint 1</summary>
A monotone object map determines the arrow assignment.
</details>
<details><summary>Hint 2</summary>
Compare 0.9 and 0.1 and their floors.
</details>
<details><summary>Solution</summary>
If x≤y then floor x≤floor y, so comparisons map to comparisons, with composition and identities automatic in thin categories. Each hom set has at most one element, making its map injective and the functor faithful. But there is an arrow from floor 0.9=0 to floor 0.1=0, while no arrow exists from 0.9 to 0.1. The corresponding empty-to-singleton hom map is not surjective, so fullness fails.
</details>

### CAT-02-04 — Reflection needs hypotheses

Give a functor that sends a noninvertible arrow to an isomorphism and identify which hypothesis of Proposition 2.3 fails.

<details><summary>Hint 1</summary>
Use the additive monoid of nonnegative integers.
</details>
<details><summary>Hint 2</summary>
Map all its arrows to the sole arrow of the terminal category.
</details>
<details><summary>Solution</summary>
The one-object monoid map sending every integer to the identity arrow is unital and product-preserving, hence a functor. The arrow one has no additive inverse in the nonnegative integers, but its image is the identity and therefore invertible. This functor is full because its single hom-map is onto, but is not faithful because it identifies every pair of integers. Full faithfulness, rather than fullness alone, was needed to reflect the inverse equations.
</details>

### CAT-02-05 — Hom variance

For f:X→Y and g:Y→Z, calculate both sides of the contravariant composition law for Hom(−,A).

<details><summary>Hint 1</summary>
Begin with a map u:Z→A.
</details>
<details><summary>Hint 2</summary>
Apply precomposition with g before precomposition with f.
</details>
<details><summary>Solution</summary>
Precomposition with g sends u to u∘g, a map Y→A. Precomposition with f then sends it to u∘g∘f, a map X→A. Direct precomposition with g∘f gives exactly the same function on the same hom set. Hence Hom(g∘f,A)=Hom(f,A)∘Hom(g,A). The reversed order is required by the source and target sets of these functions, not merely by an informal duality slogan.
</details>

### CAT-02-06 — Covariant power sets are faithful

Prove the direct-image power-set functor is faithful, although an individual direct-image map need not be injective.

<details><summary>Hint 1</summary>
Apply the subset map to a singleton.
</details>
<details><summary>Hint 2</summary>
Distinguish equality of two induced functions from injectivity of one induced function.
</details>
<details><summary>Solution</summary>
If the direct-image functions induced by f,g:X→Y agree, evaluate them on {x}. The resulting singleton sets {f(x)} and {g(x)} agree, so f(x)=g(x) for every x. Therefore f=g and the functor is faithful. An individual induced function can still identify distinct subsets when the original map is not injective. Faithfulness concerns the assignment between hom sets, rather than injectivity of every arrow produced by that assignment.
</details>

### CAT-02-07 — Letter maps and word maps

Describe all homomorphisms from the free monoid on one letter a to the free monoid on one letter b. Which arise by applying L to a function of alphabets?

<details><summary>Hint 1</summary>
A homomorphism is determined by the image of a.
</details>
<details><summary>Hint 2</summary>
That image can be any finite word, including the empty word.
</details>
<details><summary>Solution</summary>
For each integer m≥0 there is one homomorphism sending a to bᵐ and consequently aⁿ to b^(mn). Concatenation proves these are homomorphisms, and the chosen generator image determines them uniquely. There is just one function between the singleton alphabets, and its image under L corresponds to m=1. Thus the remaining word homomorphisms demonstrate the failure of fullness, including the m=0 map sending every word to the empty word.
</details>

### CAT-02-08 — Abelianisation loses inner maps

For a nonabelian group G, construct two distinct endomorphisms having the same abelianisation.

<details><summary>Hint 1</summary>
Choose a noncentral element h.
</details>
<details><summary>Hint 2</summary>
Conjugation becomes trivial in every abelian quotient.
</details>
<details><summary>Solution</summary>
Take the identity and the inner automorphism c_h(g)=hgh inverse. Noncentrality means some g does not commute with h, so these endomorphisms differ. In the abelian quotient, the class of hgh inverse equals [h][g][h] inverse=[g], so both induce the identity on G_ab. The equality concerns the induced maps, independently of whether G_ab itself is trivial. This proves that abelianisation is not faithful on the category of groups.
</details>

### CAT-02-09 — A path relation

A graph has one object and one loop. Determine when sending that loop to an endomorphism T gives a functor from the quotient with relation a⁴=id.

<details><summary>Hint 1</summary>
The relation must hold for the assigned arrow.
</details>
<details><summary>Hint 2</summary>
Its powers then determine every path image.
</details>
<details><summary>Solution</summary>
The necessary and sufficient condition is T⁴=id. Necessity follows by applying a functor to the relation. For sufficiency, map aⁿ to Tⁿ; concatenation adds exponents and the relation makes this depend only on the exponent modulo four. The image of the empty path is identity. In particular T is automatically invertible with inverse T³. The construction requires no assumption that the four powers of T are distinct: a functor may identify distinct source arrows.
</details>

### CAT-02-10 — Faithfulness reflects monics

Prove carefully that if F is faithful and Ff is monic, then f is monic, without assuming that F is full.

<details><summary>Hint 1</summary>
Start with arbitrary arrows into the domain of f in the source category.
</details>
<details><summary>Hint 2</summary>
All arrows needed in the target already come by applying F.
</details>
<details><summary>Solution</summary>
Let a,b:W→X satisfy fa=fb for f:X→Y. Applying F gives Ff∘Fa=Ff∘Fb. Since Ff is monic, Fa=Fb. Faithfulness on Hom(W,X) gives a=b. This proves the required cancellation for every W and does not require lifting any target arrow to the source. Fullness is therefore unnecessary for this reflection statement, unlike the earlier construction of an inverse from an arbitrary inverse of Ff.
</details>

### CAT-02-11 — Two scalar maps

Let V=W=k² and T have matrix [[1,2],[0,1]] in the chosen bases. Describe T* and explain why duality reverses a composite's matrix order over every field.

<details><summary>Hint 1</summary>
The entry two is interpreted in k, including characteristic two.
</details>
<details><summary>Hint 2</summary>
Evaluate dual basis functions after applying T.
</details>
<details><summary>Solution</summary>
The dual matrix is the transpose [[1,0],[2,1]], with the scalar two reduced according to the field. If another linear map has matrix B, the composite has matrix BT, whose transpose is T transposed times B transposed. Hence the dual composite first applies the dual of B and then the dual of T. This agrees with precomposition of linear functionals and proves the contravariant order. No conjugation appears: this is algebraic linear duality, not a Hermitian adjoint.
</details>

### CAT-02-12 — Literal image versus essential image

In the two-disjoint-arrow example of Section 7, explain why filling the composite in the target does not violate the functor laws.

<details><summary>Hint 1</summary>
The laws quantify over composable arrows in the source.
</details>
<details><summary>Hint 2</summary>
The two intermediate source objects are different.
</details>
<details><summary>Solution</summary>
The source arrows end at Y and start at Y′, with Y≠Y′, so they are not composable there. The functor law consequently imposes no equation on their target composite, even though their image endpoints agree. The target's additional path from A to C is legitimate but need not be the image of a source arrow. Taking the full subcategory on image objects, or the full essential image including isomorphic objects, supplies a closed collection of arrows. The issue is closure of the proposed image category, not a failed functor axiom.
</details>

## 9. Next connection

The next chapter compares functors by natural transformations. The Hom constructions, word extension and duality above will become examples in which the comparison must commute with every permitted arrow, rather than only match objects one at a time.
`;export{e as default};