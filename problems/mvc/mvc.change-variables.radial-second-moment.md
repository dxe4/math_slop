# Integrate a radial function over a disk

*Medium · [Multivariable calculus problems](index.md)*

For the unit disk $D=\{x^2+y^2\leq1\}$, find $\frac1\pi\iint_D(x^2+y^2)\,dA$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Both the function and region simplify in polar coordinates.

</details>

<details>
<summary>Hint 2</summary>

Combine the radial integrand with the Jacobian factor.

</details>

<details>
<summary>Worked solution</summary>

The radial squared norm and the polar area factor contribute different powers.

1. In polar coordinates $x^2+y^2=r^2$ and $dA=r\,dr\,d\theta$.
2. The integral is $\int_0^{2\pi}\int_0^1r^3\,dr\,d\theta=\pi/2$.
3. Dividing by $\pi$ gives $1/2$.

</details>
