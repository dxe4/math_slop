# Locate a reduced-echelon obstruction

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. The matrix $R=\begin{pmatrix}1&2&0\\0&1&0\end{pmatrix}$ is in echelon form but is not reduced. Give the column index containing an entry above a leading one that violates reduced echelon form; indices start at one.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Identify each row's first nonzero entry.

</details>

<details>
<summary>Hint 2</summary>

In reduced echelon form every other entry in a pivot column must vanish.

</details>

<details>
<summary>Worked solution</summary>

Distinguish echelon pivot order from the extra reduced-column condition.

1. The first row has its leading one in column one, and the second in column two.
2. The entry above the second pivot is two rather than zero.
3. Thus column two obstructs reduced echelon form, although the pivot positions increase correctly.

</details>
