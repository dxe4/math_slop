# Flip diagonal membership decisions

*Medium · [Set theory](index.md)*

For $I=\{1,2,3,4\}$, let $A_{1}=\{1,3\}, A_{2}=\{1,2\}, A_{3}=\{2,4\}, A_{4}=\{1,4\}$. Construct $D=\{i\in I:i\notin A_{i}\}$. Construct the finite diagonal set directly from the four supplied sets.

```answer
{"answer":{"kind":"finite_integer_set","expected":[3],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Check whether $1\in A_{1}, 2\in A_{2}, 3\in A_{3}$ and $4\in A_{4}$.

</details>

<details>
<summary>Hint 2</summary>

D reverses precisely those four diagonal membership decisions.

</details>

<details>
<summary>Worked solution</summary>

Diagonal construction ensures a disagreement with each indexed object at its own position.

1. The elements $1,2,4$ belong to their correspondingly indexed sets, so they are excluded from D.
2. The element $3$ is absent from A₃={2,4}, so $D=\{3\}$. At each index i, D differs from $A_{i}$ in membership of i.

</details>
