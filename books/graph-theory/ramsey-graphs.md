
# Ramsey Theory for Graphs

## Forcing order without assuming a pattern

An extremal graph problem often forbids one configuration and asks how many edges remain possible. Ramsey theory asks a different question: if every pair of vertices receives one of two colours, how large must the vertex set be before one colour necessarily contains a prescribed complete graph? We impose no regularity on the colouring. The conclusion is that sufficient size alone forces a homogeneous subset.

The equivalent graph formulation is equally striking. Every sufficiently large graph contains either a large clique, whose vertices are all mutually adjacent, or a large independent set, whose vertices are all mutually nonadjacent. The statement allows the outcome to depend on the graph. It does not assert that all sufficiently large graphs contain a large clique: an edgeless graph would immediately disprove that claim.

This chapter proves finite Ramsey existence, an explicit recursive upper bound, the exact value $R(3,3)$, and probabilistic lower bounds. Preparation is finite graph language, induction, binomial coefficients and elementary finite probability. The [Discrete Mathematics introduction to probabilistic and extremal methods](../discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods.md) supplies an earlier route to the ideas; its material remains available. All graphs here are finite, simple and undirected. A copy of a graph means an ordinary subgraph unless the word induced is explicitly included.

## The number and its quantifiers

**Definition 13.1 (Two-colour Ramsey number).** For positive integers $s,t$, $R(s,t)$ is the least positive integer $N$ such that every red-blue colouring of the edges of $K_N$ contains a red $K_s$ or a blue $K_t$, provided such an integer exists.

A monochromatic $K_s$ is a vertex set of size $s$ whose $\binom{s}{2}$ pairs all receive the specified colour. A one-vertex complete graph has no edges, so its monochromatic condition is vacuous. With that convention, $R(1,t)=R(s,1)=1$. We will prove that every Ramsey number in the definition exists, rather than building finiteness into an unsupported assumption.

Translate a graph $G$ into a colouring by colouring its edges red and its nonedges blue. A red complete graph becomes a clique in $G$, while a blue complete graph becomes an independent set. Thus the definition is equivalent to saying that every $N$-vertex graph has a clique of size $s$ or an independent set of size $t$. The complement exchanges the two alternatives, proving $R(s,t)=R(t,s)$ whenever these numbers are defined.

The two sides of a Ramsey estimate have different logical forms. To prove $R(s,t)\le N$, we must handle every colouring of $K_N$. To prove $R(s,t)>N$, it is enough to exhibit one colouring with neither target. A successful example on $N$ vertices proves a lower bound, while an unsuccessful search through some colourings proves no universal upper bound.

Forcing is monotone in the host size: if every colouring on $N$ vertices contains a target, then every colouring on more vertices does too, by restricting to any $N$ vertices. Ramsey numbers are also nondecreasing in each target parameter. A colouring forced to contain a larger red complete graph or a fixed blue target is certainly forced to contain a smaller red complete graph or that blue target. These observations help check the directions of later inequalities.

**Example 13.2 (The boundary case $R(2,t)$).** For $t\ge2$, consider a colouring of $K_t$. If any red edge exists, it is a red $K_2$. If no red edge exists, every edge is blue and the whole graph is a blue $K_t$. Hence $R(2,t)\le t$.

Conversely, colour every edge of $K_{t-1}$ blue. There is no red edge and there are too few vertices for a blue $K_t$. Therefore $R(2,t)>t-1$, proving $R(2,t)=t$. Both a universal argument and an avoiding construction were needed for the equality.

## The recursive upper bound

**Theorem 13.3 (Finite Ramsey recurrence).** All two-colour Ramsey numbers are finite. For integers $s,t\ge2$,
$$
R(s,t)\le R(s-1,t)+R(s,t-1).
$$

*Proof.* Use strong induction on $s+t$, starting with the finite boundary values when one target has size one. Suppose $s,t\ge2$ and that the numbers with smaller parameter sum are finite. Set
$$
A=R(s-1,t),\qquad B=R(s,t-1),\qquad N=A+B.
$$
Take any colouring of $K_N$ and select a vertex $v$. Among its $N-1=A+B-1$ other vertices, let $X$ be the red neighbours and $Y$ the blue neighbours. Either $|X|\ge A$ or $|Y|\ge B$: if both inequalities failed, their total size would be at most $A+B-2$.

