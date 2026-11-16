# Minimize distance on an affine line

*Medium · [Multivariable calculus problems](index.md)*

Over all real $(x,y)$ satisfying $x+y=2$, find the minimum of $x^2+y^2$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The constraint fixes the sum of the coordinates.

</details>

<details>
<summary>Hint 2</summary>

Compare the squared sum with twice the sum of squares and check equality.

</details>

<details>
<summary>Worked solution</summary>

A global quadratic inequality establishes more than a stationary multiplier candidate.

1. The identity $2(x^2+y^2)-(x+y)^2=(x-y)^2\geq0$ gives $x^2+y^2\geq2$.
2. Equality holds at $x=y=1$, which satisfies the constraint.
3. Therefore the minimum value is $2$. The multiplier equations also give $2x=\lambda=2y$.

</details>
