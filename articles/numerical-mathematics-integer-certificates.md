
# Integer Optimality Certificates: Relax, Branch, Bound, Verify

**Before reading.** Read [Convexity, Optimality, and Dual Certificates](../books/optimization-backprop-from-scratch/convexity-optimality-duality.md), [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md). These are preparation for the ideas used below.

This article assumes linear inequalities, binary variables, and the distinction
between a feasible point and an optimum. Linear programming duality is
introduced only as a certificate; a full optimization course should precede
implementation work.

## The proof hidden inside a search

An integer optimizer can return a candidate quickly and still be far from proving it best. A certificate needs two sides. For maximization:

- an integer-feasible point gives a lower bound L;
- a valid relaxation gives an upper bound U;
- $L\le z*\le U$.

This deep dive develops that invariant through one exact graph example. It stays with bounded mathematical instances, not operational applications.

## Worked example: a five-cycle independent set

Let vertices be $1,\ldots,5$ around a cycle, and binary $x_{i}$ indicate selection. Adjacent vertices cannot both be chosen:

$$maximize x_{1}+\ldots+x_{5}$$

subject to $x_{i}+x_{i+1}\le 1$ cyclically and $x_{i} \in \{0,1\}$.

Selecting vertices 1 and 3 is feasible, so L=2. In the linear relaxation, set every $x_{i}=1/2$; value is $5/2$. Summing all five edge inequalities gives

$$2 \sum x_{i}\le 5$$

so no relaxed point exceeds $5/2$. Therefore U=$5/2$, and the root integrality gap is $1/2$.

Because integer objective values are integral and $2\le z*\le 2.5$, we can already conclude $z*=2$. The fractional bound need not equal the integer optimum to certify it; it only needs to lie below the next possible integer value.

## A valid odd-cycle cut

Every independent set in a five-cycle has at most two vertices, so

$$x_{1}+\ldots+x_{5}\le 2$$

is valid. Adding it closes the relaxation gap. The proof of validity is combinatorial: among five cyclic positions, choosing three forces some adjacent pair.

A cut is not justified because it removes $(1/2,\ldots,1/2)$. It is justified because it preserves **every** integer-feasible point.

## Branching as a partition proof

Suppose no odd-cycle cut is available and branch on $x_{1}$.

- Child A: $x_{1}=1$. Then $x_{2}=x_{5}=0$; the remaining edge permits at most one of x3,x4, so node upper bound is 2 and an integer solution attains it.
- Child B: $x_{1}=0$. The remaining path on four vertices has relaxation and integer optimum 2.

Both children have upper bound at most incumbent 2, so the tree closes. The branch is valid because binary possibilities $x_{1}=0$ and $x_{1}=1$ cover the parent exactly.

The proof object is a table:

| node | restriction | relaxation upper bound | feasible lower bound | reason closed |
|---|---|---:|---:|---|
| root | none | $5/2$ | 2 | branch or integer-rounding argument |
| A | $x_{1}=1$ | 2 | 2 | zero gap |
| B | $x_{1}=0$ | 2 | 2 | zero gap |

The exact table is more informative than an opaque “optimal” flag.

## A dual bound that another checker can verify

Relax integrality in the small problem

\[
\max\ x_1+x_2
\quad\text{subject to}\quad
2x_1+x_2\le4,\quad x_1+2x_2\le4,\quad x\ge0.
\]

The integer point \((1,1)\) is feasible and has value \(2\). To bound every
relaxed point, multiply each constraint by \(1/3\) and add:

\[
x_1+x_2\le\frac83.
\]

These nonnegative multipliers form a dual-feasible certificate. Because an
integer-feasible objective is integral,

\[
2\le z^\ast\le\left\lfloor\frac83\right\rfloor=2,
\]

so \((1,1)\) is optimal for the integer problem. A checker needs only the
original inequalities, the candidate point, and the rational multipliers. It
does not need to trust the optimizer's search order.

This example also exposes a boundary. If the objective coefficients were not
integral, flooring the upper bound would be invalid. If a multiplier were
negative, multiplying a “less than or equal” constraint could reverse the
inequality. Certificate verification must check signs and arithmetic, not only
the final number.

## Formulation strength before search

