# Distinguish cycle vertices from vertices reachable afterward

*Hard · [Discrete mathematics](index.md)*

A directed graph on $\{1,\ldots,6\}$ has arrows 1 to 2, 2 to 3, 3 to 1, 3 to 4, 4 to 5 and 6 to 5. List exactly the vertices belonging to some directed cycle.

```answer
{"answer":{"kind":"set","expected":"{1, 2, 3}","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Being reachable from a cycle does not by itself put a vertex on a cycle.

</details>

<details>
<summary>Hint 2</summary>

A cycle requires a directed path back to its starting vertex.

</details>

<details>
<summary>Worked solution</summary>

Only the mutually returning part can lie on a directed cycle.

1. The arrows 1 to 2 to 3 to 1 form a directed cycle, including vertices one,two,three.
2. From four the only outgoing route ends at five, which has no outgoing arrow. Vertex six has no incoming arrow, so it cannot lie on a cycle either.
3. The complete cycle-vertex set is $\{1,2,3\}$.

</details>
