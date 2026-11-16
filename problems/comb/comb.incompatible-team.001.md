# Exclude one incompatible pair

*Medium · [Combinatorics](index.md)*

Five distinct people A, B, C, D, E are available for an unordered two-person team without repetition. A and B may not serve together. How many teams are permitted?

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Count all unordered pairs, then identify the forbidden pair.

</details>

<details>
<summary>Hint 2</summary>

Only the team {A,B} violates the rule. Teams containing just one of A and B remain allowed.

</details>

<details>
<summary>Worked solution</summary>

A constrained subset count can be obtained by removing an explicitly identified disjoint forbidden case.

1. All two-person teams number $5 \times  4 / 2 = 10$.
2. Exactly one of these teams is forbidden, so $10 - 1 = 9$ are permitted.

</details>
