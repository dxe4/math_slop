
# Measurable Cardinals and Ultrapowers

A complete measure turns almost-everywhere agreement into an elementary embedding of the universe into a transitive inner class. Two technical issues matter immediately: the ultrapower is a class construction, and an arbitrary measure's identity-function seed need not collapse to its cardinal. Resolving them makes normal measures, club concentration and the inaccessible-cardinal reflection argument precise.

Work in ZFC and assume κ is measurable, witnessed by a nonprincipal κ-complete ultrafilter U on κ. Chapter 9 proves κ inaccessible. Every formula-level truth assertion below is a statement for one fixed finite first-order formula. There is no uniform truth predicate for the whole universe. The class notation can be expanded into formulas with the set U as a parameter.

## Quotients of functions and Scott's trick

Use all set functions f with domain κ, with arbitrary set-valued outputs. Put f equivalent to g when {α:f(α)=g(α)} belongs to U. Put the membership relation between their classes when {α:f(α)∈g(α)} belongs to U. Finite-intersection closure makes both relations independent of representatives: on a U-large set the changed functions agree, so the tested equality or membership agrees there as well.

An equivalence class of all such functions need not be a set. A function can be altered on a U-small set by values of arbitrarily high rank without changing its class. To obtain set representatives, take all equivalent functions of the least rank attained in that class. The least rank exists because there is at least one representative and ordinals are well ordered. All functions of that fixed rank form a set-bounded collection, so Separation forms the set of minimal-rank representatives. This is **Scott's trick**.

Equal Scott representatives mean exactly equivalence under U. The resulting domain is a definable class of set codes, and its membership relation is a definable class relation. It is not claimed to be a set quotient of a set containing every function into the universe. Constant functions and every individual image set are ordinary sets, so their codes are legitimate inputs to this class interpretation.

## Łos's theorem, with the witness step proved

**Theorem 10.1.** For every first-order formula φ and function representatives f₁,…,fₙ, the ultrapower satisfies φ at their classes exactly when

$$\{\alpha<\kappa:\varphi(f_1(\alpha),\ldots,f_n(\alpha))\}\in U.$$

*Proof.* Induct on φ. Atomic equality and membership are the quotient definitions. Conjunction uses intersection and upward closure; negation uses the ultrafilter decision law. These Boolean steps require only finite intersections.

For the existential step, if a represented function g supplies an ultrapower witness, the body induction hypothesis makes its truth set U-large. That set is contained in the coordinate existential truth set, so the latter belongs to U. Conversely suppose the coordinate existential truth set E belongs to U. For every α∈E there is a set witness to the fixed body formula. Choose its least possible rank; Replacement collects those uniquely defined ordinals and bounds them by one ordinal. All witnesses can therefore be chosen from one set rank stage. Choice then selects one witness for each α∈E. Give the resulting function an arbitrary default value elsewhere. Its body truth set contains E, hence belongs to U, and induction supplies its ultrapower witness. This proves the existential equivalence. Universal quantifiers and other connectives follow through their classical definitions. ∎

The witness bound prevents a choice from a proper class from being hidden in the phrase choose one witness at every coordinate. The existential formula is fixed, its index set is a subset of κ and the least-rank relation is definable. Collection and Choice are ordinary ZFC set constructions here.

For each x let cₓ be the constant function with value x. The truth set of a formula at constant representatives is either all κ or empty according to its truth at the original parameters. Łos therefore makes x↦[cₓ] elementary. To turn this quotient-class map into an embedding with a transitive target, we must still prove well-foundedness and set-likeness.

## Completeness supplies well-foundedness

**Lemma 10.2.** The ultrapower relation is well founded and set-like.

*Proof of well-foundedness.* If classes [f₀],[f₁],… formed a descending membership chain, each set Eₙ={α:fₙ₊₁(α)∈fₙ(α)} would belong to U. Countable completeness applies because κ is uncountable, so their intersection belongs to U and is nonempty. At one α in that intersection the sets f₀(α),f₁(α),… form an infinite actual membership descent, contrary to Foundation. If a nonempty set of classes had no minimal member, dependent choice available in ZFC would construct such a descending chain within it. Thus the relation is well founded on every set of its codes.

