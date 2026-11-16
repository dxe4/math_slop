
# Probabilistic Construction, Alteration, and Dependence {#section-1-probabilistic-construction-alteration-and-dependence}

The probabilistic method proves that a finite object exists by placing a probability distribution on candidate objects and showing that success has positive probability. The conclusion is deterministic even when the proof does not name a successful outcome. Its power comes from choosing what to randomize and how to measure failure—not from replacing proof by simulation.

Three levels of argument must be kept separate. Linearity of expectation needs no independence between summands. Concentration inequalities often require independent trials or a precisely stated substitute. Local-dependence arguments allow bad events to overlap, but only after their joint dependency structure is certified. Alteration adds a final deterministic repair: sample a nearly good object, then delete or change a controlled number of features.

This chapter develops those levels with checkable constants. The recurring output is a **certificate inequality**: an exact expected value, tail bound, or local-lemma condition that implies at least one desired construction.

<a id="section-7-prerequisites-and-probability-conventions"></a>
## Prerequisites and probability conventions {#section-9-prerequisites-and-probability-conventions}

We assume finite probability spaces, indicator random variables, conditional probability, expectation, variance, graphs and hypergraphs, and elementary calculus. All random choices named independent are mutually independent unless qualified otherwise.

For an event $A$, its indicator $1_A$ equals one on $A$ and zero otherwise, so $E[1_A]=P(A)$. Linearity says

$E[\sum_i X_i]=\sum_i E[X_i]$

for any finite collection of integrable random variables. The variables need not be pairwise or mutually independent. By contrast,

$E[\prod_i X_i]=\prod_i E[X_i]$

generally does require a suitable independence hypothesis.

A finite existence proof usually ends in one of four ways:

- $E[X]>0$ for a nonnegative integer count implies some outcome has $X>0$;
- $E[X]<1$ implies some outcome has the integer count $X=0$;
- $E[X]\ge a$ implies some outcome has $X\ge a$;
- $P(success)>0$ directly implies a successful outcome exists.

The inequalities and integrality assumptions are part of the contract.

<a id="section-30-1-indicator-sums-turn-structure-into-arithmetic"></a>
## 1. Indicator sums turn structure into arithmetic {#section-32-1-indicator-sums-turn-structure-into-arithmetic}

Suppose a finite graph $G=(V,E)$ has $m$ edges. Put each vertex independently into $L$ or $R$, with each side chosen with probability $1/2$. For edge $e$, let $I_e$ indicate that its endpoints land on different sides. Endpoint independence gives $P(I_e=1)=1/2$, hence

$E[\sum_{e \in E} I_e]=m/2$.

Some partition therefore has at least $m/2$ crossing edges. Those crossing edges form a bipartite spanning subgraph.

The indicators $I_e$ are not mutually independent in general. Around a triangle, exactly zero or two edges cross, never exactly one or three. Pairwise behavior happens to be independent for distinct edges in this fair model, but that fact is neither needed nor enough to imply mutual independence. The proof uses independence only to compute each individual crossing probability; it uses linearity to sum them.

<a id="section-40-worked-example-1-a-weighted-cut"></a>
### Worked example 1: a weighted cut {#section-42-worked-example-1-a-weighted-cut}

Let every edge $e$ have a nonnegative weight $w_e$. With the same random bipartition, let

$W=\sum_e w_e I_e$.

Then

$E[W]=\sum_e w_e E[I_e]=(1/2)\sum_e w_e$.

Thus some cut has at least half the total edge weight. Nonnegativity is not needed for the expectation identity, but it is natural for interpreting “at least half” as an approximation guarantee. With signed weights, an empty cut may outperform a negative target, and the optimization contract should be restated.

<a id="section-52-2-averaging-proves-existence-but-may-hide-a-constructio"></a>
## 2. Averaging proves existence but may hide a construction {#section-54-2-averaging-proves-existence-but-may-hide-a-constructio}

If a random variable has average $a$, not every outcome can be smaller than $a$. This one-line principle can often be derandomized by conditional expectation.

Return to the random cut. Order vertices $v_1,\ldots ,v_n$. After sides have been fixed for the first $j$ vertices, keep the remaining vertices uniformly random and compute the conditional expected cut weight. Assign $v_{j+1}$ to whichever side gives the larger conditional expectation. The two candidate conditional expectations average to the current one, so the chosen value never decreases. After all assignments, the conditional expectation equals the actual cut weight and is at least its initial value, half the total.

