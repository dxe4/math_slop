# Give a route using every edge once

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $A,B,C,D$ and edges $AB,BC,CA,CD$. Give a vertex sequence starting at $C$ and ending at $D$ that traverses every edge exactly once.

```answer
{"answer":{"kind":"euler_trail","expected_constraints":{"edges":[["A","B"],["B","C"],["C","A"],["C","D"]],"start":"C","end":"D","directed":false},"checker_scope":"Checks endpoints, adjacency, edge multiplicity, and complete coverage; accepts every valid route."}}
```

<details>
<summary>Hint 1</summary>

$C$ and $D$ are the odd-degree vertices.

</details>

<details>
<summary>Hint 2</summary>

The edge $CD$ must finish the requested route, so first traverse the triangle.

</details>

<details>
<summary>Worked solution</summary>

Euler trails cover edges; revisiting a vertex is allowed.

1. One route is $C,A,B,C,D$.
2. Its successive edges are $CA,AB,BC,CD$, exactly the four graph edges with no repetition.

An edge list, adjacency table, and text vertex-sequence input allow the full task without a drawing.

</details>
