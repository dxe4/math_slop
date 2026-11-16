# Hold the other coordinate fixed

*Easy · [Multivariable calculus problems](index.md)*

For $f(x,y)=x^2y+3y^2$ on $\mathbb R^2$, find $f_x(2,1)$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Treat $y$ as a constant during differentiation.

</details>

<details>
<summary>Hint 2</summary>

Only one term varies with $x$.

</details>

<details>
<summary>Worked solution</summary>

A partial derivative changes one coordinate at a time.

1. With $y$ fixed, $\partial(x^2y)/\partial x=2xy$.
2. The term $3y^2$ has $x$-derivative zero.
3. Thus $f_x(2,1)=2\cdot2\cdot1=4$.

</details>
