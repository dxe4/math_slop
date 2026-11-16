var e=`---
parent_id: book-advanced-category-theory
chapter_id: higher-categories
title: "Higher Categories"
level: graduate
license: CC BY-SA 4.0
---

# Higher Categories

A homotopy between maps is itself data, and two homotopies may be related by a higher homotopy. A homotopy category keeps only classes of maps and discards those layers. Higher categories organize them without requiring every composition to be strictly associative on chosen representatives. This chapter moves from strict two-categories and bicategories to nerves and simplicial localizations. The next chapter develops the quasicategory model and its limits in greater detail.

Read [Bicategories](bicategories.md) and [Model Categories](model-categories.md), with the derived-category chapters of [Homological Algebra](../morphisms-modules-categories/derived-categories.md). The earlier [Morphisms First higher-category reading](../morphisms-modules-categories/higher-categories.md) remains live under its original identity and exercises. Its broad orientation is adapted here with explicit separation of ordinary nerves from localizations and of definitions from imported model-comparison theorems.

## Levels of arrows

An ordinary category has objects and one-cells. A strict two-category also has two-cells between parallel one-cells; one-cells compose strictly associatively and unitaly, while two-cells compose vertically and horizontally with interchange. Cat is a strict two-category: categories are objects, functors are one-cells, and natural transformations are two-cells. The equality of threefold functor composites is literal, so its associator is identity.

**Worked example 10.1 (A naturality square as a two-cell).** Let F,G:C to D be functors and eta:F to G a natural transformation. At an arrow f:x to y, eta supplies the equation G(f) eta_x=eta_y F(f). In Cat, eta is one two-cell between the one-cells F and G. Given theta:G to H, vertical composition has component theta_x eta_x. If K:D to E is another functor, whiskering eta by K has component K(eta_x). Functoriality of K turns the naturality equation for eta into the naturality equation for K eta. This is a concrete instance of interchange: whiskering a vertical composite equals the vertical composite of whiskerings.

A bicategory weakens strict one-cell composition to coherent isomorphism, as spans and profunctors show. A three-category then permits cells between two-cells; a fully weak infinity-category permits arbitrarily high cells. There is no single elementary set of finite axioms covering all the commonly used weak models. We therefore choose a specific model when making a precise higher claim.

## Simplicial sets and horns

A simplicial set X has sets X_n of n-simplices with face and degeneracy maps satisfying simplicial identities. Its zero-simplices are vertices, one-simplices are directed edges, and two-simplices fill triangular configurations. The standard n-simplex Delta^n is represented by the ordered set of n+1 vertices. The kth horn Lambda^n_k is its union of all faces except face k. An inner horn has 0<k<n; an outer horn has k=0 or k=n.

**Definition 10.2.** A quasicategory is a simplicial set in which every map from every inner horn Lambda^n_k, for n≥2 and 0<k<n, extends to Delta^n. A Kan complex requires fillers for outer horns as well. In dimension two, the inner horn gives two composable edges; its filler gives a third edge and a two-simplex witnessing a composite. The filler need not be unique. This is the first visible difference from an ordinary category.

**Proposition 10.3 (Nerves provide examples).** The ordinary nerve N(C) of a category C is a quasicategory.

*Proof.* An n-simplex of N(C) is an ordered string of n composable arrows, with faces formed by composing adjacent arrows or deleting an endpoint. An inner horn specifies the consecutive arrows and all but one compatible composite face. Their missing composite is determined by ordinary composition. Associativity ensures its compatibility with the other faces for n at least three. Therefore there is a filler; in fact it is unique for an ordinary nerve. ∎

**Worked example 10.4 (A noninvertible edge).** Let C be the category with objects 0 and 1 and one nonidentity arrow u:0 to 1. Its nerve has inner-horn fillers, since C is a category. The outer two-horn that would require an arrow 1 to 0 inverse to u has no filler of the required kind. Thus N(C) is a quasicategory but not a Kan complex. The example demonstrates why inner horn filling is a composition condition and outer horn filling carries invertibility information.

**Proposition 10.5.** The nerve N(C) is Kan if and only if C is a groupoid.

*Proof.* If C is a groupoid, missing outer edges in two-dimensional horns can be solved using inverses, and the higher horn conditions follow from unique composition of strings with those inverses; all horns fill. Conversely, if N(C) is Kan, outer two-horns built from an arbitrary arrow u and an identity require fillers that provide left and right inverse arrows. Associativity in C makes those inverses coincide, so every arrow is invertible. ∎

The higher-dimensional groupoid implication can be checked systematically from nerve strings; the essential algebra is already in the two-dimensional inverse calculation. No model-category theorem is needed for this proposition.

## Localization does not happen in an ordinary nerve

Let (C,W) be a relative category: C is a category and W a distinguished class of arrows intended as weak equivalences. The ordinary nerve N(C) remembers the original arrows but does not force W to become equivalences. Its homotopy category is C itself. Applying it to chain complexes leaves quasi-isomorphisms as generally noninvertible strict chain maps; it does not produce the derived category.

**Worked example 10.6 (A quasi-isomorphism without a strict inverse).** Let P be the two-term free resolution of Z/nZ with differential multiplication by a nonzero n, and let M=Z/nZ concentrated in degree zero. The augmentation p:P to M induces the required homology isomorphisms. If p had a strict chain-map right inverse, its degree-zero component would split the quotient map Z to Z/nZ as a group homomorphism. No such splitting exists for |n|>1: a finite-order element in Z must be zero. Thus p is a quasi-isomorphism but not an isomorphism of complexes and lacks even that strict section. In the derived localization it becomes invertible. The distinction is visible before any higher machinery is introduced.

One can formally invert W in an ordinary category to obtain C[W inverse], but that construction retains only sets of morphisms. Dwyer–Kan simplicial localization produces a simplicial category whose mapping spaces retain homotopy-coherent zigzags and their relations. Taking a suitable homotopy coherent nerve then yields a quasicategory presenting the same localized homotopy theory. The existence and comparison theorem is imported; the example above states why this construction is needed.

**Imported theorem 10.7 (Simplicial localization presentation).** For a suitable relative category or model category with the usual size and fibrancy preparations, Dwyer–Kan localization and a locally Kan simplicial-category replacement yield a quasicategory whose homotopy category is the ordinary localization C[W inverse]. Its mapping spaces model derived mapping data. We use this theorem with the named construction; the ordinary nerve of C is not substituted for it.

## Homotopy categories and retained information

For a quasicategory Q, the homotopy category hQ has the same objects and homotopy classes of one-simplices as morphisms. Two edges with fixed endpoints become identified when an appropriate two-simplex witnesses their homotopy; higher horn fillers make composition of classes well-defined and associative. The proof of full well-definedness is part of the quasicategory construction and is stated as an imported foundational fact where needed. A particular two-simplex is data in Q but no longer visible as a separate arrow in hQ.

For a locally Kan simplicial category S, the hom-sets of its homotopy category are the path components of its mapping spaces. If a mapping space has two components and a nontrivial loop inside one component, the homotopy category remembers the two components but forgets that loop. This loss is not repaired by adding a triangulated structure to hQ; triangles record selected exactness patterns, not every higher homotopy of mapping spaces.

**Proposition 10.8 (Equivalences in an ordinary nerve).** An edge of N(C) becomes an equivalence in the quasicategorical sense exactly when its arrow is an isomorphism in C.

*Proof.* A quasicategorical equivalence gives left- and right-inverse edges with two-simplices witnessing their composites as identities. In the nerve, two-simplices encode literal composition equations, so the corresponding arrows are strict inverses in C. Conversely a strict inverse supplies the required two-simplices from its equations. ∎

This result sharply contrasts N(C) with a simplicial localization: in the latter, the chosen weak equivalences become equivalences even when no strict inverse existed in C.

## Stable structure and triangulated shadows

An infinity-category is stable when it has a zero object, finite limits and colimits, and a square is a pushout precisely when it is a pullback. Fiber and cofiber constructions then correspond through suspension and loop. This is a definition in the chosen higher-categorical setting, not a theorem about every ordinary category with kernels and cokernels.

**Imported theorem 10.9 (Stable homotopy category).** The homotopy category of a stable infinity-category has a canonical triangulated structure whose distinguished triangles come from cofiber sequences. The general octahedral and rotation proofs require higher coherent pushout diagrams and are imported from Lurie, *Higher Algebra*, Theorem 1.1.2.14. We do not claim the octahedral axiom follows from one informal square.

Chain complexes over a ring, localized at quasi-isomorphisms in a suitable dg or model presentation, provide a stable infinity-category whose homotopy category is the derived category. The general enhancement statement requires precise model and size hypotheses and is imported. At the concrete level, the mapping cone of a chain map gives a cofiber sequence and yields the familiar triangle in the derived category. The homological book proves the signed cone calculation at the chain level; the stable theorem explains its higher coherence.

The category of spectra is another stable example, but proving its model construction and stable properties lies beyond this chapter. Ordinary topological spaces form a nonstable homotopy theory: suspension is not invertible there. These examples separate the word “higher” from the stronger word “stable.”

## Comparing models with exact claims

Quasicategories, complete Segal spaces and suitable simplicial categories are different presentations of infinity-categorical homotopy theory. Their comparison is not the claim that the underlying point sets are equal. It is a theorem that appropriate model structures or homotopy theories are equivalent after derived comparison functors. We record this as an import, with the precise model chosen in any application. For the next chapter we work with quasicategories and their inner-horn definition.

**Imported theorem 10.10 (Comparison orientation).** Under the standard model structures and fibrancy conditions, the homotopy coherent nerve relates locally Kan simplicial categories to quasicategories through a Quillen equivalence. Other model comparisons require their own specified adjunctions. The theorem is an imported bridge, not a consequence of the nerve proposition for ordinary categories.

When one sees two different model structures with the same derived category, it is not evidence of genuinely different higher enhancements. A Quillen equivalence can present the same higher category in two computationally different ways. Conversely, an equivalence of homotopy categories alone may lose too much information to establish equivalence of higher categories. Checking mapping spaces or an appropriate universal property is necessary.

## Worked example: a homotopy category that forgets a sphere

View a simplicial model of the two-sphere as a Kan complex, hence as an infinity-groupoid and a quasicategory. Its homotopy category is its fundamental groupoid: objects are points, and arrows are homotopy classes of paths. The sphere is path connected and simply connected, so this groupoid is equivalent to the terminal category. The same is true of a point. Yet the two Kan complexes are not equivalent as spaces: the sphere has nontrivial second homotopy group, while a point has trivial higher homotopy groups. This is a concrete instance in which equivalent homotopy categories do not imply equivalent higher categories.

The example uses the standard computation of the sphere's second homotopy group, not proved in this chapter. Its logical role is narrower: once that topological fact is supplied, the loss occurs because a homotopy category records path classes and discards homotopies between paths. A quasicategory retains the simplices representing those higher relations. The distinction is relevant to derived categories as well: an equivalence of triangulated homotopy categories need not, by itself, identify the derived mapping spaces of their enhancements.

## Why a bicategory is not already an infinity-category

A bicategory permits noninvertible two-cells, such as arbitrary natural transformations between functors in Cat. An infinity-category in the (infinity, one) sense has higher cells invertible up to still higher cells. Cat as a strict two-category therefore is not automatically an (infinity, one)-category with its natural transformations left unchanged. One can discard or localize parts of its two-cell data to obtain a different higher object, but that is a construction requiring a declared notion of equivalence. The wording “all k-morphisms for k at least two are invertible” is itself a homotopy-coherent shorthand: in a weak model the inverse exists up to higher cells, rather than as a literal inverse in a fixed hom-set.

This distinction prevents a tempting but invalid shortcut from Chapter 4. Spans form a bicategory with maps of spans as two-cells. Those maps need not be isomorphisms. Treating the span bicategory as if it already had only invertible higher arrows would erase genuine maps between witnesses. To pass to an (infinity, one)-category of spans, one must choose a suitable construction that retains the intended equivalences and higher coherence.

## Exercises

### Exercise 10.1 {#higher-categories-ex-cat}

Identify the objects, one-cells and two-cells of the strict two-category Cat.
<details><summary>Hint 1</summary>Start with categories and functors.</details>
<details><summary>Hint 2</summary>Natural transformations connect parallel functors.</details>
<details><summary>Solution</summary>Objects are categories, one-cells are functors, and two-cells are natural transformations. Functor composition is strictly associative and unital. Vertical composition is componentwise composition of transformations, and horizontal composition is whiskering and its composite form.</details>

### Exercise 10.2 {#higher-categories-ex-whisker}

Check naturality of K eta when eta:F to G is natural and K is a functor out of their target.
<details><summary>Hint 1</summary>Apply K to the naturality equation for eta.</details>
<details><summary>Hint 2</summary>Use that K preserves composition.</details>
<details><summary>Solution</summary>From G(f)eta_x=eta_yF(f), applying K gives K(G(f))K(eta_x)=K(eta_y)K(F(f)). These are exactly the naturality components for the transformation K eta between KF and KG.</details>

### Exercise 10.3 {#higher-categories-ex-horn}

Describe the missing data in an inner two-horn of a simplicial set.
<details><summary>Hint 1</summary>Two composable edges are present.</details>
<details><summary>Hint 2</summary>A filler adds the remaining edge and a triangle.</details>
<details><summary>Solution</summary>The horn has edges x to y and y to z. A filler adds an edge x to z together with a two-simplex relating it to the pair. The inner-horn condition demands at least one such filler, not a unique composite edge.</details>

### Exercise 10.4 {#higher-categories-ex-nerve}

Why does every inner horn in the nerve of an ordinary category fill?
<details><summary>Hint 1</summary>An n-simplex is a composable string of arrows.</details>
<details><summary>Hint 2</summary>Use strict composition and associativity for omitted composite faces.</details>
<details><summary>Solution</summary>The horn determines the consecutive arrows in the string. Ordinary composition supplies every missing adjacent composite, and associativity guarantees compatibility among longer composite faces. This yields the required n-simplex, uniquely for the ordinary nerve.</details>

### Exercise 10.5 {#higher-categories-ex-groupoid}

Explain why the nerve of a groupoid fills outer two-horns.
<details><summary>Hint 1</summary>An outer horn can ask for an unknown arrow around a triangle.</details>
<details><summary>Hint 2</summary>Solve that arrow using an inverse of a known edge.</details>
<details><summary>Solution</summary>Given the other two sides, compose one with the inverse of a known edge to obtain the missing side. The resulting triangle is a composition equation in the groupoid, so it is a two-simplex of its nerve. Higher horns reduce to coherent strings of such invertible arrows.</details>

### Exercise 10.6 {#higher-categories-ex-resolution}

Show that the augmentation of the two-term free resolution of Z/nZ has no strict chain-map section when |n|>1.
<details><summary>Hint 1</summary>A section in degree zero would split Z to Z/nZ.</details>
<details><summary>Hint 2</summary>Consider the image of an element of finite order in Z.</details>
<details><summary>Solution</summary>A group homomorphism s:Z/nZ to Z must send every element to torsion, but Z has no nonzero torsion, so s is zero. It cannot satisfy the quotient map followed by s equals identity on Z/nZ. Therefore no strict chain-map section of the augmentation exists.</details>

### Exercise 10.7 {#higher-categories-ex-relative}

Why does N(C) fail to localize a declared class W of weak equivalences?
<details><summary>Hint 1</summary>The one-simplices of N(C) are the original arrows.</details>
<details><summary>Hint 2</summary>Use the proposition identifying equivalences in an ordinary nerve.</details>
<details><summary>Solution</summary>An arrow in N(C) is a quasicategorical equivalence exactly when it is already an isomorphism in C. Declaring a nonisomorphism to lie in W does not create an inverse edge or the necessary triangles. A simplicial localization or another higher localization is needed.</details>

### Exercise 10.8 {#higher-categories-ex-pi-zero}

What information about a mapping space survives in a homotopy category?
<details><summary>Hint 1</summary>Hom-sets are path components of mapping spaces.</details>
<details><summary>Hint 2</summary>Loops inside one component are not separate components.</details>
<details><summary>Solution</summary>The homotopy category retains pi-zero of each mapping space, the set of path components. It forgets higher homotopy groups and individual paths inside a component. Two mapping spaces can therefore have identical hom-sets while differing in higher homotopical structure.</details>

### Exercise 10.9 {#higher-categories-ex-stable}

State the extra pushout–pullback condition in the definition of a stable infinity-category.
<details><summary>Hint 1</summary>Finite limits, colimits and a zero object are also required.</details>
<details><summary>Hint 2</summary>Compare the two universal square conditions.</details>
<details><summary>Solution</summary>Every commutative square is a pushout if and only if it is a pullback. Together with a zero object and finite limits and colimits, this gives the stable definition. Ordinary pointedness alone does not imply this equivalence.</details>

### Exercise 10.10 {#higher-categories-ex-model-comparison}

Why is an equivalence of ordinary homotopy categories insufficient to establish equivalence of higher categories?
<details><summary>Hint 1</summary>Ordinary homotopy categories retain only path components of mapping spaces.</details>
<details><summary>Hint 2</summary>Compare possible loops within those components.</details>
<details><summary>Solution</summary>Equivalence of homotopy categories matches objects and pi-zero mapping data. It does not compare higher homotopy groups or composition coherences in mapping spaces. A higher equivalence needs control of those mapping spaces or an established model-comparison theorem, so the ordinary equivalence alone is insufficient.</details>

## Sources

Original primary exposition adapting the orientation and selected examples of the retained Euler Morphisms First higher-category reading, which remains live with its five original solutions. Lurie, *Higher Topos Theory*, supplies quasicategory conventions; Lurie, *Higher Algebra*, Theorem 1.1.2.14, is the named stable-triangulated import. Dwyer–Kan localization and model comparisons are identified imports. The ordinary nerve, groupoid and chain-resolution calculations are proved here.

## Summary

Strict two-categories and bicategories retain two-cell information, while quasicategories use inner-horn fillers to encode coherent composition. Ordinary nerves preserve strict categories but do not invert weak equivalences. Simplicial localization produces derived mapping spaces before taking a coherent nerve. A homotopy category keeps only connected components of those spaces. Stable infinity-categories have triangulated homotopy categories by an imported higher-coherence theorem. The next chapter develops quasicategorical mapping spaces, limits and stability with their precise hypotheses.
`;export{e as default};