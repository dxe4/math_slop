
# Stationary Sets, Club Filters and Fodor's Lemma

An unbounded set reaches arbitrarily high ordinals, but it may avoid a large closed structure altogether. Stationary sets are those that cannot avoid any closed unbounded set. Their interaction with regressive functions is the pressing-down principle: a function always pointing below its input must be constant on a stationary portion. The full proof uses a diagonal intersection, whose index bound is essential when ordinary intersections become too large.

Throughout this chapter κ is a regular uncountable cardinal and we work in ZFC. Regularity keeps suprema of fewer than κ earlier ordinals below κ. Uncountability keeps a countable increasing construction below κ. Both premises are used in the proofs, and the counterexamples below show why they should not disappear when a lemma is quoted.

## Closed and unbounded means two conditions

A set C⊆κ is unbounded if for every β<κ some γ∈C has β<γ. It is closed if whenever a nonzero limit δ<κ satisfies that C∩δ is unbounded in δ, then δ∈C. A set satisfying both conditions is called club. The closure condition is about limit points below κ, so it never requires κ itself to belong to C.

Equivalently, C contains the supremum of each nonempty increasing sequence of its elements whose length is less than κ and whose supremum is below κ, whenever that supremum is a genuine limit point. A sequence that becomes constant has its supremum already in C. The equivalence follows by taking cofinal sequences in a limit point and by inspecting the range of any increasing sequence. These qualifications avoid an accidental demand to include zero as the supremum of an empty sequence.

Every tail {α:β<α<κ} is club. It is unbounded since κ is a limit ordinal, and a limit of ordinals above β remains above β. The set of nonzero limit ordinals below κ is also club. For unboundedness, β+ω is a limit below κ after replacing it by a suitable countable increasing supremum; regular uncountability keeps that supremum below κ. A limit point of limit ordinals is again a nonzero limit ordinal, giving closure.

A set S⊆κ is stationary when it intersects every club subset of κ. It is nonstationary when some club avoids it. A bounded set is nonstationary because a tail above its bound is disjoint. Therefore every stationary set is unbounded. The converse is false: the successor ordinals are unbounded but avoid the club of nonzero limits.

## Intersections shorter than κ

**Theorem 3.1.** The intersection of fewer than κ club subsets of κ is club.

*Proof.* Closure is immediate: a common limit point in the intersection is a limit point of each component club and belongs to each. For unboundedness, let the clubs be Cᵢ for i<λ, with λ<κ, and fix an initial bound β. If the family is empty its intersection is all κ. Otherwise start above β at β₀.

For each n and every i<λ choose a point cₙ,ᵢ∈Cᵢ above βₙ. There are fewer than κ such choices, so regularity puts the supremum of their successors below κ. Choose βₙ₊₁ at or above that supremum and strictly above βₙ. Then δ=supₙβₙ is below κ by regular uncountability and exceeds the starting bound. For each fixed i, the points cₙ,ᵢ lie below δ and are cofinal in δ, because cₙ,ᵢ>βₙ. Closure of Cᵢ gives δ∈Cᵢ. Thus δ belongs to every club and proves unboundedness of the intersection. ∎

Only the chosen points cₙ,ᵢ need to lie in their respective clubs; the intermediate βₙ need not already belong to all clubs. This makes the simultaneous construction explicit and avoids assuming its own conclusion. Choice selects the points, though least points could equally be used since ordinals are well ordered. The strict bound λ<κ is what makes each round stay below κ.

The **club filter** consists of all supersets of clubs. It is proper because clubs are nonempty and their finite intersections are club. The theorem makes it κ-complete: an intersection of fewer than κ filter members contains the intersection of their witnessing clubs. Its dual nonstationary ideal is closed under unions of fewer than κ nonstationary sets. If Cᵢ avoids Sᵢ, their club intersection avoids the union. In particular, a stationary set cannot be a union of fewer than κ nonstationary sets.

Stationary sets themselves are the positive sets for this ideal, not the members of the club filter. Two stationary sets can be disjoint, as later examples show. Treating stationary as a synonym for containing a club would give an incorrect intersection rule.

## The diagonal intersection theorem

For a κ-indexed sequence of clubs define its diagonal intersection by

$$\Delta_{i<\kappa}C_i=\{\delta<\kappa:\text{ for every }i<\delta,\ \delta\in C_i\}.$$

At δ only the earlier-indexed clubs are demanded. That is a different set from the ordinary intersection over all κ indices.

**Theorem 3.2.** The diagonal intersection of a κ-sequence of clubs is club.

