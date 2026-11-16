# Compress each domino before placing the tile types

*Medium · [Original olympiad-style problems](index.md)*

How many edge-aligned tilings of a $1$ by $7$ strip use exactly two dominoes of length two and otherwise unit squares?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Subtract the length covered by the two dominoes.

</details>

<details>
<summary>Hint 2</summary>

After compression, the tile sequence determines the tiling uniquely.

</details>

<details>
<summary>Worked solution</summary>

Fixed tile multiplicities turn a tiling into an ordinary word of tile types.

1. The dominoes cover four cells, leaving three unit squares.
2. There are five tile positions in the compressed sequence, of which two are domino positions.
3. Choosing those two positions gives binomial(5,2)=10 tilings.

</details>
