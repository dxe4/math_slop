
# Domineering

Domineering is a partizan game played on a rectangular grid. Left places a $2 \times 1$ vertical domino; Right places a $1 \times 2$ horizontal domino. Dominoes may not overlap and must lie entirely on the board. The player with no legal move loses. This chapter analyzes small Domineering boards, classifies their outcome classes, and explores the computational challenges of larger boards.

## 6.1 Rules and notation

A Domineering position is a set of empty squares on a grid. A move by Left covers two adjacent empty squares in a vertical column. A move by Right covers two adjacent empty squares in a horizontal row. Covered squares are no longer available.

We denote an $m \times n$ board as the starting position with $mn$ empty squares. The game ends when no vertical or horizontal placement is possible.

**Rule correction.** Normal play ends when the player currently to move has no legal placement. The other player may still have moves. Requiring both orientations to be blocked is not the rule used by the outcome recurrence.

## 6.2 Small boards

**$1 \times 1$ board.** No domino fits. The first player loses. This is a P-position with value $0$.

**$1 \times 2$ board.** Left has no vertical move. Right places a horizontal domino and wins. This is an R-position.

**$2 \times 1$ board.** Left places a vertical domino and wins. Right has no move. This is an L-position.

**$2 \times 2$ board.** If Left fills either column, the only two empty squares form the other column, so Right has no horizontal move and loses. If Right fills either row, the remaining squares form a row, so Left has no vertical move and loses. The first player wins: $2\times2$ is N.

**$2 \times 3$ board.** Left wins moving first by filling the middle column: the two remaining columns are separated, and Right has no horizontal move. Right also wins moving first, as the exact backward-induction calculation below confirms. Thus $2\times3$ is N.

## 6.3 Decomposition into components

When a move splits the board into disconnected regions, the resulting position is the disjoint sum of the components. This is the key to analyzing Domineering computationally.

Geometric decomposition is useful only when the empty-square adjacency graph actually disconnects. A central-column placement on a $3\times3$ board covers two squares, but remaining squares in the untouched row still connect the left and right sides; it does not create two strips.

For reliable small-board analysis, encode the occupied squares by a set $S$. Let $W(S,t)$ mean that Left eventually wins when the next turn belongs to $t\in\{L,R\}$. If $V(S)$ and $H(S)$ are the legal vertical and horizontal placements, exact backward induction gives

$$W(S,L)=\bigvee_{v\in V(S)}W(S\cup v,R),\qquad
W(S,R)=\bigwedge_{h\in H(S)}W(S\cup h,L).$$

An empty disjunction is false (Left to move without a move loses), and an empty conjunction is true (Right to move without a move loses). Each child has two more occupied squares, so induction on the number of empty squares proves this recurrence and ensures termination.

For $3\times3$, evaluating the six vertical and six horizontal first moves gives a winning central-column move for Left and a winning central-row move for Right. Hence the first player wins and the board is N. The same enumeration classifies $3\times2$ as N: every vertical first move wins for Left, while Right wins by filling the middle row.

## 6.4 Outcome classes for rectangular boards

The outcome class of an $m \times n$ Domineering board depends on the parity and relative size of $m$ and $n$. Here is a table of known results for small boards:

| Board | Outcome |
|-------|---------|
| $1 \times 1$ | P |
| $1 \times 2$ | R |
| $2 \times 1$ | L |
| $2 \times 2$ | N |
| $2 \times 3$ | N |
| $3 \times 2$ | N |
| $3 \times 3$ | N |
| $4 \times 4$ | N |

These entries come from the recurrence in Section 6.3, applied to every reachable occupied-square set. Transposition exchanges the players, so it swaps L with R while preserving N and P; this checks the paired $2\times3$ and $3\times2$ entries. The small table does not establish a pattern for larger boards.

## 6.5 Computational methods

Because Domineering boards decompose into independent components, the Sprague–Grundy theorem applies to each impartial component, but Domineering is partizan. Instead, we use the **canonical form** algorithm: compute the values of all options, simplify using dominated and reversible options, and compare.

For small boards, this is feasible by hand or with a computer program. For larger boards, the state space grows exponentially, so a claimed outcome needs either a proof or a reproducible exhaustive computation.

The computational approach mirrors the theory:

1. Generate all legal moves for Left and Right.
2. For each move, compute the resulting board position.
3. If the board splits into components, compute the sum of their values.
4. Simplify the game to canonical form.
5. Determine the outcome class from the canonical form.

