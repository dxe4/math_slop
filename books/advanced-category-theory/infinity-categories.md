
# Infinity-Categories

The term infinity-category is often used as shorthand for an (infinity, one)-category: objects and arrows may have homotopies between arrows, homotopies between those homotopies, and so on, while every cell above level one is invertible up to higher coherence. A quasicategory is one rigorous model. Its inner-horn fillers supply compositions without selecting a unique strict composite, and its mapping spaces retain information lost by the homotopy category. This chapter works from the quasicategory definition, proves elementary nerve and universal-property consequences, and marks the deeper comparison and higher-topos theorems as imports.

Read [Higher Categories](higher-categories.md), [Model Categories](model-categories.md), and [Bicategories](bicategories.md). We use simplicial sets only at the level of their faces, degeneracies and horn inclusions; the full Joyal model structure is a named import. Size is fixed by a universe: “small diagram” means its indexing simplicial set lies in the selected universe, and any functor quasicategory invoked is formed in a sufficiently larger universe.

## Composition without a chosen strict law

**Definition 11.1.** A quasicategory C is a simplicial set for which every inner horn Lambda^n_k to C, with n≥2 and 0<k<n, extends to Delta^n. A one-simplex is an edge or morphism. Given f:x to y and g:y to z, an inner two-horn consists of those edges; a filler supplies an edge h:x to z and a two-simplex witnessing h as a composite. The axiom promises at least one filler, not a unique h. Three-dimensional inner horns supply compatibility among different choices.

When C=N(D) is the ordinary nerve of a category D, every inner horn has a unique filler determined by strict composition. Thus ordinary categories embed into the quasicategorical setting. Their noninvertible edges remain noninvertible, as the arrow category example in Chapter 10 shows. A Kan complex, by contrast, fills all horns and behaves as an infinity-groupoid in which every edge is an equivalence.

**Proposition 11.2 (A strict case).** The homotopy category of N(D) is canonically D.

*Proof.* N(D) has the objects and arrows of D as its zero- and one-simplices. A two-simplex encodes an actual composition equation. A homotopy of parallel edges relative to endpoints in an ordinary nerve forces them to be the same arrow, because the relevant two-simplex with a degenerate edge encodes equality with an identity composite. Thus no distinct arrows are identified when forming homotopy classes. Composition of classes is the original strict composition, giving a category canonically isomorphic to D. ∎

This proposition is not true with D replaced by a relative category and its weak equivalences silently inverted. The ordinary nerve still has homotopy category D. The homotopy coherent nerve of a suitable simplicial localization is the different construction that inverts those weak equivalences while preserving derived mapping spaces.

## Mapping spaces and equivalences

For vertices x,y in a quasicategory, a mapping space Map_C(x,y) is a Kan complex whose vertices correspond to edges x to y and whose higher simplices encode homotopies among those edges. Several equivalent constructions exist, using a right mapping space, a left mapping space, or a suitable fiber of the arrow construction. Their equivalence and Kan property are standard quasicategory theorems; we import them with the quasicategory hypothesis. The hom-set of hC is the set of path components of Map_C(x,y).

**Definition 11.3.** An edge f:x to y is an equivalence if its image in hC is an isomorphism. Equivalently, there are edges serving as left and right homotopy inverses with two-simplices witnessing the identity composites; equivalence of these formulations is a standard quasicategory fact. Unlike a strict inverse, the witnessing edge and simplices need not be uniquely specified. In an ordinary nerve, this reduces to ordinary isomorphism.

**Worked example 11.4 (Two spaces with one ordinary shadow).** A Kan model of the two-sphere is an infinity-groupoid. Its homotopy category is its fundamental groupoid, equivalent to the terminal category because the sphere is path connected and simply connected. The point has the same homotopy-category shadow. Their higher mapping data differ: the sphere has nontrivial second homotopy group, while the point does not. The standard homotopy-group computation is imported from algebraic topology, but the categorical lesson follows directly: path components of mapping spaces and the fundamental groupoid do not retain every higher homotopy. An equivalence of homotopy categories therefore does not establish an equivalence of infinity-categories.

**Proposition 11.5 (Two-out-of-three for equivalences).** If f and g are composable edges in C and two of f,g and one chosen composite are equivalences, then the third is an equivalence.

*Proof.* Their images in hC are composable arrows, and the image of a chosen composite is their composite in hC. Isomorphisms in any ordinary category satisfy two-out-of-three: if f and gf are invertible, g=(gf)f inverse is invertible, and similarly for the other cases. Since an edge is an equivalence exactly when its image in hC is an isomorphism, the result follows. It does not depend on selecting one strict composite edge for every pair. ∎

## Limits as terminal cones