This is an algorithm only when the conditional expectation can be computed efficiently from the input representation. In the cut problem it can: edges to assigned vertices contribute according to the proposed side, edges with two unassigned endpoints retain expected half weight. For a probability space described by an intractable oracle, “choose the better conditional expectation” may remain nonconstructive.

<a id="section-60-worked-example-2-derandomize-a-triangle-cut"></a>
### Worked example 2: derandomize a triangle cut {#section-62-worked-example-2-derandomize-a-triangle-cut}

Give each edge of a triangle weight one. Initially the expected cut size is $3/2$. Put vertex $1$ in $L$. If vertex $2$ also goes to $L$, the conditional expected cut size is one: edge $12$ does not cross, while the two edges incident with the still-random vertex contribute one in total. If vertex $2$ goes to $R$, edge $12$ crosses and exactly one of the other two edges will cross, giving conditional value two. Choose $R$. Placing vertex $3$ on either side now creates exactly two crossing edges. The final cut has size two, at least $3/2$. The integer output automatically rounds the guarantee up to two.

<a id="section-64-3-alteration-samples-generously-and-repairs-locally"></a>
## 3. Alteration samples generously and repairs locally {#section-66-3-alteration-samples-generously-and-repairs-locally}

Let $H=(V,E)$ be an $r$-uniform hypergraph: every edge contains exactly $r$ vertices. An independent vertex set contains no full hyperedge. Select each vertex independently with probability $p$, producing $S$. Let $X=|S|$ and let $Y$ count hyperedges completely contained in $S$. Then

$E[X]=p|V|$, and $E[Y]=p^r|E|$.

Starting from any sampled $S$, process each contained hyperedge and, if it is still fully present, delete one of its vertices. At most one deletion is charged to each originally contained edge. The final set $S'$ is independent and satisfies

$|S'|\ge X-Y$.

Consequently some outcome obeys

$|S'|\ge E[X-Y]=p|V|-p^r|E|$.

Because $|S'|$ is integral, the lower bound may be rounded up. The repair need not delete exactly $Y$ vertices: one deletion can destroy several bad edges. We use the safe upper charge of one per bad edge.

For an ordinary graph ($r=2$) with $n$ vertices and $m>0$ edges, the bound is

$\alpha(G)\ge pn-p^2m$.

The quadratic is maximized on $[0,1]$ at $p=\min(1,n/(2m))$. If $m\ge n/2$, choosing $p=n/(2m)$ gives

$\alpha(G)\ge n^2/(4m)$.

If $m<n/2$, choosing $p=1$ gives $\alpha(G)\ge n-m$; indeed deleting at most one endpoint per edge leaves an independent set. These are valid but not always sharp bounds.

<a id="section-90-worked-example-3-alteration-on-a-ten-cycle"></a>
### Worked example 3: alteration on a ten-cycle {#section-92-worked-example-3-alteration-on-a-ten-cycle}

For $C_10$, $n=m=10$, so choose $p=n/(2m)=1/2$. The expected repaired size is at least

$10(1/2)-10(1/2)^2=5-5/2=5/2$.

Therefore the method certifies an independent set of size at least three after integer rounding. The true independence number is five, witnessed by alternating vertices. Alteration supplies a guaranteed construction, not necessarily the optimum.

<a id="section-98-4-optimizing-the-sampling-parameter-is-part-of-the-proo"></a>
## 4. Optimizing the sampling parameter is part of the proof {#section-100-4-optimizing-the-sampling-parameter-is-part-of-the-proo}

For the $r$-uniform bound

$f(p)=np-mp^r$,

an interior critical point satisfies

$f'(p)=n-rmp^{r-1}=0$,

so

$p_*=\left(\frac{n}{rm}\right)^{1/(r-1)}$.

This is admissible only if $p_*\le 1$. At that point, $mp_*^r=(n/r)p_*$, hence

$f(p_*)=(1-1/r)np_*$.

If $p_*>1$, the maximum over the probability interval is attained at a boundary; one must compare $p=1$, not use a “probability” larger than one.

<a id="section-118-worked-example-4-a-3-uniform-calculation"></a>
### Worked example 4: a 3-uniform calculation {#section-120-worked-example-4-a-3-uniform-calculation}

Let a 3-uniform hypergraph have $n=27$ vertices and $m=72$ edges. Then

