# List all witnesses against a nested subset claim

*Medium · [Set theory](index.md)*

Let $A=\{0,2,4,6\}$, $B=\{0,1,2,3,4\}$ and $C=\{2,4,8\}$. List every element of A witnessing that A is not a subset of $B\cap C$.

```answer
{"answer":{"kind":"set","expected":"{0, 6}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A witness must belong to A and fail membership in the proposed containing set.

</details>

<details>
<summary>Hint 2</summary>

Compute the intersection before taking its difference from A.

</details>

<details>
<summary>Worked solution</summary>

All subset counterexamples form a relative difference.

1. The intersection B cap C is {2,4}.
2. The members of A outside that intersection are zero and six.
3. The complete witness set is $\{0,6\}$.

</details>
