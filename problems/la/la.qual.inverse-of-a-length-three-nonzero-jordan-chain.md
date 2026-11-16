# Invert a nonzero Jordan chain exactly

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, find the inverse of $J=\begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix}$. All entries are dimensionless.

```answer
{"answer":{"kind":"matrix","expected":[["1/2","-1/4","1/8"],["0","1/2","-1/4"],["0","0","1/2"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Factor out the scalar two.

</details>

<details>
<summary>Hint 2</summary>

Use the terminating inverse series for its remaining nilpotent upper shift.

</details>

<details>
<summary>Worked solution</summary>

A nonzero eigenvalue lets the nilpotent correction be inverted by a finite geometric series.

1. Write $J=2(I+N/2)$ with $N^3=0$.
2. Then $J^{-1}=\frac12(I-N/2+N^2/4)$ because the product telescopes to the identity.
3. The diagonal, first superdiagonal and second superdiagonal entries are respectively one half, minus one quarter and one eighth, giving the stated inverse.

</details>
