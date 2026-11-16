# Transfer a coloring invariant to a walk

*Difficulty 2 of 5 · [Transferable proof strategies](index.md) · exercise 1 of 4*

A walk on the integer grid starts at (0,0), and each move changes exactly one coordinate by +1 or -1. Prove that the walk cannot return to (0,0) after an odd number of moves.

<details>
<summary>Hint 1</summary>

Track the parity of x+y

</details>

<details>
<summary>Hint 2</summary>

Every allowed move flips that parity

</details>

<details>
<summary>Worked solution</summary>

At the starting point, $x+y=0$ is even. Every move changes x+y by either +1 or -1, so its parity flips on every step. After an odd number of moves, x+y is therefore odd. Returning to (0,0) would make x+y even, a contradiction. This is the same two-color invariant as coloring a grid by the parity of x+y: each move switches color, so a return requires an even number of switches.

**Answer.** Parity of x+y flips each move, so a return to its initial even parity requires an even number of moves.

</details>

*Tags: invariant, parity, grid walk*
