
# The Constructible Universe

The constructible hierarchy adds definable subsets instead of every subset. That change produces a canonical inner model with a definable well ordering. A carefully closed elementary hull then bounds when subsets of a cardinal first appear, yielding the generalized continuum hypothesis inside the model. The relative-consistency conclusion is conditional and syntactic: it does not prove the consistency of the starting theory from nothing.

We begin in ZF and prove that L satisfies ZFC. When cardinal calculations and elementary hulls are used for GCH, we work **inside L**, where Choice has already been established. The condensation argument below proves the specifically enriched-hull form needed for that calculation, rather than appealing without proof to the most general formulation of condensation. The distinction lets every closure operation used by the proof remain explicit.

## Definable subsets of a set structure

For a set A, Def(A) is the set of subsets of A definable in the structure (A,∈) by a first-order formula with finitely many parameters from A. Formulas are finite syntactic objects and their satisfaction relation for one set-sized structure is defined by recursion on formulas. This is not a truth predicate for the proper class universe or for L. There is no conflict with Tarski's undefinability theorem.

Def(A) is a set in ZF. For each formula code and finite parameter tuple, Separation forms the subset it defines; Replacement collects the outputs, and taking the union over the set of codes and tuples gives the collection. The same subset can have several definitions. Parameters are allowed, but an arbitrary external subset is not automatically available as a parameter of A. This is the main difference from a full Power Set operation.

Define L₀=∅, L at successor α+1 to be Def(Lₐ), and L at a nonzero limit to be the union of its earlier stages. Transfinite recursion supplies each stage as a set and one uniform definable class relation for the hierarchy. Write x∈L when x belongs to some stage. This abbreviates a first-order formula of the ambient set theory; it does not introduce a set containing all constructible sets.

Induction proves each stage transitive and the stages increasing. If A is transitive, each x∈A is the subset defined over A by membership in parameter x, so A⊆Def(A). Every member of Def(A) is a subset of A, giving transitivity of Def(A) because A⊆Def(A). Limits preserve both properties. The empty base is immediate. A parallel induction gives Lₐ⊆Vₐ, since definable subsets are among all subsets and limits take the same kind of union.

Every ordinal α is constructible and Lₐ contains exactly the ordinals below α. Induct on α. At a successor, the set of ordinals of the previous transitive stage is definable there by the bounded ordinal predicate and is exactly α, so α appears at its next stage. No ordinal at or above α belongs to Lₐ because Lₐ⊆Vₐ and ordinal rank equals the ordinal. Limits use the union definition. Thus L is transitive and contains all ordinals.

## Fixed formulas can be reflected down to a stage

For a fixed formula φ, its relativization φᴸ restricts each quantifier to constructible sets. This is another ordinary formula. For a finite list of formulas, include their subformulas and rewrite quantifiers using existential quantifiers and negation. There are only finitely many existential bodies to consider.

**Lemma 5.1 (Finite reflection in L).** Given finitely many formulas and a starting ordinal, some larger limit δ has Lδ agreeing with L on those formulas for parameters in Lδ.

*Proof.* Starting at a stage α₀ above the chosen bound, construct increasing stages αₙ. For every existential body in the finite list and every suitable finite parameter tuple from L at αₙ, if a constructible witness exists, take its least stage of appearance and include a bound for that stage in the next αₙ₊₁. The witness stage is uniquely specified, so Replacement collects these ordinal bounds without choosing an arbitrary witness. Their supremum is a set ordinal, and a larger stage exists.

Let δ be the supremum of the countably many increasing αₙ. Every finite parameter tuple from Lδ occurs together at one αₙ. If its existential assertion is true in L, the construction ensures a witness already belongs to Lδ. Conversely a witness in Lδ is constructible. Structural induction through the finite subformula list now proves agreement: atomic membership and identity agree by transitivity; Boolean operations preserve agreement; existential truth transfers in both directions by the witness property and the induction hypothesis on its body. ∎

This is reflection for each specified finite collection. It does not define a uniform truth predicate for all formulas of L. The proof uses the separately written relativization of each fixed body. It also shows why merely choosing a large ordinal containing the parameters is insufficient: the stage must contain witnesses for the formulas actually used.

## Every ZF axiom holds in L

Extensionality and Foundation transfer to the transitive class L. If two constructible sets have different members, those members are constructible too, so their difference remains visible internally. For Foundation, apply the ambient axiom to a nonempty constructible set; a minimal member belongs to L and is also internally disjoint from the set.

