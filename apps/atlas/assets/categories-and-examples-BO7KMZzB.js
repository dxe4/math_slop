var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: categories-and-examples
title: "Categories and Examples"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Categories and Examples

A group comes with elements and multiplication, but also with homomorphisms to other groups. Category theory begins by keeping the objects and their structure-preserving maps together. It asks which constructions can be described using composition alone, and which familiar claims secretly depend on the kind of map being considered.

Preparation is the algebra book's treatment of functions, groups and homomorphisms. Vector spaces appear as a further example; their category can be skipped until needed. No topology, module theory or prior categorical vocabulary is required. Composition g∘f means first apply f and then g. Every equation below has specified sources and targets, because a composition without matching types has no meaning.

## 1. Objects, arrows and composition

A category C has objects and, for objects X,Y, a collection Hom_C(X,Y) of arrows from X to Y. For arrows f:X→Y and g:Y→Z there is a composite g∘f:X→Z. Each object X has an identity arrow id_X:X→X. The axioms are associativity h∘(g∘f)=(h∘g)∘f for composable triples, and the two identity equations id_Y∘f=f=f∘id_X.

These axioms do not require arrows to be functions between underlying sets. They only require specified composition and identities. Even when arrows are functions, the choice of permitted functions belongs to the category. Groups with homomorphisms and groups with arbitrary functions would describe different mathematical structures.

**Lemma 1.1.** The identity arrow at an object is unique.

*Proof.* If e and e′ both satisfy the identity laws at X, the right-identity law for e′ gives e∘e′=e, while the left-identity law for e gives e∘e′=e′. Hence e=e′. ∎

An arrow with equal source and target is an endomorphism. The endomorphisms of X form a monoid under composition: associativity and the identity are inherited directly from the category. Arrows between different objects cannot generally be multiplied as elements of one monoid, because the intermediate objects may not match.

**Worked example 1.2.** In Set, objects are sets and arrows are functions. Function composition is associative because both parenthesisations send an element x to h(g(f(x))). The identity function fixes every element and satisfies both laws. In Grp, objects are groups and arrows are group homomorphisms. Composition stays a homomorphism: g(f(ab))=g(f(a)f(b))=g(f(a))g(f(b)). Identities preserve multiplication. Thus the same function laws restrict to a category of algebraic maps.

Other examples include vector spaces over a fixed field with linear maps and commutative unital rings with homomorphisms preserving one. The fixed field and the unit convention matter. Mixing maps linear over unrelated fields, without specifying scalar-change data, does not give the category just described.

## 2. Categories need not look like sets and functions

A monoid M defines a category with one object *, with Hom(*,*)=M and composition given by monoid multiplication in the order g∘f=gf. The monoid axioms are exactly the category axioms. Conversely a one-object category determines this monoid. A group is the special case in which every arrow has a two-sided inverse.

A preorder P defines another category. Its objects are elements of P; there is exactly one arrow x→y when x≤y, and none otherwise. Reflexivity supplies identities, and transitivity supplies composition. Associativity holds because any two arrows with the same source and target are equal. Antisymmetry is not required: two distinct objects may have arrows both ways.

A discrete category has only identity arrows. Any set can be made into one. A directed graph instead gives generators for a free category: objects are vertices, arrows are finite directed paths, composition concatenates paths, and the empty path at each vertex is its identity. Concatenation is associative as equality of lists. Paths are equal only when their edge lists agree, rather than merely when their endpoints agree.

**Worked example 1.3.** A graph with one vertex and one loop a gives a category whose arrows are the paths aⁿ for n≥0. Composition adds lengths, so its endomorphism monoid is the nonnegative integers under addition. The graph has finitely many vertices and edges, but its free category has infinitely many arrows. If one imposes the relation a³=id, paths reduce to lengths zero, one and two. These remain distinct because sending a to one modulo three respects the relation and distinguishes the residues. The resulting one-object category is the cyclic group of order three.

Imposing relations needs a compatibility condition. For each pair of objects choose an equivalence relation on its hom collection, with the property that equivalent arrows remain equivalent after composition on either side whenever defined. Such a congruence gives a quotient category: replace arrows by equivalence classes and compose representatives. Compatibility proves independence of representatives; the original axioms then descend. An arbitrary grouping of paths need not satisfy that condition.

## 3. Isomorphisms and the distinction from equality

