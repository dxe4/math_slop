var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: graphs-trees-partial-orders
title: "Graphs, Trees and Partial Orders"
level: undergraduate
license: CC BY-SA 4.0
---

# Graphs, Trees and Partial Orders

## Which structure does a dependency picture assert?

A network drawing can represent undirected connections, directed transitions or required precedence. Those interpretations support different conclusions. A connected network need not be a tree; an arrow need not represent every indirect dependency; and a valid schedule does not turn all of its consecutive tasks into genuine prerequisites. Before an algorithm processes the picture, its mathematical object must be fixed.

This chapter develops the finite structural facts needed by the later graph-search, greedy and dynamic-programming chapters. You should know finite sets, relations, induction and the distinction between an object and its encoding from the preceding chapters. The [Introduction to Proof](/books/library-book-introduction-to-proof/) is the linked preparation for any proof technique needing a refresher. We prove tree and forest edge counts, recover finite orders from Hasse diagrams, and prove that a finite directed acyclic graph has a topological ordering.

The longer discrete-mathematics route supplies complementary treatments in [Graphs, Trees and Connectivity](/books/library-book-discrete-mathematics-proof-counting-structure/graphs-trees-connectivity/), [Sets, Functions, Relations, Orders and Closure](/books/library-book-discrete-mathematics-proof-counting-structure/sets-functions-relations-orders/), and [Finite Orders, Lattice Representation and Möbius Inversion](/books/library-book-discrete-mathematics-proof-counting-structure/finite-orders-lattices-mobius/). The present chapter needs only their elementary finite graph and order foundations. Lattice representation, Möbius inversion and specialist graph results are not prerequisites here.

## Finite graphs and paths

**Definition 6.1 (Two graph conventions).** A finite simple undirected graph is $G=(V,E)$ with finite vertex set $V$ and edges that are two-element subsets of $V$. Thus loops and parallel edges are excluded. A finite loopless directed graph has finite $V$ and $E\\subseteq\\{(u,v)\\in V\\times V:u\\ne v\\}$. Its edges are ordered pairs, called arrows; both $u\\to v$ and $v\\to u$ may occur. We state explicitly which convention is in use.

An isolated vertex remains part of $V$ even when it belongs to no edge. An edge list alone therefore needs accompanying vertex information if isolated vertices are allowed. A graph drawing does not add an edge at a geometric crossing unless that crossing is explicitly declared to be a vertex.

**Definition 6.2 (Walk, path and cycle).** A walk is a finite sequence $v_0,\\ldots,v_k$ following edges, with length $k$. A path has no repeated vertices. A length-zero path at one vertex is permitted. In a directed graph the arrows must be followed in their given direction. An undirected cycle has length at least three and repeats only its first vertex at its end. A directed cycle has the same distinctness condition and, under our loopless convention, length at least two.

An undirected edge traversed out and back is a closed walk but not a cycle: it repeats the same edge. By contrast, opposite directed arrows form a directed two-cycle. These conventions are essential when importing an acyclicity argument from one kind of graph to the other.

**Lemma 6.3 (Removing repetitions).** If a walk joins $u$ to $v$, then a path joins them. A positive-length closed directed walk contains a directed cycle.

*Proof.* If a walk repeats a vertex at positions $i<j$, remove the segment between these occurrences. The preceding segment and remaining suffix still meet at the same vertex and follow valid edges in the required direction. Length decreases, so repetition removal stops after finitely many steps, leaving a path. For a closed directed walk, choose a positive-length closed contiguous subwalk of minimum length. If it had an internal repeated vertex, the segment between two occurrences would be a shorter positive-length closed subwalk. Hence only its endpoints coincide, giving a directed cycle. The loopless convention excludes length one. ∎

The second assertion was deliberately restricted to directed walks. For an undirected out-and-back walk the first repetition-removal operation can remove the whole walk, leaving no cycle.

**Definition 6.4 (Components and degrees).** In an undirected graph, vertices are connected if a path joins them. This is an equivalence relation: length-zero paths give reflexivity, reversal gives symmetry, and concatenation followed by repetition removal gives transitivity. Its classes are the connected components. A nonempty graph is connected if it has one component. The degree of a vertex is its number of neighbors.

