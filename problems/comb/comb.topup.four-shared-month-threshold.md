# Derive a sharp repeated-category guarantee

*Medium · [Combinatorics](index.md)*

What is the least number of people that guarantees at least four share a birth month, using exactly $12$ month categories? No probability model is assumed.

```answer
{"answer":{"kind":"integer","expected":"37","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Avoiding four in a month permits at most three per month.

</details>

<details>
<summary>Hint 2</summary>

Check that the bound can actually be attained without the desired four.

</details>

<details>
<summary>Worked solution</summary>

A worst-case occupancy argument gives a deterministic threshold.

1. At most three people in each month allows at most thirty-six people with no month containing four.
2. A placement of exactly three in each month shows this lower total is possible.
3. At thirty-seven people the avoidance bound fails, so four in some month are guaranteed.

</details>
