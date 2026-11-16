# Ignore edges away from the chosen vertex

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6\}$ and edges $\{1,6\}, \{2,6\}, \{2,4\}, \{3,5\}, \{4,5\}$. Give the set of neighbors of vertex $2$. No loops or additional edges are present.

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,6],"checker_scope":"Checks the exact finite neighbor set of vertex 2, rather than all vertices reachable by a longer walk."}}
```

<details>
<summary>Hint 1</summary>

A neighbor must be joined by one edge, not merely by a chain of several edges.

</details>

<details>
<summary>Hint 2</summary>

Only two listed edges contain $2$.

</details>

<details>
<summary>Worked solution</summary>

Adjacency is a one-edge relationship; reachability may use many edges.

1. The edges containing $2$ are $\{2,6\}$ and $\{2,4\}$.
2. Thus the neighbor set is $\{4,6\}$. Vertex $1$ is reachable through $6$ but is not adjacent to $2$.

</details>
