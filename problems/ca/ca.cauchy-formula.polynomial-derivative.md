# Read a derivative through Cauchy

*Medium · [Complex analysis problems](index.md)*

The circle $|z|=2$ is traversed counterclockwise. Find $\frac{1}{2\pi i}\oint\frac{z^3+2z+1}{(z-1)^2}\,dz$.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A squared denominator calls for the first derivative version of Cauchy formula.

</details>

<details>
<summary>Hint 2</summary>

Check that the evaluation point is strictly inside the contour.

</details>

<details>
<summary>Worked solution</summary>

The normalized double-pole integral gives the derivative of the analytic numerator.

1. Put $f(z)=z^3+2z+1$, an entire function. The point $1$ lies inside the radius-two circle.
2. Cauchy derivative formula gives the normalized integral as $f^{\prime}(1)$.
3. Since $f^{\prime}(z)=3z^2+2$, the value is $5$.

</details>
