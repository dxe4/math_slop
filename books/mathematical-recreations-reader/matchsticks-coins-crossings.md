
# Matchsticks, Coins, and Crossings: Spatial Rules Made Precise

Move-one-stick puzzles are notorious because words hide assumptions. May a stick
be rotated? Must it remain in the plane? May it cross another? Does “square” mean
a geometric square or a square number? Before solving, write a rule sheet.

## A coordinate language for sticks

Represent a matchstick by its two endpoints. Four unit sticks with endpoints

$(0,0)-(1,0)$, $(1,0)-(1,1)$, $(1,1)-(0,1)$, $(0,1)-(0,0)$

form one square. A move deletes one segment and inserts another congruent segment.
If endpoints must lie on integer lattice points, say so. If shared sticks count
as sides of two squares, say so.

### Worked example 1: counting squares honestly

In a $2 \times 2$ grid of unit cells there are four unit squares and one $2 \times 2$
square, so five total. Counting only the smallest shapes is a common error.
Conversely, a tilted four-cycle is not a square unless its sides are equal and
adjacent sides perpendicular.

## Worked example 2: coin reversals

Line up coins showing $HHTHT$. A move may reverse a consecutive block of exactly
three coins **and** flip each selected coin. Spatial reversal and face flipping
are different operations; naming both makes the state update reproducible.

For many coin puzzles it helps to encode H as 1 and T as 0. Flipping is addition
of 1 modulo 2. Reordering changes positions but not the total number of 1s, while
flipping a fixed number affects parity predictably.

For the state $HHTHT$, reverse the first three positions: $HHT$ becomes $THH$,
so the intermediate word is $THHHT$. Flip those same three positions to obtain
$HTTHT$. Specifying the intermediate state makes it possible to distinguish
the combined move from reversal alone or flipping alone. Performing the same
combined operation on the same block twice restores the original word: reversal
is its own inverse, flipping is its own inverse, and flipping every position of
the block commutes with reversal. This gives a useful way to audit a proposed
move list by reading it backward.

## Crossing puzzles and topology

“Connect three houses to three utilities without crossings” asks for a drawing
of the complete bipartite graph $K_{3,3}$ in the plane. It is impossible, but
not because every attempt looks tangled. A planar bipartite graph with $v\ge 3$
vertices satisfies $e \le  2v-4$. The graph has $v=6,e=9$, while $2v-4=8$, a
contradiction.

Here is the short reason for the inequality in the connected case with at least
three vertices. A tree has $e=v-1\le2v-4$. If a cycle is present, every face
boundary walk in a simple bipartite graph has length at least four; a bridge
may be traversed twice but does not create a separate two-edge face. Counting edge-sides around faces
gives $4f \le  2e$, so $f\le e/2$. Euler's formula $v-e+f=2$ then yields
$2 \le  v-e+e/2$, or $e\le 2v-4$.

**Text description.** There are three house vertices on one side and three
utility vertices on the other. Every house must connect to every utility, for
nine edges total. Edges may curve but may meet only at their six endpoints.

Passing a line behind the paper or through a hole changes the surface and is not
a planar solution. Passing through a vertex also counts as an intersection unless
that vertex is an endpoint of the edge.

### Worked example 3: what Euler's count actually counts

A square with one diagonal has four vertices, five edges and three faces when
the unbounded outside region is included. Thus $v-e+f=4-5+3=2$. The diagonal
creates two bounded triangular faces. Leaving out the outside face would give
the wrong Euler total. For a connected plane tree, $e=v-1$ and there is just
one face; each edge borders that same face on both sides. Face-boundary length
therefore counts edge-sides with multiplicity, rather than counting distinct
edges just once. These conventions are why the standard face sum is $2e$.

The graph $K_{3,3}$ is connected and has cycles, so the bipartite inequality
above applies directly. The bound is a necessary condition for planarity, not
a characterization of planar graphs. A drawing with sufficiently few edges can
still have an obstruction. The roles of the count and the drawing are different:
an exceeded bound proves impossibility, whereas an explicit crossing-free
embedding proves possibility.

### Worked example 4: larger grids without missing large squares

