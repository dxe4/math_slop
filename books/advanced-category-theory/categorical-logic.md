
# Categorical Logic

Logic can be interpreted by maps and subobjects rather than by a fixed set of two truth values. Products interpret conjunction, characteristic maps interpret predicates, and adjoints to pullback interpret quantifiers. This dictionary has exact limits: a category with products does not automatically interpret implication or quantification, and a sheaf topos generally has intuitionistic rather than classical internal logic. We prove the elementary semantic adjunctions and an open-set Heyting example, then identify the large soundness and classification theorems as imports.

Read [Topos Theory](topos-theory.md), [Sheaves and Grothendieck Topologies](sheaves-grothendieck-topologies.md), and [Introduction to Category Theory, Adjunctions](../introduction-to-category-theory/adjunctions.md). The earlier [Morphisms First categorical-logic reading](../morphisms-modules-categories/categorical-logic.md) remains live with its original formulas, questions and solutions. The primary chapter preserves its boundary between elementary calculations and imported Kripke–Joyal or classifying-topos results.

## Conjunction as a universal property

In a poset viewed as a category, an arrow a to b means a≤b. A binary product of a and b is their meet: an element x has arrows to both exactly when it has one arrow to a meet b. A terminal object is the top element. Thus a conjunction-only propositional theory can be represented by a finite-meet poset of formulas modulo mutual derivability. An entailment is an arrow, not an equality of formula strings.

**Proposition 8.1.** A truth-value interpretation of a conjunction-only syntax in the two-element poset must preserve top and binary meets to validate the product rules.

*Proof.* The empty context or true formula is terminal in the syntactic poset, so a structure-preserving interpretation sends it to true. The conjunction of A and B is their product, so its image must be the meet of the two images. Conversely, preserving these universal properties sends each projection and pairing entailment to a valid arrow in the truth poset. An arbitrary monotone map need not preserve meets and therefore need not validate conjunction introduction as an equality of interpretations. ∎

This does not yet interpret disjunction or implication. Adding more connectives requires additional structure in the semantic category. Calling a meet-semilattice a complete model of first-order logic would hide those missing constructions.

## Heyting implication from an adjunction

**Definition 8.2.** A Heyting algebra is a bounded lattice in which, for each a, the map b maps to a meet b has a right adjoint b maps to a implies b. Equivalently, x meet a≤b exactly when x≤a implies b. Negation of a is a implies bottom. In a Boolean algebra, double negation collapses to the original element; a general Heyting algebra need not have that property.

**Theorem 8.3 (Open sets form a Heyting algebra).** The open subsets of any topological space X form a Heyting algebra under intersection and union, with U implies V equal to the interior of ((X minus U) union V).

*Proof.* Opens are closed under finite intersections and arbitrary unions, and the empty and full opens give bottom and top. Let W be open. The inequality W intersect U subset V holds exactly when W is contained in (X minus U) union V. Because W is open, containment in that set is equivalent to containment in its interior. Thus W intersect U subset V if and only if W subset U implies V, proving the right-adjoint condition. ∎

**Worked example 8.4 (Double negation in a space).** On the real line take U=(0,1). Its Heyting negation is the interior of the complement, namely the two exterior open rays. Negating again gives the interior of the complement of those rays, which is (0,1) again. For a different open, take U the real line with the origin removed. Its complement has empty interior, so its negation is empty and its double negation is the whole line. U is not the whole line. This explicit strict inequality shows that open-set logic need not be Boolean. It is a statement about open regions of truth, not about an inability to use ordinary classical logic externally while studying the space.

Subobjects of an object X in a topos form a Heyting algebra under suitable finite limits, images and exponentials. The subobject classifier packages these operations internally. The open-set example is the externally visible case of subobjects of the terminal sheaf on a space. The full internal-Heyting construction is standard topos theory; the elementary open-set adjunction above supplies a complete proof of the phenomenon we use later.

## Predicates and substitution

**Definition 8.5.** A predicate on an object X is a subobject P included in X, equivalently a characteristic map X to Omega in a topos. A term from context Gamma to X is a map Gamma to X. Substituting that term into P means pulling P back along the map, yielding a subobject of Gamma. Pullback functoriality proves that successive substitutions compose in the expected order.

