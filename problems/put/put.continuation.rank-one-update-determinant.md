# Rank one update determinant

*Hard · [Original Putnam-style training](index.md)*

For square $A$ and vectors $u,v$ over a field, prove $\det(A+uv^T)=\det A+v^T\operatorname{adj}(A)u$ even when $A$ is singular.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Expand each perturbed column using determinant multilinearity.

</details>

<details>
<summary>Hint 2</summary>

All terms with two perturbed columns vanish because both are multiples of $u$.

</details>

<details>
<summary>Model proof</summary>

Summing with coefficients $v_j$ gives $\det A+v^T\operatorname{adj}(A)u$. No inverse or nonsingularity assumption is used.

1. Column $j$ of $A+uv^T$ is $A_j+v_j u$. Multilinearity expresses its determinant as the unperturbed $\det A$ plus all single-column replacements; terms with at least two replacements vanish.
2. The determinant with column $j$ replaced by $u$ is the $j$th component of $\operatorname{adj}(A)u$, by cofactor expansion along that column.
3. Summing with coefficients $v_j$ gives $\det A+v^T\operatorname{adj}(A)u$. No inverse or nonsingularity assumption is used.

**Self-assessment rubric**

- Expand perturbed columns and eliminate terms with at least two copies of u.
- Identify each single-column determinant with a component of adj(A)u.
- Sum contributions without assuming A invertible.

</details>
