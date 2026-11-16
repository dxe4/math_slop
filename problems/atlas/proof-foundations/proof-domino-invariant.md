# Mutilated chessboard

*Difficulty 4 of 5 · [Proof foundations](index.md) · exercise 5 of 5*

An 8 by 8 chessboard has two opposite corner squares removed. Can the remaining 62 squares be tiled by 31 dominoes, each covering two edge-adjacent squares? Prove your answer.

<details>
<summary>Hint 1</summary>

Color the board as a chessboard

</details>

<details>
<summary>Hint 2</summary>

Every domino covers one square of each color

</details>

<details>
<summary>Worked solution</summary>

Opposite corners of an even-by-even chessboard have the same color. Removing them leaves 30 squares of that color and 32 of the other color. Every edge-adjacent domino covers exactly one black and one white square, so any domino tiling covers equal numbers of the two colors. The remaining board has unequal color counts and therefore cannot be tiled. The color difference is an invariant under placing dominoes.

**Answer.** No; removing equal-colored corners leaves unequal counts, while each domino covers one of each color.

</details>

*Tags: invariant, coloring, combinatorics*
