
# Network Flows and the Transportation Problem


## Conservation makes a linear programme visible

A network model assigns a nonnegative quantity to each directed arc and balances it at each node. The coefficients are mostly zeros, ones and minus ones, but those signs express a strong invariant: every unit leaving one location enters another. This chapter derives maximum flow, residual rerouting and transportation as linear programmes with independently checkable certificates.

Required preparation is [LP duality](duality-theory.md), basic directed graphs and finite-dimensional linear algebra. A graph is finite. Arc capacities are finite nonnegative real numbers unless integrality is stated explicitly. A directed arc and its reverse are distinct model objects; a residual reverse arc is an algorithmic option and need not be an original physical route.

**Definition 11.1 (Feasible flow and its value).** For distinct source s and sink t, a feasible flow assigns $0\le f_e\le u_e$ to every arc. At every other node, incoming flow equals outgoing flow. Its value is outgoing minus incoming flow at s; summing all node balances shows the opposite value at t.

Self-loops contribute zero to a node balance. Parallel arcs retain separate capacities and costs. A source can have incoming arcs and a sink outgoing arcs; the net definition handles them without requiring a special diagram convention. Every conservation equation has units of the same transported quantity per declared time interval.

For an s–t cut S, with s in S and t outside, write $\delta^+(S)$ for arcs leaving S and $\delta^-(S)$ for those entering. Summing node balances inside S cancels all internal arcs and gives
$$|f|=\sum_{\delta^+(S)}f_e-\sum_{\delta^-(S)}f_e
\le\sum_{\delta^+(S)}u_e.$$
This is a bound for every cut and every feasible flow, independent of how either was found.

## Residual paths and the max-flow theorem

**Definition 11.2 (Residual network).** An original arc $i\to j$ supplies a forward residual arc of capacity $u_{ij}-f_{ij}$ and a reverse residual arc of capacity $f_{ij}$. Retain arcs of positive residual capacity. Using a reverse arc means reducing an earlier original flow, not shipping a negative quantity.

If a residual path connects s to t, increase along its forward directions and decrease along its reverse directions by the smallest residual capacity on the path. Bounds remain valid, internal node balances cancel, and the value increases by that bottleneck. Path orientation determines which original entries change.

**Theorem 11.3 (Maximum flow equals minimum cut).** A finite network with finite nonnegative capacities has a maximum feasible flow, and its value equals the capacity of a minimum s–t cut.

*Proof.* The feasible set is a closed subset of the bounded capacity box and contains zero, so compactness gives a maximiser. At a maximising flow no positive-capacity residual s–t path exists, since augmenting it would increase the value. Let S be all nodes reachable from s in the residual graph. The sink is outside S. Every original arc leaving S is saturated, for otherwise its forward residual arc would reach another node. Every original arc entering S has zero flow, for a positive value would create a reverse residual arc leaving S. Therefore the cut identity gives $|f|=\sum_{\delta^+(S)}u_e$. The general cut upper bound proves that this flow and this cut are optimal. ∎

The proof separates existence from a path algorithm. Arbitrary augmenting-path choices with irrational capacities need not terminate after finitely many augmentations; compactness and the optimal-flow argument do not assert they do. With integral capacities, each positive bottleneck is an integer when the current flow is integral. Starting from zero, each augmentation increases the integer value by at least one and it is bounded by the finite outgoing capacity of s. Thus this version terminates and returns an integral maximum flow.

**Example 11.4 (A flow and matching cut of value five).** Use arcs
$$s\to a:3,\quad s\to b:2,\quad a\to b:1,\quad
a\to t:2,\quad b\to t:3.$$
Augment along $s,a,t$ by two, then $s,b,t$ by two, then $s,a,b,t$ by one. The final flows are three, two, one, two and three in the displayed order. At a, three arrives and one plus two leaves; at b, two plus one arrives and three leaves. The value is five. Cut $\{s\}$ has capacity five, so the cut inequality proves optimality. No claim about a solver is required: the five arc values and one cut form the certificate.

## Why cancellation is part of an algorithm

**Example 11.5 (A reverse arc repairs a poor first path).** Give unit capacity to
$s\to a$, $s\to b$, $a\to b$, $a\to t$, and $b\to t$.
If the first path is $s,a,b,t$, one unit uses the middle arc and saturates $b\to t$. Looking only at unused original forward arcs gives no second path: s can still reach b, but b's forward exit is full. The residual graph has the path $s,b,a,t$, whose middle step reverses the previously used $a\to b$ arc. Augmenting by one cancels that middle flow and leaves one unit on each of $s,a,t$ and $s,b,t$. The value is two, matching the two-unit source cut.

