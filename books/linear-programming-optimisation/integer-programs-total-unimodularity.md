
# Integer Programmes and Total Unimodularity


## When a continuous optimum is implementable

Linear variables can represent divisible quantities, but a vehicle, a shift assignment or an opened facility may be indivisible. Adding integrality changes the feasible set even though every equation remains linear. Sometimes the LP relaxation already has an integral optimal vertex; sometimes its best value is only a bound. This chapter gives a precise sufficient matrix condition, illustrates its limits and explains the basic branch-and-bound certificate.

Required preparation is [polyhedra](polyhedra-extreme-points.md), [basic feasible solutions](standard-form-basic-feasible-solutions.md), dual bounds and [network incidence matrices](network-flows-transportation.md). The advanced Polyhedral Integrality and Valid Inequalities chapter is linked for integer hulls, facets and separation. Its lesson and exercise sequence are not reproduced here; this chapter develops an original first-course route from LP bases to implementable integer decisions.

**Definition 14.1 (Integer programme and relaxation).** A pure integer programme requires every decision coordinate to lie in the integers. A mixed-integer programme designates only some coordinates as integer. Its LP relaxation removes those integrality restrictions while retaining the same linear objective and constraints.

For maximisation, every integer-feasible point is relaxation-feasible. Therefore the relaxation optimum is an upper bound on the integer optimum whenever the latter exists. For minimisation it is a lower bound. A relaxation that is infeasible proves the integer model infeasible; a relaxation that is feasible does not prove an integer point exists.

**Definition 14.2 (Integrality gap with conventions).** When both relevant finite optima exist, an additive maximisation gap is the LP value minus the integer value. A ratio gap needs its own nonzero-denominator and sign convention. It is a property of the stated formulation and objective, not the error made by an LP solver.

Two algebraically equivalent integer formulations can have different continuous relaxations. Auxiliary variables and linking constraints can strengthen or weaken the bound. Therefore an integrality-gap claim must identify the actual relaxation rather than only the intended set of integer decisions.

## Rounding is a new algorithm

**Example 14.3 (A fractional bound and unsafe rounding).** Maximise $x_1+x_2$ under
$$2x_1+2x_2\le3,\qquad 0\le x_i\le1.$$
The relaxation has value $3/2$, for example at $(1,1/2)$. With binary variables the sum is an integer at most $3/2$, hence at most one, and $(1,0)$ attains one. The additive gap is one half. Rounding the fractional coordinate upward produces $(1,1)$, which consumes four units against capacity three and is infeasible. Rounding downward happens to give an optimum here, but that single success is not a theorem for other coupled constraints.

Even a feasible rounded point may be poor in objective. If a high-value activity needs several linked decisions simultaneously, independently rounding its components can destroy that value. A rounded proposal must be checked against every original constraint and compared with a valid bound. Decimal closeness of each coordinate is not the same as satisfaction of a coupled equality or capacity.

An exactly integral LP optimum can be implemented only after its model is verified: bounds, units, row signs and designated integer variables must match the intended decision. A computed value such as 0.999999 is an approximation requiring a declared acceptance and feasibility policy, not an integer identity. Exact small cases and independently recomputed residuals help separate that numerical issue from a true fractional optimum.

## A determinant condition for integral vertices

**Definition 14.4 (Total unimodularity).** A real matrix is totally unimodular, abbreviated TU, if every square submatrix has determinant zero, one or minus one. The one-by-one determinants imply every entry is zero, one or minus one. Having only such entries is necessary but not sufficient.

**Lemma 14.5 (Identity rows preserve TU).** Appending rows that have a single entry plus or minus one and zeros elsewhere to a TU matrix preserves total unimodularity.

*Proof.* Consider a square submatrix using an appended row. If that row restricts to zeros its determinant is zero. Otherwise expand along its sole nonzero entry, reducing to a smaller square determinant. Repeat for other appended rows. Eventually the determinant is zero or a sign times a square determinant of the original TU matrix. ∎

**Theorem 14.6 (TU and integral right-hand sides).** If A is TU and b is integral, every vertex of
$$P=\{x\in\mathbb R^n:Ax\le b,\ x\ge0\}$$
is integral. If a linear objective has an attained optimum at a vertex, that vertex is also an optimal integer solution.