## 6.6 Common errors

**Error: assuming symmetry implies P.** Both the $2\times2$ and $3\times3$ boards are symmetric under transposition, yet both are N. Transposition exchanges the players; it does not supply a same-player reply strategy.

**Error: forgetting that components sum independently.** After a move splits the board, the resulting position is the sum of the components. Each component must be analyzed separately, and their values combined.

**Error: treating Domineering as impartial.** Left and Right have different move sets, so the Sprague–Grundy theorem does not apply directly. Only when a component happens to be symmetric (equal options for both players) can we use Grundy numbers.

**Error: guessing the outcome of large boards from small ones.** A finite table supports only the boards actually checked. Larger-board claims require separate proof or exhaustive computation.

## Explicit board arguments and rule qualifications

**Normal-play correction to Section 6.1.** The current player loses as soon as that player's orientation has no legal placement. A single vertical pair demonstrates why the original ending sentence is too restrictive: Right to move loses immediately although Left could still place a domino. Both players need not be blocked.

**Impartiality clarification for Sections 6.5–6.6.** Decomposing a board preserves the player-specific orientation rules. A symmetric region is not automatically impartial, and transposition exchanges the player identities instead of supplying identical moves. Grundy theory requires a genuinely impartial option structure. Ordinary nonterminal Domineering components remain partizan; the two-Boolean recurrence already suffices to determine finite outcomes.

**Worked example (The full form of a two-by-two square).** Left fills a column and leaves a vertical pair, worth one because Left alone can move there. Both possible Left placements have that value. Right fills a row and leaves a horizontal pair, worth minus one. Thus the square has reduced form $\{1\mid-1\}$.

The square is a switch, not zero. Left starting chooses the favorable value one, while Right starting chooses minus one, giving outcome N. Transpose symmetry exchanges the positive and negative followers; it does not make them equal or provide a second-player reply strategy. Two placements available at the start are also not two independent moves, since the first changes every later placement.

**Worked example (A hand strategy for the three-by-three square).** Label rows and columns one through three. Left fills $(1,2),(2,2)$ in the middle column. The remaining cells still connect through row three, so the move does not split the board into two components.

Right can place horizontally only at $(3,1),(3,2)$ or at $(3,2),(3,3)$. In the first case Left fills $(1,1),(2,1)$. All remaining empty cells then lie in column three, so Right has no horizontal move and loses. In the second case Left fills $(1,3),(2,3)$, leaving only column one available and again blocking Right.

Both replies have been covered, so Left has a winning first-player strategy. Transpose the entire argument to obtain a Right-first strategy: Right opens horizontally in the middle row and responds to either possible vertical reply by the transposed placement. Hence either starter wins and the board is N. The strategy depends on actual cell sets rather than an incorrect claim that the first move disconnects the board.

**Worked example (Opposite corridors and identical corridors).** Take a vertical pair $(0,0),(1,0)$ and a horizontal pair $(0,3),(0,4)$, with no other empty cells. Left can move only in the first region and Right only in the second. Whoever starts removes their pair, and the opponent removes the other. The starter then has no move. Thus the sum is P, agreeing with $1+(-1)=0$.

Replace the horizontal pair by a second separated vertical pair. Right has no move from the start, while Left can remove either pair. The sum is two and has outcome L. Identical components have not canceled. In both examples independence follows because no legal domino can use cells from both separated components, rather than merely from visual similarity.

### A family proved without extrapolating a table

**Proposition 8.1 (One-dimensional strips).** A vertical strip of $m$ empty cells has value $\lfloor m/2\rfloor$. A horizontal strip of $n$ cells has value $-\lfloor n/2\rfloor$.

*Proof.* In a vertical strip only Left moves. Induct on $m$. A placement leaves two smaller vertical strips with total length $m-2$. By induction the sum of their values is at most $\lfloor(m-2)/2\rfloor=\lfloor m/2\rfloor-1$. An end placement attains that value, so all smaller Left options are dominated. Right has no option. For $m\ge2$ the game is therefore $\{\lfloor m/2\rfloor-1\mid\}=\lfloor m/2\rfloor$. Lengths zero and one are terminal and have value zero. Transposition exchanges players and negates the value, proving the horizontal formula. ∎

Every nonterminal horizontal strip is R, but its particular negative integer determines which vertical components cancel it. A four-cell horizontal strip cancels two separated vertical pairs; a three-cell horizontal strip cancels one. This is additional information that the outcome class alone cannot retain.

