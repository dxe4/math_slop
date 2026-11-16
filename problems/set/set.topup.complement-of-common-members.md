# Keep the universe when complementing an intersection

*Medium · [Set theory](index.md)*

In universe $U=\{1,2,\ldots,8\}$ let $A=\{1,3,5,7\}$ and $B=\{2,3,5,8\}$. Compute the complement of $A\cap B$ relative to U.

```answer
{"answer":{"kind":"set","expected":"{1, 2, 4, 6, 7, 8}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

First identify the members common to A and B.

</details>

<details>
<summary>Hint 2</summary>

The complement consists of the other members of the explicitly given universe.

</details>

<details>
<summary>Worked solution</summary>

The ambient universe fixes which outsiders can occur.

1. A cap B is {3,5}.
2. Remove those two values from U.
3. The complement is $\{1,2,4,6,7,8\}$.

</details>
