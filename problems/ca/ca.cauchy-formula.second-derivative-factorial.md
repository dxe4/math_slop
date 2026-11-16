# Keep the derivative factorial

*Medium · [Complex analysis problems](index.md)*

The unit circle is traversed counterclockwise. Find $\frac{1}{2\pi i}\oint_{|z|=1}e^z\,dz/z^3$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Relate the denominator power to the derivative order.

</details>

<details>
<summary>Hint 2</summary>

The Cauchy derivative formula includes the factorial of that order.

</details>

<details>
<summary>Worked solution</summary>

The normalized integral is a Taylor coefficient, not the derivative alone.

1. The third power in the denominator corresponds to the second derivative at zero.
2. Cauchy formula gives the normalized integral as $(e^z)^{\prime\prime}|_{z=0}/2!$.
3. The derivative value is one, so the result is $1/2$.

</details>