Empty Set, Pairing and Union follow by definability at a sufficiently high stage. For a,b in one transitive L-stage, the subset defined by x=a or x=b gives their pair in the next stage. The union of a is the subset defined by there exists y∈a with x∈y; transitivity keeps its elements within that stage. Finite ordinals occur in finite stages, and Lω is exactly the hereditary finite sets. The subset of Lω consisting of its ordinals is ω, definable there, so ω belongs to Lω+1 and witnesses Infinity internally.

For Separation, let a and its parameters be constructible and fix the formula. Use Lemma 5.1 to choose a stage containing them and correctly evaluating that formula on its elements. The subset of a selected using satisfaction in that stage is a definable subset of the stage, hence constructible. Reflection makes it exactly the subset specified by the relativized L-formula. This proves every fixed Separation instance.

For Power Set, form in the ambient universe the set B of all constructible subsets of a, by Separation from the actual power set of a. Every member of B has a least constructible stage; Replacement bounds those stages by one ordinal γ. At a larger stage containing a and Lγ, define the subset of Lγ consisting of sets included in a. Inclusion is bounded and absolute for these transitive structures. This definable subset is exactly B and is constructible. Thus L has the set of all subsets of a that belong to L, its internal power set. It need not contain external subsets of a.

For Replacement, suppose a fixed formula defines a unique constructible output for every member of constructible a, as evaluated in L. Its relativization is an ambient formula, so ambient Replacement collects the range B as a set. Bound the least constructible stages of B by γ. Choose a reflecting stage δ containing a, the parameters and Lγ, and correct for the formula and its required subformulas. The subset of Lγ consisting of outputs related there to some x∈a is definable over Lδ, hence constructible. Reflection and the bound make it exactly B. This proves that fixed Replacement instance in L.

These arguments are schema by schema. They prove, in ZF, the relativization to L of each ZF axiom. They do not replace the infinitely many schemas with an unmentioned single set-coded satisfaction statement. All class language can be expanded into the defining formula for constructibility and the relevant fixed relativizations.

## A canonical well ordering and Choice

Order constructible sets first by their earliest stage of appearance. Within a new successor layer, a set has definitions by a formula code and a finite tuple from the preceding layer. Once that earlier layer is well ordered, order such representations by tuple length, then formula code, then lexicographically by their fixed-length parameter tuples. This is a well order: the first two coordinates are natural numbers in a fixed order, and a finite lexicographic product of a well order is well ordered.

Assign each new set its least representation and use that order within the new layer. Retain the earlier order as an initial segment. At limits take the union of the coherent earlier orders. Transfinite recursion makes the construction unique at every bounded stage and hence uniformly definable as a class order. Every set has an earliest appearance, so the order compares all constructible sets. Each initial segment is contained in a set-sized L-layer, and every nonempty constructible collection has a least element in its first occupied layer.

The construction is absolute when performed inside L: the hierarchy stages and the truth of a formula in a fixed set structure agree with the external construction, by induction on stage and formula. We already proved L satisfies ZF, so its own Separation and Replacement can restrict the canonical order to any internal set. The restriction is an internal well order. Choosing its least element in each nonempty member of an internal family then gives an internal choice function by Replacement. Therefore L satisfies AC and hence ZFC.

The same absoluteness proves that L's internally computed constructible hierarchy is the hierarchy already built: its stages use identical underlying sets, formulas, finite tuples and truth in those set structures. Consequently L satisfies V=L. This is a statement inside the inner model, not an assertion that the ambient universe has no other sets.

## The enriched-hull condensation needed for GCH

Work now in a universe satisfying ZFC and V=L; this can be L itself. Fix a limit λ>ω. Expand the set structure (Lλ,∈) by countably many total functions, giving default value ∅ on inappropriate inputs. Include the following operations:

- sending an ordinal α<λ to the set Lₐ, and sending a set to its least stage of membership;
- successor and predecessor on ordinals where applicable;
- for each formula, its defined subset of Lₐ with supplied parameters, and its least witness in Lₐ when a witness exists;
- decoding a subset in Def(Lₐ) to its least formula representation, with one function for each of its finitely indexed parameter positions.

Use the canonical constructible well order for all least choices. Each function is a set function on finite tuples from Lλ. Its outputs remain in Lλ: a defined subset of Lₐ appears by stage α+1, and finite tuple coding and the ordinal operations require only finitely many further stages below the limit λ. A decoder returns individual parameters from Lₐ, not a class-sized definition object. There are countably many formulas and parameter positions, so this is a countable-language structure.

