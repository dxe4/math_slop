# Multiply rectangular matrices

*Easy · [Linear algebra problems](index.md)*

Compute $\begin{pmatrix}1&0&-1\\2&1&0\end{pmatrix}\begin{pmatrix}1&2\\0&3\\4&-1\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[[-3,3],[2,7]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The inner dimensions agree, and the output has the two outer dimensions.

</details>

<details>
<summary>Hint 2</summary>

Each entry uses three products, even though some are zero.

</details>

<details>
<summary>Worked solution</summary>

Rectangular multiplication follows the same row-column rule.

1. The first output row is $(1+0-4,\;2+0+1)=(-3,3)$.
2. The second is $(2+0+0,\;4+3+0)=(2,7)$.
3. The product is the $2\times2$ matrix $\begin{pmatrix}-3&3\\2&7\end{pmatrix}$.

</details>
