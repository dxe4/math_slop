# Count components including an isolated vertex

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6,7\}$ and edges $\{1,2\}, \{2,3\}, \{3,1\}, \{4,5\}, \{5,6\}$. How many connected components does it have? An isolated vertex is a component by itself.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks the number of connected components in this explicitly specified finite graph, counting isolated vertices."}}
```

<details>
<summary>Hint 1</summary>

Group together vertices joined by any walk.

</details>

<details>
<summary>Hint 2</summary>

After grouping the two edge-containing pieces, check whether every listed vertex has been included.

</details>

<details>
<summary>Worked solution</summary>

Components partition the entire vertex set, including vertices absent from the edge list.

1. The vertices $1,2,3$ form one component, and $4,5,6$ form a second.
2. Vertex $7$ has no incident edge and forms a third component, so the answer is $3$.

</details>