Let H be an elementary substructure of this expanded structure. In particular H is elementary in the membership reduct and is closed under every displayed function. It contains the finite ordinals, and its membership relation is well founded externally and extensional internally. Its Mostowski collapse π gives a transitive set N. Explicitly, define π(x)={π(y):y∈H∩x} by well-founded recursion. Extensionality makes this map injective: induction on the maximum ranks of a hypothetical equal-image pair would identify every lower member pair, forcing equal member sets within H and hence equal objects. Thus π is an isomorphism onto its transitive image.

For α∈H that is an ordinal below λ, write α*=π(α). Closure under the stage function ensures Lₐ∈H. If α>0, the substructure H∩Lₐ is elementary in Lₐ by Tarski–Vaught: any existential assertion there with parameters from H∩Lₐ has its least witness in H by the corresponding witness function. The empty α=0 case is handled directly without calling an empty structure an ordinary nonempty first-order model.

**Lemma 5.2 (Constructed condensation).** For this enriched elementary hull, π[H∩Lₐ]=L at α* for every ordinal α∈H, and N=Lβ for β=N∩Ord.

*Proof.* Induct along the ordinals in H, equivalently their collapsed order. At zero both sides are empty. For a successor α=γ+1, closure supplies γ∈H and α*=γ*+1. A member y of H∩L at γ+1 is a subset of Lγ defined by some formula and parameters. The decoder functions place its selected parameters in H. Elementarity of H∩Lγ in Lγ, followed by its induction isomorphism with L at γ*, shows that π(y) is the subset defined by the same formula over that collapsed stage. Thus it belongs to Def(L at γ*).

Conversely, any definable subset of L at γ* uses finitely many parameters. Lift them through the induction isomorphism to H∩Lγ. The corresponding defined-subset function produces y∈H∩L at γ+1. Formula agreement shows its collapse is the requested subset. This proves equality at the successor. At γ=0, Def(∅)={∅}, and H contains ∅, so the same equality holds directly.

If α is limit, every y∈H∩Lₐ belongs to an earlier stage whose least membership index is in H by closure. Conversely every such earlier stage lies inside Lₐ. The induction equalities therefore express the collapsed set as the union of earlier collapsed stages. The collapsed ordinal α* is limit because H∩α is closed under successor below α and has no largest element. Its earlier collapsed indices are cofinal in it, so this union is exactly L at α*.

Finally every member of H has its least membership stage in H, so N is the union of these collapsed stages. The ordinals in N are precisely the collapsed ordinals of H: elementarity identifies actual ordinals and the transitive collapse preserves their membership order. Their set β has no largest element by successor closure. Hence the union is Lβ, as claimed. ∎

This proves the special condensation form actually used below. The expanded functions remove a possible gap: an arbitrary elementary substructure must be shown closed under all the local definition and witness choices used in a standard condensation proof. Here those operations are explicit symbols before applying Löwenheim–Skolem. The expansion remains countable, so it has the same cardinal hull bound.

## Bounding constructible subsets and proving GCH

In ZFC, induction gives |Lₐ|≤max(|α|,ω) for infinite α. At a successor, at most countably many formula codes and finitely many parameters per definition produce at most max(|Lₐ|,ω) subsets. At a limit, sum the earlier bounds over at most |α| indices and use infinite cardinal multiplication. Finite early stages can be absorbed into the countable bound. This estimate is about the whole stage, not a claim that every possible external subset appears there.

Fix an infinite cardinal κ in the V=L universe and any x⊆κ. Choose a limit λ large enough to contain x and κ. Apply downward Löwenheim–Skolem to the expanded structure above with seed containing x, κ and **every ordinal below κ**. The seed has cardinal κ, so there is an elementary H of size κ containing it. Its collapse fixes κ and each element below it by ordinal induction. Since x∈H and all its members are among those fixed ordinals, π(x)=x.

By Lemma 5.2 its collapse is Lβ. The ordinal β has cardinal at most κ, since N has cardinal κ, so β<κ⁺. Therefore x belongs to L at κ⁺. As x was arbitrary, every subset of κ belongs to that stage. The stage estimate gives |L at κ⁺|≤κ⁺, hence 2 to the power κ≤κ⁺. Cantor's theorem gives the reverse strict lower bound above κ and therefore 2 to the power κ=κ⁺. This proves GCH throughout the V=L universe.

Applying this argument inside L gives GCH there, with its **internal** cardinal successors. The ambient universe may have additional subsets or different cardinals. In particular the conclusion CH in L means that L has a bijection between its reals and its own ω₁. It does not say that L's reals exhaust all ambient reals or that its ω₁ must equal the ambient ω₁.

## Relative consistency stated at the right level

