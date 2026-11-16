
# The Probabilistic Method and Random Structures

The probabilistic method proves a deterministic object exists by showing a random candidate has positive probability of being good. The randomness may disappear from the conclusion. This chapter develops first-moment, alteration, local-dependency, and second-moment arguments while separating existence, abundance, algorithms, and typical structure.

## 1. Positive probability proves existence

If a random object $R$ takes values in a finite family and $\mathbb{P}(R\in G)>0$, then at least one good object exists. More quantitatively, if a nonnegative integer defect count $X$ satisfies $\mathbb{E}[X]<1$, then some outcome has $X=0$; otherwise $X\ge 1$ everywhere.

### Sum-free selection

Select each element of a finite set independently with probability $p$. If $V$ counts selected elements and $B$ selected forbidden configurations, then $\mathbb{E}[V-B]$ is a lower bound on the size remaining after deleting one element from every bad configuration. Optimizing $p$ turns random selection plus deterministic repair into an existence bound.

## 2. Coloring and first moments

Color vertices of a graph independently with $k$ colors. An edge is monochromatic with probability $1/k$, so expected bad edges are $\lvert E\rvert /k$. This alone does not prove a proper coloring unless the expectation is below one. A different random object—say a random bipartition—can prove a cut with at least half the edges because each edge crosses with probability $1/2$ and some cut meets the expectation.

For Ramsey lower bounds, color edges of $K_{n}$ red/blue independently. A fixed $r$-vertex set is monochromatic with probability $2^{1-\binom{r}{2}}$. If

$\binom{n}{r}2^{1-\binom{r}{2}}<1$,

some coloring has no monochromatic $K_{r}$.

## 3. Alteration and deletion

Expectation can tolerate a few defects when they can be repaired cheaply. In a random graph $G(n,p)$, choose a random vertex subset or edges, count desired objects and forbidden substructures, and delete one element per violation. The repaired size is at least desired count minus defect count. Linearity needs no independence between defect indicators.

## 4. Second moment and abundance

For $X\ge 0$ with $0<\mathbb{E}[X^2]<\infty$, Paley–Zygmund at $\theta =0$ gives

$\mathbb{P}(X>0)\ge \mathbb{E}[X]^{2}/\mathbb{E}[X^{2}]$.

Thus a large first moment is useful only if the second moment is not much larger than its square. Write $X=\sum_{i}I_{i}$; overlaps determine $\mathbb{E}[X^{2}]$. Ignoring them is the standard failure in random-structure arguments.

Chebyshev also shows concentration for a sequence with nonzero means when $\operatorname{Var}(X_n)=o(\mathbb{E}[X_n]^{2})$, yielding $X_n/\mathbb{E}[X_n]\to 1$ in probability.

## 5. Local dependence

The symmetric Lovász local lemma states: form a graph on the bad events so that each event is independent of the sigma-algebra generated jointly by all of its nonneighbors. If every bad event has probability at most $p$, every vertex has degree at most $d$, and $ep(d+1)\le 1$, then the probability that no bad event occurs is positive. Pairwise independence from each nonneighbor is insufficient. For example, if $(U,V)$ is uniform on $\mathbb{F}_3^2$, the four events $U=0$, $V=0$, $U=V$, and $U=-V$ are pairwise independent and each has probability $1/3$, yet their union is the whole nine-point space. The dependency graph must encode joint event independence, not merely geometric closeness. The lemma proves existence; algorithmic construction requires additional work such as resampling under suitable variable models.

## 6. Random graphs as a laboratory

In $G(n,p)$, edges occur independently. Vertex degrees are binomial, the expected number of edges is $\binom{n}{2}p$, and the expected triangles are $\binom{n}{3}p^{3}$. Edge indicators are independent; triangle indicators overlap and are dependent when triangles share an edge.

Threshold language needs quantifiers. “Property appears near $p(n)$” is incomplete without specifying probability convergence and scaling. A first-moment bound can establish absence below a scale but usually cannot locate a sharp threshold alone.

## Developed proofs and worked constructions

### Proposition 1. Averaging, integer rounding, and repair

