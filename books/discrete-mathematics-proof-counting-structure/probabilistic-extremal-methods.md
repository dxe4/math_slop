
# Probabilistic and Extremal Methods {#section-1-probabilistic-and-extremal-methods}

Extremal combinatorics asks how large a finite structure can become while avoiding a forbidden pattern. The probabilistic method proves that a desired deterministic structure exists by showing that a random construction succeeds with positive probability. One method presses against a boundary; the other spreads attention across many candidates. Both demand precise hypotheses and careful separation of existence, construction, and experiment.

This chapter assumes finite graphs, counting, and elementary finite probability. It gives representative Turán- and Ramsey-style arguments, not a survey of the full theories.

<a id="section-5-1-extremal-questions-need-a-forbidden-configuration"></a>
## 1. Extremal questions need a forbidden configuration {#section-7-1-extremal-questions-need-a-forbidden-configuration}

An extremal problem has three parts:

1. a class of allowed objects, such as simple graphs on $n$ labeled vertices;
2. a forbidden configuration, such as a triangle;
3. an objective, such as maximizing the number of edges.

Changing any part changes the answer. A bound for simple graphs may fail for multigraphs. “Contains no triangle as a subgraph” differs from “contains no induced triangle” only because every triangle is already induced on its three vertices, but for larger patterns induced and non-induced avoidance differ sharply.

<a id="section-15-2-mantel-s-theorem-the-first-tur-n-boundary"></a>
## 2. Mantel’s theorem: the first Turán boundary {#section-17-2-mantel-s-theorem-the-first-tur-n-boundary}

**Theorem 18.1 (Mantel).** A simple triangle-free graph on $n$ vertices has at most $\lfloor n^{2}/4\rfloor$ edges. The bound is attained by the complete bipartite graph whose parts have sizes $\lfloor n/2\rfloor$ and $\lceil n/2\rceil$.

**Proof.** If $n=0$, both the upper bound and the empty complete bipartite construction are immediate. Assume $n\ge 1$. For every edge $uv$, the endpoints have no common neighbor, or that neighbor would form a triangle. Their neighborhoods include each other, but otherwise are disjoint, so

$$\operatorname{deg}(u)+\operatorname{deg}(v)\le n$$

Sum over all edges. Each vertex $v$ appears once for every incident edge and contributes $\operatorname{deg}(v)$ each time, hence

$$\sum_{v} \operatorname{deg}(v)^{2} = \sum_{uv\in E}(\operatorname{deg}(u)+\operatorname{deg}(v)) \le nm$$

where $m=|E|$. Cauchy’s inequality gives

$$\sum_{v} \operatorname{deg}(v)^{2} \ge (\sum_{v} \operatorname{deg}(v))^{2}/n = (2m)^{2}/n$$

If $m>0$, combine the inequalities:

$4m^{2}/n\le nm$, so $m\le n^{2}/4$.

Since $m$ is an integer, $m\le \lfloor n^{2}/4\rfloor$. The case $m=0$ is immediate. A complete bipartite graph has no triangle, and balanced part sizes give $\lfloor n/2\rfloor\lceil n/2\rceil=\lfloor n^{2}/4\rfloor$ edges. ∎

The proof provides both an upper bound and a construction meeting it. Without the construction, we would know only that the maximum is *at most* the bound.

<a id="section-39-3-what-tur-n-s-theorem-says-and-what-is-omitted"></a>
## 3. What Turán’s theorem says—and what is omitted {#section-41-3-what-tur-n-s-theorem-says-and-what-is-omitted}

For $r\ge 2$, **Turán’s theorem** states that among simple $n$-vertex graphs containing no complete graph $K_{r+1}$, the maximum number of edges is achieved by a complete $r$-partite graph with parts as equal as possible. Mantel is the case $r=2$.

This chapter does not prove the general theorem. Its usual proofs use symmetrization or induction and need a careful equality analysis. We may use Mantel because it was proved above; we should not cite “Turán-style intuition” as if it proved the full result for an arbitrary forbidden graph.

<a id="section-45-4-ramsey-forcing-sufficient-size-creates-order"></a>
## 4. Ramsey forcing: sufficient size creates order {#section-47-4-ramsey-forcing-sufficient-size-creates-order}

