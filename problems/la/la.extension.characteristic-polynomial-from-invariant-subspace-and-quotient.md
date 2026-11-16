# Factor a characteristic polynomial without an invariant complement

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real operator $T$ on dimension four preserves a two-dimensional subspace $W$. Its restriction has matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and its induced quotient map has matrix $\operatorname{diag}(2,3)$. Return coefficients of $\det(xI-T)$ in increasing powers through $x^4$.

```answer
{"answer":{"kind":"vector","expected":["6","-17","17","-7","1"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Extend a basis of the invariant subspace to a basis of the whole space.

</details>

<details>
<summary>Hint 2</summary>

The resulting operator matrix is block triangular, even if the chosen complement is not invariant.

</details>

<details>
<summary>Worked solution</summary>

Restriction and quotient supply the diagonal blocks of a triangular representation.

1. In a basis extending one of $W$, the matrix has the restriction and quotient matrices on its diagonal blocks, with an arbitrary upper-right block.
2. The determinant of $xI-T$ is therefore $(x-1)^2(x-2)(x-3)$.
3. Expansion gives $x^4-7x^3+17x^2-17x+6$, yielding the stated ordered coefficient vector.

</details>
