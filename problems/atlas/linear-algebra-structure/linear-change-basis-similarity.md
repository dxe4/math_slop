# Expose a transformation in its natural basis

*Difficulty 3 of 5 · [Linear algebra as structure](index.md) · exercise 7 of 11*

For $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, let $P$ have columns $(1,1)$ and $(1,-1)$. Compute the matrix of $A$ in that basis and name two quantities unchanged by the basis change.

<details>
<summary>Hint 1</summary>

Compute $AP$ column by column

</details>

<details>
<summary>Hint 2</summary>

The new matrix is $P^{-1}AP$

</details>

<details>
<summary>Worked solution</summary>

The two columns of $P$ are eigenvectors: $A(1,1)=3(1,1)$ and $A(1,-1)=1(1,-1)$. Thus $AP=P\operatorname{diag}(3,1)$, so $P^{-1}AP=\operatorname{diag}(3,1)$. Similarity preserves trace, determinant, characteristic polynomial, eigenvalues, and rank; any two of these answer the second request. Individual matrix entries need not be preserved.

**Answer.** $[A]_B=\operatorname{diag}(3,1)$; for example trace $4$ and determinant $3$ are unchanged.

</details>

*Tags: change of basis, similarity, diagonalization*