If $|X|\ge A$, apply the definition of $A$ within a set of $A$ vertices of $X$. A red $K_{s-1}$ joins with $v$ to make a red $K_s$, because every edge from $v$ to that set is red. A blue $K_t$ is already a required target. If $|Y|\ge B$, the corresponding argument gives either a red $K_s$ or a blue $K_{t-1}$ that joins with $v$ to make a blue $K_t$.

Thus every colouring of $K_N$ has a target. The set of positive integers with the forcing property is nonempty, so it has a least element. This proves both finiteness at the current induction step and the displayed recurrence. ∎

The extra vertex $v$ accounts for a common indexing error. Its neighbour sets have total size $N-1$, not $N$. To force one group to reach thresholds $A$ and $B$, the required neighbour total is $A+B-1$, giving host size $A+B$.

**Corollary 13.4 (Binomial upper bound).** For positive integers $s,t$,
$$
R(s,t)\le\binom{s+t-2}{s-1}.
$$
In particular, for $k\ge1$,
$$
R(k,k)\le\binom{2k-2}{k-1}\le4^{k-1}.
$$

*Proof.* Induct on $s+t$. If $s=1$ or $t=1$, the binomial coefficient equals $1$, matching the boundary value. Otherwise use Theorem 13.3 and the induction hypothesis:
$$
R(s,t)\le
\binom{s+t-3}{s-2}+\binom{s+t-3}{s-1}
=\binom{s+t-2}{s-1}.
$$
The equality is Pascal's identity. For the diagonal estimate, the indicated coefficient is one term in the sum of all coefficients of $(1+1)^{2k-2}$, whose value is $2^{2k-2}=4^{k-1}$. ∎

This is an explicit elementary bound, not a claim about the best known estimates. It proves that the forcing problem terminates at a finite host size, while leaving considerable room between upper and lower bounds.

## A complete small case and a parity improvement

**Example 13.5 (Proving $R(3,3)=6$).** Colour $K_6$ red and blue, and choose a vertex $v$. At least three of its five incident edges share a colour. Suppose $va,vb,vc$ are red. If any of $ab,ac,bc$ is red, that edge and $v$ form a red triangle. If none is red, all three are blue, giving a blue triangle on $a,b,c$. If the majority colour at $v$ was blue, interchange the colour names. Hence $R(3,3)\le6$.

For the lower bound, label five vertices $0,1,2,3,4$ cyclically. Colour the five edges of the cycle $0,1,2,3,4,0$ red and every other edge blue. The red graph is a five-cycle, which has no triangle. The blue edges form the cycle $0,2,4,1,3,0$, also without a triangle. Thus $K_5$ has a colouring avoiding both targets, proving $R(3,3)>5$. The two bounds give equality.

The lower construction also explains why replacing the five-neighbour argument by a four-neighbour version would fail. Three equal-colour neighbours are not guaranteed at a vertex of $K_5$, and its avoiding cycle colouring makes the obstruction concrete.

**Example 13.6 (Going beyond the recurrence with degree parity).** The recurrence gives
$$
R(3,4)\le R(2,4)+R(3,3)=4+6=10.
$$
We can improve this upper bound to $9$. Suppose a graph on nine vertices has neither a triangle nor an independent set of size four. For any vertex $v$, its neighbourhood is independent, because an edge within the neighbourhood would make a triangle with $v$. Therefore $\deg(v)\le3$.

The nonneighbours of $v$ cannot contain an independent triple: together with $v$, that would give an independent set of four. They also cannot contain a triangle, since the whole graph is triangle-free. Because $R(3,3)=6$, there can be at most five nonneighbours. There are eight other vertices in total, so $\deg(v)\ge8-5=3$. Every vertex therefore has degree three.

But the degree sum would be $9\cdot3=27$, an odd number, contrary to the handshake lemma, which makes every degree sum twice the edge count. This contradiction proves $R(3,4)\le9$. We have not supplied an eight-vertex avoiding construction here, so this argument establishes an upper bound rather than an exact value.

## The probabilistic lower-bound method

A random construction can establish a deterministic lower bound without identifying a particular successful colouring. The probability space must be specified: independently colour each edge of $K_n$ red or blue, with probability $1/2$ for each colour. There are $2^{\binom n2}$ equally likely colourings.

For each $k$-vertex set $S$, let $I_S$ indicate that all edges within $S$ have one colour, and put $X=\sum_S I_S$. The variable $X$ counts monochromatic complete graphs. For $k\ge2$, the all-red and all-blue possibilities are disjoint, and edge independence gives
$$
\Pr(I_S=1)=2\left(\frac12\right)^{\binom k2}
=2^{1-\binom k2}.
$$
Linearity of expectation now gives
$$
\mathbb E X=\binom nk2^{1-\binom k2}.
$$
No independence between different $I_S$ is needed for this sum. Their events can overlap substantially.