ZF proves each relativized ZFC axiom and GCH in L. Consequently a finite derivation of contradiction from ZFC+GCH could be translated, formula by formula, into a derivation of contradiction from ZF: restrict quantifiers to the definable class L and replace each used axiom by its proved relativization. Logical rules preserve this interpretation, with nonemptiness supplied by ∅∈L. Only finitely many axiom instances occur in the alleged derivation.

Thus Con(ZF) implies Con(ZFC+GCH) in the usual formal metatheoretic sense. In particular, assuming ZFC consistent, it cannot prove ¬CH. This is one side of independence; the forcing chapters provide the other. No countable transitive model was assumed in this interpretation argument. Existence of such a model is a stronger convenient hypothesis for illustrating generic extensions, not a consequence silently extracted from this proof.

## Worked example 1: the first layers

L₀ is empty and Def(∅) contains only ∅, so L₁={∅}. Over L₁ its two subsets are definable, giving L₂={∅,{∅}}. More generally every subset of a finite transitive L-stage can be listed by a finite disjunction of equalities using its elements as parameters. Thus the finite L-stages equal the corresponding finite V-stages, and Lω=Vω.

This agreement does not continue merely because the next underlying set is countable. A countable structure has only countably many definitions with finitely many parameters, whereas it has uncountably many external subsets. Def and Power Set are different operations beyond the finite case.

## Worked example 2: why the seed includes all of κ

If a hull contained only the ordinal κ as one element, its collapse could move κ to a smaller ordinal, because the hull need not contain every member of κ. Including κ as a subset of the seed ensures each smaller ordinal is in H. Ordinal induction then fixes them all and fixes κ itself.

For x⊆κ this also fixes every member of x. The collapse equation gives π(x)={π(α):α∈x}=x. That is the precise step letting condensation bound x's original stage of appearance. Omitting those seed elements would bound a collapsed copy instead and would not prove the needed subset theorem.

## Worked example 3: internal and external CH

Suppose a forcing extension of a ground universe L adds new reals while preserving its ω₁. The old class L, recomputed as constructible sets in the extension, still has its old internally constructible reals and satisfies CH. The extension can have more reals and fail CH. The two statements quantify over different power sets of ω.

This example is conditional on the later forcing construction; the present chapter has not asserted that such an extension exists from no assumptions. It explains why an inner-model proof of CH supplies a consistency direction rather than deciding the ambient continuum question.

## Exercises with complete solutions

### 1. Parameters in Def {#constructible-universe-ex-1}

Why does transitive A satisfy A⊆Def(A)?

<details><summary>Hint 1</summary>

Each member x of A is already a subset of A.

</details>
<details><summary>Hint 2</summary>

Define that subset using x as a parameter.

</details>
<details><summary>Solution</summary>

For x∈A, transitivity gives x⊆A. The formula z∈x with parameter x defines exactly that subset over A. Hence x∈Def(A), proving the inclusion. The parameter must belong to A; arbitrary external subsets cannot be inserted this way.

</details>

### 2. Truth for one structure {#constructible-universe-ex-2}

Why does the definition of Def(A) not require a truth predicate for the universe?

<details><summary>Hint 1</summary>

Its quantifiers range over the one set A.

</details>
<details><summary>Hint 2</summary>

Finite formulas have a recursive satisfaction definition for a set structure.

</details>
<details><summary>Solution</summary>

The structure and all its assignments form set-sized data, so recursion on formula syntax defines their satisfaction relation. This is different from one formula defining truth for all formulas in the whole universe. Reflection uses fixed relativized formulas, not a uniform class truth predicate for L.

</details>

### 3. Reflection's witness bound {#constructible-universe-ex-3}

Where is Replacement used in Lemma 5.1?

<details><summary>Hint 1</summary>

One stage has a set of finite parameter tuples.

</details>
<details><summary>Hint 2</summary>

Each successful existential has a least witness stage.

</details>
<details><summary>Solution</summary>

Replacement collects the uniquely specified least stage ordinals over those tuples and the finite formula list. Their supremum is an ordinal bound for the next stage. Repeating this over ω and taking the supremum gives the reflecting limit. The uniqueness of a least ordinal avoids an arbitrary Choice selection in this step.

</details>

### 4. Internal Power Set {#constructible-universe-ex-4}

Does L's Power Set axiom imply every external subset of a∈L belongs to L?

<details><summary>Hint 1</summary>

Read the quantifiers after relativization.

</details>
<details><summary>Hint 2</summary>

Only subsets that are themselves constructible are internal witnesses.

</details>
<details><summary>Solution</summary>

No. Its power set of a consists of all constructible subsets of a. The proof bounds that collection and makes it constructible as one set. An external nonconstructible subset is outside the quantifier range and need not be included. This distinction allows L and an outer model to have different real sets.

