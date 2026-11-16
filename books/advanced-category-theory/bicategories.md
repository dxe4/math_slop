
# Bicategories

Composition in an ordinary category is strictly associative: the two triple composites are equal arrows. In geometry and algebra, the natural composite may be unique only up to a specified isomorphism. Pullbacks of spans, tensor products, and coends of profunctors all display this behavior. A bicategory records objects, arrows between objects, and arrows between those arrows, together with coherent associativity and unit isomorphisms. The word “coherent” is a mathematical condition, not permission to ignore comparison maps.

Read [Monoidal Categories](monoidal-categories.md) for associators and [Ends and Coends](ends-and-coends.md) for profunctor composition. We use ordinary pullbacks and their universal property from [Introduction to Category Theory](../introduction-to-category-theory/limits-colimits.md). All categories used for profunctors are small, and the relevant coends exist in Set. Our main proof builds the bicategory of spans under an explicit pullback hypothesis. General bicategorical coherence is a named import, not a claim proved by drawing one diagram.

## Data and typed composition

**Definition 4.1 (Bicategory).** A bicategory B has objects A,B,...; for each pair A,B a hom-category B(A,B); for each triple a composition functor from B(B,C) times B(A,B) to B(A,C); and for each object A an identity one-cell 1_A in B(A,A). Objects of B(A,B) are one-cells A to B, and arrows in that hom-category are two-cells between parallel one-cells. Composition inside a hom-category is vertical composition of two-cells. The composition functor gives horizontal composition of two-cells. Natural invertible associator two-cells compare (h composed g) composed f with h composed (g composed f), and invertible left and right unitors compare composites with identity one-cells to the original one-cell. Pentagon and triangle equations hold as equations of two-cells.

The composition functor immediately implies the interchange law. Given vertically composable two-cells alpha,alpha' and beta,beta' in adjacent hom-categories, horizontally composing their vertical composites equals vertically composing the two horizontal composites in the corresponding order. This is not an extra optional axiom: it is functoriality of horizontal composition. Its source and target must be checked before a string diagram is manipulated.

**Proposition 4.2 (Interchange).** For compatible two-cells, horizontal composition preserves vertical composition and identities.

*Proof.* A pair of vertically composable arrows in the product hom-category composes componentwise. Applying the composition functor to that product composite gives the horizontal composite of the vertically composed two-cells. Because it is a functor, the same result is the vertical composite of the two images. The functor also preserves identity arrows. These are precisely interchange and the horizontal identity law. ∎

A strict two-category is a bicategory whose associators and unitors are identities. A bicategory need not be strict as presented. A general strictification theorem says that every bicategory is biequivalent to a strict two-category, under conventional size assumptions; this is a deep coherence result we import when needed from standard bicategory theory. Biequivalence is not literal equality of the original composition choices. The constructions below keep their actual comparison maps visible.

## Monoidal categories as one-object bicategories

**Worked example 4.3.** Let M be a monoidal category. Make a bicategory with one object *, with hom-category B(*,*)=M. Its one-cells are objects of M and its two-cells are morphisms of M. Horizontal composition of one-cells is tensor; the identity one-cell is the tensor unit. Vertical composition is composition in M, while horizontal composition of two-cells is tensor of morphisms. The bicategory associator and unitors are exactly those of M. Its pentagon and triangle are the monoidal pentagon and triangle. This example proves that bicategories genuinely extend the monoidal notion rather than merely adding a decorative second level.

The example also detects a type error. A monoidal natural transformation is a morphism in M and therefore a two-cell, not a new object of the bicategory. Confusing levels makes a proposed interchange equation meaningless. When M is endofunctors under composition, the resulting one-object bicategory is strict. When M is modules under tensor, associativity is through the canonical tensor isomorphism and the presentation is not literally strict.

## Spans and pullback composition

Let C be a category with chosen pullbacks. A span from A to B is a diagram A left-arrow S right-arrow B. A map of spans from S to T is a map S to T commuting with both legs. These form a category Span_C(A,B). Given S from A to B and T from B to D, form their pullback S times over B T. Its projections produce a span from A to D. This is the intended one-cell composition.

**Theorem 4.4 (Bicategory of spans).** If C has pullbacks, its objects, spans, maps of spans, pullback composition and identity spans A left-arrow A right-arrow A form a bicategory after choosing pullbacks.

*Proof.* A pair of maps of spans induces a unique map between their pullbacks by the pullback universal property. Identities and composition of such induced maps follow from uniqueness, so horizontal composition is a functor on hom-categories. For three composable spans S,T,U, the objects (S times_B T) times_D U and S times_B (T times_D U) each represent triples (s,t,u) satisfying the same two matching equations. The universal properties give a unique isomorphism between them commuting with the three projections; its inverse is obtained in the other direction. This is the associator, natural because every construction is characterized by the same projection equations.