**Theorem 13.7 (First-moment Ramsey lower bound).** Let $k\ge2$ and $n\ge1$ be integers. If
$$
\binom nk2^{1-\binom k2}<1,
$$
then
$$
R(k,k)>n.
$$
More precisely, the probability of an avoiding colouring is at least $1-\binom nk2^{1-\binom k2}$.

*Proof.* Since $X$ is a nonnegative integer, its indicator of being positive satisfies $\mathbf1_{\{X\ge1\}}\le X$. Taking expectations gives $\Pr(X\ge1)\le\mathbb E X$. Therefore $\Pr(X=0)\ge1-\mathbb E X>0$. A positive-probability event in this finite space contains at least one colouring. That colouring has no monochromatic $K_k$, proving the strict lower bound. If $n<k$, the binomial coefficient and $X$ are both zero, consistent with the same conclusion. ∎

**Example 13.8 (A numerical lower bound and the failure of a bound).** Take $k=5$ and $n=10$. Each chosen five-set is monochromatic with probability $2^{1-10}=1/512$. There are $\binom{10}{5}=252$ such sets, so
$$
\mathbb E X=\frac{252}{512}=\frac{63}{128}<1.
$$
Thus $R(5,5)>10$, and at least a fraction $65/128$ of these random colourings avoid monochromatic $K_5$.

For $n=11$, the same expectation is $462/512=231/256<1$, still proving avoidance exists. At $n=12$, it becomes $792/512=99/64>1$. The last value does not imply that every colouring contains a target. It says only that the particular sufficient condition has failed. An upper bound on a probability can exceed one and then convey no useful information.

## Explicit exponential estimates and rounding

A useful estimate should say exactly which integers are allowed. In this section $\ln$ is the natural logarithm, $\log_2$ is the logarithm to base two, and $e$ is the base of the natural exponential.

For integers $n\ge k\ge1$,
$$
\binom nk\le\frac{n^k}{k!}\le\left(\frac{en}{k}\right)^k.
$$
For completeness, $\ln(k!)=\sum_{j=1}^k\ln j\ge\int_1^k\ln x\,dx=k\ln k-k+1\ge k\ln k-k$. Exponentiating proves $k!\ge(k/e)^k$, which yields the second inequality. The first follows directly from the factorial formula.

**Corollary 13.9 (An explicit rounded lower bound).** For every integer $k\ge3$, let
$$
n_k=\left\lfloor\frac{k}{2e}\,2^{k/2}\right\rfloor.
$$
Then $R(k,k)>n_k$.

*Proof.* The integer $n_k$ is at least one when $k\ge3$. If $n_k<k$, avoidance is immediate from the number of vertices. Otherwise the preceding estimate and the floor inequality give
$$
\binom{n_k}{k}2^{1-\binom k2}
\le
\left(\frac{en_k}{k}\right)^k2^{1-k(k-1)/2}
\le
2^{k(k/2-1)}2^{1-k(k-1)/2}
=2^{1-k/2}<1.
$$
Apply Theorem 13.7. ∎

The floor is part of the statement, and the final strict inequality uses $k>2$. It would be incorrect to silently replace this integer conclusion by a stronger real inequality. Since Ramsey numbers are integers, the displayed bound also means $R(k,k)\ge n_k+1$, which is sometimes the most convenient form.

There is a complementary way to express the same random-colouring idea: fix the host size and bound the homogeneous subsets it needs to contain.

**Theorem 13.10 (A logarithmic homogeneous-set bound).** For every integer $n\ge2$, put
$$
k_n=\left\lceil2\log_2 n+2\right\rceil.
$$
A uniformly random red-blue colouring of $K_n$ has no monochromatic $K_{k_n}$ with probability at least $1-1/n$. In particular, an $n$-vertex graph exists whose clique number and independence number are both less than $k_n$.

*Proof.* If $k_n>n$, avoidance is automatic. Otherwise, set $L=\log_2 n$ and $k=k_n$. Using $\binom nk\le n^k$,
$$
\mathbb E X\le2^{1+kL-k(k-1)/2}.
$$
Since $k\ge2L+2$, we have $k-1\ge2L+1$, giving an exponent at most $1-k/2\le-L$. Thus $\mathbb E X\le2^{-L}=1/n$. The first-moment estimate and the graph-colouring correspondence finish the proof. ∎

