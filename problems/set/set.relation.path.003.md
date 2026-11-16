# A marked cell is one related pair

*Easy · [Set theory](index.md)*

A relation from $\{1,2\}$ to $\{4,5\}$ has table rows in order $1,2$ and columns in order $4,5$. The rows are $[1,0]$ and $[1,1]$, where $1$ marks a selected ordered pair and $0$ marks an unselected pair. How many pairs belong to the relation?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Count marked cells rather than row labels or column labels.

</details>

<details>
<summary>Hint 2</summary>

A single row can contribute more than one selected pair.

</details>

<details>
<summary>Worked solution</summary>

A relation table marks individual ordered pairs.

1. The first row selects $(1,4)$. The second selects $(2,4)$ and $(2,5)$.
2. These are three distinct ordered pairs, so the relation has $3$ pairs.

</details>
