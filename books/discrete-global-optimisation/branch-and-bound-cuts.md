
# Branch and Bound

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

For a fractional integer variable \(x_j=3.4\), branch to \(x_j\le 3\) and \(x_j\ge 4\). Every integer value belongs to exactly one child, so the split loses no integer solution.

## A complete exact tree

Consider

\(\operatorname{maximize} 5x+4y\)

subject to \(6x+4y\le 17\), \(x,y\ge 0\) integers.

The two nonzero axis vertices are \((17/6,0)\), with value \(85/6\), approximately \(14.167\), and \((0,17/4)\), with value 17. Comparing them identifies the root optimum as \((0,17/4)\), value 17. This exact comparison illustrates why checking all relevant vertices matters.

Branch on y:

- Node A: \(y\le 4\). At \(y=4\), remaining capacity is one, so \(x\le 1/6\); relaxation value is \(16+5/6=101/6\), approximately \(16.833\).
- Node B: \(y\ge 5\) is infeasible because \(4y>17\).

At Node A branch on x:

- A1: \(x=0\) permits \(y\le 4\); integer point \((0,4)\) has value 16.
- A2: \(x\ge 1\). With x at least one, \(4y\le 11\), so relaxed best at \(x=1,y=11/4\), value 16. Branch y into \(y\le 2\) and \(y\ge 3\).

For A2-left, the best integer point is \((2,1)\) with value 14: integer \(x\) can only be 1 or 2, and their best feasible integer \(y\) values are 2 and 1. Its relaxation is maximized at \((3/2,2)\), value \(31/2\), which is below the incumbent 16, so it closes by bound. For A2-right, \(x\ge 1,y\ge 3\) violates \(6+12\le 17\), so it is infeasible. The incumbent \((0,4)\) has value 16, and every live region is closed with upper bound at most 16. Thus 16 is certified optimal.

The example is intentionally small enough to inspect. A production tree should store the exact branch condition, relaxation status, bound, incumbent update, and pruning reason at each node.

## Cuts have a separate primary derivation

The [cutting-plane chapter](cutting-planes-gomory-cover.md) retains the original triangle-cut discussion and develops Gomory and lifted cover proofs. Branch-and-bound remains correct without those strengthening cuts whenever its node bounds and exhaustive disjunctions are valid. Cut choice changes the relaxation and work, while the tree invariant below records why no integer possibility is lost.

## Branching choices

Branching on the first fractional variable is deterministic and transparent. Strong branching tentatively evaluates candidates to predict bound improvement but costs extra solves. Pseudocosts learn from earlier branches. None changes correctness if child regions cover the parent; they change tree size and work.

Tie-breaking affects reproducibility. Record variable ordering, tolerance for integrality, and node-selection rule. Best-bound search prioritizes proof; depth-first search may find incumbents quickly with low memory. Hybrid policies balance both.

## Incumbent heuristics and their claim

Rounding, local improvement, or problem-specific construction can find feasible integer points. A heuristic incumbent improves pruning but remains only a lower bound in maximization. Failure to find a good point says nothing about the true optimum; success does not prove optimality until bounds close.

Always recheck heuristic feasibility against original constraints, preferably with exact arithmetic for small integer coefficients or a controlled residual policy.

## Numerical certification issues

Suppose a relaxation solver reports bound \(10.0000001\) and incumbent 10. Pruning at a loose tolerance might be appropriate for a requested approximate result but is not an exact proof that no better integer objective exists. If objectives are integral, a valid bound strictly below 11 can sometimes certify incumbent 10 after conservative rounding. The argument must account for solver bound validity.

For small instances, rational reconstruction or exact linear programming can verify terminal bounds. For larger ones, preserve solver certificates, tolerances, and proof logs when available.

## An induction proves the global bound

Let F be the original integer-feasible set. Each node represents its
subset satisfying the accumulated branch conditions. Maintain the invariant
that every point of F either belongs to an active node or has
been accounted for by a justified closure. At initialization the root
contains all of F. A branching disjunction preserves coverage because
every parent integer point belongs to a child. A valid cut preserves
all intended points in its declared scope. An infeasibility certificate
removes only an empty integer subset. A valid upper bound no larger
than a feasible incumbent removes only points that cannot improve its value.