**Proposition 8.6.** If P included in X is a predicate and f:Y to X a term, membership of a generalized element y:Z to Y in the substituted predicate is equivalent to membership of fy:Z to X in P.

*Proof.* The substituted predicate is the pullback Y times_X P. A map y:Z to Y factors through that pullback exactly when there is a lift Z to P whose composite into X is fy. Such a lift says precisely that fy factors through P. The equivalence is the pullback universal property. ∎

The statement works for generalized elements from arbitrary Z, not only global points from the terminal object. In sheaf categories there may be few global points, so testing only global elements can miss a subobject distinction. This is why categorical logic formulates validity using all contexts.

## Quantifiers as adjoints to pullback

Let f:X to Y be a function of sets. Inverse image sends a subset B of Y to f inverse(B) in X. Define existential image of A subset X as the set of y for which some x in A satisfies f(x)=y, and universal image as the set of y for which every x with f(x)=y lies in A.

**Theorem 8.7 (Set quantifier adjunctions).** On subset posets, existential image is left adjoint to inverse image, and universal image is right adjoint to inverse image.

*Proof.* The inclusion existential_f(A) subset B holds exactly when every x in A has f(x) in B, equivalent to A subset f inverse(B). This proves the left adjunction. The inclusion f inverse(B) subset A holds exactly when for every y in B every x in the fiber over y lies in A, equivalent to B subset universal_f(A). This proves the right adjunction. Empty fibers make the universal condition vacuously true; that is part of the right-adjoint formula, not a special exception. ∎

**Worked example 8.8 (A non-surjective map).** Let f:{a,b} to {0,1,2} send a to zero and b to one, and take A={a}. The existential image is {0}. The universal image is {0,2}: the fiber over zero lies in A, the fiber over one does not, and the empty fiber over two satisfies the universal condition vacuously. The two images differ, even though both arise from the same inverse-image functor. This finite calculation checks the order and direction of the two adjoints.

In a regular category, stable image factorization supports existential quantification; a Heyting category additionally has suitable right adjoints for universal quantification. Coherent categories add finite stable unions for disjunction, and geometric settings admit appropriately stable arbitrary unions. The definitions require Beck–Chevalley compatibility for substitution across pullback squares when a full first-order semantics is asserted. We use these as structural boundaries rather than pretending the Set calculation proves the general theorem.

## Geometric syntax and preservation

A geometric formula is built from atomic predicates and equality using finite conjunction, arbitrary disjunction and existential quantification. Geometric sequents express entailments between such formulas in a context. Implication and universal quantification are generally absent from this fragment. Their absence matters because inverse-image functors of geometric morphisms preserve finite limits and all colimits, the categorical operations interpreting the geometric connectives and existential images under the standard regularity hypotheses.

**Imported theorem 8.9 (Geometric preservation).** For a geometric morphism between Grothendieck topoi, inverse image preserves interpretation of geometric formulas and their valid sequents, with the usual site or internal-language semantics and exactness hypotheses. The full induction on syntax and the image/cover clauses are imported from the standard Kripke–Joyal development. It is not a statement that every intuitionistic formula, including implication and universal quantification, is preserved.

**Worked example 8.10 (Decidable equality as a presentation).** Introduce a binary relation D on a sort X and impose the geometric sequents true entails x=y or D(x,y), and x=y together with D(x,y) entails false. In a model, D is a complement to the diagonal: every pair is equal or D-related, and no pair is both. Thus equality is decidable in that model. The axioms use finite disjunction, conjunction, equality and false, so the explicitly presented structure is geometric and is preserved by inverse images. Simply writing the abbreviation “x is not equal to y” would use negation and would not by itself establish a geometric presentation; the added relation and axioms do the work.

## Site forcing and classifying topoi

In a sheaf topos, a proposition may hold after passing to a cover without holding by one globally selected witness. Kripke–Joyal forcing records this: an object U of a site forces an existential statement when a covering family permits local witnesses, while a disjunction may choose different alternatives on different cover members. Atomic formulas use factorization through their interpreting subobjects. These are the key clauses, but a complete soundness proof requires induction through all constructors and stability under restriction.

