# Solve coupled stationary equations

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=x^3-3xy^2$, find its only critical point in $\mathbb R^2$ and enter $(x,y)$.

```answer
{"answer":{"kind":"vector","expected":["0","0"],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Compute the gradient and use the product equation first.

</details>

<details>
<summary>Hint 2</summary>

Combining $xy=0$ with equality of two squares leaves only one possibility.

</details>

<details>
<summary>Worked solution</summary>

The stationary equations constrain both coordinates together.

1. The gradient is $(3x^2-3y^2,-6xy)$.
2. At a critical point, $x^2=y^2$ and $xy=0$.
3. If either coordinate is zero, equality of squares forces the other to be zero, so the only critical point is $(0,0)$.

</details>