$p_*=\left(\frac{27}{3\cdot 72}\right)^{1/2}
=\sqrt{\frac18}=\frac{1}{2\sqrt{2}}<1$.

The certified independent-set size is at least

$\frac23\cdot\frac{27}{2\sqrt{2}}=\frac{9}{\sqrt{2}}$.

Since the output size is an integer and $9/\sqrt{2}>6$, some independent set has at least seven vertices. Squaring verifies the last comparison without decimals: $81/2>36$.

<a id="section-131-5-markov-s-inequality-controls-a-nonnegative-failure-co"></a>
## 5. Markov's inequality controls a nonnegative failure count {#section-133-5-markov-s-inequality-controls-a-nonnegative-failure-co}

For a nonnegative random variable $Z$ and $a>0$,

$P(Z\ge a)\le E[Z]/a$.

Indeed, pointwise $Z\ge a 1_{Z\ge a}$; take expectations. Markov needs neither independence nor a variance calculation.

If $Z$ counts defects and $E[Z]\le \mu$, then with positive probability $Z<c$ whenever $\mu/c<1$. This can combine with alteration: first show some sample has both a large retained size and a bounded defect count, often by packaging the desired objective into one random variable rather than separately asserting that two positive-probability events intersect.

For example, the proof $E[X-Y]\ge a$ directly yields an outcome with $X-Y\ge a$. It would be invalid to argue only that some outcome has large $X$ and some, possibly different, outcome has small $Y$.

<a id="section-143-6-variance-exposes-where-dependence-enters"></a>
## 6. Variance exposes where dependence enters {#section-145-6-variance-exposes-where-dependence-enters}

For $X=\sum_i X_i$,

$\operatorname{Var}(X)=\sum_i \operatorname{Var}(X_i)+2 \sum_{i<j} \operatorname{Cov}(X_i,X_j)$.

The covariance terms vanish for pairwise independent variables, but not merely because the variables have identical marginals. If $X$ is binomial $\operatorname{Bin}(n,p)$, it is a sum of independent Bernoulli trials and

$E[X]=np$, $\operatorname{Var}(X)=np(1-p)$.

Chebyshev's inequality follows from Markov applied to $(X-E[X])^2$:

$P(|X-E[X]|\ge a)\le \operatorname{Var}(X)/a^2$.

Pairwise independence suffices to make the covariance terms vanish and hence to give the variance sum $\sum_i p_i(1-p_i)$. It does not by itself make the sum binomial, and it does not generally suffice for exponential concentration. When indicators count overlapping substructures, the covariance ledger should list which pairs share random coordinates.

<a id="section-159-worked-example-5-triangle-indicators-in-a-random-graph"></a>
### Worked example 5: triangle indicators in a random graph {#section-161-worked-example-5-triangle-indicators-in-a-random-graph}

Form a random graph on $n$ labeled vertices by including each edge independently with probability $q$. For each triple $S$, let $I_S$ indicate a triangle. Then $E[I_S]=q^3$, so

$E[T]=\binom{n}{3}q^3$.

Two distinct triangle indicators are independent if their triangles share zero or one vertex, because their required edge sets are disjoint. If they share an edge, their joint probability is $q^5$, whereas the product of marginals is $q^6$; for $0<q<1$ the covariance is positive. Thus expectation needs no overlap correction, but variance does.

<a id="section-167-7-exponential-tails-require-an-explicit-independent-tri"></a>
## 7. Exponential tails require an explicit independent-trial contract {#section-169-7-exponential-tails-require-an-explicit-independent-tri}

Let $X=\sum_{i=1}^n B_i$, where the $B_i$ are independent Bernoulli variables, not necessarily with the same success probability, and let $\mu=E[X]$. For $\delta\ge 0$, the multiplicative upper-tail bound

$P(X\ge (1+\delta)\mu)\le ((e^\delta)/(1+\delta)^{1+\delta})^\mu$

holds.

**Proof.** The case $\delta=0$ is immediate. For $\delta>0$ and $\lambda>0$, Markov gives

$P(X\ge a)\le E[e^{\lambda X}]/e^{\lambda a}$.

Independence factors the moment generating function. If $P(B_i=1)=p_i$, then

$E[e^{\lambda B_i}]=1+p_i(e^\lambda-1)\le \exp(p_i(e^\lambda-1))$.

Multiplying yields $E[e^{\lambda X}]\le \exp(\mu(e^\lambda-1))$. Set $a=(1+\delta)\mu$ and choose $\lambda=\ln(1+\delta)$. Substitution gives the formula. ∎

