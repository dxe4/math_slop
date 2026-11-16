
# Martin's Axiom and Iterated Forcing

Generic filters meet every dense set in a ground model from outside that model. A forcing axiom instead asks, inside one universe, for a filter meeting a specified bounded family of dense sets. The family bound is part of the statement. Iterations provide the mechanism for arranging many such requirements while controlling chain conditions and cardinal arithmetic.

We use ZFC and the truth, completion and c.c.c. preservation theorems of Chapters 6–7. The two-step and finite-support c.c.c. arguments are proved here. A bookkeeping construction is then carried out under an explicit ground cardinal-arithmetic hypothesis, with the appearance of names and the size of the forcing both accounted for. Proper forcing and stronger axioms have different preservation theorems and are not silently substituted into this finite-support argument.

## Which version of Martin's Axiom?

For an infinite cardinal μ, MA at μ says that for every c.c.c. poset P and every family of at most μ dense subsets of P, a filter meets every member of that family. Add a top element if necessary; its presence does not affect the dense-set problem. Full **MA** means MA at μ for every μ strictly below the continuum.

Full MA does not itself assert that the continuum exceeds aleph-one. Under CH its only infinite cardinal requirement is the countable case. In contrast, MA at omega-one implies ¬CH, as proved below. Writing MA when one means MA at omega-one changes a theorem's hypotheses. The retained frontier chapter uses further proper-forcing axioms with their own specified families and poset classes.

**Theorem 8.1 (Countable dense families).** Every poset admits a filter meeting any specified countable family of dense subsets.

*Proof.* Enumerate the family and recursively choose a descending sequence, taking the next condition in the next dense set below the previous condition. Its upward closure is directed because the later of two sequence members extends both, and it meets every listed dense set. With a top condition the sequence can begin there, or below any chosen starting condition. ∎

No c.c.c. hypothesis is needed for this countable result. It is the external generic construction when the family happens to list every dense set in a countable ground model. Within an arbitrary universe it does not supply a filter meeting an uncountable or proper-class collection of dense sets.

## MA at μ forces a continuum lower bound

**Theorem 8.2.** MA at μ implies that the continuum is greater than μ.

*Proof.* Suppose all binary reals could be listed as r at indices below μ, allowing repetition. Use the countable c.c.c. poset of finite partial binary functions on omega. Require the dense set deciding each coordinate, and for each listed real require the dense set of conditions disagreeing with it somewhere. There are at most μ requirements. MA supplies a filter meeting them all. Its union is a total binary sequence differing from every listed real, contradicting the enumeration. ∎

This does not say full MA always implies ¬CH: under CH the instance at omega-one is outside the quantifier μ<continuum in the definition of full MA. The countable case remains true, as it already follows from ZFC. Keeping that logical distinction prevents the lower-bound theorem from being applied to an instance that was never assumed.

## A tree consequence with its hypotheses visible

A normal omega-one tree has countable levels, predecessors well ordered by height, and extensions of each node to every higher level. A Suslin tree is such a tree with no uncountable chain and no uncountable antichain. Regard nodes as forcing conditions with higher extensions stronger.

**Theorem 8.3.** MA at omega-one rules out a normal Suslin tree.

*Proof.* Its absence of uncountable antichains makes this node poset c.c.c. For each α<omega-one, the nodes of height at least α form a dense set by normality. A filter meeting every one of these sets consists of mutually compatible nodes. In a tree two compatible nodes are comparable, since a common extension has a linearly ordered predecessor set. The filter is therefore a chain with unbounded heights, hence uncountable, contradicting the tree's definition. ∎

Normality supplied the dense levels. The proof is not a blanket statement about every partially ordered graph drawn with levels. Transforming arbitrary tree formulations into a normal equivalent requires its own reduction. We state the normal version exactly as used.

## Two-step forcing and factorisation

