var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: colorings-tilings
title: "Colorings and Tilings: Local Pieces, Global Constraints"
level: secondary
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Colorings and Tilings: Local Pieces, Global Constraints

Can a damaged chessboard be covered by dominoes? Area gives a necessary test:
each domino covers two cells. But equal area is not enough. A coloring attaches
algebraic information to position, so a local shape leaves a predictable global
footprint.

## Dominoes and the mutilated board

Color an $8 \\times 8$ board like a chessboard, with black and white alternating in
every row and column. Any domino covering two edge-adjacent cells covers one
black and one white. Remove two opposite corners. Those corners have the same
colour, leaving 30 cells of one colour and 32 of the other. Thirty-one dominoes
would cover 31 of each colour. Therefore no tiling exists.

**Text description.** Imagine rows labelled 1 through 8 and columns labelled 1
through 8. Cell $(r,c)$ is B when $r+c$ is even and W otherwise. Opposite corners
$(1,1)$ and $(8,8)$ are both B. Every horizontal or vertical neighboring pair
has one B and one W.

The proof is short because the coloring was designed around the tile. A random
decoration would do nothing.

## Three colors and longer bars

For a $1 \\times 3$ bar, colour columns cyclically $0,1,2,0,1,2,...$. Every horizontal
bar covers one cell of each label. This can rule out regions whose three label
counts differ. But a vertical $3 \\times 1$ bar in a column would cover three equal
labels, so this coloring only fits a puzzle where orientation is restricted.

For unrestricted trominoes, try weights rather than literal colours. Assign each
cell a number modulo $m$, compute each allowed tile's possible sums, and compare
with the board's total. The invariant must handle rotations explicitly.

## Signed weights

Color a board in vertical stripes with weights $+1,-1,+1,-1,...$. A horizontal
domino has total weight 0, while a vertical domino has weight $+2$ or $-2$. If a
region has total weight 0, this does not force a tiling, but it constrains the
difference between vertical dominoes in positive and negative columns.

Multiple colorings can be combined. One test may count black/white balance;
another may record row residues. Passing all tests is still not a construction.

## Constructing a tiling

Impossibility and construction require different evidence. To prove a tiling
exists, provide:

- an explicit list of occupied cells for each tile;
- a repeating pattern with a proof it covers every cell once; or
- an inductive reduction that removes a tileable border and reaches a base case.

### Worked construction

Every rectangle with an even side is domino-tileable. If the width is even, pair
cells $(r,1)-(r,2)$, $(r,3)-(r,4)$, and so on in each row. These pairs are
disjoint and exhaust the rectangle. This is a certificate, not a picture that
merely appears covered.

## A defect theorem for checkerboards

Let a region consist of board cells. If it can be tiled by dominoes, its black
and white counts are equal. This theorem handles disconnected regions and holes,
because it depends only on the fact that each domino covers adjacent cells. Its
converse is false. For example, two isolated cells of opposite colours have equal
counts but cannot share a domino.

That distinction—necessary versus sufficient—is the central habit of tiling
mathematics.

### Worked example: when extra structure proves the converse

For an intact $8\\times8$ board, removing any one black and any one white
cell actually does leave a domino-tileable region. Balance alone does not
prove this stronger fact; a cycle through every cell supplies the missing
construction. Trace such a cycle as follows. Travel down column 1 from
$(1,1)$ to $(8,1)$. Snake through columns 2 to 8 using only rows 2 to 8:
go upward in each even column and downward in each odd column, connecting
successive columns at row 2 or row 8. From $(2,8)$ go to $(1,8)$ and return
along the top row to $(1,1)$. This visits every cell once and every consecutive
pair shares an edge.

