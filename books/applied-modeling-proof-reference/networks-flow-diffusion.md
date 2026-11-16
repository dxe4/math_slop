
# Networks: Flow, Diffusion, and Structural Claims

## Representation before calculation

A network turns entities into vertices and declared relations into edges. That compression is powerful precisely because it discards context. Before applying a theorem, specify what vertices, edges, direction, weights, time stamps, repeated contacts, and missing edges mean. An absent edge might mean no relation, no measurement, censorship, or a thresholded weak relation. A projection of a bipartite network can create dense apparent ties that never occurred directly.

This chapter develops two rigorous network mechanisms: conserved flow and Laplacian diffusion. It then states the boundary between structural summaries and intervention claims. Graph theory proves properties of the represented graph; it does not by itself validate graph construction or identify causal effects.

## Conserved flow and cuts

Let $G=(V,E)$ be directed, with source $s$, sink $t$, and capacities $c_e\geq 0$. A flow obeys $0\leq f_e\leq c_e$ and conserves flow at every vertex other than $s,t$. Its value is net flow leaving $s$.

**Definition 10.1 (source–sink cut).** A cut is a set $S$ with $s \in S$, $t \notin S$. Summing conservation over vertices in $S\setminus\{s\}$ cancels internal edges, leaving

$|f|=f(S,V\setminus S)-f(V\setminus S,S)\leq \sum_{e\in\delta^+(S)}c_e$.

**Proposition 10.2 (cut bound).** Thus every cut capacity is an upper bound. The inequality is an independently checkable certificate, not merely an algorithmic estimate.

The residual graph has forward capacity $c_e-f_e$ and reverse capacity $f_e$. Augmenting along an $s$--$t$ residual path increases flow by its bottleneck. If no such path exists, vertices reachable from $s$ define a cut whose forward edges are saturated and reverse-crossing original flows are zero. The flow value equals the cut capacity: this proves max-flow/min-cut.

### Worked certificate and sensitivity

Edges $s-a:4$, $s-b:3$, $a-b:2$, $a-t:2$, $b-t:5$ support flow 7: two through $a-t$, two through $a-b-t$, and three through $b-t$. Cut $\{s\}$ has capacity 7, certifying optimality. Increasing $a-t$ alone cannot improve throughput because the source cut remains 7. Increasing only $s-a$ also fails: the cut entering $t$ has capacity 7. Capacity value is therefore piecewise linear and can have several simultaneously binding cuts.

Integer capacities permit an integral maximum flow under augmenting-path algorithms. This does not make every network optimization integral: side constraints, multiple commodities, or fixed charges can destroy the property. Edmonds--Karp uses shortest residual paths and runs in $O(VE^2)$. A static flow has no travel time; dynamic and time-expanded networks require different state and capacity conventions.

## Laplacians and diffusion

For an undirected weighted graph with symmetric nonnegative adjacency $A$, let $D_ii=\sum_{j} A_ij$ and $L=D-A$. Then

$x^{\mathsf T} L x=(1/2)\sum_{i,j} A_ij(x_i-x_j)^2\geq 0$.

So $L$ is positive semidefinite. Zero energy forces equal values across each positive-weight edge; consequently the nullity of $L$ equals the number of connected components. The second-smallest eigenvalue $\lambda_2$ is positive exactly when the graph is connected and quantifies a spectral bottleneck, though its empirical meaning remains representation-dependent.

Linear diffusion $x'(t)=-Lx(t)$ has solution $x(t)=\exp\left(-tL\right)x(0)$. Since $1^{\mathsf T} L=0$, total mass is conserved. On a connected graph, the constant mode remains and every orthogonal mode decays, so $x(t)$ approaches its initial mean. The slowest nonconstant rate is controlled by $\lambda_2$.

### Worked path diffusion

For the three-vertex path with unit weights,

$L=\begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}$.

Its eigenvalues are $0,1,3$, with constant eigenvector for zero. Starting from $(1,0,0)$, the conserved mean is $1/3$, and all deviations decay. Forward Euler gives $x_{k+1}=(I-hL)x_k$; stability and nonnegative averaging require a suitable step, for instance $0\leq h\leq 1/d_{\max}=1/2$. A larger step can create negative concentrations even though the continuous solution stays nonnegative.

Directed graphs require a declared Laplacian and stationary weighting. Temporal networks can rewire faster than diffusion. Nonlinear contagion, threshold adoption, and epidemic transmission are not linear heat flow merely because all use edges.

## Random walks and spectral interpretation

