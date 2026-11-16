# Reverse integration order on a triangle

*Medium · [Multivariable calculus problems](index.md)*

Evaluate $\int_0^1\int_x^1 2y\,dy\,dx$. The same region may be described by $0\leq x\leq y\leq1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Describe a horizontal slice before reversing the order.

</details>

<details>
<summary>Hint 2</summary>

For fixed $y$, the allowed $x$ interval runs from zero to $y$.

</details>

<details>
<summary>Worked solution</summary>

Reversing the order exposes the simple horizontal slice length.

1. The integrand is continuous on the closed triangle, so the order can be reversed.
2. The integral becomes $\int_0^1\int_0^y2y\,dx\,dy=\int_0^12y^2\,dy$.
3. The resulting value is $2/3$.

</details>