Let P force that the name Q is a poset with a top element. A two-step condition is (p,q), where p∈P and p forces q∈Q. It extends (p',q') when p≤p' and p forces q≤q'. This is naturally a preorder on names; identify mutually extending conditions to obtain a poset if required. Distinct names with the same forced value should not be treated as different observable Q-elements.

An iteration-generic filter projects to a P-generic G₀, and its second-coordinate values generate a Q evaluated at G₀ generic G₁ over M[G₀]. Projection meets a ground dense set by refining the first coordinate into it. For a named dense subset of Q, conditions forcing the second coordinate into that set are dense below any condition forcing its density. The witness-density clause from Chapter 6 supplies the necessary named refinement. Thus the projected second filter meets every such dense set.

Conversely, given those two generics, use all (p,q) with p∈G₀ and q evaluated at G₀ in G₁. Directedness follows by first finding a common second-coordinate extension in G₁ and then using truth in M[G₀] to refine a first-coordinate condition forcing that comparison. To see genericity, take a ground dense subset D of the iteration. In M[G₀] its quotient consists of values q for which some (p,q)∈D has p∈G₀. This quotient is dense: below a named Q-condition, projections of D-refinements are dense below the first condition validating that name, so G₀ meets them. Then G₁ meets the quotient, giving an iteration condition in D.

The extensions are equal: M[G₀][G₁]=M[G]. Both generic parameters can be recovered by their named projections from G, and conversely G is definable from G₀,G₁. A generic extension is the smallest transitive ZFC collection containing the ground objects and its generic parameter: any such collection evaluates every ground name by well-founded recursion. Applying that observation in both directions gives equality. This supplies the interpretation of two-step forcing rather than merely writing two generic symbols beside one another.

## The c.c.c. two-step theorem

**Theorem 8.4.** If P is c.c.c. and P forces Q c.c.c., then P followed by Q is c.c.c.

*Proof.* Suppose an omega-one indexed family (pₐ,qₐ) formed an iteration antichain. In a P-generic extension let A be the set of α for which pₐ belongs to the first generic. The values qₐ for α∈A are pairwise incompatible in Q. If two were compatible, a name for a common Q-extension and the truth theorem would give a first-coordinate condition in the generic forcing that compatibility; refine with pₐ and pᵦ to obtain an iteration common extension, contradicting the original antichain.

Since P preserves omega-one and forces Q c.c.c., it forces A countable. The countable possible-values theorem from Chapter 7 gives a single ground countable set C containing every possible member of A: enumerate the nonempty countable set A∪{0} by omega and union the countable coordinate lists. But each pₐ forces α∈A. Every α must therefore belong to C, contradicting uncountably many indices. Thus the iteration has no such antichain. ∎

The argument uses both the preservation of omega-one and the countable-cover bound. Saying that each first-coordinate family and each second-coordinate family is individually c.c.c. without relating their interpreted generics would leave the crucial compatibility step unproved.

## Finite-support iterations at limits

For an ordinal δ, a finite-support iteration condition is a finite function on coordinates below δ. At coordinate α its entry is a Pα-name for a Qα-condition, validated by the earlier prefix. Missing coordinates mean the named top condition. Extension compares entries using the earlier-prefix forcing relation. Restriction to an earlier stage remains a condition, and strengthening a prefix preserves validity of later entries by monotonicity of forcing.

**Theorem 8.5 (Finite-support c.c.c.).** If every stage forces its next poset c.c.c., every finite-support iteration stage is c.c.c.

*Proof.* Induct on the stage ordinal. Successors use Theorem 8.4. At a limit δ, suppose an uncountable family of conditions were an antichain. Thin its finite supports to an uncountable Δ-system with root R. Repeated supports cause no problem: if only finitely many coordinates occur in the entire uncountable family, restrict to a stage above them and use its c.c.c.; otherwise select an uncountable distinct-support subfamily, or apply the indexed Δ-system argument with its constant-support case. In either case obtain an uncountable family with pairwise support intersection R.

