
# Heuristics and Local Search

A feasible integer point can be valuable long before a global proof is available. It improves the incumbent, narrows a valid bound interval and can prune large parts of a search tree. Heuristics aim to find such points quickly. Their output must retain that feasible-candidate meaning unless a separate theorem or certificate supports a stronger conclusion.

Assume integer formulations, relaxation bounds, finite graphs and elementary probability. This chapter proves finite local improvement and one specific approximation result, then contrasts them with examples where rounding, pumping or a restricted neighbourhood fails. The word heuristic identifies a search role; it does not imply that every statement about the method is unproved. Each proved guarantee below keeps its own assumptions.

## Define the state, neighbourhood and objective direction

Let F be a finite nonempty feasible set and maximize f over it. A neighbourhood N(x) is a specified subset of feasible alternatives. A local optimum has no neighbour with strictly larger objective. First-improvement search accepts the first improving neighbour under a declared order. Best-improvement search resolves the whole neighbourhood and accepts a best improving choice. They can reach different local optima from the same starting state.

If every accepted move strictly improves f, no feasible state can recur. Since F is finite, the method stops after at most |F|−1 moves. This proves finite termination, not a polynomial iteration count in a compact binary encoding of F. Finding an improving neighbour can also require substantial work. A claim that no improving move remains needs complete resolution of the declared neighbourhood, rather than failure of a limited sampled search.

Tie moves need another rule. Allowing moves with equal objective can cycle. A strict secondary order or explicit memory can prevent some cycles, but then its own termination argument should be stated. A tiny floating improvement is not automatically a strict improvement of the intended exact objective; preserve the numerical comparison policy and the original-scale values.

### Worked example 1: a strict one-flip trap

On two binary variables maximize Mxy−x−y+2, with M>2. At (0,0) the value is two; either single flip gives one. It is therefore a strict local optimum for the one-coordinate neighbourhood. The point (1,1) has value M and is globally optimal. A two-coordinate move escapes the trap.

All values are nonnegative, and the local-to-global ratio two divided by M tends to zero as M grows. Thus arbitrary one-flip local optimality has no positive uniform approximation guarantee for this family. Finite termination and a complete local search certificate do not imply a useful global ratio. Enlarging the neighbourhood changes what has been certified, while generally increasing the cost of resolving one step.

## Rounding and repair need original feasibility

A continuous relaxation point can be rounded toward nearby integers, but closeness does not preserve arbitrary coupled rows. Coordinatewise rounding of a packing point can overload capacity, while rounding down can discard all value. In the triangle independent-set relaxation, the optimal half-vector rounds down to zero although a feasible single vertex has value one. Repeating this in disjoint triangles shows that a nonnegative objective and a feasible rounded result alone do not give a positive ratio for that rule.

Repair is a separate procedure. It can remove selected variables, alter a violated assignment or solve a restricted subproblem around the rounded point. A repaired point becomes an incumbent only after its original domains and constraints are satisfied. A small penalty value or a smaller violation is progress toward feasibility, not a feasible lower bound in maximization.

### Worked example 2: repair followed by a useful addition

Take a knapsack with weights six, five and four, rewards eight, seven and six, capacity nine. The relaxation-feasible candidate (1/2,1,1/4) uses capacity nine. Rounding halves upward gives (1,1,0), of weight eleven, which is infeasible. Removing the first item restores feasibility at reward seven. Adding the third item then gives weight nine and reward thirteen.

The pair of the first and second items and the pair of the first and third are overweight; individual rewards are at most eight. Thus the selected second-and-third pair is actually optimal in this small example. That last conclusion comes from the complete subset comparison, not from the remove-and-fill heuristic itself. On another instance, the same repair order can lose a valuable combination.

A repair record should therefore distinguish the initial fractional candidate, the rounded assignment, violation, feasibility-restoring changes and final objective. If the original problem contains equality or logical constraints, deleting variables may not even preserve the rest of the structure. The repair neighbourhood should be designed from those constraints rather than assumed to be monotone.

## A feasibility pump can repeat without finding an available point

A pump alternates two projections of different kinds. First round a relaxation point to an integer vector z, possibly infeasible. Then find a continuous relaxation point near z, often by minimizing the sum of absolute coordinate distances. That distance problem is a linear program using auxiliaries bounded below by both signed differences. A zero distance identifies a feasible integral point; a positive distance does not.

### Worked example 3: a deterministic tie cycle

