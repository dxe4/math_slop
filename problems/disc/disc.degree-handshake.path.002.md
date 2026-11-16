# Degree in a path

*Easy · [Discrete mathematics](index.md)*

A simple undirected graph has $V=\{1,2,3,4,5\}, E$={$\{1,2\},\{2,3\},\{3,4\},\{4,5\}$}. Find deg($3$).

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks only this authored count-local-degree task. Does not certify unrestricted proof validity, general construction ability or full mastery of degrees and the degree-sum identity."}}
```

<details>
<summary>Hint 1</summary>

Only edges touching $3$ count.

</details>

<details>
<summary>Hint 2</summary>

Other edges on the path are irrelevant locally.

</details>

<details>
<summary>Worked solution</summary>

Count local edge incidences and use the total-degree identity for finite simple undirected graphs.

1. The incident edges are $\{2,3\},\{3,4\}$.
2. They number two.

</details>
