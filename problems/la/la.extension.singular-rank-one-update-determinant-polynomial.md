# Use multilinearity when an inverse-based update formula is unavailable

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, $u=(1,-1)^T$, $v=(1,2)^T$. Return the constant and linear coefficients $[a,b]$ of $\det(A+tuv^T)=a+bt$.

```answer
{"answer":{"kind":"vector","expected":["0","-2"],"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Write out the two-by-two entries after the update.

</details>

<details>
<summary>Hint 2</summary>

The quadratic terms cancel, as they must for a rank-one update.

</details>

<details>
<summary>Worked solution</summary>

A singular base matrix still has an affine determinant update.

1. The updated matrix is $\begin{pmatrix}1+t&1+2t\\1-t&1-2t\end{pmatrix}$.
2. Its determinant is $(1+t)(1-2t)-(1+2t)(1-t)=-2t$.
3. Thus the coefficient vector is $[0,-2]$. Applying an inverse formula to the singular matrix $A$ would have been invalid.

</details>
