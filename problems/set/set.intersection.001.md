# Keep only shared members

*Easy · [Set theory](index.md)*

Let $A=\{1,3,7,10\}$ and $B=\{0,3,5,10\}$. Give $A\cap B$.

- **A**: {1, 3, 7, 10}
- **B**: {0, 3, 5, 10}

```answer
{"answer":{"kind":"finite_integer_set","expected":[3,10],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Intersection requires membership in both sets.

</details>

<details>
<summary>Hint 2</summary>

Check each member of A against B, retaining it only when both tests succeed.

</details>

<details>
<summary>Worked solution</summary>

Intersection uses “and,” so one-set membership is insufficient.

1. The members $3$ and $10$ appear in both rosters.
2. The other members occur in only one roster. Hence $A\cap B=\{3,10\}$.

</details>