*Proof of set-likeness.* Fix [f]. Any predecessor [g] has g(α)∈f(α) on a U-large set. Modify g outside that set to ∅. The modified function is equivalent to g and has every value in the set A={∅} union the union of all f(α). All such functions form the set of functions κ→A. Replacement maps them to their Scott representatives, giving a set covering every predecessor class. Separating those that actually precede [f] yields its predecessor collection as a set. ∎

The relation is extensional by Łos applied to Extensionality. Its set-like well-founded collapse can now be constructed locally. For any node, repeatedly collect its predecessors and take the union over omega to obtain a set closed under predecessors. The ordinary well-founded collapse on that set is unique; two such local collapses agree on their overlap by recursion uniqueness. They therefore combine into one definable class collapse. Its range N is transitive and the collapsed constant map j:V→N is elementary.

For a fixed formula, satisfaction in the transitive class N means its quantifiers are restricted to that definable class. Łos establishes the corresponding equivalence schema, not a forbidden internal truth predicate for every universe formula at once. Elementarity shows N satisfies each ZFC axiom instance. The ordinal map is strictly increasing, so ordinal induction gives j(α)≥α. Its images are therefore unbounded through the ordinals; transitivity of N puts every ordinal in N. Thus it is an inner class model in the usual sense.

## Locating the critical point

For α<κ, every function κ→α is constant on a U-large fiber. Its fibers form fewer than κ pieces, and the completeness argument from Chapter 9 selects one U-large piece. Consequently every element of j(α) is the image of one β<α. Induction gives j(α)=α for all α<κ.

Let id be the function sending α to α. Its class belongs to j(κ), because each value is below κ. For every β<κ, the tail of κ above β is U-large by uniformity, so j(β)=β lies below the collapsed id class. That class is therefore at least κ, and j(κ)>κ. Thus κ is exactly the critical point, the least ordinal moved by j.

More generally j fixes every set in Vκ. If x has rank below κ, Chapter 9 bounds its cardinality below κ. Any function whose values belong to x on a U-large set is equivalent to one with values always in x, after an arbitrary default choice when x is nonempty. The small-fiber argument makes it constant almost everywhere. Thus j(x) consists exactly of the j-images of x's members. Rank induction fixes those members and then x. The empty case is immediate. In particular Vκ is included in N and N has all actual subsets and bijections of ranks below κ.

The identity class need not be κ itself. An arbitrary complete measure can place its seed higher. Confusing those values would misidentify the derived ultrafilter and could invalidate a claimed extension of the original measure. Normality is precisely the extra property that makes the usual κ seed formula represent the given measure.

## Deriving and normalising a measure

Because κ<j(κ) and N is transitive, the ordinal κ belongs to N. Define

$$W=\{X\subseteq\kappa:\kappa\in j(X)\}.$$

This is a set by Separation, since j is definable from U. Boolean operations and elementarity make W an ultrafilter: the seed belongs to exactly one of j(X) and its complement relative to j(κ), and finite intersections preserve membership. Singletons are omitted because j({α})={α} for α<κ.

If fewer than κ sets Xᵢ belong to W, j fixes their index ordinal and sends their intersection to the corresponding intersection of j(Xᵢ). The seed lies in every factor, hence in the intersection. Thus W is κ-complete and is another measure on κ.

Call a measure **normal** when every regressive function on a measure-one set is constant on a measure-one subset. W is normal. If f:S→κ is regressive and κ∈j(S), then j(f)(κ)<κ in N. Its value is some β<κ, fixed by j. Therefore κ belongs to j of the fiber where f=β, putting that fiber in W. This is an embedding proof of the stationary-fiber principle for this stronger measure filter.

For a normal measure the collapsed identity class is κ. Every class below id is represented, on a measure-one set, by a regressive function, which normality makes constant at some β<κ. Conversely all such β occur below id. The ordinal below id therefore consists exactly of the ordinals below κ and equals κ. For the original nonnormal U, the corresponding recovery formula uses its actual identity seed a: X∈U exactly when a∈j(X). Replacing a by κ gives the normalised measure W, not necessarily U.

## Diagonal closure, clubs and stationary concentration

