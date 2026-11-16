# A fixed first book

*Medium · [Combinatorics](index.md)*

Four distinct books A, B, C, D are placed in a row, all used once. Book A must be first. How many permitted rows exist?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite structured answer for count-orders-under-fixed-position; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

A is already fixed, so it is not chosen again.

</details>

<details>
<summary>Hint 2</summary>

Order the remaining three distinct books.

</details>

<details>
<summary>Worked solution</summary>

A fixed position reduces the remaining ordering problem.

1. The remaining positions can be filled in $3\times 2\times 1$ ways.
2. Thus there are $6$ permitted rows.

</details>
