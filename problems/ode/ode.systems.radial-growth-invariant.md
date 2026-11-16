# Extract a radial growth law

*Hard · [Differential equations problems](index.md)*

For $x^{\prime}=3x+4y$, $y^{\prime}=-4x+3y$ with $(x(0),y(0))=(1,0)$, find $x(t)^2+y(t)^2$ at $t=(\log2)/3$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the squared radius without solving the two coordinates separately.

</details>

<details>
<summary>Hint 2</summary>

The mixed terms cancel, leaving a scalar growth equation.

</details>

<details>
<summary>Worked solution</summary>

A quadratic quantity separates radial growth from rotation.

1. Let $R=x^2+y^2$. Differentiation gives $R^{\prime}=2x(3x+4y)+2y(-4x+3y)=6R$.
2. As $R(0)=1$, the solution is $R=e^{6t}$, verified by differentiation.
3. The full state is also $e^{3t}(\cos4t,-\sin4t)$, consistent with both system equations and data.
4. At the stated time, $R=e^{2\log2}=4$.

</details>
