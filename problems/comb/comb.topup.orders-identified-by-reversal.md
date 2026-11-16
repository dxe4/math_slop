# Count distinct arrangements when reversing creates the same record

*Hard · [Combinatorics](index.md)*

$6$ distinct labeled objects are placed in a row, but a row and its reversal count as the same record. How many records are there?

```answer
{"answer":{"kind":"integer","expected":"360","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

First count oriented rows.

</details>

<details>
<summary>Hint 2</summary>

Check whether any row equals its own reversal before dividing.

</details>

<details>
<summary>Worked solution</summary>

Reversal pairs every oriented row with one different oriented row.

1. There are $6!=720$ oriented rows.
2. No such row equals its reversal, since that would force the first and last distinct objects to be equal.
3. Every record therefore has exactly two oriented representatives, giving $720/2=360$.

</details>
