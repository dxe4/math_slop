# Find pointwise complex differentiability

*Medium · [Complex analysis problems](index.md)*

For $f(z)=|z|^2$, find all real $x$ such that $f$ is complex differentiable at the point $z=x+0i$. Enter the real point set.

```answer
{"answer":{"kind":"set","expected":[0],"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use real and imaginary parts to find necessary Cauchy-Riemann conditions.

</details>

<details>
<summary>Hint 2</summary>

At the remaining point, check the complex difference quotient directly.

</details>

<details>
<summary>Worked solution</summary>

A function may be differentiable at one point without being holomorphic nearby.

1. The real part is $u=x^2+y^2$ and the imaginary part is zero. Cauchy-Riemann requires $2x=0$ and $2y=0$.
2. On the real axis only the point $0$ can qualify. At that point the quotient is $|h|^2/h=\overline h$, which tends to zero.
3. The requested set is $\{0\}$.

</details>