Normality is equivalent to closure under diagonal intersections of measure-one sets. If Xᵢ belongs to a normal measure for every i<κ and the complement of their diagonal intersection were measure-one, assign each nonzero α in that complement its least failed index i<α. Normality makes this index constant on a measure-one set, contradicting that Xᵢ is measure-one. Thus the diagonal intersection belongs to the measure.

Conversely, assume diagonal closure and let a regressive f have a measure-one domain. If no fiber were measure-one, all fiber complements would belong to the ultrafilter. Their diagonal intersection would be measure-one, and any point there in the domain would avoid its own earlier-indexed fiber, impossible. Removing zero is harmless because singletons are omitted. This proves both formulations.

Every club C⊆κ belongs to W. In N the set j(C) is closed unbounded in j(κ). Below κ it has exactly the same members as C, because j fixes the smaller ordinals and elementarity preserves each membership statement. The actual unbounded C therefore makes κ a limit point of j(C) in N, so closure yields κ∈j(C). Thus C∈W. Every W-positive set is stationary: it intersects each club because both belong to a proper filter.

These conclusions are for the normalised W. A nonnormal pushforward measure can concentrate on successors and omit the club of limits. Completeness and uniformity alone should not be used to claim normal club concentration.

## Inaccessibles below a measurable

Let S be the inaccessible cardinals below κ. We prove S∈W, strengthening the original chapter's unboundedness statement to stationarity.

N sees κ inaccessible. It cannot have a cofinal map into κ of length below κ, since such a map would also exist in V and contradict regularity there. It has the same power sets and cardinal comparisons below κ because Vκ⊆N: all those subsets, their power sets and the witnessing bijections have rank below κ. Thus strong-limit arithmetic below κ agrees, and κ remains an uncountable regular strong limit inside N.

By elementarity j(S) is the set of N-inaccessibles below j(κ). The ordinal κ is one of them, so κ∈j(S) and S∈W. Club concentration makes S stationary in κ, hence unbounded. This proves the Mahlo-type consequence used in Chapter 9. It produces a set of inaccessibles below κ, with no conclusion that inaccessibles occur above every ordinal.

## A tree-property application

Let T be a κ-tree: its height is κ, every earlier level is nonempty, levels have size below κ and each node's predecessors have order type its height. In N the tree j(T) has height j(κ)>κ, so choose a node t at level κ. For each α<κ it has a unique predecessor at level α.

That level is j(Tα). Since |Tα|<κ, an enumeration of it with a fixed smaller ordinal domain shows j(Tα)=j applied pointwise to its members. Therefore the chosen predecessor is j(sₐ) for a unique sₐ∈Tα. The predecessors of t are ordered, so elementarity reflects j(sₐ)<j(T)j(sᵦ) to sₐ<Tsᵦ for α<β. The sₐ form a cofinal branch through T, as a set by Replacement using the definable j and the unique predecessors.

Thus a measurable cardinal has the tree property in addition to inaccessibility. The standard equivalence with a weak-compactness formulation is a further characterization; the direct branch argument above proves exactly the tree statement and its level-size hypotheses. If a level had size κ, pointwise coverage of its j-image could fail and the inverse-predecessor step would no longer follow.

## Worked example 1: a principal ultrapower has no critical point

For a principal ultrafilter at γ<κ, two functions are equivalent exactly when they agree at γ. Evaluating a class at γ identifies the quotient with the original universe and makes the constant embedding the identity. Its membership relation is well founded, but it moves no ordinal.

Nonprincipality was therefore essential to the tail argument locating a moved κ. Completeness alone would not supply a nontrivial elementary embedding. This example also shows why a quotient construction's formal resemblance to the measurable construction is not enough to infer large-cardinal strength.

## Worked example 2: a nonnormal identity seed can be larger

Start with a normal measure W and push it forward along h(α)=α+1: put X∈U when h's inverse image of X belongs to W. The map stays below the limit κ. This U is nonprincipal and κ-complete but concentrates on successor ordinals. On that domain the predecessor function is regressive with singleton fibers, so U is not normal.

In its ultrapower the predecessor class lies below id but above every fixed β<κ, because sufficiently high successors have predecessors above β. Hence that class is at least κ and id is strictly above κ. This gives a concrete reason the κ-seed formula can normalise rather than recover an arbitrary original measure. No calculation of the exact higher seed ordinal is required for that distinction.