An arrow f:X→Y is an isomorphism if an arrow g:Y→X satisfies g∘f=id_X and f∘g=id_Y. We call g an inverse. It is unique: if h is another inverse, then h=h∘(f∘g)=(h∘f)∘g=g. The composite of two isomorphisms is an isomorphism, with inverse obtained by composing their inverses in the reverse order.

In Set, isomorphisms are exactly bijections. A two-sided inverse gives injectivity and surjectivity; conversely a bijection has a unique inverse function. In Grp, a bijective homomorphism has a homomorphic inverse. Indeed if f(a)=u and f(b)=v, then f(ab)=uv, so f inverse(uv)=ab=f inverse(u)f inverse(v). The inverse therefore belongs to the category, not merely to the surrounding collection of functions.

In a preorder category, objects x and y are isomorphic exactly when both x≤y and y≤x. The arrows are then automatically inverse, since the only endomorphism at each object is its identity. A preorder category is a groupoid, meaning that every arrow is invertible, precisely when its relation is symmetric as well as reflexive and transitive. A partially ordered set has no isomorphic distinct objects, by antisymmetry.

Isomorphic objects need not be equal as chosen objects. Two one-element sets with different elements are distinct sets but are isomorphic in Set. The particular isomorphism may also matter: a two-dimensional vector space has many automorphisms, and transporting a chosen basis along different ones gives different bases. An existence claim does not select one of those identifications.

## 4. Cancellation, monomorphisms and epimorphisms

An arrow f:X→Y is monic, or a monomorphism, when for every object W and arrows a,b:W→X, equality f∘a=f∘b implies a=b. It is epic, or an epimorphism, when for every Z and arrows a,b:Y→Z, equality a∘f=b∘f implies a=b. These definitions quantify over permitted arrows of the category. They do not mention elements, and need not coincide with injectivity and surjectivity in every concrete example.

**Proposition 1.4.** In Set, monomorphisms are exactly injections and epimorphisms are exactly surjections.

*Proof.* An injective function cancels pointwise on the left. Conversely if f(x)=f(x′), use the two maps from a singleton selecting x and x′. Monicity forces them equal, so x=x′.

A surjective function cancels on the right because every target element is an image. If f is not surjective, choose y outside its image. Define two maps Y→{0,1}: one constantly zero and one equal to one exactly at y. They agree after composition with f but differ at y, so f is not epic. This argument includes empty sets without requiring a choice of preimages. ∎

**Worked example 1.5 (A monic epic map that is not invertible).** In commutative unital rings, the inclusion Z→Q is monic because it is injective as a function. It is also epic. If two unital ring maps Q→A agree on Z, they agree on every integer and on every inverse of a nonzero integer: homomorphisms preserve inverses, and an inverse is unique when it exists. Hence they agree on every rational number. Nevertheless the inclusion is not an isomorphism, since no integer maps to one-half. Thus the implication “monic and epic implies isomorphism” is a property of some categories, not an axiom of categories in general.

A split monomorphism has a left inverse r:Y→X with r∘f=id_X. A split epimorphism has a right inverse s:Y→X with f∘s=id_Y. The inverse equation immediately proves the corresponding cancellation law. One-sided inverses need not be two-sided.

For example on the nonnegative integers let S(n)=n+1 and P(n)=max(n−1,0). Then P∘S=id, but S∘P sends zero to one. Thus S is split monic and P is split epic, while neither is an isomorphism. This is also an example inside the one-object category consisting of all endofunctions of that set.

## 5. Idempotents and their splittings

An endomorphism e:X→X is idempotent when e∘e=e. Identities are idempotent, but projections supply others. A splitting consists of arrows r:X→A and i:A→X with i∘r=e and r∘i=id_A. These equations show that i is split monic and r split epic.

**Proposition 1.6.** Every idempotent in Set splits.

*Proof.* Let A be the image of e. Every a in A satisfies e(a)=a, since a=e(x) implies e(a)=e(e(x))=e(x). Take i to be inclusion and r the function x↦e(x), now with codomain A. Then i∘r=e and r∘i=id_A. This also works for the empty set: its image is empty and the unique functions satisfy the equations. ∎

The codomain adjustment is part of the construction. Saying that e “acts as identity on its image” does not yet write down the two typed arrows. In other categories, an image object or an appropriate splitting may fail to exist. We therefore call a category idempotent-complete only when every one of its idempotents has such a splitting; this is additional structure, rather than an automatic category axiom.

