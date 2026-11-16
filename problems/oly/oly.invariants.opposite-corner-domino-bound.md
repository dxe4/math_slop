# Prove and attain a coloring bound

*Hard · [Original olympiad-style problems](index.md)*

Remove two diagonally opposite corner squares from an $8\times8$ checkerboard. What is the greatest number of nonoverlapping $1\times2$ dominoes that can be placed on the remaining squares? Dominoes align with square edges.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The removed corners have the same checkerboard color.

</details>

<details>
<summary>Hint 2</summary>

For attainment, begin with horizontal dominoes on the full board and discard those covering the removed corners.

</details>

<details>
<summary>Worked solution</summary>

Coloring gives the upper bound and a concrete partial tiling attains it.

1. The full board has 32 squares of each color. Removing the opposite corners leaves 30 of one color and 32 of the other.
2. Each domino covers one square of each color, so at most 30 dominoes can be placed.
3. A full horizontal tiling has 32 dominoes. The removed opposite corners belong to two distinct dominoes; discard those two and retain the other 30, attaining the bound.

</details>
