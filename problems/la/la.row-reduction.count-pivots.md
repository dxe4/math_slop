# Read rank from echelon form

*Easy · [Linear algebra problems](index.md)*

The matrix $R=\begin{pmatrix}1&0&2\\0&1&-1\\0&0&0\end{pmatrix}$ is in reduced row echelon form. Find $\operatorname{rank}R$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Rank equals the number of pivot positions.

</details>

<details>
<summary>Hint 2</summary>

Count the nonzero rows, rather than all the columns containing nonzero entries.

</details>

<details>
<summary>Worked solution</summary>

In echelon form each nonzero row contributes exactly one pivot.

1. The first row has a pivot in column 1.
2. The second row has a pivot in column 2; the last row contributes none.
3. There are two pivots, so $\operatorname{rank}R=2$.

</details>