**Example 13.11 (Checking a logarithmic statement at a definite size).** Let $n=256=2^8$. Then $k_n=\lceil18\rceil=18$. The proof bounds the expected number of monochromatic $18$-sets by
$$
256^{18}2^{1-\binom{18}{2}}
=2^{144}2^{-152}=2^{-8}=\frac1{256}.
$$
Therefore the avoiding probability is at least $255/256$, and some graph on $256$ vertices has neither an $18$-clique nor an independent $18$-set.

In the other direction, the universal upper bound $R(k,k)\le4^{k-1}$ guarantees that every graph on $256=4^4$ vertices has a clique or independent set of size $5$. These statements are compatible: the first forbids homogeneous sets of size $18$ in some graphs; the second forces sets of size $5$ in every graph. Neither determines the best possible homogeneous-set guarantee at this size.

## More colours and the scope of the conclusions

**Proposition 13.12 (Finitely many edge colours).** For every positive integer $q$ and $k$, there is a finite number $R_q(k)$ such that every $q$-colouring of a sufficiently large complete graph contains a monochromatic $K_k$.

*Proof.* For one colour, $k$ vertices suffice. Induct on the number of colours. Suppose a bound $B$ works for $q-1$ colours. Consider $R(k,B)$ vertices. Regard colour one as red and every other colour together as blue. There is either a colour-one $K_k$ or a complete graph on $B$ vertices using only the remaining colours. In the latter case, the induction hypothesis gives a monochromatic $K_k$ in one of those colours. Hence a finite bound exists for $q$ as well. ∎

For instance, $R_3(3)\le R(3,6)\le\binom72=21$. This is a derived upper bound, not an exact three-colour Ramsey value. Grouping colours helps with existence but often loses numerical precision.

For arbitrary finite target graphs $H_1,H_2$, a red $K_{|V(H_1)|}$ contains a red ordinary copy of $H_1$, and similarly for blue. Finite complete-graph Ramsey bounds therefore imply finite ordinary graph Ramsey bounds. They do not prove the analogous induced-copy statement: the extra edges inside a clique can prevent it from inducing a sparse target. The convention about subgraphs changes the problem.

Finally, a positive avoiding probability proves existence. Theorem 13.7 alone does not promise that repeated random sampling succeeds quickly, and it does not imply that avoidance is typical as a parameter grows. Theorem 13.10 does give a probability tending to one, because its explicit failure bound $1/n$ tends to zero with $n$. Keeping that limiting statement separate from a single positive probability is essential.

## Exercises

### Exercise 13.1
<a id="ramsey-graphs-ex-1"></a>

Prove $R(2,t)=t$ for every integer $t\ge2$, explaining the universal argument and the avoiding colouring separately.

<details>
<summary>Hint 1</summary>

If a colouring of $K_t$ has a red edge, the red target already exists.

</details>
<details>
<summary>Hint 2</summary>

For the lower bound, use an all-blue complete graph with one fewer vertex.

</details>
<details>
<summary>Solution</summary>

Any colouring on $t$ vertices either has a red edge or has every edge blue, in which case it contains a blue $K_t$. Thus $R(2,t)\le t$. An all-blue colouring on $t-1$ vertices has no red edge and too few vertices for a blue $K_t$, giving $R(2,t)>t-1$. Integrality gives equality. The argument also checks why both parts are needed: a forcing proof alone would provide only an upper bound.

</details>

### Exercise 13.2
<a id="ramsey-graphs-ex-2"></a>

Give explicit red and blue edge lists on vertices $0,1,2,3,4$ proving $R(3,3)>5$. Justify the absence of a triangle in each colour.

<details>
<summary>Hint 1</summary>

Use a red five-cycle and colour all remaining pairs blue.

</details>
<details>
<summary>Hint 2</summary>

The blue edges can also be arranged as one five-cycle, in a different cyclic order.

</details>
<details>
<summary>Solution</summary>

Take red edges $01,12,23,34,40$ and blue edges $02,24,41,13,30$. These lists partition all ten pairs. The red graph is the cycle $0,1,2,3,4,0$, and the blue graph the cycle $0,2,4,1,3,0$. In either cycle each vertex's two neighbours are nonadjacent, so no vertex can belong to a triangle. This one avoiding colouring suffices for the strict lower bound.

</details>

### Exercise 13.3
<a id="ramsey-graphs-ex-3"></a>

