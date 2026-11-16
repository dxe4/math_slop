# Explain why one threshold cannot serve every tolerance

*Hard · [Real analysis](index.md)*

Prove $2+1/n$ converges to 2, but there is no positive integer N such that for every epsilon&gt;0 and every n&gt;=N the error is below epsilon. Identify the changed quantifier order.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For convergence the threshold may depend on epsilon.

</details>

<details>
<summary>Hint 2</summary>

To refute a fixed threshold, choose a smaller tolerance after that threshold is supplied.

</details>

<details>
<summary>Model proof</summary>

The order of tolerance and threshold choices is essential.

1. For each positive epsilon, choose an integer N&gt;1/epsilon. Then n&gt;=N implies 1/n&lt;=1/N&lt;epsilon, proving convergence.
2. If one N were required to work for every tolerance, choose epsilon=1/(2N) and then n=N; the error 1/N is too large.
3. Thus convergence has the order for every tolerance there exists a threshold, rather than one threshold for all tolerances.

**Self-assessment rubric**

- Construct a threshold after the tolerance is given.
- For any proposed fixed threshold choose a violating positive tolerance and tail index.
- State precisely which order of choices was changed.

</details>
