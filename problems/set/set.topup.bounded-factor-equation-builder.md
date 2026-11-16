# Filter algebraic candidates through the stated domain

*Hard · [Set theory](index.md)*

Write as a roster $\{n\in\mathbb Z:0\leq n\leq6,\ n(n-1)=6\}$.

```answer
{"answer":{"kind":"set","expected":"{3}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Solve the polynomial condition but keep its domain restriction.

</details>

<details>
<summary>Hint 2</summary>

Factoring gives one negative and one nonnegative candidate.

</details>

<details>
<summary>Worked solution</summary>

A set builder includes all its conditions, not merely the equation.

1. The equation becomes $n^2-n-6=(n-3)(n+2)=0$.
2. The candidates are n=3 and n=-2.
3. Only n=3 lies between zero and six, so the roster is $\{3\}$.

</details>
