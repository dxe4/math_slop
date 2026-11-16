# Combine the two different directions of difference

*Medium · [Set theory](index.md)*

For $A=\{0,1,2,4\}$ and $B=\{1,3,4,5\}$, compute $(A\setminus B)\cup(B\setminus A)$.

```answer
{"answer":{"kind":"set","expected":"{0, 2, 3, 5}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Difference is directional, so find the two parts separately.

</details>

<details>
<summary>Hint 2</summary>

An element common to both A and B belongs to neither part.

</details>

<details>
<summary>Worked solution</summary>

The expression retains elements belonging to exactly one of the two sets.

1. A minus B is {0,2}.
2. B minus A is {3,5}.
3. Their union is $\{0,2,3,5\}$.

</details>
