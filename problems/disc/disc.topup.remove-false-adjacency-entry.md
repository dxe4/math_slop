# Find an extra entry in a proposed adjacency row

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $A,B,C,D,E$ and edges AB,AD,BC,DE. A proposed neighbor row for A is {B,C,D}. Which listed entry must be removed to make that row correct? Return a set.

```answer
{"answer":{"kind":"set","expected":"{C}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Look only at edges having A as an endpoint.

</details>

<details>
<summary>Hint 2</summary>

A vertex joined to a neighbor of A need not itself be a neighbor of A.

</details>

<details>
<summary>Worked solution</summary>

Adjacency means sharing one edge, not being connected by a longer path.

1. AB and AD show that B and D are neighbors of A.
2. BC joins B to C but does not create an AC edge.
3. The only incorrect proposed entry is C, so remove $\{C\}$.

</details>
