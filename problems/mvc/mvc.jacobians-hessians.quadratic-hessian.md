# Build a constant Hessian

*Easy · [Multivariable calculus problems](index.md)*

Find the Hessian matrix of $f(x,y)=x^2+3xy+2y^2$, in coordinate order $(x,y)$.

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["2","3"],["3","4"]],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The Hessian contains all second partial derivatives.

</details>

<details>
<summary>Hint 2</summary>

The mixed term contributes to both off-diagonal entries.

</details>

<details>
<summary>Worked solution</summary>

A quadratic polynomial has a constant Hessian.

1. The first derivatives are $2x+3y$ and $3x+4y$.
2. Differentiating again gives $f_{xx}=2$, $f_{xy}=f_{yx}=3$ and $f_{yy}=4$.
3. The Hessian is $\begin{pmatrix}2&3\\3&4\end{pmatrix}$.

</details>
