# Cramer rao bernoulli

*Medium · [Statistics and probability](index.md)*

Let $X_1,\ldots,X_n$ be independent $\operatorname{Bernoulli}(p)$ variables, with integer $n\ge1$ and $0<p<1$. For estimators that are fixed real-valued functions of these observations and unbiased for $p$ throughout $(0,1)$, derive the Cramér–Rao variance bound and prove that the sample mean attains it.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the finite sum expressing unbiasedness to relate an estimator to the total score.

</details>

<details>
<summary>Hint 2</summary>

Apply Cauchy–Schwarz to that covariance, then compare the resulting bound with the sample mean variance.

</details>

<details>
<summary>Model proof</summary>

The finite sample space justifies differentiation and turns unbiasedness into a score-covariance identity.

1. The total score is $S_p=\sum_i(X_i-p)/[p(1-p)]$. Each centered term has mean zero, so $E_pS_p=0$, and independence gives $E_pS_p^2=n/[p(1-p)]$.
2. For an estimator $T$ as specified, $E_pT=p$ is a finite sum over $\{0,1\}^n$, with a parameter-independent statistic and support. Differentiating term by term yields $1=E_p[T S_p]=\operatorname{Cov}_p(T,S_p)$.
3. Cauchy–Schwarz implies $1\le\operatorname{Var}_p(T)\operatorname{Var}_p(S_p)$, so $\operatorname{Var}_p(T)\ge p(1-p)/n$. All quantities are finite because the sample space is finite.
4. The sample mean satisfies $E_p\overline X=p$ and $\operatorname{Var}_p(\overline X)=p(1-p)/n$, attaining the bound. Indeed $\overline X-p=[p(1-p)/n]S_p$, the equality case. The proof is for interior $p$, not a division by zero at the endpoints.

**Self-assessment rubric**

- Justify differentiating unbiasedness on fixed finite support.
- Compute total score variance and apply Cauchy–Schwarz.
- Verify unbiasedness, exact sample-mean variance, and equality with the bound.

</details>