For positive degrees, $P=D^{-1}A$ is the simple random-walk transition matrix. On a connected non-bipartite undirected graph its stationary law is $\pi_i=d_i/\sum_{j} d_j$. Detailed balance $\pi_iP_ij=\pi_jP_ji$ holds. Bipartite chains are periodic; laziness $(I+P)/2$ removes period two without changing $\pi$. Isolated vertices need an explicit convention.

The combinatorial $L$, random-walk $I-P$, and symmetric normalized $I-D^{-1/2}AD^{-1/2}$ Laplacians are related but not interchangeable. State which one is used before comparing eigenvalues across graphs.

## Centrality, robustness, and causal boundaries

Degree counts adjacent weight; closeness summarizes path distances; betweenness counts shortest-path mediation; eigenvector scores reward connection to high-score vertices; PageRank-like scores encode a particular random-surfer process. They answer different questions. Rankings can be unstable under missing edges, tie conventions, or direction changes.

Removing a high-centrality vertex and recomputing connectivity is a structural counterfactual on the recorded graph. It is not automatically the causal effect of removing a real person or facility: behavior may adapt, backup edges may appear, and edge measurement may depend on the intervention. A robustness claim needs a failure distribution or adversary, a performance metric, and a recovery model.

## Common errors

- Treating “not observed” as “does not exist.”
- Reporting a maximum flow without a feasible edge table and cut certificate.
- Increasing a nonbinding capacity and expecting throughput to rise.
- Interpreting a spectral gap without naming weights and Laplacian normalization.
- Using static flow to make travel-time claims.
- Calling linear diffusion an epidemic or influence model without mechanism evidence.
- Treating a centrality rank as intrinsic importance or causal leverage.

## Worked example: equilibrium mass on an irregular graph

Take the three-vertex path with unit edge weights. Its degree vector is $(1,2,1)$, so the simple random walk has stationary mass $\pi=(1/4,1/2,1/4)$. Verify the central coordinate after one step: both endpoints move to the middle, contributing $1/4+1/4=1/2$. The middle chooses each endpoint with probability one half, contributing $1/4$ to each. Thus $\pi P=\pi$.

This is not the uniform limiting concentration of the continuous combinatorial diffusion $x'=-Lx$. The two mechanisms use different clocks: the random walk makes one move per discrete step, while combinatorial diffusion has outgoing rate equal to the vertex degree. On this bipartite path the non-lazy walk also alternates parity, so stationarity alone does not imply convergence from a concentrated starting state. Declaring the mechanism prevents three individually correct formulae from being mistaken for the same prediction.

## Capacity changes have global bounds and local bottlenecks

For a fixed finite directed network, the maximum-flow value is the minimum of its source–sink cut capacities. Each cut capacity is a linear function of the edge capacities. This immediately proves that the value is concave in those capacities: at an interpolated capacity vector, every cut's linear value is at least the same interpolation of the two minimum values; taking the minimum preserves that lower bound. The direction is appropriate for a benefit with diminishing bottleneck improvements, not for every conceivable network objective.

It is also nondecreasing in each capacity, because increasing a capacity cannot remove any feasible flow. If capacities change componentwise by amounts whose absolute values sum to $\eta$, every cut capacity changes by at most $\eta$. Comparing a minimum cut before and after the change in both directions shows that the maximum-flow value changes by at most $\eta$. This is a simple global perturbation bound. A more precise local statement depends on which cuts remain minimum.

**Worked example: improvements must cross all bottlenecks.** A chain has two edges in series, each of capacity five. Throughput is five. Increasing either edge alone to six leaves throughput five because the other edge remains a cut of capacity five. Increasing both to six gives throughput six. Thus the value of an improvement depends on the other changes made with it. Summing separate one-edge predictions taken at a tie can be misleading. A multiplier or minimum-cut report should state which cut supports the bound and whether other minimum cuts coexist.

## Why continuous graph diffusion preserves nonnegativity

For a finite undirected graph with nonnegative weights, choose a positive number $d$ at least the largest weighted degree. Then $P=I-L/d$ has nonnegative entries and every row sums to one. The exact diffusion propagator can be written as

$$
e^{-tL}=e^{-dt}\sum_{k=0}^{\infty}\frac{(dt)^k}{k!}P^k.
$$

Every power of a nonnegative stochastic matrix is again nonnegative and stochastic. The coefficients in this series are nonnegative and sum to one. Hence every concentration at nonnegative time is a weighted average of the initial concentrations. In particular, initially nonnegative values stay nonnegative, and the minimum and maximum initial values bound all later values. If the graph has no edges, the propagator is the identity and the same conclusion is immediate.

