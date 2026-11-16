# Find a common eigenbasis

*Hard · [Linear algebra problems](index.md)*

Let $A=\operatorname{diag}(1,1,2)$ and $B=\begin{pmatrix}0&1&0\\1&0&0\\0&0&3\end{pmatrix}$. Find an invertible matrix $P$ diagonalizing both by $P^{-1}AP$ and $P^{-1}BP$. Order its columns by the $B$-eigenvalues $1,-1,3$; normalize the first two columns to first coordinate $1$ and the last to third coordinate $1$.

```answer
{"answer":{"kind":"matrix","expected":[[1,1,0],[1,-1,0],[0,0,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

The repeated eigenspace of the first matrix allows a choice of basis within a plane.

</details>

<details>
<summary>Hint 2</summary>

Choose that plane basis to diagonalize the restriction of the second matrix, then handle the remaining invariant line.

</details>

<details>
<summary>Worked solution</summary>

Refine the eigenspace decomposition of one commuting map using the other map.

1. The $A$-eigenspace for eigenvalue $1$ is the plane $z=0$, which $B$ preserves. The remaining line is spanned by $(0,0,1)$.
2. On $z=0$, $B$ interchanges the first two coordinates. Its eigenvectors for $1,-1$ are respectively $(1,1,0)$ and $(1,-1,0)$.
3. The last invariant line has $A$-eigenvalue $2$ and $B$-eigenvalue $3$, with normalized vector $(0,0,1)$.
4. Using these ordered columns gives $P=\begin{pmatrix}1&1&0\\1&-1&0\\0&0&1\end{pmatrix}$, with determinant $-2\ne0$.
5. Thus $P^{-1}AP=\operatorname{diag}(1,1,2)$ and $P^{-1}BP=\operatorname{diag}(1,-1,3)$, establishing the common diagonalization.

</details>
