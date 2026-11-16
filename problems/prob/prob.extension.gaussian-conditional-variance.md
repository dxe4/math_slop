# Residual variance in a joint Gaussian law

*Medium · [Probability problems](index.md)*

Centred jointly Gaussian real variables satisfy $\operatorname{Var}(X)=4$, $\operatorname{Var}(Y)=9$ and $\operatorname{Cov}(X,Y)=2$. Find the constant value of $\operatorname{Var}(Y\mid\sigma(X))$.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Checks the constant conditional variance for the stated joint Gaussian law only; uncorrelated variables without joint Gaussianity are outside this contract."}}
```

<details>
<summary>Hint 1</summary>

Remove the linear projection of $Y$ on $X$.

</details>

<details>
<summary>Hint 2</summary>

Choose the coefficient so that the Gaussian residual is uncorrelated with $X$. Joint Gaussianity then gives independence, allowing the residual variance to be used conditionally.

</details>

<details>
<summary>Worked solution</summary>

The Gaussian residual is independent of the observed coordinate.

1. Set $R=Y-\tfrac12X$, since $\operatorname{Cov}(X,Y)/\operatorname{Var}(X)=2/4=1/2$. Then $\operatorname{Cov}(R,X)=2-(1/2)4=0$.
2. The pair $(R,X)$ is jointly Gaussian as a linear image of $(X,Y)$. Zero covariance therefore implies independence. Its residual variance is $9+(1/2)^2 4-2(1/2)2=8$.
3. Given $\sigma(X)$, the term $X/2$ is known while the independent centred residual keeps mean zero and variance eight. Hence the conditional variance of $Y=X/2+R$ equals eight almost surely.

The independent residual $Y-X/2$ has variance eight, which is the conditional variance.

</details>
