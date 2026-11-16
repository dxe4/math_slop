# Find every vertex reachable from a start

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6\}$ and edges $\{1,2\}, \{2,3\}, \{4,5\}$. Give all vertices reachable from vertex $2$ by a walk. A walk of zero edges is allowed, so the starting vertex counts as reachable from itself.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3],"checker_scope":"Checks the finite component reachable from the stated start, with zero-edge reachability explicitly included."}}
```

<details>
<summary>Hint 1</summary>

Begin with the starting vertex, then follow supplied edges in either direction.

</details>

<details>
<summary>Hint 2</summary>

There is no edge joining the piece containing $2$ to vertices $4,5$ or $6$.

</details>

<details>
<summary>Worked solution</summary>

A component includes exactly the vertices connected to a start by some walk.

1. Starting at $2$ reaches $1$ and $3$ directly, and reaches $2$ by the allowed zero-edge walk.
2. No supplied edge leaves {1,2,3}, so the complete reachable set is $\{1,2,3\}$.

</details>
