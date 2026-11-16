# Keep the scalar field in the eigenvalue question

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. For $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, return its set of real eigenvalues.

```answer
{"answer":{"kind":"set","expected":[],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Compute $\det(xI-R)$.

</details>

<details>
<summary>Hint 2</summary>

Ask whether its quadratic polynomial has a real zero.

</details>

<details>
<summary>Worked solution</summary>

An eigenvalue must lie in the stated field.

1. The characteristic polynomial is $x^2+1$.
2. Every real square is nonnegative, so this polynomial has no real zero.
3. Thus the requested real spectrum is empty, even though complex eigenvalues exist after extending scalars.

</details>
