
# Combinatorial Set Theory

Infinitary combinatorics seeks organised subfamilies inside large collections. Finite sets can share one fixed root, stationary sets can split into many stationary pieces, and finite colourings of finite subsets can admit infinite homogeneous sets. Each statement has precise size hypotheses. Their proofs will also show why the countable Ramsey phenomenon cannot simply be promoted to an uncountable homogeneous-set claim.

We use ZFC, the cardinal arithmetic of Chapter 2 and the stationary-set results of Chapter 3. The Δ-system lemma is proved before it is used for chain conditions in forcing. Stationary splitting and Ramsey's theorem are independent constructions: none is inferred from a computer search or a finite analogy. Finite examples illustrate the structures, while induction and diagonal arguments prove their infinite forms.

## Δ-systems and roots

A family of sets is a **Δ-system** when any two distinct members have the same intersection R, called its root. Removing R leaves pairwise disjoint petals. Disjoint families are the special case of empty root. The sets in a family are distinct; duplicating the same finite set many times would change an indexed list but not give a large family of distinct petals.

For example {a,b,u}, {a,b,v} and {a,b,w}, with u,v,w distinct and outside {a,b}, form a Δ-system rooted at {a,b}. A family can have pairwise nonempty intersections without being a Δ-system: {a,b}, {b,c} and {a,c} have three different pairwise intersections. The root condition is simultaneous agreement across all pairs, not merely one lower bound on intersection size.

**Theorem 4.1 (Regular-cardinal Δ-system lemma).** Let κ be regular and uncountable. Every family of κ distinct finite sets has a subfamily of cardinal κ forming a Δ-system.

*Proof.* First restrict to one common finite size n. There must be κ many sets of some size: otherwise the whole family would be a countable union of families smaller than κ, and regular uncountability would make its size smaller than κ. Now induct on n for families of that fixed size.

For n=0 there cannot actually be κ distinct empty sets, so the implication is vacuous. For positive n, suppose some element x belongs to κ members. Restrict to those members and remove x from each. The resulting sets remain distinct and have size n−1. By induction a κ-sized subfamily of them has root R. Restoring x gives a Δ-system with root R∪{x}.

In the remaining case, every element belongs to fewer than κ members. Recursively choose κ pairwise disjoint members. At stage α<κ, the union U of the earlier chosen finite sets has size less than κ. For each x∈U, fewer than κ original family members contain x. Regularity makes the union of these fewer than κ smaller exceptional families have size less than κ. Therefore not all κ members are excluded, and a new one can be chosen disjoint from U. Recursion continues through κ stages and gives a Δ-system with empty root. These cases complete the finite-size induction and the theorem. ∎

The proof identifies two distinct structures: a frequently occurring point is absorbed into the root, while an absence of such points permits a disjoint greedy construction. A single finite greedy run cannot decide which infinite case holds. Regularity controls the size of the excluded family at each stage, and uncountability handles the initial countable division by finite sizes.

For an arbitrary uncountable family of finite sets, take a subfamily of size ω₁ and apply the theorem there. This yields an uncountable Δ-system without requiring the original family's size to be regular. The stronger conclusion that the subfamily has the full original singular cardinality is not asserted by this argument.

## Finite labels on a root

Suppose each finite support also carries labels from a fixed finite set of size r. After extracting a Δ-system with finite root R, there are only r to the power |R| possible label patterns on the root. A κ-sized subfamily has one common pattern on κ members: a finite union of smaller cardinalities could not have size κ. Distinct labelled supports in this subfamily agree wherever their supports overlap.

This observation is the forcing application. For finite partial functions into a finite alphabet, agreement on the shared root makes their union a function. Its support is still finite, so it is a common extension under reverse inclusion. Consequently a family with this extraction property cannot be an uncountable antichain. The later forcing chapter will apply the result to conditions on an arbitrary set of coordinates, not just one countable row.

The finite alphabet matters for this particular pigeonhole step. With countably many labels and a regular uncountable κ, the same argument works because countably many smaller pieces cannot exhaust κ. With κ possible labels at one shared coordinate, singleton conditions carrying different labels can themselves form a κ-sized antichain. A support theorem alone does not establish compatibility without the label bound.

## Stationary splitting at a successor cardinal

Let λ=κ⁺ for an infinite cardinal κ, and let S⊆λ be stationary. For each β<λ choose an injection iᵦ:β→κ, possible because |β|≤κ. Define matrix cells

$$A^\xi_\eta=\{\beta<\lambda:\xi<\beta\text{ and }i_\beta(\xi)=\eta\},
\qquad \xi<\lambda,\quad\eta<\kappa.$$

For fixed ξ, these κ cells partition the tail above ξ. For fixed η, the cells with different ξ are pairwise disjoint: if one β belonged to both, its injection would assign η to two distinct inputs. These are the two matrix properties needed for the proof.

