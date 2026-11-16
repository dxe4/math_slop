var e=`---
parent_id: book-discrete-global-optimisation
chapter_id: network-flows-matchings
title: "Network Flows and Matchings"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Network Flows and Matchings {#section-1-network-flows-and-matchings}

Some integer problems have a continuous relaxation that already contains the required integral optimum. Network flow and bipartite matching are central examples. Their usefulness comes from a proved incidence structure and a constructive certificate, rather than from observing that one computed answer happens to be integral.

Assume finite graphs, linear programming, integer formulations and the incidence-matrix proof in the polyhedral chapter. This chapter proves max-flow/min-cut, derives Hall's condition through a flow construction and identifies the residual optimality condition for fixed-value minimum-cost flow. The [modelling network chapter](../applied-modeling-proof-reference/networks-flow-diffusion.md) supplies application interpretation, while the [decision-systems laboratory](../../visual-labs/decision-systems-live.md) exposes small flow/cut tables. Here the focus is the discrete theorem and its hypotheses.

<a id="section-5-feasibility-and-the-cut-bound"></a>
## Feasibility and the cut bound {#section-7-feasibility-and-the-cut-bound}

Let a finite directed graph have distinct source s and sink t. Each edge e has finite capacity ce≥0 and flow fe satisfying zero≤fe≤ce. At every other vertex, incoming flow equals outgoing flow. The value is net flow leaving s, including subtraction of flow entering it. Edges and their residual reverses retain identities; antiparallel original edges must not be confused with the reverse residual of one edge.

For a source side S containing s but excluding t, sum conservation over its intermediate vertices. Internal edge contributions cancel, giving
$$|f|=f(S,V\\setminus S)-f(V\\setminus S,S)
\\le\\sum_{e\\in\\delta^+(S)}c_e.$$
The right side is cut capacity. This proof needs no integrality: every feasible flow supplies a lower bound on the maximum and every cut supplies an upper bound. Matching those two values is a complete optimality certificate, even if the route by which they were found was heuristic.

The zero flow is feasible, and all edge variables lie in a finite box. The feasible flow polytope is closed, so a maximum exists by compactness. Capacities may be rational or real for this attainment statement. Integer capacities become important when a constructive augmenting-path procedure is used to preserve integrality.

<a id="section-16-residual-augmentation-and-a-constructive-theorem"></a>
## Residual augmentation and a constructive theorem {#section-18-residual-augmentation-and-a-constructive-theorem}

For each edge with unused capacity, its forward residual arc permits increasing that flow. For each edge with positive flow, a reverse residual arc permits decreasing it. A residual s-to-t path can be augmented by the smallest residual capacity on the path. Every edge remains within bounds, conservation is preserved at internal path vertices and the total value increases by that positive amount.

With integer capacities and an integer starting flow, every residual capacity and augmentation remains integer. The value increases by at least one each time and is bounded by the total capacity leaving s. Thus arbitrary positive augmentations terminate after finitely many steps in this integer arithmetic setting. This elementary bound depends on capacity magnitude and is not a polynomial bound in its binary encoding length.

At termination, let S be all vertices reachable from s through positive residual arcs. The sink is absent. Every original edge leaving S is saturated; otherwise its forward arc would extend reachability. Every original edge entering S has zero flow; otherwise its reverse would do the same. Substituting in the cut identity gives flow value equal to cut capacity. This proves the max-flow/min-cut theorem constructively for integer capacities and gives an integral maximum flow.

For rational capacities, multiply by a common positive denominator and scale the resulting flow back. For arbitrary real capacities, a compactness/separation argument or a shortest-augmenting-path theorem supplies the general result. Arbitrary path selection need not have the same finite-termination guarantee without the integer lower increment. The method and arithmetic assumptions belong in the theorem being invoked.

<a id="section-26-worked-example-1-an-exact-seven-unit-certificate"></a>
### Worked example 1: an exact seven-unit certificate {#section-28-worked-example-1-an-exact-seven-unit-certificate}

Use capacities s→a:4, s→b:3, a→b:2, a→t:2 and b→t:5. Send two units along s-a-t, two along s-a-b-t and three along s-b-t. The induced edge flows obey every capacity and intermediate conservation equation, and their value is seven. The cut containing only s has capacity four plus three, also seven. Hence the flow is optimal.

Increasing only a→t cannot raise the maximum while the source cut stays at seven. Increasing only s→a also cannot raise it while the two sink-entering capacities still sum to seven. Several bottlenecks can constrain the same optimum; local unused capacity is not a global sensitivity certificate. Static flow also contains no travel-time variable, so this exact graph theorem does not answer a queueing or journey-time question.

<a id="section-32-shortest-augmenting-paths-give-a-capacity-independent-c"></a>
## Shortest augmenting paths give a capacity-independent count {#section-34-shortest-augmenting-paths-give-a-capacity-independent-c}

Edmonds–Karp chooses a residual path with the fewest edges. Breadth-first search finds one in a number of elementary operations proportional to the graph size. The key fact is that residual distances from s cannot decrease after augmentation along such a path.

To justify that fact, every old residual arc has head distance at most tail distance plus one. A newly introduced reverse arc comes from the selected shortest path, where its old tail and head distances differ in the opposite direction by one. It also satisfies the same head-distance upper inequality. Any new path from s therefore has length at least the old distance of its endpoint, by summing these inequalities. Removing saturated arcs cannot shorten a distance either.

Each augmentation saturates at least one residual arc on the chosen path. If the same directed residual arc is later saturated again, it must first have reappeared through augmentation using its reverse. At that reverse use, shortest-path distances force its original tail distance to be at least two larger than at the earlier saturation. Distances of reachable vertices are at most the number of vertices minus one. Each residual arc can therefore be critical only a number of times proportional to the vertex count.

There are a number of labeled residual arc types proportional to the original edge count, so there are at most order V times E augmentations. Breadth-first searches and updates give the familiar order VE² arithmetic-operation bound. This argument does not grow with capacity magnitudes. A bit-complexity analysis additionally accounts for numeric representation, and a floating implementation still needs a policy for small residual capacities and exactness of its final certificate.

<a id="section-42-bipartite-matching-as-a-unit-capacity-flow"></a>
## Bipartite matching as a unit-capacity flow {#section-44-bipartite-matching-as-a-unit-capacity-flow}

Let a bipartite graph have left vertices L and right vertices R. Add a source with capacity-one arcs to each left vertex, a sink with capacity-one arcs from each right vertex, and arcs from left to right for the graph edges. An integral flow uses each left and right vertex at most once. Its positive left-right arcs therefore form a matching, and a matching defines such a flow of the same cardinality.

One may give the middle arcs unit capacity. The source and sink capacities already imply their integral flow is at most one, so a larger finite middle capacity does not change the feasible matching interpretation. The flow theorem supplies an integral maximum. Alternatively the bipartite incidence TU proof gives integral vertices of the degree-constraint matching relaxation. These are two proofs of related structure, not a claim that every feasible fractional flow is integral.

<a id="section-48-hall-s-theorem-with-a-flow-proof"></a>
### Hall's theorem with a flow proof {#section-50-hall-s-theorem-with-a-flow-proof}

A matching covering every left vertex requires |N(U)|≥|U| for every subset U of L: their distinct matched neighbours must all lie in N(U). For sufficiency, give middle arcs capacity |L|+1. A cut of capacity at most |L| exists by taking only the source. A minimum cut cannot cross a middle arc, since that one arc would already exceed this value.

Let U be its source-side left vertices and W its source-side right vertices. All neighbours of U must lie in W. Its cut capacity is |L|−|U|+|W|, counting source arcs to omitted left vertices and right arcs to the sink. If the maximum matching had size below |L|, max-flow/min-cut would give $|W|<|U|$. Then $|N(U)|\\le|W|<|U|$, contradicting the assumed Hall condition. Therefore a left-covering matching exists. The flow integrality argument turns that full flow into a matching rather than merely a fractional assignment.

<a id="section-54-worked-example-2-a-deficient-neighbourhood"></a>
### Worked example 2: a deficient neighbourhood {#section-56-worked-example-2-a-deficient-neighbourhood}

Take three left vertices all adjacent only to two right vertices. Choosing all three left vertices gives neighbourhood size two, so Hall fails. A matching of size two exists by selecting two distinct neighbours. A cut containing the source, all three left vertices and both right vertices has capacity two. The matching and cut agree, proving the exact maximum as well as explaining why a third match is impossible.

A failure involving a smaller left subset can be hidden even when the total right side is large. Hall quantifies over every subset, not just the two class sizes. The minimum cut provides a concrete deficient subset when a left-covering matching does not exist.

<a id="section-60-odd-cycles-show-the-boundary-of-degree-constraints"></a>
## Odd cycles show the boundary of degree constraints {#section-62-odd-cycles-show-the-boundary-of-degree-constraints}

For a triangle, half on each edge satisfies every degree bound one. The three tight degree rows are independent, so this half-vector is a vertex of the degree relaxation. A matching has at most one edge, whereas the half-vector has total three halves. The graph is not bipartite, and its zero-one incidence matrix lacks the signing used in the TU proof.

Odd-set inequalities repair that particular obstruction: inside an odd vertex set U, a matching uses at most (|U|−1)/2 edges. Every selected internal edge consumes two distinct vertices, proving validity. A complete general matching-polytope theorem and an efficient blossom algorithm require further development; this chapter does not infer them from the triangle alone. The example identifies exactly which first-course relaxation ceases to be integral.

<a id="section-66-fixed-value-minimum-cost-flow"></a>
## Fixed-value minimum-cost flow {#section-68-fixed-value-minimum-cost-flow}

Add an edge cost ce and request a specified flow value F. Minimize the sum of cost times flow over the same bounded capacities and conservation equations. A residual forward arc has its original cost; a reverse arc has the negative cost because using it undoes an earlier flow contribution. Augmenting around a residual directed cycle preserves every conservation equation and the total value.

If a negative-cost residual cycle exists, a positive augmentation around it improves the objective. Conversely, suppose another feasible flow of the same value has lower cost. Its difference from the current flow can be represented by nonnegative residual arcs: increase edges where the new flow is larger and decrease them through reverses where it is smaller. That difference is a circulation. A finite circulation decomposes into directed cycles by following positive arcs until a vertex repeats and subtracting the minimum cycle amount, then repeating. Each subtraction removes at least one positive arc, so the process is finite. A lower total cost implies at least one negative cycle in that decomposition.

Thus absence of a negative residual cycle is necessary and sufficient for optimality among flows of the same specified value. The proof is global and does not rely on local gradient stationarity. It does require comparison with the same flow value; minimizing cost with no required value could simply choose zero flow when all costs are positive.

Integral capacities, integral conservation data and the incidence matrix with bound rows give an integral flow polytope. Its bounded linear cost problem therefore has an integral optimum when feasible. Negative costs do not threaten boundedness while every edge capacity is finite. An uncapacitated negative cycle would require a different unboundedness analysis.

<a id="section-76-worked-example-3-greedy-weighted-matching-can-fail"></a>
### Worked example 3: greedy weighted matching can fail {#section-78-worked-example-3-greedy-weighted-matching-can-fail}

For two left and two right vertices, let the four matching rewards be nine and eight in the first row, eight and zero in the second. Choosing the largest reward first forces the remaining zero, total nine. Choosing the two off-diagonal edges gives sixteen and is optimal because the only perfect matchings have these two totals. Local best-edge selection failed to account for the shared endpoint constraints.

The fixed-value flow model with required value two and negative rewards as costs represents this comparison exactly. In the greedy solution, its alternating residual cycle exchanges the two diagonal edges for the two off-diagonal ones. Its cost change is minus seven, identifying a proved improving move. Once no negative cycle remains, the residual theorem certifies the optimum.

<a id="section-82-certificates-and-model-interpretation"></a>
## Certificates and model interpretation {#section-84-certificates-and-model-interpretation}

For maximum flow, return every edge flow, conservation values and a source-side cut with matching capacity. For matching, return selected edges and either the matching-flow certificate or the deficient Hall subset when complete coverage fails. For minimum cost at fixed value, the residual no-negative-cycle condition can be certified by feasible vertex potentials making all residual reduced costs nonnegative under the appropriate shortest-path assumptions.

The last potential construction is a separate shortest-path result; the cycle theorem above already gives the exact mathematical criterion. A practical report should identify which form of certificate it supplies rather than treating a stopped cycle search as proof of absence. Input capacities, graph direction, objective sign and the required value remain part of the claim.

These structural results explain why some integer models need no branch tree. Adding multi-commodity coupling, fixed charges or nonlinear side constraints can destroy the incidence argument. An integral answer on one modified instance does not preserve the theorem. Compare the new matrix and feasible set with the actual hypotheses before carrying the network certificate into a more general formulation.

<a id="section-90-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-92-exercises-with-staged-hints-and-full-solutions}

<a id="section-92-exercise-1-derive-the-cut-inequality"></a>
### Exercise 1: derive the cut inequality {#section-94-exercise-1-derive-the-cut-inequality}

Explain why entering edges are subtracted in the cut identity and why dropping them gives an upper bound.

<details>
<summary>Hint 1</summary>

Sum conservation over all source-side vertices other than s.
</details>
<details>
<summary>Hint 2</summary>

Internal contributions cancel; entering flows are nonnegative.
</details>
<details>
<summary>Full solution</summary>

Net value equals outgoing crossing flow minus incoming crossing flow. Dropping the nonnegative incoming quantity can only increase it, and replacing each outgoing flow by its capacity increases it again. This proves the cut bound even when some original edges point toward the source side. Counting all crossing capacities without direction would represent another quantity.
</details>

<a id="section-112-exercise-2-integral-augmentation"></a>
### Exercise 2: integral augmentation {#section-114-exercise-2-integral-augmentation}

With integer capacities and an integral current flow, prove one residual-path augmentation preserves integrality.

<details>
<summary>Hint 1</summary>

Every residual capacity is an integer difference or an integer flow.
</details>
<details>
<summary>Hint 2</summary>

The minimum of the finitely many positive path residuals is a positive integer.
</details>
<details>
<summary>Full solution</summary>

The bottleneck amount is integral. Adding it on forward arcs and subtracting it on reverse arcs leaves all edge flows integral, within bounds and with preserved path conservation. It increases total value by at least one. The finite termination argument then uses a finite upper bound on the total flow value.
</details>

<a id="section-132-exercise-3-zero-residual-reachability"></a>
### Exercise 3: zero residual reachability {#section-134-exercise-3-zero-residual-reachability}

At a flow with no residual source-sink path, why is every original edge entering the reachable set at zero flow?

<details>
<summary>Hint 1</summary>

A positive incoming flow would create a reverse residual arc leaving that set.
</details>
<details>
<summary>Hint 2</summary>

Its tail is reachable and its head would then become reachable too.
</details>
<details>
<summary>Full solution</summary>

For an original edge from outside S into S, positive flow creates a reverse residual from its S endpoint to its outside endpoint. Reachability would include that outside endpoint, a contradiction. Hence its flow is zero. Together with saturation of leaving edges, this makes the cut bound an equality.
</details>

<a id="section-152-exercise-4-hall-needs-subsets"></a>
### Exercise 4: Hall needs subsets {#section-154-exercise-4-hall-needs-subsets}

Let L have three vertices and R have three vertices, but two left vertices share only one possible right neighbour. Can a left-covering matching exist?

<details>
<summary>Hint 1</summary>

Take the subset consisting of those two left vertices.
</details>
<details>
<summary>Hint 2</summary>

Its neighbourhood has size one, regardless of the third vertex's choices.
</details>
<details>
<summary>Full solution</summary>

No. That subset violates Hall's condition because two distinct matched partners would be required inside a one-vertex neighbourhood. Equal total class sizes are insufficient. A maximum matching computation can expose this local obstruction through its residual minimum cut.
</details>

<a id="section-172-exercise-5-a-fractional-triangle-vertex"></a>
### Exercise 5: a fractional triangle vertex {#section-174-exercise-5-a-fractional-triangle-vertex}

Verify that half on each triangle edge satisfies all degree bounds and has larger cardinality than any matching.

<details>
<summary>Hint 1</summary>

Every vertex sees two half-edges.
</details>
<details>
<summary>Hint 2</summary>

Any two triangle edges share a vertex.
</details>
<details>
<summary>Full solution</summary>

Each degree sum equals one, while the total edge weight is three halves. A matching contains at most one edge because every pair shares an endpoint. The three degree equalities have independent rows, so the half-vector is a fractional vertex. Bipartite TU hypotheses are absent, explaining the relaxation gap.
</details>

<a id="section-192-exercise-6-reverse-residual-cost"></a>
### Exercise 6: reverse residual cost {#section-194-exercise-6-reverse-residual-cost}

An edge has cost five and current positive flow. What cost belongs to its reverse residual, and why?

<details>
<summary>Hint 1</summary>

Using the reverse decreases the original edge flow.
</details>
<details>
<summary>Hint 2</summary>

Undoing one unit subtracts five from the original objective.
</details>
<details>
<summary>Full solution</summary>

The reverse residual cost is minus five. This records the objective effect of cancellation, not the physical cost of a separate original reverse edge. If an antiparallel original edge also exists, it has its own cost and identity. The two residual possibilities must remain distinguishable in the update ledger.
</details>

<a id="section-212-exercise-7-a-cycle-certificate"></a>
### Exercise 7: a cycle certificate {#section-214-exercise-7-a-cycle-certificate}

A fixed-value flow has a residual cycle with capacities 2,3,1 and arc costs 4,−6,1. What improvement can one augmentation certify?

<details>
<summary>Hint 1</summary>

The bottleneck is the smallest residual capacity.
</details>
<details>
<summary>Hint 2</summary>

The cycle's unit cost is minus one.
</details>
<details>
<summary>Full solution</summary>

Augmenting one unit preserves flow value and all node balances while decreasing cost by one. The residual capacities remain nonnegative. This proves the current flow is not minimum cost, but does not identify the final optimum or show that no other negative cycle remains after the move.
</details>

<a id="section-232-exercise-8-weighted-greedy-failure"></a>
### Exercise 8: weighted greedy failure {#section-234-exercise-8-weighted-greedy-failure}

For rewards nine,eight;eight,zero, compare the two perfect matchings and their exchange cost under negative-reward flow costs.

<details>
<summary>Hint 1</summary>

The diagonal sum is nine and the off-diagonal sum is sixteen.
</details>
<details>
<summary>Hint 2</summary>

Undo the diagonal and install the off-diagonal along an alternating cycle.
</details>
<details>
<summary>Full solution</summary>

The off-diagonal matching gains reward seven. Under cost equal to negative reward, the corresponding residual cycle has cost minus seven. It is a valid fixed-cardinality improvement. A largest-edge-first choice can therefore fail even in a two-by-two bipartite graph, while residual exchange captures the coupled endpoint restriction.
</details>

<a id="section-252-exercise-9-require-the-flow-value"></a>
### Exercise 9: require the flow value {#section-254-exercise-9-require-the-flow-value}

With all edge costs positive, why can minimizing cost without a required flow value fail to find a maximum flow?

<details>
<summary>Hint 1</summary>

The zero flow is feasible for the ordinary capacity and conservation equations.
</details>
<details>
<summary>Hint 2</summary>

It has zero cost and avoids every positive-cost edge.
</details>
<details>
<summary>Full solution</summary>

Zero flow minimizes the positive cost but can have value far below the maximum. Minimum-cost maximum flow must first fix the maximal value or use an explicitly justified lexicographic objective. The no-negative-cycle theorem compares flows of the same value, not every possible throughput objective at once.
</details>

<a id="section-272-exercise-10-preserved-structure-after-adding-constraint"></a>
### Exercise 10: preserved structure after adding constraints {#section-274-exercise-10-preserved-structure-after-adding-constraint}

Does adding one arbitrary side inequality to an integral network-flow polytope guarantee the new relaxation remains integral?

<details>
<summary>Hint 1</summary>

The TU closure proof covers particular row types, not arbitrary rows.
</details>
<details>
<summary>Hint 2</summary>

The previous chapter exhibited a fractional vertex created by one added row.
</details>
<details>
<summary>Full solution</summary>

No. An arbitrary side row can destroy total unimodularity and introduce fractional vertices. A specific added constraint may preserve integrality through another theorem, but that must be proved. The old graph interpretation and one observed integral solution are insufficient to transfer the original network guarantee.
</details>

<a id="section-292-summary-and-continuation"></a>
## Summary and continuation {#section-294-summary-and-continuation}

Flows and bipartite matchings admit integral optima through residual arguments and incidence geometry. A matching flow and cut, a deficient Hall subset or a residual cost certificate explains the conclusion directly. These are structural exceptions to generic discrete search. The following branch, cut and decomposition chapters address models whose additional couplings require more than this network theorem.

Reading references: Schrijver, *Theory of Linear and Integer Programming* (1986), and Conforti, Cornuéjols and Zambelli, *Integer Programming* (2014). All finite constructions here are symbolic proofs and examples.
`;export{e as default};