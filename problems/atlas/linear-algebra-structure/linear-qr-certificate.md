# Verify a QR factorization

*Difficulty 3 of 5 · [Linear algebra as structure](index.md) · exercise 8 of 11*

Let $q_1=(1,1,0)/\sqrt{2}$ and $q_2=(1,-1,2)/\sqrt{6}$. Verify that $q_1,q_2$ are orthonormal. If $A$ has columns $2q_1$ and $q_1+3q_2$, give $Q$ and $R$ in $A=QR$.

<details>
<summary>Hint 1</summary>

Check norms and dot product

</details>

<details>
<summary>Hint 2</summary>

Coordinates in an orthonormal basis become entries of R

</details>

<details>
<summary>Worked solution</summary>

Both vectors have norm one: $q_1$ has squared norm $2/2=1$ and $q_2$ has squared norm $6/6=1$. Their dot product is $(1-1+0)/(\sqrt{2}\sqrt{6})=0$. Set $Q=[q_1\ q_2]$. The first column of $A$ has $Q$-coordinates $(2,0)$, and the second has coordinates $(1,3)$, so $R=\begin{pmatrix}2&1\\0&3\end{pmatrix}$. Multiplying $QR$ reconstructs the stated columns.

**Answer.** $Q=[q_1\ q_2]$ and $R=\begin{pmatrix}2&1\\0&3\end{pmatrix}$; $Q^\mathsf{T}Q=I$.

</details>

*Tags: QR, orthogonality, factorization*
