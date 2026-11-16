# Integrate triangular cross-sections

*Medium · [Multivariable calculus problems](index.md)*

Find the volume of $S=\{(x,y,z):x,y,z\geq0,\ x+y+z\leq1\}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Fix $x$ and describe the allowed triangle in the other two coordinates.

</details>

<details>
<summary>Hint 2</summary>

The legs of that triangle both have length $1-x$.

</details>

<details>
<summary>Worked solution</summary>

The simplex volume is the integral of cross-sectional areas.

1. For $0\leq x\leq1$, the cross-section is $y,z\geq0$ with $y+z\leq1-x$.
2. This triangle has area $(1-x)^2/2$.
3. The volume is $\int_0^1(1-x)^2/2\,dx=1/6$.

</details>
