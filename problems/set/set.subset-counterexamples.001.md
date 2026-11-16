# Find every obstacle to being a subset

*Easy · [Set theory](index.md)*

Let $A=\{1,4,6,9\}$ and $B=\{1,2,4,7\}$. List every member of A that prevents A from being a subset of B.

- **A**: {1, 4, 6, 9}
- **B**: {1, 2, 4, 7}

```answer
{"answer":{"kind":"finite_integer_set","expected":[6,9],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

A is a subset of B only if every member of A belongs to B.

</details>

<details>
<summary>Hint 2</summary>

Keep elements of A that are missing from B; elements outside A cannot be counterexamples to this claim.

</details>

<details>
<summary>Worked solution</summary>

One counterexample disproves a subset claim; this task asks for all of them.

1. The elements $1$ and $4$ of A also belong to B.
2. The elements $6$ and $9$ belong to A but not B. These are exactly the counterexamples.

</details>
