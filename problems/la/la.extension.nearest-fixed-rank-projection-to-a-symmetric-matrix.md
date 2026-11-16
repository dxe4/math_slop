# Prove a variational best-projection formula

*Hard · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Let $A$ be real symmetric with eigenvalues $\lambda_1\ge\cdots\ge\lambda_n$, and fix $1\le r<n$. Prove the minimum of $\|A-P\|_F^2$ over rank-r orthogonal projections is $\sum_{j\le r}(\lambda_j-1)^2+\sum_{j>r}\lambda_j^2$. If $\lambda_r>\lambda_{r+1}$, prove the minimizing range is unique.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the Frobenius objective and express its mixed trace in an orthonormal eigenbasis of $A$.

</details>

<details>
<summary>Hint 2</summary>

The diagonal projection weights lie between zero and one and sum to r; compare their weighted eigenvalue sum with the sum of the largest r eigenvalues.

</details>

<details>
<summary>Model proof</summary>

A matrix optimization reduces to a constrained spectral-weight allocation.

1. For an orthogonal projection, $\|P\|_F^2=\operatorname{tr}P=r$, so the objective is $\|A\|_F^2+r-2\operatorname{tr}(AP)$.
2. In an orthonormal eigenbasis put $p_j=\langle Pe_j,e_j\rangle=\|Pe_j\|^2$. Then $0\le p_j\le1$, $\sum p_j=r$ and $\operatorname{tr}(AP)=\sum\lambda_jp_j$.
3. Let $d=\sum_{j\le r}(1-p_j)=\sum_{j>r}p_j$. The loss from the top-r eigenvalue sum is at least $(\lambda_r-\lambda_{r+1})d\ge0$. Projection onto the top eigenvectors attains zero loss and gives the displayed minimum after expanding squares.
4. With a strict gap, equality forces $d=0$, hence $p_j=1$ above the cut and zero below. For a projection these equalities imply $Pe_j=e_j$ or zero respectively, so the range is exactly the top-r spectral subspace and is unique.

**Self-assessment rubric**

- Expand the objective using rank and orthogonal projection identities.
- Derive the bounds and sum constraint for eigenbasis projection weights.
- Prove the top-r trace bound and exhibit an attaining projection.
- Use the gap and projection equality cases to identify the unique minimizing range.

</details>