## Worked example 3: countable incompleteness permits ill-foundedness

Take a nonprincipal ultrafilter on omega. Let fₙ(k) be the larger of k−n and zero. For every n, the set of k with fₙ₊₁(k)<fₙ(k) is cofinite and belongs to the ultrafilter. Their classes form an infinite descending chain of nonstandard natural-number ordinals in the quotient.

The coordinate intersections needed to realise all these inequalities at one k are empty, so there is no actual infinite descent in the ground naturals. Countable completeness was exactly what ruled out that situation in Lemma 10.2. An arbitrary free ultrafilter therefore cannot be substituted for the measure when a transitive well-founded collapse is claimed.

## Exercises with complete solutions

### 1. A set code for a class {#measurable-cardinals-ultrapowers-ex-1}

Why are minimal-rank representatives collected rather than taking the whole equivalence class?

<details><summary>Hint 1</summary>

Values can change at small coordinate sets without changing the class.

</details>
<details><summary>Hint 2</summary>

Fixing the least rank bounds all selected representatives by one V-stage.

</details>
<details><summary>Solution</summary>

Arbitrary alterations at U-small coordinates can have unbounded ranks, so the full equivalence class may be proper. Every nonempty class has a least attained ordinal rank. Its representatives of that rank lie in one set rank stage and form a set by Separation. Equal minimal-rank codes still mean precisely U-equivalence, giving usable set objects for a class-sized quotient domain.

</details>

### 2. Existential witnesses {#measurable-cardinals-ultrapowers-ex-2}

Where is an unbounded class choice avoided in Łos's existential proof?

<details><summary>Hint 1</summary>

Choose the least rank of a witness at each successful coordinate.

</details>
<details><summary>Hint 2</summary>

Replacement bounds those ranks before Choice selects actual witnesses.

</details>
<details><summary>Solution</summary>

The fixed formula defines a unique least witness rank at each coordinate in its truth set. Replacement collects those ordinals and gives one set stage containing a possible witness for every coordinate. Choice is then applied to nonempty subsets of that stage indexed by a set, producing a set function. No operation chooses directly from an arbitrary proper-class family.

</details>

### 3. The well-foundedness intersection {#measurable-cardinals-ultrapowers-ex-3}

Why does countable completeness refute a descending chain of ultrapower classes?

<details><summary>Hint 1</summary>

Each alleged membership edge holds on a measure-one set of coordinates.

</details>
<details><summary>Hint 2</summary>

One coordinate must satisfy every edge simultaneously.

</details>
<details><summary>Solution</summary>

Intersect the countably many edge truth sets. Completeness and properness make the intersection nonempty. At any selected coordinate the representative values form an infinite actual membership descent, contradicting Foundation. The free-ultrafilter example shows why the countable intersection premise cannot be omitted.

</details>

### 4. Set-likeness {#measurable-cardinals-ultrapowers-ex-4}

How can all predecessors of one class be covered by a set of functions?

<details><summary>Hint 1</summary>

A predecessor value lies in the corresponding coordinate value almost everywhere.

</details>
<details><summary>Hint 2</summary>

Replace the exceptional values by one fixed default.

</details>
<details><summary>Solution</summary>

For predecessor [g] of [f], modify g outside its membership truth set to empty. Its values then lie in the set consisting of empty together with all elements of all f(α). The set of functions from κ to this bound covers representatives for every predecessor. Replacement to Scott codes and Separation give the actual predecessor set.

</details>

### 5. Fixing small ordinals {#measurable-cardinals-ultrapowers-ex-5}

Why is a function from κ into α<κ constant almost everywhere?

<details><summary>Hint 1</summary>

Its fibers form fewer than κ pieces.

</details>
<details><summary>Hint 2</summary>

If no piece were large, their complement intersection would be empty and large.

</details>
<details><summary>Solution</summary>

Completeness and the ultrafilter law force one fiber to belong to U. Thus its class equals that constant representative. Induction over α identifies every member of j(α) with an earlier fixed ordinal and yields j(α)=α. This is the step locating κ as the first possible moved ordinal.

</details>

### 6. Two recovery seeds {#measurable-cardinals-ultrapowers-ex-6}