## 6. Opposites, products and selected subcategories

The opposite category Cᵒᵖ has the same objects, with Hom_(C opposite)(X,Y)=Hom_C(Y,X). If f opposite and g opposite are composable in Cᵒᵖ, define their composite by reversing the order of the corresponding composite in C. Associativity follows from associativity in C, and the old identities still satisfy the identity laws. Taking the opposite twice restores the original category.

An isomorphism remains an isomorphism after reversal. Monomorphisms in C become epimorphisms in Cᵒᵖ, directly by reversing the cancellation equation. This gives a precise meaning to a dual argument: reverse all arrows and composition order, including each source and target. It does not mean replacing a vector space by its linear dual unless that separate construction is specified.

The product category C×D has pairs of objects and pairs of arrows, composed componentwise. The identity pair and associativity follow componentwise as well. An arrow pair is invertible exactly when each component is invertible: any inverse supplies component inverses, and conversely the component inverses form an inverse pair.

A subcategory chooses some objects and some arrows between them, includes their identities, and is closed under composition. It is full when it includes every original arrow between its chosen objects. It is wide when it contains every original object. The category of finite sets with all functions between them is a full subcategory of Set. The category of sets and injective functions is a wide subcategory, because injections compose, but is not full. Choosing arrows without composition closure can fail to define a category even if every chosen arrow is individually legitimate.

## 7. Slices record a fixed target

For an object B of C, the slice category C/B has as objects arrows p:X→B. An arrow from p:X→B to q:Y→B is an arrow f:X→Y satisfying q∘f=p. Composing two such triangles gives another, since r∘g∘f=q∘f=p. Identities satisfy the triangle equation too. Thus C/B is a category.

A slice arrow is invertible exactly when its underlying arrow in C is invertible. One direction follows by forgetting the triangle. Conversely if f has inverse g, the equation qf=p gives pg=qfg=q, so the inverse satisfies the required triangle as well. This proves the statement about slice isomorphisms rather than assuming that an underlying inverse is automatically admissible.

**Worked example 1.7.** A set map p:X→B determines a family of fibres X_b={x:p(x)=b}. A slice arrow sends each X_b into the corresponding Y_b because q(f(x))=p(x). Conversely any family of functions X_b→Y_b determines a unique slice function by applying its b-th function to x when p(x)=b. The fibres partition X, so this is both well-defined and exhaustive.

Starting with an arbitrary family of sets indexed by B, form the disjoint union of pairs (b,x) and map it to b. Its fibres recover the family. Starting from p, the map x↦(p(x),x) is a bijection over B onto the disjoint union of its fibres. This is an explicit isomorphism in the slice. The construction explains why objects over a fixed base can be treated as varying families, without equating a set literally with its chosen disjoint-union representation.

Dually, the coslice B/C fixes a source, with triangle equations f∘p=q. For a singleton 1 in Set, its objects are choices of a point 1→X, and its arrows preserve that point. Thus 1/Set is the category of pointed sets. The empty set admits no such object, since it has no point.

## 8. Initial and terminal objects

An initial object has exactly one arrow to every object; a terminal object has exactly one arrow from every object. In Set the empty set is initial and any singleton is terminal. In Grp the trivial group is both: there is one homomorphism to or from it. An object with both properties is called a zero object. Set has none, since its initial and terminal objects have different cardinalities.

Two initial objects have unique arrows between them. Each composite is an endomorphism of an initial object and hence must be its identity, proving the arrows inverse. The same dual argument applies to terminal objects. The isomorphism here is uniquely determined, unlike an arbitrary isomorphism between vector spaces. These examples prepare the general uniqueness principles for universal properties in Chapter 4.

## 9. Exercises

### CAT-01-01 — Composition order

Take f(n)=n+1 and g(n)=2n on the integers. Compute both composites and explain why the category axioms do not require them equal.

<details><summary>Hint 1</summary>
Apply the rightmost function first.
</details>
<details><summary>Hint 2</summary>
Associativity concerns three functions and parentheses, rather than interchange of two functions.
</details>
<details><summary>Solution</summary>
The composite g∘f sends n to 2n+2, while f∘g sends n to 2n+1, so they differ. Both are legitimate endomorphisms of the same set. A category requires associativity of composition and identity laws, but no commutativity. The endomorphism monoid can therefore be noncommutative. Changing the order of application changes a morphism even when its source and target remain the same.
</details>

