var e=`---
parent_id: book-graph-theory
chapter_id: trees
title: "Trees"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Trees

## Connectivity with no redundant route

A connected network may have many alternative routes. A tree has none: between any two vertices, exactly one path is available. This makes trees fragile under edge deletion but particularly easy to understand recursively. Removing a leaf leaves a smaller tree, and adding an edge creates a uniquely determined cycle. These facts explain why trees support both proofs by induction and algorithms for general graphs.

We shall prove several equivalent descriptions of a tree, including its edge count, unique paths, and minimal connectivity. We then introduce rooted structure and spanning trees. The counting part develops Prüfer encoding and decoding completely, establishing Cayley's formula for labelled trees and a refinement prescribing every vertex degree. Throughout, we distinguish labelled, rooted, and ordered objects, because their counts answer different questions.

## Preparation and conventions

The prerequisite chapters are [Graphs, Degrees, and Isomorphism](graphs-degrees-isomorphism.md) and [Paths, Cycles, and Connectivity](paths-cycles-connectivity.md). We use their handshake lemma, bridge criterion, path reductions, and lower edge bound for connected graphs. [Introduction to Proof](/books/library-book-introduction-to-proof/) supplies induction and bijections; the [Discrete Mathematics counting chapter](/books/library-book-discrete-mathematics-proof-counting-structure/permutations-combinations-binomial/) supplies multinomial counts. The earlier [spanning-tree algorithms chapter](/books/library-book-discrete-mathematics-proof-counting-structure/spanning-trees-shortest-paths/) motivates why structural tree proofs matter to optimisation.

Graphs are finite, undirected, and simple. A tree is nonempty; a forest may be empty. A leaf means degree one, so the unique vertex of a one-vertex tree is not a leaf. A path never repeats a vertex, and cycles have length at least three. These conventions will be used explicitly at the small boundary cases where several informal slogans would otherwise fail.

## Leaves and unique paths

**Definition 3.1 (Tree and forest).** A tree is a connected graph containing no cycle. A forest is a graph containing no cycle, without a connectedness requirement. Each nonempty connected component of a forest is therefore a tree.

**Lemma 3.2 (Leaves at longest-path endpoints).** A finite tree with at least two vertices has at least two leaves.

*Proof.* Choose a path of maximum length. Since the tree is connected and has more than one vertex, this path has distinct endpoints. Every neighbour of an endpoint lies on the path; otherwise that neighbour would extend it. One neighbour is the next vertex on the path. Any other neighbour on the path would, with the intervening segment, create a cycle. Hence the endpoint has exactly one neighbour and is a leaf. The same reasoning applies to the other endpoint. ∎

Finiteness guarantees that a longest path exists. An infinite two-way path has no leaves, so the lemma would be false without its finite hypothesis. The one-vertex tree also shows why the lower bound of two vertices is necessary. A proof by repeatedly removing a leaf must begin with that exceptional one-vertex case, rather than expecting it to contain a degree-one vertex.

**Theorem 3.3 (Unique-path characterisation).** A nonempty finite simple graph is a tree if and only if there is exactly one path between every pair of distinct vertices.

*Proof.* In a tree, connectedness supplies at least one path. Two distinct paths with the same endpoints would contain a cycle by the two-path lemma from chapter 2, contradicting acyclicity. Conversely, the stated path condition gives connectedness. If a cycle existed, any two distinct vertices on it would be joined by the two different cycle arcs, violating uniqueness. Thus the graph is acyclic and connected. For one vertex, the distinct-pair condition is vacuous and the graph is a tree, as required. ∎

Paths here are identified by their ordered traversal from a specified first endpoint to a specified second endpoint. Reversing a path changes that endpoint order, rather than providing a second path with the same ordered endpoints. This avoids counting one undirected route twice when applying uniqueness.

**Theorem 3.4 (Tree and forest edge counts).** A tree with $n\\ge1$ vertices has $n-1$ edges. A forest with $n$ vertices and $c$ components has $n-c$ edges, including the empty forest.

*Proof.* For a one-vertex tree the count is zero. Assume the tree count holds on $n-1$ vertices, and let $T$ have $n\\ge2$. Remove a leaf and its incident edge. The remainder is acyclic. It is connected because a path between two remaining vertices cannot use a leaf internally: that would require two distinct incident path edges at a degree-one vertex. Thus the remainder is a tree with $n-1$ vertices and $n-2$ edges. Restoring the deleted edge gives $n-1$.

For a nonempty forest, let its component orders be $n_1,\\ldots,n_c$. Summing their tree edge counts gives $\\sum_i(n_i-1)=n-c$. For the empty forest both sides are zero, with no components to sum. ∎

### Worked example 3.5 (Why the edge count alone is insufficient)

Take a triangle on $\\{1,2,3\\}$ and a disjoint edge $45$. The graph has five vertices and four edges, so $m=n-1$, but it is not a tree: it has a cycle and is disconnected.

By contrast, a forest with five vertices and four edges must be connected, since its component count is $c=n-m=1$. A connected graph with those same numbers will also turn out to be a tree. The count becomes decisive when accompanied by either acyclicity or connectedness. Omitting both hypotheses leaves the triangle-and-edge counterexample.

This distinction matters in constructing a proof certificate. A list of $n-1$ retained edges does not by itself certify a spanning tree. One must also establish connectivity or absence of cycles, after which the relevant characterisation applies. A drawing that looks connected should be supported by explicit routes or an argument about the construction.

## Spanning trees and equivalent structural descriptions

**Theorem 3.6 (Spanning-tree existence).** Every connected finite graph contains a spanning tree.

*Proof.* Among all connected spanning subgraphs, choose one with the fewest edges; the family is finite and nonempty because it contains the original graph. If the chosen subgraph had a cycle, deleting one edge of that cycle would preserve connectivity, since the remaining cycle arc still joins its endpoints. This would give a smaller connected spanning subgraph, a contradiction. The chosen subgraph is therefore connected and acyclic, hence a spanning tree. ∎

The proof does not claim that this spanning tree is unique, and it uses no weights. Finding one with minimum total weight requires a different optimisation argument. Every spanning tree has $n-1$ edges, so minimising the number of edges cannot distinguish their weights. Moreover, deleting redundant edges can increase distances even while preserving all connections.

**Theorem 3.7 (Equivalent tree conditions).** For a finite simple graph on $n\\ge1$ vertices, each of the following is equivalent to being a tree:

1. Every two distinct vertices have a unique path.
2. The graph is connected and has $n-1$ edges.
3. The graph is acyclic and has $n-1$ edges.
4. The graph is connected and every edge is a bridge.
5. The graph is acyclic and adding any missing edge creates a cycle.

*Proof.* The first condition is Theorem 3.3. A tree is connected and has $n-1$ edges by Theorem 3.4. Conversely, if a connected graph with $n-1$ edges had a cycle, deleting a cycle edge would leave a connected graph with $n-2$ edges, contradicting the lower bound from chapter 2. This proves the second equivalence.

A tree also satisfies the third condition. Conversely, an acyclic graph has $n-c$ edges, so $n-1=n-c$ forces $c=1$. For the fourth condition, each tree edge is a bridge because its endpoints have no other path. If a connected graph has a cycle, every edge of that cycle has an alternative endpoint route and is not a bridge. Thus all edges being bridges forces acyclicity.

For the fifth condition, in a tree the unique path between the endpoints of a new edge combines with it to form a cycle. Conversely, if an acyclic graph were disconnected, an edge between two components could be added without forming a cycle: a cycle containing that edge would need an already existing path between its endpoints. That contradicts the condition. Hence it is connected. The one-vertex case satisfies the statements directly, including the condition about its nonexistent missing edges. ∎

Conditions two and three give the usual “any two of connected, acyclic, and $m=n-1$” characterisation. Condition four is called minimal connectivity: deleting any edge loses connectivity. Condition five is maximal acyclicity on the fixed vertex set: every permitted extra edge destroys acyclicity. Minimal and maximal refer to adding or deleting edges with the vertices held fixed, not to a numerical maximum over graphs of every possible order.

**Corollary 3.8 (The unique cycle created by an extra edge).** If $T$ is a tree and $uv$ is a missing edge, then $T+uv$ has exactly one cycle. Removing any edge of that cycle gives a tree on the same vertices.

*Proof.* The unique $u$–$v$ path in $T$, together with the new edge, is a cycle. Any cycle in $T+uv$ must contain the new edge, since $T$ is acyclic. Removing that edge from any such cycle gives a $u$–$v$ path in $T$, which is unique. Hence there is only one cycle. Deleting an edge of it preserves connectivity and destroys the sole cycle, giving a tree. ∎

This exchange is the structural step behind many spanning-tree arguments. It says precisely which edges can be exchanged while keeping a tree. A weight comparison, if needed, is then a separate calculation on those eligible choices rather than an assumption that every exchange improves a cost.

## Degree information and rooted structure

**Corollary 3.9 (Leaf identity).** In a finite tree with at least two vertices, if $L$ is the number of leaves, then
$$
L=2+\\sum_{\\substack{v\\in V\\\\d(v)\\ge3}}(d(v)-2).
$$

*Proof.* Every degree is at least one. The handshake lemma and tree edge count give $\\sum_v d(v)=2n-2$, hence $\\sum_v(d(v)-2)=-2$. Leaves contribute negative one each, degree-two vertices contribute zero, and higher degrees contribute their excess above two. Rearranging proves the formula. ∎

The identity quantifies branching: every degree above two requires additional leaves. Vertices of degree two merely subdivide routes and do not alter the leaf balance. It is a necessary relation for a tree's degree data; later, Prüfer coding will show that every positive integer degree list summing to $2n-2$ is in fact realised by a labelled tree.

**Definition 3.10 (Rooted tree).** A rooted tree is a tree together with a distinguished vertex $r$. For $v\\ne r$, its parent is the neighbour immediately preceding it on the unique path from $r$ to $v$. Its depth is that path's length. Children are vertices with that parent. A descendant of $v$ is a vertex whose root path contains $v$, including $v$ itself under this convention.

Each nonroot vertex has exactly one parent. The parent relation is a consequence of a unique path, not a choice among several search routes. Every tree edge joins a parent and child. Indeed, the $n-1$ nonroot vertices supply $n-1$ distinct parent edges, because each edge is directed from greater depth to smaller depth and cannot serve as a parent edge in both directions. The tree has only $n-1$ edges, so these exhaust it.

Sibling order is not part of a rooted tree unless specified separately. An ordered rooted tree adds an order to each vertex's children. Likewise, “binary tree” may mean at most two children or may include named left and right positions; those are different counted classes. Drawing one child to the left of another does not automatically declare that order to be mathematical data.

### Worked example 3.11 (Rooting and checking the leaf balance)

Let $T$ have vertex set $[6]$ and edges $12,13,34,35,56$. Every vertex reaches three, and there are five edges, so Theorem 3.7 proves it is a tree. Its degrees are $(2,1,3,1,2,1)$, with leaves two, four, and six. The leaf identity gives $L=2+(3-2)=3$, agreeing with the explicit list.

Root the tree at three. The vertices one, four, and five have depth one; two and six have depth two. Their parents are respectively three, three, three, one, and five. Rooting at one would change these parent relations and depths while leaving the underlying unrooted tree unchanged. The centre of the drawing is irrelevant; the root is an explicitly chosen vertex.

The induced subgraph on a vertex and all its descendants is its rooted subtree. In this example the subtree rooted at five has vertices five and six. Removing that entire subtree differs from deleting just vertex five, which would leave six isolated. Rooted language makes the intended operation unambiguous.

## Prüfer encoding records successive leaf deletions

For labelled trees, labels are part of the counted outcome. We count trees with the fixed vertex set $[n]$, so two different edge sets are different even if they are isomorphic. The total order of the labels gives a deterministic rule for choosing a leaf, which makes a short code possible.

**Definition 3.12 (Prüfer code).** For a tree on $[n]$ with $n\\ge2$, repeatedly remove the smallest-labelled leaf and record its unique neighbour. Stop when two vertices remain. The resulting word of length $n-2$ over the alphabet $[n]$ is its Prüfer code.

The leaf lemma ensures that every step with at least three vertices has an available leaf. Deleting it leaves a tree, so the operation can continue until precisely two vertices remain, joined by one edge. There are exactly $n-2$ deletions. For $n=2$ the code is the unique empty word; for $n=1$ we count its single tree separately and do not use this encoding definition.

**Lemma 3.13 (Degrees in the code).** A label $i$ appears in the code exactly $d_T(i)-1$ times. More generally, at any intermediate stage, the remaining code contains $i$ exactly one fewer time than its degree in the remaining tree. Thus the current leaves are exactly the remaining labels absent from the remaining code.

*Proof.* Each time a neighbour of $i$ is deleted while $i$ remains, an incident edge is lost and $i$ is recorded once. Exactly one incident edge is not lost in this way: the edge removed when $i$ itself is eventually deleted as a leaf, or its final edge when $i$ is one of the last two vertices. Hence all but one of its original incident edges cause an occurrence of $i$. The same argument applies to the tree at any intermediate stage and the code still to be produced. Its degrees are positive while at least two vertices remain, so degree one is equivalent to zero remaining occurrences. ∎

### Worked example 3.14 (Encoding a six-vertex tree)

Use the tree from Worked example 3.11. Its initial leaves are two, four, and six, so delete two and record one. The residual leaves are one, four, and six; delete one and record three. Then delete four and record three. The remaining path is $3-5-6$; delete three and record five. The final edge is $56$, giving code
$$
(1,3,3,5).
$$

Label three appears twice and has degree three; labels one and five appear once and have degree two; the other labels are absent and are leaves. The occurrences therefore reproduce the entire degree list. The order of deletions matters for the word, so “delete any leaf” would not define this particular encoding without an additional choice rule.

## Decoding and proving the bijection

**Theorem 3.15 (Prüfer bijection).** For $n\\ge2$, Prüfer coding is a bijection between trees on $[n]$ and all words of length $n-2$ over $[n]$.

*Proof.* We construct a decoder and prove both inverse statements. Begin with active label set $A=[n]$ and the supplied word. While the word is nonempty, let $c$ be its first entry. Choose the smallest label $\\ell$ in $A$ absent from the whole remaining word, add edge $\\ell c$, remove $\\ell$ from $A$, and remove the first word entry. At the end join the two active labels.

This rule is always possible. When $|A|=r$, the word has length $r-2$, so at least two active labels are absent from it. All entries are active initially; removing a label absent from the word preserves that property. Since $c$ occurs, $\\ell\\ne c$, so no loop is created. The process ends with two labels and no entries.

The result is a tree. Read the construction backwards: begin with the final edge and successively attach each deleted label to its recorded neighbour, which was still active when the label was deleted. Attaching a new vertex by one edge preserves connectedness and acyclicity. The reverse construction therefore yields a tree containing every label.

Now encode that decoded tree. At each residual stage, every active label has one edge for its own eventual deletion or the final pair, together with one further incident edge for every occurrence as a neighbour in the remaining word. Its residual degree is therefore one plus its number of remaining occurrences. The active leaves are precisely the labels absent from the word. The encoder consequently chooses the same smallest absent label as the decoder, records the prescribed first entry, and removes the same edge. Induction over the steps shows that encoding returns the supplied word.

Conversely, begin with a tree and its encoded word. Lemma 3.13 shows that the smallest active label absent from the remaining word is exactly the smallest leaf of the residual original tree. The first code entry is that leaf's original neighbour, so decoding restores the correct edge. Removing this common leaf reduces to the same assertion for the residual tree and word. At two vertices the final edge is forced. Induction shows that decoding the code returns the original tree. Thus the two maps are inverse bijections. ∎

The proof is stronger than counting words and observing that their number looks plausible. It establishes that every word yields a valid tree, that no two words describe the same tree, and that every tree is recovered. Finiteness and the deterministic smallest-label rule are used at specific points, rather than left as assumptions hidden in a diagram.

**Corollary 3.16 (Cayley's formula and fixed degrees).** The number of trees on $[n]$, for $n\\ge2$, is $n^{n-2}$. If positive integers $d_1,\\ldots,d_n$ satisfy $\\sum_i d_i=2n-2$, the number of such trees with $d_T(i)=d_i$ for every $i$ is
$$
\\frac{(n-2)!}{\\prod_{i=1}^n(d_i-1)!}.
$$

*Proof.* There are $n^{n-2}$ words of the specified length. The bijection proves the first count. By Lemma 3.13, the degree conditions hold exactly when label $i$ occurs $d_i-1$ times. These are nonnegative multiplicities summing to $n-2$, and the multinomial word count gives the quotient. Every such word decodes to a tree with those degrees, so these conditions also suffice for existence. ∎

There is one tree on a one-element labelled set. Cayley's expression is stated for $n\\ge2$, avoiding the need to interpret the coding procedure at negative length. A rooted labelled tree adds an independent root choice, so for $n\\ge2$ its count is $n\\cdot n^{n-2}=n^{n-1}$. None of these is an unlabelled isomorphism-type count. Dividing by $n!$ would ignore the different automorphism counts of different tree shapes.

## Counting spanning trees inside a fixed graph

Cayley's formula also counts spanning trees of $K_n$, because every tree on $[n]$ is a subgraph of the complete graph. A different ambient graph may permit far fewer trees. Its allowed edge set must remain part of the problem, rather than being discarded after noting that it is connected.

### Worked example 3.17 (A cycle with an attached branch)

Take the square with edges $12,23,34,41$ and attach the path $2-5-6$. The graph has six vertices and six edges. Every spanning tree must retain $25$ and $56$, since they are bridges. It must delete at least one square edge to eliminate the cycle.

A spanning tree has five edges, so it deletes exactly one of the six original edges. Since the two bridges cannot be deleted, precisely one of the four square edges is omitted. Each such omission leaves a connected acyclic graph, giving four spanning trees.

More generally, if a connected graph has exactly one cycle of length $q$, every edge outside the cycle is a bridge: an alternative endpoint path would create another cycle. Deleting any one cycle edge preserves connectedness and eliminates the only cycle, yielding a tree with one fewer edge. Thus the original graph has exactly as many edges as vertices. Every spanning tree must retain the edges outside the cycle and omit exactly one cycle edge. Every such omission works, so the count is $q$. This argument depends on the uniqueness of the cycle; with several cycles, choices of deleted edges can interact.

## Exercises

### Exercise 3.1
<a id="trees-ex-1"></a>

Construct a simple graph on five vertices with four edges that is not a tree. Explain which extra hypothesis, connectedness or acyclicity, would make that edge count sufficient, and prove the sufficiency.

<details>
<summary>Hint 1</summary>

**Hint.** Put a cycle in one component and use the remaining vertices in a separate component.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A connected graph cannot have fewer than $n-1$ edges; a forest has $n-c$ edges.

</details>
<details>
<summary>Solution</summary>

**Solution.** A triangle on $\\{1,2,3\\}$ together with edge $45$ has five vertices and four edges but is disconnected and cyclic. Either extra hypothesis suffices. If a connected graph with four edges had a cycle, deleting a cycle edge would give a connected five-vertex graph with three edges, impossible. If an acyclic graph has four edges, its forest count gives $4=5-c$, hence $c=1$, so it is connected and therefore a tree.

</details>

### Exercise 3.2
<a id="trees-ex-2"></a>

Prove that deleting a leaf from a tree with at least two vertices leaves a tree. Give an example showing why deleting an arbitrary vertex need not preserve connectedness.

<details>
<summary>Hint 1</summary>

**Hint.** A path between retained vertices cannot enter a degree-one vertex as an internal point.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the counterexample, remove the middle vertex of a three-vertex path.

</details>
<details>
<summary>Solution</summary>

**Solution.** Deletion cannot create a cycle. For any two retained vertices, their original unique path does not use the leaf internally because that would require two incident path edges there. Thus their path remains, proving connectedness. At least one vertex remains, so the result is a tree. In $P_3$ with edges $12,23$, deleting vertex two leaves two isolated vertices and disconnects the graph. The degree-one hypothesis controls exactly this failure.

</details>

### Exercise 3.3
<a id="trees-ex-3"></a>

A tree has eight leaves, three vertices of degree two, and every other vertex of degree four. Determine its order. Prove that such a labelled tree exists.

<details>
<summary>Hint 1</summary>

**Hint.** Use the leaf identity to find the number of degree-four vertices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For existence, a Prüfer word should repeat each degree-four label three times, each degree-two label once, and each leaf label zero times.

</details>
<details>
<summary>Solution</summary>

**Solution.** If there are $q$ degree-four vertices, the leaf identity gives $8=2+2q$, hence $q=3$. The order is $8+3+3=14$. On $[14]$, give labels one, two, and three degree four, labels four, five, and six degree two, and the remaining eight degree one. The word $(1,1,1,2,2,2,3,3,3,4,5,6)$ has length twelve and exactly the required multiplicities. Its decoded tree exists by the Prüfer theorem and has the desired degrees. The degree equation alone would determine the necessary order; the decoding theorem supplies existence.

</details>

### Exercise 3.4
<a id="trees-ex-4"></a>

A forest has nine vertices and six edges. How many components does it have? How many new edges are necessary and sufficient to make it a tree while retaining all original edges, if any missing edge between its vertices may be added?

<details>
<summary>Hint 1</summary>

**Hint.** First use the forest edge count. Each useful new edge can join two components.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Select one representative from each component and connect the representatives in a path.

</details>
<details>
<summary>Solution</summary>

**Solution.** The component count is $c=9-6=3$. At least two edges are necessary because a nine-vertex tree has eight edges. Two suffice: connect a representative of the first component to one in the second, then the second to one in the third. Each added edge joins distinct current components, so it creates no cycle and reduces their number by one. The final graph is connected and acyclic. Availability of arbitrary missing edges is part of the hypothesis; an ambient graph with forbidden cross-connections could obstruct the construction.

</details>

### Exercise 3.5
<a id="trees-ex-5"></a>

A graph consists of a five-cycle on $[5]$ and one additional vertex six adjacent only to one. Count its spanning trees and justify that every one has been included.

<details>
<summary>Hint 1</summary>

**Hint.** The leaf edge is a bridge and cannot be omitted from a connected spanning subgraph.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the original edge count with the five edges required in a six-vertex spanning tree.

</details>
<details>
<summary>Solution</summary>

**Solution.** The graph has six edges, and every spanning tree has five. Its edge $16$ must be retained to connect vertex six. Therefore a spanning tree omits exactly one of the five cycle edges. Each choice breaks the cycle while preserving all vertex connections, so every choice works and there are five. No additional trees exist because every spanning tree must have exactly this form.

</details>

### Exercise 3.6
<a id="trees-ex-6"></a>

Encode the tree on $[5]$ with edges $12,24,23,35$. Separately, decode the length-four Prüfer word $(4,4,2,4)$ on $[6]$. Verify the degrees of the decoded tree from the word.

<details>
<summary>Hint 1</summary>

**Hint.** For encoding, repeatedly remove the smallest current leaf. For decoding, use the smallest active label absent from the whole remaining word.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the active label set visible after each removal, and remember the final edge between the last two labels.

</details>
<details>
<summary>Solution</summary>

**Solution.** In the first tree delete one and record two, delete four and record two, then delete two and record three. The final edge is $35$, giving code $(2,2,3)$. For the second problem, the decoder successively adds $14,34,25,24$, then the final edge $46$. Label four occurs three times in the code and has degree four; label two occurs once and has degree two; labels one, three, five, and six are absent and have degree one. Listing the five constructed edges confirms those degrees and gives a connected six-vertex graph, hence a tree.

</details>

### Exercise 3.7
<a id="trees-ex-7"></a>

Count trees on $[6]$ with degrees $(3,2,2,1,1,1)$ assigned in that label order. Explain why positive degrees summing to ten suffice for existence here.

<details>
<summary>Hint 1</summary>

**Hint.** Translate each degree into its required number of occurrences in a length-four code.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The multiplicities are two, one, one, zero, zero, zero. Count the distinct words with those multiplicities.

</details>
<details>
<summary>Solution</summary>

**Solution.** The code must contain label one twice and labels two and three once each, with no other labels. There are $4!/(2!1!1!)=12$ such words, each yielding a distinct tree. More generally, positive degrees with sum $2n-2$ give nonnegative code multiplicities $d_i-1$ summing to $n-2$. A word with those prescribed multiplicities can be formed, and the decoder constructs a tree with exactly the stated degrees. Thus these conditions are sufficient, not merely the handshake necessity, in the labelled-tree setting.

</details>

### Exercise 3.8
<a id="trees-ex-8"></a>

On the fixed vertex set $[5]$, count the trees that are path graphs and the trees that are stars. Compare their sum with Cayley's total and explain why division by $5!$ would not count unlabelled tree types.

<details>
<summary>Hint 1</summary>

**Hint.** A linear ordering of five distinct labels describes a path, with reversal giving the same edge set. A star is determined by its centre.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Every path has exactly two endpoint-to-endpoint listings, whereas a fixed star admits arbitrary permutations of its four leaves.

</details>
<details>
<summary>Solution</summary>

**Solution.** The path count is $5!/2=60$: each path has exactly two linear traversals, one from each endpoint. The star count is five, one for each centre. These families are disjoint because their maximum degrees are two and four. Cayley's total is $5^3=125$, leaving sixty trees of other shapes. Their isomorphism classes have unequal labelled-description counts; a path has two automorphisms and a star has twenty-four. Therefore dividing all 125 labelled trees by one common factor $5!$ cannot count the unlabelled types.

</details>

### Exercise 3.9
<a id="trees-ex-9"></a>

Count rooted labelled trees on $[4]$. For the particular star centred at one and rooted at one, how many ordered rooted trees arise if an order of its children is added? Explain why these are different counting questions.

<details>
<summary>Hint 1</summary>

**Hint.** A root is an independent choice among the vertices of any labelled tree.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The specified star has three distinct labelled children at its root and no other children to order.

</details>
<details>
<summary>Solution</summary>

**Solution.** There are $4^{4-2}=16$ labelled unrooted trees, and four root choices each, giving sixty-four rooted labelled trees. The single specified rooted star has $3!=6$ possible child orders. The first count varies the entire tree and root without sibling order; the second fixes the tree and root and varies extra order data. Neither can be substituted for the other merely because both objects may be drawn with a root at the top.

</details>

### Exercise 3.10
<a id="trees-ex-10"></a>

For $n\\ge3$, fix $S\\subseteq[n]$ with $s=|S|\\le n-1$. Count labelled trees in which every vertex of $S$ is a leaf. Explain why this need not mean that $S$ is the exact leaf set, and state what happens for $n=2$.

<details>
<summary>Hint 1</summary>

**Hint.** A label is a leaf exactly when it is absent from the Prüfer word.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Every code entry must avoid $S$, but the remaining labels are not required to appear. The two-vertex code has length zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each of the $n-2$ code entries may independently use any of the $n-s$ labels outside $S$, giving $(n-s)^{n-2}$ trees. Other labels may also be absent, producing further leaves, so this counts a leaf-set containment condition rather than equality. For $n=2$ there is one tree and both vertices are leaves; any prescribed subset is therefore a subset of its leaf set. That boundary case is stated directly, avoiding an ambiguous use of a zero-letter alphabet raised to the zeroth power.

</details>

## Sources

This chapter expands the structural-tree material in Euler's [Discrete Mathematics graph chapter](/books/library-book-discrete-mathematics-proof-counting-structure/graphs-trees-connectivity/) and the local Quarto seed modules/textbooks/combinatorics/chapters/12-trees.qmd, “Trees and spanning trees”. The seed introduces Prüfer codes and Cayley's formula briefly; the encoding, decoding, and inverse arguments are developed here in full. Worked examples and exercises are newly composed, and the classical results are not claimed as new discoveries.

Primary author-written parallel reading is Reinhard Diestel, [Graph Theory, “The Basics”](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf), and Oscar Levin, [Discrete Mathematics: An Open Introduction, “Trees”](https://discrete.openmathbooks.org/dmoi4/sec_trees.html), for structural characterisations. Alexander Postnikov's [MIT 18.212 lecture 19 notes, Spring 2021](https://math.mit.edu/~apost/courses/18.212_2021/lectures/18212_lecture19.pdf) provide a primary teaching reference for Prüfer coding and decoding, as listed on the [author's course page](https://math.mit.edu/~apost/courses/18.212_2021/). This chapter uses British spelling and licenses its original prose CC BY-SA 4.0.

## Summary

Finite trees have leaves that support induction, unique paths that explain their lack of redundancy, and exactly one fewer edge than vertices. These facts prove equivalent descriptions through connectivity, acyclicity, bridges, and maximality under adding edges. Spanning trees exist inside every connected finite graph, while rooted structure adds a distinguished vertex without automatically adding sibling order.

Prüfer coding records deterministic leaf deletions, and its explicit decoder proves a bijection with words. Cayley's formula and the fixed-degree multinomial count follow from that bijection, with separate small-order cases and a clear distinction between labelled and unlabelled objects. In [Eulerian and Hamiltonian Graphs](eulerian-hamiltonian-graphs.md), we return to general graphs and ask for traversals using every edge or every vertex, where the permitted repetitions are different from a tree's unique-route structure.

`;export{e as default};