This derivation identifies a stronger property than mere norm stability. A discretisation can keep the Euclidean norm bounded while creating negative concentrations. For a physical mass model those negative values may be unacceptable even when they remain small. The step restriction on forward Euler earlier in the chapter ensures a nonnegative averaging matrix, not simply decay of each spectral mode.

## A spectral gap gives a quantitative mixing estimate

Subtract the conserved mean on a connected undirected graph and call the deviation $z$. It is orthogonal to the constant vector. Expanding in an orthonormal eigenbasis gives $z^TLz\ge\lambda_2\|z\|_2^2$. Differentiate its squared norm along diffusion to obtain

$$
\frac{d}{dt}\|z(t)\|_2^2=-2z(t)^TLz(t)
\le-2\lambda_2\|z(t)\|_2^2.
$$

Multiplying by the corresponding positive exponential and integrating proves exponential decay at rate at least the spectral gap. This statement uses the chosen weighted Laplacian and the physical clock attached to its weights. Rescaling all edge rates rescales the gap and the convergence time. Comparing gaps across datasets without common rate units or normalization can therefore confuse faster dynamics with a mere change of clock.

## Exercises

<a id="complete-solutions"></a>

### Exercise 1
<a id="networks-flow-diffusion-ex-1"></a>

Prove the cut upper bound by summing conservation equations over a source-side set.

<details>
<summary>Hint 1</summary>

Sum balances over all vertices on the source side of the cut.

</details>
<details>
<summary>Hint 2</summary>

Internal edges cancel, leaving outgoing minus incoming boundary flow.

</details>
<details>
<summary>Full solution</summary>

Sum $\operatorname{out}(v)-\operatorname{in}(v)=0$ over $v \in S\setminus\{s\}$ and include the source balance. Internal edges appear once with each sign and cancel. The remaining value is flow leaving $S$ minus flow entering it, at most outgoing capacity because entering flow is nonnegative.

</details>

### Exercise 2
<a id="networks-flow-diffusion-ex-2"></a>

Verify edgewise feasibility and the value-seven certificate in the worked network.

<details>
<summary>Hint 1</summary>

Check every capacity and each internal node balance.

</details>
<details>
<summary>Hint 2</summary>

Compare the resulting source value with an independently computed cut capacity.

</details>
<details>
<summary>Full solution</summary>

The route decomposition assigns $f_{sa}=4$, $f_{sb}=3$, $f_{ab}=2$, $f_{at}=2$, $f_{bt}=5$. Every value respects its capacity; $a$ has inflow/outflow 4 and $b$ has 5. Source value and sink inflow are 7, matching cut $\{s\}$ capacity 7.

</details>

### Exercise 3
<a id="networks-flow-diffusion-ex-3"></a>

Find a second minimum cut in the worked network and explain the capacity sensitivity consequence.

<details>
<summary>Hint 1</summary>

Consider the cut containing every vertex except the sink.

</details>
<details>
<summary>Hint 2</summary>

Improving only one of two binding cuts leaves the other upper bound unchanged.

</details>
<details>
<summary>Full solution</summary>

Cut $S=\{s,a,b\}$ has outgoing capacity $c_{at}+c_{bt}=2+5=7$. Since both the source and sink cuts bind, increasing capacity on only one side cannot increase the minimum cut; coordinated changes may be required.

</details>

### Exercise 4
<a id="networks-flow-diffusion-ex-4"></a>

Construct the residual graph after the stated value-seven flow and show that $t$ is unreachable from $s$.

<details>
<summary>Hint 1</summary>

List forward spare capacity and reverse cancellable capacity.

</details>
<details>
<summary>Hint 2</summary>

Begin reachability at the source rather than treating reverse arcs as undirected.

</details>
<details>
<summary>Full solution</summary>

Every edge leaving $s$ is saturated, so its forward residual capacity is zero. Reverse arcs enter $s$ but cannot start an outward path. Hence only $s$ is reachable and the residual search cannot reach $t$.

</details>

### Exercise 5
<a id="networks-flow-diffusion-ex-5"></a>

Prove that integral capacities admit an integral maximum flow under integer augmentations.

<details>
<summary>Hint 1</summary>

Start from zero and inspect the bottleneck of each augmenting path.

</details>
<details>
<summary>Hint 2</summary>

Positive integral augmentations preserve integrality and increase the integer flow value.

</details>
<details>
<summary>Full solution</summary>

