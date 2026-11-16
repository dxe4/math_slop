var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: probabilistic-extremal-methods
title: "Probabilistic and Extremal Methods"
level: graduate
license: CC BY-SA 4.0
---

# Probabilistic and Extremal Methods

An extremal question asks how large an object can be while avoiding a specified configuration. A probabilistic proof starts with a distribution on possible objects and uses an average to establish that at least one object has the required property. These viewpoints often meet. An upper bound restricts every permitted object, while a random construction produces a lower bound by proving that some permitted object is large.

This entry chapter develops the finite principles that later chapters strengthen. It starts from the [first-course probabilistic and extremal reading](/books/library-book-discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods/), whose original exposition and exercises remain available. Here the arguments are recast as tools for the present volume: exact extremal bounds, quantitative excess, conditional expectation, alteration, and random orders. Subsequent chapters supply full Turán symmetrization, Ramsey bounds, local dependence, and set-system methods.

The prerequisites are finite-set proofs, elementary graph theory, binomial coefficients, and finite probability. Graphs in this chapter are finite, undirected, and simple. Their vertex set may be labeled, but the inequalities hold for every labeling. The independent sets considered here are stable **vertex** sets: they contain no graph edge. They should not be confused with forest edge sets in a graphic matroid. That distinction matters when the book later turns from extremal methods to exchange.

## 1. Specify the allowed objects before optimizing

**Definition 1.1 (Extremal number).** For a fixed finite simple graph $H$, let $\\operatorname{ex}(n,H)$ be the maximum number of edges in a simple graph on $n$ vertices containing no subgraph isomorphic to $H$. Here $n$ is a nonnegative integer, and “subgraph” permits deletion of edges as well as vertices.

The maximum exists because only finitely many graphs occur on a fixed labeled $n$-element set. Labelling does not change its value: relabelling preserves both the edge count and forbidden-subgraph condition. A construction with $L$ edges proves $\\operatorname{ex}(n,H)\\ge L$. A proof that every permitted graph has at most $U$ edges proves $\\operatorname{ex}(n,H)\\le U$. These directions should be written before the argument begins. When $L=U$, the exact value follows; describing all equality graphs is a further assertion.

The induced-subgraph version is different. For example, a complete graph contains a three-vertex path as a subgraph once one of the three edges is omitted, but no three of its vertices induce that path. Similarly, allowing parallel edges can destroy an edge bound that was true for simple graphs. The forbidden configuration, the ambient class, and the objective are all part of the problem.

A stability conclusion requires another parameter: a specified distance from an extremal family. Saying that a graph with nearly the maximum number of edges is “nearly bipartite” has no mathematical content until the required edge deletions or another distance is bounded. Exact optimization alone does not prove such a result. The next chapter gives both exact symmetrization arguments and a quantitative triangle-free stability statement.

## 2. A degree proof and what excess forces

