# Count teams with a required member

*Medium · [Combinatorics](index.md)*

Five distinct people A, B, C, D, E are available. Choose an unordered three-person team, without repetition, that must contain A. How many teams satisfy the rule?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

A is already chosen, so determine how many team places remain.

</details>

<details>
<summary>Hint 2</summary>

Choose an unordered pair from the four people other than A.

</details>

<details>
<summary>Worked solution</summary>

A required member reduces the remaining unordered selection problem.

1. Including A leaves two places to fill from B, C, D, E.
2. There are $4 \times  3 / 2 = 6$ pairs, giving six permitted teams.

</details>