The factorization is the independence-dependent step. Applying this proof to an arbitrary sum of overlapping subgraph indicators is invalid. Specialized martingale, bounded-difference, or dependency-aware inequalities may still apply, but each has different hypotheses.

A convenient corollary for $0\le \delta\le 1$ is

$P(X\ge (1+\delta)\mu)\le \exp(-\delta^2 \mu/3)$.

It follows from the elementary bound $(1+\delta)\ln(1+\delta)-\delta\ge \delta^2/3$ on $[0,1]$. Stating the range prevents misuse for arbitrary $\delta$.

<a id="section-193-8-dependency-graphs-describe-joint-not-merely-pairwise-"></a>
## 8. Dependency graphs describe joint, not merely pairwise, independence {#section-195-8-dependency-graphs-describe-joint-not-merely-pairwise-}

Let $\{A_i:i \in I\}$ be events. A graph $D$ on index set $I$ is a **dependency graph** if, for every $i$, the event $A_i$ is independent of the sigma-algebra generated by all events $A_j$ whose indices are neither $i$ nor neighbors of $i$ in $D$.

In a finite setting, this means $A_i$ is independent of every Boolean combination of any collection of its nonneighbor events. Pairwise independence from each nonneighbor is weaker and does not certify a dependency graph.

For bad events determined by independent underlying coordinates, a safe dependency graph joins two events whenever their coordinate sets overlap. Disjoint coordinate sets give the required joint independence. The graph may contain unnecessary edges; this remains valid but worsens its maximum degree.

<a id="section-201-9-the-symmetric-local-lemma-tolerates-sparse-dependence"></a>
## 9. The symmetric local lemma tolerates sparse dependence {#section-203-9-the-symmetric-local-lemma-tolerates-sparse-dependence}

**Theorem 4.1 (symmetric local lemma).** Suppose events $A_1,\ldots ,A_N$ satisfy $P(A_i)\le p$, and have a dependency graph of maximum degree at most $d$. If

$e p(d+1)\le 1$,

then $P\left(\bigcap_i A_i^{c}\right)>0$.

**Proof.** We prove the slightly more general criterion: if some $x$ with $0<x<1$ satisfies

$p\le x(1-x)^d$,

then every conditional probability
$P\left(A_i\mid \bigcap_{j\in S}A_j^c\right)$ is at most $x$, whenever the conditioning event has positive probability and $i$ is not in $S$.

Induct on $|S|$. Split $S$ into the neighbors $S_1$ of $i$ and the nonneighbors $S_2$. Independence from the sigma-algebra of nonneighbors gives

$P\left(A_i\mid \bigcap_{j\in S_2}A_j^c\right)=P(A_i)\le p$.

Conditioning additionally on avoidance of $S_1$ can enlarge this by at most the reciprocal of

$P\left(\bigcap_{j\in S_1}A_j^c\,\middle|\,\bigcap_{j\in S_2}A_j^c\right)$.

Reveal the events in $S_1$ one at a time. The induction hypothesis bounds each conditional bad-event probability by $x$, so each avoidance factor is at least $1-x$. There are at most $d$ factors. The desired conditional probability is therefore at most $p/(1-x)^d\le x$.

Finally reveal $A_1,\ldots ,A_N$ in order. At every step, conditioned on all previous avoidances, the next event is avoided with probability at least $1-x>0$. Their product is positive.

Set $x=1/(d+1)$ when $d\ge 1$. Then

$x(1-x)^d=(1/(d+1))(d/(d+1))^d\ge 1/(e(d+1))$,

because $(1+1/d)^d\le e$. Thus $ep(d+1)\le 1$ implies the general criterion. When $d=0$, the events are mutually independent under the dependency-graph definition, and $p<1$ directly gives positive avoidance probability; the displayed hypothesis is stronger than needed. ∎

The theorem does not require all bad events to be independent. It requires each event to be jointly independent of the collection outside its declared neighborhood. It also gives existence, not a sampler.

<a id="section-236-worked-example-6-two-color-a-bounded-degree-uniform-hyp"></a>
### Worked example 6: two-color a bounded-degree uniform hypergraph {#section-238-worked-example-6-two-color-a-bounded-degree-uniform-hyp}

Let $H$ be an $r$-uniform hypergraph in which each vertex lies in at most $\Delta$ hyperedges. Color vertices independently red or blue. For each hyperedge $F$, let $A_F$ be the event that all its vertices receive one color. Then