**Theorem 6.5 (Degree sum).** For a finite simple undirected graph, $\\sum_{v\\in V}\\deg(v)=2|E|$.

*Proof.* Count pairs consisting of an edge and one of its endpoints. Summing by vertices gives the left-hand side. Every edge has exactly two distinct endpoints, giving the right-hand side. ∎

The theorem immediately implies that the number of odd-degree vertices is even: an odd number of odd summands would make the sum odd. It does not say that every even-sum list can be realised as a graph. Degrees also obey the bound $0\\le\\deg(v)\\le|V|-1$ in our simple convention.

## Trees and forests

**Definition 6.6 (Tree and forest).** A tree is a nonempty connected acyclic simple undirected graph. A forest is an acyclic simple undirected graph, possibly empty or disconnected. Each nonempty component of a forest is a tree. A leaf is a vertex of degree one.

**Lemma 6.7 (Leaves).** A finite tree with at least two vertices has at least two leaves.

*Proof.* Choose a path of maximum length, possible because there are only finitely many paths. Any neighbor of one endpoint lies on the path, since otherwise the path could be extended. Apart from the next vertex, another neighbor on the path would form a cycle with the intervening segment. The endpoint consequently has exactly one neighbor. The same argument applies to the distinct other endpoint. ∎

**Theorem 6.8 (Tree and forest counts).** A tree on $n\\ge1$ vertices has $n-1$ edges. A forest on $n$ vertices with $c$ connected components has $n-c$ edges, including the empty forest with $n=c=0$.

*Proof.* Induct on the order of a tree. At $n=1$, no edge is possible, so the count is zero. For $n\\ge2$, remove a leaf and its unique incident edge. The remaining graph has no cycle. It remains connected because a path between remaining vertices could not have used a leaf internally: that would need two incident path edges there. Thus the remainder is a tree on $n-1$ vertices and has $n-2$ edges by induction. Restoring the leaf adds one edge, proving $n-1$.

For a nonempty forest, let its component vertex counts be $n_1,\\ldots,n_c$. They sum to $n$, and the components have disjoint edge sets. Each is a tree, so the total is $\\sum_i(n_i-1)=n-c$. For the empty forest both sides are zero by the empty-sum convention. ∎

**Theorem 6.9 (Unique paths).** A nonempty simple undirected graph is a tree if and only if each pair of distinct vertices has exactly one path between them.

*Proof.* In a tree, connectedness supplies a path. If there were two distinct paths from $u$ to $v$, follow them from $u$ to a divergence and then along one until its next meeting with the other. The two internally disjoint segments between those meeting points form a cycle, contradicting acyclicity. Conversely, the path condition gives connectedness. A cycle would give two paths between two of its vertices, one in each direction around it, contradicting uniqueness. The singleton graph satisfies the condition vacuously and is indeed a tree. ∎

**Definition 6.10 (Spanning tree).** A spanning tree of $G$ uses all vertices of $G$ and a subset of its edges forming a tree.

**Theorem 6.11 (Connectivity certificates).** Every nonempty finite connected graph has a spanning tree and at least $n-1$ edges. Such a graph is a tree exactly when it has $n-1$ edges.

*Proof.* Start with one reached vertex and no edges. If not all vertices have been reached, connectedness gives a path from a reached vertex to an unreached one; its first crossing edge adds one new vertex. Adding a new vertex by one edge preserves connectedness of the reached subgraph and cannot create a cycle, since the new vertex had no earlier chosen edge. After $n-1$ additions we have a spanning tree. Its edges belong to the original graph, proving the lower bound.

A tree has $n-1$ edges by Theorem 6.8. Conversely, if the connected graph has exactly that many, its spanning tree already uses that many edges, so its edge subset equals the whole edge set. Hence the original graph is that tree. ∎

A spanning tree certifies connectivity but can change distances. Removing cycle edges may replace one edge by a longer route. Edge weights, minimum spanning trees and shortest-path optimality are additional questions handled later, with their own hypotheses.

## Worked example 1: a forest count with its hypothesis exposed

