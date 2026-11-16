# Count components after deleting tree edges

*Medium · [Discrete mathematics](index.md)*

A finite tree has $12$ vertices. Delete three distinct edges without deleting vertices. How many connected components remain?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

A tree has no alternate path around an edge.

</details>

<details>
<summary>Hint 2</summary>

Each deletion splits one current tree component into two.

</details>

<details>
<summary>Worked solution</summary>

Edge deletion in a forest increases the component count by one.

1. If deleting a tree edge did not disconnect its endpoints, an alternate path together with that edge would form a cycle.
2. After a deletion the remaining components are still trees, so the same fact applies to every later deleted edge.
3. The original one component becomes $1+3=4$ components.

</details>