$P(A_F)=2^{1-r}$.

Join two bad events when their hyperedges intersect. A fixed $F$ has $r$ vertices; through each vertex there are at most $\Delta-1$ other hyperedges. Hence its dependency degree is at most $d=r(\Delta-1)$. This may overcount a hyperedge intersecting $F$ more than once, which is safe. If

$e\,2^{1-r}\bigl(r(\Delta-1)+1\bigr)\le 1$,

the local lemma supplies a vertex coloring with no monochromatic hyperedge. The random vertex colors are independent. Bad events can interact only where their vertex-coordinate sets overlap; joining every such pair is a safe dependency graph, even though some overlapping pairs may happen to be independent and make the chosen graph nonminimal.

<a id="section-248-10-union-bound-alteration-and-local-lemma-answer-differ"></a>
## 10. Union bound, alteration, and local lemma answer different questions {#section-250-10-union-bound-alteration-and-local-lemma-answer-differ}

For bad events $A_i$, the union bound gives

$P\left(\bigcup_i A_i\right)\le \sum_i P(A_i)$.

If the sum is below one, total avoidance has positive probability. The union bound ignores dependence and pays for the total number of events. The local lemma instead pays for the maximum dependency degree, which can help when there are many events but each interacts with few others. Alteration permits defects to occur, then charges a bounded repair cost.

No method uniformly dominates the others. A dense dependency graph can make the local-lemma condition useless while expectation plus deletion remains effective. Conversely, deleting one feature per bad event may destroy too much structure, while the local lemma proves simultaneous avoidance.

<a id="section-258-11-bounded-construction-and-alteration-project"></a>
## 11. Bounded construction and alteration project {#section-260-11-bounded-construction-and-alteration-project}

Choose a graph with at most twelve labeled vertices and at most twenty-four edges. The project must emit both a constructed independent set and a reproducible audit:

1. enumerate rational sampling probabilities $p=j/20$ for $0\le j\le 20$;
2. compute exactly $pn-p^2m$ for each $p$ and identify all maximizing grid values;
3. use a fixed integer seed only to propose sampled sets, recording the selected vertex IDs;
4. repair each sample by scanning edges in lexicographic endpoint order and deleting the larger endpoint of every still-present edge;
5. verify directly that the output is independent and that deletions do not exceed the initially induced edge count;
6. enumerate all vertex subsets to report the exact independence number as a bounded comparison;
7. include a text trace for at least one sample, not only a drawing or color display.

The theoretical certificate $\alpha(G)\ge \max_p(pn-p^2m)$ does not depend on the seed or on simulation frequency. The experiment illustrates the distribution of repairs; it cannot validate the general expectation proof. Exhaustive comparison establishes optimality only for the selected graph of at most twelve vertices.

For a hypergraph variant, cap the ground set at ten vertices, list each hyperedge canonically, replace $p^2m$ by $p^r m$, and verify after repair that no entire hyperedge remains.

<a id="section-274-12-common-errors-and-diagnostic-boundaries"></a>
## 12. Common errors and diagnostic boundaries {#section-276-12-common-errors-and-diagnostic-boundaries}

1. **Linearity is given an unnecessary hypothesis.** Summands need not be independent.
2. **A product is factored without independence.** Moment-generating and joint-probability calculations do need the named contract.
3. **Two different good outcomes are merged.** “Some sample is large” and “some sample has few defects” do not imply one sample has both; optimize a combined variable or bound their intersection.
4. **Repair cost is reversed.** One deletion per bad pattern gives “deletions at most the number of initial bad patterns,” not equality.
5. **The parameter leaves $[0,1]$.** An unconstrained critical point is not automatically a probability.
6. **Pairwise independence is called a dependency graph.** The local lemma needs independence from the joint sigma-algebra of all nonneighbors.
7. **Chernoff is applied to overlapping pattern indicators.** The displayed proof factors over independent Bernoulli coordinates.
8. **A local-lemma edge count is underestimated.** Counting every coordinate overlap, even with duplication, gives a safe upper bound; omitting an overlap can invalidate the dependency graph.
9. **Simulation is treated as proof.** A seed trace is a witness only when the output itself is exactly checked.

<a id="section-286-worked-example-a-graph-alteration-certificate-with-expl"></a>
## Worked example: a graph alteration certificate with explicit repair {#section-288-worked-example-a-graph-alteration-certificate-with-expl}

