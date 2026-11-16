# Prove determinant positivity for a commuting complex structure

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $J$ act on a real vector space of dimension $2n$ with $J^2=-I$. If a real map $A$ commutes with $J$, prove $\det_{\mathbb R}A\ge0$, with strict positivity if $A$ is invertible. Relate it to a complex determinant.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Define multiplication by i to be J and regard the space as complex.

</details>

<details>
<summary>Hint 2</summary>

In a complex basis, compare the real block matrix with its complexification in coordinates z and its conjugate.

</details>

<details>
<summary>Model proof</summary>

The real determinant is a complex norm.

1. The rule $(a+ib)v=av+bJv$ makes the space a complex vector space of dimension $n$. Commutation makes $A$ complex linear, with complex matrix $C=X+iY$ in a complex basis.
2. In the associated real basis its matrix is $R=\begin{pmatrix}X&-Y\\Y&X\end{pmatrix}$. Over the complex field, the invertible coordinate change $(x,y)\mapsto(x+iy,x-iy)$ conjugates $R$ to $\operatorname{diag}(C,\overline C)$.
3. Hence $\det_{\mathbb R}A=\det C\det\overline C=|\det C|^2\ge0$. If the real map is invertible, its complex matrix is invertible too, so this square is positive.

**Self-assessment rubric**

- Construct the complex scalar action and identify the resulting dimension.
- Use commutation to obtain a complex-linear matrix representation.
- Verify the real block matrix and its conjugate-pair complexification.
- Derive the squared-modulus formula and handle invertibility.

</details>
