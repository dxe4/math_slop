var e=`---
parent_id: book-set-theory
chapter_id: cardinal-arithmetic-cofinality
title: "Cardinal Arithmetic and Cofinality"
level: graduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Cardinal Arithmetic and Cofinality

Cardinal arithmetic compares sizes, while cofinality measures how many earlier stages are needed to approach a limit. These are different questions even when ordinals provide representatives for both. The distinction controls stationary-set arguments, chain-condition preservation and the possible values of the continuum. This chapter proves the infinite product law, regularity facts and the diagonal inequality needed to rule out several tempting continuum values.

We work in ZFC. Choice allows every set to be well ordered and identifies its cardinal with an initial ordinal. The corresponding statements in ZF require care: an arbitrary set need not be comparable with an ordinal cardinal, and selecting simultaneously from arbitrary families is not automatic. The rank arguments of Chapter 1 were choice-free; the cardinal comparisons here explicitly use the stronger ambient assumption.

## Arithmetic on sizes and arithmetic on orders

For sets A and B, cardinal addition is the size of their disjoint union, cardinal multiplication the size of their Cartesian product, and cardinal exponentiation the size of the set of functions from B to A. These constructions are independent of representatives because bijections induce the corresponding tagged-union, pair and function bijections. Exponentiation reverses the direction of the argument set in notation: κ to the power λ counts λ-indexed choices from κ.

Ordinal addition instead joins two well orders with the first wholly before the second. The order types 1+ω and ω are equal, whereas ω+1 has a largest point and is different. Cardinally, both have size aleph-zero. An equality of cardinal sizes therefore does not justify commuting or cancelling ordinal sums. Later club arguments use order and suprema as well as sizes, so the convention cannot be left implicit.

Finite products and unions obey familiar bijection laws. Associating a pair with a nested pair gives associativity of cardinal multiplication, swapping components gives commutativity, and tagged unions give the corresponding addition laws. Function currying gives (κ to the power λ) to the power μ equal to κ to the power (λ·μ): a μ-indexed family of λ-indexed functions is exactly one function on μ×λ. These are set bijections, not formal exponent manipulations imported without an interpretation.

An infinite cardinal κ is identified with its least ordinal representative. Every ordinal below κ then has cardinal strictly below κ. This initial-ordinal property is the key fact in the infinite-square proof. It does not say every subset of κ of smaller order type is bounded, which would fail at a singular cardinal.

## The infinite-square theorem in full

**Theorem 2.1.** For every infinite cardinal κ, the Cartesian square κ×κ has cardinal κ.

*Proof.* Proceed by induction on infinite cardinals, assuming the assertion for every smaller infinite cardinal. Well order pairs (α,β) by first comparing max(α,β), then lexicographically within an equal maximum. This is a well order: a nonempty set of pairs has a least maximum and then a least first and second coordinate within that block.

Fix a pair whose maximum is γ<κ. Every earlier pair belongs to (γ+1)×(γ+1). If γ+1 is finite, that square is finite and has size below κ. Otherwise let λ=|γ+1|, an infinite cardinal below κ. The induction hypothesis makes its square have size λ, again below κ. Thus every proper initial segment of the pair order has cardinal below κ.

Let θ be its order type. If θ were greater than κ, the initial segment of order type κ would be a proper initial segment and have cardinal κ, contradicting the preceding bound. Hence θ≤κ, giving an injection of κ×κ into κ. The diagonal α↦(α,α) gives an injection of κ into its square. Cantor–Bernstein now yields a bijection. The argument also covers the first infinite cardinal because every relevant γ is finite and no smaller infinite induction hypothesis is needed. ∎

The proof does not assume κ regular. Its bounds concern the initial segment before one specified pair, which lies within the square of one smaller ordinal. There is no step taking the supremum of fewer than κ arbitrary smaller cardinals and declaring it smaller than κ. That latter inference would be exactly the regularity issue studied below.

**Corollary 2.2.** If κ,λ are infinite cardinals, then κ+λ=κ·λ=max(κ,λ). A union of at most κ sets, each of size at most κ, has size at most κ.

*Proof.* Put μ=max(κ,λ). Both summands and factors embed into a tagged pair of μ or its square; a two-tagged μ embeds into μ×μ because μ is infinite. The square theorem gives the upper bound μ. The larger original set supplies the lower bound. For the union, use Choice to select injections from each indexed set into κ. Associate an element with an index containing it and its chosen coordinate, choosing the least such index after well ordering the index set. This injects the union into κ×κ. ∎

The union bound is only at most κ. To obtain a strict bound below κ for a union indexed by fewer than κ smaller sets, one needs the additional regularity hypothesis. The difference between ≤ and < is where many incorrect singular-cardinal arguments fail.

## Cofinal sets and increasing sequences

For a nonzero limit ordinal α, a subset C is cofinal if its supremum is α, equivalently every earlier ordinal is at or below some member of C. Define cf(α) to be the least cardinality of such a subset. For a successor put cf(α+1)=1 and put cf(0)=0. These conventions agree with the usual order-theoretic cofinality definition. A cardinal κ is regular if cf(κ)=κ and singular if cf(κ)<κ.

There is an increasing cofinal sequence in α of length δ=cf(α). To construct one, enumerate a cofinal subset in δ positions. At stage ξ<δ take an ordinal above the current enumerated element and all earlier chosen elements. Their supremum is still below α: otherwise fewer than δ elements would already form a cofinal subset, contrary to minimality. Since α is a limit there is room to increase. The resulting sequence is strictly increasing and cofinal. This construction explains why minimal cofinal-set size can be used as an increasing sequence length without assuming regularity in advance.

**Theorem 2.3.** The cofinality of a nonzero limit ordinal is an infinite regular cardinal.

*Proof.* It cannot be finite, since a finite set of ordinals below a limit has a largest member and hence a supremum below the limit. Let δ=cf(α), with a strictly increasing cofinal sequence f:δ→α. If cf(δ)=μ<δ, choose an increasing cofinal g:μ→δ by the same construction. The composition f∘g is cofinal in α: above any specified α-bound, choose an f-index reaching it, then a g-index at least that index. Its range has cardinal at most μ, contradicting minimality of δ. Thus cf(δ)=δ. ∎

In particular a singular cardinal cannot have a singular cofinality. An assertion such as cf(κ)=aleph-omega is impossible because aleph-omega itself has countable cofinality. This is a theorem about the regularity of the cofinality value, not a claim that every limit cardinal is regular.

## Successor cardinals and limit cardinals

**Theorem 2.4.** Every infinite successor cardinal κ⁺ is regular in ZFC.

*Proof.* Suppose a cofinal family in κ⁺ had cardinal μ<κ⁺. Since κ⁺ is the next cardinal above κ, μ≤κ. Each ordinal in that family has cardinal at most κ. Their union is κ⁺ by cofinality, but Corollary 2.2 bounds the union of at most κ sets of size at most κ by κ. This contradicts the definition of κ⁺. Hence no smaller cofinal family exists and cf(κ⁺)=κ⁺. ∎

An infinite limit cardinal can be regular or singular; inaccessibility later adds a strong-limit property to uncountable regular limit size. Aleph-omega is singular: the sequence aleph-n is cofinal in its supremum and has countable length. It cannot have finite cofinality because it is a nonzero limit ordinal, so its cofinality is exactly omega.

For a regular infinite κ, every set of fewer than κ ordinals below κ is bounded below κ. Otherwise it would be a smaller cofinal set. Consequently a union of fewer than κ sets, each of size less than κ, has size less than κ: their cardinal bounds have a supremum below κ, and the infinite-square theorem bounds the union by the maximum of that bound and the index size, still below κ. Finite exceptional sizes can be absorbed into an infinite bound when κ is uncountable; for κ=ω the statement reduces to finite unions of finite sets.

This is also the sense in which regularity controls a sum of smaller cardinals. At a singular κ, the increasing cofinal sequence supplies fewer than κ smaller initial segments whose union is all κ, so the strict union property fails. The equivalence is often used as a definition, but the argument shows exactly where cardinal products and Choice enter it.

## König's diagonal inequality

**Theorem 2.5.** Suppose Aᵢ and Bᵢ are sets indexed by I and |Aᵢ|<|Bᵢ| for every i. Then the disjoint union of the Aᵢ has cardinal strictly below the product of the Bᵢ.

*Proof.* Each Bᵢ is nonempty, so Choice gives a point in the product. There is no surjection from the disjoint union to that product. For any proposed function h from the union into the product, consider at coordinate i the values h(i,a)(i) as a ranges over Aᵢ. They occupy fewer than |Bᵢ| values. Choose bᵢ outside this set, simultaneously for all i. The resulting product element b differs from h(i,a) at coordinate i for every tagged input (i,a), so h misses b.

By cardinal comparability, if the product were no larger than the union, a surjection from the nonempty union onto the nonempty product could be formed whenever the union is nonempty. This contradicts the diagonal argument. If the union is empty, the product is nonempty and the strict inequality is immediate. Thus the union is strictly smaller. ∎

The proof is a coordinatewise diagonalisation. Different input blocks are defeated at different coordinates. It does not require all product values to share one missing coordinate value, and it uses strict inequality in every block. Equality of component sizes would not support the selection step.

**Corollary 2.6.** For every infinite cardinal κ, κ to the power cf(κ) is greater than κ.

*Proof.* Partition κ into δ=cf(κ) blocks, each of cardinal below κ, using an increasing cofinal sequence and its successive interval differences. Empty blocks cause no difficulty. For each block of size λᵢ, choose Bᵢ of size λᵢ⁺, which is at most κ. König's inequality gives κ, the size of the disjoint block union, strictly below the product of the Bᵢ. This product injects into κ to the power δ after choosing each coordinate injection. Therefore κ<κ to the power δ. ∎

For a regular κ a partition into κ singleton blocks also proves the result, using two choices per coordinate. The cofinal-interval construction works at a limit cardinal; for a successor cardinal use that regular case. This distinction avoids requesting a cofinal sequence of smaller cardinals in a successor cardinal, where smaller ordinals can be cofinal but their cardinal sizes do not approach κ as smaller cardinal values.

## Cofinality restricts the continuum

**Theorem 2.7.** For every infinite cardinal κ, cf(2 to the power κ)>κ.

*Proof.* Put λ=2 to the power κ. If δ=cf(λ)≤κ, Corollary 2.6 gives λ to the power δ>λ. But monotonicity of exponentiation gives λ to the power δ≤λ to the power κ. Currying and κ·κ=κ give (2 to the power κ) to the power κ=2 to the power (κ·κ)=2 to the power κ=λ. This contradicts the strict lower bound. Therefore δ>κ. ∎

In particular the continuum cannot have countable cofinality. It is not enough for a proposed continuum value merely to exceed aleph-zero. For example aleph-omega is ruled out, whereas the theorem alone does not decide between aleph-one and aleph-two. Forcing constructions later show why this remaining freedom matters and which further cardinal-arithmetic hypotheses enter more precise continuum assignments.

## Worked example 1: a countable product is not a countable union

A countable union of countable sets is countable in ZFC by Corollary 2.2 at omega. In contrast, the product of countably many two-element sets is the set of binary sequences and has cardinal continuum, strictly above omega by Cantor's theorem. Replacing a product with a union changes the object being counted.

The set of finite binary strings is countable because it is the union over finite lengths of finite sets. The set of infinite binary strings is uncountable because a diagonal string differs from the nth listed string at coordinate n. Both use the same alphabet, but finite description length and infinite coordinate choice produce different sizes.

## Worked example 2: a singular union at aleph-omega

For each n let Aₙ be the ordinal aleph-n. Every Aₙ has cardinal below aleph-omega, and the index set has cardinal omega, also below aleph-omega. Their union is aleph-omega itself. Thus the union of fewer than κ smaller sets can have size κ when κ is singular.

The ordinary upper bound remains correct: the union has size at most κ. What fails is replacing that upper bound by a strict one. This example isolates the regularity premise used later when fewer than κ exceptional sets must not exhaust κ.

## Worked example 3: proposed continuum values

Suppose someone proposes continuum equal to aleph-omega. Theorem 2.7 at omega would require its cofinality to exceed omega, but the aleph-n sequence proves cf(aleph-omega)=omega. The proposal is impossible in ZFC. The same argument rules out any proposed continuum cardinal of countable cofinality.

The argument does not prove CH. A successor cardinal such as aleph-two is regular by Theorem 2.4 and satisfies this cofinality restriction. Showing that such a value actually occurs requires a model construction, not merely absence of this particular obstruction. Necessary cardinal arithmetic and sufficient forcing hypotheses must be stated separately.

## Exercises with complete solutions

### 1. Cardinal and ordinal sum {#cardinal-arithmetic-cofinality-ex-1}

Compare 1+ω and ω+1 as order types and as cardinal sizes.

<details><summary>Hint 1</summary>

One order has a largest element and the other does not.

</details>
<details><summary>Hint 2</summary>

Both underlying sets can be enumerated by naturals.

</details>
<details><summary>Solution</summary>

The ordinal 1+ω is order-isomorphic to ω; ω+1 has a largest point and is not. Their cardinal sizes are both aleph-zero. Cardinal commutativity therefore cannot be imported into ordinal addition.

</details>

### 2. Where square induction is used {#cardinal-arithmetic-cofinality-ex-2}

Why is the initial segment before a pair of maximum γ<κ smaller than κ?

<details><summary>Hint 1</summary>

Bound all its coordinates by γ+1.

</details>
<details><summary>Hint 2</summary>

Its cardinal is a smaller cardinal or finite.

</details>
<details><summary>Solution</summary>

That segment is contained in (γ+1) squared. The initial-ordinal property gives |γ+1|<κ. If it is finite its square is finite; otherwise the cardinal induction hypothesis identifies its square with that smaller cardinal. Thus the segment has size below κ without assuming κ regular.

</details>

### 3. Regular union bound {#cardinal-arithmetic-cofinality-ex-3}

State the two different conclusions available with and without regularity.

<details><summary>Hint 1</summary>

Distinguish at most κ from less than κ.

</details>
<details><summary>Hint 2</summary>

Regularity bounds fewer than κ smaller cardinal estimates simultaneously.

</details>
<details><summary>Solution</summary>

At most κ sets of size at most κ have union size at most κ in ZFC. If κ is regular, fewer than κ sets each of size below κ have union size below κ. The strict conclusion fails at aleph-omega for the family of its aleph-n initial segments.

</details>

### 4. A successor ordinal {#cardinal-arithmetic-cofinality-ex-4}

Find cf(ω+1) and compare it with cf(ω).

<details><summary>Hint 1</summary>

A successor order has a largest element.

</details>
<details><summary>Hint 2</summary>

A finite subset cannot approach the limit ω.

</details>
<details><summary>Solution</summary>

The singleton {ω} is cofinal in ω+1, so its cofinality is one. The ordinal ω has no finite cofinal subset and is cofinal in itself through its natural sequence, so cf(ω)=ω. Cofinality need not increase with the ordinal.

</details>

### 5. Cofinality is regular {#cardinal-arithmetic-cofinality-ex-5}

Explain the contradiction obtained by composing two shorter cofinal sequences.

<details><summary>Hint 1</summary>

Take an increasing cofinal f:δ→α.

</details>
<details><summary>Hint 2</summary>

A cofinal map into δ makes f's cofinal image smaller.

</details>
<details><summary>Solution</summary>

If δ=cf(α) had a cofinal sequence g of length μ<δ, then f∘g would be cofinal in α. Its image has size at most μ, contradicting the definition of δ as the least cofinal cardinality. Hence cf(δ)=δ.

</details>

### 6. Successor regularity {#cardinal-arithmetic-cofinality-ex-6}

Why would a cofinal subset of κ⁺ of size at most κ contradict the square theorem?

<details><summary>Hint 1</summary>

Every ordinal below κ⁺ has size at most κ.

</details>
<details><summary>Hint 2</summary>

A cofinal family's union is all κ⁺.

</details>
<details><summary>Solution</summary>

The union would be a union of at most κ sets of size at most κ, hence have size at most κ by the square theorem and Choice. Cofinality makes that union κ⁺, contradicting its strictly larger cardinal size. Therefore κ⁺ is regular.

</details>

### 7. The diagonal coordinate {#cardinal-arithmetic-cofinality-ex-7}

In König's proof, why does the selected product element differ from every proposed image?

<details><summary>Hint 1</summary>

Every source element belongs to one tagged block.

</details>
<details><summary>Hint 2</summary>

Use that block's own coordinate.

</details>
<details><summary>Solution</summary>

For an input (i,a), the ith coordinate of its image belongs to the list avoided when bᵢ was chosen. Thus b and h(i,a) differ at i. Different blocks may require different coordinates, but every source element is defeated at its own block coordinate, proving that the single product element b is missed.

</details>

### 8. A forbidden continuum {#cardinal-arithmetic-cofinality-ex-8}

Can the continuum equal a cardinal with cofinality ω?

<details><summary>Hint 1</summary>

Apply Theorem 2.7 with κ=ω.

</details>
<details><summary>Hint 2</summary>

Its conclusion is a strict cofinality inequality.

</details>
<details><summary>Solution</summary>

No in ZFC. The theorem gives cf(2 to the power omega)>omega. A cardinal whose cofinality is omega violates this necessary condition, regardless of how large it is. The argument does not select one permissible value among the remaining cardinals.

</details>

### 9. Function currying {#cardinal-arithmetic-cofinality-ex-9}

Describe the bijection behind (κ to the power λ) to the power μ=κ to the power (μ·λ).

<details><summary>Hint 1</summary>

An outer function assigns a λ-indexed function to each μ-index.

</details>
<details><summary>Hint 2</summary>

Evaluate that assigned function at the second coordinate.

</details>
<details><summary>Solution</summary>

Send F to the function H on μ×λ defined by H(i,j)=F(i)(j). Conversely a function H determines F(i) by j↦H(i,j). The two constructions undo each other pointwise, proving a bijection rather than an unsupported formal law of symbols.

</details>

### 10. What Choice did {#cardinal-arithmetic-cofinality-ex-10}

Identify two uses of Choice in the union and diagonal arguments.

<details><summary>Hint 1</summary>

A family of cardinal bounds is not yet a family of selected injections.

</details>
<details><summary>Hint 2</summary>

König's missing values must be chosen at every coordinate.

</details>
<details><summary>Solution</summary>

The union proof selects injections from each indexed set into its cardinal bound and well orders indices to choose a containing index. König's proof selects a missing value from each coordinate complement to assemble one product element. These simultaneous selections are licensed by ambient ZFC; their arbitrary-family versions are not silently asserted in ZF.

</details>

## Chapter summary

Infinite cardinal products follow from a well order on pairs and induction on cardinals, without regularity. Cofinality supplies regular lengths for approaching limits; successor cardinals are regular in ZFC, while aleph-omega is singular. König's coordinate diagonal proves the strict exponent inequality and forces the continuum to have uncountable cofinality. These facts constrain later model constructions without deciding CH.

## Sources

This chapter is new exposition following the cardinal/cofinality scope of Jech and Kunen. Cantor–Bernstein, Choice and basic ordinal recursion are supplied by the L3 prerequisite. The infinite-square, regularity, König and continuum-cofinality arguments are proved here rather than inferred from a finite computation.
`;export{e as default};