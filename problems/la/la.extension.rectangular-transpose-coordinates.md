# Transpose a rectangular matrix

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Compute $A^T$ for $A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["1","4"],["2","5"],["3","6"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":3,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Transposition exchanges row and column indices.

</details>

<details>
<summary>Hint 2</summary>

The first row of $A$ becomes the first column of $A^T$.

</details>

<details>
<summary>Worked solution</summary>

Track index order and the changed shape.

1. The transpose has three rows and two columns.
2. Its successive rows are the successive columns of $A$: $(1,4)$, $(2,5)$ and $(3,6)$.
3. These rows give the requested matrix, with entry $(i,j)$ equal to the original entry $(j,i)$.

</details>
