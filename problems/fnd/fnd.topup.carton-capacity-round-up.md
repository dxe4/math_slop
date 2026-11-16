# Choose enough cartons and count empty spaces

*Medium · [Foundations bridge](index.md)*

Exactly $100$ objects must be packed into cartons holding at most $9$ each. Use the smallest possible number of cartons. How many object spaces in those cartons remain empty?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

A nonzero remainder requires one extra carton when every object must be packed.

</details>

<details>
<summary>Hint 2</summary>

Use the capacity of all selected cartons, not only the full ones, to count empty spaces.

</details>

<details>
<summary>Worked solution</summary>

Packing everything requires rounding the carton count upward.

1. The division is $100=11\cdot9+1$, so eleven cartons are insufficient and twelve suffice.
2. Twelve cartons have $12\cdot9=108$ spaces.
3. The unused capacity is $108-100=8$ spaces.

</details>