**Theorem 4.2 (Successor stationary splitting).** Every stationary subset of κ⁺ can be partitioned into κ⁺ pairwise disjoint stationary subsets.

*Proof.* For each ξ<λ, S intersected with the tail above ξ is stationary, because removing a bounded set preserves stationarity. It is a union of κ cells S∩A at indices ξ,η. Since κ<λ and the nonstationary ideal on regular λ is λ-complete, at least one cell is stationary. Choose one such output η(ξ)<κ.

Some fixed η occurs for λ many ξ. Otherwise every fiber of η would have size below λ, hence at most κ, and the union of κ such fibers would have size at most κ·κ=κ, contradicting that their domain has size λ. Restrict to those λ indices. Their selected stationary cells are pairwise disjoint by the fixed-output matrix property. If they do not yet cover S, add the remaining points of S to one cell. A superset of a stationary set is stationary, so all λ pieces remain stationary and now partition S. ∎

The final adjustment changes only one piece and retains disjointness. The theorem therefore gives an actual partition, not just a large disjoint stationary subfamily. No claim is made here about the most general splitting theorem at every regular limit cardinal; the successor result is exactly what this matrix proves.

At λ=ω₁, each earlier β is countable, so the matrix uses countable coordinate enumerations. At λ=ω₂, it uses injections into ω₁. The cardinal comparison in the pigeonhole argument scales accordingly. Replacing a successor λ by an arbitrary regular limit without changing the matrix would leave no single smaller κ into which every earlier ordinal injects, so the proof's first step would fail.

## Infinite Ramsey theorem for finite subsets

For a set X, write [X]ʳ for its r-element subsets, with r a positive finite integer. A colouring c:[X]ʳ→k uses a fixed positive finite number k of colours. A set H is homogeneous if c is constant on [H]ʳ. The notation ω→(ω)ʳₖ records that every such colouring on a countably infinite set has an infinite homogeneous subset.

**Theorem 4.3 (Infinite Ramsey).** For all positive finite r,k, every k-colouring of [ω]ʳ has an infinite homogeneous set.

*Proof.* Induct on r. At r=1 the result is the infinite pigeonhole principle: a finite union of finite colour classes cannot cover ω, so one colour class is infinite.

Assume the theorem for r−1. Build distinct increasing numbers a₀,a₁,… and nested infinite tails B₀⊇B₁⊇… so that every later chosen a belongs to each earlier tail. At stage n choose aₙ from the current infinite tail and discard its finitely many smaller numbers. Colour the (r−1)-element subsets of the remaining tail by sending u to c({aₙ}∪u). By the induction hypothesis, choose an infinite homogeneous subset Bₙ for this induced colouring, with colour dₙ. Continue within Bₙ.

Some colour d occurs for infinitely many indices n. Let H consist of the corresponding aₙ. For any r-element subset of H, take its least element aₙ. All remaining r−1 elements were chosen later and lie in Bₙ, so the original colour of this subset is dₙ=d. Thus H is homogeneous. The construction supplies infinitely many distinct numbers, and the finite-colour pigeonhole step supplies infinitely many retained indices, proving the claim. ∎

Nested tails, rather than independently chosen infinite sets, make the final minimum-element argument work. A later element must belong to every earlier tail relevant to its colour. The proof does not assert that the homogeneous set is computable from a computable colouring, nor give a finite bound for a requested finite size. Those are further effective and quantitative questions.

## Finite Ramsey existence from a finitely branching tree

**Theorem 4.4 (Finite Ramsey existence).** For positive finite r,k,m there is a finite N such that every k-colouring of [N]ʳ has a homogeneous m-element subset.

*Proof.* Suppose no N worked. Form a tree whose level N consists of colourings of [N]ʳ having no homogeneous m-subset, ordered by restriction to shorter initial segments. Every level is finite, every node has finitely many immediate extensions, and the assumption gives nodes at arbitrarily large levels. Restrictions retain the no-homogeneous-m property, so this is a prefix-closed tree.

A finitely branching tree of unbounded finite height has an infinite branch. To prove that fact here, start at its root, which has descendants at arbitrarily large heights. At least one of its finitely many children also has descendants of unbounded height; otherwise the finite maximum of their bounds would bound the root's descendants. Choose the first such child in a fixed finite order and repeat. This constructs compatible colourings at every length.

Their union is a k-colouring of [ω]ʳ, because every finite subset occurs at some stage and compatibility fixes its colour. It has no homogeneous m-subset: such a finite subset would already appear in a sufficiently long finite stage, contradicting the node definition. Infinite Ramsey supplies an infinite homogeneous set and hence an m-subset, a contradiction. ∎

