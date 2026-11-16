# Extract an almost-surely convergent subsequence

*Medium · [Probability problems](index.md)*

Let real random variables $X_n,X$ on the same probability space satisfy $X_n\to X$ in probability. Prove that a deterministic strictly increasing sequence of indices $(n_k)$ exists such that $X_{n_k}\to X$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Select a subsequence whose deviation thresholds shrink to zero while the corresponding deviation probabilities form a summable series.

</details>

<details>
<summary>Hint 2</summary>

Choose each new index beyond the previous one using convergence in probability, then apply the first Borel–Cantelli lemma to the selected deviation events.

</details>

<details>
<summary>Model proof</summary>

Thin the sequence until the failure probabilities become summable.

1. Set $n_0=0$. For each $k\ge1$, convergence in probability at the fixed positive threshold $2^{-k}$ gives an $N_k$ such that $P(|X_n-X|>2^{-k})\le2^{-k}$ whenever $n\ge N_k$. Choose a deterministic $n_k\ge\max(N_k,n_{k-1}+1)$.
2. The events $E_k=\{|X_{n_k}-X|>2^{-k}\}$ satisfy $\sum_kP(E_k)\le\sum_k2^{-k}<\infty$. The first Borel–Cantelli lemma gives $P(E_k\text{ infinitely often})=0$, without requiring independence.
3. Outside that null event, there is a finite random $K$ after which $|X_{n_k}-X|\le2^{-k}$ for every $k\ge K$. Since $2^{-k}\to0$, this implies convergence to zero of the deviations on that probability-one set, proving almost-sure convergence.

Select summably rare shrinking deviations; Borel–Cantelli makes their failures finite almost surely, yielding convergence.

**Self-assessment rubric**

- Construct deterministic strictly increasing indices with shrinking thresholds and summable deviation probabilities.
- Apply the first Borel–Cantelli lemma correctly without independence.
- Translate finitely many failures into convergence on one common probability-one event.

</details>
