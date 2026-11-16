# Read a component after deleting a bridge

*Hard · [Discrete mathematics](index.md)*

An undirected graph on $\{A,B,C,D,E,F,G\}$ has edges AB,BC,CA,CD,DE,EF,FD. Delete edge CD. List all vertices reachable from A, including A itself.

```answer
{"answer":{"kind":"set","expected":"{A, B, C}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The deleted edge is the only connection between the two displayed triangles.

</details>

<details>
<summary>Hint 2</summary>

Include the starting vertex even though reaching it needs no edge traversal.

</details>

<details>
<summary>Worked solution</summary>

Deleting the unique cross-connection separates the two connected pieces.

1. The edges AB,BC,CA still connect A,B,C.
2. The D,E,F triangle has no remaining edge to that triangle, and G is isolated.
3. The component reachable from A is $\{A,B,C\}$.

</details>
