# Reconstruct a map from an eigenbasis

*Medium · [Linear algebra problems](index.md)*

Let $P=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $D=\begin{pmatrix}2&0\\0&3\end{pmatrix}$. Find the standard matrix $A=PDP^{-1}$.

```answer
{"answer":{"kind":"matrix","expected":[[2,1],[0,3]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

First invert the change-of-basis matrix.

</details>

<details>
<summary>Hint 2</summary>

Keep the multiplication order: a change to eigen-coordinates happens before the diagonal action.

</details>

<details>
<summary>Worked solution</summary>

Conjugation converts a diagonal coordinate description to the standard basis.

1. $P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$.
2. The product $PD$ is $\begin{pmatrix}2&3\\0&3\end{pmatrix}$.
3. Multiplying by $P^{-1}$ gives $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$. Its columns act on the given eigenvectors as prescribed.

</details>