The Ramsey number $R(s,t)$ is the least $n$ such that every red-blue coloring of the edges of $K_{n}$ contains a red $K_{s}$ or a blue $K_{t}$.

Equivalently, every graph on $n$ vertices contains a clique of size $s$ or an independent set of size $t$: treat graph edges as red and nonedges as blue.

<a id="section-51-the-exact-small-case-r-3-3-6"></a>
### The exact small case $R(3,3)=6$ {#section-53-the-exact-small-case-r-3-3-6}

**Upper bound.** Color the edges of $K_{6}$ red or blue. Choose a vertex $v$. Among its five incident edges, at least three share a color; suppose $va,vb,vc$ are red. If any of $ab,ac,bc$ is red, it forms a red triangle with $v$. If none is red, all three are blue and $abc$ is a blue triangle. The blue-majority case is symmetric. Thus $R(3,3)\le 6$.

**Lower bound.** Color a five-cycle red and its five complement edges blue. Both color classes form a five-cycle, which has no triangle. Therefore a coloring of $K_{5}$ avoids monochromatic triangles, so $R(3,3)>5$.

Together these prove equality. Checking many random colorings of $K_{6}$ would not prove the upper bound; displaying one $K_{5}$ coloring suffices only for the lower bound.

<a id="section-59-5-finite-probability-and-expectation"></a>
## 5. Finite probability and expectation {#section-61-5-finite-probability-and-expectation}

In a finite sample space $\Omega$ with equally likely outcomes, $P(A)=|A|/|\Omega|$. A random variable $X:\Omega\to R$ assigns a number to each outcome, and

$$E[X]=\sum_{\omega\in \Omega} X(\omega)P(\{\omega\})$$

For arbitrary finite random variables,

$$E[X+Y]=E[X]+E[Y]$$

This **linearity of expectation** does not require independence.

For an event $A$, its indicator $1_{A}$ equals $1$ when $A$ occurs and $0$ otherwise. Then $E[1_{A}]=P(A)$. If $X$ counts bad configurations, write it as a sum of indicators and add their probabilities.

<a id="section-73-6-the-first-moment-existence-principle"></a>
## 6. The first-moment existence principle {#section-75-6-the-first-moment-existence-principle}

**Lemma 18.2.** If $X$ is a nonnegative integer-valued random variable and $E[X]<1$, then some outcome has $X=0$.

**Proof.** If every outcome had $X\ge 1$, then the weighted average $E[X]$ would be at least $1$. Contradiction. ∎

This yields a common probabilistic-method pattern:

1. define a finite random object;
2. let $X$ count its bad substructures;
3. calculate or bound $E[X]$;
4. show $E[X]<1$;
5. conclude that at least one deterministic object has no bad substructure.

The method proves existence. It may not identify the successful outcome efficiently.

<a id="section-89-7-a-probabilistic-ramsey-lower-bound"></a>
## 7. A probabilistic Ramsey lower bound {#section-91-7-a-probabilistic-ramsey-lower-bound}

Color each edge of $K_{n}$ independently red or blue with probability $1/2$. Let $X$ count monochromatic copies of $K_{k}$.

For each $k$-vertex set $S$, define indicator $I_{S}$ for the event that all $\binom{k}{2}$ internal edges have one color. The probability is

$$P(I_{S}=1)=2\cdot (1/2)^{\binom{k}{2}}=2^{1-\binom{k}{2}}$$

There are $\binom{n}{k}$ choices of $S$. By linearity,

$$E[X]=\binom{n}{k}2^{1-\binom{k}{2}}$$

Therefore, whenever

$$\binom{n}{k}2^{1-\binom{k}{2}}<1$$

some red-blue coloring of $K_{n}$ has no monochromatic $K_{k}$, and hence $R(k,k)>n$.

This is a precisely scoped lower bound. It does not determine the exact Ramsey number, and the inequality may be far from best possible. Independence is used to calculate the probability that all edges within one chosen $S$ share a color; linearity itself does not need the indicators to be independent.