If a relaxation optimizer is integer feasible, its value is both an
upper bound for that node and the value of an intended feasible point,
so that node is resolved exactly. This step needs a proved relaxation
optimum or a matching valid bound. A merely feasible integer point
returned during a partial relaxation solve improves the incumbent but
does not close every remaining possibility in its node.

Consequently the current global upper bound is the maximum of the
incumbent and all active node bounds. Including the incumbent makes
the expression correct even when every live bound is smaller or
the active set is empty. Before an incumbent exists, its lower
bound can be treated as minus infinity. If every node closes
by infeasibility without finding a point, the result is infeasibility,
rather than an optimum with value minus infinity under an unstated convention.

This induction separates search policy from correctness. Best-bound,
depth-first and hybrid choices inspect different parts of the same
cover. They can change memory use and how soon a good incumbent
appears, but they do not change the logic of a valid pruning
step. A work limit leaves the best supported bound interval and
the unresolved active nodes, rather than retroactively resolving them.

## Worked example: a binary tree with explicit bound arithmetic

Maximize 5x+4y with 3x+2y≤4 and binary x,y. The root
relaxation maximizes at (2/3,1), value 22/3. A direct upper
certificate is obtained by multiplying the capacity row by
5/3 and the upper bound y≤1 by 2/3. Their sum has
left side 5x+4y and right side 22/3.

Branch on x. In the zero child, y=1 is feasible and
optimal, giving incumbent four. In the one child, the
capacity gives y≤1/2, so the relaxation upper bound is
seven. Branch that child on y. The zero grandchild has
integer point (1,0) of value five and is resolved; the
one grandchild violates the capacity because three plus
two exceeds four. No nodes remain, so five is optimal.
All branch conditions, witnesses and bounds are explicit.

The bound seven in the second child was not itself a
feasible integer value, and rounding it down would not
have closed the node against incumbent four. The actual
disjunction was necessary for this particular proof.
A different valid cut might shorten the proof but would
need its own derivation. Tree size and certificate validity
are different properties even in a four-assignment example.

## Worked example: reversing every bound for minimization

Minimize 3x+2y with 2x+2y≥3 and binary x,y. The root
relaxation gives (1/2,1), value 7/2, a lower bound.
Indeed y≤1 forces x≥1/2 and the objective is the
capacity left side plus x, at least 3+1/2. Branching
on x gives an infeasible zero child and a one child
with y≥1/2, lower bound four. Branch on y there:
zero is infeasible and one gives point (1,1), value
five. Both leaves close and five is the optimum.

The feasible incumbent supplied an upper bound, opposite
to the maximizing examples. At each live node the
relaxation supplied a lower bound. A global lower bound
is the minimum of active lower bounds and the incumbent,
and pruning compares node lower bounds with that upper
incumbent. The proof pattern is the same, but copying
the earlier maximum or inequality direction unchanged
would make it wrong.

## A finite-tree theorem has explicit hypotheses

Assume every integer coordinate has finite integer lower
and upper bounds, every processed relaxation is resolved
with the required valid bound or infeasibility evidence,
and branching always splits a fractional integer coordinate
at its floor and ceiling. A fractional coordinate lies
strictly between its node's integer endpoints. Each child
therefore has a strictly smaller interval of possible
integer values in that coordinate. The child boxes
partition the parent box's integer assignments.

There are only finitely many assignments in the root
box. Repeated exhaustive splits eventually fix all integer
coordinates or prune their region earlier. In a mixed
linear model, a leaf with all integer coordinates fixed
still needs its continuous subproblem resolved; assuming
finite attained optima for these subproblems makes its
relaxation solution an exact leaf resolution. Finite
inner work and bounded cut loops are algorithmic
requirements, rather than consequences of the finite
assignment count.

The resulting tree can nevertheless have exponentially
many leaves in the input dimension. This theorem proves
finite termination under its oracle and bounded-domain
assumptions, not a polynomial bit-complexity guarantee.
Unbounded integer domains or unresolved continuous
subproblems require different arguments.

