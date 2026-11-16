# Finding the singular value of a parameter

*Difficulty 3 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 6 of 12*

For which real values of $k$ is the matrix $A = \begin{pmatrix} 1 & 2 \\ 3 & k \end{pmatrix}$ singular? For all other values of $k$, write down $A^{-1}$.

<details>
<summary>Hint 1</summary>

Singularity is detected by the determinant.

</details>

<details>
<summary>Hint 2</summary>

For a 2-by-2 matrix, $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

</details>

<details>
<summary>Worked solution</summary>

Compute $\det A = 1 \cdot k - 2 \cdot 3 = k - 6$. The matrix is singular exactly when $k - 6 = 0$, that is, $k = 6$; indeed at $k = 6$ the second row is three times the first. For $k \neq 6$ the inverse formula gives $A^{-1} = \dfrac{1}{k - 6} \begin{pmatrix} k & -2 \\ -3 & 1 \end{pmatrix}$. The exercise illustrates the general principle: a parametrized family of matrices fails to be invertible exactly on the zero set of its determinant, and the inverse blows up as the parameter approaches that zero set.

**Answer.** Singular exactly at $k = 6$; otherwise $A^{-1} = \frac{1}{k-6} \begin{pmatrix} k & -2 \\ -3 & 1 \end{pmatrix}$.

</details>

*Tags: matrices, determinants, invertibility*