Take a graph with twelve vertices and eighteen edges. Select every vertex
independently with probability one third. The expected selected vertex count
is four, and the expected number of selected edges is two. Subtracting these
expectations gives two, without assuming that the edge indicators are
independent. Processing the initially selected edges and deleting an endpoint
whenever both endpoints remain leaves an independent set of size at least
the selected vertex count minus the initially selected edge count.

Some sample therefore leaves at least two vertices after repair. This is an
existence certificate obtained from a signed score, not an assertion that
every sample leaves two vertices. The empty sample has positive probability
and leaves none. Nor is the score itself always the repaired set size:
several initially selected edges can disappear after one endpoint deletion.
Counting each such edge as a possible deletion deliberately underestimates
the final set, which is safe for a lower bound.

The probability one third is in fact the maximizing interior choice for
this graph's quadratic alteration bound. Doubling it selects more vertices
on average, but raises the expected number of contained edges quadratically
and worsens this particular guarantee. Selecting every vertex gives score
minus six; that negative score does not say the independence number is
negative, only that this choice of sampling parameter gives no useful
certificate. The repair still produces a genuine independent set.

To make the existence argument constructive by conditional expectation, keep
the expected signed score nondecreasing while fixing vertex decisions. Only
after every decision is fixed should the deterministic deletions be performed.
Trying to maintain the size of an unspecified future repaired set would
require an additional rule and a new conditional-expectation calculation.

<a id="section-318-13-solved-exercises"></a>
## 13. Solved exercises {#section-320-13-solved-exercises}

<a id="section-320-exercise-1-crossing-indicators-around-a-triangle"></a>
### Exercise 1: crossing indicators around a triangle {#section-322-exercise-1-crossing-indicators-around-a-triangle}
<a id="probabilistic-alteration-dependence-ex-1"></a>

Under a fair random bipartition, show that the three edge-crossing indicators of a triangle are not mutually independent.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the event that all three indicators equal one with what mutual independence would predict.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every triangle bipartition cuts either zero or two edges, never all three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each individual edge crosses with probability $1/2$. If the three indicators were mutually independent, all three would equal one with probability $1/8$. But no bipartition of three vertices cuts all three triangle edges: one side contains at least two vertices, and their connecting edge does not cross. Thus that joint probability is zero. Linearity still gives expected crossing count $3/2$.

</details>

<a id="section-346-exercise-2-conditional-expectation-for-a-weighted-star"></a>
### Exercise 2: conditional expectation for a weighted star {#section-348-exercise-2-conditional-expectation-for-a-weighted-star}
<a id="probabilistic-alteration-dependence-ex-2"></a>

A star has center $c$, leaves $u_1,\ldots ,u_k$, and nonnegative edge weights $w_i$. Fix $c$ in $L$. What deterministic leaf assignments maximize the cut, and how do they compare with the random guarantee?

<details>
<summary>Hint 1</summary>

**Hint.** Once the center side is fixed, each leaf controls just its own edge.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Nonnegative weights are maximized by putting positive-weight leaves on the opposite side.

</details>

<details>
<summary>Solution</summary>

**Solution.** Put every leaf with positive-weight incident edge in $R$; zero-weight leaves may go anywhere. Every edge then crosses, giving weight $\sum_i w_i$. The fair random assignment has expectation $(1/2)\sum_i w_i$. Conditional expectation guarantees at least the latter, but the local structure makes the exact optimum evident.

</details>

<a id="section-372-exercise-3-graph-alteration-with-few-edges"></a>
### Exercise 3: graph alteration with few edges {#section-374-exercise-3-graph-alteration-with-few-edges}
<a id="probabilistic-alteration-dependence-ex-3"></a>

Let $G$ have $n=12$ vertices and $m=4$ edges. Apply the graph alteration bound with the correct constrained value of $p$.

<details>
<summary>Hint 1</summary>

**Hint.** The sampling parameter must lie in $[0,1]$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The formal critical point exceeds one, so evaluate the alteration expression at the endpoint $p=1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The unconstrained critical point is $n/(2m)=12/8=3/2$, not a probability. Choose the boundary $p=1$. Starting with all vertices and deleting at most one endpoint per edge leaves an independent set of size at least $n-m=8$. Using $p=3/2$ would be meaningless.

</details>

<a id="section-398-exercise-4-optimize-a-3-uniform-bound"></a>
### Exercise 4: optimize a 3-uniform bound {#section-400-exercise-4-optimize-a-3-uniform-bound}
<a id="probabilistic-alteration-dependence-ex-4"></a>

