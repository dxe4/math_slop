# Compute an adjoint with distinct input and output metrics

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. The input inner product has matrix $G=\operatorname{diag}(1,2)$ and the output has $H=\operatorname{diag}(3,1)$. For $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, find its adjoint matrix.

```answer
{"answer":{"kind":"matrix","expected":[["3","0"],["3/2","1/2"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Write the identity $(Ax)^THy=x^TG(A^*y)$.

</details>

<details>
<summary>Hint 2</summary>

Solve $GA^*=A^TH$ rather than using the ordinary transpose alone.

</details>

<details>
<summary>Worked solution</summary>

The adjoint is relative to both metrics.

1. The identity for all inputs forces $A^*=G^{-1}A^TH$.
2. The intermediate product is $A^TH=\begin{pmatrix}3&0\\3&1\end{pmatrix}$.
3. Left multiplication by $G^{-1}$ leaves the first row and halves the second, giving $\begin{pmatrix}3&0\\3/2&1/2\end{pmatrix}$.

</details>
