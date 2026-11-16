# Read neighbors from an edge list

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5\}$ and edges $\{1,2\}, \{1,4\}, \{2,3\}, \{3,4\}, \{4,5\}$. Give the set of neighbors of vertex $4$. A neighbor shares an edge with $4$; the graph has no loops.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,5],"checker_scope":"Checks only the neighbors of one specified vertex in this finite edge list; does not certify general graph translation."}}
```

<details>
<summary>Hint 1</summary>

Inspect the edges containing vertex 4, in either position.

</details>

<details>
<summary>Hint 2</summary>

For each such edge, keep its other endpoint; do not include $4$ itself.

</details>

<details>
<summary>Worked solution</summary>

An undirected edge has no preferred endpoint order.

1. The edges containing $4$ are $\{1,4\}, \{3,4\}$ and $\{4,5\}$.
2. Their other endpoints are $1, 3$ and 5, so the neighbor set is $\{1,3,5\}$.

</details>
