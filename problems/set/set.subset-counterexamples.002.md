# An empty counterexample set

*Easy · [Set theory](index.md)*

Let $A=\{-1,2,6\}$ and $B=\{-3,-1,2,6,8\}$. List every member of A that prevents A from being a subset of B. Use {} if none exists.

- **A**: {-1, 2, 6}
- **B**: {-3, -1, 2, 6, 8}

```answer
{"answer":{"kind":"finite_integer_set","expected":[],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Test the members of A, not every member of B.

</details>

<details>
<summary>Hint 2</summary>

If each element of A passes the membership test, there are no counterexamples.

</details>

<details>
<summary>Worked solution</summary>

B may have extra members without preventing A from being a subset.

1. The elements $-1, 2$ and $6$ are all present in B.
2. No member of A is missing from B, so the requested counterexample set is empty: {}. In particular, A is a subset of B.

</details>
