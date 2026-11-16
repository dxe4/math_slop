# A local logarithm coefficient

*Medium · [Complex analysis problems](index.md)*

On $|z|<1$, use the analytic branch of $\log(1+z)$ with value zero at $z=0$. Find its Taylor coefficient of $z^3$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate to obtain a geometric series with a known value at the center.

</details>

<details>
<summary>Hint 2</summary>

Integrate that series and use the specified branch normalization.

</details>

<details>
<summary>Worked solution</summary>

The normalized logarithm is determined by integrating its geometric derivative.

1. The derivative is $1/(1+z)=1-z+z^2-z^3+\cdots$ for $|z|<1$.
2. Integrating and using the value zero at the center gives $z-z^2/2+z^3/3-\cdots$.
3. The desired coefficient is $1/3$.

</details>
