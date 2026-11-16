# Exchange a pivot row

*Easy · [Linear algebra problems](index.md)*

Find the reduced row echelon form of $\begin{pmatrix}0&2\\1&3\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[[1,0],[0,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

A row exchange can move a nonzero entry into the first pivot position.

</details>

<details>
<summary>Hint 2</summary>

After the exchange, make the second pivot equal to one before clearing above it.

</details>

<details>
<summary>Worked solution</summary>

Use invertible row operations to create the two standard pivot columns.

1. Exchange the rows to obtain $\begin{pmatrix}1&3\\0&2\end{pmatrix}$.
2. Divide the second row by $2$, giving $\begin{pmatrix}1&3\\0&1\end{pmatrix}$.
3. Subtract three times row 2 from row 1. The RREF is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$.

</details>
