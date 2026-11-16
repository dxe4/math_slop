# Separate convergence from absolute convergence

*Hard · [Real analysis](index.md)*

Prove the series $\sum_{n=1}^{\infty}(-1)^{n+1}/\sqrt n$ converges but does not converge absolutely. You may use the alternating-series criterion and divergence of the harmonic series.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Verify monotone decay to zero before applying the alternating criterion.

</details>

<details>
<summary>Hint 2</summary>

Compare the positive absolute terms with harmonic terms.

</details>

<details>
<summary>Model proof</summary>

A valid alternating criterion does not assert absolute convergence.

1. The positive magnitudes 1/sqrt(n) decrease to zero, so the alternating-series criterion gives convergence.
2. For n&gt;=1, sqrt(n)&lt;=n and hence 1/sqrt(n)&gt;=1/n.
3. The absolute series therefore dominates the divergent harmonic series and diverges, proving conditional rather than absolute convergence.

**Self-assessment rubric**

- Check both monotone magnitude decrease and limit zero.
- Give the correct comparison direction for absolute values.
- State clearly that convergence and absolute convergence differ here.

</details>
