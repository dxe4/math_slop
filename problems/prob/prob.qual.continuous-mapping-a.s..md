# Intersect the two full-probability events before composing

*Easy · [Probability problems](index.md)*

Let real random variables $X_n\to X$ almost surely, and let a Borel function $g:\mathbf R\to\mathbf R$ be continuous at $X$ almost surely. Prove $g(X_n)\to g(X)$ almost surely. The function need not be continuous at every real number.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Work on the event where both the sequence converges and the function is continuous at its limit.

</details>

<details>
<summary>Hint 2</summary>

Apply the deterministic sequential definition of continuity separately on each such outcome.

</details>

<details>
<summary>Model proof</summary>

Continuity is needed only at the realized almost-sure limits.

1. Let $A$ be the probability-one event on which $X_n(\omega)\to X(\omega)$, and let $B$ be a probability-one event on which $g$ is continuous at $X(\omega)$. Their intersection has probability one.
2. For every $\omega\in A\cap B$, deterministic continuity at $X(\omega)$ sends the convergent sequence $X_n(\omega)$ to $g(X_n(\omega))\to g(X(\omega))$.
3. Thus the composed convergence holds on a probability-one event. Borel measurability ensures the compositions are random variables; no global continuity assumption is used.

**Self-assessment rubric**

- Intersect the two relevant full-probability conditions.
- Apply continuity at the realized limit on that common event.
- Retain the local continuity scope and measurability requirement.

</details>
