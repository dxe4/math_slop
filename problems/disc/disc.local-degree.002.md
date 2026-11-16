# Separate a degree from a cycle length

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6\}$ and edges $\{1,2\}, \{2,3\}, \{3,4\}, \{4,1\}, \{1,5\}, \{5,6\}$. Find the degree of vertex $1$. There are no other edges.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks the exact number of edges incident with vertex 1 in the stated simple graph."}}
```

<details>
<summary>Hint 1</summary>

The length of a cycle is not the degree of a vertex on it.

</details>

<details>
<summary>Hint 2</summary>

Two cycle edges touch $1$, and one edge leaves the cycle at $1$.

</details>

<details>
<summary>Worked solution</summary>

Only edges with the specified endpoint contribute to its degree.

1. The edges touching $1$ are $\{1,2\}, \{4,1\}, \{1,5\}$.
2. Counting them gives deg($1$)=$3$. The edge $\{5,6\}$ is not incident with $1$.

</details>
