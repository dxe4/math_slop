# Find permitted outcomes in a complete short list

*Easy · [Combinatorics](index.md)*

A two-symbol record uses $0$ or $1$ in each position. Its complete possible list is $00, 01, 10, 11$. A record is permitted only if it contains exactly one $1$. How many records are permitted?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Apply the rule to each of the four supplied records.

</details>

<details>
<summary>Hint 2</summary>

Exactly one means one, rather than zero or two.

</details>

<details>
<summary>Worked solution</summary>

A complete list can be filtered by the precise outcome rule.

1. $00$ has no $1$, while $11$ has two, so neither is permitted.
2. $01$ and $10$ each have exactly one $1$; the count is $2$.

</details>
