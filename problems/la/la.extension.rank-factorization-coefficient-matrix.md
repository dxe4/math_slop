# Extract the coefficient half of a rank factorization

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $A=\begin{pmatrix}1&2&3\\0&1&1\\1&3&4\end{pmatrix}$ and let $C$ consist of its first two columns. Find the unique $2\times3$ matrix $R$ such that $A=CR$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","1"],["0","1","1"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Check independence of the two selected columns using their first two entries.

</details>

<details>
<summary>Hint 2</summary>

Express every column of $A$ in that selected basis.

</details>

<details>
<summary>Worked solution</summary>

Use independent spanning columns to factor a matrix through its image.

1. The first two columns are independent since their first two entries form an invertible triangular matrix.
2. The first two columns therefore have coordinate vectors $(1,0)$ and $(0,1)$, while the third is their sum.
3. The coordinate vectors form the columns of $R$, giving $\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$. Independence also proves uniqueness.

</details>