The pullback of S along the identity span of B is canonically isomorphic to S by projection; its inverse pairs each s with its B-image. These maps give right and left unitors. In the pentagon, both composites from one fourfold pullback to the other commute with every projection to the four original span apices. The universal property gives at most one such map, so the composites coincide. The same uniqueness argument proves the triangle. Thus the required coherence equations hold without identifying chosen pullback objects as equal. ∎

**Worked example 4.5 (Relations from spans).** In sets, take A={a_1,a_2}, B={b_1,b_2}, and D={d}. Let S contain pairs (a_1,b_1),(a_2,b_2), and T contain (b_1,d) only, with each relation represented by its set of pairs and projection legs. The pullback S times_B T has one element, the compatible pair through b_1, so the composite span relates a_1 to d. The path through b_2 contributes nothing. If S represented a relation with duplicate witnesses, the composite span would retain those witnesses as separate pullback elements, whereas ordinary relational composition records only whether at least one witness exists. Thus the category of spans is not simply the poset of relations; taking images is an additional quotient step.

Pullbacks are essential. A category lacking pullbacks cannot support this formula for all spans. Even when pullbacks exist, different choices of pullback object produce canonically isomorphic composite spans, not literal identical ones. That is the bicategorical reason for an associator.

## Profunctors and coend composition

A profunctor P from A to B is a functor B opposite times A to Set. It assigns a set P(b,a) to a pair of objects. A functor F:A to B gives a representable profunctor B(b,F(a)); reversing the chosen convention reverses every displayed variance, so we fix this one throughout. If P:A to B and Q:B to D, define their composite at (d,a) by the coend over b of Q(d,b) times P(b,a).

**Theorem 4.6 (Profunctor composition).** For small categories, profunctors with natural transformations as two-cells, the displayed coend composition, and hom-functors as identities form a bicategory.

*Proof of the construction.* Naturality of P and Q makes the coend quotient functorial in d and a, and natural transformations induce maps of coends, giving horizontal composition. For a triple P,Q,R, the two bracketings are iterated coends of R times Q times P. In Set, product with a fixed set preserves colimits because it is left adjoint to an exponential functor. The coend Fubini property then gives a natural bijection between the two quotient presentations: both are generated by triples, modulo the B and D balancing relations. This is the associator. The co-Yoneda formula identifies the coend of a hom-functor with P on either side, giving the unitors. For four profunctors, both pentagon routes send a representative quadruple to the same class; since such representatives generate and the maps are natural, the routes agree. The triangle similarly reduces to the identity relation on a representative pair. ∎

The proof gives the Set case with small indexing categories. It does not assert that an arbitrary target admits all needed coends or that an arbitrary tensor preserves them. Those hypotheses are exactly what enables the Fubini and product-interchange steps. In an enriched base, one needs compatible colimit preservation by tensor in each variable.

**Worked example 4.7 (Representable composition).** Let F:A to B and G:B to D. Their representable profunctors are P(b,a)=B(b,F(a)) and Q(d,b)=D(d,G(b)). Co-Yoneda sends the class of (q:d to G(b), p:b to F(a)) to G(p) composed after q with the correct direction: q is d to G(b), so G(p) is G(b) to G(F(a)), yielding d to G(F(a)). The composite profunctor is therefore D(d,G(F(a))), representable by G composed F. This calculation checks both the variance convention and the unit behavior. A reversed arrow in either factor would make the proposed composite untyped.

## Adjunctions of one-cells

In a bicategory, an adjunction between one-cells f:A to B and g:B to A consists of a unit two-cell 1_A to g f and a counit two-cell f g to 1_B satisfying triangle equations. Ordinary functor adjunctions arise in the bicategory Cat, whose objects are categories, one-cells functors and two-cells natural transformations. The triangle equations are exactly the familiar unit–counit equations, now recognized as bicategorical equations. A one-cell may be an equivalence without being a strict inverse: there can be invertible unit and counit two-cells rather than equalities of composites.

For spans, some adjunctions can be written using diagonals and pullbacks, but not every arbitrary span has an adjoint in the bicategory of spans. The typed unit and counit equations supply a direct way to test a proposed candidate. This is safer than assuming that reversing the legs of a span automatically gives an adjoint; reversal is a formal operation, while an adjunction requires actual maps of spans satisfying triangles.

## Pseudofunctors and scope

