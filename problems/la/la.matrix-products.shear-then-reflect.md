# Compose a shear and a reflection

*Medium · [Linear algebra problems](index.md)*

A point first undergoes the shear $S(x,y)=(x+2y,y)$ and then reflection in the $y$-axis. Find the standard matrix of the combined map.

```answer
{"answer":{"kind":"matrix","expected":[[-1,-2],[0,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Apply the geometric operations to a general input in their stated temporal order.

</details>

<details>
<summary>Hint 2</summary>

Reflection in the vertical axis negates the horizontal coordinate and retains the vertical one.

</details>

<details>
<summary>Worked solution</summary>

The map applied last multiplies on the left.

1. The shear sends $(x,y)$ to $(x+2y,y)$.
2. Reflection then sends this to $(-x-2y,y)$.
3. Reading the coefficients of $x,y$ gives $\begin{pmatrix}-1&-2\\0&1\end{pmatrix}$. This is $RS$, with $R=\operatorname{diag}(-1,1)$.

</details>
