# Use the matrix-entry inner product

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}1&2\\0&-1\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\3&2\end{pmatrix}$, compute $\langle A,B\rangle_F=\operatorname{tr}(A^TB)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The Frobenius product is the sum of products in corresponding positions.

</details>

<details>
<summary>Hint 2</summary>

Off-diagonal entries contribute too, even though the formula uses a trace.

</details>

<details>
<summary>Worked solution</summary>

Interpret a trace expression as an ordinary inner product on matrix coordinates.

1. The four coordinate products are zero, two, zero and minus two.
2. Their sum is zero.
3. Thus the two nonzero matrices are orthogonal in the Frobenius inner product, despite not having disjoint supports.

</details>
