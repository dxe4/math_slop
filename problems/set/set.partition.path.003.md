# A block supplies every internal ordered pair

*Medium · [Set theory](index.md)*

A partition of {a,b,c,d} has blocks {a,b}, {c}, {d}, with distinct letters. Relate two objects exactly when they lie in the same block, including an object with itself. Give blocks, the number of equivalence classes, and pairs, the number of ordered pairs in the relation.

```answer
{"answer":{"kind":"integer_pair","expected":{"blocks":3,"pairs":6},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Each partition block becomes one equivalence class.

</details>

<details>
<summary>Hint 2</summary>

A block of size two contributes four ordered pairs; each singleton contributes one loop.

</details>

<details>
<summary>Worked solution</summary>

An equivalence relation connects all pairs within each block and none across blocks.

1. There are three blocks, hence three classes.
2. The pairs from {a,b} are (a,a),(a,b),(b,a),(b,b). Together with (c,c) and (d,d), there are $6$ pairs.

</details>
