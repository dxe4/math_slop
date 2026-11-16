# Compute a power limit through two invariant directions

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Find the entrywise limit of $M^n$ as $n\to\infty$ for $M=\begin{pmatrix}3/4&1/4\\1/4&3/4\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["1/2","1/2"],["1/2","1/2"]],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Use the sum and difference coordinate directions.

</details>

<details>
<summary>Hint 2</summary>

One eigenvalue preserves its direction while the other tends to zero under powers.

</details>

<details>
<summary>Worked solution</summary>

Separate a persistent mode from a decaying mode.

1. The vectors $(1,1)$ and $(1,-1)$ are eigenvectors with eigenvalues one and one half.
2. Their projection matrices are $P=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $I-P$.
3. Therefore $M^n=P+2^{-n}(I-P)$, whose limit is the stated matrix $P$.

</details>
