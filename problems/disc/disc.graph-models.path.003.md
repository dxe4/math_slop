# Count edges from adjacency rows

*Medium · [Discrete mathematics](index.md)*

The complete adjacency list of a simple undirected graph is $1$:$\{2,3,4\}$; $2$:$\{1,3,4\}$; $3$:$\{1,2,4\}$; $4$:$\{1,2,3\}$. How many distinct edges are represented?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Checks only this authored decode-distinct-edge-count task. Does not certify unrestricted proof validity, general construction ability or full mastery of graph representations."}}
```

<details>
<summary>Hint 1</summary>

Each edge appears at both endpoints.

</details>

<details>
<summary>Hint 2</summary>

There are twelve neighbor entries.

</details>

<details>
<summary>Worked solution</summary>

Keep the vertex set separate from the edge set and decode symmetric adjacency lists.

1. The edges are $\{1,2\},\{1,3\},\{1,4\},\{2,3\},\{2,4\},\{3,4\}$.
2. There are six, also $12/2$.

</details>
