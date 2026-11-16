var e=`---
parent_id: book-graph-theory
chapter_id: graph-colouring-brooks-vizing
title: "Graph Colouring: Brooks and Vizing"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Graph Colouring: Brooks and Vizing

A colouring assigns labels so that conflicting objects receive different labels. If the objects are vertices, edges specify conflicts. If the objects are edges, sharing an endpoint specifies a conflict. These are related optimisation problems, but their local obstructions and proofs differ.

The maximum degree supplies an immediate measure of local congestion. Greedy vertex colouring always uses at most $\\Delta+1$ colours. Brooks' theorem identifies exactly when a connected graph actually needs that many. For edge colouring, the degree itself is a lower bound, and Vizing's theorem shows that one additional colour always suffices for a simple graph. The two theorems have similar-looking conclusions, but saving a vertex colour requires a carefully chosen order, whereas extending an edge colouring requires recolouring.

All graphs here are finite, undirected and simple. Thus there are no loops or parallel edges. We write $d(v)$ for degree, $\\Delta$ for maximum degree, and $N(v)$ for the open neighbourhood. Required preparation is paths, connected components, spanning trees, cutvertices and vertex cuts. A graph is 2-connected if it has at least three vertices and deleting any one vertex leaves it connected; it is 3-connected if it has at least four vertices and deleting fewer than three vertices leaves it connected.

Our aim is to prove both theorems completely, including the ordering and recolouring steps on which their short statements conceal substantial work. Planarity is unnecessary here; it becomes relevant in [Five and Four Colours](five-and-four-colours.md).

## Vertex colouring and the greedy principle

**Definition 10.1 (Proper colourings).** A proper vertex colouring is a map $c:V(G)\\to\\{1,\\ldots,q\\}$ such that $c(u)\\ne c(v)$ whenever $uv$ is an edge. The chromatic number $\\chi(G)$ is the smallest possible $q$. For a nonempty edgeless graph it is one; the empty graph may be assigned chromatic number zero.

**Lemma 10.2 (Greedy ordering).** If vertices are ordered so that every vertex has at most $q-1$ earlier neighbours, greedy colouring in that order uses at most $q$ colours. If $G$ is connected, has maximum degree at most $q$, and contains a vertex $r$ of degree less than $q$, then it is $q$-colourable.

*Proof.* At each step the earlier neighbours forbid at most $q-1$ colours, so a colour remains. For the second claim, take a spanning tree rooted at $r$ and order vertices by decreasing tree distance from $r$, breaking ties arbitrarily. Each vertex other than $r$ has its parent later in the order. Consequently it has at most $q-1$ earlier neighbours. The root also has at most $q-1$ neighbours by hypothesis. Apply the first assertion. ∎

For an arbitrary graph, every order has at most $\\Delta$ earlier neighbours per vertex, giving $\\chi(G)\\le\\Delta+1$. A clique of size $\\Delta+1$ attains that bound. An odd cycle also attains it: its maximum degree is two but alternating two colours around the cycle fails at the closing edge, while a third colour repairs the final vertex.

**Example 10.3 (A bound need not be the exact answer).** Let $G=K_{3,3}$, with independent parts $A=\\{a_0,a_1,a_2\\}$ and $B=\\{b_0,b_1,b_2\\}$ and all nine cross-edges. Its maximum degree is three. Colour every vertex of $A$ with colour one and every vertex of $B$ with colour two. This is proper, and an edge prevents a one-colouring, so $\\chi(G)=2$.

A general greedy guarantee gives four colours, and Brooks will improve that guarantee to three. Neither upper bound asserts that three colours are necessary. The explicit two-colouring and the edge lower bound establish the exact answer. Keeping bounds separate from exact values is particularly useful when a theorem depends only on maximum degree.

## Finding the two vertices that share a colour

The difficult regular case of Brooks' theorem needs two nonadjacent neighbours whose deletion leaves a connected graph. The following elementary terminal-piece argument supplies them without assuming that every regular graph is 3-connected.

**Lemma 10.4 (A terminal piece).** Let $H$ be connected with minimum degree at least two, and let $u$ be a cutvertex. In each component $C$ of $H-u$, there are a nonempty set $S\\subseteq C$ and a vertex $z\\notin S$ such that every edge from $S$ to its complement ends at $z$, and the induced graph $H[S\\cup\\{z\\}]$ is 2-connected.

*Proof.* Initially $S=C$ and $z=u$ have the required single-attachment property, and $H[S]$ is connected. Choose a pair with these properties and $S$ inclusion-minimal within $C$. Connectivity of $H$ ensures that there is at least one attachment edge.

Put $B=H[S\\cup\\{z\\}]$. Deleting $z$ leaves the connected graph $H[S]$. Suppose some $w\\in S$ is a cutvertex of $B$. Choose a component $D$ of $B-w$ not containing $z$. It is a nonempty proper subset of $S$, its induced graph is connected, and every edge from $D$ to the rest of $H$ ends at $w$. Indeed, an edge within $B$ to another component would contradict the choice of $D$, while an edge outside $B$ could only go to $z$ and would connect $D$ to $z$. Thus $(D,w)$ contradicts the minimality of $S$.

Therefore $B$ has no cutvertex. Also $S$ cannot consist of one vertex: that vertex would have only the possible neighbour $z$ in all of $H$, contradicting minimum degree at least two. Hence $B$ has at least three vertices and is 2-connected. ∎

**Lemma 10.5 (Brooks ordering configuration).** If $G$ is a connected $r$-regular graph, $r\\ge3$, which is 2-connected and not complete, then some vertex $v$ has nonadjacent neighbours $a,b$ such that $G-\\{a,b\\}$ is connected.

*Proof.* If $G$ is 3-connected, deletion of any two vertices preserves connectivity. Moreover every vertex has two nonadjacent neighbours. Otherwise its $r$ neighbours together with that vertex would form $K_{r+1}$, and regularity would leave those vertices no neighbours outside this clique. Connectivity would force $G=K_{r+1}$, contrary to hypothesis. This proves the claim in the 3-connected case.

Otherwise a two-vertex cut $\\{u,v\\}$ exists. The graph $H=G-v$ is connected because $G$ is 2-connected; it has cutvertex $u$ and minimum degree at least $r-1\\ge2$. Choose two distinct components of $H-u$, and apply Lemma 10.4 in each to obtain terminal pieces $S_1,S_2$ with attachments $z_1,z_2$.

The vertex $v$ has a neighbour inside each $S_i$. If it had none inside $S_i$, deleting $z_i$ from $G$ would separate $S_i$ from $v$, contradicting 2-connectivity. Choose $a\\in S_1\\cap N(v)$ and $b\\in S_2\\cap N(v)$. They are nonadjacent because their pieces lie in different components of $H-u$.

Deleting $a$ from the 2-connected graph on $S_1\\cup\\{z_1\\}$ leaves that piece connected to its attachment, and the same holds for $b$ in the other piece. The graph outside $S_1\\cup S_2$ is connected: a path in $H$ can enter a terminal piece only through its sole attachment, so any excursion into that piece can be removed from the path. Each surviving part of either piece still reaches its attachment after its chosen vertex is deleted. Thus $H-\\{a,b\\}$ is connected. Finally $v$ retains at least $r-2\\ge1$ neighbours, so adding $v$ back preserves connectivity. ∎

The degree-three condition does real work. It prevents a terminal piece from collapsing to a single leaf in $H$, and it ensures that $v$ still attaches after two neighbours are removed. A cycle requires separate treatment rather than an application with these hypotheses silently weakened.

## Brooks' theorem

**Theorem 10.6 (Brooks).** If a finite connected simple graph is neither complete nor an odd cycle, then
$$
\\chi(G)\\le\\Delta(G).
$$
For a connected complete graph or odd cycle, $\\chi(G)=\\Delta(G)+1$.

*Proof.* Complete graphs require a different colour on every vertex. Odd cycles require three colours and have maximum degree two, as explained above.

Now suppose neither exception occurs. Connected graphs of maximum degree at most two are paths or cycles, apart from the complete graphs of order one and two. A path with at least three vertices and an even cycle are two-colourable by alternation, proving the claim in these cases. We may assume $\\Delta\\ge3$.

If $G$ is not regular, some vertex has degree less than $\\Delta$, and Lemma 10.2 applies. Suppose next that $G$ is regular and has a cutvertex $c$. For each component $C$ of $G-c$, let $G_C=G[C\\cup\\{c\\}]$. It is connected with maximum degree at most $\\Delta$. Since $c$ has neighbours in at least two components, its degree inside each $G_C$ is less than $\\Delta$. Lemma 10.2 colours each $G_C$ with the same palette of $\\Delta$ colours. Permute colour names independently in these colourings so that all give $c$ colour one. They combine to a proper colouring of $G$, because there are no edges between different components of $G-c$.

The remaining graph is regular, 2-connected and not complete. Obtain $v,a,b$ from Lemma 10.5. Colour $a,b$ both with colour one; this is permitted because they are nonadjacent. Take a spanning tree of the connected graph $G-\\{a,b\\}$, rooted at $v$. Colour its other vertices in decreasing tree distance, using the $\\Delta$-colour palette. Every such vertex has an uncoloured parent and hence at most $\\Delta-1$ coloured neighbours. Finally colour $v$. It may have $\\Delta$ coloured neighbours, but $a,b$ are two of them with the same colour. Thus at most $\\Delta-1$ distinct colours are forbidden, and a colour remains. This proves the theorem in every case. ∎

**Example 10.7 (Why both exceptions are necessary).** The graph $K_4$ has degree three at every vertex and needs four colours, so regularity alone does not guarantee three-colourability. The cycle $C_5$ has maximum degree two and needs three colours, so excluding complete graphs alone is insufficient.

In contrast, $C_6$ has an alternating two-colouring: label its vertices cyclically $v_1,\\ldots,v_6$ and assign colour one at odd indices and colour two at even indices. The closing edge joins $v_6$ to $v_1$ and has different endpoint colours. The distinction between odd and even cycles is exactly the parity of this final constraint. Brooks classifies when the universal $\\Delta+1$ bound is needed, rather than classifying every graph's chromatic number.

## Edge colours and alternating paths

**Definition 10.8 (Edge colouring and missing colours).** A proper edge colouring assigns colours to edges so that any two edges sharing an endpoint have different colours. Its minimum palette size is the chromatic index $\\chi'(G)$. In a partial proper edge colouring, a colour is *missing* at a vertex if no currently coloured incident edge has that colour.

The $\\Delta$ edges at a maximum-degree vertex need distinct colours, so $\\chi'(G)\\ge\\Delta$. Colour classes are matchings. With a palette of $\\Delta+1$ colours, every vertex has a missing colour even in a complete proper colouring of the currently coloured edges. An uncoloured edge need not have a common missing colour at its two endpoints, which is why recolouring is needed.

**Lemma 10.9 (Two-colour path interchange).** In a proper partial edge colouring, the subgraph of edges bearing two fixed distinct colours $\\alpha,\\beta$ has maximum degree two. Each nontrivial component is a path or an even cycle. Interchanging the two colours on one entire component preserves properness. If $\\alpha$ is missing at $x$, its component is a path with endpoint $x$, possibly an isolated vertex.

*Proof.* At a vertex at most one incident edge has each colour. An internal degree-two vertex therefore has one of each, so colours alternate along a component. A cycle must have even length for the alternation to close. At internal vertices an interchange preserves the pair of colours. At a path endpoint the new colour was missing there; otherwise the component could have continued. No edge outside the component of either colour meets it. Other colours are unchanged. These observations prove properness and the endpoint statement. ∎

The corresponding vertex-colouring operation swaps two colours on a connected component induced by those colours. Its components may branch, so it must not be confused with the edge-colouring path structure just proved.

## Fans and rotation

**Definition 10.10 (A fan).** Fix a vertex $x$ and an uncoloured edge $xv_0$. A fan centred at $x$ is a sequence of distinct neighbours $v_0,v_1,\\ldots,v_k$ such that, for $1\\le i\\le k$, the edge $xv_i$ is coloured and its colour is missing at $v_{i-1}$. A fan is maximal if no new neighbour can be appended while preserving this condition.

A fan exists because the one-vertex sequence $v_0$ qualifies. A maximal one exists by appending neighbours until no extension is possible; finiteness guarantees termination.

**Lemma 10.11 (Fan rotation).** For any prefix $v_0,\\ldots,v_j$ of a fan, simultaneously move the old colour of $xv_i$ to $xv_{i-1}$ for $1\\le i\\le j$, and leave $xv_j$ uncoloured. The result is a proper partial colouring with the same set of missing colours at $x$. If a colour is missing at both $x$ and $v_j$, the rotation followed by assigning that colour to $xv_j$ colours one additional edge.

*Proof.* At $x$, the same distinct colours remain incident, merely on different edges. At $v_{i-1}$ the incoming colour was missing by the fan condition. At $v_j$ one colour is removed. Distinct leaves ensure these changes do not interfere. Thus properness is preserved, and a colour missing at $v_j$ remains missing after its incident fan edge is removed. The final assignment is therefore permitted at both endpoints. ∎

**Example 10.12 (A rotation written out).** Let $x$ be the centre of a three-edge star with leaves $a,b,c$. Use palette $\\{1,2,3,4\\}$, leave $xa$ uncoloured, and colour $xb$ with one and $xc$ with two. Then $a,b,c$ is a fan: one is missing at $a$, and two is missing at $b$.

Rotating the whole fan assigns one to $xa$, two to $xb$, and leaves $xc$ uncoloured. Colour three was missing at both $x$ and $c$, so assign it to $xc$. The final incident colours are one, two and three, all distinct. There was also a direct way to colour the original uncoloured star edge; the purpose here is to display exactly how a rotation transports an uncoloured position without changing the centre's used-colour set.

## The extension lemma and Vizing's theorem

**Lemma 10.13 (Vizing extension).** In a finite simple graph of maximum degree at most $\\Delta$, any proper colouring of all but one edge with a palette of $\\Delta+1$ colours can be changed to a proper colouring of all edges with the same palette.

*Proof.* Write the uncoloured edge as $xv_0$ and choose a maximal fan $v_0,\\ldots,v_k$. Choose a colour $\\alpha$ missing at $x$ and a colour $\\beta$ missing at $v_k$. If $\\beta$ is also missing at $x$, rotate the entire fan and finish by Lemma 10.11.

Otherwise exactly one edge incident with $x$ has colour $\\beta$. Its other endpoint must lie in the fan: if it were outside, it could be appended because $\\beta$ is missing at the last leaf. Thus it is $xv_j$ for some $1\\le j\\le k$. The fan condition says $\\beta$ is missing at $w=v_{j-1}$.

Let $P$ be the entire $\\alpha,\\beta$ component containing $x$. It is a path beginning at $x$, whose first edge is the $\\beta$-coloured edge $xv_j$, because $\\alpha$ is missing at $x$. Swap $\\alpha$ and $\\beta$ on $P$. This preserves properness and makes $\\beta$ missing at $x$.

There are two cases. If $w$ is not on $P$, then $\\beta$ remains missing at $w$. The prefix ending at $w$ remains a fan: none of its centre edges originally had colour $\\alpha$ or $\\beta$, so those colours and the corresponding missing-colour conditions have not changed. Rotate that prefix and assign $\\beta$ to its last edge.

If $w$ is on $P$, it must be the other endpoint, because it was missing $\\beta$ before the swap. The last fan leaf $v_k$ also lacked $\\beta$ and is distinct from both endpoints $x,w$; it therefore cannot lie on $P$. Hence $\\beta$ remains missing at $v_k$. The entire fan remains a fan after the swap. All conditions except possibly the one at $w$ concern colours different from $\\alpha,\\beta$ and are unchanged. The exceptional centre edge $xv_j$ changes from $\\beta$ to $\\alpha$, while $\\alpha$ becomes missing at $w$, exactly the condition needed there. Rotate the whole fan and assign $\\beta$ at its end.

In either case, exactly one additional edge receives a colour. No originally coloured edge is lost at the end of the operation. ∎

**Theorem 10.14 (Vizing).** Every finite simple graph satisfies
$$
\\Delta(G)\\le\\chi'(G)\\le\\Delta(G)+1.
$$

*Proof.* The lower bound was proved at a maximum-degree vertex. For the upper bound, fix the full graph's value $\\Delta$ and a palette of $\\Delta+1$ colours. Induct on the number of edges. Delete one edge, colour the smaller graph by induction with this palette, and use Lemma 10.13 to restore the deleted edge. The graph with no edges starts the induction. If the whole graph is edgeless, its chromatic index is zero and the inequality also holds. ∎

**Example 10.15 (Both edge-colouring outcomes occur).** An odd cycle has $\\Delta=2$ but cannot have a two-edge-colouring: successive edges would have to alternate, and the final edge would conflict at the closing vertex. Three colours suffice by alternating two on a path obtained by deleting an edge and using the third on that edge. Thus its chromatic index is three.

For $K_{3,3}$, colour $a_ib_j$ with the residue $i+j$ modulo three, interpreted as three colour names. At a fixed endpoint, varying the other index gives all three residues, so incident edges differ. Hence $\\chi'(K_{3,3})=3=\\Delta$. The vertex chromatic number of this same graph is two, as Example 10.3 showed. Vertex and edge chromatic numbers measure different conflicts.

The simplicity hypothesis is essential. Three vertices with two parallel edges on each pair have maximum degree four but six mutually incident edges, so require six edge colours, exceeding $\\Delta+1=5$. Loops prevent a proper vertex colouring altogether. The theorems should not be transferred to another graph convention without changing their statements.

## Exercises

### Exercise 10.1
<a id="graph-colouring-brooks-vizing-ex-1"></a>

Prove that every connected graph with maximum degree at most $q$ and a vertex of degree at most $q-1$ has a greedy $q$-colouring. Explain why the root must be coloured last.

<details><summary>Hint 1</summary>

Root a spanning tree at the specified vertex.

</details>
<details><summary>Hint 2</summary>

Every other vertex should still have an uncoloured parent when its colour is selected.

</details>
<details><summary>Solution</summary>

Order vertices by decreasing distance from the root in the spanning tree. Every nonroot has a later parent and therefore at most $q-1$ earlier neighbours. The root has at most $q-1$ neighbours in total. Greedy colouring succeeds from a $q$-colour palette at every step. If the root were first, its low degree would help only that first step; the last vertex might instead have all $q$ neighbours already coloured with distinct colours. The ordering carries the available space through the entire graph.

</details>

### Exercise 10.2
<a id="graph-colouring-brooks-vizing-ex-2"></a>

Determine the vertex chromatic numbers of $K_5$, $C_7$ and $C_8$, giving an upper and lower argument for each.

<details><summary>Hint 1</summary>

In a clique every pair conflicts; on a cycle try alternating two colours.

</details>
<details><summary>Hint 2</summary>

For an odd cycle, inspect the final edge after the first vertex is coloured.

</details>
<details><summary>Solution</summary>

The five vertices of $K_5$ need distinct colours and five plainly suffice, so its chromatic number is five. A two-colouring of $C_7$ would be forced to alternate and give the same colour to the endpoints of the closing edge, so at least three are needed. Alternate two colours on its first six vertices and give the seventh a third colour to obtain three. The cycle $C_8$ alternates consistently around all eight vertices and has an edge, so its chromatic number is two. These are the complete-graph, odd-cycle and nonexceptional cycle cases of Brooks.

</details>

### Exercise 10.3
<a id="graph-colouring-brooks-vizing-ex-3"></a>

Let $G$ be connected and $r$-regular. Show that if one vertex's neighbours form a clique, then $G=K_{r+1}$.

<details><summary>Hint 1</summary>

Consider the closed neighbourhood consisting of that vertex and its neighbours.

</details>
<details><summary>Hint 2</summary>

Every vertex in this clique already has $r$ neighbours inside it.

</details>
<details><summary>Solution</summary>

The closed neighbourhood has $r+1$ vertices and induces a clique. Each vertex there is adjacent to all the other $r$ vertices, so regularity forbids any additional neighbour outside. It is therefore a connected component. Since $G$ is connected, it is the whole graph. Without regularity, a clique could have other vertices attached, so the argument would fail.

</details>

### Exercise 10.4
<a id="graph-colouring-brooks-vizing-ex-4"></a>

Suppose nonadjacent vertices $a,b$ share a neighbour $v$ and $G-\\{a,b\\}$ is connected, with maximum degree at most $q$. Prove directly that $G$ is $q$-colourable.

<details><summary>Hint 1</summary>

Give $a,b$ the same colour before colouring the rest.

</details>
<details><summary>Hint 2</summary>

Root a spanning tree of the remaining graph at $v$ and leave $v$ until last.

</details>
<details><summary>Solution</summary>

Precolour $a,b$ with colour one. In the remaining connected graph, colour nonroot vertices in reverse tree distance from $v$. Each has an uncoloured parent and at most $q-1$ coloured neighbours. At the last vertex $v$, the two neighbours $a,b$ use the same colour, so at most $q-1$ distinct colours occur among its at most $q$ neighbours. A $q$-colour palette therefore succeeds. The connectedness hypothesis is what supplies a later parent for every other remaining vertex.

</details>

### Exercise 10.5
<a id="graph-colouring-brooks-vizing-ex-5"></a>

A connected regular graph has a cutvertex $c$ and maximum degree $q$. Explain why the pieces induced by $c$ and each component of $G-c$ can be coloured with $q$ colours and then combined.

<details><summary>Hint 1</summary>

The degree of $c$ decreases inside each separate piece.

</details>
<details><summary>Hint 2</summary>

Colour names may be permuted without affecting properness.

</details>
<details><summary>Solution</summary>

Each piece is connected and has maximum degree at most $q$. Since $c$ has neighbours in at least two components, its degree in any one piece is at most $q-1$. The deficient-root greedy lemma therefore colours the piece with $q$ colours. Permute names so that $c$ has colour one in every piece. All shared vertices now agree, and there are no edges between distinct components of $G-c$. The colourings combine into a proper colouring of the whole graph.

</details>

### Exercise 10.6
<a id="graph-colouring-brooks-vizing-ex-6"></a>

Prove that each colour class in a proper edge colouring is a matching, and deduce that $K_5$ needs five edge colours.

<details><summary>Hint 1</summary>

Two edges of the same colour may not share an endpoint.

</details>
<details><summary>Hint 2</summary>

A matching on five vertices contains at most two edges; compare this with the ten edges of $K_5$ and apply Vizing.

</details>
<details><summary>Solution</summary>

The definition of a proper edge colouring says exactly that edges sharing a colour are pairwise endpoint-disjoint, hence a matching. Such a matching in $K_5$ has size at most two. Four colours would therefore cover at most eight edges, fewer than the ten present. Thus $\\chi'(K_5)\\ge5$. Since its maximum degree is four, Vizing gives $\\chi'(K_5)\\le5$, proving equality. The degree lower bound alone would give only four.

</details>

### Exercise 10.7
<a id="graph-colouring-brooks-vizing-ex-7"></a>

Explain why interchanging two edge colours on an entire alternating component preserves properness, while interchanging them on an arbitrary initial segment of a path may fail.

<details><summary>Hint 1</summary>

Check incident colours at internal vertices and endpoints separately.

</details>
<details><summary>Hint 2</summary>

At a newly created endpoint of a truncated segment, an unchanged next edge may have the new colour.

</details>
<details><summary>Solution</summary>

Inside a full component, each degree-two vertex retains one edge of each colour. At a true endpoint, the replacement colour was missing before the swap, or the component would extend. No outside edge of either colour meets the component. For a truncated segment, however, the next unswapped edge at the truncation point can acquire the same colour as the swapped preceding edge. For example, swapping only the first edge of a two-edge path coloured $\\alpha,\\beta$ changes its colours to $\\beta,\\beta$, creating a conflict at the middle vertex.

</details>

### Exercise 10.8
<a id="graph-colouring-brooks-vizing-ex-8"></a>

A fan has centre $x$, leaves $v_0,v_1,v_2$, uncoloured edge $xv_0$, and colours four and two on $xv_1,xv_2$. State the missing-colour conditions that make it a fan. If colour three is missing at $x$ and $v_2$, give the completed rotation.

<details><summary>Hint 1</summary>

Each coloured centre edge supplies a colour to its preceding leaf.

</details>
<details><summary>Hint 2</summary>

Transport the uncoloured position to the last leaf before inserting colour three.

</details>
<details><summary>Solution</summary>

Colour four must be missing at $v_0$, and colour two must be missing at $v_1$. Assign four to $xv_0$, two to $xv_1$, and leave $xv_2$ temporarily uncoloured. The fan conditions make these assignments valid at the leaves, and the centre retains the same two used colours. Now give $xv_2$ colour three, missing at both endpoints. The result has one more coloured edge and remains proper.

</details>

### Exercise 10.9
<a id="graph-colouring-brooks-vizing-ex-9"></a>

In the extension lemma, suppose the predecessor $w$ of the fan's $\\beta$ edge lies on the $\\alpha,\\beta$ path starting at $x$. Prove that the last leaf $v_k$ cannot also lie on that path.

<details><summary>Hint 1</summary>

Both $w$ and $v_k$ were missing $\\beta$ before the swap.

</details>
<details><summary>Hint 2</summary>

A vertex missing one of the two colours has degree at most one in the two-colour subgraph.

</details>
<details><summary>Solution</summary>

The path starts at $x$, which lacks $\\alpha$. Since $w$ lacks $\\beta$ and lies on the path, it cannot be internal and is the other endpoint. The leaf $v_k$ is distinct from $x$ and $w$: the predecessor of a coloured fan edge occurs before the last leaf. If $v_k$ lay on the path, its missing $\\beta$ would also force it to be an endpoint, producing a third endpoint. A path has only two, so this is impossible. Thus swapping on the path leaves $\\beta$ missing at $v_k$.

</details>

### Exercise 10.10
<a id="graph-colouring-brooks-vizing-ex-10"></a>

Prove that $K_{s,s}$ has chromatic index $s$ for each positive integer $s$. Give an explicit colouring and explain why this does not follow from Brooks' theorem.

<details><summary>Hint 1</summary>

Label the two parts by residues $0,\\ldots,s-1$.

</details>
<details><summary>Hint 2</summary>

Colour the edge joining indices $i,j$ by their sum modulo $s$.

</details>
<details><summary>Solution</summary>

Use $s$ colours represented by residues modulo $s$, and colour $a_ib_j$ with $i+j$ modulo $s$. At a fixed $a_i$, varying $j$ gives each residue exactly once, and the same holds at any fixed $b_j$ while varying $i$. Thus the colouring is proper. Every vertex has degree $s$, so at least $s$ edge colours are necessary, establishing equality. Brooks concerns vertex colouring and bounds $\\chi$, not the edge chromatic index $\\chi'$. Translating to an edge-conflict graph would also change the relevant maximum degree.

</details>

## Sources

The exposition and exercises are original treatments of classical results. For the ordering approach, see L. Lovász, [Three Short Proofs in Graph Theory](https://doi.org/10.1016/0095-8956(75)90089-1), *Journal of Combinatorial Theory, Series B* 19 (1975), 269–271. For a constructive fan proof, see J. Misra and David Gries, [A Constructive Proof of Vizing's Theorem](https://www.cs.utexas.edu/~misra/psp.dir/vizing.pdf), September 1990. These primary references were consulted on 13 November 2026. The terminal-piece and fan arguments above supply their hypotheses and intermediate steps explicitly; no passage has been copied.

## Summary

Greedy colouring succeeds when an order limits earlier neighbours. Brooks improves the vertex bound to $\\Delta$ except for complete graphs and odd cycles, using a deficient root, a cutvertex decomposition, or two nonadjacent neighbours sharing a colour. The terminal-piece lemma justifies that last configuration even in regular graphs with a two-vertex cut. Edge colouring has the lower bound $\\Delta$; Vizing gives the upper bound $\\Delta+1$ through alternating-path swaps and fan rotation. Both results depend on simple graphs, and neither should be confused with an exact chromatic-number calculation for every graph. The next chapter adds plane embeddings and a topological reason that one of two recolourings must work.

`;export{e as default};