Take vertices $\\{1,2,3,4,5,6,7\\}$ and edges $12,23,45$, where $12$ abbreviates $\\{1,2\\}$. The components are the path on $\\{1,2,3\\}$, the edge on $\\{4,5\\}$, and isolated vertices $6,7$. Thus $n=7,c=4$, and the forest theorem gives $n-c=3$ edges, agreeing with the list. Its degrees are $1,2,1,1,1,0,0$, summing to six, twice the edge count.

Add edge $13$. The first component now has a triangle, while the component partition stays the same. There are four edges but still $n-c=3$. The failed equality does not refute the forest theorem: its acyclicity hypothesis is now false. Conversely, the edge count alone cannot certify which vertices form the components; that information required the actual edge list.

## Worked example 2: two spanning certificates

Let $V=\\{a,b,c,d,e\\}$ and $E=\\{ab,bc,ca,cd,de\\}$. The path edges $ab,bc,cd,de$ connect every vertex, so their four-edge subgraph is a spanning tree by Theorem 6.11. Another spanning tree uses $ac,bc,cd,de$: all vertices connect through $c$, and it too has five vertices and four edges. The original graph is connected and has one extra triangle edge.

The two certificates need not preserve the same routes. In the original graph, $a$ and $c$ are adjacent. In the first tree their unique path is $a,b,c$ of length two; in the second it is the single edge $ac$. Connectivity survives both choices, while shortest distances can change. This is why an algorithm returning a spanning tree must not automatically claim to return shortest paths or a minimum-weight tree.

## Finite orders and Hasse diagrams

**Definition 6.12 (Partial order).** A partial order $\\le$ is reflexive, antisymmetric and transitive. Its underlying set with that relation is a poset. Write $x<y$ for $x\\le y$ and $x\\ne y$. Two elements can be incomparable. A minimal element has no strictly smaller element; a least element is smaller than or equal to every element. Define maximal and greatest dually.

Minimal does not mean least. In a poset with two incomparable elements both are minimal, but neither is least. A total order compares every pair, while a linear extension of a poset adds comparisons in a way that respects those already present. The added comparisons describe a possible listing, not new facts about the original dependency relation.

**Lemma 6.13 (Finite minimal elements).** Every finite nonempty poset has a minimal element, and every finite poset has a linear extension.

*Proof.* If a chosen element is not minimal, choose a strictly smaller one and continue. Strict descent cannot repeat: transitivity and antisymmetry would contradict a strict comparison. More than $|P|$ distinct elements cannot be selected, so the process stops at a minimal element. For a linear extension, induct on $|P|$. The empty poset has the empty listing. Otherwise remove a minimal element, linearly extend the smaller poset by induction and put the removed element first. No other element was required to precede it, so all original comparisons are respected. ∎

**Definition 6.14 (Covers).** An element $y$ covers $x$ if $x<y$ and no $z$ satisfies $x<z<y$. The Hasse diagram draws an upward arrow from $x$ to $y$ for each cover, omitting reflexive pairs and comparisons forced by transitivity.

**Theorem 6.15 (Reconstructing a finite order).** The reflexive-transitive reachability relation of a finite poset's upward cover arrows is exactly its original partial order.

*Proof.* Every cover comparison belongs to the order, so every arrow path does by transitivity, and zero-length paths give reflexivity. Conversely suppose $x<y$. Among strictly increasing chains from $x$ to $y$, choose one of maximum length. Finiteness guarantees its existence. If two consecutive elements were not a cover, inserting an intermediate element would give a longer chain, a contradiction. Thus there is a cover path from $x$ to $y$. Equality is handled by the zero-length path, proving the reverse inclusion. ∎

This recovery depends on finiteness. In a dense order such as the rationals there are no covers, although many comparisons hold. A finite Hasse diagram can compress redundant arrows without discarding comparisons; the same statement cannot be transferred unchanged to arbitrary infinite orders.

## Directed acyclic graphs and schedules

**Definition 6.16 (Reachability and topological order).** For a directed graph, put $u\\le_G v$ when a directed walk of zero or more steps goes from $u$ to $v$. A DAG is a directed graph with no directed cycle. A topological ordering lists all vertices exactly once so every arrow's tail appears earlier than its head.

