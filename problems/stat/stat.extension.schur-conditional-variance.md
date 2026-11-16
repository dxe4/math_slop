# Schur conditional variance

*Medium · [Statistics and probability](index.md)*

For jointly Gaussian real variables $X,Y$ with $\operatorname{Var}(X)>0$, prove $\operatorname{Var}(Y\mid X)=\operatorname{Var}(Y)-\operatorname{Cov}(X,Y)^2/\operatorname{Var}(X)$ almost surely, and prove that this value is nonnegative. You may use the fact that uncorrelated jointly Gaussian variables are independent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Subtract a multiple of the centered conditioning variable from the centered response. Choose the multiple to cancel their covariance.

</details>

<details>
<summary>Hint 2</summary>

Use Gaussian independence to identify the remaining conditional randomness, then expand its variance.

</details>

<details>
<summary>Model proof</summary>

An independent Gaussian residual supplies the conditional variance.

1. Set $X_c=X-E[X]$, $Y_c=Y-E[Y]$, $c=\operatorname{Cov}(X,Y)$, $v=\operatorname{Var}(X)>0$, and $R=Y_c-(c/v)X_c$.
2. Then $\operatorname{Cov}(R,X_c)=c-(c/v)v=0$. As linear transformations of the jointly Gaussian pair, $R$ and $X_c$ are jointly Gaussian. The stated property makes them independent, including when $R$ is constant.
3. Given $X$, the term $(c/v)X_c+E[Y]$ is fixed, while $R$ has its unconditional distribution. Thus $\operatorname{Var}(Y\mid X)=\operatorname{Var}(R)$ almost surely.
4. Expansion gives $\operatorname{Var}(R)=\operatorname{Var}(Y)+(c^2/v^2)v-2(c/v)c=\operatorname{Var}(Y)-c^2/v\ge0$, since it is a variance. Equality corresponds to a zero-variance residual.

**Self-assessment rubric**

- Choose the residual coefficient and verify zero covariance.
- Explain why zero covariance yields independence for this pair.
- Compute the conditional variance and its nonnegativity, including the degenerate case.

</details>
