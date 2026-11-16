# Read every neighbor of two

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has $V=\{1,2,3,4\}$ and exactly edges $\{1,2\},\{2,3\},\{2,4\}$. Give the neighbors of $2$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,4],"checker_scope":"Checks only this authored read-neighbor-set task. Does not certify unrestricted proof validity, general construction ability or full mastery of graph representations."}}
```

<details>
<summary>Hint 1</summary>

Find edges containing $2$.

</details>

<details>
<summary>Hint 2</summary>

Keep each other endpoint.

</details>

<details>
<summary>Worked solution</summary>

Keep the vertex set separate from the edge set and decode symmetric adjacency lists.

1. All three edges contain $2$.
2. Their other endpoints give $\{1,3,4\}$.

</details>
