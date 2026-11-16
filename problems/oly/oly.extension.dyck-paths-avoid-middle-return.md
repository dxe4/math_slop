# Remove one prescribed diagonal return from a constrained path family

*Hard · [Original olympiad-style problems](index.md)*

Count paths from $(0,0)$ to (6,6) using unit east and north steps that never go above y=x and do not visit (3,3).

```answer
{"answer":{"kind":"integer","expected":"107","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

First count all diagonal-constrained paths by reflection.

</details>

<details>
<summary>Hint 2</summary>

A path through the forbidden diagonal point splits into two smaller paths with the same relative constraint.

</details>

<details>
<summary>Worked solution</summary>

A Catalan count and a disjoint waypoint factorization enforce both restrictions.

1. Reflection gives 132 paths staying on or below the diagonal: binomial(12,6)-binomial(12,5)=924-792.
2. A path through (3,3) consists of two diagonal-constrained length-six pieces. Each has five possibilities, so twenty-five paths pass through that point.
3. Subtracting yields 132-25=107 paths avoiding the prescribed return.

</details>