An unbounded relaxation alone does not prove the
integer model unbounded. For example an integer x
forced equal to one half makes the original set empty,
while an independent continuous y can make its relaxation
objective unbounded. A feasible original point and a
valid improving ray, or an equivalent proof, are needed
before reporting original unboundedness.

## The requested output changes tie pruning

For finding one optimum and its value, a maximizing
node with upper bound equal to the incumbent may
close: it cannot improve the requested result. If the
request is to enumerate every optimizer, that same
closure can delete alternatives with the identical
value. Then equality requires further exploration or
a representation of all tied solutions. Only a
strictly smaller upper bound excludes an additional
optimizer at the current best value.

For example maximizing x over two unconstrained binary
variables has optimizers (1,0) and (1,1). After finding
the first, a node fixing the second coordinate to one
has upper bound one, equal to the incumbent. Pruning
is correct for an optimal-value request and incomplete
for full enumeration. The problem contract must name
which output is intended before its closure rules
are declared complete.

## Complexity boundary

Branch-and-bound is finite for bounded integer domains under complete branching, but its tree can be exponential. A fast run on selected examples is not a polynomial-time guarantee. Cuts and branching exploit structure; no generic policy removes worst-case combinatorial difficulty.

## Common errors

- Reversing node-bound direction for maximization.
- Branching into children that omit or overlap integer cases without documenting it.
- Pruning from a heuristic estimate rather than a valid bound.
- Treating near-integer floating values as exact without feasibility checks.
- Reporting the incumbent as optimal while a live node has a better bound.

## Reusing a bound requires containment in the right direction

A valid parent upper bound
also bounds every child
subset in maximization.
It can safely initialize
a child's bound until
a stronger certificate arrives.
A child upper bound does
not automatically bound its
parent or sibling, because
the best solution may
lie outside that child.
After an exhaustive split,
the maximum of the two
valid child bounds bounds
the parent; their minimum
or average need not.

This reuse rule is a
set-containment proof, independent
of which relaxation was
easiest to solve. Storing
the source region and
scope beside each bound
prevents a promising child
number from silently entering
the global ledger as
though it covered every
alternative. Tighter child
domains can inherit an
older weaker bound without
invalidity, while a stronger
number borrowed from a
noncontaining region can
invalidate pruning. Strength
and correctness remain
different properties of
the bound record.

## Practice with solutions

**1. Prune by bound.** Incumbent value is 23. A live maximization node has a rigorous upper bound 22.7. Why can it close?

<details>
<summary>Hint 1</summary>

Every descendant is bounded above by the node certificate.
</details>
<details>
<summary>Hint 2</summary>

Compare its bound with an already feasible objective value.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every integer solution in the node has value at most 22.7, below the already feasible value 23, so it cannot improve the incumbent.
</details>


**2. Branch coverage.** A variable is required integer and relaxes to \(-1.2\). Give a valid split.

<details>
<summary>Hint 1</summary>

Use floor and ceiling, including their negative-number conventions.
</details>
<details>
<summary>Hint 2</summary>

The floor is minus two and ceiling minus one.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Use \(x\le -2\) and \(x\ge -1\). Every integer is in exactly one child, and the fractional value lies in neither child interior.
</details>


**3. Cut claim.** A new inequality removes the current fractional solution. Is that enough?

<details>
<summary>Hint 1</summary>

The current fractional point is only one point.
</details>
<details>
<summary>Hint 2</summary>

An integer-valid inequality must preserve every intended integer-feasible point.
</details>
<details>
<summary>Full solution</summary>

**Solution.** No. It must be valid for all integer-feasible points. Otherwise the altered model may discard the true optimum.
</details>

### Exercise 4: an integer feasible iterate is not enough

A partial maximizing relaxation solve finds an integer point of value
12 but its valid upper bound is 15. May the node close as solved?

<details>
<summary>Hint 1</summary>

The point improves a lower bound but leaves room above it.
</details>
<details>
<summary>Hint 2</summary>

Closing as an integral relaxation optimum needs matching upper evidence.
</details>
<details>
<summary>Full solution</summary>

No. The point supplies incumbent value at least twelve,
while the node may still contain a better integer point
up to fifteen. Integrality of one returned point does
not prove relaxation optimality. Continue solving, branch
or use another valid bound before closing the node.
</details>

