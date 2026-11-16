# Read a complete roster

*Easy · [Set theory](index.md)*

Let $A=\{1,4,7,10\}$. From the candidates $\{0,1,4,8,10\}$, report exactly the members of A.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4,10],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Membership asks whether the exact object appears in A.

</details>

<details>
<summary>Hint 2</summary>

Report only candidates; $7$ belongs to A but is not a candidate.

</details>

<details>
<summary>Worked solution</summary>

A complete roster determines membership directly.

1. The candidates $1, 4$ and $10$ appear in A.
2. The candidates $0$ and $8$ do not. The requested set is $\{1,4,10\}$.

</details>
