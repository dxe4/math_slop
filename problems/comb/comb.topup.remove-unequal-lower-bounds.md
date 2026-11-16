# Shift constrained occupancies to nonnegative variables

*Medium · [Combinatorics](index.md)*

Count integer triples satisfying $x+y+z=9$, x&gt;=1, y&gt;=2 and z&gt;=0. The variables label distinct boxes.

```answer
{"answer":{"kind":"integer","expected":"28","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Subtract the stated lower bound separately from each constrained variable.

</details>

<details>
<summary>Hint 2</summary>

Count nonnegative triples for the remaining total.

</details>

<details>
<summary>Worked solution</summary>

Unequal lower bounds can be removed by a bijective shift.

1. Put u=x-1, v=y-2 and w=z, so all three new variables are nonnegative and sum to six.
2. Conversely each such triple gives exactly one original triple by undoing the shifts.
3. Stars and bars gives the number of two-divider placements among eight positions, which is twenty-eight.

</details>
