# Membership includes negative numbers

*Easy · [Set theory](index.md)*

Let $A=\{-4,0,3,7\}$. From the candidates $\{-4,-3,0,4,7\}$, list exactly those that belong to A.

- **A**: {-4, 0, 3, 7}
- **Candidates**: {-4, -3, 0, 4, 7}

```answer
{"answer":{"kind":"finite_integer_set","expected":[-4,0,7],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

The sign is part of a number: $-4$ and $4$ are different.

</details>

<details>
<summary>Hint 2</summary>

Zero can be an ordinary set member. Compare each whole candidate with the roster.

</details>

<details>
<summary>Worked solution</summary>

Check exact identities rather than visual similarity or positivity.

1. The candidates $-4, 0$ and $7$ are listed in A.
2. Neither $-3$ nor $4$ is listed. The requested set is $\{-4,0,7\}$.

</details>