Choose γ<δ above every member of the finite root. The restrictions to γ lie in Pγ, which is c.c.c. by induction. Two have a common extension r there. Their tails above γ have disjoint supports. Amalgamate them over r, traversing the finite union of their tail coordinates in increasing order. At a coordinate belonging to one original condition, the combined earlier prefix extends that condition's earlier prefix by the induction on this finite list. Its original named entry is therefore still valid, and adding it preserves extension of both originals. No coordinate above γ needs two different entries because the tail supports are disjoint. The resulting condition extends both, contradicting the antichain. ∎

For clarity, the indexed Δ-system step can be justified without a multiplicity assumption. If some support occurs uncountably often, use that constant-support subfamily. Otherwise every support fiber is countable; uncountably many conditions then have uncountably many distinct supports, from which the ordinary lemma selects an uncountable root family. This is the exact dichotomy used above.

Finite support is part of the theorem. Countable-support iterations have other preservation properties and can fail this c.c.c. conclusion. Conversely proper forcing typically uses countable support and another theorem. Choosing a support rule is a mathematical decision, not an implementation option that leaves all preservation statements unchanged.

## Reducing dense-set problems to small posets

Suppose P is c.c.c. and a family Dᵢ of dense subsets is indexed by an infinite μ. Choose an elementary substructure N of a sufficiently large set structure containing P, its order and the dense-set sequence, with |N|=μ and every index i<μ in N. Then each Dᵢ belongs to N. Put R=P∩N with the induced order.

For p,q∈R, compatibility in P has a witness in N by elementarity, so compatibility agrees in R and P. Thus R remains c.c.c. Each Dᵢ∩N is dense in R: a P-extension in Dᵢ exists below any p∈R, and elementarity supplies one in N. A filter on R meeting those intersections generates a P-filter by upward closure and meets every Dᵢ. This proves that the MA at μ problem can be reduced to posets of size at most μ. Renaming their elements by an ordinal gives a coded small-poset problem.

The witness argument is necessary. An arbitrary induced subposet can turn formerly compatible conditions into incompatible ones by omitting their common extensions. Elementarity supplies precisely the missing witnesses, so c.c.c. is preserved in this reduction.

## Bookkeeping under an explicit cardinal bound

Assume a ground model satisfies ZFC and has a regular cardinal κ>omega-one with κ^{<κ}=κ, meaning that the supremum of κ to the powers λ<κ is κ. A GCH model with κ=omega-two is an example: κ=2 to the power omega-one, so currying bounds κ to the power λ by κ for every infinite λ≤omega-one, and there are no other infinite cardinal sizes below κ. We construct a finite-support c.c.c. iteration of length κ.

At each stage schedule either Cohen forcing or a named poset of size below κ with a named family of fewer than κ dense subsets. If the named data do not satisfy c.c.c., the prescribed domain or the density conditions, use the trivial poset on that branch. Otherwise use the scheduled poset. This conditional definition makes the next iterand forced c.c.c. globally; it does not assume a statement true in one generic branch was forced by the top condition.

There are at most κ tasks available from each earlier stage. A small poset and dense-family list are coded by fewer than κ bits on ordinals below κ. In a c.c.c. forcing, each bit has a countable deciding antichain. If a dense presentation of the current forcing has size at most κ, the number of such codes is at most κ to a power below κ, hence κ. The presentation bound is maintained: use a fixed ordinal below κ for each iterand's possible elements. Two-step conditions can be refined so that the next named element is a checked ordinal, by dense ordinal-value decisions. At a finite-support limit, recursively refine the prefix below the greatest support coordinate and then decide that last entry. This gives a dense presentation by finite functions from the stage ordinal into κ, of size at most κ.