A 3-uniform hypergraph has $n=24$ vertices and $m=64$ edges. Find the interior optimizer and the resulting real-valued guarantee.

<details>
<summary>Hint 1</summary>

**Hint.** Use the interior balancing formula for $np-mp^3$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** At the optimum $3mp^2=n$, hence the retained real bound is $2np/3$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here

$p_*=\left(\frac{n}{3m}\right)^{1/2}
=\left(\frac{24}{192}\right)^{1/2}=\frac{1}{2\sqrt{2}}$.

The guarantee is

$\frac23np_*=\frac23\cdot\frac{24}{2\sqrt{2}}
=\frac{8}{\sqrt{2}}=4\sqrt{2}$.

Since $4\sqrt{2}>5$, integrality certifies an independent set of size at least six. It does not certify seven because $4\sqrt{2}<6$.

</details>

<a id="section-434-exercise-5-markov-without-independence"></a>
### Exercise 5: Markov without independence {#section-436-exercise-5-markov-without-independence}
<a id="probabilistic-alteration-dependence-ex-5"></a>

Suppose a random sample creates a nonnegative integer number $Y$ of defects with $E[Y]\le 3$. Prove that some outcome has at most five defects.

<details>
<summary>Hint 1</summary>

**Hint.** Apply Markov's inequality at the integer threshold six.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A positive probability of $Y<6$ gives a supported outcome with $Y\le5$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Markov gives $P(Y\ge 6)\le 3/6=1/2$. Hence $P(Y<6)\ge 1/2>0$. Since $Y$ is integral, $Y<6$ means $Y\le 5$. No decomposition of $Y$ or independence hypothesis is needed.

</details>

<a id="section-460-exercise-6-covariance-of-overlapping-triangles"></a>
### Exercise 6: covariance of overlapping triangles {#section-462-exercise-6-covariance-of-overlapping-triangles}
<a id="probabilistic-alteration-dependence-ex-6"></a>

In $G(n,q)$, compute the covariance of indicators for two triangles sharing exactly one edge.

<details>
<summary>Hint 1</summary>

**Hint.** Count the union of the two required triangle edge sets.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The joint event needs five edges while the product of the marginal probabilities uses six.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each triangle has probability $q^3$, so the product of expectations is $q^6$. Their union contains five distinct required edges, so their joint probability is $q^5$. Therefore

$\operatorname{Cov}(I,J)=q^5-q^6=q^5(1-q)$.

It is positive for $0<q<1$. If two triangles share only a vertex, their edge-coordinate sets are disjoint and covariance is zero.

</details>

<a id="section-490-exercise-7-certify-a-dependency-degree"></a>
### Exercise 7: certify a dependency degree {#section-492-exercise-7-certify-a-dependency-degree}
<a id="probabilistic-alteration-dependence-ex-7"></a>

In an $r$-uniform hypergraph of maximum vertex degree $\Delta$, justify the bound $r(\Delta-1)$ on the number of other hyperedges intersecting a fixed hyperedge.

<details>
<summary>Hint 1</summary>

**Hint.** For each vertex of the fixed edge, count the other edges containing that vertex.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The sum may count one neighbour several times, which is permitted for an upper bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** Fix $F$. For each of its $r$ vertices, at most $\Delta-1$ hyperedges other than $F$ contain that vertex. Summing gives at most $r(\Delta-1)$ incidences with candidate neighbors. A hyperedge meeting $F$ in several vertices is counted several times, so the sum is an upper bound rather than necessarily an equality. Every intersecting hyperedge is counted at least once, which is what validity requires.

</details>

<a id="section-516-exercise-8-apply-the-local-lemma-constant"></a>
### Exercise 8: apply the local-lemma constant {#section-518-exercise-8-apply-the-local-lemma-constant}
<a id="probabilistic-alteration-dependence-ex-8"></a>

Let $H$ be 10-uniform with maximum vertex degree $\Delta=3$. Verify that the symmetric local-lemma condition in Worked example 6 holds using $e<3$.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the bad-edge probability and the dependency degree before substituting constants.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $p=1/512$, $d\le20$, and replace $e$ by the upper bound three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $p=2^{1-10}=1/512$ and $d\le 10(3-1)=20$. Thus

$e p(d+1)<3*21/512=63/512<1$.

