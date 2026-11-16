var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: routes-networks
title: "Routes and Networks: Draw It in One Stroke"
level: secondary
estimated_minutes: 160
license: CC BY-SA 4.0
---

# Routes and Networks: Draw It in One Stroke

Can every bridge be crossed exactly once? Can a figure be drawn without lifting
the pencil or retracing a segment? Lengths and angles are distractions. Replace
land regions or junctions by vertices and permitted crossings or strokes by
edges: the puzzle becomes a finite undirected graph.

## Degree and the handshake lemma

The **degree** of a vertex is the number of incident edge-ends; a loop contributes
two. Summing degrees counts every edge twice, so

$$\\sum_{v\\in V}\\deg(v)=2|E|.$$

Therefore the number of odd-degree vertices is even. This parity theorem is
called the handshake lemma.

## Euler trails and circuits

An **Euler trail** uses every edge exactly once. If it ends where it starts, it is
an **Euler circuit**. In a finite connected graph after isolated vertices are ignored:

- an Euler circuit exists exactly when every vertex has even degree;
- an open Euler trail exists exactly when two vertices have odd degree, and those
  are its endpoints.

Necessity is intuitive and exact. Every time a trail enters an internal vertex,
it must leave on another unused edge, pairing incident edge uses. Only the start
and end may have unpaired uses.

For sufficiency in the all-even case, start following unused edges. You cannot
get stuck anywhere except the start, so a circuit closes. If edges remain, find
a vertex on the circuit incident to an unused edge, build another closed circuit,
and splice it in. Finiteness guarantees completion. With two odd vertices, add
an edge between them, find a circuit, then remove the added edge.

## Hamiltonian is different

An Euler problem visits every **edge** once. A Hamiltonian problem visits every
**vertex** once. Degree parity gives a complete Euler criterion but no comparable
simple Hamiltonian criterion. Confusing them turns an easy theorem into a false
claim.

## Mazes and spanning trees

A **tree** is a connected graph with no cycles. A finite tree with $v$ vertices
has $v-1$ edges. Between any two vertices it has exactly one simple path. A
perfect maze—one route between any two cells—has a tree as its cell-adjacency
graph. Removing a wall adds an edge; if it joins already connected cells it
creates a cycle and therefore an alternative route.

Depth-first search constructs a spanning tree: begin at one cell, move to an
unvisited neighbor while possible, and backtrack when stuck. The stack of active
cells is not decorative implementation state; it records the route back.

## Visual accessibility

A graph diagram should also have an edge list. For example, the “house” graph
has vertices $A,B,C,D$ at the square corners and $R$ at the roof, with edges
$AB,BC,CD,DA,AC,BR,CR$. This list determines degrees without relying on layout.

## Common errors

- Counting neighbors instead of incident edge-ends when parallel edges or loops
  are allowed.
- Ignoring disconnected edge-containing components.
- Solving a vertex-visiting problem with an Euler theorem.
- Giving only a degree condition for a graph that is disconnected.
- Drawing a plausible stroke but failing to list and check every edge once.


## Why the circuit-splicing construction terminates

The graph here is finite and undirected, and parallel edges or loops are
allowed. Assume its edge-containing vertices lie in one connected component;
a zero-edge graph has the empty circuit by convention. During the construction,
keep a list of unused edges and an ordered closed walk of used edges. No edge
appears twice. If unused edges remain after a circuit is obtained, connectivity
ensures some vertex already on the circuit is incident to an unused edge:
take a path from an unused edge to the used subgraph and consider its first
point of contact. At every vertex the unused degree is even, because a closed
walk has used an even number of incident edge-ends. Thus a new walk from that
contact vertex cannot stop elsewhere. Splice its circuit into the earlier
one at the contact point. Each splice consumes at least one new edge; since
there are finitely many, this process ends with all of them used.

With two odd vertices $u,v$, add a temporary edge joining them. Both degrees
become even while every other degree remains even. A circuit in the enlarged
graph exists by the construction. Start its edge list immediately after the
temporary edge and delete that edge; the remaining sequence is an Euler trail
from one odd vertex to the other. The temporary edge is a mathematical device,
not an extra corridor available in the original puzzle. These arguments prove
sufficiency and state exactly where finiteness and connectivity are used.

**Worked example (A diagonal square).** Let the edges be $AB,BC,CD,DA,AC$.
The degrees of $A,C$ are three and those of $B,D$ are two, so any Euler trail
must start at $A$ and end at $C$, or conversely. The list
$A,B,C,D,A,C$ gives one: its consecutive edges are precisely the five given
edges, with no repetition. It revisits $A$ and $C$, which is allowed. Calling
it invalid because vertices repeat would confuse an edge problem with a
Hamiltonian vertex problem.

