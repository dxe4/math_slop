# Differentiate a coupled exponential twice

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=e^{x+y}$, enter its Hessian at $(0,0)$ in coordinate order $(x,y)$.

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["1","1"],["1","1"]],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Each first partial derivative equals the original function.

</details>

<details>
<summary>Hint 2</summary>

The same observation applies to the second derivatives.

</details>

<details>
<summary>Worked solution</summary>

All four second partial derivatives agree for this composition.

1. Both first derivatives equal $e^{x+y}$.
2. Every second partial derivative is also $e^{x+y}$.
3. At the origin each entry is $1$, so the Hessian is $\begin{pmatrix}1&1\\1&1\end{pmatrix}$.

</details>
