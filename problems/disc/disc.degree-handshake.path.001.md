# Degree in a complete graph

*Easy · [Discrete mathematics](index.md)*

A simple undirected graph on $\{1,2,3,4\}$ has every distinct pair as an edge. Find the degree of $1$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks only this authored count-local-degree task. Does not certify unrestricted proof validity, general construction ability or full mastery of degrees and the degree-sum identity."}}
```

<details>
<summary>Hint 1</summary>

There is no loop at $1$.

</details>

<details>
<summary>Hint 2</summary>

Count its edges to the other vertices.

</details>

<details>
<summary>Worked solution</summary>

Count local edge incidences and use the total-degree identity for finite simple undirected graphs.

1. The incident edges are $\{1,2\},\{1,3\},\{1,4\}$.
2. Thus deg($1$)=$3$.

</details>
