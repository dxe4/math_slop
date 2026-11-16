var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: abstract-interpretation
title: "Abstract Interpretation"
level: graduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Abstract Interpretation

A programme can have infinitely many integer states even when its text is finite. Abstract interpretation replaces sets of concrete states by tractable descriptions and proves that the descriptions overapproximate every reachable state. An abstract result is useful because of that inclusion theorem. It does not need to enumerate every execution, and it must never discard a real execution merely to obtain an attractive answer.

## Collecting semantics

Let S be the concrete configurations of a transition system, I⊆S its initial states, and post(X) the set of all one-step successors of states in X. Define F(X)=I∪post(X). The powerset of S is ordered by inclusion, with bottom the empty set and joins given by unions.

The collecting reachable set is the least fixed point of F. To see this directly, start at X₀=∅ and put Xₖ₊₁=F(Xₖ). Induction gives that Xₖ consists of states reachable in fewer than k transitions, with the indexing adjusted so X₁=I. Taking the union over natural k therefore gives exactly the states reachable by finite paths. Post preserves arbitrary unions: a successor of an element of a union already comes from one member set. Thus F preserves increasing-chain unions, and its union of iterates is fixed. Every set containing I and closed under successors contains each iterate by induction, proving leastness.

For safety, it is enough to find any set C with I⊆C and post(C)⊆C, then show C avoids bad states. Exact equality with the least reachable set is unnecessary. The flexibility to use a larger inductive set is the basis of invariant generation. A large set can still be unhelpful because it includes bad states that are actually unreachable.

## Abstract domains and a Galois connection

An abstract domain A is ordered by precision: a≤b means a describes no more concrete states than b. A concretization γ maps an abstract element to its represented state set. Assume complete lattices and an abstraction α such that

α(X)≤a if and only if X⊆γ(a).

This equivalence is a Galois connection. It implies both maps are monotone. For α, if X⊆Y, then Y⊆γ(α(Y)) by the equivalence with reflexivity, so X⊆γ(α(Y)) and hence α(X)≤α(Y). The proof for γ uses α(γ(a))≤a and transitivity. The same substitutions give extensiveness X⊆γ(α(X)) and reductiveness α(γ(a))≤a.

The abstraction therefore never loses concrete members when converted back. Abstract elements need not all have unique concretizations, and a Galois connection need not be a Galois insertion. If α∘γ is identity, the stronger insertion property removes that particular redundancy. None of the soundness proofs below needs to assume it silently.

Define the best correct abstract transformer Fᵇ=α∘F∘γ. An implementable transformer F♯ is sound if Fᵇ(a)≤F♯(a), equivalently F(γ(a))⊆γ(F♯(a)). This equivalence follows directly from the connection. Being best correct in a chosen domain still does not mean that its fixed point equals the abstraction of the concrete least fixed point: repeated approximation can lose correlations at intermediate steps.

## The invariant theorem

**Theorem 9.1 (Abstract inductive safety).** If F♯ is sound and a satisfies F♯(a)≤a, then every concrete reachable state belongs to γ(a).

*Proof.* Soundness gives F(γ(a))⊆γ(F♯(a)). Monotonicity of γ and the assumed inequality give γ(F♯(a))⊆γ(a). Thus F(γ(a))⊆γ(a). Since F includes I, the set γ(a) contains all initial states and is closed under successors. The collecting-semantics induction above therefore gives Reach⊆γ(a). ∎

Consequently, if γ(a) contains no bad state, the programme is safe for the specified transition system and initial set. If γ(a) contains a bad state, the theorem says only that this analysis has not proved safety. The bad state can be spurious. Finding a concrete path to it requires a separate witness argument.

Another useful proof proceeds by paired iterates. From bottom, soundness and monotonicity show each concrete iterate is contained in the concretization of the corresponding abstract iterate. A stationary abstract iterate is then a postfixed invariant covering every finite concrete prefix. The direct theorem above is stronger for practical purposes because it accepts any certified postfixed candidate, including one produced by widening, guessing or a human annotation.

## The interval domain

