# Keep an isolated vertex

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has $V=\{1,2,3,4,5,6\}$ and edges $\{1,2\},\{2,3\},\{3,1\},\{4,5\}$. Give the neighbor set of $6$; use {} if empty.

```answer
{"answer":{"kind":"finite_integer_set","expected":[],"checker_scope":"Checks only this authored read-empty-neighbor-set task. Does not certify unrestricted proof validity, general construction ability or full mastery of graph representations."}}
```

<details>
<summary>Hint 1</summary>

Look for an edge containing $6$.

</details>

<details>
<summary>Hint 2</summary>

Being listed as a vertex does not require having an edge.

</details>

<details>
<summary>Worked solution</summary>

Keep the vertex set separate from the edge set and decode symmetric adjacency lists.

1. No edge has endpoint $6$.
2. Its neighbor set is {}.

</details>
