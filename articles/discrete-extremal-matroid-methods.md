
# When More Forces Structure: Extremal Bounds and Matroid Exchange

**Before reading.** Read [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md), [Graphs, Trees, and Connectivity](../books/discrete-mathematics-proof-counting-structure/graphs-trees-connectivity.md), [Counting by Bijection, Decomposition, and Inclusion–Exclusion](../books/discrete-mathematics-proof-counting-structure/counting-bijections-inclusion-exclusion.md) and [Expectation and Variance](../books/introduction-to-probability/expectation-variance.md). These are preparation for the ideas used below.

Two discrete principles turn size into structure.

- An **extremal threshold** says that beyond a size bound, a forbidden pattern must appear.
- A **matroid exchange law** says that a smaller feasible set cannot be locally stuck while a larger feasible set exists.

They are not the same theorem. This deep dive compares their proof mechanics, certificates, and failure modes through exact small examples.

This article assumes elementary graph theory, induction, finite set notation,
and comfort with proof by contradiction. Linear algebra helps with linear
matroids but is not needed for the graphic and uniform examples.

## 1. Threshold certificates have two sides

Suppose $ex(n,F)$ denotes the greatest number of edges in a simple $n$-vertex graph with no subgraph isomorphic to $F$. To prove $ex(n,F)=L$, two logically separate objects are required:

1. an $F$-free graph with $L$ edges;
2. a proof that every graph with $L+1$ edges contains $F$.

The first is a lower bound on the maximum; the second is an upper bound. A dense example alone does not prove optimality, and an inequality alone does not prove attainability.

For triangles, Mantel’s theorem supplies

$$ex(n,K_{3})=\lfloor n^{2}/4\rfloor$$

The balanced complete bipartite graph is the construction. The degree-square argument is the upper-bound certificate.

## 2. Equality can reveal architecture

In Mantel’s proof, every edge $uv$ satisfies $\operatorname{deg}(u)+\operatorname{deg}(v)\le n$, and Cauchy compares the degree-square sum with the squared degree sum. Equality forces restrictions at both steps: endpoint neighborhoods nearly partition the vertex set, and degrees are as equal as parity allows.

This suggests the balanced bipartite extremizer. Turning the suggestion into a complete uniqueness or stability theorem requires checking every equality case. An extremal value, an equality classification, and a quantitative stability result are distinct claims.

## 3. Ramsey forcing uses local majority

In any red-blue coloring of $K_{6}$, choose a vertex. At least three of its five incident edges share a color. If the three outer vertices contain an edge of that color, a monochromatic triangle uses the chosen vertex; if not, their three mutual edges all have the other color.

The proof is local but the conclusion is global: every coloring contains the pattern. A red five-cycle with blue complement shows $K_{5}$ can avoid it. Thus $R(3,3)=6$.

For larger parameters, random coloring yields lower bounds. If expected monochromatic $K_{k}$ count is below one, some coloring avoids all. This proves existence but may not construct or classify the coloring.

## 4. Worked exchange certificates compare two feasible sets

**Worked example.**

Let $(E,\mathcal I)$ be a hereditary independence system. A matroid requires:

$$I,J\in \mathcal I,\ |I|<|J| \Rightarrow \exists e\in J\setminus I \text{ with } I\cup \{e\}\in \mathcal I$$

An exchange **failure certificate** is therefore finite data:

- independent $I$ and $J$;
- $|I|<|J|$;
- a table showing $I\cup \{e\}$ dependent for every $e\in J\setminus I$.

On stable sets of path $a-b-c$, use $I=\{b\}$, $J=\{a,c\}$. Both candidates fail because each is adjacent to $b$.

By contrast, in uniform matroid $U_{2,4}$, any independent $I$ smaller than independent $J$ has size at most one; every element of $J\setminus I$ can augment unless $I$ already has rank two, which the strict size inequality forbids.

## 5. Why graph forests exchange

Let $F_{1},F_{2}$ be forests on a common vertex set with $|F_{1}|<|F_{2}|$. A forest with $c$ components has $|V|-c$ edges, so $F_{1}$ has more components. If every edge of $F_{2}$ lay within a component of $F_{1}$, then each tree component of $F_{2}$ could not connect distinct $F_{1}$ components, contradicting the component-count difference. Therefore some $e\in F_{2}\setminus F_{1}$ crosses two components of $F_{1}$. Adding it creates no cycle.

The proof identifies the augmenting element through a monovariant-like quantity: component count. Stable vertex sets lack an analogous exchange guarantee.

## 6. Greedy success is an exchange theorem, not an extremal slogan

For a finite matroid and bounded exact weights, descending-weight greedy accepts an element when independence survives. If negative elements are optional, skip them to optimize over all independent sets. To optimize over bases, continue until full rank even when remaining weights are negative.

