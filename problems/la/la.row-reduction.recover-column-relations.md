# Recover a matrix from its column relations

*Hard · [Linear algebra problems](index.md)*

A real $3\times4$ matrix $A$ has RREF $\begin{pmatrix}1&0&2&-1\\0&1&-1&3\\0&0&0&0\end{pmatrix}$. Its first two columns are $u=(1,2,0)^T$ and $v=(0,1,1)^T$. Find $A$.

```answer
{"answer":{"kind":"matrix","expected":[[1,0,2,-1],[2,1,3,1],[0,1,-1,3]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":3,"columns":4}}
```

<details>
<summary>Hint 1</summary>

An invertible row operation acts on every column by the same invertible linear map.

</details>

<details>
<summary>Hint 2</summary>

Read each nonpivot column of the RREF as a linear combination of its first two columns.

</details>

<details>
<summary>Worked solution</summary>

Invertible left multiplication preserves every linear relation between columns.

1. There is an invertible matrix $E$ such that $EA$ is the displayed RREF.
2. In that RREF, column 3 equals twice column 1 minus column 2. Multiplication by $E^{-1}$ gives the same relation in $A$.
3. Likewise column 4 of $A$ equals $-u+3v$.
4. Compute $2u-v=(2,3,-1)^T$ and $-u+3v=(-1,1,3)^T$.
5. Therefore $A=\begin{pmatrix}1&0&2&-1\\2&1&3&1\\0&1&-1&3\end{pmatrix}$.

</details>
