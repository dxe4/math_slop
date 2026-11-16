# Teams excluding one person

*Medium · [Combinatorics](index.md)*

Choose an unordered three-person team from A, B, C, D, E, F, with no repeated person. F is unavailable and may not be selected. How many teams are allowed?

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact finite structured answer for remove-forbidden-member-before-selection; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Remove the unavailable person before choosing.

</details>

<details>
<summary>Hint 2</summary>

Five people remain, and every three-person team has six orders.

</details>

<details>
<summary>Worked solution</summary>

Membership constraints change the available set before counting.

1. Allowed teams are the three-element subsets of {A,B,C,D,E}.
2. The count is $(5\times 4\times 3)/(3\times 2\times 1)=10$.

</details>
