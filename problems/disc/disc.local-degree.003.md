# Keep an isolated vertex in the graph

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5\}$ and exactly the edges $\{1,2\}, \{1,3\}, \{2,4\}$. What is the degree of vertex $5$? A listed vertex remains part of the graph even if it occurs in no edge.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Checks recognition that the listed isolated vertex has zero incident edges; does not infer vertices from edges alone."}}
```

<details>
<summary>Hint 1</summary>

Search the complete edge list for occurrences of $5$.

</details>

<details>
<summary>Hint 2</summary>

Having no incident edge is allowed; it does not remove the vertex.

</details>

<details>
<summary>Worked solution</summary>

The vertex set and edge set are separate parts of the graph specification.

1. None of the three supplied edges has endpoint $5$.
2. Therefore deg($5$)=$0$. Vertex $5$ is called isolated.

</details>
