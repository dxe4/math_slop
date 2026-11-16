# Ar one autocorrelation

*Medium · [Statistics and probability](index.md)*

A real weakly stationary process satisfies $X_t=\tfrac12 X_{t-1}+\varepsilon_t$, has positive finite variance, and each innovation $\varepsilon_t$ is uncorrelated with every earlier $X_s$, $s<t$. What is its lag-two correlation $\rho(2)=\operatorname{Cov}(X_t,X_{t-2})/\operatorname{Var}(X_t)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Take covariance of the recursion with an earlier process value; the innovation term vanishes by assumption.

</details>

<details>
<summary>Hint 2</summary>

Apply that covariance relation twice, using stationarity for the common variance.

</details>

<details>
<summary>Worked solution</summary>

The innovation orthogonality gives the autocovariance recursion.

1. Let $\gamma(h)=\operatorname{Cov}(X_t,X_{t-h})$. Taking covariance with $X_{t-1}$ gives $\gamma(1)=(1/2)\gamma(0)$, because $\varepsilon_t$ is uncorrelated with the past.
2. Taking covariance with $X_{t-2}$ similarly gives $\gamma(2)=(1/2)\operatorname{Cov}(X_{t-1},X_{t-2})=(1/2)\gamma(1)$ by stationarity.
3. Thus $\gamma(2)=\gamma(0)/4$. Since $\gamma(0)>0$, $\rho(2)=1/4$. The past-innovation condition, not a coefficient alone, justifies this calculation.

</details>