The cycle alternates colours. Delete the chosen black and white cells; the
two intervening cycle paths each contain an even number of surviving cells,
because a path from a black endpoint to a white endpoint has odd edge-length.
Pair consecutive surviving cells separately along each path. Their pairs are
dominoes covering the remainder without overlap. Empty paths, when the deleted
cells were consecutive, cause no difficulty. The resulting tiling may ignore
many other adjacency edges: it needs only this one spanning cycle. General
balanced regions need not have such a cycle, so this special converse does not
invalidate the earlier counterexample with two isolated cells.

## Common errors

- **Area-only reasoning.** Matching total area ignores position and adjacency.
- **Unstated adjacency.** Standard dominoes cover edge-adjacent cells, not cells
  meeting only at a corner.
- **A coloring that some rotation breaks.** Check every allowed orientation.
- **A suggestive sketch.** List coordinates or give a repeatable rule to prove
  there are no gaps or overlaps.
- **Assuming balance implies tilability.** A coloring obstruction is generally
  necessary, not sufficient.


## A constructive counterpart: one missing square

**Theorem 2.1 (Deficient square).** For every integer $n\\ge1$, a
$2^n\\times2^n$ board with any one cell removed can be tiled by L-trominoes,
with rotations permitted. Each tile covers three edge-connected cells forming
an L. The missing cell can be anywhere; it need not be a corner.

*Proof.* For $n=1$, the remaining three cells are exactly one L-tromino.
Suppose every deficient $2^{n-1}\\times2^{n-1}$ square is tileable. Divide the
larger square into four equal quadrants. Exactly one contains the missing
cell. Place one L-tromino across the centre, using the central cell of each
of the other three quadrants. In each quadrant, set aside exactly one cell:
the original missing cell in the first, or the just-covered central cell in
the others. Apply induction to its remaining cells. The four smaller tilings
occupy disjoint quadrants, avoid the central tile, and cover every other cell.
Thus the construction has no gaps or overlaps and proves the next case. ∎

This argument proves an existence statement and specifies a recursive
construction. Equal area alone would only say that $(4^n-1)/3$ tiles might
fit; induction shows that they actually can. The allowed rotations matter:
the central L may face different directions depending on the missing quadrant.
A fixed orientation would require a different claim and proof.

**Worked example (A deficient four-by-four board).** Number rows and columns
from one to four and remove $(1,1)$. Place the central L on $(2,3),(3,2),(3,3)$.
The upper-left quadrant is missing $(1,1)$; the upper-right has $(2,3)$ already
covered; the lower-left has $(3,2)$ already covered; and the lower-right has
$(3,3)$ already covered. Each quadrant's other three cells form one L. The
central tile plus these four gives five tiles, agreeing with $(16-1)/3=5$.
The coordinates explain the construction without relying on an approximate
drawing: each original cell belongs either to one listed central position,
one quadrant's L, or the removed singleton.

## Counting a thin rectangle

Let $D_n$ count domino tilings of a $2\\times n$ rectangle with horizontal and
vertical dominoes allowed. Set $D_0=1$: the empty board has one empty tiling.
Also $D_1=1$. In any tiling of a nonempty board, the upper-left cell is covered
by either a vertical domino, which fills the first column, or a horizontal
one. In the horizontal case the lower-left cell must also lie in a horizontal
domino: a vertical domino there would overlap the upper-left cell. Thus the
first two columns are filled by a pair of horizontal dominoes. Removing the
first case leaves width $n-1$; removing the second leaves width $n-2$.
Conversely, appending those initial pieces to any tiling of the smaller board
produces exactly one tiling of the stated case. Therefore

$$D_n=D_{n-1}+D_{n-2}\\qquad(n\\ge2).$$

**Worked example (Width four).** Starting with $D_0=D_1=1$ gives $D_2=2$,
$D_3=3$ and $D_4=5$. Classifying by the first column yields three tilings
beginning with a vertical domino and two beginning with the horizontal pair.
The decomposition is both exhaustive and disjoint; it counts arrangements,
not merely a plausible progression in a small table. The same recurrence
counts a one-row strip tiled by squares and dominoes, but the objects differ.
A bijection converts each vertical domino into a square token and each
horizontal pair into a domino token.