Pairwise edge constraints are enough to define integer stable sets but do not describe their convex hull. Adding valid clique and odd-cycle inequalities strengthens the fractional geometry. A stronger formulation can shrink the tree, but separation and denser linear systems cost work.

Symmetry can multiply equivalent branches. If variables are interchangeable under a problem automorphism, a symmetry-breaking rule can choose one representative, but it must preserve at least one solution from every equivalence class relevant to the objective.

## Conservative floating-point bounds

Exact examples use rational bounds. In floating-point search, a solver may return a relaxation value slightly below the true relaxation optimum because of tolerance. Pruning from an invalidly low maximization upper bound can lose the optimum.

Safe certification uses one of:

- exact rational solve for the bounded small case;
- outward-rounded or verified LP bounds;
- a proof log independently checked;
- conservative rounding using known integral objective structure and validated solver guarantees.

An integrality tolerance defines when a stored value is treated as integer for heuristics. Final feasibility should be rechecked against original integer and linear constraints.

## Infeasibility certificates

A node can be pruned as infeasible only when its relaxation infeasibility is itself trusted. Contradictory bounds such as $x\le 0$ and $x\ge 1$ for a binary branch are exact. General floating-point linear infeasibility may require a dual ray or exact check.

Failure to find a feasible point is not infeasibility. Time limit is not a mathematical status.

## Bound-aware stopping

For maximization with incumbent L and global upper U:

- exact absolute gap: $U-L$;
- a declared relative gap might be $(U-L)/\max(1,|L|)$;
- for integral objectives, $U<L+1$ proves L optimal if U is valid.

If a user requests an approximate gap, the solver may stop before exact proof. The report must say “feasible within gap epsilon,” not simply “optimal,” unless the certificate actually closes.

## Common errors

- Rounding a relaxed point and assuming feasibility.
- Reversing lower and upper bounds for maximization.
- Treating an incumbent heuristic as a proof.
- Adding an inequality because it looks plausible at one fractional point.
- Declaring infeasibility after a search limit.
- Ignoring coefficient scaling because variables are integer.

## Practice with solutions

<a id="deep-dive-numerical-mathematics-integer-certificates-ex-1"></a>

**Exercise 1.**

**1. Integral objective.** Incumbent is 8 and a rigorous maximization upper bound is 8.99. What follows?
<details>
<summary>Hint 1</summary>

The incumbent is feasible, and the upper bound applies to every feasible objective.
</details>
<details>
<summary>Hint 2</summary>

Use integrality to decide whether any integer objective strictly between eight and 8.99 exists.
</details>
<details>
<summary>Solution</summary>

If every feasible objective value is integral, no value 9 or above fits below 8.99, so incumbent 8 is optimal.

</details>

<a id="deep-dive-numerical-mathematics-integer-certificates-ex-2"></a>

**Exercise 2.**

**2. Weak gap.** Incumbent is 8 and upper bound is 100. Is the incumbent poor?
<details>
<summary>Hint 1</summary>

A wide upper bound measures how weak the certificate is, not necessarily how weak the incumbent is.
</details>
<details>
<summary>Hint 2</summary>

Compare the two possibilities: optimum could equal eight or be much larger while the current bound remains one hundred.
</details>
<details>
<summary>Solution</summary>

Not necessarily. The bound is weak; the true optimum could still be 8. The certificate is poor even if the solution happens to be best.

</details>

### Further practice

**3. Branch coverage.** For integer x relaxed to 2.3, why do children $x\le 2$ and $x\ge 3$ suffice?

**Solution.** Every integer is at most 2 or at least 3. The union contains every integer point from the parent, while excluding the fractional value.

## Final certificate template

Publish formulation, variable domains, exact or validated relaxation, incumbent witness, global bound, gap convention, branch/cut log, feasibility recheck, tolerance policy, and unresolved nodes. The certificate—not the size of the search—supports the claim.

An independent checker should proceed in dependency order: first parse the
original domains and constraints; then verify the incumbent; then verify every
cut or dual multiplier; then confirm that child nodes cover each branch; and
only then combine leaf bounds into the global bound. A corrupted early premise
must invalidate every conclusion that depends on it. Record exact rational
values where practical and identify any step that still relies on a
floating-point tolerance or an external solver guarantee.
