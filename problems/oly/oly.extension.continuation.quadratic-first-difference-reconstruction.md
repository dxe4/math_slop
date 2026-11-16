# Reconstruct a quadratic from its first difference

*Medium · [Original olympiad-style problems](index.md)*

A monic quadratic polynomial satisfies $P(x+1)-P(x)=2x+7$ and $P(0)=5$. Find $P(3)$.

```answer
{"answer":{"kind":"integer","expected":"32","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Write the monic polynomial with two unknown lower coefficients.

</details>

<details>
<summary>Hint 2</summary>

The first difference determines the linear coefficient, and the value at zero determines the constant.

</details>

<details>
<summary>Worked solution</summary>

Use coefficient comparison in a finite-difference identity.

1. Write $P(x)=x^2+ax+b$. Its difference is $2x+1+a$.
2. Thus $a=6$, while the supplied value gives $b=5$.
3. The value at three is $9+18+5=32$.

</details>
