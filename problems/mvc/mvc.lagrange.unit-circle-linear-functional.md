# Optimize a linear functional

*Medium · [Multivariable calculus problems](index.md)*

Find the maximum of $3x+4y$ over the unit circle $x^2+y^2=1$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Treat the objective as a dot product.

</details>

<details>
<summary>Hint 2</summary>

An equality direction must also lie on the constraint circle.

</details>

<details>
<summary>Worked solution</summary>

The multiplier direction can be identified by the equality case of Cauchy-Schwarz.

1. Cauchy-Schwarz gives $3x+4y\leq\sqrt{3^2+4^2}\sqrt{x^2+y^2}=5$.
2. The point $(3/5,4/5)$ is on the circle.
3. Its objective value is $9/5+16/5=5$, so the maximum is $5$.

</details>