Use the relaxation zero≤x,y≤one with x+y≥1/2. Feasible binary points exist, including (1,0). Start at (1/2,0), round ties downward to (0,0), and project back by minimum absolute distance. Every point with nonnegative coordinate sum one half has the same nearest distance one half. If the deterministic projection tie rule chooses the point with largest first coordinate, it returns (1/2,0). The next round is identical.

The process repeats despite the original problem being feasible. Random perturbations, memory or branching can change the search, but the alternating projection description alone supplies no convergence-to-feasibility theorem. A bounded iteration budget should return the unresolved state rather than interpreting this cycle as infeasibility of the integer model.

This example also shows why tie conventions belong to a reproducible algorithm. The exact continuous distance optimum is nonunique. Different tie choices can change the next integer candidate, even when every local optimization subproblem is solved exactly. A deterministic seed or ordering is useful for reconstruction, but does not become a global correctness certificate.

## Randomized rounding preserves expectations before feasibility

Given fractional coordinates between zero and one, independently select each variable with its corresponding probability. Linear expectation makes the mean objective equal to the fractional objective, and the mean of each linear row equals its fractional row value. These equalities hold without any concentration theorem. They do not assert that one realization satisfies the rows or attains the mean reward.

### Worked example 4: feasible expected load and infeasible samples

For capacity x+y≤1, take both fractional coordinates equal to one half. Independent rounding gives the four binary outcomes with equal probabilities. The expected load is one, but outcome (1,1) violates capacity with probability one quarter. The expected objective x+y is also one, equal to the integer optimum, yet the sampled outcome with value two is inadmissible and cannot be used as an incumbent.

An approximation proof for randomized rounding must control feasible output as well as reward, possibly through concentration, scaling or an analysed alteration. Separate expectation statements do not automatically combine into a simultaneous feasible high-value event. For several rows, a union bound combines violation probabilities, but it still needs valid individual probability bounds and a reward argument. A generic randomization step does not inherit the ratio theorems proved for particular structured algorithms.

## Independent restarts give a conditional success probability

Suppose a restart draws uniformly and independently from all binary assignments of n variables, and exactly r assignments are globally optimal and feasible. The probability of missing every optimum in N draws is
$$(1-r/2^n)^N\le\exp(-Nr/2^n).$$
The exact equality follows from independence; the exponential inequality follows from one minus a nonnegative number being at most its negative exponential. This is a guarantee about the sampling process under its stated distribution. If r is tiny relative to the full assignment space, the required number of draws can be enormous.

The calculation does not assign a posterior probability that a particular returned point is optimal after unsuccessful search. It also does not apply unchanged to correlated local restarts or to an unspecified pseudorandom sequence. Uniform rejection sampling of feasible points has a different draw cost and success probability involving the feasible-set size. Name which distribution is assumed and whether the budget counts all generated assignments or only accepted feasible ones.

Independent restarts can improve the chance of leaving a basin without yielding a uniform runtime guarantee. Their role is discovery. An externally supplied relaxation bound can still turn a discovered feasible point into a global certificate if the two values meet. Randomness in finding that point does not weaken the resulting deterministic feasibility-and-bound proof.

## Some local neighbourhoods do imply a ratio: maximum cut

Let an undirected graph have nonnegative edge weights and let W be their total. A cut partitions vertices into two sides and earns the weight of crossing edges. Suppose no single-vertex flip improves the cut. At each vertex, its crossing incident weight is at least its same-side incident weight; otherwise flipping that vertex would improve the objective by their difference.

Sum this inequality over all vertices. Every crossing edge appears twice on the left and every noncrossing edge twice on the right, so the cut weight is at least W/2. Since the optimum cannot exceed total weight W, the local optimum is a factor-two approximation. This is a complete all-instance ratio proof for this exact weighted neighbourhood and nonnegative model.

The conclusion cannot be transferred to arbitrary objectives by the phrase local improvement. It uses the edge decomposition and double-counting identity. Negative edge weights or a different move rule require another argument. Likewise inspecting only a sample of vertices does not establish the no-improving-flip premise at the stopping state.

With finite vertex assignments and strict improvements, local search terminates. For integer edge weights, each improvement is at least one and the objective lies between zero and W, giving at most W improving moves. That is a pseudo-polynomial magnitude bound, not necessarily polynomial in the binary description of the weights. The ratio proof and the iteration bound therefore answer different questions.

## Tabu restrictions, worsening moves and retained incumbents

A tabu rule temporarily forbids recently reversed changes or other attributes. It can force movement away from a local trap, including steps that worsen the current objective. An aspiration rule may override a restriction when a point improves the best feasible incumbent. These are algorithmic definitions whose parameters and tie rules must be recorded.