For a single integer variable, an interval is bottom or [ℓ,u], where endpoints can include minus or plus infinity and finite endpoints are integers. Its concretization is all integers between its bounds; bottom represents the empty set. Order is inclusion of represented sets. The abstraction of a nonempty set is its least enclosing interval, using an infinite bound when unbounded. These definitions satisfy the Galois equivalence because a set lies in an interval exactly when its least enclosing interval does.

Interval addition maps [a,b]+[c,d] to [a+c,b+d], with the expected rules for unbounded endpoints. If x lies in the first interval and y in the second, order preservation of integer addition gives a+c≤x+y≤b+d. This proves soundness; it does not require the intervals to enumerate all possible pairs from a correlated programme state. The product domain for several variables concretizes to the Cartesian product of their intervals, so it forgets relations between variables.

A guard x≤k can filter x's interval by intersection with [−∞,k]; its false branch filters by [k+1,∞] over integers. An empty intersection becomes bottom. These filters are exact for one such comparison but do not make every compound branch condition exact. Expression dependencies can already have been lost before the filter is applied.

## Worked example 1: a bounded counter

Consider x:=0; while x<10 do x:=x+1. At the loop head the exact reachable x values are 0 through 10. Starting the head interval at bottom and joining initial zero with the body successors yields [0,0], [0,1], [0,2] and so on until [0,10]. The true guard filters the head to [0,9], increment gives [1,10], and joining the initial zero returns [0,10]. This is a postfixed interval.

At exit, filtering by x≥10 gives [10,10]. Theorem 9.1 therefore proves that any terminating exit has x=10, and a separate natural-number variant 10−x proves termination. The interval invariant itself supplies a partial-correctness safety fact; it does not magically turn every abstract fixed point into a total-correctness proof.

The step-by-step convergence here is finite because the concrete guard provides a finite bound and the chosen transfer retains it. It is not a general finite-height property of intervals. Removing the guard bound gives the increasing chain [0,0]≤[0,1]≤[0,2]≤⋯ with no finite stationary point.

## Widening forces an extrapolation

A widening ▽ has two roles: a▽b is above both a and b, and the widened iteration used by the analysis eventually stabilizes under its specified iteration policy. For intervals, one standard widening keeps an old lower bound when the new bound does not move below it, otherwise changes it to minus infinity; it keeps an old upper bound when the new bound does not move above it, otherwise changes it to plus infinity. Bottom acts as the initial identity case.

Each endpoint can change from its initial finite value to its corresponding infinity at most once. Therefore the usual iteration aₖ₊₁=aₖ▽F♯(aₖ), after its first nonbottom element, changes each of finitely many variable bounds at most once. This proves finite stabilization for a finite product of intervals under this policy. An arbitrary operator called widening without a stabilization property would not establish termination of the analysis.

At stationarity a=a▽F♯(a), and the upper-bound property yields F♯(a)≤a. Theorem 9.1 applies even though the result may be much less precise than the least abstract fixed point. The proof separates two obligations: stabilization makes the analysis finish, while sound transfer plus the postfixed inequality makes its returned invariant safe.

## Worked example 2: widening loses and narrowing recovers a bound

In the bounded counter example, a rapid widened sequence can move from [0,0] to [0,+∞] as soon as the upper bound increases. It is already postfixed: the guard filters a possible iteration to [0,9], so its successor is [1,10], and joining zero gives [0,10]⊆[0,+∞]. The widened exit says only x≥10.

A narrowing refinement can replace the invariant by F♯([0,+∞])=[0,10]. This is still postfixed and now recovers exit x=10. Why is this particular replacement safe? Monotonicity gives F♯(F♯(a))≤F♯(a) whenever F♯(a)≤a. Thus taking one exact abstract-transformer step downward from a postfixed a remains postfixed. A finite number of such descending steps preserves the safety theorem.

An arbitrary descending guess does not have that property. Replacing [0,+∞] by [0,5] excludes reachable head state six and is not postfixed because its body can produce six. A narrowing implementation must maintain a sufficient postfixed condition or re-establish one before publishing the result. Infinite descending precision chains can also occur in abstract domains, so narrowing termination needs its own policy; widening's earlier termination theorem does not automatically cover it.

## Relational precision and spurious alarms

