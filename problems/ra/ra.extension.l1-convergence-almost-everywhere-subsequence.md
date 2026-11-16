# Extract almost-everywhere convergence from a summable error schedule

*Medium · [Real analysis](index.md)*

Suppose real integrable functions satisfy $||f_n-f||_1\to0$ on a measure space. Prove some subsequence converges to f almost everywhere. Construct its error schedule explicitly and prove the needed exceptional-set estimate without citing dominated convergence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose indices n\_k with L1 error at most 4^(-k).

</details>

<details>
<summary>Hint 2</summary>

The sets where pointwise error exceeds 2^(-k) have summable measures.

</details>

<details>
<summary>Model proof</summary>

A fast mean-error subsequence leaves only a null set with infinitely many large pointwise errors.

1. Choose strictly increasing n\_k with \|\|f\_(n\_k)-f\|\|\_1&lt;=4^(-k), possible by convergence. For A\_k={\|f\_(n\_k)-f\|&gt;2^(-k)}, integrating the pointwise level bound gives mu(A\_k)&lt;=2^k\*4^(-k)=2^(-k).
2. For every N, the set of points belonging to infinitely many A\_k is contained in union\_(k&gt;=N) A\_k, whose measure is at most sum\_(k&gt;=N) 2^(-k). This tail tends to zero, so the infinitely-often set is null.
3. Outside that null set only finitely many bad events occur. Hence eventually \|f\_(n\_k)(x)-f(x)\|&lt;=2^(-k), tending to zero. This proves the almost-everywhere subsequence convergence with a fully specified schedule.

**Self-assessment rubric**

- Choose a genuine subsequence satisfying the quantitative mean-error bounds.
- Derive the level-set and summable union-tail estimates.
- Convert finitely many exceptional events into eventual shrinking errors.

</details>