**Imported theorem 8.11 (Kripke–Joyal semantics).** For a site presentation of a Grothendieck topos, the inductively defined forcing relation agrees with the subobject interpretation of the internal intuitionistic language. We import the full induction from Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, Chapter VI. The local witness clauses are not proved merely by naming a site.

**Imported theorem 8.12 (Classifying topos).** A geometric theory T has a classifying Grothendieck topos B(T) and a universal model such that geometric morphisms E to B(T) correspond, naturally in E, to models of T in E. The syntactic-site construction and full universal-property proof are imported from Mac Lane and Moerdijk, Chapter X, Section 6. The theorem applies to geometric syntax; an arbitrary first-order theory may require geometric Morleyization before this form is used.

The direction of the geometric morphism is part of the statement: a model in E gives a map E to the classifying topos, whose inverse image pulls back the universal model. Reversing that arrow reverses the intended universal property. A particular presentation of B(T) by a site is not unique, just as a space can have more than one basis of opens.

## Dependent types in slices

A category is locally cartesian closed when every slice is cartesian closed. For a map f:X to Y, pullback between slices has a right adjoint Pi_f under this hypothesis. It represents dependent products. Composition of maps supplies dependent sums Sigma_f as a left adjoint to pullback in the basic slice setting. In Set, a map p:E to X is an X-indexed family, and Pi_f forms, over each y, a product of the fibers E_x for x in f inverse(y). This recovers the universal quantifier pattern with arbitrary sets of possible witnesses.

These categorical operations support extensional dependent type theory under the usual comprehension and coherence choices. Intensional identity types, univalence and higher inductive types require additional homotopical structure; they are not consequences of local cartesian closure alone. The earlier retained reading names Martin-Löf type theory as context, and this chapter keeps the precise semantic boundary visible.

## Exercises

### Exercise 8.1 {#categorical-logic-ex-meet}

Prove that a product in a poset category is a meet.
<details><summary>Hint 1</summary>Translate arrows from x to a and b into inequalities.</details>
<details><summary>Hint 2</summary>Use the universal property to identify the greatest lower bound.</details>
<details><summary>Solution</summary>An arrow x to the product exists exactly when x≤a and x≤b. Hence the product is a lower bound of a,b above every other lower bound, which is their meet. Conversely a meet has exactly this universal arrow property.</details>

### Exercise 8.2 {#categorical-logic-ex-open-implication}

Compute U implies V for U=(0,2) and V=(1,3) in the real line.
<details><summary>Hint 1</summary>Form the union of the complement of U with V.</details>
<details><summary>Hint 2</summary>Take its interior and inspect the endpoints zero and two.</details>
<details><summary>Solution</summary>The complement of U is the two closed rays through zero and two. Its union with (1,3) is the set of points at most zero together with points greater than one. Its interior is the negative open ray together with (1,infinity). Thus U implies V is (-infinity,0) union (1,infinity).</details>

### Exercise 8.3 {#categorical-logic-ex-double-negation}

Find double negation of the open real line with the origin removed.
<details><summary>Hint 1</summary>The complement is the singleton origin.</details>
<details><summary>Hint 2</summary>The interior of that singleton is empty.</details>
<details><summary>Solution</summary>The Heyting negation is interior of the complement, hence empty. Negating empty gives the whole real line. This strictly contains the original open set, so double-negation elimination fails in the open-set Heyting algebra.</details>

### Exercise 8.4 {#categorical-logic-ex-substitution}

Show that pulling a predicate back along f and then g equals pulling it back along fg.
<details><summary>Hint 1</summary>Use the universal property of two iterated pullbacks.</details>
<details><summary>Hint 2</summary>Both classify generalized elements whose fg-image factors through the predicate.</details>
<details><summary>Solution</summary>A generalized element factors through the iterated pullback exactly when its g-image factors through f-star P, equivalently when its fg-image factors through P. The pullback along fg has the same universal property. The canonical comparison is therefore an isomorphism, giving functorial substitution.</details>

### Exercise 8.5 {#categorical-logic-ex-exists}

