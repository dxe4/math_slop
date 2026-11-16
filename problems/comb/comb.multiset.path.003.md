# Different minimums for different boxes

*Medium · [Combinatorics](index.md)*

Place four identical counters into labeled boxes A,B,C. A must contain at least two, B at least one, and C at least zero; there are no upper bounds. How many allocations exist?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite structured answer for remove-unequal-lower-bounds; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Reserve the minimum occupancies $(2,1,0)$.

</details>

<details>
<summary>Hint 2</summary>

Only one additional counter remains to be assigned.

</details>

<details>
<summary>Worked solution</summary>

Unequal lower bounds can be shifted by the same variable-substitution principle.

1. Subtracting the lower bounds leaves a nonnegative triple with total one.
2. That counter can go to A, B, or C, giving three allocations.

</details>
