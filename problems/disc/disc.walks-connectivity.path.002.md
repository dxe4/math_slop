# Start inside a path

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has $V=\{1,2,3,4\}, E$={$\{1,2\},\{2,3\},\{3,4\}$}. Give every vertex reachable from $2$, including the zero-edge walk.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3,4],"checker_scope":"Checks only this authored enumerate-component-from-start task. Does not certify unrestricted proof validity, general construction ability or full mastery of walks, paths and connectivity."}}
```

<details>
<summary>Hint 1</summary>

Use edges in either direction.

</details>

<details>
<summary>Hint 2</summary>

Reach $4$ via $3$.

</details>

<details>
<summary>Worked solution</summary>

Walks follow supplied edges; components contain every vertex reachable from a start, including that start.

1. From $2$ reach $1$ and $3$, then $4$ via $3$.
2. All four vertices are reachable.

</details>