Consider x:=0; y:=0; then nondeterministically either increment both variables once or leave both unchanged. The possible pairs are (0,0) and (1,1). Product intervals give x∈[0,1] and y∈[0,1], which also describe (0,1) and (1,0). Subtracting intervals therefore yields x−y∈[−1,1], although every real execution has x−y=0.

A relational domain can retain the equality x=y, perhaps with bounds on x. Its concretization excludes the unequal pairs. More precision has a cost: the domain and its transfer operations become more complex. Combining domains through a reduced product can communicate information, but a reduction must preserve the represented concrete intersection rather than delete genuine states to make the components agree.

## Worked example 3: an infeasible path

After the correlated assignment above, inspect if x≠y then error else skip. Product intervals leave the error branch possible, so this analysis reports an alarm. The two concrete cases both have equality, proving the branch unreachable. A relational invariant x=y removes the alarm without changing the programme.

The alarm was not a concrete counterexample. It identified a possible path in an overapproximation. To refine it, locate the lost relation, enrich the abstraction or its path sensitivity, and prove the revised transformer sound. Merely suppressing the warning at that location would remove an observation from the analysis interface while leaving the mathematical question unresolved.

## Control flow and implementation boundaries

For a finite control-flow graph, assign one abstract element to each node. Each edge has a sound abstract transformer. A node's equation joins incoming edge results and the initial element if appropriate. A simultaneous postfixed solution makes every edge preserve the concretized node assertions; induction on path length then proves that each concrete node visit satisfies its node's assertion.

Widening need only be placed so that relevant cycles cannot produce endless growth under the chosen worklist policy; a fully general termination theorem must state that placement and scheduling policy. Finite-domain analyses can instead iterate to a fixed point without widening. Neither approach justifies silently interpreting mathematical integer bounds as machine arithmetic bounds. Overflow, exceptions, calls and heap aliasing need their own sound transfers.

The analysis result can be accompanied by a small invariant certificate: abstract assertions at nodes and obligations that every edge maps its source below its target. Checking these obligations can be simpler than trusting the heuristic that found the assertions. The certificate still depends on correct concrete semantics, abstraction interpretation and obligation checking. Proof-producing analysis changes that trust structure; it does not remove the model-to-programme boundary.

## Why the best transformer is best in its domain

Fix an abstract input a. Any sound result b for that input must satisfy F(γ(a))⊆γ(b). By the Galois equivalence, this is precisely α(F(γ(a)))≤b. Thus Fᵇ(a) is below every sound abstract result. This proves its optimality among results representable in the chosen domain. It says nothing about the relative cost of computing that result, nor does it imply that an arbitrary implementation of interval arithmetic achieves it.

For example, from x∈[0,1], the concrete expression x−x always returns zero. Its best interval result is [0,0]. Evaluating the two occurrences independently by interval subtraction gives [−1,1]. This is sound, because it contains zero, but it is not best. The loss occurs inside the expression transformer, before any control-flow join. Rewriting the pure integer expression to zero recovers precision, provided the rewrite itself is valid for the actual arithmetic and effects.

This distinction separates domain precision from transformer precision. A relational domain can represent more facts than independent intervals, but a poor transformer may still fail to retain representable facts. Conversely an optimal transformer in a coarse domain cannot represent a nonconvex set such as {0,2} without also including one when the only available one-variable elements are intervals. Both choices affect the analysis, and only soundness is mandatory for the basic safety theorem.

## Abstraction commutes with joins in one direction exactly

The left adjoint α preserves arbitrary joins. For a family of concrete sets Xᵢ, an abstract element a is above α(⋃Xᵢ) exactly when ⋃Xᵢ⊆γ(a), exactly when every Xᵢ⊆γ(a), and therefore exactly when every α(Xᵢ)≤a. These are the same upper bounds as those of the abstract join of the α(Xᵢ), proving equality by the least-upper-bound property.

Concretization generally does not preserve those joins as concrete unions. For intervals, joining [0,0] and [2,2] gives [0,2], whose concretization contains one although neither input did. Confusing these two statements would incorrectly claim that merging two analysis paths never introduces states. The Galois connection carefully distinguishes abstraction of a union from concretization of an abstract join.

