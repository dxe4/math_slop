# Compute an induced exterior-square matrix

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $T$ have matrix $\begin{pmatrix}1&1&0\\0&2&1\\0&0&3\end{pmatrix}$. In the ordered basis $(e_1\wedge e_2,e_1\wedge e_3,e_2\wedge e_3)$, find the matrix of $\Lambda^2T$, defined by $u\wedge v\mapsto Tu\wedge Tv$.

```answer
{"answer":{"kind":"matrix","expected":[["2","1","1"],["0","3","3"],["0","0","6"]],"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

The input basis images of $T$ are its columns.

</details>

<details>
<summary>Hint 2</summary>

Expand each wedge bilinearly and reorder its coordinate factors using alternation.

</details>

<details>
<summary>Worked solution</summary>

Induced columns come from images of ordered basis wedges.

1. $Te_1=e_1$, $Te_2=e_1+2e_2$ and $Te_3=e_2+3e_3$.
2. The first two wedge images are $2e_1\wedge e_2$ and $e_1\wedge e_2+3e_1\wedge e_3$.
3. The last is $e_1\wedge e_2+3e_1\wedge e_3+6e_2\wedge e_3$. Their coordinate columns give the stated matrix.

</details>
