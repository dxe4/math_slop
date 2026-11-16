# Three-person teams with a named member

*Medium · [Combinatorics](index.md)*

Six distinct people include A. For unordered three-person teams, count teams containing A, teams excluding A, and all teams. Enter included, excluded, total.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"included":10,"excluded":10,"total":20},"checker_scope":"Exact finite structured answer for calculate-disjoint-pascal-cases; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

If A is included, select two more people from the other five.

</details>

<details>
<summary>Hint 2</summary>

If A is excluded, choose all three from the other five.

</details>

<details>
<summary>Worked solution</summary>

Pascal’s identity adds the two membership cases.

1. The included case has $C(5,2)=10$ teams; the excluded case has $C(5,3)=10$.
2. They are disjoint and exhaustive, so the total is $10+10=20$.

</details>
