# Integrate height through a cylinder

*Medium · [Multivariable calculus problems](index.md)*

Let $C=\{(x,y,z):x^2+y^2\leq1,\ 0\leq z\leq2\}$. Compute $\frac1\pi\iiint_C z\,dV$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Every horizontal cross-section has the same area.

</details>

<details>
<summary>Hint 2</summary>

Weight that area by height before integrating in $z$.

</details>

<details>
<summary>Worked solution</summary>

The cross-sectional area is constant while the integrand changes with height.

1. At each $z\in[0,2]$, the horizontal disk has area $\pi$.
2. The integral is $\pi\int_0^2z\,dz=2\pi$.
3. After division by $\pi$, the value is $2$.

</details>