Let K be a small simplicial set and p:K to C a diagram. A cone is an extension from the right join K joined with Delta^0 to C. Cones and coherent maps among them form a quasicategory C_{/p}. A limit of p is a terminal object in that cone quasicategory. Dually a colimit is an initial object in the quasicategory of cocones. This definition strengthens an ordinary universal property: it controls mapping spaces of cones, not only bijections of hom-sets.

**Definition 11.6.** An object t in a quasicategory D is terminal when, for every d, Map_D(d,t) is contractible. Contractible means nonempty and equivalent to a point as a space. Its path components set has one element, but that weaker statement is not enough: a mapping space with one component and a nontrivial loop is not contractible.

**Proposition 11.7 (Uniqueness of limits).** If two cones are terminal in C_{/p}, they are equivalent, and the space of equivalences between them compatible with the diagram is contractible.

*Proof at the universal-property level.* Terminality says the mapping space from either cone to the other is contractible. It supplies comparison edges in both directions and contractible spaces of homotopies from their composites to the respective identities. These edges are equivalences. The same terminal mapping-space condition makes every coherent choice of comparison equivalent through a contractible space, giving the stated uniqueness. The standard mapping-space calculus of quasicategories supplies the precise assembly of these homotopies; we use it as part of the terminal-object definition, not as an ordinary one-arrow uniqueness claim. ∎

For an ordinary category D, the nerve of a product or pullback in D is the corresponding quasicategorical limit of a diagram in N(D), because the relevant mapping spaces are discrete and the ordinary universal bijection makes them singleton in the cone category. More generally, homotopy pullbacks in a category of spaces differ from strict point-set pullbacks unless a fibrancy condition makes the strict construction homotopy invariant.

**Worked example 11.8 (A homotopy pullback).** Take the two maps from a point to the circle selecting a basepoint. Their strict pullback in spaces is a point. A homotopy pullback remembers a path in the circle from the first selected point to the second, so it is the based loop space of the circle. Its path components are indexed by the winding number. Thus it cannot be equivalent to a point. One model replaces one point map by a path-space fibration before pulling back. The example shows why a derived limit is an infinity-categorical limit, while a naive strict pullback can discard homotopy data. The standard identification of loop components with integers is supplied by the fundamental-group computation for the circle.

## Adjoint functors at the mapping-space level

For functors of quasicategories F:C to D and G:D to C, an adjunction requires natural equivalences of mapping spaces Map_D(Fc,d) equivalent to Map_C(c,Gd), coherently in c and d. Passing to path components yields an ordinary adjunction hF left adjoint to hG, but the converse need not lift: hom-set bijections may fail to respect the higher homotopies within mapping spaces. This is another reason homotopy categories are insufficient for constructing higher adjoints.

**Proposition 11.9 (A nerve adjunction).** An ordinary adjunction F:D to E left adjoint to G induces an adjunction between N(D) and N(E).

*Proof.* The ordinary natural hom-set bijections become equivalences of discrete mapping spaces in the nerves. Their naturality gives the required coherence because higher simplices in ordinary nerves are determined by composition of their one-simplices. The unit and counit triangles are the original strict natural-transformation equations. ∎

The proposition supplies an exact fully proved case; a general higher adjoint-functor theorem needs accessibility, completeness and solution-set hypotheses in a higher setting and is imported when invoked. We do not infer it merely from the ordinary theorem for hC.

## Stable infinity-categories

**Definition 11.10.** A stable infinity-category C has a zero object, finite limits and colimits, and a square is a pushout if and only if it is a pullback. The cofiber of f:x to y is the pushout of x to y against x to zero. The fiber is the dual pullback. The condition makes cofiber and fiber sequences determine each other, supporting suspension and loop operations.

**Worked example 11.11 (A mapping cone).** In chain complexes, a map f:A to B has cone Cone(f) with underlying graded object B direct sum A shifted, and differential with the usual signed off-diagonal f term. The inclusion B to Cone(f) and projection Cone(f) to shifted A form a chain-level cofiber pattern. For a quasi-isomorphism f, the long exact homology sequence shows Cone(f) is acyclic. In the derived localization, an acyclic complex is equivalent to zero, so the cofiber of an equivalence is zero. Conversely, if the cone is acyclic, the long exact sequence shows f is a quasi-isomorphism. This is a concrete stable calculation. Establishing the full stable infinity-category of unbounded complexes and identifying its cofiber with the cone requires the imported enhancement theorem, whose bounded chain consequences are proved in Homological Algebra.

