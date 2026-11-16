# Intersect a bounded integer domain with a square condition

*Medium · [Set theory](index.md)*

Write as a roster $\{x\in\mathbb Z:-4\leq x\leq5,\ x^2\leq9\}$.

```answer
{"answer":{"kind":"set","expected":"{-3, -2, -1, 0, 1, 2, 3}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The square condition bounds the magnitude of x.

</details>

<details>
<summary>Hint 2</summary>

Then retain only the integers also lying in the stated outer interval.

</details>

<details>
<summary>Worked solution</summary>

Both conditions apply simultaneously inside the explicit integer domain.

1. The square condition gives -3&lt;=x&lt;=3.
2. This whole interval lies inside the outer bounds -4 and 5.
3. The roster is $\{-3,-2,-1,0,1,2,3\}$.

</details>