Prove existential image is left adjoint to inverse image for a function of sets.
<details><summary>Hint 1</summary>Expand existential_f(A) subset B.</details>
<details><summary>Hint 2</summary>Rewrite the condition for every x in A.</details>
<details><summary>Solution</summary>Existential_f(A) subset B means f(x) belongs to B for every x in A. This is equivalent to x belonging to f inverse(B) for every x in A, or A subset f inverse(B). That is the left-adjoint equivalence.</details>

### Exercise 8.6 {#categorical-logic-ex-forall}

Why does universal image contain points outside the image of f?
<details><summary>Hint 1</summary>Inspect the fiber over such a point.</details>
<details><summary>Hint 2</summary>A universal statement over an empty set is true.</details>
<details><summary>Solution</summary>If y is outside the image, its fiber is empty. The condition that every x in that fiber lies in A is vacuously true, so y belongs to universal_f(A) for every A. This behavior is required by the right-adjoint formula.</details>

### Exercise 8.7 {#categorical-logic-ex-geometric}

List which of conjunction, arbitrary disjunction, implication and existential quantification belong to geometric syntax.
<details><summary>Hint 1</summary>Geometric syntax allows only finite conjunction.</details>
<details><summary>Hint 2</summary>Its quantifier is existential, not universal.</details>
<details><summary>Solution</summary>Finite conjunction, arbitrary disjunction and existential quantification are geometric constructors. Implication is not generally geometric. Equality and atomic formulas are also allowed; universal quantification belongs to a larger first-order fragment.</details>

### Exercise 8.8 {#categorical-logic-ex-apartness}

Explain how a complementary relation D presents decidable equality geometrically.
<details><summary>Hint 1</summary>Use one sequent covering every pair by equality or D.</details>
<details><summary>Hint 2</summary>Use another sequent forbidding their overlap.</details>
<details><summary>Solution</summary>The sequents true entails x=y or D(x,y), and x=y together with D(x,y) entails false, make D disjoint from equality and jointly exhaustive with it. They use only geometric operations, so this expanded signature presents decidable equality in a geometric form.</details>

### Exercise 8.9 {#categorical-logic-ex-classifying-direction}

State the direction of the geometric morphism associated with a model of T in E.
<details><summary>Hint 1</summary>The universal model lives in the classifying topos.</details>
<details><summary>Hint 2</summary>Inverse image pulls that model into E.</details>
<details><summary>Solution</summary>The model determines a geometric morphism from E to B(T). Its inverse-image functor maps the universal model in B(T) to the chosen model in E. A morphism in the opposite direction would not have this pullback role.</details>

### Exercise 8.10 {#categorical-logic-ex-dependent-product}

For a set map f:X to Y and a family E_x, describe the fiber of its dependent product over y.
<details><summary>Hint 1</summary>A section over the fiber f inverse(y) chooses one element for each x there.</details>
<details><summary>Hint 2</summary>Package these choices as a Cartesian product.</details>
<details><summary>Solution</summary>The fiber of Pi_f E over y is the product of E_x over all x with f(x)=y. Its elements are functions choosing one element of E_x for each x in the fiber. If that fiber is empty, the product is a singleton, matching the vacuous universal case.</details>

## Sources

Original primary exposition adapting the subject sequence and selected semantic examples from the retained Euler Morphisms First categorical-logic reading, whose five questions and solutions remain live. Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, Chapters VI and X, is the precise imported route for Kripke–Joyal semantics and geometric classifying topoi. Jacobs, *Categorical Logic and Type Theory*, supplies the dependent-type benchmark. The finite meet, open Heyting, pullback and Set quantifier proofs are supplied here.

## Summary

Finite products interpret conjunction; subobjects and pullbacks interpret predicates and substitution. Heyting implication is a right adjoint to meet, and the open sets of a space give a concrete non-Boolean model. Existential and universal images are adjoints to inverse image in Set, with different behavior on empty fibers. Geometric syntax is the fragment preserved by inverse images under the imported general semantics theorem. Kripke–Joyal forcing and classifying topoi are named deep imports. The next chapter changes from logical equivalence to homotopical weak equivalence.
