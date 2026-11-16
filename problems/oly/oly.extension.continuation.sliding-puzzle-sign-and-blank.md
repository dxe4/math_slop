# A parity invariant involving the empty square

*Hard · [Original olympiad-style problems](index.md)*

On a $4\times4$ sliding board, tiles $1,\ldots,15$ and one blank start in row order, with the blank bottom right. A move swaps the blank with one orthogonally adjacent tile. Prove it is impossible to swap tiles $1,2$ while leaving every other tile and the blank in its initial square. Explain why the parity of the tile permutation alone is not invariant.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Treat the blank as a sixteenth labeled object. Every move is one transposition.

</details>

<details>
<summary>Hint 2</summary>

The checkerboard color of the blank changes at every move too. Multiply the two signs.

</details>

<details>
<summary>Model proof</summary>

The sign change of the full permutation is compensated by the color change of the blank.

1. Label all sixteen initial positions, including the blank. Let $\sigma$ be the current permutation of the sixteen objects relative to their initial positions, and let $c$ be the parity of the blank\'s row-plus-column coordinate relative to its initial color.
2. Each legal move is a transposition, so it reverses $\operatorname{sgn}\sigma$. It also moves the blank to the opposite checkerboard color, reversing $(-1)^c$. Therefore $\operatorname{sgn}\sigma\,(-1)^c$ is invariant and initially $+1$.
3. In the proposed target the blank is back in its original square, so $c=0$, while the full permutation is the single transposition of $1,2$, of sign $-1$. Its invariant would be $-1$, proving impossibility.
4. Permutation sign by itself changes on every move when the blank is included. If one ignores the blank and reads the nonblank tiles row by row, a horizontal blank move preserves their relative order while a vertical move carries a tile past three others and changes that sign. Thus neither reading supplies an unqualified invariant without the blank-location correction.

**Self-assessment rubric**

- Define the sixteen-object sign with the blank included.
- Show both factors reverse at every legal move.
- Compute the opposite invariant at the stipulated target.
- Explain why excluding the blank does not give a move-invariant parity.

</details>
