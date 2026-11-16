# Prove a winning strategy without selecting its first move

*Hard · [Original olympiad-style problems](index.md)*

A finite $m\times n$ rectangle of cells has $m,n\ge2$ and a poisoned bottom-left cell $(1,1)$. On a move, choose a remaining cell $(i,j)$ and remove it and all remaining cells with both coordinates at least $i,j$. Taking the poisoned cell loses immediately. Prove the first player has a winning strategy. No explicit optimal first move is required.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Every game is finite, so every nonterminal position has a definite winning or losing status under optimal play.

</details>

<details>
<summary>Hint 2</summary>

Try removing only the top-right cell. If that is a losing first move, consider the opponent\'s winning reply and make that reply directly from the original rectangle.

</details>

<details>
<summary>Model proof</summary>

The top-right cell is contained in the removed corner of every other possible opening, allowing a stolen strategy.

1. Every safe move removes at least one cell and leaves the poison. Thus no play can be infinite or drawn; backward induction on the number of remaining safe cells classifies positions as winning or losing for the player to move.
2. Let the first player remove only cell $(m,n)$. If the resulting position is losing for the next player, this is already a winning opening.
3. Otherwise the opponent has a safe reply $(i,j)$ leaving a losing position for the next player. It cannot be the already removed $(m,n)$ and cannot take the poison. In the original full rectangle, choosing $(i,j)$ removes a northeast corner that includes $(m,n)$. Hence this direct move leaves exactly the same board as the two-move sequence.
4. The first player could therefore choose $(i,j)$ directly and hand the opponent that losing board. Either case proves a winning first move exists. This argument establishes existence rather than an algorithm identifying which opening is best.

**Self-assessment rubric**

- Justify winning/losing status by finite backward induction.
- Separate the winning and losing possibilities after removing only the top-right cell.
- Prove the opponent reply made directly leaves exactly the same position.
- Conclude a winning strategy without pretending the argument selects a particular move.

</details>