For any finite-valued real random variable $Y$, at least one outcome satisfies $Y\ge\mathbb EY$. Otherwise every value in the finite support is strictly below the mean, and taking their probability-weighted average gives a contradiction. This elementary observation underlies more than the defect principle: it permits negative scores and differences of dependent counts. If the desired score is integer-valued, a lower bound $a$ on an achieved score gives the integer bound $\lceil a\rceil$. Strict versus non-strict inequalities must be retained when converting that conclusion into a Ramsey statement.

For alteration, begin with a finite set and a specified family of forbidden subsets. Independently retain each element with probability $p$. Let $V$ count retained elements and $B$ retained forbidden configurations. Process the retained forbidden configurations in any fixed order, deleting one element from a configuration whenever all its elements remain. At most $B$ deletions occur. No configuration remains at the end, since deletions cannot create a forbidden subset that was not originally retained. The surviving set has size at least $V-B$. Taking expectations and then using averaging proves the claimed deterministic lower bound. The score variables need not be independent: only the marginal probabilities used to evaluate their expectations need to be correct.

This argument assumes that one deletion destroys each current forbidden configuration and that removal preserves the desired admissibility condition. Problems in which repair can create new defects need a different analysis. Likewise an expected repair cost is not an upper bound on every sample's cost. The proof chooses one outcome for which the combined score is favorable; it does not choose separately favorable outcomes for size and defect count.

### Worked example 1. A finite Ramsey bound with the correct strict inequality

Independently color every edge of $K_6$ red or blue with equal probabilities. For a fixed four-vertex set there are six internal edges. Its monochromatic probability is $2(1/2)^6=1/32$, because all-red and all-blue are disjoint events. With $X$ the number of monochromatic four-cliques, linearity gives $\mathbb EX=\binom64/32=15/32<1$. Thus some coloring has no monochromatic $K_4$, proving $R(4,4)>6$.

There is no claim that the four-clique indicators are mutually independent. Many share edges. Independence was used only within one fixed clique to compute its monochromatic probability. Markov's inequality also gives $\mathbb P(X\ge1)\le15/32$, so at least $17/32$ of the random colorings avoid such a clique. Here the bound proves a positive success probability substantial enough for rejection sampling to have expected number of attempts at most $32/17$, assuming one can check every candidate exactly.

For general $n,r$, the same argument gives the strict sufficient condition already stated. An expected count equal to one is inconclusive: a nonnegative integer random variable could equal one always. The method's failure at equality or above is a limitation of the bound, not evidence that every coloring contains a forbidden clique.

### Worked example 2. Choosing a deletion probability

Suppose a ground set has $100$ elements and at most $1000$ specified forbidden triples of distinct elements. Choose each element independently with probability $p=1/5$. The expected retained size is $20$, and each forbidden triple survives with probability $p^3=1/125$. Therefore $\mathbb EB\le8$ and $\mathbb E(V-B)\ge12$. The deletion argument yields an admissible set of at least twelve elements.

The interior optimum of $100p-1000p^3$ is $p=1/\sqrt{30}$. This is within $[0,1]$, so it is feasible. Substitution gives $(200/3)/\sqrt{30}$, approximately $12.17$. Since the eventual size is an integer, averaging at this optimized choice guarantees at least thirteen elements. The modest improvement from twelve to thirteen comes from preserving the exact real bound before rounding. If the computed stationary point exceeded one, it would not describe a legal selection probability; one would compare the endpoint $p=1$ instead.

No structural independence between the forbidden triples is assumed. They may overlap extensively or share a common element. This uniform guarantee may be weaker than a problem-specific construction, but its hypotheses are easy to audit: a bound on their number, exactly three distinct elements in each, and independent selection of the primitive elements.

### Proposition 2. A full local-lemma argument

Let $A_1,\ldots,A_m$ be events with a dependency graph. Write $N(i)$ for the neighbors of $i$, and suppose numbers $0<x_i<1$ satisfy
$\mathbb P(A_i)\le x_i\prod_{j\in N(i)}(1-x_j)$.
Then $\mathbb P(\bigcap_iA_i^c)\ge\prod_i(1-x_i)>0$.

We prove simultaneously by induction on the size of a conditioning set that every finite avoidance event has positive probability and
$\mathbb P(A_i\mid\bigcap_{j\in S}A_j^c)\le x_i$
for $i\notin S$. For the empty set this follows from the assumed bound, which is at most $x_i$. Suppose the conditional claims are available for smaller conditioning sets. Ordering the indices of $S$ and multiplying successive conditional avoidance probabilities shows $\mathbb P(\bigcap_{j\in S}A_j^c)\ge\prod_{j\in S}(1-x_j)>0$, so all denominators below exist.