## Finite boards and the infinite plane

An infinite-plane tiling is a different kind of object from a tiling of a
finite board. A repeated finite rectangular pattern gives a periodic plane
tiling, meaning a nonzero translation preserves the complete pattern. A tile
set is called aperiodic if it tiles the plane but admits no periodic tiling
under its specified rules. A large irregular-looking patch alone proves
neither existence of an infinite tiling nor aperiodicity.

The [earlier tiling reading](tiling-problems.md) preserves its references to
Berger and Penrose and the separate tile-census project. The present chapter
proves its finite-board statements; those specialist constructions are further
reading, not consequences of checkerboard balance or the recurrence above.

## Exercises with staged help

### Exercise 1
<a id="colorings-tilings-ex-1"></a>

**Explorer.** Can a $5 \\times 5$ board be tiled by dominoes? Give the quickest
   certificate.

<details>
<summary>Hint 1</summary>

Compare the area with the size of one domino.

</details>
<details>
<summary>Hint 2</summary>

A sum of even areas is even.

</details>
<details>
<summary>Solution</summary>

No. Its area is 25, odd, while every domino covers 2 cells.

</details>

### Exercise 2
<a id="colorings-tilings-ex-2"></a>

**Foundation.** Remove one black and one white square from an $8 \\times 8$ board.
   Does checkerboard balance prove the remainder is tileable?

<details>
<summary>Hint 1</summary>

Separate a necessary condition from a sufficient condition.

</details>
<details>
<summary>Hint 2</summary>

Equal colour counts give no explicit covering of the region.

</details>
<details>
<summary>Solution</summary>

Checkerboard balance by itself is only a necessary condition for a general
region. For this particular full $8\\times8$ board, however, every removal
of one black and one white cell is tileable by the spanning-cycle construction
above. A counterexample on another balanced region would not refute that
specific statement. The additional cycle structure, rather than the colour
count alone, supplies the actual tiling proof.

</details>

### Exercise 3
<a id="colorings-tilings-ex-3"></a>

**Secondary.** A $1 \\times n$ strip is tiled by squares and dominoes. Let $T_n$ be
   the number of tilings. Derive a recurrence and compute $T_1$ through $T_6$.

<details>
<summary>Hint 1</summary>

Inspect the leftmost cell of the strip.

</details>
<details>
<summary>Hint 2</summary>

Its tile is either one square or one domino; treat the empty strip explicitly.

</details>
<details>
<summary>Solution</summary>

Inspect the leftmost cell. It is either a square followed by a tiling of
   length $n-1$, or the first half of a domino followed by a tiling of $n-2$.
   Hence $T_n=T_{n-1}+T_{n-2}$, with $T_0=1,T_1=1$. The requested values are
   $1,2,3,5,8,13$.

</details>

### Exercise 4
<a id="colorings-tilings-ex-4"></a>

**Secondary.** Prove a rectangle is domino-tileable exactly when at least one
   side length is even.

<details>
<summary>Hint 1</summary>

For existence, pair adjacent cells along an even direction.

</details>
<details>
<summary>Hint 2</summary>

For impossibility, assume both side lengths are odd.

</details>
<details>
<summary>Solution</summary>

If one side is even, pair adjacent cells along that direction as in the worked
   construction. If both sides are odd, the area is odd and cannot be partitioned
   into pieces of area 2.

</details>

### Exercise 5
<a id="colorings-tilings-ex-5"></a>

**Undergraduate.** A board has one cell for each pair $(r,c)$ with
   $1\\le r,c\\le 10$. Tiles are $1 \\times 4$ horizontal bars only. Determine whether the
   board can be tiled and prove your answer.

<details>
<summary>Hint 1</summary>

A permitted tile never crosses from one row into another.

</details>
<details>
<summary>Hint 2</summary>

How many cells of one row can a collection of bars cover?

