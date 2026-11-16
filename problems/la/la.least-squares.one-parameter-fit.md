# Fit a single repeated coordinate

*Easy · [Linear algebra problems](index.md)*

Find the real $t$ minimizing $\|(1,2)-t(1,1)\|^2$ in the Euclidean norm.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the squared residual as the sum of two scalar squares.

</details>

<details>
<summary>Hint 2</summary>

A quadratic with positive leading coefficient has its minimum at its vertex.

</details>

<details>
<summary>Worked solution</summary>

Least squares in one direction is a scalar quadratic minimization.

1. The objective is $(1-t)^2+(2-t)^2=2t^2-6t+5$.
2. Complete the square: $2(t-3/2)^2+1/2$.
3. The square vanishes only at $t=3/2$, the unique minimizer.

</details>
