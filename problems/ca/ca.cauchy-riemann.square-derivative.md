# Use Cauchy-Riemann on a square map

*Medium · [Complex analysis problems](index.md)*

For $f(x+iy)=(x^2-y^2)+2ixy$, find $f^{\prime}(1+i)$.

```answer
{"answer":{"kind":"complex","expected":"2+2i","checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Identify the real and imaginary parts and their first partial derivatives.

</details>

<details>
<summary>Hint 2</summary>

When the Cauchy-Riemann equations hold with continuous partials, combine the real-coordinate derivatives.

</details>

<details>
<summary>Worked solution</summary>

The smooth real components satisfy the complex-linearity conditions.

1. Here $u_x=2x=v_y$ and $u_y=-2y=-v_x$, and all partial derivatives are continuous.
2. Therefore $f^{\prime}(z)=u_x+iv_x=2x+2iy$.
3. At $z=1+i$, the derivative is $2+2i$.

</details>