Schedule every task from every earlier stage cofinally often. An explicit indexing is available: order triples (earlier-stage,task-index,repetition-index) from κ cubed by their maximum and then a fixed lexicographic tie rule. The infinite-square argument extends to finite powers, so every initial block has size below κ and the whole order has size and order type κ. Each fixed pair appears at arbitrarily late positions as the repetition index grows. Ignore an occurrence not yet later than its named earlier stage; cofinally many later occurrences remain. Insert Cohen stages cofinally as an additional finite task type. The recursion therefore knows the earlier enumeration whenever it uses one.

By Theorem 8.5 the whole iteration is c.c.c. and preserves cardinals and cofinalities. Its dense presentation has size at most κ, and κ to the power omega is κ, so nice real names number at most κ. Cofinally many Cohen stages add κ distinct reals, each new over the preceding model. Thus the final continuum is exactly κ.

## Why every final small requirement is eventually scheduled

Take a final c.c.c. poset of size μ<κ with a dense family of size ν<κ. Use the small-poset reduction when starting from a larger poset. Code the small poset's order and family on an ordinal below κ. The total number of bits is below κ, since finite products of μ and ν are below the regular κ. Give each bit a countable deciding antichain of finite-support conditions. The union of all their supports has size below κ and is bounded in κ by regularity.

Consequently the entire code already belongs to an intermediate extension at some stage α<κ: all deciding antichains use conditions from that bounded stage. Its order and dense sets are the same sets thereafter. Density is absolute for these fixed sets, because its quantifiers are bounded by the poset and the named dense subsets. It is c.c.c. at the intermediate stage: an earlier uncountable antichain would persist, with omega-one preserved by the remaining c.c.c. forcing, contradicting final c.c.c.

The code has a name among that stage's enumerated tasks. At a later occurrence of that task, its conditional validity test is satisfied along the actual generic branch, so the iteration forces with that poset and supplies a filter meeting all its listed dense sets. The filter remains such a filter in the final extension because its order, members and dense sets are unchanged. This proves MA at every μ<κ. Since final continuum is κ, it proves full MA.

We have therefore constructed, from the stated ground arithmetic, a c.c.c. extension satisfying MA and continuum κ. Chapter 5 supplies GCH models relatively, and the same finite-fragment reflection bridge as Chapter 7 translates the model presentation into the usual consistency statement for MA+¬CH from Con(ZFC). No stronger proper-forcing-axiom consistency is inferred from this finite-support construction. The bookkeeping and support bounds explain why the conclusion concerns all final small requirements, not merely those visible before the iteration began.

## Worked example 1: countably many requirements

For finite binary functions, list the dense sets deciding bits zero, one, two and so on. A descending construction can set each newly requested bit to zero and yields the all-zero sequence. Adding one further dense set requiring disagreement with that sequence forces a different finite choice at some fresh bit. A countable family can still be met by the same recursive method.

Trying to list every binary real as a countable family fails because there are uncountably many reals. MA at a larger cardinal adds a stronger filter assertion; Theorem 8.2 shows that the bound can never reach the actual continuum. A successful countable construction does not justify transfinite continuation with a lower bound at every limit stage.

## Worked example 2: why tail supports can be combined

Let the common root lie below γ. Suppose one condition has extra coordinates γ+2 and γ+7, while the other has γ+4. After choosing a common prefix at γ, process coordinates γ+2, γ+4, γ+7 in that order. At each coordinate use its sole owner's original name. The growing prefix extends that owner's old prefix, so its forcing validity persists.

If both tails had an extra common coordinate, two names might conflict there and this argument would fail. The Δ-system thinning and the choice of γ eliminate precisely that obstruction. The proof does not claim arbitrary union of iteration conditions is valid before those compatibility conditions are established.

## Worked example 3: MA and CH

Assume CH. Every infinite μ below the continuum is omega, and Theorem 8.1 proves MA at omega. Thus CH entails full MA under the definition used here. But MA at omega-one contradicts CH by Theorem 8.2.

