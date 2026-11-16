# Prove the row-volume bound with equality conditions

*Hard · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For a real square matrix $A$ whose rows are all nonzero, prove $|\det A|\le\prod_j\|r_j\|_2$, and prove equality holds exactly when the rows are pairwise orthogonal. Include the dependent-row case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If the rows are independent, apply Gram-Schmidt without normalizing its successive perpendicular residuals.

</details>

<details>
<summary>Hint 2</summary>

The determinant magnitude is the product of residual lengths; compare each residual with the original row and track equality.

</details>

<details>
<summary>Model proof</summary>

Separate volume from accumulated components in earlier row directions.

1. If the rows are dependent, the determinant is zero while the product of their nonzero lengths is positive, so the inequality is strict.
2. If independent, Gram-Schmidt expresses the row matrix as a triangular coefficient matrix times an orthogonal matrix. Its determinant magnitude is the product of the successive nonzero residual lengths.
3. Each original row is its residual plus its orthogonal projection onto earlier rows. Pythagoras makes the residual length at most the original length, proving the bound.
4. Equality in the product of these positive bounds requires equality at every step, hence every earlier projection is zero. That is pairwise row orthogonality. Conversely orthogonal rows give equality directly.

**Self-assessment rubric**

- Explain strictness when nonzero rows are dependent.
- Relate determinant magnitude to Gram-Schmidt residual lengths.
- Use orthogonal splitting to compare each residual with its original row.
- Prove both directions of the pairwise-orthogonality equality condition.

</details>