In an $n\times n$ grid of unit cells, an axis-aligned square of side $s$ can
start in $(n-s+1)^2$ positions. Summing over $s=1,\ldots,n$ gives
$1^2+2^2+\cdots+n^2=n(n+1)(2n+1)/6$ squares. One proof of the last identity
uses $(j+1)^3-j^3=3j^2+3j+1$: sum from $j=0$ to $n$ and use
$\sum_{j=0}^n j=n(n+1)/2$, then rearrange. For $n=2$ the count is 5,
and for $n=3$ it is 14. These count only squares whose sides lie on the grid
segments. A lattice-point puzzle that allows new diagonal segments may contain
tilted squares as well, so the geometric inventory must specify what exists.

## Physical constraints

For coins, “move” usually means translate one coin without moving the others;
stacking may or may not be legal. For sticks, breaking or overlapping may or may
not be legal. A robust statement includes:

- inventory and dimensions;
- allowed transformations;
- permitted contact, overlap, and stacking;
- exact target predicate;
- whether the route or only final state matters.

A coordinate description of the final state still need not specify a legal
physical route. A coin moved between two crowded locations may have room at
both endpoints but no collision-free path if lifting is forbidden. If a puzzle
counts only endpoint placements, say that explicitly. If continuous motion is
required, a solution should describe enough of the path to establish clearance.
This distinction matters when translating a tabletop challenge into a graph
or a finite state description.

## Common errors

- Solving a different interpretation silently.
- Counting composite shapes inconsistently.
- Treating a crossing hidden by a thick line as absent.
- Assuming a failed search proves impossibility.
- Using a three-dimensional move in a planar puzzle.

## Worked example: changing the move changes the invariant

For a separate coin puzzle, begin with every coin showing tails and permit
one move to flip exactly two distinct coins, wherever they are in the row.
The number of heads always remains even. Flipping two tails creates two
heads; flipping two heads removes two; flipping one of each leaves the head
count unchanged. These exhaust the possibilities, so a target with an odd
number of heads is impossible under this rule.

The condition is also sufficient here. Given a target with an even number
of head positions, pair those positions arbitrarily. Starting from all tails,
flip each designated pair once. No chosen position occurs in another pair,
so precisely the desired positions become heads and all others remain tails.
This constructs every target that passes the parity condition, including
the initial target, which requires no moves.

Both halves of the argument matter. An invariant gives an obstruction, but
does not generally prove that all states sharing its value are reachable.
The explicit pairing construction supplies that additional conclusion for
this particular puzzle. Requiring the two coins to be adjacent would change
which pairs can be used directly and would need a new construction. Allowing
single-coin flips would destroy the parity obstruction altogether. The original
three-coin reversal-and-flip puzzle has its own move rule and must not inherit
this new puzzle's invariant without a fresh calculation.

## Exercises


### Exercise 1 {#matchsticks-coins-crossings-ex-1}

**Explorer.** How many squares of all sizes are in a $3 \times 3$ grid of unit
   cells?

<details>
<summary>Hint 1</summary>

Group squares by side length.

</details>

<details>
<summary>Hint 2</summary>

A side-two square can
   have four possible lower-left corners in this grid.

</details>

<details>
<summary>Solution</summary>

There are 9 unit squares, 4 squares of side 2, and 1 square of side 3, for 14.

</details>

### Exercise 2 {#matchsticks-coins-crossings-ex-2}

**Foundation.** Six coins lie at positions $0,1,2,3,4,5$ on a line. Move one
   coin to make two stacks of three, if stacking a moved coin directly on any
   occupied position is allowed and a “move” may carry an existing stack.

<details>
<summary>Hint 1</summary>

Count how large a stack can become after one move from singletons.

</details>

<details>
<summary>Hint 2</summary>

Permission to move an existing stack does not create a stack initially.

</details>

<details>
<summary>Solution</summary>

Under the stated permission to carry a stack, first stack coin 0 on 1 and coin
   2 on 1; that used two moves, so it does not answer a one-move puzzle. In one
   move from six singletons, at most one destination stack can gain one coin, so
   no stack can reach three. The target is impossible. This deliberately exposes
   how a familiar verbal answer may violate the quantified move limit.

