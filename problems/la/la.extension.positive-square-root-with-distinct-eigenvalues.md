# Choose the positive symmetric square root

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Find the positive definite symmetric square root of $H=\begin{pmatrix}5&4\\4&5\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["2","1"],["1","2"]],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The sum and difference directions are eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

Positive definiteness selects positive square roots for both eigenvalues.

</details>

<details>
<summary>Worked solution</summary>

Distinguish the positive root from other matrix square roots.

1. $H$ has eigenvalues nine and one on $(1,1)$ and $(1,-1)$ respectively.
2. A symmetric positive root must act by three and one on these directions: it commutes with its square, whose eigenvalues are distinct.
3. Reconstructing that action gives $\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Squaring verifies $H$, and its eigenvalues prove positivity and uniqueness among positive definite symmetric roots.

</details>
