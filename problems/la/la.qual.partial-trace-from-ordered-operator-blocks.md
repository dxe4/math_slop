# Compute a partial trace using a declared factor order

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb C^2\otimes\mathbb C^2$ use basis $(e_1f_1,e_1f_2,e_2f_1,e_2f_2)$. The operator matrix is $M=\begin{pmatrix}1&0&2&3\\0&4&5&6\\7&8&9&0\\10&11&0&12\end{pmatrix}$. The partial trace over the second factor has entries equal to the traces of the corresponding $2\times2$ blocks. Find it.

```answer
{"answer":{"kind":"matrix","expected":[["5","8"],["18","21"]],"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Partition the matrix into four contiguous blocks of the second-factor size.

</details>

<details>
<summary>Hint 2</summary>

Take a trace within each block, not the sum of all its entries.

</details>

<details>
<summary>Worked solution</summary>

Contract only the second tensor index.

1. The first block trace is $1+4=5$ and the upper-right block trace is $2+6=8$.
2. The lower-left block trace is $7+11=18$ and the final block trace is $9+12=21$.
3. These block traces form $\begin{pmatrix}5&8\\18&21\end{pmatrix}$. Its trace twenty-six agrees with the trace of M, as a contraction consistency check.

</details>