**Imported theorem 11.12 (Stable triangulation).** The homotopy category of a stable infinity-category is canonically triangulated, with distinguished triangles coming from cofiber sequences. The proof of rotation and octahedral coherence is imported from Lurie, *Higher Algebra*, Theorem 1.1.2.14. The mapping-cone calculation alone proves a selected case, not every triangulated axiom for an arbitrary stable infinity-category.

An exact functor of stable infinity-categories preserves finite limits and colimits; because pushouts are pullbacks, preserving one of these finite classes under suitable hypotheses controls the other. An ordinary additive functor between homotopy categories may preserve triangles without lifting to a higher exact functor. The distinction is again at the level of coherent mapping data.

## Higher topoi and the boundary of this chapter

Sheaves of spaces on a site replace set-valued matching families by homotopy-coherent descent data. A higher topos can be characterized as an accessible left-exact localization of a presheaf infinity-category of spaces under standard universe and presentability hypotheses. The general higher Giraud and descent theorems are imported from Lurie, *Higher Topos Theory*. Ordinary sheaf gluing from Chapter 6 is a useful shadow but does not prove hyperdescent or all higher coherence conditions.

**Imported theorem 11.13 (Higher site presentation).** Under the specified small-site and accessibility hypotheses, the infinity-category of space-valued sheaves is an infinity-topos, and appropriate higher topoi admit site presentations. We do not assert that an arbitrary full subcategory of space-valued presheaves is a higher topos; left exactness and accessibility are essential. Nor do we identify ordinary sheafification with higher localization without checking the model.

The chapter's proved claims concern ordinary nerves, two-out-of-three, concrete cone and pullback examples, and universal-property consequences. Mapping-space construction, general stable triangulation, model comparisons and higher topos recognition are explicit imports. This division leaves a useful working calculus without claiming a full research monograph in one chapter.

## A finite ordinary limit inside a higher setting

Let D be the category of sets, and let A to C from B be a cospan of sets with maps f:A to C and g:B to C. Its ordinary pullback P consists of pairs (a,b) satisfying f(a)=g(b). In the nerve N(D), a cone from a set T to the cospan is exactly a pair of functions T to A and T to B whose composites to C agree. The ordinary pullback universal property gives one function T to P for each such cone. Mapping spaces in an ordinary nerve are discrete, so “one function” also means the relevant cone mapping space is contractible. Thus P is a limit in the quasicategory N(D).

The comparison with the circle example is instructive. There, the source and target are spaces considered up to homotopy, and a homotopy pullback must retain a *path* witnessing compatibility of the two images, not merely strict equality of points. Taking a nerve of the ordinary category of spaces and taking a localization of spaces at weak equivalences are different operations. The former has the strict point-set pullback as a limit; the latter has the homotopy pullback. The definition of a limit is formally similar in both settings, but the mapping spaces and equivalences in the ambient higher category determine which object satisfies it.

## Exercises

### Exercise 11.1 {#infinity-categories-ex-inner-horn}

State what an inner two-horn and one filler record.
<details><summary>Hint 1</summary>The horn contains two composable edges.</details>
<details><summary>Hint 2</summary>The filler adds an edge and a two-simplex.</details>
<details><summary>Solution</summary>The horn records f:x to y and g:y to z. A filler adds h:x to z and a two-simplex witnessing h as a composite of f and g. The horn axiom gives existence, not uniqueness of h or of the witness.</details>

### Exercise 11.2 {#infinity-categories-ex-ordinary-nerve}

Explain why hN(D) is D for an ordinary category D.
<details><summary>Hint 1</summary>Edges are exactly arrows of D.</details>
<details><summary>Hint 2</summary>Homotopies in the nerve with a degenerate side encode equality of arrows.</details>
<details><summary>Solution</summary>The nerve has the same objects and arrows as D. Its two-simplices encode strict composition, and a relative-endpoint homotopy between parallel arrows forces their equality in D. Hence forming homotopy classes identifies no distinct arrows and recovers the original composition.</details>

### Exercise 11.3 {#infinity-categories-ex-two-out-of-three}

Prove two-out-of-three for quasicategorical equivalences using hC.
<details><summary>Hint 1</summary>An equivalence becomes an isomorphism in hC.</details>
<details><summary>Hint 2</summary>Apply ordinary two-out-of-three for isomorphisms.</details>
<details><summary>Solution</summary>The images of f,g and a composite form composable arrows in hC. If two are isomorphisms, the third is, by multiplying with an inverse in the ordinary category. The third edge is therefore an equivalence by definition.</details>

### Exercise 11.4 {#infinity-categories-ex-terminal}

