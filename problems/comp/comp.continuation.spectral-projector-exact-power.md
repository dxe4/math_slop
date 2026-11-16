# Compute a rational matrix-power row through invariant modes

*Hard · [Computational arithmetic problems](index.md)*

Let $A=\begin{pmatrix}7/12&1/12&1/3\\1/12&7/12&1/3\\1/3&1/3&1/3\end{pmatrix}$. Return the first row of $A^{20}$ as three exact rational entries.

```answer
{"answer":{"kind":"vector","expected":["2097155/6291456","2097149/6291456","1/3"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Test the constant vector and two orthogonal difference vectors before multiplying twenty matrices.

</details>

<details>
<summary>Hint 2</summary>

Build the projections for the modes that survive a positive power, then combine their first rows.

</details>

<details>
<summary>Worked solution</summary>

An orthogonal invariant-mode decomposition turns repeated multiplication into scalar powers.

1. The vectors $(1,1,1)^T$, $(1,-1,0)^T$ and $(1,1,-2)^T$ are orthogonal eigenvectors with eigenvalues $1,1/2,0$.
2. The constant projection is $J/3$, where $J$ is all ones. The second projection is $\frac12\begin{pmatrix}1&-1&0\\-1&1&0\\0&0&0\end{pmatrix}$.
3. Thus $A^{20}=J/3+2^{-20}P$, and its first row is $[1/3+2^{-21},1/3-2^{-21},1/3]$.
4. Since $2^{21}=2097152$, the exact entries are $[2097155/6291456,2097149/6291456,1/3]$.

</details>