### CAT-01-02 — A preorder with repeated objects

On {a,b,c}, define a≤b, b≤a, and reflexive relations only otherwise. Describe the category and its isomorphism classes.

<details><summary>Hint 1</summary>
Check transitivity before listing arrows.
</details>
<details><summary>Hint 2</summary>
Both arrows between a and b compose to their identities.
</details>
<details><summary>Solution</summary>
The relation is transitive: every composable pair among a,b stays in that pair, where all comparisons hold, and c only compares to itself. The category has three identity arrows and two further arrows a→b and b→a. Their composites are the relevant unique endomorphisms, hence identities. Its isomorphism classes are {a,b} and {c}. It is not the category of a partial order on these three objects because antisymmetry fails, although collapsing isomorphic objects would give a two-element discrete order.
</details>

### CAT-01-03 — Inverses of composites

If f:X→Y and g:Y→Z are invertible, prove the inverse formula for g∘f with both typed compositions.

<details><summary>Hint 1</summary>
An inverse must go from Z back to X.
</details>
<details><summary>Hint 2</summary>
Write f inverse after g inverse and use associativity.
</details>
<details><summary>Solution</summary>
The proposed inverse is f inverse∘g inverse:Z→X. Composing it after g∘f gives f inverse∘(g inverse∘g)∘f=id_X. Composing in the other order gives g∘(f∘f inverse)∘g inverse=id_Z. Both identities have the correct objects, so the proposed arrow is a two-sided inverse. Reversing the proposed order would generally not even be typed, and would not establish either required equation.
</details>

### CAT-01-04 — Split cancellation

Prove that a split monomorphism is monic and a split epimorphism is epic.

<details><summary>Hint 1</summary>
Compose an equality with the supplied one-sided inverse.
</details>
<details><summary>Hint 2</summary>
For the dual statement place the inverse on the other side.
</details>
<details><summary>Solution</summary>
If rf=id_X and fa=fb, composition with r yields a=rfa=rfb=b. Thus f is monic. If fs=id_Y and af=bf, compose on the right with s to obtain a=afs=bfs=b, proving epicity. These deductions use only associativity and identity equations. They do not prove the other inverse equation, as the shift and predecessor functions in the chapter demonstrate.
</details>

### CAT-01-05 — Monic idempotents

Show that a monic idempotent endomorphism must be the identity. Prove the epic analogue.

<details><summary>Hint 1</summary>
Rewrite e²=e as a cancellation equation with an identity.
</details>
<details><summary>Hint 2</summary>
Use the definition on the appropriate side.
</details>
<details><summary>Solution</summary>
For a monic e, the equation e∘e=e∘id_X permits cancellation of e on the left, giving e=id_X. For an epic e, write e∘e=id_X∘e and cancel e on the right. Thus a nonidentity idempotent cannot be monic or epic. This also confirms that a nontrivial projection in Set is neither injective nor surjective as an endomorphism of its full original set.
</details>

### CAT-01-06 — A relation that is not a congruence

In the path monoid on one loop, identify a with a² but make no further identifications. Explain why this does not define a quotient category.

<details><summary>Hint 1</summary>
Composition must respect the proposed equivalence classes.
</details>
<details><summary>Hint 2</summary>
Compose the equivalent pair with a on one side.
</details>
<details><summary>Solution</summary>
The declared equivalence relates the length-one and length-two paths, but composing with a gives length two and length three, which were not declared equivalent. Thus representative choices change the class of a product. A genuine congruence containing a∼a² must also contain a²∼a³ and all later consequences. Simply grouping one pair while leaving the rest singleton does not satisfy composition compatibility and cannot supply a well-defined quotient operation.
</details>

### CAT-01-07 — A full subcategory

Are finite groups with all homomorphisms a full subcategory of Grp? Are groups with only isomorphisms a wide subcategory?

