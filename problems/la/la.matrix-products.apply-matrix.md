# Apply a matrix to a vector

*Easy · [Linear algebra problems](index.md)*

Compute $\begin{pmatrix}1&2\\-1&3\end{pmatrix}\binom{2}{-1}$. Enter the resulting vector.

```answer
{"answer":{"kind":"vector","expected":[0,-5],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Each output coordinate is the dot product of one row with the given column.

</details>

<details>
<summary>Hint 2</summary>

Keep the negative sign on the second input when using both rows.

</details>

<details>
<summary>Worked solution</summary>

Use row-by-column multiplication.

1. The first coordinate is $1\cdot2+2\cdot(-1)=0$.
2. The second is $(-1)\cdot2+3\cdot(-1)=-5$.
3. The resulting vector is $[0,-5]$.

</details>