**Theorem 6.17 (DAGs, orders and listings).** For a finite loopless directed graph, the following are equivalent: it is a DAG; its reflexive reachability is a partial order; and it has a topological ordering.

*Proof.* Reachability is always reflexive by zero-length walks and transitive by concatenation. In a DAG, if distinct $u,v$ reached each other, concatenating the two positive paths would form a positive closed directed walk and hence a cycle by Lemma 6.3. Thus reachability is antisymmetric and is a partial order.

Conversely, a directed cycle in a loopless graph has at least two distinct vertices. Any two successive vertices on it reach each other around the cycle, contradicting antisymmetry. Hence partial-order reachability implies a DAG. Given that partial order, Lemma 6.13 provides a linear extension; every arrow is a strict reachability comparison and therefore points forward in the listing, making it topological. Finally, a directed cycle in a topological ordering would force each of its vertices to precede the next and eventually itself, impossible. Thus a topological ordering implies acyclicity, completing the equivalence. ∎

Looplessness matters for the stated equivalence: a self-loop is a directed cycle but does not make two distinct vertices mutually reachable. If an input format permits loops, a topological-order algorithm must reject them separately. Our graph representation here excludes them from the start.

The proof also gives a scheduling procedure: repeatedly remove a minimal remaining vertex of the reachability order, equivalently a vertex with no incoming edge from the remaining graph. Such a vertex exists in every nonempty DAG. If every remaining vertex had a predecessor, following predecessors for more steps than the number of remaining vertices would repeat a vertex and produce a directed cycle. Thus the procedure can stop early with a cycle obstruction only when its input violates the DAG hypothesis.

The meaning of an arrow still needs a contract. If $u\\to v$ means “perform $u$ before $v$,” a topological ordering is an execution schedule. If it means “the value at $u$ uses the value at $v$,” the dependency must be evaluated before its consumer, so use the reverse topological order. This is the orientation used in the preceding induction chapter's dynamic-programming argument. Neither convention changes the graph theorem, but confusing them reverses the evaluation proof.

## Worked example 3: an order with real incomparability

Let the arrows be $a\\to c$, $b\\to c$ and $b\\to d$ on $\\{a,b,c,d\\}$. There is no directed cycle. The only nonreflexive reachability comparisons are those three pairs, since $c,d$ have no outgoing arrows. The minimal elements are $a,b$; the maximal elements are $c,d$. There is no least or greatest element, because each of those pairs is incomparable.

One topological order is $a,b,c,d$. Another is $b,d,a,c$: every listed arrow still points forward. The fact that $d$ precedes $a$ in the second order does not assert $d<a$ in the original poset; the first order places them the other way round. Each listed arrow is also a cover, since no intermediate element lies between its endpoints. Thus this arrow diagram is already the Hasse diagram. A valid listing supplies a schedule while preserving the distinction between forced comparisons and freely chosen tie-breaking.

## Exercises

### Exercise 6.1
<a id="graphs-trees-partial-orders-ex-1"></a>

For the path on vertices $a,b,c$ with edges $ab,bc$, compute all degrees and check the degree-sum theorem. Is the graph a tree?

<details>
<summary>Hint 1</summary>

List the neighbors of each vertex.

</details>
<details>
<summary>Hint 2</summary>

Check connectedness and absence of a cycle separately.

</details>
<details>
<summary>Solution</summary>

The degrees are one at $a$, two at $b$ and one at $c$, summing to four. There are two edges, so twice the edge count is also four. Every vertex reaches every other along the displayed path. A cycle in a simple graph requires at least three edges, and only two are present, so none exists. The graph is therefore a tree, with $3-1=2$ edges as expected.

</details>

### Exercise 6.2
<a id="graphs-trees-partial-orders-ex-2"></a>

A forest has ten vertices and six edges. How many components does it have? Why is the forest hypothesis needed?

<details>
<summary>Hint 1</summary>

Use the exact equation in Theorem 6.8.

</details>
<details>
<summary>Hint 2</summary>

A cycle can consume an edge without reducing the component count.

</details>
<details>
<summary>Solution</summary>