There is no inconsistency in these statements: the first uses an instance bounded strictly below the continuum and the second explicitly assumes the instance at omega-one. The same three letters can conceal different bounds if notation is not fixed. Record the family cardinal and the forcing class whenever using a forcing axiom.

## Exercises with complete solutions

### 1. Countable dense recursion {#martins-axiom-iterations-ex-1}

Why does the upward closure of a descending sequence form a directed filter?

<details><summary>Hint 1</summary>

Every two chosen sequence members have a later common extension.

</details>
<details><summary>Hint 2</summary>

The same later member extends anything lying above those two members.

</details>
<details><summary>Solution</summary>

If p lies above the nth sequence condition and q above the mth, the condition at the larger index extends both sequence conditions and hence both p,q. Upward closure is built into the definition and the top belongs when present. Every listed dense set contains its corresponding sequence member, so the filter meets it.

</details>

### 2. MA's family bound {#martins-axiom-iterations-ex-2}

Why does full MA under CH not include MA at omega-one?

<details><summary>Hint 1</summary>

Its quantifier is μ strictly below the continuum.

</details>
<details><summary>Hint 2</summary>

Under CH, omega-one is the continuum itself.

</details>
<details><summary>Solution</summary>

CH identifies the continuum with aleph-one. Full MA then requires the infinite instance only at aleph-zero, not at the excluded endpoint aleph-one. That countable instance is already a ZFC theorem. MA at omega-one is a separate stronger statement and forces a larger continuum.

</details>

### 3. Normal tree density {#martins-axiom-iterations-ex-3}

Which tree condition makes the set of nodes above a chosen level dense?

<details><summary>Hint 1</summary>

Start at an arbitrary lower node.

</details>
<details><summary>Hint 2</summary>

It must have an extension to every later level.

</details>
<details><summary>Solution</summary>

Normality supplies the extension. If a node already lies at or above the requested level, it belongs to the dense set; otherwise normality extends it to that level. Without this property, a terminal branch could have no extension meeting the requirement and the forcing-axiom argument would fail.

</details>

### 4. A countable cover of indices {#martins-axiom-iterations-ex-4}

In the two-step c.c.c. proof, why is it contradictory that P forces A included in one ground countable C?

<details><summary>Hint 1</summary>

Each original condition pₐ forces its own index into A.

</details>
<details><summary>Hint 2</summary>

The index is a fixed checked ordinal.

</details>
<details><summary>Solution</summary>

For every α, the nonzero condition pₐ forces α∈A and hence α∈C. A checked ordinal's membership in the ground set C is already decided, so α must actually belong to C. This would place omega-one many distinct indices inside one countable ground set, impossible. The possible-values cover is the uniform bound needed for the contradiction.

</details>

### 5. Finite-support amalgamation {#martins-axiom-iterations-ex-5}

Why does strengthening an earlier prefix leave an original tail entry valid?

<details><summary>Hint 1</summary>

The original prefix forces that entry to belong to its iterand.

</details>
<details><summary>Hint 2</summary>

Forcing is monotone toward stronger conditions.

</details>
<details><summary>Solution</summary>

If the old prefix forces q∈Q, every stronger prefix does too. During the finite coordinate amalgamation the current prefix extends the corresponding original prefix, so its unchanged q-name remains a legitimate entry. Disjoint tail supports ensure that no second entry must be compared at the same coordinate.

</details>

### 6. An arbitrary subposet {#martins-axiom-iterations-ex-6}

Why is an elementary small subposet safer than merely taking a small subset of a c.c.c. poset?

<details><summary>Hint 1</summary>

Compatibility requires a common extension inside the subposet.

</details>
<details><summary>Hint 2</summary>

Elementarity preserves existence of that witness for retained parameters.

</details>
<details><summary>Solution</summary>

