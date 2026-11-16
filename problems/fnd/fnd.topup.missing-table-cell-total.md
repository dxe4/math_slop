# Recover a missing cell before aggregating

*Medium · [Foundations bridge](index.md)*

A table has columns Morning, Afternoon and Daily total. Row A is $8,?,21$; row B is $12,9,21$. Each daily total is the sum of that row only. Find the combined Afternoon count for A and B.

| Group | Morning | Afternoon | Daily total |
| --- | --- | --- | --- |
| A | 8 | ? | 21 |
| B | 12 | 9 | 21 |

```answer
{"answer":{"kind":"integer","expected":"22","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Use row A only to recover its missing afternoon entry.

</details>

<details>
<summary>Hint 2</summary>

Daily totals are summaries, so do not add them again as separate observations.

</details>

<details>
<summary>Worked solution</summary>

Reading row and column roles prevents double counting a total.

1. Row A has afternoon count $21-8=13$.
2. Row B has afternoon count nine, directly from the Afternoon column.
3. The combined afternoon count is $13+9=22$.

</details>
