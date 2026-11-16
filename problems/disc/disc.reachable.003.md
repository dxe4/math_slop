# A start in the smaller component

*Easy · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $\{1,2,3,4,5\}$ and exactly the edges $\{1,2\}, \{2,3\}, \{4,5\}$. Give every vertex reachable from $5$ by a walk, including the zero-edge walk at $5$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,5],"checker_scope":"Checks the reachable component of one specified start in a finite disconnected graph."}}
```

<details>
<summary>Hint 1</summary>

The requested component is the one containing $5$, rather than the largest component.

</details>

<details>
<summary>Hint 2</summary>

The only edge touching $5$ goes to $4$, and no edge leaves that pair.

</details>

<details>
<summary>Worked solution</summary>

A connected component is determined by the chosen start, not by which piece has most vertices.

1. The zero-edge walk reaches $5$, and the edge $\{4,5\}$ reaches $4$.
2. No edge joins $\{4,5\}$ to {1,2,3}, so the complete reachable set is $\{4,5\}$.

</details>