</details>

### Exercise 3 {#matchsticks-coins-crossings-ex-3}

**Secondary.** Encode $HTTHH$ as bits. What results from flipping positions 2,
   3, and 4 without reversing them?

<details>
<summary>Hint 1</summary>

Write five bits before changing any.

</details>

<details>
<summary>Hint 2</summary>

Toggle, rather
   than reverse, positions 2 through 4.

</details>

<details>
<summary>Solution</summary>

$HTTHH$ is $10011$. Toggling bits 2 through 4 gives $11101$, or $HHHTH$.

</details>

### Exercise 4 {#matchsticks-coins-crossings-ex-4}

**Secondary.** Prove $K_{2,4}$ can be drawn without crossings by giving a
   construction or explaining its planar structure.

<details>
<summary>Hint 1</summary>

Regard each degree-two vertex as the middle of a path.

</details>

<details>
<summary>Hint 2</summary>

Several disjoint curved arcs can share the same two endpoints.

</details>

<details>
<summary>Solution</summary>

$K_{2,4}$ consists of four internally disjoint length-two paths between the
   same two degree-4 vertices. Place those two vertices at the north and south
   poles and route the four paths along four separated arcs from north to south,
   placing one remaining vertex on each arc. The arcs meet only at the poles.

</details>

### Exercise 5 {#matchsticks-coins-crossings-ex-5}

**Undergraduate.** Use Euler's formula to prove that a simple planar graph
   with $v\ge 3$ satisfies $e\le 3v-6$.

<details>
<summary>Hint 1</summary>

Connect components if necessary.

</details>

<details>
<summary>Hint 2</summary>

Count edge-sides
   around faces, including the unbounded face.

</details>

<details>
<summary>Solution</summary>

Add noncrossing edges between components until the graph is connected. This
   preserves simplicity and planarity and can only increase the edge count, so
   it is enough to prove the bound for the connected supergraph. In a connected
   simple plane graph with $v\ge 3$, every face-boundary walk has length at least
   $3$, so $3f\le 2e$. Euler's formula gives $v-e+f=2$; substituting
   $f\le 2e/3$ yields $2\le v-e/3$, hence $e\le 3v-6$.

</details>

<a id="section-161-complete-solutions"></a>
<a id="section-159-complete-solutions"></a>
## Complete solutions

