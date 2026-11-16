
# Flows and Max-Flow Min-Cut

A network can carry several routes at once, and different links can carry different amounts. A flow records those amounts while enforcing conservation at intermediate vertices. A cut records a collection of forward links through which every net transfer must pass. The max-flow min-cut theorem says that the greatest feasible transfer equals the capacity of a smallest cut. An optimal flow and an equal-capacity cut therefore certify one another.

The main proof in this chapter is finite and constructive for integer capacities. Residual paths allow us to add unused flow and cancel earlier choices; when no such path remains, residual reachability constructs a matching cut certificate. We will distinguish that proof from the extra existence argument for arbitrary real capacities, and distinguish exact arithmetic from numerical approximations.

Required preparation is directed graphs, sums over vertices, elementary algorithms and the [path and separator ideas of Menger's theorem](menger-connectivity.md). Bipartite matching is useful for the final application. All networks are finite. Capacities are nonnegative and finite. We begin with real feasible flows even when the capacities are integers: the eventual theorem guarantees the existence of an integral optimum, rather than claiming that every feasible assignment is integral.

## Networks, conservation and net value

**Definition 8.1 (Capacitated network).** A network consists of a finite vertex set $V$, a finite set $A$ of labelled directed arcs, distinct vertices $s,t$ called source and sink, and capacities $c(a)\geq0$. Each arc has a tail and a head, which are distinct. Parallel arcs and arcs in opposite directions are allowed. Two arcs can have the same endpoints and still be different labelled objects.

**Definition 8.2 (Feasible flow).** A feasible flow assigns a real number $f(a)$ to every original arc such that $0\leq f(a)\leq c(a)$ and, for every $v\notin\{s,t\}$,

$$\sum_{\operatorname{head}(a)=v}f(a)=\sum_{\operatorname{tail}(a)=v}f(a).$$

Its value is net outflow at the source:

$$\operatorname{val}(f)=\sum_{\operatorname{tail}(a)=s}f(a)-\sum_{\operatorname{head}(a)=s}f(a).$$

Summing conservation over all intermediate vertices shows that this also equals net inflow at $t$. We allow original arcs entering $s$ or leaving $t$, so omitting the subtracted source term would change the problem. A feasible flow may even have negative net value, although a maximum has value at least zero because the zero assignment is feasible.

Conservation permits flow to split and recombine. It does not say that every vertex uses all its capacity, since capacities belong to arcs and are upper bounds. Nor does it prohibit a directed circulation carrying positive flow around a cycle. Such a circulation consumes arc capacity but contributes no net source-to-sink value.

**Definition 8.3 (Cut and cut capacity).** An $s$–$t$ cut is specified by $S\subseteq V$ with $s\in S$ and $t\notin S$. Write $A^+(S)$ for original arcs leaving $S$ and $A^-(S)$ for original arcs entering $S$. Its capacity is

$$c(S)=\sum_{a\in A^+(S)}c(a).$$

Only forward capacities enter this definition. A backward arc may carry flow that reduces net transfer across the cut; its capacity is not added as if it were an extra forward resource.

**Lemma 8.4 (Cut identity and weak duality).** For every feasible flow $f$ and cut $S$,

$$\operatorname{val}(f)=\sum_{a\in A^+(S)}f(a)-\sum_{a\in A^-(S)}f(a)\leq c(S).$$

*Proof.* Sum net outflow over all vertices in $S$. Internal vertices contribute zero by conservation, and the source contributes $\operatorname{val}(f)$. Each arc with both ends in $S$ occurs once positively and once negatively and cancels. The remaining terms are exactly the displayed crossing sums. Each forward flow is at most its capacity, and every backward flow is nonnegative, proving the inequality. ∎

This identity identifies precisely when a cut is tight: every forward crossing arc must be saturated and every backward crossing arc must carry zero flow. Equality of a flow value with one cut capacity is already sufficient to establish both optima; no survey of all other flows or cuts is needed.

**Example 8.5 (A certificate of value seven).** Consider arcs $s\to a,s\to b,a\to b,a\to t,b\to t$ with respective capacities $4,3,2,2,5$. Assign flows $4,3,2,2,5$ in that same order. At $a$, inflow $4$ equals outflow $2+2$; at $b$, inflow $3+2$ equals outflow $5$. The flow is feasible and has value $7$.

The cut $S=\{s\}$ has capacity $4+3=7$. Weak duality bounds every flow by seven, while the displayed flow attains seven, so it is maximum and this cut is minimum. The cut $\{s,a\}$ is another certificate: its forward capacities are $3,2,2$, again summing to seven. An optimum need not have a unique witnessing cut.

## Residual arcs remember which original arc changes

**Definition 8.6 (Residual network).** For each original arc $a:u\to v$, a flow $f$ gives a forward residual copy $(a,+):u\to v$ of capacity $c(a)-f(a)$ and a backward residual copy $(a,-):v\to u$ of capacity $f(a)$. Retain only copies with strictly positive residual capacity. A residual $s$–$t$ path is called an augmenting path.

Forward residual capacity is unused allowance on its particular original arc. Backward residual capacity is permission to cancel some of that arc's current flow. It does not introduce a negative original flow. If an original opposite arc $b:v\to u$ also exists, $(a,-)$ and $(b,+)$ point in the same direction but perform different operations. Their labels must not be merged without retaining an exact rule for distributing updates back to the original arcs.

**Lemma 8.7 (Augmentation).** Let $P$ be a simple residual $s$–$t$ path and let $\delta$ be the smallest residual capacity on its labelled arcs. Increasing each original flow used forward by $\delta$ and decreasing each original flow used backward by $\delta$ produces a feasible flow of value $\operatorname{val}(f)+\delta$.

*Proof.* The path is finite and each retained capacity is positive, so $\delta>0$. For a forward copy, $\delta\leq c(a)-f(a)$ keeps the updated flow at most $c(a)$; for a backward copy, $\delta\leq f(a)$ keeps it nonnegative. Other bounds are unaffected. A simple path cannot use both copies of the same original arc, because doing so would repeat its endpoints, so these update instructions cannot conflict.

For either sort of residual step from $u$ to $v$, the change increases net outflow at $u$ by $\delta$ and decreases it at $v$ by $\delta$. This holds for a backward copy because reducing the original $v$–$u$ flow removes inflow at $u$ and removes outflow at $v$. At each internal path vertex the entering and leaving changes cancel, preserving conservation. At $s$ the net change is $+\delta$, and at $t$ it is $-\delta$, proving the value statement. ∎

If a residual walk is found instead, delete its repeated-vertex portions to obtain a simple path before applying the lemma. Using the full bottleneck makes at least one residual copy unavailable after the update. It does not mean that copy stays unavailable forever: later cancellation can create it again.

**Example 8.8 (Undoing an earlier route).** Give every arc in $s\to a,s\to b,a\to b,a\to t,b\to t$ capacity one. First send one unit along $s,a,b,t$. This leaves no unused forward path through that same chain, but the current value one is not optimal.

The residual path $s,b,a,t$ uses the unused arc $s\to b$, the backward copy of $a\to b$, and the unused arc $a\to t$. Its bottleneck is one. Augmentation increases the first and last original flows and reduces $f(a\to b)$ from one to zero. The result sends one unit along $s,a,t$ and one along $s,b,t$, giving value two. The cut $\{s\}$ has capacity two, proving optimality. A method restricted to unused forward original arcs would have become stuck at the inferior value.

**Example 8.9 (Two residual copies in one direction).** Take arcs $s\to u,u\to v,v\to u,v\to t$ with capacities $2,3,5,2$ and flows $1,2,1,1$. Conservation holds: at $u$, $1+1=2$; at $v$, $2=1+1$. The value is one.

In residual direction $u\to v$ there are two possibilities: the forward copy of $u\to v$, capacity one, and the backward copy of $v\to u$, also capacity one. Together with the unused source and sink capacities, either copy gives an augmentation of one. The first choice changes the middle original flows to $3,1$; the second changes them to $2,0$. Both final flows have value two and are optimal by cut $\{s\}$. Identical residual endpoints do not imply identical original-arc updates.

## No augmenting path gives a minimum cut

**Theorem 8.10 (Residual optimality certificate).** For finite nonnegative real capacities and any feasible flow $f$, the following are equivalent: $f$ is maximum; there is no residual $s$–$t$ path; there exists a cut $S$ with $\operatorname{val}(f)=c(S)$.

*Proof.* If a residual path exists, augmentation strictly increases the value, so a maximum flow has none. Suppose none exists, and let $S$ be all vertices reachable from $s$ in the residual network. Then $s\in S$ and $t\notin S$.

Every original arc leaving $S$ is saturated, since otherwise its forward residual copy would reach a vertex outside $S$. Every original arc entering $S$ has flow zero, since otherwise its backward residual copy would likewise reach outside. The cut identity therefore gives $\operatorname{val}(f)=c(S)$. Finally, if this equality holds, weak duality bounds every feasible flow by the value of $f$, establishing maximality. It also bounds every cut below by that same value, establishing that $S$ is minimum. ∎

Residual reachability is a complete graph search in the mathematical argument. A drawing in which no path is immediately apparent is not the same certificate. The set of all reached vertices is what establishes both saturation and zero backward flow on every crossing arc.

## Integral termination and the main theorem

**Theorem 8.11 (Integral max-flow min-cut).** If every capacity is a nonnegative integer, there is an integral maximum flow, and its value equals the minimum cut capacity. Starting at zero and repeatedly augmenting along a simple residual path by its full bottleneck terminates with such a flow.

*Proof.* The initial flow is integral. If the current flow is integral, all residual capacities are integers, so the bottleneck is a positive integer. Augmentation therefore preserves integrality and raises the value by at least one. The value is bounded above by the integer capacity

$$U=c(\{s\})=\sum_{\operatorname{tail}(a)=s}c(a).$$

Starting from value zero, there can be at most $U$ augmentations. Thus the procedure eventually has no residual path. Theorem 8.10 then supplies a cut with capacity equal to the final integral flow value, proving both optimality and equality. Zero-capacity arcs and $U=0$ cause no exception: they simply allow no positive transfer beyond the corresponding bound. ∎

This is a finite termination proof, not a polynomial bound in the length of a binary capacity description. A very large integer $U$ can have a short written representation. If each residual search uses $O(|V|+|A|)$ operations, the preceding proof gives a value-dependent bound of that order per augmentation; it does not establish a capacity-independent complexity estimate.

**Corollary 8.12 (Rational capacities).** If all capacities are nonnegative rational numbers, a maximum flow exists with rational arc values and equals a minimum cut capacity.

*Proof.* Choose a common positive denominator $q$ for the finitely many capacities. Multiply capacities by $q$, apply the integer theorem, and divide the resulting flow and cut value by $q$. Scaling preserves every capacity inequality, conservation equation and value identity. ∎

It is the common denominator, rather than a separate rounding of each capacity, that preserves the original optimisation problem. Rounding a small positive capacity to zero can destroy a route and change the optimum.

## Arbitrary real capacities: existence and algorithm claims

The no-residual-path certificate did not use integrality. What used integrality was the statement that each increase is at least one, yielding a finite number of augmentations. A bounded strictly increasing real sequence need not stop: $1-2^{-m}$ is an elementary example. Thus that particular termination proof cannot simply be reused for irrational capacities.

**Theorem 8.13 (Real-capacity max-flow min-cut).** A finite network with finite nonnegative real capacities has a maximum flow, whose value equals a minimum cut capacity.

*Proof.* Here we use the finite-dimensional compactness principle: a closed bounded subset of a finite-dimensional Euclidean space is compact, and a continuous real function on a nonempty compact set attains its maximum. This is an explicit input from real analysis, not a consequence of integer augmentation.

View all arc assignments as points of $\mathbb R^{|A|}$. The constraints $0\leq f(a)\leq c(a)$ give a closed bounded box, and conservation imposes finitely many closed linear equalities. Their intersection is closed and bounded and contains the zero flow. It is therefore nonempty and compact. The value function is linear and hence continuous, so it attains a maximum $f^*$. An augmenting path would contradict that maximality by Lemma 8.7. Thus there is no residual path, and Theorem 8.10 yields an equal-capacity cut. ∎

This proof establishes existence and equality for real capacities, but does not establish finite termination of arbitrary augmenting-path choices in that setting. A capacity-independent algorithm requires its own progress argument. Furthermore, the theorem is stated for exact real values. Floating-point comparisons, tolerance rules and approximate conservation describe a numerical implementation and need separate error analysis.

For a one-arc network $s\to t$ of capacity $\sqrt2$, the optimum is $\sqrt2$, witnessed by that saturated arc and cut $\{s\}$. There is no integral optimum of this same value. The integer conclusion belongs specifically to integral-capacity networks, even though the equality of real flow and cut optima is more general.

## Extracting paths and ignoring circulations

**Lemma 8.14 (Integral path extraction).** An integral feasible flow of nonnegative value $F$ can be written as $F$ unit simple $s$–$t$ path flows, together with integral directed-cycle flows.

*Proof.* Suppose the current value is a positive integer. Look only at original arcs with positive flow. If $t$ were not reachable from $s$ through them, let $S$ be the reachable set. No positive original flow would leave $S$, and the cut identity would give value $-\sum_{A^-(S)}f(a)\leq0$, a contradiction. Thus there is a simple positive-flow $s$–$t$ path. Subtract one unit along it. All its arc flows were positive integers, so capacity bounds and nonnegativity survive, conservation is unchanged internally, and the value drops by one. Repeat exactly $F$ times.

The remaining flow has net outflow zero at every vertex, including the source and sink. If a positive arc remains, follow positive outgoing arcs: whenever a vertex receives positive flow, zero net outflow ensures that it has some positive outgoing arc. Finiteness eventually repeats a vertex and yields a directed cycle. Subtract the minimum flow on the whole cycle, preserving conservation and making at least one positive arc zero. No zero arc becomes positive, so repeating this operation finishes after finitely many cycle removals. Reversing the subtractions gives the required decomposition. ∎

The cycle subtraction is made around the entire cycle. Removing flow on selected opposite-looking arcs in a transformed network need not preserve conservation. Also, the theorem counts path multiplicities: if an arc has capacity five, several extracted unit paths may coincide. Edge-disjointness requires the additional unit-capacity hypothesis.

## Bipartite matching as an integral flow

**Proposition 8.15 (Matching reduction).** Let $G$ be a bipartite graph with parts $L,R$. Add source arcs $s\to\ell$ for $\ell\in L$, compatibility arcs $\ell\to r$ for each original edge, and sink arcs $r\to t$ for $r\in R$, all of capacity one. The maximum flow value equals the maximum matching size.

*Proof.* A matching sends one unit along $s,\ell,r,t$ for each selected edge. Disjoint endpoints ensure that source and sink capacities are respected, so this is a feasible integral flow of matching size. Conversely, an integral feasible flow has each source arc and each sink arc either zero or one. At a left vertex, conservation permits at most one outgoing compatibility arc of value one; at a right vertex, it permits at most one incoming such arc. These value-one compatibility arcs form a matching, whose size is the flow value. The integer theorem guarantees an integral optimum, so the two maxima agree. ∎

This argument does not turn an arbitrary fractional flow directly into a matching by selecting every positive arc. Fractional conservation may split one unit among several compatibility arcs. Existence of an integral optimum is the mathematical step that recovers an actual discrete selection.

## Exercises

### Exercise 8.1
<a id="flows-max-flow-min-cut-ex-1"></a>

A network has arcs $s\to a,s\to b,a\to b,a\to t,b\to t$ with capacities $3,2,2,2,3$ and flows $3,1,1,2,2$. Verify feasibility and calculate the cut identity and cut capacity for $S=\{s,a\}$. Does that cut already certify optimality?

<details>
<summary>Hint 1</summary>

**Hint.** Check the two intermediate vertices before summing source flow.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The forward crossing arcs are $s\to b,a\to b,a\to t$. Compare their flows with their capacities.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $a$, inflow $3$ equals $1+2$; at $b$, inflow $1+1$ equals $2$. Every arc obeys its bounds, so the flow is feasible and has value $3+1=4$. Across the stated cut the flows sum to $1+1+2=4$, with no backward crossing arc. The capacity is $2+2+2=6$. Since four is strictly smaller than six, this cut does not certify optimality of the displayed flow. A cut bound is always valid even when it is not tight.

</details>

### Exercise 8.2
<a id="flows-max-flow-min-cut-ex-2"></a>

For the same capacity network as Exercise 8.1, construct a maximum flow and an equal-capacity cut.

<details>
<summary>Hint 1</summary>

**Hint.** The source's total outgoing capacity is five, providing an upper bound.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep $a\to t$ at two, send one unit from $a$ to $b$, and fill the sink arc from $b$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Assign flows $3,2,1,2,3$ in the stated arc order. Conservation holds at $a$ because $3=1+2$ and at $b$ because $2+1=3$. All capacities are respected, and the value is five. The cut $\{s\}$ has capacity $3+2=5$, so weak duality proves this flow is maximum and this cut minimum. The improvement over Exercise 8.1 uses the remaining capacity on $s\to b$ and $b\to t$.

</details>

### Exercise 8.3
<a id="flows-max-flow-min-cut-ex-3"></a>

Original labelled arcs $a:u\to v$ and $b:v\to u$ have capacities $5,4$ and flows $3,1$. List every residual copy in each direction, with its label and capacity.

<details>
<summary>Hint 1</summary>

**Hint.** Each original arc contributes its own forward unused capacity and backward cancellation capacity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Direction $u\to v$ contains $(a,+)$ and $(b,-)$; direction $v\to u$ contains the other two copies.

</details>
<details>
<summary>Solution</summary>

**Solution.** In direction $u\to v$, $(a,+)$ has capacity $5-3=2$, while $(b,-)$ has capacity $1$. In direction $v\to u$, $(a,-)$ has capacity $3$, while $(b,+)$ has capacity $4-1=3$. Using $(b,-)$ decreases $f(b)$; using $(a,+)$ increases $f(a)$, even though their residual directions agree. The labels determine these distinct updates and cannot be inferred solely from the endpoints.

</details>

### Exercise 8.4
<a id="flows-max-flow-min-cut-ex-4"></a>

Prove that equality $\operatorname{val}(f)=c(S)$ forces every forward cut arc to be saturated and every backward cut arc to have zero flow.

<details>
<summary>Hint 1</summary>

**Hint.** Subtract the cut identity from the cut capacity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Express the difference as a sum of nonnegative slack terms and nonnegative backward flows.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity gives $c(S)-\operatorname{val}(f)=\sum_{A^+(S)}(c(a)-f(a))+\sum_{A^-(S)}f(a)$. Every summand is nonnegative. If the total is zero, every summand must vanish, so $f(a)=c(a)$ on forward arcs and $f(a)=0$ on backward arcs. Conversely these conditions make the difference zero. Thus equality has precisely the saturation and zero-backward-flow meaning used by the residual certificate proof.

</details>

### Exercise 8.5
<a id="flows-max-flow-min-cut-ex-5"></a>

Why does an integral-capacity network admit an integral maximum flow without requiring every feasible flow to be integral? Give a one-path example with a fractional feasible flow.

<details>
<summary>Hint 1</summary>

**Hint.** Existence of a special optimum is different from a claim about all feasible points.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Give both arcs of $s\to v\to t$ capacity one, and send half a unit along the path.

</details>
<details>
<summary>Solution</summary>

**Solution.** On the suggested network, assigning $1/2$ to both arcs respects capacities and conservation, so it is a fractional feasible flow despite integral capacities. Sending one unit along both arcs is an integral maximum, certified by cut $\{s\}$ of capacity one. The theorem constructs some integral optimum by integral bottleneck augmentations from zero; it makes no assertion that other feasible flows must use integer values.

</details>

### Exercise 8.6
<a id="flows-max-flow-min-cut-ex-6"></a>

The path $s\to a\to t$ has capacities $3/2$ and $5/3$. Find its maximum flow and minimum cut by scaling to integer capacities and then returning to the original units.

<details>
<summary>Hint 1</summary>

**Hint.** Use common denominator six, rather than rounding each capacity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The scaled capacities are nine and ten, and conservation forces the same flow on both arcs.

</details>
<details>
<summary>Solution</summary>

**Solution.** Scaling by six gives a two-arc path of capacities nine and ten. Its maximum is nine on both arcs, certified by the source cut of capacity nine. Dividing by six gives $3/2$ on both original arcs and maximum value $3/2$. The original source cut has capacity $3/2$, while the other terminal cut has capacity $5/3$. Conservation and the smaller arc capacity establish both the flow and the minimum cut directly as well.

</details>

### Exercise 8.7
<a id="flows-max-flow-min-cut-ex-7"></a>

In a bipartite graph with edges $a1,a2,b1,c2,c3$, start with matching $\{a1,c2\}$. Exhibit the residual source-to-sink path in the unit-capacity matching network that creates a matching of size three.

<details>
<summary>Hint 1</summary>

**Hint.** Begin at the unmatched left vertex $b$ and end at the unmatched right vertex $3$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Traverse $1\to a$ and $2\to c$ as backward copies of currently used compatibility arcs.

</details>
<details>
<summary>Solution</summary>

**Solution.** The residual path is $s,b,1,a,2,c,3,t$. It uses forward compatibility copies for $b1,a2,c3$ and backward copies for $a1,c2$. Its unit augmentation removes the two earlier matching edges and inserts $b1,a2,c3$, giving size three. The source arcs and sink arcs enforce distinct endpoints. No matching can exceed the three left vertices, so the result is maximum.

</details>

### Exercise 8.8
<a id="flows-max-flow-min-cut-ex-8"></a>

Suppose $f,S$ certify a maximum flow with $\operatorname{val}(f)=c(S)$. Increase the capacity of one arc that does not leave $S$. Prove the maximum value stays unchanged.

<details>
<summary>Hint 1</summary>

**Hint.** An increase cannot make the old flow infeasible.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The capacity of the witnessing forward cut remains unchanged because the altered arc is not one of its terms.

</details>
<details>
<summary>Solution</summary>

**Solution.** The old flow remains feasible under the larger capacity, so the new optimum is at least $\operatorname{val}(f)$. Since the arc does not leave $S$, the number $c(S)$ is unchanged, and weak duality bounds every new flow by that same number. Thus the new optimum is at most $c(S)=\operatorname{val}(f)$ and therefore equal to the old optimum. This includes an internal arc or an arc entering $S$.

</details>

### Exercise 8.9
<a id="flows-max-flow-min-cut-ex-9"></a>

An integral flow sends two units along $s\to v\to t$ and one unit around the disjoint directed cycle $a\to b\to c\to a$, with capacities large enough for these values. Give its path-cycle decomposition and explain why the cycle cannot raise the source-to-sink value.

<details>
<summary>Hint 1</summary>

**Hint.** Count the two copies of the terminal path separately if using unit paths.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A complete cycle has zero net outflow at every vertex.

</details>
<details>
<summary>Solution</summary>

**Solution.** The decomposition consists of two unit copies of $s,v,t$ and one unit copy of the cycle $a,b,c,a$. The value is two, coming entirely from the terminal path copies. On the cycle every vertex receives and sends one unit, and neither terminal has any cycle contribution, so the cycle changes no net value. Removing its full unit preserves conservation and releases capacity without reducing throughput. Removing just one cycle arc would instead violate conservation at its ends.

</details>

### Exercise 8.10
<a id="flows-max-flow-min-cut-ex-10"></a>

For a single arc $s\to t$ of capacity $\sqrt2$, determine the maximum flow and minimum cut. Explain which part of the integer termination argument does not generalise merely from bounded strict increase, and why the real-capacity existence proof remains valid.

<details>
<summary>Hint 1</summary>

**Hint.** There is only one capacity constraint and one terminal cut.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distinguish existence of an optimum from a uniform positive lower bound on arbitrary real improvements.

</details>
<details>
<summary>Solution</summary>

**Solution.** Saturating the arc gives value $\sqrt2$, and cut $\{s\}$ has capacity $\sqrt2$, so these are the equal optima. This example itself terminates in one augmentation, but it has no integral optimum. For arbitrary real networks, strict positive augmentations are not necessarily at least one, so bounded increase alone does not imply finitely many steps. The feasible assignments still form a nonempty compact set and the value is continuous, so a maximum exists; augmentation excludes residual paths at that maximum and supplies an equal-capacity cut.

</details>

## Sources

The exposition and examples are original developments of the network material retained in Euler's Quarto chapter *Matchings and Network Flows*. Primary references are L. R. Ford Jr. and D. R. Fulkerson, [“Maximal Flow Through a Network,” *Canadian Journal of Mathematics* 8 (1956), 399–404](https://www.cs.yale.edu/homes/lans/readings/routing/ford-max_flow-1956.pdf), and Reinhard Diestel, [*Graph Theory*, Chapter 6, §6.2](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch6.pdf), consulted 13 November 2026. The chapter licence is CC BY-SA 4.0.

## Summary

A flow obeys arc capacities and internal conservation; its value is net transfer, not total activity. Summing conservation proves that every cut bounds every feasible flow. Labelled residual copies distinguish unused capacity from cancellation, and a missing augmenting path constructs a cut with exactly the current value. Integer bottleneck increases give finite termination and an integral optimum; common-denominator scaling handles rational capacities. Real capacities retain max-flow min-cut through a separately stated compactness argument, while unrestricted algorithm termination needs additional justification. Path-cycle extraction explains throughput and circulations, and integrality converts unit network flows into actual bipartite matchings. The following chapter, [Planar Graphs and Kuratowski](planar-graphs-kuratowski.md), turns from capacity certificates to topological obstruction certificates.
