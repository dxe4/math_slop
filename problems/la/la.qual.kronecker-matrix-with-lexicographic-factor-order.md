# Compute a tensor map in a fixed product basis

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, let $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Find $A\otimes B$ in the ordered basis $(e_1\otimes f_1,e_1\otimes f_2,e_2\otimes f_1,e_2\otimes f_2)$. Entries are dimensionless.

```answer
{"answer":{"kind":"matrix","expected":[["0","1","0","2"],["-1","0","-2","0"],["0","0","0","1"],["0","0","-1","0"]],"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded.","rows":4,"columns":4}}
```

<details>
<summary>Hint 1</summary>

In this product order each scalar entry of A multiplies a full copy of B.

</details>

<details>
<summary>Hint 2</summary>

Keep the first tensor factor as the block index.

</details>

<details>
<summary>Worked solution</summary>

Tensor-factor order fixes the block coordinate convention.

1. The four blocks are $B,2B,0,B$, in row-major block order.
2. The first block row gives rows $(0,1,0,2)$ and $(-1,0,-2,0)$.
3. The second gives $(0,0,0,1)$ and $(0,0,-1,0)$, yielding the displayed matrix.

</details>
