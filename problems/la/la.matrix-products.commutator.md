# Measure a failure to commute

*Medium · [Linear algebra problems](index.md)*

For $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, find the commutator $AB-BA$.

```answer
{"answer":{"kind":"matrix","expected":[[1,0],[0,-1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Compute both products; the second is not obtained by merely relabelling the first.

</details>

<details>
<summary>Hint 2</summary>

Subtract corresponding entries only after the two ordered products are complete.

</details>

<details>
<summary>Worked solution</summary>

The commutator records the difference between the two composition orders.

1. Row-column multiplication gives $AB=\begin{pmatrix}1&0\\0&0\end{pmatrix}$.
2. Reversing the factors gives $BA=\begin{pmatrix}0&0\\0&1\end{pmatrix}$.
3. Hence $AB-BA=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, so these matrices do not commute.

</details>
