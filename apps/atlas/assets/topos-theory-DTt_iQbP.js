var e=`---
parent_id: book-advanced-category-theory
chapter_id: topos-theory
title: "Topos Theory"
level: graduate
license: CC BY-SA 4.0
---

# Topos Theory

A category of sheaves retains much of the structure of sets while changing what it means for a statement to hold locally. Products and pullbacks exist, subobjects have characteristic maps, and local sections can be glued; however a statement valid in ordinary sets may fail internally. A Grothendieck topos is, by definition, a category equivalent to sheaves of sets on a small site. We prove explicit structural facts in sets, presheaves and topological sheaves, and identify the deeper representation and exactness theorems as imports.

Read [Sheaves and Grothendieck Topologies](sheaves-grothendieck-topologies.md), [Introduction to Category Theory, Limits and Colimits](../introduction-to-category-theory/limits-colimits.md), and [Homological Algebra, Abelian Categories](../morphisms-modules-categories/abelian-categories.md) for derived-functor language. The earlier [Morphisms First topos reading](../morphisms-modules-categories/topos-theory.md) remains live with its original questions, solutions and source identity. This primary chapter places its ordinary-topos material after the actual sheaf construction, rather than presupposing higher topoi.

## Grothendieck and elementary definitions

**Definition 7.1.** A Grothendieck topos is a category equivalent to Sh(C,J), the category of set-valued sheaves on a small site. The site is a presentation and need not be unique. A presheaf topos Set to the C opposite power is obtained with the coarse topology, where every presheaf is a sheaf. The category Set itself is the case of a one-object terminal site.

**Definition 7.2.** An elementary topos is a category with finite limits, exponentials and a subobject classifier. These axioms do not by themselves assert a small generating family or all small colimits. Every Grothendieck topos is an elementary topos, but the converse is not part of the definition. In particular, calling a category “a topos” without specifying the intended sense can hide a size or colimit assumption.

**Imported theorem 7.3 (Giraud recognition).** A locally small category satisfying the standard Giraud conditions—finite limits, small coproducts that are disjoint and pullback-stable, effective equivalence relations with stable quotients, and a small generating set—is equivalent to sheaves on a small site, with the exact regularity formulation of the conditions as in Mac Lane and Moerdijk, Appendix. The reverse construction of a site from generators is imported. We do not infer it from the examples below. The forward structural properties of sheaf categories are illustrated and proved where elementary.

The distinction matters in practice. To prove a category is a Grothendieck topos, displaying finite limits and a truth-value object alone is insufficient; one needs a site presentation or the full recognition conditions. Conversely, once a site presentation is available, its sheaf category is a Grothendieck topos by definition, even if the chosen site has an unusual shape.

## Finite limits and sheafification

**Proposition 7.4.** Finite limits of sheaves on a site are computed as the corresponding pointwise finite limits of presheaves.

*Proof for products and equalizers.* Given sheaves F and G, define their pointwise product by (F times G)(c)=F(c) times G(c). A matching family of pairs is the same as one matching family for F and one for G. Each glues uniquely, so the product presheaf is a sheaf. For maps f,g:F to G, define the pointwise equalizer E(c) as the sections s in F(c) with f_c(s)=g_c(s). Compatible sections of E glue uniquely in F. Their glued section lies in E because f and g agree on each cover member and G is separated. Thus E is a sheaf. A terminal sheaf is pointwise singleton. Every finite limit can be assembled from products and equalizers, proving the claim. ∎

Small colimits behave differently. A pointwise coproduct of presheaves may fail to glue sections whose chosen summand varies locally. Form the presheaf colimit, then apply sheafification to obtain the colimit in Sh(C,J). This follows from the left-adjoint universal property of sheafification: maps from the sheafified presheaf colimit to a sheaf are maps from the presheaf colimit to that sheaf, equivalent to compatible maps from the diagram. General existence and left exactness of sheafification are the imported site theorem named in Chapter 6.

**Worked example 7.5 (A coproduct that changes after sheafification).** On a disconnected space X=U disjoint union V, take two copies of the terminal sheaf. The pointwise presheaf coproduct offers only two global choices over X, one from each summand. But a section of the sheaf coproduct may choose the first summand on U and the second on V, because that choice is locally constant. Thus the pointwise coproduct presheaf fails the sheaf gluing test. Sheafification adds the locally varying choices. Products need no such repair, exactly as Proposition 7.4 shows.

## Subobject classifiers

**Definition 7.6.** A subobject classifier in a category with terminal object is an object Omega with a map true:1 to Omega such that every monomorphism m:A to X is a pullback of true along a unique characteristic map chi_m:X to Omega. In Set, Omega={false,true}; chi_m is the ordinary membership function of a subset.

**Theorem 7.7 (Classifier in a presheaf category).** For a small C, the presheaf Omega assigning to c the set of sieves on c is a subobject classifier of Set to the C opposite power.

*Proof.* For an arrow f:d to c, restrict a sieve S on c to f-star S on d; the sieve axioms make this functorial. The truth map selects the maximal sieve at every c. Given a subpresheaf A included in X, define chi_c(x) as the sieve of arrows f:d to c for which X(f)(x) lies in A(d). Closure under precomposition follows from functoriality of X and A. Naturality of chi follows because restricting this sieve along g is exactly the sieve computed from X(g)(x). An element x has maximal truth value precisely when identity_c lies in chi_c(x), equivalently x lies in A(c); hence the square with true is a pointwise pullback. If another characteristic map classified A, pulling it back along each representable arrow forces the same membership sieve, so it equals chi. ∎

For a sheaf topos on a site, the classifier consists of covering-closed, or J-closed, sieves, with the corresponding truth map. The general construction uses sheafification/local closure and is a standard theorem; the presheaf proof above shows the mechanism but does not prove every closure step for arbitrary J. On Open(X), the classifier has a simpler description: Omega(U) is the set of open subsets of U, restricted by intersection.

**Worked example 7.8 (Open truth values).** Let X be the real line and let U be an open interval. A section of Omega over U is an open V subset U. Its restriction to a smaller W is V intersect W. The global truth section over U is U itself. Given a subsheaf A of a sheaf F, a local section s over U has truth value the union of all opens W subset U where s restricted to W belongs to A(W). This union is open. The sheaf property of A makes the restricted section belong to A over that union, and membership is stable under further restriction. In Set, truth has just two values; in sheaves, a proposition may hold on a proper open region without holding globally.

## Exponentials and an internal function object

For presheaves F,G, define an exponential G to the F power by (G^F)(c)=Nat(C(-,c) times F,G). An arrow d to c restricts a transformation by precomposing along C(-,d) to C(-,c). The evaluation map at c sends a pair of a natural transformation and a section x in F(c) to the value of that transformation at the identity of c and x. The ordinary Yoneda lemma shows this construction represents maps H times F to G for every presheaf H.

**Proposition 7.9.** The displayed object is an exponential in the presheaf category.

*Proof.* A map H times F to G assigns, to each h in H(c), a natural transformation C(-,c) times F to G by restricting h along each arrow into c and applying the original map. This is natural in c, so it gives H to G^F. Conversely, given H to G^F, evaluate each component at the identity of c and a section of F(c) to obtain H(c) times F(c) to G(c). Naturality of the transformations makes these component maps a presheaf morphism. Applying the two constructions successively recovers the original map by Yoneda and identity evaluation. ∎

Sheaf topoi also have exponentials; the presheaf exponential is sheafified or constructed by a sheaf-compatible local mapping rule under the general left-exact sheafification theorem. We identify this as part of the standard theorem that a Grothendieck topos is elementary. The formula in presheaves supplies a fully checked concrete case.

## Slices and geometric morphisms

**Worked example 7.10 (Families over a set).** An object of Set/X is a function p:E to X. Its fibers E_x form an X-indexed family of sets. Conversely, the disjoint union of a family, labeled by x, maps to X. These operations are inverse up to canonical isomorphism on objects and arrows, so Set/X is equivalent to the product category of X-indexed families of sets. Limits and exponentials are computed fiberwise. For X with two elements, this is Set times Set, a Grothendieck topos presented by a discrete two-object site. The example makes a slice topos tangible without any sheaf machinery.

**Definition 7.11.** A geometric morphism f:F to E is an adjunction f-star:E to F left adjoint to f-subscript-star:F to E whose left adjoint preserves finite limits. The inverse image is f-star and the direct image is f-subscript-star. The direction of the displayed geometric morphism follows its inverse-image functor contravariantly, analogous to inverse image of sheaves under a continuous map.

For a continuous map of spaces X to Y, the direct image sends a sheaf on X to the sheaf U maps to sections over the inverse image of U. Its left adjoint is inverse image with sheafification. This adjunction and finite-limit preservation are standard and can be proved from the site construction, but we use them as an identified import here. An arbitrary adjunction between topoi is not a geometric morphism unless the left adjoint is left exact.

## Internal logic and cohomology boundaries

A subobject classifier interprets predicates, while pullbacks interpret substitution. Finite limits supply conjunction and existential structures after image factorization; exponentials allow higher-order function types. The internal logic of a general Grothendieck topos is intuitionistic. It is Boolean precisely when the relevant complement or excluded-middle condition holds, not merely because its external hom-sets are ordinary sets. Chapter 8 develops these claims through explicit subobject calculations.

Abelian group objects in a Grothendieck topos form an abelian category with enough injectives under standard topos hypotheses. The global-sections functor Gamma(A)=Hom(1,A) is left exact; its right-derived functors define topos cohomology. The general enough-injectives and derived identification theorems are imported from sheaf cohomology and homological algebra. For a topological sheaf topos, this recovers sheaf cohomology. A Čech complex for one cover computes the derived groups only under an acyclicity or comparison hypothesis; a matrix calculation alone cannot establish that identification.

The earlier retained reading computes a circle Čech complex with two arcs and obtains a free rank-one cokernel. That finite chain computation remains valid in its original source. Here we keep the comparison boundary explicit: to infer the sheaf-cohomology group from the cover complex, one must verify the cover is acyclic for the coefficient sheaf or invoke the appropriate comparison theorem. We do not present the finite matrix as a proof of an unrestricted derived-cohomology statement.

## Exercises

### Exercise 7.1 {#topos-theory-ex-set}

Show that Set is a Grothendieck topos and identify its truth-value object.
<details><summary>Hint 1</summary>Use the one-object terminal site with coarse topology.</details>
<details><summary>Hint 2</summary>Classify a subset by its membership function.</details>
<details><summary>Solution</summary>A presheaf on the terminal category is just a set, and the coarse topology makes every presheaf a sheaf, so Set is a Grothendieck topos. Its subobject classifier is {false,true}; the characteristic function sends each element to true exactly when it belongs to the given subset.</details>

### Exercise 7.2 {#topos-theory-ex-product}

Prove that the pointwise product of two sheaves remains a sheaf.
<details><summary>Hint 1</summary>A compatible family of pairs gives one compatible family in each coordinate.</details>
<details><summary>Hint 2</summary>Glue each coordinate separately and pair the results.</details>
<details><summary>Solution</summary>For a cover, project a compatible family of pairs to compatible F- and G-families. The sheaf axioms give unique global sections in each coordinate. Their pair restricts to every local pair, and uniqueness follows coordinatewise. Hence the pointwise product satisfies gluing.</details>

### Exercise 7.3 {#topos-theory-ex-equalizer}

Show that a pointwise equalizer of two maps of sheaves is a sheaf.
<details><summary>Hint 1</summary>Glue compatible local equalizer sections inside the source sheaf.</details>
<details><summary>Hint 2</summary>Use separatedness of the target to show the glued section still equalizes.</details>
<details><summary>Solution</summary>The source sheaf glues the family to a unique section s. The two images of s have equal restrictions on every cover member because the local sections equalize. Separatedness of the target makes those images equal globally. Thus s lies in the pointwise equalizer and is its unique amalgamation.</details>

### Exercise 7.4 {#topos-theory-ex-sieve-classifier}

Verify that the characteristic sieve of a subpresheaf is closed under precomposition.
<details><summary>Hint 1</summary>If f:d to c qualifies, the restricted section lies in A(d).</details>
<details><summary>Hint 2</summary>Restrict once more along g:e to d.</details>
<details><summary>Solution</summary>If X(f)(x) belongs to A(d), then A being a subpresheaf makes its restriction along g belong to A(e). That restriction is X(fg)(x), so fg also belongs to the characteristic sieve. Hence it is closed under precomposition.</details>

### Exercise 7.5 {#topos-theory-ex-open-classifier}

For sheaves on a space, show that the restriction of a truth value V open in U to W subset U is V intersect W.
<details><summary>Hint 1</summary>A truth value records where a local property holds.</details>
<details><summary>Hint 2</summary>Inside W, only points belonging to both V and W remain.</details>
<details><summary>Solution</summary>The open region where the property holds after restriction to W is exactly V intersect W. It is open in W, and repeated restriction is associative because intersection is associative. This defines the presheaf structure of the open-set classifier.</details>

### Exercise 7.6 {#topos-theory-ex-coproduct}

Explain why a pointwise presheaf coproduct of two terminal sheaves fails gluing on a disconnected space.
<details><summary>Hint 1</summary>Choose different summands on the two components.</details>
<details><summary>Hint 2</summary>The overlap is empty, so the local choices are compatible.</details>
<details><summary>Solution</summary>On disjoint nonempty opens U,V, choose the first summand on U and the second on V. They agree vacuously on the empty overlap. A pointwise global coproduct section must choose one summand for all of U union V, so it cannot restrict to both local choices. Sheafification adds the locally varying section.</details>

### Exercise 7.7 {#topos-theory-ex-slice}

Construct the equivalence between Set/X and X-indexed families.
<details><summary>Hint 1</summary>Take fibers of E to X.</details>
<details><summary>Hint 2</summary>Reassemble a family by disjoint union with its index projection.</details>
<details><summary>Solution</summary>A map E to X yields fibers E_x and a commuting map over X yields maps on each fiber. A family gives its disjoint union with projection to X. Taking fibers of that union recovers each family member, and the canonical map from the union of fibers of E to E is a bijection over X. These natural isomorphisms give an equivalence.</details>

### Exercise 7.8 {#topos-theory-ex-exponential}

In a presheaf category, explain why a section of G^F at c is a natural map C(-,c) times F to G.
<details><summary>Hint 1</summary>Use the displayed definition of the exponential component.</details>
<details><summary>Hint 2</summary>Check that restricting along d to c precomposes the representable factor.</details>
<details><summary>Solution</summary>By definition (G^F)(c)=Nat(C(-,c) times F,G). For an arrow d to c, precomposition with C(-,d) to C(-,c) turns such a transformation into one indexed at d. Functoriality of representable precomposition gives the presheaf restriction laws.</details>

### Exercise 7.9 {#topos-theory-ex-geometric}

State the extra condition that makes an adjunction between topoi a geometric morphism.
<details><summary>Hint 1</summary>The left adjoint is the inverse-image functor.</details>
<details><summary>Hint 2</summary>It must preserve a particular class of limits.</details>
<details><summary>Solution</summary>The left adjoint f-star must preserve finite limits, including terminal objects and pullbacks. An arbitrary adjunction may fail this left-exactness condition, so it is not automatically a geometric morphism.</details>

### Exercise 7.10 {#topos-theory-ex-cech-boundary}

Why does a Čech differential matrix alone not prove a derived sheaf-cohomology group?
<details><summary>Hint 1</summary>The matrix computes cohomology of one cover complex.</details>
<details><summary>Hint 2</summary>Derived cohomology is defined from an injective resolution or an equivalent construction.</details>
<details><summary>Solution</summary>The matrix gives the kernel and cokernel of the chosen Čech complex. Identifying that with right-derived global-section cohomology requires an acyclic cover or a comparison theorem with stated hypotheses. Without that bridge, the computation concerns only the cover complex, even if its numerical result happens to match the derived group.</details>

## Sources

Original primary exposition adapting subject order and selected examples from the retained Euler Morphisms First topos chapter, which remains live with its five original solutions and code illustration. Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, supplies the named Giraud and site-theory import boundary. General sheafification exactness, geometric inverse image and enough-injectives theorems are identified as imports; explicit presheaf classifier and finite-limit proofs are supplied here.

## Summary

Grothendieck topoi are sheaf categories on small sites; elementary topoi require finite limits, exponentials and a classifier. Finite limits of sheaves are pointwise, while colimits usually require sheafification. Sieves classify subpresheaves, and open subsets provide local truth values for topological sheaves. Slices and geometric morphisms organize relative and change-of-space viewpoints. Cohomology additionally needs derived-functor machinery and a valid comparison before a cover calculation can be promoted to a sheaf theorem. The next chapter develops the internal logic behind these structures.
`;export{e as default};