This proves existence of a finite Ramsey number, not its exact value or a useful numerical bound. The tree argument is a compactness mechanism with finite branching. Infinite branching would not justify the child selection step: a root could have one child of each finite height and no child of unbounded height. The finite colour and finite-domain hypotheses make the argument apply.

## A two-colouring with no uncountable homogeneous set

Choice and Cantor's theorem allow distinct real numbers rₐ for α<ω₁. For α<β colour {α,β} zero when rₐ<rᵦ and one otherwise. There is no uncountable homogeneous subset.

To prove this, an uncountable subset of ω₁ has increasing enumeration of order type ω₁. A homogeneous-zero subset would give a strictly increasing ω₁-sequence of reals; a homogeneous-one subset would give a strictly decreasing one. Neither exists. Between each successive pair in such a monotone sequence choose the first rational in a fixed enumeration lying strictly between them. The disjoint successive intervals give distinct rationals for ω₁ many successor pairs, an injection of an uncountable set into the countable rationals, impossible.

Thus the countable theorem's conclusion cannot be strengthened to an uncountable homogeneous set merely by enlarging the domain. The same colouring still has a countably infinite homogeneous subset by Infinite Ramsey after restriction to a countably infinite domain. There is no contradiction: infinite and uncountable are different size targets.

## Worked example 1: supports and compatible labels

Take finite partial binary functions with supports {a,b,u}, {a,b,v} and {a,b,w}. Let every function assign a↦0 and b↦1, while its petal bit can be either value. The supports form a Δ-system rooted at {a,b}, and all root labels agree. Any pair has a finite union function extending both.

Change only one root assignment to a↦1. That function is incompatible with the others despite the same support-root pattern. The Δ-system condition isolates overlap; agreement of labels supplies compatibility. A forcing antichain proof needs both arguments.

## Worked example 2: splitting a familiar stationary set

At ω₁ let S be the nonzero countable limit ordinals, stationary by Chapter 3. The successor splitting theorem partitions it into ω₁ stationary pieces. Every piece is unbounded and has size ω₁, although the pieces are disjoint and their union has only size ω₁.

There is no conflict with infinite cardinal multiplication: ω₁·ω₁=ω₁. Nor does any piece contain a club, because a club in one would have to meet every other stationary piece. The example strengthens the earlier two-disjoint-cofinality example at ω₂ by producing many disjoint stationary subsets at ω₁ itself.

## Worked example 3: parity of the least element

Colour a pair {a,b} with a<b by the parity of a. Every pair from the infinite even numbers has colour zero, and every pair from the infinite odd numbers has colour one. A set containing two even and two odd numbers in alternating order need not be homogeneous because its least-element parities can differ across pairs.

The infinite theorem guarantees a homogeneous subset for much less transparent colourings too. This explicit case shows what the target means: all pairs inside one selected set share a colour. It does not mean every selected number was given a colour independently or that the original domain was already homogeneous.

## Exercises with complete solutions

### 1. Identify the root {#combinatorial-set-theory-ex-1}

Find the root of {{0,1,3},{0,1,5},{0,1,8}} and explain why the petals are disjoint.

<details><summary>Hint 1</summary>

Compute every pairwise intersection.

</details>
<details><summary>Hint 2</summary>

Remove the common two-element part.

</details>
<details><summary>Solution</summary>

Every pair intersects in {0,1}, so that is the root. The petals are {3},{5},{8}, which are pairwise disjoint. Equal pairwise intersections are precisely what distinguishes this family from merely having nonempty overlaps.

</details>

### 2. A frequent point {#combinatorial-set-theory-ex-2}

Why does removing x from κ distinct n-element sets containing x retain κ distinct sets?

<details><summary>Hint 1</summary>

The removed point is the same in every member.

</details>
<details><summary>Hint 2</summary>

Restoring it recovers each original member uniquely.

</details>
<details><summary>Solution</summary>

If two reduced sets were equal, adjoining the common x would make their original sets equal. Thus removal is injective on this family. Each reduced set has size n−1, so the finite-size induction applies without losing cardinality.

</details>

### 3. The greedy exclusion bound {#combinatorial-set-theory-ex-3}

In the second Δ-system case, explain why fewer than κ candidates are forbidden at stage α<κ.

<details><summary>Hint 1</summary>

The union of earlier finite supports has size below κ.

</details>
<details><summary>Hint 2</summary>

Each point excludes fewer than κ family members, and κ is regular.

</details>
<details><summary>Solution</summary>

There are fewer than κ points in the previous union. For each, the family members containing it form a smaller family by the case assumption. The regular strict-union bound makes their combined excluded family smaller than κ. Some member of the original κ-sized family therefore remains available and disjoint.

</details>

### 4. A label obstruction {#combinatorial-set-theory-ex-4}

Give κ incompatible finite partial functions when κ labels are allowed at one fixed coordinate.