An arbitrary subset can omit every common extension of two retained compatible conditions and turn them into an incompatible pair. In P∩N, elementarity supplies a common extension in N whenever one exists in P for p,q∈N. Thus incompatibility agrees with P and c.c.c. is inherited. The same witness principle preserves density of the intersected dense sets.

</details>

### 7. Conditional iterands {#martins-axiom-iterations-ex-7}

Why use the trivial poset on branches where a scheduled code fails the required conditions?

<details><summary>Hint 1</summary>

One actual branch's validity need not be forced by the top.

</details>
<details><summary>Hint 2</summary>

The iteration theorem needs each iterand forced c.c.c. globally.

</details>
<details><summary>Solution</summary>

The conditional name denotes the intended poset only when it is a valid c.c.c. dense-set problem, and denotes a one-point c.c.c. poset otherwise. Hence every branch has a c.c.c. iterand, satisfying the preservation theorem. When a final requirement is valid in the actual intermediate branch, that branch uses the intended poset and obtains the desired filter.

</details>

### 8. Bounded appearance of a code {#martins-axiom-iterations-ex-8}

Why does a final small-poset/dense-family code appear before stage κ?

<details><summary>Hint 1</summary>

It uses fewer than κ bits and countable deciding antichains per bit.

</details>
<details><summary>Hint 2</summary>

Regularity bounds the union of their finite coordinate supports.

</details>
<details><summary>Solution</summary>

The union has cardinal below κ and hence is bounded in the regular κ. All conditions in the deciding antichains belong to that bounded initial iteration stage, so their decisions reconstruct the entire code there. Without regularity, a smaller set of coordinate supports might be cofinal and the bounded-stage conclusion would need another argument.

</details>

### 9. Earlier c.c.c. {#martins-axiom-iterations-ex-9}

If a fixed intermediate poset is c.c.c. in the final extension, why was it c.c.c. earlier?

<details><summary>Hint 1</summary>

An earlier antichain is still a set of the same incompatible conditions.

</details>
<details><summary>Hint 2</summary>

The remaining c.c.c. forcing preserves omega-one.

</details>
<details><summary>Solution</summary>

An earlier omega-one sized antichain would retain its distinct elements and pairwise incompatibility because the poset and order are fixed sets. Preservation of omega-one keeps it uncountable in the final extension, contradicting final c.c.c. This direction is enough for bookkeeping; the chapter does not assert that every earlier c.c.c. poset stays c.c.c. under arbitrary later forcing.

</details>

### 10. Why repeat tasks? {#martins-axiom-iterations-ex-10}

Why does scheduling each ground task only once at an early stage fail to establish final MA?

<details><summary>Hint 1</summary>

New names and dense-set codes appear during the iteration.

</details>
<details><summary>Hint 2</summary>

The relevant code may become available only after that early appointment.

</details>
<details><summary>Solution</summary>

A final small problem is shown to belong to some intermediate stage, not necessarily the original ground model. Its name enters that stage's task list. Cofinal repetition ensures a later appointment after the list and valid code are available. One early pass could miss every newly introduced problem and would prove only a narrower statement about the original tasks.

</details>

## Chapter summary

Forcing axioms name a poset class and a bound on dense requirements. Two-step factorisation and the full c.c.c. preservation argument extend through finite-support limits by Δ-system amalgamation. Small-poset reduction, named-code counts and bounded support justify a repeated bookkeeping construction giving MA with an explicitly chosen continuum under the stated ground arithmetic. Stronger support rules and proper-forcing axioms retain separate hypotheses and consistency strength.

## Sources

This chapter is new exposition in the forcing-axiom and iteration scope of Jech and Kunen. The countable recursion, continuum lower bound, normal-tree consequence, factorisation, two-step/finite-support c.c.c. proofs and bookkeeping bounds are supplied above. The relative-model interpretation uses the finite-fragment bridge proved in Chapter 7. No generic construction or code has been executed, and no PFA or Martin's Maximum consistency theorem is inferred from the c.c.c. iteration.