Partition $S$ into its neighboring portion $S_1=S\cap N(i)$ and the nonneighbors $S_2=S\setminus N(i)$. If $S_1$ is empty, the defining joint independence of the dependency graph gives $\mathbb P(A_i\mid\bigcap_{S}A_j^c)=\mathbb P(A_i)\le x_i$. Otherwise,
$\mathbb P(A_i\mid\bigcap_{S}A_j^c)
\le \mathbb P(A_i\mid\bigcap_{S_2}A_j^c)/
\mathbb P(\bigcap_{S_1}A_j^c\mid\bigcap_{S_2}A_j^c)$.
The numerator equals $\mathbb P(A_i)$ by joint independence. In the denominator, expose $S_1$ in order. Every conditional avoidance factor conditions on at most $|S|-1$ events, so induction bounds it below by $1-x_j$. The ratio is therefore at most
$\mathbb P(A_i)/\prod_{j\in S_1}(1-x_j)
\le x_i\prod_{j\in N(i)\setminus S_1}(1-x_j)\le x_i$.
This closes the induction. Multiplying the final avoidance factors over all $m$ events proves the result.

For maximum degree $d\ge1$, take every $x_i=1/(d+1)$. The inequality
$(d/(d+1))^d\ge e^{-1}$ follows from $\log(1+t)\le t$ at $t=1/d$. Consequently
$x_i(1-x_i)^d\ge1/[e(d+1)]$.
Thus $ep(d+1)\le1$ implies the asymmetric hypothesis. For $d=0$, each event is independent of the sigma-algebra of all the others; sequential multiplication yields avoidance probability $\prod_i(1-\mathbb P(A_i))>0$ whenever $p<1$, in particular under the stated symmetric criterion. This treats the case where $1/(d+1)=1$ would be an inadmissible auxiliary choice.

The proof explains why pairwise independence is inadequate: it explicitly conditions on avoiding an entire collection of nonneighbors. It also explains why positive probability is the conclusion. It supplies no bound on the running time of an algorithm seeking an avoiding outcome. The variable-based resampling algorithm is a further theorem with additional hypotheses.

### Proposition 3. Second moments identify the relevant overlaps

For an indicator sum $X=\sum_{a\in\mathcal A}I_a$, expand
$\mathbb EX^2=\sum_a\mathbb EI_a+2\sum_{\{a,b\}}\mathbb E(I_aI_b)$.
Each unordered pair appears twice in the square, which is a common source of incorrect constants. Equivalently,
$\operatorname{Var}(X)=\sum_a\operatorname{Var}(I_a)+2\sum_{\{a,b\}}\operatorname{Cov}(I_a,I_b)$.
The overlap types must be classified according to shared primitive random variables. Shared vertices need not imply dependence in an independent-edge model; shared edges do.

To prove the positive-probability estimate, note that $\mathbb EX=\mathbb E[X\mathbf1_{\{X>0\}}]$. Cauchy–Schwarz bounds its square by $\mathbb EX^2\,\mathbb P(X>0)$. The positive finite second moment permits division and gives the claimed result. More generally, for $0<\theta<1$, split the expectation on $\{X\le\theta\mathbb EX\}$ and its complement. The first part is at most $\theta\mathbb EX$, and applying Cauchy–Schwarz to the second gives
$\mathbb P(X>\theta\mathbb EX)\ge(1-\theta)^2(\mathbb EX)^2/\mathbb EX^2$.
The displayed strict event is harmless because the bound on the first part used a non-strict inequality.

### Worked example 3. Triangles in a small random graph

Let $X$ count triangles in $G(6,1/2)$. There are twenty triples and each forms a triangle with probability $1/8$, so $\mu=\mathbb EX=5/2$. The sum of the individual variances is $20(1/8)(7/8)=35/16$. An unordered pair of distinct triangles sharing an edge is determined by its shared edge and its two distinct third vertices. Hence there are $\binom62\binom42=90$ such pairs. Their joint probability is $1/32$, giving covariance $1/32-1/64=1/64$. Other distinct pairs share no edge and have covariance zero, including triangles sharing one vertex.

