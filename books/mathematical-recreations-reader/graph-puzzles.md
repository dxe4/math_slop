
# Graph Puzzles

A graph is a collection of vertices connected by edges. Graph theory turns spatial puzzles---crossing bridges, tracing figures, connecting houses to utilities---into precise combinatorial questions. The key insight is to replace land masses or junctions by vertices and permitted crossings or strokes by edges. Once abstracted, the puzzle yields to counting arguments and structure theorems.

## The Koenigsberg bridges

The classical puzzle asks whether one can walk through Koenigsberg crossing each of its seven bridges exactly once. Leonhard Euler modelled the land regions as four vertices and the bridges as seven edges. He proved that such a walk is impossible because every vertex has odd degree.

## Degree and the handshake lemma

The **degree** of a vertex, denoted $\deg(v)$, is the number of incident edge-ends; a loop contributes two. Summing degrees counts every edge twice, so

$$\sum_{v \in V} \deg(v) = 2|E|.$$

Therefore the number of odd-degree vertices is even. This parity theorem is called the **handshake lemma**: at a party, the number of people who shake hands an odd number of times is even.

## Euler trails and circuits

An **Euler trail** uses every edge exactly once. If it ends where it starts, it is an **Euler circuit**. In a connected graph after isolated vertices are ignored:

- an Euler circuit exists exactly when every vertex has even degree;
- an open Euler trail exists exactly when two vertices have odd degree, and those are its endpoints.

**Proof sketch.** For necessity, every time a trail enters an internal vertex, it must leave on another unused edge, pairing incident edge uses. Only the start and end may have unpaired uses. For sufficiency in the all-even case, start following unused edges. You cannot get stuck anywhere except the start, so a circuit closes. If edges remain, find a vertex on the circuit incident to an unused edge, build another closed circuit, and splice it in. Finiteness guarantees completion. With two odd vertices, add an edge between them, find a circuit, then remove the added edge.

## The three utilities puzzle

"Connect three houses to three utilities without crossings" asks for a drawing of the complete bipartite graph $K_{3,3}$ in the plane. It is impossible.

**Proof.** A connected simple planar bipartite graph with $v \ge 3$ vertices satisfies $e \le 2v-4$. The graph $K_{3,3}$ has $v=6$ and $e=9$, while $2v-4=8$, a contradiction.

The short reason for the inequality: in a connected simple bipartite plane graph with at least three vertices, every face boundary walk has length at least four. Odd lengths are excluded by bipartiteness; a length-two boundary would traverse a single bridge twice and can be the whole boundary only in a connected graph consisting of that one edge. Bridges are counted twice in boundary lengths. Counting edge-sides around faces gives $4f \le 2e$, so $f \le e/2$. Euler's formula $v-e+f=2$ then yields $2 \le v-e+e/2$, or $e \le 2v-4$.

**Text description.** There are three house vertices on one side and three utility vertices on the other. Every house must connect to every utility, for nine edges total. Edges may curve but may meet only at their six endpoints.

## Hamiltonian paths

An Euler problem visits every **edge** once. A **Hamiltonian** problem visits every **vertex** once. Degree parity gives a complete Euler criterion but no comparable simple Hamiltonian criterion. Confusing them turns an easy theorem into a false claim.

A sufficient condition for Hamiltonicity is Dirac's theorem: if a simple graph with $n \ge 3$ vertices has minimum degree at least $n/2$, then it has a Hamiltonian cycle. The condition is not necessary; many Hamiltonian graphs violate it.

## The knight's tour

On a chessboard, can a knight visit every square exactly once and return to its starting square? This is a Hamiltonian cycle problem on the graph whose vertices are squares and whose edges are legal knight moves.

A knight always moves from a white square to a black square and vice versa, so the graph is bipartite. A closed tour on an $m \times n$ board requires $mn$ to be even, because the knight alternates colours. Thus no closed tour exists on a $5 \times 5$ board. Open tours may exist on odd-area boards; a $5 \times 5$ open tour does exist.

For an $8 \times 8$ board, closed tours exist and can be constructed by Warnsdorff's heuristic: from the current square, move to the neighbour with the fewest onward moves.

## Common errors

- Counting neighbours instead of incident edge-ends when parallel edges or loops are allowed.
- Ignoring disconnected edge-containing components.
- Solving a vertex-visiting problem with an Euler theorem.
- Giving only a degree condition for a graph that is disconnected.
- Drawing a plausible stroke but failing to list and check every edge once.

## Exercises

1. **Explorer.** A connected graph has vertex degrees $2,2,2,2$. What kind of Euler route is guaranteed?
2. **Foundation.** Can a graph have exactly three odd-degree vertices? Prove your answer.
3. **Secondary.** The edge list is $AB,BC,CD,DA,AC$. Determine whether an Euler trail exists and, if so, give one.
4. **Secondary.** Prove that $K_5$ (the complete graph on five vertices) is not planar.
5. **Undergraduate.** A tree is a connected graph with no cycles. Prove that every finite tree with at least two vertices has at least two leaves (degree-one vertices).

## Complete solutions

1. An Euler circuit: the graph is connected and every degree is even.

2. No. The sum of degrees is $2|E|$, which is even. A sum with an odd number of odd summands is odd, so odd-degree vertices must occur in an even number.

3. Degrees are $\deg(A)=3$, $\deg(B)=2$, $\deg(C)=3$, $\deg(D)=2$. Exactly $A$ and $C$ are odd, so an open trail exists from one to the other. One is $A-B-C-D-A-C$, which uses $AB,BC,CD,DA,AC$ once each.

4. A simple planar graph with $v \ge 3$ satisfies $e \le 3v-6$. For $K_5$, $v=5$ and $e=10$, while $3v-6=9$. Since $10 > 9$, $K_5$ is nonplanar.

5. Take a longest simple path. If its first endpoint had another neighbour not on the path, the path could be extended. If it had a second neighbour on the path, a cycle would result. Thus its degree is one; the same argument applies to the other endpoint.

## Project: route certificate

Map a local walking network, transit fragment, or fictional dungeon as an edge list with $8$--$20$ vertices. Ask for a route traversing each corridor once. Use the degree theorem and connectivity to classify it, then give an explicit trail or an odd-degree or connectivity obstruction. Discuss which real-world features the graph model omits, such as one-way streets, repeated crossings, accessibility, or travel time.
