# Classify binary matrices by alternating components

*Hard · [Original olympiad-style problems](index.md)*

How many $4\times4$ zero-one matrices have exactly two ones in every row and every column? All rows and columns are labeled.

```answer
{"answer":{"kind":"integer","expected":"90","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

View each one as an edge between its row label and column label; every vertex has degree two.

</details>

<details>
<summary>Hint 2</summary>

An alternating component is a cycle of at least four edges, so only one eight-cycle or two four-cycles can occur.

</details>

<details>
<summary>Worked solution</summary>

Use a structural decomposition before counting labeled realizations.

1. The bipartite simple graph represented by the matrix is two-regular, so each connected component is a cycle. With four vertices in each class, the component types are one cycle using all eight vertices or two cycles each using two row and two column vertices.
2. For one eight-cycle, fix a row as the start. Order the other three rows in $3!$ ways and assign the four columns to the intervening gaps in $4!$ ways. Reversal counts the same undirected cycle twice, giving seventy-two.
3. For two four-cycles, partition rows into two pairs in three ways and columns likewise in three ways, then match the pair blocks in two ways. Each matched block is forced to be complete two-by-two, giving eighteen.
4. The types are disjoint and exhaustive, so the total is ninety. Simplicity excludes a two-edge doubled component, which would not be a zero-one matrix.

</details>
