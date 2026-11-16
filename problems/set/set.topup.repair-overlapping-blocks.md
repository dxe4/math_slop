# Prove a minimal block repair

*Hard · [Set theory](index.md)*

On $U=\{1,2,3,4\}$ the proposed blocks are {1,2},{2,3},{4}. You may delete element occurrences from blocks but add none. What is the least number of deletions needed to obtain a partition of U?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Blocks must be nonempty, disjoint and cover the whole domain.

</details>

<details>
<summary>Hint 2</summary>

The repeated value must remain in one block while being removed from the other.

</details>

<details>
<summary>Worked solution</summary>

A single overlap creates a necessary repair, and one deletion fixes it without losing coverage.

1. The first two blocks overlap at two, so at least one deletion is necessary.
2. Delete the occurrence of two from the first block, leaving {1},{2,3},{4}.
3. These are nonempty disjoint blocks covering U. Thus exactly $1$ deletion is minimal.

</details>