**Worked example (Two triangles meeting once).** Take triangles $ABC$ and
$ADE$ sharing vertex $A$ and no edge. The first circuit $A,B,C,A$ leaves
three unused edges at a vertex it visits. Insert $A,D,E,A$ at that occurrence
to obtain $A,B,C,A,D,E,A$. Every edge appears exactly once. Vertex $A$ has
degree four and the other vertices degree two. The example exposes why stopping
after the first closed circuit is insufficient: all used vertices may have
been revisited, yet some incident edges remain unused.

## Drawing edges without crossings

A plane drawing places vertices as distinct points and represents edges by
curves meeting only at their endpoints. A graph is planar if such a drawing
exists. An inconvenient picture with crossing edges proves nothing: another
drawing may remove the crossings. Conversely, a numerical obstruction can
rule out every possible drawing at once.

For a connected graph already drawn in the plane, Euler's formula is
$v-e+f=2$, where the unbounded face is included. Here is a proof for the
finite drawings used in these puzzles. A plane tree has $e=v-1$ and one
face, so the formula holds. If a connected plane graph has a cycle, delete
one edge on a cycle. Connectivity survives, while the two faces on its sides
merge, reducing both $e$ and $f$ by one. Continue until a tree remains. Each
deletion preserves $v-e+f$, so the original value was also two.

If the connected plane graph is simple, has at least three vertices, and every
face boundary has length at least three, counting edge-sides gives $3f\\le2e$.
With Euler's formula this yields $e\\le3v-6$. The puzzle graphs $K_5$ and
$K_{3,3}$ have no bridges, so the face-boundary hypotheses used here hold.
For $K_{3,3}$ there is the stronger observation that every closed walk alternates
between its two vertex classes and has even length. Its face boundaries have
length at least four, giving $4f\\le2e$ and therefore $e\\le2v-4$.

**Worked example (Three utilities).** Three houses and three utilities require
one connection for every house-utility pair. The graph is $K_{3,3}$: it has
six vertices and nine edges, and is simple, connected and bipartite. A planar
drawing would require $9\\le2(6)-4=8$, impossible. Connections may curve; the
obstruction does not assume straight lines. A bridge, tunnel or third spatial
dimension changes the drawing rules and therefore changes the puzzle.

A knight's tour is instead a Hamiltonian question on the board's knight-move
graph. Every knight move changes checkerboard colour, so a closed tour needs
equal numbers of both colours. A $5\\times5$ board fails that requirement.
On an even board, colour balance alone still does not construct a tour.
A move-order heuristic can help search, but a returned tour needs an explicit
list and a check of every transition; a failed greedy search does not prove
that no tour exists. See the [earlier graph puzzles](graph-puzzles.md) for
its retained questions and further cases.

## Exercises with staged help

### Exercise 1
<a id="routes-networks-ex-1"></a>

**Explorer.** A connected graph has vertex degrees $2,2,2,2$. What kind of
   Euler route is guaranteed?

<details>
<summary>Hint 1</summary>

Use the stated connectivity and degree data together.

</details>
<details>
<summary>Hint 2</summary>

Every degree is even.

</details>
<details>
<summary>Solution</summary>

An Euler circuit: the graph is connected and every degree is even.

</details>

### Exercise 2
<a id="routes-networks-ex-2"></a>

**Foundation.** Can a graph have exactly three odd-degree vertices?

<details>
<summary>Hint 1</summary>

Use the sum of all degrees.

</details>
<details>
<summary>Hint 2</summary>

Each edge contributes exactly two edge-ends.

</details>
<details>
<summary>Solution</summary>

No. The sum of degrees is even. A sum with an odd number of odd summands is
   odd, so odd-degree vertices must occur in an even number.

</details>

### Exercise 3
<a id="routes-networks-ex-3"></a>

**Secondary.** The edge list is $AB,BC,CD,DA,AC$. Determine whether an Euler
   trail exists and, if so, give one.

<details>
<summary>Hint 1</summary>

Count edge-ends at each of the four vertices.

</details>
<details>
<summary>Hint 2</summary>

Only A and C have odd degree; try starting at A.

</details>
<details>
<summary>Solution</summary>

Degrees are $\\deg(A)=3$, $\\deg(B)=2$, $\\deg(C)=3$, $\\deg(D)=2$. Exactly A and C
   are odd, so an open trail exists from one to the other. One is
   $A-B-C-D-A-C$, which uses $AB,BC,CD,DA,AC$ once each.

</details>

### Exercise 4
<a id="routes-networks-ex-4"></a>

**Secondary.** Prove that every finite tree with at least two vertices has at
   least two leaves (degree-one vertices).

<details>
<summary>Hint 1</summary>

Choose a longest simple path.

</details>
<details>
<summary>Hint 2</summary>

