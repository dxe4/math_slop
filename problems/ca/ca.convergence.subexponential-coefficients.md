# A radius with square-decaying coefficients

*Medium · [Complex analysis problems](index.md)*

Find the radius of convergence of $\sum_{n=1}^{\infty}z^n/n^2$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare consecutive terms for a fixed nonzero argument.

</details>

<details>
<summary>Hint 2</summary>

The polynomial change in the denominator has a ratio tending to one.

</details>

<details>
<summary>Worked solution</summary>

A coefficient factor that changes only polynomially does not alter the limiting geometric threshold.

1. The consecutive term-modulus ratio is $|z|n^2/(n+1)^2$, tending to $|z|$.
2. Thus the series converges absolutely for $|z|<1$ and its terms fail to tend to zero when $|z|>1$.
3. The radius is $1$. In fact the boundary also has absolute convergence, but that does not change the radius.

</details>
