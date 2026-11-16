# Read a triangular spectrum

*Easy · [Linear algebra problems](index.md)*

Find the set of distinct eigenvalues of $\begin{pmatrix}2&3&0\\0&-1&4\\0&0&2\end{pmatrix}$ over $\mathbb C$.

```answer
{"answer":{"kind":"set","expected":[-1,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The characteristic polynomial of a triangular matrix comes from its diagonal.

</details>

<details>
<summary>Hint 2</summary>

A set lists a repeated eigenvalue only once.

</details>

<details>
<summary>Worked solution</summary>

Triangularity turns the characteristic determinant into a product.

1. The characteristic polynomial is $(x-2)^2(x+1)$.
2. Its roots are $2$, with multiplicity two, and $-1$, with multiplicity one.
3. The set of distinct eigenvalues is $\{-1,2\}$.

</details>