### Encoding and symmetry without altering the rules

An encoder must retain board shape, occupied cells, player to move and orientation convention. For one fixed shape, the occupied set and player suffice. If shapes vary, the same occupied-cell mask can describe different games and cannot share a cache entry without the board identifier.

Translations, half-turns and reflections that preserve vertical versus horizontal orientation give player-preserving symmetries. Transposition instead negates a value: it swaps L with R while preserving N and P. A solver using transposition must update the player interpretation accordingly. Treating the transpose as the same labelled state can turn a correct recurrence into an incorrect cache lookup.

Disconnected empty-cell adjacency components can be summed because each domino lies within one component and future placements only remove cells. They cannot recreate adjacency across occupied squares. A narrow neck or a visually central placement is insufficient evidence of disconnection; list remaining cells and their adjacencies before replacing a board by a sum.

Canonical forms are optional when the question asks only for the winner of a fixed finite position. The existential/universal recurrence evaluates outcomes directly. Full values become useful when independent positions are combined repeatedly, because component outcome classes do not generally determine the sum. This separates a valid outcome computation from the stronger and potentially much larger task of canonical-value construction.

The larger entries in the inherited small-board table are finite computational statements, not a theorem about parity or growing squares. The explicit arguments here establish their stated small examples without claiming a fresh exhaustive computation of the four-by-four entry. Further computations need a specified rule model, complete move generator and finite certificate. The table cannot justify a conclusion about five-by-five or an unbounded family merely because adjacent entries look alike.

## 6.7 Practice exercises

<a id="domineering-ex-1"></a>
### Exercise 6.1

Analyze the $1 \times 3$ Domineering board.


<details><summary>Hint 1</summary>

The single row prevents vertical placements.

</details>

<details><summary>Hint 2</summary>

Analyze both starting identities.

</details>

<details><summary>Solution</summary>

**Solution.** Left has no vertical move (the board is only one square tall). Right can place one horizontal domino covering two adjacent squares, leaving a single square. The single square is terminal for both players. So Right wins moving first, and Left loses moving first. The board is an R-position. $\square$

</details>

<a id="domineering-ex-2"></a>
### Exercise 6.2

Prove that the $2 \times 2$ board is an N-position.


<details><summary>Hint 1</summary>

Inspect the shape left after one row or column is filled.

</details>

<details><summary>Hint 2</summary>

The remaining orientation belongs only to the player who just moved.

</details>

<details><summary>Solution</summary>

**Solution.** If Left fills one column, the remaining two squares are vertical, so Right has no horizontal move. If Right fills one row, the remaining two squares are horizontal, so Left has no vertical move. In either case the player who moved first wins immediately; the board is N. $\square$

</details>

<a id="domineering-ex-3"></a>
### Exercise 6.3

Use the recurrence in Section 6.3 to show that the $3 \times 2$ board is an N-position.


<details><summary>Hint 1</summary>

After a vertical first move, identify the intact end row.

</details>

<details><summary>Hint 2</summary>

Right fills that row, then Left has a vertical pair in the other column.

</details>

<details><summary>Solution</summary>

**Solution.** There are four vertical first moves. After any one, Right's only possible reply fills the two cells of the opposite end row; Left then fills the remaining vertical pair in the other column and wins. Thus Left wins moving first. There are three horizontal first moves. Right chooses the middle row. Every possible vertical domino on a three-row board uses a cell of the middle row, so Left then has no legal move and loses immediately. Therefore either first player has a winning move, and $3\times2$ is N. $\square$

</details>

<a id="domineering-ex-4"></a>
### Exercise 6.4

Explain why knowing the outcomes through $4\times4$ does not determine the outcome of $5\times5$.


<details><summary>Hint 1</summary>

Adding a row and column changes move sets and component connections.

</details>

<details><summary>Hint 2</summary>

No monotonicity theorem follows from a finite table.

</details>

<details><summary>Solution</summary>

**Solution.** Adding a row and column changes both players' move sets and can join regions that were independent. No monotonicity theorem has been proved here, so the finite table cannot be extrapolated. One must apply the recurrence or give a separate strategy for $5\times5$. $\square$

</details>

<a id="domineering-ex-5"></a>
### Exercise 6.5

Suppose a Domineering board splits into two identical components after a move. Why does this not guarantee a P-position?


<details><summary>Hint 1</summary>

Identical partizan copies need not cancel.

</details>

<details><summary>Hint 2</summary>

