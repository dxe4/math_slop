
# Planar Graphs and Kuratowski

A graph can have a drawing with crossings and still admit another drawing with none. Nonplanarity therefore needs a certificate that belongs to the graph, rather than to one inconvenient picture. Euler's formula supplies density obstructions. Kuratowski's theorem supplies a complete obstruction description: a finite graph is nonplanar exactly when it contains a subdivision of $K_5$ or $K_{3,3}$.

The difficult direction is to prove that these two patterns account for every failure of planarity. We shall give a graph-theoretic proof through edge contraction and reconstruction of an embedding. The proof includes the reduction across separators of orders zero, one and two, and all cyclic attachment cases in the 3-connected reconstruction. It also proves the minor-to-subdivision conversion that this route needs; a $K_5$ minor alone does not necessarily produce a $K_5$ subdivision.

Required preparation is paths, cycles, trees, vertex connectivity and the [Menger chapter](menger-connectivity.md). All graphs are finite, undirected and simple unless an intermediate contraction temporarily creates parallel edges or loops, which are then deleted. A topological input about simple closed curves is explicitly stated below. The graph arguments are proved here; the topological input is cited rather than reproved as a theorem of topology.

## Drawings, faces and the topological input

**Definition 9.1 (Planar and plane).** A graph is planar if it has a drawing in the plane with vertices represented by distinct points and edges by simple arcs whose interiors are disjoint from all vertices and from one another. A plane graph is a graph together with such an embedding. Faces are the connected regions of the complement of the drawing, including the unbounded region.

It is convenient to work on the sphere, obtained by adding a point at infinity to the plane. A drawing on the sphere becomes a plane drawing by choosing any point outside the graph as infinity. Thus any chosen face can be made the outer face. This changes the presentation of the embedding, rather than the graph or its incidences.

**Theorem 9.2 (Jordan–Schoenflies; cited topological input).** A simple closed curve on the sphere separates it into two regions, each of whose closure is a closed disk with that curve as boundary. In particular, a disk can be redrawn as a round disk while preserving the cyclic order of any finitely many marked boundary points.

We use this standard result from plane topology without proving it here. Its polygonal separation content and geometric background are discussed in the primary teaching references in Sources. The marked-point assertion follows by composing a disk homeomorphism with an order-preserving boundary reparametrisation extended radially. Consequences used below are that alternating boundary attachments cannot be joined disjointly on one side, that an interior star can be drawn to any ordered set of boundary points, and that disk drawings can be glued along a boundary arc.

A face boundary is generally a closed walk, not necessarily a cycle. A cut edge is traversed twice if both its sides belong to the same face. At a vertex, tracing the edge-side immediately bordering a face determines the next edge-side and gives its facial boundary walk.

**Lemma 9.3 (Facial cycles).** In a 2-connected plane graph, every facial boundary walk is a cycle.

*Proof.* Such a graph has no cut edge, so no edge has both sides belonging to a facial traversal that immediately isolates a component. Suppose a facial boundary walk repeats a vertex $v$. Its different occurrences correspond to different sectors between incident edge-ends around a small disk about $v$. Connect two such sectors by a simple arc inside the open face, and continue its ends to $v$ through those sectors. The result is a simple closed curve meeting the drawing only at $v$.

Choose two distinct occurrences, so that the intervening groups of incident edge-ends on both sides are nonempty. The separation theorem puts those groups on different sides of this curve. No path in the graph avoiding $v$ can join them, because it would have to cross the curve outside $v$. Thus $G-v$ is disconnected, contradicting 2-connectivity. Consequently no vertex repeats in a facial boundary walk, and the walk is a cycle. ∎

The small-disk construction is the reason a repeated face vertex detects a cutvertex. It is not valid to treat every connected plane graph as if it already had cyclic face boundaries.

## Euler's formula and what density can establish

