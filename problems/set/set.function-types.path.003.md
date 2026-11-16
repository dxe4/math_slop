# Use the only unpaired codomain member

*Easy · [Set theory](index.md)*

A bijection f:$\{1,2,3\}\to \{4,5,6\}$ satisfies $f(1)=5$ and $f(2)=4$. Find $f(3)$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A bijection must reach every codomain element without repeating an output.

</details>

<details>
<summary>Hint 2</summary>

The outputs $5$ and $4$ are already assigned.

</details>

<details>
<summary>Worked solution</summary>

Finite bijection constraints can determine an unknown value.

1. To be surjective, f must reach the missing codomain element $6$.
2. Only input $3$ is unassigned, so $f(3)=6$; this also avoids repeated outputs.

</details>