*Proof, closure.* Suppose δ<κ is a nonzero limit point of the diagonal intersection. Fix i<δ. Diagonal members below δ that exceed i are cofinal in δ; each lies in Cᵢ by its index condition. Closure of Cᵢ gives δ∈Cᵢ. Since this holds for every i<δ, δ belongs to the diagonal intersection.

*Proof, unboundedness.* Given β<κ, choose β₀>β. Recursively choose βₙ₊₁ above βₙ in the intersection of Cᵢ for i≤βₙ. This family has cardinal less than κ, so Theorem 3.1 makes its intersection club and supplies the next point. Let δ=supₙβₙ<κ. For each i<δ choose n with i≤βₙ. Every later βₘ with m>n belongs to Cᵢ, so these points are cofinal in δ. Closure gives δ∈Cᵢ. Thus δ lies in every required earlier club and belongs to the diagonal intersection above β. ∎

The construction uses an ordinary intersection only at a stage where its index set is bounded below κ. It never asserts that the ordinary intersection of κ clubs is unbounded. Diagonalisation arranges that every fixed index is eventually included, while the final ordinal need not satisfy requirements indexed at or above itself.

## Fodor's pressing-down lemma proved

A function f on S⊆κ is regressive if f(α)<α for every nonzero α∈S. To avoid a vacuous exceptional point, assume S contains no zero in the theorem. Removing zero from a stationary set preserves stationarity because it removes only a bounded set.

**Theorem 3.3 (Fodor).** If S⊆κ is stationary and f:S→κ is regressive, then some fiber {α∈S:f(α)=i} is stationary.

*Proof.* Suppose every fiber were nonstationary. For each i<κ choose a club Cᵢ disjoint from the ith fiber. Theorem 3.2 makes their diagonal intersection D club. Choose α∈S∩D by stationarity. Regressiveness gives f(α)<α, so the defining requirement of D puts α in C at index f(α). But α belongs to exactly that fiber, which C at that index was chosen to avoid. This contradiction proves that at least one fiber is stationary. ∎

The contradiction uses the strict inequality f(α)<α to activate a club whose index is demanded at α. Without it, the diagonal intersection would not force membership in that particular club. The conclusion is constancy on a stationary subset, not on a tail or on the entire original set. A fiber may be stationary while its complement is also stationary.

One normality formulation of the nonstationary ideal follows from the same proof. Given nonstationary sets Nᵢ for i<κ, their diagonal union is the set of α for which some i<α has α∈Nᵢ. Choose avoiding clubs and form their diagonal intersection. No member of that club belongs to the diagonal union, so the union is nonstationary. This is stronger than closure under fewer than κ ordinary unions and has a different index restriction.

## Stationary sets of prescribed cofinality

For an infinite regular cardinal λ<κ, put S at λ in κ equal to {δ<κ:cf(δ)=λ}.

**Theorem 3.4.** This cofinality class is stationary.

*Proof.* Fix any club C⊆κ. Build a strictly increasing sequence of C-points of length λ, taking an upper C-point at each successor and a limit at nonzero limit stages. Each intermediate supremum remains below κ because the sequence length is below κ; closure of C supplies its limit stages. Let δ be the supremum of the entire sequence. Again δ<κ, and closure gives δ∈C.

The sequence is cofinal in δ, so cf(δ)≤λ. If δ had a cofinal set of size μ<λ, choose for each of its members an index in the increasing sequence above it. Regularity of λ bounds those μ indices below some index ξ<λ. The sequence value at ξ, or a later one, would then bound the alleged cofinal set below δ, impossible. Thus cf(δ)=λ. We have found a member of C in the specified class, proving stationarity. ∎

When λ=ω there are no nonzero limit stages below λ beyond the finite construction; its final countable supremum provides the required limit. The same proof includes that case. When κ=ω₁, every nonzero countable limit ordinal has cofinality ω, so the cofinality-omega class contains the club of nonzero limits. At larger κ there can be several disjoint stationary cofinality classes.

The proof does not assert stationarity for singular λ: a cofinality value is regular by Chapter 2. Nor does it apply to λ=κ, because then the final supremum construction may reach κ itself instead of an ordinal below it. These are actual limits of the statement, not missing routine cases.

## Worked example 1: unbounded but nonstationary

At ω₁ let S be all successor ordinals. It is unbounded, because above every countable ordinal there is another countable successor. The club of nonzero countable limits avoids it, so it is nonstationary.

Define f(β+1)=β. This is regressive on S and every fiber has at most one point, hence is bounded and nonstationary. The example does not contradict Fodor because its domain fails stationarity. Unboundedness alone is too weak for the pressing-down conclusion, even when regularity and uncountability of the ambient cardinal hold.

