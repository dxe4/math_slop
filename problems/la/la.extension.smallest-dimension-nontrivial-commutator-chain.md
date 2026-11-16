# Find the smallest dimension supporting a commutator chain

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Find the smallest positive integer $n$ for which real $n\times n$ matrices satisfy $AB-BA=A$ and $A^2\ne0$. Justify the obstruction in smaller dimensions and a construction. Enter only $n$; the full argument is for personal study.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Take traces first, then apply the product rule for the commutator to $A^2$.

</details>

<details>
<summary>Hint 2</summary>

For a two-by-two matrix, express its determinant through the traces of its first two powers; for a construction use an upper shift and a diagonal matrix.

</details>

<details>
<summary>Worked solution</summary>

Combine commutator trace constraints with the two-dimensional characteristic identity.

1. The relation gives $\operatorname{tr}A=0$. Also $[A^2,B]=A[A,B]+[A,B]A=2A^2$, so $\operatorname{tr}(A^2)=0$.
2. For dimension two, $2\det A=(\operatorname{tr}A)^2-\operatorname{tr}(A^2)=0$. Cayley-Hamilton then gives $A^2=0$. In dimension one every commutator is zero, forcing $A=0$.
3. For dimension three choose $A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$ and $B=\operatorname{diag}(0,1,2)$. Each nonzero superdiagonal entry of $AB-BA$ equals one, so the relation holds, while $A^2=E_{13}\ne0$. The minimum is three.

</details>