Why does a mapping space with one path component but a nontrivial loop fail the terminal-object test?
<details><summary>Hint 1</summary>Terminality requires contractibility of every incoming mapping space.</details>
<details><summary>Hint 2</summary>Contractibility kills all higher homotopy groups.</details>
<details><summary>Solution</summary>One path component only makes pi-zero a singleton. A nontrivial loop gives nontrivial pi-one, so the space is not equivalent to a point and is not contractible. Thus the proposed target fails the higher terminal condition even if the ordinary homotopy category sees a unique arrow.</details>

### Exercise 11.5 {#infinity-categories-ex-limits}

Describe a limit of p:K to C in terms of the cone quasicategory.
<details><summary>Hint 1</summary>Cones are objects of C over p.</details>
<details><summary>Hint 2</summary>Use a terminal-object condition on mapping spaces of cones.</details>
<details><summary>Solution</summary>A limit is a cone terminal in C_{/p}. Every cone has a contractible mapping space of compatible maps to it. This strengthens the ordinary unique-map property by controlling homotopies among comparison maps.</details>

### Exercise 11.6 {#infinity-categories-ex-homotopy-pullback}

Compare the strict and homotopy pullbacks of a point to the circle and another point to the same basepoint.
<details><summary>Hint 1</summary>The strict pullback compares point-set equality.</details>
<details><summary>Hint 2</summary>The homotopy pullback also records a path between the chosen images.</details>
<details><summary>Solution</summary>The strict pullback is a point. The homotopy pullback is modeled by based loops in the circle, with components indexed by winding number. It is therefore not equivalent to a point. Replacing one map by a path-space fibration before pulling back retains the path data.</details>

### Exercise 11.7 {#infinity-categories-ex-nerve-adjunction}

Why does an ordinary adjunction induce a quasicategorical adjunction between nerves?
<details><summary>Hint 1</summary>Mapping spaces of ordinary nerves are discrete hom-sets.</details>
<details><summary>Hint 2</summary>Use the original natural hom-set bijection.</details>
<details><summary>Solution</summary>The adjunction's natural bijection of hom-sets is an equivalence of the corresponding discrete mapping spaces. Naturality and unit–counit identities are already strict in the ordinary categories, so they supply the coherence required for the nerve adjunction.</details>

### Exercise 11.8 {#infinity-categories-ex-cone}

For a chain map f, explain why an acyclic mapping cone implies f is a quasi-isomorphism.
<details><summary>Hint 1</summary>Use the long exact sequence of homology for the cone triangle.</details>
<details><summary>Hint 2</summary>Set every homology group of the cone to zero.</details>
<details><summary>Solution</summary>The long exact sequence places H_n(f) between zero groups from the cone and its shift. Exactness makes H_n(f) both injective and surjective for every n. Hence f induces isomorphisms on all homology groups and is a quasi-isomorphism.</details>

### Exercise 11.9 {#infinity-categories-ex-stable}

State why a zero object and finite limits alone do not define a stable infinity-category.
<details><summary>Hint 1</summary>Finite colimits are also required.</details>
<details><summary>Hint 2</summary>Pushout squares must coincide with pullback squares.</details>
<details><summary>Solution</summary>Stability additionally requires finite colimits and the bicartesian condition that a square is a pushout if and only if it is a pullback. Pointed categories with finite limits can fail either requirement, so the weaker data do not give stable fibers and cofibers.</details>

### Exercise 11.10 {#infinity-categories-ex-higher-topos}

Identify two hypotheses in the higher site-presentation claim that ordinary sheaf gluing does not supply.
<details><summary>Hint 1</summary>Look at the localization of space-valued presheaves.</details>
<details><summary>Hint 2</summary>It must preserve finite limits and satisfy a size condition.</details>
<details><summary>Solution</summary>The localization must be left exact and accessible in the specified universe. Ordinary set-valued gluing alone does not establish either property for a space-valued localization, nor does it prove all homotopy-coherent descent conditions. Those are part of the imported higher-topos theorem.</details>

## Sources

Original exposition and exercises. Lurie, *Higher Topos Theory*, supplies the quasicategory, mapping-space and higher-site framework; Lurie, *Higher Algebra*, Theorem 1.1.2.14, is the named stable-triangulation import. The nerve, two-out-of-three, ordinary-adjunction and concrete cone calculations are proved at their stated scope. No claim of proving the general model-comparison, higher Giraud or hyperdescent theorems is made.

## Summary

Quasicategories encode composition through inner-horn fillers and retain mapping spaces beyond ordinary hom-sets. Equivalences are isomorphisms in the homotopy category, but limits require contractible spaces of comparison maps. Homotopy pullbacks can differ from strict pullbacks, and stable infinity-categories give coherent cofiber calculus whose triangulated shadow is an imported theorem. Higher topoi require accessible left-exact space-valued localization. The final project uses these distinctions to build a proof with an explicit finite calculation and a clear import boundary.