The forest equation gives $6=10-c$, so $c=4$. Without acyclicity, take a triangle, a disjoint path of three edges on four vertices and three isolated vertices. This graph has ten vertices and six edges but five components: the triangle, the path and the three singletons. Thus the same two counts do not determine four components for arbitrary graphs.

</details>

### Exercise 6.3
<a id="graphs-trees-partial-orders-ex-3"></a>

Give a four-vertex graph with three edges that is not a tree. Explain which additional hypotheses make the edge count sufficient.

<details>
<summary>Hint 1</summary>

Use a cycle and an isolated vertex.

</details>
<details>
<summary>Hint 2</summary>

Connectedness and acyclicity each control what the component count can hide.

</details>
<details>
<summary>Solution</summary>

A triangle together with an isolated vertex has four vertices and three edges, but is disconnected and cyclic. If a nonempty graph with $n-1$ edges is connected, Theorem 6.11 makes it a tree. If it is instead known acyclic, the forest formula gives $n-1=n-c$, so $c=1$; it is connected and thus also a tree. The count alone supplies neither qualification.

</details>

### Exercise 6.4
<a id="graphs-trees-partial-orders-ex-4"></a>

Prove that removing any edge from a tree splits it into exactly two components.

<details>
<summary>Hint 1</summary>

The remaining graph is still acyclic.

</details>
<details>
<summary>Hint 2</summary>

Apply the forest count after subtracting the one edge.

</details>
<details>
<summary>Solution</summary>

A tree containing an edge has $n\\ge2$ vertices and $n-1$ edges. Removing that edge leaves the same vertices and $n-2$ edges, and cannot introduce a cycle. The remaining forest therefore has component count $c$ satisfying $n-2=n-c$, hence $c=2$. In particular, its endpoints are separated; an alternate path between them would have formed a cycle with the removed edge in the original tree.

</details>

### Exercise 6.5
<a id="graphs-trees-partial-orders-ex-5"></a>

Why does the directed cycle $a\\to b\\to c\\to a$ have neither a topological ordering nor antisymmetric reachability?

<details>
<summary>Hint 1</summary>

Translate each arrow into a strict position inequality.

</details>
<details>
<summary>Hint 2</summary>

Two different vertices can reach each other by going around the cycle.

</details>
<details>
<summary>Solution</summary>

A topological ordering would require $pos(a)<pos(b)<pos(c)<pos(a)$, which contradicts transitivity and irreflexivity of the strict order of positions. Also $a$ reaches $b$ directly and $b$ reaches $a$ through $c$, although $a\\ne b$. Thus reachability fails antisymmetry. Its reflexivity and transitivity still hold; the missing law is precisely what the cycle violates.

</details>

### Exercise 6.6
<a id="graphs-trees-partial-orders-ex-6"></a>

Find all covers in the divisibility poset $\\{1,2,3,6,9,18\\}$ and give one linear extension.

<details>
<summary>Hint 1</summary>

A divisibility comparison is a cover only when no listed intermediate divisor fits.

</details>
<details>
<summary>Hint 2</summary>

Begin with one and allow two and three in either compatible order.

</details>
<details>
<summary>Solution</summary>

The covers are $1\\prec2$, $1\\prec3$, $2\\prec6$, $3\\prec6$, $3\\prec9$, $6\\prec18$ and $9\\prec18$. Each listed pair has no member of this poset strictly between it under divisibility. Other proper divisor comparisons have an intermediate member; for example $1<6$ passes through two or three and $3<18$ passes through six or nine. The listing $1,2,3,6,9,18$ respects all covers and hence all comparisons by the cover-chain theorem, so it is a linear extension.

</details>

### Exercise 6.7
<a id="graphs-trees-partial-orders-ex-7"></a>

For $\\{a,b,c\\}$ with only strict comparisons $a<c$ and $b<c$, find the minimal and least elements and list every linear extension.

<details>
<summary>Hint 1</summary>

The two incomparable lower elements must both precede the top.

</details>
<details>
<summary>Hint 2</summary>

Minimality excludes smaller elements; leastness requires comparison with every element.

</details>
<details>
<summary>Solution</summary>

