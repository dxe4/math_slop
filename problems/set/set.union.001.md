# Combine two collections without repeating members

*Easy · [Set theory](index.md)*

Let $A=\{0,2,6\}$ and $B=\{2,5,6,9\}$. Give $A\cup B$.

- **A**: {0, 2, 6}
- **B**: {2, 5, 6, 9}

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,2,5,6,9],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Union uses inclusive “or”: a member may be in either set or in both.

</details>

<details>
<summary>Hint 2</summary>

Start with A, then add members of B not already listed.

</details>

<details>
<summary>Worked solution</summary>

A union keeps shared members as well as members exclusive to either set.

1. Begin with $0, 2$ and $6$ from A.
2. The new members supplied by B are $5$ and $9$, giving $A\cup B=\{0,2,5,6,9\}$.

</details>
