# Decode two pieces of a graph

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has complete adjacency list $1$:$\{2,4\}$; $2$:$\{1,3\}$; $3$:$\{2,4\}$; $4$:$\{1,3\}$; $5$:$\{6\}$; $6$:$\{5\}$. How many distinct edges are represented? The list contains every vertex and lists each edge at both endpoints.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Checks an undirected edge count from this stated adjacency list, including both components."}}
```

<details>
<summary>Hint 1</summary>

Count distinct unordered endpoint pairs across every row.

</details>

<details>
<summary>Hint 2</summary>

Rows $5$ and $6$ describe one additional edge, rather than two additional edges.

</details>

<details>
<summary>Worked solution</summary>

Separate components still contribute to the same total edge count.

1. Among vertices $1,2,3,4$ the edges are $\{1,2\}, \{1,4\}, \{2,3\}, \{3,4\}$.
2. The other piece contributes the single edge {5,6}, so the total is $4+1=5$.

</details>
