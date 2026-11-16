# Expand a bounded stopping sum using predictable indicators

*Medium · [Probability problems](index.md)*

Let $X_1,X_2,\ldots$ be independent Bernoulli$(p)$ variables with $0<p<1$, and let $T\le N$ be a nonnegative integer stopping time for $\mathcal F_n=\sigma(X_1,\ldots,X_n)$. Prove $E[\sum_{k=1}^T X_k]=pE[T]$, allowing $T=0$. Do not invoke an unbounded optional-stopping theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the stopped sum as a finite sum with indicators of ${Tge k}$.

</details>

<details>
<summary>Hint 2</summary>

A stopping time makes this indicator measurable before observing $X_k$.

</details>

<details>
<summary>Model proof</summary>

Predictable indicators permit termwise centering without any limit theorem.

1. Pathwise, $\sum_{k=1}^T X_k=\sum_{k=1}^NX_k1_{\{T\ge k\}}$ and $T=\sum_{k=1}^N1_{\{T\ge k\}}$.
2. The event $\{T\ge k\}=\{T\le k-1\}^c$ belongs to $\mathcal F_{k-1}$, while $X_k$ is independent of that information. Thus $E[X_k1_{\{T\ge k\}}]=pP(T\ge k)$.
3. Sum these finitely many equalities to obtain the result. Empty sums for $T=0$ already fit both pathwise identities, and boundedness makes every expectation exchange immediate.

**Self-assessment rubric**

- Expand both the stopped sum and the stopping time into finite indicator sums.
- Use the correct pre-observation sigma-field for each indicator.
- Combine the finite equalities without assuming an unbounded stopping theorem.

</details>
