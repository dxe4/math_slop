# Two overlapping activity groups

*Medium · [Combinatorics](index.md)*

An activity group has $12$ members in A and $9$ in B; exactly $4$ belong to both. How many belong to A or B, including those in both?

```answer
{"answer":{"kind":"integer","expected":17,"checker_scope":"Exact finite structured answer for correct-two-set-overcount; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The shared members were counted in both individual sizes.

</details>

<details>
<summary>Hint 2</summary>

Subtract the overlap once.

</details>

<details>
<summary>Worked solution</summary>

Correct a double count with one subtraction.

1. Adding the individual sizes gives $12+9=21$ memberships.
2. The four shared people were counted twice, so the union size is $21-4=17$.

</details>
