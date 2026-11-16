# Find a sharp overflow threshold with unequal capacities

*Medium · [Combinatorics](index.md)*

Five boxes have capacities $2,3,4,5,6$ objects respectively. What is the least total number of objects whose placement into these boxes must exceed at least one capacity?

```answer
{"answer":{"kind":"integer","expected":"21","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

An overflow-free placement can fill every box to its own capacity.

</details>

<details>
<summary>Hint 2</summary>

One additional object makes such a placement impossible.

</details>

<details>
<summary>Worked solution</summary>

Total capacity gives both a sharp lower example and the forcing threshold.

1. The total capacity is twenty, and filling each box to capacity shows that twenty objects need not overflow.
2. If every box remained within capacity, the total count could not exceed twenty.
3. Therefore twenty-one is the least guaranteed overflow total.

</details>
