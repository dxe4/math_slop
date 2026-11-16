# List the failures of a subset claim

*Easy · [Set theory](index.md)*

Let $A=\{2,5,9\}$ and $B=\{2,5,7\}$. List all members of A that show A is not a subset of B.

```answer
{"answer":{"kind":"finite_integer_set","expected":[9],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A counterexample must belong to A.

</details>

<details>
<summary>Hint 2</summary>

Keep a member of A only when it is missing from B.

</details>

<details>
<summary>Worked solution</summary>

One missing member refutes an all-members containment claim.

1. The members $2$ and $5$ of A also belong to B.
2. The member $9$ belongs to A but not B, so the complete counterexample set is $\{9\}$.

</details>