Why exchange matters can be seen without a long proof. Compare a greedy prefix $G$ with an optimal basis $B$. When greedy chooses $g\notin B$, the fundamental circuit in $B\cup \{g\}$ contains some replaceable $b\in B\setminus G$. Because $b$ could not have been processed and rejected earlier while $G\cup \{b\}$ remained inside the independent basis $B$, its weight is no greater than $g$’s. Replacing it preserves feasibility and does not lower weight. Repeating aligns an optimum with greedy.

On path-stable sets, no such replacement exists for $\{b\}$ versus $\{a,c\}$. Weights $5,3,3$ make the missing exchange numerically visible: greedy total $5$, optimum $6$.

## 7. Rank turns local additions into closure

Matroid rank is

$$r(A)=\max\{|I|:I\subseteq A, I independent\}$$

An element $e$ lies in $\operatorname{cl}(A)$ when $r(A\cup \{e\})=r(A)$. In a graphic matroid, this means the endpoints of $e$ are already connected in $(V,A)$. In a linear matroid, the vector indexed by $e$ lies in the span of vectors indexed by $A$.

For a generic non-matroid independence system, the same rank-neutral test can be computed, but it should not be advertised as matroid closure: exchange and submodularity are what give closure its full axiom behavior.

## 8. Duality changes the question

Complements of matroid bases form bases of the dual. In a connected graph, complements of spanning trees correspond to bases of the cographic matroid. Graphic circuits are cycles; cographic circuits are minimal cuts.

This cycles/cuts pairing resembles planar graph duality, but matroid duality exists without a planar embedding. Not every dual matroid is the cycle matroid of a graph. The analogy guides examples; the base-complement definition controls the theorem.

## 9. A bounded exact audit

For ground size at most ten, an exact engine can enumerate all subsets and return:

| Audit | Positive certificate | Failure certificate |
| --- | --- | --- |
| heredity | every subset row present | independent set with missing independent subset |
| exchange | every ordered size pair augments | $I,J$ plus all failed candidates |
| rank | maximum independent subset size | full maximizing subset list |
| circuit | dependent and every proper subset independent | a smaller dependent subset |
| greedy | trace equals exhaustive optimum | weights and a better independent set |
| extremal graph | construction plus exact count | forbidden subgraph or larger construction |

The deterministic order, weight bounds, and tested ground size belong in the report. Exact enumeration proves each displayed instance, not the general exchange or extremal theorem.

## 10. Practice with solutions

### 1. Produce an exchange witness

<a id="deep-dive-discrete-extremal-matroid-methods-ex-1"></a>

**Exercise 1.**

Show matchings of path with edges $e_{1},e_{2},e_{3}$ in order are not a matroid.


<details>
<summary>Hint 1</summary>

Matroid exchange asks whether a smaller independent set can accept an element from a larger one.
</details>
<details>
<summary>Hint 2</summary>

Use the middle edge alone versus the two outer edges; test adding either outer edge.
</details>
<details>
<summary>Solution</summary>

Let $I=\{e_{2}\}$ and $J=\{e_{1},e_{3}\}$. Both are matchings and $|I|<|J|$. Adding either outer edge to $I$ creates a shared endpoint, so no augmentation exists.

</details>

### 2. Distinguish extremal directions

<a id="deep-dive-discrete-extremal-matroid-methods-ex-2"></a>

**Exercise 2.**

A triangle-free graph on $8$ vertices with $16$ edges is displayed. What remains to prove it is extremal?


<details>
<summary>Hint 1</summary>

An exhibited graph with a given edge count proves only a lower bound for the extremal number.
</details>
<details>
<summary>Hint 2</summary>

Pair the construction with an upper-bound theorem for triangle-free graphs on eight vertices.
</details>
<details>
<summary>Solution</summary>

The graph supplies $ex(8,K_{3})\ge 16$. One still needs an upper bound. Mantel gives $ex(8,K_{3})\le \lfloor 64/4\rfloor=16$, so together they establish equality.

</details>

### 3. Scope a computation

An engine audits every subset of one five-element system and finds exchange. What may be concluded?

**Solution.** The explicitly supplied finite family satisfies exchange, assuming the engine and input were checked. This proves that instance is a matroid if heredity and nonemptiness also passed. It does not prove that every member of a parameterized family at larger sizes is a matroid.

## Closing contrast

Extremal arguments say that enough size forces a pattern. Exchange says that enough feasible size guarantees a local augmentation. Both turn global comparison into a small certificate, but their hypotheses and objectives differ. Keeping the certificates explicit prevents analogy from becoming overclaim.

## Continue through the discrete shelf

The reference treatment behind this deep dive is [Combinatorial Structures: Graphs, Extremal Methods, and Matroids](#/books/discrete-combinatorial-structures); experiment with the same independence, rank, and greedy phenomena in the [Independence and Extremal Structures Explorer](../apps/atlas/index.html#/labs?lab=visual-lab-discrete-independence-extremal).
