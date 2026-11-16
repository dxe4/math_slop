# Remove a dependent row

*Easy · [Linear algebra problems](index.md)*

Find the reduced row echelon form of $\begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[[1,2,3],[0,0,0]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Compare the second row with a multiple of the first.

</details>

<details>
<summary>Hint 2</summary>

A zero row belongs below all nonzero rows.

</details>

<details>
<summary>Worked solution</summary>

A dependent row contributes no new pivot.

1. Every entry in row 2 is twice the corresponding entry in row 1.
2. Replace row 2 by row 2 minus twice row 1, producing $\begin{pmatrix}1&2&3\\0&0&0\end{pmatrix}$.
3. The leading entry of the only nonzero row is $1$, and its column is otherwise zero. This is already RREF.

</details>
