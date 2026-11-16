# Enumerate complete branches under unequal caps

*Medium · [Combinatorics](index.md)*

Count nonnegative integer triples with $x+y+z=7$, x&lt;=2, y&lt;=3 and z&lt;=4.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Split by the three possible x values.

</details>

<details>
<summary>Hint 2</summary>

Use the y and z caps to determine the allowed y interval in each branch.

</details>

<details>
<summary>Worked solution</summary>

A short exact branch count avoids applying an inappropriate uniform-cap formula.

1. If x=0, then y+z=7 and only (y,z)=(3,4) meets both caps.
2. If x=1, the possibilities are (2,4),(3,3); if x=2, they are (1,4),(2,3),(3,2).
3. The branches contain one, two and three allocations respectively, totaling six.

</details>
