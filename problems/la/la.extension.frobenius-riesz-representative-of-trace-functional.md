# Identify a dual functional through a matrix inner product

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $C=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ let $f(X)=\operatorname{tr}(CX)$ on $M_2(\mathbb R)$. Find $R$ such that $f(X)=\langle X,R\rangle_F$ for every $X$.

```answer
{"answer":{"kind":"matrix","expected":[["1","3"],["2","4"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Write the Frobenius pairing as the sum of corresponding entries.

</details>

<details>
<summary>Hint 2</summary>

Trace of a product pairs the entry $c_{ij}$ with $x_{ji}$.

</details>

<details>
<summary>Worked solution</summary>

The Riesz representative includes a transpose because the two pairings use different index positions.

1. One has $\operatorname{tr}(CX)=\sum_{i,j}c_{ij}x_{ji}$.
2. Renaming indices shows the coefficient of $x_{ij}$ is $c_{ji}$.
3. The Frobenius representative is therefore $C^T=\begin{pmatrix}1&3\\2&4\end{pmatrix}$, uniquely determined by testing matrix units.

</details>
