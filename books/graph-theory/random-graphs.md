
# Random Graphs

## A distribution on graphs

A random graph is not a graph with unspecified edges. It is a probability distribution on a precisely stated set of graphs. Once an outcome is chosen, it is an ordinary deterministic graph. Probability describes how outcomes are selected and how frequently a property appears under that selection rule.

The model studied here decides independently whether each possible edge is present. That simple rule makes some quantities easy to calculate, but it does not make every graph property independent of every other property. Two triangles can share an edge. Two isolation events both require the edge between their vertices to be absent. Understanding those dependencies is the main step between calculating an expectation and proving that a property is likely.

The [Ramsey chapter](ramsey-graphs.md) used random constructions to prove existence. Here we ask what usually happens as the number of vertices grows. Preparation includes finite probability, binomial coefficients, elementary graph connectivity and the first-moment idea in the [Discrete Mathematics probabilistic-methods chapter](../discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods.md). All graphs are finite, simple, undirected and labelled. We prove elementary moment bounds, triangle appearance and a fixed-factor connectivity transition; a finer critical-window result is explicitly cited rather than derived from those elementary bounds.

## The independent-edge model and asymptotic language

**Definition 14.1 ($G(n,p)$).** For an integer $n\ge1$ and $p\in[0,1]$, choose a graph on vertex set $[n]=\{1,\ldots,n\}$ by including each of the $\binom n2$ possible edges with probability $p$, mutually independently.

For $0<p<1$, a particular graph $H$ with $m$ edges has probability
$$
\Pr(G(n,p)=H)=p^m(1-p)^{\binom n2-m}.
$$
Every present edge contributes a factor $p$, every absent edge a factor $1-p$, and mutual independence permits multiplication. At $p=0$ the graph is certainly empty, and at $p=1$ it is certainly complete. At $p=1/2$ all labelled graphs are equally likely. At another value of $p$, graphs with different edge counts generally have different probabilities.

The number of edges in $G(n,p)$ is random. This differs from the model $G(n,m)$, which chooses uniformly among labelled graphs with exactly $m$ edges. For $0<p<1$, conditioning $G(n,p)$ on having $m$ edges gives $G(n,m)$: all such graphs have the same displayed probability. Without that conditioning, the two models must not be silently interchanged.

A sequence of properties holds with high probability, abbreviated w.h.p., when its probability tends to one as $n\to\infty$. Usually $p=p_n$ also depends on $n$; that dependence is part of the assertion. We write $a_n=o(1)$ when $a_n\to0$, and $a_n\sim b_n$ when $a_n/b_n\to1$ with $b_n\ne0$ eventually. Every limit in this chapter is as $n\to\infty$ unless another limit is stated. The notation $\ln$ means the natural logarithm.

Probability tending to one is not certainty at any finite size. For $n\ge2$ and $0<p<1$, the empty graph has positive probability and is disconnected, while the complete graph has positive probability and is connected. A theorem saying connectivity holds w.h.p. controls the vanishing total probability of failures in a sequence; it does not remove every failure from each finite probability space.

## Expectations, Markov and variance

For a finite random variable $X$, define $\mathbb E X=\sum_\omega X(\omega)\Pr(\omega)$. An event indicator $I_A$ equals one on the event and zero elsewhere, so $\mathbb E I_A=\Pr(A)$. Expanding the finite sums proves linearity:
$$
\mathbb E\left(\sum_i X_i\right)=\sum_i\mathbb E X_i.
$$
Independence is unnecessary for this identity. It becomes relevant when replacing an expectation of a product by a product of expectations.