Therefore $\operatorname{Var}(X)=35/16+2(90)/64=5$. The second moment is $5+(5/2)^2=45/4$, and the second-moment bound gives $\mathbb P(X>0)\ge(25/4)/(45/4)=5/9$. The simpler Chebyshev argument only gives $\mathbb P(X=0)\le5/(5/2)^2=4/5$, hence a weaker success bound $1/5$. Neither number is the exact triangle probability. Both are rigorous finite bounds obtained from the same correctly enumerated overlap information.

For asymptotic claims, one instead studies a sequence of models and proves that a failure probability tends to zero. A positive constant lower bound such as $5/9$ is an existence statement at a specified finite model; it is not “with high probability.” Likewise $\mathbb EX\to\infty$ alone does not imply $\mathbb P(X>0)\to1$: let $X_n=n^2$ with probability $1/n$ and zero otherwise. Its mean is $n$ but its positive probability tends to zero. Variance or another structural argument is what excludes this rare-large-outcome phenomenon.

## 7. Exercises with complete solutions

### 1. Defect principle

**Exercise 18.1**

<a id="probabilistic-method-and-random-structures-ex-1"></a>

Prove $\mathbb{E}[X]<1$ for nonnegative integer $X$ implies $\mathbb{P}(X=0)>0$.

<details>
<summary>Hint 1</summary>

Use the fact that $X$ is integer-valued and nonnegative.

</details>

<details>
<summary>Hint 2</summary>

If $P(X=0)=0$, then $X\ge1$ almost surely, contradicting the stated expectation.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $\mathbb{P}(X=0)=0$, then $X\ge 1$ almost surely, forcing $\mathbb{E}[X]\ge 1$, contradiction.

</details>

### 2. Maximum cut

**Exercise 18.2**

<a id="probabilistic-method-and-random-structures-ex-2"></a>

Prove every graph has a cut containing at least half its edges.

<details>
<summary>Hint 1</summary>

Assign independent fair binary labels to vertices.

</details>

<details>
<summary>Hint 2</summary>

Each edge crosses with probability one half; some realization attains at least the mean number of crossings.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assign each vertex independently to either side. Each edge crosses with probability $1/2$, so expected crossing edges are $\lvert E\rvert /2$; some cut has at least the expectation.

</details>

### 3. Tournament paths

**Exercise 18.3**

<a id="probabilistic-method-and-random-structures-ex-3"></a>

In a random tournament, find the expected number of directed Hamilton paths.

<details>
<summary>Hint 1</summary>

Index candidate paths by vertex orderings.

</details>

<details>
<summary>Hint 2</summary>

For each of the $n!$ orders, exactly $n-1$ independent edge orientations must point forward.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each of $n!$ vertex orders is directed forward with probability $2^{-(n-1)}$, so expectation is $n!/2^{n-1}$, positive; hence every $n$ admits a tournament with such a path (indeed every tournament does, though this argument only proves existence of a pair).

</details>

### 4. Ramsey calculation

**Exercise 18.4**

<a id="probabilistic-method-and-random-structures-ex-4"></a>

Give the first-moment condition for avoiding monochromatic $K_{r}$.

<details>
<summary>Hint 1</summary>

Count the monochromatic $r$-subsets and take expectations.

</details>

<details>
<summary>Hint 2</summary>

For each subset, the all-red and all-blue possibilities contribute $2\cdot2^{-\binom r2}$; apply the defect principle.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expected monochromatic copies are $\binom{n}{r}2^{1-\binom{r}{2}}$; if below one, a coloring with none exists.

</details>

### 5. Random subset size

**Exercise 18.5**

<a id="probabilistic-method-and-random-structures-ex-5"></a>

Selecting each of $N$ elements with probability $p$, find expected size.

<details>
<summary>Hint 1</summary>

Write the selected size as a sum of selection indicators.

</details>

<details>
<summary>Hint 2</summary>

Every one of the $N$ indicators has expectation $p$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Sum $N$ selection indicators: expectation is $Np$.

</details>

### 6. Delete bad triples

**Exercise 18.6**

<a id="probabilistic-method-and-random-structures-ex-6"></a>

If a random subset has expected size $Np$ and expected forbidden triples $Tp^{3}$, what repaired size is guaranteed?

<details>
<summary>Hint 1</summary>

For each retained forbidden triple, delete one element if the triple still survives.

</details>

