# Ignore an irrelevant off-diagonal block

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $M=\begin{pmatrix}A&C\\0&3\end{pmatrix}$, where $A$ is $2\times2$ with determinant minus one and $C$ is any compatible column. Find $\det M$.

```answer
{"answer":{"kind":"integer","expected":-3,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The matrix is block upper triangular.

</details>

<details>
<summary>Hint 2</summary>

Its determinant is the product of the diagonal-block determinants.

</details>

<details>
<summary>Worked solution</summary>

Off-diagonal coupling does not affect a triangular determinant.

1. Expansion along the last row contributes the scalar three and the determinant of $A$.
2. The column $C$ is removed by that expansion and imposes no condition.
3. The result is $3(-1)=-3$.

</details>
