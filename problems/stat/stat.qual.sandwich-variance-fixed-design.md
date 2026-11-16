# Distinguish covariance compression from spherical errors

*Medium · [Statistics and probability](index.md)*

Let $y=X\beta+\varepsilon$, with a fixed real $n\times p$ matrix $X$ of full column rank, $E\varepsilon=0$ and $\operatorname{Cov}(\varepsilon)=\Omega$. Derive the OLS covariance. Prove it equals $\sigma^2(X^{\mathsf T}X)^{-1}$ exactly when $X^{\mathsf T}(\Omega-\sigma^2I)X=0$. For $p<n$, construct a positive-definite nonspherical $\Omega$ with that equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the estimation error as a fixed linear transformation of the noise.

</details>

<details>
<summary>Hint 2</summary>

For the construction, change the covariance only on the orthogonal complement of the column space of $X$.

</details>

<details>
<summary>Model proof</summary>

OLS only observes the compression of the error covariance onto the design space.

1. Set $A=(X^{\mathsf T}X)^{-1}X^{\mathsf T}$. Then $\widehat\beta-\beta=A\varepsilon$, so $\operatorname{Cov}(\widehat\beta)=(X^{\mathsf T}X)^{-1}X^{\mathsf T}\Omega X(X^{\mathsf T}X)^{-1}$.
2. Multiplying the proposed spherical covariance equality on both sides by $X^{\mathsf T}X$ gives exactly $X^{\mathsf T}(\Omega-\sigma^2I)X=0$. This does not imply equality of the full covariance matrices.
3. For $\sigma^2>0$ and $\tau>0$, let $H=X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$ and $\Omega=\sigma^2I+\tau(I-H)$. Its eigenvalues are $\sigma^2$ on the design space and $\sigma^2+\tau$ on its nonzero orthogonal complement, so it is positive definite and nonspherical. Since $(I-H)X=0$, it has the required OLS covariance.

**Self-assessment rubric**

- Derive the sandwich expression from the estimation error.
- Establish the exact equivalent condition without asserting spherical errors are necessary.
- Verify positive definiteness, nonsphericity and the vanishing compressed perturbation.

</details>