## Worked example 2: ordinary and diagonal intersections

Let Cᵢ={δ<κ:i<δ}. Every Cᵢ is a club tail. Their ordinary intersection is empty: a proposed δ fails the requirement from i=δ. Their diagonal intersection is all κ, since every i<δ automatically satisfies i<δ; zero satisfies the empty collection of requirements too.

This calculation shows why Theorem 3.2 is compatible with the strict intersection bound in Theorem 3.1. The two operations have different quantifiers. An argument that quietly replaces the diagonal intersection by the ordinary one would turn a correct club theorem into the false assertion that this empty set is club.

## Worked example 3: disjoint stationary sets

At κ=ω₂, the cofinality-omega and cofinality-omega-one classes are stationary by Theorem 3.4, using regularity of both smaller cardinals. They are disjoint because an ordinal has one cofinality. Thus the intersection of two stationary sets can be empty.

Neither can contain a club: such a club would have to meet the other stationary set, contradicting disjointness. The example separates stationary positivity from club-filter membership without relying on an unproved stationary-splitting theorem. That stronger combinatorial theme belongs to the next chapter.

## Why the ambient hypotheses matter

At ω the closure condition imposes no requirements at nonzero limit ordinals below ω, so clubs are exactly unbounded subsets, equivalently infinite subsets. Stationary subsets are therefore cofinite: if the complement were infinite, it would be an avoiding club, and if the complement is finite every infinite set meets the subset.

On the positive naturals take f(n)=n−1. Its domain is stationary under this convention, it is regressive, and each singleton fiber is nonstationary. Thus the uncountability hypothesis in Fodor cannot be dropped. The diagonal-club construction would require the supremum of a countable sequence to remain below ω, which is precisely where its proof breaks.

For the regressive hypothesis, the identity function on a stationary subset of uncountable κ has only singleton fibers and no stationary constant part. For the stationary-domain hypothesis, the successor example already gives a regressive counterexample. In each case a definite missing premise explains the failure. It is more informative than a general warning that infinite arguments can be subtle.

Stationary reflection asks whether a stationary subset of κ remains stationary when restricted to some smaller ordinal with suitable uncountable cofinality. That is an additional property, not a consequence of its definition. Forcing can change stationary subsets or their reflection patterns, and later preservation arguments must name which stationary sets and which cardinal/cofinality structure they preserve.

## Exercises with complete solutions

### 1. A bounded domain {#stationary-club-fodor-ex-1}

Prove that every bounded subset of κ is nonstationary.

<details><summary>Hint 1</summary>

Find a club entirely above its bound.

</details>
<details><summary>Hint 2</summary>

Use a tail and check both club conditions.

</details>
<details><summary>Solution</summary>

If S lies below or at β<κ, the tail {α:β<α<κ} is unbounded and closed at its internal limit points. It is disjoint from S, so witnesses nonstationarity. Consequently a stationary subset cannot be bounded.

</details>

### 2. Removing a small set {#stationary-club-fodor-ex-2}

If S is stationary and B has cardinal less than κ, show S without B is stationary.

<details><summary>Hint 1</summary>

Regularity bounds B below κ.

</details>
<details><summary>Hint 2</summary>

Intersect an arbitrary club with a tail avoiding B.

</details>
<details><summary>Solution</summary>

Regularity gives a bound β for B. For any club C, its intersection with the tail above β is club by Theorem 3.1. Stationarity of S supplies a point there, which lies outside B and in C. Hence S without B meets every club.

</details>

### 3. Closure of the diagonal set {#stationary-club-fodor-ex-3}

Why does a limit point δ of a diagonal intersection belong to each Cᵢ with i<δ?

<details><summary>Hint 1</summary>

Ignore diagonal points at or below i.

</details>
<details><summary>Hint 2</summary>

The remaining diagonal points are still cofinal in δ.

</details>
<details><summary>Solution</summary>

For fixed i<δ, cofinally many diagonal members γ below δ exceed i. Their definition gives γ∈Cᵢ. Thus δ is a limit point of Cᵢ and closure yields δ∈Cᵢ. Since i was arbitrary below δ, all required memberships hold.

</details>

### 4. The critical pressing-down step {#stationary-club-fodor-ex-4}

Locate the exact use of f(α)<α in Fodor's proof.

<details><summary>Hint 1</summary>

Read which clubs diagonal membership demands.

</details>
<details><summary>Hint 2</summary>

The relevant club is indexed by the output value.

