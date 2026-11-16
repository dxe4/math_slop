# Compare rank over two scalar fields

*Medium · [Linear algebra problems](index.md)*

All matrices act on columns; state-space entries are dimensionless. Let $M=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}$. Return \[rank over $\mathbb Q$, rank over $\mathbb F_2$\], reducing the entries modulo two for the second rank.

```answer
{"answer":{"kind":"vector","expected":["3","2"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the integer determinant, then inspect what happens to it in characteristic two.

</details>

<details>
<summary>Hint 2</summary>

In characteristic two the rows sum to zero, but the first two are independent.

</details>

<details>
<summary>Worked solution</summary>

Track the scalar field in both determinant and linear dependence.

1. The determinant over the integers is two, so it is nonzero over $\mathbb Q$ and gives rank three.
2. Over $\mathbb F_2$ each column has two ones, so the sum of the three rows is zero and the rank is at most two.
3. The first two rows are distinct nonzero vectors and hence independent over $\mathbb F_2$, giving rank two.

</details>