The current search state and the incumbent should be separate. The current state may worsen or even violate constraints in a penalty-based exploration. The incumbent remains the best original feasible point found so far. Its objective is a valid bound regardless of how unattractive the current exploratory state becomes. A solution pool can retain distinct feasible alternatives, but does not certify that every optimizer or equivalence class has been enumerated.

A state with no admissible tabu move is not necessarily locally optimal in the full neighbourhood, because improving moves may be forbidden. Likewise a low penalty need not identify a feasible point. Report the actual stopping event: complete local optimality, repeated state, work limit, no admissible move or a matching global bound. Those events have different mathematical meanings.

## Restricted exact search and large neighbourhoods

One can fix most coordinates and solve the remaining subproblem exactly. This certifies the best point in that restricted neighbourhood, provided the fixed-variable region and solve certificate are stated. It is stronger than failing to sample an improvement there, but weaker than solving the original problem unless the neighbourhood contains every feasible alternative.

A sequence of larger neighbourhoods can trade work for stronger local information. Nested neighbourhoods make their exact local optima nondecreasing under maximization. Yet a finite collection can still miss a collective move, as the two-bit trap shows. If regions are meant to cover the entire feasible set, the method has become an exhaustive search certificate and needs the same coverage and bound accounting as branch-and-bound.

Relaxation-guided neighbourhoods can prioritize coordinates near fractional or unstable decisions. The guidance is heuristic; exact resolution of the chosen region has its precise conditional meaning. Keep those two layers distinct so that a good empirical policy does not inherit an unsupported global theorem.

## Integrating candidates with a proof bound

For maximizing problems, each accepted original feasible point raises a lower bound. A valid relaxation or tree bound supplies the upper bound. The interval between them survives any choice of heuristic, restart or neighbourhood. If a heuristic finds a point matching the upper bound, the proof is complete even if the discovery method had no approximation guarantee.

If the interval remains open, report it. A locally optimal candidate can be useful and mathematically characterized without being globally certified. Objective scaling, feasibility tolerances and the discrete domains remain attached to its bound. The certificate chapter specifies how to preserve those records independently of the policy that found the point.

## Exercises with staged hints and full solutions

### Exercise 1: finite strict improvement

Why does strict improving search terminate on a finite feasible set, and what changes if equal-value moves are allowed?

<details>
<summary>Hint 1</summary>

A repeated state would have the same objective as before.
</details>
<details>
<summary>Hint 2</summary>

An equal-value cycle need not violate a nondecrease rule.
</details>
<details>
<summary>Full solution</summary>

Strict improvement prevents revisiting any state, so at most |F|−1 moves occur. Nondecreasing moves can repeat equal-value states indefinitely unless a further rule prevents it. The finite-state argument also says nothing polynomial about a set whose binary representation can encode exponentially many assignments.
</details>

### Exercise 2: the one-flip trap

Evaluate Mxy−x−y+2 at all four binary points and identify its one-flip local optimum at zero.

<details>
<summary>Hint 1</summary>

The values are two, one, one and M.
</details>
<details>
<summary>Hint 2</summary>

At the zero pair both individual changes decrease the objective.
</details>
<details>
<summary>Full solution</summary>

For M>2, (0,0) is a strict one-flip local optimum with value two, while (1,1) is globally optimal at M. The ratio two over M can be arbitrarily small. A complete local certificate under this neighbourhood is insufficient for a positive uniform global ratio.
</details>

### Exercise 3: triangle rounding

For the half-vector in a triangle stable-set relaxation, compare rounding all coordinates down with the best binary stable set.

<details>
<summary>Hint 1</summary>

Rounding down gives the empty set.
</details>
<details>
<summary>Hint 2</summary>

Any one vertex is feasible and has positive cardinality.
</details>
<details>
<summary>Full solution</summary>

The rounded point is feasible with value zero; the integer optimum is one. Thus this rounding rule has no positive multiplicative guarantee on that family despite preserving packing feasibility. A valid output and a useful approximation ratio are separate properties.
</details>

### Exercise 4: pump repetition

Explain the cycle for x+y≥1/2 under tie-down rounding and the projection rule selecting (1/2,0).

<details>
<summary>Hint 1</summary>

The rounded integer point is zero and violates the row.
</details>
<details>
<summary>Hint 2</summary>

Its nearest absolute-distance relaxation points have coordinate sum one half.
</details>
<details>
<summary>Full solution</summary>

The selected projection returns the starting point, which rounds to zero again. The deterministic state repeats even though (1,0) is an original feasible point. The alternating procedure has not proved infeasibility; it has encountered a cycle under its particular tie rules.
</details>

