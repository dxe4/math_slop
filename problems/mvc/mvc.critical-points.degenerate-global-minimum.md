# Go beyond an inconclusive Hessian

*Medium · [Multivariable calculus problems](index.md)*

Find the global minimum value of $f(x,y)=x^4+y^4$ on $\mathbb R^2$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Both summands have a sign that is valid globally.

</details>

<details>
<summary>Hint 2</summary>

Identify a point where the resulting lower bound is attained.

</details>

<details>
<summary>Worked solution</summary>

A global sign bound works even when the Hessian vanishes.

1. For every real pair, $x^4\geq0$ and $y^4\geq0$, so $f\geq0$.
2. The value at $(0,0)$ is $0$, establishing attainment.
3. The global minimum is $0$; the zero Hessian at the origin alone would be inconclusive.

</details>
