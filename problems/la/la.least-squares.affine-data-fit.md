# Fit an affine line to data

*Medium · [Linear algebra problems](index.md)*

Fit $y=a+bx$ by ordinary least squares to the three points $(0,1)$, $(1,2)$ and $(2,2)$, with equal weights. Enter $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["7/6","1/2"],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Orthogonality of the residual to the two model columns gives two normal equations.

</details>

<details>
<summary>Hint 2</summary>

The model columns are the constant column and the column of horizontal coordinates.

</details>

<details>
<summary>Worked solution</summary>

Use the normal equations for the constant and slope coefficients.

1. For $A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$ and observations $(1,2,2)^T$, the normal equations are $3a+3b=5$ and $3a+5b=6$.
2. Subtracting gives $2b=1$, hence $b=1/2$. The first equation then gives $a=7/6$.
3. The columns of $A$ are independent, so this solution is the unique least-squares fit. Enter $[7/6,1/2]$.

</details>