<details>
<summary>Hint 2</summary>

The repaired size is at least original size minus the number of originally retained triples; take the expectation of that difference.

</details>

<details>
<summary>Solution</summary>

**Solution.** Delete at most one element for each remaining bad triple. Expected lower bound is $Np-Tp^{3}$, so some outcome attains at least that value.

</details>

### 7. Optimize alteration

**Exercise 18.7**

<a id="probabilistic-method-and-random-structures-ex-7"></a>

Maximize $Np-Tp^{3}$ for positive $T$ in the interior.

<details>
<summary>Hint 1</summary>

Differentiate the cubic score with respect to $p$.

</details>

<details>
<summary>Hint 2</summary>

Solve $N-3Tp^2=0$, and check whether the root lies in the probability interval $[0,1]$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Derivative $N-3Tp^{2}=0$ gives $p=\sqrt{N/(3T)}$, clipped to $[0,1]$; the second derivative is negative.

</details>

### 8. Expected graph edges

**Exercise 18.8**

<a id="probabilistic-method-and-random-structures-ex-8"></a>

In $G(n,p)$, find $\mathbb{E}\lvert E\rvert$.

<details>
<summary>Hint 1</summary>

Use one indicator for each unordered vertex pair.

</details>

<details>
<summary>Hint 2</summary>

There are $\binom n2$ potential edges, each of mean $p$.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are $\binom{n}{2}$ independent potential-edge indicators, each mean $p$; linearity gives $\binom{n}{2}p$.

</details>

### 9. Expected triangles

**Exercise 18.9**

<a id="probabilistic-method-and-random-structures-ex-9"></a>

Find the expected triangle count.

<details>
<summary>Hint 1</summary>

Use one indicator for each vertex triple.

</details>

<details>
<summary>Hint 2</summary>

A fixed triple needs three independent edge successes, so its mean is $p^3$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each triple forms a triangle if its three edges occur, probability $p^{3}$; expectation is $\binom{n}{3}p^{3}$.

</details>

### 10. Triangle dependence

**Exercise 18.10**

<a id="probabilistic-method-and-random-structures-ex-10"></a>

Are triangle indicators independent when triangles share one edge?

<details>
<summary>Hint 1</summary>

Compare the joint occurrence probability with the product of the marginal probabilities.

</details>

<details>
<summary>Hint 2</summary>

The union of two triangles sharing an edge contains five distinct edges, not six.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Their joint occurrence needs five distinct edges, probability $p^{5}$, whereas the product is $p^{6}$ for $0<p<1$.

</details>

### 11. Disjoint triangles

**Exercise 18.11**

<a id="probabilistic-method-and-random-structures-ex-11"></a>

Are indicators for edge-disjoint triangles independent?

<details>
<summary>Hint 1</summary>

Identify the primitive random variables on which each triangle indicator depends.

</details>

<details>
<summary>Hint 2</summary>

Disjoint edge sets generate independent sigma-algebras in the independent-edge model, even if vertices overlap.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes in $G(n,p)$, because they depend on disjoint collections of independent edge variables.

</details>

### 12. Second-moment lower bound

**Exercise 18.12**

<a id="probabilistic-method-and-random-structures-ex-12"></a>

For $X\ge0$ with $0<\mathbb{E}[X^2]<\infty$, derive $\mathbb{P}(X>0)\ge \mathbb{E}[X]^{2}/\mathbb{E}[X^{2}]$.

<details>
<summary>Hint 1</summary>

Write $X=X\mathbf1_{\{X>0\}}$.

</details>

<details>
<summary>Hint 2</summary>

Apply Cauchy–Schwarz to the two factors and divide by the positive second moment.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\mathbb{E}[X]=\mathbb{E}[X\mathbf{1}_{X>0}]\le \sqrt{\mathbb{E}[X^{2}]\mathbb{P}(X>0)}$ by Cauchy–Schwarz; square and rearrange.

</details>

### 13. Concentration criterion

**Exercise 18.13**

<a id="probabilistic-method-and-random-structures-ex-13"></a>

If $\mathbb{E}[X_n]\ne0$ and $\operatorname{Var}(X_{n})=o(\mathbb{E}[X_{n}]^{2})$, show $X_{n}/\mathbb{E}[X_{n}]\to 1$ in probability.

<details>
<summary>Hint 1</summary>

