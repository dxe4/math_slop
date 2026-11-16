# Read a unit-forcing solution from an inverse

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. A nonsingular matrix satisfies $A^{-1}=\begin{pmatrix}2&3\\1&1\end{pmatrix}$. Find the unique solution of $Ax=e_2$.

```answer
{"answer":{"kind":"vector","expected":["3","1"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Apply the inverse to the stated equation.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by $e_2$ selects the second column.

</details>

<details>
<summary>Worked solution</summary>

Use an inverse as a solution operator rather than inverting it again.

1. Invertibility makes the solution unique and gives $x=A^{-1}e_2$.
2. The second column of the supplied inverse is $(3,1)^T$.
3. That column is the required input producing the second unit output.

</details>