</details>
<details>
<summary>Solution</summary>

No. A horizontal bar never crosses rows, so each row of length 10 would need
   to be partitioned into lengths 4. Since 10 is not divisible by 4, this is
   impossible. Equivalently colour columns $0,1,2,3$ cyclically: a bar takes one
   of each, but each row has label counts $3,3,2,2$.

</details>

### Exercise 6
<a id="colorings-tilings-ex-6"></a>

How many L-trominoes occur in a deficient $8\\times8$ board construction?

<details>
<summary>Hint 1</summary>

Count the remaining cells.

</details>
<details>
<summary>Hint 2</summary>

Each L covers exactly three cells.

</details>
<details>
<summary>Solution</summary>

The board has $64-1=63$ remaining cells, so every tiling uses $63/3=21$ tiles. The deficient-square theorem supplies a tiling; the area computation alone would not establish it.

</details>

### Exercise 7
<a id="colorings-tilings-ex-7"></a>

Can a $4\\times4$ board with $(1,1)$ and $(1,3)$ removed be domino-tiled?

<details>
<summary>Hint 1</summary>

Check the parity of each removed coordinate sum.

</details>
<details>
<summary>Hint 2</summary>

Every domino covers one cell of each checkerboard colour.

</details>
<details>
<summary>Solution</summary>

Both removed cells have even coordinate sum and therefore the same colour. From eight of each colour, the remainder has six of one and eight of the other. Seven dominoes would need seven of each, so no tiling exists.

</details>

### Exercise 8
<a id="colorings-tilings-ex-8"></a>

Compute $D_5$ and $D_6$ for the two-row rectangle.

<details>
<summary>Hint 1</summary>

Use the proven recurrence rather than drawing every tiling.

</details>
<details>
<summary>Hint 2</summary>

The previous values are $D_3=3,D_4=5$.

</details>
<details>
<summary>Solution</summary>

$D_5=D_4+D_3=5+3=8$, and $D_6=D_5+D_4=8+5=13$. The leftmost-tile decomposition proves these are exact counts.

</details>

### Exercise 9
<a id="colorings-tilings-ex-9"></a>

Give a balanced region that cannot be domino-tiled.

<details>
<summary>Hint 1</summary>

The region need not be connected.

</details>
<details>
<summary>Hint 2</summary>

Choose two opposite-coloured cells that are not adjacent.

</details>
<details>
<summary>Solution</summary>

Take cells $(1,1)$ and $(1,4)$ only. Their coordinate sums have opposite parity, giving one of each colour. They are not edge-adjacent, so no single domino covers them. Balance is therefore insufficient in general.

</details>

### Exercise 10
<a id="colorings-tilings-ex-10"></a>

Explain why the deficient-square induction needs all missing-cell positions in its hypothesis.

<details>
<summary>Hint 1</summary>

Inspect the defects created by the central L.

</details>
<details>
<summary>Hint 2</summary>

A missing cell in a smaller quadrant need not be its outer corner.

</details>
<details>
<summary>Solution</summary>

The original missing cell can lie anywhere in its quadrant. The central tile creates specific central defects in the other three quadrants. An induction hypothesis only for one fixed defect position cannot necessarily be applied to these four different smaller boards. The all-positions statement is exactly strong enough to close the recursion.

</details>

## Project: tile census

On squared paper, choose one tetromino (four edge-connected cells). Enumerate its
distinct rotations and reflections by coordinates. Investigate which rectangles
of area at most 48 it tiles. For every positive claim provide a coordinate list;
for every negative claim provide an area, coloring, boundary, or exhaustive-search
certificate. State when your evidence is only experimental.

## Summary

Choose weights around the actual tile orientations. An invariant mismatch
proves impossibility, while balanced counts alone may remain inconclusive.
Coordinate placements and the deficient-square induction give constructive
certificates. Classifying the first tile can instead produce a recurrence
that counts every tiling once.

`;export{e as default};