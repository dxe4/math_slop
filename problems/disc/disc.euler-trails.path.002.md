# Join two cycles at one vertex

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices A,B,C,D,E and edges AB,BC,CA,CD,DE,EC. Give a sequence starting and ending at C that uses every edge exactly once.

```answer
{"answer":{"kind":"euler_trail","expected_constraints":{"edges":[["A","B"],["B","C"],["C","A"],["C","D"],["D","E"],["E","C"]],"start":"C","end":"C","directed":false},"checker_scope":"Checks only this authored construct-euler-circuit task. Does not certify unrestricted proof validity, general construction ability or full mastery of euler trails and circuits."}}
```

<details>
<summary>Hint 1</summary>

The triangles meet at C.

</details>

<details>
<summary>Hint 2</summary>

You may revisit C between the triangles.

</details>

<details>
<summary>Worked solution</summary>

Euler trails use each edge once and may revisit vertices. Explicit graph conventions and connectedness of the edge-containing part matter.

1. One route is C,A,B,C,D,E,C.
2. It uses CA,AB,BC,CD,DE,EC exactly once each.

</details>
