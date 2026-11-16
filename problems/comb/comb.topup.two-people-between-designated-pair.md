# Place a separated pair before arranging the others

*Medium · [Combinatorics](index.md)*

$8$ distinct people include A and B. How many row orders have exactly two people between A and B?

```answer
{"answer":{"kind":"integer","expected":"7200","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Their position numbers must differ by three.

</details>

<details>
<summary>Hint 2</summary>

Choose the two positions and their orientation before placing everyone else.

</details>

<details>
<summary>Worked solution</summary>

A constrained pair can be treated as fixed positions in each disjoint case.

1. The smaller occupied position can be one through five, giving five pairs of positions with difference three.
2. There are two choices of which designated person occupies the earlier position.
3. The remaining six people can be ordered in $6!=720$ ways, so the total is $5\cdot2\cdot720=7200$.

</details>
