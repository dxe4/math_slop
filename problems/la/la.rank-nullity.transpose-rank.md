# Transpose without changing rank

*Easy · [Linear algebra problems](index.md)*

A real $4\times6$ matrix $A$ has rank $3$. Find $\operatorname{rank}(A^T)$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Row rank and column rank agree.

</details>

<details>
<summary>Hint 2</summary>

Transposition exchanges rows and columns.

</details>

<details>
<summary>Worked solution</summary>

Transposition exchanges the two equal notions of rank.

1. The rank of $A$ is both its row rank and its column rank, namely $3$.
2. The columns of $A^T$ are the rows of $A$.
3. Thus the column rank of $A^T$, and hence its rank, is $3$.

</details>