<details><summary>Hint 1</summary>
Fullness concerns all arrows between selected objects.
</details>
<details><summary>Hint 2</summary>
Check identities and closure of the chosen arrows.
</details>
<details><summary>Solution</summary>
Finite groups with all their group homomorphisms form a full subcategory: every Grp arrow between two selected finite groups is retained, and identities and composites remain homomorphisms. Groups with only isomorphisms form a wide subcategory because all objects are retained, identities are isomorphisms and composites are isomorphisms. It is not full: for example the trivial homomorphism between two nontrivial groups need not be invertible. These two adjectives constrain different parts of the subcategory data.
</details>

### CAT-01-08 — Terminal object in a slice

Show that id_B:B→B is terminal in C/B.

<details><summary>Hint 1</summary>
An object of the slice is already an arrow p:X→B.
</details>
<details><summary>Hint 2</summary>
The triangle equation determines the proposed arrow uniquely.
</details>
<details><summary>Solution</summary>
An arrow in the slice from p:X→B to id_B must be a map f:X→B with id_B∘f=p. That equation forces f=p, and p itself satisfies it. Hence there is exactly one such arrow from each object. No assumption that B is terminal in C is needed. The terminality belongs to the slice's fixed-target structure and is different from terminality of the same underlying object in the original category.
</details>

### CAT-01-09 — Pointed maps

Let X and Y have chosen points x₀,y₀. Describe arrows and isomorphisms between their corresponding objects of 1/Set.

<details><summary>Hint 1</summary>
Translate the coslice triangle into an equation at the sole source element.
</details>
<details><summary>Hint 2</summary>
A pointed bijection's inverse must preserve the chosen points too.
</details>
<details><summary>Solution</summary>
An arrow is a function f:X→Y satisfying f(x₀)=y₀. It is an isomorphism exactly when it is bijective. A pointed inverse implies bijectivity, while a bijection satisfying that equation has inverse carrying y₀ back to x₀, so its inverse is pointed as well. An arbitrary bijection need not be a pointed arrow, because it may send x₀ to a different element. Thus membership in the category must be checked before invertibility there.
</details>

### CAT-01-10 — The ring epimorphism

Explain why the proof that Z→Q is epic does not assert the existence of a ring map Q→every commutative unital ring.

<details><summary>Hint 1</summary>
The cancellation condition begins with two maps that already exist.
</details>
<details><summary>Hint 2</summary>
Consider a possible unital map into a field of prime characteristic.
</details>
<details><summary>Solution</summary>
Epicity says that any two existing maps Q→A agreeing after restriction to Z are equal. It does not require that such maps exist. For example a unital map into F_p would send the invertible rational number p to zero, which cannot be invertible in that nonzero field. Therefore no such map exists. The uniqueness proof uses inverse preservation only when maps are given; a vacuous family of maps creates no contradiction and is compatible with epicity.
</details>

### CAT-01-11 — A splitting of a projection

On X={0,1,2}, define e(0)=0,e(1)=0,e(2)=2. Write an explicit splitting and verify both equations.

<details><summary>Hint 1</summary>
Take the image as the intermediate object.
</details>
<details><summary>Hint 2</summary>
Distinguish the retraction's codomain from that of the original endomorphism.
</details>
<details><summary>Solution</summary>
The image is A={0,2}. Let i:A→X be inclusion and let r:X→A send zero and one to zero and two to two. Then i∘r agrees with e on all three elements. On A, r∘i fixes both zero and two, so it is id_A. This proves the splitting with typed maps. The endomorphism e itself is not identity, since it moves one, and is not invertible. The intermediate object records exactly the part retained by the projection.
</details>

### CAT-01-12 — A product category

Describe isomorphisms in a product of two preorder categories, and prove the description.

<details><summary>Hint 1</summary>
An arrow pair exists when each component comparison holds.
</details>
<details><summary>Hint 2</summary>
An inverse pair is equivalent to reverse comparisons in both components.
</details>
<details><summary>Solution</summary>
Objects (p,q) and (p′,q′) are isomorphic exactly when p≤p′ and p′≤p in the first preorder, and q≤q′ and q′≤q in the second. These four comparisons give arrows in both directions. Each composite is the unique endomorphism of its object, hence the identity pair. Conversely an isomorphism supplies those two component arrows and their inverses, forcing all four comparisons. If both preorders are partial orders, antisymmetry makes isomorphic object pairs literally equal.
</details>

## 10. Next connection

The next chapter defines functors, which transport objects and arrows while preserving identities and composition. The categories built here provide concrete examples in which preservation, failure of preservation and size restrictions can all be examined directly.
`;export{e as default};