<a id="section-109-8-expected-number-of-crossing-edges"></a>
## 8. Expected number of crossing edges {#section-111-8-expected-number-of-crossing-edges}

Every finite graph has a bipartite subgraph containing at least half its edges.

**Proof by random partition.** Independently place each vertex into side $L$ or $R$ with equal probability. An edge crosses the partition exactly when its endpoints land on different sides, which occurs with probability $1/2$. If $X$ is the number of crossing edges, then

$$E[X]=m/2$$

Some partition has $X\ge m/2$, because an average cannot exceed every observed value. The crossing edges form a bipartite subgraph. ∎

Notice the inequality direction differs from the $<1$ lemma. An expectation of $m/2$ ensures some outcome is at least the average, while it also ensures some outcome is at most the average.

<a id="section-121-deterministic-repair"></a>
### Deterministic repair {#section-123-deterministic-repair}

The same conclusion can be reached by local improvement. Start with any partition. If a vertex has more neighbors on its own side than across, move it; the crossing-edge count strictly increases. Finiteness forces termination. At termination, every vertex has at least half its incident edges crossing; summing shows at least half of all edges cross. This provides a constructive counterpart to the existence proof.

<a id="section-125-9-alteration-allow-defects-then-remove-them"></a>
## 9. Alteration: allow defects, then remove them {#section-127-9-alteration-allow-defects-then-remove-them}

Sometimes $E[X]<1$ is too strong. Instead build a random object with many desired elements and few bad configurations, then delete one element from each defect.

For example, sample vertices independently into a set $S$. If $S$ contains edges but we want a stable set, remove one endpoint from every internal edge. The surviving set is independent and has size at least $|S|-e(S)$. Taking expectations can yield a positive lower bound.

The deletion accounting must be safe. Removing one element may destroy several defects, which helps; claiming it destroys a defect without removing any of its members would not be justified.

<a id="section-133-10-extremal-construction-upper-bound-and-stability-are-"></a>
## 10. Extremal construction, upper bound, and stability are different claims {#section-135-10-extremal-construction-upper-bound-and-stability-are-}

An exact extremal theorem usually needs:

- a construction showing $ex(n,F)\ge L$;
- an upper-bound proof showing $ex(n,F)\le L$;
- possibly an equality characterization showing which objects attain $L$.

A **stability theorem** says near-extremal objects resemble extremizers in a specified sense. That is stronger than knowing the maximum value and is not automatic. For Mantel, balanced complete bipartite graphs attain the maximum; proving all equality cases or quantitative near-bipartite structure requires additional argument beyond the displayed inequality chain.

<a id="section-143-11-computation-as-a-conjecture-audit"></a>
## 11. Computation as a conjecture audit {#section-145-11-computation-as-a-conjecture-audit}

For small $n$, exact enumeration can:

- list all graphs or all colorings;
- compute clique and independence numbers;
- find extremal examples;
- test whether a proposed bound fails early;
- reveal multiple nonisomorphic equality cases.

But the number of labeled graphs is $2^{\binom{n}{2}}$, so exhaustive search grows rapidly. A report must state $n$, whether labels matter, how isomorphism was handled, and whether arithmetic was exact. “No counterexample found” is not a theorem for all $n$.

<a id="section-155-12-common-errors"></a>
## 12. Common errors {#section-157-12-common-errors}

- Omitting the forbidden-subgraph convention or graph class.
- Proving only an upper bound and calling it the maximum.
- Assuming expectation itself is an achievable integer without using an averaging argument.
- Requiring independence for linearity of expectation, or forgetting it where a product probability uses it.
- Concluding a random object succeeds with high probability when only positive probability was shown.
- Treating an existence proof as an efficient construction.
- Generalizing Mantel’s proof to all forbidden graphs without a theorem.
- Reporting small-instance evidence as an exact Ramsey value.

<a id="section-166-13-exercises-with-worked-solutions"></a>
## 13. Exercises with worked solutions {#section-168-13-exercises-with-worked-solutions}

<a id="section-168-dm-ch07-e001-apply-mantel-exactly"></a>
### DM-CH07-E001 — apply Mantel exactly {#section-170-dm-ch07-e001-apply-mantel-exactly}

