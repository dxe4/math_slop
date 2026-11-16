# Reach beyond the immediate neighbors

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5,6\}$ and edges $\{1,2\}, \{2,4\}, \{4,3\}, \{5,6\}$. Give the set of vertices reachable from $4$ by a walk, including $4$ itself via a zero-edge walk.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3,4],"checker_scope":"Checks reachability in this graph, including multi-edge walks; does not assess shortest paths or a general algorithm."}}
```

<details>
<summary>Hint 1</summary>

Reachability may use more than one edge.

</details>

<details>
<summary>Hint 2</summary>

From $4$, you can first reach $2$ and then continue to $1$.

</details>

<details>
<summary>Worked solution</summary>

Neighbors give one step; repeated allowed steps give the whole reachable component.

1. The start $4$ reaches $2$ and $3$ directly, and reaches $1$ through the walk $4,2,1$.
2. There is no edge to the separate pair 5,6, so the reachable set is $\{1,2,3,4\}$.

</details>