</details>
<details><summary>Solution</summary>

At α in the diagonal club, membership in Cᵢ is guaranteed only for i<α. Regressiveness puts i=f(α) in that range. Hence α belongs to the club avoiding its own fiber, a contradiction. Without the inequality that club need not be among the requirements.

</details>

### 5. A short union {#stationary-club-fodor-ex-5}

Show that a stationary S cannot be covered by λ<κ nonstationary sets.

<details><summary>Hint 1</summary>

Choose a club avoiding each covering set.

</details>
<details><summary>Hint 2</summary>

Their intersection remains club.

</details>
<details><summary>Solution</summary>

The intersection of the avoiding clubs is club by Theorem 3.1 and avoids their union. If that union covered S, it would be a club disjoint from S, contradicting stationarity. The same argument proves the nonstationary ideal's closure under fewer than κ unions.

</details>

### 6. Two stationary sets {#stationary-club-fodor-ex-6}

Must two stationary subsets of ω₂ intersect?

<details><summary>Hint 1</summary>

Use different regular cofinality values below ω₂.

</details>
<details><summary>Hint 2</summary>

An ordinal cannot have both cofinality ω and cofinality ω₁.

</details>
<details><summary>Solution</summary>

No. The sets of ordinals of cofinality ω and of cofinality ω₁ are each stationary by Theorem 3.4 and are disjoint. Stationary sets are not closed under finite intersection, unlike the members of the club filter.

</details>

### 7. A singular cofinality label {#stationary-club-fodor-ex-7}

Can an ordinal have cofinality aleph-omega?

<details><summary>Hint 1</summary>

Apply the regularity theorem for cofinality values.

</details>
<details><summary>Hint 2</summary>

Aleph-omega has a countable cofinal sequence.

</details>
<details><summary>Solution</summary>

No. Every infinite cofinality value is regular, while aleph-omega is singular with cofinality omega. Therefore the corresponding purported cofinality class is empty, not stationary. The regularity hypothesis on λ in Theorem 3.4 cannot be omitted.

</details>

### 8. The countable counterexample {#stationary-club-fodor-ex-8}

Explain why positive naturals with f(n)=n−1 violate a countable version of Fodor.

<details><summary>Hint 1</summary>

At ω, stationary sets are cofinite under these definitions.

</details>
<details><summary>Hint 2</summary>

Every fiber of the function is finite.

</details>
<details><summary>Solution</summary>

The positive naturals are cofinite and stationary. The function is regressive there, but each fiber is a singleton, avoided by an infinite club tail. Thus no fiber is stationary. The uncountability assumption fails, and a countable increasing construction need not have its supremum below ω.

</details>

### 9. Diagonal union normality {#stationary-club-fodor-ex-9}

Prove that the diagonal union of κ nonstationary sets is nonstationary.

<details><summary>Hint 1</summary>

Choose avoiding clubs Cᵢ.

</details>
<details><summary>Hint 2</summary>

Their diagonal intersection avoids every earlier-index witness.

</details>
<details><summary>Solution</summary>

If α lies in the diagonal club, then α∈Cᵢ for every i<α. Since Cᵢ avoids Nᵢ, there is no i<α with α∈Nᵢ. Thus the diagonal club is disjoint from the diagonal union, witnessing its nonstationarity. The index restriction is essential to this argument.

</details>

### 10. Stationary size {#stationary-club-fodor-ex-10}

Show that every stationary subset of κ has cardinal κ.

<details><summary>Hint 1</summary>

A smaller subset is bounded by regularity.

</details>
<details><summary>Hint 2</summary>

Bounded subsets miss a club tail.

</details>
<details><summary>Solution</summary>

If |S|<κ, regularity makes sup S<κ. A tail above that supremum is club and disjoint from S, contradicting stationarity. Since S⊆κ gives |S|≤κ, its cardinal must therefore equal κ. This conclusion uses regularity as well as stationarity.

</details>

## Chapter summary

Clubs are closed unbounded sets on a regular uncountable cardinal. Fewer than κ clubs have a club intersection, while a κ-sequence needs diagonal intersection. That theorem proves Fodor's stationary-fiber result and normality of the nonstationary ideal. Cofinality classes supply stationary examples and show why stationarity differs from containing a club. Each hypothesis has an explicit role and counterexample boundary.

## Sources

This chapter is new exposition in the Jech/Kunen stationary-set scope. The intersection, diagonal, pressing-down and cofinality-class proofs are supplied in full. Stationary reflection and stronger splitting principles are identified as further topics rather than deduced from these elementary facts.