What is the maximum number of edges in a triangle-free simple graph on $9$ vertices? Give both bounds.

<a id="section-172-dm-ch07-e001-solution"></a>
#### DM-CH07-E001 — Solution {#section-174-dm-ch07-e001-solution}

Mantel gives at most $\lfloor 9^{2}/4\rfloor=20$ edges. The complete bipartite graph $K_{4,5}$ is triangle-free and has $4\cdot 5=20$ edges. Therefore the maximum is exactly $20$.

<a id="section-176-dm-ch07-e002-a-first-moment-coloring"></a>
### DM-CH07-E002 — a first-moment coloring {#section-178-dm-ch07-e002-a-first-moment-coloring}

Color each vertex of a graph with $q$ colors independently and uniformly. If the graph has $m$ edges, show that when $m/q<1$, a proper coloring exists.

<a id="section-180-dm-ch07-e002-solution"></a>
#### DM-CH07-E002 — Solution {#section-182-dm-ch07-e002-solution}

Let $X$ count monochromatic edges. Each edge is monochromatic with probability $1/q$: after the first endpoint’s color, the second must match it. Thus $E[X]=m/q$. If this is less than one, the first-moment lemma gives a coloring with $X=0$, which is proper. The bound is usually weak, but the existence logic is valid.

<a id="section-184-dm-ch07-e003-averaging-without-independence"></a>
### DM-CH07-E003 — averaging without independence {#section-186-dm-ch07-e003-averaging-without-independence}

Explain why the random-partition proof needs no independence between different edge-crossing indicators for the expectation calculation.

<a id="section-188-dm-ch07-e003-solution"></a>
#### DM-CH07-E003 — Solution {#section-190-dm-ch07-e003-solution}

Write $X=\sum_{e} I_{e}$. Linearity gives $E[X]=\sum_{e}E[I_{e}]$ for any joint distribution, so the calculation uses only the marginal expectation $E[I_{e}]=1/2$ and the sum is $m/2$. In fact, under independent fair vertex assignments, crossing indicators for any two distinct edges are pairwise independent even when the edges share a vertex. That fact is still unnecessary, and it does not extend to mutual independence: around a triangle the three indicators always contain zero or two crossings, never one or three.

<a id="section-192-dm-ch07-e004-scope-a-ramsey-conclusion"></a>
### DM-CH07-E004 — scope a Ramsey conclusion {#section-194-dm-ch07-e004-scope-a-ramsey-conclusion}

For $k=4$, find a value of $n$ for which the displayed expectation proves $R(4,4)>n$.

<a id="section-196-dm-ch07-e004-solution"></a>
#### DM-CH07-E004 — Solution {#section-198-dm-ch07-e004-solution}

Here $\binom{4}{2}=6$, so $E[X]=\binom{n}{4}/32$. We need $\binom{n}{4}<32$. At $n=6$, $\binom{6}{4}=15<32$, so a coloring of $K_{6}$ without a monochromatic $K_{4}$ exists and $R(4,4)>6$. At $n=7$, $\binom{7}{4}=35$, so this particular first-moment inequality no longer proves success. Failure of the method at $7$ does not imply $R(4,4)\le 7$.

<a id="section-200-chapter-summary"></a>
## Chapter summary {#section-202-chapter-summary}

Extremal arguments require an upper bound, a matching construction, and honest equality scope. Mantel’s theorem exactly solves triangle avoidance; Ramsey reasoning shows that sufficiently large colored complete graphs force monochromatic structure. The probabilistic method converts expected defect counts into deterministic existence, while alteration and averaging broaden the method. Exact finite experiments can locate conjectures and witnesses, but only proof crosses from tested sizes to every allowed size.

<a id="section-204-source-and-verification-note"></a>
## Sources {#section-206-source-and-verification-note}

Further reading includes Bollobás, *Extremal Graph Theory* (1978), Graham–Rothschild–Spencer, *Ramsey Theory*, 2nd ed. (1990), and Alon–Spencer, *The Probabilistic Method*, 4th ed. (2016), as source routes for the named extremal and Ramsey claims. This guide does not specify a theorem/page locators matching these formulations, so none is asserted.
