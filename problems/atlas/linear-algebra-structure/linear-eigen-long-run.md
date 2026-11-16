# Repeated transformation

*Difficulty 3 of 5 · [Linear algebra as structure](index.md) · exercise 4 of 11*

A matrix $A$ has eigenvectors $u$ and $v$ with eigenvalues $3$ and $1/2$. If $x=u+4v$, express $A^n x$ and describe its direction for large $n$.

<details>
<summary>Hint 1</summary>

Apply $A^n$ to each eigenvector separately

</details>

<details>
<summary>Hint 2</summary>

Compare exponential growth rates

</details>

<details>
<summary>Worked solution</summary>

Linearity and the eigenvector relations give $A^n x=A^n u+4A^n v=3^n u+4(1/2)^n v$. The $u$ component grows like $3^n$ while the $v$ component decays to zero. After normalization, $A^n x$ therefore points increasingly in the $u$ direction (assuming $u$ is nonzero). The dominant eigenvalue controls long-run direction.

**Answer.** $A^n x=3^n u+4\cdot2^{-n}v$; its normalized direction approaches $u$.

</details>

*Tags: eigenvalue, iteration, asymptotic*
