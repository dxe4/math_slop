# Keep counts and masses separate in a table

*Hard · [Foundations bridge](index.md)*

A table lists crate type, count and mass per crate. Row A is $(A,4,7\text{ kg})$ and row B is $(B,6,5\text{ kg})$. All crates are loaded, then exactly two B crates are removed. Find the remaining mass in kilograms.

| Crate type | Count | Mass per crate (kg) |
| --- | --- | --- |
| A | 4 | 7 |
| B | 6 | 5 |

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The count column and the mass-per-crate column have different meanings.

</details>

<details>
<summary>Hint 2</summary>

Compute a mass for each row, then remove the mass of the specified crates rather than subtracting a bare count.

</details>

<details>
<summary>Worked solution</summary>

Units identify multiplication and keep the removal calculation meaningful.

1. A crates contribute $4\cdot7=28$ kilograms and B crates initially contribute $6\cdot5=30$ kilograms.
2. The two removed B crates have mass $2\cdot5=10$ kilograms.
3. The remaining mass is $28+30-10=48$ kilograms.

</details>
