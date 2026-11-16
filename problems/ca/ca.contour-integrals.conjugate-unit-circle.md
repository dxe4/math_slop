# Integrate a conjugate along a circle

*Medium · [Complex analysis problems](index.md)*

Let $\gamma$ traverse $|z|=1$ once counterclockwise. Find $\frac{1}{2\pi i}\int_\gamma\overline z\,dz$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Parameterize the circle with increasing angle.

</details>

<details>
<summary>Hint 2</summary>

Substitute both the conjugate coordinate and the differential; their exponential factors cancel.

</details>

<details>
<summary>Worked solution</summary>

The contour parameterization evaluates this non-holomorphic integrand directly.

1. Write $z=e^{it}$ for $0\le t\le2\pi$, so $\overline z=e^{-it}$ and $dz=ie^{it}\,dt$.
2. Thus the integral is $\int_0^{2\pi}i\,dt=2\pi i$.
3. The normalized value is $1$. No holomorphy of the conjugation map was assumed.

</details>