Start with integral zero flow. Each residual capacity is integral, so every path bottleneck is a positive integer. Augmentation preserves integral edge flows. Termination yields an integral flow, and max-flow/min-cut proves it maximum.

</details>

### Exercise 6
<a id="networks-flow-diffusion-ex-6"></a>

Give a network where the shortest route and maximum-throughput structure differ.

<details>
<summary>Hint 1</summary>

Compare a short low-capacity path with longer high-capacity paths.

</details>
<details>
<summary>Hint 2</summary>

Length and throughput are different objective functions.

</details>
<details>
<summary>Full solution</summary>

A direct $s-t$ edge of length 1 and capacity 1 is shortest, while two disjoint length-2 routes each of capacity 10 provide throughput 20. Path length and capacity optimize different quantities.

</details>

### Exercise 7
<a id="networks-flow-diffusion-ex-7"></a>

Explain why a static maximum flow cannot determine average journey time.

<details>
<summary>Hint 1</summary>

List the temporal quantities absent from static conservation equations.

</details>
<details>
<summary>Hint 2</summary>

A feasible rate says nothing by itself about travel-time distributions.

</details>
<details>
<summary>Full solution</summary>

Static feasibility says how much can cross edges simultaneously under capacity conventions. It omits transit time, queues, scheduling, storage, and time-dependent demand, so no journey-time distribution follows.

</details>

### Exercise 8
<a id="networks-flow-diffusion-ex-8"></a>

Derive $x^TLx=(1/2)\sum A_ij(x_i-x_j)^2$ for symmetric $A$.

<details>
<summary>Hint 1</summary>

Expand the squared endpoint difference on each edge.

</details>
<details>
<summary>Hint 2</summary>

Symmetry allows the two square sums to combine into the degree term.

</details>
<details>
<summary>Full solution</summary>

Expand the right side: one half of $\sum A_ij(x_i^2+x_j^2-2x_ix_j)$. Symmetry makes the two square sums each equal $\sum_{i} d_i x_i^2$; the result is $x^TDx-x^TAx=x^TLx$.

</details>

### Exercise 9
<a id="networks-flow-diffusion-ex-9"></a>

Prove that $\operatorname{ker} L$ consists of vectors constant on each connected component.

<details>
<summary>Hint 1</summary>

Apply the quadratic identity to a vector in the Laplacian kernel.

</details>
<details>
<summary>Hint 2</summary>

Each positive-weight edge forces equal endpoint values, then paths propagate equality.

</details>
<details>
<summary>Full solution</summary>

If $Lx=0$, then $0=x^TLx$; every positive-weight edge has equal endpoint values, which propagate along paths. Conversely a vector constant on each component has every edge difference zero, so $Lx=0$.

</details>

### Exercise 10
<a id="networks-flow-diffusion-ex-10"></a>

Compute the Laplacian eigenvalues of a single unit-weight edge.

<details>
<summary>Hint 1</summary>

Write the two-by-two degree-minus-adjacency matrix.

</details>
<details>
<summary>Hint 2</summary>

Use the constant and antisymmetric vectors as candidate eigenvectors.

</details>
<details>
<summary>Full solution</summary>

$L=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. The vectors $(1,1)$ and $(1,-1)$ have eigenvalues 0 and 2, respectively.

</details>

### Exercise 11
<a id="networks-flow-diffusion-ex-11"></a>

For the three-path, take one Euler step from $(1,0,0)$ with $h=1/2$, and verify mass and nonnegativity.

<details>
<summary>Hint 1</summary>

Compute minus L times the initial vector before multiplying by the step.

</details>
<details>
<summary>Hint 2</summary>

Check both the sum and every component, since conservation alone is insufficient.

</details>
<details>
<summary>Full solution</summary>

$L(1,0,0)^{\mathsf T}=(1,-1,0)^{\mathsf T}$, so the step is $(1/2,1/2,0)$. Components remain nonnegative and sum to one.

</details>

### Exercise 12
<a id="networks-flow-diffusion-ex-12"></a>

Repeat with $h=2$; diagnose the result.

<details>
<summary>Hint 1</summary>

Reuse the same increment with the larger step.

</details>
<details>
<summary>Hint 2</summary>

A negative component can coexist with exact mass conservation.

</details>
<details>
<summary>Full solution</summary>

The step is $(-1,2,0)$. Mass still sums to one because rows of $L$ sum to zero, but a negative concentration appears; the time step violates the nonnegative-averaging bound.

</details>

### Exercise 13
<a id="networks-flow-diffusion-ex-13"></a>