An endpoint cannot have a new neighbour or an extra neighbour on that path.

</details>
<details>
<summary>Solution</summary>

Take a longest simple path. If its first endpoint had another neighbor not on
   the path, the path could be extended. If it had a second neighbor on the path,
   a cycle would result. Thus its degree is one; the same argument applies to the
   other endpoint.

</details>

### Exercise 5
<a id="routes-networks-ex-5"></a>

**Undergraduate.** Explain why removing any edge of a tree disconnects it and
   adding any new edge between existing vertices creates exactly one cycle.

<details>
<summary>Hint 1</summary>

Use the uniqueness of the simple path between two tree vertices.

</details>
<details>
<summary>Hint 2</summary>

A second path would produce a cycle.

</details>
<details>
<summary>Solution</summary>

The unique path between an edge's endpoints uses that edge; removing it leaves
   no alternate path, so the graph disconnects. A new edge joins vertices already
   connected by one unique path; that path plus the new edge is a cycle. Any
   cycle using the new edge must use a path between its endpoints, and that path
   is unique, so exactly one cycle is created.

</details>

### Exercise 6
<a id="routes-networks-ex-6"></a>

Prove that $K_5$ is not planar.

<details>
<summary>Hint 1</summary>

Count its vertices and edges.

</details>
<details>
<summary>Hint 2</summary>

Use the inequality for simple planar graphs.

</details>
<details>
<summary>Solution</summary>

$K_5$ is simple and connected with $v=5$ and $e=\\binom52=10$. A planar drawing would require $10\\le3(5)-6=9$, a contradiction. Hence no crossing-free plane drawing exists.

</details>

### Exercise 7
<a id="routes-networks-ex-7"></a>

Two disjoint triangles have all degrees even. Do they have a single Euler circuit?

<details>
<summary>Hint 1</summary>

An Euler circuit is one continuous walk.

</details>
<details>
<summary>Hint 2</summary>

Can a walk pass between the two edge-containing components?

</details>
<details>
<summary>Solution</summary>

No. A walk beginning in one component cannot enter the other because no connecting edge exists. The even-degree condition holds in both components, giving separate circuits, but the connectivity hypothesis needed for one circuit fails.

</details>

### Exercise 8
<a id="routes-networks-ex-8"></a>

Give an Euler circuit for triangles $ABC$ and $ADE$ meeting at $A$.

<details>
<summary>Hint 1</summary>

Find one circuit in each triangle.

</details>
<details>
<summary>Hint 2</summary>

Splice at their common vertex.

</details>
<details>
<summary>Solution</summary>

The list $A,B,C,A,D,E,A$ has consecutive edges $AB,BC,CA,AD,DE,EA$. These are exactly the six edges, each used once. It is closed and therefore an Euler circuit.

</details>

### Exercise 9
<a id="routes-networks-ex-9"></a>

Explain why a $5\\times5$ knight board has no closed tour visiting every square once.

<details>
<summary>Hint 1</summary>

Track checkerboard colour after every move.

</details>
<details>
<summary>Hint 2</summary>

A closed alternating cycle has equal numbers of both colours.

</details>
<details>
<summary>Solution</summary>

A knight changes one coordinate by one and the other by two, so the parity of their sum changes at every move. A closed tour alternates colours and must use equally many of each. A $5\\times5$ board has 13 cells of one colour and 12 of the other, so no such tour exists.

</details>

### Exercise 10
<a id="routes-networks-ex-10"></a>

An artist draws a six-edge graph with crossings. Has the artist proved the graph nonplanar?

<details>
<summary>Hint 1</summary>

Planarity concerns existence of a suitable drawing.

</details>
<details>
<summary>Hint 2</summary>

Distinguish one unsuccessful drawing from all possible drawings.

</details>
<details>
<summary>Solution</summary>

No. The drawing only shows that this particular representation has crossings. Even a four-cycle can be drawn with an avoidable crossing. To prove nonplanarity one needs an obstruction that applies to every drawing, such as a valid edge inequality contradicted by the graph, or a suitable subdivision theorem with its hypotheses.

</details>

## Project: route certificate

Map a local walking network, transit fragment, or fictional dungeon as an edge
list with 8–20 vertices. Ask for a route traversing each corridor once. Use the
degree theorem and connectivity to classify it, then give an explicit trail or an
odd-degree or connectivity obstruction. Discuss which real-world features the graph model omits, such as
one-way streets, repeated crossings, accessibility, or travel time.

## Summary

Represent every permitted stroke by an edge and distinguish edges from vertices.
Degree parity and connectivity characterize finite Euler routes, with circuit
splicing proving sufficiency. Trees model unique-route mazes. A crossing-free
drawing proves planarity, whereas a contradicted edge bound can exclude every
such drawing at once.
`;export{e as default};