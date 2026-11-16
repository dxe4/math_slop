# A minimax bound from diffuse proper priors

*Hard · [Statistics and probability](index.md)*

Under squared-error loss, observe $X\sim N(\theta,1)$ with unrestricted $\theta\in\mathbb R$. Prove that $\delta(X)=X$ is minimax among all measurable estimators. Your argument must establish a lower bound against arbitrary estimators, not merely compare a chosen family of linear rules.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A worst-case risk is at least the risk averaged over any proper prior.

</details>

<details>
<summary>Hint 2</summary>

Look for a family of proper priors whose optimal average risks approach the constant risk of the observation itself.

</details>

<details>
<summary>Model proof</summary>

Diffuse normal priors force the minimax risk up to the observation risk.

1. The rule $\delta(X)=X$ has risk $E_\theta(X-\theta)^2=1$ for every $\theta$, so the minimax value is at most one.
2. For a proper prior $\theta\sim N(0,\tau^2)$, completing the square gives posterior variance $v_\tau=\tau^2/(1+\tau^2)$ and posterior mean $m_\tau(X)=\tau^2X/(1+\tau^2)$.
3. For any estimator $d$, conditional squared loss decomposes as $E[(d(X)-\theta)^2\mid X]=(d(X)-m_\tau(X))^2+v_\tau\ge v_\tau$. This remains a valid lower bound if the risk is infinite.
4. Therefore $\sup_\theta R(\theta,d)\ge\int R(\theta,d)\,\pi_\tau(d\theta)\ge v_\tau$. Letting $\tau\to\infty$ proves every estimator has worst-case risk at least one.
5. The upper and lower bounds coincide. Only proper priors were used, so no optimization under an improper uniform prior was required.

**Self-assessment rubric**

- Compute the risk of the observation estimator.
- Derive the posterior variance and its Bayes-risk lower bound.
- Apply the bound to arbitrary estimators and take the diffuse-prior limit.

</details>