**Theorem 9.4 (Euler's formula).** A connected plane graph with $n$ vertices, $m$ edges and $f$ faces satisfies $n-m+f=2$.

*Proof.* If the graph is a tree, $m=n-1$ and its complement has one face, giving the formula. The one-face fact follows by removing leaves: deleting or inserting a pendant arc creates no closed curve, and paths in its surrounding face can be detoured around its free end, so it does not separate a region.

Otherwise choose an edge on a cycle. Deleting it leaves the graph connected. The cycle separates its two sides, so the edge borders two distinct faces; deleting its interior joins those faces and affects no other face. Thus both $m$ and $f$ decrease by one while $n-m+f$ stays unchanged. Repeat until a spanning tree remains. Its value is two, so the original value was two as well. ∎

For a graph with $c$ components, the corresponding formula is $n-m+f=1+c$. One way to see this is to join components through faces by $c-1$ new edges; such an edge joins different components without splitting a face. The resulting connected plane graph has the same $n,f$ and $m+c-1$ edges.

**Example 9.5 (A cube and a pendant edge).** The cube graph has eight vertices and twelve edges. Its standard plane embedding has six faces, in agreement with $8-12+6=2$. Each face has boundary length four, and their total is $24=2m$.

Attach a new leaf by a pendant edge inside one face. The new counts are $n=9,m=13,f=6$, again giving two. The affected face's boundary length rises from four to six because the pendant edge is traversed out and back. The other five face lengths remain four, so the total becomes $26=2m$. Counting distinct incident edges instead of edge-sides would miss this multiplicity.

**Corollary 9.6 (Planar density bounds).** A finite simple planar graph with $n\geq3$ satisfies $m\leq3n-6$. If it is triangle-free, then $m\leq2n-4$.

*Proof.* First assume connectedness and fix an embedding. Every edge contributes two sides to the facial boundary walks, giving total length $2m$. A boundary walk of length one requires a loop. In a simple connected graph with at least three vertices, a facial boundary of length two cannot occur: without parallel edges it would traverse one edge out and back, with no other edge-end at either endpoint, making the whole connected graph $K_2$. Thus every facial boundary has length at least three. We get $3f\leq2m$; substituting $f=2-n+m$ and rearranging gives $m\leq3n-6$.

A length-three closed walk in a loopless simple graph is a triangle. If triangles are absent, the preceding observations give boundary length at least four, so $4f\leq2m$ and $m\leq2n-4$. For disconnected graphs, draw the components in disjoint regions and add edges to join them without crossings. These joining edges create no cycles, so they preserve both simplicity and the absence of triangles. Applying the connected bounds to the augmented graph proves the same bounds for the original graph. ∎

Consequently $K_5$ is nonplanar because $10>3\cdot5-6$, and $K_{3,3}$ is nonplanar because it is triangle-free and $9>2\cdot6-4$. Passing either bound does not prove planarity; the bounds give necessary conditions, and subdivisions can make their failure disappear numerically without removing the obstruction.

## Subdivisions and minors

**Definition 9.7 (Subdivision).** A subdivision of $H$ replaces each edge of $H$ by a path with the same branch endpoints, so that replacement paths have mutually disjoint interiors and no internal vertex is a branch vertex. The original vertices are branch vertices. A graph contains a topological $H$ minor if it contains a subgraph that is a subdivision of $H$.

Subdividing an edge preserves planarity: place the new vertices along its drawn arc. Conversely, suppressing an internal degree-two vertex of a subdivision joins the two edge arcs into a single arc. These operations show that a subdivision of a nonplanar graph is nonplanar. Planarity also passes to subgraphs by deleting unwanted arcs and points. Thus a $K_5$ or $K_{3,3}$ subdivision is always a certificate of nonplanarity.

**Example 9.8 (A sparse obstruction).** Subdivide each of the nine edges of $K_{3,3}$ once. The graph now has $6+9=15$ vertices and $18$ edges. It satisfies both $18\leq3\cdot15-6$ and $18\leq2\cdot15-4$. Nevertheless, suppressing the nine inserted degree-two vertices restores $K_{3,3}$, so it is nonplanar. Searching only for an actual six-vertex complete bipartite subgraph would miss this certificate too: the replacement edges contain intermediate vertices.

**Definition 9.9 (Minor model).** A graph $H$ is a minor of $G$ if it can be obtained by deletions and edge contractions. Equivalently, for each vertex of $H$ there is a nonempty connected branch set in $G$, these branch sets are disjoint, and every edge of $H$ is represented by an edge joining its two branch sets. Additional edges may be deleted.

To pass from branch sets to contractions, contract a spanning tree inside each set and retain the required joining edges. Conversely, the vertices merged by a sequence of contractions form connected branch sets. This description also proves transitivity: replace each branch set of a later model by the union of its connected original sets and their joining edges. A subdivision always gives a minor, by contracting each replacement path. A minor need not give a subdivision of that same graph.

**Lemma 9.10 (The two-obstruction conversion).** A finite graph contains $K_5$ or $K_{3,3}$ as a minor if and only if it contains a subdivision of $K_5$ or $K_{3,3}$. The conclusion is a disjunction; it does not say that every $K_5$ minor lifts to a $K_5$ subdivision.

*Proof.* The reverse implication follows by contracting replacement paths. First consider a $K_{3,3}$ minor model. Choose exactly one joining edge for each target edge. Within each branch set retain a minimal tree joining the endpoints of its three required joining edges. Add three temporary leaf stubs, one at each chosen joining port, to describe its local shape. Minimality ensures that the resulting tree has exactly these three leaves. A tree with three leaves, after suppressing degree-two vertices, is a three-armed star: the identity $\sum_v(d(v)-2)=-2$ gives exactly one vertex of degree three and no higher-degree vertex. Therefore each branch set has a centre with three internally disjoint paths to its ports. The six centres, these local paths and the nine joining edges form a $K_{3,3}$ subdivision in the original graph.

Now take a $K_5$ model, again choosing one joining edge per target edge and a minimal connecting tree in each branch set. The corresponding local tree has four external leaf stubs. After suppressing degree-two vertices its internal branching is either one degree-four vertex or two degree-three vertices joined by a path: the same degree identity says the sum of the excesses $d(v)-2$ over branching vertices is two.

If all five local trees have a degree-four centre, their four arms and the chosen joining edges form a $K_5$ subdivision. Otherwise select a branch set with two degree-three centres $p,q$. Its four ports divide into two pairs, say toward the other branch sets $a,b$ on the $p$ side and $c,d$ on the $q$ side. Contract the paths inside this branch set to retain $pq,pa,pb,qc,qd$, and contract each other branch set to its labelled vertex. The latter four vertices retain all six edges of a $K_4$.

This six-vertex minor contains $K_{3,3}$ with parts $\{p,c,d\}$ and $\{q,a,b\}$: its nine cross edges are $pq,pa,pb,cq,ca,cb,dq,da,db$. Delete any unused edges. Transitivity gives a $K_{3,3}$ minor of the original graph, and the first part of the proof lifts it to a $K_{3,3}$ subdivision. Thus every case produces one of the two required subdivisions. ∎

The temporary leaves are a way to count the attachment arms; they are not additional vertices asserted to belong to the original graph. Several ports may share an original vertex, but the degree argument still applies because each required joining edge has its own leaf stub.

## Gluing across small separators

For a cycle $C$, a $C$-bridge means either a chord of $C$, or a component of $G-V(C)$ together with its edges to $C$ and their endpoints. This use of “bridge” differs from a cut edge. Its vertices on $C$ are attachments. Alternating attachments can obstruct putting bridges on the same side of a cycle. A general bridge-compatibility argument requires its own embedding proof; compatibility cannot be inferred just from a convenient sketch.

Our proof instead reduces the low-connectivity cases by explicit gluing, then handles every attachment case for a single contracted edge. We need the following disk operation.

**Lemma 9.11 (One- and two-vertex gluing).** The union of planar graphs meeting in just one vertex is planar. The union of two planar graphs meeting exactly in an edge and its endpoints is planar. Both operations can be repeated for finitely many pieces.

*Proof.* For the edge operation, choose an embedding of each piece on the sphere. On one face-side of the common edge $xy$, draw a narrow empty lens bounded by $xy$ and a nearby $x$–$y$ arc in that face. Its complementary closed disk contains the whole graph, with $xy$ on its boundary. By the disk form of Jordan–Schoenflies, redraw this disk as a half-disk with $xy$ as its diameter. Put the two half-disks on opposite sides of that diameter and identify their common edge. Their other vertices and edges occupy disjoint interiors, producing the union without crossings.

For a single shared vertex, make it incident with the outer face in each drawing and place each piece in a disk touching the others only at that vertex. Such a disk placement follows from the same disk redrawing, using an empty sector incident with the vertex instead of an edge-side lens. Finite disjoint sectors about the shared point accommodate finitely many pieces. For several pieces sharing an edge, glue two at a time, each time choosing a face incident with the surviving common edge for the next operation. The result at each stage is planar and retains the edge needed for the next step. ∎

In particular, let $G$ be 2-connected with a two-vertex separator $\{x,y\}$, and let $C_1,\ldots,C_r$ be the components of $G-\{x,y\}$. Each component has a neighbour at both $x$ and $y$; otherwise one of these vertices alone would separate it from the rest. Put

$$G_i=G[C_i\cup\{x,y\}]+xy.$$

Each $G_i$ is a minor of $G$. If $xy$ is absent, choose an $x$–$y$ path through a different component and contract all but one of its edges, keeping $x$ and $y$ distinct, to supply the missing edge; then delete the unused vertices of that other component. This does not identify $x$ and $y$. If $xy$ already exists, each $G_i$ is simply a subgraph. Since $r\geq2$, every $G_i$ has fewer vertices than $G$.

If all the $G_i$ are planar, the edge-gluing lemma combines them along $xy$. Retain one copy of $xy$ if it was an original edge and delete it otherwise. The resulting embedding is an embedding of $G$. This handles all component bridges of the two-separator, rather than assuming that their original embeddings already fit together.

## A contractible edge in a 3-connected graph

**Lemma 9.12 (Contractible edge).** Every finite 3-connected simple graph other than $K_4$ has an edge whose contraction, followed by deletion of loops and duplicate edges, is 3-connected.

*Proof.* Suppose no such edge exists. The graph has at least five vertices: a 3-connected graph on four vertices is $K_4$. For every edge $xy$, its contraction has a separator of at most two vertices. This separator must contain the contracted vertex, since otherwise it would lift unchanged to a separator of size at most two in $G$. It cannot consist only of the contracted vertex, because that would lift to the two-separator $\{x,y\}$. Thus there is a vertex $z\notin\{x,y\}$ such that $T=\{x,y,z\}$ separates $G$.

Every vertex of $T$ has a neighbour in every component of $G-T$. Otherwise deleting the other two members of $T$ would already separate that component, contradicting 3-connectivity. Among all choices of edge $xy$, accompanying $z$, and component $C$ of $G-T$, choose one with $|C|$ smallest. Pick a neighbour $v\in C$ of $z$.

By the same assumption applied to edge $zv$, there is another three-separator $T'=\{z,v,w\}$. Again each member of $T'$ has a neighbour in every component of $G-T'$. Since $x,y$ are adjacent, the members of $\{x,y\}$ that survive deletion of $T'$ lie in a single component. Therefore there is another component $D$ avoiding both $x$ and $y$.

The vertex $v$ has a neighbour in $D$. Any neighbour of $v\in C$ lying outside $C$ must belong to the original separator $\{x,y,z\}$; all three are absent from $D$. Thus this neighbour lies in $D\cap C$. Moreover $D$ cannot leave $C$ along a path without passing through $x,y,z$, none of which is in $D$, so $D\subseteq C$. Since $v\in C$ was deleted to form $D$, this containment is proper. We have found a component of a three-separator associated with the edge $zv$ smaller than the chosen $C$, a contradiction. ∎

This is an existence lemma. It does not say that contracting any chosen edge preserves 3-connectivity. Its smallest-component argument is the progress measure that forces some suitable edge to exist.

## Reconstructing the embedding: all attachment cases

**Lemma 9.13 (Reinserting a split vertex).** Suppose $G$ is 3-connected and has no $K_5$ or $K_{3,3}$ minor. If $xy$ is an edge such that $H=G/xy$ is 3-connected and planar, then $G$ is planar.

*Proof.* Let $v$ be the contracted vertex in a spherical embedding of $H$. The graph $H-v=G-\{x,y\}$ is 2-connected: it has at least three vertices, and deleting $v$ and any one other vertex from $H$ leaves a connected graph. Removing $v$ and its incident arcs leaves a face $F$ containing its former position. By Lemma 9.3 its boundary is a cycle $C$. Every former neighbour of $v$ lies on $C$.

Put $X=N_G(x)\setminus\{y\}$ and $Y=N_G(y)\setminus\{x\}$. Both lie on $C$. Also $|X|,|Y|\geq2$, since a 3-connected graph has minimum degree at least three: deleting fewer neighbours would isolate a vertex while another survives. Enumerate $X$ cyclically as $x_1,\ldots,x_k$. The closed $X$-gaps are the paths $P_i=x_iCx_{i+1}$ whose interiors contain no member of $X$, with cyclic indices. We claim $Y$ lies in one closed gap.

First suppose $Y$ has a vertex $r$ in the interior of some $P_i$ and another vertex $s$ outside that closed gap. Set $p=x_i,q=x_{i+1}$. On $C$ the four distinct attachments occur in cyclic order $p,r,q,s$. The graph contains a $K_{3,3}$ subdivision with parts $\{x,r,s\}$ and $\{y,p,q\}$. Its nine replacement paths are $xy,xp,xq,yr,ys$ and the four consecutive cycle arcs $pCr,rCq,qCs,sCp$. Their interiors are disjoint: the four cycle arcs partition $C$, and all five other paths are distinct edges outside its interior. This contradicts the absence of the forbidden minor.

This settles the case $Y\nsubseteq X$: choose an interior $Y$ vertex; if its closed gap did not contain all of $Y$, the configuration just proved would occur. It remains to consider $Y\subseteq X$.

If $|Y|\geq3$, choose three common neighbours $a,b,c$ in cyclic order on $C$. The three consecutive cycle arcs between them form a subdivided triangle. Together with the edges from both $x$ and $y$ to $a,b,c$ and the edge $xy$, they form a $K_5$ subdivision with branch vertices $x,y,a,b,c$, again a contradiction.

The only remaining possibility has $Y=\{r,s\}\subseteq X$. If $r,s$ are consecutive in cyclic $X$ order, they lie in a closed gap as claimed. If not, each of the two open $r$–$s$ arcs of $C$ contains a member of $X$. Choose $p$ on one and $q$ on the other. After reversing the cycle orientation if necessary, their cyclic order is $p,r,q,s$. The same nine paths as in the first case then give a $K_{3,3}$ subdivision. This is the final obstruction case. Thus in all permitted cases $Y\subseteq V(P_i)$ for some $i$.

Return to the embedded $H$. Keep the point $v$ as $x$ and retain just the spokes to $X$, deleting the old spokes to $Y\setminus X$. This is a drawing of $G-y$. The retained spokes split the disk $F$ into sectors bounded by $xx_i$, the gap $P_i$, and $x_{i+1}x$. Their interiors contain no other graph edges: all nonspoke edges were outside $F$, and the other retained spokes lie in the other sectors, in their cyclic order.

Choose the sector whose closed gap contains $Y$. Put $y$ inside it and join $y$ to $x$ and all its neighbours in $Y$ by an interior star. All these endpoints are boundary points of that disk sector, so disk redrawing supplies noncrossing star arcs. They avoid every retained edge except at the prescribed endpoints. This restores exactly $xy$ and the edges from $y$ to $Y$, giving an embedding of $G$. ∎

The cases include shared attachments at the gap endpoints. Three shared attachments create the $K_5$ obstruction; two shared attachments are allowed when they bound a sector. This is why checking only four distinct alternating attachments would leave a gap in the proof.

## Kuratowski's theorem with the separator reduction

**Theorem 9.14 (Kuratowski).** A finite graph is planar if and only if it contains no subdivision of $K_5$ or $K_{3,3}$.

*Proof.* The forward implication was proved from nonplanarity of the two graphs and preservation under subdivisions and subgraphs. For the converse, Lemma 9.10 lets us assume that $G$ has neither graph as a minor. Suppose a nonplanar graph satisfying this exclusion exists, and choose one with the fewest vertices. Graphs on at most four vertices are subgraphs of a planar $K_4$, so our graph has at least five vertices.

If $G$ is disconnected, each component has fewer vertices, still excludes the two minors, and is planar by minimality. Draw them in disjoint disks, contradicting nonplanarity. If $G$ has a cutvertex $z$, take the induced pieces consisting of each component of $G-z$ together with $z$. Each is a smaller minor-free graph and hence planar. One-vertex gluing gives a planar union, again a contradiction.

Therefore $G$ is 2-connected. If it has a two-separator $\{x,y\}$, form all the augmented component pieces $G_i$ described after Lemma 9.11. Each is a minor of $G$ with fewer vertices, so each excludes the obstructions and is planar by minimality. Edge gluing along $xy$, followed by removal of the added edge if necessary, gives a planar embedding of $G$. Thus no two-separator exists either.

The graph is consequently 3-connected. By Lemma 9.12 it has an edge $xy$ for which $H=G/xy$ is 3-connected. Minor transitivity means $H$ still has neither forbidden minor, and it has fewer vertices, so it is planar by minimality. Lemma 9.13 reconstructs an embedding of $G$, providing the final contradiction. No counterexample exists, proving the converse. ∎

This proof also establishes the equivalent minor characterisation, often called Wagner's theorem for planar graphs. The equivalence here is special to the pair $K_5,K_{3,3}$, using Lemma 9.10. A general excluded-minor problem does not come with an automatic excluded-subdivision reformulation.

**Example 9.15 (A minor that changes the obstruction type).** Split every vertex of $K_5$ into two adjacent vertices, assigning two of its four original incident edges to each half. The resulting simple graph is cubic: every new vertex has two old-edge incidences and one splitting edge. Contracting the five splitting edges restores a $K_5$ minor.

The cubic graph cannot contain a $K_5$ subdivision, because its branch vertices would need degree four in the containing graph. Nevertheless, Lemma 9.10 produces a $K_{3,3}$ subdivision, and Kuratowski certifies nonplanarity. This example explains the disjunctive conversion in the proof: asserting that a $K_5$ minor always supplies a $K_5$ subdivision would be false.

## Exercises

### Exercise 9.1
<a id="planar-graphs-kuratowski-ex-1"></a>

Starting from the cube embedding, attach a single pendant edge with a new leaf inside one face. Calculate the new Euler counts and the facial boundary-length sum, explaining the repeated edge-side.

<details>
<summary>Hint 1</summary>

**Hint.** Adding a leaf increases both vertex and edge counts by one and creates no new face.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The chosen facial boundary walk traverses the pendant edge to its leaf and back.

</details>
<details>
<summary>Solution</summary>

**Solution.** The cube counts $(8,12,6)$ become $(9,13,6)$, so $n-m+f=9-13+6=2$. Five facial boundaries still have length four; the affected one has length six. Their sum is $5\cdot4+6=26=2\cdot13$. The two traversals of the pendant edge correspond to its two sides, even though both sides belong to the same face. Counting that edge only once would not give the required edge-side sum.

</details>

### Exercise 9.2
<a id="planar-graphs-kuratowski-ex-2"></a>

Give density proofs that $K_5$ and $K_{3,3}$ are nonplanar. Explain why the stronger bound used for the latter cannot be applied to every simple graph.

<details>
<summary>Hint 1</summary>

**Hint.** Count the vertices and edges of each graph before choosing a bound.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A bipartite graph has no triangle, so all its facial boundary walks would have length at least four under a planar embedding.

</details>
<details>
<summary>Solution</summary>

**Solution.** The graph $K_5$ has $n=5,m=10$, contradicting $m\leq3n-6=9$ for a simple planar graph. The graph $K_{3,3}$ has $n=6,m=9$ and is triangle-free, contradicting $m\leq2n-4=8$. The second bound relies on excluding triangular facial boundaries. For example, $K_4$ is planar with six edges but $2\cdot4-4=4$, so applying the triangle-free bound to it would falsely reject a planar graph.

</details>

### Exercise 9.3
<a id="planar-graphs-kuratowski-ex-3"></a>

Subdivide every edge of $K_{3,3}$ once. Find the vertex and edge counts, check both density bounds, and give a valid nonplanarity certificate despite those checks.

<details>
<summary>Hint 1</summary>

**Hint.** Each of the nine original edges contributes one new vertex and becomes two edges.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Suppress the inserted degree-two vertices in any alleged planar drawing.

</details>
<details>
<summary>Solution</summary>

**Solution.** The counts are $n=15$ and $m=18$, satisfying $18\leq39=3n-6$ and $18\leq26=2n-4$. The graph still contains the defining $K_{3,3}$ subdivision, namely itself. If it were planar, joining each pair of edge arcs through an inserted degree-two vertex would give a planar drawing of $K_{3,3}$, contradicting its proved nonplanarity. Passing necessary density inequalities therefore does not establish planarity.

</details>

### Exercise 9.4
<a id="planar-graphs-kuratowski-ex-4"></a>

Draw $K_4$ with four vertices on a circle and both diagonals. Explain why the crossing does not prove nonplanarity, and describe an embedding without crossings.

<details>
<summary>Hint 1</summary>

**Hint.** The positions of the vertices are not fixed in the definition of abstract graph planarity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use three vertices as the corners of a triangle and put the fourth inside it.

</details>
<details>
<summary>Solution</summary>

**Solution.** The two diagonals cross in the circular drawing, showing only that this drawing is not an embedding. Instead draw a triangle on three vertices, place the fourth in its interior, and join it to all three corners inside the triangle. The triangle edges and three interior spokes meet only at their endpoints, providing a planar embedding of the same $K_4$. Treating the original diagonal crossing as a new vertex would change the graph rather than solve its drawing problem.

</details>

### Exercise 9.5
<a id="planar-graphs-kuratowski-ex-5"></a>

Take a cycle $p,r,q,s,p$, vertices $x,y$ outside it, and edges $xp,xq,yr,ys,xy$. Identify a $K_{3,3}$ by giving its parts and all nine cross edges. Extend the argument when the four cycle edges are replaced by internally disjoint paths.

<details>
<summary>Hint 1</summary>

**Hint.** Put $x$ in the same part as the two neighbours of $y$ on the cycle.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The parts are $\{x,r,s\}$ and $\{y,p,q\}$; check each possible cross pair.

</details>
<details>
<summary>Solution</summary>

**Solution.** The nine cross edges are $xy,xp,xq,ry,rp,rq,sy,sp,sq$. The cycle supplies $rp,rq,sp,sq$, and the remaining five were specified. Thus the graph is exactly $K_{3,3}$ on these parts. Replacing the four cycle edges by paths whose interiors are disjoint and avoid all six branch vertices gives a $K_{3,3}$ subdivision, with those four paths as replacement edges and the five remaining edges unchanged. This is the alternating-attachment obstruction in Lemma 9.13.

</details>

### Exercise 9.6
<a id="planar-graphs-kuratowski-ex-6"></a>

Suppose $a,b,c$ occur on a cycle $C$, and each is adjacent to both $x,y\notin V(C)$, with $xy$ also present. Exhibit a $K_5$ subdivision and explain why shared attachments cannot simply be ignored.

<details>
<summary>Hint 1</summary>

**Hint.** Use $x,y,a,b,c$ as the five branch vertices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The three consecutive cycle arcs provide a subdivided triangle on $a,b,c$; count the other seven edges.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use the three cycle arcs between consecutive members of $\{a,b,c\}$ for the three edges of their triangle. Add the six spokes $xa,xb,xc,ya,yb,yc$ and the edge $xy$. These are the ten replacement paths of a $K_5$ subdivision. Their interiors are disjoint because the cycle arcs partition $C$ and the other paths are single edges outside it. A test restricted to four distinct alternating attachment points would miss this three-common-attachment configuration.

</details>

### Exercise 9.7
<a id="planar-graphs-kuratowski-ex-7"></a>

Let $G$ have vertices $x,y,z_1,z_2,z_3$ and edges $xy,xz_i,yz_i$ for $i=1,2,3$. Explain the two-separator decomposition and give an explicit planar drawing despite three pieces sharing the same edge.

<details>
<summary>Hint 1</summary>

**Hint.** Deleting $x,y$ leaves three singleton components, each giving an augmented triangle.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Put $x=(0,0)$, $y=(4,0)$ and the three remaining vertices at distinct heights on the line with horizontal coordinate two.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each augmented piece on $\{x,y,z_i\}$ is a triangle with common edge $xy$. Set $z_i=(2,i)$ and draw all edges as straight segments. The segments from $x$ to the $z_i$ stay in the left half of the drawing and meet only at $x$; those from $y$ stay in the right half and meet only at $y$. The two families meet only at their designated $z_i$, and $xy$ lies below their interiors. Thus the drawing is planar. Repeated edge gluing is legitimate; it does not require all pieces to occupy the same side of the same fixed outer-face drawing.

</details>

### Exercise 9.8
<a id="planar-graphs-kuratowski-ex-8"></a>

Split every vertex of $K_5$ into an adjacent pair, assigning two old incident edges to each half. Prove that the resulting graph has a $K_5$ minor but no $K_5$ subdivision. What obstruction does Lemma 9.10 then guarantee?

<details>
<summary>Hint 1</summary>

**Hint.** Contract each of the five newly introduced splitting edges.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Each new vertex has degree three, whereas a branch vertex of a $K_5$ subdivision needs four distinct incident paths.

</details>
<details>
<summary>Solution</summary>

**Solution.** Contracting the five disjoint splitting edges identifies each pair with its original $K_5$ vertex and restores every original edge, giving the minor. The split graph is cubic: every vertex has two old-edge incidences and one splitting edge. A subgraph cannot raise a vertex's degree, so it cannot supply any of the degree-four branch vertices required by a $K_5$ subdivision. The disjunctive conversion must therefore produce a $K_{3,3}$ subdivision instead. This refutes a same-obstruction minor-to-subdivision claim while confirming the two-obstruction theorem.

</details>

### Exercise 9.9
<a id="planar-graphs-kuratowski-ex-9"></a>

In a 3-connected graph, suppose $T=\{x,y,z\}$ is a separator. Prove every member of $T$ has a neighbour in every component of $G-T$.

<details>
<summary>Hint 1</summary>

**Hint.** Assume one member, say $z$, has no neighbour in a component $C$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** All edges from $C$ to its exterior then end in the other two separator vertices.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $z$ has no neighbour in $C$, every edge leaving $C$ ends at $x$ or $y$, since $C$ is a component after deleting all of $T$. Deleting just $x,y$ therefore isolates $C$ from $z$ and from another component of $G-T$. At least $z$ survives outside $C$, so the remaining graph is disconnected, contradicting 3-connectivity. The same argument applies to any chosen member of $T$ and any chosen component, proving the claim used in the contractible-edge lemma.

</details>

### Exercise 9.10
<a id="planar-graphs-kuratowski-ex-10"></a>

Take the wheel with rim $a,b,c,d,a$ and hub $h$ adjacent to all four rim vertices. Compare contracting $ha$ with contracting $ab$. Show that the contractible-edge lemma is existential rather than a statement about every edge.

<details>
<summary>Hint 1</summary>

**Hint.** After contracting $ha$, call the merged vertex $q$ and list the edges on $q,b,c,d$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In that first contraction, deleting $q,c$ leaves two nonadjacent vertices. The rim-edge contraction produces a familiar complete graph.

</details>
<details>
<summary>Solution</summary>

**Solution.** Contracting $ha$ produces edges $qb,qc,qd,bc,cd$, with duplicate edges suppressed. Deleting $q,c$ leaves nonadjacent vertices $b,d$, so the contracted graph is not 3-connected. Contracting $ab$ instead merges them to $r$ and leaves all six edges on $r,c,d,h$: the rim becomes a triangle and the hub remains adjacent to every rim vertex. The result is $K_4$, which is 3-connected. The original wheel is 3-connected because deletion of the hub and one rim vertex leaves a path, while keeping the hub connects all surviving vertices after any two deletions. Thus it satisfies the lemma but has both suitable and unsuitable edges.

</details>

## Sources

The exposition, worked examples and exercises are original. Euler's retained *Discrete Mathematics* chapter [“Planarity, Coloring, and Matchings”](../discrete-mathematics-proof-counting-structure/planarity-coloring-matchings.md) and Quarto chapter *Coloring and Planarity* supply local background. Primary references for the graph-theoretic proof architecture are Reinhard Diestel, [*Graph Theory*, Chapter 3, Lemma 3.2.4](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf), and [Chapter 4, especially §4.4](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf). For the explicitly cited plane-topology input, see Jeff Erickson, [“Simple Polygons,” *One-Dimensional Computational Topology Notes*](https://jeffe.cs.illinois.edu/teaching/comptop/2020/notes/01-simple-polygons.html), and Diestel §4.1. These sources were consulted 13 November 2026. The chapter licence is CC BY-SA 4.0.

## Summary

Euler's formula counts faces through a fixed embedding and yields density obstructions, with repeated edge-sides retained. Subdivisions preserve the obstruction even when density bounds become inconclusive. Kuratowski's theorem gives the complete characterisation through subdivisions of $K_5$ and $K_{3,3}$. Its converse follows here from a minimal-counterexample reduction across all separators of orders at most two, a proved contractible-edge lemma, and complete cyclic attachment cases when reconstructing a split vertex. The minor conversion yields either obstruction type and never assumes that a $K_5$ minor necessarily lifts to a $K_5$ subdivision. Jordan–Schoenflies disk topology is the stated external input. The following colouring chapters use the structural restrictions of planar graphs, while later work on minors develops contraction as a general tool beyond this particular pair of obstructions.
