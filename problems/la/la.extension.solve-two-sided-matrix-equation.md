# Undo left and right multiplication on different sides

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Find $X$ satisfying $AXB=C$, where $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $B=\operatorname{diag}(2,3)$ and $C=\begin{pmatrix}4&-3\\2&0\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["1","-1"],["1","0"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Undo the left multiplier on the left and the right multiplier on the right.

</details>

<details>
<summary>Hint 2</summary>

After applying $A^{-1}$, divide columns by the corresponding diagonal entries of $B$.

</details>

<details>
<summary>Worked solution</summary>

Preserve multiplication order in a matrix equation.

1. Both factors are invertible, so $X=A^{-1}CB^{-1}$.
2. $A^{-1}C=\begin{pmatrix}2&-3\\2&0\end{pmatrix}$ because its first row is the original first row minus the second.
3. Right multiplication by $B^{-1}$ divides the first column by two and the second by three, giving $\begin{pmatrix}1&-1\\1&0\end{pmatrix}$.

</details>