Apply Chebyshev to the deviation from the nonzero mean.

</details>

<details>
<summary>Hint 2</summary>

The relative-error event is $|X_n-\mathbb EX_n|\ge\varepsilon|\mathbb EX_n|$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Chebyshev gives probability of relative error at least $\varepsilon$ bounded by $\operatorname{Var}/(\varepsilon^{2}\mathbb{E}[X]^{2})\to 0$.

</details>

### 14. Local-lemma check

**Exercise 18.14**

<a id="probabilistic-method-and-random-structures-ex-14"></a>

If $p=0.01$, $d=20$, does the symmetric criterion hold?

<details>
<summary>Hint 1</summary>

Insert the given probability and degree into $ep(d+1)$.

</details>

<details>
<summary>Hint 2</summary>

The numerical product is approximately $e\cdot0.21$, so compare it with one.

</details>

<details>
<summary>Solution</summary>

**Solution.** $ep(d+1)\approx 2.718\cdot 0.21\approx 0.571<1$, so yes.

</details>

### 15. Existence versus algorithm

**Exercise 18.15**

<a id="probabilistic-method-and-random-structures-ex-15"></a>

Why does positive probability not supply an efficient construction?

<details>
<summary>Hint 1</summary>

A nonempty set need not be easy to find.

</details>

<details>
<summary>Hint 2</summary>

Consider how many independent samples might be required when the success probability is extremely small.

</details>

<details>
<summary>Solution</summary>

**Solution.** It proves at least one outcome exists but may give exponentially small success probability and no way to locate it without exhaustive search. Algorithmic claims need a procedure and complexity analysis.

</details>


## 8. Investigation: graphs with large girth and chromatic number

Show by alteration that for fixed $g,k$ there exists a graph with girth greater than $g$ and chromatic number greater than $k$.

**Worked solution.** Take $G(n,p)$ with $p=n^{-1+1/(2g)}$. For each cycle length $3\le ℓ\le g$, the expected number is at most $n^ℓp^ℓ/(2ℓ)$, whose largest order is $n^{1/2}$. Thus the expected total number $C$ of short cycles is $O(n^{1/2})$. Markov's inequality gives $\mathbb{P}(C>n^{2/3})=O(n^{-1/6})$, so with probability tending to one there are at most $n^{2/3}$ short cycles.

An independent set of size $m=\left\lceil n/(2k) \right\rceil$ has probability at most $(1-p)^{\binom{m}{2}}\le \exp(-pm(m-1)/2)$. A union bound over at most $2^{n}$ subsets shows the probability of any such independent set tends to zero because $pm^{2}$ has order $n^{1+1/(2g)}$, dominating $n$. Choose an outcome with few short cycles and no independent set of size $m$; both conditions have positive joint probability for large $n$ by combining their high-probability bounds.

Delete one vertex from each short cycle. At most $n^{2/3}=o(n)$ vertices are removed, leaving a graph $H$ with $\lvert V(H)\rvert >n/2$ for large $n$, and girth now exceeds $g$. Deletion cannot increase the independence number, so $\alpha(H)<m=\left\lceil n/(2k) \right\rceil$. Because $\alpha(H)$ is an integer, this implies $\alpha(H)<n/(2k)$ whether or not $n/(2k)$ is an integer. Therefore

$\chi(H)\ge \lvert V(H)\rvert /\alpha(H)>k$.

This proof establishes existence; it does not claim an efficient deterministic construction.

## Sources

The exposition, finite calculations, and proofs above are original. Yufei Zhao's author course page for [*Probabilistic Methods in Combinatorics*](https://yufeizhao.com/pm/) and the [MIT course lecture notes](https://ocw.mit.edu/courses/18-226-probabilistic-methods-in-combinatorics-fall-2022/lists/lecture-notes/) provide primary teaching sources for the first-moment, alteration, second-moment, and local-lemma methods. The asymmetric local-lemma argument is proved here so its joint-independence hypothesis and positive denominators remain explicit.


## 9. Summary and forward route

First moments prove existence when expected defects are below one or repairable. Second moments show nonzero counts when overlaps are controlled. The local lemma handles sparse dependency, and random graphs expose the difference between independent primitives and dependent structures. Existence, typicality, abundance, and efficient construction remain distinct conclusions.

The next chapter connects random samples to statistical targets and procedures.