Derive the stationary distribution of a random walk on an undirected graph with positive degrees.

<details>
<summary>Hint 1</summary>

Propose weights proportional to degree.

</details>
<details>
<summary>Hint 2</summary>

Verify detailed balance along each undirected edge.

</details>
<details>
<summary>Full solution</summary>

Set $\pi_i=d_i/\sum_{k} d_k$. Then $\pi_iP_ij=(d_i/Z)(A_ij/d_i)=A_ij/Z=A_ji/Z=\pi_jP_ji$. Detailed balance implies stationarity.

</details>

### Exercise 14
<a id="networks-flow-diffusion-ex-14"></a>

Explain why the ordinary random walk on a connected bipartite graph need not converge to stationarity.

<details>
<summary>Hint 1</summary>

Track the parity class at even and odd times.

</details>
<details>
<summary>Hint 2</summary>

A stationary distribution need not be the limit from every starting state.

</details>
<details>
<summary>Full solution</summary>

The chain alternates between the two parts, retaining parity information. Its distribution can oscillate even though a stationary law exists. Adding a self-loop probability, as in a lazy walk, breaks period two.

</details>

### Exercise 15
<a id="networks-flow-diffusion-ex-15"></a>

Compare degree and betweenness for the center and leaves of a five-vertex star.

<details>
<summary>Hint 1</summary>

Count incident edges and paths between distinct leaves.

</details>
<details>
<summary>Hint 2</summary>

Specify whether path endpoints count toward betweenness.

</details>
<details>
<summary>Full solution</summary>

The center has degree 4 and lies on every shortest path between distinct leaves, giving maximal betweenness. Each leaf has degree 1 and zero betweenness under endpoint-excluding convention.

</details>

### Exercise 16
<a id="networks-flow-diffusion-ex-16"></a>

Give two distinct real-world interpretations of a missing edge and show why they imply different analyses.

<details>
<summary>Hint 1</summary>

Separate a verified absent connection from an unobserved connection.

</details>
<details>
<summary>Hint 2</summary>

The second case requires a measurement or missingness model.

</details>
<details>
<summary>Full solution</summary>

A missing edge can mean a verified absence of transport capacity or a communication event below a sensor threshold. The first may be modeled as capacity zero; the second demands missingness and sensitivity analysis because the relation may exist.

</details>

### Exercise 17
<a id="networks-flow-diffusion-ex-17"></a>

Diagnose the claim “vertex 7 has highest PageRank, therefore intervening on it maximally improves outcomes.”

<details>
<summary>Hint 1</summary>

Read the random-surfer assumptions behind the score.

</details>
<details>
<summary>Hint 2</summary>

An intervention effect requires an outcome mechanism and behavioral response model.

</details>
<details>
<summary>Full solution</summary>

PageRank is defined by a random-surfer model on a chosen graph. The claim omits graph uncertainty, outcome mechanism, behavioral adaptation, intervention cost, and a causal estimand. At most it establishes a structural ranking under declared parameters.

</details>

### Exercise 18
<a id="networks-flow-diffusion-ex-18"></a>

Design an uncertainty audit for a network assembled by thresholding noisy edge weights.

<details>
<summary>Hint 1</summary>

Vary the threshold and preserve uncertain edge information.

</details>
<details>
<summary>Hint 2</summary>

Report changes in cuts, components and rankings rather than one chosen graph.

</details>
<details>
<summary>Full solution</summary>

Retain confidence intervals or replicate measurements for weights; sweep the threshold across a justified range; recompute components, cuts, rankings, and spectral gaps; report rank reversals and edge-level witnesses; compare with a weighted analysis that avoids thresholding; and keep missingness mechanisms explicit.

</details>

## Project

Construct a documented network with at least eight vertices, two plausible edge-meaning conventions, and uncertain weights. For each convention, provide a feasible maximum flow as an edge table and an independently verified minimum-cut certificate; then map which capacity combinations can actually increase throughput. Build the undirected weighted Laplacian, verify positive semidefiniteness numerically and algebraically on test vectors, simulate diffusion with two time steps (one stable and one deliberately unstable), and compare degree, betweenness, and random-walk stationary mass. Finish with a threshold/missing-edge sensitivity audit and a claim ledger separating structural facts, algorithmic certificates, empirical graph uncertainty, and causal claims.

## Summary

Conservation gives cut certificates, while the Laplacian links network geometry to diffusion. Temporal performance and causal intervention effects need additional models. Queues next add time, congestion and throughput assumptions.