Using only the boundary cases, $R(3,3)=6$ and the recurrence, derive $R(3,4)\le10$, $R(4,4)\le20$ and $R(4,5)\le35$. State whether these calculations establish equality.

<details>
<summary>Hint 1</summary>

Use symmetry when exchanging the two target sizes.

</details>
<details>
<summary>Hint 2</summary>

For the last estimate, first obtain $R(3,5)\le R(2,5)+R(3,4)$.

</details>
<details>
<summary>Solution</summary>

The first estimate is $R(3,4)\le4+6=10$. Symmetry then gives $R(4,4)\le R(3,4)+R(4,3)\le20$. Next $R(3,5)\le5+10=15$, so $R(4,5)\le R(3,5)+R(4,4)\le15+20=35$. These are sufficient host sizes. They do not give avoiding colourings at one smaller size and therefore establish no equality. Better input bounds could improve the recurrence's output.

</details>

### Exercise 13.4
<a id="ramsey-graphs-ex-4"></a>

Explain why a monochromatic $K_4$ contains a monochromatic ordinary copy of the star $K_{1,3}$, but need not contain an induced copy of that star.

<details>
<summary>Hint 1</summary>

An ordinary subgraph may omit edges between its chosen vertices.

</details>
<details>
<summary>Hint 2</summary>

An induced subgraph must retain every edge of the ambient graph between those vertices.

</details>
<details>
<summary>Solution</summary>

Choose one of the four vertices as the star's centre and keep just its three edges to the others. This is an ordinary monochromatic star. But the subgraph induced on all four vertices is still $K_4$, whose three proposed leaves are mutually adjacent. It is not the star. Thus complete-graph Ramsey forcing directly supplies ordinary target graphs but does not establish induced-target forcing by the same reasoning.

</details>

### Exercise 13.5
<a id="ramsey-graphs-ex-5"></a>

For $k=4$, apply the first-moment bound at $n=6$ and $n=7$. Give a lower bound on the avoiding probability where the estimate is useful.

<details>
<summary>Hint 1</summary>

A chosen four-set is monochromatic with probability $2^{1-6}=1/32$.

</details>
<details>
<summary>Hint 2</summary>

The relevant binomial coefficients are $\binom64=15$ and $\binom74=35$.

</details>
<details>
<summary>Solution</summary>

At $n=6$, the expectation is $15/32$, so the avoiding probability is at least $17/32>0$, proving $R(4,4)>6$. At $n=7$, the expectation is $35/32>1$. The lower estimate $1-35/32$ is negative and supplies no useful probability bound beyond zero. It does not imply that avoiding colourings on seven vertices fail to exist. A sufficient condition becoming false is not the negation of its conclusion.

</details>

### Exercise 13.6
<a id="ramsey-graphs-ex-6"></a>

In a fair independent edge-colouring, let $A$ mean that vertices $\{1,2,3,4\}$ form a monochromatic $K_4$, and $B$ the same event on $\{1,2,3,5\}$. Calculate $\Pr(A)$, $\Pr(B)$ and $\Pr(A\cap B)$. Are these events independent?

<details>
<summary>Hint 1</summary>

Each event separately specifies a common colour on six edges.

</details>
<details>
<summary>Hint 2</summary>

The two edge sets share the triangle on $1,2,3$. If both events occur, their monochromatic colours must agree.

</details>
<details>
<summary>Solution</summary>

Each individual probability is $2/2^6=1/32$. The combined edge sets contain $6+6-3=9$ edges, and both events occur precisely when those nine edges all share one colour. Hence $\Pr(A\cap B)=2/2^9=1/256$. The product of the marginal probabilities is $1/1024$, which differs, so the events are not independent. Linearity of expectation remains valid despite this dependence.

</details>

### Exercise 13.7
<a id="ramsey-graphs-ex-7"></a>

Prove the simpler bound $R(k,k)>2^{k/2}$ for integers $k\ge3$, carefully handling rounding.

<details>
<summary>Hint 1</summary>

Start with the integer $n=\lfloor2^{k/2}\rfloor$ and use $\binom nk\le n^k/k!$.

</details>
<details>
<summary>Hint 2</summary>

The expectation is at most $2^{1+k/2}/k!$. Check this is below one at $k=3$ and decreases thereafter.

</details>
<details>
<summary>Solution</summary>

