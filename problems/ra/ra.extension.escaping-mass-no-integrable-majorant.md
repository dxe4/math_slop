# Prove a failure of domination using disjoint supports

*Medium · [Real analysis](index.md)*

On \[0,infinity) define $f_n=n\,1_{(n,n+1/n)}$. Prove f\_n tends pointwise to zero, every integral is one, and no single integrable nonnegative function g dominates all f\_n almost everywhere.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The open supports are pairwise disjoint.

</details>

<details>
<summary>Hint 2</summary>

Integrate any proposed majorant over finitely many of those disjoint intervals.

</details>

<details>
<summary>Model proof</summary>

Mass can escape to later disjoint regions while every fixed point eventually sees zero.

1. The intervals (n,n+1/n) are pairwise disjoint; for n=1 the next interval starts at its excluded endpoint, and later lengths are below one. Thus every fixed point lies in at most one support and f\_n tends pointwise to zero.
2. Each function has height n and support length 1/n, so its integral is one.
3. If an integrable g&gt;=0 dominated every f\_n almost everywhere, a countable union of the exceptional null sets would still be null. On the first N disjoint supports, integration would give integral g&gt;=sum\_(n=1)^N integral f\_n=N for every N, a contradiction. Hence dominated convergence cannot be invoked with such a common majorant.

**Self-assessment rubric**

- Prove the supports are disjoint and obtain actual pointwise convergence.
- Compute the finite mass of each term.
- Control the common null exception and force an impossible majorant integral.

</details>