**Theorem 1.2 (Mantel's bound).** For every integer $n\\ge0$, a triangle-free simple graph on $n$ vertices has at most $\\lfloor n^2/4\\rfloor$ edges. A complete bipartite graph with part sizes $\\lfloor n/2\\rfloor,\\lceil n/2\\rceil$ attains this bound.

*Proof.* The claim is immediate for $n=0$. Write $m$ for the number of edges, and suppose $n\\ge1$. If $uv$ is an edge in a triangle-free graph, $N(u)\\cap N(v)=\\varnothing$: a common neighbour would complete a triangle. Although each endpoint is a neighbour of the other, no vertex belongs to both neighbourhoods. Thus $d(u)+d(v)\\le n$. Summing over edges gives
$$
 \\sum_v d(v)^2
 =\\sum_{uv\\in E}(d(u)+d(v))\\le nm.
$$
The nonnegative sum $\\sum_v(d(v)-2m/n)^2$ gives $\\sum_vd(v)^2\\ge4m^2/n$. If $m>0$, combining the inequalities and dividing by $m$ gives $m\\le n^2/4$; the case $m=0$ is immediate. Integrality supplies the floor. The balanced complete bipartite graph is triangle free and has exactly $\\lfloor n/2\\rfloor\\lceil n/2\\rceil=\\lfloor n^2/4\\rfloor$ edges. ∎

The proof is an incidence count followed by a square inequality. Both parts can be reused when triangles are allowed. That produces a quantitative conclusion rather than only the statement that one triangle must exist.

**Proposition 1.3 (A triangle excess bound).** If a simple graph has $n\\ge1$ vertices, $m$ edges, and $t$ triangles, then
$$
 3t\\ge\\sum_v d(v)^2-nm
 \\ge \\frac{4m^2}{n}-nm.
$$

*Proof.* For every edge $uv$, inclusion–exclusion inside the $n$-element vertex set gives
$$
 |N(u)\\cap N(v)|\\ge d(u)+d(v)-n.
$$
Sum over edges. Each triangle contributes one common neighbour for each of its three edges, so the left sum is $3t$. Each vertex degree contributes $d(v)$ once for each incident edge, giving the first inequality. The same squared-deviation calculation as above gives the second. ∎

A negative right side is still a valid lower bound, but it conveys less than $t\\ge0$. The proposition becomes informative above the quadratic edge threshold. It does not describe every near-extremal graph, and it is not a substitute for the stronger stability theorem later in the book.

**Worked example 1.4 (An exact threshold and a quantitative excess).** For seven vertices, the triangle-free maximum is $\\lfloor49/4\\rfloor=12$, attained by $K_{3,4}$. Thirteen edges therefore force a triangle. On five vertices, a graph with seven edges satisfies
$$
 t\\ge \\frac{7(28-25)}{15}=\\frac75.
$$
Because $t$ is an integer, it contains at least two triangles. The first calculation determines an extremal value by matching a universal upper bound to a construction. The second supplies a multiplicity lower bound without asserting that this bound is sharp.

## 3. Finite averages are deterministic existence tools

**Definition 1.5 (Finite probability model).** A finite probability space consists of a finite nonempty set $\\Omega$ and numbers $p_\\omega\\ge0$ whose sum is one. A random variable is a function $X:\\Omega\\to\\mathbb R$, with expectation $\\mathbb E X=\\sum_\\omega p_\\omega X(\\omega)$. Outcomes of probability zero can be discarded; an existence conclusion may always be taken in the positive-probability support.

**Lemma 1.6 (Averaging and indicators).** A real random variable on a finite probability space has an outcome at least its expectation and an outcome at most its expectation. Expectations are linear, with no independence assumption. For an event $A$, its indicator satisfies $\\mathbb E\\mathbf1_A=\\Pr(A)$.

*Proof.* If every supported value were strictly smaller than the expectation, their weighted average would be strictly smaller as well, a contradiction. The other direction is identical. Expanding the finite sums proves $\\mathbb E(aX+bY)=a\\mathbb E X+b\\mathbb E Y$, even if $X,Y$ are dependent. The indicator sum includes exactly the probabilities of outcomes in $A$, proving its formula. ∎

**Proposition 1.7 (First-moment avoidance).** If $X$ is a nonnegative integer-valued random variable and $\\mathbb E X<1$, then some supported outcome has $X=0$.

*Proof.* Otherwise every supported value is at least one, so its expectation is at least one. ∎

Both restrictions in the proposition matter. The constant random variable $X=1/2$ has expectation below one but never vanishes. The constant integer variable $X=1$ shows why an expectation at most one is insufficient. Nor does the conclusion alone imply that success is likely: a positive probability may be small. More detailed information can be obtained from the elementary bound
$$
 \\Pr(X\\ge a)\\le\\frac{\\mathbb E X}{a}\\qquad(a>0,\\ X\\ge0),
$$
because the contribution to the expectation from that event is at least $a\\Pr(X\\ge a)$. For integer defect counts, failure is the event $X\\ge1$, so this inequality also gives $\\Pr(X=0)\\ge1-\\mathbb E X$.

**Worked example 1.8 (A Ramsey lower certificate).** Colour every edge of $K_6$ independently red or blue with equal probabilities. For each four-element vertex set $S$, let $I_S$ indicate that all six edges within $S$ have the same color. Its probability is $2(1/2)^6=1/32$. Hence the total number $X$ of monochromatic four-cliques has
$$
 \\mathbb E X=\\binom64/32=15/32<1.
$$
Some colouring has no monochromatic four-clique, which proves $R(4,4)>6$. Moreover this particular model succeeds with probability at least $17/32$, by the preceding inequality. The proof uses independence among the six edges to compute one event probability. It does not require the different four-set indicators to be independent, and indeed they need not be. The bound is a certificate from this argument, not an exact determination of the Ramsey number.

## 4. Conditional expectation can select a witness

Let every vertex of a weighted simple graph be assigned independently to one of two sides with equal probability. Each edge crosses with probability $1/2$. For nonnegative edge weights $w_e$, the crossing weight $Z$ therefore satisfies $\\mathbb E Z=\\frac12\\sum_e w_e$. Averaging proves existence of a cut carrying at least half the total weight.

There is also a deterministic selection rule. After some vertex sides have been fixed, take the average cut weight over all completions of the remaining fair bits. The current conditional expectation is the mean of the two conditional expectations obtained by placing the next vertex on either side. Choose a side with conditional expectation at least the current one. Repeat until every side is fixed. The final conditional expectation is the actual weight of the completed cut, so it is at least the original average.

This argument uses only a finite tree of choices. In a more general finite distribution the branch average is weighted by the conditional probabilities, and a branch with positive probability and value at least the parent average still exists. Computational efficiency requires being able to evaluate these conditional expectations; their abstract existence alone is not an efficient algorithm for every problem.

**Worked example 1.9 (Selecting a weighted triangle cut).** Give edges $ab,bc,ca$ weights $4,3,2$. The initial expected crossing weight is $9/2$. Fix $a$ on side zero; by symmetry the conditional expectation remains $9/2$. If $b$ is also zero, edge $ab$ contributes zero and the two edges incident with unassigned $c$ contribute half their weights, so the conditional expectation is $5/2$. If $b$ is one, the corresponding value is $4+3/2+2/2=13/2$. Choose the second branch. Setting $c=0$ gives actual crossing weight $4+3=7$, whereas setting $c=1$ gives $4+2=6$. Choose $c=0$. Every choice maintained or increased the conditional average, and the final cut has weight seven. The procedure supplied a witness rather than merely an existence statement.

One should not replace the joint probability model by separate marginal statements without checking them. On a triangle, the three crossing indicators each have mean $1/2$, yet they never all equal one. Linearity survives this dependence; a product formula for their joint event does not. Later local-dependence arguments require a precise dependency graph, not the phrase “the events look unrelated.”

## 5. Alteration allows defects before repairing them

**Theorem 1.10 (Uniform hypergraph alteration).** Let a finite hypergraph have $n$ vertices and $m$ distinct edges, each an $r$-element set, where $r\\ge2$. For every $0\\le p\\le1$, it has a vertex set containing no hyperedge and having size at least
$$
 \\left\\lceil np-mp^r\\right\\rceil.
$$

*Proof.* Select vertices independently with probability $p$. Write $Z$ for the selected number and $Y$ for the number of hyperedges all of whose vertices were selected. Then $\\mathbb E Z=np$, while each specified edge survives with probability $p^r$, so $\\mathbb E Y=mp^r$. Linearity gives $\\mathbb E(Z-Y)=np-mp^r$. Some outcome therefore has $Z-Y$ at least that average.

In that outcome, repeatedly delete one vertex from any hyperedge still present. Deletion cannot create a hyperedge. Every step destroys at least one of the original $Y$ present edges, so at most $Y$ vertices are removed. The remaining hypergraph-independent set has size at least $Z-Y$, hence at least the ceiling of the displayed average. If the lower bound is negative, the conclusion remains valid but uninformative. ∎

For $m>0$, one useful choice when $n/(rm)\\le1$ is
$$
 p=\\left(\\frac n{rm}\\right)^{1/(r-1)}.
$$
It makes $mp^r=np/r$, giving the lower bound $(1-1/r)np$ before rounding. This is a justified choice, without requiring a calculus argument about optimality. If that proposed value exceeds one, use $p=1$ instead. If $m=0$, every vertex is already feasible and no division by $m$ is appropriate.

**Worked example 1.11 (A repair bound and its limitations).** For a ten-cycle, take $n=m=10$, $r=2$, and $p=1/2$. The expectation difference is $5-10/4=5/2$. After alteration, some stable set therefore has at least three vertices. Alternating vertices explicitly gives a stable set of size five, so this general lower bound is not exact for the cycle. That discrepancy is harmless: the theorem covers every graph with those parameters and does not exploit the cycle's special structure. In a three-uniform hypergraph with $n=12,m=16$, the suggested choice $p=1/2$ gives $np-mp^3=6-2=4$, proving a hyperedge-free set of size at least four.

The repair proof should specify a monotone defect measure. “Delete one vertex per defect” is unsafe if the operation can create new defects. Here deleting vertices only destroys already present edges, so the original count $Y$ bounds the number of steps. In other settings the same sentence needs a different invariant or a separate repair lemma.

## 6. A random order uses local degree information

The alteration argument used only $n,m$. A random permutation can retain the full degree sequence.

**Theorem 1.12 (Random-order stable-set bound).** Every finite simple graph on a nonempty vertex set $V$ has a stable set of size at least
$$
 \\left\\lceil\\sum_{v\\in V}\\frac1{d(v)+1}\\right\\rceil
 \\ \\ge\\ 
 \\left\\lceil\\frac{n^2}{2m+n}\\right\\rceil.
$$

*Proof.* Choose a uniformly random ordering of all vertices, and retain a vertex when it precedes every one of its neighbours. Adjacent vertices cannot both be retained: each would have to precede the other. The retained set is therefore stable in every outcome. Among the $d(v)+1$ vertices in the closed neighbourhood of $v$, each is equally likely to be earliest. Thus $v$ is retained with probability $1/(d(v)+1)$. Indicators and averaging prove the first bound.

For positive numbers $a_1,\\ldots,a_n$,
$$
 \\left(\\sum_i a_i\\right)\\left(\\sum_i a_i^{-1}\\right)-n^2
 =\\sum_{i<j}\\frac{(a_i-a_j)^2}{a_i a_j}\\ge0.
$$
Apply this with $a_i=d(v_i)+1$, whose sum is $2m+n$. This proves the second inequality before ceilings; monotonicity of the ceiling function gives the displayed form. ∎

Isolated vertices are automatically selected, as their contribution one correctly records. For an empty graph on a nonempty vertex set, the formula gives all $n$ vertices. If there are no vertices at all, the empty set gives the conclusion separately; the displayed ratio should not be evaluated as $0/0$.

**Worked example 1.13 (A sharp degree bound).** Take three disjoint copies of $K_4$. There are twelve vertices, each of degree three, so the sum in the theorem is $12/4=3$. Each component permits at most one stable vertex, and choosing one from every component gives three. Thus the bound is exact. The examples also show why the lower bound concerns stable vertex sets, not a matroid rank: within one component those stable sets happen to form a rank-one uniform matroid, but arbitrary graph-stable sets need not satisfy augmentation.

## 7. Choosing the right method

The same problem may admit an extremal proof, an averaging proof, or a repair proof, but their conclusions should be compared precisely. An exact maximum needs both directions. A probability below one for the existence of defects establishes avoidance only when the defect variable is an integer count. An average score yields an outcome at least that score, even if the score is not itself a possible integer value. Conditional expectation needs access to conditional averages. Alteration needs a repair bound valid for every sampled outcome.

These methods also explain common changes of task. A uniformly sampled encoding can give a nonuniform distribution on unlabelled objects. A graph with half its weighted edges crossing is not necessarily balanced between its vertex sides. A first-moment proof need not yield the best asymptotic constant. A bound using degrees can outperform one using only the total edge count because it retains more structural information. None of those differences is resolved by running more finite examples.

The next chapters develop the methods in a deliberate order. [Turán symmetrization](turan-symmetrization-stability.md) sharpens the universal graph boundary and its equality analysis. [Ramsey forcing](ramsey-forcing-bounds.md) separates recursive upper bounds from random lower constructions. [Alteration and dependence](probabilistic-alteration-dependence.md) develops variance, concentration, dependency graphs, and the local lemma. This chapter supplies their finite accounting language while retaining the earlier first-course reading as preparation.

## Exercises

### Exercise 1.1
<a id="probabilistic-extremal-methods-ex-1"></a>

Give a simple graph containing $P_3$ as a subgraph but containing no induced $P_3$. Explain which convention changes the answer.

<details>
<summary>Hint 1</summary>

**Hint.** Consider a graph on three vertices with every possible edge.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A subgraph can omit an edge; an induced subgraph on a chosen vertex set cannot.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take $K_3$. Deleting one of its three edges gives a subgraph isomorphic to $P_3$. Its only three-vertex induced subgraph is $K_3$, which has three edges rather than the two of $P_3$. Thus it contains $P_3$ as a subgraph but not as an induced subgraph. An edge extremal problem must say which notion is forbidden.

</details>

### Exercise 1.2
<a id="probabilistic-extremal-methods-ex-2"></a>

Determine the maximum number of edges in a triangle-free graph on nine vertices, supplying both an upper bound and a matching construction.

<details>
<summary>Hint 1</summary>

**Hint.** Apply Mantel's theorem with $n=9$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Balance the two parts of a complete bipartite graph.

</details>

<details>
<summary>Solution</summary>

**Solution.** Mantel gives at most $\\lfloor81/4\\rfloor=20$ edges. The graph $K_{4,5}$ has $4\\cdot5=20$ edges and contains no triangle, because a triangle would require two adjacent vertices in one bipartition class. Hence the exact maximum is twenty. The upper-bound proof and the construction establish different required directions.

</details>

### Exercise 1.3
<a id="probabilistic-extremal-methods-ex-3"></a>

A simple graph on six vertices has ten edges. Use Proposition 1.3 to give an integer lower bound on its number of triangles. Does the proposition assert that this bound is best possible?

<details>
<summary>Hint 1</summary>

**Hint.** Substitute $n=6,m=10$ into the lower bound for $t$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The real lower bound is $10(40-36)/(18)$. Round upward.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $t\\ge40/18=20/9$, so the integer $t$ is at least three. The proposition proves this lower bound for every such graph, but it does not construct one with exactly three triangles or prove that three is the sharp minimum. That extra optimization would need a matching example or a stronger argument.

</details>

### Exercise 1.4
<a id="probabilistic-extremal-methods-ex-4"></a>

Show separately that nonnegative integer-valuedness and the strict inequality $\\mathbb E X<1$ are necessary for Proposition 1.7 as stated.

<details>
<summary>Hint 1</summary>

**Hint.** A probability space with one outcome is enough for both counterexamples.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use one constant below one that is not an integer, and then the constant one.

</details>

<details>
<summary>Solution</summary>

**Solution.** For the first restriction, the constant $X=1/2$ is nonnegative and has expectation below one but never equals zero. For strictness, the constant $X=1$ is a nonnegative integer-valued variable with expectation at most one but no zero. Nonnegativity also matters: on two equally likely outcomes the values $-1,1$ have expectation zero and no zero value. Each omitted condition invalidates the stated implication.

</details>

### Exercise 1.5
<a id="probabilistic-extremal-methods-ex-5"></a>

For independent fair red-blue edge colors on $K_7$, compute the expected number of monochromatic $K_4$'s. Explain exactly why failure of this first-moment certificate is not an upper bound on $R(4,4)$.

<details>
<summary>Hint 1</summary>

**Hint.** There are $\\binom74$ possible four-sets, each monochromatic with probability $1/32$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the resulting expectation to one, and distinguish the converse of the first-moment proposition from the proposition itself.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expectation is $\\binom74/32=35/32>1$. Thus the sufficient condition for a defect-free outcome does not apply. An expectation above one can coexist with a zero outcome, because other outcomes may have several defects. The calculation consequently does not prove that every colouring has a monochromatic $K_4$, and yields no upper bound $R(4,4)\\le7$.

</details>

### Exercise 1.6
<a id="probabilistic-extremal-methods-ex-6"></a>

For a triangle with edge weights $w(ab)=5,w(bc)=4,w(ca)=1$, carry out the conditional-expectation cut procedure with $a=0$, then $b$, then $c$.

<details>
<summary>Hint 1</summary>

**Hint.** After fixing $a$, unassigned endpoints still give half of their edge weight in expectation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare $b=0$ with $b=1$, then evaluate the two actual cuts obtained by fixing $c$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The initial average is $10/2=5$, unchanged by fixing $a=0$. If $b=0$, the conditional average is $(4+1)/2=5/2$. If $b=1$, it is $5+(4+1)/2=15/2$, so choose one. Then $c=0$ gives crossing edges $ab,bc$, of total nine, whereas $c=1$ gives $ab,ca$, of total six. Choose $c=0$. The final witness has weight nine, and neither selected branch reduced the conditional expectation.

</details>

### Exercise 1.7
<a id="probabilistic-extremal-methods-ex-7"></a>

A three-uniform hypergraph has twenty vertices and twenty edges. Use the alteration theorem with $p=1/2$. Explain why deleting a vertex from each present edge does not require twenty distinct deletions.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the expected number selected and the expected number of completely selected edges.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A vertex deletion may destroy more than one present edge; this improves the lower bound rather than invalidating it.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expectation difference is $20/2-20/8=15/2$, so the theorem gives a hyperedge-free vertex set of size at least eight. The repair removes vertices only from edges still present. One deletion can destroy several original edges, and destroyed edges need no later repair. Therefore at most the original number $Y$ of present edges is required; claiming exactly one distinct deleted vertex per edge would be unnecessary and could be false.

</details>

### Exercise 1.8
<a id="probabilistic-extremal-methods-ex-8"></a>

Apply the random-order bound to $K_{2,4}$, first using its full degree sequence and then only $n,m$. Compare both bounds with a largest stable set.

<details>
<summary>Hint 1</summary>

**Hint.** The two vertices in the smaller part have degree four; the other four have degree two.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The full sum is $2/5+4/3$. A bipartition class is stable.

</details>

<details>
<summary>Solution</summary>

**Solution.** The degree sum is $2/5+4/3=26/15$, whose ceiling is two. The bound using only $n=6,m=8$ is $\\lceil36/22\\rceil=\\lceil18/11\\rceil=2$, also two. A largest stable set has size four: the larger bipartition class has four vertices, and any stable set using vertices from both parts would contain an edge. These valid lower bounds need not attain the actual optimum.

</details>

### Exercise 1.9
<a id="probabilistic-extremal-methods-ex-9"></a>

Prove the weighted version of the random-order bound: for nonnegative vertex weights $a_v$, some stable set $I$ satisfies $\\sum_{v\\in I}a_v\\ge\\sum_v a_v/(d(v)+1)$. Identify where the probability calculation enters.

<details>
<summary>Hint 1</summary>

**Hint.** Use exactly the same retained vertices as in Theorem 1.12.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Write the retained weight as a sum of weighted indicators rather than trying to make the inclusion events independent.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose a uniform random ordering and retain local minima in closed neighbourhoods. The resulting set is stable in every outcome, as before. Its weight is $W=\\sum_v a_v\\mathbf1_{\\{v\\text{ retained}\\}}$. Each vertex is retained with probability $1/(d(v)+1)$, so linearity gives $\\mathbb E W=\\sum_v a_v/(d(v)+1)$. Averaging supplies a stable set with at least that weight. Independence of different retention indicators is not needed; the calculation uses their individual probabilities.

</details>

### Exercise 1.10
<a id="probabilistic-extremal-methods-ex-10"></a>

Let $G$ be a finite simple graph with maximum degree at most an integer $\\Delta\\ge0$. Deduce $\\alpha(G)\\ge\\lceil n/(\\Delta+1)\\rceil$ from Theorem 1.12. Give a family showing equality can occur.

<details>
<summary>Hint 1</summary>

**Hint.** Compare each denominator $d(v)+1$ with $\\Delta+1$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use disjoint complete graphs of order $\\Delta+1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For nonempty $V$, every summand $1/(d(v)+1)$ is at least $1/(\\Delta+1)$, so the random-order theorem gives the stated bound. The empty graph on no vertices satisfies it separately. For any positive integer $q$, the disjoint union of $q$ copies of $K_{\\Delta+1}$ has $n=q(\\Delta+1)$, maximum degree $\\Delta$, and stable-set number exactly $q$, since at most one vertex may be chosen per clique and one per clique is attainable. This also handles $\\Delta=0$.

</details>

## Sources

This is original exposition extending the local first-course chapter
[Probabilistic and Extremal Methods](/books/library-book-discrete-mathematics-proof-counting-structure/probabilistic-extremal-methods/).
That earlier source, including its examples and solutions, is preserved.
The classical expectation, alteration, and random-order methods have a primary
reference route in Noga Alon and Joel H. Spencer,
[*The Probabilistic Method*, fourth edition](https://www.wiley.com/en-us/the-probabilistic-method-4th-edition-p-9781119062073).
The chapter's finite arguments and exercise explanations are original
expositions; the cited book provides a wider reference route.

## Summary

An extremal value needs both a construction and a universal bound. Finite
averaging proves deterministic existence, with indicator sums separating
linearity from the independence needed in individual probability calculations.
Conditional expectation can turn a computable average into a witness.
Alteration permits defects when a monotone repair can remove them at a bounded
cost. Random orders retain degree information and produce stable sets without
requiring independent inclusion events. The later chapters strengthen these
methods while keeping their graph class, probability space, and conclusion
explicit.

`;export{e as default};