If $n<k$, avoidance is immediate. Otherwise the expectation is at most $2^{1+k/2}/k!$. At $k=3$ this is $4\sqrt2/6<1$, and the ratio of the expression at $k+1$ to that at $k$ is $\sqrt2/(k+1)<1$. Thus the first-moment criterion gives $R(k,k)>\lfloor2^{k/2}\rfloor$. Since the left side is an integer, it is at least the floor plus one, which is strictly greater than $2^{k/2}$ when that number is nonintegral and greater than it when it is integral as well.

</details>

### Exercise 13.8
<a id="ramsey-graphs-ex-8"></a>

Colour edges red independently with probability $1/3$ and blue otherwise. Show that on five vertices, positive probability exists of having no red triangle and no blue $K_4$.

<details>
<summary>Hint 1</summary>

Count red triangles and blue four-sets as two kinds of bad configuration.

</details>
<details>
<summary>Hint 2</summary>

Their expected total is $\binom53(1/3)^3+\binom54(2/3)^6$.

</details>
<details>
<summary>Solution</summary>

Let $X$ count both kinds of bad set. Its expectation is $10/27+5\cdot64/729=(270+320)/729=590/729<1$. Therefore $\Pr(X=0)\ge139/729>0$. Such a colouring witnesses $R(3,4)>5$. The biased colouring balances targets with different sizes; the calculation still uses independence only within each candidate set and linearity across sets.

</details>

### Exercise 13.9
<a id="ramsey-graphs-ex-9"></a>

Prove that every three-colouring of the edges of $K_{21}$ has a monochromatic triangle, using the two-colour estimates developed here.

<details>
<summary>Hint 1</summary>

Group the second and third colours together and apply a two-colour Ramsey bound.

</details>
<details>
<summary>Hint 2</summary>

The binomial upper bound gives $R(3,6)\le21$, and $R(3,3)=6$ handles the grouped six-vertex outcome.

</details>
<details>
<summary>Solution</summary>

Regard colour one as red and the other two colours together as blue. Since $R(3,6)\le\binom72=21$, there is either a colour-one triangle or a six-vertex complete graph using only colours two and three. In the latter graph, $R(3,3)=6$ gives a triangle in one of those two colours. This proves the stated universal bound. It does not assert that $21$ is the smallest possible host size.

</details>

### Exercise 13.10
<a id="ramsey-graphs-ex-10"></a>

A sequence of random-colouring arguments bounds expected bad counts by $0.8$ at every size. Another bounds them by $1/n$. State what each establishes about existence and probability tending to one, and justify your conclusions.

<details>
<summary>Hint 1</summary>

For a nonnegative integer bad count, its probability of being positive is at most its expectation.

</details>
<details>
<summary>Hint 2</summary>

A fixed positive success lower bound and a success lower bound tending to one are different statements.

</details>
<details>
<summary>Solution</summary>

The first sequence gives success probability at least $0.2$ at every size, so an avoiding colouring exists at every size considered. That estimate alone does not show success probability tends to one. The second gives success probability at least $1-1/n$, which does tend to one as $n\to\infty$, and also proves existence for every $n>1$. Neither calculation automatically supplies a specific avoiding colouring or a deterministic efficient construction. Each conclusion must match the actual probability bound.

</details>

## Sources

This chapter develops the standard arguments in newly written prose, with new numerical applications and staged exercises. Complementary primary teaching sources are Stasys Jukna, *Extremal Combinatorics*, [§27.2, Ramsey's theorem for graphs](https://web.vu.lt/mif/s.jukna/EC_Book/sample/322-323.pdf), and Yufei Zhao, [*Probabilistic Methods in Combinatorics*](https://web.mit.edu/yufeiz/www/papers/probabilistic_methods_talk.pdf), 2011, §2.1, consulted 13 November 2026. The older [Discrete Mathematics treatment](../discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods.md) remains a linked prerequisite and is not removed or overwritten. The estimates here are proved elementary benchmarks; no assertion about current record bounds is needed.

## Summary

Ramsey theory compares a universal forcing claim with an avoiding construction. A neighbourhood split gives finite Ramsey existence and the binomial upper bound. The five-cycle construction and six-vertex argument prove $R(3,3)=6$, while degree parity can improve a recursive estimate.

Independent random edge colours and a first-moment calculation give deterministic lower bounds. Floors, ceilings, logarithm bases and strict inequalities determine the precise integer conclusions. Positive probability proves existence; an explicit failure probability tending to zero proves typical behaviour in a stated limit. The next chapter, [random graphs](random-graphs.md), develops expectation and variance as tools for studying that typical behaviour directly.