Both $a,b$ are minimal because neither has a smaller element. Neither is least, since they are incomparable; $c$ is not least either because it is above both. There is therefore no least element. The top must appear last, and $a,b$ may appear in either order, yielding exactly $a,b,c$ and $b,a,c$. The element $c$ is both maximal and greatest.

</details>

### Exercise 6.8
<a id="graphs-trees-partial-orders-ex-8"></a>

In a DAG with arrows $a\\to b$ and $b\\to c$, add $a\\to c$. Show that neither reflexive reachability nor the set of topological orderings changes, and identify the Hasse arrows.

<details>
<summary>Hint 1</summary>

The added arrow already has an indirect path.

</details>
<details>
<summary>Hint 2</summary>

Every permitted listing already puts $a$ before $c$.

</details>
<details>
<summary>Solution</summary>

The original two-step path already makes $a\\le_G c$. Any use of the new arrow in a walk can be replaced by that path, so no new reachable pair is introduced. A topological ordering already requires $a$ before $b$ before $c$, hence satisfies the added constraint. Conversely any ordering for the larger edge set satisfies the original subset. The cover arrows remain $a\\to b$ and $b\\to c$; $a\\to c$ is omitted from the Hasse diagram because $b$ lies strictly between.

</details>

### Exercise 6.9
<a id="graphs-trees-partial-orders-ex-9"></a>

A subproblem graph has arrow $u\\to v$ when the value at $u$ requires the value at $v$. Which direction of topological order evaluates dependencies first? Prove the claimed property.

<details>
<summary>Hint 1</summary>

A topological ordering always puts the tail before the head.

</details>
<details>
<summary>Hint 2</summary>

Here the head, rather than the tail, is the prerequisite value.

</details>
<details>
<summary>Solution</summary>

Use reverse topological order. In an ordinary topological listing, each edge places its consumer $u$ earlier than its dependency $v$. Reversing the listing therefore places $v$ before $u$ for every edge. When evaluating $u$, all its immediate dependencies have already been evaluated; induction over the reversed list then justifies applying a correct recurrence at each vertex. The DAG hypothesis supplies the listing, while correctness of the recurrence remains a separate obligation.

</details>

### Exercise 6.10
<a id="graphs-trees-partial-orders-ex-10"></a>

Resolve the empty and singleton cases for forests, trees and topological orderings under this chapter's conventions.

<details>
<summary>Hint 1</summary>

Use the explicitly stated nonempty requirement for a tree.

</details>
<details>
<summary>Hint 2</summary>

The empty listing can satisfy a universal constraint over no arrows.

</details>
<details>
<summary>Solution</summary>

The empty undirected graph is a forest with zero vertices, edges and components, so $|E|=n-c$ reads $0=0$. It is not a tree because trees are required nonempty. A singleton simple undirected graph has no edges, is connected by its length-zero path, and is acyclic; it is a tree with $n-1=0$ edges. The empty directed graph is a DAG with the empty topological listing. A singleton loopless directed graph also has no arrows and has its unique one-vertex listing. These cases satisfy the theorems without inventing an isolated loop or an extra edge.

</details>

## Sources

The elementary graph and order material develops the existing Euler CC BY-SA 4.0 chapters \`graphs-trees-connectivity.md\`, \`finite-orders-lattices-mobius.md\` and \`sets-functions-relations-orders.md\` in *Discrete Mathematics: Proof, Counting and Structure*. Their advanced continuations remain in that book. The exposition, concrete examples and exercises here are newly written, with the finite and loopless conventions stated locally. A primary companion is Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [Mathematics for Computer Science, MIT OpenCourseWare](https://www.ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), especially its graph, relation and partial-order topics.

[Book overview](#/item/book-algorithms-computation-proof-desk)

## Summary

Finite graph claims depend on whether edges are directed, whether loops are permitted and whether repeated vertices are allowed in a traversal. Trees have unique paths and $n-1$ edges; forests have $n-c$ edges; spanning trees certify connectivity while possibly changing distances. Finite posets can be recovered from covers and extended to compatible total listings. For finite loopless directed graphs, acyclicity, partial-order reachability and existence of a topological ordering are equivalent. Those structural results support later algorithm proofs, whose representations, costs and optimization guarantees still need separate contracts.
`;export{e as default};