## A reduced product must preserve represented states

Suppose one analysis component describes an interval and another describes parity. Their product concretization is the intersection of the two component concretizations. An element ([0,3],even) represents {0,2}. A sound precision reduction may tighten the interval to [0,2], retaining the same represented intersection. Reducing it to [0,0] would delete possible value two and would be unsound unless another premise had already ruled two out.

Formally a reduction r on this product should satisfy r(a)≤a and γ(r(a))=γ(a). The inequality improves or retains abstract precision, while the equality ensures that no represented concrete member disappears. Iterating compatible reductions can transfer information between components, but their convergence is a separate algorithmic question. A reduced transfer obtained by applying such a reduction after a sound product transfer remains sound because its concretization is unchanged.

For ([1,1],even), the intersection is empty, so a reduction to bottom is sound. That is a proof of incompatibility between the two facts, not permission to discard a nonempty intersection merely because a component cannot express it exactly. The product interpretation determines which reductions are justified.

## Discovery and certification can be separated

A heuristic may propose node intervals, widen at loop heads, consult a solver or retain a user's annotation. None of those discovery methods needs to be trusted if the returned assertions are independently justified by initial coverage and every edge obligation. The checker must still interpret abstract bounds and concrete edge semantics correctly. A string comparison of two printed intervals is not a substitute for that interpretation.

The advantage is mathematical modularity: an elaborate search can fail, time out or propose an invalid candidate without invalidating the certificate theorem. Invalid candidates are rejected because at least one initial or edge implication is false. A successful certificate proves coverage of all finite paths under the stated semantics, even if the candidate was discovered by an incomplete method. This is the same producer/checker separation later used for SAT and refinement evidence.

## Exercises with complete solutions

### 1. Reachability closure {#abstract-interpretation-ex-1}

If I⊆C and post(C)⊆C, prove Reach⊆C.

<details><summary>Hint 1</summary>

Induct on a finite path from I.

</details>
<details><summary>Hint 2</summary>

Use closure only at its final edge.

</details>
<details><summary>Solution</summary>

A zero-edge path ends in I and hence C. If a k-edge endpoint is in C, its next successor lies in post(C)⊆C. Thus every finite reachable endpoint lies in C. Taking all lengths gives Reach⊆C.

</details>

### 2. Extensiveness {#abstract-interpretation-ex-2}

Derive X⊆γ(α(X)) from the Galois equivalence.

<details><summary>Hint 1</summary>

Choose the abstract element α(X).

</details>
<details><summary>Hint 2</summary>

Its reflexive inequality is one side of the equivalence.

</details>
<details><summary>Solution</summary>

The inequality α(X)≤α(X) is reflexive. Substituting a=α(X) in the equivalence gives exactly X⊆γ(α(X)). This is why concretizing an abstraction cannot discard members of X.

</details>

### 3. Interval join {#abstract-interpretation-ex-3}

Find the least interval containing [−2,3] and [5,8].

<details><summary>Hint 1</summary>

An upper bound must include the extreme endpoints.

</details>
<details><summary>Hint 2</summary>

Intervals cannot leave a hole between three and five.

</details>
<details><summary>Solution</summary>

The join is [−2,8]. Any interval containing both includes −2 and 8 and therefore every integer between them. The join also includes four, which belonged to neither input; that is a representational loss of precision, not an unsound exclusion.

</details>

### 4. Guard filtering {#abstract-interpretation-ex-4}

Filter x∈[−3,7] by x<2 over integers, then abstract x:=x+4.

<details><summary>Hint 1</summary>

Translate strict inequality into an inclusive integer upper bound.

</details>
<details><summary>Hint 2</summary>

Shift both surviving endpoints by four.

</details>
<details><summary>Solution</summary>

The guard leaves [−3,1]. Addition gives [1,5]. Every concrete surviving integer shifts into this interval, and every integer there arises from one in the filtered interval in this simple example.

</details>

### 5. A widening step {#abstract-interpretation-ex-5}

Apply the stated interval widening to old [0,4] and new [−1,6].

<details><summary>Hint 1</summary>

