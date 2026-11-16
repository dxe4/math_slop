# A 3-by-3 determinant by cofactor expansion

*Difficulty 2 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 3 of 12*

Compute $\det A$ for $A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & 1 \\ 1 & 0 & 2 \end{pmatrix}$ using cofactor expansion along the first row, and state what the result says about invertibility.

<details>
<summary>Hint 1</summary>

Expansion along the first row gives $2 M_{11} - 1 M_{12} + 1 M_{13}$ with $M_{ij}$ the appropriate 2-by-2 minors.

</details>

<details>
<summary>Hint 2</summary>

The minor $M_{12}$ is the determinant of the matrix obtained by deleting row 1 and column 2.

</details>

<details>
<summary>Worked solution</summary>

Expanding along the first row: $\det A = 2 \begin{vmatrix} 3 & 1 \\ 0 & 2 \end{vmatrix} - 1 \begin{vmatrix} 0 & 1 \\ 1 & 2 \end{vmatrix} + 1 \begin{vmatrix} 0 & 3 \\ 1 & 0 \end{vmatrix} = 2(6 - 0) - 1(0 - 1) + 1(0 - 3) = 12 + 1 - 3 = 10$. Since $\det A = 10 \neq 0$, the matrix $A$ is invertible, its columns are linearly independent, and the system $Ax = b$ has a unique solution for every $b$.

**Answer.** $\det A = 10$; $A$ is invertible.

</details>

*Tags: matrices, determinants, computation*
