# Keep a set of sets separate from its union

*Hard · [Set theory](index.md)*

Treat numerals as atomic labels. Let $A=\{1,2\}$, $B=\{2,3\}$ and $S=\{A,B\}$. How many elements of S are also elements of $A\cup B$?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The elements of S are the whole sets A and B.

</details>

<details>
<summary>Hint 2</summary>

The elements of the union are the numeral labels, not the two sets.

</details>

<details>
<summary>Worked solution</summary>

The two levels of objects must not be flattened into one roster.

1. S contains exactly the set objects {1,2} and {2,3}.
2. The union A union B contains the atomic labels 1,2,3.
3. Neither set object is one of those labels, so the common-element count is $0$.

</details>
