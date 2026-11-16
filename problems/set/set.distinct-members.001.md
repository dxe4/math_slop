# Repeated writing does not create new members

*Easy · [Set theory](index.md)*

A set is written $S=\{4,1,4,9,1,4\}$. How many distinct members does S have? Enter an integer.

- **Written roster**: {4, 1, 4, 9, 1, 4}

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact integer count of distinct members of the stated finite set."}}
```

<details>
<summary>Hint 1</summary>

A set records whether an object is present, not how many times it is written.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the roster with each number appearing once, then count.

</details>

<details>
<summary>Worked solution</summary>

Set membership ignores repetition and order.

1. Removing repeated entries gives $S=\{1,4,9\}$.
2. There are three different numbers, so S has $3$ members.

</details>
