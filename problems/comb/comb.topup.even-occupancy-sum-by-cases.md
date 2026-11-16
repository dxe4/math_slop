# Count a parity-restricted occupancy by a finite case split

*Hard · [Combinatorics](index.md)*

Count nonnegative integer quadruples with $x_1+x_2+x_3+x_4=7$ and x1 even.

```answer
{"answer":{"kind":"integer","expected":"70","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The possible even first occupancies are zero, two, four and six.

</details>

<details>
<summary>Hint 2</summary>

For each case count the nonnegative triple for the remaining total.

</details>

<details>
<summary>Worked solution</summary>

A parity constraint leaves disjoint ordinary occupancy problems.

1. For first occupancies 0,2,4,6 the remaining totals are 7,5,3,1.
2. The corresponding three-variable counts are 36,21,10,3 by stars and bars.
3. Adding the disjoint counts gives seventy.

</details>
