# Differentiate a geometric series

*Medium · [Complex analysis problems](index.md)*

Find the coefficient of $z^4$ in the Taylor expansion of $1/(1-z)^2$ about zero.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

This function is the derivative of a familiar geometric denominator.

</details>

<details>
<summary>Hint 2</summary>

After differentiation, reindex so the exponent matches the requested power.

</details>

<details>
<summary>Worked solution</summary>

Termwise differentiation multiplies and shifts geometric coefficients.

1. For $|z|<1$, $1/(1-z)=\sum_{n\ge0}z^n$.
2. Differentiation gives $1/(1-z)^2=\sum_{n\ge1}nz^{n-1}=\sum_{k\ge0}(k+1)z^k$.
3. At $k=4$ the coefficient is $5$.

</details>