### Exercise 5: randomized feasibility

For two independent half-probability selections under x+y≤1, compute violation probability and expected objective.

<details>
<summary>Hint 1</summary>

The four outcomes have equal probabilities.
</details>
<details>
<summary>Hint 2</summary>

Only (1,1) violates capacity.
</details>
<details>
<summary>Full solution</summary>

Violation probability is one quarter and expected x+y is one. The expected value equals the integer optimum, but an infeasible draw has value two. Expected reward alone is not a feasible solution guarantee, and discarding or repairing bad draws needs its own analysis.
</details>

### Exercise 6: independent restart failure

If one of eight equally likely assignments is optimal and restarts are independent, give the probability that ten draws miss it.

<details>
<summary>Hint 1</summary>

One draw misses with probability seven eighths.
</details>
<details>
<summary>Hint 2</summary>

Multiply the same failure probability ten times.
</details>
<details>
<summary>Full solution</summary>

The probability is (7/8)¹⁰. This is a process-level result under the independent uniform assumption, not a certificate that a returned suboptimal point is probably optimal. If the draws are correlated or use a different distribution, the product formula needs revision.
</details>

### Exercise 7: maximum-cut double counting

At a one-flip local optimum with nonnegative weights, derive cut weight at least half the total edge weight.

<details>
<summary>Hint 1</summary>

At every vertex, crossing incident weight is at least internal incident weight.
</details>
<details>
<summary>Hint 2</summary>

Every edge is counted twice when vertex inequalities are summed.
</details>
<details>
<summary>Full solution</summary>

Summation gives twice the cut weight at least twice the noncrossing weight. Hence the cut is at least W/2. Since OPT≤W, it is at least OPT/2. The proof requires all vertex flips resolved at the stopping state and nonnegative weights in the total-weight comparison.
</details>

### Exercise 8: tabu stopping

A search has no allowed tabu move but an improving full-neighbourhood move is currently forbidden. Is the state locally optimal in the full neighbourhood?

<details>
<summary>Hint 1</summary>

The allowed move set is smaller than the mathematical neighbourhood.
</details>
<details>
<summary>Hint 2</summary>

The existence of one improving forbidden move refutes full local optimality.
</details>
<details>
<summary>Full solution</summary>

No. It has no admissible move under the current memory rule, which is a different stopping event. A local-optimality certificate must refer to the full stated neighbourhood or explicitly name the restricted one. Temporary algorithmic restrictions do not change the underlying feasible objective comparisons.
</details>

### Exercise 9: a heuristic closes an exact proof

A feasible maximizing candidate has value 23 and an independent rigorous upper bound is 23. The candidate came from random repair. Is global optimality established?

<details>
<summary>Hint 1</summary>

The discovery mechanism is irrelevant once feasibility and bound equality are proved.
</details>
<details>
<summary>Hint 2</summary>

Place the original optimum between the two values.
</details>
<details>
<summary>Full solution</summary>

Yes. Feasibility gives lower bound 23 and the rigorous upper bound gives at most 23, so the optimum equals 23. The random heuristic needed no uniform quality theorem for this particular certificate. Its feasibility and the independent upper bound, however, must both concern the same original model and objective scale.
</details>

### Exercise 10: a restricted exact neighbourhood

If an exact subproblem solve fixes all but three binary variables, what optimality claim does it support?

<details>
<summary>Hint 1</summary>

It searches only the feasible alternatives respecting those fixed values.
</details>
<details>
<summary>Hint 2</summary>

Other coordinates may need a collective change to improve globally.
</details>
<details>
<summary>Full solution</summary>

It proves the best feasible objective in that specified restricted region, assuming the subproblem certificate is valid. It does not exclude improvements requiring changes in fixed variables. If a collection of such regions is intended as a global proof, their union must cover every unresolved original alternative and their bounds must be accounted for explicitly.
</details>

## Summary and continuation

Heuristics discover feasible witnesses; local search certifies only its declared neighbourhood unless additional structure proves more. Rounding, repairs, restarts and tabu rules need reproducible definitions and honest stopping meanings. The one-flip maximum-cut result shows how a genuine ratio theorem differs from a generic heuristic label. An independent global bound can certify any correctly recovered incumbent, regardless of how it was found.

Reading references: Wolsey, *Integer Programming* (1998), and Conforti, Cornuéjols and Zambelli, *Integer Programming* (2014), for integer-search context. The finite examples and local-cut proof above are developed directly. No empirical performance or independent-review result is claimed.