A pseudofunctor between bicategories assigns objects, functors on hom-categories and invertible comparison two-cells for composition and units, satisfying coherence equations. A strict two-functor has identity comparisons. Pseudofunctors are needed because a construction involving chosen pullbacks or derived replacements commonly preserves composition only up to canonical isomorphism. The comparison maps are data, and their coherence is a theorem or axiom to check.

We have proved the finite coherence required for spans and the Set-valued profunctor construction. General bicategorical coherence and strictification are imported results; the chapter does not turn those global theorems into consequences of a single picture. The next chapter organizes many-input operations using trees and substitution rather than a chain of binary one-cells.

## Maps as special spans and the direction of composition

An ordinary map f:A to B determines the span A left-arrow A right-arrow B, with left leg the identity and right leg f. Compose this span with the span of g:B to D. The pullback of f:A to B against the identity of B has an apex canonically isomorphic to A: a compatible pair consists of a in A and b in B satisfying f(a)=b, so b is determined by a. The composite span is therefore canonically isomorphic to the span of gf. Identity maps produce identity spans. Thus ordinary maps embed into spans as one-cells up to the canonical comparison isomorphisms.

This embedding does not identify arbitrary maps of spans with equalities of functions. A span can contain several witnesses over the same pair (a,b), as the relation example showed, and its two-cell maps describe how witnesses transform. A relation category that forgets witnesses is a different construction. Nor is the embedding automatically a strict functor with every chosen pullback: the comparison between the pullback composite and the chosen span for gf may be a nonidentity isomorphism. Calling it a pseudofunctor records that comparison explicitly. The calculation provides a concrete reason that weak functoriality appears naturally even when the starting data are ordinary functions.

There is a useful converse calculation for a map span. For f:A to B, reverse its legs to obtain the span B left-arrow A right-arrow A. The original map span is left adjoint to this reversed span in the bicategory of spans. The unit from the identity span at A to their A-to-A composite uses the diagonal A to A times over B A; the counit from their B-to-B composite to the identity span at B uses f:A to B. The diagonal is well defined because the two copies of f agree on A. The triangle composites reduce to maps of pullbacks that preserve every defining projection; uniqueness then makes them identity maps. This special case explains why maps behave more rigidly than arbitrary spans without asserting that every span has an adjoint. It also gives a diagnostic for proposed adjunctions: write the two apex maps, then test the triangle equations by projections.

## Exercises

### Exercise 4.1 {#bicategories-ex-interchange}

Derive interchange from the fact that horizontal composition is a functor.
<details><summary>Hint 1</summary>Place two vertical composites in the product of hom-categories.</details>
<details><summary>Hint 2</summary>Apply preservation of composition by the horizontal composition functor.</details>
<details><summary>Solution</summary>In the product hom-category, the composite of (alpha,beta) and (alpha',beta') is (alpha' alpha,beta' beta). Horizontal composition sends this to the horizontal composite of those vertical composites. Functoriality makes it equal to the vertical composite of the horizontal images, which is interchange.</details>

### Exercise 4.2 {#bicategories-ex-one-object}

Identify one-cells, two-cells and vertical composition in the one-object bicategory of a monoidal category M.
<details><summary>Hint 1</summary>The sole hom-category is M itself.</details>
<details><summary>Hint 2</summary>Composition inside a hom-category is vertical; tensor supplies horizontal composition.</details>
<details><summary>Solution</summary>One-cells are objects of M and two-cells are morphisms between them. Vertical composition is ordinary composition of morphisms in M. Horizontal composition of one-cells and two-cells is tensor. The monoidal unit and associator supply the bicategorical identity and associator.</details>

### Exercise 4.3 {#bicategories-ex-span-map}

Describe a map between spans A left-arrow S right-arrow B and A left-arrow T right-arrow B.
<details><summary>Hint 1</summary>It is one map between their apex objects.</details>
<details><summary>Hint 2</summary>Both triangles to A and B must commute.</details>
<details><summary>Solution</summary>A map h:S to T must satisfy left_T h=left_S and right_T h=right_S. These equations ensure the legs are preserved. Composition and identities of such h are inherited from C, giving the span hom-category.</details>

### Exercise 4.4 {#bicategories-ex-span-pullback}

In sets, compute the composite of spans represented by {(a,b_1),(a,b_2)} and {(b_1,d)}.
<details><summary>Hint 1</summary>A pullback element is a pair of witnesses with equal middle coordinate.</details>
<details><summary>Hint 2</summary>Only one of the two first-span witnesses matches the second span.</details>
<details><summary>Solution</summary>The compatible pair through b_1 is the sole pullback element. It maps to a on the left and d on the right, so the composite span has one witness relating a to d. The witness through b_2 has no matching second-span element and contributes nothing.</details>

