# Simple slope from covariance

*Easy · [Statistics and probability](index.md)*

For centered data, the sum of cross-products is $\sum_i x_i y_i=12$ and the sum of squared predictor deviations is $\sum_i x_i^2=6$. What is the least-squares slope of $Y$ on $X$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The slope balances the cross-product with the predictor sum of squares.

</details>

<details>
<summary>Hint 2</summary>

Use the centered least-squares normal equation $b\sum_i x_i^2=\sum_i x_i y_i$.

</details>

<details>
<summary>Worked solution</summary>

Solve the scalar centered normal equation.

1. Minimizing $\sum_i(y_i-bx_i)^2$ gives $-2\sum_i x_i y_i+2b\sum_i x_i^2=0$.
2. The positive predictor sum of squares makes the slope uniquely $b=\sum_i x_i y_i/\sum_i x_i^2$.
3. Substitution gives $b=12/6=2$. Centering is what removes the intercept from this slope calculation.

</details>
