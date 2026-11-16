var e=`---
parent_id: book-graph-theory
chapter_id: five-and-four-colours
title: "Five and Four Colours"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Five and Four Colours

Planarity restricts how paths can pass one another. A colouring proof can use that restriction even when the desired conclusion does not mention a drawing. The five-colour theorem is a particularly clear example: if one recolouring is blocked by a two-colour path, that path separates the plane and forces another recolouring to be available.

The central question is how to extend a colouring across a deleted vertex. An average-degree argument finds a vertex with at most five neighbours. Four or fewer neighbours are easy with five colours, but five differently coloured neighbours can use the entire palette. We shall prove that a Kempe interchange resolves this final obstruction, using the cyclic order of the five incident edges.

Required preparation is [Graph Colouring: Brooks and Vizing](graph-colouring-brooks-vizing.md), connected components, plane embeddings, Euler's formula and simple cycles. For a preparatory treatment of Euler's formula, see [Planarity, Colouring and Matchings](../discrete-mathematics-proof-counting-structure/planarity-coloring-matchings.md). We use the Jordan curve theorem in its standard plane-graph form: a simple drawn cycle separates the plane into an inside and an outside, and a path joining these regions must meet the cycle.

Every graph is finite and simple unless explicitly discussing a dual multigraph. A planar graph admits a crossing-free drawing; a plane graph is a graph with one such drawing fixed. Colouring is an abstract property, but the separation argument uses a chosen drawing. We prove the five-colour theorem here. The stronger four-colour theorem will be stated as a cited computer-assisted result, with its proof's scope clearly distinguished from the arguments supplied in this chapter.

## Finding a vertex to delete

**Lemma 11.1 (The planar low-degree lemma).** Every nonempty finite simple planar graph has a vertex of degree at most five.

*Proof.* Choose a connected component. If it has one or two vertices, one of its vertices has degree at most one in the whole graph, and we are done. Otherwise let the component have $n\\ge3$ vertices, $m$ edges and $f$ faces in a plane drawing.

Euler's formula gives $n-m+f=2$. Counting edge-sides over face-boundary walks gives total length $2m$. Simplicity and connectedness with at least three vertices ensure every face-boundary walk has length at least three. A bridge may occur twice on a boundary walk, but its two sides are still counted; it does not invalidate the count. Consequently $3f\\le2m$, and substitution gives $m\\le3n-6$.

The degree sum is $2m$, so the average degree is at most $6-12/n<6$. Thus some vertex has degree at most five. Its component degree is its degree in the whole graph. ∎

The conclusion says that a low-degree vertex exists, not that maximum degree is at most five. A wheel can have a hub with arbitrarily many neighbours while remaining planar. Also, every subgraph of a planar graph is planar, so the low-degree lemma applies repeatedly as vertices are removed.

**Proposition 11.2 (The elementary six-colour bound).** Every finite simple planar graph is six-colourable.

*Proof.* Induct on the number of vertices, starting with the empty graph. Remove a vertex of degree at most five. By induction the remaining graph has a six-colouring. At most five colours occur on the removed vertex's neighbours, leaving a sixth colour available when it is restored. ∎

This proof does not give five colours: a vertex of degree five can see all five colours. Nor does the average degree below six imply a vertex of degree at most four. The next argument addresses exactly the obstruction that greedy extension leaves unresolved.

## Kempe components

**Definition 11.3 (Kempe component and interchange).** In a proper vertex colouring, choose two distinct colours $i,j$. The subgraph induced by all vertices coloured $i$ or $j$ is the two-colour subgraph. A connected component of it is an $(i,j)$ Kempe component. A Kempe interchange swaps $i$ and $j$ at every vertex of one whole component.

**Lemma 11.4 (Vertex-colour interchange).** A Kempe interchange preserves proper vertex colouring.

*Proof.* An edge inside the chosen component still has differently coloured endpoints: its two colours are simply exchanged. An edge with neither endpoint in the component is unchanged. For an edge with exactly one endpoint in the component, its other endpoint cannot have colour $i$ or $j$, since then it would belong to the same component. Its colour therefore differs from either possible new colour at the changed endpoint. These cases cover every edge. ∎

The word “component” is essential. Swapping colours on an arbitrary part of a component can create a conflict across its boundary. Also, a vertex Kempe component need not be a path; it may branch. This differs from the two-colour edge subgraphs used in Vizing's proof, whose maximum degree is two.

**Example 11.5 (What a wheel already tells us).** Form a wheel by joining a new hub $v$ to every vertex of the five-cycle $v_1v_2v_3v_4v_5v_1$. Draw the cycle as a pentagon and the hub inside, with five noncrossing spokes. The graph is planar.

The rim needs three colours because it is an odd cycle. The hub is adjacent to every rim vertex, so its colour cannot be any colour used on the rim; at least four colours are necessary. Colour the rim cyclically $1,2,1,2,3$ and the hub $4$. This is a proper four-colouring, proving the exact chromatic number is four.

The graph illustrates two separate facts. First, a planar graph can require more than three colours. Second, the mere presence of a degree-five vertex does not imply five colours are necessary. The induction proof must be able to alter a particular colouring of the rim even though that rim might already admit a better one.

## The separation that makes recolouring work

**Lemma 11.6 (Alternating connections around a vertex).** In a plane graph let $v_1,v_2,v_3,v_4$ be distinct neighbours of $v$, with their incident edges occurring in that cyclic order around $v$. Suppose a simple path $P$ in $G-v$ joins $v_1$ to $v_3$ and avoids $v_2,v_4$. Then no path in $G-v$ joining $v_2$ to $v_4$ can be disjoint from $P$.

*Proof.* The union of $P$ and the two edges $vv_1,vv_3$ is a simple cycle $C$: the path does not contain $v$, and its endpoints are distinct. Take a small disc around $v$ meeting incident edges only in initial segments and meeting no other part of the graph. The two cycle edges divide the disc locally into two sectors. By the prescribed cyclic order, the initial segments of $vv_2$ and $vv_4$ lie in different sectors.

Neither edge can cross the cycle. Their endpoints $v_2,v_4$ are not on it, so the Jordan curve theorem places these endpoints on opposite sides of $C$. A path between them must therefore meet $C$. A path in $G-v$ cannot meet $v$, and plane edges cannot cross the interiors of the edges $vv_1,vv_3$. Thus a meeting must occur at a vertex of $P$. This rules out a path disjoint from $P$. ∎

Cyclic order here means the order of the incident edge segments in the fixed embedding. It is not the left-to-right order of the neighbour labels, nor necessarily their order viewed from an arbitrary point in a complicated drawing. Naming the neighbours in their actual cyclic order is what makes the separation argument valid.

## The five-colour theorem

**Theorem 11.7 (Five-colour theorem).** Every finite simple planar graph has a proper vertex colouring with at most five colours.

*Proof.* Induct on the number of vertices. The empty graph is immediate. Choose $v$ of degree at most five by Lemma 11.1, and properly colour $G-v$ with the five-colour palette by induction. If its neighbours use at most four colours, give $v$ a missing colour.

The only remaining case is that $v$ has five distinct neighbours and all five colours occur among them. Fix a plane embedding of $G$ and list the neighbours as $v_1,\\ldots,v_5$ in cyclic order. Since their colours are all distinct, rename the palette so that $v_i$ has colour $i$. This renaming is one global permutation of colour names, so it preserves properness.

Consider the $(1,3)$ component containing $v_1$ in the colouring of $G-v$. If it does not contain $v_3$, interchange colours one and three on this component. The vertex $v_1$ becomes colour three, while $v_3$ remains colour three. None of the other neighbours has colour one or three. Hence colour one disappears from the neighbourhood of $v$, and assigning it to $v$ finishes the colouring.

Suppose instead that the component contains $v_3$. Choose a simple path $P$ within it from $v_1$ to $v_3$. Every vertex of $P$ has colour one or three, so it avoids $v_2$ and $v_4$. Lemma 11.6 shows that a path in $G-v$ from $v_2$ to $v_4$ cannot be disjoint from $P$. But every vertex of a $(2,4)$ path would have colour two or four, so such a path would necessarily be disjoint from $P$. Therefore there is no $(2,4)$ path from $v_2$ to $v_4$.

The $(2,4)$ component containing $v_2$ consequently excludes $v_4$. Interchange colours two and four on that component. Now both $v_2$ and $v_4$ have colour four, and no neighbour of $v$ has colour two. Give $v$ colour two. Lemma 11.4 guarantees that either interchange preserves the colouring of $G-v$, and the final colour differs from every neighbour's colour. The induction is complete. ∎

Notice that the proof performs only one interchange. In the second case, it does not first swap the blocked $(1,3)$ component. It uses the existence of the path in the original colouring to certify that another pair is disconnected in that same colouring. This distinction matters when trying to generalise Kempe arguments.

**Example 11.8 (Both extension cases on small plane graphs).** Start with the five-wheel from Example 11.5, but colour the rim $1,2,3,4,5$ in cyclic order. This is a proper five-colouring of the graph with the hub removed. In its $(1,3)$ subgraph, $v_1$ and $v_3$ are separate isolated vertices, because they are not adjacent on the rim. Swap the component $\\{v_1\\}$, changing it to colour three, and give the hub colour one.

For the other case, add the chord $v_1v_3$, drawing it outside the pentagon so that it crosses no edge. The five-colouring is still proper. Now the chord itself is a $(1,3)$ path, so the first interchange is blocked. The vertices $v_2,v_4$ remain disconnected in the $(2,4)$ subgraph: each is isolated there. Swap the component $\\{v_2\\}$ to colour four and give the hub colour two.

These explicit cases show why failure of the first option supplies useful information. The added chord obstructs one two-colour separation but cannot simultaneously create the alternating disjoint connection forbidden by planarity.

## Four colours: the result and the scope of its proof

**Theorem 11.9 (Four-colour theorem; cited result).** Every finite loopless planar graph has a proper vertex colouring using at most four colours. In particular, every finite simple planar graph satisfies $\\chi(G)\\le4$.

Parallel edges do not change which distinct vertex pairs must receive different colours, so the loopless statement reduces to the simple one. A loop would require a vertex's colour to differ from itself and must be excluded.

The theorem was established by computer-assisted work of Appel and Haken, with Koch contributing to the reducibility computations; Robertson, Sanders, Seymour and Thomas later gave another computer-assisted proof. Their [author-maintained account](https://thomas.math.gatech.edu/FC/fourcolor.html) describes the roles of unavoidable configurations and reducibility. We use the theorem as a cited result, without claiming that the preceding five-colour proof establishes it.

A different development is formal verification. Georges Gonthier's [A Computer-Checked Proof of the Four Colour Theorem](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/gonthier-4colproof.pdf) reports a formalisation checked by Coq, based largely on the Robertson–Sanders–Seymour–Thomas approach. A formal proof records the logical argument and the computational steps within a proof-checking system. It is stronger evidence than checking examples of planar graphs, which would leave infinitely many other finite graphs untreated.

**Example 11.10 (The four-colour bound is sharp).** Draw a triangle on vertices $a,b,c$, put $d$ inside, and join $d$ to all three triangle vertices. This is a plane drawing of $K_4$, with no edge crossings. Every pair of vertices is adjacent, so four different colours are necessary. Assigning one colour per vertex suffices.

Thus “at most four” is the best universal bound for planar graphs. It does not say every planar graph needs four: paths need two when they have an edge, and many planar graphs need three. The theorem supplies a universal upper bound; a particular graph needs its own lower-bound argument to establish its exact chromatic number.

## Why degree and a few swaps do not prove four colours

With five colours, the inductive obstruction has exactly five neighbours with five distinct colours. Two disjoint colour pairs can be placed in alternating cyclic positions. A path using one pair forces the other pair to be disconnected, and a single safe swap finishes the proof.

Trying to use four colours encounters a different situation. A degree-five vertex may have five neighbours carrying only four colours, with a repeated colour in a position that affects which interchanges are useful. A swap made to improve one part of the neighbourhood can change the connectivity of another two-colour subgraph. One cannot assume that several desired swaps remain independently available.

The problem is not that Kempe interchanges cease to preserve properness. Each individual interchange is valid. The difficulty is guaranteeing that a sequence achieves the intended final arrangement. Any proposed proof must track the intermediate colourings and re-establish its connectivity claims after each change. Reusing connectivity information from the original colouring after modifying it is not justified.

The computer-assisted proofs handle a much richer collection of local configurations. Their logical architecture can be explained without reproducing the case analysis: a minimal counterexample would have to contain a configuration from a specified unavoidable collection, but each listed configuration is shown to be reducible and hence absent from a minimal counterexample. These two facts are incompatible. The substantial work is proving both facts for the actual collection; this outline is not that proof.

## A glimpse of discharging

**Proposition 11.11 (Charge in a plane triangulation).** If a finite simple connected plane graph has $n\\ge3$ vertices and every face-boundary walk is a triangle, then
$$
\\sum_{v\\in V(G)}(6-d(v))=12.
$$

*Proof.* Each face has three edge-sides and each edge contributes two sides, so $3f=2m$. Combine this with Euler's formula $n-m+f=2$ to get $m=3n-6$. The degree sum is $2m$, and therefore
$$
\\sum_v(6-d(v))=6n-2m=12.
$$
∎

Think of $6-d(v)$ as an initial charge. Moving charge between vertices preserves the total, so a positive total cannot turn into a collection of nonpositive final charges. A discharging proof specifies local transfer rules and proves that the absence of certain configurations would force just that impossible final state. The identity alone does not specify suitable rules or prove that any proposed configuration is reducible.

**Example 11.12 (An octahedral triangulation).** Draw a four-cycle, add one hub inside and another outside, and join each hub to all four cycle vertices without crossings. The hubs are not adjacent. There are six vertices and twelve edges. Euler gives eight faces, and the described drawing makes every face triangular.

Every vertex has degree four, so every charge is two and the total is $6\\cdot2=12$. The graph is three-colourable: alternate colours one and two on the four-cycle and give both hubs colour three. It contains a triangle, so three colours are necessary. Equivalently it is $K_{2,2,2}$, with opposite rim vertices forming two parts and the hubs forming the third. A positive charge calculation supplies structural information, but does not by itself determine the chromatic number.

## Maps and the meaning of adjacency

For a finite plane graph, one may form its dual by placing a vertex in each face and drawing an edge across each original edge to join the incident faces. Multiple dual edges may occur, and an original bridge produces a dual loop because both its sides border the same face.

For colouring distinct faces, a face is not considered adjacent to itself. Discard those loops and merge parallel edges. The resulting face-adjacency graph is planar and simple, so the four-colour theorem colours its vertices and therefore the original faces. The outside face is included. This explains the usual map interpretation for finite graph-based maps.

Meeting at a single point does not impose a map-colouring conflict. If every region touching one point had to receive a different colour, arbitrarily many wedge-shaped regions meeting at a common point would require arbitrarily many colours. Likewise, requiring disconnected pieces of one country to share a colour changes the graph model; identifying far-apart regions need not preserve planarity. The hypotheses define the theorem's reach.

## Exercises

### Exercise 11.1
<a id="five-and-four-colours-ex-1"></a>

Prove the planar low-degree lemma, including components of order one or two. Explain why it remains applicable after any sequence of vertex deletions.

<details><summary>Hint 1</summary>

Use the planar edge bound in a component of order at least three.

</details>
<details><summary>Hint 2</summary>

Deleting vertices and incident edges from a plane drawing cannot create a crossing.

</details>
<details><summary>Solution</summary>

A component with one or two vertices has degree at most one at every vertex. Otherwise choose a component with $n\\ge3$. Euler's formula and the face-boundary count give $m\\le3n-6$, so its average degree is below six and some degree is at most five. A component degree is the whole-graph degree. Every vertex-deleted subgraph inherits a crossing-free drawing from the original, so the same argument applies at each later step. This hereditary fact supports inductive colouring.

</details>

### Exercise 11.2
<a id="five-and-four-colours-ex-2"></a>

A learner says, “Delete a vertex of degree at most five, colour the rest with five colours, and restore the vertex with the unused colour.” Identify the missing case and explain how the proved theorem repairs it.

<details><summary>Hint 1</summary>

The five neighbours may have five different colours.

</details>
<details><summary>Hint 2</summary>

The repair uses cyclic order and two possible colour-pair components.

</details>
<details><summary>Solution</summary>

If the deleted vertex has five neighbours using all five colours, there is no unused colour. Degree at most five alone proves a six-colour bound. For five colours, list these neighbours cyclically and rename their colours $1,\\ldots,5$. If the first and third are disconnected in the $(1,3)$ subgraph, swap one component. Otherwise their connecting path separates the second and fourth, making a $(2,4)$ interchange available. Either case frees a colour. The topological argument supplies the step the learner omitted.

</details>

### Exercise 11.3
<a id="five-and-four-colours-ex-3"></a>

On a three-vertex path $a-b-c$, assign colours $1,2,1$. Show why swapping colours one and two only at $a$ fails, whereas swapping the entire $(1,2)$ component succeeds.

<details><summary>Hint 1</summary>

Inspect the edge $ab$ after the first proposed change.

</details>
<details><summary>Hint 2</summary>

All three vertices belong to the same two-colour component.

</details>
<details><summary>Solution</summary>

Changing only $a$ gives colours $2,2,1$, so $ab$ has equal endpoint colours. The entire two-colour component is the full path. Swapping on it gives colours $2,1,2$, which remain different across both edges. A valid component interchange accounts for every edge leaving the changed set; an arbitrary partial swap need not do so.

</details>

### Exercise 11.4
<a id="five-and-four-colours-ex-4"></a>

Determine the chromatic number of the wheel obtained by joining a hub to every vertex of a seven-cycle.

<details><summary>Hint 1</summary>

First determine how many colours the rim needs.

</details>
<details><summary>Hint 2</summary>

The hub conflicts with every colour actually used on the rim.

</details>
<details><summary>Solution</summary>

The odd rim needs at least three colours. Since the hub is adjacent to every rim vertex, it needs a colour absent from the rim, giving a lower bound of four. Colour the first six rim vertices alternately one and two, the seventh three, and the hub four. Every rim edge and spoke has differently coloured endpoints, so this is a proper four-colouring. The exact chromatic number is four.

</details>

### Exercise 11.5
<a id="five-and-four-colours-ex-5"></a>

In the five-colour proof, suppose $v_i$ has colour $i$ and $v_1,v_3$ lie in different $(1,3)$ components. Explain why swapping the component of $v_1$ frees colour one at $v$ without changing $v_3$.

<details><summary>Hint 1</summary>

A component interchange changes only vertices in the chosen component.

</details>
<details><summary>Hint 2</summary>

Among the five neighbours, only $v_1$ initially has colour one and only $v_3$ initially has colour three.

</details>
<details><summary>Solution</summary>

The swap sends $v_1$ from one to three. Because $v_3$ is in a different component, it stays three. The other neighbours have colours two, four and five and cannot belong to the swapped two-colour component. Thus none becomes colour one. No neighbour now has colour one, and assigning it to $v$ is valid. Properness elsewhere follows from the component-interchange lemma.

</details>

### Exercise 11.6
<a id="five-and-four-colours-ex-6"></a>

Explain precisely why a $(1,3)$ path joining the first and third neighbours prevents a $(2,4)$ path joining the second and fourth, when their incident edges are cyclically ordered around the deleted vertex.

<details><summary>Hint 1</summary>

Add the two spokes to the first path to form a simple cycle.

</details>
<details><summary>Hint 2</summary>

The second path cannot share a vertex with the first because their colour sets are disjoint.

</details>
<details><summary>Solution</summary>

Choose a simple $(1,3)$ path in the graph with $v$ deleted. Together with the first and third spokes it forms a simple drawn cycle. In a small disc around $v$, the second and fourth spokes leave on opposite sides, and neither crosses the cycle. Their endpoints therefore lie on opposite sides. Any path between them avoiding $v$ must meet the first path. A $(2,4)$ path cannot do so at a vertex, since no vertex has a colour in both disjoint pairs. Edge crossings are forbidden by the plane embedding. Hence no such path exists.

</details>

### Exercise 11.7
<a id="five-and-four-colours-ex-7"></a>

Give an example where a valid $(1,2)$ Kempe interchange changes whether two vertices belong to the same $(2,3)$ component. Explain the consequence for a proposed sequence of recolourings.

<details><summary>Hint 1</summary>

Use a star whose centre has colour $1$ and whose three leaves have colours $2,3,3$.

</details>
<details><summary>Hint 2</summary>

Swap the centre and the leaf of colour $2$, which form the entire $(1,2)$ component; track the two leaves of colour $3$.

</details>
<details><summary>Solution</summary>

Use the star with edges $uv,uc,ud$ and initial colours $1,2,3,3$ on $u,v,c,d$. The vertices $c,d$ initially lie in different $(2,3)$ components: both are isolated because their only neighbour $u$ has colour $1$. Swapping the entire $(1,2)$ component $\\{u,v\\}$ gives colours $2,1,3,3$. Now $c,u,d$ form a connected $(2,3)$ component, so the same pair $c,d$ has become connected. Both full colourings are proper. Thus a valid first interchange need not preserve another pair's component structure, and a later interchange cannot rely on old connectivity information without checking it anew.

</details>

### Exercise 11.8
<a id="five-and-four-colours-ex-8"></a>

A finite simple plane triangulation has every vertex of degree five or six. Prove that exactly twelve vertices have degree five.

<details><summary>Hint 1</summary>

Use the total charge $\\sum_v(6-d(v))$.

</details>
<details><summary>Hint 2</summary>

A degree-five vertex contributes one and a degree-six vertex contributes zero.

</details>
<details><summary>Solution</summary>

The triangulation charge identity gives total charge twelve. Under the specified degree restriction, the sum counts degree-five vertices exactly, because their contributions are one and all other contributions are zero. Hence there are exactly twelve. This is a consequence conditional on the stated degree pattern; it does not construct a triangulation for every requested total number of vertices.

</details>

### Exercise 11.9
<a id="five-and-four-colours-ex-9"></a>

Give a planar graph requiring four colours and explain why this neither proves the four-colour theorem nor contradicts the five-colour theorem.

<details><summary>Hint 1</summary>

Draw one vertex inside a triangle and join it to all three corners.

</details>
<details><summary>Hint 2</summary>

Separate a lower-bound example from a universal upper-bound theorem.

</details>
<details><summary>Solution</summary>

The construction is a plane drawing of $K_4$. Every pair is adjacent, so four colours are necessary, and four suffice by giving each vertex a different colour. This single example establishes sharpness of a possible universal four-colour bound, but says nothing about arbitrary other planar graphs. It is compatible with the five-colour theorem because a graph needing four is certainly colourable with at most five. A lower-bound example and a universal upper proof have different logical roles.

</details>

### Exercise 11.10
<a id="five-and-four-colours-ex-10"></a>

Divide the plane into five wedge-shaped regions meeting at the origin, arranged cyclically. Compare the required number of colours when adjacency means sharing a boundary ray with positive length and when touching at even one point counts as adjacency.

<details><summary>Hint 1</summary>

For boundary-ray adjacency, each region conflicts only with its two cyclic neighbours.

</details>
<details><summary>Hint 2</summary>

All five closures meet at the origin.

</details>
<details><summary>Solution</summary>

Under the usual boundary-ray convention, the adjacency graph is $C_5$, which needs three colours; the cyclic colouring $1,2,1,2,3$ suffices. If any common boundary point counts, every pair of regions conflicts at the origin. The adjacency graph becomes $K_5$ and needs five colours. Therefore the standard map-colouring statement must distinguish shared boundary segments from isolated meeting points. Changing this convention changes the mathematical problem.

</details>

## Sources

This is original exposition of the standard Kempe proof and its limitations. For another full five-colour argument, see Peter Allen and Leo Versteegen, [LTCC Graph Theory, Lecture 1: Graph Colouring](https://personal.lse.ac.uk/allenpd/LTCC/notes1.pdf), 19 February 2025. For the cited four-colour result and proof architecture, see the authors' [The Four Color Theorem](https://thomas.math.gatech.edu/FC/fourcolor.html), associated with N. Robertson, D. P. Sanders, P. D. Seymour and R. Thomas, *The Four Colour Theorem*, Journal of Combinatorial Theory, Series B 70 (1997), 2–44. For formal verification, see Georges Gonthier, [A Computer-Checked Proof of the Four Colour Theorem](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/gonthier-4colproof.pdf). These primary sources were consulted on 13 November 2026; no passage has been copied.

## Summary

Euler's formula produces a vertex of degree at most five in every nonempty simple planar graph, giving six colours by greedy induction. Five colours require one further idea: swapping a whole two-colour component. In the hard case, the cyclic order of neighbours and Jordan separation ensure that either a $(1,3)$ interchange or a $(2,4)$ interchange frees a colour. The four-colour theorem is a stronger cited computer-assisted result, not a consequence of that argument alone. Charge conservation explains part of the architecture of deeper planar-colouring proofs, while the actual reducibility and unavoidability work remains essential. Next, [Extremal Graphs: Turan](extremal-graphs-turan.md) studies a different restriction: how many edges are possible when a clique is forbidden.

`;export{e as default};