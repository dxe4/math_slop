# Keep track of two different universes

*Easy · [Set theory](index.md)*

Let $A=\{2,4\}, U=\{1,2,3,4\}$, and $V=\{1,2,3,4,5,6\}$. Give in\_U=U∖A and in\_V=V∖A.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"in_U":[1,3],"in_V":[1,3,5,6]},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Apply the complement definition separately within each universe.

</details>

<details>
<summary>Hint 2</summary>

The larger universe includes $5$ and $6$, neither of which belongs to A.

</details>

<details>
<summary>Worked solution</summary>

A fixed subset can have different complements in different universes.

1. Within U, excluding $2$ and $4$ leaves $\{1,3\}$.
2. Within V, excluding $2$ and $4$ leaves $\{1,3,5,6\}$.

</details>
