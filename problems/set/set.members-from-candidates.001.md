# Which proposed numbers belong?

*Easy · [Set theory](index.md)*

Let $A=\{2,5,8,11\}$. From the candidates $\{1,2,5,9,11\}$, list exactly those that are members of A.

- **A**: {2, 5, 8, 11}
- **Candidates**: {1, 2, 5, 9, 11}

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,5,11],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Check each candidate against the roster of A.

</details>

<details>
<summary>Hint 2</summary>

An element must be in both the candidate list and A to be reported.

</details>

<details>
<summary>Worked solution</summary>

Membership is decided by the stated collection, and the question also limits which candidates may be reported.

1. The candidates $2, 5$ and $11$ appear in A.
2. The candidates $1$ and $9$ do not appear in A. The requested set is $\{2,5,11\}$; $8$ is not a candidate.

</details>