For a nonnormal U, compare recovery using id's collapsed value a with recovery using κ.

<details><summary>Hint 1</summary>

Membership of id in the image of X directly tests the original coordinate set X.

</details>
<details><summary>Hint 2</summary>

The κ-seed argument proved normality of its derived measure.

</details>
<details><summary>Solution</summary>

The original U is exactly {X:a∈j(X)}, because its membership truth set is {α:α∈X}=X. The formula {X:κ∈j(X)} instead gives the normalised W. When U is normal, a=κ and the two agree. Without normality, the predecessor pushforward example shows a can exceed κ, so the distinction is substantive.

</details>

### 7. Club concentration {#measurable-cardinals-ultrapowers-ex-7}

Why does closure of j(C) imply κ∈j(C) for a club C⊆κ?

<details><summary>Hint 1</summary>

Below κ the j-image has the same members as C.

</details>
<details><summary>Hint 2</summary>

Its unboundedness makes κ an internal limit point below j(κ).

</details>
<details><summary>Solution</summary>

Every smaller ordinal is fixed, so C's cofinal points below κ belong to j(C). N sees those points above each ordinal below κ and hence sees κ as a limit point. Its closed set j(C) contains that limit point because κ<j(κ). Thus C belongs to the κ-seed normal measure. The conclusion is not asserted for every nonnormal measure.

</details>

### 8. Inaccessibility in the target {#measurable-cardinals-ultrapowers-ex-8}

Why is external small cardinality alone insufficient for the strong-limit assertion in N, and what extra fact repairs it?

<details><summary>Hint 1</summary>

An external bijection need not belong to an arbitrary inner model.

</details>
<details><summary>Hint 2</summary>

Here j fixes Vκ, including the needed small subsets and bijections.

</details>
<details><summary>Solution</summary>

An inner model can lack external witnesses to cardinal bounds. In this construction Vκ⊆N. Power sets of ordinals below κ and their bijections with smaller cardinals have rank below κ, so they belong to N as well. This supplies internal strong-limit bounds. Regularity transfers downward because an internal short cofinal sequence would also be an external one. Together they make N see κ inaccessible.

</details>

### 9. Tree level size {#measurable-cardinals-ultrapowers-ex-9}

Why does |Tα|<κ imply every node in j(Tα) is j(s) for some original node s?

<details><summary>Hint 1</summary>

Enumerate the level using an ordinal below κ.

</details>
<details><summary>Hint 2</summary>

j fixes that index domain.

</details>
<details><summary>Solution</summary>

A surjection from λ<κ onto Tα maps under j to a surjection from the same λ onto j(Tα). At each fixed index i its value is j of the original enumerated node. Thus the image level is pointwise covered. If the domain had size κ, j would move it and extra image nodes could appear outside pointwise coverage.

</details>

### 10. The consistency boundary {#measurable-cardinals-ultrapowers-ex-10}

Does constructing j from U prove in ZFC that a measurable cardinal exists?

<details><summary>Hint 1</summary>

U and its completeness are the initial hypotheses.

</details>
<details><summary>Hint 2</summary>

The resulting model and reflection consequences are conditional on them.

</details>
<details><summary>Solution</summary>

No. The construction proves consequences of an already supplied nonprincipal complete measure. In particular it yields inaccessible and stationary reflection strength below κ, reinforcing why the measure is a strong assumption. ZFC has not produced that assumption from its ordinary axioms. The theorem is an implication with a stated large-cardinal premise.

</details>

## Chapter summary

Scott representatives, Łos, countable completeness and set-likeness produce a transitive class ultrapower and an elementary embedding with critical point κ. The identity seed recovers the original measure, while the κ seed normalises it. Normality gives diagonal closure and club concentration, which reflect inaccessibles below κ and support the tree-property argument. Every conclusion remains conditional on the measure hypothesis.

## Sources

This chapter is new exposition in the measurable/ultrapower scope of Jech and Kunen. The class-size convention, witness bound, well-founded collapse, critical-point, normalisation, club and reflection proofs are supplied explicitly. Stronger extender, supercompactness and inner-model constructions require further hypotheses and are not inferred from this one ultrapower. No toolchain or model execution is reported.