A method that permanently commits every first path can therefore stop below the optimum even on five unit-capacity arcs. Conservation alone does not identify which earlier route should be changed. Residual reversals express feasible substitutions and are essential to the proof.

For reporting, store original flows separately from residual capacities and label reverse options by their originating arcs. If the input already has an arc in each direction, there can be more than one residual option between the same nodes. Combining them without a declared convention can lose costs or capacity information. A negative displayed residual capacity is a numerical or update failure, not a new permitted transport direction.

## Incidence matrices and their special determinants

Choose the incidence convention $B_{ve}=1$ if arc e leaves v, minus one if it enters, and zero otherwise. Then $Bf=b$ expresses supplied-minus-demanded balances. Summing rows gives zero, so total supply must equal total demand in a closed network. One row per connected component is redundant when all its other balances are enforced and consistent.

**Proposition 11.6 (Directed incidence matrices are totally unimodular).** Every square subdeterminant of B is zero, one or minus one.

*Proof.* Induct on the size of a square submatrix. If a column has no nonzero entries its determinant is zero. If a column has just one nonzero entry, expand along it: its value is plus or minus one times a smaller allowed determinant. Otherwise every column has two nonzero entries. Those entries have opposite signs, so the sum of all rows in the submatrix is zero and its determinant vanishes. The one-by-one case starts the induction. ∎

Appending bound rows from an identity matrix preserves this property by the same determinant expansion. Integral balances and capacities therefore lead to integral nonsingular basis solutions: a basis determinant is plus or minus one, and Cramer's rule has integral numerators. The [integer-programming chapter](integer-programs-total-unimodularity.md) states the general result with its attainment qualifications. This explains why a continuous flow LP can solve certain indivisible shipment problems without rounding.

The conclusion is about a correctly specified network matrix. Adding one side constraint that couples unrelated arcs can destroy total unimodularity. It also requires integral right-hand sides in the same unit. A capacity of one and a half cannot be expected to produce integral shipments merely because the incidence coefficients are integral.

## Minimum-cost flow and residual cycles

Now prescribe a balance at every node and minimise $\sum_e c_ef_e$ under the same capacities. Sending one unit forward on e costs $c_e$; sending it backward in the residual graph costs $-c_e$. A residual directed cycle changes no balance. If its total cost is negative, augmenting around it lowers the objective while preserving feasibility.

**Theorem 11.7 (Residual-cycle optimality).** A feasible bounded-capacity flow with prescribed balances is minimum cost if and only if its residual network has no negative-cost directed cycle.

*Proof.* A negative residual cycle can be augmented by its positive bottleneck, strictly decreasing cost, so a minimum cannot have one. Conversely compare the given flow f with any other feasible g. Positive differences $g_e-f_e$ can be represented on forward residual arcs; negative differences on reverse residual arcs. The resulting nonnegative arc quantities form a circulation because both flows have the same balances. Every finite nonnegative circulation decomposes into directed cycles: follow positive arcs until a vertex repeats, subtract the smallest amount on that cycle, and repeat; at least one positive arc disappears each time. The cost difference is the sum of those cycle costs times their nonnegative amounts. If no residual cycle has negative cost, that sum cannot be negative. Thus no g is cheaper. ∎

This theorem is an exact optimality test, not an assertion that every cycle-cancelling strategy has a useful complexity bound. Finite capacities ensure the feasible set is bounded; a model with unbounded capacities can also have an unbounded improving circulation. Record whether lower bounds were eliminated by a balance shift and whether cost units are per item, distance or time.

## Transportation and potentials

For suppliers i with amounts $a_i\ge0$ and consumers j with demands $b_j\ge0$, transportation variables satisfy
$$x_{ij}\ge0,\quad \sum_jx_{ij}=a_i,\quad
\sum_ix_{ij}=b_j.$$
Equal totals are necessary. With every supplier–consumer arc available they are sufficient: assign mass successively from a supplier with remaining supply to a consumer with remaining demand. Each assignment exhausts at least one remaining amount and preserves equal remaining totals, giving a finite construction.

The cost objective is $\min\sum_{ij}c_{ij}x_{ij}$. Potentials $\alpha_i,\beta_j$ with
$\alpha_i+\beta_j\le c_{ij}$ give the lower bound
$$\sum_i a_i\alpha_i+\sum_jb_j\beta_j\le
\sum_{ij}c_{ij}x_{ij}.$$
To prove it, multiply each potential inequality by $x_{ij}\ge0$, sum, and use the row and column balance equations. Equality follows if every positive shipment uses a tight potential inequality. This is complementary slackness in a network form.