*Proof.* Append the nonnegativity rows $-I$. The lemma preserves TU. At a vertex, choose n independent tight constraint normals, giving a nonsingular square system $Bx=d$ with integral d. Its determinant is plus or minus one because B is a nonsingular TU submatrix. The adjugate of B has integer entries, each a signed determinant of an integer submatrix. Thus $B^{-1}d$ is integral. The final conclusion follows because this feasible integer vertex attains the relaxation bound, which no integer point can exceed in maximisation or beat in minimisation. ∎

The hypotheses are separate. TU does not imply a feasible set is nonempty, bounded or has an optimum. Integral b matters: $x\le1/2$ has TU coefficient one and a fractional endpoint. A linear optimum on a polyhedron with lines may require a quotient or another representation before a vertex statement applies. Bounded nonempty polytopes supply a clean attained-vertex setting for this theorem.

Degeneracy creates no difficulty: more than n rows may be tight, but an independent subset still defines the same vertex. A selected basis has determinant plus or minus one and its integral RHS fixes the point. The theorem concerns vertices, not every feasible point; convex combinations of integral vertices can of course be fractional.

## Assignment and transportation

The directed incidence proof in the [network chapter](network-flows-transportation.md) shows its matrices are TU. For a bipartite assignment matrix, orient every edge from a row node to a column node. Multiplying all column-node balance rows by minus one converts its unsigned two-one columns into directed incidence columns. Row sign changes preserve square determinant magnitudes, so the original assignment matrix is TU as well.

Equalities can be represented by their rows and negatives; any square submatrix using both a row and its negative has dependent rows, while otherwise its determinant is a signed subdeterminant of the original. Adding upper or lower bound rows also preserves TU. With integer supplies, demands and capacities, an optimal transportation vertex can therefore be chosen integral under the usual existence conditions.

**Example 14.7 (A continuous assignment certificate).** Two workers and two tasks have profits
$$C=\begin{pmatrix}7&5\\6&1\end{pmatrix}.$$
Each worker and each task must be used once. Every feasible doubly stochastic matrix is
$$X=\begin{pmatrix}t&1-t\\1-t&t\end{pmatrix},
\qquad0\le t\le1.$$
Profit is $11-3t$, maximised at $t=0$. The crossed assignment has value eleven and is binary. Dual row potentials $(5,4)$ and column potentials $(2,0)$ majorise each profit entry, with total eleven. Weighted summation of those coefficient bounds proves the LP upper bound, so the integer assignment is globally optimal.

The two-by-two parametrisation makes the certificate transparent. In larger bipartite assignment problems, the TU theorem supplies the integral-vertex reasoning without enumerating every assignment. It does not say every optimum returned as a convex combination is itself integral: if several vertices tie, an interior point of their optimal face may also be optimal and fractional.

## How an added row destroys the guarantee

**Example 14.8 (A unit-entry matrix with a fractional vertex).** Maximise x under
$$x+y\le1,\qquad x-y\le0,\qquad x,y\ge0.$$
The two nonnegativity-compatible boundary equations meet at $(1/2,1/2)$, giving relaxation value one half. Every nonnegative integer solution has x zero: if x were at least one, y would be at least one and their sum at least two. Hence the integer value is zero.

The two active coefficient rows form
$\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, whose determinant is minus two. The first row alone is TU, but adding the second destroys that property. Every entry is still zero or plus or minus one. An integral matrix is not necessarily TU, and a single extra coupling constraint can remove an earlier network integrality theorem.

Failure of TU is not itself proof that every RHS produces a fractional optimum. For example the one-row matrix (2) is not TU, while $2x\le2$, $x\ge0$ has integral endpoints. TU is a uniform sufficient structural theorem; a particular non-TU instance can still have an integral relaxation. Conversely a fractional vertex may not optimise a particular c, so finding one identifies a possible gap rather than the gap for every objective.

## Branching as a partition proof

Suppose a relaxation solution has a designated integer coordinate $x_j=v$ with v nonintegral. Its integer-feasible descendants satisfy one of
$$x_j\le\lfloor v\rfloor,\qquad
x_j\ge\lceil v\rceil.$$

**Proposition 14.9 (Branch coverage).** These two children are disjoint on the integer set, cover every parent integer-feasible point and exclude the fractional value v.

*Proof.* Every integer is either at most $\lfloor v\rfloor$ or at least the next integer $\lceil v\rceil=\lfloor v\rfloor+1$. No integer belongs to both, and v lies strictly between the two bounds. Adding either inequality preserves every other parent constraint. ∎

