# Complete sufficiency and an exponential target

*Hard · [Statistics and probability](index.md)*

Let $X_1,\ldots,X_n$ be independent $\operatorname{Poisson}(\lambda)$ variables, with $n\ge2$ and $\lambda>0$. Prove that $T=\sum_iX_i$ is complete and sufficient. Then find the unique uniformly minimum-variance unbiased estimator of $e^{-\lambda}$ among estimators with finite second moments at every $\lambda$. You may use uniqueness of power-series coefficients and the conditional variance identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Condition the full sample on its total and look for a conditional law that loses the unknown parameter.

</details>

<details>
<summary>Hint 2</summary>

For completeness, multiply a zero-expectation identity by the normalizing exponential. For the target estimator, use the probability-generating function of the total.

</details>

<details>
<summary>Model proof</summary>

The Poisson generating function supplies an estimator, while completeness makes Rao–Blackwellization unique.

1. The total has law $\operatorname{Poisson}(n\lambda)$. Conditional on $T=t$, a nonnegative integer vector $x$ summing to $t$ has probability $t!/(n^t\prod_i x_i!)$, independent of $\lambda$. This proves sufficiency.
2. If $E_\lambda|h(T)|<\infty$ and $E_\lambda h(T)=0$ for every $\lambda>0$, then $\sum_{t\ge0}h(t)(n\lambda)^t/t!=0$. Absolute convergence for every positive argument makes this a power series of infinite radius. Uniqueness of its coefficients implies $h(t)=0$ for all $t$, proving completeness.
3. For $a=1-1/n$, $E_\lambda[a^T]=\exp(n\lambda(a-1))=e^{-\lambda}$. Thus $g(T)=(1-1/n)^T$ is unbiased and bounded.
4. For any unbiased estimator $U$ in the stated class, sufficiency gives a parameter-independent function $r(T)=E[U\mid T]$. Completeness applied to $r-g$ gives $r(T)=g(T)$ almost surely at every parameter.
5. The conditional variance identity gives $\operatorname{Var}_\lambda(U)=\operatorname{Var}_\lambda(g(T))+E_\lambda\operatorname{Var}(U\mid T)\ge\operatorname{Var}_\lambda(g(T))$. Equality requires $U=g(T)$ almost surely, proving the stated uniqueness.

**Self-assessment rubric**

- Compute the conditional sample law and establish sufficiency.
- Justify the convergent power-series argument for completeness.
- Construct and verify a bounded unbiased estimator.
- Use completeness and conditional variance to prove unique minimum variance.

</details>
