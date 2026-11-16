var e=`---
parent_id: book-discrete-global-optimisation
chapter_id: cutting-planes-gomory-cover
title: "Cutting Planes: Gomory and Cover Cuts"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Cutting Planes: Gomory and Cover Cuts {#section-1-cutting-planes-gomory-and-cover-cuts}

A cut strengthens a continuous relaxation while preserving every intended integer point. Its value lies in that universal preservation statement, rather than in how dramatically one fractional point disappears. This chapter derives three related mechanisms: nonnegative aggregation followed by integer rounding, a pure-integer tableau fractional cut, and knapsack cover inequalities with proved lifting coefficients.

The prerequisites are the formulation and polyhedral chapters, exact linear equations and elementary integer arithmetic. All integer claims refer to specified variables; continuous variables cannot be treated as integer merely because a current value is close to one. The opening discussion is retained from the original branch-and-cut source, which remains available under its old identity. The current chapter becomes the primary home of its cut derivations.

<a id="section-5-correcting-weak-bounds-with-cuts"></a>
## Correcting weak bounds with cuts {#section-7-correcting-weak-bounds-with-cuts}

A **valid inequality** holds for every integer-feasible point but may exclude fractional relaxation points. Add it to strengthen bounds without branching. A cut-generation loop separates a violated valid inequality, resolves, and stops when no selected-family violation remains or a resource limit is reached.

Absence of a cut from one family does not mean the point lies in the integer hull. It means the separation routine found no violation in that family under its tolerances.

<a id="section-11-triangle-cut-revisited"></a>
### Triangle cut revisited {#section-13-triangle-cut-revisited}

For the triangle stable-set relaxation, summing all three edge constraints gives \\(2(x_1+x_2+x_3)\\le 3\\), hence the fractional upper bound \\(3/2\\). The clique cut \\(x_1+x_2+x_3\\le 1\\) is valid for binary stable sets and closes the gap immediately.

Cut coefficients should be scaled and checked. Nearly parallel or enormous-coefficient cuts can damage numerical conditioning even when mathematically valid.


<a id="section-18-aggregation-separates-two-uses-of-integrality"></a>
## Aggregation separates two uses of integrality {#section-20-aggregation-separates-two-uses-of-integrality}

Suppose integer variables satisfy Ax≤b. Nonnegative row multipliers u produce uᵀAx≤uᵀb for every point of the continuous relaxation. No integrality was needed for that step. If the resulting coefficient row uᵀA is integral, its value on an integer vector is an integer. Only now may the right side be rounded downward. The resulting Chvátal–Gomory inequality remains valid for every original integer point.

Its derivation has distinct obligations: source inequalities must hold in the declared scope, multipliers must be nonnegative, the aggregated row must have the required integer coefficients and the floor must be exact. A violated current point establishes usefulness, not any of those obligations. The polyhedral chapter gives the odd-cycle example and distinguishes validity from facet dimension.

A cut can be redundant even after this valid operation. If the aggregated right side is already integral, flooring makes no change. A valid but redundant cut need not improve an objective bound, while a cut that improves one objective can leave other fractional directions untouched. Strength is relative to the current relaxation and output, whereas validity is relative to all intended integer points.

<a id="section-26-fractional-parts-in-a-pure-integer-tableau-row"></a>
## Fractional parts in a pure-integer tableau row {#section-28-fractional-parts-in-a-pure-integer-tableau-row}

For a real number a, define its fractional part by {a}=a−⌊a⌋, always between zero and one. This includes negative coefficients: the fractional part of minus one quarter is three quarters. Truncation toward zero is a different operation and cannot replace the floor in this definition.

Take an exact tableau equality
$$x_B=\\bar b-\\sum_{j=1}^n\\bar a_jx_j,$$
where xB and every nonbasic xj are required to be integers and the nonbasic variables are nonnegative. Assume the fractional part of the right-hand constant is strictly positive. Then the Gomory fractional inequality is
$$\\sum_j\\{\\bar a_j\\}x_j\\ge\\{\\bar b\\}.$$
To prove it, subtract all integer parts in the tableau equation. The quantity
$$x_B+\\sum_j\\lfloor\\bar a_j\\rfloor x_j-\\lfloor\\bar b\\rfloor
=\\{\\bar b\\}-\\sum_j\\{\\bar a_j\\}x_j$$
is an integer. If the proposed inequality failed, its right-hand expression would be positive and no larger than the fractional part of the constant, which is strictly less than one. No integer lies in that interval, giving a contradiction. Nonnegativity of xj and of each fractional coefficient provides the upper bound used in this argument.

At the basic relaxation point with all nonbasic xj zero, the inequality is violated. Thus a fractional basic constant supplies both a validity proof and a separator under the pure-integer assumptions. This is not a general mixed-integer formula: integer parts multiplied by continuous variables need not be integers. A mixed-integer cut needs its own derivation and coefficient rules.

If slacks appear among the nonbasic variables, their integrality must also be justified. Integer coefficient rows with integer right sides and integer structural variables give integer slacks. A rational formulation can often be scaled to such rows before declaring a pure-integer standard form. Arbitrarily scaling a row afterward changes its slack definition, so record exactly which variables and equations the tableau represents.

<a id="section-43-worked-example-1-a-rational-fractional-cut"></a>
### Worked example 1: a rational fractional cut {#section-45-worked-example-1-a-rational-fractional-cut}

Use xB=3/2−x₁/2−x₂/4 with all three variables nonnegative integers. Fractional parts give x₁/2+x₂/4≥1/2, equivalently 2x₁+x₂≥2. The basic relaxation point (xB,x₁,x₂)=(3/2,0,0) is removed.

The original equality multiplied by four is 4xB+2x₁+x₂=6. Integer feasible points such as (1,1,0), (0,3,0) and (0,0,6) satisfy the cut. Those examples illustrate the inequality but are not its proof; the integer contradiction above covers every nonnegative integer solution. The cut may be mapped back into structural variables using the exact tableau relations, with the row identifiers retained.

<a id="section-49-binary-covers-and-their-scope"></a>
## Binary covers and their scope {#section-51-binary-covers-and-their-scope}

For binary variables and positive weights, a knapsack row Σaixi≤b implies that any subset C whose total weight exceeds b cannot be selected in full. The cover inequality is Σi∈Cxi≤|C|−1. This follows because selecting all its members alone would violate the capacity, and other positive-weight selections cannot repair that violation.

A cover is minimal when removing any one member makes it no longer a cover. Minimality removes an obvious source of redundancy, but does not mean its basic inequality describes the full integer hull. It also does not guarantee a facet. The polyhedral dimension and enough independent tight points are still required for that stronger statement.

For a proposed fractional point, violation of a basic cover inequality means the sum over C of one minus each selected fraction is less than one. Separation therefore searches for a set whose weight exceeds capacity while that complementary fractional sum is small. Finding one good set is sufficient to return a cut. Failure of a greedy ordering or a limited subset search is not proof that no cover cut exists. Exact separation and the performance of a heuristic separator are different contracts.

<a id="section-57-worked-example-2-a-minimal-cover"></a>
### Worked example 2: a minimal cover {#section-59-worked-example-2-a-minimal-cover}

Let weights be four, four and four with capacity ten. All three form a cover of weight twelve, and every two have weight eight, so it is minimal. The basic inequality is x₁+x₂+x₃≤2. The fractional vector with all three entries five sixths satisfies the original row at equality but has sum five halves and violates the cover cut. Every binary pair remains feasible and tight for the cut.

The positivity of the weights matters. With negative coefficients, selecting an outside variable could offset an overloaded subset, so the elementary argument would fail. Rewriting a more general constraint into a form suitable for cover reasoning requires an explicit variable-complementation or domain argument, rather than copying the same coefficient pattern.

<a id="section-63-lifting-a-cover-coefficient-by-solving-the-other-case"></a>
## Lifting a cover coefficient by solving the other case {#section-65-lifting-a-cover-coefficient-by-solving-the-other-case}

Suppose z is another binary variable with positive weight az. Start from a cover inequality ΣCxi≤k−1 when z=0, where k=|C|. In the z=1 case, the remaining capacity is b−az. Let β be the maximum number of cover members that can be selected under that remaining capacity, assuming this case is feasible. Then
$$\\sum_{i\\in C}x_i+(k-1-\\beta)z\\le k-1$$
is valid for both cases. At z=0 it is the cover inequality. At z=1 it reduces exactly to the proved cardinality bound β. This case proof establishes global validity for the original two-case model.

Because all cover weights are positive, the maximum cardinality over C alone can be found by selecting its smallest weights first until the residual capacity is exceeded. Additional model constraints can give a smaller safe β, but must be included in that derivation. If other variables also appear, ignoring their nonnegative weights gives an upper bound on the possible cover cardinality and therefore a safe coefficient through the same proof.

Sequential lifting of several outside variables repeats a related optimization after earlier coefficients have been installed. Its order can change the resulting inequality. The single-variable derivation here does not license assigning all coefficients independently from a memorized formula without checking their simultaneous validity.

<a id="section-73-worked-example-3-a-coefficient-larger-than-one"></a>
### Worked example 3: a coefficient larger than one {#section-75-worked-example-3-a-coefficient-larger-than-one}

Add a fourth binary variable z with weight seven to the three weight-four variables and keep capacity ten. When z=1, no cover member can be selected because even the smallest additional weight makes eleven. Thus β=0 and the lifted inequality is x₁+x₂+x₃+2z≤2.

At the fractional point x₁=x₂=x₃=z=1/2, the capacity row has left side 19/2, below ten. The basic cover inequality has left side three halves, below two. The lifted inequality has left side five halves and separates the point. For binary z=1 it permits exactly the feasible zero selection among the other three; for z=0 it retains every feasible pair. The lifting proof explains the coefficient two rather than merely observing a violation.

<a id="section-79-local-information-must-not-escape-its-node"></a>
## Local information must not escape its node {#section-81-local-information-must-not-escape-its-node}

A branch can make a stronger inequality valid locally. In the lifted example, the node z=1 allows the stronger local conclusion x₁+x₂+x₃≤0. Installing that row globally would wrongly remove feasible pairs in the sibling z=0. The lifted row handles both cases and is globally valid precisely because its coefficient accounts for the sibling.

A cut record should therefore include its source rows, variable domains and any branch assumptions. Descendants may inherit a local proof; ancestors and siblings may not. A later global derivation can justify a new global record. The place where a separator discovered an inequality is not what determines its scope; the assumptions used in its validity proof do.

<a id="section-85-arithmetic-and-cut-selection"></a>
## Arithmetic and cut selection {#section-87-arithmetic-and-cut-selection}

Flooring is discontinuous. An exact aggregated right side equal to one can be rounded numerically just below one; flooring that rounded number gives zero and may remove legitimate integer points. Similarly an almost-integer coefficient is not an exact integer coefficient. A proof-oriented derivation stores rational data or a rigorously justified reconstruction rather than treating proximity as equality.

Tableau rows can have large denominators and sensitive coefficients. A mathematically valid cut with huge or badly scaled coefficients may be numerically unattractive. Selection can normalize violation, consider sparsity and avoid near-duplicate directions without changing the underlying proof. Multiplying a cut by a positive constant preserves its halfspace but changes its raw violation, so compare efficacy under a declared norm rather than raw numbers.

Adding a cut shrinks the relaxation and can only lower a maximization upper bound or raise a minimization lower bound. That monotonicity assumes the bounds refer to exact relaxations or properly certified numerical values. A returned feasible relaxation point has the opposite bound role from the optimal relaxation value in a maximization problem. Keep that distinction when deciding whether a round of cuts improved the proof bound.

An implementation may stop a cut loop after a work limit or small bound improvement. This says nothing about exhaustion of the integer hull. Even exact separation for one family can leave fractional points outside the hull because the family is incomplete. Branch-and-bound then supplies exhaustive cases using the strengthened relaxation; cutting and branching remain complementary mechanisms.

<a id="section-95-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-97-exercises-with-staged-hints-and-full-solutions}

<a id="section-97-exercise-1-the-original-cut-validity-question"></a>
### Exercise 1: the original cut-validity question {#section-99-exercise-1-the-original-cut-validity-question}

A new inequality removes the current fractional solution. Is that enough to add it to the integer model?

<details>
<summary>Hint 1</summary>

The inequality must hold for every intended integer point.
</details>
<details>
<summary>Hint 2</summary>

A separator can remove the current point and the true optimum simultaneously.
</details>
<details>
<summary>Full solution</summary>

No. It must be valid for all integer-feasible points. Otherwise the altered model may discard the true optimum. This preserves the original branch-and-cut exercise and conclusion. Violation describes the current fractional point; validity is the universal statement that makes its removal safe.
</details>

<a id="section-117-exercise-2-a-negative-fractional-coefficient"></a>
### Exercise 2: a negative fractional coefficient {#section-119-exercise-2-a-negative-fractional-coefficient}

Compute the fractional part of −1/4 and compare it with truncation toward zero.

<details>
<summary>Hint 1</summary>

Its floor is minus one.
</details>
<details>
<summary>Hint 2</summary>

Subtract that floor from the original coefficient.
</details>
<details>
<summary>Full solution</summary>

The fractional part is −1/4−(−1)=3/4. Truncating toward zero would use integer part zero and leave a negative remainder, which is not the fractional part used in the Gomory proof. Nonnegative remainders are essential to its contradiction interval.
</details>

<a id="section-137-exercise-3-a-fractional-tableau-row"></a>
### Exercise 3: a fractional tableau row {#section-139-exercise-3-a-fractional-tableau-row}

Derive the cut from xB=7/3−x₁/3−2x₂/3 with all variables nonnegative integers.

<details>
<summary>Hint 1</summary>

The constant's fractional part is one third.
</details>
<details>
<summary>Hint 2</summary>

Multiply the resulting inequality by three.
</details>
<details>
<summary>Full solution</summary>

The cut is x₁/3+2x₂/3≥1/3, or x₁+2x₂≥1. The basic point with both nonbasic variables zero violates it. The original row multiplied by three has integer coefficients and constant seven, consistent with the declared integer variables and the proof's exact arithmetic.
</details>

<a id="section-157-exercise-4-a-minimal-cover"></a>
### Exercise 4: a minimal cover {#section-159-exercise-4-a-minimal-cover}

For weights five, four and two with capacity seven, identify all two-member covers and determine which are minimal.

<details>
<summary>Hint 1</summary>

A cover must exceed capacity strictly.
</details>
<details>
<summary>Hint 2</summary>

The pair sums are nine, seven and six.
</details>
<details>
<summary>Full solution</summary>

Only the first two weights form a cover. Each alone is at most seven, so it is minimal and gives x₁+x₂≤1. The pair of five and two is exactly at capacity and is feasible; treating it as a cover would delete a legitimate binary point.
</details>

<a id="section-177-exercise-5-compute-a-lifting-coefficient"></a>
### Exercise 5: compute a lifting coefficient {#section-179-exercise-5-compute-a-lifting-coefficient}

A three-member cover has bound two. With an outside binary z fixed to one, at most one cover member is possible. Give the lifted coefficient and prove both cases.

<details>
<summary>Hint 1</summary>

Subtract the new case bound from the original cover bound.
</details>
<details>
<summary>Hint 2</summary>

The coefficient is one.
</details>
<details>
<summary>Full solution</summary>

Use ΣCxi+z≤2. At z=0 it is the original cover inequality. At z=1 it is ΣCxi≤1, the stated case bound. Both cases exhaust binary z, so the row is globally valid under the same source constraints. The proof needs the upper bound one, not a heuristic guess about that subproblem.
</details>

<a id="section-197-exercise-6-local-versus-global"></a>
### Exercise 6: local versus global {#section-199-exercise-6-local-versus-global}

In the weight-four/seven example, why is ΣCxi≤0 valid only in the branch z=1?

<details>
<summary>Hint 1</summary>

The residual capacity changes when z is zero.
</details>
<details>
<summary>Hint 2</summary>

Two weight-four members fit in capacity ten in the sibling branch.
</details>
<details>
<summary>Full solution</summary>

At z=1, adding any cover member makes at least eleven, so every one must be zero. At z=0, selecting two gives weight eight and is feasible. The row would delete that sibling point if globalized. The lifted row with coefficient two handles both branches safely.
</details>

<a id="section-217-exercise-7-rescale-a-violation"></a>
### Exercise 7: rescale a violation {#section-219-exercise-7-rescale-a-violation}

A violated cut has row normal a and positive violation v. Multiply the row by ten. What happens to raw violation and Euclidean efficacy?

<details>
<summary>Hint 1</summary>

Both numerator and normal norm scale by the same factor.
</details>
<details>
<summary>Hint 2</summary>

Efficacy is violation divided by ‖a‖.
</details>
<details>
<summary>Full solution</summary>

Raw violation becomes 10v, but efficacy remains v/‖a‖. The feasible halfspace is unchanged. Comparing raw violations would favour an arbitrary row normalization rather than a stronger geometric separator. Variable rescaling can still change the metric and should be stated separately.
</details>

<a id="section-237-exercise-8-an-exact-floor-at-a-boundary"></a>
### Exercise 8: an exact floor at a boundary {#section-239-exercise-8-an-exact-floor-at-a-boundary}

An exact integral left side is bounded by one. A rounded calculation returns 0.999999999 for the right side. Why is flooring that value unsafe?

<details>
<summary>Hint 1</summary>

The exact floor is one, whereas the rounded floor is zero.
</details>
<details>
<summary>Hint 2</summary>

A feasible integer point with left side one would be removed.
</details>
<details>
<summary>Full solution</summary>

The rounded floor creates a stronger row not justified by the original bound. Arbitrarily small numerical error can change a floor at an integer boundary. Exact rational aggregation or a proved conservative allowance must precede the rounding step in a certificate. A closeness tolerance does not identify which side of the integer boundary the exact value occupies.
</details>

<a id="section-257-exercise-9-why-the-pure-integer-cut-fails-for-a-continu"></a>
### Exercise 9: why the pure-integer cut fails for a continuous variable {#section-259-exercise-9-why-the-pure-integer-cut-fails-for-a-continu}

Let xB=1/2−3y/2, with xB a nonnegative integer and y continuous nonnegative. Test the incorrectly applied pure-integer cut y/2≥1/2.

<details>
<summary>Hint 1</summary>

Set xB=0 and solve the tableau equation for y.
</details>
<details>
<summary>Hint 2</summary>

The resulting y is one third.
</details>
<details>
<summary>Full solution</summary>

The feasible mixed point xB=0,y=1/3 violates the proposed cut because y/2=1/6. In the pure-integer proof, the product of the integer part of 3/2 with y would have needed to be an integer. It is not. A mixed-integer inequality requires a different derivation; a fractional coefficient alone does not authorize the pure-integer formula.
</details>

<a id="section-277-exercise-10-interpret-exhaustion-of-a-cut-family"></a>
### Exercise 10: interpret exhaustion of a cut family {#section-279-exercise-10-interpret-exhaustion-of-a-cut-family}

An exact separator finds no violated cover cut at a fractional relaxation point. What has and has not been established?

<details>
<summary>Hint 1</summary>

Its quantified family is cover cuts, not every integer-valid inequality.
</details>
<details>
<summary>Hint 2</summary>

Other families or exhaustive branching may still improve the bound.
</details>
<details>
<summary>Full solution</summary>

The point satisfies every member of the exactly separated cover family under its source assumptions. It need not belong to the integer hull and need not be integral. If the separator was heuristic rather than exact, even family exhaustion would be too strong; only its unsuccessful search is known. Report that distinction before deciding how to branch or strengthen further.
</details>

<a id="section-297-summary-and-continuation"></a>
## Summary and continuation {#section-299-summary-and-continuation}

Aggregation, fractional rows and covers produce cuts through different uses of integer structure. Lifting proves an additional coefficient by covering both values of an outside binary variable. Scope and exact arithmetic remain part of every certificate. The separation-and-branching chapter studies how to choose among such valid objects, while the certificate chapter records their derivations independently of the search policy.

Reading references: Conforti, Cornuéjols and Zambelli, *Integer Programming* (2014), and Wolsey, *Integer Programming* (1998). The finite proofs and examples above are developed directly. A finite-convergence theorem for an arbitrary cut loop is outside this chapter.
`;export{e as default};