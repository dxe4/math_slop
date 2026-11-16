# Weight simplex cross-sections

*Hard · [Multivariable calculus problems](index.md)*

For $S=\{x,y,z\geq0,\ x+y+z\leq1\}$, compute $\iiint_S x\,dV$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":24},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The fixed-$x$ triangle has area $(1-x)^2/2$.

</details>

<details>
<summary>Hint 2</summary>

Multiply its area by $x$ before integrating from zero to one.

</details>

<details>
<summary>Worked solution</summary>

The first moment weights each cross-section by its coordinate.

1. The integral is $\frac12\int_0^1x(1-x)^2\,dx$.
2. Expanding gives $\frac12\int_0^1(x-2x^2+x^3)\,dx$.
3. The value is $\frac12(1/2-2/3+1/4)=1/24$.

</details>
