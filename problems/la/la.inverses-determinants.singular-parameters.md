# Find singular parameter values

*Medium · [Linear algebra problems](index.md)*

For which real values $t$ is $\begin{pmatrix}t&1\\4&t\end{pmatrix}$ singular? Enter the complete set.

```answer
{"answer":{"kind":"set","expected":[-2,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Singularity is equivalent to a zero determinant.

</details>

<details>
<summary>Hint 2</summary>

After obtaining the determinant equation, retain every real root.

</details>

<details>
<summary>Worked solution</summary>

Translate a matrix condition into a scalar polynomial equation.

1. The determinant is $t^2-4$.
2. Singularity requires $(t-2)(t+2)=0$, so $t=2$ or $t=-2$.
3. Both values make the determinant zero. The complete set is $\{-2,2\}$.

</details>
