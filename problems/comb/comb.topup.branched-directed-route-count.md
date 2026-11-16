# Separate routes by their first branch

*Medium · [Combinatorics](index.md)*

A directed network has $2$ distinct A-to-B edges, 3 B-to-C edges, 4 C-to-D edges, 1 A-to-C edge and 3 A-to-D edges, and no other edges. Count edge-distinguished directed routes from A to D.

```answer
{"answer":{"kind":"integer","expected":"31","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Classify routes by whether their first edge reaches B, C or D.

</details>

<details>
<summary>Hint 2</summary>

Parallel edges are distinct route choices.

</details>

<details>
<summary>Worked solution</summary>

Each disjoint first-step branch has its own product of later choices.

1. Routes first reaching B number $2\cdot3\cdot4=24$.
2. Routes first reaching C number four, and direct routes number three.
3. The branches exhaust all routes and do not overlap, so the total is $24+4+3=31$.

</details>
