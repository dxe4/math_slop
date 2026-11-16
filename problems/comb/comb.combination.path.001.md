# Three-person teams from six

*Medium · [Combinatorics](index.md)*

Choose an unordered three-person team from six distinct people A, B, C, D, E, F. Each person appears at most once. How many teams exist?

```answer
{"answer":{"kind":"integer","expected":20,"checker_scope":"Exact finite structured answer for count-fixed-size-subsets; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Count ordered selections and then group orders of the same team.

</details>

<details>
<summary>Hint 2</summary>

Each three-person team has $3!=6$ orders.

</details>

<details>
<summary>Worked solution</summary>

A uniform factorial overcount yields the subset count.

1. There are $6\times 5\times 4=120$ ordered selections.
2. Each team has six orders, so $120/6=20$ teams.

</details>
