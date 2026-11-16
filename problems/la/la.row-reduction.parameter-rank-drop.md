# Locate a rank drop

*Medium · [Linear algebra problems](index.md)*

For real $t$, let $A_t=\begin{pmatrix}1&1&1\\2&2&t\\0&1&1\end{pmatrix}$. Find the set of values $t$ for which $\operatorname{rank}A_t=2$.

```answer
{"answer":{"kind":"set","expected":[2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Eliminate the first entry in the second row before deciding how many pivots remain.

</details>

<details>
<summary>Hint 2</summary>

The first and third rows always provide two independent pivot directions. Inspect the remaining row.

</details>

<details>
<summary>Worked solution</summary>

Isolate the only pivot whose existence depends on the parameter.

1. Apply $R_2\leftarrow R_2-2R_1$ to obtain the rows $(1,1,1)$, $(0,0,t-2)$ and $(0,1,1)$.
2. The first and third rows are independent for every $t$. The remaining row supplies a third pivot precisely when $t-2\ne0$.
3. Thus the rank is exactly two only for $t=2$. The requested set is $\{2\}$.

</details>
