var e=`---
parent_id: book-discrete-global-optimisation
chapter_id: complexity-approximation
title: "Complexity and Approximation"
level: graduate
estimated_minutes: 275
license: CC BY-SA 4.0
---

# Complexity and Approximation {#section-1-complexity-and-approximation}

A finite branch tree is not automatically a fast algorithm. An approximation ratio is not an observed small gap on a few instances. Computational complexity asks how work grows with the encoded input; approximation asks what quality a feasible output guarantees across the declared problem family. Both require an explicit output and arithmetic model.

Assume finite graphs, binary integer formulations, basic algorithms and proof with inequalities. This chapter gives a concrete reduction, exact pseudo-polynomial dynamic programming and proved approximation guarantees. The standard NP-completeness of three-literal satisfiability is a cited foundational input, not reproved here. No running-time experiment is reported.

<a id="section-5-input-length-and-the-decision-question"></a>
## Input length and the decision question {#section-7-input-length-and-the-decision-question}

Integers in a mathematical instance are normally written in binary. A capacity W therefore contributes a number of bits proportional to log W, rather than W itself. Rational coefficients also include numerator and denominator lengths. A polynomial-time statement must refer to this total description length, including dimensions and requested accuracy.

For a binary linear model, a proposed feasible assignment contains one bit per variable. Its rows and objective threshold can be evaluated using arithmetic whose bit cost is polynomial in the encoded coefficients and number of terms. The threshold decision problem therefore has efficiently verifiable certificates. This is the relevant NP membership statement for that bounded binary setting. A general unbounded integer model needs a separate theorem bounding witness size; it should not be justified merely by saying every witness can eventually be written down.

A decision problem asks whether a feasible point reaches a threshold. An optimization problem asks for the best value or a best point. For integer-valued objectives with known finite value bounds of polynomial bit length, decision queries can locate the optimum by binary search using a number of queries proportional to the bit length of that range. Recovering a point additionally requires witness construction, often by fixing variables and querying the remaining problem. Output length and reconstruction belong to the algorithmic claim.

<a id="section-13-a-reduction-from-satisfiability-to-independent-set"></a>
## A reduction from satisfiability to independent set {#section-15-a-reduction-from-satisfiability-to-independent-set}

Take a formula with m clauses, each having three literal occurrences. Create one graph vertex for every occurrence. Connect the three vertices of each clause into a clique, and connect occurrences from different clauses whenever they are complementary literals of the same variable. The graph has three times m vertices and at most a quadratic number of edges, so the construction is polynomial in the formula length.

If the formula is satisfiable, select one true occurrence from every clause. No two selected vertices lie in the same clause clique, and no two true literals are complementary. They form an independent set of size m. Conversely an independent set of size m contains exactly one vertex from each clause, because at most one can lie in each clique. Its selected literals are mutually consistent; set each selected variable sign accordingly and assign unmentioned variables arbitrarily. Every clause then has a selected true literal, satisfying the formula.

Thus deciding whether the graph has an independent set of size at least m decides the original satisfiability question. Combined with the cited NP-completeness of three-literal satisfiability, this proves NP-hardness of independent-set threshold decision; the explicit vertex list supplies its NP certificate. The stable-set binary formulation from chapter one therefore includes an NP-complete decision family.

This does not say every graph instance is difficult or that no useful algorithm exists. Bipartite and other structured graph families can admit different methods. It also does not prove a particular approximation lower bound: that requires a reduction preserving a quantitative gap, not merely distinguishing a target cardinality exactly.

<a id="section-23-exhaustive-pseudo-polynomial-and-polynomial-work"></a>
## Exhaustive, pseudo-polynomial and polynomial work {#section-25-exhaustive-pseudo-polynomial-and-polynomial-work}

For zero-one knapsack, let positive integer weights wi, nonnegative integer rewards vi and capacity W be given. Define Fi(c) as the largest reward using the first i items with capacity c. The recurrence compares not taking item i with taking it once:
$$F_i(c)=\\max\\{F_{i-1}(c),\\ v_i+F_{i-1}(c-w_i)\\},$$
where the second option is omitted when its weight exceeds c. The base row is zero. Induction proves correctness because every feasible subset either contains the last item or does not, and the remainder belongs to the appropriate smaller-capacity subproblem.

There are order nW states and constant many transitions per state, with arithmetic on encoded rewards. Rolling rows use order W storage; reconstruction needs an additional chosen strategy to recover the selected subset. This is pseudo-polynomial, because the work is polynomial in the numerical value W but can be exponential in its bit length. A very large capacity can make the table unsuitable even if it was specified with relatively few bits.

<a id="section-31-worked-example-1-an-exact-small-table-comparison"></a>
### Worked example 1: an exact small table comparison {#section-33-worked-example-1-an-exact-small-table-comparison}

Take weights two, three and four, rewards three, four and five, capacity five. The first two items together have reward seven and fit exactly. The item of weight four gives only five, and pairing it with either other item is infeasible. The recurrence therefore returns seven. A reward-per-weight ordering also happens to succeed here, but the dynamic-programming proof applies to every instance in its declared integer-capacity family, unlike this one observed greedy success.

Scaling all weights and capacity by a common factor leaves the feasible subsets unchanged but enlarges this table's numerical capacity. Dividing by a proved common divisor can recover the smaller equivalent table. That improvement depends on the actual encoding and arithmetic structure, illustrating why a numerical magnitude bound is not the same as a description-length bound.

<a id="section-37-define-the-approximation-convention"></a>
## Define the approximation convention {#section-39-define-the-approximation-convention}

For nonnegative maximization objectives, an α-approximation with α≥1 returns a feasible value at least OPT/α. Equivalently a relative-loss guarantee ε returns at least (1−ε)OPT. For nonnegative minimization, the standard multiplicative requirement is a feasible value at most αOPT. If the optimum is zero, that minimization requirement forces an exact zero value. Avoid dividing by zero when stating the guarantee.

Additive error is different: a feasible value within δ of optimum has an allowance in objective units. A constant objective shift leaves optimizing points unchanged but can alter multiplicative ratios drastically. Ratio claims therefore require a nonnegative objective convention and a specified family, not just a number called relative gap.

An instance-specific primal-relaxation certificate can also prove a ratio. If a maximizing incumbent has positive value L and a rigorous relaxation upper bound U, then L/OPT is at least L/U. This is evidence for that particular instance. A uniform algorithmic ratio needs a theorem holding for every input in the family, including its worst cases.

<a id="section-45-maximal-matching-gives-a-proved-factor-two"></a>
## Maximal matching gives a proved factor two {#section-47-maximal-matching-gives-a-proved-factor-two}

A matching is maximal when no edge can be added without violating matching feasibility; it is maximum when its cardinality is largest. A greedy algorithm that repeatedly takes any available edge and deletes its incident edges returns a maximal matching.

Every edge of a maximum matching touches a vertex already covered by a maximal matching; otherwise it could be added. Assign each maximum-matching edge to one such covered vertex. A chosen greedy edge has two endpoints, and at most one maximum-matching edge uses each endpoint. Thus the optimum cardinality is at most twice the greedy cardinality. This proves a factor-two guarantee for every graph, without assuming the greedy matching is maximum.

<a id="section-51-worked-example-2-the-factor-can-be-attained"></a>
### Worked example 2: the factor can be attained {#section-53-worked-example-2-the-factor-can-be-attained}

On a path with four vertices, choosing the middle edge first gives a maximal matching of size one. The two outer edges form a matching of size two. The proved factor-two bound is exact on this instance. No further edge can be added to the greedy matching, yet replacing its one edge by two improves it. Maximality is a neighbourhood property, while maximum cardinality is global.

For arbitrary positive edge weights, an arbitrary maximal matching has no constant reward guarantee: a light edge can block one of arbitrarily large reward. If greedy instead processes edges in nonincreasing weight, each optimal edge is blocked by an equal-or-heavier selected edge or is selected itself. At most two optimal edges are charged to each greedy edge, one through each endpoint. Their total reward is at most twice that edge's reward, proving the weighted factor-two guarantee under this ordered rule and nonnegative weights.

Maximum matching itself has exact polynomial algorithms, including the bipartite flow method already developed. Approximation is illustrated here because the proof is elementary and the method cheap, not because every problem using it is NP-hard. One should not infer hardness from the mere presence of an approximate algorithm.

<a id="section-59-greedy-set-cover-and-a-harmonic-bound"></a>
## Greedy set cover and a harmonic bound {#section-61-greedy-set-cover-and-a-harmonic-bound}

Let a finite universe of n elements be covered by an available collection of subsets, each with unit cost. Greedy repeatedly chooses a set covering the most currently uncovered elements. Assume every universe element belongs to some available set, so the procedure can finish. Charge each newly covered element one divided by the number of new elements covered in that step. Each chosen set contributes total charge one, so all charges sum to the number of greedy sets.

Fix one set S from an optimal cover. Order its members by the moment greedy covers them, breaking simultaneous ties arbitrarily. When j of its members remain, choosing S would cover at least those j, so the actual greedy choice covers at least j new elements. Each of those still-uncovered members receives charge at most one over j when it is covered. Summing over S bounds its total member charges by the harmonic number H|S|, no larger than Hn.

Every universe element belongs to at least one optimal set. Summing these bounds over k optimal sets counts every nonnegative element charge at least once and gives greedy cost at most kHn. Finally Hn≤1+log n follows by comparing the tail of the reciprocal sum with its integral. This proves the logarithmic guarantee for this unweighted model. Weighted set cover needs a cost-per-new-element rule and its own charging argument; arbitrary use of the same unweighted order is not licensed.

<a id="section-67-worked-example-3-greedy-uses-three-sets-instead-of-two"></a>
### Worked example 3: greedy uses three sets instead of two {#section-69-worked-example-3-greedy-uses-three-sets-instead-of-two}

Use universe one through six and sets A={1,2,3,4}, B={1,2,5}, C={3,4,6}. Greedy first chooses A because it covers four elements. It must then choose both B and C to cover five and six. The optimal cover B∪C uses two sets. The example shows greedy is not exact, while the harmonic proof bounds its worst-case cost over all valid instances. A favourable or unfavourable small example is not itself the uniform ratio theorem.

<a id="section-71-a-fully-polynomial-approximation-scheme-for-knapsack"></a>
## A fully polynomial approximation scheme for knapsack {#section-73-a-fully-polynomial-approximation-scheme-for-knapsack}

A polynomial-time approximation scheme has polynomial input-length work for each fixed positive ε, although its dependence on ε can be severe. A fully polynomial scheme is polynomial in both input length and one over ε. This distinction is about a family of accuracy guarantees, not simply running an existing heuristic longer.

For zero-one knapsack, discard items individually heavier than capacity. Let Vmax be the largest remaining reward. If none is positive, zero is already optimal. Otherwise choose K=εVmax/n with ε strictly between zero and one and scale each reward downward to vi′=⌊vi/K⌋. Solve exactly the scaled-reward problem by dynamic programming that records the minimum weight achieving each integer reward total. There are at most n²/ε reward units to consider, because every scaled item reward is at most n/ε. The table uses order n³/ε transitions, with polynomial-bit arithmetic on the original weights.

Let S* be an original optimum and S the scaled optimum returned feasibly. The scaled total of S* is at least its original reward divided by K minus n. Optimality of S in the scaled problem and downward scaling imply
$$V(S)\\ge K V'(S)\\ge K V'(S_*)
\\ge OPT-nK=OPT-\\varepsilon V_{\\max}
\\ge(1-\\varepsilon)OPT.$$
The last inequality uses that the best individually feasible item is itself an allowed choice, so OPT≥Vmax. The algorithm returns an original feasible subset and has the stated relative-loss guarantee. It does not claim its objective is an exact optimum or that all other integer problems inherit the same scheme.

The rewards and weights must be nonnegative in the roles used, and infeasible heavy items must be removed before identifying Vmax. The item count supplies the total rounding loss. Replacing n by an arbitrary smaller value in the scaling would invalidate that estimate. A practical implementation can exploit smaller state spaces, but those improvements should preserve the proof's feasibility and loss accounting.

<a id="section-85-what-complexity-does-and-does-not-imply"></a>
## What complexity does and does not imply {#section-87-what-complexity-does-and-does-not-imply}

NP-hardness is a worst-case comparison under polynomial reductions. It does not prove that a given instance needs an exponential tree, and it does not prohibit useful structural subclasses, parameterized methods or strong relaxations. Conversely, a fast collection of runs does not prove a polynomial guarantee for all encoded inputs.

Knapsack's scheme also shows why NP-hardness alone does not rule out very accurate approximations. Approximation lower bounds require additional quantitative arguments. A reduction that detects only whether an exact threshold is attained may leave the objective gap arbitrarily small relative to scale and therefore be insufficient for a fixed-ratio conclusion.

A completed mathematical report names the encoded family, feasibility convention, objective sign and requested approximation. If the method supplies an instance-specific bound interval, retain it as that. If it invokes a uniform ratio, state its proof assumptions. These distinctions allow approximate and exact methods to coexist without turning empirical performance into a complexity theorem.

<a id="section-93-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-95-exercises-with-staged-hints-and-full-solutions}

<a id="section-95-exercise-1-capacity-value-versus-bit-length"></a>
### Exercise 1: capacity value versus bit length {#section-97-exercise-1-capacity-value-versus-bit-length}

A dynamic program uses W states per item. Why is that not polynomial in the binary description length of W?

<details>
<summary>Hint 1</summary>

A power of two has a short binary representation compared with its value.
</details>
<details>
<summary>Hint 2</summary>

Take W equal to two raised to a bit-length parameter.
</details>
<details>
<summary>Full solution</summary>

If W=2ᵏ, its binary representation has k+1 bits while the table has 2ᵏ states per item. The work is exponential in k. Calling it pseudo-polynomial states precisely that it is polynomial in numeric magnitudes rather than general encoded input length.
</details>

<a id="section-115-exercise-2-recover-a-satisfying-assignment"></a>
### Exercise 2: recover a satisfying assignment {#section-117-exercise-2-recover-a-satisfying-assignment}

Given an independent set of size m in the clause-occurrence graph, explain why its selected literals define no contradictory variable values.

<details>
<summary>Hint 1</summary>

Complementary occurrences were connected by edges.
</details>
<details>
<summary>Hint 2</summary>

Every clause clique contributes exactly one selected occurrence.
</details>
<details>
<summary>Full solution</summary>

Independence excludes every complementary selected pair. Assign each selected literal true and fill unselected variables arbitrarily. The m clause cliques contribute one selected literal each, so all clauses are satisfied. This proves the reverse implication of the reduction, rather than merely producing a large graph from a formula.
</details>

<a id="section-135-exercise-3-maximal-is-not-maximum"></a>
### Exercise 3: maximal is not maximum {#section-137-exercise-3-maximal-is-not-maximum}

On the four-vertex path, compare the middle-edge matching with the two-outer-edge matching.

<details>
<summary>Hint 1</summary>

No extra edge can be appended to the first matching.
</details>
<details>
<summary>Hint 2</summary>

Replacing its edge can nevertheless increase cardinality.
</details>
<details>
<summary>Full solution</summary>

The middle edge is maximal because every remaining edge touches it. Its size is one, while the two outer edges are disjoint and give size two. Thus maximality certifies no improving addition, not no improving exchange or global optimum. The factor-two theorem remains valid and is tight here.
</details>

<a id="section-155-exercise-4-arbitrary-weighted-maximality"></a>
### Exercise 4: arbitrary weighted maximality {#section-157-exercise-4-arbitrary-weighted-maximality}

Give weights on a three-vertex path showing that an arbitrary maximal matching has no bounded reward ratio.

<details>
<summary>Hint 1</summary>

Make the first chosen edge light and its adjacent alternative very heavy.
</details>
<details>
<summary>Hint 2</summary>

Use rewards one and M, with M arbitrarily large.
</details>
<details>
<summary>Full solution</summary>

Choosing the reward-one edge produces a maximal matching, while the optimum chooses the adjacent reward-M edge. The ratio is M and has no uniform constant bound. The weighted factor-two proof needs nonincreasing-weight processing, not just maximality of the final set.
</details>

<a id="section-175-exercise-5-a-certified-instance-ratio"></a>
### Exercise 5: a certified instance ratio {#section-177-exercise-5-a-certified-instance-ratio}

A maximizing instance has feasible value ten and valid upper bound twelve. Give an α-approximation statement for that incumbent on this instance.

<details>
<summary>Hint 1</summary>

Its value divided by the unknown optimum is at least ten twelfths.
</details>
<details>
<summary>Hint 2</summary>

Use α=12/10 under the chapter's maximization convention.
</details>
<details>
<summary>Full solution</summary>

The incumbent is a 6/5-approximation for this instance, since ten is at least OPT divided by 6/5. This does not prove that the method always returns that ratio on other inputs. The valid relaxation bound and positive objective scale support this particular conclusion.
</details>

<a id="section-195-exercise-6-an-objective-shift-changes-the-ratio"></a>
### Exercise 6: an objective shift changes the ratio {#section-197-exercise-6-an-objective-shift-changes-the-ratio}

Two feasible objective values are 1000 and 1001 in a maximizing problem. Compare the worse-point ratio before and after subtracting 1000 from every value.

<details>
<summary>Hint 1</summary>

The optimizing point and absolute gap do not change.
</details>
<details>
<summary>Hint 2</summary>

The transformed values are zero and one.
</details>
<details>
<summary>Full solution</summary>

The original worse-to-best ratio is 1000/1001, near one. The transformed ratio is zero. The absolute gap remains one and the optimizer is identical. A multiplicative approximation convention therefore depends on the objective representation and nonnegative reference, unlike the ordering of feasible values.
</details>

<a id="section-215-exercise-7-the-greedy-cover-cost"></a>
### Exercise 7: the greedy cover cost {#section-217-exercise-7-the-greedy-cover-cost}

For the six-element A,B,C example, verify both the greedy output and the optimum without relying on the approximation theorem.

<details>
<summary>Hint 1</summary>

A is uniquely largest initially.
</details>
<details>
<summary>Hint 2</summary>

Only B contains five and only C contains six.
</details>
<details>
<summary>Full solution</summary>

Greedy takes A, then must take B and C, costing three. Any cover must include B and C to cover five and six, and those two already cover the universe. Thus the optimum is two. This instance ratio is 3/2; the harmonic guarantee is a separate all-instance upper bound.
</details>

<a id="section-235-exercise-8-bound-total-reward-rounding-loss"></a>
### Exercise 8: bound total reward-rounding loss {#section-237-exercise-8-bound-total-reward-rounding-loss}

If every selected item loses less than K reward when scaled downward, why is the optimum subset's total loss at most nK?

<details>
<summary>Hint 1</summary>

A zero-one subset contains at most n items.
</details>
<details>
<summary>Hint 2</summary>

Sum the per-item inequalities over that subset.
</details>
<details>
<summary>Full solution</summary>

Each original reward is less than K times its scaled reward plus K. Summing over at most n items bounds the loss by nK. With K=εVmax/n this is at most εVmax and hence εOPT. The item-count factor is what converts individual rounding into the proved relative allowance.
</details>

<a id="section-255-exercise-9-why-remove-overweight-items-first"></a>
### Exercise 9: why remove overweight items first {#section-257-exercise-9-why-remove-overweight-items-first}

Explain why using an infeasible heavy item's reward as Vmax can invalidate the knapsack approximation proof.

<details>
<summary>Hint 1</summary>

The proof uses that the largest retained item is itself a feasible subset.
</details>
<details>
<summary>Hint 2</summary>

An impossible item may have reward much larger than the true optimum.
</details>
<details>
<summary>Full solution</summary>

Without individual feasibility, Vmax need not be at most OPT. Then the rounding loss εVmax may exceed the desired εOPT by an arbitrary factor. Discarding overweight items preserves all feasible subsets and makes the largest retained reward a valid lower bound on OPT, restoring the argument.
</details>

<a id="section-275-exercise-10-hardness-is-not-an-approximation-theorem"></a>
### Exercise 10: hardness is not an approximation theorem {#section-277-exercise-10-hardness-is-not-an-approximation-theorem}

Does the clause-graph reduction alone prove that no constant-factor approximation for independent set exists unless P=NP?

<details>
<summary>Hint 1</summary>

The reduction distinguishes reaching m from falling below m exactly.
</details>
<details>
<summary>Hint 2</summary>

A constant ratio can tolerate a one-unit shortfall when m is large.
</details>
<details>
<summary>Full solution</summary>

No. The ordinary threshold reduction establishes exact-decision hardness, but does not provide the quantitative promise gap needed for that approximation conclusion. A no-approximation theorem needs a suitable gap-preserving reduction and its assumptions. Inferring it from NP-hardness alone would also conflict with NP-hard families such as knapsack that admit a fully polynomial approximation scheme.
</details>

<a id="section-295-summary-and-continuation"></a>
## Summary and continuation {#section-297-summary-and-continuation}

Input length separates polynomial from pseudo-polynomial work. Reductions compare exact decision tasks, while approximation ratios require separate quality proofs. Matching, set cover and scaled-reward knapsack illustrate three such arguments. Instance certificates, uniform ratios and observed runtimes are different evidence. The heuristic chapter next studies useful candidate search without assigning a ratio where none has been proved.

Reading references: Garey and Johnson, *Computers and Intractability* (1979), for the foundational NP-completeness inputs; standard integer-programming texts for exact formulations. The reduction, charging and scaling arguments above are developed directly.
`;export{e as default};