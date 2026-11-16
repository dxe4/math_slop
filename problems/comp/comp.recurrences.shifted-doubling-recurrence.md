# Remove an affine recurrence constant

*Medium · [Computational arithmetic problems](index.md)*

Let $a_0=0$ and $a_n=2a_{n-1}+1$ for $n\geq1$. Find $a_{30}$.

```answer
{"answer":{"kind":"integer","expected":"1073741823","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Add a constant to both sides so that the new sequence doubles.

</details>

<details>
<summary>Hint 2</summary>

Use the transformed initial value to fix the geometric sequence.

</details>

<details>
<summary>Worked solution</summary>

A shift converts the affine recurrence into a geometric one.

1. Set $b_n=a_n+1$. Then $b_n=2b_{n-1}$ with $b_0=1$.
2. Thus $a_n=2^n-1$.
3. At $n=30$ this gives $1073741824-1=1073741823$.

</details>
