# Separate Gaussian mean and scatter by observation-space rotation

*Medium · [Statistics and probability](index.md)*

Let $X_1,\ldots,X_n$ be independent $N_p(\mu,\Sigma)$ vectors, where $\Sigma$ is positive definite and $n\ge2$. Prove $\bar X$ is independent of $W=\sum_i(X_i-\bar X)(X_i-\bar X)^{\mathsf T}$. More precisely, show $W$ has the same law as $\sum_{j=1}^{n-1}Z_jZ_j^{\mathsf T}$ for independent $Z_j\sim N_p(0,\Sigma)$ independent of $\bar X$. You may use Gaussian zero-covariance independence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose an orthogonal change of coordinates in the observation index whose first row is the normalized constant vector.

</details>

<details>
<summary>Hint 2</summary>

Express the residual sum of squares using the remaining orthogonal rows.

</details>

<details>
<summary>Model proof</summary>

An orthogonal observation-space change separates the mean coordinate from all residual coordinates.

1. Take an orthogonal $n\times n$ matrix $Q$ with first row $n^{-1/2}(1,\ldots,1)$ and set $Y_j=\sum_iQ_{ji}(X_i-\mu)$. The stacked vector is jointly Gaussian, and $\operatorname{Cov}(Y_j,Y_k)=\delta_{jk}\Sigma$.
2. Hence the vectors $Y_1,\ldots,Y_n$ are independent, each $N_p(0,\Sigma)$, and $Y_1=\sqrt n(\bar X-\mu)$.
3. Orthogonality gives $\sum_jY_jY_j^{\mathsf T}=\sum_i(X_i-\mu)(X_i-\mu)^{\mathsf T}$. Subtracting $Y_1Y_1^{\mathsf T}$ yields $W=\sum_{j=2}^nY_jY_j^{\mathsf T}$, a function only of coordinates independent of the mean.

**Self-assessment rubric**

- Construct the orthogonal transformation and calculate every block covariance.
- Identify the mean coordinate and justify independence of the residual coordinates.
- Derive the exact residual scatter representation, not just uncorrelatedness.

</details>