The local lemma therefore gives a red-blue vertex coloring with no monochromatic hyperedge. The rough rational bound on $e$ is enough; a decimal approximation is unnecessary.

</details>

<a id="section-546-exercise-9-union-bound-versus-local-dependence"></a>
### Exercise 9: union bound versus local dependence {#section-548-exercise-9-union-bound-versus-local-dependence}
<a id="probabilistic-alteration-dependence-ex-9"></a>

Suppose there are 10,000 bad events, each of probability $10^{-4}$, with a dependency graph of maximum degree ten. Compare the elementary union criterion and the symmetric local-lemma criterion using $e<3$.

<details>
<summary>Hint 1</summary>

**Hint.** The union criterion sums all event probabilities; the local lemma instead uses the dependency degree.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check strictness at one for the first criterion and calculate $3\cdot10^{-4}\cdot11$ for the second.

</details>

<details>
<summary>Solution</summary>

**Solution.** The union sum equals one, not strictly below one, so the union bound does not prove positive avoidance probability. For the local lemma,

$e p(d+1)<3\cdot10^{-4}\cdot11=0.0033<1$.

Thus the local lemma proves simultaneous avoidance, provided the claimed dependency graph satisfies the full joint-independence definition.

</details>

<a id="section-576-exercise-10-locate-the-independence-in-chernoff-s-proof"></a>
### Exercise 10: locate the independence in Chernoff's proof {#section-578-exercise-10-locate-the-independence-in-chernoff-s-proof}
<a id="probabilistic-alteration-dependence-ex-10"></a>

Which line in the exponential-tail proof fails for dependent Bernoulli variables?

<details>
<summary>Hint 1</summary>

**Hint.** Separate Markov's inequality from the factorization of an exponential moment.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An expectation of a product equals the product of expectations at the step using mutual independence.

</details>

<details>
<summary>Solution</summary>

**Solution.** The failure is

$E[e^{\lambda \sum_i B_i}]=\prod_i E[e^{\lambda B_i}]$.

The left side equals $E[\prod_i e^{\lambda B_i}]$; factoring the expectation of a product requires mutual independence. Markov's inequality and the one-variable bound $1+u\le e^u$ remain valid without it, but they no longer yield the stated product estimate.

</details>

<a id="section-606-chapter-summary-and-connections"></a>
## Chapter summary and connections {#section-608-chapter-summary-and-connections}

Indicator variables convert combinatorial counts into expectations, and linearity requires no independence among the counts. Conditional expectation can turn an averaging proof into a deterministic construction when conditional values are computable. Alteration samples a rich object, charges at most one repair to each initial defect, and optimizes the sampling probability within $[0,1]$. Variance and exponential moments reveal the exact steps where pairwise or mutual independence enters. A dependency graph is a joint-independence certificate, and the symmetric local lemma replaces a bound on the total number of bad events by a bound on local interaction.

These tools connect backward to random Ramsey colorings, where first moments certify avoiding colorings, and forward to extremal graphs, set systems, randomized algorithms, and sparse constraint satisfaction. In every setting the proof should expose its random coordinates, bad events, dependence ledger, numerical condition, and deterministic conclusion. A computation can produce a witness, but the mathematical certificate is the exact check that the witness satisfies the promised property.

<a id="section-612-source-and-verification-note"></a>
## Sources {#section-614-source-and-verification-note}

Further reading includes Noga Alon and Joel H. Spencer, *The Probabilistic Method*, 4th ed. (2016), as the modern source route for local-dependence lemmas; [edition record](https://doi.org/10.1002/9781119061953). This guide does not specify a theorem/page locator matching this chapter’s dependency convention, so none is asserted here.


<a id="section-617-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-619-sources-for-the-expanded-teaching}

The chapter retains its original Alon–Spencer attribution. The added staged hints and exercise explanations are original exposition. For further primary reading, see Alon and Spencer, [*The Probabilistic Method*, fourth edition](https://www.wiley.com/en-us/the-probabilistic-method-4th-edition-p-9781119062073).

<a id="section-621-summary"></a>
## Summary {#section-623-summary}

Indicator sums and conditional averages turn finite distributions into deterministic existence statements. Alteration needs a valid repair bound; variance and concentration need their stated assumptions. Dependency graphs express independence from whole collections, which permits the local lemma. A successful probability estimate, an efficient construction, and an exhaustive finite certificate are distinct conclusions. Set-system compression next provides a structural alternative to random construction.