### Exercise 5: a global bound with no active nodes

A maximizing search has incumbent seven and its active set is empty
after valid closures. State the final upper bound and conclusion.

<details>
<summary>Hint 1</summary>

Include the incumbent in the maximum defining the global bound.
</details>
<details>
<summary>Hint 2</summary>

The empty active set does not require taking an undefined standalone maximum.
</details>
<details>
<summary>Full solution</summary>

The global upper bound is seven, matching the feasible
incumbent lower bound. The invariant accounts for every
integer-feasible point, so seven is optimal. If no
incumbent had ever existed and every node closed by
proved infeasibility, the conclusion would instead be
that the original feasible set is empty.
</details>

### Exercise 6: an approximate stopping allowance

A maximizing search has feasible incumbent 10 and rigorous global
upper bound 10.04. What exact absolute guarantee supports stopping?

<details>
<summary>Hint 1</summary>

Subtract the incumbent from the valid upper bound.
</details>
<details>
<summary>Hint 2</summary>

The guarantee concerns the stated objective units.
</details>
<details>
<summary>Full solution</summary>

The optimum lies between 10 and 10.04, so the incumbent
is at most 0.04 below it. This supports an absolute
0.04-optimal claim, not exact optimality unless additional
objective-lattice information closes the interval. A
relative claim requires a declared positive scale and
the same bound-validity assumptions.
</details>

### Exercise 7: a minimization pruning comparison

In a minimizing tree, the incumbent is eight and a node has
rigorous lower bound 8.3. Explain its closure.

<details>
<summary>Hint 1</summary>

Every descendant objective is at least the node lower bound.
</details>
<details>
<summary>Hint 2</summary>

Compare with an already feasible upper value eight.
</details>
<details>
<summary>Full solution</summary>

No descendant can improve on the feasible value eight,
so the node may close by bound. The maximizing rule
would compare an upper node bound with a lower
incumbent instead. Keeping the optimization direction
attached to each value prevents reversing this logic.
</details>

### Exercise 8: count bounded assignments

Three integer variables have domains {0,1}, {−1,0,1} and {2,3}.
How many root-box assignments exist, and does that count bound runtime polynomially?

<details>
<summary>Hint 1</summary>

Multiply the three domain sizes.
</details>
<details>
<summary>Hint 2</summary>

The product can grow exponentially as variables are added.
</details>
<details>
<summary>Full solution</summary>

There are twelve assignments. Exhaustive finite splitting
can separate them all, under the node-resolution assumptions.
A general product of domain sizes is not a polynomial
bound in dimension or binary input length. Nor does
it bound the cost of resolving each continuous node
without an additional algorithmic model.
</details>

### Exercise 9: preserve all tied optimizers

For max x with binary x,y, an incumbent is (1,0). Can the
node y=1 with upper bound one be discarded when enumerating all optima?

<details>
<summary>Hint 1</summary>

The sibling contains another point with the same objective.
</details>
<details>
<summary>Hint 2</summary>

Value optimality and solution-set enumeration ask different questions.
</details>
<details>
<summary>Full solution</summary>

It cannot be discarded without representing its tied
solution, because (1,1) is also optimal. The same
pruning is valid when only one optimum and its value
are requested. The equality case in a bound rule
depends on that output contract.
</details>

### Exercise 10: an unbounded relaxation of an empty integer model

Let x be integer with x=1/2 and let continuous y≥0 be maximized.
State the original feasibility and the relaxation status.

<details>
<summary>Hint 1</summary>

The equality is impossible for an integer x.
</details>
<details>
<summary>Hint 2</summary>

After relaxing x, y can grow without bound independently.
</details>
<details>
<summary>Full solution</summary>

The integer model is infeasible. Its continuous relaxation
is feasible and unbounded in y. Therefore relaxation
unboundedness alone cannot distinguish original infeasibility
from original unboundedness. A complete conclusion needs
integer feasibility or a structural contradiction, not
only the relaxation's status.
</details>

## Summary

The search tree is a proof object: branches cover possibilities, relaxations bound them, incumbents witness feasibility, and pruning reasons close them. Performance heuristics matter, but correctness rests on this invariant.

