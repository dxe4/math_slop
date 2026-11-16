# Choose the shortest parameter vector among inconsistent fits

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$ and $b=(1,0)^T$, find the unique minimum-Euclidean-norm vector among all minimizers of $\|Ax-b\|^2$.

```answer
{"answer":{"kind":"vector","expected":["1/10","1/10"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The residual depends only on the sum of the two unknown coordinates.

</details>

<details>
<summary>Hint 2</summary>

After finding the optimal sum, minimize the coordinate norm subject to that sum.

</details>

<details>
<summary>Worked solution</summary>

Separate fitted values from nonunique parameter representations.

1. Writing $s=x_1+x_2$, the squared residual is $(s-1)^2+4s^2=5s^2-2s+1$, minimized at $s=1/5$.
2. For a fixed sum, $x_1^2+x_2^2=s^2/2+(x_1-x_2)^2/2$, so the shortest vector has equal coordinates.
3. Therefore $x_1=x_2=1/10$. The least-squares fit is unique as an output, while the norm condition selects a unique input.

</details>
