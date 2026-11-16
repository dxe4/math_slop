# Pairs with a distinguished person

*Medium · [Combinatorics](index.md)*

Seven distinct people include B. Count unordered two-person teams containing B, teams excluding B, and all teams. Enter included, excluded, total.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"included":6,"excluded":15,"total":21},"checker_scope":"Exact finite structured answer for calculate-disjoint-pascal-cases; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Including B leaves one position to fill from six people.

</details>

<details>
<summary>Hint 2</summary>

Excluding B leaves an unordered pair from six.

</details>

<details>
<summary>Worked solution</summary>

A distinguished element gives two complementary subset families.

1. The included count is $C(6,1)=6$ and the excluded count is $C(6,2)=15$.
2. The total is $6+15=21$, agreeing with $C(7,2)$.

</details>
