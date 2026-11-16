# Keep Jacobian rows in output order

*Easy · [Multivariable calculus problems](index.md)*

Let $T(x,y)=(x^2-y,xy)$. Find $DT(1,2)$, with rows ordered by output component and columns by $(x,y)$.

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["2","-1"],["2","1"]],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Differentiate each output with respect to each input.

</details>

<details>
<summary>Hint 2</summary>

The first output supplies the first row.

</details>

<details>
<summary>Worked solution</summary>

A Jacobian records each output gradient as a row.

1. The first row is $(2x,-1)$ and the second is $(y,x)$.
2. At $(1,2)$ these become $(2,-1)$ and $(2,1)$.
3. Thus $DT(1,2)=\begin{pmatrix}2&-1\\2&1\end{pmatrix}$.

</details>
