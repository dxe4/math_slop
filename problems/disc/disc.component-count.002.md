# Use paths rather than nearby labels

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6\}$ and exactly the edges $\{1,3\}, \{3,5\}, \{2,4\}$. How many connected components are there? Listed vertices with no incident edge count as singleton components.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks component count from the specified edges; numeric labels do not supply additional adjacency."}}
```

<details>
<summary>Hint 1</summary>

Consecutive numeric labels do not imply an edge.

</details>

<details>
<summary>Hint 2</summary>

Find the component containing $1$, then one containing $2$, and then inspect unused vertices.

</details>

<details>
<summary>Worked solution</summary>

Only stated edges determine connectivity; labels and drawing positions do not add edges.

1. The walk $1,3,5$ connects exactly the first component $\{1,3,5\}$; the edge $\{2,4\}$ gives another component $\{2,4\}$.
2. Vertex $6$ is isolated, giving the third component $\{6\}$. The total is $3$.

</details>
