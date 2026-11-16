# Respect the grouping of two operations

*Medium · [Set theory](index.md)*

For $A=\{1,2,3,5\}$, $B=\{2,4,5\}$ and $C=\{1,4,6\}$, compute $(A\cup B)\setminus C$.

```answer
{"answer":{"kind":"set","expected":"{2, 3, 5}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The parentheses form the union first.

</details>

<details>
<summary>Hint 2</summary>

Remove only union members that also belong to C.

</details>

<details>
<summary>Worked solution</summary>

The operation order follows the displayed grouping.

1. The union is {1,2,3,4,5}.
2. Among those members, one and four belong to C and are removed.
3. The result is $\{2,3,5\}$.

</details>
