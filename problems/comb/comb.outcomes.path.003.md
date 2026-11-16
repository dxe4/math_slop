# List permitted faces

*Easy · [Combinatorics](index.md)*

A die has face labels $1, 2, 3, 4, 5, 6$. An allowed record must be even and at most $4$. Enter the complete set of allowed face labels.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,4],"checker_scope":"The exact finite allowed set; no general enumeration proof claim."}}
```

<details>
<summary>Hint 1</summary>

Apply both rules to each face label.

</details>

<details>
<summary>Hint 2</summary>

Being even alone does not suffice if the label exceeds $4$.

</details>

<details>
<summary>Worked solution</summary>

Intersect all stated conditions when defining allowed outcomes.

1. The even labels are $2, 4, 6$.
2. The upper bound removes $6$, leaving the complete set $\{2,4\}$.

</details>
