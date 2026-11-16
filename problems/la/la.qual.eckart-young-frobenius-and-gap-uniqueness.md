# Prove the optimal low-rank approximation theorem

*Hard · [Linear algebra problems](index.md)*

For a real m-by-n matrix A with singular values $\sigma_1\ge\cdots\ge\sigma_{\min(m,n)}$, prove the minimum of $\|A-B\|_F^2$ over rank(B)&lt;=r, $1\le r<\min(m,n)$, is $\sum_{j>r}\sigma_j^2$. If $\sigma_r>\sigma_{r+1}$ prove the minimizer is unique. Preparation: SVD and the variational trace bound for orthogonal projections.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a rank-(n-r) orthogonal projection into the kernel of any candidate B.

</details>

<details>
<summary>Hint 2</summary>

The error on that subspace is A itself; use the bottom singular subspace to identify both the lower bound and its strict-gap equality case.

</details>

<details>
<summary>Model proof</summary>

Kernel dimension supplies a universal error floor attained by truncating the SVD.

1. Every rank-at-most-r B has a kernel containing a subspace of dimension $n-r$. Let Q project onto such a subspace. Orthogonal input splitting gives $\|A-B\|_F^2\ge\|(A-B)Q\|_F^2=\|AQ\|_F^2$.
2. This last quantity is $\operatorname{tr}(A^TAQ)$ and is at least the sum of the bottom $n-r$ eigenvalues of $A^TA$, by the projection variational principle. Padding singular values by zeros when needed makes this exactly $\sum_{j>r}\sigma_j^2$.
3. Truncating an SVD after r terms gives a rank-at-most-r matrix with precisely that squared error, so the lower bound is sharp.
4. With the strict gap, equality in the projection bound forces Q to be the bottom right-singular spectral projector. Equality in the first orthogonal splitting forces $(A-B)(I-Q)=0$, while BQ=0. Hence $B=A(I-Q)$, the same unique truncated matrix.

**Self-assessment rubric**

- Find the required projection and justify the Frobenius splitting lower bound.
- Apply the projection trace principle with rectangular zero padding correctly.
- Construct the SVD truncation and compute its exact error.
- Trace both equality conditions to the unique matrix, rather than only a choice of singular vectors.

</details>
