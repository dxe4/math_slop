# Compute a saddle-point Hessian determinant

*Easy · [Multivariable calculus problems](index.md)*

For $f(x,y)=x^2-y^2$, compute the determinant of its Hessian at the critical point $(0,0)$.

```answer
{"answer":{"kind":"integer","expected":"-4","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The mixed derivatives vanish.

</details>

<details>
<summary>Hint 2</summary>

The signs of the two pure second derivatives differ.

</details>

<details>
<summary>Worked solution</summary>

The determinant measures the opposing quadratic curvatures.

1. The Hessian is $\begin{pmatrix}2&0\\0&-2\end{pmatrix}$.
2. Its determinant is $2(-2)-0=-4$.
3. The negative determinant confirms that the critical point is a saddle.

</details>
