var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: branch-and-bound-cuts
title: "Branch-and-Bound and Cutting Ideas"
level: graduate
estimated_minutes: 125
license: CC BY-SA 4.0
---

# Branch-and-Bound and Cutting Ideas

## Scope and invariant

Branch-and-bound partitions a discrete feasible set and uses relaxations to prove that unexplored regions cannot improve the best known solution. This chapter uses maximization. At every stage:

- the **incumbent** is an integer-feasible value and hence a lower bound;
- each live node has a relaxation upper bound;
- the best live upper bound bounds every solution not yet discarded.

When the largest live upper bound is no greater than the incumbent, optimality is certified. Floating-point comparisons require conservative tolerances or exact checking before the word certified is used.

## Node processing

At a node, add branch restrictions to the original formulation and solve a relaxation.

1. If the relaxation is infeasible, prune: the integer subset is also infeasible.
2. If its bound is no better than the incumbent, prune by bound.
3. If the relaxation solution is integer feasible, update the incumbent and close the node.
4. Otherwise choose a fractional decision and create child regions whose union covers all integer possibilities.

For a fractional integer variable \\(x_j=3.4\\), branch to \\(x_j\\le 3\\) and \\(x_j\\ge 4\\). Every integer value belongs to exactly one child, so the split loses no integer solution.

## A complete exact tree

Consider

\\(\\operatorname{maximize} 5x+4y\\)

subject to \\(6x+4y\\le 17\\), \\(x,y\\ge 0\\) integers.

The root linear relaxation has its best value at \\((17/6,0)\\), value \\(85/6\\), approximately \\(14.167\\); another vertex \\((0,17/4)\\) has value 17, so in fact that is larger. Because y is bounded only by the constraint, root optimum is \\((0,17/4)\\), value 17. This deliberate comparison illustrates why checking all relevant vertices matters.

Branch on y:

- Node A: \\(y\\le 4\\). At \\(y=4\\), remaining capacity is one, so \\(x\\le 1/6\\); relaxation value is \\(16+5/6=101/6\\), approximately \\(16.833\\).
- Node B: \\(y\\ge 5\\) is infeasible because \\(4y>17\\).

At Node A branch on x:

- A1: \\(x=0\\) permits \\(y\\le 4\\); integer point \\((0,4)\\) has value 16.
- A2: \\(x\\ge 1\\). With x at least one, \\(4y\\le 11\\), so relaxed best at \\(x=1,y=11/4\\), value 16. Branch y into \\(y\\le 2\\) and \\(y\\ge 3\\).

For A2-left, the best integer point is \\((2,1)\\) with value 14: integer \\(x\\) can only be 1 or 2, and their best feasible integer \\(y\\) values are 2 and 1. Its relaxation is maximized at \\((3/2,2)\\), value \\(31/2\\), which is below the incumbent 16, so it closes by bound. For A2-right, \\(x\\ge 1,y\\ge 3\\) violates \\(6+12\\le 17\\), so it is infeasible. The incumbent \\((0,4)\\) has value 16, and every live region is closed with upper bound at most 16. Thus 16 is certified optimal.

The example is intentionally small enough to inspect. A production tree should store the exact branch condition, relaxation status, bound, incumbent update, and pruning reason at each node.

## Correcting weak bounds with cuts

A **valid inequality** holds for every integer-feasible point but may exclude fractional relaxation points. Add it to strengthen bounds without branching. A cut-generation loop separates a violated valid inequality, resolves, and stops when no selected-family violation remains or a resource limit is reached.

Absence of a cut from one family does not mean the point lies in the integer hull. It means the separation routine found no violation in that family under its tolerances.

### Triangle cut revisited

For the triangle stable-set relaxation, summing all three edge constraints gives \\(2(x_1+x_2+x_3)\\le 3\\), hence the fractional upper bound \\(3/2\\). The clique cut \\(x_1+x_2+x_3\\le 1\\) is valid for binary stable sets and closes the gap immediately.

Cut coefficients should be scaled and checked. Nearly parallel or enormous-coefficient cuts can damage numerical conditioning even when mathematically valid.

## Branching choices

Branching on the first fractional variable is deterministic and transparent. Strong branching tentatively evaluates candidates to predict bound improvement but costs extra solves. Pseudocosts learn from earlier branches. None changes correctness if child regions cover the parent; they change tree size and work.

Tie-breaking affects reproducibility. Record variable ordering, tolerance for integrality, and node-selection rule. Best-bound search prioritizes proof; depth-first search may find incumbents quickly with low memory. Hybrid policies balance both.

## Incumbent heuristics and their claim

Rounding, local improvement, or problem-specific construction can find feasible integer points. A heuristic incumbent improves pruning but remains only a lower bound in maximization. Failure to find a good point says nothing about the true optimum; success does not prove optimality until bounds close.

Always recheck heuristic feasibility against original constraints, preferably with exact arithmetic for small integer coefficients or a controlled residual policy.

## Numerical certification issues

Suppose a relaxation solver reports bound \\(10.0000001\\) and incumbent 10. Pruning at a loose tolerance might be appropriate for a requested approximate result but is not an exact proof that no better integer objective exists. If objectives are integral, a valid bound strictly below 11 can sometimes certify incumbent 10 after conservative rounding. The argument must account for solver bound validity.

For small instances, rational reconstruction or exact linear programming can verify terminal bounds. For larger ones, preserve solver certificates, tolerances, and proof logs when available.

## Complexity boundary

Branch-and-bound is finite for bounded integer domains under complete branching, but its tree can be exponential. A fast run on selected examples is not a polynomial-time guarantee. Cuts and branching exploit structure; no generic policy removes worst-case combinatorial difficulty.

## Common errors

- Reversing node-bound direction for maximization.
- Branching into children that omit or overlap integer cases without documenting it.
- Pruning from a heuristic estimate rather than a valid bound.
- Treating near-integer floating values as exact without feasibility checks.
- Reporting the incumbent as optimal while a live node has a better bound.

## Practice with solutions

**1. Prune by bound.** Incumbent value is 23. A live maximization node has a rigorous upper bound 22.7. Why can it close?

**Solution.** Every integer solution in the node has value at most 22.7, below the already feasible value 23, so it cannot improve the incumbent.

**2. Branch coverage.** A variable is required integer and relaxes to \\(-1.2\\). Give a valid split.

**Solution.** Use \\(x\\le -2\\) and \\(x\\ge -1\\). Every integer is in exactly one child, and the fractional value lies in neither child interior.

**3. Cut claim.** A new inequality removes the current fractional solution. Is that enough?

**Solution.** No. It must be valid for all integer-feasible points. Otherwise the altered model may discard the true optimum.

## Summary

The search tree is a proof object: branches cover possibilities, relaxations bound them, incumbents witness feasibility, and pruning reasons close them. Performance heuristics matter, but correctness rests on this invariant.

`;export{e as default};