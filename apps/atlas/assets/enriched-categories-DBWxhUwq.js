var e=`---
parent_id: book-advanced-category-theory
chapter_id: enriched-categories
title: "Enriched Categories"
level: graduate
license: CC BY-SA 4.0
---

# Enriched Categories

An ordinary category has a set of maps between two objects. An enriched category replaces that set by an object of a chosen monoidal category V. The replacement must be structural rather than metaphorical: composition is a morphism in V from a tensor of hom-objects, and identities start at the monoidal unit. Ordinary categories, preorders, generalized metric spaces, additive categories and categories of complexes then become examples of the same pattern. We work carefully with the order of tensor factors, because a nonsymmetric base does not allow them to be swapped for free.

Preparation is [Monoidal Categories](monoidal-categories.md), [Introduction to Category Theory](../introduction-to-category-theory.md), and the tensor–Hom chapter of [Homological Algebra](../morphisms-modules-categories/tensor-products-hom.md). The earlier [Morphisms First enriched reading](../morphisms-modules-categories/enriched-categories.md) remains live under its original parent and exercise identities. This primary chapter expands its examples and gives full elementary proofs; the general enriched end construction is developed in the next chapter.

## Definition and the underlying ordinary category

**Definition 2.1.** Let V be a monoidal category with unit I. A V-category C has a class of objects; for each A,B an object C(A,B) in V; for each A a unit map I to C(A,A); and for each A,B,D a composition map from C(B,D) tensor C(A,B) to C(A,D). The two composites of three hom-objects agree after inserting V's associator, and composing with a unit map agrees with the corresponding left or right unitor. A small V-category has a set of objects. We assume V is locally small whenever ordinary maps in V are used as sets.

For V=Set with Cartesian product, a hom-object is a hom-set, the unit map selects an identity, and the composition morphism is the ordinary composition function. This does not say every enrichment is secretly an ordinary category with extra decoration. In a poset base, a hom-object is a truth value or distance, and the composition morphism is an inequality. In a chain-complex base, it contains maps in several degrees and a differential.

**Proposition 2.2 (Underlying category).** A V-category has an ordinary underlying category C-zero with the same objects and hom-set V(I,C(A,B)).

*Proof.* For f:I to C(A,B) and g:I to C(B,D), first use an inverse unitor I to I tensor I, then g tensor f, then enriched composition. This is an arrow I to C(A,D), so it is an ordinary composite. The enriched associativity diagram, together with naturality of the monoidal associator, equates the two threefold composites. The enriched unit diagrams make the given maps I to C(A,A) identities. Thus the ordinary category axioms hold. No element of a hom-object was assumed. ∎

The construction can forget information. For a chain-complex-enriched category, an underlying arrow is a degree-zero cycle in its hom-complex; higher degrees and boundaries are absent from the underlying hom-set. Passing further to zeroth homology identifies maps differing by a degree-one boundary. These are different ordinary categories and should not be conflated.

## Preorders and generalized metric spaces

**Worked example 2.3 (Truth-valued homs).** Take V to be the two-element poset 0≤1, considered as a category, with tensor minimum and unit 1. Assign C(x,y)=1 when x≤y in a proposed preorder and zero otherwise. An identity map 1 to C(x,x) exists precisely when C(x,x)=1, giving reflexivity. The composition map C(y,z) minimum C(x,y) to C(x,z) exists precisely when x≤y and y≤z imply x≤z. Thus enriched associativity is transitivity, with no separate choice of a composition function. Antisymmetry is not forced: two distinct objects may each relate to the other. The result is a preorder, not necessarily a partial order.

**Worked example 2.4 (Extended directed distances).** Let V be the ordered set of nonnegative extended reals, with arrows reversed from the usual order, tensor addition and unit zero. Set C(x,y)=d(x,y). The unit arrow zero to d(x,x) means zero is at least d(x,x), hence d(x,x)=0. Composition is an arrow d(y,z)+d(x,y) to d(x,z), meaning d(x,z)≤d(x,y)+d(y,z). Symmetry and separation do not follow. Thus a V-category is an extended directed pseudometric space. An ordinary underlying arrow x to y exists when zero is at least d(x,y), equivalently when d(x,y)=0. It records zero-cost reachability, not every finite distance.

The direction of the poset order is essential. If one used the usual ≤ with addition, composition would demand d(x,y)+d(y,z)≤d(x,z), a reverse triangle inequality. Enriched notation alone cannot repair a wrong order convention. The base monoidal category encodes which inequalities count as morphisms.

## Additive and differential graded examples

**Worked example 2.5 (Bilinear composition).** In the monoidal category Ab under tensor over the integers, an enriched hom-object is an abelian group. A composition morphism from Hom(B,D) tensor Hom(A,B) to Hom(A,D) is equivalent, by the tensor universal property, to a bilinear composition law. Hence Ab-enriched categories are precisely preadditive categories. R-modules over any ring R form such a category: pointwise addition makes each Hom group abelian, and function composition distributes in both variables. An Ab-enriched functor must induce homomorphisms on these groups, so it is additive on morphisms. It need not preserve all limits or exact sequences; additivity and exactness are separate conditions.

For complexes of abelian groups, the hom-complex has degree n component consisting of families of maps shifting degree by n. Its differential is the graded commutator with the source and target differentials. Degree-zero cycles are chain maps; degree-zero boundaries are null-homotopic maps under the chosen chain grading. Composition of homogeneous maps has additive degree and satisfies the graded Leibniz rule, so it is a chain map from the tensor product of hom-complexes. This produces a differential graded enrichment. The precise signs depend on whether chain or cochain grading is chosen, so one must state a convention before calculating a homotopy equation.

## Enriched functors and natural transformations

**Definition 2.6.** A V-functor F:C to D sends objects to objects and supplies maps in V from C(A,B) to D(FA,FB), preserving the enriched unit and composition diagrams. A V-natural transformation eta:F to G consists of components I to D(FA,GA), satisfying the enriched naturality equation. The equation compares the two composites from C(A,B) to D(FA,GB): apply F and then eta at B, or apply eta at A and then G. The tensor order in these two composites is fixed by the composition convention.

**Proposition 2.7.** An Ab-enriched functor is exactly an ordinary functor additive on every hom-group.

*Proof.* The enriched hom maps are group homomorphisms, so they preserve sums and zero. The enriched unit and composition diagrams are exactly the ordinary functor laws after evaluating on individual maps, because pure tensors generate the tensor product. Conversely, an additive ordinary functor gives group homomorphisms on hom-groups; its functor laws make the enriched diagrams commute. ∎

For the metric enrichment, an enriched functor F requires d_D(Fx,Fy)≤d_C(x,y), because the base morphism from the source hom-object to the target hom-object uses reversed order. It is therefore a nonexpansive map. An arbitrary continuous map between metric spaces need not qualify; continuity alone gives local control rather than a global Lipschitz constant one.

## Change of enrichment

**Theorem 2.8.** A lax monoidal functor L:V to W changes a V-category C into a W-category with the same objects and hom-objects L(C(A,B)).

*Proof.* Use the lax unit map from W's unit to L(I) and then L of the enriched identity to define new identities. For composition, use the lax comparison L(C(B,D)) tensor L(C(A,B)) to L(C(B,D) tensor C(A,B)), then L of original composition. The lax associativity and unit axioms equate the two ways of building triple composites and the two unit composites. Since L preserves equality of maps, C's original enriched diagrams finish the check. Thus every required W-category diagram commutes. ∎

The forgetful functor from Ab to Set is lax monoidal for Cartesian product on sets: a pair of group elements is sent to its pure tensor. Applying it to an Ab-enriched category recovers the ordinary category of its elements. It is not generally strong: the underlying set of A tensor B is not naturally the Cartesian product of the underlying sets. The lax direction is exactly the direction needed to turn a pair of elements into a tensor.

## Representables and enriched Yoneda

Assume now that V is complete, locally small, symmetric monoidal closed, and that C is a small V-category. Internal hom in V is written [X,Y]. Under these hypotheses the enriched functor category has hom-objects defined by an end. The next chapter constructs that end as an equalizer of products and proves its universal property. We state the formula here so the Yoneda claim has a precise domain.

**Theorem 2.9 (Enriched Yoneda).** For an enriched presheaf P from C opposite to V and A in C, the enriched natural-transformation object from C(-,A) to P is isomorphic to P(A), naturally in A and P.

*Proof.* The enriched hom-object is an end of [C(X,A),P(X)] over X. Evaluation at X=A and at the enriched identity I to C(A,A) gives a map from that end to P(A). In the other direction, an element or generalized element of P(A) acts on a hom-object C(X,A) by the enriched presheaf action, producing a map C(X,A) tensor P(A) to P(X), or after symmetry and internal-hom adjunction a map P(A) to [C(X,A),P(X)]. Associativity of the presheaf action makes these maps dinatural in X, so the end property assembles them into a map from P(A) to the end. The unit axiom makes evaluation after assembly the identity. Enriched naturality, applied to the variable hom-object and then to its identity, makes assembly after evaluation the identity. These are equations in V, not merely bijections of underlying sets. ∎

The proof uses existence of the end and the tensor–internal-hom adjunction; it does not assume a general enriched co-Yoneda theorem. If V lacks the necessary products or equalizers, the functor-category hom-object may not exist by this construction. The ordinary Yoneda lemma can still hold after forgetting enrichment, but that is a weaker statement.

## Tensors and cotensors

**Definition 2.10.** A V-category C is tensored if, for every V in V and A in C, there is an object V acting on A whose hom-object into B is naturally [V,C(A,B)]. It is cotensored if there is an object B to the V power whose hom-object from A is naturally [V,C(A,B)]. These are representing properties, so any two choices are uniquely isomorphic in the underlying category. Enrichment alone supplies neither object.

For R-modules enriched over Ab, a tensor by an abelian group K is K tensor over Z M, with R acting on the M factor. A cotensor is Hom over Z from K to M, with pointwise R-action. The tensor–Hom adjunction verifies the representing formulas. The full category of R-modules has these objects. The subcategory of finitely generated modules may not: an infinite free abelian group tensored with nonzero finitely generated M generally gives an infinitely generated module. Thus changing the ambient category can destroy tensors while leaving the same form of enriched hom-groups.

## Exercises

### Exercise 2.1 {#enriched-categories-ex-preorder}

Prove that enrichment over the two-element monoidal poset gives preorders and identify the missing antisymmetry axiom.
<details><summary>Hint 1</summary>Read identity as an arrow out of the unit truth value.</details>
<details><summary>Hint 2</summary>Read composition when both input truth values are one.</details>
<details><summary>Solution</summary>The identity arrow forces C(x,x)=1, giving reflexivity. Composition forces C(x,y)=C(y,z)=1 to imply C(x,z)=1, giving transitivity. No enriched axiom forces x=y when C(x,y)=C(y,x)=1, so antisymmetry is absent.</details>

### Exercise 2.2 {#enriched-categories-ex-metric}

Derive the triangle inequality and identity distance from enrichment over nonnegative extended reals with reversed order.
<details><summary>Hint 1</summary>Translate the unit arrow zero to d(x,x) into the usual numerical order.</details>
<details><summary>Hint 2</summary>Translate the composition arrow from a sum of two distances.</details>
<details><summary>Solution</summary>Reversed order makes zero to d(x,x) mean zero is at least d(x,x), so nonnegativity gives d(x,x)=0. Composition means d(x,y)+d(y,z) is at least d(x,z), the triangle inequality. Neither symmetry nor separation is imposed.</details>

### Exercise 2.3 {#enriched-categories-ex-underlying}

Construct composition in the underlying ordinary category of a V-category without using elements of hom-objects.
<details><summary>Hint 1</summary>An underlying arrow is a map from I into a hom-object.</details>
<details><summary>Hint 2</summary>Insert I isomorphic to I tensor I before using enriched composition.</details>
<details><summary>Solution</summary>For f:I to C(A,B) and g:I to C(B,D), compose I to I tensor I, then g tensor f, then the enriched composition map. Enriched associativity and unit diagrams become ordinary associativity and identity equations for these composites.</details>

### Exercise 2.4 {#enriched-categories-ex-additive}

Show why a composition map in Ab from a tensor of two hom-groups is the same as bilinear composition.
<details><summary>Hint 1</summary>Use the tensor product universal property.</details>
<details><summary>Hint 2</summary>Test linearity separately in the first and second hom variable.</details>
<details><summary>Solution</summary>A group homomorphism G tensor H to K corresponds uniquely to a map G times H to K additive in each variable. Applying this to hom-groups makes enriched composition bilinear. Conversely bilinear composition induces the required tensor map, and the usual associativity and identities give the enriched laws.</details>

### Exercise 2.5 {#enriched-categories-ex-nonexpansive}

Prove that a functor between metric-enriched categories is a nonexpansive map.
<details><summary>Hint 1</summary>It gives one base-category arrow between each pair of distance objects.</details>
<details><summary>Hint 2</summary>The base order is the reverse of numerical order.</details>
<details><summary>Solution</summary>The hom map d_C(x,y) to d_D(Fx,Fy) exists exactly when d_C(x,y) is at least d_D(Fx,Fy). Thus every distance weakly decreases. Object mapping and this inequality are precisely a nonexpansive map, with identity and composition conditions inherited from the metric axioms.</details>

### Exercise 2.6 {#enriched-categories-ex-change}

Write the composite defining W-enriched composition after applying a lax monoidal functor.
<details><summary>Hint 1</summary>The two new hom-objects start as a tensor of images.</details>
<details><summary>Hint 2</summary>Apply the lax tensor comparison before the image of old composition.</details>
<details><summary>Solution</summary>Use L(C(B,D)) tensor L(C(A,B)) to L(C(B,D) tensor C(A,B)) to L(C(A,D)). The first arrow is the lax comparison and the second is L of enriched composition. Lax coherence and the old associativity diagram ensure the new one commutes.</details>

### Exercise 2.7 {#enriched-categories-ex-abelian-forgetful}

Explain why the forgetful functor from Ab to Set is lax monoidal and why pure tensors give its comparison.
<details><summary>Hint 1</summary>The set tensor is Cartesian product.</details>
<details><summary>Hint 2</summary>Use the universal bilinear map to produce a function on pairs.</details>
<details><summary>Solution</summary>The function from the Cartesian product of underlying sets to the underlying tensor set sends (a,b) to a tensor b. The unit comparison sends the singleton, the unit for Cartesian product, to 1 in the underlying set of Z, the tensor unit of Ab. Pure-tensor associativity and unit equations prove lax coherence. The comparison is generally not a bijection.</details>

### Exercise 2.8 {#enriched-categories-ex-yoneda-unit}

In the enriched Yoneda proof, identify the map from the natural-transformation end to P(A).
<details><summary>Hint 1</summary>Project the end to its component at A.</details>
<details><summary>Hint 2</summary>Evaluate the internal hom at the identity map I to C(A,A).</details>
<details><summary>Solution</summary>The end projects to [C(A,A),P(A)]. Tensor with the enriched identity I to C(A,A), then use evaluation to obtain a map from the end tensor I to P(A). The right unitor identifies the source with the end. This is evaluation of a transformation at the identity.</details>

### Exercise 2.9 {#enriched-categories-ex-tensor}

Show that an R-module category enriched over Ab is tensored by an abelian group K.
<details><summary>Hint 1</summary>Give R-action on K tensor over Z M using the M factor.</details>
<details><summary>Hint 2</summary>Apply the abelian-group tensor–Hom adjunction to the R-linear target maps.</details>
<details><summary>Solution</summary>Set K acting on M equal to K tensor over Z M with r(k tensor m)=k tensor rm. An R-linear map from this tensor to N corresponds to a group homomorphism K to Hom_R(M,N), naturally in all variables. This is the required enriched representing property.</details>

### Exercise 2.10 {#enriched-categories-ex-finite-failure}

Give a concrete reason the category of finitely generated abelian groups is not tensored over all abelian groups.
<details><summary>Hint 1</summary>Take the object Z and an infinite free abelian group K.</details>
<details><summary>Hint 2</summary>The representing tensor would have to be isomorphic to K tensor Z.</details>
<details><summary>Solution</summary>Let K be the direct sum of countably many copies of Z. If an object T represented tensoring K with Z inside finitely generated abelian groups, then Hom(T,Z) would be isomorphic as an abelian group to Hom(K,Z), a countable product of Z. For finitely generated T, Hom(T,Z) is a finite-rank free abelian group; the countable product is not finitely generated. This contradiction shows that the required tensor cannot exist in the subcategory.</details>

## Sources

Original expanded exposition and exercises adapting topics from the retained Euler Morphisms First enriched reading, which remains live with its own five exercises and solutions. The elementary enriched Yoneda proof here uses the end construction developed in the next chapter. Kelly, *Basic Concepts of Enriched Category Theory*, is the benchmark for the general framework; no theorem beyond the stated hypotheses is silently imported.

## Summary

Enrichment replaces hom-sets with hom-objects and ordinary composition with a morphism from their tensor. Set, truth values, extended distances, abelian groups and complexes yield different concrete meanings. Underlying categories and lax change of enrichment forget or transport structure. The enriched Yoneda formula needs a small source, a sufficiently complete closed base and the end universal property. Tensors and cotensors are additional representing objects. The next chapter builds ends and coends explicitly.
`;export{e as default};