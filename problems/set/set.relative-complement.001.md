# Remove a collection from its named universe

*Easy · [Set theory](index.md)*

The universe is $U=\{0,1,2,3,4,5\}$ and $A=\{0,2,5\}$. Give the complement $U\setminus A$.

- **U (universe)**: {0, 1, 2, 3, 4, 5}
- **A**: {0, 2, 5}

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,4],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Only elements of the named universe may appear.

</details>

<details>
<summary>Hint 2</summary>

Cross out the members of A from U; report what remains.

</details>

<details>
<summary>Worked solution</summary>

A complement is relative to a stated universe, rather than a collection of every imaginable outsider.

1. Remove $0, 2$ and $5$ from the universe.
2. The remaining members are $1, 3$ and 4, so $U\setminus A=\{1,3,4\}$.

</details>
