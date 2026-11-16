# Recover what was removed

*Easy · [Set theory](index.md)*

An unknown subset A of $U=\{10,20,30,40\}$ has $U\setminus A=\{20\}$. Find A.

```answer
{"answer":{"kind":"finite_integer_set","expected":[10,30,40],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

The complement names exactly which universe members lie outside A.

</details>

<details>
<summary>Hint 2</summary>

Every other universe member must lie inside A.

</details>

<details>
<summary>Worked solution</summary>

Taking the complement again in the same universe restores the original subset.

1. The element $20$ is outside A.
2. The remaining members $10,30,40$ are inside A, so $A=\{10,30,40\}$.

</details>