At each node, solve or bound its LP relaxation. An infeasible relaxation removes the node. For maximisation, a verified node upper bound no greater than the value of a feasible incumbent removes it when only one optimum value or solution is required. An integral relaxation optimum improves or ties the incumbent. Otherwise branch again. If every leaf has been processed with valid bounds, coverage proves no omitted integer point can improve the incumbent.

To enumerate all optimal solutions, equality-bound pruning needs care: a tied node can contain another optimum. Keep it or record what solution set was intentionally discarded. A solver's best bound, incumbent value and relative gap also need explicit conventions when values are zero or negative.

For a bounded integer box with integral endpoints, this splitting has finite depth: each nonempty child tightens at least one integer endpoint, reducing the sum of integer interval widths by at least one. The resulting finite tree proves termination under exact node solves and explicit boundedness. It does not imply polynomial effort, and it does not describe the full complexity of practical mixed-integer methods.

## Infeasibility, unboundedness and cuts

An unbounded LP relaxation does not alone classify the integer problem. Maximise y with $2x=1$ and $x,y\ge0$. The relaxation fixes $x=1/2$ and is unbounded in y, while requiring integer x makes the original problem infeasible. A true integer-unboundedness certificate needs an integer-feasible starting point and a compatible indefinitely improving sequence or ray.

A valid cut is an inequality true for every intended integer-feasible point. The first example permits $x_1+x_2\le1$ because their integer sum is at most $3/2$. The argument, rather than the observed improvement, licenses removing fractional points. A cut that merely excludes an inconvenient fractional optimum without preserving the integer set changes the problem.

The linked advanced polyhedral chapter develops integer hulls, facets and separation in greater detail. Here the essential habit is already complete: state the integer set, prove each relaxation bound or added inequality, and retain the partition argument for every branch. A feasible integer plan plus a matching upper bound is an optimisation certificate; neither integrality nor a small solver gap validates the model's practical assumptions.

## The certificate is about a formulation

To use an integrality theorem, include every row actually present in the relaxation. A network balance block may be TU while a linking budget or a ratio constraint destroys that property. Showing only the familiar submatrix is insufficient. Bounds are safe under the proved unit-row closure, whereas multiplying an arbitrary row by two need not preserve TU even when an equivalent integer model can be described another way.

Units can obscure this distinction. Writing a capacity in half-unit increments may introduce coefficients or right-hand sides that look fractional. Converting to a smallest indivisible unit can restore an integral RHS, but the variables and objective must be converted consistently. A theorem about integer x does not automatically describe a variable measured in thousands of items.

Feasible-set integrality and an integral output are also different. A continuous interior method can return a fractional point on an optimal face whose vertices are integral. If an implementable vertex is required, use a justified recovery or optimise a suitable additional criterion, then recheck the original equations. Arbitrarily rounding that face point is still a new procedure.

Finally, keep objective bounds valid when numerical tolerances are used. A relaxation value that is slightly underestimated is not a safe upper bound for maximisation. Pruning against it could remove a genuinely better integer plan. Exact rational arithmetic, validated bounds or a justified correction margin make the branch certificate robust; a narrow printed gap without those details does not establish exhaustive optimality.

## Exercises

### Exercise 1: Relaxation direction
<a id="integer-programs-total-unimodularity-ex-1"></a>

For a maximisation integer programme, which direction is the LP bound?

<details>
<summary>Hint 1</summary>

**Hint.** Compare feasible sets.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Removing integrality enlarges the candidate set.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is an upper bound: every integer-feasible solution remains LP-feasible, so its objective cannot exceed the relaxation supremum. An LP-feasible point need not be implementable as an integer plan.

</details>

### Exercise 2: Rounding violation
<a id="integer-programs-total-unimodularity-ex-2"></a>

Round (1,1/2) upward in the first example and check capacity.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the original left-hand side.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Do not inspect coordinates alone.

</details>

<details>
<summary>Solution</summary>

**Solution.** The rounded point is $(1,1)$ and consumes four units, exceeding the bound three. It is infeasible even though each coordinate changed by at most one half.

</details>

### Exercise 3: A non-TU determinant
<a id="integer-programs-total-unimodularity-ex-3"></a>

Compute the determinant of $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the two-by-two formula.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare with the allowed TU values.

