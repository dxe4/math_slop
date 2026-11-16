# Include the polar area factor

*Easy · [Multivariable calculus problems](index.md)*

Let $D=\{(x,y):x^2+y^2\leq4\}$. Compute $\operatorname{area}(D)/\pi$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Use polar coordinates with radius from zero to two.

</details>

<details>
<summary>Hint 2</summary>

The area element contains one factor of the radial coordinate.

</details>

<details>
<summary>Worked solution</summary>

Polar coordinates account for the increasing area of circular shells.

1. Up to the boundary seam and origin, polar coordinates use $0<r<2$ and $0<\theta<2\pi$ with Jacobian magnitude $r$.
2. The area is $\int_0^{2\pi}\int_0^2r\,dr\,d\theta=4\pi$.
3. The requested normalized value is $4$.

</details>
