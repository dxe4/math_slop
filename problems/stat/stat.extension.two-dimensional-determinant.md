# Two dimensional determinant

*Easy · [Statistics and probability](index.md)*

What is the determinant of the covariance matrix $\Sigma=\begin{pmatrix}4&1\\1&3\end{pmatrix}$?

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

For a two-by-two matrix, subtract the product on the other diagonal from the product on the main diagonal.

</details>

<details>
<summary>Hint 2</summary>

Keep the off-diagonal product even though the matrix is symmetric.

</details>

<details>
<summary>Worked solution</summary>

Use the two-by-two determinant formula.

1. For $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ the determinant is $ad-bc$.
2. Here this becomes $4\cdot3-1\cdot1=12-1=11$.
3. Thus $\det\Sigma=11$. Together with the positive first diagonal entry this also shows that this symmetric matrix is positive definite.

</details>
