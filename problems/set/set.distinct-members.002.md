# Count members after rearranging a roster

*Easy · [Set theory](index.md)*

A set is written $T=\{0,-2,0,5,-2,8,5\}$. How many distinct members does T have? Enter an integer.

- **Written roster**: {0, -2, 0, 5, -2, 8, 5}

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact integer count of distinct members of the stated finite set."}}
```

<details>
<summary>Hint 1</summary>

Keep zero and negative numbers if they are listed.

</details>

<details>
<summary>Hint 2</summary>

Cross out only later copies of the same number, not different numbers.

</details>

<details>
<summary>Worked solution</summary>

The size of a finite set counts distinct objects, rather than written occurrences.

1. The different numbers are $-2, 0, 5$ and $8$.
2. Thus $T=\{-2,0,5,8\}$ and has $4$ members, even though its written roster had seven entries.

</details>