**Example 11.8 (A transportation optimum with negative potential).** Two suppliers have amounts two and three; demands are one and four. Costs are
$$C=\begin{pmatrix}1&4\\3&2\end{pmatrix}.$$
Every feasible plan has
$$X=\begin{pmatrix}t&2-t\\1-t&2+t\end{pmatrix},
\qquad0\le t\le1.$$
Its cost is $15-4t$, so the minimum is eleven at $t=1$. Potentials $(\alpha_1,\alpha_2)=(4,2)$ and $(\beta_1,\beta_2)=(-3,0)$ satisfy every coefficient bound. Their objective is $2(4)+3(2)-3+4(0)=11$, matching the plan. A negative potential is allowed because the associated balance is an equality. Adding a constant to every supplier potential and subtracting it from every consumer potential leaves all coefficient sums and the total bound unchanged when totals balance.

## Modelling and computation

A missing shipping arc is a structural restriction, not merely a very high cost. If a route is forbidden, omit it or impose zero capacity. A finite high cost still permits it if every cheaper feasible route is exhausted. Similarly a dummy destination represents unused supply only if its meaning and cost are stated; otherwise balancing totals by inventing demand changes the question.

Integer flow conclusions do not settle binary setup choices, fixed route charges or products of decisions. Such additions can require an integer model whose LP relaxation is no longer integral. Lower bounds, multiple commodities and shared capacities also alter the structure. Different commodities with separate flow balances coupled by one capacity need not inherit single-commodity integrality.

A finite certificate table contains every original arc, capacity, cost, flow and balance contribution. Include a cut for maximum flow or potentials and residual reduced costs for a cost problem. Recompute node balances and total cost from those original entries rather than relying on a residual-network display. Algorithmic iteration counts and arithmetic tolerances remain separate from the exact combinatorial certificate.

The next [matrix-games chapter](matrix-games-linear-programming.md) uses a different application of duality: mutually protecting mixed strategies. Both cases illustrate the same LP habit, constructing a feasible plan together with an opposing bound.

## Conservation audits across representations

A matrix balance and a drawn network represent the same problem only after their orientations agree. Under the supplied-minus-demanded incidence convention, a positive balance denotes a source of material. A different text may put minus one at the tail instead; its balance vector must reverse too. The algebra remains valid under a consistent change, while copying only the matrix signs reverses the meaning of supplies and demands.

Capacities also require a time convention. Ten items per hour and ten items per shift are different bounds unless the shift duration has already been included. A flow measured as a rate cannot be compared directly with a stock demand without a horizon. If storage between periods is permitted, represent it by additional time-indexed arcs or balance variables rather than silently letting material disappear at intermediate nodes.

A global conservation total is necessary but weak. Two nodes can have equal and opposite balance errors, leaving the network total apparently correct. Check each node equation, every capacity interval and the objective from the original arc table. A valid source cut may still be a useful upper bound when a proposed flow is infeasible, but it cannot turn that infeasible proposal into a matching lower certificate.

The residual graph is a derived algorithmic state. Reconstructing it from the original capacities and accepted flows allows a reader to verify its reverse arcs and cost signs. This makes a maximum-flow or negative-cycle argument inspectable even when the path-search implementation is complicated.

## Exercises

### Exercise 1: Cut bound
<a id="network-flows-transportation-ex-1"></a>

Prove a flow's value is at most the capacity of any source–sink cut.

<details>
<summary>Hint 1</summary>

**Hint.** Sum node balances inside the cut.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Bound leaving flows and keep incoming flows nonnegative.

</details>

<details>
<summary>Solution</summary>

**Solution.** Internal arcs cancel, giving value equal to leaving flow minus entering flow. Leaving flow is at most leaving capacity and entering flow is nonnegative. Subtracting it cannot increase the result, proving the bound.

</details>

### Exercise 2: Residual capacity
<a id="network-flows-transportation-ex-2"></a>

An arc has capacity seven and flow five. Give its two residual capacities.

<details>
<summary>Hint 1</summary>

**Hint.** Forward capacity is unused capacity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Reverse capacity is cancellable flow.

</details>

<details>
<summary>Solution</summary>

**Solution.** The forward residual capacity is two and the reverse residual capacity is five. A reverse augmentation reduces the original five-unit flow rather than creating a negative physical shipment.

</details>

### Exercise 3: Five-unit certificate
<a id="network-flows-transportation-ex-3"></a>

Check the node balances in the first worked example.

