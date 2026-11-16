
# ZFC and the Cumulative Hierarchy

The axioms of set theory govern which collections exist and which constructions remain sets. A class description such as all ordinals can be useful without naming a set. The cumulative hierarchy turns Foundation and recursion into a precise account of every set's stage of appearance. Its rank theorem is proved here, because later arguments about names, constructibility and inaccessible cardinals depend on actual rank bounds rather than an informal picture of layers.

The prerequisite is [Introduction to Logic and Set Theory](#/books/introduction-to-logic-and-set-theory), including its ZF axioms, ordinal arithmetic and transfinite recursion. We work in ambient ZFC unless a result is explicitly stated in ZF. Choice is not used in the hierarchy and rank proofs below. The distinction matters when a later inner model is shown to satisfy Choice even though the ambient theory has not assumed it.

## The language and the axiom schemas

The first-order language has membership and logical identity. Variables range over sets, not arbitrary classes. Extensionality identifies two sets with the same members. Empty Set, Pairing, Union and Power Set provide their named constructions. Infinity supplies an inductive set and hence the natural numbers. Separation restricts a given set by any formula with set parameters. Replacement collects the uniquely specified outputs of a formula on a set of inputs. Foundation says every nonempty set has a member disjoint from it. Choice asserts the existence of a choice function for every set-indexed family of nonempty sets, in one equivalent formulation.

Separation and Replacement are schemas: there is one first-order axiom for each suitable formula. They do not quantify over a set of every class predicate. When a proof invokes a class function F, it means a fixed formula defining one unique set output for each input in its stated domain. Replacement then applies to that formula. An informal use of the word function is not enough if the output relation has not been shown functional.

A proper class is a definable collection that is not a set, as with the ordinals. Ordinary class notation abbreviates formulas in this treatment; it does not add a second sort of objects to ZF. In particular, the expression V for all sets is not a set with every set as a member. Russell's separation argument would make a universal set impossible. Later class constructions must therefore be read through their set-sized restrictions.

## Transitive sets and closure

A set T is transitive when every member of a member of T is already in T, equivalently every element of T is a subset of T. An ordinal is a transitive set well ordered by membership. The distinction between belonging to a transitive set and being a subset of it is easy to lose: if x∈T, transitivity gives x⊆T, but a general subset of T need not itself belong to T.

For a set a define U₀=a and Uₙ₊₁=⋃Uₙ. Recursion on the natural numbers and Replacement collect the sequence of Uₙ into a set. Its union T=⋃ₙUₙ contains every member of a and is transitive: if x∈y∈T, then y belongs to some Uₙ and x belongs to Uₙ₊₁, hence T. It is the least transitive set containing all elements of a, because any transitive set containing a as a subset contains every Uₙ by induction.

To obtain a transitive set containing a itself as an element, apply this construction to {a}. Then a∈T and every finite membership descendant of a lies in T. Some authors call one of these two variants the transitive closure of a; the argument should state whether the original set is included as an element or only its members are included. We will specify the needed property rather than rely on the naming convention.

## Defining the hierarchy

Using transfinite recursion, define V₀=∅, Vₐ₊₁=℘(Vₐ), and Vₗ=⋃ₐ<ₗVₐ at a nonzero limit ordinal. For each ordinal stage the recursion produces a set. At a successor use Power Set. At a limit, Replacement collects earlier stages indexed by the set ordinal and Union combines them. There is one definable class relation saying y=Vₐ, with a unique set y for every ordinal a; there is no set-valued sequence indexed by all ordinals at once.

**Lemma 1.1.** Each Vₐ is transitive, and Vₐ⊆Vᵦ whenever a≤b.

*Proof.* Induct on the stages. The empty stage is transitive. If T is transitive, each element of T is a subset of T, so T⊆℘(T). Also ℘(T) is transitive: if x∈y∈℘(T), then y⊆T and x∈T; because T⊆℘(T), x∈℘(T). Thus successor stages are transitive and contain their predecessor. At a limit, the union of increasing transitive sets is transitive: two successive membership facts occur within a stage or transfer to a later common stage, whose transitivity gives the conclusion. The same successor inclusions and limit unions prove the monotonicity through all ordinal indices. ∎

Every stage is a set of earlier sets, but not every subset of a stage appears in that same stage. It appears by the next Power Set step. At a limit there are no new members beyond the earlier stages; there can nevertheless be new subsets of that limit stage at its successor.

## The rank theorem without a hidden assumption

Call a set rankable if it belongs to some V-stage. If every member of a set b is rankable, then b is rankable. To prove this closure claim, for each x∈b choose its **least** ordinal stage aₓ with x∈Vₐₓ. The least stage is uniquely defined; no Choice function is needed. Replacement collects those ordinals. Their supremum β is an ordinal and every x∈b belongs to Vᵦ by monotonicity. Hence b⊆Vᵦ and b∈Vᵦ₊₁. The empty case works with supremum zero.

**Theorem 1.2 (Every set has a rank).** In ZF, every set belongs to some stage of the cumulative hierarchy.

*Proof.* Fix a and a transitive set T containing a as an element, constructed above. By Separation form the subset B of T consisting of sets that are not rankable. If B were nonempty, Foundation would give b∈B with b∩B empty. Every member x of b lies in T by transitivity. Since none lies in B, each is rankable. The closure claim then makes b rankable, contradicting b∈B. Thus B is empty, and in particular a is rankable. ∎

This is a set-sized Foundation argument. It never applies Foundation directly to the proper class of all hypothetical unrankable sets. The transitive closure supplies the bounding set, and Separation forms the actual nonempty set to which Foundation could apply. The proof also identifies the roles of Replacement and least-ordinal uniqueness; merely saying take the supremum of the members' ranks before establishing rankability would be circular.

Define rank(a) as the least ordinal ρ such that a⊆Vᵨ, equivalently the unique stage immediately before a's first appearance as a hierarchy member. The first member stage is a successor: it cannot be zero, and at a limit membership already occurs earlier by the union definition. Existence follows from Theorem 1.2, and leastness follows from the well ordering of ordinals.

**Theorem 1.3 (Rank equation).** The rank of a is the supremum of rank(x)+1 for x∈a. Also x∈Vₐ exactly when rank(x)<a.

*Proof.* The first-appearance definition gives the membership equivalence: first appearance at stage rank(x)+1 is at or before a exactly when rank(x)<a. Put β equal to the displayed supremum, which is a set ordinal by Replacement. Every member x of a has rank(x)<β when a is nonempty, or there are no members to check when empty. Thus a⊆Vᵦ and rank(a)≤β. Conversely if a⊆Vᵨ, every x∈a has rank(x)<ρ, so rank(x)+1≤ρ. Taking the supremum gives β≤ρ. Apply this to the least such ρ to obtain equality. ∎

In the nonempty case the inequality rank(x)<β follows from rank(x)+1≤β. The supremum need not be a maximum. For a limit-rank set, its members' ranks can approach the rank without any member having that same rank. This is a structural bound, not a numerical size comparison.

## Worked example 1: finite stages and finite ordinals

V₀ is empty. V₁={∅}. V₂={∅,{∅}}. V₃ is the power set of that two-element set and has four elements. Induction gives |Vₙ₊₁|=2 to the power |Vₙ| for finite n. These cardinal counts are different from ranks: V₃ has rank three, while its size is four.

For each finite ordinal n, rank(n)=n. At zero this is the empty supremum. If it holds below n+1, the rank equation gives supremum of k+1 for k≤n, which is n+1. The same transfinite induction proves rank(α)=α for every ordinal α, using that α is exactly the set of smaller ordinals. Thus an ordinal's rank matches its order position even though other sets with that rank need not be ordinals.

## Worked example 2: equal size, very different ranks

The singleton {ω} has one element but rank ω+1, since rank(ω)=ω. The set ω itself is countably infinite and has rank ω, the supremum of the finite successors. Therefore a set's size gives no simple upper bound on its rank: singleton sets can sit arbitrarily high by taking the singleton of a high ordinal.

The elements of {ω} all belong to Vω+1, so the singleton belongs to Vω+2. It is not in Vω+1 because that would require its element ω to have rank below ω. Tracking the one-stage difference between subset and member avoids a common off-by-one error in forcing-name rank arguments.

## Worked example 3: the hereditary finite sets

Vω is the union of the finite stages. Every member has finite rank and a finite transitive closure, because each finite stage is finite and transitive. Conversely a set with finite transitive closure has finite membership depth by Foundation: on a finite acyclic directed membership graph every path has bounded finite length. Induction upward from its terminal empty nodes then gives finite rank. Thus Vω is exactly the collection of hereditarily finite sets.

It satisfies Pairing and Union internally: finitely many finite-rank inputs have a common finite rank bound and their required outputs occur at another finite stage. It does not satisfy Infinity. Any inductive set containing zero and closed under successor contains every finite ordinal; such a set cannot have finite rank. This example shows that a transitive hierarchy stage can satisfy many basic axioms without being a model of all ZF.

## Absoluteness and the limits of transitivity

A bounded, or Δ₀, formula permits only quantifiers of the forms ∀x∈y and ∃x∈y, together with atomic formulas and Boolean operations. Between transitive sets or classes containing its parameters, its truth is absolute. Prove this by structural induction. Atomic membership and identity agree. Boolean operations preserve agreement. A bounded quantifier ranges over the same elements of its bound set in both structures because transitivity includes all those elements. Apply the induction hypothesis to the body at each such element.

An unbounded existential can gain a witness in a larger universe, so this argument does not extend to arbitrary formulas. Internally being a cardinal or being countable involves possible functions and bijections, which need not all be present in a smaller transitive structure. A countable transitive ground model can internally regard an ordinal as uncountable even though an external enumeration exists outside it. This is the same internal/external distinction as the Skolem discussion in the logic prerequisite.

If transitive models M⊆N satisfy enough ZF and contain an ordinal α, their Vₐ stages need not agree: a larger model can contain new subsets at a Power Set step. Their ordinals and the rank of a fixed shared set do agree when the relevant transitive closures and rank recursions are available. The recursion depends on actual members of shared sets, all present by transitivity, rather than on all possible new subsets. Distinguish fixed-object rank absoluteness from equality of the whole hierarchy stage.

## What hierarchy fragments can and cannot prove

For an inaccessible κ, later chapters prove Vκ satisfies ZFC using both strong-limit cardinal bounds and regularity. The finite example above supplies a warning against assuming this for every limit stage. Even a stage closed under several operations may fail Replacement because a definable family of outputs has no rank bound below that stage. The proof for inaccessibles must show that such a bound exists for each set-sized input.

No rank theorem turns the proper class V into a set, and no hierarchy picture by itself proves the consistency of ZFC inside ZFC. Existence of a transitive set model of ZFC is a further strength claim. When a later forcing argument starts with a countable transitive model, that is an explicitly stronger expository assumption than merely syntactic consistency. The book keeps those metatheoretic levels visible.

## Exercises with complete solutions

### 1. Transitive closure variants {#zfc-cumulative-hierarchy-ex-1}

Which initial set in the iterated-union construction ensures that a itself is an element of the resulting transitive set?

<details><summary>Hint 1</summary>

Distinguish containing a as a subset from containing it as a member.

</details>
<details><summary>Hint 2</summary>

Use a singleton as the zeroth stage.

</details>
<details><summary>Solution</summary>

Start with U₀={a}. The union over all Uₙ contains every member of U₀, including a. Its later stages include all finite descendants, making it transitive. Starting instead at a ensures that every member of a is included but need not include a itself.

</details>

### 2. A finite stage {#zfc-cumulative-hierarchy-ex-2}

List V₃ and find its size and rank.

<details><summary>Hint 1</summary>

Take the power set of {∅,{∅}}.

</details>
<details><summary>Hint 2</summary>

There are four subsets of a two-element set.

</details>
<details><summary>Solution</summary>

V₃={∅,{∅},{{∅}},{∅,{∅}}}. It has four elements. The ranks of its elements are at most two and one has rank two, so the rank equation gives rank(V₃)=3. Its size and rank are different invariants.

</details>

### 3. An unordered pair {#zfc-cumulative-hierarchy-ex-3}

Express rank({a,b}) using rank(a) and rank(b).

<details><summary>Hint 1</summary>

Use the rank equation on its two members.

</details>
<details><summary>Hint 2</summary>

The supremum of two ordinals is their maximum.

</details>
<details><summary>Solution</summary>

The rank is max(rank(a)+1,rank(b)+1). This remains correct when a=b because repeating an element changes neither the set nor the supremum. Both members appear strictly below the pair's rank.

</details>

### 4. Rank of an ordinal {#zfc-cumulative-hierarchy-ex-4}

Prove rank(ω+1)=ω+1 directly from the rank equation.

<details><summary>Hint 1</summary>

Its members are all finite ordinals and ω.

</details>
<details><summary>Hint 2</summary>

One member contributes the successor of rank(ω).

</details>
<details><summary>Solution</summary>

The finite members contribute finite successors with supremum ω, while member ω contributes ω+1. Their combined supremum is ω+1. This uses rank(ω)=ω, obtained from the finite ordinal ranks and their supremum.

</details>

### 5. Foundation's actual input {#zfc-cumulative-hierarchy-ex-5}

Why did the rank theorem intersect the unrankable class with a transitive set T?

<details><summary>Hint 1</summary>

Foundation quantifies over sets.

</details>
<details><summary>Hint 2</summary>

Transitivity keeps all members of a chosen counterexample inside the bound.

</details>
<details><summary>Solution</summary>

Separation makes the hypothetical bad members of T into a set B, so Foundation applies to it. Its minimal member b has every member inside T and outside B, hence rankable. The closure lemma then contradicts b's badness. Applying Foundation directly to a proper class would not be a valid use of its axiom.

</details>

### 6. No hidden Choice {#zfc-cumulative-hierarchy-ex-6}

Why can Replacement collect the least stages of members of b without invoking AC?

<details><summary>Hint 1</summary>

An existing nonempty class of ordinal witnesses has a least witness.

</details>
<details><summary>Hint 2</summary>

The selected ordinal is uniquely definable from its input.

</details>
<details><summary>Solution</summary>

For each rankable x, the least stage containing it is unique by ordinal well ordering. The relation assigning that least ordinal is therefore functional and definable. Replacement collects its outputs directly. AC would be needed for an arbitrary family of choices lacking such a specified unique selection, not for a uniquely defined class function.

</details>

### 7. A Δ₀ example {#zfc-cumulative-hierarchy-ex-7}

Explain why “a is transitive” is absolute between transitive models containing a.

<details><summary>Hint 1</summary>

Write it with quantifiers bounded by a and its members.

</details>
<details><summary>Hint 2</summary>

Use ∀x∈a ∀y∈x (y∈a).

</details>
<details><summary>Solution</summary>

The displayed formula is bounded. Both models contain all members of a and of those members by transitivity, so they quantify over identical objects. Membership is unchanged, and the bounded-formula induction proves agreement. This does not imply absoluteness of formulas quantifying over all functions or subsets.

</details>

### 8. New subsets {#zfc-cumulative-hierarchy-ex-8}

Why can Vω+1 differ between transitive ground and extension models with the same ordinals?

<details><summary>Hint 1</summary>

This stage is the power set of Vω in the model.

</details>
<details><summary>Hint 2</summary>

A new real is a new subset of the natural-number part of Vω.

</details>
<details><summary>Solution</summary>

A forcing extension can add a new subset of ω while preserving ordinals. Since ω⊆Vω, that subset is also a subset of Vω and belongs to the extension's Vω+1. It was absent from the ground model's power set. Equality of ordinals does not imply equality of all available subsets.

</details>

### 9. No Infinity in Vω {#zfc-cumulative-hierarchy-ex-9}

Give a rank reason that Vω cannot contain an inductive set.

<details><summary>Hint 1</summary>

An inductive set contains every finite ordinal.

</details>
<details><summary>Hint 2</summary>

Their ranks have no finite upper bound.

</details>
<details><summary>Solution</summary>

If a were inductive, external finite induction would put every n into a. The rank equation would give rank(a) at least the supremum of n+1, namely ω. But every member of Vω has finite rank. Thus no such a belongs to Vω, so Infinity fails internally.

</details>

### 10. A set is not its stage {#zfc-cumulative-hierarchy-ex-10}

Does rank(a)=α imply a=Vₐ? Give a counterexample.

<details><summary>Hint 1</summary>

Many sets first appear at one successor stage.

</details>
<details><summary>Hint 2</summary>

Use α=2 and the singleton {{∅}}.

</details>
<details><summary>Solution</summary>

No. The set {{∅}} has rank two because its sole member {∅} has rank one. But V₂={∅,{∅}} also contains ∅ and is a different set. Rank identifies a least hierarchy bound, not a unique set with that bound.

</details>

## Chapter summary

ZF's set-sized constructions define a cumulative hierarchy through all ordinal stages. Transitive closure, Replacement and Foundation prove that every set appears, and least first appearance gives the rank equation. Bounded truth is absolute between transitive structures, while power sets and cardinal claims can change. These distinctions supply the actual hypotheses used later in constructibility and forcing.

## Sources

This chapter is new exposition built on the project's L3 ordinal-recursion development. Thomas Jech, *Set Theory*, and Kenneth Kunen, *Set Theory*, are the commissioned benchmarks. The rank proof is included in full, and the later inaccessible-model and forcing claims are identified as forward material rather than established here.
