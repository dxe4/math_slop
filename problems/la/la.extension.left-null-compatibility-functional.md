# Use a left-null relation to select a consistent right side

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For $A=\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}$, find the real $t$ for which $Ax=(1,2,t)^T$ is consistent.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The third row is the sum of the first two.

</details>

<details>
<summary>Hint 2</summary>

The same relation must hold among the right-hand-side entries.

</details>

<details>
<summary>Worked solution</summary>

Transport a row relation to the augmented column.

1. The first two rows force $x_1=1$ and $x_2=2$.
2. The third row then requires $t=x_1+x_2=3$.
3. For that value the forced vector does satisfy every row, proving necessity and sufficiency.

</details>
