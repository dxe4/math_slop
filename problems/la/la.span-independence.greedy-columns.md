# Choose independent columns

*Easy · [Linear algebra problems](index.md)*

Scan the columns of $\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$ from left to right. Keep a column precisely when it is independent of those already kept. Enter the set of kept column indices, numbered from $1$.

```answer
{"answer":{"kind":"set","expected":[1,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A nonzero first column can start the collection.

</details>

<details>
<summary>Hint 2</summary>

After considering the second column, ask whether the last one is already a combination of the kept directions.

</details>

<details>
<summary>Worked solution</summary>

A greedy scan retains the earliest basis of the column space.

1. Column 1 is $(1,0)^T$, which is nonzero, so keep index $1$.
2. Column 2 is $(0,1)^T$, independent of column 1, so keep index $2$.
3. Column 3 is their sum. It adds no direction, leaving the index set $\{1,2\}$.

</details>
