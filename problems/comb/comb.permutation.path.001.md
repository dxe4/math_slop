# Fill three named jobs

*Medium · [Combinatorics](index.md)*

Five distinct people A, B, C, D, E are available for chair, recorder, and timekeeper. Each role has one person and no person fills two roles. How many assignments exist?

```answer
{"answer":{"kind":"integer","expected":60,"checker_scope":"Exact finite structured answer for count-ordered-partial-selection; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Choose a person for each named role in order.

</details>

<details>
<summary>Hint 2</summary>

After each assignment, that person is unavailable for later roles.

</details>

<details>
<summary>Worked solution</summary>

Named roles form ordered selections without repetition.

1. There are $5$ chair choices, then $4$ recorders, then $3$ timekeepers.
2. The product is $5\times 4\times 3=60$.

</details>