</details>

### 5. A canonical Choice function {#constructible-universe-ex-5}

How does a definable well order on L give AC internally?

<details><summary>Hint 1</summary>

Restrict the order to each nonempty family member.

</details>
<details><summary>Hint 2</summary>

Its least element is unique, so Replacement collects the selections.

</details>
<details><summary>Solution</summary>

For each set in an internal nonempty family, choose its least element under the canonical order. This is a uniquely defined internal function. Separation and Replacement in L produce its graph as a set in L, giving a Choice function for that family. No ambient arbitrary Choice was needed to define the canonical selections.

</details>

### 6. Decoder closure {#constructible-universe-ex-6}

Why does the enriched hull include functions extracting definition parameters?

<details><summary>Hint 1</summary>

A set y∈Def(Lₐ) may initially have parameters outside the hull.

</details>
<details><summary>Hint 2</summary>

The collapse proof needs a definition with parameters that can themselves be collapsed.

</details>
<details><summary>Solution</summary>

The decoder chooses one canonical defining representation of y and places each of its parameters in H. Their collapsed values lie in the inductively identified earlier L-stage. Formula elementarity then identifies π(y) as the corresponding definable subset. Without this closure, merely knowing that y has some external definition would leave that step unproved.

</details>

### 7. Local witness closure {#constructible-universe-ex-7}

Why is H∩Lₐ elementary in Lₐ for α>0 in the constructed hull?

<details><summary>Hint 1</summary>

Apply the Tarski–Vaught witness condition.

</details>
<details><summary>Hint 2</summary>

The expanded structure has a witness function for each fixed formula at that stage.

</details>
<details><summary>Solution</summary>

Whenever an existential formula with parameters in H∩Lₐ is true in Lₐ, its least-witness operation returns a witness in Lₐ and, by function closure, in H. Thus the intersection satisfies the witness condition. It is nonempty for α>0, and its membership is the induced relation, so Tarski–Vaught gives elementarity. The empty zero stage is handled separately.

</details>

### 8. Bounding the collapsed height {#constructible-universe-ex-8}

If |H|=κ, why is its collapsed ordinal height β below κ⁺?

<details><summary>Hint 1</summary>

The transitive collapse has the same cardinal size as H.

</details>
<details><summary>Hint 2</summary>

Its ordinals form a subset of that transitive set.

</details>
<details><summary>Solution</summary>

The collapse is an isomorphism, hence |N|=κ. Its ordinal part β therefore has size at most κ. By definition of the successor initial cardinal, every ordinal of size at most κ is below κ⁺. This is the stage bound used for fixed subsets of κ.

</details>

### 9. Which successor in GCH? {#constructible-universe-ex-9}

When L satisfies 2 to the power κ=κ⁺, whose cardinal successor is meant?

<details><summary>Hint 1</summary>

The proof is carried out inside L after its AC theorem.

</details>
<details><summary>Hint 2</summary>

An outer model may have different bijections and subsets.

</details>
<details><summary>Solution</summary>

It is L's own cardinal successor of its internal cardinal κ, and exponentiation counts L's internal functions or subsets. The outer universe can add subsets or change cardinal comparisons. The inner GCH theorem cannot be read as equality for an unspecified external power set and external successor.

</details>

### 10. The consistency direction {#constructible-universe-ex-10}

Why does the L interpretation prove a relative result rather than Con(ZF) itself?

<details><summary>Hint 1</summary>

It transforms a hypothetical stronger-theory contradiction into a base-theory contradiction.

</details>
<details><summary>Hint 2</summary>

The absence of the latter remains the premise.

</details>
<details><summary>Solution</summary>

A finite contradiction proof from ZFC+GCH would translate into one from ZF using the proved relativized axioms. Therefore if ZF has no contradiction proof, neither does the stronger interpreted theory. The translation does not independently establish that ZF has no contradiction proof; that is exactly the relative premise.

</details>

## Chapter summary

Definable-subset recursion yields a transitive class containing every ordinal. Finite reflection and set bounds prove its ZF schemas, a canonical well order proves its Choice axiom, and enriched-hull condensation bounds the appearance of subsets to establish internal GCH. Relativization then gives Con(ZF) implying Con(ZFC+GCH), with internal power sets and the consistency premise kept explicit.

## Sources

This chapter is new exposition of the constructibility scope in Jech and Kunen. It proves the enriched-hull condensation form used by its cardinal calculation; it does not claim the most general condensation statement for every unexpanded elementary hull without additional closure justification. The ZF-schema, Choice, internal GCH and relative-interpretation arguments are supplied above. No model or proof-assistant execution is reported.
