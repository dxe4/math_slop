# Different caps on three boxes

*Medium · [Combinatorics](index.md)*

Allocate three identical counters to labeled boxes A,B,C. Empty boxes are allowed; the respective caps are $1,2,3$. How many occupancy triples are possible?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite structured answer for enumerate-unequal-cap-branches; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Split by $A=0$ or $A=1$.

</details>

<details>
<summary>Hint 2</summary>

For each A, list the allowed B values and determine C from the total.

</details>

<details>
<summary>Worked solution</summary>

Small unequal-cap instances can be counted by an exhaustive feasible case split.

1. For $A=0$ the pairs (B,C) are $(0,3),(1,2),(2,1)$.
2. For $A=1$ the pairs are $(0,2),(1,1),(2,0)$. These disjoint branches give $3+3=6$.

</details>