<details><summary>Hint 1</summary>

Use one singleton support for every condition.

</details>
<details><summary>Hint 2</summary>

Assign a distinct label to that shared coordinate.

</details>
<details><summary>Solution</summary>

For each η<κ take the function {(a,η)}. Two different such functions disagree at a and have no common function extension, so they form a κ-sized antichain. Their supports already form a Δ-system; the missing finite or smaller label-pattern bound is exactly why compatibility does not follow.

</details>

### 5. Ulam matrix disjointness {#combinatorial-set-theory-ex-5}

Why are the cells A at ξ,η disjoint for distinct ξ and one fixed η?

<details><summary>Hint 1</summary>

Assume one β belongs to two cells.

</details>
<details><summary>Hint 2</summary>

Its chosen map iᵦ is injective.

</details>
<details><summary>Solution</summary>

Membership would give iᵦ(ξ)=η=iᵦ(ξ') with ξ≠ξ', contrary to injectivity. This fixed-output disjointness is different from the fixed-input partition property; both are used in stationary splitting.

</details>

### 6. From disjoint pieces to a partition {#combinatorial-set-theory-ex-6}

Why can the uncovered remainder of S be added to one selected stationary cell?

<details><summary>Hint 1</summary>

It is disjoint from every selected cell by definition.

</details>
<details><summary>Hint 2</summary>

A superset of a stationary set is stationary.

</details>
<details><summary>Solution</summary>

The remainder contains only points outside all selected cells. Adding it to one preserves disjointness from the others and makes the union equal S. Every club still meets that enlarged cell because it already met its original stationary subset, so all pieces remain stationary.

</details>

### 7. Nested Ramsey tails {#combinatorial-set-theory-ex-7}

Which fact about later selected elements makes the minimum-element proof work?

<details><summary>Hint 1</summary>

Fix the earliest aₙ in one r-subset.

</details>
<details><summary>Hint 2</summary>

All remaining members must lie in the homogeneous tail chosen at stage n.

</details>
<details><summary>Solution</summary>

Nested construction ensures every later aₘ belongs to Bₙ. Thus the remaining r−1 elements form a subset to which the stage-n induced colouring is constant, giving colour dₙ. Independently chosen tails would not guarantee this membership and would leave the argument incomplete.

</details>

### 8. Finite branching matters {#combinatorial-set-theory-ex-8}

Give an infinite-branching tree of arbitrarily large finite height with no infinite branch.

<details><summary>Hint 1</summary>

Give the root one child for each natural n.

</details>
<details><summary>Hint 2</summary>

Let that child begin a chain of only length n.

</details>
<details><summary>Solution</summary>

Attach to the root disjoint finite chains of lengths one, two, three and so on. The tree has nodes at every finite depth, but every branch chooses one chain and terminates. Infinite branching prevents the inference that one child has descendants of unbounded height.

</details>

### 9. Uncountable homogeneous reals {#combinatorial-set-theory-ex-9}

Why is a strictly increasing sequence of reals of length ω₁ impossible?

<details><summary>Hint 1</summary>

Use the open interval between consecutive terms.

</details>
<details><summary>Hint 2</summary>

Choose the first rational from a fixed enumeration inside each interval.

</details>
<details><summary>Solution</summary>

The consecutive open intervals are pairwise disjoint and nonempty. Their selected rationals are therefore distinct, giving an injection from ω₁ many successor intervals into the countable rationals. This contradicts uncountability. The same argument works for a decreasing sequence with intervals reversed.

</details>

### 10. A finite existence conclusion {#combinatorial-set-theory-ex-10}

Does the compactness proof of finite Ramsey existence compute an exact Ramsey number?

<details><summary>Hint 1</summary>

Read what the contradiction establishes about N.

</details>
<details><summary>Hint 2</summary>

No quantitative estimate was assigned to the tree argument.

</details>
<details><summary>Solution</summary>

No. It proves that some finite N works, because failure at every N would produce an infinite counterexample. It neither identifies the least such N nor supplies a numerical upper bound. Those quantitative claims require additional arguments rather than a reinterpretation of the existence proof.

</details>

## Chapter summary

Finite-support families admit large Δ-systems under explicit cardinal hypotheses, and bounded root labels yield compatibility. An injection matrix partitions stationary subsets of a successor cardinal into many stationary pieces. Nested thinning proves infinite Ramsey, while a finite-branching argument proves finite existence. A real-order colouring prevents an automatic uncountable strengthening, keeping each homogeneity claim at its proved size.

## Sources

This chapter is new exposition in the combinatorial scope of Jech and Kunen. The Δ-system, successor stationary-splitting, infinite Ramsey and finite-existence arguments are supplied in full. Stronger partition relations, general regular-cardinal splitting, diamond and square principles require further hypotheses or proofs and are not silently included in these conclusions.