Two separated vertical pairs give two positive games one.

</details>

<details><summary>Solution</summary>

**Solution.** In an impartial game, two identical components sum to P because their Grundy numbers XOR to $0$. In Domineering, the components are partizan, and the sum of two identical partizan games need not be $0$. For example, two copies of $1 = \{ 0 \mid \}$ sum to $2 = \{ 1 \mid \}$, which is L, not P. $\square$

</details>

<a id="domineering-ex-6"></a>
### Exercise 6.6

Find the value and outcome of a horizontal four-cell strip, listing all distinct option values.

<details><summary>Hint 1</summary>

Right can place at an end or in the middle.

</details>
<details><summary>Hint 2</summary>

An end leaves a horizontal pair; the middle leaves isolated cells.

</details>
<details><summary>Solution</summary>

Left has no move. An end placement leaves value minus one and a middle placement leaves zero. Right prefers minus one, so zero is dominated. The game is $\{\mid-1\}=-2$ and is R. Even in a one-player strip, not every legal placement is optimal.

</details>

<a id="domineering-ex-7"></a>
### Exercise 6.7

A board consists of two separated vertical pairs and one separated horizontal pair. Determine its value and outcome.

<details><summary>Hint 1</summary>

These are three independent integer components.

</details>
<details><summary>Hint 2</summary>

Compare the numbers of Left-only and Right-only moves.

</details>
<details><summary>Solution</summary>

The value is $1+1-1=1$, so it is L. Left starting removes a vertical pair, Right removes the horizontal pair, and Left removes the last pair. Right starting removes the horizontal pair, then Left removes one vertical pair and Right has no move. Thus Left wins for either starter.

</details>

<a id="domineering-ex-8"></a>
### Exercise 6.8

Prove that any position consisting entirely of isolated empty cells has value zero.

<details><summary>Hint 1</summary>

A domino requires adjacent empty cells.

</details>
<details><summary>Hint 2</summary>

Neither orientation is available, regardless of the number of cells.

</details>
<details><summary>Solution</summary>

No adjacent empty cells exist, so neither player has any placement. Both option sets are empty, making the game zero. Its outcome is P because either starter immediately loses. The number of unused cells alone therefore does not measure remaining play.

</details>

<a id="domineering-ex-9"></a>
### Exercise 6.9

State how transposition changes the two Left-winning predicates $W(S,L)$ and $W(S,R)$.

<details><summary>Hint 1</summary>

Transposition exchanges vertical Left placements with horizontal Right placements.

</details>
<details><summary>Hint 2</summary>

A Left win becomes a Right win with the opposite starting identity.

</details>
<details><summary>Solution</summary>

For transposed position $S^T$, $W(S^T,L)=\neg W(S,R)$ and $W(S^T,R)=\neg W(S,L)$. No draws occur, so negating Left-win means Right-win. Thus L and R exchange, while N and P stay in their respective classes. A cache using this symmetry must perform the player exchange and interpret the winner correctly.

</details>

<a id="domineering-ex-10"></a>
### Exercise 6.10

After Left fills $(1,2),(2,2)$ in a three-by-three board, explain why the remaining cells are connected and why Left still wins against either Right reply.

<details><summary>Hint 1</summary>

The entire bottom row remains empty.

</details>
<details><summary>Hint 2</summary>

Right must use a bottom-row pair, then Left removes the upper pair of the appropriate outer column.

</details>
<details><summary>Solution</summary>

The outer columns connect through row three, so the remainder has not decomposed. Right uses bottom cells one-two or two-three. After the first choice Left fills the upper pair of column one; after the second Left fills the upper pair of column three. Only the opposite outer column remains, so Right has no horizontal move. The winning strategy does not require the opening remainder to be disconnected.

</details>

## 6.8 Looking forward

Domineering illustrates the computational power of combinatorial game theory: small boards yield to case analysis, larger boards to computer search, and the theory of partizan sums provides the framework. In the next chapter, **Amazons**, we study a game with even richer structure: pieces move and block squares, creating positions that decompose into many independent regions. The interaction between geometry and algebra reaches a new level of complexity.


<a id="domineering-summary"></a>
## Summary

Domineering is a finite partizan placement game: the current player loses when that player's orientation has no move. Exact recursion and explicit cell replies prove small outcomes, while integer strip values combine independent regions. Genuine disconnected components sum, but transpose symmetry exchanges players and does not justify Grundy theory. Larger-board tables and complexity statements require separate certificates and precise rules.

