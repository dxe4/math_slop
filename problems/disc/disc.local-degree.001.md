# Count incident edges at a vertex

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5\}$ and edges $\{1,2\}, \{1,3\}, \{2,3\}, \{3,4\}, \{3,5\}$. What is the degree of vertex $3$? The degree is the number of edges incident with that vertex.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks the degree of one vertex in a loop-free finite graph; no theorem proof is assessed."}}
```

<details>
<summary>Hint 1</summary>

An incident edge has vertex $3$ as one of its endpoints.

</details>

<details>
<summary>Hint 2</summary>

Count both edges written with $3$ second and edges written with $3$ first.

</details>

<details>
<summary>Worked solution</summary>

Degree measures local edge incidence rather than the total graph size.

1. The incident edges are $\{1,3\}, \{2,3\}, \{3,4\}, \{3,5\}$.
2. There are four such edges, so deg($3$)=$4$; $\{1,2\}$ does not contribute.

</details>
