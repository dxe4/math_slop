# Find the matrix of a two-sided action under column stacking

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, vectorize $2\times2$ matrices by $\operatorname{vec}X=(x_{11},x_{21},x_{12},x_{22})^T$. For $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, find the $4\times4$ matrix M with $\operatorname{vec}(AXB)=M\operatorname{vec}X$.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","1","1"],["0","0","0","2"],["1","1","0","0"],["0","2","0","0"]],"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded.","rows":4,"columns":4}}
```

<details>
<summary>Hint 1</summary>

Right multiplication by B swaps the columns of X.

</details>

<details>
<summary>Hint 2</summary>

Left multiplication applies A to each resulting column.

</details>

<details>
<summary>Worked solution</summary>

Column stacking keeps two-sided multiplication in the order $B^T\otimes A$.

1. The columns of $XB$ are the second and first columns of X.
2. Applying A gives stacked outputs $(x_{12}+x_{22},2x_{22},x_{11}+x_{21},2x_{21})$.
3. The four coefficient rows are exactly the displayed M, equivalently $B^T\otimes A$ in this convention.

</details>