[Exercise 1](#matchsticks-coins-crossings-ex-1) · [Exercise 2](#matchsticks-coins-crossings-ex-2) · [Exercise 3](#matchsticks-coins-crossings-ex-3) · [Exercise 4](#matchsticks-coins-crossings-ex-4) · [Exercise 5](#matchsticks-coins-crossings-ex-5)

<a id="section-181-hints-for-exercises-1-5"></a>
<a id="section-179-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#matchsticks-coins-crossings-ex-1) · [Exercise 2](#matchsticks-coins-crossings-ex-2) · [Exercise 3](#matchsticks-coins-crossings-ex-3) · [Exercise 4](#matchsticks-coins-crossings-ex-4) · [Exercise 5](#matchsticks-coins-crossings-ex-5)

<a id="section-194-exercise-6-another-grid-count-matchsticks-coins-crossin"></a>
<a id="section-192-exercise-6-another-grid-count-matchsticks-coins-crossin"></a>
### Exercise 6: another grid count {#matchsticks-coins-crossings-ex-6}

How many axis-aligned squares use the segments of a $4\times4$ unit grid?

<details><summary>Hint 1</summary> Treat each of the four possible side lengths separately.
</details>
<details><summary>Hint 2</summary> A side-three square has four possible positions.
</details>
<details><summary>Solution</summary> There are $16+9+4+1=30$ squares. Each is classified uniquely by
its side length and lower-left corner, so the count omits none and duplicates
none. This does not count tilted shapes whose sides are absent from the grid.
</details>
<a id="section-206-exercise-7-undo-the-combined-coin-move-matchsticks-coin"></a>
<a id="section-204-exercise-7-undo-the-combined-coin-move-matchsticks-coin"></a>
### Exercise 7: undo the combined coin move {#matchsticks-coins-crossings-ex-7}

Reverse and flip the last three coins of $HHTHT$. Then repeat that same move.

<details><summary>Hint 1</summary> Work only on the suffix $THT$.
</details>
<details><summary>Hint 2</summary> Keep reversal and face changes as two explicit operations.
</details>
<details><summary>Solution</summary> The suffix $THT$ reverses to itself and flips to $HTH$, giving
$HHHTH$. Its suffix $HTH$ again reverses to itself and flips to $THT$, restoring
$HHTHT$. The prefix is untouched in both steps. The inverse property holds for
any selected block, even when that block is not palindromic.
</details>
<a id="section-219-exercise-8-a-crossing-is-not-a-vertex-matchsticks-coins"></a>
<a id="section-217-exercise-8-a-crossing-is-not-a-vertex-matchsticks-coins"></a>
### Exercise 8: a crossing is not a vertex {#matchsticks-coins-crossings-ex-8}

Draw the two diagonals of a square. If their intersection is not declared a
vertex, do they form a crossing-free drawing? What graph results if it is a vertex?

<details><summary>Hint 1</summary> Graph edges may meet only at shared endpoint vertices in a plane embedding.
</details>
<details><summary>Hint 2</summary> Introducing the centre subdivides both diagonals.
</details>
<details><summary>Solution</summary> With only the four corners as vertices, the diagonals cross in
their interiors, so that drawing is not crossing-free. Declaring the centre a
vertex changes each diagonal into two edges. Considering just these diagonals,
the result is a four-edge star with five vertices. That different graph has a
crossing-free drawing. Changing the vertex set changes the problem.
</details>
<a id="section-234-exercise-9-another-planar-obstruction-matchsticks-coins"></a>
<a id="section-232-exercise-9-another-planar-obstruction-matchsticks-coins"></a>
### Exercise 9: another planar obstruction {#matchsticks-coins-crossings-ex-9}

Use the simple planar bound to show that $K_5$ is not planar.

<details><summary>Hint 1</summary> Count unordered pairs of five vertices.
</details>
<details><summary>Hint 2</summary> Compare with $3v-6$, not the stronger bipartite bound.
</details>
<details><summary>Solution</summary> There are $\binom52=10$ edges and five vertices. A simple planar
graph on five vertices has at most $3\cdot5-6=9$ edges. Thus $K_5$ cannot be
planar. The bipartite bound is inapplicable because $K_5$ contains triangles.
</details>
<a id="section-246-exercise-10-count-actual-stack-moves-matchsticks-coins-"></a>
<a id="section-244-exercise-10-count-actual-stack-moves-matchsticks-coins-"></a>
### Exercise 10: count actual stack moves {#matchsticks-coins-crossings-ex-10}

Starting with six singleton coins, stacking by moving one existing stack onto
another, find the fewest moves needed to finish with exactly two stacks of three.

<details><summary>Hint 1</summary> Each move reduces the number of nonempty stacks by exactly one.
</details>
<details><summary>Hint 2</summary> Build the two triples independently.
</details>
<details><summary>Solution</summary> Going from six stacks to two requires four moves, since every
permitted move merges exactly two stacks. Put coin 0 onto coin 1 and then that
pair onto coin 2; put coin 3 onto coin 4 and then that pair onto coin 5. This
uses four legal moves and gives two triples, attaining the lower bound. The
same physical goal that was impossible in one move is possible with this budget.
</details>
<a id="section-261-project-write-the-rules-first"></a>
<a id="section-259-project-write-the-rules-first"></a>
## Project: write the rules first

Create a puzzle using at most twelve identical sticks or coins. Give the initial
state as coordinates, the legal move as a state transformation, and the target
as a checkable predicate. Provide one tempting illegal “solution,” diagnose its
rule violation, and then provide either a legal solution or a proved invariant
obstruction. Include a nonvisual representation.

<a id="section-269-summary"></a>
<a id="section-267-summary"></a>
## Summary

Record dimensions, coordinates and allowed contacts before moving objects.
Separate reversal from flipping, count composite squares explicitly, and record
whether intersections are vertices. Euler's formula gives exact obstructions
only with its graph and face conventions respected. A legal construction and
a lower bound together can establish the minimum number of moves.
