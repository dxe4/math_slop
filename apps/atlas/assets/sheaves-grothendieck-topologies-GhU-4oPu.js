var e=`---
parent_id: book-advanced-category-theory
chapter_id: sheaves-grothendieck-topologies
title: "Sheaves and Grothendieck Topologies"
level: graduate
license: CC BY-SA 4.0
---

# Sheaves and Grothendieck Topologies

Local data are useful only when compatible local pieces determine a unique global piece. A presheaf supplies restriction maps; a sheaf adds existence and uniqueness of gluing. The familiar open-cover definition has a categorical reformulation in terms of covering sieves, which allows the same logic on categories whose objects are not open subsets of a space. We prove the open-cover equivalence and concrete gluing claims, then state precisely which general sheafification machinery is imported.

Read [Introduction to Category Theory, Limits and Colimits](../introduction-to-category-theory/limits-colimits.md) for equalizers and [Ends and Coends](ends-and-coends.md) for naturality as compatible families. No sheaf theory is assumed. A topological space X supplies the opening examples; later a small category C with a Grothendieck topology J replaces its poset of opens. Smallness matters when forming the presheaf category Set to the C opposite power.

## Presheaves and open-cover gluing

**Definition 6.1.** A presheaf of sets on X is a contravariant functor F from the category Open(X) of open subsets and inclusions to Set. Thus an inclusion V subset U gives a restriction map from F(U) to F(V), with identity and composition laws. A section over U means an element of F(U). A family s_i in F(U_i) over a cover U=union U_i is compatible if its restrictions to every overlap U_i intersect U_j agree.

**Definition 6.2 (Sheaf).** A presheaf is a sheaf when every compatible family over every open cover has exactly one section s in F(U) restricting to each s_i. Existence is gluing and uniqueness is separatedness. The empty cover of the empty open set forces F(empty) to have exactly one element for a sheaf of sets: a compatible empty family must have a unique amalgamation. This small case is often omitted in informal statements but affects constant-presheaf examples.

**Proposition 6.3 (Equalizer form).** For every cover U=union U_i, F is a sheaf exactly when the map from F(U) to the product of F(U_i) identifies F(U) with the equalizer of the two maps to the product over ordered pairs i,j of F(U_i intersect U_j).

*Proof.* The first map records restrictions to the U_i. The two maps from their product record, for every pair, restriction of s_i and s_j to the overlap. Their equalizer consists precisely of compatible families. The universal map from F(U) lands in the equalizer by functoriality of restriction. It is injective exactly when two global sections with the same restrictions agree, and surjective exactly when every compatible family glues. Together these are precisely the sheaf condition. ∎

**Worked example 6.4 (Continuous functions).** Let F(U) be the set of continuous real-valued functions on U. Restriction is ordinary restriction. Compatible continuous functions f_i on a cover define a function f on U by f(x)=f_i(x) for any i with x in U_i. Compatibility on overlaps makes this independent of i. For any open interval V of real values, the inverse image f inverse(V) is the union of the open sets f_i inverse(V), each open in U_i and hence in U. Thus f is continuous. Its uniqueness is pointwise, because every point lies in some U_i. The same argument works for smooth functions on a manifold, using smoothness as a local property.

**Worked example 6.5 (Constant versus locally constant).** Fix a set A with at least two elements. Assign A to every nonempty open, a singleton to the empty open, identity restrictions between nonempty opens, and the unique restriction into the empty open. This constant presheaf fails on a disconnected open U=U_1 disjoint union U_2: choose different values on the two components. They are compatible because their intersection is empty, but no single constant value on U restricts to both. Define instead L(U) as the set of locally constant functions U to A. Compatible local functions glue pointwise, and local constancy holds near every point in a cover member. Thus L is a sheaf. On a connected open, every locally constant function is constant; on a disconnected open it may choose different values on components. Sheafification changes precisely this kind of local behavior.

## Stalks and local detection

For x in X, the stalk F_x is the colimit of F(U) over neighborhoods U of x, with restrictions to smaller neighborhoods. An element is a germ [U,s] near x. Two representatives define the same germ when they agree after restriction to some smaller neighborhood of x. This is a filtered colimit of sets because two neighborhoods have a common smaller intersection.

**Theorem 6.6 (Stalkwise uniqueness).** If F is a sheaf and two sections s,t in F(U) have equal germs at every x in U, then s=t.

*Proof.* At each x, germ equality gives an open neighborhood V_x inside U on which the restrictions of s and t agree. The V_x cover U. Separatedness for that cover says two sections with equal restrictions are equal. ∎

Equality of germs is a local criterion for equality of sections, but it is not automatically a construction of a global section from arbitrary germs. A family of germs must vary locally as the germs of one section; otherwise no sheaf axiom applies. For continuous real functions, assigning the germ of zero at rational points and one at irrational points cannot be locally represented by any continuous function.

## Covering sieves

A sieve S on c in a category C is a collection of arrows with codomain c closed under precomposition: if f:d to c lies in S and g:e to d is any arrow, then fg lies in S. It is a subfunctor of the representable presheaf C(-,c). A family of arrows into c generates the smallest sieve containing them, consisting of all their composites with arbitrary arrows.

**Definition 6.7 (Grothendieck topology).** A Grothendieck topology J assigns to each c a collection J(c) of covering sieves satisfying three axioms. The maximal sieve C(-,c) covers. If S covers c and f:d to c, its pullback sieve f-star S, consisting of arrows g:e to d for which fg lies in S, covers d. If S covers c and R is a sieve on c whose pullback along every f in S covers its domain, then R covers c. These are maximality, stability and local character. A site is C together with J. We assume C small for the presheaf-category constructions below.

**Proposition 6.8 (Open covers generate a topology).** On Open(X), declare a sieve on U covering when the union of the open subsets V subset U whose inclusions occur in it equals U. This assignment satisfies the Grothendieck axioms.

*Proof.* The maximal sieve contains U itself, so its union is U. If a sieve covers U and W subset U, the members V intersect W form an open cover of W and their inclusions factor through the pullback sieve; hence the pullback covers W. For local character, let S cover U and suppose R pulls back to a cover of each V represented in S. For each point x in U, choose such a V containing x; then choose an R-member inside V containing x from the pullback cover. Thus the union of R-members contains every x and equals U. ∎

In this poset site, the sieve generated by a usual open cover U_i consists of every open V contained in some U_i. A covering sieve may contain many more opens than one chosen cover family, but it carries the same local gluing problem. The use of sieves removes dependence on one presentation of a cover and makes pullback stability an equation of arrows.

## Sheaves on a site

**Definition 6.9.** A presheaf F:C opposite to Set is a J-sheaf if, for every covering sieve S on c, every natural transformation from S to F has a unique extension along S included in C(-,c) to a natural transformation from C(-,c) to F. By Yoneda, the latter natural transformations correspond to elements of F(c). A transformation from S to F is a matching family: it assigns a section over each arrow into c in S, compatible with precomposition.

**Theorem 6.10 (Agreement on an open-set site).** For the Grothendieck topology of Proposition 6.8, a presheaf is a J-sheaf exactly when it satisfies the ordinary open-cover gluing condition.

*Proof.* Suppose F satisfies ordinary gluing. Given a covering sieve S on U and a matching family, take the sections attached to inclusions V subset U in S. These V cover U. Naturality makes them agree on intersections, since V intersect W maps into both V and W and belongs to S by closure under precomposition. Ordinary gluing gives a unique s in F(U). Its restrictions agree with every member of the matching family, so Yoneda supplies the required extension.

Conversely, let U_i cover U and generate sieve S. A compatible family s_i determines a matching family on S: for V contained in some U_i, restrict s_i to V. If V lies in two U_i, compatibility on their overlap makes the value independent of choice. The J-sheaf condition gives a unique s in F(U) restricting to this family, hence to each s_i. This is exactly ordinary gluing. ∎

**Worked example 6.11 (A poset viewed as a site).** Let C have one terminal object c and two arrows a to c, b to c, with a pullback-like common refinement d mapping to both. A covering family {a to c,b to c} asks that sections over a and b agreeing after restriction to d glue over c. In a genuine poset of open sets, d can be the intersection. In an arbitrary site the same pattern is encoded by a sieve and its arrows, without requiring its objects to be literal spatial subsets. A topology that declares only maximal sieves covering imposes no nontrivial gluing, so every presheaf is a sheaf; this is the trivial or coarse Grothendieck topology.

## Sheafification boundary

For a small site, the inclusion of J-sheaves into presheaves has a left adjoint, sheafification. In the topological case one can construct it from locally representable germs: take families of germs that locally arise from a presheaf section, with restriction by domain. Two such families agreeing at every point are equal, and compatible local families glue by union. The unit sends a presheaf section to its family of germs. This gives the intuitive construction but requires care with a presheaf that is not separated: distinct sections may have the same germs, and the unit need not be injective.

**Imported theorem 6.12 (General sheafification).** For a small site (C,J), sheafification exists as a left adjoint to inclusion into Set-valued presheaves; its construction may be given by the plus construction applied twice, subject to standard smallness assumptions. We use the theorem as an imported existence result for arbitrary sites. The elementary open-cover and stalk arguments above do not by themselves prove the general plus-construction theorem.

Sheafification preserves finite limits in the ordinary set-valued Grothendieck setting, another structural theorem needed for topos theory. We state that later with its exact role. It should not be inferred from the mere fact that sheafification is a left adjoint, because left adjoints generally preserve colimits, not limits.

## A finite discrete space makes gluing visible

Let X={p,q} with the discrete topology. Its open sets are empty, {p}, {q}, and X. For any sheaf F of sets, the cover of X by its two singleton opens has empty overlap. Since F(empty) is a singleton, every pair of local sections is compatible. The sheaf condition therefore gives a bijection F(X) to F({p}) times F({q}). In this finite case a sheaf is completely determined, up to canonical isomorphism, by the two sets of possible values at p and q; sections over X are independent choices at the two points. This is the simplest calculation explaining why a constant presheaf with value A fails when A has more than one element: it offers only A global choices where the sheaf condition requires all pairs in A times A.

The same reasoning on a finite discrete set with n points gives a product of n stalk sets. On a nondiscrete space, sections cannot in general be chosen independently at points. Continuity or another local compatibility property constrains which pointwise choices come from a section. This is why sheaves are richer than collections of unrelated stalks: their restriction and gluing data record how nearby values fit together. A stalkwise bijection of morphisms of sheaves is an isomorphism under the usual topological hypotheses, but that is a separate theorem about morphisms and local gluing, not a claim that arbitrary families of stalk elements are global sections.

## A morphism detected on stalks

For sheaves of sets on a topological space, consider a morphism phi:F to G. If every stalk map phi_x:F_x to G_x is injective, then phi_U is injective for every open U. Indeed, if phi_U(s)=phi_U(t), their image germs agree at every point. Injectivity on each stalk gives equal germs of s and t, and Theorem 6.6 gives s=t. This proves one direction of the familiar stalkwise criterion by a local argument already available in the chapter.

Surjectivity is subtler. A section g of G(U) may have a preimage germ at every point, but choices of local lifts need not agree on overlaps. Stalkwise surjectivity does provide local lifts after shrinking neighborhoods, yet global lifting requires a separate gluing or descent condition. In the category of sheaves, an epimorphism is locally surjective, not necessarily surjective on sections over every U. Confusing those two meanings would turn a valid stalkwise statement into a false assertion about global sections.

## Exercises

### Exercise 6.1 {#sheaves-grothendieck-topologies-ex-empty}

Use the empty cover to determine F(empty) for a sheaf of sets.
<details><summary>Hint 1</summary>The empty family has no compatibility conditions.</details>
<details><summary>Hint 2</summary>Count its possible amalgamations in F(empty).</details>
<details><summary>Solution</summary>The empty family is compatible and has exactly one amalgamation by the sheaf axiom. Its amalgamations are precisely elements of F(empty), so F(empty) must be a singleton.</details>

### Exercise 6.2 {#sheaves-grothendieck-topologies-ex-equalizer}

Identify the equalizer condition for a two-member open cover U=V union W.
<details><summary>Hint 1</summary>A pair of sections lies in F(V) times F(W).</details>
<details><summary>Hint 2</summary>Compare their restrictions to V intersect W.</details>
<details><summary>Solution</summary>The equalizer consists of pairs (s_V,s_W) whose restrictions to V intersect W agree. The sheaf condition says restriction from F(U) is a bijection onto this equalizer, giving both uniqueness and existence of gluing.</details>

### Exercise 6.3 {#sheaves-grothendieck-topologies-ex-continuous}

Prove directly that compatible continuous real functions on an open cover glue continuously.
<details><summary>Hint 1</summary>Define the global value using any cover member containing the point.</details>
<details><summary>Hint 2</summary>Continuity can be checked locally on the cover members.</details>
<details><summary>Solution</summary>Compatibility makes the pointwise definition independent of the chosen member. On each U_i the resulting function equals the continuous f_i, so the inverse image of an open real set is the union of the open inverse images inside the U_i. It is open in U, proving continuity. Pointwise coverage gives uniqueness.</details>

### Exercise 6.4 {#sheaves-grothendieck-topologies-ex-constant}

Exhibit a failure of the constant presheaf with two values on a disconnected open set.
<details><summary>Hint 1</summary>Cover the set by two disjoint nonempty opens.</details>
<details><summary>Hint 2</summary>Choose different constants on the two members.</details>
<details><summary>Solution</summary>Take disjoint nonempty U_1,U_2 with union U and choose a in A on U_1, b distinct from a on U_2. Their overlap is empty, so they are compatible. A global constant section on U would restrict to the same value on both, which is impossible. Thus gluing fails.</details>

### Exercise 6.5 {#sheaves-grothendieck-topologies-ex-stalk}

Show that equality of two germs at x means equality on some neighborhood of x.
<details><summary>Hint 1</summary>Use the filtered-colimit equivalence relation.</details>
<details><summary>Hint 2</summary>Intersect the two original domains before comparing restrictions.</details>
<details><summary>Solution</summary>If [U,s]=[V,t] in the stalk, the filtered-colimit relation gives a neighborhood W of x contained in U intersect V where s and t restrict equally. Conversely equality on such W makes the two representatives the same germ.</details>

### Exercise 6.6 {#sheaves-grothendieck-topologies-ex-sieve}

Prove that the arrows generated by a family f_i:c_i to c form a sieve.
<details><summary>Hint 1</summary>A generated arrow is f_i followed after some arrow into c_i.</details>
<details><summary>Hint 2</summary>Precomposing adds one more arrow before f_i.</details>
<details><summary>Solution</summary>Every generated arrow has form f_i g. Precomposing with h gives f_i(gh), again of the same form. Thus the collection is closed under precomposition and is a sieve. It is the smallest such collection containing all f_i because any sieve containing them must contain every f_i g.</details>

### Exercise 6.7 {#sheaves-grothendieck-topologies-ex-pullback}

For an open-cover sieve S on U and W subset U, show that its pullback covers W.
<details><summary>Hint 1</summary>Choose a cover member V containing each point of W.</details>
<details><summary>Hint 2</summary>Intersect V with W and use closure of S under restriction.</details>
<details><summary>Solution</summary>For x in W choose V in S with x in V. Then V intersect W contains x and its inclusion into W lies in the pullback sieve because its composite into U factors through V in S. These intersections cover W, so the pullback sieve covers W.</details>

### Exercise 6.8 {#sheaves-grothendieck-topologies-ex-matching}

Describe a natural transformation from a covering sieve S to a presheaf F as a matching family.
<details><summary>Hint 1</summary>For each arrow f:d to c in S, take the image of f under the transformation.</details>
<details><summary>Hint 2</summary>Naturality compares f with fg for g:e to d.</details>
<details><summary>Solution</summary>The component at d assigns to each f:d to c in S an element s_f in F(d). Naturality says s_{fg}=F(g)(s_f) for every g:e to d. Thus the sections are compatible under every refinement arrow, exactly a matching family.</details>

### Exercise 6.9 {#sheaves-grothendieck-topologies-ex-coarse}

Show that every presheaf is a sheaf for the topology in which only maximal sieves cover.
<details><summary>Hint 1</summary>The sole covering sieve on c is the representable C(-,c).</details>
<details><summary>Hint 2</summary>Extension along the identity inclusion is automatic and unique.</details>
<details><summary>Solution</summary>A matching family is already a natural transformation from C(-,c) to F. Extending it along the identity inclusion of that sieve into the representable changes nothing, so the extension exists uniquely. Hence every presheaf satisfies the sheaf condition.</details>

### Exercise 6.10 {#sheaves-grothendieck-topologies-ex-germs}

Explain why the map from a presheaf's sections to families of germs may fail to be injective.
<details><summary>Hint 1</summary>A presheaf need not be separated.</details>
<details><summary>Hint 2</summary>Distinct global sections can become equal on neighborhoods covering the domain.</details>
<details><summary>Solution</summary>If distinct sections s,t restrict equally on a cover, then at every point some cover neighborhood gives equal restrictions, so their germs agree everywhere. A nonseparated presheaf permits this situation. Sheafification identifies such locally indistinguishable sections; injectivity of the germ map requires separatedness.</details>

## Sources

Original exposition and exercises. The open-cover and sieve equivalence is proved here. Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, and Johnstone, *Sketches of an Elephant*, are scope benchmarks. General sheafification on an arbitrary site and its exactness properties are identified imports with small-site hypotheses.

## Summary

A presheaf gives restrictions; a sheaf uniquely glues compatible local sections. The equalizer formula separates compatibility from gluing. Stalks detect equality locally. Covering sieves encode the same open-cover condition on a general site, and the usual open topology satisfies the Grothendieck axioms. General sheafification is a named deeper construction. The next chapter studies structural properties of the resulting sheaf categories.
`;export{e as default};