# Encode an edge list in a fixed matrix order

*Hard · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $A,B,C$ and edges AB,BC. Enter its adjacency matrix with both rows and columns ordered A,B,C, using one for an edge and zero otherwise.

```answer
{"answer":{"kind":"matrix","rows":3,"columns":3,"expected":[["0","1","0"],["1","0","1"],["0","1","0"]],"checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Diagonal entries are zero because the graph has no loops.

</details>

<details>
<summary>Hint 2</summary>

Undirected adjacency makes the matrix symmetric, but the absent AC edge must stay zero.

</details>

<details>
<summary>Worked solution</summary>

Each matrix row records the corresponding vertex neighbor set in a declared common order.

1. A is adjacent only to B, giving row (0,1,0).
2. B is adjacent to A and C, giving row (1,0,1).
3. C is adjacent only to B, giving row (0,1,0). These are the requested matrix rows.

</details>
