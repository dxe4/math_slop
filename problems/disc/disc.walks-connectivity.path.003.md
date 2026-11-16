# Count a triangle and a pair

*Medium · [Discrete mathematics](index.md)*

A simple undirected graph has $V=\{1,2,3,4,5\}$ and exactly edges $\{1,2\},\{2,3\},\{3,1\},\{4,5\}$. How many components are there?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks only this authored count-component-partition task. Does not certify unrestricted proof validity, general construction ability or full mastery of walks, paths and connectivity."}}
```

<details>
<summary>Hint 1</summary>

Group by reachability.

</details>

<details>
<summary>Hint 2</summary>

A cycle is one connected piece.

</details>

<details>
<summary>Worked solution</summary>

Walks follow supplied edges; components contain every vertex reachable from a start, including that start.

1. $\{1,2,3\}$ is one component.
2. $\{4,5\}$ is another, with no joining edge, so the count is $2$.

</details>