Both bounds move outwards.

</details>
<details><summary>Hint 2</summary>

Each changed bound is replaced by its corresponding infinity.

</details>
<details><summary>Solution</summary>

The result is [−∞,+∞]. The new lower bound lies below zero and the new upper bound above four, so both are extrapolated. The result contains both inputs, but precision is substantially reduced.

</details>

### 6. Stationarity and safety {#abstract-interpretation-ex-6}

Why does a=a▽F♯(a) imply a is an inductive abstract invariant?

<details><summary>Hint 1</summary>

Use the upper-bound property of widening.

</details>
<details><summary>Hint 2</summary>

Apply Theorem 9.1 to the resulting inequality.

</details>
<details><summary>Solution</summary>

F♯(a)≤a▽F♯(a)=a. Soundness then gives F(γ(a))⊆γ(F♯(a))⊆γ(a). Thus γ(a) contains initials and is closed under concrete successors, so it covers all reachable states.

</details>

### 7. Safe descending refinement {#abstract-interpretation-ex-7}

Prove F♯(a) is postfixed whenever a is postfixed and F♯ is monotone.

<details><summary>Hint 1</summary>

Start with F♯(a)≤a.

</details>
<details><summary>Hint 2</summary>

Apply the monotone transformer to both sides.

</details>
<details><summary>Solution</summary>

Monotonicity yields F♯(F♯(a))≤F♯(a). This is exactly postfixedness of the candidate b=F♯(a). An arbitrary smaller b lacks this argument, so simply descending does not guarantee soundness of the returned invariant.

</details>

### 8. Product loss {#abstract-interpretation-ex-8}

Abstract {(2,2),(4,4)} with independent intervals and give a spurious pair.

<details><summary>Hint 1</summary>

Project the set onto each coordinate.

</details>
<details><summary>Hint 2</summary>

The product allows coordinates chosen independently.

</details>
<details><summary>Solution</summary>

Both coordinates abstract to [2,4]. Their product includes (2,4), absent from the concrete set, and also (3,3). The relation x=y removes the unequal pair but not the intermediate equal one unless the domain also represents that discreteness.

</details>

### 9. An alarm's meaning {#abstract-interpretation-ex-9}

If γ(a) intersects Bad, does Theorem 9.1 prove an unsafe execution exists?

<details><summary>Hint 1</summary>

Write the direction of the reachable-set inclusion.

</details>
<details><summary>Hint 2</summary>

A member of a superset need not belong to its subset.

</details>
<details><summary>Solution</summary>

No. Reach⊆γ(a) permits γ(a) to contain unreachable bad states. A real unsafe execution requires a reachable bad state, usually with a path witness. Disjointness proves safety; intersection leaves the question unresolved by this invariant.

</details>

### 10. Node certificates {#abstract-interpretation-ex-10}

State enough conditions on node assertions to cover all concrete paths in a control-flow graph.

<details><summary>Hint 1</summary>

Initial nodes need coverage and edges need preservation.

</details>
<details><summary>Hint 2</summary>

Use a sound edge transformer followed by an abstract inequality.

</details>
<details><summary>Solution</summary>

Require every initial concrete state to belong to its initial node's concretization. For each edge u→v with sound transformer f♯, require f♯(aᵤ)≤aᵥ. A state in γ(aᵤ) takes the concrete edge into γ(f♯(aᵤ))⊆γ(aᵥ). Induction on path length establishes coverage at every visited node. The discovery heuristic need not appear in this proof.

</details>

## Chapter summary

Collecting semantics describes all finite reachable states. A sound abstraction and any postfixed abstract candidate cover those states. Intervals demonstrate both useful bounds and lost correlations; widening provides finite extrapolation, while a justified descending refinement may recover precision. Safety follows from the invariant theorem, not from an analysis merely finishing or reporting an alarm.

## Sources

Patrick Cousot and Radhia Cousot introduced abstract interpretation and its systematic approximation of fixed points. The lattice, interval and finite-certificate proofs here are new exposition of that framework. The collecting-semantics route connects to Winskel's operational and denotational accounts. No analyser has been executed and no warning log is presented as evidence.
`;export{e as default};