**Theorem 14.2 (Markov's inequality and the first moment).** If $X\ge0$ and $t>0$, then
$$
\Pr(X\ge t)\le\frac{\mathbb E X}{t}.
$$
In particular, if $X$ is a nonnegative integer count, $\Pr(X>0)\le\mathbb E X$.

*Proof.* Pointwise, $X\ge t\mathbf1_{\{X\ge t\}}$. Taking expectations and dividing by positive $t$ gives the first inequality. For an integer count, $X>0$ is equivalent to $X\ge1$, giving the second. ∎

A small expected number of obstructions therefore implies that obstructions are unlikely. A large expectation does not imply that the count is usually positive: a rare outcome can carry a very large count. Variance measures whether the mass of the distribution is sufficiently close to its mean to rule out that possibility.

**Theorem 14.3 (Variance and Chebyshev's inequality).** For a finite random variable with mean $\mu$, let
$$
\operatorname{Var}X=\mathbb E[(X-\mu)^2]
=\mathbb E[X^2]-\mu^2.
$$
For $t>0$,
$$
\Pr(|X-\mu|\ge t)\le\frac{\operatorname{Var}X}{t^2}.
$$
If $X\ge0$ and $\mu>0$, then
$$
\Pr(X=0)\le\frac{\operatorname{Var}X}{\mu^2}.
$$

*Proof.* Expanding the square and using $\mathbb E X=\mu$ gives the variance identity. Apply Markov's inequality to the nonnegative variable $(X-\mu)^2$ with threshold $t^2$. For the last inequality, the event $X=0$ implies $|X-\mu|\ge\mu$. ∎

For a sum of indicators, expansion also gives
$$
\operatorname{Var}\left(\sum_i I_i\right)
=\sum_i\operatorname{Var}I_i
+2\sum_{i<j}\left(\mathbb E[I_iI_j]-\mathbb E I_i\,\mathbb E I_j\right).
$$
The terms in parentheses are covariances. If the indicators are independent, those terms vanish. If they are dependent, they must be calculated or bounded; discarding them without justification can reverse the conclusion of a second-moment argument.

## Counting edges and triangles

**Proposition 14.4 (The edge count).** Let $M$ count edges of $G(n,p)$ and put $N=\binom n2$. Then
$$
\mathbb E M=Np,\qquad \operatorname{Var}M=Np(1-p).
$$

*Proof.* Write $M=\sum_e I_e$ over possible edges. Each indicator has mean $p$ and variance $p-p^2=p(1-p)$. Distinct edge indicators are independent by the model, so all covariance terms vanish. Summing proves both formulas. ∎

**Example 14.5 (A finite concentration calculation).** In $G(10,1/3)$ there are $45$ possible edges. The edge count has mean $45/3=15$ and variance $45(1/3)(2/3)=10$. Chebyshev gives
$$
\Pr(|M-15|\ge6)\le\frac{10}{36}=\frac5{18}.
$$
Thus with probability at least $13/18$, the integer edge count lies between $10$ and $20$ inclusive. This is a rigorous lower bound on that probability, not its exact value. The expectation is a distributional average; it does not say every sampled graph has $15$ edges.

These calculations already identify the scale where the first edge appears. If $n^2p_n\to0$, then $\mathbb E M\to0$, so Markov gives $\Pr(M>0)\to0$. If $n^2p_n\to\infty$, then $\mathbb E M\to\infty$, and
$$
\Pr(M=0)\le\frac{\operatorname{Var}M}{(\mathbb E M)^2}
=\frac{1-p_n}{\mathbb E M}\to0.
$$
The comparison describes two asymptotic regimes around the scale $n^{-2}$. It does not determine the limiting probability at $p_n=c/n^2$ for a fixed positive $c$.

**Proposition 14.6 (Triangle mean and variance).** Let $T$ count triangles in $G(n,p)$, with $n\ge3$. Then
$$
\mathbb E T=\binom n3p^3
$$
and
$$
\operatorname{Var}T
=\binom n3p^3(1-p^3)
+2\binom n2\binom{n-2}{2}(p^5-p^6).
$$

*Proof.* A specified triple is a triangle precisely when its three edges are present, so its indicator has mean $p^3$. Linearity gives the mean. For variance, each individual triangle indicator contributes $p^3(1-p^3)$.

Two distinct triangles with no shared edge depend on disjoint sets of edge variables and are independent, even if they share one vertex. If two triangles share one edge, their union has five distinct edges; the joint probability is $p^5$, while the product of their marginal probabilities is $p^6$. Their covariance is therefore $p^5-p^6$.

Choose the common edge in $\binom n2$ ways and the two remaining distinct vertices in $\binom{n-2}{2}$ unordered ways. This counts every unordered pair of distinct triangles sharing an edge exactly once. The covariance formula has a factor two for unordered pairs, yielding the result. ∎

**Corollary 14.7 (Triangle appearance scale).** If $np_n\to0$, then $G(n,p_n)$ is triangle-free w.h.p. If $np_n\to\infty$, then it contains a triangle w.h.p.

*Proof.* In the first regime, $\mathbb E T\le n^3p_n^3/6\to0$, and Markov applies. In the second regime, $\mu=\binom n3p_n^3\to\infty$. For sufficiently large $n$, $p_n>0$, and the variance formula implies
$$
\frac{\operatorname{Var}T}{\mu^2}
\le\frac1\mu+
\frac{18(n-3)}{n(n-1)(n-2)p_n}
\le\frac1\mu+\frac{18}{n(n-1)p_n}.
$$
Both terms tend to zero: the second denominator grows because $n(n-1)p_n=(n-1)(np_n)\to\infty$. Chebyshev now gives $\Pr(T=0)\to0$. ∎

The two directions use different information. A vanishing expectation rules out triangles directly. A diverging expectation requires the variance calculation to show that triangles are not confined to rare outcomes. This pattern recurs for more complicated subgraphs, although their overlapping copies can require more involved dependency counts.

## Isolated vertices and shared absences

An isolated vertex has degree zero. Let $X$ count isolated vertices and let $I_v$ indicate that vertex $v$ is isolated. For $n\ge2$, the event requires all $n-1$ incident edges to be absent.

**Proposition 14.8 (Moments of the isolated-vertex count).** For $n\ge2$ and $0\le p<1$, put $q=(1-p)^{n-1}$ and $\mu=nq$. Then
$$
\mathbb E X=\mu
$$
and
$$
\mathbb E[X^2]=\mu+n(n-1)(1-p)^{2n-3}.
$$
Consequently,
$$
\frac{\operatorname{Var}X}{\mu^2}
\le\frac1\mu+\frac{p}{1-p}.
$$

*Proof.* Each $I_v$ has mean $q$, so linearity gives $\mu$. For distinct $u,v$, simultaneous isolation requires absence of every edge incident with either vertex. There are $(n-1)+(n-1)-1=2n-3$ distinct edges, since $uv$ occurs in both lists. Thus
$$
\mathbb E[I_uI_v]=(1-p)^{2n-3}.
$$
Expanding $X^2$ gives one diagonal contribution $\mu$ and $n(n-1)$ ordered off-diagonal contributions, proving the second-moment formula. Dividing by $\mu^2=n^2(1-p)^{2n-2}$ and subtracting one yields
$$
\frac{\operatorname{Var}X}{\mu^2}
=\frac1\mu+\frac{n-1}{n(1-p)}-1
\le\frac1\mu+\frac{p}{1-p}.
$$
The division is allowed because $p<1$ makes $\mu>0$. ∎

For $0<p<1$, two distinct isolation indicators are positively correlated: the joint probability exceeds $q^2$ by $p(1-p)^{2n-3}$. Independent edge decisions therefore produce dependent isolation events. The missing edge $uv$ helps both vertices be isolated simultaneously.

**Example 14.9 (A small expected obstruction count).** In $G(6,1/2)$, a vertex is isolated with probability $1/32$, so $\mu=6/32=3/16$. Markov gives
$$
\Pr(X=0)\ge1-\frac3{16}=\frac{13}{16}.
$$
For a specified pair of vertices, joint isolation has probability $1/512$, not $(1/32)^2=1/1024$. The second-moment formula gives
$$
\mathbb E[X^2]=\frac3{16}+\frac{30}{512}=\frac{63}{256},
\qquad
\operatorname{Var}X=\frac{63}{256}-\frac9{256}=\frac{27}{128}.
$$

The no-isolates bound is useful, but it does not prove connectivity with that probability. Two disjoint triangles form a six-vertex graph with no isolated vertices and no path between its components. That particular graph has positive probability in this model. Absence of a local obstruction is necessary for connectivity, not sufficient in every outcome.

## The logarithmic scale for isolation

**Lemma 14.10 (A logarithmic estimate).** For $0\le p<1$,
$$
-\frac{p}{1-p}\le\ln(1-p)\le-p.
$$
If $p_n\to0$ and $np_n^2\to0$, then
$$
(1-p_n)^{n-1}=\exp(-(n-1)p_n+o(1)).
$$

*Proof.* The identity $\ln(1-p)=-\int_0^p(1-t)^{-1}\,dt$ and the bounds $1\le(1-t)^{-1}\le(1-p)^{-1}$ give the two inequalities. Their difference shows
$$
\left|\ln(1-p)+p\right|\le\frac{p^2}{1-p}.
$$
Multiplying by $n-1$, the error tends to zero under the stated hypotheses. Exponentiating proves the final estimate. ∎

**Theorem 14.11 (Isolation above and below a fixed logarithmic factor).** Fix a constant $c>0$ and let $p_n=c\ln n/n$ for all sufficiently large $n$. If $c>1$, there are no isolated vertices w.h.p. If $0<c<1$, there is an isolated vertex w.h.p., and therefore the graph is disconnected w.h.p.

*Proof.* Here $p_n\to0$ and $np_n^2=c^2(\ln n)^2/n\to0$. The logarithmic estimate gives
$$
\mu=n(1-p_n)^{n-1}
=\exp((1-c)\ln n+o(1))
=n^{1-c}(1+o(1)).
$$
If $c>1$, then $\mu\to0$, and Markov makes the probability of any isolated vertex tend to zero. If $c<1$, then $\mu\to\infty$. Proposition 14.8 gives
$$
\frac{\operatorname{Var}X}{\mu^2}
\le\frac1\mu+\frac{p_n}{1-p_n}\to0,
$$
so Chebyshev implies $\Pr(X=0)\to0$. An isolated vertex disconnects any graph with at least two vertices, completing the lower-side connectivity conclusion. ∎

The theorem concerns a constant $c$ independent of $n$. Substituting a varying expression for $c$ requires checking the proof again or using another theorem. In particular, the case $c=1$ is not settled by this statement: its expected isolated-vertex count tends to one, so neither displayed limiting argument proves that isolation is almost certain or almost impossible.

## Connectivity: controlling every possible separated set

**Proposition 14.12 (A finite cut bound).** For $n\ge2$,
$$
\Pr(G(n,p)\text{ is disconnected})
\le
\sum_{k=1}^{\lfloor n/2\rfloor}
\binom nk(1-p)^{k(n-k)}.
$$

*Proof.* A disconnected graph has a connected component containing between one and $\lfloor n/2\rfloor$ vertices. For its vertex set $S$, every edge between $S$ and its complement is absent. For a fixed set of size $k$, these are $k(n-k)$ distinct edge decisions, so their joint absence has probability $(1-p)^{k(n-k)}$.

Take the union over all such sets and apply the union bound. That bound follows pointwise from $\mathbf1_{\cup A_i}\le\sum_i\mathbf1_{A_i}$ and taking expectations. It permits overlapping events. Requiring no internal connectivity of $S$ only enlarges the event, so the displayed estimate remains valid. ∎

**Theorem 14.13 (Fixed-factor connectivity transition).** Fix $c>0$ and set $p_n=c\ln n/n$ eventually. If $c<1$, the graph is disconnected w.h.p. If $c>1$, it is connected w.h.p.

*Proof.* The lower side is Theorem 14.11. For $c>1$, choose
$$
\varepsilon=\frac{c-1}{2c},\qquad
\delta=c(1-\varepsilon)-1=\frac{c-1}{2}>0.
$$
We have $0<\varepsilon<1/2$. Split the cut bound into sets with $k\le\varepsilon n$ and those with $\varepsilon n<k\le n/2$. The inequality $1-p\le e^{-p}$ follows from Lemma 14.10.

For a small set, $\binom nk\le n^k$ and $n-k\ge(1-\varepsilon)n$. Hence its total size-$k$ contribution is at most
$$
n^k\exp(-p_nk(n-k))
\le n^k\exp(-c(1-\varepsilon)k\ln n)
=n^{-\delta k}.
$$
Summing over all positive $k$ only enlarges the bound, giving
$$
\sum_{1\le k\le\varepsilon n}\binom nk(1-p_n)^{k(n-k)}
\le\frac{n^{-\delta}}{1-n^{-\delta}}\to0.
$$

For a large set in the other range, $k(n-k)\ge\varepsilon n^2/2$. There are at most $2^n$ subsets altogether, so the entire large-set contribution is at most
$$
2^n\exp(-p_n\varepsilon n^2/2)
=\exp\left(n\ln2-\frac{c\varepsilon}{2}n\ln n\right)\to0.
$$
Both parts tend to zero, proving the upper side. Integer endpoints cause no problem: each permitted integer $k$ belongs to exactly one of the two stated ranges. ∎

This proof addresses all separated sets, not just isolated vertices. The two scales in the argument have different roles: small sets are few enough at each size for the factor $n^{-\delta k}$ to win, while a large separated set would require so many absent edges that even counting all $2^n$ subsets is harmless. Using only $n-k\ge n/2$ for every set would lose the sharp constant one on this fixed-factor scale.

**Example 14.14 (A numerical connectivity guarantee).** In $G(8,1/2)$, the cut bound has four terms:
 
| Set size $k$ | Number of sets | Probability of an empty crossing cut | Contribution |
| --- | ---: | ---: | ---: |
| $1$ | $8$ | $2^{-7}$ | $2048/32768$ |
| $2$ | $28$ | $2^{-12}$ | $224/32768$ |
| $3$ | $56$ | $2^{-15}$ | $56/32768$ |
| $4$ | $70$ | $2^{-16}$ | $35/32768$ |

Their sum is $2363/32768$, so
$$
\Pr(G(8,1/2)\text{ is connected})\ge\frac{30405}{32768}.
$$
This exceeds $0.92$ and is a finite-size statement, independent of asymptotic terminology. Some four-versus-four cuts are counted twice, and many disconnected graphs occur in several events; that overcounting is allowed in an upper bound.

The isolated-vertex calculation alone gives probability at least $1-8/128=15/16$ of having no isolated vertex. It cannot replace the cut calculation for connectivity. Indeed, $15/16$ is a bound for a different event, and the two events are not identical.

## A cited finer result and the limits of the model

**Cited extension 14.15 (The connectivity critical window).** For fixed $t\in\mathbb R$ and $p_n=(\ln n+t)/n$ eventually,
$$
\Pr(G(n,p_n)\text{ is connected})\longrightarrow
\exp(-e^{-t}).
$$
This stronger result is cited, not proved here. Frieze and Karoński's *Introduction to Random Graphs*, §4.1, derives this $G(n,p)$ limit in the proof of its connectivity theorem. That argument controls nontrivial small components and the limiting distribution of isolated vertices. Neither Markov's inequality nor the preceding fixed-factor theorem alone establishes this limiting formula.

The distinction matters at $t=0$: the cited result gives limit $e^{-1}$, rather than zero or one. A threshold describes a change across a scale; it does not mean every sequence exactly on that scale has a probability tending to one. We have proved the coarser fixed-factor transition in full and marked the extra input required for the finer statement.

Finally, independence belongs to this mathematical model. Actual social, communication or transport networks may have correlated edges, geometry, varying probabilities or constraints on degrees. Calculations from $G(n,p)$ describe those systems only when the modelling assumptions are justified. Matching an expected edge count alone does not establish that two graph distributions have the same triangle or connectivity probabilities.

## Exercises

### Exercise 14.1
<a id="random-graphs-ex-1"></a>

In $G(4,1/3)$, calculate the probability of one specified graph with exactly two edges, and the probability that the sampled graph has exactly two edges.

<details>
<summary>Hint 1</summary>

There are six possible edges. A specified two-edge graph requires two presences and four absences.

</details>
<details>
<summary>Hint 2</summary>

For the second event, count the different choices of the two present edges.

</details>
<details>
<summary>Solution</summary>

The specified graph has probability $(1/3)^2(2/3)^4=16/729$. There are $\binom62=15$ distinct graphs with two edges, and their outcome events are disjoint. Thus the probability of exactly two edges is $15\cdot16/729=80/243$. A specified graph and an edge-count event are different events even though all graphs within that event have equal probability.

</details>

### Exercise 14.2
<a id="random-graphs-ex-2"></a>

Find the mean and variance of the edge count in $G(12,1/4)$, and bound the probability that its distance from the mean is at least six.

<details>
<summary>Hint 1</summary>

There are $\binom{12}{2}=66$ possible edge indicators.

</details>
<details>
<summary>Hint 2</summary>

Use variance $66(1/4)(3/4)$ and Chebyshev with $t=6$.

</details>
<details>
<summary>Solution</summary>

The mean is $66/4=33/2$, and the variance is $198/16=99/8$. Chebyshev bounds the requested probability by $(99/8)/36=11/32$. The mean need not be an integer even though every realised edge count is an integer. It describes the average under the distribution, not a compulsory outcome. The probability estimate is a bound, not the exact binomial tail.

</details>

### Exercise 14.3
<a id="random-graphs-ex-3"></a>

For the triangle count in $G(5,1/2)$, calculate the mean and variance. Does the displayed Chebyshev zero-count bound give useful information here?

<details>
<summary>Hint 1</summary>

There are ten candidate triangles and thirty unordered pairs of triangles sharing an edge.

</details>
<details>
<summary>Hint 2</summary>

Each triangle indicator has variance $7/64$, and each shared-edge covariance is $1/64$.

</details>
<details>
<summary>Solution</summary>

The mean is $10/8=5/4$. The variance is $10(7/64)+2\cdot30(1/64)=130/64=65/32$. Consequently $\operatorname{Var}T/(\mathbb E T)^2=(65/32)/(25/16)=13/10$. A probability upper bound above one gives no useful improvement on the trivial bound one. The calculation remains correct; the method is simply too weak at this small parameter choice.

</details>

### Exercise 14.4
<a id="random-graphs-ex-4"></a>

For $0<p<1$, compare the triangle events on triples $\{1,2,3\}$ and $\{1,2,4\}$. Then compare the events on $\{1,2,3\}$ and $\{1,4,5\}$. Explain precisely when independence holds.

<details>
<summary>Hint 1</summary>

Write down the required edge sets rather than merely counting shared vertices.

</details>
<details>
<summary>Hint 2</summary>

The first pair requires five distinct edges jointly; the second requires six disjoint edge decisions.

</details>
<details>
<summary>Solution</summary>

Each event has probability $p^3$. The first pair shares edge $12$, so its joint probability is $p^5$, exceeding $p^6$ by $p^5(1-p)>0$. It is dependent. The second pair shares only vertex $1$, with no shared edge variable. Their joint probability is $p^6$, and they are independent because they depend on disjoint collections of mutually independent edge decisions. Shared vertices alone do not determine dependence.

</details>

### Exercise 14.5
<a id="random-graphs-ex-5"></a>

For the isolated-vertex count in $G(4,1/2)$, compute its mean and variance, and obtain a lower bound for the probability of no isolated vertices. Give a disconnected graph witnessing why that event does not imply connectivity.

<details>
<summary>Hint 1</summary>

A vertex requires three absent edges, while a pair requires five distinct absent edges.

</details>
<details>
<summary>Hint 2</summary>

Use $\mathbb E X^2=\mathbb E X+12/32$, then apply Markov for the no-isolates bound.

</details>
<details>
<summary>Solution</summary>

The mean is $4/8=1/2$. The second moment is $1/2+12/32=7/8$, giving variance $7/8-1/4=5/8$. Markov gives $\Pr(X=0)\ge1-1/2=1/2$. Two disjoint edges form a disconnected graph on four vertices with no isolated vertex. That specified graph has positive probability $2^{-6}$ in the model, so the distinction is an actual positive-probability possibility.

</details>

### Exercise 14.6
<a id="random-graphs-ex-6"></a>

Let $Y_n=n^2$ with probability $1/n$ and $Y_n=0$ otherwise. Calculate its expectation and the probability it is positive. Explain why this refutes the inference that a diverging expected count alone implies existence w.h.p.

<details>
<summary>Hint 1</summary>

Multiply each possible value by its probability to find the expectation.

</details>
<details>
<summary>Hint 2</summary>

The nonzero value grows faster than the probability of seeing it shrinks.

</details>
<details>
<summary>Solution</summary>

We have $\mathbb E Y_n=n^2/n=n\to\infty$, but $\Pr(Y_n>0)=1/n\to0$. Thus the mean diverges while positive outcomes become unlikely. Rare large values dominate the average. For a graph count with diverging expectation, additional control such as a vanishing relative variance is needed before applying the second-moment conclusion. Positive expectation proves some positive outcome exists; it does not make that outcome typical.

</details>

### Exercise 14.7
<a id="random-graphs-ex-7"></a>

Set $p_n=n^{-6/5}$. Determine, using the proved results, whether edges and triangles appear w.h.p.

<details>
<summary>Hint 1</summary>

The relevant comparison for the first edge is $n^2p_n$.

</details>
<details>
<summary>Hint 2</summary>

For triangles, compare $np_n$ with zero or infinity.

</details>
<details>
<summary>Solution</summary>

Here $n^2p_n=n^{4/5}\to\infty$, so the graph has an edge w.h.p. But $np_n=n^{-1/5}\to0$, so it is triangle-free w.h.p. Both conclusions can hold together: many graphs have edges and no triangle. By a union bound on the two failure events, the graph simultaneously has an edge and is triangle-free w.h.p. The different structures have different appearance scales.

</details>

### Exercise 14.8
<a id="random-graphs-ex-8"></a>

Compare $p_n=(\ln n)/(2n)$ and $p_n=3\ln n/(2n)$ for connectivity. For the second sequence, specify $\varepsilon$ and $\delta$ used in the proof.

<details>
<summary>Hint 1</summary>

The fixed constants $c$ are $1/2$ and $3/2$.

</details>
<details>
<summary>Hint 2</summary>

Use $\varepsilon=(c-1)/(2c)$ and $\delta=(c-1)/2$ when $c>1$.

</details>
<details>
<summary>Solution</summary>

For the first sequence, the expected number of isolated vertices is asymptotic to $n^{1/2}$ and the relative variance tends to zero, so the graph is disconnected w.h.p. For the second, the connectivity theorem applies with $c=3/2>1$, giving connectivity w.h.p. Its proof takes $\varepsilon=1/6$ and $\delta=1/4$. These are asymptotic claims, not assertions that every graph at any selected finite size has the stated property.

</details>

### Exercise 14.9
<a id="random-graphs-ex-9"></a>

Use the cut bound to give a finite lower bound for the connectivity probability in $G(6,1/2)$.

<details>
<summary>Hint 1</summary>

The possible small side sizes are one, two and three.

</details>
<details>
<summary>Hint 2</summary>

Their contributions are $6/2^5$, $15/2^8$ and $20/2^9$.

</details>
<details>
<summary>Solution</summary>

The disconnected probability is at most $3/16+15/256+5/128=(48+15+10)/256=73/256$. Therefore the connectivity probability is at least $183/256$. The union bound may count one failure graph several times, so this is not an exact probability. It nevertheless gives a valid finite guarantee by accounting for every possible component size up to half the vertices.

</details>

### Exercise 14.10
<a id="random-graphs-ex-10"></a>

For $p_n=(\ln n+\ln\ln n)/n$ at sufficiently large $n$, prove that there are no isolated vertices w.h.p. Does that calculation alone prove connectivity w.h.p.?

<details>
<summary>Hint 1</summary>

Check $p_n\to0$ and $np_n^2\to0$, then use the logarithmic estimate for the expected isolated-vertex count.

</details>
<details>
<summary>Hint 2</summary>

The expectation is asymptotic to $1/\ln n$. Separate the event estimated by Markov from the stronger connectivity event.

</details>
<details>
<summary>Solution</summary>

The hypotheses of the logarithmic estimate hold. Hence $\mathbb E X=n\exp(-(n-1)p_n+o(1))\sim n e^{-\ln n-\ln\ln n}=1/\ln n\to0$. Markov gives absence of isolated vertices w.h.p. This calculation alone does not exclude components of size two or larger, so it does not establish connectivity. A further argument controlling such components is needed. The fixed-factor theorem also cannot simply be invoked with a constant $c>1$, because here the factor $1+\ln\ln n/\ln n$ varies and tends to one.

</details>

## Sources

The exposition, worked numerical calculations, coordinate-free counting arguments and exercises are newly written. The model and complementary treatments of moments, degrees and connectivity can be found in Alan Frieze and Michał Karoński, [*Introduction to Random Graphs*](https://www.math.cmu.edu/users/math/af1p/Teaching/RandomGraphs/Undergraduate/BOOK.pdf), author-hosted text dated 9 September 2024, Chapters 1, 3 and 4, consulted 13 November 2026. The cited critical-window limit is the $G(n,p)$ conclusion established in §4.1 in the proof of Theorem 4.1. The local [Discrete Mathematics introduction](../discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods.md) is retained unchanged as a preparation route; none of its source material is removed.

## Summary

The independent-edge model specifies a probability space, not merely an expected density. Indicator sums give expectations without assuming independence between whole configurations. Markov turns a small expected obstruction count into a small failure probability; variance and Chebyshev justify positive occurrence when the mean alone is insufficient.

Edges and triangles have different appearance scales. Isolation events are dependent, but their explicit second moment proves isolation below a fixed logarithmic factor. A separate cut argument proves connectivity above that factor, accounting for every possible separated set. The finer critical-window formula requires additional theory and is identified as cited. Every high-probability conclusion is a statement about a specified sequence as $n$ grows, rather than certainty for an individual finite graph.