### Exercise 4.5 {#bicategories-ex-span-associator}

Explain why two bracketings of a triple pullback of spans are canonically isomorphic.
<details><summary>Hint 1</summary>Describe an element or generalized element by three compatible witnesses.</details>
<details><summary>Hint 2</summary>Both bracketings have the same universal property with three projections.</details>
<details><summary>Solution</summary>Each bracketing represents triples (s,t,u) with the two matching equations at the intermediate objects. The universal property gives a unique map between them commuting with all projections, and a unique reverse map. Their composites preserve the projections, so uniqueness makes them identities.</details>

### Exercise 4.6 {#bicategories-ex-span-pentagon}

Use pullback uniqueness to establish the span pentagon for four composable spans.
<details><summary>Hint 1</summary>Both pentagon paths preserve projections to four apices.</details>
<details><summary>Hint 2</summary>A fourfold compatible tuple has one universal representing object up to unique projection-preserving map.</details>
<details><summary>Solution</summary>Both composites from the leftmost to the rightmost bracketing commute with each projection to the four original span apices. By the universal property of the iterated pullback, at most one map has those four projection equations. Therefore the two composites agree, proving the pentagon.</details>

### Exercise 4.7 {#bicategories-ex-profunctor-variance}

For a functor F:A to B, check the variance of P(b,a)=B(b,F(a)).
<details><summary>Hint 1</summary>Changing b by an arrow acts by precomposition.</details>
<details><summary>Hint 2</summary>Changing a acts through F and postcomposition.</details>
<details><summary>Solution</summary>An arrow b' to b gives B(b,F(a)) to B(b',F(a)) by precomposition, so b is contravariant. An arrow a to a' gives B(b,F(a)) to B(b,F(a')) by postcomposition with F(a to a'), so a is covariant. Thus P is a functor B opposite times A to Set.</details>

### Exercise 4.8 {#bicategories-ex-representable}

Compute the composite of the representable profunctors of F:A to B and G:B to D.
<details><summary>Hint 1</summary>The composite coend has pairs of maps d to G(b) and b to F(a).</details>
<details><summary>Hint 2</summary>Apply G to the second map and compose in D.</details>
<details><summary>Solution</summary>The class of (q:d to G(b),p:b to F(a)) maps to G(p)q:d to G(F(a)). Co-Yoneda proves this map is a natural bijection, so the composite profunctor is D(d,G(F(a))), represented by G composed F.</details>

### Exercise 4.9 {#bicategories-ex-adjunction}

Interpret an ordinary functor adjunction F left adjoint to G as an adjunction of one-cells in Cat.
<details><summary>Hint 1</summary>One-cells in Cat are functors and two-cells are natural transformations.</details>
<details><summary>Hint 2</summary>Use the ordinary unit and counit as the two required two-cells.</details>
<details><summary>Solution</summary>The unit is a natural transformation identity to GF and the counit is FG to identity. Their two ordinary triangle identities are exactly the bicategorical triangle equations because horizontal composition is whiskering of natural transformations. Hence the functor adjunction is a one-cell adjunction.</details>

### Exercise 4.10 {#bicategories-ex-strictness}

Explain why choosing pullbacks does not usually make the bicategory of spans strict.
<details><summary>Hint 1</summary>Compare the objects representing the two triple pullback bracketings.</details>
<details><summary>Hint 2</summary>The universal property gives an isomorphism, not literal equality of chosen objects.</details>
<details><summary>Solution</summary>Chosen pullbacks for (S times_B T) times_D U and S times_B (T times_D U) can be different objects with different parenthesized constructions. Their universal properties yield a canonical isomorphism, which is the associator. Strictness would require those choices and all unit choices to agree literally with identity comparison maps, a condition not supplied by existence of pullbacks alone.</details>

## Sources

Original exposition and exercises. The span proof uses the elementary pullback universal property developed in Euler's Introduction to Category Theory; profunctor composition uses the previous chapter's coend formulas. General bicategorical coherence and strictification are identified imports from standard bicategory theory, not proved here.

## Summary

A bicategory has hom-categories, horizontal composition, identity one-cells and coherent associator and unitor two-cells. Interchange follows from functoriality. A monoidal category gives a one-object bicategory; pullbacks compose spans, and coends compose profunctors. Their explicit universal properties prove the required finite coherence. Adjunctions and pseudofunctors retain comparison cells rather than pretending all composition is strict. The next chapter studies operations with many ordered inputs.