</details>

<details>
<summary>Solution</summary>

**Solution.** The determinant is minus two, so the matrix is not TU. Unit-magnitude entries alone do not certify total unimodularity.

</details>

### Exercise 4: Integral RHS
<a id="integer-programs-total-unimodularity-ex-4"></a>

Why is x<=1/2 a counterexample to dropping the integral-RHS hypothesis?

<details>
<summary>Hint 1</summary>

**Hint.** The coefficient matrix (1) is TU.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its boundary value is the RHS.

</details>

<details>
<summary>Solution</summary>

**Solution.** The feasible interval $0\le x\le1/2$ has fractional vertex one half despite a TU coefficient. The theorem needs integral b, not merely integral matrix entries.

</details>

### Exercise 5: Assignment value
<a id="integer-programs-total-unimodularity-ex-5"></a>

For the worked assignment, verify the crossed plan's objective and dual bound.

<details>
<summary>Hint 1</summary>

**Hint.** Use the two crossed profit entries.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum all dual potentials.

</details>

<details>
<summary>Solution</summary>

**Solution.** The crossed profit is $5+6=11$. Dual row potentials sum to nine and column potentials to two, giving upper bound eleven. Every coefficient inequality holds, so equality proves optimality.

</details>

### Exercise 6: TU versus points
<a id="integer-programs-total-unimodularity-ex-6"></a>

Does TU imply every feasible real vector is integral?

<details>
<summary>Hint 1</summary>

**Hint.** The theorem concerns vertices.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take a line segment between two integer vertices.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. For example $0\le x\le1$ has TU constraints and integral vertices, but x=1/2 is feasible. Integrality of vertices ensures an appropriate optimal vertex can be chosen, not that the entire polyhedron contains only lattice points.

</details>

### Exercise 7: Branch partition
<a id="integer-programs-total-unimodularity-ex-7"></a>

Branch on a relaxed integer coordinate with value 3.4.

<details>
<summary>Hint 1</summary>

**Hint.** Use floor and ceiling.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every intended value is integer.

</details>

<details>
<summary>Solution</summary>

**Solution.** The children impose $x_j\le3$ and $x_j\ge4$. They cover all integer parent choices, are disjoint on those choices and exclude the fractional value 3.4.

</details>

### Exercise 8: Bound pruning
<a id="integer-programs-total-unimodularity-ex-8"></a>

A maximisation node has verified upper bound 12 and the incumbent is feasible with value 12. Can it be pruned?

<details>
<summary>Hint 1</summary>

**Hint.** Decide whether one optimum or every optimum is required.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The node cannot improve the incumbent value.

</details>

<details>
<summary>Solution</summary>

**Solution.** It can be pruned when only the optimum value or one optimal solution is needed. It may contain other tied optima, so exhaustive optimal-solution enumeration needs a different policy.

</details>

### Exercise 9: Unbounded relaxation
<a id="integer-programs-total-unimodularity-ex-9"></a>

Classify the relaxation and integer version of max y, 2x=1, x,y>=0.

<details>
<summary>Hint 1</summary>

**Hint.** Solve the equality for x.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then impose integrality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The LP relaxation has x=1/2 and unbounded y. The integer model is infeasible because no integer x solves 2x=1. Relaxation unboundedness alone therefore does not prove integer unboundedness.

</details>

### Exercise 10: A valid cut
<a id="integer-programs-total-unimodularity-ex-10"></a>

Derive x1+x2<=1 from 2x1+2x2<=3 for nonnegative integers.

<details>
<summary>Hint 1</summary>

**Hint.** Divide the inequality by two.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The left side is an integer.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum is an integer at most 3/2, hence at most one. The new inequality removes fractional relaxation points while preserving every intended integer point; that arithmetic argument proves validity.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The advanced Polyhedral Integrality and Valid Inequalities source is further reading, not copied lesson content. The TU basis argument and branch-coverage proof used here are given directly. General cutting-plane and mixed-integer complexity results are outside this introduction.

## Summary

Integrality changes implementable choices while an LP relaxation provides a one-sided bound. TU matrices with integral right-hand sides guarantee integral vertices under explicit attainment conditions, explaining assignment and network special cases. Added rows can destroy that structure, and rounding is not a universal repair. Branch-and-bound instead proves coverage and exclusion through valid node bounds and integer partitions.