<details>
<summary>Hint 1</summary>

**Hint.** List total input and output at a and b.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then compare value and cut.

</details>

<details>
<summary>Solution</summary>

**Solution.** At a, three arrives and two plus one leaves; at b, two plus one arrives and three leaves. The source sends five and the sink receives five. The source cut has capacity five, so the feasible flow is maximum.

</details>

### Exercise 4: Reverse repair
<a id="network-flows-transportation-ex-4"></a>

In the unit-capacity example, what happens to the original a-to-b flow during the second augmentation?

<details>
<summary>Hint 1</summary>

**Hint.** The path uses its reverse residual arc.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract its bottleneck from the old original flow.

</details>

<details>
<summary>Solution</summary>

**Solution.** It falls from one to zero. The new source-to-b and a-to-sink flows rise to one, leaving two disjoint unit routes. Failing to cancel the original middle arc would violate conservation.

</details>

### Exercise 5: Transportation parameter
<a id="network-flows-transportation-ex-5"></a>

For the displayed transportation model, compute cost at t=0 and t=1.

<details>
<summary>Hint 1</summary>

**Hint.** Use the complete feasible parametrisation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate its affine cost.

</details>

<details>
<summary>Solution</summary>

**Solution.** The costs are fifteen and eleven. Since cost is $15-4t$ on $[0,1]$, the latter is the minimum and the endpoint plan has shipments $(1,1;0,3)$.

</details>

### Exercise 6: Potential lower bound
<a id="network-flows-transportation-ex-6"></a>

Why can transportation potentials have either sign?

<details>
<summary>Hint 1</summary>

**Hint.** Their constraints correspond to equality balances.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the direct weighted-sum proof.

</details>

<details>
<summary>Solution</summary>

**Solution.** Equality constraints have unrestricted dual variables. The bound only requires $\alpha_i+\beta_j\le c_{ij}$ and nonnegative shipments; no step in its proof requires individual potentials to be nonnegative.

</details>

### Exercise 7: Integral capacities
<a id="network-flows-transportation-ex-7"></a>

Why does augmenting from zero preserve integrality when capacities are integers?

<details>
<summary>Hint 1</summary>

**Hint.** Residual capacities remain integer after each integer update.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A bottleneck is one of those capacities.

</details>

<details>
<summary>Solution</summary>

**Solution.** Initially every flow and residual capacity is integral. The positive bottleneck is integral, and adding or subtracting it preserves that property. Each augmentation raises the integer value by at least one, giving finite termination under a finite source-capacity bound.

</details>

### Exercise 8: Incidence determinant
<a id="network-flows-transportation-ex-8"></a>

A square incidence submatrix has two nonzeros in every column. Why is its determinant zero?

<details>
<summary>Hint 1</summary>

**Hint.** The two entries have opposite signs.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum its rows.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each column sums to zero, so the sum of all rows is the zero row vector. The rows are dependent and the determinant vanishes. This is the non-expansion case of the TU induction.

</details>

### Exercise 9: Negative cycle
<a id="network-flows-transportation-ex-9"></a>

A residual cycle has costs 2,-5,1 and bottleneck three. What cost change follows?

<details>
<summary>Hint 1</summary>

**Hint.** Add the per-unit cycle costs.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Multiply by the feasible augmentation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The cycle cost is minus two per unit, so augmenting three units lowers total cost by six while preserving every node balance. Its existence disproves minimum cost of the current feasible flow.

</details>

### Exercise 10: A missing route
<a id="network-flows-transportation-ex-10"></a>

Why is a finite high cost not equivalent to forbidding a route?

<details>
<summary>Hint 1</summary>

**Hint.** A sufficiently costly route can still be necessary for feasibility.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Linear optimisation respects the written feasible set.

</details>

<details>
<summary>Solution</summary>

**Solution.** A finite cost penalises use but permits it. If cheaper routes cannot satisfy demand, the optimum may use that arc. Forbid it by omitting the variable or setting capacity zero, with the resulting feasibility consequences stated.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. Maximum-flow/minimum-cut, the incidence determinant argument and residual-cycle optimality are proved directly. Advanced network algorithms and their complexity analyses are further reading; no runtime claim is inferred from the existence proofs.

## Summary

Conservation turns arc variables into a structured LP. A matching flow and cut certify maximum value, while reverse residual arcs make earlier route choices reversible. Integral capacities support integral augmentations, and incidence determinants explain a wider integrality property. Minimum-cost flows use residual cycles or potentials as certificates. Transportation provides a fully checkable shipment plan and lower bound.
