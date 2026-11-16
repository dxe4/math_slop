# Generate a Pell solution by multiplying its quadratic unit

*Easy · [Computational arithmetic problems](index.md)*

The Pell unit $3+2\sqrt2$ has norm one. Use (x+y sqrt(D))^2=(x^2+Dy^2)+2xy sqrt(D) to return the coefficient vector of its square. Use the order (constant coefficient, sqrt(2) coefficient).

```answer
{"answer":{"kind":"vector","expected":["17","12"],"checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The constant coefficient includes the radicand times the square of the root coefficient.

</details>

<details>
<summary>Hint 2</summary>

The root coefficient is twice the product of the two old coefficients.

</details>

<details>
<summary>Worked solution</summary>

Quadratic-unit multiplication generates an exact integer Pell solution.

1. With x=3,y=2,D=2, the new constant coefficient is nine plus eight, or seventeen.
2. The new root coefficient is twice three times two, or twelve.
3. Thus the squared unit is 17+12sqrt(2); its norm check is 289-288=1.

</details>
