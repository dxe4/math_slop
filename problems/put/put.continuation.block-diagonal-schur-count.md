# Block diagonal schur count

*Medium · [Original Putnam-style training](index.md)*

Let $A=\operatorname{diag}(1,2)$ and $B=\operatorname{diag}(3,4)$. Find the determinant of $\begin{pmatrix}I_2&A\\B&I_2\end{pmatrix}$.

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use a Schur complement of one identity block.

</details>

<details>
<summary>Hint 2</summary>

The remaining matrix is diagonal.

</details>

<details>
<summary>Worked solution</summary>

The determinant is $(-2)(-7)=14$.

1. The block determinant formula gives $\det\begin{pmatrix}I&A\\B&I\end{pmatrix}=\det(I-BA)$.
2. Here $BA=\operatorname{diag}(3,8)$, so $I-BA=\operatorname{diag}(-2,-7)$.
3. The determinant is $(-2)(-7)=14$.

</details>
